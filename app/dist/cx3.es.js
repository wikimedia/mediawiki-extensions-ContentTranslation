var dv = Object.defineProperty, gv = Object.defineProperties;
var mv = Object.getOwnPropertyDescriptors;
var Sd = Object.getOwnPropertySymbols;
var pv = Object.prototype.hasOwnProperty, hv = Object.prototype.propertyIsEnumerable;
var yd = (e, t, n) => t in e ? dv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, me = (e, t) => {
  for (var n in t || (t = {}))
    pv.call(t, n) && yd(e, n, t[n]);
  if (Sd)
    for (var n of Sd(t))
      hv.call(t, n) && yd(e, n, t[n]);
  return e;
}, Ye = (e, t) => gv(e, mv(t));
var b = (e, t, n) => new Promise((o, s) => {
  var a = (c) => {
    try {
      l(n.next(c));
    } catch (u) {
      s(u);
    }
  }, r = (c) => {
    try {
      l(n.throw(c));
    } catch (u) {
      s(u);
    }
  }, l = (c) => c.done ? o(c.value) : Promise.resolve(c.value).then(a, r);
  l((n = n.apply(e, t)).next());
});
window.Vuex = require("vuex");
{
  const {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: o,
    CdxSearchInput: s,
    CdxTextInput: a,
    CdxMenu: r,
    CdxMessage: l,
    CdxTabs: c,
    CdxTab: u,
    CdxField: i,
    CdxRadio: d
  } = require("../codex.js");
  window.Codex = {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: o,
    CdxSearchInput: s,
    CdxTextInput: a,
    CdxMenu: r,
    CdxMessage: l,
    CdxTabs: c,
    CdxTab: u,
    CdxField: i,
    CdxRadio: d
  };
}
const he = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, fv = {
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
  emits: ["click"],
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
}, wv = window.Vue.toDisplayString, qr = window.Vue.openBlock, Wr = window.Vue.createElementBlock, vv = window.Vue.createCommentVNode, Cd = window.Vue.createElementVNode, _v = window.Vue.normalizeClass, Sv = ["width", "height", "aria-labelledby"], yv = ["id"], Cv = ["fill"], xv = ["d"];
function bv(e, t, n, o, s, a) {
  return qr(), Wr("span", {
    class: _v(["mw-ui-icon notranslate", a.classes])
  }, [
    (qr(), Wr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (qr(), Wr("title", {
        key: 0,
        id: n.iconName
      }, wv(n.iconName), 9, yv)) : vv("", !0),
      Cd("g", { fill: n.iconColor }, [
        Cd("path", { d: a.iconImagePath }, null, 8, xv)
      ], 8, Cv)
    ], 8, Sv))
  ], 2);
}
const et = /* @__PURE__ */ he(fv, [["render", bv]]);
const kv = {
  name: "MwButton",
  components: {
    MwIcon: et
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
}, $v = window.Vue.renderSlot, Vv = window.Vue.resolveComponent, xd = window.Vue.normalizeClass, ja = window.Vue.openBlock, Xr = window.Vue.createBlock, Kr = window.Vue.createCommentVNode, Ev = window.Vue.toDisplayString, Lv = window.Vue.createElementBlock, Tv = window.Vue.toHandlerKey, Av = window.Vue.withModifiers, Dv = window.Vue.mergeProps, Pv = window.Vue.createElementVNode, Bv = window.Vue.resolveDynamicComponent, Fv = window.Vue.withCtx, Nv = { class: "mw-ui-button__content" }, Mv = ["textContent"];
function Uv(e, t, n, o, s, a) {
  const r = Vv("mw-icon");
  return ja(), Xr(Bv(a.component), {
    class: xd(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Fv(() => [
      $v(e.$slots, "default", {}, () => [
        Pv("span", Nv, [
          n.icon ? (ja(), Xr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: xd(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Kr("", !0),
          !a.isIcon && n.label ? (ja(), Lv("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Ev(n.label)
          }, null, 8, Mv)) : Kr("", !0),
          n.indicator ? (ja(), Xr(r, Dv({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Tv(a.indicatorClickEvent)]: t[0] || (t[0] = Av((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Kr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Ke = /* @__PURE__ */ he(kv, [["render", Uv]]);
const Iv = {
  name: "MwButtonGroup",
  components: {
    MwButton: Ke
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
}, Rv = window.Vue.renderList, zv = window.Vue.Fragment, Yr = window.Vue.openBlock, bd = window.Vue.createElementBlock, Ov = window.Vue.resolveComponent, jv = window.Vue.withModifiers, Hv = window.Vue.mergeProps, Gv = window.Vue.createBlock, qv = { class: "row mw-ui-button-group ma-0 pa-0" };
function Wv(e, t, n, o, s, a) {
  const r = Ov("mw-button");
  return Yr(), bd("div", qv, [
    (Yr(!0), bd(zv, null, Rv(n.items, (l) => (Yr(), Gv(r, Hv({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: jv((c) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Ea = /* @__PURE__ */ he(Iv, [["render", Wv]]);
const Xv = {
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
}, kd = window.Vue.renderSlot, Kv = window.Vue.toDisplayString, $d = window.Vue.openBlock, Vd = window.Vue.createElementBlock, Yv = window.Vue.createCommentVNode, Qv = window.Vue.createElementVNode, Jv = { class: "mw-ui-card" }, Zv = ["textContent"], e0 = { class: "mw-ui-card__content" };
function t0(e, t, n, o, s, a) {
  return $d(), Vd("div", Jv, [
    kd(e.$slots, "header", {}, () => [
      n.title ? ($d(), Vd("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Kv(n.title)
      }, null, 8, Zv)) : Yv("", !0)
    ]),
    Qv("div", e0, [
      kd(e.$slots, "default")
    ])
  ]);
}
const Ze = /* @__PURE__ */ he(Xv, [["render", t0]]);
const n0 = {}, o0 = window.Vue.openBlock, s0 = window.Vue.createElementBlock, a0 = { class: "mw-ui-divider row" };
function i0(e, t) {
  return o0(), s0("div", a0);
}
const yr = /* @__PURE__ */ he(n0, [["render", i0]]);
const r0 = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, l0 = window.Vue.renderSlot, c0 = window.Vue.resolveDynamicComponent, u0 = window.Vue.withCtx, d0 = window.Vue.openBlock, g0 = window.Vue.createBlock;
function m0(e, t, n, o, s, a) {
  return d0(), g0(c0(n.tag), { class: "mw-grid container" }, {
    default: u0(() => [
      l0(e.$slots, "default")
    ]),
    _: 3
  });
}
const p0 = /* @__PURE__ */ he(r0, [["render", m0]]), h0 = {
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
}, f0 = window.Vue.renderSlot, w0 = window.Vue.resolveDynamicComponent, v0 = window.Vue.normalizeClass, _0 = window.Vue.withCtx, S0 = window.Vue.openBlock, y0 = window.Vue.createBlock;
function C0(e, t, n, o, s, a) {
  return S0(), y0(w0(n.tag), {
    class: v0(a.classes)
  }, {
    default: _0(() => [
      f0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const M = /* @__PURE__ */ he(h0, [["render", C0]]), yu = ["mobile", "tablet", "desktop", "desktop-wide"], x0 = yu.reduce(
  (e, t) => Ye(me({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), b0 = {
  name: "MwCol",
  props: Ye(me({}, x0), {
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
      for (let n = 0; n < yu.length; n++) {
        let o = yu[n], s = this.$props[o];
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
}, k0 = window.Vue.renderSlot, $0 = window.Vue.resolveDynamicComponent, V0 = window.Vue.normalizeClass, E0 = window.Vue.withCtx, L0 = window.Vue.openBlock, T0 = window.Vue.createBlock;
function A0(e, t, n, o, s, a) {
  return L0(), T0($0(n.tag), {
    class: V0(a.classes)
  }, {
    default: E0(() => [
      k0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const V = /* @__PURE__ */ he(b0, [["render", A0]]), D0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", P0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Cr = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", B0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, F0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", uf = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", N0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", M0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", xr = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", U0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", I0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", R0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Ed = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", z0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", df = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", O0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", j0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", H0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", G0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", q0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Cu = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, W0 = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, X0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, gf = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", K0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const Qr = window.Vue.computed, Y0 = window.Vue.watch, Q0 = window.Vue.ref, J0 = window.Vue.nextTick, Z0 = {
  name: "MwDialog",
  components: {
    MwButton: Ke,
    MwRow: M,
    MwCol: V,
    MwDivider: yr
  },
  props: {
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
     * Color mode of the overlay
     * @values light, dark
     **/
    overlayMode: {
      type: String,
      default: "light",
      validator: (e) => ["light", "dark"].includes(e)
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
    const n = Q0(null), o = Qr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Qr(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    Y0(
      () => e.value,
      (c) => {
        c ? (r(), J0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = Qr(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClass: s,
      mwIconClose: xr,
      root: n
    };
  }
}, Ld = window.Vue.normalizeClass, Jr = window.Vue.createElementVNode, Zr = window.Vue.renderSlot, Ha = window.Vue.resolveComponent, Ss = window.Vue.createVNode, el = window.Vue.withCtx, Td = window.Vue.createCommentVNode, e_ = window.Vue.withKeys, Ad = window.Vue.openBlock, t_ = window.Vue.createElementBlock, n_ = window.Vue.Transition, o_ = window.Vue.normalizeStyle, s_ = window.Vue.createBlock, a_ = { class: "mw-ui-dialog__shell items-stretch" }, i_ = { class: "mw-ui-dialog__body" };
function r_(e, t, n, o, s, a) {
  const r = Ha("mw-col"), l = Ha("mw-button"), c = Ha("mw-row"), u = Ha("mw-divider");
  return Ad(), s_(n_, {
    name: "mw-ui-animation-fade",
    style: o_(o.cssVars)
  }, {
    default: el(() => [
      n.value ? (Ad(), t_("div", {
        key: 0,
        ref: "root",
        class: Ld(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = e_((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        Jr("div", {
          class: Ld(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        Jr("div", a_, [
          n.header ? Zr(e.$slots, "header", { key: 0 }, () => [
            Ss(c, { class: "mw-ui-dialog__header" }, {
              default: el(() => [
                Ss(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Ss(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: el(() => [
                    Ss(l, {
                      type: "icon",
                      icon: o.mwIconClose,
                      onClick: o.close
                    }, null, 8, ["icon", "onClick"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ss(u)
          ]) : Td("", !0),
          Jr("div", i_, [
            Zr(e.$slots, "default")
          ]),
          Zr(e.$slots, "footer")
        ])
      ], 34)) : Td("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const Vt = /* @__PURE__ */ he(Z0, [["render", r_]]);
const l_ = {
  name: "MwInput",
  components: {
    MwIcon: et
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
  emits: ["click", "focus", "blur", "indicator-clicked", "update:value"],
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
      const t = me({}, e.$attrs);
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
}, Dd = window.Vue.renderSlot, c_ = window.Vue.resolveComponent, Ga = window.Vue.openBlock, tl = window.Vue.createBlock, Pd = window.Vue.createCommentVNode, u_ = window.Vue.resolveDynamicComponent, d_ = window.Vue.toDisplayString, g_ = window.Vue.mergeProps, m_ = window.Vue.withModifiers, p_ = window.Vue.createElementVNode, h_ = window.Vue.normalizeClass, f_ = window.Vue.createElementBlock, w_ = { class: "mw-ui-input__content" };
function v_(e, t, n, o, s, a) {
  const r = c_("mw-icon");
  return Ga(), f_("div", {
    class: h_(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    p_("div", w_, [
      Dd(e.$slots, "icon", {}, () => [
        n.icon ? (Ga(), tl(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Pd("", !0)
      ]),
      (Ga(), tl(u_(n.type === "textarea" ? n.type : "input"), g_({
        ref: "input",
        class: "mw-ui-input__input",
        disabled: n.disabled || null,
        "aria-disabled": n.disabled || null,
        ".value": n.value,
        placeholder: n.placeholder
      }, a.customAttrs, {
        type: n.type,
        onInput: t[0] || (t[0] = (l) => e.$emit("update:value", l.target.value)),
        onFocus: a.onFocus,
        onBlur: a.onBlur,
        onClick: a.onClick,
        textContent: d_(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Dd(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ga(), tl(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = m_((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Pd("", !0)
      ])
    ])
  ], 2);
}
const xu = /* @__PURE__ */ he(l_, [["render", v_]]);
window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.withModifiers;
window.Vue.openBlock;
window.Vue.createBlock;
window.Vue.createCommentVNode;
window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
window.Vue.vModelDynamic;
window.Vue.withKeys;
window.Vue.mergeProps;
window.Vue.createElementVNode;
window.Vue.withDirectives;
window.Vue.toDisplayString;
window.Vue.createElementBlock;
window.Vue.renderList;
window.Vue.Fragment;
window.Vue.createTextVNode;
window.Vue.normalizeClass;
window.Vue.vShow;
const __ = {}, S_ = window.Vue.createElementVNode, y_ = window.Vue.openBlock, C_ = window.Vue.createElementBlock, x_ = { class: "mw-ui-spinner" }, b_ = /* @__PURE__ */ S_("div", { class: "mw-ui-spinner__bounce" }, null, -1), k_ = [
  b_
];
function $_(e, t) {
  return y_(), C_("div", x_, k_);
}
const mt = /* @__PURE__ */ he(__, [["render", $_]]), kt = {
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
const V_ = window.Vue.computed, E_ = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: et },
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
      default: gf
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: kt.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: kt.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = V_(() => {
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
}, Bd = window.Vue.normalizeStyle, Fd = window.Vue.openBlock, L_ = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const T_ = window.Vue.resolveComponent, A_ = window.Vue.createBlock;
function D_(e, t, n, o, s, a) {
  const r = T_("mw-ui-icon");
  return n.thumbnail ? (Fd(), L_("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Bd(o.style)
  }, null, 4)) : (Fd(), A_(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Bd(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Uu = /* @__PURE__ */ he(E_, [["render", D_]]);
window.Vue.vModelRadio;
window.Vue.createElementVNode;
window.Vue.withDirectives;
window.Vue.toDisplayString;
window.Vue.resolveComponent;
window.Vue.normalizeClass;
window.Vue.withCtx;
window.Vue.openBlock;
window.Vue.createBlock;
window.Vue.h;
const P_ = {
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
}, Nd = window.Vue.normalizeClass, Md = window.Vue.normalizeStyle, B_ = window.Vue.createElementVNode, F_ = window.Vue.openBlock, N_ = window.Vue.createElementBlock, M_ = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function U_(e, t, n, o, s, a) {
  return F_(), N_("div", {
    class: Nd(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Md(a.containerStyles)
  }, [
    B_("div", {
      class: Nd(["mw-progress-bar__bar", a.barClass]),
      style: Md(a.barStyles)
    }, null, 6)
  ], 14, M_);
}
const mf = /* @__PURE__ */ he(P_, [["render", U_]]), I_ = (e, t, n, o) => (s) => {
  const a = s.clientY, r = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), l = (u) => {
    o.value = !1;
    let i = Math.min(
      r + u.clientY - a,
      e.value
    );
    i = Math.max(i, t.value), n.value.style.height = i + "px";
  }, c = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), o.value = !0), document.documentElement.removeEventListener(
      "pointermove",
      l,
      !1
    ), document.documentElement.removeEventListener(
      "pointerup",
      c,
      !1
    );
  };
  document.documentElement.addEventListener("pointermove", l, !1), document.documentElement.addEventListener("pointerup", c, !1);
}, R_ = (e, t, n, o) => ({ initiateDrag: I_(
  e,
  t,
  n,
  o
) }), z_ = window.Vue.ref, Ud = window.Vue.computed, O_ = (e, t, n, o) => {
  const s = z_(0), a = Ud(
    () => t.value > e.value
  ), r = Ud(
    () => t.value <= e.value * (s.value + 1)
  ), l = (u) => {
    s.value = u, n.value.scroll(0, e.value * s.value);
  };
  return {
    handleArrowUpClick: () => {
      if (!o.value) {
        n.value.style.removeProperty("height"), o.value = !0, l(0);
        return;
      }
      l(s.value - 1);
    },
    isScrolledToEnd: r,
    scrollToStepByIndex: l,
    scrollable: a,
    scrollIndex: s
  };
};
const qa = window.Vue.ref, j_ = window.Vue.onMounted, Id = window.Vue.computed, H_ = window.Vue.nextTick, G_ = {
  name: "MwExpandableContent",
  components: {
    MwButton: Ke
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
    const t = qa(!0), n = qa(null), o = Id(
      () => Math.min(e.minHeight, s.value)
    ), s = qa(1), { initiateDrag: a } = R_(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: r,
      scrollable: l,
      scrollIndex: c,
      scrollToStepByIndex: u,
      handleArrowUpClick: i
    } = O_(o, s, n, t), d = () => u(c.value + 1), g = qa(null), m = Id(() => ({
      "--collapsed-height": o.value + "px"
    })), p = () => {
      if (!n.value)
        return;
      const f = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, f) {
        let w = Math.min(f, s.value);
        w = Math.max(w, o.value), w === o.value && (t.value = !0), n.value.style.height = w + "px";
      }
    };
    return j_(() => b(this, null, function* () {
      var f;
      yield H_(), s.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
        "pointerdown",
        a,
        !1
      ), window.addEventListener("resize", p);
    })), {
      contentRef: n,
      cssVars: m,
      dragIndicatorRef: g,
      handleArrowUpClick: i,
      isCollapsed: t,
      isScrolledToEnd: r,
      mwIconCollapse: X0,
      mwIconExpand: N0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), u(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: c,
      scrollToNextStep: d
    };
  }
}, q_ = window.Vue.renderSlot, W_ = window.Vue.normalizeClass, Wa = window.Vue.createElementVNode, X_ = window.Vue.resolveComponent, K_ = window.Vue.createVNode, nl = window.Vue.openBlock, Y_ = window.Vue.createBlock, Rd = window.Vue.createCommentVNode, zd = window.Vue.createElementBlock, Q_ = window.Vue.normalizeStyle, J_ = { class: "mw-ui-expandable-content__container" }, Z_ = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, e1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function t1(e, t, n, o, s, a) {
  const r = X_("mw-button");
  return nl(), zd("div", {
    class: "mw-ui-expandable-content",
    style: Q_(o.cssVars)
  }, [
    Wa("div", J_, [
      Wa("div", {
        ref: "contentRef",
        class: W_(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        q_(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (nl(), zd("div", Z_, [
        K_(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (nl(), Y_(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Rd("", !0)
      ])) : Rd("", !0)
    ]),
    Wa("div", e1, [
      Wa("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const n1 = /* @__PURE__ */ he(G_, [["render", t1]]);
const Xa = window.Vue.computed, o1 = {
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
      default: kt.blue600
    },
    inactiveColor: {
      type: String,
      default: kt.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = Xa(() => e.size / 2 * 0.9), n = Xa(() => Math.PI * (t.value * 2)), o = Xa(
      () => (100 - e.percentage) / 100 * n.value
    ), s = Xa(() => ({
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
}, Od = window.Vue.createElementVNode, jd = window.Vue.normalizeStyle, s1 = window.Vue.openBlock, a1 = window.Vue.createElementBlock, i1 = ["width", "height", "viewport"], r1 = ["r", "cx", "cy", "stroke-dasharray"], l1 = ["r", "cx", "cy", "stroke-dasharray"];
function c1(e, t, n, o, s, a) {
  return s1(), a1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: jd(o.cssVars)
  }, [
    Od("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, r1),
    Od("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: jd({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, l1)
  ], 12, i1);
}
const u1 = /* @__PURE__ */ he(o1, [["render", c1]]), d1 = window.Vue.ref, An = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, Fn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${An.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${An.tablet}px) and (max-width: ${An.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${An.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${An.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${An["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${An.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${An["desktop-wide"]}px)`
}, ol = {
  mobile: () => matchMedia(Fn.mobile).matches,
  tablet: () => matchMedia(Fn.tablet).matches,
  desktop: () => matchMedia(Fn.desktop).matches,
  desktopwide: () => matchMedia(Fn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Fn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Fn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Fn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Fn["desktop-and-down"]).matches
}, g1 = (e) => {
  const t = Object.values(An);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, m1 = {
  install: (e) => {
    const t = d1({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in ol)
        ol.hasOwnProperty(s) && (t.value[s] = ol[s]());
      t.value.nextBreakpoint = g1(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Ye(me({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, p1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ye(me({}, e.config.globalProperties.$mwui || {}), {
      colors: kt
    }), e.provide("colors", kt);
  }
};
class us extends Error {
}
const h1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new us();
}), pf = { assertUser: h1 };
const f1 = window.Vue.resolveDirective, ys = window.Vue.createElementVNode, Hd = window.Vue.withDirectives, w1 = window.Vue.toDisplayString, v1 = window.Vue.unref, Gd = window.Vue.withCtx, _1 = window.Vue.openBlock, S1 = window.Vue.createBlock, y1 = window.Vue.createCommentVNode, C1 = { class: "pa-4 sx-login-dialog__header" }, x1 = { class: "sx-login-dialog__body px-6 pb-4" }, b1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, k1 = ["href"], $1 = window.Vue.computed, V1 = window.Vue.ref, E1 = window.Vuex.useStore, L1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = E1(), n = $1(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = V1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = f1("i18n");
      return n.value ? (_1(), S1(v1(Vt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Gd(() => [
          ys("div", C1, [
            Hd(ys("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Gd(() => [
          Hd(ys("div", x1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          ys("div", b1, [
            ys("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, w1(a.$i18n("cx-sx-login-dialog-button-label")), 9, k1)
          ])
        ]),
        _: 1
      })) : y1("", !0);
    };
  }
}, Z = new mw.cx.SiteMapper(), T1 = mw.util.getUrl, A1 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, Gt = !mw.config.get("wgMFMode");
class Iu {
  /**
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
    lastUpdatedTimestamp: r,
    pageRevision: l,
    status: c,
    targetTitle: u
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = c, this.targetTitle = u, this.inFeaturedCollection = !1;
  }
}
const Ka = "original", Ya = "empty", D1 = {
  Elia: "Elia.eus",
  Google: "Google Translate"
};
class ce {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      Ka,
      Ya
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return D1[t] || t;
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
    return Ka;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Ya;
  }
  static isUserMTProvider(t) {
    return [Ka, Ya].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === Ya ? "blank" : t === Ka ? "source" : t.toLowerCase();
  }
}
class eo {
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
    selected: r = !1
  } = {}) {
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Ye(me({}, a), {
      [ce.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [ce.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
  }
  reset() {
    this.proposedTranslations = {
      [ce.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [ce.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[ce.ORIGINAL_TEXT_PROVIDER_KEY];
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
const qd = (e) => {
  var n;
  const t = wr(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, wr = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, bo = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), hf = (e) => {
  const t = wr(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = P1(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, P1 = (e) => {
  let t = e, n = "", o = !1, s = 0, a = 0;
  for (; t.length > 0; ) {
    const r = t.match(
      /(?:\[\[)|(?:\]\])|(?:\{\{)|(?:\}\})|\|+|<\/?nowiki>|<nowiki\s*\/>/
    );
    if (!r) {
      n += t;
      break;
    }
    if (n += t.slice(0, r.index), t = t.slice(r.index + r[0].length), o)
      r[0] === "</nowiki>" && (o = !1), n += r[0];
    else {
      let l = !0;
      r[0] === "<nowiki>" ? (o = !0, l = !1) : r[0] === "</nowiki>" || r[0].match(/<nowiki\s*\/>/) ? l = !1 : r[0].match(/(?:\[\[)/) ? (a++, l = !1) : r[0].match(/(?:\]\])/) ? a > 0 && (a--, l = !1) : r[0].match(/(?:\{\{)/) ? (s++, l = !1) : r[0].match(/(?:\}\})/) ? s > 0 && (s--, l = !1) : r[0].match(/\|+/) && (s > 0 || a > 0) && (l = !1), l ? n += "<nowiki>" + r[0] + "</nowiki>" : n += r[0];
    }
  }
  return n;
}, ff = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, wf = (e) => {
  const t = ff(e);
  return t == null ? void 0 : t.targetExists;
};
class sl {
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
class gt {
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
      (a) => bo(a)
    );
    s && wf(s) && (this.blockTemplateAdaptationInfo[t] = ff(s));
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
      (t) => bo(t)
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
    const t = wr(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? qd(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => bo(o));
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
    return n && qd(n) || "";
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
    const o = wr(n);
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
      (a) => bo(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new sl({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new sl({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new sl({
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
    if (!t || ce.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => bo(s)
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
        const r = this.getSentenceById(a.dataset.segmentid);
        if (r.isTranslated) {
          a.innerHTML = r.mtProposedTranslationUsed;
          return;
        }
        a.parentNode.removeChild(a);
      });
    }
    return n.setAttribute("data-mw-cx-source", t), n.outerHTML;
  }
}
const Ru = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), B1 = Ru - 10, F1 = [
  { status: "failure", value: 100 - Ru },
  { status: "warning", value: 100 - B1 },
  { status: "success", value: 100 }
], vf = (e, t, n) => {
  const o = Wd(e).textContent, s = Wd(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, N1 = (e) => F1.find((t) => e <= t.value).status, M1 = (e, t) => vf(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), U1 = () => (100 - Ru) / 100, Wd = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, sn = {
  calculateScore: vf,
  getScoreStatus: N1,
  getMTScoreForPageSection: M1,
  getMtModificationThreshold: U1
}, Qa = "__LEAD_SECTION__";
class no {
  /**
   * Creates an instance of PageSection.
   * @param {Object} options
   * @param {string} [options.id]
   * @param {boolean} [options.isLeadSection]
   * @param {SubSection[]} [options.subSections]
   */
  constructor({
    id: t,
    subSections: n = [],
    isLeadSection: o = !1,
    isTitleSelected: s = !1
  } = {}) {
    this.id = t, this.proposedTitleTranslations = {
      [ce.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.mtProviderUsedForTitle = "", this.translatedTitle = "", this.subSections = n, this.isLeadSection = o, this.isTitleSelected = s;
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
      [ce.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [ce.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return Qa;
  }
  static isSectionLead(t) {
    return !t || t === Qa;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[ce.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[ce.ORIGINAL_TEXT_PROVIDER_KEY];
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
      (r) => r.id === a.targetSectionId
    );
    this.subSections.forEach((a) => {
      const r = s(a);
      let l = "";
      r && (l = r.innerHTML), a.editedTranslation = l;
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
    return n instanceof gt ? n.transclusionNode.outerHTML : n instanceof eo ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof gt ? t.blockTemplateSelected = !1 : t instanceof eo && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof gt ? n.blockTemplateSelected = !0 : n instanceof eo && (n.selected = !0);
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
    if (o instanceof gt)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof eo)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof gt ? n.blockTemplateProposedTranslations[t] || "" : n instanceof eo ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof gt ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof eo && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = sn.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? Qa : this.originalTitle;
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
    return this.isLeadSection ? Qa : this.title;
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
class br extends Iu {
  /**
   * @param {number|null} sectionTranslationId
   * @param {number} translationId
   * @param {string|null} sectionId
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
    targetLanguage: r,
    startTimestamp: l,
    lastUpdatedTimestamp: c,
    status: u,
    pageRevision: i,
    targetTitle: d,
    sourceSectionTitle: g,
    targetSectionTitle: m,
    progress: p
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: r,
      startTimestamp: l,
      lastUpdatedTimestamp: c,
      pageRevision: i,
      status: u,
      targetTitle: d
    }), this.sectionTranslationId = t, this.sectionId = o, this.sourceSectionTitle = g, this.targetSectionTitle = m, this.progress = p, this.restored = !1;
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
    return no.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? no.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const an = "previous-edits", rn = "popular", tt = "topic", Be = "geography", ee = "collections", We = "automatic", qt = "seed", Xd = window.Vue.ref, { topics: I1, regions: R1 } = mw.loader.require(
  "ext.cx.articlefilters"
), al = {
  type: We,
  id: an
}, z1 = {
  type: We,
  id: rn
}, zu = () => {
  const e = Xd(
    I1.flatMap((u) => u.topics).map((u) => u.topicId.toLowerCase())
  ), t = Xd(!1), n = (u, i) => e.value.includes(i) ? { type: tt, id: i } : null, o = (u, i) => R1.some(
    (g) => g.id.toLowerCase() === i || g.countries.some(
      (m) => m.id.toLowerCase() === i
    )
  ) ? { type: Be, id: i } : null, s = (u, i, d) => d && !d.some((g) => g.name.toLowerCase() === i) ? null : { type: ee, id: u }, a = ({ type: u, id: i }, d = !1) => {
    t.value = !1;
    const g = u == null ? void 0 : u.toLowerCase(), m = i == null ? void 0 : i.toLowerCase();
    if (m === an)
      return {
        type: We,
        id: an
      };
    if (m === rn)
      return {
        type: We,
        id: rn
      };
    if (m === ee)
      return d && !d.length ? (t.value = !0, al) : {
        type: We,
        id: ee
      };
    if (g === tt) {
      const p = n(i, m);
      if (p)
        return p;
      t.value = !0;
    } else if (g === Be) {
      const p = o(i, m);
      if (p)
        return p;
      t.value = !0;
    } else if (g === ee) {
      const p = s(
        i,
        m,
        d
      );
      if (p)
        return p;
      t.value = !0;
    } else if (g === qt)
      return { type: qt, id: i };
    return al;
  }, r = ({ type: u, id: i }) => c({ type: u, id: i }, al), l = ({ type: u, id: i }) => c({ type: u, id: i }, z1), c = (u, i) => !(u != null && u.id) || !(u != null && u.type) || !(i != null && i.id) || !(i != null && i.type) ? !1 : u.id.toLowerCase() === i.id.toLowerCase() && u.type.toLowerCase() === i.type.toLowerCase();
  return {
    filtersValidatorError: t,
    validateFilters: a,
    isDefaultFilter: r,
    isPopularFilter: l,
    isEqualFilter: c
  };
}, O1 = window.Vue.inject, j1 = window.Vue.reactive;
var H1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, _f = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(H1, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(d) {
        this.locale = d;
      }
      convertPlural(d, g) {
        const m = /\d+=/i;
        if (!g || g.length === 0)
          return "";
        for (let h = 0; h < g.length; h++) {
          const f = g[h];
          if (m.test(f)) {
            if (parseInt(f.slice(0, f.indexOf("=")), 10) === d)
              return f.slice(f.indexOf("=") + 1);
            g[h] = void 0;
          }
        }
        g = g.filter((h) => !!h);
        let p = this.getPluralForm(d, this.locale);
        return p = Math.min(p, g.length - 1), g[p];
      }
      getPluralForm(d, g) {
        const m = new Intl.PluralRules(g), p = m.resolvedOptions().pluralCategories, h = m.select(d);
        return ["zero", "one", "two", "few", "many", "other"].filter((f) => p.includes(f)).indexOf(h);
      }
      convertNumber(d, g = !1) {
        let m = this.digitTransformTable(this.locale), p = "";
        if (g) {
          if (parseFloat(d, 10) === d || !m)
            return d;
          const h = [];
          for (const w in m)
            h[m[w]] = w;
          m = h;
          const f = String(d);
          for (let w = 0; w < f.length; w++)
            p += m[f[w]] || f[w];
          return parseFloat(p, 10);
        }
        if (Intl.NumberFormat) {
          let h;
          const f = [...o[this.locale] || [], "en"];
          return h = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : f, p = new Intl.NumberFormat(h).format(d), p === "NaN" && (p = d), p;
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
      convertGrammar(i, d) {
        switch (d) {
          case "instrumental":
            i = "s " + i;
            break;
          case "lokativ":
            i = "o " + i;
        }
        return i;
      }
    }, default: s, dsb: class extends s {
      convertGrammar(i, d) {
        switch (d) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, fi: class extends s {
      convertGrammar(i, d) {
        let g = i.match(/[aou][^äöy]*$/i);
        const m = i;
        switch (i.match(/wiki$/i) && (g = !1), i.match(/[bcdfghjklmnpqrstvwxz]$/i) && (i += "i"), d) {
          case "genitive":
            i += "n";
            break;
          case "elative":
            i += g ? "sta" : "stä";
            break;
          case "partitive":
            i += g ? "a" : "ä";
            break;
          case "illative":
            i += i.slice(-1) + "n";
            break;
          case "inessive":
            i += g ? "ssa" : "ssä";
            break;
          default:
            i = m;
        }
        return i;
      }
    }, ga: class extends s {
      convertGrammar(i, d) {
        if (d === "ainmlae")
          switch (i) {
            case "an Domhnach":
              i = "Dé Domhnaigh";
              break;
            case "an Luan":
              i = "Dé Luain";
              break;
            case "an Mháirt":
              i = "Dé Mháirt";
              break;
            case "an Chéadaoin":
              i = "Dé Chéadaoin";
              break;
            case "an Déardaoin":
              i = "Déardaoin";
              break;
            case "an Aoine":
              i = "Dé hAoine";
              break;
            case "an Satharn":
              i = "Dé Sathairn";
          }
        return i;
      }
    }, he: class extends s {
      convertGrammar(i, d) {
        switch (d) {
          case "prefixed":
          case "תחילית":
            i.slice(0, 1) === "ו" && i.slice(0, 2) !== "וו" && (i = "ו" + i), i.slice(0, 1) === "ה" && (i = i.slice(1)), (i.slice(0, 1) < "א" || i.slice(0, 1) > "ת") && (i = "־" + i);
        }
        return i;
      }
    }, hsb: class extends s {
      convertGrammar(i, d) {
        switch (d) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, hu: class extends s {
      convertGrammar(i, d) {
        switch (d) {
          case "rol":
            i += "ról";
            break;
          case "ba":
            i += "ba";
            break;
          case "k":
            i += "k";
        }
        return i;
      }
    }, hy: class extends s {
      convertGrammar(i, d) {
        return d === "genitive" && (i.slice(-1) === "ա" ? i = i.slice(0, -1) + "այի" : i.slice(-1) === "ո" ? i = i.slice(0, -1) + "ոյի" : i.slice(-4) === "գիրք" ? i = i.slice(0, -4) + "գրքի" : i += "ի"), i;
      }
    }, la: class extends s {
      convertGrammar(i, d) {
        switch (d) {
          case "genitive":
            i = (i = (i = (i = (i = (i = (i = (i = (i = i.replace(/u[ms]$/i, "i")).replace(/ommunia$/i, "ommunium")).replace(/a$/i, "ae")).replace(/libri$/i, "librorum")).replace(/nuntii$/i, "nuntiorum")).replace(/tio$/i, "tionis")).replace(/ns$/i, "ntis")).replace(/as$/i, "atis")).replace(/es$/i, "ei");
            break;
          case "accusative":
            i = (i = (i = (i = (i = (i = (i = (i = (i = i.replace(/u[ms]$/i, "um")).replace(/ommunia$/i, "am")).replace(/a$/i, "ommunia")).replace(/libri$/i, "libros")).replace(/nuntii$/i, "nuntios")).replace(/tio$/i, "tionem")).replace(/ns$/i, "ntem")).replace(/as$/i, "atem")).replace(/es$/i, "em");
            break;
          case "ablative":
            i = (i = (i = (i = (i = (i = (i = (i = (i = i.replace(/u[ms]$/i, "o")).replace(/ommunia$/i, "ommunibus")).replace(/a$/i, "a")).replace(/libri$/i, "libris")).replace(/nuntii$/i, "nuntiis")).replace(/tio$/i, "tione")).replace(/ns$/i, "nte")).replace(/as$/i, "ate")).replace(/es$/i, "e");
        }
        return i;
      }
    }, os: class extends s {
      convertGrammar(i, d) {
        let g, m, p, h;
        switch (g = "мæ", m = "", p = "", h = "", i.match(/тæ$/i) ? (i = i.slice(0, -1), g = "æм") : i.match(/[аæеёиоыэюя]$/i) ? m = "й" : i.match(/у$/i) ? i.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (m = "й") : i.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (p = "-"), d) {
          case "genitive":
            h = p + m + "ы";
            break;
          case "dative":
            h = p + m + "æн";
            break;
          case "allative":
            h = p + g;
            break;
          case "ablative":
            h = m === "й" ? p + m + "æ" : p + m + "æй";
            break;
          case "superessive":
            h = p + m + "ыл";
            break;
          case "equative":
            h = p + m + "ау";
            break;
          case "comitative":
            h = p + "имæ";
        }
        return i + h;
      }
    }, ru: class extends s {
      convertGrammar(i, d) {
        return d === "genitive" && (i.slice(-1) === "ь" ? i = i.slice(0, -1) + "я" : i.slice(-2) === "ия" ? i = i.slice(0, -2) + "ии" : i.slice(-2) === "ка" ? i = i.slice(0, -2) + "ки" : i.slice(-2) === "ти" ? i = i.slice(0, -2) + "тей" : i.slice(-2) === "ды" ? i = i.slice(0, -2) + "дов" : i.slice(-3) === "ник" && (i = i.slice(0, -3) + "ника")), i;
      }
    }, sl: class extends s {
      convertGrammar(i, d) {
        switch (d) {
          case "mestnik":
            i = "o " + i;
            break;
          case "orodnik":
            i = "z " + i;
        }
        return i;
      }
    }, uk: class extends s {
      convertGrammar(i, d) {
        switch (d) {
          case "genitive":
            i.slice(-1) === "ь" ? i = i.slice(0, -1) + "я" : i.slice(-2) === "ія" ? i = i.slice(0, -2) + "ії" : i.slice(-2) === "ка" ? i = i.slice(0, -2) + "ки" : i.slice(-2) === "ти" ? i = i.slice(0, -2) + "тей" : i.slice(-2) === "ды" ? i = i.slice(0, -2) + "дов" : i.slice(-3) === "ник" && (i = i.slice(0, -3) + "ника");
            break;
          case "accusative":
            i.slice(-2) === "ія" && (i = i.slice(0, -2) + "ію");
        }
        return i;
      }
    } };
    const r = new RegExp("(?:([A-Za-zªµºÀ-ÖØ-öø-ʸʻ-ˁːˑˠ-ˤˮͰ-ͳͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-҂Ҋ-ԯԱ-Ֆՙ-՟ա-և։ः-हऻऽ-ीॉ-ौॎ-ॐक़-ॡ।-ঀংঃঅ-ঌএঐও-নপ-রলশ-হঽ-ীেৈোৌৎৗড়ঢ়য়-ৡ০-ৱ৴-৺ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ીૉોૌૐૠૡ૦-૰ૹଂଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽାୀେୈୋୌୗଡ଼ଢ଼ୟ-ୡ୦-୷ஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹாிுூெ-ைொ-ௌௐௗ௦-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౚౠౡ౦-౯౿ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊೋೕೖೞೠೡ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ീെ-ൈൊ-ൌൎൗൟ-ൡ൦-൵൹-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-෴ก-ะาำเ-ๆ๏-๛ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆ໐-໙ໜ-ໟༀ-༗༚-༴༶༸༾-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿚က-ာေးျြဿ-ၗၚ-ၝၡ-ၰၵ-ႁႃႄႇ-ႌႎ-ႜ႞-ჅჇჍა-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፼ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙿᚁ-ᚚᚠ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះៈ។-៚ៜ០-៩᠐-᠙ᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸ᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧚ᨀ-ᨖᨙᨚ᨞-ᩕᩗᩡᩣᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪭ᬄ-ᬳᬵᬻᬽ-ᭁᭃ-ᭋ᭐-᭪᭴-᭼ᮂ-ᮡᮦᮧ᮪ᮮ-ᯥᯧᯪ-ᯬᯮ᯲᯳᯼-ᰫᰴᰵ᰻-᱉ᱍ-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〮〯〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎ㆐-ㆺㇰ-㈜㈠-㉏㉠-㉻㉿-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿕ꀀ-ꒌꓐ-ꘌꘐ-ꘫꙀ-ꙮꚀ-ꚝꚠ-ꛯ꛲-꛷Ꜣ-ꞇ꞉-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠤꠧ꠰-꠷ꡀ-ꡳꢀ-ꣃ꣎-꣙ꣲ-ꣽ꤀-ꤥ꤮-ꥆꥒ꥓꥟-ꥼꦃ-ꦲꦴꦵꦺꦻꦽ-꧍ꧏ-꧙꧞-ꧤꧦ-ꧾꨀ-ꨨꨯꨰꨳꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-ꩻꩽ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫫꫮ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭥꭰ-ꯤꯦꯧꯩ-꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]|\uD800[\uDC00-\uDC0B]|\uD800[\uDC0D-\uDC26]|\uD800[\uDC28-\uDC3A]|𐀼|𐀽|\uD800[\uDC3F-\uDC4D]|\uD800[\uDC50-\uDC5D]|\uD800[\uDC80-\uDCFA]|𐄀|𐄂|\uD800[\uDD07-\uDD33]|\uD800[\uDD37-\uDD3F]|\uD800[\uDDD0-\uDDFC]|\uD800[\uDE80-\uDE9C]|\uD800[\uDEA0-\uDED0]|\uD800[\uDF00-\uDF23]|\uD800[\uDF30-\uDF4A]|\uD800[\uDF50-\uDF75]|\uD800[\uDF80-\uDF9D]|\uD800[\uDF9F-\uDFC3]|\uD800[\uDFC8-\uDFD5]|\uD801[\uDC00-\uDC9D]|\uD801[\uDCA0-\uDCA9]|\uD801[\uDD00-\uDD27]|\uD801[\uDD30-\uDD63]|𐕯|\uD801[\uDE00-\uDF36]|\uD801[\uDF40-\uDF55]|\uD801[\uDF60-\uDF67]|𑀀|\uD804[\uDC02-\uDC37]|\uD804[\uDC47-\uDC4D]|\uD804[\uDC66-\uDC6F]|\uD804[\uDC82-\uDCB2]|𑂷|𑂸|\uD804[\uDCBB-\uDCC1]|\uD804[\uDCD0-\uDCE8]|\uD804[\uDCF0-\uDCF9]|\uD804[\uDD03-\uDD26]|𑄬|\uD804[\uDD36-\uDD43]|\uD804[\uDD50-\uDD72]|\uD804[\uDD74-\uDD76]|\uD804[\uDD82-\uDDB5]|\uD804[\uDDBF-\uDDC9]|𑇍|\uD804[\uDDD0-\uDDDF]|\uD804[\uDDE1-\uDDF4]|\uD804[\uDE00-\uDE11]|\uD804[\uDE13-\uDE2E]|𑈲|𑈳|𑈵|\uD804[\uDE38-\uDE3D]|\uD804[\uDE80-\uDE86]|𑊈|\uD804[\uDE8A-\uDE8D]|\uD804[\uDE8F-\uDE9D]|\uD804[\uDE9F-\uDEA9]|\uD804[\uDEB0-\uDEDE]|\uD804[\uDEE0-\uDEE2]|\uD804[\uDEF0-\uDEF9]|𑌂|𑌃|\uD804[\uDF05-\uDF0C]|𑌏|𑌐|\uD804[\uDF13-\uDF28]|\uD804[\uDF2A-\uDF30]|𑌲|𑌳|\uD804[\uDF35-\uDF39]|\uD804[\uDF3D-\uDF3F]|\uD804[\uDF41-\uDF44]|𑍇|𑍈|\uD804[\uDF4B-\uDF4D]|𑍐|𑍗|\uD804[\uDF5D-\uDF63]|\uD805[\uDC80-\uDCB2]|𑒹|\uD805[\uDCBB-\uDCBE]|𑓁|\uD805[\uDCC4-\uDCC7]|\uD805[\uDCD0-\uDCD9]|\uD805[\uDD80-\uDDB1]|\uD805[\uDDB8-\uDDBB]|𑖾|\uD805[\uDDC1-\uDDDB]|\uD805[\uDE00-\uDE32]|𑘻|𑘼|𑘾|\uD805[\uDE41-\uDE44]|\uD805[\uDE50-\uDE59]|\uD805[\uDE80-\uDEAA]|𑚬|𑚮|𑚯|𑚶|\uD805[\uDEC0-\uDEC9]|\uD805[\uDF00-\uDF19]|𑜠|𑜡|𑜦|\uD805[\uDF30-\uDF3F]|\uD806[\uDCA0-\uDCF2]|𑣿|\uD806[\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E]|\uD809[\uDC70-\uDC74]|\uD809[\uDC80-\uDD43]|\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38]|\uD81A[\uDE40-\uDE5E]|\uD81A[\uDE60-\uDE69]|𖩮|𖩯|\uD81A[\uDED0-\uDEED]|𖫵|\uD81A[\uDF00-\uDF2F]|\uD81A[\uDF37-\uDF45]|\uD81A[\uDF50-\uDF59]|\uD81A[\uDF5B-\uDF61]|\uD81A[\uDF63-\uDF77]|\uD81A[\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44]|\uD81B[\uDF50-\uDF7E]|\uD81B[\uDF93-\uDF9F]|𛀀|𛀁|\uD82F[\uDC00-\uDC6A]|\uD82F[\uDC70-\uDC7C]|\uD82F[\uDC80-\uDC88]|\uD82F[\uDC90-\uDC99]|𛲜|𛲟|\uD834[\uDC00-\uDCF5]|\uD834[\uDD00-\uDD26]|\uD834[\uDD29-\uDD66]|\uD834[\uDD6A-\uDD72]|𝆃|𝆄|\uD834[\uDD8C-\uDDA9]|\uD834[\uDDAE-\uDDE8]|\uD834[\uDF60-\uDF71]|\uD835[\uDC00-\uDC54]|\uD835[\uDC56-\uDC9C]|𝒞|𝒟|𝒢|𝒥|𝒦|\uD835[\uDCA9-\uDCAC]|\uD835[\uDCAE-\uDCB9]|𝒻|\uD835[\uDCBD-\uDCC3]|\uD835[\uDCC5-\uDD05]|\uD835[\uDD07-\uDD0A]|\uD835[\uDD0D-\uDD14]|\uD835[\uDD16-\uDD1C]|\uD835[\uDD1E-\uDD39]|\uD835[\uDD3B-\uDD3E]|\uD835[\uDD40-\uDD44]|𝕆|\uD835[\uDD4A-\uDD50]|\uD835[\uDD52-\uDEA5]|\uD835[\uDEA8-\uDEDA]|\uD835[\uDEDC-\uDF14]|\uD835[\uDF16-\uDF4E]|\uD835[\uDF50-\uDF88]|\uD835[\uDF8A-\uDFC2]|\uD835[\uDFC4-\uDFCB]|\uD836[\uDC00-\uDDFF]|\uD836[\uDE37-\uDE3A]|\uD836[\uDE6D-\uDE74]|\uD836[\uDE76-\uDE83]|\uD836[\uDE85-\uDE8B]|\uD83C[\uDD10-\uDD2E]|\uD83C[\uDD30-\uDD69]|\uD83C[\uDD70-\uDD9A]|\uD83C[\uDDE6-\uDE02]|\uD83C[\uDE10-\uDE3A]|\uD83C[\uDE40-\uDE48]|🉐|🉑|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6]|\uD869[\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34]|\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD86E[\uDC20-\uDFFF]|[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|[\uDB80-\uDBBE][\uDC00-\uDFFF]|\uDBBF[\uDC00-\uDFFD]|[\uDBC0-\uDBFE][\uDC00-\uDFFF]|\uDBFF[\uDC00-\uDFFD])|([֐־׀׃׆׈-׿߀-ߪߴߵߺ-ࠕࠚࠤࠨ࠮-ࡘ࡜-࢟‏יִײַ-ﬨשׁ-ﭏ؈؋؍؛-ي٭-ٯٱ-ەۥۦۮۯۺ-ܐܒ-ܯ݋-ޥޱ-޿ࢠ-࣢ﭐ-ﴽ﵀-﷏ﷰ-﷼﷾﷿ﹰ-﻾]|\uD802[\uDC00-\uDD1E]|\uD802[\uDD20-\uDE00]|𐨄|\uD802[\uDE07-\uDE0B]|\uD802[\uDE10-\uDE37]|\uD802[\uDE3B-\uDE3E]|\uD802[\uDE40-\uDEE4]|\uD802[\uDEE7-\uDF38]|\uD802[\uDF40-\uDFFF]|\uD803[\uDC00-\uDE5F]|\uD803[\uDE7F-\uDFFF]|\uD83A[\uDC00-\uDCCF]|\uD83A[\uDCD7-\uDFFF]|\uD83B[\uDC00-\uDDFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDE00-\uDEEF]|\uD83B[\uDEF2-\uDEFF]))");
    class l {
      constructor(d) {
        this.locale = d, this.language = new (a[d] || a.default)(d);
      }
      emit(d, g) {
        let m, p, h;
        switch (typeof d) {
          case "string":
          case "number":
            m = d;
            break;
          case "object":
            if (p = d.slice(1).map((f) => this.emit(f, g)), h = d[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            m = this[h](p, g);
            break;
          case "undefined":
            m = "";
            break;
          default:
            throw new Error("unexpected type in AST: " + typeof d);
        }
        return m;
      }
      concat(d) {
        let g = "";
        return d.forEach((m) => {
          g += m;
        }), g;
      }
      replace(d, g) {
        const m = parseInt(d[0], 10);
        return m < g.length ? g[m] : "$" + (m + 1);
      }
      plural(d) {
        const g = parseFloat(this.language.convertNumber(d[0], 10)), m = d.slice(1);
        return m.length ? this.language.convertPlural(g, m) : "";
      }
      gender(d) {
        const g = d[0], m = d.slice(1);
        return this.language.gender(g, m);
      }
      grammar(d) {
        const g = d[0], m = d[1];
        return m && g && this.language.convertGrammar(m, g);
      }
      wikilink(d) {
        let g, m = d[0];
        m.charAt(0) === ":" && (m = m.slice(1));
        const p = `./${m}`;
        return g = d.length === 1 ? m : d[1], `<a href="${p}" title="${m}">${g}</a>`;
      }
      extlink(d) {
        if (d.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${d[0]}">${d[1]}</a>`;
      }
      bidi(d) {
        const g = function(m) {
          const p = m.match(r);
          return p ? p[2] === void 0 ? "ltr" : "rtl" : null;
        }(d[0]);
        return g === "ltr" ? "‪" + d[0] + "‬" : g === "rtl" ? "‫" + d[0] + "‬" : d[0];
      }
      formatnum(d) {
        const g = !!d[1] && d[1] === "R", m = d[0];
        return typeof m == "string" || typeof m == "number" ? this.language.convertNumber(m, g) : m;
      }
      htmlattributes(d) {
        const g = {};
        for (let m = 0, p = d.length; m < p; m += 2)
          g[d[m]] = d[m + 1];
        return g;
      }
      htmlelement(d) {
        const g = d.shift(), m = d.shift();
        let p = d, h = "";
        for (const f in m)
          h += ` ${f}="${m[f]}"`;
        return Array.isArray(p) || (p = [p]), `<${g}${h}>${p.join("")}</${g}>`;
      }
    }
    class c {
      constructor(d, { wikilinks: g = !1 } = {}) {
        this.locale = d, this.wikilinks = g, this.emitter = new l(this.locale);
      }
      parse(d, g) {
        if (d.includes("{{") || d.includes("<") || this.wikilinks && d.includes("[")) {
          const m = function(p, { wikilinks: h = !1 } = {}) {
            let f = 0;
            function w(A) {
              return () => {
                for (let G = 0; G < A.length; G++) {
                  const Ue = A[G]();
                  if (Ue !== null)
                    return Ue;
                }
                return null;
              };
            }
            function v(A) {
              const G = f, Ue = [];
              for (let At = 0; At < A.length; At++) {
                const J = A[At]();
                if (J === null)
                  return f = G, null;
                Ue.push(J);
              }
              return Ue;
            }
            function y(A, G) {
              return () => {
                const Ue = f, At = [];
                let J = G();
                for (; J !== null; )
                  At.push(J), J = G();
                return At.length < A ? (f = Ue, null) : At;
              };
            }
            function C(A) {
              const G = A.length;
              return () => {
                let Ue = null;
                return p.slice(f, f + G) === A && (Ue = A, f += G), Ue;
              };
            }
            function S(A) {
              return () => {
                const G = p.slice(f).match(A);
                return G === null ? null : (f += G[0].length, G[0]);
              };
            }
            const E = S(/^\s+/), L = C("|"), N = C(":"), k = C("\\"), P = S(/^./), U = C("$"), X = S(/^\d+/), se = C('"'), ie = C("'"), ne = S(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), B = S(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), I = w([K, S(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function K() {
              const A = v([k, P]);
              return A === null ? null : A[1];
            }
            const Q = w([K, B]), ye = w([K, ne]);
            function $e() {
              const A = v([U, X]);
              return A === null ? null : ["REPLACE", parseInt(A[1], 10) - 1];
            }
            const xe = (Ne = S(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), R = function(A) {
              return A.toString();
            }, () => {
              const A = Ne();
              return A === null ? null : R(A);
            });
            var Ne, R;
            function z() {
              const A = v([L, y(0, Ao)]);
              if (A === null)
                return null;
              const G = A[1];
              return G.length > 1 ? ["CONCAT"].concat(G) : G[0];
            }
            function ae() {
              const A = v([xe, N, $e]);
              return A === null ? null : [A[0], A[2]];
            }
            function _() {
              const A = v([xe, N, Ao]);
              return A === null ? null : [A[0], A[2]];
            }
            function D() {
              const A = v([xe, N]);
              return A === null ? null : [A[0], ""];
            }
            const x = w([function() {
              const A = v([w([ae, _, D]), y(0, z)]);
              return A === null ? null : A[0].concat(A[1]);
            }, function() {
              const A = v([xe, y(0, z)]);
              return A === null ? null : [A[0]].concat(A[1]);
            }]), T = C("{{"), q = C("}}"), j = C("[["), W = C("]]"), H = C("["), re = C("]");
            function st() {
              const A = v([T, x, q]);
              return A === null ? null : A[1];
            }
            const Ve = w([function() {
              const A = v([y(1, Ao), L, y(1, To)]);
              return A === null ? null : [["CONCAT"].concat(A[0]), ["CONCAT"].concat(A[2])];
            }, function() {
              const A = v([y(1, Ao)]);
              return A === null ? null : [["CONCAT"].concat(A[0])];
            }]);
            function Ua() {
              let A = null;
              const G = v([j, Ve, W]);
              if (G !== null) {
                const Ue = G[1];
                A = ["WIKILINK"].concat(Ue);
              }
              return A;
            }
            function Ia() {
              let A = null;
              const G = v([H, y(1, zr), E, y(1, To), re]);
              return G !== null && (A = ["EXTLINK", G[1].length === 1 ? G[1][0] : ["CONCAT"].concat(G[1]), ["CONCAT"].concat(G[3])]), A;
            }
            const lo = S(/^[A-Za-z]+/);
            function Ir() {
              const A = S(/^[^"]*/), G = v([se, A, se]);
              return G === null ? null : G[1];
            }
            function Rr() {
              const A = S(/^[^']*/), G = v([ie, A, ie]);
              return G === null ? null : G[1];
            }
            function vs() {
              const A = S(/^\s*=\s*/), G = v([E, lo, A, w([Ir, Rr])]);
              return G === null ? null : [G[1], G[3]];
            }
            function _s() {
              const A = y(0, vs)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], A);
            }
            const zr = w([st, $e, Ua, Ia, function() {
              const A = y(1, I)();
              return A === null ? null : A.join("");
            }]), To = w([st, $e, Ua, Ia, function() {
              let A = null;
              const G = f, Ue = C("<"), At = S(/^\/?/), J = S(/^\s*>/), un = v([Ue, lo, _s, At, J]);
              if (un === null)
                return null;
              const Bn = f, ft = un[1], Do = y(0, To)(), Or = f, vd = v([C("</"), lo, J]);
              if (vd === null)
                return ["CONCAT", p.slice(G, Bn)].concat(Do);
              const rv = f, lv = vd[1], _d = un[2];
              if (function(co, za, jr, Hr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((co = co.toLowerCase()) !== (za = za.toLowerCase()) || Hr.allowedHtmlElements.indexOf(co) === -1)
                  return !1;
                const cv = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Oa = 0, uv = jr.length; Oa < uv; Oa += 2) {
                  const Gr = jr[Oa];
                  if (Hr.allowedHtmlCommonAttributes.indexOf(Gr) === -1 && (Hr.allowedHtmlAttributesByElement[co] || []).indexOf(Gr) === -1 || Gr === "style" && jr[Oa + 1].search(cv) !== -1)
                    return !1;
                }
                return !0;
              }(ft, lv, _d.slice(1)))
                A = ["HTMLELEMENT", ft, _d].concat(Do);
              else {
                const co = (za) => za.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                A = ["CONCAT", co(p.slice(G, Bn))].concat(Do, co(p.slice(Or, rv)));
              }
              return A;
            }, function() {
              const A = y(1, ye)();
              return A === null ? null : A.join("");
            }]), Ao = w([st, $e, function() {
              const A = y(1, Q)();
              return A === null ? null : A.join("");
            }]), Ra = function() {
              const A = y(0, To)();
              return A === null ? null : ["CONCAT"].concat(A);
            }();
            if (Ra === null || f !== p.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + p);
            return Ra;
          }(d, { wikilinks: this.wikilinks });
          return this.emitter.emit(m, g);
        }
        return this.simpleParse(d, g);
      }
      simpleParse(d, g) {
        return d.replace(/\$(\d+)/g, (m, p) => {
          const h = parseInt(p, 10) - 1;
          return g[h] !== void 0 ? g[h] : "$" + p;
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
          for (const m in d)
            if (m.indexOf("@") !== 0) {
              if (typeof d[m] == "object")
                return this.load(d);
              if (typeof d[m] != "string")
                throw new Error(`Invalid message for message ${m} in ${g} locale.`);
              break;
            }
          this.sourceMap.has(g) ? this.sourceMap.set(g, Object.assign(this.sourceMap.get(g), d)) : this.sourceMap.set(g, d);
        } else
          for (g in d)
            this.load(d[g], g);
      }
      getMessage(d, g) {
        const m = this.sourceMap.get(g);
        return m ? m[d] : null;
      }
      hasLocale(d) {
        return this.sourceMap.has(d);
      }
    }
    return class {
      constructor(i, { finalFallback: d = "en", messages: g, wikilinks: m = !1 } = {}) {
        this.locale = i, this.parser = new c(this.locale, { wikilinks: m }), this.messageStore = new u(), g && this.load(g, this.locale), this.finalFallback = d, this.wikilinks = m;
      }
      load(i, d) {
        return this.messageStore.load(i, d || this.locale);
      }
      i18n(i, ...d) {
        return this.parser.parse(this.getMessage(i), d);
      }
      setLocale(i) {
        this.locale = i, this.parser = new c(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(i) {
        let d = this.locale, g = 0;
        const m = this.getFallbackLocales(this.locale);
        for (; d; ) {
          const p = d.split("-");
          let h = p.length;
          do {
            const f = p.slice(0, h).join("-"), w = this.messageStore.getMessage(i, f);
            if (typeof w == "string")
              return w;
            h--;
          } while (h);
          d = m[g], g++;
        }
        return i;
      }
      registerParserPlugin(i, d) {
        l.prototype[i] = d;
      }
    };
  });
})(_f);
var G1 = _f.exports;
const Kd = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Sf = Symbol("banana-context");
function fe() {
  const e = O1(Sf);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function q1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = j1(new G1(e.locale, e));
  return {
    install: (n) => {
      n.provide(Sf, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = Kd(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = Kd(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Pn = window.Vue.ref, W1 = window.Vue.computed, kr = Pn(null), $r = Pn(null), Vr = Pn(null), La = Pn(null), Ou = Pn(null), Er = Pn(null), yf = Pn(null), Cf = Pn(null), ju = Pn(null), { validateFilters: X1, filtersValidatorError: K1 } = zu(), xf = {
  from: kr,
  to: $r,
  section: La,
  draft: Ou,
  page: Vr,
  revision: Er,
  "active-list": ju
}, Y1 = W1(() => ({
  type: yf.value,
  id: Cf.value
})), bf = (e, t) => {
  yf.value = e, Cf.value = t, vr("filter-type", e), t && vr("filter-id", t);
}, Q1 = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof br && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), xf[o].value = s;
  }
  t.delete("title"), Ta(Object.fromEntries(t));
}, Hu = (e, t) => {
  xf[e].value = t, vr(e, t);
}, J1 = (e) => {
  Hu("section", e);
}, Z1 = (e) => {
  Hu("page", e);
}, eS = (e) => {
  Hu("active-list", e);
}, Ta = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    T1(`Special:ContentTranslation${t}`, e)
  );
}, tS = () => {
  const e = fe(), t = new URLSearchParams(location.search);
  Vr.value = t.get("page"), kr.value = t.get("from"), $r.value = t.get("to"), La.value = t.get("section"), Er.value = t.get("revision"), ju.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = X1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  bf(n.type, n.id), K1.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, nS = () => {
  const e = new URLSearchParams(location.search);
  La.value = null, e.delete("section"), e.delete("title"), Ta(Object.fromEntries(e));
}, vr = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), Ta(Object.fromEntries(n));
}, oS = (e) => new URLSearchParams(location.search).get(e), sS = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), kr.value = e, $r.value = t, n.delete("title"), Ta(Object.fromEntries(n));
}, aS = () => {
  const e = new URLSearchParams(location.search);
  Vr.value = null, La.value = null, Ou.value = null, Er.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), Ta(Object.fromEntries(e));
}, iS = () => new URLSearchParams(location.search).get("force-quick-tutorial"), F = () => ({
  isQuickTutorialForced: iS,
  setLanguageURLParams: sS,
  setSectionURLParam: J1,
  setTranslationURLParams: Q1,
  initializeURLState: tS,
  clearTranslationURLParameters: aS,
  clearSectionURLParameter: nS,
  setUrlParam: vr,
  getUrlParam: oS,
  pageURLParameter: Vr,
  sourceLanguageURLParameter: kr,
  targetLanguageURLParameter: $r,
  sectionURLParameter: La,
  draftURLParameter: Ou,
  revisionURLParameter: Er,
  setPageURLParam: Z1,
  currentSuggestionFilters: Y1,
  setFilterURLParams: bf,
  activeDashboardTabParameter: ju,
  setActiveDashboardTabParameter: eS
}), rS = () => {
  const t = new mw.ForeignApi("https://meta.wikimedia.org/w/api.php", {
    anonymous: !0
  }).get({
    action: "sitematrix",
    format: "json",
    smtype: "language",
    smlangprop: "code|site",
    smsiteprop: "code"
  });
  return new Promise((n, o) => {
    t.then(({ sitematrix: s }) => {
      const a = ({ site: l }) => l && l.some((c) => c.code === "wiki" && !("closed" in c)), r = Object.values(s).filter(a).map((l) => l.code);
      n(r);
    }).fail((s) => {
      o(new Error("Supported language codes fetching failed: " + s));
    });
  });
};
function lS(e, t) {
  return b(this, null, function* () {
    const n = Z.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new ce(e, t, o.mt)
      )
    );
  });
}
function cS() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function uS(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = Z.getWikiDomainCode(e), r = Z.getWikiDomainCode(t), l = {
    action: "wblinktitles",
    fromsite: s.replace(r, a),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, c = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(c.postWithToken("csrf", l)).then((u) => {
    const d = {
      action: "tag",
      revid: u.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(c.postWithToken("csrf", d));
  });
}
const Lr = {
  fetchSupportedLanguageCodes: rS,
  fetchSupportedMTProviders: lS,
  fetchCXServerToken: cS,
  addWikibaseLink: uS
}, dS = window.Vue.ref, Ja = dS([]);
let Yd = !1;
function Aa() {
  return {
    fetchSupportedLanguageCodes: () => b(this, null, function* () {
      if (!Yd) {
        Yd = !0, Ja.value = yield Lr.fetchSupportedLanguageCodes();
        const t = mw.config.get(
          "ContentTranslationDomainCodeMapping"
        );
        Object.keys(t).forEach((n) => {
          if (n === "be-x-old")
            return;
          const o = t[n], s = Ja.value.indexOf(o);
          s > -1 && (Ja.value[s] = n);
        });
      }
    }),
    supportedLanguageCodes: Ja
  };
}
const gS = {
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
}, mS = {
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
}, pS = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], hS = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, fS = {
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
}, wS = {
  languages: gS,
  scriptgroups: mS,
  rtlscripts: pS,
  regiongroups: hS,
  territories: fS
};
var Oe = wS;
function Da(e) {
  return !!Oe.languages[e];
}
function io(e) {
  return Da(e) && Oe.languages[e].length === 1 ? Oe.languages[e][0] : !1;
}
function vS() {
  return Oe.languages;
}
function Pa(e) {
  var t = io(e);
  return t ? Pa(t) : Da(e) ? Oe.languages[e][0] : "Zyyy";
}
function Gu(e) {
  var t = io(e);
  return t ? Gu(t) : Da(e) && Oe.languages[e][1] || "UNKNOWN";
}
function ka(e) {
  var t = io(e);
  return t ? ka(t) : Da(e) && Oe.languages[e][2] || e;
}
function _S() {
  var e, t = {};
  for (e in Oe.languages)
    io(e) || (t[e] = ka(e));
  return t;
}
function kf(e) {
  var t, n, o = [];
  for (t in Oe.languages)
    if (!io(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Pa(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function SS(e) {
  return kf([e]);
}
function $f(e) {
  var t;
  for (t in Oe.scriptgroups)
    if (Oe.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function qu(e) {
  return $f(Pa(e));
}
function Vf(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = io(n) || n, a = qu(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Ef(e) {
  var t, n, o, s = {};
  for (t in Oe.languages)
    if (!io(t)) {
      for (n = 0; n < e.length; n++)
        if (Gu(t).includes(e[n])) {
          o = qu(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function yS(e) {
  return Ef([e]);
}
function CS(e) {
  var t, n, o, s = [];
  for (t = Vf(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function xS(e, t) {
  var n = ka(e) || e, o = ka(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Lf(e) {
  return Oe.rtlscripts.includes(Pa(e));
}
function bS(e) {
  return Lf(e) ? "rtl" : "ltr";
}
function kS(e) {
  return Oe.territories[e] || [];
}
function $S(e, t) {
  t.target ? Oe.languages[e] = [t.target] : Oe.languages[e] = [t.script, t.regions, t.autonym];
}
var O = {
  addLanguage: $S,
  getAutonym: ka,
  getAutonyms: _S,
  getDir: bS,
  getGroupOfScript: $f,
  getLanguages: vS,
  getLanguagesByScriptGroup: Vf,
  getLanguagesByScriptGroupInRegion: yS,
  getLanguagesByScriptGroupInRegions: Ef,
  getLanguagesInScript: SS,
  getLanguagesInScripts: kf,
  getLanguagesInTerritory: kS,
  getRegions: Gu,
  getScript: Pa,
  getScriptGroupOfLanguage: qu,
  isKnown: Da,
  isRedirect: io,
  isRtl: Lf,
  sortByScriptGroup: CS,
  sortByAutonym: xS
};
const Po = window.Vue.computed;
function Fe(e) {
  const t = Po(() => e.state.application.sourceLanguage), n = Po(() => e.state.application.targetLanguage), o = Po(
    () => e.state.application.currentMTProvider
  ), s = Po(
    () => O.getAutonym(t.value)
  ), a = Po(
    () => O.getAutonym(n.value)
  ), r = Po(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class ds {
  /**
   * @param {Object} options
   * @param {string} [options.description]
   * @param {number} [options.langlinkscount]
   * @param {number} [options.lastrevid]
   * @param {{ source: string, width: number, height: number }|null} [options.original]
   * @param {string|null} [options.pageimage]
   * @param {number} [options.pageid]
   * @param {string} [options.pagelanguage]
   * @param {{wikibase_item: string}} [options.pageprops]
   * @param {object} [options.pageviews]
   * @param {{ source: string, width: number, height: number }|null} [options.thumbnail]
   * @param {string} [options.title]
   * @param {{size}[]} [options.revisions]
   * @param {string|undefined} [options._alias] The normalized page title or the title from which this page is a redirection, if any. See mw/api/page.js#fetchMetadata
   * @param {string|null} [options.content]
   * @param {PageSection[]} [options.sections]
   */
  constructor({
    description: t,
    langlinkscount: n,
    lastrevid: o,
    original: s = null,
    pageimage: a = null,
    pageid: r,
    pagelanguage: l,
    pageprops: c,
    pageviews: u,
    thumbnail: i = null,
    title: d,
    revisions: g,
    _alias: m,
    content: p = null,
    sections: h = []
  } = {}) {
    var f;
    this.language = l, this.title = d, this.pageId = r, this.description = t, this.image = s, this.imageName = a, this.pageprops = c, this.pageviews = u, this.thumbnail = i, this.langLinksCount = n, this.articleSize = (f = g == null ? void 0 : g[0]) == null ? void 0 : f.size, this.revision = o, this.alias = m, this.wikidataId = c == null ? void 0 : c.wikibase_item, this.content = p, this.sections = h;
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
    return t === no.LEAD_SECTION_DUMMY_TITLE ? this.leadSection : (this.sections || []).find(
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
  /**
   * @param {number} width
   * @returns {string|null}
   */
  getImage(t) {
    if (!this.image)
      return null;
    if (!t)
      return this.image.source;
    const n = this.thumbnail.source, o = new RegExp(
      `/\\d+px-${this.imageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`
    );
    return n.replace(o, `/${t}px-${this.imageName}`);
  }
}
class VS {
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
function ES() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const LS = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), ES();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, TS = (e, t) => {
  let n, o;
  return t ? (n = LS(e), o = n.$element.find(
    "section[rel='cx:Section']"
  ).map((a, r) => {
    const l = $(r).data("view").getModel();
    if (l)
      return ve.dm.converter.getDomFromNode(
        l,
        // CLIPBOARD_MODE helps to copy the data-mw from elsewhere to
        // to the local nodes
        ve.dm.Converter.static.CLIPBOARD_MODE
      ).body.children[0];
  }), n.destroy()) : o = $(e).filter("section[rel='cx:Section']"), o;
}, AS = (e, t) => {
  const n = Array.from(
    TS(e, t)
  );
  return DS(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...r] = s;
      let l;
      const c = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = !1 : (l = !0, r.unshift(a));
      const u = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (i) => new gt({
          sentences: PS(i),
          node: i
        })
      );
      return new no({ id: c, subSections: u, isLeadSection: l });
    }
  );
}, DS = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, PS = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new eo({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Tf = {
  convertSegmentedContentToPageSections: AS
}, Wu = 120, BS = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Wu,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return Z.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (i, d) => Ye(me({}, i), { [d.to]: d.from }),
      {}
    ), u = (s.query.normalized || []).reduce(
      (i, d) => Ye(me({}, i), {
        [d.to]: d.from
      }),
      {}
    );
    return a.map((i) => {
      const d = u[i.title] || l[i.title] || null;
      return new ds(Ye(me({}, i), { _alias: d }));
    });
  });
}, FS = (e, t) => {
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
  return Z.getApi(e).get(n).then((s) => {
    var c, u;
    const a = s.query.pages;
    if (!a || !a.length || (c = a[0]) != null && c.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (u = a[0].pageprops) == null ? void 0 : u.wikibase_item;
    return l ? Object.freeze(new VS(l, r)) : null;
  });
}, NS = (e, t, n) => {
  const o = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "langlinks",
    titles: n.join("|"),
    lllang: t,
    origin: "*",
    redirects: !0
  };
  return Z.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((l) => {
    var c, u;
    return (u = (c = l.langlinks) == null ? void 0 : c[0]) == null ? void 0 : u["*"];
  }).filter((l) => !!l));
}, MS = (e, t, n, o = null) => {
  const s = new Promise((r) => {
    const l = {
      action: "parse",
      page: n,
      meta: "siteinfo",
      prop: "sections",
      format: "json",
      redirects: !0,
      formatversion: 2
    };
    Z.getApi(e).get(l).then((u) => {
      var i;
      return r(((i = u == null ? void 0 : u.parse) == null ? void 0 : i.sections) || []);
    }).fail(() => r([]));
  }).then(
    (r) => r.filter((l) => l.toclevel === 1).map((l) => ({
      title: l.line,
      id: l.number
    }))
  ), a = US(
    e,
    t,
    n,
    o
  );
  return Promise.all([a, s]).then(
    ([r, l]) => {
      const c = Tf.convertSegmentedContentToPageSections(
        r,
        !1
        // No need to resolve references. Content can be used as it is
      );
      return c.forEach((u) => {
        const i = l.find((d) => d.id === u.id);
        u.originalTitle = (i == null ? void 0 : i.title) || "";
      }), new ds({
        sections: c,
        content: r,
        pagelanguage: e,
        title: n
      });
    }
  );
}, US = (e, t, n, o = null) => {
  const s = Z.getWikiDomainCode(e), a = Z.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, l += "/$revision");
  const c = Z.getCXServerUrl(
    l,
    r
  );
  return fetch(c).then((u) => u.json()).then((u) => u.segmentedContent);
}, IS = (e) => {
  const t = A1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Wu,
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
  return new Promise((o) => {
    Z.getApi(e).get(n).then((a) => {
      var r;
      return o(((r = a == null ? void 0 : a.query) == null ? void 0 : r.pages) || []);
    }).fail(() => o([]));
  }).then((o) => o.map((s) => new ds(s)));
}, RS = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount|pageprops",
    piprop: "thumbnail",
    pithumbsize: Wu,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return Z.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.filter(({ pageprops: a }) => !(!a || "disambiguation" in a)).sort((a, r) => a.index - r.index).map(
      (a) => new ds(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => (mw.cx.eventlogging.stats.articleSearchFailed(), []));
}, Vo = {
  fetchPages: BS,
  fetchLanguageTitles: FS,
  fetchPageContent: MS,
  fetchNearbyPages: IS,
  searchPagesByTitlePrefix: RS,
  fetchLanguageLinksForLanguage: NS
}, zS = window.Vuex.useStore, Eo = () => {
  const e = zS();
  return (t, n) => {
    n = n.filter(
      (a) => !!a && !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const r = n.slice(a, a + o), l = Vo.fetchPages(t, r).then(
        (c) => c.forEach(
          (u) => e.commit("mediawiki/addPage", u)
        )
      );
      s.push(l);
    }
    return Promise.all(s);
  };
}, OS = window.Vuex.useStore, Tr = () => {
  const e = OS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (m) => m.matchesFilter(o.value)
  ), r = (g) => a().slice(
    s * g,
    s * (g + 1)
  ), l = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (m) => m.matchesFilter(o.value)
  ), c = (g) => l().slice(
    s * g,
    s * (g + 1)
  ), u = (g, m, p) => {
    const h = {
      id: g,
      type: ee
    }, f = e.getters[m](h);
    return f != null && f.id && e.commit(p, f == null ? void 0 : f.id), f;
  };
  return {
    getFilteredPageSuggestions: l,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: c,
    getSectionSuggestionsSliceByIndex: r,
    getNextUnseenSectionSuggestionByCollection: (g) => u(
      g,
      "suggestions/getNextUnseenSectionSuggestionByFilter",
      "suggestions/removeSectionSuggestion"
    ),
    getNextUnseenPageSuggestionByCollection: (g) => u(
      g,
      "suggestions/getNextUnseenPageSuggestionByFilter",
      "suggestions/removePageSuggestion"
    )
  };
};
class oo {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} [options.targetTitle]
   * @param {number} options.langLinksCount
   * @param {string} options.wikidataId
   * @param {number} options.size
   * @param {number|null} options.leadSectionSize
   * @param {string|null} options.suggestionSeed
   * @param {{ type: String, id: String }|null} options.suggestionProvider
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: o,
    targetTitle: s,
    langLinksCount: a,
    wikidataId: r,
    size: l,
    leadSectionSize: c = null,
    suggestionSeed: u = null,
    suggestionProvider: i = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = r, this.size = l, this.leadSectionSize = c, this.langLinksCount = a, this.suggestionProvider = i, this.suggestionSeed = u, this.isListable = !0, this.seen = !1, this.inFeaturedCollection = !1;
  }
  /**
   * @returns {string}
   */
  get id() {
    return `${this.sourceLanguage}/${this.targetLanguage}/${this.sourceTitle}`;
  }
  /**
   * @param {{ id: string, type: string }} filter
   */
  matchesFilter(t) {
    var n, o;
    return ((n = this.suggestionProvider) == null ? void 0 : n.type) === t.type && ((o = this.suggestionProvider) == null ? void 0 : o.id) === t.id;
  }
}
class on {
  /**
   * Creates an instance of SectionSuggestion.
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} options.targetTitle
   * @param {Object<string, string>} options.present Object that maps section titles in source article to already existing section titles in target article
   * @param {Object<string, string>} options.missing
   * @param {Object<string, number>} options.sourceSectionSizes
   * @param {string[]} options.sourceSections Array of all section titles in source article ordered by their order of appearance in the article
   * @param {string[]} options.targetSections Array of all section titles in target article ordered by their order of appearance in the article
   * @param {string|null} options.suggestionSeed
   * @param {boolean} options.isListable A boolean indicating whether we should display this section suggestion inside dashboard suggestion list
   * @param {{ type: String, id: String }|null} options.suggestionProvider
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: o,
    targetTitle: s,
    present: a,
    missing: r,
    sourceSectionSizes: l = {},
    sourceSections: c = [],
    targetSections: u = [],
    suggestionSeed: i = null,
    isListable: d = !0,
    suggestionProvider: g = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSectionSizes = l, this.sourceSections = c, this.targetSections = u, this.suggestionSeed = i, this.isListable = d, this.suggestionProvider = g, this.seen = !1, this.inFeaturedCollection = !1;
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
   * Get the size of a specific section
   * @param {string} sectionTitle - The title of the section
   * @returns {number} The size of the section in bytes
   */
  getSectionSize(t) {
    var n;
    return (n = this.sourceSectionSizes) == null ? void 0 : n[t];
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
   * @param {{ id: string, type: string }} filter
   */
  matchesFilter(t) {
    var n, o;
    return ((n = this.suggestionProvider) == null ? void 0 : n.type) === t.type && ((o = this.suggestionProvider) == null ? void 0 : o.id) === t.id;
  }
}
const Af = [
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
], jS = [
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
], HS = [
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
], GS = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], qS = [
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
], WS = {
  en: Af,
  es: jS,
  bn: HS,
  fr: GS,
  de: qS
};
class rs {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s, this.inFeaturedCollection = !1;
  }
}
class Xu {
  /**
   * @param {string} name
   * @param {string|null} description
   * @param {string|null} end_date
   * @param {number} articles_count
   * @param {object} articles_by_language_count
   */
  constructor({
    name: t,
    description: n,
    end_date: o,
    articles_count: s,
    articles_by_language_count: a
  }) {
    this.name = t, this.description = n, this.endDate = o, this.articlesCount = s, this.articlesByLanguageCount = a;
  }
}
class Df extends oo {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} [options.targetTitle]
   * @param {number} options.langLinksCount
   * @param {string} options.wikidataId
   * @param {string} options.size
   * @param {{ type: string, id: string }|null} options.suggestionProvider
   * @param {{ name: string, description: string|null, end_date: string|null, articles_count: number, articles_by_language_count: object }} collection
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: o,
    targetTitle: s,
    langLinksCount: a,
    wikidataId: r,
    size: l,
    suggestionProvider: c = null,
    collection: u = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      langLinksCount: a,
      wikidataId: r,
      size: l,
      suggestionProvider: c
    }), this.collection = new Xu(u);
  }
  /**
   * @returns {boolean}
   */
  collectionMatchesProvider() {
    var t;
    return this.collection.name === ((t = this.suggestionProvider) == null ? void 0 : t.id);
  }
}
class Pf extends on {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} options.targetTitle
   * @param {Object<string, string>} options.present Object that maps section titles in source article to already existing section titles in target article
   * @param {Object<string, string>} options.missing
   * @param {Object<string, number>} options.sourceSectionSizes
   * @param {string[]} options.sourceSections Array of all section titles in source article ordered by their order of appearance in the article
   * @param {string[]} options.targetSections Array of all section titles in target article ordered by their order of appearance in the article
   * @param {boolean} options.isListable A boolean indicating whether we should display this section suggestion inside dashboard suggestion list
   * @param {{ type: String, id: String }|null} options.suggestionProvider
   * @param {{ name: string, description: string|null, end_date: string|null, articles_count: number, articles_by_language_count: object }} collection
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: o,
    targetTitle: s,
    present: a,
    missing: r,
    sourceSectionSizes: l,
    sourceSections: c = [],
    targetSections: u = [],
    isListable: i = !0,
    suggestionProvider: d = null,
    collection: g = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      present: a,
      missing: r,
      sourceSectionSizes: l,
      sourceSections: c,
      targetSections: u,
      isListable: i,
      suggestionProvider: d
    }), this.collection = new Xu(g);
  }
  /**
   * @returns {boolean}
   */
  collectionMatchesProvider() {
    var t;
    return this.collection.name === ((t = this.suggestionProvider) == null ? void 0 : t.id);
  }
}
let Za = null;
const Bf = (e) => {
  if (Za)
    return Promise.resolve(Za);
  const t = "https://en.wikipedia.org/w/api.php", n = new URLSearchParams({
    action: "query",
    meta: "globaluserinfo",
    guiuser: e,
    guiprop: "editcount",
    formatversion: 2,
    origin: "*",
    format: "json"
  }), o = t + "?" + n;
  return fetch(o).then((s) => s.json()).then((s) => (Za = s.query.globaluserinfo.editcount, Za)).catch((s) => {
    mw.log.error("Error while fetching global edit count for user. ", s);
  });
}, XS = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits", KS = () => b(void 0, null, function* () {
  if (mw.user.isAnon())
    return !1;
  const e = mw.user.getName();
  return (yield Bf(e)) < 100;
}), Xe = {
  stub: "stub",
  easy: "easy",
  medium: "medium",
  hard: "hard",
  unknown: "unknown"
}, Ff = {
  easy: 2500,
  medium: 1e4,
  hard: 4e4
}, bu = {
  easy: 1e3,
  medium: 4e3,
  hard: 12e3
}, Nf = (e, t) => !e || e < 0 ? Xe.unknown : e < t.easy ? Xe.stub : e < t.medium ? Xe.easy : e < t.hard ? Xe.medium : Xe.hard, Mf = (e) => Nf(e, Ff), Ku = (e) => Nf(e, bu), YS = (e) => {
  if (!e)
    return !1;
  const t = Mf(e);
  return t === Xe.stub || t === Xe.easy;
}, QS = (e) => {
  if (!e)
    return !1;
  const t = Ku(e);
  return t === Xe.stub || t === Xe.easy;
}, Uf = (e) => e ? Ku(e) === Xe.easy : !1;
class If {
  /**
   * @param {string} name
   * @param {string} description
   * @param {string} communityName
   * @param {string} link
   * @param {string} language Useful for logging/debugging purposes
   */
  constructor(t, n, o, s, a) {
    this.name = t, this.description = n, this.communityName = o, this.link = s, this.language = a;
  }
}
const JS = Af, ln = 6, ZS = (e, t) => b(void 0, null, function* () {
  if (yield KS()) {
    let o;
    e ? e === "/sections" && (o = bu) : (o = Ff, Gt || (t.lead_section = !0, o = bu)), o && (t.min_size = o[Xe.easy], t.max_size = o[Xe.medium] - 1);
  } else
    !Gt && e !== "/sections" && (t.lead_section = !0);
}), Et = (n) => b(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
  let o = mw.config.get("wgRecommendToolAPIURL");
  yield ZS(e, t), e && (o += e);
  const s = new URL(o);
  Object.keys(t).forEach((a) => {
    t[a] !== null && t[a] !== void 0 && s.searchParams.append(a, t[a]);
  });
  try {
    const a = yield fetch(s);
    if (!a.ok)
      throw new Error("Failed to load data from server");
    return a.json();
  } catch (a) {
    return mw.log.error(
      "Error while fetching suggestions from Recommendation API",
      a
    ), mw.cx.eventlogging.stats.recommendationFailed(), null;
  }
});
function ey() {
  return b(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Et({ urlPostfix: t, urlParams: e })) || [], o = {};
      for (const s in n)
        o[s] = n[s].map(
          (a) => new Xu(a)
        );
      return o;
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), {};
    }
  });
}
function ty(e, t, n, o) {
  const s = {
    collection: e
  };
  return t && t.length ? s.qids = t.join("|") : n && o && o.length && (s.language = n, s.titles = o.join("|")), Et({
    urlPostfix: "/page-collection-membership",
    urlParams: s
  });
}
function ny(e) {
  const n = Z.getApi(e).get({
    action: "query",
    meta: "cxconfig",
    format: "json",
    formatversion: 2
  });
  return new Promise((o) => {
    n.then((s) => {
      var r;
      const a = (r = s == null ? void 0 : s.query) == null ? void 0 : r.cxconfig;
      o(
        a ? new If(
          a.featuredcollectionname,
          a.featuredcollectiondescription,
          a.featuredcollectioncommunityname,
          a.featuredcollectionlink,
          e
        ) : null
      );
    });
  });
}
function oy(s, a) {
  return b(this, arguments, function* (e, t, n = null, o = ln) {
    const r = {
      source: e,
      target: t,
      count: o
    };
    n && (r.seed = n);
    const { recommendations: l } = (yield Et({ urlParams: r })) || {};
    return (l || []).map(
      (c) => new oo({
        sourceTitle: c.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: c.wikidata_id,
        size: c.size,
        leadSectionSize: c.lead_section_size || null,
        langLinksCount: parseInt(c.sitelink_count),
        suggestionSeed: n
      })
    );
  });
}
const sy = (e, t) => b(void 0, null, function* () {
  const n = {
    source: e,
    target: t,
    count: ln,
    search_algorithm: "mostpopular"
  }, { recommendations: o } = (yield Et({ urlParams: n })) || {};
  return (o || []).map(
    (s) => new oo({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      size: s.size,
      leadSectionSize: s.lead_section_size || null,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), ay = (e, t) => b(void 0, null, function* () {
  const n = {
    source: e,
    target: t,
    count: ln,
    search_algorithm: "mostpopular"
  }, o = "/sections", { recommendations: s } = (yield Et({ urlParams: n, urlPostfix: o })) || {};
  return (s || []).map(
    (a) => new on({
      sourceLanguage: e,
      targetLanguage: t,
      sourceTitle: a.source_title,
      targetTitle: a.target_title,
      sourceSections: a.source_sections,
      targetSections: a.target_sections,
      present: a.present,
      missing: a.missing,
      sourceSectionSizes: a.source_section_sizes
    })
  );
}), iy = (l) => b(void 0, [l], function* ({
  sourceLanguage: e,
  targetLanguage: t,
  collectionName: n = null,
  count: o = ln,
  continueOffset: s = null,
  continueSeed: a = null,
  featuredCollection: r = null
}) {
  const c = {
    source: e,
    target: t,
    count: o,
    collections: !0
  };
  n && (c.seed = n, s !== null && (c.continue_offset = s), a !== null && (c.continue_seed = a)), r && (c.featured_collection = r);
  const u = (yield Et({ urlParams: c })) || {};
  return {
    recommendations: (u.recommendations || []).map(
      (d) => new Df({
        sourceTitle: d.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: d.wikidata_id,
        langLinksCount: parseInt(d.langlinks_count),
        collection: d.collection
      })
    ),
    continue_offset: u.continue_offset,
    continue_seed: u.continue_seed
  };
}), ry = (l) => b(void 0, [l], function* ({
  sourceLanguage: e,
  targetLanguage: t,
  collectionName: n = null,
  count: o = ln,
  continueOffset: s = null,
  continueSeed: a = null,
  featuredCollection: r = null
}) {
  const c = {
    source: e,
    target: t,
    count: o,
    collections: !0
  };
  n && (c.seed = n, s !== null && (c.continue_offset = s), a !== null && (c.continue_seed = a)), r && (c.featured_collection = r);
  const i = (yield Et({ urlPostfix: "/sections", urlParams: c })) || {};
  return {
    recommendations: (i.recommendations || []).map(
      (g) => new Pf({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: g.source_title,
        targetTitle: g.target_title,
        sourceSections: g.source_sections,
        targetSections: g.target_sections,
        present: g.present,
        missing: g.missing,
        collection: g.collection,
        sourceSectionSizes: g.source_section_sizes
      })
    ),
    continue_offset: i.continue_offset,
    continue_seed: i.continue_seed
  };
});
function ly(e, t, n) {
  return b(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = Z.getCXServerUrl(
      `/suggest/sections/${o.join("/")}?include_section_sizes=true`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new on(a) : null;
  });
}
function cy(e, t, n = null) {
  return b(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: ln
    };
    n && (o.seed = n);
    const s = "/sections", { recommendations: a } = (yield Et({ urlPostfix: s, urlParams: o })) || {};
    return (a || []).map(
      (r) => new on({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: r.source_title,
        targetTitle: r.target_title,
        sourceSections: r.source_sections,
        targetSections: r.target_sections,
        present: r.present,
        missing: r.missing,
        sourceSectionSizes: r.source_section_sizes,
        seed: n
      })
    );
  });
}
function uy(a) {
  return b(this, arguments, function* ({
    sourceLanguage: e,
    targetLanguage: t,
    topics: n,
    count: o = ln,
    featuredCollection: s = null
  }) {
    const r = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    s && (r.featured_collection = s);
    const { recommendations: l } = (yield Et({ urlParams: r })) || {};
    return (l || []).map(
      (c) => new oo({
        sourceTitle: c.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: c.wikidata_id,
        size: c.size,
        leadSectionSize: c.lead_section_size || null,
        langLinksCount: parseInt(c.sitelink_count)
      })
    );
  });
}
function dy(a) {
  return b(this, arguments, function* ({
    sourceLanguage: e,
    targetLanguage: t,
    topics: n,
    count: o = ln,
    featuredCollection: s = null
  }) {
    const r = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    s && (r.featured_collection = s);
    const l = "/sections", { recommendations: c } = (yield Et({ urlPostfix: l, urlParams: r })) || {};
    return (c || []).map(
      (u) => new on({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: u.source_title,
        targetTitle: u.target_title,
        sourceSections: u.source_sections,
        targetSections: u.target_sections,
        present: u.present,
        missing: u.missing,
        sourceSectionSizes: u.source_section_sizes
      })
    );
  });
}
function gy(a) {
  return b(this, arguments, function* ({
    sourceLanguage: e,
    targetLanguage: t,
    countries: n,
    count: o = ln,
    featuredCollection: s = null
  }) {
    const r = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    };
    s && (r.featured_collection = s);
    const { recommendations: l } = (yield Et({ urlParams: r })) || {};
    return (l || []).map(
      (c) => new oo({
        sourceTitle: c.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: c.wikidata_id,
        size: c.size,
        leadSectionSize: c.lead_section_size || null,
        langLinksCount: parseInt(c.sitelink_count)
      })
    );
  });
}
function my(a) {
  return b(this, arguments, function* ({
    sourceLanguage: e,
    targetLanguage: t,
    countries: n,
    count: o = ln,
    featuredCollection: s = null
  }) {
    const r = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    };
    s && (r.featured_collection = s);
    const l = "/sections", { recommendations: c } = (yield Et({ urlPostfix: l, urlParams: r })) || {};
    return (c || []).map(
      (u) => new on({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: u.source_title,
        targetTitle: u.target_title,
        sourceSections: u.source_sections,
        targetSections: u.target_sections,
        present: u.present,
        missing: u.missing,
        sourceSectionSizes: u.source_section_sizes
      })
    );
  });
}
function py(e) {
  return b(this, null, function* () {
    if (mw.user.isAnon())
      return [];
    const t = {
      action: "query",
      format: "json",
      list: "usercontribs",
      ucuser: mw.user.getName(),
      ucnamespace: mw.config.get("wgNamespaceIds")[""],
      // Main namespace
      // we need at maximum 12 (maxSuggestionsSlices*maxSuggestionsPerSlice) suggestion seeds
      // 100 user contributions should be enough to produce at least 12 of them.
      uclimit: 100,
      formatversion: 2
    }, n = Z.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function hy(e, t) {
  return b(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = Z.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function fy(e) {
  const t = JS.map((o) => encodeURIComponent(o)).join("|"), n = Z.getCXServerUrl(
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
const wy = (e, t, n) => {
  const o = {
    assert: "user",
    action: "cxfavoritesuggestions",
    listaction: "add",
    title: e,
    from: t,
    to: n
  }, s = new mw.Api();
  return Promise.resolve(s.postWithToken("csrf", o)).catch((a) => {
    mw.log.error("Error while marking suggestion as favorite", a);
  });
}, vy = (e) => {
  const t = {
    assert: "user",
    action: "cxfavoritesuggestions",
    listaction: "remove",
    title: e.title,
    from: e.sourceLanguage,
    to: e.targetLanguage
  }, n = new mw.Api();
  return Promise.resolve(n.postWithToken("csrf", t)).catch((o) => {
    mw.log.error("Error while unmarking favorite suggestion", o);
  });
}, _y = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationfavoritesuggestions"
  }, t = new mw.Api();
  return new Promise((n) => {
    t.get(e).then(
      (s) => n(
        s.query.contenttranslationfavoritesuggestions.suggestions || []
      )
    ).fail(() => {
      mw.log.error("Error while fetching favorite suggestions"), n([]);
    });
  }).then(
    (n) => n.map((o) => new rs(o))
  );
}, ge = {
  fetchFavorites: _y,
  fetchPageSuggestions: oy,
  fetchSectionSuggestion: ly,
  fetchSectionSuggestions: cy,
  fetchAppendixTargetSectionTitles: fy,
  fetchArticleSections: hy,
  markFavorite: wy,
  unmarkFavorite: vy,
  fetchUserEdits: py,
  fetchMostPopularPageSuggestions: sy,
  fetchMostPopularSectionSuggestions: ay,
  fetchPageSuggestionsByTopics: uy,
  fetchSectionSuggestionsByTopics: dy,
  fetchPageSuggestionsByCountries: gy,
  fetchSectionSuggestionsByCountries: my,
  fetchPageCollectionGroups: ey,
  fetchPageSuggestionsByCollections: iy,
  fetchSectionSuggestionsByCollections: ry,
  fetchFeaturedCollectionDataByLanguage: ny,
  fetchPageCollectionMembership: ty
}, Sy = window.Vuex.useStore, gs = () => {
  const e = Sy(), { sourceLanguage: t, targetLanguage: n } = Fe(e), o = (l) => {
    if (!l)
      return !1;
    const c = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((d) => d.sourceTitle);
    return !c.includes(l.sourceTitle) && !i.includes(l.sourceTitle);
  }, s = (l) => {
    const { pageSuggestions: c } = e.state.suggestions;
    return !c.some(
      (i) => i.sourceLanguage === l.sourceLanguage && i.targetLanguage === l.targetLanguage && i.sourceTitle === l.sourceTitle
    ) && o(l);
  }, a = (l) => e.state.suggestions.sectionSuggestions.some(
    (c) => c.sourceLanguage === l.sourceLanguage && c.targetLanguage === l.targetLanguage && c.sourceTitle === l.sourceTitle
  );
  return {
    isPageSuggestionValid: s,
    isSectionSuggestionValid: (l) => {
      if (!l)
        return !1;
      const c = e.state.suggestions.appendixSectionTitles[n.value] || [];
      return !a(l) && o(l) && l.isValid(c);
    },
    sectionSuggestionExists: a
  };
};
function yy(e) {
  const t = [...e];
  for (let n = t.length - 1; n > 0; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [t[n], t[o]] = [t[o], t[n]];
  }
  return t;
}
class Cy {
  /**
   * Creates an instance of SuggestionSeedCollection.
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   */
  constructor({ sourceLanguage: t, targetLanguage: n }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.seeds = [];
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
  setSeeds(t) {
    this.seeds = yy(t);
  }
}
const xy = window.Vuex.useStore, Yu = window.Vue.ref, by = Yu([]), ky = Yu([]);
let il = !1, rl = !1, Qd = !1;
const ei = Yu([]);
let Cs = null;
const ll = {
  page: by,
  section: ky
}, Rf = () => {
  const e = xy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = F(), o = () => b(void 0, null, function* () {
    rl || (ei.value = yield ge.fetchUserEdits(t.value).then((u) => (rl = !0, u)));
  }), s = () => b(void 0, null, function* () {
    let u = e.getters["translator/getTranslationsByStatus"]("published");
    if (u = u.filter(
      (i) => i.sourceLanguage === t.value
    ), u.length && !il)
      return il = !0, u.map(
        (i) => i.sourceTitle
      );
    if (il = !0, !rl && (yield o(), ei.value.length > 0))
      return ei.value;
    if (!Qd) {
      const i = yield ge.fetchUserEdits(n.value).then((d) => (Qd = !0, d));
      if (i.length)
        return Vo.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (u) => {
    let i = ll[u].value.find(
      (d) => d.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new Cy({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), ll[u].value.push(i)), i;
  }, r = () => b(void 0, null, function* () {
    let u = !1, i = [];
    do {
      i = yield s(), i || (u = !0);
      for (const d in ll) {
        const g = a(d);
        g.setSeeds([
          ...g.seeds,
          ...i || []
        ]);
      }
    } while (!u && !(i != null && i.length));
  }), l = () => Cs || (Cs = r(), Cs.finally(() => {
    Cs = null;
  }));
  return {
    getSuggestionSeed: (u) => b(void 0, null, function* () {
      let i = a(u);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: o,
    previousEditsInSource: ei
  };
}, $y = 5;
function $o(e) {
  return b(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < $y);
  });
}
const Vy = window.Vuex.useStore, Ey = () => {
  const e = Vy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = F(), { getSuggestionSeed: o } = Rf(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = gs(), l = {
    id: an,
    type: We
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const d = [];
      return yield $o(() => b(void 0, null, function* () {
        const g = yield o("page");
        let m = yield ge.fetchPageSuggestions(
          t.value,
          n.value,
          g || null
        );
        return m = m.filter(
          (p) => a(p)
        ), m = m.slice(0, i), d.push(...m), d.length >= i;
      })), d.forEach(
        (g) => g.suggestionProvider = l
      ), d;
    }),
    fetchSectionSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const d = [];
      return yield $o(() => b(void 0, null, function* () {
        const g = yield o("section"), m = yield ge.fetchSectionSuggestions(
          t.value,
          n.value,
          g || null
        );
        if (!m)
          return !1;
        let p = m.filter(
          (f) => s(f)
        );
        const h = m.filter(
          (f) => !s(f)
        );
        return p = p.slice(0, i), d.push(...p), h.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), d.length >= i;
      })), d.forEach(
        (g) => g.suggestionProvider = l
      ), d;
    })
  };
}, Qu = window.Vue.ref, xs = "ungrouped", Jd = Qu({}), Zd = Qu({}), eg = Qu(!1);
let cl = null;
const Ar = () => {
  const e = () => b(void 0, null, function* () {
    try {
      const n = yield ge.fetchPageCollectionGroups(), o = Object.fromEntries(
        Object.keys(n).sort((s, a) => s === xs ? 1 : a === xs ? -1 : s.localeCompare(a)).map((s) => [s, n[s]])
      );
      o[xs] && (o[xs] = o[xs].sort(
        (s, a) => s.name.localeCompare(a.name)
      )), Jd.value = o, Zd.value = Object.values(n).flat(), eg.value = !0;
    } catch (n) {
      mw.log.error("Failed to fetch page collections", n);
    }
  });
  return {
    fetchPageCollectionGroups: () => (cl || (cl = e()), cl),
    pageCollectionGroupsFetched: eg,
    pageCollectionGroups: Jd,
    pageCollections: Zd
  };
}, ul = window.Vue.computed, Dr = window.Vue.ref, Ly = window.Vue.watch, Ty = new mw.cx.SiteMapper(), _r = Ty.getCurrentWikiLanguageCode(), Ay = mw.config.get(
  "wgContentTranslationFeaturedCollection"
), Dy = mw.config.get(
  "wgContentTranslationFeaturedCollectionCommunityName"
), Py = mw.config.get(
  "wgContentTranslationFeaturedCollectionDescription"
), By = mw.config.get(
  "wgContentTranslationFeaturedCollectionLink"
), zf = Dr({
  [_r]: new If(
    Ay,
    Py,
    Dy,
    By,
    _r
  )
}), ku = Dr({
  [_r]: Promise.resolve()
}), $u = Dr({
  [_r]: !0
});
let tg = !1;
const ng = (e) => {
  if (!e || ku.value[e])
    return;
  const t = ge.fetchFeaturedCollectionDataByLanguage(e).then((n) => {
    n && (zf.value[e] = n), $u.value[e] = !0;
  }).catch((n) => {
    $u.value[e] = !0, console.error("Failed to fetch featured collection:", n);
  });
  ku.value[e] = t;
}, Fy = (e, t) => !e || !Array.isArray(t) ? !1 : t.some(
  (n) => n.name.toLowerCase() === e.toLowerCase()
), Wt = (e = void 0) => {
  const { pageCollections: t, fetchPageCollectionGroups: n } = Ar();
  let o;
  if (e)
    o = Dr(e), e && ng(e);
  else {
    const { targetLanguageURLParameter: l } = F();
    o = l, tg || (Ly(
      o,
      (c) => {
        c && ng(c);
      },
      { immediate: !0 }
    ), tg = !0);
  }
  const s = ul(() => {
    const l = o.value, c = zf.value[l];
    return c != null && c.name && Fy(c.name, t.value) ? c : null;
  }), a = ul(
    () => $u.value[o.value] || !1
  ), r = ul(
    () => Promise.all([
      n(),
      ku.value[o.value]
    ])
  );
  return {
    featuredCollection: s,
    featuredCollectionFetched: a,
    featuredCollectionPromise: r
  };
}, Ny = window.Vuex.useStore, My = window.Vue.computed, Ju = () => {
  const e = Ny(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), s = My(() => {
    var f;
    return ((f = o.value) == null ? void 0 : f.type) !== ee ? null : o.value.id;
  }), { featuredCollection: a, featuredCollectionPromise: r } = Wt(), {
    isSectionSuggestionValid: l,
    isPageSuggestionValid: c,
    sectionSuggestionExists: u
  } = gs(), i = (f = null) => f ? { id: f, type: ee } : o.value, d = (f) => b(void 0, null, function* () {
    var S;
    let w = null;
    f || (yield r.value, w = ((S = a.value) == null ? void 0 : S.name) || null);
    const v = [], C = (yield ge.fetchPageSuggestionsByCollections({
      sourceLanguage: t.value,
      targetLanguage: n.value,
      featuredCollection: w,
      collectionName: f
    })).recommendations.filter(
      (E) => c(E)
    );
    return v.push(...C), v.forEach((E) => {
      E.suggestionProvider = i(f);
    }), v;
  }), g = () => d(s.value), m = () => b(void 0, null, function* () {
    var w;
    (yield d(
      ((w = a.value) == null ? void 0 : w.name) || null
    )).forEach(
      (v) => e.commit("suggestions/addPageSuggestion", v)
    );
  }), p = (f) => b(void 0, null, function* () {
    var E;
    let w = null;
    f || (yield r.value, w = ((E = a.value) == null ? void 0 : E.name) || null), yield r.value;
    const v = [], y = yield ge.fetchSectionSuggestionsByCollections({
      sourceLanguage: t.value,
      targetLanguage: n.value,
      featuredCollection: w,
      collectionName: f
    }), C = y.recommendations.filter(
      (L) => l(L)
    ), S = y.recommendations.filter(
      (L) => !l(L)
    );
    return v.push(...C), S.forEach((L) => {
      L && !u(L) && (L.isListable = !1, e.commit("suggestions/addSectionSuggestion", L));
    }), v.forEach((L) => {
      L.suggestionProvider = i(f);
    }), v;
  });
  return {
    fetchSectionSuggestionsByCollections: () => p(s.value),
    fetchPageSuggestionsByCollections: g,
    fetchPageSuggestionsByFeaturedCollections: m,
    doFetchPageSuggestionsByCollection: d,
    doFetchSectionSuggestionsByCollection: p
  };
}, Uy = window.Vuex.useStore, Iy = () => {
  const e = Uy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = F(), o = {
    id: rn,
    type: We
  }, {
    getNextUnseenSectionSuggestionByCollection: s,
    getNextUnseenPageSuggestionByCollection: a
  } = Tr(), {
    isSectionSuggestionValid: r,
    isPageSuggestionValid: l,
    sectionSuggestionExists: c
  } = gs(), { featuredCollection: u, featuredCollectionPromise: i } = Wt(), {
    doFetchPageSuggestionsByCollection: d,
    doFetchSectionSuggestionsByCollection: g
  } = Ju(), m = (f, w, v, y, C) => b(void 0, null, function* () {
    var E;
    yield i.value;
    const S = (E = u.value) == null ? void 0 : E.name;
    if (S) {
      let L = w(S);
      if (!L) {
        const [N = null, ...k] = yield f(S);
        L = N, k.forEach((P) => {
          e.commit(v, P);
        });
      }
      L && (y.push(L), C--);
    }
    return C;
  });
  return { fetchSectionSuggestionsPopular: (f) => b(void 0, null, function* () {
    const w = [];
    return f = yield m(
      g,
      s,
      "suggestions/addSectionSuggestion",
      w,
      f
    ), yield $o(() => b(void 0, null, function* () {
      const v = yield ge.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let y = v.filter(
        (S) => r(S)
      );
      const C = v.filter(
        (S) => !r(S)
      );
      return y = y.slice(0, f), w.push(...y), C.forEach((S) => {
        S && !c(S) && (S.isListable = !1, e.commit("suggestions/addSectionSuggestion", S));
      }), w.length >= f;
    })), w.forEach(
      (v) => v.suggestionProvider = o
    ), w;
  }), fetchPageSuggestionsPopular: (f) => b(void 0, null, function* () {
    const w = [];
    return f = yield m(
      d,
      a,
      "suggestions/addPageSuggestion",
      w,
      f
    ), yield $o(() => b(void 0, null, function* () {
      let v = yield ge.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return v = v.filter(
        (y) => l(y)
      ), v = v.slice(0, f), w.push(...v), w.length >= f;
    })), w.forEach(
      (v) => v.suggestionProvider = o
    ), w;
  }) };
};
class ya {
  /**
   * @param {string} id
   * @param {string} label
   * @param {string} type
   * @param {SuggestionFilter[]} filters
   */
  constructor({ id: t, label: n, type: o, filters: s }) {
    this.id = t, this.label = n, this.type = o, this.filters = s;
  }
}
const Ry = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', zy = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', Oy = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', jy = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', Hy = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', Gy = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', qy = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', Wy = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', Xy = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', Ky = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', Yy = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', Qy = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', Jy = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', Zy = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', eC = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', tC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', nC = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', oC = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', sC = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Of = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', aC = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', iC = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', rC = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', lC = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', cC = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', uC = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', dC = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', gC = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', mC = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', pC = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', hC = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', fC = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', wC = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', vC = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', _C = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', SC = '<circle cx="6" cy="6" r="3"/><circle cx="14" cy="6" r="3"/><path d="M14 10c3.31 0 6 1.79 6 4v2h-6v-2c0-1.48-1.21-2.77-3-3.46.88-.35 1.91-.54 3-.54m-8 0c3.31 0 6 1.79 6 4v2H0v-2c0-2.21 2.69-4 6-4"/>', jf = Ry, yC = zy, Hf = {
  ltr: Oy,
  shouldFlip: !0
}, Gf = {
  ltr: jy,
  shouldFlip: !0
}, Zu = {
  ltr: Hy,
  shouldFlip: !0
}, qf = Gy, Wf = qy, Xf = Wy, CC = Xy, xC = Ky, ms = Yy, bC = Qy, ed = Jy, td = Zy, Vu = eC, kC = tC, $C = {
  ltr: nC,
  shouldFlip: !0
}, VC = {
  ltr: oC,
  shouldFlip: !0
}, EC = sC, LC = {
  langCodeMap: {
    ar: Of
  },
  default: aC
}, TC = {
  langCodeMap: {
    ar: Of
  },
  default: iC
}, Kf = rC, Ba = {
  ltr: lC,
  shouldFlip: !0
}, AC = cC, DC = uC, ps = {
  ltr: dC,
  shouldFlip: !0
}, nd = {
  ltr: gC,
  shouldFlip: !0
}, PC = {
  ltr: mC,
  shouldFlip: !0
}, Yf = pC, BC = hC, Eu = fC, FC = wC, NC = vC, Qf = _C, od = {
  ltr: SC,
  shouldFlip: !0
}, MC = {
  [an]: Qf,
  [rn]: EC,
  [ee]: Zu
}, UC = {
  [ee]: VC,
  [Be]: AC
};
class bt {
  /**
   * @param {string} id
   * @param {string} label
   * @param {string} type
   * @param {SuggestionFilter[]} subFilters
   */
  constructor({ id: t, label: n, type: o, subFilters: s = [] }) {
    this.id = t, this.label = n, this.type = o, this.subFilters = s;
  }
  get expandable() {
    return this.subFilters.length > 0;
  }
  get chipLabel() {
    return this.expandable ? `${this.label} (${this.subFilters.length})` : this.label;
  }
  get provider() {
    return this.type === We ? this.id : this.type;
  }
  get icon() {
    return MC[this.provider] || null;
  }
  get expandableIcon() {
    return UC[this.provider] || this.icon;
  }
}
const bs = window.Vue.computed, { topics: og, regions: sg } = mw.loader.require(
  "ext.cx.articlefilters"
), IC = (e) => new ya({
  id: e.groupId,
  label: e.label,
  type: tt,
  filters: e.topics.map(
    (t) => new bt({
      id: t.topicId,
      label: t.label,
      type: tt
    })
  )
}), ro = () => {
  const e = fe(), { currentSuggestionFilters: t, setFilterURLParams: n } = F(), { featuredCollection: o, featuredCollectionFetched: s } = Wt(), {
    validateFilters: a,
    filtersValidatorError: r,
    isDefaultFilter: l,
    isPopularFilter: c,
    isEqualFilter: u
  } = zu(), i = new bt({
    id: an,
    type: We,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), d = new bt({
    id: rn,
    type: We,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), g = new bt({
    id: ee,
    type: We,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollections: m, pageCollectionGroups: p, pageCollectionGroupsFetched: h } = Ar(), f = bs(() => {
    const B = new ya({
      id: We,
      type: We,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [i, d]
    });
    return Object.keys(p.value).length > 1 && B.filters.push(g), B;
  }), w = () => {
    const B = me({}, p.value);
    delete B.ungrouped;
    const I = [];
    for (const Q in B) {
      const ye = B[Q].map(
        (xe) => new bt({
          id: xe.name,
          label: xe.name,
          type: ee
        })
      ), $e = new bt({
        id: Q,
        label: Q,
        type: ee,
        subFilters: ye
      });
      I.push($e);
    }
    const K = (p.value.ungrouped || []).map(
      (Q) => new bt({
        id: Q.name,
        label: Q.name,
        type: ee
      })
    );
    return [...I, ...K];
  }, v = bs(
    () => new ya({
      id: ee,
      type: ee,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: w()
    })
  ), y = new ya({
    id: Be,
    type: Be,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: sg.map(
      (B) => new bt({
        id: B.id,
        label: B.label,
        type: Be,
        subFilters: B.countries.map(
          (I) => new bt({
            id: I.id,
            label: I.label,
            type: Be
          })
        )
      })
    )
  }), C = bs(() => {
    const B = [
      f.value,
      ...og.map(IC),
      y
    ];
    return v.value.filters.length && B.splice(1, 0, v.value), B;
  }), S = bs(
    () => !h.value || !s.value
  ), E = bs(
    () => {
      var B, I;
      return new bt({
        id: (B = o.value) == null ? void 0 : B.name,
        label: (I = o.value) == null ? void 0 : I.name,
        type: ee
      });
    }
  ), L = () => {
    if (S.value)
      return [];
    const B = k(), I = [];
    return o.value && I.push(E.value), !l(B) && !c(B) && !u(B, E.value) && I.push(B), I.push(i, d), I;
  }, N = (B) => {
    n(B.type, B.id);
  }, k = () => t.value.type === qt ? new bt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : C.value.flatMap((B) => B.filters).flatMap((B) => [B, ...B.subFilters || []]).find(P), P = (B) => u(B, t.value);
  return {
    allFilters: C,
    getFiltersSummary: L,
    selectFilter: N,
    isFilterSelected: P,
    getArticleTopics: (B) => {
      const K = og.flatMap((Q) => Q.topics).find((Q) => Q.topicId === B);
      return K ? K.articletopics : [];
    },
    waitingForPageCollectionsFetch: S,
    findSelectedFilter: k,
    validateURLFilterWithCollections: () => {
      if (!h.value)
        return;
      const B = a(
        {
          type: t.value.type,
          id: t.value.id
        },
        m.value
      );
      n(B.type, B.id), r.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (B) => {
      const I = sg.find((K) => K.id === B);
      return I ? I.countries.map((K) => K.id) : [B];
    },
    setFeaturedCollectionFilterIfNeeded: () => {
      if (!l(t.value))
        return;
      const B = a(
        E.value,
        m.value
      );
      N(B);
    },
    isFilteringByFeaturedCollection: () => {
      var I;
      const B = k();
      return (B == null ? void 0 : B.id) === ((I = o.value) == null ? void 0 : I.name);
    }
  };
}, RC = window.Vuex.useStore, zC = () => {
  const e = RC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = gs(), { getArticleTopics: l } = ro(), { featuredCollection: c, featuredCollectionPromise: u } = Wt();
  return {
    fetchPageSuggestionsByTopics: (g) => b(void 0, null, function* () {
      var w;
      yield u.value;
      const m = o.value.id, p = {
        id: m,
        type: tt
      }, h = l(m);
      let f = yield ge.fetchPageSuggestionsByTopics({
        sourceLanguage: t.value,
        targetLanguage: n.value,
        topics: h,
        featuredCollection: (w = c.value) == null ? void 0 : w.name
      });
      return f = f.filter(
        (v) => a(v)
      ), f = f.slice(0, g), f.forEach(
        (v) => v.suggestionProvider = p
      ), f;
    }),
    fetchSectionSuggestionsByTopics: (g) => b(void 0, null, function* () {
      yield u.value;
      const m = o.value.id, p = {
        id: m,
        type: tt
      }, h = l(m), f = [];
      return yield $o(() => b(void 0, null, function* () {
        var C;
        const w = yield ge.fetchSectionSuggestionsByTopics({
          sourceLanguage: t.value,
          targetLanguage: n.value,
          topics: h,
          featuredCollection: (C = c.value) == null ? void 0 : C.name
        });
        let v = w.filter(
          (S) => s(S)
        );
        const y = w.filter(
          (S) => !s(S)
        );
        return v = v.slice(0, g), f.push(...v), y.forEach((S) => {
          S && !r(S) && (S.isListable = !1, e.commit("suggestions/addSectionSuggestion", S));
        }), f.length >= g;
      })), f.forEach(
        (w) => w.suggestionProvider = p
      ), f;
    })
  };
}, OC = window.Vuex.useStore, jC = () => {
  const e = OC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = gs(), { getCountries: l } = ro(), { featuredCollection: c, featuredCollectionPromise: u } = Wt();
  return {
    fetchPageSuggestionsByCountries: (g) => b(void 0, null, function* () {
      var p;
      yield u.value;
      let m = yield ge.fetchPageSuggestionsByCountries({
        sourceLanguage: t.value,
        targetLanguage: n.value,
        countries: l(o.value.id),
        featuredCollection: (p = c.value) == null ? void 0 : p.name
      });
      return m = m.filter(
        (h) => a(h)
      ), m = m.slice(0, g), m.forEach(
        (h) => h.suggestionProvider = o.value
      ), m;
    }),
    fetchSectionSuggestionsByCountries: (g) => b(void 0, null, function* () {
      yield u.value;
      const m = [];
      return yield $o(() => b(void 0, null, function* () {
        var w;
        const p = yield ge.fetchSectionSuggestionsByCountries({
          sourceLanguage: t.value,
          targetLanguage: n.value,
          countries: l(o.value.id),
          featuredCollection: (w = c.value) == null ? void 0 : w.name
        });
        let h = p.filter(
          (v) => s(v)
        );
        const f = p.filter(
          (v) => !s(v)
        );
        return h = h.slice(0, g), m.push(...h), f.forEach((v) => {
          v && !r(v) && (v.isListable = !1, e.commit("suggestions/addSectionSuggestion", v));
        }), m.length >= g;
      })), m.forEach(
        (p) => p.suggestionProvider = o.value
      ), m;
    })
  };
}, HC = window.Vuex.useStore, GC = () => {
  const e = HC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = gs();
  return {
    fetchPageSuggestionsBySeed: (u) => b(void 0, null, function* () {
      const i = o.value.id;
      let d = yield ge.fetchPageSuggestions(
        t.value,
        n.value,
        i
      );
      return d = d.filter(
        (g) => a(g)
      ), d = d.slice(0, u), d.forEach(
        (g) => g.suggestionProvider = {
          id: i,
          type: qt
        }
      ), d;
    }),
    fetchSectionSuggestionsBySeed: (u) => b(void 0, null, function* () {
      const i = [], d = o.value.id;
      return yield $o(() => b(void 0, null, function* () {
        const g = yield ge.fetchSectionSuggestions(
          t.value,
          n.value,
          d
        );
        if (!g)
          return !1;
        let m = g.filter(
          (h) => s(h)
        );
        const p = g.filter(
          (h) => !s(h)
        );
        return m = m.slice(0, u), i.push(...m), p.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), i.length >= u;
      })), i.forEach(
        (g) => g.suggestionProvider = {
          id: d,
          type: qt
        }
      ), i;
    })
  };
}, qC = () => {
  const { currentSuggestionFilters: e } = F(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = Ey(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = Iy(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = zC(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: c
  } = jC(), {
    fetchPageSuggestionsByCollections: u,
    fetchSectionSuggestionsByCollections: i
  } = Ju(), { fetchPageSuggestionsBySeed: d, fetchSectionSuggestionsBySeed: g } = GC(), m = {
    [an]: t,
    [rn]: o,
    [ee]: u,
    [tt]: a,
    [Be]: l,
    [qt]: d
  }, p = {
    [an]: n,
    [rn]: s,
    [ee]: i,
    [tt]: r,
    [Be]: c,
    [qt]: g
  }, h = (v) => v.type === We ? v.id : v.type;
  return {
    getCurrentPageSuggestionProvider: () => m[h(e.value)],
    getCurrentSectionSuggestionProvider: () => p[h(e.value)]
  };
}, sd = () => {
  const { featuredCollectionPromise: e, featuredCollection: t } = Wt();
  function n(o, s, a, r) {
    return b(this, null, function* () {
      var i;
      const l = !Array.isArray(o) || o.length === 0, c = !s || !Array.isArray(a) || !a.length;
      if (l && c)
        return {};
      if (!r)
        if (yield e.value, (i = t.value) != null && i.name)
          r = t.value.name;
        else
          return {};
      return yield ge.fetchPageCollectionMembership(
        r,
        o,
        s,
        a
      );
    });
  }
  return {
    inFeaturedCollection: n
  };
}, Pr = () => {
  const { inFeaturedCollection: e } = sd(), t = (s) => {
    const a = {}, r = {};
    for (const l of s) {
      const { featuredCollection: c, featuredCollectionPromise: u } = Wt(l);
      a[l] = c, r[l] = u;
    }
    return { featuredCollections: a, featuredCollectionPromises: r };
  }, n = (s, a) => {
    const r = {};
    for (const l of s) {
      const c = a(l);
      r[c] || (r[c] = []), r[c].push(l);
    }
    return r;
  };
  function o(s, a) {
    return b(this, null, function* () {
      var p;
      const { titleGetter: r } = a;
      if (!s || !s.length)
        return s;
      const l = n(
        s,
        (h) => h.targetLanguage
      ), c = Object.keys(l), { featuredCollections: u, featuredCollectionPromises: i } = t(c);
      yield Promise.all(Object.values(i));
      const d = [];
      for (const h in l) {
        const f = l[h], w = u[h];
        if (!((p = w.value) != null && p.name))
          continue;
        const v = n(
          f,
          (y) => y.sourceLanguage
        );
        for (const y in v) {
          const C = v[y], S = C.map((L) => r(L)), E = e(
            null,
            y,
            S,
            w.value.name
          );
          d.push({ promise: E, items: C });
        }
      }
      const g = d.map(({ promise: h }) => h), m = yield Promise.all(g);
      return d.forEach(({ items: h }, f) => {
        const w = m[f];
        for (const v of h)
          v.inFeaturedCollection = w[r(v)];
      }), s;
    });
  }
  return {
    addFeaturedCollectionFlag: o
  };
}, WC = window.Vuex.useStore, ad = () => {
  const e = WC(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Tr(), { sourceLanguageURLParameter: o } = F(), s = Eo(), { addFeaturedCollectionFlag: a } = Pr(), { isFilteringByFeaturedCollection: r } = ro(), l = () => {
    const p = t(), h = e.state.suggestions.maxSuggestionsPerSlice;
    return h - p.length % h;
  }, c = () => {
    const p = n(), h = e.state.suggestions.maxSuggestionsPerSlice;
    return h - p.length % h;
  }, {
    getCurrentPageSuggestionProvider: u,
    getCurrentSectionSuggestionProvider: i
  } = qC(), d = (p) => {
    try {
      const h = p.map((f) => f.sourceTitle);
      if (h.length)
        return s(o.value, h);
    } catch (h) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const p = l(), f = yield i()(
        p
      );
      !r() && f.length > 0 && (yield a(f, {
        titleGetter: (w) => w.sourceTitle
      })), f.forEach(
        (w) => e.commit("suggestions/addSectionSuggestion", w)
      ), d(f), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const p = c(), f = yield u()(
        p
      );
      !r() && f.length > 0 && (yield a(f, {
        titleGetter: (w) => w.sourceTitle
      })), f.forEach(
        (w) => e.commit("suggestions/addPageSuggestion", w)
      ), d(f), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, XC = window.Vuex.useStore, Jf = () => {
  const e = XC();
  return (t) => b(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ge.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, KC = window.Vuex.useStore, Zf = () => {
  const e = KC(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = ad(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Tr(), { targetLanguageURLParameter: a } = F(), r = Jf();
  return () => b(void 0, null, function* () {
    const l = s(0), c = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, i = l.length === u, d = c.length === u;
    i && d || (yield r(a.value), t(), n());
  });
}, YC = window.Vuex.useStore, QC = window.Vue.ref, dl = /* @__PURE__ */ new Map(), ag = QC([]), Fa = () => {
  const e = YC(), t = Eo();
  return { loadSuggestion: (s, a, r) => {
    const l = `${s}:${a}:${r}`;
    if (dl.has(l))
      return dl.get(l);
    const u = (() => b(void 0, null, function* () {
      const i = yield ge.fetchSectionSuggestion(
        s,
        r,
        a
      );
      try {
        if (yield t(s, [r]), !i) {
          const d = e.getters["mediawiki/getPage"](
            s,
            r
          );
          return new oo({
            sourceLanguage: s,
            targetLanguage: a,
            sourceTitle: r,
            langLinksCount: d.langLinksCount,
            size: d.articleSize,
            wikidataId: d.wikidataId
          });
        }
      } catch (d) {
        const g = new Error(
          `No page metadata found for title ${r} and language pair ${s}-${a}. ${d}`
        );
        throw mw.errorLogger.logError(g, "error.contenttranslation"), g;
      }
      return ag.value.push(i), i;
    }))();
    return dl.set(l, u), u;
  }, getLoadedSuggestion: (s, a, r) => ag.value.find(
    (l) => l.sourceLanguage === s && l.targetLanguage === a && l.sourceTitle === r
  ) || null };
}, ig = window.Vue.computed, JC = window.Vuex.useStore, cn = () => {
  const e = JC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = F(), s = ig(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = ig(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, c) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(c)
  };
}, ew = window.Vuex.useStore, { setLanguageURLParams: ZC } = F(), id = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), ZC(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, tw = () => {
  const e = ew(), t = Zf();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Fe(e);
    n === o && (n = a.value, o = s.value), id(e, n, o), t();
  };
}, ex = () => {
  const e = ew(), { loadSuggestion: t } = Fa(), { currentLanguageTitleGroup: n, targetPageExists: o } = cn(), s = Eo();
  return (a, r) => b(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      setPageURLParam: u,
      clearSectionURLParameter: i
    } = F();
    a === r && (a = c.value, r = l.value);
    const d = n.value.getTitleForLanguage(a);
    id(e, a, r), u(d), o.value ? (i(), yield t(
      l.value,
      c.value,
      d
    )) : yield s(l.value, [d]);
  });
}, tx = window.Vuex.useStore, nx = window.Vue.ref, rg = nx(!1), nw = () => {
  const e = tx(), { supportedLanguageCodes: t, fetchSupportedLanguageCodes: n } = Aa(), { sourceLanguageURLParameter: o, targetLanguageURLParameter: s } = F(), a = () => {
    const l = Z.getCurrentWikiLanguageCode(), c = (p) => t.value.includes(p), u = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, i = [
      s.value,
      mw.storage.get("cxTargetLanguage"),
      l,
      u.targetLanguage
    ], d = [
      o.value,
      mw.storage.get("cxSourceLanguage"),
      u.sourceLanguage,
      l,
      u.targetLanguage
    ], g = i.find(
      (p) => c(p)
    );
    return { sourceLanguage: d.find(
      (p) => c(p) && p !== g
    ), targetLanguage: g };
  };
  return { initializeApplicationLanguages: () => b(void 0, null, function* () {
    yield n();
    const { sourceLanguage: l, targetLanguage: c } = a();
    id(e, l, c), rg.value = !0;
  }), applicationLanguagesInitialized: rg };
};
const ox = window.Vue.resolveDynamicComponent, lg = window.Vue.openBlock, cg = window.Vue.createBlock, sx = window.Vue.Transition, ks = window.Vue.withCtx, $s = window.Vue.createVNode, ax = window.Vue.resolveComponent, gl = window.Vue.unref, ix = window.Vuex.useStore, ug = window.Vue.computed, rx = window.Vue.onMounted, lx = window.Vue.inject, cx = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = F(), { initializeApplicationLanguages: n } = nw();
    t(), n();
    const o = lx("breakpoints"), s = ug(() => o.value.mobile), a = ix(), r = ug(
      () => a.state.application.autoSavePending
    );
    return rx(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && pf.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((c) => {
          c instanceof us && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, c) => {
      const u = ax("router-view");
      return lg(), cg(gl(p0), { id: "contenttranslation" }, {
        default: ks(() => [
          $s(gl(M), { class: "cx-container" }, {
            default: ks(() => [
              $s(gl(V), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: ks(() => [
                  $s(u, null, {
                    default: ks(({ Component: i, route: d }) => [
                      $s(sx, {
                        name: s.value ? d.meta.transitionName : ""
                      }, {
                        default: ks(() => [
                          (lg(), cg(ox(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      $s(L1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}, ux = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, dx = {
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
  getTranslationsForLanguagePair: (e) => (t, n) => e.translations.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n
  )
};
class ow {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class so {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new ow(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const dg = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Ye(me({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class gx {
  /**
   * @param {{user, source, mt, sequenceId}} unit
   * @param {{engine: null, content: string, timestamp: string}} unit.user
   * @param {{engine: null, content: string, timestamp: string}} unit.source
   * @param {{engine: string, content: string, timestamp: string}} unit.mt - current possible values for engine: "Elia"|"MinT"|"Google"
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
    const t = dg((s = this.user) == null ? void 0 : s.content), n = dg((a = this.mt) == null ? void 0 : a.content);
    return [
      .../* @__PURE__ */ new Set([
        ...Object.keys(t),
        ...Object.keys(n)
      ])
    ].map((r) => ({
      id: r,
      mt: n[r] || null,
      user: t[r] || null
    }));
  }
}
class rd extends Iu {
  /**
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
    lastUpdatedTimestamp: r,
    pageRevision: l,
    status: c,
    targetTitle: u,
    targetUrl: i,
    sectionTranslations: d
  }) {
    super({
      translationId: t,
      sourceTitle: n,
      sourceLanguage: o,
      targetLanguage: s,
      startTimestamp: a,
      lastUpdatedTimestamp: r,
      pageRevision: l,
      status: c,
      targetTitle: u
    }), this.targetUrl = i, this.sectionTranslations = d;
  }
}
const Br = mw.user.isAnon() ? void 0 : "user", sw = (e) => {
  if (e === "assertuserfailed")
    throw new us();
};
function aw(e, t = null) {
  return b(this, null, function* () {
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
    return t && (n.offset = t), new mw.Api().get(n).then((s) => b(this, null, function* () {
      var l;
      const a = s.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (c) => new br(Ye(me({}, c), { status: e }))
      ) : r = a.map(
        (c) => new rd(Ye(me({}, c), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const c = yield aw(
          e,
          s.continue.offset
        );
        r = r.concat(c);
      }
      return r;
    }));
  });
}
function mx(e) {
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
      (a) => new gx(a)
    );
  });
}
function px(e, t, n, o, s) {
  return b(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== ce.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = Z.getCXServerUrl(a);
    return fetch(r, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (l) => Promise.all([l.json(), Promise.resolve(l.ok)])
    ).then(([l, c]) => {
      var i, d;
      if (!c) {
        const g = l.detail || l.type || l.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(g);
      }
      return (d = (i = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(l.contents)) == null ? void 0 : i.groups) == null ? void 0 : d.content;
    }).catch((l) => Promise.reject(l));
  });
}
const hx = (e, t, n) => {
  const o = Z.getApi(t);
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
}, fx = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: r,
  revision: l,
  captchaId: c,
  captchaWord: u,
  publishTarget: i,
  sectionTranslationId: d,
  existingSectionTitle: g
}) => {
  const m = {
    assert: Br,
    action: "cxpublishsection",
    title: n,
    html: e,
    sourcetitle: t,
    sourcerevid: l,
    sourcesectiontitle: o,
    targetsectiontitle: s,
    sourcelanguage: a,
    targetlanguage: r,
    publishtarget: i,
    sectiontranslationid: d,
    existingsectiontitle: g
  };
  return c && (m.captchaid = c, m.captchaword = u), new mw.Api().postWithToken("csrf", m).then((h) => {
    if (h = h.cxpublishsection, h.result === "error") {
      if (h.edit.captcha)
        return {
          publishFeedbackMessage: new so({
            type: "captcha",
            status: "error",
            details: h.edit.captcha
          }),
          targetTitle: null
        };
      throw new Error();
    }
    return {
      publishFeedbackMessage: null,
      targetUrl: h.targeturl,
      pageId: h.edit.pageid,
      revisionId: h.edit.newrevid
    };
  }).catch((h, f) => {
    sw(h);
    let w;
    return f = f || {}, f.exception ? w = f.exception.message : f.error ? w = f.error.info : w = "Unknown error", {
      publishFeedbackMessage: new so({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, wx = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: r,
  units: l,
  sectionId: c,
  isSandbox: u,
  progress: i
}) => {
  const d = {
    assert: Br,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: r,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(l),
    sectionid: c,
    issandbox: u,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", d).then((m) => m.sxsave.sectiontranslationid).catch((m, p) => {
    sw(m);
    let h;
    return p.exception ? (h = p.exception.message, mw.cx.eventlogging.stats.saveFailure(!0)) : p.error ? (h = p.error.info, p.error.code && p.error.code.indexOf("internal_api_error") === 0 && mw.cx.eventlogging.stats.saveFailure(!0)) : (h = "Unknown error", mw.cx.eventlogging.stats.saveFailure(!0)), new so({ text: h, status: "error" });
  });
}, vx = (e) => {
  const t = {
    assert: Br,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, _x = () => {
  const e = {
    assert: Br,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new rd(n.cxcheckunreviewed.translation)
  );
}, Sx = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, yx = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, Cx = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), $t = {
  fetchTranslations: aw,
  fetchTranslationUnits: mx,
  fetchSegmentTranslation: px,
  parseTemplateWikitext: hx,
  publishTranslation: fx,
  saveTranslation: wx,
  deleteTranslation: Sx,
  fetchTranslatorStats: Cx,
  deleteCXTranslation: yx,
  splitTranslation: vx,
  checkUnreviewedTranslations: _x
};
function xx(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield $t.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const bx = {
  fetchTranslatorStats: xx
}, kx = {
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
  setTranslatorStats: (e, t) => {
    e.translatorStats = t;
  }
}, $x = {
  namespaced: !0,
  state: ux,
  getters: dx,
  actions: bx,
  mutations: kx
}, Vx = {
  /** @type ArticleSuggestion[] */
  pageSuggestions: [],
  /** @type SectionSuggestion[] */
  sectionSuggestions: [],
  /** @type FavoriteSuggestion[] */
  favorites: [],
  /**
   * Boolean indicating that the page suggestions fetching is pending.
   * This means we expect the fetching process to begin shortly, but
   * it has not started yet.
   *
   * Useful during dashboard initialization or language pair update.
   * @type {boolean}
   */
  isPageSuggestionsFetchPending: !0,
  /**
   * Boolean indicating that the section suggestions fetching is pending.
   * This means we expect the fetching process to begin shortly, but
   * it has not started yet.
   *
   * Useful during dashboard initialization or language pair update.
   * @type {boolean}
   */
  isSectionSuggestionsFetchPending: !0,
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
   * Stores appendix section titles, grouped by language
   * @type Object - { language1: [titles1], ... }
   */
  appendixSectionTitles: WS
}, Ex = {
  getFavoriteTitlesByLanguagePair: (e) => (t, n) => e.favorites.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n
  ).map((o) => o.title),
  getPageSuggestionsForPair: (e) => (t, n) => e.pageSuggestions.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n && o.isListable
  ),
  getSectionSuggestionsForPair: (e) => (t, n) => e.sectionSuggestions.filter(
    (o) => o.sourceLanguage === t && o.targetLanguage === n && o.isListable
  ),
  /**
   * @param state
   * @return {function(string, string, string): SectionSuggestion}
   */
  getSectionSuggestionsForArticle: (e) => (t, n, o) => e.sectionSuggestions.find(
    (s) => s.sourceLanguage === t && s.targetLanguage === n && s.sourceTitle === o
  ),
  appendixTitlesExistForLanguage: (e) => (t) => {
    var n;
    return (((n = e.appendixSectionTitles) == null ? void 0 : n[t]) || []).length > 0;
  },
  getNextUnseenPageSuggestionByFilter: (e) => (
    /**
     * @param {{ type: string, id: string }} filter
     * @returns {ArticleSuggestion}
     */
    (t) => {
      const n = e.pageSuggestions.find(
        (o) => o.matchesFilter(t) && !o.seen
      ) || null;
      return n != null && n.id && (e.pageSuggestions = e.pageSuggestions.filter(
        (o) => o.id !== n.id
      )), n;
    }
  ),
  getNextUnseenSectionSuggestionByFilter: (e) => (
    /**
     * @param {{ type: string, id: string }} filter
     * @returns {SectionSuggestion}
     */
    (t) => {
      const n = e.sectionSuggestions.find(
        (o) => o.matchesFilter(t) && !o.seen
      ) || null;
      return n != null && n.id && (e.sectionSuggestions = e.sectionSuggestions.filter(
        (o) => o.id !== n.id
      )), n;
    }
  ),
  /**
   * Get page suggestions for collections by collection name
   * @param {Object} state
   * @return {function(string, string, string): PageSuggestion[]}
   */
  getCollectionPageSuggestions: (e) => (t, n, o) => e.pageSuggestions.filter(
    (s) => {
      var a;
      return s.sourceLanguage === t && s.targetLanguage === n && ((a = s.suggestionProvider) == null ? void 0 : a.id) === o && s.isListable;
    }
  ),
  /**
   * Get section suggestions for collections by collection name
   * @param {Object} state
   * @return {function(string, string, string): SectionSuggestion[]}
   */
  getCollectionSectionSuggestions: (e) => (t, n, o) => e.sectionSuggestions.filter(
    (s) => {
      var a;
      return s.sourceLanguage === t && s.targetLanguage === n && ((a = s.suggestionProvider) == null ? void 0 : a.id) === o && s.isListable;
    }
  )
}, Lx = {
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
   * @param {object} state
   * @param {string} suggestionIdToRemove
   * @returns {ArticleSuggestion}
   */
  removePageSuggestion(e, t) {
    e.pageSuggestions = e.pageSuggestions.filter(
      (n) => n.id !== t
    );
  },
  /**
   * @param {object} state
   * @param {string} suggestionIdToRemove
   * @returns {SectionSuggestion}
   */
  removeSectionSuggestion(e, t) {
    e.sectionSuggestions = e.sectionSuggestions.filter(
      (n) => n.id !== t
    );
  },
  /**
   * @param {Object} state
   * @param {SectionSuggestion} suggestionToRemove
   */
  removeSectionSuggestionFromList(e, t) {
    t.isListable = !1;
  },
  /**
   * @param {Object} state
   * @param {ArticleSuggestion} suggestionToRemove
   */
  removePageSuggestionFromList(e, t) {
    t.isListable = !1;
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
  },
  setIsPageSuggestionsFetchPending(e, t) {
    e.isPageSuggestionsFetchPending = t;
  },
  setIsSectionSuggestionsFetchPending(e, t) {
    e.isSectionSuggestionsFetchPending = t;
  }
}, Tx = {
  namespaced: !0,
  state: Vx,
  getters: Ex,
  actions: {},
  mutations: Lx
}, Ax = {
  /** @type {Page[]} */
  pages: [],
  languageTitleGroups: [],
  supportedMTProviderGroups: [],
  /**
   * Stores nearby pages to be used as suggestions for section translation
   * Format: {{ en: Page[], es: Page[], ... }}
   * @type {Object}
   */
  nearbyPages: {}
}, Dx = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== ce.EMPTY_TEXT_PROVIDER_KEY,
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
function Px(o) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield Vo.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const Bx = { fetchNearbyPages: Px }, Fx = {
  addPage(e, t) {
    e.pages.push(t);
  },
  addLanguageTitleGroup(e, t) {
    e.languageTitleGroups.push(t);
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
}, Nx = {
  namespaced: !0,
  state: Ax,
  getters: Dx,
  actions: Bx,
  mutations: Fx
}, Mx = {
  /**@type Array */
  mtRequestsPending: [],
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
  /**
   * This variable indicates whether an auto-save request is pending.
   * Auto-save requests are being debounced during sentence-by-sentence
   * translation. This variable is true when the debounce queue is non-empty.
   * @type Boolean
   */
  autoSavePending: !1,
  isLoginDialogOn: !1,
  /**
   * The name of the previous route (as defined in vue-router config)
   * @type String
   */
  previousRoute: null
}, Ux = {
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
   * @param state
   * @param provider
   */
  setCurrentMTProvider: (e, t) => {
    e.currentMTProvider = t;
    const { sourceLanguage: n, targetLanguage: o } = e, s = ce.getStorageKey(
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
   * @param {boolean} value
   */
  setIsLoginDialogOn: (e, t) => {
    e.isLoginDialogOn = t;
  },
  setPreviousRoute: (e, t) => {
    e.previousRoute = t;
  }
}, Ix = {
  namespaced: !0,
  state: Mx,
  mutations: Ux
}, Rx = window.Vuex.createStore, zx = Rx({
  modules: { translator: $x, suggestions: Tx, mediawiki: Nx, application: Ix }
});
function Ox() {
  return iw().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function iw() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const jx = typeof Proxy == "function", Hx = "devtools-plugin:setup", Gx = "plugin:settings:set";
let Bo, Lu;
function qx() {
  var e;
  return Bo !== void 0 || (typeof window != "undefined" && window.performance ? (Bo = !0, Lu = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Bo = !0, Lu = global.perf_hooks.performance) : Bo = !1), Bo;
}
function Wx() {
  return qx() ? Lu.now() : Date.now();
}
class Xx {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const r in t.settings) {
        const l = t.settings[r];
        o[r] = l.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, o);
    try {
      const r = localStorage.getItem(s), l = JSON.parse(r);
      Object.assign(a, l);
    } catch (r) {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(r) {
        try {
          localStorage.setItem(s, JSON.stringify(r));
        } catch (l) {
        }
        a = r;
      },
      now() {
        return Wx();
      }
    }, n && n.on(Gx, (r, l) => {
      r === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (r, l) => this.target ? this.target.on[l] : (...c) => {
        this.onQueue.push({
          method: l,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (r, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...c) => (this.targetQueue.push({
        method: l,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[l](...c)) : (...c) => new Promise((u) => {
        this.targetQueue.push({
          method: l,
          args: c,
          resolve: u
        });
      })
    });
  }
  setRealTarget(t) {
    return b(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Kx(e, t) {
  const n = e, o = iw(), s = Ox(), a = jx && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Hx, e, t);
  else {
    const r = a ? new Xx(n, s) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: r
    }), r && t(r.proxiedTarget);
  }
}
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const rw = window.Vue.getCurrentInstance, ls = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const nn = window.Vue.computed, Ca = window.Vue.unref, Yx = window.Vue.watchEffect, lw = window.Vue.defineComponent, Qx = window.Vue.reactive, cw = window.Vue.h, ml = window.Vue.provide, Jx = window.Vue.ref, uw = window.Vue.watch, Zx = window.Vue.shallowRef, eb = window.Vue.shallowReactive, tb = window.Vue.nextTick, Dn = typeof window != "undefined";
function nb(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const te = Object.assign;
function pl(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = pt(s) ? s.map(e) : e(s);
  }
  return n;
}
const xa = () => {
}, pt = Array.isArray;
function Y(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const ob = /\/$/, sb = (e) => e.replace(ob, "");
function hl(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return l < c && l >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), a = t.slice(c + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = rb(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function ab(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function gg(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function mg(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && ao(t.matched[o], n.matched[s]) && dw(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ao(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function dw(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!ib(e[n], t[n]))
      return !1;
  return !0;
}
function ib(e, t) {
  return pt(e) ? pg(e, t) : pt(t) ? pg(t, e) : e === t;
}
function pg(e, t) {
  return pt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function rb(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return Y(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), s = o[o.length - 1];
  (s === ".." || s === ".") && o.push("");
  let a = n.length - 1, r, l;
  for (r = 0; r < o.length; r++)
    if (l = o[r], l !== ".")
      if (l === "..")
        a > 1 && a--;
      else
        break;
  return n.slice(0, a).join("/") + "/" + o.slice(r - (r === o.length ? 1 : 0)).join("/");
}
var $a;
(function(e) {
  e.pop = "pop", e.push = "push";
})($a || ($a = {}));
var ba;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ba || (ba = {}));
function lb(e) {
  if (!e)
    if (Dn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), sb(e);
}
const cb = /^[^#]+#/;
function ub(e, t) {
  return e.replace(cb, "#") + t;
}
function db(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Fr = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function gb(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          Y(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        Y(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && Y(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = db(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function hg(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Tu = /* @__PURE__ */ new Map();
function mb(e, t) {
  Tu.set(e, t);
}
function pb(e) {
  const t = Tu.get(e);
  return Tu.delete(e), t;
}
let hb = () => location.protocol + "//" + location.host;
function gw(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), gg(c, "");
  }
  return gg(n, e) + o + s;
}
function fb(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: g }) => {
    const m = gw(e, location), p = n.value, h = t.value;
    let f = 0;
    if (g) {
      if (n.value = m, t.value = g, r && r === p) {
        r = null;
        return;
      }
      f = h ? g.position - h.position : 0;
    } else
      o(m);
    s.forEach((w) => {
      w(n.value, p, {
        delta: f,
        type: $a.pop,
        direction: f ? f > 0 ? ba.forward : ba.back : ba.unknown
      });
    });
  };
  function c() {
    r = n.value;
  }
  function u(g) {
    s.push(g);
    const m = () => {
      const p = s.indexOf(g);
      p > -1 && s.splice(p, 1);
    };
    return a.push(m), m;
  }
  function i() {
    const { history: g } = window;
    g.state && g.replaceState(te({}, g.state, { scroll: Fr() }), "");
  }
  function d() {
    for (const g of a)
      g();
    a = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", i);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", i, {
    passive: !0
  }), {
    pauseListeners: c,
    listen: u,
    destroy: d
  };
}
function fg(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Fr() : null
  };
}
function wb(e) {
  const { history: t, location: n } = window, o = {
    value: gw(e, n)
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
  function a(c, u, i) {
    const d = e.indexOf("#"), g = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : hb() + e + c;
    try {
      t[i ? "replaceState" : "pushState"](u, "", g), s.value = u;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? Y("Error with push/replace State", m) : console.error(m), n[i ? "replace" : "assign"](g);
    }
  }
  function r(c, u) {
    const i = te({}, t.state, fg(
      s.value.back,
      // keep back and forward entries but override current position
      c,
      s.value.forward,
      !0
    ), u, { position: s.value.position });
    a(c, i, !0), o.value = c;
  }
  function l(c, u) {
    const i = te(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: c,
        scroll: Fr()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && Y(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const d = te({}, fg(o.value, c, null), { position: i.position + 1 }, u);
    a(c, d, !1), o.value = c;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function vb(e) {
  e = lb(e);
  const t = wb(e), n = fb(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = te({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: ub.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function _b(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Y(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), vb(e);
}
function Sb(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function pw(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Nn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Au = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var wg;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(wg || (wg = {}));
const yb = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${xb(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function cs(e, t) {
  return {}.NODE_ENV !== "production" ? te(new Error(yb[e](t)), {
    type: e,
    [Au]: !0
  }, t) : te(new Error(), {
    type: e,
    [Au]: !0
  }, t);
}
function dn(e, t) {
  return e instanceof Error && Au in e && (t == null || !!(e.type & t));
}
const Cb = ["params", "query", "hash"];
function xb(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Cb)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const vg = "[^/]+?", bb = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, kb = /[.+*?^${}()[\]/\\]/g;
function $b(e, t) {
  const n = te({}, bb, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const u of e) {
    const i = u.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !u.length && (s += "/");
    for (let d = 0; d < u.length; d++) {
      const g = u[d];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        d || (s += "/"), s += g.value.replace(kb, "\\$&"), m += 40;
      else if (g.type === 1) {
        const { value: p, repeatable: h, optional: f, regexp: w } = g;
        a.push({
          name: p,
          repeatable: h,
          optional: f
        });
        const v = w || vg;
        if (v !== vg) {
          m += 10;
          try {
            new RegExp(`(${v})`);
          } catch (C) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${v}): ` + C.message);
          }
        }
        let y = h ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        d || (y = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && u.length < 2 ? `(?:/${y})` : "/" + y), f && (y += "?"), s += y, m += 20, f && (m += -8), h && (m += -20), v === ".*" && (m += -50);
      }
      i.push(m);
    }
    o.push(i);
  }
  if (n.strict && n.end) {
    const u = o.length - 1;
    o[u][o[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
  const r = new RegExp(s, n.sensitive ? "" : "i");
  function l(u) {
    const i = u.match(r), d = {};
    if (!i)
      return null;
    for (let g = 1; g < i.length; g++) {
      const m = i[g] || "", p = a[g - 1];
      d[p.name] = m && p.repeatable ? m.split("/") : m;
    }
    return d;
  }
  function c(u) {
    let i = "", d = !1;
    for (const g of e) {
      (!d || !i.endsWith("/")) && (i += "/"), d = !1;
      for (const m of g)
        if (m.type === 0)
          i += m.value;
        else if (m.type === 1) {
          const { value: p, repeatable: h, optional: f } = m, w = p in u ? u[p] : "";
          if (pt(w) && !h)
            throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const v = pt(w) ? w.join("/") : w;
          if (!v)
            if (f)
              g.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${p}"`);
          i += v;
        }
    }
    return i || "/";
  }
  return {
    re: r,
    score: o,
    keys: a,
    parse: l,
    stringify: c
  };
}
function Vb(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Eb(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = Vb(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (_g(o))
      return 1;
    if (_g(s))
      return -1;
  }
  return s.length - o.length;
}
function _g(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Lb = {
  type: 0,
  value: ""
}, Tb = /[a-zA-Z0-9_]/;
function Ab(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Lb]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${u}": ${m}`);
  }
  let n = 0, o = n;
  const s = [];
  let a;
  function r() {
    a && s.push(a), a = [];
  }
  let l = 0, c, u = "", i = "";
  function d() {
    u && (n === 0 ? a.push({
      type: 0,
      value: u
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: u,
      regexp: i,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), u = "");
  }
  function g() {
    u += c;
  }
  for (; l < e.length; ) {
    if (c = e[l++], c === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (u && d(), r()) : c === ":" ? (d(), n = 1) : g();
        break;
      case 4:
        g(), n = o;
        break;
      case 1:
        c === "(" ? n = 2 : Tb.test(c) ? g() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")" ? i[i.length - 1] == "\\" ? i = i.slice(0, -1) + c : n = 3 : i += c;
        break;
      case 3:
        d(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--, i = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), d(), r(), s;
}
function Db(e, t, n) {
  const o = $b(Ab(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && Y(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const s = te(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Pb(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Cg({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, d, g) {
    const m = !g, p = Bb(i);
    ({}).NODE_ENV !== "production" && Ub(p, d), p.aliasOf = g && g.record;
    const h = Cg(t, i), f = [
      p
    ];
    if ("alias" in i) {
      const y = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const C of y)
        f.push(te({}, p, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : p.components,
          path: C,
          // we might be the child of an alias
          aliasOf: g ? g.record : p
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let w, v;
    for (const y of f) {
      const { path: C } = y;
      if (d && C[0] !== "/") {
        const S = d.record.path, E = S[S.length - 1] === "/" ? "" : "/";
        y.path = d.record.path + (C && E + C);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (w = Db(y, d, h), {}.NODE_ENV !== "production" && d && C[0] === "/" && Ib(w, d), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && Mb(g, w)) : (v = v || w, v !== w && v.alias.push(w), m && i.name && !yg(w) && r(i.name)), p.children) {
        const S = p.children;
        for (let E = 0; E < S.length; E++)
          a(S[E], w, g && g.children[E]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && c(w);
    }
    return v ? () => {
      r(v);
    } : xa;
  }
  function r(i) {
    if (pw(i)) {
      const d = o.get(i);
      d && (o.delete(i), n.splice(n.indexOf(d), 1), d.children.forEach(r), d.alias.forEach(r));
    } else {
      const d = n.indexOf(i);
      d > -1 && (n.splice(d, 1), i.record.name && o.delete(i.record.name), i.children.forEach(r), i.alias.forEach(r));
    }
  }
  function l() {
    return n;
  }
  function c(i) {
    let d = 0;
    for (; d < n.length && Eb(i, n[d]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[d].record.path || !hw(i, n[d])); )
      d++;
    n.splice(d, 0, i), i.record.name && !yg(i) && o.set(i.record.name, i);
  }
  function u(i, d) {
    let g, m = {}, p, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw cs(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const v = Object.keys(i.params || {}).filter((y) => !g.keys.find((C) => C.name === y));
        v.length && Y(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, m = te(
        // paramsFromLocation is a new object
        Sg(
          d.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((v) => !v.optional).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Sg(i.params, g.keys.map((v) => v.name))
      ), p = g.stringify(m);
    } else if ("path" in i)
      p = i.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && Y(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((v) => v.re.test(p)), g && (m = g.parse(p), h = g.record.name);
    else {
      if (g = d.name ? o.get(d.name) : n.find((v) => v.re.test(d.path)), !g)
        throw cs(1, {
          location: i,
          currentLocation: d
        });
      h = g.record.name, m = te({}, d.params, i.params), p = g.stringify(m);
    }
    const f = [];
    let w = g;
    for (; w; )
      f.unshift(w.record), w = w.parent;
    return {
      name: h,
      path: p,
      params: m,
      matched: f,
      meta: Nb(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: u, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function Sg(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function Bb(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Fb(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Fb(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function yg(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Nb(e) {
  return e.reduce((t, n) => te(t, n.meta), {});
}
function Cg(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Du(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Mb(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Du.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Du.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Ub(e, t) {
  t && t.record.name && !e.name && !e.path && Y(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Ib(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Du.bind(null, n)))
      return Y(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function hw(e, t) {
  return t.children.some((n) => n === e || hw(e, n));
}
const fw = /#/g, Rb = /&/g, zb = /\//g, Ob = /=/g, jb = /\?/g, ww = /\+/g, Hb = /%5B/g, Gb = /%5D/g, vw = /%5E/g, qb = /%60/g, _w = /%7B/g, Wb = /%7C/g, Sw = /%7D/g, Xb = /%20/g;
function ld(e) {
  return encodeURI("" + e).replace(Wb, "|").replace(Hb, "[").replace(Gb, "]");
}
function Kb(e) {
  return ld(e).replace(_w, "{").replace(Sw, "}").replace(vw, "^");
}
function Pu(e) {
  return ld(e).replace(ww, "%2B").replace(Xb, "+").replace(fw, "%23").replace(Rb, "%26").replace(qb, "`").replace(_w, "{").replace(Sw, "}").replace(vw, "^");
}
function Yb(e) {
  return Pu(e).replace(Ob, "%3D");
}
function Qb(e) {
  return ld(e).replace(fw, "%23").replace(jb, "%3F");
}
function Jb(e) {
  return e == null ? "" : Qb(e).replace(zb, "%2F");
}
function Va(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && Y(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Zb(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(ww, " "), r = a.indexOf("="), l = Va(r < 0 ? a : a.slice(0, r)), c = r < 0 ? null : Va(a.slice(r + 1));
    if (l in t) {
      let u = t[l];
      pt(u) || (u = t[l] = [u]), u.push(c);
    } else
      t[l] = c;
  }
  return t;
}
function xg(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = Yb(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (pt(o) ? o.map((a) => a && Pu(a)) : [o && Pu(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function ek(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = pt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const tk = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), bg = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Nr = Symbol({}.NODE_ENV !== "production" ? "router" : ""), yw = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Bu = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Vs() {
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
function to(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, l) => {
    const c = (d) => {
      d === !1 ? l(cs(4, {
        from: n,
        to: t
      })) : d instanceof Error ? l(d) : Sb(d) ? l(cs(2, {
        from: t,
        to: d
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof d == "function" && a.push(d), r());
    }, u = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? nk(c, t, n) : c);
    let i = Promise.resolve(u);
    if (e.length < 3 && (i = i.then(c)), {}.NODE_ENV !== "production" && e.length > 2) {
      const d = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        i = i.then((g) => c._called ? g : (Y(d), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !c._called) {
        Y(d), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((d) => l(d));
  });
}
function nk(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && Y(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function fl(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && Y(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let l = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw Y(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          Y(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const c = l;
          l = () => c;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, Y(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (ok(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(to(u, n, o, a, r));
        } else {
          let c = l();
          ({}).NODE_ENV !== "production" && !("catch" in c) && (Y(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), s.push(() => c.then((u) => {
            if (!u)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = nb(u) ? u.default : u;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && to(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function ok(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function kg(e) {
  const t = ls(Nr), n = ls(yw), o = nn(() => t.resolve(Ca(e.to))), s = nn(() => {
    const { matched: c } = o.value, { length: u } = c, i = c[u - 1], d = n.matched;
    if (!i || !d.length)
      return -1;
    const g = d.findIndex(ao.bind(null, i));
    if (g > -1)
      return g;
    const m = $g(c[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      $g(i) === m && // avoid comparing the child with its parent
      d[d.length - 1].path !== m ? d.findIndex(ao.bind(null, c[u - 2])) : g
    );
  }), a = nn(() => s.value > -1 && rk(n.params, o.value.params)), r = nn(() => s.value > -1 && s.value === n.matched.length - 1 && dw(n.params, o.value.params));
  function l(c = {}) {
    return ik(c) ? t[Ca(e.replace) ? "replace" : "push"](
      Ca(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(xa) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Dn) {
    const c = rw();
    if (c) {
      const u = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(u), Yx(() => {
        u.route = o.value, u.isActive = a.value, u.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: nn(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const sk = /* @__PURE__ */ lw({
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
  useLink: kg,
  setup(e, { slots: t }) {
    const n = Qx(kg(e)), { options: o } = ls(Nr), s = nn(() => ({
      [Vg(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Vg(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : cw("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), ak = sk;
function ik(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function rk(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!pt(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function $g(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Vg = (e, t, n) => e != null ? e : t != null ? t : n, lk = /* @__PURE__ */ lw({
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
    ({}).NODE_ENV !== "production" && uk();
    const o = ls(Bu), s = nn(() => e.route || o.value), a = ls(bg, 0), r = nn(() => {
      let u = Ca(a);
      const { matched: i } = s.value;
      let d;
      for (; (d = i[u]) && !d.components; )
        u++;
      return u;
    }), l = nn(() => s.value.matched[r.value]);
    ml(bg, nn(() => r.value + 1)), ml(tk, l), ml(Bu, s);
    const c = Jx();
    return uw(() => [c.value, l.value, e.name], ([u, i, d], [g, m, p]) => {
      i && (i.instances[d] = u, m && m !== i && u && u === g && (i.leaveGuards.size || (i.leaveGuards = m.leaveGuards), i.updateGuards.size || (i.updateGuards = m.updateGuards))), u && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !ao(i, m) || !g) && (i.enterCallbacks[d] || []).forEach((h) => h(u));
    }, { flush: "post" }), () => {
      const u = s.value, i = e.name, d = l.value, g = d && d.components[i];
      if (!g)
        return Eg(n.default, { Component: g, route: u });
      const m = d.props[i], p = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null, f = cw(g, te({}, p, t, {
        onVnodeUnmounted: (w) => {
          w.component.isUnmounted && (d.instances[i] = null);
        },
        ref: c
      }));
      if ({}.NODE_ENV !== "production" && Dn && f.ref) {
        const w = {
          depth: r.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (pt(f.ref) ? f.ref.map((y) => y.i) : [f.ref.i]).forEach((y) => {
          y.__vrv_devtools = w;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Eg(n.default, { Component: f, route: u }) || f
      );
    };
  }
});
function Eg(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const ck = lk;
function uk() {
  const e = rw(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    Y(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function Es(e, t) {
  const n = te({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => _k(o, ["instances", "children", "aliasOf"]))
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
function ti(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let dk = 0;
function gk(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = dk++;
  Kx({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((i, d) => {
      i.instanceData && i.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Es(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const g = d.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Cw
        });
      }
      pt(d.__vrl_devtools) && (d.__devtoolsApi = s, d.__vrl_devtools.forEach((g) => {
        let m = kw, p = "";
        g.isExactActive ? (m = bw, p = "This is exactly active") : g.isActive && (m = xw, p = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: p,
          backgroundColor: m
        });
      }));
    }), uw(t.currentRoute, () => {
      c(), s.notifyComponentUpdate(), s.sendInspectorTree(l), s.sendInspectorState(l);
    });
    const a = "router:navigations:" + o;
    s.addTimelineLayer({
      id: a,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((i, d) => {
      s.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: d.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: i },
          groupId: d.meta.__navigationId
        }
      });
    });
    let r = 0;
    t.beforeEach((i, d) => {
      const g = {
        guard: ti("beforeEach"),
        from: Es(d, "Current Location during this navigation"),
        to: Es(i, "Target location")
      };
      Object.defineProperty(i.meta, "__navigationId", {
        value: r++
      }), s.addTimelineEvent({
        layerId: a,
        event: {
          time: s.now(),
          title: "Start of navigation",
          subtitle: i.fullPath,
          data: g,
          groupId: i.meta.__navigationId
        }
      });
    }), t.afterEach((i, d, g) => {
      const m = {
        guard: ti("afterEach")
      };
      g ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, m.status = ti("❌")) : m.status = ti("✅"), m.from = Es(d, "Current Location during this navigation"), m.to = Es(i, "Target location"), s.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: i.fullPath,
          time: s.now(),
          data: m,
          logType: g ? "warning" : "default",
          groupId: i.meta.__navigationId
        }
      });
    });
    const l = "router-inspector:" + o;
    s.addInspector({
      id: l,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function c() {
      if (!u)
        return;
      const i = u;
      let d = n.getRoutes().filter((g) => !g.parent);
      d.forEach(Ew), i.filter && (d = d.filter((g) => (
        // save matches state based on the payload
        Fu(g, i.filter.toLowerCase())
      ))), d.forEach((g) => Vw(g, t.currentRoute.value)), i.rootNodes = d.map($w);
    }
    let u;
    s.on.getInspectorTree((i) => {
      u = i, i.app === e && i.inspectorId === l && c();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((m) => m.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: pk(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function mk(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function pk(e) {
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
        display: e.keys.map((o) => `${o.name}${mk(o)}`).join(" "),
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
const Cw = 15485081, xw = 2450411, bw = 8702998, hk = 2282478, kw = 16486972, fk = 6710886;
function $w(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: hk
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: kw
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Cw
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: bw
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: xw
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: fk
  });
  let o = n.__vd_id;
  return o == null && (o = String(wk++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map($w)
  };
}
let wk = 0;
const vk = /^\/(.*)\/([a-z]*)$/;
function Vw(e, t) {
  const n = t.matched.length && ao(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => ao(o, e.record))), e.children.forEach((o) => Vw(o, t));
}
function Ew(e) {
  e.__vd_match = !1, e.children.forEach(Ew);
}
function Fu(e, t) {
  const n = String(e.re).match(vk);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Fu(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Va(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Fu(r, t));
}
function _k(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Sk(e) {
  const t = Pb(e.routes, e), n = e.parseQuery || Zb, o = e.stringifyQuery || xg, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Vs(), r = Vs(), l = Vs(), c = Zx(Nn);
  let u = Nn;
  Dn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = pl.bind(null, (_) => "" + _), d = pl.bind(null, Jb), g = (
    // @ts-expect-error: intentionally avoid the type check
    pl.bind(null, Va)
  );
  function m(_, D) {
    let x, T;
    return pw(_) ? (x = t.getRecordMatcher(_), T = D) : T = _, t.addRoute(T, x);
  }
  function p(_) {
    const D = t.getRecordMatcher(_);
    D ? t.removeRoute(D) : {}.NODE_ENV !== "production" && Y(`Cannot remove non-existent route "${String(_)}"`);
  }
  function h() {
    return t.getRoutes().map((_) => _.record);
  }
  function f(_) {
    return !!t.getRecordMatcher(_);
  }
  function w(_, D) {
    if (D = te({}, D || c.value), typeof _ == "string") {
      const H = hl(n, _, D.path), re = t.resolve({ path: H.path }, D), st = s.createHref(H.fullPath);
      return {}.NODE_ENV !== "production" && (st.startsWith("//") ? Y(`Location "${_}" resolved to "${st}". A resolved location cannot start with multiple slashes.`) : re.matched.length || Y(`No match found for location with path "${_}"`)), te(H, re, {
        params: g(re.params),
        hash: Va(H.hash),
        redirectedFrom: void 0,
        href: st
      });
    }
    let x;
    if ("path" in _)
      ({}).NODE_ENV !== "production" && "params" in _ && !("name" in _) && // @ts-expect-error: the type is never
      Object.keys(_.params).length && Y(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), x = te({}, _, {
        path: hl(n, _.path, D.path).path
      });
    else {
      const H = te({}, _.params);
      for (const re in H)
        H[re] == null && delete H[re];
      x = te({}, _, {
        params: d(H)
      }), D.params = d(D.params);
    }
    const T = t.resolve(x, D), q = _.hash || "";
    ({}).NODE_ENV !== "production" && q && !q.startsWith("#") && Y(`A \`hash\` should always start with the character "#". Replace "${q}" with "#${q}".`), T.params = i(g(T.params));
    const j = ab(o, te({}, _, {
      hash: Kb(q),
      path: T.path
    })), W = s.createHref(j);
    return {}.NODE_ENV !== "production" && (W.startsWith("//") ? Y(`Location "${_}" resolved to "${W}". A resolved location cannot start with multiple slashes.`) : T.matched.length || Y(`No match found for location with path "${"path" in _ ? _.path : _}"`)), te({
      fullPath: j,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: q,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === xg ? ek(_.query) : _.query || {}
      )
    }, T, {
      redirectedFrom: void 0,
      href: W
    });
  }
  function v(_) {
    return typeof _ == "string" ? hl(n, _, c.value.path) : te({}, _);
  }
  function y(_, D) {
    if (u !== _)
      return cs(8, {
        from: D,
        to: _
      });
  }
  function C(_) {
    return L(_);
  }
  function S(_) {
    return C(te(v(_), { replace: !0 }));
  }
  function E(_) {
    const D = _.matched[_.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: x } = D;
      let T = typeof x == "function" ? x(_) : x;
      if (typeof T == "string" && (T = T.includes("?") || T.includes("#") ? T = v(T) : (
        // force empty params
        { path: T }
      ), T.params = {}), {}.NODE_ENV !== "production" && !("path" in T) && !("name" in T))
        throw Y(`Invalid redirect found:
${JSON.stringify(T, null, 2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return te({
        query: _.query,
        hash: _.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in T ? {} : _.params
      }, T);
    }
  }
  function L(_, D) {
    const x = u = w(_), T = c.value, q = _.state, j = _.force, W = _.replace === !0, H = E(x);
    if (H)
      return L(
        te(v(H), {
          state: typeof H == "object" ? te({}, q, H.state) : q,
          force: j,
          replace: W
        }),
        // keep original redirectedFrom if it exists
        D || x
      );
    const re = x;
    re.redirectedFrom = D;
    let st;
    return !j && mg(o, T, x) && (st = cs(16, { to: re, from: T }), $e(
      T,
      T,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (st ? Promise.resolve(st) : P(re, T)).catch((Ve) => dn(Ve) ? (
      // navigation redirects still mark the router as ready
      dn(
        Ve,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? Ve : ye(Ve)
    ) : (
      // reject any unknown error
      K(Ve, re, T)
    )).then((Ve) => {
      if (Ve) {
        if (dn(
          Ve,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          mg(o, w(Ve.to), re) && // and we have done it a couple of times
          D && // @ts-expect-error: added only in dev
          (D._count = D._count ? (
            // @ts-expect-error
            D._count + 1
          ) : 1) > 30 ? (Y(`Detected a possibly infinite redirection in a navigation guard when going from "${T.fullPath}" to "${re.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : L(
            // keep options
            te({
              // preserve an existing replacement but allow the redirect to override it
              replace: W
            }, v(Ve.to), {
              state: typeof Ve.to == "object" ? te({}, q, Ve.to.state) : q,
              force: j
            }),
            // preserve the original redirectedFrom if any
            D || re
          );
      } else
        Ve = X(re, T, !0, W, q);
      return U(re, T, Ve), Ve;
    });
  }
  function N(_, D) {
    const x = y(_, D);
    return x ? Promise.reject(x) : Promise.resolve();
  }
  function k(_) {
    const D = R.values().next().value;
    return D && typeof D.runWithContext == "function" ? D.runWithContext(_) : _();
  }
  function P(_, D) {
    let x;
    const [T, q, j] = yk(_, D);
    x = fl(T.reverse(), "beforeRouteLeave", _, D);
    for (const H of T)
      H.leaveGuards.forEach((re) => {
        x.push(to(re, _, D));
      });
    const W = N.bind(null, _, D);
    return x.push(W), ae(x).then(() => {
      x = [];
      for (const H of a.list())
        x.push(to(H, _, D));
      return x.push(W), ae(x);
    }).then(() => {
      x = fl(q, "beforeRouteUpdate", _, D);
      for (const H of q)
        H.updateGuards.forEach((re) => {
          x.push(to(re, _, D));
        });
      return x.push(W), ae(x);
    }).then(() => {
      x = [];
      for (const H of j)
        if (H.beforeEnter)
          if (pt(H.beforeEnter))
            for (const re of H.beforeEnter)
              x.push(to(re, _, D));
          else
            x.push(to(H.beforeEnter, _, D));
      return x.push(W), ae(x);
    }).then(() => (_.matched.forEach((H) => H.enterCallbacks = {}), x = fl(j, "beforeRouteEnter", _, D), x.push(W), ae(x))).then(() => {
      x = [];
      for (const H of r.list())
        x.push(to(H, _, D));
      return x.push(W), ae(x);
    }).catch((H) => dn(
      H,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? H : Promise.reject(H));
  }
  function U(_, D, x) {
    l.list().forEach((T) => k(() => T(_, D, x)));
  }
  function X(_, D, x, T, q) {
    const j = y(_, D);
    if (j)
      return j;
    const W = D === Nn, H = Dn ? history.state : {};
    x && (T || W ? s.replace(_.fullPath, te({
      scroll: W && H && H.scroll
    }, q)) : s.push(_.fullPath, q)), c.value = _, $e(_, D, x, W), ye();
  }
  let se;
  function ie() {
    se || (se = s.listen((_, D, x) => {
      if (!z.listening)
        return;
      const T = w(_), q = E(T);
      if (q) {
        L(te(q, { replace: !0 }), T).catch(xa);
        return;
      }
      u = T;
      const j = c.value;
      Dn && mb(hg(j.fullPath, x.delta), Fr()), P(T, j).catch((W) => dn(
        W,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? W : dn(
        W,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (L(
        W.to,
        T
        // avoid an uncaught rejection, let push call triggerError
      ).then((H) => {
        dn(
          H,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !x.delta && x.type === $a.pop && s.go(-1, !1);
      }).catch(xa), Promise.reject()) : (x.delta && s.go(-x.delta, !1), K(W, T, j))).then((W) => {
        W = W || X(
          // after navigation, all matched components are resolved
          T,
          j,
          !1
        ), W && (x.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !dn(
          W,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-x.delta, !1) : x.type === $a.pop && dn(
          W,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), U(T, j, W);
      }).catch(xa);
    }));
  }
  let ne = Vs(), B = Vs(), I;
  function K(_, D, x) {
    ye(_);
    const T = B.list();
    return T.length ? T.forEach((q) => q(_, D, x)) : ({}.NODE_ENV !== "production" && Y("uncaught error during route navigation:"), console.error(_)), Promise.reject(_);
  }
  function Q() {
    return I && c.value !== Nn ? Promise.resolve() : new Promise((_, D) => {
      ne.add([_, D]);
    });
  }
  function ye(_) {
    return I || (I = !_, ie(), ne.list().forEach(([D, x]) => _ ? x(_) : D()), ne.reset()), _;
  }
  function $e(_, D, x, T) {
    const { scrollBehavior: q } = e;
    if (!Dn || !q)
      return Promise.resolve();
    const j = !x && pb(hg(_.fullPath, 0)) || (T || !x) && history.state && history.state.scroll || null;
    return tb().then(() => q(_, D, j)).then((W) => W && gb(W)).catch((W) => K(W, _, D));
  }
  const xe = (_) => s.go(_);
  let Ne;
  const R = /* @__PURE__ */ new Set(), z = {
    currentRoute: c,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: f,
    getRoutes: h,
    resolve: w,
    options: e,
    push: C,
    replace: S,
    go: xe,
    back: () => xe(-1),
    forward: () => xe(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: B.add,
    isReady: Q,
    install(_) {
      const D = this;
      _.component("RouterLink", ak), _.component("RouterView", ck), _.config.globalProperties.$router = D, Object.defineProperty(_.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Ca(c)
      }), Dn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Ne && c.value === Nn && (Ne = !0, C(s.location).catch((q) => {
        ({}).NODE_ENV !== "production" && Y("Unexpected error when starting the router:", q);
      }));
      const x = {};
      for (const q in Nn)
        Object.defineProperty(x, q, {
          get: () => c.value[q],
          enumerable: !0
        });
      _.provide(Nr, D), _.provide(yw, eb(x)), _.provide(Bu, c);
      const T = _.unmount;
      R.add(_), _.unmount = function() {
        R.delete(_), R.size < 1 && (u = Nn, se && se(), se = null, c.value = Nn, Ne = !1, I = !1), T();
      }, {}.NODE_ENV !== "production" && Dn && gk(_, D, t);
    }
  };
  function ae(_) {
    return _.reduce((D, x) => D.then(() => k(x)), Promise.resolve());
  }
  return z;
}
function yk(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((u) => ao(u, l)) ? o.push(l) : n.push(l));
    const c = e.matched[r];
    c && (t.matched.find((u) => ao(u, c)) || s.push(c));
  }
  return [n, o, s];
}
function nt() {
  return ls(Nr);
}
const Ck = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), u = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(u / (1e3 * 3600 * 24));
}, xk = (e) => {
  const t = Ck(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const Dt = window.Vue.unref, Fo = window.Vue.createVNode, gn = window.Vue.createElementVNode, Lg = window.Vue.renderSlot, Tg = window.Vue.withModifiers, wl = window.Vue.toDisplayString, vl = window.Vue.withCtx, bk = window.Vue.openBlock, kk = window.Vue.createElementBlock, $k = window.Vue.createCommentVNode, Vk = { class: "col shrink pe-4" }, Ek = { class: "col" }, Lk = { class: "cx-translation__details column justify-between ma-0" }, Tk = { class: "row ma-0" }, Ak = { class: "col grow" }, Dk = { class: "col shrink ps-2" }, Pk = ["dir", "textContent"], Bk = ["dir", "textContent"], Fk = ["textContent"], Nk = window.Vuex.useStore, Mk = window.Vue.computed, Lw = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Iu,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = Nk(), s = (l, c) => {
      const u = o.getters["mediawiki/getPage"](l, c);
      return u == null ? void 0 : u.thumbnail;
    }, a = fe(), r = Mk(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, c = xk(n.translation.startTimestamp);
      return a.i18n(
        l[c.postfix],
        mw.language.convertNumber(c.value)
      );
    });
    return (l, c) => e.translation ? (bk(), kk("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: c[1] || (c[1] = Tg((u) => l.$emit("click"), ["stop"]))
    }, [
      gn("div", Vk, [
        Fo(Dt(Uu), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      gn("div", Ek, [
        gn("div", Lk, [
          gn("div", Tk, [
            gn("div", Ak, [
              Lg(l.$slots, "title")
            ]),
            gn("div", Dk, [
              Fo(Dt(et), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: c[0] || (c[0] = Tg((u) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Lg(l.$slots, "mid-content"),
          Fo(Dt(M), { class: "cx-translation__footer ma-0" }, {
            default: vl(() => [
              Fo(Dt(V), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: vl(() => [
                  gn("span", {
                    class: "mw-ui-autonym",
                    dir: Dt(O.getDir)(e.translation.sourceLanguage),
                    textContent: wl(Dt(O.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, Pk),
                  Fo(Dt(et), {
                    icon: Dt(R0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  gn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: Dt(O.getDir)(e.translation.targetLanguage),
                    textContent: wl(Dt(O.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, Bk)
                ]),
                _: 1
              }),
              Fo(Dt(V), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: vl(() => [
                  gn("span", {
                    textContent: wl(r.value)
                  }, null, 8, Fk)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : $k("", !0);
  }
};
const Ag = window.Vue.unref, Uk = window.Vue.toDisplayString, Ik = window.Vue.createTextVNode, Rk = window.Vue.withCtx, zk = window.Vue.openBlock, Ok = window.Vue.createBlock, jk = window.Codex.CdxInfoChip, Mr = {
  __name: "CommunityPriorityBadge",
  setup(e) {
    return (t, n) => (zk(), Ok(Ag(jk), {
      icon: Ag(od),
      class: "cx-community-priority-badge"
    }, {
      default: Rk(() => [
        Ik(Uk(t.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const uo = window.Vue.unref, Hk = window.Vue.toDisplayString, Gk = window.Vue.normalizeClass, qk = window.Vue.createElementVNode, ni = window.Vue.openBlock, Wk = window.Vue.createElementBlock, _l = window.Vue.createCommentVNode, oi = window.Vue.createVNode, No = window.Vue.withCtx, Sl = window.Vue.createBlock, Xk = ["lang", "textContent"], Kk = ["lang", "innerHTML"], Yk = window.Vue.computed, Qk = window.Vue.inject, Jk = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: br,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Qk("colors").gray200, s = Yk(
      () => {
        var c;
        return ((c = t.translation.progress) == null ? void 0 : c.any) * 100 || 0;
      }
    ), a = nt(), { setTranslationURLParams: r } = F(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (c, u) => (ni(), Sl(Lw, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": uo(uf),
      onActionIconClicked: u[0] || (u[0] = (i) => c.$emit("delete-translation")),
      onClick: l
    }, {
      title: No(() => [
        qk("h5", {
          class: Gk(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Hk(e.translation.sourceTitle)
        }, null, 10, Xk),
        e.translation.isLeadSectionTranslation ? _l("", !0) : (ni(), Wk("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, Kk))
      ]),
      "mid-content": No(() => [
        e.translation.progress ? (ni(), Sl(uo(M), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: No(() => [
            oi(uo(V), null, {
              default: No(() => [
                oi(uo(mf), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: uo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : _l("", !0),
        e.translation.inFeaturedCollection ? (ni(), Sl(uo(M), {
          key: 1,
          class: "ma-0 py-2"
        }, {
          default: No(() => [
            oi(uo(V), { shrink: "" }, {
              default: No(() => [
                oi(Mr)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : _l("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, Zk = window.Vuex.useStore, Tw = [], e8 = (e, t, n) => Tw.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), t8 = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Tw.push(o);
}, n8 = () => {
  const e = Zk();
  return (t, n, o) => b(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !e8(t, n, o) && (s = yield ge.fetchSectionSuggestion(
      t,
      o,
      n
    ), t8(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Aw = window.Vue.ref, Dw = Aw(null), Nu = Aw(null), o8 = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), Dw.value = e;
}, s8 = (e) => {
  Nu.value = e;
}, Na = () => {
  const e = nt(), { loadSuggestion: t } = Fa(), { setTranslationURLParams: n } = F();
  return (o, s, a, r, l = null, c = !0) => b(void 0, null, function* () {
    o8(r), s8(l);
    const u = yield t(
      s,
      a,
      o
    );
    n(u), c && e.push({ name: "sx-translation-confirmer" });
  });
};
const yl = window.Vue.withModifiers, Dg = window.Vue.toDisplayString, Pg = window.Vue.createElementVNode, at = window.Vue.unref, mn = window.Vue.createVNode, a8 = window.Vue.createTextVNode, Ls = window.Vue.openBlock, Bg = window.Vue.createElementBlock, Cl = window.Vue.createCommentVNode, xl = window.Vue.createBlock, Mn = window.Vue.withCtx, i8 = ["lang", "href", "textContent"], r8 = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, l8 = {
  key: 2,
  class: "flex"
}, c8 = ["innerHTML"], bl = window.Vue.computed, Fg = window.Vue.ref, Ng = window.Codex.CdxButton, kl = window.Codex.CdxIcon, u8 = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: rd,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Fg(!0), o = Fg(null), s = bl(() => {
      var m;
      return (m = o.value) == null ? void 0 : m.missingSections;
    }), a = bl(
      () => s.value && Object.keys(s.value)[0]
    );
    n8()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((m) => o.value = m).catch((m) => console.log(m)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = F(), c = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, u = Na(), i = (m) => {
      u(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), m && l(m);
    }, d = mw.config.get("wgNamespaceIds"), g = bl(() => new mw.Title(t.translation.targetTitle).getNamespaceId() === d.user);
    return (m, p) => (Ls(), xl(Lw, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: c
    }, {
      title: Mn(() => [
        Pg("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: p[0] || (p[0] = yl(() => {
          }, ["stop"])),
          textContent: Dg(e.translation.sourceTitle)
        }, null, 8, i8)
      ]),
      "mid-content": Mn(() => [
        mn(at(M), { class: "ma-0" }, {
          default: Mn(() => [
            mn(at(V), null, {
              default: Mn(() => [
                g.value ? (Ls(), Bg("div", r8, [
                  mn(at(kl), {
                    icon: at(Qf),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  a8(" " + Dg(m.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : Cl("", !0),
                n.value ? (Ls(), xl(at(mt), { key: 1 })) : s.value ? (Ls(), Bg("div", l8, [
                  mn(at(Ng), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: p[1] || (p[1] = yl((h) => i(a.value), ["stop"]))
                  }, {
                    default: Mn(() => [
                      mn(at(kl), {
                        class: "me-1",
                        icon: at(jf)
                      }, null, 8, ["icon"]),
                      Pg("span", { innerHTML: a.value }, null, 8, c8)
                    ]),
                    _: 1
                  }),
                  mn(at(Ng), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": m.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: p[2] || (p[2] = yl((h) => i(null), ["stop"]))
                  }, {
                    default: Mn(() => [
                      mn(at(kl), { icon: at(td) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : Cl("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e.translation.inFeaturedCollection ? (Ls(), xl(at(M), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Mn(() => [
            mn(at(V), { shrink: "" }, {
              default: Mn(() => [
                mn(Mr)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Cl("", !0)
      ]),
      _: 1
    }, 8, ["translation"]));
  }
}, Pw = "cx-translation-session-position-", Bw = () => Pw + mw.user.sessionId(), d8 = () => {
  const e = parseInt(
    mw.storage.get(Bw())
  );
  return isNaN(e) ? 0 : e;
}, g8 = function(e) {
  const t = Bw();
  mw.storage.set(t, e);
}, m8 = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(Pw)).forEach((e) => mw.storage.remove(e));
}, p8 = () => {
  const e = d8();
  return e % 10 === 0 && m8(), g8(e + 1), e;
};
function h8(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), o = `cx_sx_${t}_${e.access_method}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), l = {
    $schema: "/analytics/mediawiki/content_translation_event/1.12.0",
    wiki_db: n,
    user_name: r,
    web_session_id: t,
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: p8()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : Bf(r).then((c) => {
    mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: c,
        user_global_edit_count_bucket: XS(c)
      })
    );
  });
}
const f8 = window.Vuex.useStore, w8 = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], Lt = () => {
  const e = f8(), { previousRoute: t } = Fe(e), n = {
    event_source: { remove: !0 },
    translation_source_language: { remove: !1 },
    translation_target_language: { remove: !1 },
    translation_source_title: { remove: !0 }
  }, o = (s) => {
    for (const [a, { remove: r }] of Object.entries(n))
      if (s[a] === null || s[a] === "") {
        const l = w8(
          s.event_type,
          a,
          t.value
        );
        mw.errorLogger.logError(
          new Error(l.join(" ")),
          "error.contenttranslation"
        ), r && delete s[a];
      }
  };
  return (s) => (s.access_method || (s.access_method = Gt ? "desktop" : "mobile web"), o(s), h8(s));
}, v8 = window.Vuex.useStore, _8 = () => {
  const { commit: e } = v8(), t = Lt();
  return (n) => b(void 0, null, function* () {
    n.isArticleTranslation ? (yield $t.deleteCXTranslation(
      n
    )) && e("translator/removeCXTranslation", n.translationId) : (yield $t.deleteTranslation(
      n.sectionTranslationId,
      n.translationId,
      n.sectionId
    )) && e(
      "translator/removeTranslationBySectionTranslationId",
      n.sectionTranslationId
    );
    const o = {
      event_type: "dashboard_translation_discard",
      translation_id: n.translationId,
      translation_source_language: n.sourceLanguage,
      translation_source_title: n.sourceTitle,
      translation_target_language: n.targetLanguage,
      translation_target_title: n.targetTitle
    };
    n.sourceSectionTitle && (o.translation_source_section = n.sourceSectionTitle), n.targetSectionTitle && (o.translation_target_section = n.targetSectionTitle), t(o);
  });
};
const S8 = window.Vue.resolveDirective, $l = window.Vue.createElementVNode, y8 = window.Vue.withDirectives, Vl = window.Vue.unref, Mg = window.Vue.createVNode, Ug = window.Vue.withCtx, C8 = window.Vue.openBlock, x8 = window.Vue.createBlock, b8 = { class: "pa-4" }, k8 = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, $8 = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: br,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = _8(), r = () => {
      a(n.translation), s();
    };
    return (l, c) => {
      const u = S8("i18n");
      return C8(), x8(Vl(Vt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Ug(() => [
          $l("div", k8, [
            Mg(Vl(Ke), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Mg(Vl(Ke), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Ug(() => [
          $l("div", b8, [
            y8($l("span", null, null, 512), [
              [u, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function V8(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield E8(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function Ig(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(O.sortByAutonym) : (yield V8(e, t, n)).sort(O.sortByAutonym);
  });
}
function E8(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function L8() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function T8(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const A8 = window.Vue.computed;
function D8(e, t) {
  const n = A8(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = O.getAutonym(t.value[s]);
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
const El = window.Vue.ref, Ll = window.Vue.watch, P8 = window.Vue.computed;
function Fw(e, t, n) {
  const o = El(""), s = El(-1), a = El(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = P8(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), c = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Ll(e, () => {
    s.value = -1;
  }), Ll(t, () => {
    t.value && l.value.length > 0 && (s.value = 0);
  }), Ll(s, () => b(this, null, function* () {
    var u;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (u = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || u.scrollIntoView(!1);
  })), { next: r, prev: c, keyboardNavigationContainer: a, selectedItem: o };
}
function cd(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const si = window.Vue.renderSlot, Te = window.Vue.unref, B8 = window.Vue.isRef, Rg = window.Vue.createVNode, Ts = window.Vue.withModifiers, As = window.Vue.withKeys, Un = window.Vue.createElementVNode, F8 = window.Vue.resolveDirective, ai = window.Vue.withDirectives, Tl = window.Vue.renderList, Al = window.Vue.Fragment, pn = window.Vue.openBlock, hn = window.Vue.createElementBlock, zg = window.Vue.toDisplayString, ii = window.Vue.normalizeClass, Dl = window.Vue.createCommentVNode, N8 = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, M8 = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, U8 = { class: "results px-3 pt-4" }, I8 = { class: "results-header ps-8 pb-2" }, R8 = { class: "results-languages--suggestions pa-0 ma-0" }, z8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], O8 = { class: "results px-3 pt-4" }, j8 = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, H8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], G8 = ["aria-selected"], q8 = { class: "no-results px-3 py-4" }, W8 = { class: "ps-8" }, ri = window.Vue.ref, X8 = window.Vue.watch, K8 = window.Vue.onMounted, Og = window.Vue.computed, Nw = {
  __name: "MWLanguageSelector",
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
      default: L8
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = ri(null), a = ri(""), r = ri([]), l = ri(n.suggestions), c = Og(
      () => T8(r.value)
    ), u = Og(() => {
      const C = r.value.length;
      return C < 10 ? "few-results" : C < 30 ? "some-results" : "many-results";
    }), i = (C) => o("select", C), d = () => o("close"), { autocompletion: g, onTabSelect: m } = D8(
      a,
      r
    ), { next: p, prev: h, keyboardNavigationContainer: f, selectedItem: w } = Fw(a, r, l), v = () => {
      if (a.value && n.languages.includes(a.value)) {
        i(a.value);
        return;
      }
      if (w.value) {
        i(w.value);
        return;
      }
      if (r.value.length === 1) {
        i(r.value[0]);
        return;
      }
    };
    return X8(a, cd(() => b(this, null, function* () {
      r.value = yield Ig(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), K8(() => b(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield Ig(
        n.languages,
        "",
        n.searchAPI
      );
    })), (C, S) => {
      const E = F8("i18n");
      return pn(), hn("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        si(C.$slots, "search", {}, () => [
          Un("div", N8, [
            Rg(Te(xu), {
              value: Te(g),
              "onUpdate:value": S[0] || (S[0] = (L) => B8(g) ? g.value = L : null),
              icon: Te(Ed),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Rg(Te(xu), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": S[1] || (S[1] = (L) => a.value = L),
              class: "mw-ui-language-selector__search pa-4",
              icon: Te(Ed),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                As(Ts(v, ["prevent"]), ["enter"]),
                As(Ts(Te(p), ["stop", "prevent"]), ["down"]),
                As(Ts(Te(h), ["stop", "prevent"]), ["up"]),
                As(Ts(d, ["prevent"]), ["esc"]),
                As(Ts(Te(m), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        Un("section", M8, [
          e.suggestions.length && !a.value ? si(C.$slots, "suggestions", { key: 0 }, () => [
            Un("section", U8, [
              ai(Un("p", I8, null, 512), [
                [E, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Un("ul", R8, [
                (pn(!0), hn(Al, null, Tl(e.suggestions, (L) => (pn(), hn("li", {
                  key: L,
                  class: ii(["language ma-0", { "language--selected": L === Te(w) }]),
                  lang: L,
                  dir: Te(O.getDir)(L),
                  "aria-selected": L === Te(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (N) => i(L),
                  textContent: zg(Te(O.getAutonym)(L))
                }, null, 10, z8))), 128))
              ])
            ])
          ]) : Dl("", !0),
          c.value.length ? si(C.$slots, "search", { key: 1 }, () => [
            Un("section", O8, [
              e.suggestions.length && !a.value ? ai((pn(), hn("p", j8, null, 512)), [
                [E, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Dl("", !0),
              (pn(!0), hn(Al, null, Tl(c.value, (L, N) => (pn(), hn("ul", {
                key: N,
                class: ii(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (pn(!0), hn(Al, null, Tl(L, (k) => (pn(), hn("li", {
                  key: k,
                  class: ii(["language ma-0", { "language--selected": k === Te(w) }]),
                  lang: k,
                  dir: Te(O.getDir)(k),
                  role: "option",
                  "aria-selected": k === Te(w) || null,
                  tabindex: "-1",
                  onClick: (P) => i(k),
                  textContent: zg(Te(O.getAutonym)(k))
                }, null, 10, H8))), 128)),
                e.allOptionEnabled && !a.value ? ai((pn(), hn("li", {
                  key: 0,
                  class: ii(["language ma-0", { "language--selected": Te(w) === "all" }]),
                  role: "option",
                  "aria-selected": Te(w) === "all" || null,
                  tabindex: "-1",
                  onClick: S[2] || (S[2] = (k) => i("all"))
                }, null, 10, G8)), [
                  [E, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Dl("", !0)
              ], 2))), 128))
            ])
          ]) : si(C.$slots, "noresults", { key: 2 }, () => [
            Un("section", q8, [
              ai(Un("h3", W8, null, 512), [
                [E, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const Y8 = window.Vue.resolveDirective, jg = window.Vue.withDirectives, Ds = window.Vue.openBlock, Ps = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ae = window.Vue.unref, Hg = window.Vue.toDisplayString, Pt = window.Vue.createVNode, Gg = window.Vue.withModifiers, go = window.Vue.withCtx, Q8 = window.Vue.normalizeClass, J8 = {
  key: 0,
  class: "mw-ui-autonym"
}, Z8 = ["lang", "dir", "textContent"], e2 = {
  key: 0,
  class: "mw-ui-autonym"
}, t2 = ["lang", "dir", "textContent"], Bs = window.Vue.computed, n2 = window.Vue.inject, o2 = window.Vue.ref, qg = window.Codex.CdxButton, Pl = window.Codex.CdxIcon, Sr = {
  __name: "SXTranslationListLanguageSelector",
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
      default: null
    },
    selectedTargetLanguage: {
      type: String,
      default: null
    },
    allOptionEnabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "update:selectedSourceLanguage",
    "update:selectedTargetLanguage"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = n2("breakpoints"), a = Bs(() => s.value.mobile), r = o2(null), l = Bs(() => !!r.value), c = () => r.value = "source", u = () => r.value = "target", i = () => r.value = null, d = Bs(() => {
      if (!l.value)
        return;
      const f = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[r.value];
      return n[f];
    }), g = (h) => {
      const w = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[r.value];
      i(), o(w, h);
    }, m = Bs(
      () => n.selectedSourceLanguage === "all"
    ), p = Bs(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const w = Y8("i18n");
      return Ds(), Ps("div", {
        class: Q8(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        Pt(Ae(M), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: go(() => [
            Pt(Ae(V), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: go(() => [
                Pt(Ae(qg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Gg(c, ["stop"])
                }, {
                  default: go(() => [
                    m.value ? jg((Ds(), Ps("span", J8, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ds(), Ps("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ae(O.getDir)(e.selectedSourceLanguage),
                      textContent: Hg(Ae(O.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, Z8)),
                    Pt(Ae(Pl), {
                      size: "x-small",
                      icon: Ae(Vu)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            Pt(Ae(V), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: go(() => [
                Pt(Ae(Pl), { icon: Ae(Hf) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Pt(Ae(V), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: go(() => [
                Pt(Ae(qg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Gg(u, ["stop"])
                }, {
                  default: go(() => [
                    p.value ? jg((Ds(), Ps("span", e2, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ds(), Ps("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ae(O.getDir)(e.selectedTargetLanguage),
                      textContent: Hg(Ae(O.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, t2)),
                    Pt(Ae(Pl), {
                      size: "x-small",
                      icon: Ae(Vu)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            }, 8, ["cols"])
          ]),
          _: 1
        }),
        Pt(Ae(Vt), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (v) => l.value = v),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: go(() => [
            Pt(Ae(Nw), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: d.value,
              "all-option-enabled": e.allOptionEnabled,
              onSelect: g,
              onClose: i
            }, null, 8, ["placeholder", "languages", "all-option-enabled"])
          ]),
          _: 1
        }, 8, ["value", "title", "fullscreen", "header"])
      ], 2);
    };
  }
};
const Wg = window.Vue.unref, s2 = window.Vue.createVNode, li = window.Vue.createElementVNode, Xg = window.Vue.toDisplayString, a2 = window.Vue.openBlock, i2 = window.Vue.createElementBlock, r2 = { class: "cx-list-empty-placeholder pa-4" }, l2 = { class: "cx-list-empty-placeholder__icon-container" }, c2 = { class: "cx-list-empty-placeholder__icon" }, u2 = ["textContent"], d2 = ["textContent"], g2 = window.Codex.CdxIcon, Mw = {
  __name: "CXListEmptyPlaceholder",
  props: {
    title: {
      type: String,
      required: !0
    },
    description: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (a2(), i2("div", r2, [
      li("div", l2, [
        li("div", c2, [
          s2(Wg(g2), { icon: Wg(Kf) }, null, 8, ["icon"])
        ])
      ]),
      li("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: Xg(e.title)
      }, null, 8, u2),
      li("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: Xg(e.description)
      }, null, 8, d2)
    ]));
  }
}, m2 = window.Vuex.useStore, p2 = window.Vue.ref, ci = p2({ draft: !1, published: !1 }), hs = () => {
  const e = m2(), t = Eo(), { addFeaturedCollectionFlag: n } = Pr(), o = (a) => b(void 0, null, function* () {
    let r = yield $t.fetchTranslations(a);
    yield n(r, {
      titleGetter: (c) => c.sourceTitle
    }), e.commit("translator/clearTranslationsByStatus", a), r.forEach(
      (c) => e.commit("translator/addTranslation", c)
    );
    const l = {};
    for (const c of r) {
      const u = c.sourceLanguage;
      l[u] = l[u] || [], l[u].push(c);
    }
    ci.value[a] = !0;
    for (const [c, u] of Object.entries(l))
      t(
        c,
        u.map((i) => i.sourceTitle)
      ), u.forEach((i) => {
        const { targetLanguage: d, targetTitle: g } = i, m = !!e.getters["mediawiki/getPage"](
          d,
          g
        );
        g && !m && e.commit(
          "mediawiki/addPage",
          new ds({ title: g, pagelanguage: d })
        );
      });
  });
  return {
    fetchTranslationsByStatus: o,
    fetchAllTranslations: () => {
      const r = Object.keys(ci.value).filter(
        (l) => !ci.value[l]
      ).map(
        (l) => o(l)
      );
      return Promise.all(r).catch((l) => {
        mw.log.error("[CX] Error while fetching translations", l);
      });
    },
    translationsFetched: ci
  };
};
const h2 = window.Vue.toDisplayString, Bl = window.Vue.normalizeClass, Kg = window.Vue.createElementVNode, Kt = window.Vue.openBlock, Mo = window.Vue.createBlock, ui = window.Vue.createCommentVNode, Yg = window.Vue.unref, Qg = window.Vue.renderList, Jg = window.Vue.Fragment, di = window.Vue.createElementBlock, f2 = window.Vue.createVNode, Zg = window.Vue.withCtx, w2 = ["textContent"], v2 = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, _2 = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, gi = window.Vue.ref, Bt = window.Vue.computed, S2 = window.Vue.inject, y2 = window.Vuex.useStore, em = {
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
    const t = e, n = gi("all"), o = gi("all"), s = y2(), { translationsFetched: a } = hs(), r = Bt(
      () => a.value[t.translationStatus]
    ), l = gi(!1), c = gi(null), u = Bt(
      () => t.translationStatus === "draft"
    ), i = Bt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), d = Bt(
      () => n.value === "all"
    ), g = Bt(
      () => o.value === "all"
    ), m = Bt(
      () => i.value.filter(
        (S) => (d.value || S.sourceLanguage === n.value) && (g.value || S.targetLanguage === o.value)
      ).sort((S, E) => S.lastUpdatedTimestamp < E.lastUpdatedTimestamp)
    ), p = Bt(() => {
      const S = i.value.map(
        (E) => E.targetLanguage
      );
      return [...new Set(S)];
    }), h = Bt(() => {
      const S = i.value.map(
        (E) => E.sourceLanguage
      );
      return [...new Set(S)];
    }), f = (S) => {
      c.value = S, l.value = !0;
    }, w = Bt(() => t.activeStatus === t.translationStatus), v = S2("breakpoints"), y = Bt(() => v.value.mobile), C = Bt(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (S, E) => w.value ? (Kt(), Mo(Yg(Ze), {
      key: 0,
      class: Bl(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: Zg(() => [
        Kg("div", {
          class: Bl(["cx-translation-list__header", C.value])
        }, [
          Kg("h3", {
            class: Bl(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: h2(S.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, w2),
          m.value.length ? (Kt(), Mo(Sr, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": E[0] || (E[0] = (L) => n.value = L),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": E[1] || (E[1] = (L) => o.value = L),
            "source-languages": h.value,
            "target-languages": p.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : ui("", !0)
        ], 2)
      ]),
      default: Zg(() => [
        r.value && !m.value.length ? (Kt(), Mo(Mw, {
          key: 0,
          title: S.$i18n("cx-sx-translation-list-empty-title"),
          description: S.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : ui("", !0),
        r.value ? ui("", !0) : (Kt(), Mo(Yg(mt), { key: 1 })),
        u.value ? (Kt(), di("div", v2, [
          (Kt(!0), di(Jg, null, Qg(m.value, (L) => (Kt(), Mo(Jk, {
            key: `${e.translationStatus}-${L.key}`,
            translation: L,
            onDeleteTranslation: (N) => f(L)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Kt(), di("div", _2, [
          (Kt(!0), di(Jg, null, Qg(m.value, (L) => (Kt(), Mo(u8, {
            key: `${e.translationStatus}-${L.key}`,
            translation: L
          }, null, 8, ["translation"]))), 128))
        ])),
        f2($8, {
          modelValue: l.value,
          "onUpdate:modelValue": E[2] || (E[2] = (L) => l.value = L),
          translation: c.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : ui("", !0);
  }
};
const Fl = window.Vue.toDisplayString, hr = window.Vue.createElementVNode, Nl = window.Vue.unref, Fs = window.Vue.openBlock, Ml = window.Vue.createBlock, tm = window.Vue.createCommentVNode, C2 = window.Vue.Fragment, nm = window.Vue.createElementBlock, x2 = window.Vue.withKeys, b2 = window.Vue.withCtx, k2 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, $2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, V2 = /* @__PURE__ */ hr("span", null, "/", -1), E2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, om = window.Codex.CdxIcon, L2 = window.Codex.CdxInfoChip, mi = window.Vue.computed, ko = {
  __name: "CustomInfoChip",
  props: {
    icon: {
      type: [Object, String],
      default: null
    },
    content: {
      type: String,
      default: ""
    },
    expandable: {
      type: Boolean,
      default: !1
    },
    expanded: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, n = mi(() => t.content.lastIndexOf("/")), o = mi(() => t.content.slice(0, n.value)), s = mi(() => t.content.slice(n.value + 1)), a = mi(
      () => t.expanded ? bC : Vu
    );
    return (r, l) => (Fs(), Ml(Nl(L2), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = x2((c) => r.$emit("click"), ["enter"]))
    }, {
      default: b2(() => [
        n.value === -1 ? (Fs(), nm(C2, { key: 0 }, [
          hr("span", null, Fl(e.content), 1),
          e.expandable ? (Fs(), Ml(Nl(om), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : tm("", !0)
        ], 64)) : (Fs(), nm("div", k2, [
          hr("span", $2, Fl(o.value), 1),
          V2,
          hr("span", E2, Fl(s.value), 1),
          e.expandable ? (Fs(), Ml(Nl(om), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : tm("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const _e = window.Vue.unref, wt = window.Vue.createVNode, In = window.Vue.createElementVNode, Ns = window.Vue.toDisplayString, it = window.Vue.withCtx, T2 = window.Vue.resolveDirective, Ul = window.Vue.withDirectives, fn = window.Vue.openBlock, mo = window.Vue.createBlock, Rn = window.Vue.createCommentVNode, sm = window.Vue.createElementBlock, am = window.Vue.withModifiers, A2 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, D2 = { class: "col shrink pe-4" }, P2 = ["lang", "dir", "textContent"], B2 = ["lang", "dir", "textContent"], F2 = { class: "cx-suggestion__missing-sections" }, N2 = {
  key: 0,
  class: "cx-suggestion__easy-sections ms-1"
}, M2 = ["textContent"], U2 = ["textContent"], Il = window.Codex.CdxIcon, Ee = window.Vue.computed, I2 = window.Vue.inject, R2 = window.Vuex.useStore, Mu = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [oo, on, rs],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = R2(), o = Ee(() => t.suggestion), s = Ee(
      () => o.value.sourceTitle || o.value.title
    ), a = Ee(
      () => n.getters["mediawiki/getPage"](
        o.value.sourceLanguage,
        s.value
      )
    ), r = Ee(
      () => {
        var k;
        return (k = o.value) == null ? void 0 : k.missingSectionsCount;
      }
    ), l = Ee(() => !(o.value instanceof on) || !o.value.orderedMissingSections ? 0 : o.value.orderedMissingSections.filter((k) => {
      const P = o.value.getSectionSize(k.sourceTitle);
      return Uf(P);
    }).length), c = fe(), u = Ee(() => {
      const k = c.i18n(
        "cx-sx-translation-suggestion-easy-sections",
        [l.value]
      );
      return c.i18n("parentheses", [k]);
    }), i = Ee(() => {
      var k;
      return (k = a.value) == null ? void 0 : k.description;
    }), d = Ee(
      () => o.value instanceof on
    );
    Ee(
      () => o.value instanceof oo
    );
    const g = Ee(
      () => o.value instanceof rs
    ), m = Ee(
      () => O.getAutonym(o.value.sourceLanguage)
    ), p = Ee(
      () => O.getAutonym(o.value.targetLanguage)
    ), h = Ee(
      () => g.value ? qf : Wf
    ), f = I2("colors"), w = Ee(
      () => g.value ? f.blue600 : "currentColor"
    ), v = Ee(
      () => o.value instanceof Df || o.value instanceof Pf
    ), y = Ee(() => {
      if (!v.value || o.value.inFeaturedCollection)
        return !1;
      const k = E();
      return (k == null ? void 0 : k.id) === ee;
    }), C = Ee(() => y.value || d.value ? !1 : Gt ? YS(o.value.size) : QS(o.value.leadSectionSize)), { featuredCollection: S } = Wt(), { findSelectedFilter: E } = ro(), L = Ee(() => {
      var P, U;
      const k = E();
      return ((P = k == null ? void 0 : k.id) == null ? void 0 : P.toLowerCase()) === ((U = S.value) == null ? void 0 : U.name.toLowerCase());
    }), N = Ee(() => {
      if (!o.value.inFeaturedCollection)
        return !1;
      if (g.value)
        return !0;
      const k = E();
      return (k == null ? void 0 : k.id) === ee ? !0 : !L.value;
    });
    return (k, P) => {
      const U = T2("i18n");
      return o.value ? (fn(), sm("div", A2, [
        In("div", D2, [
          wt(_e(Uu), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        wt(_e(M), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: it(() => [
            wt(_e(M), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: it(() => [
                wt(_e(V), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: it(() => [
                    In("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: o.value.sourceLanguage,
                      dir: _e(O.getDir)(o.value.sourceLanguage),
                      textContent: Ns(s.value)
                    }, null, 8, P2)
                  ]),
                  _: 1
                }),
                wt(_e(V), { shrink: "" }, {
                  default: it(() => [
                    In("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: o.value.sourceLanguage,
                      dir: _e(O.getDir)(o.value.sourceLanguage),
                      textContent: Ns(i.value)
                    }, null, 8, B2)
                  ]),
                  _: 1
                }),
                C.value ? (fn(), mo(_e(V), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: it(() => [
                    Ul(In("small", null, null, 512), [
                      [U, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Rn("", !0),
                d.value ? (fn(), mo(_e(V), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom",
                  shrink: ""
                }, {
                  default: it(() => [
                    Ul(In("small", F2, null, 512), [
                      [U, [r.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (fn(), sm("small", N2, Ns(u.value), 1)) : Rn("", !0)
                  ]),
                  _: 1
                })) : Rn("", !0),
                N.value ? (fn(), mo(_e(V), {
                  key: 2,
                  shrink: "",
                  class: "cx-suggestion__information-panel__featured mt-auto"
                }, {
                  default: it(() => [
                    wt(Mr)
                  ]),
                  _: 1
                })) : g.value ? (fn(), mo(_e(V), {
                  key: 3,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: it(() => [
                    wt(_e(M), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: it(() => [
                        wt(_e(V), { grow: "" }, {
                          default: it(() => [
                            In("small", {
                              textContent: Ns(m.value)
                            }, null, 8, M2),
                            wt(_e(Il), {
                              icon: _e(Hf),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            In("small", {
                              textContent: Ns(p.value)
                            }, null, 8, U2)
                          ]),
                          _: 1
                        }),
                        r.value ? (fn(), mo(_e(V), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: it(() => [
                            Ul(In("small", null, null, 512), [
                              [U, [
                                r.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : Rn("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : Rn("", !0),
                y.value ? (fn(), mo(_e(V), {
                  key: 4,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: it(() => [
                    wt(ko, {
                      icon: _e(Zu),
                      content: o.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : Rn("", !0)
              ]),
              _: 1
            }),
            wt(_e(V), { shrink: "" }, {
              default: it(() => [
                g.value ? Rn("", !0) : (fn(), mo(_e(Il), {
                  key: 0,
                  icon: _e(ms),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: P[0] || (P[0] = am((X) => k.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                wt(_e(Il), {
                  class: "cx-suggestion__favorite-button",
                  icon: h.value,
                  "icon-color": w.value,
                  onClick: P[1] || (P[1] = am((X) => k.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : Rn("", !0);
    };
  }
};
const Rl = window.Vue.normalizeClass, im = window.Vue.createVNode, z2 = window.Vue.renderList, rm = window.Vue.Fragment, Ms = window.Vue.openBlock, pi = window.Vue.createElementBlock, O2 = window.Vue.createBlock, j2 = window.Vue.toDisplayString, H2 = window.Vue.withKeys, lm = window.Vue.createCommentVNode, G2 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, hi = window.Vue.computed, q2 = window.Vue.ref, W2 = window.Vue.watchEffect, X2 = {
  __name: "SuggestionFilterChip",
  props: {
    filter: {
      type: bt,
      required: !0
    },
    isSelected: {
      type: Function,
      required: !0
    },
    subFilterLimit: {
      type: Number,
      default: 0
    },
    viewMoreConfig: {
      type: Object,
      default: null,
      validator: (e) => e === null ? !0 : typeof e.label == "string" && typeof e.onClick == "function"
    }
  },
  emits: ["filter-selected"],
  setup(e, { emit: t }) {
    const n = e, o = hi(
      () => n.isSelected(n.filter) || n.filter.subFilters.some((g) => n.isSelected(g))
    ), s = q2(!1);
    W2(() => {
      n.filter.expandable && (s.value = o.value);
    });
    const a = t, r = () => {
      n.filter.expandable && o.value ? s.value = !s.value : a("filter-selected", n.filter);
    }, l = hi(() => {
      const g = n.filter.subFilters.find(
        (p) => n.isSelected(p)
      );
      let m = n.filter.chipLabel;
      return g && (m += `/${c(g)}`), m;
    }), c = (g) => {
      const { label: m } = g, p = n.filter.label;
      return m.startsWith(`${p}/`) ? m.replace(`${p}/`, "") : m;
    }, u = hi(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), i = hi(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && s.value
    ), d = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, m) => (Ms(), pi(rm, null, [
      im(ko, {
        class: Rl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": o.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: s.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      s.value ? (Ms(), pi("div", G2, [
        im(ko, {
          class: Rl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: m[0] || (m[0] = (p) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Ms(!0), pi(rm, null, z2(u.value, (p) => (Ms(), O2(ko, {
          key: p.id,
          class: Rl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(p)
          }]),
          content: c(p),
          icon: p.icon,
          onClick: (h) => g.$emit("filter-selected", p)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        i.value ? (Ms(), pi("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: d,
          onKeyup: H2(d, ["enter"])
        }, j2(e.viewMoreConfig.label), 33)) : lm("", !0)
      ])) : lm("", !0)
    ], 64));
  }
};
const K2 = window.Vue.toDisplayString, cm = window.Vue.createElementVNode, Y2 = window.Vue.renderList, um = window.Vue.Fragment, zl = window.Vue.openBlock, dm = window.Vue.createElementBlock, Q2 = window.Vue.createBlock, J2 = { class: "sx-suggestions-filters__group-label mb-3" }, Z2 = { class: "sx-suggestions-filters__group-filters mb-3" }, e$ = {
  __name: "SXSuggestionsFiltersDialogTabGroupContent",
  props: {
    filterGroup: {
      type: ya,
      required: !0
    },
    tentativelySelectFilter: {
      type: Function,
      required: !0
    },
    isSelected: {
      type: Function,
      required: !0
    },
    limit: {
      type: Number,
      default: 0
    },
    getSubFilterConfig: {
      type: Function,
      default: null
    }
  },
  setup(e) {
    const t = e, n = () => t.limit > 0 ? t.filterGroup.filters.slice(0, t.limit) : t.filterGroup.filters;
    return (o, s) => (zl(), dm(um, null, [
      cm("div", J2, K2(e.filterGroup.label), 1),
      cm("div", Z2, [
        (zl(!0), dm(um, null, Y2(n(), (a) => (zl(), Q2(X2, {
          key: a.id,
          filter: a,
          "is-selected": e.isSelected,
          "sub-filter-limit": e.getSubFilterConfig ? e.getSubFilterConfig(a).limit : 0,
          "view-more-config": e.getSubFilterConfig ? e.getSubFilterConfig(a).viewMoreConfig : null,
          onFilterSelected: s[0] || (s[0] = (r) => e.tentativelySelectFilter(r))
        }, null, 8, ["filter", "is-selected", "sub-filter-limit", "view-more-config"]))), 128))
      ])
    ], 64));
  }
}, gm = window.Vue.computed, t$ = window.Vue.inject, mm = window.Vue.ref, pm = window.Vue.watch, Uw = (e, t) => {
  const o = mm([]), s = mm(!1), a = gm(
    () => o.value.slice(0, 4)
  ), r = t$("breakpoints"), l = gm(() => r.value.mobile), { inFeaturedCollection: c } = sd(), u = (g) => b(void 0, null, function* () {
    const m = g.map((h) => h.wikidataId).filter(Boolean), p = yield c(m);
    g.forEach((h) => {
      h.wikidataId && (h.inFeaturedCollection = p[h.wikidataId]);
    });
  }), i = cd(() => b(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      const g = yield Vo.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
      yield u(g), o.value = g;
    } finally {
      s.value = !1, mw.cx.eventlogging.stats.articleSearchAccess(l.value);
    }
  }), 500), d = () => {
    o.value = [], t.value && (s.value = !0, i());
  };
  return pm(t, d), pm(e, d), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
class fi {
  /**
   * @param {string} label
   * @param {string} value
   * @param {string} description
   * @param {{ url: string }|null} thumbnail
   * @param {string} filterType
   * @param {string} filterId
   * @param {string|IconFlipForRtl|null} icon
   * @param {boolean} showThumbnail
   */
  constructor({
    label: t,
    value: n,
    description: o,
    filterType: s,
    filterId: a,
    thumbnail: r = null,
    icon: l = null,
    showThumbnail: c = !1
  }) {
    this.label = t, this.value = n + "-" + s, this.description = o, this.thumbnail = r, this.filterType = s, this.filterId = a, this.icon = l, this.showThumbnail = c;
  }
}
const Ol = window.Vue.ref, hm = window.Vue.watch, fm = window.Vue.computed, { topics: n$, regions: o$ } = mw.loader.require(
  "ext.cx.articlefilters"
), s$ = n$.flatMap(
  (e) => e.topics.map((t) => Ye(me({}, t), {
    groupId: e.groupId
  }))
), a$ = () => {
  const e = Ol(""), t = Ol("all"), n = Ol({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = fe(), { pageCollectionGroups: s } = Ar(), { sourceLanguageURLParameter: a } = F(), r = (m) => (m = m.toLowerCase(), s$.filter(
    (p) => p.label.toLowerCase().includes(m)
  )), l = (m) => (m = m.toLowerCase(), Object.values(s.value).flat().filter(
    (h) => h.name.toLowerCase().includes(m)
  )), c = (m) => (m = m.toLowerCase(), o$.flatMap((p) => [p, ...p.countries]).filter(
    (p) => p.label.toLowerCase().includes(m)
  ).map((p) => ({
    label: p.label,
    id: p.id
  }))), u = fm(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: d } = Uw(
    a,
    u
  );
  hm(i, () => {
    n.value.topics = i.value.map(
      (m) => {
        var p;
        return new fi({
          label: m.title,
          value: m.title,
          description: m.description,
          thumbnail: { url: (p = m.thumbnail) == null ? void 0 : p.source },
          filterType: qt,
          filterId: m.title,
          showThumbnail: !0
        });
      }
    );
  }), hm([e, t], () => b(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (m) => new fi({
        label: m.label,
        value: m.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? Eu : null,
        filterType: tt,
        filterId: m.topicId
      })
    ), n.value.collections = l(
      e.value
    ).map(
      (m) => new fi({
        label: m.name,
        value: m.name,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          m.articlesCount
        ),
        icon: t.value === "all" ? Zu : null,
        filterType: ee,
        filterId: m.name
      })
    ), n.value.regions = c(e.value).map(
      (m) => new fi({
        label: m.label,
        value: m.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? Eu : null,
        filterType: Be,
        filterId: m.id
      })
    );
  }));
  const g = fm(() => {
    const m = t.value === "all";
    return [
      {
        key: "topics",
        show: n.value.topics.length && m,
        items: n.value.topics
      },
      {
        key: "topic-areas",
        show: n.value.topic_areas.length && (m || t.value === "topics"),
        items: n.value.topic_areas
      },
      {
        key: "geography",
        show: n.value.regions.length && (m || t.value === "geography"),
        items: n.value.regions
      },
      {
        key: "collections",
        show: n.value.collections.length && (m || t.value === "collections"),
        items: n.value.collections
      }
    ].filter((p) => p.show);
  });
  return { searchInput: e, searchScope: t, searchResults: g, searchResultsLoading: d };
}, i$ = "suggestion_filter_topic_area", r$ = "suggestion_filter_search_result_seed", l$ = "suggestion_filter_collections", c$ = "suggestion_filter_previous_edits", u$ = "suggestion_filter_popular_articles", d$ = "suggestion_filter_region", jl = (e) => {
  if (e.type === tt || e.type === Be || e.type === ee || e.type === qt)
    return e.id;
  if (e.id === ee)
    return "all-collections";
}, Hl = (e) => {
  if (e.type === tt)
    return i$;
  if (e.type === Be)
    return d$;
  if (e.type === qt)
    return r$;
  if (e.id === ee || e.type === ee)
    return l$;
  if (e.id === an)
    return c$;
  if (e.id === rn)
    return u$;
}, Iw = () => {
  const e = Lt();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: Hl(r),
      event_context: jl(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: Hl(r),
      event_context: jl(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: Hl(r),
      event_context: jl(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const be = window.Vue.unref, vt = window.Vue.createVNode, Ft = window.Vue.withCtx, g$ = window.Vue.resolveDirective, Yt = window.Vue.createElementVNode, Uo = window.Vue.withDirectives, wm = window.Vue.toDisplayString, m$ = window.Vue.createTextVNode, p$ = window.Vue.vShow, vm = window.Vue.isRef, _m = window.Vue.renderList, Sm = window.Vue.Fragment, wn = window.Vue.openBlock, po = window.Vue.createElementBlock, h$ = window.Vue.withKeys, ym = window.Vue.createCommentVNode, Cm = window.Vue.createBlock, f$ = { class: "sx-suggestions-filters" }, w$ = { class: "mb-0" }, v$ = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, _$ = { class: "mb-3" }, S$ = { class: "px-4 pb-4 pt-7" }, y$ = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, C$ = ["onKeyup", "onClick"], x$ = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, b$ = { class: "sx-suggestions-filters__search-results-pending" }, k$ = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, $$ = { class: "sx-suggestions-filters__search-results-empty-primary" }, V$ = { class: "sx-suggestions-filters__search-results-empty-secondary" }, wi = window.Vue.ref, ho = window.Vue.computed, E$ = window.Vue.inject, L$ = window.Vue.watch, xm = window.Codex.CdxButton, T$ = window.Codex.CdxIcon, A$ = window.Codex.CdxTextInput, D$ = window.Codex.CdxMenu, P$ = window.Codex.CdxTabs, B$ = window.Codex.CdxTab, F$ = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = fe(), o = t, s = ho(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: m([
          We,
          ee,
          Be,
          tt
        ])
      },
      {
        name: "collections",
        label: n.i18n("cx-sx-suggestions-filters-tab-collections"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-collections"
        ),
        filterGroups: m([ee])
      },
      {
        name: "geography",
        label: n.i18n("cx-sx-suggestions-filters-tab-regions"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-regions"
        ),
        filterGroups: m([Be])
      },
      {
        name: "topics",
        label: n.i18n("cx-sx-suggestions-filters-tab-topics"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-topics"
        ),
        filterGroups: m([tt])
      }
    ]), a = (R) => X.value = R, r = ho(
      () => s.value.find((R) => R.name === X.value)
    ), l = (R, z) => z === "all" && R.type === Be ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          R.label
        ),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, c = (R, z) => {
      if (R !== "all")
        return !1;
      if (z === ee) {
        const ae = m([ee]);
        return ae.length && ae[0].filters.length > 6;
      }
      return z === Be;
    }, { allFilters: u, isFilterSelected: i, selectFilter: d, findSelectedFilter: g } = ro(), m = (R) => R.flatMap((z) => u.value.filter((ae) => ae.type === z)).filter(Boolean), p = () => {
      E(), o("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: h,
      logSuggestionFiltersConfirm: f,
      logSuggestionFiltersSelect: w
    } = Iw(), v = () => {
      h(), p();
    }, y = () => {
      S.value && (f(S.value), d(S.value)), p();
    }, C = wi(!1), S = wi(null), E = () => {
      S.value = null, C.value = !1;
    }, L = (R) => {
      w(R), S.value = R, C.value = !0;
    }, N = (R) => S.value ? S.value.id === R.id && S.value.type === R.type : i(R), k = E$("breakpoints"), P = ho(() => k.value.mobile), { searchInput: U, searchScope: X, searchResults: se, searchResultsLoading: ie } = a$(), ne = ho(
      () => S.value || g()
    ), B = wi(null);
    L$(B, () => {
      if (!B.value)
        return;
      const R = K.value.find(
        (z) => z.value === B.value
      );
      L({
        type: R.filterType,
        id: R.filterId,
        label: R.label
      }), U.value = "";
    });
    const I = {
      [ee]: "cx-sx-suggestions-filters-view-all-collections-group",
      [Be]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, K = ho(
      () => se.value.flatMap((R) => R.items)
    ), Q = wi({}), ye = ho(
      () => Q.value[X.value]
    ), $e = ho(() => {
      var z;
      const R = (z = ye.value) == null ? void 0 : z.getHighlightedMenuItem();
      return R == null ? void 0 : R.id;
    }), xe = (R) => {
      R.key !== " " && ye.value && ye.value.delegateKeyNavigation(R);
    }, Ne = (R, z) => {
      Q.value[z] = R;
    };
    return (R, z) => {
      const ae = g$("i18n");
      return wn(), Cm(be(Vt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: P.value,
        header: !1
      }, {
        default: Ft(() => [
          Yt("section", f$, [
            vt(be(M), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Ft(() => [
                vt(be(V), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Ft(() => [
                    vt(be(xm), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": R.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: v
                    }, {
                      default: Ft(() => [
                        vt(be(T$), { icon: be(ms) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                vt(be(V), {
                  grow: "",
                  align: "center"
                }, {
                  default: Ft(() => [
                    Uo(Yt("h5", w$, null, 512), [
                      [ae, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                vt(be(V), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Ft(() => [
                    Uo(vt(be(xm), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: y
                    }, {
                      default: Ft(() => [
                        m$(wm(R.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [p$, C.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Yt("div", v$, [
              Uo(Yt("h5", _$, null, 512), [
                [ae, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Yt("div", null, [
                vt(ko, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: ne.value.label,
                  icon: ne.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            Yt("div", S$, [
              vt(be(A$), {
                modelValue: be(U),
                "onUpdate:modelValue": z[0] || (z[0] = (_) => vm(U) ? U.value = _ : null),
                role: "combobox",
                "aria-activedescendant": $e.value,
                "aria-controls": "sx-suggestions-filters__search-results__menu",
                "aria-autocomplete": "none",
                placeholder: r.value.searchPlaceholder,
                "input-type": "search",
                "start-icon": be(Eu),
                clearable: !!be(U),
                onKeydown: xe
              }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
            ]),
            vt(be(P$), {
              active: be(X),
              "onUpdate:active": [
                z[2] || (z[2] = (_) => vm(X) ? X.value = _ : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Ft(() => [
                (wn(!0), po(Sm, null, _m(s.value, (_, D) => (wn(), Cm(be(B$), {
                  key: D,
                  name: _.name,
                  label: _.label
                }, {
                  default: Ft(() => [
                    be(U) ? (wn(), po("div", x$, [
                      vt(be(D$), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (x) => Ne(x, _.name),
                        selected: B.value,
                        "onUpdate:selected": z[1] || (z[1] = (x) => B.value = x),
                        "show-pending": be(ie),
                        expanded: "",
                        "menu-items": K.value
                      }, {
                        pending: Ft(() => [
                          Uo(Yt("div", b$, null, 512), [
                            [ae, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Ft(() => [
                          be(ie) ? ym("", !0) : (wn(), po("div", k$, [
                            Uo(Yt("span", $$, null, 512), [
                              [ae, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            Uo(Yt("span", V$, null, 512), [
                              [ae, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (wn(), po("div", y$, [
                      (wn(!0), po(Sm, null, _m(_.filterGroups, (x) => (wn(), po("div", {
                        key: x.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        vt(e$, {
                          "filter-group": x,
                          "tentatively-select-filter": L,
                          "is-selected": N,
                          limit: c(_.name, x.type) ? 4 : 0,
                          "get-sub-filter-config": (T) => l(T, _.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        c(_.name, x.type) ? (wn(), po("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: h$((T) => a(x.id), ["enter"]),
                          onClick: (T) => a(x.id)
                        }, [
                          Yt("span", null, wm(R.$i18n(I[x.id])), 1)
                        ], 40, C$)) : ym("", !0)
                      ]))), 128))
                    ]))
                  ]),
                  _: 2
                }, 1032, ["name", "label"]))), 128))
              ]),
              _: 1
            }, 8, ["active"])
          ])
        ]),
        _: 1
      }, 8, ["value", "fullscreen"]);
    };
  }
};
const Us = window.Vue.unref, vi = window.Vue.openBlock, bm = window.Vue.createBlock;
window.Vue.createCommentVNode;
const N$ = window.Vue.renderList, M$ = window.Vue.Fragment, km = window.Vue.createElementBlock, U$ = window.Vue.normalizeClass, $m = window.Vue.createVNode, I$ = {
  key: 1,
  class: "cx-suggestion-list__filters flex mx-4 pb-2"
}, Vm = window.Vue.ref, Em = window.Vue.watch, R$ = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = fe(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: o } = Iw(), { targetLanguageURLParameter: s } = F(), {
      getFiltersSummary: a,
      selectFilter: r,
      isFilterSelected: l,
      waitingForPageCollectionsFetch: c,
      validateURLFilterWithCollections: u,
      setFeaturedCollectionFilterIfNeeded: i
    } = ro(), d = Vm(!1), g = () => {
      o(), d.value = !0;
    }, m = (h) => {
      n(h), r(h);
    }, p = Vm(a());
    return Em(d, (h) => {
      h || (p.value = a());
    }), Em([c, s], ([h]) => {
      h || (u(), i(), p.value = a());
    }), (h, f) => Us(c) ? (vi(), bm(Us(mt), { key: 0 })) : (vi(), km("div", I$, [
      (vi(!0), km(M$, null, N$(p.value, (w) => (vi(), bm(ko, {
        key: w.label,
        class: U$(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": Us(l)(w)
        }]),
        icon: w.icon,
        content: w.label,
        onClick: (v) => m(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      $m(ko, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: Us(td),
        content: Us(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: g
      }, null, 8, ["icon", "content"]),
      $m(F$, {
        modelValue: d.value,
        "onUpdate:modelValue": f[0] || (f[0] = (w) => d.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, Io = window.Vue.computed, Lm = window.Vue.ref, Gl = window.Vue.watch, z$ = window.Vuex.useStore, O$ = () => {
  const e = z$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Tr(), r = Lt(), l = Io(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), c = Io(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), u = Lm(0), i = Lm(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, g = 4, m = Io(
    () => a(u.value)
  );
  Gl(
    m,
    () => {
      m.value.forEach((U) => {
        U.seen = !0;
      });
    },
    { deep: !0 }
  );
  const p = Io(
    () => s(i.value)
  );
  Gl(
    p,
    () => {
      p.value.forEach((U) => {
        U.seen = !0;
      });
    },
    { deep: !0 }
  );
  const h = () => {
    S(), k(), E(), P();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: w
  } = ad(), v = (U) => U.length === d, y = Io(
    () => v(p.value)
  ), C = Io(
    () => v(m.value)
  ), S = () => {
    const U = (u.value + 1) % g, X = v(
      a(U)
    );
    (!C.value || !X) && f();
  }, E = () => {
    const U = (i.value + 1) % g, X = v(
      s(U)
    );
    (!y.value || !X) && w();
  }, L = (U) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", U), S();
  }, N = (U) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", U), E();
  }, k = () => u.value = (u.value + 1) % g, P = () => i.value = (i.value + 1) % g;
  return Gl(
    o,
    () => {
      i.value = 0, E(), u.value = 0, S();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: p,
    currentSectionSuggestionsSlice: m,
    discardPageSuggestion: N,
    discardSectionSuggestion: L,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: c,
    sectionSuggestionsLoading: l,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: C
  };
}, j$ = window.Vuex.useStore, ud = () => {
  const e = j$(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = ad(), { addFeaturedCollectionFlag: o } = Pr(), s = (i, d, g) => e.state.suggestions.pageSuggestions.find(
    (m) => m.sourceLanguage === i && m.targetLanguage === d && m.sourceTitle === g
  ), a = (i) => b(void 0, null, function* () {
    const { sourceTitle: d, sourceLanguage: g, targetLanguage: m } = i;
    yield ge.markFavorite(d, g, m);
    const p = new rs({
      title: d,
      sourceLanguage: g,
      targetLanguage: m
    });
    yield o([p], {
      titleGetter: (h) => h.title
    }), e.commit("suggestions/addFavoriteSuggestion", p);
  });
  return {
    markFavoritePageSuggestion: (i) => {
      e.commit("suggestions/removePageSuggestionFromList", i), n(), a(i);
    },
    markFavoriteSectionSuggestion: (i) => {
      e.commit(
        "suggestions/removeSectionSuggestionFromList",
        i
      ), t(), a(i);
    },
    markFavoriteSuggestion: (i, d, g) => b(void 0, null, function* () {
      const m = s(
        d,
        g,
        i
      );
      m && (e.commit(
        "suggestions/removePageSuggestionFromList",
        m
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](d, g, i);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield ge.markFavorite(
        i,
        d,
        g
      );
      const h = new rs({
        title: i,
        sourceLanguage: d,
        targetLanguage: g
      });
      yield o([h], {
        titleGetter: (f) => f.title
      }), e.commit("suggestions/addFavoriteSuggestion", h);
    }),
    removeFavoriteSuggestion: (i) => (e.commit("suggestions/removeFavoriteSuggestion", i), ge.unmarkFavorite(i))
  };
}, H$ = "suggestion_no_seed", G$ = "suggestion_recent_edit", q$ = "suggestion_topic_area", W$ = "suggestion_search_result_seed", X$ = "suggestion_featured", K$ = "suggestion_collections", Y$ = "suggestion_region", Q$ = () => {
  const { currentSuggestionFilters: e } = F();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === an)
      return t ? G$ : H$;
    if (n === tt)
      return q$;
    if (n === Be)
      return Y$;
    if (n === qt)
      return W$;
    if (o === rn)
      return X$;
    if (o === ee || n === ee)
      return K$;
    const s = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${o}`
    );
    throw mw.errorLogger.logError(s, "error.contenttranslation"), s;
  };
};
const _i = window.Vue.unref, Tm = window.Vue.createVNode, Ro = window.Vue.toDisplayString, zo = window.Vue.createElementVNode, Is = window.Vue.openBlock, Rs = window.Vue.createElementBlock, Si = window.Vue.createCommentVNode, Am = window.Vue.createTextVNode, J$ = window.Vue.normalizeClass, Z$ = { class: "cx-featured-collection-banner py-4 px-6" }, eV = { class: "cx-featured-collection-banner__header mb-3" }, tV = { class: "cx-featured-collection-banner__header-text" }, nV = { class: "cx-featured-collection-banner__title mb-0" }, oV = {
  key: 0,
  class: "cx-featured-collection-banner__source mb-0"
}, sV = { class: "cx-featured-collection-banner__content" }, aV = { class: "cx-featured-collection-banner__learn-more-container" }, iV = ["href"], Dm = window.Codex.CdxIcon, ql = window.Vue.ref, rV = window.Vue.computed, lV = window.Vue.onMounted, cV = window.Vue.onUnmounted, uV = {
  __name: "FeaturedCollectionBanner",
  props: {
    communityName: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    learnMoreUrl: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = ql(!1), n = ql(null), o = ql(null), s = rV(() => n.value ? (o.value, n.value.scrollHeight > n.value.clientHeight) : !1), a = () => {
      t.value = !t.value;
    }, r = () => {
      o.value = window.innerWidth;
    };
    return lV(() => {
      window.addEventListener("resize", r);
    }), cV(() => {
      window.removeEventListener("resize", r);
    }), (l, c) => (Is(), Rs("div", Z$, [
      zo("div", eV, [
        Tm(_i(Dm), {
          icon: _i(od),
          class: "cx-featured-collection-banner__icon me-3 mt-1"
        }, null, 8, ["icon"]),
        zo("div", tV, [
          zo("h5", nV, Ro(l.$i18n("cx-featured-collection-banner-title")), 1),
          e.communityName ? (Is(), Rs("span", oV, Ro(e.communityName), 1)) : Si("", !0)
        ])
      ]),
      zo("div", sV, [
        zo("div", {
          ref_key: "descriptionRef",
          ref: n,
          class: J$(["cx-featured-collection-banner__description", {
            "cx-featured-collection-banner__description--expanded": t.value
          }])
        }, [
          Am(Ro(e.description || l.$i18n("cx-featured-collection-banner-description")) + " ", 1),
          t.value ? (Is(), Rs("button", {
            key: 0,
            class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--inline",
            onClick: a
          }, Ro(l.$i18n("cx-featured-collection-banner-toggle-less")), 1)) : Si("", !0)
        ], 2),
        !t.value && s.value ? (Is(), Rs("button", {
          key: 0,
          class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--external mb-1 ml-1",
          onClick: a
        }, Ro(l.$i18n("cx-featured-collection-banner-toggle-more")), 1)) : Si("", !0)
      ]),
      zo("div", aV, [
        (t.value || !s.value) && e.learnMoreUrl ? (Is(), Rs("a", {
          key: 0,
          href: e.learnMoreUrl,
          class: "cx-featured-collection-banner__learn-more",
          target: "_blank"
        }, [
          Am(Ro(l.$i18n("cx-featured-collection-banner-learn-more")) + " ", 1),
          Tm(_i(Dm), {
            icon: _i(Ba),
            size: "small",
            class: "cx-featured-collection-banner__learn-more-icon"
          }, null, 8, ["icon"])
        ], 8, iV)) : Si("", !0)
      ])
    ]));
  }
};
const Pm = window.Vue.normalizeClass, dV = window.Vue.resolveDirective, zs = window.Vue.createElementVNode, yi = window.Vue.withDirectives, pe = window.Vue.unref, Qe = window.Vue.openBlock, Nt = window.Vue.createBlock, vn = window.Vue.createCommentVNode, Wl = window.Vue.createVNode, Os = window.Vue.withCtx, Bm = window.Vue.renderList, Fm = window.Vue.Fragment, Xl = window.Vue.createElementBlock, gV = window.Vue.toDisplayString, mV = window.Vue.createTextVNode, pV = window.Vue.vShow, hV = { class: "cx-suggestion-list" }, fV = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, wV = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, vV = { class: "cx-suggestion-list__refresh-button-container justify-center" }, _t = window.Vue.computed, _V = window.Vue.inject, SV = window.Vue.ref, yV = window.Codex.CdxButton, CV = window.Codex.CdxIcon, xV = window.Vuex.useStore, bV = {
  __name: "CXSuggestionList",
  props: {
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const {
      sourceLanguageURLParameter: t,
      targetLanguageURLParameter: n,
      currentSuggestionFilters: o
    } = F(), { supportedLanguageCodes: s } = Aa(), a = tw(), r = (z) => a(z, n.value), l = (z) => a(t.value, z), c = Q$(), { featuredCollection: u } = Wt(), { findSelectedFilter: i } = ro(), d = _t(() => i()), g = Na(), m = (z) => {
      g(
        z.sourceTitle,
        z.sourceLanguage,
        z.targetLanguage,
        c(z.suggestionSeed),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: p,
      currentSectionSuggestionsSlice: h,
      discardPageSuggestion: f,
      discardSectionSuggestion: w,
      onSuggestionRefresh: v,
      pageSuggestionsLoading: y,
      sectionSuggestionsLoading: C,
      isCurrentPageSuggestionsSliceFull: S,
      isCurrentSectionSuggestionsSliceFull: E
    } = O$(), L = SV(null), N = Lt(), k = () => {
      N({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), v(), L.value && L.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: P, markFavoritePageSuggestion: U } = ud(), X = _V("breakpoints"), se = _t(() => X.value.mobile), ie = _t(
      () => se.value ? null : "pb-2 flex justify-between items-center"
    ), ne = xV(), B = _t(
      () => ne.state.suggestions.isPageSuggestionsFetchPending
    ), I = _t(
      () => ne.state.suggestions.isSectionSuggestionsFetchPending
    ), K = _t(
      () => B.value || y.value && !S.value
    ), Q = _t(
      () => I.value || C.value && !E.value
    ), ye = _t(
      () => B.value || y.value || p.value.length > 0
    ), $e = _t(
      () => I.value || C.value || h.value.length > 0
    ), xe = _t(
      () => !ye.value && !$e.value
    ), Ne = _t(
      () => !C.value && !y.value && !B.value && !I.value && !xe.value
    ), R = _t(
      () => {
        var z;
        return u.value && ((z = d.value) == null ? void 0 : z.id) === u.value.name;
      }
    );
    return (z, ae) => {
      const _ = dV("i18n");
      return yi((Qe(), Xl("div", hV, [
        Wl(pe(Ze), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: Os(() => [
            zs("div", {
              class: Pm(["cx-suggestion-list__header-card__header px-4", ie.value])
            }, [
              yi(zs("h3", {
                class: Pm(["mw-ui-card__title mb-0", { "py-3": se.value }])
              }, null, 2), [
                [_, void 0, "cx-suggestionlist-title"]
              ]),
              se.value ? vn("", !0) : (Qe(), Nt(Sr, {
                key: 0,
                "source-languages": pe(s),
                "target-languages": pe(s),
                "selected-source-language": pe(t),
                "selected-target-language": pe(n),
                "onUpdate:selectedSourceLanguage": r,
                "onUpdate:selectedTargetLanguage": l
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Wl(R$)
          ]),
          default: Os(() => [
            se.value ? (Qe(), Nt(Sr, {
              key: 0,
              "source-languages": pe(s),
              "target-languages": pe(s),
              "selected-source-language": pe(t),
              "selected-target-language": pe(n),
              "onUpdate:selectedSourceLanguage": r,
              "onUpdate:selectedTargetLanguage": l
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : vn("", !0)
          ]),
          _: 1
        }),
        R.value ? (Qe(), Nt(uV, {
          key: 0,
          "community-name": pe(u).communityName,
          description: pe(u).description,
          "learn-more-url": pe(u).link
        }, null, 8, ["community-name", "description", "learn-more-url"])) : vn("", !0),
        $e.value ? (Qe(), Nt(pe(Ze), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: Os(() => [
            yi(zs("h5", fV, null, 512), [
              [_, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Qe(!0), Xl(Fm, null, Bm(pe(h), (D, x) => (Qe(), Nt(Mu, {
              key: `section-suggestion-${x}`,
              class: "ma-0",
              suggestion: D,
              onClose: (T) => pe(w)(D),
              onClick: (T) => m(D),
              onBookmark: (T) => pe(P)(D)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Q.value ? (Qe(), Nt(pe(mt), { key: 0 })) : vn("", !0)
          ]),
          _: 1
        })) : vn("", !0),
        ye.value ? (Qe(), Nt(pe(Ze), {
          key: 2,
          ref_key: "pageSuggestionsList",
          ref: L,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: Os(() => [
            yi(zs("h5", wV, null, 512), [
              [_, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Qe(!0), Xl(Fm, null, Bm(pe(p), (D, x) => (Qe(), Nt(Mu, {
              key: `page-suggestion-${x}`,
              suggestion: D,
              onClose: (T) => pe(f)(D),
              onClick: (T) => m(D),
              onBookmark: (T) => pe(U)(D)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            K.value ? (Qe(), Nt(pe(mt), { key: 0 })) : vn("", !0)
          ]),
          _: 1
        }, 512)) : vn("", !0),
        xe.value ? (Qe(), Nt(Mw, {
          key: 3,
          title: z.$i18n("cx-sx-suggestion-list-empty-title"),
          description: z.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : vn("", !0),
        zs("div", vV, [
          Ne.value ? (Qe(), Nt(pe(yV), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: k
          }, {
            default: Os(() => [
              Wl(pe(CV), {
                class: "me-1",
                icon: pe(Yf)
              }, null, 8, ["icon"]),
              mV(" " + gV(z.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : vn("", !0)
        ])
      ], 512)), [
        [pV, e.active]
      ]);
    };
  }
}, kV = window.Vue.resolveDirective, $V = window.Vue.createElementVNode, VV = window.Vue.withDirectives, EV = window.Vue.renderList, LV = window.Vue.Fragment, Kl = window.Vue.openBlock, TV = window.Vue.createElementBlock, Nm = window.Vue.unref, Mm = window.Vue.createBlock, Um = window.Vue.withCtx, AV = window.Vue.createCommentVNode, DV = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, PV = window.Vue.computed, BV = window.Vuex.useStore, FV = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = BV(), n = PV(() => t.state.suggestions.favorites || []), o = Na(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = ud();
    return (r, l) => {
      const c = kV("i18n");
      return n.value.length ? (Kl(), Mm(Nm(Ze), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Um(() => [
          VV($V("h3", DV, null, 512), [
            [c, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Um(() => [
          (Kl(!0), TV(LV, null, EV(n.value, (u, i) => (Kl(), Mm(Mu, {
            key: `favorite-${i}`,
            suggestion: u,
            onClick: (d) => s(u),
            onBookmark: (d) => Nm(a)(u)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : AV("", !0);
    };
  }
};
const NV = window.Vue.resolveDirective, js = window.Vue.createElementVNode, MV = window.Vue.withDirectives, UV = window.Vue.renderList, IV = window.Vue.Fragment, Im = window.Vue.openBlock, Rm = window.Vue.createElementBlock, RV = window.Vue.unref, zV = window.Vue.createVNode, OV = window.Vue.toDisplayString, jV = { class: "cx-help-panel pa-4" }, HV = { class: "cx-help-panel__item-list mt-6 ps-2" }, GV = ["href", "target"], qV = ["textContent"], WV = window.Codex.CdxIcon, XV = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = fe(), n = [
      {
        icon: TC,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: $C,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = NV("i18n");
      return Im(), Rm("div", jV, [
        MV(js("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        js("ul", HV, [
          (Im(), Rm(IV, null, UV(n, (r, l) => js("li", {
            key: l,
            class: "mt-4"
          }, [
            js("a", {
              href: r.href,
              target: r.target
            }, [
              zV(RV(WV), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              js("span", {
                textContent: OV(r.label)
              }, null, 8, qV)
            ], 8, GV)
          ])), 64))
        ])
      ]);
    };
  }
};
const KV = window.Vue.resolveDirective, zn = window.Vue.createElementVNode, Yl = window.Vue.withDirectives, Ql = window.Vue.toDisplayString, Ci = window.Vue.unref, Jl = window.Vue.withCtx, xi = window.Vue.createVNode, YV = window.Vue.openBlock, QV = window.Vue.createElementBlock, JV = { class: "cx-stats-panel pa-4" }, ZV = ["textContent"], eE = { class: "cx-stats-panel__monthly-stats-label" }, tE = ["textContent"], nE = { class: "cx-stats-panel__total-stats-label" }, oE = ["href", "target"], sE = ["textContent"], aE = window.Codex.CdxIcon, iE = window.Vue.ref, zm = window.Vue.computed, rE = window.Vue.watch, lE = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = fe(), n = e, o = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", s = zm(() => {
      var u, i;
      const c = ((i = (u = n.stats) == null ? void 0 : u[o]) == null ? void 0 : i.count) || 0;
      return mw.language.convertNumber(c);
    }), a = zm(() => {
      var u, i;
      const c = ((i = (u = n.stats) == null ? void 0 : u[o]) == null ? void 0 : i.delta) || 0;
      return mw.language.convertNumber(c);
    }), r = iE(null), l = {
      icon: Xf,
      label: t.i18n("cx-sx-dashboard-stats-panel-all-stats-label"),
      href: "https://superset.wmcloud.org/superset/dashboard/p/X61GbQpZ5Rb/",
      target: "_blank"
    };
    return rE(
      () => n.stats,
      () => {
        const c = n.stats, u = r.value.getContext("2d"), i = Object.keys(n.stats || {}).sort(), d = i.reduce(
          (E, L) => Math.max(E, c[L].delta),
          0
        ), g = i.map((E) => c[E].delta), m = r.value.getBoundingClientRect().width, p = r.value.getBoundingClientRect().height;
        r.value.width = m, r.value.height = p;
        const h = 4, f = 6, w = 50, v = (w - h) / d;
        let y = h;
        const C = Math.floor(
          (m - h) / (f + h)
        ), S = g.slice(
          Math.max(g.length - C, 0)
        );
        S.forEach((E, L) => {
          L === S.length - 1 && (u.fillStyle = "#36c");
          const N = w - E * v;
          u.fillRect(y, N, f, E * v), y += f + h;
        });
      }
    ), (c, u) => {
      const i = KV("i18n");
      return YV(), QV("div", JV, [
        Yl(zn("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        xi(Ci(M), null, {
          default: Jl(() => [
            xi(Ci(V), { class: "cx-stats-panel__monthly-stats" }, {
              default: Jl(() => [
                zn("h3", {
                  textContent: Ql(a.value)
                }, null, 8, ZV),
                Yl(zn("h5", eE, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            xi(Ci(V), { class: "cx-stats-panel__total-stats" }, {
              default: Jl(() => [
                zn("h3", {
                  textContent: Ql(s.value)
                }, null, 8, tE),
                Yl(zn("h5", nE, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        zn("canvas", {
          ref_key: "canvasRef",
          ref: r,
          class: "cx-stats-panel__canvas"
        }, null, 512),
        zn("a", {
          class: "cx-stats-panel__stats-link",
          href: l.href,
          target: l.target
        }, [
          xi(Ci(aE), {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          zn("span", {
            textContent: Ql(l.label)
          }, null, 8, sE)
        ], 8, oE)
      ]);
    };
  }
}, Rw = () => {
  const e = Lt();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const cE = window.Vue.renderSlot, uE = window.Vue.unref, dE = window.Vue.createVNode, gE = window.Vue.createElementVNode, mE = window.Vue.openBlock, pE = window.Vue.createElementBlock, hE = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, fE = { class: "col-12 ma-0 pa-0" }, wE = {
  __name: "MWBottomNavigation",
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
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = Rw(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (mE(), pE("footer", hE, [
      gE("div", fE, [
        cE(a.$slots, "default", {}, () => [
          dE(uE(Ea), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, vE = window.Vuex.useStore, _E = () => {
  const e = vE(), t = Eo(), { addFeaturedCollectionFlag: n } = Pr();
  return () => b(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const o = yield ge.fetchFavorites();
    if (!o || !o.length)
      return;
    const s = {};
    for (const a of o)
      ge.fetchSectionSuggestion(
        a.sourceLanguage,
        a.title,
        a.targetLanguage
      ).then(
        (r) => a.missingSectionsCount = (r == null ? void 0 : r.missingSectionsCount) || 0
      ), s[a.sourceLanguage] = [
        ...s[a.sourceLanguage] || [],
        a
      ];
    for (const [a, r] of Object.entries(
      s
    ))
      t(
        a,
        r.map((l) => l.title)
      );
    yield n(o, {
      titleGetter: (a) => a.title
    });
    for (const a of o)
      e.commit("suggestions/addFavoriteSuggestion", a);
  });
}, SE = window.Vuex.useStore, zw = () => {
  const e = SE(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = F(), { isDefaultFilter: r } = zu(), { previousRoute: l } = Fe(e), c = Lt(), u = () => {
    const g = {
      ulsmissinglanguages: "content_language_selector",
      mflanguagesearcher: "content_language_selector",
      mfrecenttranslation: "recent_translation",
      mfrecentedit: "recent_edit",
      mffrequentlanguages: "frequent_languages",
      newbytranslationmobile: "invite_new_article_creation",
      specialcontribute: "contributions_page",
      publishingfollowup: "followup_after_publishing",
      ulsaddlanguages: "language_selector_options",
      mintforreaders: "preselect_mint_for_readers",
      articleplaceholder: "article_placeholder"
    }, m = t("campaign");
    return g[m];
  }, i = () => {
    if (n.value)
      return u() || "direct_preselect";
    const m = {
      "sx-article-search": "return_from_search",
      "sx-translation-confirmer": "return_from_confirmation",
      "sx-section-selector": "return_from_section_selection",
      "sx-sentence-selector": "editor_close"
    }[l.value];
    return m || (r(o.value) ? u() || "direct" : "suggestion_filter_direct_preselect");
  };
  return { logDashboardOpenEvent: () => {
    if (n.value && u()) {
      const p = t("campaign");
      mw.hook("mw.cx.cta.accept").fire(
        p,
        s.value,
        a.value
      );
    }
    const g = i(), m = {
      event_type: "dashboard_open",
      event_source: g,
      translation_source_language: s.value,
      translation_target_language: a.value
    };
    return g === "suggestion_filter_direct_preselect" && (m.event_context = o.value.id), c(m);
  } };
}, Om = window.Vue.computed, yE = window.Vuex.useStore, Le = () => {
  yE();
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = F(), { getLoadedSuggestion: s } = Fa(), a = Om(
    () => s(
      e.value,
      t.value,
      n.value
    )
  ), r = Om(() => o.value === no.LEAD_SECTION_DUMMY_TITLE ? o.value : a.value.missingSections[o.value] || a.value.presentSections[o.value] || "");
  return { sectionSuggestion: a, activeSectionTargetTitle: r };
}, CE = window.Vuex.useStore, xE = window.Vue.computed, Xt = () => {
  const e = CE(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = F();
  return { currentTranslation: xE(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, Zl = window.Vue.computed, bE = window.Vuex.useStore, ot = () => {
  const e = bE(), { sectionSuggestion: t } = Le(), { currentTranslation: n } = Xt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = F(), r = Zl(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = Zl(
    () => {
      var u, i;
      return ((u = t.value) == null ? void 0 : u.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    }
  ), c = Zl(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: r, currentTargetPage: c, currentTargetPageTitle: l };
}, bi = window.Vue.computed, kE = window.Vuex.useStore, oe = () => {
  const e = kE(), { currentSourcePage: t } = ot(), { currentMTProvider: n } = Fe(e), { sectionURLParameter: o } = F(), s = bi(() => {
    var c, u;
    return o.value ? (u = t.value) == null ? void 0 : u.getSectionByTitle(o.value) : (c = t.value) == null ? void 0 : c.leadSection;
  }), a = bi(
    () => {
      var c;
      return (c = s.value) == null ? void 0 : c.isTitleSelected;
    }
  ), r = bi(
    () => {
      var c;
      return (c = s.value) == null ? void 0 : c.selectedContentTranslationUnit;
    }
  ), l = bi(
    () => {
      var c;
      return (c = s.value) == null ? void 0 : c.getProposedTranslationByMtProvider(
        n.value
      );
    }
  );
  return {
    sourceSection: s,
    isSectionTitleSelected: a,
    selectedContentTranslationUnit: r,
    currentProposedTranslation: l
  };
}, ec = window.Vue.computed, ht = () => {
  const { sectionURLParameter: e } = F(), { targetPageExists: t } = cn(), { sourceSection: n } = oe(), { sectionSuggestion: o } = Le(), s = ec(
    () => {
      var l;
      return t.value && !!((l = n.value) != null && l.isLeadSection);
    }
  ), a = ec(
    () => {
      var l;
      return !!((l = n.value) != null && l.isLeadSection) && !t.value;
    }
  );
  return {
    isCurrentSectionPresent: ec(
      () => {
        var l;
        return s.value || !!((l = o.value) != null && l.presentSections.hasOwnProperty(
          e.value
        ));
      }
    ),
    isPresentLeadSection: s,
    isMissingLeadSection: a
  };
}, $E = window.Vue.ref, ki = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, tc = $E(null), Tt = () => {
  const { isCurrentSectionPresent: e } = ht(), t = () => {
    e.value ? o(ki.EXPAND) : o(ki.NEW_SECTION);
  }, n = () => {
    tc.value = null;
  }, o = (s) => {
    if (!Object.values(ki).includes(s))
      throw new Error("[CX] Invalid publishing target used");
    tc.value = s;
  };
  return {
    target: tc,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: o,
    PUBLISHING_TARGETS: ki
  };
}, VE = window.Vue.watch, EE = () => {
  const { fetchAllTranslations: e } = hs(), t = Zf(), n = _E(), { fetchPageCollectionGroups: o } = Ar(), { logDashboardOpenEvent: s } = zw(), { applicationLanguagesInitialized: a } = nw(), { clearPublishTarget: r } = Tt();
  return () => b(void 0, null, function* () {
    o(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), VE(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, jm = window.Vue.computed, LE = window.Vue.ref, TE = window.Vue.watch, AE = window.Vue.watchEffect, DE = window.Vuex.useStore, PE = ["suggestions", "draft", "published"], BE = () => {
  const e = DE(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = F(), { translationsFetched: o } = hs(), s = LE(null);
  if (PE.includes(t.value))
    s.value = t.value;
  else {
    const a = jm(
      () => o.value.draft
    ), r = jm(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", TE(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return AE(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, FE = window.Vue.computed, NE = () => {
  const e = fe();
  return FE(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: F0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Cr,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: B0,
        type: "text"
      }
    }
  ]);
};
const ke = window.Vue.unref, Ie = window.Vue.createVNode, ME = window.Vue.toDisplayString, UE = window.Vue.createTextVNode, _n = window.Vue.withCtx, nc = window.Vue.openBlock, Hm = window.Vue.createBlock, Gm = window.Vue.createCommentVNode, IE = window.Vue.vShow, RE = window.Vue.withDirectives, zE = window.Vue.isRef, OE = window.Vue.createElementBlock, qm = window.Vue.computed, jE = window.Vue.inject, HE = window.Vuex.useStore, GE = window.Codex.CdxButton, qE = window.Codex.CdxIcon, WE = {
  __name: "CXDashboard",
  setup(e) {
    const t = nt(), n = Lt(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    EE()();
    const a = HE();
    a.dispatch("translator/fetchTranslatorStats");
    const r = qm(() => a.state.translator.translatorStats), l = BE(), c = NE(), u = Rw(), i = (m) => {
      u(m), l.value = m;
    }, d = jE("breakpoints"), g = qm(() => d.value.mobile);
    return mw.cx.eventlogging.stats.dashboardAccess(g.value), (m, p) => (nc(), OE("div", null, [
      Ie(ke(M), { class: "ma-0 pb-4" }, {
        default: _n(() => [
          Ie(ke(GE), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: _n(() => [
              Ie(ke(qE), {
                class: "me-1",
                icon: ke(jf)
              }, null, 8, ["icon"]),
              UE(" " + ME(m.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Ie(ke(M), {
        class: "ma-0",
        align: "start"
      }, {
        default: _n(() => [
          m.$mwui.breakpoint.tabletAndUp ? (nc(), Hm(ke(V), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: _n(() => [
              Ie(ke(Ea), {
                id: "dashboard-list-selector--desktop",
                items: ke(c),
                active: ke(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Gm("", !0),
          Ie(ke(V), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: _n(() => [
              RE(Ie(FV, null, null, 512), [
                [IE, ke(l) === "suggestions"]
              ]),
              Ie(bV, {
                active: ke(l) === "suggestions"
              }, null, 8, ["active"]),
              Ie(em, {
                "translation-status": "draft",
                "active-status": ke(l)
              }, null, 8, ["active-status"]),
              Ie(em, {
                "translation-status": "published",
                "active-status": ke(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Ie(ke(V), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: _n(() => [
              Ie(ke(M), {
                class: "ma-0",
                align: "start"
              }, {
                default: _n(() => [
                  Ie(ke(V), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: _n(() => [
                      Ie(lE, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Ie(ke(V), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: _n(() => [
                      Ie(XV)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      m.$mwui.breakpoint.mobile ? (nc(), Hm(wE, {
        key: 0,
        active: ke(l),
        "onUpdate:active": p[0] || (p[0] = (h) => zE(l) ? l.value = h : null),
        items: ke(c)
      }, null, 8, ["active", "items"])) : Gm("", !0)
    ]));
  }
}, XE = {
  name: "DashboardView",
  components: { CxDashboard: WE }
}, KE = window.Vue.resolveComponent, YE = window.Vue.createVNode, QE = window.Vue.openBlock, JE = window.Vue.createElementBlock, ZE = { class: "cx-translation-dashboard" };
function e4(e, t, n, o, s, a) {
  const r = KE("cx-dashboard");
  return QE(), JE("main", ZE, [
    YE(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const Wm = /* @__PURE__ */ he(XE, [["render", e4]]), Oo = window.Vue.computed, t4 = () => {
  const { sectionSuggestion: e } = Le(), { targetLanguageURLParameter: t } = F(), { currentTranslation: n } = Xt(), o = Oo(
    () => {
      var g, m, p;
      return (p = (m = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : m[0]) == null ? void 0 : p.sourceTitle;
    }
  ), s = Oo(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = Oo(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = cn(), c = Oo(() => r ? Z.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), u = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value >= 1 ? "cx-sx-select-section" : a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : a.value > 0 ? "cx-sx-select-section" : "" : "cx-sx-start-translation-button-label", i = Oo(() => {
    if (s.value > 1) {
      const g = "cx-sx-existing-translation-additional-info", m = ["$1", s.value - 1];
      return mw.message(g, ...m).parse().replace("$1", `"${o.value}"`);
    } else if (s.value === 1) {
      const g = "cx-sx-translation-confirmer-action-message-single-missing-multiple-present";
      return mw.message(g, "$1").parse().replace("$1", `"${o.value}"`);
    } else {
      const g = "cx-sx-translation-confirmer-action-message-none-missing-multiple-present";
      return mw.message(g).parse();
    }
  }), d = Oo(
    () => {
      var g;
      return !r.value || ((g = e.value) == null ? void 0 : g.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessage: i,
    getActionButtonLabel: u,
    isProgressiveButton: d,
    targetArticlePath: c
  };
};
function n4(e) {
  return e.$el = $(e), e;
}
function o4(e, t, n, o) {
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
function s4() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function a4(e, t) {
  return b(this, null, function* () {
    yield dd(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = n4(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const i4 = window.Vue.computed, r4 = window.Vue.onMounted, l4 = window.Vue.ref;
function c4(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const u4 = {
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
    useText: {
      type: Boolean,
      required: !0
    },
    dir: {
      type: String,
      default: "auto"
    }
  },
  emits: ["ready", "close", "edit-completed"],
  setup(e, t) {
    const n = l4(null);
    let o = null;
    const s = i4(
      () => e.useText ? o.getDom().body.textContent : o.getHtml()
    ), a = () => {
      o.destroy(), n.value.querySelector(".toolbar").innerHTML = "";
    }, c = {
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
    return r4(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = c4;
      const i = yield a4(c, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = o4(
        i,
        e.content,
        e.language,
        e.dir
      );
      const d = ve.ui.contextItemFactory.lookup("reference");
      d.prototype.getRendering = s4, o.focus();
    })), { sxeditor: n };
  }
}, fr = window.Vue.createElementVNode, d4 = window.Vue.openBlock, g4 = window.Vue.createElementBlock, m4 = ["lang", "dir"], p4 = /* @__PURE__ */ fr("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ fr("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ fr("div", { class: "toolbar" })
  ])
], -1), h4 = ["lang", "dir"];
function f4(e, t, n, o, s, a) {
  return d4(), g4("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    p4,
    fr("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, h4)
  ], 8, m4);
}
const w4 = /* @__PURE__ */ he(u4, [["render", f4]]);
function dd() {
  return mw.loader.using("mw.cx3.ve");
}
const v4 = window.Vuex.useStore, _4 = () => {
  const e = v4();
  return (t, n) => b(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield dd(), new Promise((s) => {
      setTimeout(() => {
        const a = Tf.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, S4 = window.Vuex.useStore, Ow = () => {
  const e = S4();
  return (t, n, o, s = null) => b(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield Vo.fetchPageContent(
      t,
      n,
      o,
      s
    );
    a = e.getters["mediawiki/getPage"](
      t,
      o
    ), a ? a.content || (a.content = r.content, e.commit("mediawiki/setPageSections", {
      page: a,
      sections: r.sections
    })) : e.commit("mediawiki/addPage", r);
  });
}, Ur = () => {
  const { currentSourcePage: e } = ot(), t = _4(), n = Ow(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = F(), c = (d, g) => b(void 0, null, function* () {
    if (!d()) {
      try {
        yield n(
          s.value,
          a.value,
          r.value,
          l.value
        );
      } catch (m) {
        throw mw.cx.eventlogging.stats.sourceArticleFetchFailed(!0), m;
      }
      Gt || (yield t(
        s.value,
        r.value
      ));
    }
    g();
  });
  return {
    selectPageSectionByIndex: (d) => {
      const g = () => {
        var p;
        return (p = e.value.sections) == null ? void 0 : p[d];
      };
      return c(g, () => {
        const p = g();
        d === 0 ? p.originalTitle = e.value.title : o(p.originalTitle);
      });
    },
    selectPageSectionByTitle: (d) => c(() => e.value.getSectionByTitle(d), () => {
      o(d);
    })
  };
}, y4 = window.Vuex.useStore, fs = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = F(), { activeSectionTargetTitle: a } = Le(), { target: r } = Tt(), l = y4(), c = nt(), u = () => {
    const m = c.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !l.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return c.getRoutes().find((p) => p.name === m);
  }, i = () => {
    const g = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), m = Z.getCurrentWikiLanguageCode();
    if (!g || t.value === m)
      return !1;
    const p = o.value ? { section: o.value } : {}, h = Z.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      p
    );
    return location.href = h + "#" + u().path, !0;
  }, d = () => {
    const g = {};
    o.value && (g.sourcesection = o.value, a.value && (g.targetsection = a.value)), r.value && (g.publishtarget = r.value), location.href = Z.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      g
    );
  };
  return () => {
    if (Z.setCXToken(
      e.value,
      t.value,
      n.value
    ), Gt) {
      d();
      return;
    }
    if (i())
      return;
    const m = u();
    c.push({ name: m.name });
  };
}, Xm = window.Vue.computed, C4 = window.Vue.ref, x4 = window.Vue.watchEffect, oc = /* @__PURE__ */ new Map(), b4 = (e, t) => b(void 0, null, function* () {
  return (yield ge.fetchArticleSections(
    e,
    t
  )).sections.filter(
    (s) => s.level === "2"
  )[0].byteoffset;
}), k4 = (e, t) => {
  const n = `${e}:${t}`;
  if (oc.has(n))
    return oc.get(n);
  const o = b4(e, t);
  return oc.set(n, o), o;
}, jw = () => {
  const { currentSourcePage: e } = ot(), { sectionSuggestion: t } = Le(), { sectionURLParameter: n } = F(), o = C4(null);
  x4(() => b(void 0, null, function* () {
    var r;
    if (t.value && n.value)
      o.value = t.value.getSectionSize(n.value);
    else if (t.value) {
      const { missingSections: l } = t.value;
      o.value = Object.keys(l).reduce(
        (c, u) => c + t.value.getSectionSize(u),
        0
      );
    } else if (e.value && !Gt) {
      const l = e.value.language, c = e.value.title;
      o.value = yield k4(l, c);
    } else
      o.value = ((r = e.value) == null ? void 0 : r.articleSize) || null;
  }));
  const s = Xm(() => o.value ? !t.value && Gt ? Mf(o.value) : Ku(o.value) : Xe.unknown);
  return { isQuickTranslation: Xm(() => s.value === Xe.stub || s.value === Xe.easy), difficulty: s, sizeInBytes: o };
}, gd = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = F(), s = Lt(), { difficulty: a } = jw();
  return {
    logDashboardTranslationStartEvent: () => {
      const l = {
        event_type: "dashboard_translation_start",
        event_source: Dw.value,
        translation_source_language: e.value,
        translation_target_language: t.value,
        translation_source_title: n.value,
        translation_difficulty_level: a.value
        // translation_target_exists:
        // 	description:
        // 		Whether the target article or section already exists. Applies only to
        // 		events which relate to a specific translation or suggestion: all `editor_`
        // 		and `publish_` events and some `dashboard_` events (e.g. `dashboard_start_translation`,
        // 		`dashboard_delete_translation`). In section translation, if the user discards the mapping
        // 		to an existing target section, the value should change to false in future events.
        // 	status:
        // 		Currently, we do not support "override page/section" functionality, and thus this property is not
        // 		yet required, translation_target_exists
      };
      return Nu.value && (l.event_context = Nu.value), o.value ? (l.translation_source_section = o.value, l.translation_type = "section") : l.translation_type = "article", s(l);
    }
  };
}, md = () => {
  const e = Lt(), { currentTranslation: t } = Xt();
  return () => {
    if (!t.value)
      return mw.log.error(
        "[CX Event Logging] No current draft translation to continue"
      ), Promise.resolve();
    const {
      translationId: n,
      sourceLanguage: o,
      targetLanguage: s,
      sourceTitle: a,
      targetTitle: r,
      isLeadSectionTranslation: l,
      sourceSectionTitle: c,
      targetSectionTitle: u
    } = t.value, i = {
      event_type: "dashboard_translation_continue",
      translation_id: n,
      translation_source_language: o,
      translation_source_title: a,
      translation_target_language: s,
      translation_target_title: r,
      translation_type: l ? "article" : "section"
    };
    return c && (i.translation_source_section = c), u && (i.translation_target_section = u), e(i);
  };
}, $4 = window.Vue.ref, V4 = () => {
  const e = nt(), { logDashboardTranslationStartEvent: t } = gd(), n = md(), o = fs(), { sectionURLParameter: s } = F(), { targetPageExists: a } = cn(), { selectPageSectionByTitle: r } = Ur(), l = () => b(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), c = $4(!1), { currentTranslation: u } = Xt();
  return {
    handlePrimaryButtonClick: () => {
      u.value ? u.value.isArticleTranslation && !Gt ? c.value = !0 : (n(), o()) : s.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: c
  };
};
const E4 = window.Vue.resolveDirective, Km = window.Vue.createElementVNode, Ym = window.Vue.withDirectives, L4 = window.Vue.unref, T4 = window.Vue.withCtx, A4 = window.Vue.openBlock, D4 = window.Vue.createBlock, P4 = {
  href: "",
  target: "_blank"
}, B4 = window.Codex.CdxDialog, F4 = {
  __name: "UnreviewedTranslationDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    targetUrl: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (u) => o("update:modelValue", u), a = fe(), r = {
      label: a.i18n(
        "cx-unreviewed-translation-dialog-review-translation-button-label"
      ),
      actionType: "progressive"
    }, l = {
      label: a.i18n("cx-unreviewed-translation-dialog-close-button-label")
    };
    function c() {
      window.open(n.targetUrl, "_blank"), s(!1);
    }
    return (u, i) => {
      const d = E4("i18n");
      return A4(), D4(L4(B4), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: u.$i18n("cx-unreviewed-translation-dialog-title"),
        "use-close-button": !0,
        "primary-action": r,
        "default-action": l,
        "onUpdate:open": i[0] || (i[0] = (g) => s(g)),
        onPrimary: c,
        onDefault: i[1] || (i[1] = (g) => s(!1))
      }, {
        default: T4(() => [
          Ym(Km("p", null, null, 512), [
            [d, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Ym(Km("a", P4, null, 512), [
            [d, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
}, N4 = () => {
  const {
    sectionURLParameter: e,
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = F(), { loadSuggestion: s } = Fa();
  return () => b(void 0, null, function* () {
    const a = yield s(
      t.value,
      n.value,
      o.value
    );
    return a instanceof on ? a.sourceSections.includes(e.value) : !1;
  });
};
const Se = window.Vue.unref, M4 = window.Vue.resolveDirective, Hs = window.Vue.createElementVNode, Qm = window.Vue.withDirectives, Gs = window.Vue.openBlock, sc = window.Vue.createElementBlock, ac = window.Vue.createCommentVNode, St = window.Vue.createVNode, Mt = window.Vue.withCtx, ic = window.Vue.toDisplayString, rc = window.Vue.createTextVNode, U4 = window.Vue.withModifiers, Jm = window.Vue.createBlock, I4 = window.Vue.Fragment, R4 = { class: "sx-translation-confirmer-body pb-4" }, z4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, O4 = ["innerHTML"], j4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, H4 = ["href"], G4 = ["innerHTML"], lc = window.Vue.computed, cc = window.Vue.ref, q4 = window.Vue.watchEffect, W4 = window.Vuex.useStore, uc = window.Codex.CdxButton, X4 = window.Codex.CdxIcon, K4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = nt(), o = W4(), { sectionSuggestion: s } = Le(), { targetLanguageAutonym: a } = Fe(o), { sectionURLParameter: r, clearSectionURLParameter: l } = F(), { logDashboardTranslationStartEvent: c } = gd(), u = fs(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: d } = V4(), g = cc(!1), m = cc(null), p = () => b(this, null, function* () {
      let ie = !0;
      try {
        ie = yield $t.checkUnreviewedTranslations();
      } catch (ne) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          ne
        );
      }
      ie !== !0 && (g.value = !0, m.value = ie.targetUrl);
    }), h = () => b(this, null, function* () {
      yield p(), !g.value && (c(), u());
    }), f = () => b(this, null, function* () {
      yield p(), !g.value && i();
    }), w = t;
    q4(() => {
      d.value && (w("open-translation-confirmation-dialog"), d.value = !1);
    });
    const {
      actionInformationMessage: v,
      getActionButtonLabel: y,
      isProgressiveButton: C,
      targetArticlePath: S
    } = t4(), E = fe(), L = lc(
      () => E.i18n(y(!!r.value))
    ), N = () => b(this, null, function* () {
      yield p(), !g.value && n.push({ name: "sx-section-selector" });
    }), k = lc(() => {
      var ie, ne;
      return r.value && !!((ne = (ie = s.value) == null ? void 0 : ie.sourceSections) != null && ne.length);
    }), { targetPageExists: P } = cn(), U = lc(() => !r.value && P.value && Gt), X = N4(), se = cc(!1);
    return X().then((ie) => {
      ie || l(), se.value = !0;
    }), (ie, ne) => {
      const B = M4("i18n");
      return Gs(), sc(I4, null, [
        Hs("section", R4, [
          Se(r) && se.value ? (Gs(), sc("section", z4, [
            Qm(Hs("h6", null, null, 512), [
              [B, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Hs("h5", {
              class: "ma-0",
              innerHTML: Se(r)
            }, null, 8, O4)
          ])) : Se(P) && !Se(r) ? (Gs(), sc("section", j4, [
            St(Se(M), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Mt(() => [
                Qm(St(Se(V), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [B, [Se(a)], "cx-sx-existing-translation-status"]
                ]),
                St(Se(V), { shrink: "" }, {
                  default: Mt(() => [
                    Hs("a", {
                      href: Se(S),
                      target: "_blank"
                    }, [
                      St(Se(X4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: Se(Ba)
                      }, null, 8, ["icon"])
                    ], 8, H4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            St(Se(M), { class: "ma-0" }, {
              default: Mt(() => [
                St(Se(V), null, {
                  default: Mt(() => [
                    Hs("span", { innerHTML: Se(v) }, null, 8, G4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : ac("", !0),
          St(Se(M), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Mt(() => [
              k.value ? (Gs(), Jm(Se(V), {
                key: 0,
                shrink: ""
              }, {
                default: Mt(() => [
                  St(Se(uc), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: U4(N, ["stop"])
                  }, {
                    default: Mt(() => [
                      rc(ic(ie.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ac("", !0),
              U.value ? (Gs(), Jm(Se(V), {
                key: 1,
                shrink: ""
              }, {
                default: Mt(() => [
                  St(Se(uc), {
                    size: "large",
                    onClick: h
                  }, {
                    default: Mt(() => [
                      rc(ic(ie.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ac("", !0),
              St(Se(V), { shrink: "" }, {
                default: Mt(() => [
                  St(Se(uc), {
                    weight: "primary",
                    size: "large",
                    action: Se(C) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: Mt(() => [
                      rc(ic(L.value), 1)
                    ]),
                    _: 1
                  }, 8, ["action"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        St(F4, {
          modelValue: g.value,
          "onUpdate:modelValue": ne[0] || (ne[0] = (I) => g.value = I),
          "target-url": m.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const dc = window.Vue.unref, Y4 = window.Vue.openBlock, Q4 = window.Vue.createBlock, J4 = window.Vue.computed, Hw = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t } = Aa(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = F(), { currentLanguageTitleGroup: s } = cn(), a = J4(
      () => {
        var u;
        return ((u = s.value) == null ? void 0 : u.titles.map((i) => i.lang)) || [];
      }
    ), r = ex(), l = (u) => r(u, o.value), c = (u) => r(n.value, u);
    return (u, i) => (Y4(), Q4(Sr, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": dc(t),
      "selected-source-language": dc(n),
      "selected-target-language": dc(o),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": c
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, Z4 = (e) => {
  const s = e / 5 / 15;
  return Math.ceil(s);
};
const Me = window.Vue.unref, gc = window.Vue.toDisplayString, On = window.Vue.createElementVNode, Qt = window.Vue.createVNode, jo = window.Vue.withCtx, e3 = window.Vue.resolveDirective, t3 = window.Vue.withDirectives, n3 = window.Vue.normalizeClass, Zm = window.Vue.openBlock, o3 = window.Vue.createElementBlock, s3 = window.Vue.createCommentVNode, a3 = window.Vue.createBlock, i3 = ["textContent"], r3 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, l3 = ["textContent"], c3 = { class: "pe-3" }, u3 = ["textContent"], d3 = window.Codex.CdxButton, qs = window.Codex.CdxIcon, jn = window.Vue.computed, g3 = window.Vuex.useStore, m3 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = g3(), { currentSourcePage: n } = ot(), { sectionSuggestion: o } = Le(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l
    } = F(), c = jn(() => t.state.suggestions.favorites || []), u = jn(
      () => c.value.some(
        (N) => r.value === N.title && s.value === N.sourceLanguage && a.value === N.targetLanguage
      )
    ), { markFavoriteSuggestion: i, removeFavoriteSuggestion: d } = ud(), g = () => i(
      r.value,
      s.value,
      a.value
    ), m = () => d(
      new rs({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), p = jn(
      () => u.value ? qf : Wf
    ), h = jn(
      () => u.value ? m : g
    ), f = jn(
      () => Z.getPageUrl(s.value || "", r.value || "")
    ), w = jn(
      () => {
        var N;
        return (((N = n.value) == null ? void 0 : N.langLinksCount) || 0) + 1;
      }
    ), v = (N) => {
      const k = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let P = 0; P < k.length; P++)
        if (N >= k[P].value)
          return (N / k[P].value).toFixed(1).replace(/\.0$/, "") + k[P].suffix;
      return N.toString();
    }, y = jn(() => {
      var k;
      const N = Object.values(((k = n.value) == null ? void 0 : k.pageviews) || {}).reduce(
        (P, U) => P + U,
        0
      );
      return v(N);
    }), { isQuickTranslation: C, sizeInBytes: S } = jw(), E = fe(), L = jn(() => {
      if (!o.value && !n.value || !S.value)
        return "";
      const N = Z4(S.value), k = N >= 60 ? N / 60 : 0, P = Math.round(k * 2) / 2;
      if (!o.value && Gt)
        return E.i18n(
          "cx-sx-translation-confirmer-translation-time-whole-article",
          P,
          N
        );
      if (o.value) {
        if (l.value)
          return E.i18n(
            "cx-sx-translation-confirmer-translation-time-single-section",
            P,
            N
          );
      } else
        return E.i18n(
          "cx-sx-translation-confirmer-translation-time-lead-section",
          P,
          N
        );
      return E.i18n(
        "cx-sx-translation-confirmer-translation-time-sections",
        P,
        N,
        Object.keys(o.value.missingSections).length
      );
    });
    return (N, k) => {
      const P = e3("i18n");
      return Zm(), a3(Me(M), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: jo(() => [
          Qt(Me(V), null, {
            default: jo(() => [
              Qt(Me(M), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: jo(() => [
                  Qt(Me(V), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: jo(() => [
                      On("h5", {
                        class: "ma-0 me-1",
                        textContent: gc(Me(r))
                      }, null, 8, i3),
                      Qt(Me(qs), {
                        size: "x-small",
                        icon: Me(Ba)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Qt(Me(V), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: jo(() => [
                      Qt(Me(d3), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": N.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: jo(() => [
                          Qt(Me(qs), { icon: p.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              On("div", r3, [
                On("div", null, [
                  On("span", null, [
                    Qt(Me(qs), {
                      icon: Me(Kf),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    On("span", {
                      class: "pe-3",
                      textContent: gc(w.value)
                    }, null, 8, l3)
                  ]),
                  On("span", null, [
                    Qt(Me(qs), {
                      icon: Me(Xf),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    t3(On("span", c3, null, 512), [
                      [P, [y.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                L.value ? (Zm(), o3("span", {
                  key: 0,
                  class: n3(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Me(C)
                  }])
                }, [
                  Qt(Me(qs), {
                    icon: Me(xC),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  On("span", {
                    textContent: gc(L.value)
                  }, null, 8, u3)
                ], 2)) : s3("", !0)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const p3 = window.Vue.resolveDirective, fo = window.Vue.createElementVNode, $i = window.Vue.withDirectives, h3 = window.Vue.toDisplayString, f3 = window.Vue.createTextVNode, mc = window.Vue.unref, pc = window.Vue.withCtx, hc = window.Vue.openBlock, fc = window.Vue.createBlock;
window.Vue.createCommentVNode;
const w3 = { class: "pa-4" }, v3 = { class: "flex pt-2" }, _3 = window.Codex.CdxButton, S3 = window.Vue.ref, y3 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = fs(), a = md(), r = S3(!1), { currentTranslation: l } = Xt(), c = () => b(this, null, function* () {
      r.value = !0;
      let u = !1;
      try {
        u = yield $t.splitTranslation(
          l.value.translationId
        );
      } catch (i) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          i
        );
      }
      r.value = !1, u && (a(), s(), o());
    });
    return (u, i) => {
      const d = p3("i18n");
      return hc(), fc(mc(Vt), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: pc(() => [
          fo("div", v3, [
            r.value ? (hc(), fc(mc(mt), { key: 1 })) : (hc(), fc(mc(_3), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: pc(() => [
                f3(h3(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: pc(() => [
          fo("div", w3, [
            $i(fo("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            $i(fo("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            fo("p", null, [
              $i(fo("strong", null, null, 512), [
                [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            $i(fo("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
};
const ep = window.Vue.unref, C3 = window.Vue.createVNode, tp = window.Vue.toDisplayString, Vi = window.Vue.createElementVNode, x3 = window.Vue.openBlock, b3 = window.Vue.createElementBlock, k3 = { class: "cx-translation-confirmer-featured-collection-banner ma-4 px-4 py-3" }, $3 = { class: "cx-translation-confirmer-featured-collection-banner__header" }, V3 = { class: "cx-translation-confirmer-featured-collection-banner__header-text" }, E3 = { class: "cx-translation-confirmer-featured-collection-banner__body" }, L3 = window.Vue.computed, T3 = window.Codex.CdxIcon, A3 = {
  __name: "SXTranslationConfirmerFeaturedCollectionBanner",
  setup(e) {
    const { featuredCollection: t } = Wt(), n = L3(() => {
      var o;
      return (o = t.value) == null ? void 0 : o.name;
    });
    return (o, s) => (x3(), b3("div", k3, [
      Vi("div", $3, [
        C3(ep(T3), {
          icon: ep(od),
          size: "small",
          class: "cx-translation-confirmer-featured-collection-banner__header-icon me-2"
        }, null, 8, ["icon"]),
        Vi("span", V3, tp(o.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      Vi("div", E3, [
        Vi("p", null, tp(n.value), 1)
      ])
    ]));
  }
}, D3 = window.Vuex.useStore;
let Ei = [];
const pd = () => {
  const e = D3();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Ei.includes(o) ? Promise.resolve() : (Ei.push(o), Vo.fetchLanguageTitles(t, n).then((s) => {
      Ei = Ei.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, P3 = window.Vue.ref, Ho = P3(null), Gw = () => {
  const e = () => b(void 0, null, function* () {
    var n, o;
    Ho.value || (yield Lr.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, Ho.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        Ho.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = Ho.value) == null ? void 0 : n.refreshAt) <= t ? (Ho.value = null, e()) : (o = Ho.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const np = window.Vue.resolveDirective, Li = window.Vue.createElementVNode, op = window.Vue.withDirectives, Hn = window.Vue.unref, Ti = window.Vue.withCtx, Sn = window.Vue.createVNode, Ai = window.Vue.openBlock, sp = window.Vue.createElementBlock, B3 = window.Vue.createCommentVNode, ap = window.Vue.createBlock, F3 = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, N3 = { class: "mb-0" }, M3 = { class: "sx-translation-confirmer__article-image flex justify-center" }, U3 = ["src"], I3 = { class: "ma-3" }, ip = window.Vue.computed, R3 = window.Vue.inject, z3 = window.Vue.onBeforeUnmount, rp = window.Vue.ref, O3 = window.Vue.watch, j3 = window.Vuex.useStore, H3 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = j3(), { currentSourcePage: n } = ot(), { previousRoute: o } = Fe(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      clearTranslationURLParameters: l
    } = F(), { inFeaturedCollection: c } = sd(), u = R3("breakpoints"), i = ip(() => u.value.nextBreakpoint), d = ip(
      () => {
        var C;
        return (C = n.value) == null ? void 0 : C.getImage(i.value);
      }
    ), g = rp(!1);
    O3(
      () => {
        var C;
        return (C = n.value) == null ? void 0 : C.wikidataId;
      },
      (C) => b(this, null, function* () {
        const S = yield c([C]);
        g.value = S[C];
      }),
      { immediate: !0 }
    );
    const { fetchTranslationsByStatus: m } = hs(), p = pd();
    m("draft"), p(s.value, r.value), dd(), Gw()(), Jf()(a.value);
    const w = nt(), v = () => {
      const C = ["dashboard", "sx-article-search"];
      !o.value || !C.includes(o.value) ? w.push({ name: "dashboard" }) : w.push({ name: o.value });
    };
    z3(() => {
      const C = w.currentRoute.value.name;
      (C === "dashboard" || C === "sx-article-search") && l();
    });
    const y = rp(!1);
    return (C, S) => {
      const E = np("i18n"), L = np("i18n-html");
      return Ai(), sp("section", F3, [
        Sn(Hn(M), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Ti(() => [
            Sn(Hn(V), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Ti(() => [
                op(Li("h5", N3, null, 512), [
                  [E, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Sn(Hn(V), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Ti(() => [
                Sn(Hn(Ke), {
                  class: "pa-0",
                  type: "icon",
                  icon: Hn(xr),
                  "icon-size": 20,
                  onClick: v
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Li("div", M3, [
          d.value ? (Ai(), sp("img", {
            key: 0,
            src: d.value
          }, null, 8, U3)) : (Ai(), ap(Hn(et), {
            key: 1,
            size: "120",
            icon: Hn(gf),
            "icon-color": C.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Sn(m3),
        g.value ? (Ai(), ap(A3, { key: 0 })) : B3("", !0),
        Sn(Hw),
        Sn(K4, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (N) => y.value = !0)
        }),
        Sn(Hn(M), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Ti(() => [
            Li("p", I3, [
              op(Li("small", null, null, 512), [
                [L, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Sn(y3, {
          modelValue: y.value,
          "onUpdate:modelValue": S[1] || (S[1] = (N) => y.value = N)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const G3 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: H3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, q3 = window.Vue.resolveComponent, W3 = window.Vue.createVNode, X3 = window.Vue.normalizeClass, K3 = window.Vue.openBlock, Y3 = window.Vue.createElementBlock;
function Q3(e, t, n, o, s, a) {
  const r = q3("sx-translation-confirmer");
  return K3(), Y3("main", {
    class: X3(["sx-translation-confirmer-view", a.classes])
  }, [
    W3(r)
  ], 2);
}
const J3 = /* @__PURE__ */ he(G3, [["render", Q3]]);
const Z3 = window.Vue.toDisplayString, lp = window.Vue.unref, eL = window.Vue.createVNode, tL = window.Vue.createTextVNode, nL = window.Vue.createElementVNode, oL = window.Vue.openBlock, sL = window.Vue.createElementBlock, aL = { class: "sx-section-selector-view-article-item" }, iL = ["href"], rL = window.Codex.CdxIcon, cp = {
  __name: "SXSectionSelectorViewArticleItem",
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
  setup(e) {
    return (t, n) => (oL(), sL("span", aL, [
      nL("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        tL(Z3(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        eL(lp(rL), {
          size: "x-small",
          icon: lp(Ba)
        }, null, 8, ["icon"])
      ], 8, iL)
    ]));
  }
};
const lL = window.Vue.resolveDirective, Di = window.Vue.createElementVNode, wc = window.Vue.withDirectives, wo = window.Vue.unref, cL = window.Vue.toDisplayString, Pi = window.Vue.withCtx, Ws = window.Vue.createVNode, uL = window.Vue.openBlock, dL = window.Vue.createElementBlock, gL = { class: "sx-section-selector__header pa-4" }, mL = { class: "sx-section-selector__header-text ma-0" }, pL = ["textContent"], hL = { class: "pt-0 ma-0" }, fL = { class: "ma-0" }, wL = window.Codex.CdxButton, vL = window.Codex.CdxIcon, _L = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Le();
    return (n, o) => {
      const s = lL("i18n");
      return uL(), dL("div", gL, [
        Ws(wo(M), { class: "ma-0 pb-3" }, {
          default: Pi(() => [
            Ws(wo(V), null, {
              default: Pi(() => {
                var a;
                return [
                  wc(Di("h6", mL, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Di("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: cL((a = wo(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, pL)
                ];
              }),
              _: 1
            }),
            Ws(wo(V), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Pi(() => [
                Ws(wo(wL), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Pi(() => [
                    Ws(wo(vL), { icon: wo(ms) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        wc(Di("h4", hL, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        wc(Di("p", fL, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, up = window.Vue.renderSlot, SL = window.Vue.renderList, yL = window.Vue.Fragment, vc = window.Vue.openBlock, dp = window.Vue.createElementBlock, Bi = window.Vue.unref, gp = window.Vue.createVNode, mp = window.Vue.withCtx, CL = window.Vue.createBlock, xL = { class: "sx-section-selector__sections-list ma-0 pa-0" }, bL = window.Codex.CdxButton, kL = window.Codex.CdxIcon, qw = {
  __name: "SXSectionSelectorSectionList",
  props: {
    /**
     * @type {{targetTitle: string, sourceTitle: string, isEasy: boolean}[]}
     */
    sections: {
      type: Array,
      required: !0
    }
  },
  emits: ["select-section"],
  setup(e) {
    return (t, n) => (vc(), dp("ul", xL, [
      up(t.$slots, "before-list"),
      (vc(!0), dp(yL, null, SL(e.sections, (o) => (vc(), CL(Bi(M), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: mp(() => [
          gp(Bi(bL), {
            weight: "quiet",
            class: "col justify-start items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: mp(() => [
              up(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle,
                isEasy: o.isEasy
              }),
              gp(Bi(kL), {
                icon: Bi(ps),
                class: "ms-auto"
              }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, $L = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const VL = window.Vue.resolveDirective, Fi = window.Vue.createElementVNode, Ni = window.Vue.withDirectives, Ut = window.Vue.unref, Mi = window.Vue.openBlock, _c = window.Vue.createBlock, EL = window.Vue.createCommentVNode, Go = window.Vue.withCtx, Xs = window.Vue.createVNode, LL = window.Vue.toDisplayString, TL = window.Vue.createTextVNode, AL = window.Vue.createElementBlock, DL = { class: "sx-section-selector__missing-sections py-2" }, PL = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, BL = ["lang", "dir", "innerHTML"], Sc = window.Vue.computed, FL = window.Codex.CdxButton, NL = window.Codex.CdxInfoChip, ML = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Le(), { targetLanguageURLParameter: n } = F(), o = Sc(() => O.getAutonym(n.value)), s = Sc(
      () => {
        var r;
        return Object.keys(((r = t.value) == null ? void 0 : r.missingSections) || {}).length === 0;
      }
    ), a = Sc(() => {
      var r;
      return (r = t.value) != null && r.orderedMissingSections ? t.value.orderedMissingSections.map((l) => Ye(me({}, l), {
        isEasy: Uf(
          t.value.getSectionSize(l.sourceTitle)
        )
      })) : [];
    });
    return (r, l) => {
      const c = VL("i18n");
      return Mi(), AL("section", DL, [
        Ni(Fi("h4", PL, null, 512), [
          [c, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (Mi(), _c(Ut(M), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Go(() => [
            Xs(Ut(V), {
              class: "py-6 justify-center",
              innerHTML: Ut($L)
            }, null, 8, ["innerHTML"]),
            Xs(Ut(V), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Go(() => [
                Ni(Fi("h6", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Xs(Ut(V), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Go(() => [
                Ni(Fi("p", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Xs(Ut(V), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Go(() => [
                Xs(Ut(FL), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: l[1] || (l[1] = (u) => r.$emit("close"))
                }, {
                  default: Go(() => [
                    TL(LL(r.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Mi(), _c(qw, {
          key: 0,
          sections: a.value,
          onSelectSection: l[0] || (l[0] = (u) => r.$emit("select-section", u))
        }, {
          default: Go(({ sourceSection: u, isEasy: i }) => {
            var d, g;
            return [
              Fi("h5", {
                class: "ma-0",
                lang: (d = Ut(t)) == null ? void 0 : d.sourceLanguage,
                dir: Ut(O.getDir)((g = Ut(t)) == null ? void 0 : g.sourceLanguage),
                innerHTML: u
              }, null, 8, BL),
              i ? Ni((Mi(), _c(Ut(NL), {
                key: 0,
                class: "sx-section-selector__easy-section-badge"
              }, null, 512)), [
                [c, void 0, "cx-sx-section-selector-easy-section-badge"]
              ]) : EL("", !0)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const UL = window.Vue.resolveDirective, qo = window.Vue.createElementVNode, IL = window.Vue.withDirectives, yt = window.Vue.unref, RL = window.Vue.toDisplayString, Ui = window.Vue.createVNode, Ii = window.Vue.withCtx, zL = window.Vue.openBlock, OL = window.Vue.createElementBlock, jL = { class: "sx-section-selector__present-sections py-2" }, HL = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, GL = { class: "sx-section-selector__present-section-button-content" }, qL = ["textContent"], WL = { class: "sx-section-selector__present-section-button-content" }, XL = ["lang", "dir", "innerHTML"], KL = ["lang", "dir", "innerHTML"], YL = window.Vue.computed, QL = window.Codex.CdxButton, JL = window.Codex.CdxIcon, pp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Le(), { targetLanguageURLParameter: n } = F(), o = YL(() => O.getAutonym(n.value));
    return (s, a) => {
      var l;
      const r = UL("i18n");
      return zL(), OL("section", jL, [
        IL(qo("h4", HL, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        Ui(qw, {
          sections: ((l = yt(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[1] || (a[1] = (c) => s.$emit("select-section", c))
        }, {
          "before-list": Ii(() => [
            Ui(yt(M), {
              tag: "li",
              class: "ma-0"
            }, {
              default: Ii(() => [
                Ui(yt(QL), {
                  weight: "quiet",
                  class: "col justify-start items-center py-3 px-4",
                  "aria-label": s.$i18n("sx-section-selector-next-button-aria-label"),
                  onClick: a[0] || (a[0] = (c) => s.$emit("select-section", yt(no).LEAD_SECTION_DUMMY_TITLE))
                }, {
                  default: Ii(() => [
                    qo("div", GL, [
                      qo("h5", {
                        class: "sx-section-selector__present-section-button-source",
                        textContent: RL(s.$i18n("cx-sx-present-lead-section-label"))
                      }, null, 8, qL)
                    ]),
                    Ui(yt(JL), {
                      icon: yt(ps),
                      class: "ms-auto"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          default: Ii(({ sourceSection: c, targetSection: u }) => {
            var i, d, g, m;
            return [
              qo("div", WL, [
                qo("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = yt(t)) == null ? void 0 : i.sourceLanguage,
                  dir: yt(O.getDir)((d = yt(t)) == null ? void 0 : d.sourceLanguage),
                  innerHTML: c
                }, null, 8, XL),
                qo("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = yt(t)) == null ? void 0 : g.targetLanguage,
                  dir: yt(O.getDir)((m = yt(t)) == null ? void 0 : m.targetLanguage),
                  innerHTML: u
                }, null, 8, KL)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Re = window.Vue.createVNode, yc = window.Vue.openBlock, hp = window.Vue.createBlock, fp = window.Vue.createCommentVNode, ZL = window.Vue.resolveDirective, Gn = window.Vue.createElementVNode, Ks = window.Vue.withDirectives, rt = window.Vue.unref, yn = window.Vue.withCtx, e5 = window.Vue.normalizeClass, wp = window.Vue.toDisplayString, vp = window.Vue.createTextVNode, t5 = window.Vue.createElementBlock, n5 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, o5 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, s5 = { class: "sx-section-selector__additional-consideration-title" }, a5 = { href: "#" }, i5 = { class: "sx-section-selector__additional-consideration-title" }, r5 = { href: "#" }, Ys = window.Vue.computed, l5 = window.Vue.inject, c5 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = l5("breakpoints"), n = Ys(() => t.value.desktopAndUp), { sectionSuggestion: o } = Le(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = F(), c = Ys(() => O.getAutonym(s.value)), u = Ys(() => O.getAutonym(a.value)), i = Ys(
      () => {
        var y;
        return Z.getPageUrl(s.value, (y = o.value) == null ? void 0 : y.sourceTitle);
      }
    ), d = Ys(
      () => {
        var y;
        return Z.getPageUrl(a.value, (y = o.value) == null ? void 0 : y.targetTitle);
      }
    ), g = nt(), m = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: p } = Xt(), h = fs(), f = md(), { selectPageSectionByTitle: w } = Ur(), v = (y) => {
      l(y), p.value ? (f(), h()) : (w(y), g.push({ name: "sx-content-comparator" }));
    };
    return mw.cx.eventlogging.stats.selectSectionAccess(!n.value), (y, C) => {
      const S = ZL("i18n");
      return yc(), t5("section", n5, [
        Re(_L, { onClose: m }),
        Re(Hw),
        Re(rt(M), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: yn(() => [
            Re(rt(V), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: yn(() => [
                Re(ML, {
                  onSelectSection: v,
                  onClose: m
                }),
                n.value ? fp("", !0) : (yc(), hp(pp, {
                  key: 0,
                  onSelectSection: v
                })),
                Gn("section", {
                  class: e5(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Ks(Gn("h4", o5, null, 512), [
                    [S, [
                      u.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Re(rt(M), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: yn(() => [
                      Re(rt(V), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: yn(() => [
                          Re(cp, {
                            path: i.value,
                            autonym: c.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Re(rt(V), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: yn(() => [
                          Re(cp, {
                            path: d.value,
                            autonym: u.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 2),
                Re(rt(M), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: yn(() => [
                    Re(rt(V), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: yn(() => [
                        Gn("h6", s5, [
                          Re(rt(et), {
                            icon: rt(j0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          vp(" " + wp(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Ks(Gn("p", null, null, 512), [
                          [S, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Ks(Gn("a", a5, null, 512), [
                          [S, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Re(rt(V), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: yn(() => [
                        Gn("h6", i5, [
                          Re(rt(et), {
                            icon: rt(O0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          vp(" " + wp(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Ks(Gn("p", null, null, 512), [
                          [S, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Ks(Gn("a", r5, null, 512), [
                          [S, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            n.value ? (yc(), hp(rt(V), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: yn(() => [
                Re(pp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: v
                })
              ]),
              _: 1
            })) : fp("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, u5 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: c5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, d5 = window.Vue.resolveComponent, g5 = window.Vue.createVNode, m5 = window.Vue.normalizeClass, p5 = window.Vue.openBlock, h5 = window.Vue.createElementBlock;
function f5(e, t, n, o, s, a) {
  const r = d5("sx-section-selector");
  return p5(), h5("main", {
    class: m5(["sx-section-selector-view", a.classes])
  }, [
    g5(r)
  ], 2);
}
const w5 = /* @__PURE__ */ he(u5, [["render", f5]]), Ri = window.Vue.computed, v5 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = F(), n = Ri(
    () => O.getAutonym(e.value)
  ), o = Ri(
    () => O.getAutonym(t.value)
  ), { target: s, PUBLISHING_TARGETS: a } = Tt(), r = Ri(
    () => s.value === a.EXPAND
  ), l = fe();
  return Ri(() => {
    const c = {
      value: "source_section",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-source-selector-title",
          n.value
        ),
        type: "text"
      }
    };
    let u;
    return r.value ? u = {
      value: "target_section",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-target-selector-target-section-title",
          o.value
        ),
        type: "text"
      }
    } : u = {
      value: "target_article",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-target-selector-full-article-title",
          o.value
        ),
        type: "text"
      }
    }, [c, u];
  });
};
const _p = window.Vue.unref, _5 = window.Vue.createVNode, S5 = window.Vue.openBlock, y5 = window.Vue.createElementBlock, C5 = { class: "sx-content-comparator__content-type-selector" }, x5 = window.Vue.watchEffect, b5 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = v5();
    return x5(() => {
      a.value.map((l) => l.value).includes(n.selection) || s(a.value[0].value);
    }), (r, l) => (S5(), y5("div", C5, [
      _5(_p(Ea), {
        items: _p(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, zi = window.Vue.computed, Ww = () => {
  const { currentTargetPage: e } = ot(), { activeSectionTargetTitle: t } = Le(), n = zi(
    () => {
      var l;
      return (((l = o.value) == null ? void 0 : l.title) || "").replace(/ /g, "_");
    }
  ), o = zi(
    () => {
      var l;
      return (l = e.value) == null ? void 0 : l.getSectionByTitle(t.value);
    }
  ), { sourceSection: s } = oe(), a = zi(() => {
    var l;
    return (l = s.value) == null ? void 0 : l.html;
  }), r = zi(() => {
    var l;
    return (l = o.value) == null ? void 0 : l.html;
  });
  return {
    sourceSectionContent: a,
    targetSectionAnchor: n,
    targetSectionContent: r
  };
};
const Oi = window.Vue.createVNode, Cn = window.Vue.unref, k5 = window.Vue.resolveDirective, $5 = window.Vue.withDirectives, Qs = window.Vue.openBlock, Sp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ji = window.Vue.withCtx, Cc = window.Vue.createBlock, V5 = window.Vue.normalizeClass, E5 = {
  key: 0,
  class: "ma-0 pa-0"
}, L5 = ["lang", "dir", "innerHTML"], yp = window.Vue.ref, Hi = window.Vue.computed, T5 = window.Vue.onMounted, A5 = {
  __name: "SXContentComparatorContentHeader",
  props: {
    contentTypeSelection: {
      type: String,
      required: !0
    }
  },
  emits: [
    "update:contentTypeSelection",
    "translation-button-clicked"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = yp(!1), { sectionSuggestion: a, activeSectionTargetTitle: r } = Le(), { isPresentLeadSection: l } = ht(), { sectionURLParameter: c } = F(), u = Hi(
      () => (g.value || "").replace(/ /g, "_")
    ), i = (f) => o("update:contentTypeSelection", f), { targetSectionAnchor: d } = Ww(), g = Hi(
      () => {
        var f;
        return (((f = a.value) == null ? void 0 : f.sourceSections) || []).find(
          (w) => w === c.value
        );
      }
    ), m = Hi(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: g.value,
            path: `${Z.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${u.value}`,
            lang: a.value.sourceLanguage,
            dir: O.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: p.value,
            lang: a.value.targetLanguage,
            dir: O.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: r.value,
            path: `${p.value}#${d.value}`
          };
      }
    }), p = Hi(
      () => Z.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), h = yp(null);
    return T5(() => {
      new IntersectionObserver(
        ([w]) => {
          s.value = w.intersectionRect.height < w.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(h.value.$el);
    }), (f, w) => {
      const v = k5("i18n");
      return Qs(), Cc(Cn(M), {
        ref_key: "contentHeader",
        ref: h,
        class: V5(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
        direction: "column",
        align: "stretch",
        reverse: s.value
      }, {
        default: ji(() => [
          Oi(b5, {
            selection: e.contentTypeSelection,
            "onUpdate:selection": i
          }, null, 8, ["selection"]),
          Oi(Cn(M), {
            justify: "between",
            class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
          }, {
            default: ji(() => [
              Oi(Cn(V), null, {
                default: ji(() => [
                  Cn(l) ? $5((Qs(), Sp("h3", E5, null, 512)), [
                    [v, void 0, "cx-sx-present-lead-section-label"]
                  ]) : (Qs(), Sp("h3", {
                    key: 1,
                    lang: m.value.lang,
                    dir: m.value.dir,
                    class: "ma-0 pa-0",
                    innerHTML: m.value.title
                  }, null, 8, L5))
                ]),
                _: 1
              }),
              Oi(Cn(V), { shrink: "" }, {
                default: ji(() => [
                  s.value ? (Qs(), Cc(Cn(Ke), {
                    key: 0,
                    icon: Cn(Cr),
                    progressive: "",
                    label: f.$i18n(
                      "cx-sx-content-comparator-content-header-translate-button-label"
                    ),
                    onClick: w[0] || (w[0] = (y) => f.$emit("translation-button-clicked"))
                  }, null, 8, ["icon", "label"])) : (Qs(), Cc(Cn(Ke), {
                    key: 1,
                    class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                    icon: Cn(df),
                    type: "icon",
                    href: m.value.path,
                    target: "_blank"
                  }, null, 8, ["icon", "href"]))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class", "reverse"]);
    };
  }
}, Gi = window.Vue.unref, Cp = window.Vue.createVNode, D5 = window.Vue.openBlock, P5 = window.Vue.createElementBlock, B5 = { class: "sx-content-comparator__header-navigation flex items-center" }, F5 = window.Vue.computed, N5 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = F(), o = F5(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Ur(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    };
    return (l, c) => (D5(), P5("div", B5, [
      Cp(Gi(Ke), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Gi(U0),
        onClick: a
      }, null, 8, ["icon"]),
      Cp(Gi(Ke), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Gi(M0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const xp = window.Vue.toDisplayString, we = window.Vue.unref, M5 = window.Vue.resolveDirective, qi = window.Vue.withDirectives, xn = window.Vue.openBlock, Wo = window.Vue.createElementBlock, xc = window.Vue.createCommentVNode, U5 = window.Vue.createTextVNode, I5 = window.Vue.createElementVNode, R5 = window.Vue.normalizeClass, bc = window.Vue.withCtx, bp = window.Vue.createVNode, kc = window.Vue.createBlock, z5 = { class: "sx-content-comparator-header__mapped-section" }, O5 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, j5 = { key: 0 }, H5 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, G5 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, q5 = {
  key: 2,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, W5 = window.Vue.computed, X5 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = F(), { activeSectionTargetTitle: n } = Le(), o = fe(), { target: s, PUBLISHING_TARGETS: a, setTarget: r } = Tt(), l = W5(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        O.getAutonym(t.value)
      )
    ), { isPresentLeadSection: c } = ht();
    return (u, i) => {
      const d = M5("i18n");
      return xn(), Wo("div", z5, [
        bp(we(M), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: bc(() => [
            bp(we(V), { grow: "" }, {
              default: bc(() => [
                I5("h6", O5, [
                  U5(xp(l.value) + " ", 1),
                  we(s) === we(a).NEW_SECTION ? qi((xn(), Wo("span", j5, null, 512)), [
                    [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : xc("", !0)
                ]),
                we(c) ? xc("", !0) : (xn(), Wo("h6", {
                  key: 0,
                  class: R5(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": we(s) === we(a).NEW_SECTION
                  }])
                }, xp(we(n)), 3))
              ]),
              _: 1
            }),
            we(c) ? xc("", !0) : (xn(), kc(we(V), {
              key: 0,
              shrink: ""
            }, {
              default: bc(() => [
                we(s) === we(a).EXPAND ? (xn(), kc(we(Ke), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: we(uf),
                  type: "icon",
                  onClick: i[0] || (i[0] = (g) => we(r)(we(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (xn(), kc(we(Ke), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: we(q0),
                  type: "icon",
                  onClick: i[1] || (i[1] = (g) => we(r)(we(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            }))
          ]),
          _: 1
        }),
        we(c) ? qi((xn(), Wo("p", H5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-lead-section-clarifications"]
        ]) : we(s) === we(a).EXPAND ? qi((xn(), Wo("p", G5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : qi((xn(), Wo("p", q5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const De = window.Vue.unref, Xo = window.Vue.createVNode, K5 = window.Vue.toDisplayString, Zn = window.Vue.createElementVNode, Y5 = window.Vue.resolveDirective, $c = window.Vue.withDirectives, Js = window.Vue.openBlock, Vc = window.Vue.createElementBlock, kp = window.Vue.createCommentVNode, Ec = window.Vue.withCtx, $p = window.Vue.createBlock, Q5 = { class: "sx-content-comparator__header pa-4" }, J5 = { class: "row my-1 py-2 mx-0 gap-6" }, Z5 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, eT = { class: "sx-content-comparator-header__titles shrink" }, tT = ["lang", "dir"], nT = {
  key: 0,
  class: "sx-content-comparator-header__section-title pa-0 ma-0"
}, oT = ["lang", "dir", "innerHTML"], sT = { class: "py-2 mb-1" }, aT = /* @__PURE__ */ Zn("br", null, null, -1), Wi = window.Vue.computed, iT = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = F(), { sourceSection: n } = oe(), { sectionSuggestion: o } = Le(), { isCurrentSectionPresent: s } = ht(), a = Wi(
      () => {
        var u;
        return (u = o.value) == null ? void 0 : u.missingSections.hasOwnProperty(t.value);
      }
    ), r = Wi(() => {
      var u;
      return (u = n.value) == null ? void 0 : u.html;
    }), l = Wi(() => [
      no.LEAD_SECTION_DUMMY_TITLE,
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), c = Wi(
      () => {
        var u;
        return (((u = o.value) == null ? void 0 : u.sourceSections) || []).find(
          (i) => i === t.value
        );
      }
    );
    return (u, i) => {
      var g;
      const d = Y5("i18n");
      return Js(), Vc("div", Q5, [
        Xo(De(Ke), {
          class: "py-2 pa-0",
          icon: De(I0),
          label: u.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (m) => u.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Zn("div", J5, [
          Zn("div", Z5, [
            Zn("div", eT, [
              Zn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: De(o).sourceLanguage,
                dir: De(O.getDir)(De(o).sourceLanguage)
              }, K5(De(o).sourceTitle), 9, tT),
              (g = De(n)) != null && g.isLeadSection ? $c((Js(), Vc("h2", nT, null, 512)), [
                [d, void 0, "cx-sx-present-lead-section-label"]
              ]) : (Js(), Vc("h2", {
                key: 1,
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: De(o).sourceLanguage,
                dir: De(O.getDir)(De(o).sourceLanguage),
                innerHTML: c.value
              }, null, 8, oT))
            ]),
            Xo(N5, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          Zn("div", sT, [
            Xo(De(Ke), {
              class: "sx-content-comparator-header__translation-button",
              icon: De(Cr),
              progressive: "",
              label: u.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (m) => u.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (Js(), $p(De(M), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Ec(() => [
            Xo(De(V), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Ec(() => [
                Xo(De(et), { icon: De(H0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Xo(De(V), { class: "ma-0" }, {
              default: Ec(() => [
                $c(Zn("strong", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                aT,
                $c(Zn("span", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : kp("", !0),
        De(s) ? (Js(), $p(X5, { key: 1 })) : kp("", !0)
      ]);
    };
  }
};
const Vp = window.Vue.toDisplayString, rT = window.Vue.createElementVNode, Ep = window.Vue.openBlock, Lp = window.Vue.createElementBlock, lT = window.Vue.createCommentVNode, cT = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, uT = ["textContent"], dT = ["textContent"], Xw = {
  __name: "NewSectionPlaceholder",
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
  },
  setup(e) {
    return (t, n) => (Ep(), Lp("section", cT, [
      rT("h5", {
        textContent: Vp(e.placeholderTitle)
      }, null, 8, uT),
      e.placeholderSubtitle ? (Ep(), Lp("p", {
        key: 0,
        textContent: Vp(e.placeholderSubtitle)
      }, null, 8, dT)) : lT("", !0)
    ]));
  }
}, gT = (e, t, n) => {
  const o = t.indexOf(e);
  return t.slice(o + 1).map((a) => n[a]).filter(Boolean)[0] || null;
}, mT = ({
  sourceSectionTitle: e,
  sourceSectionTitles: t,
  targetSectionTitles: n,
  presentSectionMappings: o,
  targetAppendixSectionTitles: s
}) => {
  const a = gT(
    e,
    t,
    o
  );
  return a !== null ? a : n.find(
    (l) => s.includes(l)
  ) || null;
}, Lc = window.Vue.computed, pT = window.Vue.createApp, hT = window.Vuex.useStore, fT = () => {
  const e = hT(), { sectionSuggestion: t } = Le(), { currentTargetPage: n } = ot(), { sectionURLParameter: o } = F(), s = fe(), a = () => pT(
    Xw,
    {
      placeholderTitle: s.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, r = Lc(() => {
    const { appendixSectionTitles: u } = e.state.suggestions;
    return u[t.value.targetLanguage] || [];
  }), l = Lc(
    () => mT({
      sourceSectionTitle: o.value,
      sourceSectionTitles: t.value.sourceSections,
      targetSectionTitles: t.value.targetSections,
      presentSectionMappings: t.value.presentSections,
      targetAppendixSectionTitles: r.value
    })
  ), c = (u) => {
    const i = u.getElementsByTagName("base");
    Array.from(i).forEach(
      (d) => d.parentNode.removeChild(d)
    );
  };
  return Lc(() => {
    var d;
    if (!((d = n.value) != null && d.content))
      return null;
    const u = document.createElement("div");
    u.innerHTML = n.value.content, c(u);
    const i = a();
    if (l.value) {
      const g = Array.from(
        u.querySelectorAll("h2")
      ).filter(
        (m) => m.textContent.match(l.value)
      );
      if (g && g.length) {
        const m = g[0].parentNode;
        m.parentNode.insertBefore(
          i,
          m
        );
      }
    } else
      u.appendChild(i);
    return u.innerHTML;
  });
};
const Tc = window.Vue.createVNode, lt = window.Vue.unref, Ko = window.Vue.openBlock, Tp = window.Vue.createBlock, Ap = window.Vue.createCommentVNode, Xi = window.Vue.createElementVNode, Ac = window.Vue.Fragment, Ki = window.Vue.createElementBlock, wT = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, vT = { class: "sx-content-comparator__source-content" }, _T = ["lang", "dir", "innerHTML"], ST = ["lang", "dir", "innerHTML"], yT = ["innerHTML"], CT = window.Vue.ref, Dp = window.Vue.computed, Pp = window.Vue.watch, xT = window.Vue.inject, bT = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = Tt(), n = nt(), o = CT("source_section"), { logDashboardTranslationStartEvent: s } = gd(), a = fs(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      s(), a();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = F(), { sourceSectionContent: i, targetSectionContent: d } = Ww(), g = fT(), { sectionSuggestion: m } = Le(), { isCurrentSectionPresent: p } = ht(), h = Dp(() => m.value.targetTitle), f = Ow();
    Pp(
      h,
      () => b(this, null, function* () {
        try {
          yield f(
            u.value,
            c.value,
            h.value
          );
        } catch (y) {
          throw mw.cx.eventlogging.stats.sourceArticleFetchFailed(!0), y;
        }
      }),
      { immediate: !0 }
    ), Pp(p, t, { immediate: !0 });
    const w = xT("breakpoints"), v = Dp(() => w.value.mobile);
    return mw.cx.eventlogging.stats.sectionCompareAccess(v.value), (y, C) => (Ko(), Ki("section", wT, [
      Tc(iT, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      Tc(A5, {
        "content-type-selection": o.value,
        "onUpdate:contentTypeSelection": C[0] || (C[0] = (S) => o.value = S),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      Xi("section", vT, [
        o.value === "source_section" ? (Ko(), Ki(Ac, { key: 0 }, [
          lt(i) ? Ap("", !0) : (Ko(), Tp(lt(mt), { key: 0 })),
          Xi("section", {
            lang: lt(c),
            dir: lt(O.getDir)(lt(c)),
            class: "pt-2 px-4",
            innerHTML: lt(i)
          }, null, 8, _T)
        ], 64)) : o.value === "target_article" ? (Ko(), Ki(Ac, { key: 1 }, [
          lt(g) ? Ap("", !0) : (Ko(), Tp(lt(mt), { key: 0 })),
          Xi("article", {
            lang: lt(u),
            dir: lt(O.getDir)(lt(u)),
            class: "px-4",
            innerHTML: lt(g)
          }, null, 8, ST)
        ], 64)) : (Ko(), Ki(Ac, { key: 2 }, [
          Xi("section", {
            class: "pa-4",
            innerHTML: lt(d)
          }, null, 8, yT),
          Tc(Xw, {
            class: "sx-content-comparator__new-section-placeholder--present",
            "placeholder-title": y.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
            "placeholder-subtitle": y.$i18n(
              "cx-sx-content-comparator-present-section-placeholder-subtitle"
            )
          }, null, 8, ["placeholder-title", "placeholder-subtitle"])
        ], 64))
      ])
    ]));
  }
}, kT = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: bT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, $T = window.Vue.resolveComponent, VT = window.Vue.createVNode, ET = window.Vue.normalizeClass, LT = window.Vue.openBlock, TT = window.Vue.createElementBlock;
function AT(e, t, n, o, s, a) {
  const r = $T("sx-content-comparator");
  return LT(), TT("main", {
    class: ET(["sx-content-comparator-view", a.classes])
  }, [
    VT(r)
  ], 2);
}
const DT = /* @__PURE__ */ he(kT, [["render", AT]]);
const PT = window.Vue.resolveDirective, Zs = window.Vue.createElementVNode, Bp = window.Vue.withDirectives, Yi = window.Vue.unref, Dc = window.Vue.createVNode, Fp = window.Vue.toDisplayString, Np = window.Vue.createTextVNode, ea = window.Vue.withCtx, BT = window.Vue.openBlock, FT = window.Vue.createBlock, NT = { class: "mw-ui-dialog__header px-4 py-3" }, MT = { class: "mw-ui-dialog__header-title" }, UT = { class: "pa-4" }, IT = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Mp = window.Codex.CdxButton, RT = {
  __name: "SXConfirmBackNavigationDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = () => {
      n("continue-translation"), o();
    }, a = () => {
      n("discard-translation"), o();
    };
    return (r, l) => {
      const c = PT("i18n");
      return BT(), FT(Yi(Vt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: ea(() => [
          Zs("div", NT, [
            Bp(Zs("span", MT, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: ea(() => [
          Zs("div", IT, [
            Dc(Yi(Mp), {
              weight: "quiet",
              onClick: s
            }, {
              default: ea(() => [
                Np(Fp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Dc(Yi(Mp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: ea(() => [
                Np(Fp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ea(() => [
          Dc(Yi(yr)),
          Zs("div", UT, [
            Bp(Zs("span", null, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, zT = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => bo(a)
  );
  return s && wf(s) ? $t.parseTemplateWikitext(
    hf(s),
    n,
    t
  ) : Promise.resolve(null);
}, Kw = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => bo(a)
  );
  return s ? $t.parseTemplateWikitext(
    hf(s),
    n,
    t
  ) : Promise.resolve(null);
}, OT = window.Vuex.useStore, hd = () => {
  const e = OT(), { sourceSection: t } = oe(), { getCurrentTitleByLanguage: n } = cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = F(), a = Gw(), r = (i, d, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[d] = g;
      return;
    }
    const m = t.value.getContentTranslationUnitById(i);
    m instanceof gt ? m.blockTemplateProposedTranslations[d] = g : m instanceof eo && m.addProposedTranslation(d, g);
  }, l = (i, d) => b(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, i))
      return "";
    try {
      const m = yield a();
      return yield $t.fetchSegmentTranslation(
        o.value,
        s.value,
        i,
        d,
        m
      );
    } catch (m) {
      return mw.log.error("Error while translating segment", m), "";
    }
  }), c = (i, d) => b(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      i,
      d
    ))
      return;
    let g = t.value.getOriginalContentByTranslationUnitId(i);
    const m = t.value.getContentTranslationUnitById(i);
    let p;
    if (e.commit("application/addMtRequestsPending", i), p = yield l(d, g), !p) {
      e.commit("application/removeMtRequestsPending", i);
      return;
    }
    m instanceof gt && (m.setBlockTemplateAdaptationInfoByHtml(
      d,
      p
    ), p = (yield zT(
      p,
      n(s.value, o.value),
      s.value
    )) || ""), r(
      i,
      d,
      p
    ), e.commit("application/removeMtRequestsPending", i);
  });
  return {
    translateTranslationUnitById: c,
    translateSelectedTranslationUnitForAllProviders: () => {
      const i = e.getters["mediawiki/getSupportedMTProviders"](
        o.value,
        s.value
      ), { selectedTranslationUnitId: d } = t.value;
      i.forEach(
        (g) => c(d, g)
      );
    }
  };
}, jT = window.Vuex.useStore, HT = () => {
  const { sourceSection: e } = oe(), t = jT(), { translateTranslationUnitById: n } = hd();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function GT(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const qT = window.Vue.resolveDirective, dt = window.Vue.createElementVNode, Qi = window.Vue.withDirectives, je = window.Vue.unref, Pc = window.Vue.createVNode, bn = window.Vue.withCtx, WT = window.Vue.renderList, XT = window.Vue.Fragment, Ji = window.Vue.openBlock, KT = window.Vue.createElementBlock, YT = window.Vue.toDisplayString, Bc = window.Vue.createBlock, Up = window.Vue.createCommentVNode, QT = { class: "mw-ui-dialog__header pa-4" }, JT = { class: "row ma-0 py-2" }, ZT = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, eA = { class: "mb-0" }, tA = { class: "col shrink justify-center" }, nA = { class: "pb-2 mb-0" }, oA = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, sA = ["dir", "lang", "innerHTML"], aA = ["textContent"], iA = ["innerHTML"], rA = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, lA = /* @__PURE__ */ dt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), cA = ["innerHTML"], Fc = window.Vue.computed, uA = window.Vuex.useStore, dA = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = ce.EMPTY_TEXT_PROVIDER_KEY, s = ce.ORIGINAL_TEXT_PROVIDER_KEY, a = uA(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: c
    } = oe(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: i
    } = F(), d = Fc(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        u.value,
        i.value
      )
    ), g = Fc(() => {
      const C = [s, o];
      return d.value.filter(
        (S) => !C.includes(S)
      );
    }), m = Fc(
      () => l.value ? r.value.proposedTitleTranslations : c.value.proposedTranslations
    ), p = HT(), h = (C) => {
      p(C), w();
    }, f = ce.getMTProviderLabel, w = () => n("update:active", !1), v = fe(), y = GT(
      v.i18n("cx-tools-mt-noservices")
    );
    return (C, S) => {
      const E = qT("i18n");
      return e.active ? (Ji(), Bc(je(Vt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: bn(() => [
          dt("div", QT, [
            dt("div", JT, [
              dt("div", ZT, [
                Qi(dt("h4", eA, null, 512), [
                  [E, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              dt("div", tA, [
                Pc(je(Ke), {
                  type: "icon",
                  icon: je(xr),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            Qi(dt("h6", nA, null, 512), [
              [E, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: bn(() => [
          Pc(je(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[0] || (S[0] = (L) => h(je(s)))
          }, {
            header: bn(() => [
              Qi(dt("h5", oA, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: bn(() => [
              dt("p", {
                dir: je(O.getDir)(je(u)),
                lang: je(u),
                innerHTML: m.value[je(s)]
              }, null, 8, sA)
            ]),
            _: 1
          }),
          (Ji(!0), KT(XT, null, WT(g.value, (L) => (Ji(), Bc(je(Ze), {
            key: L,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (N) => h(L)
          }, {
            header: bn(() => [
              dt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: YT(je(f)(L))
              }, null, 8, aA)
            ]),
            default: bn(() => [
              dt("p", {
                innerHTML: m.value[L]
              }, null, 8, iA)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Pc(je(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[1] || (S[1] = (L) => h(je(o)))
          }, {
            header: bn(() => [
              Qi(dt("h5", rA, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: bn(() => [
              lA
            ]),
            _: 1
          }),
          g.value.length ? Up("", !0) : (Ji(), Bc(je(Ze), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: bn(() => [
              dt("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: je(y)
              }, null, 8, cA)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Up("", !0);
    };
  }
}, gA = window.Vuex.useStore, ws = () => {
  const { sourceSection: e } = oe(), t = gA(), { translateTranslationUnitById: n } = hd(), { currentMTProvider: o } = Fe(t), s = (l) => b(void 0, null, function* () {
    e.value.selectTranslationUnitById(l), yield n(l, o.value);
    const { followingTranslationUnit: c } = e.value;
    c && (yield n(
      c.id,
      o
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: l } = e.value;
      return l ? s(l.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: l, contentTranslationUnits: c } = e.value, u = l - 1;
      let i = 0;
      return u > -1 && (i = c[u].id), s(i);
    },
    selectTranslationUnitById: s
  };
};
const Ip = window.Vue.toDisplayString, Nc = window.Vue.createElementVNode, Zi = window.Vue.unref, mA = window.Vue.createVNode, pA = window.Vue.normalizeClass, hA = window.Vue.withCtx, fA = window.Vue.openBlock, wA = window.Vue.createBlock, vA = ["href"], _A = ["textContent"], SA = ["textContent"], vo = window.Vue.computed, Rp = "sx-sentence-selector__section-title", yA = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = oe(), { currentSourcePage: o, currentTargetPageTitle: s } = ot(), { sourceLanguageURLParameter: a } = F(), { isPresentLeadSection: r } = ht(), l = vo(() => {
      var f;
      return (f = o.value) == null ? void 0 : f.title;
    }), c = vo(
      () => {
        var f;
        return ((f = t.value) == null ? void 0 : f.title) || l.value;
      }
    ), u = vo(
      () => Z.getPageUrl(a.value, l.value)
    ), i = vo(
      () => {
        var f;
        return !!((f = t.value) != null && f.translatedTitle);
      }
    ), d = vo(
      () => i.value ? "translated" : "selected"
    ), g = vo(() => {
      const f = [Rp];
      return n.value && !r.value && f.push(`${Rp}--${d.value}`), f;
    }), { selectTranslationUnitById: m } = ws(), p = () => m(0), h = vo(
      () => r.value ? s.value : c.value
    );
    return (f, w) => (fA(), wA(Zi(V), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: hA(() => [
        Nc("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Nc("strong", {
            textContent: Ip(l.value)
          }, null, 8, _A),
          mA(Zi(et), {
            icon: Zi(df),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, vA),
        Nc("h2", {
          class: pA(["pa-0 ma-0", g.value]),
          onClick: w[0] || (w[0] = (v) => Zi(r) ? p : null),
          textContent: Ip(h.value)
        }, null, 10, SA)
      ]),
      _: 1
    }));
  }
};
const kn = window.Vue.unref, ta = window.Vue.createVNode, er = window.Vue.withCtx, zp = window.Vue.toDisplayString, Op = window.Vue.createTextVNode, CA = window.Vue.openBlock, xA = window.Vue.createBlock, jp = window.Vue.computed, Mc = window.Codex.CdxButton, Hp = window.Codex.CdxIcon, Yw = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = oe(), { isPresentLeadSection: s } = ht(), a = jp(
      () => {
        var l;
        return (l = t.value) == null ? void 0 : l.isSelectedTranslationUnitLast;
      }
    ), r = jp(
      () => s.value || n.value
    );
    return (l, c) => (CA(), xA(kn(M), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: er(() => [
        ta(kn(Mc), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": l.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: r.value,
          onClick: c[0] || (c[0] = (u) => l.$emit("select-previous-segment"))
        }, {
          default: er(() => [
            ta(kn(Hp), {
              class: "me-1",
              icon: kn(nd)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        ta(kn(Mc), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !kn(o),
          onClick: c[1] || (c[1] = (u) => l.$emit("apply-translation"))
        }, {
          default: er(() => [
            Op(zp(l.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        ta(kn(Mc), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: a.value,
          onClick: c[2] || (c[2] = (u) => l.$emit("skip-translation"))
        }, {
          default: er(() => [
            Op(zp(l.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            ta(kn(Hp), {
              class: "ms-1",
              size: "small",
              icon: kn(ps)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const _o = window.Vue.unref, bA = window.Vue.toDisplayString, na = window.Vue.createVNode, tr = window.Vue.withCtx, kA = window.Vue.openBlock, $A = window.Vue.createBlock, Uc = window.Vue.computed, VA = window.Vuex.useStore, EA = window.Codex.CdxButton, LA = window.Codex.CdxIcon, TA = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = VA(), n = Uc(() => t.state.application.currentMTProvider), o = fe(), s = Uc(() => ({
      [ce.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ce.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Uc(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ce.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (kA(), $A(_o(V), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: tr(() => [
        na(_o(M), { class: "ma-0 ps-5 pb-4" }, {
          default: tr(() => [
            na(_o(V), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: bA(a.value)
            }, null, 8, ["textContent"]),
            na(_o(V), {
              shrink: "",
              class: "pe-5"
            }, {
              default: tr(() => [
                na(_o(EA), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (c) => r.$emit("configure-options"))
                }, {
                  default: tr(() => [
                    na(_o(LA), {
                      class: "pa-0",
                      icon: _o(td)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
};
const It = window.Vue.unref, qn = window.Vue.createVNode, AA = window.Vue.resolveDirective, Gp = window.Vue.createElementVNode, DA = window.Vue.withDirectives, qp = window.Vue.toDisplayString, Wp = window.Vue.createTextVNode, oa = window.Vue.withCtx, PA = window.Vue.openBlock, BA = window.Vue.createElementBlock, FA = { class: "mt-retry-body pb-5" }, NA = { class: "retry-body__message" }, Xp = window.Codex.CdxButton, Ic = window.Codex.CdxIcon, MA = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = AA("i18n");
      return PA(), BA("div", FA, [
        Gp("div", NA, [
          qn(It(Ic), {
            class: "me-2",
            icon: It(yC)
          }, null, 8, ["icon"]),
          DA(Gp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        qn(It(M), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: oa(() => [
            qn(It(V), { cols: "6" }, {
              default: oa(() => [
                qn(It(Xp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: oa(() => [
                    qn(It(Ic), {
                      class: "me-1",
                      icon: It(Yf)
                    }, null, 8, ["icon"]),
                    Wp(" " + qp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            qn(It(V), { cols: "6" }, {
              default: oa(() => [
                qn(It(Xp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: oa(() => [
                    qn(It(Ic), {
                      class: "me-1",
                      icon: It(DC)
                    }, null, 8, ["icon"]),
                    Wp(" " + qp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
};
const Yo = window.Vue.createVNode, ct = window.Vue.unref, sa = window.Vue.openBlock, UA = window.Vue.createElementBlock, IA = window.Vue.createCommentVNode, nr = window.Vue.createBlock, RA = window.Vue.normalizeClass, zA = window.Vue.normalizeStyle, aa = window.Vue.withCtx, OA = window.Vue.toDisplayString, jA = window.Vue.createTextVNode, HA = window.Vue.normalizeProps, GA = window.Vue.guardReactiveProps, qA = ["lang", "dir", "innerHTML"], Rc = window.Vue.ref, WA = window.Vue.onMounted, XA = window.Vue.onBeforeUnmount, zc = window.Vue.computed, KA = window.Vue.nextTick, YA = window.Vuex.useStore, QA = window.Codex.CdxButton, JA = window.Codex.CdxIcon, ZA = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Rc(0), n = Rc(null), o = Rc(null), s = YA(), { currentMTProvider: a } = Fe(s), { targetLanguageURLParameter: r } = F(), { sourceSection: l, currentProposedTranslation: c } = oe(), u = zc(
      () => {
        var p, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (p = l.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), i = zc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), d = zc(
      () => !!c.value || a.value === ce.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    WA(() => b(this, null, function* () {
      yield KA(), g(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), XA(() => {
      m.unobserve(n.value.$el), m.unobserve(o.value.$el);
    });
    const m = new ResizeObserver(() => g());
    return (p, h) => (sa(), nr(ct(Ze), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: aa(() => [
        Yo(ct(M), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: aa(() => [
            Yo(TA, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => p.$emit("configure-options"))
            }, null, 512),
            Yo(ct(V), {
              class: RA(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !d.value && u.value
              }]),
              style: zA(d.value ? i.value : null)
            }, {
              default: aa(() => [
                d.value ? (sa(), UA("section", {
                  key: 0,
                  lang: ct(r),
                  dir: ct(O.getDir)(ct(r)),
                  innerHTML: ct(c)
                }, null, 8, qA)) : u.value ? (sa(), nr(ct(mt), { key: 1 })) : (sa(), nr(MA, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => p.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => p.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Yo(ct(V), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: aa(() => [
                d.value || u.value ? (sa(), nr(ct(QA), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !d.value,
                  onClick: h[3] || (h[3] = (f) => p.$emit("edit-translation", ct(c)))
                }, {
                  default: aa(() => [
                    Yo(ct(JA), {
                      class: "me-1",
                      icon: ct(ed)
                    }, null, 8, ["icon"]),
                    jA(" " + OA(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : IA("", !0),
                Yo(Yw, HA(GA(p.$attrs)), null, 16)
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}, eD = window.Vue.computed, tD = (e) => eD(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((s) => {
    const a = e.getSentenceById(s.dataset.segmentid);
    s.classList.add(t, "py-1", "me-1");
    const r = ["untranslated", "translated", "selected"].map(
      (c) => `${t}--${c}`
    );
    s.classList.remove(...r), a.selected && s.classList.add(`${t}--selected`);
    const l = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${l}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const nD = window.Vue.unref, oD = window.Vue.normalizeClass, sD = window.Vue.openBlock, aD = window.Vue.createElementBlock, iD = ["innerHTML"], rD = window.Vue.onMounted, lD = window.Vue.ref, cD = window.Vue.computed, uD = {
  __name: "SubSection",
  props: {
    subSection: {
      type: gt,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = lD(null), a = tD(n.subSection);
    rD(() => {
      s.value.addEventListener("click", (u) => {
        let i;
        if (n.subSection.isBlockTemplate)
          i = n.subSection;
        else {
          const d = u.composedPath().find(
            (g) => g instanceof Element && g.classList.contains("cx-segment")
          );
          if (!d)
            return;
          i = n.subSection.getSentenceById(
            d.dataset.segmentid
          );
        }
        l(i);
      });
    });
    const { selectTranslationUnitById: r } = ws(), l = (u) => {
      if (u.selected) {
        o("bounce-translation");
        return;
      }
      r(u.id);
    }, c = cD(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (u, i) => (sD(), aD("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: oD(["sx-sentence-selector__subsection", c.value]),
      innerHTML: nD(a)
    }, null, 10, iD));
  }
};
const Kp = window.Vue.unref, Yp = window.Vue.createVNode, Qp = window.Vue.normalizeStyle, dD = window.Vue.openBlock, gD = window.Vue.createElementBlock, Jp = window.Vue.computed, Qw = {
  __name: "BlockTemplateStatusIndicator",
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
    const t = e, n = Jp(() => ({ "--size": t.size })), o = Jp(
      () => !t.isTemplateAdapted || t.percentage === 0 ? W0 : Cu
    );
    return (s, a) => (dD(), gD("div", {
      class: "block-template-status-indicator",
      style: Qp(n.value)
    }, [
      Yp(Kp(u1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      Yp(Kp(et), {
        icon: o.value,
        size: e.size / 2,
        style: Qp({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const Wn = window.Vue.unref, or = window.Vue.createVNode, Oc = window.Vue.withCtx, mD = window.Vue.openBlock, pD = window.Vue.createBlock, hD = window.Vue.computed, Zp = window.Codex.CdxButton, eh = window.Codex.CdxIcon, Jw = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = oe(), o = hD(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (mD(), pD(Wn(M), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Oc(() => [
        or(Wn(Zp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Wn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Oc(() => [
            or(Wn(eh), { icon: Wn(nd) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        or(Wn(Zp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: Oc(() => [
            or(Wn(eh), { icon: Wn(ps) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, ia = window.Vue.openBlock, sr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const $n = window.Vue.unref, Qo = window.Vue.withCtx, ra = window.Vue.createVNode, jc = window.Vue.toDisplayString, Hc = window.Vue.createElementVNode, fD = window.Vue.renderList, wD = window.Vue.Fragment, vD = window.Vue.createElementBlock, _D = { class: "pa-4" }, SD = ["textContent"], yD = ["textContent"], CD = window.Vuex.useStore, ar = window.Vue.computed, xD = {
  __name: "SXBlockTemplateStatusDialog",
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
    const t = e, { targetLanguageAutonym: n } = Fe(CD()), o = ar(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = fe(), a = ar(() => {
      let c;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? c = "cx-sx-block-template-mapping-status-title-partially-template" : c = "cx-sx-block-template-mapping-status-title-fully-template" : c = "cx-sx-block-template-mapping-status-title-unadapted-template" : c = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(c);
    }), r = ar(() => {
      let c;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? c = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? c = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : c = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(c);
    }), l = ar(() => {
      let c = [];
      if (!t.targetTemplateExists)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: K0,
          color: kt.gray500
        });
      else if (!t.isTemplateAdapted)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: xr,
          color: kt.gray500
        });
      else if (o.value < 100)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Cu,
          color: kt.blue600
        });
      else {
        let u;
        t.sourceParamsCount ? u = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : u = s.i18n("cx-sx-block-template-no-source-params-text"), c.push({
          text: u,
          icon: Cu,
          color: kt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? c.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: Cr,
        color: kt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && c.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: D0,
        color: kt.gray500
      }), c;
    });
    return (c, u) => (ia(), sr($n(Vt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: c.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: u[0] || (u[0] = (i) => c.$emit("update:active", i))
    }, {
      header: Qo(() => [
        ra($n(M), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Qo(() => [
            ra($n(V), { shrink: "" }, {
              default: Qo(() => [
                e.targetTemplateExists ? (ia(), sr(Qw, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (ia(), sr($n(et), {
                  key: 1,
                  icon: $n(P0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Qo(() => [
        Hc("div", _D, [
          Hc("h3", {
            textContent: jc(a.value)
          }, null, 8, SD),
          Hc("p", {
            class: "mt-6 text-small",
            textContent: jc(r.value)
          }, null, 8, yD),
          (ia(!0), vD(wD, null, fD(l.value, (i, d) => (ia(), sr($n(M), {
            key: d,
            align: "start",
            class: "mt-4"
          }, {
            default: Qo(() => [
              ra($n(V), { shrink: "" }, {
                default: Qo(() => [
                  ra($n(et), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              ra($n(V), {
                textContent: jc(i.text)
              }, null, 8, ["textContent"])
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ]),
      _: 1
    }, 8, ["value", "title"]));
  }
};
const Pe = window.Vue.unref, He = window.Vue.createVNode, Jt = window.Vue.withCtx, Gc = window.Vue.toDisplayString, th = window.Vue.createTextVNode, bD = window.Vue.resolveDirective, nh = window.Vue.withDirectives, oh = window.Vue.createElementVNode, kD = window.Vue.normalizeClass, Jo = window.Vue.openBlock, sh = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ir = window.Vue.createBlock, ah = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const ih = window.Vue.mergeProps, $D = { class: "block-template-adaptation-card__container pa-4" }, VD = ["textContent"], ED = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Ge = window.Vue.computed, LD = window.Vue.ref, TD = window.Vuex.useStore, rh = window.Codex.CdxButton, lh = window.Codex.CdxIcon, AD = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = TD(), { targetLanguageAutonym: n, currentMTProvider: o } = Fe(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = oe(), r = Ge(() => {
      var k;
      return (k = s.value) == null ? void 0 : k.isTranslated;
    }), l = Ge(() => {
      var P;
      return ((P = s.value) == null ? void 0 : P.blockTemplateTranslatedContent) || a.value;
    }), c = Ge(
      () => {
        var k;
        return (k = s.value) == null ? void 0 : k.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = Ge(
      () => {
        var k;
        return !((k = t.state.application.mtRequestsPending) != null && k.includes(
          s.value.id
        ));
      }
    ), i = fe(), d = Ge(
      // Strip HTML comments and return
      () => {
        var k, P;
        return ((P = (k = s.value) == null ? void 0 : k.sourceBlockTemplateName) == null ? void 0 : P.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = Ge(
      () => {
        var k, P;
        return (P = (k = s.value) == null ? void 0 : k.blockTemplateAdaptationInfo) == null ? void 0 : P[o.value];
      }
    ), m = Ge(
      () => {
        var k, P;
        return ((k = g.value) == null ? void 0 : k.adapted) || !!((P = g.value) != null && P.partial);
      }
    ), p = Ge(() => g.value ? "block-template-adaptation-card__body--" + (m.value ? "success" : "warning") : null), h = Ge(() => g.value ? m.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = Ge(
      () => {
        var k;
        return Object.keys(((k = s.value) == null ? void 0 : k.sourceTemplateParams) || {}).length;
      }
    ), w = Ge(() => {
      var P;
      const k = (P = s.value) == null ? void 0 : P.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(k || {});
    }), v = Ge(() => w.value.length), y = Ge(() => {
      const k = L.value;
      return f.value + k === 0 ? 100 : v.value / (f.value + k) * 100 || 0;
    }), C = LD(!1), S = () => {
      C.value = !0;
    }, E = (k) => k.filter((P) => !w.value.includes(P)), L = Ge(() => {
      var P;
      const k = ((P = g.value) == null ? void 0 : P.mandatoryTargetParams) || [];
      return E(k).length;
    }), N = Ge(() => {
      var P;
      const k = ((P = g.value) == null ? void 0 : P.optionalTargetParams) || [];
      return E(k).length;
    });
    return (k, P) => {
      const U = bD("i18n");
      return Jo(), ir(Pe(Ze), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Jt(() => [
          oh("div", $D, [
            He(Pe(M), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Jt(() => [
                He(Pe(V), { shrink: "" }, {
                  default: Jt(() => [
                    He(Pe(lh), {
                      icon: Pe(PC),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                He(Pe(V), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Jt(() => [
                    th(Gc(d.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (Jo(), sh("div", {
              key: 0,
              class: kD(["pa-4 mb-4", p.value])
            }, [
              He(Pe(M), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Jt(() => [
                  nh(He(Pe(V), { tag: "h5" }, null, 512), [
                    [U, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  He(Pe(V), { shrink: "" }, {
                    default: Jt(() => [
                      He(Qw, {
                        percentage: y.value,
                        size: 20,
                        "is-template-adapted": m.value,
                        "stroke-width": 2,
                        onClick: S
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              oh("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Gc(c.value)
              }, null, 8, VD),
              He(Pe(rh), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: P[0] || (P[0] = (X) => k.$emit("edit-translation", l.value))
              }, {
                default: Jt(() => [
                  th(Gc(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (Jo(), sh("div", ED, [
              He(Pe(M), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Jt(() => [
                  nh(He(Pe(V), { tag: "h5" }, null, 512), [
                    [U, [
                      Pe(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  He(Pe(V), { shrink: "" }, {
                    default: Jt(() => [
                      He(Pe(rh), {
                        weight: "quiet",
                        "aria-label": k.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Jt(() => [
                          He(Pe(lh), {
                            icon: Pe(LC),
                            onClick: S
                          }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])) : (Jo(), ir(Pe(mt), { key: 2 }))
          ]),
          r.value ? (Jo(), ir(Jw, ah(ih({ key: 1 }, k.$attrs)), null, 16)) : (Jo(), ir(Yw, ah(ih({ key: 0 }, k.$attrs)), null, 16)),
          He(xD, {
            active: C.value,
            "onUpdate:active": P[1] || (P[1] = (X) => C.value = X),
            "source-params-count": f.value,
            "target-params-count": v.value,
            "mandatory-missing-params-count": L.value,
            "optional-missing-params-count": N.value,
            "is-template-adapted": m.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const DD = window.Vue.unref, PD = window.Vue.createVNode, BD = window.Vue.openBlock, FD = window.Vue.createElementBlock, ND = { class: "translated-segment-card-header" }, MD = window.Vue.computed, UD = {
  __name: "TranslatedSegmentCardHeader",
  props: {
    selection: {
      type: String,
      required: !0,
      validator: (e) => ["sentence", "paragraph"].includes(e)
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = t, { isSectionTitleSelected: o } = oe(), s = fe(), a = MD(() => [
      {
        value: "sentence",
        props: {
          label: s.i18n(
            "cx-sx-sentence-selector-translated-segment-sentence-option"
          ),
          type: "text",
          class: "px-0 py-4 mx-4"
        }
      },
      {
        value: "paragraph",
        props: {
          label: s.i18n(
            "cx-sx-sentence-selector-translated-segment-paragraph-option"
          ),
          type: "text",
          class: "px-0 py-4 mx-4",
          disabled: o.value
        }
      }
    ]), r = (l) => n("update:selection", l);
    return (l, c) => (BD(), FD("div", ND, [
      PD(DD(Ea), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const ID = window.Vue.useCssVars, ze = window.Vue.createVNode, ch = window.Vue.resolveDirective, RD = window.Vue.createElementVNode, qc = window.Vue.withDirectives, Ce = window.Vue.unref, zD = window.Vue.normalizeStyle, rr = window.Vue.openBlock, uh = window.Vue.createElementBlock, OD = window.Vue.createCommentVNode, jD = window.Vue.normalizeClass, Ct = window.Vue.withCtx, HD = window.Vue.toDisplayString, GD = window.Vue.createTextVNode, dh = window.Vue.createBlock, qD = window.Vue.normalizeProps, WD = window.Vue.guardReactiveProps, Vn = window.Vue.computed, XD = window.Vue.ref, KD = window.Vue.inject, YD = window.Vuex.useStore, QD = window.Codex.CdxButton, Wc = window.Codex.CdxIcon, JD = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    ID((v) => ({
      "4929555c": w.value
    }));
    const t = XD("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = oe(), { targetLanguage: a } = Fe(YD()), r = Vn(() => t.value === "sentence"), l = Vn(
      () => n.value.subSections.find(
        (v) => v.sentences.some(
          (y) => {
            var C;
            return y.id === ((C = o.value) == null ? void 0 : C.id);
          }
        )
      )
    ), c = Vn(() => {
      var v;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (v = o.value) == null ? void 0 : v.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), u = KD("colors"), i = u.gray200, d = u.red600, g = Vn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), m = Vn(
      () => sn.calculateScore(
        g.value,
        c.value,
        a.value
      )
    ), p = Vn(
      () => sn.getScoreStatus(m.value)
    ), h = Vn(
      () => `translated-segment-card__modification-stats__percentage--${p.value}`
    ), f = Vn(() => ({
      failure: m.value === 0 ? null : u.yellow700,
      warning: u.yellow700,
      success: u.green600
    })), w = Vn(
      () => f.value[p.value]
    );
    return (v, y) => {
      const C = ch("i18n"), S = ch("i18n-html");
      return rr(), dh(Ce(Ze), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ct(() => [
          ze(Ce(M), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ct(() => [
              ze(UD, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (E) => t.value = E)
              }, null, 8, ["selection"]),
              ze(Ce(V), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Ct(() => [
                  ze(Ce(M), { class: "ma-0" }, {
                    default: Ct(() => [
                      ze(Ce(V), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Ct(() => [
                          qc(RD("h5", null, null, 512), [
                            [C, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? qc((rr(), uh("p", {
                            key: 0,
                            style: zD({ color: Ce(d) })
                          }, null, 4)), [
                            [C, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : qc((rr(), uh("p", {
                            key: 1,
                            class: jD(h.value)
                          }, null, 2)), [
                            [S, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      ze(Ce(V), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Ct(() => [
                          ze(Ce(M), { class: "ma-0 ms-2" }, {
                            default: Ct(() => [
                              ze(Ce(V), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Ct(() => [
                                  ze(Ce(Wc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Ce(NC)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              ze(Ce(V), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Ct(() => [
                                  ze(Ce(mf), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: w.value,
                                    background: Ce(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              ze(Ce(V), { shrink: "" }, {
                                default: Ct(() => [
                                  ze(Ce(Wc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Ce(BC)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  r.value ? (rr(), dh(Ce(QD), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (E) => v.$emit("edit-translation", g.value))
                  }, {
                    default: Ct(() => [
                      ze(Ce(Wc), {
                        class: "me-1",
                        icon: Ce(ed)
                      }, null, 8, ["icon"]),
                      GD(" " + HD(v.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : OD("", !0)
                ]),
                _: 1
              }),
              ze(Ce(V), { class: "translated-segment-card__actions" }, {
                default: Ct(() => [
                  ze(Jw, qD(WD(v.$attrs)), null, 16)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}, ZD = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = oe(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = ws(), { isPresentLeadSection: s } = ht(), { currentTranslation: a } = Xt();
  return () => {
    if (e.value)
      if (a.value && !t.value) {
        const { lastTranslatedContentTranslationUnit: r } = e.value;
        e.value.selectTranslationUnitById(
          (r == null ? void 0 : r.id) || 0
        ), n();
      } else
        t.value || (o(0), s.value && n());
  };
}, Zw = window.Vuex.useStore, e6 = () => {
  const e = Zw(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = F();
  return () => b(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = mw.config.get("wgContentTranslationEnableMT");
    let s;
    o ? s = yield Lr.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : s = new ce(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, t6 = () => {
  const e = Zw(), { currentMTProvider: t } = Fe(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = F(), s = e6();
  return () => b(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = ce.getStorageKey(
        n.value,
        o.value
      );
      let l = mw.storage.get(r);
      (!l || !a.includes(l)) && (l = a[0]), e.commit("application/setCurrentMTProvider", l);
    }
  });
}, n6 = window.Vue.computed, o6 = (e) => {
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
}, s6 = () => {
  const { selectedContentTranslationUnit: e } = oe(), t = n6(
    () => e.value instanceof gt
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && o6(o);
  };
}, a6 = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (l) => !ce.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, i6 = window.Vue.computed, ev = () => {
  const { currentTranslation: e } = Xt(), { currentSourcePage: t } = ot();
  return i6(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, r6 = window.Vue.computed, Ma = () => {
  const { sourceSection: e } = oe(), { currentTargetPageTitle: t } = ot(), { isMissingLeadSection: n } = ht();
  return { targetPageTitleForPublishing: r6(
    () => n.value ? e.value.title : t.value
  ) };
}, l6 = window.Vuex.useStore, fd = () => {
  const e = l6(), { sourceSection: t } = oe(), { targetPageTitleForPublishing: n } = Ma(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = F(), r = ev(), { target: l, PUBLISHING_TARGETS: c } = Tt();
  return () => {
    const u = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(d);
    g.forEach(
      (p) => a6(p, i)
    );
    const m = t.value.getTranslationProgress(a);
    return $t.saveTranslation({
      sourceTitle: o.value,
      targetTitle: u,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: t.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: t.value.targetSectionTitleForPublishing,
      sourceLanguage: s.value,
      targetLanguage: a.value,
      revision: r.value,
      units: g.map((p) => p.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: d,
      isSandbox: l === c.SANDBOX,
      progress: m
    });
  };
}, c6 = window.Vue.effectScope, u6 = window.Vue.onScopeDispose, d6 = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = c6(!0), n = o.run(() => e(...a))), u6(s), n);
}, g6 = window.Vuex.useStore;
let Xc;
const m6 = () => {
  const e = g6(), t = fd();
  let n = 1e3, o = 0;
  return Xc = cd(() => t().then((a) => {
    a instanceof so ? (n *= o + 1, o++, setTimeout(Xc, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof us)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Xc;
}, tv = d6(m6), p6 = window.Vuex.useStore, h6 = () => {
  const e = p6(), t = tv(), { currentMTProvider: n } = Fe(e), { sourceSection: o, currentProposedTranslation: s } = oe(), { selectNextTranslationUnit: a } = ws();
  return () => b(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, f6 = window.Vuex.useStore, w6 = () => {
  const e = f6(), t = tv();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, v6 = window.Vuex.useStore, _6 = window.Vue.computed, nv = () => {
  const e = v6(), { currentTranslation: t } = Xt(), { currentMTProvider: n } = Fe(e), { currentTargetPageTitle: o } = ot(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = F(), c = Lt(), u = _6(() => {
    const f = {
      translation_source_language: s.value,
      translation_target_language: a.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L294)
      // translation_source_title:
      //   The title of the source article of the current translation. Applies only
      //   to events which relate to a specific translation or suggestion: all
      //   `editor_` and `publish_` events and some `dashboard_` events (e.g.
      //   `dashboard_start_translation`, `dashboard_delete_translation`)
      translation_source_title: r.value
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L301)
      // translation_target_exists:
      //   Whether the target article or section already exists. Applies only to
      //   events which relate to a specific translation or suggestion: all `editor_`
      //   and `publish_` events and some `dashboard_` events (e.g. `dashboard_start_translation`,
      //   `dashboard_delete_translation`). In section translation, if the user discards the mapping
      //   to an existing target section, the value should change to false in future events.
      // translation_target_exists: !!currentTargetPageTitle.value,
    };
    if (l.value ? (f.translation_source_section = l.value, f.translation_type = "section") : f.translation_type = "article", t.value) {
      f.translation_id = t.value.translationId, f.translation_target_title = t.value.targetTitle;
      const w = t.value.targetSectionTitle;
      w && (f.translation_target_section = w);
    } else
      o.value && (f.translation_target_title = o.value);
    return n.value && (f.translation_provider = ce.getProviderForInstrumentation(n.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      const f = me({
        event_type: "editor_open"
      }, u.value);
      return c(f);
    },
    logEditorCloseEvent: () => {
      const f = me({
        event_type: "editor_close"
      }, u.value);
      return c(f);
    },
    logEditorCloseWarnEvent: () => c(me({
      event_type: "editor_close_warn"
    }, u.value)),
    logEditorSegmentAddEvent: () => c(me({
      event_type: "editor_segment_add"
    }, u.value)),
    logEditorSegmentSkipEvent: () => c(me({
      event_type: "editor_segment_skip"
    }, u.value)),
    logEditorSegmentEditEvent: () => c(me({
      event_type: "editor_segment_edit"
    }, u.value))
  };
}, S6 = (e, t, n, o) => b(void 0, null, function* () {
  var l, c, u;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((c = t.mt) == null ? void 0 : c.content), a = (u = t == null ? void 0 : t.mt) == null ? void 0 : u.engine, r = yield Kw(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), y6 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, C6 = (e, t, n, o) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return S6(e, t, n, o);
  y6(e, t);
}), x6 = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (l) => l.pageSectionId === parseInt(a.id)
    ).length)
      for (const l of a.subSections) {
        const c = o.find(
          (i) => i.subSectionId === l.id
        );
        if (!c)
          continue;
        const u = C6(
          l,
          c,
          t || e.title,
          n
        );
        s.push(u);
      }
  return Promise.all(s);
}, b6 = { restoreCorporaDraft: x6 }, k6 = () => {
  const { currentSourcePage: e } = ot(), { sourceSection: t } = oe();
  return (n) => b(void 0, null, function* () {
    if (n.restored)
      return;
    try {
      const s = yield $t.fetchTranslationUnits(
        n.translationId
      );
      yield b6.restoreCorporaDraft(
        e.value,
        n.targetTitle,
        n.targetLanguage,
        s
      );
    } catch (s) {
      throw mw.cx.eventlogging.stats.restoreFailure(!0), new Error(s);
    }
    n.restored = !0;
    let o;
    n.isLeadSectionTranslation ? (t.value.originalTitle = n.sourceTitle, o = n.targetTitle) : o = n.targetSectionTitle, t.value.translatedTitle = o;
  });
};
let Kc = null;
function $6() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((o) => t.includes(o));
}
function ov() {
  return Kc === null && (Kc = $6()), Kc;
}
const sv = window.Vue.ref, Yc = sv(!1), Qc = sv(!1);
function gh() {
  return {
    isPermissionWarningDismissed: Yc,
    dismissPermissionWarning: () => {
      Yc.value = !0;
    },
    resetPermissionWarning: () => {
      Yc.value = !1;
    },
    isTitleErrorDismissed: Qc,
    dismissTitleError: () => {
      Qc.value = !0;
    },
    resetTitleError: () => {
      Qc.value = !1;
    }
  };
}
const ue = window.Vue.unref, xt = window.Vue.createVNode, Rt = window.Vue.withCtx, V6 = window.Vue.resolveDirective, En = window.Vue.createElementVNode, E6 = window.Vue.withDirectives, la = window.Vue.toDisplayString, L6 = window.Vue.createTextVNode, Zt = window.Vue.openBlock, Xn = window.Vue.createBlock, mh = window.Vue.createCommentVNode, T6 = window.Vue.renderList, A6 = window.Vue.Fragment, ph = window.Vue.createElementBlock, D6 = window.Vue.normalizeClass, P6 = window.Vue.normalizeStyle, B6 = { class: "sx-sentence-selector__header-title mb-0" }, F6 = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, N6 = { class: "sx-sentence-selector__section-contents px-4" }, Kn = window.Vue.computed, M6 = window.Vue.nextTick, U6 = window.Vue.onMounted, ca = window.Vue.ref, hh = window.Vue.watch, I6 = window.Vuex.useStore, fh = window.Codex.CdxButton, R6 = window.Codex.CdxIcon, wh = window.Codex.CdxMessage, z6 = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ca(!1), n = ca(!1), o = ca("100%"), s = I6(), { currentMTProvider: a, previousRoute: r } = Fe(s), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      pageURLParameter: u,
      sectionURLParameter: i
    } = F(), { resetPublishTarget: d, target: g } = Tt(), { loadSuggestion: m } = Fa();
    g.value || m(
      l.value,
      c.value,
      u.value
    ).then(() => d());
    const { sourceSection: p, selectedContentTranslationUnit: h } = oe(), { targetPageTitleForPublishing: f } = Ma(), w = ca({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), v = Kn(
      () => Object.values(w.value).every(Boolean)
    ), y = Kn(
      () => {
        var J;
        return (J = p.value) == null ? void 0 : J.isSelectedTranslationUnitTranslated;
      }
    ), C = Kn(() => {
      var J;
      return (J = p.value) == null ? void 0 : J.subSections;
    }), S = Kn(
      () => {
        var J;
        return (J = p.value) == null ? void 0 : J.selectedTranslationUnitOriginalContent;
      }
    ), E = Kn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: L,
      logEditorCloseEvent: N,
      logEditorCloseWarnEvent: k,
      logEditorSegmentAddEvent: P,
      logEditorSegmentSkipEvent: U
    } = nv(), X = () => {
      var Do;
      const J = T.currentRoute.value.meta.workflowStep, Bn = T.getRoutes().find(
        (Or) => Or.name === r.value
      ), ft = ((Do = Bn == null ? void 0 : Bn.meta) == null ? void 0 : Do.workflowStep) || 0;
      return J > ft;
    }, se = ZD();
    t6()().then(() => {
      X() && L(), w.value.mtProviders = !0;
    });
    const ne = s6(), { fetchTranslationsByStatus: B, translationsFetched: I } = hs(), K = k6(), { currentTranslation: Q } = Xt(), { selectPageSectionByTitle: ye, selectPageSectionByIndex: $e } = Ur(), xe = pd(), Ne = Eo();
    U6(() => b(this, null, function* () {
      if (!I.value.draft) {
        const J = [
          // required to get current draft translation (if exists)
          B("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          xe(l.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          Ne(l.value, [u.value])
        ];
        yield Promise.all(J);
      }
      w.value.pageMetadata = !0, i.value ? yield ye(i.value) : yield $e(0), w.value.pageContent = !0, Q.value && (yield K(Q.value)), w.value.draftRestored = !0, g.value || m(
        l.value,
        c.value,
        u.value
      ).then(() => d()), hh(
        v,
        () => b(this, null, function* () {
          v.value && (yield M6(), se(), ne());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), hh(h, ne);
    const { selectNextTranslationUnit: R, selectPreviousTranslationUnit: z } = ws(), ae = () => (U(), R()), _ = h6(), D = () => {
      P(), _();
    }, x = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, T = nt(), q = () => {
      const { autoSavePending: J } = s.state.application;
      if (J) {
        _s.value = !0, k();
        return;
      }
      H();
    }, j = w6(), { clearTranslationURLParameters: W } = F(), H = () => b(this, null, function* () {
      B("draft"), Q.value && (p.value.reset(), Q.value.restored = !1), N(), W(), j(), yield T.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: re,
      translateSelectedTranslationUnitForAllProviders: st
    } = hd(), Ve = () => {
      vs.value || (t.value = !0, st());
    }, { getCurrentTitleByLanguage: Ua } = cn(), { isMissingLeadSection: Ia } = ht(), lo = (J) => {
      T.push({
        name: "sx-editor",
        state: {
          content: J,
          originalContent: S.value,
          title: Ua(
            c.value,
            l.value
          ),
          isInitialEdit: !y.value || null
        }
      });
    }, Ir = () => T.push({ name: "sx-publisher" }), Rr = () => b(this, null, function* () {
      h.value ? yield re(
        h.value.id,
        a.value
      ) : yield re(0, a.value);
    }), vs = Kn(
      () => h.value instanceof gt
    ), _s = ca(!1), {
      isPermissionWarningDismissed: zr,
      dismissPermissionWarning: To,
      resetPermissionWarning: Ao
    } = gh(), { isTitleErrorDismissed: Ra, dismissTitleError: A, resetTitleError: G } = gh();
    X() && (Ao(), G());
    const Ue = Kn(
      () => !ov() && !zr.value
    ), At = Kn(
      () => !Ra.value && Ia.value && !mw.Title.newFromText(f.value)
    );
    return (J, un) => {
      const Bn = V6("i18n");
      return Zt(), ph("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: P6(E.value)
      }, [
        xt(ue(M), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Rt(() => [
            xt(ue(V), { shrink: "" }, {
              default: Rt(() => [
                xt(ue(fh), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": J.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: q
                }, {
                  default: Rt(() => [
                    xt(ue(R6), { icon: ue(Gf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            xt(ue(V), {
              grow: "",
              class: "px-1"
            }, {
              default: Rt(() => [
                E6(En("h4", B6, null, 512), [
                  [Bn, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            xt(ue(V), {
              shrink: "",
              class: "px-3"
            }, {
              default: Rt(() => [
                xt(ue(fh), {
                  disabled: !(ue(p) && ue(p).isTranslated),
                  onClick: Ir
                }, {
                  default: Rt(() => [
                    L6(la(J.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        v.value ? (Zt(), Xn(ue(M), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Rt(() => [
            xt(ue(V), {
              dir: ue(O.getDir)(ue(l)),
              lang: ue(l),
              class: "sx-sentence-selector__section"
            }, {
              default: Rt(() => [
                Ue.value ? (Zt(), Xn(ue(wh), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ue(To)
                }, {
                  default: Rt(() => [
                    En("p", null, la(J.$i18n("cx-publish-permission-warning")), 1),
                    En("p", null, [
                      En("strong", null, [
                        En("a", F6, la(J.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : mh("", !0),
                At.value ? (Zt(), Xn(ue(wh), {
                  key: 1,
                  type: "error",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ue(A)
                }, {
                  default: Rt(() => [
                    En("p", null, [
                      En("strong", null, la(J.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    En("p", null, la(J.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : mh("", !0),
                xt(yA),
                En("div", N6, [
                  (Zt(!0), ph(A6, null, T6(C.value, (ft) => (Zt(), Xn(uD, {
                    id: ft.id,
                    key: `sub-section-${ft.id}`,
                    "sub-section": ft,
                    onBounceTranslation: x
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !vs.value && y.value ? (Zt(), Xn(JD, {
              key: 0,
              onEditTranslation: lo,
              onSelectNextSegment: ue(R),
              onSelectPreviousSegment: ue(z)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : vs.value ? (Zt(), Xn(AD, {
              key: 2,
              onEditTranslation: lo,
              onApplyTranslation: D,
              onSkipTranslation: ae,
              onSelectPreviousSegment: ue(z),
              onSelectNextSegment: ue(R)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Zt(), Xn(ZA, {
              key: 1,
              class: D6({ "mb-0": !n.value }),
              onConfigureOptions: Ve,
              onEditTranslation: lo,
              onApplyTranslation: D,
              onSkipTranslation: ae,
              onSelectPreviousSegment: ue(z),
              onRetryTranslation: Rr
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Zt(), Xn(ue(M), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Rt(() => [
            xt(ue(mt), { class: "mt-0" })
          ]),
          _: 1
        })),
        xt(dA, {
          active: t.value,
          "onUpdate:active": un[0] || (un[0] = (ft) => t.value = ft)
        }, null, 8, ["active"]),
        xt(RT, {
          modelValue: _s.value,
          "onUpdate:modelValue": un[1] || (un[1] = (ft) => _s.value = ft),
          onDiscardTranslation: H
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const O6 = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: z6
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, j6 = window.Vue.resolveComponent, H6 = window.Vue.createVNode, G6 = window.Vue.normalizeClass, q6 = window.Vue.openBlock, W6 = window.Vue.createElementBlock;
function X6(e, t, n, o, s, a) {
  const r = j6("sx-sentence-selector");
  return q6(), W6("main", {
    class: G6(["sx-sentence-selector-view", a.classes])
  }, [
    H6(r)
  ], 2);
}
const K6 = /* @__PURE__ */ he(O6, [["render", X6]]), Y6 = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, Q6 = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const J6 = window.Vue.resolveDirective, lr = window.Vue.withDirectives, zt = window.Vue.openBlock, Ln = window.Vue.createElementBlock, cr = window.Vue.createCommentVNode, ur = window.Vue.Transition, So = window.Vue.withCtx, Zo = window.Vue.createVNode, ua = window.Vue.createElementVNode, Yn = window.Vue.unref, Z6 = window.Vue.renderList, eP = window.Vue.Fragment, tP = window.Vue.normalizeClass, vh = window.Vue.createBlock, nP = window.Vue.toDisplayString, oP = window.Vue.createTextVNode, sP = { class: "sx-quick-tutorial" }, aP = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, iP = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, rP = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, lP = { class: "sx-quick-tutorial__illustration" }, cP = ["innerHTML"], uP = ["innerHTML"], dP = { class: "sx-quick-tutorial__step-indicator py-3" }, gP = ["onClick"], mP = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, pP = {
  key: "secondary-point-1",
  class: "ma-0"
}, hP = {
  key: "secondary-point-2",
  class: "ma-0"
}, fP = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, _h = window.Vue.ref, Sh = window.Codex.CdxButton, wP = window.Codex.CdxIcon, vP = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = _h(2), n = _h(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = fs();
    return (r, l) => {
      const c = J6("i18n");
      return zt(), Ln("section", sP, [
        Zo(Yn(M), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: So(() => [
            ua("section", aP, [
              Zo(ur, {
                name: "fade",
                mode: "out-in"
              }, {
                default: So(() => [
                  s(1) ? lr((zt(), Ln("h2", iP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? lr((zt(), Ln("h2", rP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : cr("", !0)
                ]),
                _: 1
              })
            ]),
            ua("section", lP, [
              Zo(ur, { name: "mw-ui-animation-slide-start" }, {
                default: So(() => [
                  s(1) ? (zt(), Ln("div", {
                    key: "illustration-1",
                    innerHTML: Yn(Q6)
                  }, null, 8, cP)) : s(2) ? (zt(), Ln("div", {
                    key: "illustration-2",
                    innerHTML: Yn(Y6)
                  }, null, 8, uP)) : cr("", !0)
                ]),
                _: 1
              })
            ]),
            ua("div", dP, [
              (zt(!0), Ln(eP, null, Z6(t.value, (u) => (zt(), Ln("span", {
                key: `dot-${u}`,
                class: tP(["dot mx-1", { "dot-active": s(u) }]),
                role: "button",
                onClick: (i) => n.value = u
              }, null, 10, gP))), 128))
            ]),
            ua("section", mP, [
              Zo(ur, {
                name: "fade",
                mode: "out-in"
              }, {
                default: So(() => [
                  s(1) ? lr((zt(), Ln("h3", pP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? lr((zt(), Ln("h3", hP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : cr("", !0)
                ]),
                _: 1
              })
            ]),
            ua("div", fP, [
              Zo(ur, {
                name: "fade",
                mode: "out-in"
              }, {
                default: So(() => [
                  s(1) ? (zt(), vh(Yn(Sh), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: So(() => [
                      Zo(Yn(wP), { icon: Yn(ps) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (zt(), vh(Yn(Sh), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Yn(a)
                  }, {
                    default: So(() => [
                      oP(nP(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : cr("", !0)
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const _P = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: vP
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, SP = window.Vue.resolveComponent, yP = window.Vue.createVNode, CP = window.Vue.normalizeClass, xP = window.Vue.openBlock, bP = window.Vue.createElementBlock;
function kP(e, t, n, o, s, a) {
  const r = SP("sx-quick-tutorial");
  return xP(), bP("main", {
    class: CP(["sx-quick-tutorial-view", a.classes])
  }, [
    yP(r)
  ], 2);
}
const $P = /* @__PURE__ */ he(_P, [["render", kP]]);
const VP = window.Vue.resolveDirective, yh = window.Vue.createElementVNode, EP = window.Vue.withDirectives, LP = window.Vue.unref, TP = window.Vue.withCtx, AP = window.Vue.createVNode, DP = window.Vue.openBlock, PP = window.Vue.createElementBlock, BP = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, FP = { class: "sx-editor__original-content-panel__header mb-2" }, NP = ["lang", "dir", "innerHTML"], Ch = window.Vue.ref, MP = window.Vue.onMounted, UP = {
  __name: "SXEditorOriginalContent",
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
    const t = e, n = (r, l) => {
      const c = r.getElementsByTagName("a");
      for (const u of c)
        u.href = Z.getPageUrl(l, u.title), u.target = "_blank";
    }, o = Ch(null), s = Ch(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return MP(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const c = VP("i18n");
      return DP(), PP("section", BP, [
        EP(yh("h5", FP, null, 512), [
          [c, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        AP(LP(n1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: TP(() => [
            yh("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, NP)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, IP = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const RP = window.Vue.unref, da = window.Vue.createElementVNode, xh = window.Vue.resolveDirective, Jc = window.Vue.withDirectives, zP = window.Vue.normalizeClass, OP = window.Vue.openBlock, jP = window.Vue.createElementBlock, HP = window.Vue.createCommentVNode, GP = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, qP = { class: "sx-editor__feedback-overlay-content px-4" }, WP = ["innerHTML"], XP = { class: "sx-editor__feedback-overlay-content__title" }, KP = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, Zc = window.Vue.computed, YP = {
  __name: "EditCompleteFeedback",
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
    const t = e, { targetLanguageURLParameter: n } = F(), o = Zc(
      () => sn.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = Zc(() => {
      const r = sn.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = Zc(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, l) => {
      const c = xh("i18n"), u = xh("i18n-html");
      return e.showFeedback ? (OP(), jP("div", GP, [
        da("div", qP, [
          da("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: RP(IP)
          }, null, 8, WP),
          Jc(da("h2", XP, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Jc(da("p", KP, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Jc(da("p", {
            class: zP(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [u, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : HP("", !0);
    };
  }
}, QP = window.Vuex.useStore, JP = () => {
  const e = QP(), t = fd(), { selectNextTranslationUnit: n } = ws(), {
    isSectionTitleSelected: o,
    sourceSection: s,
    selectedContentTranslationUnit: a
  } = oe(), { getCurrentTitleByLanguage: r } = cn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: c
  } = F(), { currentMTProvider: u } = Fe(e);
  return (i) => b(void 0, null, function* () {
    if (!o.value) {
      const d = document.createElement("div");
      d.innerHTML = i, d.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = d.innerHTML;
    }
    a.value instanceof gt && (i = (yield Kw(
      i,
      r(c.value, l.value),
      c.value
    )) || i), s.value.setTranslationForSelectedTranslationUnit(
      i,
      u.value
    ), t(), n();
  });
};
const Je = window.Vue.unref, eu = window.Vue.openBlock, tu = window.Vue.createBlock, bh = window.Vue.createCommentVNode, kh = window.Vue.createVNode, ZP = window.Vue.createElementVNode, eB = window.Vue.withCtx, tB = { class: "sx-editor__editing-surface-container grow" }, nu = window.Vue.ref, nB = window.Vue.computed;
window.Vue.inject;
const oB = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = nu(!1), o = nt(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: c, originalContent: u, title: i } = history.state, d = nu(null), g = nu(!1), { logEditorSegmentAddEvent: m, logEditorSegmentEditEvent: p } = nv(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = F(), { isSectionTitleSelected: w, sourceSection: v } = oe(), y = nB(
      () => sn.calculateScore(
        d.value,
        c,
        f.value
      )
    ), C = JP(), S = (E) => b(this, null, function* () {
      d.value = E, g.value = !0;
      const L = new Promise((k) => setTimeout(k, 2e3));
      let N = Promise.resolve();
      r ? v.value.editedTranslation = E : N = C(E), y.value === 0 && l ? m() : y.value > 0 && p(), yield Promise.all([L, N]), g.value = !1, a();
    });
    return r ? mw.cx.eventlogging.stats.publishEditorStepAccess() : mw.cx.eventlogging.stats.editingStepAccess(!0), (E, L) => (eu(), tu(Je(M), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: eB(() => [
        Je(u) ? (eu(), tu(UP, {
          key: 0,
          language: Je(h),
          dir: Je(O.getDir)(Je(h)),
          "original-content": Je(u)
        }, null, 8, ["language", "dir", "original-content"])) : bh("", !0),
        n.value ? bh("", !0) : (eu(), tu(Je(mt), { key: 1 })),
        ZP("div", tB, [
          kh(YP, {
            "edited-translation": d.value,
            "show-feedback": g.value,
            "proposed-translation": Je(c)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          kh(w4, {
            content: Je(c),
            language: Je(f),
            dir: Je(O.getDir)(Je(f)),
            title: Je(i),
            "use-text": !!Je(w),
            onReady: s,
            onClose: a,
            onEditCompleted: S
          }, null, 8, ["content", "language", "dir", "title", "use-text"])
        ])
      ]),
      _: 1
    }));
  }
};
const sB = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: oB
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
}, aB = window.Vue.resolveComponent, iB = window.Vue.createVNode, rB = window.Vue.normalizeClass, lB = window.Vue.openBlock, cB = window.Vue.createElementBlock;
function uB(e, t, n, o, s, a) {
  const r = aB("sx-editor");
  return lB(), cB("main", {
    class: rB(["sx-editor-view", a.classes])
  }, [
    iB(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const dB = /* @__PURE__ */ he(sB, [["render", uB]]);
const en = window.Vue.unref, yo = window.Vue.createVNode, ga = window.Vue.withCtx, gB = window.Vue.resolveDirective, mB = window.Vue.withDirectives, pB = window.Vue.openBlock, hB = window.Vue.createBlock, $h = window.Codex.CdxButton, Vh = window.Codex.CdxIcon, fB = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = nt(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = gB("i18n");
      return pB(), hB(en(M), { class: "ma-0 sx-publisher__header" }, {
        default: ga(() => [
          yo(en(V), {
            shrink: "",
            class: "me-2"
          }, {
            default: ga(() => [
              yo(en($h), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: ga(() => [
                  yo(en(Vh), { icon: en(ms) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          mB(yo(en(V), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          yo(en(V), { shrink: "" }, {
            default: ga(() => [
              yo(en($h), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: ga(() => [
                  yo(en(Vh), { icon: en(CC) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["disabled", "aria-label"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}, wB = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, vB = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Eh = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const ou = window.Vue.createElementVNode, Lh = window.Vue.toDisplayString, su = window.Vue.unref, au = window.Vue.withCtx, Th = window.Vue.createVNode, _B = window.Vue.openBlock, SB = window.Vue.createBlock, yB = window.Vue.createCommentVNode, CB = ["innerHTML"], xB = ["textContent"], bB = ["textContent"], iu = window.Vue.computed, kB = {
  __name: "SXPublisherAnimationDialog",
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
  setup(e) {
    const t = fe(), n = e, o = {
      pending: {
        svg: wB,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: vB,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Eh,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Eh,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = iu(() => o[n.status].svg), a = iu(() => o[n.status].title), r = iu(() => o[n.status].subtitle);
    return (l, c) => e.active ? (_B(), SB(su(Vt), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: au(() => [
        Th(su(M), { class: "ma-4" }, {
          default: au(() => [
            Th(su(V), null, {
              default: au(() => [
                ou("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, CB),
                ou("h2", {
                  textContent: Lh(a.value)
                }, null, 8, xB),
                ou("p", {
                  class: "ma-0",
                  textContent: Lh(r.value)
                }, null, 8, bB)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : yB("", !0);
  }
};
const ut = window.Vue.unref, Ot = window.Vue.createVNode, Tn = window.Vue.withCtx, $B = window.Vue.resolveDirective, VB = window.Vue.withDirectives, Ah = window.Vue.toDisplayString, EB = window.Vue.createTextVNode, ru = window.Vue.openBlock, Dh = window.Vue.createElementBlock, LB = window.Vue.createCommentVNode, av = window.Vue.createElementVNode, TB = window.Vue.createBlock, AB = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, DB = ["src"], PB = ["textContent"], BB = /* @__PURE__ */ av("p", { class: "mt-0" }, null, -1), FB = window.Vue.computed, NB = window.Vue.inject, MB = window.Vue.ref, Ph = window.Codex.CdxButton, UB = window.Codex.CdxIcon, IB = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: ow,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = MB(""), s = () => n("close"), a = () => n("publish", o.value), r = NB("breakpoints"), l = FB(() => r.value.mobile);
    return (c, u) => {
      const i = $B("i18n");
      return e.active && e.captchaDetails ? (ru(), TB(ut(Vt), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: Tn(() => [
          Ot(ut(M), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: Tn(() => [
              Ot(ut(V), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: Tn(() => [
                  Ot(ut(Ph), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": c.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: Tn(() => [
                      Ot(ut(UB), { icon: ut(ms) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              VB(Ot(ut(V), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Ot(ut(V), {
                shrink: "",
                class: "justify-center"
              }, {
                default: Tn(() => [
                  Ot(ut(Ph), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: Tn(() => [
                      EB(Ah(c.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Ot(ut(yr))
        ]),
        default: Tn(() => [
          av("div", AB, [
            e.captchaDetails.type === "image" ? (ru(), Dh("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, DB)) : (ru(), Dh("p", {
              key: 1,
              textContent: Ah(e.captchaDetails.question)
            }, null, 8, PB)),
            BB,
            Ot(ut(M), { class: "ma-0" }, {
              default: Tn(() => [
                Ot(ut(V), null, {
                  default: Tn(() => [
                    Ot(ut(xu), {
                      value: o.value,
                      "onUpdate:value": u[0] || (u[0] = (d) => o.value = d),
                      class: "pa-1"
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["fullscreen"])) : LB("", !0);
    };
  }
};
const Qn = window.Vue.unref, dr = window.Vue.createVNode, es = window.Vue.withCtx, ts = window.Vue.createElementVNode, RB = window.Vue.resolveDirective, zB = window.Vue.withDirectives, OB = window.Vue.renderList, jB = window.Vue.Fragment, lu = window.Vue.openBlock, HB = window.Vue.createElementBlock, Bh = window.Vue.toDisplayString, Fh = window.Vue.createTextVNode, GB = window.Vue.isRef, qB = window.Vue.normalizeClass, Nh = window.Vue.createBlock, WB = { class: "mw-ui-dialog__header" }, XB = { class: "row ma-0 px-4 py-3" }, KB = { class: "col shrink justify-center" }, YB = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, QB = { class: "mb-0" }, JB = { class: "pa-4" }, ZB = window.Codex.CdxField, e9 = window.Codex.CdxRadio, t9 = window.Vuex.useStore, gr = window.Vue.computed, n9 = window.Codex.CdxButton, o9 = window.Codex.CdxIcon, s9 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = t9(), { target: s, PUBLISHING_TARGETS: a } = Tt(), r = gr(() => o.state.translator.isAnon), l = fe(), { sourceSection: c } = oe(), { isCurrentSectionPresent: u, isPresentLeadSection: i } = ht(), d = gr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), g = gr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), m = gr(() => {
      const h = [];
      return i.value || h.push({
        label: d.value,
        description: g.value,
        value: a.NEW_SECTION,
        disabled: !1
      }), h.push({
        label: l.i18n("cx-sx-publisher-sandbox-option-label"),
        description: l.i18n("cx-sx-publisher-sandbox-option-details"),
        value: a.SANDBOX,
        disabled: r.value
      }), u.value && (h.push({
        label: l.i18n("cx-sx-publisher-expand-option-label"),
        description: l.i18n("cx-sx-publisher-expand-option-details"),
        value: a.EXPAND,
        disabled: !1
      }), h.push({
        label: l.i18n("cx-sx-publisher-replace-option-label"),
        description: l.i18n("cx-sx-publisher-replace-option-details"),
        value: a.REPLACE,
        disabled: !1
      })), h;
    }), p = () => n("update:active", !1);
    return (h, f) => {
      const w = RB("i18n");
      return lu(), Nh(Qn(Vt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: h.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: f[1] || (f[1] = (v) => h.$emit("update:active", v)),
        onClose: p
      }, {
        header: es(() => [
          ts("div", WB, [
            ts("div", XB, [
              ts("div", KB, [
                dr(Qn(n9), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": h.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: es(() => [
                    dr(Qn(o9), { icon: Qn(Gf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              ts("div", YB, [
                zB(ts("h4", QB, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            dr(Qn(yr))
          ])
        ]),
        default: es(() => [
          ts("div", JB, [
            dr(Qn(ZB), { "is-fieldset": "" }, {
              default: es(() => [
                (lu(!0), HB(jB, null, OB(m.value, (v, y) => (lu(), Nh(Qn(e9), {
                  key: "publish-options-radio-" + v.value,
                  modelValue: Qn(s),
                  "onUpdate:modelValue": [
                    f[0] || (f[0] = (C) => GB(s) ? s.value = C : null),
                    p
                  ],
                  class: qB(y < m.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": v.value,
                  disabled: v.disabled,
                  name: "publish-options"
                }, {
                  description: es(() => [
                    Fh(Bh(v.description), 1)
                  ]),
                  default: es(() => [
                    Fh(Bh(v.label) + " ", 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "class", "input-value", "disabled"]))), 128))
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["value", "title"]);
    };
  }
};
const jt = window.Vue.unref, Mh = window.Vue.toDisplayString, Uh = window.Vue.createElementVNode, a9 = window.Vue.resolveDirective, ns = window.Vue.createVNode, i9 = window.Vue.withDirectives, ma = window.Vue.withCtx, cu = window.Vue.openBlock, Ih = window.Vue.createBlock, Rh = window.Vue.createCommentVNode, r9 = window.Vue.Fragment, l9 = window.Vue.createElementBlock, c9 = window.Vue.normalizeClass, u9 = ["textContent"], d9 = ["textContent"], os = window.Vue.computed, zh = window.Vue.ref, g9 = window.Vue.watch, Oh = window.Codex.CdxButton, jh = window.Codex.CdxIcon, m9 = window.Codex.CdxMessage, p9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = zh(0), o = zh(null);
    g9(o, () => {
      var p;
      const m = (p = o.value) == null ? void 0 : p.$el;
      if (m instanceof HTMLElement) {
        const h = m.querySelector("a");
        h && h.setAttribute("target", "_blank");
      }
    });
    const s = os(
      () => {
        var m;
        return (m = t.publishFeedbackMessages) == null ? void 0 : m[n.value];
      }
    ), a = os(() => {
      var m;
      return ((m = s.value) == null ? void 0 : m.status) || "notice";
    }), r = os(() => a.value === "notice"), l = os(
      () => `sx-publisher__review-info--${a.value}`
    ), c = fe(), u = os(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.text;
    }), i = os(() => {
      var m;
      return r.value ? c.i18n("cx-sx-publisher-review-info") : ((m = s.value) == null ? void 0 : m.title) || c.i18n("cx-sx-publisher-review-info-error");
    }), d = () => {
      const m = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + m) % m;
    }, g = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (m, p) => {
      const h = a9("i18n-html");
      return cu(), Ih(jt(m9), {
        type: a.value,
        class: c9(["sx-publisher__review-info", l.value]),
        icon: r.value ? jt(kC) : null
      }, {
        default: ma(() => [
          Uh("h5", {
            textContent: Mh(i.value)
          }, null, 8, u9),
          r.value ? Rh("", !0) : (cu(), l9(r9, { key: 0 }, [
            Uh("p", {
              textContent: Mh(u.value)
            }, null, 8, d9),
            ns(jt(M), {
              justify: "between",
              class: "ma-0"
            }, {
              default: ma(() => [
                i9(ns(jt(V), {
                  ref_key: "learnMoreContainer",
                  ref: o,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (cu(), Ih(jt(V), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: ma(() => [
                    ns(jt(Oh), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: d
                    }, {
                      default: ma(() => [
                        ns(jt(jh), { icon: jt(nd) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    ns(jt(Oh), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: ma(() => [
                        ns(jt(jh), { icon: jt(ps) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })) : Rh("", !0)
              ]),
              _: 1
            })
          ], 64))
        ]),
        _: 1
      }, 8, ["type", "class", "icon"]);
    };
  }
}, h9 = (e) => {
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
}, f9 = window.Vuex.useStore, w9 = window.Vue.computed, v9 = () => {
  const e = f9(), { currentTranslation: t } = Xt(), { currentMTProvider: n } = Fe(e), { currentTargetPageTitle: o } = ot(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = F(), { sourceSection: c } = oe(), u = Lt(), i = w9(() => {
    const p = {
      translation_source_language: s.value,
      translation_target_language: a.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L294)
      // translation_source_title:
      //   The title of the source article of the current translation. Applies only
      //   to events which relate to a specific translation or suggestion: all
      //   `editor_` and `publish_` events and some `dashboard_` events (e.g.
      //   `dashboard_start_translation`, `dashboard_delete_translation`)
      translation_source_title: r.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L301)
      // translation_target_exists:
      //   Whether the target article or section already exists. Applies only to
      //   events which relate to a specific translation or suggestion: all `editor_`
      //   and `publish_` events and some `dashboard_` events (e.g. `dashboard_start_translation`,
      //   `dashboard_delete_translation`). In section translation, if the user discards the mapping
      //   to an existing target section, the value should change to false in future events.
      translation_target_exists: !!o.value
    };
    if (l.value ? (p.translation_source_section = l.value, p.translation_type = "section") : p.translation_type = "article", t.value) {
      p.translation_id = t.value.translationId, p.translation_target_title = t.value.targetTitle;
      const h = t.value.targetSectionTitle;
      h && (p.translation_target_section = h);
    } else
      o.value && (p.translation_target_title = o.value);
    return n.value && (p.translation_provider = ce.getProviderForInstrumentation(n.value)), p.human_modification_rate = sn.getMTScoreForPageSection(
      c.value,
      a.value
    ) / 100, p.human_modification_threshold = sn.getMtModificationThreshold(), p;
  });
  return {
    logPublishAttemptEvent: () => u(me({
      event_type: "publish_attempt"
    }, i.value)),
    logPublishSuccessEvent: (p, h) => {
      u(me({
        event_type: "publish_success",
        published_page_id: p,
        published_revision_id: h
      }, i.value)), mw.cx.eventlogging.stats.published(!0);
    },
    logPublishFailureEvent: () => u(me({
      event_type: "publish_failure"
    }, i.value))
  };
}, _9 = window.Vue.computed, Hh = window.Vue.ref, S9 = window.Vuex.useStore, y9 = () => {
  const e = S9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = F(), { sourceSection: s } = oe(), { targetPageTitleForPublishing: a } = Ma(), r = ev(), { isPresentLeadSection: l } = ht(), { sectionSuggestion: c } = Le(), u = _9(
    () => {
      var S, E;
      return l.value ? no.LEAD_SECTION_DUMMY_TITLE : (E = c.value) == null ? void 0 : E.presentSections[(S = s.value) == null ? void 0 : S.sourceSectionTitleForPublishing];
    }
  ), { target: i, PUBLISHING_TARGETS: d } = Tt(), g = Hh(!1), m = Hh("pending"), p = () => g.value = !1, h = fd(), {
    logPublishAttemptEvent: f,
    logPublishSuccessEvent: w,
    logPublishFailureEvent: v
  } = v9(), y = (S, E) => b(void 0, null, function* () {
    f();
    const L = yield h();
    if (L instanceof so)
      return v(), { publishFeedbackMessage: L, targetUrl: null };
    const N = L, k = a.value, P = {
      html: h9(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: k,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: r.value,
      publishTarget: i.value,
      sectionTranslationId: N
    };
    u.value && (P.existingSectionTitle = u.value), S && (P.captchaId = S, P.captchaWord = E);
    const U = yield $t.publishTranslation(
      P
    );
    return U.publishFeedbackMessage === null ? w(U.pageId, U.revisionId) : v(), U;
  });
  return {
    closePublishDialog: p,
    doPublish: (S = null, E = null) => b(void 0, null, function* () {
      m.value = "pending", g.value = !0;
      let L;
      try {
        L = yield y(
          E == null ? void 0 : E.id,
          S
        );
      } catch (N) {
        if (N instanceof us)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw mw.cx.eventlogging.stats.publishFailed(!0), N;
      }
      return L;
    }),
    isPublishDialogActive: g,
    publishStatus: m
  };
}, C9 = window.Vue.computed, x9 = () => {
  const e = nt(), { sourceSection: t } = oe(), { getCurrentTitleByLanguage: n } = cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = F(), a = C9(
    () => t.value.subSections.reduce(
      (r, l) => l.isTranslated ? `${r}<section rel="cx:Section" id="${l.targetSectionId}">${l.translatedContent}</section>` : r,
      ""
    )
  );
  return () => e.push({
    name: "sx-editor",
    state: {
      content: a.value,
      title: n(
        s.value,
        o.value
      ),
      isFinalEdit: !0
    }
  });
}, b9 = () => {
  const { targetLanguageURLParameter: e } = F(), { sourceSection: t } = oe();
  return () => {
    const n = sn.getMTScoreForPageSection(
      t.value,
      e.value
    ), o = sn.getScoreStatus(n);
    if (o === "success")
      return null;
    const s = 100 - n, a = o === "failure" ? "error" : "warning";
    let r, l;
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new so({
      title: r,
      text: l,
      status: a,
      type: "mt"
    });
  };
}, k9 = window.Vue.ref, $9 = window.Vue.computed, V9 = () => {
  const e = b9(), { target: t, PUBLISHING_TARGETS: n } = Tt(), { targetPageTitleForPublishing: o } = Ma(), s = k9([]), a = $9(
    () => s.value.some((u) => u.isError)
  ), r = (u) => {
    s.value.push(u), s.value.sort((i, d) => +d.isError - +i.isError);
  };
  return {
    addPublishFeedbackMessage: r,
    clearPublishFeedbackMessages: () => {
      s.value = [];
    },
    publishFeedbackMessages: s,
    isPublishingDisabled: a,
    initializePublishFeedbackMessages: () => {
      if (!ov() && t.value !== n.SANDBOX) {
        const i = new so({
          text: mw.message("cx-publish-permission-error").text(),
          title: mw.message("cx-publish-permission-error-title").text(),
          type: "generic",
          status: "error"
        });
        r(i);
      }
      const u = e();
      u && r(u), mw.Title.newFromText(o.value) || r(
        new so({
          text: mw.message("cx-tools-linter-invalid-character-message").text(),
          title: mw.message("cx-tools-linter-invalid-character").text(),
          type: "generic",
          status: "error"
        })
      );
    }
  };
}, E9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = Tt(), { currentSourcePage: n } = ot(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = F(), { sourceSection: a } = oe(), { targetPageTitleForPublishing: r } = Ma();
  return (l) => b(void 0, null, function* () {
    const c = r.value, u = n.value.title, i = new mw.Title(u), d = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== d.user)
      try {
        yield Lr.addWikibaseLink(
          o.value,
          s.value,
          u,
          c
        );
      } catch (g) {
        mw.log.error("Error while adding wikibase link", g);
      }
    if (!l) {
      const g = "[CX] Target URL is empty after successful publishing";
      throw mw.log.error(g), new Error(g);
    }
    location.href = l;
  });
}, Gh = window.Vue.ref, L9 = () => {
  const e = Gh(!1), t = Gh(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const de = window.Vue.unref, qe = window.Vue.createVNode, T9 = window.Vue.resolveDirective, uu = window.Vue.withDirectives, pa = window.Vue.openBlock, ha = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const qh = window.Vue.toDisplayString, A9 = window.Vue.createTextVNode, ss = window.Vue.createElementVNode, as = window.Vue.withCtx, Wh = window.Vue.normalizeClass, D9 = { class: "sx-publisher" }, P9 = {
  key: 0,
  class: "mb-2"
}, B9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, F9 = { key: 0 }, N9 = { key: 1 }, M9 = ["href"], U9 = ["innerHTML"], I9 = { class: "sx-publisher__section-preview pa-5" }, R9 = ["innerHTML"], mr = window.Vue.computed, z9 = window.Vue.onMounted, O9 = window.Vue.ref, j9 = window.Vue.watch, Xh = window.Codex.CdxButton, du = window.Codex.CdxIcon, H9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = oe(), { sectionSuggestion: n } = Le(), { isCurrentSectionPresent: o, isPresentLeadSection: s } = ht(), {
      targetLanguageURLParameter: a,
      sectionURLParameter: r
    } = F(), l = fe(), c = mr(
      () => {
        var B;
        return s.value ? l.i18n("cx-sx-present-lead-section-label") : (B = t.value) == null ? void 0 : B.title;
      }
    ), { target: u, PUBLISHING_TARGETS: i } = Tt(), d = mr(() => u.value === i.SANDBOX ? l.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : u.value === i.EXPAND ? l.i18n(
      "cx-sx-publisher-publish-panel-expand-section-result"
    ) : u.value === i.REPLACE ? l.i18n(
      "cx-sx-publisher-publish-panel-replace-section-result"
    ) : t.value.isLeadSection ? l.i18n("cx-sx-publisher-publish-panel-lead-section-result") : l.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: g,
      captchaDialogOn: m,
      handleCaptchaError: p,
      onCaptchaDialogClose: h
    } = L9(), {
      publishFeedbackMessages: f,
      isPublishingDisabled: w,
      addPublishFeedbackMessage: v,
      clearPublishFeedbackMessages: y,
      initializePublishFeedbackMessages: C
    } = V9(), S = E9(), { doPublish: E, isPublishDialogActive: L, publishStatus: N, closePublishDialog: k } = y9(), P = (B = null) => b(this, null, function* () {
      if (w.value)
        return;
      const I = yield E(B, g.value);
      if (!I)
        return;
      const { publishFeedbackMessage: K, targetUrl: Q } = I;
      if (p(K)) {
        k();
        return;
      } else
        K && v(K);
      N.value = w.value ? "failure" : "success", setTimeout(() => {
        if (w.value) {
          k();
          return;
        }
        S(Q);
      }, 1e3);
    });
    z9(() => {
      C(), mw.cx.eventlogging.stats.publishStepAccess();
    });
    const U = x9(), X = O9(!1), se = () => X.value = !0;
    j9(X, (B) => {
      B || (y(), C());
    });
    const ie = mr(() => {
      var B, I;
      return s.value ? l.i18n("cx-sx-present-lead-section-label") : (I = (B = n.value) == null ? void 0 : B.presentSections) == null ? void 0 : I[r.value];
    }), ne = mr(() => {
      var K;
      const B = Z.getPageUrl(
        a.value,
        (K = n.value) == null ? void 0 : K.targetTitle
      ), I = s.value ? "" : (ie.value || "").replace(/ /g, "_");
      return `${B}#${I}`;
    });
    return (B, I) => {
      const K = T9("i18n");
      return pa(), ha("section", D9, [
        qe(fB, {
          "is-publishing-disabled": de(w),
          onPublishTranslation: P
        }, null, 8, ["is-publishing-disabled"]),
        ss("div", {
          class: Wh(["sx-publisher__publish-panel", de(o) ? "py-4" : "pa-4"])
        }, [
          de(o) ? (pa(), ha("div", B9, [
            de(s) ? uu((pa(), ha("h5", F9, null, 512)), [
              [K, void 0, "cx-sx-publisher-publish-panel-existing-lead-section-notice"]
            ]) : uu((pa(), ha("h5", N9, null, 512)), [
              [K, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            ss("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: ne.value,
              target: "_blank"
            }, [
              A9(qh(ie.value) + " ", 1),
              qe(de(du), { icon: de(Ba) }, null, 8, ["icon"])
            ], 8, M9)
          ])) : uu((pa(), ha("h5", P9, null, 512)), [
            [K, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          ss("div", {
            class: Wh({ "px-4 mt-4": de(o) })
          }, [
            ss("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: d.value
            }, null, 8, U9),
            qe(de(M), {
              justify: "end",
              class: "ma-0"
            }, {
              default: as(() => [
                qe(de(V), { shrink: "" }, {
                  default: as(() => [
                    qe(de(Xh), {
                      weight: "quiet",
                      "aria-label": B.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: se
                    }, {
                      default: as(() => [
                        qe(de(du), { icon: de(FC) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ], 2)
        ], 2),
        qe(p9, { "publish-feedback-messages": de(f) }, null, 8, ["publish-feedback-messages"]),
        ss("section", I9, [
          qe(de(M), { class: "pb-5 ma-0" }, {
            default: as(() => [
              qe(de(V), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: qh(c.value)
              }, null, 8, ["textContent"]),
              qe(de(V), { shrink: "" }, {
                default: as(() => [
                  qe(de(Xh), {
                    weight: "quiet",
                    "aria-label": B.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: de(U)
                  }, {
                    default: as(() => [
                      qe(de(du), { icon: de(ed) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          ss("div", {
            innerHTML: de(t).translationHtml
          }, null, 8, R9)
        ]),
        qe(s9, {
          active: X.value,
          "onUpdate:active": I[0] || (I[0] = (Q) => X.value = Q)
        }, null, 8, ["active"]),
        qe(IB, {
          active: de(m),
          "captcha-details": de(g),
          onClose: de(h),
          onPublish: I[1] || (I[1] = (Q) => P(Q))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        qe(kB, {
          active: de(L),
          status: de(N)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const G9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: H9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, q9 = window.Vue.resolveComponent, W9 = window.Vue.createVNode, X9 = window.Vue.normalizeClass, K9 = window.Vue.openBlock, Y9 = window.Vue.createElementBlock;
function Q9(e, t, n, o, s, a) {
  const r = q9("sx-publisher");
  return K9(), Y9("main", {
    class: X9(["sx-publisher-view", a.classes])
  }, [
    W9(r)
  ], 2);
}
const J9 = /* @__PURE__ */ he(G9, [["render", Q9]]);
const Ht = window.Vue.unref, Jn = window.Vue.createVNode, Co = window.Vue.withCtx, gu = window.Vue.toDisplayString, mu = window.Vue.createElementVNode, Kh = window.Vue.openBlock, Yh = window.Vue.createBlock, Z9 = window.Vue.createCommentVNode, e7 = ["textContent"], t7 = ["textContent"], n7 = ["textContent"], iv = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: ds,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (Kh(), Yh(Ht(M), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Ht(O.getDir)(e.suggestion.language)
    }, {
      default: Co(() => [
        Jn(Ht(V), { shrink: "" }, {
          default: Co(() => [
            Jn(Ht(Uu), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Jn(Ht(V), { class: "ms-4" }, {
          default: Co(() => [
            Jn(Ht(M), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: Co(() => [
                Jn(Ht(V), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Co(() => [
                    mu("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: gu(e.suggestion.title)
                    }, null, 8, e7)
                  ]),
                  _: 1
                }),
                Jn(Ht(V), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Co(() => [
                    mu("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: gu(e.suggestion.description)
                    }, null, 8, t7)
                  ]),
                  _: 1
                }),
                Jn(Ht(V), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: Co(() => [
                    e.suggestion.inFeaturedCollection ? (Kh(), Yh(Mr, {
                      key: 0,
                      class: "me-2"
                    })) : Z9("", !0),
                    Jn(Ht(et), {
                      icon: Ht(z0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    mu("small", {
                      textContent: gu((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, n7)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["lang", "dir"]));
  }
};
const Qh = window.Vue.unref, fa = window.Vue.openBlock, pu = window.Vue.createBlock, o7 = window.Vue.createCommentVNode, s7 = window.Vue.resolveDirective, a7 = window.Vue.withDirectives, Jh = window.Vue.createElementBlock, i7 = window.Vue.renderList, r7 = window.Vue.Fragment, l7 = window.Vue.normalizeClass, c7 = window.Vue.withCtx, u7 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, Zh = window.Vue.computed, d7 = window.Vue.ref, g7 = {
  __name: "SearchResultsCard",
  props: {
    searchResultsLoading: {
      type: Boolean,
      default: !1
    },
    searchResultsSlice: {
      type: Array,
      default: () => []
    },
    searchInput: {
      type: String,
      default: null
    },
    selectedItem: {
      type: [Object, String],
      required: !1,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e) {
    const { sourceLanguageURLParameter: t } = F(), n = Zh(() => O.getAutonym(t.value)), o = e, s = d7(null), a = (u) => s.value = u, r = () => s.value = null, l = (u) => {
      var i;
      return ((i = o.selectedItem) == null ? void 0 : i.title) === u.title && !s.value || s.value === u.pageId;
    }, c = Zh(() => o.searchInput);
    return (u, i) => {
      const d = s7("i18n");
      return fa(), pu(Qh(Ze), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: c7(() => [
          e.searchResultsLoading ? (fa(), pu(Qh(mt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : e.searchResultsSlice.length === 0 ? a7((fa(), Jh("p", u7, null, 512)), [
            [d, [
              c.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : o7("", !0),
          (fa(!0), Jh(r7, null, i7(e.searchResultsSlice, (g) => (fa(), pu(iv, {
            key: g.pageId,
            suggestion: g,
            class: l7({
              "sx-article-search__results-selected": l(g)
            }),
            onMouseenter: (m) => a(g.pageId),
            onMouseleave: r,
            onClick: (m) => u.$emit("suggestion-clicked", g)
          }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const ef = window.Vue.toDisplayString, m7 = window.Vue.createElementVNode, pr = window.Vue.openBlock, tf = window.Vue.createElementBlock, p7 = window.Vue.createCommentVNode, h7 = window.Vue.renderList, f7 = window.Vue.Fragment, w7 = window.Vue.normalizeClass, nf = window.Vue.createBlock, v7 = window.Vue.unref, of = window.Vue.withCtx, _7 = ["textContent"], S7 = ["textContent"], y7 = window.Vue.ref, hu = {
  __name: "ArticleSuggestionsCard",
  props: {
    cardTitle: {
      type: String,
      required: !0
    },
    cardSubtitle: {
      type: String,
      required: !1,
      default: null
    },
    suggestions: {
      type: Array,
      required: !0
    },
    selectedItem: {
      type: [Object, String],
      required: !1,
      default: null
    }
  },
  emits: ["suggestion-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = y7(null), s = (l) => o.value = l, a = () => o.value = null, r = (l) => {
      var c;
      return ((c = n.selectedItem) == null ? void 0 : c.title) === l.title && !o.value || o.value === l.pageId;
    };
    return (l, c) => (pr(), nf(v7(Ze), { class: "sx-article-search__suggestions pa-0" }, {
      header: of(() => [
        m7("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: ef(e.cardTitle)
        }, null, 8, _7),
        e.cardSubtitle ? (pr(), tf("p", {
          key: 0,
          class: "ma-0 px-4 pb-2 sx-article-search__suggestions-subtitle",
          textContent: ef(e.cardSubtitle)
        }, null, 8, S7)) : p7("", !0)
      ]),
      default: of(() => [
        (pr(!0), tf(f7, null, h7(e.suggestions, (u) => (pr(), nf(iv, {
          key: u.pageId,
          suggestion: u,
          class: w7({
            "sx-article-search__suggestions-selected": r(u)
          }),
          onMouseenter: (i) => s(u.pageId),
          onMouseleave: a,
          onClick: (i) => l.$emit("suggestion-clicked", u)
        }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, C7 = window.Vue.computed, x7 = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), sf = "other", b7 = (e) => C7((t) => {
  const o = e.value.slice(0, 3), s = {
    value: sf,
    props: {
      icon: G0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== sf);
  return x7(a, o) ? t : [...o.map((l) => ({
    value: l,
    props: {
      label: O.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), s];
}), k7 = window.Vue.computed, $7 = () => {
  const { supportedLanguageCodes: e } = Aa(), { targetLanguageURLParameter: t } = F();
  return { getSuggestedSourceLanguages: (o) => k7(() => {
    const s = (navigator.language || "").split("-")[0], a = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((l) => l.split("-")[0]), r = [
      ...o.value,
      // User's current interface language
      mw.config.get("wgUserLanguage"),
      // Current wiki's content language
      mw.config.get("wgContentLanguage"),
      s,
      ...a
    ];
    return [...new Set(r)].filter(
      (l) => l !== t.value && e.value.includes(l)
    );
  }) };
}, V7 = window.Vue.ref, E7 = () => {
  const e = V7([]), t = () => {
    try {
      const s = mw.storage.get("cxPreviousLanguages");
      s && e.value.push(...JSON.parse(s));
    } catch (s) {
    }
  }, n = () => {
    mw.storage.set(
      "cxPreviousLanguages",
      JSON.stringify(e.value)
    );
  }, o = (s) => {
    s && (e.value = [
      s,
      ...e.value.filter((a) => a !== s)
    ], n());
  };
  return t(), {
    previousLanguages: e,
    addLanguageToHistory: o
  };
}, L7 = window.Vuex.useStore, af = window.Vue.ref, fu = window.Vue.computed, rf = window.Vue.watch, T7 = (e) => {
  var p;
  const t = L7(), n = Eo(), { fetchPageSuggestionsByFeaturedCollections: o } = Ju(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = F(), { featuredCollection: r } = Wt(), { isFilteringByFeaturedCollection: l } = ro(), c = af([]), u = af(
    !((p = c.value) != null && p.name)
  ), i = () => {
    var h;
    return !l() && ((h = r.value) == null ? void 0 : h.name) && d.value.length === 0;
  }, d = fu(() => {
    var h;
    return t.getters["suggestions/getCollectionPageSuggestions"](
      s.value,
      a.value,
      (h = r.value) == null ? void 0 : h.name
    );
  }), g = fu(() => {
    var h;
    return t.getters["suggestions/getCollectionSectionSuggestions"](
      s.value,
      a.value,
      (h = r.value) == null ? void 0 : h.name
    );
  }), m = fu(() => [
    ...d.value || [],
    ...g.value || []
  ].slice(0, e));
  return rf(
    m,
    (h) => b(void 0, null, function* () {
      if (!h || h.length === 0) {
        c.value = [];
        return;
      }
      try {
        const f = h.map(
          (w) => w.sourceTitle
        );
        f.length > 0 ? (yield n(s.value, f), c.value = f.map(
          (w) => t.getters["mediawiki/getPage"](s.value, w)
        )) : c.value = [], u.value = !0;
      } catch (f) {
        mw.log.error("Error fetching featured collection pages:", f), c.value = [], u.value = !0;
      }
    }),
    { immediate: !0 }
  ), rf(
    s,
    () => b(void 0, null, function* () {
      i() && (u.value = !1, c.value = [], yield o());
    }),
    { immediate: !0 }
  ), {
    featuredCollectionPages: c,
    featuredCollectionPagesResolved: u
  };
};
const A7 = window.Vue.resolveDirective, D7 = window.Vue.createElementVNode, wu = window.Vue.withDirectives, le = window.Vue.unref, wa = window.Vue.withCtx, tn = window.Vue.createVNode, is = window.Vue.openBlock, vu = window.Vue.createBlock, P7 = window.Vue.createCommentVNode, _u = window.Vue.createElementBlock, B7 = window.Vue.Fragment, F7 = window.Vue.vShow, va = window.Vue.withModifiers, _a = window.Vue.withKeys, N7 = ["onKeydown"], M7 = { class: "mb-0" }, U7 = {
  key: 3,
  class: "sx-article-search__empty-state"
}, Sa = window.Vue.ref, I7 = window.Vue.onMounted, xo = window.Vue.computed, lf = window.Vue.watch, R7 = window.Vue.inject, z7 = window.Vuex.useStore, O7 = window.Codex.CdxButton, j7 = window.Codex.CdxIcon, H7 = window.Codex.CdxSearchInput, cf = 3, G7 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Sa(""), n = Sa(!1), o = Sa(null), s = Sa(!1), { previousLanguages: a, addLanguageToHistory: r } = E7(), l = z7(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = F(), { supportedLanguageCodes: i } = Aa(), { searchResultsLoading: d, searchResultsSlice: g } = Uw(
      c,
      t
    ), { getSuggestedSourceLanguages: m } = $7(), p = m(a), h = b7(
      p
    ), f = nt(), { fetchAllTranslations: w } = hs();
    I7(() => b(this, null, function* () {
      var x;
      w(), r(c.value), (x = o.value) == null || x.focus();
    }));
    const { featuredCollectionPages: v, featuredCollectionPagesResolved: y } = T7(cf), C = () => {
      f.push({ name: "dashboard" });
    }, S = tw(), E = (x) => {
      S(x, u.value), r(x);
    }, L = (x) => {
      if (x === "other") {
        s.value = !0;
        return;
      }
      E(x);
    };
    lf(
      c,
      () => {
        var x;
        l.dispatch("mediawiki/fetchNearbyPages"), (x = o.value) == null || x.focus();
      },
      { immediate: !0 }
    );
    const N = Lt();
    lf(t, () => {
      n.value || (n.value = !0, N({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const k = () => {
      s.value = !1;
    }, P = (x) => {
      s.value = !1, L(x);
    }, { fetchPreviousEditsInSource: U, previousEditsInSource: X } = Rf(), se = Sa([]);
    (() => U().then(() => X.value.length > 0 ? Vo.fetchPages(
      c.value,
      X.value
    ) : []).then((x) => {
      x = x.slice(0, cf), x = x.sort(
        (T, q) => X.value.indexOf(T.title) - X.value.indexOf(q.title)
      ), se.value = x;
    }))();
    const ne = xo(() => l.getters["mediawiki/getNearbyPages"]), B = R7("breakpoints"), I = xo(() => B.value.mobile), K = Na(), Q = xo(
      () => se.value && se.value.length && y.value
    ), ye = xo(
      () => ne.value && ne.value.length
    ), $e = xo(
      () => v.value && v.value.length > 0
    ), xe = xo(() => $e.value ? v.value || [] : Q.value ? se.value || [] : ye.value ? ne.value || [] : []), { next: Ne, prev: R, keyboardNavigationContainer: z, selectedItem: ae } = Fw(
      t,
      g,
      xe
    ), _ = (x) => K(
      x.title,
      c.value,
      u.value,
      D.value
    ), D = xo(() => t.value ? "search_result" : Q.value ? "suggestion_recent_edit" : ye.value ? "suggestion_nearby" : "");
    return (x, T) => {
      const q = A7("i18n");
      return is(), _u("section", {
        ref_key: "keyboardNavigationContainer",
        ref: z,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          T[6] || (T[6] = _a(va((...j) => le(Ne) && le(Ne)(...j), ["stop", "prevent"]), ["tab"])),
          T[7] || (T[7] = _a(va((...j) => le(Ne) && le(Ne)(...j), ["stop", "prevent"]), ["down"])),
          T[8] || (T[8] = _a(va((...j) => le(R) && le(R)(...j), ["stop", "prevent"]), ["up"])),
          _a(va(C, ["stop", "prevent"]), ["esc"]),
          T[9] || (T[9] = _a(va((j) => _(le(ae)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        tn(le(M), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: wa(() => [
            tn(le(V), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: wa(() => [
                wu(D7("h5", M7, null, 512), [
                  [q, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            tn(le(V), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: wa(() => [
                tn(le(O7), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": x.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: C
                }, {
                  default: wa(() => [
                    tn(le(j7), { icon: le(ms) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        tn(le(H7), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": T[0] || (T[0] = (j) => t.value = j),
          class: "sx-article-search__search-input",
          placeholder: x.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        tn(le(Ea), {
          class: "sx-article-search__language-button-group",
          items: le(h),
          active: le(c),
          onSelect: L
        }, null, 8, ["items", "active"]),
        t.value ? P7("", !0) : (is(), _u(B7, { key: 0 }, [
          $e.value ? (is(), vu(hu, {
            key: 0,
            "card-title": x.$i18n("cx-sx-article-search-community-priorities-title"),
            "card-subtitle": x.$i18n("cx-sx-article-search-community-priorities-subtitle"),
            suggestions: le(v),
            "selected-item": le(ae),
            onSuggestionClicked: T[1] || (T[1] = (j) => _(j))
          }, null, 8, ["card-title", "card-subtitle", "suggestions", "selected-item"])) : Q.value ? (is(), vu(hu, {
            key: 1,
            "card-title": x.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: se.value,
            "selected-item": le(ae),
            onSuggestionClicked: T[2] || (T[2] = (j) => _(j))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : ye.value ? (is(), vu(hu, {
            key: 2,
            "card-title": x.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: ne.value,
            onSuggestionClicked: T[3] || (T[3] = (j) => _(j))
          }, null, 8, ["card-title", "suggestions"])) : wu((is(), _u("p", U7, null, 512)), [
            [q, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        wu(tn(g7, {
          "search-input": t.value,
          "search-results-loading": le(d),
          "search-results-slice": le(g),
          "selected-item": le(ae),
          onSuggestionClicked: T[4] || (T[4] = (j) => _(j))
        }, null, 8, ["search-input", "search-results-loading", "search-results-slice", "selected-item"]), [
          [F7, !!t.value]
        ]),
        tn(le(Vt), {
          value: s.value,
          "onUpdate:value": T[5] || (T[5] = (j) => s.value = j),
          class: "sx-article-search-language-selector",
          fullscreen: I.value,
          header: I.value,
          title: x.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: k
        }, {
          default: wa(() => [
            tn(le(Nw), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: le(i),
              suggestions: le(p),
              placeholder: x.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: P,
              onClose: k
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, N7);
    };
  }
};
const q7 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: G7
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, W7 = window.Vue.resolveComponent, X7 = window.Vue.createVNode, K7 = window.Vue.normalizeClass, Y7 = window.Vue.openBlock, Q7 = window.Vue.createElementBlock;
function J7(e, t, n, o, s, a) {
  const r = W7("sx-article-search");
  return Y7(), Q7("main", {
    class: K7(["sx-article-search-view", a.classes])
  }, [
    X7(r)
  ], 2);
}
const Z7 = /* @__PURE__ */ he(q7, [["render", J7]]), eF = () => {
  const e = Na(), t = pd(), { logDashboardOpenEvent: n } = zw(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s,
    pageURLParameter: a
  } = F();
  return () => b(void 0, null, function* () {
    return t(o.value, a.value).then(
      () => n()
    ), e(
      a.value,
      o.value,
      s.value,
      "direct_preselect",
      null,
      !1
    );
  });
}, tF = window.Vuex.useStore, nF = [
  {
    path: "",
    name: "dashboard",
    component: Wm,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: Z7,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: J3,
    meta: { workflowStep: 1 },
    beforeEnter: () => {
      const {
        sourceLanguageURLParameter: e,
        targetLanguageURLParameter: t,
        pageURLParameter: n
      } = F();
      return !!(e.value && t.value && n.value);
    }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: w5,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: DT,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: $P,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: K6,
    meta: { workflowStep: 4 },
    beforeEnter: () => {
      const {
        sourceLanguageURLParameter: e,
        targetLanguageURLParameter: t,
        pageURLParameter: n
      } = F();
      return !!(e.value && t.value && n.value);
    }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: dB,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: J9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Wm,
    meta: { workflowStep: 0 }
  }
], wd = Sk({
  history: _b(),
  routes: nF
}), Su = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, oF = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
wd.beforeEach((e, t, n) => {
  const o = tF();
  if (mw.user.isAnon() || pf.assertUser().catch((i) => {
    i instanceof us && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = eF(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: c
  } = F();
  if (!!(a.value && r.value && l.value)) {
    if (oF(
      a.value,
      r.value,
      l.value
    )) {
      const d = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      Su(e.name, d, n);
    } else
      e.name === "sx-translation-confirmer" && s(), Su(e.name, "sx-translation-confirmer", n);
    return;
  }
  c(), Su(e.name, "dashboard", n);
});
wd.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
/*!
 * Plugin that captures errors from Vue code and logs them to error.contenttranslation
 *
 * Based on mediawiki/resources/src/vue/errorLogger.js
 */
const sF = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, aF = window.Vue.createApp, iF = mw.config.get("wgUserLanguage"), rF = "en", lF = mw.messages.values || {}, Lo = aF(cx);
Lo.use(wd);
Lo.use(zx);
Lo.use(p1);
Lo.use(m1);
const cF = q1({
  locale: iF,
  finalFallback: rF,
  messages: lF,
  wikilinks: !0
});
Lo.use(cF);
Lo.use(sF);
Lo.mount("#contenttranslation");
