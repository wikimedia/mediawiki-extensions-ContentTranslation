var vv = Object.defineProperty, _v = Object.defineProperties;
var Sv = Object.getOwnPropertyDescriptors;
var _d = Object.getOwnPropertySymbols;
var yv = Object.prototype.hasOwnProperty, Cv = Object.prototype.propertyIsEnumerable;
var Sd = (e, t, n) => t in e ? vv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, me = (e, t) => {
  for (var n in t || (t = {}))
    yv.call(t, n) && Sd(e, n, t[n]);
  if (_d)
    for (var n of _d(t))
      Cv.call(t, n) && Sd(e, n, t[n]);
  return e;
}, Ke = (e, t) => _v(e, Sv(t));
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
}, bv = window.Vue.toDisplayString, Kr = window.Vue.openBlock, Yr = window.Vue.createElementBlock, kv = window.Vue.createCommentVNode, yd = window.Vue.createElementVNode, $v = window.Vue.normalizeStyle, Vv = window.Vue.normalizeClass, Ev = ["width", "height", "aria-labelledby"], Lv = ["id"], Tv = ["d"];
function Av(e, t, n, o, s, a) {
  return Kr(), Yr("span", {
    class: Vv(["mw-ui-icon notranslate", a.classes])
  }, [
    (Kr(), Yr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (Kr(), Yr("title", {
        key: 0,
        id: n.iconName
      }, bv(n.iconName), 9, Lv)) : kv("", !0),
      yd("g", {
        style: $v({ fill: n.iconColor })
      }, [
        yd("path", { d: a.iconImagePath }, null, 8, Tv)
      ], 4)
    ], 8, Ev))
  ], 2);
}
const Ze = /* @__PURE__ */ he(xv, [["render", Av]]);
const Dv = {
  name: "MwButton",
  components: {
    MwIcon: Ze
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
}, Pv = window.Vue.renderSlot, Bv = window.Vue.resolveComponent, Cd = window.Vue.normalizeClass, qa = window.Vue.openBlock, Qr = window.Vue.createBlock, Jr = window.Vue.createCommentVNode, Fv = window.Vue.toDisplayString, Nv = window.Vue.createElementBlock, Mv = window.Vue.toHandlerKey, Uv = window.Vue.withModifiers, Iv = window.Vue.mergeProps, Rv = window.Vue.createElementVNode, zv = window.Vue.resolveDynamicComponent, Ov = window.Vue.withCtx, jv = { class: "mw-ui-button__content" }, Hv = ["textContent"];
function qv(e, t, n, o, s, a) {
  const r = Bv("mw-icon");
  return qa(), Qr(zv(a.component), {
    class: Cd(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Ov(() => [
      Pv(e.$slots, "default", {}, () => [
        Rv("span", jv, [
          n.icon ? (qa(), Qr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Cd(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Jr("", !0),
          !a.isIcon && n.label ? (qa(), Nv("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Fv(n.label)
          }, null, 8, Hv)) : Jr("", !0),
          n.indicator ? (qa(), Qr(r, Iv({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Mv(a.indicatorClickEvent)]: t[0] || (t[0] = Uv((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Jr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Xe = /* @__PURE__ */ he(Dv, [["render", qv]]);
const Gv = {
  name: "MwButtonGroup",
  components: {
    MwButton: Xe
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
      default: "var(--color-base, #202122)"
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
}, Wv = window.Vue.renderList, Xv = window.Vue.Fragment, Zr = window.Vue.openBlock, xd = window.Vue.createElementBlock, Kv = window.Vue.resolveComponent, Yv = window.Vue.withModifiers, Qv = window.Vue.mergeProps, Jv = window.Vue.createBlock, Zv = { class: "row mw-ui-button-group ma-0 pa-0" };
function e0(e, t, n, o, s, a) {
  const r = Kv("mw-button");
  return Zr(), xd("div", Zv, [
    (Zr(!0), xd(Xv, null, Wv(n.items, (l) => (Zr(), Jv(r, Qv({
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
const Ta = /* @__PURE__ */ he(Gv, [["render", e0]]);
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
}, bd = window.Vue.renderSlot, n0 = window.Vue.toDisplayString, kd = window.Vue.openBlock, $d = window.Vue.createElementBlock, o0 = window.Vue.createCommentVNode, s0 = window.Vue.createElementVNode, a0 = { class: "mw-ui-card" }, i0 = ["textContent"], r0 = { class: "mw-ui-card__content" };
function l0(e, t, n, o, s, a) {
  return kd(), $d("div", a0, [
    bd(e.$slots, "header", {}, () => [
      n.title ? (kd(), $d("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: n0(n.title)
      }, null, 8, i0)) : o0("", !0)
    ]),
    s0("div", r0, [
      bd(e.$slots, "default")
    ])
  ]);
}
const Je = /* @__PURE__ */ he(t0, [["render", l0]]);
const c0 = {}, u0 = window.Vue.openBlock, d0 = window.Vue.createElementBlock, g0 = { class: "mw-ui-divider row" };
function m0(e, t) {
  return u0(), d0("div", g0);
}
const xr = /* @__PURE__ */ he(c0, [["render", m0]]);
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
  (e, t) => Ke(me({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), A0 = {
  name: "MwCol",
  props: Ke(me({}, T0), {
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
const k = /* @__PURE__ */ he(A0, [["render", U0]]), I0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", R0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", br = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", z0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, O0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", wf = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", j0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", H0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", kr = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", q0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", G0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", W0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Vd = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", X0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", vf = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", K0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", Y0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Q0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", J0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Z0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Cu = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, e_ = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, t_ = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, _f = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", n_ = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const el = window.Vue.computed, o_ = window.Vue.watch, s_ = window.Vue.ref, a_ = window.Vue.nextTick, i_ = {
  name: "MwDialog",
  components: {
    MwButton: Xe,
    MwRow: I,
    MwCol: k,
    MwDivider: xr
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
    const n = s_(null), o = el(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = el(
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
    const l = el(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClass: s,
      mwIconClose: kr,
      root: n
    };
  }
}, Ed = window.Vue.normalizeClass, tl = window.Vue.createElementVNode, nl = window.Vue.renderSlot, Ga = window.Vue.resolveComponent, ys = window.Vue.createVNode, ol = window.Vue.withCtx, Ld = window.Vue.createCommentVNode, r_ = window.Vue.withKeys, Td = window.Vue.openBlock, l_ = window.Vue.createElementBlock, c_ = window.Vue.Transition, u_ = window.Vue.normalizeStyle, d_ = window.Vue.createBlock, g_ = { class: "mw-ui-dialog__shell items-stretch" }, m_ = { class: "mw-ui-dialog__body" };
function p_(e, t, n, o, s, a) {
  const r = Ga("mw-col"), l = Ga("mw-button"), c = Ga("mw-row"), u = Ga("mw-divider");
  return Td(), d_(c_, {
    name: "mw-ui-animation-fade",
    style: u_(o.cssVars)
  }, {
    default: ol(() => [
      n.value ? (Td(), l_("div", {
        key: 0,
        ref: "root",
        class: Ed(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = r_((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        tl("div", {
          class: Ed(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        tl("div", g_, [
          n.header ? nl(e.$slots, "header", { key: 0 }, () => [
            ys(c, { class: "mw-ui-dialog__header" }, {
              default: ol(() => [
                ys(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                ys(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: ol(() => [
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
            ys(u)
          ]) : Ld("", !0),
          tl("div", m_, [
            nl(e.$slots, "default")
          ]),
          nl(e.$slots, "footer")
        ])
      ], 34)) : Ld("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const Vt = /* @__PURE__ */ he(i_, [["render", p_]]);
const h_ = {
  name: "MwInput",
  components: {
    MwIcon: Ze
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
}, Ad = window.Vue.renderSlot, f_ = window.Vue.resolveComponent, Wa = window.Vue.openBlock, sl = window.Vue.createBlock, Dd = window.Vue.createCommentVNode, w_ = window.Vue.resolveDynamicComponent, v_ = window.Vue.toDisplayString, __ = window.Vue.mergeProps, S_ = window.Vue.withModifiers, y_ = window.Vue.createElementVNode, C_ = window.Vue.normalizeClass, x_ = window.Vue.createElementBlock, b_ = { class: "mw-ui-input__content" };
function k_(e, t, n, o, s, a) {
  const r = f_("mw-icon");
  return Wa(), x_("div", {
    class: C_(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    y_("div", b_, [
      Ad(e.$slots, "icon", {}, () => [
        n.icon ? (Wa(), sl(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Dd("", !0)
      ]),
      (Wa(), sl(w_(n.type === "textarea" ? n.type : "input"), __({
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
      Ad(e.$slots, "indicator", {}, () => [
        n.indicator ? (Wa(), sl(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = S_((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Dd("", !0)
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
const $_ = {}, V_ = window.Vue.createElementVNode, E_ = window.Vue.openBlock, L_ = window.Vue.createElementBlock, T_ = { class: "mw-ui-spinner" };
function A_(e, t) {
  return E_(), L_("div", T_, t[0] || (t[0] = [
    V_("div", { class: "mw-ui-spinner__bounce" }, null, -1)
  ]));
}
const mt = /* @__PURE__ */ he($_, [["render", A_]]), kt = {
  gray200: "var(--background-color-neutral, #eaecf0)",
  gray300: "var(--border-color-subtle, #c8ccd1)",
  gray500: "var(--color-subtle, #72777d)",
  gray600: "var(--color-subtle, #54595d)",
  gray700: "var(--color-base, #202122)",
  blue600: "var(--color-progressive, #36c)",
  green500: "var(--color-success, #00af89)",
  green600: "var(--color-success, #14866d)",
  red600: "var(--color-error, #d73333)",
  yellow500: "var(--color-warning, #fc3)",
  yellow700: "var(--color-warning, #ac6600)"
};
const D_ = window.Vue.computed, P_ = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: Ze },
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
    const n = D_(() => {
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
}, Pd = window.Vue.normalizeStyle, Bd = window.Vue.openBlock, B_ = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const F_ = window.Vue.resolveComponent, N_ = window.Vue.createBlock;
function M_(e, t, n, o, s, a) {
  const r = F_("mw-ui-icon");
  return n.thumbnail ? (Bd(), B_("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Pd(o.style)
  }, null, 4)) : (Bd(), N_(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Pd(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Uu = /* @__PURE__ */ he(P_, [["render", M_]]);
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
const U_ = {
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
      default: "var(--color-progressive, #36c)"
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
}, Fd = window.Vue.normalizeClass, Nd = window.Vue.normalizeStyle, I_ = window.Vue.createElementVNode, R_ = window.Vue.openBlock, z_ = window.Vue.createElementBlock, O_ = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function j_(e, t, n, o, s, a) {
  return R_(), z_("div", {
    class: Fd(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Nd(a.containerStyles)
  }, [
    I_("div", {
      class: Fd(["mw-progress-bar__bar", a.barClass]),
      style: Nd(a.barStyles)
    }, null, 6)
  ], 14, O_);
}
const Sf = /* @__PURE__ */ he(U_, [["render", j_]]), H_ = (e, t, n, o) => (s) => {
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
}, q_ = (e, t, n, o) => ({ initiateDrag: H_(
  e,
  t,
  n,
  o
) }), G_ = window.Vue.ref, Md = window.Vue.computed, W_ = (e, t, n, o) => {
  const s = G_(0), a = Md(
    () => t.value > e.value
  ), r = Md(
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
const Xa = window.Vue.ref, X_ = window.Vue.onMounted, Ud = window.Vue.computed, K_ = window.Vue.nextTick, Y_ = {
  name: "MwExpandableContent",
  components: {
    MwButton: Xe
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
    const t = Xa(!0), n = Xa(null), o = Ud(
      () => Math.min(e.minHeight, s.value)
    ), s = Xa(1), { initiateDrag: a } = q_(
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
    } = W_(o, s, n, t), d = () => u(c.value + 1), g = Xa(null), m = Ud(() => ({
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
    return X_(() => b(this, null, function* () {
      var f;
      yield K_(), s.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
        t.value || (n.value.style.removeProperty("height"), u(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: c,
      scrollToNextStep: d
    };
  }
}, Q_ = window.Vue.renderSlot, J_ = window.Vue.normalizeClass, Ka = window.Vue.createElementVNode, Z_ = window.Vue.resolveComponent, e1 = window.Vue.createVNode, al = window.Vue.openBlock, t1 = window.Vue.createBlock, Id = window.Vue.createCommentVNode, Rd = window.Vue.createElementBlock, n1 = window.Vue.normalizeStyle, o1 = { class: "mw-ui-expandable-content__container" }, s1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, a1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function i1(e, t, n, o, s, a) {
  const r = Z_("mw-button");
  return al(), Rd("div", {
    class: "mw-ui-expandable-content",
    style: n1(o.cssVars)
  }, [
    Ka("div", o1, [
      Ka("div", {
        ref: "contentRef",
        class: J_(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        Q_(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (al(), Rd("div", s1, [
        e1(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (al(), t1(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Id("", !0)
      ])) : Id("", !0)
    ]),
    Ka("div", a1, [
      Ka("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const r1 = /* @__PURE__ */ he(Y_, [["render", i1]]);
const Ya = window.Vue.computed, l1 = {
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
    const t = Ya(() => e.size / 2 * 0.9), n = Ya(() => Math.PI * (t.value * 2)), o = Ya(
      () => (100 - e.percentage) / 100 * n.value
    ), s = Ya(() => ({
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
}, zd = window.Vue.createElementVNode, Od = window.Vue.normalizeStyle, c1 = window.Vue.openBlock, u1 = window.Vue.createElementBlock, d1 = ["width", "height", "viewport"], g1 = ["r", "cx", "cy", "stroke-dasharray"], m1 = ["r", "cx", "cy", "stroke-dasharray"];
function p1(e, t, n, o, s, a) {
  return c1(), u1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Od(o.cssVars)
  }, [
    zd("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, g1),
    zd("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Od({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, m1)
  ], 12, d1);
}
const h1 = /* @__PURE__ */ he(l1, [["render", p1]]), f1 = window.Vue.ref, An = {
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
}, il = {
  mobile: () => matchMedia(Fn.mobile).matches,
  tablet: () => matchMedia(Fn.tablet).matches,
  desktop: () => matchMedia(Fn.desktop).matches,
  desktopwide: () => matchMedia(Fn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Fn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Fn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Fn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Fn["desktop-and-down"]).matches
}, w1 = (e) => {
  const t = Object.values(An);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, v1 = {
  install: (e) => {
    const t = f1({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in il)
        il.hasOwnProperty(s) && (t.value[s] = il[s]());
      t.value.nextBreakpoint = w1(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Ke(me({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, _1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ke(me({}, e.config.globalProperties.$mwui || {}), {
      colors: kt
    }), e.provide("colors", kt);
  }
};
class us extends Error {
}
const S1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new us();
}), yf = { assertUser: S1 };
const y1 = window.Vue.resolveDirective, Cs = window.Vue.createElementVNode, jd = window.Vue.withDirectives, C1 = window.Vue.toDisplayString, x1 = window.Vue.unref, Hd = window.Vue.withCtx, b1 = window.Vue.openBlock, k1 = window.Vue.createBlock, $1 = window.Vue.createCommentVNode, V1 = { class: "pa-4 sx-login-dialog__header" }, E1 = { class: "sx-login-dialog__body px-6 pb-4" }, L1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, T1 = ["href"], A1 = window.Vue.computed, D1 = window.Vue.ref, P1 = window.Vuex.useStore, B1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = P1(), n = A1(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = D1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = y1("i18n");
      return n.value ? (b1(), k1(x1(Vt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Hd(() => [
          Cs("div", V1, [
            jd(Cs("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Hd(() => [
          jd(Cs("div", E1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          Cs("div", L1, [
            Cs("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, C1(a.$i18n("cx-sx-login-dialog-button-label")), 9, T1)
          ])
        ]),
        _: 1
      })) : $1("", !0);
    };
  }
}, Q = new mw.cx.SiteMapper(), F1 = mw.util.getUrl, N1 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, qt = !mw.config.get("wgMFMode");
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
const Qa = "original", Ja = "empty", M1 = {
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
      Qa,
      Ja
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return M1[t] || t;
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
    return Qa;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Ja;
  }
  static isUserMTProvider(t) {
    return [Qa, Ja].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === Ja ? "blank" : t === Qa ? "source" : t.toLowerCase();
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Ke(me({}, a), {
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
  const t = _r(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, _r = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, ko = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Cf = (e) => {
  const t = _r(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = U1(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, U1 = (e) => {
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
class rl {
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
    const t = _r(this.transclusionNode);
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
    const o = _r(n);
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
      new rl({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new rl({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new rl({
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
), I1 = Ru - 10, R1 = [
  { status: "failure", value: 100 - Ru },
  { status: "warning", value: 100 - I1 },
  { status: "success", value: 100 }
], kf = (e, t, n) => {
  const o = Gd(e).textContent, s = Gd(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, z1 = (e) => R1.find((t) => e <= t.value).status, O1 = (e, t) => kf(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), j1 = () => (100 - Ru) / 100, Gd = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, sn = {
  calculateScore: kf,
  getScoreStatus: z1,
  getMTScoreForPageSection: O1,
  getMtModificationThreshold: j1
}, Za = "__LEAD_SECTION__";
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
    return Za;
  }
  static isSectionLead(t) {
    return !t || t === Za;
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
    return this.isLeadSection ? Za : this.originalTitle;
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
    return this.isLeadSection ? Za : this.title;
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
class $r extends Iu {
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
const an = "previous-edits", rn = "popular", et = "topic", Be = "geography", te = "collections", Ge = "automatic", Gt = "seed", Wd = window.Vue.ref, { topics: H1, regions: q1 } = mw.loader.require(
  "ext.cx.articlefilters"
), ll = {
  type: Ge,
  id: an
}, G1 = {
  type: Ge,
  id: rn
}, zu = () => {
  const e = Wd(
    H1.flatMap((u) => u.topics).map((u) => u.topicId.toLowerCase())
  ), t = Wd(!1), n = (u, i) => e.value.includes(i) ? { type: et, id: i } : null, o = (u, i) => q1.some(
    (g) => g.id.toLowerCase() === i || g.countries.some(
      (m) => m.id.toLowerCase() === i
    )
  ) ? { type: Be, id: i } : null, s = (u, i, d) => d && !d.some((g) => g.name.toLowerCase() === i) ? null : { type: te, id: u }, a = ({ type: u, id: i }, d = !1) => {
    t.value = !1;
    const g = u == null ? void 0 : u.toLowerCase(), m = i == null ? void 0 : i.toLowerCase();
    if (m === an)
      return {
        type: Ge,
        id: an
      };
    if (m === rn)
      return {
        type: Ge,
        id: rn
      };
    if (m === te)
      return d && !d.length ? (t.value = !0, ll) : {
        type: Ge,
        id: te
      };
    if (g === et) {
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
        d
      );
      if (p)
        return p;
      t.value = !0;
    } else if (g === Gt)
      return { type: Gt, id: i };
    return ll;
  }, r = ({ type: u, id: i }) => c({ type: u, id: i }, ll), l = ({ type: u, id: i }) => c({ type: u, id: i }, G1), c = (u, i) => !(u != null && u.id) || !(u != null && u.type) || !(i != null && i.id) || !(i != null && i.type) ? !1 : u.id.toLowerCase() === i.id.toLowerCase() && u.type.toLowerCase() === i.type.toLowerCase();
  return {
    filtersValidatorError: t,
    validateFilters: a,
    isDefaultFilter: r,
    isPopularFilter: l,
    isEqualFilter: c
  };
}, W1 = window.Vue.inject, X1 = window.Vue.reactive;
var K1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, $f = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(K1, function() {
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
                const Z = A[At]();
                if (Z === null)
                  return f = W, null;
                Ne.push(Z);
              }
              return Ne;
            }
            function x(A, W) {
              return () => {
                const Ne = f, At = [];
                let Z = W();
                for (; Z !== null; )
                  At.push(Z), Z = W();
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
            const V = _(/^\s+/), E = y("|"), N = y(":"), C = y("\\"), D = _(/^./), R = y("$"), X = _(/^\d+/), ae = y('"'), ee = y("'"), ne = _(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), B = _(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), z = w([K, _(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function K() {
              const A = v([C, D]);
              return A === null ? null : A[1];
            }
            const J = w([K, B]), $e = w([K, ne]);
            function xe() {
              const A = v([R, X]);
              return A === null ? null : ["REPLACE", parseInt(A[1], 10) - 1];
            }
            const _e = (ze = _(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), O = function(A) {
              return A.toString();
            }, () => {
              const A = ze();
              return A === null ? null : O(A);
            });
            var ze, O;
            function j() {
              const A = v([E, x(0, To)]);
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
              const A = v([w([ce, S, T]), x(0, j)]);
              return A === null ? null : A[0].concat(A[1]);
            }, function() {
              const A = v([_e, x(0, j)]);
              return A === null ? null : [A[0]].concat(A[1]);
            }]), F = y("{{"), M = y("}}"), H = y("[["), G = y("]]"), U = y("["), ie = y("]");
            function st() {
              const A = v([F, L, M]);
              return A === null ? null : A[1];
            }
            const Ve = w([function() {
              const A = v([x(1, To), E, x(1, Lo)]);
              return A === null ? null : [["CONCAT"].concat(A[0]), ["CONCAT"].concat(A[2])];
            }, function() {
              const A = v([x(1, To)]);
              return A === null ? null : [["CONCAT"].concat(A[0])];
            }]);
            function Ra() {
              let A = null;
              const W = v([H, Ve, G]);
              if (W !== null) {
                const Ne = W[1];
                A = ["WIKILINK"].concat(Ne);
              }
              return A;
            }
            function za() {
              let A = null;
              const W = v([U, x(1, Hr), V, x(1, Lo), ie]);
              return W !== null && (A = ["EXTLINK", W[1].length === 1 ? W[1][0] : ["CONCAT"].concat(W[1]), ["CONCAT"].concat(W[3])]), A;
            }
            const co = _(/^[A-Za-z]+/);
            function Or() {
              const A = _(/^[^"]*/), W = v([ae, A, ae]);
              return W === null ? null : W[1];
            }
            function jr() {
              const A = _(/^[^']*/), W = v([ee, A, ee]);
              return W === null ? null : W[1];
            }
            function _s() {
              const A = _(/^\s*=\s*/), W = v([V, co, A, w([Or, jr])]);
              return W === null ? null : [W[1], W[3]];
            }
            function Ss() {
              const A = x(0, _s)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], A);
            }
            const Hr = w([st, xe, Ra, za, function() {
              const A = x(1, z)();
              return A === null ? null : A.join("");
            }]), Lo = w([st, xe, Ra, za, function() {
              let A = null;
              const W = f, Ne = y("<"), At = _(/^\/?/), Z = _(/^\s*>/), un = v([Ne, co, Ss, At, Z]);
              if (un === null)
                return null;
              const Bn = f, ft = un[1], Ao = x(0, Lo)(), qr = f, wd = v([y("</"), co, Z]);
              if (wd === null)
                return ["CONCAT", p.slice(W, Bn)].concat(Ao);
              const pv = f, hv = wd[1], vd = un[2];
              if (function(uo, ja, Gr, Wr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((uo = uo.toLowerCase()) !== (ja = ja.toLowerCase()) || Wr.allowedHtmlElements.indexOf(uo) === -1)
                  return !1;
                const fv = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Ha = 0, wv = Gr.length; Ha < wv; Ha += 2) {
                  const Xr = Gr[Ha];
                  if (Wr.allowedHtmlCommonAttributes.indexOf(Xr) === -1 && (Wr.allowedHtmlAttributesByElement[uo] || []).indexOf(Xr) === -1 || Xr === "style" && Gr[Ha + 1].search(fv) !== -1)
                    return !1;
                }
                return !0;
              }(ft, hv, vd.slice(1)))
                A = ["HTMLELEMENT", ft, vd].concat(Ao);
              else {
                const uo = (ja) => ja.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                A = ["CONCAT", uo(p.slice(W, Bn))].concat(Ao, uo(p.slice(qr, pv)));
              }
              return A;
            }, function() {
              const A = x(1, $e)();
              return A === null ? null : A.join("");
            }]), To = w([st, xe, function() {
              const A = x(1, J)();
              return A === null ? null : A.join("");
            }]), Oa = function() {
              const A = x(0, Lo)();
              return A === null ? null : ["CONCAT"].concat(A);
            }();
            if (Oa === null || f !== p.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + p);
            return Oa;
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
})($f);
var Y1 = $f.exports;
const Xd = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Vf = Symbol("banana-context");
function fe() {
  const e = W1(Vf);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function Q1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = X1(new Y1(e.locale, e));
  return {
    install: (n) => {
      n.provide(Vf, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = Xd(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = Xd(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Pn = window.Vue.ref, J1 = window.Vue.computed, Vr = Pn(null), Er = Pn(null), Lr = Pn(null), Aa = Pn(null), Ou = Pn(null), Tr = Pn(null), Ef = Pn(null), Lf = Pn(null), ju = Pn(null), { validateFilters: Z1, filtersValidatorError: eS } = zu(), Tf = {
  from: Vr,
  to: Er,
  section: Aa,
  draft: Ou,
  page: Lr,
  revision: Tr,
  "active-list": ju
}, tS = J1(() => ({
  type: Ef.value,
  id: Lf.value
})), Af = (e, t) => {
  Ef.value = e, Lf.value = t, Sr("filter-type", e), t && Sr("filter-id", t);
}, nS = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof $r && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), Tf[o].value = s;
  }
  t.delete("title"), Da(Object.fromEntries(t));
}, Hu = (e, t) => {
  Tf[e].value = t, Sr(e, t);
}, oS = (e) => {
  Hu("section", e);
}, sS = (e) => {
  Hu("page", e);
}, aS = (e) => {
  Hu("active-list", e);
}, Da = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    F1(`Special:ContentTranslation${t}`, e)
  );
}, iS = () => {
  const e = fe(), t = new URLSearchParams(location.search);
  Lr.value = t.get("page"), Vr.value = t.get("from"), Er.value = t.get("to"), Aa.value = t.get("section"), Tr.value = t.get("revision"), ju.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = Z1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Af(n.type, n.id), eS.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, rS = () => {
  const e = new URLSearchParams(location.search);
  Aa.value = null, e.delete("section"), e.delete("title"), Da(Object.fromEntries(e));
}, Sr = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), Da(Object.fromEntries(n));
}, lS = (e) => new URLSearchParams(location.search).get(e), cS = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Vr.value = e, Er.value = t, n.delete("title"), Da(Object.fromEntries(n));
}, uS = () => {
  const e = new URLSearchParams(location.search);
  Lr.value = null, Aa.value = null, Ou.value = null, Tr.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), Da(Object.fromEntries(e));
}, dS = () => new URLSearchParams(location.search).get("force-quick-tutorial"), P = () => ({
  isQuickTutorialForced: dS,
  setLanguageURLParams: cS,
  setSectionURLParam: oS,
  setTranslationURLParams: nS,
  initializeURLState: iS,
  clearTranslationURLParameters: uS,
  clearSectionURLParameter: rS,
  setUrlParam: Sr,
  getUrlParam: lS,
  pageURLParameter: Lr,
  sourceLanguageURLParameter: Vr,
  targetLanguageURLParameter: Er,
  sectionURLParameter: Aa,
  draftURLParameter: Ou,
  revisionURLParameter: Tr,
  setPageURLParam: sS,
  currentSuggestionFilters: tS,
  setFilterURLParams: Af,
  activeDashboardTabParameter: ju,
  setActiveDashboardTabParameter: aS
}), gS = () => {
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
function mS(e, t) {
  return b(this, null, function* () {
    const n = Q.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new le(e, t, o.mt)
      )
    );
  });
}
function pS() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function hS(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = Q.getWikiDomainCode(e), r = Q.getWikiDomainCode(t), l = {
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
const Ar = {
  fetchSupportedLanguageCodes: gS,
  fetchSupportedMTProviders: mS,
  fetchCXServerToken: pS,
  addWikibaseLink: hS
}, fS = window.Vue.ref, ei = fS([]);
let Kd = !1;
function Pa() {
  return {
    fetchSupportedLanguageCodes: () => b(this, null, function* () {
      if (!Kd) {
        Kd = !0, ei.value = yield Ar.fetchSupportedLanguageCodes();
        const t = mw.config.get(
          "ContentTranslationDomainCodeMapping"
        );
        Object.keys(t).forEach((n) => {
          if (n === "be-x-old")
            return;
          const o = t[n], s = ei.value.indexOf(o);
          s > -1 && (ei.value[s] = n);
        });
      }
    }),
    supportedLanguageCodes: ei
  };
}
const wS = {
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
}, vS = {
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
}, _S = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], SS = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, yS = {
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
}, CS = {
  languages: wS,
  scriptgroups: vS,
  rtlscripts: _S,
  regiongroups: SS,
  territories: yS
};
var Re = CS;
function Ba(e) {
  return !!Re.languages[e];
}
function io(e) {
  return Ba(e) && Re.languages[e].length === 1 ? Re.languages[e][0] : !1;
}
function xS() {
  return Re.languages;
}
function Fa(e) {
  var t = io(e);
  return t ? Fa(t) : Ba(e) ? Re.languages[e][0] : "Zyyy";
}
function qu(e) {
  var t = io(e);
  return t ? qu(t) : Ba(e) && Re.languages[e][1] || "UNKNOWN";
}
function Va(e) {
  var t = io(e);
  return t ? Va(t) : Ba(e) && Re.languages[e][2] || e;
}
function bS() {
  var e, t = {};
  for (e in Re.languages)
    io(e) || (t[e] = Va(e));
  return t;
}
function Df(e) {
  var t, n, o = [];
  for (t in Re.languages)
    if (!io(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Fa(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function kS(e) {
  return Df([e]);
}
function Pf(e) {
  var t;
  for (t in Re.scriptgroups)
    if (Re.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Gu(e) {
  return Pf(Fa(e));
}
function Bf(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = io(n) || n, a = Gu(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Ff(e) {
  var t, n, o, s = {};
  for (t in Re.languages)
    if (!io(t)) {
      for (n = 0; n < e.length; n++)
        if (qu(t).includes(e[n])) {
          o = Gu(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function $S(e) {
  return Ff([e]);
}
function VS(e) {
  var t, n, o, s = [];
  for (t = Bf(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function ES(e, t) {
  var n = Va(e) || e, o = Va(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Nf(e) {
  return Re.rtlscripts.includes(Fa(e));
}
function LS(e) {
  return Nf(e) ? "rtl" : "ltr";
}
function TS(e) {
  return Re.territories[e] || [];
}
function AS(e, t) {
  t.target ? Re.languages[e] = [t.target] : Re.languages[e] = [t.script, t.regions, t.autonym];
}
var q = {
  addLanguage: AS,
  getAutonym: Va,
  getAutonyms: bS,
  getDir: LS,
  getGroupOfScript: Pf,
  getLanguages: xS,
  getLanguagesByScriptGroup: Bf,
  getLanguagesByScriptGroupInRegion: $S,
  getLanguagesByScriptGroupInRegions: Ff,
  getLanguagesInScript: kS,
  getLanguagesInScripts: Df,
  getLanguagesInTerritory: TS,
  getRegions: qu,
  getScript: Fa,
  getScriptGroupOfLanguage: Gu,
  isKnown: Ba,
  isRedirect: io,
  isRtl: Nf,
  sortByScriptGroup: VS,
  sortByAutonym: ES
};
const Do = window.Vue.computed;
function tt(e) {
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
    if (!this.image || !this.thumbnail)
      return null;
    if (!t)
      return this.image.source;
    const n = [
      20,
      40,
      60,
      120,
      250,
      330,
      500,
      960,
      1280,
      1920,
      3840
    ];
    let o = 500;
    for (let a = 0; a < n.length; a++) {
      let r = n[a];
      if (r >= t) {
        o = r;
        break;
      }
    }
    const s = /\/\d+px-([^/]+)$/;
    return this.thumbnail.source.replace(s, `/${o}px-$1`);
  }
}
class DS {
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
function PS() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const BS = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), PS();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, FS = (e, t) => {
  let n, o;
  return t ? (n = BS(e), o = n.$element.find(
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
}, NS = (e, t) => {
  const n = Array.from(
    FS(e, t)
  );
  return MS(n).map(
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
          sentences: US(i),
          node: i
        })
      );
      return new no({ id: c, subSections: u, isLeadSection: l });
    }
  );
}, MS = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, US = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new eo({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Mf = {
  convertSegmentedContentToPageSections: NS
}, Wu = 120, IS = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7-day page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Wu,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  }, o = Q.getApi(e).get(n);
  return new Promise((s, a) => {
    o.then((r) => {
      const l = r.query.pages, u = (r.query.redirects || []).reduce(
        (g, m) => Ke(me({}, g), { [m.to]: m.from }),
        {}
      ), d = (r.query.normalized || []).reduce(
        (g, m) => Ke(me({}, g), {
          [m.to]: m.from
        }),
        {}
      );
      s(
        l.map((g) => {
          const m = d[g.title] || u[g.title] || null;
          return new ds(Ke(me({}, g), { _alias: m }));
        })
      );
    }).fail(a);
  });
}, RS = (e, t) => {
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
  }, o = Q.getApi(e).get(n), s = Q.siteTemplates.api.includes("wikipedia.org");
  return new Promise((a, r) => {
    o.then((l) => {
      var d, g;
      const c = l.query.pages;
      (!c || !c.length || (d = c[0]) != null && d.missing) && r(new Error("Page not found"));
      const u = [
        { lang: e, title: t },
        ...c[0].langlinks || []
      ], i = (g = c[0].pageprops) == null ? void 0 : g.wikibase_item;
      if (!i) {
        if (!s)
          return a(null);
        r(new Error("Wikidata ID not found"));
      }
      a(Object.freeze(new DS(i, u)));
    }).fail(r);
  });
}, zS = (e, t) => {
  if (!Number.isInteger(t) || t <= 0)
    throw new RangeError("chunk(): size must be a positive integer");
  const n = [];
  for (let o = 0; o < e.length; o += t)
    n.push(e.slice(o, o + t));
  return n;
}, OS = (e, t, n) => b(void 0, null, function* () {
  const o = Q.getApi(e), a = zS(n, 50).map((l) => {
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
    return o.get(c).then((u) => Object.values(u.query.pages).map((d) => {
      var g, m;
      return (m = (g = d.langlinks) == null ? void 0 : g[0]) == null ? void 0 : m["*"];
    }).filter((d) => !!d));
  });
  return (yield Promise.all(a)).flat();
}), jS = (e, t, n, o = null) => {
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
    Q.getApi(e).get(l).then((u) => {
      var i;
      return r(((i = u == null ? void 0 : u.parse) == null ? void 0 : i.sections) || []);
    }).fail(() => r([]));
  }).then(
    (r) => r.filter((l) => l.toclevel === 1).map((l) => ({
      title: l.line,
      id: l.number
    }))
  ), a = HS(
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
}, HS = (e, t, n, o = null) => {
  const s = Q.getWikiDomainCode(e), a = Q.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, l += "/$revision");
  const c = Q.getCXServerUrl(
    l,
    r
  );
  return fetch(c).then((u) => u.json()).then((u) => u.segmentedContent);
}, qS = (e) => {
  const t = N1();
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
    Q.getApi(e).get(n).then((a) => {
      var r;
      return o(((r = a == null ? void 0 : a.query) == null ? void 0 : r.pages) || []);
    }).fail(() => o([]));
  }).then((o) => o.map((s) => new ds(s)));
}, GS = (e, t) => {
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
  return Q.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.filter(({ pageprops: a }) => !(!a || "disambiguation" in a)).sort((a, r) => a.index - r.index).map(
      (a) => new ds(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => (mw.cx.eventlogging.stats.articleSearchFailed(), []));
}, gs = {
  fetchPages: IS,
  fetchLanguageTitles: RS,
  fetchPageContent: jS,
  fetchNearbyPages: qS,
  searchPagesByTitlePrefix: GS,
  fetchLanguageLinksForLanguage: OS
}, WS = window.Vuex.useStore, ro = () => {
  const e = WS();
  return (t, n) => {
    n = n.filter(
      (a) => !!a && !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const r = n.slice(a, a + o), l = gs.fetchPages(t, r).then(
        (c) => c.forEach(
          (u) => e.commit("mediawiki/addPage", u)
        )
      );
      s.push(l);
    }
    return Promise.all(s);
  };
}, XS = window.Vuex.useStore, Dr = () => {
  const e = XS(), {
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
  ), u = (g, m, p) => {
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
], KS = [
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
], YS = [
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
], QS = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], JS = [
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
], ZS = {
  en: Uf,
  es: KS,
  bn: YS,
  fr: QS,
  de: JS
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
let ti = null;
const zf = (e) => {
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
  }), o = t + "?" + n;
  return fetch(o).then((s) => s.json()).then((s) => (ti = s.query.globaluserinfo.editcount, ti)).catch((s) => {
    mw.log.error("Error while fetching global edit count for user. ", s);
  });
}, ey = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits", ty = () => b(void 0, null, function* () {
  if (mw.user.isAnon())
    return !1;
  const e = mw.user.getName();
  return (yield zf(e)) < 100;
}), We = {
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
}, jf = (e, t) => !e || e < 0 ? We.unknown : e < t.easy ? We.stub : e < t.medium ? We.easy : e < t.hard ? We.medium : We.hard, Hf = (e) => jf(e, Of), Ku = (e) => jf(e, bu), ny = (e) => {
  if (!e)
    return !1;
  const t = Hf(e);
  return t === We.stub || t === We.easy;
}, oy = (e) => {
  if (!e)
    return !1;
  const t = Ku(e);
  return t === We.stub || t === We.easy;
}, qf = (e) => e ? Ku(e) === We.easy : !1;
class Gf {
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
const sy = Uf, ln = 6, ay = (e, t) => b(void 0, null, function* () {
  if (yield ty()) {
    let o;
    e ? e === "/sections" && (o = bu) : (o = Of, qt || (t.lead_section = !0, o = bu)), o && (t.min_size = o[We.easy], t.max_size = o[We.medium] - 1);
  } else
    !qt && e !== "/sections" && (t.lead_section = !0);
}), Et = (n) => b(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
  let o = mw.config.get("wgRecommendToolAPIURL");
  yield ay(e, t), e && (o += e);
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
    ), mw.errorLogger.logError(a, "error.contenttranslation"), mw.cx.eventlogging.stats.recommendationFailed(), null;
  }
});
function iy() {
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
function ry(e, t, n, o) {
  const s = {
    collection: e
  };
  return t && t.length ? s.qids = t.join("|") : n && o && o.length && (s.language = n, s.titles = o.join("|")), Et({
    urlPostfix: "/page-collection-membership",
    urlParams: s
  });
}
function ly(e) {
  const n = Q.getApi(e).get({
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
        a ? new Gf(
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
function cy(s, a) {
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
const uy = (e, t) => b(void 0, null, function* () {
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
}), dy = (e, t) => b(void 0, null, function* () {
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
}), gy = (l) => b(void 0, [l], function* ({
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
      (d) => new If({
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
}), my = (l) => b(void 0, [l], function* ({
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
function py(e, t, n) {
  return b(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = Q.getCXServerUrl(
      `/suggest/sections/${o.join("/")}?include_section_sizes=true`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new on(a) : null;
  });
}
function hy(e, t, n = null) {
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
function fy(a) {
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
function wy(a) {
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
function vy(a) {
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
function _y(a) {
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
function Sy(e) {
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
    }, n = Q.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function yy(e, t) {
  return b(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = Q.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function Cy(e) {
  const t = sy.map((o) => encodeURIComponent(o)).join("|"), n = Q.getCXServerUrl(
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
const xy = (e, t, n) => {
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
}, by = (e) => {
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
}, ky = () => {
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
  fetchFavorites: ky,
  fetchPageSuggestions: cy,
  fetchSectionSuggestion: py,
  fetchSectionSuggestions: hy,
  fetchAppendixTargetSectionTitles: Cy,
  fetchArticleSections: yy,
  markFavorite: xy,
  unmarkFavorite: by,
  fetchUserEdits: Sy,
  fetchMostPopularPageSuggestions: uy,
  fetchMostPopularSectionSuggestions: dy,
  fetchPageSuggestionsByTopics: fy,
  fetchSectionSuggestionsByTopics: wy,
  fetchPageSuggestionsByCountries: vy,
  fetchSectionSuggestionsByCountries: _y,
  fetchPageCollectionGroups: iy,
  fetchPageSuggestionsByCollections: gy,
  fetchSectionSuggestionsByCollections: my,
  fetchFeaturedCollectionDataByLanguage: ly,
  fetchPageCollectionMembership: ry
}, $y = window.Vuex.useStore, ms = () => {
  const e = $y(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), o = (l) => {
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
function Vy(e) {
  const t = [...e];
  for (let n = t.length - 1; n > 0; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [t[n], t[o]] = [t[o], t[n]];
  }
  return t;
}
class Ey {
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
    this.seeds = Vy(t);
  }
}
const Ly = window.Vuex.useStore, Ty = window.Vue.computed, Yu = window.Vue.ref, Ay = Yu([]), Dy = Yu([]), cl = [], ul = [], Yd = [], Qd = Yu({});
let xs = null;
const dl = {
  page: Ay,
  section: Dy
}, Wf = () => {
  const e = Ly(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), o = Ty(
    () => Qd.value[t.value] || []
  ), s = () => b(void 0, null, function* () {
    ul.includes(t.value) || (Qd.value[t.value] = yield ge.fetchUserEdits(t.value).then((d) => (ul.push(t.value), d)));
  }), a = () => b(void 0, null, function* () {
    let i = e.getters["translator/getTranslationsByStatus"]("published");
    i = i.filter(
      (p) => p.sourceLanguage === t.value
    );
    const d = cl.includes(i);
    if (i.length && !d)
      return cl.push(t.value), i.map(
        (p) => p.sourceTitle
      );
    if (cl.push(t.value), !ul.includes(t.value) && (yield s(), o.value.length > 0))
      return o.value;
    if (!Yd.includes(n.value)) {
      const h = (yield ge.fetchUserEdits(n.value).then((f) => (Yd.push(n.value), f))).slice(0, 20);
      if (h.length)
        return gs.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          h
        );
    }
    return null;
  }), r = (i) => {
    let d = dl[i].value.find(
      (g) => g.matchesLanguagePair(t.value, n.value)
    );
    return d || (d = new Ey({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), dl[i].value.push(d)), d;
  }, l = () => b(void 0, null, function* () {
    let i = !1, d = [];
    do {
      d = yield a(), d || (i = !0);
      for (const g in dl) {
        const m = r(g);
        m.setSeeds([
          ...m.seeds,
          ...d || []
        ]);
      }
    } while (!i && !(d != null && d.length));
  }), c = () => xs || (xs = l(), xs.finally(() => {
    xs = null;
  }));
  return {
    getSuggestionSeed: (i) => b(void 0, null, function* () {
      let d = r(i);
      return d.seeds.length || (yield c()), d.shiftSeeds();
    }),
    fetchPreviousEditsInSource: s,
    previousEditsInSource: o
  };
}, Py = 5;
function Vo(e) {
  return b(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < Py);
  });
}
const By = window.Vuex.useStore, Fy = () => {
  const e = By(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), { getSuggestionSeed: o } = Wf(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ms(), l = {
    id: an,
    type: Ge
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const d = [];
      return yield Vo(() => b(void 0, null, function* () {
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
        return p = p.slice(0, i), d.push(...p), h.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), d.length >= i;
      })), d.forEach(
        (g) => g.suggestionProvider = l
      ), d;
    })
  };
}, Qu = window.Vue.ref, bs = "ungrouped", Jd = Qu({}), Zd = Qu({}), eg = Qu(!1);
let gl = null;
const Pr = () => {
  const e = () => b(void 0, null, function* () {
    try {
      const n = yield ge.fetchPageCollectionGroups(), o = Object.fromEntries(
        Object.keys(n).sort((s, a) => s === bs ? 1 : a === bs ? -1 : s.localeCompare(a)).map((s) => [s, n[s]])
      );
      o[bs] && (o[bs] = o[bs].sort(
        (s, a) => s.name.localeCompare(a.name)
      )), Jd.value = o, Zd.value = Object.values(n).flat(), eg.value = !0;
    } catch (n) {
      mw.log.error("Failed to fetch page collections", n);
    }
  });
  return {
    fetchPageCollectionGroups: () => (gl || (gl = e()), gl),
    pageCollectionGroupsFetched: eg,
    pageCollectionGroups: Jd,
    pageCollections: Zd
  };
}, ml = window.Vue.computed, Br = window.Vue.ref, Ny = window.Vue.watch, My = new mw.cx.SiteMapper(), yr = My.getCurrentWikiLanguageCode(), Uy = mw.config.get(
  "wgContentTranslationFeaturedCollection"
), Iy = mw.config.get(
  "wgContentTranslationFeaturedCollectionCommunityName"
), Ry = mw.config.get(
  "wgContentTranslationFeaturedCollectionDescription"
), zy = mw.config.get(
  "wgContentTranslationFeaturedCollectionLink"
), Xf = Br({
  [yr]: new Gf(
    Uy,
    Ry,
    Iy,
    zy,
    yr
  )
}), ku = Br({
  [yr]: Promise.resolve()
}), $u = Br({
  [yr]: !0
});
let tg = !1;
const ng = (e) => {
  if (!e || ku.value[e])
    return;
  const t = ge.fetchFeaturedCollectionDataByLanguage(e).then((n) => {
    n && (Xf.value[e] = n), $u.value[e] = !0;
  }).catch((n) => {
    $u.value[e] = !0, console.error("Failed to fetch featured collection:", n);
  });
  ku.value[e] = t;
}, Oy = (e, t) => !e || !Array.isArray(t) ? !1 : t.some(
  (n) => n.name.toLowerCase() === e.toLowerCase()
), Wt = (e = void 0) => {
  const { pageCollections: t, fetchPageCollectionGroups: n } = Pr();
  let o;
  if (e)
    o = Br(e), e && ng(e);
  else {
    const { targetLanguageURLParameter: l } = P();
    o = l, tg || (Ny(
      o,
      (c) => {
        c && ng(c);
      },
      { immediate: !0 }
    ), tg = !0);
  }
  const s = ml(() => {
    const l = o.value, c = Xf.value[l];
    return c != null && c.name && Oy(c.name, t.value) ? c : null;
  }), a = ml(
    () => $u.value[o.value] || !1
  ), r = ml(
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
}, jy = window.Vuex.useStore, Hy = window.Vue.computed, Fr = window.Vue.ref, og = Fr({}), sg = Fr({}), ag = Fr({}), ig = Fr({}), rg = (e, t) => e && t.value[e] || null, lg = (e, t) => e ? t.value[e] ? t.value[e] === -1 ? -1 : t.value[e] + 1 : 0 : null, Ju = () => {
  const e = jy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), s = Hy(() => {
    var f;
    return ((f = o.value) == null ? void 0 : f.type) !== te ? null : o.value.id;
  }), { featuredCollection: a, featuredCollectionPromise: r } = Wt(), {
    isSectionSuggestionValid: l,
    isPageSuggestionValid: c,
    sectionSuggestionExists: u
  } = ms(), i = (f = null) => f ? { id: f, type: te } : o.value, d = (f) => b(void 0, null, function* () {
    var E;
    let w = null, v = null, x = null;
    if (!f)
      yield r.value, w = ((E = a.value) == null ? void 0 : E.name) || null;
    else if (v = lg(f, sg), x = rg(f, og), v === -1)
      return [];
    const y = [], _ = yield ge.fetchPageSuggestionsByCollections({
      sourceLanguage: t.value,
      targetLanguage: n.value,
      featuredCollection: w,
      continueOffset: v,
      continueSeed: x,
      collectionName: f
    });
    _.continue_offset && (sg.value[f] = _.continue_offset), _.continue_seed && (og.value[f] = _.continue_seed);
    const V = _.recommendations.filter(
      (N) => c(N)
    );
    return y.push(...V), y.forEach((N) => {
      N.suggestionProvider = i(f);
    }), y;
  }), g = () => d(s.value), m = () => b(void 0, null, function* () {
    var w;
    (yield d(
      ((w = a.value) == null ? void 0 : w.name) || null
    )).forEach(
      (v) => e.commit("suggestions/addPageSuggestion", v)
    );
  }), p = (f) => b(void 0, null, function* () {
    var N;
    let w = null, v = null, x = null;
    if (!f)
      yield r.value, w = ((N = a.value) == null ? void 0 : N.name) || null;
    else if (v = lg(
      f,
      ig
    ), x = rg(f, ag), v === -1)
      return [];
    yield r.value;
    const y = [], _ = yield ge.fetchSectionSuggestionsByCollections({
      sourceLanguage: t.value,
      targetLanguage: n.value,
      featuredCollection: w,
      continueOffset: v,
      continueSeed: x,
      collectionName: f
    });
    _.continue_offset && (ig.value[f] = _.continue_offset), _.continue_seed && (ag.value[f] = _.continue_seed);
    const V = _.recommendations.filter(
      (C) => l(C)
    ), E = _.recommendations.filter(
      (C) => !l(C)
    );
    return y.push(...V), E.forEach((C) => {
      C && !u(C) && (C.isListable = !1, e.commit("suggestions/addSectionSuggestion", C));
    }), y.forEach((C) => {
      C.suggestionProvider = i(f);
    }), y;
  });
  return {
    fetchSectionSuggestionsByCollections: () => p(s.value),
    fetchPageSuggestionsByCollections: g,
    fetchPageSuggestionsByFeaturedCollections: m,
    doFetchPageSuggestionsByCollection: d,
    doFetchSectionSuggestionsByCollection: p
  };
}, qy = window.Vuex.useStore, Gy = () => {
  const e = qy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), o = {
    id: rn,
    type: Ge
  }, {
    getNextUnseenSectionSuggestionByCollection: s,
    getNextUnseenPageSuggestionByCollection: a
  } = Dr(), {
    isSectionSuggestionValid: r,
    isPageSuggestionValid: l,
    sectionSuggestionExists: c
  } = ms(), { featuredCollection: u, featuredCollectionPromise: i } = Wt(), {
    doFetchPageSuggestionsByCollection: d,
    doFetchSectionSuggestionsByCollection: g
  } = Ju(), m = (f, w, v, x, y) => b(void 0, null, function* () {
    var V;
    yield i.value;
    const _ = (V = u.value) == null ? void 0 : V.name;
    if (_) {
      let E = w(_);
      if (!E) {
        const [N = null, ...C] = yield f(_);
        E = N, C.forEach((D) => {
          e.commit(v, D);
        });
      }
      E && (x.push(E), y--);
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
      let x = v.filter(
        (_) => r(_)
      );
      const y = v.filter(
        (_) => !r(_)
      );
      return x = x.slice(0, f), w.push(...x), y.forEach((_) => {
        _ && !c(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
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
    ), yield Vo(() => b(void 0, null, function* () {
      let v = yield ge.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return v = v.filter(
        (x) => l(x)
      ), v = v.slice(0, f), w.push(...v), w.length >= f;
    })), w.forEach(
      (v) => v.suggestionProvider = o
    ), w;
  }) };
};
class xa {
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
const Wy = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', Xy = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', Ky = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', Yy = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', Qy = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', Jy = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', Zy = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', eC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', tC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', nC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', oC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', sC = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', aC = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', iC = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', rC = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', lC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', cC = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', uC = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', dC = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Kf = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', gC = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', mC = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', pC = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', hC = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', fC = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', wC = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', vC = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', _C = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', SC = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', yC = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', CC = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', xC = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', bC = '<g xmlns:xlink="http://www.w3.org/1999/xlink" transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', kC = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', $C = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', VC = '<circle cx="6" cy="6" r="3"/><circle cx="14" cy="6" r="3"/><path d="M14 10c3.31 0 6 1.79 6 4v2h-6v-2c0-1.48-1.21-2.77-3-3.46.88-.35 1.91-.54 3-.54m-8 0c3.31 0 6 1.79 6 4v2H0v-2c0-2.21 2.69-4 6-4"/>', Yf = Wy, EC = Xy, Qf = {
  ltr: Ky,
  shouldFlip: !0
}, Jf = {
  ltr: Yy,
  shouldFlip: !0
}, Zu = {
  ltr: Qy,
  shouldFlip: !0
}, Zf = Jy, ew = Zy, tw = eC, LC = tC, TC = nC, ps = oC, AC = sC, ed = aC, td = iC, Vu = rC, DC = lC, PC = {
  ltr: cC,
  shouldFlip: !0
}, BC = {
  ltr: uC,
  shouldFlip: !0
}, FC = dC, NC = {
  langCodeMap: {
    ar: Kf
  },
  default: gC
}, MC = {
  langCodeMap: {
    ar: Kf
  },
  default: mC
}, nw = pC, Na = {
  ltr: hC,
  shouldFlip: !0
}, UC = fC, IC = wC, hs = {
  ltr: vC,
  shouldFlip: !0
}, nd = {
  ltr: _C,
  shouldFlip: !0
}, RC = {
  ltr: SC,
  shouldFlip: !0
}, ow = yC, zC = CC, Eu = xC, OC = bC, jC = kC, sw = $C, od = {
  ltr: VC,
  shouldFlip: !0
}, HC = {
  [an]: sw,
  [rn]: FC,
  [te]: Zu
}, qC = {
  [te]: BC,
  [Be]: UC
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
    return this.type === Ge ? this.id : this.type;
  }
  get icon() {
    return HC[this.provider] || null;
  }
  get expandableIcon() {
    return qC[this.provider] || this.icon;
  }
}
const ks = window.Vue.computed, { topics: cg, regions: ug } = mw.loader.require(
  "ext.cx.articlefilters"
), GC = (e) => new xa({
  id: e.groupId,
  label: e.label,
  type: et,
  filters: e.topics.map(
    (t) => new bt({
      id: t.topicId,
      label: t.label,
      type: et
    })
  )
}), lo = () => {
  const e = fe(), { currentSuggestionFilters: t, setFilterURLParams: n } = P(), { featuredCollection: o, featuredCollectionFetched: s } = Wt(), {
    validateFilters: a,
    filtersValidatorError: r,
    isDefaultFilter: l,
    isPopularFilter: c,
    isEqualFilter: u
  } = zu(), i = new bt({
    id: an,
    type: Ge,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), d = new bt({
    id: rn,
    type: Ge,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), g = new bt({
    id: te,
    type: Ge,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollections: m, pageCollectionGroups: p, pageCollectionGroupsFetched: h } = Pr(), f = ks(() => {
    const B = new xa({
      id: Ge,
      type: Ge,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [i, d]
    });
    return Object.keys(p.value).length > 1 && B.filters.push(g), B;
  }), w = () => {
    const B = me({}, p.value);
    delete B.ungrouped;
    const z = [];
    for (const J in B) {
      const $e = B[J].map(
        (_e) => new bt({
          id: _e.name,
          label: _e.name,
          type: te
        })
      ), xe = new bt({
        id: J,
        label: J,
        type: te,
        subFilters: $e
      });
      z.push(xe);
    }
    const K = (p.value.ungrouped || []).map(
      (J) => new bt({
        id: J.name,
        label: J.name,
        type: te
      })
    );
    return [...z, ...K];
  }, v = ks(
    () => new xa({
      id: te,
      type: te,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: w()
    })
  ), x = new xa({
    id: Be,
    type: Be,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: ug.map(
      (B) => new bt({
        id: B.id,
        label: B.label,
        type: Be,
        subFilters: B.countries.map(
          (z) => new bt({
            id: z.id,
            label: z.label,
            type: Be
          })
        )
      })
    )
  }), y = ks(() => {
    const B = [
      f.value,
      ...cg.map(GC),
      x
    ];
    return v.value.filters.length && B.splice(1, 0, v.value), B;
  }), _ = ks(
    () => !h.value || !s.value
  ), V = ks(
    () => {
      var B, z;
      return new bt({
        id: (B = o.value) == null ? void 0 : B.name,
        label: (z = o.value) == null ? void 0 : z.name,
        type: te
      });
    }
  ), E = () => {
    if (_.value)
      return [];
    const B = C(), z = [];
    return o.value && z.push(V.value), !l(B) && !c(B) && !u(B, V.value) && z.push(B), z.push(i, d), z;
  }, N = (B) => {
    n(B.type, B.id);
  }, C = () => t.value.type === Gt ? new bt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : y.value.flatMap((B) => B.filters).flatMap((B) => [B, ...B.subFilters || []]).find(D), D = (B) => u(B, t.value);
  return {
    allFilters: y,
    getFiltersSummary: E,
    selectFilter: N,
    isFilterSelected: D,
    getArticleTopics: (B) => {
      const K = cg.flatMap((J) => J.topics).find((J) => J.topicId === B);
      return K ? K.articletopics : [];
    },
    waitingForPageCollectionsFetch: _,
    findSelectedFilter: C,
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
      const z = ug.find((K) => K.id === B);
      return z ? z.countries.map((K) => K.id) : [B];
    },
    setFeaturedCollectionFilterIfNeeded: () => {
      if (!l(t.value))
        return;
      const B = a(
        V.value,
        m.value
      );
      N(B);
    },
    isFilteringByFeaturedCollection: () => {
      var z;
      const B = C();
      return (B == null ? void 0 : B.id) === ((z = o.value) == null ? void 0 : z.name);
    }
  };
}, WC = window.Vuex.useStore, XC = () => {
  const e = WC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ms(), { getArticleTopics: l } = lo(), { featuredCollection: c, featuredCollectionPromise: u } = Wt();
  return {
    fetchPageSuggestionsByTopics: (g) => b(void 0, null, function* () {
      var w;
      yield u.value;
      const m = o.value.id, p = {
        id: m,
        type: et
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
        type: et
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
        const x = w.filter(
          (_) => !s(_)
        );
        return v = v.slice(0, g), f.push(...v), x.forEach((_) => {
          _ && !r(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
        }), f.length >= g;
      })), f.forEach(
        (w) => w.suggestionProvider = p
      ), f;
    })
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
  } = ms(), { getCountries: l } = lo(), { featuredCollection: c, featuredCollectionPromise: u } = Wt();
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
}, QC = window.Vuex.useStore, JC = () => {
  const e = QC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = ms();
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
          type: Gt
        }
      ), d;
    }),
    fetchSectionSuggestionsBySeed: (u) => b(void 0, null, function* () {
      const i = [], d = o.value.id;
      return yield Vo(() => b(void 0, null, function* () {
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
          type: Gt
        }
      ), i;
    })
  };
}, ZC = () => {
  const { currentSuggestionFilters: e } = P(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = Fy(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = Gy(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = XC(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: c
  } = YC(), {
    fetchPageSuggestionsByCollections: u,
    fetchSectionSuggestionsByCollections: i
  } = Ju(), { fetchPageSuggestionsBySeed: d, fetchSectionSuggestionsBySeed: g } = JC(), m = {
    [an]: t,
    [rn]: o,
    [te]: u,
    [et]: a,
    [Be]: l,
    [Gt]: d
  }, p = {
    [an]: n,
    [rn]: s,
    [te]: i,
    [et]: r,
    [Be]: c,
    [Gt]: g
  }, h = (v) => v.type === Ge ? v.id : v.type;
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
}, Nr = () => {
  const { inFeaturedCollection: e } = sd(), t = (s) => {
    const a = {}, r = {};
    for (const l of s) {
      const { featuredCollection: c, featuredCollectionPromise: u } = Wt(l);
      a[l] = c, r[l] = u.value;
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
          (x) => x.sourceLanguage
        );
        for (const x in v) {
          const y = v[x], _ = y.map((E) => r(E)), V = e(
            null,
            x,
            _,
            w.value.name
          );
          d.push({ promise: V, items: y });
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
}, ex = window.Vuex.useStore, ad = () => {
  const e = ex(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Dr(), o = ro(), { addFeaturedCollectionFlag: s } = Nr(), { isFilteringByFeaturedCollection: a } = lo(), r = () => {
    const m = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - m.length % p;
  }, l = () => {
    const m = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - m.length % p;
  }, {
    getCurrentPageSuggestionProvider: c,
    getCurrentSectionSuggestionProvider: u
  } = ZC(), i = (m) => {
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
      const m = r(), h = yield u()(
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
}, tx = window.Vuex.useStore, aw = () => {
  const e = tx();
  return (t) => b(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ge.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, nx = window.Vuex.useStore, iw = () => {
  const e = nx(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = ad(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Dr(), { targetLanguageURLParameter: a } = P(), r = aw();
  return () => b(void 0, null, function* () {
    const l = s(0), c = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, i = l.length === u, d = c.length === u;
    i && d || (yield r(a.value), t(), n());
  });
}, ox = window.Vuex.useStore, sx = window.Vue.ref, pl = /* @__PURE__ */ new Map(), dg = sx([]), Ma = () => {
  const e = ox(), t = ro();
  return { loadSuggestion: (s, a, r) => {
    const l = `${s}:${a}:${r}`;
    if (pl.has(l))
      return pl.get(l);
    const u = (() => b(void 0, null, function* () {
      const i = yield ge.fetchSectionSuggestion(
        s,
        r,
        a
      );
      try {
        yield t(s, [r]);
        const d = e.getters["mediawiki/getPage"](
          s,
          r
        );
        if (!d)
          throw new Error("No page fetched");
        if (!i)
          return new oo({
            sourceLanguage: s,
            targetLanguage: a,
            sourceTitle: r,
            langLinksCount: d.langLinksCount,
            size: d.articleSize,
            wikidataId: d.wikidataId
          });
      } catch (d) {
        const g = new Error(
          `No page metadata found for title ${r} and language pair ${s}-${a}. ${d}`
        );
        throw mw.errorLogger.logError(g, "error.contenttranslation"), g;
      }
      return dg.value.push(i), i;
    }))();
    return pl.set(l, u), u;
  }, getLoadedSuggestion: (s, a, r) => dg.value.find(
    (l) => l.sourceLanguage === s && l.targetLanguage === a && l.sourceTitle === r
  ) || null };
}, gg = window.Vue.computed, ax = window.Vuex.useStore, cn = () => {
  const e = ax(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = P(), s = gg(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = gg(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, c) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(c)
  };
}, rw = window.Vuex.useStore, { setLanguageURLParams: ix } = P(), id = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), ix(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, lw = () => {
  const e = rw(), t = iw();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = tt(e);
    n === o && (n = a.value, o = s.value), id(e, n, o), t();
  };
}, rx = () => {
  const e = rw(), { loadSuggestion: t } = Ma(), { currentLanguageTitleGroup: n, targetPageExists: o } = cn(), s = ro();
  return (a, r) => b(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      setPageURLParam: u,
      clearSectionURLParameter: i
    } = P();
    a === r && (a = c.value, r = l.value);
    const d = n.value.getTitleForLanguage(a);
    id(e, a, r), u(d), o.value ? (i(), yield t(
      l.value,
      c.value,
      d
    )) : yield s(l.value, [d]);
  });
}, lx = window.Vuex.useStore, cx = window.Vue.ref, mg = cx(!1), cw = () => {
  const e = lx(), { supportedLanguageCodes: t, fetchSupportedLanguageCodes: n } = Pa(), { sourceLanguageURLParameter: o, targetLanguageURLParameter: s } = P(), a = () => {
    const l = Q.getCurrentWikiLanguageCode(), c = (p) => t.value.includes(p), u = {
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
    id(e, l, c), mg.value = !0;
  }), applicationLanguagesInitialized: mg };
};
const ux = window.Vue.resolveDynamicComponent, pg = window.Vue.openBlock, hg = window.Vue.createBlock, dx = window.Vue.Transition, $s = window.Vue.withCtx, Vs = window.Vue.createVNode, gx = window.Vue.resolveComponent, hl = window.Vue.unref, mx = window.Vuex.useStore, fg = window.Vue.computed, px = window.Vue.onMounted, hx = window.Vue.inject, fx = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = P(), { initializeApplicationLanguages: n } = cw();
    t(), n();
    const o = hx("breakpoints"), s = fg(() => o.value.mobile), a = mx(), r = fg(
      () => a.state.application.autoSavePending
    );
    return px(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && yf.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((c) => {
          c instanceof us && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, c) => {
      const u = gx("router-view");
      return pg(), hg(hl(y0), { id: "contenttranslation" }, {
        default: $s(() => [
          Vs(hl(I), { class: "cx-container" }, {
            default: $s(() => [
              Vs(hl(k), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: $s(() => [
                  Vs(u, null, {
                    default: $s(({ Component: i, route: d }) => [
                      Vs(dx, {
                        name: s.value ? d.meta.transitionName : ""
                      }, {
                        default: $s(() => [
                          (pg(), hg(ux(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Vs(B1)
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
}, wx = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, vx = {
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
const wg = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Ke(me({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class _x {
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
    const t = wg((s = this.user) == null ? void 0 : s.content), n = wg((a = this.mt) == null ? void 0 : a.content);
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
const Mr = mw.user.isAnon() ? void 0 : "user", dw = (e) => {
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
        (c) => new $r(Ke(me({}, c), { status: e }))
      ) : r = a.map(
        (c) => new rd(Ke(me({}, c), { status: e }))
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
function Sx(e) {
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
      (a) => new _x(a)
    );
  });
}
function yx(e, t, n, o, s) {
  return b(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== le.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = Q.getCXServerUrl(a);
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
const Cx = (e, t, n) => {
  const o = Q.getApi(t);
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
}, xx = ({
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
    assert: Mr,
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
}, bx = ({
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
    assert: Mr,
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
    dw(m);
    let h;
    return p.exception ? (h = p.exception.message, mw.cx.eventlogging.stats.saveFailure(!0)) : p.error ? (h = p.error.info, p.error.code && p.error.code.indexOf("internal_api_error") === 0 && mw.cx.eventlogging.stats.saveFailure(!0)) : (h = "Unknown error", mw.cx.eventlogging.stats.saveFailure(!0)), new so({ text: h, status: "error" });
  });
}, kx = (e) => {
  const t = {
    assert: Mr,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, $x = () => {
  const e = {
    assert: Mr,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new rd(n.cxcheckunreviewed.translation)
  );
}, Vx = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, Ex = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, Lx = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), $t = {
  fetchTranslations: gw,
  fetchTranslationUnits: Sx,
  fetchSegmentTranslation: yx,
  parseTemplateWikitext: Cx,
  publishTranslation: xx,
  saveTranslation: bx,
  deleteTranslation: Vx,
  fetchTranslatorStats: Lx,
  deleteCXTranslation: Ex,
  splitTranslation: kx,
  checkUnreviewedTranslations: $x
};
function Tx(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield $t.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const Ax = {
  fetchTranslatorStats: Tx
}, Dx = {
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
}, Px = {
  namespaced: !0,
  state: wx,
  getters: vx,
  actions: Ax,
  mutations: Dx
}, Bx = {
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
  appendixSectionTitles: ZS
}, Fx = {
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
}, Nx = {
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
}, Mx = {
  namespaced: !0,
  state: Bx,
  getters: Fx,
  actions: {},
  mutations: Nx
}, Ux = {
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
}, Ix = {
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
function Rx(o) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield gs.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const zx = { fetchNearbyPages: Rx }, Ox = {
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
}, jx = {
  namespaced: !0,
  state: Ux,
  getters: Ix,
  actions: zx,
  mutations: Ox
}, Hx = {
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
}, qx = {
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
}, Gx = {
  namespaced: !0,
  state: Hx,
  mutations: qx
}, Wx = window.Vuex.createStore, Xx = Wx({
  modules: { translator: Px, suggestions: Mx, mediawiki: jx, application: Gx }
});
function Kx() {
  return pw().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function pw() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Yx = typeof Proxy == "function", Qx = "devtools-plugin:setup", Jx = "plugin:settings:set";
let Po, Lu;
function Zx() {
  var e;
  return Po !== void 0 || (typeof window != "undefined" && window.performance ? (Po = !0, Lu = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Po = !0, Lu = global.perf_hooks.performance) : Po = !1), Po;
}
function eb() {
  return Zx() ? Lu.now() : Date.now();
}
class tb {
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
        return eb();
      }
    }, n && n.on(Jx, (r, l) => {
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
function nb(e, t) {
  const n = e, o = pw(), s = Kx(), a = Yx && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Qx, e, t);
  else {
    const r = a ? new tb(n, s) : null;
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
const nn = window.Vue.computed, ba = window.Vue.unref, ob = window.Vue.watchEffect, fw = window.Vue.defineComponent, sb = window.Vue.reactive, ww = window.Vue.h, fl = window.Vue.provide, ab = window.Vue.ref, vw = window.Vue.watch, ib = window.Vue.shallowRef, rb = window.Vue.shallowReactive, lb = window.Vue.nextTick, Dn = typeof window != "undefined";
function cb(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const oe = Object.assign;
function wl(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = pt(s) ? s.map(e) : e(s);
  }
  return n;
}
const ka = () => {
}, pt = Array.isArray;
function Y(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const ub = /\/$/, db = (e) => e.replace(ub, "");
function vl(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return l < c && l >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), a = t.slice(c + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = pb(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function gb(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function vg(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function _g(e, t, n) {
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
    if (!mb(e[n], t[n]))
      return !1;
  return !0;
}
function mb(e, t) {
  return pt(e) ? Sg(e, t) : pt(t) ? Sg(t, e) : e === t;
}
function Sg(e, t) {
  return pt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function pb(e, t) {
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
var Ea;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ea || (Ea = {}));
var $a;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})($a || ($a = {}));
function hb(e) {
  if (!e)
    if (Dn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), db(e);
}
const fb = /^[^#]+#/;
function wb(e, t) {
  return e.replace(fb, "#") + t;
}
function vb(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Ur = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function _b(e) {
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
    t = vb(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function yg(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Tu = /* @__PURE__ */ new Map();
function Sb(e, t) {
  Tu.set(e, t);
}
function yb(e) {
  const t = Tu.get(e);
  return Tu.delete(e), t;
}
let Cb = () => location.protocol + "//" + location.host;
function Sw(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), vg(c, "");
  }
  return vg(n, e) + o + s;
}
function xb(e, t, n, o) {
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
        type: Ea.pop,
        direction: f ? f > 0 ? $a.forward : $a.back : $a.unknown
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
    g.state && g.replaceState(oe({}, g.state, { scroll: Ur() }), "");
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
function Cg(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Ur() : null
  };
}
function bb(e) {
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
  function a(c, u, i) {
    const d = e.indexOf("#"), g = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : Cb() + e + c;
    try {
      t[i ? "replaceState" : "pushState"](u, "", g), s.value = u;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? Y("Error with push/replace State", m) : console.error(m), n[i ? "replace" : "assign"](g);
    }
  }
  function r(c, u) {
    const i = oe({}, t.state, Cg(
      s.value.back,
      // keep back and forward entries but override current position
      c,
      s.value.forward,
      !0
    ), u, { position: s.value.position });
    a(c, i, !0), o.value = c;
  }
  function l(c, u) {
    const i = oe(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: c,
        scroll: Ur()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && Y(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const d = oe({}, Cg(o.value, c, null), { position: i.position + 1 }, u);
    a(c, d, !1), o.value = c;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function kb(e) {
  e = hb(e);
  const t = bb(e), n = xb(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = oe({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: wb.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function $b(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Y(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), kb(e);
}
function Vb(e) {
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
var xg;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(xg || (xg = {}));
const Eb = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Tb(t)}" via a navigation guard.`;
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
  return {}.NODE_ENV !== "production" ? oe(new Error(Eb[e](t)), {
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
const Lb = ["params", "query", "hash"];
function Tb(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Lb)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const bg = "[^/]+?", Ab = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Db = /[.+*?^${}()[\]/\\]/g;
function Pb(e, t) {
  const n = oe({}, Ab, t), o = [];
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
        d || (s += "/"), s += g.value.replace(Db, "\\$&"), m += 40;
      else if (g.type === 1) {
        const { value: p, repeatable: h, optional: f, regexp: w } = g;
        a.push({
          name: p,
          repeatable: h,
          optional: f
        });
        const v = w || bg;
        if (v !== bg) {
          m += 10;
          try {
            new RegExp(`(${v})`);
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${v}): ` + y.message);
          }
        }
        let x = h ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        d || (x = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && u.length < 2 ? `(?:/${x})` : "/" + x), f && (x += "?"), s += x, m += 20, f && (m += -8), h && (m += -20), v === ".*" && (m += -50);
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
function Bb(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Fb(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = Bb(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (kg(o))
      return 1;
    if (kg(s))
      return -1;
  }
  return s.length - o.length;
}
function kg(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Nb = {
  type: 0,
  value: ""
}, Mb = /[a-zA-Z0-9_]/;
function Ub(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Nb]];
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
        c === "(" ? n = 2 : Mb.test(c) ? g() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
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
function Ib(e, t, n) {
  const o = Pb(Ub(e.path), n);
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
function Rb(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Eg({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, d, g) {
    const m = !g, p = zb(i);
    ({}).NODE_ENV !== "production" && qb(p, d), p.aliasOf = g && g.record;
    const h = Eg(t, i), f = [
      p
    ];
    if ("alias" in i) {
      const x = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const y of x)
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
    for (const x of f) {
      const { path: y } = x;
      if (d && y[0] !== "/") {
        const _ = d.record.path, V = _[_.length - 1] === "/" ? "" : "/";
        x.path = d.record.path + (y && V + y);
      }
      if ({}.NODE_ENV !== "production" && x.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (w = Ib(x, d, h), {}.NODE_ENV !== "production" && d && y[0] === "/" && Gb(w, d), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && Hb(g, w)) : (v = v || w, v !== w && v.alias.push(w), m && i.name && !Vg(w) && r(i.name)), p.children) {
        const _ = p.children;
        for (let V = 0; V < _.length; V++)
          a(_[V], w, g && g.children[V]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && c(w);
    }
    return v ? () => {
      r(v);
    } : ka;
  }
  function r(i) {
    if (yw(i)) {
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
    for (; d < n.length && Fb(i, n[d]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[d].record.path || !Cw(i, n[d])); )
      d++;
    n.splice(d, 0, i), i.record.name && !Vg(i) && o.set(i.record.name, i);
  }
  function u(i, d) {
    let g, m = {}, p, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw cs(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const v = Object.keys(i.params || {}).filter((x) => !g.keys.find((y) => y.name === x));
        v.length && Y(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, m = oe(
        // paramsFromLocation is a new object
        $g(
          d.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((v) => !v.optional).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && $g(i.params, g.keys.map((v) => v.name))
      ), p = g.stringify(m);
    } else if ("path" in i)
      p = i.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && Y(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((v) => v.re.test(p)), g && (m = g.parse(p), h = g.record.name);
    else {
      if (g = d.name ? o.get(d.name) : n.find((v) => v.re.test(d.path)), !g)
        throw cs(1, {
          location: i,
          currentLocation: d
        });
      h = g.record.name, m = oe({}, d.params, i.params), p = g.stringify(m);
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
      meta: jb(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: u, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function $g(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function zb(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Ob(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Ob(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Vg(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function jb(e) {
  return e.reduce((t, n) => oe(t, n.meta), {});
}
function Eg(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Du(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Hb(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Du.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Du.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function qb(e, t) {
  t && t.record.name && !e.name && !e.path && Y(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Gb(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Du.bind(null, n)))
      return Y(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Cw(e, t) {
  return t.children.some((n) => n === e || Cw(e, n));
}
const xw = /#/g, Wb = /&/g, Xb = /\//g, Kb = /=/g, Yb = /\?/g, bw = /\+/g, Qb = /%5B/g, Jb = /%5D/g, kw = /%5E/g, Zb = /%60/g, $w = /%7B/g, ek = /%7C/g, Vw = /%7D/g, tk = /%20/g;
function ld(e) {
  return encodeURI("" + e).replace(ek, "|").replace(Qb, "[").replace(Jb, "]");
}
function nk(e) {
  return ld(e).replace($w, "{").replace(Vw, "}").replace(kw, "^");
}
function Pu(e) {
  return ld(e).replace(bw, "%2B").replace(tk, "+").replace(xw, "%23").replace(Wb, "%26").replace(Zb, "`").replace($w, "{").replace(Vw, "}").replace(kw, "^");
}
function ok(e) {
  return Pu(e).replace(Kb, "%3D");
}
function sk(e) {
  return ld(e).replace(xw, "%23").replace(Yb, "%3F");
}
function ak(e) {
  return e == null ? "" : sk(e).replace(Xb, "%2F");
}
function La(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && Y(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function ik(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(bw, " "), r = a.indexOf("="), l = La(r < 0 ? a : a.slice(0, r)), c = r < 0 ? null : La(a.slice(r + 1));
    if (l in t) {
      let u = t[l];
      pt(u) || (u = t[l] = [u]), u.push(c);
    } else
      t[l] = c;
  }
  return t;
}
function Lg(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = ok(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (pt(o) ? o.map((a) => a && Pu(a)) : [o && Pu(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function rk(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = pt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const lk = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Tg = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Ir = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Ew = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Bu = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
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
    const c = (d) => {
      d === !1 ? l(cs(4, {
        from: n,
        to: t
      })) : d instanceof Error ? l(d) : Vb(d) ? l(cs(2, {
        from: t,
        to: d
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof d == "function" && a.push(d), r());
    }, u = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? ck(c, t, n) : c);
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
function ck(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && Y(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function _l(e, t, n, o) {
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
        if (uk(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(to(u, n, o, a, r));
        } else {
          let c = l();
          ({}).NODE_ENV !== "production" && !("catch" in c) && (Y(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), s.push(() => c.then((u) => {
            if (!u)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = cb(u) ? u.default : u;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && to(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function uk(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ag(e) {
  const t = ls(Ir), n = ls(Ew), o = nn(() => t.resolve(ba(e.to))), s = nn(() => {
    const { matched: c } = o.value, { length: u } = c, i = c[u - 1], d = n.matched;
    if (!i || !d.length)
      return -1;
    const g = d.findIndex(ao.bind(null, i));
    if (g > -1)
      return g;
    const m = Dg(c[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Dg(i) === m && // avoid comparing the child with its parent
      d[d.length - 1].path !== m ? d.findIndex(ao.bind(null, c[u - 2])) : g
    );
  }), a = nn(() => s.value > -1 && pk(n.params, o.value.params)), r = nn(() => s.value > -1 && s.value === n.matched.length - 1 && _w(n.params, o.value.params));
  function l(c = {}) {
    return mk(c) ? t[ba(e.replace) ? "replace" : "push"](
      ba(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ka) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Dn) {
    const c = hw();
    if (c) {
      const u = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(u), ob(() => {
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
const dk = /* @__PURE__ */ fw({
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
  useLink: Ag,
  setup(e, { slots: t }) {
    const n = sb(Ag(e)), { options: o } = ls(Ir), s = nn(() => ({
      [Pg(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Pg(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
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
}), gk = dk;
function mk(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function pk(e, t) {
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
function Dg(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Pg = (e, t, n) => e != null ? e : t != null ? t : n, hk = /* @__PURE__ */ fw({
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
    ({}).NODE_ENV !== "production" && wk();
    const o = ls(Bu), s = nn(() => e.route || o.value), a = ls(Tg, 0), r = nn(() => {
      let u = ba(a);
      const { matched: i } = s.value;
      let d;
      for (; (d = i[u]) && !d.components; )
        u++;
      return u;
    }), l = nn(() => s.value.matched[r.value]);
    fl(Tg, nn(() => r.value + 1)), fl(lk, l), fl(Bu, s);
    const c = ab();
    return vw(() => [c.value, l.value, e.name], ([u, i, d], [g, m, p]) => {
      i && (i.instances[d] = u, m && m !== i && u && u === g && (i.leaveGuards.size || (i.leaveGuards = m.leaveGuards), i.updateGuards.size || (i.updateGuards = m.updateGuards))), u && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !ao(i, m) || !g) && (i.enterCallbacks[d] || []).forEach((h) => h(u));
    }, { flush: "post" }), () => {
      const u = s.value, i = e.name, d = l.value, g = d && d.components[i];
      if (!g)
        return Bg(n.default, { Component: g, route: u });
      const m = d.props[i], p = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null, f = ww(g, oe({}, p, t, {
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
        (pt(f.ref) ? f.ref.map((x) => x.i) : [f.ref.i]).forEach((x) => {
          x.__vrv_devtools = w;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Bg(n.default, { Component: f, route: u }) || f
      );
    };
  }
});
function Bg(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const fk = hk;
function wk() {
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
    matched: e.matched.map((o) => $k(o, ["instances", "children", "aliasOf"]))
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
function ni(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let vk = 0;
function _k(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = vk++;
  nb({
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
        value: Ls(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const g = d.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Lw
        });
      }
      pt(d.__vrl_devtools) && (d.__devtoolsApi = s, d.__vrl_devtools.forEach((g) => {
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
        guard: ni("beforeEach"),
        from: Ls(d, "Current Location during this navigation"),
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
    }), t.afterEach((i, d, g) => {
      const m = {
        guard: ni("afterEach")
      };
      g ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, m.status = ni("❌")) : m.status = ni("✅"), m.from = Ls(d, "Current Location during this navigation"), m.to = Ls(i, "Target location"), s.addTimelineEvent({
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
      d.forEach(Fw), i.filter && (d = d.filter((g) => (
        // save matches state based on the payload
        Fu(g, i.filter.toLowerCase())
      ))), d.forEach((g) => Bw(g, t.currentRoute.value)), i.rootNodes = d.map(Pw);
    }
    let u;
    s.on.getInspectorTree((i) => {
      u = i, i.app === e && i.inspectorId === l && c();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((m) => m.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: yk(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function Sk(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function yk(e) {
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
        display: e.keys.map((o) => `${o.name}${Sk(o)}`).join(" "),
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
const Lw = 15485081, Tw = 2450411, Aw = 8702998, Ck = 2282478, Dw = 16486972, xk = 6710886;
function Pw(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Ck
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
    backgroundColor: xk
  });
  let o = n.__vd_id;
  return o == null && (o = String(bk++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Pw)
  };
}
let bk = 0;
const kk = /^\/(.*)\/([a-z]*)$/;
function Bw(e, t) {
  const n = t.matched.length && ao(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => ao(o, e.record))), e.children.forEach((o) => Bw(o, t));
}
function Fw(e) {
  e.__vd_match = !1, e.children.forEach(Fw);
}
function Fu(e, t) {
  const n = String(e.re).match(kk);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Fu(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = La(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Fu(r, t));
}
function $k(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Vk(e) {
  const t = Rb(e.routes, e), n = e.parseQuery || ik, o = e.stringifyQuery || Lg, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Es(), r = Es(), l = Es(), c = ib(Nn);
  let u = Nn;
  Dn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = wl.bind(null, (S) => "" + S), d = wl.bind(null, ak), g = (
    // @ts-expect-error: intentionally avoid the type check
    wl.bind(null, La)
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
      const U = vl(n, S, T.path), ie = t.resolve({ path: U.path }, T), st = s.createHref(U.fullPath);
      return {}.NODE_ENV !== "production" && (st.startsWith("//") ? Y(`Location "${S}" resolved to "${st}". A resolved location cannot start with multiple slashes.`) : ie.matched.length || Y(`No match found for location with path "${S}"`)), oe(U, ie, {
        params: g(ie.params),
        hash: La(U.hash),
        redirectedFrom: void 0,
        href: st
      });
    }
    let L;
    if ("path" in S)
      ({}).NODE_ENV !== "production" && "params" in S && !("name" in S) && // @ts-expect-error: the type is never
      Object.keys(S.params).length && Y(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), L = oe({}, S, {
        path: vl(n, S.path, T.path).path
      });
    else {
      const U = oe({}, S.params);
      for (const ie in U)
        U[ie] == null && delete U[ie];
      L = oe({}, S, {
        params: d(U)
      }), T.params = d(T.params);
    }
    const F = t.resolve(L, T), M = S.hash || "";
    ({}).NODE_ENV !== "production" && M && !M.startsWith("#") && Y(`A \`hash\` should always start with the character "#". Replace "${M}" with "#${M}".`), F.params = i(g(F.params));
    const H = gb(o, oe({}, S, {
      hash: nk(M),
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
        o === Lg ? rk(S.query) : S.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: G
    });
  }
  function v(S) {
    return typeof S == "string" ? vl(n, S, c.value.path) : oe({}, S);
  }
  function x(S, T) {
    if (u !== S)
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
    const L = u = w(S), F = c.value, M = S.state, H = S.force, G = S.replace === !0, U = V(L);
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
    return !H && _g(o, F, L) && (st = cs(16, { to: ie, from: F }), xe(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (st ? Promise.resolve(st) : D(ie, F)).catch((Ve) => dn(Ve) ? (
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
          _g(o, w(Ve.to), ie) && // and we have done it a couple of times
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
    const L = x(S, T);
    return L ? Promise.reject(L) : Promise.resolve();
  }
  function C(S) {
    const T = O.values().next().value;
    return T && typeof T.runWithContext == "function" ? T.runWithContext(S) : S();
  }
  function D(S, T) {
    let L;
    const [F, M, H] = Ek(S, T);
    L = _l(F.reverse(), "beforeRouteLeave", S, T);
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
      L = _l(M, "beforeRouteUpdate", S, T);
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
    }).then(() => (S.matched.forEach((U) => U.enterCallbacks = {}), L = _l(H, "beforeRouteEnter", S, T), L.push(G), ce(L))).then(() => {
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
    l.list().forEach((F) => C(() => F(S, T, L)));
  }
  function X(S, T, L, F, M) {
    const H = x(S, T);
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
        E(oe(M, { replace: !0 }), F).catch(ka);
        return;
      }
      u = F;
      const H = c.value;
      Dn && Sb(yg(H.fullPath, L.delta), Ur()), D(F, H).catch((G) => dn(
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
        ) && !L.delta && L.type === Ea.pop && s.go(-1, !1);
      }).catch(ka), Promise.reject()) : (L.delta && s.go(-L.delta, !1), K(G, F, H))).then((G) => {
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
        ) ? s.go(-L.delta, !1) : L.type === Ea.pop && dn(
          G,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), R(F, H, G);
      }).catch(ka);
    }));
  }
  let ne = Es(), B = Es(), z;
  function K(S, T, L) {
    $e(S);
    const F = B.list();
    return F.length ? F.forEach((M) => M(S, T, L)) : ({}.NODE_ENV !== "production" && Y("uncaught error during route navigation:"), console.error(S)), Promise.reject(S);
  }
  function J() {
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
    const H = !L && yb(yg(S.fullPath, 0)) || (F || !L) && history.state && history.state.scroll || null;
    return lb().then(() => M(S, T, H)).then((G) => G && _b(G)).catch((G) => K(G, S, T));
  }
  const _e = (S) => s.go(S);
  let ze;
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
    onError: B.add,
    isReady: J,
    install(S) {
      const T = this;
      S.component("RouterLink", gk), S.component("RouterView", fk), S.config.globalProperties.$router = T, Object.defineProperty(S.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ba(c)
      }), Dn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !ze && c.value === Nn && (ze = !0, y(s.location).catch((M) => {
        ({}).NODE_ENV !== "production" && Y("Unexpected error when starting the router:", M);
      }));
      const L = {};
      for (const M in Nn)
        Object.defineProperty(L, M, {
          get: () => c.value[M],
          enumerable: !0
        });
      S.provide(Ir, T), S.provide(Ew, rb(L)), S.provide(Bu, c);
      const F = S.unmount;
      O.add(S), S.unmount = function() {
        O.delete(S), O.size < 1 && (u = Nn, ae && ae(), ae = null, c.value = Nn, ze = !1, z = !1), F();
      }, {}.NODE_ENV !== "production" && Dn && _k(S, T, t);
    }
  };
  function ce(S) {
    return S.reduce((T, L) => T.then(() => C(L)), Promise.resolve());
  }
  return j;
}
function Ek(e, t) {
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
  return ls(Ir);
}
const Lk = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), u = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(u / (1e3 * 3600 * 24));
}, Tk = (e) => {
  const t = Lk(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const Dt = window.Vue.unref, Bo = window.Vue.createVNode, gn = window.Vue.createElementVNode, Fg = window.Vue.renderSlot, Ng = window.Vue.withModifiers, Sl = window.Vue.toDisplayString, yl = window.Vue.withCtx, Ak = window.Vue.openBlock, Dk = window.Vue.createElementBlock, Pk = window.Vue.createCommentVNode, Bk = { class: "col shrink pe-4" }, Fk = { class: "col" }, Nk = { class: "cx-translation__details column justify-between ma-0" }, Mk = { class: "row ma-0" }, Uk = { class: "col grow" }, Ik = { class: "col shrink ps-2" }, Rk = ["dir", "textContent"], zk = ["dir", "textContent"], Ok = ["textContent"], jk = window.Vuex.useStore, Hk = window.Vue.computed, Nw = {
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
    const n = e, o = jk(), s = (l, c) => {
      const u = o.getters["mediawiki/getPage"](l, c);
      return u == null ? void 0 : u.thumbnail;
    }, a = fe(), r = Hk(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, c = Tk(n.translation.startTimestamp);
      return a.i18n(
        l[c.postfix],
        mw.language.convertNumber(c.value)
      );
    });
    return (l, c) => e.translation ? (Ak(), Dk("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: c[1] || (c[1] = Ng((u) => l.$emit("click"), ["stop"]))
    }, [
      gn("div", Bk, [
        Bo(Dt(Uu), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      gn("div", Fk, [
        gn("div", Nk, [
          gn("div", Mk, [
            gn("div", Uk, [
              Fg(l.$slots, "title")
            ]),
            gn("div", Ik, [
              Bo(Dt(Ze), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: c[0] || (c[0] = Ng((u) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Fg(l.$slots, "mid-content"),
          Bo(Dt(I), { class: "cx-translation__footer ma-0" }, {
            default: yl(() => [
              Bo(Dt(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: yl(() => [
                  gn("span", {
                    class: "mw-ui-autonym",
                    dir: Dt(q.getDir)(e.translation.sourceLanguage),
                    textContent: Sl(Dt(q.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, Rk),
                  Bo(Dt(Ze), {
                    icon: Dt(W0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  gn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: Dt(q.getDir)(e.translation.targetLanguage),
                    textContent: Sl(Dt(q.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, zk)
                ]),
                _: 1
              }),
              Bo(Dt(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: yl(() => [
                  gn("span", {
                    textContent: Sl(r.value)
                  }, null, 8, Ok)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : Pk("", !0);
  }
};
const Mg = window.Vue.unref, qk = window.Vue.toDisplayString, Gk = window.Vue.createTextVNode, Wk = window.Vue.withCtx, Xk = window.Vue.openBlock, Kk = window.Vue.createBlock, Yk = window.Codex.CdxInfoChip, Rr = {
  __name: "CommunityPriorityBadge",
  setup(e) {
    return (t, n) => (Xk(), Kk(Mg(Yk), {
      icon: Mg(od),
      class: "cx-community-priority-badge"
    }, {
      default: Wk(() => [
        Gk(qk(t.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const go = window.Vue.unref, Qk = window.Vue.toDisplayString, Jk = window.Vue.normalizeClass, Zk = window.Vue.createElementVNode, oi = window.Vue.openBlock, e8 = window.Vue.createElementBlock, Cl = window.Vue.createCommentVNode, si = window.Vue.createVNode, Fo = window.Vue.withCtx, xl = window.Vue.createBlock, t8 = ["lang", "textContent"], n8 = ["lang", "innerHTML"], o8 = window.Vue.computed, s8 = window.Vue.inject, a8 = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: $r,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = s8("colors").gray200, s = o8(
      () => {
        var c;
        return ((c = t.translation.progress) == null ? void 0 : c.any) * 100 || 0;
      }
    ), a = nt(), { setTranslationURLParams: r } = P(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (c, u) => (oi(), xl(Nw, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": go(wf),
      onActionIconClicked: u[0] || (u[0] = (i) => c.$emit("delete-translation")),
      onClick: l
    }, {
      title: Fo(() => [
        Zk("h5", {
          class: Jk(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Qk(e.translation.sourceTitle)
        }, null, 10, t8),
        e.translation.isLeadSectionTranslation ? Cl("", !0) : (oi(), e8("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, n8))
      ]),
      "mid-content": Fo(() => [
        e.translation.progress ? (oi(), xl(go(I), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Fo(() => [
            si(go(k), null, {
              default: Fo(() => [
                si(go(Sf), {
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
        })) : Cl("", !0),
        e.translation.inFeaturedCollection ? (oi(), xl(go(I), {
          key: 1,
          class: "ma-0 py-2"
        }, {
          default: Fo(() => [
            si(go(k), { shrink: "" }, {
              default: Fo(() => [
                si(Rr)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Cl("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, i8 = window.Vuex.useStore, Mw = [], r8 = (e, t, n) => Mw.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), l8 = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Mw.push(o);
}, c8 = () => {
  const e = i8();
  return (t, n, o) => b(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !r8(t, n, o) && (s = yield ge.fetchSectionSuggestion(
      t,
      o,
      n
    ), l8(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Uw = window.Vue.ref, Iw = Uw(null), Nu = Uw(null), u8 = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), Iw.value = e;
}, d8 = (e) => {
  Nu.value = e;
}, Ua = () => {
  const e = nt(), { loadSuggestion: t } = Ma(), { setTranslationURLParams: n } = P();
  return (o, s, a, r, l = null, c = !0) => b(void 0, null, function* () {
    u8(r), d8(l);
    const u = yield t(
      s,
      a,
      o
    );
    n(u), c && e.push({ name: "sx-translation-confirmer" });
  });
}, g8 = (e) => {
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
const bl = window.Vue.withModifiers, Ug = window.Vue.toDisplayString, Ig = window.Vue.createElementVNode, at = window.Vue.unref, mn = window.Vue.createVNode, m8 = window.Vue.createTextVNode, Ts = window.Vue.openBlock, Rg = window.Vue.createElementBlock, kl = window.Vue.createCommentVNode, $l = window.Vue.createBlock, Mn = window.Vue.withCtx, p8 = ["lang", "href", "textContent"], h8 = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, f8 = {
  key: 2,
  class: "flex"
}, w8 = ["innerHTML"], Vl = window.Vue.computed, zg = window.Vue.ref, Og = window.Codex.CdxButton, El = window.Codex.CdxIcon, v8 = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: rd,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = zg(!0), o = zg(null), s = Vl(() => {
      var m;
      return (m = o.value) == null ? void 0 : m.missingSections;
    }), a = Vl(
      () => s.value && Object.keys(s.value)[0]
    );
    c8()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((m) => o.value = m).catch((m) => console.log(m)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = P(), c = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, u = Ua(), i = (m) => {
      u(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), m && l(m);
    }, d = mw.config.get("wgNamespaceIds"), g = Vl(() => {
      const m = g8(
        t.translation.targetUrl
      );
      return (m == null ? void 0 : m.getNamespaceId()) === d.user;
    });
    return (m, p) => (Ts(), $l(Nw, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: c
    }, {
      title: Mn(() => [
        Ig("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: p[0] || (p[0] = bl(() => {
          }, ["stop"])),
          textContent: Ug(e.translation.sourceTitle)
        }, null, 8, p8)
      ]),
      "mid-content": Mn(() => [
        mn(at(I), { class: "ma-0" }, {
          default: Mn(() => [
            mn(at(k), null, {
              default: Mn(() => [
                g.value ? (Ts(), Rg("div", h8, [
                  mn(at(El), {
                    icon: at(sw),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  m8(" " + Ug(m.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : kl("", !0),
                n.value ? (Ts(), $l(at(mt), { key: 1 })) : s.value ? (Ts(), Rg("div", f8, [
                  mn(at(Og), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: p[1] || (p[1] = bl((h) => i(a.value), ["stop"]))
                  }, {
                    default: Mn(() => [
                      mn(at(El), {
                        class: "me-1",
                        icon: at(Yf)
                      }, null, 8, ["icon"]),
                      Ig("span", { innerHTML: a.value }, null, 8, w8)
                    ]),
                    _: 1
                  }),
                  mn(at(Og), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": m.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: p[2] || (p[2] = bl((h) => i(null), ["stop"]))
                  }, {
                    default: Mn(() => [
                      mn(at(El), { icon: at(td) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : kl("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e.translation.inFeaturedCollection ? (Ts(), $l(at(I), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Mn(() => [
            mn(at(k), { shrink: "" }, {
              default: Mn(() => [
                mn(Rr)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : kl("", !0)
      ]),
      _: 1
    }, 8, ["translation"]));
  }
}, Rw = "cx-translation-session-position-", zw = () => Rw + mw.user.sessionId(), _8 = () => {
  const e = parseInt(
    mw.storage.get(zw())
  );
  return isNaN(e) ? 0 : e;
}, S8 = function(e) {
  const t = zw();
  mw.storage.set(t, e);
}, y8 = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(Rw)).forEach((e) => mw.storage.remove(e));
}, C8 = () => {
  const e = _8();
  return e % 10 === 0 && y8(), S8(e + 1), e;
};
function x8(e) {
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
    content_translation_session_position: C8()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : zf(r).then((c) => {
    mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: c,
        user_global_edit_count_bucket: ey(c)
      })
    );
  });
}
const b8 = window.Vuex.useStore, k8 = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], Lt = () => {
  const e = b8(), { previousRoute: t } = tt(e), n = {
    event_source: { remove: !0 },
    translation_source_language: { remove: !1 },
    translation_target_language: { remove: !1 },
    translation_source_title: { remove: !0 }
  }, o = (s) => {
    for (const [a, { remove: r }] of Object.entries(n))
      if (s[a] === null || s[a] === "") {
        const l = k8(
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
  return (s) => (s.access_method || (s.access_method = qt ? "desktop" : "mobile web"), o(s), x8(s));
}, $8 = window.Vuex.useStore, V8 = () => {
  const { commit: e } = $8(), t = Lt();
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
const E8 = window.Vue.resolveDirective, Ll = window.Vue.createElementVNode, L8 = window.Vue.withDirectives, Tl = window.Vue.unref, jg = window.Vue.createVNode, Hg = window.Vue.withCtx, T8 = window.Vue.openBlock, A8 = window.Vue.createBlock, D8 = { class: "pa-4" }, P8 = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, B8 = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: $r,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = V8(), r = () => {
      a(n.translation), s();
    };
    return (l, c) => {
      const u = E8("i18n");
      return T8(), A8(Tl(Vt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Hg(() => [
          Ll("div", P8, [
            jg(Tl(Xe), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            jg(Tl(Xe), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Hg(() => [
          Ll("div", D8, [
            L8(Ll("span", null, null, 512), [
              [u, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function F8(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield N8(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function qg(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(q.sortByAutonym) : (yield F8(e, t, n)).sort(q.sortByAutonym);
  });
}
function N8(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function M8() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function U8(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const I8 = window.Vue.computed;
function R8(e, t) {
  const n = I8(() => {
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
const Al = window.Vue.ref, Dl = window.Vue.watch, z8 = window.Vue.computed;
function Ow(e, t, n) {
  const o = Al(""), s = Al(-1), a = Al(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = z8(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), c = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Dl(e, () => {
    s.value = -1;
  }), Dl(t, () => {
    t.value && l.value.length > 0 && (s.value = 0);
  }), Dl(s, () => b(this, null, function* () {
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
const ai = window.Vue.renderSlot, Te = window.Vue.unref, O8 = window.Vue.isRef, Gg = window.Vue.createVNode, As = window.Vue.withModifiers, Ds = window.Vue.withKeys, Un = window.Vue.createElementVNode, j8 = window.Vue.resolveDirective, ii = window.Vue.withDirectives, Pl = window.Vue.renderList, Bl = window.Vue.Fragment, pn = window.Vue.openBlock, hn = window.Vue.createElementBlock, Wg = window.Vue.toDisplayString, ri = window.Vue.normalizeClass, Fl = window.Vue.createCommentVNode, H8 = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, q8 = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, G8 = { class: "results px-3 pt-4" }, W8 = { class: "results-header ps-8 pb-2" }, X8 = { class: "results-languages--suggestions pa-0 ma-0" }, K8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], Y8 = { class: "results px-3 pt-4" }, Q8 = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, J8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], Z8 = ["aria-selected"], e2 = { class: "no-results px-3 py-4" }, t2 = { class: "ps-8" }, li = window.Vue.ref, n2 = window.Vue.watch, o2 = window.Vue.onMounted, Xg = window.Vue.computed, jw = {
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
      default: M8
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = li(null), a = li(""), r = li([]), l = li(n.suggestions), c = Xg(
      () => U8(r.value)
    ), u = Xg(() => {
      const y = r.value.length;
      return y < 10 ? "few-results" : y < 30 ? "some-results" : "many-results";
    }), i = (y) => o("select", y), d = () => o("close"), { autocompletion: g, onTabSelect: m } = R8(
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
    return n2(a, cd(() => b(this, null, function* () {
      r.value = yield qg(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), o2(() => b(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield qg(
        n.languages,
        "",
        n.searchAPI
      );
    })), (y, _) => {
      const V = j8("i18n");
      return pn(), hn("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        ai(y.$slots, "search", {}, () => [
          Un("div", H8, [
            Gg(Te(xu), {
              value: Te(g),
              "onUpdate:value": _[0] || (_[0] = (E) => O8(g) ? g.value = E : null),
              icon: Te(Vd),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Gg(Te(xu), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": _[1] || (_[1] = (E) => a.value = E),
              class: "mw-ui-language-selector__search pa-4",
              icon: Te(Vd),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Ds(As(v, ["prevent"]), ["enter"]),
                Ds(As(Te(p), ["stop", "prevent"]), ["down"]),
                Ds(As(Te(h), ["stop", "prevent"]), ["up"]),
                Ds(As(d, ["prevent"]), ["esc"]),
                Ds(As(Te(m), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        Un("section", q8, [
          e.suggestions.length && !a.value ? ai(y.$slots, "suggestions", { key: 0 }, () => [
            Un("section", G8, [
              ii(Un("p", W8, null, 512), [
                [V, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Un("ul", X8, [
                (pn(!0), hn(Bl, null, Pl(e.suggestions, (E) => (pn(), hn("li", {
                  key: E,
                  class: ri(["language ma-0", { "language--selected": E === Te(w) }]),
                  lang: E,
                  dir: Te(q.getDir)(E),
                  "aria-selected": E === Te(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (N) => i(E),
                  textContent: Wg(Te(q.getAutonym)(E))
                }, null, 10, K8))), 128))
              ])
            ])
          ]) : Fl("", !0),
          c.value.length ? ai(y.$slots, "search", { key: 1 }, () => [
            Un("section", Y8, [
              e.suggestions.length && !a.value ? ii((pn(), hn("p", Q8, null, 512)), [
                [V, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Fl("", !0),
              (pn(!0), hn(Bl, null, Pl(c.value, (E, N) => (pn(), hn("ul", {
                key: N,
                class: ri(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (pn(!0), hn(Bl, null, Pl(E, (C) => (pn(), hn("li", {
                  key: C,
                  class: ri(["language ma-0", { "language--selected": C === Te(w) }]),
                  lang: C,
                  dir: Te(q.getDir)(C),
                  role: "option",
                  "aria-selected": C === Te(w) || null,
                  tabindex: "-1",
                  onClick: (D) => i(C),
                  textContent: Wg(Te(q.getAutonym)(C))
                }, null, 10, J8))), 128)),
                e.allOptionEnabled && !a.value ? ii((pn(), hn("li", {
                  key: 0,
                  class: ri(["language ma-0", { "language--selected": Te(w) === "all" }]),
                  role: "option",
                  "aria-selected": Te(w) === "all" || null,
                  tabindex: "-1",
                  onClick: _[2] || (_[2] = (C) => i("all"))
                }, null, 10, Z8)), [
                  [V, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Fl("", !0)
              ], 2))), 128))
            ])
          ]) : ai(y.$slots, "noresults", { key: 2 }, () => [
            Un("section", e2, [
              ii(Un("h3", t2, null, 512), [
                [V, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const s2 = window.Vue.resolveDirective, Kg = window.Vue.withDirectives, Ps = window.Vue.openBlock, Bs = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ae = window.Vue.unref, Yg = window.Vue.toDisplayString, Pt = window.Vue.createVNode, Qg = window.Vue.withModifiers, mo = window.Vue.withCtx, a2 = window.Vue.normalizeClass, i2 = {
  key: 0,
  class: "mw-ui-autonym"
}, r2 = ["lang", "dir", "textContent"], l2 = {
  key: 0,
  class: "mw-ui-autonym"
}, c2 = ["lang", "dir", "textContent"], Fs = window.Vue.computed, u2 = window.Vue.inject, d2 = window.Vue.ref, Jg = window.Codex.CdxButton, Nl = window.Codex.CdxIcon, Cr = {
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
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "update:selectedSourceLanguage",
    "update:selectedTargetLanguage"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = u2("breakpoints"), a = Fs(() => s.value.mobile), r = d2(null), l = Fs(() => !!r.value), c = () => r.value = "source", u = () => r.value = "target", i = () => r.value = null, d = Fs(() => {
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
      const w = s2("i18n");
      return Ps(), Bs("div", {
        class: a2(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
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
                Pt(Ae(Jg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.disabled,
                  onClick: Qg(c, ["stop"])
                }, {
                  default: mo(() => [
                    m.value ? Kg((Ps(), Bs("span", i2, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ps(), Bs("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ae(q.getDir)(e.selectedSourceLanguage),
                      textContent: Yg(Ae(q.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, r2)),
                    Pt(Ae(Nl), {
                      size: "x-small",
                      icon: Ae(Vu)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Pt(Ae(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: mo(() => [
                Pt(Ae(Nl), { icon: Ae(Qf) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Pt(Ae(k), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: mo(() => [
                Pt(Ae(Jg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.disabled || e.targetLanguages.length < 2,
                  onClick: Qg(u, ["stop"])
                }, {
                  default: mo(() => [
                    p.value ? Kg((Ps(), Bs("span", l2, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ps(), Bs("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ae(q.getDir)(e.selectedTargetLanguage),
                      textContent: Yg(Ae(q.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, c2)),
                    Pt(Ae(Nl), {
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
const Zg = window.Vue.unref, g2 = window.Vue.createVNode, ci = window.Vue.createElementVNode, em = window.Vue.toDisplayString, m2 = window.Vue.openBlock, p2 = window.Vue.createElementBlock, h2 = { class: "cx-list-empty-placeholder pa-4" }, f2 = { class: "cx-list-empty-placeholder__icon-container" }, w2 = { class: "cx-list-empty-placeholder__icon" }, v2 = ["textContent"], _2 = ["textContent"], S2 = window.Codex.CdxIcon, Hw = {
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
    return (t, n) => (m2(), p2("div", h2, [
      ci("div", f2, [
        ci("div", w2, [
          g2(Zg(S2), { icon: Zg(nw) }, null, 8, ["icon"])
        ])
      ]),
      ci("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: em(e.title)
      }, null, 8, v2),
      ci("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: em(e.description)
      }, null, 8, _2)
    ]));
  }
}, y2 = window.Vuex.useStore, C2 = window.Vue.ref, ui = C2({ draft: !1, published: !1 }), fs = () => {
  const e = y2(), t = ro(), { addFeaturedCollectionFlag: n } = Nr(), o = (a) => b(void 0, null, function* () {
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
    ui.value[a] = !0;
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
      const r = Object.keys(ui.value).filter(
        (l) => !ui.value[l]
      ).map(
        (l) => o(l)
      );
      return Promise.all(r).catch((l) => {
        mw.log.error("[CX] Error while fetching translations", l);
      });
    },
    translationsFetched: ui
  };
};
const x2 = window.Vue.toDisplayString, Ml = window.Vue.normalizeClass, tm = window.Vue.createElementVNode, Kt = window.Vue.openBlock, No = window.Vue.createBlock, di = window.Vue.createCommentVNode, nm = window.Vue.unref, om = window.Vue.renderList, sm = window.Vue.Fragment, gi = window.Vue.createElementBlock, b2 = window.Vue.createVNode, am = window.Vue.withCtx, k2 = ["textContent"], $2 = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, V2 = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, mi = window.Vue.ref, Bt = window.Vue.computed, E2 = window.Vue.inject, L2 = window.Vuex.useStore, im = {
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
    const t = e, n = mi("all"), o = mi("all"), s = L2(), { translationsFetched: a } = fs(), r = Bt(
      () => a.value[t.translationStatus]
    ), l = mi(!1), c = mi(null), u = Bt(
      () => t.translationStatus === "draft"
    ), i = Bt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), d = Bt(
      () => n.value === "all"
    ), g = Bt(
      () => o.value === "all"
    ), m = Bt(
      () => i.value.filter(
        (_) => (d.value || _.sourceLanguage === n.value) && (g.value || _.targetLanguage === o.value)
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
    }, w = Bt(() => t.activeStatus === t.translationStatus), v = E2("breakpoints"), x = Bt(() => v.value.mobile), y = Bt(
      () => x.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (_, V) => w.value ? (Kt(), No(nm(Je), {
      key: 0,
      class: Ml(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: am(() => [
        tm("div", {
          class: Ml(["cx-translation-list__header", y.value])
        }, [
          tm("h3", {
            class: Ml(["px-4 mw-ui-card__title mb-0", { "pb-4": x.value }]),
            textContent: x2(_.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, k2),
          m.value.length ? (Kt(), No(Cr, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": V[0] || (V[0] = (E) => n.value = E),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": V[1] || (V[1] = (E) => o.value = E),
            "source-languages": h.value,
            "target-languages": p.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : di("", !0)
        ], 2)
      ]),
      default: am(() => [
        r.value && !m.value.length ? (Kt(), No(Hw, {
          key: 0,
          title: _.$i18n("cx-sx-translation-list-empty-title"),
          description: _.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : di("", !0),
        r.value ? di("", !0) : (Kt(), No(nm(mt), { key: 1 })),
        u.value ? (Kt(), gi("div", $2, [
          (Kt(!0), gi(sm, null, om(m.value, (E) => (Kt(), No(a8, {
            key: `${e.translationStatus}-${E.key}`,
            translation: E,
            onDeleteTranslation: (N) => f(E)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Kt(), gi("div", V2, [
          (Kt(!0), gi(sm, null, om(m.value, (E) => (Kt(), No(v8, {
            key: `${e.translationStatus}-${E.key}`,
            translation: E
          }, null, 8, ["translation"]))), 128))
        ])),
        b2(B8, {
          modelValue: l.value,
          "onUpdate:modelValue": V[2] || (V[2] = (E) => l.value = E),
          translation: c.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : di("", !0);
  }
};
const Ul = window.Vue.toDisplayString, pi = window.Vue.createElementVNode, Il = window.Vue.unref, Ns = window.Vue.openBlock, Rl = window.Vue.createBlock, rm = window.Vue.createCommentVNode, T2 = window.Vue.Fragment, lm = window.Vue.createElementBlock, A2 = window.Vue.withKeys, D2 = window.Vue.withCtx, P2 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, B2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, F2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, cm = window.Codex.CdxIcon, N2 = window.Codex.CdxInfoChip, hi = window.Vue.computed, $o = {
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
    const t = e, n = hi(() => t.content.lastIndexOf("/")), o = hi(() => t.content.slice(0, n.value)), s = hi(() => t.content.slice(n.value + 1)), a = hi(
      () => t.expanded ? AC : Vu
    );
    return (r, l) => (Ns(), Rl(Il(N2), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = A2((c) => r.$emit("click"), ["enter"]))
    }, {
      default: D2(() => [
        n.value === -1 ? (Ns(), lm(T2, { key: 0 }, [
          pi("span", null, Ul(e.content), 1),
          e.expandable ? (Ns(), Rl(Il(cm), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : rm("", !0)
        ], 64)) : (Ns(), lm("div", P2, [
          pi("span", B2, Ul(o.value), 1),
          l[1] || (l[1] = pi("span", null, "/", -1)),
          pi("span", F2, Ul(s.value), 1),
          e.expandable ? (Ns(), Rl(Il(cm), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : rm("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const Se = window.Vue.unref, wt = window.Vue.createVNode, In = window.Vue.createElementVNode, Ms = window.Vue.toDisplayString, it = window.Vue.withCtx, M2 = window.Vue.resolveDirective, zl = window.Vue.withDirectives, fn = window.Vue.openBlock, po = window.Vue.createBlock, Rn = window.Vue.createCommentVNode, um = window.Vue.createElementBlock, dm = window.Vue.withModifiers, U2 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, I2 = { class: "col shrink pe-4" }, R2 = ["lang", "dir", "textContent"], z2 = ["lang", "dir", "textContent"], O2 = { class: "cx-suggestion__missing-sections" }, j2 = {
  key: 0,
  class: "cx-suggestion__easy-sections ms-1"
}, H2 = ["textContent"], q2 = ["textContent"], Ol = window.Codex.CdxIcon, Ee = window.Vue.computed, G2 = window.Vue.inject, W2 = window.Vuex.useStore, Mu = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [oo, on, rs],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = W2(), o = Ee(() => t.suggestion), s = Ee(
      () => o.value.sourceTitle || o.value.title
    ), a = Ee(
      () => n.getters["mediawiki/getPage"](
        o.value.sourceLanguage,
        s.value
      )
    ), r = Ee(
      () => {
        var C;
        return (C = o.value) == null ? void 0 : C.missingSectionsCount;
      }
    ), l = Ee(() => !(o.value instanceof on) || !o.value.orderedMissingSections ? 0 : o.value.orderedMissingSections.filter((C) => {
      const D = o.value.getSectionSize(C.sourceTitle);
      return qf(D);
    }).length), c = fe(), u = Ee(() => {
      const C = c.i18n(
        "cx-sx-translation-suggestion-easy-sections",
        [l.value]
      );
      return c.i18n("parentheses", [C]);
    }), i = Ee(() => {
      var C;
      return (C = a.value) == null ? void 0 : C.description;
    }), d = Ee(
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
    ), f = G2("colors"), w = Ee(
      () => g.value ? f.blue600 : "currentColor"
    ), v = Ee(
      () => o.value instanceof If || o.value instanceof Rf
    ), x = Ee(() => {
      if (!v.value || o.value.inFeaturedCollection)
        return !1;
      const C = V();
      return (C == null ? void 0 : C.id) === te;
    }), y = Ee(() => x.value || d.value ? !1 : qt ? ny(o.value.size) : oy(o.value.leadSectionSize)), { featuredCollection: _ } = Wt(), { findSelectedFilter: V } = lo(), E = Ee(() => {
      var D, R;
      const C = V();
      return ((D = C == null ? void 0 : C.id) == null ? void 0 : D.toLowerCase()) === ((R = _.value) == null ? void 0 : R.name.toLowerCase());
    }), N = Ee(() => {
      if (!o.value.inFeaturedCollection)
        return !1;
      if (g.value)
        return !0;
      const C = V();
      return (C == null ? void 0 : C.id) === te ? !0 : !E.value;
    });
    return (C, D) => {
      const R = M2("i18n");
      return o.value ? (fn(), um("div", U2, [
        In("div", I2, [
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
                    }, null, 8, R2)
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
                    }, null, 8, z2)
                  ]),
                  _: 1
                }),
                y.value ? (fn(), po(Se(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: it(() => [
                    zl(In("small", null, null, 512), [
                      [R, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Rn("", !0),
                d.value ? (fn(), po(Se(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom",
                  shrink: ""
                }, {
                  default: it(() => [
                    zl(In("small", O2, null, 512), [
                      [R, [r.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (fn(), um("small", j2, Ms(u.value), 1)) : Rn("", !0)
                  ]),
                  _: 1
                })) : Rn("", !0),
                N.value ? (fn(), po(Se(k), {
                  key: 2,
                  shrink: "",
                  class: "cx-suggestion__information-panel__featured mt-auto"
                }, {
                  default: it(() => [
                    wt(Rr)
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
                            }, null, 8, H2),
                            wt(Se(Ol), {
                              icon: Se(Qf),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            In("small", {
                              textContent: Ms(p.value)
                            }, null, 8, q2)
                          ]),
                          _: 1
                        }),
                        r.value ? (fn(), po(Se(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: it(() => [
                            zl(In("small", null, null, 512), [
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
                x.value ? (fn(), po(Se(k), {
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
                g.value ? Rn("", !0) : (fn(), po(Se(Ol), {
                  key: 0,
                  icon: Se(ps),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: D[0] || (D[0] = dm((X) => C.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                wt(Se(Ol), {
                  class: "cx-suggestion__favorite-button",
                  icon: h.value,
                  "icon-color": w.value,
                  onClick: D[1] || (D[1] = dm((X) => C.$emit("bookmark"), ["stop"]))
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
const jl = window.Vue.normalizeClass, gm = window.Vue.createVNode, X2 = window.Vue.renderList, mm = window.Vue.Fragment, Us = window.Vue.openBlock, fi = window.Vue.createElementBlock, K2 = window.Vue.createBlock, Y2 = window.Vue.toDisplayString, Q2 = window.Vue.withKeys, pm = window.Vue.createCommentVNode, J2 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, wi = window.Vue.computed, Z2 = window.Vue.ref, e$ = window.Vue.watchEffect, t$ = {
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
    const n = e, o = wi(
      () => n.isSelected(n.filter) || n.filter.subFilters.some((g) => n.isSelected(g))
    ), s = Z2(!1);
    e$(() => {
      n.filter.expandable && (s.value = o.value);
    });
    const a = t, r = () => {
      n.filter.expandable && o.value ? s.value = !s.value : a("filter-selected", n.filter);
    }, l = wi(() => {
      const g = n.filter.subFilters.find(
        (p) => n.isSelected(p)
      );
      let m = n.filter.chipLabel;
      return g && (m += `/${c(g)}`), m;
    }), c = (g) => {
      const { label: m } = g, p = n.filter.label;
      return m.startsWith(`${p}/`) ? m.replace(`${p}/`, "") : m;
    }, u = wi(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), i = wi(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && s.value
    ), d = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, m) => (Us(), fi(mm, null, [
      gm($o, {
        class: jl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": o.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: s.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      s.value ? (Us(), fi("div", J2, [
        gm($o, {
          class: jl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: m[0] || (m[0] = (p) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Us(!0), fi(mm, null, X2(u.value, (p) => (Us(), K2($o, {
          key: p.id,
          class: jl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(p)
          }]),
          content: c(p),
          icon: p.icon,
          onClick: (h) => g.$emit("filter-selected", p)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        i.value ? (Us(), fi("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: d,
          onKeyup: Q2(d, ["enter"])
        }, Y2(e.viewMoreConfig.label), 33)) : pm("", !0)
      ])) : pm("", !0)
    ], 64));
  }
};
const n$ = window.Vue.toDisplayString, hm = window.Vue.createElementVNode, o$ = window.Vue.renderList, fm = window.Vue.Fragment, Hl = window.Vue.openBlock, wm = window.Vue.createElementBlock, s$ = window.Vue.createBlock, a$ = { class: "sx-suggestions-filters__group-label mb-3" }, i$ = { class: "sx-suggestions-filters__group-filters mb-3" }, r$ = {
  __name: "SXSuggestionsFiltersDialogTabGroupContent",
  props: {
    filterGroup: {
      type: xa,
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
    return (o, s) => (Hl(), wm(fm, null, [
      hm("div", a$, n$(e.filterGroup.label), 1),
      hm("div", i$, [
        (Hl(!0), wm(fm, null, o$(n(), (a) => (Hl(), s$(t$, {
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
}, vm = window.Vue.computed, l$ = window.Vue.inject, _m = window.Vue.ref, Sm = window.Vue.watch, qw = (e, t) => {
  const o = _m([]), s = _m(!1), a = vm(
    () => o.value.slice(0, 4)
  ), r = l$("breakpoints"), l = vm(() => r.value.mobile), { inFeaturedCollection: c } = sd(), u = (g) => b(void 0, null, function* () {
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
      yield u(g), o.value = g;
    } finally {
      s.value = !1, mw.cx.eventlogging.stats.articleSearchAccess(l.value);
    }
  }), 500), d = () => {
    o.value = [], t.value && (s.value = !0, i());
  };
  return Sm(t, d), Sm(e, d), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
class vi {
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
const ql = window.Vue.ref, ym = window.Vue.watch, Cm = window.Vue.computed, { topics: c$, regions: u$ } = mw.loader.require(
  "ext.cx.articlefilters"
), d$ = c$.flatMap(
  (e) => e.topics.map((t) => Ke(me({}, t), {
    groupId: e.groupId
  }))
), g$ = () => {
  const e = ql(""), t = ql("all"), n = ql({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = fe(), { pageCollectionGroups: s } = Pr(), { sourceLanguageURLParameter: a } = P(), r = (m) => (m = m.toLowerCase(), d$.filter(
    (p) => p.label.toLowerCase().includes(m)
  )), l = (m) => (m = m.toLowerCase(), Object.values(s.value).flat().filter(
    (h) => h.name.toLowerCase().includes(m)
  )), c = (m) => (m = m.toLowerCase(), u$.flatMap((p) => [p, ...p.countries]).filter(
    (p) => p.label.toLowerCase().includes(m)
  ).map((p) => ({
    label: p.label,
    id: p.id
  }))), u = Cm(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: d } = qw(
    a,
    u
  );
  ym(i, () => {
    n.value.topics = i.value.map(
      (m) => {
        var p;
        return new vi({
          label: m.title,
          value: m.title,
          description: m.description,
          thumbnail: { url: (p = m.thumbnail) == null ? void 0 : p.source },
          filterType: Gt,
          filterId: m.title,
          showThumbnail: !0
        });
      }
    );
  }), ym([e, t], () => b(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (m) => new vi({
        label: m.label,
        value: m.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? Eu : null,
        filterType: et,
        filterId: m.topicId
      })
    ), n.value.collections = l(
      e.value
    ).map(
      (m) => new vi({
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
      (m) => new vi({
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
  const g = Cm(() => {
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
}, m$ = "suggestion_filter_topic_area", p$ = "suggestion_filter_search_result_seed", h$ = "suggestion_filter_collections", f$ = "suggestion_filter_previous_edits", w$ = "suggestion_filter_popular_articles", v$ = "suggestion_filter_region", Gl = (e) => {
  if (e.type === et || e.type === Be || e.type === te || e.type === Gt)
    return e.id;
  if (e.id === te)
    return "all-collections";
}, Wl = (e) => {
  if (e.type === et)
    return m$;
  if (e.type === Be)
    return v$;
  if (e.type === Gt)
    return p$;
  if (e.id === te || e.type === te)
    return h$;
  if (e.id === an)
    return f$;
  if (e.id === rn)
    return w$;
}, Gw = () => {
  const e = Lt();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: Wl(r),
      event_context: Gl(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: Wl(r),
      event_context: Gl(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: Wl(r),
      event_context: Gl(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const be = window.Vue.unref, vt = window.Vue.createVNode, Ft = window.Vue.withCtx, _$ = window.Vue.resolveDirective, Yt = window.Vue.createElementVNode, Mo = window.Vue.withDirectives, xm = window.Vue.toDisplayString, S$ = window.Vue.createTextVNode, y$ = window.Vue.vShow, bm = window.Vue.isRef, km = window.Vue.renderList, $m = window.Vue.Fragment, wn = window.Vue.openBlock, ho = window.Vue.createElementBlock, C$ = window.Vue.withKeys, Vm = window.Vue.createCommentVNode, Em = window.Vue.createBlock, x$ = { class: "sx-suggestions-filters" }, b$ = { class: "mb-0" }, k$ = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, $$ = { class: "mb-3" }, V$ = { class: "px-4 pb-4 pt-7" }, E$ = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, L$ = ["onKeyup", "onClick"], T$ = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, A$ = { class: "sx-suggestions-filters__search-results-pending" }, D$ = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, P$ = { class: "sx-suggestions-filters__search-results-empty-primary" }, B$ = { class: "sx-suggestions-filters__search-results-empty-secondary" }, _i = window.Vue.ref, fo = window.Vue.computed, F$ = window.Vue.inject, N$ = window.Vue.watch, Lm = window.Codex.CdxButton, M$ = window.Codex.CdxIcon, U$ = window.Codex.CdxTextInput, I$ = window.Codex.CdxMenu, R$ = window.Codex.CdxTabs, z$ = window.Codex.CdxTab, O$ = {
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
          Ge,
          te,
          Be,
          et
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
        filterGroups: m([et])
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
    }, { allFilters: u, isFilterSelected: i, selectFilter: d, findSelectedFilter: g } = lo(), m = (O) => O.flatMap((j) => u.value.filter((ce) => ce.type === j)).filter(Boolean), p = () => {
      V(), o("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: h,
      logSuggestionFiltersConfirm: f,
      logSuggestionFiltersSelect: w
    } = Gw(), v = () => {
      h(), p();
    }, x = () => {
      _.value && (f(_.value), d(_.value)), p();
    }, y = _i(!1), _ = _i(null), V = () => {
      _.value = null, y.value = !1;
    }, E = (O) => {
      w(O), _.value = O, y.value = !0;
    }, N = (O) => _.value ? _.value.id === O.id && _.value.type === O.type : i(O), C = F$("breakpoints"), D = fo(() => C.value.mobile), { searchInput: R, searchScope: X, searchResults: ae, searchResultsLoading: ee } = g$(), ne = fo(
      () => _.value || g()
    ), B = _i(null);
    N$(B, () => {
      if (!B.value)
        return;
      const O = K.value.find(
        (j) => j.value === B.value
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
    ), J = _i({}), $e = fo(
      () => J.value[X.value]
    ), xe = fo(() => {
      var j;
      const O = (j = $e.value) == null ? void 0 : j.getHighlightedMenuItem();
      return O == null ? void 0 : O.id;
    }), _e = (O) => {
      O.key !== " " && $e.value && $e.value.delegateKeyNavigation(O);
    }, ze = (O, j) => {
      J.value[j] = O;
    };
    return (O, j) => {
      const ce = _$("i18n");
      return wn(), Em(be(Vt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: D.value,
        header: !1
      }, {
        default: Ft(() => [
          Yt("section", x$, [
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
                    vt(be(Lm), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": O.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: v
                    }, {
                      default: Ft(() => [
                        vt(be(M$), { icon: be(ps) }, null, 8, ["icon"])
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
                    Mo(Yt("h5", b$, null, 512), [
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
                    Mo(vt(be(Lm), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: x
                    }, {
                      default: Ft(() => [
                        S$(xm(O.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [y$, y.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Yt("div", k$, [
              Mo(Yt("h5", $$, null, 512), [
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
            Yt("div", V$, [
              vt(be(U$), {
                modelValue: be(R),
                "onUpdate:modelValue": j[0] || (j[0] = (S) => bm(R) ? R.value = S : null),
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
            vt(be(R$), {
              active: be(X),
              "onUpdate:active": [
                j[2] || (j[2] = (S) => bm(X) ? X.value = S : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Ft(() => [
                (wn(!0), ho($m, null, km(s.value, (S, T) => (wn(), Em(be(z$), {
                  key: T,
                  name: S.name,
                  label: S.label
                }, {
                  default: Ft(() => [
                    be(R) ? (wn(), ho("div", T$, [
                      vt(be(I$), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (L) => ze(L, S.name),
                        selected: B.value,
                        "onUpdate:selected": j[1] || (j[1] = (L) => B.value = L),
                        "show-pending": be(ee),
                        expanded: "",
                        "menu-items": K.value
                      }, {
                        pending: Ft(() => [
                          Mo(Yt("div", A$, null, 512), [
                            [ce, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Ft(() => [
                          be(ee) ? Vm("", !0) : (wn(), ho("div", D$, [
                            Mo(Yt("span", P$, null, 512), [
                              [ce, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            Mo(Yt("span", B$, null, 512), [
                              [ce, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (wn(), ho("div", E$, [
                      (wn(!0), ho($m, null, km(S.filterGroups, (L) => (wn(), ho("div", {
                        key: L.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        vt(r$, {
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
                          onKeyup: C$((F) => a(L.id), ["enter"]),
                          onClick: (F) => a(L.id)
                        }, [
                          Yt("span", null, xm(O.$i18n(z[L.id])), 1)
                        ], 40, L$)) : Vm("", !0)
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
const Is = window.Vue.unref, Si = window.Vue.openBlock, Tm = window.Vue.createBlock;
window.Vue.createCommentVNode;
const j$ = window.Vue.renderList, H$ = window.Vue.Fragment, Am = window.Vue.createElementBlock, q$ = window.Vue.normalizeClass, Dm = window.Vue.createVNode, G$ = {
  key: 1,
  class: "cx-suggestion-list__filters flex mx-4 pb-2"
}, Pm = window.Vue.ref, Bm = window.Vue.watch, W$ = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = fe(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: o } = Gw(), { targetLanguageURLParameter: s } = P(), {
      getFiltersSummary: a,
      selectFilter: r,
      isFilterSelected: l,
      waitingForPageCollectionsFetch: c,
      validateURLFilterWithCollections: u,
      setFeaturedCollectionFilterIfNeeded: i
    } = lo(), d = Pm(!1), g = () => {
      o(), d.value = !0;
    }, m = (h) => {
      n(h), r(h);
    }, p = Pm(a());
    return Bm(d, (h) => {
      h || (p.value = a());
    }), Bm([c, s], ([h]) => {
      h || (u(), i(), p.value = a());
    }), (h, f) => Is(c) ? (Si(), Tm(Is(mt), { key: 0 })) : (Si(), Am("div", G$, [
      (Si(!0), Am(H$, null, j$(p.value, (w) => (Si(), Tm($o, {
        key: w.label,
        class: q$(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": Is(l)(w)
        }]),
        icon: w.icon,
        content: w.label,
        onClick: (v) => m(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Dm($o, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: Is(td),
        content: Is(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: g
      }, null, 8, ["icon", "content"]),
      Dm(O$, {
        modelValue: d.value,
        "onUpdate:modelValue": f[0] || (f[0] = (w) => d.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, Uo = window.Vue.computed, Fm = window.Vue.ref, Xl = window.Vue.watch, X$ = window.Vuex.useStore, K$ = () => {
  const e = X$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Dr(), r = Lt(), l = Uo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), c = Uo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), u = Fm(0), i = Fm(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, g = 4, m = Uo(
    () => a(u.value)
  );
  Xl(
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
  Xl(
    p,
    () => {
      p.value.forEach((R) => {
        R.seen = !0;
      });
    },
    { deep: !0 }
  );
  const h = () => {
    _(), C(), V(), D();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: w
  } = ad(), v = (R) => R.length === d, x = Uo(
    () => v(p.value)
  ), y = Uo(
    () => v(m.value)
  ), _ = () => {
    const R = (u.value + 1) % g, X = v(
      a(R)
    );
    (!y.value || !X) && f();
  }, V = () => {
    const R = (i.value + 1) % g, X = v(
      s(R)
    );
    (!x.value || !X) && w();
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
  }, C = () => u.value = (u.value + 1) % g, D = () => i.value = (i.value + 1) % g;
  return Xl(
    o,
    () => {
      i.value = 0, V(), u.value = 0, _();
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
    isCurrentPageSuggestionsSliceFull: x,
    isCurrentSectionSuggestionsSliceFull: y
  };
}, Y$ = window.Vuex.useStore, ud = () => {
  const e = Y$(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = ad(), { addFeaturedCollectionFlag: o } = Nr(), s = (i, d, g) => e.state.suggestions.pageSuggestions.find(
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
}, Q$ = "suggestion_no_seed", J$ = "suggestion_previous_edits", Z$ = "suggestion_topic_area", eV = "suggestion_search_result_seed", tV = "suggestion_popular_articles", nV = "suggestion_collections", oV = "suggestion_region", sV = () => {
  const { currentSuggestionFilters: e } = P();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === an)
      return t ? J$ : Q$;
    if (n === et)
      return Z$;
    if (n === Be)
      return oV;
    if (n === Gt)
      return eV;
    if (o === rn)
      return tV;
    if (o === te || n === te)
      return nV;
    const s = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${o}`
    );
    throw mw.errorLogger.logError(s, "error.contenttranslation"), s;
  };
};
const yi = window.Vue.unref, Nm = window.Vue.createVNode, Io = window.Vue.toDisplayString, Ro = window.Vue.createElementVNode, Rs = window.Vue.openBlock, zs = window.Vue.createElementBlock, Ci = window.Vue.createCommentVNode, Mm = window.Vue.createTextVNode, aV = window.Vue.normalizeClass, iV = { class: "cx-featured-collection-banner py-4 px-6" }, rV = { class: "cx-featured-collection-banner__header mb-3" }, lV = { class: "cx-featured-collection-banner__header-text" }, cV = { class: "cx-featured-collection-banner__title mb-0" }, uV = {
  key: 0,
  class: "cx-featured-collection-banner__source mb-0"
}, dV = { class: "cx-featured-collection-banner__content" }, gV = { class: "cx-featured-collection-banner__learn-more-container" }, mV = ["href"], Um = window.Codex.CdxIcon, Kl = window.Vue.ref, pV = window.Vue.computed, hV = window.Vue.onMounted, fV = window.Vue.onUnmounted, wV = {
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
    const t = Kl(!1), n = Kl(null), o = Kl(null), s = pV(() => n.value ? (o.value, n.value.scrollHeight > n.value.clientHeight) : !1), a = () => {
      t.value = !t.value;
    }, r = () => {
      o.value = window.innerWidth;
    };
    return hV(() => {
      window.addEventListener("resize", r);
    }), fV(() => {
      window.removeEventListener("resize", r);
    }), (l, c) => (Rs(), zs("div", iV, [
      Ro("div", rV, [
        Nm(yi(Um), {
          icon: yi(od),
          class: "cx-featured-collection-banner__icon me-3 mt-1"
        }, null, 8, ["icon"]),
        Ro("div", lV, [
          Ro("h5", cV, Io(l.$i18n("cx-featured-collection-banner-title")), 1),
          e.communityName ? (Rs(), zs("span", uV, Io(e.communityName), 1)) : Ci("", !0)
        ])
      ]),
      Ro("div", dV, [
        Ro("div", {
          ref_key: "descriptionRef",
          ref: n,
          class: aV(["cx-featured-collection-banner__description", {
            "cx-featured-collection-banner__description--expanded": t.value
          }])
        }, [
          Mm(Io(e.description || l.$i18n("cx-featured-collection-banner-description")) + " ", 1),
          t.value ? (Rs(), zs("button", {
            key: 0,
            class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--inline",
            onClick: a
          }, Io(l.$i18n("cx-featured-collection-banner-toggle-less")), 1)) : Ci("", !0)
        ], 2),
        !t.value && s.value ? (Rs(), zs("button", {
          key: 0,
          class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--external mb-1 ml-1",
          onClick: a
        }, Io(l.$i18n("cx-featured-collection-banner-toggle-more")), 1)) : Ci("", !0)
      ]),
      Ro("div", gV, [
        (t.value || !s.value) && e.learnMoreUrl ? (Rs(), zs("a", {
          key: 0,
          href: e.learnMoreUrl,
          class: "cx-featured-collection-banner__learn-more",
          target: "_blank"
        }, [
          Mm(Io(l.$i18n("cx-featured-collection-banner-learn-more")) + " ", 1),
          Nm(yi(Um), {
            icon: yi(Na),
            size: "small",
            class: "cx-featured-collection-banner__learn-more-icon"
          }, null, 8, ["icon"])
        ], 8, mV)) : Ci("", !0)
      ])
    ]));
  }
};
const Im = window.Vue.normalizeClass, vV = window.Vue.resolveDirective, Os = window.Vue.createElementVNode, xi = window.Vue.withDirectives, pe = window.Vue.unref, Ye = window.Vue.openBlock, Nt = window.Vue.createBlock, vn = window.Vue.createCommentVNode, Yl = window.Vue.createVNode, js = window.Vue.withCtx, Rm = window.Vue.renderList, zm = window.Vue.Fragment, Ql = window.Vue.createElementBlock, _V = window.Vue.toDisplayString, SV = window.Vue.createTextVNode, yV = window.Vue.vShow, CV = { class: "cx-suggestion-list" }, xV = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, bV = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, kV = { class: "cx-suggestion-list__refresh-button-container justify-center" }, _t = window.Vue.computed, $V = window.Vue.inject, VV = window.Vue.ref, EV = window.Codex.CdxButton, LV = window.Codex.CdxIcon, TV = window.Vuex.useStore, AV = {
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
    } = P(), { supportedLanguageCodes: s } = Pa(), a = lw(), r = (j) => a(j, n.value), l = (j) => a(t.value, j), c = sV(), { featuredCollection: u } = Wt(), { findSelectedFilter: i } = lo(), d = _t(() => i()), g = Ua(), m = (j) => {
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
      pageSuggestionsLoading: x,
      sectionSuggestionsLoading: y,
      isCurrentPageSuggestionsSliceFull: _,
      isCurrentSectionSuggestionsSliceFull: V
    } = K$(), E = VV(null), N = Lt(), C = () => {
      N({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), v(), E.value && E.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: D, markFavoritePageSuggestion: R } = ud(), X = $V("breakpoints"), ae = _t(() => X.value.mobile), ee = _t(
      () => ae.value ? null : "pb-2 flex justify-between items-center"
    ), ne = TV(), B = _t(
      () => ne.state.suggestions.isPageSuggestionsFetchPending
    ), z = _t(
      () => ne.state.suggestions.isSectionSuggestionsFetchPending
    ), K = _t(
      () => B.value || x.value && !_.value
    ), J = _t(
      () => z.value || y.value && !V.value
    ), $e = _t(
      () => B.value || x.value || p.value.length > 0
    ), xe = _t(
      () => z.value || y.value || h.value.length > 0
    ), _e = _t(
      () => !$e.value && !xe.value
    ), ze = _t(
      () => !y.value && !x.value && !B.value && !z.value && !_e.value
    ), O = _t(
      () => {
        var j;
        return u.value && ((j = d.value) == null ? void 0 : j.id) === u.value.name;
      }
    );
    return (j, ce) => {
      const S = vV("i18n");
      return xi((Ye(), Ql("div", CV, [
        Yl(pe(Je), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: js(() => [
            Os("div", {
              class: Im(["cx-suggestion-list__header-card__header px-4", ee.value])
            }, [
              xi(Os("h3", {
                class: Im(["mw-ui-card__title mb-0", { "py-3": ae.value }])
              }, null, 2), [
                [S, void 0, "cx-suggestionlist-title"]
              ]),
              ae.value ? vn("", !0) : (Ye(), Nt(Cr, {
                key: 0,
                "source-languages": pe(s),
                "target-languages": pe(s),
                "selected-source-language": pe(t),
                "selected-target-language": pe(n),
                "onUpdate:selectedSourceLanguage": r,
                "onUpdate:selectedTargetLanguage": l
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Yl(W$)
          ]),
          default: js(() => [
            ae.value ? (Ye(), Nt(Cr, {
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
        O.value ? (Ye(), Nt(wV, {
          key: 0,
          "community-name": pe(u).communityName,
          description: pe(u).description,
          "learn-more-url": pe(u).link
        }, null, 8, ["community-name", "description", "learn-more-url"])) : vn("", !0),
        xe.value ? (Ye(), Nt(pe(Je), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: js(() => [
            xi(Os("h5", xV, null, 512), [
              [S, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Ye(!0), Ql(zm, null, Rm(pe(h), (T, L) => (Ye(), Nt(Mu, {
              key: `section-suggestion-${L}`,
              class: "ma-0",
              suggestion: T,
              onClose: (F) => pe(w)(T),
              onClick: (F) => m(T),
              onBookmark: (F) => pe(D)(T)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            J.value ? (Ye(), Nt(pe(mt), { key: 0 })) : vn("", !0)
          ]),
          _: 1
        })) : vn("", !0),
        $e.value ? (Ye(), Nt(pe(Je), {
          key: 2,
          ref_key: "pageSuggestionsList",
          ref: E,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: js(() => [
            xi(Os("h5", bV, null, 512), [
              [S, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Ye(!0), Ql(zm, null, Rm(pe(p), (T, L) => (Ye(), Nt(Mu, {
              key: `page-suggestion-${L}`,
              suggestion: T,
              onClose: (F) => pe(f)(T),
              onClick: (F) => m(T),
              onBookmark: (F) => pe(R)(T)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            K.value ? (Ye(), Nt(pe(mt), { key: 0 })) : vn("", !0)
          ]),
          _: 1
        }, 512)) : vn("", !0),
        _e.value ? (Ye(), Nt(Hw, {
          key: 3,
          title: j.$i18n("cx-sx-suggestion-list-empty-title"),
          description: j.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : vn("", !0),
        Os("div", kV, [
          ze.value ? (Ye(), Nt(pe(EV), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: C
          }, {
            default: js(() => [
              Yl(pe(LV), {
                class: "me-1",
                icon: pe(ow)
              }, null, 8, ["icon"]),
              SV(" " + _V(j.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : vn("", !0)
        ])
      ], 512)), [
        [yV, e.active]
      ]);
    };
  }
}, DV = window.Vue.resolveDirective, PV = window.Vue.createElementVNode, BV = window.Vue.withDirectives, FV = window.Vue.renderList, NV = window.Vue.Fragment, Jl = window.Vue.openBlock, MV = window.Vue.createElementBlock, Om = window.Vue.unref, jm = window.Vue.createBlock, Hm = window.Vue.withCtx, UV = window.Vue.createCommentVNode, IV = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, RV = window.Vue.computed, zV = window.Vuex.useStore, OV = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = zV(), n = RV(() => t.state.suggestions.favorites || []), o = Ua(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = ud();
    return (r, l) => {
      const c = DV("i18n");
      return n.value.length ? (Jl(), jm(Om(Je), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Hm(() => [
          BV(PV("h3", IV, null, 512), [
            [c, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Hm(() => [
          (Jl(!0), MV(NV, null, FV(n.value, (u, i) => (Jl(), jm(Mu, {
            key: `favorite-${i}`,
            suggestion: u,
            onClick: (d) => s(u),
            onBookmark: (d) => Om(a)(u)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : UV("", !0);
    };
  }
};
const jV = window.Vue.resolveDirective, Hs = window.Vue.createElementVNode, HV = window.Vue.withDirectives, qV = window.Vue.renderList, GV = window.Vue.Fragment, qm = window.Vue.openBlock, Gm = window.Vue.createElementBlock, WV = window.Vue.unref, XV = window.Vue.createVNode, KV = window.Vue.toDisplayString, YV = { class: "cx-help-panel pa-4" }, QV = { class: "cx-help-panel__item-list mt-6 ps-2" }, JV = ["href", "target"], ZV = ["textContent"], eE = window.Codex.CdxIcon, tE = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = fe(), n = [
      {
        icon: MC,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: PC,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = jV("i18n");
      return qm(), Gm("div", YV, [
        HV(Hs("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Hs("ul", QV, [
          (qm(), Gm(GV, null, qV(n, (r, l) => Hs("li", {
            key: l,
            class: "mt-4"
          }, [
            Hs("a", {
              href: r.href,
              target: r.target
            }, [
              XV(WV(eE), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Hs("span", {
                textContent: KV(r.label)
              }, null, 8, ZV)
            ], 8, JV)
          ])), 64))
        ])
      ]);
    };
  }
};
const nE = window.Vue.resolveDirective, zn = window.Vue.createElementVNode, Zl = window.Vue.withDirectives, ec = window.Vue.toDisplayString, bi = window.Vue.unref, tc = window.Vue.withCtx, ki = window.Vue.createVNode, oE = window.Vue.openBlock, sE = window.Vue.createElementBlock, aE = { class: "cx-stats-panel pa-4" }, iE = ["textContent"], rE = { class: "cx-stats-panel__monthly-stats-label" }, lE = ["textContent"], cE = { class: "cx-stats-panel__total-stats-label" }, uE = ["href", "target"], dE = ["textContent"], gE = window.Codex.CdxIcon, mE = window.Vue.ref, Wm = window.Vue.computed, pE = window.Vue.watch, hE = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = fe(), n = e, o = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", s = Wm(() => {
      var u, i;
      const c = ((i = (u = n.stats) == null ? void 0 : u[o]) == null ? void 0 : i.count) || 0;
      return mw.language.convertNumber(c);
    }), a = Wm(() => {
      var u, i;
      const c = ((i = (u = n.stats) == null ? void 0 : u[o]) == null ? void 0 : i.delta) || 0;
      return mw.language.convertNumber(c);
    }), r = mE(null), l = {
      icon: tw,
      label: t.i18n("cx-sx-dashboard-stats-panel-all-stats-label"),
      href: "https://superset.wmcloud.org/superset/dashboard/p/X61GbQpZ5Rb/",
      target: "_blank"
    };
    return pE(
      () => n.stats,
      () => {
        const c = n.stats, u = r.value.getContext("2d"), i = Object.keys(n.stats || {}).sort(), d = i.reduce(
          (C, D) => Math.max(C, c[D].delta),
          0
        ), g = i.map((C) => c[C].delta), m = r.value.getBoundingClientRect().width, p = r.value.getBoundingClientRect().height;
        r.value.width = m, r.value.height = p;
        const h = 4, f = 6, w = 50, v = (w - h) / d;
        let x = h;
        const y = Math.floor(
          (m - h) / (f + h)
        ), _ = g.slice(
          Math.max(g.length - y, 0)
        ), V = getComputedStyle(document.documentElement), E = V.getPropertyValue("--color-base").trim() || "#202122", N = V.getPropertyValue("--color-progressive").trim() || "#36c";
        u.fillStyle = E, _.forEach((C, D) => {
          D === _.length - 1 && (u.fillStyle = N);
          const R = w - C * v;
          u.fillRect(x, R, f, C * v), x += f + h;
        });
      }
    ), (c, u) => {
      const i = nE("i18n");
      return oE(), sE("div", aE, [
        Zl(zn("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        ki(bi(I), null, {
          default: tc(() => [
            ki(bi(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: tc(() => [
                zn("h3", {
                  textContent: ec(a.value)
                }, null, 8, iE),
                Zl(zn("h5", rE, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            ki(bi(k), { class: "cx-stats-panel__total-stats" }, {
              default: tc(() => [
                zn("h3", {
                  textContent: ec(s.value)
                }, null, 8, lE),
                Zl(zn("h5", cE, null, 512), [
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
          ki(bi(gE), {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          zn("span", {
            textContent: ec(l.label)
          }, null, 8, dE)
        ], 8, uE)
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
const fE = window.Vue.renderSlot, wE = window.Vue.unref, vE = window.Vue.createVNode, _E = window.Vue.createElementVNode, SE = window.Vue.openBlock, yE = window.Vue.createElementBlock, CE = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, xE = { class: "col-12 ma-0 pa-0" }, bE = {
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
    return (a, r) => (SE(), yE("footer", CE, [
      _E("div", xE, [
        fE(a.$slots, "default", {}, () => [
          vE(wE(Ta), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, kE = window.Vuex.useStore, $E = () => {
  const e = kE(), t = ro(), { addFeaturedCollectionFlag: n } = Nr();
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
}, VE = window.Vuex.useStore, Xw = () => {
  const e = VE(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), { isDefaultFilter: r } = zu(), { previousRoute: l } = tt(e), c = Lt(), u = () => {
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
}, Xm = window.Vue.computed;
window.Vuex.useStore;
const Le = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = P(), { getLoadedSuggestion: s } = Ma(), a = Xm(
    () => s(
      e.value,
      t.value,
      n.value
    )
  ), r = Xm(() => o.value === no.LEAD_SECTION_DUMMY_TITLE ? o.value : a.value.missingSections[o.value] || a.value.presentSections[o.value] || "");
  return { sectionSuggestion: a, activeSectionTargetTitle: r };
}, EE = window.Vuex.useStore, LE = window.Vue.computed, Xt = () => {
  const e = EE(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = P();
  return { currentTranslation: LE(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, nc = window.Vue.computed, TE = window.Vuex.useStore, ot = () => {
  const e = TE(), { sectionSuggestion: t } = Le(), { currentTranslation: n } = Xt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), r = nc(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = nc(
    () => {
      var u, i;
      return ((u = t.value) == null ? void 0 : u.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    }
  ), c = nc(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: r, currentTargetPage: c, currentTargetPageTitle: l };
}, $i = window.Vue.computed, AE = window.Vuex.useStore, se = () => {
  const e = AE(), { currentSourcePage: t } = ot(), { currentMTProvider: n } = tt(e), { sectionURLParameter: o } = P(), s = $i(() => {
    var c, u;
    return o.value ? (u = t.value) == null ? void 0 : u.getSectionByTitle(o.value) : (c = t.value) == null ? void 0 : c.leadSection;
  }), a = $i(
    () => {
      var c;
      return (c = s.value) == null ? void 0 : c.isTitleSelected;
    }
  ), r = $i(
    () => {
      var c;
      return (c = s.value) == null ? void 0 : c.selectedContentTranslationUnit;
    }
  ), l = $i(
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
}, oc = window.Vue.computed, ht = () => {
  const { sectionURLParameter: e } = P(), { targetPageExists: t } = cn(), { sourceSection: n } = se(), { sectionSuggestion: o } = Le(), s = oc(
    () => {
      var l;
      return t.value && !!((l = n.value) != null && l.isLeadSection);
    }
  ), a = oc(
    () => {
      var l;
      return !!((l = n.value) != null && l.isLeadSection) && !t.value;
    }
  );
  return {
    isCurrentSectionPresent: oc(
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
}, DE = window.Vue.ref, Vi = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, sc = DE(null), Tt = () => {
  const { isCurrentSectionPresent: e } = ht(), t = () => {
    e.value ? o(Vi.EXPAND) : o(Vi.NEW_SECTION);
  }, n = () => {
    sc.value = null;
  }, o = (s) => {
    if (!Object.values(Vi).includes(s))
      throw new Error("[CX] Invalid publishing target used");
    sc.value = s;
  };
  return {
    target: sc,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: o,
    PUBLISHING_TARGETS: Vi
  };
}, PE = window.Vue.watch, BE = () => {
  const { fetchAllTranslations: e } = fs(), t = iw(), n = $E(), { fetchPageCollectionGroups: o } = Pr(), { logDashboardOpenEvent: s } = Xw(), { applicationLanguagesInitialized: a } = cw(), { clearPublishTarget: r } = Tt();
  return () => b(void 0, null, function* () {
    o(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), PE(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Km = window.Vue.computed, FE = window.Vue.ref, NE = window.Vue.watch, ME = window.Vue.watchEffect, UE = window.Vuex.useStore, IE = ["suggestions", "draft", "published"], RE = () => {
  const e = UE(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = P(), { translationsFetched: o } = fs(), s = FE(null);
  if (IE.includes(t.value))
    s.value = t.value;
  else {
    const a = Km(
      () => o.value.draft
    ), r = Km(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", NE(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return ME(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, zE = window.Vue.computed, OE = () => {
  const e = fe();
  return zE(() => [
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
        icon: br,
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
const ke = window.Vue.unref, Me = window.Vue.createVNode, jE = window.Vue.toDisplayString, HE = window.Vue.createTextVNode, _n = window.Vue.withCtx, ac = window.Vue.openBlock, Ym = window.Vue.createBlock, Qm = window.Vue.createCommentVNode, qE = window.Vue.vShow, GE = window.Vue.withDirectives, WE = window.Vue.isRef, XE = window.Vue.createElementBlock, Jm = window.Vue.computed, KE = window.Vue.inject, YE = window.Vuex.useStore, QE = window.Codex.CdxButton, JE = window.Codex.CdxIcon, ZE = {
  __name: "CXDashboard",
  setup(e) {
    const t = nt(), n = Lt(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    BE()();
    const a = YE();
    a.dispatch("translator/fetchTranslatorStats");
    const r = Jm(() => a.state.translator.translatorStats), l = RE(), c = OE(), u = Ww(), i = (m) => {
      u(m), l.value = m;
    }, d = KE("breakpoints"), g = Jm(() => d.value.mobile);
    return mw.cx.eventlogging.stats.dashboardAccess(g.value), (m, p) => (ac(), XE("div", null, [
      Me(ke(I), { class: "ma-0 pb-4" }, {
        default: _n(() => [
          Me(ke(QE), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: _n(() => [
              Me(ke(JE), {
                class: "me-1",
                icon: ke(Yf)
              }, null, 8, ["icon"]),
              HE(" " + jE(m.$i18n("cx-create-new-translation")), 1)
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
          m.$mwui.breakpoint.tabletAndUp ? (ac(), Ym(ke(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: _n(() => [
              Me(ke(Ta), {
                id: "dashboard-list-selector--desktop",
                items: ke(c),
                active: ke(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Qm("", !0),
          Me(ke(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: _n(() => [
              GE(Me(OV, null, null, 512), [
                [qE, ke(l) === "suggestions"]
              ]),
              Me(AV, {
                active: ke(l) === "suggestions"
              }, null, 8, ["active"]),
              Me(im, {
                "translation-status": "draft",
                "active-status": ke(l)
              }, null, 8, ["active-status"]),
              Me(im, {
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
                      Me(hE, { stats: r.value }, null, 8, ["stats"])
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
                      Me(tE)
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
      m.$mwui.breakpoint.mobile ? (ac(), Ym(bE, {
        key: 0,
        active: ke(l),
        "onUpdate:active": p[0] || (p[0] = (h) => WE(l) ? l.value = h : null),
        items: ke(c)
      }, null, 8, ["active", "items"])) : Qm("", !0)
    ]));
  }
}, e4 = {
  name: "DashboardView",
  components: { CxDashboard: ZE }
}, t4 = window.Vue.resolveComponent, n4 = window.Vue.createVNode, o4 = window.Vue.openBlock, s4 = window.Vue.createElementBlock, a4 = { class: "cx-translation-dashboard" };
function i4(e, t, n, o, s, a) {
  const r = t4("cx-dashboard");
  return o4(), s4("main", a4, [
    n4(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const Zm = /* @__PURE__ */ he(e4, [["render", i4]]), zo = window.Vue.computed, r4 = () => {
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
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = cn(), c = zo(() => r.value ? Q.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), u = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value >= 1 ? "cx-sx-select-section" : a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : a.value > 0 ? "cx-sx-select-section" : "" : "cx-sx-start-translation-button-label", i = zo(() => {
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
  }), d = zo(
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
function l4(e) {
  return e.$el = $(e), e;
}
function c4(e, t, n, o) {
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
function u4(e, t) {
  return b(this, null, function* () {
    yield dd(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = l4(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const d4 = window.Vue.computed, g4 = window.Vue.onMounted, m4 = window.Vue.ref;
function p4(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const h4 = {
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
    const n = m4(null);
    let o = null;
    const s = d4(
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
    return g4(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = p4;
      const i = yield u4(c, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = c4(
        i,
        e.content,
        e.language,
        e.dir
      ), o.focus();
    })), { sxeditor: n };
  }
}, Ei = window.Vue.createElementVNode, f4 = window.Vue.openBlock, w4 = window.Vue.createElementBlock, v4 = ["lang", "dir"], _4 = ["lang", "dir"];
function S4(e, t, n, o, s, a) {
  return f4(), w4("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    t[0] || (t[0] = Ei("div", { class: "overlay-header-container" }, [
      Ei("div", { class: "overlay-header header initial-header" }, [
        Ei("div", { class: "toolbar" })
      ])
    ], -1)),
    Ei("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, _4)
  ], 8, v4);
}
const y4 = /* @__PURE__ */ he(h4, [["render", S4]]);
function dd() {
  return mw.loader.using("mw.cx3.ve");
}
const C4 = window.Vuex.useStore, x4 = () => {
  const e = C4();
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
}, b4 = window.Vuex.useStore, Kw = () => {
  const e = b4();
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
}, zr = () => {
  const { currentSourcePage: e } = ot(), t = x4(), n = Kw(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = P(), c = (d, g) => b(void 0, null, function* () {
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
      qt || (yield t(
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
}, k4 = window.Vuex.useStore, ws = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = P(), { sectionSuggestion: a, activeSectionTargetTitle: r } = Le(), { target: l } = Tt(), c = k4(), u = nt(), i = () => {
    const p = u.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !c.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return u.getRoutes().find((h) => h.name === p);
  }, d = () => {
    const m = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), p = Q.getCurrentWikiLanguageCode();
    if (!m || t.value === p)
      return !1;
    const h = o.value ? { section: o.value } : {}, f = Q.getCXUrl(
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
    o.value && (m.sourcesection = o.value, r.value && (m.targetsection = r.value)), (p = a.value) != null && p.targetTitle && (m.targettitle = a.value.targetTitle), l.value && (m.publishtarget = l.value), location.href = Q.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      m
    );
  };
  return () => {
    if (Q.setCXToken(
      e.value,
      t.value,
      n.value
    ), qt) {
      g();
      return;
    }
    if (d())
      return;
    const p = i();
    u.push({ name: p.name });
  };
}, ep = window.Vue.computed, $4 = window.Vue.ref, V4 = window.Vue.watchEffect, ic = /* @__PURE__ */ new Map(), E4 = (e, t) => b(void 0, null, function* () {
  return (yield ge.fetchArticleSections(
    e,
    t
  )).sections.filter(
    (s) => s.level === "2"
  )[0].byteoffset;
}), L4 = (e, t) => {
  const n = `${e}:${t}`;
  if (ic.has(n))
    return ic.get(n);
  const o = E4(e, t);
  return ic.set(n, o), o;
}, Yw = () => {
  const { currentSourcePage: e } = ot(), { sectionSuggestion: t } = Le(), { sectionURLParameter: n } = P(), o = $4(null);
  V4(() => b(void 0, null, function* () {
    var r;
    if (t.value && n.value)
      o.value = t.value.getSectionSize(n.value);
    else if (t.value) {
      const { missingSections: l } = t.value;
      o.value = Object.keys(l).reduce(
        (c, u) => c + t.value.getSectionSize(u),
        0
      );
    } else if (e.value && !qt) {
      const l = e.value.language, c = e.value.title;
      o.value = yield L4(l, c);
    } else
      o.value = ((r = e.value) == null ? void 0 : r.articleSize) || null;
  }));
  const s = ep(() => o.value ? !t.value && qt ? Hf(o.value) : Ku(o.value) : We.unknown);
  return { isQuickTranslation: ep(() => s.value === We.stub || s.value === We.easy), difficulty: s, sizeInBytes: o };
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
}, T4 = window.Vue.ref, A4 = () => {
  const e = nt(), { logDashboardTranslationStartEvent: t } = gd(), n = md(), o = ws(), { sectionURLParameter: s } = P(), { targetPageExists: a } = cn(), { selectPageSectionByTitle: r } = zr(), l = () => b(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), c = T4(!1), { currentTranslation: u } = Xt();
  return {
    handlePrimaryButtonClick: () => {
      u.value ? u.value.isArticleTranslation && !qt ? c.value = !0 : (n(), o()) : s.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: c
  };
};
const D4 = window.Vue.resolveDirective, tp = window.Vue.createElementVNode, np = window.Vue.withDirectives, P4 = window.Vue.unref, B4 = window.Vue.withCtx, F4 = window.Vue.openBlock, N4 = window.Vue.createBlock, M4 = {
  href: "",
  target: "_blank"
}, U4 = window.Codex.CdxDialog, I4 = {
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
      const d = D4("i18n");
      return F4(), N4(P4(U4), {
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
        default: B4(() => [
          np(tp("p", null, null, 512), [
            [d, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          np(tp("a", M4, null, 512), [
            [d, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
}, R4 = () => {
  const {
    sectionURLParameter: e,
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = P(), { loadSuggestion: s } = Ma();
  return () => b(void 0, null, function* () {
    const a = yield s(
      t.value,
      n.value,
      o.value
    );
    return a instanceof on ? a.sourceSections.includes(e.value) : !1;
  });
};
const ye = window.Vue.unref, z4 = window.Vue.resolveDirective, qs = window.Vue.createElementVNode, op = window.Vue.withDirectives, Gs = window.Vue.openBlock, rc = window.Vue.createElementBlock, lc = window.Vue.createCommentVNode, St = window.Vue.createVNode, Mt = window.Vue.withCtx, cc = window.Vue.toDisplayString, uc = window.Vue.createTextVNode, O4 = window.Vue.withModifiers, sp = window.Vue.createBlock, j4 = window.Vue.Fragment, H4 = { class: "sx-translation-confirmer-body pb-4" }, q4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, G4 = ["innerHTML"], W4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, X4 = ["href"], K4 = ["innerHTML"], Li = window.Vue.computed, dc = window.Vue.ref, Y4 = window.Vue.watchEffect, gc = window.Codex.CdxButton, Q4 = window.Codex.CdxIcon, J4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = nt(), { sectionSuggestion: o } = Le(), { targetLanguageURLParameter: s } = P(), a = Li(() => q.getAutonym(s.value)), { sectionURLParameter: r, clearSectionURLParameter: l } = P(), { logDashboardTranslationStartEvent: c } = gd(), u = ws(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: d } = A4(), g = dc(!1), m = dc(null), p = () => b(this, null, function* () {
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
      yield p(), !g.value && (c(), u());
    }), f = () => b(this, null, function* () {
      yield p(), !g.value && i();
    }), w = t;
    Y4(() => {
      d.value && (w("open-translation-confirmation-dialog"), d.value = !1);
    });
    const {
      actionInformationMessage: v,
      getActionButtonLabel: x,
      isProgressiveButton: y,
      targetArticlePath: _
    } = r4(), V = fe(), E = Li(
      () => V.i18n(x(!!r.value))
    ), N = () => b(this, null, function* () {
      yield p(), !g.value && n.push({ name: "sx-section-selector" });
    }), C = Li(() => {
      var ee, ne;
      return r.value && !!((ne = (ee = o.value) == null ? void 0 : ee.sourceSections) != null && ne.length);
    }), { targetPageExists: D } = cn(), R = Li(() => !r.value && D.value && qt), X = R4(), ae = dc(!1);
    return X().then((ee) => {
      ee || l(), ae.value = !0;
    }), (ee, ne) => {
      const B = z4("i18n");
      return Gs(), rc(j4, null, [
        qs("section", H4, [
          ye(r) && ae.value ? (Gs(), rc("section", q4, [
            op(qs("h6", null, null, 512), [
              [B, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            qs("h5", {
              class: "ma-0",
              innerHTML: ye(r)
            }, null, 8, G4)
          ])) : ye(D) && !ye(r) ? (Gs(), rc("section", W4, [
            St(ye(I), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Mt(() => [
                op(St(ye(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [B, [a.value], "cx-sx-existing-translation-status"]
                ]),
                St(ye(k), { shrink: "" }, {
                  default: Mt(() => [
                    qs("a", {
                      href: ye(_),
                      target: "_blank"
                    }, [
                      St(ye(Q4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: ye(Na)
                      }, null, 8, ["icon"])
                    ], 8, X4)
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
                    qs("span", { innerHTML: ye(v) }, null, 8, K4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : lc("", !0),
          St(ye(I), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Mt(() => [
              C.value ? (Gs(), sp(ye(k), {
                key: 0,
                shrink: ""
              }, {
                default: Mt(() => [
                  St(ye(gc), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: O4(N, ["stop"])
                  }, {
                    default: Mt(() => [
                      uc(cc(ee.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : lc("", !0),
              R.value ? (Gs(), sp(ye(k), {
                key: 1,
                shrink: ""
              }, {
                default: Mt(() => [
                  St(ye(gc), {
                    size: "large",
                    onClick: h
                  }, {
                    default: Mt(() => [
                      uc(cc(ee.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : lc("", !0),
              St(ye(k), { shrink: "" }, {
                default: Mt(() => [
                  St(ye(gc), {
                    weight: "primary",
                    size: "large",
                    action: ye(y) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: Mt(() => [
                      uc(cc(E.value), 1)
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
        St(I4, {
          modelValue: g.value,
          "onUpdate:modelValue": ne[0] || (ne[0] = (z) => g.value = z),
          "target-url": m.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Ti = window.Vue.unref, Z4 = window.Vue.openBlock, eL = window.Vue.createBlock, tL = window.Vue.computed, Qw = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t } = Pa(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = P(), { currentLanguageTitleGroup: s } = cn(), a = tL(
      () => {
        var u;
        return ((u = s.value) == null ? void 0 : u.titles.map((i) => i.lang)) || [];
      }
    ), r = rx(), l = (u) => r(u, o.value), c = (u) => r(n.value, u);
    return (u, i) => (Z4(), eL(Cr, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": Ti(t),
      "selected-source-language": Ti(n),
      "selected-target-language": Ti(o),
      disabled: !Ti(s),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": c
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language", "disabled"]));
  }
}, nL = (e) => {
  const s = e / 5 / 15;
  return Math.ceil(s);
};
const Fe = window.Vue.unref, mc = window.Vue.toDisplayString, On = window.Vue.createElementVNode, Qt = window.Vue.createVNode, Oo = window.Vue.withCtx, oL = window.Vue.resolveDirective, sL = window.Vue.withDirectives, aL = window.Vue.normalizeClass, ap = window.Vue.openBlock, iL = window.Vue.createElementBlock, rL = window.Vue.createCommentVNode, lL = window.Vue.createBlock, cL = ["textContent"], uL = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, dL = ["textContent"], gL = { class: "pe-3" }, mL = ["textContent"], pL = window.Codex.CdxButton, Ws = window.Codex.CdxIcon, jn = window.Vue.computed, hL = window.Vuex.useStore, fL = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = hL(), { currentSourcePage: n } = ot(), { sectionSuggestion: o } = Le(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l
    } = P(), c = jn(() => t.state.suggestions.favorites || []), u = jn(
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
      () => u.value ? Zf : ew
    ), h = jn(
      () => u.value ? m : g
    ), f = jn(
      () => Q.getPageUrl(s.value || "", r.value || "")
    ), w = jn(
      () => {
        var N;
        return mw.language.convertNumber((((N = n.value) == null ? void 0 : N.langLinksCount) || 0) + 1);
      }
    ), v = (N) => {
      const C = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let D = 0; D < C.length; D++)
        if (N >= C[D].value)
          return mw.language.convertNumber(
            Number((N / C[D].value).toFixed(1).replace(/\.0$/, ""))
          ) + C[D].suffix;
      return mw.language.convertNumber(N);
    }, x = jn(() => {
      var C;
      const N = Object.values(((C = n.value) == null ? void 0 : C.pageviews) || {}).reduce(
        (D, R) => D + R,
        0
      );
      return v(N);
    }), { isQuickTranslation: y, sizeInBytes: _ } = Yw(), V = fe(), E = jn(() => {
      if (!o.value && !n.value || !_.value)
        return "";
      const N = nL(_.value), C = N >= 60 ? N / 60 : 0, D = Math.round(C * 2) / 2, R = mw.language.convertNumber(D), X = mw.language.convertNumber(N);
      if (!o.value && qt)
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
    return (N, C) => {
      const D = oL("i18n");
      return ap(), lL(Fe(I), {
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
                      }, null, 8, cL),
                      Qt(Fe(Ws), {
                        size: "x-small",
                        icon: Fe(Na)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Qt(Fe(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Oo(() => [
                      Qt(Fe(pL), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
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
              On("div", uL, [
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
                    }, null, 8, dL)
                  ]),
                  On("span", null, [
                    Qt(Fe(Ws), {
                      icon: Fe(tw),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    sL(On("span", gL, null, 512), [
                      [D, [x.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                E.value ? (ap(), iL("span", {
                  key: 0,
                  class: aL(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Fe(y)
                  }])
                }, [
                  Qt(Fe(Ws), {
                    icon: Fe(TC),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  On("span", {
                    textContent: mc(E.value)
                  }, null, 8, mL)
                ], 2)) : rL("", !0)
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
const wL = window.Vue.resolveDirective, wo = window.Vue.createElementVNode, Ai = window.Vue.withDirectives, vL = window.Vue.toDisplayString, _L = window.Vue.createTextVNode, pc = window.Vue.unref, hc = window.Vue.withCtx, fc = window.Vue.openBlock, wc = window.Vue.createBlock;
window.Vue.createCommentVNode;
const SL = { class: "pa-4" }, yL = { class: "flex pt-2" }, CL = window.Codex.CdxButton, xL = window.Vue.ref, bL = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = ws(), a = md(), r = xL(!1), { currentTranslation: l } = Xt(), c = () => b(this, null, function* () {
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
      const d = wL("i18n");
      return fc(), wc(pc(Vt), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: hc(() => [
          wo("div", yL, [
            r.value ? (fc(), wc(pc(mt), { key: 1 })) : (fc(), wc(pc(CL), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: hc(() => [
                _L(vL(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: hc(() => [
          wo("div", SL, [
            Ai(wo("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Ai(wo("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            wo("p", null, [
              Ai(wo("strong", null, null, 512), [
                [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Ai(wo("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
};
const ip = window.Vue.unref, kL = window.Vue.createVNode, rp = window.Vue.toDisplayString, Di = window.Vue.createElementVNode, $L = window.Vue.openBlock, VL = window.Vue.createElementBlock, EL = { class: "cx-translation-confirmer-featured-collection-banner ma-4 px-4 py-3" }, LL = { class: "cx-translation-confirmer-featured-collection-banner__header" }, TL = { class: "cx-translation-confirmer-featured-collection-banner__header-text" }, AL = { class: "cx-translation-confirmer-featured-collection-banner__body" }, DL = window.Vue.computed, PL = window.Codex.CdxIcon, BL = {
  __name: "SXTranslationConfirmerFeaturedCollectionBanner",
  setup(e) {
    const { featuredCollection: t } = Wt(), n = DL(() => {
      var o;
      return (o = t.value) == null ? void 0 : o.name;
    });
    return (o, s) => ($L(), VL("div", EL, [
      Di("div", LL, [
        kL(ip(PL), {
          icon: ip(od),
          size: "small",
          class: "cx-translation-confirmer-featured-collection-banner__header-icon me-2"
        }, null, 8, ["icon"]),
        Di("span", TL, rp(o.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      Di("div", AL, [
        Di("p", null, rp(n.value), 1)
      ])
    ]));
  }
}, FL = window.Vuex.useStore, Xs = {}, Jw = () => {
  const e = FL();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) ? Promise.resolve() : (Xs[o] || (Xs[o] = gs.fetchLanguageTitles(t, n).then((s) => {
      delete Xs[o], s && e.commit("mediawiki/addLanguageTitleGroup", s);
    })), Xs[o]);
  };
}, NL = window.Vue.ref, jo = NL(null), Zw = () => {
  const e = () => b(void 0, null, function* () {
    var n, o;
    jo.value || (yield Ar.fetchCXServerToken().then((s) => {
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
const lp = window.Vue.resolveDirective, Pi = window.Vue.createElementVNode, cp = window.Vue.withDirectives, Hn = window.Vue.unref, Bi = window.Vue.withCtx, Sn = window.Vue.createVNode, Fi = window.Vue.openBlock, up = window.Vue.createElementBlock, ML = window.Vue.createCommentVNode, dp = window.Vue.createBlock, UL = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, IL = { class: "mb-0" }, RL = { class: "sx-translation-confirmer__article-image flex justify-center" }, zL = ["src"], OL = { class: "ma-3" }, gp = window.Vue.computed, jL = window.Vue.inject, HL = window.Vue.onBeforeUnmount, mp = window.Vue.ref, qL = window.Vue.watch, GL = window.Vuex.useStore, WL = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = GL(), { currentSourcePage: n } = ot(), { previousRoute: o } = tt(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      clearTranslationURLParameters: l
    } = P(), { inFeaturedCollection: c } = sd(), u = jL("breakpoints"), i = gp(() => u.value.nextBreakpoint), d = gp(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(i.value);
      }
    ), g = mp(!1);
    qL(
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
    const { fetchTranslationsByStatus: m } = fs(), p = Jw();
    m("draft"), p(s.value, r.value), dd(), Zw()(), aw()(a.value);
    const w = nt(), v = () => {
      const y = ["dashboard", "sx-article-search"];
      !o.value || !y.includes(o.value) ? w.push({ name: "dashboard" }) : w.push({ name: o.value });
    };
    HL(() => {
      const y = w.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && l();
    });
    const x = mp(!1);
    return (y, _) => {
      const V = lp("i18n"), E = lp("i18n-html");
      return Fi(), up("section", UL, [
        Sn(Hn(I), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Bi(() => [
            Sn(Hn(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Bi(() => [
                cp(Pi("h5", IL, null, 512), [
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
              default: Bi(() => [
                Sn(Hn(Xe), {
                  class: "pa-0",
                  type: "icon",
                  icon: Hn(kr),
                  "icon-size": 20,
                  onClick: v
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Pi("div", RL, [
          d.value ? (Fi(), up("img", {
            key: 0,
            src: d.value
          }, null, 8, zL)) : (Fi(), dp(Hn(Ze), {
            key: 1,
            size: "120",
            icon: Hn(_f),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Sn(fL),
        g.value ? (Fi(), dp(BL, { key: 0 })) : ML("", !0),
        Sn(Qw),
        Sn(J4, {
          onOpenTranslationConfirmationDialog: _[0] || (_[0] = (N) => x.value = !0)
        }),
        Sn(Hn(I), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Bi(() => [
            Pi("p", OL, [
              cp(Pi("small", null, null, 512), [
                [E, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Sn(bL, {
          modelValue: x.value,
          "onUpdate:modelValue": _[1] || (_[1] = (N) => x.value = N)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const XL = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: WL
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, KL = window.Vue.resolveComponent, YL = window.Vue.createVNode, QL = window.Vue.normalizeClass, JL = window.Vue.openBlock, ZL = window.Vue.createElementBlock;
function e3(e, t, n, o, s, a) {
  const r = KL("sx-translation-confirmer");
  return JL(), ZL("main", {
    class: QL(["sx-translation-confirmer-view", a.classes])
  }, [
    YL(r)
  ], 2);
}
const t3 = /* @__PURE__ */ he(XL, [["render", e3]]);
const n3 = window.Vue.toDisplayString, pp = window.Vue.unref, o3 = window.Vue.createVNode, s3 = window.Vue.createTextVNode, a3 = window.Vue.createElementVNode, i3 = window.Vue.openBlock, r3 = window.Vue.createElementBlock, l3 = { class: "sx-section-selector-view-article-item" }, c3 = ["href"], u3 = window.Codex.CdxIcon, hp = {
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
    return (t, n) => (i3(), r3("span", l3, [
      a3("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        s3(n3(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        o3(pp(u3), {
          size: "x-small",
          icon: pp(Na)
        }, null, 8, ["icon"])
      ], 8, c3)
    ]));
  }
};
const d3 = window.Vue.resolveDirective, Ni = window.Vue.createElementVNode, vc = window.Vue.withDirectives, vo = window.Vue.unref, g3 = window.Vue.toDisplayString, Mi = window.Vue.withCtx, Ks = window.Vue.createVNode, m3 = window.Vue.openBlock, p3 = window.Vue.createElementBlock, h3 = { class: "sx-section-selector__header pa-4" }, f3 = { class: "sx-section-selector__header-text ma-0" }, w3 = ["textContent"], v3 = { class: "pt-0 ma-0" }, _3 = { class: "ma-0" }, S3 = window.Codex.CdxButton, y3 = window.Codex.CdxIcon, C3 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Le();
    return (n, o) => {
      const s = d3("i18n");
      return m3(), p3("div", h3, [
        Ks(vo(I), { class: "ma-0 pb-3" }, {
          default: Mi(() => [
            Ks(vo(k), null, {
              default: Mi(() => {
                var a;
                return [
                  vc(Ni("h6", f3, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Ni("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: g3((a = vo(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, w3)
                ];
              }),
              _: 1
            }),
            Ks(vo(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Mi(() => [
                Ks(vo(S3), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Mi(() => [
                    Ks(vo(y3), { icon: vo(ps) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vc(Ni("h4", v3, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        vc(Ni("p", _3, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, fp = window.Vue.renderSlot, x3 = window.Vue.renderList, b3 = window.Vue.Fragment, _c = window.Vue.openBlock, wp = window.Vue.createElementBlock, Ui = window.Vue.unref, vp = window.Vue.createVNode, _p = window.Vue.withCtx, k3 = window.Vue.createBlock, $3 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, V3 = window.Codex.CdxButton, E3 = window.Codex.CdxIcon, ev = {
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
    return (t, n) => (_c(), wp("ul", $3, [
      fp(t.$slots, "before-list"),
      (_c(!0), wp(b3, null, x3(e.sections, (o) => (_c(), k3(Ui(I), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: _p(() => [
          vp(Ui(V3), {
            weight: "quiet",
            class: "col justify-start items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: _p(() => [
              fp(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle,
                isEasy: o.isEasy
              }),
              vp(Ui(E3), {
                icon: Ui(hs),
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
}, L3 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const T3 = window.Vue.resolveDirective, Ii = window.Vue.createElementVNode, Ri = window.Vue.withDirectives, Ut = window.Vue.unref, zi = window.Vue.openBlock, Sc = window.Vue.createBlock, A3 = window.Vue.createCommentVNode, Ho = window.Vue.withCtx, Ys = window.Vue.createVNode, D3 = window.Vue.toDisplayString, P3 = window.Vue.createTextVNode, B3 = window.Vue.createElementBlock, F3 = { class: "sx-section-selector__missing-sections py-2" }, N3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, M3 = ["lang", "dir", "innerHTML"], yc = window.Vue.computed, U3 = window.Codex.CdxButton, I3 = window.Codex.CdxInfoChip, R3 = {
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
      return (r = t.value) != null && r.orderedMissingSections ? t.value.orderedMissingSections.map((l) => Ke(me({}, l), {
        isEasy: qf(
          t.value.getSectionSize(l.sourceTitle)
        )
      })) : [];
    });
    return (r, l) => {
      const c = T3("i18n");
      return zi(), B3("section", F3, [
        Ri(Ii("h4", N3, null, 512), [
          [c, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (zi(), Sc(Ut(I), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Ho(() => [
            Ys(Ut(k), {
              class: "py-6 justify-center",
              innerHTML: Ut(L3)
            }, null, 8, ["innerHTML"]),
            Ys(Ut(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Ho(() => [
                Ri(Ii("h6", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Ys(Ut(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Ho(() => [
                Ri(Ii("p", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Ys(Ut(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Ho(() => [
                Ys(Ut(U3), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: l[1] || (l[1] = (u) => r.$emit("close"))
                }, {
                  default: Ho(() => [
                    P3(D3(r.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (zi(), Sc(ev, {
          key: 0,
          sections: a.value,
          onSelectSection: l[0] || (l[0] = (u) => r.$emit("select-section", u))
        }, {
          default: Ho(({ sourceSection: u, isEasy: i }) => {
            var d, g;
            return [
              Ii("h5", {
                class: "ma-0",
                lang: (d = Ut(t)) == null ? void 0 : d.sourceLanguage,
                dir: Ut(q.getDir)((g = Ut(t)) == null ? void 0 : g.sourceLanguage),
                innerHTML: u
              }, null, 8, M3),
              i ? Ri((zi(), Sc(Ut(I3), {
                key: 0,
                class: "sx-section-selector__easy-section-badge"
              }, null, 512)), [
                [c, void 0, "cx-sx-section-selector-easy-section-badge"]
              ]) : A3("", !0)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const z3 = window.Vue.resolveDirective, qo = window.Vue.createElementVNode, O3 = window.Vue.withDirectives, yt = window.Vue.unref, j3 = window.Vue.toDisplayString, Oi = window.Vue.createVNode, ji = window.Vue.withCtx, H3 = window.Vue.openBlock, q3 = window.Vue.createElementBlock, G3 = { class: "sx-section-selector__present-sections py-2" }, W3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, X3 = { class: "sx-section-selector__present-section-button-content" }, K3 = ["textContent"], Y3 = { class: "sx-section-selector__present-section-button-content" }, Q3 = ["lang", "dir", "innerHTML"], J3 = ["lang", "dir", "innerHTML"], Z3 = window.Vue.computed, e5 = window.Codex.CdxButton, t5 = window.Codex.CdxIcon, Sp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Le(), { targetLanguageURLParameter: n } = P(), o = Z3(() => q.getAutonym(n.value));
    return (s, a) => {
      var l;
      const r = z3("i18n");
      return H3(), q3("section", G3, [
        O3(qo("h4", W3, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        Oi(ev, {
          sections: ((l = yt(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[1] || (a[1] = (c) => s.$emit("select-section", c))
        }, {
          "before-list": ji(() => [
            Oi(yt(I), {
              tag: "li",
              class: "ma-0"
            }, {
              default: ji(() => [
                Oi(yt(e5), {
                  weight: "quiet",
                  class: "col justify-start items-center py-3 px-4",
                  "aria-label": s.$i18n("sx-section-selector-next-button-aria-label"),
                  onClick: a[0] || (a[0] = (c) => s.$emit("select-section", yt(no).LEAD_SECTION_DUMMY_TITLE))
                }, {
                  default: ji(() => [
                    qo("div", X3, [
                      qo("h5", {
                        class: "sx-section-selector__present-section-button-source",
                        textContent: j3(s.$i18n("cx-sx-present-lead-section-label"))
                      }, null, 8, K3)
                    ]),
                    Oi(yt(t5), {
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
          default: ji(({ sourceSection: c, targetSection: u }) => {
            var i, d, g, m;
            return [
              qo("div", Y3, [
                qo("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = yt(t)) == null ? void 0 : i.sourceLanguage,
                  dir: yt(q.getDir)((d = yt(t)) == null ? void 0 : d.sourceLanguage),
                  innerHTML: c
                }, null, 8, Q3),
                qo("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = yt(t)) == null ? void 0 : g.targetLanguage,
                  dir: yt(q.getDir)((m = yt(t)) == null ? void 0 : m.targetLanguage),
                  innerHTML: u
                }, null, 8, J3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Ue = window.Vue.createVNode, Cc = window.Vue.openBlock, yp = window.Vue.createBlock, Cp = window.Vue.createCommentVNode, n5 = window.Vue.resolveDirective, qn = window.Vue.createElementVNode, Qs = window.Vue.withDirectives, rt = window.Vue.unref, yn = window.Vue.withCtx, o5 = window.Vue.normalizeClass, xp = window.Vue.toDisplayString, bp = window.Vue.createTextVNode, s5 = window.Vue.createElementBlock, a5 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, i5 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, r5 = { class: "sx-section-selector__additional-consideration-title" }, l5 = { href: "#" }, c5 = { class: "sx-section-selector__additional-consideration-title" }, u5 = { href: "#" }, Js = window.Vue.computed, d5 = window.Vue.inject, g5 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = d5("breakpoints"), n = Js(() => t.value.desktopAndUp), { sectionSuggestion: o } = Le(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = P(), c = Js(() => q.getAutonym(s.value)), u = Js(() => q.getAutonym(a.value)), i = Js(
      () => {
        var x;
        return Q.getPageUrl(s.value, (x = o.value) == null ? void 0 : x.sourceTitle);
      }
    ), d = Js(
      () => {
        var x;
        return Q.getPageUrl(a.value, (x = o.value) == null ? void 0 : x.targetTitle);
      }
    ), g = nt(), m = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: p } = Xt(), h = ws(), f = md(), { selectPageSectionByTitle: w } = zr(), v = (x) => {
      l(x), p.value ? (f(), h()) : (w(x), g.push({ name: "sx-content-comparator" }));
    };
    return mw.cx.eventlogging.stats.selectSectionAccess(!n.value), (x, y) => {
      const _ = n5("i18n");
      return Cc(), s5("section", a5, [
        Ue(C3, { onClose: m }),
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
                Ue(R3, {
                  onSelectSection: v,
                  onClose: m
                }),
                n.value ? Cp("", !0) : (Cc(), yp(Sp, {
                  key: 0,
                  onSelectSection: v
                })),
                qn("section", {
                  class: o5(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Qs(qn("h4", i5, null, 512), [
                    [_, [
                      u.value
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
                          Ue(hp, {
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
                          Ue(hp, {
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
                        qn("h6", r5, [
                          Ue(rt(Ze), {
                            icon: rt(Y0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          bp(" " + xp(x.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Qs(qn("p", null, null, 512), [
                          [_, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Qs(qn("a", l5, null, 512), [
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
                        qn("h6", c5, [
                          Ue(rt(Ze), {
                            icon: rt(K0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          bp(" " + xp(x.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Qs(qn("p", null, null, 512), [
                          [_, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Qs(qn("a", u5, null, 512), [
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
            n.value ? (Cc(), yp(rt(k), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: yn(() => [
                Ue(Sp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: v
                })
              ]),
              _: 1
            })) : Cp("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, m5 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: g5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, p5 = window.Vue.resolveComponent, h5 = window.Vue.createVNode, f5 = window.Vue.normalizeClass, w5 = window.Vue.openBlock, v5 = window.Vue.createElementBlock;
function _5(e, t, n, o, s, a) {
  const r = p5("sx-section-selector");
  return w5(), v5("main", {
    class: f5(["sx-section-selector-view", a.classes])
  }, [
    h5(r)
  ], 2);
}
const S5 = /* @__PURE__ */ he(m5, [["render", _5]]), Hi = window.Vue.computed, y5 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = P(), n = Hi(
    () => q.getAutonym(e.value)
  ), o = Hi(
    () => q.getAutonym(t.value)
  ), { target: s, PUBLISHING_TARGETS: a } = Tt(), r = Hi(
    () => s.value === a.EXPAND
  ), l = fe();
  return Hi(() => {
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
const kp = window.Vue.unref, C5 = window.Vue.createVNode, x5 = window.Vue.openBlock, b5 = window.Vue.createElementBlock, k5 = { class: "sx-content-comparator__content-type-selector" }, $5 = window.Vue.watchEffect, V5 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = y5();
    return $5(() => {
      a.value.map((l) => l.value).includes(n.selection) || s(a.value[0].value);
    }), (r, l) => (x5(), b5("div", k5, [
      C5(kp(Ta), {
        items: kp(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, qi = window.Vue.computed, tv = () => {
  const { currentTargetPage: e } = ot(), { activeSectionTargetTitle: t } = Le(), n = qi(
    () => {
      var l;
      return (((l = o.value) == null ? void 0 : l.title) || "").replace(/ /g, "_");
    }
  ), o = qi(
    () => {
      var l;
      return (l = e.value) == null ? void 0 : l.getSectionByTitle(t.value);
    }
  ), { sourceSection: s } = se(), a = qi(() => {
    var l;
    return (l = s.value) == null ? void 0 : l.html;
  }), r = qi(() => {
    var l;
    return (l = o.value) == null ? void 0 : l.html;
  });
  return {
    sourceSectionContent: a,
    targetSectionAnchor: n,
    targetSectionContent: r
  };
};
const Gi = window.Vue.createVNode, Cn = window.Vue.unref, E5 = window.Vue.resolveDirective, L5 = window.Vue.withDirectives, Zs = window.Vue.openBlock, $p = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Wi = window.Vue.withCtx, xc = window.Vue.createBlock, T5 = window.Vue.normalizeClass, A5 = {
  key: 0,
  class: "ma-0 pa-0"
}, D5 = ["lang", "dir", "innerHTML"], Vp = window.Vue.ref, Xi = window.Vue.computed, P5 = window.Vue.onMounted, B5 = window.Vue.onBeforeUnmount, F5 = {
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
    const n = e, o = t, s = Vp(!1), { sectionSuggestion: a, activeSectionTargetTitle: r } = Le(), { isPresentLeadSection: l } = ht(), { sectionURLParameter: c } = P(), u = Xi(
      () => (g.value || "").replace(/ /g, "_")
    ), i = (w) => o("update:contentTypeSelection", w), { targetSectionAnchor: d } = tv(), g = Xi(
      () => {
        var w;
        return (((w = a.value) == null ? void 0 : w.sourceSections) || []).find(
          (v) => v === c.value
        );
      }
    ), m = Xi(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: g.value,
            path: `${Q.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${u.value}`,
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
            path: `${p.value}#${d.value}`
          };
      }
    }), p = Xi(
      () => Q.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), h = Vp(null);
    let f;
    return P5(() => {
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
    }), B5(() => {
      f == null || f.disconnect(), f = null;
    }), (w, v) => {
      const x = E5("i18n");
      return Zs(), xc(Cn(I), {
        ref_key: "contentHeader",
        ref: h,
        class: T5(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
        direction: "column",
        align: "stretch",
        reverse: s.value
      }, {
        default: Wi(() => [
          Gi(V5, {
            selection: e.contentTypeSelection,
            "onUpdate:selection": i
          }, null, 8, ["selection"]),
          Gi(Cn(I), {
            justify: "between",
            class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
          }, {
            default: Wi(() => [
              Gi(Cn(k), null, {
                default: Wi(() => [
                  Cn(l) ? L5((Zs(), $p("h3", A5, null, 512)), [
                    [x, void 0, "cx-sx-present-lead-section-label"]
                  ]) : (Zs(), $p("h3", {
                    key: 1,
                    lang: m.value.lang,
                    dir: m.value.dir,
                    class: "ma-0 pa-0",
                    innerHTML: m.value.title
                  }, null, 8, D5))
                ]),
                _: 1
              }),
              Gi(Cn(k), { shrink: "" }, {
                default: Wi(() => [
                  s.value ? (Zs(), xc(Cn(Xe), {
                    key: 0,
                    icon: Cn(br),
                    progressive: "",
                    label: w.$i18n(
                      "cx-sx-content-comparator-content-header-translate-button-label"
                    ),
                    onClick: v[0] || (v[0] = (y) => w.$emit("translation-button-clicked"))
                  }, null, 8, ["icon", "label"])) : (Zs(), xc(Cn(Xe), {
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
}, Ki = window.Vue.unref, Ep = window.Vue.createVNode, N5 = window.Vue.openBlock, M5 = window.Vue.createElementBlock, U5 = { class: "sx-content-comparator__header-navigation flex items-center" }, I5 = window.Vue.computed, R5 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = P(), o = I5(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = zr(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    };
    return (l, c) => (N5(), M5("div", U5, [
      Ep(Ki(Xe), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Ki(q0),
        onClick: a
      }, null, 8, ["icon"]),
      Ep(Ki(Xe), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Ki(H0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const Lp = window.Vue.toDisplayString, we = window.Vue.unref, z5 = window.Vue.resolveDirective, Yi = window.Vue.withDirectives, xn = window.Vue.openBlock, Go = window.Vue.createElementBlock, bc = window.Vue.createCommentVNode, O5 = window.Vue.createTextVNode, j5 = window.Vue.createElementVNode, H5 = window.Vue.normalizeClass, kc = window.Vue.withCtx, Tp = window.Vue.createVNode, $c = window.Vue.createBlock, q5 = { class: "sx-content-comparator-header__mapped-section" }, G5 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, W5 = { key: 0 }, X5 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, K5 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Y5 = {
  key: 2,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Q5 = window.Vue.computed, J5 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = P(), { activeSectionTargetTitle: n } = Le(), o = fe(), { target: s, PUBLISHING_TARGETS: a, setTarget: r } = Tt(), l = Q5(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        q.getAutonym(t.value)
      )
    ), { isPresentLeadSection: c } = ht();
    return (u, i) => {
      const d = z5("i18n");
      return xn(), Go("div", q5, [
        Tp(we(I), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: kc(() => [
            Tp(we(k), { grow: "" }, {
              default: kc(() => [
                j5("h6", G5, [
                  O5(Lp(l.value) + " ", 1),
                  we(s) === we(a).NEW_SECTION ? Yi((xn(), Go("span", W5, null, 512)), [
                    [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : bc("", !0)
                ]),
                we(c) ? bc("", !0) : (xn(), Go("h6", {
                  key: 0,
                  class: H5(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": we(s) === we(a).NEW_SECTION
                  }])
                }, Lp(we(n)), 3))
              ]),
              _: 1
            }),
            we(c) ? bc("", !0) : (xn(), $c(we(k), {
              key: 0,
              shrink: ""
            }, {
              default: kc(() => [
                we(s) === we(a).EXPAND ? (xn(), $c(we(Xe), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: we(wf),
                  type: "icon",
                  onClick: i[0] || (i[0] = (g) => we(r)(we(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (xn(), $c(we(Xe), {
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
        we(c) ? Yi((xn(), Go("p", X5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-lead-section-clarifications"]
        ]) : we(s) === we(a).EXPAND ? Yi((xn(), Go("p", K5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : Yi((xn(), Go("p", Y5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const De = window.Vue.unref, Wo = window.Vue.createVNode, Z5 = window.Vue.toDisplayString, Gn = window.Vue.createElementVNode, eT = window.Vue.resolveDirective, Vc = window.Vue.withDirectives, ea = window.Vue.openBlock, Ec = window.Vue.createElementBlock, Ap = window.Vue.createCommentVNode, Lc = window.Vue.withCtx, Dp = window.Vue.createBlock, tT = { class: "sx-content-comparator__header pa-4" }, nT = { class: "row my-1 py-2 mx-0 gap-6" }, oT = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, sT = { class: "sx-content-comparator-header__titles shrink" }, aT = ["lang", "dir"], iT = {
  key: 0,
  class: "sx-content-comparator-header__section-title pa-0 ma-0"
}, rT = ["lang", "dir", "innerHTML"], lT = { class: "py-2 mb-1" }, Qi = window.Vue.computed, cT = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = P(), { sourceSection: n } = se(), { sectionSuggestion: o } = Le(), { isCurrentSectionPresent: s } = ht(), a = Qi(
      () => {
        var u;
        return (u = o.value) == null ? void 0 : u.missingSections.hasOwnProperty(t.value);
      }
    ), r = Qi(() => {
      var u;
      return (u = n.value) == null ? void 0 : u.html;
    }), l = Qi(() => [
      no.LEAD_SECTION_DUMMY_TITLE,
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), c = Qi(
      () => {
        var u;
        return (((u = o.value) == null ? void 0 : u.sourceSections) || []).find(
          (i) => i === t.value
        );
      }
    );
    return (u, i) => {
      var g;
      const d = eT("i18n");
      return ea(), Ec("div", tT, [
        Wo(De(Xe), {
          class: "py-2 pa-0",
          icon: De(G0),
          label: u.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (m) => u.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Gn("div", nT, [
          Gn("div", oT, [
            Gn("div", sT, [
              Gn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: De(o).sourceLanguage,
                dir: De(q.getDir)(De(o).sourceLanguage)
              }, Z5(De(o).sourceTitle), 9, aT),
              (g = De(n)) != null && g.isLeadSection ? Vc((ea(), Ec("h2", iT, null, 512)), [
                [d, void 0, "cx-sx-present-lead-section-label"]
              ]) : (ea(), Ec("h2", {
                key: 1,
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: De(o).sourceLanguage,
                dir: De(q.getDir)(De(o).sourceLanguage),
                innerHTML: c.value
              }, null, 8, rT))
            ]),
            Wo(R5, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          Gn("div", lT, [
            Wo(De(Xe), {
              class: "sx-content-comparator-header__translation-button",
              icon: De(br),
              progressive: "",
              label: u.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (m) => u.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (ea(), Dp(De(I), {
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
                Wo(De(Ze), { icon: De(Q0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Wo(De(k), { class: "ma-0" }, {
              default: Lc(() => [
                Vc(Gn("strong", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                i[2] || (i[2] = Gn("br", null, null, -1)),
                Vc(Gn("span", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Ap("", !0),
        De(s) ? (ea(), Dp(J5, { key: 1 })) : Ap("", !0)
      ]);
    };
  }
};
const Pp = window.Vue.toDisplayString, uT = window.Vue.createElementVNode, Bp = window.Vue.openBlock, Fp = window.Vue.createElementBlock, dT = window.Vue.createCommentVNode, gT = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, mT = ["textContent"], pT = ["textContent"], nv = {
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
    return (t, n) => (Bp(), Fp("section", gT, [
      uT("h5", {
        textContent: Pp(e.placeholderTitle)
      }, null, 8, mT),
      e.placeholderSubtitle ? (Bp(), Fp("p", {
        key: 0,
        textContent: Pp(e.placeholderSubtitle)
      }, null, 8, pT)) : dT("", !0)
    ]));
  }
}, hT = (e, t, n) => {
  const o = t.indexOf(e);
  return t.slice(o + 1).map((a) => n[a]).filter(Boolean)[0] || null;
}, fT = ({
  sourceSectionTitle: e,
  sourceSectionTitles: t,
  targetSectionTitles: n,
  presentSectionMappings: o,
  targetAppendixSectionTitles: s
}) => {
  const a = hT(
    e,
    t,
    o
  );
  return a !== null ? a : n.find(
    (l) => s.includes(l)
  ) || null;
}, Tc = window.Vue.computed, wT = window.Vue.createApp, vT = window.Vuex.useStore, _T = () => {
  const e = vT(), { sectionSuggestion: t } = Le(), { currentTargetPage: n } = ot(), { sectionURLParameter: o } = P(), s = fe(), a = () => wT(
    nv,
    {
      placeholderTitle: s.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, r = Tc(() => {
    const { appendixSectionTitles: u } = e.state.suggestions;
    return u[t.value.targetLanguage] || [];
  }), l = Tc(
    () => fT({
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
  return Tc(() => {
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
const Ac = window.Vue.createVNode, lt = window.Vue.unref, Xo = window.Vue.openBlock, Np = window.Vue.createBlock, Mp = window.Vue.createCommentVNode, Ji = window.Vue.createElementVNode, Dc = window.Vue.Fragment, Zi = window.Vue.createElementBlock, ST = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, yT = { class: "sx-content-comparator__source-content" }, CT = ["lang", "dir", "innerHTML"], xT = ["lang", "dir", "innerHTML"], bT = ["innerHTML"], kT = window.Vue.ref, Up = window.Vue.computed, Ip = window.Vue.watch, $T = window.Vue.inject, VT = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = Tt(), n = nt(), o = kT("source_section"), { logDashboardTranslationStartEvent: s } = gd(), a = ws(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      s(), a();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = P(), { sourceSectionContent: i, targetSectionContent: d } = tv(), g = _T(), { sectionSuggestion: m } = Le(), { isCurrentSectionPresent: p } = ht(), h = Up(() => m.value.targetTitle), f = Kw();
    Ip(
      h,
      () => b(this, null, function* () {
        try {
          yield f(
            u.value,
            c.value,
            h.value
          );
        } catch (x) {
          throw mw.cx.eventlogging.stats.sourceArticleFetchFailed(!0), x;
        }
      }),
      { immediate: !0 }
    ), Ip(p, t, { immediate: !0 });
    const w = $T("breakpoints"), v = Up(() => w.value.mobile);
    return mw.cx.eventlogging.stats.sectionCompareAccess(v.value), (x, y) => (Xo(), Zi("section", ST, [
      Ac(cT, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      Ac(F5, {
        "content-type-selection": o.value,
        "onUpdate:contentTypeSelection": y[0] || (y[0] = (_) => o.value = _),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      Ji("section", yT, [
        o.value === "source_section" ? (Xo(), Zi(Dc, { key: 0 }, [
          lt(i) ? Mp("", !0) : (Xo(), Np(lt(mt), { key: 0 })),
          Ji("section", {
            lang: lt(c),
            dir: lt(q.getDir)(lt(c)),
            class: "pt-2 px-4",
            innerHTML: lt(i)
          }, null, 8, CT)
        ], 64)) : o.value === "target_article" ? (Xo(), Zi(Dc, { key: 1 }, [
          lt(g) ? Mp("", !0) : (Xo(), Np(lt(mt), { key: 0 })),
          Ji("article", {
            lang: lt(u),
            dir: lt(q.getDir)(lt(u)),
            class: "px-4",
            innerHTML: lt(g)
          }, null, 8, xT)
        ], 64)) : (Xo(), Zi(Dc, { key: 2 }, [
          Ji("section", {
            class: "pa-4",
            innerHTML: lt(d)
          }, null, 8, bT),
          Ac(nv, {
            class: "sx-content-comparator__new-section-placeholder--present",
            "placeholder-title": x.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
            "placeholder-subtitle": x.$i18n(
              "cx-sx-content-comparator-present-section-placeholder-subtitle"
            )
          }, null, 8, ["placeholder-title", "placeholder-subtitle"])
        ], 64))
      ])
    ]));
  }
}, ET = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: VT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, LT = window.Vue.resolveComponent, TT = window.Vue.createVNode, AT = window.Vue.normalizeClass, DT = window.Vue.openBlock, PT = window.Vue.createElementBlock;
function BT(e, t, n, o, s, a) {
  const r = LT("sx-content-comparator");
  return DT(), PT("main", {
    class: AT(["sx-content-comparator-view", a.classes])
  }, [
    TT(r)
  ], 2);
}
const FT = /* @__PURE__ */ he(ET, [["render", BT]]);
const NT = window.Vue.resolveDirective, ta = window.Vue.createElementVNode, Rp = window.Vue.withDirectives, er = window.Vue.unref, Pc = window.Vue.createVNode, zp = window.Vue.toDisplayString, Op = window.Vue.createTextVNode, na = window.Vue.withCtx, MT = window.Vue.openBlock, UT = window.Vue.createBlock, IT = { class: "mw-ui-dialog__header px-4 py-3" }, RT = { class: "mw-ui-dialog__header-title" }, zT = { class: "pa-4" }, OT = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, jp = window.Codex.CdxButton, jT = {
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
      const c = NT("i18n");
      return MT(), UT(er(Vt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: na(() => [
          ta("div", IT, [
            Rp(ta("span", RT, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: na(() => [
          ta("div", OT, [
            Pc(er(jp), {
              weight: "quiet",
              onClick: s
            }, {
              default: na(() => [
                Op(zp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Pc(er(jp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: na(() => [
                Op(zp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: na(() => [
          Pc(er(xr)),
          ta("div", zT, [
            Rp(ta("span", null, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, HT = (e, t, n) => {
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
}, ov = (e, t, n) => {
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
}, qT = window.Vuex.useStore, pd = () => {
  const e = qT(), { sourceSection: t } = se(), { getCurrentTitleByLanguage: n } = cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = P(), a = Zw(), r = (i, d, g) => {
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
    ), p = (yield HT(
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
}, GT = window.Vuex.useStore, WT = () => {
  const { sourceSection: e } = se(), t = GT(), { translateTranslationUnitById: n } = pd();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function XT(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const KT = window.Vue.resolveDirective, ct = window.Vue.createElementVNode, tr = window.Vue.withDirectives, Oe = window.Vue.unref, Bc = window.Vue.createVNode, bn = window.Vue.withCtx, YT = window.Vue.renderList, QT = window.Vue.Fragment, nr = window.Vue.openBlock, JT = window.Vue.createElementBlock, ZT = window.Vue.toDisplayString, Fc = window.Vue.createBlock, Hp = window.Vue.createCommentVNode, eA = { class: "mw-ui-dialog__header pa-4" }, tA = { class: "row ma-0 py-2" }, nA = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, oA = { class: "mb-0" }, sA = { class: "col shrink justify-center" }, aA = { class: "pb-2 mb-0" }, iA = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, rA = ["dir", "lang", "innerHTML"], lA = ["textContent"], cA = ["innerHTML"], uA = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, dA = ["innerHTML"], Nc = window.Vue.computed, gA = window.Vuex.useStore, mA = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = le.EMPTY_TEXT_PROVIDER_KEY, s = le.ORIGINAL_TEXT_PROVIDER_KEY, a = gA(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: c
    } = se(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: i
    } = P(), d = Nc(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        u.value,
        i.value
      )
    ), g = Nc(() => {
      const y = [s, o];
      return d.value.filter(
        (_) => !y.includes(_)
      );
    }), m = Nc(
      () => l.value ? r.value.proposedTitleTranslations : c.value.proposedTranslations
    ), p = WT(), h = (y) => {
      p(y), w();
    }, f = le.getMTProviderLabel, w = () => n("update:active", !1), v = fe(), x = XT(
      v.i18n("cx-tools-mt-noservices")
    );
    return (y, _) => {
      const V = KT("i18n");
      return e.active ? (nr(), Fc(Oe(Vt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: bn(() => [
          ct("div", eA, [
            ct("div", tA, [
              ct("div", nA, [
                tr(ct("h4", oA, null, 512), [
                  [V, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              ct("div", sA, [
                Bc(Oe(Xe), {
                  type: "icon",
                  icon: Oe(kr),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            tr(ct("h6", aA, null, 512), [
              [V, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: bn(() => [
          Bc(Oe(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: _[0] || (_[0] = (E) => h(Oe(s)))
          }, {
            header: bn(() => [
              tr(ct("h5", iA, null, 512), [
                [V, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: bn(() => [
              ct("p", {
                dir: Oe(q.getDir)(Oe(u)),
                lang: Oe(u),
                innerHTML: m.value[Oe(s)]
              }, null, 8, rA)
            ]),
            _: 1
          }),
          (nr(!0), JT(QT, null, YT(g.value, (E) => (nr(), Fc(Oe(Je), {
            key: E,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (N) => h(E)
          }, {
            header: bn(() => [
              ct("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: ZT(Oe(f)(E))
              }, null, 8, lA)
            ]),
            default: bn(() => [
              ct("p", {
                innerHTML: m.value[E]
              }, null, 8, cA)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Bc(Oe(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: _[1] || (_[1] = (E) => h(Oe(o)))
          }, {
            header: bn(() => [
              tr(ct("h5", uA, null, 512), [
                [V, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: bn(() => [
              _[2] || (_[2] = ct("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1))
            ]),
            _: 1
          }),
          g.value.length ? Hp("", !0) : (nr(), Fc(Oe(Je), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: bn(() => [
              ct("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: Oe(x)
              }, null, 8, dA)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Hp("", !0);
    };
  }
}, pA = window.Vuex.useStore, vs = () => {
  const { sourceSection: e } = se(), t = pA(), { translateTranslationUnitById: n } = pd(), { currentMTProvider: o } = tt(t), s = (l) => b(void 0, null, function* () {
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
const qp = window.Vue.toDisplayString, Mc = window.Vue.createElementVNode, or = window.Vue.unref, hA = window.Vue.createVNode, fA = window.Vue.normalizeClass, wA = window.Vue.withCtx, vA = window.Vue.openBlock, _A = window.Vue.createBlock, SA = ["href"], yA = ["textContent"], CA = ["textContent"], _o = window.Vue.computed, Gp = "sx-sentence-selector__section-title", xA = {
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
    ), u = _o(
      () => Q.getPageUrl(a.value, l.value)
    ), i = _o(
      () => {
        var f;
        return !!((f = t.value) != null && f.translatedTitle);
      }
    ), d = _o(
      () => i.value ? "translated" : "selected"
    ), g = _o(() => {
      const f = [Gp];
      return n.value && !r.value && f.push(`${Gp}--${d.value}`), f;
    }), { selectTranslationUnitById: m } = vs(), p = () => m(0), h = _o(
      () => r.value ? s.value : c.value
    );
    return (f, w) => (vA(), _A(or(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: wA(() => [
        Mc("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Mc("strong", {
            textContent: qp(l.value)
          }, null, 8, yA),
          hA(or(Ze), {
            icon: or(vf),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, SA),
        Mc("h2", {
          class: fA(["pa-0 ma-0", g.value]),
          onClick: w[0] || (w[0] = (v) => or(r) ? p : null),
          textContent: qp(h.value)
        }, null, 10, CA)
      ]),
      _: 1
    }));
  }
};
const kn = window.Vue.unref, oa = window.Vue.createVNode, sr = window.Vue.withCtx, Wp = window.Vue.toDisplayString, Xp = window.Vue.createTextVNode, bA = window.Vue.openBlock, kA = window.Vue.createBlock, Kp = window.Vue.computed, Uc = window.Codex.CdxButton, Yp = window.Codex.CdxIcon, sv = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = se(), { isPresentLeadSection: s } = ht(), a = Kp(
      () => {
        var l;
        return (l = t.value) == null ? void 0 : l.isSelectedTranslationUnitLast;
      }
    ), r = Kp(
      () => s.value || n.value
    );
    return (l, c) => (bA(), kA(kn(I), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: sr(() => [
        oa(kn(Uc), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": l.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: r.value,
          onClick: c[0] || (c[0] = (u) => l.$emit("select-previous-segment"))
        }, {
          default: sr(() => [
            oa(kn(Yp), {
              class: "me-1",
              icon: kn(nd)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        oa(kn(Uc), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !kn(o),
          onClick: c[1] || (c[1] = (u) => l.$emit("apply-translation"))
        }, {
          default: sr(() => [
            Xp(Wp(l.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        oa(kn(Uc), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: a.value,
          onClick: c[2] || (c[2] = (u) => l.$emit("skip-translation"))
        }, {
          default: sr(() => [
            Xp(Wp(l.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            oa(kn(Yp), {
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
const So = window.Vue.unref, $A = window.Vue.toDisplayString, sa = window.Vue.createVNode, ar = window.Vue.withCtx, VA = window.Vue.openBlock, EA = window.Vue.createBlock, Ic = window.Vue.computed, LA = window.Vuex.useStore, TA = window.Codex.CdxButton, AA = window.Codex.CdxIcon, DA = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = LA(), n = Ic(() => t.state.application.currentMTProvider), o = fe(), s = Ic(() => ({
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
    return (r, l) => (VA(), EA(So(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: ar(() => [
        sa(So(I), { class: "ma-0 ps-5 pb-4" }, {
          default: ar(() => [
            sa(So(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: $A(a.value)
            }, null, 8, ["textContent"]),
            sa(So(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: ar(() => [
                sa(So(TA), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (c) => r.$emit("configure-options"))
                }, {
                  default: ar(() => [
                    sa(So(AA), {
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
const It = window.Vue.unref, Wn = window.Vue.createVNode, PA = window.Vue.resolveDirective, Qp = window.Vue.createElementVNode, BA = window.Vue.withDirectives, Jp = window.Vue.toDisplayString, Zp = window.Vue.createTextVNode, aa = window.Vue.withCtx, FA = window.Vue.openBlock, NA = window.Vue.createElementBlock, MA = { class: "mt-retry-body pb-5" }, UA = { class: "retry-body__message" }, eh = window.Codex.CdxButton, Rc = window.Codex.CdxIcon, IA = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = PA("i18n");
      return FA(), NA("div", MA, [
        Qp("div", UA, [
          Wn(It(Rc), {
            class: "me-2",
            icon: It(EC)
          }, null, 8, ["icon"]),
          BA(Qp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Wn(It(I), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: aa(() => [
            Wn(It(k), { cols: "6" }, {
              default: aa(() => [
                Wn(It(eh), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: aa(() => [
                    Wn(It(Rc), {
                      class: "me-1",
                      icon: It(ow)
                    }, null, 8, ["icon"]),
                    Zp(" " + Jp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Wn(It(k), { cols: "6" }, {
              default: aa(() => [
                Wn(It(eh), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: aa(() => [
                    Wn(It(Rc), {
                      class: "me-1",
                      icon: It(IC)
                    }, null, 8, ["icon"]),
                    Zp(" " + Jp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Ko = window.Vue.createVNode, ut = window.Vue.unref, ia = window.Vue.openBlock, RA = window.Vue.createElementBlock, zA = window.Vue.createCommentVNode, ir = window.Vue.createBlock, OA = window.Vue.normalizeClass, jA = window.Vue.normalizeStyle, ra = window.Vue.withCtx, HA = window.Vue.toDisplayString, qA = window.Vue.createTextVNode, GA = window.Vue.normalizeProps, WA = window.Vue.guardReactiveProps, XA = ["lang", "dir", "innerHTML"], zc = window.Vue.ref, KA = window.Vue.onMounted, YA = window.Vue.onBeforeUnmount, Oc = window.Vue.computed, QA = window.Vue.nextTick, JA = window.Vuex.useStore, ZA = window.Codex.CdxButton, eD = window.Codex.CdxIcon, tD = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = zc(0), n = zc(null), o = zc(null), s = JA(), { currentMTProvider: a } = tt(s), { targetLanguageURLParameter: r } = P(), { sourceSection: l, currentProposedTranslation: c } = se(), u = Oc(
      () => {
        var p, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (p = l.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), i = Oc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), d = Oc(
      () => !!c.value || a.value === le.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    KA(() => b(this, null, function* () {
      yield QA(), g(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), YA(() => {
      m.unobserve(n.value.$el), m.unobserve(o.value.$el);
    });
    const m = new ResizeObserver(() => g());
    return (p, h) => (ia(), ir(ut(Je), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: ra(() => [
        Ko(ut(I), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: ra(() => [
            Ko(DA, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => p.$emit("configure-options"))
            }, null, 512),
            Ko(ut(k), {
              class: OA(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !d.value && u.value
              }]),
              style: jA(d.value ? i.value : null)
            }, {
              default: ra(() => [
                d.value ? (ia(), RA("section", {
                  key: 0,
                  lang: ut(r),
                  dir: ut(q.getDir)(ut(r)),
                  innerHTML: ut(c)
                }, null, 8, XA)) : u.value ? (ia(), ir(ut(mt), { key: 1 })) : (ia(), ir(IA, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => p.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => p.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Ko(ut(k), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: ra(() => [
                d.value || u.value ? (ia(), ir(ut(ZA), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !d.value,
                  onClick: h[3] || (h[3] = (f) => p.$emit("edit-translation", ut(c)))
                }, {
                  default: ra(() => [
                    Ko(ut(eD), {
                      class: "me-1",
                      icon: ut(ed)
                    }, null, 8, ["icon"]),
                    qA(" " + HA(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : zA("", !0),
                Ko(sv, GA(WA(p.$attrs)), null, 16)
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
}, nD = window.Vue.computed, oD = (e) => nD(() => {
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
const sD = window.Vue.unref, aD = window.Vue.normalizeClass, iD = window.Vue.openBlock, rD = window.Vue.createElementBlock, lD = ["innerHTML"], cD = window.Vue.onMounted, uD = window.Vue.ref, dD = window.Vue.computed, gD = {
  __name: "SubSection",
  props: {
    subSection: {
      type: gt,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = uD(null), a = oD(n.subSection);
    cD(() => {
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
    const { selectTranslationUnitById: r } = vs(), l = (u) => {
      if (u.selected) {
        o("bounce-translation");
        return;
      }
      r(u.id);
    }, c = dD(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (u, i) => (iD(), rD("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: aD(["sx-sentence-selector__subsection", c.value]),
      innerHTML: sD(a)
    }, null, 10, lD));
  }
};
const th = window.Vue.unref, nh = window.Vue.createVNode, oh = window.Vue.normalizeStyle, mD = window.Vue.openBlock, pD = window.Vue.createElementBlock, sh = window.Vue.computed, av = {
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
    const t = e, n = sh(() => ({ "--size": t.size })), o = sh(
      () => !t.isTemplateAdapted || t.percentage === 0 ? e_ : Cu
    );
    return (s, a) => (mD(), pD("div", {
      class: "block-template-status-indicator",
      style: oh(n.value)
    }, [
      nh(th(h1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      nh(th(Ze), {
        icon: o.value,
        size: e.size / 2,
        style: oh({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const Xn = window.Vue.unref, rr = window.Vue.createVNode, jc = window.Vue.withCtx, hD = window.Vue.openBlock, fD = window.Vue.createBlock, wD = window.Vue.computed, ah = window.Codex.CdxButton, ih = window.Codex.CdxIcon, iv = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = se(), o = wD(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (hD(), fD(Xn(I), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: jc(() => [
        rr(Xn(ah), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Xn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: jc(() => [
            rr(Xn(ih), { icon: Xn(nd) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        rr(Xn(ah), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: jc(() => [
            rr(Xn(ih), { icon: Xn(hs) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, la = window.Vue.openBlock, lr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const $n = window.Vue.unref, Yo = window.Vue.withCtx, ca = window.Vue.createVNode, Hc = window.Vue.toDisplayString, qc = window.Vue.createElementVNode, vD = window.Vue.renderList, _D = window.Vue.Fragment, SD = window.Vue.createElementBlock, yD = { class: "pa-4" }, CD = ["textContent"], xD = ["textContent"], ua = window.Vue.computed, bD = {
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
    const t = e, { targetLanguageURLParameter: n } = P(), o = ua(() => q.getAutonym(n.value)), s = ua(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), a = fe(), r = ua(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? s.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", a.i18n(u);
    }), l = ua(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : s.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", a.i18n(u);
    }), c = ua(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: a.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            o.value
          ),
          icon: n_,
          color: kt.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: a.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: kr,
          color: kt.gray500
        });
      else if (s.value < 100)
        u.push({
          text: a.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Cu,
          color: kt.blue600
        });
      else {
        let i;
        t.sourceParamsCount ? i = a.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : i = a.i18n("cx-sx-block-template-no-source-params-text"), u.push({
          text: i,
          icon: Cu,
          color: kt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: a.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          o.value
        ),
        icon: br,
        color: kt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: a.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          o.value
        ),
        icon: I0,
        color: kt.gray500
      }), u;
    });
    return (u, i) => (la(), lr($n(Vt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: i[0] || (i[0] = (d) => u.$emit("update:active", d))
    }, {
      header: Yo(() => [
        ca($n(I), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Yo(() => [
            ca($n(k), { shrink: "" }, {
              default: Yo(() => [
                e.targetTemplateExists ? (la(), lr(av, {
                  key: 0,
                  percentage: s.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (la(), lr($n(Ze), {
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
        qc("div", yD, [
          qc("h3", {
            textContent: Hc(r.value)
          }, null, 8, CD),
          qc("p", {
            class: "mt-6 text-small",
            textContent: Hc(l.value)
          }, null, 8, xD),
          (la(!0), SD(_D, null, vD(c.value, (d, g) => (la(), lr($n(I), {
            key: g,
            align: "start",
            class: "mt-4"
          }, {
            default: Yo(() => [
              ca($n(k), { shrink: "" }, {
                default: Yo(() => [
                  ca($n(Ze), {
                    class: "me-2",
                    icon: d.icon,
                    "icon-color": d.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              ca($n(k), {
                textContent: Hc(d.text)
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
const Pe = window.Vue.unref, je = window.Vue.createVNode, Jt = window.Vue.withCtx, Gc = window.Vue.toDisplayString, rh = window.Vue.createTextVNode, kD = window.Vue.resolveDirective, lh = window.Vue.withDirectives, ch = window.Vue.createElementVNode, $D = window.Vue.normalizeClass, Qo = window.Vue.openBlock, uh = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const cr = window.Vue.createBlock, dh = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const gh = window.Vue.mergeProps, VD = { class: "block-template-adaptation-card__container pa-4" }, ED = ["textContent"], LD = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, He = window.Vue.computed, TD = window.Vue.ref, AD = window.Vuex.useStore, mh = window.Codex.CdxButton, ph = window.Codex.CdxIcon, DD = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = AD(), { targetLanguageAutonym: n, currentMTProvider: o } = tt(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = se(), r = He(() => {
      var C;
      return (C = s.value) == null ? void 0 : C.isTranslated;
    }), l = He(() => {
      var D;
      return ((D = s.value) == null ? void 0 : D.blockTemplateTranslatedContent) || a.value;
    }), c = He(
      () => {
        var C;
        return (C = s.value) == null ? void 0 : C.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = He(
      () => {
        var C;
        return !((C = t.state.application.mtRequestsPending) != null && C.includes(
          s.value.id
        ));
      }
    ), i = fe(), d = He(
      // Strip HTML comments and return
      () => {
        var C, D;
        return ((D = (C = s.value) == null ? void 0 : C.sourceBlockTemplateName) == null ? void 0 : D.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = He(
      () => {
        var C, D;
        return (D = (C = s.value) == null ? void 0 : C.blockTemplateAdaptationInfo) == null ? void 0 : D[o.value];
      }
    ), m = He(
      () => {
        var C, D;
        return ((C = g.value) == null ? void 0 : C.adapted) || !!((D = g.value) != null && D.partial);
      }
    ), p = He(() => g.value ? "block-template-adaptation-card__body--" + (m.value ? "success" : "warning") : null), h = He(() => g.value ? m.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = He(
      () => {
        var C;
        return Object.keys(((C = s.value) == null ? void 0 : C.sourceTemplateParams) || {}).length;
      }
    ), w = He(() => {
      var D;
      const C = (D = s.value) == null ? void 0 : D.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(C || {});
    }), v = He(() => w.value.length), x = He(() => {
      const C = E.value;
      return f.value + C === 0 ? 100 : v.value / (f.value + C) * 100 || 0;
    }), y = TD(!1), _ = () => {
      y.value = !0;
    }, V = (C) => C.filter((D) => !w.value.includes(D)), E = He(() => {
      var D;
      const C = ((D = g.value) == null ? void 0 : D.mandatoryTargetParams) || [];
      return V(C).length;
    }), N = He(() => {
      var D;
      const C = ((D = g.value) == null ? void 0 : D.optionalTargetParams) || [];
      return V(C).length;
    });
    return (C, D) => {
      const R = kD("i18n");
      return Qo(), cr(Pe(Je), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Jt(() => [
          ch("div", VD, [
            je(Pe(I), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Jt(() => [
                je(Pe(k), { shrink: "" }, {
                  default: Jt(() => [
                    je(Pe(ph), {
                      icon: Pe(RC),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                je(Pe(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Jt(() => [
                    rh(Gc(d.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (Qo(), uh("div", {
              key: 0,
              class: $D(["pa-4 mb-4", p.value])
            }, [
              je(Pe(I), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Jt(() => [
                  lh(je(Pe(k), { tag: "h5" }, null, 512), [
                    [R, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  je(Pe(k), { shrink: "" }, {
                    default: Jt(() => [
                      je(av, {
                        percentage: x.value,
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
              ch("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Gc(c.value)
              }, null, 8, ED),
              je(Pe(mh), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: D[0] || (D[0] = (X) => C.$emit("edit-translation", l.value))
              }, {
                default: Jt(() => [
                  rh(Gc(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (Qo(), uh("div", LD, [
              je(Pe(I), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Jt(() => [
                  lh(je(Pe(k), { tag: "h5" }, null, 512), [
                    [R, [
                      Pe(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  je(Pe(k), { shrink: "" }, {
                    default: Jt(() => [
                      je(Pe(mh), {
                        weight: "quiet",
                        "aria-label": C.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Jt(() => [
                          je(Pe(ph), {
                            icon: Pe(NC),
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
            ])) : (Qo(), cr(Pe(mt), { key: 2 }))
          ]),
          r.value ? (Qo(), cr(iv, dh(gh({ key: 1 }, C.$attrs)), null, 16)) : (Qo(), cr(sv, dh(gh({ key: 0 }, C.$attrs)), null, 16)),
          je(bD, {
            active: y.value,
            "onUpdate:active": D[1] || (D[1] = (X) => y.value = X),
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
const PD = window.Vue.unref, BD = window.Vue.createVNode, FD = window.Vue.openBlock, ND = window.Vue.createElementBlock, MD = { class: "translated-segment-card-header" }, UD = window.Vue.computed, ID = {
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
    const n = t, { isSectionTitleSelected: o } = se(), s = fe(), a = UD(() => [
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
    return (l, c) => (FD(), ND("div", MD, [
      BD(PD(Ta), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const RD = window.Vue.useCssVars, Ie = window.Vue.createVNode, hh = window.Vue.resolveDirective, zD = window.Vue.createElementVNode, Wc = window.Vue.withDirectives, Ce = window.Vue.unref, OD = window.Vue.normalizeStyle, ur = window.Vue.openBlock, fh = window.Vue.createElementBlock, jD = window.Vue.createCommentVNode, HD = window.Vue.normalizeClass, Ct = window.Vue.withCtx, qD = window.Vue.toDisplayString, GD = window.Vue.createTextVNode, wh = window.Vue.createBlock, WD = window.Vue.normalizeProps, XD = window.Vue.guardReactiveProps, Vn = window.Vue.computed, KD = window.Vue.ref, YD = window.Vue.inject, QD = window.Codex.CdxButton, Xc = window.Codex.CdxIcon, JD = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    RD((v) => ({
      "05f62acd": w.value
    }));
    const t = KD("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = se(), a = P(), r = Vn(() => t.value === "sentence"), l = Vn(
      () => n.value.subSections.find(
        (v) => v.sentences.some(
          (x) => {
            var y;
            return x.id === ((y = o.value) == null ? void 0 : y.id);
          }
        )
      )
    ), c = Vn(() => {
      var v;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (v = o.value) == null ? void 0 : v.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), u = YD("colors"), i = u.gray200, d = u.red600, g = Vn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), m = Vn(
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
    return (v, x) => {
      const y = hh("i18n"), _ = hh("i18n-html");
      return ur(), wh(Ce(Je), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ct(() => [
          Ie(Ce(I), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ct(() => [
              Ie(ID, {
                selection: t.value,
                "onUpdate:selection": x[0] || (x[0] = (V) => t.value = V)
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
                          Wc(zD("h5", null, null, 512), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? Wc((ur(), fh("p", {
                            key: 0,
                            style: OD({ color: Ce(d) })
                          }, null, 4)), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Wc((ur(), fh("p", {
                            key: 1,
                            class: HD(h.value)
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
                                    icon: Ce(jC)
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
                                    icon: Ce(zC)
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
                  r.value ? (ur(), wh(Ce(QD), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: x[1] || (x[1] = (V) => v.$emit("edit-translation", g.value))
                  }, {
                    default: Ct(() => [
                      Ie(Ce(Xc), {
                        class: "me-1",
                        icon: Ce(ed)
                      }, null, 8, ["icon"]),
                      GD(" " + qD(v.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : jD("", !0)
                ]),
                _: 1
              }),
              Ie(Ce(k), { class: "translated-segment-card__actions" }, {
                default: Ct(() => [
                  Ie(iv, WD(XD(v.$attrs)), null, 16)
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
}, rv = window.Vuex.useStore, e6 = () => {
  const e = rv(), {
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
    o ? s = yield Ar.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : s = new le(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, t6 = () => {
  const e = rv(), { currentMTProvider: t } = tt(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = P(), s = e6();
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
  const { selectedContentTranslationUnit: e } = se(), t = n6(
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
    (l) => !le.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, i6 = window.Vue.computed, lv = () => {
  const { currentTranslation: e } = Xt(), { currentSourcePage: t } = ot();
  return i6(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, r6 = window.Vue.computed, Ia = () => {
  const { sourceSection: e } = se(), { currentTargetPageTitle: t } = ot(), { isMissingLeadSection: n } = ht();
  return { targetPageTitleForPublishing: r6(
    () => n.value ? e.value.title : t.value
  ) };
}, l6 = window.Vuex.useStore, hd = () => {
  const e = l6(), { sourceSection: t } = se(), { targetPageTitleForPublishing: n } = Ia(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), r = lv(), { target: l, PUBLISHING_TARGETS: c } = Tt();
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
let Kc;
const m6 = () => {
  const e = g6(), t = hd();
  let n = 1e3, o = 0;
  return Kc = cd(() => t().then((a) => {
    a instanceof so ? (n *= o + 1, o++, setTimeout(Kc, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof us)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Kc;
}, cv = d6(m6), p6 = window.Vuex.useStore, h6 = () => {
  const e = p6(), t = cv(), { currentMTProvider: n } = tt(e), { sourceSection: o, currentProposedTranslation: s } = se(), { selectNextTranslationUnit: a } = vs();
  return () => b(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, f6 = window.Vuex.useStore, w6 = () => {
  const e = f6(), t = cv();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, v6 = window.Vuex.useStore, _6 = window.Vue.computed, uv = () => {
  const e = v6(), { currentTranslation: t } = Xt(), { currentMTProvider: n } = tt(e), { currentTargetPageTitle: o } = ot(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = P(), c = Lt(), u = _6(() => {
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
  const s = ((l = t.user) == null ? void 0 : l.content) || ((c = t.mt) == null ? void 0 : c.content), a = (u = t == null ? void 0 : t.mt) == null ? void 0 : u.engine, r = yield ov(
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
  const { currentSourcePage: e } = ot(), { sourceSection: t } = se();
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
let Yc = null;
function $6() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((o) => t.includes(o));
}
function dv() {
  return Yc === null && (Yc = $6()), Yc;
}
const gv = window.Vue.ref, Qc = gv(!1), Jc = gv(!1);
function vh() {
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
const ue = window.Vue.unref, xt = window.Vue.createVNode, Rt = window.Vue.withCtx, V6 = window.Vue.resolveDirective, En = window.Vue.createElementVNode, E6 = window.Vue.withDirectives, da = window.Vue.toDisplayString, L6 = window.Vue.createTextVNode, Zt = window.Vue.openBlock, Kn = window.Vue.createBlock, _h = window.Vue.createCommentVNode, T6 = window.Vue.renderList, A6 = window.Vue.Fragment, Sh = window.Vue.createElementBlock, D6 = window.Vue.normalizeClass, P6 = window.Vue.normalizeStyle, B6 = { class: "sx-sentence-selector__header-title mb-0" }, F6 = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, N6 = { class: "sx-sentence-selector__section-contents px-4" }, Yn = window.Vue.computed, M6 = window.Vue.nextTick, U6 = window.Vue.onMounted, ga = window.Vue.ref, yh = window.Vue.watch, I6 = window.Vuex.useStore, Ch = window.Codex.CdxButton, R6 = window.Codex.CdxIcon, xh = window.Codex.CdxMessage, z6 = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ga(!1), n = ga(!1), o = ga("100%"), s = I6(), { currentMTProvider: a, previousRoute: r } = tt(s), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      pageURLParameter: u,
      sectionURLParameter: i
    } = P(), { resetPublishTarget: d, target: g } = Tt(), { loadSuggestion: m } = Ma(), { sourceSection: p, selectedContentTranslationUnit: h } = se(), { targetPageTitleForPublishing: f } = Ia(), w = ga({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), v = Yn(
      () => Object.values(w.value).every(Boolean)
    ), x = Yn(
      () => {
        var Z;
        return (Z = p.value) == null ? void 0 : Z.isSelectedTranslationUnitTranslated;
      }
    ), y = Yn(() => {
      var Z;
      return (Z = p.value) == null ? void 0 : Z.subSections;
    }), _ = Yn(
      () => {
        var Z;
        return (Z = p.value) == null ? void 0 : Z.selectedTranslationUnitOriginalContent;
      }
    ), V = Yn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: E,
      logEditorCloseEvent: N,
      logEditorCloseWarnEvent: C,
      logEditorSegmentAddEvent: D,
      logEditorSegmentSkipEvent: R
    } = uv(), X = () => {
      var Ao;
      const Z = F.currentRoute.value.meta.workflowStep, Bn = F.getRoutes().find(
        (qr) => qr.name === r.value
      ), ft = ((Ao = Bn == null ? void 0 : Bn.meta) == null ? void 0 : Ao.workflowStep) || 0;
      return Z > ft;
    }, ae = ZD();
    t6()().then(() => {
      X() && E(), w.value.mtProviders = !0;
    });
    const ne = s6(), { fetchTranslationsByStatus: B, translationsFetched: z } = fs(), K = k6(), { currentTranslation: J } = Xt(), { selectPageSectionByTitle: $e, selectPageSectionByIndex: xe } = zr(), _e = Jw(), ze = ro();
    U6(() => b(this, null, function* () {
      if (!z.value.draft) {
        const Z = [
          // required to get current draft translation (if exists)
          B("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          _e(l.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          ze(l.value, [u.value])
        ];
        yield Promise.all(Z);
      }
      w.value.pageMetadata = !0, i.value ? yield $e(i.value) : yield xe(0), w.value.pageContent = !0, J.value && (yield K(J.value)), w.value.draftRestored = !0, g.value || m(
        l.value,
        c.value,
        u.value
      ).then(() => d()), yh(
        v,
        () => b(this, null, function* () {
          v.value && (yield M6(), ae(), ne());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), yh(h, ne);
    const { selectNextTranslationUnit: O, selectPreviousTranslationUnit: j } = vs(), ce = () => (R(), O()), S = h6(), T = () => {
      D(), S();
    }, L = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, F = nt(), M = () => {
      const { autoSavePending: Z } = s.state.application;
      if (Z) {
        Ss.value = !0, C();
        return;
      }
      U();
    }, H = w6(), { clearTranslationURLParameters: G } = P(), U = () => b(this, null, function* () {
      B("draft"), J.value && (p.value.reset(), J.value.restored = !1), N(), G(), H(), yield F.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: ie,
      translateSelectedTranslationUnitForAllProviders: st
    } = pd(), Ve = () => {
      _s.value || (t.value = !0, st());
    }, { getCurrentTitleByLanguage: Ra } = cn(), { isMissingLeadSection: za } = ht(), co = (Z) => {
      F.push({
        name: "sx-editor",
        state: {
          content: Z,
          originalContent: _.value,
          title: Ra(
            c.value,
            l.value
          ),
          isInitialEdit: !x.value || null
        }
      });
    }, Or = () => F.push({ name: "sx-publisher" }), jr = () => b(this, null, function* () {
      h.value ? yield ie(
        h.value.id,
        a.value
      ) : yield ie(0, a.value);
    }), _s = Yn(
      () => h.value instanceof gt
    ), Ss = ga(!1), {
      isPermissionWarningDismissed: Hr,
      dismissPermissionWarning: Lo,
      resetPermissionWarning: To
    } = vh(), { isTitleErrorDismissed: Oa, dismissTitleError: A, resetTitleError: W } = vh();
    X() && (To(), W());
    const Ne = Yn(
      () => !dv() && !Hr.value
    ), At = Yn(
      () => !Oa.value && za.value && !mw.Title.newFromText(f.value)
    );
    return (Z, un) => {
      const Bn = V6("i18n");
      return Zt(), Sh("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: P6(V.value)
      }, [
        xt(ue(I), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Rt(() => [
            xt(ue(k), { shrink: "" }, {
              default: Rt(() => [
                xt(ue(Ch), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": Z.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: M
                }, {
                  default: Rt(() => [
                    xt(ue(R6), { icon: ue(Jf) }, null, 8, ["icon"])
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
                E6(En("h4", B6, null, 512), [
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
                xt(ue(Ch), {
                  disabled: !(ue(p) && ue(p).isTranslated),
                  onClick: Or
                }, {
                  default: Rt(() => [
                    L6(da(Z.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        v.value ? (Zt(), Kn(ue(I), {
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
                Ne.value ? (Zt(), Kn(ue(xh), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ue(Lo)
                }, {
                  default: Rt(() => [
                    En("p", null, da(Z.$i18n("cx-publish-permission-warning")), 1),
                    En("p", null, [
                      En("strong", null, [
                        En("a", F6, da(Z.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : _h("", !0),
                At.value ? (Zt(), Kn(ue(xh), {
                  key: 1,
                  type: "error",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ue(A)
                }, {
                  default: Rt(() => [
                    En("p", null, [
                      En("strong", null, da(Z.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    En("p", null, da(Z.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : _h("", !0),
                xt(xA),
                En("div", N6, [
                  (Zt(!0), Sh(A6, null, T6(y.value, (ft) => (Zt(), Kn(gD, {
                    id: ft.id,
                    key: `sub-section-${ft.id}`,
                    "sub-section": ft,
                    onBounceTranslation: L
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !_s.value && x.value ? (Zt(), Kn(JD, {
              key: 0,
              onEditTranslation: co,
              onSelectNextSegment: ue(O),
              onSelectPreviousSegment: ue(j)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : _s.value ? (Zt(), Kn(DD, {
              key: 2,
              onEditTranslation: co,
              onApplyTranslation: T,
              onSkipTranslation: ce,
              onSelectPreviousSegment: ue(j),
              onSelectNextSegment: ue(O)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Zt(), Kn(tD, {
              key: 1,
              class: D6({ "mb-0": !n.value }),
              onConfigureOptions: Ve,
              onEditTranslation: co,
              onApplyTranslation: T,
              onSkipTranslation: ce,
              onSelectPreviousSegment: ue(j),
              onRetryTranslation: jr
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Zt(), Kn(ue(I), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Rt(() => [
            xt(ue(mt), { class: "mt-0" })
          ]),
          _: 1
        })),
        xt(mA, {
          active: t.value,
          "onUpdate:active": un[0] || (un[0] = (ft) => t.value = ft)
        }, null, 8, ["active"]),
        xt(jT, {
          modelValue: Ss.value,
          "onUpdate:modelValue": un[1] || (un[1] = (ft) => Ss.value = ft),
          onDiscardTranslation: U
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
}, j6 = window.Vue.resolveComponent, H6 = window.Vue.createVNode, q6 = window.Vue.normalizeClass, G6 = window.Vue.openBlock, W6 = window.Vue.createElementBlock;
function X6(e, t, n, o, s, a) {
  const r = j6("sx-sentence-selector");
  return G6(), W6("main", {
    class: q6(["sx-sentence-selector-view", a.classes])
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
const J6 = window.Vue.resolveDirective, dr = window.Vue.withDirectives, zt = window.Vue.openBlock, Ln = window.Vue.createElementBlock, gr = window.Vue.createCommentVNode, mr = window.Vue.Transition, yo = window.Vue.withCtx, Jo = window.Vue.createVNode, ma = window.Vue.createElementVNode, Qn = window.Vue.unref, Z6 = window.Vue.renderList, eP = window.Vue.Fragment, tP = window.Vue.normalizeClass, bh = window.Vue.createBlock, nP = window.Vue.toDisplayString, oP = window.Vue.createTextVNode, sP = { class: "sx-quick-tutorial" }, aP = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, iP = {
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
}, fP = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, kh = window.Vue.ref, $h = window.Codex.CdxButton, wP = window.Codex.CdxIcon, vP = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = kh(2), n = kh(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = ws();
    return (r, l) => {
      const c = J6("i18n");
      return zt(), Ln("section", sP, [
        Jo(Qn(I), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: yo(() => [
            ma("section", aP, [
              Jo(mr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: yo(() => [
                  s(1) ? dr((zt(), Ln("h2", iP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? dr((zt(), Ln("h2", rP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : gr("", !0)
                ]),
                _: 1
              })
            ]),
            ma("section", lP, [
              Jo(mr, { name: "mw-ui-animation-slide-start" }, {
                default: yo(() => [
                  s(1) ? (zt(), Ln("div", {
                    key: "illustration-1",
                    innerHTML: Qn(Q6)
                  }, null, 8, cP)) : s(2) ? (zt(), Ln("div", {
                    key: "illustration-2",
                    innerHTML: Qn(Y6)
                  }, null, 8, uP)) : gr("", !0)
                ]),
                _: 1
              })
            ]),
            ma("div", dP, [
              (zt(!0), Ln(eP, null, Z6(t.value, (u) => (zt(), Ln("span", {
                key: `dot-${u}`,
                class: tP(["dot mx-1", { "dot-active": s(u) }]),
                role: "button",
                onClick: (i) => n.value = u
              }, null, 10, gP))), 128))
            ]),
            ma("section", mP, [
              Jo(mr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: yo(() => [
                  s(1) ? dr((zt(), Ln("h3", pP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? dr((zt(), Ln("h3", hP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : gr("", !0)
                ]),
                _: 1
              })
            ]),
            ma("div", fP, [
              Jo(mr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: yo(() => [
                  s(1) ? (zt(), bh(Qn($h), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: yo(() => [
                      Jo(Qn(wP), { icon: Qn(hs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (zt(), bh(Qn($h), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Qn(a)
                  }, {
                    default: yo(() => [
                      oP(nP(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : gr("", !0)
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
const VP = window.Vue.resolveDirective, Vh = window.Vue.createElementVNode, EP = window.Vue.withDirectives, LP = window.Vue.unref, TP = window.Vue.withCtx, AP = window.Vue.createVNode, DP = window.Vue.openBlock, PP = window.Vue.createElementBlock, BP = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, FP = { class: "sx-editor__original-content-panel__header mb-2" }, NP = ["lang", "dir", "innerHTML"], Eh = window.Vue.ref, MP = window.Vue.onMounted, UP = {
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
        u.href = Q.getPageUrl(l, u.title), u.target = "_blank";
    }, o = Eh(null), s = Eh(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return MP(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const c = VP("i18n");
      return DP(), PP("section", BP, [
        EP(Vh("h5", FP, null, 512), [
          [c, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        AP(LP(r1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: TP(() => [
            Vh("div", {
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
const RP = window.Vue.unref, pa = window.Vue.createElementVNode, Lh = window.Vue.resolveDirective, Zc = window.Vue.withDirectives, zP = window.Vue.normalizeClass, OP = window.Vue.openBlock, jP = window.Vue.createElementBlock, HP = window.Vue.createCommentVNode, qP = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, GP = { class: "sx-editor__feedback-overlay-content px-4" }, WP = ["innerHTML"], XP = { class: "sx-editor__feedback-overlay-content__title" }, KP = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, eu = window.Vue.computed, YP = {
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
      const c = Lh("i18n"), u = Lh("i18n-html");
      return e.showFeedback ? (OP(), jP("div", qP, [
        pa("div", GP, [
          pa("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: RP(IP)
          }, null, 8, WP),
          Zc(pa("h2", XP, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Zc(pa("p", KP, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Zc(pa("p", {
            class: zP(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [u, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : HP("", !0);
    };
  }
}, QP = window.Vuex.useStore, JP = () => {
  const e = QP(), t = hd(), { selectNextTranslationUnit: n } = vs(), {
    isSectionTitleSelected: o,
    sourceSection: s,
    selectedContentTranslationUnit: a
  } = se(), { getCurrentTitleByLanguage: r } = cn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: c
  } = P(), { currentMTProvider: u } = tt(e);
  return (i) => b(void 0, null, function* () {
    if (!o.value) {
      const d = document.createElement("div");
      d.innerHTML = i, d.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = d.innerHTML;
    }
    a.value instanceof gt && (i = (yield ov(
      i,
      r(c.value, l.value),
      c.value
    )) || i), s.value.setTranslationForSelectedTranslationUnit(
      i,
      u.value
    ), t(), n();
  });
};
const Qe = window.Vue.unref, tu = window.Vue.openBlock, nu = window.Vue.createBlock, Th = window.Vue.createCommentVNode, Ah = window.Vue.createVNode, ZP = window.Vue.createElementVNode, eB = window.Vue.withCtx, tB = { class: "sx-editor__editing-surface-container grow" }, ou = window.Vue.ref, nB = window.Vue.computed;
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
    const t = e, n = ou(!1), o = nt(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: c, originalContent: u, title: i } = history.state, d = ou(null), g = ou(!1), { logEditorSegmentAddEvent: m, logEditorSegmentEditEvent: p } = uv(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = P(), { isSectionTitleSelected: w, sourceSection: v } = se(), x = nB(
      () => sn.calculateScore(
        d.value,
        c,
        f.value
      )
    ), y = JP(), _ = (V) => b(this, null, function* () {
      d.value = V, g.value = !0;
      const E = new Promise((C) => setTimeout(C, 2e3));
      let N = Promise.resolve();
      r ? v.value.editedTranslation = V : N = y(V), x.value === 0 && l ? m() : x.value > 0 && p(), yield Promise.all([E, N]), g.value = !1, a();
    });
    return r ? mw.cx.eventlogging.stats.publishEditorStepAccess() : mw.cx.eventlogging.stats.editingStepAccess(!0), (V, E) => (tu(), nu(Qe(I), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: eB(() => [
        Qe(u) ? (tu(), nu(UP, {
          key: 0,
          language: Qe(h),
          dir: Qe(q.getDir)(Qe(h)),
          "original-content": Qe(u)
        }, null, 8, ["language", "dir", "original-content"])) : Th("", !0),
        n.value ? Th("", !0) : (tu(), nu(Qe(mt), { key: 1 })),
        ZP("div", tB, [
          Ah(YP, {
            "edited-translation": d.value,
            "show-feedback": g.value,
            "proposed-translation": Qe(c)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Ah(y4, {
            content: Qe(c),
            language: Qe(f),
            dir: Qe(q.getDir)(Qe(f)),
            title: Qe(i),
            "use-text": !!Qe(w),
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
const en = window.Vue.unref, Co = window.Vue.createVNode, ha = window.Vue.withCtx, gB = window.Vue.resolveDirective, mB = window.Vue.withDirectives, pB = window.Vue.openBlock, hB = window.Vue.createBlock, Dh = window.Codex.CdxButton, Ph = window.Codex.CdxIcon, fB = {
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
      return pB(), hB(en(I), { class: "ma-0 sx-publisher__header" }, {
        default: ha(() => [
          Co(en(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: ha(() => [
              Co(en(Dh), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: ha(() => [
                  Co(en(Ph), { icon: en(ps) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          mB(Co(en(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Co(en(k), { shrink: "" }, {
            default: ha(() => [
              Co(en(Dh), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: ha(() => [
                  Co(en(Ph), { icon: en(LC) }, null, 8, ["icon"])
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
</svg>`, Bh = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const su = window.Vue.createElementVNode, Fh = window.Vue.toDisplayString, au = window.Vue.unref, iu = window.Vue.withCtx, Nh = window.Vue.createVNode, _B = window.Vue.openBlock, SB = window.Vue.createBlock, yB = window.Vue.createCommentVNode, CB = ["innerHTML"], xB = ["textContent"], bB = ["textContent"], ru = window.Vue.computed, kB = {
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
        svg: Bh,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Bh,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = ru(() => o[n.status].svg), a = ru(() => o[n.status].title), r = ru(() => o[n.status].subtitle);
    return (l, c) => e.active ? (_B(), SB(au(Vt), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: iu(() => [
        Nh(au(I), { class: "ma-4" }, {
          default: iu(() => [
            Nh(au(k), null, {
              default: iu(() => [
                su("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, CB),
                su("h2", {
                  textContent: Fh(a.value)
                }, null, 8, xB),
                su("p", {
                  class: "ma-0",
                  textContent: Fh(r.value)
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
const dt = window.Vue.unref, Ot = window.Vue.createVNode, Tn = window.Vue.withCtx, $B = window.Vue.resolveDirective, VB = window.Vue.withDirectives, Mh = window.Vue.toDisplayString, EB = window.Vue.createTextVNode, lu = window.Vue.openBlock, Uh = window.Vue.createElementBlock, LB = window.Vue.createCommentVNode, Ih = window.Vue.createElementVNode, TB = window.Vue.createBlock, AB = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, DB = ["src"], PB = ["textContent"], BB = window.Vue.computed, FB = window.Vue.inject, NB = window.Vue.ref, Rh = window.Codex.CdxButton, MB = window.Codex.CdxIcon, UB = {
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
    const n = t, o = NB(""), s = () => n("close"), a = () => n("publish", o.value), r = FB("breakpoints"), l = BB(() => r.value.mobile);
    return (c, u) => {
      const i = $B("i18n");
      return e.active && e.captchaDetails ? (lu(), TB(dt(Vt), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: Tn(() => [
          Ot(dt(I), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: Tn(() => [
              Ot(dt(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: Tn(() => [
                  Ot(dt(Rh), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": c.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: Tn(() => [
                      Ot(dt(MB), { icon: dt(ps) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              VB(Ot(dt(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Ot(dt(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: Tn(() => [
                  Ot(dt(Rh), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: Tn(() => [
                      EB(Mh(c.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Ot(dt(xr))
        ]),
        default: Tn(() => [
          Ih("div", AB, [
            e.captchaDetails.type === "image" ? (lu(), Uh("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, DB)) : (lu(), Uh("p", {
              key: 1,
              textContent: Mh(e.captchaDetails.question)
            }, null, 8, PB)),
            u[1] || (u[1] = Ih("p", { class: "mt-0" }, null, -1)),
            Ot(dt(I), { class: "ma-0" }, {
              default: Tn(() => [
                Ot(dt(k), null, {
                  default: Tn(() => [
                    Ot(dt(xu), {
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
const Jn = window.Vue.unref, pr = window.Vue.createVNode, Zo = window.Vue.withCtx, es = window.Vue.createElementVNode, IB = window.Vue.resolveDirective, RB = window.Vue.withDirectives, zB = window.Vue.renderList, OB = window.Vue.Fragment, cu = window.Vue.openBlock, jB = window.Vue.createElementBlock, zh = window.Vue.toDisplayString, Oh = window.Vue.createTextVNode, HB = window.Vue.isRef, qB = window.Vue.normalizeClass, jh = window.Vue.createBlock, GB = { class: "mw-ui-dialog__header" }, WB = { class: "row ma-0 px-4 py-3" }, XB = { class: "col shrink justify-center" }, KB = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, YB = { class: "mb-0" }, QB = { class: "pa-4" }, JB = window.Codex.CdxField, ZB = window.Codex.CdxRadio, e9 = window.Vuex.useStore, hr = window.Vue.computed, t9 = window.Codex.CdxButton, n9 = window.Codex.CdxIcon, o9 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = e9(), { target: s, PUBLISHING_TARGETS: a } = Tt(), r = hr(() => o.state.translator.isAnon), l = fe(), { sourceSection: c } = se(), { isCurrentSectionPresent: u, isPresentLeadSection: i } = ht(), d = hr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), g = hr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), m = hr(() => {
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
      const w = IB("i18n");
      return cu(), jh(Jn(Vt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: h.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: f[1] || (f[1] = (v) => h.$emit("update:active", v)),
        onClose: p
      }, {
        header: Zo(() => [
          es("div", GB, [
            es("div", WB, [
              es("div", XB, [
                pr(Jn(t9), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": h.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: Zo(() => [
                    pr(Jn(n9), { icon: Jn(Jf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              es("div", KB, [
                RB(es("h4", YB, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            pr(Jn(xr))
          ])
        ]),
        default: Zo(() => [
          es("div", QB, [
            pr(Jn(JB), { "is-fieldset": "" }, {
              default: Zo(() => [
                (cu(!0), jB(OB, null, zB(m.value, (v, x) => (cu(), jh(Jn(ZB), {
                  key: "publish-options-radio-" + v.value,
                  modelValue: Jn(s),
                  "onUpdate:modelValue": [
                    f[0] || (f[0] = (y) => HB(s) ? s.value = y : null),
                    p
                  ],
                  class: qB(x < m.value.length - 1 ? "mb-4" : "mb-0"),
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
const jt = window.Vue.unref, Hh = window.Vue.toDisplayString, qh = window.Vue.createElementVNode, s9 = window.Vue.resolveDirective, ts = window.Vue.createVNode, a9 = window.Vue.withDirectives, fa = window.Vue.withCtx, uu = window.Vue.openBlock, Gh = window.Vue.createBlock, Wh = window.Vue.createCommentVNode, i9 = window.Vue.Fragment, r9 = window.Vue.createElementBlock, l9 = window.Vue.normalizeClass, c9 = ["textContent"], u9 = ["textContent"], ns = window.Vue.computed, Xh = window.Vue.ref, d9 = window.Vue.watch, Kh = window.Codex.CdxButton, Yh = window.Codex.CdxIcon, g9 = window.Codex.CdxMessage, m9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Xh(0), o = Xh(null);
    d9(o, () => {
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
    ), c = fe(), u = ns(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.text;
    }), i = ns(() => {
      var m;
      return r.value ? c.i18n("cx-sx-publisher-review-info") : ((m = s.value) == null ? void 0 : m.title) || c.i18n("cx-sx-publisher-review-info-error");
    }), d = () => {
      const m = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + m) % m;
    }, g = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (m, p) => {
      const h = s9("i18n-html");
      return uu(), Gh(jt(g9), {
        type: a.value,
        class: l9(["sx-publisher__review-info", l.value]),
        icon: r.value ? jt(DC) : null
      }, {
        default: fa(() => [
          qh("h5", {
            textContent: Hh(i.value)
          }, null, 8, c9),
          r.value ? Wh("", !0) : (uu(), r9(i9, { key: 0 }, [
            qh("p", {
              textContent: Hh(u.value)
            }, null, 8, u9),
            ts(jt(I), {
              justify: "between",
              class: "ma-0"
            }, {
              default: fa(() => [
                a9(ts(jt(k), {
                  ref_key: "learnMoreContainer",
                  ref: o,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (uu(), Gh(jt(k), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: fa(() => [
                    ts(jt(Kh), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: d
                    }, {
                      default: fa(() => [
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
                      default: fa(() => [
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
}, p9 = (e) => {
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
}, h9 = window.Vuex.useStore, f9 = window.Vue.computed, w9 = () => {
  const e = h9(), { currentTranslation: t } = Xt(), { currentMTProvider: n } = tt(e), { currentTargetPageTitle: o } = ot(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = P(), { sourceSection: c } = se(), u = Lt(), i = f9(() => {
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
}, v9 = window.Vue.computed, Qh = window.Vue.ref, _9 = window.Vuex.useStore, S9 = () => {
  const e = _9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = P(), { sourceSection: s } = se(), { targetPageTitleForPublishing: a } = Ia(), r = lv(), { isPresentLeadSection: l } = ht(), { sectionSuggestion: c } = Le(), u = v9(
    () => {
      var _, V;
      return l.value ? no.LEAD_SECTION_DUMMY_TITLE : (V = c.value) == null ? void 0 : V.presentSections[(_ = s.value) == null ? void 0 : _.sourceSectionTitleForPublishing];
    }
  ), { target: i, PUBLISHING_TARGETS: d } = Tt(), g = Qh(!1), m = Qh("pending"), p = () => g.value = !1, h = hd(), {
    logPublishAttemptEvent: f,
    logPublishSuccessEvent: w,
    logPublishFailureEvent: v
  } = w9(), x = (_, V) => b(void 0, null, function* () {
    f();
    const E = yield h();
    if (E instanceof so)
      return v(), { publishFeedbackMessage: E, targetUrl: null };
    const N = E, C = a.value, D = {
      html: p9(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: C,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: r.value,
      publishTarget: i.value,
      sectionTranslationId: N
    };
    u.value && (D.existingSectionTitle = u.value), _ && (D.captchaId = _, D.captchaWord = V);
    const R = yield $t.publishTranslation(
      D
    );
    return R.publishFeedbackMessage === null ? w(R.pageId, R.revisionId) : v(), R;
  });
  return {
    closePublishDialog: p,
    doPublish: (_ = null, V = null) => b(void 0, null, function* () {
      m.value = "pending", g.value = !0;
      let E;
      try {
        E = yield x(
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
}, y9 = window.Vue.computed, C9 = () => {
  const e = nt(), { sourceSection: t } = se(), { getCurrentTitleByLanguage: n } = cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = P(), a = y9(
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
}, x9 = () => {
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
}, b9 = window.Vue.ref, k9 = window.Vue.computed, $9 = () => {
  const e = x9(), { target: t, PUBLISHING_TARGETS: n } = Tt(), { targetPageTitleForPublishing: o } = Ia(), s = b9([]), a = k9(
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
      if (!dv() && t.value !== n.SANDBOX) {
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
}, V9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = Tt(), { currentSourcePage: n } = ot(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = P(), { sourceSection: a } = se(), { targetPageTitleForPublishing: r } = Ia();
  return (l) => b(void 0, null, function* () {
    const c = r.value, u = n.value.title, i = new mw.Title(u), d = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== d.user)
      try {
        yield Ar.addWikibaseLink(
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
}, Jh = window.Vue.ref, E9 = () => {
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
const de = window.Vue.unref, qe = window.Vue.createVNode, L9 = window.Vue.resolveDirective, du = window.Vue.withDirectives, wa = window.Vue.openBlock, va = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Zh = window.Vue.toDisplayString, T9 = window.Vue.createTextVNode, os = window.Vue.createElementVNode, ss = window.Vue.withCtx, ef = window.Vue.normalizeClass, A9 = { class: "sx-publisher" }, D9 = {
  key: 0,
  class: "mb-2"
}, P9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, B9 = { key: 0 }, F9 = { key: 1 }, N9 = ["href"], M9 = ["innerHTML"], U9 = { class: "sx-publisher__section-preview pa-5" }, I9 = ["innerHTML"], fr = window.Vue.computed, R9 = window.Vue.onMounted, z9 = window.Vue.ref, O9 = window.Vue.watch, tf = window.Codex.CdxButton, gu = window.Codex.CdxIcon, j9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = se(), { sectionSuggestion: n } = Le(), { isCurrentSectionPresent: o, isPresentLeadSection: s } = ht(), {
      targetLanguageURLParameter: a,
      sectionURLParameter: r
    } = P(), l = fe(), c = fr(
      () => {
        var B;
        return s.value ? l.i18n("cx-sx-present-lead-section-label") : (B = t.value) == null ? void 0 : B.title;
      }
    ), { target: u, PUBLISHING_TARGETS: i } = Tt(), d = fr(() => u.value === i.SANDBOX ? l.i18n(
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
    } = E9(), {
      publishFeedbackMessages: f,
      isPublishingDisabled: w,
      addPublishFeedbackMessage: v,
      clearPublishFeedbackMessages: x,
      initializePublishFeedbackMessages: y
    } = $9(), _ = V9(), { doPublish: V, isPublishDialogActive: E, publishStatus: N, closePublishDialog: C } = S9(), D = (B = null) => b(this, null, function* () {
      if (w.value)
        return;
      const z = yield V(B, g.value);
      if (!z)
        return;
      const { publishFeedbackMessage: K, targetUrl: J } = z;
      if (p(K)) {
        C();
        return;
      } else
        K && v(K);
      N.value = w.value ? "failure" : "success", setTimeout(() => {
        if (w.value) {
          C();
          return;
        }
        _(J);
      }, 1e3);
    });
    R9(() => {
      y(), mw.cx.eventlogging.stats.publishStepAccess();
    });
    const R = C9(), X = z9(!1), ae = () => X.value = !0;
    O9(X, (B) => {
      B || (x(), y());
    });
    const ee = fr(() => {
      var B, z;
      return s.value ? l.i18n("cx-sx-present-lead-section-label") : (z = (B = n.value) == null ? void 0 : B.presentSections) == null ? void 0 : z[r.value];
    }), ne = fr(() => {
      var K;
      const B = Q.getPageUrl(
        a.value,
        (K = n.value) == null ? void 0 : K.targetTitle
      ), z = s.value ? "" : (ee.value || "").replace(/ /g, "_");
      return `${B}#${z}`;
    });
    return (B, z) => {
      const K = L9("i18n");
      return wa(), va("section", A9, [
        qe(fB, {
          "is-publishing-disabled": de(w),
          onPublishTranslation: D
        }, null, 8, ["is-publishing-disabled"]),
        os("div", {
          class: ef(["sx-publisher__publish-panel", de(o) ? "py-4" : "pa-4"])
        }, [
          de(o) ? (wa(), va("div", P9, [
            de(s) ? du((wa(), va("h5", B9, null, 512)), [
              [K, void 0, "cx-sx-publisher-publish-panel-existing-lead-section-notice"]
            ]) : du((wa(), va("h5", F9, null, 512)), [
              [K, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            os("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: ne.value,
              target: "_blank"
            }, [
              T9(Zh(ee.value) + " ", 1),
              qe(de(gu), { icon: de(Na) }, null, 8, ["icon"])
            ], 8, N9)
          ])) : du((wa(), va("h5", D9, null, 512)), [
            [K, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          os("div", {
            class: ef({ "px-4 mt-4": de(o) })
          }, [
            os("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: d.value
            }, null, 8, M9),
            qe(de(I), {
              justify: "end",
              class: "ma-0"
            }, {
              default: ss(() => [
                qe(de(k), { shrink: "" }, {
                  default: ss(() => [
                    qe(de(tf), {
                      weight: "quiet",
                      "aria-label": B.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: ae
                    }, {
                      default: ss(() => [
                        qe(de(gu), { icon: de(OC) }, null, 8, ["icon"])
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
        qe(m9, { "publish-feedback-messages": de(f) }, null, 8, ["publish-feedback-messages"]),
        os("section", U9, [
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
                    "aria-label": B.$i18n("cx-sx-publisher-edit-button-aria-label"),
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
          }, null, 8, I9)
        ]),
        qe(o9, {
          active: X.value,
          "onUpdate:active": z[0] || (z[0] = (J) => X.value = J)
        }, null, 8, ["active"]),
        qe(UB, {
          active: de(m),
          "captcha-details": de(g),
          onClose: de(h),
          onPublish: z[1] || (z[1] = (J) => D(J))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        qe(kB, {
          active: de(E),
          status: de(N)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const H9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: j9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, q9 = window.Vue.resolveComponent, G9 = window.Vue.createVNode, W9 = window.Vue.normalizeClass, X9 = window.Vue.openBlock, K9 = window.Vue.createElementBlock;
function Y9(e, t, n, o, s, a) {
  const r = q9("sx-publisher");
  return X9(), K9("main", {
    class: W9(["sx-publisher-view", a.classes])
  }, [
    G9(r)
  ], 2);
}
const Q9 = /* @__PURE__ */ he(H9, [["render", Y9]]);
const Ht = window.Vue.unref, Zn = window.Vue.createVNode, xo = window.Vue.withCtx, mu = window.Vue.toDisplayString, pu = window.Vue.createElementVNode, nf = window.Vue.openBlock, of = window.Vue.createBlock, J9 = window.Vue.createCommentVNode, Z9 = ["textContent"], e7 = ["textContent"], t7 = ["textContent"], mv = {
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
        Zn(Ht(k), { shrink: "" }, {
          default: xo(() => [
            Zn(Ht(Uu), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Zn(Ht(k), { class: "ms-4" }, {
          default: xo(() => [
            Zn(Ht(I), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: xo(() => [
                Zn(Ht(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: xo(() => [
                    pu("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: mu(e.suggestion.title)
                    }, null, 8, Z9)
                  ]),
                  _: 1
                }),
                Zn(Ht(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: xo(() => [
                    pu("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: mu(e.suggestion.description)
                    }, null, 8, e7)
                  ]),
                  _: 1
                }),
                Zn(Ht(k), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: xo(() => [
                    e.suggestion.inFeaturedCollection ? (nf(), of(Rr, {
                      key: 0,
                      class: "me-2"
                    })) : J9("", !0),
                    Zn(Ht(Ze), {
                      icon: Ht(X0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    pu("small", {
                      textContent: mu((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, t7)
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
const sf = window.Vue.unref, _a = window.Vue.openBlock, hu = window.Vue.createBlock, n7 = window.Vue.createCommentVNode, o7 = window.Vue.resolveDirective, s7 = window.Vue.withDirectives, af = window.Vue.createElementBlock, a7 = window.Vue.renderList, i7 = window.Vue.Fragment, r7 = window.Vue.normalizeClass, l7 = window.Vue.withCtx, c7 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, rf = window.Vue.computed, u7 = window.Vue.ref, d7 = {
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
    const { sourceLanguageURLParameter: t } = P(), n = rf(() => q.getAutonym(t.value)), o = e, s = u7(null), a = (u) => s.value = u, r = () => s.value = null, l = (u) => {
      var i;
      return ((i = o.selectedItem) == null ? void 0 : i.title) === u.title && !s.value || s.value === u.pageId;
    }, c = rf(() => o.searchInput);
    return (u, i) => {
      const d = o7("i18n");
      return _a(), hu(sf(Je), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: l7(() => [
          e.searchResultsLoading ? (_a(), hu(sf(mt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : e.searchResultsSlice.length === 0 ? s7((_a(), af("p", c7, null, 512)), [
            [d, [
              c.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : n7("", !0),
          (_a(!0), af(i7, null, a7(e.searchResultsSlice, (g) => (_a(), hu(mv, {
            key: g.pageId,
            suggestion: g,
            class: r7({
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
const lf = window.Vue.toDisplayString, g7 = window.Vue.createElementVNode, wr = window.Vue.openBlock, cf = window.Vue.createElementBlock, m7 = window.Vue.createCommentVNode, p7 = window.Vue.renderList, h7 = window.Vue.Fragment, f7 = window.Vue.normalizeClass, uf = window.Vue.createBlock, w7 = window.Vue.unref, df = window.Vue.withCtx, v7 = ["textContent"], _7 = ["textContent"], S7 = window.Vue.ref, fu = {
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
    const n = e, o = S7(null), s = (l) => o.value = l, a = () => o.value = null, r = (l) => {
      var c;
      return ((c = n.selectedItem) == null ? void 0 : c.title) === l.title && !o.value || o.value === l.pageId;
    };
    return (l, c) => (wr(), uf(w7(Je), { class: "sx-article-search__suggestions pa-0" }, {
      header: df(() => [
        g7("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: lf(e.cardTitle)
        }, null, 8, v7),
        e.cardSubtitle ? (wr(), cf("p", {
          key: 0,
          class: "ma-0 px-4 pb-2 sx-article-search__suggestions-subtitle",
          textContent: lf(e.cardSubtitle)
        }, null, 8, _7)) : m7("", !0)
      ]),
      default: df(() => [
        (wr(!0), cf(h7, null, p7(e.suggestions, (u) => (wr(), uf(mv, {
          key: u.pageId,
          suggestion: u,
          class: f7({
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
}, y7 = window.Vue.computed, C7 = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), gf = "other", x7 = (e) => y7((t) => {
  const o = e.value.slice(0, 3), s = {
    value: gf,
    props: {
      icon: J0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== gf);
  return C7(a, o) ? t : [...o.map((l) => ({
    value: l,
    props: {
      label: q.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), s];
}), b7 = window.Vue.computed, k7 = () => {
  const { supportedLanguageCodes: e } = Pa(), { targetLanguageURLParameter: t } = P();
  return { getSuggestedSourceLanguages: (o) => b7(() => {
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
}, $7 = window.Vue.ref, V7 = () => {
  const e = $7([]), t = () => {
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
}, E7 = window.Vuex.useStore, mf = window.Vue.ref, vr = window.Vue.computed, pf = window.Vue.watch, L7 = (e) => {
  const t = E7(), n = ro(), { fetchPageSuggestionsByFeaturedCollections: o } = Ju(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), { featuredCollection: r } = Wt(), { isFilteringByFeaturedCollection: l } = lo(), c = mf([]), u = mf(!1), i = vr(
    () => !!r.value && !u.value
  ), d = () => {
    var h;
    return !l() && ((h = r.value) == null ? void 0 : h.name) && g.value.length === 0;
  }, g = vr(() => {
    var h;
    return t.getters["suggestions/getCollectionPageSuggestions"](
      s.value,
      a.value,
      (h = r.value) == null ? void 0 : h.name
    );
  }), m = vr(() => {
    var h;
    return t.getters["suggestions/getCollectionSectionSuggestions"](
      s.value,
      a.value,
      (h = r.value) == null ? void 0 : h.name
    );
  }), p = vr(() => [
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
        )) : c.value = [], u.value = !0;
      } catch (f) {
        mw.log.error("Error fetching featured collection pages:", f), c.value = [], u.value = !0;
      }
    }),
    { immediate: !0 }
  ), pf(
    s,
    () => b(void 0, null, function* () {
      u.value = !1, d() && (c.value = [], yield o());
    }),
    { immediate: !0 }
  ), {
    featuredCollectionPages: c,
    featuredCollectionPagesLoading: i
  };
};
const T7 = window.Vue.resolveDirective, A7 = window.Vue.createElementVNode, wu = window.Vue.withDirectives, re = window.Vue.unref, Sa = window.Vue.withCtx, tn = window.Vue.createVNode, as = window.Vue.openBlock, vu = window.Vue.createBlock, D7 = window.Vue.createCommentVNode, _u = window.Vue.createElementBlock, P7 = window.Vue.Fragment, B7 = window.Vue.vShow, ya = window.Vue.withModifiers, Ca = window.Vue.withKeys, F7 = ["onKeydown"], N7 = { class: "mb-0" }, M7 = {
  key: 3,
  class: "sx-article-search__empty-state"
}, is = window.Vue.ref, U7 = window.Vue.onMounted, bo = window.Vue.computed, hf = window.Vue.watch, I7 = window.Vue.inject, R7 = window.Vuex.useStore, z7 = window.Codex.CdxButton, O7 = window.Codex.CdxIcon, j7 = window.Codex.CdxSearchInput, ff = 3, H7 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = is(""), n = is(!1), o = is(null), s = is(!1), { previousLanguages: a, addLanguageToHistory: r } = V7(), l = R7(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = P(), { supportedLanguageCodes: i } = Pa(), d = ro(), g = is(!1), { searchResultsLoading: m, searchResultsSlice: p } = qw(
      c,
      t
    ), { getSuggestedSourceLanguages: h } = k7(), f = h(a), w = x7(
      f
    ), v = nt(), { fetchAllTranslations: x } = fs();
    U7(() => b(this, null, function* () {
      var M;
      x(), r(c.value), (M = o.value) == null || M.focus();
    }));
    const { featuredCollectionPages: y, featuredCollectionPagesLoading: _ } = L7(ff), V = () => {
      v.push({ name: "dashboard" });
    }, E = lw(), N = (M) => {
      E(M, u.value), r(M);
    }, C = (M) => {
      if (M === "other") {
        s.value = !0;
        return;
      }
      N(M);
    }, D = Lt();
    hf(t, () => {
      n.value || (n.value = !0, D({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const R = () => {
      s.value = !1;
    }, X = (M) => {
      s.value = !1, C(M);
    }, { fetchPreviousEditsInSource: ae, previousEditsInSource: ee } = Wf(), ne = is([]), B = () => {
      g.value = !0, ae().then(() => {
        if (ee.value.length > 0)
          return d(
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
        l.dispatch("mediawiki/fetchNearbyPages"), B(), (M = o.value) == null || M.focus();
      },
      { immediate: !0 }
    );
    const z = bo(() => l.getters["mediawiki/getNearbyPages"]), K = I7("breakpoints"), J = bo(() => K.value.mobile), $e = Ua(), xe = bo(
      () => ne.value && ne.value.length && !_.value
    ), _e = bo(
      () => z.value && z.value.length && !g.value
    ), ze = bo(
      () => y.value && y.value.length > 0
    ), O = bo(() => ze.value ? y.value || [] : xe.value ? ne.value || [] : _e.value ? z.value || [] : []), { next: j, prev: ce, keyboardNavigationContainer: S, selectedItem: T } = Ow(
      t,
      p,
      O
    ), L = (M) => $e(
      M.title,
      c.value,
      u.value,
      F.value
    ), F = bo(() => t.value ? "search_result" : xe.value ? "suggestion_recent_edit" : _e.value ? "suggestion_nearby" : "");
    return (M, H) => {
      const G = T7("i18n");
      return as(), _u("section", {
        ref_key: "keyboardNavigationContainer",
        ref: S,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          H[6] || (H[6] = Ca(ya((...U) => re(j) && re(j)(...U), ["stop", "prevent"]), ["tab"])),
          H[7] || (H[7] = Ca(ya((...U) => re(j) && re(j)(...U), ["stop", "prevent"]), ["down"])),
          H[8] || (H[8] = Ca(ya((...U) => re(ce) && re(ce)(...U), ["stop", "prevent"]), ["up"])),
          Ca(ya(V, ["stop", "prevent"]), ["esc"]),
          H[9] || (H[9] = Ca(ya((U) => L(re(T)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        tn(re(I), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Sa(() => [
            tn(re(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Sa(() => [
                wu(A7("h5", N7, null, 512), [
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
              default: Sa(() => [
                tn(re(z7), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": M.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: V
                }, {
                  default: Sa(() => [
                    tn(re(O7), { icon: re(ps) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        tn(re(j7), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": H[0] || (H[0] = (U) => t.value = U),
          class: "sx-article-search__search-input",
          placeholder: M.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        tn(re(Ta), {
          class: "sx-article-search__language-button-group",
          items: re(w),
          active: re(c),
          onSelect: C
        }, null, 8, ["items", "active"]),
        t.value ? D7("", !0) : (as(), _u(P7, { key: 0 }, [
          ze.value ? (as(), vu(fu, {
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
          }, null, 8, ["card-title", "suggestions"])) : wu((as(), _u("p", M7, null, 512)), [
            [G, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        wu(tn(d7, {
          "search-input": t.value,
          "search-results-loading": re(m),
          "search-results-slice": re(p),
          "selected-item": re(T),
          onSuggestionClicked: H[4] || (H[4] = (U) => L(U))
        }, null, 8, ["search-input", "search-results-loading", "search-results-slice", "selected-item"]), [
          [B7, !!t.value]
        ]),
        tn(re(Vt), {
          value: s.value,
          "onUpdate:value": H[5] || (H[5] = (U) => s.value = U),
          class: "sx-article-search-language-selector",
          fullscreen: J.value,
          header: J.value,
          title: M.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: R
        }, {
          default: Sa(() => [
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
      ], 40, F7);
    };
  }
};
const q7 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: H7
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, G7 = window.Vue.resolveComponent, W7 = window.Vue.createVNode, X7 = window.Vue.normalizeClass, K7 = window.Vue.openBlock, Y7 = window.Vue.createElementBlock;
function Q7(e, t, n, o, s, a) {
  const r = G7("sx-article-search");
  return K7(), Y7("main", {
    class: X7(["sx-article-search-view", a.classes])
  }, [
    W7(r)
  ], 2);
}
const J7 = /* @__PURE__ */ he(q7, [["render", Q7]]), Z7 = () => {
  const e = Ua(), { logDashboardOpenEvent: t } = Xw(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o,
    pageURLParameter: s
  } = P();
  return () => b(void 0, null, function* () {
    return t(), e(
      s.value,
      n.value,
      o.value,
      "direct_preselect",
      null,
      !1
    );
  });
}, eF = window.Vuex.useStore, tF = [
  {
    path: "",
    name: "dashboard",
    component: Zm,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: J7,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: t3,
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
    component: S5,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: FT,
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
      } = P();
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
    component: Q9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Zm,
    meta: { workflowStep: 0 }
  }
], fd = Vk({
  history: $b(),
  routes: tF
}), Su = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, nF = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
fd.beforeEach((e, t, n) => {
  const o = eF();
  if (mw.user.isAnon() || yf.assertUser().catch((i) => {
    i instanceof us && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = Z7(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: c
  } = P();
  if (!!(a.value && r.value && l.value)) {
    if (nF(
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
fd.afterEach((e, t) => {
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
const oF = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, sF = window.Vue.createApp, aF = mw.config.get("wgUserLanguage"), iF = "en", rF = mw.messages.values || {}, Eo = sF(fx);
Eo.use(fd);
Eo.use(Xx);
Eo.use(_1);
Eo.use(v1);
const lF = Q1({
  locale: aF,
  finalFallback: iF,
  messages: rF,
  wikilinks: !0
});
Eo.use(lF);
Eo.use(oF);
Eo.mount("#contenttranslation");
