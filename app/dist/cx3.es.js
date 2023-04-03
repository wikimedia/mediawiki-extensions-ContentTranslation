/*@nomin*/
var od = Object.defineProperty, sd = Object.defineProperties;
var ad = Object.getOwnPropertyDescriptors;
var qi = Object.getOwnPropertySymbols;
var id = Object.prototype.hasOwnProperty, rd = Object.prototype.propertyIsEnumerable;
var Gi = (e, t, n) => t in e ? od(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ct = (e, t) => {
  for (var n in t || (t = {}))
    id.call(t, n) && Gi(e, n, t[n]);
  if (qi)
    for (var n of qi(t))
      rd.call(t, n) && Gi(e, n, t[n]);
  return e;
}, Ot = (e, t) => sd(e, ad(t));
var ld = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
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
var Ax = ld((vt) => {
  function Cn(e, t) {
    const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
    for (let s = 0; s < o.length; s++)
      n[o[s]] = !0;
    return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
  }
  function nt(e) {
    if (ie(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const o = e[n], s = Ue(o) ? gd(o) : nt(o);
        if (s)
          for (const a in s)
            t[a] = s[a];
      }
      return t;
    } else {
      if (Ue(e))
        return e;
      if (Pe(e))
        return e;
    }
  }
  const cd = /;(?![^(]*\))/g, ud = /:([^]+)/, dd = new RegExp("\\/\\*.*?\\*\\/", "gs");
  function gd(e) {
    const t = {};
    return e.replace(dd, "").split(cd).forEach((n) => {
      if (n) {
        const o = n.split(ud);
        o.length > 1 && (t[o[0].trim()] = o[1].trim());
      }
    }), t;
  }
  function ge(e) {
    let t = "";
    if (Ue(e))
      t = e;
    else if (ie(e))
      for (let n = 0; n < e.length; n++) {
        const o = ge(e[n]);
        o && (t += o + " ");
      }
    else if (Pe(e))
      for (const n in e)
        e[n] && (t += n + " ");
    return t.trim();
  }
  function ni(e) {
    if (!e)
      return null;
    let { class: t, style: n } = e;
    return t && !Ue(t) && (e.class = ge(t)), n && (e.style = nt(n)), e;
  }
  const fd = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", pd = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", hd = /* @__PURE__ */ Cn(fd), md = /* @__PURE__ */ Cn(pd), _d = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vd = /* @__PURE__ */ Cn(_d);
  function ul(e) {
    return !!e || e === "";
  }
  function yd(e, t) {
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
    if (n = Fo(e), o = Fo(t), n || o)
      return e === t;
    if (n = ie(e), o = ie(t), n || o)
      return n && o ? yd(e, t) : !1;
    if (n = Pe(e), o = Pe(t), n || o) {
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
  const ae = (e) => Ue(e) ? e : e == null ? "" : ie(e) || Pe(e) && (e.toString === pl || !ce(e.toString)) ? JSON.stringify(e, dl, 2) : String(e), dl = (e, t) => t && t.__v_isRef ? dl(e, t.value) : In(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, s]) => (n[`${o} =>`] = s, n), {})
  } : fl(t) ? {
    [`Set(${t.size})`]: [...t.values()]
  } : Pe(t) && !ie(t) && !hl(t) ? String(t) : t, Ie = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, lo = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], tt = () => {
  }, gl = () => !1, bd = /^on[^a-z]/, Go = (e) => bd.test(e), Cs = (e) => e.startsWith("onUpdate:"), Ge = Object.assign, oi = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, Sd = Object.prototype.hasOwnProperty, we = (e, t) => Sd.call(e, t), ie = Array.isArray, In = (e) => Ko(e) === "[object Map]", fl = (e) => Ko(e) === "[object Set]", Ki = (e) => Ko(e) === "[object Date]", ce = (e) => typeof e == "function", Ue = (e) => typeof e == "string", Fo = (e) => typeof e == "symbol", Pe = (e) => e !== null && typeof e == "object", si = (e) => Pe(e) && ce(e.then) && ce(e.catch), pl = Object.prototype.toString, Ko = (e) => pl.call(e), ai = (e) => Ko(e).slice(8, -1), hl = (e) => Ko(e) === "[object Object]", ii = (e) => Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, hs = /* @__PURE__ */ Cn(
    // the leading comma is intentional so empty string "" is also included
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ), wd = /* @__PURE__ */ Cn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), Is = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  }, Cd = /-(\w)/g, Rt = Is((e) => e.replace(Cd, (t, n) => n ? n.toUpperCase() : "")), Ed = /\B([A-Z])/g, Jt = Is((e) => e.replace(Ed, "-$1").toLowerCase()), Hn = Is((e) => e.charAt(0).toUpperCase() + e.slice(1)), dn = Is((e) => e ? `on${Hn(e)}` : ""), Mo = (e, t) => !Object.is(e, t), oo = (e, t) => {
    for (let n = 0; n < e.length; n++)
      e[n](t);
  }, Es = (e, t, n) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      value: n
    });
  }, xd = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, Ad = (e) => {
    const t = Ue(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Wi;
  const ml = () => Wi || (Wi = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
  function xa(e, ...t) {
    console.warn(`[Vue warn] ${e}`, ...t);
  }
  let Dt;
  class _l {
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
        ({}).NODE_ENV !== "production" && xa("cannot run an inactive effect scope.");
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
  function kd(e) {
    return new _l(e);
  }
  function Td(e, t = Dt) {
    t && t.active && t.effects.push(e);
  }
  function Dd() {
    return Dt;
  }
  const Oo = (e) => {
    const t = new Set(e);
    return t.w = 0, t.n = 0, t;
  }, vl = (e) => (e.w & bn) > 0, yl = (e) => (e.n & bn) > 0, Ld = ({ deps: e }) => {
    if (e.length)
      for (let t = 0; t < e.length; t++)
        e[t].w |= bn;
  }, Pd = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let o = 0; o < t.length; o++) {
        const s = t[o];
        vl(s) && !yl(s) ? s.delete(e) : t[n++] = s, s.w &= ~bn, s.n &= ~bn;
      }
      t.length = n;
    }
  }, Aa = /* @__PURE__ */ new WeakMap();
  let Ao = 0, bn = 1;
  const ka = 30;
  let gt;
  const $n = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), Ta = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
  class ri {
    constructor(t, n = null, o) {
      this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Td(this, o);
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
        return this.parent = gt, gt = this, yn = !0, bn = 1 << ++Ao, Ao <= ka ? Ld(this) : Xi(this), this.fn();
      } finally {
        Ao <= ka && Pd(this), bn = 1 << --Ao, gt = this.parent, yn = n, this.parent = void 0, this.deferStop && this.stop();
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
      let o = Aa.get(e);
      o || Aa.set(e, o = /* @__PURE__ */ new Map());
      let s = o.get(n);
      s || o.set(n, s = Oo());
      const a = {}.NODE_ENV !== "production" ? { effect: gt, target: e, type: t, key: n } : void 0;
      Da(s, a);
    }
  }
  function Da(e, t) {
    let n = !1;
    Ao <= ka ? yl(e) || (e.n |= bn, n = !vl(e)) : n = !e.has(gt), n && (e.add(gt), gt.deps.push(e), {}.NODE_ENV !== "production" && gt.onTrack && gt.onTrack(Object.assign({ effect: gt }, t)));
  }
  function Zt(e, t, n, o, s, a) {
    const i = Aa.get(e);
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
          ie(e) ? ii(n) && r.push(i.get("length")) : (r.push(i.get($n)), In(e) && r.push(i.get(Ta)));
          break;
        case "delete":
          ie(e) || (r.push(i.get($n)), In(e) && r.push(i.get(Ta)));
          break;
        case "set":
          In(e) && r.push(i.get($n));
          break;
      }
    const l = {}.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: s, oldTarget: a } : void 0;
    if (r.length === 1)
      r[0] && ({}.NODE_ENV !== "production" ? io(r[0], l) : io(r[0]));
    else {
      const d = [];
      for (const c of r)
        c && d.push(...c);
      ({}).NODE_ENV !== "production" ? io(Oo(d), l) : io(Oo(d));
    }
  }
  function io(e, t) {
    const n = ie(e) ? e : [...e];
    for (const o of n)
      o.computed && Yi(o, t);
    for (const o of n)
      o.computed || Yi(o, t);
  }
  function Yi(e, t) {
    (e !== gt || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Ge({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
  }
  const Nd = /* @__PURE__ */ Cn("__proto__,__v_isRef,__isVue"), Sl = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Fo)
  ), Fd = /* @__PURE__ */ $s(), Md = /* @__PURE__ */ $s(!1, !0), Od = /* @__PURE__ */ $s(!0), Bd = /* @__PURE__ */ $s(!0, !0), Ji = /* @__PURE__ */ Id();
  function Id() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function(...n) {
        const o = fe(this);
        for (let a = 0, i = this.length; a < i; a++)
          ft(o, "get", a + "");
        const s = o[t](...n);
        return s === -1 || s === !1 ? o[t](...n.map(fe)) : s;
      };
    }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function(...n) {
        Kn();
        const o = fe(this)[t].apply(this, n);
        return Wn(), o;
      };
    }), e;
  }
  function $d(e) {
    const t = fe(this);
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
        if (i && we(Ji, s))
          return Reflect.get(Ji, s, a);
        if (s === "hasOwnProperty")
          return $d;
      }
      const r = Reflect.get(o, s, a);
      return (Fo(s) ? Sl.has(s) : Nd(s)) || (e || ft(o, "get", s), t) ? r : Xe(r) ? i && ii(s) ? r : r.value : Pe(r) ? e ? Ll(r) : Xn(r) : r;
    };
  }
  const Ud = /* @__PURE__ */ wl(), Rd = /* @__PURE__ */ wl(!0);
  function wl(e = !1) {
    return function(n, o, s, a) {
      let i = n[o];
      if (Sn(i) && Xe(i) && !Xe(s))
        return !1;
      if (!e && (!xs(s) && !Sn(s) && (i = fe(i), s = fe(s)), !ie(n) && Xe(i) && !Xe(s)))
        return i.value = s, !0;
      const r = ie(n) && ii(o) ? Number(o) < n.length : we(n, o), l = Reflect.set(n, o, s, a);
      return n === fe(a) && (r ? Mo(s, i) && Zt(n, "set", o, s, i) : Zt(n, "add", o, s)), l;
    };
  }
  function Vd(e, t) {
    const n = we(e, t), o = e[t], s = Reflect.deleteProperty(e, t);
    return s && n && Zt(e, "delete", t, void 0, o), s;
  }
  function zd(e, t) {
    const n = Reflect.has(e, t);
    return (!Fo(t) || !Sl.has(t)) && ft(e, "has", t), n;
  }
  function jd(e) {
    return ft(e, "iterate", ie(e) ? "length" : $n), Reflect.ownKeys(e);
  }
  const Cl = {
    get: Fd,
    set: Ud,
    deleteProperty: Vd,
    has: zd,
    ownKeys: jd
  }, El = {
    get: Od,
    set(e, t) {
      return {}.NODE_ENV !== "production" && xa(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
    },
    deleteProperty(e, t) {
      return {}.NODE_ENV !== "production" && xa(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
    }
  }, Hd = /* @__PURE__ */ Ge({}, Cl, {
    get: Md,
    set: Rd
  }), qd = /* @__PURE__ */ Ge({}, El, {
    get: Bd
  }), li = (e) => e, Us = (e) => Reflect.getPrototypeOf(e);
  function rs(e, t, n = !1, o = !1) {
    e = e.__v_raw;
    const s = fe(e), a = fe(t);
    n || (t !== a && ft(s, "get", t), ft(s, "get", a));
    const { has: i } = Us(s), r = o ? li : n ? ci : Bo;
    if (i.call(s, t))
      return r(e.get(t));
    if (i.call(s, a))
      return r(e.get(a));
    e !== s && e.get(t);
  }
  function ls(e, t = !1) {
    const n = this.__v_raw, o = fe(n), s = fe(e);
    return t || (e !== s && ft(o, "has", e), ft(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
  }
  function cs(e, t = !1) {
    return e = e.__v_raw, !t && ft(fe(e), "iterate", $n), Reflect.get(e, "size", e);
  }
  function Zi(e) {
    e = fe(e);
    const t = fe(this);
    return Us(t).has.call(t, e) || (t.add(e), Zt(t, "add", e, e)), this;
  }
  function Qi(e, t) {
    t = fe(t);
    const n = fe(this), { has: o, get: s } = Us(n);
    let a = o.call(n, e);
    a ? {}.NODE_ENV !== "production" && xl(n, o, e) : (e = fe(e), a = o.call(n, e));
    const i = s.call(n, e);
    return n.set(e, t), a ? Mo(t, i) && Zt(n, "set", e, t, i) : Zt(n, "add", e, t), this;
  }
  function er(e) {
    const t = fe(this), { has: n, get: o } = Us(t);
    let s = n.call(t, e);
    s ? {}.NODE_ENV !== "production" && xl(t, n, e) : (e = fe(e), s = n.call(t, e));
    const a = o ? o.call(t, e) : void 0, i = t.delete(e);
    return s && Zt(t, "delete", e, void 0, a), i;
  }
  function tr() {
    const e = fe(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? In(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
    return t && Zt(e, "clear", void 0, void 0, n), o;
  }
  function us(e, t) {
    return function(o, s) {
      const a = this, i = a.__v_raw, r = fe(i), l = t ? li : e ? ci : Bo;
      return !e && ft(r, "iterate", $n), i.forEach((d, c) => o.call(s, l(d), l(c), a));
    };
  }
  function ds(e, t, n) {
    return function(...o) {
      const s = this.__v_raw, a = fe(s), i = In(a), r = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, d = s[e](...o), c = n ? li : t ? ci : Bo;
      return !t && ft(a, "iterate", l ? Ta : $n), {
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
        console.warn(`${Hn(e)} operation ${n}failed: target is readonly.`, fe(this));
      }
      return e === "delete" ? !1 : this;
    };
  }
  function Gd() {
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
  const [Kd, Wd, Xd, Yd] = /* @__PURE__ */ Gd();
  function Rs(e, t) {
    const n = t ? e ? Yd : Xd : e ? Wd : Kd;
    return (o, s, a) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(we(n, s) && s in o ? n : o, s, a);
  }
  const Jd = {
    get: /* @__PURE__ */ Rs(!1, !1)
  }, Zd = {
    get: /* @__PURE__ */ Rs(!1, !0)
  }, Qd = {
    get: /* @__PURE__ */ Rs(!0, !1)
  }, eg = {
    get: /* @__PURE__ */ Rs(!0, !0)
  };
  function xl(e, t, n) {
    const o = fe(n);
    if (o !== n && t.call(e, o)) {
      const s = ai(e);
      console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  const Al = /* @__PURE__ */ new WeakMap(), kl = /* @__PURE__ */ new WeakMap(), Tl = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap();
  function tg(e) {
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
  function ng(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : tg(ai(e));
  }
  function Xn(e) {
    return Sn(e) ? e : Vs(e, !1, Cl, Jd, Al);
  }
  function og(e) {
    return Vs(e, !1, Hd, Zd, kl);
  }
  function Ll(e) {
    return Vs(e, !0, El, Qd, Tl);
  }
  function ro(e) {
    return Vs(e, !0, qd, eg, Dl);
  }
  function Vs(e, t, n, o, s) {
    if (!Pe(e))
      return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
    if (e.__v_raw && !(t && e.__v_isReactive))
      return e;
    const a = s.get(e);
    if (a)
      return a;
    const i = ng(e);
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
  function xs(e) {
    return !!(e && e.__v_isShallow);
  }
  function La(e) {
    return Un(e) || Sn(e);
  }
  function fe(e) {
    const t = e && e.__v_raw;
    return t ? fe(t) : e;
  }
  function Pl(e) {
    return Es(e, "__v_skip", !0), e;
  }
  const Bo = (e) => Pe(e) ? Xn(e) : e, ci = (e) => Pe(e) ? Ll(e) : e;
  function Nl(e) {
    yn && gt && (e = fe(e), {}.NODE_ENV !== "production" ? Da(e.dep || (e.dep = Oo()), {
      target: e,
      type: "get",
      key: "value"
    }) : Da(e.dep || (e.dep = Oo())));
  }
  function Fl(e, t) {
    e = fe(e);
    const n = e.dep;
    n && ({}.NODE_ENV !== "production" ? io(n, {
      target: e,
      type: "set",
      key: "value",
      newValue: t
    }) : io(n));
  }
  function Xe(e) {
    return !!(e && e.__v_isRef === !0);
  }
  function ne(e) {
    return Ml(e, !1);
  }
  function sg(e) {
    return Ml(e, !0);
  }
  function Ml(e, t) {
    return Xe(e) ? e : new ag(e, t);
  }
  class ag {
    constructor(t, n) {
      this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : fe(t), this._value = n ? t : Bo(t);
    }
    get value() {
      return Nl(this), this._value;
    }
    set value(t) {
      const n = this.__v_isShallow || xs(t) || Sn(t);
      t = n ? t : fe(t), Mo(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Bo(t), Fl(this, t));
    }
  }
  function co(e) {
    return Xe(e) ? e.value : e;
  }
  const ig = {
    get: (e, t, n) => co(Reflect.get(e, t, n)),
    set: (e, t, n, o) => {
      const s = e[t];
      return Xe(s) && !Xe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
    }
  };
  function Ol(e) {
    return Un(e) ? e : new Proxy(e, ig);
  }
  var Bl;
  class rg {
    constructor(t, n, o, s) {
      this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Bl] = !1, this._dirty = !0, this.effect = new ri(t, () => {
        this._dirty || (this._dirty = !0, Fl(this));
      }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
    }
    get value() {
      const t = fe(this);
      return Nl(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
    }
    set value(t) {
      this._setter(t);
    }
  }
  Bl = "__v_isReadonly";
  function lg(e, t, n = !1) {
    let o, s;
    const a = ce(e);
    a ? (o = e, s = {}.NODE_ENV !== "production" ? () => {
      console.warn("Write operation failed: computed value is readonly");
    } : tt) : (o = e.get, s = e.set);
    const i = new rg(o, s, a || !s, n);
    return {}.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
  }
  const Rn = [];
  function ms(e) {
    Rn.push(e);
  }
  function _s() {
    Rn.pop();
  }
  function B(e, ...t) {
    if ({}.NODE_ENV === "production")
      return;
    Kn();
    const n = Rn.length ? Rn[Rn.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = cg();
    if (o)
      Yt(o, n, 11, [
        e + t.join(""),
        n && n.proxy,
        s.map(({ vnode: a }) => `at <${Ys(n, a.type)}>`).join(`
`),
        s
      ]);
    else {
      const a = [`[Vue warn]: ${e}`, ...t];
      s.length && a.push(`
`, ...ug(s)), console.warn(...a);
    }
    Wn();
  }
  function cg() {
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
  function ug(e) {
    const t = [];
    return e.forEach((n, o) => {
      t.push(...o === 0 ? [] : [`
`], ...dg(n));
    }), t;
  }
  function dg({ vnode: e, recurseCount: t }) {
    const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Ys(e.component, e.type, o)}`, a = ">" + n;
    return e.props ? [s, ...gg(e.props), a] : [s + a];
  }
  function gg(e) {
    const t = [], n = Object.keys(e);
    return n.slice(0, 3).forEach((o) => {
      t.push(...Il(o, e[o]));
    }), n.length > 3 && t.push(" ..."), t;
  }
  function Il(e, t, n) {
    return Ue(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Xe(t) ? (t = Il(e, fe(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ce(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = fe(t), n ? t : [`${e}=`, t]);
  }
  function fg(e, t) {
    ({}).NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? B(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && B(`${t} is NaN - the duration expression might be incorrect.`));
  }
  const ui = {
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
  function Yt(e, t, n, o) {
    let s;
    try {
      s = o ? e(...o) : e();
    } catch (a) {
      zs(a, t, n);
    }
    return s;
  }
  function kt(e, t, n, o) {
    if (ce(e)) {
      const a = Yt(e, t, n, o);
      return a && si(a) && a.catch((i) => {
        zs(i, t, n);
      }), a;
    }
    const s = [];
    for (let a = 0; a < e.length; a++)
      s.push(kt(e[a], t, n, o));
    return s;
  }
  function zs(e, t, n, o = !0) {
    const s = t ? t.vnode : null;
    if (t) {
      let a = t.parent;
      const i = t.proxy, r = {}.NODE_ENV !== "production" ? ui[n] : n;
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
        Yt(l, null, 10, [e, i, r]);
        return;
      }
    }
    pg(e, n, s, o);
  }
  function pg(e, t, n, o = !0) {
    if ({}.NODE_ENV !== "production") {
      const s = ui[t];
      if (n && ms(n), B(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && _s(), o)
        throw e;
      console.error(e);
    } else
      console.error(e);
  }
  let Io = !1, Pa = !1;
  const it = [];
  let $t = 0;
  const uo = [];
  let It = null, gn = 0;
  const $l = /* @__PURE__ */ Promise.resolve();
  let di = null;
  const hg = 100;
  function Wo(e) {
    const t = di || $l;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function mg(e) {
    let t = $t + 1, n = it.length;
    for (; t < n; ) {
      const o = t + n >>> 1;
      $o(it[o]) < e ? t = o + 1 : n = o;
    }
    return t;
  }
  function js(e) {
    (!it.length || !it.includes(e, Io && e.allowRecurse ? $t + 1 : $t)) && (e.id == null ? it.push(e) : it.splice(mg(e.id), 0, e), Ul());
  }
  function Ul() {
    !Io && !Pa && (Pa = !0, di = $l.then(zl));
  }
  function _g(e) {
    const t = it.indexOf(e);
    t > $t && it.splice(t, 1);
  }
  function Rl(e) {
    ie(e) ? uo.push(...e) : (!It || !It.includes(e, e.allowRecurse ? gn + 1 : gn)) && uo.push(e), Ul();
  }
  function nr(e, t = Io ? $t + 1 : 0) {
    for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < it.length; t++) {
      const n = it[t];
      if (n && n.pre) {
        if ({}.NODE_ENV !== "production" && gi(e, n))
          continue;
        it.splice(t, 1), t--, n();
      }
    }
  }
  function Vl(e) {
    if (uo.length) {
      const t = [...new Set(uo)];
      if (uo.length = 0, It) {
        It.push(...t);
        return;
      }
      for (It = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), It.sort((n, o) => $o(n) - $o(o)), gn = 0; gn < It.length; gn++)
        ({}).NODE_ENV !== "production" && gi(e, It[gn]) || It[gn]();
      It = null, gn = 0;
    }
  }
  const $o = (e) => e.id == null ? 1 / 0 : e.id, vg = (e, t) => {
    const n = $o(e) - $o(t);
    if (n === 0) {
      if (e.pre && !t.pre)
        return -1;
      if (t.pre && !e.pre)
        return 1;
    }
    return n;
  };
  function zl(e) {
    Pa = !1, Io = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), it.sort(vg);
    const t = {}.NODE_ENV !== "production" ? (n) => gi(e, n) : tt;
    try {
      for ($t = 0; $t < it.length; $t++) {
        const n = it[$t];
        if (n && n.active !== !1) {
          if ({}.NODE_ENV !== "production" && t(n))
            continue;
          Yt(
            n,
            null,
            14
            /* ErrorCodes.SCHEDULER */
          );
        }
      }
    } finally {
      $t = 0, it.length = 0, Vl(e), Io = !1, di = null, (it.length || uo.length) && zl(e);
    }
  }
  function gi(e, t) {
    if (!e.has(t))
      e.set(t, 1);
    else {
      const n = e.get(t);
      if (n > hg) {
        const o = t.ownerInstance, s = o && Si(o.type);
        return B(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
      } else
        e.set(t, n + 1);
    }
  }
  let Vn = !1;
  const so = /* @__PURE__ */ new Set();
  ({}).NODE_ENV !== "production" && (ml().__VUE_HMR_RUNTIME__ = {
    createRecord: la(jl),
    rerender: la(Sg),
    reload: la(wg)
  });
  const qn = /* @__PURE__ */ new Map();
  function yg(e) {
    const t = e.type.__hmrId;
    let n = qn.get(t);
    n || (jl(t, e.type), n = qn.get(t)), n.instances.add(e);
  }
  function bg(e) {
    qn.get(e.type.__hmrId).instances.delete(e);
  }
  function jl(e, t) {
    return qn.has(e) ? !1 : (qn.set(e, {
      initialDef: To(t),
      instances: /* @__PURE__ */ new Set()
    }), !0);
  }
  function To(e) {
    return Cc(e) ? e.__vccOpts : e;
  }
  function Sg(e, t) {
    const n = qn.get(e);
    n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
      t && (o.render = t, To(o.type).render = t), o.renderCache = [], Vn = !0, o.update(), Vn = !1;
    }));
  }
  function wg(e, t) {
    const n = qn.get(e);
    if (!n)
      return;
    t = To(t), or(n.initialDef, t);
    const o = [...n.instances];
    for (const s of o) {
      const a = To(s.type);
      so.has(a) || (a !== n.initialDef && or(a, t), so.add(a)), s.appContext.optionsCache.delete(s.type), s.ceReload ? (so.add(a), s.ceReload(t.styles), so.delete(a)) : s.parent ? js(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window != "undefined" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
    Rl(() => {
      for (const s of o)
        so.delete(To(s.type));
    });
  }
  function or(e, t) {
    Ge(e, t);
    for (const n in e)
      n !== "__file" && !(n in t) && delete e[n];
  }
  function la(e) {
    return (t, n) => {
      try {
        return e(t, n);
      } catch (o) {
        console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
      }
    };
  }
  let Ut, ko = [], Na = !1;
  function Xo(e, ...t) {
    Ut ? Ut.emit(e, ...t) : Na || ko.push({ event: e, args: t });
  }
  function Hl(e, t) {
    var n, o;
    Ut = e, Ut ? (Ut.enabled = !0, ko.forEach(({ event: s, args: a }) => Ut.emit(s, ...a)), ko = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window != "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
      Hl(a, t);
    }), setTimeout(() => {
      Ut || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Na = !0, ko = []);
    }, 3e3)) : (Na = !0, ko = []);
  }
  function Cg(e, t) {
    Xo("app:init", e, t, {
      Fragment: Ce,
      Text: Jo,
      Comment: et,
      Static: bs
    });
  }
  function Eg(e) {
    Xo("app:unmount", e);
  }
  const xg = /* @__PURE__ */ fi(
    "component:added"
    /* DevtoolsHooks.COMPONENT_ADDED */
  ), ql = /* @__PURE__ */ fi(
    "component:updated"
    /* DevtoolsHooks.COMPONENT_UPDATED */
  ), Ag = /* @__PURE__ */ fi(
    "component:removed"
    /* DevtoolsHooks.COMPONENT_REMOVED */
  ), kg = (e) => {
    Ut && typeof Ut.cleanupBuffer == "function" && // remove the component if it wasn't buffered
    !Ut.cleanupBuffer(e) && Ag(e);
  };
  function fi(e) {
    return (t) => {
      Xo(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
    };
  }
  const Tg = /* @__PURE__ */ Gl(
    "perf:start"
    /* DevtoolsHooks.PERFORMANCE_START */
  ), Dg = /* @__PURE__ */ Gl(
    "perf:end"
    /* DevtoolsHooks.PERFORMANCE_END */
  );
  function Gl(e) {
    return (t, n, o) => {
      Xo(e, t.appContext.app, t.uid, t, n, o);
    };
  }
  function Lg(e, t, n) {
    Xo("component:emit", e.appContext.app, e, t, n);
  }
  function Pg(e, t, ...n) {
    if (e.isUnmounted)
      return;
    const o = e.vnode.props || Ie;
    if ({}.NODE_ENV !== "production") {
      const { emitsOptions: c, propsOptions: [u] } = e;
      if (c)
        if (!(t in c))
          (!u || !(dn(t) in u)) && B(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${dn(t)}" prop.`);
        else {
          const g = c[t];
          ce(g) && (g(...n) || B(`Invalid event arguments: event validation failed for event "${t}".`));
        }
    }
    let s = n;
    const a = t.startsWith("update:"), i = a && t.slice(7);
    if (i && i in o) {
      const c = `${i === "modelValue" ? "model" : i}Modifiers`, { number: u, trim: g } = o[c] || Ie;
      g && (s = n.map((f) => Ue(f) ? f.trim() : f)), u && (s = n.map(xd));
    }
    if ({}.NODE_ENV !== "production" && Lg(e, t, s), {}.NODE_ENV !== "production") {
      const c = t.toLowerCase();
      c !== t && o[dn(c)] && B(`Event "${c}" is emitted in component ${Ys(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Jt(t)}" instead of "${t}".`);
    }
    let r, l = o[r = dn(t)] || // also try camelCase event handler (#2249)
    o[r = dn(Rt(t))];
    !l && a && (l = o[r = dn(Jt(t))]), l && kt(l, e, 6, s);
    const d = o[r + "Once"];
    if (d) {
      if (!e.emitted)
        e.emitted = {};
      else if (e.emitted[r])
        return;
      e.emitted[r] = !0, kt(d, e, 6, s);
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
        c && (r = !0, Ge(i, c));
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    return !a && !r ? (Pe(e) && o.set(e, null), null) : (ie(a) ? a.forEach((l) => i[l] = null) : Ge(i, a), Pe(e) && o.set(e, i), i);
  }
  function Hs(e, t) {
    return !e || !Go(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), we(e, t[0].toLowerCase() + t.slice(1)) || we(e, Jt(t)) || we(e, t));
  }
  let Ye = null, Wl = null;
  function As(e) {
    const t = Ye;
    return Ye = e, Wl = e && e.type.__scopeId || null, t;
  }
  function S(e, t = Ye, n) {
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
  let Fa = !1;
  function ks() {
    Fa = !0;
  }
  function ca(e) {
    const { type: t, vnode: n, proxy: o, withProxy: s, props: a, propsOptions: [i], slots: r, attrs: l, emit: d, render: c, renderCache: u, data: g, setupState: f, ctx: m, inheritAttrs: w } = e;
    let E, k;
    const N = As(e);
    ({}).NODE_ENV !== "production" && (Fa = !1);
    try {
      if (n.shapeFlag & 4) {
        const Z = s || o;
        E = Lt(c.call(Z, Z, u, a, f, g, m)), k = l;
      } else {
        const Z = t;
        ({}).NODE_ENV !== "production" && l === a && ks(), E = Lt(Z.length > 1 ? Z(a, {}.NODE_ENV !== "production" ? {
          get attrs() {
            return ks(), l;
          },
          slots: r,
          emit: d
        } : { attrs: l, slots: r, emit: d }) : Z(
          a,
          null
          /* we know it doesn't need it */
        )), k = t.props ? l : Fg(l);
      }
    } catch (Z) {
      Lo.length = 0, zs(
        Z,
        e,
        1
        /* ErrorCodes.RENDER_FUNCTION */
      ), E = p(et);
    }
    let z = E, I;
    if ({}.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && ([z, I] = Ng(E)), k && w !== !1) {
      const Z = Object.keys(k), { shapeFlag: Ee } = z;
      if (Z.length) {
        if (Ee & 7)
          i && Z.some(Cs) && (k = Mg(k, i)), z = Vt(z, k);
        else if ({}.NODE_ENV !== "production" && !Fa && z.type !== et) {
          const X = Object.keys(l), W = [], be = [];
          for (let le = 0, pe = X.length; le < pe; le++) {
            const j = X[le];
            Go(j) ? Cs(j) || W.push(j[2].toLowerCase() + j.slice(3)) : be.push(j);
          }
          be.length && B(`Extraneous non-props attributes (${be.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), W.length && B(`Extraneous non-emits event listeners (${W.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
        }
      }
    }
    return n.dirs && ({}.NODE_ENV !== "production" && !sr(z) && B("Runtime directive used on component with non-element root node. The directives will not function as intended."), z = Vt(z), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !sr(z) && B("Component inside <Transition> renders non-element root node that cannot be animated."), z.transition = n.transition), {}.NODE_ENV !== "production" && I ? I(z) : E = z, As(N), E;
  }
  const Ng = (e) => {
    const t = e.children, n = e.dynamicChildren, o = Xl(t);
    if (!o)
      return [e, void 0];
    const s = t.indexOf(o), a = n ? n.indexOf(o) : -1, i = (r) => {
      t[s] = r, n && (a > -1 ? n[a] = r : r.patchFlag > 0 && (e.dynamicChildren = [...n, r]));
    };
    return [Lt(o), i];
  };
  function Xl(e) {
    let t;
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      if (go(o)) {
        if (o.type !== et || o.children === "v-if") {
          if (t)
            return;
          t = o;
        }
      } else
        return;
    }
    return t;
  }
  const Fg = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Go(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Mg = (e, t) => {
    const n = {};
    for (const o in e)
      (!Cs(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
    return n;
  }, sr = (e) => e.shapeFlag & 7 || e.type === et;
  function Og(e, t, n) {
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
  function Bg({ vnode: e, parent: t }, n) {
    for (; t && t.subTree === e; )
      (e = t.vnode).el = n, t = t.parent;
  }
  const Ig = (e) => e.__isSuspense;
  function $g(e, t) {
    t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : Rl(e);
  }
  function vs(e, t) {
    if (!He)
      ({}).NODE_ENV !== "production" && B("provide() can only be used inside setup().");
    else {
      let n = He.provides;
      const o = He.parent && He.parent.provides;
      o === n && (n = He.provides = Object.create(o)), n[e] = t;
    }
  }
  function Je(e, t, n = !1) {
    const o = He || Ye;
    if (o) {
      const s = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
      if (s && e in s)
        return s[e];
      if (arguments.length > 1)
        return n && ce(t) ? t.call(o.proxy) : t;
      ({}).NODE_ENV !== "production" && B(`injection "${String(e)}" not found.`);
    } else
      ({}).NODE_ENV !== "production" && B("inject() can only be used inside setup() or functional components.");
  }
  function Ug(e, t) {
    return pi(e, null, t);
  }
  const gs = {};
  function We(e, t, n) {
    return {}.NODE_ENV !== "production" && !ce(t) && B("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), pi(e, t, n);
  }
  function pi(e, t, { immediate: n, deep: o, flush: s, onTrack: a, onTrigger: i } = Ie) {
    ({}).NODE_ENV !== "production" && !t && (n !== void 0 && B('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && B('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
    const r = (I) => {
      B("Invalid watch source: ", I, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
    }, l = Dd() === (He == null ? void 0 : He.scope) ? He : null;
    let d, c = !1, u = !1;
    if (Xe(e) ? (d = () => e.value, c = xs(e)) : Un(e) ? (d = () => e, o = !0) : ie(e) ? (u = !0, c = e.some((I) => Un(I) || xs(I)), d = () => e.map((I) => {
      if (Xe(I))
        return I.value;
      if (Un(I))
        return Bn(I);
      if (ce(I))
        return Yt(
          I,
          l,
          2
          /* ErrorCodes.WATCH_GETTER */
        );
      ({}).NODE_ENV !== "production" && r(I);
    })) : ce(e) ? t ? d = () => Yt(
      e,
      l,
      2
      /* ErrorCodes.WATCH_GETTER */
    ) : d = () => {
      if (!(l && l.isUnmounted))
        return g && g(), kt(e, l, 3, [f]);
    } : (d = tt, {}.NODE_ENV !== "production" && r(e)), t && o) {
      const I = d;
      d = () => Bn(I());
    }
    let g, f = (I) => {
      g = N.onStop = () => {
        Yt(
          I,
          l,
          4
          /* ErrorCodes.WATCH_CLEANUP */
        );
      };
    }, m;
    if (Ro)
      if (f = tt, t ? n && kt(t, l, 3, [
        d(),
        u ? [] : void 0,
        f
      ]) : d(), s === "sync") {
        const I = Rf();
        m = I.__watcherHandles || (I.__watcherHandles = []);
      } else
        return tt;
    let w = u ? new Array(e.length).fill(gs) : gs;
    const E = () => {
      if (N.active)
        if (t) {
          const I = N.run();
          (o || c || (u ? I.some((Z, Ee) => Mo(Z, w[Ee])) : Mo(I, w))) && (g && g(), kt(t, l, 3, [
            I,
            // pass undefined as the old value when it's changed for the first time
            w === gs ? void 0 : u && w[0] === gs ? [] : w,
            f
          ]), w = I);
        } else
          N.run();
    };
    E.allowRecurse = !!t;
    let k;
    s === "sync" ? k = E : s === "post" ? k = () => mt(E, l && l.suspense) : (E.pre = !0, l && (E.id = l.uid), k = () => js(E));
    const N = new ri(d, k);
    ({}).NODE_ENV !== "production" && (N.onTrack = a, N.onTrigger = i), t ? n ? E() : w = N.run() : s === "post" ? mt(N.run.bind(N), l && l.suspense) : N.run();
    const z = () => {
      N.stop(), l && l.scope && oi(l.scope.effects, N);
    };
    return m && m.push(z), z;
  }
  function Rg(e, t, n) {
    const o = this.proxy, s = Ue(e) ? e.includes(".") ? Yl(o, e) : () => o[e] : e.bind(o, o);
    let a;
    ce(t) ? a = t : (a = t.handler, n = t);
    const i = He;
    fo(this);
    const r = pi(s, a.bind(o), n);
    return i ? fo(i) : jn(), r;
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
    if (!Pe(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
      return e;
    if (t.add(e), Xe(e))
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
  function Vg() {
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
  const Et = [Function, Array], zg = {
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
      const n = bi(), o = Vg();
      let s;
      return () => {
        const a = t.default && Ql(t.default(), !0);
        if (!a || !a.length)
          return;
        let i = a[0];
        if (a.length > 1) {
          let w = !1;
          for (const E of a)
            if (E.type !== et) {
              if ({}.NODE_ENV !== "production" && w) {
                B("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                break;
              }
              if (i = E, w = !0, {}.NODE_ENV === "production")
                break;
            }
        }
        const r = fe(e), { mode: l } = r;
        if ({}.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && B(`invalid <transition> mode: ${l}`), o.isLeaving)
          return ua(i);
        const d = ir(i);
        if (!d)
          return ua(i);
        const c = Ma(d, r, o, n);
        Oa(d, c);
        const u = n.subTree, g = u && ir(u);
        let f = !1;
        const { getTransitionKey: m } = d.type;
        if (m) {
          const w = m();
          s === void 0 ? s = w : w !== s && (s = w, f = !0);
        }
        if (g && g.type !== et && (!Mn(d, g) || f)) {
          const w = Ma(g, r, o, n);
          if (Oa(g, w), l === "out-in")
            return o.isLeaving = !0, w.afterLeave = () => {
              o.isLeaving = !1, n.update.active !== !1 && n.update();
            }, ua(i);
          l === "in-out" && d.type !== et && (w.delayLeave = (E, k, N) => {
            const z = Zl(o, g);
            z[String(g.key)] = g, E._leaveCb = () => {
              k(), E._leaveCb = void 0, delete c.delayedLeave;
            }, c.delayedLeave = N;
          });
        }
        return i;
      };
    }
  }, Jl = zg;
  function Zl(e, t) {
    const { leavingVNodes: n } = e;
    let o = n.get(t.type);
    return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
  }
  function Ma(e, t, n, o) {
    const { appear: s, mode: a, persisted: i = !1, onBeforeEnter: r, onEnter: l, onAfterEnter: d, onEnterCancelled: c, onBeforeLeave: u, onLeave: g, onAfterLeave: f, onLeaveCancelled: m, onBeforeAppear: w, onAppear: E, onAfterAppear: k, onAppearCancelled: N } = t, z = String(e.key), I = Zl(n, e), Z = (W, be) => {
      W && kt(W, o, 9, be);
    }, Ee = (W, be) => {
      const le = be[1];
      Z(W, be), ie(W) ? W.every((pe) => pe.length <= 1) && le() : W.length <= 1 && le();
    }, X = {
      mode: a,
      persisted: i,
      beforeEnter(W) {
        let be = r;
        if (!n.isMounted)
          if (s)
            be = w || r;
          else
            return;
        W._leaveCb && W._leaveCb(
          !0
          /* cancelled */
        );
        const le = I[z];
        le && Mn(e, le) && le.el._leaveCb && le.el._leaveCb(), Z(be, [W]);
      },
      enter(W) {
        let be = l, le = d, pe = c;
        if (!n.isMounted)
          if (s)
            be = E || l, le = k || d, pe = N || c;
          else
            return;
        let j = !1;
        const Le = W._enterCb = (je) => {
          j || (j = !0, je ? Z(pe, [W]) : Z(le, [W]), X.delayedLeave && X.delayedLeave(), W._enterCb = void 0);
        };
        be ? Ee(be, [W, Le]) : Le();
      },
      leave(W, be) {
        const le = String(e.key);
        if (W._enterCb && W._enterCb(
          !0
          /* cancelled */
        ), n.isUnmounting)
          return be();
        Z(u, [W]);
        let pe = !1;
        const j = W._leaveCb = (Le) => {
          pe || (pe = !0, be(), Le ? Z(m, [W]) : Z(f, [W]), W._leaveCb = void 0, I[le] === e && delete I[le]);
        };
        I[le] = e, g ? Ee(g, [W, j]) : j();
      },
      clone(W) {
        return Ma(W, t, n, o);
      }
    };
    return X;
  }
  function ua(e) {
    if (Yo(e))
      return e = Vt(e), e.children = null, e;
  }
  function ir(e) {
    return Yo(e) ? e.children ? e.children[0] : void 0 : e;
  }
  function Oa(e, t) {
    e.shapeFlag & 6 && e.component ? Oa(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function Ql(e, t = !1, n) {
    let o = [], s = 0;
    for (let a = 0; a < e.length; a++) {
      let i = e[a];
      const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : a);
      i.type === Ce ? (i.patchFlag & 128 && s++, o = o.concat(Ql(i.children, t, r))) : (t || i.type !== et) && o.push(r != null ? Vt(i, { key: r }) : i);
    }
    if (s > 1)
      for (let a = 0; a < o.length; a++)
        o[a].patchFlag = -2;
    return o;
  }
  function ec(e) {
    return ce(e) ? { setup: e, name: e.name } : e;
  }
  const Do = (e) => !!e.type.__asyncLoader, Yo = (e) => e.type.__isKeepAlive;
  function jg(e, t) {
    tc(e, "a", t);
  }
  function Hg(e, t) {
    tc(e, "da", t);
  }
  function tc(e, t, n = He) {
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
        Yo(s.parent.vnode) && qg(o, t, n, s), s = s.parent;
    }
  }
  function qg(e, t, n, o) {
    const s = qs(
      t,
      e,
      o,
      !0
      /* prepend */
    );
    oc(() => {
      oi(o[t], s);
    }, n);
  }
  function qs(e, t, n = He, o = !1) {
    if (n) {
      const s = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...i) => {
        if (n.isUnmounted)
          return;
        Kn(), fo(n);
        const r = kt(t, n, e, i);
        return jn(), Wn(), r;
      });
      return o ? s.unshift(a) : s.push(a), a;
    } else if ({}.NODE_ENV !== "production") {
      const s = dn(ui[e].replace(/ hook$/, ""));
      B(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
    }
  }
  const tn = (e) => (t, n = He) => (
    // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
    (!Ro || e === "sp") && qs(e, (...o) => t(...o), n)
  ), Gg = tn(
    "bm"
    /* LifecycleHooks.BEFORE_MOUNT */
  ), lt = tn(
    "m"
    /* LifecycleHooks.MOUNTED */
  ), Kg = tn(
    "bu"
    /* LifecycleHooks.BEFORE_UPDATE */
  ), Wg = tn(
    "u"
    /* LifecycleHooks.UPDATED */
  ), nc = tn(
    "bum"
    /* LifecycleHooks.BEFORE_UNMOUNT */
  ), oc = tn(
    "um"
    /* LifecycleHooks.UNMOUNTED */
  ), Xg = tn(
    "sp"
    /* LifecycleHooks.SERVER_PREFETCH */
  ), Yg = tn(
    "rtg"
    /* LifecycleHooks.RENDER_TRIGGERED */
  ), Jg = tn(
    "rtc"
    /* LifecycleHooks.RENDER_TRACKED */
  );
  function Zg(e, t = He) {
    qs("ec", e, t);
  }
  function sc(e) {
    wd(e) && B("Do not use built-in directive ids as custom directive id: " + e);
  }
  function G(e, t) {
    const n = Ye;
    if (n === null)
      return {}.NODE_ENV !== "production" && B("withDirectives can only be used inside render functions."), e;
    const o = Xs(n) || n.proxy, s = e.dirs || (e.dirs = []);
    for (let a = 0; a < t.length; a++) {
      let [i, r, l, d = Ie] = t[a];
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
      l && (Kn(), kt(l, n, 8, [
        e.el,
        r,
        e,
        t
      ]), Wn());
    }
  }
  const Ts = "components", Qg = "directives";
  function _(e, t) {
    return hi(Ts, e, !0, t) || e;
  }
  const ac = Symbol();
  function _o(e) {
    return Ue(e) ? hi(Ts, e, !1) || e : e || ac;
  }
  function Te(e) {
    return hi(Qg, e);
  }
  function hi(e, t, n = !0, o = !1) {
    const s = Ye || He;
    if (s) {
      const a = s.type;
      if (e === Ts) {
        const r = Si(
          a,
          !1
          /* do not include inferred name to avoid breaking existing code */
        );
        if (r && (r === t || r === Rt(t) || r === Hn(Rt(t))))
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
        B(`Failed to resolve ${e.slice(0, -1)}: ${t}${r}`);
      }
      return i;
    } else
      ({}).NODE_ENV !== "production" && B(`resolve${Hn(e.slice(0, -1))} can only be used in render() or setup().`);
  }
  function rr(e, t) {
    return e && (e[t] || e[Rt(t)] || e[Hn(Rt(t))]);
  }
  function Qe(e, t, n, o) {
    let s;
    const a = n && n[o];
    if (ie(e) || Ue(e)) {
      s = new Array(e.length);
      for (let i = 0, r = e.length; i < r; i++)
        s[i] = t(e[i], i, void 0, a && a[i]);
    } else if (typeof e == "number") {
      ({}).NODE_ENV !== "production" && !Number.isInteger(e) && B(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
      for (let i = 0; i < e; i++)
        s[i] = t(i + 1, i, void 0, a && a[i]);
    } else if (Pe(e))
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
  function Ke(e, t, n = {}, o, s) {
    if (Ye.isCE || Ye.parent && Do(Ye.parent) && Ye.parent.isCE)
      return t !== "default" && (n.name = t), p("slot", n, o && o());
    let a = e[t];
    ({}).NODE_ENV !== "production" && a && a.length > 1 && (B("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), a = () => []), a && a._c && (a._d = !1), v();
    const i = a && ic(a(n)), r = M(
      Ce,
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
    return e.some((t) => go(t) ? !(t.type === et || t.type === Ce && !ic(t.children)) : !0) ? e : null;
  }
  const Ba = (e) => e ? bc(e) ? Xs(e) || e.proxy : Ba(e.parent) : null, zn = (
    // Move PURE marker to new line to workaround compiler discarding it
    // due to type annotation
    /* @__PURE__ */ Ge(/* @__PURE__ */ Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) => ({}).NODE_ENV !== "production" ? ro(e.props) : e.props,
      $attrs: (e) => ({}).NODE_ENV !== "production" ? ro(e.attrs) : e.attrs,
      $slots: (e) => ({}).NODE_ENV !== "production" ? ro(e.slots) : e.slots,
      $refs: (e) => ({}).NODE_ENV !== "production" ? ro(e.refs) : e.refs,
      $parent: (e) => Ba(e.parent),
      $root: (e) => Ba(e.root),
      $emit: (e) => e.emit,
      $options: (e) => _i(e),
      $forceUpdate: (e) => e.f || (e.f = () => js(e.update)),
      $nextTick: (e) => e.n || (e.n = Wo.bind(e.proxy)),
      $watch: (e) => Rg.bind(e)
    })
  ), mi = (e) => e === "_" || e === "$", da = (e, t) => e !== Ie && !e.__isScriptSetup && we(e, t), rc = {
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
          if (da(o, t))
            return i[t] = 1, o[t];
          if (s !== Ie && we(s, t))
            return i[t] = 2, s[t];
          if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (d = e.propsOptions[0]) && we(d, t)
          )
            return i[t] = 3, a[t];
          if (n !== Ie && we(n, t))
            return i[t] = 4, n[t];
          Ia && (i[t] = 0);
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
      if (n !== Ie && we(n, t))
        return i[t] = 4, n[t];
      if (
        // global properties
        g = l.config.globalProperties, we(g, t)
      )
        return g[t];
      ({}).NODE_ENV !== "production" && Ye && (!Ue(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
      // to infinite warning loop
      t.indexOf("__v") !== 0) && (s !== Ie && mi(t[0]) && we(s, t) ? B(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Ye && B(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
    },
    set({ _: e }, t, n) {
      const { data: o, setupState: s, ctx: a } = e;
      return da(s, t) ? (s[t] = n, !0) : {}.NODE_ENV !== "production" && s.__isScriptSetup && we(s, t) ? (B(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Ie && we(o, t) ? (o[t] = n, !0) : we(e.props, t) ? ({}.NODE_ENV !== "production" && B(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && B(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : ({}.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(a, t, {
        enumerable: !0,
        configurable: !0,
        value: n
      }) : a[t] = n, !0);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: a } }, i) {
      let r;
      return !!n[i] || e !== Ie && we(e, i) || da(t, i) || (r = a[0]) && we(r, i) || we(o, i) || we(zn, i) || we(s.config.globalProperties, i);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : we(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  ({}).NODE_ENV !== "production" && (rc.ownKeys = (e) => (B("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
  function ef(e) {
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
        set: tt
      });
    }), t;
  }
  function tf(e) {
    const { ctx: t, propsOptions: [n] } = e;
    n && Object.keys(n).forEach((o) => {
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => e.props[o],
        set: tt
      });
    });
  }
  function nf(e) {
    const { ctx: t, setupState: n } = e;
    Object.keys(fe(n)).forEach((o) => {
      if (!n.__isScriptSetup) {
        if (mi(o[0])) {
          B(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
          return;
        }
        Object.defineProperty(t, o, {
          enumerable: !0,
          configurable: !0,
          get: () => n[o],
          set: tt
        });
      }
    });
  }
  function of() {
    const e = /* @__PURE__ */ Object.create(null);
    return (t, n) => {
      e[n] ? B(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
    };
  }
  let Ia = !0;
  function sf(e) {
    const t = _i(e), n = e.proxy, o = e.ctx;
    Ia = !1, t.beforeCreate && lr(
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
      activated: w,
      deactivated: E,
      beforeDestroy: k,
      beforeUnmount: N,
      destroyed: z,
      unmounted: I,
      render: Z,
      renderTracked: Ee,
      renderTriggered: X,
      errorCaptured: W,
      serverPrefetch: be,
      // public API
      expose: le,
      inheritAttrs: pe,
      // assets
      components: j,
      directives: Le,
      filters: je
    } = t, ot = {}.NODE_ENV !== "production" ? of() : null;
    if ({}.NODE_ENV !== "production") {
      const [me] = e.propsOptions;
      if (me)
        for (const _e in me)
          ot("Props", _e);
    }
    if (d && af(d, o, ot, e.appContext.config.unwrapInjectedRef), i)
      for (const me in i) {
        const _e = i[me];
        ce(_e) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(o, me, {
          value: _e.bind(n),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : o[me] = _e.bind(n), {}.NODE_ENV !== "production" && ot("Methods", me)) : {}.NODE_ENV !== "production" && B(`Method "${me}" has type "${typeof _e}" in the component definition. Did you reference the function correctly?`);
      }
    if (s) {
      ({}).NODE_ENV !== "production" && !ce(s) && B("The data option must be a function. Plain object usage is no longer supported.");
      const me = s.call(n, n);
      if ({}.NODE_ENV !== "production" && si(me) && B("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !Pe(me))
        ({}).NODE_ENV !== "production" && B("data() should return an object.");
      else if (e.data = Xn(me), {}.NODE_ENV !== "production")
        for (const _e in me)
          ot("Data", _e), mi(_e[0]) || Object.defineProperty(o, _e, {
            configurable: !0,
            enumerable: !0,
            get: () => me[_e],
            set: tt
          });
    }
    if (Ia = !0, a)
      for (const me in a) {
        const _e = a[me], st = ce(_e) ? _e.bind(n, n) : ce(_e.get) ? _e.get.bind(n, n) : tt;
        ({}).NODE_ENV !== "production" && st === tt && B(`Computed property "${me}" has no getter.`);
        const on = !ce(_e) && ce(_e.set) ? _e.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
          B(`Write operation failed: computed property "${me}" is readonly.`);
        } : tt, pt = y({
          get: st,
          set: on
        });
        Object.defineProperty(o, me, {
          enumerable: !0,
          configurable: !0,
          get: () => pt.value,
          set: (ct) => pt.value = ct
        }), {}.NODE_ENV !== "production" && ot("Computed", me);
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
    function Re(me, _e) {
      ie(_e) ? _e.forEach((st) => me(st.bind(n))) : _e && me(_e.bind(n));
    }
    if (Re(Gg, u), Re(lt, g), Re(Kg, f), Re(Wg, m), Re(jg, w), Re(Hg, E), Re(Zg, W), Re(Jg, Ee), Re(Yg, X), Re(nc, N), Re(oc, I), Re(Xg, be), ie(le))
      if (le.length) {
        const me = e.exposed || (e.exposed = {});
        le.forEach((_e) => {
          Object.defineProperty(me, _e, {
            get: () => n[_e],
            set: (st) => n[_e] = st
          });
        });
      } else
        e.exposed || (e.exposed = {});
    Z && e.render === tt && (e.render = Z), pe != null && (e.inheritAttrs = pe), j && (e.components = j), Le && (e.directives = Le);
  }
  function af(e, t, n = tt, o = !1) {
    ie(e) && (e = $a(e));
    for (const s in e) {
      const a = e[s];
      let i;
      Pe(a) ? "default" in a ? i = Je(
        a.from || s,
        a.default,
        !0
        /* treat default function as factory */
      ) : i = Je(a.from || s) : i = Je(a), Xe(i) ? o ? Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => i.value,
        set: (r) => i.value = r
      }) : ({}.NODE_ENV !== "production" && B(`injected property "${s}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[s] = i) : t[s] = i, {}.NODE_ENV !== "production" && n("Inject", s);
    }
  }
  function lr(e, t, n) {
    kt(ie(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function lc(e, t, n, o) {
    const s = o.includes(".") ? Yl(n, o) : () => n[o];
    if (Ue(e)) {
      const a = t[e];
      ce(a) ? We(s, a) : {}.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e}"`, a);
    } else if (ce(e))
      We(s, e.bind(n));
    else if (Pe(e))
      if (ie(e))
        e.forEach((a) => lc(a, t, n, o));
      else {
        const a = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
        ce(a) ? We(s, a, e) : {}.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e.handler}"`, a);
      }
    else
      ({}).NODE_ENV !== "production" && B(`Invalid watch option: "${o}"`, e);
  }
  function _i(e) {
    const t = e.type, { mixins: n, extends: o } = t, { mixins: s, optionsCache: a, config: { optionMergeStrategies: i } } = e.appContext, r = a.get(t);
    let l;
    return r ? l = r : !s.length && !n && !o ? l = t : (l = {}, s.length && s.forEach((d) => Ds(l, d, i, !0)), Ds(l, t, i)), Pe(t) && a.set(t, l), l;
  }
  function Ds(e, t, n, o = !1) {
    const { mixins: s, extends: a } = t;
    a && Ds(e, a, n, !0), s && s.forEach((i) => Ds(e, i, n, !0));
    for (const i in t)
      if (o && i === "expose")
        ({}).NODE_ENV !== "production" && B('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
      else {
        const r = rf[i] || n && n[i];
        e[i] = r ? r(e[i], t[i]) : t[i];
      }
    return e;
  }
  const rf = {
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
    watch: cf,
    // provide / inject
    provide: cr,
    inject: lf
  };
  function cr(e, t) {
    return t ? e ? function() {
      return Ge(ce(e) ? e.call(this, this) : e, ce(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function lf(e, t) {
    return Fn($a(e), $a(t));
  }
  function $a(e) {
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
    return e ? Ge(Ge(/* @__PURE__ */ Object.create(null), e), t) : t;
  }
  function cf(e, t) {
    if (!e)
      return t;
    if (!t)
      return e;
    const n = Ge(/* @__PURE__ */ Object.create(null), e);
    for (const o in t)
      n[o] = dt(e[o], t[o]);
    return n;
  }
  function uf(e, t, n, o = !1) {
    const s = {}, a = {};
    Es(a, Gs, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), cc(e, t, s, a);
    for (const i in e.propsOptions[0])
      i in s || (s[i] = void 0);
    ({}).NODE_ENV !== "production" && dc(t || {}, s, e), n ? e.props = o ? s : og(s) : e.type.props ? e.props = s : e.props = a, e.attrs = a;
  }
  function df(e) {
    for (; e; ) {
      if (e.type.__hmrId)
        return !0;
      e = e.parent;
    }
  }
  function gf(e, t, n, o) {
    const { props: s, attrs: a, vnode: { patchFlag: i } } = e, r = fe(s), [l] = e.propsOptions;
    let d = !1;
    if (
      // always force full diff in dev
      // - #1942 if hmr is enabled with sfc component
      // - vite#872 non-sfc component used by sfc component
      !({}.NODE_ENV !== "production" && df(e)) && (o || i > 0) && !(i & 16)
    ) {
      if (i & 8) {
        const c = e.vnode.dynamicProps;
        for (let u = 0; u < c.length; u++) {
          let g = c[u];
          if (Hs(e.emitsOptions, g))
            continue;
          const f = t[g];
          if (l)
            if (we(a, g))
              f !== a[g] && (a[g] = f, d = !0);
            else {
              const m = Rt(g);
              s[m] = Ua(
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
        !we(t, u) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((c = Jt(u)) === u || !we(t, c))) && (l ? n && // for camelCase
        (n[u] !== void 0 || // for kebab-case
        n[c] !== void 0) && (s[u] = Ua(
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
          (!t || !we(t, u)) && (delete a[u], d = !0);
    }
    d && Zt(e, "set", "$attrs"), {}.NODE_ENV !== "production" && dc(t || {}, s, e);
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
        s && we(s, c = Rt(l)) ? !a || !a.includes(c) ? n[c] = d : (r || (r = {}))[c] = d : Hs(e.emitsOptions, l) || (!(l in o) || d !== o[l]) && (o[l] = d, i = !0);
      }
    if (a) {
      const l = fe(n), d = r || Ie;
      for (let c = 0; c < a.length; c++) {
        const u = a[c];
        n[u] = Ua(s, l, u, d[u], e, !we(d, u));
      }
    }
    return i;
  }
  function Ua(e, t, n, o, s, a) {
    const i = e[n];
    if (i != null) {
      const r = we(i, "default");
      if (r && o === void 0) {
        const l = i.default;
        if (i.type !== Function && ce(l)) {
          const { propsDefaults: d } = s;
          n in d ? o = d[n] : (fo(s), o = d[n] = l.call(null, t), jn());
        } else
          o = l;
      }
      i[
        0
        /* BooleanFlags.shouldCast */
      ] && (a && !r ? o = !1 : i[
        1
        /* BooleanFlags.shouldCastTrue */
      ] && (o === "" || o === Jt(n)) && (o = !0));
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
        Ge(i, g), f && r.push(...f);
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    if (!a && !l)
      return Pe(e) && o.set(e, lo), lo;
    if (ie(a))
      for (let c = 0; c < a.length; c++) {
        ({}).NODE_ENV !== "production" && !Ue(a[c]) && B("props must be strings when using array syntax.", a[c]);
        const u = Rt(a[c]);
        ur(u) && (i[u] = Ie);
      }
    else if (a) {
      ({}).NODE_ENV !== "production" && !Pe(a) && B("invalid props options", a);
      for (const c in a) {
        const u = Rt(c);
        if (ur(u)) {
          const g = a[c], f = i[u] = ie(g) || ce(g) ? { type: g } : Object.assign({}, g);
          if (f) {
            const m = gr(Boolean, f.type), w = gr(String, f.type);
            f[
              0
              /* BooleanFlags.shouldCast */
            ] = m > -1, f[
              1
              /* BooleanFlags.shouldCastTrue */
            ] = w < 0 || m < w, (m > -1 || we(f, "default")) && r.push(u);
          }
        }
      }
    }
    const d = [i, r];
    return Pe(e) && o.set(e, d), d;
  }
  function ur(e) {
    return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && B(`Invalid prop name: "${e}" is a reserved property.`), !1);
  }
  function Ra(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : "";
  }
  function dr(e, t) {
    return Ra(e) === Ra(t);
  }
  function gr(e, t) {
    return ie(t) ? t.findIndex((n) => dr(n, e)) : ce(t) && dr(t, e) ? 0 : -1;
  }
  function dc(e, t, n) {
    const o = fe(t), s = n.propsOptions[0];
    for (const a in s) {
      let i = s[a];
      i != null && ff(a, o[a], i, !we(e, a) && !we(e, Jt(a)));
    }
  }
  function ff(e, t, n, o) {
    const { type: s, required: a, validator: i } = n;
    if (a && o) {
      B('Missing required prop: "' + e + '"');
      return;
    }
    if (!(t == null && !n.required)) {
      if (s != null && s !== !0) {
        let r = !1;
        const l = ie(s) ? s : [s], d = [];
        for (let c = 0; c < l.length && !r; c++) {
          const { valid: u, expectedType: g } = hf(t, l[c]);
          d.push(g || ""), r = u;
        }
        if (!r) {
          B(mf(e, t, d));
          return;
        }
      }
      i && !i(t) && B('Invalid prop: custom validator check failed for prop "' + e + '".');
    }
  }
  const pf = /* @__PURE__ */ Cn("String,Number,Boolean,Function,Symbol,BigInt");
  function hf(e, t) {
    let n;
    const o = Ra(t);
    if (pf(o)) {
      const s = typeof e;
      n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
    } else
      o === "Object" ? n = Pe(e) : o === "Array" ? n = ie(e) : o === "null" ? n = e === null : n = e instanceof t;
    return {
      valid: n,
      expectedType: o
    };
  }
  function mf(e, t, n) {
    let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Hn).join(" | ")}`;
    const s = n[0], a = ai(t), i = fr(t, s), r = fr(t, a);
    return n.length === 1 && pr(s) && !_f(s, a) && (o += ` with value ${i}`), o += `, got ${a} `, pr(a) && (o += `with value ${r}.`), o;
  }
  function fr(e, t) {
    return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
  }
  function pr(e) {
    return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
  }
  function _f(...e) {
    return e.some((t) => t.toLowerCase() === "boolean");
  }
  const gc = (e) => e[0] === "_" || e === "$stable", vi = (e) => ie(e) ? e.map(Lt) : [Lt(e)], vf = (e, t, n) => {
    if (t._n)
      return t;
    const o = S((...s) => ({}.NODE_ENV !== "production" && He && B(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), vi(t(...s))), n);
    return o._c = !1, o;
  }, fc = (e, t, n) => {
    const o = e._ctx;
    for (const s in e) {
      if (gc(s))
        continue;
      const a = e[s];
      if (ce(a))
        t[s] = vf(s, a, o);
      else if (a != null) {
        ({}).NODE_ENV !== "production" && B(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);
        const i = vi(a);
        t[s] = () => i;
      }
    }
  }, pc = (e, t) => {
    ({}).NODE_ENV !== "production" && !Yo(e.vnode) && B("Non-function value encountered for default slot. Prefer function slots for better performance.");
    const n = vi(t);
    e.slots.default = () => n;
  }, yf = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? (e.slots = fe(t), Es(t, "_", n)) : fc(t, e.slots = {});
    } else
      e.slots = {}, t && pc(e, t);
    Es(e.slots, Gs, 1);
  }, bf = (e, t, n) => {
    const { vnode: o, slots: s } = e;
    let a = !0, i = Ie;
    if (o.shapeFlag & 32) {
      const r = t._;
      r ? {}.NODE_ENV !== "production" && Vn ? Ge(s, t) : n && r === 1 ? a = !1 : (Ge(s, t), !n && r === 1 && delete s._) : (a = !t.$stable, fc(t, s)), i = t;
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
  let Sf = 0;
  function wf(e, t) {
    return function(o, s = null) {
      ce(o) || (o = Object.assign({}, o)), s != null && !Pe(s) && ({}.NODE_ENV !== "production" && B("root props passed to app.mount() must be an object."), s = null);
      const a = hc(), i = /* @__PURE__ */ new Set();
      let r = !1;
      const l = a.app = {
        _uid: Sf++,
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
          ({}).NODE_ENV !== "production" && B("app.config cannot be replaced. Modify individual options instead.");
        },
        use(d, ...c) {
          return i.has(d) ? {}.NODE_ENV !== "production" && B("Plugin has already been applied to target app.") : d && ce(d.install) ? (i.add(d), d.install(l, ...c)) : ce(d) ? (i.add(d), d(l, ...c)) : {}.NODE_ENV !== "production" && B('A plugin must either be a function or an object with an "install" function.'), l;
        },
        mixin(d) {
          return a.mixins.includes(d) ? {}.NODE_ENV !== "production" && B("Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")) : a.mixins.push(d), l;
        },
        component(d, c) {
          return {}.NODE_ENV !== "production" && za(d, a.config), c ? ({}.NODE_ENV !== "production" && a.components[d] && B(`Component "${d}" has already been registered in target app.`), a.components[d] = c, l) : a.components[d];
        },
        directive(d, c) {
          return {}.NODE_ENV !== "production" && sc(d), c ? ({}.NODE_ENV !== "production" && a.directives[d] && B(`Directive "${d}" has already been registered in target app.`), a.directives[d] = c, l) : a.directives[d];
        },
        mount(d, c, u) {
          if (r)
            ({}).NODE_ENV !== "production" && B("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
          else {
            ({}).NODE_ENV !== "production" && d.__vue_app__ && B("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
            const g = p(o, s);
            return g.appContext = a, {}.NODE_ENV !== "production" && (a.reload = () => {
              e(Vt(g), d, u);
            }), c && t ? t(g, d) : e(g, d, u), r = !0, l._container = d, d.__vue_app__ = l, {}.NODE_ENV !== "production" && (l._instance = g.component, Cg(l, vr)), Xs(g.component) || g.component.proxy;
          }
        },
        unmount() {
          r ? (e(null, l._container), {}.NODE_ENV !== "production" && (l._instance = null, Eg(l)), delete l._container.__vue_app__) : {}.NODE_ENV !== "production" && B("Cannot unmount an app that is not mounted.");
        },
        provide(d, c) {
          return {}.NODE_ENV !== "production" && d in a.provides && B(`App already provides property with key "${String(d)}". It will be overwritten with the new value.`), a.provides[d] = c, l;
        }
      };
      return l;
    };
  }
  function Va(e, t, n, o, s = !1) {
    if (ie(e)) {
      e.forEach((g, f) => Va(g, t && (ie(t) ? t[f] : t), n, o, s));
      return;
    }
    if (Do(o) && !s)
      return;
    const a = o.shapeFlag & 4 ? Xs(o.component) || o.component.proxy : o.el, i = s ? null : a, { i: r, r: l } = e;
    if ({}.NODE_ENV !== "production" && !r) {
      B("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
      return;
    }
    const d = t && t.r, c = r.refs === Ie ? r.refs = {} : r.refs, u = r.setupState;
    if (d != null && d !== l && (Ue(d) ? (c[d] = null, we(u, d) && (u[d] = null)) : Xe(d) && (d.value = null)), ce(l))
      Yt(l, r, 12, [i, c]);
    else {
      const g = Ue(l), f = Xe(l);
      if (g || f) {
        const m = () => {
          if (e.f) {
            const w = g ? we(u, l) ? u[l] : c[l] : l.value;
            s ? ie(w) && oi(w, a) : ie(w) ? w.includes(a) || w.push(a) : g ? (c[l] = [a], we(u, l) && (u[l] = c[l])) : (l.value = [a], e.k && (c[e.k] = l.value));
          } else
            g ? (c[l] = i, we(u, l) && (u[l] = i)) : f ? (l.value = i, e.k && (c[e.k] = i)) : {}.NODE_ENV !== "production" && B("Invalid template ref type:", l, `(${typeof l})`);
        };
        i ? (m.id = -1, mt(m, n)) : m();
      } else
        ({}).NODE_ENV !== "production" && B("Invalid template ref type:", l, `(${typeof l})`);
    }
  }
  let So, mn;
  function Kt(e, t) {
    e.appContext.config.performance && Ls() && mn.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && Tg(e, t, Ls() ? mn.now() : Date.now());
  }
  function Wt(e, t) {
    if (e.appContext.config.performance && Ls()) {
      const n = `vue-${t}-${e.uid}`, o = n + ":end";
      mn.mark(o), mn.measure(`<${Ys(e, e.type)}> ${t}`, n, o), mn.clearMarks(n), mn.clearMarks(o);
    }
    ({}).NODE_ENV !== "production" && Dg(e, t, Ls() ? mn.now() : Date.now());
  }
  function Ls() {
    return So !== void 0 || (typeof window != "undefined" && window.performance ? (So = !0, mn = window.performance) : So = !1), So;
  }
  function Cf() {
    const e = [];
    if ({}.NODE_ENV !== "production" && e.length) {
      const t = e.length > 1;
      console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
    }
  }
  const mt = $g;
  function Ef(e) {
    return xf(e);
  }
  function xf(e, t) {
    Cf();
    const n = ml();
    n.__VUE__ = !0, {}.NODE_ENV !== "production" && Hl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
    const { insert: o, remove: s, patchProp: a, createElement: i, createText: r, createComment: l, setText: d, setElementText: c, parentNode: u, nextSibling: g, setScopeId: f = tt, insertStaticContent: m } = e, w = (h, b, x, P = null, L = null, U = null, q = !1, O = null, R = {}.NODE_ENV !== "production" && Vn ? !1 : !!b.dynamicChildren) => {
      if (h === b)
        return;
      h && !Mn(h, b) && (P = Q(h), ut(h, L, U, !0), h = null), b.patchFlag === -2 && (R = !1, b.dynamicChildren = null);
      const { type: F, ref: te, shapeFlag: J } = b;
      switch (F) {
        case Jo:
          E(h, b, x, P);
          break;
        case et:
          k(h, b, x, P);
          break;
        case bs:
          h == null ? N(b, x, P, q) : {}.NODE_ENV !== "production" && z(h, b, x, q);
          break;
        case Ce:
          Le(h, b, x, P, L, U, q, O, R);
          break;
        default:
          J & 1 ? Ee(h, b, x, P, L, U, q, O, R) : J & 6 ? je(h, b, x, P, L, U, q, O, R) : J & 64 || J & 128 ? F.process(h, b, x, P, L, U, q, O, R, Be) : {}.NODE_ENV !== "production" && B("Invalid VNode type:", F, `(${typeof F})`);
      }
      te != null && L && Va(te, h && h.ref, U, b || h, !b);
    }, E = (h, b, x, P) => {
      if (h == null)
        o(b.el = r(b.children), x, P);
      else {
        const L = b.el = h.el;
        b.children !== h.children && d(L, b.children);
      }
    }, k = (h, b, x, P) => {
      h == null ? o(b.el = l(b.children || ""), x, P) : b.el = h.el;
    }, N = (h, b, x, P) => {
      [h.el, h.anchor] = m(h.children, b, x, P, h.el, h.anchor);
    }, z = (h, b, x, P) => {
      if (b.children !== h.children) {
        const L = g(h.anchor);
        Z(h), [b.el, b.anchor] = m(b.children, x, L, P);
      } else
        b.el = h.el, b.anchor = h.anchor;
    }, I = ({ el: h, anchor: b }, x, P) => {
      let L;
      for (; h && h !== b; )
        L = g(h), o(h, x, P), h = L;
      o(b, x, P);
    }, Z = ({ el: h, anchor: b }) => {
      let x;
      for (; h && h !== b; )
        x = g(h), s(h), h = x;
      s(b);
    }, Ee = (h, b, x, P, L, U, q, O, R) => {
      q = q || b.type === "svg", h == null ? X(b, x, P, L, U, q, O, R) : le(h, b, L, U, q, O, R);
    }, X = (h, b, x, P, L, U, q, O) => {
      let R, F;
      const { type: te, props: J, shapeFlag: oe, transition: re, dirs: he } = h;
      if (R = h.el = i(h.type, U, J && J.is, J), oe & 8 ? c(R, h.children) : oe & 16 && be(h.children, R, null, P, L, U && te !== "foreignObject", q, O), he && Dn(h, null, P, "created"), W(R, h, h.scopeId, q, P), J) {
        for (const D in J)
          D !== "value" && !hs(D) && a(R, D, null, J[D], U, h.children, P, L, H);
        "value" in J && a(R, "value", null, J.value), (F = J.onVnodeBeforeMount) && Bt(F, P, h);
      }
      ({}).NODE_ENV !== "production" && (Object.defineProperty(R, "__vnode", {
        value: h,
        enumerable: !1
      }), Object.defineProperty(R, "__vueParentComponent", {
        value: P,
        enumerable: !1
      })), he && Dn(h, null, P, "beforeMount");
      const Oe = (!L || L && !L.pendingBranch) && re && !re.persisted;
      Oe && re.beforeEnter(R), o(R, b, x), ((F = J && J.onVnodeMounted) || Oe || he) && mt(() => {
        F && Bt(F, P, h), Oe && re.enter(R), he && Dn(h, null, P, "mounted");
      }, L);
    }, W = (h, b, x, P, L) => {
      if (x && f(h, x), P)
        for (let U = 0; U < P.length; U++)
          f(h, P[U]);
      if (L) {
        let U = L.subTree;
        if ({}.NODE_ENV !== "production" && U.patchFlag > 0 && U.patchFlag & 2048 && (U = Xl(U.children) || U), b === U) {
          const q = L.vnode;
          W(h, q, q.scopeId, q.slotScopeIds, L.parent);
        }
      }
    }, be = (h, b, x, P, L, U, q, O, R = 0) => {
      for (let F = R; F < h.length; F++) {
        const te = h[F] = O ? fn(h[F]) : Lt(h[F]);
        w(null, te, b, x, P, L, U, q, O);
      }
    }, le = (h, b, x, P, L, U, q) => {
      const O = b.el = h.el;
      let { patchFlag: R, dynamicChildren: F, dirs: te } = b;
      R |= h.patchFlag & 16;
      const J = h.props || Ie, oe = b.props || Ie;
      let re;
      x && Ln(x, !1), (re = oe.onVnodeBeforeUpdate) && Bt(re, x, b, h), te && Dn(b, h, x, "beforeUpdate"), x && Ln(x, !0), {}.NODE_ENV !== "production" && Vn && (R = 0, q = !1, F = null);
      const he = L && b.type !== "foreignObject";
      if (F ? (pe(h.dynamicChildren, F, O, x, P, he, U), {}.NODE_ENV !== "production" && x && x.type.__hmrId && ys(h, b)) : q || st(h, b, O, null, x, P, he, U, !1), R > 0) {
        if (R & 16)
          j(O, b, J, oe, x, P, L);
        else if (R & 2 && J.class !== oe.class && a(O, "class", null, oe.class, L), R & 4 && a(O, "style", J.style, oe.style, L), R & 8) {
          const Oe = b.dynamicProps;
          for (let D = 0; D < Oe.length; D++) {
            const ee = Oe[D], $e = J[ee], at = oe[ee];
            (at !== $e || ee === "value") && a(O, ee, $e, at, L, h.children, x, P, H);
          }
        }
        R & 1 && h.children !== b.children && c(O, b.children);
      } else
        !q && F == null && j(O, b, J, oe, x, P, L);
      ((re = oe.onVnodeUpdated) || te) && mt(() => {
        re && Bt(re, x, b, h), te && Dn(b, h, x, "updated");
      }, P);
    }, pe = (h, b, x, P, L, U, q) => {
      for (let O = 0; O < b.length; O++) {
        const R = h[O], F = b[O], te = (
          // oldVNode may be an errored async setup() component inside Suspense
          // which will not have a mounted element
          R.el && // - In the case of a Fragment, we need to provide the actual parent
          // of the Fragment itself so it can move its children.
          (R.type === Ce || // - In the case of different nodes, there is going to be a replacement
          // which also requires the correct parent container
          !Mn(R, F) || // - In the case of a component, it could contain anything.
          R.shapeFlag & 70) ? u(R.el) : (
            // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            x
          )
        );
        w(R, F, te, null, P, L, U, q, !0);
      }
    }, j = (h, b, x, P, L, U, q) => {
      if (x !== P) {
        if (x !== Ie)
          for (const O in x)
            !hs(O) && !(O in P) && a(h, O, x[O], null, q, b.children, L, U, H);
        for (const O in P) {
          if (hs(O))
            continue;
          const R = P[O], F = x[O];
          R !== F && O !== "value" && a(h, O, F, R, q, b.children, L, U, H);
        }
        "value" in P && a(h, "value", x.value, P.value);
      }
    }, Le = (h, b, x, P, L, U, q, O, R) => {
      const F = b.el = h ? h.el : r(""), te = b.anchor = h ? h.anchor : r("");
      let { patchFlag: J, dynamicChildren: oe, slotScopeIds: re } = b;
      ({}).NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
      (Vn || J & 2048) && (J = 0, R = !1, oe = null), re && (O = O ? O.concat(re) : re), h == null ? (o(F, x, P), o(te, x, P), be(b.children, x, te, L, U, q, O, R)) : J > 0 && J & 64 && oe && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      h.dynamicChildren ? (pe(h.dynamicChildren, oe, x, L, U, q, O), {}.NODE_ENV !== "production" && L && L.type.__hmrId ? ys(h, b) : (
        // #2080 if the stable fragment has a key, it's a <template v-for> that may
        //  get moved around. Make sure all root level vnodes inherit el.
        // #2134 or if it's a component root, it may also get moved around
        // as the component is being moved.
        (b.key != null || L && b === L.subTree) && ys(
          h,
          b,
          !0
          /* shallow */
        )
      )) : st(h, b, x, te, L, U, q, O, R);
    }, je = (h, b, x, P, L, U, q, O, R) => {
      b.slotScopeIds = O, h == null ? b.shapeFlag & 512 ? L.ctx.activate(b, x, P, q, R) : ot(b, x, P, L, U, q, R) : Re(h, b, R);
    }, ot = (h, b, x, P, L, U, q) => {
      const O = h.component = Nf(h, P, L);
      if ({}.NODE_ENV !== "production" && O.type.__hmrId && yg(O), {}.NODE_ENV !== "production" && (ms(h), Kt(O, "mount")), Yo(h) && (O.ctx.renderer = Be), {}.NODE_ENV !== "production" && Kt(O, "init"), Mf(O), {}.NODE_ENV !== "production" && Wt(O, "init"), O.asyncDep) {
        if (L && L.registerDep(O, me), !h.el) {
          const R = O.subTree = p(et);
          k(null, R, b, x);
        }
        return;
      }
      me(O, h, b, x, L, U, q), {}.NODE_ENV !== "production" && (_s(), Wt(O, "mount"));
    }, Re = (h, b, x) => {
      const P = b.component = h.component;
      if (Og(h, b, x))
        if (P.asyncDep && !P.asyncResolved) {
          ({}).NODE_ENV !== "production" && ms(b), _e(P, b, x), {}.NODE_ENV !== "production" && _s();
          return;
        } else
          P.next = b, _g(P.update), P.update();
      else
        b.el = h.el, P.vnode = b;
    }, me = (h, b, x, P, L, U, q) => {
      const O = () => {
        if (h.isMounted) {
          let { next: te, bu: J, u: oe, parent: re, vnode: he } = h, Oe = te, D;
          ({}).NODE_ENV !== "production" && ms(te || h.vnode), Ln(h, !1), te ? (te.el = he.el, _e(h, te, q)) : te = he, J && oo(J), (D = te.props && te.props.onVnodeBeforeUpdate) && Bt(D, re, te, he), Ln(h, !0), {}.NODE_ENV !== "production" && Kt(h, "render");
          const ee = ca(h);
          ({}).NODE_ENV !== "production" && Wt(h, "render");
          const $e = h.subTree;
          h.subTree = ee, {}.NODE_ENV !== "production" && Kt(h, "patch"), w(
            $e,
            ee,
            // parent may have changed if it's in a teleport
            u($e.el),
            // anchor may have changed if it's in a fragment
            Q($e),
            h,
            L,
            U
          ), {}.NODE_ENV !== "production" && Wt(h, "patch"), te.el = ee.el, Oe === null && Bg(h, ee.el), oe && mt(oe, L), (D = te.props && te.props.onVnodeUpdated) && mt(() => Bt(D, re, te, he), L), {}.NODE_ENV !== "production" && ql(h), {}.NODE_ENV !== "production" && _s();
        } else {
          let te;
          const { el: J, props: oe } = b, { bm: re, m: he, parent: Oe } = h, D = Do(b);
          if (Ln(h, !1), re && oo(re), !D && (te = oe && oe.onVnodeBeforeMount) && Bt(te, Oe, b), Ln(h, !0), J && ue) {
            const ee = () => {
              ({}).NODE_ENV !== "production" && Kt(h, "render"), h.subTree = ca(h), {}.NODE_ENV !== "production" && Wt(h, "render"), {}.NODE_ENV !== "production" && Kt(h, "hydrate"), ue(J, h.subTree, h, L, null), {}.NODE_ENV !== "production" && Wt(h, "hydrate");
            };
            D ? b.type.__asyncLoader().then(
              // note: we are moving the render call into an async callback,
              // which means it won't track dependencies - but it's ok because
              // a server-rendered async wrapper is already in resolved state
              // and it will never need to change.
              () => !h.isUnmounted && ee()
            ) : ee();
          } else {
            ({}).NODE_ENV !== "production" && Kt(h, "render");
            const ee = h.subTree = ca(h);
            ({}).NODE_ENV !== "production" && Wt(h, "render"), {}.NODE_ENV !== "production" && Kt(h, "patch"), w(null, ee, x, P, h, L, U), {}.NODE_ENV !== "production" && Wt(h, "patch"), b.el = ee.el;
          }
          if (he && mt(he, L), !D && (te = oe && oe.onVnodeMounted)) {
            const ee = b;
            mt(() => Bt(te, Oe, ee), L);
          }
          (b.shapeFlag & 256 || Oe && Do(Oe.vnode) && Oe.vnode.shapeFlag & 256) && h.a && mt(h.a, L), h.isMounted = !0, {}.NODE_ENV !== "production" && xg(h), b = x = P = null;
        }
      }, R = h.effect = new ri(
        O,
        () => js(F),
        h.scope
        // track it in component's effect scope
      ), F = h.update = () => R.run();
      F.id = h.uid, Ln(h, !0), {}.NODE_ENV !== "production" && (R.onTrack = h.rtc ? (te) => oo(h.rtc, te) : void 0, R.onTrigger = h.rtg ? (te) => oo(h.rtg, te) : void 0, F.ownerInstance = h), F();
    }, _e = (h, b, x) => {
      b.component = h;
      const P = h.vnode.props;
      h.vnode = b, h.next = null, gf(h, b.props, P, x), bf(h, b.children, x), Kn(), nr(), Wn();
    }, st = (h, b, x, P, L, U, q, O, R = !1) => {
      const F = h && h.children, te = h ? h.shapeFlag : 0, J = b.children, { patchFlag: oe, shapeFlag: re } = b;
      if (oe > 0) {
        if (oe & 128) {
          pt(F, J, x, P, L, U, q, O, R);
          return;
        } else if (oe & 256) {
          on(F, J, x, P, L, U, q, O, R);
          return;
        }
      }
      re & 8 ? (te & 16 && H(F, L, U), J !== F && c(x, J)) : te & 16 ? re & 16 ? pt(F, J, x, P, L, U, q, O, R) : H(F, L, U, !0) : (te & 8 && c(x, ""), re & 16 && be(J, x, P, L, U, q, O, R));
    }, on = (h, b, x, P, L, U, q, O, R) => {
      h = h || lo, b = b || lo;
      const F = h.length, te = b.length, J = Math.min(F, te);
      let oe;
      for (oe = 0; oe < J; oe++) {
        const re = b[oe] = R ? fn(b[oe]) : Lt(b[oe]);
        w(h[oe], re, x, null, L, U, q, O, R);
      }
      F > te ? H(h, L, U, !0, !1, J) : be(b, x, P, L, U, q, O, R, J);
    }, pt = (h, b, x, P, L, U, q, O, R) => {
      let F = 0;
      const te = b.length;
      let J = h.length - 1, oe = te - 1;
      for (; F <= J && F <= oe; ) {
        const re = h[F], he = b[F] = R ? fn(b[F]) : Lt(b[F]);
        if (Mn(re, he))
          w(re, he, x, null, L, U, q, O, R);
        else
          break;
        F++;
      }
      for (; F <= J && F <= oe; ) {
        const re = h[J], he = b[oe] = R ? fn(b[oe]) : Lt(b[oe]);
        if (Mn(re, he))
          w(re, he, x, null, L, U, q, O, R);
        else
          break;
        J--, oe--;
      }
      if (F > J) {
        if (F <= oe) {
          const re = oe + 1, he = re < te ? b[re].el : P;
          for (; F <= oe; )
            w(null, b[F] = R ? fn(b[F]) : Lt(b[F]), x, he, L, U, q, O, R), F++;
        }
      } else if (F > oe)
        for (; F <= J; )
          ut(h[F], L, U, !0), F++;
      else {
        const re = F, he = F, Oe = /* @__PURE__ */ new Map();
        for (F = he; F <= oe; F++) {
          const Ze = b[F] = R ? fn(b[F]) : Lt(b[F]);
          Ze.key != null && ({}.NODE_ENV !== "production" && Oe.has(Ze.key) && B("Duplicate keys found during update:", JSON.stringify(Ze.key), "Make sure keys are unique."), Oe.set(Ze.key, F));
        }
        let D, ee = 0;
        const $e = oe - he + 1;
        let at = !1, wt = 0;
        const qt = new Array($e);
        for (F = 0; F < $e; F++)
          qt[F] = 0;
        for (F = re; F <= J; F++) {
          const Ze = h[F];
          if (ee >= $e) {
            ut(Ze, L, U, !0);
            continue;
          }
          let ht;
          if (Ze.key != null)
            ht = Oe.get(Ze.key);
          else
            for (D = he; D <= oe; D++)
              if (qt[D - he] === 0 && Mn(Ze, b[D])) {
                ht = D;
                break;
              }
          ht === void 0 ? ut(Ze, L, U, !0) : (qt[ht - he] = F + 1, ht >= wt ? wt = ht : at = !0, w(Ze, b[ht], x, null, L, U, q, O, R), ee++);
        }
        const bo = at ? Af(qt) : lo;
        for (D = bo.length - 1, F = $e - 1; F >= 0; F--) {
          const Ze = he + F, ht = b[Ze], ss = Ze + 1 < te ? b[Ze + 1].el : P;
          qt[F] === 0 ? w(null, ht, x, ss, L, U, q, O, R) : at && (D < 0 || F !== bo[D] ? ct(
            ht,
            x,
            ss,
            2
            /* MoveType.REORDER */
          ) : D--);
        }
      }
    }, ct = (h, b, x, P, L = null) => {
      const { el: U, type: q, transition: O, children: R, shapeFlag: F } = h;
      if (F & 6) {
        ct(h.component.subTree, b, x, P);
        return;
      }
      if (F & 128) {
        h.suspense.move(b, x, P);
        return;
      }
      if (F & 64) {
        q.move(h, b, x, Be);
        return;
      }
      if (q === Ce) {
        o(U, b, x);
        for (let J = 0; J < R.length; J++)
          ct(R[J], b, x, P);
        o(h.anchor, b, x);
        return;
      }
      if (q === bs) {
        I(h, b, x);
        return;
      }
      if (P !== 2 && F & 1 && O)
        if (P === 0)
          O.beforeEnter(U), o(U, b, x), mt(() => O.enter(U), L);
        else {
          const { leave: J, delayLeave: oe, afterLeave: re } = O, he = () => o(U, b, x), Oe = () => {
            J(U, () => {
              he(), re && re();
            });
          };
          oe ? oe(U, he, Oe) : Oe();
        }
      else
        o(U, b, x);
    }, ut = (h, b, x, P = !1, L = !1) => {
      const { type: U, props: q, ref: O, children: R, dynamicChildren: F, shapeFlag: te, patchFlag: J, dirs: oe } = h;
      if (O != null && Va(O, null, x, h, !0), te & 256) {
        b.ctx.deactivate(h);
        return;
      }
      const re = te & 1 && oe, he = !Do(h);
      let Oe;
      if (he && (Oe = q && q.onVnodeBeforeUnmount) && Bt(Oe, b, h), te & 6)
        Y(h.component, x, P);
      else {
        if (te & 128) {
          h.suspense.unmount(x, P);
          return;
        }
        re && Dn(h, null, b, "beforeUnmount"), te & 64 ? h.type.remove(h, b, x, L, Be, P) : F && // #1153: fast path should not be taken for non-stable (v-for) fragments
        (U !== Ce || J > 0 && J & 64) ? H(F, b, x, !1, !0) : (U === Ce && J & 384 || !L && te & 16) && H(R, b, x), P && Ht(h);
      }
      (he && (Oe = q && q.onVnodeUnmounted) || re) && mt(() => {
        Oe && Bt(Oe, b, h), re && Dn(h, null, b, "unmounted");
      }, x);
    }, Ht = (h) => {
      const { type: b, el: x, anchor: P, transition: L } = h;
      if (b === Ce) {
        ({}).NODE_ENV !== "production" && h.patchFlag > 0 && h.patchFlag & 2048 && L && !L.persisted ? h.children.forEach((q) => {
          q.type === et ? s(q.el) : Ht(q);
        }) : A(x, P);
        return;
      }
      if (b === bs) {
        Z(h);
        return;
      }
      const U = () => {
        s(x), L && !L.persisted && L.afterLeave && L.afterLeave();
      };
      if (h.shapeFlag & 1 && L && !L.persisted) {
        const { leave: q, delayLeave: O } = L, R = () => q(x, U);
        O ? O(h.el, U, R) : R();
      } else
        U();
    }, A = (h, b) => {
      let x;
      for (; h !== b; )
        x = g(h), s(h), h = x;
      s(b);
    }, Y = (h, b, x) => {
      ({}).NODE_ENV !== "production" && h.type.__hmrId && bg(h);
      const { bum: P, scope: L, update: U, subTree: q, um: O } = h;
      P && oo(P), L.stop(), U && (U.active = !1, ut(q, h, b, x)), O && mt(O, b), mt(() => {
        h.isUnmounted = !0;
      }, b), b && b.pendingBranch && !b.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === b.pendingId && (b.deps--, b.deps === 0 && b.resolve()), {}.NODE_ENV !== "production" && kg(h);
    }, H = (h, b, x, P = !1, L = !1, U = 0) => {
      for (let q = U; q < h.length; q++)
        ut(h[q], b, x, P, L);
    }, Q = (h) => h.shapeFlag & 6 ? Q(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : g(h.anchor || h.el), xe = (h, b, x) => {
      h == null ? b._vnode && ut(b._vnode, null, null, !0) : w(b._vnode || null, h, b, null, null, null, x), nr(), Vl(), b._vnode = h;
    }, Be = {
      p: w,
      um: ut,
      m: ct,
      r: Ht,
      mt: ot,
      mc: be,
      pc: st,
      pbc: pe,
      n: Q,
      o: e
    };
    let de, ue;
    return t && ([de, ue] = t(Be)), {
      render: xe,
      hydrate: de,
      createApp: wf(xe, de)
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
        r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = s[a] = fn(s[a]), r.el = i.el), n || ys(i, r)), r.type === Jo && (r.el = i.el), {}.NODE_ENV !== "production" && r.type === et && !r.el && (r.el = i.el);
      }
  }
  function Af(e) {
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
  const kf = (e) => e.__isTeleport, Ce = Symbol({}.NODE_ENV !== "production" ? "Fragment" : void 0), Jo = Symbol({}.NODE_ENV !== "production" ? "Text" : void 0), et = Symbol({}.NODE_ENV !== "production" ? "Comment" : void 0), bs = Symbol({}.NODE_ENV !== "production" ? "Static" : void 0), Lo = [];
  let Pt = null;
  function v(e = !1) {
    Lo.push(Pt = e ? null : []);
  }
  function Tf() {
    Lo.pop(), Pt = Lo[Lo.length - 1] || null;
  }
  let Uo = 1;
  function hr(e) {
    Uo += e;
  }
  function mc(e) {
    return e.dynamicChildren = Uo > 0 ? Pt || lo : null, Tf(), Uo > 0 && Pt && Pt.push(e), e;
  }
  function T(e, t, n, o, s, a) {
    return mc(C(
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
  function go(e) {
    return e ? e.__v_isVNode === !0 : !1;
  }
  function Mn(e, t) {
    return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && so.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
  }
  const Df = (...e) => vc(...e), Gs = "__vInternal", _c = ({ key: e }) => e != null ? e : null, Ss = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Ue(e) || Xe(e) || ce(e) ? { i: Ye, r: e, k: t, f: !!n } : e : null;
  function C(e, t = null, n = null, o = 0, s = null, a = e === Ce ? 0 : 1, i = !1, r = !1) {
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
      ctx: Ye
    };
    return r ? (yi(l, n), a & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ue(n) ? 8 : 16), {}.NODE_ENV !== "production" && l.key !== l.key && B("VNode created with invalid key (NaN). VNode type:", l.type), Uo > 0 && // avoid a block node from tracking itself
    !i && // has current parent block
    Pt && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    l.patchFlag !== 32 && Pt.push(l), l;
  }
  const p = {}.NODE_ENV !== "production" ? Df : vc;
  function vc(e, t = null, n = null, o = 0, s = null, a = !1) {
    if ((!e || e === ac) && ({}.NODE_ENV !== "production" && !e && B(`Invalid vnode type when creating vnode: ${e}.`), e = et), go(e)) {
      const r = Vt(
        e,
        t,
        !0
        /* mergeRef: true */
      );
      return n && yi(r, n), Uo > 0 && !a && Pt && (r.shapeFlag & 6 ? Pt[Pt.indexOf(e)] = r : Pt.push(r)), r.patchFlag |= -2, r;
    }
    if (Cc(e) && (e = e.__vccOpts), t) {
      t = Ks(t);
      let { class: r, style: l } = t;
      r && !Ue(r) && (t.class = ge(r)), Pe(l) && (La(l) && !ie(l) && (l = Ge({}, l)), t.style = nt(l));
    }
    const i = Ue(e) ? 1 : Ig(e) ? 128 : kf(e) ? 64 : Pe(e) ? 4 : ce(e) ? 2 : 0;
    return {}.NODE_ENV !== "production" && i & 4 && La(e) && (e = fe(e), B("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), C(e, t, n, o, s, i, a, !0);
  }
  function Ks(e) {
    return e ? La(e) || Gs in e ? Ge({}, e) : e : null;
  }
  function Vt(e, t, n = !1) {
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
      patchFlag: t && e.type !== Ce ? a === -1 ? 16 : a | 16 : a,
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
      ssContent: e.ssContent && Vt(e.ssContent),
      ssFallback: e.ssFallback && Vt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
  }
  function yc(e) {
    const t = Vt(e);
    return ie(e.children) && (t.children = e.children.map(yc)), t;
  }
  function Ps(e = " ", t = 0) {
    return p(Jo, null, e, t);
  }
  function se(e = "", t = !1) {
    return t ? (v(), M(et, null, e)) : p(et, null, e);
  }
  function Lt(e) {
    return e == null || typeof e == "boolean" ? p(et) : ie(e) ? p(
      Ce,
      null,
      // #3666, avoid reference pollution when reusing vnode
      e.slice()
    ) : typeof e == "object" ? fn(e) : p(Jo, null, String(e));
  }
  function fn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vt(e);
  }
  function yi(e, t) {
    let n = 0;
    const { shapeFlag: o } = e;
    if (t == null)
      t = null;
    else if (ie(t))
      n = 16;
    else if (typeof t == "object")
      if (o & 65) {
        const s = t.default;
        s && (s._c && (s._d = !1), yi(e, s()), s._c && (s._d = !0));
        return;
      } else {
        n = 32;
        const s = t._;
        !s && !(Gs in t) ? t._ctx = Ye : s === 3 && Ye && (Ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
      }
    else
      ce(t) ? (t = { default: t, _ctx: Ye }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ps(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  function Ws(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      for (const s in o)
        if (s === "class")
          t.class !== o.class && (t.class = ge([t.class, o.class]));
        else if (s === "style")
          t.style = nt([t.style, o.style]);
        else if (Go(s)) {
          const a = t[s], i = o[s];
          i && a !== i && !(ie(a) && a.includes(i)) && (t[s] = a ? [].concat(a, i) : i);
        } else
          s !== "" && (t[s] = o[s]);
    }
    return t;
  }
  function Bt(e, t, n, o = null) {
    kt(e, t, 7, [
      n,
      o
    ]);
  }
  const Lf = hc();
  let Pf = 0;
  function Nf(e, t, n) {
    const o = e.type, s = (t ? t.appContext : e.appContext) || Lf, a = {
      uid: Pf++,
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
      propsDefaults: Ie,
      // inheritAttrs
      inheritAttrs: o.inheritAttrs,
      // state
      ctx: Ie,
      data: Ie,
      props: Ie,
      attrs: Ie,
      slots: Ie,
      refs: Ie,
      setupState: Ie,
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
    return {}.NODE_ENV !== "production" ? a.ctx = ef(a) : a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Pg.bind(null, a), e.ce && e.ce(a), a;
  }
  let He = null;
  const bi = () => He || Ye, fo = (e) => {
    He = e, e.scope.on();
  }, jn = () => {
    He && He.scope.off(), He = null;
  }, Ff = /* @__PURE__ */ Cn("slot,component");
  function za(e, t) {
    const n = t.isNativeTag || gl;
    (Ff(e) || n(e)) && B("Do not use built-in or reserved HTML elements as component id: " + e);
  }
  function bc(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Ro = !1;
  function Mf(e, t = !1) {
    Ro = t;
    const { props: n, children: o } = e.vnode, s = bc(e);
    uf(e, n, s, t), yf(e, o);
    const a = s ? Of(e, t) : void 0;
    return Ro = !1, a;
  }
  function Of(e, t) {
    var n;
    const o = e.type;
    if ({}.NODE_ENV !== "production") {
      if (o.name && za(o.name, e.appContext.config), o.components) {
        const a = Object.keys(o.components);
        for (let i = 0; i < a.length; i++)
          za(a[i], e.appContext.config);
      }
      if (o.directives) {
        const a = Object.keys(o.directives);
        for (let i = 0; i < a.length; i++)
          sc(a[i]);
      }
      o.compilerOptions && Sc() && B('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
    }
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Pl(new Proxy(e.ctx, rc)), {}.NODE_ENV !== "production" && tf(e);
    const { setup: s } = o;
    if (s) {
      const a = e.setupContext = s.length > 1 ? Bf(e) : null;
      fo(e), Kn();
      const i = Yt(s, e, 0, [{}.NODE_ENV !== "production" ? ro(e.props) : e.props, a]);
      if (Wn(), jn(), si(i)) {
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
          B(`Component <${r}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
        }
      } else
        mr(e, i, t);
    } else
      wc(e, t);
  }
  function mr(e, t, n) {
    ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Pe(t) ? ({}.NODE_ENV !== "production" && go(t) && B("setup() should not return VNodes directly - return a render function instead."), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ol(t), {}.NODE_ENV !== "production" && nf(e)) : {}.NODE_ENV !== "production" && t !== void 0 && B(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), wc(e, n);
  }
  let ja;
  const Sc = () => !ja;
  function wc(e, t, n) {
    const o = e.type;
    if (!e.render) {
      if (!t && ja && !o.render) {
        const s = o.template || _i(e).template;
        if (s) {
          ({}).NODE_ENV !== "production" && Kt(e, "compile");
          const { isCustomElement: a, compilerOptions: i } = e.appContext.config, { delimiters: r, compilerOptions: l } = o, d = Ge(Ge({
            isCustomElement: a,
            delimiters: r
          }, i), l);
          o.render = ja(s, d), {}.NODE_ENV !== "production" && Wt(e, "compile");
        }
      }
      e.render = o.render || tt;
    }
    fo(e), Kn(), sf(e), Wn(), jn(), {}.NODE_ENV !== "production" && !o.render && e.render === tt && !t && (o.template ? B(
      'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
      /* should not happen */
    ) : B("Component is missing template or render function."));
  }
  function _r(e) {
    return new Proxy(e.attrs, {}.NODE_ENV !== "production" ? {
      get(t, n) {
        return ks(), ft(e, "get", "$attrs"), t[n];
      },
      set() {
        return B("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return B("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return ft(e, "get", "$attrs"), t[n];
      }
    });
  }
  function Bf(e) {
    const t = (o) => {
      if ({}.NODE_ENV !== "production" && (e.exposed && B("expose() should be called only once per setup()."), o != null)) {
        let s = typeof o;
        s === "object" && (ie(o) ? s = "array" : Xe(o) && (s = "ref")), s !== "object" && B(`expose() should be passed a plain object, received ${s}.`);
      }
      e.exposed = o || {};
    };
    let n;
    return {}.NODE_ENV !== "production" ? Object.freeze({
      get attrs() {
        return n || (n = _r(e));
      },
      get slots() {
        return ro(e.slots);
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
  const If = /(?:^|[-_])(\w)/g, $f = (e) => e.replace(If, (t) => t.toUpperCase()).replace(/[-_]/g, "");
  function Si(e, t = !0) {
    return ce(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Ys(e, t, n = !1) {
    let o = Si(t);
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
    return o ? $f(o) : n ? "App" : "Anonymous";
  }
  function Cc(e) {
    return ce(e) && "__vccOpts" in e;
  }
  const y = (e, t) => lg(e, t, Ro);
  function Vo(e, t, n) {
    const o = arguments.length;
    return o === 2 ? Pe(t) && !ie(t) ? go(t) ? p(e, null, [t]) : p(e, t) : p(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && go(n) && (n = [n]), p(e, t, n));
  }
  const Uf = Symbol({}.NODE_ENV !== "production" ? "ssrContext" : ""), Rf = () => {
    {
      const e = Je(Uf);
      return e || {}.NODE_ENV !== "production" && B("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
    }
  };
  function ga(e) {
    return !!(e && e.__v_isShallow);
  }
  function Vf() {
    if ({}.NODE_ENV === "production" || typeof window == "undefined")
      return;
    const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, s = {
      header(u) {
        return Pe(u) ? u.__isVue ? ["div", e, "VueInstance"] : Xe(u) ? [
          "div",
          {},
          ["span", e, c(u)],
          "<",
          r(u.value),
          ">"
        ] : Un(u) ? [
          "div",
          {},
          ["span", e, ga(u) ? "ShallowReactive" : "Reactive"],
          "<",
          r(u),
          `>${Sn(u) ? " (readonly)" : ""}`
        ] : Sn(u) ? [
          "div",
          {},
          ["span", e, ga(u) ? "ShallowReadonly" : "Readonly"],
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
      u.type.props && u.props && g.push(i("props", fe(u.props))), u.setupState !== Ie && g.push(i("setup", u.setupState)), u.data !== Ie && g.push(i("data", fe(u.data)));
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
      return g = Ge({}, g), Object.keys(g).length ? [
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
      return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : Pe(u) ? ["object", { object: g ? fe(u) : u }] : ["span", n, String(u)];
    }
    function l(u, g) {
      const f = u.type;
      if (ce(f))
        return;
      const m = {};
      for (const w in u.ctx)
        d(f, w, g) && (m[w] = u.ctx[w]);
      return m;
    }
    function d(u, g, f) {
      const m = u[f];
      if (ie(m) && m.includes(g) || Pe(m) && g in m || u.extends && d(u.extends, g, f) || u.mixins && u.mixins.some((w) => d(w, g, f)))
        return !0;
    }
    function c(u) {
      return ga(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
    }
    window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
  }
  const vr = "3.2.47", zf = "http://www.w3.org/2000/svg", On = typeof document != "undefined" ? document : null, yr = On && /* @__PURE__ */ On.createElement("template"), jf = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, o) => {
      const s = t ? On.createElementNS(zf, e) : On.createElement(e, n ? { is: n } : void 0);
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
  function Hf(e, t, n) {
    const o = e._vtc;
    o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  function qf(e, t, n) {
    const o = e.style, s = Ue(n);
    if (n && !s) {
      if (t && !Ue(t))
        for (const a in t)
          n[a] == null && Ha(o, a, "");
      for (const a in n)
        Ha(o, a, n[a]);
    } else {
      const a = o.display;
      s ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = a);
    }
  }
  const Gf = /[^\\];\s*$/, br = /\s*!important$/;
  function Ha(e, t, n) {
    if (ie(n))
      n.forEach((o) => Ha(e, t, o));
    else if (n == null && (n = ""), {}.NODE_ENV !== "production" && Gf.test(n) && B(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
      e.setProperty(t, n);
    else {
      const o = Kf(e, t);
      br.test(n) ? e.setProperty(Jt(o), n.replace(br, ""), "important") : e[o] = n;
    }
  }
  const Sr = ["Webkit", "Moz", "ms"], fa = {};
  function Kf(e, t) {
    const n = fa[t];
    if (n)
      return n;
    let o = Rt(t);
    if (o !== "filter" && o in e)
      return fa[t] = o;
    o = Hn(o);
    for (let s = 0; s < Sr.length; s++) {
      const a = Sr[s] + o;
      if (a in e)
        return fa[t] = a;
    }
    return t;
  }
  const wr = "http://www.w3.org/1999/xlink";
  function Wf(e, t, n, o, s) {
    if (o && t.startsWith("xlink:"))
      n == null ? e.removeAttributeNS(wr, t.slice(6, t.length)) : e.setAttributeNS(wr, t, n);
    else {
      const a = vd(t);
      n == null || a && !ul(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n);
    }
  }
  function Xf(e, t, n, o, s, a, i) {
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
      ({}).NODE_ENV !== "production" && !r && B(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, l);
    }
    r && e.removeAttribute(t);
  }
  function Ec(e, t, n, o) {
    e.addEventListener(t, n, o);
  }
  function Yf(e, t, n, o) {
    e.removeEventListener(t, n, o);
  }
  function Jf(e, t, n, o, s = null) {
    const a = e._vei || (e._vei = {}), i = a[t];
    if (o && i)
      i.value = o;
    else {
      const [r, l] = Zf(t);
      if (o) {
        const d = a[t] = tp(o, s);
        Ec(e, r, d, l);
      } else
        i && (Yf(e, r, i, l), a[t] = void 0);
    }
  }
  const Cr = /(?:Once|Passive|Capture)$/;
  function Zf(e) {
    let t;
    if (Cr.test(e)) {
      t = {};
      let o;
      for (; o = e.match(Cr); )
        e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
    }
    return [e[2] === ":" ? e.slice(3) : Jt(e.slice(2)), t];
  }
  let pa = 0;
  const Qf = /* @__PURE__ */ Promise.resolve(), ep = () => pa || (Qf.then(() => pa = 0), pa = Date.now());
  function tp(e, t) {
    const n = (o) => {
      if (!o._vts)
        o._vts = Date.now();
      else if (o._vts <= n.attached)
        return;
      kt(np(o, n.value), t, 5, [o]);
    };
    return n.value = e, n.attached = ep(), n;
  }
  function np(e, t) {
    if (ie(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = !0;
      }, t.map((o) => (s) => !s._stopped && o && o(s));
    } else
      return t;
  }
  const Er = /^on[a-z]/, op = (e, t, n, o, s = !1, a, i, r, l) => {
    t === "class" ? Hf(e, o, s) : t === "style" ? qf(e, n, o) : Go(t) ? Cs(t) || Jf(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : sp(e, t, o, s)) ? Xf(e, t, o, a, i, r, l) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Wf(e, t, o, s));
  };
  function sp(e, t, n, o) {
    return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Er.test(t) && ce(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Er.test(t) && Ue(n) ? !1 : t in e;
  }
  const an = "transition", wo = "animation", _n = (e, { slots: t }) => Vo(Jl, ap(e), t);
  _n.displayName = "Transition";
  const xc = {
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
  _n.props = /* @__PURE__ */ Ge({}, Jl.props, xc);
  const Pn = (e, t = []) => {
    ie(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  }, xr = (e) => e ? ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
  function ap(e) {
    const t = {};
    for (const j in e)
      j in xc || (t[j] = e[j]);
    if (e.css === !1)
      return t;
    const { name: n = "v", type: o, duration: s, enterFromClass: a = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: r = `${n}-enter-to`, appearFromClass: l = a, appearActiveClass: d = i, appearToClass: c = r, leaveFromClass: u = `${n}-leave-from`, leaveActiveClass: g = `${n}-leave-active`, leaveToClass: f = `${n}-leave-to` } = e, m = ip(s), w = m && m[0], E = m && m[1], { onBeforeEnter: k, onEnter: N, onEnterCancelled: z, onLeave: I, onLeaveCancelled: Z, onBeforeAppear: Ee = k, onAppear: X = N, onAppearCancelled: W = z } = t, be = (j, Le, je) => {
      Nn(j, Le ? c : r), Nn(j, Le ? d : i), je && je();
    }, le = (j, Le) => {
      j._isLeaving = !1, Nn(j, u), Nn(j, f), Nn(j, g), Le && Le();
    }, pe = (j) => (Le, je) => {
      const ot = j ? X : N, Re = () => be(Le, j, je);
      Pn(ot, [Le, Re]), Ar(() => {
        Nn(Le, j ? l : a), rn(Le, j ? c : r), xr(ot) || kr(Le, o, w, Re);
      });
    };
    return Ge(t, {
      onBeforeEnter(j) {
        Pn(k, [j]), rn(j, a), rn(j, i);
      },
      onBeforeAppear(j) {
        Pn(Ee, [j]), rn(j, l), rn(j, d);
      },
      onEnter: pe(!1),
      onAppear: pe(!0),
      onLeave(j, Le) {
        j._isLeaving = !0;
        const je = () => le(j, Le);
        rn(j, u), cp(), rn(j, g), Ar(() => {
          j._isLeaving && (Nn(j, u), rn(j, f), xr(I) || kr(j, o, E, je));
        }), Pn(I, [j, je]);
      },
      onEnterCancelled(j) {
        be(j, !1), Pn(z, [j]);
      },
      onAppearCancelled(j) {
        be(j, !0), Pn(W, [j]);
      },
      onLeaveCancelled(j) {
        le(j), Pn(Z, [j]);
      }
    });
  }
  function ip(e) {
    if (e == null)
      return null;
    if (Pe(e))
      return [ha(e.enter), ha(e.leave)];
    {
      const t = ha(e);
      return [t, t];
    }
  }
  function ha(e) {
    const t = Ad(e);
    return {}.NODE_ENV !== "production" && fg(t, "<transition> explicit duration"), t;
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
  let rp = 0;
  function kr(e, t, n, o) {
    const s = e._endId = ++rp, a = () => {
      s === e._endId && o();
    };
    if (n)
      return setTimeout(a, n);
    const { type: i, timeout: r, propCount: l } = lp(e, t);
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
  function lp(e, t) {
    const n = window.getComputedStyle(e), o = (m) => (n[m] || "").split(", "), s = o(`${an}Delay`), a = o(`${an}Duration`), i = Tr(s, a), r = o(`${wo}Delay`), l = o(`${wo}Duration`), d = Tr(r, l);
    let c = null, u = 0, g = 0;
    t === an ? i > 0 && (c = an, u = i, g = a.length) : t === wo ? d > 0 && (c = wo, u = d, g = l.length) : (u = Math.max(i, d), c = u > 0 ? i > d ? an : wo : null, g = c ? c === an ? a.length : l.length : 0);
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
  function cp() {
    return document.body.offsetHeight;
  }
  const Lr = (e) => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return ie(t) ? (n) => oo(t, n) : t;
  }, up = {
    created(e, { value: t }, n) {
      e.checked = ws(t, n.props.value), e._assign = Lr(n), Ec(e, "change", () => {
        e._assign(dp(e));
      });
    },
    beforeUpdate(e, { value: t, oldValue: n }, o) {
      e._assign = Lr(o), t !== n && (e.checked = ws(t, o.props.value));
    }
  };
  function dp(e) {
    return "_value" in e ? e._value : e.value;
  }
  const gp = ["ctrl", "shift", "alt", "meta"], fp = {
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
    exact: (e, t) => gp.some((n) => e[`${n}Key`] && !t.includes(n))
  }, yt = (e, t) => (n, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = fp[t[s]];
      if (a && a(n, t))
        return;
    }
    return e(n, ...o);
  }, pp = {
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
    const o = Jt(n.key);
    if (t.some((s) => s === o || pp[s] === o))
      return e(n);
  }, wi = {
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
  const hp = /* @__PURE__ */ Ge({ patchProp: op }, jf);
  let Pr;
  function mp() {
    return Pr || (Pr = Ef(hp));
  }
  const Ac = (...e) => {
    const t = mp().createApp(...e);
    ({}).NODE_ENV !== "production" && (_p(t), vp(t));
    const { mount: n } = t;
    return t.mount = (o) => {
      const s = yp(o);
      if (!s)
        return;
      const a = t._component;
      !ce(a) && !a.render && !a.template && (a.template = s.innerHTML), s.innerHTML = "";
      const i = n(s, !1, s instanceof SVGElement);
      return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
    }, t;
  };
  function _p(e) {
    Object.defineProperty(e.config, "isNativeTag", {
      value: (t) => hd(t) || md(t),
      writable: !1
    });
  }
  function vp(e) {
    if (Sc()) {
      const t = e.config.isCustomElement;
      Object.defineProperty(e.config, "isCustomElement", {
        get() {
          return t;
        },
        set() {
          B("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
        }
      });
      const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
      Object.defineProperty(e.config, "compilerOptions", {
        get() {
          return B(o), n;
        },
        set() {
          B(o);
        }
      });
    }
  }
  function yp(e) {
    if (Ue(e)) {
      const t = document.querySelector(e);
      return {}.NODE_ENV !== "production" && !t && B(`Failed to mount app: mount target selector "${e}" returned null.`), t;
    }
    return {}.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && B('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
  }
  function bp() {
    Vf();
  }
  ({}).NODE_ENV !== "production" && bp();
  const V = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, s] of t)
      n[o] = s;
    return n;
  }, Sp = {
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
  }, wp = ["width", "height", "aria-labelledby"], Cp = ["id"], Ep = ["fill"], xp = ["d"];
  function Ap(e, t, n, o, s, a) {
    return v(), T("span", {
      class: ge(["mw-ui-icon notranslate", a.classes])
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
        }, ae(n.iconName), 9, Cp)) : se("", !0),
        C("g", { fill: n.iconColor }, [
          C("path", { d: a.iconImagePath }, null, 8, xp)
        ], 8, Ep)
      ], 8, wp))
    ], 2);
  }
  const ze = /* @__PURE__ */ V(Sp, [["render", Ap]]), kp = {
    name: "MwButton",
    components: {
      MwIcon: ze
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
  }, Tp = { class: "mw-ui-button__content" }, Dp = ["textContent"];
  function Lp(e, t, n, o, s, a) {
    const i = _("mw-icon");
    return v(), M(_o(a.component), {
      class: ge(["mw-ui-button", a.classes]),
      href: n.href,
      disabled: n.disabled || null
    }, {
      default: S(() => [
        Ke(e.$slots, "default", {}, () => [
          C("span", Tp, [
            n.icon ? (v(), M(i, {
              key: 0,
              icon: n.icon,
              size: n.large ? 28 : n.iconSize,
              class: ge(["mw-ui-button__icon", a.iconClass])
            }, null, 8, ["icon", "size", "class"])) : se("", !0),
            !a.isIcon && n.label ? (v(), T("span", {
              key: 1,
              class: "mw-ui-button__label",
              textContent: ae(n.label)
            }, null, 8, Dp)) : se("", !0),
            n.indicator ? (v(), M(i, Ws({
              key: 2,
              icon: n.indicator,
              size: n.large ? 28 : n.indicatorSize,
              class: ["mw-ui-button__indicator", a.indicatorClass]
            }, {
              [dn(a.indicatorClickEvent)]: t[0] || (t[0] = yt((r) => e.$emit("indicator-icon-clicked"), ["stop"]))
            }), null, 16, ["icon", "size", "class"])) : se("", !0)
          ])
        ])
      ], void 0),
      _: 3
    }, 8, ["class", "href", "disabled"]);
  }
  const De = /* @__PURE__ */ V(kp, [["render", Lp]]), Pp = {
    name: "MwButtonGroup",
    components: {
      MwButton: De
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
  }, Np = { class: "row mw-ui-button-group ma-0 pa-0" };
  function Fp(e, t, n, o, s, a) {
    const i = _("mw-button");
    return v(), T("div", Np, [
      (v(!0), T(Ce, null, Qe(n.items, (r) => (v(), M(i, Ws({
        key: r.value,
        value: r.value,
        "aria-selected": a.isActive(r) || null
      }, r.props, {
        class: ["ma-0", a.buttonClasses(r)],
        style: a.activeIndicatorStyle(r),
        onClick: yt((l) => e.$emit("select", r.value), ["stop"])
      }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
    ]);
  }
  const Zo = /* @__PURE__ */ V(Pp, [["render", Fp]]), Mp = {
    name: "MwUiBottomNavigation",
    components: { MwButtonGroup: Zo },
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
  }, Op = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, Bp = { class: "col-12 ma-0 pa-0" };
  function Ip(e, t, n, o, s, a) {
    const i = _("mw-button-group");
    return v(), T("footer", Op, [
      C("div", Bp, [
        Ke(e.$slots, "default", {}, () => [
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
  const $p = /* @__PURE__ */ V(Mp, [["render", Ip]]), Up = {
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
  }, Rp = { class: "mw-ui-card" }, Vp = ["textContent"], zp = { class: "mw-ui-card__content" };
  function jp(e, t, n, o, s, a) {
    return v(), T("div", Rp, [
      Ke(e.$slots, "header", {}, () => [
        n.title ? (v(), T("div", {
          key: 0,
          class: "mw-ui-card__title title",
          textContent: ae(n.title)
        }, null, 8, Vp)) : se("", !0)
      ]),
      C("div", zp, [
        Ke(e.$slots, "default")
      ])
    ]);
  }
  const jt = /* @__PURE__ */ V(Up, [["render", jp]]), Hp = {}, qp = { class: "mw-ui-divider row" };
  function Gp(e, t) {
    return v(), T("div", qp);
  }
  const Js = /* @__PURE__ */ V(Hp, [["render", Gp]]), Kp = {
    name: "MWGrid",
    props: {
      tag: {
        type: String,
        default: "div"
      }
    }
  };
  function Wp(e, t, n, o, s, a) {
    return v(), M(_o(n.tag), { class: "mw-grid container" }, {
      default: S(() => [
        Ke(e.$slots, "default")
      ], void 0),
      _: 3
    });
  }
  const kc = /* @__PURE__ */ V(Kp, [["render", Wp]]), Xp = {
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
  function Yp(e, t, n, o, s, a) {
    return v(), M(_o(n.tag), {
      class: ge(a.classes)
    }, {
      default: S(() => [
        Ke(e.$slots, "default")
      ], void 0),
      _: 3
    }, 8, ["class"]);
  }
  const Ae = /* @__PURE__ */ V(Xp, [["render", Yp]]), qa = ["mobile", "tablet", "desktop", "desktop-wide"], Jp = qa.reduce(
    (e, t) => Ot(Ct({}, e), {
      [t]: {
        type: [String, Number],
        default: null
      }
    }),
    {}
  ), Zp = {
    name: "MwCol",
    props: Ot(Ct({}, Jp), {
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
        for (let n = 0; n < qa.length; n++) {
          let o = qa[n], s = this.$props[o];
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
  function Qp(e, t, n, o, s, a) {
    return v(), M(_o(n.tag), {
      class: ge(a.classes)
    }, {
      default: S(() => [
        Ke(e.$slots, "default")
      ], void 0),
      _: 3
    }, 8, ["class"]);
  }
  const Me = /* @__PURE__ */ V(Zp, [["render", Qp]]), Tc = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", eh = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", th = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z", Dc = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Qt = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", nh = {
    path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
    flippable: !1
  }, Nr = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", oh = "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z", Lc = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", Pc = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", En = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Nc = "M15.65 4.35A8 8 0 1 0 17.4 13h-2.22a6 6 0 1 1-1-7.22L11 9h7V2z", Ft = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", Zs = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", Ci = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", Ei = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Fc = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", Mc = "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z", Oc = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z", Bc = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Qo = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", Ic = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", $c = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Ga = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", Qs = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", sh = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", ah = {
    path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
  }, vn = {
    path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
    flippable: !1
  }, ih = {
    path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
  }, po = {
    path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
  }, rh = {
    path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
  }, lh = "M11.5 0l.42 2.75a7.67 7.67 0 0 1 1.87.77L16 1.87 18.16 4 16.49 6.23a7.67 7.67 0 0 1 .76 1.85L20 8.5v3l-2.75.42a7.67 7.67 0 0 1-.77 1.87L18.13 16 16 18.16l-2.24-1.67a7.67 7.67 0 0 1-1.85.76L11.5 20h-3l-.42-2.75a7.45 7.45 0 0 1-1.86-.77L4 18.13 1.87 16l1.65-2.23a7 7 0 0 1-.77-1.85L0 11.5v-3l2.75-.42a7.45 7.45 0 0 1 .77-1.86L1.87 4 4 1.87 6.23 3.52a7.17 7.17 0 0 1 1.85-.77L8.5 0ZM10 6.5A3.5 3.5 0 1 0 13.5 10 3.5 3.5 0 0 0 10 6.5Z", Fr = "M10 1a9 9 0 109 9 9 9 0 00-9-9zm5 10H5V9h10z", xi = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", ch = "M 1 3 L 1 15 A 2 2 0 0 0 3 17 L 15 17 L 15 12.234375 A 3 3 0 0 0 17 13 A 3 3 0 0 0 20 10 A 3 3 0 0 0 17 7 A 3 3 0 0 0 15 7.7636719 L 15 3 L 10.580078 3 A 3 3 0 0 1 11 4.5 A 3 3 0 0 1 5 4.5 A 3 3 0 0 1 5.4199219 3 L 1 3 z", uh = "M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z", dh = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z", gh = "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z", fh = "M 19 3 L 2 7 A 3.83 3.83 0 0 0 1 9.5 A 3.83 3.83 0 0 0 2 12 L 4 12.470703 L 4 15 C 4 16.108 4.892 17 6 17 C 7.108 17 8 16.108 8 15 L 8 13.412109 L 19 16 L 19 3 z", ph = {
    name: "MwDialog",
    components: {
      MwButton: De,
      MwRow: Ae,
      MwCol: Me,
      MwDivider: Js
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
      return We(
        () => e.value,
        (r) => {
          r ? (i(), Wo(() => {
            n.value.focus();
          })) : a();
        }
      ), {
        close: a,
        classes: o,
        overlayStyles: s,
        mwIconClose: Ft,
        root: n
      };
    }
  }, hh = { class: "mw-ui-dialog__shell items-stretch" }, mh = { class: "mw-ui-dialog__body" };
  function _h(e, t, n, o, s, a) {
    const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = _("mw-divider");
    return v(), M(_n, {
      name: `mw-ui-animation-${n.animation}`
    }, {
      default: S(() => [
        n.value ? (v(), T("div", {
          key: 0,
          ref: "root",
          class: ge(["mw-ui-dialog", o.classes]),
          tabindex: "0",
          role: "dialog",
          "aria-modal": "true",
          onKeyup: t[1] || (t[1] = ao((c) => n.closeOnEscapeKey && o.close, ["esc"]))
        }, [
          C("div", {
            class: "mw-ui-dialog__overlay",
            style: nt(o.overlayStyles),
            onClick: t[0] || (t[0] = (...c) => o.close && o.close(...c))
          }, null, 4),
          C("div", hh, [
            n.header ? Ke(e.$slots, "header", { key: 0 }, () => [
              p(l, { class: "mw-ui-dialog__header" }, {
                default: S(() => [
                  p(i, {
                    grow: "",
                    class: "items-center mw-ui-dialog__header-title justify-start",
                    innerHTML: n.title
                  }, null, 8, ["innerHTML"]),
                  p(i, {
                    shrink: "",
                    class: "justify-center"
                  }, {
                    default: S(() => [
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
            ]) : se("", !0),
            C("div", mh, [
              Ke(e.$slots, "default")
            ]),
            Ke(e.$slots, "footer")
          ])
        ], 34)) : se("", !0)
      ], void 0),
      _: 3
    }, 8, ["name"]);
  }
  const Yn = /* @__PURE__ */ V(ph, [["render", _h]]), vh = {
    name: "MwInput",
    components: {
      MwIcon: ze
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
        const t = Ct({}, e.$attrs);
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
  }, yh = { class: "mw-ui-input__content" };
  function bh(e, t, n, o, s, a) {
    const i = _("mw-icon");
    return v(), T("div", {
      class: ge(a.classes),
      onClick: t[2] || (t[2] = (r) => a.focus())
    }, [
      C("div", yh, [
        Ke(e.$slots, "icon", {}, () => [
          n.icon ? (v(), M(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: "mw-ui-input__icon"
          }, null, 8, ["icon", "size"])) : se("", !0)
        ]),
        (v(), M(_o(n.type === "textarea" ? n.type : "input"), Ws({
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
        Ke(e.$slots, "indicator", {}, () => [
          n.indicator ? (v(), M(i, {
            key: 0,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize || n.iconSize,
            class: "mw-ui-input__indicator",
            onClick: t[1] || (t[1] = yt((r) => e.$emit("indicator-clicked"), ["stop"]))
          }, null, 8, ["icon", "size"])) : se("", !0)
        ])
      ])
    ], 2);
  }
  const Ai = /* @__PURE__ */ V(vh, [["render", bh]]), Sh = {
    name: "MwMessage",
    components: { MwCol: Me, MwRow: Ae, MwIcon: ze, MwButton: De },
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
        notice: ah,
        warning: po,
        success: vn,
        error: ih
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
  function wh(e, t, n, o, s, a) {
    const i = _("mw-icon"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row");
    return e.shown ? (v(), M(d, {
      key: 0,
      class: ge([a.classes, "mw-ui-message"]),
      "aria-live": n.type !== "error" ? "polite" : null,
      "aria-labelledby": `${e.id}-label`,
      role: n.type === "error" ? "alert" : null,
      align: "normal"
    }, {
      default: S(() => [
        Ke(e.$slots, "icon", {}, () => [
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
          default: S(() => [
            Ke(e.$slots, "default")
          ], void 0, !0),
          _: 3
        }, 8, ["id"]),
        Ke(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
          n.dismissable ? (v(), M(l, {
            key: 0,
            class: "col shrink items-start mw-ui-message__action py-1",
            type: "icon",
            icon: e.mwIconClose,
            "icon-size": 24,
            onClick: a.hideMessage
          }, null, 8, ["icon", "onClick"])) : se("", !0)
        ])
      ], void 0),
      _: 3
    }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : se("", !0);
  }
  const Ch = /* @__PURE__ */ V(Sh, [["render", wh]]), Eh = {}, xh = { class: "mw-ui-spinner" }, Ah = /* @__PURE__ */ C("div", { class: "mw-ui-spinner__bounce" }, null, -1), kh = [
    Ah
  ];
  function Th(e, t) {
    return v(), T("div", xh, kh);
  }
  const Jn = /* @__PURE__ */ V(Eh, [["render", Th]]), xt = {
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
  }, Dh = {
    name: "MwUiThumbnail",
    components: { MwUiIcon: ze },
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
  function Lh(e, t, n, o, s, a) {
    const i = _("mw-ui-icon");
    return n.thumbnail ? (v(), T("div", {
      key: 0,
      class: "mw-ui-thumbnail",
      style: nt(o.style)
    }, null, 4)) : (v(), M(i, {
      key: 1,
      class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
      style: nt(o.style),
      icon: n.placeholderIcon,
      size: n.placeholderIconSize
    }, null, 8, ["style", "icon", "size"]));
  }
  const ki = /* @__PURE__ */ V(Dh, [["render", Lh]]), Ph = {
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
  }, Nh = { class: "mw-ui-radio__controls" }, Fh = ["id", "disabled", "name", "value"], Mh = /* @__PURE__ */ C("span", { class: "mw-ui-radio__controls__icon" }, null, -1), Oh = ["for", "textContent"];
  function Bh(e, t, n, o, s, a) {
    const i = _("mw-row");
    return v(), M(i, {
      class: ge(["mw-ui-radio flex items-center py-2", a.widgetClass])
    }, {
      default: S(() => [
        C("div", Nh, [
          G(C("input", {
            id: n.id,
            "onUpdate:modelValue": t[0] || (t[0] = (r) => a.inputModel = r),
            type: "radio",
            disabled: n.disabled || null,
            name: n.name,
            value: n.inputValue
          }, null, 8, Fh), [
            [up, a.inputModel]
          ]),
          Mh
        ]),
        C("label", {
          for: n.id,
          class: "ps-2",
          textContent: ae(n.label)
        }, null, 8, Oh)
      ], void 0),
      _: 1
    }, 8, ["class"]);
  }
  const Ns = /* @__PURE__ */ V(Ph, [["render", Bh]]), Uc = {
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
        (o) => Vo(Ns, {
          key: o.value,
          disabled: o.disabled,
          label: o.text,
          inputValue: o.value,
          name: e.name
        })
      ) : n = this.$slots.default(), Vo("div", { class: "mw-ui-radio-group" }, n);
    }
  }, Ih = {
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
  }, $h = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
  function Uh(e, t, n, o, s, a) {
    return v(), T("div", {
      class: ge(["mw-progress-bar", a.containerClass]),
      role: "progressbar",
      "aria-valuenow": n.value,
      "aria-valuemin": n.minValue,
      "aria-valuemax": n.maxValue,
      style: nt(a.containerStyles)
    }, [
      C("div", {
        class: ge(["mw-progress-bar__bar", a.barClass]),
        style: nt(a.barStyles)
      }, null, 6)
    ], 14, $h);
  }
  const Rh = /* @__PURE__ */ V(Ih, [["render", Uh]]), Vh = (e, t, n, o) => (s) => {
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
  }, zh = (e, t, n, o) => ({ initiateDrag: Vh(
    e,
    t,
    n,
    o
  ) }), jh = (e, t, n, o) => {
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
  }, Hh = {
    name: "MwExpandableContent",
    components: {
      MwButton: De
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
      ), s = ne(1), { initiateDrag: a } = zh(
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
      } = jh(o, s, n, t), u = () => d(l.value + 1), g = ne(null), f = y(() => ({
        "--collapsed-height": o.value + "px"
      })), m = () => {
        if (!n.value)
          return;
        const E = n.value.style.height;
        if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, E) {
          let k = Math.min(E, s.value);
          k = Math.max(k, o.value), k === o.value && (t.value = !0), n.value.style.height = k + "px";
        }
      };
      return lt(() => K(this, null, function* () {
        var E;
        yield Wo(), s.value = n.value.scrollHeight, (E = g.value) == null || E.addEventListener(
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
        mwIconCollapse: rh,
        mwIconExpand: Pc,
        onDragButtonClicked: () => {
          t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
        },
        scrollable: r,
        scrollIndex: l,
        scrollToNextStep: u
      };
    }
  }, qh = { class: "mw-ui-expandable-content__container" }, Gh = {
    key: 0,
    class: "mw-ui-expandable-content__scroll"
  }, Kh = {
    ref: "dragIndicatorRef",
    class: "mw-ui-expandable-content__drag-button"
  };
  function Wh(e, t, n, o, s, a) {
    const i = _("mw-button");
    return v(), T("div", {
      class: "mw-ui-expandable-content",
      style: nt(o.cssVars)
    }, [
      C("div", qh, [
        C("div", {
          ref: "contentRef",
          class: ge(["mw-ui-expandable-content__body", {
            "mw-ui-expandable-content__body--collapsed": o.isCollapsed
          }])
        }, [
          Ke(e.$slots, "default")
        ], 2),
        n.scroll && o.scrollable ? (v(), T("div", Gh, [
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
          }, null, 8, ["icon", "disabled", "onClick"])) : se("", !0)
        ])) : se("", !0)
      ]),
      C("div", Kh, [
        C("span", {
          class: "mw-ui-expandable-content__drag-button__icon",
          onClick: t[0] || (t[0] = (...r) => o.onDragButtonClicked && o.onDragButtonClicked(...r))
        })
      ], 512)
    ], 4);
  }
  const Xh = /* @__PURE__ */ V(Hh, [["render", Wh]]), Yh = {
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
  }, Jh = ["width", "height", "viewport"], Zh = ["r", "cx", "cy", "stroke-dasharray"], Qh = ["r", "cx", "cy", "stroke-dasharray"];
  function em(e, t, n, o, s, a) {
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
      }, null, 8, Zh),
      C("circle", {
        class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
        r: o.radius,
        cx: n.size / 2,
        cy: n.size / 2,
        fill: "transparent",
        "stroke-dasharray": o.dashArray,
        "stroke-dashoffset": "0",
        style: nt({ strokeDashoffset: `${o.strokeDashOffset}px` })
      }, null, 12, Qh)
    ], 12, Jh);
  }
  const Rc = /* @__PURE__ */ V(Yh, [["render", em]]), ln = {
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
  }, ma = {
    mobile: () => matchMedia(cn.mobile).matches,
    tablet: () => matchMedia(cn.tablet).matches,
    desktop: () => matchMedia(cn.desktop).matches,
    desktopwide: () => matchMedia(cn["desktop-wide"]).matches,
    tabletAndUp: () => matchMedia(cn["tablet-and-up"]).matches,
    tabletAndDown: () => matchMedia(cn["tablet-and-down"]).matches,
    desktopAndUp: () => matchMedia(cn["desktop-and-up"]).matches,
    desktopAndDown: () => matchMedia(cn["desktop-and-down"]).matches
  }, tm = {
    install: (e) => {
      const t = () => {
        for (let o in ma)
          ma.hasOwnProperty(o) && (n.value[o] = ma[o]());
      }, n = ne({});
      t(), window.addEventListener("resize", t), e.config.globalProperties.$mwui = Ot(Ct({}, e.config.globalProperties.$mwui || {}), {
        breakpoint: n.value
      }), e.provide("breakpoints", n);
    }
  }, nm = {
    install: (e) => {
      e.config.globalProperties.$mwui = Ot(Ct({}, e.config.globalProperties.$mwui || {}), {
        colors: xt
      }), e.provide("colors", xt);
    }
  };
  function om() {
    return Vc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function Vc() {
    return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
  }
  const sm = typeof Proxy == "function", am = "devtools-plugin:setup", im = "plugin:settings:set";
  let eo, Ka;
  function rm() {
    var e;
    return eo !== void 0 || (typeof window != "undefined" && window.performance ? (eo = !0, Ka = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (eo = !0, Ka = global.perf_hooks.performance) : eo = !1), eo;
  }
  function lm() {
    return rm() ? Ka.now() : Date.now();
  }
  class cm {
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
          return lm();
        }
      }, n && n.on(im, (i, r) => {
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
    const n = e, o = Vc(), s = om(), a = sm && n.enableEarlyProxy;
    if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
      s.emit(am, e, t);
    else {
      const i = a ? new cm(n, s) : null;
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
    return e === void 0 && (e = null), Je(e !== null ? e : jc);
  }
  function Zn(e, t) {
    Object.keys(e).forEach(function(n) {
      return t(e[n], n);
    });
  }
  function Hc(e) {
    return e !== null && typeof e == "object";
  }
  function um(e) {
    return e && typeof e.then == "function";
  }
  function Nt(e, t) {
    if (!e)
      throw new Error("[vuex] " + t);
  }
  function dm(e, t) {
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
    ea(e, n, [], e._modules.root, !0), Ti(e, n, t);
  }
  function Ti(e, t, n) {
    var o = e._state, s = e._scope;
    e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var a = e._wrappedGetters, i = {}, r = {}, l = kd(!0);
    l.run(function() {
      Zn(a, function(d, c) {
        i[c] = dm(d, e), r[c] = y(function() {
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
    }), e._scope = l, e.strict && mm(e), o && n && e._withCommit(function() {
      o.data = null;
    }), s && s.stop();
  }
  function ea(e, t, n, o, s) {
    var a = !n.length, i = e._modules.getNamespace(n);
    if (o.namespaced && (e._modulesNamespaceMap[i] && {}.NODE_ENV !== "production" && console.error("[vuex] duplicate namespace " + i + " for the namespaced module " + n.join("/")), e._modulesNamespaceMap[i] = o), !a && !s) {
      var r = Di(t, n.slice(0, -1)), l = n[n.length - 1];
      e._withCommit(function() {
        ({}).NODE_ENV !== "production" && l in r && console.warn(
          '[vuex] state field "' + l + '" was overridden by a module with the same name at "' + n.join(".") + '"'
        ), r[l] = o.state;
      });
    }
    var d = o.context = gm(e, i, n);
    o.forEachMutation(function(c, u) {
      var g = i + u;
      fm(e, g, c, d);
    }), o.forEachAction(function(c, u) {
      var g = c.root ? u : i + u, f = c.handler || c;
      pm(e, g, f, d);
    }), o.forEachGetter(function(c, u) {
      var g = i + u;
      hm(e, g, c, d);
    }), o.forEachChild(function(c, u) {
      ea(e, t, n.concat(u), c, s);
    });
  }
  function gm(e, t, n) {
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
          return Di(e.state, n);
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
  function fm(e, t, n, o) {
    var s = e._mutations[t] || (e._mutations[t] = []);
    s.push(function(i) {
      n.call(e, o.state, i);
    });
  }
  function pm(e, t, n, o) {
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
      return um(r) || (r = Promise.resolve(r)), e._devtoolHook ? r.catch(function(l) {
        throw e._devtoolHook.emit("vuex:error", l), l;
      }) : r;
    });
  }
  function hm(e, t, n, o) {
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
  function mm(e) {
    We(function() {
      return e._state.data;
    }, function() {
      ({}).NODE_ENV !== "production" && Nt(e._committing, "do not mutate vuex store state outside mutation handlers.");
    }, { deep: !0, flush: "sync" });
  }
  function Di(e, t) {
    return t.reduce(function(n, o) {
      return n[o];
    }, e);
  }
  function Fs(e, t, n) {
    return Hc(e) && e.type && (n = t, t = e, e = e.type), {}.NODE_ENV !== "production" && Nt(typeof e == "string", "expects string as the type, but found " + typeof e + "."), { type: e, payload: t, options: n };
  }
  var _m = "vuex bindings", Mr = "vuex:mutations", _a = "vuex:actions", to = "vuex", vm = 0;
  function ym(e, t) {
    zc(
      {
        id: "org.vuejs.vuex",
        app: e,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [_m]
      },
      function(n) {
        n.addTimelineLayer({
          id: Mr,
          label: "Vuex Mutations",
          color: Or
        }), n.addTimelineLayer({
          id: _a,
          label: "Vuex Actions",
          color: Or
        }), n.addInspector({
          id: to,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores..."
        }), n.on.getInspectorTree(function(o) {
          if (o.app === e && o.inspectorId === to)
            if (o.filter) {
              var s = [];
              Jc(s, t._modules.root, o.filter, ""), o.rootNodes = s;
            } else
              o.rootNodes = [
                Yc(t._modules.root, "")
              ];
        }), n.on.getInspectorState(function(o) {
          if (o.app === e && o.inspectorId === to) {
            var s = o.nodeId;
            Kc(t, s), o.state = wm(
              Em(t._modules, s),
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
            o.payload && (a.payload = o.payload), o._id = vm++, o._time = Date.now(), a.state = s, n.addTimelineEvent({
              layerId: _a,
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
              layerId: _a,
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
  var Or = 8702998, bm = 6710886, Sm = 16777215, Wc = {
    label: "namespaced",
    textColor: Sm,
    backgroundColor: bm
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
  function wm(e, t, n) {
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
      var a = Cm(t);
      s.getters = Object.keys(a).map(function(i) {
        return {
          key: i.endsWith("/") ? Xc(i) : i,
          editable: !1,
          value: Wa(function() {
            return a[i];
          })
        };
      });
    }
    return s;
  }
  function Cm(e) {
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
        }), s[a] = Wa(function() {
          return e[n];
        });
      } else
        t[n] = Wa(function() {
          return e[n];
        });
    }), t;
  }
  function Em(e, t) {
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
  function Wa(e) {
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
  }, Zc = { namespaced: { configurable: !0 } };
  Zc.namespaced.get = function() {
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
    Zn(this._children, t);
  };
  Mt.prototype.forEachGetter = function(t) {
    this._rawModule.getters && Zn(this._rawModule.getters, t);
  };
  Mt.prototype.forEachAction = function(t) {
    this._rawModule.actions && Zn(this._rawModule.actions, t);
  };
  Mt.prototype.forEachMutation = function(t) {
    this._rawModule.mutations && Zn(this._rawModule.mutations, t);
  };
  Object.defineProperties(Mt.prototype, Zc);
  var Qn = function(t) {
    this.register([], t, !1);
  };
  Qn.prototype.get = function(t) {
    return t.reduce(function(n, o) {
      return n.getChild(o);
    }, this.root);
  };
  Qn.prototype.getNamespace = function(t) {
    var n = this.root;
    return t.reduce(function(o, s) {
      return n = n.getChild(s), o + (n.namespaced ? s + "/" : "");
    }, "");
  };
  Qn.prototype.update = function(t) {
    Qc([], this.root, t);
  };
  Qn.prototype.register = function(t, n, o) {
    var s = this;
    o === void 0 && (o = !0), {}.NODE_ENV !== "production" && eu(t, n);
    var a = new Mt(n, o);
    if (t.length === 0)
      this.root = a;
    else {
      var i = this.get(t.slice(0, -1));
      i.addChild(t[t.length - 1], a);
    }
    n.modules && Zn(n.modules, function(r, l) {
      s.register(t.concat(l), r, o);
    });
  };
  Qn.prototype.unregister = function(t) {
    var n = this.get(t.slice(0, -1)), o = t[t.length - 1], s = n.getChild(o);
    if (!s) {
      ({}).NODE_ENV !== "production" && console.warn(
        "[vuex] trying to unregister module '" + o + "', which is not registered"
      );
      return;
    }
    s.runtime && n.removeChild(o);
  };
  Qn.prototype.isRegistered = function(t) {
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
  }, xm = {
    assert: function(e) {
      return typeof e == "function" || typeof e == "object" && typeof e.handler == "function";
    },
    expected: 'function or object with "handler" function'
  }, Ir = {
    getters: Br,
    mutations: Br,
    actions: xm
  };
  function eu(e, t) {
    Object.keys(Ir).forEach(function(n) {
      if (t[n]) {
        var o = Ir[n];
        Zn(t[n], function(s, a) {
          Nt(
            o.assert(s),
            Am(e, n, a, s, o.expected)
          );
        });
      }
    });
  }
  function Am(e, t, n, o, s) {
    var a = t + " should be " + s + ' but "' + t + "." + n + '"';
    return e.length > 0 && (a += ' in module "' + e.join(".") + '"'), a += " is " + JSON.stringify(o) + ".", a;
  }
  function km(e) {
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
    this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new Qn(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = a;
    var i = this, r = this, l = r.dispatch, d = r.commit;
    this.dispatch = function(g, f) {
      return l.call(i, g, f);
    }, this.commit = function(g, f, m) {
      return d.call(i, g, f, m);
    }, this.strict = s;
    var c = this._modules.root.state;
    ea(this, c, [], this._modules.root), Ti(this, c), o.forEach(function(u) {
      return u(n);
    });
  }, Li = { state: { configurable: !0 } };
  _t.prototype.install = function(t, n) {
    t.provide(n || jc, this), t.config.globalProperties.$store = this;
    var o = this._devtools !== void 0 ? this._devtools : {}.NODE_ENV !== "production" || !1;
    o && ym(t, this);
  };
  Li.state.get = function() {
    return this._state.data;
  };
  Li.state.set = function(e) {
    ({}).NODE_ENV !== "production" && Nt(!1, "use store.replaceState() to explicit replace store state.");
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
    return {}.NODE_ENV !== "production" && Nt(typeof t == "function", "store.watch only accepts a function."), We(function() {
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
    o === void 0 && (o = {}), typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && (Nt(Array.isArray(t), "module path must be a string or an Array."), Nt(t.length > 0, "cannot register the root module by using registerModule.")), this._modules.register(t, n), ea(this, this.state, t, this._modules.get(t), o.preserveState), Ti(this, this.state);
  };
  _t.prototype.unregisterModule = function(t) {
    var n = this;
    typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && Nt(Array.isArray(t), "module path must be a string or an Array."), this._modules.unregister(t), this._withCommit(function() {
      var o = Di(n.state, t.slice(0, -1));
      delete o[t[t.length - 1]];
    }), Gc(this);
  };
  _t.prototype.hasModule = function(t) {
    return typeof t == "string" && (t = [t]), {}.NODE_ENV !== "production" && Nt(Array.isArray(t), "module path must be a string or an Array."), this._modules.isRegistered(t);
  };
  _t.prototype.hotUpdate = function(t) {
    this._modules.update(t), Gc(this, !0);
  };
  _t.prototype._withCommit = function(t) {
    var n = this._committing;
    this._committing = !0, t(), this._committing = n;
  };
  Object.defineProperties(_t.prototype, Li);
  var Tm = Lm(function(e, t) {
    var n = {};
    return {}.NODE_ENV !== "production" && !tu(t) && console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), Dm(t).forEach(function(o) {
      var s = o.key, a = o.val;
      n[s] = function() {
        var r = this.$store.state, l = this.$store.getters;
        if (e) {
          var d = Pm(this.$store, "mapState", e);
          if (!d)
            return;
          r = d.context.state, l = d.context.getters;
        }
        return typeof a == "function" ? a.call(this, r, l) : r[a];
      }, n[s].vuex = !0;
    }), n;
  });
  function Dm(e) {
    return tu(e) ? Array.isArray(e) ? e.map(function(t) {
      return { key: t, val: t };
    }) : Object.keys(e).map(function(t) {
      return { key: t, val: e[t] };
    }) : [];
  }
  function tu(e) {
    return Array.isArray(e) || Hc(e);
  }
  function Lm(e) {
    return function(t, n) {
      return typeof t != "string" ? (n = t, t = "") : t.charAt(t.length - 1) !== "/" && (t += "/"), e(t, n);
    };
  }
  function Pm(e, t, n) {
    var o = e._modulesNamespaceMap[n];
    return {}.NODE_ENV !== "production" && !o && console.error("[vuex] module namespace not found in " + t + "(): " + n), o;
  }
  const Nm = {
    name: "ContentTranslationApp",
    components: { MwGrid: kc, MwCol: Me, MwRow: Ae },
    setup() {
      const e = Se(), t = y(
        () => e.getters["application/unsavedChangesExist"]
      );
      lt(() => {
        window.addEventListener("beforeunload", (n) => {
          t.value && (n.preventDefault(), n.returnValue = "");
        });
      });
    }
  };
  function Fm(e, t, n, o, s, a) {
    const i = _("router-view"), r = _("mw-col"), l = _("mw-row"), d = _("mw-grid");
    return v(), M(d, { id: "contenttranslation" }, {
      default: S(() => [
        p(l, { class: "cx-container" }, {
          default: S(() => [
            p(r, { cols: "12" }, {
              default: S(() => [
                p(i, null, {
                  default: S(({ Component: c, route: u }) => [
                    p(_n, {
                      name: u.meta.transitionName
                    }, {
                      default: S(() => [
                        (v(), M(_o(c)))
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
  const Mm = /* @__PURE__ */ V(Nm, [["render", Fm]]), Om = {
    username: mw.config.get("wgUserName"),
    isAnon: mw.user.isAnon(),
    /** @type Translation[] */
    translations: [],
    translationsLoaded: !1
  }, Bm = {
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
  }, Im = [
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
  ], $m = (e, t, n) => {
    let o, s, a, i, r;
    return !e || !t ? 0 : e === t ? 1 : (s = i = $r(e, n), a = r = $r(t, n), r.length > i.length && (s = r, a = i), o = s.filter(function(l) {
      return a.indexOf(l) >= 0;
    }), o.length / s.length);
  }, $r = function(e, t) {
    return e ? Im.includes(t) ? e.split("") : e.match(/\S+/g) || [] : [];
  }, Um = 95, Rm = 85, Vm = [
    { status: "failure", value: 100 - Um },
    { status: "warning", value: 100 - Rm },
    { status: "success", value: 100 }
  ], nu = (e, t, n) => {
    const o = Ur(e).textContent, s = Ur(t).textContent, a = 100 - 100 * $m(s, o, n);
    return Math.ceil(a);
  }, zm = (e) => Vm.find((t) => e <= t.value).status, jm = (e, t) => nu(
    e.translationHtml,
    e.proposedTranslationHTMLForMTValidation,
    t
  ), Ur = (e) => {
    const t = document.createElement("div");
    return t.innerHTML = e, t;
  }, Gn = { calculateScore: nu, getScoreStatus: zm, getMTScoreForPageSection: jm }, va = "original", ya = "empty", Hm = {
    Elia: "Elia.eus",
    Flores: "NLLB-200",
    Google: "Google Translate",
    Yandex: "Yandex.Translate"
  };
  class qe {
    /**
     * @param {string} sourceLanguage
     * @param {string} targetLanguage
     * @param {string[]} providers
     */
    constructor(t, n, o = []) {
      this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
        ...o,
        va,
        ya
      ];
    }
    /**
     * Returns the label to be displayed for the given MT provider
     *
     * @param {string} mtProvider
     * @return {string}
     */
    static getMTProviderLabel(t) {
      return Hm[t] || t;
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
      return va;
    }
    static get EMPTY_TEXT_PROVIDER_KEY() {
      return ya;
    }
    static isUserMTProvider(t) {
      return [va, ya].includes(
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
      this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Ot(Ct({}, a), {
        [qe.ORIGINAL_TEXT_PROVIDER_KEY]: n,
        [qe.EMPTY_TEXT_PROVIDER_KEY]: ""
      }), this.selected = i;
    }
    /**
     * @return {string}
     */
    get originalContent() {
      return this.proposedTranslations[qe.ORIGINAL_TEXT_PROVIDER_KEY];
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
      const a = qm(o[s].wt);
      n += ` | ${s} = ${a}`;
    }
    return `{{${n}}}`;
  }, qm = (e) => {
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
  }, Gm = (e) => {
    const t = su(e);
    return t == null ? void 0 : t.targetExists;
  };
  class ba {
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
        new ba({
          baseSectionId: t,
          subSectionId: this.id,
          content: this.originalHtml,
          origin: "source"
        }),
        new ba({
          baseSectionId: t,
          subSectionId: this.id,
          content: n.outerHTML,
          origin: "user"
        })
      ];
      return this.parallelCorporaMTContent && o.push(
        new ba({
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
      if (this.isBlockTemplate && qe.isUserMTProvider(t))
        return null;
      if (this.isBlockTemplate)
        n.innerHTML = this.blockTemplateProposedTranslations[t];
      else {
        if (!this.sentences.filter(
          (i) => i.isTranslated
        ).every(
          (i) => i.mtProviderUsed === t
        ) || qe.isUserMTProvider(t))
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
  const Sa = "__LEAD_SECTION__";
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
        [qe.ORIGINAL_TEXT_PROVIDER_KEY]: n,
        [qe.EMPTY_TEXT_PROVIDER_KEY]: ""
      }, this.translatedTitle = "", this.subSections = o, this.isLeadSection = s, this.isTitleSelected = a;
    }
    static get LEAD_SECTION_DUMMY_TITLE() {
      return Sa;
    }
    /**
     * @return {string}
     */
    get originalTitle() {
      return this.proposedTitleTranslations[qe.ORIGINAL_TEXT_PROVIDER_KEY];
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
      return n instanceof At ? n.transclusionNode.outerHTML : n instanceof pn ? n.originalContent : null;
    }
    get selectedTranslationUnitOriginalContent() {
      return this.getOriginalContentByTranslationUnitId(
        this.selectedTranslationUnitId
      );
    }
    resetSelection() {
      this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
        t instanceof At ? t.blockTemplateSelected = !1 : t instanceof pn && (t.selected = !1);
      });
    }
    selectTranslationUnitById(t) {
      if (this.resetSelection(), t === 0) {
        this.isTitleSelected = !0;
        return;
      }
      const n = this.getContentTranslationUnitById(t);
      n instanceof At ? n.blockTemplateSelected = !0 : n instanceof pn && (n.selected = !0);
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
      return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof At ? n.blockTemplateProposedTranslations[t] || "" : n instanceof pn ? n.proposedTranslations[t] || "" : null;
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
      this.selectedContentTranslationUnit instanceof At ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof pn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
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
      return this.isLeadSection ? Sa : this.originalTitle;
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
      return this.isLeadSection ? Sa : this.title;
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
  const Ve = new mw.cx.SiteMapper(), ru = mw.util.getUrl, Km = () => {
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
  class Wm {
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
  function Xm(e) {
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
        (a) => new Wm(a)
      );
    });
  }
  function Ym(e, t, n, o, s) {
    return K(this, null, function* () {
      if (!o)
        return;
      let a = `/translate/${e}/${t}`;
      n !== qe.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
      const i = Ve.getCXServerUrl(a);
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
  const Jm = (e, t, n) => {
    const o = Ve.getApi(t);
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
  }, Zm = ({
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
      let w;
      return m = m || {}, m.exception ? w = m.exception.message : m.error ? w = m.error.info : w = "Unknown error", {
        publishFeedbackMessage: new Bs({
          text: w,
          status: "error"
        }),
        targetTitle: null
      };
    });
  }, Qm = ({
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
  }, e0 = (e, t) => {
    const n = {
      action: "sxdelete",
      translationid: e,
      sectionid: t
    };
    return new mw.Api().postWithToken("csrf", n).then(() => !0).catch(() => !1);
  }, xn = {
    fetchTranslations: cu,
    fetchTranslationUnits: Xm,
    fetchSegmentTranslation: Ym,
    parseTemplateWikitext: Jm,
    publishTranslation: Zm,
    saveTranslation: Qm,
    deleteTranslation: e0
  };
  class vo {
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
  const t0 = (e, t) => {
    const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
    if (!n)
      throw new Error(
        "[CX] Content of parallel corpora translation unit is empty"
      );
    const i = t.filter(
      (r) => !qe.isUserMTProvider(r)
    );
    if (o !== "source" && o !== "user" && !i.includes(o))
      throw new Error("[CX] Invalid origin of parallel corpora translation unit");
    if (!s || !a || e.sectionId !== `${s}_${a}`)
      throw new Error(
        "[CX] Invalid section id of parallel corpora translation unit"
      );
  }, n0 = (e) => {
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
  function o0({ rootState: e }) {
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
  function s0({ rootState: e, rootGetters: t, commit: n }) {
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
      (f) => t0(f, d)
    );
    const g = t["application/isSandboxTarget"];
    return n("application/increaseAutoSaveInProgressCounter", null, { root: !0 }), xn.saveTranslation({
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
    }).then((f) => (n("application/decreaseAutoSaveInProgressCounter", null, {
      root: !0
    }), f));
  }
  function a0(a) {
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
        html: n0(l.translationHtml),
        sourceTitle: u,
        targetTitle: g,
        sourceSectionTitle: l.sourceSectionTitleForPublishing,
        targetSectionTitle: l.targetSectionTitleForPublishing,
        sourceLanguage: d,
        targetLanguage: c,
        revision: t["application/getCurrentRevision"],
        isSandbox: f
      };
      return o && (m.captchaId = o, m.captchaWord = s), yield xn.publishTranslation(m);
    });
  }
  function i0(s) {
    return K(this, arguments, function* ({ commit: e, dispatch: t, state: n, rootGetters: o }) {
      const a = yield xn.fetchTranslations();
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
            new vo({ title: u, pagelanguage: c }),
            { root: !0 }
          );
        });
    });
  }
  function r0(a, i) {
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
        return yield xn.fetchSegmentTranslation(
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
  function l0(n, o) {
    return K(this, arguments, function* ({ commit: e }, t) {
      const s = yield xn.deleteTranslation(
        t.id,
        t.sectionId
      );
      return s && e("removeTranslationById", t.id), s;
    });
  }
  const c0 = {
    validateMT: o0,
    saveTranslation: s0,
    publishTranslation: a0,
    deleteTranslation: l0,
    fetchTranslations: i0,
    translateContent: r0
  }, u0 = {
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
    }
  }, d0 = {
    namespaced: !0,
    state: Om,
    getters: Bm,
    actions: c0,
    mutations: u0
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
  ], g0 = [
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
  ], f0 = [
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
  ], p0 = [
    "Bibliographie",
    "Références",
    "Discographie",
    "Filmographie",
    "Travaux",
    "Liens externes",
    "Principales publications",
    "Voir aussi"
  ], h0 = [
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
  ], m0 = {
    en: uu,
    es: g0,
    bn: f0,
    fr: p0,
    de: h0
  }, _0 = {
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
    appendixSectionTitles: m0,
    /**
     * Maximum number of suggestions based on user's recently edited translations,
     * to be displayed inside "search for an article" view
     */
    maxRecentlyEditedSuggestions: 3
  }, v0 = {
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
  class Pi {
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
  const y0 = uu;
  function b0(e, t, n, o = 24) {
    return K(this, null, function* () {
      var d;
      let s = `/data/recommendation/article/creation/translation/${e}`;
      n && (s += `/${n}`);
      const a = Ve.getRestbaseUrl(t, s), i = new URLSearchParams({ count: `${o}` }), r = yield fetch(`${a}?${i}`);
      if (!r.ok)
        throw new Error("Failed to load data from server");
      return (((d = yield r.json()) == null ? void 0 : d.items) || []).map(
        (c) => new Pi({
          sourceTitle: c.title.replace(/_/g, " "),
          sourceLanguage: e,
          targetLanguage: t,
          wikidataId: c.wikidata_id,
          langLinksCount: parseInt(c.sitelink_count)
        })
      );
    });
  }
  function S0(e, t, n) {
    return K(this, null, function* () {
      const o = [t, e, n].map(
        (i) => encodeURIComponent(i)
      ), s = Ve.getCXServerUrl(
        `/suggest/sections/${o.join("/")}`
      ), a = yield fetch(s).then(
        (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
      ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
      return a ? new zt(a) : null;
    });
  }
  function w0(e, t) {
    return K(this, null, function* () {
      const n = {
        action: "query",
        format: "json",
        list: "cxpublishedtranslations",
        from: e,
        to: t,
        limit: 200
      }, o = Ve.getApi(e);
      try {
        const s = yield o.get(n);
        return C0(s.result.translations);
      } catch (s) {
        return mw.log.error("Error while fetching suggestion seeds", s), [];
      }
    });
  }
  const C0 = (e) => {
    for (let t = e.length - 1; t > 0; t--) {
      const n = Math.floor(Math.random() * (t + 1));
      [e[t], e[n]] = [e[n], e[t]];
    }
    return e;
  };
  function E0(e) {
    const t = y0.map((o) => encodeURIComponent(o)).join("|"), n = Ve.getCXServerUrl(
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
  const x0 = (e) => {
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
  }, A0 = (e) => {
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
  }, k0 = () => {
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
  }, en = {
    fetchFavorites: k0,
    fetchPageSuggestions: b0,
    fetchSectionSuggestions: S0,
    fetchSuggestionSeeds: w0,
    fetchAppendixTargetSectionTitles: E0,
    markFavorite: x0,
    unmarkFavorite: A0
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
  function T0(r, l) {
    return K(this, arguments, function* ({ commit: e, dispatch: t, getters: n, rootGetters: o }, { sourceLanguage: s, targetLanguage: a, sourceTitle: i }) {
      let d = n.getSectionSuggestionsForArticle(
        s,
        a,
        i
      );
      if (!d) {
        d = yield en.fetchSectionSuggestions(
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
            d = new zt({
              sourceLanguage: s,
              targetLanguage: a,
              // suggestion source title is directly displayed to the user (it's used in v-text
              // directives in some SFCs), so use the normalized page title here
              sourceTitle: c.title
            }), e(
              "addPageSuggestion",
              new Pi({
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
  function D0({ rootGetters: e }, t) {
    return {
      /**
       * @param sourceLanguage
       * @param targetLanguage
       * @return {Promise<Object[]>}
       */
      "cx-published-translations": (o, s) => en.fetchSuggestionSeeds(o, s),
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
  function L0(i, r) {
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
  function P0(i, r) {
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
  function N0(s) {
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
  function F0(a) {
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
        const f = yield en.fetchSectionSuggestions(
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
  function M0(s) {
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
        const d = yield en.fetchPageSuggestions(
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
  function O0(o, s) {
    return K(this, arguments, function* ({ getters: e, commit: t }, n) {
      if (e.appendixTitlesExistForLanguage(n))
        return;
      const a = yield en.fetchAppendixTargetSectionTitles(n);
      t("addAppendixSectionTitlesForLanguage", {
        language: n,
        titles: a
      });
    });
  }
  function B0(o, s) {
    return K(this, arguments, function* ({ commit: e, dispatch: t }, n) {
      e("removeSectionSuggestion", n), t("fetchNextSectionSuggestionsSlice"), t("doMarkSuggestionAsFavorite", n);
    });
  }
  function I0(o, s) {
    return K(this, arguments, function* ({ commit: e, dispatch: t }, n) {
      e("removePageSuggestion", n), t("fetchNextPageSuggestionsSlice"), t("doMarkSuggestionAsFavorite", n);
    });
  }
  function $0(o, s) {
    return K(this, arguments, function* ({ commit: e, dispatch: t }, n) {
      yield en.markFavorite(n);
      const { sourceTitle: a, sourceLanguage: i, targetLanguage: r } = n, l = new zo({
        title: a,
        sourceLanguage: i,
        targetLanguage: r
      });
      e("addFavoriteSuggestion", l);
    });
  }
  function U0(n, o) {
    return K(this, arguments, function* ({ commit: e }, t) {
      e("removeFavoriteSuggestion", t), yield en.unmarkFavorite(t);
    });
  }
  function R0(o) {
    return K(this, arguments, function* ({ commit: e, dispatch: t, state: n }) {
      if (n.favorites.length)
        return;
      const s = yield en.fetchFavorites();
      if (!s || !s.length)
        return;
      const a = {};
      for (const i of s)
        e("addFavoriteSuggestion", i), en.fetchSectionSuggestions(
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
  const V0 = {
    addPageSuggestionAsFavorite: I0,
    addSectionSuggestionAsFavorite: B0,
    doMarkSuggestionAsFavorite: $0,
    fetchFavorites: R0,
    fetchAppendixSectionTitles: O0,
    fetchNextPageSuggestionsSlice: M0,
    fetchNextSectionSuggestionsSlice: F0,
    getPageSuggestionSeed: P0,
    getSectionSuggestionSeeds: L0,
    getSeedProviderHandlerByName: D0,
    initializeSuggestions: N0,
    loadSectionSuggestion: T0,
    removeFavoriteSuggestion: U0
  }, z0 = {
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
  }, j0 = {
    namespaced: !0,
    state: _0,
    getters: v0,
    actions: V0,
    mutations: z0
  }, H0 = {
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
  }, q0 = {
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
    isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== qe.EMPTY_TEXT_PROVIDER_KEY,
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
  class G0 {
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
  function K0() {
    const e = "cx:Section";
    ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
  }
  const W0 = (e) => {
    const t = document.createElement("div");
    t.classList.add("surface");
    const n = document.createElement("div");
    n.appendChild(t), n.$el = $(n), K0();
    const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
      ve.createDocumentFromHtml(e)
    ), a = o.createSurface(s);
    return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
  }, X0 = (e, t) => {
    let n, o;
    return t ? (n = W0(e), o = n.$element.find(
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
  }, Y0 = (e, t) => {
    const n = Array.from(
      X0(e, t)
    );
    return J0(n).map(
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
          (u) => new At({
            sentences: Z0(u),
            node: u
          })
        ), c = !r;
        return new au({ id: l, title: r, subSections: d, isLeadSection: c });
      }
    );
  }, J0 = (e) => {
    const t = e.reduce((n, o) => {
      const s = o.dataset.mwSectionNumber;
      return n[s] = n[s] ? [...n[s], o] : [o], n;
    }, {});
    return Object.values(t);
  }, Z0 = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
    (t) => new pn({
      id: t.dataset.segmentid,
      originalContent: t.innerHTML,
      node: t
    })
  ), gu = {
    convertSegmentedContentToPageSections: Y0
  }, Ni = 120, Q0 = (e, t) => {
    const n = {
      action: "query",
      format: "json",
      formatversion: 2,
      prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
      pvipdays: 7,
      // Last 7 days page views
      piprop: "thumbnail|name|original",
      pithumbsize: Ni,
      titles: t.join("|"),
      origin: "*",
      redirects: !0
    };
    return Ve.getApi(e).get(n).then((s) => {
      const a = s.query.pages, r = (s.query.redirects || []).reduce(
        (c, u) => Ot(Ct({}, c), { [u.to]: u.from }),
        {}
      ), d = (s.query.normalized || []).reduce(
        (c, u) => Ot(Ct({}, c), { [u.to]: u.from }),
        {}
      );
      return a.map((c) => {
        const u = d[c.title] || r[c.title] || null;
        return new vo(Ot(Ct({}, c), { _alias: u }));
      });
    });
  }, e_ = (e, t) => {
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
    return Ve.getApi(e).get(n).then((s) => K(vt, null, function* () {
      var l, d;
      const a = s.query.pages;
      if (!a || !a.length || (l = a[0]) != null && l.missing)
        return null;
      const i = [{ lang: e, title: t }, ...a[0].langlinks || []], r = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
      return r ? Object.freeze(new G0(r, i)) : null;
    }));
  }, t_ = (e, t, n, o = null) => fu(
    e,
    t,
    n,
    o
  ).then(
    (s) => new vo({
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
    let a = Ve.getCXServerUrl(
      `/page/${s.join("/")}`
    );
    return o && (a += `/${o}`), fetch(a).then((i) => i.json()).then((i) => i.segmentedContent);
  }, n_ = (e) => K(vt, null, function* () {
    const t = Km();
    if (!t)
      return Promise.resolve([]);
    const n = {
      action: "query",
      prop: ["pageimages", "description", "langlinks", "langlinkscount"],
      generator: "geosearch",
      piprop: "thumbnail",
      pithumbsize: Ni,
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
    return yield Ve.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new vo(s))).catch((o) => []);
  }), o_ = (e, t) => {
    const o = {
      action: "query",
      generator: "prefixsearch",
      gpssearch: e.trim(),
      prop: "pageimages|description|langlinkscount",
      piprop: "thumbnail",
      pithumbsize: Ni,
      pilimit: 10,
      format: "json",
      formatversion: 2,
      origin: "*"
    };
    return Ve.getApi(t).get(o).then((s) => {
      var a;
      return ((a = s.query) == null ? void 0 : a.pages) || [];
    }).then(
      (s) => s.sort((a, i) => a.index - i.index).map(
        (a) => new vo(Object.assign(a, { pagelanguage: t }))
      )
    ).catch((s) => []);
  }, es = {
    fetchPages: Q0,
    fetchLanguageTitles: e_,
    fetchPageContent: t_,
    fetchSegmentedContent: fu,
    fetchNearbyPages: n_,
    searchPagesByTitlePrefix: o_
  };
  function s_() {
    return K(this, null, function* () {
      return yield Ve.getLanguagePairs().then((e) => e.sourceLanguages);
    });
  }
  function a_(e, t) {
    return K(this, null, function* () {
      const n = Ve.getCXServerUrl(
        `/list/pair/${e}/${t}`
      );
      return fetch(n).then((o) => o.json()).then(
        (o) => Object.freeze(
          new qe(e, t, o.mt)
        )
      );
    });
  }
  function i_() {
    return new mw.Api().postWithToken("csrf", {
      action: "cxtoken",
      assert: "user"
    });
  }
  function r_(e, t, n, o) {
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
  const ta = {
    fetchSupportedLanguageCodes: s_,
    fetchSupportedMTProviders: a_,
    fetchCXServerToken: i_,
    addWikibaseLink: r_
  };
  function l_({ getters: e, commit: t }, { language: n, titles: o }) {
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
  function c_({ commit: e, getters: t }, { language: n, title: o }) {
    t.getLanguageTitleGroup(n, o) || es.fetchLanguageTitles(n, o).then(
      (s) => s && e("addLanguageTitleGroup", s)
    );
  }
  function u_(n) {
    return K(this, arguments, function* ({ commit: e, state: t }) {
      if (!t.supportedLanguageCodes.length && !t.supportedLanguageCodesRequested) {
        e("setSupportedLanguageCodesRequested", !0);
        const o = yield ta.fetchSupportedLanguageCodes();
        e("setSupportedLanguageCodes", o);
      }
    });
  }
  function d_(r, l) {
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
  function g_({ getters: e, commit: t }, { sourceLanguage: n, sourceTitle: o }) {
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
  function f_(s, a) {
    return K(this, arguments, function* ({ commit: e, getters: t }, { sourceLanguage: n, targetLanguage: o }) {
      if (t.getSupportedMTProviders(n, o).length)
        return;
      const i = yield ta.fetchSupportedMTProviders(
        n,
        o
      );
      e("addMtProviderGroup", i);
    });
  }
  function p_(o) {
    return K(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
      var i;
      const { sourceLanguage: s } = t.application;
      if ((i = n.nearbyPages[s]) != null && i.length)
        return;
      const a = yield es.fetchNearbyPages(s);
      e("addNearbyPages", { language: s, pages: a });
    });
  }
  const h_ = {
    fetchLanguageTitles: c_,
    fetchMTProviders: f_,
    fetchNearbyPages: p_,
    fetchPageContent: d_,
    fetchPageMetadata: l_,
    fetchSupportedLanguageCodes: u_,
    resolvePageContentReferences: g_
  }, m_ = {
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
  }, __ = {
    namespaced: !0,
    state: H0,
    getters: q0,
    actions: h_,
    mutations: m_
  }, v_ = {
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
     * This variable holds the number of auto-save requests that are currently
     * in progress. Auto-save HTTP requests take some time to be completed.
     * This variable indicates how many auto-save requests has been sent but
     * not yet been completed.
     * @type Number
     */
    autoSaveInProgressCounter: 0,
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
  }, y_ = {
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
    /**
     * @param {object} state
     * @return {boolean}
     */
    unsavedChangesExist: (e) => {
      const { autoSavePending: t, autoSaveInProgressCounter: n } = e;
      return t || n > 0;
    },
    getTargetPageTitleForPublishing: (e, t) => {
      const { currentSourceSection: n } = e;
      return n.isLeadSection ? n.title : t.getCurrentTargetPage.title;
    }
  };
  function Fi(e, t, n) {
    let o;
    return (...s) => {
      const a = this, i = () => {
        o = null, n || e.apply(a, s);
      };
      n && !o && e.apply(a, s), (!o || t) && (clearTimeout(o), o = setTimeout(i, t));
    };
  }
  let fs;
  const pu = ({ dispatch: e, commit: t }) => {
    if (!fs) {
      let n = 1e3, o = 0;
      fs = Fi(() => {
        e("translator/saveTranslation", {}, { root: !0 }).then(
          (a) => {
            a ? (n *= o + 1, o++, setTimeout(fs, n)) : (o = 0, n = 1e3, t("setAutoSavePending", !1));
          }
        );
      }, 3e3);
    }
    return fs;
  }, b_ = (o) => K(vt, [o], function* ({ dispatch: e, state: t, commit: n }) {
    var a, i;
    t.cxServerToken || (yield ta.fetchCXServerToken().then(
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
  function S_(n, o) {
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
  function w_({ commit: e, dispatch: t }, n) {
    t("getCXServerToken"), e("setCurrentSectionSuggestion", n);
  }
  function C_({ commit: e, dispatch: t }, n) {
    t("getCXServerToken"), e("setCurrentTranslation", n);
  }
  function E_(n) {
    return K(this, arguments, function* ({
      dispatch: e,
      state: t
    }) {
      const { sourceLanguage: o, sourceTitle: s } = t.currentSectionSuggestion;
      yield e("mediawiki/fetchLanguageTitles", { language: o, title: s }, { root: !0 });
    });
  }
  function x_(a, i) {
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
  function A_(a, i) {
    return K(this, arguments, function* ({ state: e, commit: t, dispatch: n, getters: o }, s) {
      var c;
      const r = e.currentSectionSuggestion, l = o.getCurrentPage, d = () => {
        var g;
        const u = (g = l.sections) == null ? void 0 : g[s];
        s === 0 && (u.proposedTitleTranslations[qe.ORIGINAL_TEXT_PROVIDER_KEY] = l.title), t("setCurrentSourceSection", u);
      };
      (c = l.sections) != null && c[s] || (yield n("mediawiki/fetchPageContent", r, { root: !0 }), n("mediawiki/resolvePageContentReferences", r, {
        root: !0
      }).then(() => d())), d();
    });
  }
  function k_(s, a) {
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
  function T_({
    dispatch: e,
    getters: t,
    commit: n,
    state: o
  }) {
    const s = t.getCurrentProposedTranslation, { currentSourceSection: a, currentMTProvider: i } = o;
    a.setTranslationForSelectedTranslationUnit(
      s,
      i
    ), pu({ dispatch: e, commit: n })(), n("setAutoSavePending", !0), e("selectNextTranslationUnit");
  }
  function D_(a, i) {
    return K(this, arguments, function* ({ state: e, dispatch: t, commit: n, getters: o }, s) {
      const r = document.createElement("div");
      r.innerHTML = s, r.querySelectorAll(".sx-edit-dummy-node").forEach((f) => f.remove()), s = r.innerHTML;
      const { currentSourceSection: l, targetLanguage: d, currentMTProvider: c } = e, { selectedContentTranslationUnit: u } = l;
      if (u instanceof At) {
        const f = o.getCurrentPage, m = o.getCurrentTargetPage, w = f.title, E = m == null ? void 0 : m.title, k = Array.from(r.children).find(
          (N) => Os(N)
        );
        k && (s = yield xn.parseTemplateWikitext(
          ou(k),
          d,
          E || w
        ));
      }
      l.setTranslationForSelectedTranslationUnit(
        s,
        c
      ), pu({ dispatch: t, commit: n })(), n("setAutoSavePending", !0), t("selectNextTranslationUnit");
    });
  }
  function L_({ state: e, dispatch: t }) {
    const { followingTranslationUnit: n } = e.currentSourceSection;
    n && t("selectTranslationUnitById", n.id);
  }
  function P_({ state: e, dispatch: t }) {
    const { selectedContentTranslationUnitIndex: n, contentTranslationUnits: o } = e.currentSourceSection, s = n - 1;
    let a = 0;
    s > -1 && (a = o[s].id), t("selectTranslationUnitById", a);
  }
  function N_(s) {
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
      const d = qe.getStorageKey(
        a,
        i
      ), c = mw.storage.get(d) || r[0];
      o("setCurrentMTProvider", c);
    });
  }
  function F_({ commit: e, dispatch: t, state: n }, o) {
    e("setCurrentMTProvider", o);
    const { currentSourceSection: s } = n, { selectedTranslationUnitId: a } = s;
    t("translateTranslationUnitById", { id: a, provider: o });
  }
  function M_(i, r) {
    return K(this, arguments, function* ({ commit: e, state: t, dispatch: n, getters: o }, { id: s, provider: a }) {
      const { currentSourceSection: l, targetLanguage: d } = t;
      if (l.hasProposedTranslationByTranslationUnitId(s, a))
        return;
      const c = o.getCurrentPage, u = o.getCurrentTargetPage, g = c.title, f = u == null ? void 0 : u.title;
      let m = l.getOriginalContentByTranslationUnitId(s);
      const w = l.getContentTranslationUnitById(s);
      let E;
      if (e("addMtRequestsPending", s), E = yield n(
        "translator/translateContent",
        { originalContent: m, provider: a },
        { root: !0 }
      ), !E) {
        e("removeMtRequestsPending", s);
        return;
      }
      if (w instanceof At) {
        const k = document.createElement("div");
        k.innerHTML = E;
        const N = Array.from(k.children).find(
          (z) => Os(z)
        );
        if (N && Gm(N)) {
          const z = su(N);
          w.setBlockTemplateAdaptationInfo(a, z), E = yield xn.parseTemplateWikitext(
            ou(N),
            d,
            f || g
          );
        } else
          E = "";
      }
      e("setProposedTranslationForTranslationUnitById", {
        id: s,
        provider: a,
        proposedTranslation: E
      }), e("removeMtRequestsPending", s);
    });
  }
  function O_({
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
  function B_({ commit: e }) {
    e("setCurrentSectionSuggestion", null);
  }
  const I_ = {
    applyEditedTranslationToSelectedTranslationUnit: D_,
    applyProposedTranslationToSelectedTranslationUnit: T_,
    clearCurrentSectionSuggestion: B_,
    fetchCurrentSectionSuggestionLanguageTitles: E_,
    getCXServerToken: b_,
    initializeMTProviders: N_,
    initializeSectionTranslation: w_,
    restoreSectionTranslation: C_,
    selectNextTranslationUnit: L_,
    selectPageSectionByTitle: x_,
    selectPageSectionByIndex: A_,
    selectPreviousTranslationUnit: P_,
    selectTranslationUnitById: k_,
    startFavoriteSectionTranslation: S_,
    translateTranslationUnitById: M_,
    translateSelectedTranslationUnitForAllProviders: O_,
    updateMTProvider: F_
  }, $_ = {
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
      e.currentSectionSuggestion = t && new zt(Ot(Ct({}, t), {
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
      s instanceof At ? s.blockTemplateProposedTranslations[n] = o : s instanceof pn && s.addProposedTranslation(n, o);
    },
    /**
     * @param state
     * @param provider
     */
    setCurrentMTProvider: (e, t) => {
      e.currentMTProvider = t;
      const { sourceLanguage: n, targetLanguage: o } = e, s = qe.getStorageKey(
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
    /**
     * @param {object} state
     */
    increaseAutoSaveInProgressCounter: (e) => {
      e.autoSaveInProgressCounter++;
    },
    /**
     * @param {object} state
     */
    decreaseAutoSaveInProgressCounter: (e) => {
      e.autoSaveInProgressCounter--;
    },
    setCXServerToken: (e, t) => {
      e.cxServerToken = t;
    }
  }, U_ = {
    namespaced: !0,
    state: v_,
    getters: y_,
    actions: I_,
    mutations: $_
  }, ho = km({
    modules: { translator: d0, suggestions: j0, mediawiki: __, application: U_ }
  });
  /*!
    * vue-router v4.1.6
    * (c) 2022 Eduardo San Martin Morote
    * @license MIT
    */
  const Xt = typeof window != "undefined";
  function R_(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module";
  }
  const Fe = Object.assign;
  function wa(e, t) {
    const n = {};
    for (const o in t) {
      const s = t[o];
      n[o] = bt(s) ? s.map(e) : e(s);
    }
    return n;
  }
  const Po = () => {
  }, bt = Array.isArray;
  function ke(e) {
    const t = Array.from(arguments).slice(1);
    console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
  }
  const V_ = /\/$/, z_ = (e) => e.replace(V_, "");
  function Ca(e, t, n = "/") {
    let o, s = {}, a = "", i = "";
    const r = t.indexOf("#");
    let l = t.indexOf("?");
    return r < l && r >= 0 && (l = -1), l > -1 && (o = t.slice(0, l), a = t.slice(l + 1, r > -1 ? r : t.length), s = e(a)), r > -1 && (o = o || t.slice(0, r), i = t.slice(r, t.length)), o = q_(o != null ? o : t, n), {
      fullPath: o + (a && "?") + a + i,
      path: o,
      query: s,
      hash: i
    };
  }
  function j_(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
  }
  function zr(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
  }
  function jr(e, t, n) {
    const o = t.matched.length - 1, s = n.matched.length - 1;
    return o > -1 && o === s && wn(t.matched[o], n.matched[s]) && hu(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
  }
  function wn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function hu(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const n in e)
      if (!H_(e[n], t[n]))
        return !1;
    return !0;
  }
  function H_(e, t) {
    return bt(e) ? Hr(e, t) : bt(t) ? Hr(t, e) : e === t;
  }
  function Hr(e, t) {
    return bt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
  }
  function q_(e, t) {
    if (e.startsWith("/"))
      return e;
    if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
      return ke(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
  var jo;
  (function(e) {
    e.pop = "pop", e.push = "push";
  })(jo || (jo = {}));
  var No;
  (function(e) {
    e.back = "back", e.forward = "forward", e.unknown = "";
  })(No || (No = {}));
  function G_(e) {
    if (!e)
      if (Xt) {
        const t = document.querySelector("base");
        e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
      } else
        e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), z_(e);
  }
  const K_ = /^[^#]+#/;
  function W_(e, t) {
    return e.replace(K_, "#") + t;
  }
  function X_(e, t) {
    const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: o.left - n.left - (t.left || 0),
      top: o.top - n.top - (t.top || 0)
    };
  }
  const na = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  function Y_(e) {
    let t;
    if ("el" in e) {
      const n = e.el, o = typeof n == "string" && n.startsWith("#");
      if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
        try {
          const a = document.querySelector(e.el);
          if (o && a) {
            ke(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
            return;
          }
        } catch (a) {
          ke(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
          return;
        }
      const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
      if (!s) {
        ({}).NODE_ENV !== "production" && ke(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
        return;
      }
      t = X_(s, e);
    } else
      t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
  }
  function qr(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  const Xa = /* @__PURE__ */ new Map();
  function J_(e, t) {
    Xa.set(e, t);
  }
  function Z_(e) {
    const t = Xa.get(e);
    return Xa.delete(e), t;
  }
  let Q_ = () => location.protocol + "//" + location.host;
  function mu(e, t) {
    const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
    if (a > -1) {
      let r = s.includes(e.slice(a)) ? e.slice(a).length : 1, l = s.slice(r);
      return l[0] !== "/" && (l = "/" + l), zr(l, "");
    }
    return zr(n, e) + o + s;
  }
  function e1(e, t, n, o) {
    let s = [], a = [], i = null;
    const r = ({ state: g }) => {
      const f = mu(e, location), m = n.value, w = t.value;
      let E = 0;
      if (g) {
        if (n.value = f, t.value = g, i && i === m) {
          i = null;
          return;
        }
        E = w ? g.position - w.position : 0;
      } else
        o(f);
      s.forEach((k) => {
        k(n.value, m, {
          delta: E,
          type: jo.pop,
          direction: E ? E > 0 ? No.forward : No.back : No.unknown
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
      g.state && g.replaceState(Fe({}, g.state, { scroll: na() }), "");
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
      scroll: s ? na() : null
    };
  }
  function t1(e) {
    const { history: t, location: n } = window, o = {
      value: mu(e, n)
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
      const u = e.indexOf("#"), g = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + l : Q_() + e + l;
      try {
        t[c ? "replaceState" : "pushState"](d, "", g), s.value = d;
      } catch (f) {
        ({}).NODE_ENV !== "production" ? ke("Error with push/replace State", f) : console.error(f), n[c ? "replace" : "assign"](g);
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
          scroll: na()
        }
      );
      ({}).NODE_ENV !== "production" && !t.state && ke(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

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
  function n1(e) {
    e = G_(e);
    const t = t1(e), n = e1(e, t.state, t.location, t.replace);
    function o(a, i = !0) {
      i || n.pauseListeners(), history.go(a);
    }
    const s = Fe({
      // it's overridden right after
      location: "",
      base: e,
      go: o,
      createHref: W_.bind(null, e)
    }, t, n);
    return Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value
    }), Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value
    }), s;
  }
  function o1(e) {
    return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && ke(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), n1(e);
  }
  function s1(e) {
    return typeof e == "string" || e && typeof e == "object";
  }
  function _u(e) {
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
  }, Ya = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
  var Kr;
  (function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
  })(Kr || (Kr = {}));
  const a1 = {
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
      return `Redirected from "${e.fullPath}" to "${r1(t)}" via a navigation guard.`;
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
    return {}.NODE_ENV !== "production" ? Fe(new Error(a1[e](t)), {
      type: e,
      [Ya]: !0
    }, t) : Fe(new Error(), {
      type: e,
      [Ya]: !0
    }, t);
  }
  function Gt(e, t) {
    return e instanceof Error && Ya in e && (t == null || !!(e.type & t));
  }
  const i1 = ["params", "query", "hash"];
  function r1(e) {
    if (typeof e == "string")
      return e;
    if ("path" in e)
      return e.path;
    const t = {};
    for (const n of i1)
      n in e && (t[n] = e[n]);
    return JSON.stringify(t, null, 2);
  }
  const Wr = "[^/]+?", l1 = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  }, c1 = /[.+*?^${}()[\]/\\]/g;
  function u1(e, t) {
    const n = Fe({}, l1, t), o = [];
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
          u || (s += "/"), s += g.value.replace(c1, "\\$&"), f += 40;
        else if (g.type === 1) {
          const { value: m, repeatable: w, optional: E, regexp: k } = g;
          a.push({
            name: m,
            repeatable: w,
            optional: E
          });
          const N = k || Wr;
          if (N !== Wr) {
            f += 10;
            try {
              new RegExp(`(${N})`);
            } catch (I) {
              throw new Error(`Invalid custom RegExp for param "${m}" (${N}): ` + I.message);
            }
          }
          let z = w ? `((?:${N})(?:/(?:${N}))*)` : `(${N})`;
          u || (z = // avoid an optional / if there are more segments e.g. /:p?-static
          // or /:p?-:p2
          E && d.length < 2 ? `(?:/${z})` : "/" + z), E && (z += "?"), s += z, f += 20, E && (f += -8), w && (f += -20), N === ".*" && (f += -50);
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
            const { value: m, repeatable: w, optional: E } = f, k = m in d ? d[m] : "";
            if (bt(k) && !w)
              throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
            const N = bt(k) ? k.join("/") : k;
            if (!N)
              if (E)
                g.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : u = !0);
              else
                throw new Error(`Missing required param "${m}"`);
            c += N;
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
  function d1(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
      const o = t[n] - e[n];
      if (o)
        return o;
      n++;
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
  }
  function g1(e, t) {
    let n = 0;
    const o = e.score, s = t.score;
    for (; n < o.length && n < s.length; ) {
      const a = d1(o[n], s[n]);
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
  const f1 = {
    type: 0,
    value: ""
  }, p1 = /[a-zA-Z0-9_]/;
  function h1(e) {
    if (!e)
      return [[]];
    if (e === "/")
      return [[f1]];
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
          l === "(" ? n = 2 : p1.test(l) ? g() : (u(), n = 0, l !== "*" && l !== "?" && l !== "+" && r--);
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
  function m1(e, t, n) {
    const o = u1(h1(e.path), n);
    if ({}.NODE_ENV !== "production") {
      const a = /* @__PURE__ */ new Set();
      for (const i of o.keys)
        a.has(i.name) && ke(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
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
  function _1(e, t) {
    const n = [], o = /* @__PURE__ */ new Map();
    t = Zr({ strict: !1, end: !0, sensitive: !1 }, t);
    function s(c) {
      return o.get(c);
    }
    function a(c, u, g) {
      const f = !g, m = v1(c);
      ({}).NODE_ENV !== "production" && w1(m, u), m.aliasOf = g && g.record;
      const w = Zr(t, c), E = [
        m
      ];
      if ("alias" in c) {
        const z = typeof c.alias == "string" ? [c.alias] : c.alias;
        for (const I of z)
          E.push(Fe({}, m, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: g ? g.record.components : m.components,
            path: I,
            // we might be the child of an alias
            aliasOf: g ? g.record : m
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }));
      }
      let k, N;
      for (const z of E) {
        const { path: I } = z;
        if (u && I[0] !== "/") {
          const Z = u.record.path, Ee = Z[Z.length - 1] === "/" ? "" : "/";
          z.path = u.record.path + (I && Ee + I);
        }
        if ({}.NODE_ENV !== "production" && z.path === "*")
          throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
        if (k = m1(z, u, w), {}.NODE_ENV !== "production" && u && I[0] === "/" && C1(k, u), g ? (g.alias.push(k), {}.NODE_ENV !== "production" && S1(g, k)) : (N = N || k, N !== k && N.alias.push(k), f && c.name && !Jr(k) && i(c.name)), m.children) {
          const Z = m.children;
          for (let Ee = 0; Ee < Z.length; Ee++)
            a(Z[Ee], k, g && g.children[Ee]);
        }
        g = g || k, (k.record.components && Object.keys(k.record.components).length || k.record.name || k.record.redirect) && l(k);
      }
      return N ? () => {
        i(N);
      } : Po;
    }
    function i(c) {
      if (_u(c)) {
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
      for (; u < n.length && g1(c, n[u]) >= 0 && // Adding children with empty path should still appear before the parent
      // https://github.com/vuejs/router/issues/1124
      (c.record.path !== n[u].record.path || !vu(c, n[u])); )
        u++;
      n.splice(u, 0, c), c.record.name && !Jr(c) && o.set(c.record.name, c);
    }
    function d(c, u) {
      let g, f = {}, m, w;
      if ("name" in c && c.name) {
        if (g = o.get(c.name), !g)
          throw mo(1, {
            location: c
          });
        if ({}.NODE_ENV !== "production") {
          const N = Object.keys(c.params || {}).filter((z) => !g.keys.find((I) => I.name === z));
          N.length && ke(`Discarded invalid param(s) "${N.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
        }
        w = g.record.name, f = Fe(
          // paramsFromLocation is a new object
          Yr(
            u.params,
            // only keep params that exist in the resolved location
            // TODO: only keep optional params coming from a parent record
            g.keys.filter((N) => !N.optional).map((N) => N.name)
          ),
          // discard any existing params in the current location that do not exist here
          // #1497 this ensures better active/exact matching
          c.params && Yr(c.params, g.keys.map((N) => N.name))
        ), m = g.stringify(f);
      } else if ("path" in c)
        m = c.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && ke(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`), g = n.find((N) => N.re.test(m)), g && (f = g.parse(m), w = g.record.name);
      else {
        if (g = u.name ? o.get(u.name) : n.find((N) => N.re.test(u.path)), !g)
          throw mo(1, {
            location: c,
            currentLocation: u
          });
        w = g.record.name, f = Fe({}, u.params, c.params), m = g.stringify(f);
      }
      const E = [];
      let k = g;
      for (; k; )
        E.unshift(k.record), k = k.parent;
      return {
        name: w,
        path: m,
        params: f,
        matched: E,
        meta: b1(E)
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
  function v1(e) {
    return {
      path: e.path,
      redirect: e.redirect,
      name: e.name,
      meta: e.meta || {},
      aliasOf: void 0,
      beforeEnter: e.beforeEnter,
      props: y1(e),
      children: e.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in e ? e.components || null : e.component && { default: e.component }
    };
  }
  function y1(e) {
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
  function b1(e) {
    return e.reduce((t, n) => Fe(t, n.meta), {});
  }
  function Zr(e, t) {
    const n = {};
    for (const o in e)
      n[o] = o in t ? t[o] : e[o];
    return n;
  }
  function Ja(e, t) {
    return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
  }
  function S1(e, t) {
    for (const n of e.keys)
      if (!n.optional && !t.keys.find(Ja.bind(null, n)))
        return ke(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
    for (const n of t.keys)
      if (!n.optional && !e.keys.find(Ja.bind(null, n)))
        return ke(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  }
  function w1(e, t) {
    t && t.record.name && !e.name && !e.path && ke(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
  }
  function C1(e, t) {
    for (const n of t.keys)
      if (!e.keys.find(Ja.bind(null, n)))
        return ke(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
  }
  function vu(e, t) {
    return t.children.some((n) => n === e || vu(e, n));
  }
  const yu = /#/g, E1 = /&/g, x1 = /\//g, A1 = /=/g, k1 = /\?/g, bu = /\+/g, T1 = /%5B/g, D1 = /%5D/g, Su = /%5E/g, L1 = /%60/g, wu = /%7B/g, P1 = /%7C/g, Cu = /%7D/g, N1 = /%20/g;
  function Mi(e) {
    return encodeURI("" + e).replace(P1, "|").replace(T1, "[").replace(D1, "]");
  }
  function F1(e) {
    return Mi(e).replace(wu, "{").replace(Cu, "}").replace(Su, "^");
  }
  function Za(e) {
    return Mi(e).replace(bu, "%2B").replace(N1, "+").replace(yu, "%23").replace(E1, "%26").replace(L1, "`").replace(wu, "{").replace(Cu, "}").replace(Su, "^");
  }
  function M1(e) {
    return Za(e).replace(A1, "%3D");
  }
  function O1(e) {
    return Mi(e).replace(yu, "%23").replace(k1, "%3F");
  }
  function B1(e) {
    return e == null ? "" : O1(e).replace(x1, "%2F");
  }
  function Ho(e) {
    try {
      return decodeURIComponent("" + e);
    } catch (t) {
      ({}).NODE_ENV !== "production" && ke(`Error decoding "${e}". Using original value`);
    }
    return "" + e;
  }
  function I1(e) {
    const t = {};
    if (e === "" || e === "?")
      return t;
    const o = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < o.length; ++s) {
      const a = o[s].replace(bu, " "), i = a.indexOf("="), r = Ho(i < 0 ? a : a.slice(0, i)), l = i < 0 ? null : Ho(a.slice(i + 1));
      if (r in t) {
        let d = t[r];
        bt(d) || (d = t[r] = [d]), d.push(l);
      } else
        t[r] = l;
    }
    return t;
  }
  function Qr(e) {
    let t = "";
    for (let n in e) {
      const o = e[n];
      if (n = M1(n), o == null) {
        o !== void 0 && (t += (t.length ? "&" : "") + n);
        continue;
      }
      (bt(o) ? o.map((a) => a && Za(a)) : [o && Za(o)]).forEach((a) => {
        a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
      });
    }
    return t;
  }
  function $1(e) {
    const t = {};
    for (const n in e) {
      const o = e[n];
      o !== void 0 && (t[n] = bt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
    }
    return t;
  }
  const U1 = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), el = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), oa = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Eu = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Qa = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
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
      list: () => e,
      reset: n
    };
  }
  function hn(e, t, n, o, s) {
    const a = o && // name is defined if record is because of the function overload
    (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
    return () => new Promise((i, r) => {
      const l = (u) => {
        u === !1 ? r(mo(4, {
          from: n,
          to: t
        })) : u instanceof Error ? r(u) : s1(u) ? r(mo(2, {
          from: t,
          to: u
        })) : (a && // since enterCallbackArray is truthy, both record and name also are
        o.enterCallbacks[s] === a && typeof u == "function" && a.push(u), i());
      }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? R1(l, t, n) : l);
      let c = Promise.resolve(d);
      if (e.length < 3 && (c = c.then(l)), {}.NODE_ENV !== "production" && e.length > 2) {
        const u = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
        if (typeof d == "object" && "then" in d)
          c = c.then((g) => l._called ? g : (ke(u), Promise.reject(new Error("Invalid navigation guard"))));
        else if (d !== void 0 && !l._called) {
          ke(u), r(new Error("Invalid navigation guard"));
          return;
        }
      }
      c.catch((u) => r(u));
    });
  }
  function R1(e, t, n) {
    let o = 0;
    return function() {
      o++ === 1 && ke(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
    };
  }
  function Ea(e, t, n, o) {
    const s = [];
    for (const a of e) {
      ({}).NODE_ENV !== "production" && !a.components && !a.children.length && ke(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
      for (const i in a.components) {
        let r = a.components[i];
        if ({}.NODE_ENV !== "production") {
          if (!r || typeof r != "object" && typeof r != "function")
            throw ke(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(r)}".`), new Error("Invalid route component");
          if ("then" in r) {
            ke(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
            const l = r;
            r = () => l;
          } else
            r.__asyncLoader && // warn only once per component
            !r.__warnedDefineAsync && (r.__warnedDefineAsync = !0, ke(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
        }
        if (!(t !== "beforeRouteEnter" && !a.instances[i]))
          if (V1(r)) {
            const d = (r.__vccOpts || r)[t];
            d && s.push(hn(d, n, o, a, i));
          } else {
            let l = r();
            ({}).NODE_ENV !== "production" && !("catch" in l) && (ke(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), s.push(() => l.then((d) => {
              if (!d)
                return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
              const c = R_(d) ? d.default : d;
              a.components[i] = c;
              const g = (c.__vccOpts || c)[t];
              return g && hn(g, n, o, a, i)();
            }));
          }
      }
    }
    return s;
  }
  function V1(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
  }
  function tl(e) {
    const t = Je(oa), n = Je(Eu), o = y(() => t.resolve(co(e.to))), s = y(() => {
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
    }), a = y(() => s.value > -1 && q1(n.params, o.value.params)), i = y(() => s.value > -1 && s.value === n.matched.length - 1 && hu(n.params, o.value.params));
    function r(l = {}) {
      return H1(l) ? t[co(e.replace) ? "replace" : "push"](
        co(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(Po) : Promise.resolve();
    }
    if ({}.NODE_ENV !== "production" && Xt) {
      const l = bi();
      if (l) {
        const d = {
          route: o.value,
          isActive: a.value,
          isExactActive: i.value
        };
        l.__vrl_devtools = l.__vrl_devtools || [], l.__vrl_devtools.push(d), Ug(() => {
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
  const z1 = /* @__PURE__ */ ec({
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
      const n = Xn(tl(e)), { options: o } = Je(oa), s = y(() => ({
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
        return e.custom ? a : Vo("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          // this would override user added attrs but Vue will still add
          // the listener, so we end up triggering both
          onClick: n.navigate,
          class: s.value
        }, a);
      };
    }
  }), j1 = z1;
  function H1(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
      if (e.currentTarget && e.currentTarget.getAttribute) {
        const t = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t))
          return;
      }
      return e.preventDefault && e.preventDefault(), !0;
    }
  }
  function q1(e, t) {
    for (const n in t) {
      const o = t[n], s = e[n];
      if (typeof o == "string") {
        if (o !== s)
          return !1;
      } else if (!bt(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
        return !1;
    }
    return !0;
  }
  function nl(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
  }
  const ol = (e, t, n) => e != null ? e : t != null ? t : n, G1 = /* @__PURE__ */ ec({
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
      ({}).NODE_ENV !== "production" && W1();
      const o = Je(Qa), s = y(() => e.route || o.value), a = Je(el, 0), i = y(() => {
        let d = co(a);
        const { matched: c } = s.value;
        let u;
        for (; (u = c[d]) && !u.components; )
          d++;
        return d;
      }), r = y(() => s.value.matched[i.value]);
      vs(el, y(() => i.value + 1)), vs(U1, r), vs(Qa, s);
      const l = ne();
      return We(() => [l.value, r.value, e.name], ([d, c, u], [g, f, m]) => {
        c && (c.instances[u] = d, f && f !== c && d && d === g && (c.leaveGuards.size || (c.leaveGuards = f.leaveGuards), c.updateGuards.size || (c.updateGuards = f.updateGuards))), d && c && // if there is no instance but to and from are the same this might be
        // the first visit
        (!f || !wn(c, f) || !g) && (c.enterCallbacks[u] || []).forEach((w) => w(d));
      }, { flush: "post" }), () => {
        const d = s.value, c = e.name, u = r.value, g = u && u.components[c];
        if (!g)
          return sl(n.default, { Component: g, route: d });
        const f = u.props[c], m = f ? f === !0 ? d.params : typeof f == "function" ? f(d) : f : null, E = Vo(g, Fe({}, m, t, {
          onVnodeUnmounted: (k) => {
            k.component.isUnmounted && (u.instances[c] = null);
          },
          ref: l
        }));
        if ({}.NODE_ENV !== "production" && Xt && E.ref) {
          const k = {
            depth: i.value,
            name: u.name,
            path: u.path,
            meta: u.meta
          };
          (bt(E.ref) ? E.ref.map((z) => z.i) : [E.ref.i]).forEach((z) => {
            z.__vrv_devtools = k;
          });
        }
        return (
          // pass the vnode to the slot as a prop.
          // h and <component :is="..."> both accept vnodes
          sl(n.default, { Component: E, route: d }) || E
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
  const K1 = G1;
  function W1() {
    const e = bi(), t = e.parent && e.parent.type.name;
    if (t && (t === "KeepAlive" || t.includes("Transition"))) {
      const n = t === "KeepAlive" ? "keep-alive" : "transition";
      ke(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
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
      matched: e.matched.map((o) => ov(o, ["instances", "children", "aliasOf"]))
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
  let X1 = 0;
  function Y1(e, t, n) {
    if (t.__hasDevtools)
      return;
    t.__hasDevtools = !0;
    const o = X1++;
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
        bt(u.__vrl_devtools) && (u.__devtoolsApi = s, u.__vrl_devtools.forEach((g) => {
          let f = Tu, m = "";
          g.isExactActive ? (f = ku, m = "This is exactly active") : g.isActive && (f = Au, m = "This link is active"), c.tags.push({
            label: g.route.path,
            textColor: 0,
            tooltip: m,
            backgroundColor: f
          });
        }));
      }), We(t.currentRoute, () => {
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
        u.forEach(Pu), c.filter && (u = u.filter((g) => (
          // save matches state based on the payload
          ei(g, c.filter.toLowerCase())
        ))), u.forEach((g) => Lu(g, t.currentRoute.value)), c.rootNodes = u.map(Du);
      }
      let d;
      s.on.getInspectorTree((c) => {
        d = c, c.app === e && c.inspectorId === r && l();
      }), s.on.getInspectorState((c) => {
        if (c.app === e && c.inspectorId === r) {
          const g = n.getRoutes().find((f) => f.record.__vd_id === c.nodeId);
          g && (c.state = {
            options: Z1(g)
          });
        }
      }), s.sendInspectorTree(r), s.sendInspectorState(r);
    });
  }
  function J1(e) {
    return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
  }
  function Z1(e) {
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
          display: e.keys.map((o) => `${o.name}${J1(o)}`).join(" "),
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
  const xu = 15485081, Au = 2450411, ku = 8702998, Q1 = 2282478, Tu = 16486972, ev = 6710886;
  function Du(e) {
    const t = [], { record: n } = e;
    n.name != null && t.push({
      label: String(n.name),
      textColor: 0,
      backgroundColor: Q1
    }), n.aliasOf && t.push({
      label: "alias",
      textColor: 0,
      backgroundColor: Tu
    }), e.__vd_match && t.push({
      label: "matches",
      textColor: 0,
      backgroundColor: xu
    }), e.__vd_exactActive && t.push({
      label: "exact",
      textColor: 0,
      backgroundColor: ku
    }), e.__vd_active && t.push({
      label: "active",
      textColor: 0,
      backgroundColor: Au
    }), n.redirect && t.push({
      label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
      textColor: 16777215,
      backgroundColor: ev
    });
    let o = n.__vd_id;
    return o == null && (o = String(tv++), n.__vd_id = o), {
      id: o,
      label: n.path,
      tags: t,
      children: e.children.map(Du)
    };
  }
  let tv = 0;
  const nv = /^\/(.*)\/([a-z]*)$/;
  function Lu(e, t) {
    const n = t.matched.length && wn(t.matched[t.matched.length - 1], e.record);
    e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => wn(o, e.record))), e.children.forEach((o) => Lu(o, t));
  }
  function Pu(e) {
    e.__vd_match = !1, e.children.forEach(Pu);
  }
  function ei(e, t) {
    const n = String(e.re).match(nv);
    if (e.__vd_match = !1, !n || n.length < 3)
      return !1;
    if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
      return e.children.forEach((i) => ei(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
    const s = e.record.path.toLowerCase(), a = Ho(s);
    return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => ei(i, t));
  }
  function ov(e, t) {
    const n = {};
    for (const o in e)
      t.includes(o) || (n[o] = e[o]);
    return n;
  }
  function sv(e) {
    const t = _1(e.routes, e), n = e.parseQuery || I1, o = e.stringifyQuery || Qr, s = e.history;
    if ({}.NODE_ENV !== "production" && !s)
      throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
    const a = Eo(), i = Eo(), r = Eo(), l = sg(un);
    let d = un;
    Xt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = wa.bind(null, (A) => "" + A), u = wa.bind(null, B1), g = (
      // @ts-expect-error: intentionally avoid the type check
      wa.bind(null, Ho)
    );
    function f(A, Y) {
      let H, Q;
      return _u(A) ? (H = t.getRecordMatcher(A), Q = Y) : Q = A, t.addRoute(Q, H);
    }
    function m(A) {
      const Y = t.getRecordMatcher(A);
      Y ? t.removeRoute(Y) : {}.NODE_ENV !== "production" && ke(`Cannot remove non-existent route "${String(A)}"`);
    }
    function w() {
      return t.getRoutes().map((A) => A.record);
    }
    function E(A) {
      return !!t.getRecordMatcher(A);
    }
    function k(A, Y) {
      if (Y = Fe({}, Y || l.value), typeof A == "string") {
        const ue = Ca(n, A, Y.path), h = t.resolve({ path: ue.path }, Y), b = s.createHref(ue.fullPath);
        return {}.NODE_ENV !== "production" && (b.startsWith("//") ? ke(`Location "${A}" resolved to "${b}". A resolved location cannot start with multiple slashes.`) : h.matched.length || ke(`No match found for location with path "${A}"`)), Fe(ue, h, {
          params: g(h.params),
          hash: Ho(ue.hash),
          redirectedFrom: void 0,
          href: b
        });
      }
      let H;
      if ("path" in A)
        ({}).NODE_ENV !== "production" && "params" in A && !("name" in A) && // @ts-expect-error: the type is never
        Object.keys(A.params).length && ke(`Path "${// @ts-expect-error: the type is never
        A.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), H = Fe({}, A, {
          path: Ca(n, A.path, Y.path).path
        });
      else {
        const ue = Fe({}, A.params);
        for (const h in ue)
          ue[h] == null && delete ue[h];
        H = Fe({}, A, {
          params: u(A.params)
        }), Y.params = u(Y.params);
      }
      const Q = t.resolve(H, Y), xe = A.hash || "";
      ({}).NODE_ENV !== "production" && xe && !xe.startsWith("#") && ke(`A \`hash\` should always start with the character "#". Replace "${xe}" with "#${xe}".`), Q.params = c(g(Q.params));
      const Be = j_(o, Fe({}, A, {
        hash: F1(xe),
        path: Q.path
      })), de = s.createHref(Be);
      return {}.NODE_ENV !== "production" && (de.startsWith("//") ? ke(`Location "${A}" resolved to "${de}". A resolved location cannot start with multiple slashes.`) : Q.matched.length || ke(`No match found for location with path "${"path" in A ? A.path : A}"`)), Fe({
        fullPath: Be,
        // keep the hash encoded so fullPath is effectively path + encodedQuery +
        // hash
        hash: xe,
        query: (
          // if the user is using a custom query lib like qs, we might have
          // nested objects, so we keep the query as is, meaning it can contain
          // numbers at `$route.query`, but at the point, the user will have to
          // use their own type anyway.
          // https://github.com/vuejs/router/issues/328#issuecomment-649481567
          o === Qr ? $1(A.query) : A.query || {}
        )
      }, Q, {
        redirectedFrom: void 0,
        href: de
      });
    }
    function N(A) {
      return typeof A == "string" ? Ca(n, A, l.value.path) : Fe({}, A);
    }
    function z(A, Y) {
      if (d !== A)
        return mo(8, {
          from: Y,
          to: A
        });
    }
    function I(A) {
      return X(A);
    }
    function Z(A) {
      return I(Fe(N(A), { replace: !0 }));
    }
    function Ee(A) {
      const Y = A.matched[A.matched.length - 1];
      if (Y && Y.redirect) {
        const { redirect: H } = Y;
        let Q = typeof H == "function" ? H(A) : H;
        if (typeof Q == "string" && (Q = Q.includes("?") || Q.includes("#") ? Q = N(Q) : (
          // force empty params
          { path: Q }
        ), Q.params = {}), {}.NODE_ENV !== "production" && !("path" in Q) && !("name" in Q))
          throw ke(`Invalid redirect found:
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
    function X(A, Y) {
      const H = d = k(A), Q = l.value, xe = A.state, Be = A.force, de = A.replace === !0, ue = Ee(H);
      if (ue)
        return X(
          Fe(N(ue), {
            state: typeof ue == "object" ? Fe({}, xe, ue.state) : xe,
            force: Be,
            replace: de
          }),
          // keep original redirectedFrom if it exists
          Y || H
        );
      const h = H;
      h.redirectedFrom = Y;
      let b;
      return !Be && jr(o, Q, H) && (b = mo(16, { to: h, from: Q }), on(
        Q,
        Q,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        !0,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        !1
      )), (b ? Promise.resolve(b) : be(h, Q)).catch((x) => Gt(x) ? (
        // navigation redirects still mark the router as ready
        Gt(
          x,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ) ? x : st(x)
      ) : (
        // reject any unknown error
        me(x, h, Q)
      )).then((x) => {
        if (x) {
          if (Gt(
            x,
            2
            /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
          ))
            return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
            jr(o, k(x.to), h) && // and we have done it a couple of times
            Y && // @ts-expect-error: added only in dev
            (Y._count = Y._count ? (
              // @ts-expect-error
              Y._count + 1
            ) : 1) > 10 ? (ke(`Detected an infinite redirection in a navigation guard when going from "${Q.fullPath}" to "${h.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : X(
              // keep options
              Fe({
                // preserve an existing replacement but allow the redirect to override it
                replace: de
              }, N(x.to), {
                state: typeof x.to == "object" ? Fe({}, xe, x.to.state) : xe,
                force: Be
              }),
              // preserve the original redirectedFrom if any
              Y || h
            );
        } else
          x = pe(h, Q, !0, de, xe);
        return le(h, Q, x), x;
      });
    }
    function W(A, Y) {
      const H = z(A, Y);
      return H ? Promise.reject(H) : Promise.resolve();
    }
    function be(A, Y) {
      let H;
      const [Q, xe, Be] = av(A, Y);
      H = Ea(Q.reverse(), "beforeRouteLeave", A, Y);
      for (const ue of Q)
        ue.leaveGuards.forEach((h) => {
          H.push(hn(h, A, Y));
        });
      const de = W.bind(null, A, Y);
      return H.push(de), no(H).then(() => {
        H = [];
        for (const ue of a.list())
          H.push(hn(ue, A, Y));
        return H.push(de), no(H);
      }).then(() => {
        H = Ea(xe, "beforeRouteUpdate", A, Y);
        for (const ue of xe)
          ue.updateGuards.forEach((h) => {
            H.push(hn(h, A, Y));
          });
        return H.push(de), no(H);
      }).then(() => {
        H = [];
        for (const ue of A.matched)
          if (ue.beforeEnter && !Y.matched.includes(ue))
            if (bt(ue.beforeEnter))
              for (const h of ue.beforeEnter)
                H.push(hn(h, A, Y));
            else
              H.push(hn(ue.beforeEnter, A, Y));
        return H.push(de), no(H);
      }).then(() => (A.matched.forEach((ue) => ue.enterCallbacks = {}), H = Ea(Be, "beforeRouteEnter", A, Y), H.push(de), no(H))).then(() => {
        H = [];
        for (const ue of i.list())
          H.push(hn(ue, A, Y));
        return H.push(de), no(H);
      }).catch((ue) => Gt(
        ue,
        8
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? ue : Promise.reject(ue));
    }
    function le(A, Y, H) {
      for (const Q of r.list())
        Q(A, Y, H);
    }
    function pe(A, Y, H, Q, xe) {
      const Be = z(A, Y);
      if (Be)
        return Be;
      const de = Y === un, ue = Xt ? history.state : {};
      H && (Q || de ? s.replace(A.fullPath, Fe({
        scroll: de && ue && ue.scroll
      }, xe)) : s.push(A.fullPath, xe)), l.value = A, on(A, Y, H, de), st();
    }
    let j;
    function Le() {
      j || (j = s.listen((A, Y, H) => {
        if (!Ht.listening)
          return;
        const Q = k(A), xe = Ee(Q);
        if (xe) {
          X(Fe(xe, { replace: !0 }), Q).catch(Po);
          return;
        }
        d = Q;
        const Be = l.value;
        Xt && J_(qr(Be.fullPath, H.delta), na()), be(Q, Be).catch((de) => Gt(
          de,
          12
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? de : Gt(
          de,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ) ? (X(
          de.to,
          Q
          // avoid an uncaught rejection, let push call triggerError
        ).then((ue) => {
          Gt(
            ue,
            20
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          ) && !H.delta && H.type === jo.pop && s.go(-1, !1);
        }).catch(Po), Promise.reject()) : (H.delta && s.go(-H.delta, !1), me(de, Q, Be))).then((de) => {
          de = de || pe(
            // after navigation, all matched components are resolved
            Q,
            Be,
            !1
          ), de && (H.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
          // entry while a different route is displayed
          !Gt(
            de,
            8
            /* ErrorTypes.NAVIGATION_CANCELLED */
          ) ? s.go(-H.delta, !1) : H.type === jo.pop && Gt(
            de,
            20
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          ) && s.go(-1, !1)), le(Q, Be, de);
        }).catch(Po);
      }));
    }
    let je = Eo(), ot = Eo(), Re;
    function me(A, Y, H) {
      st(A);
      const Q = ot.list();
      return Q.length ? Q.forEach((xe) => xe(A, Y, H)) : ({}.NODE_ENV !== "production" && ke("uncaught error during route navigation:"), console.error(A)), Promise.reject(A);
    }
    function _e() {
      return Re && l.value !== un ? Promise.resolve() : new Promise((A, Y) => {
        je.add([A, Y]);
      });
    }
    function st(A) {
      return Re || (Re = !A, Le(), je.list().forEach(([Y, H]) => A ? H(A) : Y()), je.reset()), A;
    }
    function on(A, Y, H, Q) {
      const { scrollBehavior: xe } = e;
      if (!Xt || !xe)
        return Promise.resolve();
      const Be = !H && Z_(qr(A.fullPath, 0)) || (Q || !H) && history.state && history.state.scroll || null;
      return Wo().then(() => xe(A, Y, Be)).then((de) => de && Y_(de)).catch((de) => me(de, A, Y));
    }
    const pt = (A) => s.go(A);
    let ct;
    const ut = /* @__PURE__ */ new Set(), Ht = {
      currentRoute: l,
      listening: !0,
      addRoute: f,
      removeRoute: m,
      hasRoute: E,
      getRoutes: w,
      resolve: k,
      options: e,
      push: I,
      replace: Z,
      go: pt,
      back: () => pt(-1),
      forward: () => pt(1),
      beforeEach: a.add,
      beforeResolve: i.add,
      afterEach: r.add,
      onError: ot.add,
      isReady: _e,
      install(A) {
        const Y = this;
        A.component("RouterLink", j1), A.component("RouterView", K1), A.config.globalProperties.$router = Y, Object.defineProperty(A.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => co(l)
        }), Xt && // used for the initial navigation client side to avoid pushing
        // multiple times when the router is used in multiple apps
        !ct && l.value === un && (ct = !0, I(s.location).catch((xe) => {
          ({}).NODE_ENV !== "production" && ke("Unexpected error when starting the router:", xe);
        }));
        const H = {};
        for (const xe in un)
          H[xe] = y(() => l.value[xe]);
        A.provide(oa, Y), A.provide(Eu, Xn(H)), A.provide(Qa, l);
        const Q = A.unmount;
        ut.add(A), A.unmount = function() {
          ut.delete(A), ut.size < 1 && (d = un, j && j(), j = null, l.value = un, ct = !1, Re = !1), Q();
        }, {}.NODE_ENV !== "production" && Xt && Y1(A, Y, t);
      }
    };
    return Ht;
  }
  function no(e) {
    return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
  }
  function av(e, t) {
    const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < a; i++) {
      const r = t.matched[i];
      r && (e.matched.find((d) => wn(d, r)) ? o.push(r) : n.push(r));
      const l = e.matched[i];
      l && (t.matched.find((d) => wn(d, l)) || s.push(l));
    }
    return [n, o, s];
  }
  function St() {
    return Je(oa);
  }
  const iv = {
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
  }, rv = {
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
  }, lv = [
    "Arab",
    "Hebr",
    "Syrc",
    "Nkoo",
    "Rohg",
    "Thaa"
  ], cv = {
    WW: 1,
    SP: 1,
    AM: 2,
    EU: 3,
    ME: 3,
    AF: 3,
    AS: 4,
    PA: 4
  }, uv = {
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
  }, dv = {
    languages: iv,
    scriptgroups: rv,
    rtlscripts: lv,
    regiongroups: cv,
    territories: uv
  };
  var rt = dv;
  function ts(e) {
    return !!rt.languages[e];
  }
  function An(e) {
    return ts(e) && rt.languages[e].length === 1 ? rt.languages[e][0] : !1;
  }
  function gv() {
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
  function qo(e) {
    var t = An(e);
    return t ? qo(t) : ts(e) && rt.languages[e][2] || e;
  }
  function fv() {
    var e, t = {};
    for (e in rt.languages)
      An(e) || (t[e] = qo(e));
    return t;
  }
  function Nu(e) {
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
  function pv(e) {
    return Nu([e]);
  }
  function Fu(e) {
    var t;
    for (t in rt.scriptgroups)
      if (rt.scriptgroups[t].includes(e))
        return t;
    return "Other";
  }
  function Bi(e) {
    return Fu(ns(e));
  }
  function Mu(e) {
    var t = {}, n, o, s, a;
    for (o = 0; o < e.length; o++)
      n = e[o], s = An(n) || n, a = Bi(s), t[a] || (t[a] = []), t[a].push(n);
    return t;
  }
  function Ou(e) {
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
  function hv(e) {
    return Ou([e]);
  }
  function mv(e) {
    var t, n, o, s = [];
    for (t = Mu(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
      s = s.concat(t[n[o]]);
    return s;
  }
  function _v(e, t) {
    var n = qo(e) || e, o = qo(t) || t;
    return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
  }
  function Bu(e) {
    return rt.rtlscripts.includes(ns(e));
  }
  function vv(e) {
    return Bu(e) ? "rtl" : "ltr";
  }
  function yv(e) {
    return rt.territories[e] || [];
  }
  function bv(e, t) {
    t.target ? rt.languages[e] = [t.target] : rt.languages[e] = [t.script, t.regions, t.autonym];
  }
  var Ne = {
    addLanguage: bv,
    getAutonym: qo,
    getAutonyms: fv,
    getDir: vv,
    getGroupOfScript: Fu,
    getLanguages: gv,
    getLanguagesByScriptGroup: Mu,
    getLanguagesByScriptGroupInRegion: hv,
    getLanguagesByScriptGroupInRegions: Ou,
    getLanguagesInScript: pv,
    getLanguagesInScripts: Nu,
    getLanguagesInTerritory: yv,
    getRegions: Oi,
    getScript: ns,
    getScriptGroupOfLanguage: Bi,
    isKnown: ts,
    isRedirect: An,
    isRtl: Bu,
    sortByScriptGroup: mv,
    sortByAutonym: _v
  };
  function os() {
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
  function ye(e) {
    const t = y(() => e.state.application.sourceLanguage), n = y(() => e.state.application.targetLanguage), o = y(
      () => e.state.application.currentMTProvider
    ), s = y(
      () => e.state.application.currentSectionSuggestion
    ), a = y(
      () => e.state.application.currentSourceSection
    ), i = y(
      () => Ne.getAutonym(t.value)
    ), r = y(
      () => Ne.getAutonym(n.value)
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
  const Sv = (e, t) => {
    const n = new URLSearchParams(location.search), o = n.get("from"), s = n.get("to"), a = Ve.getCurrentWikiLanguageCode(), i = (g) => !e || Array.isArray(e) && e.includes(g), r = (g) => t.includes(g), l = {
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
  }, Iu = (e) => {
    if (!history.pushState)
      return;
    const t = new URLSearchParams(location.search);
    t.set("page", e == null ? void 0 : e.sourceTitle), t.set("from", e == null ? void 0 : e.sourceLanguage), t.set("to", e == null ? void 0 : e.targetLanguage), t.set("sx", !0), t.delete("title"), yo(Object.fromEntries(t));
  }, yo = (e) => {
    history.replaceState(
      {},
      document.title,
      ru("Special:ContentTranslation", e)
    );
  }, Ii = (e, t, n, o) => {
    const s = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), a = Ve.getCurrentWikiLanguageCode();
    s && t !== a && (location.href = Ve.getCXUrl(
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
    o.set("from", t), o.set("to", n), o.delete("title"), yo(Object.fromEntries(o));
  }, $u = () => K(vt, null, function* () {
    yield ho.dispatch("mediawiki/fetchSupportedLanguageCodes");
    const { enabledTargetLanguages: e, supportedLanguageCodes: t } = os(), { sourceLanguage: n, targetLanguage: o } = Sv(
      e.value,
      t.value
    ), s = new URLSearchParams(location.search), a = s.get("page"), i = s.get("section");
    Ii(
      n,
      o,
      a,
      i
    ), $i(ho, n, o);
  }), Ui = (e) => (t, n) => {
    const { sourceLanguage: o, targetLanguage: s } = ye(e);
    t === n && (t = s.value, n = o.value), Ii(
      t,
      n,
      null,
      null
    ), $i(e, t, n), e.dispatch("suggestions/initializeSuggestions");
  }, wv = (e) => (t, n) => K(vt, null, function* () {
    const { sourceLanguage: o, targetLanguage: s, currentSectionSuggestion: a } = ye(e);
    t === n && (t = s.value, n = o.value);
    const i = e.getters["application/getCurrentLanguageTitleGroup"], r = i.getTitleForLanguage(t);
    Ii(
      t,
      n,
      r,
      null
    ), $i(e, t, n);
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
  function Cv(e) {
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
  function xv() {
    var e = this.getReferenceNode();
    return e ? (this.view = new ve.ui.MWPreviewElement(e, {
      useView: !0
    }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
  }
  function Av(e, t) {
    return K(this, null, function* () {
      yield Ri(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
      const n = Cv(t);
      return new ve.init.mw.SectionTranslationTarget(n, e);
    });
  }
  function kv(e) {
    const t = mw.Title.newFromText(e[0].getAttribute("title"));
    return ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(t);
  }
  const Tv = {
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
        ve.dm.MWInternalLinkAnnotation.static.toDataElement = kv;
        const c = yield Av(l, n.value);
        t.emit("ready"), n.value.appendChild(c.$element[0]), o = Ev(
          c,
          e.content,
          e.language,
          e.dir
        ), ve.ui.MWReferenceContextItem.prototype.getRendering = xv, o.focus();
      })), { sxeditor: n };
    }
  }, Dv = ["lang", "dir"], Lv = /* @__PURE__ */ C("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ C("div", { class: "toolbar" })
  ], -1), Pv = ["lang", "dir"];
  function Nv(e, t, n, o, s, a) {
    return v(), T("div", {
      ref: "sxeditor",
      lang: n.language,
      dir: n.dir,
      class: "visual-editor"
    }, [
      Lv,
      C("div", {
        class: "surface pa-5",
        lang: n.language,
        dir: n.dir
      }, null, 8, Pv)
    ], 8, Dv);
  }
  const Fv = /* @__PURE__ */ V(Tv, [["render", Nv]]);
  function Ri() {
    return mw.loader.using("mw.cx3.ve");
  }
  let ti = null;
  function Mv(e) {
    if (ti)
      return Promise.resolve(ti);
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
  function Ov(e) {
    return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
  }
  function Bv(e) {
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
    ) : Mv(i).then((l) => {
      ti = l, mw.eventLog.submit(
        s,
        Object.assign({}, r, e, {
          user_global_edit_count: l,
          user_global_edit_count_bucket: Ov(l)
        })
      );
    });
  }
  const Uu = Symbol("event-logging-context"), nn = function() {
    const e = Je(Uu);
    if (!e)
      throw new Error("No event logging method provided!!!");
    return e;
  }, Iv = () => ({
    install: (e) => {
      e.provide(Uu, Bv);
    }
  }), $v = (e) => {
    const t = nn(), n = Se(), o = St(), { currentSourcePage: s, sourceLanguage: a, targetLanguage: i } = ye(n), r = Ui(n);
    return () => K(vt, null, function* () {
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
  }, Uv = (e) => {
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
  }, Rv = {
    name: "CxTranslationWork",
    components: { MwThumbnail: ki, MwIcon: ze },
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
      }, s = $v(e.translation), a = y(
        () => e.translation.status === "published" ? r : l
      ), i = (d) => {
        t("click", d), s();
      }, r = () => {
      }, l = Uv(e.translation);
      return {
        getAutonym: Ne.getAutonym,
        getDir: Ne.getDir,
        getImage: o,
        handleActionIconClick: a,
        mwIconEdit: Qt,
        mwIconTrash: Lc,
        mwIconArrowForward: En,
        mwIconArrowNext: Ei,
        onClick: i
      };
    }
  }, Vv = { class: "col shrink pe-4" }, zv = { class: "col" }, jv = { class: "cx-translation__details column justify-between ma-0" }, Hv = { class: "row ma-0" }, qv = { class: "col grow" }, Gv = ["lang", "textContent"], Kv = ["lang", "textContent"], Wv = { class: "col shrink ps-2" }, Xv = { class: "row cx-translation__footer ma-0" }, Yv = { class: "cx-translation__languages col grow" }, Jv = ["dir", "textContent"], Zv = ["dir", "textContent"];
  function Qv(e, t, n, o, s, a) {
    const i = _("mw-thumbnail"), r = _("mw-icon");
    return n.translation ? (v(), T("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: t[0] || (t[0] = (...l) => o.onClick && o.onClick(...l))
    }, [
      C("div", Vv, [
        p(i, {
          class: "cx-translation__thumbnail",
          thumbnail: o.getImage(n.translation.sourceLanguage, n.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      C("div", zv, [
        C("div", jv, [
          C("div", Hv, [
            C("div", qv, [
              C("h5", {
                class: ge(["cx-translation__source-page-title", {
                  "cx-translation__primary-title": n.translation.isLeadSectionTranslation
                }]),
                lang: n.translation.sourceLanguage,
                textContent: ae(n.translation.sourceTitle)
              }, null, 10, Gv),
              n.translation.isLeadSectionTranslation ? se("", !0) : (v(), T("h6", {
                key: 0,
                class: "cx-translation__source-section-title cx-translation__primary-title",
                lang: n.translation.sourceLanguage,
                textContent: ae(n.translation.sourceSectionTitle)
              }, null, 8, Kv))
            ]),
            C("div", Wv, [
              p(r, {
                icon: n.translation.status === "published" ? o.mwIconEdit : o.mwIconTrash,
                onClick: yt(o.handleActionIconClick, ["stop"])
              }, null, 8, ["icon", "onClick"])
            ])
          ]),
          C("div", Xv, [
            C("div", Yv, [
              C("span", {
                class: "mw-ui-autonym",
                dir: o.getDir(n.translation.sourceLanguage),
                textContent: ae(o.getAutonym(n.translation.sourceLanguage))
              }, null, 8, Jv),
              p(r, {
                icon: o.mwIconArrowNext,
                class: "mx-1",
                size: 14
              }, null, 8, ["icon"]),
              C("span", {
                class: "mw-ui-autonym ma-0",
                dir: o.getDir(n.translation.targetLanguage),
                textContent: ae(o.getAutonym(n.translation.targetLanguage))
              }, null, 8, Zv)
            ])
          ])
        ])
      ])
    ])) : se("", !0);
  }
  const ey = /* @__PURE__ */ V(Rv, [["render", Qv]]);
  function ty(e, t, n) {
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
      return s.length ? s : n ? (yield ny(t, n)).filter((i) => e.includes(i)) : [];
    });
  }
  function al(e, t, n) {
    return K(this, null, function* () {
      return !t || t.trim().length === 0 ? e.sort(Ne.sortByAutonym) : (yield ty(e, t, n)).sort(Ne.sortByAutonym);
    });
  }
  function ny(e, t) {
    const n = new URL(t);
    return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
  }
  function oy() {
    const e = new URL("https://en.wikipedia.org/w/api.php");
    return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
  }
  function sy(e) {
    let t, n = [...e];
    const o = e.length;
    o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
    const s = [];
    for (; n.length; )
      s.push(n.splice(0, t));
    return s;
  }
  function ay(e) {
    const t = e.length;
    return t < 10 ? "few-results" : t < 30 ? "some-results" : "many-results";
  }
  function iy(e, t) {
    const n = y(() => {
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
  function ry(e, t, n) {
    const o = ne(""), s = ne(-1), a = ne(null), i = () => {
      s.value++, s.value >= r.value.length && (s.value = 0);
    }, r = y(
      () => e.value ? t.value : [...n, ...t.value]
    ), l = () => {
      s.value--, s.value < 0 && (s.value = 0);
    };
    return We(e, () => {
      s.value = -1;
    }), We(s, () => K(this, null, function* () {
      var d;
      if (s.value < 0) {
        o.value = "";
        return;
      }
      o.value = r.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
    })), { next: i, prev: l, langSelectorContainer: a, selectedLanguage: o };
  }
  const ly = {
    name: "MwLanguageSelector",
    components: {
      MwInput: Ai
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
        default: oy
      }
    },
    emits: ["select", "close"],
    setup(e, t) {
      const n = ne(null), o = ne(""), s = ne([]), a = y(
        () => sy(s.value)
      ), i = y(
        () => ay(s.value)
      ), r = (k) => t.emit("select", k), l = () => t.emit("close"), { autocompletion: d, onTabSelect: c } = iy(
        o,
        s
      ), { next: u, prev: g, langSelectorContainer: f, selectedLanguage: m } = ry(o, s, e.suggestions), w = () => {
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
      return We(o, Fi(() => K(this, null, function* () {
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
        getAutonym: Ne.getAutonym,
        getDir: Ne.getDir,
        langSelectorContainer: f,
        mwIconClose: Ft,
        mwIconSearch: Fc,
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
  }, cy = {
    ref: "langSelectorContainer",
    class: "mw-ui-language-selector"
  }, uy = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, dy = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, gy = { class: "results px-3 pt-4" }, fy = { class: "results-header ps-8 pb-2" }, py = { class: "results-languages--suggestions pa-0 ma-0" }, hy = ["lang", "dir", "aria-selected", "onClick", "textContent"], my = { class: "results px-3 pt-4" }, _y = {
    key: 0,
    class: "results-header ps-8 pb-2"
  }, vy = ["lang", "dir", "aria-selected", "onClick", "textContent"], yy = ["aria-selected"], by = { class: "no-results px-3 py-4" }, Sy = { class: "ps-8" };
  function wy(e, t, n, o, s, a) {
    const i = _("mw-input"), r = Te("i18n");
    return v(), T("div", cy, [
      Ke(e.$slots, "search", {}, () => [
        C("div", uy, [
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
              ao(yt(o.onEnter, ["prevent"]), ["enter"]),
              ao(yt(o.next, ["stop", "prevent"]), ["down"]),
              ao(yt(o.prev, ["stop", "prevent"]), ["up"]),
              ao(yt(o.close, ["prevent"]), ["esc"]),
              ao(yt(o.onTabSelect, ["prevent"]), ["tab"])
            ]
          }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
        ])
      ]),
      C("section", dy, [
        n.suggestions.length && !o.searchQuery ? Ke(e.$slots, "suggestions", { key: 0 }, () => [
          C("section", gy, [
            G(C("p", fy, null, 512), [
              [r, void 0, "cx-sx-language-selector-suggestions"]
            ]),
            C("ul", py, [
              (v(!0), T(Ce, null, Qe(n.suggestions, (l) => (v(), T("li", {
                key: l,
                class: ge(["language pa-2 ps-8 ma-0", l === o.selectedLanguage ? "language--selected" : ""]),
                lang: l,
                dir: o.getDir(l),
                "aria-selected": l === o.selectedLanguage || null,
                tabindex: "-1",
                role: "option",
                onClick: (d) => o.select(l),
                textContent: ae(o.getAutonym(l))
              }, null, 10, hy))), 128))
            ])
          ])
        ]) : se("", !0),
        o.searchResultsByScript.length ? Ke(e.$slots, "search", { key: 1 }, () => [
          C("section", my, [
            n.suggestions.length && !o.searchQuery ? G((v(), T("p", _y, null, 512)), [
              [r, void 0, "cx-sx-language-selector-all-languages"]
            ]) : se("", !0),
            (v(!0), T(Ce, null, Qe(o.searchResultsByScript, (l, d) => (v(), T("ul", {
              key: d,
              class: ge(["results-languages pa-0 ma-0 mb-6", o.resultsDisplayClass])
            }, [
              (v(!0), T(Ce, null, Qe(l, (c) => (v(), T("li", {
                key: c,
                class: ge(["language pa-2 ps-8 ma-0", c === o.selectedLanguage ? "language--selected" : ""]),
                lang: c,
                dir: o.getDir(c),
                role: "option",
                "aria-selected": c === o.selectedLanguage || null,
                tabindex: "-1",
                onClick: (u) => o.select(c),
                textContent: ae(o.getAutonym(c))
              }, null, 10, vy))), 128)),
              n.allOptionEnabled && !o.searchQuery ? G((v(), T("li", {
                key: 0,
                class: ge(["language pa-2 ps-8 ma-0", o.selectedLanguage === "all" ? "language--selected" : ""]),
                role: "option",
                "aria-selected": o.selectedLanguage === "all" || null,
                tabindex: "-1",
                onClick: t[2] || (t[2] = (c) => o.select("all"))
              }, null, 10, yy)), [
                [r, void 0, "cx-translation-list-all-languages-option-label"]
              ]) : se("", !0)
            ], 2))), 128))
          ])
        ]) : Ke(e.$slots, "noresults", { key: 2 }, () => [
          C("section", by, [
            G(C("h3", Sy, null, 512), [
              [r, void 0, "cx-sx-language-selector-no-search-results"]
            ])
          ])
        ])
      ])
    ], 512);
  }
  const Ru = /* @__PURE__ */ V(ly, [["render", wy]]), Cy = {
    name: "SxTranslationListLanguageSelector",
    components: {
      MwLanguageSelector: Ru,
      MwDialog: Yn,
      MwIcon: ze,
      MwButton: De
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
      const n = Je("breakpoints"), o = y(() => n.value.mobile), s = ne(!1), a = ne(!1), i = () => s.value = !0, r = () => a.value = !0, l = () => s.value = !1, d = () => a.value = !1, c = (m) => {
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
        getAutonym: Ne.getAutonym,
        getDir: Ne.getDir,
        mwIconArrowNext: Ei,
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
  }, Ey = { class: "row sx-translation-list-language-selector ma-0 justify-center items-center" }, xy = { class: "col-5 justify-end" }, Ay = {
    key: 0,
    class: "mw-ui-autonym"
  }, ky = ["lang", "dir", "textContent"], Ty = { class: "sx-translation-list-language-selector__arrow col-2 justify-center" }, Dy = { class: "col-5 justify-start" }, Ly = {
    key: 0,
    class: "mw-ui-autonym"
  }, Py = ["lang", "dir", "textContent"];
  function Ny(e, t, n, o, s, a) {
    const i = _("mw-button"), r = _("mw-language-selector"), l = _("mw-dialog"), d = _("mw-icon"), c = Te("i18n");
    return v(), T("div", Ey, [
      C("div", xy, [
        p(i, {
          indicator: o.mwIconExpand,
          outlined: !1,
          class: "pa-3 sx-translation-list-language-selector__button",
          type: "text",
          onClick: yt(o.openSourceLanguageDialog, ["stop"])
        }, {
          default: S(() => [
            o.allLanguagesSelectedAsSource ? G((v(), T("span", Ay, null, 512)), [
              [c, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : (v(), T("span", {
              key: 1,
              class: "mw-ui-autonym",
              lang: n.selectedSourceLanguage,
              dir: o.getDir(n.selectedSourceLanguage),
              textContent: ae(o.getAutonym(n.selectedSourceLanguage))
            }, null, 8, ky))
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
          default: S(() => [
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
      C("div", Ty, [
        p(d, { icon: o.mwIconArrowNext }, null, 8, ["icon"])
      ]),
      C("div", Dy, [
        p(i, {
          indicator: o.mwIconExpand,
          outlined: !1,
          class: "pa-3 sx-translation-list-language-selector__button",
          type: "text",
          disabled: n.targetLanguages.length < 2,
          onClick: yt(o.openTargetLanguageDialog, ["stop"])
        }, {
          default: S(() => [
            o.allLanguagesSelectedAsTarget ? G((v(), T("span", Ly, null, 512)), [
              [c, void 0, "cx-translation-list-all-languages-option-label"]
            ]) : (v(), T("span", {
              key: 1,
              class: "mw-ui-autonym",
              lang: n.selectedTargetLanguage,
              dir: o.getDir(n.selectedTargetLanguage),
              textContent: ae(o.getAutonym(n.selectedTargetLanguage))
            }, null, 8, Py))
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
          default: S(() => [
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
  const Vi = /* @__PURE__ */ V(Cy, [["render", Ny]]), Fy = {
    name: "CxTranslationList",
    components: {
      CxTranslationWork: ey,
      MwCard: jt,
      MwSpinner: Jn,
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
  }, My = ["textContent"];
  function Oy(e, t, n, o, s, a) {
    const i = _("sx-translation-list-language-selector"), r = _("mw-spinner"), l = _("cx-translation-work"), d = _("mw-card");
    return G((v(), M(d, {
      class: ge(`cx-translation-list--${n.translationStatus}`)
    }, {
      header: S(() => [
        C("h3", {
          class: "mw-ui-card__title pa-4 pt-5 mb-0",
          textContent: ae(e.$i18n(`cx-translation-label-${n.translationStatus}`))
        }, null, 8, My)
      ]),
      default: S(() => [
        p(i, {
          "selected-source-language": o.selectedSourceLanguage,
          "onUpdate:selectedSourceLanguage": t[0] || (t[0] = (c) => o.selectedSourceLanguage = c),
          "selected-target-language": o.selectedTargetLanguage,
          "onUpdate:selectedTargetLanguage": t[1] || (t[1] = (c) => o.selectedTargetLanguage = c),
          "source-languages": o.availableSourceLanguages,
          "target-languages": o.availableTargetLanguages,
          "all-option-enabled": ""
        }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"]),
        o.loaded ? se("", !0) : (v(), M(r, { key: 0 })),
        (v(!0), T(Ce, null, Qe(o.activeTranslations, (c) => (v(), M(l, {
          key: `${n.translationStatus}-translation-${c.id}`,
          translation: c
        }, null, 8, ["translation"]))), 128))
      ], void 0),
      _: 1
    }, 8, ["class"])), [
      [wi, n.active]
    ]);
  }
  const By = /* @__PURE__ */ V(Fy, [["render", Oy]]), Iy = {
    name: "CxTranslationSuggestion",
    components: { MwThumbnail: ki, MwIcon: ze, MwRow: Ae, MwCol: Me },
    props: {
      suggestion: {
        type: [Pi, zt, zo],
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
        () => n.value instanceof zt
      ), l = y(
        () => n.value instanceof zo
      ), { sourceLanguageAutonym: d, targetLanguageAutonym: c } = ye(t), u = y(
        () => l.value ? Oc : Mc
      ), g = Je("colors"), f = y(
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
        mwIconArrowNext: Ei,
        mwIconClose: Ft,
        page: s,
        sourceLanguageAutonym: d,
        targetLanguageAutonym: c,
        title: o
      };
    }
  }, $y = {
    key: 0,
    class: "row cx-suggestion pa-4 ma-0"
  }, Uy = { class: "col shrink pe-4" }, Ry = { class: "col cx-suggestion__information-panel" }, Vy = ["lang", "dir", "textContent"], zy = ["lang", "dir", "textContent"], jy = ["textContent"], Hy = ["textContent"];
  function qy(e, t, n, o, s, a) {
    const i = _("mw-thumbnail"), r = _("mw-col"), l = _("mw-row"), d = _("mw-icon"), c = Te("i18n");
    return n.suggestion ? (v(), T("div", $y, [
      C("div", Uy, [
        p(i, {
          class: "cx-suggestion__thumbnail",
          thumbnail: o.page && o.page.thumbnail
        }, null, 8, ["thumbnail"])
      ]),
      C("div", Ry, [
        p(l, {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: S(() => [
            p(r, {
              shrink: "",
              class: "cx-suggestion__information-panel__top pb-2"
            }, {
              default: S(() => [
                p(l, {
                  class: "ma-0",
                  align: "start",
                  justify: "between"
                }, {
                  default: S(() => [
                    p(r, {
                      grow: "",
                      class: "pe-2"
                    }, {
                      default: S(() => [
                        p(l, {
                          direction: "column",
                          class: "ma-0",
                          align: "start"
                        }, {
                          default: S(() => [
                            p(r, {
                              shrink: "",
                              class: "mb-2"
                            }, {
                              default: S(() => [
                                C("h5", {
                                  class: "my-0 cx-suggestion__source-title",
                                  lang: n.suggestion.sourceLanguage,
                                  dir: o.getDir(n.suggestion.sourceLanguage),
                                  textContent: ae(o.title)
                                }, null, 8, Vy)
                              ], void 0, !0),
                              _: 1
                            }),
                            p(r, { shrink: "" }, {
                              default: S(() => [
                                C("p", {
                                  class: "ma-0 cx-suggestion__source-description complementary",
                                  lang: n.suggestion.sourceLanguage,
                                  dir: o.getDir(n.suggestion.sourceLanguage),
                                  textContent: ae(o.description)
                                }, null, 8, zy)
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
                      default: S(() => [
                        o.isFavoriteSuggestion ? se("", !0) : (v(), M(d, {
                          key: 0,
                          icon: o.mwIconClose,
                          size: "24",
                          class: "mb-4",
                          onClick: t[0] || (t[0] = yt((u) => e.$emit("close"), ["stop"]))
                        }, null, 8, ["icon"])),
                        p(d, {
                          icon: o.bookmarkIcon,
                          size: "24",
                          "icon-color": o.bookmarkIconColor,
                          onClick: t[1] || (t[1] = yt((u) => e.$emit("bookmark"), ["stop"]))
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
              default: S(() => [
                G(C("small", null, null, 512), [
                  [c, [o.missingSectionsCount], "cx-sx-translation-suggestion-info"]
                ])
              ], void 0, !0),
              _: 1
            })) : o.isFavoriteSuggestion ? (v(), M(r, {
              key: 1,
              class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
              shrink: ""
            }, {
              default: S(() => [
                p(l, {
                  justify: "between",
                  class: "ma-0"
                }, {
                  default: S(() => [
                    p(r, { grow: "" }, {
                      default: S(() => [
                        C("small", {
                          textContent: ae(o.sourceLanguageAutonym)
                        }, null, 8, jy),
                        p(d, {
                          icon: o.mwIconArrowNext,
                          size: "14",
                          class: "mx-1"
                        }, null, 8, ["icon"]),
                        C("small", {
                          textContent: ae(o.targetLanguageAutonym)
                        }, null, 8, Hy)
                      ], void 0, !0),
                      _: 1
                    }),
                    o.missingSectionsCount ? (v(), M(r, {
                      key: 0,
                      shrink: "",
                      class: "cx-suggestion__favorite-missing-sections"
                    }, {
                      default: S(() => [
                        G(C("small", null, null, 512), [
                          [c, [
                            o.missingSectionsCount
                          ], "cx-sx-translation-suggestion-info"]
                        ])
                      ], void 0, !0),
                      _: 1
                    })) : se("", !0)
                  ], void 0, !0),
                  _: 1
                })
              ], void 0, !0),
              _: 1
            })) : se("", !0)
          ], void 0),
          _: 1
        })
      ])
    ])) : se("", !0);
  }
  const Vu = /* @__PURE__ */ V(Iy, [["render", qy]]), Gy = () => {
    const { supportedLanguageCodes: e, enabledTargetLanguages: t } = os(), n = y(() => t.value || e.value);
    return {
      supportedLanguageCodes: e,
      availableTargetLanguages: n
    };
  }, Ky = () => {
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
      m(), w();
    }, m = () => {
      const I = u.value.length === d, Z = (r.value + 1) % c, Ee = I && e.getters["application/getSectionSuggestionsSliceByIndex"](Z).length > 0;
      (!I || !Ee) && e.dispatch("suggestions/fetchNextSectionSuggestionsSlice"), I && N();
    }, w = () => {
      const I = g.value.length === d, Z = (l.value + 1) % c, Ee = I && e.getters["application/getPageSuggestionsSliceByIndex"](Z).length > 0;
      (!I || !Ee) && e.dispatch("suggestions/fetchNextPageSuggestionsSlice"), I && z();
    }, E = (I) => {
      o({
        event_type: "dashboard_discard_suggestion",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), e.commit("suggestions/removeSectionSuggestion", I), m();
    }, k = (I) => {
      o({
        event_type: "dashboard_discard_suggestion",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), e.commit("suggestions/removePageSuggestion", I), w();
    }, N = () => r.value = (r.value + 1) % c, z = () => l.value = (l.value + 1) % c;
    return {
      currentPageSuggestionsSlice: g,
      currentSectionSuggestionsSlice: u,
      discardPageSuggestion: k,
      discardSectionSuggestion: E,
      onSuggestionRefresh: f,
      pageSuggestionsLoading: a,
      sectionSuggestionsLoading: s,
      showRefreshButton: i
    };
  }, zu = (e) => K(vt, null, function* () {
    return ho.dispatch("suggestions/removeFavoriteSuggestion", e);
  }), Wy = {
    name: "CxSuggestionList",
    components: {
      SxTranslationListLanguageSelector: Vi,
      CxTranslationSuggestion: Vu,
      MwCard: jt,
      MwButton: De,
      MwSpinner: Jn
    },
    props: {
      active: {
        type: Boolean,
        default: !1
      }
    },
    setup() {
      const e = Se(), { sourceLanguage: t, targetLanguage: n } = ye(e), { supportedLanguageCodes: o, availableTargetLanguages: s } = Gy(), a = Ui(e), i = (X) => a(X, n.value), r = (X) => a(t.value, X), l = St(), d = (X) => {
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
        pageSuggestionsLoading: w,
        sectionSuggestionsLoading: E,
        showRefreshButton: k
      } = Ky(), N = ne(null), z = nn();
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
        unmarkFavoriteSectionSuggestion: zu,
        pageSuggestionsLoading: w,
        pageSuggestionsList: N,
        refreshSuggestions: () => {
          z({
            event_type: "dashboard_refresh_suggestions",
            translation_source_language: t.value,
            translation_target_language: n.value
          }), m(), N.value.$el.scrollIntoView({ behavior: "smooth" });
        },
        sectionSuggestionsLoading: E,
        showRefreshButton: k,
        startTranslation: d,
        supportedLanguageCodes: o,
        updateSourceLanguage: i,
        updateTargetLanguage: r,
        sourceLanguage: t,
        targetLanguage: n
      };
    }
  }, Xy = ["textContent"], Yy = { class: "cx-translation-list__division-title ma-0 pa-4" }, Jy = { class: "cx-translation-list__division-title ma-0 pa-4" }, Zy = { class: "cx-suggestion-list__refresh-button-container justify-center" };
  function Qy(e, t, n, o, s, a) {
    const i = _("sx-translation-list-language-selector"), r = _("mw-card"), l = _("cx-translation-suggestion"), d = _("mw-spinner"), c = _("mw-button"), u = Te("i18n");
    return G((v(), T("div", null, [
      p(r, { class: "cx-translation-list--suggestions pa-0 mb-0" }, {
        header: S(() => [
          C("h3", {
            class: "mw-ui-card__title pa-4 pt-5 mb-0",
            textContent: ae(e.$i18n("cx-suggestionlist-title"))
          }, null, 8, Xy)
        ]),
        default: S(() => [
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
        default: S(() => [
          G(C("h5", Yy, null, 512), [
            [u, void 0, "cx-suggestion-list-new-pages-division"]
          ]),
          (v(!0), T(Ce, null, Qe(o.currentPageSuggestionsSlice, (g, f) => (v(), M(l, {
            key: `page-suggestion-${f}`,
            suggestion: g,
            onClose: (m) => o.discardPageSuggestion(g),
            onClick: (m) => o.startTranslation(g),
            onBookmark: (m) => o.markFavoritePageSuggestion(g)
          }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
          o.pageSuggestionsLoading ? (v(), M(d, { key: 0 })) : se("", !0)
        ], void 0),
        _: 1
      }, 512),
      p(r, { class: "cx-translation-list--sx-suggestions pa-0 mb-0" }, {
        default: S(() => [
          G(C("h5", Jy, null, 512), [
            [u, void 0, "cx-suggestionlist-expand-sections-title"]
          ]),
          (v(!0), T(Ce, null, Qe(o.currentSectionSuggestionsSlice, (g, f) => (v(), M(l, {
            key: `section-suggestion-${f}`,
            class: "ma-0",
            suggestion: g,
            onClose: (m) => o.discardSectionSuggestion(g),
            onClick: (m) => o.startTranslation(g),
            onBookmark: (m) => o.markFavoriteSectionSuggestion(g)
          }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
          o.sectionSuggestionsLoading ? (v(), M(d, { key: 0 })) : se("", !0)
        ], void 0),
        _: 1
      }),
      C("div", Zy, [
        o.showRefreshButton ? (v(), M(c, {
          key: 0,
          class: "ma-0 pa-4",
          type: "text",
          label: e.$i18n("cx-suggestionlist-refresh"),
          outlined: !1,
          icon: o.mwIconRefresh,
          onClick: o.refreshSuggestions
        }, null, 8, ["label", "icon", "onClick"])) : se("", !0)
      ])
    ], 512)), [
      [wi, n.active]
    ]);
  }
  const eb = /* @__PURE__ */ V(Wy, [["render", Qy]]), tb = {
    name: "CxFavoriteList",
    components: {
      CxTranslationSuggestion: Vu,
      MwCard: jt
    },
    setup() {
      const e = St(), t = Se();
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
        unmarkFavoriteSectionSuggestion: zu
      };
    }
  }, nb = { class: "mw-ui-card__title pa-4 pt-5 mb-0" };
  function ob(e, t, n, o, s, a) {
    const i = _("cx-translation-suggestion"), r = _("mw-card"), l = Te("i18n");
    return o.favorites.length ? (v(), M(r, {
      key: 0,
      class: "cx-translation-list--favorites pa-0 mb-4"
    }, {
      header: S(() => [
        G(C("h3", nb, null, 512), [
          [l, void 0, "cx-suggestion-list-favorites-division"]
        ])
      ]),
      default: S(() => [
        (v(!0), T(Ce, null, Qe(o.favorites, (d, c) => (v(), M(i, {
          key: `favorite-${c}`,
          suggestion: d,
          onClick: (u) => o.startFavoriteTranslation(d),
          onBookmark: (u) => o.unmarkFavoriteSectionSuggestion(d)
        }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
      ], void 0),
      _: 1
    })) : se("", !0);
  }
  const sb = /* @__PURE__ */ V(tb, [["render", ob]]);
  var ab = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, ju = { exports: {} };
  (function(e, t) {
    (function(n, o) {
      e.exports = o();
    })(ab, function() {
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
            const E = g[w];
            if (f.test(E)) {
              if (parseInt(E.slice(0, E.indexOf("=")), 10) === u)
                return E.slice(E.indexOf("=") + 1);
              g[w] = void 0;
            }
          }
          g = g.filter((w) => !!w);
          let m = this.getPluralForm(u, this.locale);
          return m = Math.min(m, g.length - 1), g[m];
        }
        getPluralForm(u, g) {
          const f = new Intl.PluralRules(g), m = f.resolvedOptions().pluralCategories, w = f.select(u);
          return ["zero", "one", "two", "few", "many", "other"].filter((E) => m.includes(E)).indexOf(w);
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
            const E = String(u);
            for (let k = 0; k < E.length; k++)
              m += f[E[k]] || E[k];
            return parseFloat(m, 10);
          }
          if (Intl.NumberFormat) {
            let w;
            const E = [...o[this.locale] || [], "en"];
            return w = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : E, m = new Intl.NumberFormat(w).format(u), m === "NaN" && (m = u), m;
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
              if (m = u.slice(1).map((E) => this.emit(E, g)), w = u[0].toLowerCase(), typeof this[w] != "function")
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
          for (const E in f)
            w += ` ${E}="${f[E]}"`;
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
              let E = 0;
              function k(D) {
                return () => {
                  for (let ee = 0; ee < D.length; ee++) {
                    const $e = D[ee]();
                    if ($e !== null)
                      return $e;
                  }
                  return null;
                };
              }
              function N(D) {
                const ee = E, $e = [];
                for (let at = 0; at < D.length; at++) {
                  const wt = D[at]();
                  if (wt === null)
                    return E = ee, null;
                  $e.push(wt);
                }
                return $e;
              }
              function z(D, ee) {
                return () => {
                  const $e = E, at = [];
                  let wt = ee();
                  for (; wt !== null; )
                    at.push(wt), wt = ee();
                  return at.length < D ? (E = $e, null) : at;
                };
              }
              function I(D) {
                const ee = D.length;
                return () => {
                  let $e = null;
                  return m.slice(E, E + ee) === D && ($e = D, E += ee), $e;
                };
              }
              function Z(D) {
                return () => {
                  const ee = m.slice(E).match(D);
                  return ee === null ? null : (E += ee[0].length, ee[0]);
                };
              }
              const Ee = Z(/^\s+/), X = I("|"), W = I(":"), be = I("\\"), le = Z(/^./), pe = I("$"), j = Z(/^\d+/), Le = I('"'), je = I("'"), ot = Z(w ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Re = Z(w ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), me = k([_e, Z(w ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
              function _e() {
                const D = N([be, le]);
                return D === null ? null : D[1];
              }
              const st = k([_e, Re]), on = k([_e, ot]);
              function pt() {
                const D = N([pe, j]);
                return D === null ? null : ["REPLACE", parseInt(D[1], 10) - 1];
              }
              const ct = (ut = Z(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Ht = function(D) {
                return D.toString();
              }, () => {
                const D = ut();
                return D === null ? null : Ht(D);
              });
              var ut, Ht;
              function A() {
                const D = N([X, z(0, he)]);
                if (D === null)
                  return null;
                const ee = D[1];
                return ee.length > 1 ? ["CONCAT"].concat(ee) : ee[0];
              }
              function Y() {
                const D = N([ct, W, pt]);
                return D === null ? null : [D[0], D[2]];
              }
              function H() {
                const D = N([ct, W, he]);
                return D === null ? null : [D[0], D[2]];
              }
              function Q() {
                const D = N([ct, W]);
                return D === null ? null : [D[0], ""];
              }
              const xe = k([function() {
                const D = N([k([Y, H, Q]), z(0, A)]);
                return D === null ? null : D[0].concat(D[1]);
              }, function() {
                const D = N([ct, z(0, A)]);
                return D === null ? null : [D[0]].concat(D[1]);
              }]), Be = I("{{"), de = I("}}"), ue = I("[["), h = I("]]"), b = I("["), x = I("]");
              function P() {
                const D = N([Be, xe, de]);
                return D === null ? null : D[1];
              }
              const L = k([function() {
                const D = N([z(1, he), X, z(1, re)]);
                return D === null ? null : [["CONCAT"].concat(D[0]), ["CONCAT"].concat(D[2])];
              }, function() {
                const D = N([z(1, he)]);
                return D === null ? null : [["CONCAT"].concat(D[0])];
              }]);
              function U() {
                let D = null;
                const ee = N([ue, L, h]);
                if (ee !== null) {
                  const $e = ee[1];
                  D = ["WIKILINK"].concat($e);
                }
                return D;
              }
              function q() {
                let D = null;
                const ee = N([b, z(1, oe), Ee, z(1, re), x]);
                return ee !== null && (D = ["EXTLINK", ee[1].length === 1 ? ee[1][0] : ["CONCAT"].concat(ee[1]), ["CONCAT"].concat(ee[3])]), D;
              }
              const O = Z(/^[A-Za-z]+/);
              function R() {
                const D = Z(/^[^"]*/), ee = N([Le, D, Le]);
                return ee === null ? null : ee[1];
              }
              function F() {
                const D = Z(/^[^']*/), ee = N([je, D, je]);
                return ee === null ? null : ee[1];
              }
              function te() {
                const D = Z(/^\s*=\s*/), ee = N([Ee, O, D, k([R, F])]);
                return ee === null ? null : [ee[1], ee[3]];
              }
              function J() {
                const D = z(0, te)();
                return Array.prototype.concat.apply(["HTMLATTRIBUTES"], D);
              }
              const oe = k([P, pt, U, q, function() {
                const D = z(1, me)();
                return D === null ? null : D.join("");
              }]), re = k([P, pt, U, q, function() {
                let D = null;
                const ee = E, $e = I("<"), at = Z(/^\/?/), wt = Z(/^\s*>/), qt = N([$e, O, J, at, wt]);
                if (qt === null)
                  return null;
                const bo = E, Ze = qt[1], ht = z(0, re)(), ss = E, ji = N([I("</"), O, wt]);
                if (ji === null)
                  return ["CONCAT", m.slice(ee, bo)].concat(ht);
                const Qu = E, ed = ji[1], Hi = qt[2];
                if (function(Tn, as, aa, ia = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                  if ((Tn = Tn.toLowerCase()) !== (as = as.toLowerCase()) || ia.allowedHtmlElements.indexOf(Tn) === -1)
                    return !1;
                  const td = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                  for (let is = 0, nd = aa.length; is < nd; is += 2) {
                    const ra = aa[is];
                    if (ia.allowedHtmlCommonAttributes.indexOf(ra) === -1 && (ia.allowedHtmlAttributesByElement[Tn] || []).indexOf(ra) === -1 || ra === "style" && aa[is + 1].search(td) !== -1)
                      return !1;
                  }
                  return !0;
                }(Ze, ed, Hi.slice(1)))
                  D = ["HTMLELEMENT", Ze, Hi].concat(ht);
                else {
                  const Tn = (as) => as.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                  D = ["CONCAT", Tn(m.slice(ee, bo))].concat(ht, Tn(m.slice(ss, Qu)));
                }
                return D;
              }, function() {
                const D = z(1, on)();
                return D === null ? null : D.join("");
              }]), he = k([P, pt, function() {
                const D = z(1, st)();
                return D === null ? null : D.join("");
              }]), Oe = function() {
                const D = z(0, re)();
                return D === null ? null : ["CONCAT"].concat(D);
              }();
              if (Oe === null || E !== m.length)
                throw new Error("Parse error at position " + E.toString() + " in input: " + m);
              return Oe;
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
              const E = m.slice(0, w).join("-"), k = this.messageStore.getMessage(c, E);
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
  })(ju);
  var ib = ju.exports;
  const il = (e) => {
    let t, n;
    if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
      throw new Error(`${e.rawName} used with parameter array but without message key`);
    return { msg: t, params: n };
  }, Hu = Symbol("banana-context");
  function Tt() {
    const e = Je(Hu);
    if (!e)
      throw new Error("No i18n provided!!!");
    return e;
  }
  function rb(e = { messages: {}, locale: "en", wikilinks: !0 }) {
    const t = Xn(new ib(e.locale, e));
    return {
      install: (n) => {
        n.provide(Hu, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
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
  const lb = {
    name: "CxHelpPanel",
    components: { MwIcon: ze },
    setup() {
      const e = Tt();
      return { listItems: [
        {
          icon: gh,
          label: e.i18n("cx-sx-dashboard-help-panel-more-info-label"),
          href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation"
        },
        {
          icon: th,
          label: e.i18n("cx-sx-dashboard-help-panel-stats-label"),
          href: mw.util.getUrl("Special:ContentTranslationStats")
        },
        {
          icon: fh,
          label: e.i18n("cx-sx-dashboard-help-panel-feedback-label"),
          href: "https://www.mediawiki.org/wiki/Talk:Content_translation"
        }
      ] };
    }
  }, cb = { class: "cx-help-panel pa-4" }, ub = { class: "cx-help-panel__item-list mt-6 ps-2" }, db = ["href"], gb = ["textContent"];
  function fb(e, t, n, o, s, a) {
    const i = _("mw-icon"), r = Te("i18n");
    return v(), T("div", cb, [
      G(C("h5", null, null, 512), [
        [r, void 0, "cx-sx-dashboard-help-panel-title"]
      ]),
      C("ul", ub, [
        (v(!0), T(Ce, null, Qe(o.listItems, (l, d) => (v(), T("li", {
          key: d,
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
            }, null, 8, gb)
          ], 8, db)
        ]))), 128))
      ])
    ]);
  }
  const pb = /* @__PURE__ */ V(lb, [["render", fb]]), hb = {
    name: "ExperimentalSupportBanner",
    components: { MwCol: Me, MwRow: Ae, MwCard: jt, MwIcon: ze },
    data: () => ({
      mwIconLabFlask: Ic,
      learnMoreUrl: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Section_translation",
      feedbackUrl: "https://www.mediawiki.org/wiki/Talk:Content_translation/Section_translation"
    })
  }, mb = { class: "complementary" }, _b = { class: "complementary mt-4" }, vb = ["href"], yb = { class: "complementary" }, bb = ["href"];
  function Sb(e, t, n, o, s, a) {
    const i = _("mw-icon"), r = _("mw-col"), l = _("mw-row"), d = _("mw-card"), c = Te("i18n");
    return v(), M(d, { class: "experimental-support-banner mb-1" }, {
      default: S(() => [
        p(l, null, {
          default: S(() => [
            p(r, {
              shrink: "",
              class: "experimental-support-banner__icon me-3"
            }, {
              default: S(() => [
                p(i, { icon: e.mwIconLabFlask }, null, 8, ["icon"])
              ], void 0, !0),
              _: 1
            }),
            p(r, null, {
              default: S(() => [
                G(C("h5", null, null, 512), [
                  [c, void 0, "cx-dashboard-experimental-support-banner-title"]
                ]),
                G(C("p", mb, null, 512), [
                  [c, void 0, "cx-dashboard-experimental-support-banner-description"]
                ]),
                C("p", _b, [
                  G(C("a", {
                    target: "_blank",
                    href: e.learnMoreUrl
                  }, null, 8, vb), [
                    [c, void 0, "cx-dashboard-experimental-support-banner-learn-more-anchor"]
                  ])
                ]),
                C("p", yb, [
                  G(C("a", {
                    target: "_blank",
                    href: e.feedbackUrl
                  }, null, 8, bb), [
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
  const wb = /* @__PURE__ */ V(hb, [["render", Sb]]), qu = (e, t, n, o, s) => K(vt, null, function* () {
    const { sourceLanguage: a, targetLanguage: i } = ye(t), r = yield t.dispatch("suggestions/loadSectionSuggestion", {
      sourceLanguage: a.value,
      targetLanguage: i.value,
      sourceTitle: n
    });
    r && (t.dispatch("application/initializeSectionTranslation", r), e.push({
      name: "sx-translation-confirmer",
      query: { previousRoute: o, eventSource: s }
    }));
  }), Cb = () => {
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
  }, Eb = (e, t, n, o) => {
    const s = Cb() || "direct_preselect", { sourceLanguage: a, targetLanguage: i } = ye(t);
    n({
      event_type: "dashboard_open",
      event_source: s,
      content_translation_session_position: 0,
      translation_source_language: a.value,
      translation_target_language: i.value
    }), qu(e, t, o, "dashboard", s);
  }, xb = () => {
    const e = new URLSearchParams(location.search), t = e.get("sx"), n = e.get("page");
    return !t || !n ? null : n;
  }, Ab = (e, t, n) => K(vt, null, function* () {
    yield $u();
    const o = xb();
    if (o) {
      Eb(e, t, n, o);
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
  }), kb = {
    name: "CxDashboard",
    components: {
      CxHelpPanel: pb,
      MwCol: Me,
      CxFavoriteList: sb,
      CxSuggestionList: eb,
      CxTranslationList: By,
      ExperimentalSupportBanner: wb,
      MwBottomNavigation: $p,
      MwButton: De,
      MwButtonGroup: Zo,
      MwRow: Ae
    },
    setup() {
      const e = ne("suggestions"), t = Tt(), n = y(() => [
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
            icon: Qt,
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
      const o = St(), s = () => o.push({ name: "sx-article-search" });
      We(e, () => window.scrollTo(0, 0));
      const a = Se();
      return Ab(o, a, nn()), {
        active: e,
        listSelector: n,
        mwIconAdd: Tc,
        mwIconArticleCheck: nh,
        mwIconLightBulb: Nr,
        mwIconEdit: Qt,
        searchTranslation: s
      };
    }
  }, Tb = { key: 0 };
  function Db(e, t, n, o, s, a) {
    const i = _("experimental-support-banner"), r = _("mw-button"), l = _("mw-row"), d = _("mw-button-group"), c = _("cx-favorite-list"), u = _("cx-suggestion-list"), g = _("cx-translation-list"), f = _("mw-col"), m = _("cx-help-panel"), w = _("mw-bottom-navigation");
    return v(), T("div", null, [
      e.$incompleteVersion ? (v(), M(i, {
        key: 0,
        class: "col-mobile-12 col-tablet-12 col-desktop-7 col-offset-desktop-1 mb-4"
      })) : se("", !0),
      p(l, { class: "ma-0" }, {
        default: S(() => [
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
        default: S(() => [
          p(f, {
            class: "cx-dashboard__main-panel col-offset-desktop-1 px-0",
            cols: "12",
            desktop: "7"
          }, {
            default: S(() => [
              e.$mwui.breakpoint.tabletAndUp ? (v(), T("nav", Tb, [
                p(d, {
                  items: o.listSelector,
                  active: o.active,
                  class: "justify-around",
                  onSelect: t[0] || (t[0] = (E) => o.active = E)
                }, null, 8, ["items", "active"])
              ])) : se("", !0),
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
            tablet: "6",
            desktop: "4"
          }, {
            default: S(() => [
              p(l, { class: "ma-0" }, {
                default: S(() => [
                  p(f, { class: "px-0" }, {
                    default: S(() => [
                      p(m)
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
      e.$mwui.breakpoint.mobile ? (v(), M(w, {
        key: 1,
        active: o.active,
        "onUpdate:active": t[1] || (t[1] = (E) => o.active = E),
        items: o.listSelector
      }, null, 8, ["active", "items"])) : se("", !0)
    ]);
  }
  const Lb = /* @__PURE__ */ V(kb, [["render", Db]]), Pb = {
    name: "DashboardView",
    components: { CxDashboard: Lb }
  }, Nb = { class: "cx-translation-dashboard" };
  function Fb(e, t, n, o, s, a) {
    const i = _("cx-dashboard");
    return v(), T("main", Nb, [
      p(i, { class: "mb-4 pb-12" })
    ]);
  }
  const rl = /* @__PURE__ */ V(Pb, [["render", Fb]]), Mb = (e) => {
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
        return Ve.getPageUrl(
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
  }, Ob = (e, t) => {
    const n = new URLSearchParams(location.search), o = ne(n.get("section")), { currentSourceSection: s, currentSectionSuggestion: a } = ye(t), i = y(
      () => {
        var d;
        return !!((d = a.value) != null && d.translationExists);
      }
    ), r = () => {
      o.value = null, n.delete("section"), yo(Object.fromEntries(n));
    };
    return {
      clearPreFilledSection: r,
      onSectionSelectorClick: () => K(vt, null, function* () {
        o.value ? (yield t.dispatch(
          "application/selectPageSectionByTitle",
          o.value
        ), s.value ? e.push({
          name: "sx-content-comparator",
          query: { force: !0 }
        }) : r()) : i.value ? e.push({ name: "sx-section-selector" }) : (yield t.dispatch("application/selectPageSectionByIndex", 0), e.push({ name: "sx-quick-tutorial", query: { force: !0 } })), Iu(a.value);
      }),
      preFilledSectionTitle: o
    };
  }, Bb = {
    name: "SxTranslationConfirmerActionPanel",
    components: {
      MwButton: De,
      MwRow: Ae,
      MwCol: Me,
      MwIcon: ze
    },
    setup() {
      const e = St(), t = Se(), n = Je("colors"), { targetLanguageAutonym: o, currentSectionSuggestion: s } = ye(t), {
        clearPreFilledSection: a,
        onSectionSelectorClick: i,
        preFilledSectionTitle: r
      } = Ob(e, t), {
        actionInformationMessageArgs: l,
        getActionButtonLabel: d,
        isProgressiveButton: c,
        targetArticlePath: u,
        translationExists: g
      } = Mb(s), f = Tt(), m = y(
        () => f.i18n(d(!!r.value))
      ), w = y(
        () => f.i18n(...l.value)
      ), E = () => {
        e.push({ name: "sx-section-selector" }), Iu(s.value);
      };
      return lt(() => {
        const k = r.value;
        k && !s.value.hasSectionTitle(k) && a();
      }), {
        actionButtonLabel: m,
        actionInformationMessage: w,
        isProgressiveButton: c,
        mwIconLinkExternal: Qo,
        onMoreSectionsClick: E,
        onSectionSelectorClick: i,
        preFilledSectionTitle: r,
        targetArticlePath: u,
        targetLanguageAutonym: o,
        translationExists: g,
        colors: n
      };
    }
  }, Ib = { class: "sx-translation-confirmer-body pb-4" }, $b = {
    key: 0,
    class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
  }, Ub = ["textContent"], Rb = {
    key: 1,
    class: "mt-1 px-4 pt-4"
  }, Vb = ["href"], zb = ["textContent"];
  function jb(e, t, n, o, s, a) {
    const i = _("mw-col"), r = _("mw-icon"), l = _("mw-row"), d = _("mw-button"), c = Te("i18n");
    return v(), T("section", Ib, [
      o.preFilledSectionTitle ? (v(), T("section", $b, [
        G(C("h6", null, null, 512), [
          [c, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
        ]),
        C("h5", {
          class: "ma-0",
          textContent: ae(o.preFilledSectionTitle)
        }, null, 8, Ub)
      ])) : o.translationExists ? (v(), T("section", Rb, [
        p(l, {
          class: "sx-translation-confirmer__translation-status ma-0 pb-2",
          justify: "between"
        }, {
          default: S(() => [
            G(p(i, {
              tag: "h5",
              class: "ma-0 pe-2"
            }, null, 512), [
              [c, [o.targetLanguageAutonym], "cx-sx-existing-translation-status"]
            ]),
            p(i, { shrink: "" }, {
              default: S(() => [
                C("a", {
                  href: o.targetArticlePath,
                  target: "_blank"
                }, [
                  p(r, {
                    icon: o.mwIconLinkExternal,
                    size: "16",
                    "icon-color": o.colors.base30
                  }, null, 8, ["icon", "icon-color"])
                ], 8, Vb)
              ], void 0, !0),
              _: 1
            })
          ], void 0),
          _: 1
        }),
        p(l, { class: "ma-0" }, {
          default: S(() => [
            p(i, null, {
              default: S(() => [
                C("span", {
                  textContent: ae(o.actionInformationMessage)
                }, null, 8, zb)
              ], void 0, !0),
              _: 1
            })
          ], void 0),
          _: 1
        })
      ])) : se("", !0),
      p(l, {
        class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
        justify: o.preFilledSectionTitle ? "between" : "center"
      }, {
        default: S(() => [
          o.preFilledSectionTitle ? (v(), M(i, {
            key: 0,
            shrink: ""
          }, {
            default: S(() => [
              G(p(d, {
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
          })) : se("", !0),
          p(i, { shrink: "" }, {
            default: S(() => [
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
  const Hb = /* @__PURE__ */ V(Bb, [["render", jb]]), qb = {
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
      ), l = wv(n);
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
  function Gb(e, t, n, o, s, a) {
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
  const Gu = /* @__PURE__ */ V(qb, [["render", Gb]]), Kb = {
    name: "SxTranslationConfirmerArticleInformation",
    components: {
      MwRow: Ae,
      MwCol: Me,
      MwIcon: ze,
      MwButton: De
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
          new zo({
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
          return Ve.getPageUrl(
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
            (m, w) => m + w,
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
  }, Wb = ["textContent"], Xb = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, Yb = ["textContent"];
  function Jb(e, t, n, o, s, a) {
    const i = _("mw-icon"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row"), c = Te("i18n");
    return v(), M(d, {
      class: "sx-translation-confirmer__article-information ma-0 pa-4",
      align: "stretch",
      justify: "start"
    }, {
      default: S(() => [
        p(r, null, {
          default: S(() => [
            p(d, {
              justify: "between",
              class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
            }, {
              default: S(() => [
                p(r, {
                  class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                  tag: "a",
                  href: o.sourceArticlePath,
                  target: "_blank"
                }, {
                  default: S(() => [
                    C("h5", {
                      class: "ma-0 me-1",
                      textContent: ae(o.sourceTitle)
                    }, null, 8, Wb),
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
                  default: S(() => [
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
            C("p", Xb, [
              p(i, {
                icon: o.mwIconLanguage,
                size: "16",
                class: "me-1"
              }, null, 8, ["icon"]),
              C("span", {
                class: "pe-3",
                textContent: ae(o.langLinksCount)
              }, null, 8, Yb),
              G(C("span", null, null, 512), [
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
  const Zb = /* @__PURE__ */ V(Kb, [["render", Jb]]), Qb = {
    name: "SxTranslationConfirmer",
    components: {
      MwIcon: ze,
      SxTranslationConfirmerArticleInformation: Zb,
      MwRow: Ae,
      MwCol: Me,
      MwButton: De,
      SxArticleLanguageSelector: Gu,
      SxTranslationConfirmerActionPanel: Hb
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
      const r = St();
      return {
        articleImageSource: a,
        mwIconArticle: xi,
        mwIconClose: Ft,
        onClose: () => {
          t.dispatch("application/clearCurrentSectionSuggestion"), yo(null), r.push({ name: e.previousRoute });
        }
      };
    }
  }, eS = { class: "sx-translation-confirmer" }, tS = { class: "mb-0" }, nS = { class: "sx-translation-confirmer__article-image flex justify-center" }, oS = ["src"], sS = { class: "ma-3" };
  function aS(e, t, n, o, s, a) {
    const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = _("mw-icon"), c = _("sx-translation-confirmer-article-information"), u = _("sx-article-language-selector"), g = _("sx-translation-confirmer-action-panel"), f = Te("i18n"), m = Te("i18n-html");
    return v(), T("section", eS, [
      p(l, {
        class: "sx-translation-confirmer__header ma-0 py-3",
        align: "stretch",
        justify: "start"
      }, {
        default: S(() => [
          p(i, {
            grow: "",
            class: "px-4",
            align: "center"
          }, {
            default: S(() => [
              G(C("h5", tS, null, 512), [
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
            default: S(() => [
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
      C("div", nS, [
        o.articleImageSource ? (v(), T("img", {
          key: 0,
          src: o.articleImageSource
        }, null, 8, oS)) : (v(), M(d, {
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
        default: S(() => [
          C("p", sS, [
            G(C("small", null, null, 512), [
              [m, void 0, "cx-license-agreement"]
            ])
          ])
        ], void 0),
        _: 1
      })
    ]);
  }
  const iS = /* @__PURE__ */ V(Qb, [["render", aS]]), rS = {
    name: "SxTranslationConfirmerView",
    components: {
      SxTranslationConfirmer: iS
    },
    computed: {
      classes() {
        return {
          fullscreen: this.$mwui.breakpoint.tabletAndDown
        };
      }
    }
  };
  function lS(e, t, n, o, s, a) {
    const i = _("sx-translation-confirmer");
    return v(), T("main", {
      class: ge(["sx-translation-confirmer-view", a.classes])
    }, [
      p(i)
    ], 2);
  }
  const cS = /* @__PURE__ */ V(rS, [["render", lS]]), uS = {
    name: "SxSectionSelectorViewArticleItem",
    components: {
      MwRow: Ae,
      MwButton: De
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
  function dS(e, t, n, o, s, a) {
    const i = _("mw-button"), r = _("mw-row");
    return v(), M(r, {
      tag: "li",
      class: "ma-0"
    }, {
      default: S(() => [
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
  const gS = /* @__PURE__ */ V(uS, [["render", dS]]), fS = {
    name: "SxSectionSelectorHeader",
    components: {
      MwRow: Ae,
      MwCol: Me,
      MwButton: De
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
  }, pS = { class: "sx-section-selector__header pa-4" }, hS = { class: "sx-section-selector__header-text ma-0" }, mS = ["textContent"], _S = { class: "pt-0 ma-0" }, vS = { class: "ma-0" };
  function yS(e, t, n, o, s, a) {
    const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = Te("i18n");
    return v(), T("div", pS, [
      p(l, { class: "ma-0 pb-3" }, {
        default: S(() => [
          p(i, null, {
            default: S(() => [
              G(C("h6", hS, null, 512), [
                [d, void 0, "cx-sx-section-selector-title"]
              ]),
              C("h2", {
                class: "sx-section-selector__title ma-0 py-0",
                textContent: ae(n.suggestion.sourceTitle)
              }, null, 8, mS)
            ], void 0, !0),
            _: 1
          }),
          p(i, {
            shrink: "",
            class: "justify-end"
          }, {
            default: S(() => [
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
      G(C("h4", _S, null, 512), [
        [d, void 0, "cx-sx-section-selector-subtitle"]
      ]),
      G(C("p", vS, null, 512), [
        [d, void 0, "cx-sx-section-selector-desc"]
      ])
    ]);
  }
  const bS = /* @__PURE__ */ V(fS, [["render", yS]]), SS = {
    name: "SxSectionSelectorSectionList",
    components: {
      MwRow: Ae,
      MwButton: De,
      MwIcon: ze
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
    data: () => ({ mwIconArrowForward: En })
  }, wS = { class: "sx-section-selector__sections-list ma-0 pa-0" };
  function CS(e, t, n, o, s, a) {
    const i = _("mw-icon"), r = _("mw-button"), l = _("mw-row");
    return v(), T("ul", wS, [
      (v(!0), T(Ce, null, Qe(n.sections, (d) => (v(), M(l, {
        key: d.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: S(() => [
          p(r, {
            class: "col justify-between py-3 px-4",
            label: d.sourceTitle,
            type: "text",
            outlined: !1,
            onClick: (c) => e.$emit("select-section", d.sourceTitle)
          }, {
            default: S(() => [
              Ke(e.$slots, "default", {
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
  const Ku = /* @__PURE__ */ V(SS, [["render", CS]]), ES = `<svg
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
</svg>`, xS = {
    name: "SxSectionSelectorSectionListMissing",
    components: {
      SxSectionSelectorSectionList: Ku,
      MwRow: Ae,
      MwCol: Me,
      MwButton: De
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
        () => Ne.getAutonym(e.suggestion.targetLanguage)
      ), n = y(
        () => Object.keys(e.suggestion.missingSections).length === 0
      );
      return {
        sadRobotSVG: ES,
        getAutonym: Ne.getAutonym,
        getDir: Ne.getDir,
        targetLanguageAutonym: t,
        emptySections: n
      };
    }
  }, AS = { class: "sx-section-selector__missing-sections py-2" }, kS = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, TS = ["lang", "dir", "textContent"];
  function DS(e, t, n, o, s, a) {
    const i = _("sx-section-selector-section-list"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row"), c = Te("i18n");
    return v(), T("section", AS, [
      G(C("h4", kS, null, 512), [
        [c, [
          o.targetLanguageAutonym
        ], "cx-sx-section-selector-missing-sections-title"]
      ]),
      o.emptySections ? se("", !0) : (v(), M(i, {
        key: 0,
        sections: n.suggestion.orderedMissingSections,
        onSelectSection: t[0] || (t[0] = (u) => e.$emit("select-section", u))
      }, {
        default: S(({ sourceSection: u }) => [
          C("h5", {
            class: "ma-0",
            lang: n.suggestion.sourceLanguage,
            dir: o.getDir(n.suggestion.sourceLanguage),
            textContent: ae(u)
          }, null, 8, TS)
        ]),
        _: 1
      }, 8, ["sections"])),
      o.emptySections ? (v(), M(d, {
        key: 1,
        class: "sx-section-selector__empty-missing-sections px-4 my-0"
      }, {
        default: S(() => [
          p(r, {
            class: "py-6 justify-center",
            innerHTML: o.sadRobotSVG
          }, null, 8, ["innerHTML"]),
          p(r, {
            cols: "12",
            class: "sx-section-selector__empty-missing-sections-details pa-0"
          }, {
            default: S(() => [
              G(C("h6", null, null, 512), [
                [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
              ])
            ], void 0, !0),
            _: 1
          }),
          p(r, {
            cols: "12",
            class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
          }, {
            default: S(() => [
              G(C("p", null, null, 512), [
                [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
              ])
            ], void 0, !0),
            _: 1
          }),
          p(r, {
            cols: "12",
            class: "pa-0 mb-2"
          }, {
            default: S(() => [
              G(p(l, {
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
      })) : se("", !0)
    ]);
  }
  const LS = /* @__PURE__ */ V(xS, [["render", DS]]), PS = {
    name: "SxSectionSelectorSectionListPresent",
    components: {
      SxSectionSelectorSectionList: Ku
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
        () => Ne.getAutonym(e.suggestion.targetLanguage)
      );
      return { mwIconArrowForward: En, getAutonym: Ne.getAutonym, getDir: Ne.getDir, targetLanguageAutonym: t };
    }
  }, NS = { class: "sx-section-selector__present-sections py-2" }, FS = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, MS = { class: "sx-section-selector__present-section-button-content" }, OS = ["lang", "dir", "textContent"], BS = ["lang", "dir", "textContent"];
  function IS(e, t, n, o, s, a) {
    const i = _("sx-section-selector-section-list"), r = Te("i18n");
    return v(), T("section", NS, [
      G(C("h4", FS, null, 512), [
        [r, [
          o.targetLanguageAutonym
        ], "cx-sx-section-selector-present-sections-title"]
      ]),
      p(i, {
        sections: n.suggestion.orderedPresentSections,
        onSelectSection: t[0] || (t[0] = (l) => e.$emit("select-section", l))
      }, {
        default: S(({ sourceSection: l, targetSection: d }) => [
          C("div", MS, [
            C("h5", {
              class: "sx-section-selector__present-section-button-source",
              lang: n.suggestion.sourceLanguage,
              dir: o.getDir(n.suggestion.sourceLanguage),
              textContent: ae(l)
            }, null, 8, OS),
            C("h6", {
              class: "sx-section-selector__present-section-button-target",
              lang: n.suggestion.targetLanguage,
              dir: o.getDir(n.suggestion.targetLanguage),
              textContent: ae(d)
            }, null, 8, BS)
          ])
        ]),
        _: 1
      }, 8, ["sections"])
    ]);
  }
  const $S = /* @__PURE__ */ V(PS, [["render", IS]]), US = {
    name: "SxSectionSelector",
    components: {
      SxSectionSelectorSectionListPresent: $S,
      SxSectionSelectorSectionListMissing: LS,
      SxSectionSelectorHeader: bS,
      SxSectionSelectorViewArticleItem: gS,
      MwRow: Ae,
      MwCol: Me,
      MwIcon: ze,
      SxArticleLanguageSelector: Gu
    },
    setup() {
      const e = Se(), {
        currentSectionSuggestion: t,
        sourceLanguageAutonym: n,
        targetLanguageAutonym: o
      } = ye(e), s = y(
        () => Ve.getPageUrl(
          t.value.sourceLanguage,
          t.value.sourceTitle
        )
      ), a = y(
        () => Ve.getPageUrl(
          t.value.targetLanguage,
          t.value.targetTitle
        )
      ), i = y(() => [
        { path: s.value, autonym: n.value },
        { path: a.value, autonym: o.value }
      ]), r = St();
      return {
        goToDashboard: () => {
          yo(null), r.push({ name: "dashboard" });
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
  }, RS = { class: "sx-section-selector" }, VS = { class: "sx-section-selector__body" }, zS = { class: "py-2" }, jS = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, HS = { class: "ma-0 pa-0" }, qS = { class: "sx-section-selector__additional-consideration-title" }, GS = { href: "#" }, KS = { class: "sx-section-selector__additional-consideration-title" }, WS = { href: "#" };
  function XS(e, t, n, o, s, a) {
    const i = _("sx-section-selector-header"), r = _("sx-article-language-selector"), l = _("sx-section-selector-section-list-missing"), d = _("sx-section-selector-section-list-present"), c = _("sx-section-selector-view-article-item"), u = _("mw-icon"), g = _("mw-col"), f = _("mw-row"), m = Te("i18n");
    return v(), T("section", RS, [
      p(i, {
        suggestion: o.suggestion,
        onClose: o.goToDashboard
      }, null, 8, ["suggestion", "onClose"]),
      C("section", VS, [
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
        C("section", zS, [
          G(C("h4", jS, null, 512), [
            [m, [
              o.targetLanguageAutonym
            ], "cx-sx-section-selector-more-details-title"]
          ]),
          C("ul", HS, [
            (v(!0), T(Ce, null, Qe(o.viewArticleItems, (w, E) => (v(), M(c, {
              key: `view-article-item-${E}`,
              path: w.path,
              autonym: w.autonym
            }, null, 8, ["path", "autonym"]))), 128))
          ])
        ]),
        p(f, { class: "sx-section-selector__additional-considerations ma-0" }, {
          default: S(() => [
            p(g, {
              cols: "12",
              tablet: "6",
              class: "px-4 pt-5 pb-4"
            }, {
              default: S(() => [
                C("h6", qS, [
                  p(u, {
                    icon: o.mwIconRobot,
                    class: "pe-2"
                  }, null, 8, ["icon"]),
                  Ps(" " + ae(e.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                ]),
                G(C("p", null, null, 512), [
                  [m, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                ]),
                G(C("a", GS, null, 512), [
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
              default: S(() => [
                C("h6", KS, [
                  p(u, {
                    icon: o.mwIconLabFlask,
                    class: "pe-2"
                  }, null, 8, ["icon"]),
                  Ps(" " + ae(e.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                ]),
                G(C("p", null, null, 512), [
                  [m, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                ]),
                G(C("a", WS, null, 512), [
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
  const YS = /* @__PURE__ */ V(US, [["render", XS]]), JS = {
    name: "SxSectionSelectorView",
    components: {
      SxSectionSelector: YS
    },
    computed: {
      classes() {
        return {
          fullscreen: this.$mwui.breakpoint.tabletAndDown
        };
      }
    }
  };
  function ZS(e, t, n, o, s, a) {
    const i = _("sx-section-selector");
    return v(), T("main", {
      class: ge(["sx-section-selector-view", a.classes])
    }, [
      p(i)
    ], 2);
  }
  const QS = /* @__PURE__ */ V(JS, [["render", ZS]]), ew = (e) => {
    const { sourceLanguageAutonym: t, targetLanguageAutonym: n } = ye(
      Se()
    ), o = Tt();
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
  }, tw = {
    name: "SxContentComparatorSourceVsTargetSelector",
    components: { MwButtonGroup: Zo },
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
      const n = (s) => t("update:selection", s), o = ew(e);
      return We(
        () => e.isMappedSection,
        () => {
          o.value.map((s) => s.value).includes(e.selection) || n(o.value[0].value);
        }
      ), {
        listSelector: o,
        updateSelection: n
      };
    }
  }, nw = { class: "sx-content-comparator__source-target-selector" };
  function ow(e, t, n, o, s, a) {
    const i = _("mw-button-group");
    return v(), T("div", nw, [
      p(i, {
        items: o.listSelector,
        active: n.selection,
        onSelect: o.updateSelection
      }, null, 8, ["items", "active", "onSelect"])
    ]);
  }
  const sw = /* @__PURE__ */ V(tw, [["render", ow]]), sa = (e) => {
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
  }, aw = {
    name: "SxContentComparatorContentHeader",
    components: {
      SxContentComparatorSourceVsTargetSelector: sw,
      MwRow: Ae,
      MwCol: Me,
      MwButton: De
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
      ), r = (f) => t.emit("update:sourceVsTargetSelection", f), { activeSectionTargetTitle: l, targetSectionAnchor: d } = sa(n), c = y(() => {
        switch (e.sourceVsTargetSelection) {
          case "source_section":
            return {
              title: a.value,
              path: `${Ve.getPageUrl(
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
      }), u = y(
        () => Ve.getPageUrl(
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
        mwIconEdit: Qt,
        updateSelection: r
      };
    }
  }, iw = ["lang", "dir", "textContent"];
  function rw(e, t, n, o, s, a) {
    const i = _("sx-content-comparator-source-vs-target-selector"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row");
    return v(), M(d, {
      ref: "contentHeader",
      class: ge(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.isSticky }]),
      direction: "column",
      align: "stretch",
      reverse: o.isSticky
    }, {
      default: S(() => [
        p(i, {
          "is-mapped-section": n.isMappedSection,
          selection: n.sourceVsTargetSelection,
          "onUpdate:selection": o.updateSelection
        }, null, 8, ["is-mapped-section", "selection", "onUpdate:selection"]),
        p(d, {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: S(() => [
            p(r, null, {
              default: S(() => [
                C("h3", {
                  lang: o.activeContent.lang,
                  dir: o.activeContent.dir,
                  class: "ma-0 pa-0",
                  textContent: ae(o.activeContent.title)
                }, null, 8, iw)
              ], void 0, !0),
              _: 1
            }),
            p(r, { shrink: "" }, {
              default: S(() => [
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
  const lw = /* @__PURE__ */ V(aw, [["render", rw]]), cw = {
    name: "SxContentComparatorHeaderNavigation",
    components: {
      MwCol: Me,
      MwButton: De
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
        mwIconPrevious: Zs,
        mwIconArrowForward: En
      };
    }
  };
  function uw(e, t, n, o, s, a) {
    const i = _("mw-button"), r = _("mw-col");
    return v(), M(r, {
      class: "justify-end",
      align: "center"
    }, {
      default: S(() => [
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
  const dw = /* @__PURE__ */ V(cw, [["render", uw]]), gw = {
    name: "SxContentComparatorHeaderMappedSection",
    components: {
      MwRow: Ae,
      MwCol: Me,
      MwButton: De
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
      mwIconTrash: Lc,
      mwIconUndo: sh
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
  }, fw = { class: "sx-content-comparator-header__mapped-section" }, pw = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, hw = { key: 0 }, _w = {
    key: 0,
    class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
  }, vw = {
    key: 1,
    class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
  };
  function yw(e, t, n, o, s, a) {
    const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = Te("i18n");
    return v(), T("div", fw, [
      p(l, { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
        default: S(() => [
          p(i, { grow: "" }, {
            default: S(() => [
              C("h6", pw, [
                Ps(ae(a.mappedSectionHeaderTitle) + " ", 1),
                a.isDiscardedSection ? G((v(), T("span", hw, null, 512)), [
                  [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
                ]) : se("", !0)
              ]),
              C("h6", {
                class: ge(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                  "sx-content-comparator-header__mapped-section-target-title--discarded": a.isDiscardedSection
                }])
              }, ae(n.targetSectionTitle), 3)
            ], void 0, !0),
            _: 1
          }),
          p(i, { shrink: "" }, {
            default: S(() => [
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
      a.isDiscardedSection ? G((v(), T("p", vw, null, 512)), [
        [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
      ]) : G((v(), T("p", _w, null, 512)), [
        [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
      ])
    ]);
  }
  const bw = /* @__PURE__ */ V(gw, [["render", yw]]), Sw = {
    name: "SxContentComparatorHeader",
    components: {
      SxContentComparatorHeaderMappedSection: bw,
      SxContentComparatorHeaderNavigation: dw,
      MwButton: De,
      MwCol: Me,
      MwRow: Ae,
      MwIcon: ze
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
      ), { activeSectionTargetTitle: a, sourceSectionTitle: i } = sa(e), r = y(() => {
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
        mwIconArrowPrevious: Ci,
        mwIconEdit: Qt,
        mwIconEye: Ga,
        sectionSourceTitles: l,
        sourceSectionContent: r,
        sourceSectionTitle: i,
        suggestion: t,
        getDir: Ne.getDir
      };
    }
  }, ww = { class: "sx-content-comparator__header pa-4" }, Cw = ["lang", "dir"], Ew = ["lang", "dir"], xw = /* @__PURE__ */ C("br", null, null, -1);
  function Aw(e, t, n, o, s, a) {
    const i = _("mw-button"), r = _("mw-col"), l = _("sx-content-comparator-header-navigation"), d = _("mw-row"), c = _("mw-icon"), u = _("sx-content-comparator-header-mapped-section"), g = Te("i18n");
    return v(), T("div", ww, [
      p(i, {
        class: "py-2 pa-0",
        icon: o.mwIconArrowPrevious,
        label: e.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
        type: "text",
        outlined: !1,
        onClick: t[0] || (t[0] = (f) => e.$emit("close"))
      }, null, 8, ["icon", "label"]),
      p(d, { class: "my-1 py-2 mx-0" }, {
        default: S(() => [
          p(r, { grow: "" }, {
            default: S(() => [
              C("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: o.suggestion.sourceLanguage,
                dir: o.getDir(o.suggestion.sourceLanguage)
              }, ae(o.suggestion.sourceTitle), 9, Cw),
              C("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: o.suggestion.sourceLanguage,
                dir: o.getDir(o.suggestion.sourceLanguage)
              }, ae(o.sourceSectionTitle), 9, Ew)
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
            default: S(() => [
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
        default: S(() => [
          p(r, {
            shrink: "",
            class: "pe-2"
          }, {
            default: S(() => [
              p(c, { icon: o.mwIconEye }, null, 8, ["icon"])
            ], void 0, !0),
            _: 1
          }),
          p(r, { class: "ma-0" }, {
            default: S(() => [
              G(C("strong", null, null, 512), [
                [g, void 0, "cx-sx-content-comparator-review-contents-title"]
              ]),
              xw,
              G(C("span", null, null, 512), [
                [g, void 0, "cx-sx-content-comparator-review-contents-rest"]
              ])
            ], void 0, !0),
            _: 1
          })
        ], void 0),
        _: 1
      })) : se("", !0),
      o.isCurrentSectionPresent ? (v(), M(u, {
        key: 1,
        suggestion: o.suggestion,
        "target-section-title": o.activeSectionTargetTitle,
        "discarded-sections": n.discardedSections,
        "onUpdate:discardedSections": t[2] || (t[2] = (f) => e.$emit("update:discardedSections", f))
      }, null, 8, ["suggestion", "target-section-title", "discarded-sections"])) : se("", !0)
    ]);
  }
  const kw = /* @__PURE__ */ V(Sw, [["render", Aw]]), Tw = {
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
  }, Dw = { class: "sx-content-comparator__new-section-placeholder--present mt-4 py-4 px-7" }, Lw = ["innerHTML"], Pw = { key: 0 };
  function Nw(e, t, n, o, s, a) {
    const i = Te("i18n");
    return v(), T("section", Dw, [
      C("h5", { innerHTML: o.placeholderTitle }, null, 8, Lw),
      n.isMappedSection ? G((v(), T("p", Pw, null, 512)), [
        [i, void 0, "cx-sx-content-comparator-present-section-placeholder-subtitle"]
      ]) : se("", !0)
    ]);
  }
  const Wu = /* @__PURE__ */ V(Tw, [["render", Nw]]), Fw = (e, t) => {
    const { isCurrentSectionMapped: n, targetPage: o } = sa(e), { currentSectionSuggestion: s } = ye(e), a = () => Ac(
      Wu,
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
  }, Mw = {
    name: "SxContentComparator",
    components: {
      SxContentComparatorNewSectionPlaceholder: Wu,
      SxContentComparatorHeader: kw,
      SxContentComparatorContentHeader: lw,
      MwSpinner: Jn
    },
    setup() {
      const e = Se(), t = St(), n = ne("source_section"), o = () => t.push({ name: "sx-section-selector" }), s = () => {
        if (e.getters["translator/hasSectionTranslations"]) {
          t.push({ name: "sx-sentence-selector" });
          return;
        }
        t.push({ name: "sx-quick-tutorial" });
      }, a = Tt(), i = a.i18n.bind(a), {
        activeSectionTargetTitle: r,
        discardedSections: l,
        isCurrentSectionMapped: d,
        sourceSectionContent: c,
        targetSectionContent: u
      } = sa(e), g = Fw(e, i), {
        currentSectionSuggestion: f,
        sourceLanguage: m,
        targetLanguage: w
      } = ye(e), E = y(() => f.value.targetTitle);
      return We(
        E,
        () => e.dispatch("mediawiki/fetchPageContent", {
          sourceLanguage: w.value,
          targetLanguage: m.value,
          sourceTitle: E.value
        }),
        { immediate: !0 }
      ), {
        i18n: i,
        getDir: Ne.getDir,
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
  }, Ow = { class: "sx-content-comparator" }, Bw = { class: "sx-content-comparator__source-content" }, Iw = ["lang", "dir", "innerHTML"], $w = ["lang", "dir", "innerHTML"], Uw = ["innerHTML"];
  function Rw(e, t, n, o, s, a) {
    const i = _("sx-content-comparator-header"), r = _("sx-content-comparator-content-header"), l = _("mw-spinner"), d = _("sx-content-comparator-new-section-placeholder");
    return v(), T("section", Ow, [
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
      C("section", Bw, [
        o.sourceVsTargetSelection === "source_section" ? (v(), T(Ce, { key: 0 }, [
          o.sourceSectionContent ? se("", !0) : (v(), M(l, { key: 0 })),
          C("section", {
            lang: o.sourceLanguage,
            dir: o.getDir(o.sourceLanguage),
            class: "pt-2 px-4",
            innerHTML: o.sourceSectionContent
          }, null, 8, Iw)
        ], 64)) : o.sourceVsTargetSelection === "target_article" ? (v(), T(Ce, { key: 1 }, [
          o.targetPageContent ? se("", !0) : (v(), M(l, { key: 0 })),
          C("article", {
            lang: o.targetLanguage,
            dir: o.getDir(o.targetLanguage),
            class: "px-4",
            innerHTML: o.targetPageContent
          }, null, 8, $w)
        ], 64)) : (v(), T(Ce, { key: 2 }, [
          C("section", {
            class: "pa-4",
            innerHTML: o.targetSectionContent
          }, null, 8, Uw),
          p(d, {
            "is-mapped-section": o.isCurrentSectionMapped,
            i18n: o.i18n
          }, null, 8, ["is-mapped-section", "i18n"])
        ], 64))
      ])
    ]);
  }
  const Vw = /* @__PURE__ */ V(Mw, [["render", Rw]]), zw = {
    name: "SxContentComparatorView",
    components: {
      SxContentComparator: Vw
    },
    computed: {
      classes() {
        return {
          fullscreen: this.$mwui.breakpoint.tabletAndDown
        };
      }
    }
  };
  function jw(e, t, n, o, s, a) {
    const i = _("sx-content-comparator");
    return v(), T("main", {
      class: ge(["sx-content-comparator-view", a.classes])
    }, [
      p(i)
    ], 2);
  }
  const Hw = /* @__PURE__ */ V(zw, [["render", jw]]), qw = {
    name: "SxTranslationSelector",
    components: { MwCard: jt, MwButton: De, MwDialog: Yn },
    props: {
      active: {
        type: Boolean,
        required: !0
      }
    },
    emits: ["update:active"],
    setup(e, t) {
      const n = qe.EMPTY_TEXT_PROVIDER_KEY, o = qe.ORIGINAL_TEXT_PROVIDER_KEY, s = Se(), {
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
        const E = [o, n];
        return c.value.filter(
          (k) => !E.includes(k)
        );
      }), g = y(
        () => l.value ? r.value.proposedTitleTranslations : d.value.proposedTranslations
      ), f = (E) => {
        s.dispatch("application/updateMTProvider", E), w();
      }, m = qe.getMTProviderLabel, w = () => t.emit("update:active", !1);
      return {
        apiMtProviders: u,
        close: w,
        emptyTextProviderKey: n,
        getDir: Ne.getDir,
        getMTProviderLabel: m,
        mwIconClose: Ft,
        originalTextProviderKey: o,
        proposedTranslations: g,
        selectProvider: f,
        sourceLanguage: a
      };
    }
  }, Gw = { class: "mw-ui-dialog__header pa-4" }, Kw = { class: "row ma-0 py-2" }, Ww = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, Xw = { class: "mb-0" }, Yw = { class: "col shrink justify-center" }, Jw = { class: "pb-2 mb-0" }, Zw = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, Qw = ["dir", "lang", "innerHTML"], eC = ["textContent"], tC = ["innerHTML"], nC = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, oC = /* @__PURE__ */ C("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1);
  function sC(e, t, n, o, s, a) {
    const i = _("mw-button"), r = _("mw-card"), l = _("mw-dialog"), d = Te("i18n");
    return n.active ? (v(), M(l, {
      key: 0,
      class: "sx-sentence-selector__translation-options",
      fullscreen: ""
    }, {
      header: S(() => [
        C("div", Gw, [
          C("div", Kw, [
            C("div", Ww, [
              G(C("h4", Xw, null, 512), [
                [d, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
              ])
            ]),
            C("div", Yw, [
              p(i, {
                type: "icon",
                icon: o.mwIconClose,
                class: "pa-0",
                onClick: o.close
              }, null, 8, ["icon", "onClick"])
            ])
          ]),
          G(C("h6", Jw, null, 512), [
            [d, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
          ])
        ])
      ]),
      default: S(() => [
        p(r, {
          class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
          role: "button",
          onClick: t[0] || (t[0] = (c) => o.selectProvider(o.originalTextProviderKey))
        }, {
          header: S(() => [
            G(C("h5", Zw, null, 512), [
              [d, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
            ])
          ]),
          default: S(() => [
            C("p", {
              dir: o.getDir(o.sourceLanguage),
              lang: o.sourceLanguage,
              innerHTML: o.proposedTranslations[o.originalTextProviderKey]
            }, null, 8, Qw)
          ], void 0, !0),
          _: 1
        }),
        (v(!0), T(Ce, null, Qe(o.apiMtProviders, (c) => (v(), M(r, {
          key: c,
          class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
          role: "button",
          onClick: (u) => o.selectProvider(c)
        }, {
          header: S(() => [
            C("h5", {
              class: "sx-sentence-selector__translation-options-card-title mb-4",
              textContent: ae(o.getMTProviderLabel(c))
            }, null, 8, eC)
          ]),
          default: S(() => [
            C("p", {
              innerHTML: o.proposedTranslations[c]
            }, null, 8, tC)
          ], void 0, !0),
          _: 2
        }, 1032, ["onClick"]))), 128)),
        p(r, {
          class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
          role: "button",
          onClick: t[1] || (t[1] = (c) => o.selectProvider(o.emptyTextProviderKey))
        }, {
          header: S(() => [
            G(C("h5", nC, null, 512), [
              [d, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
            ])
          ]),
          default: S(() => [
            oC
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    })) : se("", !0);
  }
  const aC = /* @__PURE__ */ V(qw, [["render", sC]]), iC = {
    name: "SxSentenceSelectorContentHeader",
    components: { MwIcon: ze, MwCol: Me },
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
        () => Ve.getPageUrl(a.value, i.value)
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
  }, rC = ["href"], lC = ["textContent"], cC = ["innerHTML"];
  function uC(e, t, n, o, s, a) {
    const i = _("mw-icon"), r = _("mw-col");
    return v(), M(r, {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: S(() => [
        C("a", {
          href: o.sourceArticlePath,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          C("strong", {
            textContent: ae(o.sourceArticleTitle)
          }, null, 8, lC),
          p(i, {
            icon: o.mwIconLinkExternal,
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, rC),
        C("h2", {
          class: ge(["pa-0 ma-0", o.titleClasses]),
          onClick: t[0] || (t[0] = (...l) => o.selectSectionTitle && o.selectSectionTitle(...l)),
          innerHTML: o.sourceSectionTitle
        }, null, 10, cC)
      ], void 0),
      _: 1
    });
  }
  const dC = /* @__PURE__ */ V(iC, [["render", uC]]), gC = {
    name: "ProposedTranslationActionButtons",
    components: {
      MwRow: Ae,
      MwButton: De
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
        mwIconPrevious: Zs,
        mwIconArrowForward: En,
        proposedTranslation: t
      };
    }
  };
  function fC(e, t, n, o, s, a) {
    const i = _("mw-button"), r = _("mw-row");
    return v(), M(r, { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: S(() => [
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
  const Xu = /* @__PURE__ */ V(gC, [["render", fC]]), pC = {
    name: "ProposedTranslationHeader",
    components: {
      MwRow: Ae,
      MwCol: Me,
      MwButton: De
    },
    emits: ["configure-options"],
    setup() {
      const e = Se(), t = y(
        () => e.state.application.currentMTProvider
      ), n = Tt(), o = y(() => ({
        [qe.ORIGINAL_TEXT_PROVIDER_KEY]: n.i18n(
          "cx-sx-sentence-selector-translation-options-original-card-title"
        ),
        [qe.EMPTY_TEXT_PROVIDER_KEY]: n.i18n(
          "cx-sx-sentence-selector-translation-options-empty-card-title"
        )
      })), s = y(
        () => o.value[t.value] || n.i18n(
          "cx-sx-sentence-selector-suggested-translation-title",
          qe.getMTProviderLabel(t.value)
        )
      );
      return {
        mwIconEllipsis: Qs,
        mtOptionLabel: s
      };
    }
  };
  function hC(e, t, n, o, s, a) {
    const i = _("mw-col"), r = _("mw-button"), l = _("mw-row");
    return v(), M(i, { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: S(() => [
        p(l, { class: "ma-0 ps-5 pb-4" }, {
          default: S(() => [
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
              default: S(() => [
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
  const mC = /* @__PURE__ */ V(pC, [["render", hC]]), _C = {
    name: "RetryMtCard",
    components: { MwButton: De, MwIcon: ze, MwGrid: kc, MwCol: Me, MwRow: Ae },
    emits: ["configure-options", "retry-translation"],
    setup() {
      return {
        mwIconAlert: po,
        mwIconRefresh: Nc,
        mwIconMenu: uh
      };
    }
  }, vC = { class: "mt-retry-body" };
  function yC(e, t, n, o, s, a) {
    const i = _("mw-icon"), r = _("mw-col"), l = _("mw-row"), d = _("mw-button"), c = Te("i18n");
    return v(), T("div", vC, [
      p(l, { class: "retry-body__action-buttons" }, {
        default: S(() => [
          p(r, { cols: "12" }, {
            default: S(() => [
              p(i, { icon: o.mwIconAlert }, null, 8, ["icon"]),
              G(C("span", null, null, 512), [
                [c, void 0, "cx-sx-proposed-translation-not-available-message"]
              ])
            ], void 0, !0),
            _: 1
          })
        ], void 0),
        _: 1
      }),
      p(l, { class: "retry-body__action-buttons" }, {
        default: S(() => [
          p(r, { cols: "6" }, {
            default: S(() => [
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
            default: S(() => [
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
  const bC = /* @__PURE__ */ V(_C, [["render", yC]]), SC = {
    name: "ProposedTranslationCard",
    components: {
      RetryMtCard: bC,
      MwSpinner: Jn,
      MwCard: jt,
      ProposedTranslationHeader: mC,
      MwRow: Ae,
      MwCol: Me,
      MwButton: De,
      ProposedTranslationActionButtons: Xu
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
        () => !!i.value || s.value === qe.EMPTY_TEXT_PROVIDER_KEY
      ), u = () => {
        e.value = t.value.$el.clientHeight + n.value.$el.clientHeight;
      };
      return We(s, u), lt(() => K(this, null, function* () {
        yield Wo(), u();
      })), {
        footer: n,
        getDir: Ne.getDir,
        header: t,
        mwIconEllipsis: Qs,
        mwIconEdit: Qt,
        proposedTranslation: i,
        hasProposedTranslation: c,
        targetLanguage: a,
        contentsStyle: d,
        mtRequestPending: l
      };
    }
  }, wC = ["lang", "dir", "innerHTML"];
  function CC(e, t, n, o, s, a) {
    const i = _("proposed-translation-header"), r = _("mw-spinner"), l = _("retry-mt-card"), d = _("mw-col"), c = _("mw-button"), u = _("proposed-translation-action-buttons"), g = _("mw-row"), f = _("mw-card");
    return v(), M(f, { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: S(() => [
        p(g, {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: S(() => [
            p(i, {
              ref: "header",
              onConfigureOptions: t[0] || (t[0] = (m) => e.$emit("configure-options"))
            }, null, 512),
            p(d, {
              class: ge(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--empty": !o.hasProposedTranslation
              }]),
              style: nt(o.contentsStyle)
            }, {
              default: S(() => [
                o.hasProposedTranslation ? (v(), T("section", {
                  key: 0,
                  lang: o.targetLanguage,
                  dir: o.getDir(o.targetLanguage),
                  innerHTML: o.proposedTranslation
                }, null, 8, wC)) : o.mtRequestPending ? (v(), M(r, { key: 1 })) : (v(), M(l, {
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
              default: S(() => [
                o.hasProposedTranslation || o.mtRequestPending ? (v(), M(c, {
                  key: 0,
                  icon: o.mwIconEdit,
                  type: "text",
                  label: e.$i18n("cx-sx-sentence-selector-edit-translation-button-label"),
                  class: "sx-sentence-selector__proposed-translation-edit-button pa-5 pt-4",
                  progressive: "",
                  disabled: !o.hasProposedTranslation,
                  onClick: t[3] || (t[3] = (m) => e.$emit("edit-translation", o.proposedTranslation))
                }, null, 8, ["icon", "label", "disabled"])) : se("", !0),
                p(u, ni(Ks(e.$attrs)), null, 16)
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
  const EC = /* @__PURE__ */ V(SC, [["render", CC]]), xC = (e) => y(() => {
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
  }), AC = {
    name: "SubSection",
    props: {
      subSection: {
        type: At,
        required: !0
      }
    },
    emits: ["bounce-translation"],
    setup(e, { emit: t }) {
      const n = ne(null), o = xC(e.subSection);
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
  }, kC = ["innerHTML"];
  function TC(e, t, n, o, s, a) {
    return v(), T("div", {
      ref: "subSectionRoot",
      class: ge(["sx-sentence-selector__subsection", o.rootClasses]),
      innerHTML: o.content
    }, null, 10, kC);
  }
  const DC = /* @__PURE__ */ V(AC, [["render", TC]]), LC = {
    name: "BlockTemplateStatusIndicator",
    components: {
      MwCircleProgressBar: Rc,
      MwIcon: ze
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
        () => !e.isTemplateAdapted || e.percentage === 0 ? po : vn
      );
      return {
        cssVars: t,
        statusIcon: n
      };
    }
  };
  function PC(e, t, n, o, s, a) {
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
  const Yu = /* @__PURE__ */ V(LC, [["render", PC]]), NC = {
    name: "SxBlockTemplateStatusDialog",
    components: {
      MwCol: Me,
      MwRow: Ae,
      MwButton: De,
      MwIcon: ze,
      MwRadioGroup: Uc,
      MwRadio: Ns,
      MwDivider: Js,
      MwDialog: Yn,
      MwCircleProgressBar: Rc,
      BlockTemplateStatusIndicator: Yu
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
        () => !e.isTemplateAdapted || o.value === 0 ? po : vn
      ), o = y(
        () => e.targetParamsCount / (e.sourceParamsCount + e.mandatoryMissingParamsCount) * 100
      ), s = Tt(), a = y(() => {
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
            icon: dh,
            color: xt.base30
          });
        else if (!e.isTemplateAdapted)
          l.push({
            text: s.i18n(
              "cx-sx-block-template-none-mapped-param-text",
              e.sourceParamsCount
            ),
            icon: Ft,
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
          icon: Qt,
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
  }, FC = { class: "pa-4" }, MC = ["textContent"], OC = ["textContent"];
  function BC(e, t, n, o, s, a) {
    const i = _("block-template-status-indicator"), r = _("mw-icon"), l = _("mw-col"), d = _("mw-row"), c = _("mw-dialog");
    return v(), M(c, {
      value: n.active,
      class: "sx-block-template-status-dialog",
      title: e.$i18n("cx-sx-publisher-preview-options-title"),
      "overlay-opacity": 0.7,
      "overlay-color": e.$mwui.colors.base10,
      onInput: t[0] || (t[0] = (u) => e.$emit("update:active", u))
    }, {
      header: S(() => [
        p(d, {
          justify: "center",
          class: "mt-4"
        }, {
          default: S(() => [
            p(l, { shrink: "" }, {
              default: S(() => [
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
      default: S(() => [
        C("div", FC, [
          C("h3", {
            textContent: ae(o.statusText)
          }, null, 8, MC),
          C("p", {
            class: "mt-6 text-small",
            textContent: ae(o.statusExplanation)
          }, null, 8, OC),
          (v(!0), T(Ce, null, Qe(o.notes, (u, g) => (v(), M(d, {
            key: g,
            align: "start",
            class: "mt-4"
          }, {
            default: S(() => [
              p(l, { shrink: "" }, {
                default: S(() => [
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
    }, 8, ["value", "title", "overlay-opacity", "overlay-color"]);
  }
  const IC = /* @__PURE__ */ V(NC, [["render", BC]]), $C = {
    name: "BlockTemplateAdaptationCard",
    components: {
      SxBlockTemplateStatusDialog: IC,
      MwSpinner: Jn,
      MwIcon: ze,
      MwCard: jt,
      MwRow: Ae,
      MwCol: Me,
      MwButton: De,
      ProposedTranslationActionButtons: Xu,
      BlockTemplateStatusIndicator: Yu
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
      ), u = y(() => d.value ? "block-template-adaptation-card__body--" + (c.value ? "success" : "warning") : null), g = Tt(), f = y(() => d.value ? c.value ? g.i18n("sx-block-template-adaptation-card-edit-button-label") : g.i18n(
        "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
      ) : null), m = y(
        () => {
          var X;
          return Object.keys(((X = t.value) == null ? void 0 : X.sourceTemplateParams) || {}).length;
        }
      ), w = y(() => {
        var W;
        const X = (W = t.value) == null ? void 0 : W.getTargetTemplateParamsByProvider(
          o.value
        );
        return Object.keys(X || {});
      }), E = y(() => w.value.length), k = y(() => {
        const X = Z.value;
        return m.value + X === 0 ? 100 : E.value / (m.value + X) * 100 || 0;
      }), N = ne(!1), z = () => {
        N.value = !0;
      }, I = (X) => X.filter((W) => !w.value.includes(W)), Z = y(() => {
        var W;
        const X = ((W = d.value) == null ? void 0 : W.mandatoryTargetParams) || [];
        return I(X).length;
      }), Ee = y(() => {
        var W;
        const X = ((W = d.value) == null ? void 0 : W.optionalTargetParams) || [];
        return I(X).length;
      });
      return {
        adaptationRatio: k,
        adaptedTemplateCardClass: u,
        blockEditableContent: a,
        editBlockTranslationButtonLabel: f,
        isTemplateAdapted: c,
        mandatoryMissingTargetParamsCount: Z,
        mwIconInfo: Dc,
        mwIconPuzzle: ch,
        optionalMissingTargetParamsCount: Ee,
        showTemplateStatus: z,
        sourceParamsCount: m,
        sourceTemplateName: l,
        targetLanguageAutonym: n,
        targetParamsCount: E,
        targetTemplateName: i,
        templateStatusDialogOn: N,
        translationLoaded: r
      };
    }
  }, UC = { class: "block-template-adaptation-card__container pa-4" }, RC = ["textContent"], VC = ["textContent"], zC = {
    key: 1,
    class: "block-template-adaptation-card__body--failure pa-4 mb-4"
  };
  function jC(e, t, n, o, s, a) {
    const i = _("mw-icon"), r = _("mw-col"), l = _("mw-row"), d = _("block-template-status-indicator"), c = _("mw-button"), u = _("mw-spinner"), g = _("proposed-translation-action-buttons"), f = _("sx-block-template-status-dialog"), m = _("mw-card"), w = Te("i18n");
    return v(), M(m, { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
      default: S(() => [
        C("div", UC, [
          p(l, { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
            default: S(() => [
              p(r, { shrink: "" }, {
                default: S(() => [
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
                textContent: ae(o.sourceTemplateName)
              }, null, 8, ["textContent"])
            ], void 0, !0),
            _: 1
          }),
          o.targetTemplateName ? (v(), T("div", {
            key: 0,
            class: ge(["pa-4 mb-4", o.adaptedTemplateCardClass])
          }, [
            p(l, {
              class: "block-template-adaptation-card__body__header ma-0 pb-1",
              align: "start"
            }, {
              default: S(() => [
                G(p(r, { tag: "h5" }, null, 512), [
                  [w, void 0, "sx-block-template-adaptation-card-body-header-success"]
                ]),
                p(r, { shrink: "" }, {
                  default: S(() => [
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
            }, null, 8, RC),
            p(c, {
              class: "px-0",
              type: "text",
              progressive: "",
              onClick: t[0] || (t[0] = (E) => e.$emit("edit-translation", o.blockEditableContent))
            }, {
              default: S(() => [
                C("span", {
                  textContent: ae(o.editBlockTranslationButtonLabel)
                }, null, 8, VC)
              ], void 0, !0),
              _: 1
            })
          ], 2)) : o.translationLoaded ? (v(), T("div", zC, [
            p(l, {
              class: "block-template-adaptation-card__body__header pb-0 mb-0",
              align: "start"
            }, {
              default: S(() => [
                G(p(r, { tag: "h5" }, null, 512), [
                  [w, [
                    o.targetLanguageAutonym
                  ], "sx-block-template-adaptation-card-body-header-failure"]
                ]),
                p(r, { shrink: "" }, {
                  default: S(() => [
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
        p(g, ni(Ks(e.$attrs)), null, 16),
        p(f, {
          active: o.templateStatusDialogOn,
          "onUpdate:active": t[1] || (t[1] = (E) => o.templateStatusDialogOn = E),
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
  const HC = /* @__PURE__ */ V($C, [["render", jC]]), qC = {
    name: "TranslatedSegmentCardHeader",
    components: { MwButtonGroup: Zo },
    props: {
      selection: {
        type: String,
        required: !0,
        validator: (e) => ["sentence", "paragraph"].includes(e)
      }
    },
    emits: ["update:selection"],
    setup(e, { emit: t }) {
      const { isSectionTitleSelected: n } = ye(Se()), o = Tt();
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
  }, GC = { class: "translated-segment-card-header" };
  function KC(e, t, n, o, s, a) {
    const i = _("mw-button-group");
    return v(), T("div", GC, [
      p(i, {
        items: o.scopeOptions,
        active: n.selection,
        onSelect: o.updateSelection
      }, null, 8, ["items", "active", "onSelect"])
    ]);
  }
  const WC = /* @__PURE__ */ V(qC, [["render", KC]]), XC = {
    name: "TranslatedSegmentCardActionButtons",
    components: {
      MwRow: Ae,
      MwButton: De
    },
    emits: ["select-previous-segment", "skip-translation"],
    setup() {
      const { currentSourceSection: e, isSectionTitleSelected: t } = ye(Se()), n = y(
        () => e.value.isSelectedTranslationUnitLast
      );
      return {
        mwIconArrowForward: En,
        mwIconPrevious: Zs,
        isLastTranslationUnit: n,
        isSectionTitleSelected: t
      };
    }
  };
  function YC(e, t, n, o, s, a) {
    const i = _("mw-button"), r = _("mw-row");
    return v(), M(r, { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: S(() => [
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
  const JC = /* @__PURE__ */ V(XC, [["render", YC]]), ZC = {
    name: "TranslatedSegmentCard",
    components: {
      TranslatedSegmentCardActionButtons: JC,
      MwProgressBar: Rh,
      MwIcon: ze,
      TranslatedSegmentCardHeader: WC,
      MwCard: jt,
      MwRow: Ae,
      MwCol: Me,
      MwButton: De
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
          (k) => k.sentences.some(
            (N) => N.id === o.value.id
          )
        )
      ), r = y(
        () => a.value ? o.value.mtProposedTranslationUsed : i.value.proposedContentForMTValidation
      ), l = Je("colors"), d = l.base80, c = l.red50, u = y(() => t.value ? n.value.translatedTitle : a.value ? o.value.translatedContent : i.value.translatedContent), g = y(
        () => Gn.calculateScore(
          u.value,
          r.value,
          s.value
        )
      ), f = y(
        () => Gn.getScoreStatus(g.value)
      ), m = y(
        () => `translated-segment-card__modification-stats__percentage--${f.value}`
      ), w = y(() => ({
        failure: g.value === 0 ? null : l.yellow30,
        warning: l.yellow30,
        success: l.green30
      })), E = y(
        () => w.value[f.value]
      );
      return {
        errorColor: c,
        modificationPercentageClass: m,
        mtScore: g,
        mwIconEdit: Qt,
        mwIconEllipsis: Qs,
        mwIconRobot: $c,
        mwIconUserAvatar: eh,
        progressBarBackgroundColor: d,
        scopeSelection: e,
        showSentenceTab: a,
        translation: u,
        userIconColor: E
      };
    }
  };
  function QC(e, t, n, o, s, a) {
    const i = _("translated-segment-card-header"), r = _("mw-col"), l = _("mw-icon"), d = _("mw-progress-bar"), c = _("mw-row"), u = _("mw-button"), g = _("translated-segment-card-action-buttons"), f = _("mw-card"), m = Te("i18n"), w = Te("i18n-html");
    return v(), M(f, { class: "translated-segment-card col shrink pa-0 mb-0" }, {
      default: S(() => [
        p(c, {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: S(() => [
            p(i, {
              selection: o.scopeSelection,
              "onUpdate:selection": t[0] || (t[0] = (E) => o.scopeSelection = E)
            }, null, 8, ["selection"]),
            p(r, {
              tag: "section",
              class: "translated-segment-card__body pa-5"
            }, {
              default: S(() => [
                p(c, { class: "ma-0" }, {
                  default: S(() => [
                    p(r, {
                      class: "translated-segment-card__modification-stats",
                      grow: ""
                    }, {
                      default: S(() => [
                        G(C("h5", null, null, 512), [
                          [m, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                        ]),
                        o.mtScore === 0 ? G((v(), T("p", {
                          key: 0,
                          style: nt({ color: o.errorColor })
                        }, null, 4)), [
                          [m, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                        ]) : G((v(), T("p", {
                          key: 1,
                          class: ge(o.modificationPercentageClass)
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
                      default: S(() => [
                        p(c, { class: "ma-0 ms-2" }, {
                          default: S(() => [
                            p(r, {
                              shrink: "",
                              align: "center"
                            }, {
                              default: S(() => [
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
                              default: S(() => [
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
                              default: S(() => [
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
                  onClick: t[1] || (t[1] = (E) => e.$emit("edit-translation", o.translation))
                }, null, 8, ["icon", "label"])) : se("", !0)
              ], void 0, !0),
              _: 1
            }),
            p(r, { class: "translated-segment-card__actions" }, {
              default: S(() => [
                p(g, ni(Ks(e.$attrs)), null, 16)
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
  const e8 = /* @__PURE__ */ V(ZC, [["render", QC]]), t8 = {
    name: "SxSentenceSelector",
    components: {
      BlockTemplateAdaptationCard: HC,
      TranslatedSegmentCard: e8,
      ProposedTranslationCard: EC,
      SubSection: DC,
      SxSentenceSelectorContentHeader: dC,
      MwRow: Ae,
      MwCol: Me,
      SxTranslationSelector: aC,
      MwButton: De
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
          var pe;
          return (pe = i.value) == null ? void 0 : pe.isSelectedTranslationUnitTranslated;
        }
      ), g = y(() => {
        var pe;
        return (pe = i.value) == null ? void 0 : pe.subSections;
      }), f = y(
        () => {
          var pe;
          return (pe = i.value) == null ? void 0 : pe.selectedTranslationUnitOriginalContent;
        }
      ), m = y(
        () => isNaN(n.value) ? n.value : `${n.value}px`
      ), w = nn();
      lt(() => K(this, null, function* () {
        const pe = o.getters["application/getCurrentPage"], { currentTranslation: j } = o.state.application;
        j && !j.restored && xn.fetchTranslationUnits(j.id).then((Le) => {
          pe.restoreCorporaDraft(Le), j.restored = !0;
        }), yield o.dispatch("application/initializeMTProviders"), r.value || o.dispatch("application/selectTranslationUnitById", 0), n.value = window.innerHeight;
      }));
      const E = () => o.dispatch("application/selectNextTranslationUnit"), k = () => o.dispatch("application/selectPreviousTranslationUnit"), N = () => {
        w({
          event_type: "editor_segment_add",
          translation_source_language: d.value,
          translation_target_language: c.value
        }), o.dispatch(
          "application/applyProposedTranslationToSelectedTranslationUnit"
        );
      }, z = () => {
        t.value = !0, setTimeout(() => {
          t.value = !1;
        }, 100);
      }, I = St(), Z = () => {
        o.dispatch("translator/fetchTranslations"), yo(null), I.push({ name: "dashboard" });
      }, Ee = () => {
        le.value || (e.value = !0, o.dispatch(
          "application/translateSelectedTranslationUnitForAllProviders"
        ));
      }, X = (pe, j) => {
        var Le;
        I.push({
          name: "sx-editor",
          state: {
            content: pe,
            originalContent: f.value,
            title: ((Le = a.value) == null ? void 0 : Le.title) || s.value.title,
            isInitialEdit: j || null
          }
        });
      }, W = () => I.push({ name: "sx-publisher" }), be = () => K(this, null, function* () {
        r.value ? yield o.dispatch("application/translateTranslationUnitById", {
          id: r.value.id,
          provider: l.value
        }) : yield o.dispatch("application/translateTranslationUnitById", {
          id: 0,
          provider: l.value
        });
      });
      We(r, () => {
        if (!r.value)
          return;
        const pe = r.value.id, j = le.value ? document.getElementById(pe) : document.querySelector(`[data-segmentid='${pe}']`);
        Array.from(j.getClientRects()).every(
          // use "elementFromPoint" method to get the topmost element
          // at the coordinates of the border box of each line.
          // If the line of the segment is inside the viewport and not
          // hidden by another element (e.g. the proposed translation card),
          // the returned element should match the "segment" element.
          // Note that we only check for the top-left corner of the rectangle, so
          // if a small portion of a line is hidden, the line is still considered
          // to be visible.
          (je) => document.elementFromPoint(je.x, je.y) === j
        ) || j.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        });
      });
      const le = y(
        () => r.value instanceof At
      );
      return {
        applyTranslation: N,
        bounceTranslation: z,
        configureTranslationOptions: Ee,
        currentPageSection: i,
        editTranslation: X,
        getDir: Ne.getDir,
        goToDashboard: Z,
        isBlockTemplateSelected: le,
        isSelectedTranslationUnitTranslated: u,
        isTranslationOptionsActive: e,
        mwIconArrowPrevious: Ci,
        previewTranslation: W,
        selectPreviousTranslationUnit: k,
        sentenceSelectorStyle: m,
        shouldProposedTranslationBounce: t,
        skipTranslation: E,
        sourceLanguage: d,
        subSections: g,
        retryTranslation: be
      };
    }
  }, n8 = { class: "sx-sentence-selector__header-title" }, o8 = { class: "sx-sentence-selector__section-contents px-4" };
  function s8(e, t, n, o, s, a) {
    const i = _("mw-button"), r = _("mw-col"), l = _("mw-row"), d = _("sx-sentence-selector-content-header"), c = _("sub-section"), u = _("translated-segment-card"), g = _("proposed-translation-card"), f = _("block-template-adaptation-card"), m = _("sx-translation-selector"), w = Te("i18n");
    return v(), T("section", {
      class: "sx-sentence-selector fill-height column ma-0 no-wrap",
      style: nt(o.sentenceSelectorStyle)
    }, [
      p(l, { class: "sx-sentence-selector__header ma-0 py-2" }, {
        default: S(() => [
          p(r, { shrink: "" }, {
            default: S(() => [
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
            default: S(() => [
              G(C("h4", n8, null, 512), [
                [w, void 0, "cx-sx-sentence-selector-header-title"]
              ])
            ], void 0, !0),
            _: 1
          }),
          p(r, {
            shrink: "",
            class: "px-3"
          }, {
            default: S(() => [
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
        default: S(() => [
          p(r, {
            dir: o.getDir(o.sourceLanguage),
            lang: o.sourceLanguage,
            class: "sx-sentence-selector__section"
          }, {
            default: S(() => [
              p(d),
              C("div", o8, [
                (v(!0), T(Ce, null, Qe(o.subSections, (E) => (v(), M(c, {
                  id: E.id,
                  key: `sub-section-${E.id}`,
                  "sub-section": E,
                  onBounceTranslation: o.bounceTranslation
                }, null, 8, ["id", "sub-section", "onBounceTranslation"]))), 128))
              ])
            ], void 0, !0),
            _: 1
          }, 8, ["dir", "lang"]),
          !o.isBlockTemplateSelected && o.isSelectedTranslationUnitTranslated ? (v(), M(u, {
            key: 0,
            onEditTranslation: t[0] || (t[0] = (E) => o.editTranslation(E, !1)),
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
            class: ge({ "mb-0": !o.shouldProposedTranslationBounce }),
            onConfigureOptions: o.configureTranslationOptions,
            onEditTranslation: t[1] || (t[1] = (E) => o.editTranslation(E, !0)),
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
        "onUpdate:active": t[2] || (t[2] = (E) => o.isTranslationOptionsActive = E)
      }, null, 8, ["active"])
    ], 4);
  }
  const a8 = /* @__PURE__ */ V(t8, [["render", s8]]), i8 = {
    name: "SxSentenceSelectorView",
    components: {
      SxSentenceSelector: a8
    },
    computed: {
      classes() {
        return {
          fullscreen: this.$mwui.breakpoint.tabletAndDown
        };
      }
    }
  };
  function r8(e, t, n, o, s, a) {
    const i = _("sx-sentence-selector");
    return v(), T("main", {
      class: ge(["sx-sentence-selector-view", a.classes])
    }, [
      p(i)
    ], 2);
  }
  const l8 = /* @__PURE__ */ V(i8, [["render", r8]]), c8 = `<svg width="375px" height="200px" viewBox="0 0 375 200" version="1.1"
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
`, u8 = `<svg  width="375px" height="200px" viewBox="0 0 375 200" version="1.1"
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
</svg>`, d8 = {
    name: "SxQuickTutorial",
    components: {
      MwButton: De,
      MwRow: Ae
    },
    data: () => ({
      mwIconArrowForward: En,
      totalSteps: 2,
      activeStep: 1,
      tutorialSvgMT: c8,
      tutorialSvgSections: u8
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
  }, g8 = { class: "sx-quick-tutorial" }, f8 = { class: "sx-quick-tutorial__main-point py-9 px-6" }, p8 = {
    key: "main-point-1",
    class: "ma-0 pa-0"
  }, h8 = {
    key: "main-point-2",
    class: "ma-0 pa-0"
  }, m8 = { class: "sx-quick-tutorial__illustration" }, _8 = ["innerHTML"], v8 = ["innerHTML"], y8 = { class: "sx-quick-tutorial__step-indicator py-3" }, b8 = ["onClick"], S8 = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, w8 = {
    key: "secondary-point-1",
    class: "ma-0"
  }, C8 = {
    key: "secondary-point-2",
    class: "ma-0"
  }, E8 = { class: "sx-quick-tutorial__action-button pt-4 pb-6" };
  function x8(e, t, n, o, s, a) {
    const i = _("mw-button"), r = _("mw-row"), l = Te("i18n");
    return v(), T("section", g8, [
      p(r, {
        direction: "column",
        class: "sx-quick-tutorial__body-container ma-0"
      }, {
        default: S(() => [
          C("section", f8, [
            p(_n, {
              name: "fade",
              mode: "out-in"
            }, {
              default: S(() => [
                a.isActiveStep(1) ? G((v(), T("h2", p8, null, 512)), [
                  [l, void 0, "sx-quick-tutorial-main-point-step-1"]
                ]) : a.isActiveStep(2) ? G((v(), T("h2", h8, null, 512)), [
                  [l, void 0, "sx-quick-tutorial-main-point-step-2"]
                ]) : se("", !0)
              ], void 0, !0),
              _: 1
            })
          ]),
          C("section", m8, [
            p(_n, { name: "mw-ui-animation-slide-left" }, {
              default: S(() => [
                a.isActiveStep(1) ? (v(), T("div", {
                  key: "illustration-1",
                  innerHTML: e.tutorialSvgSections
                }, null, 8, _8)) : a.isActiveStep(2) ? (v(), T("div", {
                  key: "illustration-2",
                  innerHTML: e.tutorialSvgMT
                }, null, 8, v8)) : se("", !0)
              ], void 0, !0),
              _: 1
            })
          ]),
          C("div", y8, [
            (v(!0), T(Ce, null, Qe(e.totalSteps, (d) => (v(), T("span", {
              key: `dot-${d}`,
              class: ge(["dot mx-1", { "dot-active": a.isActiveStep(d) }]),
              role: "button",
              onClick: (c) => e.activeStep = d
            }, null, 10, b8))), 128))
          ]),
          C("section", S8, [
            p(_n, {
              name: "fade",
              mode: "out-in"
            }, {
              default: S(() => [
                a.isActiveStep(1) ? G((v(), T("h3", w8, null, 512)), [
                  [l, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                ]) : a.isActiveStep(2) ? G((v(), T("h3", C8, null, 512)), [
                  [l, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                ]) : se("", !0)
              ], void 0, !0),
              _: 1
            })
          ]),
          C("div", E8, [
            p(_n, {
              name: "fade",
              mode: "out-in"
            }, {
              default: S(() => [
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
                }, null, 8, ["label", "onClick"])) : se("", !0)
              ], void 0, !0),
              _: 1
            })
          ])
        ], void 0),
        _: 1
      })
    ]);
  }
  const A8 = /* @__PURE__ */ V(d8, [["render", x8]]), k8 = {
    name: "SxContentComparatorView",
    components: {
      SxQuickTutorial: A8
    },
    computed: {
      classes() {
        return {
          fullscreen: this.$mwui.breakpoint.tabletAndDown
        };
      }
    }
  };
  function T8(e, t, n, o, s, a) {
    const i = _("sx-quick-tutorial");
    return v(), T("main", {
      class: ge(["sx-quick-tutorial-view", a.classes])
    }, [
      p(i)
    ], 2);
  }
  const D8 = /* @__PURE__ */ V(k8, [["render", T8]]);
  function L8(e, t) {
    const n = e.getElementsByTagName("a");
    for (const o of n)
      o.href = Ve.getPageUrl(t, o.title), o.target = "_blank";
  }
  const P8 = {
    name: "SxEditorOriginalContent",
    components: { MwExpandableContent: Xh },
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
        n.value = 2 * o(), L8(t.value, e.language);
      }), {
        originalContentRef: t,
        twoLinesHeight: n
      };
    }
  }, N8 = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, F8 = { class: "sx-editor__original-content-panel__header mb-2" }, M8 = ["lang", "dir", "innerHTML"];
  function O8(e, t, n, o, s, a) {
    const i = _("mw-expandable-content"), r = Te("i18n");
    return v(), T("section", N8, [
      G(C("h5", F8, null, 512), [
        [r, void 0, "cx-sx-editor-original-panel-label"]
      ]),
      p(i, {
        "min-height": o.twoLinesHeight,
        scroll: ""
      }, {
        default: S(() => [
          C("div", {
            ref: "originalContentRef",
            class: "sx-editor__original-content-panel__body",
            lang: n.language,
            dir: n.dir,
            innerHTML: n.originalContent
          }, null, 8, M8)
        ], void 0),
        _: 1
      }, 8, ["min-height"])
    ]);
  }
  const B8 = /* @__PURE__ */ V(P8, [["render", O8]]), I8 = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g id="happy-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group">
            <circle id="Oval" fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
            <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" id="Mask" fill="#3366CC"></path>
        </g>
    </g>
</svg>
`, $8 = {
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
        happyRobotSVG: I8,
        modificationPercentageClass: s,
        mtScore: n
      };
    }
  }, U8 = {
    key: 0,
    class: "sx-editor__feedback-overlay fill-height"
  }, R8 = { class: "sx-editor__feedback-overlay-content px-4" }, V8 = ["innerHTML"], z8 = { class: "sx-editor__feedback-overlay-content__title" }, j8 = { class: "sx-editor__feedback-overlay-content__clarification mb-1" };
  function H8(e, t, n, o, s, a) {
    const i = Te("i18n"), r = Te("i18n-html");
    return n.showFeedback ? (v(), T("div", U8, [
      C("div", R8, [
        C("div", {
          class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
          innerHTML: o.happyRobotSVG
        }, null, 8, V8),
        G(C("h2", z8, null, 512), [
          [i, void 0, "sx-editor-feedback-overlay-title"]
        ]),
        G(C("p", j8, null, 512), [
          [i, void 0, "sx-editor-feedback-overlay-clarification"]
        ]),
        G(C("p", {
          class: ge(["sx-editor__feedback-overlay-content__stats", o.modificationPercentageClass])
        }, null, 2), [
          [r, [o.mtScore], "sx-editor-feedback-overlay-stats"]
        ])
      ])
    ])) : se("", !0);
  }
  const q8 = /* @__PURE__ */ V($8, [["render", H8]]), G8 = {
    name: "SxEditor",
    components: {
      EditCompleteFeedback: q8,
      MwRow: Ae,
      SxEditorOriginalContent: B8,
      VisualEditor: Fv,
      MwSpinner: Jn
    },
    props: {
      fromRoute: {
        type: String,
        required: !0
      }
    },
    setup(e) {
      const t = ne(!1), n = St(), o = Se(), s = () => t.value = !0, a = () => n.replace({ name: e.fromRoute }), { isFinalEdit: i, isInitialEdit: r, content: l, originalContent: d, title: c } = history.state, u = ne(null), g = ne(!1), f = nn(), { targetLanguage: m, sourceLanguage: w } = ye(o), E = y(
        () => Gn.calculateScore(
          u.value,
          l,
          m.value
        )
      ), k = (N) => K(this, null, function* () {
        u.value = N, g.value = !0, yield new Promise((z) => setTimeout(z, 2e3)), g.value = !1, i ? o.commit(
          "application/setCurrentSourceSectionEditedTranslation",
          N
        ) : (E.value === 0 && r && f({
          event_type: "editor_segment_add",
          translation_source_language: w.value,
          translation_target_language: m.value
        }), o.dispatch(
          "application/applyEditedTranslationToSelectedTranslationUnit",
          N
        )), a();
      });
      return {
        closeEditor: a,
        content: l,
        editedTranslation: u,
        editorReady: t,
        getDir: Ne.getDir,
        sourceLanguage: w,
        targetLanguage: m,
        onEditorReady: s,
        onEditCompleted: k,
        originalContent: d,
        showFeedback: g,
        title: c
      };
    }
  }, K8 = { class: "sx-editor__editing-surface-container grow" };
  function W8(e, t, n, o, s, a) {
    const i = _("sx-editor-original-content"), r = _("mw-spinner"), l = _("edit-complete-feedback"), d = _("visual-editor"), c = _("mw-row");
    return v(), M(c, {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: S(() => [
        o.originalContent ? (v(), M(i, {
          key: 0,
          language: o.sourceLanguage,
          dir: o.getDir(o.sourceLanguage),
          "original-content": o.originalContent
        }, null, 8, ["language", "dir", "original-content"])) : se("", !0),
        o.editorReady ? se("", !0) : (v(), M(r, { key: 1 })),
        C("div", K8, [
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
  const X8 = /* @__PURE__ */ V(G8, [["render", W8]]), Y8 = {
    name: "SxContentComparatorView",
    components: {
      SxEditor: X8
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
  function J8(e, t, n, o, s, a) {
    const i = _("sx-editor");
    return v(), T("main", {
      class: ge(["sx-editor-view", a.classes])
    }, [
      p(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
    ], 2);
  }
  const Z8 = /* @__PURE__ */ V(Y8, [["render", J8]]), Q8 = {
    name: "SxPublisherHeader",
    components: { MwCol: Me, MwButton: De, MwRow: Ae },
    props: {
      isPublishingDisabled: {
        type: Boolean,
        required: !0
      }
    },
    emits: ["publish-translation"],
    setup() {
      const e = St();
      return {
        mwIconCheck: vn,
        mwIconClose: Ft,
        onClose: () => e.push({ name: "sx-sentence-selector" })
      };
    }
  };
  function eE(e, t, n, o, s, a) {
    const i = _("mw-button"), r = _("mw-col"), l = _("mw-row"), d = Te("i18n");
    return v(), M(l, { class: "ma-0 sx-publisher__header" }, {
      default: S(() => [
        p(r, { shrink: "" }, {
          default: S(() => [
            p(i, {
              icon: o.mwIconClose,
              type: "icon",
              outlined: !1,
              onClick: o.onClose
            }, null, 8, ["icon", "onClick"])
          ], void 0, !0),
          _: 1
        }),
        G(p(r, {
          grow: "",
          tag: "h5",
          class: "ma-0"
        }, null, 512), [
          [d, void 0, "cx-sx-publisher-header-title"]
        ]),
        p(r, { shrink: "" }, {
          default: S(() => [
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
  const tE = /* @__PURE__ */ V(Q8, [["render", eE]]), nE = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, oE = `<svg width="136px" height="136px" viewBox="0 0 136 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, sE = {
    name: "SxPublisherAnimationDialog",
    components: { MwDialog: Yn, MwRow: Ae, MwCol: Me },
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
          svg: nE,
          title: e.$i18n("cx-sx-publisher-animation-publishing-indicator-title"),
          subtitle: e.$i18n(
            "cx-sx-publisher-animation-publishing-indicator-subtitle"
          )
        },
        success: {
          svg: oE,
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
  }, aE = ["innerHTML"], iE = ["textContent"], rE = ["textContent"];
  function lE(e, t, n, o, s, a) {
    const i = _("mw-col"), r = _("mw-row"), l = _("mw-dialog");
    return n.active ? (v(), M(l, {
      key: 0,
      "overlay-opacity": 0.85,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: S(() => [
        p(r, { class: "ma-4" }, {
          default: S(() => [
            p(i, null, {
              default: S(() => [
                C("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: a.animationSvg
                }, null, 8, aE),
                C("h2", {
                  textContent: ae(a.animationTitle)
                }, null, 8, iE),
                C("p", {
                  class: "ma-0",
                  textContent: ae(a.animationSubtitle)
                }, null, 8, rE)
              ], void 0, !0),
              _: 1
            })
          ], void 0, !0),
          _: 1
        })
      ], void 0),
      _: 1
    }, 8, ["overlay-opacity"])) : se("", !0);
  }
  const cE = /* @__PURE__ */ V(sE, [["render", lE]]), uE = {
    name: "SxPublisherCaptchaDialog",
    components: { MwInput: Ai, MwDialog: Yn, MwRow: Ae, MwCol: Me, MwButton: De, MwDivider: Js },
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
      const n = ne(""), o = () => t("close"), s = () => t("publish", n.value), a = Je("breakpoints"), i = y(() => a.value.mobile);
      return {
        captchaInput: n,
        close: o,
        fullscreen: i,
        mwIconCheck: vn,
        mwIconClose: Ft,
        publish: s
      };
    }
  }, dE = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, gE = ["src"], fE = ["textContent"], pE = /* @__PURE__ */ C("p", { class: "mt-0" }, null, -1);
  function hE(e, t, n, o, s, a) {
    const i = _("mw-button"), r = _("mw-col"), l = _("mw-row"), d = _("mw-divider"), c = _("mw-input"), u = _("mw-dialog"), g = Te("i18n");
    return n.active && n.captchaDetails ? (v(), M(u, {
      key: 0,
      "overlay-opacity": 0.65,
      fullscreen: o.fullscreen,
      class: "sx-publisher__captcha-dialog"
    }, {
      header: S(() => [
        p(l, {
          class: "mw-ui-dialog__header ma-0",
          align: "stretch"
        }, {
          default: S(() => [
            p(r, { shrink: "" }, {
              default: S(() => [
                p(i, {
                  class: "py-4 ps-6 pe-4",
                  type: "icon",
                  icon: o.mwIconClose,
                  onClick: o.close
                }, null, 8, ["icon", "onClick"])
              ], void 0, !0),
              _: 1
            }),
            G(p(r, {
              grow: "",
              class: "sx-publisher__captcha-dialog__header-title items-center justify-start"
            }, null, 512), [
              [g, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
            ]),
            p(r, {
              shrink: "",
              class: "justify-center"
            }, {
              default: S(() => [
                G(p(i, {
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
      default: S(() => [
        C("div", dE, [
          n.captchaDetails.type === "image" ? (v(), T("img", {
            key: 0,
            class: "sx-publisher__captcha-dialog__puzzle-image",
            src: n.captchaDetails.url
          }, null, 8, gE)) : (v(), T("p", {
            key: 1,
            textContent: ae(n.captchaDetails.question)
          }, null, 8, fE)),
          pE,
          p(l, { class: "ma-0" }, {
            default: S(() => [
              p(r, null, {
                default: S(() => [
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
    }, 8, ["overlay-opacity", "fullscreen"])) : se("", !0);
  }
  const mE = /* @__PURE__ */ V(uE, [["render", hE]]), _E = {
    name: "SxPublishOptionSelector",
    components: {
      MwButton: De,
      MwRadioGroup: Uc,
      MwRadio: Ns,
      MwDivider: Js,
      MwDialog: Yn
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
      ), s = y(() => n.state.translator.isAnon), a = Tt(), { currentSourceSection: i } = ye(n), r = y(
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
        mwIconArrowPrevious: Ci,
        onPublishOptionsClose: u,
        publishOptions: d,
        selectedOption: o,
        updateOption: (f) => {
          const m = f.target.value;
          n.commit("application/setPublishTarget", m), u();
        }
      };
    }
  }, vE = { class: "mw-ui-dialog__header" }, yE = { class: "row ma-0 pa-4" }, bE = { class: "col shrink justify-center" }, SE = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, wE = { class: "mb-0" }, CE = { class: "pa-4" }, EE = ["textContent"];
  function xE(e, t, n, o, s, a) {
    const i = _("mw-button"), r = _("mw-divider"), l = _("mw-radio"), d = _("mw-radio-group"), c = _("mw-dialog"), u = Te("i18n");
    return v(), M(c, {
      value: n.active,
      class: "sx-publisher__publish-options",
      title: e.$i18n("cx-sx-publisher-preview-options-title"),
      "overlay-opacity": 0.7,
      "overlay-color": e.$mwui.colors.base10,
      onInput: t[0] || (t[0] = (g) => e.$emit("update:active", g)),
      onClose: o.onPublishOptionsClose
    }, {
      header: S(() => [
        C("div", vE, [
          C("div", yE, [
            C("div", bE, [
              p(i, {
                class: "pa-0",
                type: "icon",
                icon: o.mwIconArrowPrevious,
                onClick: o.onPublishOptionsClose
              }, null, 8, ["icon", "onClick"])
            ]),
            C("div", SE, [
              G(C("h4", wE, null, 512), [
                [u, void 0, "cx-sx-publisher-preview-options-title"]
              ])
            ])
          ]),
          p(r)
        ])
      ]),
      default: S(() => [
        C("div", CE, [
          p(d, {
            value: o.selectedOption,
            name: "publish-options",
            onInput: o.updateOption
          }, {
            default: S(() => [
              (v(!0), T(Ce, null, Qe(o.publishOptions, (g, f) => (v(), T(Ce, {
                key: g.label
              }, [
                p(l, {
                  class: "pa-0 my-1",
                  label: g.label,
                  "input-value": g.value,
                  disabled: g.disabled
                }, null, 8, ["label", "input-value", "disabled"]),
                C("p", {
                  class: ge(["complementary ms-7 mt-0", o.getMarginBottomClassByOptionIndex(f)]),
                  textContent: ae(g.details)
                }, null, 10, EE)
              ], 64))), 128))
            ], void 0, !0),
            _: 1
          }, 8, ["value", "onInput"])
        ])
      ], void 0),
      _: 1
    }, 8, ["value", "title", "overlay-opacity", "overlay-color", "onClose"]);
  }
  const AE = /* @__PURE__ */ V(_E, [["render", xE]]), kE = {
    name: "SxPublisherReviewInfo",
    components: {
      MwButton: De,
      MwCol: Me,
      MwRow: Ae,
      MwMessage: Ch,
      MwIcon: ze
    },
    props: {
      publishFeedbackMessages: {
        type: Array,
        required: !0
      }
    },
    setup(e) {
      const t = ne(0), n = ne(null);
      We(n, () => {
        var w;
        const m = (w = n.value) == null ? void 0 : w.$el;
        if (m instanceof HTMLElement) {
          const E = m.querySelector("a");
          E && E.setAttribute("target", "_blank");
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
            return Fr;
          default:
            return Ga;
        }
      }), i = y(() => s.value === "default"), r = y(
        () => i.value ? "notice" : s.value
      ), l = y(
        () => `sx-publisher__review-info--${r.value}`
      ), d = Tt(), c = y(() => {
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
        mwIconAlert: po,
        mwIconArrowForward: En,
        mwIconBlock: Fr,
        mwIconEye: Ga,
        mwIconPrevious: Zs,
        reviewIcon: a,
        reviewInfoClass: l,
        status: s
      };
    }
  }, TE = { class: "sx-publisher__review-info__content" }, DE = {
    key: 0,
    class: "complementary ma-0"
  }, LE = ["textContent"], PE = ["textContent"];
  function NE(e, t, n, o, s, a) {
    const i = _("mw-icon"), r = _("mw-col"), l = _("mw-button"), d = _("mw-row"), c = _("mw-message"), u = Te("i18n-html");
    return v(), M(c, {
      type: o.messageType,
      class: ge(["sx-publisher__review-info ma-0 pa-4", o.reviewInfoClass]),
      inline: o.isMessageInline
    }, {
      icon: S(() => [
        p(i, {
          icon: o.reviewIcon,
          class: "col shrink mw-ui-message__icon pe-3 items-start"
        }, null, 8, ["icon"])
      ]),
      default: S(() => [
        C("div", TE, [
          o.status === "default" ? G((v(), T("p", DE, null, 512)), [
            [u, void 0, "cx-sx-publisher-review-info"]
          ]) : (v(), T(Ce, { key: 1 }, [
            C("h5", {
              textContent: ae(o.messageTitle)
            }, null, 8, LE),
            C("p", {
              textContent: ae(o.messageText)
            }, null, 8, PE),
            p(d, {
              justify: "between",
              class: "ma-0"
            }, {
              default: S(() => [
                G(p(r, {
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
                  default: S(() => [
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
                })) : se("", !0)
              ], void 0, !0),
              _: 1
            })
          ], 64))
        ])
      ], void 0),
      _: 1
    }, 8, ["type", "class", "inline"]);
  }
  const FE = /* @__PURE__ */ V(kE, [["render", NE]]), cl = (e) => {
    const t = document.createElement("div");
    return t.innerHTML = e, t.innerText;
  }, ME = (e, t, n, o) => K(vt, null, function* () {
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
        yield ta.addWikibaseLink(
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
  }), OE = (e) => {
    const t = ne(!1), n = ne("pending"), o = ne(!1), s = ne(!1), a = ne(null), i = ne([]), r = y(
      () => i.value.some((u) => u.isError)
    );
    return We(o, (u) => {
      u || (i.value = []);
    }), {
      captchaDetails: a,
      captchaDialogOn: s,
      configureTranslationOptions: () => o.value = !0,
      doPublish: (u = null) => K(vt, null, function* () {
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
          g && (i.value.push(g), i.value.sort((w, E) => +E.isError - +w.isError));
        a.value = null, n.value = r.value ? "failure" : "success", setTimeout(
          () => ME(
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
  }, BE = (e, t) => {
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
  }, IE = {
    name: "SxPublisher",
    components: {
      SxPublisherReviewInfo: FE,
      SxPublishOptionSelector: AE,
      SxPublisherAnimationDialog: cE,
      SxPublisherCaptchaDialog: mE,
      MwButton: De,
      SxPublisherHeader: tE,
      MwRow: Ae,
      MwCol: Me
    },
    setup() {
      const e = Se(), { currentSourceSection: t } = ye(e), n = y(() => {
        var E;
        return (E = t.value) == null ? void 0 : E.title;
      }), o = Tt(), s = y(() => e.getters["application/isSandboxTarget"] ? o.i18n(
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
      } = OE(e);
      lt(() => K(this, null, function* () {
        const E = yield e.dispatch("translator/validateMT");
        E && f.value.push(E);
      }));
      const { editTranslation: w } = BE(e, St());
      return {
        captchaDetails: a,
        captchaDialogOn: i,
        configureTranslationOptions: r,
        currentPageSection: t,
        doPublish: l,
        editTranslation: w,
        isPublishDialogActive: d,
        isPublishingDisabled: c,
        mwIconEdit: Qt,
        mwIconSettings: lh,
        onCaptchaDialogClose: u,
        panelResult: s,
        publishFeedbackMessages: f,
        publishOptionsOn: g,
        publishStatus: m,
        translatedTitle: n
      };
    }
  }, $E = { class: "sx-publisher" }, UE = { class: "sx-publisher__publish-panel pa-4" }, RE = { class: "mb-2" }, VE = ["innerHTML"], zE = { class: "sx-publisher__section-preview pa-5" }, jE = ["innerHTML"];
  function HE(e, t, n, o, s, a) {
    const i = _("sx-publisher-header"), r = _("mw-button"), l = _("mw-col"), d = _("mw-row"), c = _("sx-publisher-review-info"), u = _("sx-publish-option-selector"), g = _("sx-publisher-captcha-dialog"), f = _("sx-publisher-animation-dialog"), m = Te("i18n");
    return v(), T("section", $E, [
      p(i, {
        "is-publishing-disabled": o.isPublishingDisabled,
        onPublishTranslation: o.doPublish
      }, null, 8, ["is-publishing-disabled", "onPublishTranslation"]),
      C("div", UE, [
        G(C("h5", RE, null, 512), [
          [m, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
        ]),
        C("h6", {
          class: "mb-2",
          innerHTML: o.panelResult
        }, null, 8, VE),
        p(d, {
          justify: "end",
          class: "ma-0"
        }, {
          default: S(() => [
            p(l, { shrink: "" }, {
              default: S(() => [
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
      C("section", zE, [
        p(d, { class: "pb-5 ma-0" }, {
          default: S(() => [
            p(l, {
              tag: "h2",
              grow: "",
              class: "sx-publisher__section-preview__title ma-0",
              innerHTML: o.translatedTitle
            }, null, 8, ["innerHTML"]),
            p(l, { shrink: "" }, {
              default: S(() => [
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
        }, null, 8, jE)
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
  const qE = /* @__PURE__ */ V(IE, [["render", HE]]), GE = {
    name: "SxPublisherView",
    components: {
      SxPublisher: qE
    },
    computed: {
      classes() {
        return {
          fullscreen: this.$mwui.breakpoint.tabletAndDown
        };
      }
    }
  };
  function KE(e, t, n, o, s, a) {
    const i = _("sx-publisher");
    return v(), T("main", {
      class: ge(["sx-publisher-view", a.classes])
    }, [
      p(i)
    ], 2);
  }
  const WE = /* @__PURE__ */ V(GE, [["render", KE]]), XE = {
    name: "SxSearchArticleSuggestion",
    components: { MwThumbnail: ki, MwIcon: ze, MwRow: Ae, MwCol: Me },
    props: {
      suggestion: {
        type: vo,
        required: !0
      }
    },
    setup(e) {
      return { mwIconStar: oh, mwIconLanguage: Bc, mwIconArticle: xi, getDir: Ne.getDir };
    }
  }, YE = ["textContent"], JE = ["textContent"], ZE = ["textContent"];
  function QE(e, t, n, o, s, a) {
    const i = _("mw-thumbnail"), r = _("mw-col"), l = _("mw-icon"), d = _("mw-row");
    return v(), M(d, {
      class: "cx-search-suggestion pt-3 ma-0",
      align: "normal",
      lang: n.suggestion.language,
      dir: o.getDir(n.suggestion.language)
    }, {
      default: S(() => [
        p(r, { shrink: "" }, {
          default: S(() => [
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
          default: S(() => [
            p(d, {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: S(() => [
                p(r, {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: S(() => [
                    C("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: ae(n.suggestion.title)
                    }, null, 8, YE)
                  ], void 0, !0),
                  _: 1
                }),
                p(r, {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: S(() => [
                    C("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: ae(n.suggestion.description)
                    }, null, 8, JE)
                  ], void 0, !0),
                  _: 1
                }),
                p(r, {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: S(() => [
                    p(l, {
                      icon: o.mwIconLanguage,
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    C("small", {
                      textContent: ae(n.suggestion.langLinksCount)
                    }, null, 8, ZE)
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
  const Ju = /* @__PURE__ */ V(XE, [["render", QE]]), ex = (e, t) => {
    const o = ne([]), s = ne(!1), a = y(
      () => o.value.slice(0, 4)
    ), i = Fi(() => K(vt, null, function* () {
      try {
        o.value = yield es.searchPagesByTitlePrefix(
          t.value,
          e.value
        );
      } finally {
        s.value = !1;
      }
    }), 500);
    return We(t, () => {
      s.value = !0, o.value = [], i();
    }), {
      searchResultsLoading: s,
      searchResultsSlice: a
    };
  }, tx = {
    name: "SearchResultsCard",
    components: { SxSearchArticleSuggestion: Ju, MwCard: jt, MwSpinner: Jn },
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
      ), o = y(() => e.searchInput), { searchResultsLoading: s, searchResultsSlice: a } = ex(
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
  }, nx = {
    key: 1,
    class: "sx-article-search__empty-search-results-message mt-4 pa-4 mb-0"
  };
  function ox(e, t, n, o, s, a) {
    const i = _("mw-spinner"), r = _("sx-search-article-suggestion"), l = _("mw-card"), d = Te("i18n");
    return v(), M(l, { class: "sx-article-search__results mb-0 pa-4" }, {
      default: S(() => [
        o.searchResultsLoading ? (v(), M(i, { key: 0 })) : o.searchResultsSlice.length === 0 ? G((v(), T("p", nx, null, 512)), [
          [d, [
            n.searchInput,
            o.sourceLanguageAutonym
          ], "cx-sx-article-search-no-search-results-message"]
        ]) : se("", !0),
        (v(!0), T(Ce, null, Qe(o.searchResultsSlice, (c) => (v(), M(r, {
          key: c.pageid,
          suggestion: c,
          onClick: (u) => e.$emit("suggestion-clicked", c)
        }, null, 8, ["suggestion", "onClick"]))), 128))
      ], void 0),
      _: 1
    });
  }
  const sx = /* @__PURE__ */ V(tx, [["render", ox]]), ax = {
    name: "ArticleSuggestionsCard",
    components: { SxSearchArticleSuggestion: Ju, MwCard: jt },
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
    computed: Ct({}, Tm({
      sourceLanguage: (e) => e.application.sourceLanguage
    }))
  }, ix = ["textContent"];
  function rx(e, t, n, o, s, a) {
    const i = _("sx-search-article-suggestion"), r = _("mw-card");
    return v(), M(r, { class: "sx-article-search__suggestions mb-0 pa-4" }, {
      header: S(() => [
        C("h5", {
          class: "ma-0 pb-1 sx-article-search__suggestions-header",
          textContent: ae(n.cardTitle)
        }, null, 8, ix)
      ]),
      default: S(() => [
        (v(!0), T(Ce, null, Qe(n.suggestions, (l) => (v(), M(i, {
          key: l.pageid,
          suggestion: l,
          onClick: (d) => e.$emit("suggestion-clicked", l)
        }, null, 8, ["suggestion", "onClick"]))), 128))
      ], void 0),
      _: 1
    });
  }
  const lx = /* @__PURE__ */ V(ax, [["render", rx]]), cx = (e, t) => y(() => {
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
        label: Ne.getAutonym(i),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    })), o];
  }), ux = (e, t, n) => y(() => {
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
  }), dx = (e, t) => {
    const n = qu.bind(
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
  }, gx = {
    name: "SxArticleSearch",
    components: {
      ArticleSuggestionsCard: lx,
      SearchResultsCard: sx,
      MwInput: Ai,
      MwDialog: Yn,
      MwLanguageSelector: Ru,
      MwButtonGroup: Zo,
      MwRow: Ae,
      MwCol: Me,
      MwButton: De
    },
    setup() {
      const e = ne(""), t = ne(!1), n = ne(null), o = ne(!1), s = ne([]), a = Se(), { sourceLanguage: i, targetLanguage: r } = ye(a), { supportedLanguageCodes: l } = os(), d = ux(
        i,
        r,
        s
      ), c = cx(
        i,
        d
      ), u = St();
      lt(() => K(this, null, function* () {
        var le;
        yield $u(), a.state.translator.translations.length || a.dispatch("translator/fetchTranslations");
        try {
          s.value.push(
            ...JSON.parse(localStorage.getItem("uls-previous-languages"))
          );
        } catch (pe) {
        }
        (le = n.value) == null || le.focus();
      }));
      const g = () => {
        u.push({ name: "dashboard" });
      }, f = Ui(a), m = (le) => f(le, r.value), w = (le) => {
        if (le === "other") {
          o.value = !0;
          return;
        }
        m(le);
      };
      We(i, () => a.dispatch("mediawiki/fetchNearbyPages"), {
        immediate: !0
      });
      const E = nn();
      We(e, () => {
        t.value || (t.value = !0, E({
          event_type: "dashboard_search",
          translation_source_language: i.value,
          translation_target_language: r.value
        }));
      });
      const k = () => {
        o.value = !1;
      }, N = (le) => {
        o.value = !1, s.value.push(le), w(le);
      }, z = y(
        () => a.getters["mediawiki/getRecentlyEditedPages"]
      ), I = y(
        () => a.getters["mediawiki/getNearbyPages"]
      ), Z = Je("breakpoints"), Ee = y(() => Z.tabletAndDown), {
        startRecentlyEditedSectionTranslation: X,
        startNearbySectionTranslation: W,
        startSearchResultSectionTranslation: be
      } = dx(u, a);
      return {
        supportedLanguageCodes: l,
        close: g,
        fullscreen: Ee,
        mwIconClose: Ft,
        mwIconSearch: Fc,
        nearbyPages: I,
        onSourceLanguageDialogClose: k,
        onSourceLanguageSelected: N,
        recentlyEditedPages: z,
        searchInput: e,
        searchInputRef: n,
        sourceLanguage: i,
        sourceLanguageOptions: c,
        sourceLanguageSelectOn: o,
        startNearbySectionTranslation: W,
        startRecentlyEditedSectionTranslation: X,
        startSearchResultSectionTranslation: be,
        suggestedSourceLanguages: d,
        updateSelection: w
      };
    }
  }, fx = { class: "sx-article-search" }, px = { class: "mb-0" }, hx = {
    key: 2,
    class: "sx-article-search__empty-suggestions-message mt-12 pa-4 mb-0"
  };
  function mx(e, t, n, o, s, a) {
    const i = _("mw-col"), r = _("mw-button"), l = _("mw-row"), d = _("mw-input"), c = _("mw-button-group"), u = _("article-suggestions-card"), g = _("search-results-card"), f = _("mw-language-selector"), m = _("mw-dialog"), w = Te("i18n");
    return v(), T("section", fx, [
      p(l, {
        class: "sx-article-search__header ma-0 py-3",
        align: "stretch",
        justify: "start"
      }, {
        default: S(() => [
          p(i, {
            grow: "",
            class: "px-4",
            align: "center"
          }, {
            default: S(() => [
              G(C("h5", px, null, 512), [
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
            default: S(() => [
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
        "onUpdate:value": t[0] || (t[0] = (E) => o.searchInput = E),
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
      o.searchInput ? se("", !0) : (v(), T(Ce, { key: 0 }, [
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
        }, null, 8, ["card-title", "suggestions", "onSuggestionClicked"])) : G((v(), T("p", hx, null, 512)), [
          [w, void 0, "cx-sx-article-search-no-suggestions-message"]
        ])
      ], 64)),
      G(p(g, {
        "search-input": o.searchInput,
        onSuggestionClicked: o.startSearchResultSectionTranslation
      }, null, 8, ["search-input", "onSuggestionClicked"]), [
        [wi, !!o.searchInput]
      ]),
      p(m, {
        value: o.sourceLanguageSelectOn,
        "onUpdate:value": t[1] || (t[1] = (E) => o.sourceLanguageSelectOn = E),
        class: "sx-article-search-language-selector",
        animation: "slide-up",
        fullscreen: o.fullscreen,
        header: o.fullscreen,
        "overlay-opacity": 0,
        title: e.$i18n("sx-article-search-language-selector-dialog-title"),
        onClose: o.onSourceLanguageDialogClose
      }, {
        default: S(() => [
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
  const _x = /* @__PURE__ */ V(gx, [["render", mx]]), vx = {
    name: "SxArticleSearchView",
    components: {
      SxArticleSearch: _x
    },
    computed: {
      classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
    }
  };
  function yx(e, t, n, o, s, a) {
    const i = _("sx-article-search");
    return v(), T("main", {
      class: ge(["sx-article-search-view", a.classes])
    }, [
      p(i)
    ], 2);
  }
  const bx = /* @__PURE__ */ V(vx, [["render", yx]]), Zu = [
    {
      path: "",
      name: "dashboard",
      component: rl,
      meta: { workflowStep: 0 }
    },
    {
      path: "/sx/article-search",
      name: "sx-article-search",
      component: bx,
      meta: { workflowStep: 0.5 }
    },
    {
      path: "/sx",
      name: "sx-translation-confirmer",
      component: cS,
      props: (e) => ({
        previousRoute: e.query.previousRoute,
        eventSource: e.query.eventSource
      }),
      meta: { workflowStep: 1 }
    },
    {
      path: "/sx/section-selector",
      name: "sx-section-selector",
      component: QS,
      meta: { workflowStep: 2 }
    },
    {
      path: "/sx/content-comparator",
      name: "sx-content-comparator",
      component: Hw,
      meta: { workflowStep: 3 }
    },
    {
      path: "/sx/quick-tutorial",
      name: "sx-quick-tutorial",
      component: D8,
      meta: { workflowStep: 3.5 }
    },
    {
      path: "/sx/sentence-selector",
      name: "sx-sentence-selector",
      component: l8,
      meta: { workflowStep: 4 }
    },
    {
      path: "/sx/sx-editor",
      name: "sx-editor",
      component: Z8,
      meta: { workflowStep: 4.5 }
    },
    {
      path: "/sx/sx-publisher",
      name: "sx-publisher",
      component: WE,
      meta: { workflowStep: 5 }
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: rl,
      meta: { workflowStep: 0 }
    }
  ], zi = sv({
    history: o1(),
    routes: Zu
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
      const i = Math.ceil(s) - 1, r = Zu.find(
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
  const Sx = mw.config.get("wgUserLanguage"), wx = "en", Cx = mw.messages.values || {}, kn = Ac(Mm);
  kn.config.globalProperties.$incompleteVersion = !0;
  const Ex = Iv();
  kn.use(Ex);
  kn.use(zi);
  kn.use(ho);
  kn.use(nm);
  kn.use(tm);
  const xx = rb({
    locale: Sx,
    finalFallback: wx,
    messages: Cx,
    wikilinks: !0
  });
  kn.use(xx);
  kn.mount("#contenttranslation");
});
export default Ax();
