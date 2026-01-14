var vv = Object.defineProperty, _v = Object.defineProperties;
var Sv = Object.getOwnPropertyDescriptors;
var yd = Object.getOwnPropertySymbols;
var yv = Object.prototype.hasOwnProperty, Cv = Object.prototype.propertyIsEnumerable;
var Cd = (e, t, n) => t in e ? vv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, me = (e, t) => {
  for (var n in t || (t = {}))
    yv.call(t, n) && Cd(e, n, t[n]);
  if (yd)
    for (var n of yd(t))
      Cv.call(t, n) && Cd(e, n, t[n]);
  return e;
}, Ye = (e, t) => _v(e, Sv(t));
var k = (e, t, n) => new Promise((o, s) => {
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
}, bv = window.Vue.toDisplayString, Wr = window.Vue.openBlock, Xr = window.Vue.createElementBlock, kv = window.Vue.createCommentVNode, xd = window.Vue.createElementVNode, $v = window.Vue.normalizeClass, Vv = ["width", "height", "aria-labelledby"], Ev = ["id"], Lv = ["fill"], Tv = ["d"];
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
      xd("g", { fill: n.iconColor }, [
        xd("path", { d: a.iconImagePath }, null, 8, Tv)
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
}, Pv = window.Vue.renderSlot, Bv = window.Vue.resolveComponent, bd = window.Vue.normalizeClass, ja = window.Vue.openBlock, Kr = window.Vue.createBlock, Yr = window.Vue.createCommentVNode, Fv = window.Vue.toDisplayString, Nv = window.Vue.createElementBlock, Mv = window.Vue.toHandlerKey, Uv = window.Vue.withModifiers, Iv = window.Vue.mergeProps, Rv = window.Vue.createElementVNode, zv = window.Vue.resolveDynamicComponent, Ov = window.Vue.withCtx, jv = { class: "mw-ui-button__content" }, Hv = ["textContent"];
function Gv(e, t, n, o, s, a) {
  const r = Bv("mw-icon");
  return ja(), Kr(zv(a.component), {
    class: bd(["mw-ui-button", a.classes]),
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
            class: bd(["mw-ui-button__icon", a.iconClass])
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
}, Wv = window.Vue.renderList, Xv = window.Vue.Fragment, Qr = window.Vue.openBlock, kd = window.Vue.createElementBlock, Kv = window.Vue.resolveComponent, Yv = window.Vue.withModifiers, Qv = window.Vue.mergeProps, Jv = window.Vue.createBlock, Zv = { class: "row mw-ui-button-group ma-0 pa-0" };
function e0(e, t, n, o, s, a) {
  const r = Kv("mw-button");
  return Qr(), kd("div", Zv, [
    (Qr(!0), kd(Xv, null, Wv(n.items, (l) => (Qr(), Jv(r, Qv({
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
}, $d = window.Vue.renderSlot, n0 = window.Vue.toDisplayString, Vd = window.Vue.openBlock, Ed = window.Vue.createElementBlock, o0 = window.Vue.createCommentVNode, s0 = window.Vue.createElementVNode, a0 = { class: "mw-ui-card" }, i0 = ["textContent"], r0 = { class: "mw-ui-card__content" };
function l0(e, t, n, o, s, a) {
  return Vd(), Ed("div", a0, [
    $d(e.$slots, "header", {}, () => [
      n.title ? (Vd(), Ed("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: n0(n.title)
      }, null, 8, i0)) : o0("", !0)
    ]),
    s0("div", r0, [
      $d(e.$slots, "default")
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
const M = /* @__PURE__ */ he(C0, [["render", L0]]), Cu = ["mobile", "tablet", "desktop", "desktop-wide"], T0 = Cu.reduce(
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
      for (let n = 0; n < Cu.length; n++) {
        let o = Cu[n], s = this.$props[o];
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
const V = /* @__PURE__ */ he(A0, [["render", U0]]), I0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", R0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Cr = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", z0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, O0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", wf = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", j0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", H0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", xr = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", G0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", q0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", W0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Ld = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", X0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", vf = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", K0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", Y0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", Q0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", J0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Z0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", xu = {
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
}, Td = window.Vue.normalizeClass, Zr = window.Vue.createElementVNode, el = window.Vue.renderSlot, Ha = window.Vue.resolveComponent, Ss = window.Vue.createVNode, tl = window.Vue.withCtx, Ad = window.Vue.createCommentVNode, r_ = window.Vue.withKeys, Dd = window.Vue.openBlock, l_ = window.Vue.createElementBlock, c_ = window.Vue.Transition, u_ = window.Vue.normalizeStyle, d_ = window.Vue.createBlock, g_ = { class: "mw-ui-dialog__shell items-stretch" }, m_ = { class: "mw-ui-dialog__body" };
function p_(e, t, n, o, s, a) {
  const r = Ha("mw-col"), l = Ha("mw-button"), c = Ha("mw-row"), u = Ha("mw-divider");
  return Dd(), d_(c_, {
    name: "mw-ui-animation-fade",
    style: u_(o.cssVars)
  }, {
    default: tl(() => [
      n.value ? (Dd(), l_("div", {
        key: 0,
        ref: "root",
        class: Td(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = r_((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        Zr("div", {
          class: Td(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        Zr("div", g_, [
          n.header ? el(e.$slots, "header", { key: 0 }, () => [
            Ss(c, { class: "mw-ui-dialog__header" }, {
              default: tl(() => [
                Ss(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Ss(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: tl(() => [
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
          ]) : Ad("", !0),
          Zr("div", m_, [
            el(e.$slots, "default")
          ]),
          el(e.$slots, "footer")
        ])
      ], 34)) : Ad("", !0)
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
}, Pd = window.Vue.renderSlot, f_ = window.Vue.resolveComponent, Ga = window.Vue.openBlock, nl = window.Vue.createBlock, Bd = window.Vue.createCommentVNode, w_ = window.Vue.resolveDynamicComponent, v_ = window.Vue.toDisplayString, __ = window.Vue.mergeProps, S_ = window.Vue.withModifiers, y_ = window.Vue.createElementVNode, C_ = window.Vue.normalizeClass, x_ = window.Vue.createElementBlock, b_ = { class: "mw-ui-input__content" };
function k_(e, t, n, o, s, a) {
  const r = f_("mw-icon");
  return Ga(), x_("div", {
    class: C_(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    y_("div", b_, [
      Pd(e.$slots, "icon", {}, () => [
        n.icon ? (Ga(), nl(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Bd("", !0)
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
      Pd(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ga(), nl(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = S_((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Bd("", !0)
      ])
    ])
  ], 2);
}
const bu = /* @__PURE__ */ he(h_, [["render", k_]]);
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
}, Fd = window.Vue.normalizeStyle, Nd = window.Vue.openBlock, N_ = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const M_ = window.Vue.resolveComponent, U_ = window.Vue.createBlock;
function I_(e, t, n, o, s, a) {
  const r = M_("mw-ui-icon");
  return n.thumbnail ? (Nd(), N_("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Fd(o.style)
  }, null, 4)) : (Nd(), U_(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Fd(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Iu = /* @__PURE__ */ he(F_, [["render", I_]]);
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
}, Md = window.Vue.normalizeClass, Ud = window.Vue.normalizeStyle, z_ = window.Vue.createElementVNode, O_ = window.Vue.openBlock, j_ = window.Vue.createElementBlock, H_ = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function G_(e, t, n, o, s, a) {
  return O_(), j_("div", {
    class: Md(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Ud(a.containerStyles)
  }, [
    z_("div", {
      class: Md(["mw-progress-bar__bar", a.barClass]),
      style: Ud(a.barStyles)
    }, null, 6)
  ], 14, H_);
}
const Sf = /* @__PURE__ */ he(R_, [["render", G_]]), q_ = (e, t, n, o) => (s) => {
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
}, W_ = (e, t, n, o) => ({ initiateDrag: q_(
  e,
  t,
  n,
  o
) }), X_ = window.Vue.ref, Id = window.Vue.computed, K_ = (e, t, n, o) => {
  const s = X_(0), a = Id(
    () => t.value > e.value
  ), r = Id(
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
const qa = window.Vue.ref, Y_ = window.Vue.onMounted, Rd = window.Vue.computed, Q_ = window.Vue.nextTick, J_ = {
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
    const t = qa(!0), n = qa(null), o = Rd(
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
      scrollToStepByIndex: u,
      handleArrowUpClick: i
    } = K_(o, s, n, t), d = () => u(c.value + 1), g = qa(null), m = Rd(() => ({
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
    return Y_(() => k(this, null, function* () {
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
        t.value || (n.value.style.removeProperty("height"), u(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: c,
      scrollToNextStep: d
    };
  }
}, Z_ = window.Vue.renderSlot, e1 = window.Vue.normalizeClass, Wa = window.Vue.createElementVNode, t1 = window.Vue.resolveComponent, n1 = window.Vue.createVNode, ol = window.Vue.openBlock, o1 = window.Vue.createBlock, zd = window.Vue.createCommentVNode, Od = window.Vue.createElementBlock, s1 = window.Vue.normalizeStyle, a1 = { class: "mw-ui-expandable-content__container" }, i1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, r1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function l1(e, t, n, o, s, a) {
  const r = t1("mw-button");
  return ol(), Od("div", {
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
      n.scroll && o.scrollable ? (ol(), Od("div", i1, [
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
        }, null, 8, ["icon", "disabled", "onClick"])) : zd("", !0)
      ])) : zd("", !0)
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
}, jd = window.Vue.createElementVNode, Hd = window.Vue.normalizeStyle, d1 = window.Vue.openBlock, g1 = window.Vue.createElementBlock, m1 = ["width", "height", "viewport"], p1 = ["r", "cx", "cy", "stroke-dasharray"], h1 = ["r", "cx", "cy", "stroke-dasharray"];
function f1(e, t, n, o, s, a) {
  return d1(), g1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Hd(o.cssVars)
  }, [
    jd("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, p1),
    jd("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Hd({ strokeDashoffset: `${o.strokeDashOffset}px` })
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
const x1 = window.Vue.resolveDirective, ys = window.Vue.createElementVNode, Gd = window.Vue.withDirectives, b1 = window.Vue.toDisplayString, k1 = window.Vue.unref, qd = window.Vue.withCtx, $1 = window.Vue.openBlock, V1 = window.Vue.createBlock, E1 = window.Vue.createCommentVNode, L1 = { class: "pa-4 sx-login-dialog__header" }, T1 = { class: "sx-login-dialog__body px-6 pb-4" }, A1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, D1 = ["href"], P1 = window.Vue.computed, B1 = window.Vue.ref, F1 = window.Vuex.useStore, N1 = {
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
        header: qd(() => [
          ys("div", L1, [
            Gd(ys("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: qd(() => [
          Gd(ys("div", T1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          ys("div", A1, [
            ys("a", {
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
class Ru {
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
const Ka = "original", Ya = "empty", I1 = {
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
const Wd = (e) => {
  var n;
  const t = wr(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, wr = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, bo = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Cf = (e) => {
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
      (a) => bo(a)
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
    return this.isBlockTemplate ? Wd(this.transclusionNode) : null;
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
    return n && Wd(n) || "";
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
const zu = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), z1 = zu - 10, O1 = [
  { status: "failure", value: 100 - zu },
  { status: "warning", value: 100 - z1 },
  { status: "success", value: 100 }
], kf = (e, t, n) => {
  const o = Xd(e).textContent, s = Xd(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, j1 = (e) => O1.find((t) => e <= t.value).status, H1 = (e, t) => kf(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), G1 = () => (100 - zu) / 100, Xd = (e) => {
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
class br extends Ru {
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
const an = "previous-edits", rn = "popular", tt = "topic", Be = "geography", ee = "collections", We = "automatic", qt = "seed", Kd = window.Vue.ref, { topics: q1, regions: W1 } = mw.loader.require(
  "ext.cx.articlefilters"
), il = {
  type: We,
  id: an
}, X1 = {
  type: We,
  id: rn
}, Ou = () => {
  const e = Kd(
    q1.flatMap((u) => u.topics).map((u) => u.topicId.toLowerCase())
  ), t = Kd(!1), n = (u, i) => e.value.includes(i) ? { type: tt, id: i } : null, o = (u, i) => W1.some(
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
      return d && !d.length ? (t.value = !0, il) : {
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
    return il;
  }, r = ({ type: u, id: i }) => c({ type: u, id: i }, il), l = ({ type: u, id: i }) => c({ type: u, id: i }, X1), c = (u, i) => !(u != null && u.id) || !(u != null && u.type) || !(i != null && i.id) || !(i != null && i.type) ? !1 : u.id.toLowerCase() === i.id.toLowerCase() && u.type.toLowerCase() === i.type.toLowerCase();
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
                for (let q = 0; q < A.length; q++) {
                  const Ue = A[q]();
                  if (Ue !== null)
                    return Ue;
                }
                return null;
              };
            }
            function v(A) {
              const q = f, Ue = [];
              for (let At = 0; At < A.length; At++) {
                const J = A[At]();
                if (J === null)
                  return f = q, null;
                Ue.push(J);
              }
              return Ue;
            }
            function C(A, q) {
              return () => {
                const Ue = f, At = [];
                let J = q();
                for (; J !== null; )
                  At.push(J), J = q();
                return At.length < A ? (f = Ue, null) : At;
              };
            }
            function y(A) {
              const q = A.length;
              return () => {
                let Ue = null;
                return p.slice(f, f + q) === A && (Ue = A, f += q), Ue;
              };
            }
            function _(A) {
              return () => {
                const q = p.slice(f).match(A);
                return q === null ? null : (f += q[0].length, q[0]);
              };
            }
            const E = _(/^\s+/), L = y("|"), N = y(":"), x = y("\\"), B = _(/^./), U = y("$"), j = _(/^\d+/), te = y('"'), ie = y("'"), oe = _(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), P = _(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), I = w([K, _(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function K() {
              const A = v([x, B]);
              return A === null ? null : A[1];
            }
            const Q = w([K, P]), ye = w([K, oe]);
            function $e() {
              const A = v([U, j]);
              return A === null ? null : ["REPLACE", parseInt(A[1], 10) - 1];
            }
            const xe = (Ne = _(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), R = function(A) {
              return A.toString();
            }, () => {
              const A = Ne();
              return A === null ? null : R(A);
            });
            var Ne, R;
            function z() {
              const A = v([L, C(0, Ao)]);
              if (A === null)
                return null;
              const q = A[1];
              return q.length > 1 ? ["CONCAT"].concat(q) : q[0];
            }
            function ae() {
              const A = v([xe, N, $e]);
              return A === null ? null : [A[0], A[2]];
            }
            function S() {
              const A = v([xe, N, Ao]);
              return A === null ? null : [A[0], A[2]];
            }
            function D() {
              const A = v([xe, N]);
              return A === null ? null : [A[0], ""];
            }
            const b = w([function() {
              const A = v([w([ae, S, D]), C(0, z)]);
              return A === null ? null : A[0].concat(A[1]);
            }, function() {
              const A = v([xe, C(0, z)]);
              return A === null ? null : [A[0]].concat(A[1]);
            }]), T = y("{{"), W = y("}}"), H = y("[["), X = y("]]"), G = y("["), re = y("]");
            function st() {
              const A = v([T, b, W]);
              return A === null ? null : A[1];
            }
            const Ve = w([function() {
              const A = v([C(1, Ao), L, C(1, To)]);
              return A === null ? null : [["CONCAT"].concat(A[0]), ["CONCAT"].concat(A[2])];
            }, function() {
              const A = v([C(1, Ao)]);
              return A === null ? null : [["CONCAT"].concat(A[0])];
            }]);
            function Ua() {
              let A = null;
              const q = v([H, Ve, X]);
              if (q !== null) {
                const Ue = q[1];
                A = ["WIKILINK"].concat(Ue);
              }
              return A;
            }
            function Ia() {
              let A = null;
              const q = v([G, C(1, Or), E, C(1, To), re]);
              return q !== null && (A = ["EXTLINK", q[1].length === 1 ? q[1][0] : ["CONCAT"].concat(q[1]), ["CONCAT"].concat(q[3])]), A;
            }
            const lo = _(/^[A-Za-z]+/);
            function Rr() {
              const A = _(/^[^"]*/), q = v([te, A, te]);
              return q === null ? null : q[1];
            }
            function zr() {
              const A = _(/^[^']*/), q = v([ie, A, ie]);
              return q === null ? null : q[1];
            }
            function vs() {
              const A = _(/^\s*=\s*/), q = v([E, lo, A, w([Rr, zr])]);
              return q === null ? null : [q[1], q[3]];
            }
            function _s() {
              const A = C(0, vs)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], A);
            }
            const Or = w([st, $e, Ua, Ia, function() {
              const A = C(1, I)();
              return A === null ? null : A.join("");
            }]), To = w([st, $e, Ua, Ia, function() {
              let A = null;
              const q = f, Ue = y("<"), At = _(/^\/?/), J = _(/^\s*>/), un = v([Ue, lo, _s, At, J]);
              if (un === null)
                return null;
              const Bn = f, ft = un[1], Do = C(0, To)(), jr = f, _d = v([y("</"), lo, J]);
              if (_d === null)
                return ["CONCAT", p.slice(q, Bn)].concat(Do);
              const pv = f, hv = _d[1], Sd = un[2];
              if (function(co, za, Hr, Gr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((co = co.toLowerCase()) !== (za = za.toLowerCase()) || Gr.allowedHtmlElements.indexOf(co) === -1)
                  return !1;
                const fv = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Oa = 0, wv = Hr.length; Oa < wv; Oa += 2) {
                  const qr = Hr[Oa];
                  if (Gr.allowedHtmlCommonAttributes.indexOf(qr) === -1 && (Gr.allowedHtmlAttributesByElement[co] || []).indexOf(qr) === -1 || qr === "style" && Hr[Oa + 1].search(fv) !== -1)
                    return !1;
                }
                return !0;
              }(ft, hv, Sd.slice(1)))
                A = ["HTMLELEMENT", ft, Sd].concat(Do);
              else {
                const co = (za) => za.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                A = ["CONCAT", co(p.slice(q, Bn))].concat(Do, co(p.slice(jr, pv)));
              }
              return A;
            }, function() {
              const A = C(1, ye)();
              return A === null ? null : A.join("");
            }]), Ao = w([st, $e, function() {
              const A = C(1, Q)();
              return A === null ? null : A.join("");
            }]), Ra = function() {
              const A = C(0, To)();
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
})($f);
var J1 = $f.exports;
const Yd = (e) => {
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
        const { msg: a, params: r } = Yd(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = Yd(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Pn = window.Vue.ref, eS = window.Vue.computed, kr = Pn(null), $r = Pn(null), Vr = Pn(null), La = Pn(null), ju = Pn(null), Er = Pn(null), Ef = Pn(null), Lf = Pn(null), Hu = Pn(null), { validateFilters: tS, filtersValidatorError: nS } = Ou(), Tf = {
  from: kr,
  to: $r,
  section: La,
  draft: ju,
  page: Vr,
  revision: Er,
  "active-list": Hu
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
}, Gu = (e, t) => {
  Tf[e].value = t, vr(e, t);
}, aS = (e) => {
  Gu("section", e);
}, iS = (e) => {
  Gu("page", e);
}, rS = (e) => {
  Gu("active-list", e);
}, Ta = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    M1(`Special:ContentTranslation${t}`, e)
  );
}, lS = () => {
  const e = fe(), t = new URLSearchParams(location.search);
  Vr.value = t.get("page"), kr.value = t.get("from"), $r.value = t.get("to"), La.value = t.get("section"), Er.value = t.get("revision"), Hu.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
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
  Vr.value = null, La.value = null, ju.value = null, Er.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), Ta(Object.fromEntries(e));
}, mS = () => new URLSearchParams(location.search).get("force-quick-tutorial"), F = () => ({
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
  draftURLParameter: ju,
  revisionURLParameter: Er,
  setPageURLParam: iS,
  currentSuggestionFilters: oS,
  setFilterURLParams: Af,
  activeDashboardTabParameter: Hu,
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
  return k(this, null, function* () {
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
  fetchSupportedLanguageCodes: pS,
  fetchSupportedMTProviders: hS,
  fetchCXServerToken: fS,
  addWikibaseLink: wS
}, vS = window.Vue.ref, Ja = vS([]);
let Qd = !1;
function Aa() {
  return {
    fetchSupportedLanguageCodes: () => k(this, null, function* () {
      if (!Qd) {
        Qd = !0, Ja.value = yield Lr.fetchSupportedLanguageCodes();
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
var Oe = bS;
function Da(e) {
  return !!Oe.languages[e];
}
function io(e) {
  return Da(e) && Oe.languages[e].length === 1 ? Oe.languages[e][0] : !1;
}
function kS() {
  return Oe.languages;
}
function Pa(e) {
  var t = io(e);
  return t ? Pa(t) : Da(e) ? Oe.languages[e][0] : "Zyyy";
}
function qu(e) {
  var t = io(e);
  return t ? qu(t) : Da(e) && Oe.languages[e][1] || "UNKNOWN";
}
function ka(e) {
  var t = io(e);
  return t ? ka(t) : Da(e) && Oe.languages[e][2] || e;
}
function $S() {
  var e, t = {};
  for (e in Oe.languages)
    io(e) || (t[e] = ka(e));
  return t;
}
function Df(e) {
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
function VS(e) {
  return Df([e]);
}
function Pf(e) {
  var t;
  for (t in Oe.scriptgroups)
    if (Oe.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Wu(e) {
  return Pf(Pa(e));
}
function Bf(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = io(n) || n, a = Wu(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Ff(e) {
  var t, n, o, s = {};
  for (t in Oe.languages)
    if (!io(t)) {
      for (n = 0; n < e.length; n++)
        if (qu(t).includes(e[n])) {
          o = Wu(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
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
  return Oe.rtlscripts.includes(Pa(e));
}
function AS(e) {
  return Nf(e) ? "rtl" : "ltr";
}
function DS(e) {
  return Oe.territories[e] || [];
}
function PS(e, t) {
  t.target ? Oe.languages[e] = [t.target] : Oe.languages[e] = [t.script, t.regions, t.autonym];
}
var O = {
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
  getRegions: qu,
  getScript: Pa,
  getScriptGroupOfLanguage: Wu,
  isKnown: Da,
  isRedirect: io,
  isRtl: Nf,
  sortByScriptGroup: LS,
  sortByAutonym: TS
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
      const u = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (i) => new gt({
          sentences: RS(i),
          node: i
        })
      );
      return new no({ id: c, subSections: u, isLeadSection: l });
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
}, Xu = 120, zS = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Xu,
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
    var c, u;
    const a = s.query.pages;
    if (!a || !a.length || (c = a[0]) != null && c.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (u = a[0].pageprops) == null ? void 0 : u.wikibase_item;
    return l ? Object.freeze(new BS(l, r)) : null;
  });
}, jS = (e, t, n) => {
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
}, HS = (e, t, n, o = null) => {
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
  ), a = GS(
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
}, GS = (e, t, n, o = null) => {
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
}, qS = (e) => {
  const t = U1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Xu,
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
}, WS = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount|pageprops",
    piprop: "thumbnail",
    pithumbsize: Xu,
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
  fetchPages: zS,
  fetchLanguageTitles: OS,
  fetchPageContent: HS,
  fetchNearbyPages: qS,
  searchPagesByTitlePrefix: WS,
  fetchLanguageLinksForLanguage: jS
}, XS = window.Vuex.useStore, Eo = () => {
  const e = XS();
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
}, KS = window.Vuex.useStore, Tr = () => {
  const e = KS(), {
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
], YS = [
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
], QS = [
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
], JS = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], ZS = [
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
], ey = {
  en: Uf,
  es: YS,
  bn: QS,
  fr: JS,
  de: ZS
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
class Ku {
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
    }), this.collection = new Ku(u);
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
    }), this.collection = new Ku(g);
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
}, ty = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits", ny = () => k(void 0, null, function* () {
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
}, ku = {
  easy: 1e3,
  medium: 4e3,
  hard: 12e3
}, jf = (e, t) => !e || e < 0 ? Xe.unknown : e < t.easy ? Xe.stub : e < t.medium ? Xe.easy : e < t.hard ? Xe.medium : Xe.hard, Hf = (e) => jf(e, Of), Yu = (e) => jf(e, ku), oy = (e) => {
  if (!e)
    return !1;
  const t = Hf(e);
  return t === Xe.stub || t === Xe.easy;
}, sy = (e) => {
  if (!e)
    return !1;
  const t = Yu(e);
  return t === Xe.stub || t === Xe.easy;
}, Gf = (e) => e ? Yu(e) === Xe.easy : !1;
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
const ay = Uf, ln = 6, iy = (e, t) => k(void 0, null, function* () {
  if (yield ny()) {
    let o;
    e ? e === "/sections" && (o = ku) : (o = Of, Gt || (t.lead_section = !0, o = ku)), o && (t.min_size = o[Xe.easy], t.max_size = o[Xe.medium] - 1);
  } else
    !Gt && e !== "/sections" && (t.lead_section = !0);
}), Et = (n) => k(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
  let o = mw.config.get("wgRecommendToolAPIURL");
  yield iy(e, t), e && (o += e);
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
function ry() {
  return k(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Et({ urlPostfix: t, urlParams: e })) || [], o = {};
      for (const s in n)
        o[s] = n[s].map(
          (a) => new Ku(a)
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
function ly(e, t, n, o) {
  const s = {
    collection: e
  };
  return t && t.length ? s.qids = t.join("|") : n && o && o.length && (s.language = n, s.titles = o.join("|")), Et({
    urlPostfix: "/page-collection-membership",
    urlParams: s
  });
}
function cy(e) {
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
function uy(s, a) {
  return k(this, arguments, function* (e, t, n = null, o = ln) {
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
const dy = (e, t) => k(void 0, null, function* () {
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
}), gy = (e, t) => k(void 0, null, function* () {
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
}), my = (l) => k(void 0, [l], function* ({
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
}), py = (l) => k(void 0, [l], function* ({
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
function hy(e, t, n) {
  return k(this, null, function* () {
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
function fy(e, t, n = null) {
  return k(this, null, function* () {
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
function wy(a) {
  return k(this, arguments, function* ({
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
function vy(a) {
  return k(this, arguments, function* ({
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
function _y(a) {
  return k(this, arguments, function* ({
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
function Sy(a) {
  return k(this, arguments, function* ({
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
function yy(e) {
  return k(this, null, function* () {
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
function Cy(e, t) {
  return k(this, null, function* () {
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
function xy(e) {
  const t = ay.map((o) => encodeURIComponent(o)).join("|"), n = Z.getCXServerUrl(
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
const by = (e, t, n) => {
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
}, ky = (e) => {
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
}, $y = () => {
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
  fetchFavorites: $y,
  fetchPageSuggestions: uy,
  fetchSectionSuggestion: hy,
  fetchSectionSuggestions: fy,
  fetchAppendixTargetSectionTitles: xy,
  fetchArticleSections: Cy,
  markFavorite: by,
  unmarkFavorite: ky,
  fetchUserEdits: yy,
  fetchMostPopularPageSuggestions: dy,
  fetchMostPopularSectionSuggestions: gy,
  fetchPageSuggestionsByTopics: wy,
  fetchSectionSuggestionsByTopics: vy,
  fetchPageSuggestionsByCountries: _y,
  fetchSectionSuggestionsByCountries: Sy,
  fetchPageCollectionGroups: ry,
  fetchPageSuggestionsByCollections: my,
  fetchSectionSuggestionsByCollections: py,
  fetchFeaturedCollectionDataByLanguage: cy,
  fetchPageCollectionMembership: ly
}, Vy = window.Vuex.useStore, gs = () => {
  const e = Vy(), { sourceLanguage: t, targetLanguage: n } = Fe(e), o = (l) => {
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
function Ey(e) {
  const t = [...e];
  for (let n = t.length - 1; n > 0; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [t[n], t[o]] = [t[o], t[n]];
  }
  return t;
}
class Ly {
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
    this.seeds = Ey(t);
  }
}
const Ty = window.Vuex.useStore, Qu = window.Vue.ref, Ay = Qu([]), Dy = Qu([]);
let rl = !1, ll = !1, Jd = !1;
const ei = Qu([]);
let Cs = null;
const cl = {
  page: Ay,
  section: Dy
}, Wf = () => {
  const e = Ty(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = F(), o = () => k(void 0, null, function* () {
    ll || (ei.value = yield ge.fetchUserEdits(t.value).then((u) => (ll = !0, u)));
  }), s = () => k(void 0, null, function* () {
    let u = e.getters["translator/getTranslationsByStatus"]("published");
    if (u = u.filter(
      (i) => i.sourceLanguage === t.value
    ), u.length && !rl)
      return rl = !0, u.map(
        (i) => i.sourceTitle
      );
    if (rl = !0, !ll && (yield o(), ei.value.length > 0))
      return ei.value;
    if (!Jd) {
      const i = yield ge.fetchUserEdits(n.value).then((d) => (Jd = !0, d));
      if (i.length)
        return Vo.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (u) => {
    let i = cl[u].value.find(
      (d) => d.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new Ly({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), cl[u].value.push(i)), i;
  }, r = () => k(void 0, null, function* () {
    let u = !1, i = [];
    do {
      i = yield s(), i || (u = !0);
      for (const d in cl) {
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
    getSuggestionSeed: (u) => k(void 0, null, function* () {
      let i = a(u);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: o,
    previousEditsInSource: ei
  };
}, Py = 5;
function $o(e) {
  return k(this, null, function* () {
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
  } = F(), { getSuggestionSeed: o } = Wf(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = gs(), l = {
    id: an,
    type: We
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => k(void 0, null, function* () {
      const d = [];
      return yield $o(() => k(void 0, null, function* () {
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
    fetchSectionSuggestionsBasedOnEdits: (i) => k(void 0, null, function* () {
      const d = [];
      return yield $o(() => k(void 0, null, function* () {
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
}, Ju = window.Vue.ref, xs = "ungrouped", Zd = Ju({}), eg = Ju({}), tg = Ju(!1);
let ul = null;
const Ar = () => {
  const e = () => k(void 0, null, function* () {
    try {
      const n = yield ge.fetchPageCollectionGroups(), o = Object.fromEntries(
        Object.keys(n).sort((s, a) => s === xs ? 1 : a === xs ? -1 : s.localeCompare(a)).map((s) => [s, n[s]])
      );
      o[xs] && (o[xs] = o[xs].sort(
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
}, dl = window.Vue.computed, Dr = window.Vue.ref, Ny = window.Vue.watch, My = new mw.cx.SiteMapper(), _r = My.getCurrentWikiLanguageCode(), Uy = mw.config.get(
  "wgContentTranslationFeaturedCollection"
), Iy = mw.config.get(
  "wgContentTranslationFeaturedCollectionCommunityName"
), Ry = mw.config.get(
  "wgContentTranslationFeaturedCollectionDescription"
), zy = mw.config.get(
  "wgContentTranslationFeaturedCollectionLink"
), Xf = Dr({
  [_r]: new qf(
    Uy,
    Ry,
    Iy,
    zy,
    _r
  )
}), $u = Dr({
  [_r]: Promise.resolve()
}), Vu = Dr({
  [_r]: !0
});
let ng = !1;
const og = (e) => {
  if (!e || $u.value[e])
    return;
  const t = ge.fetchFeaturedCollectionDataByLanguage(e).then((n) => {
    n && (Xf.value[e] = n), Vu.value[e] = !0;
  }).catch((n) => {
    Vu.value[e] = !0, console.error("Failed to fetch featured collection:", n);
  });
  $u.value[e] = t;
}, Oy = (e, t) => !e || !Array.isArray(t) ? !1 : t.some(
  (n) => n.name.toLowerCase() === e.toLowerCase()
), Wt = (e = void 0) => {
  const { pageCollections: t, fetchPageCollectionGroups: n } = Ar();
  let o;
  if (e)
    o = Dr(e), e && og(e);
  else {
    const { targetLanguageURLParameter: l } = F();
    o = l, ng || (Ny(
      o,
      (c) => {
        c && og(c);
      },
      { immediate: !0 }
    ), ng = !0);
  }
  const s = dl(() => {
    const l = o.value, c = Xf.value[l];
    return c != null && c.name && Oy(c.name, t.value) ? c : null;
  }), a = dl(
    () => Vu.value[o.value] || !1
  ), r = dl(
    () => Promise.all([
      n(),
      $u.value[o.value]
    ])
  );
  return {
    featuredCollection: s,
    featuredCollectionFetched: a,
    featuredCollectionPromise: r
  };
}, jy = window.Vuex.useStore, Hy = window.Vue.computed, Pr = window.Vue.ref, sg = Pr({}), ag = Pr({}), ig = Pr({}), rg = Pr({}), lg = (e, t) => e && t.value[e] || null, cg = (e, t) => e ? t.value[e] ? t.value[e] === -1 ? -1 : t.value[e] + 1 : 0 : null, Zu = () => {
  const e = jy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), s = Hy(() => {
    var f;
    return ((f = o.value) == null ? void 0 : f.type) !== ee ? null : o.value.id;
  }), { featuredCollection: a, featuredCollectionPromise: r } = Wt(), {
    isSectionSuggestionValid: l,
    isPageSuggestionValid: c,
    sectionSuggestionExists: u
  } = gs(), i = (f = null) => f ? { id: f, type: ee } : o.value, d = (f) => k(void 0, null, function* () {
    var L;
    let w = null, v = null, C = null;
    if (!f)
      yield r.value, w = ((L = a.value) == null ? void 0 : L.name) || null;
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
    const E = _.recommendations.filter(
      (N) => c(N)
    );
    return y.push(...E), y.forEach((N) => {
      N.suggestionProvider = i(f);
    }), y;
  }), g = () => d(s.value), m = () => k(void 0, null, function* () {
    var w;
    (yield d(
      ((w = a.value) == null ? void 0 : w.name) || null
    )).forEach(
      (v) => e.commit("suggestions/addPageSuggestion", v)
    );
  }), p = (f) => k(void 0, null, function* () {
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
    const E = _.recommendations.filter(
      (x) => l(x)
    ), L = _.recommendations.filter(
      (x) => !l(x)
    );
    return y.push(...E), L.forEach((x) => {
      x && !u(x) && (x.isListable = !1, e.commit("suggestions/addSectionSuggestion", x));
    }), y.forEach((x) => {
      x.suggestionProvider = i(f);
    }), y;
  });
  return {
    fetchSectionSuggestionsByCollections: () => p(s.value),
    fetchPageSuggestionsByCollections: g,
    fetchPageSuggestionsByFeaturedCollections: m,
    doFetchPageSuggestionsByCollection: d,
    doFetchSectionSuggestionsByCollection: p
  };
}, Gy = window.Vuex.useStore, qy = () => {
  const e = Gy(), {
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
  } = Zu(), m = (f, w, v, C, y) => k(void 0, null, function* () {
    var E;
    yield i.value;
    const _ = (E = u.value) == null ? void 0 : E.name;
    if (_) {
      let L = w(_);
      if (!L) {
        const [N = null, ...x] = yield f(_);
        L = N, x.forEach((B) => {
          e.commit(v, B);
        });
      }
      L && (C.push(L), y--);
    }
    return y;
  });
  return { fetchSectionSuggestionsPopular: (f) => k(void 0, null, function* () {
    const w = [];
    return f = yield m(
      g,
      s,
      "suggestions/addSectionSuggestion",
      w,
      f
    ), yield $o(() => k(void 0, null, function* () {
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
  }), fetchPageSuggestionsPopular: (f) => k(void 0, null, function* () {
    const w = [];
    return f = yield m(
      d,
      a,
      "suggestions/addPageSuggestion",
      w,
      f
    ), yield $o(() => k(void 0, null, function* () {
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
const Wy = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', Xy = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', Ky = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', Yy = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', Qy = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', Jy = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', Zy = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', eC = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', tC = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', nC = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', oC = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', sC = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', aC = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', iC = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', rC = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', lC = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', cC = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', uC = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', dC = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Kf = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', gC = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', mC = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', pC = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', hC = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', fC = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', wC = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', vC = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', _C = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', SC = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', yC = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', CC = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', xC = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', bC = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', kC = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', $C = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', VC = '<circle cx="6" cy="6" r="3"/><circle cx="14" cy="6" r="3"/><path d="M14 10c3.31 0 6 1.79 6 4v2h-6v-2c0-1.48-1.21-2.77-3-3.46.88-.35 1.91-.54 3-.54m-8 0c3.31 0 6 1.79 6 4v2H0v-2c0-2.21 2.69-4 6-4"/>', Yf = Wy, EC = Xy, Qf = {
  ltr: Ky,
  shouldFlip: !0
}, Jf = {
  ltr: Yy,
  shouldFlip: !0
}, ed = {
  ltr: Qy,
  shouldFlip: !0
}, Zf = Jy, ew = Zy, tw = eC, LC = tC, TC = nC, ms = oC, AC = sC, td = aC, nd = iC, Eu = rC, DC = lC, PC = {
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
}, nw = pC, Ba = {
  ltr: hC,
  shouldFlip: !0
}, UC = fC, IC = wC, ps = {
  ltr: vC,
  shouldFlip: !0
}, od = {
  ltr: _C,
  shouldFlip: !0
}, RC = {
  ltr: SC,
  shouldFlip: !0
}, ow = yC, zC = CC, Lu = xC, OC = bC, jC = kC, sw = $C, sd = {
  ltr: VC,
  shouldFlip: !0
}, HC = {
  [an]: sw,
  [rn]: FC,
  [ee]: ed
}, GC = {
  [ee]: BC,
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
    return this.type === We ? this.id : this.type;
  }
  get icon() {
    return HC[this.provider] || null;
  }
  get expandableIcon() {
    return GC[this.provider] || this.icon;
  }
}
const bs = window.Vue.computed, { topics: ug, regions: dg } = mw.loader.require(
  "ext.cx.articlefilters"
), qC = (e) => new ya({
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
  } = Ou(), i = new bt({
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
    const P = new ya({
      id: We,
      type: We,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [i, d]
    });
    return Object.keys(p.value).length > 1 && P.filters.push(g), P;
  }), w = () => {
    const P = me({}, p.value);
    delete P.ungrouped;
    const I = [];
    for (const Q in P) {
      const ye = P[Q].map(
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
  ), C = new ya({
    id: Be,
    type: Be,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: dg.map(
      (P) => new bt({
        id: P.id,
        label: P.label,
        type: Be,
        subFilters: P.countries.map(
          (I) => new bt({
            id: I.id,
            label: I.label,
            type: Be
          })
        )
      })
    )
  }), y = bs(() => {
    const P = [
      f.value,
      ...ug.map(qC),
      C
    ];
    return v.value.filters.length && P.splice(1, 0, v.value), P;
  }), _ = bs(
    () => !h.value || !s.value
  ), E = bs(
    () => {
      var P, I;
      return new bt({
        id: (P = o.value) == null ? void 0 : P.name,
        label: (I = o.value) == null ? void 0 : I.name,
        type: ee
      });
    }
  ), L = () => {
    if (_.value)
      return [];
    const P = x(), I = [];
    return o.value && I.push(E.value), !l(P) && !c(P) && !u(P, E.value) && I.push(P), I.push(i, d), I;
  }, N = (P) => {
    n(P.type, P.id);
  }, x = () => t.value.type === qt ? new bt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : y.value.flatMap((P) => P.filters).flatMap((P) => [P, ...P.subFilters || []]).find(B), B = (P) => u(P, t.value);
  return {
    allFilters: y,
    getFiltersSummary: L,
    selectFilter: N,
    isFilterSelected: B,
    getArticleTopics: (P) => {
      const K = ug.flatMap((Q) => Q.topics).find((Q) => Q.topicId === P);
      return K ? K.articletopics : [];
    },
    waitingForPageCollectionsFetch: _,
    findSelectedFilter: x,
    validateURLFilterWithCollections: () => {
      if (!h.value)
        return;
      const P = a(
        {
          type: t.value.type,
          id: t.value.id
        },
        m.value
      );
      n(P.type, P.id), r.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (P) => {
      const I = dg.find((K) => K.id === P);
      return I ? I.countries.map((K) => K.id) : [P];
    },
    setFeaturedCollectionFilterIfNeeded: () => {
      if (!l(t.value))
        return;
      const P = a(
        E.value,
        m.value
      );
      N(P);
    },
    isFilteringByFeaturedCollection: () => {
      var I;
      const P = x();
      return (P == null ? void 0 : P.id) === ((I = o.value) == null ? void 0 : I.name);
    }
  };
}, WC = window.Vuex.useStore, XC = () => {
  const e = WC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = gs(), { getArticleTopics: l } = ro(), { featuredCollection: c, featuredCollectionPromise: u } = Wt();
  return {
    fetchPageSuggestionsByTopics: (g) => k(void 0, null, function* () {
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
    fetchSectionSuggestionsByTopics: (g) => k(void 0, null, function* () {
      yield u.value;
      const m = o.value.id, p = {
        id: m,
        type: tt
      }, h = l(m), f = [];
      return yield $o(() => k(void 0, null, function* () {
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
}, KC = window.Vuex.useStore, YC = () => {
  const e = KC(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = gs(), { getCountries: l } = ro(), { featuredCollection: c, featuredCollectionPromise: u } = Wt();
  return {
    fetchPageSuggestionsByCountries: (g) => k(void 0, null, function* () {
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
    fetchSectionSuggestionsByCountries: (g) => k(void 0, null, function* () {
      yield u.value;
      const m = [];
      return yield $o(() => k(void 0, null, function* () {
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
  } = F(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = gs();
  return {
    fetchPageSuggestionsBySeed: (u) => k(void 0, null, function* () {
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
    fetchSectionSuggestionsBySeed: (u) => k(void 0, null, function* () {
      const i = [], d = o.value.id;
      return yield $o(() => k(void 0, null, function* () {
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
}, ZC = () => {
  const { currentSuggestionFilters: e } = F(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = Fy(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = qy(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = XC(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: c
  } = YC(), {
    fetchPageSuggestionsByCollections: u,
    fetchSectionSuggestionsByCollections: i
  } = Zu(), { fetchPageSuggestionsBySeed: d, fetchSectionSuggestionsBySeed: g } = JC(), m = {
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
}, ad = () => {
  const { featuredCollectionPromise: e, featuredCollection: t } = Wt();
  function n(o, s, a, r) {
    return k(this, null, function* () {
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
  const { inFeaturedCollection: e } = ad(), t = (s) => {
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
    return k(this, null, function* () {
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
          (C) => C.sourceLanguage
        );
        for (const C in v) {
          const y = v[C], _ = y.map((L) => r(L)), E = e(
            null,
            C,
            _,
            w.value.name
          );
          d.push({ promise: E, items: y });
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
}, ex = window.Vuex.useStore, id = () => {
  const e = ex(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Tr(), { sourceLanguageURLParameter: o } = F(), s = Eo(), { addFeaturedCollectionFlag: a } = Br(), { isFilteringByFeaturedCollection: r } = ro(), l = () => {
    const p = t(), h = e.state.suggestions.maxSuggestionsPerSlice;
    return h - p.length % h;
  }, c = () => {
    const p = n(), h = e.state.suggestions.maxSuggestionsPerSlice;
    return h - p.length % h;
  }, {
    getCurrentPageSuggestionProvider: u,
    getCurrentSectionSuggestionProvider: i
  } = ZC(), d = (p) => {
    try {
      const h = p.map((f) => f.sourceTitle);
      if (h.length)
        return s(o.value, h);
    } catch (h) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => k(void 0, null, function* () {
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
    fetchNextPageSuggestionsSlice: () => k(void 0, null, function* () {
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
}, tx = window.Vuex.useStore, aw = () => {
  const e = tx();
  return (t) => k(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ge.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, nx = window.Vuex.useStore, iw = () => {
  const e = nx(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = id(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Tr(), { targetLanguageURLParameter: a } = F(), r = aw();
  return () => k(void 0, null, function* () {
    const l = s(0), c = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, i = l.length === u, d = c.length === u;
    i && d || (yield r(a.value), t(), n());
  });
}, ox = window.Vuex.useStore, sx = window.Vue.ref, gl = /* @__PURE__ */ new Map(), gg = sx([]), Fa = () => {
  const e = ox(), t = Eo();
  return { loadSuggestion: (s, a, r) => {
    const l = `${s}:${a}:${r}`;
    if (gl.has(l))
      return gl.get(l);
    const u = (() => k(void 0, null, function* () {
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
      return gg.value.push(i), i;
    }))();
    return gl.set(l, u), u;
  }, getLoadedSuggestion: (s, a, r) => gg.value.find(
    (l) => l.sourceLanguage === s && l.targetLanguage === a && l.sourceTitle === r
  ) || null };
}, mg = window.Vue.computed, ax = window.Vuex.useStore, cn = () => {
  const e = ax(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = F(), s = mg(
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
}, rw = window.Vuex.useStore, { setLanguageURLParams: ix } = F(), rd = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), ix(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, lw = () => {
  const e = rw(), t = iw();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Fe(e);
    n === o && (n = a.value, o = s.value), rd(e, n, o), t();
  };
}, rx = () => {
  const e = rw(), { loadSuggestion: t } = Fa(), { currentLanguageTitleGroup: n, targetPageExists: o } = cn(), s = Eo();
  return (a, r) => k(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      setPageURLParam: u,
      clearSectionURLParameter: i
    } = F();
    a === r && (a = c.value, r = l.value);
    const d = n.value.getTitleForLanguage(a);
    rd(e, a, r), u(d), o.value ? (i(), yield t(
      l.value,
      c.value,
      d
    )) : yield s(l.value, [d]);
  });
}, lx = window.Vuex.useStore, cx = window.Vue.ref, pg = cx(!1), cw = () => {
  const e = lx(), { supportedLanguageCodes: t, fetchSupportedLanguageCodes: n } = Aa(), { sourceLanguageURLParameter: o, targetLanguageURLParameter: s } = F(), a = () => {
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
  return { initializeApplicationLanguages: () => k(void 0, null, function* () {
    yield n();
    const { sourceLanguage: l, targetLanguage: c } = a();
    rd(e, l, c), pg.value = !0;
  }), applicationLanguagesInitialized: pg };
};
const ux = window.Vue.resolveDynamicComponent, hg = window.Vue.openBlock, fg = window.Vue.createBlock, dx = window.Vue.Transition, ks = window.Vue.withCtx, $s = window.Vue.createVNode, gx = window.Vue.resolveComponent, ml = window.Vue.unref, mx = window.Vuex.useStore, wg = window.Vue.computed, px = window.Vue.onMounted, hx = window.Vue.inject, fx = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = F(), { initializeApplicationLanguages: n } = cw();
    t(), n();
    const o = hx("breakpoints"), s = wg(() => o.value.mobile), a = mx(), r = wg(
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
      return hg(), fg(ml(y0), { id: "contenttranslation" }, {
        default: ks(() => [
          $s(ml(M), { class: "cx-container" }, {
            default: ks(() => [
              $s(ml(V), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: ks(() => [
                  $s(u, null, {
                    default: ks(({ Component: i, route: d }) => [
                      $s(dx, {
                        name: s.value ? d.meta.transitionName : ""
                      }, {
                        default: ks(() => [
                          (hg(), fg(ux(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      $s(N1)
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
class ld extends Ru {
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
const Fr = mw.user.isAnon() ? void 0 : "user", dw = (e) => {
  if (e === "assertuserfailed")
    throw new us();
};
function gw(e, t = null) {
  return k(this, null, function* () {
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
    return t && (n.offset = t), new mw.Api().get(n).then((s) => k(this, null, function* () {
      var l;
      const a = s.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (c) => new br(Ye(me({}, c), { status: e }))
      ) : r = a.map(
        (c) => new ld(Ye(me({}, c), { status: e }))
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
  return k(this, null, function* () {
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
const Cx = (e, t, n) => {
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
    assert: Fr,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, $x = () => {
  const e = {
    assert: Fr,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new ld(n.cxcheckunreviewed.translation)
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
  return k(this, arguments, function* ({ commit: e }) {
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
  appendixSectionTitles: ey
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
function Rx(o) {
  return k(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield Vo.fetchNearbyPages(s);
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
}, Gx = {
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
}, qx = {
  namespaced: !0,
  state: Hx,
  mutations: Gx
}, Wx = window.Vuex.createStore, Xx = Wx({
  modules: { translator: Px, suggestions: Mx, mediawiki: jx, application: qx }
});
function Kx() {
  return pw().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function pw() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Yx = typeof Proxy == "function", Qx = "devtools-plugin:setup", Jx = "plugin:settings:set";
let Bo, Tu;
function Zx() {
  var e;
  return Bo !== void 0 || (typeof window != "undefined" && window.performance ? (Bo = !0, Tu = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Bo = !0, Tu = global.perf_hooks.performance) : Bo = !1), Bo;
}
function eb() {
  return Zx() ? Tu.now() : Date.now();
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
    return k(this, null, function* () {
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
const nn = window.Vue.computed, Ca = window.Vue.unref, ob = window.Vue.watchEffect, fw = window.Vue.defineComponent, sb = window.Vue.reactive, ww = window.Vue.h, pl = window.Vue.provide, ab = window.Vue.ref, vw = window.Vue.watch, ib = window.Vue.shallowRef, rb = window.Vue.shallowReactive, lb = window.Vue.nextTick, Dn = typeof window != "undefined";
function cb(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const ne = Object.assign;
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
const ub = /\/$/, db = (e) => e.replace(ub, "");
function fl(e, t, n = "/") {
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
    if (!mb(e[n], t[n]))
      return !1;
  return !0;
}
function mb(e, t) {
  return pt(e) ? yg(e, t) : pt(t) ? yg(t, e) : e === t;
}
function yg(e, t) {
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
var $a;
(function(e) {
  e.pop = "pop", e.push = "push";
})($a || ($a = {}));
var ba;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ba || (ba = {}));
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
const Nr = () => ({
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
function Cg(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Au = /* @__PURE__ */ new Map();
function Sb(e, t) {
  Au.set(e, t);
}
function yb(e) {
  const t = Au.get(e);
  return Au.delete(e), t;
}
let Cb = () => location.protocol + "//" + location.host;
function Sw(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), _g(c, "");
  }
  return _g(n, e) + o + s;
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
    g.state && g.replaceState(ne({}, g.state, { scroll: Nr() }), "");
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
    const i = ne({}, t.state, xg(
      s.value.back,
      // keep back and forward entries but override current position
      c,
      s.value.forward,
      !0
    ), u, { position: s.value.position });
    a(c, i, !0), o.value = c;
  }
  function l(c, u) {
    const i = ne(
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
    const d = ne({}, xg(o.value, c, null), { position: i.position + 1 }, u);
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
  const s = ne({
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
}, Du = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var bg;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(bg || (bg = {}));
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
  return {}.NODE_ENV !== "production" ? ne(new Error(Eb[e](t)), {
    type: e,
    [Du]: !0
  }, t) : ne(new Error(), {
    type: e,
    [Du]: !0
  }, t);
}
function dn(e, t) {
  return e instanceof Error && Du in e && (t == null || !!(e.type & t));
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
const kg = "[^/]+?", Ab = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Db = /[.+*?^${}()[\]/\\]/g;
function Pb(e, t) {
  const n = ne({}, Ab, t), o = [];
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
        d || (C = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && u.length < 2 ? `(?:/${C})` : "/" + C), f && (C += "?"), s += C, m += 20, f && (m += -8), h && (m += -20), v === ".*" && (m += -50);
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
  const s = ne(o, {
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
  t = Lg({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, d, g) {
    const m = !g, p = zb(i);
    ({}).NODE_ENV !== "production" && Gb(p, d), p.aliasOf = g && g.record;
    const h = Lg(t, i), f = [
      p
    ];
    if ("alias" in i) {
      const C = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const y of C)
        f.push(ne({}, p, {
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
      if (d && y[0] !== "/") {
        const _ = d.record.path, E = _[_.length - 1] === "/" ? "" : "/";
        C.path = d.record.path + (y && E + y);
      }
      if ({}.NODE_ENV !== "production" && C.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (w = Ib(C, d, h), {}.NODE_ENV !== "production" && d && y[0] === "/" && qb(w, d), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && Hb(g, w)) : (v = v || w, v !== w && v.alias.push(w), m && i.name && !Eg(w) && r(i.name)), p.children) {
        const _ = p.children;
        for (let E = 0; E < _.length; E++)
          a(_[E], w, g && g.children[E]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && c(w);
    }
    return v ? () => {
      r(v);
    } : xa;
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
    n.splice(d, 0, i), i.record.name && !Eg(i) && o.set(i.record.name, i);
  }
  function u(i, d) {
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
      h = g.record.name, m = ne(
        // paramsFromLocation is a new object
        Vg(
          d.params,
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
      if (g = d.name ? o.get(d.name) : n.find((v) => v.re.test(d.path)), !g)
        throw cs(1, {
          location: i,
          currentLocation: d
        });
      h = g.record.name, m = ne({}, d.params, i.params), p = g.stringify(m);
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
function Vg(e, t) {
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
function Eg(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function jb(e) {
  return e.reduce((t, n) => ne(t, n.meta), {});
}
function Lg(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Pu(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Hb(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Pu.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Pu.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Gb(e, t) {
  t && t.record.name && !e.name && !e.path && Y(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function qb(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Pu.bind(null, n)))
      return Y(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Cw(e, t) {
  return t.children.some((n) => n === e || Cw(e, n));
}
const xw = /#/g, Wb = /&/g, Xb = /\//g, Kb = /=/g, Yb = /\?/g, bw = /\+/g, Qb = /%5B/g, Jb = /%5D/g, kw = /%5E/g, Zb = /%60/g, $w = /%7B/g, ek = /%7C/g, Vw = /%7D/g, tk = /%20/g;
function cd(e) {
  return encodeURI("" + e).replace(ek, "|").replace(Qb, "[").replace(Jb, "]");
}
function nk(e) {
  return cd(e).replace($w, "{").replace(Vw, "}").replace(kw, "^");
}
function Bu(e) {
  return cd(e).replace(bw, "%2B").replace(tk, "+").replace(xw, "%23").replace(Wb, "%26").replace(Zb, "`").replace($w, "{").replace(Vw, "}").replace(kw, "^");
}
function ok(e) {
  return Bu(e).replace(Kb, "%3D");
}
function sk(e) {
  return cd(e).replace(xw, "%23").replace(Yb, "%3F");
}
function ak(e) {
  return e == null ? "" : sk(e).replace(Xb, "%2F");
}
function Va(e) {
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
    const a = o[s].replace(bw, " "), r = a.indexOf("="), l = Va(r < 0 ? a : a.slice(0, r)), c = r < 0 ? null : Va(a.slice(r + 1));
    if (l in t) {
      let u = t[l];
      pt(u) || (u = t[l] = [u]), u.push(c);
    } else
      t[l] = c;
  }
  return t;
}
function Tg(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = ok(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (pt(o) ? o.map((a) => a && Bu(a)) : [o && Bu(o)]).forEach((a) => {
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
const lk = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Ag = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Mr = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Ew = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Fu = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
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
function Dg(e) {
  const t = ls(Mr), n = ls(Ew), o = nn(() => t.resolve(Ca(e.to))), s = nn(() => {
    const { matched: c } = o.value, { length: u } = c, i = c[u - 1], d = n.matched;
    if (!i || !d.length)
      return -1;
    const g = d.findIndex(ao.bind(null, i));
    if (g > -1)
      return g;
    const m = Pg(c[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Pg(i) === m && // avoid comparing the child with its parent
      d[d.length - 1].path !== m ? d.findIndex(ao.bind(null, c[u - 2])) : g
    );
  }), a = nn(() => s.value > -1 && pk(n.params, o.value.params)), r = nn(() => s.value > -1 && s.value === n.matched.length - 1 && _w(n.params, o.value.params));
  function l(c = {}) {
    return mk(c) ? t[Ca(e.replace) ? "replace" : "push"](
      Ca(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(xa) : Promise.resolve();
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
  useLink: Dg,
  setup(e, { slots: t }) {
    const n = sb(Dg(e)), { options: o } = ls(Mr), s = nn(() => ({
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
function Pg(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Bg = (e, t, n) => e != null ? e : t != null ? t : n, hk = /* @__PURE__ */ fw({
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
    const o = ls(Fu), s = nn(() => e.route || o.value), a = ls(Ag, 0), r = nn(() => {
      let u = Ca(a);
      const { matched: i } = s.value;
      let d;
      for (; (d = i[u]) && !d.components; )
        u++;
      return u;
    }), l = nn(() => s.value.matched[r.value]);
    pl(Ag, nn(() => r.value + 1)), pl(lk, l), pl(Fu, s);
    const c = ab();
    return vw(() => [c.value, l.value, e.name], ([u, i, d], [g, m, p]) => {
      i && (i.instances[d] = u, m && m !== i && u && u === g && (i.leaveGuards.size || (i.leaveGuards = m.leaveGuards), i.updateGuards.size || (i.updateGuards = m.updateGuards))), u && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !ao(i, m) || !g) && (i.enterCallbacks[d] || []).forEach((h) => h(u));
    }, { flush: "post" }), () => {
      const u = s.value, i = e.name, d = l.value, g = d && d.components[i];
      if (!g)
        return Fg(n.default, { Component: g, route: u });
      const m = d.props[i], p = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null, f = ww(g, ne({}, p, t, {
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
        (pt(f.ref) ? f.ref.map((C) => C.i) : [f.ref.i]).forEach((C) => {
          C.__vrv_devtools = w;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Fg(n.default, { Component: f, route: u }) || f
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
function Es(e, t) {
  const n = ne({}, e, {
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
function ti(e) {
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
        value: Es(t.currentRoute.value, "Current Route")
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
      d.forEach(Fw), i.filter && (d = d.filter((g) => (
        // save matches state based on the payload
        Nu(g, i.filter.toLowerCase())
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
function Nu(e, t) {
  const n = String(e.re).match(kk);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Nu(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Va(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Nu(r, t));
}
function $k(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function Vk(e) {
  const t = Rb(e.routes, e), n = e.parseQuery || ik, o = e.stringifyQuery || Tg, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Vs(), r = Vs(), l = Vs(), c = ib(Nn);
  let u = Nn;
  Dn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = hl.bind(null, (S) => "" + S), d = hl.bind(null, ak), g = (
    // @ts-expect-error: intentionally avoid the type check
    hl.bind(null, Va)
  );
  function m(S, D) {
    let b, T;
    return yw(S) ? (b = t.getRecordMatcher(S), T = D) : T = S, t.addRoute(T, b);
  }
  function p(S) {
    const D = t.getRecordMatcher(S);
    D ? t.removeRoute(D) : {}.NODE_ENV !== "production" && Y(`Cannot remove non-existent route "${String(S)}"`);
  }
  function h() {
    return t.getRoutes().map((S) => S.record);
  }
  function f(S) {
    return !!t.getRecordMatcher(S);
  }
  function w(S, D) {
    if (D = ne({}, D || c.value), typeof S == "string") {
      const G = fl(n, S, D.path), re = t.resolve({ path: G.path }, D), st = s.createHref(G.fullPath);
      return {}.NODE_ENV !== "production" && (st.startsWith("//") ? Y(`Location "${S}" resolved to "${st}". A resolved location cannot start with multiple slashes.`) : re.matched.length || Y(`No match found for location with path "${S}"`)), ne(G, re, {
        params: g(re.params),
        hash: Va(G.hash),
        redirectedFrom: void 0,
        href: st
      });
    }
    let b;
    if ("path" in S)
      ({}).NODE_ENV !== "production" && "params" in S && !("name" in S) && // @ts-expect-error: the type is never
      Object.keys(S.params).length && Y(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), b = ne({}, S, {
        path: fl(n, S.path, D.path).path
      });
    else {
      const G = ne({}, S.params);
      for (const re in G)
        G[re] == null && delete G[re];
      b = ne({}, S, {
        params: d(G)
      }), D.params = d(D.params);
    }
    const T = t.resolve(b, D), W = S.hash || "";
    ({}).NODE_ENV !== "production" && W && !W.startsWith("#") && Y(`A \`hash\` should always start with the character "#". Replace "${W}" with "#${W}".`), T.params = i(g(T.params));
    const H = gb(o, ne({}, S, {
      hash: nk(W),
      path: T.path
    })), X = s.createHref(H);
    return {}.NODE_ENV !== "production" && (X.startsWith("//") ? Y(`Location "${S}" resolved to "${X}". A resolved location cannot start with multiple slashes.`) : T.matched.length || Y(`No match found for location with path "${"path" in S ? S.path : S}"`)), ne({
      fullPath: H,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: W,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Tg ? rk(S.query) : S.query || {}
      )
    }, T, {
      redirectedFrom: void 0,
      href: X
    });
  }
  function v(S) {
    return typeof S == "string" ? fl(n, S, c.value.path) : ne({}, S);
  }
  function C(S, D) {
    if (u !== S)
      return cs(8, {
        from: D,
        to: S
      });
  }
  function y(S) {
    return L(S);
  }
  function _(S) {
    return y(ne(v(S), { replace: !0 }));
  }
  function E(S) {
    const D = S.matched[S.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: b } = D;
      let T = typeof b == "function" ? b(S) : b;
      if (typeof T == "string" && (T = T.includes("?") || T.includes("#") ? T = v(T) : (
        // force empty params
        { path: T }
      ), T.params = {}), {}.NODE_ENV !== "production" && !("path" in T) && !("name" in T))
        throw Y(`Invalid redirect found:
${JSON.stringify(T, null, 2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return ne({
        query: S.query,
        hash: S.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in T ? {} : S.params
      }, T);
    }
  }
  function L(S, D) {
    const b = u = w(S), T = c.value, W = S.state, H = S.force, X = S.replace === !0, G = E(b);
    if (G)
      return L(
        ne(v(G), {
          state: typeof G == "object" ? ne({}, W, G.state) : W,
          force: H,
          replace: X
        }),
        // keep original redirectedFrom if it exists
        D || b
      );
    const re = b;
    re.redirectedFrom = D;
    let st;
    return !H && Sg(o, T, b) && (st = cs(16, { to: re, from: T }), $e(
      T,
      T,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (st ? Promise.resolve(st) : B(re, T)).catch((Ve) => dn(Ve) ? (
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
          Sg(o, w(Ve.to), re) && // and we have done it a couple of times
          D && // @ts-expect-error: added only in dev
          (D._count = D._count ? (
            // @ts-expect-error
            D._count + 1
          ) : 1) > 30 ? (Y(`Detected a possibly infinite redirection in a navigation guard when going from "${T.fullPath}" to "${re.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : L(
            // keep options
            ne({
              // preserve an existing replacement but allow the redirect to override it
              replace: X
            }, v(Ve.to), {
              state: typeof Ve.to == "object" ? ne({}, W, Ve.to.state) : W,
              force: H
            }),
            // preserve the original redirectedFrom if any
            D || re
          );
      } else
        Ve = j(re, T, !0, X, W);
      return U(re, T, Ve), Ve;
    });
  }
  function N(S, D) {
    const b = C(S, D);
    return b ? Promise.reject(b) : Promise.resolve();
  }
  function x(S) {
    const D = R.values().next().value;
    return D && typeof D.runWithContext == "function" ? D.runWithContext(S) : S();
  }
  function B(S, D) {
    let b;
    const [T, W, H] = Ek(S, D);
    b = wl(T.reverse(), "beforeRouteLeave", S, D);
    for (const G of T)
      G.leaveGuards.forEach((re) => {
        b.push(to(re, S, D));
      });
    const X = N.bind(null, S, D);
    return b.push(X), ae(b).then(() => {
      b = [];
      for (const G of a.list())
        b.push(to(G, S, D));
      return b.push(X), ae(b);
    }).then(() => {
      b = wl(W, "beforeRouteUpdate", S, D);
      for (const G of W)
        G.updateGuards.forEach((re) => {
          b.push(to(re, S, D));
        });
      return b.push(X), ae(b);
    }).then(() => {
      b = [];
      for (const G of H)
        if (G.beforeEnter)
          if (pt(G.beforeEnter))
            for (const re of G.beforeEnter)
              b.push(to(re, S, D));
          else
            b.push(to(G.beforeEnter, S, D));
      return b.push(X), ae(b);
    }).then(() => (S.matched.forEach((G) => G.enterCallbacks = {}), b = wl(H, "beforeRouteEnter", S, D), b.push(X), ae(b))).then(() => {
      b = [];
      for (const G of r.list())
        b.push(to(G, S, D));
      return b.push(X), ae(b);
    }).catch((G) => dn(
      G,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? G : Promise.reject(G));
  }
  function U(S, D, b) {
    l.list().forEach((T) => x(() => T(S, D, b)));
  }
  function j(S, D, b, T, W) {
    const H = C(S, D);
    if (H)
      return H;
    const X = D === Nn, G = Dn ? history.state : {};
    b && (T || X ? s.replace(S.fullPath, ne({
      scroll: X && G && G.scroll
    }, W)) : s.push(S.fullPath, W)), c.value = S, $e(S, D, b, X), ye();
  }
  let te;
  function ie() {
    te || (te = s.listen((S, D, b) => {
      if (!z.listening)
        return;
      const T = w(S), W = E(T);
      if (W) {
        L(ne(W, { replace: !0 }), T).catch(xa);
        return;
      }
      u = T;
      const H = c.value;
      Dn && Sb(Cg(H.fullPath, b.delta), Nr()), B(T, H).catch((X) => dn(
        X,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? X : dn(
        X,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (L(
        X.to,
        T
        // avoid an uncaught rejection, let push call triggerError
      ).then((G) => {
        dn(
          G,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !b.delta && b.type === $a.pop && s.go(-1, !1);
      }).catch(xa), Promise.reject()) : (b.delta && s.go(-b.delta, !1), K(X, T, H))).then((X) => {
        X = X || j(
          // after navigation, all matched components are resolved
          T,
          H,
          !1
        ), X && (b.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !dn(
          X,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-b.delta, !1) : b.type === $a.pop && dn(
          X,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), U(T, H, X);
      }).catch(xa);
    }));
  }
  let oe = Vs(), P = Vs(), I;
  function K(S, D, b) {
    ye(S);
    const T = P.list();
    return T.length ? T.forEach((W) => W(S, D, b)) : ({}.NODE_ENV !== "production" && Y("uncaught error during route navigation:"), console.error(S)), Promise.reject(S);
  }
  function Q() {
    return I && c.value !== Nn ? Promise.resolve() : new Promise((S, D) => {
      oe.add([S, D]);
    });
  }
  function ye(S) {
    return I || (I = !S, ie(), oe.list().forEach(([D, b]) => S ? b(S) : D()), oe.reset()), S;
  }
  function $e(S, D, b, T) {
    const { scrollBehavior: W } = e;
    if (!Dn || !W)
      return Promise.resolve();
    const H = !b && yb(Cg(S.fullPath, 0)) || (T || !b) && history.state && history.state.scroll || null;
    return lb().then(() => W(S, D, H)).then((X) => X && _b(X)).catch((X) => K(X, S, D));
  }
  const xe = (S) => s.go(S);
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
    push: y,
    replace: _,
    go: xe,
    back: () => xe(-1),
    forward: () => xe(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: P.add,
    isReady: Q,
    install(S) {
      const D = this;
      S.component("RouterLink", gk), S.component("RouterView", fk), S.config.globalProperties.$router = D, Object.defineProperty(S.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Ca(c)
      }), Dn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Ne && c.value === Nn && (Ne = !0, y(s.location).catch((W) => {
        ({}).NODE_ENV !== "production" && Y("Unexpected error when starting the router:", W);
      }));
      const b = {};
      for (const W in Nn)
        Object.defineProperty(b, W, {
          get: () => c.value[W],
          enumerable: !0
        });
      S.provide(Mr, D), S.provide(Ew, rb(b)), S.provide(Fu, c);
      const T = S.unmount;
      R.add(S), S.unmount = function() {
        R.delete(S), R.size < 1 && (u = Nn, te && te(), te = null, c.value = Nn, Ne = !1, I = !1), T();
      }, {}.NODE_ENV !== "production" && Dn && _k(S, D, t);
    }
  };
  function ae(S) {
    return S.reduce((D, b) => D.then(() => x(b)), Promise.resolve());
  }
  return z;
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
  return ls(Mr);
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
const Dt = window.Vue.unref, Fo = window.Vue.createVNode, gn = window.Vue.createElementVNode, Ng = window.Vue.renderSlot, Mg = window.Vue.withModifiers, vl = window.Vue.toDisplayString, _l = window.Vue.withCtx, Ak = window.Vue.openBlock, Dk = window.Vue.createElementBlock, Pk = window.Vue.createCommentVNode, Bk = { class: "col shrink pe-4" }, Fk = { class: "col" }, Nk = { class: "cx-translation__details column justify-between ma-0" }, Mk = { class: "row ma-0" }, Uk = { class: "col grow" }, Ik = { class: "col shrink ps-2" }, Rk = ["dir", "textContent"], zk = ["dir", "textContent"], Ok = ["textContent"], jk = window.Vuex.useStore, Hk = window.Vue.computed, Nw = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Ru,
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
      onClick: c[1] || (c[1] = Mg((u) => l.$emit("click"), ["stop"]))
    }, [
      gn("div", Bk, [
        Fo(Dt(Iu), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      gn("div", Fk, [
        gn("div", Nk, [
          gn("div", Mk, [
            gn("div", Uk, [
              Ng(l.$slots, "title")
            ]),
            gn("div", Ik, [
              Fo(Dt(et), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: c[0] || (c[0] = Mg((u) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Ng(l.$slots, "mid-content"),
          Fo(Dt(M), { class: "cx-translation__footer ma-0" }, {
            default: _l(() => [
              Fo(Dt(V), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: _l(() => [
                  gn("span", {
                    class: "mw-ui-autonym",
                    dir: Dt(O.getDir)(e.translation.sourceLanguage),
                    textContent: vl(Dt(O.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, Rk),
                  Fo(Dt(et), {
                    icon: Dt(W0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  gn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: Dt(O.getDir)(e.translation.targetLanguage),
                    textContent: vl(Dt(O.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, zk)
                ]),
                _: 1
              }),
              Fo(Dt(V), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: _l(() => [
                  gn("span", {
                    textContent: vl(r.value)
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
const Ug = window.Vue.unref, Gk = window.Vue.toDisplayString, qk = window.Vue.createTextVNode, Wk = window.Vue.withCtx, Xk = window.Vue.openBlock, Kk = window.Vue.createBlock, Yk = window.Codex.CdxInfoChip, Ur = {
  __name: "CommunityPriorityBadge",
  setup(e) {
    return (t, n) => (Xk(), Kk(Ug(Yk), {
      icon: Ug(sd),
      class: "cx-community-priority-badge"
    }, {
      default: Wk(() => [
        qk(Gk(t.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const uo = window.Vue.unref, Qk = window.Vue.toDisplayString, Jk = window.Vue.normalizeClass, Zk = window.Vue.createElementVNode, ni = window.Vue.openBlock, e8 = window.Vue.createElementBlock, Sl = window.Vue.createCommentVNode, oi = window.Vue.createVNode, No = window.Vue.withCtx, yl = window.Vue.createBlock, t8 = ["lang", "textContent"], n8 = ["lang", "innerHTML"], o8 = window.Vue.computed, s8 = window.Vue.inject, a8 = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: br,
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
    ), a = nt(), { setTranslationURLParams: r } = F(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (c, u) => (ni(), yl(Nw, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": uo(wf),
      onActionIconClicked: u[0] || (u[0] = (i) => c.$emit("delete-translation")),
      onClick: l
    }, {
      title: No(() => [
        Zk("h5", {
          class: Jk(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Qk(e.translation.sourceTitle)
        }, null, 10, t8),
        e.translation.isLeadSectionTranslation ? Sl("", !0) : (ni(), e8("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, n8))
      ]),
      "mid-content": No(() => [
        e.translation.progress ? (ni(), yl(uo(M), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: No(() => [
            oi(uo(V), null, {
              default: No(() => [
                oi(uo(Sf), {
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
        })) : Sl("", !0),
        e.translation.inFeaturedCollection ? (ni(), yl(uo(M), {
          key: 1,
          class: "ma-0 py-2"
        }, {
          default: No(() => [
            oi(uo(V), { shrink: "" }, {
              default: No(() => [
                oi(Ur)
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
}, i8 = window.Vuex.useStore, Mw = [], r8 = (e, t, n) => Mw.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), l8 = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Mw.push(o);
}, c8 = () => {
  const e = i8();
  return (t, n, o) => k(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !r8(t, n, o) && (s = yield ge.fetchSectionSuggestion(
      t,
      o,
      n
    ), l8(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, Uw = window.Vue.ref, Iw = Uw(null), Mu = Uw(null), u8 = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), Iw.value = e;
}, d8 = (e) => {
  Mu.value = e;
}, Na = () => {
  const e = nt(), { loadSuggestion: t } = Fa(), { setTranslationURLParams: n } = F();
  return (o, s, a, r, l = null, c = !0) => k(void 0, null, function* () {
    u8(r), d8(l);
    const u = yield t(
      s,
      a,
      o
    );
    n(u), c && e.push({ name: "sx-translation-confirmer" });
  });
};
const Cl = window.Vue.withModifiers, Ig = window.Vue.toDisplayString, Rg = window.Vue.createElementVNode, at = window.Vue.unref, mn = window.Vue.createVNode, g8 = window.Vue.createTextVNode, Ls = window.Vue.openBlock, zg = window.Vue.createElementBlock, xl = window.Vue.createCommentVNode, bl = window.Vue.createBlock, Mn = window.Vue.withCtx, m8 = ["lang", "href", "textContent"], p8 = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, h8 = {
  key: 2,
  class: "flex"
}, f8 = ["innerHTML"], kl = window.Vue.computed, Og = window.Vue.ref, jg = window.Codex.CdxButton, $l = window.Codex.CdxIcon, w8 = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: ld,
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
    c8()(
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
    }, d = mw.config.get("wgNamespaceIds"), g = kl(() => new mw.Title(t.translation.targetTitle).getNamespaceId() === d.user);
    return (m, p) => (Ls(), bl(Nw, {
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
        }, null, 8, m8)
      ]),
      "mid-content": Mn(() => [
        mn(at(M), { class: "ma-0" }, {
          default: Mn(() => [
            mn(at(V), null, {
              default: Mn(() => [
                g.value ? (Ls(), zg("div", p8, [
                  mn(at($l), {
                    icon: at(sw),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  g8(" " + Ig(m.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : xl("", !0),
                n.value ? (Ls(), bl(at(mt), { key: 1 })) : s.value ? (Ls(), zg("div", h8, [
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
                      Rg("span", { innerHTML: a.value }, null, 8, f8)
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
                      mn(at($l), { icon: at(nd) }, null, 8, ["icon"])
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
        e.translation.inFeaturedCollection ? (Ls(), bl(at(M), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Mn(() => [
            mn(at(V), { shrink: "" }, {
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
}, Rw = "cx-translation-session-position-", zw = () => Rw + mw.user.sessionId(), v8 = () => {
  const e = parseInt(
    mw.storage.get(zw())
  );
  return isNaN(e) ? 0 : e;
}, _8 = function(e) {
  const t = zw();
  mw.storage.set(t, e);
}, S8 = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(Rw)).forEach((e) => mw.storage.remove(e));
}, y8 = () => {
  const e = v8();
  return e % 10 === 0 && S8(), _8(e + 1), e;
};
function C8(e) {
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
    content_translation_session_position: y8()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : zf(r).then((c) => {
    mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: c,
        user_global_edit_count_bucket: ty(c)
      })
    );
  });
}
const x8 = window.Vuex.useStore, b8 = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], Lt = () => {
  const e = x8(), { previousRoute: t } = Fe(e), n = {
    event_source: { remove: !0 },
    translation_source_language: { remove: !1 },
    translation_target_language: { remove: !1 },
    translation_source_title: { remove: !0 }
  }, o = (s) => {
    for (const [a, { remove: r }] of Object.entries(n))
      if (s[a] === null || s[a] === "") {
        const l = b8(
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
  return (s) => (s.access_method || (s.access_method = Gt ? "desktop" : "mobile web"), o(s), C8(s));
}, k8 = window.Vuex.useStore, $8 = () => {
  const { commit: e } = k8(), t = Lt();
  return (n) => k(void 0, null, function* () {
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
const V8 = window.Vue.resolveDirective, Vl = window.Vue.createElementVNode, E8 = window.Vue.withDirectives, El = window.Vue.unref, Hg = window.Vue.createVNode, Gg = window.Vue.withCtx, L8 = window.Vue.openBlock, T8 = window.Vue.createBlock, A8 = { class: "pa-4" }, D8 = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, P8 = {
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
    const n = e, o = t, s = () => o("update:modelValue", !1), a = $8(), r = () => {
      a(n.translation), s();
    };
    return (l, c) => {
      const u = V8("i18n");
      return L8(), T8(El(Vt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Gg(() => [
          Vl("div", D8, [
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
          Vl("div", A8, [
            E8(Vl("span", null, null, 512), [
              [u, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function B8(e, t, n) {
  return k(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield F8(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function qg(e, t, n) {
  return k(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(O.sortByAutonym) : (yield B8(e, t, n)).sort(O.sortByAutonym);
  });
}
function F8(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function N8() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function M8(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const U8 = window.Vue.computed;
function I8(e, t) {
  const n = U8(() => {
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
const Ll = window.Vue.ref, Tl = window.Vue.watch, R8 = window.Vue.computed;
function Ow(e, t, n) {
  const o = Ll(""), s = Ll(-1), a = Ll(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = R8(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), c = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Tl(e, () => {
    s.value = -1;
  }), Tl(t, () => {
    t.value && l.value.length > 0 && (s.value = 0);
  }), Tl(s, () => k(this, null, function* () {
    var u;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (u = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || u.scrollIntoView(!1);
  })), { next: r, prev: c, keyboardNavigationContainer: a, selectedItem: o };
}
function ud(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const si = window.Vue.renderSlot, Te = window.Vue.unref, z8 = window.Vue.isRef, Wg = window.Vue.createVNode, Ts = window.Vue.withModifiers, As = window.Vue.withKeys, Un = window.Vue.createElementVNode, O8 = window.Vue.resolveDirective, ai = window.Vue.withDirectives, Al = window.Vue.renderList, Dl = window.Vue.Fragment, pn = window.Vue.openBlock, hn = window.Vue.createElementBlock, Xg = window.Vue.toDisplayString, ii = window.Vue.normalizeClass, Pl = window.Vue.createCommentVNode, j8 = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, H8 = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, G8 = { class: "results px-3 pt-4" }, q8 = { class: "results-header ps-8 pb-2" }, W8 = { class: "results-languages--suggestions pa-0 ma-0" }, X8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], K8 = { class: "results px-3 pt-4" }, Y8 = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, Q8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], J8 = ["aria-selected"], Z8 = { class: "no-results px-3 py-4" }, e2 = { class: "ps-8" }, ri = window.Vue.ref, t2 = window.Vue.watch, n2 = window.Vue.onMounted, Kg = window.Vue.computed, jw = {
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
      default: N8
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = ri(null), a = ri(""), r = ri([]), l = ri(n.suggestions), c = Kg(
      () => M8(r.value)
    ), u = Kg(() => {
      const y = r.value.length;
      return y < 10 ? "few-results" : y < 30 ? "some-results" : "many-results";
    }), i = (y) => o("select", y), d = () => o("close"), { autocompletion: g, onTabSelect: m } = I8(
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
    return t2(a, ud(() => k(this, null, function* () {
      r.value = yield qg(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), n2(() => k(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield qg(
        n.languages,
        "",
        n.searchAPI
      );
    })), (y, _) => {
      const E = O8("i18n");
      return pn(), hn("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        si(y.$slots, "search", {}, () => [
          Un("div", j8, [
            Wg(Te(bu), {
              value: Te(g),
              "onUpdate:value": _[0] || (_[0] = (L) => z8(g) ? g.value = L : null),
              icon: Te(Ld),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Wg(Te(bu), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": _[1] || (_[1] = (L) => a.value = L),
              class: "mw-ui-language-selector__search pa-4",
              icon: Te(Ld),
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
        Un("section", H8, [
          e.suggestions.length && !a.value ? si(y.$slots, "suggestions", { key: 0 }, () => [
            Un("section", G8, [
              ai(Un("p", q8, null, 512), [
                [E, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Un("ul", W8, [
                (pn(!0), hn(Dl, null, Al(e.suggestions, (L) => (pn(), hn("li", {
                  key: L,
                  class: ii(["language ma-0", { "language--selected": L === Te(w) }]),
                  lang: L,
                  dir: Te(O.getDir)(L),
                  "aria-selected": L === Te(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (N) => i(L),
                  textContent: Xg(Te(O.getAutonym)(L))
                }, null, 10, X8))), 128))
              ])
            ])
          ]) : Pl("", !0),
          c.value.length ? si(y.$slots, "search", { key: 1 }, () => [
            Un("section", K8, [
              e.suggestions.length && !a.value ? ai((pn(), hn("p", Y8, null, 512)), [
                [E, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Pl("", !0),
              (pn(!0), hn(Dl, null, Al(c.value, (L, N) => (pn(), hn("ul", {
                key: N,
                class: ii(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (pn(!0), hn(Dl, null, Al(L, (x) => (pn(), hn("li", {
                  key: x,
                  class: ii(["language ma-0", { "language--selected": x === Te(w) }]),
                  lang: x,
                  dir: Te(O.getDir)(x),
                  role: "option",
                  "aria-selected": x === Te(w) || null,
                  tabindex: "-1",
                  onClick: (B) => i(x),
                  textContent: Xg(Te(O.getAutonym)(x))
                }, null, 10, Q8))), 128)),
                e.allOptionEnabled && !a.value ? ai((pn(), hn("li", {
                  key: 0,
                  class: ii(["language ma-0", { "language--selected": Te(w) === "all" }]),
                  role: "option",
                  "aria-selected": Te(w) === "all" || null,
                  tabindex: "-1",
                  onClick: _[2] || (_[2] = (x) => i("all"))
                }, null, 10, J8)), [
                  [E, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Pl("", !0)
              ], 2))), 128))
            ])
          ]) : si(y.$slots, "noresults", { key: 2 }, () => [
            Un("section", Z8, [
              ai(Un("h3", e2, null, 512), [
                [E, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const o2 = window.Vue.resolveDirective, Yg = window.Vue.withDirectives, Ds = window.Vue.openBlock, Ps = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ae = window.Vue.unref, Qg = window.Vue.toDisplayString, Pt = window.Vue.createVNode, Jg = window.Vue.withModifiers, go = window.Vue.withCtx, s2 = window.Vue.normalizeClass, a2 = {
  key: 0,
  class: "mw-ui-autonym"
}, i2 = ["lang", "dir", "textContent"], r2 = {
  key: 0,
  class: "mw-ui-autonym"
}, l2 = ["lang", "dir", "textContent"], Bs = window.Vue.computed, c2 = window.Vue.inject, u2 = window.Vue.ref, Zg = window.Codex.CdxButton, Bl = window.Codex.CdxIcon, Sr = {
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
    const n = e, o = t, s = c2("breakpoints"), a = Bs(() => s.value.mobile), r = u2(null), l = Bs(() => !!r.value), c = () => r.value = "source", u = () => r.value = "target", i = () => r.value = null, d = Bs(() => {
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
      const w = o2("i18n");
      return Ds(), Ps("div", {
        class: s2(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
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
                Pt(Ae(Zg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Jg(c, ["stop"])
                }, {
                  default: go(() => [
                    m.value ? Yg((Ds(), Ps("span", a2, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ds(), Ps("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ae(O.getDir)(e.selectedSourceLanguage),
                      textContent: Qg(Ae(O.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, i2)),
                    Pt(Ae(Bl), {
                      size: "x-small",
                      icon: Ae(Eu)
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
                Pt(Ae(Bl), { icon: Ae(Qf) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Pt(Ae(V), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: go(() => [
                Pt(Ae(Zg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Jg(u, ["stop"])
                }, {
                  default: go(() => [
                    p.value ? Yg((Ds(), Ps("span", r2, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ds(), Ps("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ae(O.getDir)(e.selectedTargetLanguage),
                      textContent: Qg(Ae(O.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, l2)),
                    Pt(Ae(Bl), {
                      size: "x-small",
                      icon: Ae(Eu)
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
const em = window.Vue.unref, d2 = window.Vue.createVNode, li = window.Vue.createElementVNode, tm = window.Vue.toDisplayString, g2 = window.Vue.openBlock, m2 = window.Vue.createElementBlock, p2 = { class: "cx-list-empty-placeholder pa-4" }, h2 = { class: "cx-list-empty-placeholder__icon-container" }, f2 = { class: "cx-list-empty-placeholder__icon" }, w2 = ["textContent"], v2 = ["textContent"], _2 = window.Codex.CdxIcon, Hw = {
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
    return (t, n) => (g2(), m2("div", p2, [
      li("div", h2, [
        li("div", f2, [
          d2(em(_2), { icon: em(nw) }, null, 8, ["icon"])
        ])
      ]),
      li("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: tm(e.title)
      }, null, 8, w2),
      li("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: tm(e.description)
      }, null, 8, v2)
    ]));
  }
}, S2 = window.Vuex.useStore, y2 = window.Vue.ref, ci = y2({ draft: !1, published: !1 }), hs = () => {
  const e = S2(), t = Eo(), { addFeaturedCollectionFlag: n } = Br(), o = (a) => k(void 0, null, function* () {
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
const C2 = window.Vue.toDisplayString, Fl = window.Vue.normalizeClass, nm = window.Vue.createElementVNode, Kt = window.Vue.openBlock, Mo = window.Vue.createBlock, ui = window.Vue.createCommentVNode, om = window.Vue.unref, sm = window.Vue.renderList, am = window.Vue.Fragment, di = window.Vue.createElementBlock, x2 = window.Vue.createVNode, im = window.Vue.withCtx, b2 = ["textContent"], k2 = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, $2 = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, gi = window.Vue.ref, Bt = window.Vue.computed, V2 = window.Vue.inject, E2 = window.Vuex.useStore, rm = {
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
    const t = e, n = gi("all"), o = gi("all"), s = E2(), { translationsFetched: a } = hs(), r = Bt(
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
      ).sort((_, E) => _.lastUpdatedTimestamp < E.lastUpdatedTimestamp)
    ), p = Bt(() => {
      const _ = i.value.map(
        (E) => E.targetLanguage
      );
      return [...new Set(_)];
    }), h = Bt(() => {
      const _ = i.value.map(
        (E) => E.sourceLanguage
      );
      return [...new Set(_)];
    }), f = (_) => {
      c.value = _, l.value = !0;
    }, w = Bt(() => t.activeStatus === t.translationStatus), v = V2("breakpoints"), C = Bt(() => v.value.mobile), y = Bt(
      () => C.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (_, E) => w.value ? (Kt(), Mo(om(Ze), {
      key: 0,
      class: Fl(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: im(() => [
        nm("div", {
          class: Fl(["cx-translation-list__header", y.value])
        }, [
          nm("h3", {
            class: Fl(["px-4 mw-ui-card__title mb-0", { "pb-4": C.value }]),
            textContent: C2(_.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, b2),
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
      default: im(() => [
        r.value && !m.value.length ? (Kt(), Mo(Hw, {
          key: 0,
          title: _.$i18n("cx-sx-translation-list-empty-title"),
          description: _.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : ui("", !0),
        r.value ? ui("", !0) : (Kt(), Mo(om(mt), { key: 1 })),
        u.value ? (Kt(), di("div", k2, [
          (Kt(!0), di(am, null, sm(m.value, (L) => (Kt(), Mo(a8, {
            key: `${e.translationStatus}-${L.key}`,
            translation: L,
            onDeleteTranslation: (N) => f(L)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Kt(), di("div", $2, [
          (Kt(!0), di(am, null, sm(m.value, (L) => (Kt(), Mo(w8, {
            key: `${e.translationStatus}-${L.key}`,
            translation: L
          }, null, 8, ["translation"]))), 128))
        ])),
        x2(P8, {
          modelValue: l.value,
          "onUpdate:modelValue": E[2] || (E[2] = (L) => l.value = L),
          translation: c.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : ui("", !0);
  }
};
const Nl = window.Vue.toDisplayString, hr = window.Vue.createElementVNode, Ml = window.Vue.unref, Fs = window.Vue.openBlock, Ul = window.Vue.createBlock, lm = window.Vue.createCommentVNode, L2 = window.Vue.Fragment, cm = window.Vue.createElementBlock, T2 = window.Vue.withKeys, A2 = window.Vue.withCtx, D2 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, P2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, B2 = /* @__PURE__ */ hr("span", null, "/", -1), F2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, um = window.Codex.CdxIcon, N2 = window.Codex.CdxInfoChip, mi = window.Vue.computed, ko = {
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
      () => t.expanded ? AC : Eu
    );
    return (r, l) => (Fs(), Ul(Ml(N2), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = T2((c) => r.$emit("click"), ["enter"]))
    }, {
      default: A2(() => [
        n.value === -1 ? (Fs(), cm(L2, { key: 0 }, [
          hr("span", null, Nl(e.content), 1),
          e.expandable ? (Fs(), Ul(Ml(um), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : lm("", !0)
        ], 64)) : (Fs(), cm("div", D2, [
          hr("span", P2, Nl(o.value), 1),
          B2,
          hr("span", F2, Nl(s.value), 1),
          e.expandable ? (Fs(), Ul(Ml(um), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : lm("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const _e = window.Vue.unref, wt = window.Vue.createVNode, In = window.Vue.createElementVNode, Ns = window.Vue.toDisplayString, it = window.Vue.withCtx, M2 = window.Vue.resolveDirective, Il = window.Vue.withDirectives, fn = window.Vue.openBlock, mo = window.Vue.createBlock, Rn = window.Vue.createCommentVNode, dm = window.Vue.createElementBlock, gm = window.Vue.withModifiers, U2 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, I2 = { class: "col shrink pe-4" }, R2 = ["lang", "dir", "textContent"], z2 = ["lang", "dir", "textContent"], O2 = { class: "cx-suggestion__missing-sections" }, j2 = {
  key: 0,
  class: "cx-suggestion__easy-sections ms-1"
}, H2 = ["textContent"], G2 = ["textContent"], Rl = window.Codex.CdxIcon, Ee = window.Vue.computed, q2 = window.Vue.inject, W2 = window.Vuex.useStore, Uu = {
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
        var x;
        return (x = o.value) == null ? void 0 : x.missingSectionsCount;
      }
    ), l = Ee(() => !(o.value instanceof on) || !o.value.orderedMissingSections ? 0 : o.value.orderedMissingSections.filter((x) => {
      const B = o.value.getSectionSize(x.sourceTitle);
      return Gf(B);
    }).length), c = fe(), u = Ee(() => {
      const x = c.i18n(
        "cx-sx-translation-suggestion-easy-sections",
        [l.value]
      );
      return c.i18n("parentheses", [x]);
    }), i = Ee(() => {
      var x;
      return (x = a.value) == null ? void 0 : x.description;
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
      () => g.value ? Zf : ew
    ), f = q2("colors"), w = Ee(
      () => g.value ? f.blue600 : "currentColor"
    ), v = Ee(
      () => o.value instanceof If || o.value instanceof Rf
    ), C = Ee(() => {
      if (!v.value || o.value.inFeaturedCollection)
        return !1;
      const x = E();
      return (x == null ? void 0 : x.id) === ee;
    }), y = Ee(() => C.value || d.value ? !1 : Gt ? oy(o.value.size) : sy(o.value.leadSectionSize)), { featuredCollection: _ } = Wt(), { findSelectedFilter: E } = ro(), L = Ee(() => {
      var B, U;
      const x = E();
      return ((B = x == null ? void 0 : x.id) == null ? void 0 : B.toLowerCase()) === ((U = _.value) == null ? void 0 : U.name.toLowerCase());
    }), N = Ee(() => {
      if (!o.value.inFeaturedCollection)
        return !1;
      if (g.value)
        return !0;
      const x = E();
      return (x == null ? void 0 : x.id) === ee ? !0 : !L.value;
    });
    return (x, B) => {
      const U = M2("i18n");
      return o.value ? (fn(), dm("div", U2, [
        In("div", I2, [
          wt(_e(Iu), {
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
                    }, null, 8, R2)
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
                    }, null, 8, z2)
                  ]),
                  _: 1
                }),
                y.value ? (fn(), mo(_e(V), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: it(() => [
                    Il(In("small", null, null, 512), [
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
                    Il(In("small", O2, null, 512), [
                      [U, [r.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (fn(), dm("small", j2, Ns(u.value), 1)) : Rn("", !0)
                  ]),
                  _: 1
                })) : Rn("", !0),
                N.value ? (fn(), mo(_e(V), {
                  key: 2,
                  shrink: "",
                  class: "cx-suggestion__information-panel__featured mt-auto"
                }, {
                  default: it(() => [
                    wt(Ur)
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
                            }, null, 8, H2),
                            wt(_e(Rl), {
                              icon: _e(Qf),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            In("small", {
                              textContent: Ns(p.value)
                            }, null, 8, G2)
                          ]),
                          _: 1
                        }),
                        r.value ? (fn(), mo(_e(V), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: it(() => [
                            Il(In("small", null, null, 512), [
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
                C.value ? (fn(), mo(_e(V), {
                  key: 4,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: it(() => [
                    wt(ko, {
                      icon: _e(ed),
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
                g.value ? Rn("", !0) : (fn(), mo(_e(Rl), {
                  key: 0,
                  icon: _e(ms),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: B[0] || (B[0] = gm((j) => x.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                wt(_e(Rl), {
                  class: "cx-suggestion__favorite-button",
                  icon: h.value,
                  "icon-color": w.value,
                  onClick: B[1] || (B[1] = gm((j) => x.$emit("bookmark"), ["stop"]))
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
const zl = window.Vue.normalizeClass, mm = window.Vue.createVNode, X2 = window.Vue.renderList, pm = window.Vue.Fragment, Ms = window.Vue.openBlock, pi = window.Vue.createElementBlock, K2 = window.Vue.createBlock, Y2 = window.Vue.toDisplayString, Q2 = window.Vue.withKeys, hm = window.Vue.createCommentVNode, J2 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, hi = window.Vue.computed, Z2 = window.Vue.ref, e$ = window.Vue.watchEffect, t$ = {
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
    ), s = Z2(!1);
    e$(() => {
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
    return (g, m) => (Ms(), pi(pm, null, [
      mm(ko, {
        class: zl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": o.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: s.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      s.value ? (Ms(), pi("div", J2, [
        mm(ko, {
          class: zl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: m[0] || (m[0] = (p) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Ms(!0), pi(pm, null, X2(u.value, (p) => (Ms(), K2(ko, {
          key: p.id,
          class: zl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
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
          onKeyup: Q2(d, ["enter"])
        }, Y2(e.viewMoreConfig.label), 33)) : hm("", !0)
      ])) : hm("", !0)
    ], 64));
  }
};
const n$ = window.Vue.toDisplayString, fm = window.Vue.createElementVNode, o$ = window.Vue.renderList, wm = window.Vue.Fragment, Ol = window.Vue.openBlock, vm = window.Vue.createElementBlock, s$ = window.Vue.createBlock, a$ = { class: "sx-suggestions-filters__group-label mb-3" }, i$ = { class: "sx-suggestions-filters__group-filters mb-3" }, r$ = {
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
      fm("div", a$, n$(e.filterGroup.label), 1),
      fm("div", i$, [
        (Ol(!0), vm(wm, null, o$(n(), (a) => (Ol(), s$(t$, {
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
}, _m = window.Vue.computed, l$ = window.Vue.inject, Sm = window.Vue.ref, ym = window.Vue.watch, Gw = (e, t) => {
  const o = Sm([]), s = Sm(!1), a = _m(
    () => o.value.slice(0, 4)
  ), r = l$("breakpoints"), l = _m(() => r.value.mobile), { inFeaturedCollection: c } = ad(), u = (g) => k(void 0, null, function* () {
    const m = g.map((h) => h.wikidataId).filter(Boolean), p = yield c(m);
    g.forEach((h) => {
      h.wikidataId && (h.inFeaturedCollection = p[h.wikidataId]);
    });
  }), i = ud(() => k(void 0, null, function* () {
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
  return ym(t, d), ym(e, d), {
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
const jl = window.Vue.ref, Cm = window.Vue.watch, xm = window.Vue.computed, { topics: c$, regions: u$ } = mw.loader.require(
  "ext.cx.articlefilters"
), d$ = c$.flatMap(
  (e) => e.topics.map((t) => Ye(me({}, t), {
    groupId: e.groupId
  }))
), g$ = () => {
  const e = jl(""), t = jl("all"), n = jl({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = fe(), { pageCollectionGroups: s } = Ar(), { sourceLanguageURLParameter: a } = F(), r = (m) => (m = m.toLowerCase(), d$.filter(
    (p) => p.label.toLowerCase().includes(m)
  )), l = (m) => (m = m.toLowerCase(), Object.values(s.value).flat().filter(
    (h) => h.name.toLowerCase().includes(m)
  )), c = (m) => (m = m.toLowerCase(), u$.flatMap((p) => [p, ...p.countries]).filter(
    (p) => p.label.toLowerCase().includes(m)
  ).map((p) => ({
    label: p.label,
    id: p.id
  }))), u = xm(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: d } = Gw(
    a,
    u
  );
  Cm(i, () => {
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
  }), Cm([e, t], () => k(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (m) => new fi({
        label: m.label,
        value: m.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? Lu : null,
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
        icon: t.value === "all" ? ed : null,
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
        icon: t.value === "all" ? Lu : null,
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
  return { searchInput: e, searchScope: t, searchResults: g, searchResultsLoading: d };
}, m$ = "suggestion_filter_topic_area", p$ = "suggestion_filter_search_result_seed", h$ = "suggestion_filter_collections", f$ = "suggestion_filter_previous_edits", w$ = "suggestion_filter_popular_articles", v$ = "suggestion_filter_region", Hl = (e) => {
  if (e.type === tt || e.type === Be || e.type === ee || e.type === qt)
    return e.id;
  if (e.id === ee)
    return "all-collections";
}, Gl = (e) => {
  if (e.type === tt)
    return m$;
  if (e.type === Be)
    return v$;
  if (e.type === qt)
    return p$;
  if (e.id === ee || e.type === ee)
    return h$;
  if (e.id === an)
    return f$;
  if (e.id === rn)
    return w$;
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
const be = window.Vue.unref, vt = window.Vue.createVNode, Ft = window.Vue.withCtx, _$ = window.Vue.resolveDirective, Yt = window.Vue.createElementVNode, Uo = window.Vue.withDirectives, bm = window.Vue.toDisplayString, S$ = window.Vue.createTextVNode, y$ = window.Vue.vShow, km = window.Vue.isRef, $m = window.Vue.renderList, Vm = window.Vue.Fragment, wn = window.Vue.openBlock, po = window.Vue.createElementBlock, C$ = window.Vue.withKeys, Em = window.Vue.createCommentVNode, Lm = window.Vue.createBlock, x$ = { class: "sx-suggestions-filters" }, b$ = { class: "mb-0" }, k$ = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, $$ = { class: "mb-3" }, V$ = { class: "px-4 pb-4 pt-7" }, E$ = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, L$ = ["onKeyup", "onClick"], T$ = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, A$ = { class: "sx-suggestions-filters__search-results-pending" }, D$ = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, P$ = { class: "sx-suggestions-filters__search-results-empty-primary" }, B$ = { class: "sx-suggestions-filters__search-results-empty-secondary" }, wi = window.Vue.ref, ho = window.Vue.computed, F$ = window.Vue.inject, N$ = window.Vue.watch, Tm = window.Codex.CdxButton, M$ = window.Codex.CdxIcon, U$ = window.Codex.CdxTextInput, I$ = window.Codex.CdxMenu, R$ = window.Codex.CdxTabs, z$ = window.Codex.CdxTab, O$ = {
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
    ]), a = (R) => j.value = R, r = ho(
      () => s.value.find((R) => R.name === j.value)
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
    } = qw(), v = () => {
      h(), p();
    }, C = () => {
      _.value && (f(_.value), d(_.value)), p();
    }, y = wi(!1), _ = wi(null), E = () => {
      _.value = null, y.value = !1;
    }, L = (R) => {
      w(R), _.value = R, y.value = !0;
    }, N = (R) => _.value ? _.value.id === R.id && _.value.type === R.type : i(R), x = F$("breakpoints"), B = ho(() => x.value.mobile), { searchInput: U, searchScope: j, searchResults: te, searchResultsLoading: ie } = g$(), oe = ho(
      () => _.value || g()
    ), P = wi(null);
    N$(P, () => {
      if (!P.value)
        return;
      const R = K.value.find(
        (z) => z.value === P.value
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
      () => te.value.flatMap((R) => R.items)
    ), Q = wi({}), ye = ho(
      () => Q.value[j.value]
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
      const ae = _$("i18n");
      return wn(), Lm(be(Vt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: B.value,
        header: !1
      }, {
        default: Ft(() => [
          Yt("section", x$, [
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
                    vt(be(Tm), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": R.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
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
                vt(be(V), {
                  grow: "",
                  align: "center"
                }, {
                  default: Ft(() => [
                    Uo(Yt("h5", b$, null, 512), [
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
                    Uo(vt(be(Tm), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: C
                    }, {
                      default: Ft(() => [
                        S$(bm(R.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
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
              Uo(Yt("h5", $$, null, 512), [
                [ae, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Yt("div", null, [
                vt(ko, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: oe.value.label,
                  icon: oe.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            Yt("div", V$, [
              vt(be(U$), {
                modelValue: be(U),
                "onUpdate:modelValue": z[0] || (z[0] = (S) => km(U) ? U.value = S : null),
                role: "combobox",
                "aria-activedescendant": $e.value,
                "aria-controls": "sx-suggestions-filters__search-results__menu",
                "aria-autocomplete": "none",
                placeholder: r.value.searchPlaceholder,
                "input-type": "search",
                "start-icon": be(Lu),
                clearable: !!be(U),
                onKeydown: xe
              }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
            ]),
            vt(be(R$), {
              active: be(j),
              "onUpdate:active": [
                z[2] || (z[2] = (S) => km(j) ? j.value = S : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Ft(() => [
                (wn(!0), po(Vm, null, $m(s.value, (S, D) => (wn(), Lm(be(z$), {
                  key: D,
                  name: S.name,
                  label: S.label
                }, {
                  default: Ft(() => [
                    be(U) ? (wn(), po("div", T$, [
                      vt(be(I$), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (b) => Ne(b, S.name),
                        selected: P.value,
                        "onUpdate:selected": z[1] || (z[1] = (b) => P.value = b),
                        "show-pending": be(ie),
                        expanded: "",
                        "menu-items": K.value
                      }, {
                        pending: Ft(() => [
                          Uo(Yt("div", A$, null, 512), [
                            [ae, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Ft(() => [
                          be(ie) ? Em("", !0) : (wn(), po("div", D$, [
                            Uo(Yt("span", P$, null, 512), [
                              [ae, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            Uo(Yt("span", B$, null, 512), [
                              [ae, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (wn(), po("div", E$, [
                      (wn(!0), po(Vm, null, $m(S.filterGroups, (b) => (wn(), po("div", {
                        key: b.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        vt(r$, {
                          "filter-group": b,
                          "tentatively-select-filter": L,
                          "is-selected": N,
                          limit: c(S.name, b.type) ? 4 : 0,
                          "get-sub-filter-config": (T) => l(T, S.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        c(S.name, b.type) ? (wn(), po("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: C$((T) => a(b.id), ["enter"]),
                          onClick: (T) => a(b.id)
                        }, [
                          Yt("span", null, bm(R.$i18n(I[b.id])), 1)
                        ], 40, L$)) : Em("", !0)
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
const Us = window.Vue.unref, vi = window.Vue.openBlock, Am = window.Vue.createBlock;
window.Vue.createCommentVNode;
const j$ = window.Vue.renderList, H$ = window.Vue.Fragment, Dm = window.Vue.createElementBlock, G$ = window.Vue.normalizeClass, Pm = window.Vue.createVNode, q$ = {
  key: 1,
  class: "cx-suggestion-list__filters flex mx-4 pb-2"
}, Bm = window.Vue.ref, Fm = window.Vue.watch, W$ = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = fe(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: o } = qw(), { targetLanguageURLParameter: s } = F(), {
      getFiltersSummary: a,
      selectFilter: r,
      isFilterSelected: l,
      waitingForPageCollectionsFetch: c,
      validateURLFilterWithCollections: u,
      setFeaturedCollectionFilterIfNeeded: i
    } = ro(), d = Bm(!1), g = () => {
      o(), d.value = !0;
    }, m = (h) => {
      n(h), r(h);
    }, p = Bm(a());
    return Fm(d, (h) => {
      h || (p.value = a());
    }), Fm([c, s], ([h]) => {
      h || (u(), i(), p.value = a());
    }), (h, f) => Us(c) ? (vi(), Am(Us(mt), { key: 0 })) : (vi(), Dm("div", q$, [
      (vi(!0), Dm(H$, null, j$(p.value, (w) => (vi(), Am(ko, {
        key: w.label,
        class: G$(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": Us(l)(w)
        }]),
        icon: w.icon,
        content: w.label,
        onClick: (v) => m(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Pm(ko, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: Us(nd),
        content: Us(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: g
      }, null, 8, ["icon", "content"]),
      Pm(O$, {
        modelValue: d.value,
        "onUpdate:modelValue": f[0] || (f[0] = (w) => d.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, Io = window.Vue.computed, Nm = window.Vue.ref, ql = window.Vue.watch, X$ = window.Vuex.useStore, K$ = () => {
  const e = X$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = F(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Tr(), r = Lt(), l = Io(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), c = Io(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), u = Nm(0), i = Nm(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, g = 4, m = Io(
    () => a(u.value)
  );
  ql(
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
  ql(
    p,
    () => {
      p.value.forEach((U) => {
        U.seen = !0;
      });
    },
    { deep: !0 }
  );
  const h = () => {
    _(), x(), E(), B();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: w
  } = id(), v = (U) => U.length === d, C = Io(
    () => v(p.value)
  ), y = Io(
    () => v(m.value)
  ), _ = () => {
    const U = (u.value + 1) % g, j = v(
      a(U)
    );
    (!y.value || !j) && f();
  }, E = () => {
    const U = (i.value + 1) % g, j = v(
      s(U)
    );
    (!C.value || !j) && w();
  }, L = (U) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", U), _();
  }, N = (U) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", U), E();
  }, x = () => u.value = (u.value + 1) % g, B = () => i.value = (i.value + 1) % g;
  return ql(
    o,
    () => {
      i.value = 0, E(), u.value = 0, _();
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
    isCurrentPageSuggestionsSliceFull: C,
    isCurrentSectionSuggestionsSliceFull: y
  };
}, Y$ = window.Vuex.useStore, dd = () => {
  const e = Y$(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = id(), { addFeaturedCollectionFlag: o } = Br(), s = (i, d, g) => e.state.suggestions.pageSuggestions.find(
    (m) => m.sourceLanguage === i && m.targetLanguage === d && m.sourceTitle === g
  ), a = (i) => k(void 0, null, function* () {
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
    markFavoriteSuggestion: (i, d, g) => k(void 0, null, function* () {
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
}, Q$ = "suggestion_no_seed", J$ = "suggestion_recent_edit", Z$ = "suggestion_topic_area", eV = "suggestion_search_result_seed", tV = "suggestion_popular_articles", nV = "suggestion_collections", oV = "suggestion_region", sV = () => {
  const { currentSuggestionFilters: e } = F();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === an)
      return t ? J$ : Q$;
    if (n === tt)
      return Z$;
    if (n === Be)
      return oV;
    if (n === qt)
      return eV;
    if (o === rn)
      return tV;
    if (o === ee || n === ee)
      return nV;
    const s = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${o}`
    );
    throw mw.errorLogger.logError(s, "error.contenttranslation"), s;
  };
};
const _i = window.Vue.unref, Mm = window.Vue.createVNode, Ro = window.Vue.toDisplayString, zo = window.Vue.createElementVNode, Is = window.Vue.openBlock, Rs = window.Vue.createElementBlock, Si = window.Vue.createCommentVNode, Um = window.Vue.createTextVNode, aV = window.Vue.normalizeClass, iV = { class: "cx-featured-collection-banner py-4 px-6" }, rV = { class: "cx-featured-collection-banner__header mb-3" }, lV = { class: "cx-featured-collection-banner__header-text" }, cV = { class: "cx-featured-collection-banner__title mb-0" }, uV = {
  key: 0,
  class: "cx-featured-collection-banner__source mb-0"
}, dV = { class: "cx-featured-collection-banner__content" }, gV = { class: "cx-featured-collection-banner__learn-more-container" }, mV = ["href"], Im = window.Codex.CdxIcon, Wl = window.Vue.ref, pV = window.Vue.computed, hV = window.Vue.onMounted, fV = window.Vue.onUnmounted, wV = {
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
    const t = Wl(!1), n = Wl(null), o = Wl(null), s = pV(() => n.value ? (o.value, n.value.scrollHeight > n.value.clientHeight) : !1), a = () => {
      t.value = !t.value;
    }, r = () => {
      o.value = window.innerWidth;
    };
    return hV(() => {
      window.addEventListener("resize", r);
    }), fV(() => {
      window.removeEventListener("resize", r);
    }), (l, c) => (Is(), Rs("div", iV, [
      zo("div", rV, [
        Mm(_i(Im), {
          icon: _i(sd),
          class: "cx-featured-collection-banner__icon me-3 mt-1"
        }, null, 8, ["icon"]),
        zo("div", lV, [
          zo("h5", cV, Ro(l.$i18n("cx-featured-collection-banner-title")), 1),
          e.communityName ? (Is(), Rs("span", uV, Ro(e.communityName), 1)) : Si("", !0)
        ])
      ]),
      zo("div", dV, [
        zo("div", {
          ref_key: "descriptionRef",
          ref: n,
          class: aV(["cx-featured-collection-banner__description", {
            "cx-featured-collection-banner__description--expanded": t.value
          }])
        }, [
          Um(Ro(e.description || l.$i18n("cx-featured-collection-banner-description")) + " ", 1),
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
      zo("div", gV, [
        (t.value || !s.value) && e.learnMoreUrl ? (Is(), Rs("a", {
          key: 0,
          href: e.learnMoreUrl,
          class: "cx-featured-collection-banner__learn-more",
          target: "_blank"
        }, [
          Um(Ro(l.$i18n("cx-featured-collection-banner-learn-more")) + " ", 1),
          Mm(_i(Im), {
            icon: _i(Ba),
            size: "small",
            class: "cx-featured-collection-banner__learn-more-icon"
          }, null, 8, ["icon"])
        ], 8, mV)) : Si("", !0)
      ])
    ]));
  }
};
const Rm = window.Vue.normalizeClass, vV = window.Vue.resolveDirective, zs = window.Vue.createElementVNode, yi = window.Vue.withDirectives, pe = window.Vue.unref, Qe = window.Vue.openBlock, Nt = window.Vue.createBlock, vn = window.Vue.createCommentVNode, Xl = window.Vue.createVNode, Os = window.Vue.withCtx, zm = window.Vue.renderList, Om = window.Vue.Fragment, Kl = window.Vue.createElementBlock, _V = window.Vue.toDisplayString, SV = window.Vue.createTextVNode, yV = window.Vue.vShow, CV = { class: "cx-suggestion-list" }, xV = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, bV = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, kV = { class: "cx-suggestion-list__refresh-button-container justify-center" }, _t = window.Vue.computed, $V = window.Vue.inject, VV = window.Vue.ref, EV = window.Codex.CdxButton, LV = window.Codex.CdxIcon, TV = window.Vuex.useStore, AV = {
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
    } = F(), { supportedLanguageCodes: s } = Aa(), a = lw(), r = (z) => a(z, n.value), l = (z) => a(t.value, z), c = sV(), { featuredCollection: u } = Wt(), { findSelectedFilter: i } = ro(), d = _t(() => i()), g = Na(), m = (z) => {
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
      pageSuggestionsLoading: C,
      sectionSuggestionsLoading: y,
      isCurrentPageSuggestionsSliceFull: _,
      isCurrentSectionSuggestionsSliceFull: E
    } = K$(), L = VV(null), N = Lt(), x = () => {
      N({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), v(), L.value && L.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: B, markFavoritePageSuggestion: U } = dd(), j = $V("breakpoints"), te = _t(() => j.value.mobile), ie = _t(
      () => te.value ? null : "pb-2 flex justify-between items-center"
    ), oe = TV(), P = _t(
      () => oe.state.suggestions.isPageSuggestionsFetchPending
    ), I = _t(
      () => oe.state.suggestions.isSectionSuggestionsFetchPending
    ), K = _t(
      () => P.value || C.value && !_.value
    ), Q = _t(
      () => I.value || y.value && !E.value
    ), ye = _t(
      () => P.value || C.value || p.value.length > 0
    ), $e = _t(
      () => I.value || y.value || h.value.length > 0
    ), xe = _t(
      () => !ye.value && !$e.value
    ), Ne = _t(
      () => !y.value && !C.value && !P.value && !I.value && !xe.value
    ), R = _t(
      () => {
        var z;
        return u.value && ((z = d.value) == null ? void 0 : z.id) === u.value.name;
      }
    );
    return (z, ae) => {
      const S = vV("i18n");
      return yi((Qe(), Kl("div", CV, [
        Xl(pe(Ze), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: Os(() => [
            zs("div", {
              class: Rm(["cx-suggestion-list__header-card__header px-4", ie.value])
            }, [
              yi(zs("h3", {
                class: Rm(["mw-ui-card__title mb-0", { "py-3": te.value }])
              }, null, 2), [
                [S, void 0, "cx-suggestionlist-title"]
              ]),
              te.value ? vn("", !0) : (Qe(), Nt(Sr, {
                key: 0,
                "source-languages": pe(s),
                "target-languages": pe(s),
                "selected-source-language": pe(t),
                "selected-target-language": pe(n),
                "onUpdate:selectedSourceLanguage": r,
                "onUpdate:selectedTargetLanguage": l
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Xl(W$)
          ]),
          default: Os(() => [
            te.value ? (Qe(), Nt(Sr, {
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
        R.value ? (Qe(), Nt(wV, {
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
            yi(zs("h5", xV, null, 512), [
              [S, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Qe(!0), Kl(Om, null, zm(pe(h), (D, b) => (Qe(), Nt(Uu, {
              key: `section-suggestion-${b}`,
              class: "ma-0",
              suggestion: D,
              onClose: (T) => pe(w)(D),
              onClick: (T) => m(D),
              onBookmark: (T) => pe(B)(D)
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
            yi(zs("h5", bV, null, 512), [
              [S, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Qe(!0), Kl(Om, null, zm(pe(p), (D, b) => (Qe(), Nt(Uu, {
              key: `page-suggestion-${b}`,
              suggestion: D,
              onClose: (T) => pe(f)(D),
              onClick: (T) => m(D),
              onBookmark: (T) => pe(U)(D)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            K.value ? (Qe(), Nt(pe(mt), { key: 0 })) : vn("", !0)
          ]),
          _: 1
        }, 512)) : vn("", !0),
        xe.value ? (Qe(), Nt(Hw, {
          key: 3,
          title: z.$i18n("cx-sx-suggestion-list-empty-title"),
          description: z.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : vn("", !0),
        zs("div", kV, [
          Ne.value ? (Qe(), Nt(pe(EV), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: x
          }, {
            default: Os(() => [
              Xl(pe(LV), {
                class: "me-1",
                icon: pe(ow)
              }, null, 8, ["icon"]),
              SV(" " + _V(z.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : vn("", !0)
        ])
      ], 512)), [
        [yV, e.active]
      ]);
    };
  }
}, DV = window.Vue.resolveDirective, PV = window.Vue.createElementVNode, BV = window.Vue.withDirectives, FV = window.Vue.renderList, NV = window.Vue.Fragment, Yl = window.Vue.openBlock, MV = window.Vue.createElementBlock, jm = window.Vue.unref, Hm = window.Vue.createBlock, Gm = window.Vue.withCtx, UV = window.Vue.createCommentVNode, IV = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, RV = window.Vue.computed, zV = window.Vuex.useStore, OV = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = zV(), n = RV(() => t.state.suggestions.favorites || []), o = Na(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = dd();
    return (r, l) => {
      const c = DV("i18n");
      return n.value.length ? (Yl(), Hm(jm(Ze), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Gm(() => [
          BV(PV("h3", IV, null, 512), [
            [c, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Gm(() => [
          (Yl(!0), MV(NV, null, FV(n.value, (u, i) => (Yl(), Hm(Uu, {
            key: `favorite-${i}`,
            suggestion: u,
            onClick: (d) => s(u),
            onBookmark: (d) => jm(a)(u)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : UV("", !0);
    };
  }
};
const jV = window.Vue.resolveDirective, js = window.Vue.createElementVNode, HV = window.Vue.withDirectives, GV = window.Vue.renderList, qV = window.Vue.Fragment, qm = window.Vue.openBlock, Wm = window.Vue.createElementBlock, WV = window.Vue.unref, XV = window.Vue.createVNode, KV = window.Vue.toDisplayString, YV = { class: "cx-help-panel pa-4" }, QV = { class: "cx-help-panel__item-list mt-6 ps-2" }, JV = ["href", "target"], ZV = ["textContent"], eE = window.Codex.CdxIcon, tE = {
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
      return qm(), Wm("div", YV, [
        HV(js("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        js("ul", QV, [
          (qm(), Wm(qV, null, GV(n, (r, l) => js("li", {
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
const nE = window.Vue.resolveDirective, zn = window.Vue.createElementVNode, Ql = window.Vue.withDirectives, Jl = window.Vue.toDisplayString, Ci = window.Vue.unref, Zl = window.Vue.withCtx, xi = window.Vue.createVNode, oE = window.Vue.openBlock, sE = window.Vue.createElementBlock, aE = { class: "cx-stats-panel pa-4" }, iE = ["textContent"], rE = { class: "cx-stats-panel__monthly-stats-label" }, lE = ["textContent"], cE = { class: "cx-stats-panel__total-stats-label" }, uE = ["href", "target"], dE = ["textContent"], gE = window.Codex.CdxIcon, mE = window.Vue.ref, Xm = window.Vue.computed, pE = window.Vue.watch, hE = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = fe(), n = e, o = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", s = Xm(() => {
      var u, i;
      const c = ((i = (u = n.stats) == null ? void 0 : u[o]) == null ? void 0 : i.count) || 0;
      return mw.language.convertNumber(c);
    }), a = Xm(() => {
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
          (E, L) => Math.max(E, c[L].delta),
          0
        ), g = i.map((E) => c[E].delta), m = r.value.getBoundingClientRect().width, p = r.value.getBoundingClientRect().height;
        r.value.width = m, r.value.height = p;
        const h = 4, f = 6, w = 50, v = (w - h) / d;
        let C = h;
        const y = Math.floor(
          (m - h) / (f + h)
        ), _ = g.slice(
          Math.max(g.length - y, 0)
        );
        _.forEach((E, L) => {
          L === _.length - 1 && (u.fillStyle = "#36c");
          const N = w - E * v;
          u.fillRect(C, N, f, E * v), C += f + h;
        });
      }
    ), (c, u) => {
      const i = nE("i18n");
      return oE(), sE("div", aE, [
        Ql(zn("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        xi(Ci(M), null, {
          default: Zl(() => [
            xi(Ci(V), { class: "cx-stats-panel__monthly-stats" }, {
              default: Zl(() => [
                zn("h3", {
                  textContent: Jl(a.value)
                }, null, 8, iE),
                Ql(zn("h5", rE, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            xi(Ci(V), { class: "cx-stats-panel__total-stats" }, {
              default: Zl(() => [
                zn("h3", {
                  textContent: Jl(s.value)
                }, null, 8, lE),
                Ql(zn("h5", cE, null, 512), [
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
          xi(Ci(gE), {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          zn("span", {
            textContent: Jl(l.label)
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
          vE(wE(Ea), {
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
  const e = kE(), t = Eo(), { addFeaturedCollectionFlag: n } = Br();
  return () => k(void 0, null, function* () {
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
  } = F(), { isDefaultFilter: r } = Ou(), { previousRoute: l } = Fe(e), c = Lt(), u = () => {
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
}, Km = window.Vue.computed;
window.Vuex.useStore;
const Le = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = F(), { getLoadedSuggestion: s } = Fa(), a = Km(
    () => s(
      e.value,
      t.value,
      n.value
    )
  ), r = Km(() => o.value === no.LEAD_SECTION_DUMMY_TITLE ? o.value : a.value.missingSections[o.value] || a.value.presentSections[o.value] || "");
  return { sectionSuggestion: a, activeSectionTargetTitle: r };
}, EE = window.Vuex.useStore, LE = window.Vue.computed, Xt = () => {
  const e = EE(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = F();
  return { currentTranslation: LE(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, ec = window.Vue.computed, TE = window.Vuex.useStore, ot = () => {
  const e = TE(), { sectionSuggestion: t } = Le(), { currentTranslation: n } = Xt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = F(), r = ec(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = ec(
    () => {
      var u, i;
      return ((u = t.value) == null ? void 0 : u.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    }
  ), c = ec(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: r, currentTargetPage: c, currentTargetPageTitle: l };
}, bi = window.Vue.computed, AE = window.Vuex.useStore, se = () => {
  const e = AE(), { currentSourcePage: t } = ot(), { currentMTProvider: n } = Fe(e), { sectionURLParameter: o } = F(), s = bi(() => {
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
}, tc = window.Vue.computed, ht = () => {
  const { sectionURLParameter: e } = F(), { targetPageExists: t } = cn(), { sourceSection: n } = se(), { sectionSuggestion: o } = Le(), s = tc(
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
}, DE = window.Vue.ref, ki = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, nc = DE(null), Tt = () => {
  const { isCurrentSectionPresent: e } = ht(), t = () => {
    e.value ? o(ki.EXPAND) : o(ki.NEW_SECTION);
  }, n = () => {
    nc.value = null;
  }, o = (s) => {
    if (!Object.values(ki).includes(s))
      throw new Error("[CX] Invalid publishing target used");
    nc.value = s;
  };
  return {
    target: nc,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: o,
    PUBLISHING_TARGETS: ki
  };
}, PE = window.Vue.watch, BE = () => {
  const { fetchAllTranslations: e } = hs(), t = iw(), n = $E(), { fetchPageCollectionGroups: o } = Ar(), { logDashboardOpenEvent: s } = Xw(), { applicationLanguagesInitialized: a } = cw(), { clearPublishTarget: r } = Tt();
  return () => k(void 0, null, function* () {
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
}, Ym = window.Vue.computed, FE = window.Vue.ref, NE = window.Vue.watch, ME = window.Vue.watchEffect, UE = window.Vuex.useStore, IE = ["suggestions", "draft", "published"], RE = () => {
  const e = UE(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = F(), { translationsFetched: o } = hs(), s = FE(null);
  if (IE.includes(t.value))
    s.value = t.value;
  else {
    const a = Ym(
      () => o.value.draft
    ), r = Ym(
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
const ke = window.Vue.unref, Ie = window.Vue.createVNode, jE = window.Vue.toDisplayString, HE = window.Vue.createTextVNode, _n = window.Vue.withCtx, oc = window.Vue.openBlock, Qm = window.Vue.createBlock, Jm = window.Vue.createCommentVNode, GE = window.Vue.vShow, qE = window.Vue.withDirectives, WE = window.Vue.isRef, XE = window.Vue.createElementBlock, Zm = window.Vue.computed, KE = window.Vue.inject, YE = window.Vuex.useStore, QE = window.Codex.CdxButton, JE = window.Codex.CdxIcon, ZE = {
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
    const r = Zm(() => a.state.translator.translatorStats), l = RE(), c = OE(), u = Ww(), i = (m) => {
      u(m), l.value = m;
    }, d = KE("breakpoints"), g = Zm(() => d.value.mobile);
    return mw.cx.eventlogging.stats.dashboardAccess(g.value), (m, p) => (oc(), XE("div", null, [
      Ie(ke(M), { class: "ma-0 pb-4" }, {
        default: _n(() => [
          Ie(ke(QE), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: _n(() => [
              Ie(ke(JE), {
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
      Ie(ke(M), {
        class: "ma-0",
        align: "start"
      }, {
        default: _n(() => [
          m.$mwui.breakpoint.tabletAndUp ? (oc(), Qm(ke(V), {
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
          })) : Jm("", !0),
          Ie(ke(V), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: _n(() => [
              qE(Ie(OV, null, null, 512), [
                [GE, ke(l) === "suggestions"]
              ]),
              Ie(AV, {
                active: ke(l) === "suggestions"
              }, null, 8, ["active"]),
              Ie(rm, {
                "translation-status": "draft",
                "active-status": ke(l)
              }, null, 8, ["active-status"]),
              Ie(rm, {
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
                      Ie(hE, { stats: r.value }, null, 8, ["stats"])
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
                      Ie(tE)
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
      m.$mwui.breakpoint.mobile ? (oc(), Qm(bE, {
        key: 0,
        active: ke(l),
        "onUpdate:active": p[0] || (p[0] = (h) => WE(l) ? l.value = h : null),
        items: ke(c)
      }, null, 8, ["active", "items"])) : Jm("", !0)
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
const ep = /* @__PURE__ */ he(e4, [["render", i4]]), Oo = window.Vue.computed, r4 = () => {
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
function u4() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function d4(e, t) {
  return k(this, null, function* () {
    yield gd(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = l4(t);
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
    return m4(() => k(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = h4;
      const i = yield d4(c, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = c4(
        i,
        e.content,
        e.language,
        e.dir
      );
      const d = ve.ui.contextItemFactory.lookup("reference");
      d.prototype.getRendering = u4, o.focus();
    })), { sxeditor: n };
  }
}, fr = window.Vue.createElementVNode, w4 = window.Vue.openBlock, v4 = window.Vue.createElementBlock, _4 = ["lang", "dir"], S4 = /* @__PURE__ */ fr("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ fr("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ fr("div", { class: "toolbar" })
  ])
], -1), y4 = ["lang", "dir"];
function C4(e, t, n, o, s, a) {
  return w4(), v4("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    S4,
    fr("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, y4)
  ], 8, _4);
}
const x4 = /* @__PURE__ */ he(f4, [["render", C4]]);
function gd() {
  return mw.loader.using("mw.cx3.ve");
}
const b4 = window.Vuex.useStore, k4 = () => {
  const e = b4();
  return (t, n) => k(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield gd(), new Promise((s) => {
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
}, $4 = window.Vuex.useStore, Kw = () => {
  const e = $4();
  return (t, n, o, s = null) => k(void 0, null, function* () {
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
}, Ir = () => {
  const { currentSourcePage: e } = ot(), t = k4(), n = Kw(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = F(), c = (d, g) => k(void 0, null, function* () {
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
}, V4 = window.Vuex.useStore, fs = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = F(), { sectionSuggestion: a, activeSectionTargetTitle: r } = Le(), { target: l } = Tt(), c = V4(), u = nt(), i = () => {
    const p = u.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !c.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return u.getRoutes().find((h) => h.name === p);
  }, d = () => {
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
    if (d())
      return;
    const p = i();
    u.push({ name: p.name });
  };
}, tp = window.Vue.computed, E4 = window.Vue.ref, L4 = window.Vue.watchEffect, sc = /* @__PURE__ */ new Map(), T4 = (e, t) => k(void 0, null, function* () {
  return (yield ge.fetchArticleSections(
    e,
    t
  )).sections.filter(
    (s) => s.level === "2"
  )[0].byteoffset;
}), A4 = (e, t) => {
  const n = `${e}:${t}`;
  if (sc.has(n))
    return sc.get(n);
  const o = T4(e, t);
  return sc.set(n, o), o;
}, Yw = () => {
  const { currentSourcePage: e } = ot(), { sectionSuggestion: t } = Le(), { sectionURLParameter: n } = F(), o = E4(null);
  L4(() => k(void 0, null, function* () {
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
      o.value = yield A4(l, c);
    } else
      o.value = ((r = e.value) == null ? void 0 : r.articleSize) || null;
  }));
  const s = tp(() => o.value ? !t.value && Gt ? Hf(o.value) : Yu(o.value) : Xe.unknown);
  return { isQuickTranslation: tp(() => s.value === Xe.stub || s.value === Xe.easy), difficulty: s, sizeInBytes: o };
}, md = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = F(), s = Lt(), { difficulty: a } = Yw();
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
      return Mu.value && (l.event_context = Mu.value), o.value ? (l.translation_source_section = o.value, l.translation_type = "section") : l.translation_type = "article", s(l);
    }
  };
}, pd = () => {
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
}, D4 = window.Vue.ref, P4 = () => {
  const e = nt(), { logDashboardTranslationStartEvent: t } = md(), n = pd(), o = fs(), { sectionURLParameter: s } = F(), { targetPageExists: a } = cn(), { selectPageSectionByTitle: r } = Ir(), l = () => k(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), c = D4(!1), { currentTranslation: u } = Xt();
  return {
    handlePrimaryButtonClick: () => {
      u.value ? u.value.isArticleTranslation && !Gt ? c.value = !0 : (n(), o()) : s.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: c
  };
};
const B4 = window.Vue.resolveDirective, np = window.Vue.createElementVNode, op = window.Vue.withDirectives, F4 = window.Vue.unref, N4 = window.Vue.withCtx, M4 = window.Vue.openBlock, U4 = window.Vue.createBlock, I4 = {
  href: "",
  target: "_blank"
}, R4 = window.Codex.CdxDialog, z4 = {
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
      const d = B4("i18n");
      return M4(), U4(F4(R4), {
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
        default: N4(() => [
          op(np("p", null, null, 512), [
            [d, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          op(np("a", I4, null, 512), [
            [d, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
}, O4 = () => {
  const {
    sectionURLParameter: e,
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = F(), { loadSuggestion: s } = Fa();
  return () => k(void 0, null, function* () {
    const a = yield s(
      t.value,
      n.value,
      o.value
    );
    return a instanceof on ? a.sourceSections.includes(e.value) : !1;
  });
};
const Se = window.Vue.unref, j4 = window.Vue.resolveDirective, Hs = window.Vue.createElementVNode, sp = window.Vue.withDirectives, Gs = window.Vue.openBlock, ac = window.Vue.createElementBlock, ic = window.Vue.createCommentVNode, St = window.Vue.createVNode, Mt = window.Vue.withCtx, rc = window.Vue.toDisplayString, lc = window.Vue.createTextVNode, H4 = window.Vue.withModifiers, ap = window.Vue.createBlock, G4 = window.Vue.Fragment, q4 = { class: "sx-translation-confirmer-body pb-4" }, W4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, X4 = ["innerHTML"], K4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, Y4 = ["href"], Q4 = ["innerHTML"], cc = window.Vue.computed, uc = window.Vue.ref, J4 = window.Vue.watchEffect, Z4 = window.Vuex.useStore, dc = window.Codex.CdxButton, e3 = window.Codex.CdxIcon, t3 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = nt(), o = Z4(), { sectionSuggestion: s } = Le(), { targetLanguageAutonym: a } = Fe(o), { sectionURLParameter: r, clearSectionURLParameter: l } = F(), { logDashboardTranslationStartEvent: c } = md(), u = fs(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: d } = P4(), g = uc(!1), m = uc(null), p = () => k(this, null, function* () {
      let ie = !0;
      try {
        ie = yield $t.checkUnreviewedTranslations();
      } catch (oe) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          oe
        );
      }
      ie !== !0 && (g.value = !0, m.value = ie.targetUrl);
    }), h = () => k(this, null, function* () {
      yield p(), !g.value && (c(), u());
    }), f = () => k(this, null, function* () {
      yield p(), !g.value && i();
    }), w = t;
    J4(() => {
      d.value && (w("open-translation-confirmation-dialog"), d.value = !1);
    });
    const {
      actionInformationMessage: v,
      getActionButtonLabel: C,
      isProgressiveButton: y,
      targetArticlePath: _
    } = r4(), E = fe(), L = cc(
      () => E.i18n(C(!!r.value))
    ), N = () => k(this, null, function* () {
      yield p(), !g.value && n.push({ name: "sx-section-selector" });
    }), x = cc(() => {
      var ie, oe;
      return r.value && !!((oe = (ie = s.value) == null ? void 0 : ie.sourceSections) != null && oe.length);
    }), { targetPageExists: B } = cn(), U = cc(() => !r.value && B.value && Gt), j = O4(), te = uc(!1);
    return j().then((ie) => {
      ie || l(), te.value = !0;
    }), (ie, oe) => {
      const P = j4("i18n");
      return Gs(), ac(G4, null, [
        Hs("section", q4, [
          Se(r) && te.value ? (Gs(), ac("section", W4, [
            sp(Hs("h6", null, null, 512), [
              [P, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Hs("h5", {
              class: "ma-0",
              innerHTML: Se(r)
            }, null, 8, X4)
          ])) : Se(B) && !Se(r) ? (Gs(), ac("section", K4, [
            St(Se(M), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Mt(() => [
                sp(St(Se(V), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [P, [Se(a)], "cx-sx-existing-translation-status"]
                ]),
                St(Se(V), { shrink: "" }, {
                  default: Mt(() => [
                    Hs("a", {
                      href: Se(_),
                      target: "_blank"
                    }, [
                      St(Se(e3), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: Se(Ba)
                      }, null, 8, ["icon"])
                    ], 8, Y4)
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
                    Hs("span", { innerHTML: Se(v) }, null, 8, Q4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : ic("", !0),
          St(Se(M), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Mt(() => [
              x.value ? (Gs(), ap(Se(V), {
                key: 0,
                shrink: ""
              }, {
                default: Mt(() => [
                  St(Se(dc), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: H4(N, ["stop"])
                  }, {
                    default: Mt(() => [
                      lc(rc(ie.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ic("", !0),
              U.value ? (Gs(), ap(Se(V), {
                key: 1,
                shrink: ""
              }, {
                default: Mt(() => [
                  St(Se(dc), {
                    size: "large",
                    onClick: h
                  }, {
                    default: Mt(() => [
                      lc(rc(ie.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : ic("", !0),
              St(Se(V), { shrink: "" }, {
                default: Mt(() => [
                  St(Se(dc), {
                    weight: "primary",
                    size: "large",
                    action: Se(y) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: Mt(() => [
                      lc(rc(L.value), 1)
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
        St(z4, {
          modelValue: g.value,
          "onUpdate:modelValue": oe[0] || (oe[0] = (I) => g.value = I),
          "target-url": m.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const gc = window.Vue.unref, n3 = window.Vue.openBlock, o3 = window.Vue.createBlock, s3 = window.Vue.computed, Qw = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t } = Aa(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = F(), { currentLanguageTitleGroup: s } = cn(), a = s3(
      () => {
        var u;
        return ((u = s.value) == null ? void 0 : u.titles.map((i) => i.lang)) || [];
      }
    ), r = rx(), l = (u) => r(u, o.value), c = (u) => r(n.value, u);
    return (u, i) => (n3(), o3(Sr, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": gc(t),
      "selected-source-language": gc(n),
      "selected-target-language": gc(o),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": c
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, a3 = (e) => {
  const s = e / 5 / 15;
  return Math.ceil(s);
};
const Me = window.Vue.unref, mc = window.Vue.toDisplayString, On = window.Vue.createElementVNode, Qt = window.Vue.createVNode, jo = window.Vue.withCtx, i3 = window.Vue.resolveDirective, r3 = window.Vue.withDirectives, l3 = window.Vue.normalizeClass, ip = window.Vue.openBlock, c3 = window.Vue.createElementBlock, u3 = window.Vue.createCommentVNode, d3 = window.Vue.createBlock, g3 = ["textContent"], m3 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, p3 = ["textContent"], h3 = { class: "pe-3" }, f3 = ["textContent"], w3 = window.Codex.CdxButton, qs = window.Codex.CdxIcon, jn = window.Vue.computed, v3 = window.Vuex.useStore, _3 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = v3(), { currentSourcePage: n } = ot(), { sectionSuggestion: o } = Le(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l
    } = F(), c = jn(() => t.state.suggestions.favorites || []), u = jn(
      () => c.value.some(
        (N) => r.value === N.title && s.value === N.sourceLanguage && a.value === N.targetLanguage
      )
    ), { markFavoriteSuggestion: i, removeFavoriteSuggestion: d } = dd(), g = () => i(
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
        (B, U) => B + U,
        0
      );
      return v(N);
    }), { isQuickTranslation: y, sizeInBytes: _ } = Yw(), E = fe(), L = jn(() => {
      if (!o.value && !n.value || !_.value)
        return "";
      const N = a3(_.value), x = N >= 60 ? N / 60 : 0, B = Math.round(x * 2) / 2, U = mw.language.convertNumber(B), j = mw.language.convertNumber(N);
      if (!o.value && Gt)
        return E.i18n(
          "cx-sx-translation-confirmer-translation-time-whole-article",
          U,
          j
        );
      if (o.value) {
        if (l.value)
          return E.i18n(
            "cx-sx-translation-confirmer-translation-time-single-section",
            U,
            j
          );
      } else
        return E.i18n(
          "cx-sx-translation-confirmer-translation-time-lead-section",
          U,
          j
        );
      const te = Object.keys(o.value.missingSections).length;
      return E.i18n(
        "cx-sx-translation-confirmer-translation-time-sections",
        U,
        j,
        mw.language.convertNumber(te)
      );
    });
    return (N, x) => {
      const B = i3("i18n");
      return ip(), d3(Me(M), {
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
                        textContent: mc(Me(r))
                      }, null, 8, g3),
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
                      Qt(Me(w3), {
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
              On("div", m3, [
                On("div", null, [
                  On("span", null, [
                    Qt(Me(qs), {
                      icon: Me(nw),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    On("span", {
                      class: "pe-3",
                      textContent: mc(w.value)
                    }, null, 8, p3)
                  ]),
                  On("span", null, [
                    Qt(Me(qs), {
                      icon: Me(tw),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    r3(On("span", h3, null, 512), [
                      [B, [C.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                L.value ? (ip(), c3("span", {
                  key: 0,
                  class: l3(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Me(y)
                  }])
                }, [
                  Qt(Me(qs), {
                    icon: Me(TC),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  On("span", {
                    textContent: mc(L.value)
                  }, null, 8, f3)
                ], 2)) : u3("", !0)
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
const S3 = window.Vue.resolveDirective, fo = window.Vue.createElementVNode, $i = window.Vue.withDirectives, y3 = window.Vue.toDisplayString, C3 = window.Vue.createTextVNode, pc = window.Vue.unref, hc = window.Vue.withCtx, fc = window.Vue.openBlock, wc = window.Vue.createBlock;
window.Vue.createCommentVNode;
const x3 = { class: "pa-4" }, b3 = { class: "flex pt-2" }, k3 = window.Codex.CdxButton, $3 = window.Vue.ref, V3 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = fs(), a = pd(), r = $3(!1), { currentTranslation: l } = Xt(), c = () => k(this, null, function* () {
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
      const d = S3("i18n");
      return fc(), wc(pc(Vt), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: hc(() => [
          fo("div", b3, [
            r.value ? (fc(), wc(pc(mt), { key: 1 })) : (fc(), wc(pc(k3), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: hc(() => [
                C3(y3(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: hc(() => [
          fo("div", x3, [
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
const rp = window.Vue.unref, E3 = window.Vue.createVNode, lp = window.Vue.toDisplayString, Vi = window.Vue.createElementVNode, L3 = window.Vue.openBlock, T3 = window.Vue.createElementBlock, A3 = { class: "cx-translation-confirmer-featured-collection-banner ma-4 px-4 py-3" }, D3 = { class: "cx-translation-confirmer-featured-collection-banner__header" }, P3 = { class: "cx-translation-confirmer-featured-collection-banner__header-text" }, B3 = { class: "cx-translation-confirmer-featured-collection-banner__body" }, F3 = window.Vue.computed, N3 = window.Codex.CdxIcon, M3 = {
  __name: "SXTranslationConfirmerFeaturedCollectionBanner",
  setup(e) {
    const { featuredCollection: t } = Wt(), n = F3(() => {
      var o;
      return (o = t.value) == null ? void 0 : o.name;
    });
    return (o, s) => (L3(), T3("div", A3, [
      Vi("div", D3, [
        E3(rp(N3), {
          icon: rp(sd),
          size: "small",
          class: "cx-translation-confirmer-featured-collection-banner__header-icon me-2"
        }, null, 8, ["icon"]),
        Vi("span", P3, lp(o.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      Vi("div", B3, [
        Vi("p", null, lp(n.value), 1)
      ])
    ]));
  }
}, U3 = window.Vuex.useStore;
let Ei = [];
const hd = () => {
  const e = U3();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Ei.includes(o) ? Promise.resolve() : (Ei.push(o), Vo.fetchLanguageTitles(t, n).then((s) => {
      Ei = Ei.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, I3 = window.Vue.ref, Ho = I3(null), Jw = () => {
  const e = () => k(void 0, null, function* () {
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
const cp = window.Vue.resolveDirective, Li = window.Vue.createElementVNode, up = window.Vue.withDirectives, Hn = window.Vue.unref, Ti = window.Vue.withCtx, Sn = window.Vue.createVNode, Ai = window.Vue.openBlock, dp = window.Vue.createElementBlock, R3 = window.Vue.createCommentVNode, gp = window.Vue.createBlock, z3 = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, O3 = { class: "mb-0" }, j3 = { class: "sx-translation-confirmer__article-image flex justify-center" }, H3 = ["src"], G3 = { class: "ma-3" }, mp = window.Vue.computed, q3 = window.Vue.inject, W3 = window.Vue.onBeforeUnmount, pp = window.Vue.ref, X3 = window.Vue.watch, K3 = window.Vuex.useStore, Y3 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = K3(), { currentSourcePage: n } = ot(), { previousRoute: o } = Fe(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      clearTranslationURLParameters: l
    } = F(), { inFeaturedCollection: c } = ad(), u = q3("breakpoints"), i = mp(() => u.value.nextBreakpoint), d = mp(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(i.value);
      }
    ), g = pp(!1);
    X3(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.wikidataId;
      },
      (y) => k(this, null, function* () {
        const _ = yield c([y]);
        g.value = _[y];
      }),
      { immediate: !0 }
    );
    const { fetchTranslationsByStatus: m } = hs(), p = hd();
    m("draft"), p(s.value, r.value), gd(), Jw()(), aw()(a.value);
    const w = nt(), v = () => {
      const y = ["dashboard", "sx-article-search"];
      !o.value || !y.includes(o.value) ? w.push({ name: "dashboard" }) : w.push({ name: o.value });
    };
    W3(() => {
      const y = w.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && l();
    });
    const C = pp(!1);
    return (y, _) => {
      const E = cp("i18n"), L = cp("i18n-html");
      return Ai(), dp("section", z3, [
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
                up(Li("h5", O3, null, 512), [
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
        Li("div", j3, [
          d.value ? (Ai(), dp("img", {
            key: 0,
            src: d.value
          }, null, 8, H3)) : (Ai(), gp(Hn(et), {
            key: 1,
            size: "120",
            icon: Hn(_f),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Sn(_3),
        g.value ? (Ai(), gp(M3, { key: 0 })) : R3("", !0),
        Sn(Qw),
        Sn(t3, {
          onOpenTranslationConfirmationDialog: _[0] || (_[0] = (N) => C.value = !0)
        }),
        Sn(Hn(M), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Ti(() => [
            Li("p", G3, [
              up(Li("small", null, null, 512), [
                [L, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Sn(V3, {
          modelValue: C.value,
          "onUpdate:modelValue": _[1] || (_[1] = (N) => C.value = N)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const Q3 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: Y3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, J3 = window.Vue.resolveComponent, Z3 = window.Vue.createVNode, eL = window.Vue.normalizeClass, tL = window.Vue.openBlock, nL = window.Vue.createElementBlock;
function oL(e, t, n, o, s, a) {
  const r = J3("sx-translation-confirmer");
  return tL(), nL("main", {
    class: eL(["sx-translation-confirmer-view", a.classes])
  }, [
    Z3(r)
  ], 2);
}
const sL = /* @__PURE__ */ he(Q3, [["render", oL]]);
const aL = window.Vue.toDisplayString, hp = window.Vue.unref, iL = window.Vue.createVNode, rL = window.Vue.createTextVNode, lL = window.Vue.createElementVNode, cL = window.Vue.openBlock, uL = window.Vue.createElementBlock, dL = { class: "sx-section-selector-view-article-item" }, gL = ["href"], mL = window.Codex.CdxIcon, fp = {
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
    return (t, n) => (cL(), uL("span", dL, [
      lL("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        rL(aL(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        iL(hp(mL), {
          size: "x-small",
          icon: hp(Ba)
        }, null, 8, ["icon"])
      ], 8, gL)
    ]));
  }
};
const pL = window.Vue.resolveDirective, Di = window.Vue.createElementVNode, vc = window.Vue.withDirectives, wo = window.Vue.unref, hL = window.Vue.toDisplayString, Pi = window.Vue.withCtx, Ws = window.Vue.createVNode, fL = window.Vue.openBlock, wL = window.Vue.createElementBlock, vL = { class: "sx-section-selector__header pa-4" }, _L = { class: "sx-section-selector__header-text ma-0" }, SL = ["textContent"], yL = { class: "pt-0 ma-0" }, CL = { class: "ma-0" }, xL = window.Codex.CdxButton, bL = window.Codex.CdxIcon, kL = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Le();
    return (n, o) => {
      const s = pL("i18n");
      return fL(), wL("div", vL, [
        Ws(wo(M), { class: "ma-0 pb-3" }, {
          default: Pi(() => [
            Ws(wo(V), null, {
              default: Pi(() => {
                var a;
                return [
                  vc(Di("h6", _L, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Di("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: hL((a = wo(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, SL)
                ];
              }),
              _: 1
            }),
            Ws(wo(V), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Pi(() => [
                Ws(wo(xL), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Pi(() => [
                    Ws(wo(bL), { icon: wo(ms) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vc(Di("h4", yL, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        vc(Di("p", CL, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, wp = window.Vue.renderSlot, $L = window.Vue.renderList, VL = window.Vue.Fragment, _c = window.Vue.openBlock, vp = window.Vue.createElementBlock, Bi = window.Vue.unref, _p = window.Vue.createVNode, Sp = window.Vue.withCtx, EL = window.Vue.createBlock, LL = { class: "sx-section-selector__sections-list ma-0 pa-0" }, TL = window.Codex.CdxButton, AL = window.Codex.CdxIcon, Zw = {
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
    return (t, n) => (_c(), vp("ul", LL, [
      wp(t.$slots, "before-list"),
      (_c(!0), vp(VL, null, $L(e.sections, (o) => (_c(), EL(Bi(M), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Sp(() => [
          _p(Bi(TL), {
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
              _p(Bi(AL), {
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
}, DL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const PL = window.Vue.resolveDirective, Fi = window.Vue.createElementVNode, Ni = window.Vue.withDirectives, Ut = window.Vue.unref, Mi = window.Vue.openBlock, Sc = window.Vue.createBlock, BL = window.Vue.createCommentVNode, Go = window.Vue.withCtx, Xs = window.Vue.createVNode, FL = window.Vue.toDisplayString, NL = window.Vue.createTextVNode, ML = window.Vue.createElementBlock, UL = { class: "sx-section-selector__missing-sections py-2" }, IL = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, RL = ["lang", "dir", "innerHTML"], yc = window.Vue.computed, zL = window.Codex.CdxButton, OL = window.Codex.CdxInfoChip, jL = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Le(), { targetLanguageURLParameter: n } = F(), o = yc(() => O.getAutonym(n.value)), s = yc(
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
      const c = PL("i18n");
      return Mi(), ML("section", UL, [
        Ni(Fi("h4", IL, null, 512), [
          [c, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (Mi(), Sc(Ut(M), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Go(() => [
            Xs(Ut(V), {
              class: "py-6 justify-center",
              innerHTML: Ut(DL)
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
                Xs(Ut(zL), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: l[1] || (l[1] = (u) => r.$emit("close"))
                }, {
                  default: Go(() => [
                    NL(FL(r.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Mi(), Sc(Zw, {
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
              }, null, 8, RL),
              i ? Ni((Mi(), Sc(Ut(OL), {
                key: 0,
                class: "sx-section-selector__easy-section-badge"
              }, null, 512)), [
                [c, void 0, "cx-sx-section-selector-easy-section-badge"]
              ]) : BL("", !0)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const HL = window.Vue.resolveDirective, qo = window.Vue.createElementVNode, GL = window.Vue.withDirectives, yt = window.Vue.unref, qL = window.Vue.toDisplayString, Ui = window.Vue.createVNode, Ii = window.Vue.withCtx, WL = window.Vue.openBlock, XL = window.Vue.createElementBlock, KL = { class: "sx-section-selector__present-sections py-2" }, YL = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, QL = { class: "sx-section-selector__present-section-button-content" }, JL = ["textContent"], ZL = { class: "sx-section-selector__present-section-button-content" }, e5 = ["lang", "dir", "innerHTML"], t5 = ["lang", "dir", "innerHTML"], n5 = window.Vue.computed, o5 = window.Codex.CdxButton, s5 = window.Codex.CdxIcon, yp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Le(), { targetLanguageURLParameter: n } = F(), o = n5(() => O.getAutonym(n.value));
    return (s, a) => {
      var l;
      const r = HL("i18n");
      return WL(), XL("section", KL, [
        GL(qo("h4", YL, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        Ui(Zw, {
          sections: ((l = yt(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[1] || (a[1] = (c) => s.$emit("select-section", c))
        }, {
          "before-list": Ii(() => [
            Ui(yt(M), {
              tag: "li",
              class: "ma-0"
            }, {
              default: Ii(() => [
                Ui(yt(o5), {
                  weight: "quiet",
                  class: "col justify-start items-center py-3 px-4",
                  "aria-label": s.$i18n("sx-section-selector-next-button-aria-label"),
                  onClick: a[0] || (a[0] = (c) => s.$emit("select-section", yt(no).LEAD_SECTION_DUMMY_TITLE))
                }, {
                  default: Ii(() => [
                    qo("div", QL, [
                      qo("h5", {
                        class: "sx-section-selector__present-section-button-source",
                        textContent: qL(s.$i18n("cx-sx-present-lead-section-label"))
                      }, null, 8, JL)
                    ]),
                    Ui(yt(s5), {
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
              qo("div", ZL, [
                qo("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = yt(t)) == null ? void 0 : i.sourceLanguage,
                  dir: yt(O.getDir)((d = yt(t)) == null ? void 0 : d.sourceLanguage),
                  innerHTML: c
                }, null, 8, e5),
                qo("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = yt(t)) == null ? void 0 : g.targetLanguage,
                  dir: yt(O.getDir)((m = yt(t)) == null ? void 0 : m.targetLanguage),
                  innerHTML: u
                }, null, 8, t5)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Re = window.Vue.createVNode, Cc = window.Vue.openBlock, Cp = window.Vue.createBlock, xp = window.Vue.createCommentVNode, a5 = window.Vue.resolveDirective, Gn = window.Vue.createElementVNode, Ks = window.Vue.withDirectives, rt = window.Vue.unref, yn = window.Vue.withCtx, i5 = window.Vue.normalizeClass, bp = window.Vue.toDisplayString, kp = window.Vue.createTextVNode, r5 = window.Vue.createElementBlock, l5 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, c5 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, u5 = { class: "sx-section-selector__additional-consideration-title" }, d5 = { href: "#" }, g5 = { class: "sx-section-selector__additional-consideration-title" }, m5 = { href: "#" }, Ys = window.Vue.computed, p5 = window.Vue.inject, h5 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = p5("breakpoints"), n = Ys(() => t.value.desktopAndUp), { sectionSuggestion: o } = Le(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = F(), c = Ys(() => O.getAutonym(s.value)), u = Ys(() => O.getAutonym(a.value)), i = Ys(
      () => {
        var C;
        return Z.getPageUrl(s.value, (C = o.value) == null ? void 0 : C.sourceTitle);
      }
    ), d = Ys(
      () => {
        var C;
        return Z.getPageUrl(a.value, (C = o.value) == null ? void 0 : C.targetTitle);
      }
    ), g = nt(), m = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: p } = Xt(), h = fs(), f = pd(), { selectPageSectionByTitle: w } = Ir(), v = (C) => {
      l(C), p.value ? (f(), h()) : (w(C), g.push({ name: "sx-content-comparator" }));
    };
    return mw.cx.eventlogging.stats.selectSectionAccess(!n.value), (C, y) => {
      const _ = a5("i18n");
      return Cc(), r5("section", l5, [
        Re(kL, { onClose: m }),
        Re(Qw),
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
                Re(jL, {
                  onSelectSection: v,
                  onClose: m
                }),
                n.value ? xp("", !0) : (Cc(), Cp(yp, {
                  key: 0,
                  onSelectSection: v
                })),
                Gn("section", {
                  class: i5(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Ks(Gn("h4", c5, null, 512), [
                    [_, [
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
                          Re(fp, {
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
                          Re(fp, {
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
                        Gn("h6", u5, [
                          Re(rt(et), {
                            icon: rt(Y0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          kp(" " + bp(C.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Ks(Gn("p", null, null, 512), [
                          [_, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Ks(Gn("a", d5, null, 512), [
                          [_, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
                        Gn("h6", g5, [
                          Re(rt(et), {
                            icon: rt(K0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          kp(" " + bp(C.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Ks(Gn("p", null, null, 512), [
                          [_, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Ks(Gn("a", m5, null, 512), [
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
            n.value ? (Cc(), Cp(rt(V), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: yn(() => [
                Re(yp, {
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
}, f5 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: h5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, w5 = window.Vue.resolveComponent, v5 = window.Vue.createVNode, _5 = window.Vue.normalizeClass, S5 = window.Vue.openBlock, y5 = window.Vue.createElementBlock;
function C5(e, t, n, o, s, a) {
  const r = w5("sx-section-selector");
  return S5(), y5("main", {
    class: _5(["sx-section-selector-view", a.classes])
  }, [
    v5(r)
  ], 2);
}
const x5 = /* @__PURE__ */ he(f5, [["render", C5]]), Ri = window.Vue.computed, b5 = () => {
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
const $p = window.Vue.unref, k5 = window.Vue.createVNode, $5 = window.Vue.openBlock, V5 = window.Vue.createElementBlock, E5 = { class: "sx-content-comparator__content-type-selector" }, L5 = window.Vue.watchEffect, T5 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = b5();
    return L5(() => {
      a.value.map((l) => l.value).includes(n.selection) || s(a.value[0].value);
    }), (r, l) => ($5(), V5("div", E5, [
      k5($p(Ea), {
        items: $p(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, zi = window.Vue.computed, ev = () => {
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
  ), { sourceSection: s } = se(), a = zi(() => {
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
const Oi = window.Vue.createVNode, Cn = window.Vue.unref, A5 = window.Vue.resolveDirective, D5 = window.Vue.withDirectives, Qs = window.Vue.openBlock, Vp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ji = window.Vue.withCtx, xc = window.Vue.createBlock, P5 = window.Vue.normalizeClass, B5 = {
  key: 0,
  class: "ma-0 pa-0"
}, F5 = ["lang", "dir", "innerHTML"], Ep = window.Vue.ref, Hi = window.Vue.computed, N5 = window.Vue.onMounted, M5 = window.Vue.onBeforeUnmount, U5 = {
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
    const n = e, o = t, s = Ep(!1), { sectionSuggestion: a, activeSectionTargetTitle: r } = Le(), { isPresentLeadSection: l } = ht(), { sectionURLParameter: c } = F(), u = Hi(
      () => (g.value || "").replace(/ /g, "_")
    ), i = (w) => o("update:contentTypeSelection", w), { targetSectionAnchor: d } = ev(), g = Hi(
      () => {
        var w;
        return (((w = a.value) == null ? void 0 : w.sourceSections) || []).find(
          (v) => v === c.value
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
    ), h = Ep(null);
    let f;
    return N5(() => {
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
        once: !0
      });
    }), M5(() => {
      f == null || f.disconnect(), f = null;
    }), (w, v) => {
      const C = A5("i18n");
      return Qs(), xc(Cn(M), {
        ref_key: "contentHeader",
        ref: h,
        class: P5(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
        direction: "column",
        align: "stretch",
        reverse: s.value
      }, {
        default: ji(() => [
          Oi(T5, {
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
                  Cn(l) ? D5((Qs(), Vp("h3", B5, null, 512)), [
                    [C, void 0, "cx-sx-present-lead-section-label"]
                  ]) : (Qs(), Vp("h3", {
                    key: 1,
                    lang: m.value.lang,
                    dir: m.value.dir,
                    class: "ma-0 pa-0",
                    innerHTML: m.value.title
                  }, null, 8, F5))
                ]),
                _: 1
              }),
              Oi(Cn(V), { shrink: "" }, {
                default: ji(() => [
                  s.value ? (Qs(), xc(Cn(Ke), {
                    key: 0,
                    icon: Cn(Cr),
                    progressive: "",
                    label: w.$i18n(
                      "cx-sx-content-comparator-content-header-translate-button-label"
                    ),
                    onClick: v[0] || (v[0] = (y) => w.$emit("translation-button-clicked"))
                  }, null, 8, ["icon", "label"])) : (Qs(), xc(Cn(Ke), {
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
}, Gi = window.Vue.unref, Lp = window.Vue.createVNode, I5 = window.Vue.openBlock, R5 = window.Vue.createElementBlock, z5 = { class: "sx-content-comparator__header-navigation flex items-center" }, O5 = window.Vue.computed, j5 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = F(), o = O5(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Ir(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    };
    return (l, c) => (I5(), R5("div", z5, [
      Lp(Gi(Ke), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Gi(G0),
        onClick: a
      }, null, 8, ["icon"]),
      Lp(Gi(Ke), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Gi(H0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const Tp = window.Vue.toDisplayString, we = window.Vue.unref, H5 = window.Vue.resolveDirective, qi = window.Vue.withDirectives, xn = window.Vue.openBlock, Wo = window.Vue.createElementBlock, bc = window.Vue.createCommentVNode, G5 = window.Vue.createTextVNode, q5 = window.Vue.createElementVNode, W5 = window.Vue.normalizeClass, kc = window.Vue.withCtx, Ap = window.Vue.createVNode, $c = window.Vue.createBlock, X5 = { class: "sx-content-comparator-header__mapped-section" }, K5 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, Y5 = { key: 0 }, Q5 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, J5 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Z5 = {
  key: 2,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, eT = window.Vue.computed, tT = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = F(), { activeSectionTargetTitle: n } = Le(), o = fe(), { target: s, PUBLISHING_TARGETS: a, setTarget: r } = Tt(), l = eT(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        O.getAutonym(t.value)
      )
    ), { isPresentLeadSection: c } = ht();
    return (u, i) => {
      const d = H5("i18n");
      return xn(), Wo("div", X5, [
        Ap(we(M), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: kc(() => [
            Ap(we(V), { grow: "" }, {
              default: kc(() => [
                q5("h6", K5, [
                  G5(Tp(l.value) + " ", 1),
                  we(s) === we(a).NEW_SECTION ? qi((xn(), Wo("span", Y5, null, 512)), [
                    [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : bc("", !0)
                ]),
                we(c) ? bc("", !0) : (xn(), Wo("h6", {
                  key: 0,
                  class: W5(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": we(s) === we(a).NEW_SECTION
                  }])
                }, Tp(we(n)), 3))
              ]),
              _: 1
            }),
            we(c) ? bc("", !0) : (xn(), $c(we(V), {
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
        we(c) ? qi((xn(), Wo("p", Q5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-lead-section-clarifications"]
        ]) : we(s) === we(a).EXPAND ? qi((xn(), Wo("p", J5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : qi((xn(), Wo("p", Z5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const De = window.Vue.unref, Xo = window.Vue.createVNode, nT = window.Vue.toDisplayString, Zn = window.Vue.createElementVNode, oT = window.Vue.resolveDirective, Vc = window.Vue.withDirectives, Js = window.Vue.openBlock, Ec = window.Vue.createElementBlock, Dp = window.Vue.createCommentVNode, Lc = window.Vue.withCtx, Pp = window.Vue.createBlock, sT = { class: "sx-content-comparator__header pa-4" }, aT = { class: "row my-1 py-2 mx-0 gap-6" }, iT = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, rT = { class: "sx-content-comparator-header__titles shrink" }, lT = ["lang", "dir"], cT = {
  key: 0,
  class: "sx-content-comparator-header__section-title pa-0 ma-0"
}, uT = ["lang", "dir", "innerHTML"], dT = { class: "py-2 mb-1" }, gT = /* @__PURE__ */ Zn("br", null, null, -1), Wi = window.Vue.computed, mT = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = F(), { sourceSection: n } = se(), { sectionSuggestion: o } = Le(), { isCurrentSectionPresent: s } = ht(), a = Wi(
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
      const d = oT("i18n");
      return Js(), Ec("div", sT, [
        Xo(De(Ke), {
          class: "py-2 pa-0",
          icon: De(q0),
          label: u.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (m) => u.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Zn("div", aT, [
          Zn("div", iT, [
            Zn("div", rT, [
              Zn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: De(o).sourceLanguage,
                dir: De(O.getDir)(De(o).sourceLanguage)
              }, nT(De(o).sourceTitle), 9, lT),
              (g = De(n)) != null && g.isLeadSection ? Vc((Js(), Ec("h2", cT, null, 512)), [
                [d, void 0, "cx-sx-present-lead-section-label"]
              ]) : (Js(), Ec("h2", {
                key: 1,
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: De(o).sourceLanguage,
                dir: De(O.getDir)(De(o).sourceLanguage),
                innerHTML: c.value
              }, null, 8, uT))
            ]),
            Xo(j5, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          Zn("div", dT, [
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
        a.value ? (Js(), Pp(De(M), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Lc(() => [
            Xo(De(V), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Lc(() => [
                Xo(De(et), { icon: De(Q0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Xo(De(V), { class: "ma-0" }, {
              default: Lc(() => [
                Vc(Zn("strong", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                gT,
                Vc(Zn("span", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Dp("", !0),
        De(s) ? (Js(), Pp(tT, { key: 1 })) : Dp("", !0)
      ]);
    };
  }
};
const Bp = window.Vue.toDisplayString, pT = window.Vue.createElementVNode, Fp = window.Vue.openBlock, Np = window.Vue.createElementBlock, hT = window.Vue.createCommentVNode, fT = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, wT = ["textContent"], vT = ["textContent"], tv = {
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
    return (t, n) => (Fp(), Np("section", fT, [
      pT("h5", {
        textContent: Bp(e.placeholderTitle)
      }, null, 8, wT),
      e.placeholderSubtitle ? (Fp(), Np("p", {
        key: 0,
        textContent: Bp(e.placeholderSubtitle)
      }, null, 8, vT)) : hT("", !0)
    ]));
  }
}, _T = (e, t, n) => {
  const o = t.indexOf(e);
  return t.slice(o + 1).map((a) => n[a]).filter(Boolean)[0] || null;
}, ST = ({
  sourceSectionTitle: e,
  sourceSectionTitles: t,
  targetSectionTitles: n,
  presentSectionMappings: o,
  targetAppendixSectionTitles: s
}) => {
  const a = _T(
    e,
    t,
    o
  );
  return a !== null ? a : n.find(
    (l) => s.includes(l)
  ) || null;
}, Tc = window.Vue.computed, yT = window.Vue.createApp, CT = window.Vuex.useStore, xT = () => {
  const e = CT(), { sectionSuggestion: t } = Le(), { currentTargetPage: n } = ot(), { sectionURLParameter: o } = F(), s = fe(), a = () => yT(
    tv,
    {
      placeholderTitle: s.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, r = Tc(() => {
    const { appendixSectionTitles: u } = e.state.suggestions;
    return u[t.value.targetLanguage] || [];
  }), l = Tc(
    () => ST({
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
const Ac = window.Vue.createVNode, lt = window.Vue.unref, Ko = window.Vue.openBlock, Mp = window.Vue.createBlock, Up = window.Vue.createCommentVNode, Xi = window.Vue.createElementVNode, Dc = window.Vue.Fragment, Ki = window.Vue.createElementBlock, bT = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, kT = { class: "sx-content-comparator__source-content" }, $T = ["lang", "dir", "innerHTML"], VT = ["lang", "dir", "innerHTML"], ET = ["innerHTML"], LT = window.Vue.ref, Ip = window.Vue.computed, Rp = window.Vue.watch, TT = window.Vue.inject, AT = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = Tt(), n = nt(), o = LT("source_section"), { logDashboardTranslationStartEvent: s } = md(), a = fs(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      s(), a();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = F(), { sourceSectionContent: i, targetSectionContent: d } = ev(), g = xT(), { sectionSuggestion: m } = Le(), { isCurrentSectionPresent: p } = ht(), h = Ip(() => m.value.targetTitle), f = Kw();
    Rp(
      h,
      () => k(this, null, function* () {
        try {
          yield f(
            u.value,
            c.value,
            h.value
          );
        } catch (C) {
          throw mw.cx.eventlogging.stats.sourceArticleFetchFailed(!0), C;
        }
      }),
      { immediate: !0 }
    ), Rp(p, t, { immediate: !0 });
    const w = TT("breakpoints"), v = Ip(() => w.value.mobile);
    return mw.cx.eventlogging.stats.sectionCompareAccess(v.value), (C, y) => (Ko(), Ki("section", bT, [
      Ac(mT, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      Ac(U5, {
        "content-type-selection": o.value,
        "onUpdate:contentTypeSelection": y[0] || (y[0] = (_) => o.value = _),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      Xi("section", kT, [
        o.value === "source_section" ? (Ko(), Ki(Dc, { key: 0 }, [
          lt(i) ? Up("", !0) : (Ko(), Mp(lt(mt), { key: 0 })),
          Xi("section", {
            lang: lt(c),
            dir: lt(O.getDir)(lt(c)),
            class: "pt-2 px-4",
            innerHTML: lt(i)
          }, null, 8, $T)
        ], 64)) : o.value === "target_article" ? (Ko(), Ki(Dc, { key: 1 }, [
          lt(g) ? Up("", !0) : (Ko(), Mp(lt(mt), { key: 0 })),
          Xi("article", {
            lang: lt(u),
            dir: lt(O.getDir)(lt(u)),
            class: "px-4",
            innerHTML: lt(g)
          }, null, 8, VT)
        ], 64)) : (Ko(), Ki(Dc, { key: 2 }, [
          Xi("section", {
            class: "pa-4",
            innerHTML: lt(d)
          }, null, 8, ET),
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
}, DT = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: AT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, PT = window.Vue.resolveComponent, BT = window.Vue.createVNode, FT = window.Vue.normalizeClass, NT = window.Vue.openBlock, MT = window.Vue.createElementBlock;
function UT(e, t, n, o, s, a) {
  const r = PT("sx-content-comparator");
  return NT(), MT("main", {
    class: FT(["sx-content-comparator-view", a.classes])
  }, [
    BT(r)
  ], 2);
}
const IT = /* @__PURE__ */ he(DT, [["render", UT]]);
const RT = window.Vue.resolveDirective, Zs = window.Vue.createElementVNode, zp = window.Vue.withDirectives, Yi = window.Vue.unref, Pc = window.Vue.createVNode, Op = window.Vue.toDisplayString, jp = window.Vue.createTextVNode, ea = window.Vue.withCtx, zT = window.Vue.openBlock, OT = window.Vue.createBlock, jT = { class: "mw-ui-dialog__header px-4 py-3" }, HT = { class: "mw-ui-dialog__header-title" }, GT = { class: "pa-4" }, qT = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Hp = window.Codex.CdxButton, WT = {
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
      const c = RT("i18n");
      return zT(), OT(Yi(Vt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: ea(() => [
          Zs("div", jT, [
            zp(Zs("span", HT, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: ea(() => [
          Zs("div", qT, [
            Pc(Yi(Hp), {
              weight: "quiet",
              onClick: s
            }, {
              default: ea(() => [
                jp(Op(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Pc(Yi(Hp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: ea(() => [
                jp(Op(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: ea(() => [
          Pc(Yi(yr)),
          Zs("div", GT, [
            zp(Zs("span", null, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, XT = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => bo(a)
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
    (a) => bo(a)
  );
  return s ? $t.parseTemplateWikitext(
    Cf(s),
    n,
    t
  ) : Promise.resolve(null);
}, KT = window.Vuex.useStore, fd = () => {
  const e = KT(), { sourceSection: t } = se(), { getCurrentTitleByLanguage: n } = cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = F(), a = Jw(), r = (i, d, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[d] = g;
      return;
    }
    const m = t.value.getContentTranslationUnitById(i);
    m instanceof gt ? m.blockTemplateProposedTranslations[d] = g : m instanceof eo && m.addProposedTranslation(d, g);
  }, l = (i, d) => k(void 0, null, function* () {
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
  }), c = (i, d) => k(void 0, null, function* () {
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
    ), p = (yield XT(
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
}, YT = window.Vuex.useStore, QT = () => {
  const { sourceSection: e } = se(), t = YT(), { translateTranslationUnitById: n } = fd();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function JT(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const ZT = window.Vue.resolveDirective, dt = window.Vue.createElementVNode, Qi = window.Vue.withDirectives, je = window.Vue.unref, Bc = window.Vue.createVNode, bn = window.Vue.withCtx, eA = window.Vue.renderList, tA = window.Vue.Fragment, Ji = window.Vue.openBlock, nA = window.Vue.createElementBlock, oA = window.Vue.toDisplayString, Fc = window.Vue.createBlock, Gp = window.Vue.createCommentVNode, sA = { class: "mw-ui-dialog__header pa-4" }, aA = { class: "row ma-0 py-2" }, iA = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, rA = { class: "mb-0" }, lA = { class: "col shrink justify-center" }, cA = { class: "pb-2 mb-0" }, uA = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, dA = ["dir", "lang", "innerHTML"], gA = ["textContent"], mA = ["innerHTML"], pA = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, hA = /* @__PURE__ */ dt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), fA = ["innerHTML"], Nc = window.Vue.computed, wA = window.Vuex.useStore, vA = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = ce.EMPTY_TEXT_PROVIDER_KEY, s = ce.ORIGINAL_TEXT_PROVIDER_KEY, a = wA(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: c
    } = se(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: i
    } = F(), d = Nc(
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
    ), p = QT(), h = (y) => {
      p(y), w();
    }, f = ce.getMTProviderLabel, w = () => n("update:active", !1), v = fe(), C = JT(
      v.i18n("cx-tools-mt-noservices")
    );
    return (y, _) => {
      const E = ZT("i18n");
      return e.active ? (Ji(), Fc(je(Vt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: bn(() => [
          dt("div", sA, [
            dt("div", aA, [
              dt("div", iA, [
                Qi(dt("h4", rA, null, 512), [
                  [E, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              dt("div", lA, [
                Bc(je(Ke), {
                  type: "icon",
                  icon: je(xr),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            Qi(dt("h6", cA, null, 512), [
              [E, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: bn(() => [
          Bc(je(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: _[0] || (_[0] = (L) => h(je(s)))
          }, {
            header: bn(() => [
              Qi(dt("h5", uA, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: bn(() => [
              dt("p", {
                dir: je(O.getDir)(je(u)),
                lang: je(u),
                innerHTML: m.value[je(s)]
              }, null, 8, dA)
            ]),
            _: 1
          }),
          (Ji(!0), nA(tA, null, eA(g.value, (L) => (Ji(), Fc(je(Ze), {
            key: L,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (N) => h(L)
          }, {
            header: bn(() => [
              dt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: oA(je(f)(L))
              }, null, 8, gA)
            ]),
            default: bn(() => [
              dt("p", {
                innerHTML: m.value[L]
              }, null, 8, mA)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Bc(je(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: _[1] || (_[1] = (L) => h(je(o)))
          }, {
            header: bn(() => [
              Qi(dt("h5", pA, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: bn(() => [
              hA
            ]),
            _: 1
          }),
          g.value.length ? Gp("", !0) : (Ji(), Fc(je(Ze), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: bn(() => [
              dt("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: je(C)
              }, null, 8, fA)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Gp("", !0);
    };
  }
}, _A = window.Vuex.useStore, ws = () => {
  const { sourceSection: e } = se(), t = _A(), { translateTranslationUnitById: n } = fd(), { currentMTProvider: o } = Fe(t), s = (l) => k(void 0, null, function* () {
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
const qp = window.Vue.toDisplayString, Mc = window.Vue.createElementVNode, Zi = window.Vue.unref, SA = window.Vue.createVNode, yA = window.Vue.normalizeClass, CA = window.Vue.withCtx, xA = window.Vue.openBlock, bA = window.Vue.createBlock, kA = ["href"], $A = ["textContent"], VA = ["textContent"], vo = window.Vue.computed, Wp = "sx-sentence-selector__section-title", EA = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = se(), { currentSourcePage: o, currentTargetPageTitle: s } = ot(), { sourceLanguageURLParameter: a } = F(), { isPresentLeadSection: r } = ht(), l = vo(() => {
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
      const f = [Wp];
      return n.value && !r.value && f.push(`${Wp}--${d.value}`), f;
    }), { selectTranslationUnitById: m } = ws(), p = () => m(0), h = vo(
      () => r.value ? s.value : c.value
    );
    return (f, w) => (xA(), bA(Zi(V), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: CA(() => [
        Mc("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Mc("strong", {
            textContent: qp(l.value)
          }, null, 8, $A),
          SA(Zi(et), {
            icon: Zi(vf),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, kA),
        Mc("h2", {
          class: yA(["pa-0 ma-0", g.value]),
          onClick: w[0] || (w[0] = (v) => Zi(r) ? p : null),
          textContent: qp(h.value)
        }, null, 10, VA)
      ]),
      _: 1
    }));
  }
};
const kn = window.Vue.unref, ta = window.Vue.createVNode, er = window.Vue.withCtx, Xp = window.Vue.toDisplayString, Kp = window.Vue.createTextVNode, LA = window.Vue.openBlock, TA = window.Vue.createBlock, Yp = window.Vue.computed, Uc = window.Codex.CdxButton, Qp = window.Codex.CdxIcon, ov = {
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
    return (l, c) => (LA(), TA(kn(M), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: er(() => [
        ta(kn(Uc), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": l.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: r.value,
          onClick: c[0] || (c[0] = (u) => l.$emit("select-previous-segment"))
        }, {
          default: er(() => [
            ta(kn(Qp), {
              class: "me-1",
              icon: kn(od)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        ta(kn(Uc), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !kn(o),
          onClick: c[1] || (c[1] = (u) => l.$emit("apply-translation"))
        }, {
          default: er(() => [
            Kp(Xp(l.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        ta(kn(Uc), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: a.value,
          onClick: c[2] || (c[2] = (u) => l.$emit("skip-translation"))
        }, {
          default: er(() => [
            Kp(Xp(l.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            ta(kn(Qp), {
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
const _o = window.Vue.unref, AA = window.Vue.toDisplayString, na = window.Vue.createVNode, tr = window.Vue.withCtx, DA = window.Vue.openBlock, PA = window.Vue.createBlock, Ic = window.Vue.computed, BA = window.Vuex.useStore, FA = window.Codex.CdxButton, NA = window.Codex.CdxIcon, MA = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = BA(), n = Ic(() => t.state.application.currentMTProvider), o = fe(), s = Ic(() => ({
      [ce.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ce.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Ic(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ce.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (DA(), PA(_o(V), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: tr(() => [
        na(_o(M), { class: "ma-0 ps-5 pb-4" }, {
          default: tr(() => [
            na(_o(V), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: AA(a.value)
            }, null, 8, ["textContent"]),
            na(_o(V), {
              shrink: "",
              class: "pe-5"
            }, {
              default: tr(() => [
                na(_o(FA), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (c) => r.$emit("configure-options"))
                }, {
                  default: tr(() => [
                    na(_o(NA), {
                      class: "pa-0",
                      icon: _o(nd)
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
const It = window.Vue.unref, qn = window.Vue.createVNode, UA = window.Vue.resolveDirective, Jp = window.Vue.createElementVNode, IA = window.Vue.withDirectives, Zp = window.Vue.toDisplayString, eh = window.Vue.createTextVNode, oa = window.Vue.withCtx, RA = window.Vue.openBlock, zA = window.Vue.createElementBlock, OA = { class: "mt-retry-body pb-5" }, jA = { class: "retry-body__message" }, th = window.Codex.CdxButton, Rc = window.Codex.CdxIcon, HA = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = UA("i18n");
      return RA(), zA("div", OA, [
        Jp("div", jA, [
          qn(It(Rc), {
            class: "me-2",
            icon: It(EC)
          }, null, 8, ["icon"]),
          IA(Jp("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        qn(It(M), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: oa(() => [
            qn(It(V), { cols: "6" }, {
              default: oa(() => [
                qn(It(th), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: oa(() => [
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
            qn(It(V), { cols: "6" }, {
              default: oa(() => [
                qn(It(th), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: oa(() => [
                    qn(It(Rc), {
                      class: "me-1",
                      icon: It(IC)
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
const Yo = window.Vue.createVNode, ct = window.Vue.unref, sa = window.Vue.openBlock, GA = window.Vue.createElementBlock, qA = window.Vue.createCommentVNode, nr = window.Vue.createBlock, WA = window.Vue.normalizeClass, XA = window.Vue.normalizeStyle, aa = window.Vue.withCtx, KA = window.Vue.toDisplayString, YA = window.Vue.createTextVNode, QA = window.Vue.normalizeProps, JA = window.Vue.guardReactiveProps, ZA = ["lang", "dir", "innerHTML"], zc = window.Vue.ref, eD = window.Vue.onMounted, tD = window.Vue.onBeforeUnmount, Oc = window.Vue.computed, nD = window.Vue.nextTick, oD = window.Vuex.useStore, sD = window.Codex.CdxButton, aD = window.Codex.CdxIcon, iD = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = zc(0), n = zc(null), o = zc(null), s = oD(), { currentMTProvider: a } = Fe(s), { targetLanguageURLParameter: r } = F(), { sourceSection: l, currentProposedTranslation: c } = se(), u = Oc(
      () => {
        var p, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (p = l.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), i = Oc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), d = Oc(
      () => !!c.value || a.value === ce.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    eD(() => k(this, null, function* () {
      yield nD(), g(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), tD(() => {
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
            Yo(MA, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => p.$emit("configure-options"))
            }, null, 512),
            Yo(ct(V), {
              class: WA(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !d.value && u.value
              }]),
              style: XA(d.value ? i.value : null)
            }, {
              default: aa(() => [
                d.value ? (sa(), GA("section", {
                  key: 0,
                  lang: ct(r),
                  dir: ct(O.getDir)(ct(r)),
                  innerHTML: ct(c)
                }, null, 8, ZA)) : u.value ? (sa(), nr(ct(mt), { key: 1 })) : (sa(), nr(HA, {
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
                d.value || u.value ? (sa(), nr(ct(sD), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !d.value,
                  onClick: h[3] || (h[3] = (f) => p.$emit("edit-translation", ct(c)))
                }, {
                  default: aa(() => [
                    Yo(ct(aD), {
                      class: "me-1",
                      icon: ct(td)
                    }, null, 8, ["icon"]),
                    YA(" " + KA(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : qA("", !0),
                Yo(ov, QA(JA(p.$attrs)), null, 16)
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
}, rD = window.Vue.computed, lD = (e) => rD(() => {
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
const cD = window.Vue.unref, uD = window.Vue.normalizeClass, dD = window.Vue.openBlock, gD = window.Vue.createElementBlock, mD = ["innerHTML"], pD = window.Vue.onMounted, hD = window.Vue.ref, fD = window.Vue.computed, wD = {
  __name: "SubSection",
  props: {
    subSection: {
      type: gt,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = hD(null), a = lD(n.subSection);
    pD(() => {
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
    }, c = fD(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (u, i) => (dD(), gD("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: uD(["sx-sentence-selector__subsection", c.value]),
      innerHTML: cD(a)
    }, null, 10, mD));
  }
};
const nh = window.Vue.unref, oh = window.Vue.createVNode, sh = window.Vue.normalizeStyle, vD = window.Vue.openBlock, _D = window.Vue.createElementBlock, ah = window.Vue.computed, sv = {
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
      () => !t.isTemplateAdapted || t.percentage === 0 ? e_ : xu
    );
    return (s, a) => (vD(), _D("div", {
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
const Wn = window.Vue.unref, or = window.Vue.createVNode, jc = window.Vue.withCtx, SD = window.Vue.openBlock, yD = window.Vue.createBlock, CD = window.Vue.computed, ih = window.Codex.CdxButton, rh = window.Codex.CdxIcon, av = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = se(), o = CD(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (SD(), yD(Wn(M), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: jc(() => [
        or(Wn(ih), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Wn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: jc(() => [
            or(Wn(rh), { icon: Wn(od) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        or(Wn(ih), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: jc(() => [
            or(Wn(rh), { icon: Wn(ps) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, ia = window.Vue.openBlock, sr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const $n = window.Vue.unref, Qo = window.Vue.withCtx, ra = window.Vue.createVNode, Hc = window.Vue.toDisplayString, Gc = window.Vue.createElementVNode, xD = window.Vue.renderList, bD = window.Vue.Fragment, kD = window.Vue.createElementBlock, $D = { class: "pa-4" }, VD = ["textContent"], ED = ["textContent"], LD = window.Vuex.useStore, ar = window.Vue.computed, TD = {
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
    const t = e, { targetLanguageAutonym: n } = Fe(LD()), o = ar(
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
          icon: xu,
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
          icon: xu,
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
                e.targetTemplateExists ? (ia(), sr(sv, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (ia(), sr($n(et), {
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
      default: Qo(() => [
        Gc("div", $D, [
          Gc("h3", {
            textContent: Hc(a.value)
          }, null, 8, VD),
          Gc("p", {
            class: "mt-6 text-small",
            textContent: Hc(r.value)
          }, null, 8, ED),
          (ia(!0), kD(bD, null, xD(l.value, (i, d) => (ia(), sr($n(M), {
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
const Pe = window.Vue.unref, He = window.Vue.createVNode, Jt = window.Vue.withCtx, qc = window.Vue.toDisplayString, lh = window.Vue.createTextVNode, AD = window.Vue.resolveDirective, ch = window.Vue.withDirectives, uh = window.Vue.createElementVNode, DD = window.Vue.normalizeClass, Jo = window.Vue.openBlock, dh = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ir = window.Vue.createBlock, gh = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const mh = window.Vue.mergeProps, PD = { class: "block-template-adaptation-card__container pa-4" }, BD = ["textContent"], FD = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Ge = window.Vue.computed, ND = window.Vue.ref, MD = window.Vuex.useStore, ph = window.Codex.CdxButton, hh = window.Codex.CdxIcon, UD = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = MD(), { targetLanguageAutonym: n, currentMTProvider: o } = Fe(t), {
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
    ), u = Ge(
      () => {
        var x;
        return !((x = t.state.application.mtRequestsPending) != null && x.includes(
          s.value.id
        ));
      }
    ), i = fe(), d = Ge(
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
      const x = L.value;
      return f.value + x === 0 ? 100 : v.value / (f.value + x) * 100 || 0;
    }), y = ND(!1), _ = () => {
      y.value = !0;
    }, E = (x) => x.filter((B) => !w.value.includes(B)), L = Ge(() => {
      var B;
      const x = ((B = g.value) == null ? void 0 : B.mandatoryTargetParams) || [];
      return E(x).length;
    }), N = Ge(() => {
      var B;
      const x = ((B = g.value) == null ? void 0 : B.optionalTargetParams) || [];
      return E(x).length;
    });
    return (x, B) => {
      const U = AD("i18n");
      return Jo(), ir(Pe(Ze), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Jt(() => [
          uh("div", PD, [
            He(Pe(M), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Jt(() => [
                He(Pe(V), { shrink: "" }, {
                  default: Jt(() => [
                    He(Pe(hh), {
                      icon: Pe(RC),
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
                    lh(qc(d.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (Jo(), dh("div", {
              key: 0,
              class: DD(["pa-4 mb-4", p.value])
            }, [
              He(Pe(M), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Jt(() => [
                  ch(He(Pe(V), { tag: "h5" }, null, 512), [
                    [U, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  He(Pe(V), { shrink: "" }, {
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
              }, null, 8, BD),
              He(Pe(ph), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: B[0] || (B[0] = (j) => x.$emit("edit-translation", l.value))
              }, {
                default: Jt(() => [
                  lh(qc(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (Jo(), dh("div", FD, [
              He(Pe(M), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Jt(() => [
                  ch(He(Pe(V), { tag: "h5" }, null, 512), [
                    [U, [
                      Pe(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  He(Pe(V), { shrink: "" }, {
                    default: Jt(() => [
                      He(Pe(ph), {
                        weight: "quiet",
                        "aria-label": x.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Jt(() => [
                          He(Pe(hh), {
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
            ])) : (Jo(), ir(Pe(mt), { key: 2 }))
          ]),
          r.value ? (Jo(), ir(av, gh(mh({ key: 1 }, x.$attrs)), null, 16)) : (Jo(), ir(ov, gh(mh({ key: 0 }, x.$attrs)), null, 16)),
          He(TD, {
            active: y.value,
            "onUpdate:active": B[1] || (B[1] = (j) => y.value = j),
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
const ID = window.Vue.unref, RD = window.Vue.createVNode, zD = window.Vue.openBlock, OD = window.Vue.createElementBlock, jD = { class: "translated-segment-card-header" }, HD = window.Vue.computed, GD = {
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
    const n = t, { isSectionTitleSelected: o } = se(), s = fe(), a = HD(() => [
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
    return (l, c) => (zD(), OD("div", jD, [
      RD(ID(Ea), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const qD = window.Vue.useCssVars, ze = window.Vue.createVNode, fh = window.Vue.resolveDirective, WD = window.Vue.createElementVNode, Wc = window.Vue.withDirectives, Ce = window.Vue.unref, XD = window.Vue.normalizeStyle, rr = window.Vue.openBlock, wh = window.Vue.createElementBlock, KD = window.Vue.createCommentVNode, YD = window.Vue.normalizeClass, Ct = window.Vue.withCtx, QD = window.Vue.toDisplayString, JD = window.Vue.createTextVNode, vh = window.Vue.createBlock, ZD = window.Vue.normalizeProps, e6 = window.Vue.guardReactiveProps, Vn = window.Vue.computed, t6 = window.Vue.ref, n6 = window.Vue.inject, o6 = window.Vuex.useStore, s6 = window.Codex.CdxButton, Xc = window.Codex.CdxIcon, a6 = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    qD((v) => ({
      "4929555c": w.value
    }));
    const t = t6("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = se(), { targetLanguage: a } = Fe(o6()), r = Vn(() => t.value === "sentence"), l = Vn(
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
    }), u = n6("colors"), i = u.gray200, d = u.red600, g = Vn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), m = Vn(
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
    return (v, C) => {
      const y = fh("i18n"), _ = fh("i18n-html");
      return rr(), vh(Ce(Ze), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: Ct(() => [
          ze(Ce(M), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: Ct(() => [
              ze(GD, {
                selection: t.value,
                "onUpdate:selection": C[0] || (C[0] = (E) => t.value = E)
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
                          Wc(WD("h5", null, null, 512), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? Wc((rr(), wh("p", {
                            key: 0,
                            style: XD({ color: Ce(d) })
                          }, null, 4)), [
                            [y, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Wc((rr(), wh("p", {
                            key: 1,
                            class: YD(h.value)
                          }, null, 2)), [
                            [_, [
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
                                  ze(Ce(Xc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Ce(jC)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              ze(Ce(V), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: Ct(() => [
                                  ze(Ce(Sf), {
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
                                  ze(Ce(Xc), {
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
                  r.value ? (rr(), vh(Ce(s6), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: C[1] || (C[1] = (E) => v.$emit("edit-translation", g.value))
                  }, {
                    default: Ct(() => [
                      ze(Ce(Xc), {
                        class: "me-1",
                        icon: Ce(td)
                      }, null, 8, ["icon"]),
                      JD(" " + QD(v.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : KD("", !0)
                ]),
                _: 1
              }),
              ze(Ce(V), { class: "translated-segment-card__actions" }, {
                default: Ct(() => [
                  ze(av, ZD(e6(v.$attrs)), null, 16)
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
}, i6 = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = se(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = ws(), { isPresentLeadSection: s } = ht(), { currentTranslation: a } = Xt();
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
}, iv = window.Vuex.useStore, r6 = () => {
  const e = iv(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = F();
  return () => k(void 0, null, function* () {
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
}, l6 = () => {
  const e = iv(), { currentMTProvider: t } = Fe(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = F(), s = r6();
  return () => k(void 0, null, function* () {
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
}, c6 = window.Vue.computed, u6 = (e) => {
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
}, d6 = () => {
  const { selectedContentTranslationUnit: e } = se(), t = c6(
    () => e.value instanceof gt
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && u6(o);
  };
}, g6 = (e, t) => {
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
}, m6 = window.Vue.computed, rv = () => {
  const { currentTranslation: e } = Xt(), { currentSourcePage: t } = ot();
  return m6(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, p6 = window.Vue.computed, Ma = () => {
  const { sourceSection: e } = se(), { currentTargetPageTitle: t } = ot(), { isMissingLeadSection: n } = ht();
  return { targetPageTitleForPublishing: p6(
    () => n.value ? e.value.title : t.value
  ) };
}, h6 = window.Vuex.useStore, wd = () => {
  const e = h6(), { sourceSection: t } = se(), { targetPageTitleForPublishing: n } = Ma(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = F(), r = rv(), { target: l, PUBLISHING_TARGETS: c } = Tt();
  return () => {
    const u = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(d);
    g.forEach(
      (p) => g6(p, i)
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
}, f6 = window.Vue.effectScope, w6 = window.Vue.onScopeDispose, v6 = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = f6(!0), n = o.run(() => e(...a))), w6(s), n);
}, _6 = window.Vuex.useStore;
let Kc;
const S6 = () => {
  const e = _6(), t = wd();
  let n = 1e3, o = 0;
  return Kc = ud(() => t().then((a) => {
    a instanceof so ? (n *= o + 1, o++, setTimeout(Kc, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof us)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Kc;
}, lv = v6(S6), y6 = window.Vuex.useStore, C6 = () => {
  const e = y6(), t = lv(), { currentMTProvider: n } = Fe(e), { sourceSection: o, currentProposedTranslation: s } = se(), { selectNextTranslationUnit: a } = ws();
  return () => k(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, x6 = window.Vuex.useStore, b6 = () => {
  const e = x6(), t = lv();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, k6 = window.Vuex.useStore, $6 = window.Vue.computed, cv = () => {
  const e = k6(), { currentTranslation: t } = Xt(), { currentMTProvider: n } = Fe(e), { currentTargetPageTitle: o } = ot(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = F(), c = Lt(), u = $6(() => {
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
}, V6 = (e, t, n, o) => k(void 0, null, function* () {
  var l, c, u;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((c = t.mt) == null ? void 0 : c.content), a = (u = t == null ? void 0 : t.mt) == null ? void 0 : u.engine, r = yield nv(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), E6 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, L6 = (e, t, n, o) => k(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return V6(e, t, n, o);
  E6(e, t);
}), T6 = (e, t, n, o) => {
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
        const u = L6(
          l,
          c,
          t || e.title,
          n
        );
        s.push(u);
      }
  return Promise.all(s);
}, A6 = { restoreCorporaDraft: T6 }, D6 = () => {
  const { currentSourcePage: e } = ot(), { sourceSection: t } = se();
  return (n) => k(void 0, null, function* () {
    if (n.restored)
      return;
    try {
      const s = yield $t.fetchTranslationUnits(
        n.translationId
      );
      yield A6.restoreCorporaDraft(
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
function P6() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((o) => t.includes(o));
}
function uv() {
  return Yc === null && (Yc = P6()), Yc;
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
const ue = window.Vue.unref, xt = window.Vue.createVNode, Rt = window.Vue.withCtx, B6 = window.Vue.resolveDirective, En = window.Vue.createElementVNode, F6 = window.Vue.withDirectives, la = window.Vue.toDisplayString, N6 = window.Vue.createTextVNode, Zt = window.Vue.openBlock, Xn = window.Vue.createBlock, Sh = window.Vue.createCommentVNode, M6 = window.Vue.renderList, U6 = window.Vue.Fragment, yh = window.Vue.createElementBlock, I6 = window.Vue.normalizeClass, R6 = window.Vue.normalizeStyle, z6 = { class: "sx-sentence-selector__header-title mb-0" }, O6 = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, j6 = { class: "sx-sentence-selector__section-contents px-4" }, Kn = window.Vue.computed, H6 = window.Vue.nextTick, G6 = window.Vue.onMounted, ca = window.Vue.ref, Ch = window.Vue.watch, q6 = window.Vuex.useStore, xh = window.Codex.CdxButton, W6 = window.Codex.CdxIcon, bh = window.Codex.CdxMessage, X6 = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ca(!1), n = ca(!1), o = ca("100%"), s = q6(), { currentMTProvider: a, previousRoute: r } = Fe(s), {
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
    const { sourceSection: p, selectedContentTranslationUnit: h } = se(), { targetPageTitleForPublishing: f } = Ma(), w = ca({
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
    ), E = Kn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: L,
      logEditorCloseEvent: N,
      logEditorCloseWarnEvent: x,
      logEditorSegmentAddEvent: B,
      logEditorSegmentSkipEvent: U
    } = cv(), j = () => {
      var Do;
      const J = T.currentRoute.value.meta.workflowStep, Bn = T.getRoutes().find(
        (jr) => jr.name === r.value
      ), ft = ((Do = Bn == null ? void 0 : Bn.meta) == null ? void 0 : Do.workflowStep) || 0;
      return J > ft;
    }, te = i6();
    l6()().then(() => {
      j() && L(), w.value.mtProviders = !0;
    });
    const oe = d6(), { fetchTranslationsByStatus: P, translationsFetched: I } = hs(), K = D6(), { currentTranslation: Q } = Xt(), { selectPageSectionByTitle: ye, selectPageSectionByIndex: $e } = Ir(), xe = hd(), Ne = Eo();
    G6(() => k(this, null, function* () {
      if (!I.value.draft) {
        const J = [
          // required to get current draft translation (if exists)
          P("draft"),
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
      ).then(() => d()), Ch(
        v,
        () => k(this, null, function* () {
          v.value && (yield H6(), te(), oe());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), Ch(h, oe);
    const { selectNextTranslationUnit: R, selectPreviousTranslationUnit: z } = ws(), ae = () => (U(), R()), S = C6(), D = () => {
      B(), S();
    }, b = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, T = nt(), W = () => {
      const { autoSavePending: J } = s.state.application;
      if (J) {
        _s.value = !0, x();
        return;
      }
      G();
    }, H = b6(), { clearTranslationURLParameters: X } = F(), G = () => k(this, null, function* () {
      P("draft"), Q.value && (p.value.reset(), Q.value.restored = !1), N(), X(), H(), yield T.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: re,
      translateSelectedTranslationUnitForAllProviders: st
    } = fd(), Ve = () => {
      vs.value || (t.value = !0, st());
    }, { getCurrentTitleByLanguage: Ua } = cn(), { isMissingLeadSection: Ia } = ht(), lo = (J) => {
      T.push({
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
    }, Rr = () => T.push({ name: "sx-publisher" }), zr = () => k(this, null, function* () {
      h.value ? yield re(
        h.value.id,
        a.value
      ) : yield re(0, a.value);
    }), vs = Kn(
      () => h.value instanceof gt
    ), _s = ca(!1), {
      isPermissionWarningDismissed: Or,
      dismissPermissionWarning: To,
      resetPermissionWarning: Ao
    } = _h(), { isTitleErrorDismissed: Ra, dismissTitleError: A, resetTitleError: q } = _h();
    j() && (Ao(), q());
    const Ue = Kn(
      () => !uv() && !Or.value
    ), At = Kn(
      () => !Ra.value && Ia.value && !mw.Title.newFromText(f.value)
    );
    return (J, un) => {
      const Bn = B6("i18n");
      return Zt(), yh("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: R6(E.value)
      }, [
        xt(ue(M), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Rt(() => [
            xt(ue(V), { shrink: "" }, {
              default: Rt(() => [
                xt(ue(xh), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": J.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: W
                }, {
                  default: Rt(() => [
                    xt(ue(W6), { icon: ue(Jf) }, null, 8, ["icon"])
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
                F6(En("h4", z6, null, 512), [
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
                xt(ue(xh), {
                  disabled: !(ue(p) && ue(p).isTranslated),
                  onClick: Rr
                }, {
                  default: Rt(() => [
                    N6(la(J.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
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
                Ue.value ? (Zt(), Xn(ue(bh), {
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
                        En("a", O6, la(J.$i18n("cx-publish-permission-warning-link-label")), 1)
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
                      En("strong", null, la(J.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    En("p", null, la(J.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : Sh("", !0),
                xt(EA),
                En("div", j6, [
                  (Zt(!0), yh(U6, null, M6(y.value, (ft) => (Zt(), Xn(wD, {
                    id: ft.id,
                    key: `sub-section-${ft.id}`,
                    "sub-section": ft,
                    onBounceTranslation: b
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !vs.value && C.value ? (Zt(), Xn(a6, {
              key: 0,
              onEditTranslation: lo,
              onSelectNextSegment: ue(R),
              onSelectPreviousSegment: ue(z)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : vs.value ? (Zt(), Xn(UD, {
              key: 2,
              onEditTranslation: lo,
              onApplyTranslation: D,
              onSkipTranslation: ae,
              onSelectPreviousSegment: ue(z),
              onSelectNextSegment: ue(R)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Zt(), Xn(iD, {
              key: 1,
              class: I6({ "mb-0": !n.value }),
              onConfigureOptions: Ve,
              onEditTranslation: lo,
              onApplyTranslation: D,
              onSkipTranslation: ae,
              onSelectPreviousSegment: ue(z),
              onRetryTranslation: zr
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
        xt(vA, {
          active: t.value,
          "onUpdate:active": un[0] || (un[0] = (ft) => t.value = ft)
        }, null, 8, ["active"]),
        xt(WT, {
          modelValue: _s.value,
          "onUpdate:modelValue": un[1] || (un[1] = (ft) => _s.value = ft),
          onDiscardTranslation: G
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const K6 = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: X6
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, Y6 = window.Vue.resolveComponent, Q6 = window.Vue.createVNode, J6 = window.Vue.normalizeClass, Z6 = window.Vue.openBlock, eP = window.Vue.createElementBlock;
function tP(e, t, n, o, s, a) {
  const r = Y6("sx-sentence-selector");
  return Z6(), eP("main", {
    class: J6(["sx-sentence-selector-view", a.classes])
  }, [
    Q6(r)
  ], 2);
}
const nP = /* @__PURE__ */ he(K6, [["render", tP]]), oP = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, sP = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const aP = window.Vue.resolveDirective, lr = window.Vue.withDirectives, zt = window.Vue.openBlock, Ln = window.Vue.createElementBlock, cr = window.Vue.createCommentVNode, ur = window.Vue.Transition, So = window.Vue.withCtx, Zo = window.Vue.createVNode, ua = window.Vue.createElementVNode, Yn = window.Vue.unref, iP = window.Vue.renderList, rP = window.Vue.Fragment, lP = window.Vue.normalizeClass, kh = window.Vue.createBlock, cP = window.Vue.toDisplayString, uP = window.Vue.createTextVNode, dP = { class: "sx-quick-tutorial" }, gP = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, mP = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, pP = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, hP = { class: "sx-quick-tutorial__illustration" }, fP = ["innerHTML"], wP = ["innerHTML"], vP = { class: "sx-quick-tutorial__step-indicator py-3" }, _P = ["onClick"], SP = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, yP = {
  key: "secondary-point-1",
  class: "ma-0"
}, CP = {
  key: "secondary-point-2",
  class: "ma-0"
}, xP = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, $h = window.Vue.ref, Vh = window.Codex.CdxButton, bP = window.Codex.CdxIcon, kP = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = $h(2), n = $h(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = fs();
    return (r, l) => {
      const c = aP("i18n");
      return zt(), Ln("section", dP, [
        Zo(Yn(M), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: So(() => [
            ua("section", gP, [
              Zo(ur, {
                name: "fade",
                mode: "out-in"
              }, {
                default: So(() => [
                  s(1) ? lr((zt(), Ln("h2", mP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? lr((zt(), Ln("h2", pP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : cr("", !0)
                ]),
                _: 1
              })
            ]),
            ua("section", hP, [
              Zo(ur, { name: "mw-ui-animation-slide-start" }, {
                default: So(() => [
                  s(1) ? (zt(), Ln("div", {
                    key: "illustration-1",
                    innerHTML: Yn(sP)
                  }, null, 8, fP)) : s(2) ? (zt(), Ln("div", {
                    key: "illustration-2",
                    innerHTML: Yn(oP)
                  }, null, 8, wP)) : cr("", !0)
                ]),
                _: 1
              })
            ]),
            ua("div", vP, [
              (zt(!0), Ln(rP, null, iP(t.value, (u) => (zt(), Ln("span", {
                key: `dot-${u}`,
                class: lP(["dot mx-1", { "dot-active": s(u) }]),
                role: "button",
                onClick: (i) => n.value = u
              }, null, 10, _P))), 128))
            ]),
            ua("section", SP, [
              Zo(ur, {
                name: "fade",
                mode: "out-in"
              }, {
                default: So(() => [
                  s(1) ? lr((zt(), Ln("h3", yP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? lr((zt(), Ln("h3", CP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : cr("", !0)
                ]),
                _: 1
              })
            ]),
            ua("div", xP, [
              Zo(ur, {
                name: "fade",
                mode: "out-in"
              }, {
                default: So(() => [
                  s(1) ? (zt(), kh(Yn(Vh), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: So(() => [
                      Zo(Yn(bP), { icon: Yn(ps) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (zt(), kh(Yn(Vh), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Yn(a)
                  }, {
                    default: So(() => [
                      uP(cP(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
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
const $P = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: kP
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, VP = window.Vue.resolveComponent, EP = window.Vue.createVNode, LP = window.Vue.normalizeClass, TP = window.Vue.openBlock, AP = window.Vue.createElementBlock;
function DP(e, t, n, o, s, a) {
  const r = VP("sx-quick-tutorial");
  return TP(), AP("main", {
    class: LP(["sx-quick-tutorial-view", a.classes])
  }, [
    EP(r)
  ], 2);
}
const PP = /* @__PURE__ */ he($P, [["render", DP]]);
const BP = window.Vue.resolveDirective, Eh = window.Vue.createElementVNode, FP = window.Vue.withDirectives, NP = window.Vue.unref, MP = window.Vue.withCtx, UP = window.Vue.createVNode, IP = window.Vue.openBlock, RP = window.Vue.createElementBlock, zP = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, OP = { class: "sx-editor__original-content-panel__header mb-2" }, jP = ["lang", "dir", "innerHTML"], Lh = window.Vue.ref, HP = window.Vue.onMounted, GP = {
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
    }, o = Lh(null), s = Lh(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return HP(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const c = BP("i18n");
      return IP(), RP("section", zP, [
        FP(Eh("h5", OP, null, 512), [
          [c, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        UP(NP(c1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: MP(() => [
            Eh("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, jP)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, qP = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const WP = window.Vue.unref, da = window.Vue.createElementVNode, Th = window.Vue.resolveDirective, Zc = window.Vue.withDirectives, XP = window.Vue.normalizeClass, KP = window.Vue.openBlock, YP = window.Vue.createElementBlock, QP = window.Vue.createCommentVNode, JP = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, ZP = { class: "sx-editor__feedback-overlay-content px-4" }, eB = ["innerHTML"], tB = { class: "sx-editor__feedback-overlay-content__title" }, nB = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, eu = window.Vue.computed, oB = {
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
    const t = e, { targetLanguageURLParameter: n } = F(), o = eu(
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
      const c = Th("i18n"), u = Th("i18n-html");
      return e.showFeedback ? (KP(), YP("div", JP, [
        da("div", ZP, [
          da("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: WP(qP)
          }, null, 8, eB),
          Zc(da("h2", tB, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Zc(da("p", nB, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Zc(da("p", {
            class: XP(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [u, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : QP("", !0);
    };
  }
}, sB = window.Vuex.useStore, aB = () => {
  const e = sB(), t = wd(), { selectNextTranslationUnit: n } = ws(), {
    isSectionTitleSelected: o,
    sourceSection: s,
    selectedContentTranslationUnit: a
  } = se(), { getCurrentTitleByLanguage: r } = cn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: c
  } = F(), { currentMTProvider: u } = Fe(e);
  return (i) => k(void 0, null, function* () {
    if (!o.value) {
      const d = document.createElement("div");
      d.innerHTML = i, d.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = d.innerHTML;
    }
    a.value instanceof gt && (i = (yield nv(
      i,
      r(c.value, l.value),
      c.value
    )) || i), s.value.setTranslationForSelectedTranslationUnit(
      i,
      u.value
    ), t(), n();
  });
};
const Je = window.Vue.unref, tu = window.Vue.openBlock, nu = window.Vue.createBlock, Ah = window.Vue.createCommentVNode, Dh = window.Vue.createVNode, iB = window.Vue.createElementVNode, rB = window.Vue.withCtx, lB = { class: "sx-editor__editing-surface-container grow" }, ou = window.Vue.ref, cB = window.Vue.computed;
window.Vue.inject;
const uB = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ou(!1), o = nt(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: c, originalContent: u, title: i } = history.state, d = ou(null), g = ou(!1), { logEditorSegmentAddEvent: m, logEditorSegmentEditEvent: p } = cv(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = F(), { isSectionTitleSelected: w, sourceSection: v } = se(), C = cB(
      () => sn.calculateScore(
        d.value,
        c,
        f.value
      )
    ), y = aB(), _ = (E) => k(this, null, function* () {
      d.value = E, g.value = !0;
      const L = new Promise((x) => setTimeout(x, 2e3));
      let N = Promise.resolve();
      r ? v.value.editedTranslation = E : N = y(E), C.value === 0 && l ? m() : C.value > 0 && p(), yield Promise.all([L, N]), g.value = !1, a();
    });
    return r ? mw.cx.eventlogging.stats.publishEditorStepAccess() : mw.cx.eventlogging.stats.editingStepAccess(!0), (E, L) => (tu(), nu(Je(M), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: rB(() => [
        Je(u) ? (tu(), nu(GP, {
          key: 0,
          language: Je(h),
          dir: Je(O.getDir)(Je(h)),
          "original-content": Je(u)
        }, null, 8, ["language", "dir", "original-content"])) : Ah("", !0),
        n.value ? Ah("", !0) : (tu(), nu(Je(mt), { key: 1 })),
        iB("div", lB, [
          Dh(oB, {
            "edited-translation": d.value,
            "show-feedback": g.value,
            "proposed-translation": Je(c)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Dh(x4, {
            content: Je(c),
            language: Je(f),
            dir: Je(O.getDir)(Je(f)),
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
const dB = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: uB
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
}, gB = window.Vue.resolveComponent, mB = window.Vue.createVNode, pB = window.Vue.normalizeClass, hB = window.Vue.openBlock, fB = window.Vue.createElementBlock;
function wB(e, t, n, o, s, a) {
  const r = gB("sx-editor");
  return hB(), fB("main", {
    class: pB(["sx-editor-view", a.classes])
  }, [
    mB(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const vB = /* @__PURE__ */ he(dB, [["render", wB]]);
const en = window.Vue.unref, yo = window.Vue.createVNode, ga = window.Vue.withCtx, _B = window.Vue.resolveDirective, SB = window.Vue.withDirectives, yB = window.Vue.openBlock, CB = window.Vue.createBlock, Ph = window.Codex.CdxButton, Bh = window.Codex.CdxIcon, xB = {
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
      const a = _B("i18n");
      return yB(), CB(en(M), { class: "ma-0 sx-publisher__header" }, {
        default: ga(() => [
          yo(en(V), {
            shrink: "",
            class: "me-2"
          }, {
            default: ga(() => [
              yo(en(Ph), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: ga(() => [
                  yo(en(Bh), { icon: en(ms) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          SB(yo(en(V), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          yo(en(V), { shrink: "" }, {
            default: ga(() => [
              yo(en(Ph), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: ga(() => [
                  yo(en(Bh), { icon: en(LC) }, null, 8, ["icon"])
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
}, bB = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, kB = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
const su = window.Vue.createElementVNode, Nh = window.Vue.toDisplayString, au = window.Vue.unref, iu = window.Vue.withCtx, Mh = window.Vue.createVNode, $B = window.Vue.openBlock, VB = window.Vue.createBlock, EB = window.Vue.createCommentVNode, LB = ["innerHTML"], TB = ["textContent"], AB = ["textContent"], ru = window.Vue.computed, DB = {
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
        svg: bB,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: kB,
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
    return (l, c) => e.active ? ($B(), VB(au(Vt), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: iu(() => [
        Mh(au(M), { class: "ma-4" }, {
          default: iu(() => [
            Mh(au(V), null, {
              default: iu(() => [
                su("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, LB),
                su("h2", {
                  textContent: Nh(a.value)
                }, null, 8, TB),
                su("p", {
                  class: "ma-0",
                  textContent: Nh(r.value)
                }, null, 8, AB)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : EB("", !0);
  }
};
const ut = window.Vue.unref, Ot = window.Vue.createVNode, Tn = window.Vue.withCtx, PB = window.Vue.resolveDirective, BB = window.Vue.withDirectives, Uh = window.Vue.toDisplayString, FB = window.Vue.createTextVNode, lu = window.Vue.openBlock, Ih = window.Vue.createElementBlock, NB = window.Vue.createCommentVNode, gv = window.Vue.createElementVNode, MB = window.Vue.createBlock, UB = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, IB = ["src"], RB = ["textContent"], zB = /* @__PURE__ */ gv("p", { class: "mt-0" }, null, -1), OB = window.Vue.computed, jB = window.Vue.inject, HB = window.Vue.ref, Rh = window.Codex.CdxButton, GB = window.Codex.CdxIcon, qB = {
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
    const n = t, o = HB(""), s = () => n("close"), a = () => n("publish", o.value), r = jB("breakpoints"), l = OB(() => r.value.mobile);
    return (c, u) => {
      const i = PB("i18n");
      return e.active && e.captchaDetails ? (lu(), MB(ut(Vt), {
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
                  Ot(ut(Rh), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": c.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: Tn(() => [
                      Ot(ut(GB), { icon: ut(ms) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              BB(Ot(ut(V), {
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
                  Ot(ut(Rh), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: Tn(() => [
                      FB(Uh(c.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
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
          gv("div", UB, [
            e.captchaDetails.type === "image" ? (lu(), Ih("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, IB)) : (lu(), Ih("p", {
              key: 1,
              textContent: Uh(e.captchaDetails.question)
            }, null, 8, RB)),
            zB,
            Ot(ut(M), { class: "ma-0" }, {
              default: Tn(() => [
                Ot(ut(V), null, {
                  default: Tn(() => [
                    Ot(ut(bu), {
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
      }, 8, ["fullscreen"])) : NB("", !0);
    };
  }
};
const Qn = window.Vue.unref, dr = window.Vue.createVNode, es = window.Vue.withCtx, ts = window.Vue.createElementVNode, WB = window.Vue.resolveDirective, XB = window.Vue.withDirectives, KB = window.Vue.renderList, YB = window.Vue.Fragment, cu = window.Vue.openBlock, QB = window.Vue.createElementBlock, zh = window.Vue.toDisplayString, Oh = window.Vue.createTextVNode, JB = window.Vue.isRef, ZB = window.Vue.normalizeClass, jh = window.Vue.createBlock, e9 = { class: "mw-ui-dialog__header" }, t9 = { class: "row ma-0 px-4 py-3" }, n9 = { class: "col shrink justify-center" }, o9 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, s9 = { class: "mb-0" }, a9 = { class: "pa-4" }, i9 = window.Codex.CdxField, r9 = window.Codex.CdxRadio, l9 = window.Vuex.useStore, gr = window.Vue.computed, c9 = window.Codex.CdxButton, u9 = window.Codex.CdxIcon, d9 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = l9(), { target: s, PUBLISHING_TARGETS: a } = Tt(), r = gr(() => o.state.translator.isAnon), l = fe(), { sourceSection: c } = se(), { isCurrentSectionPresent: u, isPresentLeadSection: i } = ht(), d = gr(
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
      const w = WB("i18n");
      return cu(), jh(Qn(Vt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: h.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: f[1] || (f[1] = (v) => h.$emit("update:active", v)),
        onClose: p
      }, {
        header: es(() => [
          ts("div", e9, [
            ts("div", t9, [
              ts("div", n9, [
                dr(Qn(c9), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": h.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: es(() => [
                    dr(Qn(u9), { icon: Qn(Jf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              ts("div", o9, [
                XB(ts("h4", s9, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            dr(Qn(yr))
          ])
        ]),
        default: es(() => [
          ts("div", a9, [
            dr(Qn(i9), { "is-fieldset": "" }, {
              default: es(() => [
                (cu(!0), QB(YB, null, KB(m.value, (v, C) => (cu(), jh(Qn(r9), {
                  key: "publish-options-radio-" + v.value,
                  modelValue: Qn(s),
                  "onUpdate:modelValue": [
                    f[0] || (f[0] = (y) => JB(s) ? s.value = y : null),
                    p
                  ],
                  class: ZB(C < m.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": v.value,
                  disabled: v.disabled,
                  name: "publish-options"
                }, {
                  description: es(() => [
                    Oh(zh(v.description), 1)
                  ]),
                  default: es(() => [
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
const jt = window.Vue.unref, Hh = window.Vue.toDisplayString, Gh = window.Vue.createElementVNode, g9 = window.Vue.resolveDirective, ns = window.Vue.createVNode, m9 = window.Vue.withDirectives, ma = window.Vue.withCtx, uu = window.Vue.openBlock, qh = window.Vue.createBlock, Wh = window.Vue.createCommentVNode, p9 = window.Vue.Fragment, h9 = window.Vue.createElementBlock, f9 = window.Vue.normalizeClass, w9 = ["textContent"], v9 = ["textContent"], os = window.Vue.computed, Xh = window.Vue.ref, _9 = window.Vue.watch, Kh = window.Codex.CdxButton, Yh = window.Codex.CdxIcon, S9 = window.Codex.CdxMessage, y9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Xh(0), o = Xh(null);
    _9(o, () => {
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
      const h = g9("i18n-html");
      return uu(), qh(jt(S9), {
        type: a.value,
        class: f9(["sx-publisher__review-info", l.value]),
        icon: r.value ? jt(DC) : null
      }, {
        default: ma(() => [
          Gh("h5", {
            textContent: Hh(i.value)
          }, null, 8, w9),
          r.value ? Wh("", !0) : (uu(), h9(p9, { key: 0 }, [
            Gh("p", {
              textContent: Hh(u.value)
            }, null, 8, v9),
            ns(jt(M), {
              justify: "between",
              class: "ma-0"
            }, {
              default: ma(() => [
                m9(ns(jt(V), {
                  ref_key: "learnMoreContainer",
                  ref: o,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (uu(), qh(jt(V), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: ma(() => [
                    ns(jt(Kh), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: d
                    }, {
                      default: ma(() => [
                        ns(jt(Yh), { icon: jt(od) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    ns(jt(Kh), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: ma(() => [
                        ns(jt(Yh), { icon: jt(ps) }, null, 8, ["icon"])
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
}, C9 = (e) => {
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
}, x9 = window.Vuex.useStore, b9 = window.Vue.computed, k9 = () => {
  const e = x9(), { currentTranslation: t } = Xt(), { currentMTProvider: n } = Fe(e), { currentTargetPageTitle: o } = ot(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = F(), { sourceSection: c } = se(), u = Lt(), i = b9(() => {
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
}, $9 = window.Vue.computed, Qh = window.Vue.ref, V9 = window.Vuex.useStore, E9 = () => {
  const e = V9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = F(), { sourceSection: s } = se(), { targetPageTitleForPublishing: a } = Ma(), r = rv(), { isPresentLeadSection: l } = ht(), { sectionSuggestion: c } = Le(), u = $9(
    () => {
      var _, E;
      return l.value ? no.LEAD_SECTION_DUMMY_TITLE : (E = c.value) == null ? void 0 : E.presentSections[(_ = s.value) == null ? void 0 : _.sourceSectionTitleForPublishing];
    }
  ), { target: i, PUBLISHING_TARGETS: d } = Tt(), g = Qh(!1), m = Qh("pending"), p = () => g.value = !1, h = wd(), {
    logPublishAttemptEvent: f,
    logPublishSuccessEvent: w,
    logPublishFailureEvent: v
  } = k9(), C = (_, E) => k(void 0, null, function* () {
    f();
    const L = yield h();
    if (L instanceof so)
      return v(), { publishFeedbackMessage: L, targetUrl: null };
    const N = L, x = a.value, B = {
      html: C9(s.value.translationHtml),
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
    u.value && (B.existingSectionTitle = u.value), _ && (B.captchaId = _, B.captchaWord = E);
    const U = yield $t.publishTranslation(
      B
    );
    return U.publishFeedbackMessage === null ? w(U.pageId, U.revisionId) : v(), U;
  });
  return {
    closePublishDialog: p,
    doPublish: (_ = null, E = null) => k(void 0, null, function* () {
      m.value = "pending", g.value = !0;
      let L;
      try {
        L = yield C(
          E == null ? void 0 : E.id,
          _
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
}, L9 = window.Vue.computed, T9 = () => {
  const e = nt(), { sourceSection: t } = se(), { getCurrentTitleByLanguage: n } = cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = F(), a = L9(
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
}, A9 = () => {
  const { targetLanguageURLParameter: e } = F(), { sourceSection: t } = se();
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
}, D9 = window.Vue.ref, P9 = window.Vue.computed, B9 = () => {
  const e = A9(), { target: t, PUBLISHING_TARGETS: n } = Tt(), { targetPageTitleForPublishing: o } = Ma(), s = D9([]), a = P9(
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
      if (!uv() && t.value !== n.SANDBOX) {
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
}, F9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = Tt(), { currentSourcePage: n } = ot(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = F(), { sourceSection: a } = se(), { targetPageTitleForPublishing: r } = Ma();
  return (l) => k(void 0, null, function* () {
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
}, Jh = window.Vue.ref, N9 = () => {
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
const de = window.Vue.unref, qe = window.Vue.createVNode, M9 = window.Vue.resolveDirective, du = window.Vue.withDirectives, pa = window.Vue.openBlock, ha = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Zh = window.Vue.toDisplayString, U9 = window.Vue.createTextVNode, ss = window.Vue.createElementVNode, as = window.Vue.withCtx, ef = window.Vue.normalizeClass, I9 = { class: "sx-publisher" }, R9 = {
  key: 0,
  class: "mb-2"
}, z9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, O9 = { key: 0 }, j9 = { key: 1 }, H9 = ["href"], G9 = ["innerHTML"], q9 = { class: "sx-publisher__section-preview pa-5" }, W9 = ["innerHTML"], mr = window.Vue.computed, X9 = window.Vue.onMounted, K9 = window.Vue.ref, Y9 = window.Vue.watch, tf = window.Codex.CdxButton, gu = window.Codex.CdxIcon, Q9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = se(), { sectionSuggestion: n } = Le(), { isCurrentSectionPresent: o, isPresentLeadSection: s } = ht(), {
      targetLanguageURLParameter: a,
      sectionURLParameter: r
    } = F(), l = fe(), c = mr(
      () => {
        var P;
        return s.value ? l.i18n("cx-sx-present-lead-section-label") : (P = t.value) == null ? void 0 : P.title;
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
    } = N9(), {
      publishFeedbackMessages: f,
      isPublishingDisabled: w,
      addPublishFeedbackMessage: v,
      clearPublishFeedbackMessages: C,
      initializePublishFeedbackMessages: y
    } = B9(), _ = F9(), { doPublish: E, isPublishDialogActive: L, publishStatus: N, closePublishDialog: x } = E9(), B = (P = null) => k(this, null, function* () {
      if (w.value)
        return;
      const I = yield E(P, g.value);
      if (!I)
        return;
      const { publishFeedbackMessage: K, targetUrl: Q } = I;
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
    X9(() => {
      y(), mw.cx.eventlogging.stats.publishStepAccess();
    });
    const U = T9(), j = K9(!1), te = () => j.value = !0;
    Y9(j, (P) => {
      P || (C(), y());
    });
    const ie = mr(() => {
      var P, I;
      return s.value ? l.i18n("cx-sx-present-lead-section-label") : (I = (P = n.value) == null ? void 0 : P.presentSections) == null ? void 0 : I[r.value];
    }), oe = mr(() => {
      var K;
      const P = Z.getPageUrl(
        a.value,
        (K = n.value) == null ? void 0 : K.targetTitle
      ), I = s.value ? "" : (ie.value || "").replace(/ /g, "_");
      return `${P}#${I}`;
    });
    return (P, I) => {
      const K = M9("i18n");
      return pa(), ha("section", I9, [
        qe(xB, {
          "is-publishing-disabled": de(w),
          onPublishTranslation: B
        }, null, 8, ["is-publishing-disabled"]),
        ss("div", {
          class: ef(["sx-publisher__publish-panel", de(o) ? "py-4" : "pa-4"])
        }, [
          de(o) ? (pa(), ha("div", z9, [
            de(s) ? du((pa(), ha("h5", O9, null, 512)), [
              [K, void 0, "cx-sx-publisher-publish-panel-existing-lead-section-notice"]
            ]) : du((pa(), ha("h5", j9, null, 512)), [
              [K, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            ss("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: oe.value,
              target: "_blank"
            }, [
              U9(Zh(ie.value) + " ", 1),
              qe(de(gu), { icon: de(Ba) }, null, 8, ["icon"])
            ], 8, H9)
          ])) : du((pa(), ha("h5", R9, null, 512)), [
            [K, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          ss("div", {
            class: ef({ "px-4 mt-4": de(o) })
          }, [
            ss("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: d.value
            }, null, 8, G9),
            qe(de(M), {
              justify: "end",
              class: "ma-0"
            }, {
              default: as(() => [
                qe(de(V), { shrink: "" }, {
                  default: as(() => [
                    qe(de(tf), {
                      weight: "quiet",
                      "aria-label": P.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: te
                    }, {
                      default: as(() => [
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
        qe(y9, { "publish-feedback-messages": de(f) }, null, 8, ["publish-feedback-messages"]),
        ss("section", q9, [
          qe(de(M), { class: "pb-5 ma-0" }, {
            default: as(() => [
              qe(de(V), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: Zh(c.value)
              }, null, 8, ["textContent"]),
              qe(de(V), { shrink: "" }, {
                default: as(() => [
                  qe(de(tf), {
                    weight: "quiet",
                    "aria-label": P.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: de(U)
                  }, {
                    default: as(() => [
                      qe(de(gu), { icon: de(td) }, null, 8, ["icon"])
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
          }, null, 8, W9)
        ]),
        qe(d9, {
          active: j.value,
          "onUpdate:active": I[0] || (I[0] = (Q) => j.value = Q)
        }, null, 8, ["active"]),
        qe(qB, {
          active: de(m),
          "captcha-details": de(g),
          onClose: de(h),
          onPublish: I[1] || (I[1] = (Q) => B(Q))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        qe(DB, {
          active: de(L),
          status: de(N)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const J9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: Q9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, Z9 = window.Vue.resolveComponent, e7 = window.Vue.createVNode, t7 = window.Vue.normalizeClass, n7 = window.Vue.openBlock, o7 = window.Vue.createElementBlock;
function s7(e, t, n, o, s, a) {
  const r = Z9("sx-publisher");
  return n7(), o7("main", {
    class: t7(["sx-publisher-view", a.classes])
  }, [
    e7(r)
  ], 2);
}
const a7 = /* @__PURE__ */ he(J9, [["render", s7]]);
const Ht = window.Vue.unref, Jn = window.Vue.createVNode, Co = window.Vue.withCtx, mu = window.Vue.toDisplayString, pu = window.Vue.createElementVNode, nf = window.Vue.openBlock, of = window.Vue.createBlock, i7 = window.Vue.createCommentVNode, r7 = ["textContent"], l7 = ["textContent"], c7 = ["textContent"], mv = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: ds,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (nf(), of(Ht(M), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Ht(O.getDir)(e.suggestion.language)
    }, {
      default: Co(() => [
        Jn(Ht(V), { shrink: "" }, {
          default: Co(() => [
            Jn(Ht(Iu), {
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
                    pu("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: mu(e.suggestion.title)
                    }, null, 8, r7)
                  ]),
                  _: 1
                }),
                Jn(Ht(V), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: Co(() => [
                    pu("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: mu(e.suggestion.description)
                    }, null, 8, l7)
                  ]),
                  _: 1
                }),
                Jn(Ht(V), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: Co(() => [
                    e.suggestion.inFeaturedCollection ? (nf(), of(Ur, {
                      key: 0,
                      class: "me-2"
                    })) : i7("", !0),
                    Jn(Ht(et), {
                      icon: Ht(X0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    pu("small", {
                      textContent: mu((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, c7)
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
const sf = window.Vue.unref, fa = window.Vue.openBlock, hu = window.Vue.createBlock, u7 = window.Vue.createCommentVNode, d7 = window.Vue.resolveDirective, g7 = window.Vue.withDirectives, af = window.Vue.createElementBlock, m7 = window.Vue.renderList, p7 = window.Vue.Fragment, h7 = window.Vue.normalizeClass, f7 = window.Vue.withCtx, w7 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, rf = window.Vue.computed, v7 = window.Vue.ref, _7 = {
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
    const { sourceLanguageURLParameter: t } = F(), n = rf(() => O.getAutonym(t.value)), o = e, s = v7(null), a = (u) => s.value = u, r = () => s.value = null, l = (u) => {
      var i;
      return ((i = o.selectedItem) == null ? void 0 : i.title) === u.title && !s.value || s.value === u.pageId;
    }, c = rf(() => o.searchInput);
    return (u, i) => {
      const d = d7("i18n");
      return fa(), hu(sf(Ze), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: f7(() => [
          e.searchResultsLoading ? (fa(), hu(sf(mt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : e.searchResultsSlice.length === 0 ? g7((fa(), af("p", w7, null, 512)), [
            [d, [
              c.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : u7("", !0),
          (fa(!0), af(p7, null, m7(e.searchResultsSlice, (g) => (fa(), hu(mv, {
            key: g.pageId,
            suggestion: g,
            class: h7({
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
const lf = window.Vue.toDisplayString, S7 = window.Vue.createElementVNode, pr = window.Vue.openBlock, cf = window.Vue.createElementBlock, y7 = window.Vue.createCommentVNode, C7 = window.Vue.renderList, x7 = window.Vue.Fragment, b7 = window.Vue.normalizeClass, uf = window.Vue.createBlock, k7 = window.Vue.unref, df = window.Vue.withCtx, $7 = ["textContent"], V7 = ["textContent"], E7 = window.Vue.ref, fu = {
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
    const n = e, o = E7(null), s = (l) => o.value = l, a = () => o.value = null, r = (l) => {
      var c;
      return ((c = n.selectedItem) == null ? void 0 : c.title) === l.title && !o.value || o.value === l.pageId;
    };
    return (l, c) => (pr(), uf(k7(Ze), { class: "sx-article-search__suggestions pa-0" }, {
      header: df(() => [
        S7("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: lf(e.cardTitle)
        }, null, 8, $7),
        e.cardSubtitle ? (pr(), cf("p", {
          key: 0,
          class: "ma-0 px-4 pb-2 sx-article-search__suggestions-subtitle",
          textContent: lf(e.cardSubtitle)
        }, null, 8, V7)) : y7("", !0)
      ]),
      default: df(() => [
        (pr(!0), cf(x7, null, C7(e.suggestions, (u) => (pr(), uf(mv, {
          key: u.pageId,
          suggestion: u,
          class: b7({
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
}, L7 = window.Vue.computed, T7 = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), gf = "other", A7 = (e) => L7((t) => {
  const o = e.value.slice(0, 3), s = {
    value: gf,
    props: {
      icon: J0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== gf);
  return T7(a, o) ? t : [...o.map((l) => ({
    value: l,
    props: {
      label: O.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), s];
}), D7 = window.Vue.computed, P7 = () => {
  const { supportedLanguageCodes: e } = Aa(), { targetLanguageURLParameter: t } = F();
  return { getSuggestedSourceLanguages: (o) => D7(() => {
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
}, B7 = window.Vue.ref, F7 = () => {
  const e = B7([]), t = () => {
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
}, N7 = window.Vuex.useStore, mf = window.Vue.ref, wu = window.Vue.computed, pf = window.Vue.watch, M7 = (e) => {
  var p;
  const t = N7(), n = Eo(), { fetchPageSuggestionsByFeaturedCollections: o } = Zu(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = F(), { featuredCollection: r } = Wt(), { isFilteringByFeaturedCollection: l } = ro(), c = mf([]), u = mf(
    !((p = c.value) != null && p.name)
  ), i = () => {
    var h;
    return !l() && ((h = r.value) == null ? void 0 : h.name) && d.value.length === 0;
  }, d = wu(() => {
    var h;
    return t.getters["suggestions/getCollectionPageSuggestions"](
      s.value,
      a.value,
      (h = r.value) == null ? void 0 : h.name
    );
  }), g = wu(() => {
    var h;
    return t.getters["suggestions/getCollectionSectionSuggestions"](
      s.value,
      a.value,
      (h = r.value) == null ? void 0 : h.name
    );
  }), m = wu(() => [
    ...d.value || [],
    ...g.value || []
  ].slice(0, e));
  return pf(
    m,
    (h) => k(void 0, null, function* () {
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
    () => k(void 0, null, function* () {
      i() && (u.value = !1, c.value = [], yield o());
    }),
    { immediate: !0 }
  ), {
    featuredCollectionPages: c,
    featuredCollectionPagesResolved: u
  };
};
const U7 = window.Vue.resolveDirective, I7 = window.Vue.createElementVNode, vu = window.Vue.withDirectives, le = window.Vue.unref, wa = window.Vue.withCtx, tn = window.Vue.createVNode, is = window.Vue.openBlock, _u = window.Vue.createBlock, R7 = window.Vue.createCommentVNode, Su = window.Vue.createElementBlock, z7 = window.Vue.Fragment, O7 = window.Vue.vShow, va = window.Vue.withModifiers, _a = window.Vue.withKeys, j7 = ["onKeydown"], H7 = { class: "mb-0" }, G7 = {
  key: 3,
  class: "sx-article-search__empty-state"
}, Sa = window.Vue.ref, q7 = window.Vue.onMounted, xo = window.Vue.computed, hf = window.Vue.watch, W7 = window.Vue.inject, X7 = window.Vuex.useStore, K7 = window.Codex.CdxButton, Y7 = window.Codex.CdxIcon, Q7 = window.Codex.CdxSearchInput, ff = 3, J7 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Sa(""), n = Sa(!1), o = Sa(null), s = Sa(!1), { previousLanguages: a, addLanguageToHistory: r } = F7(), l = X7(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = F(), { supportedLanguageCodes: i } = Aa(), { searchResultsLoading: d, searchResultsSlice: g } = Gw(
      c,
      t
    ), { getSuggestedSourceLanguages: m } = P7(), p = m(a), h = A7(
      p
    ), f = nt(), { fetchAllTranslations: w } = hs();
    q7(() => k(this, null, function* () {
      var b;
      w(), r(c.value), (b = o.value) == null || b.focus();
    }));
    const { featuredCollectionPages: v, featuredCollectionPagesResolved: C } = M7(ff), y = () => {
      f.push({ name: "dashboard" });
    }, _ = lw(), E = (b) => {
      _(b, u.value), r(b);
    }, L = (b) => {
      if (b === "other") {
        s.value = !0;
        return;
      }
      E(b);
    };
    hf(
      c,
      () => {
        var b;
        l.dispatch("mediawiki/fetchNearbyPages"), (b = o.value) == null || b.focus();
      },
      { immediate: !0 }
    );
    const N = Lt();
    hf(t, () => {
      n.value || (n.value = !0, N({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const x = () => {
      s.value = !1;
    }, B = (b) => {
      s.value = !1, L(b);
    }, { fetchPreviousEditsInSource: U, previousEditsInSource: j } = Wf(), te = Sa([]);
    (() => U().then(() => j.value.length > 0 ? Vo.fetchPages(
      c.value,
      j.value
    ) : []).then((b) => {
      b = b.slice(0, ff), b = b.sort(
        (T, W) => j.value.indexOf(T.title) - j.value.indexOf(W.title)
      ), te.value = b;
    }))();
    const oe = xo(() => l.getters["mediawiki/getNearbyPages"]), P = W7("breakpoints"), I = xo(() => P.value.mobile), K = Na(), Q = xo(
      () => te.value && te.value.length && C.value
    ), ye = xo(
      () => oe.value && oe.value.length
    ), $e = xo(
      () => v.value && v.value.length > 0
    ), xe = xo(() => $e.value ? v.value || [] : Q.value ? te.value || [] : ye.value ? oe.value || [] : []), { next: Ne, prev: R, keyboardNavigationContainer: z, selectedItem: ae } = Ow(
      t,
      g,
      xe
    ), S = (b) => K(
      b.title,
      c.value,
      u.value,
      D.value
    ), D = xo(() => t.value ? "search_result" : Q.value ? "suggestion_recent_edit" : ye.value ? "suggestion_nearby" : "");
    return (b, T) => {
      const W = U7("i18n");
      return is(), Su("section", {
        ref_key: "keyboardNavigationContainer",
        ref: z,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          T[6] || (T[6] = _a(va((...H) => le(Ne) && le(Ne)(...H), ["stop", "prevent"]), ["tab"])),
          T[7] || (T[7] = _a(va((...H) => le(Ne) && le(Ne)(...H), ["stop", "prevent"]), ["down"])),
          T[8] || (T[8] = _a(va((...H) => le(R) && le(R)(...H), ["stop", "prevent"]), ["up"])),
          _a(va(y, ["stop", "prevent"]), ["esc"]),
          T[9] || (T[9] = _a(va((H) => S(le(ae)), ["stop", "prevent"]), ["enter"]))
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
                vu(I7("h5", H7, null, 512), [
                  [W, void 0, "cx-sx-article-search-header"]
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
                tn(le(K7), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": b.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: y
                }, {
                  default: wa(() => [
                    tn(le(Y7), { icon: le(ms) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        tn(le(Q7), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": T[0] || (T[0] = (H) => t.value = H),
          class: "sx-article-search__search-input",
          placeholder: b.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        tn(le(Ea), {
          class: "sx-article-search__language-button-group",
          items: le(h),
          active: le(c),
          onSelect: L
        }, null, 8, ["items", "active"]),
        t.value ? R7("", !0) : (is(), Su(z7, { key: 0 }, [
          $e.value ? (is(), _u(fu, {
            key: 0,
            "card-title": b.$i18n("cx-sx-article-search-community-priorities-title"),
            "card-subtitle": b.$i18n("cx-sx-article-search-community-priorities-subtitle"),
            suggestions: le(v),
            "selected-item": le(ae),
            onSuggestionClicked: T[1] || (T[1] = (H) => S(H))
          }, null, 8, ["card-title", "card-subtitle", "suggestions", "selected-item"])) : Q.value ? (is(), _u(fu, {
            key: 1,
            "card-title": b.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: te.value,
            "selected-item": le(ae),
            onSuggestionClicked: T[2] || (T[2] = (H) => S(H))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : ye.value ? (is(), _u(fu, {
            key: 2,
            "card-title": b.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: oe.value,
            onSuggestionClicked: T[3] || (T[3] = (H) => S(H))
          }, null, 8, ["card-title", "suggestions"])) : vu((is(), Su("p", G7, null, 512)), [
            [W, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        vu(tn(_7, {
          "search-input": t.value,
          "search-results-loading": le(d),
          "search-results-slice": le(g),
          "selected-item": le(ae),
          onSuggestionClicked: T[4] || (T[4] = (H) => S(H))
        }, null, 8, ["search-input", "search-results-loading", "search-results-slice", "selected-item"]), [
          [O7, !!t.value]
        ]),
        tn(le(Vt), {
          value: s.value,
          "onUpdate:value": T[5] || (T[5] = (H) => s.value = H),
          class: "sx-article-search-language-selector",
          fullscreen: I.value,
          header: I.value,
          title: b.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: x
        }, {
          default: wa(() => [
            tn(le(jw), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: le(i),
              suggestions: le(p),
              placeholder: b.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: B,
              onClose: x
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, j7);
    };
  }
};
const Z7 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: J7
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, eF = window.Vue.resolveComponent, tF = window.Vue.createVNode, nF = window.Vue.normalizeClass, oF = window.Vue.openBlock, sF = window.Vue.createElementBlock;
function aF(e, t, n, o, s, a) {
  const r = eF("sx-article-search");
  return oF(), sF("main", {
    class: nF(["sx-article-search-view", a.classes])
  }, [
    tF(r)
  ], 2);
}
const iF = /* @__PURE__ */ he(Z7, [["render", aF]]), rF = () => {
  const e = Na(), t = hd(), { logDashboardOpenEvent: n } = Xw(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s,
    pageURLParameter: a
  } = F();
  return () => k(void 0, null, function* () {
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
}, lF = window.Vuex.useStore, cF = [
  {
    path: "",
    name: "dashboard",
    component: ep,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: iF,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: sL,
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
    component: x5,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: IT,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: PP,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: nP,
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
    component: vB,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: a7,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: ep,
    meta: { workflowStep: 0 }
  }
], vd = Vk({
  history: $b(),
  routes: cF
}), yu = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, uF = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
vd.beforeEach((e, t, n) => {
  const o = lF();
  if (mw.user.isAnon() || yf.assertUser().catch((i) => {
    i instanceof us && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = rF(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: c
  } = F();
  if (!!(a.value && r.value && l.value)) {
    if (uF(
      a.value,
      r.value,
      l.value
    )) {
      const d = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      yu(e.name, d, n);
    } else
      e.name === "sx-translation-confirmer" && s(), yu(e.name, "sx-translation-confirmer", n);
    return;
  }
  c(), yu(e.name, "dashboard", n);
});
vd.afterEach((e, t) => {
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
const dF = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, gF = window.Vue.createApp, mF = mw.config.get("wgUserLanguage"), pF = "en", hF = mw.messages.values || {}, Lo = gF(fx);
Lo.use(vd);
Lo.use(Xx);
Lo.use(y1);
Lo.use(S1);
const fF = Z1({
  locale: mF,
  finalFallback: pF,
  messages: hF,
  wikilinks: !0
});
Lo.use(fF);
Lo.use(dF);
Lo.mount("#contenttranslation");
