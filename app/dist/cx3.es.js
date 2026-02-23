var vv = Object.defineProperty, _v = Object.defineProperties;
var Sv = Object.getOwnPropertyDescriptors;
var Sd = Object.getOwnPropertySymbols;
var yv = Object.prototype.hasOwnProperty, Cv = Object.prototype.propertyIsEnumerable;
var yd = (e, t, n) => t in e ? vv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, me = (e, t) => {
  for (var n in t || (t = {}))
    yv.call(t, n) && yd(e, n, t[n]);
  if (Sd)
    for (var n of Sd(t))
      Cv.call(t, n) && yd(e, n, t[n]);
  return e;
}, Ye = (e, t) => _v(e, Sv(t));
var b = (e, t, n) => new Promise((o, s) => {
  var a = (c) => {
    try {
      l(n.next(c));
    } catch (d) {
      s(d);
    }
  }, r = (c) => {
    try {
      l(n.throw(c));
    } catch (d) {
      s(d);
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
    CdxTab: d,
    CdxField: i,
    CdxRadio: u
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
    CdxTab: d,
    CdxField: i,
    CdxRadio: u
  };
}
const he = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, xv = {
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
}, bv = window.Vue.toDisplayString, Wr = window.Vue.openBlock, Xr = window.Vue.createElementBlock, kv = window.Vue.createCommentVNode, Cd = window.Vue.createElementVNode, $v = window.Vue.normalizeClass, Vv = ["width", "height", "aria-labelledby"], Ev = ["id"], Lv = ["fill"], Tv = ["d"];
function Av(e, t, n, o, s, a) {
  return Wr(), Xr("span", {
    class: $v(["mw-ui-icon notranslate", a.classes])
  }, [
    (Wr(), Xr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (Wr(), Xr("title", {
        key: 0,
        id: n.iconName
      }, bv(n.iconName), 9, Ev)) : kv("", !0),
      Cd("g", { fill: n.iconColor }, [
        Cd("path", { d: a.iconImagePath }, null, 8, Tv)
      ], 8, Lv)
    ], 8, Vv))
  ], 2);
}
const et = /* @__PURE__ */ he(xv, [["render", Av]]);
const Dv = {
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
}, Pv = window.Vue.renderSlot, Bv = window.Vue.resolveComponent, xd = window.Vue.normalizeClass, ja = window.Vue.openBlock, Kr = window.Vue.createBlock, Yr = window.Vue.createCommentVNode, Fv = window.Vue.toDisplayString, Nv = window.Vue.createElementBlock, Mv = window.Vue.toHandlerKey, Uv = window.Vue.withModifiers, Iv = window.Vue.mergeProps, Rv = window.Vue.createElementVNode, zv = window.Vue.resolveDynamicComponent, Ov = window.Vue.withCtx, jv = { class: "mw-ui-button__content" }, Hv = ["textContent"];
function Gv(e, t, n, o, s, a) {
  const r = Bv("mw-icon");
  return ja(), Kr(zv(a.component), {
    class: xd(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Ov(() => [
      Pv(e.$slots, "default", {}, () => [
        Rv("span", jv, [
          n.icon ? (ja(), Kr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: xd(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Yr("", !0),
          !a.isIcon && n.label ? (ja(), Nv("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Fv(n.label)
          }, null, 8, Hv)) : Yr("", !0),
          n.indicator ? (ja(), Kr(r, Iv({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Mv(a.indicatorClickEvent)]: t[0] || (t[0] = Uv((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Yr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Ke = /* @__PURE__ */ he(Dv, [["render", Gv]]);
const qv = {
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
}, Wv = window.Vue.renderList, Xv = window.Vue.Fragment, Qr = window.Vue.openBlock, bd = window.Vue.createElementBlock, Kv = window.Vue.resolveComponent, Yv = window.Vue.withModifiers, Qv = window.Vue.mergeProps, Jv = window.Vue.createBlock, Zv = { class: "row mw-ui-button-group ma-0 pa-0" };
function e0(e, t, n, o, s, a) {
  const r = Kv("mw-button");
  return Qr(), bd("div", Zv, [
    (Qr(!0), bd(Xv, null, Wv(n.items, (l) => (Qr(), Jv(r, Qv({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Yv((c) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Ea = /* @__PURE__ */ he(qv, [["render", e0]]);
const t0 = {
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
}, kd = window.Vue.renderSlot, n0 = window.Vue.toDisplayString, $d = window.Vue.openBlock, Vd = window.Vue.createElementBlock, o0 = window.Vue.createCommentVNode, s0 = window.Vue.createElementVNode, a0 = { class: "mw-ui-card" }, i0 = ["textContent"], r0 = { class: "mw-ui-card__content" };
function l0(e, t, n, o, s, a) {
  return $d(), Vd("div", a0, [
    kd(e.$slots, "header", {}, () => [
      n.title ? ($d(), Vd("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: n0(n.title)
      }, null, 8, i0)) : o0("", !0)
    ]),
    s0("div", r0, [
      kd(e.$slots, "default")
    ])
  ]);
}
const Ze = /* @__PURE__ */ he(t0, [["render", l0]]);
const c0 = {}, u0 = window.Vue.openBlock, d0 = window.Vue.createElementBlock, g0 = { class: "mw-ui-divider row" };
function m0(e, t) {
  return u0(), d0("div", g0);
}
const yr = /* @__PURE__ */ he(c0, [["render", m0]]);
const p0 = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, h0 = window.Vue.renderSlot, f0 = window.Vue.resolveDynamicComponent, w0 = window.Vue.withCtx, v0 = window.Vue.openBlock, _0 = window.Vue.createBlock;
function S0(e, t, n, o, s, a) {
  return v0(), _0(f0(n.tag), { class: "mw-grid container" }, {
    default: w0(() => [
      h0(e.$slots, "default")
    ]),
    _: 3
  });
}
const y0 = /* @__PURE__ */ he(p0, [["render", S0]]), C0 = {
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
}, x0 = window.Vue.renderSlot, b0 = window.Vue.resolveDynamicComponent, k0 = window.Vue.normalizeClass, $0 = window.Vue.withCtx, V0 = window.Vue.openBlock, E0 = window.Vue.createBlock;
function L0(e, t, n, o, s, a) {
  return V0(), E0(b0(n.tag), {
    class: k0(a.classes)
  }, {
    default: $0(() => [
      x0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const I = /* @__PURE__ */ he(C0, [["render", L0]]), yu = ["mobile", "tablet", "desktop", "desktop-wide"], T0 = yu.reduce(
  (e, t) => Ye(me({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), A0 = {
  name: "MwCol",
  props: Ye(me({}, T0), {
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
}, D0 = window.Vue.renderSlot, P0 = window.Vue.resolveDynamicComponent, B0 = window.Vue.normalizeClass, F0 = window.Vue.withCtx, N0 = window.Vue.openBlock, M0 = window.Vue.createBlock;
function U0(e, t, n, o, s, a) {
  return N0(), M0(P0(n.tag), {
    class: B0(a.classes)
  }, {
    default: F0(() => [
      D0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ he(A0, [["render", U0]]), I0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", R0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Cr = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", z0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, O0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", wf = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", j0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", H0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", xr = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", G0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", q0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", W0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Ed = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", X0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", vf = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", K0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", Y0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Q0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", J0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Z0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Cu = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, e_ = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, t_ = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, _f = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", n_ = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const Jr = window.Vue.computed, o_ = window.Vue.watch, s_ = window.Vue.ref, a_ = window.Vue.nextTick, i_ = {
  name: "MwDialog",
  components: {
    MwButton: Ke,
    MwRow: I,
    MwCol: k,
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
    const n = s_(null), o = Jr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Jr(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    o_(
      () => e.value,
      (c) => {
        c ? (r(), a_(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = Jr(() => ({
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
}, Ld = window.Vue.normalizeClass, Zr = window.Vue.createElementVNode, el = window.Vue.renderSlot, Ha = window.Vue.resolveComponent, ys = window.Vue.createVNode, tl = window.Vue.withCtx, Td = window.Vue.createCommentVNode, r_ = window.Vue.withKeys, Ad = window.Vue.openBlock, l_ = window.Vue.createElementBlock, c_ = window.Vue.Transition, u_ = window.Vue.normalizeStyle, d_ = window.Vue.createBlock, g_ = { class: "mw-ui-dialog__shell items-stretch" }, m_ = { class: "mw-ui-dialog__body" };
function p_(e, t, n, o, s, a) {
  const r = Ha("mw-col"), l = Ha("mw-button"), c = Ha("mw-row"), d = Ha("mw-divider");
  return Ad(), d_(c_, {
    name: "mw-ui-animation-fade",
    style: u_(o.cssVars)
  }, {
    default: tl(() => [
      n.value ? (Ad(), l_("div", {
        key: 0,
        ref: "root",
        class: Ld(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = r_((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        Zr("div", {
          class: Ld(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        Zr("div", g_, [
          n.header ? el(e.$slots, "header", { key: 0 }, () => [
            ys(c, { class: "mw-ui-dialog__header" }, {
              default: tl(() => [
                ys(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                ys(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: tl(() => [
                    ys(l, {
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
            ys(d)
          ]) : Td("", !0),
          Zr("div", m_, [
            el(e.$slots, "default")
          ]),
          el(e.$slots, "footer")
        ])
      ], 34)) : Td("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const Vt = /* @__PURE__ */ he(i_, [["render", p_]]);
const h_ = {
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
}, Dd = window.Vue.renderSlot, f_ = window.Vue.resolveComponent, Ga = window.Vue.openBlock, nl = window.Vue.createBlock, Pd = window.Vue.createCommentVNode, w_ = window.Vue.resolveDynamicComponent, v_ = window.Vue.toDisplayString, __ = window.Vue.mergeProps, S_ = window.Vue.withModifiers, y_ = window.Vue.createElementVNode, C_ = window.Vue.normalizeClass, x_ = window.Vue.createElementBlock, b_ = { class: "mw-ui-input__content" };
function k_(e, t, n, o, s, a) {
  const r = f_("mw-icon");
  return Ga(), x_("div", {
    class: C_(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    y_("div", b_, [
      Dd(e.$slots, "icon", {}, () => [
        n.icon ? (Ga(), nl(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Pd("", !0)
      ]),
      (Ga(), nl(w_(n.type === "textarea" ? n.type : "input"), __({
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
        textContent: v_(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Dd(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ga(), nl(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = S_((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Pd("", !0)
      ])
    ])
  ], 2);
}
const xu = /* @__PURE__ */ he(h_, [["render", k_]]);
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
const $_ = {}, V_ = window.Vue.createElementVNode, E_ = window.Vue.openBlock, L_ = window.Vue.createElementBlock, T_ = { class: "mw-ui-spinner" }, A_ = /* @__PURE__ */ V_("div", { class: "mw-ui-spinner__bounce" }, null, -1), D_ = [
  A_
];
function P_(e, t) {
  return E_(), L_("div", T_, D_);
}
const mt = /* @__PURE__ */ he($_, [["render", P_]]), kt = {
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
const B_ = window.Vue.computed, F_ = {
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
      default: _f
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
    const n = B_(() => {
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
}, Bd = window.Vue.normalizeStyle, Fd = window.Vue.openBlock, N_ = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const M_ = window.Vue.resolveComponent, U_ = window.Vue.createBlock;
function I_(e, t, n, o, s, a) {
  const r = M_("mw-ui-icon");
  return n.thumbnail ? (Fd(), N_("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Bd(o.style)
  }, null, 4)) : (Fd(), U_(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Bd(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Uu = /* @__PURE__ */ he(F_, [["render", I_]]);
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
const R_ = {
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
}, Nd = window.Vue.normalizeClass, Md = window.Vue.normalizeStyle, z_ = window.Vue.createElementVNode, O_ = window.Vue.openBlock, j_ = window.Vue.createElementBlock, H_ = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function G_(e, t, n, o, s, a) {
  return O_(), j_("div", {
    class: Nd(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Md(a.containerStyles)
  }, [
    z_("div", {
      class: Nd(["mw-progress-bar__bar", a.barClass]),
      style: Md(a.barStyles)
    }, null, 6)
  ], 14, H_);
}
const Sf = /* @__PURE__ */ he(R_, [["render", G_]]), q_ = (e, t, n, o) => (s) => {
  const a = s.clientY, r = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), l = (d) => {
    o.value = !1;
    let i = Math.min(
      r + d.clientY - a,
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
}, W_ = (e, t, n, o) => ({ initiateDrag: q_(
  e,
  t,
  n,
  o
) }), X_ = window.Vue.ref, Ud = window.Vue.computed, K_ = (e, t, n, o) => {
  const s = X_(0), a = Ud(
    () => t.value > e.value
  ), r = Ud(
    () => t.value <= e.value * (s.value + 1)
  ), l = (d) => {
    s.value = d, n.value.scroll(0, e.value * s.value);
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
const qa = window.Vue.ref, Y_ = window.Vue.onMounted, Id = window.Vue.computed, Q_ = window.Vue.nextTick, J_ = {
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
    ), s = qa(1), { initiateDrag: a } = W_(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: r,
      scrollable: l,
      scrollIndex: c,
      scrollToStepByIndex: d,
      handleArrowUpClick: i
    } = K_(o, s, n, t), u = () => d(c.value + 1), g = qa(null), m = Id(() => ({
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
    return Y_(() => b(this, null, function* () {
      var f;
      yield Q_(), s.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: t_,
      mwIconExpand: j0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: c,
      scrollToNextStep: u
    };
  }
}, Z_ = window.Vue.renderSlot, e1 = window.Vue.normalizeClass, Wa = window.Vue.createElementVNode, t1 = window.Vue.resolveComponent, n1 = window.Vue.createVNode, ol = window.Vue.openBlock, o1 = window.Vue.createBlock, Rd = window.Vue.createCommentVNode, zd = window.Vue.createElementBlock, s1 = window.Vue.normalizeStyle, a1 = { class: "mw-ui-expandable-content__container" }, i1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, r1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function l1(e, t, n, o, s, a) {
  const r = t1("mw-button");
  return ol(), zd("div", {
    class: "mw-ui-expandable-content",
    style: s1(o.cssVars)
  }, [
    Wa("div", a1, [
      Wa("div", {
        ref: "contentRef",
        class: e1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        Z_(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (ol(), zd("div", i1, [
        n1(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (ol(), o1(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Rd("", !0)
      ])) : Rd("", !0)
    ]),
    Wa("div", r1, [
      Wa("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const c1 = /* @__PURE__ */ he(J_, [["render", l1]]);
const Xa = window.Vue.computed, u1 = {
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
}, Od = window.Vue.createElementVNode, jd = window.Vue.normalizeStyle, d1 = window.Vue.openBlock, g1 = window.Vue.createElementBlock, m1 = ["width", "height", "viewport"], p1 = ["r", "cx", "cy", "stroke-dasharray"], h1 = ["r", "cx", "cy", "stroke-dasharray"];
function f1(e, t, n, o, s, a) {
  return d1(), g1("svg", {
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
    }, null, 8, p1),
    Od("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: jd({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, h1)
  ], 12, m1);
}
const w1 = /* @__PURE__ */ he(u1, [["render", f1]]), v1 = window.Vue.ref, An = {
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
}, sl = {
  mobile: () => matchMedia(Fn.mobile).matches,
  tablet: () => matchMedia(Fn.tablet).matches,
  desktop: () => matchMedia(Fn.desktop).matches,
  desktopwide: () => matchMedia(Fn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Fn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Fn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Fn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Fn["desktop-and-down"]).matches
}, _1 = (e) => {
  const t = Object.values(An);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, S1 = {
  install: (e) => {
    const t = v1({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in sl)
        sl.hasOwnProperty(s) && (t.value[s] = sl[s]());
      t.value.nextBreakpoint = _1(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Ye(me({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, y1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ye(me({}, e.config.globalProperties.$mwui || {}), {
      colors: kt
    }), e.provide("colors", kt);
  }
};
class us extends Error {
}
const C1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new us();
}), yf = { assertUser: C1 };
const x1 = window.Vue.resolveDirective, Cs = window.Vue.createElementVNode, Hd = window.Vue.withDirectives, b1 = window.Vue.toDisplayString, k1 = window.Vue.unref, Gd = window.Vue.withCtx, $1 = window.Vue.openBlock, V1 = window.Vue.createBlock, E1 = window.Vue.createCommentVNode, L1 = { class: "pa-4 sx-login-dialog__header" }, T1 = { class: "sx-login-dialog__body px-6 pb-4" }, A1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, D1 = ["href"], P1 = window.Vue.computed, B1 = window.Vue.ref, F1 = window.Vuex.useStore, N1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = F1(), n = P1(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = B1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = x1("i18n");
      return n.value ? ($1(), V1(k1(Vt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Gd(() => [
          Cs("div", L1, [
            Hd(Cs("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Gd(() => [
          Hd(Cs("div", T1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          Cs("div", A1, [
            Cs("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, b1(a.$i18n("cx-sx-login-dialog-button-label")), 9, D1)
          ])
        ]),
        _: 1
      })) : E1("", !0);
    };
  }
}, Z = new mw.cx.SiteMapper(), M1 = mw.util.getUrl, U1 = () => {
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
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = c, this.targetTitle = d, this.inFeaturedCollection = !1;
  }
}
const Ka = "original", Ya = "empty", I1 = {
  Elia: "Elia.eus",
  Google: "Google Translate"
};
class le {
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
    return I1[t] || t;
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
      [le.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [le.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
  }
  reset() {
    this.proposedTranslations = {
      [le.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [le.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[le.ORIGINAL_TEXT_PROVIDER_KEY];
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
}, ko = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Cf = (e) => {
  const t = wr(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = R1(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, R1 = (e) => {
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
}, xf = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, bf = (e) => {
  const t = xf(e);
  return t == null ? void 0 : t.targetExists;
};
class al {
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
      (a) => ko(a)
    );
    s && bf(s) && (this.blockTemplateAdaptationInfo[t] = xf(s));
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
      (t) => ko(t)
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => ko(o));
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
      (a) => ko(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new al({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new al({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new al({
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
    if (!t || le.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => ko(s)
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
), z1 = Ru - 10, O1 = [
  { status: "failure", value: 100 - Ru },
  { status: "warning", value: 100 - z1 },
  { status: "success", value: 100 }
], kf = (e, t, n) => {
  const o = Wd(e).textContent, s = Wd(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, j1 = (e) => O1.find((t) => e <= t.value).status, H1 = (e, t) => kf(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), G1 = () => (100 - Ru) / 100, Wd = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, sn = {
  calculateScore: kf,
  getScoreStatus: j1,
  getMTScoreForPageSection: H1,
  getMtModificationThreshold: G1
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
      [le.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [le.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [le.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return Qa;
  }
  static isSectionLead(t) {
    return !t || t === Qa;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[le.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[le.ORIGINAL_TEXT_PROVIDER_KEY];
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
    status: d,
    pageRevision: i,
    targetTitle: u,
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
      status: d,
      targetTitle: u
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
const an = "previous-edits", rn = "popular", tt = "topic", Be = "geography", te = "collections", We = "automatic", qt = "seed", Xd = window.Vue.ref, { topics: q1, regions: W1 } = mw.loader.require(
  "ext.cx.articlefilters"
), il = {
  type: We,
  id: an
}, X1 = {
  type: We,
  id: rn
}, zu = () => {
  const e = Xd(
    q1.flatMap((d) => d.topics).map((d) => d.topicId.toLowerCase())
  ), t = Xd(!1), n = (d, i) => e.value.includes(i) ? { type: tt, id: i } : null, o = (d, i) => W1.some(
    (g) => g.id.toLowerCase() === i || g.countries.some(
      (m) => m.id.toLowerCase() === i
    )
  ) ? { type: Be, id: i } : null, s = (d, i, u) => u && !u.some((g) => g.name.toLowerCase() === i) ? null : { type: te, id: d }, a = ({ type: d, id: i }, u = !1) => {
    t.value = !1;
    const g = d == null ? void 0 : d.toLowerCase(), m = i == null ? void 0 : i.toLowerCase();
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
    if (m === te)
      return u && !u.length ? (t.value = !0, il) : {
        type: We,
        id: te
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
    } else if (g === te) {
      const p = s(
        i,
        m,
        u
      );
      if (p)
        return p;
      t.value = !0;
    } else if (g === qt)
      return { type: qt, id: i };
    return il;
  }, r = ({ type: d, id: i }) => c({ type: d, id: i }, il), l = ({ type: d, id: i }) => c({ type: d, id: i }, X1), c = (d, i) => !(d != null && d.id) || !(d != null && d.type) || !(i != null && i.id) || !(i != null && i.type) ? !1 : d.id.toLowerCase() === i.id.toLowerCase() && d.type.toLowerCase() === i.type.toLowerCase();
  return {
    filtersValidatorError: t,
    validateFilters: a,
    isDefaultFilter: r,
    isPopularFilter: l,
    isEqualFilter: c
  };
}, K1 = window.Vue.inject, Y1 = window.Vue.reactive;
var Q1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, $f = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Q1, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(u) {
        this.locale = u;
      }
      convertPlural(u, g) {
        const m = /\d+=/i;
        if (!g || g.length === 0)
          return "";
        for (let h = 0; h < g.length; h++) {
          const f = g[h];
          if (m.test(f)) {
            if (parseInt(f.slice(0, f.indexOf("=")), 10) === u)
              return f.slice(f.indexOf("=") + 1);
            g[h] = void 0;
          }
        }
        g = g.filter((h) => !!h);
        let p = this.getPluralForm(u, this.locale);
        return p = Math.min(p, g.length - 1), g[p];
      }
      getPluralForm(u, g) {
        const m = new Intl.PluralRules(g), p = m.resolvedOptions().pluralCategories, h = m.select(u);
        return ["zero", "one", "two", "few", "many", "other"].filter((f) => p.includes(f)).indexOf(h);
      }
      convertNumber(u, g = !1) {
        let m = this.digitTransformTable(this.locale), p = "";
        if (g) {
          if (parseFloat(u, 10) === u || !m)
            return u;
          const h = [];
          for (const w in m)
            h[m[w]] = w;
          m = h;
          const f = String(u);
          for (let w = 0; w < f.length; w++)
            p += m[f[w]] || f[w];
          return parseFloat(p, 10);
        }
        if (Intl.NumberFormat) {
          let h;
          const f = [...o[this.locale] || [], "en"];
          return h = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : f, p = new Intl.NumberFormat(h).format(u), p === "NaN" && (p = u), p;
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
      convertGrammar(i, u) {
        switch (u) {
          case "instrumental":
            i = "s " + i;
            break;
          case "lokativ":
            i = "o " + i;
        }
        return i;
      }
    }, default: s, dsb: class extends s {
      convertGrammar(i, u) {
        switch (u) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, fi: class extends s {
      convertGrammar(i, u) {
        let g = i.match(/[aou][^äöy]*$/i);
        const m = i;
        switch (i.match(/wiki$/i) && (g = !1), i.match(/[bcdfghjklmnpqrstvwxz]$/i) && (i += "i"), u) {
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
      convertGrammar(i, u) {
        if (u === "ainmlae")
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
      convertGrammar(i, u) {
        switch (u) {
          case "prefixed":
          case "תחילית":
            i.slice(0, 1) === "ו" && i.slice(0, 2) !== "וו" && (i = "ו" + i), i.slice(0, 1) === "ה" && (i = i.slice(1)), (i.slice(0, 1) < "א" || i.slice(0, 1) > "ת") && (i = "־" + i);
        }
        return i;
      }
    }, hsb: class extends s {
      convertGrammar(i, u) {
        switch (u) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, hu: class extends s {
      convertGrammar(i, u) {
        switch (u) {
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
      convertGrammar(i, u) {
        return u === "genitive" && (i.slice(-1) === "ա" ? i = i.slice(0, -1) + "այի" : i.slice(-1) === "ո" ? i = i.slice(0, -1) + "ոյի" : i.slice(-4) === "գիրք" ? i = i.slice(0, -4) + "գրքի" : i += "ի"), i;
      }
    }, la: class extends s {
      convertGrammar(i, u) {
        switch (u) {
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
      convertGrammar(i, u) {
        let g, m, p, h;
        switch (g = "мæ", m = "", p = "", h = "", i.match(/тæ$/i) ? (i = i.slice(0, -1), g = "æм") : i.match(/[аæеёиоыэюя]$/i) ? m = "й" : i.match(/у$/i) ? i.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (m = "й") : i.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (p = "-"), u) {
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
      convertGrammar(i, u) {
        return u === "genitive" && (i.slice(-1) === "ь" ? i = i.slice(0, -1) + "я" : i.slice(-2) === "ия" ? i = i.slice(0, -2) + "ии" : i.slice(-2) === "ка" ? i = i.slice(0, -2) + "ки" : i.slice(-2) === "ти" ? i = i.slice(0, -2) + "тей" : i.slice(-2) === "ды" ? i = i.slice(0, -2) + "дов" : i.slice(-3) === "ник" && (i = i.slice(0, -3) + "ника")), i;
      }
    }, sl: class extends s {
      convertGrammar(i, u) {
        switch (u) {
          case "mestnik":
            i = "o " + i;
            break;
          case "orodnik":
            i = "z " + i;
        }
        return i;
      }
    }, uk: class extends s {
      convertGrammar(i, u) {
        switch (u) {
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
      constructor(u) {
        this.locale = u, this.language = new (a[u] || a.default)(u);
      }
      emit(u, g) {
        let m, p, h;
        switch (typeof u) {
          case "string":
          case "number":
            m = u;
            break;
          case "object":
            if (p = u.slice(1).map((f) => this.emit(f, g)), h = u[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            m = this[h](p, g);
            break;
          case "undefined":
            m = "";
            break;
          default:
            throw new Error("unexpected type in AST: " + typeof u);
        }
        return m;
      }
      concat(u) {
        let g = "";
        return u.forEach((m) => {
          g += m;
        }), g;
      }
      replace(u, g) {
        const m = parseInt(u[0], 10);
        return m < g.length ? g[m] : "$" + (m + 1);
      }
      plural(u) {
        const g = parseFloat(this.language.convertNumber(u[0], 10)), m = u.slice(1);
        return m.length ? this.language.convertPlural(g, m) : "";
      }
      gender(u) {
        const g = u[0], m = u.slice(1);
        return this.language.gender(g, m);
      }
      grammar(u) {
        const g = u[0], m = u[1];
        return m && g && this.language.convertGrammar(m, g);
      }
      wikilink(u) {
        let g, m = u[0];
        m.charAt(0) === ":" && (m = m.slice(1));
        const p = `./${m}`;
        return g = u.length === 1 ? m : u[1], `<a href="${p}" title="${m}">${g}</a>`;
      }
      extlink(u) {
        if (u.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${u[0]}">${u[1]}</a>`;
      }
      bidi(u) {
        const g = function(m) {
          const p = m.match(r);
          return p ? p[2] === void 0 ? "ltr" : "rtl" : null;
        }(u[0]);
        return g === "ltr" ? "‪" + u[0] + "‬" : g === "rtl" ? "‫" + u[0] + "‬" : u[0];
      }
      formatnum(u) {
        const g = !!u[1] && u[1] === "R", m = u[0];
        return typeof m == "string" || typeof m == "number" ? this.language.convertNumber(m, g) : m;
      }
      htmlattributes(u) {
        const g = {};
        for (let m = 0, p = u.length; m < p; m += 2)
          g[u[m]] = u[m + 1];
        return g;
      }
      htmlelement(u) {
        const g = u.shift(), m = u.shift();
        let p = u, h = "";
        for (const f in m)
          h += ` ${f}="${m[f]}"`;
        return Array.isArray(p) || (p = [p]), `<${g}${h}>${p.join("")}</${g}>`;
      }
    }
    class c {
      constructor(u, { wikilinks: g = !1 } = {}) {
        this.locale = u, this.wikilinks = g, this.emitter = new l(this.locale);
      }
      parse(u, g) {
        if (u.includes("{{") || u.includes("<") || this.wikilinks && u.includes("[")) {
          const m = function(p, { wikilinks: h = !1 } = {}) {
            let f = 0;
            function w(A) {
              return () => {
                for (let W = 0; W < A.length; W++) {
                  const Ne = A[W]();
                  if (Ne !== null)
                    return Ne;
                }
                return null;
              };
            }
            function v(A) {
              const W = f, Ne = [];
              for (let At = 0; At < A.length; At++) {
                const J = A[At]();
                if (J === null)
                  return f = W, null;
                Ne.push(J);
              }
              return Ne;
            }
            function C(A, W) {
              return () => {
                const Ne = f, At = [];
                let J = W();
                for (; J !== null; )
                  At.push(J), J = W();
                return At.length < A ? (f = Ne, null) : At;
              };
            }
            function y(A) {
              const W = A.length;
              return () => {
                let Ne = null;
                return p.slice(f, f + W) === A && (Ne = A, f += W), Ne;
              };
            }
            function _(A) {
              return () => {
                const W = p.slice(f).match(A);
                return W === null ? null : (f += W[0].length, W[0]);
              };
            }
            const V = _(/^\s+/), E = y("|"), N = y(":"), x = y("\\"), B = _(/^./), R = y("$"), X = _(/^\d+/), ae = y('"'), ee = y("'"), ne = _(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), D = _(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), z = w([K, _(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function K() {
              const A = v([x, B]);
              return A === null ? null : A[1];
            }
            const Q = w([K, D]), $e = w([K, ne]);
            function xe() {
              const A = v([R, X]);
              return A === null ? null : ["REPLACE", parseInt(A[1], 10) - 1];
            }
            const _e = (Oe = _(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), O = function(A) {
              return A.toString();
            }, () => {
              const A = Oe();
              return A === null ? null : O(A);
            });
            var Oe, O;
            function j() {
              const A = v([E, C(0, To)]);
              if (A === null)
                return null;
              const W = A[1];
              return W.length > 1 ? ["CONCAT"].concat(W) : W[0];
            }
            function ce() {
              const A = v([_e, N, xe]);
              return A === null ? null : [A[0], A[2]];
            }
            function S() {
              const A = v([_e, N, To]);
              return A === null ? null : [A[0], A[2]];
            }
            function T() {
              const A = v([_e, N]);
              return A === null ? null : [A[0], ""];
            }
            const L = w([function() {
              const A = v([w([ce, S, T]), C(0, j)]);
              return A === null ? null : A[0].concat(A[1]);
            }, function() {
              const A = v([_e, C(0, j)]);
              return A === null ? null : [A[0]].concat(A[1]);
            }]), F = y("{{"), M = y("}}"), H = y("[["), G = y("]]"), U = y("["), ie = y("]");
            function st() {
              const A = v([F, L, M]);
              return A === null ? null : A[1];
            }
            const Ve = w([function() {
              const A = v([C(1, To), E, C(1, Lo)]);
              return A === null ? null : [["CONCAT"].concat(A[0]), ["CONCAT"].concat(A[2])];
            }, function() {
              const A = v([C(1, To)]);
              return A === null ? null : [["CONCAT"].concat(A[0])];
            }]);
            function Ua() {
              let A = null;
              const W = v([H, Ve, G]);
              if (W !== null) {
                const Ne = W[1];
                A = ["WIKILINK"].concat(Ne);
              }
              return A;
            }
            function Ia() {
              let A = null;
              const W = v([U, C(1, Or), V, C(1, Lo), ie]);
              return W !== null && (A = ["EXTLINK", W[1].length === 1 ? W[1][0] : ["CONCAT"].concat(W[1]), ["CONCAT"].concat(W[3])]), A;
            }
            const co = _(/^[A-Za-z]+/);
            function Rr() {
              const A = _(/^[^"]*/), W = v([ae, A, ae]);
              return W === null ? null : W[1];
            }
            function zr() {
              const A = _(/^[^']*/), W = v([ee, A, ee]);
              return W === null ? null : W[1];
            }
            function _s() {
              const A = _(/^\s*=\s*/), W = v([V, co, A, w([Rr, zr])]);
              return W === null ? null : [W[1], W[3]];
            }
            function Ss() {
              const A = C(0, _s)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], A);
            }
            const Or = w([st, xe, Ua, Ia, function() {
              const A = C(1, z)();
              return A === null ? null : A.join("");
            }]), Lo = w([st, xe, Ua, Ia, function() {
              let A = null;
              const W = f, Ne = y("<"), At = _(/^\/?/), J = _(/^\s*>/), un = v([Ne, co, Ss, At, J]);
              if (un === null)
                return null;
              const Bn = f, ft = un[1], Ao = C(0, Lo)(), jr = f, vd = v([y("</"), co, J]);
              if (vd === null)
                return ["CONCAT", p.slice(W, Bn)].concat(Ao);
              const pv = f, hv = vd[1], _d = un[2];
              if (function(uo, za, Hr, Gr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((uo = uo.toLowerCase()) !== (za = za.toLowerCase()) || Gr.allowedHtmlElements.indexOf(uo) === -1)
                  return !1;
                const fv = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Oa = 0, wv = Hr.length; Oa < wv; Oa += 2) {
                  const qr = Hr[Oa];
                  if (Gr.allowedHtmlCommonAttributes.indexOf(qr) === -1 && (Gr.allowedHtmlAttributesByElement[uo] || []).indexOf(qr) === -1 || qr === "style" && Hr[Oa + 1].search(fv) !== -1)
                    return !1;
                }
                return !0;
              }(ft, hv, _d.slice(1)))
                A = ["HTMLELEMENT", ft, _d].concat(Ao);
              else {
                const uo = (za) => za.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                A = ["CONCAT", uo(p.slice(W, Bn))].concat(Ao, uo(p.slice(jr, pv)));
              }
              return A;
            }, function() {
              const A = C(1, $e)();
              return A === null ? null : A.join("");
            }]), To = w([st, xe, function() {
              const A = C(1, Q)();
              return A === null ? null : A.join("");
            }]), Ra = function() {
              const A = C(0, Lo)();
              return A === null ? null : ["CONCAT"].concat(A);
            }();
            if (Ra === null || f !== p.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + p);
            return Ra;
          }(u, { wikilinks: this.wikilinks });
          return this.emitter.emit(m, g);
        }
        return this.simpleParse(u, g);
      }
      simpleParse(u, g) {
        return u.replace(/\$(\d+)/g, (m, p) => {
          const h = parseInt(p, 10) - 1;
          return g[h] !== void 0 ? g[h] : "$" + p;
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
          for (const m in u)
            if (m.indexOf("@") !== 0) {
              if (typeof u[m] == "object")
                return this.load(u);
              if (typeof u[m] != "string")
                throw new Error(`Invalid message for message ${m} in ${g} locale.`);
              break;
            }
          this.sourceMap.has(g) ? this.sourceMap.set(g, Object.assign(this.sourceMap.get(g), u)) : this.sourceMap.set(g, u);
        } else
          for (g in u)
            this.load(u[g], g);
      }
      getMessage(u, g) {
        const m = this.sourceMap.get(g);
        return m ? m[u] : null;
      }
      hasLocale(u) {
        return this.sourceMap.has(u);
      }
    }
    return class {
      constructor(i, { finalFallback: u = "en", messages: g, wikilinks: m = !1 } = {}) {
        this.locale = i, this.parser = new c(this.locale, { wikilinks: m }), this.messageStore = new d(), g && this.load(g, this.locale), this.finalFallback = u, this.wikilinks = m;
      }
      load(i, u) {
        return this.messageStore.load(i, u || this.locale);
      }
      i18n(i, ...u) {
        return this.parser.parse(this.getMessage(i), u);
      }
      setLocale(i) {
        this.locale = i, this.parser = new c(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(i) {
        let u = this.locale, g = 0;
        const m = this.getFallbackLocales(this.locale);
        for (; u; ) {
          const p = u.split("-");
          let h = p.length;
          do {
            const f = p.slice(0, h).join("-"), w = this.messageStore.getMessage(i, f);
            if (typeof w == "string")
              return w;
            h--;
          } while (h);
          u = m[g], g++;
        }
        return i;
      }
      registerParserPlugin(i, u) {
        l.prototype[i] = u;
      }
    };
  });
})($f);
var J1 = $f.exports;
const Kd = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Vf = Symbol("banana-context");
function fe() {
  const e = K1(Vf);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function Z1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = Y1(new J1(e.locale, e));
  return {
    install: (n) => {
      n.provide(Vf, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
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
const Pn = window.Vue.ref, eS = window.Vue.computed, kr = Pn(null), $r = Pn(null), Vr = Pn(null), La = Pn(null), Ou = Pn(null), Er = Pn(null), Ef = Pn(null), Lf = Pn(null), ju = Pn(null), { validateFilters: tS, filtersValidatorError: nS } = zu(), Tf = {
  from: kr,
  to: $r,
  section: La,
  draft: Ou,
  page: Vr,
  revision: Er,
  "active-list": ju
}, oS = eS(() => ({
  type: Ef.value,
  id: Lf.value
})), Af = (e, t) => {
  Ef.value = e, Lf.value = t, vr("filter-type", e), t && vr("filter-id", t);
}, sS = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof br && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), Tf[o].value = s;
  }
  t.delete("title"), Ta(Object.fromEntries(t));
}, Hu = (e, t) => {
  Tf[e].value = t, vr(e, t);
}, aS = (e) => {
  Hu("section", e);
}, iS = (e) => {
  Hu("page", e);
}, rS = (e) => {
  Hu("active-list", e);
}, Ta = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    M1(`Special:ContentTranslation${t}`, e)
  );
}, lS = () => {
  const e = fe(), t = new URLSearchParams(location.search);
  Vr.value = t.get("page"), kr.value = t.get("from"), $r.value = t.get("to"), La.value = t.get("section"), Er.value = t.get("revision"), ju.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = tS({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Af(n.type, n.id), nS.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, cS = () => {
  const e = new URLSearchParams(location.search);
  La.value = null, e.delete("section"), e.delete("title"), Ta(Object.fromEntries(e));
}, vr = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), Ta(Object.fromEntries(n));
}, uS = (e) => new URLSearchParams(location.search).get(e), dS = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), kr.value = e, $r.value = t, n.delete("title"), Ta(Object.fromEntries(n));
}, gS = () => {
  const e = new URLSearchParams(location.search);
  Vr.value = null, La.value = null, Ou.value = null, Er.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), Ta(Object.fromEntries(e));
}, mS = () => new URLSearchParams(location.search).get("force-quick-tutorial"), P = () => ({
  isQuickTutorialForced: mS,
  setLanguageURLParams: dS,
  setSectionURLParam: aS,
  setTranslationURLParams: sS,
  initializeURLState: lS,
  clearTranslationURLParameters: gS,
  clearSectionURLParameter: cS,
  setUrlParam: vr,
  getUrlParam: uS,
  pageURLParameter: Vr,
  sourceLanguageURLParameter: kr,
  targetLanguageURLParameter: $r,
  sectionURLParameter: La,
  draftURLParameter: Ou,
  revisionURLParameter: Er,
  setPageURLParam: iS,
  currentSuggestionFilters: oS,
  setFilterURLParams: Af,
  activeDashboardTabParameter: ju,
  setActiveDashboardTabParameter: rS
}), pS = () => {
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
function hS(e, t) {
  return b(this, null, function* () {
    const n = Z.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new le(e, t, o.mt)
      )
    );
  });
}
function fS() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function wS(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = Z.getWikiDomainCode(e), r = Z.getWikiDomainCode(t), l = {
    action: "wblinktitles",
    fromsite: s.replace(r, a),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, c = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(c.postWithToken("csrf", l)).then((d) => {
    const u = {
      action: "tag",
      revid: d.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(c.postWithToken("csrf", u));
  });
}
const Lr = {
  fetchSupportedLanguageCodes: pS,
  fetchSupportedMTProviders: hS,
  fetchCXServerToken: fS,
  addWikibaseLink: wS
}, vS = window.Vue.ref, Ja = vS([]);
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
const _S = {
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
}, SS = {
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
}, yS = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], CS = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, xS = {
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
}, bS = {
  languages: _S,
  scriptgroups: SS,
  rtlscripts: yS,
  regiongroups: CS,
  territories: xS
};
var Re = bS;
function Da(e) {
  return !!Re.languages[e];
}
function io(e) {
  return Da(e) && Re.languages[e].length === 1 ? Re.languages[e][0] : !1;
}
function kS() {
  return Re.languages;
}
function Pa(e) {
  var t = io(e);
  return t ? Pa(t) : Da(e) ? Re.languages[e][0] : "Zyyy";
}
function Gu(e) {
  var t = io(e);
  return t ? Gu(t) : Da(e) && Re.languages[e][1] || "UNKNOWN";
}
function ka(e) {
  var t = io(e);
  return t ? ka(t) : Da(e) && Re.languages[e][2] || e;
}
function $S() {
  var e, t = {};
  for (e in Re.languages)
    io(e) || (t[e] = ka(e));
  return t;
}
function Df(e) {
  var t, n, o = [];
  for (t in Re.languages)
    if (!io(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Pa(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function VS(e) {
  return Df([e]);
}
function Pf(e) {
  var t;
  for (t in Re.scriptgroups)
    if (Re.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function qu(e) {
  return Pf(Pa(e));
}
function Bf(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = io(n) || n, a = qu(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Ff(e) {
  var t, n, o, s = {};
  for (t in Re.languages)
    if (!io(t)) {
      for (n = 0; n < e.length; n++)
        if (Gu(t).includes(e[n])) {
          o = qu(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function ES(e) {
  return Ff([e]);
}
function LS(e) {
  var t, n, o, s = [];
  for (t = Bf(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function TS(e, t) {
  var n = ka(e) || e, o = ka(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Nf(e) {
  return Re.rtlscripts.includes(Pa(e));
}
function AS(e) {
  return Nf(e) ? "rtl" : "ltr";
}
function DS(e) {
  return Re.territories[e] || [];
}
function PS(e, t) {
  t.target ? Re.languages[e] = [t.target] : Re.languages[e] = [t.script, t.regions, t.autonym];
}
var q = {
  addLanguage: PS,
  getAutonym: ka,
  getAutonyms: $S,
  getDir: AS,
  getGroupOfScript: Pf,
  getLanguages: kS,
  getLanguagesByScriptGroup: Bf,
  getLanguagesByScriptGroupInRegion: ES,
  getLanguagesByScriptGroupInRegions: Ff,
  getLanguagesInScript: VS,
  getLanguagesInScripts: Df,
  getLanguagesInTerritory: DS,
  getRegions: Gu,
  getScript: Pa,
  getScriptGroupOfLanguage: qu,
  isKnown: Da,
  isRedirect: io,
  isRtl: Nf,
  sortByScriptGroup: LS,
  sortByAutonym: TS
};
const Do = window.Vue.computed;
function ze(e) {
  const t = Do(() => e.state.application.sourceLanguage), n = Do(() => e.state.application.targetLanguage), o = Do(
    () => e.state.application.currentMTProvider
  ), s = Do(
    () => q.getAutonym(t.value)
  ), a = Do(
    () => q.getAutonym(n.value)
  ), r = Do(() => e.state.application.previousRoute);
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
    pageviews: d,
    thumbnail: i = null,
    title: u,
    revisions: g,
    _alias: m,
    content: p = null,
    sections: h = []
  } = {}) {
    var f;
    this.language = l, this.title = u, this.pageId = r, this.description = t, this.image = s, this.imageName = a, this.pageprops = c, this.pageviews = d, this.thumbnail = i, this.langLinksCount = n, this.articleSize = (f = g == null ? void 0 : g[0]) == null ? void 0 : f.size, this.revision = o, this.alias = m, this.wikidataId = c == null ? void 0 : c.wikibase_item, this.content = p, this.sections = h;
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
class BS {
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
function FS() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const NS = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), FS();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, MS = (e, t) => {
  let n, o;
  return t ? (n = NS(e), o = n.$element.find(
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
}, US = (e, t) => {
  const n = Array.from(
    MS(e, t)
  );
  return IS(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...r] = s;
      let l;
      const c = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = !1 : (l = !0, r.unshift(a));
      const d = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (i) => new gt({
          sentences: RS(i),
          node: i
        })
      );
      return new no({ id: c, subSections: d, isLeadSection: l });
    }
  );
}, IS = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, RS = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new eo({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Mf = {
  convertSegmentedContentToPageSections: US
}, Wu = 120, zS = (e, t) => {
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
      (i, u) => Ye(me({}, i), { [u.to]: u.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (i, u) => Ye(me({}, i), {
        [u.to]: u.from
      }),
      {}
    );
    return a.map((i) => {
      const u = d[i.title] || l[i.title] || null;
      return new ds(Ye(me({}, i), { _alias: u }));
    });
  });
}, OS = (e, t) => {
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
    var c, d;
    const a = s.query.pages;
    if (!a || !a.length || (c = a[0]) != null && c.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return l ? Object.freeze(new BS(l, r)) : null;
  });
}, jS = (e, t) => {
  if (!Number.isInteger(t) || t <= 0)
    throw new RangeError("chunk(): size must be a positive integer");
  const n = [];
  for (let o = 0; o < e.length; o += t)
    n.push(e.slice(o, o + t));
  return n;
}, HS = (e, t, n) => b(void 0, null, function* () {
  const o = Z.getApi(e), a = jS(n, 50).map((l) => {
    const c = {
      action: "query",
      format: "json",
      formatversion: 2,
      prop: "langlinks",
      titles: l,
      lllang: t,
      origin: "*",
      redirects: !0
    };
    return o.get(c).then((d) => Object.values(d.query.pages).map((u) => {
      var g, m;
      return (m = (g = u.langlinks) == null ? void 0 : g[0]) == null ? void 0 : m["*"];
    }).filter((u) => !!u));
  });
  return (yield Promise.all(a)).flat();
}), GS = (e, t, n, o = null) => {
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
    Z.getApi(e).get(l).then((d) => {
      var i;
      return r(((i = d == null ? void 0 : d.parse) == null ? void 0 : i.sections) || []);
    }).fail(() => r([]));
  }).then(
    (r) => r.filter((l) => l.toclevel === 1).map((l) => ({
      title: l.line,
      id: l.number
    }))
  ), a = qS(
    e,
    t,
    n,
    o
  );
  return Promise.all([a, s]).then(
    ([r, l]) => {
      const c = Mf.convertSegmentedContentToPageSections(
        r,
        !1
        // No need to resolve references. Content can be used as it is
      );
      return c.forEach((d) => {
        const i = l.find((u) => u.id === d.id);
        d.originalTitle = (i == null ? void 0 : i.title) || "";
      }), new ds({
        sections: c,
        content: r,
        pagelanguage: e,
        title: n
      });
    }
  );
}, qS = (e, t, n, o = null) => {
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
  return fetch(c).then((d) => d.json()).then((d) => d.segmentedContent);
}, WS = (e) => {
  const t = U1();
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
}, XS = (e, t) => {
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
}, gs = {
  fetchPages: zS,
  fetchLanguageTitles: OS,
  fetchPageContent: GS,
  fetchNearbyPages: WS,
  searchPagesByTitlePrefix: XS,
  fetchLanguageLinksForLanguage: HS
}, KS = window.Vuex.useStore, ro = () => {
  const e = KS();
  return (t, n) => {
    n = n.filter(
      (a) => !!a && !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const r = n.slice(a, a + o), l = gs.fetchPages(t, r).then(
        (c) => c.forEach(
          (d) => e.commit("mediawiki/addPage", d)
        )
      );
      s.push(l);
    }
    return Promise.all(s);
  };
}, YS = window.Vuex.useStore, Tr = () => {
  const e = YS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (m) => m.matchesFilter(o.value)
  ), r = (g) => a().slice(
    s * g,
    s * (g + 1)
  ), l = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (m) => m.matchesFilter(o.value)
  ), c = (g) => l().slice(
    s * g,
    s * (g + 1)
  ), d = (g, m, p) => {
    const h = {
      id: g,
      type: te
    }, f = e.getters[m](h);
    return f != null && f.id && e.commit(p, f == null ? void 0 : f.id), f;
  };
  return {
    getFilteredPageSuggestions: l,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: c,
    getSectionSuggestionsSliceByIndex: r,
    getNextUnseenSectionSuggestionByCollection: (g) => d(
      g,
      "suggestions/getNextUnseenSectionSuggestionByFilter",
      "suggestions/removeSectionSuggestion"
    ),
    getNextUnseenPageSuggestionByCollection: (g) => d(
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
    suggestionSeed: d = null,
    suggestionProvider: i = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = r, this.size = l, this.leadSectionSize = c, this.langLinksCount = a, this.suggestionProvider = i, this.suggestionSeed = d, this.isListable = !0, this.seen = !1, this.inFeaturedCollection = !1;
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
    targetSections: d = [],
    suggestionSeed: i = null,
    isListable: u = !0,
    suggestionProvider: g = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSectionSizes = l, this.sourceSections = c, this.targetSections = d, this.suggestionSeed = i, this.isListable = u, this.suggestionProvider = g, this.seen = !1, this.inFeaturedCollection = !1;
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
const Uf = [
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
], QS = [
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
], JS = [
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
], ZS = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], ey = [
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
], ty = {
  en: Uf,
  es: QS,
  bn: JS,
  fr: ZS,
  de: ey
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
class If extends oo {
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
    collection: d = {}
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
    }), this.collection = new Xu(d);
  }
  /**
   * @returns {boolean}
   */
  collectionMatchesProvider() {
    var t;
    return this.collection.name === ((t = this.suggestionProvider) == null ? void 0 : t.id);
  }
}
class Rf extends on {
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
    targetSections: d = [],
    isListable: i = !0,
    suggestionProvider: u = null,
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
      targetSections: d,
      isListable: i,
      suggestionProvider: u
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
const zf = (e) => {
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
}, ny = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits", oy = () => b(void 0, null, function* () {
  if (mw.user.isAnon())
    return !1;
  const e = mw.user.getName();
  return (yield zf(e)) < 100;
}), Xe = {
  stub: "stub",
  easy: "easy",
  medium: "medium",
  hard: "hard",
  unknown: "unknown"
}, Of = {
  easy: 2500,
  medium: 1e4,
  hard: 4e4
}, bu = {
  easy: 1e3,
  medium: 4e3,
  hard: 12e3
}, jf = (e, t) => !e || e < 0 ? Xe.unknown : e < t.easy ? Xe.stub : e < t.medium ? Xe.easy : e < t.hard ? Xe.medium : Xe.hard, Hf = (e) => jf(e, Of), Ku = (e) => jf(e, bu), sy = (e) => {
  if (!e)
    return !1;
  const t = Hf(e);
  return t === Xe.stub || t === Xe.easy;
}, ay = (e) => {
  if (!e)
    return !1;
  const t = Ku(e);
  return t === Xe.stub || t === Xe.easy;
}, Gf = (e) => e ? Ku(e) === Xe.easy : !1;
class qf {
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
const iy = Uf, ln = 6, ry = (e, t) => b(void 0, null, function* () {
  if (yield oy()) {
    let o;
    e ? e === "/sections" && (o = bu) : (o = Of, Gt || (t.lead_section = !0, o = bu)), o && (t.min_size = o[Xe.easy], t.max_size = o[Xe.medium] - 1);
  } else
    !Gt && e !== "/sections" && (t.lead_section = !0);
}), Et = (n) => b(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
  let o = mw.config.get("wgRecommendToolAPIURL");
  yield ry(e, t), e && (o += e);
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
function ly() {
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
function cy(e, t, n, o) {
  const s = {
    collection: e
  };
  return t && t.length ? s.qids = t.join("|") : n && o && o.length && (s.language = n, s.titles = o.join("|")), Et({
    urlPostfix: "/page-collection-membership",
    urlParams: s
  });
}
function uy(e) {
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
        a ? new qf(
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
function dy(s, a) {
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
const gy = (e, t) => b(void 0, null, function* () {
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
}), my = (e, t) => b(void 0, null, function* () {
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
}), py = (l) => b(void 0, [l], function* ({
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
  const d = (yield Et({ urlParams: c })) || {};
  return {
    recommendations: (d.recommendations || []).map(
      (u) => new If({
        sourceTitle: u.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: u.wikidata_id,
        langLinksCount: parseInt(u.langlinks_count),
        collection: u.collection
      })
    ),
    continue_offset: d.continue_offset,
    continue_seed: d.continue_seed
  };
}), hy = (l) => b(void 0, [l], function* ({
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
      (g) => new Rf({
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
function fy(e, t, n) {
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
function wy(e, t, n = null) {
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
function vy(a) {
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
function _y(a) {
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
      (d) => new on({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: d.source_title,
        targetTitle: d.target_title,
        sourceSections: d.source_sections,
        targetSections: d.target_sections,
        present: d.present,
        missing: d.missing,
        sourceSectionSizes: d.source_section_sizes
      })
    );
  });
}
function Sy(a) {
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
function yy(a) {
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
      (d) => new on({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: d.source_title,
        targetTitle: d.target_title,
        sourceSections: d.source_sections,
        targetSections: d.target_sections,
        present: d.present,
        missing: d.missing,
        sourceSectionSizes: d.source_section_sizes
      })
    );
  });
}
function Cy(e) {
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
function xy(e, t) {
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
function by(e) {
  const t = iy.map((o) => encodeURIComponent(o)).join("|"), n = Z.getCXServerUrl(
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
const ky = (e, t, n) => {
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
}, $y = (e) => {
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
}, Vy = () => {
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
  fetchFavorites: Vy,
  fetchPageSuggestions: dy,
  fetchSectionSuggestion: fy,
  fetchSectionSuggestions: wy,
  fetchAppendixTargetSectionTitles: by,
  fetchArticleSections: xy,
  markFavorite: ky,
  unmarkFavorite: $y,
  fetchUserEdits: Cy,
  fetchMostPopularPageSuggestions: gy,
  fetchMostPopularSectionSuggestions: my,
  fetchPageSuggestionsByTopics: vy,
  fetchSectionSuggestionsByTopics: _y,
  fetchPageSuggestionsByCountries: Sy,
  fetchSectionSuggestionsByCountries: yy,
  fetchPageCollectionGroups: ly,
  fetchPageSuggestionsByCollections: py,
  fetchSectionSuggestionsByCollections: hy,
  fetchFeaturedCollectionDataByLanguage: uy,
  fetchPageCollectionMembership: cy
}, Ey = window.Vuex.useStore, ms = () => {
  const e = Ey(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), o = (l) => {
    if (!l)
      return !1;
    const c = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((u) => u.sourceTitle);
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
function Ly(e) {
  const t = [...e];
  for (let n = t.length - 1; n > 0; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [t[n], t[o]] = [t[o], t[n]];
  }
  return t;
}
class Ty {
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
    this.seeds = Ly(t);
  }
}
const Ay = window.Vuex.useStore, Dy = window.Vue.computed, Yu = window.Vue.ref, Py = Yu([]), By = Yu([]), rl = [], ll = [], Qd = [], Jd = Yu({});
let xs = null;
const cl = {
  page: Py,
  section: By
}, Wf = () => {
  const e = Ay(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), o = Dy(
    () => Jd.value[t.value] || []
  ), s = () => b(void 0, null, function* () {
    ll.includes(t.value) || (Jd.value[t.value] = yield ge.fetchUserEdits(t.value).then((u) => (ll.push(t.value), u)));
  }), a = () => b(void 0, null, function* () {
    let i = e.getters["translator/getTranslationsByStatus"]("published");
    i = i.filter(
      (p) => p.sourceLanguage === t.value
    );
    const u = rl.includes(i);
    if (i.length && !u)
      return rl.push(t.value), i.map(
        (p) => p.sourceTitle
      );
    if (rl.push(t.value), !ll.includes(t.value) && (yield s(), o.value.length > 0))
      return o.value;
    if (!Qd.includes(n.value)) {
      const h = (yield ge.fetchUserEdits(n.value).then((f) => (Qd.push(n.value), f))).slice(0, 20);
      if (h.length)
        return gs.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          h
        );
    }
    return null;
  }), r = (i) => {
    let u = cl[i].value.find(
      (g) => g.matchesLanguagePair(t.value, n.value)
    );
    return u || (u = new Ty({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), cl[i].value.push(u)), u;
  }, l = () => b(void 0, null, function* () {
    let i = !1, u = [];
    do {
      u = yield a(), u || (i = !0);
      for (const g in cl) {
        const m = r(g);
        m.setSeeds([
          ...m.seeds,
          ...u || []
        ]);
      }
    } while (!i && !(u != null && u.length));
  }), c = () => xs || (xs = l(), xs.finally(() => {
    xs = null;
  }));
  return {
    getSuggestionSeed: (i) => b(void 0, null, function* () {
      let u = r(i);
      return u.seeds.length || (yield c()), u.shiftSeeds();
    }),
    fetchPreviousEditsInSource: s,
    previousEditsInSource: o
  };
}, Fy = 5;
function Vo(e) {
  return b(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < Fy);
  });
}
const Ny = window.Vuex.useStore, My = () => {
  const e = Ny(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), { getSuggestionSeed: o } = Wf(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ms(), l = {
    id: an,
    type: We
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const u = [];
      return yield Vo(() => b(void 0, null, function* () {
        const g = yield o("page");
        let m = yield ge.fetchPageSuggestions(
          t.value,
          n.value,
          g || null
        );
        return m = m.filter(
          (p) => a(p)
        ), m = m.slice(0, i), u.push(...m), u.length >= i;
      })), u.forEach(
        (g) => g.suggestionProvider = l
      ), u;
    }),
    fetchSectionSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const u = [];
      return yield Vo(() => b(void 0, null, function* () {
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
        return p = p.slice(0, i), u.push(...p), h.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), u.length >= i;
      })), u.forEach(
        (g) => g.suggestionProvider = l
      ), u;
    })
  };
}, Qu = window.Vue.ref, bs = "ungrouped", Zd = Qu({}), eg = Qu({}), tg = Qu(!1);
let ul = null;
const Ar = () => {
  const e = () => b(void 0, null, function* () {
    try {
      const n = yield ge.fetchPageCollectionGroups(), o = Object.fromEntries(
        Object.keys(n).sort((s, a) => s === bs ? 1 : a === bs ? -1 : s.localeCompare(a)).map((s) => [s, n[s]])
      );
      o[bs] && (o[bs] = o[bs].sort(
        (s, a) => s.name.localeCompare(a.name)
      )), Zd.value = o, eg.value = Object.values(n).flat(), tg.value = !0;
    } catch (n) {
      mw.log.error("Failed to fetch page collections", n);
    }
  });
  return {
    fetchPageCollectionGroups: () => (ul || (ul = e()), ul),
    pageCollectionGroupsFetched: tg,
    pageCollectionGroups: Zd,
    pageCollections: eg
  };
}, dl = window.Vue.computed, Dr = window.Vue.ref, Uy = window.Vue.watch, Iy = new mw.cx.SiteMapper(), _r = Iy.getCurrentWikiLanguageCode(), Ry = mw.config.get(
  "wgContentTranslationFeaturedCollection"
), zy = mw.config.get(
  "wgContentTranslationFeaturedCollectionCommunityName"
), Oy = mw.config.get(
  "wgContentTranslationFeaturedCollectionDescription"
), jy = mw.config.get(
  "wgContentTranslationFeaturedCollectionLink"
), Xf = Dr({
  [_r]: new qf(
    Ry,
    Oy,
    zy,
    jy,
    _r
  )
}), ku = Dr({
  [_r]: Promise.resolve()
}), $u = Dr({
  [_r]: !0
});
let ng = !1;
const og = (e) => {
  if (!e || ku.value[e])
    return;
  const t = ge.fetchFeaturedCollectionDataByLanguage(e).then((n) => {
    n && (Xf.value[e] = n), $u.value[e] = !0;
  }).catch((n) => {
    $u.value[e] = !0, console.error("Failed to fetch featured collection:", n);
  });
  ku.value[e] = t;
}, Hy = (e, t) => !e || !Array.isArray(t) ? !1 : t.some(
  (n) => n.name.toLowerCase() === e.toLowerCase()
), Wt = (e = void 0) => {
  const { pageCollections: t, fetchPageCollectionGroups: n } = Ar();
  let o;
  if (e)
    o = Dr(e), e && og(e);
  else {
    const { targetLanguageURLParameter: l } = P();
    o = l, ng || (Uy(
      o,
      (c) => {
        c && og(c);
      },
      { immediate: !0 }
    ), ng = !0);
  }
  const s = dl(() => {
    const l = o.value, c = Xf.value[l];
    return c != null && c.name && Hy(c.name, t.value) ? c : null;
  }), a = dl(
    () => $u.value[o.value] || !1
  ), r = dl(
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
}, Gy = window.Vuex.useStore, qy = window.Vue.computed, Pr = window.Vue.ref, sg = Pr({}), ag = Pr({}), ig = Pr({}), rg = Pr({}), lg = (e, t) => e && t.value[e] || null, cg = (e, t) => e ? t.value[e] ? t.value[e] === -1 ? -1 : t.value[e] + 1 : 0 : null, Ju = () => {
  const e = Gy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), s = qy(() => {
    var f;
    return ((f = o.value) == null ? void 0 : f.type) !== te ? null : o.value.id;
  }), { featuredCollection: a, featuredCollectionPromise: r } = Wt(), {
    isSectionSuggestionValid: l,
    isPageSuggestionValid: c,
    sectionSuggestionExists: d
  } = ms(), i = (f = null) => f ? { id: f, type: te } : o.value, u = (f) => b(void 0, null, function* () {
    var E;
    let w = null, v = null, C = null;
    if (!f)
      yield r.value, w = ((E = a.value) == null ? void 0 : E.name) || null;
    else if (v = cg(f, ag), C = lg(f, sg), v === -1)
      return [];
    const y = [], _ = yield ge.fetchPageSuggestionsByCollections({
      sourceLanguage: t.value,
      targetLanguage: n.value,
      featuredCollection: w,
      continueOffset: v,
      continueSeed: C,
      collectionName: f
    });
    _.continue_offset && (ag.value[f] = _.continue_offset), _.continue_seed && (sg.value[f] = _.continue_seed);
    const V = _.recommendations.filter(
      (N) => c(N)
    );
    return y.push(...V), y.forEach((N) => {
      N.suggestionProvider = i(f);
    }), y;
  }), g = () => u(s.value), m = () => b(void 0, null, function* () {
    var w;
    (yield u(
      ((w = a.value) == null ? void 0 : w.name) || null
    )).forEach(
      (v) => e.commit("suggestions/addPageSuggestion", v)
    );
  }), p = (f) => b(void 0, null, function* () {
    var N;
    let w = null, v = null, C = null;
    if (!f)
      yield r.value, w = ((N = a.value) == null ? void 0 : N.name) || null;
    else if (v = cg(
      f,
      rg
    ), C = lg(f, ig), v === -1)
      return [];
    yield r.value;
    const y = [], _ = yield ge.fetchSectionSuggestionsByCollections({
      sourceLanguage: t.value,
      targetLanguage: n.value,
      featuredCollection: w,
      continueOffset: v,
      continueSeed: C,
      collectionName: f
    });
    _.continue_offset && (rg.value[f] = _.continue_offset), _.continue_seed && (ig.value[f] = _.continue_seed);
    const V = _.recommendations.filter(
      (x) => l(x)
    ), E = _.recommendations.filter(
      (x) => !l(x)
    );
    return y.push(...V), E.forEach((x) => {
      x && !d(x) && (x.isListable = !1, e.commit("suggestions/addSectionSuggestion", x));
    }), y.forEach((x) => {
      x.suggestionProvider = i(f);
    }), y;
  });
  return {
    fetchSectionSuggestionsByCollections: () => p(s.value),
    fetchPageSuggestionsByCollections: g,
    fetchPageSuggestionsByFeaturedCollections: m,
    doFetchPageSuggestionsByCollection: u,
    doFetchSectionSuggestionsByCollection: p
  };
}, Wy = window.Vuex.useStore, Xy = () => {
  const e = Wy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), o = {
    id: rn,
    type: We
  }, {
    getNextUnseenSectionSuggestionByCollection: s,
    getNextUnseenPageSuggestionByCollection: a
  } = Tr(), {
    isSectionSuggestionValid: r,
    isPageSuggestionValid: l,
    sectionSuggestionExists: c
  } = ms(), { featuredCollection: d, featuredCollectionPromise: i } = Wt(), {
    doFetchPageSuggestionsByCollection: u,
    doFetchSectionSuggestionsByCollection: g
  } = Ju(), m = (f, w, v, C, y) => b(void 0, null, function* () {
    var V;
    yield i.value;
    const _ = (V = d.value) == null ? void 0 : V.name;
    if (_) {
      let E = w(_);
      if (!E) {
        const [N = null, ...x] = yield f(_);
        E = N, x.forEach((B) => {
          e.commit(v, B);
        });
      }
      E && (C.push(E), y--);
    }
    return y;
  });
  return { fetchSectionSuggestionsPopular: (f) => b(void 0, null, function* () {
    const w = [];
    return f = yield m(
      g,
      s,
      "suggestions/addSectionSuggestion",
      w,
      f
    ), yield Vo(() => b(void 0, null, function* () {
      const v = yield ge.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let C = v.filter(
        (_) => r(_)
      );
      const y = v.filter(
        (_) => !r(_)
      );
      return C = C.slice(0, f), w.push(...C), y.forEach((_) => {
        _ && !c(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
      }), w.length >= f;
    })), w.forEach(
      (v) => v.suggestionProvider = o
    ), w;
  }), fetchPageSuggestionsPopular: (f) => b(void 0, null, function* () {
    const w = [];
    return f = yield m(
      u,
      a,
      "suggestions/addPageSuggestion",
      w,
      f
    ), yield Vo(() => b(void 0, null, function* () {
      let v = yield ge.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return v = v.filter(
        (C) => l(C)
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
const Ky = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', Yy = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', Qy = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', Jy = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', Zy = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', eC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', tC = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', nC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', oC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', sC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', aC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', iC = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', rC = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', lC = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', cC = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', uC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', dC = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', gC = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', mC = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Kf = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', pC = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', hC = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', fC = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', wC = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', vC = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', _C = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', SC = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', yC = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', CC = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', xC = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', bC = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', kC = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', $C = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', VC = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', EC = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', LC = '<circle cx="6" cy="6" r="3"/><circle cx="14" cy="6" r="3"/><path d="M14 10c3.31 0 6 1.79 6 4v2h-6v-2c0-1.48-1.21-2.77-3-3.46.88-.35 1.91-.54 3-.54m-8 0c3.31 0 6 1.79 6 4v2H0v-2c0-2.21 2.69-4 6-4"/>', Yf = Ky, TC = Yy, Qf = {
  ltr: Qy,
  shouldFlip: !0
}, Jf = {
  ltr: Jy,
  shouldFlip: !0
}, Zu = {
  ltr: Zy,
  shouldFlip: !0
}, Zf = eC, ew = tC, tw = nC, AC = oC, DC = sC, ps = aC, PC = iC, ed = rC, td = lC, Vu = cC, BC = uC, FC = {
  ltr: dC,
  shouldFlip: !0
}, NC = {
  ltr: gC,
  shouldFlip: !0
}, MC = mC, UC = {
  langCodeMap: {
    ar: Kf
  },
  default: pC
}, IC = {
  langCodeMap: {
    ar: Kf
  },
  default: hC
}, nw = fC, Ba = {
  ltr: wC,
  shouldFlip: !0
}, RC = vC, zC = _C, hs = {
  ltr: SC,
  shouldFlip: !0
}, nd = {
  ltr: yC,
  shouldFlip: !0
}, OC = {
  ltr: CC,
  shouldFlip: !0
}, ow = xC, jC = bC, Eu = kC, HC = $C, GC = VC, sw = EC, od = {
  ltr: LC,
  shouldFlip: !0
}, qC = {
  [an]: sw,
  [rn]: MC,
  [te]: Zu
}, WC = {
  [te]: NC,
  [Be]: RC
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
    return qC[this.provider] || null;
  }
  get expandableIcon() {
    return WC[this.provider] || this.icon;
  }
}
const ks = window.Vue.computed, { topics: ug, regions: dg } = mw.loader.require(
  "ext.cx.articlefilters"
), XC = (e) => new ya({
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
}), lo = () => {
  const e = fe(), { currentSuggestionFilters: t, setFilterURLParams: n } = P(), { featuredCollection: o, featuredCollectionFetched: s } = Wt(), {
    validateFilters: a,
    filtersValidatorError: r,
    isDefaultFilter: l,
    isPopularFilter: c,
    isEqualFilter: d
  } = zu(), i = new bt({
    id: an,
    type: We,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), u = new bt({
    id: rn,
    type: We,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), g = new bt({
    id: te,
    type: We,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollections: m, pageCollectionGroups: p, pageCollectionGroupsFetched: h } = Ar(), f = ks(() => {
    const D = new ya({
      id: We,
      type: We,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [i, u]
    });
    return Object.keys(p.value).length > 1 && D.filters.push(g), D;
  }), w = () => {
    const D = me({}, p.value);
    delete D.ungrouped;
    const z = [];
    for (const Q in D) {
      const $e = D[Q].map(
        (_e) => new bt({
          id: _e.name,
          label: _e.name,
          type: te
        })
      ), xe = new bt({
        id: Q,
        label: Q,
        type: te,
        subFilters: $e
      });
      z.push(xe);
    }
    const K = (p.value.ungrouped || []).map(
      (Q) => new bt({
        id: Q.name,
        label: Q.name,
        type: te
      })
    );
    return [...z, ...K];
  }, v = ks(
    () => new ya({
      id: te,
      type: te,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: w()
    })
  ), C = new ya({
    id: Be,
    type: Be,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: dg.map(
      (D) => new bt({
        id: D.id,
        label: D.label,
        type: Be,
        subFilters: D.countries.map(
          (z) => new bt({
            id: z.id,
            label: z.label,
            type: Be
          })
        )
      })
    )
  }), y = ks(() => {
    const D = [
      f.value,
      ...ug.map(XC),
      C
    ];
    return v.value.filters.length && D.splice(1, 0, v.value), D;
  }), _ = ks(
    () => !h.value || !s.value
  ), V = ks(
    () => {
      var D, z;
      return new bt({
        id: (D = o.value) == null ? void 0 : D.name,
        label: (z = o.value) == null ? void 0 : z.name,
        type: te
      });
    }
  ), E = () => {
    if (_.value)
      return [];
    const D = x(), z = [];
    return o.value && z.push(V.value), !l(D) && !c(D) && !d(D, V.value) && z.push(D), z.push(i, u), z;
  }, N = (D) => {
    n(D.type, D.id);
  }, x = () => t.value.type === qt ? new bt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : y.value.flatMap((D) => D.filters).flatMap((D) => [D, ...D.subFilters || []]).find(B), B = (D) => d(D, t.value);
  return {
    allFilters: y,
    getFiltersSummary: E,
    selectFilter: N,
    isFilterSelected: B,
    getArticleTopics: (D) => {
      const K = ug.flatMap((Q) => Q.topics).find((Q) => Q.topicId === D);
      return K ? K.articletopics : [];
    },
    waitingForPageCollectionsFetch: _,
    findSelectedFilter: x,
    validateURLFilterWithCollections: () => {
      if (!h.value)
        return;
      const D = a(
        {
          type: t.value.type,
          id: t.value.id
        },
        m.value
      );
      n(D.type, D.id), r.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (D) => {
      const z = dg.find((K) => K.id === D);
      return z ? z.countries.map((K) => K.id) : [D];
    },
    setFeaturedCollectionFilterIfNeeded: () => {
      if (!l(t.value))
        return;
      const D = a(
        V.value,
        m.value
      );
      N(D);
    },
    isFilteringByFeaturedCollection: () => {
      var z;
      const D = x();
      return (D == null ? void 0 : D.id) === ((z = o.value) == null ? void 0 : z.name);
    }
  };
}, KC = window.Vuex.useStore, YC = () => {
  const e = KC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ms(), { getArticleTopics: l } = lo(), { featuredCollection: c, featuredCollectionPromise: d } = Wt();
  return {
    fetchPageSuggestionsByTopics: (g) => b(void 0, null, function* () {
      var w;
      yield d.value;
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
      yield d.value;
      const m = o.value.id, p = {
        id: m,
        type: tt
      }, h = l(m), f = [];
      return yield Vo(() => b(void 0, null, function* () {
        var y;
        const w = yield ge.fetchSectionSuggestionsByTopics({
          sourceLanguage: t.value,
          targetLanguage: n.value,
          topics: h,
          featuredCollection: (y = c.value) == null ? void 0 : y.name
        });
        let v = w.filter(
          (_) => s(_)
        );
        const C = w.filter(
          (_) => !s(_)
        );
        return v = v.slice(0, g), f.push(...v), C.forEach((_) => {
          _ && !r(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
        }), f.length >= g;
      })), f.forEach(
        (w) => w.suggestionProvider = p
      ), f;
    })
  };
}, QC = window.Vuex.useStore, JC = () => {
  const e = QC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ms(), { getCountries: l } = lo(), { featuredCollection: c, featuredCollectionPromise: d } = Wt();
  return {
    fetchPageSuggestionsByCountries: (g) => b(void 0, null, function* () {
      var p;
      yield d.value;
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
      yield d.value;
      const m = [];
      return yield Vo(() => b(void 0, null, function* () {
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
}, ZC = window.Vuex.useStore, ex = () => {
  const e = ZC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ms();
  return {
    fetchPageSuggestionsBySeed: (d) => b(void 0, null, function* () {
      const i = o.value.id;
      let u = yield ge.fetchPageSuggestions(
        t.value,
        n.value,
        i
      );
      return u = u.filter(
        (g) => a(g)
      ), u = u.slice(0, d), u.forEach(
        (g) => g.suggestionProvider = {
          id: i,
          type: qt
        }
      ), u;
    }),
    fetchSectionSuggestionsBySeed: (d) => b(void 0, null, function* () {
      const i = [], u = o.value.id;
      return yield Vo(() => b(void 0, null, function* () {
        const g = yield ge.fetchSectionSuggestions(
          t.value,
          n.value,
          u
        );
        if (!g)
          return !1;
        let m = g.filter(
          (h) => s(h)
        );
        const p = g.filter(
          (h) => !s(h)
        );
        return m = m.slice(0, d), i.push(...m), p.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), i.length >= d;
      })), i.forEach(
        (g) => g.suggestionProvider = {
          id: u,
          type: qt
        }
      ), i;
    })
  };
}, tx = () => {
  const { currentSuggestionFilters: e } = P(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = My(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = Xy(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = YC(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: c
  } = JC(), {
    fetchPageSuggestionsByCollections: d,
    fetchSectionSuggestionsByCollections: i
  } = Ju(), { fetchPageSuggestionsBySeed: u, fetchSectionSuggestionsBySeed: g } = ex(), m = {
    [an]: t,
    [rn]: o,
    [te]: d,
    [tt]: a,
    [Be]: l,
    [qt]: u
  }, p = {
    [an]: n,
    [rn]: s,
    [te]: i,
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
}, Br = () => {
  const { inFeaturedCollection: e } = sd(), t = (s) => {
    const a = {}, r = {};
    for (const l of s) {
      const { featuredCollection: c, featuredCollectionPromise: d } = Wt(l);
      a[l] = c, r[l] = d.value;
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
      ), c = Object.keys(l), { featuredCollections: d, featuredCollectionPromises: i } = t(c);
      yield Promise.all(Object.values(i));
      const u = [];
      for (const h in l) {
        const f = l[h], w = d[h];
        if (!((p = w.value) != null && p.name))
          continue;
        const v = n(
          f,
          (C) => C.sourceLanguage
        );
        for (const C in v) {
          const y = v[C], _ = y.map((E) => r(E)), V = e(
            null,
            C,
            _,
            w.value.name
          );
          u.push({ promise: V, items: y });
        }
      }
      const g = u.map(({ promise: h }) => h), m = yield Promise.all(g);
      return u.forEach(({ items: h }, f) => {
        const w = m[f];
        for (const v of h)
          v.inFeaturedCollection = w[r(v)];
      }), s;
    });
  }
  return {
    addFeaturedCollectionFlag: o
  };
}, nx = window.Vuex.useStore, ad = () => {
  const e = nx(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Tr(), o = ro(), { addFeaturedCollectionFlag: s } = Br(), { isFilteringByFeaturedCollection: a } = lo(), r = () => {
    const m = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - m.length % p;
  }, l = () => {
    const m = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - m.length % p;
  }, {
    getCurrentPageSuggestionProvider: c,
    getCurrentSectionSuggestionProvider: d
  } = tx(), i = (m) => {
    try {
      const p = m.map((h) => h.sourceTitle);
      if (p.length) {
        const h = m[0].sourceLanguage;
        return o(h, p);
      }
    } catch (p) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const m = r(), h = yield d()(
        m
      );
      !a() && h.length > 0 && (yield s(h, {
        titleGetter: (f) => f.sourceTitle
      })), h.forEach(
        (f) => e.commit("suggestions/addSectionSuggestion", f)
      ), i(h), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const m = l(), h = yield c()(
        m
      );
      !a() && h.length > 0 && (yield s(h, {
        titleGetter: (f) => f.sourceTitle
      })), h.forEach(
        (f) => e.commit("suggestions/addPageSuggestion", f)
      ), i(h), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, ox = window.Vuex.useStore, aw = () => {
  const e = ox();
  return (t) => b(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ge.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, sx = window.Vuex.useStore, iw = () => {
  const e = sx(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = ad(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Tr(), { targetLanguageURLParameter: a } = P(), r = aw();
  return () => b(void 0, null, function* () {
    const l = s(0), c = o(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, i = l.length === d, u = c.length === d;
    i && u || (yield r(a.value), t(), n());
  });
}, ax = window.Vuex.useStore, ix = window.Vue.ref, gl = /* @__PURE__ */ new Map(), gg = ix([]), Fa = () => {
  const e = ax(), t = ro();
  return { loadSuggestion: (s, a, r) => {
    const l = `${s}:${a}:${r}`;
    if (gl.has(l))
      return gl.get(l);
    const d = (() => b(void 0, null, function* () {
      const i = yield ge.fetchSectionSuggestion(
        s,
        r,
        a
      );
      try {
        if (yield t(s, [r]), !i) {
          const u = e.getters["mediawiki/getPage"](
            s,
            r
          );
          return new oo({
            sourceLanguage: s,
            targetLanguage: a,
            sourceTitle: r,
            langLinksCount: u.langLinksCount,
            size: u.articleSize,
            wikidataId: u.wikidataId
          });
        }
      } catch (u) {
        const g = new Error(
          `No page metadata found for title ${r} and language pair ${s}-${a}. ${u}`
        );
        throw mw.errorLogger.logError(g, "error.contenttranslation"), g;
      }
      return gg.value.push(i), i;
    }))();
    return gl.set(l, d), d;
  }, getLoadedSuggestion: (s, a, r) => gg.value.find(
    (l) => l.sourceLanguage === s && l.targetLanguage === a && l.sourceTitle === r
  ) || null };
}, mg = window.Vue.computed, rx = window.Vuex.useStore, cn = () => {
  const e = rx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = P(), s = mg(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = mg(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, c) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(c)
  };
}, rw = window.Vuex.useStore, { setLanguageURLParams: lx } = P(), id = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), lx(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, lw = () => {
  const e = rw(), t = iw();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = ze(e);
    n === o && (n = a.value, o = s.value), id(e, n, o), t();
  };
}, cx = () => {
  const e = rw(), { loadSuggestion: t } = Fa(), { currentLanguageTitleGroup: n, targetPageExists: o } = cn(), s = ro();
  return (a, r) => b(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      setPageURLParam: d,
      clearSectionURLParameter: i
    } = P();
    a === r && (a = c.value, r = l.value);
    const u = n.value.getTitleForLanguage(a);
    id(e, a, r), d(u), o.value ? (i(), yield t(
      l.value,
      c.value,
      u
    )) : yield s(l.value, [u]);
  });
}, ux = window.Vuex.useStore, dx = window.Vue.ref, pg = dx(!1), cw = () => {
  const e = ux(), { supportedLanguageCodes: t, fetchSupportedLanguageCodes: n } = Aa(), { sourceLanguageURLParameter: o, targetLanguageURLParameter: s } = P(), a = () => {
    const l = Z.getCurrentWikiLanguageCode(), c = (p) => t.value.includes(p), d = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, i = [
      s.value,
      mw.storage.get("cxTargetLanguage"),
      l,
      d.targetLanguage
    ], u = [
      o.value,
      mw.storage.get("cxSourceLanguage"),
      d.sourceLanguage,
      l,
      d.targetLanguage
    ], g = i.find(
      (p) => c(p)
    );
    return { sourceLanguage: u.find(
      (p) => c(p) && p !== g
    ), targetLanguage: g };
  };
  return { initializeApplicationLanguages: () => b(void 0, null, function* () {
    yield n();
    const { sourceLanguage: l, targetLanguage: c } = a();
    id(e, l, c), pg.value = !0;
  }), applicationLanguagesInitialized: pg };
};
const gx = window.Vue.resolveDynamicComponent, hg = window.Vue.openBlock, fg = window.Vue.createBlock, mx = window.Vue.Transition, $s = window.Vue.withCtx, Vs = window.Vue.createVNode, px = window.Vue.resolveComponent, ml = window.Vue.unref, hx = window.Vuex.useStore, wg = window.Vue.computed, fx = window.Vue.onMounted, wx = window.Vue.inject, vx = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = P(), { initializeApplicationLanguages: n } = cw();
    t(), n();
    const o = wx("breakpoints"), s = wg(() => o.value.mobile), a = hx(), r = wg(
      () => a.state.application.autoSavePending
    );
    return fx(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && yf.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((c) => {
          c instanceof us && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, c) => {
      const d = px("router-view");
      return hg(), fg(ml(y0), { id: "contenttranslation" }, {
        default: $s(() => [
          Vs(ml(I), { class: "cx-container" }, {
            default: $s(() => [
              Vs(ml(k), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: $s(() => [
                  Vs(d, null, {
                    default: $s(({ Component: i, route: u }) => [
                      Vs(mx, {
                        name: s.value ? u.meta.transitionName : ""
                      }, {
                        default: $s(() => [
                          (hg(), fg(gx(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Vs(N1)
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
}, _x = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, Sx = {
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
class uw {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new uw(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const vg = (e) => {
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
class yx {
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
    const t = vg((s = this.user) == null ? void 0 : s.content), n = vg((a = this.mt) == null ? void 0 : a.content);
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
    targetTitle: d,
    targetUrl: i,
    sectionTranslations: u
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
      targetTitle: d
    }), this.targetUrl = i, this.sectionTranslations = u;
  }
}
const Fr = mw.user.isAnon() ? void 0 : "user", dw = (e) => {
  if (e === "assertuserfailed")
    throw new us();
};
function gw(e, t = null) {
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
        const c = yield gw(
          e,
          s.continue.offset
        );
        r = r.concat(c);
      }
      return r;
    }));
  });
}
function Cx(e) {
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
      (a) => new yx(a)
    );
  });
}
function xx(e, t, n, o, s) {
  return b(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== le.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = Z.getCXServerUrl(a);
    return fetch(r, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (l) => Promise.all([l.json(), Promise.resolve(l.ok)])
    ).then(([l, c]) => {
      var i, u;
      if (!c) {
        const g = l.detail || l.type || l.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(g);
      }
      return (u = (i = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(l.contents)) == null ? void 0 : i.groups) == null ? void 0 : u.content;
    }).catch((l) => Promise.reject(l));
  });
}
const bx = (e, t, n) => {
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
}, kx = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: r,
  revision: l,
  captchaId: c,
  captchaWord: d,
  publishTarget: i,
  sectionTranslationId: u,
  existingSectionTitle: g
}) => {
  const m = {
    assert: Fr,
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
    sectiontranslationid: u,
    existingsectiontitle: g
  };
  return c && (m.captchaid = c, m.captchaword = d), new mw.Api().postWithToken("csrf", m).then((h) => {
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
    dw(h);
    let w;
    return f = f || {}, f.exception ? w = f.exception.message : f.error ? w = f.error.info : w = "Unknown error", {
      publishFeedbackMessage: new so({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, $x = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: r,
  units: l,
  sectionId: c,
  isSandbox: d,
  progress: i
}) => {
  const u = {
    assert: Fr,
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
    issandbox: d,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", u).then((m) => m.sxsave.sectiontranslationid).catch((m, p) => {
    dw(m);
    let h;
    return p.exception ? (h = p.exception.message, mw.cx.eventlogging.stats.saveFailure(!0)) : p.error ? (h = p.error.info, p.error.code && p.error.code.indexOf("internal_api_error") === 0 && mw.cx.eventlogging.stats.saveFailure(!0)) : (h = "Unknown error", mw.cx.eventlogging.stats.saveFailure(!0)), new so({ text: h, status: "error" });
  });
}, Vx = (e) => {
  const t = {
    assert: Fr,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, Ex = () => {
  const e = {
    assert: Fr,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new rd(n.cxcheckunreviewed.translation)
  );
}, Lx = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, Tx = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, Ax = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), $t = {
  fetchTranslations: gw,
  fetchTranslationUnits: Cx,
  fetchSegmentTranslation: xx,
  parseTemplateWikitext: bx,
  publishTranslation: kx,
  saveTranslation: $x,
  deleteTranslation: Lx,
  fetchTranslatorStats: Ax,
  deleteCXTranslation: Tx,
  splitTranslation: Vx,
  checkUnreviewedTranslations: Ex
};
function Dx(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield $t.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const Px = {
  fetchTranslatorStats: Dx
}, Bx = {
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
}, Fx = {
  namespaced: !0,
  state: _x,
  getters: Sx,
  actions: Px,
  mutations: Bx
}, Nx = {
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
  appendixSectionTitles: ty
}, Mx = {
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
}, Ux = {
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
}, Ix = {
  namespaced: !0,
  state: Nx,
  getters: Mx,
  actions: {},
  mutations: Ux
}, Rx = {
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
}, zx = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== le.EMPTY_TEXT_PROVIDER_KEY,
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
function Ox(o) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield gs.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const jx = { fetchNearbyPages: Ox }, Hx = {
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
}, Gx = {
  namespaced: !0,
  state: Rx,
  getters: zx,
  actions: jx,
  mutations: Hx
}, qx = {
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
}, Wx = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = le.getStorageKey(
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
}, Xx = {
  namespaced: !0,
  state: qx,
  mutations: Wx
}, Kx = window.Vuex.createStore, Yx = Kx({
  modules: { translator: Fx, suggestions: Ix, mediawiki: Gx, application: Xx }
});
function Qx() {
  return pw().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function pw() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Jx = typeof Proxy == "function", Zx = "devtools-plugin:setup", eb = "plugin:settings:set";
let Po, Lu;
function tb() {
  var e;
  return Po !== void 0 || (typeof window != "undefined" && window.performance ? (Po = !0, Lu = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Po = !0, Lu = global.perf_hooks.performance) : Po = !1), Po;
}
function nb() {
  return tb() ? Lu.now() : Date.now();
}
class ob {
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
        return nb();
      }
    }, n && n.on(eb, (r, l) => {
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
      }), this.fallbacks[l](...c)) : (...c) => new Promise((d) => {
        this.targetQueue.push({
          method: l,
          args: c,
          resolve: d
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
function sb(e, t) {
  const n = e, o = pw(), s = Qx(), a = Jx && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Zx, e, t);
  else {
    const r = a ? new ob(n, s) : null;
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
const hw = window.Vue.getCurrentInstance, ls = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const nn = window.Vue.computed, Ca = window.Vue.unref, ab = window.Vue.watchEffect, fw = window.Vue.defineComponent, ib = window.Vue.reactive, ww = window.Vue.h, pl = window.Vue.provide, rb = window.Vue.ref, vw = window.Vue.watch, lb = window.Vue.shallowRef, cb = window.Vue.shallowReactive, ub = window.Vue.nextTick, Dn = typeof window != "undefined";
function db(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const oe = Object.assign;
function hl(e, t) {
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
const gb = /\/$/, mb = (e) => e.replace(gb, "");
function fl(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return l < c && l >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), a = t.slice(c + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = fb(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function pb(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function _g(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Sg(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && ao(t.matched[o], n.matched[s]) && _w(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ao(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function _w(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!hb(e[n], t[n]))
      return !1;
  return !0;
}
function hb(e, t) {
  return pt(e) ? yg(e, t) : pt(t) ? yg(t, e) : e === t;
}
function yg(e, t) {
  return pt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function fb(e, t) {
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
function wb(e) {
  if (!e)
    if (Dn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), mb(e);
}
const vb = /^[^#]+#/;
function _b(e, t) {
  return e.replace(vb, "#") + t;
}
function Sb(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Nr = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function yb(e) {
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
    t = Sb(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Cg(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Tu = /* @__PURE__ */ new Map();
function Cb(e, t) {
  Tu.set(e, t);
}
function xb(e) {
  const t = Tu.get(e);
  return Tu.delete(e), t;
}
let bb = () => location.protocol + "//" + location.host;
function Sw(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), _g(c, "");
  }
  return _g(n, e) + o + s;
}
function kb(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: g }) => {
    const m = Sw(e, location), p = n.value, h = t.value;
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
  function d(g) {
    s.push(g);
    const m = () => {
      const p = s.indexOf(g);
      p > -1 && s.splice(p, 1);
    };
    return a.push(m), m;
  }
  function i() {
    const { history: g } = window;
    g.state && g.replaceState(oe({}, g.state, { scroll: Nr() }), "");
  }
  function u() {
    for (const g of a)
      g();
    a = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", i);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", i, {
    passive: !0
  }), {
    pauseListeners: c,
    listen: d,
    destroy: u
  };
}
function xg(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Nr() : null
  };
}
function $b(e) {
  const { history: t, location: n } = window, o = {
    value: Sw(e, n)
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
  function a(c, d, i) {
    const u = e.indexOf("#"), g = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + c : bb() + e + c;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? Y("Error with push/replace State", m) : console.error(m), n[i ? "replace" : "assign"](g);
    }
  }
  function r(c, d) {
    const i = oe({}, t.state, xg(
      s.value.back,
      // keep back and forward entries but override current position
      c,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(c, i, !0), o.value = c;
  }
  function l(c, d) {
    const i = oe(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: c,
        scroll: Nr()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && Y(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const u = oe({}, xg(o.value, c, null), { position: i.position + 1 }, d);
    a(c, u, !1), o.value = c;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function Vb(e) {
  e = wb(e);
  const t = $b(e), n = kb(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = oe({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: _b.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Eb(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Y(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Vb(e);
}
function Lb(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function yw(e) {
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
var bg;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(bg || (bg = {}));
const Tb = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Db(t)}" via a navigation guard.`;
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
  return {}.NODE_ENV !== "production" ? oe(new Error(Tb[e](t)), {
    type: e,
    [Au]: !0
  }, t) : oe(new Error(), {
    type: e,
    [Au]: !0
  }, t);
}
function dn(e, t) {
  return e instanceof Error && Au in e && (t == null || !!(e.type & t));
}
const Ab = ["params", "query", "hash"];
function Db(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Ab)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const kg = "[^/]+?", Pb = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Bb = /[.+*?^${}()[\]/\\]/g;
function Fb(e, t) {
  const n = oe({}, Pb, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const d of e) {
    const i = d.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !d.length && (s += "/");
    for (let u = 0; u < d.length; u++) {
      const g = d[u];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        u || (s += "/"), s += g.value.replace(Bb, "\\$&"), m += 40;
      else if (g.type === 1) {
        const { value: p, repeatable: h, optional: f, regexp: w } = g;
        a.push({
          name: p,
          repeatable: h,
          optional: f
        });
        const v = w || kg;
        if (v !== kg) {
          m += 10;
          try {
            new RegExp(`(${v})`);
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${v}): ` + y.message);
          }
        }
        let C = h ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        u || (C = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && d.length < 2 ? `(?:/${C})` : "/" + C), f && (C += "?"), s += C, m += 20, f && (m += -8), h && (m += -20), v === ".*" && (m += -50);
      }
      i.push(m);
    }
    o.push(i);
  }
  if (n.strict && n.end) {
    const d = o.length - 1;
    o[d][o[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
  const r = new RegExp(s, n.sensitive ? "" : "i");
  function l(d) {
    const i = d.match(r), u = {};
    if (!i)
      return null;
    for (let g = 1; g < i.length; g++) {
      const m = i[g] || "", p = a[g - 1];
      u[p.name] = m && p.repeatable ? m.split("/") : m;
    }
    return u;
  }
  function c(d) {
    let i = "", u = !1;
    for (const g of e) {
      (!u || !i.endsWith("/")) && (i += "/"), u = !1;
      for (const m of g)
        if (m.type === 0)
          i += m.value;
        else if (m.type === 1) {
          const { value: p, repeatable: h, optional: f } = m, w = p in d ? d[p] : "";
          if (pt(w) && !h)
            throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const v = pt(w) ? w.join("/") : w;
          if (!v)
            if (f)
              g.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : u = !0);
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
function Nb(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Mb(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = Nb(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if ($g(o))
      return 1;
    if ($g(s))
      return -1;
  }
  return s.length - o.length;
}
function $g(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Ub = {
  type: 0,
  value: ""
}, Ib = /[a-zA-Z0-9_]/;
function Rb(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Ub]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${d}": ${m}`);
  }
  let n = 0, o = n;
  const s = [];
  let a;
  function r() {
    a && s.push(a), a = [];
  }
  let l = 0, c, d = "", i = "";
  function u() {
    d && (n === 0 ? a.push({
      type: 0,
      value: d
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: d,
      regexp: i,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), d = "");
  }
  function g() {
    d += c;
  }
  for (; l < e.length; ) {
    if (c = e[l++], c === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (d && u(), r()) : c === ":" ? (u(), n = 1) : g();
        break;
      case 4:
        g(), n = o;
        break;
      case 1:
        c === "(" ? n = 2 : Ib.test(c) ? g() : (u(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")" ? i[i.length - 1] == "\\" ? i = i.slice(0, -1) + c : n = 3 : i += c;
        break;
      case 3:
        u(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--, i = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), u(), r(), s;
}
function zb(e, t, n) {
  const o = Fb(Rb(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && Y(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const s = oe(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Ob(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Lg({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, u, g) {
    const m = !g, p = jb(i);
    ({}).NODE_ENV !== "production" && Wb(p, u), p.aliasOf = g && g.record;
    const h = Lg(t, i), f = [
      p
    ];
    if ("alias" in i) {
      const C = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const y of C)
        f.push(oe({}, p, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : p.components,
          path: y,
          // we might be the child of an alias
          aliasOf: g ? g.record : p
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let w, v;
    for (const C of f) {
      const { path: y } = C;
      if (u && y[0] !== "/") {
        const _ = u.record.path, V = _[_.length - 1] === "/" ? "" : "/";
        C.path = u.record.path + (y && V + y);
      }
      if ({}.NODE_ENV !== "production" && C.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (w = zb(C, u, h), {}.NODE_ENV !== "production" && u && y[0] === "/" && Xb(w, u), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && qb(g, w)) : (v = v || w, v !== w && v.alias.push(w), m && i.name && !Eg(w) && r(i.name)), p.children) {
        const _ = p.children;
        for (let V = 0; V < _.length; V++)
          a(_[V], w, g && g.children[V]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && c(w);
    }
    return v ? () => {
      r(v);
    } : xa;
  }
  function r(i) {
    if (yw(i)) {
      const u = o.get(i);
      u && (o.delete(i), n.splice(n.indexOf(u), 1), u.children.forEach(r), u.alias.forEach(r));
    } else {
      const u = n.indexOf(i);
      u > -1 && (n.splice(u, 1), i.record.name && o.delete(i.record.name), i.children.forEach(r), i.alias.forEach(r));
    }
  }
  function l() {
    return n;
  }
  function c(i) {
    let u = 0;
    for (; u < n.length && Mb(i, n[u]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[u].record.path || !Cw(i, n[u])); )
      u++;
    n.splice(u, 0, i), i.record.name && !Eg(i) && o.set(i.record.name, i);
  }
  function d(i, u) {
    let g, m = {}, p, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw cs(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const v = Object.keys(i.params || {}).filter((C) => !g.keys.find((y) => y.name === C));
        v.length && Y(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, m = oe(
        // paramsFromLocation is a new object
        Vg(
          u.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((v) => !v.optional).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Vg(i.params, g.keys.map((v) => v.name))
      ), p = g.stringify(m);
    } else if ("path" in i)
      p = i.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && Y(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((v) => v.re.test(p)), g && (m = g.parse(p), h = g.record.name);
    else {
      if (g = u.name ? o.get(u.name) : n.find((v) => v.re.test(u.path)), !g)
        throw cs(1, {
          location: i,
          currentLocation: u
        });
      h = g.record.name, m = oe({}, u.params, i.params), p = g.stringify(m);
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
      meta: Gb(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function Vg(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function jb(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Hb(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Hb(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Eg(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Gb(e) {
  return e.reduce((t, n) => oe(t, n.meta), {});
}
function Lg(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Du(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function qb(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Du.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Du.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Wb(e, t) {
  t && t.record.name && !e.name && !e.path && Y(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Xb(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Du.bind(null, n)))
      return Y(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Cw(e, t) {
  return t.children.some((n) => n === e || Cw(e, n));
}
const xw = /#/g, Kb = /&/g, Yb = /\//g, Qb = /=/g, Jb = /\?/g, bw = /\+/g, Zb = /%5B/g, ek = /%5D/g, kw = /%5E/g, tk = /%60/g, $w = /%7B/g, nk = /%7C/g, Vw = /%7D/g, ok = /%20/g;
function ld(e) {
  return encodeURI("" + e).replace(nk, "|").replace(Zb, "[").replace(ek, "]");
}
function sk(e) {
  return ld(e).replace($w, "{").replace(Vw, "}").replace(kw, "^");
}
function Pu(e) {
  return ld(e).replace(bw, "%2B").replace(ok, "+").replace(xw, "%23").replace(Kb, "%26").replace(tk, "`").replace($w, "{").replace(Vw, "}").replace(kw, "^");
}
function ak(e) {
  return Pu(e).replace(Qb, "%3D");
}
function ik(e) {
  return ld(e).replace(xw, "%23").replace(Jb, "%3F");
}
function rk(e) {
  return e == null ? "" : ik(e).replace(Yb, "%2F");
}
function Va(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && Y(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function lk(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(bw, " "), r = a.indexOf("="), l = Va(r < 0 ? a : a.slice(0, r)), c = r < 0 ? null : Va(a.slice(r + 1));
    if (l in t) {
      let d = t[l];
      pt(d) || (d = t[l] = [d]), d.push(c);
    } else
      t[l] = c;
  }
  return t;
}
function Tg(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = ak(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (pt(o) ? o.map((a) => a && Pu(a)) : [o && Pu(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function ck(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = pt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const uk = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Ag = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Mr = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Ew = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Bu = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Es() {
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
    const c = (u) => {
      u === !1 ? l(cs(4, {
        from: n,
        to: t
      })) : u instanceof Error ? l(u) : Lb(u) ? l(cs(2, {
        from: t,
        to: u
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof u == "function" && a.push(u), r());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? dk(c, t, n) : c);
    let i = Promise.resolve(d);
    if (e.length < 3 && (i = i.then(c)), {}.NODE_ENV !== "production" && e.length > 2) {
      const u = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        i = i.then((g) => c._called ? g : (Y(u), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !c._called) {
        Y(u), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((u) => l(u));
  });
}
function dk(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && Y(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function wl(e, t, n, o) {
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
        if (gk(l)) {
          const d = (l.__vccOpts || l)[t];
          d && s.push(to(d, n, o, a, r));
        } else {
          let c = l();
          ({}).NODE_ENV !== "production" && !("catch" in c) && (Y(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), s.push(() => c.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = db(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && to(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function gk(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Dg(e) {
  const t = ls(Mr), n = ls(Ew), o = nn(() => t.resolve(Ca(e.to))), s = nn(() => {
    const { matched: c } = o.value, { length: d } = c, i = c[d - 1], u = n.matched;
    if (!i || !u.length)
      return -1;
    const g = u.findIndex(ao.bind(null, i));
    if (g > -1)
      return g;
    const m = Pg(c[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Pg(i) === m && // avoid comparing the child with its parent
      u[u.length - 1].path !== m ? u.findIndex(ao.bind(null, c[d - 2])) : g
    );
  }), a = nn(() => s.value > -1 && fk(n.params, o.value.params)), r = nn(() => s.value > -1 && s.value === n.matched.length - 1 && _w(n.params, o.value.params));
  function l(c = {}) {
    return hk(c) ? t[Ca(e.replace) ? "replace" : "push"](
      Ca(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(xa) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Dn) {
    const c = hw();
    if (c) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(d), ab(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = r.value;
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
const mk = /* @__PURE__ */ fw({
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
  useLink: Dg,
  setup(e, { slots: t }) {
    const n = ib(Dg(e)), { options: o } = ls(Mr), s = nn(() => ({
      [Bg(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Bg(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : ww("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), pk = mk;
function hk(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function fk(e, t) {
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
function Pg(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Bg = (e, t, n) => e != null ? e : t != null ? t : n, wk = /* @__PURE__ */ fw({
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
    ({}).NODE_ENV !== "production" && _k();
    const o = ls(Bu), s = nn(() => e.route || o.value), a = ls(Ag, 0), r = nn(() => {
      let d = Ca(a);
      const { matched: i } = s.value;
      let u;
      for (; (u = i[d]) && !u.components; )
        d++;
      return d;
    }), l = nn(() => s.value.matched[r.value]);
    pl(Ag, nn(() => r.value + 1)), pl(uk, l), pl(Bu, s);
    const c = rb();
    return vw(() => [c.value, l.value, e.name], ([d, i, u], [g, m, p]) => {
      i && (i.instances[u] = d, m && m !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = m.leaveGuards), i.updateGuards.size || (i.updateGuards = m.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !ao(i, m) || !g) && (i.enterCallbacks[u] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, i = e.name, u = l.value, g = u && u.components[i];
      if (!g)
        return Fg(n.default, { Component: g, route: d });
      const m = u.props[i], p = m ? m === !0 ? d.params : typeof m == "function" ? m(d) : m : null, f = ww(g, oe({}, p, t, {
        onVnodeUnmounted: (w) => {
          w.component.isUnmounted && (u.instances[i] = null);
        },
        ref: c
      }));
      if ({}.NODE_ENV !== "production" && Dn && f.ref) {
        const w = {
          depth: r.value,
          name: u.name,
          path: u.path,
          meta: u.meta
        };
        (pt(f.ref) ? f.ref.map((C) => C.i) : [f.ref.i]).forEach((C) => {
          C.__vrv_devtools = w;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Fg(n.default, { Component: f, route: d }) || f
      );
    };
  }
});
function Fg(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const vk = wk;
function _k() {
  const e = hw(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function Ls(e, t) {
  const n = oe({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => Ek(o, ["instances", "children", "aliasOf"]))
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
function ei(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Sk = 0;
function yk(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = Sk++;
  sb({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((i, u) => {
      i.instanceData && i.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Ls(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: u }) => {
      if (u.__vrv_devtools) {
        const g = u.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Lw
        });
      }
      pt(u.__vrl_devtools) && (u.__devtoolsApi = s, u.__vrl_devtools.forEach((g) => {
        let m = Dw, p = "";
        g.isExactActive ? (m = Aw, p = "This is exactly active") : g.isActive && (m = Tw, p = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: p,
          backgroundColor: m
        });
      }));
    }), vw(t.currentRoute, () => {
      c(), s.notifyComponentUpdate(), s.sendInspectorTree(l), s.sendInspectorState(l);
    });
    const a = "router:navigations:" + o;
    s.addTimelineLayer({
      id: a,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((i, u) => {
      s.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: u.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: i },
          groupId: u.meta.__navigationId
        }
      });
    });
    let r = 0;
    t.beforeEach((i, u) => {
      const g = {
        guard: ei("beforeEach"),
        from: Ls(u, "Current Location during this navigation"),
        to: Ls(i, "Target location")
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
    }), t.afterEach((i, u, g) => {
      const m = {
        guard: ei("afterEach")
      };
      g ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, m.status = ei("❌")) : m.status = ei("✅"), m.from = Ls(u, "Current Location during this navigation"), m.to = Ls(i, "Target location"), s.addTimelineEvent({
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
      if (!d)
        return;
      const i = d;
      let u = n.getRoutes().filter((g) => !g.parent);
      u.forEach(Fw), i.filter && (u = u.filter((g) => (
        // save matches state based on the payload
        Fu(g, i.filter.toLowerCase())
      ))), u.forEach((g) => Bw(g, t.currentRoute.value)), i.rootNodes = u.map(Pw);
    }
    let d;
    s.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === l && c();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((m) => m.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: xk(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function Ck(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function xk(e) {
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
        display: e.keys.map((o) => `${o.name}${Ck(o)}`).join(" "),
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
const Lw = 15485081, Tw = 2450411, Aw = 8702998, bk = 2282478, Dw = 16486972, kk = 6710886;
function Pw(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: bk
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Dw
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Lw
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Aw
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Tw
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: kk
  });
  let o = n.__vd_id;
  return o == null && (o = String($k++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Pw)
  };
}
let $k = 0;
const Vk = /^\/(.*)\/([a-z]*)$/;
function Bw(e, t) {
  const n = t.matched.length && ao(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => ao(o, e.record))), e.children.forEach((o) => Bw(o, t));
}
function Fw(e) {
  e.__vd_match = !1, e.children.forEach(Fw);
}
function Fu(e, t) {
  const n = String(e.re).match(Vk);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Fu(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Va(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Fu(r, t));
}
function Ek(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Lk(e) {
  const t = Ob(e.routes, e), n = e.parseQuery || lk, o = e.stringifyQuery || Tg, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Es(), r = Es(), l = Es(), c = lb(Nn);
  let d = Nn;
  Dn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = hl.bind(null, (S) => "" + S), u = hl.bind(null, rk), g = (
    // @ts-expect-error: intentionally avoid the type check
    hl.bind(null, Va)
  );
  function m(S, T) {
    let L, F;
    return yw(S) ? (L = t.getRecordMatcher(S), F = T) : F = S, t.addRoute(F, L);
  }
  function p(S) {
    const T = t.getRecordMatcher(S);
    T ? t.removeRoute(T) : {}.NODE_ENV !== "production" && Y(`Cannot remove non-existent route "${String(S)}"`);
  }
  function h() {
    return t.getRoutes().map((S) => S.record);
  }
  function f(S) {
    return !!t.getRecordMatcher(S);
  }
  function w(S, T) {
    if (T = oe({}, T || c.value), typeof S == "string") {
      const U = fl(n, S, T.path), ie = t.resolve({ path: U.path }, T), st = s.createHref(U.fullPath);
      return {}.NODE_ENV !== "production" && (st.startsWith("//") ? Y(`Location "${S}" resolved to "${st}". A resolved location cannot start with multiple slashes.`) : ie.matched.length || Y(`No match found for location with path "${S}"`)), oe(U, ie, {
        params: g(ie.params),
        hash: Va(U.hash),
        redirectedFrom: void 0,
        href: st
      });
    }
    let L;
    if ("path" in S)
      ({}).NODE_ENV !== "production" && "params" in S && !("name" in S) && // @ts-expect-error: the type is never
      Object.keys(S.params).length && Y(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), L = oe({}, S, {
        path: fl(n, S.path, T.path).path
      });
    else {
      const U = oe({}, S.params);
      for (const ie in U)
        U[ie] == null && delete U[ie];
      L = oe({}, S, {
        params: u(U)
      }), T.params = u(T.params);
    }
    const F = t.resolve(L, T), M = S.hash || "";
    ({}).NODE_ENV !== "production" && M && !M.startsWith("#") && Y(`A \`hash\` should always start with the character "#". Replace "${M}" with "#${M}".`), F.params = i(g(F.params));
    const H = pb(o, oe({}, S, {
      hash: sk(M),
      path: F.path
    })), G = s.createHref(H);
    return {}.NODE_ENV !== "production" && (G.startsWith("//") ? Y(`Location "${S}" resolved to "${G}". A resolved location cannot start with multiple slashes.`) : F.matched.length || Y(`No match found for location with path "${"path" in S ? S.path : S}"`)), oe({
      fullPath: H,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: M,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Tg ? ck(S.query) : S.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: G
    });
  }
  function v(S) {
    return typeof S == "string" ? fl(n, S, c.value.path) : oe({}, S);
  }
  function C(S, T) {
    if (d !== S)
      return cs(8, {
        from: T,
        to: S
      });
  }
  function y(S) {
    return E(S);
  }
  function _(S) {
    return y(oe(v(S), { replace: !0 }));
  }
  function V(S) {
    const T = S.matched[S.matched.length - 1];
    if (T && T.redirect) {
      const { redirect: L } = T;
      let F = typeof L == "function" ? L(S) : L;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = v(F) : (
        // force empty params
        { path: F }
      ), F.params = {}), {}.NODE_ENV !== "production" && !("path" in F) && !("name" in F))
        throw Y(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return oe({
        query: S.query,
        hash: S.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in F ? {} : S.params
      }, F);
    }
  }
  function E(S, T) {
    const L = d = w(S), F = c.value, M = S.state, H = S.force, G = S.replace === !0, U = V(L);
    if (U)
      return E(
        oe(v(U), {
          state: typeof U == "object" ? oe({}, M, U.state) : M,
          force: H,
          replace: G
        }),
        // keep original redirectedFrom if it exists
        T || L
      );
    const ie = L;
    ie.redirectedFrom = T;
    let st;
    return !H && Sg(o, F, L) && (st = cs(16, { to: ie, from: F }), xe(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (st ? Promise.resolve(st) : B(ie, F)).catch((Ve) => dn(Ve) ? (
      // navigation redirects still mark the router as ready
      dn(
        Ve,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? Ve : $e(Ve)
    ) : (
      // reject any unknown error
      K(Ve, ie, F)
    )).then((Ve) => {
      if (Ve) {
        if (dn(
          Ve,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Sg(o, w(Ve.to), ie) && // and we have done it a couple of times
          T && // @ts-expect-error: added only in dev
          (T._count = T._count ? (
            // @ts-expect-error
            T._count + 1
          ) : 1) > 30 ? (Y(`Detected a possibly infinite redirection in a navigation guard when going from "${F.fullPath}" to "${ie.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : E(
            // keep options
            oe({
              // preserve an existing replacement but allow the redirect to override it
              replace: G
            }, v(Ve.to), {
              state: typeof Ve.to == "object" ? oe({}, M, Ve.to.state) : M,
              force: H
            }),
            // preserve the original redirectedFrom if any
            T || ie
          );
      } else
        Ve = X(ie, F, !0, G, M);
      return R(ie, F, Ve), Ve;
    });
  }
  function N(S, T) {
    const L = C(S, T);
    return L ? Promise.reject(L) : Promise.resolve();
  }
  function x(S) {
    const T = O.values().next().value;
    return T && typeof T.runWithContext == "function" ? T.runWithContext(S) : S();
  }
  function B(S, T) {
    let L;
    const [F, M, H] = Tk(S, T);
    L = wl(F.reverse(), "beforeRouteLeave", S, T);
    for (const U of F)
      U.leaveGuards.forEach((ie) => {
        L.push(to(ie, S, T));
      });
    const G = N.bind(null, S, T);
    return L.push(G), ce(L).then(() => {
      L = [];
      for (const U of a.list())
        L.push(to(U, S, T));
      return L.push(G), ce(L);
    }).then(() => {
      L = wl(M, "beforeRouteUpdate", S, T);
      for (const U of M)
        U.updateGuards.forEach((ie) => {
          L.push(to(ie, S, T));
        });
      return L.push(G), ce(L);
    }).then(() => {
      L = [];
      for (const U of H)
        if (U.beforeEnter)
          if (pt(U.beforeEnter))
            for (const ie of U.beforeEnter)
              L.push(to(ie, S, T));
          else
            L.push(to(U.beforeEnter, S, T));
      return L.push(G), ce(L);
    }).then(() => (S.matched.forEach((U) => U.enterCallbacks = {}), L = wl(H, "beforeRouteEnter", S, T), L.push(G), ce(L))).then(() => {
      L = [];
      for (const U of r.list())
        L.push(to(U, S, T));
      return L.push(G), ce(L);
    }).catch((U) => dn(
      U,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? U : Promise.reject(U));
  }
  function R(S, T, L) {
    l.list().forEach((F) => x(() => F(S, T, L)));
  }
  function X(S, T, L, F, M) {
    const H = C(S, T);
    if (H)
      return H;
    const G = T === Nn, U = Dn ? history.state : {};
    L && (F || G ? s.replace(S.fullPath, oe({
      scroll: G && U && U.scroll
    }, M)) : s.push(S.fullPath, M)), c.value = S, xe(S, T, L, G), $e();
  }
  let ae;
  function ee() {
    ae || (ae = s.listen((S, T, L) => {
      if (!j.listening)
        return;
      const F = w(S), M = V(F);
      if (M) {
        E(oe(M, { replace: !0 }), F).catch(xa);
        return;
      }
      d = F;
      const H = c.value;
      Dn && Cb(Cg(H.fullPath, L.delta), Nr()), B(F, H).catch((G) => dn(
        G,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? G : dn(
        G,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (E(
        G.to,
        F
        // avoid an uncaught rejection, let push call triggerError
      ).then((U) => {
        dn(
          U,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !L.delta && L.type === $a.pop && s.go(-1, !1);
      }).catch(xa), Promise.reject()) : (L.delta && s.go(-L.delta, !1), K(G, F, H))).then((G) => {
        G = G || X(
          // after navigation, all matched components are resolved
          F,
          H,
          !1
        ), G && (L.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !dn(
          G,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-L.delta, !1) : L.type === $a.pop && dn(
          G,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), R(F, H, G);
      }).catch(xa);
    }));
  }
  let ne = Es(), D = Es(), z;
  function K(S, T, L) {
    $e(S);
    const F = D.list();
    return F.length ? F.forEach((M) => M(S, T, L)) : ({}.NODE_ENV !== "production" && Y("uncaught error during route navigation:"), console.error(S)), Promise.reject(S);
  }
  function Q() {
    return z && c.value !== Nn ? Promise.resolve() : new Promise((S, T) => {
      ne.add([S, T]);
    });
  }
  function $e(S) {
    return z || (z = !S, ee(), ne.list().forEach(([T, L]) => S ? L(S) : T()), ne.reset()), S;
  }
  function xe(S, T, L, F) {
    const { scrollBehavior: M } = e;
    if (!Dn || !M)
      return Promise.resolve();
    const H = !L && xb(Cg(S.fullPath, 0)) || (F || !L) && history.state && history.state.scroll || null;
    return ub().then(() => M(S, T, H)).then((G) => G && yb(G)).catch((G) => K(G, S, T));
  }
  const _e = (S) => s.go(S);
  let Oe;
  const O = /* @__PURE__ */ new Set(), j = {
    currentRoute: c,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: f,
    getRoutes: h,
    resolve: w,
    options: e,
    push: y,
    replace: _,
    go: _e,
    back: () => _e(-1),
    forward: () => _e(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: D.add,
    isReady: Q,
    install(S) {
      const T = this;
      S.component("RouterLink", pk), S.component("RouterView", vk), S.config.globalProperties.$router = T, Object.defineProperty(S.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Ca(c)
      }), Dn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Oe && c.value === Nn && (Oe = !0, y(s.location).catch((M) => {
        ({}).NODE_ENV !== "production" && Y("Unexpected error when starting the router:", M);
      }));
      const L = {};
      for (const M in Nn)
        Object.defineProperty(L, M, {
          get: () => c.value[M],
          enumerable: !0
        });
      S.provide(Mr, T), S.provide(Ew, cb(L)), S.provide(Bu, c);
      const F = S.unmount;
      O.add(S), S.unmount = function() {
        O.delete(S), O.size < 1 && (d = Nn, ae && ae(), ae = null, c.value = Nn, Oe = !1, z = !1), F();
      }, {}.NODE_ENV !== "production" && Dn && yk(S, T, t);
    }
  };
  function ce(S) {
    return S.reduce((T, L) => T.then(() => x(L)), Promise.resolve());
  }
  return j;
}
function Tk(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((d) => ao(d, l)) ? o.push(l) : n.push(l));
    const c = e.matched[r];
    c && (t.matched.find((d) => ao(d, c)) || s.push(c));
  }
  return [n, o, s];
}
function nt() {
  return ls(Mr);
}
const Ak = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, Dk = (e) => {
  const t = Ak(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const Dt = window.Vue.unref, Bo = window.Vue.createVNode, gn = window.Vue.createElementVNode, Ng = window.Vue.renderSlot, Mg = window.Vue.withModifiers, vl = window.Vue.toDisplayString, _l = window.Vue.withCtx, Pk = window.Vue.openBlock, Bk = window.Vue.createElementBlock, Fk = window.Vue.createCommentVNode, Nk = { class: "col shrink pe-4" }, Mk = { class: "col" }, Uk = { class: "cx-translation__details column justify-between ma-0" }, Ik = { class: "row ma-0" }, Rk = { class: "col grow" }, zk = { class: "col shrink ps-2" }, Ok = ["dir", "textContent"], jk = ["dir", "textContent"], Hk = ["textContent"], Gk = window.Vuex.useStore, qk = window.Vue.computed, Nw = {
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
    const n = e, o = Gk(), s = (l, c) => {
      const d = o.getters["mediawiki/getPage"](l, c);
      return d == null ? void 0 : d.thumbnail;
    }, a = fe(), r = qk(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, c = Dk(n.translation.startTimestamp);
      return a.i18n(
        l[c.postfix],
        mw.language.convertNumber(c.value)
      );
    });
    return (l, c) => e.translation ? (Pk(), Bk("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: c[1] || (c[1] = Mg((d) => l.$emit("click"), ["stop"]))
    }, [
      gn("div", Nk, [
        Bo(Dt(Uu), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      gn("div", Mk, [
        gn("div", Uk, [
          gn("div", Ik, [
            gn("div", Rk, [
              Ng(l.$slots, "title")
            ]),
            gn("div", zk, [
              Bo(Dt(et), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: c[0] || (c[0] = Mg((d) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Ng(l.$slots, "mid-content"),
          Bo(Dt(I), { class: "cx-translation__footer ma-0" }, {
            default: _l(() => [
              Bo(Dt(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: _l(() => [
                  gn("span", {
                    class: "mw-ui-autonym",
                    dir: Dt(q.getDir)(e.translation.sourceLanguage),
                    textContent: vl(Dt(q.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, Ok),
                  Bo(Dt(et), {
                    icon: Dt(W0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  gn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: Dt(q.getDir)(e.translation.targetLanguage),
                    textContent: vl(Dt(q.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, jk)
                ]),
                _: 1
              }),
              Bo(Dt(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: _l(() => [
                  gn("span", {
                    textContent: vl(r.value)
                  }, null, 8, Hk)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : Fk("", !0);
  }
};
const Ug = window.Vue.unref, Wk = window.Vue.toDisplayString, Xk = window.Vue.createTextVNode, Kk = window.Vue.withCtx, Yk = window.Vue.openBlock, Qk = window.Vue.createBlock, Jk = window.Codex.CdxInfoChip, Ur = {
  __name: "CommunityPriorityBadge",
  setup(e) {
    return (t, n) => (Yk(), Qk(Ug(Jk), {
      icon: Ug(od),
      class: "cx-community-priority-badge"
    }, {
      default: Kk(() => [
        Xk(Wk(t.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const go = window.Vue.unref, Zk = window.Vue.toDisplayString, e8 = window.Vue.normalizeClass, t8 = window.Vue.createElementVNode, ti = window.Vue.openBlock, n8 = window.Vue.createElementBlock, Sl = window.Vue.createCommentVNode, ni = window.Vue.createVNode, Fo = window.Vue.withCtx, yl = window.Vue.createBlock, o8 = ["lang", "textContent"], s8 = ["lang", "innerHTML"], a8 = window.Vue.computed, i8 = window.Vue.inject, r8 = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: br,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = i8("colors").gray200, s = a8(
      () => {
        var c;
        return ((c = t.translation.progress) == null ? void 0 : c.any) * 100 || 0;
      }
    ), a = nt(), { setTranslationURLParams: r } = P(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (c, d) => (ti(), yl(Nw, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": go(wf),
      onActionIconClicked: d[0] || (d[0] = (i) => c.$emit("delete-translation")),
      onClick: l
    }, {
      title: Fo(() => [
        t8("h5", {
          class: e8(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Zk(e.translation.sourceTitle)
        }, null, 10, o8),
        e.translation.isLeadSectionTranslation ? Sl("", !0) : (ti(), n8("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, s8))
      ]),
      "mid-content": Fo(() => [
        e.translation.progress ? (ti(), yl(go(I), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Fo(() => [
            ni(go(k), null, {
              default: Fo(() => [
                ni(go(Sf), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: go(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Sl("", !0),
        e.translation.inFeaturedCollection ? (ti(), yl(go(I), {
          key: 1,
          class: "ma-0 py-2"
        }, {
          default: Fo(() => [
            ni(go(k), { shrink: "" }, {
              default: Fo(() => [
                ni(Ur)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Sl("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, l8 = window.Vuex.useStore, Mw = [], c8 = (e, t, n) => Mw.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), u8 = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Mw.push(o);
}, d8 = () => {
  const e = l8();
  return (t, n, o) => b(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !c8(t, n, o) && (s = yield ge.fetchSectionSuggestion(
      t,
      o,
      n
    ), u8(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Uw = window.Vue.ref, Iw = Uw(null), Nu = Uw(null), g8 = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), Iw.value = e;
}, m8 = (e) => {
  Nu.value = e;
}, Na = () => {
  const e = nt(), { loadSuggestion: t } = Fa(), { setTranslationURLParams: n } = P();
  return (o, s, a, r, l = null, c = !0) => b(void 0, null, function* () {
    g8(r), m8(l);
    const d = yield t(
      s,
      a,
      o
    );
    n(d), c && e.push({ name: "sx-translation-confirmer" });
  });
}, p8 = (e) => {
  const t = new URL(e, location.href), n = mw.config.get("wgArticlePath"), o = mw.config.get("wgScript");
  if (t.pathname === o) {
    const a = t.searchParams.get("title");
    return a ? mw.Title.newFromText(a) : null;
  }
  const [
    s
    /*, suffix*/
  ] = n.split("$1");
  if (s && t.pathname.startsWith(s)) {
    let a = t.pathname.slice(s.length);
    return a = decodeURIComponent(a), mw.Title.newFromText(a);
  }
  return null;
};
const Cl = window.Vue.withModifiers, Ig = window.Vue.toDisplayString, Rg = window.Vue.createElementVNode, at = window.Vue.unref, mn = window.Vue.createVNode, h8 = window.Vue.createTextVNode, Ts = window.Vue.openBlock, zg = window.Vue.createElementBlock, xl = window.Vue.createCommentVNode, bl = window.Vue.createBlock, Mn = window.Vue.withCtx, f8 = ["lang", "href", "textContent"], w8 = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, v8 = {
  key: 2,
  class: "flex"
}, _8 = ["innerHTML"], kl = window.Vue.computed, Og = window.Vue.ref, jg = window.Codex.CdxButton, $l = window.Codex.CdxIcon, S8 = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: rd,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Og(!0), o = Og(null), s = kl(() => {
      var m;
      return (m = o.value) == null ? void 0 : m.missingSections;
    }), a = kl(
      () => s.value && Object.keys(s.value)[0]
    );
    d8()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((m) => o.value = m).catch((m) => console.log(m)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = P(), c = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, d = Na(), i = (m) => {
      d(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), m && l(m);
    }, u = mw.config.get("wgNamespaceIds"), g = kl(() => {
      const m = p8(
        t.translation.targetUrl
      );
      return (m == null ? void 0 : m.getNamespaceId()) === u.user;
    });
    return (m, p) => (Ts(), bl(Nw, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: c
    }, {
      title: Mn(() => [
        Rg("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: p[0] || (p[0] = Cl(() => {
          }, ["stop"])),
          textContent: Ig(e.translation.sourceTitle)
        }, null, 8, f8)
      ]),
      "mid-content": Mn(() => [
        mn(at(I), { class: "ma-0" }, {
          default: Mn(() => [
            mn(at(k), null, {
              default: Mn(() => [
                g.value ? (Ts(), zg("div", w8, [
                  mn(at($l), {
                    icon: at(sw),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  h8(" " + Ig(m.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : xl("", !0),
                n.value ? (Ts(), bl(at(mt), { key: 1 })) : s.value ? (Ts(), zg("div", v8, [
                  mn(at(jg), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: p[1] || (p[1] = Cl((h) => i(a.value), ["stop"]))
                  }, {
                    default: Mn(() => [
                      mn(at($l), {
                        class: "me-1",
                        icon: at(Yf)
                      }, null, 8, ["icon"]),
                      Rg("span", { innerHTML: a.value }, null, 8, _8)
                    ]),
                    _: 1
                  }),
                  mn(at(jg), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": m.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: p[2] || (p[2] = Cl((h) => i(null), ["stop"]))
                  }, {
                    default: Mn(() => [
                      mn(at($l), { icon: at(td) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : xl("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e.translation.inFeaturedCollection ? (Ts(), bl(at(I), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Mn(() => [
            mn(at(k), { shrink: "" }, {
              default: Mn(() => [
                mn(Ur)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : xl("", !0)
      ]),
      _: 1
    }, 8, ["translation"]));
  }
}, Rw = "cx-translation-session-position-", zw = () => Rw + mw.user.sessionId(), y8 = () => {
  const e = parseInt(
    mw.storage.get(zw())
  );
  return isNaN(e) ? 0 : e;
}, C8 = function(e) {
  const t = zw();
  mw.storage.set(t, e);
}, x8 = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(Rw)).forEach((e) => mw.storage.remove(e));
}, b8 = () => {
  const e = y8();
  return e % 10 === 0 && x8(), C8(e + 1), e;
};
function k8(e) {
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
    content_translation_session_position: b8()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : zf(r).then((c) => {
    mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: c,
        user_global_edit_count_bucket: ny(c)
      })
    );
  });
}
const $8 = window.Vuex.useStore, V8 = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], Lt = () => {
  const e = $8(), { previousRoute: t } = ze(e), n = {
    event_source: { remove: !0 },
    translation_source_language: { remove: !1 },
    translation_target_language: { remove: !1 },
    translation_source_title: { remove: !0 }
  }, o = (s) => {
    for (const [a, { remove: r }] of Object.entries(n))
      if (s[a] === null || s[a] === "") {
        const l = V8(
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
  return (s) => (s.access_method || (s.access_method = Gt ? "desktop" : "mobile web"), o(s), k8(s));
}, E8 = window.Vuex.useStore, L8 = () => {
  const { commit: e } = E8(), t = Lt();
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
const T8 = window.Vue.resolveDirective, Vl = window.Vue.createElementVNode, A8 = window.Vue.withDirectives, El = window.Vue.unref, Hg = window.Vue.createVNode, Gg = window.Vue.withCtx, D8 = window.Vue.openBlock, P8 = window.Vue.createBlock, B8 = { class: "pa-4" }, F8 = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, N8 = {
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
    const n = e, o = t, s = () => o("update:modelValue", !1), a = L8(), r = () => {
      a(n.translation), s();
    };
    return (l, c) => {
      const d = T8("i18n");
      return D8(), P8(El(Vt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Gg(() => [
          Vl("div", F8, [
            Hg(El(Ke), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Hg(El(Ke), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Gg(() => [
          Vl("div", B8, [
            A8(Vl("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function M8(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield U8(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function qg(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(q.sortByAutonym) : (yield M8(e, t, n)).sort(q.sortByAutonym);
  });
}
function U8(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function I8() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function R8(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const z8 = window.Vue.computed;
function O8(e, t) {
  const n = z8(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = q.getAutonym(t.value[s]);
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
const Ll = window.Vue.ref, Tl = window.Vue.watch, j8 = window.Vue.computed;
function Ow(e, t, n) {
  const o = Ll(""), s = Ll(-1), a = Ll(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = j8(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), c = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Tl(e, () => {
    s.value = -1;
  }), Tl(t, () => {
    t.value && l.value.length > 0 && (s.value = 0);
  }), Tl(s, () => b(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
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
const oi = window.Vue.renderSlot, Te = window.Vue.unref, H8 = window.Vue.isRef, Wg = window.Vue.createVNode, As = window.Vue.withModifiers, Ds = window.Vue.withKeys, Un = window.Vue.createElementVNode, G8 = window.Vue.resolveDirective, si = window.Vue.withDirectives, Al = window.Vue.renderList, Dl = window.Vue.Fragment, pn = window.Vue.openBlock, hn = window.Vue.createElementBlock, Xg = window.Vue.toDisplayString, ai = window.Vue.normalizeClass, Pl = window.Vue.createCommentVNode, q8 = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, W8 = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, X8 = { class: "results px-3 pt-4" }, K8 = { class: "results-header ps-8 pb-2" }, Y8 = { class: "results-languages--suggestions pa-0 ma-0" }, Q8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], J8 = { class: "results px-3 pt-4" }, Z8 = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, e2 = ["lang", "dir", "aria-selected", "onClick", "textContent"], t2 = ["aria-selected"], n2 = { class: "no-results px-3 py-4" }, o2 = { class: "ps-8" }, ii = window.Vue.ref, s2 = window.Vue.watch, a2 = window.Vue.onMounted, Kg = window.Vue.computed, jw = {
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
      default: I8
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = ii(null), a = ii(""), r = ii([]), l = ii(n.suggestions), c = Kg(
      () => R8(r.value)
    ), d = Kg(() => {
      const y = r.value.length;
      return y < 10 ? "few-results" : y < 30 ? "some-results" : "many-results";
    }), i = (y) => o("select", y), u = () => o("close"), { autocompletion: g, onTabSelect: m } = O8(
      a,
      r
    ), { next: p, prev: h, keyboardNavigationContainer: f, selectedItem: w } = Ow(a, r, l), v = () => {
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
    return s2(a, cd(() => b(this, null, function* () {
      r.value = yield qg(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), a2(() => b(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield qg(
        n.languages,
        "",
        n.searchAPI
      );
    })), (y, _) => {
      const V = G8("i18n");
      return pn(), hn("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        oi(y.$slots, "search", {}, () => [
          Un("div", q8, [
            Wg(Te(xu), {
              value: Te(g),
              "onUpdate:value": _[0] || (_[0] = (E) => H8(g) ? g.value = E : null),
              icon: Te(Ed),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Wg(Te(xu), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": _[1] || (_[1] = (E) => a.value = E),
              class: "mw-ui-language-selector__search pa-4",
              icon: Te(Ed),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Ds(As(v, ["prevent"]), ["enter"]),
                Ds(As(Te(p), ["stop", "prevent"]), ["down"]),
                Ds(As(Te(h), ["stop", "prevent"]), ["up"]),
                Ds(As(u, ["prevent"]), ["esc"]),
                Ds(As(Te(m), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        Un("section", W8, [
          e.suggestions.length && !a.value ? oi(y.$slots, "suggestions", { key: 0 }, () => [
            Un("section", X8, [
              si(Un("p", K8, null, 512), [
                [V, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Un("ul", Y8, [
                (pn(!0), hn(Dl, null, Al(e.suggestions, (E) => (pn(), hn("li", {
                  key: E,
                  class: ai(["language ma-0", { "language--selected": E === Te(w) }]),
                  lang: E,
                  dir: Te(q.getDir)(E),
                  "aria-selected": E === Te(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (N) => i(E),
                  textContent: Xg(Te(q.getAutonym)(E))
                }, null, 10, Q8))), 128))
              ])
            ])
          ]) : Pl("", !0),
          c.value.length ? oi(y.$slots, "search", { key: 1 }, () => [
            Un("section", J8, [
              e.suggestions.length && !a.value ? si((pn(), hn("p", Z8, null, 512)), [
                [V, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Pl("", !0),
              (pn(!0), hn(Dl, null, Al(c.value, (E, N) => (pn(), hn("ul", {
                key: N,
                class: ai(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (pn(!0), hn(Dl, null, Al(E, (x) => (pn(), hn("li", {
                  key: x,
                  class: ai(["language ma-0", { "language--selected": x === Te(w) }]),
                  lang: x,
                  dir: Te(q.getDir)(x),
                  role: "option",
                  "aria-selected": x === Te(w) || null,
                  tabindex: "-1",
                  onClick: (B) => i(x),
                  textContent: Xg(Te(q.getAutonym)(x))
                }, null, 10, e2))), 128)),
                e.allOptionEnabled && !a.value ? si((pn(), hn("li", {
                  key: 0,
                  class: ai(["language ma-0", { "language--selected": Te(w) === "all" }]),
                  role: "option",
                  "aria-selected": Te(w) === "all" || null,
                  tabindex: "-1",
                  onClick: _[2] || (_[2] = (x) => i("all"))
                }, null, 10, t2)), [
                  [V, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Pl("", !0)
              ], 2))), 128))
            ])
          ]) : oi(y.$slots, "noresults", { key: 2 }, () => [
            Un("section", n2, [
              si(Un("h3", o2, null, 512), [
                [V, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const i2 = window.Vue.resolveDirective, Yg = window.Vue.withDirectives, Ps = window.Vue.openBlock, Bs = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ae = window.Vue.unref, Qg = window.Vue.toDisplayString, Pt = window.Vue.createVNode, Jg = window.Vue.withModifiers, mo = window.Vue.withCtx, r2 = window.Vue.normalizeClass, l2 = {
  key: 0,
  class: "mw-ui-autonym"
}, c2 = ["lang", "dir", "textContent"], u2 = {
  key: 0,
  class: "mw-ui-autonym"
}, d2 = ["lang", "dir", "textContent"], Fs = window.Vue.computed, g2 = window.Vue.inject, m2 = window.Vue.ref, Zg = window.Codex.CdxButton, Bl = window.Codex.CdxIcon, Sr = {
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
    const n = e, o = t, s = g2("breakpoints"), a = Fs(() => s.value.mobile), r = m2(null), l = Fs(() => !!r.value), c = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, u = Fs(() => {
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
    }, m = Fs(
      () => n.selectedSourceLanguage === "all"
    ), p = Fs(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const w = i2("i18n");
      return Ps(), Bs("div", {
        class: r2(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        Pt(Ae(I), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: mo(() => [
            Pt(Ae(k), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: mo(() => [
                Pt(Ae(Zg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Jg(c, ["stop"])
                }, {
                  default: mo(() => [
                    m.value ? Yg((Ps(), Bs("span", l2, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ps(), Bs("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ae(q.getDir)(e.selectedSourceLanguage),
                      textContent: Qg(Ae(q.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, c2)),
                    Pt(Ae(Bl), {
                      size: "x-small",
                      icon: Ae(Vu)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            Pt(Ae(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: mo(() => [
                Pt(Ae(Bl), { icon: Ae(Qf) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Pt(Ae(k), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: mo(() => [
                Pt(Ae(Zg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Jg(d, ["stop"])
                }, {
                  default: mo(() => [
                    p.value ? Yg((Ps(), Bs("span", u2, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ps(), Bs("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ae(q.getDir)(e.selectedTargetLanguage),
                      textContent: Qg(Ae(q.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, d2)),
                    Pt(Ae(Bl), {
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
          default: mo(() => [
            Pt(Ae(jw), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: u.value,
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
const em = window.Vue.unref, p2 = window.Vue.createVNode, ri = window.Vue.createElementVNode, tm = window.Vue.toDisplayString, h2 = window.Vue.openBlock, f2 = window.Vue.createElementBlock, w2 = { class: "cx-list-empty-placeholder pa-4" }, v2 = { class: "cx-list-empty-placeholder__icon-container" }, _2 = { class: "cx-list-empty-placeholder__icon" }, S2 = ["textContent"], y2 = ["textContent"], C2 = window.Codex.CdxIcon, Hw = {
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
    return (t, n) => (h2(), f2("div", w2, [
      ri("div", v2, [
        ri("div", _2, [
          p2(em(C2), { icon: em(nw) }, null, 8, ["icon"])
        ])
      ]),
      ri("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: tm(e.title)
      }, null, 8, S2),
      ri("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: tm(e.description)
      }, null, 8, y2)
    ]));
  }
}, x2 = window.Vuex.useStore, b2 = window.Vue.ref, li = b2({ draft: !1, published: !1 }), fs = () => {
  const e = x2(), t = ro(), { addFeaturedCollectionFlag: n } = Br(), o = (a) => b(void 0, null, function* () {
    let r = yield $t.fetchTranslations(a);
    yield n(r, {
      titleGetter: (c) => c.sourceTitle
    }), e.commit("translator/clearTranslationsByStatus", a), r.forEach(
      (c) => e.commit("translator/addTranslation", c)
    );
    const l = {};
    for (const c of r) {
      const d = c.sourceLanguage;
      l[d] = l[d] || [], l[d].push(c);
    }
    li.value[a] = !0;
    for (const [c, d] of Object.entries(l))
      t(
        c,
        d.map((i) => i.sourceTitle)
      ), d.forEach((i) => {
        const { targetLanguage: u, targetTitle: g } = i, m = !!e.getters["mediawiki/getPage"](
          u,
          g
        );
        g && !m && e.commit(
          "mediawiki/addPage",
          new ds({ title: g, pagelanguage: u })
        );
      });
  });
  return {
    fetchTranslationsByStatus: o,
    fetchAllTranslations: () => {
      const r = Object.keys(li.value).filter(
        (l) => !li.value[l]
      ).map(
        (l) => o(l)
      );
      return Promise.all(r).catch((l) => {
        mw.log.error("[CX] Error while fetching translations", l);
      });
    },
    translationsFetched: li
  };
};
const k2 = window.Vue.toDisplayString, Fl = window.Vue.normalizeClass, nm = window.Vue.createElementVNode, Kt = window.Vue.openBlock, No = window.Vue.createBlock, ci = window.Vue.createCommentVNode, om = window.Vue.unref, sm = window.Vue.renderList, am = window.Vue.Fragment, ui = window.Vue.createElementBlock, $2 = window.Vue.createVNode, im = window.Vue.withCtx, V2 = ["textContent"], E2 = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, L2 = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, di = window.Vue.ref, Bt = window.Vue.computed, T2 = window.Vue.inject, A2 = window.Vuex.useStore, rm = {
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
    const t = e, n = di("all"), o = di("all"), s = A2(), { translationsFetched: a } = fs(), r = Bt(
      () => a.value[t.translationStatus]
    ), l = di(!1), c = di(null), d = Bt(
      () => t.translationStatus === "draft"
    ), i = Bt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), u = Bt(
      () => n.value === "all"
    ), g = Bt(
      () => o.value === "all"
    ), m = Bt(
      () => i.value.filter(
        (_) => (u.value || _.sourceLanguage === n.value) && (g.value || _.targetLanguage === o.value)
      ).sort((_, V) => _.lastUpdatedTimestamp < V.lastUpdatedTimestamp)
    ), p = Bt(() => {
      const _ = i.value.map(
        (V) => V.targetLanguage
      );
      return [...new Set(_)];
    }), h = Bt(() => {
      const _ = i.value.map(
        (V) => V.sourceLanguage
      );
      return [...new Set(_)];
    }), f = (_) => {
      c.value = _, l.value = !0;
    }, w = Bt(() => t.activeStatus === t.translationStatus), v = T2("breakpoints"), C = Bt(() => v.value.mobile), y = Bt(
      () => C.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (_, V) => w.value ? (Kt(), No(om(Ze), {
      key: 0,
      class: Fl(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: im(() => [
        nm("div", {
          class: Fl(["cx-translation-list__header", y.value])
        }, [
          nm("h3", {
            class: Fl(["px-4 mw-ui-card__title mb-0", { "pb-4": C.value }]),
            textContent: k2(_.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, V2),
          m.value.length ? (Kt(), No(Sr, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": V[0] || (V[0] = (E) => n.value = E),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": V[1] || (V[1] = (E) => o.value = E),
            "source-languages": h.value,
            "target-languages": p.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : ci("", !0)
        ], 2)
      ]),
      default: im(() => [
        r.value && !m.value.length ? (Kt(), No(Hw, {
          key: 0,
          title: _.$i18n("cx-sx-translation-list-empty-title"),
          description: _.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : ci("", !0),
        r.value ? ci("", !0) : (Kt(), No(om(mt), { key: 1 })),
        d.value ? (Kt(), ui("div", E2, [
          (Kt(!0), ui(am, null, sm(m.value, (E) => (Kt(), No(r8, {
            key: `${e.translationStatus}-${E.key}`,
            translation: E,
            onDeleteTranslation: (N) => f(E)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Kt(), ui("div", L2, [
          (Kt(!0), ui(am, null, sm(m.value, (E) => (Kt(), No(S8, {
            key: `${e.translationStatus}-${E.key}`,
            translation: E
          }, null, 8, ["translation"]))), 128))
        ])),
        $2(N8, {
          modelValue: l.value,
          "onUpdate:modelValue": V[2] || (V[2] = (E) => l.value = E),
          translation: c.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : ci("", !0);
  }
};
const Nl = window.Vue.toDisplayString, hr = window.Vue.createElementVNode, Ml = window.Vue.unref, Ns = window.Vue.openBlock, Ul = window.Vue.createBlock, lm = window.Vue.createCommentVNode, D2 = window.Vue.Fragment, cm = window.Vue.createElementBlock, P2 = window.Vue.withKeys, B2 = window.Vue.withCtx, F2 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, N2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, M2 = /* @__PURE__ */ hr("span", null, "/", -1), U2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, um = window.Codex.CdxIcon, I2 = window.Codex.CdxInfoChip, gi = window.Vue.computed, $o = {
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
    const t = e, n = gi(() => t.content.lastIndexOf("/")), o = gi(() => t.content.slice(0, n.value)), s = gi(() => t.content.slice(n.value + 1)), a = gi(
      () => t.expanded ? PC : Vu
    );
    return (r, l) => (Ns(), Ul(Ml(I2), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = P2((c) => r.$emit("click"), ["enter"]))
    }, {
      default: B2(() => [
        n.value === -1 ? (Ns(), cm(D2, { key: 0 }, [
          hr("span", null, Nl(e.content), 1),
          e.expandable ? (Ns(), Ul(Ml(um), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : lm("", !0)
        ], 64)) : (Ns(), cm("div", F2, [
          hr("span", N2, Nl(o.value), 1),
          M2,
          hr("span", U2, Nl(s.value), 1),
          e.expandable ? (Ns(), Ul(Ml(um), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : lm("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const Se = window.Vue.unref, wt = window.Vue.createVNode, In = window.Vue.createElementVNode, Ms = window.Vue.toDisplayString, it = window.Vue.withCtx, R2 = window.Vue.resolveDirective, Il = window.Vue.withDirectives, fn = window.Vue.openBlock, po = window.Vue.createBlock, Rn = window.Vue.createCommentVNode, dm = window.Vue.createElementBlock, gm = window.Vue.withModifiers, z2 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, O2 = { class: "col shrink pe-4" }, j2 = ["lang", "dir", "textContent"], H2 = ["lang", "dir", "textContent"], G2 = { class: "cx-suggestion__missing-sections" }, q2 = {
  key: 0,
  class: "cx-suggestion__easy-sections ms-1"
}, W2 = ["textContent"], X2 = ["textContent"], Rl = window.Codex.CdxIcon, Ee = window.Vue.computed, K2 = window.Vue.inject, Y2 = window.Vuex.useStore, Mu = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [oo, on, rs],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = Y2(), o = Ee(() => t.suggestion), s = Ee(
      () => o.value.sourceTitle || o.value.title
    ), a = Ee(
      () => n.getters["mediawiki/getPage"](
        o.value.sourceLanguage,
        s.value
      )
    ), r = Ee(
      () => {
        var x;
        return (x = o.value) == null ? void 0 : x.missingSectionsCount;
      }
    ), l = Ee(() => !(o.value instanceof on) || !o.value.orderedMissingSections ? 0 : o.value.orderedMissingSections.filter((x) => {
      const B = o.value.getSectionSize(x.sourceTitle);
      return Gf(B);
    }).length), c = fe(), d = Ee(() => {
      const x = c.i18n(
        "cx-sx-translation-suggestion-easy-sections",
        [l.value]
      );
      return c.i18n("parentheses", [x]);
    }), i = Ee(() => {
      var x;
      return (x = a.value) == null ? void 0 : x.description;
    }), u = Ee(
      () => o.value instanceof on
    );
    Ee(
      () => o.value instanceof oo
    );
    const g = Ee(
      () => o.value instanceof rs
    ), m = Ee(
      () => q.getAutonym(o.value.sourceLanguage)
    ), p = Ee(
      () => q.getAutonym(o.value.targetLanguage)
    ), h = Ee(
      () => g.value ? Zf : ew
    ), f = K2("colors"), w = Ee(
      () => g.value ? f.blue600 : "currentColor"
    ), v = Ee(
      () => o.value instanceof If || o.value instanceof Rf
    ), C = Ee(() => {
      if (!v.value || o.value.inFeaturedCollection)
        return !1;
      const x = V();
      return (x == null ? void 0 : x.id) === te;
    }), y = Ee(() => C.value || u.value ? !1 : Gt ? sy(o.value.size) : ay(o.value.leadSectionSize)), { featuredCollection: _ } = Wt(), { findSelectedFilter: V } = lo(), E = Ee(() => {
      var B, R;
      const x = V();
      return ((B = x == null ? void 0 : x.id) == null ? void 0 : B.toLowerCase()) === ((R = _.value) == null ? void 0 : R.name.toLowerCase());
    }), N = Ee(() => {
      if (!o.value.inFeaturedCollection)
        return !1;
      if (g.value)
        return !0;
      const x = V();
      return (x == null ? void 0 : x.id) === te ? !0 : !E.value;
    });
    return (x, B) => {
      const R = R2("i18n");
      return o.value ? (fn(), dm("div", z2, [
        In("div", O2, [
          wt(Se(Uu), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        wt(Se(I), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: it(() => [
            wt(Se(I), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: it(() => [
                wt(Se(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: it(() => [
                    In("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: o.value.sourceLanguage,
                      dir: Se(q.getDir)(o.value.sourceLanguage),
                      textContent: Ms(s.value)
                    }, null, 8, j2)
                  ]),
                  _: 1
                }),
                wt(Se(k), { shrink: "" }, {
                  default: it(() => [
                    In("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: o.value.sourceLanguage,
                      dir: Se(q.getDir)(o.value.sourceLanguage),
                      textContent: Ms(i.value)
                    }, null, 8, H2)
                  ]),
                  _: 1
                }),
                y.value ? (fn(), po(Se(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: it(() => [
                    Il(In("small", null, null, 512), [
                      [R, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Rn("", !0),
                u.value ? (fn(), po(Se(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom",
                  shrink: ""
                }, {
                  default: it(() => [
                    Il(In("small", G2, null, 512), [
                      [R, [r.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (fn(), dm("small", q2, Ms(d.value), 1)) : Rn("", !0)
                  ]),
                  _: 1
                })) : Rn("", !0),
                N.value ? (fn(), po(Se(k), {
                  key: 2,
                  shrink: "",
                  class: "cx-suggestion__information-panel__featured mt-auto"
                }, {
                  default: it(() => [
                    wt(Ur)
                  ]),
                  _: 1
                })) : g.value ? (fn(), po(Se(k), {
                  key: 3,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: it(() => [
                    wt(Se(I), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: it(() => [
                        wt(Se(k), { grow: "" }, {
                          default: it(() => [
                            In("small", {
                              textContent: Ms(m.value)
                            }, null, 8, W2),
                            wt(Se(Rl), {
                              icon: Se(Qf),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            In("small", {
                              textContent: Ms(p.value)
                            }, null, 8, X2)
                          ]),
                          _: 1
                        }),
                        r.value ? (fn(), po(Se(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: it(() => [
                            Il(In("small", null, null, 512), [
                              [R, [
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
                C.value ? (fn(), po(Se(k), {
                  key: 4,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: it(() => [
                    wt($o, {
                      icon: Se(Zu),
                      content: o.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : Rn("", !0)
              ]),
              _: 1
            }),
            wt(Se(k), { shrink: "" }, {
              default: it(() => [
                g.value ? Rn("", !0) : (fn(), po(Se(Rl), {
                  key: 0,
                  icon: Se(ps),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: B[0] || (B[0] = gm((X) => x.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                wt(Se(Rl), {
                  class: "cx-suggestion__favorite-button",
                  icon: h.value,
                  "icon-color": w.value,
                  onClick: B[1] || (B[1] = gm((X) => x.$emit("bookmark"), ["stop"]))
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
const zl = window.Vue.normalizeClass, mm = window.Vue.createVNode, Q2 = window.Vue.renderList, pm = window.Vue.Fragment, Us = window.Vue.openBlock, mi = window.Vue.createElementBlock, J2 = window.Vue.createBlock, Z2 = window.Vue.toDisplayString, e$ = window.Vue.withKeys, hm = window.Vue.createCommentVNode, t$ = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, pi = window.Vue.computed, n$ = window.Vue.ref, o$ = window.Vue.watchEffect, s$ = {
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
    const n = e, o = pi(
      () => n.isSelected(n.filter) || n.filter.subFilters.some((g) => n.isSelected(g))
    ), s = n$(!1);
    o$(() => {
      n.filter.expandable && (s.value = o.value);
    });
    const a = t, r = () => {
      n.filter.expandable && o.value ? s.value = !s.value : a("filter-selected", n.filter);
    }, l = pi(() => {
      const g = n.filter.subFilters.find(
        (p) => n.isSelected(p)
      );
      let m = n.filter.chipLabel;
      return g && (m += `/${c(g)}`), m;
    }), c = (g) => {
      const { label: m } = g, p = n.filter.label;
      return m.startsWith(`${p}/`) ? m.replace(`${p}/`, "") : m;
    }, d = pi(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), i = pi(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && s.value
    ), u = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, m) => (Us(), mi(pm, null, [
      mm($o, {
        class: zl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": o.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: s.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      s.value ? (Us(), mi("div", t$, [
        mm($o, {
          class: zl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: m[0] || (m[0] = (p) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Us(!0), mi(pm, null, Q2(d.value, (p) => (Us(), J2($o, {
          key: p.id,
          class: zl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(p)
          }]),
          content: c(p),
          icon: p.icon,
          onClick: (h) => g.$emit("filter-selected", p)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        i.value ? (Us(), mi("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: u,
          onKeyup: e$(u, ["enter"])
        }, Z2(e.viewMoreConfig.label), 33)) : hm("", !0)
      ])) : hm("", !0)
    ], 64));
  }
};
const a$ = window.Vue.toDisplayString, fm = window.Vue.createElementVNode, i$ = window.Vue.renderList, wm = window.Vue.Fragment, Ol = window.Vue.openBlock, vm = window.Vue.createElementBlock, r$ = window.Vue.createBlock, l$ = { class: "sx-suggestions-filters__group-label mb-3" }, c$ = { class: "sx-suggestions-filters__group-filters mb-3" }, u$ = {
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
    return (o, s) => (Ol(), vm(wm, null, [
      fm("div", l$, a$(e.filterGroup.label), 1),
      fm("div", c$, [
        (Ol(!0), vm(wm, null, i$(n(), (a) => (Ol(), r$(s$, {
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
}, _m = window.Vue.computed, d$ = window.Vue.inject, Sm = window.Vue.ref, ym = window.Vue.watch, Gw = (e, t) => {
  const o = Sm([]), s = Sm(!1), a = _m(
    () => o.value.slice(0, 4)
  ), r = d$("breakpoints"), l = _m(() => r.value.mobile), { inFeaturedCollection: c } = sd(), d = (g) => b(void 0, null, function* () {
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
      const g = yield gs.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
      yield d(g), o.value = g;
    } finally {
      s.value = !1, mw.cx.eventlogging.stats.articleSearchAccess(l.value);
    }
  }), 500), u = () => {
    o.value = [], t.value && (s.value = !0, i());
  };
  return ym(t, u), ym(e, u), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
class hi {
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
const jl = window.Vue.ref, Cm = window.Vue.watch, xm = window.Vue.computed, { topics: g$, regions: m$ } = mw.loader.require(
  "ext.cx.articlefilters"
), p$ = g$.flatMap(
  (e) => e.topics.map((t) => Ye(me({}, t), {
    groupId: e.groupId
  }))
), h$ = () => {
  const e = jl(""), t = jl("all"), n = jl({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = fe(), { pageCollectionGroups: s } = Ar(), { sourceLanguageURLParameter: a } = P(), r = (m) => (m = m.toLowerCase(), p$.filter(
    (p) => p.label.toLowerCase().includes(m)
  )), l = (m) => (m = m.toLowerCase(), Object.values(s.value).flat().filter(
    (h) => h.name.toLowerCase().includes(m)
  )), c = (m) => (m = m.toLowerCase(), m$.flatMap((p) => [p, ...p.countries]).filter(
    (p) => p.label.toLowerCase().includes(m)
  ).map((p) => ({
    label: p.label,
    id: p.id
  }))), d = xm(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: u } = Gw(
    a,
    d
  );
  Cm(i, () => {
    n.value.topics = i.value.map(
      (m) => {
        var p;
        return new hi({
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
  }), Cm([e, t], () => b(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (m) => new hi({
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
      (m) => new hi({
        label: m.name,
        value: m.name,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          m.articlesCount
        ),
        icon: t.value === "all" ? Zu : null,
        filterType: te,
        filterId: m.name
      })
    ), n.value.regions = c(e.value).map(
      (m) => new hi({
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
  const g = xm(() => {
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
  return { searchInput: e, searchScope: t, searchResults: g, searchResultsLoading: u };
}, f$ = "suggestion_filter_topic_area", w$ = "suggestion_filter_search_result_seed", v$ = "suggestion_filter_collections", _$ = "suggestion_filter_previous_edits", S$ = "suggestion_filter_popular_articles", y$ = "suggestion_filter_region", Hl = (e) => {
  if (e.type === tt || e.type === Be || e.type === te || e.type === qt)
    return e.id;
  if (e.id === te)
    return "all-collections";
}, Gl = (e) => {
  if (e.type === tt)
    return f$;
  if (e.type === Be)
    return y$;
  if (e.type === qt)
    return w$;
  if (e.id === te || e.type === te)
    return v$;
  if (e.id === an)
    return _$;
  if (e.id === rn)
    return S$;
}, qw = () => {
  const e = Lt();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: Gl(r),
      event_context: Hl(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: Gl(r),
      event_context: Hl(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: Gl(r),
      event_context: Hl(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const be = window.Vue.unref, vt = window.Vue.createVNode, Ft = window.Vue.withCtx, C$ = window.Vue.resolveDirective, Yt = window.Vue.createElementVNode, Mo = window.Vue.withDirectives, bm = window.Vue.toDisplayString, x$ = window.Vue.createTextVNode, b$ = window.Vue.vShow, km = window.Vue.isRef, $m = window.Vue.renderList, Vm = window.Vue.Fragment, wn = window.Vue.openBlock, ho = window.Vue.createElementBlock, k$ = window.Vue.withKeys, Em = window.Vue.createCommentVNode, Lm = window.Vue.createBlock, $$ = { class: "sx-suggestions-filters" }, V$ = { class: "mb-0" }, E$ = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, L$ = { class: "mb-3" }, T$ = { class: "px-4 pb-4 pt-7" }, A$ = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, D$ = ["onKeyup", "onClick"], P$ = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, B$ = { class: "sx-suggestions-filters__search-results-pending" }, F$ = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, N$ = { class: "sx-suggestions-filters__search-results-empty-primary" }, M$ = { class: "sx-suggestions-filters__search-results-empty-secondary" }, fi = window.Vue.ref, fo = window.Vue.computed, U$ = window.Vue.inject, I$ = window.Vue.watch, Tm = window.Codex.CdxButton, R$ = window.Codex.CdxIcon, z$ = window.Codex.CdxTextInput, O$ = window.Codex.CdxMenu, j$ = window.Codex.CdxTabs, H$ = window.Codex.CdxTab, G$ = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = fe(), o = t, s = fo(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: m([
          We,
          te,
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
        filterGroups: m([te])
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
    ]), a = (O) => X.value = O, r = fo(
      () => s.value.find((O) => O.name === X.value)
    ), l = (O, j) => j === "all" && O.type === Be ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          O.label
        ),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, c = (O, j) => {
      if (O !== "all")
        return !1;
      if (j === te) {
        const ce = m([te]);
        return ce.length && ce[0].filters.length > 6;
      }
      return j === Be;
    }, { allFilters: d, isFilterSelected: i, selectFilter: u, findSelectedFilter: g } = lo(), m = (O) => O.flatMap((j) => d.value.filter((ce) => ce.type === j)).filter(Boolean), p = () => {
      V(), o("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: h,
      logSuggestionFiltersConfirm: f,
      logSuggestionFiltersSelect: w
    } = qw(), v = () => {
      h(), p();
    }, C = () => {
      _.value && (f(_.value), u(_.value)), p();
    }, y = fi(!1), _ = fi(null), V = () => {
      _.value = null, y.value = !1;
    }, E = (O) => {
      w(O), _.value = O, y.value = !0;
    }, N = (O) => _.value ? _.value.id === O.id && _.value.type === O.type : i(O), x = U$("breakpoints"), B = fo(() => x.value.mobile), { searchInput: R, searchScope: X, searchResults: ae, searchResultsLoading: ee } = h$(), ne = fo(
      () => _.value || g()
    ), D = fi(null);
    I$(D, () => {
      if (!D.value)
        return;
      const O = K.value.find(
        (j) => j.value === D.value
      );
      E({
        type: O.filterType,
        id: O.filterId,
        label: O.label
      }), R.value = "";
    });
    const z = {
      [te]: "cx-sx-suggestions-filters-view-all-collections-group",
      [Be]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, K = fo(
      () => ae.value.flatMap((O) => O.items)
    ), Q = fi({}), $e = fo(
      () => Q.value[X.value]
    ), xe = fo(() => {
      var j;
      const O = (j = $e.value) == null ? void 0 : j.getHighlightedMenuItem();
      return O == null ? void 0 : O.id;
    }), _e = (O) => {
      O.key !== " " && $e.value && $e.value.delegateKeyNavigation(O);
    }, Oe = (O, j) => {
      Q.value[j] = O;
    };
    return (O, j) => {
      const ce = C$("i18n");
      return wn(), Lm(be(Vt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: B.value,
        header: !1
      }, {
        default: Ft(() => [
          Yt("section", $$, [
            vt(be(I), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Ft(() => [
                vt(be(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Ft(() => [
                    vt(be(Tm), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": O.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: v
                    }, {
                      default: Ft(() => [
                        vt(be(R$), { icon: be(ps) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                vt(be(k), {
                  grow: "",
                  align: "center"
                }, {
                  default: Ft(() => [
                    Mo(Yt("h5", V$, null, 512), [
                      [ce, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                vt(be(k), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Ft(() => [
                    Mo(vt(be(Tm), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: C
                    }, {
                      default: Ft(() => [
                        x$(bm(O.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [b$, y.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Yt("div", E$, [
              Mo(Yt("h5", L$, null, 512), [
                [ce, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Yt("div", null, [
                vt($o, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: ne.value.label,
                  icon: ne.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            Yt("div", T$, [
              vt(be(z$), {
                modelValue: be(R),
                "onUpdate:modelValue": j[0] || (j[0] = (S) => km(R) ? R.value = S : null),
                role: "combobox",
                "aria-activedescendant": xe.value,
                "aria-controls": "sx-suggestions-filters__search-results__menu",
                "aria-autocomplete": "none",
                placeholder: r.value.searchPlaceholder,
                "input-type": "search",
                "start-icon": be(Eu),
                clearable: !!be(R),
                onKeydown: _e
              }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
            ]),
            vt(be(j$), {
              active: be(X),
              "onUpdate:active": [
                j[2] || (j[2] = (S) => km(X) ? X.value = S : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Ft(() => [
                (wn(!0), ho(Vm, null, $m(s.value, (S, T) => (wn(), Lm(be(H$), {
                  key: T,
                  name: S.name,
                  label: S.label
                }, {
                  default: Ft(() => [
                    be(R) ? (wn(), ho("div", P$, [
                      vt(be(O$), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (L) => Oe(L, S.name),
                        selected: D.value,
                        "onUpdate:selected": j[1] || (j[1] = (L) => D.value = L),
                        "show-pending": be(ee),
                        expanded: "",
                        "menu-items": K.value
                      }, {
                        pending: Ft(() => [
                          Mo(Yt("div", B$, null, 512), [
                            [ce, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Ft(() => [
                          be(ee) ? Em("", !0) : (wn(), ho("div", F$, [
                            Mo(Yt("span", N$, null, 512), [
                              [ce, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            Mo(Yt("span", M$, null, 512), [
                              [ce, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (wn(), ho("div", A$, [
                      (wn(!0), ho(Vm, null, $m(S.filterGroups, (L) => (wn(), ho("div", {
                        key: L.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        vt(u$, {
                          "filter-group": L,
                          "tentatively-select-filter": E,
                          "is-selected": N,
                          limit: c(S.name, L.type) ? 4 : 0,
                          "get-sub-filter-config": (F) => l(F, S.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        c(S.name, L.type) ? (wn(), ho("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: k$((F) => a(L.id), ["enter"]),
                          onClick: (F) => a(L.id)
                        }, [
                          Yt("span", null, bm(O.$i18n(z[L.id])), 1)
                        ], 40, D$)) : Em("", !0)
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
const Is = window.Vue.unref, wi = window.Vue.openBlock, Am = window.Vue.createBlock;
window.Vue.createCommentVNode;
const q$ = window.Vue.renderList, W$ = window.Vue.Fragment, Dm = window.Vue.createElementBlock, X$ = window.Vue.normalizeClass, Pm = window.Vue.createVNode, K$ = {
  key: 1,
  class: "cx-suggestion-list__filters flex mx-4 pb-2"
}, Bm = window.Vue.ref, Fm = window.Vue.watch, Y$ = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = fe(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: o } = qw(), { targetLanguageURLParameter: s } = P(), {
      getFiltersSummary: a,
      selectFilter: r,
      isFilterSelected: l,
      waitingForPageCollectionsFetch: c,
      validateURLFilterWithCollections: d,
      setFeaturedCollectionFilterIfNeeded: i
    } = lo(), u = Bm(!1), g = () => {
      o(), u.value = !0;
    }, m = (h) => {
      n(h), r(h);
    }, p = Bm(a());
    return Fm(u, (h) => {
      h || (p.value = a());
    }), Fm([c, s], ([h]) => {
      h || (d(), i(), p.value = a());
    }), (h, f) => Is(c) ? (wi(), Am(Is(mt), { key: 0 })) : (wi(), Dm("div", K$, [
      (wi(!0), Dm(W$, null, q$(p.value, (w) => (wi(), Am($o, {
        key: w.label,
        class: X$(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": Is(l)(w)
        }]),
        icon: w.icon,
        content: w.label,
        onClick: (v) => m(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Pm($o, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: Is(td),
        content: Is(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: g
      }, null, 8, ["icon", "content"]),
      Pm(G$, {
        modelValue: u.value,
        "onUpdate:modelValue": f[0] || (f[0] = (w) => u.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, Uo = window.Vue.computed, Nm = window.Vue.ref, ql = window.Vue.watch, Q$ = window.Vuex.useStore, J$ = () => {
  const e = Q$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Tr(), r = Lt(), l = Uo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), c = Uo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = Nm(0), i = Nm(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, g = 4, m = Uo(
    () => a(d.value)
  );
  ql(
    m,
    () => {
      m.value.forEach((R) => {
        R.seen = !0;
      });
    },
    { deep: !0 }
  );
  const p = Uo(
    () => s(i.value)
  );
  ql(
    p,
    () => {
      p.value.forEach((R) => {
        R.seen = !0;
      });
    },
    { deep: !0 }
  );
  const h = () => {
    _(), x(), V(), B();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: w
  } = ad(), v = (R) => R.length === u, C = Uo(
    () => v(p.value)
  ), y = Uo(
    () => v(m.value)
  ), _ = () => {
    const R = (d.value + 1) % g, X = v(
      a(R)
    );
    (!y.value || !X) && f();
  }, V = () => {
    const R = (i.value + 1) % g, X = v(
      s(R)
    );
    (!C.value || !X) && w();
  }, E = (R) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", R), _();
  }, N = (R) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", R), V();
  }, x = () => d.value = (d.value + 1) % g, B = () => i.value = (i.value + 1) % g;
  return ql(
    o,
    () => {
      i.value = 0, V(), d.value = 0, _();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: p,
    currentSectionSuggestionsSlice: m,
    discardPageSuggestion: N,
    discardSectionSuggestion: E,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: c,
    sectionSuggestionsLoading: l,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: C,
    isCurrentSectionSuggestionsSliceFull: y
  };
}, Z$ = window.Vuex.useStore, ud = () => {
  const e = Z$(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = ad(), { addFeaturedCollectionFlag: o } = Br(), s = (i, u, g) => e.state.suggestions.pageSuggestions.find(
    (m) => m.sourceLanguage === i && m.targetLanguage === u && m.sourceTitle === g
  ), a = (i) => b(void 0, null, function* () {
    const { sourceTitle: u, sourceLanguage: g, targetLanguage: m } = i;
    yield ge.markFavorite(u, g, m);
    const p = new rs({
      title: u,
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
    markFavoriteSuggestion: (i, u, g) => b(void 0, null, function* () {
      const m = s(
        u,
        g,
        i
      );
      m && (e.commit(
        "suggestions/removePageSuggestionFromList",
        m
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](u, g, i);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield ge.markFavorite(
        i,
        u,
        g
      );
      const h = new rs({
        title: i,
        sourceLanguage: u,
        targetLanguage: g
      });
      yield o([h], {
        titleGetter: (f) => f.title
      }), e.commit("suggestions/addFavoriteSuggestion", h);
    }),
    removeFavoriteSuggestion: (i) => (e.commit("suggestions/removeFavoriteSuggestion", i), ge.unmarkFavorite(i))
  };
}, eV = "suggestion_no_seed", tV = "suggestion_previous_edits", nV = "suggestion_topic_area", oV = "suggestion_search_result_seed", sV = "suggestion_popular_articles", aV = "suggestion_collections", iV = "suggestion_region", rV = () => {
  const { currentSuggestionFilters: e } = P();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === an)
      return t ? tV : eV;
    if (n === tt)
      return nV;
    if (n === Be)
      return iV;
    if (n === qt)
      return oV;
    if (o === rn)
      return sV;
    if (o === te || n === te)
      return aV;
    const s = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${o}`
    );
    throw mw.errorLogger.logError(s, "error.contenttranslation"), s;
  };
};
const vi = window.Vue.unref, Mm = window.Vue.createVNode, Io = window.Vue.toDisplayString, Ro = window.Vue.createElementVNode, Rs = window.Vue.openBlock, zs = window.Vue.createElementBlock, _i = window.Vue.createCommentVNode, Um = window.Vue.createTextVNode, lV = window.Vue.normalizeClass, cV = { class: "cx-featured-collection-banner py-4 px-6" }, uV = { class: "cx-featured-collection-banner__header mb-3" }, dV = { class: "cx-featured-collection-banner__header-text" }, gV = { class: "cx-featured-collection-banner__title mb-0" }, mV = {
  key: 0,
  class: "cx-featured-collection-banner__source mb-0"
}, pV = { class: "cx-featured-collection-banner__content" }, hV = { class: "cx-featured-collection-banner__learn-more-container" }, fV = ["href"], Im = window.Codex.CdxIcon, Wl = window.Vue.ref, wV = window.Vue.computed, vV = window.Vue.onMounted, _V = window.Vue.onUnmounted, SV = {
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
    const t = Wl(!1), n = Wl(null), o = Wl(null), s = wV(() => n.value ? (o.value, n.value.scrollHeight > n.value.clientHeight) : !1), a = () => {
      t.value = !t.value;
    }, r = () => {
      o.value = window.innerWidth;
    };
    return vV(() => {
      window.addEventListener("resize", r);
    }), _V(() => {
      window.removeEventListener("resize", r);
    }), (l, c) => (Rs(), zs("div", cV, [
      Ro("div", uV, [
        Mm(vi(Im), {
          icon: vi(od),
          class: "cx-featured-collection-banner__icon me-3 mt-1"
        }, null, 8, ["icon"]),
        Ro("div", dV, [
          Ro("h5", gV, Io(l.$i18n("cx-featured-collection-banner-title")), 1),
          e.communityName ? (Rs(), zs("span", mV, Io(e.communityName), 1)) : _i("", !0)
        ])
      ]),
      Ro("div", pV, [
        Ro("div", {
          ref_key: "descriptionRef",
          ref: n,
          class: lV(["cx-featured-collection-banner__description", {
            "cx-featured-collection-banner__description--expanded": t.value
          }])
        }, [
          Um(Io(e.description || l.$i18n("cx-featured-collection-banner-description")) + " ", 1),
          t.value ? (Rs(), zs("button", {
            key: 0,
            class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--inline",
            onClick: a
          }, Io(l.$i18n("cx-featured-collection-banner-toggle-less")), 1)) : _i("", !0)
        ], 2),
        !t.value && s.value ? (Rs(), zs("button", {
          key: 0,
          class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--external mb-1 ml-1",
          onClick: a
        }, Io(l.$i18n("cx-featured-collection-banner-toggle-more")), 1)) : _i("", !0)
      ]),
      Ro("div", hV, [
        (t.value || !s.value) && e.learnMoreUrl ? (Rs(), zs("a", {
          key: 0,
          href: e.learnMoreUrl,
          class: "cx-featured-collection-banner__learn-more",
          target: "_blank"
        }, [
          Um(Io(l.$i18n("cx-featured-collection-banner-learn-more")) + " ", 1),
          Mm(vi(Im), {
            icon: vi(Ba),
            size: "small",
            class: "cx-featured-collection-banner__learn-more-icon"
          }, null, 8, ["icon"])
        ], 8, fV)) : _i("", !0)
      ])
    ]));
  }
};
const Rm = window.Vue.normalizeClass, yV = window.Vue.resolveDirective, Os = window.Vue.createElementVNode, Si = window.Vue.withDirectives, pe = window.Vue.unref, Qe = window.Vue.openBlock, Nt = window.Vue.createBlock, vn = window.Vue.createCommentVNode, Xl = window.Vue.createVNode, js = window.Vue.withCtx, zm = window.Vue.renderList, Om = window.Vue.Fragment, Kl = window.Vue.createElementBlock, CV = window.Vue.toDisplayString, xV = window.Vue.createTextVNode, bV = window.Vue.vShow, kV = { class: "cx-suggestion-list" }, $V = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, VV = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, EV = { class: "cx-suggestion-list__refresh-button-container justify-center" }, _t = window.Vue.computed, LV = window.Vue.inject, TV = window.Vue.ref, AV = window.Codex.CdxButton, DV = window.Codex.CdxIcon, PV = window.Vuex.useStore, BV = {
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
    } = P(), { supportedLanguageCodes: s } = Aa(), a = lw(), r = (j) => a(j, n.value), l = (j) => a(t.value, j), c = rV(), { featuredCollection: d } = Wt(), { findSelectedFilter: i } = lo(), u = _t(() => i()), g = Na(), m = (j) => {
      g(
        j.sourceTitle,
        j.sourceLanguage,
        j.targetLanguage,
        c(j.suggestionSeed),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: p,
      currentSectionSuggestionsSlice: h,
      discardPageSuggestion: f,
      discardSectionSuggestion: w,
      onSuggestionRefresh: v,
      pageSuggestionsLoading: C,
      sectionSuggestionsLoading: y,
      isCurrentPageSuggestionsSliceFull: _,
      isCurrentSectionSuggestionsSliceFull: V
    } = J$(), E = TV(null), N = Lt(), x = () => {
      N({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), v(), E.value && E.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: B, markFavoritePageSuggestion: R } = ud(), X = LV("breakpoints"), ae = _t(() => X.value.mobile), ee = _t(
      () => ae.value ? null : "pb-2 flex justify-between items-center"
    ), ne = PV(), D = _t(
      () => ne.state.suggestions.isPageSuggestionsFetchPending
    ), z = _t(
      () => ne.state.suggestions.isSectionSuggestionsFetchPending
    ), K = _t(
      () => D.value || C.value && !_.value
    ), Q = _t(
      () => z.value || y.value && !V.value
    ), $e = _t(
      () => D.value || C.value || p.value.length > 0
    ), xe = _t(
      () => z.value || y.value || h.value.length > 0
    ), _e = _t(
      () => !$e.value && !xe.value
    ), Oe = _t(
      () => !y.value && !C.value && !D.value && !z.value && !_e.value
    ), O = _t(
      () => {
        var j;
        return d.value && ((j = u.value) == null ? void 0 : j.id) === d.value.name;
      }
    );
    return (j, ce) => {
      const S = yV("i18n");
      return Si((Qe(), Kl("div", kV, [
        Xl(pe(Ze), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: js(() => [
            Os("div", {
              class: Rm(["cx-suggestion-list__header-card__header px-4", ee.value])
            }, [
              Si(Os("h3", {
                class: Rm(["mw-ui-card__title mb-0", { "py-3": ae.value }])
              }, null, 2), [
                [S, void 0, "cx-suggestionlist-title"]
              ]),
              ae.value ? vn("", !0) : (Qe(), Nt(Sr, {
                key: 0,
                "source-languages": pe(s),
                "target-languages": pe(s),
                "selected-source-language": pe(t),
                "selected-target-language": pe(n),
                "onUpdate:selectedSourceLanguage": r,
                "onUpdate:selectedTargetLanguage": l
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Xl(Y$)
          ]),
          default: js(() => [
            ae.value ? (Qe(), Nt(Sr, {
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
        O.value ? (Qe(), Nt(SV, {
          key: 0,
          "community-name": pe(d).communityName,
          description: pe(d).description,
          "learn-more-url": pe(d).link
        }, null, 8, ["community-name", "description", "learn-more-url"])) : vn("", !0),
        xe.value ? (Qe(), Nt(pe(Ze), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: js(() => [
            Si(Os("h5", $V, null, 512), [
              [S, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Qe(!0), Kl(Om, null, zm(pe(h), (T, L) => (Qe(), Nt(Mu, {
              key: `section-suggestion-${L}`,
              class: "ma-0",
              suggestion: T,
              onClose: (F) => pe(w)(T),
              onClick: (F) => m(T),
              onBookmark: (F) => pe(B)(T)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Q.value ? (Qe(), Nt(pe(mt), { key: 0 })) : vn("", !0)
          ]),
          _: 1
        })) : vn("", !0),
        $e.value ? (Qe(), Nt(pe(Ze), {
          key: 2,
          ref_key: "pageSuggestionsList",
          ref: E,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: js(() => [
            Si(Os("h5", VV, null, 512), [
              [S, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Qe(!0), Kl(Om, null, zm(pe(p), (T, L) => (Qe(), Nt(Mu, {
              key: `page-suggestion-${L}`,
              suggestion: T,
              onClose: (F) => pe(f)(T),
              onClick: (F) => m(T),
              onBookmark: (F) => pe(R)(T)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            K.value ? (Qe(), Nt(pe(mt), { key: 0 })) : vn("", !0)
          ]),
          _: 1
        }, 512)) : vn("", !0),
        _e.value ? (Qe(), Nt(Hw, {
          key: 3,
          title: j.$i18n("cx-sx-suggestion-list-empty-title"),
          description: j.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : vn("", !0),
        Os("div", EV, [
          Oe.value ? (Qe(), Nt(pe(AV), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: x
          }, {
            default: js(() => [
              Xl(pe(DV), {
                class: "me-1",
                icon: pe(ow)
              }, null, 8, ["icon"]),
              xV(" " + CV(j.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : vn("", !0)
        ])
      ], 512)), [
        [bV, e.active]
      ]);
    };
  }
}, FV = window.Vue.resolveDirective, NV = window.Vue.createElementVNode, MV = window.Vue.withDirectives, UV = window.Vue.renderList, IV = window.Vue.Fragment, Yl = window.Vue.openBlock, RV = window.Vue.createElementBlock, jm = window.Vue.unref, Hm = window.Vue.createBlock, Gm = window.Vue.withCtx, zV = window.Vue.createCommentVNode, OV = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, jV = window.Vue.computed, HV = window.Vuex.useStore, GV = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = HV(), n = jV(() => t.state.suggestions.favorites || []), o = Na(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = ud();
    return (r, l) => {
      const c = FV("i18n");
      return n.value.length ? (Yl(), Hm(jm(Ze), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Gm(() => [
          MV(NV("h3", OV, null, 512), [
            [c, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Gm(() => [
          (Yl(!0), RV(IV, null, UV(n.value, (d, i) => (Yl(), Hm(Mu, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (u) => s(d),
            onBookmark: (u) => jm(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : zV("", !0);
    };
  }
};
const qV = window.Vue.resolveDirective, Hs = window.Vue.createElementVNode, WV = window.Vue.withDirectives, XV = window.Vue.renderList, KV = window.Vue.Fragment, qm = window.Vue.openBlock, Wm = window.Vue.createElementBlock, YV = window.Vue.unref, QV = window.Vue.createVNode, JV = window.Vue.toDisplayString, ZV = { class: "cx-help-panel pa-4" }, eE = { class: "cx-help-panel__item-list mt-6 ps-2" }, tE = ["href", "target"], nE = ["textContent"], oE = window.Codex.CdxIcon, sE = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = fe(), n = [
      {
        icon: IC,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: FC,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = qV("i18n");
      return qm(), Wm("div", ZV, [
        WV(Hs("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Hs("ul", eE, [
          (qm(), Wm(KV, null, XV(n, (r, l) => Hs("li", {
            key: l,
            class: "mt-4"
          }, [
            Hs("a", {
              href: r.href,
              target: r.target
            }, [
              QV(YV(oE), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Hs("span", {
                textContent: JV(r.label)
              }, null, 8, nE)
            ], 8, tE)
          ])), 64))
        ])
      ]);
    };
  }
};
const aE = window.Vue.resolveDirective, zn = window.Vue.createElementVNode, Ql = window.Vue.withDirectives, Jl = window.Vue.toDisplayString, yi = window.Vue.unref, Zl = window.Vue.withCtx, Ci = window.Vue.createVNode, iE = window.Vue.openBlock, rE = window.Vue.createElementBlock, lE = { class: "cx-stats-panel pa-4" }, cE = ["textContent"], uE = { class: "cx-stats-panel__monthly-stats-label" }, dE = ["textContent"], gE = { class: "cx-stats-panel__total-stats-label" }, mE = ["href", "target"], pE = ["textContent"], hE = window.Codex.CdxIcon, fE = window.Vue.ref, Xm = window.Vue.computed, wE = window.Vue.watch, vE = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = fe(), n = e, o = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", s = Xm(() => {
      var d, i;
      const c = ((i = (d = n.stats) == null ? void 0 : d[o]) == null ? void 0 : i.count) || 0;
      return mw.language.convertNumber(c);
    }), a = Xm(() => {
      var d, i;
      const c = ((i = (d = n.stats) == null ? void 0 : d[o]) == null ? void 0 : i.delta) || 0;
      return mw.language.convertNumber(c);
    }), r = fE(null), l = {
      icon: tw,
      label: t.i18n("cx-sx-dashboard-stats-panel-all-stats-label"),
      href: "https://superset.wmcloud.org/superset/dashboard/p/X61GbQpZ5Rb/",
      target: "_blank"
    };
    return wE(
      () => n.stats,
      () => {
        const c = n.stats, d = r.value.getContext("2d"), i = Object.keys(n.stats || {}).sort(), u = i.reduce(
          (V, E) => Math.max(V, c[E].delta),
          0
        ), g = i.map((V) => c[V].delta), m = r.value.getBoundingClientRect().width, p = r.value.getBoundingClientRect().height;
        r.value.width = m, r.value.height = p;
        const h = 4, f = 6, w = 50, v = (w - h) / u;
        let C = h;
        const y = Math.floor(
          (m - h) / (f + h)
        ), _ = g.slice(
          Math.max(g.length - y, 0)
        );
        _.forEach((V, E) => {
          E === _.length - 1 && (d.fillStyle = "#36c");
          const N = w - V * v;
          d.fillRect(C, N, f, V * v), C += f + h;
        });
      }
    ), (c, d) => {
      const i = aE("i18n");
      return iE(), rE("div", lE, [
        Ql(zn("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        Ci(yi(I), null, {
          default: Zl(() => [
            Ci(yi(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: Zl(() => [
                zn("h3", {
                  textContent: Jl(a.value)
                }, null, 8, cE),
                Ql(zn("h5", uE, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            Ci(yi(k), { class: "cx-stats-panel__total-stats" }, {
              default: Zl(() => [
                zn("h3", {
                  textContent: Jl(s.value)
                }, null, 8, dE),
                Ql(zn("h5", gE, null, 512), [
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
          Ci(yi(hE), {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          zn("span", {
            textContent: Jl(l.label)
          }, null, 8, pE)
        ], 8, mE)
      ]);
    };
  }
}, Ww = () => {
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
const _E = window.Vue.renderSlot, SE = window.Vue.unref, yE = window.Vue.createVNode, CE = window.Vue.createElementVNode, xE = window.Vue.openBlock, bE = window.Vue.createElementBlock, kE = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, $E = { class: "col-12 ma-0 pa-0" }, VE = {
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
    const n = t, o = Ww(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (xE(), bE("footer", kE, [
      CE("div", $E, [
        _E(a.$slots, "default", {}, () => [
          yE(SE(Ea), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, EE = window.Vuex.useStore, LE = () => {
  const e = EE(), t = ro(), { addFeaturedCollectionFlag: n } = Br();
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
}, TE = window.Vuex.useStore, Xw = () => {
  const e = TE(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), { isDefaultFilter: r } = zu(), { previousRoute: l } = ze(e), c = Lt(), d = () => {
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
      return d() || "direct_preselect";
    const m = {
      "sx-article-search": "return_from_search",
      "sx-translation-confirmer": "return_from_confirmation",
      "sx-section-selector": "return_from_section_selection",
      "sx-sentence-selector": "editor_close"
    }[l.value];
    return m || (r(o.value) ? d() || "direct" : "suggestion_filter_direct_preselect");
  };
  return { logDashboardOpenEvent: () => {
    if (n.value && d()) {
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
}, Km = window.Vue.computed;
window.Vuex.useStore;
const Le = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = P(), { getLoadedSuggestion: s } = Fa(), a = Km(
    () => s(
      e.value,
      t.value,
      n.value
    )
  ), r = Km(() => o.value === no.LEAD_SECTION_DUMMY_TITLE ? o.value : a.value.missingSections[o.value] || a.value.presentSections[o.value] || "");
  return { sectionSuggestion: a, activeSectionTargetTitle: r };
}, AE = window.Vuex.useStore, DE = window.Vue.computed, Xt = () => {
  const e = AE(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = P();
  return { currentTranslation: DE(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, ec = window.Vue.computed, PE = window.Vuex.useStore, ot = () => {
  const e = PE(), { sectionSuggestion: t } = Le(), { currentTranslation: n } = Xt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), r = ec(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = ec(
    () => {
      var d, i;
      return ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    }
  ), c = ec(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: r, currentTargetPage: c, currentTargetPageTitle: l };
}, xi = window.Vue.computed, BE = window.Vuex.useStore, se = () => {
  const e = BE(), { currentSourcePage: t } = ot(), { currentMTProvider: n } = ze(e), { sectionURLParameter: o } = P(), s = xi(() => {
    var c, d;
    return o.value ? (d = t.value) == null ? void 0 : d.getSectionByTitle(o.value) : (c = t.value) == null ? void 0 : c.leadSection;
  }), a = xi(
    () => {
      var c;
      return (c = s.value) == null ? void 0 : c.isTitleSelected;
    }
  ), r = xi(
    () => {
      var c;
      return (c = s.value) == null ? void 0 : c.selectedContentTranslationUnit;
    }
  ), l = xi(
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
}, tc = window.Vue.computed, ht = () => {
  const { sectionURLParameter: e } = P(), { targetPageExists: t } = cn(), { sourceSection: n } = se(), { sectionSuggestion: o } = Le(), s = tc(
    () => {
      var l;
      return t.value && !!((l = n.value) != null && l.isLeadSection);
    }
  ), a = tc(
    () => {
      var l;
      return !!((l = n.value) != null && l.isLeadSection) && !t.value;
    }
  );
  return {
    isCurrentSectionPresent: tc(
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
}, FE = window.Vue.ref, bi = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, nc = FE(null), Tt = () => {
  const { isCurrentSectionPresent: e } = ht(), t = () => {
    e.value ? o(bi.EXPAND) : o(bi.NEW_SECTION);
  }, n = () => {
    nc.value = null;
  }, o = (s) => {
    if (!Object.values(bi).includes(s))
      throw new Error("[CX] Invalid publishing target used");
    nc.value = s;
  };
  return {
    target: nc,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: o,
    PUBLISHING_TARGETS: bi
  };
}, NE = window.Vue.watch, ME = () => {
  const { fetchAllTranslations: e } = fs(), t = iw(), n = LE(), { fetchPageCollectionGroups: o } = Ar(), { logDashboardOpenEvent: s } = Xw(), { applicationLanguagesInitialized: a } = cw(), { clearPublishTarget: r } = Tt();
  return () => b(void 0, null, function* () {
    o(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), NE(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Ym = window.Vue.computed, UE = window.Vue.ref, IE = window.Vue.watch, RE = window.Vue.watchEffect, zE = window.Vuex.useStore, OE = ["suggestions", "draft", "published"], jE = () => {
  const e = zE(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = P(), { translationsFetched: o } = fs(), s = UE(null);
  if (OE.includes(t.value))
    s.value = t.value;
  else {
    const a = Ym(
      () => o.value.draft
    ), r = Ym(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", IE(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return RE(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, HE = window.Vue.computed, GE = () => {
  const e = fe();
  return HE(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: O0,
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
        icon: z0,
        type: "text"
      }
    }
  ]);
};
const ke = window.Vue.unref, Me = window.Vue.createVNode, qE = window.Vue.toDisplayString, WE = window.Vue.createTextVNode, _n = window.Vue.withCtx, oc = window.Vue.openBlock, Qm = window.Vue.createBlock, Jm = window.Vue.createCommentVNode, XE = window.Vue.vShow, KE = window.Vue.withDirectives, YE = window.Vue.isRef, QE = window.Vue.createElementBlock, Zm = window.Vue.computed, JE = window.Vue.inject, ZE = window.Vuex.useStore, e4 = window.Codex.CdxButton, t4 = window.Codex.CdxIcon, n4 = {
  __name: "CXDashboard",
  setup(e) {
    const t = nt(), n = Lt(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    ME()();
    const a = ZE();
    a.dispatch("translator/fetchTranslatorStats");
    const r = Zm(() => a.state.translator.translatorStats), l = jE(), c = GE(), d = Ww(), i = (m) => {
      d(m), l.value = m;
    }, u = JE("breakpoints"), g = Zm(() => u.value.mobile);
    return mw.cx.eventlogging.stats.dashboardAccess(g.value), (m, p) => (oc(), QE("div", null, [
      Me(ke(I), { class: "ma-0 pb-4" }, {
        default: _n(() => [
          Me(ke(e4), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: _n(() => [
              Me(ke(t4), {
                class: "me-1",
                icon: ke(Yf)
              }, null, 8, ["icon"]),
              WE(" " + qE(m.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Me(ke(I), {
        class: "ma-0",
        align: "start"
      }, {
        default: _n(() => [
          m.$mwui.breakpoint.tabletAndUp ? (oc(), Qm(ke(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: _n(() => [
              Me(ke(Ea), {
                id: "dashboard-list-selector--desktop",
                items: ke(c),
                active: ke(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Jm("", !0),
          Me(ke(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: _n(() => [
              KE(Me(GV, null, null, 512), [
                [XE, ke(l) === "suggestions"]
              ]),
              Me(BV, {
                active: ke(l) === "suggestions"
              }, null, 8, ["active"]),
              Me(rm, {
                "translation-status": "draft",
                "active-status": ke(l)
              }, null, 8, ["active-status"]),
              Me(rm, {
                "translation-status": "published",
                "active-status": ke(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Me(ke(k), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: _n(() => [
              Me(ke(I), {
                class: "ma-0",
                align: "start"
              }, {
                default: _n(() => [
                  Me(ke(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: _n(() => [
                      Me(vE, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Me(ke(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: _n(() => [
                      Me(sE)
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
      m.$mwui.breakpoint.mobile ? (oc(), Qm(VE, {
        key: 0,
        active: ke(l),
        "onUpdate:active": p[0] || (p[0] = (h) => YE(l) ? l.value = h : null),
        items: ke(c)
      }, null, 8, ["active", "items"])) : Jm("", !0)
    ]));
  }
}, o4 = {
  name: "DashboardView",
  components: { CxDashboard: n4 }
}, s4 = window.Vue.resolveComponent, a4 = window.Vue.createVNode, i4 = window.Vue.openBlock, r4 = window.Vue.createElementBlock, l4 = { class: "cx-translation-dashboard" };
function c4(e, t, n, o, s, a) {
  const r = s4("cx-dashboard");
  return i4(), r4("main", l4, [
    a4(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const ep = /* @__PURE__ */ he(o4, [["render", c4]]), zo = window.Vue.computed, u4 = () => {
  const { sectionSuggestion: e } = Le(), { targetLanguageURLParameter: t } = P(), { currentTranslation: n } = Xt(), o = zo(
    () => {
      var g, m, p;
      return (p = (m = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : m[0]) == null ? void 0 : p.sourceTitle;
    }
  ), s = zo(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = zo(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = cn(), c = zo(() => r ? Z.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value >= 1 ? "cx-sx-select-section" : a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : a.value > 0 ? "cx-sx-select-section" : "" : "cx-sx-start-translation-button-label", i = zo(() => {
    if (s.value > 1) {
      const g = "cx-sx-existing-translation-additional-info", m = [
        "$1",
        mw.language.convertNumber(s.value - 1)
      ];
      return mw.message(g, ...m).parse().replace("$1", `"${o.value}"`);
    } else if (s.value === 1) {
      const g = "cx-sx-translation-confirmer-action-message-single-missing-multiple-present";
      return mw.message(g, "$1").parse().replace("$1", `"${o.value}"`);
    } else {
      const g = "cx-sx-translation-confirmer-action-message-none-missing-multiple-present";
      return mw.message(g).parse();
    }
  }), u = zo(
    () => {
      var g;
      return !r.value || ((g = e.value) == null ? void 0 : g.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessage: i,
    getActionButtonLabel: d,
    isProgressiveButton: u,
    targetArticlePath: c
  };
};
function d4(e) {
  return e.$el = $(e), e;
}
function g4(e, t, n, o) {
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
function m4() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function p4(e, t) {
  return b(this, null, function* () {
    yield dd(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = d4(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const h4 = window.Vue.computed, f4 = window.Vue.onMounted, w4 = window.Vue.ref;
function v4(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const _4 = {
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
    const n = w4(null);
    let o = null;
    const s = h4(
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
    return f4(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = v4;
      const i = yield p4(c, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = g4(
        i,
        e.content,
        e.language,
        e.dir
      );
      const u = ve.ui.contextItemFactory.lookup("reference");
      u.prototype.getRendering = m4, o.focus();
    })), { sxeditor: n };
  }
}, fr = window.Vue.createElementVNode, S4 = window.Vue.openBlock, y4 = window.Vue.createElementBlock, C4 = ["lang", "dir"], x4 = /* @__PURE__ */ fr("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ fr("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ fr("div", { class: "toolbar" })
  ])
], -1), b4 = ["lang", "dir"];
function k4(e, t, n, o, s, a) {
  return S4(), y4("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    x4,
    fr("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, b4)
  ], 8, C4);
}
const $4 = /* @__PURE__ */ he(_4, [["render", k4]]);
function dd() {
  return mw.loader.using("mw.cx3.ve");
}
const V4 = window.Vuex.useStore, E4 = () => {
  const e = V4();
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
        const a = Mf.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, L4 = window.Vuex.useStore, Kw = () => {
  const e = L4();
  return (t, n, o, s = null) => b(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield gs.fetchPageContent(
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
}, Ir = () => {
  const { currentSourcePage: e } = ot(), t = E4(), n = Kw(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = P(), c = (u, g) => b(void 0, null, function* () {
    if (!u()) {
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
    selectPageSectionByIndex: (u) => {
      const g = () => {
        var p;
        return (p = e.value.sections) == null ? void 0 : p[u];
      };
      return c(g, () => {
        const p = g();
        u === 0 ? p.originalTitle = e.value.title : o(p.originalTitle);
      });
    },
    selectPageSectionByTitle: (u) => c(() => e.value.getSectionByTitle(u), () => {
      o(u);
    })
  };
}, T4 = window.Vuex.useStore, ws = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = P(), { sectionSuggestion: a, activeSectionTargetTitle: r } = Le(), { target: l } = Tt(), c = T4(), d = nt(), i = () => {
    const p = d.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !c.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return d.getRoutes().find((h) => h.name === p);
  }, u = () => {
    const m = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), p = Z.getCurrentWikiLanguageCode();
    if (!m || t.value === p)
      return !1;
    const h = o.value ? { section: o.value } : {}, f = Z.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      h
    );
    return location.href = f + "#" + i().path, !0;
  }, g = () => {
    var p;
    const m = {};
    o.value && (m.sourcesection = o.value, r.value && (m.targetsection = r.value)), (p = a.value) != null && p.targetTitle && (m.targettitle = a.value.targetTitle), l.value && (m.publishtarget = l.value), location.href = Z.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      m
    );
  };
  return () => {
    if (Z.setCXToken(
      e.value,
      t.value,
      n.value
    ), Gt) {
      g();
      return;
    }
    if (u())
      return;
    const p = i();
    d.push({ name: p.name });
  };
}, tp = window.Vue.computed, A4 = window.Vue.ref, D4 = window.Vue.watchEffect, sc = /* @__PURE__ */ new Map(), P4 = (e, t) => b(void 0, null, function* () {
  return (yield ge.fetchArticleSections(
    e,
    t
  )).sections.filter(
    (s) => s.level === "2"
  )[0].byteoffset;
}), B4 = (e, t) => {
  const n = `${e}:${t}`;
  if (sc.has(n))
    return sc.get(n);
  const o = P4(e, t);
  return sc.set(n, o), o;
}, Yw = () => {
  const { currentSourcePage: e } = ot(), { sectionSuggestion: t } = Le(), { sectionURLParameter: n } = P(), o = A4(null);
  D4(() => b(void 0, null, function* () {
    var r;
    if (t.value && n.value)
      o.value = t.value.getSectionSize(n.value);
    else if (t.value) {
      const { missingSections: l } = t.value;
      o.value = Object.keys(l).reduce(
        (c, d) => c + t.value.getSectionSize(d),
        0
      );
    } else if (e.value && !Gt) {
      const l = e.value.language, c = e.value.title;
      o.value = yield B4(l, c);
    } else
      o.value = ((r = e.value) == null ? void 0 : r.articleSize) || null;
  }));
  const s = tp(() => o.value ? !t.value && Gt ? Hf(o.value) : Ku(o.value) : Xe.unknown);
  return { isQuickTranslation: tp(() => s.value === Xe.stub || s.value === Xe.easy), difficulty: s, sizeInBytes: o };
}, gd = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = P(), s = Lt(), { difficulty: a } = Yw();
  return {
    logDashboardTranslationStartEvent: () => {
      const l = {
        event_type: "dashboard_translation_start",
        event_source: Iw.value,
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
      targetSectionTitle: d
    } = t.value, i = {
      event_type: "dashboard_translation_continue",
      translation_id: n,
      translation_source_language: o,
      translation_source_title: a,
      translation_target_language: s,
      translation_target_title: r,
      translation_type: l ? "article" : "section"
    };
    return c && (i.translation_source_section = c), d && (i.translation_target_section = d), e(i);
  };
}, F4 = window.Vue.ref, N4 = () => {
  const e = nt(), { logDashboardTranslationStartEvent: t } = gd(), n = md(), o = ws(), { sectionURLParameter: s } = P(), { targetPageExists: a } = cn(), { selectPageSectionByTitle: r } = Ir(), l = () => b(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), c = F4(!1), { currentTranslation: d } = Xt();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !Gt ? c.value = !0 : (n(), o()) : s.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: c
  };
};
const M4 = window.Vue.resolveDirective, np = window.Vue.createElementVNode, op = window.Vue.withDirectives, U4 = window.Vue.unref, I4 = window.Vue.withCtx, R4 = window.Vue.openBlock, z4 = window.Vue.createBlock, O4 = {
  href: "",
  target: "_blank"
}, j4 = window.Codex.CdxDialog, H4 = {
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
    const n = e, o = t, s = (d) => o("update:modelValue", d), a = fe(), r = {
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
    return (d, i) => {
      const u = M4("i18n");
      return R4(), z4(U4(j4), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: d.$i18n("cx-unreviewed-translation-dialog-title"),
        "use-close-button": !0,
        "primary-action": r,
        "default-action": l,
        "onUpdate:open": i[0] || (i[0] = (g) => s(g)),
        onPrimary: c,
        onDefault: i[1] || (i[1] = (g) => s(!1))
      }, {
        default: I4(() => [
          op(np("p", null, null, 512), [
            [u, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          op(np("a", O4, null, 512), [
            [u, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
}, G4 = () => {
  const {
    sectionURLParameter: e,
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = P(), { loadSuggestion: s } = Fa();
  return () => b(void 0, null, function* () {
    const a = yield s(
      t.value,
      n.value,
      o.value
    );
    return a instanceof on ? a.sourceSections.includes(e.value) : !1;
  });
};
const ye = window.Vue.unref, q4 = window.Vue.resolveDirective, Gs = window.Vue.createElementVNode, sp = window.Vue.withDirectives, qs = window.Vue.openBlock, ac = window.Vue.createElementBlock, ic = window.Vue.createCommentVNode, St = window.Vue.createVNode, Mt = window.Vue.withCtx, rc = window.Vue.toDisplayString, lc = window.Vue.createTextVNode, W4 = window.Vue.withModifiers, ap = window.Vue.createBlock, X4 = window.Vue.Fragment, K4 = { class: "sx-translation-confirmer-body pb-4" }, Y4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, Q4 = ["innerHTML"], J4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, Z4 = ["href"], eL = ["innerHTML"], cc = window.Vue.computed, uc = window.Vue.ref, tL = window.Vue.watchEffect, nL = window.Vuex.useStore, dc = window.Codex.CdxButton, oL = window.Codex.CdxIcon, sL = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = nt(), o = nL(), { sectionSuggestion: s } = Le(), { targetLanguageAutonym: a } = ze(o), { sectionURLParameter: r, clearSectionURLParameter: l } = P(), { logDashboardTranslationStartEvent: c } = gd(), d = ws(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: u } = N4(), g = uc(!1), m = uc(null), p = () => b(this, null, function* () {
      let ee = !0;
      try {
        ee = yield $t.checkUnreviewedTranslations();
      } catch (ne) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          ne
        );
      }
      ee !== !0 && (g.value = !0, m.value = ee.targetUrl);
    }), h = () => b(this, null, function* () {
      yield p(), !g.value && (c(), d());
    }), f = () => b(this, null, function* () {
      yield p(), !g.value && i();
    }), w = t;
    tL(() => {
      u.value && (w("open-translation-confirmation-dialog"), u.value = !1);
    });
    const {
      actionInformationMessage: v,
      getActionButtonLabel: C,
      isProgressiveButton: y,
      targetArticlePath: _
    } = u4(), V = fe(), E = cc(
      () => V.i18n(C(!!r.value))
    ), N = () => b(this, null, function* () {
      yield p(), !g.value && n.push({ name: "sx-section-selector" });
    }), x = cc(() => {
      var ee, ne;
      return r.value && !!((ne = (ee = s.value) == null ? void 0 : ee.sourceSections) != null && ne.length);
    }), { targetPageExists: B } = cn(), R = cc(() => !r.value && B.value && Gt), X = G4(), ae = uc(!1);
    return X().then((ee) => {
      ee || l(), ae.value = !0;
    }), (ee, ne) => {
      const D = q4("i18n");
      return qs(), ac(X4, null, [
        Gs("section", K4, [
          ye(r) && ae.value ? (qs(), ac("section", Y4, [
            sp(Gs("h6", null, null, 512), [
              [D, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Gs("h5", {
              class: "ma-0",
              innerHTML: ye(r)
            }, null, 8, Q4)
          ])) : ye(B) && !ye(r) ? (qs(), ac("section", J4, [
            St(ye(I), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Mt(() => [
                sp(St(ye(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [D, [ye(a)], "cx-sx-existing-translation-status"]
                ]),
                St(ye(k), { shrink: "" }, {
                  default: Mt(() => [
                    Gs("a", {
                      href: ye(_),
                      target: "_blank"
                    }, [
                      St(ye(oL), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: ye(Ba)
                      }, null, 8, ["icon"])
                    ], 8, Z4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            St(ye(I), { class: "ma-0" }, {
              default: Mt(() => [
                St(ye(k), null, {
                  default: Mt(() => [
                    Gs("span", { innerHTML: ye(v) }, null, 8, eL)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : ic("", !0),
          St(ye(I), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Mt(() => [
              x.value ? (qs(), ap(ye(k), {
                key: 0,
                shrink: ""
              }, {
                default: Mt(() => [
                  St(ye(dc), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: W4(N, ["stop"])
                  }, {
                    default: Mt(() => [
                      lc(rc(ee.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ic("", !0),
              R.value ? (qs(), ap(ye(k), {
                key: 1,
                shrink: ""
              }, {
                default: Mt(() => [
                  St(ye(dc), {
                    size: "large",
                    onClick: h
                  }, {
                    default: Mt(() => [
                      lc(rc(ee.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ic("", !0),
              St(ye(k), { shrink: "" }, {
                default: Mt(() => [
                  St(ye(dc), {
                    weight: "primary",
                    size: "large",
                    action: ye(y) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: Mt(() => [
                      lc(rc(E.value), 1)
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
        St(H4, {
          modelValue: g.value,
          "onUpdate:modelValue": ne[0] || (ne[0] = (z) => g.value = z),
          "target-url": m.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const gc = window.Vue.unref, aL = window.Vue.openBlock, iL = window.Vue.createBlock, rL = window.Vue.computed, Qw = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t } = Aa(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = P(), { currentLanguageTitleGroup: s } = cn(), a = rL(
      () => {
        var d;
        return ((d = s.value) == null ? void 0 : d.titles.map((i) => i.lang)) || [];
      }
    ), r = cx(), l = (d) => r(d, o.value), c = (d) => r(n.value, d);
    return (d, i) => (aL(), iL(Sr, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": gc(t),
      "selected-source-language": gc(n),
      "selected-target-language": gc(o),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": c
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, lL = (e) => {
  const s = e / 5 / 15;
  return Math.ceil(s);
};
const Fe = window.Vue.unref, mc = window.Vue.toDisplayString, On = window.Vue.createElementVNode, Qt = window.Vue.createVNode, Oo = window.Vue.withCtx, cL = window.Vue.resolveDirective, uL = window.Vue.withDirectives, dL = window.Vue.normalizeClass, ip = window.Vue.openBlock, gL = window.Vue.createElementBlock, mL = window.Vue.createCommentVNode, pL = window.Vue.createBlock, hL = ["textContent"], fL = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, wL = ["textContent"], vL = { class: "pe-3" }, _L = ["textContent"], SL = window.Codex.CdxButton, Ws = window.Codex.CdxIcon, jn = window.Vue.computed, yL = window.Vuex.useStore, CL = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = yL(), { currentSourcePage: n } = ot(), { sectionSuggestion: o } = Le(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l
    } = P(), c = jn(() => t.state.suggestions.favorites || []), d = jn(
      () => c.value.some(
        (N) => r.value === N.title && s.value === N.sourceLanguage && a.value === N.targetLanguage
      )
    ), { markFavoriteSuggestion: i, removeFavoriteSuggestion: u } = ud(), g = () => i(
      r.value,
      s.value,
      a.value
    ), m = () => u(
      new rs({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), p = jn(
      () => d.value ? Zf : ew
    ), h = jn(
      () => d.value ? m : g
    ), f = jn(
      () => Z.getPageUrl(s.value || "", r.value || "")
    ), w = jn(
      () => {
        var N;
        return mw.language.convertNumber((((N = n.value) == null ? void 0 : N.langLinksCount) || 0) + 1);
      }
    ), v = (N) => {
      const x = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let B = 0; B < x.length; B++)
        if (N >= x[B].value)
          return mw.language.convertNumber(
            Number((N / x[B].value).toFixed(1).replace(/\.0$/, ""))
          ) + x[B].suffix;
      return mw.language.convertNumber(N);
    }, C = jn(() => {
      var x;
      const N = Object.values(((x = n.value) == null ? void 0 : x.pageviews) || {}).reduce(
        (B, R) => B + R,
        0
      );
      return v(N);
    }), { isQuickTranslation: y, sizeInBytes: _ } = Yw(), V = fe(), E = jn(() => {
      if (!o.value && !n.value || !_.value)
        return "";
      const N = lL(_.value), x = N >= 60 ? N / 60 : 0, B = Math.round(x * 2) / 2, R = mw.language.convertNumber(B), X = mw.language.convertNumber(N);
      if (!o.value && Gt)
        return V.i18n(
          "cx-sx-translation-confirmer-translation-time-whole-article",
          R,
          X
        );
      if (o.value) {
        if (l.value)
          return V.i18n(
            "cx-sx-translation-confirmer-translation-time-single-section",
            R,
            X
          );
      } else
        return V.i18n(
          "cx-sx-translation-confirmer-translation-time-lead-section",
          R,
          X
        );
      const ae = Object.keys(o.value.missingSections).length;
      return V.i18n(
        "cx-sx-translation-confirmer-translation-time-sections",
        R,
        X,
        mw.language.convertNumber(ae)
      );
    });
    return (N, x) => {
      const B = cL("i18n");
      return ip(), pL(Fe(I), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: Oo(() => [
          Qt(Fe(k), null, {
            default: Oo(() => [
              Qt(Fe(I), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: Oo(() => [
                  Qt(Fe(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: Oo(() => [
                      On("h5", {
                        class: "ma-0 me-1",
                        textContent: mc(Fe(r))
                      }, null, 8, hL),
                      Qt(Fe(Ws), {
                        size: "x-small",
                        icon: Fe(Ba)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Qt(Fe(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Oo(() => [
                      Qt(Fe(SL), {
                        class: "px-0",
                        weight: "quiet",
                        action: d.value ? "progressive" : "default",
                        "aria-label": N.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: Oo(() => [
                          Qt(Fe(Ws), { icon: p.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              On("div", fL, [
                On("div", null, [
                  On("span", null, [
                    Qt(Fe(Ws), {
                      icon: Fe(nw),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    On("span", {
                      class: "pe-3",
                      textContent: mc(w.value)
                    }, null, 8, wL)
                  ]),
                  On("span", null, [
                    Qt(Fe(Ws), {
                      icon: Fe(tw),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    uL(On("span", vL, null, 512), [
                      [B, [C.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                E.value ? (ip(), gL("span", {
                  key: 0,
                  class: dL(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Fe(y)
                  }])
                }, [
                  Qt(Fe(Ws), {
                    icon: Fe(DC),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  On("span", {
                    textContent: mc(E.value)
                  }, null, 8, _L)
                ], 2)) : mL("", !0)
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
const xL = window.Vue.resolveDirective, wo = window.Vue.createElementVNode, ki = window.Vue.withDirectives, bL = window.Vue.toDisplayString, kL = window.Vue.createTextVNode, pc = window.Vue.unref, hc = window.Vue.withCtx, fc = window.Vue.openBlock, wc = window.Vue.createBlock;
window.Vue.createCommentVNode;
const $L = { class: "pa-4" }, VL = { class: "flex pt-2" }, EL = window.Codex.CdxButton, LL = window.Vue.ref, TL = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = ws(), a = md(), r = LL(!1), { currentTranslation: l } = Xt(), c = () => b(this, null, function* () {
      r.value = !0;
      let d = !1;
      try {
        d = yield $t.splitTranslation(
          l.value.translationId
        );
      } catch (i) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          i
        );
      }
      r.value = !1, d && (a(), s(), o());
    });
    return (d, i) => {
      const u = xL("i18n");
      return fc(), wc(pc(Vt), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: hc(() => [
          wo("div", VL, [
            r.value ? (fc(), wc(pc(mt), { key: 1 })) : (fc(), wc(pc(EL), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: hc(() => [
                kL(bL(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: hc(() => [
          wo("div", $L, [
            ki(wo("p", null, null, 512), [
              [u, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ki(wo("p", null, null, 512), [
              [u, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            wo("p", null, [
              ki(wo("strong", null, null, 512), [
                [u, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ki(wo("p", null, null, 512), [
              [u, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
};
const rp = window.Vue.unref, AL = window.Vue.createVNode, lp = window.Vue.toDisplayString, $i = window.Vue.createElementVNode, DL = window.Vue.openBlock, PL = window.Vue.createElementBlock, BL = { class: "cx-translation-confirmer-featured-collection-banner ma-4 px-4 py-3" }, FL = { class: "cx-translation-confirmer-featured-collection-banner__header" }, NL = { class: "cx-translation-confirmer-featured-collection-banner__header-text" }, ML = { class: "cx-translation-confirmer-featured-collection-banner__body" }, UL = window.Vue.computed, IL = window.Codex.CdxIcon, RL = {
  __name: "SXTranslationConfirmerFeaturedCollectionBanner",
  setup(e) {
    const { featuredCollection: t } = Wt(), n = UL(() => {
      var o;
      return (o = t.value) == null ? void 0 : o.name;
    });
    return (o, s) => (DL(), PL("div", BL, [
      $i("div", FL, [
        AL(rp(IL), {
          icon: rp(od),
          size: "small",
          class: "cx-translation-confirmer-featured-collection-banner__header-icon me-2"
        }, null, 8, ["icon"]),
        $i("span", NL, lp(o.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      $i("div", ML, [
        $i("p", null, lp(n.value), 1)
      ])
    ]));
  }
}, zL = window.Vuex.useStore;
let Vi = [];
const pd = () => {
  const e = zL();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Vi.includes(o) ? Promise.resolve() : (Vi.push(o), gs.fetchLanguageTitles(t, n).then((s) => {
      Vi = Vi.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, OL = window.Vue.ref, jo = OL(null), Jw = () => {
  const e = () => b(void 0, null, function* () {
    var n, o;
    jo.value || (yield Lr.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, jo.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        jo.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = jo.value) == null ? void 0 : n.refreshAt) <= t ? (jo.value = null, e()) : (o = jo.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const cp = window.Vue.resolveDirective, Ei = window.Vue.createElementVNode, up = window.Vue.withDirectives, Hn = window.Vue.unref, Li = window.Vue.withCtx, Sn = window.Vue.createVNode, Ti = window.Vue.openBlock, dp = window.Vue.createElementBlock, jL = window.Vue.createCommentVNode, gp = window.Vue.createBlock, HL = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, GL = { class: "mb-0" }, qL = { class: "sx-translation-confirmer__article-image flex justify-center" }, WL = ["src"], XL = { class: "ma-3" }, mp = window.Vue.computed, KL = window.Vue.inject, YL = window.Vue.onBeforeUnmount, pp = window.Vue.ref, QL = window.Vue.watch, JL = window.Vuex.useStore, ZL = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = JL(), { currentSourcePage: n } = ot(), { previousRoute: o } = ze(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      clearTranslationURLParameters: l
    } = P(), { inFeaturedCollection: c } = sd(), d = KL("breakpoints"), i = mp(() => d.value.nextBreakpoint), u = mp(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(i.value);
      }
    ), g = pp(!1);
    QL(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.wikidataId;
      },
      (y) => b(this, null, function* () {
        const _ = yield c([y]);
        g.value = _[y];
      }),
      { immediate: !0 }
    );
    const { fetchTranslationsByStatus: m } = fs(), p = pd();
    m("draft"), p(s.value, r.value), dd(), Jw()(), aw()(a.value);
    const w = nt(), v = () => {
      const y = ["dashboard", "sx-article-search"];
      !o.value || !y.includes(o.value) ? w.push({ name: "dashboard" }) : w.push({ name: o.value });
    };
    YL(() => {
      const y = w.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && l();
    });
    const C = pp(!1);
    return (y, _) => {
      const V = cp("i18n"), E = cp("i18n-html");
      return Ti(), dp("section", HL, [
        Sn(Hn(I), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Li(() => [
            Sn(Hn(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Li(() => [
                up(Ei("h5", GL, null, 512), [
                  [V, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Sn(Hn(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Li(() => [
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
        Ei("div", qL, [
          u.value ? (Ti(), dp("img", {
            key: 0,
            src: u.value
          }, null, 8, WL)) : (Ti(), gp(Hn(et), {
            key: 1,
            size: "120",
            icon: Hn(_f),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Sn(CL),
        g.value ? (Ti(), gp(RL, { key: 0 })) : jL("", !0),
        Sn(Qw),
        Sn(sL, {
          onOpenTranslationConfirmationDialog: _[0] || (_[0] = (N) => C.value = !0)
        }),
        Sn(Hn(I), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Li(() => [
            Ei("p", XL, [
              up(Ei("small", null, null, 512), [
                [E, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Sn(TL, {
          modelValue: C.value,
          "onUpdate:modelValue": _[1] || (_[1] = (N) => C.value = N)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const e3 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: ZL
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, t3 = window.Vue.resolveComponent, n3 = window.Vue.createVNode, o3 = window.Vue.normalizeClass, s3 = window.Vue.openBlock, a3 = window.Vue.createElementBlock;
function i3(e, t, n, o, s, a) {
  const r = t3("sx-translation-confirmer");
  return s3(), a3("main", {
    class: o3(["sx-translation-confirmer-view", a.classes])
  }, [
    n3(r)
  ], 2);
}
const r3 = /* @__PURE__ */ he(e3, [["render", i3]]);
const l3 = window.Vue.toDisplayString, hp = window.Vue.unref, c3 = window.Vue.createVNode, u3 = window.Vue.createTextVNode, d3 = window.Vue.createElementVNode, g3 = window.Vue.openBlock, m3 = window.Vue.createElementBlock, p3 = { class: "sx-section-selector-view-article-item" }, h3 = ["href"], f3 = window.Codex.CdxIcon, fp = {
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
    return (t, n) => (g3(), m3("span", p3, [
      d3("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        u3(l3(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        c3(hp(f3), {
          size: "x-small",
          icon: hp(Ba)
        }, null, 8, ["icon"])
      ], 8, h3)
    ]));
  }
};
const w3 = window.Vue.resolveDirective, Ai = window.Vue.createElementVNode, vc = window.Vue.withDirectives, vo = window.Vue.unref, v3 = window.Vue.toDisplayString, Di = window.Vue.withCtx, Xs = window.Vue.createVNode, _3 = window.Vue.openBlock, S3 = window.Vue.createElementBlock, y3 = { class: "sx-section-selector__header pa-4" }, C3 = { class: "sx-section-selector__header-text ma-0" }, x3 = ["textContent"], b3 = { class: "pt-0 ma-0" }, k3 = { class: "ma-0" }, $3 = window.Codex.CdxButton, V3 = window.Codex.CdxIcon, E3 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Le();
    return (n, o) => {
      const s = w3("i18n");
      return _3(), S3("div", y3, [
        Xs(vo(I), { class: "ma-0 pb-3" }, {
          default: Di(() => [
            Xs(vo(k), null, {
              default: Di(() => {
                var a;
                return [
                  vc(Ai("h6", C3, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Ai("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: v3((a = vo(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, x3)
                ];
              }),
              _: 1
            }),
            Xs(vo(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Di(() => [
                Xs(vo($3), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Di(() => [
                    Xs(vo(V3), { icon: vo(ps) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vc(Ai("h4", b3, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        vc(Ai("p", k3, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, wp = window.Vue.renderSlot, L3 = window.Vue.renderList, T3 = window.Vue.Fragment, _c = window.Vue.openBlock, vp = window.Vue.createElementBlock, Pi = window.Vue.unref, _p = window.Vue.createVNode, Sp = window.Vue.withCtx, A3 = window.Vue.createBlock, D3 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, P3 = window.Codex.CdxButton, B3 = window.Codex.CdxIcon, Zw = {
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
    return (t, n) => (_c(), vp("ul", D3, [
      wp(t.$slots, "before-list"),
      (_c(!0), vp(T3, null, L3(e.sections, (o) => (_c(), A3(Pi(I), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Sp(() => [
          _p(Pi(P3), {
            weight: "quiet",
            class: "col justify-start items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Sp(() => [
              wp(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle,
                isEasy: o.isEasy
              }),
              _p(Pi(B3), {
                icon: Pi(hs),
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
}, F3 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const N3 = window.Vue.resolveDirective, Bi = window.Vue.createElementVNode, Fi = window.Vue.withDirectives, Ut = window.Vue.unref, Ni = window.Vue.openBlock, Sc = window.Vue.createBlock, M3 = window.Vue.createCommentVNode, Ho = window.Vue.withCtx, Ks = window.Vue.createVNode, U3 = window.Vue.toDisplayString, I3 = window.Vue.createTextVNode, R3 = window.Vue.createElementBlock, z3 = { class: "sx-section-selector__missing-sections py-2" }, O3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, j3 = ["lang", "dir", "innerHTML"], yc = window.Vue.computed, H3 = window.Codex.CdxButton, G3 = window.Codex.CdxInfoChip, q3 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Le(), { targetLanguageURLParameter: n } = P(), o = yc(() => q.getAutonym(n.value)), s = yc(
      () => {
        var r;
        return Object.keys(((r = t.value) == null ? void 0 : r.missingSections) || {}).length === 0;
      }
    ), a = yc(() => {
      var r;
      return (r = t.value) != null && r.orderedMissingSections ? t.value.orderedMissingSections.map((l) => Ye(me({}, l), {
        isEasy: Gf(
          t.value.getSectionSize(l.sourceTitle)
        )
      })) : [];
    });
    return (r, l) => {
      const c = N3("i18n");
      return Ni(), R3("section", z3, [
        Fi(Bi("h4", O3, null, 512), [
          [c, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (Ni(), Sc(Ut(I), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Ho(() => [
            Ks(Ut(k), {
              class: "py-6 justify-center",
              innerHTML: Ut(F3)
            }, null, 8, ["innerHTML"]),
            Ks(Ut(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Ho(() => [
                Fi(Bi("h6", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Ks(Ut(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Ho(() => [
                Fi(Bi("p", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Ks(Ut(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Ho(() => [
                Ks(Ut(H3), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: l[1] || (l[1] = (d) => r.$emit("close"))
                }, {
                  default: Ho(() => [
                    I3(U3(r.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Ni(), Sc(Zw, {
          key: 0,
          sections: a.value,
          onSelectSection: l[0] || (l[0] = (d) => r.$emit("select-section", d))
        }, {
          default: Ho(({ sourceSection: d, isEasy: i }) => {
            var u, g;
            return [
              Bi("h5", {
                class: "ma-0",
                lang: (u = Ut(t)) == null ? void 0 : u.sourceLanguage,
                dir: Ut(q.getDir)((g = Ut(t)) == null ? void 0 : g.sourceLanguage),
                innerHTML: d
              }, null, 8, j3),
              i ? Fi((Ni(), Sc(Ut(G3), {
                key: 0,
                class: "sx-section-selector__easy-section-badge"
              }, null, 512)), [
                [c, void 0, "cx-sx-section-selector-easy-section-badge"]
              ]) : M3("", !0)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const W3 = window.Vue.resolveDirective, Go = window.Vue.createElementVNode, X3 = window.Vue.withDirectives, yt = window.Vue.unref, K3 = window.Vue.toDisplayString, Mi = window.Vue.createVNode, Ui = window.Vue.withCtx, Y3 = window.Vue.openBlock, Q3 = window.Vue.createElementBlock, J3 = { class: "sx-section-selector__present-sections py-2" }, Z3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, e5 = { class: "sx-section-selector__present-section-button-content" }, t5 = ["textContent"], n5 = { class: "sx-section-selector__present-section-button-content" }, o5 = ["lang", "dir", "innerHTML"], s5 = ["lang", "dir", "innerHTML"], a5 = window.Vue.computed, i5 = window.Codex.CdxButton, r5 = window.Codex.CdxIcon, yp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Le(), { targetLanguageURLParameter: n } = P(), o = a5(() => q.getAutonym(n.value));
    return (s, a) => {
      var l;
      const r = W3("i18n");
      return Y3(), Q3("section", J3, [
        X3(Go("h4", Z3, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        Mi(Zw, {
          sections: ((l = yt(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[1] || (a[1] = (c) => s.$emit("select-section", c))
        }, {
          "before-list": Ui(() => [
            Mi(yt(I), {
              tag: "li",
              class: "ma-0"
            }, {
              default: Ui(() => [
                Mi(yt(i5), {
                  weight: "quiet",
                  class: "col justify-start items-center py-3 px-4",
                  "aria-label": s.$i18n("sx-section-selector-next-button-aria-label"),
                  onClick: a[0] || (a[0] = (c) => s.$emit("select-section", yt(no).LEAD_SECTION_DUMMY_TITLE))
                }, {
                  default: Ui(() => [
                    Go("div", e5, [
                      Go("h5", {
                        class: "sx-section-selector__present-section-button-source",
                        textContent: K3(s.$i18n("cx-sx-present-lead-section-label"))
                      }, null, 8, t5)
                    ]),
                    Mi(yt(r5), {
                      icon: yt(hs),
                      class: "ms-auto"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          default: Ui(({ sourceSection: c, targetSection: d }) => {
            var i, u, g, m;
            return [
              Go("div", n5, [
                Go("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = yt(t)) == null ? void 0 : i.sourceLanguage,
                  dir: yt(q.getDir)((u = yt(t)) == null ? void 0 : u.sourceLanguage),
                  innerHTML: c
                }, null, 8, o5),
                Go("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = yt(t)) == null ? void 0 : g.targetLanguage,
                  dir: yt(q.getDir)((m = yt(t)) == null ? void 0 : m.targetLanguage),
                  innerHTML: d
                }, null, 8, s5)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Ue = window.Vue.createVNode, Cc = window.Vue.openBlock, Cp = window.Vue.createBlock, xp = window.Vue.createCommentVNode, l5 = window.Vue.resolveDirective, Gn = window.Vue.createElementVNode, Ys = window.Vue.withDirectives, rt = window.Vue.unref, yn = window.Vue.withCtx, c5 = window.Vue.normalizeClass, bp = window.Vue.toDisplayString, kp = window.Vue.createTextVNode, u5 = window.Vue.createElementBlock, d5 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, g5 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, m5 = { class: "sx-section-selector__additional-consideration-title" }, p5 = { href: "#" }, h5 = { class: "sx-section-selector__additional-consideration-title" }, f5 = { href: "#" }, Qs = window.Vue.computed, w5 = window.Vue.inject, v5 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = w5("breakpoints"), n = Qs(() => t.value.desktopAndUp), { sectionSuggestion: o } = Le(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = P(), c = Qs(() => q.getAutonym(s.value)), d = Qs(() => q.getAutonym(a.value)), i = Qs(
      () => {
        var C;
        return Z.getPageUrl(s.value, (C = o.value) == null ? void 0 : C.sourceTitle);
      }
    ), u = Qs(
      () => {
        var C;
        return Z.getPageUrl(a.value, (C = o.value) == null ? void 0 : C.targetTitle);
      }
    ), g = nt(), m = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: p } = Xt(), h = ws(), f = md(), { selectPageSectionByTitle: w } = Ir(), v = (C) => {
      l(C), p.value ? (f(), h()) : (w(C), g.push({ name: "sx-content-comparator" }));
    };
    return mw.cx.eventlogging.stats.selectSectionAccess(!n.value), (C, y) => {
      const _ = l5("i18n");
      return Cc(), u5("section", d5, [
        Ue(E3, { onClose: m }),
        Ue(Qw),
        Ue(rt(I), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: yn(() => [
            Ue(rt(k), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: yn(() => [
                Ue(q3, {
                  onSelectSection: v,
                  onClose: m
                }),
                n.value ? xp("", !0) : (Cc(), Cp(yp, {
                  key: 0,
                  onSelectSection: v
                })),
                Gn("section", {
                  class: c5(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Ys(Gn("h4", g5, null, 512), [
                    [_, [
                      d.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Ue(rt(I), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: yn(() => [
                      Ue(rt(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: yn(() => [
                          Ue(fp, {
                            path: i.value,
                            autonym: c.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Ue(rt(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: yn(() => [
                          Ue(fp, {
                            path: u.value,
                            autonym: d.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 2),
                Ue(rt(I), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: yn(() => [
                    Ue(rt(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: yn(() => [
                        Gn("h6", m5, [
                          Ue(rt(et), {
                            icon: rt(Y0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          kp(" " + bp(C.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Ys(Gn("p", null, null, 512), [
                          [_, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Ys(Gn("a", p5, null, 512), [
                          [_, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Ue(rt(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: yn(() => [
                        Gn("h6", h5, [
                          Ue(rt(et), {
                            icon: rt(K0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          kp(" " + bp(C.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Ys(Gn("p", null, null, 512), [
                          [_, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Ys(Gn("a", f5, null, 512), [
                          [_, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
            n.value ? (Cc(), Cp(rt(k), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: yn(() => [
                Ue(yp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: v
                })
              ]),
              _: 1
            })) : xp("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, _5 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: v5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, S5 = window.Vue.resolveComponent, y5 = window.Vue.createVNode, C5 = window.Vue.normalizeClass, x5 = window.Vue.openBlock, b5 = window.Vue.createElementBlock;
function k5(e, t, n, o, s, a) {
  const r = S5("sx-section-selector");
  return x5(), b5("main", {
    class: C5(["sx-section-selector-view", a.classes])
  }, [
    y5(r)
  ], 2);
}
const $5 = /* @__PURE__ */ he(_5, [["render", k5]]), Ii = window.Vue.computed, V5 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = P(), n = Ii(
    () => q.getAutonym(e.value)
  ), o = Ii(
    () => q.getAutonym(t.value)
  ), { target: s, PUBLISHING_TARGETS: a } = Tt(), r = Ii(
    () => s.value === a.EXPAND
  ), l = fe();
  return Ii(() => {
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
    let d;
    return r.value ? d = {
      value: "target_section",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-target-selector-target-section-title",
          o.value
        ),
        type: "text"
      }
    } : d = {
      value: "target_article",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-target-selector-full-article-title",
          o.value
        ),
        type: "text"
      }
    }, [c, d];
  });
};
const $p = window.Vue.unref, E5 = window.Vue.createVNode, L5 = window.Vue.openBlock, T5 = window.Vue.createElementBlock, A5 = { class: "sx-content-comparator__content-type-selector" }, D5 = window.Vue.watchEffect, P5 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = V5();
    return D5(() => {
      a.value.map((l) => l.value).includes(n.selection) || s(a.value[0].value);
    }), (r, l) => (L5(), T5("div", A5, [
      E5($p(Ea), {
        items: $p(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Ri = window.Vue.computed, ev = () => {
  const { currentTargetPage: e } = ot(), { activeSectionTargetTitle: t } = Le(), n = Ri(
    () => {
      var l;
      return (((l = o.value) == null ? void 0 : l.title) || "").replace(/ /g, "_");
    }
  ), o = Ri(
    () => {
      var l;
      return (l = e.value) == null ? void 0 : l.getSectionByTitle(t.value);
    }
  ), { sourceSection: s } = se(), a = Ri(() => {
    var l;
    return (l = s.value) == null ? void 0 : l.html;
  }), r = Ri(() => {
    var l;
    return (l = o.value) == null ? void 0 : l.html;
  });
  return {
    sourceSectionContent: a,
    targetSectionAnchor: n,
    targetSectionContent: r
  };
};
const zi = window.Vue.createVNode, Cn = window.Vue.unref, B5 = window.Vue.resolveDirective, F5 = window.Vue.withDirectives, Js = window.Vue.openBlock, Vp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Oi = window.Vue.withCtx, xc = window.Vue.createBlock, N5 = window.Vue.normalizeClass, M5 = {
  key: 0,
  class: "ma-0 pa-0"
}, U5 = ["lang", "dir", "innerHTML"], Ep = window.Vue.ref, ji = window.Vue.computed, I5 = window.Vue.onMounted, R5 = window.Vue.onBeforeUnmount, z5 = {
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
    const n = e, o = t, s = Ep(!1), { sectionSuggestion: a, activeSectionTargetTitle: r } = Le(), { isPresentLeadSection: l } = ht(), { sectionURLParameter: c } = P(), d = ji(
      () => (g.value || "").replace(/ /g, "_")
    ), i = (w) => o("update:contentTypeSelection", w), { targetSectionAnchor: u } = ev(), g = ji(
      () => {
        var w;
        return (((w = a.value) == null ? void 0 : w.sourceSections) || []).find(
          (v) => v === c.value
        );
      }
    ), m = ji(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: g.value,
            path: `${Z.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${d.value}`,
            lang: a.value.sourceLanguage,
            dir: q.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: p.value,
            lang: a.value.targetLanguage,
            dir: q.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: r.value,
            path: `${p.value}#${u.value}`
          };
      }
    }), p = ji(
      () => Z.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), h = Ep(null);
    let f;
    return I5(() => {
      f = new IntersectionObserver(
        ([v]) => {
          s.value = v.intersectionRect.height < v.boundingClientRect.height;
        },
        { threshold: [1] }
      );
      const w = () => {
        f == null || f.observe(h.value.$el);
      };
      window.addEventListener("scroll", w, {
        passive: !0,
        once: !0,
        capture: !0
      });
    }), R5(() => {
      f == null || f.disconnect(), f = null;
    }), (w, v) => {
      const C = B5("i18n");
      return Js(), xc(Cn(I), {
        ref_key: "contentHeader",
        ref: h,
        class: N5(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
        direction: "column",
        align: "stretch",
        reverse: s.value
      }, {
        default: Oi(() => [
          zi(P5, {
            selection: e.contentTypeSelection,
            "onUpdate:selection": i
          }, null, 8, ["selection"]),
          zi(Cn(I), {
            justify: "between",
            class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
          }, {
            default: Oi(() => [
              zi(Cn(k), null, {
                default: Oi(() => [
                  Cn(l) ? F5((Js(), Vp("h3", M5, null, 512)), [
                    [C, void 0, "cx-sx-present-lead-section-label"]
                  ]) : (Js(), Vp("h3", {
                    key: 1,
                    lang: m.value.lang,
                    dir: m.value.dir,
                    class: "ma-0 pa-0",
                    innerHTML: m.value.title
                  }, null, 8, U5))
                ]),
                _: 1
              }),
              zi(Cn(k), { shrink: "" }, {
                default: Oi(() => [
                  s.value ? (Js(), xc(Cn(Ke), {
                    key: 0,
                    icon: Cn(Cr),
                    progressive: "",
                    label: w.$i18n(
                      "cx-sx-content-comparator-content-header-translate-button-label"
                    ),
                    onClick: v[0] || (v[0] = (y) => w.$emit("translation-button-clicked"))
                  }, null, 8, ["icon", "label"])) : (Js(), xc(Cn(Ke), {
                    key: 1,
                    class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                    icon: Cn(vf),
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
}, Hi = window.Vue.unref, Lp = window.Vue.createVNode, O5 = window.Vue.openBlock, j5 = window.Vue.createElementBlock, H5 = { class: "sx-content-comparator__header-navigation flex items-center" }, G5 = window.Vue.computed, q5 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = P(), o = G5(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Ir(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    };
    return (l, c) => (O5(), j5("div", H5, [
      Lp(Hi(Ke), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Hi(G0),
        onClick: a
      }, null, 8, ["icon"]),
      Lp(Hi(Ke), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Hi(H0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const Tp = window.Vue.toDisplayString, we = window.Vue.unref, W5 = window.Vue.resolveDirective, Gi = window.Vue.withDirectives, xn = window.Vue.openBlock, qo = window.Vue.createElementBlock, bc = window.Vue.createCommentVNode, X5 = window.Vue.createTextVNode, K5 = window.Vue.createElementVNode, Y5 = window.Vue.normalizeClass, kc = window.Vue.withCtx, Ap = window.Vue.createVNode, $c = window.Vue.createBlock, Q5 = { class: "sx-content-comparator-header__mapped-section" }, J5 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, Z5 = { key: 0 }, eT = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, tT = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, nT = {
  key: 2,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, oT = window.Vue.computed, sT = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = P(), { activeSectionTargetTitle: n } = Le(), o = fe(), { target: s, PUBLISHING_TARGETS: a, setTarget: r } = Tt(), l = oT(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        q.getAutonym(t.value)
      )
    ), { isPresentLeadSection: c } = ht();
    return (d, i) => {
      const u = W5("i18n");
      return xn(), qo("div", Q5, [
        Ap(we(I), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: kc(() => [
            Ap(we(k), { grow: "" }, {
              default: kc(() => [
                K5("h6", J5, [
                  X5(Tp(l.value) + " ", 1),
                  we(s) === we(a).NEW_SECTION ? Gi((xn(), qo("span", Z5, null, 512)), [
                    [u, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : bc("", !0)
                ]),
                we(c) ? bc("", !0) : (xn(), qo("h6", {
                  key: 0,
                  class: Y5(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": we(s) === we(a).NEW_SECTION
                  }])
                }, Tp(we(n)), 3))
              ]),
              _: 1
            }),
            we(c) ? bc("", !0) : (xn(), $c(we(k), {
              key: 0,
              shrink: ""
            }, {
              default: kc(() => [
                we(s) === we(a).EXPAND ? (xn(), $c(we(Ke), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: we(wf),
                  type: "icon",
                  onClick: i[0] || (i[0] = (g) => we(r)(we(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (xn(), $c(we(Ke), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: we(Z0),
                  type: "icon",
                  onClick: i[1] || (i[1] = (g) => we(r)(we(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            }))
          ]),
          _: 1
        }),
        we(c) ? Gi((xn(), qo("p", eT, null, 512)), [
          [u, void 0, "cx-sx-content-comparator-mapped-lead-section-clarifications"]
        ]) : we(s) === we(a).EXPAND ? Gi((xn(), qo("p", tT, null, 512)), [
          [u, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : Gi((xn(), qo("p", nT, null, 512)), [
          [u, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const De = window.Vue.unref, Wo = window.Vue.createVNode, aT = window.Vue.toDisplayString, Zn = window.Vue.createElementVNode, iT = window.Vue.resolveDirective, Vc = window.Vue.withDirectives, Zs = window.Vue.openBlock, Ec = window.Vue.createElementBlock, Dp = window.Vue.createCommentVNode, Lc = window.Vue.withCtx, Pp = window.Vue.createBlock, rT = { class: "sx-content-comparator__header pa-4" }, lT = { class: "row my-1 py-2 mx-0 gap-6" }, cT = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, uT = { class: "sx-content-comparator-header__titles shrink" }, dT = ["lang", "dir"], gT = {
  key: 0,
  class: "sx-content-comparator-header__section-title pa-0 ma-0"
}, mT = ["lang", "dir", "innerHTML"], pT = { class: "py-2 mb-1" }, hT = /* @__PURE__ */ Zn("br", null, null, -1), qi = window.Vue.computed, fT = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = P(), { sourceSection: n } = se(), { sectionSuggestion: o } = Le(), { isCurrentSectionPresent: s } = ht(), a = qi(
      () => {
        var d;
        return (d = o.value) == null ? void 0 : d.missingSections.hasOwnProperty(t.value);
      }
    ), r = qi(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), l = qi(() => [
      no.LEAD_SECTION_DUMMY_TITLE,
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), c = qi(
      () => {
        var d;
        return (((d = o.value) == null ? void 0 : d.sourceSections) || []).find(
          (i) => i === t.value
        );
      }
    );
    return (d, i) => {
      var g;
      const u = iT("i18n");
      return Zs(), Ec("div", rT, [
        Wo(De(Ke), {
          class: "py-2 pa-0",
          icon: De(q0),
          label: d.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (m) => d.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Zn("div", lT, [
          Zn("div", cT, [
            Zn("div", uT, [
              Zn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: De(o).sourceLanguage,
                dir: De(q.getDir)(De(o).sourceLanguage)
              }, aT(De(o).sourceTitle), 9, dT),
              (g = De(n)) != null && g.isLeadSection ? Vc((Zs(), Ec("h2", gT, null, 512)), [
                [u, void 0, "cx-sx-present-lead-section-label"]
              ]) : (Zs(), Ec("h2", {
                key: 1,
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: De(o).sourceLanguage,
                dir: De(q.getDir)(De(o).sourceLanguage),
                innerHTML: c.value
              }, null, 8, mT))
            ]),
            Wo(q5, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          Zn("div", pT, [
            Wo(De(Ke), {
              class: "sx-content-comparator-header__translation-button",
              icon: De(Cr),
              progressive: "",
              label: d.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (m) => d.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (Zs(), Pp(De(I), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Lc(() => [
            Wo(De(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Lc(() => [
                Wo(De(et), { icon: De(Q0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Wo(De(k), { class: "ma-0" }, {
              default: Lc(() => [
                Vc(Zn("strong", null, null, 512), [
                  [u, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                hT,
                Vc(Zn("span", null, null, 512), [
                  [u, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Dp("", !0),
        De(s) ? (Zs(), Pp(sT, { key: 1 })) : Dp("", !0)
      ]);
    };
  }
};
const Bp = window.Vue.toDisplayString, wT = window.Vue.createElementVNode, Fp = window.Vue.openBlock, Np = window.Vue.createElementBlock, vT = window.Vue.createCommentVNode, _T = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, ST = ["textContent"], yT = ["textContent"], tv = {
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
    return (t, n) => (Fp(), Np("section", _T, [
      wT("h5", {
        textContent: Bp(e.placeholderTitle)
      }, null, 8, ST),
      e.placeholderSubtitle ? (Fp(), Np("p", {
        key: 0,
        textContent: Bp(e.placeholderSubtitle)
      }, null, 8, yT)) : vT("", !0)
    ]));
  }
}, CT = (e, t, n) => {
  const o = t.indexOf(e);
  return t.slice(o + 1).map((a) => n[a]).filter(Boolean)[0] || null;
}, xT = ({
  sourceSectionTitle: e,
  sourceSectionTitles: t,
  targetSectionTitles: n,
  presentSectionMappings: o,
  targetAppendixSectionTitles: s
}) => {
  const a = CT(
    e,
    t,
    o
  );
  return a !== null ? a : n.find(
    (l) => s.includes(l)
  ) || null;
}, Tc = window.Vue.computed, bT = window.Vue.createApp, kT = window.Vuex.useStore, $T = () => {
  const e = kT(), { sectionSuggestion: t } = Le(), { currentTargetPage: n } = ot(), { sectionURLParameter: o } = P(), s = fe(), a = () => bT(
    tv,
    {
      placeholderTitle: s.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, r = Tc(() => {
    const { appendixSectionTitles: d } = e.state.suggestions;
    return d[t.value.targetLanguage] || [];
  }), l = Tc(
    () => xT({
      sourceSectionTitle: o.value,
      sourceSectionTitles: t.value.sourceSections,
      targetSectionTitles: t.value.targetSections,
      presentSectionMappings: t.value.presentSections,
      targetAppendixSectionTitles: r.value
    })
  ), c = (d) => {
    const i = d.getElementsByTagName("base");
    Array.from(i).forEach(
      (u) => u.parentNode.removeChild(u)
    );
  };
  return Tc(() => {
    var u;
    if (!((u = n.value) != null && u.content))
      return null;
    const d = document.createElement("div");
    d.innerHTML = n.value.content, c(d);
    const i = a();
    if (l.value) {
      const g = Array.from(
        d.querySelectorAll("h2")
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
      d.appendChild(i);
    return d.innerHTML;
  });
};
const Ac = window.Vue.createVNode, lt = window.Vue.unref, Xo = window.Vue.openBlock, Mp = window.Vue.createBlock, Up = window.Vue.createCommentVNode, Wi = window.Vue.createElementVNode, Dc = window.Vue.Fragment, Xi = window.Vue.createElementBlock, VT = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, ET = { class: "sx-content-comparator__source-content" }, LT = ["lang", "dir", "innerHTML"], TT = ["lang", "dir", "innerHTML"], AT = ["innerHTML"], DT = window.Vue.ref, Ip = window.Vue.computed, Rp = window.Vue.watch, PT = window.Vue.inject, BT = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = Tt(), n = nt(), o = DT("source_section"), { logDashboardTranslationStartEvent: s } = gd(), a = ws(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      s(), a();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: d
    } = P(), { sourceSectionContent: i, targetSectionContent: u } = ev(), g = $T(), { sectionSuggestion: m } = Le(), { isCurrentSectionPresent: p } = ht(), h = Ip(() => m.value.targetTitle), f = Kw();
    Rp(
      h,
      () => b(this, null, function* () {
        try {
          yield f(
            d.value,
            c.value,
            h.value
          );
        } catch (C) {
          throw mw.cx.eventlogging.stats.sourceArticleFetchFailed(!0), C;
        }
      }),
      { immediate: !0 }
    ), Rp(p, t, { immediate: !0 });
    const w = PT("breakpoints"), v = Ip(() => w.value.mobile);
    return mw.cx.eventlogging.stats.sectionCompareAccess(v.value), (C, y) => (Xo(), Xi("section", VT, [
      Ac(fT, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      Ac(z5, {
        "content-type-selection": o.value,
        "onUpdate:contentTypeSelection": y[0] || (y[0] = (_) => o.value = _),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      Wi("section", ET, [
        o.value === "source_section" ? (Xo(), Xi(Dc, { key: 0 }, [
          lt(i) ? Up("", !0) : (Xo(), Mp(lt(mt), { key: 0 })),
          Wi("section", {
            lang: lt(c),
            dir: lt(q.getDir)(lt(c)),
            class: "pt-2 px-4",
            innerHTML: lt(i)
          }, null, 8, LT)
        ], 64)) : o.value === "target_article" ? (Xo(), Xi(Dc, { key: 1 }, [
          lt(g) ? Up("", !0) : (Xo(), Mp(lt(mt), { key: 0 })),
          Wi("article", {
            lang: lt(d),
            dir: lt(q.getDir)(lt(d)),
            class: "px-4",
            innerHTML: lt(g)
          }, null, 8, TT)
        ], 64)) : (Xo(), Xi(Dc, { key: 2 }, [
          Wi("section", {
            class: "pa-4",
            innerHTML: lt(u)
          }, null, 8, AT),
          Ac(tv, {
            class: "sx-content-comparator__new-section-placeholder--present",
            "placeholder-title": C.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
            "placeholder-subtitle": C.$i18n(
              "cx-sx-content-comparator-present-section-placeholder-subtitle"
            )
          }, null, 8, ["placeholder-title", "placeholder-subtitle"])
        ], 64))
      ])
    ]));
  }
}, FT = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: BT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, NT = window.Vue.resolveComponent, MT = window.Vue.createVNode, UT = window.Vue.normalizeClass, IT = window.Vue.openBlock, RT = window.Vue.createElementBlock;
function zT(e, t, n, o, s, a) {
  const r = NT("sx-content-comparator");
  return IT(), RT("main", {
    class: UT(["sx-content-comparator-view", a.classes])
  }, [
    MT(r)
  ], 2);
}
const OT = /* @__PURE__ */ he(FT, [["render", zT]]);
const jT = window.Vue.resolveDirective, ea = window.Vue.createElementVNode, zp = window.Vue.withDirectives, Ki = window.Vue.unref, Pc = window.Vue.createVNode, Op = window.Vue.toDisplayString, jp = window.Vue.createTextVNode, ta = window.Vue.withCtx, HT = window.Vue.openBlock, GT = window.Vue.createBlock, qT = { class: "mw-ui-dialog__header px-4 py-3" }, WT = { class: "mw-ui-dialog__header-title" }, XT = { class: "pa-4" }, KT = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Hp = window.Codex.CdxButton, YT = {
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
      const c = jT("i18n");
      return HT(), GT(Ki(Vt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: ta(() => [
          ea("div", qT, [
            zp(ea("span", WT, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: ta(() => [
          ea("div", KT, [
            Pc(Ki(Hp), {
              weight: "quiet",
              onClick: s
            }, {
              default: ta(() => [
                jp(Op(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Pc(Ki(Hp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: ta(() => [
                jp(Op(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ta(() => [
          Pc(Ki(yr)),
          ea("div", XT, [
            zp(ea("span", null, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, QT = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => ko(a)
  );
  return s && bf(s) ? $t.parseTemplateWikitext(
    Cf(s),
    n,
    t
  ) : Promise.resolve(null);
}, nv = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => ko(a)
  );
  return s ? $t.parseTemplateWikitext(
    Cf(s),
    n,
    t
  ) : Promise.resolve(null);
}, JT = window.Vuex.useStore, hd = () => {
  const e = JT(), { sourceSection: t } = se(), { getCurrentTitleByLanguage: n } = cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = P(), a = Jw(), r = (i, u, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[u] = g;
      return;
    }
    const m = t.value.getContentTranslationUnitById(i);
    m instanceof gt ? m.blockTemplateProposedTranslations[u] = g : m instanceof eo && m.addProposedTranslation(u, g);
  }, l = (i, u) => b(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, i))
      return "";
    try {
      const m = yield a();
      return yield $t.fetchSegmentTranslation(
        o.value,
        s.value,
        i,
        u,
        m
      );
    } catch (m) {
      return mw.log.error("Error while translating segment", m), "";
    }
  }), c = (i, u) => b(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      i,
      u
    ))
      return;
    let g = t.value.getOriginalContentByTranslationUnitId(i);
    const m = t.value.getContentTranslationUnitById(i);
    let p;
    if (e.commit("application/addMtRequestsPending", i), p = yield l(u, g), !p) {
      e.commit("application/removeMtRequestsPending", i);
      return;
    }
    m instanceof gt && (m.setBlockTemplateAdaptationInfoByHtml(
      u,
      p
    ), p = (yield QT(
      p,
      n(s.value, o.value),
      s.value
    )) || ""), r(
      i,
      u,
      p
    ), e.commit("application/removeMtRequestsPending", i);
  });
  return {
    translateTranslationUnitById: c,
    translateSelectedTranslationUnitForAllProviders: () => {
      const i = e.getters["mediawiki/getSupportedMTProviders"](
        o.value,
        s.value
      ), { selectedTranslationUnitId: u } = t.value;
      i.forEach(
        (g) => c(u, g)
      );
    }
  };
}, ZT = window.Vuex.useStore, eA = () => {
  const { sourceSection: e } = se(), t = ZT(), { translateTranslationUnitById: n } = hd();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function tA(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const nA = window.Vue.resolveDirective, dt = window.Vue.createElementVNode, Yi = window.Vue.withDirectives, je = window.Vue.unref, Bc = window.Vue.createVNode, bn = window.Vue.withCtx, oA = window.Vue.renderList, sA = window.Vue.Fragment, Qi = window.Vue.openBlock, aA = window.Vue.createElementBlock, iA = window.Vue.toDisplayString, Fc = window.Vue.createBlock, Gp = window.Vue.createCommentVNode, rA = { class: "mw-ui-dialog__header pa-4" }, lA = { class: "row ma-0 py-2" }, cA = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, uA = { class: "mb-0" }, dA = { class: "col shrink justify-center" }, gA = { class: "pb-2 mb-0" }, mA = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, pA = ["dir", "lang", "innerHTML"], hA = ["textContent"], fA = ["innerHTML"], wA = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, vA = /* @__PURE__ */ dt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), _A = ["innerHTML"], Nc = window.Vue.computed, SA = window.Vuex.useStore, yA = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = le.EMPTY_TEXT_PROVIDER_KEY, s = le.ORIGINAL_TEXT_PROVIDER_KEY, a = SA(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: c
    } = se(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: i
    } = P(), u = Nc(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        i.value
      )
    ), g = Nc(() => {
      const y = [s, o];
      return u.value.filter(
        (_) => !y.includes(_)
      );
    }), m = Nc(
      () => l.value ? r.value.proposedTitleTranslations : c.value.proposedTranslations
    ), p = eA(), h = (y) => {
      p(y), w();
    }, f = le.getMTProviderLabel, w = () => n("update:active", !1), v = fe(), C = tA(
      v.i18n("cx-tools-mt-noservices")
    );
    return (y, _) => {
      const V = nA("i18n");
      return e.active ? (Qi(), Fc(je(Vt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: bn(() => [
          dt("div", rA, [
            dt("div", lA, [
              dt("div", cA, [
                Yi(dt("h4", uA, null, 512), [
                  [V, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              dt("div", dA, [
                Bc(je(Ke), {
                  type: "icon",
                  icon: je(xr),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            Yi(dt("h6", gA, null, 512), [
              [V, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: bn(() => [
          Bc(je(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: _[0] || (_[0] = (E) => h(je(s)))
          }, {
            header: bn(() => [
              Yi(dt("h5", mA, null, 512), [
                [V, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: bn(() => [
              dt("p", {
                dir: je(q.getDir)(je(d)),
                lang: je(d),
                innerHTML: m.value[je(s)]
              }, null, 8, pA)
            ]),
            _: 1
          }),
          (Qi(!0), aA(sA, null, oA(g.value, (E) => (Qi(), Fc(je(Ze), {
            key: E,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (N) => h(E)
          }, {
            header: bn(() => [
              dt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: iA(je(f)(E))
              }, null, 8, hA)
            ]),
            default: bn(() => [
              dt("p", {
                innerHTML: m.value[E]
              }, null, 8, fA)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Bc(je(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: _[1] || (_[1] = (E) => h(je(o)))
          }, {
            header: bn(() => [
              Yi(dt("h5", wA, null, 512), [
                [V, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: bn(() => [
              vA
            ]),
            _: 1
          }),
          g.value.length ? Gp("", !0) : (Qi(), Fc(je(Ze), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: bn(() => [
              dt("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: je(C)
              }, null, 8, _A)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Gp("", !0);
    };
  }
}, CA = window.Vuex.useStore, vs = () => {
  const { sourceSection: e } = se(), t = CA(), { translateTranslationUnitById: n } = hd(), { currentMTProvider: o } = ze(t), s = (l) => b(void 0, null, function* () {
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
      const { selectedContentTranslationUnitIndex: l, contentTranslationUnits: c } = e.value, d = l - 1;
      let i = 0;
      return d > -1 && (i = c[d].id), s(i);
    },
    selectTranslationUnitById: s
  };
};
const qp = window.Vue.toDisplayString, Mc = window.Vue.createElementVNode, Ji = window.Vue.unref, xA = window.Vue.createVNode, bA = window.Vue.normalizeClass, kA = window.Vue.withCtx, $A = window.Vue.openBlock, VA = window.Vue.createBlock, EA = ["href"], LA = ["textContent"], TA = ["textContent"], _o = window.Vue.computed, Wp = "sx-sentence-selector__section-title", AA = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = se(), { currentSourcePage: o, currentTargetPageTitle: s } = ot(), { sourceLanguageURLParameter: a } = P(), { isPresentLeadSection: r } = ht(), l = _o(() => {
      var f;
      return (f = o.value) == null ? void 0 : f.title;
    }), c = _o(
      () => {
        var f;
        return ((f = t.value) == null ? void 0 : f.title) || l.value;
      }
    ), d = _o(
      () => Z.getPageUrl(a.value, l.value)
    ), i = _o(
      () => {
        var f;
        return !!((f = t.value) != null && f.translatedTitle);
      }
    ), u = _o(
      () => i.value ? "translated" : "selected"
    ), g = _o(() => {
      const f = [Wp];
      return n.value && !r.value && f.push(`${Wp}--${u.value}`), f;
    }), { selectTranslationUnitById: m } = vs(), p = () => m(0), h = _o(
      () => r.value ? s.value : c.value
    );
    return (f, w) => ($A(), VA(Ji(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: kA(() => [
        Mc("a", {
          href: d.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Mc("strong", {
            textContent: qp(l.value)
          }, null, 8, LA),
          xA(Ji(et), {
            icon: Ji(vf),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, EA),
        Mc("h2", {
          class: bA(["pa-0 ma-0", g.value]),
          onClick: w[0] || (w[0] = (v) => Ji(r) ? p : null),
          textContent: qp(h.value)
        }, null, 10, TA)
      ]),
      _: 1
    }));
  }
};
const kn = window.Vue.unref, na = window.Vue.createVNode, Zi = window.Vue.withCtx, Xp = window.Vue.toDisplayString, Kp = window.Vue.createTextVNode, DA = window.Vue.openBlock, PA = window.Vue.createBlock, Yp = window.Vue.computed, Uc = window.Codex.CdxButton, Qp = window.Codex.CdxIcon, ov = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = se(), { isPresentLeadSection: s } = ht(), a = Yp(
      () => {
        var l;
        return (l = t.value) == null ? void 0 : l.isSelectedTranslationUnitLast;
      }
    ), r = Yp(
      () => s.value || n.value
    );
    return (l, c) => (DA(), PA(kn(I), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Zi(() => [
        na(kn(Uc), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": l.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: r.value,
          onClick: c[0] || (c[0] = (d) => l.$emit("select-previous-segment"))
        }, {
          default: Zi(() => [
            na(kn(Qp), {
              class: "me-1",
              icon: kn(nd)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        na(kn(Uc), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !kn(o),
          onClick: c[1] || (c[1] = (d) => l.$emit("apply-translation"))
        }, {
          default: Zi(() => [
            Kp(Xp(l.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        na(kn(Uc), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: a.value,
          onClick: c[2] || (c[2] = (d) => l.$emit("skip-translation"))
        }, {
          default: Zi(() => [
            Kp(Xp(l.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            na(kn(Qp), {
              class: "ms-1",
              size: "small",
              icon: kn(hs)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const So = window.Vue.unref, BA = window.Vue.toDisplayString, oa = window.Vue.createVNode, er = window.Vue.withCtx, FA = window.Vue.openBlock, NA = window.Vue.createBlock, Ic = window.Vue.computed, MA = window.Vuex.useStore, UA = window.Codex.CdxButton, IA = window.Codex.CdxIcon, RA = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = MA(), n = Ic(() => t.state.application.currentMTProvider), o = fe(), s = Ic(() => ({
      [le.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [le.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Ic(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        le.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (FA(), NA(So(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: er(() => [
        oa(So(I), { class: "ma-0 ps-5 pb-4" }, {
          default: er(() => [
            oa(So(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: BA(a.value)
            }, null, 8, ["textContent"]),
            oa(So(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: er(() => [
                oa(So(UA), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (c) => r.$emit("configure-options"))
                }, {
                  default: er(() => [
                    oa(So(IA), {
                      class: "pa-0",
                      icon: So(td)
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
const It = window.Vue.unref, qn = window.Vue.createVNode, zA = window.Vue.resolveDirective, Jp = window.Vue.createElementVNode, OA = window.Vue.withDirectives, Zp = window.Vue.toDisplayString, eh = window.Vue.createTextVNode, sa = window.Vue.withCtx, jA = window.Vue.openBlock, HA = window.Vue.createElementBlock, GA = { class: "mt-retry-body pb-5" }, qA = { class: "retry-body__message" }, th = window.Codex.CdxButton, Rc = window.Codex.CdxIcon, WA = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = zA("i18n");
      return jA(), HA("div", GA, [
        Jp("div", qA, [
          qn(It(Rc), {
            class: "me-2",
            icon: It(TC)
          }, null, 8, ["icon"]),
          OA(Jp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        qn(It(I), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: sa(() => [
            qn(It(k), { cols: "6" }, {
              default: sa(() => [
                qn(It(th), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: sa(() => [
                    qn(It(Rc), {
                      class: "me-1",
                      icon: It(ow)
                    }, null, 8, ["icon"]),
                    eh(" " + Zp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            qn(It(k), { cols: "6" }, {
              default: sa(() => [
                qn(It(th), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: sa(() => [
                    qn(It(Rc), {
                      class: "me-1",
                      icon: It(zC)
                    }, null, 8, ["icon"]),
                    eh(" " + Zp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Ko = window.Vue.createVNode, ct = window.Vue.unref, aa = window.Vue.openBlock, XA = window.Vue.createElementBlock, KA = window.Vue.createCommentVNode, tr = window.Vue.createBlock, YA = window.Vue.normalizeClass, QA = window.Vue.normalizeStyle, ia = window.Vue.withCtx, JA = window.Vue.toDisplayString, ZA = window.Vue.createTextVNode, eD = window.Vue.normalizeProps, tD = window.Vue.guardReactiveProps, nD = ["lang", "dir", "innerHTML"], zc = window.Vue.ref, oD = window.Vue.onMounted, sD = window.Vue.onBeforeUnmount, Oc = window.Vue.computed, aD = window.Vue.nextTick, iD = window.Vuex.useStore, rD = window.Codex.CdxButton, lD = window.Codex.CdxIcon, cD = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = zc(0), n = zc(null), o = zc(null), s = iD(), { currentMTProvider: a } = ze(s), { targetLanguageURLParameter: r } = P(), { sourceSection: l, currentProposedTranslation: c } = se(), d = Oc(
      () => {
        var p, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (p = l.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), i = Oc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), u = Oc(
      () => !!c.value || a.value === le.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    oD(() => b(this, null, function* () {
      yield aD(), g(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), sD(() => {
      m.unobserve(n.value.$el), m.unobserve(o.value.$el);
    });
    const m = new ResizeObserver(() => g());
    return (p, h) => (aa(), tr(ct(Ze), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: ia(() => [
        Ko(ct(I), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: ia(() => [
            Ko(RA, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => p.$emit("configure-options"))
            }, null, 512),
            Ko(ct(k), {
              class: YA(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !u.value && d.value
              }]),
              style: QA(u.value ? i.value : null)
            }, {
              default: ia(() => [
                u.value ? (aa(), XA("section", {
                  key: 0,
                  lang: ct(r),
                  dir: ct(q.getDir)(ct(r)),
                  innerHTML: ct(c)
                }, null, 8, nD)) : d.value ? (aa(), tr(ct(mt), { key: 1 })) : (aa(), tr(WA, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => p.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => p.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Ko(ct(k), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: ia(() => [
                u.value || d.value ? (aa(), tr(ct(rD), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !u.value,
                  onClick: h[3] || (h[3] = (f) => p.$emit("edit-translation", ct(c)))
                }, {
                  default: ia(() => [
                    Ko(ct(lD), {
                      class: "me-1",
                      icon: ct(ed)
                    }, null, 8, ["icon"]),
                    ZA(" " + JA(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : KA("", !0),
                Ko(ov, eD(tD(p.$attrs)), null, 16)
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
}, uD = window.Vue.computed, dD = (e) => uD(() => {
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
const gD = window.Vue.unref, mD = window.Vue.normalizeClass, pD = window.Vue.openBlock, hD = window.Vue.createElementBlock, fD = ["innerHTML"], wD = window.Vue.onMounted, vD = window.Vue.ref, _D = window.Vue.computed, SD = {
  __name: "SubSection",
  props: {
    subSection: {
      type: gt,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = vD(null), a = dD(n.subSection);
    wD(() => {
      s.value.addEventListener("click", (d) => {
        let i;
        if (n.subSection.isBlockTemplate)
          i = n.subSection;
        else {
          const u = d.composedPath().find(
            (g) => g instanceof Element && g.classList.contains("cx-segment")
          );
          if (!u)
            return;
          i = n.subSection.getSentenceById(
            u.dataset.segmentid
          );
        }
        l(i);
      });
    });
    const { selectTranslationUnitById: r } = vs(), l = (d) => {
      if (d.selected) {
        o("bounce-translation");
        return;
      }
      r(d.id);
    }, c = _D(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, i) => (pD(), hD("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: mD(["sx-sentence-selector__subsection", c.value]),
      innerHTML: gD(a)
    }, null, 10, fD));
  }
};
const nh = window.Vue.unref, oh = window.Vue.createVNode, sh = window.Vue.normalizeStyle, yD = window.Vue.openBlock, CD = window.Vue.createElementBlock, ah = window.Vue.computed, sv = {
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
    const t = e, n = ah(() => ({ "--size": t.size })), o = ah(
      () => !t.isTemplateAdapted || t.percentage === 0 ? e_ : Cu
    );
    return (s, a) => (yD(), CD("div", {
      class: "block-template-status-indicator",
      style: sh(n.value)
    }, [
      oh(nh(w1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      oh(nh(et), {
        icon: o.value,
        size: e.size / 2,
        style: sh({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const Wn = window.Vue.unref, nr = window.Vue.createVNode, jc = window.Vue.withCtx, xD = window.Vue.openBlock, bD = window.Vue.createBlock, kD = window.Vue.computed, ih = window.Codex.CdxButton, rh = window.Codex.CdxIcon, av = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = se(), o = kD(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (xD(), bD(Wn(I), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: jc(() => [
        nr(Wn(ih), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Wn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: jc(() => [
            nr(Wn(rh), { icon: Wn(nd) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        nr(Wn(ih), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: jc(() => [
            nr(Wn(rh), { icon: Wn(hs) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, ra = window.Vue.openBlock, or = window.Vue.createBlock;
window.Vue.createCommentVNode;
const $n = window.Vue.unref, Yo = window.Vue.withCtx, la = window.Vue.createVNode, Hc = window.Vue.toDisplayString, Gc = window.Vue.createElementVNode, $D = window.Vue.renderList, VD = window.Vue.Fragment, ED = window.Vue.createElementBlock, LD = { class: "pa-4" }, TD = ["textContent"], AD = ["textContent"], DD = window.Vuex.useStore, sr = window.Vue.computed, PD = {
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
    const t = e, { targetLanguageAutonym: n } = ze(DD()), o = sr(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = fe(), a = sr(() => {
      let c;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? c = "cx-sx-block-template-mapping-status-title-partially-template" : c = "cx-sx-block-template-mapping-status-title-fully-template" : c = "cx-sx-block-template-mapping-status-title-unadapted-template" : c = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(c);
    }), r = sr(() => {
      let c;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? c = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? c = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : c = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(c);
    }), l = sr(() => {
      let c = [];
      if (!t.targetTemplateExists)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: n_,
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
        let d;
        t.sourceParamsCount ? d = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : d = s.i18n("cx-sx-block-template-no-source-params-text"), c.push({
          text: d,
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
        icon: I0,
        color: kt.gray500
      }), c;
    });
    return (c, d) => (ra(), or($n(Vt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: c.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: d[0] || (d[0] = (i) => c.$emit("update:active", i))
    }, {
      header: Yo(() => [
        la($n(I), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Yo(() => [
            la($n(k), { shrink: "" }, {
              default: Yo(() => [
                e.targetTemplateExists ? (ra(), or(sv, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (ra(), or($n(et), {
                  key: 1,
                  icon: $n(R0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Yo(() => [
        Gc("div", LD, [
          Gc("h3", {
            textContent: Hc(a.value)
          }, null, 8, TD),
          Gc("p", {
            class: "mt-6 text-small",
            textContent: Hc(r.value)
          }, null, 8, AD),
          (ra(!0), ED(VD, null, $D(l.value, (i, u) => (ra(), or($n(I), {
            key: u,
            align: "start",
            class: "mt-4"
          }, {
            default: Yo(() => [
              la($n(k), { shrink: "" }, {
                default: Yo(() => [
                  la($n(et), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              la($n(k), {
                textContent: Hc(i.text)
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
const Pe = window.Vue.unref, He = window.Vue.createVNode, Jt = window.Vue.withCtx, qc = window.Vue.toDisplayString, lh = window.Vue.createTextVNode, BD = window.Vue.resolveDirective, ch = window.Vue.withDirectives, uh = window.Vue.createElementVNode, FD = window.Vue.normalizeClass, Qo = window.Vue.openBlock, dh = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ar = window.Vue.createBlock, gh = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const mh = window.Vue.mergeProps, ND = { class: "block-template-adaptation-card__container pa-4" }, MD = ["textContent"], UD = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Ge = window.Vue.computed, ID = window.Vue.ref, RD = window.Vuex.useStore, ph = window.Codex.CdxButton, hh = window.Codex.CdxIcon, zD = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = RD(), { targetLanguageAutonym: n, currentMTProvider: o } = ze(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = se(), r = Ge(() => {
      var x;
      return (x = s.value) == null ? void 0 : x.isTranslated;
    }), l = Ge(() => {
      var B;
      return ((B = s.value) == null ? void 0 : B.blockTemplateTranslatedContent) || a.value;
    }), c = Ge(
      () => {
        var x;
        return (x = s.value) == null ? void 0 : x.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), d = Ge(
      () => {
        var x;
        return !((x = t.state.application.mtRequestsPending) != null && x.includes(
          s.value.id
        ));
      }
    ), i = fe(), u = Ge(
      // Strip HTML comments and return
      () => {
        var x, B;
        return ((B = (x = s.value) == null ? void 0 : x.sourceBlockTemplateName) == null ? void 0 : B.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = Ge(
      () => {
        var x, B;
        return (B = (x = s.value) == null ? void 0 : x.blockTemplateAdaptationInfo) == null ? void 0 : B[o.value];
      }
    ), m = Ge(
      () => {
        var x, B;
        return ((x = g.value) == null ? void 0 : x.adapted) || !!((B = g.value) != null && B.partial);
      }
    ), p = Ge(() => g.value ? "block-template-adaptation-card__body--" + (m.value ? "success" : "warning") : null), h = Ge(() => g.value ? m.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = Ge(
      () => {
        var x;
        return Object.keys(((x = s.value) == null ? void 0 : x.sourceTemplateParams) || {}).length;
      }
    ), w = Ge(() => {
      var B;
      const x = (B = s.value) == null ? void 0 : B.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(x || {});
    }), v = Ge(() => w.value.length), C = Ge(() => {
      const x = E.value;
      return f.value + x === 0 ? 100 : v.value / (f.value + x) * 100 || 0;
    }), y = ID(!1), _ = () => {
      y.value = !0;
    }, V = (x) => x.filter((B) => !w.value.includes(B)), E = Ge(() => {
      var B;
      const x = ((B = g.value) == null ? void 0 : B.mandatoryTargetParams) || [];
      return V(x).length;
    }), N = Ge(() => {
      var B;
      const x = ((B = g.value) == null ? void 0 : B.optionalTargetParams) || [];
      return V(x).length;
    });
    return (x, B) => {
      const R = BD("i18n");
      return Qo(), ar(Pe(Ze), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Jt(() => [
          uh("div", ND, [
            He(Pe(I), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Jt(() => [
                He(Pe(k), { shrink: "" }, {
                  default: Jt(() => [
                    He(Pe(hh), {
                      icon: Pe(OC),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                He(Pe(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Jt(() => [
                    lh(qc(u.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (Qo(), dh("div", {
              key: 0,
              class: FD(["pa-4 mb-4", p.value])
            }, [
              He(Pe(I), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Jt(() => [
                  ch(He(Pe(k), { tag: "h5" }, null, 512), [
                    [R, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  He(Pe(k), { shrink: "" }, {
                    default: Jt(() => [
                      He(sv, {
                        percentage: C.value,
                        size: 20,
                        "is-template-adapted": m.value,
                        "stroke-width": 2,
                        onClick: _
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              uh("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: qc(c.value)
              }, null, 8, MD),
              He(Pe(ph), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: B[0] || (B[0] = (X) => x.$emit("edit-translation", l.value))
              }, {
                default: Jt(() => [
                  lh(qc(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (Qo(), dh("div", UD, [
              He(Pe(I), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Jt(() => [
                  ch(He(Pe(k), { tag: "h5" }, null, 512), [
                    [R, [
                      Pe(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  He(Pe(k), { shrink: "" }, {
                    default: Jt(() => [
                      He(Pe(ph), {
                        weight: "quiet",
                        "aria-label": x.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Jt(() => [
                          He(Pe(hh), {
                            icon: Pe(UC),
                            onClick: _
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
            ])) : (Qo(), ar(Pe(mt), { key: 2 }))
          ]),
          r.value ? (Qo(), ar(av, gh(mh({ key: 1 }, x.$attrs)), null, 16)) : (Qo(), ar(ov, gh(mh({ key: 0 }, x.$attrs)), null, 16)),
          He(PD, {
            active: y.value,
            "onUpdate:active": B[1] || (B[1] = (X) => y.value = X),
            "source-params-count": f.value,
            "target-params-count": v.value,
            "mandatory-missing-params-count": E.value,
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
const OD = window.Vue.unref, jD = window.Vue.createVNode, HD = window.Vue.openBlock, GD = window.Vue.createElementBlock, qD = { class: "translated-segment-card-header" }, WD = window.Vue.computed, XD = {
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
    const n = t, { isSectionTitleSelected: o } = se(), s = fe(), a = WD(() => [
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
    return (l, c) => (HD(), GD("div", qD, [
      jD(OD(Ea), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const KD = window.Vue.useCssVars, Ie = window.Vue.createVNode, fh = window.Vue.resolveDirective, YD = window.Vue.createElementVNode, Wc = window.Vue.withDirectives, Ce = window.Vue.unref, QD = window.Vue.normalizeStyle, ir = window.Vue.openBlock, wh = window.Vue.createElementBlock, JD = window.Vue.createCommentVNode, ZD = window.Vue.normalizeClass, Ct = window.Vue.withCtx, e6 = window.Vue.toDisplayString, t6 = window.Vue.createTextVNode, vh = window.Vue.createBlock, n6 = window.Vue.normalizeProps, o6 = window.Vue.guardReactiveProps, Vn = window.Vue.computed, s6 = window.Vue.ref, a6 = window.Vue.inject, i6 = window.Codex.CdxButton, Xc = window.Codex.CdxIcon, r6 = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    KD((v) => ({
      "05f62acd": w.value
    }));
    const t = s6("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = se(), a = P(), r = Vn(() => t.value === "sentence"), l = Vn(
      () => n.value.subSections.find(
        (v) => v.sentences.some(
          (C) => {
            var y;
            return C.id === ((y = o.value) == null ? void 0 : y.id);
          }
        )
      )
    ), c = Vn(() => {
      var v;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (v = o.value) == null ? void 0 : v.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), d = a6("colors"), i = d.gray200, u = d.red600, g = Vn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), m = Vn(
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
      failure: m.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), w = Vn(
      () => f.value[p.value]
    );
    return (v, C) => {
      const y = fh("i18n"), _ = fh("i18n-html");
      return ir(), vh(Ce(Ze), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ct(() => [
          Ie(Ce(I), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ct(() => [
              Ie(XD, {
                selection: t.value,
                "onUpdate:selection": C[0] || (C[0] = (V) => t.value = V)
              }, null, 8, ["selection"]),
              Ie(Ce(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Ct(() => [
                  Ie(Ce(I), { class: "ma-0" }, {
                    default: Ct(() => [
                      Ie(Ce(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Ct(() => [
                          Wc(YD("h5", null, null, 512), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? Wc((ir(), wh("p", {
                            key: 0,
                            style: QD({ color: Ce(u) })
                          }, null, 4)), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Wc((ir(), wh("p", {
                            key: 1,
                            class: ZD(h.value)
                          }, null, 2)), [
                            [_, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Ie(Ce(k), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Ct(() => [
                          Ie(Ce(I), { class: "ma-0 ms-2" }, {
                            default: Ct(() => [
                              Ie(Ce(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Ct(() => [
                                  Ie(Ce(Xc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Ce(GC)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Ie(Ce(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Ct(() => [
                                  Ie(Ce(Sf), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: w.value,
                                    background: Ce(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Ie(Ce(k), { shrink: "" }, {
                                default: Ct(() => [
                                  Ie(Ce(Xc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Ce(jC)
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
                  r.value ? (ir(), vh(Ce(i6), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: C[1] || (C[1] = (V) => v.$emit("edit-translation", g.value))
                  }, {
                    default: Ct(() => [
                      Ie(Ce(Xc), {
                        class: "me-1",
                        icon: Ce(ed)
                      }, null, 8, ["icon"]),
                      t6(" " + e6(v.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : JD("", !0)
                ]),
                _: 1
              }),
              Ie(Ce(k), { class: "translated-segment-card__actions" }, {
                default: Ct(() => [
                  Ie(av, n6(o6(v.$attrs)), null, 16)
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
}, l6 = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = se(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = vs(), { isPresentLeadSection: s } = ht(), { currentTranslation: a } = Xt();
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
}, iv = window.Vuex.useStore, c6 = () => {
  const e = iv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P();
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
    ) : s = new le(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, u6 = () => {
  const e = iv(), { currentMTProvider: t } = ze(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = P(), s = c6();
  return () => b(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = le.getStorageKey(
        n.value,
        o.value
      );
      let l = mw.storage.get(r);
      (!l || !a.includes(l)) && (l = a[0]), e.commit("application/setCurrentMTProvider", l);
    }
  });
}, d6 = window.Vue.computed, g6 = (e) => {
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
}, m6 = () => {
  const { selectedContentTranslationUnit: e } = se(), t = d6(
    () => e.value instanceof gt
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && g6(o);
  };
}, p6 = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (l) => !le.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, h6 = window.Vue.computed, rv = () => {
  const { currentTranslation: e } = Xt(), { currentSourcePage: t } = ot();
  return h6(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, f6 = window.Vue.computed, Ma = () => {
  const { sourceSection: e } = se(), { currentTargetPageTitle: t } = ot(), { isMissingLeadSection: n } = ht();
  return { targetPageTitleForPublishing: f6(
    () => n.value ? e.value.title : t.value
  ) };
}, w6 = window.Vuex.useStore, fd = () => {
  const e = w6(), { sourceSection: t } = se(), { targetPageTitleForPublishing: n } = Ma(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), r = rv(), { target: l, PUBLISHING_TARGETS: c } = Tt();
  return () => {
    const d = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), u = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(u);
    g.forEach(
      (p) => p6(p, i)
    );
    const m = t.value.getTranslationProgress(a);
    return $t.saveTranslation({
      sourceTitle: o.value,
      targetTitle: d,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: t.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: t.value.targetSectionTitleForPublishing,
      sourceLanguage: s.value,
      targetLanguage: a.value,
      revision: r.value,
      units: g.map((p) => p.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: u,
      isSandbox: l === c.SANDBOX,
      progress: m
    });
  };
}, v6 = window.Vue.effectScope, _6 = window.Vue.onScopeDispose, S6 = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = v6(!0), n = o.run(() => e(...a))), _6(s), n);
}, y6 = window.Vuex.useStore;
let Kc;
const C6 = () => {
  const e = y6(), t = fd();
  let n = 1e3, o = 0;
  return Kc = cd(() => t().then((a) => {
    a instanceof so ? (n *= o + 1, o++, setTimeout(Kc, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof us)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Kc;
}, lv = S6(C6), x6 = window.Vuex.useStore, b6 = () => {
  const e = x6(), t = lv(), { currentMTProvider: n } = ze(e), { sourceSection: o, currentProposedTranslation: s } = se(), { selectNextTranslationUnit: a } = vs();
  return () => b(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, k6 = window.Vuex.useStore, $6 = () => {
  const e = k6(), t = lv();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, V6 = window.Vuex.useStore, E6 = window.Vue.computed, cv = () => {
  const e = V6(), { currentTranslation: t } = Xt(), { currentMTProvider: n } = ze(e), { currentTargetPageTitle: o } = ot(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = P(), c = Lt(), d = E6(() => {
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
    return n.value && (f.translation_provider = le.getProviderForInstrumentation(n.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      const f = me({
        event_type: "editor_open"
      }, d.value);
      return c(f);
    },
    logEditorCloseEvent: () => {
      const f = me({
        event_type: "editor_close"
      }, d.value);
      return c(f);
    },
    logEditorCloseWarnEvent: () => c(me({
      event_type: "editor_close_warn"
    }, d.value)),
    logEditorSegmentAddEvent: () => c(me({
      event_type: "editor_segment_add"
    }, d.value)),
    logEditorSegmentSkipEvent: () => c(me({
      event_type: "editor_segment_skip"
    }, d.value)),
    logEditorSegmentEditEvent: () => c(me({
      event_type: "editor_segment_edit"
    }, d.value))
  };
}, L6 = (e, t, n, o) => b(void 0, null, function* () {
  var l, c, d;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((c = t.mt) == null ? void 0 : c.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield nv(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), T6 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, A6 = (e, t, n, o) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return L6(e, t, n, o);
  T6(e, t);
}), D6 = (e, t, n, o) => {
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
        const d = A6(
          l,
          c,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, P6 = { restoreCorporaDraft: D6 }, B6 = () => {
  const { currentSourcePage: e } = ot(), { sourceSection: t } = se();
  return (n) => b(void 0, null, function* () {
    if (n.restored)
      return;
    try {
      const s = yield $t.fetchTranslationUnits(
        n.translationId
      );
      yield P6.restoreCorporaDraft(
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
let Yc = null;
function F6() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((o) => t.includes(o));
}
function uv() {
  return Yc === null && (Yc = F6()), Yc;
}
const dv = window.Vue.ref, Qc = dv(!1), Jc = dv(!1);
function _h() {
  return {
    isPermissionWarningDismissed: Qc,
    dismissPermissionWarning: () => {
      Qc.value = !0;
    },
    resetPermissionWarning: () => {
      Qc.value = !1;
    },
    isTitleErrorDismissed: Jc,
    dismissTitleError: () => {
      Jc.value = !0;
    },
    resetTitleError: () => {
      Jc.value = !1;
    }
  };
}
const ue = window.Vue.unref, xt = window.Vue.createVNode, Rt = window.Vue.withCtx, N6 = window.Vue.resolveDirective, En = window.Vue.createElementVNode, M6 = window.Vue.withDirectives, ca = window.Vue.toDisplayString, U6 = window.Vue.createTextVNode, Zt = window.Vue.openBlock, Xn = window.Vue.createBlock, Sh = window.Vue.createCommentVNode, I6 = window.Vue.renderList, R6 = window.Vue.Fragment, yh = window.Vue.createElementBlock, z6 = window.Vue.normalizeClass, O6 = window.Vue.normalizeStyle, j6 = { class: "sx-sentence-selector__header-title mb-0" }, H6 = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, G6 = { class: "sx-sentence-selector__section-contents px-4" }, Kn = window.Vue.computed, q6 = window.Vue.nextTick, W6 = window.Vue.onMounted, ua = window.Vue.ref, Ch = window.Vue.watch, X6 = window.Vuex.useStore, xh = window.Codex.CdxButton, K6 = window.Codex.CdxIcon, bh = window.Codex.CdxMessage, Y6 = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ua(!1), n = ua(!1), o = ua("100%"), s = X6(), { currentMTProvider: a, previousRoute: r } = ze(s), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      pageURLParameter: d,
      sectionURLParameter: i
    } = P(), { resetPublishTarget: u, target: g } = Tt(), { loadSuggestion: m } = Fa(), { sourceSection: p, selectedContentTranslationUnit: h } = se(), { targetPageTitleForPublishing: f } = Ma(), w = ua({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), v = Kn(
      () => Object.values(w.value).every(Boolean)
    ), C = Kn(
      () => {
        var J;
        return (J = p.value) == null ? void 0 : J.isSelectedTranslationUnitTranslated;
      }
    ), y = Kn(() => {
      var J;
      return (J = p.value) == null ? void 0 : J.subSections;
    }), _ = Kn(
      () => {
        var J;
        return (J = p.value) == null ? void 0 : J.selectedTranslationUnitOriginalContent;
      }
    ), V = Kn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: E,
      logEditorCloseEvent: N,
      logEditorCloseWarnEvent: x,
      logEditorSegmentAddEvent: B,
      logEditorSegmentSkipEvent: R
    } = cv(), X = () => {
      var Ao;
      const J = F.currentRoute.value.meta.workflowStep, Bn = F.getRoutes().find(
        (jr) => jr.name === r.value
      ), ft = ((Ao = Bn == null ? void 0 : Bn.meta) == null ? void 0 : Ao.workflowStep) || 0;
      return J > ft;
    }, ae = l6();
    u6()().then(() => {
      X() && E(), w.value.mtProviders = !0;
    });
    const ne = m6(), { fetchTranslationsByStatus: D, translationsFetched: z } = fs(), K = B6(), { currentTranslation: Q } = Xt(), { selectPageSectionByTitle: $e, selectPageSectionByIndex: xe } = Ir(), _e = pd(), Oe = ro();
    W6(() => b(this, null, function* () {
      if (!z.value.draft) {
        const J = [
          // required to get current draft translation (if exists)
          D("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          _e(l.value, d.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          Oe(l.value, [d.value])
        ];
        yield Promise.all(J);
      }
      w.value.pageMetadata = !0, i.value ? yield $e(i.value) : yield xe(0), w.value.pageContent = !0, Q.value && (yield K(Q.value)), w.value.draftRestored = !0, g.value || m(
        l.value,
        c.value,
        d.value
      ).then(() => u()), Ch(
        v,
        () => b(this, null, function* () {
          v.value && (yield q6(), ae(), ne());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), Ch(h, ne);
    const { selectNextTranslationUnit: O, selectPreviousTranslationUnit: j } = vs(), ce = () => (R(), O()), S = b6(), T = () => {
      B(), S();
    }, L = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, F = nt(), M = () => {
      const { autoSavePending: J } = s.state.application;
      if (J) {
        Ss.value = !0, x();
        return;
      }
      U();
    }, H = $6(), { clearTranslationURLParameters: G } = P(), U = () => b(this, null, function* () {
      D("draft"), Q.value && (p.value.reset(), Q.value.restored = !1), N(), G(), H(), yield F.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: ie,
      translateSelectedTranslationUnitForAllProviders: st
    } = hd(), Ve = () => {
      _s.value || (t.value = !0, st());
    }, { getCurrentTitleByLanguage: Ua } = cn(), { isMissingLeadSection: Ia } = ht(), co = (J) => {
      F.push({
        name: "sx-editor",
        state: {
          content: J,
          originalContent: _.value,
          title: Ua(
            c.value,
            l.value
          ),
          isInitialEdit: !C.value || null
        }
      });
    }, Rr = () => F.push({ name: "sx-publisher" }), zr = () => b(this, null, function* () {
      h.value ? yield ie(
        h.value.id,
        a.value
      ) : yield ie(0, a.value);
    }), _s = Kn(
      () => h.value instanceof gt
    ), Ss = ua(!1), {
      isPermissionWarningDismissed: Or,
      dismissPermissionWarning: Lo,
      resetPermissionWarning: To
    } = _h(), { isTitleErrorDismissed: Ra, dismissTitleError: A, resetTitleError: W } = _h();
    X() && (To(), W());
    const Ne = Kn(
      () => !uv() && !Or.value
    ), At = Kn(
      () => !Ra.value && Ia.value && !mw.Title.newFromText(f.value)
    );
    return (J, un) => {
      const Bn = N6("i18n");
      return Zt(), yh("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: O6(V.value)
      }, [
        xt(ue(I), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Rt(() => [
            xt(ue(k), { shrink: "" }, {
              default: Rt(() => [
                xt(ue(xh), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": J.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: M
                }, {
                  default: Rt(() => [
                    xt(ue(K6), { icon: ue(Jf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            xt(ue(k), {
              grow: "",
              class: "px-1"
            }, {
              default: Rt(() => [
                M6(En("h4", j6, null, 512), [
                  [Bn, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            xt(ue(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: Rt(() => [
                xt(ue(xh), {
                  disabled: !(ue(p) && ue(p).isTranslated),
                  onClick: Rr
                }, {
                  default: Rt(() => [
                    U6(ca(J.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        v.value ? (Zt(), Xn(ue(I), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Rt(() => [
            xt(ue(k), {
              dir: ue(q.getDir)(ue(l)),
              lang: ue(l),
              class: "sx-sentence-selector__section"
            }, {
              default: Rt(() => [
                Ne.value ? (Zt(), Xn(ue(bh), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ue(Lo)
                }, {
                  default: Rt(() => [
                    En("p", null, ca(J.$i18n("cx-publish-permission-warning")), 1),
                    En("p", null, [
                      En("strong", null, [
                        En("a", H6, ca(J.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : Sh("", !0),
                At.value ? (Zt(), Xn(ue(bh), {
                  key: 1,
                  type: "error",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ue(A)
                }, {
                  default: Rt(() => [
                    En("p", null, [
                      En("strong", null, ca(J.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    En("p", null, ca(J.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : Sh("", !0),
                xt(AA),
                En("div", G6, [
                  (Zt(!0), yh(R6, null, I6(y.value, (ft) => (Zt(), Xn(SD, {
                    id: ft.id,
                    key: `sub-section-${ft.id}`,
                    "sub-section": ft,
                    onBounceTranslation: L
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !_s.value && C.value ? (Zt(), Xn(r6, {
              key: 0,
              onEditTranslation: co,
              onSelectNextSegment: ue(O),
              onSelectPreviousSegment: ue(j)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : _s.value ? (Zt(), Xn(zD, {
              key: 2,
              onEditTranslation: co,
              onApplyTranslation: T,
              onSkipTranslation: ce,
              onSelectPreviousSegment: ue(j),
              onSelectNextSegment: ue(O)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Zt(), Xn(cD, {
              key: 1,
              class: z6({ "mb-0": !n.value }),
              onConfigureOptions: Ve,
              onEditTranslation: co,
              onApplyTranslation: T,
              onSkipTranslation: ce,
              onSelectPreviousSegment: ue(j),
              onRetryTranslation: zr
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Zt(), Xn(ue(I), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Rt(() => [
            xt(ue(mt), { class: "mt-0" })
          ]),
          _: 1
        })),
        xt(yA, {
          active: t.value,
          "onUpdate:active": un[0] || (un[0] = (ft) => t.value = ft)
        }, null, 8, ["active"]),
        xt(YT, {
          modelValue: Ss.value,
          "onUpdate:modelValue": un[1] || (un[1] = (ft) => Ss.value = ft),
          onDiscardTranslation: U
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const Q6 = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: Y6
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, J6 = window.Vue.resolveComponent, Z6 = window.Vue.createVNode, eP = window.Vue.normalizeClass, tP = window.Vue.openBlock, nP = window.Vue.createElementBlock;
function oP(e, t, n, o, s, a) {
  const r = J6("sx-sentence-selector");
  return tP(), nP("main", {
    class: eP(["sx-sentence-selector-view", a.classes])
  }, [
    Z6(r)
  ], 2);
}
const sP = /* @__PURE__ */ he(Q6, [["render", oP]]), aP = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, iP = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const rP = window.Vue.resolveDirective, rr = window.Vue.withDirectives, zt = window.Vue.openBlock, Ln = window.Vue.createElementBlock, lr = window.Vue.createCommentVNode, cr = window.Vue.Transition, yo = window.Vue.withCtx, Jo = window.Vue.createVNode, da = window.Vue.createElementVNode, Yn = window.Vue.unref, lP = window.Vue.renderList, cP = window.Vue.Fragment, uP = window.Vue.normalizeClass, kh = window.Vue.createBlock, dP = window.Vue.toDisplayString, gP = window.Vue.createTextVNode, mP = { class: "sx-quick-tutorial" }, pP = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, hP = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, fP = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, wP = { class: "sx-quick-tutorial__illustration" }, vP = ["innerHTML"], _P = ["innerHTML"], SP = { class: "sx-quick-tutorial__step-indicator py-3" }, yP = ["onClick"], CP = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, xP = {
  key: "secondary-point-1",
  class: "ma-0"
}, bP = {
  key: "secondary-point-2",
  class: "ma-0"
}, kP = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, $h = window.Vue.ref, Vh = window.Codex.CdxButton, $P = window.Codex.CdxIcon, VP = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = $h(2), n = $h(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = ws();
    return (r, l) => {
      const c = rP("i18n");
      return zt(), Ln("section", mP, [
        Jo(Yn(I), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: yo(() => [
            da("section", pP, [
              Jo(cr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: yo(() => [
                  s(1) ? rr((zt(), Ln("h2", hP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? rr((zt(), Ln("h2", fP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : lr("", !0)
                ]),
                _: 1
              })
            ]),
            da("section", wP, [
              Jo(cr, { name: "mw-ui-animation-slide-start" }, {
                default: yo(() => [
                  s(1) ? (zt(), Ln("div", {
                    key: "illustration-1",
                    innerHTML: Yn(iP)
                  }, null, 8, vP)) : s(2) ? (zt(), Ln("div", {
                    key: "illustration-2",
                    innerHTML: Yn(aP)
                  }, null, 8, _P)) : lr("", !0)
                ]),
                _: 1
              })
            ]),
            da("div", SP, [
              (zt(!0), Ln(cP, null, lP(t.value, (d) => (zt(), Ln("span", {
                key: `dot-${d}`,
                class: uP(["dot mx-1", { "dot-active": s(d) }]),
                role: "button",
                onClick: (i) => n.value = d
              }, null, 10, yP))), 128))
            ]),
            da("section", CP, [
              Jo(cr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: yo(() => [
                  s(1) ? rr((zt(), Ln("h3", xP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? rr((zt(), Ln("h3", bP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : lr("", !0)
                ]),
                _: 1
              })
            ]),
            da("div", kP, [
              Jo(cr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: yo(() => [
                  s(1) ? (zt(), kh(Yn(Vh), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: yo(() => [
                      Jo(Yn($P), { icon: Yn(hs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (zt(), kh(Yn(Vh), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Yn(a)
                  }, {
                    default: yo(() => [
                      gP(dP(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : lr("", !0)
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
const EP = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: VP
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, LP = window.Vue.resolveComponent, TP = window.Vue.createVNode, AP = window.Vue.normalizeClass, DP = window.Vue.openBlock, PP = window.Vue.createElementBlock;
function BP(e, t, n, o, s, a) {
  const r = LP("sx-quick-tutorial");
  return DP(), PP("main", {
    class: AP(["sx-quick-tutorial-view", a.classes])
  }, [
    TP(r)
  ], 2);
}
const FP = /* @__PURE__ */ he(EP, [["render", BP]]);
const NP = window.Vue.resolveDirective, Eh = window.Vue.createElementVNode, MP = window.Vue.withDirectives, UP = window.Vue.unref, IP = window.Vue.withCtx, RP = window.Vue.createVNode, zP = window.Vue.openBlock, OP = window.Vue.createElementBlock, jP = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, HP = { class: "sx-editor__original-content-panel__header mb-2" }, GP = ["lang", "dir", "innerHTML"], Lh = window.Vue.ref, qP = window.Vue.onMounted, WP = {
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
      for (const d of c)
        d.href = Z.getPageUrl(l, d.title), d.target = "_blank";
    }, o = Lh(null), s = Lh(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return qP(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const c = NP("i18n");
      return zP(), OP("section", jP, [
        MP(Eh("h5", HP, null, 512), [
          [c, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        RP(UP(c1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: IP(() => [
            Eh("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, GP)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, XP = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const KP = window.Vue.unref, ga = window.Vue.createElementVNode, Th = window.Vue.resolveDirective, Zc = window.Vue.withDirectives, YP = window.Vue.normalizeClass, QP = window.Vue.openBlock, JP = window.Vue.createElementBlock, ZP = window.Vue.createCommentVNode, eB = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, tB = { class: "sx-editor__feedback-overlay-content px-4" }, nB = ["innerHTML"], oB = { class: "sx-editor__feedback-overlay-content__title" }, sB = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, eu = window.Vue.computed, aB = {
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
    const t = e, { targetLanguageURLParameter: n } = P(), o = eu(
      () => sn.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = eu(() => {
      const r = sn.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = eu(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, l) => {
      const c = Th("i18n"), d = Th("i18n-html");
      return e.showFeedback ? (QP(), JP("div", eB, [
        ga("div", tB, [
          ga("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: KP(XP)
          }, null, 8, nB),
          Zc(ga("h2", oB, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Zc(ga("p", sB, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Zc(ga("p", {
            class: YP(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : ZP("", !0);
    };
  }
}, iB = window.Vuex.useStore, rB = () => {
  const e = iB(), t = fd(), { selectNextTranslationUnit: n } = vs(), {
    isSectionTitleSelected: o,
    sourceSection: s,
    selectedContentTranslationUnit: a
  } = se(), { getCurrentTitleByLanguage: r } = cn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: c
  } = P(), { currentMTProvider: d } = ze(e);
  return (i) => b(void 0, null, function* () {
    if (!o.value) {
      const u = document.createElement("div");
      u.innerHTML = i, u.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = u.innerHTML;
    }
    a.value instanceof gt && (i = (yield nv(
      i,
      r(c.value, l.value),
      c.value
    )) || i), s.value.setTranslationForSelectedTranslationUnit(
      i,
      d.value
    ), t(), n();
  });
};
const Je = window.Vue.unref, tu = window.Vue.openBlock, nu = window.Vue.createBlock, Ah = window.Vue.createCommentVNode, Dh = window.Vue.createVNode, lB = window.Vue.createElementVNode, cB = window.Vue.withCtx, uB = { class: "sx-editor__editing-surface-container grow" }, ou = window.Vue.ref, dB = window.Vue.computed;
window.Vue.inject;
const gB = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ou(!1), o = nt(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: c, originalContent: d, title: i } = history.state, u = ou(null), g = ou(!1), { logEditorSegmentAddEvent: m, logEditorSegmentEditEvent: p } = cv(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = P(), { isSectionTitleSelected: w, sourceSection: v } = se(), C = dB(
      () => sn.calculateScore(
        u.value,
        c,
        f.value
      )
    ), y = rB(), _ = (V) => b(this, null, function* () {
      u.value = V, g.value = !0;
      const E = new Promise((x) => setTimeout(x, 2e3));
      let N = Promise.resolve();
      r ? v.value.editedTranslation = V : N = y(V), C.value === 0 && l ? m() : C.value > 0 && p(), yield Promise.all([E, N]), g.value = !1, a();
    });
    return r ? mw.cx.eventlogging.stats.publishEditorStepAccess() : mw.cx.eventlogging.stats.editingStepAccess(!0), (V, E) => (tu(), nu(Je(I), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: cB(() => [
        Je(d) ? (tu(), nu(WP, {
          key: 0,
          language: Je(h),
          dir: Je(q.getDir)(Je(h)),
          "original-content": Je(d)
        }, null, 8, ["language", "dir", "original-content"])) : Ah("", !0),
        n.value ? Ah("", !0) : (tu(), nu(Je(mt), { key: 1 })),
        lB("div", uB, [
          Dh(aB, {
            "edited-translation": u.value,
            "show-feedback": g.value,
            "proposed-translation": Je(c)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Dh($4, {
            content: Je(c),
            language: Je(f),
            dir: Je(q.getDir)(Je(f)),
            title: Je(i),
            "use-text": !!Je(w),
            onReady: s,
            onClose: a,
            onEditCompleted: _
          }, null, 8, ["content", "language", "dir", "title", "use-text"])
        ])
      ]),
      _: 1
    }));
  }
};
const mB = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: gB
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
}, pB = window.Vue.resolveComponent, hB = window.Vue.createVNode, fB = window.Vue.normalizeClass, wB = window.Vue.openBlock, vB = window.Vue.createElementBlock;
function _B(e, t, n, o, s, a) {
  const r = pB("sx-editor");
  return wB(), vB("main", {
    class: fB(["sx-editor-view", a.classes])
  }, [
    hB(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const SB = /* @__PURE__ */ he(mB, [["render", _B]]);
const en = window.Vue.unref, Co = window.Vue.createVNode, ma = window.Vue.withCtx, yB = window.Vue.resolveDirective, CB = window.Vue.withDirectives, xB = window.Vue.openBlock, bB = window.Vue.createBlock, Ph = window.Codex.CdxButton, Bh = window.Codex.CdxIcon, kB = {
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
      const a = yB("i18n");
      return xB(), bB(en(I), { class: "ma-0 sx-publisher__header" }, {
        default: ma(() => [
          Co(en(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: ma(() => [
              Co(en(Ph), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: ma(() => [
                  Co(en(Bh), { icon: en(ps) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          CB(Co(en(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Co(en(k), { shrink: "" }, {
            default: ma(() => [
              Co(en(Ph), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: ma(() => [
                  Co(en(Bh), { icon: en(AC) }, null, 8, ["icon"])
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
}, $B = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, VB = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Fh = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const su = window.Vue.createElementVNode, Nh = window.Vue.toDisplayString, au = window.Vue.unref, iu = window.Vue.withCtx, Mh = window.Vue.createVNode, EB = window.Vue.openBlock, LB = window.Vue.createBlock, TB = window.Vue.createCommentVNode, AB = ["innerHTML"], DB = ["textContent"], PB = ["textContent"], ru = window.Vue.computed, BB = {
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
        svg: $B,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: VB,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Fh,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Fh,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = ru(() => o[n.status].svg), a = ru(() => o[n.status].title), r = ru(() => o[n.status].subtitle);
    return (l, c) => e.active ? (EB(), LB(au(Vt), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: iu(() => [
        Mh(au(I), { class: "ma-4" }, {
          default: iu(() => [
            Mh(au(k), null, {
              default: iu(() => [
                su("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, AB),
                su("h2", {
                  textContent: Nh(a.value)
                }, null, 8, DB),
                su("p", {
                  class: "ma-0",
                  textContent: Nh(r.value)
                }, null, 8, PB)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : TB("", !0);
  }
};
const ut = window.Vue.unref, Ot = window.Vue.createVNode, Tn = window.Vue.withCtx, FB = window.Vue.resolveDirective, NB = window.Vue.withDirectives, Uh = window.Vue.toDisplayString, MB = window.Vue.createTextVNode, lu = window.Vue.openBlock, Ih = window.Vue.createElementBlock, UB = window.Vue.createCommentVNode, gv = window.Vue.createElementVNode, IB = window.Vue.createBlock, RB = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, zB = ["src"], OB = ["textContent"], jB = /* @__PURE__ */ gv("p", { class: "mt-0" }, null, -1), HB = window.Vue.computed, GB = window.Vue.inject, qB = window.Vue.ref, Rh = window.Codex.CdxButton, WB = window.Codex.CdxIcon, XB = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: uw,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = qB(""), s = () => n("close"), a = () => n("publish", o.value), r = GB("breakpoints"), l = HB(() => r.value.mobile);
    return (c, d) => {
      const i = FB("i18n");
      return e.active && e.captchaDetails ? (lu(), IB(ut(Vt), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: Tn(() => [
          Ot(ut(I), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: Tn(() => [
              Ot(ut(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: Tn(() => [
                  Ot(ut(Rh), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": c.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: Tn(() => [
                      Ot(ut(WB), { icon: ut(ps) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              NB(Ot(ut(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Ot(ut(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: Tn(() => [
                  Ot(ut(Rh), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: Tn(() => [
                      MB(Uh(c.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
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
          gv("div", RB, [
            e.captchaDetails.type === "image" ? (lu(), Ih("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, zB)) : (lu(), Ih("p", {
              key: 1,
              textContent: Uh(e.captchaDetails.question)
            }, null, 8, OB)),
            jB,
            Ot(ut(I), { class: "ma-0" }, {
              default: Tn(() => [
                Ot(ut(k), null, {
                  default: Tn(() => [
                    Ot(ut(xu), {
                      value: o.value,
                      "onUpdate:value": d[0] || (d[0] = (u) => o.value = u),
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
      }, 8, ["fullscreen"])) : UB("", !0);
    };
  }
};
const Qn = window.Vue.unref, ur = window.Vue.createVNode, Zo = window.Vue.withCtx, es = window.Vue.createElementVNode, KB = window.Vue.resolveDirective, YB = window.Vue.withDirectives, QB = window.Vue.renderList, JB = window.Vue.Fragment, cu = window.Vue.openBlock, ZB = window.Vue.createElementBlock, zh = window.Vue.toDisplayString, Oh = window.Vue.createTextVNode, e9 = window.Vue.isRef, t9 = window.Vue.normalizeClass, jh = window.Vue.createBlock, n9 = { class: "mw-ui-dialog__header" }, o9 = { class: "row ma-0 px-4 py-3" }, s9 = { class: "col shrink justify-center" }, a9 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, i9 = { class: "mb-0" }, r9 = { class: "pa-4" }, l9 = window.Codex.CdxField, c9 = window.Codex.CdxRadio, u9 = window.Vuex.useStore, dr = window.Vue.computed, d9 = window.Codex.CdxButton, g9 = window.Codex.CdxIcon, m9 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = u9(), { target: s, PUBLISHING_TARGETS: a } = Tt(), r = dr(() => o.state.translator.isAnon), l = fe(), { sourceSection: c } = se(), { isCurrentSectionPresent: d, isPresentLeadSection: i } = ht(), u = dr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), g = dr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), m = dr(() => {
      const h = [];
      return i.value || h.push({
        label: u.value,
        description: g.value,
        value: a.NEW_SECTION,
        disabled: !1
      }), h.push({
        label: l.i18n("cx-sx-publisher-sandbox-option-label"),
        description: l.i18n("cx-sx-publisher-sandbox-option-details"),
        value: a.SANDBOX,
        disabled: r.value
      }), d.value && (h.push({
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
      const w = KB("i18n");
      return cu(), jh(Qn(Vt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: h.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: f[1] || (f[1] = (v) => h.$emit("update:active", v)),
        onClose: p
      }, {
        header: Zo(() => [
          es("div", n9, [
            es("div", o9, [
              es("div", s9, [
                ur(Qn(d9), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": h.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: Zo(() => [
                    ur(Qn(g9), { icon: Qn(Jf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              es("div", a9, [
                YB(es("h4", i9, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            ur(Qn(yr))
          ])
        ]),
        default: Zo(() => [
          es("div", r9, [
            ur(Qn(l9), { "is-fieldset": "" }, {
              default: Zo(() => [
                (cu(!0), ZB(JB, null, QB(m.value, (v, C) => (cu(), jh(Qn(c9), {
                  key: "publish-options-radio-" + v.value,
                  modelValue: Qn(s),
                  "onUpdate:modelValue": [
                    f[0] || (f[0] = (y) => e9(s) ? s.value = y : null),
                    p
                  ],
                  class: t9(C < m.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": v.value,
                  disabled: v.disabled,
                  name: "publish-options"
                }, {
                  description: Zo(() => [
                    Oh(zh(v.description), 1)
                  ]),
                  default: Zo(() => [
                    Oh(zh(v.label) + " ", 1)
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
const jt = window.Vue.unref, Hh = window.Vue.toDisplayString, Gh = window.Vue.createElementVNode, p9 = window.Vue.resolveDirective, ts = window.Vue.createVNode, h9 = window.Vue.withDirectives, pa = window.Vue.withCtx, uu = window.Vue.openBlock, qh = window.Vue.createBlock, Wh = window.Vue.createCommentVNode, f9 = window.Vue.Fragment, w9 = window.Vue.createElementBlock, v9 = window.Vue.normalizeClass, _9 = ["textContent"], S9 = ["textContent"], ns = window.Vue.computed, Xh = window.Vue.ref, y9 = window.Vue.watch, Kh = window.Codex.CdxButton, Yh = window.Codex.CdxIcon, C9 = window.Codex.CdxMessage, x9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Xh(0), o = Xh(null);
    y9(o, () => {
      var p;
      const m = (p = o.value) == null ? void 0 : p.$el;
      if (m instanceof HTMLElement) {
        const h = m.querySelector("a");
        h && h.setAttribute("target", "_blank");
      }
    });
    const s = ns(
      () => {
        var m;
        return (m = t.publishFeedbackMessages) == null ? void 0 : m[n.value];
      }
    ), a = ns(() => {
      var m;
      return ((m = s.value) == null ? void 0 : m.status) || "notice";
    }), r = ns(() => a.value === "notice"), l = ns(
      () => `sx-publisher__review-info--${a.value}`
    ), c = fe(), d = ns(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.text;
    }), i = ns(() => {
      var m;
      return r.value ? c.i18n("cx-sx-publisher-review-info") : ((m = s.value) == null ? void 0 : m.title) || c.i18n("cx-sx-publisher-review-info-error");
    }), u = () => {
      const m = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + m) % m;
    }, g = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (m, p) => {
      const h = p9("i18n-html");
      return uu(), qh(jt(C9), {
        type: a.value,
        class: v9(["sx-publisher__review-info", l.value]),
        icon: r.value ? jt(BC) : null
      }, {
        default: pa(() => [
          Gh("h5", {
            textContent: Hh(i.value)
          }, null, 8, _9),
          r.value ? Wh("", !0) : (uu(), w9(f9, { key: 0 }, [
            Gh("p", {
              textContent: Hh(d.value)
            }, null, 8, S9),
            ts(jt(I), {
              justify: "between",
              class: "ma-0"
            }, {
              default: pa(() => [
                h9(ts(jt(k), {
                  ref_key: "learnMoreContainer",
                  ref: o,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (uu(), qh(jt(k), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: pa(() => [
                    ts(jt(Kh), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: u
                    }, {
                      default: pa(() => [
                        ts(jt(Yh), { icon: jt(nd) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    ts(jt(Kh), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: pa(() => [
                        ts(jt(Yh), { icon: jt(hs) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })) : Wh("", !0)
              ]),
              _: 1
            })
          ], 64))
        ]),
        _: 1
      }, 8, ["type", "class", "icon"]);
    };
  }
}, b9 = (e) => {
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
}, k9 = window.Vuex.useStore, $9 = window.Vue.computed, V9 = () => {
  const e = k9(), { currentTranslation: t } = Xt(), { currentMTProvider: n } = ze(e), { currentTargetPageTitle: o } = ot(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = P(), { sourceSection: c } = se(), d = Lt(), i = $9(() => {
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
    return n.value && (p.translation_provider = le.getProviderForInstrumentation(n.value)), p.human_modification_rate = sn.getMTScoreForPageSection(
      c.value,
      a.value
    ) / 100, p.human_modification_threshold = sn.getMtModificationThreshold(), p;
  });
  return {
    logPublishAttemptEvent: () => d(me({
      event_type: "publish_attempt"
    }, i.value)),
    logPublishSuccessEvent: (p, h) => {
      d(me({
        event_type: "publish_success",
        published_page_id: p,
        published_revision_id: h
      }, i.value)), mw.cx.eventlogging.stats.published(!0);
    },
    logPublishFailureEvent: () => d(me({
      event_type: "publish_failure"
    }, i.value))
  };
}, E9 = window.Vue.computed, Qh = window.Vue.ref, L9 = window.Vuex.useStore, T9 = () => {
  const e = L9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = P(), { sourceSection: s } = se(), { targetPageTitleForPublishing: a } = Ma(), r = rv(), { isPresentLeadSection: l } = ht(), { sectionSuggestion: c } = Le(), d = E9(
    () => {
      var _, V;
      return l.value ? no.LEAD_SECTION_DUMMY_TITLE : (V = c.value) == null ? void 0 : V.presentSections[(_ = s.value) == null ? void 0 : _.sourceSectionTitleForPublishing];
    }
  ), { target: i, PUBLISHING_TARGETS: u } = Tt(), g = Qh(!1), m = Qh("pending"), p = () => g.value = !1, h = fd(), {
    logPublishAttemptEvent: f,
    logPublishSuccessEvent: w,
    logPublishFailureEvent: v
  } = V9(), C = (_, V) => b(void 0, null, function* () {
    f();
    const E = yield h();
    if (E instanceof so)
      return v(), { publishFeedbackMessage: E, targetUrl: null };
    const N = E, x = a.value, B = {
      html: b9(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: x,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: r.value,
      publishTarget: i.value,
      sectionTranslationId: N
    };
    d.value && (B.existingSectionTitle = d.value), _ && (B.captchaId = _, B.captchaWord = V);
    const R = yield $t.publishTranslation(
      B
    );
    return R.publishFeedbackMessage === null ? w(R.pageId, R.revisionId) : v(), R;
  });
  return {
    closePublishDialog: p,
    doPublish: (_ = null, V = null) => b(void 0, null, function* () {
      m.value = "pending", g.value = !0;
      let E;
      try {
        E = yield C(
          V == null ? void 0 : V.id,
          _
        );
      } catch (N) {
        if (N instanceof us)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw mw.cx.eventlogging.stats.publishFailed(!0), N;
      }
      return E;
    }),
    isPublishDialogActive: g,
    publishStatus: m
  };
}, A9 = window.Vue.computed, D9 = () => {
  const e = nt(), { sourceSection: t } = se(), { getCurrentTitleByLanguage: n } = cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = P(), a = A9(
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
}, P9 = () => {
  const { targetLanguageURLParameter: e } = P(), { sourceSection: t } = se();
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
}, B9 = window.Vue.ref, F9 = window.Vue.computed, N9 = () => {
  const e = P9(), { target: t, PUBLISHING_TARGETS: n } = Tt(), { targetPageTitleForPublishing: o } = Ma(), s = B9([]), a = F9(
    () => s.value.some((d) => d.isError)
  ), r = (d) => {
    s.value.push(d), s.value.sort((i, u) => +u.isError - +i.isError);
  };
  return {
    addPublishFeedbackMessage: r,
    clearPublishFeedbackMessages: () => {
      s.value = [];
    },
    publishFeedbackMessages: s,
    isPublishingDisabled: a,
    initializePublishFeedbackMessages: () => {
      if (!uv() && t.value !== n.SANDBOX) {
        const i = new so({
          text: mw.message("cx-publish-permission-error").text(),
          title: mw.message("cx-publish-permission-error-title").text(),
          type: "generic",
          status: "error"
        });
        r(i);
      }
      const d = e();
      d && r(d), mw.Title.newFromText(o.value) || r(
        new so({
          text: mw.message("cx-tools-linter-invalid-character-message").text(),
          title: mw.message("cx-tools-linter-invalid-character").text(),
          type: "generic",
          status: "error"
        })
      );
    }
  };
}, M9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = Tt(), { currentSourcePage: n } = ot(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = P(), { sourceSection: a } = se(), { targetPageTitleForPublishing: r } = Ma();
  return (l) => b(void 0, null, function* () {
    const c = r.value, d = n.value.title, i = new mw.Title(d), u = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== u.user)
      try {
        yield Lr.addWikibaseLink(
          o.value,
          s.value,
          d,
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
}, Jh = window.Vue.ref, U9 = () => {
  const e = Jh(!1), t = Jh(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const de = window.Vue.unref, qe = window.Vue.createVNode, I9 = window.Vue.resolveDirective, du = window.Vue.withDirectives, ha = window.Vue.openBlock, fa = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Zh = window.Vue.toDisplayString, R9 = window.Vue.createTextVNode, os = window.Vue.createElementVNode, ss = window.Vue.withCtx, ef = window.Vue.normalizeClass, z9 = { class: "sx-publisher" }, O9 = {
  key: 0,
  class: "mb-2"
}, j9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, H9 = { key: 0 }, G9 = { key: 1 }, q9 = ["href"], W9 = ["innerHTML"], X9 = { class: "sx-publisher__section-preview pa-5" }, K9 = ["innerHTML"], gr = window.Vue.computed, Y9 = window.Vue.onMounted, Q9 = window.Vue.ref, J9 = window.Vue.watch, tf = window.Codex.CdxButton, gu = window.Codex.CdxIcon, Z9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = se(), { sectionSuggestion: n } = Le(), { isCurrentSectionPresent: o, isPresentLeadSection: s } = ht(), {
      targetLanguageURLParameter: a,
      sectionURLParameter: r
    } = P(), l = fe(), c = gr(
      () => {
        var D;
        return s.value ? l.i18n("cx-sx-present-lead-section-label") : (D = t.value) == null ? void 0 : D.title;
      }
    ), { target: d, PUBLISHING_TARGETS: i } = Tt(), u = gr(() => d.value === i.SANDBOX ? l.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : d.value === i.EXPAND ? l.i18n(
      "cx-sx-publisher-publish-panel-expand-section-result"
    ) : d.value === i.REPLACE ? l.i18n(
      "cx-sx-publisher-publish-panel-replace-section-result"
    ) : t.value.isLeadSection ? l.i18n("cx-sx-publisher-publish-panel-lead-section-result") : l.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: g,
      captchaDialogOn: m,
      handleCaptchaError: p,
      onCaptchaDialogClose: h
    } = U9(), {
      publishFeedbackMessages: f,
      isPublishingDisabled: w,
      addPublishFeedbackMessage: v,
      clearPublishFeedbackMessages: C,
      initializePublishFeedbackMessages: y
    } = N9(), _ = M9(), { doPublish: V, isPublishDialogActive: E, publishStatus: N, closePublishDialog: x } = T9(), B = (D = null) => b(this, null, function* () {
      if (w.value)
        return;
      const z = yield V(D, g.value);
      if (!z)
        return;
      const { publishFeedbackMessage: K, targetUrl: Q } = z;
      if (p(K)) {
        x();
        return;
      } else
        K && v(K);
      N.value = w.value ? "failure" : "success", setTimeout(() => {
        if (w.value) {
          x();
          return;
        }
        _(Q);
      }, 1e3);
    });
    Y9(() => {
      y(), mw.cx.eventlogging.stats.publishStepAccess();
    });
    const R = D9(), X = Q9(!1), ae = () => X.value = !0;
    J9(X, (D) => {
      D || (C(), y());
    });
    const ee = gr(() => {
      var D, z;
      return s.value ? l.i18n("cx-sx-present-lead-section-label") : (z = (D = n.value) == null ? void 0 : D.presentSections) == null ? void 0 : z[r.value];
    }), ne = gr(() => {
      var K;
      const D = Z.getPageUrl(
        a.value,
        (K = n.value) == null ? void 0 : K.targetTitle
      ), z = s.value ? "" : (ee.value || "").replace(/ /g, "_");
      return `${D}#${z}`;
    });
    return (D, z) => {
      const K = I9("i18n");
      return ha(), fa("section", z9, [
        qe(kB, {
          "is-publishing-disabled": de(w),
          onPublishTranslation: B
        }, null, 8, ["is-publishing-disabled"]),
        os("div", {
          class: ef(["sx-publisher__publish-panel", de(o) ? "py-4" : "pa-4"])
        }, [
          de(o) ? (ha(), fa("div", j9, [
            de(s) ? du((ha(), fa("h5", H9, null, 512)), [
              [K, void 0, "cx-sx-publisher-publish-panel-existing-lead-section-notice"]
            ]) : du((ha(), fa("h5", G9, null, 512)), [
              [K, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            os("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: ne.value,
              target: "_blank"
            }, [
              R9(Zh(ee.value) + " ", 1),
              qe(de(gu), { icon: de(Ba) }, null, 8, ["icon"])
            ], 8, q9)
          ])) : du((ha(), fa("h5", O9, null, 512)), [
            [K, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          os("div", {
            class: ef({ "px-4 mt-4": de(o) })
          }, [
            os("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: u.value
            }, null, 8, W9),
            qe(de(I), {
              justify: "end",
              class: "ma-0"
            }, {
              default: ss(() => [
                qe(de(k), { shrink: "" }, {
                  default: ss(() => [
                    qe(de(tf), {
                      weight: "quiet",
                      "aria-label": D.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: ae
                    }, {
                      default: ss(() => [
                        qe(de(gu), { icon: de(HC) }, null, 8, ["icon"])
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
        qe(x9, { "publish-feedback-messages": de(f) }, null, 8, ["publish-feedback-messages"]),
        os("section", X9, [
          qe(de(I), { class: "pb-5 ma-0" }, {
            default: ss(() => [
              qe(de(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: Zh(c.value)
              }, null, 8, ["textContent"]),
              qe(de(k), { shrink: "" }, {
                default: ss(() => [
                  qe(de(tf), {
                    weight: "quiet",
                    "aria-label": D.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: de(R)
                  }, {
                    default: ss(() => [
                      qe(de(gu), { icon: de(ed) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          os("div", {
            innerHTML: de(t).translationHtml
          }, null, 8, K9)
        ]),
        qe(m9, {
          active: X.value,
          "onUpdate:active": z[0] || (z[0] = (Q) => X.value = Q)
        }, null, 8, ["active"]),
        qe(XB, {
          active: de(m),
          "captcha-details": de(g),
          onClose: de(h),
          onPublish: z[1] || (z[1] = (Q) => B(Q))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        qe(BB, {
          active: de(E),
          status: de(N)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const e7 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: Z9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, t7 = window.Vue.resolveComponent, n7 = window.Vue.createVNode, o7 = window.Vue.normalizeClass, s7 = window.Vue.openBlock, a7 = window.Vue.createElementBlock;
function i7(e, t, n, o, s, a) {
  const r = t7("sx-publisher");
  return s7(), a7("main", {
    class: o7(["sx-publisher-view", a.classes])
  }, [
    n7(r)
  ], 2);
}
const r7 = /* @__PURE__ */ he(e7, [["render", i7]]);
const Ht = window.Vue.unref, Jn = window.Vue.createVNode, xo = window.Vue.withCtx, mu = window.Vue.toDisplayString, pu = window.Vue.createElementVNode, nf = window.Vue.openBlock, of = window.Vue.createBlock, l7 = window.Vue.createCommentVNode, c7 = ["textContent"], u7 = ["textContent"], d7 = ["textContent"], mv = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: ds,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (nf(), of(Ht(I), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Ht(q.getDir)(e.suggestion.language)
    }, {
      default: xo(() => [
        Jn(Ht(k), { shrink: "" }, {
          default: xo(() => [
            Jn(Ht(Uu), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Jn(Ht(k), { class: "ms-4" }, {
          default: xo(() => [
            Jn(Ht(I), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: xo(() => [
                Jn(Ht(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: xo(() => [
                    pu("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: mu(e.suggestion.title)
                    }, null, 8, c7)
                  ]),
                  _: 1
                }),
                Jn(Ht(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: xo(() => [
                    pu("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: mu(e.suggestion.description)
                    }, null, 8, u7)
                  ]),
                  _: 1
                }),
                Jn(Ht(k), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: xo(() => [
                    e.suggestion.inFeaturedCollection ? (nf(), of(Ur, {
                      key: 0,
                      class: "me-2"
                    })) : l7("", !0),
                    Jn(Ht(et), {
                      icon: Ht(X0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    pu("small", {
                      textContent: mu((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, d7)
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
const sf = window.Vue.unref, wa = window.Vue.openBlock, hu = window.Vue.createBlock, g7 = window.Vue.createCommentVNode, m7 = window.Vue.resolveDirective, p7 = window.Vue.withDirectives, af = window.Vue.createElementBlock, h7 = window.Vue.renderList, f7 = window.Vue.Fragment, w7 = window.Vue.normalizeClass, v7 = window.Vue.withCtx, _7 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, rf = window.Vue.computed, S7 = window.Vue.ref, y7 = {
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
    const { sourceLanguageURLParameter: t } = P(), n = rf(() => q.getAutonym(t.value)), o = e, s = S7(null), a = (d) => s.value = d, r = () => s.value = null, l = (d) => {
      var i;
      return ((i = o.selectedItem) == null ? void 0 : i.title) === d.title && !s.value || s.value === d.pageId;
    }, c = rf(() => o.searchInput);
    return (d, i) => {
      const u = m7("i18n");
      return wa(), hu(sf(Ze), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: v7(() => [
          e.searchResultsLoading ? (wa(), hu(sf(mt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : e.searchResultsSlice.length === 0 ? p7((wa(), af("p", _7, null, 512)), [
            [u, [
              c.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : g7("", !0),
          (wa(!0), af(f7, null, h7(e.searchResultsSlice, (g) => (wa(), hu(mv, {
            key: g.pageId,
            suggestion: g,
            class: w7({
              "sx-article-search__results-selected": l(g)
            }),
            onMouseenter: (m) => a(g.pageId),
            onMouseleave: r,
            onClick: (m) => d.$emit("suggestion-clicked", g)
          }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const lf = window.Vue.toDisplayString, C7 = window.Vue.createElementVNode, mr = window.Vue.openBlock, cf = window.Vue.createElementBlock, x7 = window.Vue.createCommentVNode, b7 = window.Vue.renderList, k7 = window.Vue.Fragment, $7 = window.Vue.normalizeClass, uf = window.Vue.createBlock, V7 = window.Vue.unref, df = window.Vue.withCtx, E7 = ["textContent"], L7 = ["textContent"], T7 = window.Vue.ref, fu = {
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
    const n = e, o = T7(null), s = (l) => o.value = l, a = () => o.value = null, r = (l) => {
      var c;
      return ((c = n.selectedItem) == null ? void 0 : c.title) === l.title && !o.value || o.value === l.pageId;
    };
    return (l, c) => (mr(), uf(V7(Ze), { class: "sx-article-search__suggestions pa-0" }, {
      header: df(() => [
        C7("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: lf(e.cardTitle)
        }, null, 8, E7),
        e.cardSubtitle ? (mr(), cf("p", {
          key: 0,
          class: "ma-0 px-4 pb-2 sx-article-search__suggestions-subtitle",
          textContent: lf(e.cardSubtitle)
        }, null, 8, L7)) : x7("", !0)
      ]),
      default: df(() => [
        (mr(!0), cf(k7, null, b7(e.suggestions, (d) => (mr(), uf(mv, {
          key: d.pageId,
          suggestion: d,
          class: $7({
            "sx-article-search__suggestions-selected": r(d)
          }),
          onMouseenter: (i) => s(d.pageId),
          onMouseleave: a,
          onClick: (i) => l.$emit("suggestion-clicked", d)
        }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, A7 = window.Vue.computed, D7 = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), gf = "other", P7 = (e) => A7((t) => {
  const o = e.value.slice(0, 3), s = {
    value: gf,
    props: {
      icon: J0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== gf);
  return D7(a, o) ? t : [...o.map((l) => ({
    value: l,
    props: {
      label: q.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), s];
}), B7 = window.Vue.computed, F7 = () => {
  const { supportedLanguageCodes: e } = Aa(), { targetLanguageURLParameter: t } = P();
  return { getSuggestedSourceLanguages: (o) => B7(() => {
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
}, N7 = window.Vue.ref, M7 = () => {
  const e = N7([]), t = () => {
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
}, U7 = window.Vuex.useStore, mf = window.Vue.ref, pr = window.Vue.computed, pf = window.Vue.watch, I7 = (e) => {
  const t = U7(), n = ro(), { fetchPageSuggestionsByFeaturedCollections: o } = Ju(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), { featuredCollection: r } = Wt(), { isFilteringByFeaturedCollection: l } = lo(), c = mf([]), d = mf(!1), i = pr(
    () => !!r.value && !d.value
  ), u = () => {
    var h;
    return !l() && ((h = r.value) == null ? void 0 : h.name) && g.value.length === 0;
  }, g = pr(() => {
    var h;
    return t.getters["suggestions/getCollectionPageSuggestions"](
      s.value,
      a.value,
      (h = r.value) == null ? void 0 : h.name
    );
  }), m = pr(() => {
    var h;
    return t.getters["suggestions/getCollectionSectionSuggestions"](
      s.value,
      a.value,
      (h = r.value) == null ? void 0 : h.name
    );
  }), p = pr(() => [
    ...g.value || [],
    ...m.value || []
  ].slice(0, e));
  return pf(
    p,
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
        )) : c.value = [], d.value = !0;
      } catch (f) {
        mw.log.error("Error fetching featured collection pages:", f), c.value = [], d.value = !0;
      }
    }),
    { immediate: !0 }
  ), pf(
    s,
    () => b(void 0, null, function* () {
      d.value = !1, u() && (c.value = [], yield o());
    }),
    { immediate: !0 }
  ), {
    featuredCollectionPages: c,
    featuredCollectionPagesLoading: i
  };
};
const R7 = window.Vue.resolveDirective, z7 = window.Vue.createElementVNode, wu = window.Vue.withDirectives, re = window.Vue.unref, va = window.Vue.withCtx, tn = window.Vue.createVNode, as = window.Vue.openBlock, vu = window.Vue.createBlock, O7 = window.Vue.createCommentVNode, _u = window.Vue.createElementBlock, j7 = window.Vue.Fragment, H7 = window.Vue.vShow, _a = window.Vue.withModifiers, Sa = window.Vue.withKeys, G7 = ["onKeydown"], q7 = { class: "mb-0" }, W7 = {
  key: 3,
  class: "sx-article-search__empty-state"
}, is = window.Vue.ref, X7 = window.Vue.onMounted, bo = window.Vue.computed, hf = window.Vue.watch, K7 = window.Vue.inject, Y7 = window.Vuex.useStore, Q7 = window.Codex.CdxButton, J7 = window.Codex.CdxIcon, Z7 = window.Codex.CdxSearchInput, ff = 3, eF = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = is(""), n = is(!1), o = is(null), s = is(!1), { previousLanguages: a, addLanguageToHistory: r } = M7(), l = Y7(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: d
    } = P(), { supportedLanguageCodes: i } = Aa(), u = ro(), g = is(!1), { searchResultsLoading: m, searchResultsSlice: p } = Gw(
      c,
      t
    ), { getSuggestedSourceLanguages: h } = F7(), f = h(a), w = P7(
      f
    ), v = nt(), { fetchAllTranslations: C } = fs();
    X7(() => b(this, null, function* () {
      var M;
      C(), r(c.value), (M = o.value) == null || M.focus();
    }));
    const { featuredCollectionPages: y, featuredCollectionPagesLoading: _ } = I7(ff), V = () => {
      v.push({ name: "dashboard" });
    }, E = lw(), N = (M) => {
      E(M, d.value), r(M);
    }, x = (M) => {
      if (M === "other") {
        s.value = !0;
        return;
      }
      N(M);
    }, B = Lt();
    hf(t, () => {
      n.value || (n.value = !0, B({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: d.value
      }));
    });
    const R = () => {
      s.value = !1;
    }, X = (M) => {
      s.value = !1, x(M);
    }, { fetchPreviousEditsInSource: ae, previousEditsInSource: ee } = Wf(), ne = is([]), D = () => {
      g.value = !0, ae().then(() => {
        if (ee.value.length > 0)
          return u(
            c.value,
            ee.value
          );
      }).then(
        () => ee.value.map(
          (M) => l.getters["mediawiki/getPage"](c.value, M)
        )
      ).then((M) => {
        M = M.slice(0, ff), M = M.sort(
          (H, G) => ee.value.indexOf(H.title) - ee.value.indexOf(G.title)
        ), ne.value = M;
      }).finally(() => {
        g.value = !1;
      });
    };
    hf(
      c,
      () => {
        var M;
        l.dispatch("mediawiki/fetchNearbyPages"), D(), (M = o.value) == null || M.focus();
      },
      { immediate: !0 }
    );
    const z = bo(() => l.getters["mediawiki/getNearbyPages"]), K = K7("breakpoints"), Q = bo(() => K.value.mobile), $e = Na(), xe = bo(
      () => ne.value && ne.value.length && !_.value
    ), _e = bo(
      () => z.value && z.value.length && !g.value
    ), Oe = bo(
      () => y.value && y.value.length > 0
    ), O = bo(() => Oe.value ? y.value || [] : xe.value ? ne.value || [] : _e.value ? z.value || [] : []), { next: j, prev: ce, keyboardNavigationContainer: S, selectedItem: T } = Ow(
      t,
      p,
      O
    ), L = (M) => $e(
      M.title,
      c.value,
      d.value,
      F.value
    ), F = bo(() => t.value ? "search_result" : xe.value ? "suggestion_recent_edit" : _e.value ? "suggestion_nearby" : "");
    return (M, H) => {
      const G = R7("i18n");
      return as(), _u("section", {
        ref_key: "keyboardNavigationContainer",
        ref: S,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          H[6] || (H[6] = Sa(_a((...U) => re(j) && re(j)(...U), ["stop", "prevent"]), ["tab"])),
          H[7] || (H[7] = Sa(_a((...U) => re(j) && re(j)(...U), ["stop", "prevent"]), ["down"])),
          H[8] || (H[8] = Sa(_a((...U) => re(ce) && re(ce)(...U), ["stop", "prevent"]), ["up"])),
          Sa(_a(V, ["stop", "prevent"]), ["esc"]),
          H[9] || (H[9] = Sa(_a((U) => L(re(T)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        tn(re(I), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: va(() => [
            tn(re(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: va(() => [
                wu(z7("h5", q7, null, 512), [
                  [G, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            tn(re(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: va(() => [
                tn(re(Q7), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": M.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: V
                }, {
                  default: va(() => [
                    tn(re(J7), { icon: re(ps) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        tn(re(Z7), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": H[0] || (H[0] = (U) => t.value = U),
          class: "sx-article-search__search-input",
          placeholder: M.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        tn(re(Ea), {
          class: "sx-article-search__language-button-group",
          items: re(w),
          active: re(c),
          onSelect: x
        }, null, 8, ["items", "active"]),
        t.value ? O7("", !0) : (as(), _u(j7, { key: 0 }, [
          Oe.value ? (as(), vu(fu, {
            key: 0,
            "card-title": M.$i18n("cx-sx-article-search-community-priorities-title"),
            "card-subtitle": M.$i18n("cx-sx-article-search-community-priorities-subtitle"),
            suggestions: re(y),
            "selected-item": re(T),
            onSuggestionClicked: H[1] || (H[1] = (U) => L(U))
          }, null, 8, ["card-title", "card-subtitle", "suggestions", "selected-item"])) : xe.value ? (as(), vu(fu, {
            key: 1,
            "card-title": M.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: ne.value,
            "selected-item": re(T),
            onSuggestionClicked: H[2] || (H[2] = (U) => L(U))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : _e.value ? (as(), vu(fu, {
            key: 2,
            "card-title": M.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: z.value,
            onSuggestionClicked: H[3] || (H[3] = (U) => L(U))
          }, null, 8, ["card-title", "suggestions"])) : wu((as(), _u("p", W7, null, 512)), [
            [G, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        wu(tn(y7, {
          "search-input": t.value,
          "search-results-loading": re(m),
          "search-results-slice": re(p),
          "selected-item": re(T),
          onSuggestionClicked: H[4] || (H[4] = (U) => L(U))
        }, null, 8, ["search-input", "search-results-loading", "search-results-slice", "selected-item"]), [
          [H7, !!t.value]
        ]),
        tn(re(Vt), {
          value: s.value,
          "onUpdate:value": H[5] || (H[5] = (U) => s.value = U),
          class: "sx-article-search-language-selector",
          fullscreen: Q.value,
          header: Q.value,
          title: M.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: R
        }, {
          default: va(() => [
            tn(re(jw), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: re(i),
              suggestions: re(f),
              placeholder: M.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: X,
              onClose: R
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, G7);
    };
  }
};
const tF = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: eF
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, nF = window.Vue.resolveComponent, oF = window.Vue.createVNode, sF = window.Vue.normalizeClass, aF = window.Vue.openBlock, iF = window.Vue.createElementBlock;
function rF(e, t, n, o, s, a) {
  const r = nF("sx-article-search");
  return aF(), iF("main", {
    class: sF(["sx-article-search-view", a.classes])
  }, [
    oF(r)
  ], 2);
}
const lF = /* @__PURE__ */ he(tF, [["render", rF]]), cF = () => {
  const e = Na(), t = pd(), { logDashboardOpenEvent: n } = Xw(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s,
    pageURLParameter: a
  } = P();
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
}, uF = window.Vuex.useStore, dF = [
  {
    path: "",
    name: "dashboard",
    component: ep,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: lF,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: r3,
    meta: { workflowStep: 1 },
    beforeEnter: () => {
      const {
        sourceLanguageURLParameter: e,
        targetLanguageURLParameter: t,
        pageURLParameter: n
      } = P();
      return !!(e.value && t.value && n.value);
    }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: $5,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: OT,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: FP,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: sP,
    meta: { workflowStep: 4 },
    beforeEnter: () => {
      const {
        sourceLanguageURLParameter: e,
        targetLanguageURLParameter: t,
        pageURLParameter: n
      } = P();
      return !!(e.value && t.value && n.value);
    }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: SB,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: r7,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: ep,
    meta: { workflowStep: 0 }
  }
], wd = Lk({
  history: Eb(),
  routes: dF
}), Su = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, gF = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
wd.beforeEach((e, t, n) => {
  const o = uF();
  if (mw.user.isAnon() || yf.assertUser().catch((i) => {
    i instanceof us && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = cF(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: c
  } = P();
  if (!!(a.value && r.value && l.value)) {
    if (gF(
      a.value,
      r.value,
      l.value
    )) {
      const u = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      Su(e.name, u, n);
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
const mF = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, pF = window.Vue.createApp, hF = mw.config.get("wgUserLanguage"), fF = "en", wF = mw.messages.values || {}, Eo = pF(vx);
Eo.use(wd);
Eo.use(Yx);
Eo.use(y1);
Eo.use(S1);
const vF = Z1({
  locale: hF,
  finalFallback: fF,
  messages: wF,
  wikilinks: !0
});
Eo.use(vF);
Eo.use(mF);
Eo.mount("#contenttranslation");
