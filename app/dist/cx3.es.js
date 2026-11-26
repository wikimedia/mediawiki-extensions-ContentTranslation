var _v = Object.defineProperty, Sv = Object.defineProperties;
var yv = Object.getOwnPropertyDescriptors;
var _d = Object.getOwnPropertySymbols;
var Cv = Object.prototype.hasOwnProperty, xv = Object.prototype.propertyIsEnumerable;
var Sd = (e, t, n) => t in e ? _v(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, he = (e, t) => {
  for (var n in t || (t = {}))
    Cv.call(t, n) && Sd(e, n, t[n]);
  if (_d)
    for (var n of _d(t))
      xv.call(t, n) && Sd(e, n, t[n]);
  return e;
}, Ke = (e, t) => Sv(e, yv(t));
var x = (e, t, n) => new Promise((o, s) => {
  var a = (c) => {
    try {
      l(n.next(c));
    } catch (u) {
      s(u);
    }
  }, i = (c) => {
    try {
      l(n.throw(c));
    } catch (u) {
      s(u);
    }
  }, l = (c) => c.done ? o(c.value) : Promise.resolve(c.value).then(a, i);
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
    CdxMenu: i,
    CdxMessage: l,
    CdxTabs: c,
    CdxTab: u,
    CdxField: r,
    CdxRadio: d
  } = require("../codex.js");
  window.Codex = {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: o,
    CdxSearchInput: s,
    CdxTextInput: a,
    CdxMenu: i,
    CdxMessage: l,
    CdxTabs: c,
    CdxTab: u,
    CdxField: r,
    CdxRadio: d
  };
}
const we = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, bv = {
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
}, kv = window.Vue.toDisplayString, Xr = window.Vue.openBlock, Kr = window.Vue.createElementBlock, $v = window.Vue.createCommentVNode, yd = window.Vue.createElementVNode, Vv = window.Vue.normalizeStyle, Ev = window.Vue.normalizeClass, Lv = ["width", "height", "aria-labelledby"], Tv = ["id"], Av = ["d"];
function Dv(e, t, n, o, s, a) {
  return Xr(), Kr("span", {
    class: Ev(["mw-ui-icon notranslate", a.classes])
  }, [
    (Xr(), Kr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...i) => a.handleClick && a.handleClick(...i))
    }, [
      n.iconName ? (Xr(), Kr("title", {
        key: 0,
        id: n.iconName
      }, kv(n.iconName), 9, Tv)) : $v("", !0),
      yd("g", {
        style: Vv({ fill: n.iconColor })
      }, [
        yd("path", { d: a.iconImagePath }, null, 8, Av)
      ], 4)
    ], 8, Lv))
  ], 2);
}
const Ze = /* @__PURE__ */ we(bv, [["render", Dv]]);
const Pv = {
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
}, Bv = window.Vue.renderSlot, Fv = window.Vue.resolveComponent, Cd = window.Vue.normalizeClass, Ha = window.Vue.openBlock, Yr = window.Vue.createBlock, Qr = window.Vue.createCommentVNode, Nv = window.Vue.toDisplayString, Mv = window.Vue.createElementBlock, Uv = window.Vue.toHandlerKey, Iv = window.Vue.withModifiers, Rv = window.Vue.mergeProps, zv = window.Vue.createElementVNode, Ov = window.Vue.resolveDynamicComponent, jv = window.Vue.withCtx, Hv = { class: "mw-ui-button__content" }, qv = ["textContent"];
function Gv(e, t, n, o, s, a) {
  const i = Fv("mw-icon");
  return Ha(), Yr(Ov(a.component), {
    class: Cd(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: jv(() => [
      Bv(e.$slots, "default", {}, () => [
        zv("span", Hv, [
          n.icon ? (Ha(), Yr(i, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Cd(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Qr("", !0),
          !a.isIcon && n.label ? (Ha(), Mv("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Nv(n.label)
          }, null, 8, qv)) : Qr("", !0),
          n.indicator ? (Ha(), Yr(i, Rv({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Uv(a.indicatorClickEvent)]: t[0] || (t[0] = Iv((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Qr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Xe = /* @__PURE__ */ we(Pv, [["render", Gv]]);
const Wv = {
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
}, Xv = window.Vue.renderList, Kv = window.Vue.Fragment, Jr = window.Vue.openBlock, xd = window.Vue.createElementBlock, Yv = window.Vue.resolveComponent, Qv = window.Vue.withModifiers, Jv = window.Vue.mergeProps, Zv = window.Vue.createBlock, e0 = { class: "row mw-ui-button-group ma-0 pa-0" };
function t0(e, t, n, o, s, a) {
  const i = Yv("mw-button");
  return Jr(), xd("div", e0, [
    (Jr(!0), xd(Kv, null, Xv(n.items, (l) => (Jr(), Zv(i, Jv({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Qv((c) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const La = /* @__PURE__ */ we(Wv, [["render", t0]]);
const n0 = {
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
}, bd = window.Vue.renderSlot, o0 = window.Vue.toDisplayString, kd = window.Vue.openBlock, $d = window.Vue.createElementBlock, s0 = window.Vue.createCommentVNode, a0 = window.Vue.createElementVNode, i0 = { class: "mw-ui-card" }, r0 = ["textContent"], l0 = { class: "mw-ui-card__content" };
function c0(e, t, n, o, s, a) {
  return kd(), $d("div", i0, [
    bd(e.$slots, "header", {}, () => [
      n.title ? (kd(), $d("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: o0(n.title)
      }, null, 8, r0)) : s0("", !0)
    ]),
    a0("div", l0, [
      bd(e.$slots, "default")
    ])
  ]);
}
const Je = /* @__PURE__ */ we(n0, [["render", c0]]);
const u0 = {}, d0 = window.Vue.openBlock, g0 = window.Vue.createElementBlock, m0 = { class: "mw-ui-divider row" };
function p0(e, t) {
  return d0(), g0("div", m0);
}
const Cr = /* @__PURE__ */ we(u0, [["render", p0]]);
const h0 = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, f0 = window.Vue.renderSlot, w0 = window.Vue.resolveDynamicComponent, v0 = window.Vue.withCtx, _0 = window.Vue.openBlock, S0 = window.Vue.createBlock;
function y0(e, t, n, o, s, a) {
  return _0(), S0(w0(n.tag), { class: "mw-grid container" }, {
    default: v0(() => [
      f0(e.$slots, "default")
    ]),
    _: 3
  });
}
const C0 = /* @__PURE__ */ we(h0, [["render", y0]]), x0 = {
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
}, b0 = window.Vue.renderSlot, k0 = window.Vue.resolveDynamicComponent, $0 = window.Vue.normalizeClass, V0 = window.Vue.withCtx, E0 = window.Vue.openBlock, L0 = window.Vue.createBlock;
function T0(e, t, n, o, s, a) {
  return E0(), L0(k0(n.tag), {
    class: $0(a.classes)
  }, {
    default: V0(() => [
      b0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const R = /* @__PURE__ */ we(x0, [["render", T0]]), yu = ["mobile", "tablet", "desktop", "desktop-wide"], A0 = yu.reduce(
  (e, t) => Ke(he({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), D0 = {
  name: "MwCol",
  props: Ke(he({}, A0), {
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
}, P0 = window.Vue.renderSlot, B0 = window.Vue.resolveDynamicComponent, F0 = window.Vue.normalizeClass, N0 = window.Vue.withCtx, M0 = window.Vue.openBlock, U0 = window.Vue.createBlock;
function I0(e, t, n, o, s, a) {
  return M0(), U0(B0(n.tag), {
    class: F0(a.classes)
  }, {
    default: N0(() => [
      P0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const b = /* @__PURE__ */ we(D0, [["render", I0]]), R0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", z0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", xr = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", O0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, j0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", vf = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", H0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", q0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", br = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", G0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", W0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", X0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Vd = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", K0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", _f = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", Y0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", Q0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", J0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", Z0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", e_ = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Cu = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, t_ = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, n_ = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Sf = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", o_ = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const Zr = window.Vue.computed, s_ = window.Vue.watch, a_ = window.Vue.ref, i_ = window.Vue.nextTick, r_ = {
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
    const n = a_(null), o = Zr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Zr(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, i = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    s_(
      () => e.value,
      (c) => {
        c ? (i(), i_(() => {
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
}, Ed = window.Vue.normalizeClass, el = window.Vue.createElementVNode, tl = window.Vue.renderSlot, qa = window.Vue.resolveComponent, Ss = window.Vue.createVNode, nl = window.Vue.withCtx, Ld = window.Vue.createCommentVNode, l_ = window.Vue.withKeys, Td = window.Vue.openBlock, c_ = window.Vue.createElementBlock, u_ = window.Vue.Transition, d_ = window.Vue.normalizeStyle, g_ = window.Vue.createBlock, m_ = { class: "mw-ui-dialog__shell items-stretch" }, p_ = { class: "mw-ui-dialog__body" };
function h_(e, t, n, o, s, a) {
  const i = qa("mw-col"), l = qa("mw-button"), c = qa("mw-row"), u = qa("mw-divider");
  return Td(), g_(u_, {
    name: "mw-ui-animation-fade",
    style: d_(o.cssVars)
  }, {
    default: nl(() => [
      n.value ? (Td(), c_("div", {
        key: 0,
        ref: "root",
        class: Ed(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = l_((r) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        el("div", {
          class: Ed(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (r) => !n.persistent && o.close())
        }, null, 2),
        el("div", m_, [
          n.header ? tl(e.$slots, "header", { key: 0 }, () => [
            Ss(c, { class: "mw-ui-dialog__header" }, {
              default: nl(() => [
                Ss(i, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Ss(i, {
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
          ]) : Ld("", !0),
          el("div", p_, [
            tl(e.$slots, "default")
          ]),
          tl(e.$slots, "footer")
        ])
      ], 34)) : Ld("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const Vt = /* @__PURE__ */ we(r_, [["render", h_]]);
const f_ = {
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
      const t = he({}, e.$attrs);
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
}, Ad = window.Vue.renderSlot, w_ = window.Vue.resolveComponent, Ga = window.Vue.openBlock, ol = window.Vue.createBlock, Dd = window.Vue.createCommentVNode, v_ = window.Vue.resolveDynamicComponent, __ = window.Vue.toDisplayString, S_ = window.Vue.mergeProps, y_ = window.Vue.withModifiers, C_ = window.Vue.createElementVNode, x_ = window.Vue.normalizeClass, b_ = window.Vue.createElementBlock, k_ = { class: "mw-ui-input__content" };
function $_(e, t, n, o, s, a) {
  const i = w_("mw-icon");
  return Ga(), b_("div", {
    class: x_(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    C_("div", k_, [
      Ad(e.$slots, "icon", {}, () => [
        n.icon ? (Ga(), ol(i, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Dd("", !0)
      ]),
      (Ga(), ol(v_(n.type === "textarea" ? n.type : "input"), S_({
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
        textContent: __(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Ad(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ga(), ol(i, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = y_((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Dd("", !0)
      ])
    ])
  ], 2);
}
const xu = /* @__PURE__ */ we(f_, [["render", $_]]);
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
const V_ = {}, E_ = window.Vue.createElementVNode, L_ = window.Vue.openBlock, T_ = window.Vue.createElementBlock, A_ = { class: "mw-ui-spinner" };
function D_(e, t) {
  return L_(), T_("div", A_, t[0] || (t[0] = [
    E_("div", { class: "mw-ui-spinner__bounce" }, null, -1)
  ]));
}
const gt = /* @__PURE__ */ we(V_, [["render", D_]]), kt = {
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
const P_ = window.Vue.computed, B_ = {
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
      default: Sf
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
    const n = P_(() => {
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
}, Pd = window.Vue.normalizeStyle, Bd = window.Vue.openBlock, F_ = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const N_ = window.Vue.resolveComponent, M_ = window.Vue.createBlock;
function U_(e, t, n, o, s, a) {
  const i = N_("mw-ui-icon");
  return n.thumbnail ? (Bd(), F_("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Pd(o.style)
  }, null, 4)) : (Bd(), M_(i, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Pd(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Uu = /* @__PURE__ */ we(B_, [["render", U_]]);
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
const I_ = {
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
}, Fd = window.Vue.normalizeClass, Nd = window.Vue.normalizeStyle, R_ = window.Vue.createElementVNode, z_ = window.Vue.openBlock, O_ = window.Vue.createElementBlock, j_ = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function H_(e, t, n, o, s, a) {
  return z_(), O_("div", {
    class: Fd(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Nd(a.containerStyles)
  }, [
    R_("div", {
      class: Fd(["mw-progress-bar__bar", a.barClass]),
      style: Nd(a.barStyles)
    }, null, 6)
  ], 14, j_);
}
const yf = /* @__PURE__ */ we(I_, [["render", H_]]), q_ = (e, t, n, o) => (s) => {
  const a = s.clientY, i = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), l = (u) => {
    o.value = !1;
    let r = Math.min(
      i + u.clientY - a,
      e.value
    );
    r = Math.max(r, t.value), n.value.style.height = r + "px";
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
}, G_ = (e, t, n, o) => ({ initiateDrag: q_(
  e,
  t,
  n,
  o
) }), W_ = window.Vue.ref, Md = window.Vue.computed, X_ = (e, t, n, o) => {
  const s = W_(0), a = Md(
    () => t.value > e.value
  ), i = Md(
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
    isScrolledToEnd: i,
    scrollToStepByIndex: l,
    scrollable: a,
    scrollIndex: s
  };
};
const Wa = window.Vue.ref, K_ = window.Vue.onMounted, Ud = window.Vue.computed, Y_ = window.Vue.nextTick, Q_ = {
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
    const t = Wa(!0), n = Wa(null), o = Ud(
      () => Math.min(e.minHeight, s.value)
    ), s = Wa(1), { initiateDrag: a } = G_(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: i,
      scrollable: l,
      scrollIndex: c,
      scrollToStepByIndex: u,
      handleArrowUpClick: r
    } = X_(o, s, n, t), d = () => u(c.value + 1), g = Wa(null), m = Ud(() => ({
      "--collapsed-height": o.value + "px"
    })), p = () => {
      if (!n.value)
        return;
      const h = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, h) {
        let w = Math.min(h, s.value);
        w = Math.max(w, o.value), w === o.value && (t.value = !0), n.value.style.height = w + "px";
      }
    };
    return K_(() => x(this, null, function* () {
      var h;
      yield Y_(), s.value = n.value.scrollHeight, (h = g.value) == null || h.addEventListener(
        "pointerdown",
        a,
        !1
      ), window.addEventListener("resize", p);
    })), {
      contentRef: n,
      cssVars: m,
      dragIndicatorRef: g,
      handleArrowUpClick: r,
      isCollapsed: t,
      isScrolledToEnd: i,
      mwIconCollapse: n_,
      mwIconExpand: H0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), u(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: c,
      scrollToNextStep: d
    };
  }
}, J_ = window.Vue.renderSlot, Z_ = window.Vue.normalizeClass, Xa = window.Vue.createElementVNode, e1 = window.Vue.resolveComponent, t1 = window.Vue.createVNode, sl = window.Vue.openBlock, n1 = window.Vue.createBlock, Id = window.Vue.createCommentVNode, Rd = window.Vue.createElementBlock, o1 = window.Vue.normalizeStyle, s1 = { class: "mw-ui-expandable-content__container" }, a1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, i1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function r1(e, t, n, o, s, a) {
  const i = e1("mw-button");
  return sl(), Rd("div", {
    class: "mw-ui-expandable-content",
    style: o1(o.cssVars)
  }, [
    Xa("div", s1, [
      Xa("div", {
        ref: "contentRef",
        class: Z_(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        J_(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (sl(), Rd("div", a1, [
        t1(i, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (sl(), n1(i, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Id("", !0)
      ])) : Id("", !0)
    ]),
    Xa("div", i1, [
      Xa("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const l1 = /* @__PURE__ */ we(Q_, [["render", r1]]);
const Ka = window.Vue.computed, c1 = {
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
}, zd = window.Vue.createElementVNode, Od = window.Vue.normalizeStyle, u1 = window.Vue.openBlock, d1 = window.Vue.createElementBlock, g1 = ["width", "height", "viewport"], m1 = ["r", "cx", "cy", "stroke-dasharray"], p1 = ["r", "cx", "cy", "stroke-dasharray"];
function h1(e, t, n, o, s, a) {
  return u1(), d1("svg", {
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
    }, null, 8, m1),
    zd("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Od({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, p1)
  ], 12, g1);
}
const f1 = /* @__PURE__ */ we(c1, [["render", h1]]), w1 = window.Vue.ref, An = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, Nn = {
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
  mobile: () => matchMedia(Nn.mobile).matches,
  tablet: () => matchMedia(Nn.tablet).matches,
  desktop: () => matchMedia(Nn.desktop).matches,
  desktopwide: () => matchMedia(Nn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Nn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Nn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Nn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Nn["desktop-and-down"]).matches
}, v1 = (e) => {
  const t = Object.values(An);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, _1 = {
  install: (e) => {
    const t = w1({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in al)
        al.hasOwnProperty(s) && (t.value[s] = al[s]());
      t.value.nextBreakpoint = v1(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Ke(he({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, S1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ke(he({}, e.config.globalProperties.$mwui || {}), {
      colors: kt
    }), e.provide("colors", kt);
  }
};
class cs extends Error {
}
const y1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new cs();
}), Cf = { assertUser: y1 };
const C1 = window.Vue.resolveDirective, ys = window.Vue.createElementVNode, jd = window.Vue.withDirectives, x1 = window.Vue.toDisplayString, b1 = window.Vue.unref, Hd = window.Vue.withCtx, k1 = window.Vue.openBlock, $1 = window.Vue.createBlock, V1 = window.Vue.createCommentVNode, E1 = { class: "pa-4 sx-login-dialog__header" }, L1 = { class: "sx-login-dialog__body px-6 pb-4" }, T1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, A1 = ["href"], D1 = window.Vue.computed, P1 = window.Vue.ref, B1 = window.Vuex.useStore, F1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = B1(), n = D1(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = P1(mw.util.getUrl("Special:UserLogin"));
    return (a, i) => {
      const l = C1("i18n");
      return n.value ? (k1(), $1(b1(Vt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Hd(() => [
          ys("div", E1, [
            jd(ys("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Hd(() => [
          jd(ys("div", L1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          ys("div", T1, [
            ys("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, x1(a.$i18n("cx-sx-login-dialog-button-label")), 9, A1)
          ])
        ]),
        _: 1
      })) : V1("", !0);
    };
  }
}, Z = new mw.cx.SiteMapper(), N1 = mw.util.getUrl, M1 = () => {
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
    lastUpdatedTimestamp: i,
    pageRevision: l,
    status: c,
    targetTitle: u
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = i, this.pageRevision = l, this.status = c, this.targetTitle = u, this.inFeaturedCollection = !1;
  }
}
const Ya = "original", Qa = "empty", U1 = {
  Elia: "Elia.eus",
  Google: "Google Translate"
};
class de {
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
    return U1[t] || t;
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
class no {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Ke(he({}, a), {
      [de.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [de.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = i;
  }
  reset() {
    this.proposedTranslations = {
      [de.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [de.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[de.ORIGINAL_TEXT_PROVIDER_KEY];
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
  const t = vr(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, vr = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, $o = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), xf = (e) => {
  const t = vr(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = I1(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, I1 = (e) => {
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
      let l = !0;
      i[0] === "<nowiki>" ? (o = !0, l = !1) : i[0] === "</nowiki>" || i[0].match(/<nowiki\s*\/>/) ? l = !1 : i[0].match(/(?:\[\[)/) ? (a++, l = !1) : i[0].match(/(?:\]\])/) ? a > 0 && (a--, l = !1) : i[0].match(/(?:\{\{)/) ? (s++, l = !1) : i[0].match(/(?:\}\})/) ? s > 0 && (s--, l = !1) : i[0].match(/\|+/) && (s > 0 || a > 0) && (l = !1), l ? n += "<nowiki>" + i[0] + "</nowiki>" : n += i[0];
    }
  }
  return n;
}, bf = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, kf = (e) => {
  const t = bf(e);
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
      (a) => $o(a)
    );
    s && kf(s) && (this.blockTemplateAdaptationInfo[t] = bf(s));
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
      (t) => $o(t)
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => $o(o));
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
      (a) => $o(a)
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
    if (!t || de.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => $o(s)
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
}
const Ru = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), R1 = Ru - 10, z1 = [
  { status: "failure", value: 100 - Ru },
  { status: "warning", value: 100 - R1 },
  { status: "success", value: 100 }
], $f = (e, t, n) => {
  const o = Gd(e).textContent, s = Gd(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, O1 = (e) => z1.find((t) => e <= t.value).status, j1 = (e, t) => $f(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), H1 = () => (100 - Ru) / 100, Gd = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, sn = {
  calculateScore: $f,
  getScoreStatus: O1,
  getMTScoreForPageSection: j1,
  getMtModificationThreshold: H1
}, Ja = "__LEAD_SECTION__";
class so {
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
      [de.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [de.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [de.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return Ja;
  }
  static isSectionLead(t) {
    return !t || t === Ja;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[de.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[de.ORIGINAL_TEXT_PROVIDER_KEY];
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
      let l = "";
      i && (l = i.innerHTML), a.editedTranslation = l;
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
    return n instanceof dt ? n.transclusionNode.outerHTML : n instanceof no ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof dt ? t.blockTemplateSelected = !1 : t instanceof no && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof dt ? n.blockTemplateSelected = !0 : n instanceof no && (n.selected = !0);
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
    if (o instanceof no)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof dt ? n.blockTemplateProposedTranslations[t] || "" : n instanceof no ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof dt ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof no && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
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
class kr extends Iu {
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
    targetLanguage: i,
    startTimestamp: l,
    lastUpdatedTimestamp: c,
    status: u,
    pageRevision: r,
    targetTitle: d,
    sourceSectionTitle: g,
    targetSectionTitle: m,
    progress: p
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: i,
      startTimestamp: l,
      lastUpdatedTimestamp: c,
      pageRevision: r,
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
    return so.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? so.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const an = "previous-edits", rn = "popular", et = "topic", Pe = "geography", ne = "collections", Ge = "automatic", Gt = "seed", Wd = window.Vue.ref, { topics: q1, regions: G1 } = mw.loader.require(
  "ext.cx.articlefilters"
), rl = {
  type: Ge,
  id: an
}, W1 = {
  type: Ge,
  id: rn
}, zu = () => {
  const e = Wd(
    q1.flatMap((u) => u.topics).map((u) => u.topicId.toLowerCase())
  ), t = Wd(!1), n = (u, r) => e.value.includes(r) ? { type: et, id: r } : null, o = (u, r) => G1.some(
    (g) => g.id.toLowerCase() === r || g.countries.some(
      (m) => m.id.toLowerCase() === r
    )
  ) ? { type: Pe, id: r } : null, s = (u, r, d) => d && !d.some((g) => g.name.toLowerCase() === r) ? null : { type: ne, id: u }, a = ({ type: u, id: r }, d = !1) => {
    t.value = !1;
    const g = u == null ? void 0 : u.toLowerCase(), m = r == null ? void 0 : r.toLowerCase();
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
    if (m === ne)
      return d && !d.length ? (t.value = !0, rl) : {
        type: Ge,
        id: ne
      };
    if (g === et) {
      const p = n(r, m);
      if (p)
        return p;
      t.value = !0;
    } else if (g === Pe) {
      const p = o(r, m);
      if (p)
        return p;
      t.value = !0;
    } else if (g === ne) {
      const p = s(
        r,
        m,
        d
      );
      if (p)
        return p;
      t.value = !0;
    } else if (g === Gt)
      return { type: Gt, id: r };
    return rl;
  }, i = ({ type: u, id: r }) => c({ type: u, id: r }, rl), l = ({ type: u, id: r }) => c({ type: u, id: r }, W1), c = (u, r) => !(u != null && u.id) || !(u != null && u.type) || !(r != null && r.id) || !(r != null && r.type) ? !1 : u.id.toLowerCase() === r.id.toLowerCase() && u.type.toLowerCase() === r.type.toLowerCase();
  return {
    filtersValidatorError: t,
    validateFilters: a,
    isDefaultFilter: i,
    isPopularFilter: l,
    isEqualFilter: c
  };
}, X1 = window.Vue.inject, K1 = window.Vue.reactive;
var Y1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Vf = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Y1, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(d) {
        this.locale = d;
      }
      convertPlural(d, g) {
        const m = /\d+=/i;
        if (!g || g.length === 0)
          return "";
        for (let f = 0; f < g.length; f++) {
          const h = g[f];
          if (m.test(h)) {
            if (parseInt(h.slice(0, h.indexOf("=")), 10) === d)
              return h.slice(h.indexOf("=") + 1);
            g[f] = void 0;
          }
        }
        g = g.filter((f) => !!f);
        let p = this.getPluralForm(d, this.locale);
        return p = Math.min(p, g.length - 1), g[p];
      }
      getPluralForm(d, g) {
        const m = new Intl.PluralRules(g), p = m.resolvedOptions().pluralCategories, f = m.select(d);
        return ["zero", "one", "two", "few", "many", "other"].filter((h) => p.includes(h)).indexOf(f);
      }
      convertNumber(d, g = !1) {
        let m = this.digitTransformTable(this.locale), p = "";
        if (g) {
          if (parseFloat(d, 10) === d || !m)
            return d;
          const f = [];
          for (const w in m)
            f[m[w]] = w;
          m = f;
          const h = String(d);
          for (let w = 0; w < h.length; w++)
            p += m[h[w]] || h[w];
          return parseFloat(p, 10);
        }
        if (Intl.NumberFormat) {
          let f;
          const h = [...o[this.locale] || [], "en"];
          return f = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : h, p = new Intl.NumberFormat(f).format(d), p === "NaN" && (p = d), p;
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
      convertGrammar(r, d) {
        switch (d) {
          case "instrumental":
            r = "s " + r;
            break;
          case "lokativ":
            r = "o " + r;
        }
        return r;
      }
    }, default: s, dsb: class extends s {
      convertGrammar(r, d) {
        switch (d) {
          case "instrumental":
            r = "z " + r;
            break;
          case "lokatiw":
            r = "wo " + r;
        }
        return r;
      }
    }, fi: class extends s {
      convertGrammar(r, d) {
        let g = r.match(/[aou][^äöy]*$/i);
        const m = r;
        switch (r.match(/wiki$/i) && (g = !1), r.match(/[bcdfghjklmnpqrstvwxz]$/i) && (r += "i"), d) {
          case "genitive":
            r += "n";
            break;
          case "elative":
            r += g ? "sta" : "stä";
            break;
          case "partitive":
            r += g ? "a" : "ä";
            break;
          case "illative":
            r += r.slice(-1) + "n";
            break;
          case "inessive":
            r += g ? "ssa" : "ssä";
            break;
          default:
            r = m;
        }
        return r;
      }
    }, ga: class extends s {
      convertGrammar(r, d) {
        if (d === "ainmlae")
          switch (r) {
            case "an Domhnach":
              r = "Dé Domhnaigh";
              break;
            case "an Luan":
              r = "Dé Luain";
              break;
            case "an Mháirt":
              r = "Dé Mháirt";
              break;
            case "an Chéadaoin":
              r = "Dé Chéadaoin";
              break;
            case "an Déardaoin":
              r = "Déardaoin";
              break;
            case "an Aoine":
              r = "Dé hAoine";
              break;
            case "an Satharn":
              r = "Dé Sathairn";
          }
        return r;
      }
    }, he: class extends s {
      convertGrammar(r, d) {
        switch (d) {
          case "prefixed":
          case "תחילית":
            r.slice(0, 1) === "ו" && r.slice(0, 2) !== "וו" && (r = "ו" + r), r.slice(0, 1) === "ה" && (r = r.slice(1)), (r.slice(0, 1) < "א" || r.slice(0, 1) > "ת") && (r = "־" + r);
        }
        return r;
      }
    }, hsb: class extends s {
      convertGrammar(r, d) {
        switch (d) {
          case "instrumental":
            r = "z " + r;
            break;
          case "lokatiw":
            r = "wo " + r;
        }
        return r;
      }
    }, hu: class extends s {
      convertGrammar(r, d) {
        switch (d) {
          case "rol":
            r += "ról";
            break;
          case "ba":
            r += "ba";
            break;
          case "k":
            r += "k";
        }
        return r;
      }
    }, hy: class extends s {
      convertGrammar(r, d) {
        return d === "genitive" && (r.slice(-1) === "ա" ? r = r.slice(0, -1) + "այի" : r.slice(-1) === "ո" ? r = r.slice(0, -1) + "ոյի" : r.slice(-4) === "գիրք" ? r = r.slice(0, -4) + "գրքի" : r += "ի"), r;
      }
    }, la: class extends s {
      convertGrammar(r, d) {
        switch (d) {
          case "genitive":
            r = (r = (r = (r = (r = (r = (r = (r = (r = r.replace(/u[ms]$/i, "i")).replace(/ommunia$/i, "ommunium")).replace(/a$/i, "ae")).replace(/libri$/i, "librorum")).replace(/nuntii$/i, "nuntiorum")).replace(/tio$/i, "tionis")).replace(/ns$/i, "ntis")).replace(/as$/i, "atis")).replace(/es$/i, "ei");
            break;
          case "accusative":
            r = (r = (r = (r = (r = (r = (r = (r = (r = r.replace(/u[ms]$/i, "um")).replace(/ommunia$/i, "am")).replace(/a$/i, "ommunia")).replace(/libri$/i, "libros")).replace(/nuntii$/i, "nuntios")).replace(/tio$/i, "tionem")).replace(/ns$/i, "ntem")).replace(/as$/i, "atem")).replace(/es$/i, "em");
            break;
          case "ablative":
            r = (r = (r = (r = (r = (r = (r = (r = (r = r.replace(/u[ms]$/i, "o")).replace(/ommunia$/i, "ommunibus")).replace(/a$/i, "a")).replace(/libri$/i, "libris")).replace(/nuntii$/i, "nuntiis")).replace(/tio$/i, "tione")).replace(/ns$/i, "nte")).replace(/as$/i, "ate")).replace(/es$/i, "e");
        }
        return r;
      }
    }, os: class extends s {
      convertGrammar(r, d) {
        let g, m, p, f;
        switch (g = "мæ", m = "", p = "", f = "", r.match(/тæ$/i) ? (r = r.slice(0, -1), g = "æм") : r.match(/[аæеёиоыэюя]$/i) ? m = "й" : r.match(/у$/i) ? r.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (m = "й") : r.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (p = "-"), d) {
          case "genitive":
            f = p + m + "ы";
            break;
          case "dative":
            f = p + m + "æн";
            break;
          case "allative":
            f = p + g;
            break;
          case "ablative":
            f = m === "й" ? p + m + "æ" : p + m + "æй";
            break;
          case "superessive":
            f = p + m + "ыл";
            break;
          case "equative":
            f = p + m + "ау";
            break;
          case "comitative":
            f = p + "имæ";
        }
        return r + f;
      }
    }, ru: class extends s {
      convertGrammar(r, d) {
        return d === "genitive" && (r.slice(-1) === "ь" ? r = r.slice(0, -1) + "я" : r.slice(-2) === "ия" ? r = r.slice(0, -2) + "ии" : r.slice(-2) === "ка" ? r = r.slice(0, -2) + "ки" : r.slice(-2) === "ти" ? r = r.slice(0, -2) + "тей" : r.slice(-2) === "ды" ? r = r.slice(0, -2) + "дов" : r.slice(-3) === "ник" && (r = r.slice(0, -3) + "ника")), r;
      }
    }, sl: class extends s {
      convertGrammar(r, d) {
        switch (d) {
          case "mestnik":
            r = "o " + r;
            break;
          case "orodnik":
            r = "z " + r;
        }
        return r;
      }
    }, uk: class extends s {
      convertGrammar(r, d) {
        switch (d) {
          case "genitive":
            r.slice(-1) === "ь" ? r = r.slice(0, -1) + "я" : r.slice(-2) === "ія" ? r = r.slice(0, -2) + "ії" : r.slice(-2) === "ка" ? r = r.slice(0, -2) + "ки" : r.slice(-2) === "ти" ? r = r.slice(0, -2) + "тей" : r.slice(-2) === "ды" ? r = r.slice(0, -2) + "дов" : r.slice(-3) === "ник" && (r = r.slice(0, -3) + "ника");
            break;
          case "accusative":
            r.slice(-2) === "ія" && (r = r.slice(0, -2) + "ію");
        }
        return r;
      }
    } };
    const i = new RegExp("(?:([A-Za-zªµºÀ-ÖØ-öø-ʸʻ-ˁːˑˠ-ˤˮͰ-ͳͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-҂Ҋ-ԯԱ-Ֆՙ-՟ա-և։ः-हऻऽ-ीॉ-ौॎ-ॐक़-ॡ।-ঀংঃঅ-ঌএঐও-নপ-রলশ-হঽ-ীেৈোৌৎৗড়ঢ়য়-ৡ০-ৱ৴-৺ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ીૉોૌૐૠૡ૦-૰ૹଂଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽାୀେୈୋୌୗଡ଼ଢ଼ୟ-ୡ୦-୷ஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹாிுூெ-ைொ-ௌௐௗ௦-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౚౠౡ౦-౯౿ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊೋೕೖೞೠೡ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ീെ-ൈൊ-ൌൎൗൟ-ൡ൦-൵൹-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-෴ก-ะาำเ-ๆ๏-๛ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆ໐-໙ໜ-ໟༀ-༗༚-༴༶༸༾-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿚က-ာေးျြဿ-ၗၚ-ၝၡ-ၰၵ-ႁႃႄႇ-ႌႎ-ႜ႞-ჅჇჍა-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፼ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙿᚁ-ᚚᚠ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះៈ។-៚ៜ០-៩᠐-᠙ᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸ᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧚ᨀ-ᨖᨙᨚ᨞-ᩕᩗᩡᩣᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪭ᬄ-ᬳᬵᬻᬽ-ᭁᭃ-ᭋ᭐-᭪᭴-᭼ᮂ-ᮡᮦᮧ᮪ᮮ-ᯥᯧᯪ-ᯬᯮ᯲᯳᯼-ᰫᰴᰵ᰻-᱉ᱍ-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〮〯〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎ㆐-ㆺㇰ-㈜㈠-㉏㉠-㉻㉿-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿕ꀀ-ꒌꓐ-ꘌꘐ-ꘫꙀ-ꙮꚀ-ꚝꚠ-ꛯ꛲-꛷Ꜣ-ꞇ꞉-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠤꠧ꠰-꠷ꡀ-ꡳꢀ-ꣃ꣎-꣙ꣲ-ꣽ꤀-ꤥ꤮-ꥆꥒ꥓꥟-ꥼꦃ-ꦲꦴꦵꦺꦻꦽ-꧍ꧏ-꧙꧞-ꧤꧦ-ꧾꨀ-ꨨꨯꨰꨳꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-ꩻꩽ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫫꫮ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭥꭰ-ꯤꯦꯧꯩ-꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]|\uD800[\uDC00-\uDC0B]|\uD800[\uDC0D-\uDC26]|\uD800[\uDC28-\uDC3A]|𐀼|𐀽|\uD800[\uDC3F-\uDC4D]|\uD800[\uDC50-\uDC5D]|\uD800[\uDC80-\uDCFA]|𐄀|𐄂|\uD800[\uDD07-\uDD33]|\uD800[\uDD37-\uDD3F]|\uD800[\uDDD0-\uDDFC]|\uD800[\uDE80-\uDE9C]|\uD800[\uDEA0-\uDED0]|\uD800[\uDF00-\uDF23]|\uD800[\uDF30-\uDF4A]|\uD800[\uDF50-\uDF75]|\uD800[\uDF80-\uDF9D]|\uD800[\uDF9F-\uDFC3]|\uD800[\uDFC8-\uDFD5]|\uD801[\uDC00-\uDC9D]|\uD801[\uDCA0-\uDCA9]|\uD801[\uDD00-\uDD27]|\uD801[\uDD30-\uDD63]|𐕯|\uD801[\uDE00-\uDF36]|\uD801[\uDF40-\uDF55]|\uD801[\uDF60-\uDF67]|𑀀|\uD804[\uDC02-\uDC37]|\uD804[\uDC47-\uDC4D]|\uD804[\uDC66-\uDC6F]|\uD804[\uDC82-\uDCB2]|𑂷|𑂸|\uD804[\uDCBB-\uDCC1]|\uD804[\uDCD0-\uDCE8]|\uD804[\uDCF0-\uDCF9]|\uD804[\uDD03-\uDD26]|𑄬|\uD804[\uDD36-\uDD43]|\uD804[\uDD50-\uDD72]|\uD804[\uDD74-\uDD76]|\uD804[\uDD82-\uDDB5]|\uD804[\uDDBF-\uDDC9]|𑇍|\uD804[\uDDD0-\uDDDF]|\uD804[\uDDE1-\uDDF4]|\uD804[\uDE00-\uDE11]|\uD804[\uDE13-\uDE2E]|𑈲|𑈳|𑈵|\uD804[\uDE38-\uDE3D]|\uD804[\uDE80-\uDE86]|𑊈|\uD804[\uDE8A-\uDE8D]|\uD804[\uDE8F-\uDE9D]|\uD804[\uDE9F-\uDEA9]|\uD804[\uDEB0-\uDEDE]|\uD804[\uDEE0-\uDEE2]|\uD804[\uDEF0-\uDEF9]|𑌂|𑌃|\uD804[\uDF05-\uDF0C]|𑌏|𑌐|\uD804[\uDF13-\uDF28]|\uD804[\uDF2A-\uDF30]|𑌲|𑌳|\uD804[\uDF35-\uDF39]|\uD804[\uDF3D-\uDF3F]|\uD804[\uDF41-\uDF44]|𑍇|𑍈|\uD804[\uDF4B-\uDF4D]|𑍐|𑍗|\uD804[\uDF5D-\uDF63]|\uD805[\uDC80-\uDCB2]|𑒹|\uD805[\uDCBB-\uDCBE]|𑓁|\uD805[\uDCC4-\uDCC7]|\uD805[\uDCD0-\uDCD9]|\uD805[\uDD80-\uDDB1]|\uD805[\uDDB8-\uDDBB]|𑖾|\uD805[\uDDC1-\uDDDB]|\uD805[\uDE00-\uDE32]|𑘻|𑘼|𑘾|\uD805[\uDE41-\uDE44]|\uD805[\uDE50-\uDE59]|\uD805[\uDE80-\uDEAA]|𑚬|𑚮|𑚯|𑚶|\uD805[\uDEC0-\uDEC9]|\uD805[\uDF00-\uDF19]|𑜠|𑜡|𑜦|\uD805[\uDF30-\uDF3F]|\uD806[\uDCA0-\uDCF2]|𑣿|\uD806[\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E]|\uD809[\uDC70-\uDC74]|\uD809[\uDC80-\uDD43]|\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38]|\uD81A[\uDE40-\uDE5E]|\uD81A[\uDE60-\uDE69]|𖩮|𖩯|\uD81A[\uDED0-\uDEED]|𖫵|\uD81A[\uDF00-\uDF2F]|\uD81A[\uDF37-\uDF45]|\uD81A[\uDF50-\uDF59]|\uD81A[\uDF5B-\uDF61]|\uD81A[\uDF63-\uDF77]|\uD81A[\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44]|\uD81B[\uDF50-\uDF7E]|\uD81B[\uDF93-\uDF9F]|𛀀|𛀁|\uD82F[\uDC00-\uDC6A]|\uD82F[\uDC70-\uDC7C]|\uD82F[\uDC80-\uDC88]|\uD82F[\uDC90-\uDC99]|𛲜|𛲟|\uD834[\uDC00-\uDCF5]|\uD834[\uDD00-\uDD26]|\uD834[\uDD29-\uDD66]|\uD834[\uDD6A-\uDD72]|𝆃|𝆄|\uD834[\uDD8C-\uDDA9]|\uD834[\uDDAE-\uDDE8]|\uD834[\uDF60-\uDF71]|\uD835[\uDC00-\uDC54]|\uD835[\uDC56-\uDC9C]|𝒞|𝒟|𝒢|𝒥|𝒦|\uD835[\uDCA9-\uDCAC]|\uD835[\uDCAE-\uDCB9]|𝒻|\uD835[\uDCBD-\uDCC3]|\uD835[\uDCC5-\uDD05]|\uD835[\uDD07-\uDD0A]|\uD835[\uDD0D-\uDD14]|\uD835[\uDD16-\uDD1C]|\uD835[\uDD1E-\uDD39]|\uD835[\uDD3B-\uDD3E]|\uD835[\uDD40-\uDD44]|𝕆|\uD835[\uDD4A-\uDD50]|\uD835[\uDD52-\uDEA5]|\uD835[\uDEA8-\uDEDA]|\uD835[\uDEDC-\uDF14]|\uD835[\uDF16-\uDF4E]|\uD835[\uDF50-\uDF88]|\uD835[\uDF8A-\uDFC2]|\uD835[\uDFC4-\uDFCB]|\uD836[\uDC00-\uDDFF]|\uD836[\uDE37-\uDE3A]|\uD836[\uDE6D-\uDE74]|\uD836[\uDE76-\uDE83]|\uD836[\uDE85-\uDE8B]|\uD83C[\uDD10-\uDD2E]|\uD83C[\uDD30-\uDD69]|\uD83C[\uDD70-\uDD9A]|\uD83C[\uDDE6-\uDE02]|\uD83C[\uDE10-\uDE3A]|\uD83C[\uDE40-\uDE48]|🉐|🉑|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6]|\uD869[\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34]|\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD86E[\uDC20-\uDFFF]|[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|[\uDB80-\uDBBE][\uDC00-\uDFFF]|\uDBBF[\uDC00-\uDFFD]|[\uDBC0-\uDBFE][\uDC00-\uDFFF]|\uDBFF[\uDC00-\uDFFD])|([֐־׀׃׆׈-׿߀-ߪߴߵߺ-ࠕࠚࠤࠨ࠮-ࡘ࡜-࢟‏יִײַ-ﬨשׁ-ﭏ؈؋؍؛-ي٭-ٯٱ-ەۥۦۮۯۺ-ܐܒ-ܯ݋-ޥޱ-޿ࢠ-࣢ﭐ-ﴽ﵀-﷏ﷰ-﷼﷾﷿ﹰ-﻾]|\uD802[\uDC00-\uDD1E]|\uD802[\uDD20-\uDE00]|𐨄|\uD802[\uDE07-\uDE0B]|\uD802[\uDE10-\uDE37]|\uD802[\uDE3B-\uDE3E]|\uD802[\uDE40-\uDEE4]|\uD802[\uDEE7-\uDF38]|\uD802[\uDF40-\uDFFF]|\uD803[\uDC00-\uDE5F]|\uD803[\uDE7F-\uDFFF]|\uD83A[\uDC00-\uDCCF]|\uD83A[\uDCD7-\uDFFF]|\uD83B[\uDC00-\uDDFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDE00-\uDEEF]|\uD83B[\uDEF2-\uDEFF]))");
    class l {
      constructor(d) {
        this.locale = d, this.language = new (a[d] || a.default)(d);
      }
      emit(d, g) {
        let m, p, f;
        switch (typeof d) {
          case "string":
          case "number":
            m = d;
            break;
          case "object":
            if (p = d.slice(1).map((h) => this.emit(h, g)), f = d[0].toLowerCase(), typeof this[f] != "function")
              throw new Error('unknown operation "' + f + '"');
            m = this[f](p, g);
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
          const p = m.match(i);
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
        let p = d, f = "";
        for (const h in m)
          f += ` ${h}="${m[h]}"`;
        return Array.isArray(p) || (p = [p]), `<${g}${f}>${p.join("")}</${g}>`;
      }
    }
    class c {
      constructor(d, { wikilinks: g = !1 } = {}) {
        this.locale = d, this.wikilinks = g, this.emitter = new l(this.locale);
      }
      parse(d, g) {
        if (d.includes("{{") || d.includes("<") || this.wikilinks && d.includes("[")) {
          const m = function(p, { wikilinks: f = !1 } = {}) {
            let h = 0;
            function w(B) {
              return () => {
                for (let K = 0; K < B.length; K++) {
                  const Me = B[K]();
                  if (Me !== null)
                    return Me;
                }
                return null;
              };
            }
            function v(B) {
              const K = h, Me = [];
              for (let At = 0; At < B.length; At++) {
                const ee = B[At]();
                if (ee === null)
                  return h = K, null;
                Me.push(ee);
              }
              return Me;
            }
            function y(B, K) {
              return () => {
                const Me = h, At = [];
                let ee = K();
                for (; ee !== null; )
                  At.push(ee), ee = K();
                return At.length < B ? (h = Me, null) : At;
              };
            }
            function C(B) {
              const K = B.length;
              return () => {
                let Me = null;
                return p.slice(h, h + K) === B && (Me = B, h += K), Me;
              };
            }
            function _(B) {
              return () => {
                const K = p.slice(h).match(B);
                return K === null ? null : (h += K[0].length, K[0]);
              };
            }
            const k = _(/^\s+/), T = C("|"), N = C(":"), V = C("\\"), L = _(/^./), A = C("$"), G = _(/^\d+/), ae = C('"'), Q = C("'"), oe = _(f ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), M = _(f ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), W = w([Y, _(f ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function Y() {
              const B = v([V, L]);
              return B === null ? null : B[1];
            }
            const X = w([Y, M]), le = w([Y, oe]);
            function te() {
              const B = v([A, G]);
              return B === null ? null : ["REPLACE", parseInt(B[1], 10) - 1];
            }
            const Se = (Ne = _(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), z = function(B) {
              return B.toString();
            }, () => {
              const B = Ne();
              return B === null ? null : z(B);
            });
            var Ne, z;
            function O() {
              const B = v([T, y(0, Ao)]);
              if (B === null)
                return null;
              const K = B[1];
              return K.length > 1 ? ["CONCAT"].concat(K) : K[0];
            }
            function ie() {
              const B = v([Se, N, te]);
              return B === null ? null : [B[0], B[2]];
            }
            function S() {
              const B = v([Se, N, Ao]);
              return B === null ? null : [B[0], B[2]];
            }
            function D() {
              const B = v([Se, N]);
              return B === null ? null : [B[0], ""];
            }
            const E = w([function() {
              const B = v([w([ie, S, D]), y(0, O)]);
              return B === null ? null : B[0].concat(B[1]);
            }, function() {
              const B = v([Se, y(0, O)]);
              return B === null ? null : [B[0]].concat(B[1]);
            }]), F = C("{{"), U = C("}}"), j = C("[["), q = C("]]"), I = C("["), ce = C("]");
            function ot() {
              const B = v([F, E, U]);
              return B === null ? null : B[1];
            }
            const Ve = w([function() {
              const B = v([y(1, Ao), T, y(1, To)]);
              return B === null ? null : [["CONCAT"].concat(B[0]), ["CONCAT"].concat(B[2])];
            }, function() {
              const B = v([y(1, Ao)]);
              return B === null ? null : [["CONCAT"].concat(B[0])];
            }]);
            function Ia() {
              let B = null;
              const K = v([j, Ve, q]);
              if (K !== null) {
                const Me = K[1];
                B = ["WIKILINK"].concat(Me);
              }
              return B;
            }
            function Ra() {
              let B = null;
              const K = v([I, y(1, jr), k, y(1, To), ce]);
              return K !== null && (B = ["EXTLINK", K[1].length === 1 ? K[1][0] : ["CONCAT"].concat(K[1]), ["CONCAT"].concat(K[3])]), B;
            }
            const uo = _(/^[A-Za-z]+/);
            function zr() {
              const B = _(/^[^"]*/), K = v([ae, B, ae]);
              return K === null ? null : K[1];
            }
            function Or() {
              const B = _(/^[^']*/), K = v([Q, B, Q]);
              return K === null ? null : K[1];
            }
            function vs() {
              const B = _(/^\s*=\s*/), K = v([k, uo, B, w([zr, Or])]);
              return K === null ? null : [K[1], K[3]];
            }
            function _s() {
              const B = y(0, vs)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], B);
            }
            const jr = w([ot, te, Ia, Ra, function() {
              const B = y(1, W)();
              return B === null ? null : B.join("");
            }]), To = w([ot, te, Ia, Ra, function() {
              let B = null;
              const K = h, Me = C("<"), At = _(/^\/?/), ee = _(/^\s*>/), un = v([Me, uo, _s, At, ee]);
              if (un === null)
                return null;
              const Fn = h, ft = un[1], Do = y(0, To)(), Hr = h, wd = v([C("</"), uo, ee]);
              if (wd === null)
                return ["CONCAT", p.slice(K, Fn)].concat(Do);
              const hv = h, fv = wd[1], vd = un[2];
              if (function(go, Oa, qr, Gr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((go = go.toLowerCase()) !== (Oa = Oa.toLowerCase()) || Gr.allowedHtmlElements.indexOf(go) === -1)
                  return !1;
                const wv = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let ja = 0, vv = qr.length; ja < vv; ja += 2) {
                  const Wr = qr[ja];
                  if (Gr.allowedHtmlCommonAttributes.indexOf(Wr) === -1 && (Gr.allowedHtmlAttributesByElement[go] || []).indexOf(Wr) === -1 || Wr === "style" && qr[ja + 1].search(wv) !== -1)
                    return !1;
                }
                return !0;
              }(ft, fv, vd.slice(1)))
                B = ["HTMLELEMENT", ft, vd].concat(Do);
              else {
                const go = (Oa) => Oa.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                B = ["CONCAT", go(p.slice(K, Fn))].concat(Do, go(p.slice(Hr, hv)));
              }
              return B;
            }, function() {
              const B = y(1, le)();
              return B === null ? null : B.join("");
            }]), Ao = w([ot, te, function() {
              const B = y(1, X)();
              return B === null ? null : B.join("");
            }]), za = function() {
              const B = y(0, To)();
              return B === null ? null : ["CONCAT"].concat(B);
            }();
            if (za === null || h !== p.length)
              throw new Error("Parse error at position " + h.toString() + " in input: " + p);
            return za;
          }(d, { wikilinks: this.wikilinks });
          return this.emitter.emit(m, g);
        }
        return this.simpleParse(d, g);
      }
      simpleParse(d, g) {
        return d.replace(/\$(\d+)/g, (m, p) => {
          const f = parseInt(p, 10) - 1;
          return g[f] !== void 0 ? g[f] : "$" + p;
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
      constructor(r, { finalFallback: d = "en", messages: g, wikilinks: m = !1 } = {}) {
        this.locale = r, this.parser = new c(this.locale, { wikilinks: m }), this.messageStore = new u(), g && this.load(g, this.locale), this.finalFallback = d, this.wikilinks = m;
      }
      load(r, d) {
        return this.messageStore.load(r, d || this.locale);
      }
      i18n(r, ...d) {
        return this.parser.parse(this.getMessage(r), d);
      }
      setLocale(r) {
        this.locale = r, this.parser = new c(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(r) {
        let d = this.locale, g = 0;
        const m = this.getFallbackLocales(this.locale);
        for (; d; ) {
          const p = d.split("-");
          let f = p.length;
          do {
            const h = p.slice(0, f).join("-"), w = this.messageStore.getMessage(r, h);
            if (typeof w == "string")
              return w;
            f--;
          } while (f);
          d = m[g], g++;
        }
        return r;
      }
      registerParserPlugin(r, d) {
        l.prototype[r] = d;
      }
    };
  });
})(Vf);
var Q1 = Vf.exports;
const Xd = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Ef = Symbol("banana-context");
function _e() {
  const e = X1(Ef);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function J1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = K1(new Q1(e.locale, e));
  return {
    install: (n) => {
      n.provide(Ef, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: i } = Xd(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...i) : o.textContent = t.i18n(a, ...i);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: i } = Xd(s);
        o.innerHTML = t.i18n(a, ...i);
      });
    }
  };
}
const Bn = window.Vue.ref, Z1 = window.Vue.computed, $r = Bn(null), Vr = Bn(null), Er = Bn(null), Ta = Bn(null), Ou = Bn(null), Lr = Bn(null), Lf = Bn(null), Tf = Bn(null), ju = Bn(null), { validateFilters: eS, filtersValidatorError: tS } = zu(), Af = {
  from: $r,
  to: Vr,
  section: Ta,
  draft: Ou,
  page: Er,
  revision: Lr,
  "active-list": ju
}, nS = Z1(() => ({
  type: Lf.value,
  id: Tf.value
})), Df = (e, t) => {
  Lf.value = e, Tf.value = t, _r("filter-type", e), t && _r("filter-id", t);
}, oS = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof kr && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), Af[o].value = s;
  }
  t.delete("title"), Aa(Object.fromEntries(t));
}, Hu = (e, t) => {
  Af[e].value = t, _r(e, t);
}, sS = (e) => {
  Hu("section", e);
}, aS = (e) => {
  Hu("page", e);
}, iS = (e) => {
  Hu("active-list", e);
}, Aa = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    N1(`Special:ContentTranslation${t}`, e)
  );
}, rS = () => {
  const e = _e(), t = new URLSearchParams(location.search);
  Er.value = t.get("page"), $r.value = t.get("from"), Vr.value = t.get("to"), Ta.value = t.get("section"), Lr.value = t.get("revision"), ju.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = eS({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Df(n.type, n.id), tS.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, lS = () => {
  const e = new URLSearchParams(location.search);
  Ta.value = null, e.delete("section"), e.delete("title"), Aa(Object.fromEntries(e));
}, _r = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), Aa(Object.fromEntries(n));
}, cS = (e) => new URLSearchParams(location.search).get(e), uS = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), $r.value = e, Vr.value = t, n.delete("title"), Aa(Object.fromEntries(n));
}, dS = () => {
  const e = new URLSearchParams(location.search);
  Er.value = null, Ta.value = null, Ou.value = null, Lr.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), Aa(Object.fromEntries(e));
}, gS = () => new URLSearchParams(location.search).get("force-quick-tutorial"), P = () => ({
  isQuickTutorialForced: gS,
  setLanguageURLParams: uS,
  setSectionURLParam: sS,
  setTranslationURLParams: oS,
  initializeURLState: rS,
  clearTranslationURLParameters: dS,
  clearSectionURLParameter: lS,
  setUrlParam: _r,
  getUrlParam: cS,
  pageURLParameter: Er,
  sourceLanguageURLParameter: $r,
  targetLanguageURLParameter: Vr,
  sectionURLParameter: Ta,
  draftURLParameter: Ou,
  revisionURLParameter: Lr,
  setPageURLParam: aS,
  currentSuggestionFilters: nS,
  setFilterURLParams: Df,
  activeDashboardTabParameter: ju,
  setActiveDashboardTabParameter: iS
}), mS = () => {
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
      const a = ({ site: l }) => l && l.some((c) => c.code === "wiki" && !("closed" in c)), i = Object.values(s).filter(a).map((l) => l.code);
      n(i);
    }).fail((s) => {
      o(new Error("Supported language codes fetching failed: " + s));
    });
  });
};
function pS(e, t) {
  return x(this, null, function* () {
    const n = Z.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new de(e, t, o.mt)
      )
    );
  });
}
function hS() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function fS(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = Z.getWikiDomainCode(e), i = Z.getWikiDomainCode(t), l = {
    action: "wblinktitles",
    fromsite: s.replace(i, a),
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
  fetchSupportedLanguageCodes: mS,
  fetchSupportedMTProviders: pS,
  fetchCXServerToken: hS,
  addWikibaseLink: fS
}, wS = window.Vue.ref, Za = wS([]);
let Kd = !1;
function Da() {
  return {
    fetchSupportedLanguageCodes: () => x(this, null, function* () {
      if (!Kd) {
        Kd = !0, Za.value = yield Tr.fetchSupportedLanguageCodes();
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
    pageid: i,
    pagelanguage: l,
    pageprops: c,
    pageviews: u,
    thumbnail: r = null,
    title: d,
    revisions: g,
    _alias: m,
    content: p = null,
    sections: f = []
  } = {}) {
    var h;
    this.language = l, this.title = d, this.pageId = i, this.description = t, this.image = s, this.imageName = a, this.pageprops = c, this.pageviews = u, this.thumbnail = r, this.langLinksCount = n, this.articleSize = (h = g == null ? void 0 : g[0]) == null ? void 0 : h.size, this.revision = o, this.alias = m, this.wikidataId = c == null ? void 0 : c.wikibase_item, this.content = p, this.sections = f;
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
    return t === so.LEAD_SECTION_DUMMY_TITLE ? this.leadSection : (this.sections || []).find(
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
      let i = n[a];
      if (i >= t) {
        o = i;
        break;
      }
    }
    const s = /\/\d+px-([^/]+)$/;
    return this.thumbnail.source.replace(s, `/${o}px-$1`);
  }
}
class vS {
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
function _S() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const SS = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), _S();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, yS = (e, t) => {
  let n, o;
  return t ? (n = SS(e), o = n.$element.find(
    "section[rel='cx:Section']"
  ).map((a, i) => {
    const l = $(i).data("view").getModel();
    if (l)
      return ve.dm.converter.getDomFromNode(
        l,
        // CLIPBOARD_MODE helps to copy the data-mw from elsewhere to
        // to the local nodes
        ve.dm.Converter.static.CLIPBOARD_MODE
      ).body.children[0];
  }), n.destroy()) : o = $(e).filter("section[rel='cx:Section']"), o;
}, CS = (e, t) => {
  const n = Array.from(
    yS(e, t)
  );
  return xS(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...i] = s;
      let l;
      const c = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = !1 : (l = !0, i.unshift(a));
      const u = i.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (r) => new dt({
          sentences: bS(r),
          node: r
        })
      );
      return new so({ id: c, subSections: u, isLeadSection: l });
    }
  );
}, xS = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, bS = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new no({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Pf = {
  convertSegmentedContentToPageSections: CS
}, qu = 120, kS = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7-day page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: qu,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  }, o = Z.getApi(e).get(n);
  return new Promise((s, a) => {
    o.then((i) => {
      const l = i.query.pages, u = (i.query.redirects || []).reduce(
        (g, m) => Ke(he({}, g), { [m.to]: m.from }),
        {}
      ), d = (i.query.normalized || []).reduce(
        (g, m) => Ke(he({}, g), {
          [m.to]: m.from
        }),
        {}
      );
      s(
        l.map((g) => {
          const m = d[g.title] || u[g.title] || null;
          return new us(Ke(he({}, g), { _alias: m }));
        })
      );
    }).fail(a);
  });
}, $S = (e, t) => {
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
  }, o = Z.getApi(e).get(n), s = Z.siteTemplates.api.includes("wikipedia.org");
  return new Promise((a, i) => {
    o.then((l) => {
      var d, g;
      const c = l.query.pages;
      (!c || !c.length || (d = c[0]) != null && d.missing) && i(new Error("Page not found"));
      const u = [
        { lang: e, title: t },
        ...c[0].langlinks || []
      ], r = (g = c[0].pageprops) == null ? void 0 : g.wikibase_item;
      if (!r) {
        if (!s)
          return a(null);
        i(new Error("Wikidata ID not found"));
      }
      a(Object.freeze(new vS(r, u)));
    }).fail(i);
  });
}, VS = (e, t) => {
  if (!Number.isInteger(t) || t <= 0)
    throw new RangeError("chunk(): size must be a positive integer");
  const n = [];
  for (let o = 0; o < e.length; o += t)
    n.push(e.slice(o, o + t));
  return n;
}, ES = (e, t, n) => x(void 0, null, function* () {
  const o = Z.getApi(e), a = VS(n, 50).map((l) => {
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
}), LS = (e, t, n, o = null) => {
  const s = new Promise((i) => {
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
      var r;
      return i(((r = u == null ? void 0 : u.parse) == null ? void 0 : r.sections) || []);
    }).fail(() => i([]));
  }).then(
    (i) => i.filter((l) => l.toclevel === 1).map((l) => ({
      title: l.line,
      id: l.number
    }))
  ), a = TS(
    e,
    t,
    n,
    o
  );
  return Promise.all([a, s]).then(
    ([i, l]) => {
      const c = Pf.convertSegmentedContentToPageSections(
        i,
        !1
        // No need to resolve references. Content can be used as it is
      );
      return c.forEach((u) => {
        const r = l.find((d) => d.id === u.id);
        u.originalTitle = (r == null ? void 0 : r.title) || "";
      }), new us({
        sections: c,
        content: i,
        pagelanguage: e,
        title: n
      });
    }
  );
}, TS = (e, t, n, o = null) => {
  const s = Z.getWikiDomainCode(e), a = Z.getWikiDomainCode(t), i = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (i.$revision = o, l += "/$revision");
  const c = Z.getCXServerUrl(
    l,
    i
  );
  return fetch(c).then((u) => u.json()).then((u) => u.segmentedContent);
}, AS = (e) => {
  const t = M1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: qu,
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
      var i;
      return o(((i = a == null ? void 0 : a.query) == null ? void 0 : i.pages) || []);
    }).fail(() => o([]));
  }).then((o) => o.map((s) => new us(s)));
}, DS = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount|pageprops",
    piprop: "thumbnail",
    pithumbsize: qu,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return Z.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.filter(({ pageprops: a }) => !(!a || "disambiguation" in a)).sort((a, i) => a.index - i.index).map(
      (a) => new us(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => (mw.cx.eventlogging.stats.articleSearchFailed(), []));
}, ds = {
  fetchPages: kS,
  fetchLanguageTitles: $S,
  fetchPageContent: LS,
  fetchNearbyPages: AS,
  searchPagesByTitlePrefix: DS,
  fetchLanguageLinksForLanguage: ES
}, PS = window.Vuex.useStore, ro = () => {
  const e = PS();
  return (t, n) => {
    n = n.filter(
      (a) => !!a && !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const i = n.slice(a, a + o), l = ds.fetchPages(t, i).then(
        (c) => c.forEach(
          (u) => e.commit("mediawiki/addPage", u)
        )
      );
      s.push(l);
    }
    return Promise.all(s);
  };
}, BS = window.Vuex.useStore, Ar = () => {
  const e = BS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (m) => m.matchesFilter(o.value)
  ), i = (g) => a().slice(
    s * g,
    s * (g + 1)
  ), l = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (m) => m.matchesFilter(o.value)
  ), c = (g) => l().slice(
    s * g,
    s * (g + 1)
  ), u = (g, m, p) => {
    const f = {
      id: g,
      type: ne
    }, h = e.getters[m](f);
    return h != null && h.id && e.commit(p, h == null ? void 0 : h.id), h;
  };
  return {
    getFilteredPageSuggestions: l,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: c,
    getSectionSuggestionsSliceByIndex: i,
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
class ao {
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
    wikidataId: i,
    size: l,
    leadSectionSize: c = null,
    suggestionSeed: u = null,
    suggestionProvider: r = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = i, this.size = l, this.leadSectionSize = c, this.langLinksCount = a, this.suggestionProvider = r, this.suggestionSeed = u, this.isListable = !0, this.seen = !1, this.inFeaturedCollection = !1;
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
    missing: i,
    sourceSectionSizes: l = {},
    sourceSections: c = [],
    targetSections: u = [],
    suggestionSeed: r = null,
    isListable: d = !0,
    suggestionProvider: g = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = i, this.presentSections = a, this.sourceSectionSizes = l, this.sourceSections = c, this.targetSections = u, this.suggestionSeed = r, this.isListable = d, this.suggestionProvider = g, this.seen = !1, this.inFeaturedCollection = !1;
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
const Bf = [
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
], FS = [
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
], NS = [
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
], MS = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], US = [
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
], IS = {
  en: Bf,
  es: FS,
  bn: NS,
  fr: MS,
  de: US
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
class Gu {
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
class Ff extends ao {
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
    wikidataId: i,
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
      wikidataId: i,
      size: l,
      suggestionProvider: c
    }), this.collection = new Gu(u);
  }
  /**
   * @returns {boolean}
   */
  collectionMatchesProvider() {
    var t;
    return this.collection.name === ((t = this.suggestionProvider) == null ? void 0 : t.id);
  }
}
class Nf extends on {
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
    missing: i,
    sourceSectionSizes: l,
    sourceSections: c = [],
    targetSections: u = [],
    isListable: r = !0,
    suggestionProvider: d = null,
    collection: g = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      present: a,
      missing: i,
      sourceSectionSizes: l,
      sourceSections: c,
      targetSections: u,
      isListable: r,
      suggestionProvider: d
    }), this.collection = new Gu(g);
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
const Mf = (e) => {
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
}, RS = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits", zS = () => x(void 0, null, function* () {
  if (mw.user.isAnon())
    return !1;
  const e = mw.user.getName();
  return (yield Mf(e)) < 100;
}), We = {
  stub: "stub",
  easy: "easy",
  medium: "medium",
  hard: "hard",
  unknown: "unknown"
}, Uf = {
  easy: 2500,
  medium: 1e4,
  hard: 4e4
}, bu = {
  easy: 1e3,
  medium: 4e3,
  hard: 12e3
}, If = (e, t) => !e || e < 0 ? We.unknown : e < t.easy ? We.stub : e < t.medium ? We.easy : e < t.hard ? We.medium : We.hard, Rf = (e) => If(e, Uf), Wu = (e) => If(e, bu), OS = (e) => {
  if (!e)
    return !1;
  const t = Rf(e);
  return t === We.stub || t === We.easy;
}, jS = (e) => {
  if (!e)
    return !1;
  const t = Wu(e);
  return t === We.stub || t === We.easy;
}, zf = (e) => e ? Wu(e) === We.easy : !1;
class Of {
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
const HS = Bf, ln = 6, qS = (e, t) => x(void 0, null, function* () {
  if (yield zS()) {
    let o;
    e ? e === "/sections" && (o = bu) : (o = Uf, qt || (t.lead_section = !0, o = bu)), o && (t.min_size = o[We.easy], t.max_size = o[We.medium] - 1);
  } else
    !qt && e !== "/sections" && (t.lead_section = !0);
}), Et = (n) => x(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
  let o = mw.config.get("wgRecommendToolAPIURL");
  yield qS(e, t), e && (o += e);
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
function GS() {
  return x(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Et({ urlPostfix: t, urlParams: e })) || [], o = {};
      for (const s in n)
        o[s] = n[s].map(
          (a) => new Gu(a)
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
function WS(e, t, n, o) {
  const s = {
    collection: e
  };
  return t && t.length ? s.qids = t.join("|") : n && o && o.length && (s.language = n, s.titles = o.join("|")), Et({
    urlPostfix: "/page-collection-membership",
    urlParams: s
  });
}
function XS(e) {
  const n = Z.getApi(e).get({
    action: "query",
    meta: "cxconfig",
    format: "json",
    formatversion: 2
  });
  return new Promise((o) => {
    n.then((s) => {
      var i;
      const a = (i = s == null ? void 0 : s.query) == null ? void 0 : i.cxconfig;
      o(
        a ? new Of(
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
function KS(s, a) {
  return x(this, arguments, function* (e, t, n = null, o = ln) {
    const i = {
      source: e,
      target: t,
      count: o
    };
    n && (i.seed = n);
    const { recommendations: l } = (yield Et({ urlParams: i })) || {};
    return (l || []).map(
      (c) => new ao({
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
const YS = (e, t) => x(void 0, null, function* () {
  const n = {
    source: e,
    target: t,
    count: ln,
    search_algorithm: "mostpopular"
  }, { recommendations: o } = (yield Et({ urlParams: n })) || {};
  return (o || []).map(
    (s) => new ao({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      size: s.size,
      leadSectionSize: s.lead_section_size || null,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), QS = (e, t) => x(void 0, null, function* () {
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
}), JS = (l) => x(void 0, [l], function* ({
  sourceLanguage: e,
  targetLanguage: t,
  collectionName: n = null,
  count: o = ln,
  continueOffset: s = null,
  continueSeed: a = null,
  featuredCollection: i = null
}) {
  const c = {
    source: e,
    target: t,
    count: o,
    collections: !0
  };
  n && (c.seed = n, s !== null && (c.continue_offset = s), a !== null && (c.continue_seed = a)), i && (c.featured_collection = i);
  const u = (yield Et({ urlParams: c })) || {};
  return {
    recommendations: (u.recommendations || []).map(
      (d) => new Ff({
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
}), ZS = (l) => x(void 0, [l], function* ({
  sourceLanguage: e,
  targetLanguage: t,
  collectionName: n = null,
  count: o = ln,
  continueOffset: s = null,
  continueSeed: a = null,
  featuredCollection: i = null
}) {
  const c = {
    source: e,
    target: t,
    count: o,
    collections: !0
  };
  n && (c.seed = n, s !== null && (c.continue_offset = s), a !== null && (c.continue_seed = a)), i && (c.featured_collection = i);
  const r = (yield Et({ urlPostfix: "/sections", urlParams: c })) || {};
  return {
    recommendations: (r.recommendations || []).map(
      (g) => new Nf({
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
    continue_offset: r.continue_offset,
    continue_seed: r.continue_seed
  };
});
function ey(e, t, n) {
  return x(this, null, function* () {
    const o = [t, e, n].map(
      (i) => encodeURIComponent(i)
    ), s = Z.getCXServerUrl(
      `/suggest/sections/${o.join("/")}?include_section_sizes=true`
    ), a = yield fetch(s).then(
      (i) => i.ok ? i.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((i) => i == null ? void 0 : i.sections).catch((i) => null);
    return a ? new on(a) : null;
  });
}
function ty(e, t, n = null) {
  return x(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: ln
    };
    n && (o.seed = n);
    const s = "/sections", { recommendations: a } = (yield Et({ urlPostfix: s, urlParams: o })) || {};
    return (a || []).map(
      (i) => new on({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: i.source_title,
        targetTitle: i.target_title,
        sourceSections: i.source_sections,
        targetSections: i.target_sections,
        present: i.present,
        missing: i.missing,
        sourceSectionSizes: i.source_section_sizes,
        seed: n
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
    const i = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    s && (i.featured_collection = s);
    const { recommendations: l } = (yield Et({ urlParams: i })) || {};
    return (l || []).map(
      (c) => new ao({
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
function oy(a) {
  return x(this, arguments, function* ({
    sourceLanguage: e,
    targetLanguage: t,
    topics: n,
    count: o = ln,
    featuredCollection: s = null
  }) {
    const i = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    s && (i.featured_collection = s);
    const l = "/sections", { recommendations: c } = (yield Et({ urlPostfix: l, urlParams: i })) || {};
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
function sy(a) {
  return x(this, arguments, function* ({
    sourceLanguage: e,
    targetLanguage: t,
    countries: n,
    count: o = ln,
    featuredCollection: s = null
  }) {
    const i = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    };
    s && (i.featured_collection = s);
    const { recommendations: l } = (yield Et({ urlParams: i })) || {};
    return (l || []).map(
      (c) => new ao({
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
function ay(a) {
  return x(this, arguments, function* ({
    sourceLanguage: e,
    targetLanguage: t,
    countries: n,
    count: o = ln,
    featuredCollection: s = null
  }) {
    const i = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    };
    s && (i.featured_collection = s);
    const l = "/sections", { recommendations: c } = (yield Et({ urlPostfix: l, urlParams: i })) || {};
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
function iy(e) {
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
    }, n = Z.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((i) => i.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function ry(e, t) {
  return x(this, null, function* () {
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
function ly(e) {
  const t = HS.map((o) => encodeURIComponent(o)).join("|"), n = Z.getCXServerUrl(
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
const cy = (e, t, n) => {
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
}, uy = (e) => {
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
}, dy = () => {
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
}, pe = {
  fetchFavorites: dy,
  fetchPageSuggestions: KS,
  fetchSectionSuggestion: ey,
  fetchSectionSuggestions: ty,
  fetchAppendixTargetSectionTitles: ly,
  fetchArticleSections: ry,
  markFavorite: cy,
  unmarkFavorite: uy,
  fetchUserEdits: iy,
  fetchMostPopularPageSuggestions: YS,
  fetchMostPopularSectionSuggestions: QS,
  fetchPageSuggestionsByTopics: ny,
  fetchSectionSuggestionsByTopics: oy,
  fetchPageSuggestionsByCountries: sy,
  fetchSectionSuggestionsByCountries: ay,
  fetchPageCollectionGroups: GS,
  fetchPageSuggestionsByCollections: JS,
  fetchSectionSuggestionsByCollections: ZS,
  fetchFeaturedCollectionDataByLanguage: XS,
  fetchPageCollectionMembership: WS
}, gy = window.Vuex.useStore, gs = () => {
  const e = gy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), o = (l) => {
    if (!l)
      return !1;
    const c = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), r = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((d) => d.sourceTitle);
    return !c.includes(l.sourceTitle) && !r.includes(l.sourceTitle);
  }, s = (l) => {
    const { pageSuggestions: c } = e.state.suggestions;
    return !c.some(
      (r) => r.sourceLanguage === l.sourceLanguage && r.targetLanguage === l.targetLanguage && r.sourceTitle === l.sourceTitle
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
function my(e) {
  const t = [...e];
  for (let n = t.length - 1; n > 0; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [t[n], t[o]] = [t[o], t[n]];
  }
  return t;
}
class py {
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
    this.seeds = my(t);
  }
}
const hy = window.Vuex.useStore, fy = window.Vue.computed, Xu = window.Vue.ref, wy = Xu([]), vy = Xu([]), ll = [], cl = [], Yd = [], Qd = Xu({});
let Cs = null;
const ul = {
  page: wy,
  section: vy
}, jf = () => {
  const e = hy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), o = fy(
    () => Qd.value[t.value] || []
  ), s = () => x(void 0, null, function* () {
    cl.includes(t.value) || (Qd.value[t.value] = yield pe.fetchUserEdits(t.value).then((d) => (cl.push(t.value), d)));
  }), a = () => x(void 0, null, function* () {
    let r = e.getters["translator/getTranslationsByStatus"]("published");
    r = r.filter(
      (p) => p.sourceLanguage === t.value
    );
    const d = ll.includes(r);
    if (r.length && !d)
      return ll.push(t.value), r.map(
        (p) => p.sourceTitle
      );
    if (ll.push(t.value), !cl.includes(t.value) && (yield s(), o.value.length > 0))
      return o.value;
    if (!Yd.includes(n.value)) {
      const f = (yield pe.fetchUserEdits(n.value).then((h) => (Yd.push(n.value), h))).slice(0, 20);
      if (f.length)
        return ds.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          f
        );
    }
    return null;
  }), i = (r) => {
    let d = ul[r].value.find(
      (g) => g.matchesLanguagePair(t.value, n.value)
    );
    return d || (d = new py({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), ul[r].value.push(d)), d;
  }, l = () => x(void 0, null, function* () {
    let r = !1, d = [];
    do {
      d = yield a(), d || (r = !0);
      for (const g in ul) {
        const m = i(g);
        m.setSeeds([
          ...m.seeds,
          ...d || []
        ]);
      }
    } while (!r && !(d != null && d.length));
  }), c = () => Cs || (Cs = l(), Cs.finally(() => {
    Cs = null;
  }));
  return {
    getSuggestionSeed: (r) => x(void 0, null, function* () {
      let d = i(r);
      return d.seeds.length || (yield c()), d.shiftSeeds();
    }),
    fetchPreviousEditsInSource: s,
    previousEditsInSource: o
  };
}, _y = 5;
function Eo(e) {
  return x(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < _y);
  });
}
const Sy = window.Vuex.useStore, yy = () => {
  const e = Sy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), { getSuggestionSeed: o } = jf(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = gs(), l = {
    id: an,
    type: Ge
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (r) => x(void 0, null, function* () {
      const d = [];
      return yield Eo(() => x(void 0, null, function* () {
        const g = yield o("page");
        let m = yield pe.fetchPageSuggestions(
          t.value,
          n.value,
          g || null
        );
        return m = m.filter(
          (p) => a(p)
        ), m = m.slice(0, r), d.push(...m), d.length >= r;
      })), d.forEach(
        (g) => g.suggestionProvider = l
      ), d;
    }),
    fetchSectionSuggestionsBasedOnEdits: (r) => x(void 0, null, function* () {
      const d = [];
      return yield Eo(() => x(void 0, null, function* () {
        const g = yield o("section"), m = yield pe.fetchSectionSuggestions(
          t.value,
          n.value,
          g || null
        );
        if (!m)
          return !1;
        let p = m.filter(
          (h) => s(h)
        );
        const f = m.filter(
          (h) => !s(h)
        );
        return p = p.slice(0, r), d.push(...p), f.forEach((h) => {
          h && !i(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), d.length >= r;
      })), d.forEach(
        (g) => g.suggestionProvider = l
      ), d;
    })
  };
}, Ku = window.Vue.ref, xs = "ungrouped", Jd = Ku({}), Zd = Ku({}), eg = Ku(!1);
let dl = null;
const Dr = () => {
  const e = () => x(void 0, null, function* () {
    try {
      const n = yield pe.fetchPageCollectionGroups(), o = Object.fromEntries(
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
    fetchPageCollectionGroups: () => (dl || (dl = e()), dl),
    pageCollectionGroupsFetched: eg,
    pageCollectionGroups: Jd,
    pageCollections: Zd
  };
}, gl = window.Vue.computed, Pr = window.Vue.ref, Cy = window.Vue.watch, xy = new mw.cx.SiteMapper(), Sr = xy.getCurrentWikiLanguageCode(), by = mw.config.get(
  "wgContentTranslationFeaturedCollection"
), ky = mw.config.get(
  "wgContentTranslationFeaturedCollectionCommunityName"
), $y = mw.config.get(
  "wgContentTranslationFeaturedCollectionDescription"
), Vy = mw.config.get(
  "wgContentTranslationFeaturedCollectionLink"
), Hf = Pr({
  [Sr]: new Of(
    by,
    $y,
    ky,
    Vy,
    Sr
  )
}), ku = Pr({
  [Sr]: Promise.resolve()
}), $u = Pr({
  [Sr]: !0
});
let tg = !1;
const ng = (e) => {
  if (!e || ku.value[e])
    return;
  const t = pe.fetchFeaturedCollectionDataByLanguage(e).then((n) => {
    n && (Hf.value[e] = n), $u.value[e] = !0;
  }).catch((n) => {
    $u.value[e] = !0, console.error("Failed to fetch featured collection:", n);
  });
  ku.value[e] = t;
}, Ey = (e, t) => !e || !Array.isArray(t) ? !1 : t.some(
  (n) => n.name.toLowerCase() === e.toLowerCase()
), Wt = (e = void 0) => {
  const { pageCollections: t, fetchPageCollectionGroups: n } = Dr();
  let o;
  if (e)
    o = Pr(e), e && ng(e);
  else {
    const { targetLanguageURLParameter: l } = P();
    o = l, tg || (Cy(
      o,
      (c) => {
        c && ng(c);
      },
      { immediate: !0 }
    ), tg = !0);
  }
  const s = gl(() => {
    const l = o.value, c = Hf.value[l];
    return c != null && c.name && Ey(c.name, t.value) ? c : null;
  }), a = gl(
    () => $u.value[o.value] || !1
  ), i = gl(
    () => Promise.all([
      n(),
      ku.value[o.value]
    ])
  );
  return {
    featuredCollection: s,
    featuredCollectionFetched: a,
    featuredCollectionPromise: i
  };
}, Ly = window.Vuex.useStore, Ty = window.Vue.computed, Br = window.Vue.ref, og = Br({}), sg = Br({}), ag = Br({}), ig = Br({}), rg = (e, t) => e && t.value[e] || null, lg = (e, t) => e ? t.value[e] ? t.value[e] === -1 ? -1 : t.value[e] + 1 : 0 : null, Yu = () => {
  const e = Ly(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), s = Ty(() => {
    var h;
    return ((h = o.value) == null ? void 0 : h.type) !== ne ? null : o.value.id;
  }), { featuredCollection: a, featuredCollectionPromise: i } = Wt(), {
    isSectionSuggestionValid: l,
    isPageSuggestionValid: c,
    sectionSuggestionExists: u
  } = gs(), r = (h = null) => h ? { id: h, type: ne } : o.value, d = (h) => x(void 0, null, function* () {
    var T;
    let w = null, v = null, y = null;
    if (!h)
      yield i.value, w = ((T = a.value) == null ? void 0 : T.name) || null;
    else if (v = lg(h, sg), y = rg(h, og), v === -1)
      return [];
    const C = [], _ = yield pe.fetchPageSuggestionsByCollections({
      sourceLanguage: t.value,
      targetLanguage: n.value,
      featuredCollection: w,
      continueOffset: v,
      continueSeed: y,
      collectionName: h
    });
    _.continue_offset && (sg.value[h] = _.continue_offset), _.continue_seed && (og.value[h] = _.continue_seed);
    const k = _.recommendations.filter(
      (N) => c(N)
    );
    return C.push(...k), C.forEach((N) => {
      N.suggestionProvider = r(h);
    }), C;
  }), g = () => d(s.value), m = () => x(void 0, null, function* () {
    var w;
    (yield d(
      ((w = a.value) == null ? void 0 : w.name) || null
    )).forEach(
      (v) => e.commit("suggestions/addPageSuggestion", v)
    );
  }), p = (h) => x(void 0, null, function* () {
    var N;
    let w = null, v = null, y = null;
    if (!h)
      yield i.value, w = ((N = a.value) == null ? void 0 : N.name) || null;
    else if (v = lg(
      h,
      ig
    ), y = rg(h, ag), v === -1)
      return [];
    yield i.value;
    const C = [], _ = yield pe.fetchSectionSuggestionsByCollections({
      sourceLanguage: t.value,
      targetLanguage: n.value,
      featuredCollection: w,
      continueOffset: v,
      continueSeed: y,
      collectionName: h
    });
    _.continue_offset && (ig.value[h] = _.continue_offset), _.continue_seed && (ag.value[h] = _.continue_seed);
    const k = _.recommendations.filter(
      (V) => l(V)
    ), T = _.recommendations.filter(
      (V) => !l(V)
    );
    return C.push(...k), T.forEach((V) => {
      V && !u(V) && (V.isListable = !1, e.commit("suggestions/addSectionSuggestion", V));
    }), C.forEach((V) => {
      V.suggestionProvider = r(h);
    }), C;
  });
  return {
    fetchSectionSuggestionsByCollections: () => p(s.value),
    fetchPageSuggestionsByCollections: g,
    fetchPageSuggestionsByFeaturedCollections: m,
    doFetchPageSuggestionsByCollection: d,
    doFetchSectionSuggestionsByCollection: p
  };
}, Ay = window.Vuex.useStore, Dy = () => {
  const e = Ay(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), o = {
    id: rn,
    type: Ge
  }, {
    getNextUnseenSectionSuggestionByCollection: s,
    getNextUnseenPageSuggestionByCollection: a
  } = Ar(), {
    isSectionSuggestionValid: i,
    isPageSuggestionValid: l,
    sectionSuggestionExists: c
  } = gs(), { featuredCollection: u, featuredCollectionPromise: r } = Wt(), {
    doFetchPageSuggestionsByCollection: d,
    doFetchSectionSuggestionsByCollection: g
  } = Yu(), m = (h, w, v, y, C) => x(void 0, null, function* () {
    var k;
    yield r.value;
    const _ = (k = u.value) == null ? void 0 : k.name;
    if (_) {
      let T = w(_);
      if (!T) {
        const [N = null, ...V] = yield h(_);
        T = N, V.forEach((L) => {
          e.commit(v, L);
        });
      }
      T && (y.push(T), C--);
    }
    return C;
  });
  return { fetchSectionSuggestionsPopular: (h) => x(void 0, null, function* () {
    const w = [];
    return h = yield m(
      g,
      s,
      "suggestions/addSectionSuggestion",
      w,
      h
    ), yield Eo(() => x(void 0, null, function* () {
      const v = yield pe.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let y = v.filter(
        (_) => i(_)
      );
      const C = v.filter(
        (_) => !i(_)
      );
      return y = y.slice(0, h), w.push(...y), C.forEach((_) => {
        _ && !c(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
      }), w.length >= h;
    })), w.forEach(
      (v) => v.suggestionProvider = o
    ), w;
  }), fetchPageSuggestionsPopular: (h) => x(void 0, null, function* () {
    const w = [];
    return h = yield m(
      d,
      a,
      "suggestions/addPageSuggestion",
      w,
      h
    ), yield Eo(() => x(void 0, null, function* () {
      let v = yield pe.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return v = v.filter(
        (y) => l(y)
      ), v = v.slice(0, h), w.push(...v), w.length >= h;
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
const Py = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', By = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', Fy = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', Ny = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', My = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', Uy = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', Iy = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', Ry = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', zy = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', Oy = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', jy = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', Hy = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', qy = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', Gy = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', Wy = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', Xy = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', Ky = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', Yy = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', Qy = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', qf = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', Jy = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', Zy = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', eC = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', tC = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', nC = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', oC = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', sC = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', aC = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', iC = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', rC = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', lC = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', cC = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', uC = '<g xmlns:xlink="http://www.w3.org/1999/xlink" transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', dC = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', gC = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', mC = '<circle cx="6" cy="6" r="3"/><circle cx="14" cy="6" r="3"/><path d="M14 10c3.31 0 6 1.79 6 4v2h-6v-2c0-1.48-1.21-2.77-3-3.46.88-.35 1.91-.54 3-.54m-8 0c3.31 0 6 1.79 6 4v2H0v-2c0-2.21 2.69-4 6-4"/>', Gf = Py, pC = By, Wf = {
  ltr: Fy,
  shouldFlip: !0
}, Xf = {
  ltr: Ny,
  shouldFlip: !0
}, Qu = {
  ltr: My,
  shouldFlip: !0
}, Kf = Uy, Yf = Iy, Qf = Ry, hC = zy, fC = Oy, ms = jy, wC = Hy, Ju = qy, Zu = Gy, Vu = Wy, vC = Xy, _C = {
  ltr: Ky,
  shouldFlip: !0
}, SC = {
  ltr: Yy,
  shouldFlip: !0
}, yC = Qy, CC = {
  langCodeMap: {
    ar: qf
  },
  default: Jy
}, xC = {
  langCodeMap: {
    ar: qf
  },
  default: Zy
}, Jf = eC, Pa = {
  ltr: tC,
  shouldFlip: !0
}, bC = nC, kC = oC, ps = {
  ltr: sC,
  shouldFlip: !0
}, ed = {
  ltr: aC,
  shouldFlip: !0
}, $C = {
  ltr: iC,
  shouldFlip: !0
}, Zf = rC, VC = lC, Eu = cC, EC = uC, LC = dC, ew = gC, td = {
  ltr: mC,
  shouldFlip: !0
}, TC = {
  [an]: ew,
  [rn]: yC,
  [ne]: Qu
}, AC = {
  [ne]: SC,
  [Pe]: bC
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
    return TC[this.provider] || null;
  }
  get expandableIcon() {
    return AC[this.provider] || this.icon;
  }
}
const bs = window.Vue.computed, { topics: cg, regions: ug } = mw.loader.require(
  "ext.cx.articlefilters"
), DC = (e) => new Ca({
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
  const e = _e(), { currentSuggestionFilters: t, setFilterURLParams: n } = P(), { featuredCollection: o, featuredCollectionFetched: s } = Wt(), {
    validateFilters: a,
    filtersValidatorError: i,
    isDefaultFilter: l,
    isPopularFilter: c,
    isEqualFilter: u
  } = zu(), r = new bt({
    id: an,
    type: Ge,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), d = new bt({
    id: rn,
    type: Ge,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), g = new bt({
    id: ne,
    type: Ge,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollections: m, pageCollectionGroups: p, pageCollectionGroupsFetched: f } = Dr(), h = bs(() => {
    const M = new Ca({
      id: Ge,
      type: Ge,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [r, d]
    });
    return Object.keys(p.value).length > 1 && M.filters.push(g), M;
  }), w = () => {
    const M = he({}, p.value);
    delete M.ungrouped;
    const W = [];
    for (const X in M) {
      const le = M[X].map(
        (Se) => new bt({
          id: Se.name,
          label: Se.name,
          type: ne
        })
      ), te = new bt({
        id: X,
        label: X,
        type: ne,
        subFilters: le
      });
      W.push(te);
    }
    const Y = (p.value.ungrouped || []).map(
      (X) => new bt({
        id: X.name,
        label: X.name,
        type: ne
      })
    );
    return [...W, ...Y];
  }, v = bs(
    () => new Ca({
      id: ne,
      type: ne,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: w()
    })
  ), y = new Ca({
    id: Pe,
    type: Pe,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: ug.map(
      (M) => new bt({
        id: M.id,
        label: M.label,
        type: Pe,
        subFilters: M.countries.map(
          (W) => new bt({
            id: W.id,
            label: W.label,
            type: Pe
          })
        )
      })
    )
  }), C = bs(() => {
    const M = [
      h.value,
      ...cg.map(DC),
      y
    ];
    return v.value.filters.length && M.splice(1, 0, v.value), M;
  }), _ = bs(
    () => !f.value || !s.value
  ), k = bs(
    () => {
      var M, W;
      return new bt({
        id: (M = o.value) == null ? void 0 : M.name,
        label: (W = o.value) == null ? void 0 : W.name,
        type: ne
      });
    }
  ), T = () => {
    if (_.value)
      return [];
    const M = V(), W = [];
    return o.value && W.push(k.value), !l(M) && !c(M) && !u(M, k.value) && W.push(M), W.push(r, d), W;
  }, N = (M) => {
    n(M.type, M.id);
  }, V = () => t.value.type === Gt ? new bt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : C.value.flatMap((M) => M.filters).flatMap((M) => [M, ...M.subFilters || []]).find(L), L = (M) => u(M, t.value);
  return {
    allFilters: C,
    getFiltersSummary: T,
    selectFilter: N,
    isFilterSelected: L,
    getArticleTopics: (M) => {
      const Y = cg.flatMap((X) => X.topics).find((X) => X.topicId === M);
      return Y ? Y.articletopics : [];
    },
    waitingForPageCollectionsFetch: _,
    findSelectedFilter: V,
    validateURLFilterWithCollections: () => {
      if (!f.value)
        return;
      const M = a(
        {
          type: t.value.type,
          id: t.value.id
        },
        m.value
      );
      n(M.type, M.id), i.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (M) => {
      const W = ug.find((Y) => Y.id === M);
      return W ? W.countries.map((Y) => Y.id) : [M];
    },
    setFeaturedCollectionFilterIfNeeded: () => {
      if (!l(t.value))
        return;
      const M = a(
        k.value,
        m.value
      );
      N(M);
    },
    isFilteringByFeaturedCollection: () => {
      var W;
      const M = V();
      return (M == null ? void 0 : M.id) === ((W = o.value) == null ? void 0 : W.name);
    }
  };
}, PC = window.Vuex.useStore, BC = () => {
  const e = PC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = gs(), { getArticleTopics: l } = lo(), { featuredCollection: c, featuredCollectionPromise: u } = Wt();
  return {
    fetchPageSuggestionsByTopics: (g) => x(void 0, null, function* () {
      var w;
      yield u.value;
      const m = o.value.id, p = {
        id: m,
        type: et
      }, f = l(m);
      let h = yield pe.fetchPageSuggestionsByTopics({
        sourceLanguage: t.value,
        targetLanguage: n.value,
        topics: f,
        featuredCollection: (w = c.value) == null ? void 0 : w.name
      });
      return h = h.filter(
        (v) => a(v)
      ), h = h.slice(0, g), h.forEach(
        (v) => v.suggestionProvider = p
      ), h;
    }),
    fetchSectionSuggestionsByTopics: (g) => x(void 0, null, function* () {
      yield u.value;
      const m = o.value.id, p = {
        id: m,
        type: et
      }, f = l(m), h = [];
      return yield Eo(() => x(void 0, null, function* () {
        var C;
        const w = yield pe.fetchSectionSuggestionsByTopics({
          sourceLanguage: t.value,
          targetLanguage: n.value,
          topics: f,
          featuredCollection: (C = c.value) == null ? void 0 : C.name
        });
        let v = w.filter(
          (_) => s(_)
        );
        const y = w.filter(
          (_) => !s(_)
        );
        return v = v.slice(0, g), h.push(...v), y.forEach((_) => {
          _ && !i(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
        }), h.length >= g;
      })), h.forEach(
        (w) => w.suggestionProvider = p
      ), h;
    })
  };
}, FC = window.Vuex.useStore, NC = () => {
  const e = FC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = gs(), { getCountries: l } = lo(), { featuredCollection: c, featuredCollectionPromise: u } = Wt();
  return {
    fetchPageSuggestionsByCountries: (g) => x(void 0, null, function* () {
      var p;
      yield u.value;
      let m = yield pe.fetchPageSuggestionsByCountries({
        sourceLanguage: t.value,
        targetLanguage: n.value,
        countries: l(o.value.id),
        featuredCollection: (p = c.value) == null ? void 0 : p.name
      });
      return m = m.filter(
        (f) => a(f)
      ), m = m.slice(0, g), m.forEach(
        (f) => f.suggestionProvider = o.value
      ), m;
    }),
    fetchSectionSuggestionsByCountries: (g) => x(void 0, null, function* () {
      yield u.value;
      const m = [];
      return yield Eo(() => x(void 0, null, function* () {
        var w;
        const p = yield pe.fetchSectionSuggestionsByCountries({
          sourceLanguage: t.value,
          targetLanguage: n.value,
          countries: l(o.value.id),
          featuredCollection: (w = c.value) == null ? void 0 : w.name
        });
        let f = p.filter(
          (v) => s(v)
        );
        const h = p.filter(
          (v) => !s(v)
        );
        return f = f.slice(0, g), m.push(...f), h.forEach((v) => {
          v && !i(v) && (v.isListable = !1, e.commit("suggestions/addSectionSuggestion", v));
        }), m.length >= g;
      })), m.forEach(
        (p) => p.suggestionProvider = o.value
      ), m;
    })
  };
}, MC = window.Vuex.useStore, UC = () => {
  const e = MC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: i
  } = gs();
  return {
    fetchPageSuggestionsBySeed: (u) => x(void 0, null, function* () {
      const r = o.value.id;
      let d = yield pe.fetchPageSuggestions(
        t.value,
        n.value,
        r
      );
      return d = d.filter(
        (g) => a(g)
      ), d = d.slice(0, u), d.forEach(
        (g) => g.suggestionProvider = {
          id: r,
          type: Gt
        }
      ), d;
    }),
    fetchSectionSuggestionsBySeed: (u) => x(void 0, null, function* () {
      const r = [], d = o.value.id;
      return yield Eo(() => x(void 0, null, function* () {
        const g = yield pe.fetchSectionSuggestions(
          t.value,
          n.value,
          d
        );
        if (!g)
          return !1;
        let m = g.filter(
          (f) => s(f)
        );
        const p = g.filter(
          (f) => !s(f)
        );
        return m = m.slice(0, u), r.push(...m), p.forEach((f) => {
          f && !i(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), r.length >= u;
      })), r.forEach(
        (g) => g.suggestionProvider = {
          id: d,
          type: Gt
        }
      ), r;
    })
  };
}, IC = () => {
  const { currentSuggestionFilters: e } = P(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = yy(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = Dy(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: i } = BC(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: c
  } = NC(), {
    fetchPageSuggestionsByCollections: u,
    fetchSectionSuggestionsByCollections: r
  } = Yu(), { fetchPageSuggestionsBySeed: d, fetchSectionSuggestionsBySeed: g } = UC(), m = {
    [an]: t,
    [rn]: o,
    [ne]: u,
    [et]: a,
    [Pe]: l,
    [Gt]: d
  }, p = {
    [an]: n,
    [rn]: s,
    [ne]: r,
    [et]: i,
    [Pe]: c,
    [Gt]: g
  }, f = (v) => v.type === Ge ? v.id : v.type;
  return {
    getCurrentPageSuggestionProvider: () => m[f(e.value)],
    getCurrentSectionSuggestionProvider: () => p[f(e.value)]
  };
}, nd = () => {
  const { featuredCollectionPromise: e, featuredCollection: t } = Wt();
  function n(o, s, a, i) {
    return x(this, null, function* () {
      var r;
      const l = !Array.isArray(o) || o.length === 0, c = !s || !Array.isArray(a) || !a.length;
      if (l && c)
        return {};
      if (!i)
        if (yield e.value, (r = t.value) != null && r.name)
          i = t.value.name;
        else
          return {};
      return yield pe.fetchPageCollectionMembership(
        i,
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
  const { inFeaturedCollection: e } = nd(), t = (s) => {
    const a = {}, i = {};
    for (const l of s) {
      const { featuredCollection: c, featuredCollectionPromise: u } = Wt(l);
      a[l] = c, i[l] = u.value;
    }
    return { featuredCollections: a, featuredCollectionPromises: i };
  }, n = (s, a) => {
    const i = {};
    for (const l of s) {
      const c = a(l);
      i[c] || (i[c] = []), i[c].push(l);
    }
    return i;
  };
  function o(s, a) {
    return x(this, null, function* () {
      var p;
      const { titleGetter: i } = a;
      if (!s || !s.length)
        return s;
      const l = n(
        s,
        (f) => f.targetLanguage
      ), c = Object.keys(l), { featuredCollections: u, featuredCollectionPromises: r } = t(c);
      yield Promise.all(Object.values(r));
      const d = [];
      for (const f in l) {
        const h = l[f], w = u[f];
        if (!((p = w.value) != null && p.name))
          continue;
        const v = n(
          h,
          (y) => y.sourceLanguage
        );
        for (const y in v) {
          const C = v[y], _ = C.map((T) => i(T)), k = e(
            null,
            y,
            _,
            w.value.name
          );
          d.push({ promise: k, items: C });
        }
      }
      const g = d.map(({ promise: f }) => f), m = yield Promise.all(g);
      return d.forEach(({ items: f }, h) => {
        const w = m[h];
        for (const v of f)
          v.inFeaturedCollection = w[i(v)];
      }), s;
    });
  }
  return {
    addFeaturedCollectionFlag: o
  };
}, RC = window.Vuex.useStore, od = () => {
  const e = RC(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Ar(), o = ro(), { addFeaturedCollectionFlag: s } = Fr(), { isFilteringByFeaturedCollection: a } = lo(), i = () => {
    const m = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - m.length % p;
  }, l = () => {
    const m = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - m.length % p;
  }, {
    getCurrentPageSuggestionProvider: c,
    getCurrentSectionSuggestionProvider: u
  } = IC(), r = (m) => {
    try {
      const p = m.map((f) => f.sourceTitle);
      if (p.length) {
        const f = m[0].sourceLanguage;
        return o(f, p);
      }
    } catch (p) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => x(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const m = i(), f = yield u()(
        m
      );
      !a() && f.length > 0 && (yield s(f, {
        titleGetter: (h) => h.sourceTitle
      })), f.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), r(f), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => x(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const m = l(), f = yield c()(
        m
      );
      !a() && f.length > 0 && (yield s(f, {
        titleGetter: (h) => h.sourceTitle
      })), f.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), r(f), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, zC = window.Vuex.useStore, tw = () => {
  const e = zC();
  return (t) => x(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield pe.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, OC = window.Vuex.useStore, nw = () => {
  const e = OC(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = od(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Ar(), { targetLanguageURLParameter: a } = P(), i = tw();
  return () => x(void 0, null, function* () {
    const l = s(0), c = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, r = l.length === u, d = c.length === u;
    r && d || (yield i(a.value), t(), n());
  });
}, jC = window.Vuex.useStore, HC = window.Vue.ref, ml = /* @__PURE__ */ new Map(), dg = HC([]), Ba = () => {
  const e = jC(), t = ro();
  return { loadSuggestion: (s, a, i) => {
    const l = `${s}:${a}:${i}`;
    if (ml.has(l))
      return ml.get(l);
    const u = (() => x(void 0, null, function* () {
      const r = yield pe.fetchSectionSuggestion(
        s,
        i,
        a
      );
      try {
        yield t(s, [i]);
        const d = e.getters["mediawiki/getPage"](
          s,
          i
        );
        if (!d)
          throw new Error("No page fetched");
        if (!r)
          return new ao({
            sourceLanguage: s,
            targetLanguage: a,
            sourceTitle: i,
            langLinksCount: d.langLinksCount,
            size: d.articleSize,
            wikidataId: d.wikidataId
          });
      } catch (d) {
        const g = new Error(
          `No page metadata found for title ${i} and language pair ${s}-${a}. ${d}`
        );
        throw mw.errorLogger.logError(g, "error.contenttranslation"), g;
      }
      return dg.value.push(r), r;
    }))();
    return ml.set(l, u), u;
  }, getLoadedSuggestion: (s, a, i) => dg.value.find(
    (l) => l.sourceLanguage === s && l.targetLanguage === a && l.sourceTitle === i
  ) || null };
}, gg = window.Vue.computed, qC = window.Vuex.useStore, cn = () => {
  const e = qC(), {
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
}, ow = window.Vuex.useStore, { setLanguageURLParams: GC } = P(), sd = (e, t, n) => {
  GC(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, sw = () => {
  const e = ow(), t = nw();
  return (n, o) => {
    const {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a
    } = P();
    n === o && (n = a.value, o = s.value), sd(e, n, o), t();
  };
}, WC = () => {
  const e = ow(), { loadSuggestion: t } = Ba(), { currentLanguageTitleGroup: n, targetPageExists: o } = cn(), s = ro();
  return (a, i) => x(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      setPageURLParam: u,
      clearSectionURLParameter: r
    } = P();
    a === i && (a = c.value, i = l.value);
    const d = n.value.getTitleForLanguage(a);
    sd(e, a, i), u(d), o.value ? (r(), yield t(
      l.value,
      c.value,
      d
    )) : yield s(l.value, [d]);
  });
}, XC = window.Vuex.useStore, KC = window.Vue.ref, mg = KC(!1), aw = () => {
  const e = XC(), { supportedLanguageCodes: t, fetchSupportedLanguageCodes: n } = Da(), { sourceLanguageURLParameter: o, targetLanguageURLParameter: s } = P(), a = () => {
    const l = Z.getCurrentWikiLanguageCode(), c = (p) => t.value.includes(p), u = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, r = [
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
    ], g = r.find(
      (p) => c(p)
    );
    return { sourceLanguage: d.find(
      (p) => c(p) && p !== g
    ), targetLanguage: g };
  };
  return { initializeApplicationLanguages: () => x(void 0, null, function* () {
    yield n();
    const { sourceLanguage: l, targetLanguage: c } = a();
    sd(e, l, c), mg.value = !0;
  }), applicationLanguagesInitialized: mg };
};
const YC = window.Vue.resolveDynamicComponent, pg = window.Vue.openBlock, hg = window.Vue.createBlock, QC = window.Vue.Transition, ks = window.Vue.withCtx, $s = window.Vue.createVNode, JC = window.Vue.resolveComponent, pl = window.Vue.unref, ZC = window.Vuex.useStore, fg = window.Vue.computed, ex = window.Vue.onMounted, tx = window.Vue.inject, nx = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = P(), { initializeApplicationLanguages: n } = aw();
    t(), n();
    const o = tx("breakpoints"), s = fg(() => o.value.mobile), a = ZC(), i = fg(
      () => a.state.application.autoSavePending
    );
    return ex(() => {
      window.addEventListener("beforeunload", (l) => {
        i.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && Cf.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((c) => {
          c instanceof cs && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, c) => {
      const u = JC("router-view");
      return pg(), hg(pl(C0), { id: "contenttranslation" }, {
        default: ks(() => [
          $s(pl(R), { class: "cx-container" }, {
            default: ks(() => [
              $s(pl(b), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: ks(() => [
                  $s(u, null, {
                    default: ks(({ Component: r, route: d }) => [
                      $s(QC, {
                        name: s.value ? d.meta.transitionName : ""
                      }, {
                        default: ks(() => [
                          (pg(), hg(YC(r)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      $s(F1)
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
}, ox = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, sx = {
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
class iw {
  constructor({ id: t, type: n, question: o, url: s, key: a, error: i }) {
    this.id = t, this.type = n, this.question = o, this.url = s, this.key = a, this.error = i;
  }
}
class Pn {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new iw(a);
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
    (s, a) => Ke(he({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class ax {
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
    ].map((i) => ({
      id: i,
      mt: n[i] || null,
      user: t[i] || null
    }));
  }
}
class ad extends Iu {
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
    lastUpdatedTimestamp: i,
    pageRevision: l,
    status: c,
    targetTitle: u,
    targetUrl: r,
    sectionTranslations: d
  }) {
    super({
      translationId: t,
      sourceTitle: n,
      sourceLanguage: o,
      targetLanguage: s,
      startTimestamp: a,
      lastUpdatedTimestamp: i,
      pageRevision: l,
      status: c,
      targetTitle: u
    }), this.targetUrl = r, this.sectionTranslations = d;
  }
}
const Nr = mw.user.isAnon() ? void 0 : "user", rw = (e) => {
  if (e === "assertuserfailed")
    throw new cs();
};
function lw(e, t = null) {
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
      let i;
      if (e === "draft" ? i = a.map(
        (c) => new kr(Ke(he({}, c), { status: e }))
      ) : i = a.map(
        (c) => new ad(Ke(he({}, c), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const c = yield lw(
          e,
          s.continue.offset
        );
        i = i.concat(c);
      }
      return i;
    }));
  });
}
function ix(e) {
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
      (a) => new ax(a)
    );
  });
}
function rx(e, t, n, o, s) {
  return x(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== de.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const i = Z.getCXServerUrl(a);
    return fetch(i, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (l) => Promise.all([l.json(), Promise.resolve(l.ok)])
    ).then(([l, c]) => {
      var r, d;
      if (!c) {
        const g = l.detail || l.type || l.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(g);
      }
      return (d = (r = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(l.contents)) == null ? void 0 : r.groups) == null ? void 0 : d.content;
    }).catch((l) => Promise.reject(l));
  });
}
const lx = (e, t, n) => {
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
}, cx = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: i,
  revision: l,
  captchaId: c,
  captchaWord: u,
  forceShowCaptcha: r,
  publishTarget: d,
  sectionTranslationId: g,
  existingSectionTitle: m
}) => {
  const p = {
    assert: Nr,
    action: "cxpublishsection",
    title: n,
    html: e,
    sourcetitle: t,
    sourcerevid: l,
    sourcesectiontitle: o,
    targetsectiontitle: s,
    sourcelanguage: a,
    targetlanguage: i,
    publishtarget: d,
    sectiontranslationid: g,
    existingsectiontitle: m
  };
  return (c || u) && (p.captchaid = c, p.captchaword = u, p.wgConfirmEditForceShowCaptcha = r), new mw.Api().postWithToken("csrf", p).then((h) => {
    if (h = h.cxpublishsection, h.result === "error") {
      if (h.edit.captcha)
        return {
          publishFeedbackMessage: new Pn({
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
  }).catch((h, w) => {
    rw(h);
    let v;
    return w = w || {}, w.exception ? v = w.exception.message : w.error ? v = w.error.info : v = "Unknown error", {
      publishFeedbackMessage: new Pn({
        text: v,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, ux = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: i,
  units: l,
  sectionId: c,
  isSandbox: u,
  progress: r
}) => {
  const d = {
    assert: Nr,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: i,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(l),
    sectionid: c,
    issandbox: u,
    progress: JSON.stringify(r)
  };
  return new mw.Api().postWithToken("csrf", d).then((m) => m.sxsave.sectiontranslationid).catch((m, p) => {
    rw(m);
    let f;
    return p.exception ? (f = p.exception.message, mw.cx.eventlogging.stats.saveFailure(!0)) : p.error ? (f = p.error.info, p.error.code && p.error.code.indexOf("internal_api_error") === 0 && mw.cx.eventlogging.stats.saveFailure(!0)) : (f = "Unknown error", mw.cx.eventlogging.stats.saveFailure(!0)), new Pn({ text: f, status: "error" });
  });
}, dx = (e) => {
  const t = {
    assert: Nr,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, gx = () => {
  const e = {
    assert: Nr,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new ad(n.cxcheckunreviewed.translation)
  );
}, mx = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, px = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, hx = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), $t = {
  fetchTranslations: lw,
  fetchTranslationUnits: ix,
  fetchSegmentTranslation: rx,
  parseTemplateWikitext: lx,
  publishTranslation: cx,
  saveTranslation: ux,
  deleteTranslation: mx,
  fetchTranslatorStats: hx,
  deleteCXTranslation: px,
  splitTranslation: dx,
  checkUnreviewedTranslations: gx
};
function fx(t) {
  return x(this, arguments, function* ({ commit: e }) {
    const n = yield $t.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const wx = {
  fetchTranslatorStats: fx
}, vx = {
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
}, _x = {
  namespaced: !0,
  state: ox,
  getters: sx,
  actions: wx,
  mutations: vx
}, Sx = {
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
  appendixSectionTitles: IS
}, yx = {
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
}, Cx = {
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
}, xx = {
  namespaced: !0,
  state: Sx,
  getters: yx,
  actions: {},
  mutations: Cx
}, bx = {
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
}, kx = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== de.EMPTY_TEXT_PROVIDER_KEY,
  /**
   * Get nearby articles (based on user location) in current source language
   *
   * @param {Object} state
   * @return {Page[]}
   */
  getNearbyPages: (e) => {
    const { sourceLanguageURLParameter: t } = P();
    return e.nearbyPages[t.value];
  }
};
function $x(n) {
  return x(this, arguments, function* ({ commit: e, state: t }) {
    var i;
    const { sourceLanguageURLParameter: o } = P(), s = o.value;
    if ((i = t.nearbyPages[s]) != null && i.length)
      return;
    const a = yield ds.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const Vx = { fetchNearbyPages: $x }, Ex = {
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
}, Lx = {
  namespaced: !0,
  state: bx,
  getters: kx,
  actions: Vx,
  mutations: Ex
}, Tx = {
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
}, Ax = {
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
    } = P(), s = de.getStorageKey(
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
}, Dx = {
  namespaced: !0,
  state: Tx,
  mutations: Ax
}, Px = window.Vuex.createStore, Bx = Px({
  modules: { translator: _x, suggestions: xx, mediawiki: Lx, application: Dx }
});
function Fx() {
  return cw().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function cw() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Nx = typeof Proxy == "function", Mx = "devtools-plugin:setup", Ux = "plugin:settings:set";
let Po, Lu;
function Ix() {
  var e;
  return Po !== void 0 || (typeof window != "undefined" && window.performance ? (Po = !0, Lu = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Po = !0, Lu = global.perf_hooks.performance) : Po = !1), Po;
}
function Rx() {
  return Ix() ? Lu.now() : Date.now();
}
class zx {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const l = t.settings[i];
        o[i] = l.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, o);
    try {
      const i = localStorage.getItem(s), l = JSON.parse(i);
      Object.assign(a, l);
    } catch (i) {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i));
        } catch (l) {
        }
        a = i;
      },
      now() {
        return Rx();
      }
    }, n && n.on(Ux, (i, l) => {
      i === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, l) => this.target ? this.target.on[l] : (...c) => {
        this.onQueue.push({
          method: l,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...c) => (this.targetQueue.push({
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
function Ox(e, t) {
  const n = e, o = cw(), s = Fx(), a = Nx && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Mx, e, t);
  else {
    const i = a ? new zx(n, s) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const uw = window.Vue.getCurrentInstance, rs = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const nn = window.Vue.computed, xa = window.Vue.unref, jx = window.Vue.watchEffect, dw = window.Vue.defineComponent, Hx = window.Vue.reactive, gw = window.Vue.h, hl = window.Vue.provide, qx = window.Vue.ref, pw = window.Vue.watch, Gx = window.Vue.shallowRef, Wx = window.Vue.shallowReactive, Xx = window.Vue.nextTick, Dn = typeof window != "undefined";
function Kx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const se = Object.assign;
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
function J(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Yx = /\/$/, Qx = (e) => e.replace(Yx, "");
function wl(e, t, n = "/") {
  let o, s = {}, a = "", i = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return l < c && l >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), a = t.slice(c + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), i = t.slice(l, t.length)), o = eb(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + i,
    path: o,
    query: s,
    hash: i
  };
}
function Jx(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function vg(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function _g(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && io(t.matched[o], n.matched[s]) && hw(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function io(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function hw(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Zx(e[n], t[n]))
      return !1;
  return !0;
}
function Zx(e, t) {
  return mt(e) ? Sg(e, t) : mt(t) ? Sg(t, e) : e === t;
}
function Sg(e, t) {
  return mt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function eb(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return J(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), s = o[o.length - 1];
  (s === ".." || s === ".") && o.push("");
  let a = n.length - 1, i, l;
  for (i = 0; i < o.length; i++)
    if (l = o[i], l !== ".")
      if (l === "..")
        a > 1 && a--;
      else
        break;
  return n.slice(0, a).join("/") + "/" + o.slice(i - (i === o.length ? 1 : 0)).join("/");
}
var $a;
(function(e) {
  e.pop = "pop", e.push = "push";
})($a || ($a = {}));
var ka;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ka || (ka = {}));
function tb(e) {
  if (!e)
    if (Dn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Qx(e);
}
const nb = /^[^#]+#/;
function ob(e, t) {
  return e.replace(nb, "#") + t;
}
function sb(e, t) {
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
function ab(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          J(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        J(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && J(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = sb(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function yg(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Tu = /* @__PURE__ */ new Map();
function ib(e, t) {
  Tu.set(e, t);
}
function rb(e) {
  const t = Tu.get(e);
  return Tu.delete(e), t;
}
let lb = () => location.protocol + "//" + location.host;
function fw(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), vg(c, "");
  }
  return vg(n, e) + o + s;
}
function cb(e, t, n, o) {
  let s = [], a = [], i = null;
  const l = ({ state: g }) => {
    const m = fw(e, location), p = n.value, f = t.value;
    let h = 0;
    if (g) {
      if (n.value = m, t.value = g, i && i === p) {
        i = null;
        return;
      }
      h = f ? g.position - f.position : 0;
    } else
      o(m);
    s.forEach((w) => {
      w(n.value, p, {
        delta: h,
        type: $a.pop,
        direction: h ? h > 0 ? ka.forward : ka.back : ka.unknown
      });
    });
  };
  function c() {
    i = n.value;
  }
  function u(g) {
    s.push(g);
    const m = () => {
      const p = s.indexOf(g);
      p > -1 && s.splice(p, 1);
    };
    return a.push(m), m;
  }
  function r() {
    const { history: g } = window;
    g.state && g.replaceState(se({}, g.state, { scroll: Mr() }), "");
  }
  function d() {
    for (const g of a)
      g();
    a = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", r);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", r, {
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
    scroll: s ? Mr() : null
  };
}
function ub(e) {
  const { history: t, location: n } = window, o = {
    value: fw(e, n)
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
  function a(c, u, r) {
    const d = e.indexOf("#"), g = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : lb() + e + c;
    try {
      t[r ? "replaceState" : "pushState"](u, "", g), s.value = u;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? J("Error with push/replace State", m) : console.error(m), n[r ? "replace" : "assign"](g);
    }
  }
  function i(c, u) {
    const r = se({}, t.state, Cg(
      s.value.back,
      // keep back and forward entries but override current position
      c,
      s.value.forward,
      !0
    ), u, { position: s.value.position });
    a(c, r, !0), o.value = c;
  }
  function l(c, u) {
    const r = se(
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
    ({}).NODE_ENV !== "production" && !t.state && J(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(r.current, r, !0);
    const d = se({}, Cg(o.value, c, null), { position: r.position + 1 }, u);
    a(c, d, !1), o.value = c;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: i
  };
}
function db(e) {
  e = tb(e);
  const t = ub(e), n = cb(e, t.state, t.location, t.replace);
  function o(a, i = !0) {
    i || n.pauseListeners(), history.go(a);
  }
  const s = se({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: ob.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function gb(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && J(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), db(e);
}
function mb(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function ww(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Mn = {
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
const pb = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${fb(t)}" via a navigation guard.`;
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
  return {}.NODE_ENV !== "production" ? se(new Error(pb[e](t)), {
    type: e,
    [Au]: !0
  }, t) : se(new Error(), {
    type: e,
    [Au]: !0
  }, t);
}
function dn(e, t) {
  return e instanceof Error && Au in e && (t == null || !!(e.type & t));
}
const hb = ["params", "query", "hash"];
function fb(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of hb)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const bg = "[^/]+?", wb = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, vb = /[.+*?^${}()[\]/\\]/g;
function _b(e, t) {
  const n = se({}, wb, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const u of e) {
    const r = u.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !u.length && (s += "/");
    for (let d = 0; d < u.length; d++) {
      const g = u[d];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        d || (s += "/"), s += g.value.replace(vb, "\\$&"), m += 40;
      else if (g.type === 1) {
        const { value: p, repeatable: f, optional: h, regexp: w } = g;
        a.push({
          name: p,
          repeatable: f,
          optional: h
        });
        const v = w || bg;
        if (v !== bg) {
          m += 10;
          try {
            new RegExp(`(${v})`);
          } catch (C) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${v}): ` + C.message);
          }
        }
        let y = f ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        d || (y = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        h && u.length < 2 ? `(?:/${y})` : "/" + y), h && (y += "?"), s += y, m += 20, h && (m += -8), f && (m += -20), v === ".*" && (m += -50);
      }
      r.push(m);
    }
    o.push(r);
  }
  if (n.strict && n.end) {
    const u = o.length - 1;
    o[u][o[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function l(u) {
    const r = u.match(i), d = {};
    if (!r)
      return null;
    for (let g = 1; g < r.length; g++) {
      const m = r[g] || "", p = a[g - 1];
      d[p.name] = m && p.repeatable ? m.split("/") : m;
    }
    return d;
  }
  function c(u) {
    let r = "", d = !1;
    for (const g of e) {
      (!d || !r.endsWith("/")) && (r += "/"), d = !1;
      for (const m of g)
        if (m.type === 0)
          r += m.value;
        else if (m.type === 1) {
          const { value: p, repeatable: f, optional: h } = m, w = p in u ? u[p] : "";
          if (mt(w) && !f)
            throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const v = mt(w) ? w.join("/") : w;
          if (!v)
            if (h)
              g.length < 2 && (r.endsWith("/") ? r = r.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${p}"`);
          r += v;
        }
    }
    return r || "/";
  }
  return {
    re: i,
    score: o,
    keys: a,
    parse: l,
    stringify: c
  };
}
function Sb(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function yb(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = Sb(o[n], s[n]);
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
const Cb = {
  type: 0,
  value: ""
}, xb = /[a-zA-Z0-9_]/;
function bb(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Cb]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${u}": ${m}`);
  }
  let n = 0, o = n;
  const s = [];
  let a;
  function i() {
    a && s.push(a), a = [];
  }
  let l = 0, c, u = "", r = "";
  function d() {
    u && (n === 0 ? a.push({
      type: 0,
      value: u
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: u,
      regexp: r,
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
        c === "/" ? (u && d(), i()) : c === ":" ? (d(), n = 1) : g();
        break;
      case 4:
        g(), n = o;
        break;
      case 1:
        c === "(" ? n = 2 : xb.test(c) ? g() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")" ? r[r.length - 1] == "\\" ? r = r.slice(0, -1) + c : n = 3 : r += c;
        break;
      case 3:
        d(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--, r = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), d(), i(), s;
}
function kb(e, t, n) {
  const o = _b(bb(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      a.has(i.name) && J(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(i.name);
  }
  const s = se(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function $b(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Eg({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(r) {
    return o.get(r);
  }
  function a(r, d, g) {
    const m = !g, p = Vb(r);
    ({}).NODE_ENV !== "production" && Ab(p, d), p.aliasOf = g && g.record;
    const f = Eg(t, r), h = [
      p
    ];
    if ("alias" in r) {
      const y = typeof r.alias == "string" ? [r.alias] : r.alias;
      for (const C of y)
        h.push(se({}, p, {
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
    for (const y of h) {
      const { path: C } = y;
      if (d && C[0] !== "/") {
        const _ = d.record.path, k = _[_.length - 1] === "/" ? "" : "/";
        y.path = d.record.path + (C && k + C);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (w = kb(y, d, f), {}.NODE_ENV !== "production" && d && C[0] === "/" && Db(w, d), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && Tb(g, w)) : (v = v || w, v !== w && v.alias.push(w), m && r.name && !Vg(w) && i(r.name)), p.children) {
        const _ = p.children;
        for (let k = 0; k < _.length; k++)
          a(_[k], w, g && g.children[k]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && c(w);
    }
    return v ? () => {
      i(v);
    } : ba;
  }
  function i(r) {
    if (ww(r)) {
      const d = o.get(r);
      d && (o.delete(r), n.splice(n.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i));
    } else {
      const d = n.indexOf(r);
      d > -1 && (n.splice(d, 1), r.record.name && o.delete(r.record.name), r.children.forEach(i), r.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function c(r) {
    let d = 0;
    for (; d < n.length && yb(r, n[d]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (r.record.path !== n[d].record.path || !vw(r, n[d])); )
      d++;
    n.splice(d, 0, r), r.record.name && !Vg(r) && o.set(r.record.name, r);
  }
  function u(r, d) {
    let g, m = {}, p, f;
    if ("name" in r && r.name) {
      if (g = o.get(r.name), !g)
        throw ls(1, {
          location: r
        });
      if ({}.NODE_ENV !== "production") {
        const v = Object.keys(r.params || {}).filter((y) => !g.keys.find((C) => C.name === y));
        v.length && J(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      f = g.record.name, m = se(
        // paramsFromLocation is a new object
        $g(
          d.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((v) => !v.optional).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        r.params && $g(r.params, g.keys.map((v) => v.name))
      ), p = g.stringify(m);
    } else if ("path" in r)
      p = r.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && J(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((v) => v.re.test(p)), g && (m = g.parse(p), f = g.record.name);
    else {
      if (g = d.name ? o.get(d.name) : n.find((v) => v.re.test(d.path)), !g)
        throw ls(1, {
          location: r,
          currentLocation: d
        });
      f = g.record.name, m = se({}, d.params, r.params), p = g.stringify(m);
    }
    const h = [];
    let w = g;
    for (; w; )
      h.unshift(w.record), w = w.parent;
    return {
      name: f,
      path: p,
      params: m,
      matched: h,
      meta: Lb(h)
    };
  }
  return e.forEach((r) => a(r)), { addRoute: a, resolve: u, removeRoute: i, getRoutes: l, getRecordMatcher: s };
}
function $g(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function Vb(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Eb(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Eb(e) {
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
function Lb(e) {
  return e.reduce((t, n) => se(t, n.meta), {});
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
function Tb(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Du.bind(null, n)))
      return J(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Du.bind(null, n)))
      return J(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Ab(e, t) {
  t && t.record.name && !e.name && !e.path && J(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Db(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Du.bind(null, n)))
      return J(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function vw(e, t) {
  return t.children.some((n) => n === e || vw(e, n));
}
const _w = /#/g, Pb = /&/g, Bb = /\//g, Fb = /=/g, Nb = /\?/g, Sw = /\+/g, Mb = /%5B/g, Ub = /%5D/g, yw = /%5E/g, Ib = /%60/g, Cw = /%7B/g, Rb = /%7C/g, xw = /%7D/g, zb = /%20/g;
function id(e) {
  return encodeURI("" + e).replace(Rb, "|").replace(Mb, "[").replace(Ub, "]");
}
function Ob(e) {
  return id(e).replace(Cw, "{").replace(xw, "}").replace(yw, "^");
}
function Pu(e) {
  return id(e).replace(Sw, "%2B").replace(zb, "+").replace(_w, "%23").replace(Pb, "%26").replace(Ib, "`").replace(Cw, "{").replace(xw, "}").replace(yw, "^");
}
function jb(e) {
  return Pu(e).replace(Fb, "%3D");
}
function Hb(e) {
  return id(e).replace(_w, "%23").replace(Nb, "%3F");
}
function qb(e) {
  return e == null ? "" : Hb(e).replace(Bb, "%2F");
}
function Va(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && J(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Gb(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(Sw, " "), i = a.indexOf("="), l = Va(i < 0 ? a : a.slice(0, i)), c = i < 0 ? null : Va(a.slice(i + 1));
    if (l in t) {
      let u = t[l];
      mt(u) || (u = t[l] = [u]), u.push(c);
    } else
      t[l] = c;
  }
  return t;
}
function Lg(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = jb(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (mt(o) ? o.map((a) => a && Pu(a)) : [o && Pu(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function Wb(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = mt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const Xb = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Tg = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Ur = Symbol({}.NODE_ENV !== "production" ? "router" : ""), bw = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Bu = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
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
function oo(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((i, l) => {
    const c = (d) => {
      d === !1 ? l(ls(4, {
        from: n,
        to: t
      })) : d instanceof Error ? l(d) : mb(d) ? l(ls(2, {
        from: t,
        to: d
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof d == "function" && a.push(d), i());
    }, u = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? Kb(c, t, n) : c);
    let r = Promise.resolve(u);
    if (e.length < 3 && (r = r.then(c)), {}.NODE_ENV !== "production" && e.length > 2) {
      const d = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        r = r.then((g) => c._called ? g : (J(d), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !c._called) {
        J(d), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    r.catch((d) => l(d));
  });
}
function Kb(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && J(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function vl(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && J(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const i in a.components) {
      let l = a.components[i];
      if ({}.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw J(`Component "${i}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          J(`Component "${i}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const c = l;
          l = () => c;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, J(`Component "${i}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (Yb(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(oo(u, n, o, a, i));
        } else {
          let c = l();
          ({}).NODE_ENV !== "production" && !("catch" in c) && (J(`Component "${i}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), s.push(() => c.then((u) => {
            if (!u)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const r = Kx(u) ? u.default : u;
            a.components[i] = r;
            const g = (r.__vccOpts || r)[t];
            return g && oo(g, n, o, a, i)();
          }));
        }
    }
  }
  return s;
}
function Yb(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ag(e) {
  const t = rs(Ur), n = rs(bw), o = nn(() => t.resolve(xa(e.to))), s = nn(() => {
    const { matched: c } = o.value, { length: u } = c, r = c[u - 1], d = n.matched;
    if (!r || !d.length)
      return -1;
    const g = d.findIndex(io.bind(null, r));
    if (g > -1)
      return g;
    const m = Dg(c[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Dg(r) === m && // avoid comparing the child with its parent
      d[d.length - 1].path !== m ? d.findIndex(io.bind(null, c[u - 2])) : g
    );
  }), a = nn(() => s.value > -1 && ek(n.params, o.value.params)), i = nn(() => s.value > -1 && s.value === n.matched.length - 1 && hw(n.params, o.value.params));
  function l(c = {}) {
    return Zb(c) ? t[xa(e.replace) ? "replace" : "push"](
      xa(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ba) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Dn) {
    const c = uw();
    if (c) {
      const u = {
        route: o.value,
        isActive: a.value,
        isExactActive: i.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(u), jx(() => {
        u.route = o.value, u.isActive = a.value, u.isExactActive = i.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: nn(() => o.value.href),
    isActive: a,
    isExactActive: i,
    navigate: l
  };
}
const Qb = /* @__PURE__ */ dw({
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
    const n = Hx(Ag(e)), { options: o } = rs(Ur), s = nn(() => ({
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
      return e.custom ? a : gw("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), Jb = Qb;
function Zb(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function ek(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!mt(s) || s.length !== o.length || o.some((a, i) => a !== s[i]))
      return !1;
  }
  return !0;
}
function Dg(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Pg = (e, t, n) => e != null ? e : t != null ? t : n, tk = /* @__PURE__ */ dw({
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
    ({}).NODE_ENV !== "production" && ok();
    const o = rs(Bu), s = nn(() => e.route || o.value), a = rs(Tg, 0), i = nn(() => {
      let u = xa(a);
      const { matched: r } = s.value;
      let d;
      for (; (d = r[u]) && !d.components; )
        u++;
      return u;
    }), l = nn(() => s.value.matched[i.value]);
    hl(Tg, nn(() => i.value + 1)), hl(Xb, l), hl(Bu, s);
    const c = qx();
    return pw(() => [c.value, l.value, e.name], ([u, r, d], [g, m, p]) => {
      r && (r.instances[d] = u, m && m !== r && u && u === g && (r.leaveGuards.size || (r.leaveGuards = m.leaveGuards), r.updateGuards.size || (r.updateGuards = m.updateGuards))), u && r && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !io(r, m) || !g) && (r.enterCallbacks[d] || []).forEach((f) => f(u));
    }, { flush: "post" }), () => {
      const u = s.value, r = e.name, d = l.value, g = d && d.components[r];
      if (!g)
        return Bg(n.default, { Component: g, route: u });
      const m = d.props[r], p = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null, h = gw(g, se({}, p, t, {
        onVnodeUnmounted: (w) => {
          w.component.isUnmounted && (d.instances[r] = null);
        },
        ref: c
      }));
      if ({}.NODE_ENV !== "production" && Dn && h.ref) {
        const w = {
          depth: i.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (mt(h.ref) ? h.ref.map((y) => y.i) : [h.ref.i]).forEach((y) => {
          y.__vrv_devtools = w;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Bg(n.default, { Component: h, route: u }) || h
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
const nk = tk;
function ok() {
  const e = uw(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    J(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function Es(e, t) {
  const n = se({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => gk(o, ["instances", "children", "aliasOf"]))
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
let sk = 0;
function ak(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = sk++;
  Ox({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((r, d) => {
      r.instanceData && r.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Es(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: r, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const g = d.__vrv_devtools;
        r.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: kw
        });
      }
      mt(d.__vrl_devtools) && (d.__devtoolsApi = s, d.__vrl_devtools.forEach((g) => {
        let m = Ew, p = "";
        g.isExactActive ? (m = Vw, p = "This is exactly active") : g.isActive && (m = $w, p = "This link is active"), r.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: p,
          backgroundColor: m
        });
      }));
    }), pw(t.currentRoute, () => {
      c(), s.notifyComponentUpdate(), s.sendInspectorTree(l), s.sendInspectorState(l);
    });
    const a = "router:navigations:" + o;
    s.addTimelineLayer({
      id: a,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((r, d) => {
      s.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: d.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: r },
          groupId: d.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((r, d) => {
      const g = {
        guard: ti("beforeEach"),
        from: Es(d, "Current Location during this navigation"),
        to: Es(r, "Target location")
      };
      Object.defineProperty(r.meta, "__navigationId", {
        value: i++
      }), s.addTimelineEvent({
        layerId: a,
        event: {
          time: s.now(),
          title: "Start of navigation",
          subtitle: r.fullPath,
          data: g,
          groupId: r.meta.__navigationId
        }
      });
    }), t.afterEach((r, d, g) => {
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
      }, m.status = ti("❌")) : m.status = ti("✅"), m.from = Es(d, "Current Location during this navigation"), m.to = Es(r, "Target location"), s.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: r.fullPath,
          time: s.now(),
          data: m,
          logType: g ? "warning" : "default",
          groupId: r.meta.__navigationId
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
      const r = u;
      let d = n.getRoutes().filter((g) => !g.parent);
      d.forEach(Aw), r.filter && (d = d.filter((g) => (
        // save matches state based on the payload
        Fu(g, r.filter.toLowerCase())
      ))), d.forEach((g) => Tw(g, t.currentRoute.value)), r.rootNodes = d.map(Lw);
    }
    let u;
    s.on.getInspectorTree((r) => {
      u = r, r.app === e && r.inspectorId === l && c();
    }), s.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === l) {
        const g = n.getRoutes().find((m) => m.record.__vd_id === r.nodeId);
        g && (r.state = {
          options: rk(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function ik(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function rk(e) {
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
        display: e.keys.map((o) => `${o.name}${ik(o)}`).join(" "),
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
const kw = 15485081, $w = 2450411, Vw = 8702998, lk = 2282478, Ew = 16486972, ck = 6710886;
function Lw(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: lk
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Ew
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: kw
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Vw
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: $w
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: ck
  });
  let o = n.__vd_id;
  return o == null && (o = String(uk++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Lw)
  };
}
let uk = 0;
const dk = /^\/(.*)\/([a-z]*)$/;
function Tw(e, t) {
  const n = t.matched.length && io(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => io(o, e.record))), e.children.forEach((o) => Tw(o, t));
}
function Aw(e) {
  e.__vd_match = !1, e.children.forEach(Aw);
}
function Fu(e, t) {
  const n = String(e.re).match(dk);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => Fu(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Va(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => Fu(i, t));
}
function gk(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function mk(e) {
  const t = $b(e.routes, e), n = e.parseQuery || Gb, o = e.stringifyQuery || Lg, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Vs(), i = Vs(), l = Vs(), c = Gx(Mn);
  let u = Mn;
  Dn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const r = fl.bind(null, (S) => "" + S), d = fl.bind(null, qb), g = (
    // @ts-expect-error: intentionally avoid the type check
    fl.bind(null, Va)
  );
  function m(S, D) {
    let E, F;
    return ww(S) ? (E = t.getRecordMatcher(S), F = D) : F = S, t.addRoute(F, E);
  }
  function p(S) {
    const D = t.getRecordMatcher(S);
    D ? t.removeRoute(D) : {}.NODE_ENV !== "production" && J(`Cannot remove non-existent route "${String(S)}"`);
  }
  function f() {
    return t.getRoutes().map((S) => S.record);
  }
  function h(S) {
    return !!t.getRecordMatcher(S);
  }
  function w(S, D) {
    if (D = se({}, D || c.value), typeof S == "string") {
      const I = wl(n, S, D.path), ce = t.resolve({ path: I.path }, D), ot = s.createHref(I.fullPath);
      return {}.NODE_ENV !== "production" && (ot.startsWith("//") ? J(`Location "${S}" resolved to "${ot}". A resolved location cannot start with multiple slashes.`) : ce.matched.length || J(`No match found for location with path "${S}"`)), se(I, ce, {
        params: g(ce.params),
        hash: Va(I.hash),
        redirectedFrom: void 0,
        href: ot
      });
    }
    let E;
    if ("path" in S)
      ({}).NODE_ENV !== "production" && "params" in S && !("name" in S) && // @ts-expect-error: the type is never
      Object.keys(S.params).length && J(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), E = se({}, S, {
        path: wl(n, S.path, D.path).path
      });
    else {
      const I = se({}, S.params);
      for (const ce in I)
        I[ce] == null && delete I[ce];
      E = se({}, S, {
        params: d(I)
      }), D.params = d(D.params);
    }
    const F = t.resolve(E, D), U = S.hash || "";
    ({}).NODE_ENV !== "production" && U && !U.startsWith("#") && J(`A \`hash\` should always start with the character "#". Replace "${U}" with "#${U}".`), F.params = r(g(F.params));
    const j = Jx(o, se({}, S, {
      hash: Ob(U),
      path: F.path
    })), q = s.createHref(j);
    return {}.NODE_ENV !== "production" && (q.startsWith("//") ? J(`Location "${S}" resolved to "${q}". A resolved location cannot start with multiple slashes.`) : F.matched.length || J(`No match found for location with path "${"path" in S ? S.path : S}"`)), se({
      fullPath: j,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: U,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Lg ? Wb(S.query) : S.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: q
    });
  }
  function v(S) {
    return typeof S == "string" ? wl(n, S, c.value.path) : se({}, S);
  }
  function y(S, D) {
    if (u !== S)
      return ls(8, {
        from: D,
        to: S
      });
  }
  function C(S) {
    return T(S);
  }
  function _(S) {
    return C(se(v(S), { replace: !0 }));
  }
  function k(S) {
    const D = S.matched[S.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: E } = D;
      let F = typeof E == "function" ? E(S) : E;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = v(F) : (
        // force empty params
        { path: F }
      ), F.params = {}), {}.NODE_ENV !== "production" && !("path" in F) && !("name" in F))
        throw J(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return se({
        query: S.query,
        hash: S.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in F ? {} : S.params
      }, F);
    }
  }
  function T(S, D) {
    const E = u = w(S), F = c.value, U = S.state, j = S.force, q = S.replace === !0, I = k(E);
    if (I)
      return T(
        se(v(I), {
          state: typeof I == "object" ? se({}, U, I.state) : U,
          force: j,
          replace: q
        }),
        // keep original redirectedFrom if it exists
        D || E
      );
    const ce = E;
    ce.redirectedFrom = D;
    let ot;
    return !j && _g(o, F, E) && (ot = ls(16, { to: ce, from: F }), te(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (ot ? Promise.resolve(ot) : L(ce, F)).catch((Ve) => dn(Ve) ? (
      // navigation redirects still mark the router as ready
      dn(
        Ve,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? Ve : le(Ve)
    ) : (
      // reject any unknown error
      Y(Ve, ce, F)
    )).then((Ve) => {
      if (Ve) {
        if (dn(
          Ve,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          _g(o, w(Ve.to), ce) && // and we have done it a couple of times
          D && // @ts-expect-error: added only in dev
          (D._count = D._count ? (
            // @ts-expect-error
            D._count + 1
          ) : 1) > 30 ? (J(`Detected a possibly infinite redirection in a navigation guard when going from "${F.fullPath}" to "${ce.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : T(
            // keep options
            se({
              // preserve an existing replacement but allow the redirect to override it
              replace: q
            }, v(Ve.to), {
              state: typeof Ve.to == "object" ? se({}, U, Ve.to.state) : U,
              force: j
            }),
            // preserve the original redirectedFrom if any
            D || ce
          );
      } else
        Ve = G(ce, F, !0, q, U);
      return A(ce, F, Ve), Ve;
    });
  }
  function N(S, D) {
    const E = y(S, D);
    return E ? Promise.reject(E) : Promise.resolve();
  }
  function V(S) {
    const D = z.values().next().value;
    return D && typeof D.runWithContext == "function" ? D.runWithContext(S) : S();
  }
  function L(S, D) {
    let E;
    const [F, U, j] = pk(S, D);
    E = vl(F.reverse(), "beforeRouteLeave", S, D);
    for (const I of F)
      I.leaveGuards.forEach((ce) => {
        E.push(oo(ce, S, D));
      });
    const q = N.bind(null, S, D);
    return E.push(q), ie(E).then(() => {
      E = [];
      for (const I of a.list())
        E.push(oo(I, S, D));
      return E.push(q), ie(E);
    }).then(() => {
      E = vl(U, "beforeRouteUpdate", S, D);
      for (const I of U)
        I.updateGuards.forEach((ce) => {
          E.push(oo(ce, S, D));
        });
      return E.push(q), ie(E);
    }).then(() => {
      E = [];
      for (const I of j)
        if (I.beforeEnter)
          if (mt(I.beforeEnter))
            for (const ce of I.beforeEnter)
              E.push(oo(ce, S, D));
          else
            E.push(oo(I.beforeEnter, S, D));
      return E.push(q), ie(E);
    }).then(() => (S.matched.forEach((I) => I.enterCallbacks = {}), E = vl(j, "beforeRouteEnter", S, D), E.push(q), ie(E))).then(() => {
      E = [];
      for (const I of i.list())
        E.push(oo(I, S, D));
      return E.push(q), ie(E);
    }).catch((I) => dn(
      I,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? I : Promise.reject(I));
  }
  function A(S, D, E) {
    l.list().forEach((F) => V(() => F(S, D, E)));
  }
  function G(S, D, E, F, U) {
    const j = y(S, D);
    if (j)
      return j;
    const q = D === Mn, I = Dn ? history.state : {};
    E && (F || q ? s.replace(S.fullPath, se({
      scroll: q && I && I.scroll
    }, U)) : s.push(S.fullPath, U)), c.value = S, te(S, D, E, q), le();
  }
  let ae;
  function Q() {
    ae || (ae = s.listen((S, D, E) => {
      if (!O.listening)
        return;
      const F = w(S), U = k(F);
      if (U) {
        T(se(U, { replace: !0 }), F).catch(ba);
        return;
      }
      u = F;
      const j = c.value;
      Dn && ib(yg(j.fullPath, E.delta), Mr()), L(F, j).catch((q) => dn(
        q,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? q : dn(
        q,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (T(
        q.to,
        F
        // avoid an uncaught rejection, let push call triggerError
      ).then((I) => {
        dn(
          I,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !E.delta && E.type === $a.pop && s.go(-1, !1);
      }).catch(ba), Promise.reject()) : (E.delta && s.go(-E.delta, !1), Y(q, F, j))).then((q) => {
        q = q || G(
          // after navigation, all matched components are resolved
          F,
          j,
          !1
        ), q && (E.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !dn(
          q,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-E.delta, !1) : E.type === $a.pop && dn(
          q,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), A(F, j, q);
      }).catch(ba);
    }));
  }
  let oe = Vs(), M = Vs(), W;
  function Y(S, D, E) {
    le(S);
    const F = M.list();
    return F.length ? F.forEach((U) => U(S, D, E)) : ({}.NODE_ENV !== "production" && J("uncaught error during route navigation:"), console.error(S)), Promise.reject(S);
  }
  function X() {
    return W && c.value !== Mn ? Promise.resolve() : new Promise((S, D) => {
      oe.add([S, D]);
    });
  }
  function le(S) {
    return W || (W = !S, Q(), oe.list().forEach(([D, E]) => S ? E(S) : D()), oe.reset()), S;
  }
  function te(S, D, E, F) {
    const { scrollBehavior: U } = e;
    if (!Dn || !U)
      return Promise.resolve();
    const j = !E && rb(yg(S.fullPath, 0)) || (F || !E) && history.state && history.state.scroll || null;
    return Xx().then(() => U(S, D, j)).then((q) => q && ab(q)).catch((q) => Y(q, S, D));
  }
  const Se = (S) => s.go(S);
  let Ne;
  const z = /* @__PURE__ */ new Set(), O = {
    currentRoute: c,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: h,
    getRoutes: f,
    resolve: w,
    options: e,
    push: C,
    replace: _,
    go: Se,
    back: () => Se(-1),
    forward: () => Se(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: M.add,
    isReady: X,
    install(S) {
      const D = this;
      S.component("RouterLink", Jb), S.component("RouterView", nk), S.config.globalProperties.$router = D, Object.defineProperty(S.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => xa(c)
      }), Dn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Ne && c.value === Mn && (Ne = !0, C(s.location).catch((U) => {
        ({}).NODE_ENV !== "production" && J("Unexpected error when starting the router:", U);
      }));
      const E = {};
      for (const U in Mn)
        Object.defineProperty(E, U, {
          get: () => c.value[U],
          enumerable: !0
        });
      S.provide(Ur, D), S.provide(bw, Wx(E)), S.provide(Bu, c);
      const F = S.unmount;
      z.add(S), S.unmount = function() {
        z.delete(S), z.size < 1 && (u = Mn, ae && ae(), ae = null, c.value = Mn, Ne = !1, W = !1), F();
      }, {}.NODE_ENV !== "production" && Dn && ak(S, D, t);
    }
  };
  function ie(S) {
    return S.reduce((D, E) => D.then(() => V(E)), Promise.resolve());
  }
  return O;
}
function pk(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const l = t.matched[i];
    l && (e.matched.find((u) => io(u, l)) ? o.push(l) : n.push(l));
    const c = e.matched[i];
    c && (t.matched.find((u) => io(u, c)) || s.push(c));
  }
  return [n, o, s];
}
function tt() {
  return rs(Ur);
}
const hk = {
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
}, fk = {
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
}, wk = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], vk = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, _k = {
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
}, Sk = {
  languages: hk,
  scriptgroups: fk,
  rtlscripts: wk,
  regiongroups: vk,
  territories: _k
};
var Oe = Sk;
function Fa(e) {
  return !!Oe.languages[e];
}
function co(e) {
  return Fa(e) && Oe.languages[e].length === 1 ? Oe.languages[e][0] : !1;
}
function yk() {
  return Oe.languages;
}
function Na(e) {
  var t = co(e);
  return t ? Na(t) : Fa(e) ? Oe.languages[e][0] : "Zyyy";
}
function rd(e) {
  var t = co(e);
  return t ? rd(t) : Fa(e) && Oe.languages[e][1] || "UNKNOWN";
}
function Ea(e) {
  var t = co(e);
  return t ? Ea(t) : Fa(e) && Oe.languages[e][2] || e;
}
function Ck() {
  var e, t = {};
  for (e in Oe.languages)
    co(e) || (t[e] = Ea(e));
  return t;
}
function Dw(e) {
  var t, n, o = [];
  for (t in Oe.languages)
    if (!co(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === Na(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function xk(e) {
  return Dw([e]);
}
function Pw(e) {
  var t;
  for (t in Oe.scriptgroups)
    if (Oe.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function ld(e) {
  return Pw(Na(e));
}
function Bw(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = co(n) || n, a = ld(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Fw(e) {
  var t, n, o, s = {};
  for (t in Oe.languages)
    if (!co(t)) {
      for (n = 0; n < e.length; n++)
        if (rd(t).includes(e[n])) {
          o = ld(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function bk(e) {
  return Fw([e]);
}
function kk(e) {
  var t, n, o, s = [];
  for (t = Bw(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function $k(e, t) {
  var n = Ea(e) || e, o = Ea(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Nw(e) {
  return Oe.rtlscripts.includes(Na(e));
}
function Vk(e) {
  return Nw(e) ? "rtl" : "ltr";
}
function Ek(e) {
  return Oe.territories[e] || [];
}
function Lk(e, t) {
  t.target ? Oe.languages[e] = [t.target] : Oe.languages[e] = [t.script, t.regions, t.autonym];
}
var H = {
  addLanguage: Lk,
  getAutonym: Ea,
  getAutonyms: Ck,
  getDir: Vk,
  getGroupOfScript: Pw,
  getLanguages: yk,
  getLanguagesByScriptGroup: Bw,
  getLanguagesByScriptGroupInRegion: bk,
  getLanguagesByScriptGroupInRegions: Fw,
  getLanguagesInScript: xk,
  getLanguagesInScripts: Dw,
  getLanguagesInTerritory: Ek,
  getRegions: rd,
  getScript: Na,
  getScriptGroupOfLanguage: ld,
  isKnown: Fa,
  isRedirect: co,
  isRtl: Nw,
  sortByScriptGroup: kk,
  sortByAutonym: $k
};
const Tk = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), i = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, i)), u = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(u / (1e3 * 3600 * 24));
}, Ak = (e) => {
  const t = Tk(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const Dt = window.Vue.unref, Bo = window.Vue.createVNode, gn = window.Vue.createElementVNode, Fg = window.Vue.renderSlot, Ng = window.Vue.withModifiers, _l = window.Vue.toDisplayString, Sl = window.Vue.withCtx, Dk = window.Vue.openBlock, Pk = window.Vue.createElementBlock, Bk = window.Vue.createCommentVNode, Fk = { class: "col shrink pe-4" }, Nk = { class: "col" }, Mk = { class: "cx-translation__details column justify-between ma-0" }, Uk = { class: "row ma-0" }, Ik = { class: "col grow" }, Rk = { class: "col shrink ps-2" }, zk = ["dir", "textContent"], Ok = ["dir", "textContent"], jk = ["textContent"], Hk = window.Vuex.useStore, qk = window.Vue.computed, Mw = {
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
    const n = e, o = Hk(), s = (l, c) => {
      const u = o.getters["mediawiki/getPage"](l, c);
      return u == null ? void 0 : u.thumbnail;
    }, a = _e(), i = qk(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, c = Ak(n.translation.startTimestamp);
      return a.i18n(
        l[c.postfix],
        mw.language.convertNumber(c.value)
      );
    });
    return (l, c) => e.translation ? (Dk(), Pk("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: c[1] || (c[1] = Ng((u) => l.$emit("click"), ["stop"]))
    }, [
      gn("div", Fk, [
        Bo(Dt(Uu), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      gn("div", Nk, [
        gn("div", Mk, [
          gn("div", Uk, [
            gn("div", Ik, [
              Fg(l.$slots, "title")
            ]),
            gn("div", Rk, [
              Bo(Dt(Ze), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: c[0] || (c[0] = Ng((u) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Fg(l.$slots, "mid-content"),
          Bo(Dt(R), { class: "cx-translation__footer ma-0" }, {
            default: Sl(() => [
              Bo(Dt(b), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Sl(() => [
                  gn("span", {
                    class: "mw-ui-autonym",
                    dir: Dt(H.getDir)(e.translation.sourceLanguage),
                    textContent: _l(Dt(H.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, zk),
                  Bo(Dt(Ze), {
                    icon: Dt(X0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  gn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: Dt(H.getDir)(e.translation.targetLanguage),
                    textContent: _l(Dt(H.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, Ok)
                ]),
                _: 1
              }),
              Bo(Dt(b), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Sl(() => [
                  gn("span", {
                    textContent: _l(i.value)
                  }, null, 8, jk)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : Bk("", !0);
  }
};
const Mg = window.Vue.unref, Gk = window.Vue.toDisplayString, Wk = window.Vue.createTextVNode, Xk = window.Vue.withCtx, Kk = window.Vue.openBlock, Yk = window.Vue.createBlock, Qk = window.Codex.CdxInfoChip, Ir = {
  __name: "CommunityPriorityBadge",
  setup(e) {
    return (t, n) => (Kk(), Yk(Mg(Qk), {
      icon: Mg(td),
      class: "cx-community-priority-badge"
    }, {
      default: Xk(() => [
        Wk(Gk(t.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const mo = window.Vue.unref, Jk = window.Vue.toDisplayString, Zk = window.Vue.normalizeClass, e8 = window.Vue.createElementVNode, ni = window.Vue.openBlock, t8 = window.Vue.createElementBlock, yl = window.Vue.createCommentVNode, oi = window.Vue.createVNode, Fo = window.Vue.withCtx, Cl = window.Vue.createBlock, n8 = ["lang", "textContent"], o8 = ["lang", "innerHTML"], s8 = window.Vue.computed, a8 = window.Vue.inject, i8 = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: kr,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = a8("colors").gray200, s = s8(
      () => {
        var c;
        return ((c = t.translation.progress) == null ? void 0 : c.any) * 100 || 0;
      }
    ), a = tt(), { setTranslationURLParams: i } = P(), l = () => {
      i(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (c, u) => (ni(), Cl(Mw, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": mo(vf),
      onActionIconClicked: u[0] || (u[0] = (r) => c.$emit("delete-translation")),
      onClick: l
    }, {
      title: Fo(() => [
        e8("h5", {
          class: Zk(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Jk(e.translation.sourceTitle)
        }, null, 10, n8),
        e.translation.isLeadSectionTranslation ? yl("", !0) : (ni(), t8("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, o8))
      ]),
      "mid-content": Fo(() => [
        e.translation.progress ? (ni(), Cl(mo(R), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Fo(() => [
            oi(mo(b), null, {
              default: Fo(() => [
                oi(mo(yf), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: mo(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : yl("", !0),
        e.translation.inFeaturedCollection ? (ni(), Cl(mo(R), {
          key: 1,
          class: "ma-0 py-2"
        }, {
          default: Fo(() => [
            oi(mo(b), { shrink: "" }, {
              default: Fo(() => [
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
}, r8 = window.Vuex.useStore, Uw = [], l8 = (e, t, n) => Uw.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), c8 = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Uw.push(o);
}, u8 = () => {
  const e = r8();
  return (t, n, o) => x(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !l8(t, n, o) && (s = yield pe.fetchSectionSuggestion(
      t,
      o,
      n
    ), c8(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Iw = window.Vue.ref, Rw = Iw(null), Nu = Iw(null), d8 = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), Rw.value = e;
}, g8 = (e) => {
  Nu.value = e;
}, Ma = () => {
  const e = tt(), { loadSuggestion: t } = Ba(), { setTranslationURLParams: n } = P();
  return (o, s, a, i, l = null, c = !0) => x(void 0, null, function* () {
    d8(i), g8(l);
    const u = yield t(
      s,
      a,
      o
    );
    n(u), c && e.push({ name: "sx-translation-confirmer" });
  });
}, m8 = (e) => {
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
const xl = window.Vue.withModifiers, Ug = window.Vue.toDisplayString, Ig = window.Vue.createElementVNode, st = window.Vue.unref, mn = window.Vue.createVNode, p8 = window.Vue.createTextVNode, Ls = window.Vue.openBlock, Rg = window.Vue.createElementBlock, bl = window.Vue.createCommentVNode, kl = window.Vue.createBlock, Un = window.Vue.withCtx, h8 = ["lang", "href", "textContent"], f8 = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, w8 = {
  key: 2,
  class: "flex"
}, v8 = ["innerHTML"], $l = window.Vue.computed, zg = window.Vue.ref, Og = window.Codex.CdxButton, Vl = window.Codex.CdxIcon, _8 = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: ad,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = zg(!0), o = zg(null), s = $l(() => {
      var m;
      return (m = o.value) == null ? void 0 : m.missingSections;
    }), a = $l(
      () => s.value && Object.keys(s.value)[0]
    );
    u8()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((m) => o.value = m).catch((m) => console.log(m)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = P(), c = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, u = Ma(), r = (m) => {
      u(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), m && l(m);
    }, d = mw.config.get("wgNamespaceIds"), g = $l(() => {
      const m = m8(
        t.translation.targetUrl
      );
      return (m == null ? void 0 : m.getNamespaceId()) === d.user;
    });
    return (m, p) => (Ls(), kl(Mw, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: c
    }, {
      title: Un(() => [
        Ig("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: p[0] || (p[0] = xl(() => {
          }, ["stop"])),
          textContent: Ug(e.translation.sourceTitle)
        }, null, 8, h8)
      ]),
      "mid-content": Un(() => [
        mn(st(R), { class: "ma-0" }, {
          default: Un(() => [
            mn(st(b), null, {
              default: Un(() => [
                g.value ? (Ls(), Rg("div", f8, [
                  mn(st(Vl), {
                    icon: st(ew),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  p8(" " + Ug(m.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : bl("", !0),
                n.value ? (Ls(), kl(st(gt), { key: 1 })) : s.value ? (Ls(), Rg("div", w8, [
                  mn(st(Og), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: p[1] || (p[1] = xl((f) => r(a.value), ["stop"]))
                  }, {
                    default: Un(() => [
                      mn(st(Vl), {
                        class: "me-1",
                        icon: st(Gf)
                      }, null, 8, ["icon"]),
                      Ig("span", { innerHTML: a.value }, null, 8, v8)
                    ]),
                    _: 1
                  }),
                  mn(st(Og), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": m.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: p[2] || (p[2] = xl((f) => r(null), ["stop"]))
                  }, {
                    default: Un(() => [
                      mn(st(Vl), { icon: st(Zu) }, null, 8, ["icon"])
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
          default: Un(() => [
            mn(st(b), { shrink: "" }, {
              default: Un(() => [
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
}, zw = "cx-translation-session-position-", Ow = () => zw + mw.user.sessionId(), S8 = () => {
  const e = parseInt(
    mw.storage.get(Ow())
  );
  return isNaN(e) ? 0 : e;
}, y8 = function(e) {
  const t = Ow();
  mw.storage.set(t, e);
}, C8 = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(zw)).forEach((e) => mw.storage.remove(e));
}, x8 = () => {
  const e = S8();
  return e % 10 === 0 && C8(), y8(e + 1), e;
};
function b8(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), o = `cx_sx_${t}_${e.access_method}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), i = mw.user.getName(), l = {
    $schema: "/analytics/mediawiki/content_translation_event/1.12.0",
    wiki_db: n,
    user_name: i,
    web_session_id: t,
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: x8()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : Mf(i).then((c) => {
    mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: c,
        user_global_edit_count_bucket: RS(c)
      })
    );
  });
}
const jg = window.Vue.computed;
function pt(e) {
  const t = jg(
    () => e.state.application.currentMTProvider
  ), n = jg(() => e.state.application.previousRoute);
  return {
    currentMTProvider: t,
    previousRoute: n
  };
}
const k8 = window.Vuex.useStore, $8 = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], Lt = () => {
  const e = k8(), { previousRoute: t } = pt(e), n = {
    event_source: { remove: !0 },
    translation_source_language: { remove: !1 },
    translation_target_language: { remove: !1 },
    translation_source_title: { remove: !0 }
  }, o = (s) => {
    for (const [a, { remove: i }] of Object.entries(n))
      if (s[a] === null || s[a] === "") {
        const l = $8(
          s.event_type,
          a,
          t.value
        );
        mw.errorLogger.logError(
          new Error(l.join(" ")),
          "error.contenttranslation"
        ), i && delete s[a];
      }
  };
  return (s) => (s.access_method || (s.access_method = qt ? "desktop" : "mobile web"), o(s), b8(s));
}, V8 = window.Vuex.useStore, E8 = () => {
  const { commit: e } = V8(), t = Lt();
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
const L8 = window.Vue.resolveDirective, El = window.Vue.createElementVNode, T8 = window.Vue.withDirectives, Ll = window.Vue.unref, Hg = window.Vue.createVNode, qg = window.Vue.withCtx, A8 = window.Vue.openBlock, D8 = window.Vue.createBlock, P8 = { class: "pa-4" }, B8 = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, F8 = {
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
    const n = e, o = t, s = () => o("update:modelValue", !1), a = E8(), i = () => {
      a(n.translation), s();
    };
    return (l, c) => {
      const u = L8("i18n");
      return A8(), D8(Ll(Vt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: qg(() => [
          El("div", B8, [
            Hg(Ll(Xe), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Hg(Ll(Xe), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: i
            }, null, 8, ["label"])
          ])
        ]),
        default: qg(() => [
          El("div", P8, [
            T8(El("span", null, null, 512), [
              [u, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function N8(e, t, n) {
  return x(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield M8(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function Gg(e, t, n) {
  return x(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(H.sortByAutonym) : (yield N8(e, t, n)).sort(H.sortByAutonym);
  });
}
function M8(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function U8() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function I8(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const R8 = window.Vue.computed;
function z8(e, t) {
  const n = R8(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = H.getAutonym(t.value[s]);
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
const Tl = window.Vue.ref, Al = window.Vue.watch, O8 = window.Vue.computed;
function jw(e, t, n) {
  const o = Tl(""), s = Tl(-1), a = Tl(null), i = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = O8(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), c = () => {
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
  })), { next: i, prev: c, keyboardNavigationContainer: a, selectedItem: o };
}
function cd(e, t, n) {
  let o;
  const s = (...a) => {
    const i = this, l = () => {
      o = null, n || e.apply(i, a);
    };
    n && !o && e.apply(i, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const si = window.Vue.renderSlot, Te = window.Vue.unref, j8 = window.Vue.isRef, Wg = window.Vue.createVNode, Ts = window.Vue.withModifiers, As = window.Vue.withKeys, In = window.Vue.createElementVNode, H8 = window.Vue.resolveDirective, ai = window.Vue.withDirectives, Dl = window.Vue.renderList, Pl = window.Vue.Fragment, pn = window.Vue.openBlock, hn = window.Vue.createElementBlock, Xg = window.Vue.toDisplayString, ii = window.Vue.normalizeClass, Bl = window.Vue.createCommentVNode, q8 = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, G8 = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, W8 = { class: "results px-3 pt-4" }, X8 = { class: "results-header ps-8 pb-2" }, K8 = { class: "results-languages--suggestions pa-0 ma-0" }, Y8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], Q8 = { class: "results px-3 pt-4" }, J8 = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, Z8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], e2 = ["aria-selected"], t2 = { class: "no-results px-3 py-4" }, n2 = { class: "ps-8" }, ri = window.Vue.ref, o2 = window.Vue.watch, s2 = window.Vue.onMounted, Kg = window.Vue.computed, Hw = {
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
      default: U8
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = ri(null), a = ri(""), i = ri([]), l = ri(n.suggestions), c = Kg(
      () => I8(i.value)
    ), u = Kg(() => {
      const C = i.value.length;
      return C < 10 ? "few-results" : C < 30 ? "some-results" : "many-results";
    }), r = (C) => o("select", C), d = () => o("close"), { autocompletion: g, onTabSelect: m } = z8(
      a,
      i
    ), { next: p, prev: f, keyboardNavigationContainer: h, selectedItem: w } = jw(a, i, l), v = () => {
      if (a.value && n.languages.includes(a.value)) {
        r(a.value);
        return;
      }
      if (w.value) {
        r(w.value);
        return;
      }
      if (i.value.length === 1) {
        r(i.value[0]);
        return;
      }
    };
    return o2(a, cd(() => x(this, null, function* () {
      i.value = yield Gg(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), s2(() => x(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), i.value = yield Gg(
        n.languages,
        "",
        n.searchAPI
      );
    })), (C, _) => {
      const k = H8("i18n");
      return pn(), hn("div", {
        ref_key: "keyboardNavigationContainer",
        ref: h,
        class: "mw-ui-language-selector"
      }, [
        si(C.$slots, "search", {}, () => [
          In("div", q8, [
            Wg(Te(xu), {
              value: Te(g),
              "onUpdate:value": _[0] || (_[0] = (T) => j8(g) ? g.value = T : null),
              icon: Te(Vd),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Wg(Te(xu), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": _[1] || (_[1] = (T) => a.value = T),
              class: "mw-ui-language-selector__search pa-4",
              icon: Te(Vd),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                As(Ts(v, ["prevent"]), ["enter"]),
                As(Ts(Te(p), ["stop", "prevent"]), ["down"]),
                As(Ts(Te(f), ["stop", "prevent"]), ["up"]),
                As(Ts(d, ["prevent"]), ["esc"]),
                As(Ts(Te(m), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        In("section", G8, [
          e.suggestions.length && !a.value ? si(C.$slots, "suggestions", { key: 0 }, () => [
            In("section", W8, [
              ai(In("p", X8, null, 512), [
                [k, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              In("ul", K8, [
                (pn(!0), hn(Pl, null, Dl(e.suggestions, (T) => (pn(), hn("li", {
                  key: T,
                  class: ii(["language ma-0", { "language--selected": T === Te(w) }]),
                  lang: T,
                  dir: Te(H.getDir)(T),
                  "aria-selected": T === Te(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (N) => r(T),
                  textContent: Xg(Te(H.getAutonym)(T))
                }, null, 10, Y8))), 128))
              ])
            ])
          ]) : Bl("", !0),
          c.value.length ? si(C.$slots, "search", { key: 1 }, () => [
            In("section", Q8, [
              e.suggestions.length && !a.value ? ai((pn(), hn("p", J8, null, 512)), [
                [k, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Bl("", !0),
              (pn(!0), hn(Pl, null, Dl(c.value, (T, N) => (pn(), hn("ul", {
                key: N,
                class: ii(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (pn(!0), hn(Pl, null, Dl(T, (V) => (pn(), hn("li", {
                  key: V,
                  class: ii(["language ma-0", { "language--selected": V === Te(w) }]),
                  lang: V,
                  dir: Te(H.getDir)(V),
                  role: "option",
                  "aria-selected": V === Te(w) || null,
                  tabindex: "-1",
                  onClick: (L) => r(V),
                  textContent: Xg(Te(H.getAutonym)(V))
                }, null, 10, Z8))), 128)),
                e.allOptionEnabled && !a.value ? ai((pn(), hn("li", {
                  key: 0,
                  class: ii(["language ma-0", { "language--selected": Te(w) === "all" }]),
                  role: "option",
                  "aria-selected": Te(w) === "all" || null,
                  tabindex: "-1",
                  onClick: _[2] || (_[2] = (V) => r("all"))
                }, null, 10, e2)), [
                  [k, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Bl("", !0)
              ], 2))), 128))
            ])
          ]) : si(C.$slots, "noresults", { key: 2 }, () => [
            In("section", t2, [
              ai(In("h3", n2, null, 512), [
                [k, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const a2 = window.Vue.resolveDirective, Yg = window.Vue.withDirectives, Ds = window.Vue.openBlock, Ps = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ae = window.Vue.unref, Qg = window.Vue.toDisplayString, Pt = window.Vue.createVNode, Jg = window.Vue.withModifiers, po = window.Vue.withCtx, i2 = window.Vue.normalizeClass, r2 = {
  key: 0,
  class: "mw-ui-autonym"
}, l2 = ["lang", "dir", "textContent"], c2 = {
  key: 0,
  class: "mw-ui-autonym"
}, u2 = ["lang", "dir", "textContent"], Bs = window.Vue.computed, d2 = window.Vue.inject, g2 = window.Vue.ref, Zg = window.Codex.CdxButton, Fl = window.Codex.CdxIcon, yr = {
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
    const n = e, o = t, s = d2("breakpoints"), a = Bs(() => s.value.mobile), i = g2(null), l = Bs(() => !!i.value), c = () => i.value = "source", u = () => i.value = "target", r = () => i.value = null, d = Bs(() => {
      if (!l.value)
        return;
      const h = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[i.value];
      return n[h];
    }), g = (f) => {
      const w = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[i.value];
      r(), o(w, f);
    }, m = Bs(
      () => n.selectedSourceLanguage === "all"
    ), p = Bs(
      () => n.selectedTargetLanguage === "all"
    );
    return (f, h) => {
      const w = a2("i18n");
      return Ds(), Ps("div", {
        class: i2(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        Pt(Ae(R), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: po(() => [
            Pt(Ae(b), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: po(() => [
                Pt(Ae(Zg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.disabled,
                  onClick: Jg(c, ["stop"])
                }, {
                  default: po(() => [
                    m.value ? Yg((Ds(), Ps("span", r2, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ds(), Ps("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ae(H.getDir)(e.selectedSourceLanguage),
                      textContent: Qg(Ae(H.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, l2)),
                    Pt(Ae(Fl), {
                      size: "x-small",
                      icon: Ae(Vu)
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
              default: po(() => [
                Pt(Ae(Fl), { icon: Ae(Wf) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Pt(Ae(b), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: po(() => [
                Pt(Ae(Zg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.disabled || e.targetLanguages.length < 2,
                  onClick: Jg(u, ["stop"])
                }, {
                  default: po(() => [
                    p.value ? Yg((Ds(), Ps("span", c2, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ds(), Ps("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ae(H.getDir)(e.selectedTargetLanguage),
                      textContent: Qg(Ae(H.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, u2)),
                    Pt(Ae(Fl), {
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
          "onUpdate:value": h[0] || (h[0] = (v) => l.value = v),
          title: f.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          onClose: r
        }, {
          default: po(() => [
            Pt(Ae(Hw), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: f.$i18n("cx-sx-language-selector-placeholder"),
              languages: d.value,
              "all-option-enabled": e.allOptionEnabled,
              onSelect: g,
              onClose: r
            }, null, 8, ["placeholder", "languages", "all-option-enabled"])
          ]),
          _: 1
        }, 8, ["value", "title", "fullscreen", "header"])
      ], 2);
    };
  }
};
const em = window.Vue.unref, m2 = window.Vue.createVNode, li = window.Vue.createElementVNode, tm = window.Vue.toDisplayString, p2 = window.Vue.openBlock, h2 = window.Vue.createElementBlock, f2 = { class: "cx-list-empty-placeholder pa-4" }, w2 = { class: "cx-list-empty-placeholder__icon-container" }, v2 = { class: "cx-list-empty-placeholder__icon" }, _2 = ["textContent"], S2 = ["textContent"], y2 = window.Codex.CdxIcon, qw = {
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
    return (t, n) => (p2(), h2("div", f2, [
      li("div", w2, [
        li("div", v2, [
          m2(em(y2), { icon: em(Jf) }, null, 8, ["icon"])
        ])
      ]),
      li("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: tm(e.title)
      }, null, 8, _2),
      li("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: tm(e.description)
      }, null, 8, S2)
    ]));
  }
}, C2 = window.Vuex.useStore, x2 = window.Vue.ref, ci = x2({ draft: !1, published: !1 }), hs = () => {
  const e = C2(), t = ro(), { addFeaturedCollectionFlag: n } = Fr(), o = (a) => x(void 0, null, function* () {
    let i = yield $t.fetchTranslations(a);
    yield n(i, {
      titleGetter: (c) => c.sourceTitle
    }), e.commit("translator/clearTranslationsByStatus", a), i.forEach(
      (c) => e.commit("translator/addTranslation", c)
    );
    const l = {};
    for (const c of i) {
      const u = c.sourceLanguage;
      l[u] = l[u] || [], l[u].push(c);
    }
    ci.value[a] = !0;
    for (const [c, u] of Object.entries(l))
      t(
        c,
        u.map((r) => r.sourceTitle)
      ), u.forEach((r) => {
        const { targetLanguage: d, targetTitle: g } = r, m = !!e.getters["mediawiki/getPage"](
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
      const i = Object.keys(ci.value).filter(
        (l) => !ci.value[l]
      ).map(
        (l) => o(l)
      );
      return Promise.all(i).catch((l) => {
        mw.log.error("[CX] Error while fetching translations", l);
      });
    },
    translationsFetched: ci
  };
};
const b2 = window.Vue.toDisplayString, Nl = window.Vue.normalizeClass, nm = window.Vue.createElementVNode, Kt = window.Vue.openBlock, No = window.Vue.createBlock, ui = window.Vue.createCommentVNode, om = window.Vue.unref, sm = window.Vue.renderList, am = window.Vue.Fragment, di = window.Vue.createElementBlock, k2 = window.Vue.createVNode, im = window.Vue.withCtx, $2 = ["textContent"], V2 = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, E2 = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, gi = window.Vue.ref, Bt = window.Vue.computed, L2 = window.Vue.inject, T2 = window.Vuex.useStore, rm = {
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
    const t = e, n = gi("all"), o = gi("all"), s = T2(), { translationsFetched: a } = hs(), i = Bt(
      () => a.value[t.translationStatus]
    ), l = gi(!1), c = gi(null), u = Bt(
      () => t.translationStatus === "draft"
    ), r = Bt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), d = Bt(
      () => n.value === "all"
    ), g = Bt(
      () => o.value === "all"
    ), m = Bt(
      () => r.value.filter(
        (_) => (d.value || _.sourceLanguage === n.value) && (g.value || _.targetLanguage === o.value)
      ).sort((_, k) => _.lastUpdatedTimestamp < k.lastUpdatedTimestamp)
    ), p = Bt(() => {
      const _ = r.value.map(
        (k) => k.targetLanguage
      );
      return [...new Set(_)];
    }), f = Bt(() => {
      const _ = r.value.map(
        (k) => k.sourceLanguage
      );
      return [...new Set(_)];
    }), h = (_) => {
      c.value = _, l.value = !0;
    }, w = Bt(() => t.activeStatus === t.translationStatus), v = L2("breakpoints"), y = Bt(() => v.value.mobile), C = Bt(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (_, k) => w.value ? (Kt(), No(om(Je), {
      key: 0,
      class: Nl(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: im(() => [
        nm("div", {
          class: Nl(["cx-translation-list__header", C.value])
        }, [
          nm("h3", {
            class: Nl(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: b2(_.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, $2),
          m.value.length ? (Kt(), No(yr, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": k[0] || (k[0] = (T) => n.value = T),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": k[1] || (k[1] = (T) => o.value = T),
            "source-languages": f.value,
            "target-languages": p.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : ui("", !0)
        ], 2)
      ]),
      default: im(() => [
        i.value && !m.value.length ? (Kt(), No(qw, {
          key: 0,
          title: _.$i18n("cx-sx-translation-list-empty-title"),
          description: _.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : ui("", !0),
        i.value ? ui("", !0) : (Kt(), No(om(gt), { key: 1 })),
        u.value ? (Kt(), di("div", V2, [
          (Kt(!0), di(am, null, sm(m.value, (T) => (Kt(), No(i8, {
            key: `${e.translationStatus}-${T.key}`,
            translation: T,
            onDeleteTranslation: (N) => h(T)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Kt(), di("div", E2, [
          (Kt(!0), di(am, null, sm(m.value, (T) => (Kt(), No(_8, {
            key: `${e.translationStatus}-${T.key}`,
            translation: T
          }, null, 8, ["translation"]))), 128))
        ])),
        k2(F8, {
          modelValue: l.value,
          "onUpdate:modelValue": k[2] || (k[2] = (T) => l.value = T),
          translation: c.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : ui("", !0);
  }
};
const Ml = window.Vue.toDisplayString, mi = window.Vue.createElementVNode, Ul = window.Vue.unref, Fs = window.Vue.openBlock, Il = window.Vue.createBlock, lm = window.Vue.createCommentVNode, A2 = window.Vue.Fragment, cm = window.Vue.createElementBlock, D2 = window.Vue.withKeys, P2 = window.Vue.withCtx, B2 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, F2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, N2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, um = window.Codex.CdxIcon, M2 = window.Codex.CdxInfoChip, pi = window.Vue.computed, Vo = {
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
      () => t.expanded ? wC : Vu
    );
    return (i, l) => (Fs(), Il(Ul(M2), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = D2((c) => i.$emit("click"), ["enter"]))
    }, {
      default: P2(() => [
        n.value === -1 ? (Fs(), cm(A2, { key: 0 }, [
          mi("span", null, Ml(e.content), 1),
          e.expandable ? (Fs(), Il(Ul(um), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : lm("", !0)
        ], 64)) : (Fs(), cm("div", B2, [
          mi("span", F2, Ml(o.value), 1),
          l[1] || (l[1] = mi("span", null, "/", -1)),
          mi("span", N2, Ml(s.value), 1),
          e.expandable ? (Fs(), Il(Ul(um), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : lm("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const Ce = window.Vue.unref, wt = window.Vue.createVNode, Rn = window.Vue.createElementVNode, Ns = window.Vue.toDisplayString, at = window.Vue.withCtx, U2 = window.Vue.resolveDirective, Rl = window.Vue.withDirectives, fn = window.Vue.openBlock, ho = window.Vue.createBlock, zn = window.Vue.createCommentVNode, dm = window.Vue.createElementBlock, gm = window.Vue.withModifiers, I2 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, R2 = { class: "col shrink pe-4" }, z2 = ["lang", "dir", "textContent"], O2 = ["lang", "dir", "textContent"], j2 = { class: "cx-suggestion__missing-sections" }, H2 = {
  key: 0,
  class: "cx-suggestion__easy-sections ms-1"
}, q2 = ["textContent"], G2 = ["textContent"], zl = window.Codex.CdxIcon, Ee = window.Vue.computed, W2 = window.Vue.inject, X2 = window.Vuex.useStore, Mu = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [ao, on, is],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = X2(), o = Ee(() => t.suggestion), s = Ee(
      () => o.value.sourceTitle || o.value.title
    ), a = Ee(
      () => n.getters["mediawiki/getPage"](
        o.value.sourceLanguage,
        s.value
      )
    ), i = Ee(
      () => {
        var V;
        return (V = o.value) == null ? void 0 : V.missingSectionsCount;
      }
    ), l = Ee(() => !(o.value instanceof on) || !o.value.orderedMissingSections ? 0 : o.value.orderedMissingSections.filter((V) => {
      const L = o.value.getSectionSize(V.sourceTitle);
      return zf(L);
    }).length), c = _e(), u = Ee(() => {
      const V = c.i18n(
        "cx-sx-translation-suggestion-easy-sections",
        [l.value]
      );
      return c.i18n("parentheses", [V]);
    }), r = Ee(() => {
      var V;
      return (V = a.value) == null ? void 0 : V.description;
    }), d = Ee(
      () => o.value instanceof on
    );
    Ee(
      () => o.value instanceof ao
    );
    const g = Ee(
      () => o.value instanceof is
    ), m = Ee(
      () => H.getAutonym(o.value.sourceLanguage)
    ), p = Ee(
      () => H.getAutonym(o.value.targetLanguage)
    ), f = Ee(
      () => g.value ? Kf : Yf
    ), h = W2("colors"), w = Ee(
      () => g.value ? h.blue600 : "currentColor"
    ), v = Ee(
      () => o.value instanceof Ff || o.value instanceof Nf
    ), y = Ee(() => {
      if (!v.value || o.value.inFeaturedCollection)
        return !1;
      const V = k();
      return (V == null ? void 0 : V.id) === ne;
    }), C = Ee(() => y.value || d.value ? !1 : qt ? OS(o.value.size) : jS(o.value.leadSectionSize)), { featuredCollection: _ } = Wt(), { findSelectedFilter: k } = lo(), T = Ee(() => {
      var L, A;
      const V = k();
      return ((L = V == null ? void 0 : V.id) == null ? void 0 : L.toLowerCase()) === ((A = _.value) == null ? void 0 : A.name.toLowerCase());
    }), N = Ee(() => {
      if (!o.value.inFeaturedCollection)
        return !1;
      if (g.value)
        return !0;
      const V = k();
      return (V == null ? void 0 : V.id) === ne ? !0 : !T.value;
    });
    return (V, L) => {
      const A = U2("i18n");
      return o.value ? (fn(), dm("div", I2, [
        Rn("div", R2, [
          wt(Ce(Uu), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        wt(Ce(R), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: at(() => [
            wt(Ce(R), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: at(() => [
                wt(Ce(b), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: at(() => [
                    Rn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: o.value.sourceLanguage,
                      dir: Ce(H.getDir)(o.value.sourceLanguage),
                      textContent: Ns(s.value)
                    }, null, 8, z2)
                  ]),
                  _: 1
                }),
                wt(Ce(b), { shrink: "" }, {
                  default: at(() => [
                    Rn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: o.value.sourceLanguage,
                      dir: Ce(H.getDir)(o.value.sourceLanguage),
                      textContent: Ns(r.value)
                    }, null, 8, O2)
                  ]),
                  _: 1
                }),
                C.value ? (fn(), ho(Ce(b), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: at(() => [
                    Rl(Rn("small", null, null, 512), [
                      [A, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : zn("", !0),
                d.value ? (fn(), ho(Ce(b), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom",
                  shrink: ""
                }, {
                  default: at(() => [
                    Rl(Rn("small", j2, null, 512), [
                      [A, [i.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (fn(), dm("small", H2, Ns(u.value), 1)) : zn("", !0)
                  ]),
                  _: 1
                })) : zn("", !0),
                N.value ? (fn(), ho(Ce(b), {
                  key: 2,
                  shrink: "",
                  class: "cx-suggestion__information-panel__featured mt-auto"
                }, {
                  default: at(() => [
                    wt(Ir)
                  ]),
                  _: 1
                })) : g.value ? (fn(), ho(Ce(b), {
                  key: 3,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: at(() => [
                    wt(Ce(R), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: at(() => [
                        wt(Ce(b), { grow: "" }, {
                          default: at(() => [
                            Rn("small", {
                              textContent: Ns(m.value)
                            }, null, 8, q2),
                            wt(Ce(zl), {
                              icon: Ce(Wf),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            Rn("small", {
                              textContent: Ns(p.value)
                            }, null, 8, G2)
                          ]),
                          _: 1
                        }),
                        i.value ? (fn(), ho(Ce(b), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: at(() => [
                            Rl(Rn("small", null, null, 512), [
                              [A, [
                                i.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : zn("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : zn("", !0),
                y.value ? (fn(), ho(Ce(b), {
                  key: 4,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: at(() => [
                    wt(Vo, {
                      icon: Ce(Qu),
                      content: o.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : zn("", !0)
              ]),
              _: 1
            }),
            wt(Ce(b), { shrink: "" }, {
              default: at(() => [
                g.value ? zn("", !0) : (fn(), ho(Ce(zl), {
                  key: 0,
                  icon: Ce(ms),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: L[0] || (L[0] = gm((G) => V.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                wt(Ce(zl), {
                  class: "cx-suggestion__favorite-button",
                  icon: f.value,
                  "icon-color": w.value,
                  onClick: L[1] || (L[1] = gm((G) => V.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : zn("", !0);
    };
  }
};
const Ol = window.Vue.normalizeClass, mm = window.Vue.createVNode, K2 = window.Vue.renderList, pm = window.Vue.Fragment, Ms = window.Vue.openBlock, hi = window.Vue.createElementBlock, Y2 = window.Vue.createBlock, Q2 = window.Vue.toDisplayString, J2 = window.Vue.withKeys, hm = window.Vue.createCommentVNode, Z2 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, fi = window.Vue.computed, e$ = window.Vue.ref, t$ = window.Vue.watchEffect, n$ = {
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
    ), s = e$(!1);
    t$(() => {
      n.filter.expandable && (s.value = o.value);
    });
    const a = t, i = () => {
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
    }, u = fi(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), r = fi(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && s.value
    ), d = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, m) => (Ms(), hi(pm, null, [
      mm(Vo, {
        class: Ol(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": o.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: s.value,
        onClick: i
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      s.value ? (Ms(), hi("div", Z2, [
        mm(Vo, {
          class: Ol(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: m[0] || (m[0] = (p) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Ms(!0), hi(pm, null, K2(u.value, (p) => (Ms(), Y2(Vo, {
          key: p.id,
          class: Ol(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(p)
          }]),
          content: c(p),
          icon: p.icon,
          onClick: (f) => g.$emit("filter-selected", p)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        r.value ? (Ms(), hi("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: d,
          onKeyup: J2(d, ["enter"])
        }, Q2(e.viewMoreConfig.label), 33)) : hm("", !0)
      ])) : hm("", !0)
    ], 64));
  }
};
const o$ = window.Vue.toDisplayString, fm = window.Vue.createElementVNode, s$ = window.Vue.renderList, wm = window.Vue.Fragment, jl = window.Vue.openBlock, vm = window.Vue.createElementBlock, a$ = window.Vue.createBlock, i$ = { class: "sx-suggestions-filters__group-label mb-3" }, r$ = { class: "sx-suggestions-filters__group-filters mb-3" }, l$ = {
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
    return (o, s) => (jl(), vm(wm, null, [
      fm("div", i$, o$(e.filterGroup.label), 1),
      fm("div", r$, [
        (jl(!0), vm(wm, null, s$(n(), (a) => (jl(), a$(n$, {
          key: a.id,
          filter: a,
          "is-selected": e.isSelected,
          "sub-filter-limit": e.getSubFilterConfig ? e.getSubFilterConfig(a).limit : 0,
          "view-more-config": e.getSubFilterConfig ? e.getSubFilterConfig(a).viewMoreConfig : null,
          onFilterSelected: s[0] || (s[0] = (i) => e.tentativelySelectFilter(i))
        }, null, 8, ["filter", "is-selected", "sub-filter-limit", "view-more-config"]))), 128))
      ])
    ], 64));
  }
}, _m = window.Vue.computed, c$ = window.Vue.inject, Sm = window.Vue.ref, ym = window.Vue.watch, Gw = (e, t) => {
  const o = Sm([]), s = Sm(!1);
  let a = 0;
  const i = _m(
    () => o.value.slice(0, 4)
  ), l = c$("breakpoints"), c = _m(() => l.value.mobile), { inFeaturedCollection: u } = nd(), r = (m) => x(void 0, null, function* () {
    const p = m.map((h) => h.wikidataId).filter(Boolean), f = yield u(p);
    m.forEach((h) => {
      h.wikidataId && (h.inFeaturedCollection = f[h.wikidataId]);
    });
  }), d = cd(() => x(void 0, null, function* () {
    const m = a;
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      const p = yield ds.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
      if (m !== a || (yield r(p), m !== a))
        return;
      o.value = p;
    } finally {
      m === a && (s.value = !1, mw.cx.eventlogging.stats.articleSearchAccess(c.value));
    }
  }), 500), g = () => {
    if (a++, o.value = [], !t.value) {
      d.cancel(), s.value = !1;
      return;
    }
    s.value = !0, d();
  };
  return ym(t, g), ym(e, g), {
    searchResultsLoading: s,
    searchResultsSlice: i
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
    thumbnail: i = null,
    icon: l = null,
    showThumbnail: c = !1
  }) {
    this.label = t, this.value = n + "-" + s, this.description = o, this.thumbnail = i, this.filterType = s, this.filterId = a, this.icon = l, this.showThumbnail = c;
  }
}
const Hl = window.Vue.ref, Cm = window.Vue.watch, xm = window.Vue.computed, { topics: u$, regions: d$ } = mw.loader.require(
  "ext.cx.articlefilters"
), g$ = u$.flatMap(
  (e) => e.topics.map((t) => Ke(he({}, t), {
    groupId: e.groupId
  }))
), m$ = () => {
  const e = Hl(""), t = Hl("all"), n = Hl({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = _e(), { pageCollectionGroups: s } = Dr(), { sourceLanguageURLParameter: a } = P(), i = (m) => (m = m.toLowerCase(), g$.filter(
    (p) => p.label.toLowerCase().includes(m)
  )), l = (m) => (m = m.toLowerCase(), Object.values(s.value).flat().filter(
    (f) => f.name.toLowerCase().includes(m)
  )), c = (m) => (m = m.toLowerCase(), d$.flatMap((p) => [p, ...p.countries]).filter(
    (p) => p.label.toLowerCase().includes(m)
  ).map((p) => ({
    label: p.label,
    id: p.id
  }))), u = xm(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: r, searchResultsLoading: d } = Gw(
    a,
    u
  );
  Cm(r, () => {
    n.value.topics = r.value.map(
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
  }), Cm([e, t], () => {
    if (!e.value) {
      n.value.topic_areas = [], n.value.collections = [], n.value.regions = [];
      return;
    }
    n.value.topic_areas = i(e.value).map(
      (m) => new wi({
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
      (m) => new wi({
        label: m.name,
        value: m.name,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          m.articlesCount
        ),
        icon: t.value === "all" ? Qu : null,
        filterType: ne,
        filterId: m.name
      })
    ), n.value.regions = c(e.value).map(
      (m) => new wi({
        label: m.label,
        value: m.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? Eu : null,
        filterType: Pe,
        filterId: m.id
      })
    );
  });
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
        show: n.value.topic_areas.length && (m || t.value === "topics") && !(m && d.value),
        items: n.value.topic_areas
      },
      {
        key: "geography",
        show: n.value.regions.length && (m || t.value === "geography") && !(m && d.value),
        items: n.value.regions
      },
      {
        key: "collections",
        show: n.value.collections.length && (m || t.value === "collections") && !(m && d.value),
        items: n.value.collections
      }
    ].filter((p) => p.show);
  });
  return {
    searchInput: e,
    searchScope: t,
    searchResults: g,
    searchResultsLoading: d
  };
}, p$ = "suggestion_filter_topic_area", h$ = "suggestion_filter_search_result_seed", f$ = "suggestion_filter_collections", w$ = "suggestion_filter_previous_edits", v$ = "suggestion_filter_popular_articles", _$ = "suggestion_filter_region", ql = (e) => {
  if (e.type === et || e.type === Pe || e.type === ne || e.type === Gt)
    return e.id;
  if (e.id === ne)
    return "all-collections";
}, Gl = (e) => {
  if (e.type === et)
    return p$;
  if (e.type === Pe)
    return _$;
  if (e.type === Gt)
    return h$;
  if (e.id === ne || e.type === ne)
    return f$;
  if (e.id === an)
    return w$;
  if (e.id === rn)
    return v$;
}, Ww = () => {
  const e = Lt();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (i) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: Gl(i),
      event_context: ql(i)
    }),
    logSuggestionFiltersSelect: (i) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: Gl(i),
      event_context: ql(i)
    }),
    logSuggestionFiltersQuickSelect: (i) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: Gl(i),
      event_context: ql(i)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const xe = window.Vue.unref, vt = window.Vue.createVNode, Ft = window.Vue.withCtx, S$ = window.Vue.resolveDirective, wn = window.Vue.createElementVNode, Mo = window.Vue.withDirectives, bm = window.Vue.toDisplayString, y$ = window.Vue.createTextVNode, C$ = window.Vue.vShow, km = window.Vue.isRef, $m = window.Vue.renderList, Vm = window.Vue.Fragment, Yt = window.Vue.openBlock, On = window.Vue.createElementBlock, x$ = window.Vue.withKeys, Wl = window.Vue.createCommentVNode, Em = window.Vue.createBlock, b$ = { class: "sx-suggestions-filters" }, k$ = { class: "mb-0" }, $$ = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, V$ = { class: "mb-3" }, E$ = { class: "px-4 pb-4 pt-7" }, L$ = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, T$ = ["onKeyup", "onClick"], A$ = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, D$ = {
  key: 0,
  class: "sx-suggestions-filters__search-results-pending",
  role: "status",
  "aria-live": "polite"
}, P$ = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, B$ = { class: "sx-suggestions-filters__search-results-empty-primary" }, F$ = { class: "sx-suggestions-filters__search-results-empty-secondary" }, vi = window.Vue.ref, fo = window.Vue.computed, N$ = window.Vue.inject, M$ = window.Vue.watch, Lm = window.Codex.CdxButton, U$ = window.Codex.CdxIcon, I$ = window.Codex.CdxTextInput, R$ = window.Codex.CdxMenu, z$ = window.Codex.CdxTabs, O$ = window.Codex.CdxTab, j$ = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = _e(), o = t, s = fo(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: m([
          Ge,
          ne,
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
        filterGroups: m([ne])
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
    ]), a = (z) => G.value = z, i = fo(
      () => s.value.find((z) => z.name === G.value)
    ), l = (z, O) => O === "all" && z.type === Pe ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n("cx-sx-suggestions-filters-more-countries"),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, c = (z, O) => {
      if (z !== "all")
        return !1;
      if (O === ne) {
        const ie = m([ne]);
        return ie.length && ie[0].filters.length > 6;
      }
      return O === Pe;
    }, { allFilters: u, isFilterSelected: r, selectFilter: d, findSelectedFilter: g } = lo(), m = (z) => z.flatMap((O) => u.value.filter((ie) => ie.type === O)).filter(Boolean), p = () => {
      k(), o("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: f,
      logSuggestionFiltersConfirm: h,
      logSuggestionFiltersSelect: w
    } = Ww(), v = () => {
      f(), p();
    }, y = () => {
      _.value && (h(_.value), d(_.value)), p();
    }, C = vi(!1), _ = vi(null), k = () => {
      _.value = null, C.value = !1;
    }, T = (z) => {
      w(z), _.value = z, C.value = !0;
    }, N = (z) => _.value ? _.value.id === z.id && _.value.type === z.type : r(z), V = N$("breakpoints"), L = fo(() => V.value.mobile), { searchInput: A, searchScope: G, searchResults: ae, searchResultsLoading: Q } = m$(), oe = fo(
      () => _.value || g()
    ), M = vi(null);
    M$(M, () => {
      if (!M.value)
        return;
      const z = Y.value.find(
        (O) => O.value === M.value
      );
      T({
        type: z.filterType,
        id: z.filterId,
        label: z.label
      }), A.value = "";
    });
    const W = {
      [ne]: "cx-sx-suggestions-filters-view-all-collections-group",
      [Pe]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, Y = fo(
      () => ae.value.flatMap((z) => z.items)
    ), X = vi({}), le = fo(
      () => X.value[G.value]
    ), te = fo(() => {
      var O;
      const z = (O = le.value) == null ? void 0 : O.getHighlightedMenuItem();
      return z == null ? void 0 : z.id;
    }), Se = (z) => {
      z.key !== " " && le.value && le.value.delegateKeyNavigation(z);
    }, Ne = (z, O) => {
      X.value[O] = z;
    };
    return (z, O) => {
      const ie = S$("i18n");
      return Yt(), Em(xe(Vt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: L.value,
        header: !1
      }, {
        default: Ft(() => [
          wn("section", b$, [
            vt(xe(R), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Ft(() => [
                vt(xe(b), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Ft(() => [
                    vt(xe(Lm), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": z.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: v
                    }, {
                      default: Ft(() => [
                        vt(xe(U$), { icon: xe(ms) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                vt(xe(b), {
                  grow: "",
                  align: "center"
                }, {
                  default: Ft(() => [
                    Mo(wn("h5", k$, null, 512), [
                      [ie, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                vt(xe(b), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Ft(() => [
                    Mo(vt(xe(Lm), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: y
                    }, {
                      default: Ft(() => [
                        y$(bm(z.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [C$, C.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            wn("div", $$, [
              Mo(wn("h5", V$, null, 512), [
                [ie, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              wn("div", null, [
                vt(Vo, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: oe.value.label,
                  icon: oe.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            wn("div", E$, [
              vt(xe(I$), {
                modelValue: xe(A),
                "onUpdate:modelValue": O[0] || (O[0] = (S) => km(A) ? A.value = S : null),
                role: "combobox",
                "aria-label": i.value.searchPlaceholder,
                "aria-activedescendant": te.value,
                "aria-controls": "sx-suggestions-filters__search-results__menu",
                "aria-autocomplete": "none",
                placeholder: i.value.searchPlaceholder,
                "input-type": "search",
                "start-icon": xe(Eu),
                clearable: !!xe(A),
                onKeydown: Se
              }, null, 8, ["modelValue", "aria-label", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
            ]),
            vt(xe(z$), {
              active: xe(G),
              "onUpdate:active": [
                O[2] || (O[2] = (S) => km(G) ? G.value = S : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Ft(() => [
                (Yt(!0), On(Vm, null, $m(s.value, (S, D) => (Yt(), Em(xe(O$), {
                  key: D,
                  name: S.name,
                  label: S.label
                }, {
                  default: Ft(() => [
                    xe(A) ? (Yt(), On("div", A$, [
                      vt(xe(R$), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (E) => Ne(E, S.name),
                        selected: M.value,
                        "onUpdate:selected": O[1] || (O[1] = (E) => M.value = E),
                        "show-pending": xe(Q),
                        expanded: "",
                        "menu-items": Y.value
                      }, {
                        pending: Ft(() => [
                          xe(Q) ? Mo((Yt(), On("div", D$, null, 512)), [
                            [ie, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ]) : Wl("", !0)
                        ]),
                        "no-results": Ft(() => [
                          !xe(Q) && Y.value.length === 0 ? (Yt(), On("div", P$, [
                            Mo(wn("span", B$, null, 512), [
                              [ie, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            Mo(wn("span", F$, null, 512), [
                              [ie, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ])) : Wl("", !0)
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (Yt(), On("div", L$, [
                      (Yt(!0), On(Vm, null, $m(S.filterGroups, (E) => (Yt(), On("div", {
                        key: E.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        vt(l$, {
                          "filter-group": E,
                          "tentatively-select-filter": T,
                          "is-selected": N,
                          limit: c(S.name, E.type) ? 4 : 0,
                          "get-sub-filter-config": (F) => l(F, S.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        c(S.name, E.type) ? (Yt(), On("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: x$((F) => a(E.id), ["enter"]),
                          onClick: (F) => a(E.id)
                        }, [
                          wn("span", null, bm(z.$i18n(W[E.id])), 1)
                        ], 40, T$)) : Wl("", !0)
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
const H$ = window.Vue.renderList, q$ = window.Vue.Fragment, Am = window.Vue.createElementBlock, G$ = window.Vue.normalizeClass, Dm = window.Vue.createVNode, W$ = {
  key: 1,
  class: "cx-suggestion-list__filters flex mx-4 pb-2"
}, Pm = window.Vue.ref, Bm = window.Vue.watch, X$ = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = _e(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: o } = Ww(), { targetLanguageURLParameter: s } = P(), {
      getFiltersSummary: a,
      selectFilter: i,
      isFilterSelected: l,
      waitingForPageCollectionsFetch: c,
      validateURLFilterWithCollections: u,
      setFeaturedCollectionFilterIfNeeded: r
    } = lo(), d = Pm(!1), g = () => {
      o(), d.value = !0;
    }, m = (f) => {
      n(f), i(f);
    }, p = Pm(a());
    return Bm(d, (f) => {
      f || (p.value = a());
    }), Bm([c, s], ([f]) => {
      f || (u(), r(), p.value = a());
    }), (f, h) => Us(c) ? (_i(), Tm(Us(gt), { key: 0 })) : (_i(), Am("div", W$, [
      (_i(!0), Am(q$, null, H$(p.value, (w) => (_i(), Tm(Vo, {
        key: w.label,
        class: G$(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": Us(l)(w)
        }]),
        icon: w.icon,
        content: w.label,
        onClick: (v) => m(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Dm(Vo, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: Us(Zu),
        content: Us(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: g
      }, null, 8, ["icon", "content"]),
      Dm(j$, {
        modelValue: d.value,
        "onUpdate:modelValue": h[0] || (h[0] = (w) => d.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, Uo = window.Vue.computed, Fm = window.Vue.ref, Xl = window.Vue.watch, K$ = window.Vuex.useStore, Y$ = () => {
  const e = K$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Ar(), i = Lt(), l = Uo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), c = Uo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), u = Fm(0), r = Fm(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, g = 4, m = Uo(
    () => a(u.value)
  );
  Xl(
    m,
    () => {
      m.value.forEach((A) => {
        A.seen = !0;
      });
    },
    { deep: !0 }
  );
  const p = Uo(
    () => s(r.value)
  );
  Xl(
    p,
    () => {
      p.value.forEach((A) => {
        A.seen = !0;
      });
    },
    { deep: !0 }
  );
  const f = () => {
    _(), V(), k(), L();
  }, {
    fetchNextSectionSuggestionsSlice: h,
    fetchNextPageSuggestionsSlice: w
  } = od(), v = (A) => A.length === d, y = Uo(
    () => v(p.value)
  ), C = Uo(
    () => v(m.value)
  ), _ = () => {
    const A = (u.value + 1) % g, G = v(
      a(A)
    );
    (!C.value || !G) && h();
  }, k = () => {
    const A = (r.value + 1) % g, G = v(
      s(A)
    );
    (!y.value || !G) && w();
  }, T = (A) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", A), _();
  }, N = (A) => {
    i({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", A), k();
  }, V = () => u.value = (u.value + 1) % g, L = () => r.value = (r.value + 1) % g;
  return Xl(
    o,
    () => {
      r.value = 0, k(), u.value = 0, _();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: p,
    currentSectionSuggestionsSlice: m,
    discardPageSuggestion: N,
    discardSectionSuggestion: T,
    onSuggestionRefresh: f,
    pageSuggestionsLoading: c,
    sectionSuggestionsLoading: l,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: C
  };
}, Q$ = window.Vuex.useStore, ud = () => {
  const e = Q$(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = od(), { addFeaturedCollectionFlag: o } = Fr(), s = (r, d, g) => e.state.suggestions.pageSuggestions.find(
    (m) => m.sourceLanguage === r && m.targetLanguage === d && m.sourceTitle === g
  ), a = (r) => x(void 0, null, function* () {
    const { sourceTitle: d, sourceLanguage: g, targetLanguage: m } = r;
    yield pe.markFavorite(d, g, m);
    const p = new is({
      title: d,
      sourceLanguage: g,
      targetLanguage: m
    });
    yield o([p], {
      titleGetter: (f) => f.title
    }), e.commit("suggestions/addFavoriteSuggestion", p);
  });
  return {
    markFavoritePageSuggestion: (r) => {
      e.commit("suggestions/removePageSuggestionFromList", r), n(), a(r);
    },
    markFavoriteSectionSuggestion: (r) => {
      e.commit(
        "suggestions/removeSectionSuggestionFromList",
        r
      ), t(), a(r);
    },
    markFavoriteSuggestion: (r, d, g) => x(void 0, null, function* () {
      const m = s(
        d,
        g,
        r
      );
      m && (e.commit(
        "suggestions/removePageSuggestionFromList",
        m
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](d, g, r);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield pe.markFavorite(
        r,
        d,
        g
      );
      const f = new is({
        title: r,
        sourceLanguage: d,
        targetLanguage: g
      });
      yield o([f], {
        titleGetter: (h) => h.title
      }), e.commit("suggestions/addFavoriteSuggestion", f);
    }),
    removeFavoriteSuggestion: (r) => (e.commit("suggestions/removeFavoriteSuggestion", r), pe.unmarkFavorite(r))
  };
}, J$ = "suggestion_no_seed", Z$ = "suggestion_previous_edits", eV = "suggestion_topic_area", tV = "suggestion_search_result_seed", nV = "suggestion_popular_articles", oV = "suggestion_collections", sV = "suggestion_region", aV = () => {
  const { currentSuggestionFilters: e } = P();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === an)
      return t ? Z$ : J$;
    if (n === et)
      return eV;
    if (n === Pe)
      return sV;
    if (n === Gt)
      return tV;
    if (o === rn)
      return nV;
    if (o === ne || n === ne)
      return oV;
    const s = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${o}`
    );
    throw mw.errorLogger.logError(s, "error.contenttranslation"), s;
  };
};
const Si = window.Vue.unref, Nm = window.Vue.createVNode, Io = window.Vue.toDisplayString, Ro = window.Vue.createElementVNode, Is = window.Vue.openBlock, Rs = window.Vue.createElementBlock, yi = window.Vue.createCommentVNode, Mm = window.Vue.createTextVNode, iV = window.Vue.normalizeClass, rV = { class: "cx-featured-collection-banner py-4 px-6" }, lV = { class: "cx-featured-collection-banner__header mb-3" }, cV = { class: "cx-featured-collection-banner__header-text" }, uV = { class: "cx-featured-collection-banner__title mb-0" }, dV = {
  key: 0,
  class: "cx-featured-collection-banner__source mb-0"
}, gV = { class: "cx-featured-collection-banner__content" }, mV = { class: "cx-featured-collection-banner__learn-more-container" }, pV = ["href"], Um = window.Codex.CdxIcon, Kl = window.Vue.ref, hV = window.Vue.computed, fV = window.Vue.onMounted, wV = window.Vue.onUnmounted, vV = {
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
    const t = Kl(!1), n = Kl(null), o = Kl(null), s = hV(() => n.value ? (o.value, n.value.scrollHeight > n.value.clientHeight) : !1), a = () => {
      t.value = !t.value;
    }, i = () => {
      o.value = window.innerWidth;
    };
    return fV(() => {
      window.addEventListener("resize", i);
    }), wV(() => {
      window.removeEventListener("resize", i);
    }), (l, c) => (Is(), Rs("div", rV, [
      Ro("div", lV, [
        Nm(Si(Um), {
          icon: Si(td),
          class: "cx-featured-collection-banner__icon me-3 mt-1"
        }, null, 8, ["icon"]),
        Ro("div", cV, [
          Ro("h5", uV, Io(l.$i18n("cx-featured-collection-banner-title")), 1),
          e.communityName ? (Is(), Rs("span", dV, Io(e.communityName), 1)) : yi("", !0)
        ])
      ]),
      Ro("div", gV, [
        Ro("div", {
          ref_key: "descriptionRef",
          ref: n,
          class: iV(["cx-featured-collection-banner__description", {
            "cx-featured-collection-banner__description--expanded": t.value
          }])
        }, [
          Mm(Io(e.description || l.$i18n("cx-featured-collection-banner-description")) + " ", 1),
          t.value ? (Is(), Rs("button", {
            key: 0,
            class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--inline",
            onClick: a
          }, Io(l.$i18n("cx-featured-collection-banner-toggle-less")), 1)) : yi("", !0)
        ], 2),
        !t.value && s.value ? (Is(), Rs("button", {
          key: 0,
          class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--external mb-1 ml-1",
          onClick: a
        }, Io(l.$i18n("cx-featured-collection-banner-toggle-more")), 1)) : yi("", !0)
      ]),
      Ro("div", mV, [
        (t.value || !s.value) && e.learnMoreUrl ? (Is(), Rs("a", {
          key: 0,
          href: e.learnMoreUrl,
          class: "cx-featured-collection-banner__learn-more",
          target: "_blank"
        }, [
          Mm(Io(l.$i18n("cx-featured-collection-banner-learn-more")) + " ", 1),
          Nm(Si(Um), {
            icon: Si(Pa),
            size: "small",
            class: "cx-featured-collection-banner__learn-more-icon"
          }, null, 8, ["icon"])
        ], 8, pV)) : yi("", !0)
      ])
    ]));
  }
};
const Im = window.Vue.normalizeClass, _V = window.Vue.resolveDirective, zs = window.Vue.createElementVNode, Ci = window.Vue.withDirectives, fe = window.Vue.unref, Ye = window.Vue.openBlock, Nt = window.Vue.createBlock, vn = window.Vue.createCommentVNode, Yl = window.Vue.createVNode, Os = window.Vue.withCtx, Rm = window.Vue.renderList, zm = window.Vue.Fragment, Ql = window.Vue.createElementBlock, SV = window.Vue.toDisplayString, yV = window.Vue.createTextVNode, CV = window.Vue.vShow, xV = { class: "cx-suggestion-list" }, bV = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, kV = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, $V = { class: "cx-suggestion-list__refresh-button-container justify-center" }, _t = window.Vue.computed, VV = window.Vue.inject, EV = window.Vue.ref, LV = window.Codex.CdxButton, TV = window.Codex.CdxIcon, AV = window.Vuex.useStore, DV = {
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
    } = P(), { supportedLanguageCodes: s } = Da(), a = sw(), i = (O) => a(O, n.value), l = (O) => a(t.value, O), c = aV(), { featuredCollection: u } = Wt(), { findSelectedFilter: r } = lo(), d = _t(() => r()), g = Ma(), m = (O) => {
      g(
        O.sourceTitle,
        O.sourceLanguage,
        O.targetLanguage,
        c(O.suggestionSeed),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: p,
      currentSectionSuggestionsSlice: f,
      discardPageSuggestion: h,
      discardSectionSuggestion: w,
      onSuggestionRefresh: v,
      pageSuggestionsLoading: y,
      sectionSuggestionsLoading: C,
      isCurrentPageSuggestionsSliceFull: _,
      isCurrentSectionSuggestionsSliceFull: k
    } = Y$(), T = EV(null), N = Lt(), V = () => {
      N({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), v(), T.value && T.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: L, markFavoritePageSuggestion: A } = ud(), G = VV("breakpoints"), ae = _t(() => G.value.mobile), Q = _t(
      () => ae.value ? null : "pb-2 flex justify-between items-center"
    ), oe = AV(), M = _t(
      () => oe.state.suggestions.isPageSuggestionsFetchPending
    ), W = _t(
      () => oe.state.suggestions.isSectionSuggestionsFetchPending
    ), Y = _t(
      () => M.value || y.value && !_.value
    ), X = _t(
      () => W.value || C.value && !k.value
    ), le = _t(
      () => M.value || y.value || p.value.length > 0
    ), te = _t(
      () => W.value || C.value || f.value.length > 0
    ), Se = _t(
      () => !le.value && !te.value
    ), Ne = _t(
      () => !C.value && !y.value && !M.value && !W.value && !Se.value
    ), z = _t(
      () => {
        var O;
        return u.value && ((O = d.value) == null ? void 0 : O.id) === u.value.name;
      }
    );
    return (O, ie) => {
      const S = _V("i18n");
      return Ci((Ye(), Ql("div", xV, [
        Yl(fe(Je), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: Os(() => [
            zs("div", {
              class: Im(["cx-suggestion-list__header-card__header px-4", Q.value])
            }, [
              Ci(zs("h3", {
                class: Im(["mw-ui-card__title mb-0", { "py-3": ae.value }])
              }, null, 2), [
                [S, void 0, "cx-suggestionlist-title"]
              ]),
              ae.value ? vn("", !0) : (Ye(), Nt(yr, {
                key: 0,
                "source-languages": fe(s),
                "target-languages": fe(s),
                "selected-source-language": fe(t),
                "selected-target-language": fe(n),
                "onUpdate:selectedSourceLanguage": i,
                "onUpdate:selectedTargetLanguage": l
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Yl(X$)
          ]),
          default: Os(() => [
            ae.value ? (Ye(), Nt(yr, {
              key: 0,
              "source-languages": fe(s),
              "target-languages": fe(s),
              "selected-source-language": fe(t),
              "selected-target-language": fe(n),
              "onUpdate:selectedSourceLanguage": i,
              "onUpdate:selectedTargetLanguage": l
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : vn("", !0)
          ]),
          _: 1
        }),
        z.value ? (Ye(), Nt(vV, {
          key: 0,
          "community-name": fe(u).communityName,
          description: fe(u).description,
          "learn-more-url": fe(u).link
        }, null, 8, ["community-name", "description", "learn-more-url"])) : vn("", !0),
        te.value ? (Ye(), Nt(fe(Je), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: Os(() => [
            Ci(zs("h5", bV, null, 512), [
              [S, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Ye(!0), Ql(zm, null, Rm(fe(f), (D, E) => (Ye(), Nt(Mu, {
              key: `section-suggestion-${E}`,
              class: "ma-0",
              suggestion: D,
              onClose: (F) => fe(w)(D),
              onClick: (F) => m(D),
              onBookmark: (F) => fe(L)(D)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            X.value ? (Ye(), Nt(fe(gt), { key: 0 })) : vn("", !0)
          ]),
          _: 1
        })) : vn("", !0),
        le.value ? (Ye(), Nt(fe(Je), {
          key: 2,
          ref_key: "pageSuggestionsList",
          ref: T,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: Os(() => [
            Ci(zs("h5", kV, null, 512), [
              [S, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Ye(!0), Ql(zm, null, Rm(fe(p), (D, E) => (Ye(), Nt(Mu, {
              key: `page-suggestion-${E}`,
              suggestion: D,
              onClose: (F) => fe(h)(D),
              onClick: (F) => m(D),
              onBookmark: (F) => fe(A)(D)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Y.value ? (Ye(), Nt(fe(gt), { key: 0 })) : vn("", !0)
          ]),
          _: 1
        }, 512)) : vn("", !0),
        Se.value ? (Ye(), Nt(qw, {
          key: 3,
          title: O.$i18n("cx-sx-suggestion-list-empty-title"),
          description: O.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : vn("", !0),
        zs("div", $V, [
          Ne.value ? (Ye(), Nt(fe(LV), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: V
          }, {
            default: Os(() => [
              Yl(fe(TV), {
                class: "me-1",
                icon: fe(Zf)
              }, null, 8, ["icon"]),
              yV(" " + SV(O.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : vn("", !0)
        ])
      ], 512)), [
        [CV, e.active]
      ]);
    };
  }
}, PV = window.Vue.resolveDirective, BV = window.Vue.createElementVNode, FV = window.Vue.withDirectives, NV = window.Vue.renderList, MV = window.Vue.Fragment, Jl = window.Vue.openBlock, UV = window.Vue.createElementBlock, Om = window.Vue.unref, jm = window.Vue.createBlock, Hm = window.Vue.withCtx, IV = window.Vue.createCommentVNode, RV = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, zV = window.Vue.computed, OV = window.Vuex.useStore, jV = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = OV(), n = zV(() => t.state.suggestions.favorites || []), o = Ma(), s = (i) => o(
      i.title,
      i.sourceLanguage,
      i.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = ud();
    return (i, l) => {
      const c = PV("i18n");
      return n.value.length ? (Jl(), jm(Om(Je), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Hm(() => [
          FV(BV("h3", RV, null, 512), [
            [c, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Hm(() => [
          (Jl(!0), UV(MV, null, NV(n.value, (u, r) => (Jl(), jm(Mu, {
            key: `favorite-${r}`,
            suggestion: u,
            onClick: (d) => s(u),
            onBookmark: (d) => Om(a)(u)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : IV("", !0);
    };
  }
};
const HV = window.Vue.resolveDirective, js = window.Vue.createElementVNode, qV = window.Vue.withDirectives, GV = window.Vue.renderList, WV = window.Vue.Fragment, qm = window.Vue.openBlock, Gm = window.Vue.createElementBlock, XV = window.Vue.unref, KV = window.Vue.createVNode, YV = window.Vue.toDisplayString, QV = { class: "cx-help-panel pa-4" }, JV = { class: "cx-help-panel__item-list mt-6 ps-2" }, ZV = ["href", "target"], eE = ["textContent"], tE = window.Codex.CdxIcon, nE = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = _e(), n = [
      {
        icon: xC,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: _C,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = HV("i18n");
      return qm(), Gm("div", QV, [
        qV(js("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        js("ul", JV, [
          (qm(), Gm(WV, null, GV(n, (i, l) => js("li", {
            key: l,
            class: "mt-4"
          }, [
            js("a", {
              href: i.href,
              target: i.target
            }, [
              KV(XV(tE), {
                class: "me-2",
                icon: i.icon
              }, null, 8, ["icon"]),
              js("span", {
                textContent: YV(i.label)
              }, null, 8, eE)
            ], 8, ZV)
          ])), 64))
        ])
      ]);
    };
  }
};
const oE = window.Vue.resolveDirective, jn = window.Vue.createElementVNode, Zl = window.Vue.withDirectives, ec = window.Vue.toDisplayString, xi = window.Vue.unref, tc = window.Vue.withCtx, bi = window.Vue.createVNode, sE = window.Vue.openBlock, aE = window.Vue.createElementBlock, iE = { class: "cx-stats-panel pa-4" }, rE = ["textContent"], lE = { class: "cx-stats-panel__monthly-stats-label" }, cE = ["textContent"], uE = { class: "cx-stats-panel__total-stats-label" }, dE = ["href", "target"], gE = ["textContent"], mE = window.Codex.CdxIcon, pE = window.Vue.ref, Wm = window.Vue.computed, hE = window.Vue.watch, fE = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = _e(), n = e, o = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", s = Wm(() => {
      var u, r;
      const c = ((r = (u = n.stats) == null ? void 0 : u[o]) == null ? void 0 : r.count) || 0;
      return mw.language.convertNumber(c);
    }), a = Wm(() => {
      var u, r;
      const c = ((r = (u = n.stats) == null ? void 0 : u[o]) == null ? void 0 : r.delta) || 0;
      return mw.language.convertNumber(c);
    }), i = pE(null), l = {
      icon: Qf,
      label: t.i18n("cx-sx-dashboard-stats-panel-all-stats-label"),
      href: "https://superset.wmcloud.org/superset/dashboard/p/X61GbQpZ5Rb/",
      target: "_blank"
    };
    return hE(
      () => n.stats,
      () => {
        const c = n.stats, u = i.value.getContext("2d"), r = Object.keys(n.stats || {}).sort(), d = r.reduce(
          (V, L) => Math.max(V, c[L].delta),
          0
        ), g = r.map((V) => c[V].delta), m = i.value.getBoundingClientRect().width, p = i.value.getBoundingClientRect().height;
        i.value.width = m, i.value.height = p;
        const f = 4, h = 6, w = 50, v = (w - f) / d;
        let y = f;
        const C = Math.floor(
          (m - f) / (h + f)
        ), _ = g.slice(
          Math.max(g.length - C, 0)
        ), k = getComputedStyle(document.documentElement), T = k.getPropertyValue("--color-base").trim() || "#202122", N = k.getPropertyValue("--color-progressive").trim() || "#36c";
        u.fillStyle = T, _.forEach((V, L) => {
          L === _.length - 1 && (u.fillStyle = N);
          const A = w - V * v;
          u.fillRect(y, A, h, V * v), y += h + f;
        });
      }
    ), (c, u) => {
      const r = oE("i18n");
      return sE(), aE("div", iE, [
        Zl(jn("h5", null, null, 512), [
          [r, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        bi(xi(R), null, {
          default: tc(() => [
            bi(xi(b), { class: "cx-stats-panel__monthly-stats" }, {
              default: tc(() => [
                jn("h3", {
                  textContent: ec(a.value)
                }, null, 8, rE),
                Zl(jn("h5", lE, null, 512), [
                  [r, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            bi(xi(b), { class: "cx-stats-panel__total-stats" }, {
              default: tc(() => [
                jn("h3", {
                  textContent: ec(s.value)
                }, null, 8, cE),
                Zl(jn("h5", uE, null, 512), [
                  [r, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        jn("canvas", {
          ref_key: "canvasRef",
          ref: i,
          class: "cx-stats-panel__canvas"
        }, null, 512),
        jn("a", {
          class: "cx-stats-panel__stats-link",
          href: l.href,
          target: l.target
        }, [
          bi(xi(mE), {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          jn("span", {
            textContent: ec(l.label)
          }, null, 8, gE)
        ], 8, dE)
      ]);
    };
  }
}, Xw = () => {
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
const wE = window.Vue.renderSlot, vE = window.Vue.unref, _E = window.Vue.createVNode, SE = window.Vue.createElementVNode, yE = window.Vue.openBlock, CE = window.Vue.createElementBlock, xE = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, bE = { class: "col-12 ma-0 pa-0" }, kE = {
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
    const n = t, o = Xw(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, i) => (yE(), CE("footer", xE, [
      SE("div", bE, [
        wE(a.$slots, "default", {}, () => [
          _E(vE(La), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, $E = window.Vuex.useStore, VE = () => {
  const e = $E(), t = ro(), { addFeaturedCollectionFlag: n } = Fr();
  return () => x(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const o = yield pe.fetchFavorites();
    if (!o || !o.length)
      return;
    const s = {};
    for (const a of o)
      pe.fetchSectionSuggestion(
        a.sourceLanguage,
        a.title,
        a.targetLanguage
      ).then(
        (i) => a.missingSectionsCount = (i == null ? void 0 : i.missingSectionsCount) || 0
      ), s[a.sourceLanguage] = [
        ...s[a.sourceLanguage] || [],
        a
      ];
    for (const [a, i] of Object.entries(
      s
    ))
      t(
        a,
        i.map((l) => l.title)
      );
    yield n(o, {
      titleGetter: (a) => a.title
    });
    for (const a of o)
      e.commit("suggestions/addFavoriteSuggestion", a);
  });
}, EE = window.Vuex.useStore, Kw = () => {
  const e = EE(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), { isDefaultFilter: i } = zu(), { previousRoute: l } = pt(e), c = Lt(), u = () => {
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
  }, r = () => {
    if (n.value)
      return u() || "direct_preselect";
    const m = {
      "sx-article-search": "return_from_search",
      "sx-translation-confirmer": "return_from_confirmation",
      "sx-section-selector": "return_from_section_selection",
      "sx-sentence-selector": "editor_close"
    }[l.value];
    return m || (i(o.value) ? u() || "direct" : "suggestion_filter_direct_preselect");
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
    const g = r(), m = {
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
  } = P(), { getLoadedSuggestion: s } = Ba(), a = Xm(
    () => s(
      e.value,
      t.value,
      n.value
    )
  ), i = Xm(() => o.value === so.LEAD_SECTION_DUMMY_TITLE ? o.value : a.value.missingSections[o.value] || a.value.presentSections[o.value] || "");
  return { sectionSuggestion: a, activeSectionTargetTitle: i };
}, LE = window.Vuex.useStore, TE = window.Vue.computed, Xt = () => {
  const e = LE(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = P();
  return { currentTranslation: TE(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (i) => i.status === "draft" && i.sourceTitle === s.value && i.sectionTitleMatches(o.value) && i.sourceLanguage === t.value && i.targetLanguage === n.value
    )
  ) };
}, nc = window.Vue.computed, AE = window.Vuex.useStore, nt = () => {
  const e = AE(), { sectionSuggestion: t } = Le(), { currentTranslation: n } = Xt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), i = nc(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = nc(
    () => {
      var u, r;
      return ((u = t.value) == null ? void 0 : u.targetTitle) || ((r = n.value) == null ? void 0 : r.targetTitle);
    }
  ), c = nc(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: i, currentTargetPage: c, currentTargetPageTitle: l };
}, ki = window.Vue.computed, DE = window.Vuex.useStore, re = () => {
  const e = DE(), { currentSourcePage: t } = nt(), { currentMTProvider: n } = pt(e), { sectionURLParameter: o } = P(), s = ki(() => {
    var c, u;
    return o.value ? (u = t.value) == null ? void 0 : u.getSectionByTitle(o.value) : (c = t.value) == null ? void 0 : c.leadSection;
  }), a = ki(
    () => {
      var c;
      return (c = s.value) == null ? void 0 : c.isTitleSelected;
    }
  ), i = ki(
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
    selectedContentTranslationUnit: i,
    currentProposedTranslation: l
  };
}, oc = window.Vue.computed, ht = () => {
  const { sectionURLParameter: e } = P(), { targetPageExists: t } = cn(), { sourceSection: n } = re(), { sectionSuggestion: o } = Le(), s = oc(
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
}, PE = window.Vue.ref, $i = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, sc = PE(null), Tt = () => {
  const { isCurrentSectionPresent: e } = ht(), t = () => {
    e.value ? o($i.EXPAND) : o($i.NEW_SECTION);
  }, n = () => {
    sc.value = null;
  }, o = (s) => {
    if (!Object.values($i).includes(s))
      throw new Error("[CX] Invalid publishing target used");
    sc.value = s;
  };
  return {
    target: sc,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: o,
    PUBLISHING_TARGETS: $i
  };
}, BE = window.Vue.watch, FE = () => {
  const { fetchAllTranslations: e } = hs(), t = nw(), n = VE(), { fetchPageCollectionGroups: o } = Dr(), { logDashboardOpenEvent: s } = Kw(), { applicationLanguagesInitialized: a } = aw(), { clearPublishTarget: i } = Tt();
  return () => x(void 0, null, function* () {
    o(), i();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), BE(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Km = window.Vue.computed, NE = window.Vue.ref, ME = window.Vue.watch, UE = window.Vue.watchEffect, IE = window.Vuex.useStore, RE = ["suggestions", "draft", "published"], zE = () => {
  const e = IE(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = P(), { translationsFetched: o } = hs(), s = NE(null);
  if (RE.includes(t.value))
    s.value = t.value;
  else {
    const a = Km(
      () => o.value.draft
    ), i = Km(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = i.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", ME(a, (l) => {
      l && (s.value = i.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return UE(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, OE = window.Vue.computed, jE = () => {
  const e = _e();
  return OE(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: j0,
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
        icon: O0,
        type: "text"
      }
    }
  ]);
};
const $e = window.Vue.unref, Ue = window.Vue.createVNode, HE = window.Vue.toDisplayString, qE = window.Vue.createTextVNode, _n = window.Vue.withCtx, ac = window.Vue.openBlock, Ym = window.Vue.createBlock, Qm = window.Vue.createCommentVNode, GE = window.Vue.vShow, WE = window.Vue.withDirectives, XE = window.Vue.isRef, KE = window.Vue.createElementBlock, Jm = window.Vue.computed, YE = window.Vue.inject, QE = window.Vuex.useStore, JE = window.Codex.CdxButton, ZE = window.Codex.CdxIcon, e4 = {
  __name: "CXDashboard",
  setup(e) {
    const t = tt(), n = Lt(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    FE()();
    const a = QE();
    a.dispatch("translator/fetchTranslatorStats");
    const i = Jm(() => a.state.translator.translatorStats), l = zE(), c = jE(), u = Xw(), r = (m) => {
      u(m), l.value = m;
    }, d = YE("breakpoints"), g = Jm(() => d.value.mobile);
    return mw.cx.eventlogging.stats.dashboardAccess(g.value), (m, p) => (ac(), KE("div", null, [
      Ue($e(R), { class: "ma-0 pb-4" }, {
        default: _n(() => [
          Ue($e(JE), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: _n(() => [
              Ue($e(ZE), {
                class: "me-1",
                icon: $e(Gf)
              }, null, 8, ["icon"]),
              qE(" " + HE(m.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Ue($e(R), {
        class: "ma-0",
        align: "start"
      }, {
        default: _n(() => [
          m.$mwui.breakpoint.tabletAndUp ? (ac(), Ym($e(b), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: _n(() => [
              Ue($e(La), {
                id: "dashboard-list-selector--desktop",
                items: $e(c),
                active: $e(l),
                onSelect: r
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Qm("", !0),
          Ue($e(b), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: _n(() => [
              WE(Ue(jV, null, null, 512), [
                [GE, $e(l) === "suggestions"]
              ]),
              Ue(DV, {
                active: $e(l) === "suggestions"
              }, null, 8, ["active"]),
              Ue(rm, {
                "translation-status": "draft",
                "active-status": $e(l)
              }, null, 8, ["active-status"]),
              Ue(rm, {
                "translation-status": "published",
                "active-status": $e(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Ue($e(b), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: _n(() => [
              Ue($e(R), {
                class: "ma-0",
                align: "start"
              }, {
                default: _n(() => [
                  Ue($e(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: _n(() => [
                      Ue(fE, { stats: i.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Ue($e(b), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: _n(() => [
                      Ue(nE)
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
      m.$mwui.breakpoint.mobile ? (ac(), Ym(kE, {
        key: 0,
        active: $e(l),
        "onUpdate:active": p[0] || (p[0] = (f) => XE(l) ? l.value = f : null),
        items: $e(c)
      }, null, 8, ["active", "items"])) : Qm("", !0)
    ]));
  }
}, t4 = {
  name: "DashboardView",
  components: { CxDashboard: e4 }
}, n4 = window.Vue.resolveComponent, o4 = window.Vue.createVNode, s4 = window.Vue.openBlock, a4 = window.Vue.createElementBlock, i4 = { class: "cx-translation-dashboard" };
function r4(e, t, n, o, s, a) {
  const i = n4("cx-dashboard");
  return s4(), a4("main", i4, [
    o4(i, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const Zm = /* @__PURE__ */ we(t4, [["render", r4]]), zo = window.Vue.computed, l4 = () => {
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
  ), { targetPageExists: i, getCurrentTitleByLanguage: l } = cn(), c = zo(() => i.value ? Z.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), u = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : i.value ? s.value >= 1 ? "cx-sx-select-section" : a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : a.value > 0 ? "cx-sx-select-section" : "" : "cx-sx-start-translation-button-label", r = zo(() => {
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
      return !i.value || ((g = e.value) == null ? void 0 : g.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessage: r,
    getActionButtonLabel: u,
    isProgressiveButton: d,
    targetArticlePath: c
  };
};
function c4(e) {
  return e.$el = $(e), e;
}
function u4(e, t, n, o) {
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
function d4(e, t) {
  return x(this, null, function* () {
    yield dd(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = c4(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const g4 = window.Vue.computed, m4 = window.Vue.onMounted, p4 = window.Vue.ref;
function h4(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const f4 = {
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
    const n = p4(null);
    let o = null;
    const s = g4(
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
    return m4(() => x(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = h4;
      const r = yield d4(c, n.value);
      t.emit("ready"), n.value.appendChild(r.$element[0]), o = u4(
        r,
        e.content,
        e.language,
        e.dir
      ), o.focus();
    })), { sxeditor: n };
  }
}, Vi = window.Vue.createElementVNode, w4 = window.Vue.openBlock, v4 = window.Vue.createElementBlock, _4 = ["lang", "dir"], S4 = ["lang", "dir"];
function y4(e, t, n, o, s, a) {
  return w4(), v4("div", {
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
    }, null, 8, S4)
  ], 8, _4);
}
const C4 = /* @__PURE__ */ we(f4, [["render", y4]]);
function dd() {
  return mw.loader.using("mw.cx3.ve");
}
const x4 = window.Vuex.useStore, b4 = () => {
  const e = x4();
  return (t, n) => x(void 0, null, function* () {
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
        const a = Pf.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, k4 = window.Vuex.useStore, Yw = () => {
  const e = k4();
  return (t, n, o, s = null) => x(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const i = yield ds.fetchPageContent(
      t,
      n,
      o,
      s
    );
    a = e.getters["mediawiki/getPage"](
      t,
      o
    ), a ? a.content || (a.content = i.content, e.commit("mediawiki/setPageSections", {
      page: a,
      sections: i.sections
    })) : e.commit("mediawiki/addPage", i);
  });
}, Rr = () => {
  const { currentSourcePage: e } = nt(), t = b4(), n = Yw(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: i,
    revisionURLParameter: l
  } = P(), c = (d, g) => x(void 0, null, function* () {
    if (!d()) {
      try {
        yield n(
          s.value,
          a.value,
          i.value,
          l.value
        );
      } catch (m) {
        throw mw.cx.eventlogging.stats.sourceArticleFetchFailed(!0), m;
      }
      qt || (yield t(
        s.value,
        i.value
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
}, $4 = window.Vuex.useStore, fs = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = P(), { sectionSuggestion: a, activeSectionTargetTitle: i } = Le(), { target: l } = Tt(), c = $4(), u = tt(), r = () => {
    const p = u.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !c.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return u.getRoutes().find((f) => f.name === p);
  }, d = () => {
    const m = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), p = Z.getCurrentWikiLanguageCode();
    if (!m || t.value === p)
      return !1;
    const f = o.value ? { section: o.value } : {}, h = Z.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      f
    );
    return location.href = h + "#" + r().path, !0;
  }, g = () => {
    var p;
    const m = {};
    o.value && (m.sourcesection = o.value, i.value && (m.targetsection = i.value)), (p = a.value) != null && p.targetTitle && (m.targettitle = a.value.targetTitle), l.value && (m.publishtarget = l.value), location.href = Z.getCXUrl(
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
    ), qt) {
      g();
      return;
    }
    if (d())
      return;
    const p = r();
    u.push({ name: p.name });
  };
}, ep = window.Vue.computed, V4 = window.Vue.ref, E4 = window.Vue.watchEffect, ic = /* @__PURE__ */ new Map(), L4 = (e, t) => x(void 0, null, function* () {
  return (yield pe.fetchArticleSections(
    e,
    t
  )).sections.filter(
    (s) => s.level === "2"
  )[0].byteoffset;
}), T4 = (e, t) => {
  const n = `${e}:${t}`;
  if (ic.has(n))
    return ic.get(n);
  const o = L4(e, t);
  return ic.set(n, o), o;
}, Qw = () => {
  const { currentSourcePage: e } = nt(), { sectionSuggestion: t } = Le(), { sectionURLParameter: n } = P(), o = V4(null);
  E4(() => x(void 0, null, function* () {
    var i;
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
      o.value = yield T4(l, c);
    } else
      o.value = ((i = e.value) == null ? void 0 : i.articleSize) || null;
  }));
  const s = ep(() => o.value ? !t.value && qt ? Rf(o.value) : Wu(o.value) : We.unknown);
  return { isQuickTranslation: ep(() => s.value === We.stub || s.value === We.easy), difficulty: s, sizeInBytes: o };
}, gd = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = P(), s = Lt(), { difficulty: a } = Qw();
  return {
    logDashboardTranslationStartEvent: () => {
      const l = {
        event_type: "dashboard_translation_start",
        event_source: Rw.value,
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
      targetTitle: i,
      isLeadSectionTranslation: l,
      sourceSectionTitle: c,
      targetSectionTitle: u
    } = t.value, r = {
      event_type: "dashboard_translation_continue",
      translation_id: n,
      translation_source_language: o,
      translation_source_title: a,
      translation_target_language: s,
      translation_target_title: i,
      translation_type: l ? "article" : "section"
    };
    return c && (r.translation_source_section = c), u && (r.translation_target_section = u), e(r);
  };
}, A4 = window.Vue.ref, D4 = () => {
  const e = tt(), { logDashboardTranslationStartEvent: t } = gd(), n = md(), o = fs(), { sectionURLParameter: s } = P(), { targetPageExists: a } = cn(), { selectPageSectionByTitle: i } = Rr(), l = () => x(void 0, null, function* () {
    yield i(s.value), e.push({ name: "sx-content-comparator" });
  }), c = A4(!1), { currentTranslation: u } = Xt();
  return {
    handlePrimaryButtonClick: () => {
      u.value ? u.value.isArticleTranslation && !qt ? c.value = !0 : (n(), o()) : s.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: c
  };
};
const P4 = window.Vue.resolveDirective, tp = window.Vue.createElementVNode, np = window.Vue.withDirectives, B4 = window.Vue.unref, F4 = window.Vue.withCtx, N4 = window.Vue.openBlock, M4 = window.Vue.createBlock, U4 = {
  href: "",
  target: "_blank"
}, I4 = window.Codex.CdxDialog, R4 = {
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
    const n = e, o = t, s = (u) => o("update:modelValue", u), a = _e(), i = {
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
    return (u, r) => {
      const d = P4("i18n");
      return N4(), M4(B4(I4), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: u.$i18n("cx-unreviewed-translation-dialog-title"),
        "use-close-button": !0,
        "primary-action": i,
        "default-action": l,
        "onUpdate:open": r[0] || (r[0] = (g) => s(g)),
        onPrimary: c,
        onDefault: r[1] || (r[1] = (g) => s(!1))
      }, {
        default: F4(() => [
          np(tp("p", null, null, 512), [
            [d, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          np(tp("a", U4, null, 512), [
            [d, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
}, z4 = () => {
  const {
    sectionURLParameter: e,
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = P(), { loadSuggestion: s } = Ba();
  return () => x(void 0, null, function* () {
    const a = yield s(
      t.value,
      n.value,
      o.value
    );
    return a instanceof on ? a.sourceSections.includes(e.value) : !1;
  });
};
const be = window.Vue.unref, O4 = window.Vue.resolveDirective, Hs = window.Vue.createElementVNode, op = window.Vue.withDirectives, qs = window.Vue.openBlock, rc = window.Vue.createElementBlock, lc = window.Vue.createCommentVNode, St = window.Vue.createVNode, Mt = window.Vue.withCtx, cc = window.Vue.toDisplayString, uc = window.Vue.createTextVNode, j4 = window.Vue.withModifiers, sp = window.Vue.createBlock, H4 = window.Vue.Fragment, q4 = { class: "sx-translation-confirmer-body pb-4" }, G4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, W4 = ["innerHTML"], X4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, K4 = ["href"], Y4 = ["innerHTML"], Ei = window.Vue.computed, dc = window.Vue.ref, Q4 = window.Vue.watchEffect, gc = window.Codex.CdxButton, J4 = window.Codex.CdxIcon, Z4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = tt(), { sectionSuggestion: o } = Le(), { targetLanguageURLParameter: s } = P(), a = Ei(() => H.getAutonym(s.value)), { sectionURLParameter: i, clearSectionURLParameter: l } = P(), { logDashboardTranslationStartEvent: c } = gd(), u = fs(), { handlePrimaryButtonClick: r, translationConfirmationDialogOn: d } = D4(), g = dc(!1), m = dc(null), p = () => x(this, null, function* () {
      let Q = !0;
      try {
        Q = yield $t.checkUnreviewedTranslations();
      } catch (oe) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          oe
        );
      }
      Q !== !0 && (g.value = !0, m.value = Q.targetUrl);
    }), f = () => x(this, null, function* () {
      yield p(), !g.value && (c(), u());
    }), h = () => x(this, null, function* () {
      yield p(), !g.value && r();
    }), w = t;
    Q4(() => {
      d.value && (w("open-translation-confirmation-dialog"), d.value = !1);
    });
    const {
      actionInformationMessage: v,
      getActionButtonLabel: y,
      isProgressiveButton: C,
      targetArticlePath: _
    } = l4(), k = _e(), T = Ei(
      () => k.i18n(y(!!i.value))
    ), N = () => x(this, null, function* () {
      yield p(), !g.value && n.push({ name: "sx-section-selector" });
    }), V = Ei(() => {
      var Q, oe;
      return i.value && !!((oe = (Q = o.value) == null ? void 0 : Q.sourceSections) != null && oe.length);
    }), { targetPageExists: L } = cn(), A = Ei(() => !i.value && L.value && qt), G = z4(), ae = dc(!1);
    return G().then((Q) => {
      Q || l(), ae.value = !0;
    }), (Q, oe) => {
      const M = O4("i18n");
      return qs(), rc(H4, null, [
        Hs("section", q4, [
          be(i) && ae.value ? (qs(), rc("section", G4, [
            op(Hs("h6", null, null, 512), [
              [M, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Hs("h5", {
              class: "ma-0",
              innerHTML: be(i)
            }, null, 8, W4)
          ])) : be(L) && !be(i) ? (qs(), rc("section", X4, [
            St(be(R), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Mt(() => [
                op(St(be(b), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [M, [a.value], "cx-sx-existing-translation-status"]
                ]),
                St(be(b), { shrink: "" }, {
                  default: Mt(() => [
                    Hs("a", {
                      href: be(_),
                      target: "_blank"
                    }, [
                      St(be(J4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: be(Pa)
                      }, null, 8, ["icon"])
                    ], 8, K4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            St(be(R), { class: "ma-0" }, {
              default: Mt(() => [
                St(be(b), null, {
                  default: Mt(() => [
                    Hs("span", { innerHTML: be(v) }, null, 8, Y4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : lc("", !0),
          St(be(R), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Mt(() => [
              V.value ? (qs(), sp(be(b), {
                key: 0,
                shrink: ""
              }, {
                default: Mt(() => [
                  St(be(gc), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: j4(N, ["stop"])
                  }, {
                    default: Mt(() => [
                      uc(cc(Q.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : lc("", !0),
              A.value ? (qs(), sp(be(b), {
                key: 1,
                shrink: ""
              }, {
                default: Mt(() => [
                  St(be(gc), {
                    size: "large",
                    onClick: f
                  }, {
                    default: Mt(() => [
                      uc(cc(Q.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : lc("", !0),
              St(be(b), { shrink: "" }, {
                default: Mt(() => [
                  St(be(gc), {
                    weight: "primary",
                    size: "large",
                    action: be(C) ? "progressive" : "default",
                    onClick: h
                  }, {
                    default: Mt(() => [
                      uc(cc(T.value), 1)
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
        St(R4, {
          modelValue: g.value,
          "onUpdate:modelValue": oe[0] || (oe[0] = (W) => g.value = W),
          "target-url": m.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Li = window.Vue.unref, eL = window.Vue.openBlock, tL = window.Vue.createBlock, nL = window.Vue.computed, Jw = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t } = Da(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = P(), { currentLanguageTitleGroup: s } = cn(), a = nL(
      () => {
        var u;
        return ((u = s.value) == null ? void 0 : u.titles.map((r) => r.lang)) || [];
      }
    ), i = WC(), l = (u) => i(u, o.value), c = (u) => i(n.value, u);
    return (u, r) => (eL(), tL(yr, {
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
}, oL = (e) => {
  const s = e / 5 / 15;
  return Math.ceil(s);
};
const Be = window.Vue.unref, mc = window.Vue.toDisplayString, Hn = window.Vue.createElementVNode, Qt = window.Vue.createVNode, Oo = window.Vue.withCtx, sL = window.Vue.resolveDirective, aL = window.Vue.withDirectives, iL = window.Vue.normalizeClass, ap = window.Vue.openBlock, rL = window.Vue.createElementBlock, lL = window.Vue.createCommentVNode, cL = window.Vue.createBlock, uL = ["textContent"], dL = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, gL = ["textContent"], mL = { class: "pe-3" }, pL = ["textContent"], hL = window.Codex.CdxButton, Gs = window.Codex.CdxIcon, qn = window.Vue.computed, fL = window.Vuex.useStore, wL = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = fL(), { currentSourcePage: n } = nt(), { sectionSuggestion: o } = Le(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i,
      sectionURLParameter: l
    } = P(), c = qn(() => t.state.suggestions.favorites || []), u = qn(
      () => c.value.some(
        (N) => i.value === N.title && s.value === N.sourceLanguage && a.value === N.targetLanguage
      )
    ), { markFavoriteSuggestion: r, removeFavoriteSuggestion: d } = ud(), g = () => r(
      i.value,
      s.value,
      a.value
    ), m = () => d(
      new is({
        title: i.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), p = qn(
      () => u.value ? Kf : Yf
    ), f = qn(
      () => u.value ? m : g
    ), h = qn(
      () => Z.getPageUrl(s.value || "", i.value || "")
    ), w = qn(
      () => {
        var N;
        return mw.language.convertNumber((((N = n.value) == null ? void 0 : N.langLinksCount) || 0) + 1);
      }
    ), v = (N) => {
      const V = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let L = 0; L < V.length; L++)
        if (N >= V[L].value)
          return mw.language.convertNumber(
            Number((N / V[L].value).toFixed(1).replace(/\.0$/, ""))
          ) + V[L].suffix;
      return mw.language.convertNumber(N);
    }, y = qn(() => {
      var V;
      const N = Object.values(((V = n.value) == null ? void 0 : V.pageviews) || {}).reduce(
        (L, A) => L + A,
        0
      );
      return v(N);
    }), { isQuickTranslation: C, sizeInBytes: _ } = Qw(), k = _e(), T = qn(() => {
      if (!o.value && !n.value || !_.value)
        return "";
      const N = oL(_.value), V = N >= 60 ? N / 60 : 0, L = Math.round(V * 2) / 2, A = mw.language.convertNumber(L), G = mw.language.convertNumber(N);
      if (!o.value && qt)
        return k.i18n(
          "cx-sx-translation-confirmer-translation-time-whole-article",
          A,
          G
        );
      if (o.value) {
        if (l.value)
          return k.i18n(
            "cx-sx-translation-confirmer-translation-time-single-section",
            A,
            G
          );
      } else
        return k.i18n(
          "cx-sx-translation-confirmer-translation-time-lead-section",
          A,
          G
        );
      const ae = Object.keys(o.value.missingSections).length;
      return k.i18n(
        "cx-sx-translation-confirmer-translation-time-sections",
        A,
        G,
        mw.language.convertNumber(ae)
      );
    });
    return (N, V) => {
      const L = sL("i18n");
      return ap(), cL(Be(R), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: Oo(() => [
          Qt(Be(b), null, {
            default: Oo(() => [
              Qt(Be(R), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: Oo(() => [
                  Qt(Be(b), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: h.value,
                    target: "_blank"
                  }, {
                    default: Oo(() => [
                      Hn("h5", {
                        class: "ma-0 me-1",
                        textContent: mc(Be(i))
                      }, null, 8, uL),
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
                    default: Oo(() => [
                      Qt(Be(hL), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": N.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: f.value
                      }, {
                        default: Oo(() => [
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
              Hn("div", dL, [
                Hn("div", null, [
                  Hn("span", null, [
                    Qt(Be(Gs), {
                      icon: Be(Jf),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Hn("span", {
                      class: "pe-3",
                      textContent: mc(w.value)
                    }, null, 8, gL)
                  ]),
                  Hn("span", null, [
                    Qt(Be(Gs), {
                      icon: Be(Qf),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    aL(Hn("span", mL, null, 512), [
                      [L, [y.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                T.value ? (ap(), rL("span", {
                  key: 0,
                  class: iL(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Be(C)
                  }])
                }, [
                  Qt(Be(Gs), {
                    icon: Be(fC),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Hn("span", {
                    textContent: mc(T.value)
                  }, null, 8, pL)
                ], 2)) : lL("", !0)
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
const vL = window.Vue.resolveDirective, wo = window.Vue.createElementVNode, Ti = window.Vue.withDirectives, _L = window.Vue.toDisplayString, SL = window.Vue.createTextVNode, pc = window.Vue.unref, hc = window.Vue.withCtx, fc = window.Vue.openBlock, wc = window.Vue.createBlock;
window.Vue.createCommentVNode;
const yL = { class: "pa-4" }, CL = { class: "flex pt-2" }, xL = window.Codex.CdxButton, bL = window.Vue.ref, kL = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = fs(), a = md(), i = bL(!1), { currentTranslation: l } = Xt(), c = () => x(this, null, function* () {
      i.value = !0;
      let u = !1;
      try {
        u = yield $t.splitTranslation(
          l.value.translationId
        );
      } catch (r) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          r
        );
      }
      i.value = !1, u && (a(), s(), o());
    });
    return (u, r) => {
      const d = vL("i18n");
      return fc(), wc(pc(Vt), {
        value: e.modelValue,
        persistent: i.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: hc(() => [
          wo("div", CL, [
            i.value ? (fc(), wc(pc(gt), { key: 1 })) : (fc(), wc(pc(xL), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: hc(() => [
                SL(_L(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: hc(() => [
          wo("div", yL, [
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
const ip = window.Vue.unref, $L = window.Vue.createVNode, rp = window.Vue.toDisplayString, Ai = window.Vue.createElementVNode, VL = window.Vue.openBlock, EL = window.Vue.createElementBlock, LL = { class: "cx-translation-confirmer-featured-collection-banner ma-4 px-4 py-3" }, TL = { class: "cx-translation-confirmer-featured-collection-banner__header" }, AL = { class: "cx-translation-confirmer-featured-collection-banner__header-text" }, DL = { class: "cx-translation-confirmer-featured-collection-banner__body" }, PL = window.Vue.computed, BL = window.Codex.CdxIcon, FL = {
  __name: "SXTranslationConfirmerFeaturedCollectionBanner",
  setup(e) {
    const { featuredCollection: t } = Wt(), n = PL(() => {
      var o;
      return (o = t.value) == null ? void 0 : o.name;
    });
    return (o, s) => (VL(), EL("div", LL, [
      Ai("div", TL, [
        $L(ip(BL), {
          icon: ip(td),
          size: "small",
          class: "cx-translation-confirmer-featured-collection-banner__header-icon me-2"
        }, null, 8, ["icon"]),
        Ai("span", AL, rp(o.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      Ai("div", DL, [
        Ai("p", null, rp(n.value), 1)
      ])
    ]));
  }
}, NL = window.Vuex.useStore, Ws = {}, Zw = () => {
  const e = NL();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) ? Promise.resolve() : (Ws[o] || (Ws[o] = ds.fetchLanguageTitles(t, n).then((s) => {
      delete Ws[o], s && e.commit("mediawiki/addLanguageTitleGroup", s);
    })), Ws[o]);
  };
}, ML = window.Vue.ref, jo = ML(null), ev = () => {
  const e = () => x(void 0, null, function* () {
    var n, o;
    jo.value || (yield Tr.fetchCXServerToken().then((s) => {
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
const lp = window.Vue.resolveDirective, Di = window.Vue.createElementVNode, cp = window.Vue.withDirectives, Gn = window.Vue.unref, Pi = window.Vue.withCtx, Sn = window.Vue.createVNode, Bi = window.Vue.openBlock, up = window.Vue.createElementBlock, UL = window.Vue.createCommentVNode, dp = window.Vue.createBlock, IL = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, RL = { class: "mb-0" }, zL = { class: "sx-translation-confirmer__article-image flex justify-center" }, OL = ["src"], jL = { class: "ma-3" }, gp = window.Vue.computed, HL = window.Vue.inject, qL = window.Vue.onBeforeUnmount, mp = window.Vue.ref, GL = window.Vue.watch, WL = window.Vuex.useStore, XL = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = WL(), { currentSourcePage: n } = nt(), { previousRoute: o } = pt(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: i,
      clearTranslationURLParameters: l
    } = P(), { inFeaturedCollection: c } = nd(), u = HL("breakpoints"), r = gp(() => u.value.nextBreakpoint), d = gp(
      () => {
        var C;
        return (C = n.value) == null ? void 0 : C.getImage(r.value);
      }
    ), g = mp(!1);
    GL(
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
    const { fetchTranslationsByStatus: m } = hs(), p = Zw();
    m("draft"), p(s.value, i.value), dd(), ev()(), tw()(a.value);
    const w = tt(), v = () => {
      const C = ["dashboard", "sx-article-search"];
      !o.value || !C.includes(o.value) ? w.push({ name: "dashboard" }) : w.push({ name: o.value });
    };
    qL(() => {
      const C = w.currentRoute.value.name;
      (C === "dashboard" || C === "sx-article-search") && l();
    });
    const y = mp(!1);
    return (C, _) => {
      const k = lp("i18n"), T = lp("i18n-html");
      return Bi(), up("section", IL, [
        Sn(Gn(R), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Pi(() => [
            Sn(Gn(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Pi(() => [
                cp(Di("h5", RL, null, 512), [
                  [k, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Sn(Gn(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Pi(() => [
                Sn(Gn(Xe), {
                  class: "pa-0",
                  type: "icon",
                  icon: Gn(br),
                  "icon-size": 20,
                  onClick: v
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Di("div", zL, [
          d.value ? (Bi(), up("img", {
            key: 0,
            src: d.value
          }, null, 8, OL)) : (Bi(), dp(Gn(Ze), {
            key: 1,
            size: "120",
            icon: Gn(Sf),
            "icon-color": C.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Sn(wL),
        g.value ? (Bi(), dp(FL, { key: 0 })) : UL("", !0),
        Sn(Jw),
        Sn(Z4, {
          onOpenTranslationConfirmationDialog: _[0] || (_[0] = (N) => y.value = !0)
        }),
        Sn(Gn(R), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Pi(() => [
            Di("p", jL, [
              cp(Di("small", null, null, 512), [
                [T, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Sn(kL, {
          modelValue: y.value,
          "onUpdate:modelValue": _[1] || (_[1] = (N) => y.value = N)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const KL = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: XL
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, YL = window.Vue.resolveComponent, QL = window.Vue.createVNode, JL = window.Vue.normalizeClass, ZL = window.Vue.openBlock, e3 = window.Vue.createElementBlock;
function t3(e, t, n, o, s, a) {
  const i = YL("sx-translation-confirmer");
  return ZL(), e3("main", {
    class: JL(["sx-translation-confirmer-view", a.classes])
  }, [
    QL(i)
  ], 2);
}
const n3 = /* @__PURE__ */ we(KL, [["render", t3]]);
const o3 = window.Vue.toDisplayString, pp = window.Vue.unref, s3 = window.Vue.createVNode, a3 = window.Vue.createTextVNode, i3 = window.Vue.createElementVNode, r3 = window.Vue.openBlock, l3 = window.Vue.createElementBlock, c3 = { class: "sx-section-selector-view-article-item" }, u3 = ["href"], d3 = window.Codex.CdxIcon, hp = {
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
    return (t, n) => (r3(), l3("span", c3, [
      i3("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        a3(o3(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        s3(pp(d3), {
          size: "x-small",
          icon: pp(Pa)
        }, null, 8, ["icon"])
      ], 8, u3)
    ]));
  }
};
const g3 = window.Vue.resolveDirective, Fi = window.Vue.createElementVNode, vc = window.Vue.withDirectives, vo = window.Vue.unref, m3 = window.Vue.toDisplayString, Ni = window.Vue.withCtx, Xs = window.Vue.createVNode, p3 = window.Vue.openBlock, h3 = window.Vue.createElementBlock, f3 = { class: "sx-section-selector__header pa-4" }, w3 = { class: "sx-section-selector__header-text ma-0" }, v3 = ["textContent"], _3 = { class: "pt-0 ma-0" }, S3 = { class: "ma-0" }, y3 = window.Codex.CdxButton, C3 = window.Codex.CdxIcon, x3 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Le();
    return (n, o) => {
      const s = g3("i18n");
      return p3(), h3("div", f3, [
        Xs(vo(R), { class: "ma-0 pb-3" }, {
          default: Ni(() => [
            Xs(vo(b), null, {
              default: Ni(() => {
                var a;
                return [
                  vc(Fi("h6", w3, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Fi("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: m3((a = vo(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, v3)
                ];
              }),
              _: 1
            }),
            Xs(vo(b), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Ni(() => [
                Xs(vo(y3), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Ni(() => [
                    Xs(vo(C3), { icon: vo(ms) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vc(Fi("h4", _3, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        vc(Fi("p", S3, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, fp = window.Vue.renderSlot, b3 = window.Vue.renderList, k3 = window.Vue.Fragment, _c = window.Vue.openBlock, wp = window.Vue.createElementBlock, Mi = window.Vue.unref, vp = window.Vue.createVNode, _p = window.Vue.withCtx, $3 = window.Vue.createBlock, V3 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, E3 = window.Codex.CdxButton, L3 = window.Codex.CdxIcon, tv = {
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
    return (t, n) => (_c(), wp("ul", V3, [
      fp(t.$slots, "before-list"),
      (_c(!0), wp(k3, null, b3(e.sections, (o) => (_c(), $3(Mi(R), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: _p(() => [
          vp(Mi(E3), {
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
              vp(Mi(L3), {
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
}, T3 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const A3 = window.Vue.resolveDirective, Ui = window.Vue.createElementVNode, Ii = window.Vue.withDirectives, Ut = window.Vue.unref, Ri = window.Vue.openBlock, Sc = window.Vue.createBlock, D3 = window.Vue.createCommentVNode, Ho = window.Vue.withCtx, Ks = window.Vue.createVNode, P3 = window.Vue.toDisplayString, B3 = window.Vue.createTextVNode, F3 = window.Vue.createElementBlock, N3 = { class: "sx-section-selector__missing-sections py-2" }, M3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, U3 = ["lang", "dir", "innerHTML"], yc = window.Vue.computed, I3 = window.Codex.CdxButton, R3 = window.Codex.CdxInfoChip, z3 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Le(), { targetLanguageURLParameter: n } = P(), o = yc(() => H.getAutonym(n.value)), s = yc(
      () => {
        var i;
        return Object.keys(((i = t.value) == null ? void 0 : i.missingSections) || {}).length === 0;
      }
    ), a = yc(() => {
      var i;
      return (i = t.value) != null && i.orderedMissingSections ? t.value.orderedMissingSections.map((l) => Ke(he({}, l), {
        isEasy: zf(
          t.value.getSectionSize(l.sourceTitle)
        )
      })) : [];
    });
    return (i, l) => {
      const c = A3("i18n");
      return Ri(), F3("section", N3, [
        Ii(Ui("h4", M3, null, 512), [
          [c, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (Ri(), Sc(Ut(R), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Ho(() => [
            Ks(Ut(b), {
              class: "py-6 justify-center",
              innerHTML: Ut(T3)
            }, null, 8, ["innerHTML"]),
            Ks(Ut(b), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Ho(() => [
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
              default: Ho(() => [
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
              default: Ho(() => [
                Ks(Ut(I3), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: l[1] || (l[1] = (u) => i.$emit("close"))
                }, {
                  default: Ho(() => [
                    B3(P3(i.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Ri(), Sc(tv, {
          key: 0,
          sections: a.value,
          onSelectSection: l[0] || (l[0] = (u) => i.$emit("select-section", u))
        }, {
          default: Ho(({ sourceSection: u, isEasy: r }) => {
            var d, g;
            return [
              Ui("h5", {
                class: "ma-0",
                lang: (d = Ut(t)) == null ? void 0 : d.sourceLanguage,
                dir: Ut(H.getDir)((g = Ut(t)) == null ? void 0 : g.sourceLanguage),
                innerHTML: u
              }, null, 8, U3),
              r ? Ii((Ri(), Sc(Ut(R3), {
                key: 0,
                class: "sx-section-selector__easy-section-badge"
              }, null, 512)), [
                [c, void 0, "cx-sx-section-selector-easy-section-badge"]
              ]) : D3("", !0)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const O3 = window.Vue.resolveDirective, qo = window.Vue.createElementVNode, j3 = window.Vue.withDirectives, yt = window.Vue.unref, H3 = window.Vue.toDisplayString, zi = window.Vue.createVNode, Oi = window.Vue.withCtx, q3 = window.Vue.openBlock, G3 = window.Vue.createElementBlock, W3 = { class: "sx-section-selector__present-sections py-2" }, X3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, K3 = { class: "sx-section-selector__present-section-button-content" }, Y3 = ["textContent"], Q3 = { class: "sx-section-selector__present-section-button-content" }, J3 = ["lang", "dir", "innerHTML"], Z3 = ["lang", "dir", "innerHTML"], e5 = window.Vue.computed, t5 = window.Codex.CdxButton, n5 = window.Codex.CdxIcon, Sp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Le(), { targetLanguageURLParameter: n } = P(), o = e5(() => H.getAutonym(n.value));
    return (s, a) => {
      var l;
      const i = O3("i18n");
      return q3(), G3("section", W3, [
        j3(qo("h4", X3, null, 512), [
          [i, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        zi(tv, {
          sections: ((l = yt(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[1] || (a[1] = (c) => s.$emit("select-section", c))
        }, {
          "before-list": Oi(() => [
            zi(yt(R), {
              tag: "li",
              class: "ma-0"
            }, {
              default: Oi(() => [
                zi(yt(t5), {
                  weight: "quiet",
                  class: "col justify-start items-center py-3 px-4",
                  "aria-label": s.$i18n("sx-section-selector-next-button-aria-label"),
                  onClick: a[0] || (a[0] = (c) => s.$emit("select-section", yt(so).LEAD_SECTION_DUMMY_TITLE))
                }, {
                  default: Oi(() => [
                    qo("div", K3, [
                      qo("h5", {
                        class: "sx-section-selector__present-section-button-source",
                        textContent: H3(s.$i18n("cx-sx-present-lead-section-label"))
                      }, null, 8, Y3)
                    ]),
                    zi(yt(n5), {
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
            var r, d, g, m;
            return [
              qo("div", Q3, [
                qo("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (r = yt(t)) == null ? void 0 : r.sourceLanguage,
                  dir: yt(H.getDir)((d = yt(t)) == null ? void 0 : d.sourceLanguage),
                  innerHTML: c
                }, null, 8, J3),
                qo("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = yt(t)) == null ? void 0 : g.targetLanguage,
                  dir: yt(H.getDir)((m = yt(t)) == null ? void 0 : m.targetLanguage),
                  innerHTML: u
                }, null, 8, Z3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Ie = window.Vue.createVNode, Cc = window.Vue.openBlock, yp = window.Vue.createBlock, Cp = window.Vue.createCommentVNode, o5 = window.Vue.resolveDirective, Wn = window.Vue.createElementVNode, Ys = window.Vue.withDirectives, it = window.Vue.unref, yn = window.Vue.withCtx, s5 = window.Vue.normalizeClass, xp = window.Vue.toDisplayString, bp = window.Vue.createTextVNode, a5 = window.Vue.createElementBlock, i5 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, r5 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, l5 = { class: "sx-section-selector__additional-consideration-title" }, c5 = { href: "#" }, u5 = { class: "sx-section-selector__additional-consideration-title" }, d5 = { href: "#" }, Qs = window.Vue.computed, g5 = window.Vue.inject, m5 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = g5("breakpoints"), n = Qs(() => t.value.desktopAndUp), { sectionSuggestion: o } = Le(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: i,
      setSectionURLParam: l
    } = P(), c = Qs(() => H.getAutonym(s.value)), u = Qs(() => H.getAutonym(a.value)), r = Qs(
      () => {
        var y;
        return Z.getPageUrl(s.value, (y = o.value) == null ? void 0 : y.sourceTitle);
      }
    ), d = Qs(
      () => {
        var y;
        return Z.getPageUrl(a.value, (y = o.value) == null ? void 0 : y.targetTitle);
      }
    ), g = tt(), m = () => {
      i(), g.push({ name: "dashboard" });
    }, { currentTranslation: p } = Xt(), f = fs(), h = md(), { selectPageSectionByTitle: w } = Rr(), v = (y) => {
      l(y), p.value ? (h(), f()) : (w(y), g.push({ name: "sx-content-comparator" }));
    };
    return mw.cx.eventlogging.stats.selectSectionAccess(!n.value), (y, C) => {
      const _ = o5("i18n");
      return Cc(), a5("section", i5, [
        Ie(x3, { onClose: m }),
        Ie(Jw),
        Ie(it(R), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: yn(() => [
            Ie(it(b), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: yn(() => [
                Ie(z3, {
                  onSelectSection: v,
                  onClose: m
                }),
                n.value ? Cp("", !0) : (Cc(), yp(Sp, {
                  key: 0,
                  onSelectSection: v
                })),
                Wn("section", {
                  class: s5(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Ys(Wn("h4", r5, null, 512), [
                    [_, [
                      u.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Ie(it(R), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: yn(() => [
                      Ie(it(b), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: yn(() => [
                          Ie(hp, {
                            path: r.value,
                            autonym: c.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Ie(it(b), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: yn(() => [
                          Ie(hp, {
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
                Ie(it(R), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: yn(() => [
                    Ie(it(b), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: yn(() => [
                        Wn("h6", l5, [
                          Ie(it(Ze), {
                            icon: it(Q0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          bp(" " + xp(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Ys(Wn("p", null, null, 512), [
                          [_, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Ys(Wn("a", c5, null, 512), [
                          [_, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Ie(it(b), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: yn(() => [
                        Wn("h6", u5, [
                          Ie(it(Ze), {
                            icon: it(Y0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          bp(" " + xp(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Ys(Wn("p", null, null, 512), [
                          [_, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Ys(Wn("a", d5, null, 512), [
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
            n.value ? (Cc(), yp(it(b), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: yn(() => [
                Ie(Sp, {
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
}, p5 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: m5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, h5 = window.Vue.resolveComponent, f5 = window.Vue.createVNode, w5 = window.Vue.normalizeClass, v5 = window.Vue.openBlock, _5 = window.Vue.createElementBlock;
function S5(e, t, n, o, s, a) {
  const i = h5("sx-section-selector");
  return v5(), _5("main", {
    class: w5(["sx-section-selector-view", a.classes])
  }, [
    f5(i)
  ], 2);
}
const y5 = /* @__PURE__ */ we(p5, [["render", S5]]), ji = window.Vue.computed, C5 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = P(), n = ji(
    () => H.getAutonym(e.value)
  ), o = ji(
    () => H.getAutonym(t.value)
  ), { target: s, PUBLISHING_TARGETS: a } = Tt(), i = ji(
    () => s.value === a.EXPAND
  ), l = _e();
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
    return i.value ? u = {
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
const kp = window.Vue.unref, x5 = window.Vue.createVNode, b5 = window.Vue.openBlock, k5 = window.Vue.createElementBlock, $5 = { class: "sx-content-comparator__content-type-selector" }, V5 = window.Vue.watchEffect, E5 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (i) => o("update:selection", i), a = C5();
    return V5(() => {
      a.value.map((l) => l.value).includes(n.selection) || s(a.value[0].value);
    }), (i, l) => (b5(), k5("div", $5, [
      x5(kp(La), {
        items: kp(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Hi = window.Vue.computed, nv = () => {
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
  ), { sourceSection: s } = re(), a = Hi(() => {
    var l;
    return (l = s.value) == null ? void 0 : l.html;
  }), i = Hi(() => {
    var l;
    return (l = o.value) == null ? void 0 : l.html;
  });
  return {
    sourceSectionContent: a,
    targetSectionAnchor: n,
    targetSectionContent: i
  };
};
const qi = window.Vue.createVNode, Cn = window.Vue.unref, L5 = window.Vue.resolveDirective, T5 = window.Vue.withDirectives, Js = window.Vue.openBlock, $p = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Gi = window.Vue.withCtx, xc = window.Vue.createBlock, A5 = window.Vue.normalizeClass, D5 = {
  key: 0,
  class: "ma-0 pa-0"
}, P5 = ["lang", "dir", "innerHTML"], Vp = window.Vue.ref, Wi = window.Vue.computed, B5 = window.Vue.onMounted, F5 = window.Vue.onBeforeUnmount, N5 = {
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
    const n = e, o = t, s = Vp(!1), { sectionSuggestion: a, activeSectionTargetTitle: i } = Le(), { isPresentLeadSection: l } = ht(), { sectionURLParameter: c } = P(), u = Wi(
      () => (g.value || "").replace(/ /g, "_")
    ), r = (w) => o("update:contentTypeSelection", w), { targetSectionAnchor: d } = nv(), g = Wi(
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
            path: `${Z.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${u.value}`,
            lang: a.value.sourceLanguage,
            dir: H.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: p.value,
            lang: a.value.targetLanguage,
            dir: H.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: i.value,
            path: `${p.value}#${d.value}`
          };
      }
    }), p = Wi(
      () => Z.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), f = Vp(null);
    let h;
    return B5(() => {
      h = new IntersectionObserver(
        ([v]) => {
          s.value = v.intersectionRect.height < v.boundingClientRect.height;
        },
        { threshold: [1] }
      );
      const w = () => {
        h == null || h.observe(f.value.$el);
      };
      window.addEventListener("scroll", w, {
        passive: !0,
        once: !0,
        capture: !0
      });
    }), F5(() => {
      h == null || h.disconnect(), h = null;
    }), (w, v) => {
      const y = L5("i18n");
      return Js(), xc(Cn(R), {
        ref_key: "contentHeader",
        ref: f,
        class: A5(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
        direction: "column",
        align: "stretch",
        reverse: s.value
      }, {
        default: Gi(() => [
          qi(E5, {
            selection: e.contentTypeSelection,
            "onUpdate:selection": r
          }, null, 8, ["selection"]),
          qi(Cn(R), {
            justify: "between",
            class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
          }, {
            default: Gi(() => [
              qi(Cn(b), null, {
                default: Gi(() => [
                  Cn(l) ? T5((Js(), $p("h3", D5, null, 512)), [
                    [y, void 0, "cx-sx-present-lead-section-label"]
                  ]) : (Js(), $p("h3", {
                    key: 1,
                    lang: m.value.lang,
                    dir: m.value.dir,
                    class: "ma-0 pa-0",
                    innerHTML: m.value.title
                  }, null, 8, P5))
                ]),
                _: 1
              }),
              qi(Cn(b), { shrink: "" }, {
                default: Gi(() => [
                  s.value ? (Js(), xc(Cn(Xe), {
                    key: 0,
                    icon: Cn(xr),
                    progressive: "",
                    label: w.$i18n(
                      "cx-sx-content-comparator-content-header-translate-button-label"
                    ),
                    onClick: v[0] || (v[0] = (C) => w.$emit("translation-button-clicked"))
                  }, null, 8, ["icon", "label"])) : (Js(), xc(Cn(Xe), {
                    key: 1,
                    class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                    icon: Cn(_f),
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
}, Xi = window.Vue.unref, Ep = window.Vue.createVNode, M5 = window.Vue.openBlock, U5 = window.Vue.createElementBlock, I5 = { class: "sx-content-comparator__header-navigation flex items-center" }, R5 = window.Vue.computed, z5 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = P(), o = R5(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Rr(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    }, i = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    };
    return (l, c) => (M5(), U5("div", I5, [
      Ep(Xi(Xe), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Xi(G0),
        onClick: a
      }, null, 8, ["icon"]),
      Ep(Xi(Xe), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Xi(q0),
        onClick: i
      }, null, 8, ["icon"])
    ]));
  }
};
const Lp = window.Vue.toDisplayString, ye = window.Vue.unref, O5 = window.Vue.resolveDirective, Ki = window.Vue.withDirectives, xn = window.Vue.openBlock, Go = window.Vue.createElementBlock, bc = window.Vue.createCommentVNode, j5 = window.Vue.createTextVNode, H5 = window.Vue.createElementVNode, q5 = window.Vue.normalizeClass, kc = window.Vue.withCtx, Tp = window.Vue.createVNode, $c = window.Vue.createBlock, G5 = { class: "sx-content-comparator-header__mapped-section" }, W5 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, X5 = { key: 0 }, K5 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Y5 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Q5 = {
  key: 2,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, J5 = window.Vue.computed, Z5 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = P(), { activeSectionTargetTitle: n } = Le(), o = _e(), { target: s, PUBLISHING_TARGETS: a, setTarget: i } = Tt(), l = J5(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        H.getAutonym(t.value)
      )
    ), { isPresentLeadSection: c } = ht();
    return (u, r) => {
      const d = O5("i18n");
      return xn(), Go("div", G5, [
        Tp(ye(R), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: kc(() => [
            Tp(ye(b), { grow: "" }, {
              default: kc(() => [
                H5("h6", W5, [
                  j5(Lp(l.value) + " ", 1),
                  ye(s) === ye(a).NEW_SECTION ? Ki((xn(), Go("span", X5, null, 512)), [
                    [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : bc("", !0)
                ]),
                ye(c) ? bc("", !0) : (xn(), Go("h6", {
                  key: 0,
                  class: q5(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": ye(s) === ye(a).NEW_SECTION
                  }])
                }, Lp(ye(n)), 3))
              ]),
              _: 1
            }),
            ye(c) ? bc("", !0) : (xn(), $c(ye(b), {
              key: 0,
              shrink: ""
            }, {
              default: kc(() => [
                ye(s) === ye(a).EXPAND ? (xn(), $c(ye(Xe), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: ye(vf),
                  type: "icon",
                  onClick: r[0] || (r[0] = (g) => ye(i)(ye(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (xn(), $c(ye(Xe), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: ye(e_),
                  type: "icon",
                  onClick: r[1] || (r[1] = (g) => ye(i)(ye(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            }))
          ]),
          _: 1
        }),
        ye(c) ? Ki((xn(), Go("p", K5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-lead-section-clarifications"]
        ]) : ye(s) === ye(a).EXPAND ? Ki((xn(), Go("p", Y5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : Ki((xn(), Go("p", Q5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const De = window.Vue.unref, Wo = window.Vue.createVNode, eT = window.Vue.toDisplayString, Xn = window.Vue.createElementVNode, tT = window.Vue.resolveDirective, Vc = window.Vue.withDirectives, Zs = window.Vue.openBlock, Ec = window.Vue.createElementBlock, Ap = window.Vue.createCommentVNode, Lc = window.Vue.withCtx, Dp = window.Vue.createBlock, nT = { class: "sx-content-comparator__header pa-4" }, oT = { class: "row my-1 py-2 mx-0 gap-6" }, sT = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, aT = { class: "sx-content-comparator-header__titles shrink" }, iT = ["lang", "dir"], rT = {
  key: 0,
  class: "sx-content-comparator-header__section-title pa-0 ma-0"
}, lT = ["lang", "dir", "innerHTML"], cT = { class: "py-2 mb-1" }, Yi = window.Vue.computed, uT = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = P(), { sourceSection: n } = re(), { sectionSuggestion: o } = Le(), { isCurrentSectionPresent: s } = ht(), a = Yi(
      () => {
        var u;
        return (u = o.value) == null ? void 0 : u.missingSections.hasOwnProperty(t.value);
      }
    ), i = Yi(() => {
      var u;
      return (u = n.value) == null ? void 0 : u.html;
    }), l = Yi(() => [
      so.LEAD_SECTION_DUMMY_TITLE,
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), c = Yi(
      () => {
        var u;
        return (((u = o.value) == null ? void 0 : u.sourceSections) || []).find(
          (r) => r === t.value
        );
      }
    );
    return (u, r) => {
      var g;
      const d = tT("i18n");
      return Zs(), Ec("div", nT, [
        Wo(De(Xe), {
          class: "py-2 pa-0",
          icon: De(W0),
          label: u.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: r[0] || (r[0] = (m) => u.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Xn("div", oT, [
          Xn("div", sT, [
            Xn("div", aT, [
              Xn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: De(o).sourceLanguage,
                dir: De(H.getDir)(De(o).sourceLanguage)
              }, eT(De(o).sourceTitle), 9, iT),
              (g = De(n)) != null && g.isLeadSection ? Vc((Zs(), Ec("h2", rT, null, 512)), [
                [d, void 0, "cx-sx-present-lead-section-label"]
              ]) : (Zs(), Ec("h2", {
                key: 1,
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: De(o).sourceLanguage,
                dir: De(H.getDir)(De(o).sourceLanguage),
                innerHTML: c.value
              }, null, 8, lT))
            ]),
            Wo(z5, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          Xn("div", cT, [
            Wo(De(Xe), {
              class: "sx-content-comparator-header__translation-button",
              icon: De(xr),
              progressive: "",
              label: u.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !i.value,
              onClick: r[1] || (r[1] = (m) => u.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (Zs(), Dp(De(R), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Lc(() => [
            Wo(De(b), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Lc(() => [
                Wo(De(Ze), { icon: De(J0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Wo(De(b), { class: "ma-0" }, {
              default: Lc(() => [
                Vc(Xn("strong", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                r[2] || (r[2] = Xn("br", null, null, -1)),
                Vc(Xn("span", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Ap("", !0),
        De(s) ? (Zs(), Dp(Z5, { key: 1 })) : Ap("", !0)
      ]);
    };
  }
};
const Pp = window.Vue.toDisplayString, dT = window.Vue.createElementVNode, Bp = window.Vue.openBlock, Fp = window.Vue.createElementBlock, gT = window.Vue.createCommentVNode, mT = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, pT = ["textContent"], hT = ["textContent"], ov = {
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
    return (t, n) => (Bp(), Fp("section", mT, [
      dT("h5", {
        textContent: Pp(e.placeholderTitle)
      }, null, 8, pT),
      e.placeholderSubtitle ? (Bp(), Fp("p", {
        key: 0,
        textContent: Pp(e.placeholderSubtitle)
      }, null, 8, hT)) : gT("", !0)
    ]));
  }
}, fT = (e, t, n) => {
  const o = t.indexOf(e);
  return t.slice(o + 1).map((a) => n[a]).filter(Boolean)[0] || null;
}, wT = ({
  sourceSectionTitle: e,
  sourceSectionTitles: t,
  targetSectionTitles: n,
  presentSectionMappings: o,
  targetAppendixSectionTitles: s
}) => {
  const a = fT(
    e,
    t,
    o
  );
  return a !== null ? a : n.find(
    (l) => s.includes(l)
  ) || null;
}, Tc = window.Vue.computed, vT = window.Vue.createApp, _T = window.Vuex.useStore, ST = () => {
  const e = _T(), { sectionSuggestion: t } = Le(), { currentTargetPage: n } = nt(), { sectionURLParameter: o } = P(), s = _e(), a = () => vT(
    ov,
    {
      placeholderTitle: s.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, i = Tc(() => {
    const { appendixSectionTitles: u } = e.state.suggestions;
    return u[t.value.targetLanguage] || [];
  }), l = Tc(
    () => wT({
      sourceSectionTitle: o.value,
      sourceSectionTitles: t.value.sourceSections,
      targetSectionTitles: t.value.targetSections,
      presentSectionMappings: t.value.presentSections,
      targetAppendixSectionTitles: i.value
    })
  ), c = (u) => {
    const r = u.getElementsByTagName("base");
    Array.from(r).forEach(
      (d) => d.parentNode.removeChild(d)
    );
  };
  return Tc(() => {
    var d;
    if (!((d = n.value) != null && d.content))
      return null;
    const u = document.createElement("div");
    u.innerHTML = n.value.content, c(u);
    const r = a();
    if (l.value) {
      const g = Array.from(
        u.querySelectorAll("h2")
      ).filter(
        (m) => m.textContent.match(l.value)
      );
      if (g && g.length) {
        const m = g[0].parentNode;
        m.parentNode.insertBefore(
          r,
          m
        );
      }
    } else
      u.appendChild(r);
    return u.innerHTML;
  });
};
const Ac = window.Vue.createVNode, rt = window.Vue.unref, Xo = window.Vue.openBlock, Np = window.Vue.createBlock, Mp = window.Vue.createCommentVNode, Qi = window.Vue.createElementVNode, Dc = window.Vue.Fragment, Ji = window.Vue.createElementBlock, yT = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, CT = { class: "sx-content-comparator__source-content" }, xT = ["lang", "dir", "innerHTML"], bT = ["lang", "dir", "innerHTML"], kT = ["innerHTML"], $T = window.Vue.ref, Up = window.Vue.computed, Ip = window.Vue.watch, VT = window.Vue.inject, ET = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = Tt(), n = tt(), o = $T("source_section"), { logDashboardTranslationStartEvent: s } = gd(), a = fs(), i = () => n.push({ name: "sx-section-selector" }), l = () => {
      s(), a();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = P(), { sourceSectionContent: r, targetSectionContent: d } = nv(), g = ST(), { sectionSuggestion: m } = Le(), { isCurrentSectionPresent: p } = ht(), f = Up(() => m.value.targetTitle), h = Yw();
    Ip(
      f,
      () => x(this, null, function* () {
        try {
          yield h(
            u.value,
            c.value,
            f.value
          );
        } catch (y) {
          throw mw.cx.eventlogging.stats.sourceArticleFetchFailed(!0), y;
        }
      }),
      { immediate: !0 }
    ), Ip(p, t, { immediate: !0 });
    const w = VT("breakpoints"), v = Up(() => w.value.mobile);
    return mw.cx.eventlogging.stats.sectionCompareAccess(v.value), (y, C) => (Xo(), Ji("section", yT, [
      Ac(uT, {
        onTranslationButtonClicked: l,
        onClose: i
      }),
      Ac(N5, {
        "content-type-selection": o.value,
        "onUpdate:contentTypeSelection": C[0] || (C[0] = (_) => o.value = _),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      Qi("section", CT, [
        o.value === "source_section" ? (Xo(), Ji(Dc, { key: 0 }, [
          rt(r) ? Mp("", !0) : (Xo(), Np(rt(gt), { key: 0 })),
          Qi("section", {
            lang: rt(c),
            dir: rt(H.getDir)(rt(c)),
            class: "pt-2 px-4",
            innerHTML: rt(r)
          }, null, 8, xT)
        ], 64)) : o.value === "target_article" ? (Xo(), Ji(Dc, { key: 1 }, [
          rt(g) ? Mp("", !0) : (Xo(), Np(rt(gt), { key: 0 })),
          Qi("article", {
            lang: rt(u),
            dir: rt(H.getDir)(rt(u)),
            class: "px-4",
            innerHTML: rt(g)
          }, null, 8, bT)
        ], 64)) : (Xo(), Ji(Dc, { key: 2 }, [
          Qi("section", {
            class: "pa-4",
            innerHTML: rt(d)
          }, null, 8, kT),
          Ac(ov, {
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
}, LT = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: ET
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, TT = window.Vue.resolveComponent, AT = window.Vue.createVNode, DT = window.Vue.normalizeClass, PT = window.Vue.openBlock, BT = window.Vue.createElementBlock;
function FT(e, t, n, o, s, a) {
  const i = TT("sx-content-comparator");
  return PT(), BT("main", {
    class: DT(["sx-content-comparator-view", a.classes])
  }, [
    AT(i)
  ], 2);
}
const NT = /* @__PURE__ */ we(LT, [["render", FT]]);
const MT = window.Vue.resolveDirective, ea = window.Vue.createElementVNode, Rp = window.Vue.withDirectives, Zi = window.Vue.unref, Pc = window.Vue.createVNode, zp = window.Vue.toDisplayString, Op = window.Vue.createTextVNode, ta = window.Vue.withCtx, UT = window.Vue.openBlock, IT = window.Vue.createBlock, RT = { class: "mw-ui-dialog__header px-4 py-3" }, zT = { class: "mw-ui-dialog__header-title" }, OT = { class: "pa-4" }, jT = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, jp = window.Codex.CdxButton, HT = {
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
    return (i, l) => {
      const c = MT("i18n");
      return UT(), IT(Zi(Vt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: ta(() => [
          ea("div", RT, [
            Rp(ea("span", zT, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: ta(() => [
          ea("div", jT, [
            Pc(Zi(jp), {
              weight: "quiet",
              onClick: s
            }, {
              default: ta(() => [
                Op(zp(i.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Pc(Zi(jp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: ta(() => [
                Op(zp(i.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ta(() => [
          Pc(Zi(Cr)),
          ea("div", OT, [
            Rp(ea("span", null, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, qT = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => $o(a)
  );
  return s && kf(s) ? $t.parseTemplateWikitext(
    xf(s),
    n,
    t
  ) : Promise.resolve(null);
}, sv = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => $o(a)
  );
  return s ? $t.parseTemplateWikitext(
    xf(s),
    n,
    t
  ) : Promise.resolve(null);
}, GT = window.Vuex.useStore, pd = () => {
  const e = GT(), { sourceSection: t } = re(), { getCurrentTitleByLanguage: n } = cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = P(), a = ev(), i = (r, d, g) => {
    if (r === 0) {
      t.value.proposedTitleTranslations[d] = g;
      return;
    }
    const m = t.value.getContentTranslationUnitById(r);
    m instanceof dt ? m.blockTemplateProposedTranslations[d] = g : m instanceof no && m.addProposedTranslation(d, g);
  }, l = (r, d) => x(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, r))
      return "";
    try {
      const m = yield a();
      return yield $t.fetchSegmentTranslation(
        o.value,
        s.value,
        r,
        d,
        m
      );
    } catch (m) {
      return mw.log.error("Error while translating segment", m), "";
    }
  }), c = (r, d) => x(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      r,
      d
    ))
      return;
    let g = t.value.getOriginalContentByTranslationUnitId(r);
    const m = t.value.getContentTranslationUnitById(r);
    let p;
    if (e.commit("application/addMtRequestsPending", r), p = yield l(d, g), !p) {
      e.commit("application/removeMtRequestsPending", r);
      return;
    }
    m instanceof dt && (m.setBlockTemplateAdaptationInfoByHtml(
      d,
      p
    ), p = (yield qT(
      p,
      n(s.value, o.value),
      s.value
    )) || ""), i(
      r,
      d,
      p
    ), e.commit("application/removeMtRequestsPending", r);
  });
  return {
    translateTranslationUnitById: c,
    translateSelectedTranslationUnitForAllProviders: () => {
      const r = e.getters["mediawiki/getSupportedMTProviders"](
        o.value,
        s.value
      ), { selectedTranslationUnitId: d } = t.value;
      r.forEach(
        (g) => c(d, g)
      );
    }
  };
}, WT = window.Vuex.useStore, XT = () => {
  const { sourceSection: e } = re(), t = WT(), { translateTranslationUnitById: n } = pd();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function KT(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const YT = window.Vue.resolveDirective, lt = window.Vue.createElementVNode, er = window.Vue.withDirectives, je = window.Vue.unref, Bc = window.Vue.createVNode, bn = window.Vue.withCtx, QT = window.Vue.renderList, JT = window.Vue.Fragment, tr = window.Vue.openBlock, ZT = window.Vue.createElementBlock, eA = window.Vue.toDisplayString, Fc = window.Vue.createBlock, Hp = window.Vue.createCommentVNode, tA = { class: "mw-ui-dialog__header pa-4" }, nA = { class: "row ma-0 py-2" }, oA = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, sA = { class: "mb-0" }, aA = { class: "col shrink justify-center" }, iA = { class: "pb-2 mb-0" }, rA = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, lA = ["dir", "lang", "innerHTML"], cA = ["textContent"], uA = ["innerHTML"], dA = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, gA = ["innerHTML"], Nc = window.Vue.computed, mA = window.Vuex.useStore, pA = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = de.EMPTY_TEXT_PROVIDER_KEY, s = de.ORIGINAL_TEXT_PROVIDER_KEY, a = mA(), {
      sourceSection: i,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: c
    } = re(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: r
    } = P(), d = Nc(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        u.value,
        r.value
      )
    ), g = Nc(() => {
      const C = [s, o];
      return d.value.filter(
        (_) => !C.includes(_)
      );
    }), m = Nc(
      () => l.value ? i.value.proposedTitleTranslations : c.value.proposedTranslations
    ), p = XT(), f = (C) => {
      p(C), w();
    }, h = de.getMTProviderLabel, w = () => n("update:active", !1), v = _e(), y = KT(
      v.i18n("cx-tools-mt-noservices")
    );
    return (C, _) => {
      const k = YT("i18n");
      return e.active ? (tr(), Fc(je(Vt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: bn(() => [
          lt("div", tA, [
            lt("div", nA, [
              lt("div", oA, [
                er(lt("h4", sA, null, 512), [
                  [k, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              lt("div", aA, [
                Bc(je(Xe), {
                  type: "icon",
                  icon: je(br),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            er(lt("h6", iA, null, 512), [
              [k, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: bn(() => [
          Bc(je(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: _[0] || (_[0] = (T) => f(je(s)))
          }, {
            header: bn(() => [
              er(lt("h5", rA, null, 512), [
                [k, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: bn(() => [
              lt("p", {
                dir: je(H.getDir)(je(u)),
                lang: je(u),
                innerHTML: m.value[je(s)]
              }, null, 8, lA)
            ]),
            _: 1
          }),
          (tr(!0), ZT(JT, null, QT(g.value, (T) => (tr(), Fc(je(Je), {
            key: T,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (N) => f(T)
          }, {
            header: bn(() => [
              lt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: eA(je(h)(T))
              }, null, 8, cA)
            ]),
            default: bn(() => [
              lt("p", {
                innerHTML: m.value[T]
              }, null, 8, uA)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Bc(je(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: _[1] || (_[1] = (T) => f(je(o)))
          }, {
            header: bn(() => [
              er(lt("h5", dA, null, 512), [
                [k, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: bn(() => [
              _[2] || (_[2] = lt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1))
            ]),
            _: 1
          }),
          g.value.length ? Hp("", !0) : (tr(), Fc(je(Je), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: bn(() => [
              lt("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: je(y)
              }, null, 8, gA)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Hp("", !0);
    };
  }
}, hA = window.Vuex.useStore, ws = () => {
  const { sourceSection: e } = re(), t = hA(), { translateTranslationUnitById: n } = pd(), { currentMTProvider: o } = pt(t), s = (l) => x(void 0, null, function* () {
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
      let r = 0;
      return u > -1 && (r = c[u].id), s(r);
    },
    selectTranslationUnitById: s
  };
};
const qp = window.Vue.toDisplayString, Mc = window.Vue.createElementVNode, nr = window.Vue.unref, fA = window.Vue.createVNode, wA = window.Vue.normalizeClass, vA = window.Vue.withCtx, _A = window.Vue.openBlock, SA = window.Vue.createBlock, yA = ["href"], CA = ["textContent"], xA = ["textContent"], _o = window.Vue.computed, Gp = "sx-sentence-selector__section-title", bA = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = re(), { currentSourcePage: o, currentTargetPageTitle: s } = nt(), { sourceLanguageURLParameter: a } = P(), { isPresentLeadSection: i } = ht(), l = _o(() => {
      var h;
      return (h = o.value) == null ? void 0 : h.title;
    }), c = _o(
      () => {
        var h;
        return ((h = t.value) == null ? void 0 : h.title) || l.value;
      }
    ), u = _o(
      () => Z.getPageUrl(a.value, l.value)
    ), r = _o(
      () => {
        var h;
        return !!((h = t.value) != null && h.translatedTitle);
      }
    ), d = _o(
      () => r.value ? "translated" : "selected"
    ), g = _o(() => {
      const h = [Gp];
      return n.value && !i.value && h.push(`${Gp}--${d.value}`), h;
    }), { selectTranslationUnitById: m } = ws(), p = () => m(0), f = _o(
      () => i.value ? s.value : c.value
    );
    return (h, w) => (_A(), SA(nr(b), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: vA(() => [
        Mc("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Mc("strong", {
            textContent: qp(l.value)
          }, null, 8, CA),
          fA(nr(Ze), {
            icon: nr(_f),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, yA),
        Mc("h2", {
          class: wA(["pa-0 ma-0", g.value]),
          onClick: w[0] || (w[0] = (v) => nr(i) ? p : null),
          textContent: qp(f.value)
        }, null, 10, xA)
      ]),
      _: 1
    }));
  }
};
const kn = window.Vue.unref, na = window.Vue.createVNode, or = window.Vue.withCtx, Wp = window.Vue.toDisplayString, Xp = window.Vue.createTextVNode, kA = window.Vue.openBlock, $A = window.Vue.createBlock, Kp = window.Vue.computed, Uc = window.Codex.CdxButton, Yp = window.Codex.CdxIcon, av = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = re(), { isPresentLeadSection: s } = ht(), a = Kp(
      () => {
        var l;
        return (l = t.value) == null ? void 0 : l.isSelectedTranslationUnitLast;
      }
    ), i = Kp(
      () => s.value || n.value
    );
    return (l, c) => (kA(), $A(kn(R), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: or(() => [
        na(kn(Uc), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": l.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: i.value,
          onClick: c[0] || (c[0] = (u) => l.$emit("select-previous-segment"))
        }, {
          default: or(() => [
            na(kn(Yp), {
              class: "me-1",
              icon: kn(ed)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        na(kn(Uc), {
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
        na(kn(Uc), {
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
const So = window.Vue.unref, VA = window.Vue.toDisplayString, oa = window.Vue.createVNode, sr = window.Vue.withCtx, EA = window.Vue.openBlock, LA = window.Vue.createBlock, Ic = window.Vue.computed, TA = window.Vuex.useStore, AA = window.Codex.CdxButton, DA = window.Codex.CdxIcon, PA = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = TA(), n = Ic(() => t.state.application.currentMTProvider), o = _e(), s = Ic(() => ({
      [de.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [de.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Ic(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        de.getMTProviderLabel(n.value)
      )
    );
    return (i, l) => (EA(), LA(So(b), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: sr(() => [
        oa(So(R), { class: "ma-0 ps-5 pb-4" }, {
          default: sr(() => [
            oa(So(b), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: VA(a.value)
            }, null, 8, ["textContent"]),
            oa(So(b), {
              shrink: "",
              class: "pe-5"
            }, {
              default: sr(() => [
                oa(So(AA), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": i.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (c) => i.$emit("configure-options"))
                }, {
                  default: sr(() => [
                    oa(So(DA), {
                      class: "pa-0",
                      icon: So(Zu)
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
const It = window.Vue.unref, Kn = window.Vue.createVNode, BA = window.Vue.resolveDirective, Qp = window.Vue.createElementVNode, FA = window.Vue.withDirectives, Jp = window.Vue.toDisplayString, Zp = window.Vue.createTextVNode, sa = window.Vue.withCtx, NA = window.Vue.openBlock, MA = window.Vue.createElementBlock, UA = { class: "mt-retry-body pb-5" }, IA = { class: "retry-body__message" }, eh = window.Codex.CdxButton, Rc = window.Codex.CdxIcon, RA = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = BA("i18n");
      return NA(), MA("div", UA, [
        Qp("div", IA, [
          Kn(It(Rc), {
            class: "me-2",
            icon: It(pC)
          }, null, 8, ["icon"]),
          FA(Qp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Kn(It(R), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: sa(() => [
            Kn(It(b), { cols: "6" }, {
              default: sa(() => [
                Kn(It(eh), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: sa(() => [
                    Kn(It(Rc), {
                      class: "me-1",
                      icon: It(Zf)
                    }, null, 8, ["icon"]),
                    Zp(" " + Jp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Kn(It(b), { cols: "6" }, {
              default: sa(() => [
                Kn(It(eh), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: sa(() => [
                    Kn(It(Rc), {
                      class: "me-1",
                      icon: It(kC)
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
const Ko = window.Vue.createVNode, ct = window.Vue.unref, aa = window.Vue.openBlock, zA = window.Vue.createElementBlock, OA = window.Vue.createCommentVNode, ar = window.Vue.createBlock, jA = window.Vue.normalizeClass, HA = window.Vue.normalizeStyle, ia = window.Vue.withCtx, qA = window.Vue.toDisplayString, GA = window.Vue.createTextVNode, WA = window.Vue.normalizeProps, XA = window.Vue.guardReactiveProps, KA = ["lang", "dir", "innerHTML"], zc = window.Vue.ref, YA = window.Vue.onMounted, QA = window.Vue.onBeforeUnmount, Oc = window.Vue.computed, JA = window.Vue.nextTick, ZA = window.Vuex.useStore, eD = window.Codex.CdxButton, tD = window.Codex.CdxIcon, nD = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = zc(0), n = zc(null), o = zc(null), s = ZA(), { currentMTProvider: a } = pt(s), { targetLanguageURLParameter: i } = P(), { sourceSection: l, currentProposedTranslation: c } = re(), u = Oc(
      () => {
        var p, f;
        return (f = s.state.application.mtRequestsPending) == null ? void 0 : f.includes(
          (p = l.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), r = Oc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), d = Oc(
      () => !!c.value || a.value === de.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    YA(() => x(this, null, function* () {
      yield JA(), g(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), QA(() => {
      m.unobserve(n.value.$el), m.unobserve(o.value.$el);
    });
    const m = new ResizeObserver(() => g());
    return (p, f) => (aa(), ar(ct(Je), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: ia(() => [
        Ko(ct(R), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: ia(() => [
            Ko(PA, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: f[0] || (f[0] = (h) => p.$emit("configure-options"))
            }, null, 512),
            Ko(ct(b), {
              class: jA(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !d.value && u.value
              }]),
              style: HA(d.value ? r.value : null)
            }, {
              default: ia(() => [
                d.value ? (aa(), zA("section", {
                  key: 0,
                  lang: ct(i),
                  dir: ct(H.getDir)(ct(i)),
                  innerHTML: ct(c)
                }, null, 8, KA)) : u.value ? (aa(), ar(ct(gt), { key: 1 })) : (aa(), ar(RA, {
                  key: 2,
                  onConfigureOptions: f[1] || (f[1] = (h) => p.$emit("configure-options")),
                  onRetryTranslation: f[2] || (f[2] = (h) => p.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Ko(ct(b), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: ia(() => [
                d.value || u.value ? (aa(), ar(ct(eD), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !d.value,
                  onClick: f[3] || (f[3] = (h) => p.$emit("edit-translation", ct(c)))
                }, {
                  default: ia(() => [
                    Ko(ct(tD), {
                      class: "me-1",
                      icon: ct(Ju)
                    }, null, 8, ["icon"]),
                    GA(" " + qA(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : OA("", !0),
                Ko(av, WA(XA(p.$attrs)), null, 16)
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
}, oD = window.Vue.computed, sD = (e) => oD(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((s) => {
    const a = e.getSentenceById(s.dataset.segmentid);
    s.classList.add(t, "py-1", "me-1");
    const i = ["untranslated", "translated", "selected"].map(
      (c) => `${t}--${c}`
    );
    s.classList.remove(...i), a.selected && s.classList.add(`${t}--selected`);
    const l = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${l}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const aD = window.Vue.unref, iD = window.Vue.normalizeClass, rD = window.Vue.openBlock, lD = window.Vue.createElementBlock, cD = ["innerHTML"], uD = window.Vue.onMounted, dD = window.Vue.ref, gD = window.Vue.computed, mD = {
  __name: "SubSection",
  props: {
    subSection: {
      type: dt,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = dD(null), a = sD(n.subSection);
    uD(() => {
      s.value.addEventListener("click", (u) => {
        let r;
        if (n.subSection.isBlockTemplate)
          r = n.subSection;
        else {
          const d = u.composedPath().find(
            (g) => g instanceof Element && g.classList.contains("cx-segment")
          );
          if (!d)
            return;
          r = n.subSection.getSentenceById(
            d.dataset.segmentid
          );
        }
        l(r);
      });
    });
    const { selectTranslationUnitById: i } = ws(), l = (u) => {
      if (u.selected) {
        o("bounce-translation");
        return;
      }
      i(u.id);
    }, c = gD(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (u, r) => (rD(), lD("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: iD(["sx-sentence-selector__subsection", c.value]),
      innerHTML: aD(a)
    }, null, 10, cD));
  }
};
const th = window.Vue.unref, nh = window.Vue.createVNode, oh = window.Vue.normalizeStyle, pD = window.Vue.openBlock, hD = window.Vue.createElementBlock, sh = window.Vue.computed, iv = {
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
      () => !t.isTemplateAdapted || t.percentage === 0 ? t_ : Cu
    );
    return (s, a) => (pD(), hD("div", {
      class: "block-template-status-indicator",
      style: oh(n.value)
    }, [
      nh(th(f1), {
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
const Yn = window.Vue.unref, ir = window.Vue.createVNode, jc = window.Vue.withCtx, fD = window.Vue.openBlock, wD = window.Vue.createBlock, vD = window.Vue.computed, ah = window.Codex.CdxButton, ih = window.Codex.CdxIcon, rv = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = re(), o = vD(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (fD(), wD(Yn(R), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: jc(() => [
        ir(Yn(ah), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Yn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (i) => s.$emit("select-previous-segment"))
        }, {
          default: jc(() => [
            ir(Yn(ih), { icon: Yn(ed) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        ir(Yn(ah), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (i) => s.$emit("select-next-segment"))
        }, {
          default: jc(() => [
            ir(Yn(ih), { icon: Yn(ps) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, ra = window.Vue.openBlock, rr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const $n = window.Vue.unref, Yo = window.Vue.withCtx, la = window.Vue.createVNode, Hc = window.Vue.toDisplayString, qc = window.Vue.createElementVNode, _D = window.Vue.renderList, SD = window.Vue.Fragment, yD = window.Vue.createElementBlock, CD = { class: "pa-4" }, xD = ["textContent"], bD = ["textContent"], ca = window.Vue.computed, kD = {
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
    const t = e, { targetLanguageURLParameter: n } = P(), o = ca(() => H.getAutonym(n.value)), s = ca(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), a = _e(), i = ca(() => {
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
          icon: o_,
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
          icon: Cu,
          color: kt.blue600
        });
      else {
        let r;
        t.sourceParamsCount ? r = a.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : r = a.i18n("cx-sx-block-template-no-source-params-text"), u.push({
          text: r,
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
        icon: xr,
        color: kt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: a.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          o.value
        ),
        icon: R0,
        color: kt.gray500
      }), u;
    });
    return (u, r) => (ra(), rr($n(Vt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: r[0] || (r[0] = (d) => u.$emit("update:active", d))
    }, {
      header: Yo(() => [
        la($n(R), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Yo(() => [
            la($n(b), { shrink: "" }, {
              default: Yo(() => [
                e.targetTemplateExists ? (ra(), rr(iv, {
                  key: 0,
                  percentage: s.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (ra(), rr($n(Ze), {
                  key: 1,
                  icon: $n(z0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Yo(() => [
        qc("div", CD, [
          qc("h3", {
            textContent: Hc(i.value)
          }, null, 8, xD),
          qc("p", {
            class: "mt-6 text-small",
            textContent: Hc(l.value)
          }, null, 8, bD),
          (ra(!0), yD(SD, null, _D(c.value, (d, g) => (ra(), rr($n(R), {
            key: g,
            align: "start",
            class: "mt-4"
          }, {
            default: Yo(() => [
              la($n(b), { shrink: "" }, {
                default: Yo(() => [
                  la($n(Ze), {
                    class: "me-2",
                    icon: d.icon,
                    "icon-color": d.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              la($n(b), {
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
const Fe = window.Vue.unref, He = window.Vue.createVNode, Jt = window.Vue.withCtx, Gc = window.Vue.toDisplayString, rh = window.Vue.createTextVNode, $D = window.Vue.resolveDirective, lh = window.Vue.withDirectives, ch = window.Vue.createElementVNode, VD = window.Vue.normalizeClass, Qo = window.Vue.openBlock, uh = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const lr = window.Vue.createBlock, dh = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const gh = window.Vue.mergeProps, ED = { class: "block-template-adaptation-card__container pa-4" }, LD = ["textContent"], TD = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Re = window.Vue.computed, AD = window.Vue.ref, DD = window.Vuex.useStore, mh = window.Codex.CdxButton, ph = window.Codex.CdxIcon, PD = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = DD(), { currentMTProvider: n } = pt(t), { targetLanguageURLParameter: o } = P(), s = Re(() => H.getAutonym(o.value)), {
      selectedContentTranslationUnit: a,
      currentProposedTranslation: i
    } = re(), l = Re(() => {
      var L;
      return (L = a.value) == null ? void 0 : L.isTranslated;
    }), c = Re(() => {
      var A;
      return ((A = a.value) == null ? void 0 : A.blockTemplateTranslatedContent) || i.value;
    }), u = Re(
      () => {
        var L;
        return (L = a.value) == null ? void 0 : L.getTargetBlockTemplateNameByProvider(
          n.value
        );
      }
    ), r = Re(
      () => {
        var L;
        return !((L = t.state.application.mtRequestsPending) != null && L.includes(
          a.value.id
        ));
      }
    ), d = _e(), g = Re(
      // Strip HTML comments and return
      () => {
        var L, A;
        return ((A = (L = a.value) == null ? void 0 : L.sourceBlockTemplateName) == null ? void 0 : A.replace(
          /<\!--.*?-->/g,
          ""
        )) || d.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), m = Re(
      () => {
        var L, A;
        return (A = (L = a.value) == null ? void 0 : L.blockTemplateAdaptationInfo) == null ? void 0 : A[n.value];
      }
    ), p = Re(
      () => {
        var L, A;
        return ((L = m.value) == null ? void 0 : L.adapted) || !!((A = m.value) != null && A.partial);
      }
    ), f = Re(() => m.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), h = Re(() => m.value ? p.value ? d.i18n("sx-block-template-adaptation-card-edit-button-label") : d.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), w = Re(
      () => {
        var L;
        return Object.keys(((L = a.value) == null ? void 0 : L.sourceTemplateParams) || {}).length;
      }
    ), v = Re(() => {
      var A;
      const L = (A = a.value) == null ? void 0 : A.getTargetTemplateParamsByProvider(
        n.value
      );
      return Object.keys(L || {});
    }), y = Re(() => v.value.length), C = Re(() => {
      const L = N.value;
      return w.value + L === 0 ? 100 : y.value / (w.value + L) * 100 || 0;
    }), _ = AD(!1), k = () => {
      _.value = !0;
    }, T = (L) => L.filter((A) => !v.value.includes(A)), N = Re(() => {
      var A;
      const L = ((A = m.value) == null ? void 0 : A.mandatoryTargetParams) || [];
      return T(L).length;
    }), V = Re(() => {
      var A;
      const L = ((A = m.value) == null ? void 0 : A.optionalTargetParams) || [];
      return T(L).length;
    });
    return (L, A) => {
      const G = $D("i18n");
      return Qo(), lr(Fe(Je), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Jt(() => [
          ch("div", ED, [
            He(Fe(R), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Jt(() => [
                He(Fe(b), { shrink: "" }, {
                  default: Jt(() => [
                    He(Fe(ph), {
                      icon: Fe($C),
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
                    rh(Gc(g.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u.value ? (Qo(), uh("div", {
              key: 0,
              class: VD(["pa-4 mb-4", f.value])
            }, [
              He(Fe(R), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Jt(() => [
                  lh(He(Fe(b), { tag: "h5" }, null, 512), [
                    [G, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  He(Fe(b), { shrink: "" }, {
                    default: Jt(() => [
                      He(iv, {
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
                textContent: Gc(u.value)
              }, null, 8, LD),
              He(Fe(mh), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: A[0] || (A[0] = (ae) => L.$emit("edit-translation", c.value))
              }, {
                default: Jt(() => [
                  rh(Gc(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : r.value ? (Qo(), uh("div", TD, [
              He(Fe(R), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Jt(() => [
                  lh(He(Fe(b), { tag: "h5" }, null, 512), [
                    [G, [
                      s.value
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  He(Fe(b), { shrink: "" }, {
                    default: Jt(() => [
                      He(Fe(mh), {
                        weight: "quiet",
                        "aria-label": L.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Jt(() => [
                          He(Fe(ph), {
                            icon: Fe(CC),
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
            ])) : (Qo(), lr(Fe(gt), { key: 2 }))
          ]),
          l.value ? (Qo(), lr(rv, dh(gh({ key: 1 }, L.$attrs)), null, 16)) : (Qo(), lr(av, dh(gh({ key: 0 }, L.$attrs)), null, 16)),
          He(kD, {
            active: _.value,
            "onUpdate:active": A[1] || (A[1] = (ae) => _.value = ae),
            "source-params-count": w.value,
            "target-params-count": y.value,
            "mandatory-missing-params-count": N.value,
            "optional-missing-params-count": V.value,
            "is-template-adapted": p.value,
            "target-template-exists": !!u.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const BD = window.Vue.unref, FD = window.Vue.createVNode, ND = window.Vue.openBlock, MD = window.Vue.createElementBlock, UD = { class: "translated-segment-card-header" }, ID = window.Vue.computed, RD = {
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
    const n = t, { isSectionTitleSelected: o } = re(), s = _e(), a = ID(() => [
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
    ]), i = (l) => n("update:selection", l);
    return (l, c) => (ND(), MD("div", UD, [
      FD(BD(La), {
        items: a.value,
        active: e.selection,
        onSelect: i
      }, null, 8, ["items", "active"])
    ]));
  }
};
const zD = window.Vue.useCssVars, ze = window.Vue.createVNode, hh = window.Vue.resolveDirective, OD = window.Vue.createElementVNode, Wc = window.Vue.withDirectives, ke = window.Vue.unref, jD = window.Vue.normalizeStyle, cr = window.Vue.openBlock, fh = window.Vue.createElementBlock, HD = window.Vue.createCommentVNode, qD = window.Vue.normalizeClass, Ct = window.Vue.withCtx, GD = window.Vue.toDisplayString, WD = window.Vue.createTextVNode, wh = window.Vue.createBlock, XD = window.Vue.normalizeProps, KD = window.Vue.guardReactiveProps, Vn = window.Vue.computed, YD = window.Vue.ref, QD = window.Vue.inject, JD = window.Codex.CdxButton, Xc = window.Codex.CdxIcon, ZD = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    zD((v) => ({
      "3a549064": w.value
    }));
    const t = YD("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = re(), a = P(), i = Vn(() => t.value === "sentence"), l = Vn(
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
      return s.value ? n.value.mtProposedTranslationUsedForTitle : i.value ? (v = o.value) == null ? void 0 : v.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), u = QD("colors"), r = u.gray200, d = u.red600, g = Vn(() => s.value ? n.value.translatedTitle : i.value ? o.value.translatedContent : l.value.translatedContent), m = Vn(
      () => sn.calculateScore(
        g.value,
        c.value,
        a.value
      )
    ), p = Vn(
      () => sn.getScoreStatus(m.value)
    ), f = Vn(
      () => `translated-segment-card__modification-stats__percentage--${p.value}`
    ), h = Vn(() => ({
      failure: m.value === 0 ? null : u.yellow700,
      warning: u.yellow700,
      success: u.green600
    })), w = Vn(
      () => h.value[p.value]
    );
    return (v, y) => {
      const C = hh("i18n"), _ = hh("i18n-html");
      return cr(), wh(ke(Je), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ct(() => [
          ze(ke(R), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ct(() => [
              ze(RD, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (k) => t.value = k)
              }, null, 8, ["selection"]),
              ze(ke(b), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: Ct(() => [
                  ze(ke(R), { class: "ma-0" }, {
                    default: Ct(() => [
                      ze(ke(b), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: Ct(() => [
                          Wc(OD("h5", null, null, 512), [
                            [C, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? Wc((cr(), fh("p", {
                            key: 0,
                            style: jD({ color: ke(d) })
                          }, null, 4)), [
                            [C, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Wc((cr(), fh("p", {
                            key: 1,
                            class: qD(f.value)
                          }, null, 2)), [
                            [_, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      ze(ke(b), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: Ct(() => [
                          ze(ke(R), { class: "ma-0 ms-2" }, {
                            default: Ct(() => [
                              ze(ke(b), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: Ct(() => [
                                  ze(ke(Xc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ke(LC)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              ze(ke(b), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Ct(() => [
                                  ze(ke(yf), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: w.value,
                                    background: ke(r)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              ze(ke(b), { shrink: "" }, {
                                default: Ct(() => [
                                  ze(ke(Xc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ke(VC)
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
                  i.value ? (cr(), wh(ke(JD), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (k) => v.$emit("edit-translation", g.value))
                  }, {
                    default: Ct(() => [
                      ze(ke(Xc), {
                        class: "me-1",
                        icon: ke(Ju)
                      }, null, 8, ["icon"]),
                      WD(" " + GD(v.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : HD("", !0)
                ]),
                _: 1
              }),
              ze(ke(b), { class: "translated-segment-card__actions" }, {
                default: Ct(() => [
                  ze(rv, XD(KD(v.$attrs)), null, 16)
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
}, e6 = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = re(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = ws(), { isPresentLeadSection: s } = ht(), { currentTranslation: a } = Xt();
  return () => {
    if (e.value)
      if (a.value && !t.value) {
        const { lastTranslatedContentTranslationUnit: i } = e.value;
        e.value.selectTranslationUnitById(
          (i == null ? void 0 : i.id) || 0
        ), n();
      } else
        t.value || (o(0), s.value && n());
  };
}, lv = window.Vuex.useStore, t6 = () => {
  const e = lv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P();
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
    ) : s = new de(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, n6 = () => {
  const e = lv(), { currentMTProvider: t } = pt(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = P(), s = t6();
  return () => x(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const i = de.getStorageKey(
        n.value,
        o.value
      );
      let l = mw.storage.get(i);
      (!l || !a.includes(l)) && (l = a[0]), e.commit("application/setCurrentMTProvider", l);
    }
  });
}, o6 = window.Vue.computed, s6 = (e) => {
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
}, a6 = () => {
  const { selectedContentTranslationUnit: e } = re(), t = o6(
    () => e.value instanceof dt
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && s6(o);
  };
}, i6 = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const i = t.filter(
    (l) => !de.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !i.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, r6 = window.Vue.computed, cv = () => {
  const { currentTranslation: e } = Xt(), { currentSourcePage: t } = nt();
  return r6(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, l6 = window.Vue.computed, Ua = () => {
  const { sourceSection: e } = re(), { currentTargetPageTitle: t } = nt(), { isMissingLeadSection: n } = ht();
  return { targetPageTitleForPublishing: l6(
    () => n.value ? e.value.title : t.value
  ) };
}, c6 = window.Vuex.useStore, hd = () => {
  const e = c6(), { sourceSection: t } = re(), { targetPageTitleForPublishing: n } = Ua(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), i = cv(), { target: l, PUBLISHING_TARGETS: c } = Tt();
  return () => {
    const u = n.value, r = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${i.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(d);
    g.forEach(
      (p) => i6(p, r)
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
      revision: i.value,
      units: g.map((p) => p.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: d,
      isSandbox: l === c.SANDBOX,
      progress: m
    });
  };
}, u6 = window.Vue.effectScope, d6 = window.Vue.onScopeDispose, g6 = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = u6(!0), n = o.run(() => e(...a))), d6(s), n);
}, m6 = window.Vuex.useStore;
let Kc;
const p6 = () => {
  const e = m6(), t = hd();
  let n = 1e3, o = 0;
  return Kc = cd(() => t().then((a) => {
    a instanceof Pn ? (n *= o + 1, o++, setTimeout(Kc, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof cs)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Kc;
}, uv = g6(p6), h6 = window.Vuex.useStore, f6 = () => {
  const e = h6(), t = uv(), { currentMTProvider: n } = pt(e), { sourceSection: o, currentProposedTranslation: s } = re(), { selectNextTranslationUnit: a } = ws();
  return () => x(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, w6 = window.Vuex.useStore, v6 = () => {
  const e = w6(), t = uv();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, _6 = window.Vuex.useStore, S6 = window.Vue.computed, dv = () => {
  const e = _6(), { currentTranslation: t } = Xt(), { currentMTProvider: n } = pt(e), { currentTargetPageTitle: o } = nt(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: i,
    sectionURLParameter: l
  } = P(), c = Lt(), u = S6(() => {
    const h = {
      translation_source_language: s.value,
      translation_target_language: a.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L294)
      // translation_source_title:
      //   The title of the source article of the current translation. Applies only
      //   to events which relate to a specific translation or suggestion: all
      //   `editor_` and `publish_` events and some `dashboard_` events (e.g.
      //   `dashboard_start_translation`, `dashboard_delete_translation`)
      translation_source_title: i.value
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L301)
      // translation_target_exists:
      //   Whether the target article or section already exists. Applies only to
      //   events which relate to a specific translation or suggestion: all `editor_`
      //   and `publish_` events and some `dashboard_` events (e.g. `dashboard_start_translation`,
      //   `dashboard_delete_translation`). In section translation, if the user discards the mapping
      //   to an existing target section, the value should change to false in future events.
      // translation_target_exists: !!currentTargetPageTitle.value,
    };
    if (l.value ? (h.translation_source_section = l.value, h.translation_type = "section") : h.translation_type = "article", t.value) {
      h.translation_id = t.value.translationId, h.translation_target_title = t.value.targetTitle;
      const w = t.value.targetSectionTitle;
      w && (h.translation_target_section = w);
    } else
      o.value && (h.translation_target_title = o.value);
    return n.value && (h.translation_provider = de.getProviderForInstrumentation(n.value)), h;
  });
  return {
    logEditorOpenEvent: () => {
      const h = he({
        event_type: "editor_open"
      }, u.value);
      return c(h);
    },
    logEditorCloseEvent: () => {
      const h = he({
        event_type: "editor_close"
      }, u.value);
      return c(h);
    },
    logEditorCloseWarnEvent: () => c(he({
      event_type: "editor_close_warn"
    }, u.value)),
    logEditorSegmentAddEvent: () => c(he({
      event_type: "editor_segment_add"
    }, u.value)),
    logEditorSegmentSkipEvent: () => c(he({
      event_type: "editor_segment_skip"
    }, u.value)),
    logEditorSegmentEditEvent: () => c(he({
      event_type: "editor_segment_edit"
    }, u.value))
  };
}, y6 = (e, t, n, o) => x(void 0, null, function* () {
  var l, c, u;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((c = t.mt) == null ? void 0 : c.content), a = (u = t == null ? void 0 : t.mt) == null ? void 0 : u.engine, i = yield sv(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = i, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = i;
}), C6 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, i;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (i = t.mt) == null ? void 0 : i.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, x6 = (e, t, n, o) => x(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return y6(e, t, n, o);
  C6(e, t);
}), b6 = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (l) => l.pageSectionId === parseInt(a.id)
    ).length)
      for (const l of a.subSections) {
        const c = o.find(
          (r) => r.subSectionId === l.id
        );
        if (!c)
          continue;
        const u = x6(
          l,
          c,
          t || e.title,
          n
        );
        s.push(u);
      }
  return Promise.all(s);
}, k6 = { restoreCorporaDraft: b6 }, $6 = () => {
  const { currentSourcePage: e } = nt(), { sourceSection: t } = re();
  return (n) => x(void 0, null, function* () {
    if (n.restored)
      return;
    try {
      const s = yield $t.fetchTranslationUnits(
        n.translationId
      );
      yield k6.restoreCorporaDraft(
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
function V6() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((o) => t.includes(o));
}
function gv() {
  return Yc === null && (Yc = V6()), Yc;
}
const mv = window.Vue.ref, Qc = mv(!1), Jc = mv(!1);
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
const ge = window.Vue.unref, xt = window.Vue.createVNode, Rt = window.Vue.withCtx, E6 = window.Vue.resolveDirective, En = window.Vue.createElementVNode, L6 = window.Vue.withDirectives, ua = window.Vue.toDisplayString, T6 = window.Vue.createTextVNode, Zt = window.Vue.openBlock, Qn = window.Vue.createBlock, _h = window.Vue.createCommentVNode, A6 = window.Vue.renderList, D6 = window.Vue.Fragment, Sh = window.Vue.createElementBlock, P6 = window.Vue.normalizeClass, B6 = window.Vue.normalizeStyle, F6 = { class: "sx-sentence-selector__header-title mb-0" }, N6 = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, M6 = { class: "sx-sentence-selector__section-contents px-4" }, Jn = window.Vue.computed, U6 = window.Vue.nextTick, I6 = window.Vue.onMounted, da = window.Vue.ref, yh = window.Vue.watch, R6 = window.Vuex.useStore, Ch = window.Codex.CdxButton, z6 = window.Codex.CdxIcon, xh = window.Codex.CdxMessage, O6 = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = da(!1), n = da(!1), o = da("100%"), s = R6(), { currentMTProvider: a, previousRoute: i } = pt(s), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      pageURLParameter: u,
      sectionURLParameter: r
    } = P(), { resetPublishTarget: d, target: g } = Tt(), { loadSuggestion: m } = Ba(), { sourceSection: p, selectedContentTranslationUnit: f } = re(), { targetPageTitleForPublishing: h } = Ua(), w = da({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), v = Jn(
      () => Object.values(w.value).every(Boolean)
    ), y = Jn(
      () => {
        var ee;
        return (ee = p.value) == null ? void 0 : ee.isSelectedTranslationUnitTranslated;
      }
    ), C = Jn(() => {
      var ee;
      return (ee = p.value) == null ? void 0 : ee.subSections;
    }), _ = Jn(
      () => {
        var ee;
        return (ee = p.value) == null ? void 0 : ee.selectedTranslationUnitOriginalContent;
      }
    ), k = Jn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: T,
      logEditorCloseEvent: N,
      logEditorCloseWarnEvent: V,
      logEditorSegmentAddEvent: L,
      logEditorSegmentSkipEvent: A
    } = dv(), G = () => {
      var Do;
      const ee = F.currentRoute.value.meta.workflowStep, Fn = F.getRoutes().find(
        (Hr) => Hr.name === i.value
      ), ft = ((Do = Fn == null ? void 0 : Fn.meta) == null ? void 0 : Do.workflowStep) || 0;
      return ee > ft;
    }, ae = e6();
    n6()().then(() => {
      G() && T(), w.value.mtProviders = !0;
    });
    const oe = a6(), { fetchTranslationsByStatus: M, translationsFetched: W } = hs(), Y = $6(), { currentTranslation: X } = Xt(), { selectPageSectionByTitle: le, selectPageSectionByIndex: te } = Rr(), Se = Zw(), Ne = ro();
    I6(() => x(this, null, function* () {
      if (!W.value.draft) {
        const ee = [
          // required to get current draft translation (if exists)
          M("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          Se(l.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          Ne(l.value, [u.value])
        ];
        yield Promise.all(ee);
      }
      w.value.pageMetadata = !0, r.value ? yield le(r.value) : yield te(0), w.value.pageContent = !0, X.value && (yield Y(X.value)), w.value.draftRestored = !0, g.value || m(
        l.value,
        c.value,
        u.value
      ).then(() => d()), yh(
        v,
        () => x(this, null, function* () {
          v.value && (yield U6(), ae(), oe());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), yh(f, oe);
    const { selectNextTranslationUnit: z, selectPreviousTranslationUnit: O } = ws(), ie = () => (A(), z()), S = f6(), D = () => {
      L(), S();
    }, E = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, F = tt(), U = () => {
      const { autoSavePending: ee } = s.state.application;
      if (ee) {
        _s.value = !0, V();
        return;
      }
      I();
    }, j = v6(), { clearTranslationURLParameters: q } = P(), I = () => x(this, null, function* () {
      M("draft"), X.value && (p.value.reset(), X.value.restored = !1), N(), q(), j(), yield F.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: ce,
      translateSelectedTranslationUnitForAllProviders: ot
    } = pd(), Ve = () => {
      vs.value || (t.value = !0, ot());
    }, { getCurrentTitleByLanguage: Ia } = cn(), { isMissingLeadSection: Ra } = ht(), uo = (ee) => {
      F.push({
        name: "sx-editor",
        state: {
          content: ee,
          originalContent: _.value,
          title: Ia(
            c.value,
            l.value
          ),
          isInitialEdit: !y.value || null
        }
      });
    }, zr = () => F.push({ name: "sx-publisher" }), Or = () => x(this, null, function* () {
      f.value ? yield ce(
        f.value.id,
        a.value
      ) : yield ce(0, a.value);
    }), vs = Jn(
      () => f.value instanceof dt
    ), _s = da(!1), {
      isPermissionWarningDismissed: jr,
      dismissPermissionWarning: To,
      resetPermissionWarning: Ao
    } = vh(), { isTitleErrorDismissed: za, dismissTitleError: B, resetTitleError: K } = vh();
    G() && (Ao(), K());
    const Me = Jn(
      () => !gv() && !jr.value
    ), At = Jn(
      () => !za.value && Ra.value && !mw.Title.newFromText(h.value)
    );
    return (ee, un) => {
      const Fn = E6("i18n");
      return Zt(), Sh("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: B6(k.value)
      }, [
        xt(ge(R), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Rt(() => [
            xt(ge(b), { shrink: "" }, {
              default: Rt(() => [
                xt(ge(Ch), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": ee.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: U
                }, {
                  default: Rt(() => [
                    xt(ge(z6), { icon: ge(Xf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            xt(ge(b), {
              grow: "",
              class: "px-1"
            }, {
              default: Rt(() => [
                L6(En("h4", F6, null, 512), [
                  [Fn, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            xt(ge(b), {
              shrink: "",
              class: "px-3"
            }, {
              default: Rt(() => [
                xt(ge(Ch), {
                  disabled: !(ge(p) && ge(p).isTranslated),
                  onClick: zr
                }, {
                  default: Rt(() => [
                    T6(ua(ee.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        v.value ? (Zt(), Qn(ge(R), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Rt(() => [
            xt(ge(b), {
              dir: ge(H.getDir)(ge(l)),
              lang: ge(l),
              class: "sx-sentence-selector__section"
            }, {
              default: Rt(() => [
                Me.value ? (Zt(), Qn(ge(xh), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ge(To)
                }, {
                  default: Rt(() => [
                    En("p", null, ua(ee.$i18n("cx-publish-permission-warning")), 1),
                    En("p", null, [
                      En("strong", null, [
                        En("a", N6, ua(ee.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : _h("", !0),
                At.value ? (Zt(), Qn(ge(xh), {
                  key: 1,
                  type: "error",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ge(B)
                }, {
                  default: Rt(() => [
                    En("p", null, [
                      En("strong", null, ua(ee.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    En("p", null, ua(ee.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : _h("", !0),
                xt(bA),
                En("div", M6, [
                  (Zt(!0), Sh(D6, null, A6(C.value, (ft) => (Zt(), Qn(mD, {
                    id: ft.id,
                    key: `sub-section-${ft.id}`,
                    "sub-section": ft,
                    onBounceTranslation: E
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !vs.value && y.value ? (Zt(), Qn(ZD, {
              key: 0,
              onEditTranslation: uo,
              onSelectNextSegment: ge(z),
              onSelectPreviousSegment: ge(O)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : vs.value ? (Zt(), Qn(PD, {
              key: 2,
              onEditTranslation: uo,
              onApplyTranslation: D,
              onSkipTranslation: ie,
              onSelectPreviousSegment: ge(O),
              onSelectNextSegment: ge(z)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Zt(), Qn(nD, {
              key: 1,
              class: P6({ "mb-0": !n.value }),
              onConfigureOptions: Ve,
              onEditTranslation: uo,
              onApplyTranslation: D,
              onSkipTranslation: ie,
              onSelectPreviousSegment: ge(O),
              onRetryTranslation: Or
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Zt(), Qn(ge(R), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Rt(() => [
            xt(ge(gt), { class: "mt-0" })
          ]),
          _: 1
        })),
        xt(pA, {
          active: t.value,
          "onUpdate:active": un[0] || (un[0] = (ft) => t.value = ft)
        }, null, 8, ["active"]),
        xt(HT, {
          modelValue: _s.value,
          "onUpdate:modelValue": un[1] || (un[1] = (ft) => _s.value = ft),
          onDiscardTranslation: I
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const j6 = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: O6
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, H6 = window.Vue.resolveComponent, q6 = window.Vue.createVNode, G6 = window.Vue.normalizeClass, W6 = window.Vue.openBlock, X6 = window.Vue.createElementBlock;
function K6(e, t, n, o, s, a) {
  const i = H6("sx-sentence-selector");
  return W6(), X6("main", {
    class: G6(["sx-sentence-selector-view", a.classes])
  }, [
    q6(i)
  ], 2);
}
const Y6 = /* @__PURE__ */ we(j6, [["render", K6]]), Q6 = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, J6 = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const Z6 = window.Vue.resolveDirective, ur = window.Vue.withDirectives, zt = window.Vue.openBlock, Ln = window.Vue.createElementBlock, dr = window.Vue.createCommentVNode, gr = window.Vue.Transition, yo = window.Vue.withCtx, Jo = window.Vue.createVNode, ga = window.Vue.createElementVNode, Zn = window.Vue.unref, eP = window.Vue.renderList, tP = window.Vue.Fragment, nP = window.Vue.normalizeClass, bh = window.Vue.createBlock, oP = window.Vue.toDisplayString, sP = window.Vue.createTextVNode, aP = { class: "sx-quick-tutorial" }, iP = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, rP = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, lP = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, cP = { class: "sx-quick-tutorial__illustration" }, uP = ["innerHTML"], dP = ["innerHTML"], gP = { class: "sx-quick-tutorial__step-indicator py-3" }, mP = ["onClick"], pP = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, hP = {
  key: "secondary-point-1",
  class: "ma-0"
}, fP = {
  key: "secondary-point-2",
  class: "ma-0"
}, wP = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, kh = window.Vue.ref, $h = window.Codex.CdxButton, vP = window.Codex.CdxIcon, _P = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = kh(2), n = kh(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (i) => i === n.value, a = fs();
    return (i, l) => {
      const c = Z6("i18n");
      return zt(), Ln("section", aP, [
        Jo(Zn(R), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: yo(() => [
            ga("section", iP, [
              Jo(gr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: yo(() => [
                  s(1) ? ur((zt(), Ln("h2", rP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? ur((zt(), Ln("h2", lP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : dr("", !0)
                ]),
                _: 1
              })
            ]),
            ga("section", cP, [
              Jo(gr, { name: "mw-ui-animation-slide-start" }, {
                default: yo(() => [
                  s(1) ? (zt(), Ln("div", {
                    key: "illustration-1",
                    innerHTML: Zn(J6)
                  }, null, 8, uP)) : s(2) ? (zt(), Ln("div", {
                    key: "illustration-2",
                    innerHTML: Zn(Q6)
                  }, null, 8, dP)) : dr("", !0)
                ]),
                _: 1
              })
            ]),
            ga("div", gP, [
              (zt(!0), Ln(tP, null, eP(t.value, (u) => (zt(), Ln("span", {
                key: `dot-${u}`,
                class: nP(["dot mx-1", { "dot-active": s(u) }]),
                role: "button",
                onClick: (r) => n.value = u
              }, null, 10, mP))), 128))
            ]),
            ga("section", pP, [
              Jo(gr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: yo(() => [
                  s(1) ? ur((zt(), Ln("h3", hP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? ur((zt(), Ln("h3", fP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : dr("", !0)
                ]),
                _: 1
              })
            ]),
            ga("div", wP, [
              Jo(gr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: yo(() => [
                  s(1) ? (zt(), bh(Zn($h), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": i.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: yo(() => [
                      Jo(Zn(vP), { icon: Zn(ps) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (zt(), bh(Zn($h), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Zn(a)
                  }, {
                    default: yo(() => [
                      sP(oP(i.$i18n("sx-quick-tutorial-translate-button-label")), 1)
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
const SP = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: _P
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, yP = window.Vue.resolveComponent, CP = window.Vue.createVNode, xP = window.Vue.normalizeClass, bP = window.Vue.openBlock, kP = window.Vue.createElementBlock;
function $P(e, t, n, o, s, a) {
  const i = yP("sx-quick-tutorial");
  return bP(), kP("main", {
    class: xP(["sx-quick-tutorial-view", a.classes])
  }, [
    CP(i)
  ], 2);
}
const VP = /* @__PURE__ */ we(SP, [["render", $P]]);
const EP = window.Vue.resolveDirective, Vh = window.Vue.createElementVNode, LP = window.Vue.withDirectives, TP = window.Vue.unref, AP = window.Vue.withCtx, DP = window.Vue.createVNode, PP = window.Vue.openBlock, BP = window.Vue.createElementBlock, FP = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, NP = { class: "sx-editor__original-content-panel__header mb-2" }, MP = ["lang", "dir", "innerHTML"], Eh = window.Vue.ref, UP = window.Vue.onMounted, IP = {
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
    const t = e, n = (i, l) => {
      const c = i.getElementsByTagName("a");
      for (const u of c)
        u.href = Z.getPageUrl(l, u.title), u.target = "_blank";
    }, o = Eh(null), s = Eh(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return UP(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (i, l) => {
      const c = EP("i18n");
      return PP(), BP("section", FP, [
        LP(Vh("h5", NP, null, 512), [
          [c, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        DP(TP(l1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: AP(() => [
            Vh("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, MP)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, RP = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const zP = window.Vue.unref, ma = window.Vue.createElementVNode, Lh = window.Vue.resolveDirective, Zc = window.Vue.withDirectives, OP = window.Vue.normalizeClass, jP = window.Vue.openBlock, HP = window.Vue.createElementBlock, qP = window.Vue.createCommentVNode, GP = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, WP = { class: "sx-editor__feedback-overlay-content px-4" }, XP = ["innerHTML"], KP = { class: "sx-editor__feedback-overlay-content__title" }, YP = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, eu = window.Vue.computed, QP = {
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
      const i = sn.getScoreStatus(o.value);
      return i === "failure" ? o.value === 0 ? "failure" : "warning" : i;
    }), a = eu(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (i, l) => {
      const c = Lh("i18n"), u = Lh("i18n-html");
      return e.showFeedback ? (jP(), HP("div", GP, [
        ma("div", WP, [
          ma("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: zP(RP)
          }, null, 8, XP),
          Zc(ma("h2", KP, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Zc(ma("p", YP, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Zc(ma("p", {
            class: OP(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [u, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : qP("", !0);
    };
  }
}, JP = window.Vuex.useStore, ZP = () => {
  const e = JP(), t = hd(), { selectNextTranslationUnit: n } = ws(), {
    isSectionTitleSelected: o,
    sourceSection: s,
    selectedContentTranslationUnit: a
  } = re(), { getCurrentTitleByLanguage: i } = cn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: c
  } = P(), { currentMTProvider: u } = pt(e);
  return (r) => x(void 0, null, function* () {
    if (!o.value) {
      const d = document.createElement("div");
      d.innerHTML = r, d.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), r = d.innerHTML;
    }
    a.value instanceof dt && (r = (yield sv(
      r,
      i(c.value, l.value),
      c.value
    )) || r), s.value.setTranslationForSelectedTranslationUnit(
      r,
      u.value
    ), t(), n();
  });
};
const Qe = window.Vue.unref, tu = window.Vue.openBlock, nu = window.Vue.createBlock, Th = window.Vue.createCommentVNode, Ah = window.Vue.createVNode, eB = window.Vue.createElementVNode, tB = window.Vue.withCtx, nB = { class: "sx-editor__editing-surface-container grow" }, ou = window.Vue.ref, oB = window.Vue.computed;
window.Vue.inject;
const sB = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ou(!1), o = tt(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: i, isInitialEdit: l, content: c, originalContent: u, title: r } = history.state, d = ou(null), g = ou(!1), { logEditorSegmentAddEvent: m, logEditorSegmentEditEvent: p } = dv(), {
      sourceLanguageURLParameter: f,
      targetLanguageURLParameter: h
    } = P(), { isSectionTitleSelected: w, sourceSection: v } = re(), y = oB(
      () => sn.calculateScore(
        d.value,
        c,
        h.value
      )
    ), C = ZP(), _ = (k) => x(this, null, function* () {
      d.value = k, g.value = !0;
      const T = new Promise((V) => setTimeout(V, 2e3));
      let N = Promise.resolve();
      i ? v.value.editedTranslation = k : N = C(k), y.value === 0 && l ? m() : y.value > 0 && p(), yield Promise.all([T, N]), g.value = !1, a();
    });
    return i ? mw.cx.eventlogging.stats.publishEditorStepAccess() : mw.cx.eventlogging.stats.editingStepAccess(!0), (k, T) => (tu(), nu(Qe(R), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: tB(() => [
        Qe(u) ? (tu(), nu(IP, {
          key: 0,
          language: Qe(f),
          dir: Qe(H.getDir)(Qe(f)),
          "original-content": Qe(u)
        }, null, 8, ["language", "dir", "original-content"])) : Th("", !0),
        n.value ? Th("", !0) : (tu(), nu(Qe(gt), { key: 1 })),
        eB("div", nB, [
          Ah(QP, {
            "edited-translation": d.value,
            "show-feedback": g.value,
            "proposed-translation": Qe(c)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Ah(C4, {
            content: Qe(c),
            language: Qe(h),
            dir: Qe(H.getDir)(Qe(h)),
            title: Qe(r),
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
const aB = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: sB
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
}, iB = window.Vue.resolveComponent, rB = window.Vue.createVNode, lB = window.Vue.normalizeClass, cB = window.Vue.openBlock, uB = window.Vue.createElementBlock;
function dB(e, t, n, o, s, a) {
  const i = iB("sx-editor");
  return cB(), uB("main", {
    class: lB(["sx-editor-view", a.classes])
  }, [
    rB(i, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const gB = /* @__PURE__ */ we(aB, [["render", dB]]);
const en = window.Vue.unref, Co = window.Vue.createVNode, pa = window.Vue.withCtx, mB = window.Vue.resolveDirective, pB = window.Vue.withDirectives, hB = window.Vue.openBlock, fB = window.Vue.createBlock, Dh = window.Codex.CdxButton, Ph = window.Codex.CdxIcon, wB = {
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
      const a = mB("i18n");
      return hB(), fB(en(R), { class: "ma-0 sx-publisher__header" }, {
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
          pB(Co(en(b), {
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
                onClick: s[0] || (s[0] = (i) => o.$emit("publish-translation"))
              }, {
                default: pa(() => [
                  Co(en(Ph), { icon: en(hC) }, null, 8, ["icon"])
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
}, vB = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, _B = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
const su = window.Vue.createElementVNode, Fh = window.Vue.toDisplayString, au = window.Vue.unref, iu = window.Vue.withCtx, Nh = window.Vue.createVNode, SB = window.Vue.openBlock, yB = window.Vue.createBlock, CB = window.Vue.createCommentVNode, xB = ["innerHTML"], bB = ["textContent"], kB = ["textContent"], ru = window.Vue.computed, $B = {
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
    const t = _e(), n = e, o = {
      pending: {
        svg: vB,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: _B,
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
    }, s = ru(() => o[n.status].svg), a = ru(() => o[n.status].title), i = ru(() => o[n.status].subtitle);
    return (l, c) => e.active ? (SB(), yB(au(Vt), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: iu(() => [
        Nh(au(R), { class: "ma-4" }, {
          default: iu(() => [
            Nh(au(b), null, {
              default: iu(() => [
                su("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, xB),
                su("h2", {
                  textContent: Fh(a.value)
                }, null, 8, bB),
                su("p", {
                  class: "ma-0",
                  textContent: Fh(i.value)
                }, null, 8, kB)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : CB("", !0);
  }
};
const ut = window.Vue.unref, Ot = window.Vue.createVNode, Tn = window.Vue.withCtx, VB = window.Vue.resolveDirective, EB = window.Vue.withDirectives, Mh = window.Vue.toDisplayString, LB = window.Vue.createTextVNode, lu = window.Vue.openBlock, Uh = window.Vue.createElementBlock, TB = window.Vue.createCommentVNode, Ih = window.Vue.createElementVNode, AB = window.Vue.createBlock, DB = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, PB = ["src"], BB = ["textContent"], FB = window.Vue.computed, NB = window.Vue.inject, MB = window.Vue.ref, Rh = window.Codex.CdxButton, UB = window.Codex.CdxIcon, IB = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: iw,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = MB(""), s = () => n("close"), a = () => n("publish", o.value), i = NB("breakpoints"), l = FB(() => i.value.mobile);
    return (c, u) => {
      const r = VB("i18n");
      return e.active && e.captchaDetails ? (lu(), AB(ut(Vt), {
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
                      Ot(ut(UB), { icon: ut(ms) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              EB(Ot(ut(b), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [r, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
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
                      LB(Mh(c.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
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
          Ih("div", DB, [
            e.captchaDetails.type === "image" ? (lu(), Uh("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, PB)) : (lu(), Uh("p", {
              key: 1,
              textContent: Mh(e.captchaDetails.question)
            }, null, 8, BB)),
            u[1] || (u[1] = Ih("p", { class: "mt-0" }, null, -1)),
            Ot(ut(R), { class: "ma-0" }, {
              default: Tn(() => [
                Ot(ut(b), null, {
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
      }, 8, ["fullscreen"])) : TB("", !0);
    };
  }
};
const eo = window.Vue.unref, mr = window.Vue.createVNode, Zo = window.Vue.withCtx, es = window.Vue.createElementVNode, RB = window.Vue.resolveDirective, zB = window.Vue.withDirectives, OB = window.Vue.renderList, jB = window.Vue.Fragment, cu = window.Vue.openBlock, HB = window.Vue.createElementBlock, zh = window.Vue.toDisplayString, Oh = window.Vue.createTextVNode, qB = window.Vue.isRef, GB = window.Vue.normalizeClass, jh = window.Vue.createBlock, WB = { class: "mw-ui-dialog__header" }, XB = { class: "row ma-0 px-4 py-3" }, KB = { class: "col shrink justify-center" }, YB = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, QB = { class: "mb-0" }, JB = { class: "pa-4" }, ZB = window.Codex.CdxField, e9 = window.Codex.CdxRadio, t9 = window.Vuex.useStore, pr = window.Vue.computed, n9 = window.Codex.CdxButton, o9 = window.Codex.CdxIcon, s9 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = t9(), { target: s, PUBLISHING_TARGETS: a } = Tt(), i = pr(() => o.state.translator.isAnon), l = _e(), { sourceSection: c } = re(), { isCurrentSectionPresent: u, isPresentLeadSection: r } = ht(), d = pr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), g = pr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), m = pr(() => {
      const f = [];
      return r.value || f.push({
        label: d.value,
        description: g.value,
        value: a.NEW_SECTION,
        disabled: !1
      }), f.push({
        label: l.i18n("cx-sx-publisher-sandbox-option-label"),
        description: l.i18n("cx-sx-publisher-sandbox-option-details"),
        value: a.SANDBOX,
        disabled: i.value
      }), u.value && (f.push({
        label: l.i18n("cx-sx-publisher-expand-option-label"),
        description: l.i18n("cx-sx-publisher-expand-option-details"),
        value: a.EXPAND,
        disabled: !1
      }), f.push({
        label: l.i18n("cx-sx-publisher-replace-option-label"),
        description: l.i18n("cx-sx-publisher-replace-option-details"),
        value: a.REPLACE,
        disabled: !1
      })), f;
    }), p = () => n("update:active", !1);
    return (f, h) => {
      const w = RB("i18n");
      return cu(), jh(eo(Vt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: f.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[1] || (h[1] = (v) => f.$emit("update:active", v)),
        onClose: p
      }, {
        header: Zo(() => [
          es("div", WB, [
            es("div", XB, [
              es("div", KB, [
                mr(eo(n9), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": f.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: Zo(() => [
                    mr(eo(o9), { icon: eo(Xf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              es("div", YB, [
                zB(es("h4", QB, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            mr(eo(Cr))
          ])
        ]),
        default: Zo(() => [
          es("div", JB, [
            mr(eo(ZB), { "is-fieldset": "" }, {
              default: Zo(() => [
                (cu(!0), HB(jB, null, OB(m.value, (v, y) => (cu(), jh(eo(e9), {
                  key: "publish-options-radio-" + v.value,
                  modelValue: eo(s),
                  "onUpdate:modelValue": [
                    h[0] || (h[0] = (C) => qB(s) ? s.value = C : null),
                    p
                  ],
                  class: GB(y < m.value.length - 1 ? "mb-4" : "mb-0"),
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
const jt = window.Vue.unref, Hh = window.Vue.toDisplayString, qh = window.Vue.createElementVNode, a9 = window.Vue.resolveDirective, ts = window.Vue.createVNode, i9 = window.Vue.withDirectives, ha = window.Vue.withCtx, uu = window.Vue.openBlock, Gh = window.Vue.createBlock, Wh = window.Vue.createCommentVNode, r9 = window.Vue.Fragment, l9 = window.Vue.createElementBlock, c9 = window.Vue.normalizeClass, u9 = ["textContent"], d9 = ["textContent"], ns = window.Vue.computed, Xh = window.Vue.ref, g9 = window.Vue.watch, Kh = window.Codex.CdxButton, Yh = window.Codex.CdxIcon, m9 = window.Codex.CdxMessage, p9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Xh(0), o = Xh(null);
    g9(o, () => {
      var p;
      const m = (p = o.value) == null ? void 0 : p.$el;
      if (m instanceof HTMLElement) {
        const f = m.querySelector("a");
        f && f.setAttribute("target", "_blank");
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
    }), i = ns(() => a.value === "notice"), l = ns(
      () => `sx-publisher__review-info--${a.value}`
    ), c = _e(), u = ns(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.text;
    }), r = ns(() => {
      var m;
      return i.value ? c.i18n("cx-sx-publisher-review-info") : ((m = s.value) == null ? void 0 : m.title) || c.i18n("cx-sx-publisher-review-info-error");
    }), d = () => {
      const m = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + m) % m;
    }, g = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (m, p) => {
      const f = a9("i18n-html");
      return uu(), Gh(jt(m9), {
        type: a.value,
        class: c9(["sx-publisher__review-info", l.value]),
        icon: i.value ? jt(vC) : null
      }, {
        default: ha(() => [
          qh("h5", {
            textContent: Hh(r.value)
          }, null, 8, u9),
          i.value ? Wh("", !0) : (uu(), l9(r9, { key: 0 }, [
            qh("p", {
              textContent: Hh(u.value)
            }, null, 8, d9),
            ts(jt(R), {
              justify: "between",
              class: "ma-0"
            }, {
              default: ha(() => [
                i9(ts(jt(b), {
                  ref_key: "learnMoreContainer",
                  ref: o,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [f, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (uu(), Gh(jt(b), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: ha(() => [
                    ts(jt(Kh), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: d
                    }, {
                      default: ha(() => [
                        ts(jt(Yh), { icon: jt(ed) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    ts(jt(Kh), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: ha(() => [
                        ts(jt(Yh), { icon: jt(ps) }, null, 8, ["icon"])
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
  const e = f9(), { currentTranslation: t } = Xt(), { currentMTProvider: n } = pt(e), { currentTargetPageTitle: o } = nt(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: i,
    sectionURLParameter: l
  } = P(), { sourceSection: c } = re(), u = Lt(), r = w9(() => {
    const p = {
      translation_source_language: s.value,
      translation_target_language: a.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L294)
      // translation_source_title:
      //   The title of the source article of the current translation. Applies only
      //   to events which relate to a specific translation or suggestion: all
      //   `editor_` and `publish_` events and some `dashboard_` events (e.g.
      //   `dashboard_start_translation`, `dashboard_delete_translation`)
      translation_source_title: i.value,
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
      const f = t.value.targetSectionTitle;
      f && (p.translation_target_section = f);
    } else
      o.value && (p.translation_target_title = o.value);
    return n.value && (p.translation_provider = de.getProviderForInstrumentation(n.value)), p.human_modification_rate = sn.getMTScoreForPageSection(
      c.value,
      a.value
    ) / 100, p.human_modification_threshold = sn.getMtModificationThreshold(), p;
  });
  return {
    logPublishAttemptEvent: () => u(he({
      event_type: "publish_attempt"
    }, r.value)),
    logPublishSuccessEvent: (p, f) => {
      u(he({
        event_type: "publish_success",
        published_page_id: p,
        published_revision_id: f
      }, r.value)), mw.cx.eventlogging.stats.published(!0);
    },
    logPublishFailureEvent: () => u(he({
      event_type: "publish_failure"
    }, r.value))
  };
}, _9 = window.Vue.computed, Qh = window.Vue.ref, S9 = window.Vuex.useStore, y9 = () => {
  const e = S9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = P(), { sourceSection: s } = re(), { targetPageTitleForPublishing: a } = Ua(), i = cv(), { isPresentLeadSection: l } = ht(), { sectionSuggestion: c } = Le(), u = _9(
    () => {
      var _, k;
      return l.value ? so.LEAD_SECTION_DUMMY_TITLE : (k = c.value) == null ? void 0 : k.presentSections[(_ = s.value) == null ? void 0 : _.sourceSectionTitleForPublishing];
    }
  ), { target: r, PUBLISHING_TARGETS: d } = Tt(), g = Qh(!1), m = Qh("pending"), p = () => g.value = !1, f = hd(), {
    logPublishAttemptEvent: h,
    logPublishSuccessEvent: w,
    logPublishFailureEvent: v
  } = v9(), y = (_, k, T) => x(void 0, null, function* () {
    h();
    const N = yield f();
    if (N instanceof Pn)
      return v(), { publishFeedbackMessage: N, targetUrl: null };
    const V = N, L = a.value, A = {
      html: h9(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: L,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: i.value,
      publishTarget: r.value,
      sectionTranslationId: V
    };
    u.value && (A.existingSectionTitle = u.value), (_ || k) && (A.captchaId = _, A.captchaWord = k, A.forceShowCaptcha = T);
    const G = yield $t.publishTranslation(
      A
    );
    return G.publishFeedbackMessage === null ? w(G.pageId, G.revisionId) : v(), G;
  });
  return {
    closePublishDialog: p,
    doPublish: (_ = null, k = null, T = void 0) => x(void 0, null, function* () {
      m.value = "pending", g.value = !0;
      let N;
      try {
        N = yield y(
          k == null ? void 0 : k.id,
          _,
          T
        );
      } catch (V) {
        if (V instanceof cs)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw mw.cx.eventlogging.stats.publishFailed(!0), V;
      }
      return N;
    }),
    isPublishDialogActive: g,
    publishStatus: m
  };
}, C9 = window.Vue.computed, x9 = () => {
  const e = tt(), { sourceSection: t } = re(), { getCurrentTitleByLanguage: n } = cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = P(), a = C9(
    () => t.value.subSections.reduce(
      (i, l) => l.isTranslated ? `${i}<section rel="cx:Section" id="${l.targetSectionId}">${l.translatedContent}</section>` : i,
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
  const { targetLanguageURLParameter: e } = P(), { sourceSection: t } = re();
  return () => {
    const n = sn.getMTScoreForPageSection(
      t.value,
      e.value
    ), o = sn.getScoreStatus(n);
    if (o === "success")
      return null;
    const s = 100 - n, a = o === "failure" ? "error" : "warning";
    let i, l;
    return a === "warning" ? (i = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (i = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Pn({
      title: i,
      text: l,
      status: a,
      type: "mt"
    });
  };
}, k9 = window.Vue.ref, $9 = window.Vue.computed, V9 = () => {
  const e = b9(), { target: t, PUBLISHING_TARGETS: n } = Tt(), { targetPageTitleForPublishing: o } = Ua(), s = k9([]), a = $9(
    () => s.value.some((u) => u.isError)
  ), i = (u) => {
    s.value.push(u), s.value.sort((r, d) => +d.isError - +r.isError);
  };
  return {
    addPublishFeedbackMessage: i,
    clearPublishFeedbackMessages: () => {
      s.value = [];
    },
    publishFeedbackMessages: s,
    isPublishingDisabled: a,
    initializePublishFeedbackMessages: () => {
      if (!gv() && t.value !== n.SANDBOX) {
        const r = new Pn({
          text: mw.message("cx-publish-permission-error").text(),
          title: mw.message("cx-publish-permission-error-title").text(),
          type: "generic",
          status: "error"
        });
        i(r);
      }
      const u = e();
      u && i(u), mw.Title.newFromText(o.value) || i(
        new Pn({
          text: mw.message("cx-tools-linter-invalid-character-message").text(),
          title: mw.message("cx-tools-linter-invalid-character").text(),
          type: "generic",
          status: "error"
        })
      );
    }
  };
}, E9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = Tt(), { currentSourcePage: n } = nt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = P(), { sourceSection: a } = re(), { targetPageTitleForPublishing: i } = Ua();
  return (l) => x(void 0, null, function* () {
    const c = i.value, u = n.value.title, r = new mw.Title(u), d = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && r.getNamespaceId() !== d.user)
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
}, Jh = window.Vue.ref, L9 = () => {
  const e = Jh(!1), t = Jh(null), n = (i) => i && i.type === "captcha" ? (t.value = i.details, e.value = !0, !0) : (t.value = null, !1);
  let o = null;
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: n,
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    },
    solveHCaptcha: (i, l, c) => x(void 0, null, function* () {
      yield mw.loader.using("ext.confirmEdit.CaptchaWidget"), o || (o = new mw.libs.confirmEdit.CaptchaWidget({
        container: l,
        interfaceName: "contenttranslation"
      }));
      const u = yield o.updateForFailure(i);
      if (c && !u)
        throw new Error(mw.message("cx-captcha-dialog-error").text());
      return o.captchaRendered || (yield o.renderCaptcha()), o.getCaptchaDataForSubmission();
    })
  };
};
const me = window.Vue.unref, qe = window.Vue.createVNode, T9 = window.Vue.resolveDirective, du = window.Vue.withDirectives, fa = window.Vue.openBlock, wa = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Zh = window.Vue.toDisplayString, A9 = window.Vue.createTextVNode, xo = window.Vue.createElementVNode, os = window.Vue.withCtx, ef = window.Vue.normalizeClass, D9 = { class: "sx-publisher" }, P9 = {
  key: 0,
  class: "mb-2"
}, B9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, F9 = { key: 0 }, N9 = { key: 1 }, M9 = ["href"], U9 = ["innerHTML"], I9 = { class: "sx-publisher__section-preview pa-5" }, R9 = ["innerHTML"], hr = window.Vue.computed, z9 = window.Vue.onMounted, tf = window.Vue.ref, O9 = window.Vue.watch, nf = window.Codex.CdxButton, gu = window.Codex.CdxIcon, j9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = re(), { sectionSuggestion: n } = Le(), { isCurrentSectionPresent: o, isPresentLeadSection: s } = ht(), {
      targetLanguageURLParameter: a,
      sectionURLParameter: i
    } = P(), l = _e(), c = hr(
      () => {
        var Y;
        return s.value ? l.i18n("cx-sx-present-lead-section-label") : (Y = t.value) == null ? void 0 : Y.title;
      }
    ), { target: u, PUBLISHING_TARGETS: r } = Tt(), d = hr(() => u.value === r.SANDBOX ? l.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : u.value === r.EXPAND ? l.i18n(
      "cx-sx-publisher-publish-panel-expand-section-result"
    ) : u.value === r.REPLACE ? l.i18n(
      "cx-sx-publisher-publish-panel-replace-section-result"
    ) : t.value.isLeadSection ? l.i18n("cx-sx-publisher-publish-panel-lead-section-result") : l.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: g,
      captchaDialogOn: m,
      handleCaptchaError: p,
      onCaptchaDialogClose: f,
      solveHCaptcha: h
    } = L9(), w = tf(null), {
      publishFeedbackMessages: v,
      isPublishingDisabled: y,
      addPublishFeedbackMessage: C,
      clearPublishFeedbackMessages: _,
      initializePublishFeedbackMessages: k
    } = V9(), T = E9(), { doPublish: N, isPublishDialogActive: V, publishStatus: L, closePublishDialog: A } = y9(), G = (Y = null, X = null) => x(this, null, function* () {
      var z;
      if (y.value)
        return;
      const le = yield N(
        X ? X.captchaword : Y,
        g.value,
        X == null ? void 0 : X.wgConfirmEditForceShowCaptcha
      );
      if (!le)
        return;
      const { publishFeedbackMessage: te, targetUrl: Se } = le;
      if (((z = te == null ? void 0 : te.details) == null ? void 0 : z.type) === "hcaptcha") {
        let O;
        try {
          O = yield h(
            te.details,
            w.value,
            !!X
          );
        } catch (ie) {
          A(), C(
            new Pn({
              // The widget rejects with a plain string for some failures, and with an Error for others.
              text: ie instanceof Error ? ie.message : mw.message("cx-publish-error-unknown", String(ie)).text(),
              status: "warning"
            })
          );
          return;
        }
        yield G(null, O);
        return;
      }
      if (p(te)) {
        A();
        return;
      } else
        te && C(te);
      L.value = y.value ? "failure" : "success", setTimeout(() => {
        if (y.value) {
          A();
          return;
        }
        T(Se);
      }, 1e3);
    });
    z9(() => {
      k(), mw.cx.eventlogging.stats.publishStepAccess();
    });
    const ae = x9(), Q = tf(!1), oe = () => Q.value = !0;
    O9(Q, (Y) => {
      Y || (_(), k());
    });
    const M = hr(() => {
      var Y, X;
      return s.value ? l.i18n("cx-sx-present-lead-section-label") : (X = (Y = n.value) == null ? void 0 : Y.presentSections) == null ? void 0 : X[i.value];
    }), W = hr(() => {
      var le;
      const Y = Z.getPageUrl(
        a.value,
        (le = n.value) == null ? void 0 : le.targetTitle
      ), X = s.value ? "" : (M.value || "").replace(/ /g, "_");
      return `${Y}#${X}`;
    });
    return (Y, X) => {
      const le = T9("i18n");
      return fa(), wa("section", D9, [
        qe(wB, {
          "is-publishing-disabled": me(y),
          onPublishTranslation: G
        }, null, 8, ["is-publishing-disabled"]),
        xo("div", {
          class: ef(["sx-publisher__publish-panel", me(o) ? "py-4" : "pa-4"])
        }, [
          me(o) ? (fa(), wa("div", B9, [
            me(s) ? du((fa(), wa("h5", F9, null, 512)), [
              [le, void 0, "cx-sx-publisher-publish-panel-existing-lead-section-notice"]
            ]) : du((fa(), wa("h5", N9, null, 512)), [
              [le, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            xo("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: W.value,
              target: "_blank"
            }, [
              A9(Zh(M.value) + " ", 1),
              qe(me(gu), { icon: me(Pa) }, null, 8, ["icon"])
            ], 8, M9)
          ])) : du((fa(), wa("h5", P9, null, 512)), [
            [le, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          xo("div", {
            class: ef({ "px-4 mt-4": me(o) })
          }, [
            xo("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: d.value
            }, null, 8, U9),
            qe(me(R), {
              justify: "end",
              class: "ma-0"
            }, {
              default: os(() => [
                qe(me(b), { shrink: "" }, {
                  default: os(() => [
                    qe(me(nf), {
                      weight: "quiet",
                      "aria-label": Y.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: oe
                    }, {
                      default: os(() => [
                        qe(me(gu), { icon: me(EC) }, null, 8, ["icon"])
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
        qe(p9, { "publish-feedback-messages": me(v) }, null, 8, ["publish-feedback-messages"]),
        xo("div", {
          ref_key: "hCaptchaContainer",
          ref: w,
          class: "sx-publisher__hcaptcha px-4"
        }, null, 512),
        xo("section", I9, [
          qe(me(R), { class: "pb-5 ma-0" }, {
            default: os(() => [
              qe(me(b), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: Zh(c.value)
              }, null, 8, ["textContent"]),
              qe(me(b), { shrink: "" }, {
                default: os(() => [
                  qe(me(nf), {
                    weight: "quiet",
                    "aria-label": Y.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: me(ae)
                  }, {
                    default: os(() => [
                      qe(me(gu), { icon: me(Ju) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          xo("div", {
            innerHTML: me(t).translationHtml
          }, null, 8, R9)
        ]),
        qe(s9, {
          active: Q.value,
          "onUpdate:active": X[0] || (X[0] = (te) => Q.value = te)
        }, null, 8, ["active"]),
        qe(IB, {
          active: me(m),
          "captcha-details": me(g),
          onClose: me(f),
          onPublish: X[1] || (X[1] = (te) => G(te))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        qe($B, {
          active: me(V),
          status: me(L)
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
  const i = q9("sx-publisher");
  return X9(), K9("main", {
    class: W9(["sx-publisher-view", a.classes])
  }, [
    G9(i)
  ], 2);
}
const Q9 = /* @__PURE__ */ we(H9, [["render", Y9]]);
const Ht = window.Vue.unref, to = window.Vue.createVNode, bo = window.Vue.withCtx, mu = window.Vue.toDisplayString, pu = window.Vue.createElementVNode, of = window.Vue.openBlock, sf = window.Vue.createBlock, J9 = window.Vue.createCommentVNode, Z9 = ["textContent"], e7 = ["textContent"], t7 = ["textContent"], pv = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: us,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (of(), sf(Ht(R), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Ht(H.getDir)(e.suggestion.language)
    }, {
      default: bo(() => [
        to(Ht(b), { shrink: "" }, {
          default: bo(() => [
            to(Ht(Uu), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        to(Ht(b), { class: "ms-4" }, {
          default: bo(() => [
            to(Ht(R), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: bo(() => [
                to(Ht(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: bo(() => [
                    pu("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: mu(e.suggestion.title)
                    }, null, 8, Z9)
                  ]),
                  _: 1
                }),
                to(Ht(b), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: bo(() => [
                    pu("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: mu(e.suggestion.description)
                    }, null, 8, e7)
                  ]),
                  _: 1
                }),
                to(Ht(b), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: bo(() => [
                    e.suggestion.inFeaturedCollection ? (of(), sf(Ir, {
                      key: 0,
                      class: "me-2"
                    })) : J9("", !0),
                    to(Ht(Ze), {
                      icon: Ht(K0),
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
const af = window.Vue.unref, va = window.Vue.openBlock, hu = window.Vue.createBlock, n7 = window.Vue.createCommentVNode, o7 = window.Vue.resolveDirective, s7 = window.Vue.withDirectives, rf = window.Vue.createElementBlock, a7 = window.Vue.renderList, i7 = window.Vue.Fragment, r7 = window.Vue.normalizeClass, l7 = window.Vue.withCtx, c7 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, lf = window.Vue.computed, u7 = window.Vue.ref, d7 = {
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
    const { sourceLanguageURLParameter: t } = P(), n = lf(() => H.getAutonym(t.value)), o = e, s = u7(null), a = (u) => s.value = u, i = () => s.value = null, l = (u) => {
      var r;
      return ((r = o.selectedItem) == null ? void 0 : r.title) === u.title && !s.value || s.value === u.pageId;
    }, c = lf(() => o.searchInput);
    return (u, r) => {
      const d = o7("i18n");
      return va(), hu(af(Je), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: l7(() => [
          e.searchResultsLoading ? (va(), hu(af(gt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : e.searchResultsSlice.length === 0 ? s7((va(), rf("p", c7, null, 512)), [
            [d, [
              c.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : n7("", !0),
          (va(!0), rf(i7, null, a7(e.searchResultsSlice, (g) => (va(), hu(pv, {
            key: g.pageId,
            suggestion: g,
            class: r7({
              "sx-article-search__results-selected": l(g)
            }),
            onMouseenter: (m) => a(g.pageId),
            onMouseleave: i,
            onClick: (m) => u.$emit("suggestion-clicked", g)
          }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const cf = window.Vue.toDisplayString, g7 = window.Vue.createElementVNode, fr = window.Vue.openBlock, uf = window.Vue.createElementBlock, m7 = window.Vue.createCommentVNode, p7 = window.Vue.renderList, h7 = window.Vue.Fragment, f7 = window.Vue.normalizeClass, df = window.Vue.createBlock, w7 = window.Vue.unref, gf = window.Vue.withCtx, v7 = ["textContent"], _7 = ["textContent"], S7 = window.Vue.ref, fu = {
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
    const n = e, o = S7(null), s = (l) => o.value = l, a = () => o.value = null, i = (l) => {
      var c;
      return ((c = n.selectedItem) == null ? void 0 : c.title) === l.title && !o.value || o.value === l.pageId;
    };
    return (l, c) => (fr(), df(w7(Je), { class: "sx-article-search__suggestions pa-0" }, {
      header: gf(() => [
        g7("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: cf(e.cardTitle)
        }, null, 8, v7),
        e.cardSubtitle ? (fr(), uf("p", {
          key: 0,
          class: "ma-0 px-4 pb-2 sx-article-search__suggestions-subtitle",
          textContent: cf(e.cardSubtitle)
        }, null, 8, _7)) : m7("", !0)
      ]),
      default: gf(() => [
        (fr(!0), uf(h7, null, p7(e.suggestions, (u) => (fr(), df(pv, {
          key: u.pageId,
          suggestion: u,
          class: f7({
            "sx-article-search__suggestions-selected": i(u)
          }),
          onMouseenter: (r) => s(u.pageId),
          onMouseleave: a,
          onClick: (r) => l.$emit("suggestion-clicked", u)
        }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, y7 = window.Vue.computed, C7 = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), mf = "other", x7 = (e) => y7((t) => {
  const o = e.value.slice(0, 3), s = {
    value: mf,
    props: {
      icon: Z0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== mf);
  return C7(a, o) ? t : [...o.map((l) => ({
    value: l,
    props: {
      label: H.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), s];
}), b7 = window.Vue.computed, k7 = () => {
  const { supportedLanguageCodes: e } = Da(), { targetLanguageURLParameter: t } = P();
  return { getSuggestedSourceLanguages: (o) => b7(() => {
    const s = (navigator.language || "").split("-")[0], a = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((l) => l.split("-")[0]), i = [
      ...o.value,
      // User's current interface language
      mw.config.get("wgUserLanguage"),
      // Current wiki's content language
      mw.config.get("wgContentLanguage"),
      s,
      ...a
    ];
    return [...new Set(i)].filter(
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
}, E7 = window.Vuex.useStore, pf = window.Vue.ref, wr = window.Vue.computed, hf = window.Vue.watch, L7 = (e) => {
  const t = E7(), n = ro(), { fetchPageSuggestionsByFeaturedCollections: o } = Yu(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), { featuredCollection: i } = Wt(), { isFilteringByFeaturedCollection: l } = lo(), c = pf([]), u = pf(!1), r = wr(
    () => !!i.value && !u.value
  ), d = () => {
    var f;
    return !l() && ((f = i.value) == null ? void 0 : f.name) && g.value.length === 0;
  }, g = wr(() => {
    var f;
    return t.getters["suggestions/getCollectionPageSuggestions"](
      s.value,
      a.value,
      (f = i.value) == null ? void 0 : f.name
    );
  }), m = wr(() => {
    var f;
    return t.getters["suggestions/getCollectionSectionSuggestions"](
      s.value,
      a.value,
      (f = i.value) == null ? void 0 : f.name
    );
  }), p = wr(() => [
    ...g.value || [],
    ...m.value || []
  ].slice(0, e));
  return hf(
    p,
    (f) => x(void 0, null, function* () {
      if (!f || f.length === 0) {
        c.value = [];
        return;
      }
      try {
        const h = f.map(
          (w) => w.sourceTitle
        );
        h.length > 0 ? (yield n(s.value, h), c.value = h.map(
          (w) => t.getters["mediawiki/getPage"](s.value, w)
        )) : c.value = [], u.value = !0;
      } catch (h) {
        mw.log.error("Error fetching featured collection pages:", h), c.value = [], u.value = !0;
      }
    }),
    { immediate: !0 }
  ), hf(
    s,
    () => x(void 0, null, function* () {
      u.value = !1, d() && (c.value = [], yield o());
    }),
    { immediate: !0 }
  ), {
    featuredCollectionPages: c,
    featuredCollectionPagesLoading: r
  };
};
const T7 = window.Vue.resolveDirective, A7 = window.Vue.createElementVNode, wu = window.Vue.withDirectives, ue = window.Vue.unref, _a = window.Vue.withCtx, tn = window.Vue.createVNode, ss = window.Vue.openBlock, vu = window.Vue.createBlock, D7 = window.Vue.createCommentVNode, _u = window.Vue.createElementBlock, P7 = window.Vue.Fragment, B7 = window.Vue.vShow, Sa = window.Vue.withModifiers, ya = window.Vue.withKeys, F7 = ["onKeydown"], N7 = { class: "mb-0" }, M7 = {
  key: 3,
  class: "sx-article-search__empty-state"
}, as = window.Vue.ref, U7 = window.Vue.onMounted, ko = window.Vue.computed, ff = window.Vue.watch, I7 = window.Vue.inject, R7 = window.Vuex.useStore, z7 = window.Codex.CdxButton, O7 = window.Codex.CdxIcon, j7 = window.Codex.CdxSearchInput, wf = 3, H7 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = as(""), n = as(!1), o = as(null), s = as(!1), { previousLanguages: a, addLanguageToHistory: i } = V7(), l = R7(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = P(), { supportedLanguageCodes: r } = Da(), d = ro(), g = as(!1), { searchResultsLoading: m, searchResultsSlice: p } = Gw(
      c,
      t
    ), { getSuggestedSourceLanguages: f } = k7(), h = f(a), w = x7(
      h
    ), v = tt(), { fetchAllTranslations: y } = hs();
    U7(() => x(this, null, function* () {
      var U;
      y(), i(c.value), (U = o.value) == null || U.focus();
    }));
    const { featuredCollectionPages: C, featuredCollectionPagesLoading: _ } = L7(wf), k = () => {
      v.push({ name: "dashboard" });
    }, T = sw(), N = (U) => {
      T(U, u.value), i(U);
    }, V = (U) => {
      if (U === "other") {
        s.value = !0;
        return;
      }
      N(U);
    }, L = Lt();
    ff(t, () => {
      n.value || (n.value = !0, L({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const A = () => {
      s.value = !1;
    }, G = (U) => {
      s.value = !1, V(U);
    }, { fetchPreviousEditsInSource: ae, previousEditsInSource: Q } = jf(), oe = as([]), M = () => {
      g.value = !0, ae().then(() => {
        if (Q.value.length > 0)
          return d(
            c.value,
            Q.value
          );
      }).then(
        () => Q.value.map(
          (U) => l.getters["mediawiki/getPage"](c.value, U)
        )
      ).then((U) => {
        U = U.slice(0, wf), U = U.sort(
          (j, q) => Q.value.indexOf(j.title) - Q.value.indexOf(q.title)
        ), oe.value = U;
      }).finally(() => {
        g.value = !1;
      });
    };
    ff(
      c,
      () => {
        var U;
        l.dispatch("mediawiki/fetchNearbyPages"), M(), (U = o.value) == null || U.focus();
      },
      { immediate: !0 }
    );
    const W = ko(() => l.getters["mediawiki/getNearbyPages"]), Y = I7("breakpoints"), X = ko(() => Y.value.mobile), le = Ma(), te = ko(
      () => oe.value && oe.value.length && !_.value
    ), Se = ko(
      () => W.value && W.value.length && !g.value
    ), Ne = ko(
      () => C.value && C.value.length > 0
    ), z = ko(() => Ne.value ? C.value || [] : te.value ? oe.value || [] : Se.value ? W.value || [] : []), { next: O, prev: ie, keyboardNavigationContainer: S, selectedItem: D } = jw(
      t,
      p,
      z
    ), E = (U) => le(
      U.title,
      c.value,
      u.value,
      F.value
    ), F = ko(() => t.value ? "search_result" : te.value ? "suggestion_recent_edit" : Se.value ? "suggestion_nearby" : "");
    return (U, j) => {
      const q = T7("i18n");
      return ss(), _u("section", {
        ref_key: "keyboardNavigationContainer",
        ref: S,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          j[6] || (j[6] = ya(Sa((...I) => ue(O) && ue(O)(...I), ["stop", "prevent"]), ["tab"])),
          j[7] || (j[7] = ya(Sa((...I) => ue(O) && ue(O)(...I), ["stop", "prevent"]), ["down"])),
          j[8] || (j[8] = ya(Sa((...I) => ue(ie) && ue(ie)(...I), ["stop", "prevent"]), ["up"])),
          ya(Sa(k, ["stop", "prevent"]), ["esc"]),
          j[9] || (j[9] = ya(Sa((I) => E(ue(D)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        tn(ue(R), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: _a(() => [
            tn(ue(b), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: _a(() => [
                wu(A7("h5", N7, null, 512), [
                  [q, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            tn(ue(b), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: _a(() => [
                tn(ue(z7), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": U.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: k
                }, {
                  default: _a(() => [
                    tn(ue(O7), { icon: ue(ms) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        tn(ue(j7), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": j[0] || (j[0] = (I) => t.value = I),
          class: "sx-article-search__search-input",
          placeholder: U.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        tn(ue(La), {
          class: "sx-article-search__language-button-group",
          items: ue(w),
          active: ue(c),
          onSelect: V
        }, null, 8, ["items", "active"]),
        t.value ? D7("", !0) : (ss(), _u(P7, { key: 0 }, [
          Ne.value ? (ss(), vu(fu, {
            key: 0,
            "card-title": U.$i18n("cx-sx-article-search-community-priorities-title"),
            "card-subtitle": U.$i18n("cx-sx-article-search-community-priorities-subtitle"),
            suggestions: ue(C),
            "selected-item": ue(D),
            onSuggestionClicked: j[1] || (j[1] = (I) => E(I))
          }, null, 8, ["card-title", "card-subtitle", "suggestions", "selected-item"])) : te.value ? (ss(), vu(fu, {
            key: 1,
            "card-title": U.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: oe.value,
            "selected-item": ue(D),
            onSuggestionClicked: j[2] || (j[2] = (I) => E(I))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : Se.value ? (ss(), vu(fu, {
            key: 2,
            "card-title": U.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: W.value,
            onSuggestionClicked: j[3] || (j[3] = (I) => E(I))
          }, null, 8, ["card-title", "suggestions"])) : wu((ss(), _u("p", M7, null, 512)), [
            [q, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        wu(tn(d7, {
          "search-input": t.value,
          "search-results-loading": ue(m),
          "search-results-slice": ue(p),
          "selected-item": ue(D),
          onSuggestionClicked: j[4] || (j[4] = (I) => E(I))
        }, null, 8, ["search-input", "search-results-loading", "search-results-slice", "selected-item"]), [
          [B7, !!t.value]
        ]),
        tn(ue(Vt), {
          value: s.value,
          "onUpdate:value": j[5] || (j[5] = (I) => s.value = I),
          class: "sx-article-search-language-selector",
          fullscreen: X.value,
          header: X.value,
          title: U.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: A
        }, {
          default: _a(() => [
            tn(ue(Hw), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ue(r),
              suggestions: ue(h),
              placeholder: U.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: G,
              onClose: A
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
  const i = G7("sx-article-search");
  return K7(), Y7("main", {
    class: X7(["sx-article-search-view", a.classes])
  }, [
    W7(i)
  ], 2);
}
const J7 = /* @__PURE__ */ we(q7, [["render", Q7]]), Z7 = () => {
  const e = Ma(), { logDashboardOpenEvent: t } = Kw(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o,
    pageURLParameter: s
  } = P();
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
    component: n3,
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
    component: y5,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: NT,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: VP,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: Y6,
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
    component: gB,
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
], fd = mk({
  history: gb(),
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
  if (mw.user.isAnon() || Cf.assertUser().catch((r) => {
    r instanceof cs && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = Z7(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: i,
    pageURLParameter: l,
    clearTranslationURLParameters: c
  } = P();
  if (!!(a.value && i.value && l.value)) {
    if (nF(
      a.value,
      i.value,
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
}, sF = window.Vue.createApp, aF = mw.config.get("wgUserLanguage"), iF = "en", rF = mw.messages.values || {}, Lo = sF(nx);
Lo.use(fd);
Lo.use(Bx);
Lo.use(S1);
Lo.use(_1);
const lF = J1({
  locale: aF,
  finalFallback: iF,
  messages: rF,
  wikilinks: !0
});
Lo.use(lF);
Lo.use(oF);
Lo.mount("#contenttranslation");
