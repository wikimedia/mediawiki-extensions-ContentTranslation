var vv = Object.defineProperty, _v = Object.defineProperties;
var Sv = Object.getOwnPropertyDescriptors;
var vd = Object.getOwnPropertySymbols;
var yv = Object.prototype.hasOwnProperty, Cv = Object.prototype.propertyIsEnumerable;
var _d = (e, t, n) => t in e ? vv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, me = (e, t) => {
  for (var n in t || (t = {}))
    yv.call(t, n) && _d(e, n, t[n]);
  if (vd)
    for (var n of vd(t))
      Cv.call(t, n) && _d(e, n, t[n]);
  return e;
}, Ke = (e, t) => _v(e, Sv(t));
var x = (e, t, n) => new Promise((o, s) => {
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
}, bv = window.Vue.toDisplayString, Xr = window.Vue.openBlock, Kr = window.Vue.createElementBlock, kv = window.Vue.createCommentVNode, Sd = window.Vue.createElementVNode, $v = window.Vue.normalizeStyle, Vv = window.Vue.normalizeClass, Ev = ["width", "height", "aria-labelledby"], Lv = ["id"], Tv = ["d"];
function Av(e, t, n, o, s, a) {
  return Xr(), Kr("span", {
    class: Vv(["mw-ui-icon notranslate", a.classes])
  }, [
    (Xr(), Kr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (Xr(), Kr("title", {
        key: 0,
        id: n.iconName
      }, bv(n.iconName), 9, Lv)) : kv("", !0),
      Sd("g", {
        style: $v({ fill: n.iconColor })
      }, [
        Sd("path", { d: a.iconImagePath }, null, 8, Tv)
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
}, Pv = window.Vue.renderSlot, Bv = window.Vue.resolveComponent, yd = window.Vue.normalizeClass, Ha = window.Vue.openBlock, Yr = window.Vue.createBlock, Qr = window.Vue.createCommentVNode, Fv = window.Vue.toDisplayString, Nv = window.Vue.createElementBlock, Mv = window.Vue.toHandlerKey, Uv = window.Vue.withModifiers, Iv = window.Vue.mergeProps, Rv = window.Vue.createElementVNode, zv = window.Vue.resolveDynamicComponent, Ov = window.Vue.withCtx, jv = { class: "mw-ui-button__content" }, Hv = ["textContent"];
function qv(e, t, n, o, s, a) {
  const r = Bv("mw-icon");
  return Ha(), Yr(zv(a.component), {
    class: yd(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Ov(() => [
      Pv(e.$slots, "default", {}, () => [
        Rv("span", jv, [
          n.icon ? (Ha(), Yr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: yd(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Qr("", !0),
          !a.isIcon && n.label ? (Ha(), Nv("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Fv(n.label)
          }, null, 8, Hv)) : Qr("", !0),
          n.indicator ? (Ha(), Yr(r, Iv({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Mv(a.indicatorClickEvent)]: t[0] || (t[0] = Uv((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Qr("", !0)
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
}, Wv = window.Vue.renderList, Xv = window.Vue.Fragment, Jr = window.Vue.openBlock, Cd = window.Vue.createElementBlock, Kv = window.Vue.resolveComponent, Yv = window.Vue.withModifiers, Qv = window.Vue.mergeProps, Jv = window.Vue.createBlock, Zv = { class: "row mw-ui-button-group ma-0 pa-0" };
function e0(e, t, n, o, s, a) {
  const r = Kv("mw-button");
  return Jr(), Cd("div", Zv, [
    (Jr(!0), Cd(Xv, null, Wv(n.items, (l) => (Jr(), Jv(r, Qv({
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
const La = /* @__PURE__ */ he(Gv, [["render", e0]]);
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
}, xd = window.Vue.renderSlot, n0 = window.Vue.toDisplayString, bd = window.Vue.openBlock, kd = window.Vue.createElementBlock, o0 = window.Vue.createCommentVNode, s0 = window.Vue.createElementVNode, a0 = { class: "mw-ui-card" }, i0 = ["textContent"], r0 = { class: "mw-ui-card__content" };
function l0(e, t, n, o, s, a) {
  return bd(), kd("div", a0, [
    xd(e.$slots, "header", {}, () => [
      n.title ? (bd(), kd("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: n0(n.title)
      }, null, 8, i0)) : o0("", !0)
    ]),
    s0("div", r0, [
      xd(e.$slots, "default")
    ])
  ]);
}
const Je = /* @__PURE__ */ he(t0, [["render", l0]]);
const c0 = {}, u0 = window.Vue.openBlock, d0 = window.Vue.createElementBlock, g0 = { class: "mw-ui-divider row" };
function m0(e, t) {
  return u0(), d0("div", g0);
}
const Cr = /* @__PURE__ */ he(c0, [["render", m0]]);
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
const R = /* @__PURE__ */ he(C0, [["render", L0]]), Su = ["mobile", "tablet", "desktop", "desktop-wide"], T0 = Su.reduce(
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
      for (let n = 0; n < Su.length; n++) {
        let o = Su[n], s = this.$props[o];
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
const b = /* @__PURE__ */ he(A0, [["render", U0]]), I0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", R0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", xr = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", z0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, O0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", wf = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", j0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", H0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", br = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", q0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", G0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", W0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", $d = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", X0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", vf = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", K0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", Y0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Q0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", J0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Z0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", yu = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, e_ = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, t_ = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, _f = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", n_ = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const Zr = window.Vue.computed, o_ = window.Vue.watch, s_ = window.Vue.ref, a_ = window.Vue.nextTick, i_ = {
  name: "MwDialog",
  components: {
    MwButton: Xe,
    MwRow: R,
    MwCol: b,
    MwDivider: Cr
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
    const n = s_(null), o = Zr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Zr(
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
    const l = Zr(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClass: s,
      mwIconClose: br,
      root: n
    };
  }
}, Vd = window.Vue.normalizeClass, el = window.Vue.createElementVNode, tl = window.Vue.renderSlot, qa = window.Vue.resolveComponent, Ss = window.Vue.createVNode, nl = window.Vue.withCtx, Ed = window.Vue.createCommentVNode, r_ = window.Vue.withKeys, Ld = window.Vue.openBlock, l_ = window.Vue.createElementBlock, c_ = window.Vue.Transition, u_ = window.Vue.normalizeStyle, d_ = window.Vue.createBlock, g_ = { class: "mw-ui-dialog__shell items-stretch" }, m_ = { class: "mw-ui-dialog__body" };
function p_(e, t, n, o, s, a) {
  const r = qa("mw-col"), l = qa("mw-button"), c = qa("mw-row"), u = qa("mw-divider");
  return Ld(), d_(c_, {
    name: "mw-ui-animation-fade",
    style: u_(o.cssVars)
  }, {
    default: nl(() => [
      n.value ? (Ld(), l_("div", {
        key: 0,
        ref: "root",
        class: Vd(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = r_((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        el("div", {
          class: Vd(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        el("div", g_, [
          n.header ? tl(e.$slots, "header", { key: 0 }, () => [
            Ss(c, { class: "mw-ui-dialog__header" }, {
              default: nl(() => [
                Ss(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Ss(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: nl(() => [
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
          ]) : Ed("", !0),
          el("div", m_, [
            tl(e.$slots, "default")
          ]),
          tl(e.$slots, "footer")
        ])
      ], 34)) : Ed("", !0)
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
}, Td = window.Vue.renderSlot, f_ = window.Vue.resolveComponent, Ga = window.Vue.openBlock, ol = window.Vue.createBlock, Ad = window.Vue.createCommentVNode, w_ = window.Vue.resolveDynamicComponent, v_ = window.Vue.toDisplayString, __ = window.Vue.mergeProps, S_ = window.Vue.withModifiers, y_ = window.Vue.createElementVNode, C_ = window.Vue.normalizeClass, x_ = window.Vue.createElementBlock, b_ = { class: "mw-ui-input__content" };
function k_(e, t, n, o, s, a) {
  const r = f_("mw-icon");
  return Ga(), x_("div", {
    class: C_(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    y_("div", b_, [
      Td(e.$slots, "icon", {}, () => [
        n.icon ? (Ga(), ol(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Ad("", !0)
      ]),
      (Ga(), ol(w_(n.type === "textarea" ? n.type : "input"), __({
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
      Td(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ga(), ol(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = S_((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Ad("", !0)
      ])
    ])
  ], 2);
}
const Cu = /* @__PURE__ */ he(h_, [["render", k_]]);
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
const gt = /* @__PURE__ */ he($_, [["render", A_]]), kt = {
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
}, Dd = window.Vue.normalizeStyle, Pd = window.Vue.openBlock, B_ = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const F_ = window.Vue.resolveComponent, N_ = window.Vue.createBlock;
function M_(e, t, n, o, s, a) {
  const r = F_("mw-ui-icon");
  return n.thumbnail ? (Pd(), B_("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Dd(o.style)
  }, null, 4)) : (Pd(), N_(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Dd(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Mu = /* @__PURE__ */ he(P_, [["render", M_]]);
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
}, Bd = window.Vue.normalizeClass, Fd = window.Vue.normalizeStyle, I_ = window.Vue.createElementVNode, R_ = window.Vue.openBlock, z_ = window.Vue.createElementBlock, O_ = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function j_(e, t, n, o, s, a) {
  return R_(), z_("div", {
    class: Bd(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Fd(a.containerStyles)
  }, [
    I_("div", {
      class: Bd(["mw-progress-bar__bar", a.barClass]),
      style: Fd(a.barStyles)
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
) }), G_ = window.Vue.ref, Nd = window.Vue.computed, W_ = (e, t, n, o) => {
  const s = G_(0), a = Nd(
    () => t.value > e.value
  ), r = Nd(
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
const Wa = window.Vue.ref, X_ = window.Vue.onMounted, Md = window.Vue.computed, K_ = window.Vue.nextTick, Y_ = {
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
    const t = Wa(!0), n = Wa(null), o = Md(
      () => Math.min(e.minHeight, s.value)
    ), s = Wa(1), { initiateDrag: a } = q_(
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
    } = W_(o, s, n, t), d = () => u(c.value + 1), g = Wa(null), m = Md(() => ({
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
    return X_(() => x(this, null, function* () {
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
}, Q_ = window.Vue.renderSlot, J_ = window.Vue.normalizeClass, Xa = window.Vue.createElementVNode, Z_ = window.Vue.resolveComponent, e1 = window.Vue.createVNode, sl = window.Vue.openBlock, t1 = window.Vue.createBlock, Ud = window.Vue.createCommentVNode, Id = window.Vue.createElementBlock, n1 = window.Vue.normalizeStyle, o1 = { class: "mw-ui-expandable-content__container" }, s1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, a1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function i1(e, t, n, o, s, a) {
  const r = Z_("mw-button");
  return sl(), Id("div", {
    class: "mw-ui-expandable-content",
    style: n1(o.cssVars)
  }, [
    Xa("div", o1, [
      Xa("div", {
        ref: "contentRef",
        class: J_(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        Q_(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (sl(), Id("div", s1, [
        e1(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (sl(), t1(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Ud("", !0)
      ])) : Ud("", !0)
    ]),
    Xa("div", a1, [
      Xa("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const r1 = /* @__PURE__ */ he(Y_, [["render", i1]]);
const Ka = window.Vue.computed, l1 = {
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
    const t = Ka(() => e.size / 2 * 0.9), n = Ka(() => Math.PI * (t.value * 2)), o = Ka(
      () => (100 - e.percentage) / 100 * n.value
    ), s = Ka(() => ({
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
}, Rd = window.Vue.createElementVNode, zd = window.Vue.normalizeStyle, c1 = window.Vue.openBlock, u1 = window.Vue.createElementBlock, d1 = ["width", "height", "viewport"], g1 = ["r", "cx", "cy", "stroke-dasharray"], m1 = ["r", "cx", "cy", "stroke-dasharray"];
function p1(e, t, n, o, s, a) {
  return c1(), u1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: zd(o.cssVars)
  }, [
    Rd("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, g1),
    Rd("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: zd({ strokeDashoffset: `${o.strokeDashOffset}px` })
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
}, al = {
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
      for (let s in al)
        al.hasOwnProperty(s) && (t.value[s] = al[s]());
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
class cs extends Error {
}
const S1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new cs();
}), yf = { assertUser: S1 };
const y1 = window.Vue.resolveDirective, ys = window.Vue.createElementVNode, Od = window.Vue.withDirectives, C1 = window.Vue.toDisplayString, x1 = window.Vue.unref, jd = window.Vue.withCtx, b1 = window.Vue.openBlock, k1 = window.Vue.createBlock, $1 = window.Vue.createCommentVNode, V1 = { class: "pa-4 sx-login-dialog__header" }, E1 = { class: "sx-login-dialog__body px-6 pb-4" }, L1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, T1 = ["href"], A1 = window.Vue.computed, D1 = window.Vue.ref, P1 = window.Vuex.useStore, B1 = {
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
        header: jd(() => [
          ys("div", V1, [
            Od(ys("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: jd(() => [
          Od(ys("div", E1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          ys("div", L1, [
            ys("a", {
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
class Uu {
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
const Ya = "original", Qa = "empty", M1 = {
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
      Ya,
      Qa
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
    return Ya;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Qa;
  }
  static isUserMTProvider(t) {
    return [Ya, Qa].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === Qa ? "blank" : t === Ya ? "source" : t.toLowerCase();
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
const Hd = (e) => {
  var n;
  const t = vr(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, vr = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, ko = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Cf = (e) => {
  const t = vr(e);
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
class il {
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
class dt {
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
    const t = vr(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Hd(this.transclusionNode) : null;
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
    return n && Hd(n) || "";
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
    const o = vr(n);
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
      new il({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new il({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new il({
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
const Iu = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), I1 = Iu - 10, R1 = [
  { status: "failure", value: 100 - Iu },
  { status: "warning", value: 100 - I1 },
  { status: "success", value: 100 }
], kf = (e, t, n) => {
  const o = qd(e).textContent, s = qd(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, z1 = (e) => R1.find((t) => e <= t.value).status, O1 = (e, t) => kf(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), j1 = () => (100 - Iu) / 100, qd = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, sn = {
  calculateScore: kf,
  getScoreStatus: z1,
  getMTScoreForPageSection: O1,
  getMtModificationThreshold: j1
}, Ja = "__LEAD_SECTION__";
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
    return Ja;
  }
  static isSectionLead(t) {
    return !t || t === Ja;
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
    return n instanceof dt ? n.transclusionNode.outerHTML : n instanceof eo ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof dt ? t.blockTemplateSelected = !1 : t instanceof eo && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof dt ? n.blockTemplateSelected = !0 : n instanceof eo && (n.selected = !0);
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
    if (o instanceof dt)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof dt ? n.blockTemplateProposedTranslations[t] || "" : n instanceof eo ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof dt ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof eo && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
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
    return this.isLeadSection ? Ja : this.originalTitle;
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
    return this.isLeadSection ? Ja : this.title;
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
class kr extends Uu {
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
const an = "previous-edits", rn = "popular", et = "topic", Pe = "geography", te = "collections", Ge = "automatic", Gt = "seed", Gd = window.Vue.ref, { topics: H1, regions: q1 } = mw.loader.require(
  "ext.cx.articlefilters"
), rl = {
  type: Ge,
  id: an
}, G1 = {
  type: Ge,
  id: rn
}, Ru = () => {
  const e = Gd(
    H1.flatMap((u) => u.topics).map((u) => u.topicId.toLowerCase())
  ), t = Gd(!1), n = (u, i) => e.value.includes(i) ? { type: et, id: i } : null, o = (u, i) => q1.some(
    (g) => g.id.toLowerCase() === i || g.countries.some(
      (m) => m.id.toLowerCase() === i
    )
  ) ? { type: Pe, id: i } : null, s = (u, i, d) => d && !d.some((g) => g.name.toLowerCase() === i) ? null : { type: te, id: u }, a = ({ type: u, id: i }, d = !1) => {
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
      return d && !d.length ? (t.value = !0, rl) : {
        type: Ge,
        id: te
      };
    if (g === et) {
      const p = n(i, m);
      if (p)
        return p;
      t.value = !0;
    } else if (g === Pe) {
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
    return rl;
  }, r = ({ type: u, id: i }) => c({ type: u, id: i }, rl), l = ({ type: u, id: i }) => c({ type: u, id: i }, G1), c = (u, i) => !(u != null && u.id) || !(u != null && u.type) || !(i != null && i.id) || !(i != null && i.type) ? !1 : u.id.toLowerCase() === i.id.toLowerCase() && u.type.toLowerCase() === i.type.toLowerCase();
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
            function w(P) {
              return () => {
                for (let W = 0; W < P.length; W++) {
                  const Ne = P[W]();
                  if (Ne !== null)
                    return Ne;
                }
                return null;
              };
            }
            function v(P) {
              const W = f, Ne = [];
              for (let At = 0; At < P.length; At++) {
                const Z = P[At]();
                if (Z === null)
                  return f = W, null;
                Ne.push(Z);
              }
              return Ne;
            }
            function y(P, W) {
              return () => {
                const Ne = f, At = [];
                let Z = W();
                for (; Z !== null; )
                  At.push(Z), Z = W();
                return At.length < P ? (f = Ne, null) : At;
              };
            }
            function C(P) {
              const W = P.length;
              return () => {
                let Ne = null;
                return p.slice(f, f + W) === P && (Ne = P, f += W), Ne;
              };
            }
            function _(P) {
              return () => {
                const W = p.slice(f).match(P);
                return W === null ? null : (f += W[0].length, W[0]);
              };
            }
            const k = _(/^\s+/), E = C("|"), M = C(":"), L = C("\\"), V = _(/^./), B = C("$"), X = _(/^\d+/), se = C('"'), ee = C("'"), ne = _(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), F = _(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), z = w([K, _(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function K() {
              const P = v([L, V]);
              return P === null ? null : P[1];
            }
            const J = w([K, F]), $e = w([K, ne]);
            function xe() {
              const P = v([B, X]);
              return P === null ? null : ["REPLACE", parseInt(P[1], 10) - 1];
            }
            const _e = (Oe = _(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), O = function(P) {
              return P.toString();
            }, () => {
              const P = Oe();
              return P === null ? null : O(P);
            });
            var Oe, O;
            function j() {
              const P = v([E, y(0, To)]);
              if (P === null)
                return null;
              const W = P[1];
              return W.length > 1 ? ["CONCAT"].concat(W) : W[0];
            }
            function ce() {
              const P = v([_e, M, xe]);
              return P === null ? null : [P[0], P[2]];
            }
            function S() {
              const P = v([_e, M, To]);
              return P === null ? null : [P[0], P[2]];
            }
            function A() {
              const P = v([_e, M]);
              return P === null ? null : [P[0], ""];
            }
            const T = w([function() {
              const P = v([w([ce, S, A]), y(0, j)]);
              return P === null ? null : P[0].concat(P[1]);
            }, function() {
              const P = v([_e, y(0, j)]);
              return P === null ? null : [P[0]].concat(P[1]);
            }]), N = C("{{"), U = C("}}"), H = C("[["), G = C("]]"), I = C("["), ie = C("]");
            function ot() {
              const P = v([N, T, U]);
              return P === null ? null : P[1];
            }
            const Ve = w([function() {
              const P = v([y(1, To), E, y(1, Lo)]);
              return P === null ? null : [["CONCAT"].concat(P[0]), ["CONCAT"].concat(P[2])];
            }, function() {
              const P = v([y(1, To)]);
              return P === null ? null : [["CONCAT"].concat(P[0])];
            }]);
            function Ia() {
              let P = null;
              const W = v([H, Ve, G]);
              if (W !== null) {
                const Ne = W[1];
                P = ["WIKILINK"].concat(Ne);
              }
              return P;
            }
            function Ra() {
              let P = null;
              const W = v([I, y(1, jr), k, y(1, Lo), ie]);
              return W !== null && (P = ["EXTLINK", W[1].length === 1 ? W[1][0] : ["CONCAT"].concat(W[1]), ["CONCAT"].concat(W[3])]), P;
            }
            const co = _(/^[A-Za-z]+/);
            function zr() {
              const P = _(/^[^"]*/), W = v([se, P, se]);
              return W === null ? null : W[1];
            }
            function Or() {
              const P = _(/^[^']*/), W = v([ee, P, ee]);
              return W === null ? null : W[1];
            }
            function vs() {
              const P = _(/^\s*=\s*/), W = v([k, co, P, w([zr, Or])]);
              return W === null ? null : [W[1], W[3]];
            }
            function _s() {
              const P = y(0, vs)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], P);
            }
            const jr = w([ot, xe, Ia, Ra, function() {
              const P = y(1, z)();
              return P === null ? null : P.join("");
            }]), Lo = w([ot, xe, Ia, Ra, function() {
              let P = null;
              const W = f, Ne = C("<"), At = _(/^\/?/), Z = _(/^\s*>/), un = v([Ne, co, _s, At, Z]);
              if (un === null)
                return null;
              const Bn = f, ft = un[1], Ao = y(0, Lo)(), Hr = f, fd = v([C("</"), co, Z]);
              if (fd === null)
                return ["CONCAT", p.slice(W, Bn)].concat(Ao);
              const pv = f, hv = fd[1], wd = un[2];
              if (function(uo, Oa, qr, Gr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((uo = uo.toLowerCase()) !== (Oa = Oa.toLowerCase()) || Gr.allowedHtmlElements.indexOf(uo) === -1)
                  return !1;
                const fv = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let ja = 0, wv = qr.length; ja < wv; ja += 2) {
                  const Wr = qr[ja];
                  if (Gr.allowedHtmlCommonAttributes.indexOf(Wr) === -1 && (Gr.allowedHtmlAttributesByElement[uo] || []).indexOf(Wr) === -1 || Wr === "style" && qr[ja + 1].search(fv) !== -1)
                    return !1;
                }
                return !0;
              }(ft, hv, wd.slice(1)))
                P = ["HTMLELEMENT", ft, wd].concat(Ao);
              else {
                const uo = (Oa) => Oa.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                P = ["CONCAT", uo(p.slice(W, Bn))].concat(Ao, uo(p.slice(Hr, pv)));
              }
              return P;
            }, function() {
              const P = y(1, $e)();
              return P === null ? null : P.join("");
            }]), To = w([ot, xe, function() {
              const P = y(1, J)();
              return P === null ? null : P.join("");
            }]), za = function() {
              const P = y(0, Lo)();
              return P === null ? null : ["CONCAT"].concat(P);
            }();
            if (za === null || f !== p.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + p);
            return za;
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
const Wd = (e) => {
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
        const { msg: a, params: r } = Wd(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = Wd(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Pn = window.Vue.ref, J1 = window.Vue.computed, $r = Pn(null), Vr = Pn(null), Er = Pn(null), Ta = Pn(null), zu = Pn(null), Lr = Pn(null), Ef = Pn(null), Lf = Pn(null), Ou = Pn(null), { validateFilters: Z1, filtersValidatorError: eS } = Ru(), Tf = {
  from: $r,
  to: Vr,
  section: Ta,
  draft: zu,
  page: Er,
  revision: Lr,
  "active-list": Ou
}, tS = J1(() => ({
  type: Ef.value,
  id: Lf.value
})), Af = (e, t) => {
  Ef.value = e, Lf.value = t, _r("filter-type", e), t && _r("filter-id", t);
}, nS = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof kr && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), Tf[o].value = s;
  }
  t.delete("title"), Aa(Object.fromEntries(t));
}, ju = (e, t) => {
  Tf[e].value = t, _r(e, t);
}, oS = (e) => {
  ju("section", e);
}, sS = (e) => {
  ju("page", e);
}, aS = (e) => {
  ju("active-list", e);
}, Aa = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    F1(`Special:ContentTranslation${t}`, e)
  );
}, iS = () => {
  const e = fe(), t = new URLSearchParams(location.search);
  Er.value = t.get("page"), $r.value = t.get("from"), Vr.value = t.get("to"), Ta.value = t.get("section"), Lr.value = t.get("revision"), Ou.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = Z1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Af(n.type, n.id), eS.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, rS = () => {
  const e = new URLSearchParams(location.search);
  Ta.value = null, e.delete("section"), e.delete("title"), Aa(Object.fromEntries(e));
}, _r = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), Aa(Object.fromEntries(n));
}, lS = (e) => new URLSearchParams(location.search).get(e), cS = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), $r.value = e, Vr.value = t, n.delete("title"), Aa(Object.fromEntries(n));
}, uS = () => {
  const e = new URLSearchParams(location.search);
  Er.value = null, Ta.value = null, zu.value = null, Lr.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), Aa(Object.fromEntries(e));
}, dS = () => new URLSearchParams(location.search).get("force-quick-tutorial"), D = () => ({
  isQuickTutorialForced: dS,
  setLanguageURLParams: cS,
  setSectionURLParam: oS,
  setTranslationURLParams: nS,
  initializeURLState: iS,
  clearTranslationURLParameters: uS,
  clearSectionURLParameter: rS,
  setUrlParam: _r,
  getUrlParam: lS,
  pageURLParameter: Er,
  sourceLanguageURLParameter: $r,
  targetLanguageURLParameter: Vr,
  sectionURLParameter: Ta,
  draftURLParameter: zu,
  revisionURLParameter: Lr,
  setPageURLParam: sS,
  currentSuggestionFilters: tS,
  setFilterURLParams: Af,
  activeDashboardTabParameter: Ou,
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
  return x(this, null, function* () {
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
const Tr = {
  fetchSupportedLanguageCodes: gS,
  fetchSupportedMTProviders: mS,
  fetchCXServerToken: pS,
  addWikibaseLink: hS
}, fS = window.Vue.ref, Za = fS([]);
let Xd = !1;
function Da() {
  return {
    fetchSupportedLanguageCodes: () => x(this, null, function* () {
      if (!Xd) {
        Xd = !0, Za.value = yield Tr.fetchSupportedLanguageCodes();
        const t = mw.config.get(
          "ContentTranslationDomainCodeMapping"
        );
        Object.keys(t).forEach((n) => {
          if (n === "be-x-old")
            return;
          const o = t[n], s = Za.value.indexOf(o);
          s > -1 && (Za.value[s] = n);
        });
      }
    }),
    supportedLanguageCodes: Za
  };
}
class us {
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
class wS {
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
function vS() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const _S = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), vS();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, SS = (e, t) => {
  let n, o;
  return t ? (n = _S(e), o = n.$element.find(
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
}, yS = (e, t) => {
  const n = Array.from(
    SS(e, t)
  );
  return CS(n).map(
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
        (i) => new dt({
          sentences: xS(i),
          node: i
        })
      );
      return new no({ id: c, subSections: u, isLeadSection: l });
    }
  );
}, CS = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, xS = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new eo({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Df = {
  convertSegmentedContentToPageSections: yS
}, Hu = 120, bS = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7-day page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Hu,
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
          return new us(Ke(me({}, g), { _alias: m }));
        })
      );
    }).fail(a);
  });
}, kS = (e, t) => {
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
      a(Object.freeze(new wS(i, u)));
    }).fail(r);
  });
}, $S = (e, t) => {
  if (!Number.isInteger(t) || t <= 0)
    throw new RangeError("chunk(): size must be a positive integer");
  const n = [];
  for (let o = 0; o < e.length; o += t)
    n.push(e.slice(o, o + t));
  return n;
}, VS = (e, t, n) => x(void 0, null, function* () {
  const o = Q.getApi(e), a = $S(n, 50).map((l) => {
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
}), ES = (e, t, n, o = null) => {
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
  ), a = LS(
    e,
    t,
    n,
    o
  );
  return Promise.all([a, s]).then(
    ([r, l]) => {
      const c = Df.convertSegmentedContentToPageSections(
        r,
        !1
        // No need to resolve references. Content can be used as it is
      );
      return c.forEach((u) => {
        const i = l.find((d) => d.id === u.id);
        u.originalTitle = (i == null ? void 0 : i.title) || "";
      }), new us({
        sections: c,
        content: r,
        pagelanguage: e,
        title: n
      });
    }
  );
}, LS = (e, t, n, o = null) => {
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
}, TS = (e) => {
  const t = N1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Hu,
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
  }).then((o) => o.map((s) => new us(s)));
}, AS = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount|pageprops",
    piprop: "thumbnail",
    pithumbsize: Hu,
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
      (a) => new us(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => (mw.cx.eventlogging.stats.articleSearchFailed(), []));
}, ds = {
  fetchPages: bS,
  fetchLanguageTitles: kS,
  fetchPageContent: ES,
  fetchNearbyPages: TS,
  searchPagesByTitlePrefix: AS,
  fetchLanguageLinksForLanguage: VS
}, DS = window.Vuex.useStore, io = () => {
  const e = DS();
  return (t, n) => {
    n = n.filter(
      (a) => !!a && !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const r = n.slice(a, a + o), l = ds.fetchPages(t, r).then(
        (c) => c.forEach(
          (u) => e.commit("mediawiki/addPage", u)
        )
      );
      s.push(l);
    }
    return Promise.all(s);
  };
}, PS = window.Vuex.useStore, Ar = () => {
  const e = PS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
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
const Pf = [
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
], BS = [
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
], FS = [
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
], NS = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], MS = [
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
], US = {
  en: Pf,
  es: BS,
  bn: FS,
  fr: NS,
  de: MS
};
class is {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s, this.inFeaturedCollection = !1;
  }
}
class qu {
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
class Bf extends oo {
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
    }), this.collection = new qu(u);
  }
  /**
   * @returns {boolean}
   */
  collectionMatchesProvider() {
    var t;
    return this.collection.name === ((t = this.suggestionProvider) == null ? void 0 : t.id);
  }
}
class Ff extends on {
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
    }), this.collection = new qu(g);
  }
  /**
   * @returns {boolean}
   */
  collectionMatchesProvider() {
    var t;
    return this.collection.name === ((t = this.suggestionProvider) == null ? void 0 : t.id);
  }
}
let ei = null;
const Nf = (e) => {
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
  }), o = t + "?" + n;
  return fetch(o).then((s) => s.json()).then((s) => (ei = s.query.globaluserinfo.editcount, ei)).catch((s) => {
    mw.log.error("Error while fetching global edit count for user. ", s);
  });
}, IS = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits", RS = () => x(void 0, null, function* () {
  if (mw.user.isAnon())
    return !1;
  const e = mw.user.getName();
  return (yield Nf(e)) < 100;
}), We = {
  stub: "stub",
  easy: "easy",
  medium: "medium",
  hard: "hard",
  unknown: "unknown"
}, Mf = {
  easy: 2500,
  medium: 1e4,
  hard: 4e4
}, xu = {
  easy: 1e3,
  medium: 4e3,
  hard: 12e3
}, Uf = (e, t) => !e || e < 0 ? We.unknown : e < t.easy ? We.stub : e < t.medium ? We.easy : e < t.hard ? We.medium : We.hard, If = (e) => Uf(e, Mf), Gu = (e) => Uf(e, xu), zS = (e) => {
  if (!e)
    return !1;
  const t = If(e);
  return t === We.stub || t === We.easy;
}, OS = (e) => {
  if (!e)
    return !1;
  const t = Gu(e);
  return t === We.stub || t === We.easy;
}, Rf = (e) => e ? Gu(e) === We.easy : !1;
class zf {
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
const jS = Pf, ln = 6, HS = (e, t) => x(void 0, null, function* () {
  if (yield RS()) {
    let o;
    e ? e === "/sections" && (o = xu) : (o = Mf, qt || (t.lead_section = !0, o = xu)), o && (t.min_size = o[We.easy], t.max_size = o[We.medium] - 1);
  } else
    !qt && e !== "/sections" && (t.lead_section = !0);
}), Et = (n) => x(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
  let o = mw.config.get("wgRecommendToolAPIURL");
  yield HS(e, t), e && (o += e);
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
function qS() {
  return x(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Et({ urlPostfix: t, urlParams: e })) || [], o = {};
      for (const s in n)
        o[s] = n[s].map(
          (a) => new qu(a)
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
function GS(e, t, n, o) {
  const s = {
    collection: e
  };
  return t && t.length ? s.qids = t.join("|") : n && o && o.length && (s.language = n, s.titles = o.join("|")), Et({
    urlPostfix: "/page-collection-membership",
    urlParams: s
  });
}
function WS(e) {
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
        a ? new zf(
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
function XS(s, a) {
  return x(this, arguments, function* (e, t, n = null, o = ln) {
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
const KS = (e, t) => x(void 0, null, function* () {
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
}), YS = (e, t) => x(void 0, null, function* () {
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
}), QS = (l) => x(void 0, [l], function* ({
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
      (d) => new Bf({
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
}), JS = (l) => x(void 0, [l], function* ({
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
      (g) => new Ff({
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
function ZS(e, t, n) {
  return x(this, null, function* () {
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
function ey(e, t, n = null) {
  return x(this, null, function* () {
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
function ty(a) {
  return x(this, arguments, function* ({
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
function ny(a) {
  return x(this, arguments, function* ({
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
function oy(a) {
  return x(this, arguments, function* ({
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
function sy(a) {
  return x(this, arguments, function* ({
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
function ay(e) {
  return x(this, null, function* () {
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
function iy(e, t) {
  return x(this, null, function* () {
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
function ry(e) {
  const t = jS.map((o) => encodeURIComponent(o)).join("|"), n = Q.getCXServerUrl(
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
const ly = (e, t, n) => {
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
}, cy = (e) => {
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
}, uy = () => {
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
    (n) => n.map((o) => new is(o))
  );
}, ge = {
  fetchFavorites: uy,
  fetchPageSuggestions: XS,
  fetchSectionSuggestion: ZS,
  fetchSectionSuggestions: ey,
  fetchAppendixTargetSectionTitles: ry,
  fetchArticleSections: iy,
  markFavorite: ly,
  unmarkFavorite: cy,
  fetchUserEdits: ay,
  fetchMostPopularPageSuggestions: KS,
  fetchMostPopularSectionSuggestions: YS,
  fetchPageSuggestionsByTopics: ty,
  fetchSectionSuggestionsByTopics: ny,
  fetchPageSuggestionsByCountries: oy,
  fetchSectionSuggestionsByCountries: sy,
  fetchPageCollectionGroups: qS,
  fetchPageSuggestionsByCollections: QS,
  fetchSectionSuggestionsByCollections: JS,
  fetchFeaturedCollectionDataByLanguage: WS,
  fetchPageCollectionMembership: GS
}, dy = window.Vuex.useStore, gs = () => {
  const e = dy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), o = (l) => {
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
function gy(e) {
  const t = [...e];
  for (let n = t.length - 1; n > 0; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [t[n], t[o]] = [t[o], t[n]];
  }
  return t;
}
class my {
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
    this.seeds = gy(t);
  }
}
const py = window.Vuex.useStore, hy = window.Vue.computed, Wu = window.Vue.ref, fy = Wu([]), wy = Wu([]), ll = [], cl = [], Kd = [], Yd = Wu({});
let Cs = null;
const ul = {
  page: fy,
  section: wy
}, Of = () => {
  const e = py(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), o = hy(
    () => Yd.value[t.value] || []
  ), s = () => x(void 0, null, function* () {
    cl.includes(t.value) || (Yd.value[t.value] = yield ge.fetchUserEdits(t.value).then((d) => (cl.push(t.value), d)));
  }), a = () => x(void 0, null, function* () {
    let i = e.getters["translator/getTranslationsByStatus"]("published");
    i = i.filter(
      (p) => p.sourceLanguage === t.value
    );
    const d = ll.includes(i);
    if (i.length && !d)
      return ll.push(t.value), i.map(
        (p) => p.sourceTitle
      );
    if (ll.push(t.value), !cl.includes(t.value) && (yield s(), o.value.length > 0))
      return o.value;
    if (!Kd.includes(n.value)) {
      const h = (yield ge.fetchUserEdits(n.value).then((f) => (Kd.push(n.value), f))).slice(0, 20);
      if (h.length)
        return ds.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          h
        );
    }
    return null;
  }), r = (i) => {
    let d = ul[i].value.find(
      (g) => g.matchesLanguagePair(t.value, n.value)
    );
    return d || (d = new my({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), ul[i].value.push(d)), d;
  }, l = () => x(void 0, null, function* () {
    let i = !1, d = [];
    do {
      d = yield a(), d || (i = !0);
      for (const g in ul) {
        const m = r(g);
        m.setSeeds([
          ...m.seeds,
          ...d || []
        ]);
      }
    } while (!i && !(d != null && d.length));
  }), c = () => Cs || (Cs = l(), Cs.finally(() => {
    Cs = null;
  }));
  return {
    getSuggestionSeed: (i) => x(void 0, null, function* () {
      let d = r(i);
      return d.seeds.length || (yield c()), d.shiftSeeds();
    }),
    fetchPreviousEditsInSource: s,
    previousEditsInSource: o
  };
}, vy = 5;
function Vo(e) {
  return x(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < vy);
  });
}
const _y = window.Vuex.useStore, Sy = () => {
  const e = _y(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), { getSuggestionSeed: o } = Of(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = gs(), l = {
    id: an,
    type: Ge
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => x(void 0, null, function* () {
      const d = [];
      return yield Vo(() => x(void 0, null, function* () {
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
    fetchSectionSuggestionsBasedOnEdits: (i) => x(void 0, null, function* () {
      const d = [];
      return yield Vo(() => x(void 0, null, function* () {
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
}, Xu = window.Vue.ref, xs = "ungrouped", Qd = Xu({}), Jd = Xu({}), Zd = Xu(!1);
let dl = null;
const Dr = () => {
  const e = () => x(void 0, null, function* () {
    try {
      const n = yield ge.fetchPageCollectionGroups(), o = Object.fromEntries(
        Object.keys(n).sort((s, a) => s === xs ? 1 : a === xs ? -1 : s.localeCompare(a)).map((s) => [s, n[s]])
      );
      o[xs] && (o[xs] = o[xs].sort(
        (s, a) => s.name.localeCompare(a.name)
      )), Qd.value = o, Jd.value = Object.values(n).flat(), Zd.value = !0;
    } catch (n) {
      mw.log.error("Failed to fetch page collections", n);
    }
  });
  return {
    fetchPageCollectionGroups: () => (dl || (dl = e()), dl),
    pageCollectionGroupsFetched: Zd,
    pageCollectionGroups: Qd,
    pageCollections: Jd
  };
}, gl = window.Vue.computed, Pr = window.Vue.ref, yy = window.Vue.watch, Cy = new mw.cx.SiteMapper(), Sr = Cy.getCurrentWikiLanguageCode(), xy = mw.config.get(
  "wgContentTranslationFeaturedCollection"
), by = mw.config.get(
  "wgContentTranslationFeaturedCollectionCommunityName"
), ky = mw.config.get(
  "wgContentTranslationFeaturedCollectionDescription"
), $y = mw.config.get(
  "wgContentTranslationFeaturedCollectionLink"
), jf = Pr({
  [Sr]: new zf(
    xy,
    ky,
    by,
    $y,
    Sr
  )
}), bu = Pr({
  [Sr]: Promise.resolve()
}), ku = Pr({
  [Sr]: !0
});
let eg = !1;
const tg = (e) => {
  if (!e || bu.value[e])
    return;
  const t = ge.fetchFeaturedCollectionDataByLanguage(e).then((n) => {
    n && (jf.value[e] = n), ku.value[e] = !0;
  }).catch((n) => {
    ku.value[e] = !0, console.error("Failed to fetch featured collection:", n);
  });
  bu.value[e] = t;
}, Vy = (e, t) => !e || !Array.isArray(t) ? !1 : t.some(
  (n) => n.name.toLowerCase() === e.toLowerCase()
), Wt = (e = void 0) => {
  const { pageCollections: t, fetchPageCollectionGroups: n } = Dr();
  let o;
  if (e)
    o = Pr(e), e && tg(e);
  else {
    const { targetLanguageURLParameter: l } = D();
    o = l, eg || (yy(
      o,
      (c) => {
        c && tg(c);
      },
      { immediate: !0 }
    ), eg = !0);
  }
  const s = gl(() => {
    const l = o.value, c = jf.value[l];
    return c != null && c.name && Vy(c.name, t.value) ? c : null;
  }), a = gl(
    () => ku.value[o.value] || !1
  ), r = gl(
    () => Promise.all([
      n(),
      bu.value[o.value]
    ])
  );
  return {
    featuredCollection: s,
    featuredCollectionFetched: a,
    featuredCollectionPromise: r
  };
}, Ey = window.Vuex.useStore, Ly = window.Vue.computed, Br = window.Vue.ref, ng = Br({}), og = Br({}), sg = Br({}), ag = Br({}), ig = (e, t) => e && t.value[e] || null, rg = (e, t) => e ? t.value[e] ? t.value[e] === -1 ? -1 : t.value[e] + 1 : 0 : null, Ku = () => {
  const e = Ey(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), s = Ly(() => {
    var f;
    return ((f = o.value) == null ? void 0 : f.type) !== te ? null : o.value.id;
  }), { featuredCollection: a, featuredCollectionPromise: r } = Wt(), {
    isSectionSuggestionValid: l,
    isPageSuggestionValid: c,
    sectionSuggestionExists: u
  } = gs(), i = (f = null) => f ? { id: f, type: te } : o.value, d = (f) => x(void 0, null, function* () {
    var E;
    let w = null, v = null, y = null;
    if (!f)
      yield r.value, w = ((E = a.value) == null ? void 0 : E.name) || null;
    else if (v = rg(f, og), y = ig(f, ng), v === -1)
      return [];
    const C = [], _ = yield ge.fetchPageSuggestionsByCollections({
      sourceLanguage: t.value,
      targetLanguage: n.value,
      featuredCollection: w,
      continueOffset: v,
      continueSeed: y,
      collectionName: f
    });
    _.continue_offset && (og.value[f] = _.continue_offset), _.continue_seed && (ng.value[f] = _.continue_seed);
    const k = _.recommendations.filter(
      (M) => c(M)
    );
    return C.push(...k), C.forEach((M) => {
      M.suggestionProvider = i(f);
    }), C;
  }), g = () => d(s.value), m = () => x(void 0, null, function* () {
    var w;
    (yield d(
      ((w = a.value) == null ? void 0 : w.name) || null
    )).forEach(
      (v) => e.commit("suggestions/addPageSuggestion", v)
    );
  }), p = (f) => x(void 0, null, function* () {
    var M;
    let w = null, v = null, y = null;
    if (!f)
      yield r.value, w = ((M = a.value) == null ? void 0 : M.name) || null;
    else if (v = rg(
      f,
      ag
    ), y = ig(f, sg), v === -1)
      return [];
    yield r.value;
    const C = [], _ = yield ge.fetchSectionSuggestionsByCollections({
      sourceLanguage: t.value,
      targetLanguage: n.value,
      featuredCollection: w,
      continueOffset: v,
      continueSeed: y,
      collectionName: f
    });
    _.continue_offset && (ag.value[f] = _.continue_offset), _.continue_seed && (sg.value[f] = _.continue_seed);
    const k = _.recommendations.filter(
      (L) => l(L)
    ), E = _.recommendations.filter(
      (L) => !l(L)
    );
    return C.push(...k), E.forEach((L) => {
      L && !u(L) && (L.isListable = !1, e.commit("suggestions/addSectionSuggestion", L));
    }), C.forEach((L) => {
      L.suggestionProvider = i(f);
    }), C;
  });
  return {
    fetchSectionSuggestionsByCollections: () => p(s.value),
    fetchPageSuggestionsByCollections: g,
    fetchPageSuggestionsByFeaturedCollections: m,
    doFetchPageSuggestionsByCollection: d,
    doFetchSectionSuggestionsByCollection: p
  };
}, Ty = window.Vuex.useStore, Ay = () => {
  const e = Ty(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), o = {
    id: rn,
    type: Ge
  }, {
    getNextUnseenSectionSuggestionByCollection: s,
    getNextUnseenPageSuggestionByCollection: a
  } = Ar(), {
    isSectionSuggestionValid: r,
    isPageSuggestionValid: l,
    sectionSuggestionExists: c
  } = gs(), { featuredCollection: u, featuredCollectionPromise: i } = Wt(), {
    doFetchPageSuggestionsByCollection: d,
    doFetchSectionSuggestionsByCollection: g
  } = Ku(), m = (f, w, v, y, C) => x(void 0, null, function* () {
    var k;
    yield i.value;
    const _ = (k = u.value) == null ? void 0 : k.name;
    if (_) {
      let E = w(_);
      if (!E) {
        const [M = null, ...L] = yield f(_);
        E = M, L.forEach((V) => {
          e.commit(v, V);
        });
      }
      E && (y.push(E), C--);
    }
    return C;
  });
  return { fetchSectionSuggestionsPopular: (f) => x(void 0, null, function* () {
    const w = [];
    return f = yield m(
      g,
      s,
      "suggestions/addSectionSuggestion",
      w,
      f
    ), yield Vo(() => x(void 0, null, function* () {
      const v = yield ge.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let y = v.filter(
        (_) => r(_)
      );
      const C = v.filter(
        (_) => !r(_)
      );
      return y = y.slice(0, f), w.push(...y), C.forEach((_) => {
        _ && !c(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
      }), w.length >= f;
    })), w.forEach(
      (v) => v.suggestionProvider = o
    ), w;
  }), fetchPageSuggestionsPopular: (f) => x(void 0, null, function* () {
    const w = [];
    return f = yield m(
      d,
      a,
      "suggestions/addPageSuggestion",
      w,
      f
    ), yield Vo(() => x(void 0, null, function* () {
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
class Ca {
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
const Dy = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', Py = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', By = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', Fy = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', Ny = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', My = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', Uy = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', Iy = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', Ry = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', zy = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', Oy = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', jy = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', Hy = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', qy = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', Gy = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', Wy = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', Xy = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', Ky = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', Yy = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Hf = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', Qy = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', Jy = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', Zy = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', eC = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', tC = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', nC = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', oC = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', sC = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', aC = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', iC = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', rC = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', lC = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', cC = '<g xmlns:xlink="http://www.w3.org/1999/xlink" transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', uC = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', dC = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', gC = '<circle cx="6" cy="6" r="3"/><circle cx="14" cy="6" r="3"/><path d="M14 10c3.31 0 6 1.79 6 4v2h-6v-2c0-1.48-1.21-2.77-3-3.46.88-.35 1.91-.54 3-.54m-8 0c3.31 0 6 1.79 6 4v2H0v-2c0-2.21 2.69-4 6-4"/>', qf = Dy, mC = Py, Gf = {
  ltr: By,
  shouldFlip: !0
}, Wf = {
  ltr: Fy,
  shouldFlip: !0
}, Yu = {
  ltr: Ny,
  shouldFlip: !0
}, Xf = My, Kf = Uy, Yf = Iy, pC = Ry, hC = zy, ms = Oy, fC = jy, Qu = Hy, Ju = qy, $u = Gy, wC = Wy, vC = {
  ltr: Xy,
  shouldFlip: !0
}, _C = {
  ltr: Ky,
  shouldFlip: !0
}, SC = Yy, yC = {
  langCodeMap: {
    ar: Hf
  },
  default: Qy
}, CC = {
  langCodeMap: {
    ar: Hf
  },
  default: Jy
}, Qf = Zy, Pa = {
  ltr: eC,
  shouldFlip: !0
}, xC = tC, bC = nC, ps = {
  ltr: oC,
  shouldFlip: !0
}, Zu = {
  ltr: sC,
  shouldFlip: !0
}, kC = {
  ltr: aC,
  shouldFlip: !0
}, Jf = iC, $C = rC, Vu = lC, VC = cC, EC = uC, Zf = dC, ed = {
  ltr: gC,
  shouldFlip: !0
}, LC = {
  [an]: Zf,
  [rn]: SC,
  [te]: Yu
}, TC = {
  [te]: _C,
  [Pe]: xC
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
    return LC[this.provider] || null;
  }
  get expandableIcon() {
    return TC[this.provider] || this.icon;
  }
}
const bs = window.Vue.computed, { topics: lg, regions: cg } = mw.loader.require(
  "ext.cx.articlefilters"
), AC = (e) => new Ca({
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
}), ro = () => {
  const e = fe(), { currentSuggestionFilters: t, setFilterURLParams: n } = D(), { featuredCollection: o, featuredCollectionFetched: s } = Wt(), {
    validateFilters: a,
    filtersValidatorError: r,
    isDefaultFilter: l,
    isPopularFilter: c,
    isEqualFilter: u
  } = Ru(), i = new bt({
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
  }), { pageCollections: m, pageCollectionGroups: p, pageCollectionGroupsFetched: h } = Dr(), f = bs(() => {
    const F = new Ca({
      id: Ge,
      type: Ge,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [i, d]
    });
    return Object.keys(p.value).length > 1 && F.filters.push(g), F;
  }), w = () => {
    const F = me({}, p.value);
    delete F.ungrouped;
    const z = [];
    for (const J in F) {
      const $e = F[J].map(
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
  }, v = bs(
    () => new Ca({
      id: te,
      type: te,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: w()
    })
  ), y = new Ca({
    id: Pe,
    type: Pe,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: cg.map(
      (F) => new bt({
        id: F.id,
        label: F.label,
        type: Pe,
        subFilters: F.countries.map(
          (z) => new bt({
            id: z.id,
            label: z.label,
            type: Pe
          })
        )
      })
    )
  }), C = bs(() => {
    const F = [
      f.value,
      ...lg.map(AC),
      y
    ];
    return v.value.filters.length && F.splice(1, 0, v.value), F;
  }), _ = bs(
    () => !h.value || !s.value
  ), k = bs(
    () => {
      var F, z;
      return new bt({
        id: (F = o.value) == null ? void 0 : F.name,
        label: (z = o.value) == null ? void 0 : z.name,
        type: te
      });
    }
  ), E = () => {
    if (_.value)
      return [];
    const F = L(), z = [];
    return o.value && z.push(k.value), !l(F) && !c(F) && !u(F, k.value) && z.push(F), z.push(i, d), z;
  }, M = (F) => {
    n(F.type, F.id);
  }, L = () => t.value.type === Gt ? new bt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : C.value.flatMap((F) => F.filters).flatMap((F) => [F, ...F.subFilters || []]).find(V), V = (F) => u(F, t.value);
  return {
    allFilters: C,
    getFiltersSummary: E,
    selectFilter: M,
    isFilterSelected: V,
    getArticleTopics: (F) => {
      const K = lg.flatMap((J) => J.topics).find((J) => J.topicId === F);
      return K ? K.articletopics : [];
    },
    waitingForPageCollectionsFetch: _,
    findSelectedFilter: L,
    validateURLFilterWithCollections: () => {
      if (!h.value)
        return;
      const F = a(
        {
          type: t.value.type,
          id: t.value.id
        },
        m.value
      );
      n(F.type, F.id), r.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (F) => {
      const z = cg.find((K) => K.id === F);
      return z ? z.countries.map((K) => K.id) : [F];
    },
    setFeaturedCollectionFilterIfNeeded: () => {
      if (!l(t.value))
        return;
      const F = a(
        k.value,
        m.value
      );
      M(F);
    },
    isFilteringByFeaturedCollection: () => {
      var z;
      const F = L();
      return (F == null ? void 0 : F.id) === ((z = o.value) == null ? void 0 : z.name);
    }
  };
}, DC = window.Vuex.useStore, PC = () => {
  const e = DC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = gs(), { getArticleTopics: l } = ro(), { featuredCollection: c, featuredCollectionPromise: u } = Wt();
  return {
    fetchPageSuggestionsByTopics: (g) => x(void 0, null, function* () {
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
    fetchSectionSuggestionsByTopics: (g) => x(void 0, null, function* () {
      yield u.value;
      const m = o.value.id, p = {
        id: m,
        type: et
      }, h = l(m), f = [];
      return yield Vo(() => x(void 0, null, function* () {
        var C;
        const w = yield ge.fetchSectionSuggestionsByTopics({
          sourceLanguage: t.value,
          targetLanguage: n.value,
          topics: h,
          featuredCollection: (C = c.value) == null ? void 0 : C.name
        });
        let v = w.filter(
          (_) => s(_)
        );
        const y = w.filter(
          (_) => !s(_)
        );
        return v = v.slice(0, g), f.push(...v), y.forEach((_) => {
          _ && !r(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
        }), f.length >= g;
      })), f.forEach(
        (w) => w.suggestionProvider = p
      ), f;
    })
  };
}, BC = window.Vuex.useStore, FC = () => {
  const e = BC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = gs(), { getCountries: l } = ro(), { featuredCollection: c, featuredCollectionPromise: u } = Wt();
  return {
    fetchPageSuggestionsByCountries: (g) => x(void 0, null, function* () {
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
    fetchSectionSuggestionsByCountries: (g) => x(void 0, null, function* () {
      yield u.value;
      const m = [];
      return yield Vo(() => x(void 0, null, function* () {
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
}, NC = window.Vuex.useStore, MC = () => {
  const e = NC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = gs();
  return {
    fetchPageSuggestionsBySeed: (u) => x(void 0, null, function* () {
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
    fetchSectionSuggestionsBySeed: (u) => x(void 0, null, function* () {
      const i = [], d = o.value.id;
      return yield Vo(() => x(void 0, null, function* () {
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
}, UC = () => {
  const { currentSuggestionFilters: e } = D(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = Sy(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = Ay(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = PC(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: c
  } = FC(), {
    fetchPageSuggestionsByCollections: u,
    fetchSectionSuggestionsByCollections: i
  } = Ku(), { fetchPageSuggestionsBySeed: d, fetchSectionSuggestionsBySeed: g } = MC(), m = {
    [an]: t,
    [rn]: o,
    [te]: u,
    [et]: a,
    [Pe]: l,
    [Gt]: d
  }, p = {
    [an]: n,
    [rn]: s,
    [te]: i,
    [et]: r,
    [Pe]: c,
    [Gt]: g
  }, h = (v) => v.type === Ge ? v.id : v.type;
  return {
    getCurrentPageSuggestionProvider: () => m[h(e.value)],
    getCurrentSectionSuggestionProvider: () => p[h(e.value)]
  };
}, td = () => {
  const { featuredCollectionPromise: e, featuredCollection: t } = Wt();
  function n(o, s, a, r) {
    return x(this, null, function* () {
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
}, Fr = () => {
  const { inFeaturedCollection: e } = td(), t = (s) => {
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
    return x(this, null, function* () {
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
          const C = v[y], _ = C.map((E) => r(E)), k = e(
            null,
            y,
            _,
            w.value.name
          );
          d.push({ promise: k, items: C });
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
}, IC = window.Vuex.useStore, nd = () => {
  const e = IC(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Ar(), o = io(), { addFeaturedCollectionFlag: s } = Fr(), { isFilteringByFeaturedCollection: a } = ro(), r = () => {
    const m = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - m.length % p;
  }, l = () => {
    const m = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - m.length % p;
  }, {
    getCurrentPageSuggestionProvider: c,
    getCurrentSectionSuggestionProvider: u
  } = UC(), i = (m) => {
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
    fetchNextSectionSuggestionsSlice: () => x(void 0, null, function* () {
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
    fetchNextPageSuggestionsSlice: () => x(void 0, null, function* () {
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
}, RC = window.Vuex.useStore, ew = () => {
  const e = RC();
  return (t) => x(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ge.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, zC = window.Vuex.useStore, tw = () => {
  const e = zC(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = nd(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Ar(), { targetLanguageURLParameter: a } = D(), r = ew();
  return () => x(void 0, null, function* () {
    const l = s(0), c = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, i = l.length === u, d = c.length === u;
    i && d || (yield r(a.value), t(), n());
  });
}, OC = window.Vuex.useStore, jC = window.Vue.ref, ml = /* @__PURE__ */ new Map(), ug = jC([]), Ba = () => {
  const e = OC(), t = io();
  return { loadSuggestion: (s, a, r) => {
    const l = `${s}:${a}:${r}`;
    if (ml.has(l))
      return ml.get(l);
    const u = (() => x(void 0, null, function* () {
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
      return ug.value.push(i), i;
    }))();
    return ml.set(l, u), u;
  }, getLoadedSuggestion: (s, a, r) => ug.value.find(
    (l) => l.sourceLanguage === s && l.targetLanguage === a && l.sourceTitle === r
  ) || null };
}, dg = window.Vue.computed, HC = window.Vuex.useStore, cn = () => {
  const e = HC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = D(), s = dg(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = dg(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, c) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(c)
  };
}, nw = window.Vuex.useStore, { setLanguageURLParams: qC } = D(), od = (e, t, n) => {
  qC(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, ow = () => {
  const e = nw(), t = tw();
  return (n, o) => {
    const {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a
    } = D();
    n === o && (n = a.value, o = s.value), od(e, n, o), t();
  };
}, GC = () => {
  const e = nw(), { loadSuggestion: t } = Ba(), { currentLanguageTitleGroup: n, targetPageExists: o } = cn(), s = io();
  return (a, r) => x(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      setPageURLParam: u,
      clearSectionURLParameter: i
    } = D();
    a === r && (a = c.value, r = l.value);
    const d = n.value.getTitleForLanguage(a);
    od(e, a, r), u(d), o.value ? (i(), yield t(
      l.value,
      c.value,
      d
    )) : yield s(l.value, [d]);
  });
}, WC = window.Vuex.useStore, XC = window.Vue.ref, gg = XC(!1), sw = () => {
  const e = WC(), { supportedLanguageCodes: t, fetchSupportedLanguageCodes: n } = Da(), { sourceLanguageURLParameter: o, targetLanguageURLParameter: s } = D(), a = () => {
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
  return { initializeApplicationLanguages: () => x(void 0, null, function* () {
    yield n();
    const { sourceLanguage: l, targetLanguage: c } = a();
    od(e, l, c), gg.value = !0;
  }), applicationLanguagesInitialized: gg };
};
const KC = window.Vue.resolveDynamicComponent, mg = window.Vue.openBlock, pg = window.Vue.createBlock, YC = window.Vue.Transition, ks = window.Vue.withCtx, $s = window.Vue.createVNode, QC = window.Vue.resolveComponent, pl = window.Vue.unref, JC = window.Vuex.useStore, hg = window.Vue.computed, ZC = window.Vue.onMounted, ex = window.Vue.inject, tx = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = D(), { initializeApplicationLanguages: n } = sw();
    t(), n();
    const o = ex("breakpoints"), s = hg(() => o.value.mobile), a = JC(), r = hg(
      () => a.state.application.autoSavePending
    );
    return ZC(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && yf.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((c) => {
          c instanceof cs && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, c) => {
      const u = QC("router-view");
      return mg(), pg(pl(y0), { id: "contenttranslation" }, {
        default: ks(() => [
          $s(pl(R), { class: "cx-container" }, {
            default: ks(() => [
              $s(pl(b), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: ks(() => [
                  $s(u, null, {
                    default: ks(({ Component: i, route: d }) => [
                      $s(YC, {
                        name: s.value ? d.meta.transitionName : ""
                      }, {
                        default: ks(() => [
                          (mg(), pg(KC(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      $s(B1)
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
}, nx = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, ox = {
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
class aw {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new aw(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const fg = (e) => {
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
class sx {
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
    const t = fg((s = this.user) == null ? void 0 : s.content), n = fg((a = this.mt) == null ? void 0 : a.content);
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
class sd extends Uu {
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
const Nr = mw.user.isAnon() ? void 0 : "user", iw = (e) => {
  if (e === "assertuserfailed")
    throw new cs();
};
function rw(e, t = null) {
  return x(this, null, function* () {
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
    return t && (n.offset = t), new mw.Api().get(n).then((s) => x(this, null, function* () {
      var l;
      const a = s.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (c) => new kr(Ke(me({}, c), { status: e }))
      ) : r = a.map(
        (c) => new sd(Ke(me({}, c), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const c = yield rw(
          e,
          s.continue.offset
        );
        r = r.concat(c);
      }
      return r;
    }));
  });
}
function ax(e) {
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
      (a) => new sx(a)
    );
  });
}
function ix(e, t, n, o, s) {
  return x(this, null, function* () {
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
const rx = (e, t, n) => {
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
}, lx = ({
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
    assert: Nr,
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
    iw(h);
    let w;
    return f = f || {}, f.exception ? w = f.exception.message : f.error ? w = f.error.info : w = "Unknown error", {
      publishFeedbackMessage: new so({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, cx = ({
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
    assert: Nr,
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
    iw(m);
    let h;
    return p.exception ? (h = p.exception.message, mw.cx.eventlogging.stats.saveFailure(!0)) : p.error ? (h = p.error.info, p.error.code && p.error.code.indexOf("internal_api_error") === 0 && mw.cx.eventlogging.stats.saveFailure(!0)) : (h = "Unknown error", mw.cx.eventlogging.stats.saveFailure(!0)), new so({ text: h, status: "error" });
  });
}, ux = (e) => {
  const t = {
    assert: Nr,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, dx = () => {
  const e = {
    assert: Nr,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new sd(n.cxcheckunreviewed.translation)
  );
}, gx = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, mx = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, px = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), $t = {
  fetchTranslations: rw,
  fetchTranslationUnits: ax,
  fetchSegmentTranslation: ix,
  parseTemplateWikitext: rx,
  publishTranslation: lx,
  saveTranslation: cx,
  deleteTranslation: gx,
  fetchTranslatorStats: px,
  deleteCXTranslation: mx,
  splitTranslation: ux,
  checkUnreviewedTranslations: dx
};
function hx(t) {
  return x(this, arguments, function* ({ commit: e }) {
    const n = yield $t.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const fx = {
  fetchTranslatorStats: hx
}, wx = {
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
}, vx = {
  namespaced: !0,
  state: nx,
  getters: ox,
  actions: fx,
  mutations: wx
}, _x = {
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
  appendixSectionTitles: US
}, Sx = {
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
}, yx = {
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
}, Cx = {
  namespaced: !0,
  state: _x,
  getters: Sx,
  actions: {},
  mutations: yx
}, xx = {
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
}, bx = {
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
   * @return {Page[]}
   */
  getNearbyPages: (e) => {
    const { sourceLanguageURLParameter: t } = D();
    return e.nearbyPages[t.value];
  }
};
function kx(n) {
  return x(this, arguments, function* ({ commit: e, state: t }) {
    var r;
    const { sourceLanguageURLParameter: o } = D(), s = o.value;
    if ((r = t.nearbyPages[s]) != null && r.length)
      return;
    const a = yield ds.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const $x = { fetchNearbyPages: kx }, Vx = {
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
}, Ex = {
  namespaced: !0,
  state: xx,
  getters: bx,
  actions: $x,
  mutations: Vx
}, Lx = {
  /**@type Array */
  mtRequestsPending: [],
  /** @type String */
  currentMTProvider: "",
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
}, Tx = {
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
    const {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = D(), s = le.getStorageKey(
      n.value,
      o.value
    );
    mw.storage.set(s, t);
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
}, Ax = {
  namespaced: !0,
  state: Lx,
  mutations: Tx
}, Dx = window.Vuex.createStore, Px = Dx({
  modules: { translator: vx, suggestions: Cx, mediawiki: Ex, application: Ax }
});
function Bx() {
  return lw().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function lw() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Fx = typeof Proxy == "function", Nx = "devtools-plugin:setup", Mx = "plugin:settings:set";
let Do, Eu;
function Ux() {
  var e;
  return Do !== void 0 || (typeof window != "undefined" && window.performance ? (Do = !0, Eu = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Do = !0, Eu = global.perf_hooks.performance) : Do = !1), Do;
}
function Ix() {
  return Ux() ? Eu.now() : Date.now();
}
class Rx {
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
        return Ix();
      }
    }, n && n.on(Mx, (r, l) => {
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
    return x(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function zx(e, t) {
  const n = e, o = lw(), s = Bx(), a = Fx && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Nx, e, t);
  else {
    const r = a ? new Rx(n, s) : null;
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
const cw = window.Vue.getCurrentInstance, rs = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const nn = window.Vue.computed, xa = window.Vue.unref, Ox = window.Vue.watchEffect, uw = window.Vue.defineComponent, jx = window.Vue.reactive, dw = window.Vue.h, hl = window.Vue.provide, Hx = window.Vue.ref, gw = window.Vue.watch, qx = window.Vue.shallowRef, Gx = window.Vue.shallowReactive, Wx = window.Vue.nextTick, Dn = typeof window != "undefined";
function Xx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const oe = Object.assign;
function fl(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = mt(s) ? s.map(e) : e(s);
  }
  return n;
}
const ba = () => {
}, mt = Array.isArray;
function Y(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Kx = /\/$/, Yx = (e) => e.replace(Kx, "");
function wl(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return l < c && l >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), a = t.slice(c + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = Zx(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Qx(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function wg(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function vg(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && ao(t.matched[o], n.matched[s]) && pw(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ao(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function pw(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Jx(e[n], t[n]))
      return !1;
  return !0;
}
function Jx(e, t) {
  return mt(e) ? _g(e, t) : mt(t) ? _g(t, e) : e === t;
}
function _g(e, t) {
  return mt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Zx(e, t) {
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
var ka;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ka || (ka = {}));
function eb(e) {
  if (!e)
    if (Dn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Yx(e);
}
const tb = /^[^#]+#/;
function nb(e, t) {
  return e.replace(tb, "#") + t;
}
function ob(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Mr = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function sb(e) {
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
    t = ob(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Sg(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Lu = /* @__PURE__ */ new Map();
function ab(e, t) {
  Lu.set(e, t);
}
function ib(e) {
  const t = Lu.get(e);
  return Lu.delete(e), t;
}
let rb = () => location.protocol + "//" + location.host;
function hw(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), wg(c, "");
  }
  return wg(n, e) + o + s;
}
function lb(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: g }) => {
    const m = hw(e, location), p = n.value, h = t.value;
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
        direction: f ? f > 0 ? ka.forward : ka.back : ka.unknown
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
    g.state && g.replaceState(oe({}, g.state, { scroll: Mr() }), "");
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
function yg(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Mr() : null
  };
}
function cb(e) {
  const { history: t, location: n } = window, o = {
    value: hw(e, n)
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
    const d = e.indexOf("#"), g = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : rb() + e + c;
    try {
      t[i ? "replaceState" : "pushState"](u, "", g), s.value = u;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? Y("Error with push/replace State", m) : console.error(m), n[i ? "replace" : "assign"](g);
    }
  }
  function r(c, u) {
    const i = oe({}, t.state, yg(
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
        scroll: Mr()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && Y(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const d = oe({}, yg(o.value, c, null), { position: i.position + 1 }, u);
    a(c, d, !1), o.value = c;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function ub(e) {
  e = eb(e);
  const t = cb(e), n = lb(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = oe({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: nb.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function db(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Y(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), ub(e);
}
function gb(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function fw(e) {
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
}, Tu = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Cg;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Cg || (Cg = {}));
const mb = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${hb(t)}" via a navigation guard.`;
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
function ls(e, t) {
  return {}.NODE_ENV !== "production" ? oe(new Error(mb[e](t)), {
    type: e,
    [Tu]: !0
  }, t) : oe(new Error(), {
    type: e,
    [Tu]: !0
  }, t);
}
function dn(e, t) {
  return e instanceof Error && Tu in e && (t == null || !!(e.type & t));
}
const pb = ["params", "query", "hash"];
function hb(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of pb)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const xg = "[^/]+?", fb = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, wb = /[.+*?^${}()[\]/\\]/g;
function vb(e, t) {
  const n = oe({}, fb, t), o = [];
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
        d || (s += "/"), s += g.value.replace(wb, "\\$&"), m += 40;
      else if (g.type === 1) {
        const { value: p, repeatable: h, optional: f, regexp: w } = g;
        a.push({
          name: p,
          repeatable: h,
          optional: f
        });
        const v = w || xg;
        if (v !== xg) {
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
          if (mt(w) && !h)
            throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const v = mt(w) ? w.join("/") : w;
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
function _b(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Sb(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = _b(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (bg(o))
      return 1;
    if (bg(s))
      return -1;
  }
  return s.length - o.length;
}
function bg(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const yb = {
  type: 0,
  value: ""
}, Cb = /[a-zA-Z0-9_]/;
function xb(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[yb]];
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
        c === "(" ? n = 2 : Cb.test(c) ? g() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
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
function bb(e, t, n) {
  const o = vb(xb(e.path), n);
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
function kb(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Vg({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, d, g) {
    const m = !g, p = $b(i);
    ({}).NODE_ENV !== "production" && Tb(p, d), p.aliasOf = g && g.record;
    const h = Vg(t, i), f = [
      p
    ];
    if ("alias" in i) {
      const y = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const C of y)
        f.push(oe({}, p, {
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
        const _ = d.record.path, k = _[_.length - 1] === "/" ? "" : "/";
        y.path = d.record.path + (C && k + C);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (w = bb(y, d, h), {}.NODE_ENV !== "production" && d && C[0] === "/" && Ab(w, d), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && Lb(g, w)) : (v = v || w, v !== w && v.alias.push(w), m && i.name && !$g(w) && r(i.name)), p.children) {
        const _ = p.children;
        for (let k = 0; k < _.length; k++)
          a(_[k], w, g && g.children[k]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && c(w);
    }
    return v ? () => {
      r(v);
    } : ba;
  }
  function r(i) {
    if (fw(i)) {
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
    for (; d < n.length && Sb(i, n[d]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[d].record.path || !ww(i, n[d])); )
      d++;
    n.splice(d, 0, i), i.record.name && !$g(i) && o.set(i.record.name, i);
  }
  function u(i, d) {
    let g, m = {}, p, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw ls(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const v = Object.keys(i.params || {}).filter((y) => !g.keys.find((C) => C.name === y));
        v.length && Y(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, m = oe(
        // paramsFromLocation is a new object
        kg(
          d.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((v) => !v.optional).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && kg(i.params, g.keys.map((v) => v.name))
      ), p = g.stringify(m);
    } else if ("path" in i)
      p = i.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && Y(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((v) => v.re.test(p)), g && (m = g.parse(p), h = g.record.name);
    else {
      if (g = d.name ? o.get(d.name) : n.find((v) => v.re.test(d.path)), !g)
        throw ls(1, {
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
      meta: Eb(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: u, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function kg(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function $b(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Vb(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Vb(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function $g(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Eb(e) {
  return e.reduce((t, n) => oe(t, n.meta), {});
}
function Vg(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Au(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Lb(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Au.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Au.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Tb(e, t) {
  t && t.record.name && !e.name && !e.path && Y(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Ab(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Au.bind(null, n)))
      return Y(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function ww(e, t) {
  return t.children.some((n) => n === e || ww(e, n));
}
const vw = /#/g, Db = /&/g, Pb = /\//g, Bb = /=/g, Fb = /\?/g, _w = /\+/g, Nb = /%5B/g, Mb = /%5D/g, Sw = /%5E/g, Ub = /%60/g, yw = /%7B/g, Ib = /%7C/g, Cw = /%7D/g, Rb = /%20/g;
function ad(e) {
  return encodeURI("" + e).replace(Ib, "|").replace(Nb, "[").replace(Mb, "]");
}
function zb(e) {
  return ad(e).replace(yw, "{").replace(Cw, "}").replace(Sw, "^");
}
function Du(e) {
  return ad(e).replace(_w, "%2B").replace(Rb, "+").replace(vw, "%23").replace(Db, "%26").replace(Ub, "`").replace(yw, "{").replace(Cw, "}").replace(Sw, "^");
}
function Ob(e) {
  return Du(e).replace(Bb, "%3D");
}
function jb(e) {
  return ad(e).replace(vw, "%23").replace(Fb, "%3F");
}
function Hb(e) {
  return e == null ? "" : jb(e).replace(Pb, "%2F");
}
function Va(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && Y(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function qb(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(_w, " "), r = a.indexOf("="), l = Va(r < 0 ? a : a.slice(0, r)), c = r < 0 ? null : Va(a.slice(r + 1));
    if (l in t) {
      let u = t[l];
      mt(u) || (u = t[l] = [u]), u.push(c);
    } else
      t[l] = c;
  }
  return t;
}
function Eg(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = Ob(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (mt(o) ? o.map((a) => a && Du(a)) : [o && Du(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function Gb(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = mt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const Wb = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Lg = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Ur = Symbol({}.NODE_ENV !== "production" ? "router" : ""), xw = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Pu = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
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
      d === !1 ? l(ls(4, {
        from: n,
        to: t
      })) : d instanceof Error ? l(d) : gb(d) ? l(ls(2, {
        from: t,
        to: d
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof d == "function" && a.push(d), r());
    }, u = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? Xb(c, t, n) : c);
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
function Xb(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && Y(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function vl(e, t, n, o) {
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
        if (Kb(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(to(u, n, o, a, r));
        } else {
          let c = l();
          ({}).NODE_ENV !== "production" && !("catch" in c) && (Y(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), s.push(() => c.then((u) => {
            if (!u)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Xx(u) ? u.default : u;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && to(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function Kb(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Tg(e) {
  const t = rs(Ur), n = rs(xw), o = nn(() => t.resolve(xa(e.to))), s = nn(() => {
    const { matched: c } = o.value, { length: u } = c, i = c[u - 1], d = n.matched;
    if (!i || !d.length)
      return -1;
    const g = d.findIndex(ao.bind(null, i));
    if (g > -1)
      return g;
    const m = Ag(c[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Ag(i) === m && // avoid comparing the child with its parent
      d[d.length - 1].path !== m ? d.findIndex(ao.bind(null, c[u - 2])) : g
    );
  }), a = nn(() => s.value > -1 && Zb(n.params, o.value.params)), r = nn(() => s.value > -1 && s.value === n.matched.length - 1 && pw(n.params, o.value.params));
  function l(c = {}) {
    return Jb(c) ? t[xa(e.replace) ? "replace" : "push"](
      xa(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ba) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Dn) {
    const c = cw();
    if (c) {
      const u = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(u), Ox(() => {
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
const Yb = /* @__PURE__ */ uw({
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
  useLink: Tg,
  setup(e, { slots: t }) {
    const n = jx(Tg(e)), { options: o } = rs(Ur), s = nn(() => ({
      [Dg(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Dg(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : dw("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), Qb = Yb;
function Jb(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Zb(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!mt(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function Ag(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Dg = (e, t, n) => e != null ? e : t != null ? t : n, ek = /* @__PURE__ */ uw({
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
    ({}).NODE_ENV !== "production" && nk();
    const o = rs(Pu), s = nn(() => e.route || o.value), a = rs(Lg, 0), r = nn(() => {
      let u = xa(a);
      const { matched: i } = s.value;
      let d;
      for (; (d = i[u]) && !d.components; )
        u++;
      return u;
    }), l = nn(() => s.value.matched[r.value]);
    hl(Lg, nn(() => r.value + 1)), hl(Wb, l), hl(Pu, s);
    const c = Hx();
    return gw(() => [c.value, l.value, e.name], ([u, i, d], [g, m, p]) => {
      i && (i.instances[d] = u, m && m !== i && u && u === g && (i.leaveGuards.size || (i.leaveGuards = m.leaveGuards), i.updateGuards.size || (i.updateGuards = m.updateGuards))), u && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !ao(i, m) || !g) && (i.enterCallbacks[d] || []).forEach((h) => h(u));
    }, { flush: "post" }), () => {
      const u = s.value, i = e.name, d = l.value, g = d && d.components[i];
      if (!g)
        return Pg(n.default, { Component: g, route: u });
      const m = d.props[i], p = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null, f = dw(g, oe({}, p, t, {
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
        (mt(f.ref) ? f.ref.map((y) => y.i) : [f.ref.i]).forEach((y) => {
          y.__vrv_devtools = w;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Pg(n.default, { Component: f, route: u }) || f
      );
    };
  }
});
function Pg(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const tk = ek;
function nk() {
  const e = cw(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
  const n = oe({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => dk(o, ["instances", "children", "aliasOf"]))
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
let ok = 0;
function sk(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = ok++;
  zx({
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
          backgroundColor: bw
        });
      }
      mt(d.__vrl_devtools) && (d.__devtoolsApi = s, d.__vrl_devtools.forEach((g) => {
        let m = Vw, p = "";
        g.isExactActive ? (m = $w, p = "This is exactly active") : g.isActive && (m = kw, p = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: p,
          backgroundColor: m
        });
      }));
    }), gw(t.currentRoute, () => {
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
      d.forEach(Tw), i.filter && (d = d.filter((g) => (
        // save matches state based on the payload
        Bu(g, i.filter.toLowerCase())
      ))), d.forEach((g) => Lw(g, t.currentRoute.value)), i.rootNodes = d.map(Ew);
    }
    let u;
    s.on.getInspectorTree((i) => {
      u = i, i.app === e && i.inspectorId === l && c();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((m) => m.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: ik(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function ak(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function ik(e) {
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
        display: e.keys.map((o) => `${o.name}${ak(o)}`).join(" "),
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
const bw = 15485081, kw = 2450411, $w = 8702998, rk = 2282478, Vw = 16486972, lk = 6710886;
function Ew(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: rk
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Vw
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: bw
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: $w
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: kw
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: lk
  });
  let o = n.__vd_id;
  return o == null && (o = String(ck++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Ew)
  };
}
let ck = 0;
const uk = /^\/(.*)\/([a-z]*)$/;
function Lw(e, t) {
  const n = t.matched.length && ao(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => ao(o, e.record))), e.children.forEach((o) => Lw(o, t));
}
function Tw(e) {
  e.__vd_match = !1, e.children.forEach(Tw);
}
function Bu(e, t) {
  const n = String(e.re).match(uk);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Bu(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Va(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Bu(r, t));
}
function dk(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function gk(e) {
  const t = kb(e.routes, e), n = e.parseQuery || qb, o = e.stringifyQuery || Eg, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Vs(), r = Vs(), l = Vs(), c = qx(Nn);
  let u = Nn;
  Dn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = fl.bind(null, (S) => "" + S), d = fl.bind(null, Hb), g = (
    // @ts-expect-error: intentionally avoid the type check
    fl.bind(null, Va)
  );
  function m(S, A) {
    let T, N;
    return fw(S) ? (T = t.getRecordMatcher(S), N = A) : N = S, t.addRoute(N, T);
  }
  function p(S) {
    const A = t.getRecordMatcher(S);
    A ? t.removeRoute(A) : {}.NODE_ENV !== "production" && Y(`Cannot remove non-existent route "${String(S)}"`);
  }
  function h() {
    return t.getRoutes().map((S) => S.record);
  }
  function f(S) {
    return !!t.getRecordMatcher(S);
  }
  function w(S, A) {
    if (A = oe({}, A || c.value), typeof S == "string") {
      const I = wl(n, S, A.path), ie = t.resolve({ path: I.path }, A), ot = s.createHref(I.fullPath);
      return {}.NODE_ENV !== "production" && (ot.startsWith("//") ? Y(`Location "${S}" resolved to "${ot}". A resolved location cannot start with multiple slashes.`) : ie.matched.length || Y(`No match found for location with path "${S}"`)), oe(I, ie, {
        params: g(ie.params),
        hash: Va(I.hash),
        redirectedFrom: void 0,
        href: ot
      });
    }
    let T;
    if ("path" in S)
      ({}).NODE_ENV !== "production" && "params" in S && !("name" in S) && // @ts-expect-error: the type is never
      Object.keys(S.params).length && Y(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), T = oe({}, S, {
        path: wl(n, S.path, A.path).path
      });
    else {
      const I = oe({}, S.params);
      for (const ie in I)
        I[ie] == null && delete I[ie];
      T = oe({}, S, {
        params: d(I)
      }), A.params = d(A.params);
    }
    const N = t.resolve(T, A), U = S.hash || "";
    ({}).NODE_ENV !== "production" && U && !U.startsWith("#") && Y(`A \`hash\` should always start with the character "#". Replace "${U}" with "#${U}".`), N.params = i(g(N.params));
    const H = Qx(o, oe({}, S, {
      hash: zb(U),
      path: N.path
    })), G = s.createHref(H);
    return {}.NODE_ENV !== "production" && (G.startsWith("//") ? Y(`Location "${S}" resolved to "${G}". A resolved location cannot start with multiple slashes.`) : N.matched.length || Y(`No match found for location with path "${"path" in S ? S.path : S}"`)), oe({
      fullPath: H,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: U,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Eg ? Gb(S.query) : S.query || {}
      )
    }, N, {
      redirectedFrom: void 0,
      href: G
    });
  }
  function v(S) {
    return typeof S == "string" ? wl(n, S, c.value.path) : oe({}, S);
  }
  function y(S, A) {
    if (u !== S)
      return ls(8, {
        from: A,
        to: S
      });
  }
  function C(S) {
    return E(S);
  }
  function _(S) {
    return C(oe(v(S), { replace: !0 }));
  }
  function k(S) {
    const A = S.matched[S.matched.length - 1];
    if (A && A.redirect) {
      const { redirect: T } = A;
      let N = typeof T == "function" ? T(S) : T;
      if (typeof N == "string" && (N = N.includes("?") || N.includes("#") ? N = v(N) : (
        // force empty params
        { path: N }
      ), N.params = {}), {}.NODE_ENV !== "production" && !("path" in N) && !("name" in N))
        throw Y(`Invalid redirect found:
${JSON.stringify(N, null, 2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return oe({
        query: S.query,
        hash: S.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in N ? {} : S.params
      }, N);
    }
  }
  function E(S, A) {
    const T = u = w(S), N = c.value, U = S.state, H = S.force, G = S.replace === !0, I = k(T);
    if (I)
      return E(
        oe(v(I), {
          state: typeof I == "object" ? oe({}, U, I.state) : U,
          force: H,
          replace: G
        }),
        // keep original redirectedFrom if it exists
        A || T
      );
    const ie = T;
    ie.redirectedFrom = A;
    let ot;
    return !H && vg(o, N, T) && (ot = ls(16, { to: ie, from: N }), xe(
      N,
      N,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (ot ? Promise.resolve(ot) : V(ie, N)).catch((Ve) => dn(Ve) ? (
      // navigation redirects still mark the router as ready
      dn(
        Ve,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? Ve : $e(Ve)
    ) : (
      // reject any unknown error
      K(Ve, ie, N)
    )).then((Ve) => {
      if (Ve) {
        if (dn(
          Ve,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          vg(o, w(Ve.to), ie) && // and we have done it a couple of times
          A && // @ts-expect-error: added only in dev
          (A._count = A._count ? (
            // @ts-expect-error
            A._count + 1
          ) : 1) > 30 ? (Y(`Detected a possibly infinite redirection in a navigation guard when going from "${N.fullPath}" to "${ie.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : E(
            // keep options
            oe({
              // preserve an existing replacement but allow the redirect to override it
              replace: G
            }, v(Ve.to), {
              state: typeof Ve.to == "object" ? oe({}, U, Ve.to.state) : U,
              force: H
            }),
            // preserve the original redirectedFrom if any
            A || ie
          );
      } else
        Ve = X(ie, N, !0, G, U);
      return B(ie, N, Ve), Ve;
    });
  }
  function M(S, A) {
    const T = y(S, A);
    return T ? Promise.reject(T) : Promise.resolve();
  }
  function L(S) {
    const A = O.values().next().value;
    return A && typeof A.runWithContext == "function" ? A.runWithContext(S) : S();
  }
  function V(S, A) {
    let T;
    const [N, U, H] = mk(S, A);
    T = vl(N.reverse(), "beforeRouteLeave", S, A);
    for (const I of N)
      I.leaveGuards.forEach((ie) => {
        T.push(to(ie, S, A));
      });
    const G = M.bind(null, S, A);
    return T.push(G), ce(T).then(() => {
      T = [];
      for (const I of a.list())
        T.push(to(I, S, A));
      return T.push(G), ce(T);
    }).then(() => {
      T = vl(U, "beforeRouteUpdate", S, A);
      for (const I of U)
        I.updateGuards.forEach((ie) => {
          T.push(to(ie, S, A));
        });
      return T.push(G), ce(T);
    }).then(() => {
      T = [];
      for (const I of H)
        if (I.beforeEnter)
          if (mt(I.beforeEnter))
            for (const ie of I.beforeEnter)
              T.push(to(ie, S, A));
          else
            T.push(to(I.beforeEnter, S, A));
      return T.push(G), ce(T);
    }).then(() => (S.matched.forEach((I) => I.enterCallbacks = {}), T = vl(H, "beforeRouteEnter", S, A), T.push(G), ce(T))).then(() => {
      T = [];
      for (const I of r.list())
        T.push(to(I, S, A));
      return T.push(G), ce(T);
    }).catch((I) => dn(
      I,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? I : Promise.reject(I));
  }
  function B(S, A, T) {
    l.list().forEach((N) => L(() => N(S, A, T)));
  }
  function X(S, A, T, N, U) {
    const H = y(S, A);
    if (H)
      return H;
    const G = A === Nn, I = Dn ? history.state : {};
    T && (N || G ? s.replace(S.fullPath, oe({
      scroll: G && I && I.scroll
    }, U)) : s.push(S.fullPath, U)), c.value = S, xe(S, A, T, G), $e();
  }
  let se;
  function ee() {
    se || (se = s.listen((S, A, T) => {
      if (!j.listening)
        return;
      const N = w(S), U = k(N);
      if (U) {
        E(oe(U, { replace: !0 }), N).catch(ba);
        return;
      }
      u = N;
      const H = c.value;
      Dn && ab(Sg(H.fullPath, T.delta), Mr()), V(N, H).catch((G) => dn(
        G,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? G : dn(
        G,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (E(
        G.to,
        N
        // avoid an uncaught rejection, let push call triggerError
      ).then((I) => {
        dn(
          I,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !T.delta && T.type === $a.pop && s.go(-1, !1);
      }).catch(ba), Promise.reject()) : (T.delta && s.go(-T.delta, !1), K(G, N, H))).then((G) => {
        G = G || X(
          // after navigation, all matched components are resolved
          N,
          H,
          !1
        ), G && (T.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !dn(
          G,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-T.delta, !1) : T.type === $a.pop && dn(
          G,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), B(N, H, G);
      }).catch(ba);
    }));
  }
  let ne = Vs(), F = Vs(), z;
  function K(S, A, T) {
    $e(S);
    const N = F.list();
    return N.length ? N.forEach((U) => U(S, A, T)) : ({}.NODE_ENV !== "production" && Y("uncaught error during route navigation:"), console.error(S)), Promise.reject(S);
  }
  function J() {
    return z && c.value !== Nn ? Promise.resolve() : new Promise((S, A) => {
      ne.add([S, A]);
    });
  }
  function $e(S) {
    return z || (z = !S, ee(), ne.list().forEach(([A, T]) => S ? T(S) : A()), ne.reset()), S;
  }
  function xe(S, A, T, N) {
    const { scrollBehavior: U } = e;
    if (!Dn || !U)
      return Promise.resolve();
    const H = !T && ib(Sg(S.fullPath, 0)) || (N || !T) && history.state && history.state.scroll || null;
    return Wx().then(() => U(S, A, H)).then((G) => G && sb(G)).catch((G) => K(G, S, A));
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
    push: C,
    replace: _,
    go: _e,
    back: () => _e(-1),
    forward: () => _e(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: F.add,
    isReady: J,
    install(S) {
      const A = this;
      S.component("RouterLink", Qb), S.component("RouterView", tk), S.config.globalProperties.$router = A, Object.defineProperty(S.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => xa(c)
      }), Dn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Oe && c.value === Nn && (Oe = !0, C(s.location).catch((U) => {
        ({}).NODE_ENV !== "production" && Y("Unexpected error when starting the router:", U);
      }));
      const T = {};
      for (const U in Nn)
        Object.defineProperty(T, U, {
          get: () => c.value[U],
          enumerable: !0
        });
      S.provide(Ur, A), S.provide(xw, Gx(T)), S.provide(Pu, c);
      const N = S.unmount;
      O.add(S), S.unmount = function() {
        O.delete(S), O.size < 1 && (u = Nn, se && se(), se = null, c.value = Nn, Oe = !1, z = !1), N();
      }, {}.NODE_ENV !== "production" && Dn && sk(S, A, t);
    }
  };
  function ce(S) {
    return S.reduce((A, T) => A.then(() => L(T)), Promise.resolve());
  }
  return j;
}
function mk(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((u) => ao(u, l)) ? o.push(l) : n.push(l));
    const c = e.matched[r];
    c && (t.matched.find((u) => ao(u, c)) || s.push(c));
  }
  return [n, o, s];
}
function tt() {
  return rs(Ur);
}
const pk = {
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
}, hk = {
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
}, fk = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], wk = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, vk = {
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
}, _k = {
  languages: pk,
  scriptgroups: hk,
  rtlscripts: fk,
  regiongroups: wk,
  territories: vk
};
var ze = _k;
function Fa(e) {
  return !!ze.languages[e];
}
function lo(e) {
  return Fa(e) && ze.languages[e].length === 1 ? ze.languages[e][0] : !1;
}
function Sk() {
  return ze.languages;
}
function Na(e) {
  var t = lo(e);
  return t ? Na(t) : Fa(e) ? ze.languages[e][0] : "Zyyy";
}
function id(e) {
  var t = lo(e);
  return t ? id(t) : Fa(e) && ze.languages[e][1] || "UNKNOWN";
}
function Ea(e) {
  var t = lo(e);
  return t ? Ea(t) : Fa(e) && ze.languages[e][2] || e;
}
function yk() {
  var e, t = {};
  for (e in ze.languages)
    lo(e) || (t[e] = Ea(e));
  return t;
}
function Aw(e) {
  var t, n, o = [];
  for (t in ze.languages)
    if (!lo(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Na(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function Ck(e) {
  return Aw([e]);
}
function Dw(e) {
  var t;
  for (t in ze.scriptgroups)
    if (ze.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function rd(e) {
  return Dw(Na(e));
}
function Pw(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = lo(n) || n, a = rd(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Bw(e) {
  var t, n, o, s = {};
  for (t in ze.languages)
    if (!lo(t)) {
      for (n = 0; n < e.length; n++)
        if (id(t).includes(e[n])) {
          o = rd(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function xk(e) {
  return Bw([e]);
}
function bk(e) {
  var t, n, o, s = [];
  for (t = Pw(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function kk(e, t) {
  var n = Ea(e) || e, o = Ea(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Fw(e) {
  return ze.rtlscripts.includes(Na(e));
}
function $k(e) {
  return Fw(e) ? "rtl" : "ltr";
}
function Vk(e) {
  return ze.territories[e] || [];
}
function Ek(e, t) {
  t.target ? ze.languages[e] = [t.target] : ze.languages[e] = [t.script, t.regions, t.autonym];
}
var q = {
  addLanguage: Ek,
  getAutonym: Ea,
  getAutonyms: yk,
  getDir: $k,
  getGroupOfScript: Dw,
  getLanguages: Sk,
  getLanguagesByScriptGroup: Pw,
  getLanguagesByScriptGroupInRegion: xk,
  getLanguagesByScriptGroupInRegions: Bw,
  getLanguagesInScript: Ck,
  getLanguagesInScripts: Aw,
  getLanguagesInTerritory: Vk,
  getRegions: id,
  getScript: Na,
  getScriptGroupOfLanguage: rd,
  isKnown: Fa,
  isRedirect: lo,
  isRtl: Fw,
  sortByScriptGroup: bk,
  sortByAutonym: kk
};
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
const Dt = window.Vue.unref, Po = window.Vue.createVNode, gn = window.Vue.createElementVNode, Bg = window.Vue.renderSlot, Fg = window.Vue.withModifiers, _l = window.Vue.toDisplayString, Sl = window.Vue.withCtx, Ak = window.Vue.openBlock, Dk = window.Vue.createElementBlock, Pk = window.Vue.createCommentVNode, Bk = { class: "col shrink pe-4" }, Fk = { class: "col" }, Nk = { class: "cx-translation__details column justify-between ma-0" }, Mk = { class: "row ma-0" }, Uk = { class: "col grow" }, Ik = { class: "col shrink ps-2" }, Rk = ["dir", "textContent"], zk = ["dir", "textContent"], Ok = ["textContent"], jk = window.Vuex.useStore, Hk = window.Vue.computed, Nw = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Uu,
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
      onClick: c[1] || (c[1] = Fg((u) => l.$emit("click"), ["stop"]))
    }, [
      gn("div", Bk, [
        Po(Dt(Mu), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      gn("div", Fk, [
        gn("div", Nk, [
          gn("div", Mk, [
            gn("div", Uk, [
              Bg(l.$slots, "title")
            ]),
            gn("div", Ik, [
              Po(Dt(Ze), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: c[0] || (c[0] = Fg((u) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Bg(l.$slots, "mid-content"),
          Po(Dt(R), { class: "cx-translation__footer ma-0" }, {
            default: Sl(() => [
              Po(Dt(b), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Sl(() => [
                  gn("span", {
                    class: "mw-ui-autonym",
                    dir: Dt(q.getDir)(e.translation.sourceLanguage),
                    textContent: _l(Dt(q.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, Rk),
                  Po(Dt(Ze), {
                    icon: Dt(W0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  gn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: Dt(q.getDir)(e.translation.targetLanguage),
                    textContent: _l(Dt(q.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, zk)
                ]),
                _: 1
              }),
              Po(Dt(b), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Sl(() => [
                  gn("span", {
                    textContent: _l(r.value)
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
const Ng = window.Vue.unref, qk = window.Vue.toDisplayString, Gk = window.Vue.createTextVNode, Wk = window.Vue.withCtx, Xk = window.Vue.openBlock, Kk = window.Vue.createBlock, Yk = window.Codex.CdxInfoChip, Ir = {
  __name: "CommunityPriorityBadge",
  setup(e) {
    return (t, n) => (Xk(), Kk(Ng(Yk), {
      icon: Ng(ed),
      class: "cx-community-priority-badge"
    }, {
      default: Wk(() => [
        Gk(qk(t.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const go = window.Vue.unref, Qk = window.Vue.toDisplayString, Jk = window.Vue.normalizeClass, Zk = window.Vue.createElementVNode, ni = window.Vue.openBlock, e8 = window.Vue.createElementBlock, yl = window.Vue.createCommentVNode, oi = window.Vue.createVNode, Bo = window.Vue.withCtx, Cl = window.Vue.createBlock, t8 = ["lang", "textContent"], n8 = ["lang", "innerHTML"], o8 = window.Vue.computed, s8 = window.Vue.inject, a8 = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: kr,
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
    ), a = tt(), { setTranslationURLParams: r } = D(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (c, u) => (ni(), Cl(Nw, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": go(wf),
      onActionIconClicked: u[0] || (u[0] = (i) => c.$emit("delete-translation")),
      onClick: l
    }, {
      title: Bo(() => [
        Zk("h5", {
          class: Jk(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Qk(e.translation.sourceTitle)
        }, null, 10, t8),
        e.translation.isLeadSectionTranslation ? yl("", !0) : (ni(), e8("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, n8))
      ]),
      "mid-content": Bo(() => [
        e.translation.progress ? (ni(), Cl(go(R), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Bo(() => [
            oi(go(b), null, {
              default: Bo(() => [
                oi(go(Sf), {
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
        })) : yl("", !0),
        e.translation.inFeaturedCollection ? (ni(), Cl(go(R), {
          key: 1,
          class: "ma-0 py-2"
        }, {
          default: Bo(() => [
            oi(go(b), { shrink: "" }, {
              default: Bo(() => [
                oi(Ir)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : yl("", !0)
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
  return (t, n, o) => x(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !r8(t, n, o) && (s = yield ge.fetchSectionSuggestion(
      t,
      o,
      n
    ), l8(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Uw = window.Vue.ref, Iw = Uw(null), Fu = Uw(null), u8 = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), Iw.value = e;
}, d8 = (e) => {
  Fu.value = e;
}, Ma = () => {
  const e = tt(), { loadSuggestion: t } = Ba(), { setTranslationURLParams: n } = D();
  return (o, s, a, r, l = null, c = !0) => x(void 0, null, function* () {
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
const xl = window.Vue.withModifiers, Mg = window.Vue.toDisplayString, Ug = window.Vue.createElementVNode, st = window.Vue.unref, mn = window.Vue.createVNode, m8 = window.Vue.createTextVNode, Ls = window.Vue.openBlock, Ig = window.Vue.createElementBlock, bl = window.Vue.createCommentVNode, kl = window.Vue.createBlock, Mn = window.Vue.withCtx, p8 = ["lang", "href", "textContent"], h8 = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, f8 = {
  key: 2,
  class: "flex"
}, w8 = ["innerHTML"], $l = window.Vue.computed, Rg = window.Vue.ref, zg = window.Codex.CdxButton, Vl = window.Codex.CdxIcon, v8 = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: sd,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Rg(!0), o = Rg(null), s = $l(() => {
      var m;
      return (m = o.value) == null ? void 0 : m.missingSections;
    }), a = $l(
      () => s.value && Object.keys(s.value)[0]
    );
    c8()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((m) => o.value = m).catch((m) => console.log(m)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = D(), c = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, u = Ma(), i = (m) => {
      u(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), m && l(m);
    }, d = mw.config.get("wgNamespaceIds"), g = $l(() => {
      const m = g8(
        t.translation.targetUrl
      );
      return (m == null ? void 0 : m.getNamespaceId()) === d.user;
    });
    return (m, p) => (Ls(), kl(Nw, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: c
    }, {
      title: Mn(() => [
        Ug("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: p[0] || (p[0] = xl(() => {
          }, ["stop"])),
          textContent: Mg(e.translation.sourceTitle)
        }, null, 8, p8)
      ]),
      "mid-content": Mn(() => [
        mn(st(R), { class: "ma-0" }, {
          default: Mn(() => [
            mn(st(b), null, {
              default: Mn(() => [
                g.value ? (Ls(), Ig("div", h8, [
                  mn(st(Vl), {
                    icon: st(Zf),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  m8(" " + Mg(m.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : bl("", !0),
                n.value ? (Ls(), kl(st(gt), { key: 1 })) : s.value ? (Ls(), Ig("div", f8, [
                  mn(st(zg), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: p[1] || (p[1] = xl((h) => i(a.value), ["stop"]))
                  }, {
                    default: Mn(() => [
                      mn(st(Vl), {
                        class: "me-1",
                        icon: st(qf)
                      }, null, 8, ["icon"]),
                      Ug("span", { innerHTML: a.value }, null, 8, w8)
                    ]),
                    _: 1
                  }),
                  mn(st(zg), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": m.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: p[2] || (p[2] = xl((h) => i(null), ["stop"]))
                  }, {
                    default: Mn(() => [
                      mn(st(Vl), { icon: st(Ju) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : bl("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e.translation.inFeaturedCollection ? (Ls(), kl(st(R), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Mn(() => [
            mn(st(b), { shrink: "" }, {
              default: Mn(() => [
                mn(Ir)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : bl("", !0)
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
  ) : Nf(r).then((c) => {
    mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: c,
        user_global_edit_count_bucket: IS(c)
      })
    );
  });
}
const Og = window.Vue.computed;
function pt(e) {
  const t = Og(
    () => e.state.application.currentMTProvider
  ), n = Og(() => e.state.application.previousRoute);
  return {
    currentMTProvider: t,
    previousRoute: n
  };
}
const b8 = window.Vuex.useStore, k8 = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], Lt = () => {
  const e = b8(), { previousRoute: t } = pt(e), n = {
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
  return (n) => x(void 0, null, function* () {
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
const E8 = window.Vue.resolveDirective, El = window.Vue.createElementVNode, L8 = window.Vue.withDirectives, Ll = window.Vue.unref, jg = window.Vue.createVNode, Hg = window.Vue.withCtx, T8 = window.Vue.openBlock, A8 = window.Vue.createBlock, D8 = { class: "pa-4" }, P8 = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, B8 = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: kr,
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
      return T8(), A8(Ll(Vt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Hg(() => [
          El("div", P8, [
            jg(Ll(Xe), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            jg(Ll(Xe), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Hg(() => [
          El("div", D8, [
            L8(El("span", null, null, 512), [
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
  return x(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield N8(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function qg(e, t, n) {
  return x(this, null, function* () {
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
const Tl = window.Vue.ref, Al = window.Vue.watch, z8 = window.Vue.computed;
function Ow(e, t, n) {
  const o = Tl(""), s = Tl(-1), a = Tl(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = z8(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), c = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Al(e, () => {
    s.value = -1;
  }), Al(t, () => {
    t.value && l.value.length > 0 && (s.value = 0);
  }), Al(s, () => x(this, null, function* () {
    var u;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (u = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || u.scrollIntoView(!1);
  })), { next: r, prev: c, keyboardNavigationContainer: a, selectedItem: o };
}
function ld(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const si = window.Vue.renderSlot, Te = window.Vue.unref, O8 = window.Vue.isRef, Gg = window.Vue.createVNode, Ts = window.Vue.withModifiers, As = window.Vue.withKeys, Un = window.Vue.createElementVNode, j8 = window.Vue.resolveDirective, ai = window.Vue.withDirectives, Dl = window.Vue.renderList, Pl = window.Vue.Fragment, pn = window.Vue.openBlock, hn = window.Vue.createElementBlock, Wg = window.Vue.toDisplayString, ii = window.Vue.normalizeClass, Bl = window.Vue.createCommentVNode, H8 = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, q8 = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, G8 = { class: "results px-3 pt-4" }, W8 = { class: "results-header ps-8 pb-2" }, X8 = { class: "results-languages--suggestions pa-0 ma-0" }, K8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], Y8 = { class: "results px-3 pt-4" }, Q8 = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, J8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], Z8 = ["aria-selected"], e2 = { class: "no-results px-3 py-4" }, t2 = { class: "ps-8" }, ri = window.Vue.ref, n2 = window.Vue.watch, o2 = window.Vue.onMounted, Xg = window.Vue.computed, jw = {
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
    const n = e, o = t, s = ri(null), a = ri(""), r = ri([]), l = ri(n.suggestions), c = Xg(
      () => U8(r.value)
    ), u = Xg(() => {
      const C = r.value.length;
      return C < 10 ? "few-results" : C < 30 ? "some-results" : "many-results";
    }), i = (C) => o("select", C), d = () => o("close"), { autocompletion: g, onTabSelect: m } = R8(
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
    return n2(a, ld(() => x(this, null, function* () {
      r.value = yield qg(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), o2(() => x(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield qg(
        n.languages,
        "",
        n.searchAPI
      );
    })), (C, _) => {
      const k = j8("i18n");
      return pn(), hn("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        si(C.$slots, "search", {}, () => [
          Un("div", H8, [
            Gg(Te(Cu), {
              value: Te(g),
              "onUpdate:value": _[0] || (_[0] = (E) => O8(g) ? g.value = E : null),
              icon: Te($d),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Gg(Te(Cu), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": _[1] || (_[1] = (E) => a.value = E),
              class: "mw-ui-language-selector__search pa-4",
              icon: Te($d),
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
        Un("section", q8, [
          e.suggestions.length && !a.value ? si(C.$slots, "suggestions", { key: 0 }, () => [
            Un("section", G8, [
              ai(Un("p", W8, null, 512), [
                [k, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Un("ul", X8, [
                (pn(!0), hn(Pl, null, Dl(e.suggestions, (E) => (pn(), hn("li", {
                  key: E,
                  class: ii(["language ma-0", { "language--selected": E === Te(w) }]),
                  lang: E,
                  dir: Te(q.getDir)(E),
                  "aria-selected": E === Te(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (M) => i(E),
                  textContent: Wg(Te(q.getAutonym)(E))
                }, null, 10, K8))), 128))
              ])
            ])
          ]) : Bl("", !0),
          c.value.length ? si(C.$slots, "search", { key: 1 }, () => [
            Un("section", Y8, [
              e.suggestions.length && !a.value ? ai((pn(), hn("p", Q8, null, 512)), [
                [k, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Bl("", !0),
              (pn(!0), hn(Pl, null, Dl(c.value, (E, M) => (pn(), hn("ul", {
                key: M,
                class: ii(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (pn(!0), hn(Pl, null, Dl(E, (L) => (pn(), hn("li", {
                  key: L,
                  class: ii(["language ma-0", { "language--selected": L === Te(w) }]),
                  lang: L,
                  dir: Te(q.getDir)(L),
                  role: "option",
                  "aria-selected": L === Te(w) || null,
                  tabindex: "-1",
                  onClick: (V) => i(L),
                  textContent: Wg(Te(q.getAutonym)(L))
                }, null, 10, J8))), 128)),
                e.allOptionEnabled && !a.value ? ai((pn(), hn("li", {
                  key: 0,
                  class: ii(["language ma-0", { "language--selected": Te(w) === "all" }]),
                  role: "option",
                  "aria-selected": Te(w) === "all" || null,
                  tabindex: "-1",
                  onClick: _[2] || (_[2] = (L) => i("all"))
                }, null, 10, Z8)), [
                  [k, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Bl("", !0)
              ], 2))), 128))
            ])
          ]) : si(C.$slots, "noresults", { key: 2 }, () => [
            Un("section", e2, [
              ai(Un("h3", t2, null, 512), [
                [k, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const s2 = window.Vue.resolveDirective, Kg = window.Vue.withDirectives, Ds = window.Vue.openBlock, Ps = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ae = window.Vue.unref, Yg = window.Vue.toDisplayString, Pt = window.Vue.createVNode, Qg = window.Vue.withModifiers, mo = window.Vue.withCtx, a2 = window.Vue.normalizeClass, i2 = {
  key: 0,
  class: "mw-ui-autonym"
}, r2 = ["lang", "dir", "textContent"], l2 = {
  key: 0,
  class: "mw-ui-autonym"
}, c2 = ["lang", "dir", "textContent"], Bs = window.Vue.computed, u2 = window.Vue.inject, d2 = window.Vue.ref, Jg = window.Codex.CdxButton, Fl = window.Codex.CdxIcon, yr = {
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
    const n = e, o = t, s = u2("breakpoints"), a = Bs(() => s.value.mobile), r = d2(null), l = Bs(() => !!r.value), c = () => r.value = "source", u = () => r.value = "target", i = () => r.value = null, d = Bs(() => {
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
      const w = s2("i18n");
      return Ds(), Ps("div", {
        class: a2(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        Pt(Ae(R), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: mo(() => [
            Pt(Ae(b), {
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
                    m.value ? Kg((Ds(), Ps("span", i2, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ds(), Ps("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ae(q.getDir)(e.selectedSourceLanguage),
                      textContent: Yg(Ae(q.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, r2)),
                    Pt(Ae(Fl), {
                      size: "x-small",
                      icon: Ae($u)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Pt(Ae(b), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: mo(() => [
                Pt(Ae(Fl), { icon: Ae(Gf) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Pt(Ae(b), {
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
                    p.value ? Kg((Ds(), Ps("span", l2, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ds(), Ps("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ae(q.getDir)(e.selectedTargetLanguage),
                      textContent: Yg(Ae(q.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, c2)),
                    Pt(Ae(Fl), {
                      size: "x-small",
                      icon: Ae($u)
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
const Zg = window.Vue.unref, g2 = window.Vue.createVNode, li = window.Vue.createElementVNode, em = window.Vue.toDisplayString, m2 = window.Vue.openBlock, p2 = window.Vue.createElementBlock, h2 = { class: "cx-list-empty-placeholder pa-4" }, f2 = { class: "cx-list-empty-placeholder__icon-container" }, w2 = { class: "cx-list-empty-placeholder__icon" }, v2 = ["textContent"], _2 = ["textContent"], S2 = window.Codex.CdxIcon, Hw = {
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
      li("div", f2, [
        li("div", w2, [
          g2(Zg(S2), { icon: Zg(Qf) }, null, 8, ["icon"])
        ])
      ]),
      li("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: em(e.title)
      }, null, 8, v2),
      li("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: em(e.description)
      }, null, 8, _2)
    ]));
  }
}, y2 = window.Vuex.useStore, C2 = window.Vue.ref, ci = C2({ draft: !1, published: !1 }), hs = () => {
  const e = y2(), t = io(), { addFeaturedCollectionFlag: n } = Fr(), o = (a) => x(void 0, null, function* () {
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
          new us({ title: g, pagelanguage: d })
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
const x2 = window.Vue.toDisplayString, Nl = window.Vue.normalizeClass, tm = window.Vue.createElementVNode, Kt = window.Vue.openBlock, Fo = window.Vue.createBlock, ui = window.Vue.createCommentVNode, nm = window.Vue.unref, om = window.Vue.renderList, sm = window.Vue.Fragment, di = window.Vue.createElementBlock, b2 = window.Vue.createVNode, am = window.Vue.withCtx, k2 = ["textContent"], $2 = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, V2 = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, gi = window.Vue.ref, Bt = window.Vue.computed, E2 = window.Vue.inject, L2 = window.Vuex.useStore, im = {
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
    const t = e, n = gi("all"), o = gi("all"), s = L2(), { translationsFetched: a } = hs(), r = Bt(
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
        (_) => (d.value || _.sourceLanguage === n.value) && (g.value || _.targetLanguage === o.value)
      ).sort((_, k) => _.lastUpdatedTimestamp < k.lastUpdatedTimestamp)
    ), p = Bt(() => {
      const _ = i.value.map(
        (k) => k.targetLanguage
      );
      return [...new Set(_)];
    }), h = Bt(() => {
      const _ = i.value.map(
        (k) => k.sourceLanguage
      );
      return [...new Set(_)];
    }), f = (_) => {
      c.value = _, l.value = !0;
    }, w = Bt(() => t.activeStatus === t.translationStatus), v = E2("breakpoints"), y = Bt(() => v.value.mobile), C = Bt(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (_, k) => w.value ? (Kt(), Fo(nm(Je), {
      key: 0,
      class: Nl(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: am(() => [
        tm("div", {
          class: Nl(["cx-translation-list__header", C.value])
        }, [
          tm("h3", {
            class: Nl(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: x2(_.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, k2),
          m.value.length ? (Kt(), Fo(yr, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": k[0] || (k[0] = (E) => n.value = E),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": k[1] || (k[1] = (E) => o.value = E),
            "source-languages": h.value,
            "target-languages": p.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : ui("", !0)
        ], 2)
      ]),
      default: am(() => [
        r.value && !m.value.length ? (Kt(), Fo(Hw, {
          key: 0,
          title: _.$i18n("cx-sx-translation-list-empty-title"),
          description: _.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : ui("", !0),
        r.value ? ui("", !0) : (Kt(), Fo(nm(gt), { key: 1 })),
        u.value ? (Kt(), di("div", $2, [
          (Kt(!0), di(sm, null, om(m.value, (E) => (Kt(), Fo(a8, {
            key: `${e.translationStatus}-${E.key}`,
            translation: E,
            onDeleteTranslation: (M) => f(E)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Kt(), di("div", V2, [
          (Kt(!0), di(sm, null, om(m.value, (E) => (Kt(), Fo(v8, {
            key: `${e.translationStatus}-${E.key}`,
            translation: E
          }, null, 8, ["translation"]))), 128))
        ])),
        b2(B8, {
          modelValue: l.value,
          "onUpdate:modelValue": k[2] || (k[2] = (E) => l.value = E),
          translation: c.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : ui("", !0);
  }
};
const Ml = window.Vue.toDisplayString, mi = window.Vue.createElementVNode, Ul = window.Vue.unref, Fs = window.Vue.openBlock, Il = window.Vue.createBlock, rm = window.Vue.createCommentVNode, T2 = window.Vue.Fragment, lm = window.Vue.createElementBlock, A2 = window.Vue.withKeys, D2 = window.Vue.withCtx, P2 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, B2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, F2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, cm = window.Codex.CdxIcon, N2 = window.Codex.CdxInfoChip, pi = window.Vue.computed, $o = {
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
    const t = e, n = pi(() => t.content.lastIndexOf("/")), o = pi(() => t.content.slice(0, n.value)), s = pi(() => t.content.slice(n.value + 1)), a = pi(
      () => t.expanded ? fC : $u
    );
    return (r, l) => (Fs(), Il(Ul(N2), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = A2((c) => r.$emit("click"), ["enter"]))
    }, {
      default: D2(() => [
        n.value === -1 ? (Fs(), lm(T2, { key: 0 }, [
          mi("span", null, Ml(e.content), 1),
          e.expandable ? (Fs(), Il(Ul(cm), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : rm("", !0)
        ], 64)) : (Fs(), lm("div", P2, [
          mi("span", B2, Ml(o.value), 1),
          l[1] || (l[1] = mi("span", null, "/", -1)),
          mi("span", F2, Ml(s.value), 1),
          e.expandable ? (Fs(), Il(Ul(cm), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : rm("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const Se = window.Vue.unref, wt = window.Vue.createVNode, In = window.Vue.createElementVNode, Ns = window.Vue.toDisplayString, at = window.Vue.withCtx, M2 = window.Vue.resolveDirective, Rl = window.Vue.withDirectives, fn = window.Vue.openBlock, po = window.Vue.createBlock, Rn = window.Vue.createCommentVNode, um = window.Vue.createElementBlock, dm = window.Vue.withModifiers, U2 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, I2 = { class: "col shrink pe-4" }, R2 = ["lang", "dir", "textContent"], z2 = ["lang", "dir", "textContent"], O2 = { class: "cx-suggestion__missing-sections" }, j2 = {
  key: 0,
  class: "cx-suggestion__easy-sections ms-1"
}, H2 = ["textContent"], q2 = ["textContent"], zl = window.Codex.CdxIcon, Ee = window.Vue.computed, G2 = window.Vue.inject, W2 = window.Vuex.useStore, Nu = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [oo, on, is],
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
        var L;
        return (L = o.value) == null ? void 0 : L.missingSectionsCount;
      }
    ), l = Ee(() => !(o.value instanceof on) || !o.value.orderedMissingSections ? 0 : o.value.orderedMissingSections.filter((L) => {
      const V = o.value.getSectionSize(L.sourceTitle);
      return Rf(V);
    }).length), c = fe(), u = Ee(() => {
      const L = c.i18n(
        "cx-sx-translation-suggestion-easy-sections",
        [l.value]
      );
      return c.i18n("parentheses", [L]);
    }), i = Ee(() => {
      var L;
      return (L = a.value) == null ? void 0 : L.description;
    }), d = Ee(
      () => o.value instanceof on
    );
    Ee(
      () => o.value instanceof oo
    );
    const g = Ee(
      () => o.value instanceof is
    ), m = Ee(
      () => q.getAutonym(o.value.sourceLanguage)
    ), p = Ee(
      () => q.getAutonym(o.value.targetLanguage)
    ), h = Ee(
      () => g.value ? Xf : Kf
    ), f = G2("colors"), w = Ee(
      () => g.value ? f.blue600 : "currentColor"
    ), v = Ee(
      () => o.value instanceof Bf || o.value instanceof Ff
    ), y = Ee(() => {
      if (!v.value || o.value.inFeaturedCollection)
        return !1;
      const L = k();
      return (L == null ? void 0 : L.id) === te;
    }), C = Ee(() => y.value || d.value ? !1 : qt ? zS(o.value.size) : OS(o.value.leadSectionSize)), { featuredCollection: _ } = Wt(), { findSelectedFilter: k } = ro(), E = Ee(() => {
      var V, B;
      const L = k();
      return ((V = L == null ? void 0 : L.id) == null ? void 0 : V.toLowerCase()) === ((B = _.value) == null ? void 0 : B.name.toLowerCase());
    }), M = Ee(() => {
      if (!o.value.inFeaturedCollection)
        return !1;
      if (g.value)
        return !0;
      const L = k();
      return (L == null ? void 0 : L.id) === te ? !0 : !E.value;
    });
    return (L, V) => {
      const B = M2("i18n");
      return o.value ? (fn(), um("div", U2, [
        In("div", I2, [
          wt(Se(Mu), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        wt(Se(R), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: at(() => [
            wt(Se(R), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: at(() => [
                wt(Se(b), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: at(() => [
                    In("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: o.value.sourceLanguage,
                      dir: Se(q.getDir)(o.value.sourceLanguage),
                      textContent: Ns(s.value)
                    }, null, 8, R2)
                  ]),
                  _: 1
                }),
                wt(Se(b), { shrink: "" }, {
                  default: at(() => [
                    In("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: o.value.sourceLanguage,
                      dir: Se(q.getDir)(o.value.sourceLanguage),
                      textContent: Ns(i.value)
                    }, null, 8, z2)
                  ]),
                  _: 1
                }),
                C.value ? (fn(), po(Se(b), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: at(() => [
                    Rl(In("small", null, null, 512), [
                      [B, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Rn("", !0),
                d.value ? (fn(), po(Se(b), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom",
                  shrink: ""
                }, {
                  default: at(() => [
                    Rl(In("small", O2, null, 512), [
                      [B, [r.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (fn(), um("small", j2, Ns(u.value), 1)) : Rn("", !0)
                  ]),
                  _: 1
                })) : Rn("", !0),
                M.value ? (fn(), po(Se(b), {
                  key: 2,
                  shrink: "",
                  class: "cx-suggestion__information-panel__featured mt-auto"
                }, {
                  default: at(() => [
                    wt(Ir)
                  ]),
                  _: 1
                })) : g.value ? (fn(), po(Se(b), {
                  key: 3,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: at(() => [
                    wt(Se(R), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: at(() => [
                        wt(Se(b), { grow: "" }, {
                          default: at(() => [
                            In("small", {
                              textContent: Ns(m.value)
                            }, null, 8, H2),
                            wt(Se(zl), {
                              icon: Se(Gf),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            In("small", {
                              textContent: Ns(p.value)
                            }, null, 8, q2)
                          ]),
                          _: 1
                        }),
                        r.value ? (fn(), po(Se(b), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: at(() => [
                            Rl(In("small", null, null, 512), [
                              [B, [
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
                y.value ? (fn(), po(Se(b), {
                  key: 4,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: at(() => [
                    wt($o, {
                      icon: Se(Yu),
                      content: o.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : Rn("", !0)
              ]),
              _: 1
            }),
            wt(Se(b), { shrink: "" }, {
              default: at(() => [
                g.value ? Rn("", !0) : (fn(), po(Se(zl), {
                  key: 0,
                  icon: Se(ms),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: V[0] || (V[0] = dm((X) => L.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                wt(Se(zl), {
                  class: "cx-suggestion__favorite-button",
                  icon: h.value,
                  "icon-color": w.value,
                  onClick: V[1] || (V[1] = dm((X) => L.$emit("bookmark"), ["stop"]))
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
const Ol = window.Vue.normalizeClass, gm = window.Vue.createVNode, X2 = window.Vue.renderList, mm = window.Vue.Fragment, Ms = window.Vue.openBlock, hi = window.Vue.createElementBlock, K2 = window.Vue.createBlock, Y2 = window.Vue.toDisplayString, Q2 = window.Vue.withKeys, pm = window.Vue.createCommentVNode, J2 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, fi = window.Vue.computed, Z2 = window.Vue.ref, e$ = window.Vue.watchEffect, t$ = {
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
    const n = e, o = fi(
      () => n.isSelected(n.filter) || n.filter.subFilters.some((g) => n.isSelected(g))
    ), s = Z2(!1);
    e$(() => {
      n.filter.expandable && (s.value = o.value);
    });
    const a = t, r = () => {
      n.filter.expandable && o.value ? s.value = !s.value : a("filter-selected", n.filter);
    }, l = fi(() => {
      const g = n.filter.subFilters.find(
        (p) => n.isSelected(p)
      );
      let m = n.filter.chipLabel;
      return g && (m += `/${c(g)}`), m;
    }), c = (g) => {
      const { label: m } = g, p = n.filter.label;
      return m.startsWith(`${p}/`) ? m.replace(`${p}/`, "") : m;
    }, u = fi(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), i = fi(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && s.value
    ), d = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, m) => (Ms(), hi(mm, null, [
      gm($o, {
        class: Ol(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": o.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: s.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      s.value ? (Ms(), hi("div", J2, [
        gm($o, {
          class: Ol(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: m[0] || (m[0] = (p) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Ms(!0), hi(mm, null, X2(u.value, (p) => (Ms(), K2($o, {
          key: p.id,
          class: Ol(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(p)
          }]),
          content: c(p),
          icon: p.icon,
          onClick: (h) => g.$emit("filter-selected", p)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        i.value ? (Ms(), hi("div", {
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
const n$ = window.Vue.toDisplayString, hm = window.Vue.createElementVNode, o$ = window.Vue.renderList, fm = window.Vue.Fragment, jl = window.Vue.openBlock, wm = window.Vue.createElementBlock, s$ = window.Vue.createBlock, a$ = { class: "sx-suggestions-filters__group-label mb-3" }, i$ = { class: "sx-suggestions-filters__group-filters mb-3" }, r$ = {
  __name: "SXSuggestionsFiltersDialogTabGroupContent",
  props: {
    filterGroup: {
      type: Ca,
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
    return (o, s) => (jl(), wm(fm, null, [
      hm("div", a$, n$(e.filterGroup.label), 1),
      hm("div", i$, [
        (jl(!0), wm(fm, null, o$(n(), (a) => (jl(), s$(t$, {
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
  ), r = l$("breakpoints"), l = vm(() => r.value.mobile), { inFeaturedCollection: c } = td(), u = (g) => x(void 0, null, function* () {
    const m = g.map((h) => h.wikidataId).filter(Boolean), p = yield c(m);
    g.forEach((h) => {
      h.wikidataId && (h.inFeaturedCollection = p[h.wikidataId]);
    });
  }), i = ld(() => x(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      const g = yield ds.searchPagesByTitlePrefix(
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
class wi {
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
const Hl = window.Vue.ref, ym = window.Vue.watch, Cm = window.Vue.computed, { topics: c$, regions: u$ } = mw.loader.require(
  "ext.cx.articlefilters"
), d$ = c$.flatMap(
  (e) => e.topics.map((t) => Ke(me({}, t), {
    groupId: e.groupId
  }))
), g$ = () => {
  const e = Hl(""), t = Hl("all"), n = Hl({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = fe(), { pageCollectionGroups: s } = Dr(), { sourceLanguageURLParameter: a } = D(), r = (m) => (m = m.toLowerCase(), d$.filter(
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
        return new wi({
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
  }), ym([e, t], () => x(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (m) => new wi({
        label: m.label,
        value: m.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? Vu : null,
        filterType: et,
        filterId: m.topicId
      })
    ), n.value.collections = l(
      e.value
    ).map(
      (m) => new wi({
        label: m.name,
        value: m.name,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          m.articlesCount
        ),
        icon: t.value === "all" ? Yu : null,
        filterType: te,
        filterId: m.name
      })
    ), n.value.regions = c(e.value).map(
      (m) => new wi({
        label: m.label,
        value: m.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? Vu : null,
        filterType: Pe,
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
}, m$ = "suggestion_filter_topic_area", p$ = "suggestion_filter_search_result_seed", h$ = "suggestion_filter_collections", f$ = "suggestion_filter_previous_edits", w$ = "suggestion_filter_popular_articles", v$ = "suggestion_filter_region", ql = (e) => {
  if (e.type === et || e.type === Pe || e.type === te || e.type === Gt)
    return e.id;
  if (e.id === te)
    return "all-collections";
}, Gl = (e) => {
  if (e.type === et)
    return m$;
  if (e.type === Pe)
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
      event_source: Gl(r),
      event_context: ql(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: Gl(r),
      event_context: ql(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: Gl(r),
      event_context: ql(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const be = window.Vue.unref, vt = window.Vue.createVNode, Ft = window.Vue.withCtx, _$ = window.Vue.resolveDirective, Yt = window.Vue.createElementVNode, No = window.Vue.withDirectives, xm = window.Vue.toDisplayString, S$ = window.Vue.createTextVNode, y$ = window.Vue.vShow, bm = window.Vue.isRef, km = window.Vue.renderList, $m = window.Vue.Fragment, wn = window.Vue.openBlock, ho = window.Vue.createElementBlock, C$ = window.Vue.withKeys, Vm = window.Vue.createCommentVNode, Em = window.Vue.createBlock, x$ = { class: "sx-suggestions-filters" }, b$ = { class: "mb-0" }, k$ = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, $$ = { class: "mb-3" }, V$ = { class: "px-4 pb-4 pt-7" }, E$ = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, L$ = ["onKeyup", "onClick"], T$ = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, A$ = { class: "sx-suggestions-filters__search-results-pending" }, D$ = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, P$ = { class: "sx-suggestions-filters__search-results-empty-primary" }, B$ = { class: "sx-suggestions-filters__search-results-empty-secondary" }, vi = window.Vue.ref, fo = window.Vue.computed, F$ = window.Vue.inject, N$ = window.Vue.watch, Lm = window.Codex.CdxButton, M$ = window.Codex.CdxIcon, U$ = window.Codex.CdxTextInput, I$ = window.Codex.CdxMenu, R$ = window.Codex.CdxTabs, z$ = window.Codex.CdxTab, O$ = {
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
          Pe,
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
        filterGroups: m([Pe])
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
    ), l = (O, j) => j === "all" && O.type === Pe ? {
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
      return j === Pe;
    }, { allFilters: u, isFilterSelected: i, selectFilter: d, findSelectedFilter: g } = ro(), m = (O) => O.flatMap((j) => u.value.filter((ce) => ce.type === j)).filter(Boolean), p = () => {
      k(), o("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: h,
      logSuggestionFiltersConfirm: f,
      logSuggestionFiltersSelect: w
    } = Gw(), v = () => {
      h(), p();
    }, y = () => {
      _.value && (f(_.value), d(_.value)), p();
    }, C = vi(!1), _ = vi(null), k = () => {
      _.value = null, C.value = !1;
    }, E = (O) => {
      w(O), _.value = O, C.value = !0;
    }, M = (O) => _.value ? _.value.id === O.id && _.value.type === O.type : i(O), L = F$("breakpoints"), V = fo(() => L.value.mobile), { searchInput: B, searchScope: X, searchResults: se, searchResultsLoading: ee } = g$(), ne = fo(
      () => _.value || g()
    ), F = vi(null);
    N$(F, () => {
      if (!F.value)
        return;
      const O = K.value.find(
        (j) => j.value === F.value
      );
      E({
        type: O.filterType,
        id: O.filterId,
        label: O.label
      }), B.value = "";
    });
    const z = {
      [te]: "cx-sx-suggestions-filters-view-all-collections-group",
      [Pe]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, K = fo(
      () => se.value.flatMap((O) => O.items)
    ), J = vi({}), $e = fo(
      () => J.value[X.value]
    ), xe = fo(() => {
      var j;
      const O = (j = $e.value) == null ? void 0 : j.getHighlightedMenuItem();
      return O == null ? void 0 : O.id;
    }), _e = (O) => {
      O.key !== " " && $e.value && $e.value.delegateKeyNavigation(O);
    }, Oe = (O, j) => {
      J.value[j] = O;
    };
    return (O, j) => {
      const ce = _$("i18n");
      return wn(), Em(be(Vt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: V.value,
        header: !1
      }, {
        default: Ft(() => [
          Yt("section", x$, [
            vt(be(R), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Ft(() => [
                vt(be(b), {
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
                        vt(be(M$), { icon: be(ms) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                vt(be(b), {
                  grow: "",
                  align: "center"
                }, {
                  default: Ft(() => [
                    No(Yt("h5", b$, null, 512), [
                      [ce, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                vt(be(b), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Ft(() => [
                    No(vt(be(Lm), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: y
                    }, {
                      default: Ft(() => [
                        S$(xm(O.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [y$, C.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Yt("div", k$, [
              No(Yt("h5", $$, null, 512), [
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
                modelValue: be(B),
                "onUpdate:modelValue": j[0] || (j[0] = (S) => bm(B) ? B.value = S : null),
                role: "combobox",
                "aria-activedescendant": xe.value,
                "aria-controls": "sx-suggestions-filters__search-results__menu",
                "aria-autocomplete": "none",
                placeholder: r.value.searchPlaceholder,
                "input-type": "search",
                "start-icon": be(Vu),
                clearable: !!be(B),
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
                (wn(!0), ho($m, null, km(s.value, (S, A) => (wn(), Em(be(z$), {
                  key: A,
                  name: S.name,
                  label: S.label
                }, {
                  default: Ft(() => [
                    be(B) ? (wn(), ho("div", T$, [
                      vt(be(I$), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (T) => Oe(T, S.name),
                        selected: F.value,
                        "onUpdate:selected": j[1] || (j[1] = (T) => F.value = T),
                        "show-pending": be(ee),
                        expanded: "",
                        "menu-items": K.value
                      }, {
                        pending: Ft(() => [
                          No(Yt("div", A$, null, 512), [
                            [ce, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Ft(() => [
                          be(ee) ? Vm("", !0) : (wn(), ho("div", D$, [
                            No(Yt("span", P$, null, 512), [
                              [ce, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            No(Yt("span", B$, null, 512), [
                              [ce, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (wn(), ho("div", E$, [
                      (wn(!0), ho($m, null, km(S.filterGroups, (T) => (wn(), ho("div", {
                        key: T.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        vt(r$, {
                          "filter-group": T,
                          "tentatively-select-filter": E,
                          "is-selected": M,
                          limit: c(S.name, T.type) ? 4 : 0,
                          "get-sub-filter-config": (N) => l(N, S.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        c(S.name, T.type) ? (wn(), ho("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: C$((N) => a(T.id), ["enter"]),
                          onClick: (N) => a(T.id)
                        }, [
                          Yt("span", null, xm(O.$i18n(z[T.id])), 1)
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
const Us = window.Vue.unref, _i = window.Vue.openBlock, Tm = window.Vue.createBlock;
window.Vue.createCommentVNode;
const j$ = window.Vue.renderList, H$ = window.Vue.Fragment, Am = window.Vue.createElementBlock, q$ = window.Vue.normalizeClass, Dm = window.Vue.createVNode, G$ = {
  key: 1,
  class: "cx-suggestion-list__filters flex mx-4 pb-2"
}, Pm = window.Vue.ref, Bm = window.Vue.watch, W$ = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = fe(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: o } = Gw(), { targetLanguageURLParameter: s } = D(), {
      getFiltersSummary: a,
      selectFilter: r,
      isFilterSelected: l,
      waitingForPageCollectionsFetch: c,
      validateURLFilterWithCollections: u,
      setFeaturedCollectionFilterIfNeeded: i
    } = ro(), d = Pm(!1), g = () => {
      o(), d.value = !0;
    }, m = (h) => {
      n(h), r(h);
    }, p = Pm(a());
    return Bm(d, (h) => {
      h || (p.value = a());
    }), Bm([c, s], ([h]) => {
      h || (u(), i(), p.value = a());
    }), (h, f) => Us(c) ? (_i(), Tm(Us(gt), { key: 0 })) : (_i(), Am("div", G$, [
      (_i(!0), Am(H$, null, j$(p.value, (w) => (_i(), Tm($o, {
        key: w.label,
        class: q$(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": Us(l)(w)
        }]),
        icon: w.icon,
        content: w.label,
        onClick: (v) => m(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Dm($o, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: Us(Ju),
        content: Us(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: g
      }, null, 8, ["icon", "content"]),
      Dm(O$, {
        modelValue: d.value,
        "onUpdate:modelValue": f[0] || (f[0] = (w) => d.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, Mo = window.Vue.computed, Fm = window.Vue.ref, Wl = window.Vue.watch, X$ = window.Vuex.useStore, K$ = () => {
  const e = X$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Ar(), r = Lt(), l = Mo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), c = Mo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), u = Fm(0), i = Fm(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, g = 4, m = Mo(
    () => a(u.value)
  );
  Wl(
    m,
    () => {
      m.value.forEach((B) => {
        B.seen = !0;
      });
    },
    { deep: !0 }
  );
  const p = Mo(
    () => s(i.value)
  );
  Wl(
    p,
    () => {
      p.value.forEach((B) => {
        B.seen = !0;
      });
    },
    { deep: !0 }
  );
  const h = () => {
    _(), L(), k(), V();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: w
  } = nd(), v = (B) => B.length === d, y = Mo(
    () => v(p.value)
  ), C = Mo(
    () => v(m.value)
  ), _ = () => {
    const B = (u.value + 1) % g, X = v(
      a(B)
    );
    (!C.value || !X) && f();
  }, k = () => {
    const B = (i.value + 1) % g, X = v(
      s(B)
    );
    (!y.value || !X) && w();
  }, E = (B) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", B), _();
  }, M = (B) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", B), k();
  }, L = () => u.value = (u.value + 1) % g, V = () => i.value = (i.value + 1) % g;
  return Wl(
    o,
    () => {
      i.value = 0, k(), u.value = 0, _();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: p,
    currentSectionSuggestionsSlice: m,
    discardPageSuggestion: M,
    discardSectionSuggestion: E,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: c,
    sectionSuggestionsLoading: l,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: C
  };
}, Y$ = window.Vuex.useStore, cd = () => {
  const e = Y$(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = nd(), { addFeaturedCollectionFlag: o } = Fr(), s = (i, d, g) => e.state.suggestions.pageSuggestions.find(
    (m) => m.sourceLanguage === i && m.targetLanguage === d && m.sourceTitle === g
  ), a = (i) => x(void 0, null, function* () {
    const { sourceTitle: d, sourceLanguage: g, targetLanguage: m } = i;
    yield ge.markFavorite(d, g, m);
    const p = new is({
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
    markFavoriteSuggestion: (i, d, g) => x(void 0, null, function* () {
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
      const h = new is({
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
  const { currentSuggestionFilters: e } = D();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === an)
      return t ? J$ : Q$;
    if (n === et)
      return Z$;
    if (n === Pe)
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
const Si = window.Vue.unref, Nm = window.Vue.createVNode, Uo = window.Vue.toDisplayString, Io = window.Vue.createElementVNode, Is = window.Vue.openBlock, Rs = window.Vue.createElementBlock, yi = window.Vue.createCommentVNode, Mm = window.Vue.createTextVNode, aV = window.Vue.normalizeClass, iV = { class: "cx-featured-collection-banner py-4 px-6" }, rV = { class: "cx-featured-collection-banner__header mb-3" }, lV = { class: "cx-featured-collection-banner__header-text" }, cV = { class: "cx-featured-collection-banner__title mb-0" }, uV = {
  key: 0,
  class: "cx-featured-collection-banner__source mb-0"
}, dV = { class: "cx-featured-collection-banner__content" }, gV = { class: "cx-featured-collection-banner__learn-more-container" }, mV = ["href"], Um = window.Codex.CdxIcon, Xl = window.Vue.ref, pV = window.Vue.computed, hV = window.Vue.onMounted, fV = window.Vue.onUnmounted, wV = {
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
    const t = Xl(!1), n = Xl(null), o = Xl(null), s = pV(() => n.value ? (o.value, n.value.scrollHeight > n.value.clientHeight) : !1), a = () => {
      t.value = !t.value;
    }, r = () => {
      o.value = window.innerWidth;
    };
    return hV(() => {
      window.addEventListener("resize", r);
    }), fV(() => {
      window.removeEventListener("resize", r);
    }), (l, c) => (Is(), Rs("div", iV, [
      Io("div", rV, [
        Nm(Si(Um), {
          icon: Si(ed),
          class: "cx-featured-collection-banner__icon me-3 mt-1"
        }, null, 8, ["icon"]),
        Io("div", lV, [
          Io("h5", cV, Uo(l.$i18n("cx-featured-collection-banner-title")), 1),
          e.communityName ? (Is(), Rs("span", uV, Uo(e.communityName), 1)) : yi("", !0)
        ])
      ]),
      Io("div", dV, [
        Io("div", {
          ref_key: "descriptionRef",
          ref: n,
          class: aV(["cx-featured-collection-banner__description", {
            "cx-featured-collection-banner__description--expanded": t.value
          }])
        }, [
          Mm(Uo(e.description || l.$i18n("cx-featured-collection-banner-description")) + " ", 1),
          t.value ? (Is(), Rs("button", {
            key: 0,
            class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--inline",
            onClick: a
          }, Uo(l.$i18n("cx-featured-collection-banner-toggle-less")), 1)) : yi("", !0)
        ], 2),
        !t.value && s.value ? (Is(), Rs("button", {
          key: 0,
          class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--external mb-1 ml-1",
          onClick: a
        }, Uo(l.$i18n("cx-featured-collection-banner-toggle-more")), 1)) : yi("", !0)
      ]),
      Io("div", gV, [
        (t.value || !s.value) && e.learnMoreUrl ? (Is(), Rs("a", {
          key: 0,
          href: e.learnMoreUrl,
          class: "cx-featured-collection-banner__learn-more",
          target: "_blank"
        }, [
          Mm(Uo(l.$i18n("cx-featured-collection-banner-learn-more")) + " ", 1),
          Nm(Si(Um), {
            icon: Si(Pa),
            size: "small",
            class: "cx-featured-collection-banner__learn-more-icon"
          }, null, 8, ["icon"])
        ], 8, mV)) : yi("", !0)
      ])
    ]));
  }
};
const Im = window.Vue.normalizeClass, vV = window.Vue.resolveDirective, zs = window.Vue.createElementVNode, Ci = window.Vue.withDirectives, pe = window.Vue.unref, Ye = window.Vue.openBlock, Nt = window.Vue.createBlock, vn = window.Vue.createCommentVNode, Kl = window.Vue.createVNode, Os = window.Vue.withCtx, Rm = window.Vue.renderList, zm = window.Vue.Fragment, Yl = window.Vue.createElementBlock, _V = window.Vue.toDisplayString, SV = window.Vue.createTextVNode, yV = window.Vue.vShow, CV = { class: "cx-suggestion-list" }, xV = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, bV = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, kV = { class: "cx-suggestion-list__refresh-button-container justify-center" }, _t = window.Vue.computed, $V = window.Vue.inject, VV = window.Vue.ref, EV = window.Codex.CdxButton, LV = window.Codex.CdxIcon, TV = window.Vuex.useStore, AV = {
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
    } = D(), { supportedLanguageCodes: s } = Da(), a = ow(), r = (j) => a(j, n.value), l = (j) => a(t.value, j), c = sV(), { featuredCollection: u } = Wt(), { findSelectedFilter: i } = ro(), d = _t(() => i()), g = Ma(), m = (j) => {
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
      pageSuggestionsLoading: y,
      sectionSuggestionsLoading: C,
      isCurrentPageSuggestionsSliceFull: _,
      isCurrentSectionSuggestionsSliceFull: k
    } = K$(), E = VV(null), M = Lt(), L = () => {
      M({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), v(), E.value && E.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: V, markFavoritePageSuggestion: B } = cd(), X = $V("breakpoints"), se = _t(() => X.value.mobile), ee = _t(
      () => se.value ? null : "pb-2 flex justify-between items-center"
    ), ne = TV(), F = _t(
      () => ne.state.suggestions.isPageSuggestionsFetchPending
    ), z = _t(
      () => ne.state.suggestions.isSectionSuggestionsFetchPending
    ), K = _t(
      () => F.value || y.value && !_.value
    ), J = _t(
      () => z.value || C.value && !k.value
    ), $e = _t(
      () => F.value || y.value || p.value.length > 0
    ), xe = _t(
      () => z.value || C.value || h.value.length > 0
    ), _e = _t(
      () => !$e.value && !xe.value
    ), Oe = _t(
      () => !C.value && !y.value && !F.value && !z.value && !_e.value
    ), O = _t(
      () => {
        var j;
        return u.value && ((j = d.value) == null ? void 0 : j.id) === u.value.name;
      }
    );
    return (j, ce) => {
      const S = vV("i18n");
      return Ci((Ye(), Yl("div", CV, [
        Kl(pe(Je), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: Os(() => [
            zs("div", {
              class: Im(["cx-suggestion-list__header-card__header px-4", ee.value])
            }, [
              Ci(zs("h3", {
                class: Im(["mw-ui-card__title mb-0", { "py-3": se.value }])
              }, null, 2), [
                [S, void 0, "cx-suggestionlist-title"]
              ]),
              se.value ? vn("", !0) : (Ye(), Nt(yr, {
                key: 0,
                "source-languages": pe(s),
                "target-languages": pe(s),
                "selected-source-language": pe(t),
                "selected-target-language": pe(n),
                "onUpdate:selectedSourceLanguage": r,
                "onUpdate:selectedTargetLanguage": l
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Kl(W$)
          ]),
          default: Os(() => [
            se.value ? (Ye(), Nt(yr, {
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
          default: Os(() => [
            Ci(zs("h5", xV, null, 512), [
              [S, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Ye(!0), Yl(zm, null, Rm(pe(h), (A, T) => (Ye(), Nt(Nu, {
              key: `section-suggestion-${T}`,
              class: "ma-0",
              suggestion: A,
              onClose: (N) => pe(w)(A),
              onClick: (N) => m(A),
              onBookmark: (N) => pe(V)(A)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            J.value ? (Ye(), Nt(pe(gt), { key: 0 })) : vn("", !0)
          ]),
          _: 1
        })) : vn("", !0),
        $e.value ? (Ye(), Nt(pe(Je), {
          key: 2,
          ref_key: "pageSuggestionsList",
          ref: E,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: Os(() => [
            Ci(zs("h5", bV, null, 512), [
              [S, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Ye(!0), Yl(zm, null, Rm(pe(p), (A, T) => (Ye(), Nt(Nu, {
              key: `page-suggestion-${T}`,
              suggestion: A,
              onClose: (N) => pe(f)(A),
              onClick: (N) => m(A),
              onBookmark: (N) => pe(B)(A)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            K.value ? (Ye(), Nt(pe(gt), { key: 0 })) : vn("", !0)
          ]),
          _: 1
        }, 512)) : vn("", !0),
        _e.value ? (Ye(), Nt(Hw, {
          key: 3,
          title: j.$i18n("cx-sx-suggestion-list-empty-title"),
          description: j.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : vn("", !0),
        zs("div", kV, [
          Oe.value ? (Ye(), Nt(pe(EV), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: L
          }, {
            default: Os(() => [
              Kl(pe(LV), {
                class: "me-1",
                icon: pe(Jf)
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
}, DV = window.Vue.resolveDirective, PV = window.Vue.createElementVNode, BV = window.Vue.withDirectives, FV = window.Vue.renderList, NV = window.Vue.Fragment, Ql = window.Vue.openBlock, MV = window.Vue.createElementBlock, Om = window.Vue.unref, jm = window.Vue.createBlock, Hm = window.Vue.withCtx, UV = window.Vue.createCommentVNode, IV = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, RV = window.Vue.computed, zV = window.Vuex.useStore, OV = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = zV(), n = RV(() => t.state.suggestions.favorites || []), o = Ma(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = cd();
    return (r, l) => {
      const c = DV("i18n");
      return n.value.length ? (Ql(), jm(Om(Je), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Hm(() => [
          BV(PV("h3", IV, null, 512), [
            [c, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Hm(() => [
          (Ql(!0), MV(NV, null, FV(n.value, (u, i) => (Ql(), jm(Nu, {
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
const jV = window.Vue.resolveDirective, js = window.Vue.createElementVNode, HV = window.Vue.withDirectives, qV = window.Vue.renderList, GV = window.Vue.Fragment, qm = window.Vue.openBlock, Gm = window.Vue.createElementBlock, WV = window.Vue.unref, XV = window.Vue.createVNode, KV = window.Vue.toDisplayString, YV = { class: "cx-help-panel pa-4" }, QV = { class: "cx-help-panel__item-list mt-6 ps-2" }, JV = ["href", "target"], ZV = ["textContent"], eE = window.Codex.CdxIcon, tE = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = fe(), n = [
      {
        icon: CC,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: vC,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = jV("i18n");
      return qm(), Gm("div", YV, [
        HV(js("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        js("ul", QV, [
          (qm(), Gm(GV, null, qV(n, (r, l) => js("li", {
            key: l,
            class: "mt-4"
          }, [
            js("a", {
              href: r.href,
              target: r.target
            }, [
              XV(WV(eE), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              js("span", {
                textContent: KV(r.label)
              }, null, 8, ZV)
            ], 8, JV)
          ])), 64))
        ])
      ]);
    };
  }
};
const nE = window.Vue.resolveDirective, zn = window.Vue.createElementVNode, Jl = window.Vue.withDirectives, Zl = window.Vue.toDisplayString, xi = window.Vue.unref, ec = window.Vue.withCtx, bi = window.Vue.createVNode, oE = window.Vue.openBlock, sE = window.Vue.createElementBlock, aE = { class: "cx-stats-panel pa-4" }, iE = ["textContent"], rE = { class: "cx-stats-panel__monthly-stats-label" }, lE = ["textContent"], cE = { class: "cx-stats-panel__total-stats-label" }, uE = ["href", "target"], dE = ["textContent"], gE = window.Codex.CdxIcon, mE = window.Vue.ref, Wm = window.Vue.computed, pE = window.Vue.watch, hE = {
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
      icon: Yf,
      label: t.i18n("cx-sx-dashboard-stats-panel-all-stats-label"),
      href: "https://superset.wmcloud.org/superset/dashboard/p/X61GbQpZ5Rb/",
      target: "_blank"
    };
    return pE(
      () => n.stats,
      () => {
        const c = n.stats, u = r.value.getContext("2d"), i = Object.keys(n.stats || {}).sort(), d = i.reduce(
          (L, V) => Math.max(L, c[V].delta),
          0
        ), g = i.map((L) => c[L].delta), m = r.value.getBoundingClientRect().width, p = r.value.getBoundingClientRect().height;
        r.value.width = m, r.value.height = p;
        const h = 4, f = 6, w = 50, v = (w - h) / d;
        let y = h;
        const C = Math.floor(
          (m - h) / (f + h)
        ), _ = g.slice(
          Math.max(g.length - C, 0)
        ), k = getComputedStyle(document.documentElement), E = k.getPropertyValue("--color-base").trim() || "#202122", M = k.getPropertyValue("--color-progressive").trim() || "#36c";
        u.fillStyle = E, _.forEach((L, V) => {
          V === _.length - 1 && (u.fillStyle = M);
          const B = w - L * v;
          u.fillRect(y, B, f, L * v), y += f + h;
        });
      }
    ), (c, u) => {
      const i = nE("i18n");
      return oE(), sE("div", aE, [
        Jl(zn("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        bi(xi(R), null, {
          default: ec(() => [
            bi(xi(b), { class: "cx-stats-panel__monthly-stats" }, {
              default: ec(() => [
                zn("h3", {
                  textContent: Zl(a.value)
                }, null, 8, iE),
                Jl(zn("h5", rE, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            bi(xi(b), { class: "cx-stats-panel__total-stats" }, {
              default: ec(() => [
                zn("h3", {
                  textContent: Zl(s.value)
                }, null, 8, lE),
                Jl(zn("h5", cE, null, 512), [
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
          bi(xi(gE), {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          zn("span", {
            textContent: Zl(l.label)
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
          vE(wE(La), {
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
  const e = kE(), t = io(), { addFeaturedCollectionFlag: n } = Fr();
  return () => x(void 0, null, function* () {
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
  } = D(), { isDefaultFilter: r } = Ru(), { previousRoute: l } = pt(e), c = Lt(), u = () => {
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
  } = D(), { getLoadedSuggestion: s } = Ba(), a = Xm(
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
  } = D();
  return { currentTranslation: LE(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, tc = window.Vue.computed, TE = window.Vuex.useStore, nt = () => {
  const e = TE(), { sectionSuggestion: t } = Le(), { currentTranslation: n } = Xt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = D(), r = tc(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = tc(
    () => {
      var u, i;
      return ((u = t.value) == null ? void 0 : u.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    }
  ), c = tc(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: r, currentTargetPage: c, currentTargetPageTitle: l };
}, ki = window.Vue.computed, AE = window.Vuex.useStore, ae = () => {
  const e = AE(), { currentSourcePage: t } = nt(), { currentMTProvider: n } = pt(e), { sectionURLParameter: o } = D(), s = ki(() => {
    var c, u;
    return o.value ? (u = t.value) == null ? void 0 : u.getSectionByTitle(o.value) : (c = t.value) == null ? void 0 : c.leadSection;
  }), a = ki(
    () => {
      var c;
      return (c = s.value) == null ? void 0 : c.isTitleSelected;
    }
  ), r = ki(
    () => {
      var c;
      return (c = s.value) == null ? void 0 : c.selectedContentTranslationUnit;
    }
  ), l = ki(
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
}, nc = window.Vue.computed, ht = () => {
  const { sectionURLParameter: e } = D(), { targetPageExists: t } = cn(), { sourceSection: n } = ae(), { sectionSuggestion: o } = Le(), s = nc(
    () => {
      var l;
      return t.value && !!((l = n.value) != null && l.isLeadSection);
    }
  ), a = nc(
    () => {
      var l;
      return !!((l = n.value) != null && l.isLeadSection) && !t.value;
    }
  );
  return {
    isCurrentSectionPresent: nc(
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
}, DE = window.Vue.ref, $i = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, oc = DE(null), Tt = () => {
  const { isCurrentSectionPresent: e } = ht(), t = () => {
    e.value ? o($i.EXPAND) : o($i.NEW_SECTION);
  }, n = () => {
    oc.value = null;
  }, o = (s) => {
    if (!Object.values($i).includes(s))
      throw new Error("[CX] Invalid publishing target used");
    oc.value = s;
  };
  return {
    target: oc,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: o,
    PUBLISHING_TARGETS: $i
  };
}, PE = window.Vue.watch, BE = () => {
  const { fetchAllTranslations: e } = hs(), t = tw(), n = $E(), { fetchPageCollectionGroups: o } = Dr(), { logDashboardOpenEvent: s } = Xw(), { applicationLanguagesInitialized: a } = sw(), { clearPublishTarget: r } = Tt();
  return () => x(void 0, null, function* () {
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
  const e = UE(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = D(), { translationsFetched: o } = hs(), s = FE(null);
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
        icon: xr,
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
const ke = window.Vue.unref, Me = window.Vue.createVNode, jE = window.Vue.toDisplayString, HE = window.Vue.createTextVNode, _n = window.Vue.withCtx, sc = window.Vue.openBlock, Ym = window.Vue.createBlock, Qm = window.Vue.createCommentVNode, qE = window.Vue.vShow, GE = window.Vue.withDirectives, WE = window.Vue.isRef, XE = window.Vue.createElementBlock, Jm = window.Vue.computed, KE = window.Vue.inject, YE = window.Vuex.useStore, QE = window.Codex.CdxButton, JE = window.Codex.CdxIcon, ZE = {
  __name: "CXDashboard",
  setup(e) {
    const t = tt(), n = Lt(), o = () => {
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
    return mw.cx.eventlogging.stats.dashboardAccess(g.value), (m, p) => (sc(), XE("div", null, [
      Me(ke(R), { class: "ma-0 pb-4" }, {
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
                icon: ke(qf)
              }, null, 8, ["icon"]),
              HE(" " + jE(m.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Me(ke(R), {
        class: "ma-0",
        align: "start"
      }, {
        default: _n(() => [
          m.$mwui.breakpoint.tabletAndUp ? (sc(), Ym(ke(b), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: _n(() => [
              Me(ke(La), {
                id: "dashboard-list-selector--desktop",
                items: ke(c),
                active: ke(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Qm("", !0),
          Me(ke(b), {
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
          Me(ke(b), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: _n(() => [
              Me(ke(R), {
                class: "ma-0",
                align: "start"
              }, {
                default: _n(() => [
                  Me(ke(b), {
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
                  Me(ke(b), {
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
      m.$mwui.breakpoint.mobile ? (sc(), Ym(bE, {
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
const Zm = /* @__PURE__ */ he(e4, [["render", i4]]), Ro = window.Vue.computed, r4 = () => {
  const { sectionSuggestion: e } = Le(), { targetLanguageURLParameter: t } = D(), { currentTranslation: n } = Xt(), o = Ro(
    () => {
      var g, m, p;
      return (p = (m = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : m[0]) == null ? void 0 : p.sourceTitle;
    }
  ), s = Ro(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = Ro(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = cn(), c = Ro(() => r.value ? Q.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), u = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value >= 1 ? "cx-sx-select-section" : a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : a.value > 0 ? "cx-sx-select-section" : "" : "cx-sx-start-translation-button-label", i = Ro(() => {
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
  }), d = Ro(
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
  return x(this, null, function* () {
    yield ud(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
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
    return g4(() => x(this, null, function* () {
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
}, Vi = window.Vue.createElementVNode, f4 = window.Vue.openBlock, w4 = window.Vue.createElementBlock, v4 = ["lang", "dir"], _4 = ["lang", "dir"];
function S4(e, t, n, o, s, a) {
  return f4(), w4("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    t[0] || (t[0] = Vi("div", { class: "overlay-header-container" }, [
      Vi("div", { class: "overlay-header header initial-header" }, [
        Vi("div", { class: "toolbar" })
      ])
    ], -1)),
    Vi("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, _4)
  ], 8, v4);
}
const y4 = /* @__PURE__ */ he(h4, [["render", S4]]);
function ud() {
  return mw.loader.using("mw.cx3.ve");
}
const C4 = window.Vuex.useStore, x4 = () => {
  const e = C4();
  return (t, n) => x(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield ud(), new Promise((s) => {
      setTimeout(() => {
        const a = Df.convertSegmentedContentToPageSections(
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
  return (t, n, o, s = null) => x(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield ds.fetchPageContent(
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
}, Rr = () => {
  const { currentSourcePage: e } = nt(), t = x4(), n = Kw(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = D(), c = (d, g) => x(void 0, null, function* () {
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
}, k4 = window.Vuex.useStore, fs = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = D(), { sectionSuggestion: a, activeSectionTargetTitle: r } = Le(), { target: l } = Tt(), c = k4(), u = tt(), i = () => {
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
}, ep = window.Vue.computed, $4 = window.Vue.ref, V4 = window.Vue.watchEffect, ac = /* @__PURE__ */ new Map(), E4 = (e, t) => x(void 0, null, function* () {
  return (yield ge.fetchArticleSections(
    e,
    t
  )).sections.filter(
    (s) => s.level === "2"
  )[0].byteoffset;
}), L4 = (e, t) => {
  const n = `${e}:${t}`;
  if (ac.has(n))
    return ac.get(n);
  const o = E4(e, t);
  return ac.set(n, o), o;
}, Yw = () => {
  const { currentSourcePage: e } = nt(), { sectionSuggestion: t } = Le(), { sectionURLParameter: n } = D(), o = $4(null);
  V4(() => x(void 0, null, function* () {
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
  const s = ep(() => o.value ? !t.value && qt ? If(o.value) : Gu(o.value) : We.unknown);
  return { isQuickTranslation: ep(() => s.value === We.stub || s.value === We.easy), difficulty: s, sizeInBytes: o };
}, dd = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = D(), s = Lt(), { difficulty: a } = Yw();
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
      return Fu.value && (l.event_context = Fu.value), o.value ? (l.translation_source_section = o.value, l.translation_type = "section") : l.translation_type = "article", s(l);
    }
  };
}, gd = () => {
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
  const e = tt(), { logDashboardTranslationStartEvent: t } = dd(), n = gd(), o = fs(), { sectionURLParameter: s } = D(), { targetPageExists: a } = cn(), { selectPageSectionByTitle: r } = Rr(), l = () => x(void 0, null, function* () {
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
  } = D(), { loadSuggestion: s } = Ba();
  return () => x(void 0, null, function* () {
    const a = yield s(
      t.value,
      n.value,
      o.value
    );
    return a instanceof on ? a.sourceSections.includes(e.value) : !1;
  });
};
const ye = window.Vue.unref, z4 = window.Vue.resolveDirective, Hs = window.Vue.createElementVNode, op = window.Vue.withDirectives, qs = window.Vue.openBlock, ic = window.Vue.createElementBlock, rc = window.Vue.createCommentVNode, St = window.Vue.createVNode, Mt = window.Vue.withCtx, lc = window.Vue.toDisplayString, cc = window.Vue.createTextVNode, O4 = window.Vue.withModifiers, sp = window.Vue.createBlock, j4 = window.Vue.Fragment, H4 = { class: "sx-translation-confirmer-body pb-4" }, q4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, G4 = ["innerHTML"], W4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, X4 = ["href"], K4 = ["innerHTML"], Ei = window.Vue.computed, uc = window.Vue.ref, Y4 = window.Vue.watchEffect, dc = window.Codex.CdxButton, Q4 = window.Codex.CdxIcon, J4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = tt(), { sectionSuggestion: o } = Le(), { targetLanguageURLParameter: s } = D(), a = Ei(() => q.getAutonym(s.value)), { sectionURLParameter: r, clearSectionURLParameter: l } = D(), { logDashboardTranslationStartEvent: c } = dd(), u = fs(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: d } = A4(), g = uc(!1), m = uc(null), p = () => x(this, null, function* () {
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
    }), h = () => x(this, null, function* () {
      yield p(), !g.value && (c(), u());
    }), f = () => x(this, null, function* () {
      yield p(), !g.value && i();
    }), w = t;
    Y4(() => {
      d.value && (w("open-translation-confirmation-dialog"), d.value = !1);
    });
    const {
      actionInformationMessage: v,
      getActionButtonLabel: y,
      isProgressiveButton: C,
      targetArticlePath: _
    } = r4(), k = fe(), E = Ei(
      () => k.i18n(y(!!r.value))
    ), M = () => x(this, null, function* () {
      yield p(), !g.value && n.push({ name: "sx-section-selector" });
    }), L = Ei(() => {
      var ee, ne;
      return r.value && !!((ne = (ee = o.value) == null ? void 0 : ee.sourceSections) != null && ne.length);
    }), { targetPageExists: V } = cn(), B = Ei(() => !r.value && V.value && qt), X = R4(), se = uc(!1);
    return X().then((ee) => {
      ee || l(), se.value = !0;
    }), (ee, ne) => {
      const F = z4("i18n");
      return qs(), ic(j4, null, [
        Hs("section", H4, [
          ye(r) && se.value ? (qs(), ic("section", q4, [
            op(Hs("h6", null, null, 512), [
              [F, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Hs("h5", {
              class: "ma-0",
              innerHTML: ye(r)
            }, null, 8, G4)
          ])) : ye(V) && !ye(r) ? (qs(), ic("section", W4, [
            St(ye(R), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Mt(() => [
                op(St(ye(b), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [F, [a.value], "cx-sx-existing-translation-status"]
                ]),
                St(ye(b), { shrink: "" }, {
                  default: Mt(() => [
                    Hs("a", {
                      href: ye(_),
                      target: "_blank"
                    }, [
                      St(ye(Q4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: ye(Pa)
                      }, null, 8, ["icon"])
                    ], 8, X4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            St(ye(R), { class: "ma-0" }, {
              default: Mt(() => [
                St(ye(b), null, {
                  default: Mt(() => [
                    Hs("span", { innerHTML: ye(v) }, null, 8, K4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : rc("", !0),
          St(ye(R), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Mt(() => [
              L.value ? (qs(), sp(ye(b), {
                key: 0,
                shrink: ""
              }, {
                default: Mt(() => [
                  St(ye(dc), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: O4(M, ["stop"])
                  }, {
                    default: Mt(() => [
                      cc(lc(ee.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : rc("", !0),
              B.value ? (qs(), sp(ye(b), {
                key: 1,
                shrink: ""
              }, {
                default: Mt(() => [
                  St(ye(dc), {
                    size: "large",
                    onClick: h
                  }, {
                    default: Mt(() => [
                      cc(lc(ee.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : rc("", !0),
              St(ye(b), { shrink: "" }, {
                default: Mt(() => [
                  St(ye(dc), {
                    weight: "primary",
                    size: "large",
                    action: ye(C) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: Mt(() => [
                      cc(lc(E.value), 1)
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
const Li = window.Vue.unref, Z4 = window.Vue.openBlock, eL = window.Vue.createBlock, tL = window.Vue.computed, Qw = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t } = Da(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = D(), { currentLanguageTitleGroup: s } = cn(), a = tL(
      () => {
        var u;
        return ((u = s.value) == null ? void 0 : u.titles.map((i) => i.lang)) || [];
      }
    ), r = GC(), l = (u) => r(u, o.value), c = (u) => r(n.value, u);
    return (u, i) => (Z4(), eL(yr, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": Li(t),
      "selected-source-language": Li(n),
      "selected-target-language": Li(o),
      disabled: !Li(s),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": c
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language", "disabled"]));
  }
}, nL = (e) => {
  const s = e / 5 / 15;
  return Math.ceil(s);
};
const Be = window.Vue.unref, gc = window.Vue.toDisplayString, On = window.Vue.createElementVNode, Qt = window.Vue.createVNode, zo = window.Vue.withCtx, oL = window.Vue.resolveDirective, sL = window.Vue.withDirectives, aL = window.Vue.normalizeClass, ap = window.Vue.openBlock, iL = window.Vue.createElementBlock, rL = window.Vue.createCommentVNode, lL = window.Vue.createBlock, cL = ["textContent"], uL = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, dL = ["textContent"], gL = { class: "pe-3" }, mL = ["textContent"], pL = window.Codex.CdxButton, Gs = window.Codex.CdxIcon, jn = window.Vue.computed, hL = window.Vuex.useStore, fL = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = hL(), { currentSourcePage: n } = nt(), { sectionSuggestion: o } = Le(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l
    } = D(), c = jn(() => t.state.suggestions.favorites || []), u = jn(
      () => c.value.some(
        (M) => r.value === M.title && s.value === M.sourceLanguage && a.value === M.targetLanguage
      )
    ), { markFavoriteSuggestion: i, removeFavoriteSuggestion: d } = cd(), g = () => i(
      r.value,
      s.value,
      a.value
    ), m = () => d(
      new is({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), p = jn(
      () => u.value ? Xf : Kf
    ), h = jn(
      () => u.value ? m : g
    ), f = jn(
      () => Q.getPageUrl(s.value || "", r.value || "")
    ), w = jn(
      () => {
        var M;
        return mw.language.convertNumber((((M = n.value) == null ? void 0 : M.langLinksCount) || 0) + 1);
      }
    ), v = (M) => {
      const L = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let V = 0; V < L.length; V++)
        if (M >= L[V].value)
          return mw.language.convertNumber(
            Number((M / L[V].value).toFixed(1).replace(/\.0$/, ""))
          ) + L[V].suffix;
      return mw.language.convertNumber(M);
    }, y = jn(() => {
      var L;
      const M = Object.values(((L = n.value) == null ? void 0 : L.pageviews) || {}).reduce(
        (V, B) => V + B,
        0
      );
      return v(M);
    }), { isQuickTranslation: C, sizeInBytes: _ } = Yw(), k = fe(), E = jn(() => {
      if (!o.value && !n.value || !_.value)
        return "";
      const M = nL(_.value), L = M >= 60 ? M / 60 : 0, V = Math.round(L * 2) / 2, B = mw.language.convertNumber(V), X = mw.language.convertNumber(M);
      if (!o.value && qt)
        return k.i18n(
          "cx-sx-translation-confirmer-translation-time-whole-article",
          B,
          X
        );
      if (o.value) {
        if (l.value)
          return k.i18n(
            "cx-sx-translation-confirmer-translation-time-single-section",
            B,
            X
          );
      } else
        return k.i18n(
          "cx-sx-translation-confirmer-translation-time-lead-section",
          B,
          X
        );
      const se = Object.keys(o.value.missingSections).length;
      return k.i18n(
        "cx-sx-translation-confirmer-translation-time-sections",
        B,
        X,
        mw.language.convertNumber(se)
      );
    });
    return (M, L) => {
      const V = oL("i18n");
      return ap(), lL(Be(R), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: zo(() => [
          Qt(Be(b), null, {
            default: zo(() => [
              Qt(Be(R), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: zo(() => [
                  Qt(Be(b), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: zo(() => [
                      On("h5", {
                        class: "ma-0 me-1",
                        textContent: gc(Be(r))
                      }, null, 8, cL),
                      Qt(Be(Gs), {
                        size: "x-small",
                        icon: Be(Pa)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Qt(Be(b), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: zo(() => [
                      Qt(Be(pL), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": M.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: zo(() => [
                          Qt(Be(Gs), { icon: p.value }, null, 8, ["icon"])
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
                    Qt(Be(Gs), {
                      icon: Be(Qf),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    On("span", {
                      class: "pe-3",
                      textContent: gc(w.value)
                    }, null, 8, dL)
                  ]),
                  On("span", null, [
                    Qt(Be(Gs), {
                      icon: Be(Yf),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    sL(On("span", gL, null, 512), [
                      [V, [y.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                E.value ? (ap(), iL("span", {
                  key: 0,
                  class: aL(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Be(C)
                  }])
                }, [
                  Qt(Be(Gs), {
                    icon: Be(hC),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  On("span", {
                    textContent: gc(E.value)
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
const wL = window.Vue.resolveDirective, wo = window.Vue.createElementVNode, Ti = window.Vue.withDirectives, vL = window.Vue.toDisplayString, _L = window.Vue.createTextVNode, mc = window.Vue.unref, pc = window.Vue.withCtx, hc = window.Vue.openBlock, fc = window.Vue.createBlock;
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
    const n = t, o = () => n("update:modelValue", !1), s = fs(), a = gd(), r = xL(!1), { currentTranslation: l } = Xt(), c = () => x(this, null, function* () {
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
      return hc(), fc(mc(Vt), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: pc(() => [
          wo("div", yL, [
            r.value ? (hc(), fc(mc(gt), { key: 1 })) : (hc(), fc(mc(CL), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: pc(() => [
                _L(vL(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: pc(() => [
          wo("div", SL, [
            Ti(wo("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Ti(wo("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            wo("p", null, [
              Ti(wo("strong", null, null, 512), [
                [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Ti(wo("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
};
const ip = window.Vue.unref, kL = window.Vue.createVNode, rp = window.Vue.toDisplayString, Ai = window.Vue.createElementVNode, $L = window.Vue.openBlock, VL = window.Vue.createElementBlock, EL = { class: "cx-translation-confirmer-featured-collection-banner ma-4 px-4 py-3" }, LL = { class: "cx-translation-confirmer-featured-collection-banner__header" }, TL = { class: "cx-translation-confirmer-featured-collection-banner__header-text" }, AL = { class: "cx-translation-confirmer-featured-collection-banner__body" }, DL = window.Vue.computed, PL = window.Codex.CdxIcon, BL = {
  __name: "SXTranslationConfirmerFeaturedCollectionBanner",
  setup(e) {
    const { featuredCollection: t } = Wt(), n = DL(() => {
      var o;
      return (o = t.value) == null ? void 0 : o.name;
    });
    return (o, s) => ($L(), VL("div", EL, [
      Ai("div", LL, [
        kL(ip(PL), {
          icon: ip(ed),
          size: "small",
          class: "cx-translation-confirmer-featured-collection-banner__header-icon me-2"
        }, null, 8, ["icon"]),
        Ai("span", TL, rp(o.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      Ai("div", AL, [
        Ai("p", null, rp(n.value), 1)
      ])
    ]));
  }
}, FL = window.Vuex.useStore, Ws = {}, Jw = () => {
  const e = FL();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) ? Promise.resolve() : (Ws[o] || (Ws[o] = ds.fetchLanguageTitles(t, n).then((s) => {
      delete Ws[o], s && e.commit("mediawiki/addLanguageTitleGroup", s);
    })), Ws[o]);
  };
}, NL = window.Vue.ref, Oo = NL(null), Zw = () => {
  const e = () => x(void 0, null, function* () {
    var n, o;
    Oo.value || (yield Tr.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, Oo.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        Oo.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = Oo.value) == null ? void 0 : n.refreshAt) <= t ? (Oo.value = null, e()) : (o = Oo.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const lp = window.Vue.resolveDirective, Di = window.Vue.createElementVNode, cp = window.Vue.withDirectives, Hn = window.Vue.unref, Pi = window.Vue.withCtx, Sn = window.Vue.createVNode, Bi = window.Vue.openBlock, up = window.Vue.createElementBlock, ML = window.Vue.createCommentVNode, dp = window.Vue.createBlock, UL = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, IL = { class: "mb-0" }, RL = { class: "sx-translation-confirmer__article-image flex justify-center" }, zL = ["src"], OL = { class: "ma-3" }, gp = window.Vue.computed, jL = window.Vue.inject, HL = window.Vue.onBeforeUnmount, mp = window.Vue.ref, qL = window.Vue.watch, GL = window.Vuex.useStore, WL = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = GL(), { currentSourcePage: n } = nt(), { previousRoute: o } = pt(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      clearTranslationURLParameters: l
    } = D(), { inFeaturedCollection: c } = td(), u = jL("breakpoints"), i = gp(() => u.value.nextBreakpoint), d = gp(
      () => {
        var C;
        return (C = n.value) == null ? void 0 : C.getImage(i.value);
      }
    ), g = mp(!1);
    qL(
      () => {
        var C;
        return (C = n.value) == null ? void 0 : C.wikidataId;
      },
      (C) => x(this, null, function* () {
        const _ = yield c([C]);
        g.value = _[C];
      }),
      { immediate: !0 }
    );
    const { fetchTranslationsByStatus: m } = hs(), p = Jw();
    m("draft"), p(s.value, r.value), ud(), Zw()(), ew()(a.value);
    const w = tt(), v = () => {
      const C = ["dashboard", "sx-article-search"];
      !o.value || !C.includes(o.value) ? w.push({ name: "dashboard" }) : w.push({ name: o.value });
    };
    HL(() => {
      const C = w.currentRoute.value.name;
      (C === "dashboard" || C === "sx-article-search") && l();
    });
    const y = mp(!1);
    return (C, _) => {
      const k = lp("i18n"), E = lp("i18n-html");
      return Bi(), up("section", UL, [
        Sn(Hn(R), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Pi(() => [
            Sn(Hn(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Pi(() => [
                cp(Di("h5", IL, null, 512), [
                  [k, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Sn(Hn(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Pi(() => [
                Sn(Hn(Xe), {
                  class: "pa-0",
                  type: "icon",
                  icon: Hn(br),
                  "icon-size": 20,
                  onClick: v
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Di("div", RL, [
          d.value ? (Bi(), up("img", {
            key: 0,
            src: d.value
          }, null, 8, zL)) : (Bi(), dp(Hn(Ze), {
            key: 1,
            size: "120",
            icon: Hn(_f),
            "icon-color": C.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Sn(fL),
        g.value ? (Bi(), dp(BL, { key: 0 })) : ML("", !0),
        Sn(Qw),
        Sn(J4, {
          onOpenTranslationConfirmationDialog: _[0] || (_[0] = (M) => y.value = !0)
        }),
        Sn(Hn(R), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Pi(() => [
            Di("p", OL, [
              cp(Di("small", null, null, 512), [
                [E, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Sn(bL, {
          modelValue: y.value,
          "onUpdate:modelValue": _[1] || (_[1] = (M) => y.value = M)
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
          icon: pp(Pa)
        }, null, 8, ["icon"])
      ], 8, c3)
    ]));
  }
};
const d3 = window.Vue.resolveDirective, Fi = window.Vue.createElementVNode, wc = window.Vue.withDirectives, vo = window.Vue.unref, g3 = window.Vue.toDisplayString, Ni = window.Vue.withCtx, Xs = window.Vue.createVNode, m3 = window.Vue.openBlock, p3 = window.Vue.createElementBlock, h3 = { class: "sx-section-selector__header pa-4" }, f3 = { class: "sx-section-selector__header-text ma-0" }, w3 = ["textContent"], v3 = { class: "pt-0 ma-0" }, _3 = { class: "ma-0" }, S3 = window.Codex.CdxButton, y3 = window.Codex.CdxIcon, C3 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Le();
    return (n, o) => {
      const s = d3("i18n");
      return m3(), p3("div", h3, [
        Xs(vo(R), { class: "ma-0 pb-3" }, {
          default: Ni(() => [
            Xs(vo(b), null, {
              default: Ni(() => {
                var a;
                return [
                  wc(Fi("h6", f3, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Fi("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: g3((a = vo(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, w3)
                ];
              }),
              _: 1
            }),
            Xs(vo(b), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Ni(() => [
                Xs(vo(S3), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Ni(() => [
                    Xs(vo(y3), { icon: vo(ms) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        wc(Fi("h4", v3, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        wc(Fi("p", _3, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, fp = window.Vue.renderSlot, x3 = window.Vue.renderList, b3 = window.Vue.Fragment, vc = window.Vue.openBlock, wp = window.Vue.createElementBlock, Mi = window.Vue.unref, vp = window.Vue.createVNode, _p = window.Vue.withCtx, k3 = window.Vue.createBlock, $3 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, V3 = window.Codex.CdxButton, E3 = window.Codex.CdxIcon, ev = {
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
    return (t, n) => (vc(), wp("ul", $3, [
      fp(t.$slots, "before-list"),
      (vc(!0), wp(b3, null, x3(e.sections, (o) => (vc(), k3(Mi(R), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: _p(() => [
          vp(Mi(V3), {
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
              vp(Mi(E3), {
                icon: Mi(ps),
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
const T3 = window.Vue.resolveDirective, Ui = window.Vue.createElementVNode, Ii = window.Vue.withDirectives, Ut = window.Vue.unref, Ri = window.Vue.openBlock, _c = window.Vue.createBlock, A3 = window.Vue.createCommentVNode, jo = window.Vue.withCtx, Ks = window.Vue.createVNode, D3 = window.Vue.toDisplayString, P3 = window.Vue.createTextVNode, B3 = window.Vue.createElementBlock, F3 = { class: "sx-section-selector__missing-sections py-2" }, N3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, M3 = ["lang", "dir", "innerHTML"], Sc = window.Vue.computed, U3 = window.Codex.CdxButton, I3 = window.Codex.CdxInfoChip, R3 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Le(), { targetLanguageURLParameter: n } = D(), o = Sc(() => q.getAutonym(n.value)), s = Sc(
      () => {
        var r;
        return Object.keys(((r = t.value) == null ? void 0 : r.missingSections) || {}).length === 0;
      }
    ), a = Sc(() => {
      var r;
      return (r = t.value) != null && r.orderedMissingSections ? t.value.orderedMissingSections.map((l) => Ke(me({}, l), {
        isEasy: Rf(
          t.value.getSectionSize(l.sourceTitle)
        )
      })) : [];
    });
    return (r, l) => {
      const c = T3("i18n");
      return Ri(), B3("section", F3, [
        Ii(Ui("h4", N3, null, 512), [
          [c, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (Ri(), _c(Ut(R), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: jo(() => [
            Ks(Ut(b), {
              class: "py-6 justify-center",
              innerHTML: Ut(L3)
            }, null, 8, ["innerHTML"]),
            Ks(Ut(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: jo(() => [
                Ii(Ui("h6", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Ks(Ut(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: jo(() => [
                Ii(Ui("p", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Ks(Ut(b), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: jo(() => [
                Ks(Ut(U3), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: l[1] || (l[1] = (u) => r.$emit("close"))
                }, {
                  default: jo(() => [
                    P3(D3(r.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Ri(), _c(ev, {
          key: 0,
          sections: a.value,
          onSelectSection: l[0] || (l[0] = (u) => r.$emit("select-section", u))
        }, {
          default: jo(({ sourceSection: u, isEasy: i }) => {
            var d, g;
            return [
              Ui("h5", {
                class: "ma-0",
                lang: (d = Ut(t)) == null ? void 0 : d.sourceLanguage,
                dir: Ut(q.getDir)((g = Ut(t)) == null ? void 0 : g.sourceLanguage),
                innerHTML: u
              }, null, 8, M3),
              i ? Ii((Ri(), _c(Ut(I3), {
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
const z3 = window.Vue.resolveDirective, Ho = window.Vue.createElementVNode, O3 = window.Vue.withDirectives, yt = window.Vue.unref, j3 = window.Vue.toDisplayString, zi = window.Vue.createVNode, Oi = window.Vue.withCtx, H3 = window.Vue.openBlock, q3 = window.Vue.createElementBlock, G3 = { class: "sx-section-selector__present-sections py-2" }, W3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, X3 = { class: "sx-section-selector__present-section-button-content" }, K3 = ["textContent"], Y3 = { class: "sx-section-selector__present-section-button-content" }, Q3 = ["lang", "dir", "innerHTML"], J3 = ["lang", "dir", "innerHTML"], Z3 = window.Vue.computed, e5 = window.Codex.CdxButton, t5 = window.Codex.CdxIcon, Sp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Le(), { targetLanguageURLParameter: n } = D(), o = Z3(() => q.getAutonym(n.value));
    return (s, a) => {
      var l;
      const r = z3("i18n");
      return H3(), q3("section", G3, [
        O3(Ho("h4", W3, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        zi(ev, {
          sections: ((l = yt(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[1] || (a[1] = (c) => s.$emit("select-section", c))
        }, {
          "before-list": Oi(() => [
            zi(yt(R), {
              tag: "li",
              class: "ma-0"
            }, {
              default: Oi(() => [
                zi(yt(e5), {
                  weight: "quiet",
                  class: "col justify-start items-center py-3 px-4",
                  "aria-label": s.$i18n("sx-section-selector-next-button-aria-label"),
                  onClick: a[0] || (a[0] = (c) => s.$emit("select-section", yt(no).LEAD_SECTION_DUMMY_TITLE))
                }, {
                  default: Oi(() => [
                    Ho("div", X3, [
                      Ho("h5", {
                        class: "sx-section-selector__present-section-button-source",
                        textContent: j3(s.$i18n("cx-sx-present-lead-section-label"))
                      }, null, 8, K3)
                    ]),
                    zi(yt(t5), {
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
          default: Oi(({ sourceSection: c, targetSection: u }) => {
            var i, d, g, m;
            return [
              Ho("div", Y3, [
                Ho("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = yt(t)) == null ? void 0 : i.sourceLanguage,
                  dir: yt(q.getDir)((d = yt(t)) == null ? void 0 : d.sourceLanguage),
                  innerHTML: c
                }, null, 8, Q3),
                Ho("h6", {
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
const Ue = window.Vue.createVNode, yc = window.Vue.openBlock, yp = window.Vue.createBlock, Cp = window.Vue.createCommentVNode, n5 = window.Vue.resolveDirective, qn = window.Vue.createElementVNode, Ys = window.Vue.withDirectives, it = window.Vue.unref, yn = window.Vue.withCtx, o5 = window.Vue.normalizeClass, xp = window.Vue.toDisplayString, bp = window.Vue.createTextVNode, s5 = window.Vue.createElementBlock, a5 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, i5 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, r5 = { class: "sx-section-selector__additional-consideration-title" }, l5 = { href: "#" }, c5 = { class: "sx-section-selector__additional-consideration-title" }, u5 = { href: "#" }, Qs = window.Vue.computed, d5 = window.Vue.inject, g5 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = d5("breakpoints"), n = Qs(() => t.value.desktopAndUp), { sectionSuggestion: o } = Le(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = D(), c = Qs(() => q.getAutonym(s.value)), u = Qs(() => q.getAutonym(a.value)), i = Qs(
      () => {
        var y;
        return Q.getPageUrl(s.value, (y = o.value) == null ? void 0 : y.sourceTitle);
      }
    ), d = Qs(
      () => {
        var y;
        return Q.getPageUrl(a.value, (y = o.value) == null ? void 0 : y.targetTitle);
      }
    ), g = tt(), m = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: p } = Xt(), h = fs(), f = gd(), { selectPageSectionByTitle: w } = Rr(), v = (y) => {
      l(y), p.value ? (f(), h()) : (w(y), g.push({ name: "sx-content-comparator" }));
    };
    return mw.cx.eventlogging.stats.selectSectionAccess(!n.value), (y, C) => {
      const _ = n5("i18n");
      return yc(), s5("section", a5, [
        Ue(C3, { onClose: m }),
        Ue(Qw),
        Ue(it(R), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: yn(() => [
            Ue(it(b), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: yn(() => [
                Ue(R3, {
                  onSelectSection: v,
                  onClose: m
                }),
                n.value ? Cp("", !0) : (yc(), yp(Sp, {
                  key: 0,
                  onSelectSection: v
                })),
                qn("section", {
                  class: o5(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Ys(qn("h4", i5, null, 512), [
                    [_, [
                      u.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Ue(it(R), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: yn(() => [
                      Ue(it(b), {
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
                      Ue(it(b), {
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
                Ue(it(R), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: yn(() => [
                    Ue(it(b), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: yn(() => [
                        qn("h6", r5, [
                          Ue(it(Ze), {
                            icon: it(Y0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          bp(" " + xp(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Ys(qn("p", null, null, 512), [
                          [_, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Ys(qn("a", l5, null, 512), [
                          [_, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Ue(it(b), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: yn(() => [
                        qn("h6", c5, [
                          Ue(it(Ze), {
                            icon: it(K0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          bp(" " + xp(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Ys(qn("p", null, null, 512), [
                          [_, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Ys(qn("a", u5, null, 512), [
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
            n.value ? (yc(), yp(it(b), {
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
const S5 = /* @__PURE__ */ he(m5, [["render", _5]]), ji = window.Vue.computed, y5 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = D(), n = ji(
    () => q.getAutonym(e.value)
  ), o = ji(
    () => q.getAutonym(t.value)
  ), { target: s, PUBLISHING_TARGETS: a } = Tt(), r = ji(
    () => s.value === a.EXPAND
  ), l = fe();
  return ji(() => {
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
      C5(kp(La), {
        items: kp(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Hi = window.Vue.computed, tv = () => {
  const { currentTargetPage: e } = nt(), { activeSectionTargetTitle: t } = Le(), n = Hi(
    () => {
      var l;
      return (((l = o.value) == null ? void 0 : l.title) || "").replace(/ /g, "_");
    }
  ), o = Hi(
    () => {
      var l;
      return (l = e.value) == null ? void 0 : l.getSectionByTitle(t.value);
    }
  ), { sourceSection: s } = ae(), a = Hi(() => {
    var l;
    return (l = s.value) == null ? void 0 : l.html;
  }), r = Hi(() => {
    var l;
    return (l = o.value) == null ? void 0 : l.html;
  });
  return {
    sourceSectionContent: a,
    targetSectionAnchor: n,
    targetSectionContent: r
  };
};
const qi = window.Vue.createVNode, Cn = window.Vue.unref, E5 = window.Vue.resolveDirective, L5 = window.Vue.withDirectives, Js = window.Vue.openBlock, $p = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Gi = window.Vue.withCtx, Cc = window.Vue.createBlock, T5 = window.Vue.normalizeClass, A5 = {
  key: 0,
  class: "ma-0 pa-0"
}, D5 = ["lang", "dir", "innerHTML"], Vp = window.Vue.ref, Wi = window.Vue.computed, P5 = window.Vue.onMounted, B5 = window.Vue.onBeforeUnmount, F5 = {
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
    const n = e, o = t, s = Vp(!1), { sectionSuggestion: a, activeSectionTargetTitle: r } = Le(), { isPresentLeadSection: l } = ht(), { sectionURLParameter: c } = D(), u = Wi(
      () => (g.value || "").replace(/ /g, "_")
    ), i = (w) => o("update:contentTypeSelection", w), { targetSectionAnchor: d } = tv(), g = Wi(
      () => {
        var w;
        return (((w = a.value) == null ? void 0 : w.sourceSections) || []).find(
          (v) => v === c.value
        );
      }
    ), m = Wi(() => {
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
    }), p = Wi(
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
      const y = E5("i18n");
      return Js(), Cc(Cn(R), {
        ref_key: "contentHeader",
        ref: h,
        class: T5(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
        direction: "column",
        align: "stretch",
        reverse: s.value
      }, {
        default: Gi(() => [
          qi(V5, {
            selection: e.contentTypeSelection,
            "onUpdate:selection": i
          }, null, 8, ["selection"]),
          qi(Cn(R), {
            justify: "between",
            class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
          }, {
            default: Gi(() => [
              qi(Cn(b), null, {
                default: Gi(() => [
                  Cn(l) ? L5((Js(), $p("h3", A5, null, 512)), [
                    [y, void 0, "cx-sx-present-lead-section-label"]
                  ]) : (Js(), $p("h3", {
                    key: 1,
                    lang: m.value.lang,
                    dir: m.value.dir,
                    class: "ma-0 pa-0",
                    innerHTML: m.value.title
                  }, null, 8, D5))
                ]),
                _: 1
              }),
              qi(Cn(b), { shrink: "" }, {
                default: Gi(() => [
                  s.value ? (Js(), Cc(Cn(Xe), {
                    key: 0,
                    icon: Cn(xr),
                    progressive: "",
                    label: w.$i18n(
                      "cx-sx-content-comparator-content-header-translate-button-label"
                    ),
                    onClick: v[0] || (v[0] = (C) => w.$emit("translation-button-clicked"))
                  }, null, 8, ["icon", "label"])) : (Js(), Cc(Cn(Xe), {
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
}, Xi = window.Vue.unref, Ep = window.Vue.createVNode, N5 = window.Vue.openBlock, M5 = window.Vue.createElementBlock, U5 = { class: "sx-content-comparator__header-navigation flex items-center" }, I5 = window.Vue.computed, R5 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = D(), o = I5(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Rr(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    };
    return (l, c) => (N5(), M5("div", U5, [
      Ep(Xi(Xe), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Xi(q0),
        onClick: a
      }, null, 8, ["icon"]),
      Ep(Xi(Xe), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Xi(H0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const Lp = window.Vue.toDisplayString, we = window.Vue.unref, z5 = window.Vue.resolveDirective, Ki = window.Vue.withDirectives, xn = window.Vue.openBlock, qo = window.Vue.createElementBlock, xc = window.Vue.createCommentVNode, O5 = window.Vue.createTextVNode, j5 = window.Vue.createElementVNode, H5 = window.Vue.normalizeClass, bc = window.Vue.withCtx, Tp = window.Vue.createVNode, kc = window.Vue.createBlock, q5 = { class: "sx-content-comparator-header__mapped-section" }, G5 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, W5 = { key: 0 }, X5 = {
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
    const { targetLanguageURLParameter: t } = D(), { activeSectionTargetTitle: n } = Le(), o = fe(), { target: s, PUBLISHING_TARGETS: a, setTarget: r } = Tt(), l = Q5(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        q.getAutonym(t.value)
      )
    ), { isPresentLeadSection: c } = ht();
    return (u, i) => {
      const d = z5("i18n");
      return xn(), qo("div", q5, [
        Tp(we(R), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: bc(() => [
            Tp(we(b), { grow: "" }, {
              default: bc(() => [
                j5("h6", G5, [
                  O5(Lp(l.value) + " ", 1),
                  we(s) === we(a).NEW_SECTION ? Ki((xn(), qo("span", W5, null, 512)), [
                    [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : xc("", !0)
                ]),
                we(c) ? xc("", !0) : (xn(), qo("h6", {
                  key: 0,
                  class: H5(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": we(s) === we(a).NEW_SECTION
                  }])
                }, Lp(we(n)), 3))
              ]),
              _: 1
            }),
            we(c) ? xc("", !0) : (xn(), kc(we(b), {
              key: 0,
              shrink: ""
            }, {
              default: bc(() => [
                we(s) === we(a).EXPAND ? (xn(), kc(we(Xe), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: we(wf),
                  type: "icon",
                  onClick: i[0] || (i[0] = (g) => we(r)(we(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (xn(), kc(we(Xe), {
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
        we(c) ? Ki((xn(), qo("p", X5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-lead-section-clarifications"]
        ]) : we(s) === we(a).EXPAND ? Ki((xn(), qo("p", K5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : Ki((xn(), qo("p", Y5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const De = window.Vue.unref, Go = window.Vue.createVNode, Z5 = window.Vue.toDisplayString, Gn = window.Vue.createElementVNode, eT = window.Vue.resolveDirective, $c = window.Vue.withDirectives, Zs = window.Vue.openBlock, Vc = window.Vue.createElementBlock, Ap = window.Vue.createCommentVNode, Ec = window.Vue.withCtx, Dp = window.Vue.createBlock, tT = { class: "sx-content-comparator__header pa-4" }, nT = { class: "row my-1 py-2 mx-0 gap-6" }, oT = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, sT = { class: "sx-content-comparator-header__titles shrink" }, aT = ["lang", "dir"], iT = {
  key: 0,
  class: "sx-content-comparator-header__section-title pa-0 ma-0"
}, rT = ["lang", "dir", "innerHTML"], lT = { class: "py-2 mb-1" }, Yi = window.Vue.computed, cT = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = D(), { sourceSection: n } = ae(), { sectionSuggestion: o } = Le(), { isCurrentSectionPresent: s } = ht(), a = Yi(
      () => {
        var u;
        return (u = o.value) == null ? void 0 : u.missingSections.hasOwnProperty(t.value);
      }
    ), r = Yi(() => {
      var u;
      return (u = n.value) == null ? void 0 : u.html;
    }), l = Yi(() => [
      no.LEAD_SECTION_DUMMY_TITLE,
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), c = Yi(
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
      return Zs(), Vc("div", tT, [
        Go(De(Xe), {
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
              (g = De(n)) != null && g.isLeadSection ? $c((Zs(), Vc("h2", iT, null, 512)), [
                [d, void 0, "cx-sx-present-lead-section-label"]
              ]) : (Zs(), Vc("h2", {
                key: 1,
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: De(o).sourceLanguage,
                dir: De(q.getDir)(De(o).sourceLanguage),
                innerHTML: c.value
              }, null, 8, rT))
            ]),
            Go(R5, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          Gn("div", lT, [
            Go(De(Xe), {
              class: "sx-content-comparator-header__translation-button",
              icon: De(xr),
              progressive: "",
              label: u.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (m) => u.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (Zs(), Dp(De(R), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Ec(() => [
            Go(De(b), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Ec(() => [
                Go(De(Ze), { icon: De(Q0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Go(De(b), { class: "ma-0" }, {
              default: Ec(() => [
                $c(Gn("strong", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                i[2] || (i[2] = Gn("br", null, null, -1)),
                $c(Gn("span", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Ap("", !0),
        De(s) ? (Zs(), Dp(J5, { key: 1 })) : Ap("", !0)
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
}, Lc = window.Vue.computed, wT = window.Vue.createApp, vT = window.Vuex.useStore, _T = () => {
  const e = vT(), { sectionSuggestion: t } = Le(), { currentTargetPage: n } = nt(), { sectionURLParameter: o } = D(), s = fe(), a = () => wT(
    nv,
    {
      placeholderTitle: s.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, r = Lc(() => {
    const { appendixSectionTitles: u } = e.state.suggestions;
    return u[t.value.targetLanguage] || [];
  }), l = Lc(
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
const Tc = window.Vue.createVNode, rt = window.Vue.unref, Wo = window.Vue.openBlock, Np = window.Vue.createBlock, Mp = window.Vue.createCommentVNode, Qi = window.Vue.createElementVNode, Ac = window.Vue.Fragment, Ji = window.Vue.createElementBlock, ST = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, yT = { class: "sx-content-comparator__source-content" }, CT = ["lang", "dir", "innerHTML"], xT = ["lang", "dir", "innerHTML"], bT = ["innerHTML"], kT = window.Vue.ref, Up = window.Vue.computed, Ip = window.Vue.watch, $T = window.Vue.inject, VT = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = Tt(), n = tt(), o = kT("source_section"), { logDashboardTranslationStartEvent: s } = dd(), a = fs(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      s(), a();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = D(), { sourceSectionContent: i, targetSectionContent: d } = tv(), g = _T(), { sectionSuggestion: m } = Le(), { isCurrentSectionPresent: p } = ht(), h = Up(() => m.value.targetTitle), f = Kw();
    Ip(
      h,
      () => x(this, null, function* () {
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
    ), Ip(p, t, { immediate: !0 });
    const w = $T("breakpoints"), v = Up(() => w.value.mobile);
    return mw.cx.eventlogging.stats.sectionCompareAccess(v.value), (y, C) => (Wo(), Ji("section", ST, [
      Tc(cT, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      Tc(F5, {
        "content-type-selection": o.value,
        "onUpdate:contentTypeSelection": C[0] || (C[0] = (_) => o.value = _),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      Qi("section", yT, [
        o.value === "source_section" ? (Wo(), Ji(Ac, { key: 0 }, [
          rt(i) ? Mp("", !0) : (Wo(), Np(rt(gt), { key: 0 })),
          Qi("section", {
            lang: rt(c),
            dir: rt(q.getDir)(rt(c)),
            class: "pt-2 px-4",
            innerHTML: rt(i)
          }, null, 8, CT)
        ], 64)) : o.value === "target_article" ? (Wo(), Ji(Ac, { key: 1 }, [
          rt(g) ? Mp("", !0) : (Wo(), Np(rt(gt), { key: 0 })),
          Qi("article", {
            lang: rt(u),
            dir: rt(q.getDir)(rt(u)),
            class: "px-4",
            innerHTML: rt(g)
          }, null, 8, xT)
        ], 64)) : (Wo(), Ji(Ac, { key: 2 }, [
          Qi("section", {
            class: "pa-4",
            innerHTML: rt(d)
          }, null, 8, bT),
          Tc(nv, {
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
const NT = window.Vue.resolveDirective, ea = window.Vue.createElementVNode, Rp = window.Vue.withDirectives, Zi = window.Vue.unref, Dc = window.Vue.createVNode, zp = window.Vue.toDisplayString, Op = window.Vue.createTextVNode, ta = window.Vue.withCtx, MT = window.Vue.openBlock, UT = window.Vue.createBlock, IT = { class: "mw-ui-dialog__header px-4 py-3" }, RT = { class: "mw-ui-dialog__header-title" }, zT = { class: "pa-4" }, OT = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, jp = window.Codex.CdxButton, jT = {
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
      return MT(), UT(Zi(Vt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: ta(() => [
          ea("div", IT, [
            Rp(ea("span", RT, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: ta(() => [
          ea("div", OT, [
            Dc(Zi(jp), {
              weight: "quiet",
              onClick: s
            }, {
              default: ta(() => [
                Op(zp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Dc(Zi(jp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: ta(() => [
                Op(zp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ta(() => [
          Dc(Zi(Cr)),
          ea("div", zT, [
            Rp(ea("span", null, null, 512), [
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
}, qT = window.Vuex.useStore, md = () => {
  const e = qT(), { sourceSection: t } = ae(), { getCurrentTitleByLanguage: n } = cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = D(), a = Zw(), r = (i, d, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[d] = g;
      return;
    }
    const m = t.value.getContentTranslationUnitById(i);
    m instanceof dt ? m.blockTemplateProposedTranslations[d] = g : m instanceof eo && m.addProposedTranslation(d, g);
  }, l = (i, d) => x(void 0, null, function* () {
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
  }), c = (i, d) => x(void 0, null, function* () {
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
    m instanceof dt && (m.setBlockTemplateAdaptationInfoByHtml(
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
  const { sourceSection: e } = ae(), t = GT(), { translateTranslationUnitById: n } = md();
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
const KT = window.Vue.resolveDirective, lt = window.Vue.createElementVNode, er = window.Vue.withDirectives, je = window.Vue.unref, Pc = window.Vue.createVNode, bn = window.Vue.withCtx, YT = window.Vue.renderList, QT = window.Vue.Fragment, tr = window.Vue.openBlock, JT = window.Vue.createElementBlock, ZT = window.Vue.toDisplayString, Bc = window.Vue.createBlock, Hp = window.Vue.createCommentVNode, eA = { class: "mw-ui-dialog__header pa-4" }, tA = { class: "row ma-0 py-2" }, nA = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, oA = { class: "mb-0" }, sA = { class: "col shrink justify-center" }, aA = { class: "pb-2 mb-0" }, iA = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, rA = ["dir", "lang", "innerHTML"], lA = ["textContent"], cA = ["innerHTML"], uA = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, dA = ["innerHTML"], Fc = window.Vue.computed, gA = window.Vuex.useStore, mA = {
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
    } = ae(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: i
    } = D(), d = Fc(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        u.value,
        i.value
      )
    ), g = Fc(() => {
      const C = [s, o];
      return d.value.filter(
        (_) => !C.includes(_)
      );
    }), m = Fc(
      () => l.value ? r.value.proposedTitleTranslations : c.value.proposedTranslations
    ), p = WT(), h = (C) => {
      p(C), w();
    }, f = le.getMTProviderLabel, w = () => n("update:active", !1), v = fe(), y = XT(
      v.i18n("cx-tools-mt-noservices")
    );
    return (C, _) => {
      const k = KT("i18n");
      return e.active ? (tr(), Bc(je(Vt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: bn(() => [
          lt("div", eA, [
            lt("div", tA, [
              lt("div", nA, [
                er(lt("h4", oA, null, 512), [
                  [k, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              lt("div", sA, [
                Pc(je(Xe), {
                  type: "icon",
                  icon: je(br),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            er(lt("h6", aA, null, 512), [
              [k, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: bn(() => [
          Pc(je(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: _[0] || (_[0] = (E) => h(je(s)))
          }, {
            header: bn(() => [
              er(lt("h5", iA, null, 512), [
                [k, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: bn(() => [
              lt("p", {
                dir: je(q.getDir)(je(u)),
                lang: je(u),
                innerHTML: m.value[je(s)]
              }, null, 8, rA)
            ]),
            _: 1
          }),
          (tr(!0), JT(QT, null, YT(g.value, (E) => (tr(), Bc(je(Je), {
            key: E,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (M) => h(E)
          }, {
            header: bn(() => [
              lt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: ZT(je(f)(E))
              }, null, 8, lA)
            ]),
            default: bn(() => [
              lt("p", {
                innerHTML: m.value[E]
              }, null, 8, cA)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Pc(je(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: _[1] || (_[1] = (E) => h(je(o)))
          }, {
            header: bn(() => [
              er(lt("h5", uA, null, 512), [
                [k, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: bn(() => [
              _[2] || (_[2] = lt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1))
            ]),
            _: 1
          }),
          g.value.length ? Hp("", !0) : (tr(), Bc(je(Je), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: bn(() => [
              lt("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: je(y)
              }, null, 8, dA)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Hp("", !0);
    };
  }
}, pA = window.Vuex.useStore, ws = () => {
  const { sourceSection: e } = ae(), t = pA(), { translateTranslationUnitById: n } = md(), { currentMTProvider: o } = pt(t), s = (l) => x(void 0, null, function* () {
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
const qp = window.Vue.toDisplayString, Nc = window.Vue.createElementVNode, nr = window.Vue.unref, hA = window.Vue.createVNode, fA = window.Vue.normalizeClass, wA = window.Vue.withCtx, vA = window.Vue.openBlock, _A = window.Vue.createBlock, SA = ["href"], yA = ["textContent"], CA = ["textContent"], _o = window.Vue.computed, Gp = "sx-sentence-selector__section-title", xA = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ae(), { currentSourcePage: o, currentTargetPageTitle: s } = nt(), { sourceLanguageURLParameter: a } = D(), { isPresentLeadSection: r } = ht(), l = _o(() => {
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
    }), { selectTranslationUnitById: m } = ws(), p = () => m(0), h = _o(
      () => r.value ? s.value : c.value
    );
    return (f, w) => (vA(), _A(nr(b), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: wA(() => [
        Nc("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Nc("strong", {
            textContent: qp(l.value)
          }, null, 8, yA),
          hA(nr(Ze), {
            icon: nr(vf),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, SA),
        Nc("h2", {
          class: fA(["pa-0 ma-0", g.value]),
          onClick: w[0] || (w[0] = (v) => nr(r) ? p : null),
          textContent: qp(h.value)
        }, null, 10, CA)
      ]),
      _: 1
    }));
  }
};
const kn = window.Vue.unref, na = window.Vue.createVNode, or = window.Vue.withCtx, Wp = window.Vue.toDisplayString, Xp = window.Vue.createTextVNode, bA = window.Vue.openBlock, kA = window.Vue.createBlock, Kp = window.Vue.computed, Mc = window.Codex.CdxButton, Yp = window.Codex.CdxIcon, sv = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = ae(), { isPresentLeadSection: s } = ht(), a = Kp(
      () => {
        var l;
        return (l = t.value) == null ? void 0 : l.isSelectedTranslationUnitLast;
      }
    ), r = Kp(
      () => s.value || n.value
    );
    return (l, c) => (bA(), kA(kn(R), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: or(() => [
        na(kn(Mc), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": l.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: r.value,
          onClick: c[0] || (c[0] = (u) => l.$emit("select-previous-segment"))
        }, {
          default: or(() => [
            na(kn(Yp), {
              class: "me-1",
              icon: kn(Zu)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        na(kn(Mc), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !kn(o),
          onClick: c[1] || (c[1] = (u) => l.$emit("apply-translation"))
        }, {
          default: or(() => [
            Xp(Wp(l.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        na(kn(Mc), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: a.value,
          onClick: c[2] || (c[2] = (u) => l.$emit("skip-translation"))
        }, {
          default: or(() => [
            Xp(Wp(l.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            na(kn(Yp), {
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
const So = window.Vue.unref, $A = window.Vue.toDisplayString, oa = window.Vue.createVNode, sr = window.Vue.withCtx, VA = window.Vue.openBlock, EA = window.Vue.createBlock, Uc = window.Vue.computed, LA = window.Vuex.useStore, TA = window.Codex.CdxButton, AA = window.Codex.CdxIcon, DA = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = LA(), n = Uc(() => t.state.application.currentMTProvider), o = fe(), s = Uc(() => ({
      [le.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [le.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Uc(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        le.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (VA(), EA(So(b), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: sr(() => [
        oa(So(R), { class: "ma-0 ps-5 pb-4" }, {
          default: sr(() => [
            oa(So(b), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: $A(a.value)
            }, null, 8, ["textContent"]),
            oa(So(b), {
              shrink: "",
              class: "pe-5"
            }, {
              default: sr(() => [
                oa(So(TA), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (c) => r.$emit("configure-options"))
                }, {
                  default: sr(() => [
                    oa(So(AA), {
                      class: "pa-0",
                      icon: So(Ju)
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
const It = window.Vue.unref, Wn = window.Vue.createVNode, PA = window.Vue.resolveDirective, Qp = window.Vue.createElementVNode, BA = window.Vue.withDirectives, Jp = window.Vue.toDisplayString, Zp = window.Vue.createTextVNode, sa = window.Vue.withCtx, FA = window.Vue.openBlock, NA = window.Vue.createElementBlock, MA = { class: "mt-retry-body pb-5" }, UA = { class: "retry-body__message" }, eh = window.Codex.CdxButton, Ic = window.Codex.CdxIcon, IA = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = PA("i18n");
      return FA(), NA("div", MA, [
        Qp("div", UA, [
          Wn(It(Ic), {
            class: "me-2",
            icon: It(mC)
          }, null, 8, ["icon"]),
          BA(Qp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Wn(It(R), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: sa(() => [
            Wn(It(b), { cols: "6" }, {
              default: sa(() => [
                Wn(It(eh), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: sa(() => [
                    Wn(It(Ic), {
                      class: "me-1",
                      icon: It(Jf)
                    }, null, 8, ["icon"]),
                    Zp(" " + Jp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Wn(It(b), { cols: "6" }, {
              default: sa(() => [
                Wn(It(eh), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: sa(() => [
                    Wn(It(Ic), {
                      class: "me-1",
                      icon: It(bC)
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
const Xo = window.Vue.createVNode, ct = window.Vue.unref, aa = window.Vue.openBlock, RA = window.Vue.createElementBlock, zA = window.Vue.createCommentVNode, ar = window.Vue.createBlock, OA = window.Vue.normalizeClass, jA = window.Vue.normalizeStyle, ia = window.Vue.withCtx, HA = window.Vue.toDisplayString, qA = window.Vue.createTextVNode, GA = window.Vue.normalizeProps, WA = window.Vue.guardReactiveProps, XA = ["lang", "dir", "innerHTML"], Rc = window.Vue.ref, KA = window.Vue.onMounted, YA = window.Vue.onBeforeUnmount, zc = window.Vue.computed, QA = window.Vue.nextTick, JA = window.Vuex.useStore, ZA = window.Codex.CdxButton, eD = window.Codex.CdxIcon, tD = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Rc(0), n = Rc(null), o = Rc(null), s = JA(), { currentMTProvider: a } = pt(s), { targetLanguageURLParameter: r } = D(), { sourceSection: l, currentProposedTranslation: c } = ae(), u = zc(
      () => {
        var p, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (p = l.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), i = zc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), d = zc(
      () => !!c.value || a.value === le.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    KA(() => x(this, null, function* () {
      yield QA(), g(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), YA(() => {
      m.unobserve(n.value.$el), m.unobserve(o.value.$el);
    });
    const m = new ResizeObserver(() => g());
    return (p, h) => (aa(), ar(ct(Je), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: ia(() => [
        Xo(ct(R), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: ia(() => [
            Xo(DA, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => p.$emit("configure-options"))
            }, null, 512),
            Xo(ct(b), {
              class: OA(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !d.value && u.value
              }]),
              style: jA(d.value ? i.value : null)
            }, {
              default: ia(() => [
                d.value ? (aa(), RA("section", {
                  key: 0,
                  lang: ct(r),
                  dir: ct(q.getDir)(ct(r)),
                  innerHTML: ct(c)
                }, null, 8, XA)) : u.value ? (aa(), ar(ct(gt), { key: 1 })) : (aa(), ar(IA, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => p.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => p.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Xo(ct(b), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: ia(() => [
                d.value || u.value ? (aa(), ar(ct(ZA), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !d.value,
                  onClick: h[3] || (h[3] = (f) => p.$emit("edit-translation", ct(c)))
                }, {
                  default: ia(() => [
                    Xo(ct(eD), {
                      class: "me-1",
                      icon: ct(Qu)
                    }, null, 8, ["icon"]),
                    qA(" " + HA(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : zA("", !0),
                Xo(sv, GA(WA(p.$attrs)), null, 16)
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
      type: dt,
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
    const { selectTranslationUnitById: r } = ws(), l = (u) => {
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
      () => !t.isTemplateAdapted || t.percentage === 0 ? e_ : yu
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
const Xn = window.Vue.unref, ir = window.Vue.createVNode, Oc = window.Vue.withCtx, hD = window.Vue.openBlock, fD = window.Vue.createBlock, wD = window.Vue.computed, ah = window.Codex.CdxButton, ih = window.Codex.CdxIcon, iv = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ae(), o = wD(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (hD(), fD(Xn(R), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Oc(() => [
        ir(Xn(ah), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Xn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Oc(() => [
            ir(Xn(ih), { icon: Xn(Zu) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        ir(Xn(ah), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: Oc(() => [
            ir(Xn(ih), { icon: Xn(ps) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, ra = window.Vue.openBlock, rr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const $n = window.Vue.unref, Ko = window.Vue.withCtx, la = window.Vue.createVNode, jc = window.Vue.toDisplayString, Hc = window.Vue.createElementVNode, vD = window.Vue.renderList, _D = window.Vue.Fragment, SD = window.Vue.createElementBlock, yD = { class: "pa-4" }, CD = ["textContent"], xD = ["textContent"], ca = window.Vue.computed, bD = {
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
    const t = e, { targetLanguageURLParameter: n } = D(), o = ca(() => q.getAutonym(n.value)), s = ca(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), a = fe(), r = ca(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? s.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", a.i18n(u);
    }), l = ca(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : s.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", a.i18n(u);
    }), c = ca(() => {
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
          icon: br,
          color: kt.gray500
        });
      else if (s.value < 100)
        u.push({
          text: a.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: yu,
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
          icon: yu,
          color: kt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: a.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          o.value
        ),
        icon: xr,
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
    return (u, i) => (ra(), rr($n(Vt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: i[0] || (i[0] = (d) => u.$emit("update:active", d))
    }, {
      header: Ko(() => [
        la($n(R), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Ko(() => [
            la($n(b), { shrink: "" }, {
              default: Ko(() => [
                e.targetTemplateExists ? (ra(), rr(av, {
                  key: 0,
                  percentage: s.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (ra(), rr($n(Ze), {
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
      default: Ko(() => [
        Hc("div", yD, [
          Hc("h3", {
            textContent: jc(r.value)
          }, null, 8, CD),
          Hc("p", {
            class: "mt-6 text-small",
            textContent: jc(l.value)
          }, null, 8, xD),
          (ra(!0), SD(_D, null, vD(c.value, (d, g) => (ra(), rr($n(R), {
            key: g,
            align: "start",
            class: "mt-4"
          }, {
            default: Ko(() => [
              la($n(b), { shrink: "" }, {
                default: Ko(() => [
                  la($n(Ze), {
                    class: "me-2",
                    icon: d.icon,
                    "icon-color": d.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              la($n(b), {
                textContent: jc(d.text)
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
const Fe = window.Vue.unref, He = window.Vue.createVNode, Jt = window.Vue.withCtx, qc = window.Vue.toDisplayString, rh = window.Vue.createTextVNode, kD = window.Vue.resolveDirective, lh = window.Vue.withDirectives, ch = window.Vue.createElementVNode, $D = window.Vue.normalizeClass, Yo = window.Vue.openBlock, uh = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const lr = window.Vue.createBlock, dh = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const gh = window.Vue.mergeProps, VD = { class: "block-template-adaptation-card__container pa-4" }, ED = ["textContent"], LD = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Ie = window.Vue.computed, TD = window.Vue.ref, AD = window.Vuex.useStore, mh = window.Codex.CdxButton, ph = window.Codex.CdxIcon, DD = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = AD(), { currentMTProvider: n } = pt(t), { targetLanguageURLParameter: o } = D(), s = Ie(() => q.getAutonym(o.value)), {
      selectedContentTranslationUnit: a,
      currentProposedTranslation: r
    } = ae(), l = Ie(() => {
      var V;
      return (V = a.value) == null ? void 0 : V.isTranslated;
    }), c = Ie(() => {
      var B;
      return ((B = a.value) == null ? void 0 : B.blockTemplateTranslatedContent) || r.value;
    }), u = Ie(
      () => {
        var V;
        return (V = a.value) == null ? void 0 : V.getTargetBlockTemplateNameByProvider(
          n.value
        );
      }
    ), i = Ie(
      () => {
        var V;
        return !((V = t.state.application.mtRequestsPending) != null && V.includes(
          a.value.id
        ));
      }
    ), d = fe(), g = Ie(
      // Strip HTML comments and return
      () => {
        var V, B;
        return ((B = (V = a.value) == null ? void 0 : V.sourceBlockTemplateName) == null ? void 0 : B.replace(
          /<\!--.*?-->/g,
          ""
        )) || d.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), m = Ie(
      () => {
        var V, B;
        return (B = (V = a.value) == null ? void 0 : V.blockTemplateAdaptationInfo) == null ? void 0 : B[n.value];
      }
    ), p = Ie(
      () => {
        var V, B;
        return ((V = m.value) == null ? void 0 : V.adapted) || !!((B = m.value) != null && B.partial);
      }
    ), h = Ie(() => m.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), f = Ie(() => m.value ? p.value ? d.i18n("sx-block-template-adaptation-card-edit-button-label") : d.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), w = Ie(
      () => {
        var V;
        return Object.keys(((V = a.value) == null ? void 0 : V.sourceTemplateParams) || {}).length;
      }
    ), v = Ie(() => {
      var B;
      const V = (B = a.value) == null ? void 0 : B.getTargetTemplateParamsByProvider(
        n.value
      );
      return Object.keys(V || {});
    }), y = Ie(() => v.value.length), C = Ie(() => {
      const V = M.value;
      return w.value + V === 0 ? 100 : y.value / (w.value + V) * 100 || 0;
    }), _ = TD(!1), k = () => {
      _.value = !0;
    }, E = (V) => V.filter((B) => !v.value.includes(B)), M = Ie(() => {
      var B;
      const V = ((B = m.value) == null ? void 0 : B.mandatoryTargetParams) || [];
      return E(V).length;
    }), L = Ie(() => {
      var B;
      const V = ((B = m.value) == null ? void 0 : B.optionalTargetParams) || [];
      return E(V).length;
    });
    return (V, B) => {
      const X = kD("i18n");
      return Yo(), lr(Fe(Je), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Jt(() => [
          ch("div", VD, [
            He(Fe(R), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Jt(() => [
                He(Fe(b), { shrink: "" }, {
                  default: Jt(() => [
                    He(Fe(ph), {
                      icon: Fe(kC),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                He(Fe(b), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Jt(() => [
                    rh(qc(g.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u.value ? (Yo(), uh("div", {
              key: 0,
              class: $D(["pa-4 mb-4", h.value])
            }, [
              He(Fe(R), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Jt(() => [
                  lh(He(Fe(b), { tag: "h5" }, null, 512), [
                    [X, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  He(Fe(b), { shrink: "" }, {
                    default: Jt(() => [
                      He(av, {
                        percentage: C.value,
                        size: 20,
                        "is-template-adapted": p.value,
                        "stroke-width": 2,
                        onClick: k
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              ch("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: qc(u.value)
              }, null, 8, ED),
              He(Fe(mh), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: B[0] || (B[0] = (se) => V.$emit("edit-translation", c.value))
              }, {
                default: Jt(() => [
                  rh(qc(f.value), 1)
                ]),
                _: 1
              })
            ], 2)) : i.value ? (Yo(), uh("div", LD, [
              He(Fe(R), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Jt(() => [
                  lh(He(Fe(b), { tag: "h5" }, null, 512), [
                    [X, [
                      s.value
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  He(Fe(b), { shrink: "" }, {
                    default: Jt(() => [
                      He(Fe(mh), {
                        weight: "quiet",
                        "aria-label": V.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Jt(() => [
                          He(Fe(ph), {
                            icon: Fe(yC),
                            onClick: k
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
            ])) : (Yo(), lr(Fe(gt), { key: 2 }))
          ]),
          l.value ? (Yo(), lr(iv, dh(gh({ key: 1 }, V.$attrs)), null, 16)) : (Yo(), lr(sv, dh(gh({ key: 0 }, V.$attrs)), null, 16)),
          He(bD, {
            active: _.value,
            "onUpdate:active": B[1] || (B[1] = (se) => _.value = se),
            "source-params-count": w.value,
            "target-params-count": y.value,
            "mandatory-missing-params-count": M.value,
            "optional-missing-params-count": L.value,
            "is-template-adapted": p.value,
            "target-template-exists": !!u.value
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
    const n = t, { isSectionTitleSelected: o } = ae(), s = fe(), a = UD(() => [
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
      BD(PD(La), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const RD = window.Vue.useCssVars, Re = window.Vue.createVNode, hh = window.Vue.resolveDirective, zD = window.Vue.createElementVNode, Gc = window.Vue.withDirectives, Ce = window.Vue.unref, OD = window.Vue.normalizeStyle, cr = window.Vue.openBlock, fh = window.Vue.createElementBlock, jD = window.Vue.createCommentVNode, HD = window.Vue.normalizeClass, Ct = window.Vue.withCtx, qD = window.Vue.toDisplayString, GD = window.Vue.createTextVNode, wh = window.Vue.createBlock, WD = window.Vue.normalizeProps, XD = window.Vue.guardReactiveProps, Vn = window.Vue.computed, KD = window.Vue.ref, YD = window.Vue.inject, QD = window.Codex.CdxButton, Wc = window.Codex.CdxIcon, JD = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    RD((v) => ({
      "3a549064": w.value
    }));
    const t = KD("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = ae(), a = D(), r = Vn(() => t.value === "sentence"), l = Vn(
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
    return (v, y) => {
      const C = hh("i18n"), _ = hh("i18n-html");
      return cr(), wh(Ce(Je), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ct(() => [
          Re(Ce(R), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ct(() => [
              Re(ID, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (k) => t.value = k)
              }, null, 8, ["selection"]),
              Re(Ce(b), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Ct(() => [
                  Re(Ce(R), { class: "ma-0" }, {
                    default: Ct(() => [
                      Re(Ce(b), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Ct(() => [
                          Gc(zD("h5", null, null, 512), [
                            [C, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? Gc((cr(), fh("p", {
                            key: 0,
                            style: OD({ color: Ce(d) })
                          }, null, 4)), [
                            [C, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Gc((cr(), fh("p", {
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
                      Re(Ce(b), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Ct(() => [
                          Re(Ce(R), { class: "ma-0 ms-2" }, {
                            default: Ct(() => [
                              Re(Ce(b), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Ct(() => [
                                  Re(Ce(Wc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Ce(EC)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Re(Ce(b), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Ct(() => [
                                  Re(Ce(Sf), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: w.value,
                                    background: Ce(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Re(Ce(b), { shrink: "" }, {
                                default: Ct(() => [
                                  Re(Ce(Wc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Ce($C)
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
                  r.value ? (cr(), wh(Ce(QD), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (k) => v.$emit("edit-translation", g.value))
                  }, {
                    default: Ct(() => [
                      Re(Ce(Wc), {
                        class: "me-1",
                        icon: Ce(Qu)
                      }, null, 8, ["icon"]),
                      GD(" " + qD(v.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : jD("", !0)
                ]),
                _: 1
              }),
              Re(Ce(b), { class: "translated-segment-card__actions" }, {
                default: Ct(() => [
                  Re(iv, WD(XD(v.$attrs)), null, 16)
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
  } = ae(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = ws(), { isPresentLeadSection: s } = ht(), { currentTranslation: a } = Xt();
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
  } = D();
  return () => x(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = mw.config.get("wgContentTranslationEnableMT");
    let s;
    o ? s = yield Tr.fetchSupportedMTProviders(
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
  const e = rv(), { currentMTProvider: t } = pt(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = D(), s = e6();
  return () => x(void 0, null, function* () {
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
  const { selectedContentTranslationUnit: e } = ae(), t = n6(
    () => e.value instanceof dt
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
  const { currentTranslation: e } = Xt(), { currentSourcePage: t } = nt();
  return i6(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, r6 = window.Vue.computed, Ua = () => {
  const { sourceSection: e } = ae(), { currentTargetPageTitle: t } = nt(), { isMissingLeadSection: n } = ht();
  return { targetPageTitleForPublishing: r6(
    () => n.value ? e.value.title : t.value
  ) };
}, l6 = window.Vuex.useStore, pd = () => {
  const e = l6(), { sourceSection: t } = ae(), { targetPageTitleForPublishing: n } = Ua(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = D(), r = lv(), { target: l, PUBLISHING_TARGETS: c } = Tt();
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
  const e = g6(), t = pd();
  let n = 1e3, o = 0;
  return Xc = ld(() => t().then((a) => {
    a instanceof so ? (n *= o + 1, o++, setTimeout(Xc, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof cs)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Xc;
}, cv = d6(m6), p6 = window.Vuex.useStore, h6 = () => {
  const e = p6(), t = cv(), { currentMTProvider: n } = pt(e), { sourceSection: o, currentProposedTranslation: s } = ae(), { selectNextTranslationUnit: a } = ws();
  return () => x(void 0, null, function* () {
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
  const e = v6(), { currentTranslation: t } = Xt(), { currentMTProvider: n } = pt(e), { currentTargetPageTitle: o } = nt(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = D(), c = Lt(), u = _6(() => {
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
}, S6 = (e, t, n, o) => x(void 0, null, function* () {
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
}, C6 = (e, t, n, o) => x(void 0, null, function* () {
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
  const { currentSourcePage: e } = nt(), { sourceSection: t } = ae();
  return (n) => x(void 0, null, function* () {
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
function dv() {
  return Kc === null && (Kc = $6()), Kc;
}
const gv = window.Vue.ref, Yc = gv(!1), Qc = gv(!1);
function vh() {
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
const ue = window.Vue.unref, xt = window.Vue.createVNode, Rt = window.Vue.withCtx, V6 = window.Vue.resolveDirective, En = window.Vue.createElementVNode, E6 = window.Vue.withDirectives, ua = window.Vue.toDisplayString, L6 = window.Vue.createTextVNode, Zt = window.Vue.openBlock, Kn = window.Vue.createBlock, _h = window.Vue.createCommentVNode, T6 = window.Vue.renderList, A6 = window.Vue.Fragment, Sh = window.Vue.createElementBlock, D6 = window.Vue.normalizeClass, P6 = window.Vue.normalizeStyle, B6 = { class: "sx-sentence-selector__header-title mb-0" }, F6 = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, N6 = { class: "sx-sentence-selector__section-contents px-4" }, Yn = window.Vue.computed, M6 = window.Vue.nextTick, U6 = window.Vue.onMounted, da = window.Vue.ref, yh = window.Vue.watch, I6 = window.Vuex.useStore, Ch = window.Codex.CdxButton, R6 = window.Codex.CdxIcon, xh = window.Codex.CdxMessage, z6 = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = da(!1), n = da(!1), o = da("100%"), s = I6(), { currentMTProvider: a, previousRoute: r } = pt(s), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      pageURLParameter: u,
      sectionURLParameter: i
    } = D(), { resetPublishTarget: d, target: g } = Tt(), { loadSuggestion: m } = Ba(), { sourceSection: p, selectedContentTranslationUnit: h } = ae(), { targetPageTitleForPublishing: f } = Ua(), w = da({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), v = Yn(
      () => Object.values(w.value).every(Boolean)
    ), y = Yn(
      () => {
        var Z;
        return (Z = p.value) == null ? void 0 : Z.isSelectedTranslationUnitTranslated;
      }
    ), C = Yn(() => {
      var Z;
      return (Z = p.value) == null ? void 0 : Z.subSections;
    }), _ = Yn(
      () => {
        var Z;
        return (Z = p.value) == null ? void 0 : Z.selectedTranslationUnitOriginalContent;
      }
    ), k = Yn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: E,
      logEditorCloseEvent: M,
      logEditorCloseWarnEvent: L,
      logEditorSegmentAddEvent: V,
      logEditorSegmentSkipEvent: B
    } = uv(), X = () => {
      var Ao;
      const Z = N.currentRoute.value.meta.workflowStep, Bn = N.getRoutes().find(
        (Hr) => Hr.name === r.value
      ), ft = ((Ao = Bn == null ? void 0 : Bn.meta) == null ? void 0 : Ao.workflowStep) || 0;
      return Z > ft;
    }, se = ZD();
    t6()().then(() => {
      X() && E(), w.value.mtProviders = !0;
    });
    const ne = s6(), { fetchTranslationsByStatus: F, translationsFetched: z } = hs(), K = k6(), { currentTranslation: J } = Xt(), { selectPageSectionByTitle: $e, selectPageSectionByIndex: xe } = Rr(), _e = Jw(), Oe = io();
    U6(() => x(this, null, function* () {
      if (!z.value.draft) {
        const Z = [
          // required to get current draft translation (if exists)
          F("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          _e(l.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          Oe(l.value, [u.value])
        ];
        yield Promise.all(Z);
      }
      w.value.pageMetadata = !0, i.value ? yield $e(i.value) : yield xe(0), w.value.pageContent = !0, J.value && (yield K(J.value)), w.value.draftRestored = !0, g.value || m(
        l.value,
        c.value,
        u.value
      ).then(() => d()), yh(
        v,
        () => x(this, null, function* () {
          v.value && (yield M6(), se(), ne());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), yh(h, ne);
    const { selectNextTranslationUnit: O, selectPreviousTranslationUnit: j } = ws(), ce = () => (B(), O()), S = h6(), A = () => {
      V(), S();
    }, T = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, N = tt(), U = () => {
      const { autoSavePending: Z } = s.state.application;
      if (Z) {
        _s.value = !0, L();
        return;
      }
      I();
    }, H = w6(), { clearTranslationURLParameters: G } = D(), I = () => x(this, null, function* () {
      F("draft"), J.value && (p.value.reset(), J.value.restored = !1), M(), G(), H(), yield N.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: ie,
      translateSelectedTranslationUnitForAllProviders: ot
    } = md(), Ve = () => {
      vs.value || (t.value = !0, ot());
    }, { getCurrentTitleByLanguage: Ia } = cn(), { isMissingLeadSection: Ra } = ht(), co = (Z) => {
      N.push({
        name: "sx-editor",
        state: {
          content: Z,
          originalContent: _.value,
          title: Ia(
            c.value,
            l.value
          ),
          isInitialEdit: !y.value || null
        }
      });
    }, zr = () => N.push({ name: "sx-publisher" }), Or = () => x(this, null, function* () {
      h.value ? yield ie(
        h.value.id,
        a.value
      ) : yield ie(0, a.value);
    }), vs = Yn(
      () => h.value instanceof dt
    ), _s = da(!1), {
      isPermissionWarningDismissed: jr,
      dismissPermissionWarning: Lo,
      resetPermissionWarning: To
    } = vh(), { isTitleErrorDismissed: za, dismissTitleError: P, resetTitleError: W } = vh();
    X() && (To(), W());
    const Ne = Yn(
      () => !dv() && !jr.value
    ), At = Yn(
      () => !za.value && Ra.value && !mw.Title.newFromText(f.value)
    );
    return (Z, un) => {
      const Bn = V6("i18n");
      return Zt(), Sh("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: P6(k.value)
      }, [
        xt(ue(R), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Rt(() => [
            xt(ue(b), { shrink: "" }, {
              default: Rt(() => [
                xt(ue(Ch), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": Z.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: U
                }, {
                  default: Rt(() => [
                    xt(ue(R6), { icon: ue(Wf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            xt(ue(b), {
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
            xt(ue(b), {
              shrink: "",
              class: "px-3"
            }, {
              default: Rt(() => [
                xt(ue(Ch), {
                  disabled: !(ue(p) && ue(p).isTranslated),
                  onClick: zr
                }, {
                  default: Rt(() => [
                    L6(ua(Z.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        v.value ? (Zt(), Kn(ue(R), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Rt(() => [
            xt(ue(b), {
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
                    En("p", null, ua(Z.$i18n("cx-publish-permission-warning")), 1),
                    En("p", null, [
                      En("strong", null, [
                        En("a", F6, ua(Z.$i18n("cx-publish-permission-warning-link-label")), 1)
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
                  onUserDismissed: ue(P)
                }, {
                  default: Rt(() => [
                    En("p", null, [
                      En("strong", null, ua(Z.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    En("p", null, ua(Z.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : _h("", !0),
                xt(xA),
                En("div", N6, [
                  (Zt(!0), Sh(A6, null, T6(C.value, (ft) => (Zt(), Kn(gD, {
                    id: ft.id,
                    key: `sub-section-${ft.id}`,
                    "sub-section": ft,
                    onBounceTranslation: T
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !vs.value && y.value ? (Zt(), Kn(JD, {
              key: 0,
              onEditTranslation: co,
              onSelectNextSegment: ue(O),
              onSelectPreviousSegment: ue(j)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : vs.value ? (Zt(), Kn(DD, {
              key: 2,
              onEditTranslation: co,
              onApplyTranslation: A,
              onSkipTranslation: ce,
              onSelectPreviousSegment: ue(j),
              onSelectNextSegment: ue(O)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Zt(), Kn(tD, {
              key: 1,
              class: D6({ "mb-0": !n.value }),
              onConfigureOptions: Ve,
              onEditTranslation: co,
              onApplyTranslation: A,
              onSkipTranslation: ce,
              onSelectPreviousSegment: ue(j),
              onRetryTranslation: Or
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Zt(), Kn(ue(R), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Rt(() => [
            xt(ue(gt), { class: "mt-0" })
          ]),
          _: 1
        })),
        xt(mA, {
          active: t.value,
          "onUpdate:active": un[0] || (un[0] = (ft) => t.value = ft)
        }, null, 8, ["active"]),
        xt(jT, {
          modelValue: _s.value,
          "onUpdate:modelValue": un[1] || (un[1] = (ft) => _s.value = ft),
          onDiscardTranslation: I
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
const J6 = window.Vue.resolveDirective, ur = window.Vue.withDirectives, zt = window.Vue.openBlock, Ln = window.Vue.createElementBlock, dr = window.Vue.createCommentVNode, gr = window.Vue.Transition, yo = window.Vue.withCtx, Qo = window.Vue.createVNode, ga = window.Vue.createElementVNode, Qn = window.Vue.unref, Z6 = window.Vue.renderList, eP = window.Vue.Fragment, tP = window.Vue.normalizeClass, bh = window.Vue.createBlock, nP = window.Vue.toDisplayString, oP = window.Vue.createTextVNode, sP = { class: "sx-quick-tutorial" }, aP = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, iP = {
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
    }, s = (r) => r === n.value, a = fs();
    return (r, l) => {
      const c = J6("i18n");
      return zt(), Ln("section", sP, [
        Qo(Qn(R), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: yo(() => [
            ga("section", aP, [
              Qo(gr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: yo(() => [
                  s(1) ? ur((zt(), Ln("h2", iP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? ur((zt(), Ln("h2", rP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : dr("", !0)
                ]),
                _: 1
              })
            ]),
            ga("section", lP, [
              Qo(gr, { name: "mw-ui-animation-slide-start" }, {
                default: yo(() => [
                  s(1) ? (zt(), Ln("div", {
                    key: "illustration-1",
                    innerHTML: Qn(Q6)
                  }, null, 8, cP)) : s(2) ? (zt(), Ln("div", {
                    key: "illustration-2",
                    innerHTML: Qn(Y6)
                  }, null, 8, uP)) : dr("", !0)
                ]),
                _: 1
              })
            ]),
            ga("div", dP, [
              (zt(!0), Ln(eP, null, Z6(t.value, (u) => (zt(), Ln("span", {
                key: `dot-${u}`,
                class: tP(["dot mx-1", { "dot-active": s(u) }]),
                role: "button",
                onClick: (i) => n.value = u
              }, null, 10, gP))), 128))
            ]),
            ga("section", mP, [
              Qo(gr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: yo(() => [
                  s(1) ? ur((zt(), Ln("h3", pP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? ur((zt(), Ln("h3", hP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : dr("", !0)
                ]),
                _: 1
              })
            ]),
            ga("div", fP, [
              Qo(gr, {
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
                      Qo(Qn(wP), { icon: Qn(ps) }, null, 8, ["icon"])
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
                  }, 8, ["onClick"])) : dr("", !0)
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
const RP = window.Vue.unref, ma = window.Vue.createElementVNode, Lh = window.Vue.resolveDirective, Jc = window.Vue.withDirectives, zP = window.Vue.normalizeClass, OP = window.Vue.openBlock, jP = window.Vue.createElementBlock, HP = window.Vue.createCommentVNode, qP = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, GP = { class: "sx-editor__feedback-overlay-content px-4" }, WP = ["innerHTML"], XP = { class: "sx-editor__feedback-overlay-content__title" }, KP = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, Zc = window.Vue.computed, YP = {
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
    const t = e, { targetLanguageURLParameter: n } = D(), o = Zc(
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
      const c = Lh("i18n"), u = Lh("i18n-html");
      return e.showFeedback ? (OP(), jP("div", qP, [
        ma("div", GP, [
          ma("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: RP(IP)
          }, null, 8, WP),
          Jc(ma("h2", XP, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Jc(ma("p", KP, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Jc(ma("p", {
            class: zP(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [u, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : HP("", !0);
    };
  }
}, QP = window.Vuex.useStore, JP = () => {
  const e = QP(), t = pd(), { selectNextTranslationUnit: n } = ws(), {
    isSectionTitleSelected: o,
    sourceSection: s,
    selectedContentTranslationUnit: a
  } = ae(), { getCurrentTitleByLanguage: r } = cn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: c
  } = D(), { currentMTProvider: u } = pt(e);
  return (i) => x(void 0, null, function* () {
    if (!o.value) {
      const d = document.createElement("div");
      d.innerHTML = i, d.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = d.innerHTML;
    }
    a.value instanceof dt && (i = (yield ov(
      i,
      r(c.value, l.value),
      c.value
    )) || i), s.value.setTranslationForSelectedTranslationUnit(
      i,
      u.value
    ), t(), n();
  });
};
const Qe = window.Vue.unref, eu = window.Vue.openBlock, tu = window.Vue.createBlock, Th = window.Vue.createCommentVNode, Ah = window.Vue.createVNode, ZP = window.Vue.createElementVNode, eB = window.Vue.withCtx, tB = { class: "sx-editor__editing-surface-container grow" }, nu = window.Vue.ref, nB = window.Vue.computed;
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
    const t = e, n = nu(!1), o = tt(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: c, originalContent: u, title: i } = history.state, d = nu(null), g = nu(!1), { logEditorSegmentAddEvent: m, logEditorSegmentEditEvent: p } = uv(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = D(), { isSectionTitleSelected: w, sourceSection: v } = ae(), y = nB(
      () => sn.calculateScore(
        d.value,
        c,
        f.value
      )
    ), C = JP(), _ = (k) => x(this, null, function* () {
      d.value = k, g.value = !0;
      const E = new Promise((L) => setTimeout(L, 2e3));
      let M = Promise.resolve();
      r ? v.value.editedTranslation = k : M = C(k), y.value === 0 && l ? m() : y.value > 0 && p(), yield Promise.all([E, M]), g.value = !1, a();
    });
    return r ? mw.cx.eventlogging.stats.publishEditorStepAccess() : mw.cx.eventlogging.stats.editingStepAccess(!0), (k, E) => (eu(), tu(Qe(R), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: eB(() => [
        Qe(u) ? (eu(), tu(UP, {
          key: 0,
          language: Qe(h),
          dir: Qe(q.getDir)(Qe(h)),
          "original-content": Qe(u)
        }, null, 8, ["language", "dir", "original-content"])) : Th("", !0),
        n.value ? Th("", !0) : (eu(), tu(Qe(gt), { key: 1 })),
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
const en = window.Vue.unref, Co = window.Vue.createVNode, pa = window.Vue.withCtx, gB = window.Vue.resolveDirective, mB = window.Vue.withDirectives, pB = window.Vue.openBlock, hB = window.Vue.createBlock, Dh = window.Codex.CdxButton, Ph = window.Codex.CdxIcon, fB = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = tt(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = gB("i18n");
      return pB(), hB(en(R), { class: "ma-0 sx-publisher__header" }, {
        default: pa(() => [
          Co(en(b), {
            shrink: "",
            class: "me-2"
          }, {
            default: pa(() => [
              Co(en(Dh), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: pa(() => [
                  Co(en(Ph), { icon: en(ms) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          mB(Co(en(b), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Co(en(b), { shrink: "" }, {
            default: pa(() => [
              Co(en(Dh), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: pa(() => [
                  Co(en(Ph), { icon: en(pC) }, null, 8, ["icon"])
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
const ou = window.Vue.createElementVNode, Fh = window.Vue.toDisplayString, su = window.Vue.unref, au = window.Vue.withCtx, Nh = window.Vue.createVNode, _B = window.Vue.openBlock, SB = window.Vue.createBlock, yB = window.Vue.createCommentVNode, CB = ["innerHTML"], xB = ["textContent"], bB = ["textContent"], iu = window.Vue.computed, kB = {
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
    }, s = iu(() => o[n.status].svg), a = iu(() => o[n.status].title), r = iu(() => o[n.status].subtitle);
    return (l, c) => e.active ? (_B(), SB(su(Vt), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: au(() => [
        Nh(su(R), { class: "ma-4" }, {
          default: au(() => [
            Nh(su(b), null, {
              default: au(() => [
                ou("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, CB),
                ou("h2", {
                  textContent: Fh(a.value)
                }, null, 8, xB),
                ou("p", {
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
const ut = window.Vue.unref, Ot = window.Vue.createVNode, Tn = window.Vue.withCtx, $B = window.Vue.resolveDirective, VB = window.Vue.withDirectives, Mh = window.Vue.toDisplayString, EB = window.Vue.createTextVNode, ru = window.Vue.openBlock, Uh = window.Vue.createElementBlock, LB = window.Vue.createCommentVNode, Ih = window.Vue.createElementVNode, TB = window.Vue.createBlock, AB = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, DB = ["src"], PB = ["textContent"], BB = window.Vue.computed, FB = window.Vue.inject, NB = window.Vue.ref, Rh = window.Codex.CdxButton, MB = window.Codex.CdxIcon, UB = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: aw,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = NB(""), s = () => n("close"), a = () => n("publish", o.value), r = FB("breakpoints"), l = BB(() => r.value.mobile);
    return (c, u) => {
      const i = $B("i18n");
      return e.active && e.captchaDetails ? (ru(), TB(ut(Vt), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: Tn(() => [
          Ot(ut(R), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: Tn(() => [
              Ot(ut(b), {
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
                      Ot(ut(MB), { icon: ut(ms) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              VB(Ot(ut(b), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Ot(ut(b), {
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
          Ot(ut(Cr))
        ]),
        default: Tn(() => [
          Ih("div", AB, [
            e.captchaDetails.type === "image" ? (ru(), Uh("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, DB)) : (ru(), Uh("p", {
              key: 1,
              textContent: Mh(e.captchaDetails.question)
            }, null, 8, PB)),
            u[1] || (u[1] = Ih("p", { class: "mt-0" }, null, -1)),
            Ot(ut(R), { class: "ma-0" }, {
              default: Tn(() => [
                Ot(ut(b), null, {
                  default: Tn(() => [
                    Ot(ut(Cu), {
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
const Jn = window.Vue.unref, mr = window.Vue.createVNode, Jo = window.Vue.withCtx, Zo = window.Vue.createElementVNode, IB = window.Vue.resolveDirective, RB = window.Vue.withDirectives, zB = window.Vue.renderList, OB = window.Vue.Fragment, lu = window.Vue.openBlock, jB = window.Vue.createElementBlock, zh = window.Vue.toDisplayString, Oh = window.Vue.createTextVNode, HB = window.Vue.isRef, qB = window.Vue.normalizeClass, jh = window.Vue.createBlock, GB = { class: "mw-ui-dialog__header" }, WB = { class: "row ma-0 px-4 py-3" }, XB = { class: "col shrink justify-center" }, KB = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, YB = { class: "mb-0" }, QB = { class: "pa-4" }, JB = window.Codex.CdxField, ZB = window.Codex.CdxRadio, e9 = window.Vuex.useStore, pr = window.Vue.computed, t9 = window.Codex.CdxButton, n9 = window.Codex.CdxIcon, o9 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = e9(), { target: s, PUBLISHING_TARGETS: a } = Tt(), r = pr(() => o.state.translator.isAnon), l = fe(), { sourceSection: c } = ae(), { isCurrentSectionPresent: u, isPresentLeadSection: i } = ht(), d = pr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), g = pr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), m = pr(() => {
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
      return lu(), jh(Jn(Vt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: h.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: f[1] || (f[1] = (v) => h.$emit("update:active", v)),
        onClose: p
      }, {
        header: Jo(() => [
          Zo("div", GB, [
            Zo("div", WB, [
              Zo("div", XB, [
                mr(Jn(t9), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": h.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: Jo(() => [
                    mr(Jn(n9), { icon: Jn(Wf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Zo("div", KB, [
                RB(Zo("h4", YB, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            mr(Jn(Cr))
          ])
        ]),
        default: Jo(() => [
          Zo("div", QB, [
            mr(Jn(JB), { "is-fieldset": "" }, {
              default: Jo(() => [
                (lu(!0), jB(OB, null, zB(m.value, (v, y) => (lu(), jh(Jn(ZB), {
                  key: "publish-options-radio-" + v.value,
                  modelValue: Jn(s),
                  "onUpdate:modelValue": [
                    f[0] || (f[0] = (C) => HB(s) ? s.value = C : null),
                    p
                  ],
                  class: qB(y < m.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": v.value,
                  disabled: v.disabled,
                  name: "publish-options"
                }, {
                  description: Jo(() => [
                    Oh(zh(v.description), 1)
                  ]),
                  default: Jo(() => [
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
const jt = window.Vue.unref, Hh = window.Vue.toDisplayString, qh = window.Vue.createElementVNode, s9 = window.Vue.resolveDirective, es = window.Vue.createVNode, a9 = window.Vue.withDirectives, ha = window.Vue.withCtx, cu = window.Vue.openBlock, Gh = window.Vue.createBlock, Wh = window.Vue.createCommentVNode, i9 = window.Vue.Fragment, r9 = window.Vue.createElementBlock, l9 = window.Vue.normalizeClass, c9 = ["textContent"], u9 = ["textContent"], ts = window.Vue.computed, Xh = window.Vue.ref, d9 = window.Vue.watch, Kh = window.Codex.CdxButton, Yh = window.Codex.CdxIcon, g9 = window.Codex.CdxMessage, m9 = {
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
    const s = ts(
      () => {
        var m;
        return (m = t.publishFeedbackMessages) == null ? void 0 : m[n.value];
      }
    ), a = ts(() => {
      var m;
      return ((m = s.value) == null ? void 0 : m.status) || "notice";
    }), r = ts(() => a.value === "notice"), l = ts(
      () => `sx-publisher__review-info--${a.value}`
    ), c = fe(), u = ts(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.text;
    }), i = ts(() => {
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
      return cu(), Gh(jt(g9), {
        type: a.value,
        class: l9(["sx-publisher__review-info", l.value]),
        icon: r.value ? jt(wC) : null
      }, {
        default: ha(() => [
          qh("h5", {
            textContent: Hh(i.value)
          }, null, 8, c9),
          r.value ? Wh("", !0) : (cu(), r9(i9, { key: 0 }, [
            qh("p", {
              textContent: Hh(u.value)
            }, null, 8, u9),
            es(jt(R), {
              justify: "between",
              class: "ma-0"
            }, {
              default: ha(() => [
                a9(es(jt(b), {
                  ref_key: "learnMoreContainer",
                  ref: o,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (cu(), Gh(jt(b), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: ha(() => [
                    es(jt(Kh), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: d
                    }, {
                      default: ha(() => [
                        es(jt(Yh), { icon: jt(Zu) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    es(jt(Kh), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: ha(() => [
                        es(jt(Yh), { icon: jt(ps) }, null, 8, ["icon"])
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
  const e = h9(), { currentTranslation: t } = Xt(), { currentMTProvider: n } = pt(e), { currentTargetPageTitle: o } = nt(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = D(), { sourceSection: c } = ae(), u = Lt(), i = f9(() => {
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
  } = D(), { sourceSection: s } = ae(), { targetPageTitleForPublishing: a } = Ua(), r = lv(), { isPresentLeadSection: l } = ht(), { sectionSuggestion: c } = Le(), u = v9(
    () => {
      var _, k;
      return l.value ? no.LEAD_SECTION_DUMMY_TITLE : (k = c.value) == null ? void 0 : k.presentSections[(_ = s.value) == null ? void 0 : _.sourceSectionTitleForPublishing];
    }
  ), { target: i, PUBLISHING_TARGETS: d } = Tt(), g = Qh(!1), m = Qh("pending"), p = () => g.value = !1, h = pd(), {
    logPublishAttemptEvent: f,
    logPublishSuccessEvent: w,
    logPublishFailureEvent: v
  } = w9(), y = (_, k) => x(void 0, null, function* () {
    f();
    const E = yield h();
    if (E instanceof so)
      return v(), { publishFeedbackMessage: E, targetUrl: null };
    const M = E, L = a.value, V = {
      html: p9(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: L,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: r.value,
      publishTarget: i.value,
      sectionTranslationId: M
    };
    u.value && (V.existingSectionTitle = u.value), _ && (V.captchaId = _, V.captchaWord = k);
    const B = yield $t.publishTranslation(
      V
    );
    return B.publishFeedbackMessage === null ? w(B.pageId, B.revisionId) : v(), B;
  });
  return {
    closePublishDialog: p,
    doPublish: (_ = null, k = null) => x(void 0, null, function* () {
      m.value = "pending", g.value = !0;
      let E;
      try {
        E = yield y(
          k == null ? void 0 : k.id,
          _
        );
      } catch (M) {
        if (M instanceof cs)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw mw.cx.eventlogging.stats.publishFailed(!0), M;
      }
      return E;
    }),
    isPublishDialogActive: g,
    publishStatus: m
  };
}, y9 = window.Vue.computed, C9 = () => {
  const e = tt(), { sourceSection: t } = ae(), { getCurrentTitleByLanguage: n } = cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = D(), a = y9(
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
  const { targetLanguageURLParameter: e } = D(), { sourceSection: t } = ae();
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
  const e = x9(), { target: t, PUBLISHING_TARGETS: n } = Tt(), { targetPageTitleForPublishing: o } = Ua(), s = b9([]), a = k9(
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
  const { target: e, PUBLISHING_TARGETS: t } = Tt(), { currentSourcePage: n } = nt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = D(), { sourceSection: a } = ae(), { targetPageTitleForPublishing: r } = Ua();
  return (l) => x(void 0, null, function* () {
    const c = r.value, u = n.value.title, i = new mw.Title(u), d = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== d.user)
      try {
        yield Tr.addWikibaseLink(
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
const de = window.Vue.unref, qe = window.Vue.createVNode, L9 = window.Vue.resolveDirective, uu = window.Vue.withDirectives, fa = window.Vue.openBlock, wa = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Zh = window.Vue.toDisplayString, T9 = window.Vue.createTextVNode, ns = window.Vue.createElementVNode, os = window.Vue.withCtx, ef = window.Vue.normalizeClass, A9 = { class: "sx-publisher" }, D9 = {
  key: 0,
  class: "mb-2"
}, P9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, B9 = { key: 0 }, F9 = { key: 1 }, N9 = ["href"], M9 = ["innerHTML"], U9 = { class: "sx-publisher__section-preview pa-5" }, I9 = ["innerHTML"], hr = window.Vue.computed, R9 = window.Vue.onMounted, z9 = window.Vue.ref, O9 = window.Vue.watch, tf = window.Codex.CdxButton, du = window.Codex.CdxIcon, j9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = ae(), { sectionSuggestion: n } = Le(), { isCurrentSectionPresent: o, isPresentLeadSection: s } = ht(), {
      targetLanguageURLParameter: a,
      sectionURLParameter: r
    } = D(), l = fe(), c = hr(
      () => {
        var F;
        return s.value ? l.i18n("cx-sx-present-lead-section-label") : (F = t.value) == null ? void 0 : F.title;
      }
    ), { target: u, PUBLISHING_TARGETS: i } = Tt(), d = hr(() => u.value === i.SANDBOX ? l.i18n(
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
      clearPublishFeedbackMessages: y,
      initializePublishFeedbackMessages: C
    } = $9(), _ = V9(), { doPublish: k, isPublishDialogActive: E, publishStatus: M, closePublishDialog: L } = S9(), V = (F = null) => x(this, null, function* () {
      if (w.value)
        return;
      const z = yield k(F, g.value);
      if (!z)
        return;
      const { publishFeedbackMessage: K, targetUrl: J } = z;
      if (p(K)) {
        L();
        return;
      } else
        K && v(K);
      M.value = w.value ? "failure" : "success", setTimeout(() => {
        if (w.value) {
          L();
          return;
        }
        _(J);
      }, 1e3);
    });
    R9(() => {
      C(), mw.cx.eventlogging.stats.publishStepAccess();
    });
    const B = C9(), X = z9(!1), se = () => X.value = !0;
    O9(X, (F) => {
      F || (y(), C());
    });
    const ee = hr(() => {
      var F, z;
      return s.value ? l.i18n("cx-sx-present-lead-section-label") : (z = (F = n.value) == null ? void 0 : F.presentSections) == null ? void 0 : z[r.value];
    }), ne = hr(() => {
      var K;
      const F = Q.getPageUrl(
        a.value,
        (K = n.value) == null ? void 0 : K.targetTitle
      ), z = s.value ? "" : (ee.value || "").replace(/ /g, "_");
      return `${F}#${z}`;
    });
    return (F, z) => {
      const K = L9("i18n");
      return fa(), wa("section", A9, [
        qe(fB, {
          "is-publishing-disabled": de(w),
          onPublishTranslation: V
        }, null, 8, ["is-publishing-disabled"]),
        ns("div", {
          class: ef(["sx-publisher__publish-panel", de(o) ? "py-4" : "pa-4"])
        }, [
          de(o) ? (fa(), wa("div", P9, [
            de(s) ? uu((fa(), wa("h5", B9, null, 512)), [
              [K, void 0, "cx-sx-publisher-publish-panel-existing-lead-section-notice"]
            ]) : uu((fa(), wa("h5", F9, null, 512)), [
              [K, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            ns("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: ne.value,
              target: "_blank"
            }, [
              T9(Zh(ee.value) + " ", 1),
              qe(de(du), { icon: de(Pa) }, null, 8, ["icon"])
            ], 8, N9)
          ])) : uu((fa(), wa("h5", D9, null, 512)), [
            [K, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          ns("div", {
            class: ef({ "px-4 mt-4": de(o) })
          }, [
            ns("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: d.value
            }, null, 8, M9),
            qe(de(R), {
              justify: "end",
              class: "ma-0"
            }, {
              default: os(() => [
                qe(de(b), { shrink: "" }, {
                  default: os(() => [
                    qe(de(tf), {
                      weight: "quiet",
                      "aria-label": F.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: se
                    }, {
                      default: os(() => [
                        qe(de(du), { icon: de(VC) }, null, 8, ["icon"])
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
        ns("section", U9, [
          qe(de(R), { class: "pb-5 ma-0" }, {
            default: os(() => [
              qe(de(b), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: Zh(c.value)
              }, null, 8, ["textContent"]),
              qe(de(b), { shrink: "" }, {
                default: os(() => [
                  qe(de(tf), {
                    weight: "quiet",
                    "aria-label": F.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: de(B)
                  }, {
                    default: os(() => [
                      qe(de(du), { icon: de(Qu) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          ns("div", {
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
          onPublish: z[1] || (z[1] = (J) => V(J))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        qe(kB, {
          active: de(E),
          status: de(M)
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
const Ht = window.Vue.unref, Zn = window.Vue.createVNode, xo = window.Vue.withCtx, gu = window.Vue.toDisplayString, mu = window.Vue.createElementVNode, nf = window.Vue.openBlock, of = window.Vue.createBlock, J9 = window.Vue.createCommentVNode, Z9 = ["textContent"], e7 = ["textContent"], t7 = ["textContent"], mv = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: us,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (nf(), of(Ht(R), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Ht(q.getDir)(e.suggestion.language)
    }, {
      default: xo(() => [
        Zn(Ht(b), { shrink: "" }, {
          default: xo(() => [
            Zn(Ht(Mu), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Zn(Ht(b), { class: "ms-4" }, {
          default: xo(() => [
            Zn(Ht(R), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: xo(() => [
                Zn(Ht(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: xo(() => [
                    mu("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: gu(e.suggestion.title)
                    }, null, 8, Z9)
                  ]),
                  _: 1
                }),
                Zn(Ht(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: xo(() => [
                    mu("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: gu(e.suggestion.description)
                    }, null, 8, e7)
                  ]),
                  _: 1
                }),
                Zn(Ht(b), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: xo(() => [
                    e.suggestion.inFeaturedCollection ? (nf(), of(Ir, {
                      key: 0,
                      class: "me-2"
                    })) : J9("", !0),
                    Zn(Ht(Ze), {
                      icon: Ht(X0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    mu("small", {
                      textContent: gu((e.suggestion.langLinksCount || 0) + 1)
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
const sf = window.Vue.unref, va = window.Vue.openBlock, pu = window.Vue.createBlock, n7 = window.Vue.createCommentVNode, o7 = window.Vue.resolveDirective, s7 = window.Vue.withDirectives, af = window.Vue.createElementBlock, a7 = window.Vue.renderList, i7 = window.Vue.Fragment, r7 = window.Vue.normalizeClass, l7 = window.Vue.withCtx, c7 = {
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
    const { sourceLanguageURLParameter: t } = D(), n = rf(() => q.getAutonym(t.value)), o = e, s = u7(null), a = (u) => s.value = u, r = () => s.value = null, l = (u) => {
      var i;
      return ((i = o.selectedItem) == null ? void 0 : i.title) === u.title && !s.value || s.value === u.pageId;
    }, c = rf(() => o.searchInput);
    return (u, i) => {
      const d = o7("i18n");
      return va(), pu(sf(Je), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: l7(() => [
          e.searchResultsLoading ? (va(), pu(sf(gt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : e.searchResultsSlice.length === 0 ? s7((va(), af("p", c7, null, 512)), [
            [d, [
              c.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : n7("", !0),
          (va(!0), af(i7, null, a7(e.searchResultsSlice, (g) => (va(), pu(mv, {
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
const lf = window.Vue.toDisplayString, g7 = window.Vue.createElementVNode, fr = window.Vue.openBlock, cf = window.Vue.createElementBlock, m7 = window.Vue.createCommentVNode, p7 = window.Vue.renderList, h7 = window.Vue.Fragment, f7 = window.Vue.normalizeClass, uf = window.Vue.createBlock, w7 = window.Vue.unref, df = window.Vue.withCtx, v7 = ["textContent"], _7 = ["textContent"], S7 = window.Vue.ref, hu = {
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
    return (l, c) => (fr(), uf(w7(Je), { class: "sx-article-search__suggestions pa-0" }, {
      header: df(() => [
        g7("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: lf(e.cardTitle)
        }, null, 8, v7),
        e.cardSubtitle ? (fr(), cf("p", {
          key: 0,
          class: "ma-0 px-4 pb-2 sx-article-search__suggestions-subtitle",
          textContent: lf(e.cardSubtitle)
        }, null, 8, _7)) : m7("", !0)
      ]),
      default: df(() => [
        (fr(!0), cf(h7, null, p7(e.suggestions, (u) => (fr(), uf(mv, {
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
  const { supportedLanguageCodes: e } = Da(), { targetLanguageURLParameter: t } = D();
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
}, E7 = window.Vuex.useStore, mf = window.Vue.ref, wr = window.Vue.computed, pf = window.Vue.watch, L7 = (e) => {
  const t = E7(), n = io(), { fetchPageSuggestionsByFeaturedCollections: o } = Ku(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = D(), { featuredCollection: r } = Wt(), { isFilteringByFeaturedCollection: l } = ro(), c = mf([]), u = mf(!1), i = wr(
    () => !!r.value && !u.value
  ), d = () => {
    var h;
    return !l() && ((h = r.value) == null ? void 0 : h.name) && g.value.length === 0;
  }, g = wr(() => {
    var h;
    return t.getters["suggestions/getCollectionPageSuggestions"](
      s.value,
      a.value,
      (h = r.value) == null ? void 0 : h.name
    );
  }), m = wr(() => {
    var h;
    return t.getters["suggestions/getCollectionSectionSuggestions"](
      s.value,
      a.value,
      (h = r.value) == null ? void 0 : h.name
    );
  }), p = wr(() => [
    ...g.value || [],
    ...m.value || []
  ].slice(0, e));
  return pf(
    p,
    (h) => x(void 0, null, function* () {
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
    () => x(void 0, null, function* () {
      u.value = !1, d() && (c.value = [], yield o());
    }),
    { immediate: !0 }
  ), {
    featuredCollectionPages: c,
    featuredCollectionPagesLoading: i
  };
};
const T7 = window.Vue.resolveDirective, A7 = window.Vue.createElementVNode, fu = window.Vue.withDirectives, re = window.Vue.unref, _a = window.Vue.withCtx, tn = window.Vue.createVNode, ss = window.Vue.openBlock, wu = window.Vue.createBlock, D7 = window.Vue.createCommentVNode, vu = window.Vue.createElementBlock, P7 = window.Vue.Fragment, B7 = window.Vue.vShow, Sa = window.Vue.withModifiers, ya = window.Vue.withKeys, F7 = ["onKeydown"], N7 = { class: "mb-0" }, M7 = {
  key: 3,
  class: "sx-article-search__empty-state"
}, as = window.Vue.ref, U7 = window.Vue.onMounted, bo = window.Vue.computed, hf = window.Vue.watch, I7 = window.Vue.inject, R7 = window.Vuex.useStore, z7 = window.Codex.CdxButton, O7 = window.Codex.CdxIcon, j7 = window.Codex.CdxSearchInput, ff = 3, H7 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = as(""), n = as(!1), o = as(null), s = as(!1), { previousLanguages: a, addLanguageToHistory: r } = V7(), l = R7(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = D(), { supportedLanguageCodes: i } = Da(), d = io(), g = as(!1), { searchResultsLoading: m, searchResultsSlice: p } = qw(
      c,
      t
    ), { getSuggestedSourceLanguages: h } = k7(), f = h(a), w = x7(
      f
    ), v = tt(), { fetchAllTranslations: y } = hs();
    U7(() => x(this, null, function* () {
      var U;
      y(), r(c.value), (U = o.value) == null || U.focus();
    }));
    const { featuredCollectionPages: C, featuredCollectionPagesLoading: _ } = L7(ff), k = () => {
      v.push({ name: "dashboard" });
    }, E = ow(), M = (U) => {
      E(U, u.value), r(U);
    }, L = (U) => {
      if (U === "other") {
        s.value = !0;
        return;
      }
      M(U);
    }, V = Lt();
    hf(t, () => {
      n.value || (n.value = !0, V({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const B = () => {
      s.value = !1;
    }, X = (U) => {
      s.value = !1, L(U);
    }, { fetchPreviousEditsInSource: se, previousEditsInSource: ee } = Of(), ne = as([]), F = () => {
      g.value = !0, se().then(() => {
        if (ee.value.length > 0)
          return d(
            c.value,
            ee.value
          );
      }).then(
        () => ee.value.map(
          (U) => l.getters["mediawiki/getPage"](c.value, U)
        )
      ).then((U) => {
        U = U.slice(0, ff), U = U.sort(
          (H, G) => ee.value.indexOf(H.title) - ee.value.indexOf(G.title)
        ), ne.value = U;
      }).finally(() => {
        g.value = !1;
      });
    };
    hf(
      c,
      () => {
        var U;
        l.dispatch("mediawiki/fetchNearbyPages"), F(), (U = o.value) == null || U.focus();
      },
      { immediate: !0 }
    );
    const z = bo(() => l.getters["mediawiki/getNearbyPages"]), K = I7("breakpoints"), J = bo(() => K.value.mobile), $e = Ma(), xe = bo(
      () => ne.value && ne.value.length && !_.value
    ), _e = bo(
      () => z.value && z.value.length && !g.value
    ), Oe = bo(
      () => C.value && C.value.length > 0
    ), O = bo(() => Oe.value ? C.value || [] : xe.value ? ne.value || [] : _e.value ? z.value || [] : []), { next: j, prev: ce, keyboardNavigationContainer: S, selectedItem: A } = Ow(
      t,
      p,
      O
    ), T = (U) => $e(
      U.title,
      c.value,
      u.value,
      N.value
    ), N = bo(() => t.value ? "search_result" : xe.value ? "suggestion_recent_edit" : _e.value ? "suggestion_nearby" : "");
    return (U, H) => {
      const G = T7("i18n");
      return ss(), vu("section", {
        ref_key: "keyboardNavigationContainer",
        ref: S,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          H[6] || (H[6] = ya(Sa((...I) => re(j) && re(j)(...I), ["stop", "prevent"]), ["tab"])),
          H[7] || (H[7] = ya(Sa((...I) => re(j) && re(j)(...I), ["stop", "prevent"]), ["down"])),
          H[8] || (H[8] = ya(Sa((...I) => re(ce) && re(ce)(...I), ["stop", "prevent"]), ["up"])),
          ya(Sa(k, ["stop", "prevent"]), ["esc"]),
          H[9] || (H[9] = ya(Sa((I) => T(re(A)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        tn(re(R), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: _a(() => [
            tn(re(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: _a(() => [
                fu(A7("h5", N7, null, 512), [
                  [G, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            tn(re(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: _a(() => [
                tn(re(z7), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": U.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: k
                }, {
                  default: _a(() => [
                    tn(re(O7), { icon: re(ms) }, null, 8, ["icon"])
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
          "onUpdate:modelValue": H[0] || (H[0] = (I) => t.value = I),
          class: "sx-article-search__search-input",
          placeholder: U.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        tn(re(La), {
          class: "sx-article-search__language-button-group",
          items: re(w),
          active: re(c),
          onSelect: L
        }, null, 8, ["items", "active"]),
        t.value ? D7("", !0) : (ss(), vu(P7, { key: 0 }, [
          Oe.value ? (ss(), wu(hu, {
            key: 0,
            "card-title": U.$i18n("cx-sx-article-search-community-priorities-title"),
            "card-subtitle": U.$i18n("cx-sx-article-search-community-priorities-subtitle"),
            suggestions: re(C),
            "selected-item": re(A),
            onSuggestionClicked: H[1] || (H[1] = (I) => T(I))
          }, null, 8, ["card-title", "card-subtitle", "suggestions", "selected-item"])) : xe.value ? (ss(), wu(hu, {
            key: 1,
            "card-title": U.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: ne.value,
            "selected-item": re(A),
            onSuggestionClicked: H[2] || (H[2] = (I) => T(I))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : _e.value ? (ss(), wu(hu, {
            key: 2,
            "card-title": U.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: z.value,
            onSuggestionClicked: H[3] || (H[3] = (I) => T(I))
          }, null, 8, ["card-title", "suggestions"])) : fu((ss(), vu("p", M7, null, 512)), [
            [G, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        fu(tn(d7, {
          "search-input": t.value,
          "search-results-loading": re(m),
          "search-results-slice": re(p),
          "selected-item": re(A),
          onSuggestionClicked: H[4] || (H[4] = (I) => T(I))
        }, null, 8, ["search-input", "search-results-loading", "search-results-slice", "selected-item"]), [
          [B7, !!t.value]
        ]),
        tn(re(Vt), {
          value: s.value,
          "onUpdate:value": H[5] || (H[5] = (I) => s.value = I),
          class: "sx-article-search-language-selector",
          fullscreen: J.value,
          header: J.value,
          title: U.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: B
        }, {
          default: _a(() => [
            tn(re(jw), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: re(i),
              suggestions: re(f),
              placeholder: U.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: X,
              onClose: B
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
  const e = Ma(), { logDashboardOpenEvent: t } = Xw(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o,
    pageURLParameter: s
  } = D();
  return () => x(void 0, null, function* () {
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
      } = D();
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
      } = D();
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
], hd = gk({
  history: db(),
  routes: tF
}), _u = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, nF = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
hd.beforeEach((e, t, n) => {
  const o = eF();
  if (mw.user.isAnon() || yf.assertUser().catch((i) => {
    i instanceof cs && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = Z7(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: c
  } = D();
  if (!!(a.value && r.value && l.value)) {
    if (nF(
      a.value,
      r.value,
      l.value
    )) {
      const d = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      _u(e.name, d, n);
    } else
      e.name === "sx-translation-confirmer" && s(), _u(e.name, "sx-translation-confirmer", n);
    return;
  }
  c(), _u(e.name, "dashboard", n);
});
hd.afterEach((e, t) => {
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
}, sF = window.Vue.createApp, aF = mw.config.get("wgUserLanguage"), iF = "en", rF = mw.messages.values || {}, Eo = sF(tx);
Eo.use(hd);
Eo.use(Px);
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
