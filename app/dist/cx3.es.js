var Yw = Object.defineProperty, Qw = Object.defineProperties;
var Jw = Object.getOwnPropertyDescriptors;
var sd = Object.getOwnPropertySymbols;
var Zw = Object.prototype.hasOwnProperty, ev = Object.prototype.propertyIsEnumerable;
var ad = (e, t, n) => t in e ? Yw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, de = (e, t) => {
  for (var n in t || (t = {}))
    Zw.call(t, n) && ad(e, n, t[n]);
  if (sd)
    for (var n of sd(t))
      ev.call(t, n) && ad(e, n, t[n]);
  return e;
}, Ye = (e, t) => Qw(e, Jw(t));
var y = (e, t, n) => new Promise((o, s) => {
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
const pe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, tv = {
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
}, nv = window.Vue.toDisplayString, Ur = window.Vue.openBlock, Ir = window.Vue.createElementBlock, ov = window.Vue.createCommentVNode, id = window.Vue.createElementVNode, sv = window.Vue.normalizeClass, av = ["width", "height", "aria-labelledby"], iv = ["id"], rv = ["fill"], lv = ["d"];
function cv(e, t, n, o, s, a) {
  return Ur(), Ir("span", {
    class: sv(["mw-ui-icon notranslate", a.classes])
  }, [
    (Ur(), Ir("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (Ur(), Ir("title", {
        key: 0,
        id: n.iconName
      }, nv(n.iconName), 9, iv)) : ov("", !0),
      id("g", { fill: n.iconColor }, [
        id("path", { d: a.iconImagePath }, null, 8, lv)
      ], 8, rv)
    ], 8, av))
  ], 2);
}
const et = /* @__PURE__ */ pe(tv, [["render", cv]]);
const uv = {
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
}, dv = window.Vue.renderSlot, gv = window.Vue.resolveComponent, rd = window.Vue.normalizeClass, Ia = window.Vue.openBlock, Rr = window.Vue.createBlock, zr = window.Vue.createCommentVNode, mv = window.Vue.toDisplayString, pv = window.Vue.createElementBlock, hv = window.Vue.toHandlerKey, fv = window.Vue.withModifiers, wv = window.Vue.mergeProps, vv = window.Vue.createElementVNode, _v = window.Vue.resolveDynamicComponent, Sv = window.Vue.withCtx, yv = { class: "mw-ui-button__content" }, xv = ["textContent"];
function Cv(e, t, n, o, s, a) {
  const r = gv("mw-icon");
  return Ia(), Rr(_v(a.component), {
    class: rd(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Sv(() => [
      dv(e.$slots, "default", {}, () => [
        vv("span", yv, [
          n.icon ? (Ia(), Rr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: rd(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : zr("", !0),
          !a.isIcon && n.label ? (Ia(), pv("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: mv(n.label)
          }, null, 8, xv)) : zr("", !0),
          n.indicator ? (Ia(), Rr(r, wv({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [hv(a.indicatorClickEvent)]: t[0] || (t[0] = fv((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : zr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Ke = /* @__PURE__ */ pe(uv, [["render", Cv]]);
const bv = {
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
}, kv = window.Vue.renderList, $v = window.Vue.Fragment, Or = window.Vue.openBlock, ld = window.Vue.createElementBlock, Vv = window.Vue.resolveComponent, Ev = window.Vue.withModifiers, Lv = window.Vue.mergeProps, Tv = window.Vue.createBlock, Av = { class: "row mw-ui-button-group ma-0 pa-0" };
function Dv(e, t, n, o, s, a) {
  const r = Vv("mw-button");
  return Or(), ld("div", Av, [
    (Or(!0), ld($v, null, kv(n.items, (l) => (Or(), Tv(r, Lv({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Ev((c) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const ba = /* @__PURE__ */ pe(bv, [["render", Dv]]);
const Pv = {
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
}, cd = window.Vue.renderSlot, Bv = window.Vue.toDisplayString, ud = window.Vue.openBlock, dd = window.Vue.createElementBlock, Fv = window.Vue.createCommentVNode, Nv = window.Vue.createElementVNode, Mv = { class: "mw-ui-card" }, Uv = ["textContent"], Iv = { class: "mw-ui-card__content" };
function Rv(e, t, n, o, s, a) {
  return ud(), dd("div", Mv, [
    cd(e.$slots, "header", {}, () => [
      n.title ? (ud(), dd("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Bv(n.title)
      }, null, 8, Uv)) : Fv("", !0)
    ]),
    Nv("div", Iv, [
      cd(e.$slots, "default")
    ])
  ]);
}
const Ze = /* @__PURE__ */ pe(Pv, [["render", Rv]]);
const zv = {}, Ov = window.Vue.openBlock, jv = window.Vue.createElementBlock, Hv = { class: "mw-ui-divider row" };
function qv(e, t) {
  return Ov(), jv("div", Hv);
}
const fr = /* @__PURE__ */ pe(zv, [["render", qv]]);
const Gv = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Wv = window.Vue.renderSlot, Xv = window.Vue.resolveDynamicComponent, Kv = window.Vue.withCtx, Yv = window.Vue.openBlock, Qv = window.Vue.createBlock;
function Jv(e, t, n, o, s, a) {
  return Yv(), Qv(Xv(n.tag), { class: "mw-grid container" }, {
    default: Kv(() => [
      Wv(e.$slots, "default")
    ]),
    _: 3
  });
}
const Zv = /* @__PURE__ */ pe(Gv, [["render", Jv]]), e0 = {
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
}, t0 = window.Vue.renderSlot, n0 = window.Vue.resolveDynamicComponent, o0 = window.Vue.normalizeClass, s0 = window.Vue.withCtx, a0 = window.Vue.openBlock, i0 = window.Vue.createBlock;
function r0(e, t, n, o, s, a) {
  return a0(), i0(n0(n.tag), {
    class: o0(a.classes)
  }, {
    default: s0(() => [
      t0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const U = /* @__PURE__ */ pe(e0, [["render", r0]]), ru = ["mobile", "tablet", "desktop", "desktop-wide"], l0 = ru.reduce(
  (e, t) => Ye(de({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), c0 = {
  name: "MwCol",
  props: Ye(de({}, l0), {
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
      for (let n = 0; n < ru.length; n++) {
        let o = ru[n], s = this.$props[o];
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
}, u0 = window.Vue.renderSlot, d0 = window.Vue.resolveDynamicComponent, g0 = window.Vue.normalizeClass, m0 = window.Vue.withCtx, p0 = window.Vue.openBlock, h0 = window.Vue.createBlock;
function f0(e, t, n, o, s, a) {
  return p0(), h0(d0(n.tag), {
    class: g0(a.classes)
  }, {
    default: m0(() => [
      u0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const C = /* @__PURE__ */ pe(c0, [["render", f0]]), w0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", v0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", wr = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", _0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, S0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Wh = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", y0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", x0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", vr = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", C0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", b0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", k0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", gd = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", $0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Xh = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", V0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", E0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", L0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", T0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", A0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", lu = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, D0 = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, P0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Kh = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", B0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const jr = window.Vue.computed, F0 = window.Vue.watch, N0 = window.Vue.ref, M0 = window.Vue.nextTick, U0 = {
  name: "MwDialog",
  components: {
    MwButton: Ke,
    MwRow: U,
    MwCol: C,
    MwDivider: fr
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
    const n = N0(null), o = jr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = jr(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    F0(
      () => e.value,
      (c) => {
        c ? (r(), M0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = jr(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClass: s,
      mwIconClose: vr,
      root: n
    };
  }
}, md = window.Vue.normalizeClass, Hr = window.Vue.createElementVNode, qr = window.Vue.renderSlot, Ra = window.Vue.resolveComponent, hs = window.Vue.createVNode, Gr = window.Vue.withCtx, pd = window.Vue.createCommentVNode, I0 = window.Vue.withKeys, hd = window.Vue.openBlock, R0 = window.Vue.createElementBlock, z0 = window.Vue.Transition, O0 = window.Vue.normalizeStyle, j0 = window.Vue.createBlock, H0 = { class: "mw-ui-dialog__shell items-stretch" }, q0 = { class: "mw-ui-dialog__body" };
function G0(e, t, n, o, s, a) {
  const r = Ra("mw-col"), l = Ra("mw-button"), c = Ra("mw-row"), u = Ra("mw-divider");
  return hd(), j0(z0, {
    name: "mw-ui-animation-fade",
    style: O0(o.cssVars)
  }, {
    default: Gr(() => [
      n.value ? (hd(), R0("div", {
        key: 0,
        ref: "root",
        class: md(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = I0((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        Hr("div", {
          class: md(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        Hr("div", H0, [
          n.header ? qr(e.$slots, "header", { key: 0 }, () => [
            hs(c, { class: "mw-ui-dialog__header" }, {
              default: Gr(() => [
                hs(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                hs(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Gr(() => [
                    hs(l, {
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
            hs(u)
          ]) : pd("", !0),
          Hr("div", q0, [
            qr(e.$slots, "default")
          ]),
          qr(e.$slots, "footer")
        ])
      ], 34)) : pd("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const kt = /* @__PURE__ */ pe(U0, [["render", G0]]);
const W0 = {
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
      const t = de({}, e.$attrs);
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
}, fd = window.Vue.renderSlot, X0 = window.Vue.resolveComponent, za = window.Vue.openBlock, Wr = window.Vue.createBlock, wd = window.Vue.createCommentVNode, K0 = window.Vue.resolveDynamicComponent, Y0 = window.Vue.toDisplayString, Q0 = window.Vue.mergeProps, J0 = window.Vue.withModifiers, Z0 = window.Vue.createElementVNode, e_ = window.Vue.normalizeClass, t_ = window.Vue.createElementBlock, n_ = { class: "mw-ui-input__content" };
function o_(e, t, n, o, s, a) {
  const r = X0("mw-icon");
  return za(), t_("div", {
    class: e_(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    Z0("div", n_, [
      fd(e.$slots, "icon", {}, () => [
        n.icon ? (za(), Wr(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : wd("", !0)
      ]),
      (za(), Wr(K0(n.type === "textarea" ? n.type : "input"), Q0({
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
        textContent: Y0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      fd(e.$slots, "indicator", {}, () => [
        n.indicator ? (za(), Wr(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = J0((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : wd("", !0)
      ])
    ])
  ], 2);
}
const cu = /* @__PURE__ */ pe(W0, [["render", o_]]);
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
const s_ = {}, a_ = window.Vue.createElementVNode, i_ = window.Vue.openBlock, r_ = window.Vue.createElementBlock, l_ = { class: "mw-ui-spinner" }, c_ = /* @__PURE__ */ a_("div", { class: "mw-ui-spinner__bounce" }, null, -1), u_ = [
  c_
];
function d_(e, t) {
  return i_(), r_("div", l_, u_);
}
const dt = /* @__PURE__ */ pe(s_, [["render", d_]]), Ct = {
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
const g_ = window.Vue.computed, m_ = {
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
      default: Kh
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: Ct.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: Ct.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = g_(() => {
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
}, vd = window.Vue.normalizeStyle, _d = window.Vue.openBlock, p_ = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const h_ = window.Vue.resolveComponent, f_ = window.Vue.createBlock;
function w_(e, t, n, o, s, a) {
  const r = h_("mw-ui-icon");
  return n.thumbnail ? (_d(), p_("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: vd(o.style)
  }, null, 4)) : (_d(), f_(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: vd(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const xu = /* @__PURE__ */ pe(m_, [["render", w_]]);
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
const v_ = {
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
}, Sd = window.Vue.normalizeClass, yd = window.Vue.normalizeStyle, __ = window.Vue.createElementVNode, S_ = window.Vue.openBlock, y_ = window.Vue.createElementBlock, x_ = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function C_(e, t, n, o, s, a) {
  return S_(), y_("div", {
    class: Sd(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: yd(a.containerStyles)
  }, [
    __("div", {
      class: Sd(["mw-progress-bar__bar", a.barClass]),
      style: yd(a.barStyles)
    }, null, 6)
  ], 14, x_);
}
const Yh = /* @__PURE__ */ pe(v_, [["render", C_]]), b_ = (e, t, n, o) => (s) => {
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
}, k_ = (e, t, n, o) => ({ initiateDrag: b_(
  e,
  t,
  n,
  o
) }), $_ = window.Vue.ref, xd = window.Vue.computed, V_ = (e, t, n, o) => {
  const s = $_(0), a = xd(
    () => t.value > e.value
  ), r = xd(
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
const Oa = window.Vue.ref, E_ = window.Vue.onMounted, Cd = window.Vue.computed, L_ = window.Vue.nextTick, T_ = {
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
    const t = Oa(!0), n = Oa(null), o = Cd(
      () => Math.min(e.minHeight, s.value)
    ), s = Oa(1), { initiateDrag: a } = k_(
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
    } = V_(o, s, n, t), d = () => u(c.value + 1), g = Oa(null), m = Cd(() => ({
      "--collapsed-height": o.value + "px"
    })), p = () => {
      if (!n.value)
        return;
      const f = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, f) {
        let v = Math.min(f, s.value);
        v = Math.max(v, o.value), v === o.value && (t.value = !0), n.value.style.height = v + "px";
      }
    };
    return E_(() => y(this, null, function* () {
      var f;
      yield L_(), s.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: P0,
      mwIconExpand: y0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), u(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: c,
      scrollToNextStep: d
    };
  }
}, A_ = window.Vue.renderSlot, D_ = window.Vue.normalizeClass, ja = window.Vue.createElementVNode, P_ = window.Vue.resolveComponent, B_ = window.Vue.createVNode, Xr = window.Vue.openBlock, F_ = window.Vue.createBlock, bd = window.Vue.createCommentVNode, kd = window.Vue.createElementBlock, N_ = window.Vue.normalizeStyle, M_ = { class: "mw-ui-expandable-content__container" }, U_ = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, I_ = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function R_(e, t, n, o, s, a) {
  const r = P_("mw-button");
  return Xr(), kd("div", {
    class: "mw-ui-expandable-content",
    style: N_(o.cssVars)
  }, [
    ja("div", M_, [
      ja("div", {
        ref: "contentRef",
        class: D_(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        A_(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (Xr(), kd("div", U_, [
        B_(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (Xr(), F_(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : bd("", !0)
      ])) : bd("", !0)
    ]),
    ja("div", I_, [
      ja("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const z_ = /* @__PURE__ */ pe(T_, [["render", R_]]);
const Ha = window.Vue.computed, O_ = {
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
      default: Ct.blue600
    },
    inactiveColor: {
      type: String,
      default: Ct.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = Ha(() => e.size / 2 * 0.9), n = Ha(() => Math.PI * (t.value * 2)), o = Ha(
      () => (100 - e.percentage) / 100 * n.value
    ), s = Ha(() => ({
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
}, $d = window.Vue.createElementVNode, Vd = window.Vue.normalizeStyle, j_ = window.Vue.openBlock, H_ = window.Vue.createElementBlock, q_ = ["width", "height", "viewport"], G_ = ["r", "cx", "cy", "stroke-dasharray"], W_ = ["r", "cx", "cy", "stroke-dasharray"];
function X_(e, t, n, o, s, a) {
  return j_(), H_("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Vd(o.cssVars)
  }, [
    $d("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, G_),
    $d("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Vd({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, W_)
  ], 12, q_);
}
const K_ = /* @__PURE__ */ pe(O_, [["render", X_]]), Y_ = window.Vue.ref, Vn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, An = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${Vn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${Vn.tablet}px) and (max-width: ${Vn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${Vn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${Vn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${Vn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${Vn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${Vn["desktop-wide"]}px)`
}, Kr = {
  mobile: () => matchMedia(An.mobile).matches,
  tablet: () => matchMedia(An.tablet).matches,
  desktop: () => matchMedia(An.desktop).matches,
  desktopwide: () => matchMedia(An["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(An["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(An["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(An["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(An["desktop-and-down"]).matches
}, Q_ = (e) => {
  const t = Object.values(Vn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, J_ = {
  install: (e) => {
    const t = Y_({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in Kr)
        Kr.hasOwnProperty(s) && (t.value[s] = Kr[s]());
      t.value.nextBreakpoint = Q_(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Ye(de({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, Z_ = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ye(de({}, e.config.globalProperties.$mwui || {}), {
      colors: Ct
    }), e.provide("colors", Ct);
  }
};
class os extends Error {
}
const e1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new os();
}), Qh = { assertUser: e1 };
const t1 = window.Vue.resolveDirective, fs = window.Vue.createElementVNode, Ed = window.Vue.withDirectives, n1 = window.Vue.toDisplayString, o1 = window.Vue.unref, Ld = window.Vue.withCtx, s1 = window.Vue.openBlock, a1 = window.Vue.createBlock, i1 = window.Vue.createCommentVNode, r1 = { class: "pa-4 sx-login-dialog__header" }, l1 = { class: "sx-login-dialog__body px-6 pb-4" }, c1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, u1 = ["href"], d1 = window.Vue.computed, g1 = window.Vue.ref, m1 = window.Vuex.useStore, p1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = m1(), n = d1(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = g1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = t1("i18n");
      return n.value ? (s1(), a1(o1(kt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Ld(() => [
          fs("div", r1, [
            Ed(fs("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Ld(() => [
          Ed(fs("div", l1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          fs("div", c1, [
            fs("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, n1(a.$i18n("cx-sx-login-dialog-button-label")), 9, u1)
          ])
        ]),
        _: 1
      })) : i1("", !0);
    };
  }
}, Z = new mw.cx.SiteMapper(), h1 = mw.util.getUrl, f1 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, qt = !mw.config.get("wgMFMode");
class Cu {
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
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = c, this.targetTitle = u;
  }
}
const qa = "original", Ga = "empty", w1 = {
  Elia: "Elia.eus",
  Google: "Google Translate"
};
class ie {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      qa,
      Ga
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return w1[t] || t;
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
    return qa;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Ga;
  }
  static isUserMTProvider(t) {
    return [qa, Ga].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === Ga ? "blank" : t === qa ? "source" : t.toLowerCase();
  }
}
class Kn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Ye(de({}, a), {
      [ie.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [ie.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
  }
  reset() {
    this.proposedTranslations = {
      [ie.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [ie.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[ie.ORIGINAL_TEXT_PROVIDER_KEY];
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
const Td = (e) => {
  var n;
  const t = mr(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, mr = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, wo = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Jh = (e) => {
  const t = mr(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = v1(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, v1 = (e) => {
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
}, Zh = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, ef = (e) => {
  const t = Zh(e);
  return t == null ? void 0 : t.targetExists;
};
class Yr {
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
class ut {
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
      (a) => wo(a)
    );
    s && ef(s) && (this.blockTemplateAdaptationInfo[t] = Zh(s));
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
      (t) => wo(t)
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
    const t = mr(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Td(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => wo(o));
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
    return n && Td(n) || "";
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
    const o = mr(n);
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
      (a) => wo(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new Yr({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Yr({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Yr({
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
    if (!t || ie.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => wo(s)
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
const bu = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), _1 = bu - 10, S1 = [
  { status: "failure", value: 100 - bu },
  { status: "warning", value: 100 - _1 },
  { status: "success", value: 100 }
], tf = (e, t, n) => {
  const o = Ad(e).textContent, s = Ad(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, y1 = (e) => S1.find((t) => e <= t.value).status, x1 = (e, t) => tf(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), C1 = () => (100 - bu) / 100, Ad = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, on = {
  calculateScore: tf,
  getScoreStatus: y1,
  getMTScoreForPageSection: x1,
  getMtModificationThreshold: C1
}, Wa = "__LEAD_SECTION__";
class Qn {
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
      [ie.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [ie.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [ie.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return Wa;
  }
  static isSectionLead(t) {
    return !t || t === Wa;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[ie.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[ie.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof ut ? n.transclusionNode.outerHTML : n instanceof Kn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof ut ? t.blockTemplateSelected = !1 : t instanceof Kn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof ut ? n.blockTemplateSelected = !0 : n instanceof Kn && (n.selected = !0);
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
    if (o instanceof ut)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof Kn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof ut ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Kn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof ut ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Kn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = on.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? Wa : this.originalTitle;
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
    return this.isLeadSection ? Wa : this.title;
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
class _r extends Cu {
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
    return Qn.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Qn.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const sn = "previous-edits", an = "popular", tt = "topic", Pe = "geography", te = "collections", We = "automatic", Gt = "seed", Dd = window.Vue.ref, { topics: b1, regions: k1 } = mw.loader.require(
  "ext.cx.articlefilters"
), Qr = {
  type: We,
  id: sn
}, $1 = {
  type: We,
  id: an
}, ku = () => {
  const e = Dd(
    b1.flatMap((u) => u.topics).map((u) => u.topicId.toLowerCase())
  ), t = Dd(!1), n = (u, i) => e.value.includes(i) ? { type: tt, id: i } : null, o = (u, i) => k1.some(
    (g) => g.id.toLowerCase() === i || g.countries.some(
      (m) => m.id.toLowerCase() === i
    )
  ) ? { type: Pe, id: i } : null, s = (u, i, d) => d && !d.some((g) => g.name.toLowerCase() === i) ? null : { type: te, id: u }, a = ({ type: u, id: i }, d = !1) => {
    t.value = !1;
    const g = u == null ? void 0 : u.toLowerCase(), m = i == null ? void 0 : i.toLowerCase();
    if (m === sn)
      return {
        type: We,
        id: sn
      };
    if (m === an)
      return {
        type: We,
        id: an
      };
    if (m === te)
      return d && !d.length ? (t.value = !0, Qr) : {
        type: We,
        id: te
      };
    if (g === tt) {
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
    return Qr;
  }, r = ({ type: u, id: i }) => c({ type: u, id: i }, Qr), l = ({ type: u, id: i }) => c({ type: u, id: i }, $1), c = (u, i) => u.id === i.id && u.type === i.type;
  return {
    filtersValidatorError: t,
    validateFilters: a,
    isDefaultFilter: r,
    isPopularFilter: l,
    isEqualFilter: c
  };
}, V1 = window.Vue.inject, E1 = window.Vue.reactive;
var L1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, nf = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(L1, function() {
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
          for (const v in m)
            h[m[v]] = v;
          m = h;
          const f = String(d);
          for (let v = 0; v < f.length; v++)
            p += m[f[v]] || f[v];
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
            function v(A) {
              return () => {
                for (let q = 0; q < A.length; q++) {
                  const Ue = A[q]();
                  if (Ue !== null)
                    return Ue;
                }
                return null;
              };
            }
            function w(A) {
              const q = f, Ue = [];
              for (let Lt = 0; Lt < A.length; Lt++) {
                const J = A[Lt]();
                if (J === null)
                  return f = q, null;
                Ue.push(J);
              }
              return Ue;
            }
            function x(A, q) {
              return () => {
                const Ue = f, Lt = [];
                let J = q();
                for (; J !== null; )
                  Lt.push(J), J = q();
                return Lt.length < A ? (f = Ue, null) : Lt;
              };
            }
            function b(A) {
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
            const k = _(/^\s+/), E = b("|"), M = b(":"), L = b("\\"), P = _(/^./), z = b("$"), Q = _(/^\d+/), se = b('"'), oe = b("'"), N = _(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), I = _(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), G = v([X, _(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function X() {
              const A = w([L, P]);
              return A === null ? null : A[1];
            }
            const re = v([X, I]), xe = v([X, N]);
            function ke() {
              const A = w([z, Q]);
              return A === null ? null : ["REPLACE", parseInt(A[1], 10) - 1];
            }
            const $e = (Fe = _(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), R = function(A) {
              return A.toString();
            }, () => {
              const A = Fe();
              return A === null ? null : R(A);
            });
            var Fe, R;
            function B() {
              const A = w([E, x(0, Co)]);
              if (A === null)
                return null;
              const q = A[1];
              return q.length > 1 ? ["CONCAT"].concat(q) : q[0];
            }
            function j() {
              const A = w([$e, M, ke]);
              return A === null ? null : [A[0], A[2]];
            }
            function S() {
              const A = w([$e, M, Co]);
              return A === null ? null : [A[0], A[2]];
            }
            function V() {
              const A = w([$e, M]);
              return A === null ? null : [A[0], ""];
            }
            const T = v([function() {
              const A = w([v([j, S, V]), x(0, B)]);
              return A === null ? null : A[0].concat(A[1]);
            }, function() {
              const A = w([$e, x(0, B)]);
              return A === null ? null : [A[0]].concat(A[1]);
            }]), F = b("{{"), K = b("}}"), fe = b("[["), W = b("]]"), H = b("["), ae = b("]");
            function st() {
              const A = w([F, T, K]);
              return A === null ? null : A[1];
            }
            const Ve = v([function() {
              const A = w([x(1, Co), E, x(1, xo)]);
              return A === null ? null : [["CONCAT"].concat(A[0]), ["CONCAT"].concat(A[2])];
            }, function() {
              const A = w([x(1, Co)]);
              return A === null ? null : [["CONCAT"].concat(A[0])];
            }]);
            function Ba() {
              let A = null;
              const q = w([fe, Ve, W]);
              if (q !== null) {
                const Ue = q[1];
                A = ["WIKILINK"].concat(Ue);
              }
              return A;
            }
            function Fa() {
              let A = null;
              const q = w([H, x(1, Pr), k, x(1, xo), ae]);
              return q !== null && (A = ["EXTLINK", q[1].length === 1 ? q[1][0] : ["CONCAT"].concat(q[1]), ["CONCAT"].concat(q[3])]), A;
            }
            const no = _(/^[A-Za-z]+/);
            function Ar() {
              const A = _(/^[^"]*/), q = w([se, A, se]);
              return q === null ? null : q[1];
            }
            function Dr() {
              const A = _(/^[^']*/), q = w([oe, A, oe]);
              return q === null ? null : q[1];
            }
            function ms() {
              const A = _(/^\s*=\s*/), q = w([k, no, A, v([Ar, Dr])]);
              return q === null ? null : [q[1], q[3]];
            }
            function ps() {
              const A = x(0, ms)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], A);
            }
            const Pr = v([st, ke, Ba, Fa, function() {
              const A = x(1, G)();
              return A === null ? null : A.join("");
            }]), xo = v([st, ke, Ba, Fa, function() {
              let A = null;
              const q = f, Ue = b("<"), Lt = _(/^\/?/), J = _(/^\s*>/), ln = w([Ue, no, ps, Lt, J]);
              if (ln === null)
                return null;
              const Tn = f, pt = ln[1], bo = x(0, xo)(), Br = f, nd = w([b("</"), no, J]);
              if (nd === null)
                return ["CONCAT", p.slice(q, Tn)].concat(bo);
              const Gw = f, Ww = nd[1], od = ln[2];
              if (function(oo, Ma, Fr, Nr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((oo = oo.toLowerCase()) !== (Ma = Ma.toLowerCase()) || Nr.allowedHtmlElements.indexOf(oo) === -1)
                  return !1;
                const Xw = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Ua = 0, Kw = Fr.length; Ua < Kw; Ua += 2) {
                  const Mr = Fr[Ua];
                  if (Nr.allowedHtmlCommonAttributes.indexOf(Mr) === -1 && (Nr.allowedHtmlAttributesByElement[oo] || []).indexOf(Mr) === -1 || Mr === "style" && Fr[Ua + 1].search(Xw) !== -1)
                    return !1;
                }
                return !0;
              }(pt, Ww, od.slice(1)))
                A = ["HTMLELEMENT", pt, od].concat(bo);
              else {
                const oo = (Ma) => Ma.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                A = ["CONCAT", oo(p.slice(q, Tn))].concat(bo, oo(p.slice(Br, Gw)));
              }
              return A;
            }, function() {
              const A = x(1, xe)();
              return A === null ? null : A.join("");
            }]), Co = v([st, ke, function() {
              const A = x(1, re)();
              return A === null ? null : A.join("");
            }]), Na = function() {
              const A = x(0, xo)();
              return A === null ? null : ["CONCAT"].concat(A);
            }();
            if (Na === null || f !== p.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + p);
            return Na;
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
            const f = p.slice(0, h).join("-"), v = this.messageStore.getMessage(i, f);
            if (typeof v == "string")
              return v;
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
})(nf);
var T1 = nf.exports;
const Pd = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, of = Symbol("banana-context");
function he() {
  const e = V1(of);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function A1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = E1(new T1(e.locale, e));
  return {
    install: (n) => {
      n.provide(of, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = Pd(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = Pd(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Ln = window.Vue.ref, D1 = window.Vue.computed, Sr = Ln(null), yr = Ln(null), xr = Ln(null), ka = Ln(null), $u = Ln(null), Cr = Ln(null), sf = Ln(null), af = Ln(null), Vu = Ln(null), { validateFilters: P1, filtersValidatorError: B1 } = ku(), rf = {
  from: Sr,
  to: yr,
  section: ka,
  draft: $u,
  page: xr,
  revision: Cr,
  "active-list": Vu
}, F1 = D1(() => ({
  type: sf.value,
  id: af.value
})), lf = (e, t) => {
  sf.value = e, af.value = t, pr("filter-type", e), t && pr("filter-id", t);
}, N1 = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof _r && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), rf[o].value = s;
  }
  t.delete("title"), $a(Object.fromEntries(t));
}, Eu = (e, t) => {
  rf[e].value = t, pr(e, t);
}, M1 = (e) => {
  Eu("section", e);
}, U1 = (e) => {
  Eu("page", e);
}, I1 = (e) => {
  Eu("active-list", e);
}, $a = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    h1(`Special:ContentTranslation${t}`, e)
  );
}, R1 = () => {
  const e = he(), t = new URLSearchParams(location.search);
  xr.value = t.get("page"), Sr.value = t.get("from"), yr.value = t.get("to"), ka.value = t.get("section"), Cr.value = t.get("revision"), Vu.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = P1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  lf(n.type, n.id), B1.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, z1 = () => {
  const e = new URLSearchParams(location.search);
  ka.value = null, e.delete("section"), e.delete("title"), $a(Object.fromEntries(e));
}, pr = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), $a(Object.fromEntries(n));
}, O1 = (e) => new URLSearchParams(location.search).get(e), j1 = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Sr.value = e, yr.value = t, n.delete("title"), $a(Object.fromEntries(n));
}, H1 = () => {
  const e = new URLSearchParams(location.search);
  xr.value = null, ka.value = null, $u.value = null, Cr.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), $a(Object.fromEntries(e));
}, q1 = () => new URLSearchParams(location.search).get("force-quick-tutorial"), D = () => ({
  isQuickTutorialForced: q1,
  setLanguageURLParams: j1,
  setSectionURLParam: M1,
  setTranslationURLParams: N1,
  initializeURLState: R1,
  clearTranslationURLParameters: H1,
  clearSectionURLParameter: z1,
  setUrlParam: pr,
  getUrlParam: O1,
  pageURLParameter: xr,
  sourceLanguageURLParameter: Sr,
  targetLanguageURLParameter: yr,
  sectionURLParameter: ka,
  draftURLParameter: $u,
  revisionURLParameter: Cr,
  setPageURLParam: U1,
  currentSuggestionFilters: F1,
  setFilterURLParams: lf,
  activeDashboardTabParameter: Vu,
  setActiveDashboardTabParameter: I1
}), G1 = () => {
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
function W1(e, t) {
  return y(this, null, function* () {
    const n = Z.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new ie(e, t, o.mt)
      )
    );
  });
}
function X1() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function K1(e, t, n, o) {
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
const br = {
  fetchSupportedLanguageCodes: G1,
  fetchSupportedMTProviders: W1,
  fetchCXServerToken: X1,
  addWikibaseLink: K1
}, Y1 = window.Vue.ref, Xa = Y1([]);
let Bd = !1;
function Va() {
  return {
    fetchSupportedLanguageCodes: () => y(this, null, function* () {
      if (!Bd) {
        Bd = !0, Xa.value = yield br.fetchSupportedLanguageCodes();
        const t = mw.config.get(
          "ContentTranslationDomainCodeMapping"
        );
        Object.keys(t).forEach((n) => {
          if (n === "be-x-old")
            return;
          const o = t[n], s = Xa.value.indexOf(o);
          s > -1 && (Xa.value[s] = n);
        });
      }
    }),
    supportedLanguageCodes: Xa
  };
}
const Q1 = {
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
}, J1 = {
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
}, Z1 = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], eS = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, tS = {
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
}, nS = {
  languages: Q1,
  scriptgroups: J1,
  rtlscripts: Z1,
  regiongroups: eS,
  territories: tS
};
var Oe = nS;
function Ea(e) {
  return !!Oe.languages[e];
}
function to(e) {
  return Ea(e) && Oe.languages[e].length === 1 ? Oe.languages[e][0] : !1;
}
function oS() {
  return Oe.languages;
}
function La(e) {
  var t = to(e);
  return t ? La(t) : Ea(e) ? Oe.languages[e][0] : "Zyyy";
}
function Lu(e) {
  var t = to(e);
  return t ? Lu(t) : Ea(e) && Oe.languages[e][1] || "UNKNOWN";
}
function ya(e) {
  var t = to(e);
  return t ? ya(t) : Ea(e) && Oe.languages[e][2] || e;
}
function sS() {
  var e, t = {};
  for (e in Oe.languages)
    to(e) || (t[e] = ya(e));
  return t;
}
function cf(e) {
  var t, n, o = [];
  for (t in Oe.languages)
    if (!to(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === La(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function aS(e) {
  return cf([e]);
}
function uf(e) {
  var t;
  for (t in Oe.scriptgroups)
    if (Oe.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Tu(e) {
  return uf(La(e));
}
function df(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = to(n) || n, a = Tu(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function gf(e) {
  var t, n, o, s = {};
  for (t in Oe.languages)
    if (!to(t)) {
      for (n = 0; n < e.length; n++)
        if (Lu(t).includes(e[n])) {
          o = Tu(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function iS(e) {
  return gf([e]);
}
function rS(e) {
  var t, n, o, s = [];
  for (t = df(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function lS(e, t) {
  var n = ya(e) || e, o = ya(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function mf(e) {
  return Oe.rtlscripts.includes(La(e));
}
function cS(e) {
  return mf(e) ? "rtl" : "ltr";
}
function uS(e) {
  return Oe.territories[e] || [];
}
function dS(e, t) {
  t.target ? Oe.languages[e] = [t.target] : Oe.languages[e] = [t.script, t.regions, t.autonym];
}
var O = {
  addLanguage: dS,
  getAutonym: ya,
  getAutonyms: sS,
  getDir: cS,
  getGroupOfScript: uf,
  getLanguages: oS,
  getLanguagesByScriptGroup: df,
  getLanguagesByScriptGroupInRegion: iS,
  getLanguagesByScriptGroupInRegions: gf,
  getLanguagesInScript: aS,
  getLanguagesInScripts: cf,
  getLanguagesInTerritory: uS,
  getRegions: Lu,
  getScript: La,
  getScriptGroupOfLanguage: Tu,
  isKnown: Ea,
  isRedirect: to,
  isRtl: mf,
  sortByScriptGroup: rS,
  sortByAutonym: lS
};
const ko = window.Vue.computed;
function Be(e) {
  const t = ko(() => e.state.application.sourceLanguage), n = ko(() => e.state.application.targetLanguage), o = ko(
    () => e.state.application.currentMTProvider
  ), s = ko(
    () => O.getAutonym(t.value)
  ), a = ko(
    () => O.getAutonym(n.value)
  ), r = ko(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class ss {
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
    return t === Qn.LEAD_SECTION_DUMMY_TITLE ? this.leadSection : (this.sections || []).find(
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
class gS {
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
function mS() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const pS = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), mS();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, hS = (e, t) => {
  let n, o;
  return t ? (n = pS(e), o = n.$element.find(
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
}, fS = (e, t) => {
  const n = Array.from(
    hS(e, t)
  );
  return wS(n).map(
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
        (i) => new ut({
          sentences: vS(i),
          node: i
        })
      );
      return new Qn({ id: c, subSections: u, isLeadSection: l });
    }
  );
}, wS = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, vS = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Kn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), pf = {
  convertSegmentedContentToPageSections: fS
}, Au = 120, _S = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Au,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return Z.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (i, d) => Ye(de({}, i), { [d.to]: d.from }),
      {}
    ), u = (s.query.normalized || []).reduce(
      (i, d) => Ye(de({}, i), {
        [d.to]: d.from
      }),
      {}
    );
    return a.map((i) => {
      const d = u[i.title] || l[i.title] || null;
      return new ss(Ye(de({}, i), { _alias: d }));
    });
  });
}, SS = (e, t) => {
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
    return l ? Object.freeze(new gS(l, r)) : null;
  });
}, yS = (e, t, n) => {
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
}, xS = (e, t, n, o = null) => {
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
  ), a = CS(
    e,
    t,
    n,
    o
  );
  return Promise.all([a, s]).then(
    ([r, l]) => {
      const c = pf.convertSegmentedContentToPageSections(
        r,
        !1
        // No need to resolve references. Content can be used as it is
      );
      return c.forEach((u) => {
        const i = l.find((d) => d.id === u.id);
        u.originalTitle = (i == null ? void 0 : i.title) || "";
      }), new ss({
        sections: c,
        content: r,
        pagelanguage: e,
        title: n
      });
    }
  );
}, CS = (e, t, n, o = null) => {
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
}, bS = (e) => {
  const t = f1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Au,
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
  }).then((o) => o.map((s) => new ss(s)));
}, kS = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount|pageprops",
    piprop: "thumbnail",
    pithumbsize: Au,
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
      (a) => new ss(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => (mw.cx.eventlogging.stats.articleSearchFailed(), []));
}, So = {
  fetchPages: _S,
  fetchLanguageTitles: SS,
  fetchPageContent: xS,
  fetchNearbyPages: bS,
  searchPagesByTitlePrefix: kS,
  fetchLanguageLinksForLanguage: yS
}, $S = window.Vuex.useStore, as = () => {
  const e = $S();
  return (t, n) => {
    n = n.filter(
      (a) => !!a && !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const r = n.slice(a, a + o), l = So.fetchPages(t, r).then(
        (c) => c.forEach(
          (u) => e.commit("mediawiki/addPage", u)
        )
      );
      s.push(l);
    }
    return Promise.all(s);
  };
}, VS = window.Vuex.useStore, kr = () => {
  const e = VS(), {
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
    getNextUnseenSectionSuggestionByCollection: (g) => {
      const m = e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value);
      return u(
        m,
        "suggestions/getNextUnseenSectionSuggestionByFilter",
        "suggestions/removeSectionSuggestion"
      );
    },
    getNextUnseenPageSuggestionByCollection: (g) => u(
      g,
      "suggestions/getNextUnseenPageSuggestionByFilter",
      "suggestions/removePageSuggestion"
    )
  };
};
class Jn {
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
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = r, this.size = l, this.leadSectionSize = c, this.langLinksCount = a, this.suggestionProvider = i, this.suggestionSeed = u, this.isListable = !0, this.seen = !1;
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
class nn {
  /**
   * Creates an instance of SectionSuggestion.
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} options.targetTitle
   * @param {Object<string, string>} options.present Object that maps section titles in source article to already existing section titles in target article
   * @param {Object<string, string>} options.missing
   * @param {Object<string, {size: number}>} options.sourceSectionInfo
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
    sourceSectionInfo: l = {},
    sourceSectionSizes: c = {},
    sourceSections: u = [],
    targetSections: i = [],
    suggestionSeed: d = null,
    isListable: g = !0,
    suggestionProvider: m = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSectionInfo = l, this.sourceSectionSizes = c, this.sourceSections = u, this.targetSections = i, this.suggestionSeed = d, this.isListable = g, this.suggestionProvider = m, this.seen = !1;
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
    var n, o, s;
    return ((o = (n = this.sourceSectionInfo) == null ? void 0 : n[t]) == null ? void 0 : o.size) || ((s = this.sourceSectionSizes) == null ? void 0 : s[t]);
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
const hf = [
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
], ES = [
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
], LS = [
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
], TS = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], AS = [
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
], DS = {
  en: hf,
  es: ES,
  bn: LS,
  fr: TS,
  de: AS
};
class es {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class Du {
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
class ff extends Jn {
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
    }), this.collection = new Du(u);
  }
  /**
   * @returns {boolean}
   */
  collectionMatchesProvider() {
    var t;
    return this.collection.name === ((t = this.suggestionProvider) == null ? void 0 : t.id);
  }
}
class wf extends nn {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} options.targetTitle
   * @param {Object<string, string>} options.present Object that maps section titles in source article to already existing section titles in target article
   * @param {Object<string, string>} options.missing
   * @param {Object<string, {size: number}>} options.sourceSectionInfo
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
    sourceSectionInfo: l,
    sourceSectionSizes: c,
    sourceSections: u = [],
    targetSections: i = [],
    isListable: d = !0,
    suggestionProvider: g = null,
    collection: m = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      present: a,
      missing: r,
      sourceSectionInfo: l,
      sourceSectionSizes: c,
      sourceSections: u,
      targetSections: i,
      isListable: d,
      suggestionProvider: g
    }), this.collection = new Du(m);
  }
  /**
   * @returns {boolean}
   */
  collectionMatchesProvider() {
    var t;
    return this.collection.name === ((t = this.suggestionProvider) == null ? void 0 : t.id);
  }
}
let Ka = null;
const vf = (e) => {
  if (Ka)
    return Promise.resolve(Ka);
  const t = "https://en.wikipedia.org/w/api.php", n = new URLSearchParams({
    action: "query",
    meta: "globaluserinfo",
    guiuser: e,
    guiprop: "editcount",
    formatversion: 2,
    origin: "*",
    format: "json"
  }), o = t + "?" + n;
  return fetch(o).then((s) => s.json()).then((s) => (Ka = s.query.globaluserinfo.editcount, Ka)).catch((s) => {
    mw.log.error("Error while fetching global edit count for user. ", s);
  });
}, PS = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits", BS = () => y(void 0, null, function* () {
  if (mw.user.isAnon())
    return !1;
  const e = mw.user.getName();
  return (yield vf(e)) < 100;
}), Xe = {
  stub: "stub",
  easy: "easy",
  medium: "medium",
  hard: "hard",
  unknown: "unknown"
}, _f = {
  easy: 2500,
  medium: 1e4,
  hard: 4e4
}, uu = {
  easy: 1e3,
  medium: 4e3,
  hard: 12e3
}, Sf = (e, t) => !e || e < 0 ? Xe.unknown : e < t.easy ? Xe.stub : e < t.medium ? Xe.easy : e < t.hard ? Xe.medium : Xe.hard, yf = (e) => Sf(e, _f), Pu = (e) => Sf(e, uu), FS = (e) => {
  if (!e)
    return !1;
  const t = yf(e);
  return t === Xe.stub || t === Xe.easy;
}, NS = (e) => {
  if (!e)
    return !1;
  const t = Pu(e);
  return t === Xe.stub || t === Xe.easy;
}, xf = (e) => e ? Pu(e) === Xe.easy : !1, MS = hf, US = (e, t) => y(void 0, null, function* () {
  if (yield BS()) {
    let o;
    e ? e === "/sections" && (o = uu) : (o = _f, qt || (t.lead_section = !0, o = uu)), o && (t.min_size = o[Xe.easy], t.max_size = o[Xe.medium] - 1);
  } else
    qt || (t.lead_section = !0);
}), $t = (n) => y(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
  let o = mw.config.get("wgRecommendToolAPIURL");
  yield US(e, t), e && (o += e);
  const s = new URL(o);
  Object.keys(t).forEach((a) => {
    t[a] && s.searchParams.append(a, t[a]);
  });
  try {
    const a = yield fetch(s);
    if (!a.ok)
      throw new Error("Failed to load data from server");
    const r = yield a.json();
    if (Array.isArray(r))
      return r;
    if (typeof r == "object")
      return Array.isArray(r.recommendations) ? r.recommendations : r;
    throw new Error(
      "Output format of Recommendation API response is not supported"
    );
  } catch (a) {
    return mw.log.error(
      "Error while fetching suggestions from Recommendation API",
      a
    ), mw.cx.eventlogging.stats.recommendationFailed(), null;
  }
});
function IS() {
  return y(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield $t({ urlPostfix: t, urlParams: e })) || [], o = {};
      for (const s in n)
        o[s] = n[s].map(
          (a) => new Du(a)
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
function RS(e, t) {
  const n = {
    collection: e,
    qids: t.join("|")
  };
  return $t({
    urlPostfix: "/page-collection-membership",
    urlParams: n
  });
}
function zS(e) {
  const n = Z.getApi(e).get({
    action: "query",
    meta: "cxconfig",
    format: "json",
    formatversion: 2
  });
  return new Promise((o) => {
    n.then((s) => {
      var a;
      return o(((a = s == null ? void 0 : s.query) == null ? void 0 : a.cxconfig) || null);
    }).fail(() => o(null));
  });
}
function OS(e, t, n = null, o = 24) {
  return y(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: o
    };
    return n && (s.seed = n), ((yield $t({ urlParams: s })) || []).map(
      (r) => new Jn({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        size: r.size,
        leadSectionSize: r.lead_section_size || null,
        langLinksCount: parseInt(r.sitelink_count),
        suggestionSeed: n
      })
    );
  });
}
const jS = (e, t) => y(void 0, null, function* () {
  return ((yield $t({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new Jn({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      size: s.size,
      leadSectionSize: s.lead_section_size || null,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), HS = (e, t) => y(void 0, null, function* () {
  const s = (yield $t({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new nn({
      sourceLanguage: e,
      targetLanguage: t,
      sourceTitle: a.source_title,
      targetTitle: a.target_title,
      sourceSections: a.source_sections,
      targetSections: a.target_sections,
      present: a.present,
      missing: a.missing,
      sourceSectionInfo: a.source_section_info,
      sourceSectionSizes: a.source_section_sizes
    })
  );
}), qS = (e, t, n = null) => y(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield $t({ urlParams: o })) || []).map(
    (a) => new ff({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), GS = (e, t, n = null) => y(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield $t({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (r) => new wf({
      sourceLanguage: e,
      targetLanguage: t,
      sourceTitle: r.source_title,
      targetTitle: r.target_title,
      sourceSections: r.source_sections,
      targetSections: r.target_sections,
      present: r.present,
      missing: r.missing,
      collection: r.collection,
      sourceSectionInfo: r.source_section_info,
      sourceSectionSizes: r.source_section_sizes
    })
  );
});
function WS(e, t, n) {
  return y(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = Z.getCXServerUrl(
      `/suggest/sections/${o.join("/")}?include_section_sizes=true`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new nn(a) : null;
  });
}
function XS(e, t, n = null) {
  return y(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: 24
    };
    n && (o.seed = n);
    const a = (yield $t({ urlPostfix: "/sections", urlParams: o })) || [];
    return a && a.map(
      (r) => new nn({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: r.source_title,
        targetTitle: r.target_title,
        sourceSections: r.source_sections,
        targetSections: r.target_sections,
        present: r.present,
        missing: r.missing,
        sourceSectionInfo: r.source_section_info,
        sourceSectionSizes: r.source_section_sizes,
        seed: n
      })
    );
  });
}
function KS(e, t, n, o = 24) {
  return y(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield $t({ urlParams: s })) || []).map(
      (r) => new Jn({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        size: r.size,
        leadSectionSize: r.lead_section_size || null,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function YS(e, t, n, o = 24) {
  return y(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield $t({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new nn({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: l.source_title,
        targetTitle: l.target_title,
        sourceSections: l.source_sections,
        targetSections: l.target_sections,
        present: l.present,
        missing: l.missing,
        sourceSectionInfo: l.source_section_info,
        sourceSectionSizes: l.source_section_sizes
      })
    );
  });
}
function QS(e, t, n, o = 24) {
  return y(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    };
    return ((yield $t({ urlParams: s })) || []).map(
      (r) => new Jn({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        size: r.size,
        leadSectionSize: r.lead_section_size || null,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function JS(e, t, n, o = 24) {
  return y(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    }, r = (yield $t({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new nn({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: l.source_title,
        targetTitle: l.target_title,
        sourceSections: l.source_sections,
        targetSections: l.target_sections,
        present: l.present,
        missing: l.missing,
        sourceSectionInfo: l.source_section_info,
        sourceSectionSizes: l.source_section_sizes
      })
    );
  });
}
function ZS(e) {
  return y(this, null, function* () {
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
function ey(e, t) {
  return y(this, null, function* () {
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
function ty(e) {
  const t = MS.map((o) => encodeURIComponent(o)).join("|"), n = Z.getCXServerUrl(
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
const ny = (e, t, n) => {
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
}, oy = (e) => {
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
}, sy = () => {
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
    (n) => n.map((o) => new es(o))
  );
}, ue = {
  fetchFavorites: sy,
  fetchPageSuggestions: OS,
  fetchSectionSuggestion: WS,
  fetchSectionSuggestions: XS,
  fetchAppendixTargetSectionTitles: ty,
  fetchArticleSections: ey,
  markFavorite: ny,
  unmarkFavorite: oy,
  fetchUserEdits: ZS,
  fetchMostPopularPageSuggestions: jS,
  fetchMostPopularSectionSuggestions: HS,
  fetchPageSuggestionsByTopics: KS,
  fetchSectionSuggestionsByTopics: YS,
  fetchPageSuggestionsByCountries: QS,
  fetchSectionSuggestionsByCountries: JS,
  fetchPageCollectionGroups: IS,
  fetchPageSuggestionsByCollections: qS,
  fetchSectionSuggestionsByCollections: GS,
  fetchFeaturedCollectionDataByLanguage: zS,
  fetchPageCollectionMembership: RS
}, ay = window.Vuex.useStore, is = () => {
  const e = ay(), { sourceLanguage: t, targetLanguage: n } = Be(e), o = (l) => {
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
function iy(e) {
  const t = [...e];
  for (let n = t.length - 1; n > 0; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [t[n], t[o]] = [t[o], t[n]];
  }
  return t;
}
class ry {
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
    this.seeds = iy(t);
  }
}
const ly = window.Vuex.useStore, Bu = window.Vue.ref, cy = Bu([]), uy = Bu([]);
let Jr = !1, Zr = !1, Fd = !1;
const Ya = Bu([]);
let ws = null;
const el = {
  page: cy,
  section: uy
}, Cf = () => {
  const e = ly(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), o = () => y(void 0, null, function* () {
    Zr || (Ya.value = yield ue.fetchUserEdits(t.value).then((u) => (Zr = !0, u)));
  }), s = () => y(void 0, null, function* () {
    let u = e.getters["translator/getTranslationsByStatus"]("published");
    if (u = u.filter(
      (i) => i.sourceLanguage === t.value
    ), u.length && !Jr)
      return Jr = !0, u.map(
        (i) => i.sourceTitle
      );
    if (Jr = !0, !Zr && (yield o(), Ya.value.length > 0))
      return Ya.value;
    if (!Fd) {
      const i = yield ue.fetchUserEdits(n.value).then((d) => (Fd = !0, d));
      if (i.length)
        return So.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (u) => {
    let i = el[u].value.find(
      (d) => d.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new ry({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), el[u].value.push(i)), i;
  }, r = () => y(void 0, null, function* () {
    let u = !1, i = [];
    do {
      i = yield s(), i || (u = !0);
      for (const d in el) {
        const g = a(d);
        g.setSeeds([
          ...g.seeds,
          ...i || []
        ]);
      }
    } while (!u && !(i != null && i.length));
  }), l = () => ws || (ws = r(), ws.finally(() => {
    ws = null;
  }));
  return {
    getSuggestionSeed: (u) => y(void 0, null, function* () {
      let i = a(u);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: o,
    previousEditsInSource: Ya
  };
}, dy = 5;
function _o(e) {
  return y(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < dy);
  });
}
const gy = window.Vuex.useStore, my = () => {
  const e = gy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), { getSuggestionSeed: o } = Cf(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = is(), l = {
    id: sn,
    type: We
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => y(void 0, null, function* () {
      const d = [];
      return yield _o(() => y(void 0, null, function* () {
        const g = yield o("page");
        let m = yield ue.fetchPageSuggestions(
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
    fetchSectionSuggestionsBasedOnEdits: (i) => y(void 0, null, function* () {
      const d = [];
      return yield _o(() => y(void 0, null, function* () {
        const g = yield o("section"), m = yield ue.fetchSectionSuggestions(
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
}, tl = window.Vue.computed, Fu = window.Vue.ref, py = window.Vue.watch, hy = new mw.cx.SiteMapper(), Nu = hy.getCurrentWikiLanguageCode(), fy = mw.config.get(
  "wgContentTranslationFeaturedCollection"
), wy = mw.config.get(
  "wgContentTranslationFeaturedCollectionCommunityName"
), vy = mw.config.get(
  "wgContentTranslationFeaturedCollectionDescription"
), _y = mw.config.get(
  "wgContentTranslationFeaturedCollectionLink"
), Qa = Fu({
  [Nu]: {
    name: fy,
    communityName: wy,
    description: vy,
    link: _y
  }
}), Sy = Fu({
  [Nu]: Promise.resolve()
}), Nd = Fu({
  [Nu]: !0
});
let Md = !1;
const rs = () => {
  const { targetLanguageURLParameter: e } = D(), t = () => {
    Md || (py(
      e,
      () => {
        e.value && !Qa.value[e.value] && ue.fetchFeaturedCollectionDataByLanguage(e.value).then((a) => {
          Qa.value[e.value] = {
            name: a.name,
            communityName: a.communityName,
            description: a.description,
            link: a.link
          }, Nd.value[e.value] = !0;
        });
      },
      { immediate: !0 }
    ), Md = !0);
  }, n = tl(
    () => {
      var a;
      return (a = Qa.value[e.value]) != null && a.name ? Qa.value[e.value] : null;
    }
  ), o = tl(
    () => Nd.value[e.value] || !1
  ), s = tl(
    () => Sy.value[e.value]
  );
  return {
    featuredCollection: n,
    featuredCollectionFetched: o,
    featuredCollectionPromise: s,
    initializeFeaturedCollectionWatcher: t
  };
}, yy = window.Vuex.useStore, xy = window.Vue.computed, bf = () => {
  const e = yy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), s = xy(() => {
    var m;
    return ((m = o.value) == null ? void 0 : m.type) !== te ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: l
  } = is(), c = (m = null) => m ? { id: m, type: te } : o.value, u = (m) => y(void 0, null, function* () {
    const p = [];
    let h = yield ue.fetchPageSuggestionsByCollections(
      t.value,
      n.value,
      m
    );
    return h = h.filter(
      (f) => r(f)
    ), p.push(...h), p.forEach((f) => {
      f.suggestionProvider = c(m);
    }), p;
  }), i = () => u(s.value), d = (m) => y(void 0, null, function* () {
    const p = [], h = yield ue.fetchSectionSuggestionsByCollections(
      t.value,
      n.value,
      m
    );
    let f = h.filter(
      (w) => a(w)
    );
    const v = h.filter(
      (w) => !a(w)
    );
    return p.push(...f), v.forEach((w) => {
      w && !l(w) && (w.isListable = !1, e.commit("suggestions/addSectionSuggestion", w));
    }), p.forEach((w) => {
      w.suggestionProvider = c(m);
    }), p;
  });
  return {
    fetchSectionSuggestionsByCollections: () => d(s.value),
    fetchPageSuggestionsByCollections: i,
    doFetchPageSuggestionsByCollection: u,
    doFetchSectionSuggestionsByCollection: d
  };
}, Cy = window.Vuex.useStore, by = () => {
  const e = Cy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), o = {
    id: an,
    type: We
  }, {
    getNextUnseenSectionSuggestionByCollection: s,
    getNextUnseenPageSuggestionByCollection: a
  } = kr(), {
    isSectionSuggestionValid: r,
    isPageSuggestionValid: l,
    sectionSuggestionExists: c
  } = is(), { featuredCollection: u, featuredCollectionPromise: i } = rs(), {
    doFetchPageSuggestionsByCollection: d,
    doFetchSectionSuggestionsByCollection: g
  } = bf(), m = (f, v, w, x, b) => y(void 0, null, function* () {
    var k;
    yield i;
    const _ = (k = u.value) == null ? void 0 : k.name;
    if (_) {
      let E = v(_);
      if (!E) {
        const [M = null, ...L] = yield f(_);
        E = M, L.forEach((P) => {
          e.commit(w, P);
        });
      }
      E && (x.push(E), b--);
    }
    return b;
  });
  return { fetchSectionSuggestionsPopular: (f) => y(void 0, null, function* () {
    const v = [];
    return f = yield m(
      g,
      s,
      "suggestions/addSectionSuggestion",
      v,
      f
    ), yield _o(() => y(void 0, null, function* () {
      const w = yield ue.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let x = w.filter(
        (_) => r(_)
      );
      const b = w.filter(
        (_) => !r(_)
      );
      return x = x.slice(0, f), v.push(...x), b.forEach((_) => {
        _ && !c(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
      }), v.length >= f;
    })), v.forEach(
      (w) => w.suggestionProvider = o
    ), v;
  }), fetchPageSuggestionsPopular: (f) => y(void 0, null, function* () {
    const v = [];
    return f = yield m(
      d,
      a,
      "suggestions/addPageSuggestion",
      v,
      f
    ), yield _o(() => y(void 0, null, function* () {
      let w = yield ue.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return w = w.filter(
        (x) => l(x)
      ), w = w.slice(0, f), v.push(...w), v.length >= f;
    })), v.forEach(
      (w) => w.suggestionProvider = o
    ), v;
  }) };
}, kf = window.Vue.ref, vs = "ungrouped", Ud = kf({}), Id = kf(!1), Mu = () => ({
  fetchPageCollectionGroups: () => y(void 0, null, function* () {
    try {
      const t = yield ue.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((o, s) => o === vs ? 1 : s === vs ? -1 : o.localeCompare(s)).map((o) => [o, t[o]])
      );
      n[vs] && (n[vs] = n[vs].sort(
        (o, s) => o.name.localeCompare(s.name)
      )), Ud.value = n, Id.value = !0;
    } catch (t) {
      mw.log.error("Failed to fetch page collections", t);
    }
  }),
  pageCollectionGroupsFetched: Id,
  pageCollectionGroups: Ud
});
class wa {
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
const ky = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', $y = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', Vy = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', Ey = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', Ly = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', Ty = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', Ay = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', Dy = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', Py = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', By = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', Fy = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', Ny = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', My = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', Uy = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', Iy = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', Ry = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', zy = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', Oy = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', jy = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', $f = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', Hy = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', qy = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', Gy = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', Wy = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', Xy = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', Ky = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', Yy = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', Qy = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', Jy = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', Zy = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', ex = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', tx = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', nx = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', ox = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', sx = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', ax = '<circle cx="6" cy="6" r="3"/><circle cx="14" cy="6" r="3"/><path d="M14 10c3.31 0 6 1.79 6 4v2h-6v-2c0-1.48-1.21-2.77-3-3.46.88-.35 1.91-.54 3-.54m-8 0c3.31 0 6 1.79 6 4v2H0v-2c0-2.21 2.69-4 6-4"/>', Vf = ky, ix = $y, Ef = {
  ltr: Vy,
  shouldFlip: !0
}, Lf = {
  ltr: Ey,
  shouldFlip: !0
}, Uu = {
  ltr: Ly,
  shouldFlip: !0
}, Tf = Ty, Af = Ay, Df = Dy, rx = Py, lx = By, ls = Fy, cx = Ny, Iu = My, Ru = Uy, du = Iy, ux = Ry, dx = {
  ltr: zy,
  shouldFlip: !0
}, gx = {
  ltr: Oy,
  shouldFlip: !0
}, mx = jy, px = {
  langCodeMap: {
    ar: $f
  },
  default: Hy
}, hx = {
  langCodeMap: {
    ar: $f
  },
  default: qy
}, Pf = Gy, Ta = {
  ltr: Wy,
  shouldFlip: !0
}, fx = Xy, wx = Ky, cs = {
  ltr: Yy,
  shouldFlip: !0
}, zu = {
  ltr: Qy,
  shouldFlip: !0
}, vx = {
  ltr: Jy,
  shouldFlip: !0
}, Bf = Zy, _x = ex, gu = tx, Sx = nx, yx = ox, Ff = sx, Ou = {
  ltr: ax,
  shouldFlip: !0
}, xx = {
  [sn]: Ff,
  [an]: mx,
  [te]: Uu
}, Cx = {
  [te]: gx,
  [Pe]: fx
};
class xt {
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
    return xx[this.provider] || null;
  }
  get expandableIcon() {
    return Cx[this.provider] || this.icon;
  }
}
const $o = window.Vue.computed, { topics: Rd, regions: zd } = mw.loader.require(
  "ext.cx.articlefilters"
), bx = (e) => new wa({
  id: e.groupId,
  label: e.label,
  type: tt,
  filters: e.topics.map(
    (t) => new xt({
      id: t.topicId,
      label: t.label,
      type: tt
    })
  )
}), Aa = () => {
  const e = he(), { currentSuggestionFilters: t, setFilterURLParams: n } = D(), { featuredCollection: o, featuredCollectionFetched: s } = rs(), {
    validateFilters: a,
    filtersValidatorError: r,
    isDefaultFilter: l,
    isPopularFilter: c,
    isEqualFilter: u
  } = ku(), i = new xt({
    id: sn,
    type: We,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), d = new xt({
    id: an,
    type: We,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), g = new xt({
    id: te,
    type: We,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: m, pageCollectionGroupsFetched: p } = Mu(), h = $o(() => {
    const N = new wa({
      id: We,
      type: We,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [i, d]
    });
    return Object.keys(m.value).length > 1 && N.filters.push(g), N;
  }), f = () => {
    const N = de({}, m.value);
    delete N.ungrouped;
    const I = [];
    for (const X in N) {
      const re = N[X].map(
        (ke) => new xt({
          id: ke.name,
          label: ke.name,
          type: te
        })
      ), xe = new xt({
        id: X,
        label: X,
        type: te,
        subFilters: re
      });
      I.push(xe);
    }
    const G = (m.value.ungrouped || []).map(
      (X) => new xt({
        id: X.name,
        label: X.name,
        type: te
      })
    );
    return [...I, ...G];
  }, v = $o(
    () => new wa({
      id: te,
      type: te,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: f()
    })
  ), w = new wa({
    id: Pe,
    type: Pe,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: zd.map(
      (N) => new xt({
        id: N.id,
        label: N.label,
        type: Pe,
        subFilters: N.countries.map(
          (I) => new xt({
            id: I.id,
            label: I.label,
            type: Pe
          })
        )
      })
    )
  }), x = $o(() => {
    const N = [
      h.value,
      ...Rd.map(bx),
      w
    ];
    return v.value.filters.length && N.splice(1, 0, v.value), N;
  }), b = $o(
    () => !p.value || !s.value
  ), _ = $o(
    () => {
      var N, I;
      return new xt({
        id: (N = o.value) == null ? void 0 : N.name,
        label: (I = o.value) == null ? void 0 : I.name,
        type: te
      });
    }
  ), k = () => {
    if (b.value)
      return [];
    const N = M(), I = [];
    return o.value && I.push(_.value), !l(N) && !c(N) && !u(N, _.value) && I.push(N), I.push(i, d), I;
  }, E = (N) => {
    n(N.type, N.id);
  }, M = () => t.value.type === Gt ? new xt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : x.value.flatMap((N) => N.filters).flatMap((N) => [N, ...N.subFilters || []]).find(L), L = (N) => u(N, t.value), P = (N) => {
    const G = Rd.flatMap((X) => X.topics).find((X) => X.topicId === N);
    return G ? G.articletopics : [];
  }, z = (N) => {
    const I = zd.find((G) => G.id === N);
    return I ? I.countries.map((G) => G.id) : [N];
  }, Q = $o(
    () => Object.values(m.value).flat()
  );
  return {
    allFilters: x,
    getFiltersSummary: k,
    selectFilter: E,
    isFilterSelected: L,
    getArticleTopics: P,
    waitingForPageCollectionsFetch: b,
    findSelectedFilter: M,
    validateURLFilterWithCollections: () => {
      if (!p.value)
        return;
      const N = a(
        {
          type: t.value.type,
          id: t.value.id
        },
        Q.value
      );
      n(N.type, N.id), r.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: z,
    setFeaturedCollectionFilterIfNeeded: () => {
      if (!l(t.value))
        return;
      const N = a(
        _.value,
        Q.value
      );
      E(N);
    }
  };
}, kx = window.Vuex.useStore, $x = () => {
  const e = kx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = is(), { getArticleTopics: l } = Aa();
  return {
    fetchPageSuggestionsByTopics: (i) => y(void 0, null, function* () {
      const d = o.value.id, g = {
        id: d,
        type: tt
      }, m = l(d);
      let p = yield ue.fetchPageSuggestionsByTopics(
        t.value,
        n.value,
        m
      );
      return p = p.filter(
        (h) => a(h)
      ), p = p.slice(0, i), p.forEach(
        (h) => h.suggestionProvider = g
      ), p;
    }),
    fetchSectionSuggestionsByTopics: (i) => y(void 0, null, function* () {
      const d = o.value.id, g = {
        id: d,
        type: tt
      }, m = l(d), p = [];
      return yield _o(() => y(void 0, null, function* () {
        const h = yield ue.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          m
        );
        let f = h.filter(
          (w) => s(w)
        );
        const v = h.filter(
          (w) => !s(w)
        );
        return f = f.slice(0, i), p.push(...f), v.forEach((w) => {
          w && !r(w) && (w.isListable = !1, e.commit("suggestions/addSectionSuggestion", w));
        }), p.length >= i;
      })), p.forEach(
        (h) => h.suggestionProvider = g
      ), p;
    })
  };
}, Vx = window.Vuex.useStore, Ex = () => {
  const e = Vx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = is(), { getCountries: l } = Aa();
  return {
    fetchPageSuggestionsByCountries: (i) => y(void 0, null, function* () {
      let d = yield ue.fetchPageSuggestionsByCountries(
        t.value,
        n.value,
        l(o.value.id)
      );
      return d = d.filter(
        (g) => a(g)
      ), d = d.slice(0, i), d.forEach(
        (g) => g.suggestionProvider = o.value
      ), d;
    }),
    fetchSectionSuggestionsByCountries: (i) => y(void 0, null, function* () {
      const d = [];
      return yield _o(() => y(void 0, null, function* () {
        const g = yield ue.fetchSectionSuggestionsByCountries(
          t.value,
          n.value,
          l(o.value.id)
        );
        let m = g.filter(
          (h) => s(h)
        );
        const p = g.filter(
          (h) => !s(h)
        );
        return m = m.slice(0, i), d.push(...m), p.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), d.length >= i;
      })), d.forEach(
        (g) => g.suggestionProvider = o.value
      ), d;
    })
  };
}, Lx = window.Vuex.useStore, Tx = () => {
  const e = Lx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = is();
  return {
    fetchPageSuggestionsBySeed: (u) => y(void 0, null, function* () {
      const i = o.value.id;
      let d = yield ue.fetchPageSuggestions(
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
    fetchSectionSuggestionsBySeed: (u) => y(void 0, null, function* () {
      const i = [], d = o.value.id;
      return yield _o(() => y(void 0, null, function* () {
        const g = yield ue.fetchSectionSuggestions(
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
}, Ax = () => {
  const { currentSuggestionFilters: e } = D(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = my(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = by(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = $x(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: c
  } = Ex(), {
    fetchPageSuggestionsByCollections: u,
    fetchSectionSuggestionsByCollections: i
  } = bf(), { fetchPageSuggestionsBySeed: d, fetchSectionSuggestionsBySeed: g } = Tx(), m = {
    [sn]: t,
    [an]: o,
    [te]: u,
    [tt]: a,
    [Pe]: l,
    [Gt]: d
  }, p = {
    [sn]: n,
    [an]: s,
    [te]: i,
    [tt]: r,
    [Pe]: c,
    [Gt]: g
  }, h = (w) => w.type === We ? w.id : w.type;
  return {
    getCurrentPageSuggestionProvider: () => m[h(e.value)],
    getCurrentSectionSuggestionProvider: () => p[h(e.value)]
  };
}, Dx = window.Vuex.useStore, ju = () => {
  const e = Dx(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = kr(), { sourceLanguageURLParameter: o } = D(), s = as(), a = () => {
    const g = t(), m = e.state.suggestions.maxSuggestionsPerSlice;
    return m - g.length % m;
  }, r = () => {
    const g = n(), m = e.state.suggestions.maxSuggestionsPerSlice;
    return m - g.length % m;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: c
  } = Ax(), u = (g) => {
    try {
      const m = g.map((p) => p.sourceTitle);
      if (m.length)
        return s(o.value, m);
    } catch (m) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => y(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const g = a(), p = yield c()(
        g
      );
      p.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), u(p), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => y(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const g = r(), p = yield l()(
        g
      );
      p.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), u(p), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, Px = window.Vuex.useStore, Nf = () => {
  const e = Px();
  return (t) => y(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ue.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, Bx = window.Vuex.useStore, Mf = () => {
  const e = Bx(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = ju(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = kr(), { targetLanguageURLParameter: a } = D(), r = Nf();
  return () => y(void 0, null, function* () {
    const l = s(0), c = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, i = l.length === u, d = c.length === u;
    i && d || (yield r(a.value), t(), n());
  });
}, Fx = window.Vuex.useStore, nl = /* @__PURE__ */ new Map(), $r = () => {
  const e = Fx(), t = as();
  return (n, o, s) => y(void 0, null, function* () {
    const a = `${n}:${o}:${s}`;
    if (nl.has(a))
      return nl.get(a);
    const l = (() => y(void 0, null, function* () {
      let c = e.getters["suggestions/getSectionSuggestionsForArticle"](n, o, s);
      if (!c) {
        c = yield ue.fetchSectionSuggestion(
          n,
          s,
          o
        );
        try {
          if (yield t(n, [s]), c)
            c.isListable = !1, e.commit("suggestions/addSectionSuggestion", c);
          else {
            const u = e.getters["mediawiki/getPage"](
              n,
              s
            );
            return new Jn({
              sourceLanguage: n,
              targetLanguage: o,
              sourceTitle: s,
              langLinksCount: u.langLinksCount,
              size: u.articleSize,
              wikidataId: u.wikidataId
            });
          }
        } catch (u) {
          const i = new Error(
            `No page metadata found for title ${s} and language pair ${n}-${o}. ${u}`
          );
          throw mw.errorLogger.logError(i, "error.contenttranslation"), i;
        }
      }
      return c;
    }))();
    return nl.set(a, l), l;
  });
}, Od = window.Vue.computed, Nx = window.Vuex.useStore, rn = () => {
  const e = Nx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = D(), s = Od(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = Od(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, c) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(c)
  };
}, Uf = window.Vuex.useStore, { setLanguageURLParams: Mx } = D(), Hu = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), Mx(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, If = () => {
  const e = Uf(), t = Mf();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Be(e);
    n === o && (n = a.value, o = s.value), Hu(e, n, o), t();
  };
}, Ux = () => {
  const e = Uf(), t = $r(), { currentLanguageTitleGroup: n, targetPageExists: o } = rn(), s = as();
  return (a, r) => y(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      setPageURLParam: u,
      clearSectionURLParameter: i
    } = D();
    a === r && (a = c.value, r = l.value);
    const d = n.value.getTitleForLanguage(a);
    Hu(e, a, r), u(d), o.value ? (i(), yield t(
      l.value,
      c.value,
      d
    )) : yield s(l.value, [d]);
  });
}, Ix = window.Vuex.useStore, Rx = window.Vue.ref, jd = Rx(!1), Rf = () => {
  const e = Ix(), { supportedLanguageCodes: t, fetchSupportedLanguageCodes: n } = Va(), { sourceLanguageURLParameter: o, targetLanguageURLParameter: s } = D(), a = () => {
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
  return { initializeApplicationLanguages: () => y(void 0, null, function* () {
    yield n();
    const { sourceLanguage: l, targetLanguage: c } = a();
    Hu(e, l, c), jd.value = !0;
  }), applicationLanguagesInitialized: jd };
};
const zx = window.Vue.resolveDynamicComponent, Hd = window.Vue.openBlock, qd = window.Vue.createBlock, Ox = window.Vue.Transition, _s = window.Vue.withCtx, Ss = window.Vue.createVNode, jx = window.Vue.resolveComponent, ol = window.Vue.unref, Hx = window.Vuex.useStore, Gd = window.Vue.computed, qx = window.Vue.onMounted, Gx = window.Vue.inject, Wx = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = D(), { initializeApplicationLanguages: n } = Rf();
    t(), n();
    const o = Gx("breakpoints"), s = Gd(() => o.value.mobile), a = Hx(), r = Gd(
      () => a.state.application.autoSavePending
    );
    return qx(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && Qh.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((c) => {
          c instanceof os && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, c) => {
      const u = jx("router-view");
      return Hd(), qd(ol(Zv), { id: "contenttranslation" }, {
        default: _s(() => [
          Ss(ol(U), { class: "cx-container" }, {
            default: _s(() => [
              Ss(ol(C), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: _s(() => [
                  Ss(u, null, {
                    default: _s(({ Component: i, route: d }) => [
                      Ss(Ox, {
                        name: s.value ? d.meta.transitionName : ""
                      }, {
                        default: _s(() => [
                          (Hd(), qd(zx(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      Ss(p1)
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
}, Xx = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, Kx = {
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
class zf {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Zn {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new zf(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const Wd = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Ye(de({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class Yx {
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
    const t = Wd((s = this.user) == null ? void 0 : s.content), n = Wd((a = this.mt) == null ? void 0 : a.content);
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
class qu extends Cu {
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
const Vr = mw.user.isAnon() ? void 0 : "user", Of = (e) => {
  if (e === "assertuserfailed")
    throw new os();
};
function jf(e, t = null) {
  return y(this, null, function* () {
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
    return t && (n.offset = t), new mw.Api().get(n).then((s) => y(this, null, function* () {
      var l;
      const a = s.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (c) => new _r(Ye(de({}, c), { status: e }))
      ) : r = a.map(
        (c) => new qu(Ye(de({}, c), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const c = yield jf(
          e,
          s.continue.offset
        );
        r = r.concat(c);
      }
      return r;
    }));
  });
}
function Qx(e) {
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
      (a) => new Yx(a)
    );
  });
}
function Jx(e, t, n, o, s) {
  return y(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== ie.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
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
const Zx = (e, t, n) => {
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
}, eC = ({
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
    assert: Vr,
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
          publishFeedbackMessage: new Zn({
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
    Of(h);
    let v;
    return f = f || {}, f.exception ? v = f.exception.message : f.error ? v = f.error.info : v = "Unknown error", {
      publishFeedbackMessage: new Zn({
        text: v,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, tC = ({
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
    assert: Vr,
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
    Of(m);
    let h;
    return p.exception ? (h = p.exception.message, mw.cx.eventlogging.stats.saveFailure(!0)) : p.error ? (h = p.error.info, p.error.code && p.error.code.indexOf("internal_api_error") === 0 && mw.cx.eventlogging.stats.saveFailure(!0)) : (h = "Unknown error", mw.cx.eventlogging.stats.saveFailure(!0)), new Zn({ text: h, status: "error" });
  });
}, nC = (e) => {
  const t = {
    assert: Vr,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, oC = () => {
  const e = {
    assert: Vr,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new qu(n.cxcheckunreviewed.translation)
  );
}, sC = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, aC = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, iC = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), bt = {
  fetchTranslations: jf,
  fetchTranslationUnits: Qx,
  fetchSegmentTranslation: Jx,
  parseTemplateWikitext: Zx,
  publishTranslation: eC,
  saveTranslation: tC,
  deleteTranslation: sC,
  fetchTranslatorStats: iC,
  deleteCXTranslation: aC,
  splitTranslation: nC,
  checkUnreviewedTranslations: oC
};
function rC(t) {
  return y(this, arguments, function* ({ commit: e }) {
    const n = yield bt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const lC = {
  fetchTranslatorStats: rC
}, cC = {
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
}, uC = {
  namespaced: !0,
  state: Xx,
  getters: Kx,
  actions: lC,
  mutations: cC
}, dC = {
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
  appendixSectionTitles: DS
}, gC = {
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
  )
}, mC = {
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
}, pC = {
  namespaced: !0,
  state: dC,
  getters: gC,
  actions: {},
  mutations: mC
}, hC = {
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
}, fC = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== ie.EMPTY_TEXT_PROVIDER_KEY,
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
function wC(o) {
  return y(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield So.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const vC = { fetchNearbyPages: wC }, _C = {
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
}, SC = {
  namespaced: !0,
  state: hC,
  getters: fC,
  actions: vC,
  mutations: _C
}, yC = {
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
}, xC = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = ie.getStorageKey(
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
}, CC = {
  namespaced: !0,
  state: yC,
  mutations: xC
}, bC = window.Vuex.createStore, kC = bC({
  modules: { translator: uC, suggestions: pC, mediawiki: SC, application: CC }
});
function $C() {
  return Hf().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Hf() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const VC = typeof Proxy == "function", EC = "devtools-plugin:setup", LC = "plugin:settings:set";
let Vo, mu;
function TC() {
  var e;
  return Vo !== void 0 || (typeof window != "undefined" && window.performance ? (Vo = !0, mu = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Vo = !0, mu = global.perf_hooks.performance) : Vo = !1), Vo;
}
function AC() {
  return TC() ? mu.now() : Date.now();
}
class DC {
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
        return AC();
      }
    }, n && n.on(LC, (r, l) => {
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
    return y(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function PC(e, t) {
  const n = e, o = Hf(), s = $C(), a = VC && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(EC, e, t);
  else {
    const r = a ? new DC(n, s) : null;
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
const qf = window.Vue.getCurrentInstance, ts = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const tn = window.Vue.computed, va = window.Vue.unref, BC = window.Vue.watchEffect, Gf = window.Vue.defineComponent, FC = window.Vue.reactive, Wf = window.Vue.h, sl = window.Vue.provide, NC = window.Vue.ref, Xf = window.Vue.watch, MC = window.Vue.shallowRef, UC = window.Vue.shallowReactive, IC = window.Vue.nextTick, En = typeof window != "undefined";
function RC(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const ee = Object.assign;
function al(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = gt(s) ? s.map(e) : e(s);
  }
  return n;
}
const _a = () => {
}, gt = Array.isArray;
function Y(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const zC = /\/$/, OC = (e) => e.replace(zC, "");
function il(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return l < c && l >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), a = t.slice(c + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = qC(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function jC(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Xd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Kd(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && eo(t.matched[o], n.matched[s]) && Kf(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function eo(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Kf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!HC(e[n], t[n]))
      return !1;
  return !0;
}
function HC(e, t) {
  return gt(e) ? Yd(e, t) : gt(t) ? Yd(t, e) : e === t;
}
function Yd(e, t) {
  return gt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function qC(e, t) {
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
var xa;
(function(e) {
  e.pop = "pop", e.push = "push";
})(xa || (xa = {}));
var Sa;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Sa || (Sa = {}));
function GC(e) {
  if (!e)
    if (En) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), OC(e);
}
const WC = /^[^#]+#/;
function XC(e, t) {
  return e.replace(WC, "#") + t;
}
function KC(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Er = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function YC(e) {
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
    t = KC(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Qd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const pu = /* @__PURE__ */ new Map();
function QC(e, t) {
  pu.set(e, t);
}
function JC(e) {
  const t = pu.get(e);
  return pu.delete(e), t;
}
let ZC = () => location.protocol + "//" + location.host;
function Yf(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), Xd(c, "");
  }
  return Xd(n, e) + o + s;
}
function eb(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: g }) => {
    const m = Yf(e, location), p = n.value, h = t.value;
    let f = 0;
    if (g) {
      if (n.value = m, t.value = g, r && r === p) {
        r = null;
        return;
      }
      f = h ? g.position - h.position : 0;
    } else
      o(m);
    s.forEach((v) => {
      v(n.value, p, {
        delta: f,
        type: xa.pop,
        direction: f ? f > 0 ? Sa.forward : Sa.back : Sa.unknown
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
    g.state && g.replaceState(ee({}, g.state, { scroll: Er() }), "");
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
function Jd(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Er() : null
  };
}
function tb(e) {
  const { history: t, location: n } = window, o = {
    value: Yf(e, n)
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
    const d = e.indexOf("#"), g = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : ZC() + e + c;
    try {
      t[i ? "replaceState" : "pushState"](u, "", g), s.value = u;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? Y("Error with push/replace State", m) : console.error(m), n[i ? "replace" : "assign"](g);
    }
  }
  function r(c, u) {
    const i = ee({}, t.state, Jd(
      s.value.back,
      // keep back and forward entries but override current position
      c,
      s.value.forward,
      !0
    ), u, { position: s.value.position });
    a(c, i, !0), o.value = c;
  }
  function l(c, u) {
    const i = ee(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: c,
        scroll: Er()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && Y(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const d = ee({}, Jd(o.value, c, null), { position: i.position + 1 }, u);
    a(c, d, !1), o.value = c;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function nb(e) {
  e = GC(e);
  const t = tb(e), n = eb(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = ee({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: XC.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function ob(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Y(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), nb(e);
}
function sb(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Qf(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Dn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, hu = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Zd;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Zd || (Zd = {}));
const ab = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${rb(t)}" via a navigation guard.`;
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
function ns(e, t) {
  return {}.NODE_ENV !== "production" ? ee(new Error(ab[e](t)), {
    type: e,
    [hu]: !0
  }, t) : ee(new Error(), {
    type: e,
    [hu]: !0
  }, t);
}
function cn(e, t) {
  return e instanceof Error && hu in e && (t == null || !!(e.type & t));
}
const ib = ["params", "query", "hash"];
function rb(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of ib)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const eg = "[^/]+?", lb = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, cb = /[.+*?^${}()[\]/\\]/g;
function ub(e, t) {
  const n = ee({}, lb, t), o = [];
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
        d || (s += "/"), s += g.value.replace(cb, "\\$&"), m += 40;
      else if (g.type === 1) {
        const { value: p, repeatable: h, optional: f, regexp: v } = g;
        a.push({
          name: p,
          repeatable: h,
          optional: f
        });
        const w = v || eg;
        if (w !== eg) {
          m += 10;
          try {
            new RegExp(`(${w})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${w}): ` + b.message);
          }
        }
        let x = h ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
        d || (x = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && u.length < 2 ? `(?:/${x})` : "/" + x), f && (x += "?"), s += x, m += 20, f && (m += -8), h && (m += -20), w === ".*" && (m += -50);
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
          const { value: p, repeatable: h, optional: f } = m, v = p in u ? u[p] : "";
          if (gt(v) && !h)
            throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const w = gt(v) ? v.join("/") : v;
          if (!w)
            if (f)
              g.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${p}"`);
          i += w;
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
function db(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function gb(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = db(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (tg(o))
      return 1;
    if (tg(s))
      return -1;
  }
  return s.length - o.length;
}
function tg(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const mb = {
  type: 0,
  value: ""
}, pb = /[a-zA-Z0-9_]/;
function hb(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[mb]];
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
        c === "(" ? n = 2 : pb.test(c) ? g() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
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
function fb(e, t, n) {
  const o = ub(hb(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && Y(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const s = ee(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function wb(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = sg({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, d, g) {
    const m = !g, p = vb(i);
    ({}).NODE_ENV !== "production" && xb(p, d), p.aliasOf = g && g.record;
    const h = sg(t, i), f = [
      p
    ];
    if ("alias" in i) {
      const x = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const b of x)
        f.push(ee({}, p, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : p.components,
          path: b,
          // we might be the child of an alias
          aliasOf: g ? g.record : p
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let v, w;
    for (const x of f) {
      const { path: b } = x;
      if (d && b[0] !== "/") {
        const _ = d.record.path, k = _[_.length - 1] === "/" ? "" : "/";
        x.path = d.record.path + (b && k + b);
      }
      if ({}.NODE_ENV !== "production" && x.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (v = fb(x, d, h), {}.NODE_ENV !== "production" && d && b[0] === "/" && Cb(v, d), g ? (g.alias.push(v), {}.NODE_ENV !== "production" && yb(g, v)) : (w = w || v, w !== v && w.alias.push(v), m && i.name && !og(v) && r(i.name)), p.children) {
        const _ = p.children;
        for (let k = 0; k < _.length; k++)
          a(_[k], v, g && g.children[k]);
      }
      g = g || v, (v.record.components && Object.keys(v.record.components).length || v.record.name || v.record.redirect) && c(v);
    }
    return w ? () => {
      r(w);
    } : _a;
  }
  function r(i) {
    if (Qf(i)) {
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
    for (; d < n.length && gb(i, n[d]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[d].record.path || !Jf(i, n[d])); )
      d++;
    n.splice(d, 0, i), i.record.name && !og(i) && o.set(i.record.name, i);
  }
  function u(i, d) {
    let g, m = {}, p, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw ns(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const w = Object.keys(i.params || {}).filter((x) => !g.keys.find((b) => b.name === x));
        w.length && Y(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, m = ee(
        // paramsFromLocation is a new object
        ng(
          d.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && ng(i.params, g.keys.map((w) => w.name))
      ), p = g.stringify(m);
    } else if ("path" in i)
      p = i.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && Y(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((w) => w.re.test(p)), g && (m = g.parse(p), h = g.record.name);
    else {
      if (g = d.name ? o.get(d.name) : n.find((w) => w.re.test(d.path)), !g)
        throw ns(1, {
          location: i,
          currentLocation: d
        });
      h = g.record.name, m = ee({}, d.params, i.params), p = g.stringify(m);
    }
    const f = [];
    let v = g;
    for (; v; )
      f.unshift(v.record), v = v.parent;
    return {
      name: h,
      path: p,
      params: m,
      matched: f,
      meta: Sb(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: u, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function ng(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function vb(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: _b(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function _b(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function og(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Sb(e) {
  return e.reduce((t, n) => ee(t, n.meta), {});
}
function sg(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function fu(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function yb(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(fu.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(fu.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function xb(e, t) {
  t && t.record.name && !e.name && !e.path && Y(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Cb(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(fu.bind(null, n)))
      return Y(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Jf(e, t) {
  return t.children.some((n) => n === e || Jf(e, n));
}
const Zf = /#/g, bb = /&/g, kb = /\//g, $b = /=/g, Vb = /\?/g, ew = /\+/g, Eb = /%5B/g, Lb = /%5D/g, tw = /%5E/g, Tb = /%60/g, nw = /%7B/g, Ab = /%7C/g, ow = /%7D/g, Db = /%20/g;
function Gu(e) {
  return encodeURI("" + e).replace(Ab, "|").replace(Eb, "[").replace(Lb, "]");
}
function Pb(e) {
  return Gu(e).replace(nw, "{").replace(ow, "}").replace(tw, "^");
}
function wu(e) {
  return Gu(e).replace(ew, "%2B").replace(Db, "+").replace(Zf, "%23").replace(bb, "%26").replace(Tb, "`").replace(nw, "{").replace(ow, "}").replace(tw, "^");
}
function Bb(e) {
  return wu(e).replace($b, "%3D");
}
function Fb(e) {
  return Gu(e).replace(Zf, "%23").replace(Vb, "%3F");
}
function Nb(e) {
  return e == null ? "" : Fb(e).replace(kb, "%2F");
}
function Ca(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && Y(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Mb(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(ew, " "), r = a.indexOf("="), l = Ca(r < 0 ? a : a.slice(0, r)), c = r < 0 ? null : Ca(a.slice(r + 1));
    if (l in t) {
      let u = t[l];
      gt(u) || (u = t[l] = [u]), u.push(c);
    } else
      t[l] = c;
  }
  return t;
}
function ag(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = Bb(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (gt(o) ? o.map((a) => a && wu(a)) : [o && wu(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function Ub(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = gt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const Ib = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), ig = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Lr = Symbol({}.NODE_ENV !== "production" ? "router" : ""), sw = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), vu = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function ys() {
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
function Yn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, l) => {
    const c = (d) => {
      d === !1 ? l(ns(4, {
        from: n,
        to: t
      })) : d instanceof Error ? l(d) : sb(d) ? l(ns(2, {
        from: t,
        to: d
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof d == "function" && a.push(d), r());
    }, u = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? Rb(c, t, n) : c);
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
function Rb(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && Y(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function rl(e, t, n, o) {
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
        if (zb(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(Yn(u, n, o, a, r));
        } else {
          let c = l();
          ({}).NODE_ENV !== "production" && !("catch" in c) && (Y(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), s.push(() => c.then((u) => {
            if (!u)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = RC(u) ? u.default : u;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && Yn(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function zb(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function rg(e) {
  const t = ts(Lr), n = ts(sw), o = tn(() => t.resolve(va(e.to))), s = tn(() => {
    const { matched: c } = o.value, { length: u } = c, i = c[u - 1], d = n.matched;
    if (!i || !d.length)
      return -1;
    const g = d.findIndex(eo.bind(null, i));
    if (g > -1)
      return g;
    const m = lg(c[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      lg(i) === m && // avoid comparing the child with its parent
      d[d.length - 1].path !== m ? d.findIndex(eo.bind(null, c[u - 2])) : g
    );
  }), a = tn(() => s.value > -1 && qb(n.params, o.value.params)), r = tn(() => s.value > -1 && s.value === n.matched.length - 1 && Kf(n.params, o.value.params));
  function l(c = {}) {
    return Hb(c) ? t[va(e.replace) ? "replace" : "push"](
      va(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(_a) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && En) {
    const c = qf();
    if (c) {
      const u = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(u), BC(() => {
        u.route = o.value, u.isActive = a.value, u.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: tn(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const Ob = /* @__PURE__ */ Gf({
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
  useLink: rg,
  setup(e, { slots: t }) {
    const n = FC(rg(e)), { options: o } = ts(Lr), s = tn(() => ({
      [cg(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [cg(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : Wf("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), jb = Ob;
function Hb(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function qb(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!gt(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function lg(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const cg = (e, t, n) => e != null ? e : t != null ? t : n, Gb = /* @__PURE__ */ Gf({
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
    ({}).NODE_ENV !== "production" && Xb();
    const o = ts(vu), s = tn(() => e.route || o.value), a = ts(ig, 0), r = tn(() => {
      let u = va(a);
      const { matched: i } = s.value;
      let d;
      for (; (d = i[u]) && !d.components; )
        u++;
      return u;
    }), l = tn(() => s.value.matched[r.value]);
    sl(ig, tn(() => r.value + 1)), sl(Ib, l), sl(vu, s);
    const c = NC();
    return Xf(() => [c.value, l.value, e.name], ([u, i, d], [g, m, p]) => {
      i && (i.instances[d] = u, m && m !== i && u && u === g && (i.leaveGuards.size || (i.leaveGuards = m.leaveGuards), i.updateGuards.size || (i.updateGuards = m.updateGuards))), u && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !eo(i, m) || !g) && (i.enterCallbacks[d] || []).forEach((h) => h(u));
    }, { flush: "post" }), () => {
      const u = s.value, i = e.name, d = l.value, g = d && d.components[i];
      if (!g)
        return ug(n.default, { Component: g, route: u });
      const m = d.props[i], p = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null, f = Wf(g, ee({}, p, t, {
        onVnodeUnmounted: (v) => {
          v.component.isUnmounted && (d.instances[i] = null);
        },
        ref: c
      }));
      if ({}.NODE_ENV !== "production" && En && f.ref) {
        const v = {
          depth: r.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (gt(f.ref) ? f.ref.map((x) => x.i) : [f.ref.i]).forEach((x) => {
          x.__vrv_devtools = v;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        ug(n.default, { Component: f, route: u }) || f
      );
    };
  }
});
function ug(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Wb = Gb;
function Xb() {
  const e = qf(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function xs(e, t) {
  const n = ee({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => ok(o, ["instances", "children", "aliasOf"]))
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
function Ja(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Kb = 0;
function Yb(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = Kb++;
  PC({
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
        value: xs(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const g = d.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: aw
        });
      }
      gt(d.__vrl_devtools) && (d.__devtoolsApi = s, d.__vrl_devtools.forEach((g) => {
        let m = lw, p = "";
        g.isExactActive ? (m = rw, p = "This is exactly active") : g.isActive && (m = iw, p = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: p,
          backgroundColor: m
        });
      }));
    }), Xf(t.currentRoute, () => {
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
        guard: Ja("beforeEach"),
        from: xs(d, "Current Location during this navigation"),
        to: xs(i, "Target location")
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
        guard: Ja("afterEach")
      };
      g ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, m.status = Ja("❌")) : m.status = Ja("✅"), m.from = xs(d, "Current Location during this navigation"), m.to = xs(i, "Target location"), s.addTimelineEvent({
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
      d.forEach(dw), i.filter && (d = d.filter((g) => (
        // save matches state based on the payload
        _u(g, i.filter.toLowerCase())
      ))), d.forEach((g) => uw(g, t.currentRoute.value)), i.rootNodes = d.map(cw);
    }
    let u;
    s.on.getInspectorTree((i) => {
      u = i, i.app === e && i.inspectorId === l && c();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((m) => m.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: Jb(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function Qb(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Jb(e) {
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
        display: e.keys.map((o) => `${o.name}${Qb(o)}`).join(" "),
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
const aw = 15485081, iw = 2450411, rw = 8702998, Zb = 2282478, lw = 16486972, ek = 6710886;
function cw(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Zb
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: lw
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: aw
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: rw
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: iw
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: ek
  });
  let o = n.__vd_id;
  return o == null && (o = String(tk++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(cw)
  };
}
let tk = 0;
const nk = /^\/(.*)\/([a-z]*)$/;
function uw(e, t) {
  const n = t.matched.length && eo(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => eo(o, e.record))), e.children.forEach((o) => uw(o, t));
}
function dw(e) {
  e.__vd_match = !1, e.children.forEach(dw);
}
function _u(e, t) {
  const n = String(e.re).match(nk);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => _u(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Ca(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => _u(r, t));
}
function ok(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function sk(e) {
  const t = wb(e.routes, e), n = e.parseQuery || Mb, o = e.stringifyQuery || ag, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = ys(), r = ys(), l = ys(), c = MC(Dn);
  let u = Dn;
  En && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = al.bind(null, (S) => "" + S), d = al.bind(null, Nb), g = (
    // @ts-expect-error: intentionally avoid the type check
    al.bind(null, Ca)
  );
  function m(S, V) {
    let T, F;
    return Qf(S) ? (T = t.getRecordMatcher(S), F = V) : F = S, t.addRoute(F, T);
  }
  function p(S) {
    const V = t.getRecordMatcher(S);
    V ? t.removeRoute(V) : {}.NODE_ENV !== "production" && Y(`Cannot remove non-existent route "${String(S)}"`);
  }
  function h() {
    return t.getRoutes().map((S) => S.record);
  }
  function f(S) {
    return !!t.getRecordMatcher(S);
  }
  function v(S, V) {
    if (V = ee({}, V || c.value), typeof S == "string") {
      const H = il(n, S, V.path), ae = t.resolve({ path: H.path }, V), st = s.createHref(H.fullPath);
      return {}.NODE_ENV !== "production" && (st.startsWith("//") ? Y(`Location "${S}" resolved to "${st}". A resolved location cannot start with multiple slashes.`) : ae.matched.length || Y(`No match found for location with path "${S}"`)), ee(H, ae, {
        params: g(ae.params),
        hash: Ca(H.hash),
        redirectedFrom: void 0,
        href: st
      });
    }
    let T;
    if ("path" in S)
      ({}).NODE_ENV !== "production" && "params" in S && !("name" in S) && // @ts-expect-error: the type is never
      Object.keys(S.params).length && Y(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), T = ee({}, S, {
        path: il(n, S.path, V.path).path
      });
    else {
      const H = ee({}, S.params);
      for (const ae in H)
        H[ae] == null && delete H[ae];
      T = ee({}, S, {
        params: d(H)
      }), V.params = d(V.params);
    }
    const F = t.resolve(T, V), K = S.hash || "";
    ({}).NODE_ENV !== "production" && K && !K.startsWith("#") && Y(`A \`hash\` should always start with the character "#". Replace "${K}" with "#${K}".`), F.params = i(g(F.params));
    const fe = jC(o, ee({}, S, {
      hash: Pb(K),
      path: F.path
    })), W = s.createHref(fe);
    return {}.NODE_ENV !== "production" && (W.startsWith("//") ? Y(`Location "${S}" resolved to "${W}". A resolved location cannot start with multiple slashes.`) : F.matched.length || Y(`No match found for location with path "${"path" in S ? S.path : S}"`)), ee({
      fullPath: fe,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: K,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === ag ? Ub(S.query) : S.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: W
    });
  }
  function w(S) {
    return typeof S == "string" ? il(n, S, c.value.path) : ee({}, S);
  }
  function x(S, V) {
    if (u !== S)
      return ns(8, {
        from: V,
        to: S
      });
  }
  function b(S) {
    return E(S);
  }
  function _(S) {
    return b(ee(w(S), { replace: !0 }));
  }
  function k(S) {
    const V = S.matched[S.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: T } = V;
      let F = typeof T == "function" ? T(S) : T;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = w(F) : (
        // force empty params
        { path: F }
      ), F.params = {}), {}.NODE_ENV !== "production" && !("path" in F) && !("name" in F))
        throw Y(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return ee({
        query: S.query,
        hash: S.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in F ? {} : S.params
      }, F);
    }
  }
  function E(S, V) {
    const T = u = v(S), F = c.value, K = S.state, fe = S.force, W = S.replace === !0, H = k(T);
    if (H)
      return E(
        ee(w(H), {
          state: typeof H == "object" ? ee({}, K, H.state) : K,
          force: fe,
          replace: W
        }),
        // keep original redirectedFrom if it exists
        V || T
      );
    const ae = T;
    ae.redirectedFrom = V;
    let st;
    return !fe && Kd(o, F, T) && (st = ns(16, { to: ae, from: F }), ke(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (st ? Promise.resolve(st) : P(ae, F)).catch((Ve) => cn(Ve) ? (
      // navigation redirects still mark the router as ready
      cn(
        Ve,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? Ve : xe(Ve)
    ) : (
      // reject any unknown error
      X(Ve, ae, F)
    )).then((Ve) => {
      if (Ve) {
        if (cn(
          Ve,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Kd(o, v(Ve.to), ae) && // and we have done it a couple of times
          V && // @ts-expect-error: added only in dev
          (V._count = V._count ? (
            // @ts-expect-error
            V._count + 1
          ) : 1) > 30 ? (Y(`Detected a possibly infinite redirection in a navigation guard when going from "${F.fullPath}" to "${ae.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : E(
            // keep options
            ee({
              // preserve an existing replacement but allow the redirect to override it
              replace: W
            }, w(Ve.to), {
              state: typeof Ve.to == "object" ? ee({}, K, Ve.to.state) : K,
              force: fe
            }),
            // preserve the original redirectedFrom if any
            V || ae
          );
      } else
        Ve = Q(ae, F, !0, W, K);
      return z(ae, F, Ve), Ve;
    });
  }
  function M(S, V) {
    const T = x(S, V);
    return T ? Promise.reject(T) : Promise.resolve();
  }
  function L(S) {
    const V = R.values().next().value;
    return V && typeof V.runWithContext == "function" ? V.runWithContext(S) : S();
  }
  function P(S, V) {
    let T;
    const [F, K, fe] = ak(S, V);
    T = rl(F.reverse(), "beforeRouteLeave", S, V);
    for (const H of F)
      H.leaveGuards.forEach((ae) => {
        T.push(Yn(ae, S, V));
      });
    const W = M.bind(null, S, V);
    return T.push(W), j(T).then(() => {
      T = [];
      for (const H of a.list())
        T.push(Yn(H, S, V));
      return T.push(W), j(T);
    }).then(() => {
      T = rl(K, "beforeRouteUpdate", S, V);
      for (const H of K)
        H.updateGuards.forEach((ae) => {
          T.push(Yn(ae, S, V));
        });
      return T.push(W), j(T);
    }).then(() => {
      T = [];
      for (const H of fe)
        if (H.beforeEnter)
          if (gt(H.beforeEnter))
            for (const ae of H.beforeEnter)
              T.push(Yn(ae, S, V));
          else
            T.push(Yn(H.beforeEnter, S, V));
      return T.push(W), j(T);
    }).then(() => (S.matched.forEach((H) => H.enterCallbacks = {}), T = rl(fe, "beforeRouteEnter", S, V), T.push(W), j(T))).then(() => {
      T = [];
      for (const H of r.list())
        T.push(Yn(H, S, V));
      return T.push(W), j(T);
    }).catch((H) => cn(
      H,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? H : Promise.reject(H));
  }
  function z(S, V, T) {
    l.list().forEach((F) => L(() => F(S, V, T)));
  }
  function Q(S, V, T, F, K) {
    const fe = x(S, V);
    if (fe)
      return fe;
    const W = V === Dn, H = En ? history.state : {};
    T && (F || W ? s.replace(S.fullPath, ee({
      scroll: W && H && H.scroll
    }, K)) : s.push(S.fullPath, K)), c.value = S, ke(S, V, T, W), xe();
  }
  let se;
  function oe() {
    se || (se = s.listen((S, V, T) => {
      if (!B.listening)
        return;
      const F = v(S), K = k(F);
      if (K) {
        E(ee(K, { replace: !0 }), F).catch(_a);
        return;
      }
      u = F;
      const fe = c.value;
      En && QC(Qd(fe.fullPath, T.delta), Er()), P(F, fe).catch((W) => cn(
        W,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? W : cn(
        W,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (E(
        W.to,
        F
        // avoid an uncaught rejection, let push call triggerError
      ).then((H) => {
        cn(
          H,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !T.delta && T.type === xa.pop && s.go(-1, !1);
      }).catch(_a), Promise.reject()) : (T.delta && s.go(-T.delta, !1), X(W, F, fe))).then((W) => {
        W = W || Q(
          // after navigation, all matched components are resolved
          F,
          fe,
          !1
        ), W && (T.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !cn(
          W,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-T.delta, !1) : T.type === xa.pop && cn(
          W,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), z(F, fe, W);
      }).catch(_a);
    }));
  }
  let N = ys(), I = ys(), G;
  function X(S, V, T) {
    xe(S);
    const F = I.list();
    return F.length ? F.forEach((K) => K(S, V, T)) : ({}.NODE_ENV !== "production" && Y("uncaught error during route navigation:"), console.error(S)), Promise.reject(S);
  }
  function re() {
    return G && c.value !== Dn ? Promise.resolve() : new Promise((S, V) => {
      N.add([S, V]);
    });
  }
  function xe(S) {
    return G || (G = !S, oe(), N.list().forEach(([V, T]) => S ? T(S) : V()), N.reset()), S;
  }
  function ke(S, V, T, F) {
    const { scrollBehavior: K } = e;
    if (!En || !K)
      return Promise.resolve();
    const fe = !T && JC(Qd(S.fullPath, 0)) || (F || !T) && history.state && history.state.scroll || null;
    return IC().then(() => K(S, V, fe)).then((W) => W && YC(W)).catch((W) => X(W, S, V));
  }
  const $e = (S) => s.go(S);
  let Fe;
  const R = /* @__PURE__ */ new Set(), B = {
    currentRoute: c,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: f,
    getRoutes: h,
    resolve: v,
    options: e,
    push: b,
    replace: _,
    go: $e,
    back: () => $e(-1),
    forward: () => $e(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: I.add,
    isReady: re,
    install(S) {
      const V = this;
      S.component("RouterLink", jb), S.component("RouterView", Wb), S.config.globalProperties.$router = V, Object.defineProperty(S.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => va(c)
      }), En && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Fe && c.value === Dn && (Fe = !0, b(s.location).catch((K) => {
        ({}).NODE_ENV !== "production" && Y("Unexpected error when starting the router:", K);
      }));
      const T = {};
      for (const K in Dn)
        Object.defineProperty(T, K, {
          get: () => c.value[K],
          enumerable: !0
        });
      S.provide(Lr, V), S.provide(sw, UC(T)), S.provide(vu, c);
      const F = S.unmount;
      R.add(S), S.unmount = function() {
        R.delete(S), R.size < 1 && (u = Dn, se && se(), se = null, c.value = Dn, Fe = !1, G = !1), F();
      }, {}.NODE_ENV !== "production" && En && Yb(S, V, t);
    }
  };
  function j(S) {
    return S.reduce((V, T) => V.then(() => L(T)), Promise.resolve());
  }
  return B;
}
function ak(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((u) => eo(u, l)) ? o.push(l) : n.push(l));
    const c = e.matched[r];
    c && (t.matched.find((u) => eo(u, c)) || s.push(c));
  }
  return [n, o, s];
}
function nt() {
  return ts(Lr);
}
const ik = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), u = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(u / (1e3 * 3600 * 24));
}, rk = (e) => {
  const t = ik(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const Tt = window.Vue.unref, Eo = window.Vue.createVNode, un = window.Vue.createElementVNode, dg = window.Vue.renderSlot, gg = window.Vue.withModifiers, ll = window.Vue.toDisplayString, cl = window.Vue.withCtx, lk = window.Vue.openBlock, ck = window.Vue.createElementBlock, uk = window.Vue.createCommentVNode, dk = { class: "col shrink pe-4" }, gk = { class: "col" }, mk = { class: "cx-translation__details column justify-between ma-0" }, pk = { class: "row ma-0" }, hk = { class: "col grow" }, fk = { class: "col shrink ps-2" }, wk = ["dir", "textContent"], vk = ["dir", "textContent"], _k = ["textContent"], Sk = window.Vuex.useStore, yk = window.Vue.computed, gw = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Cu,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = Sk(), s = (l, c) => {
      const u = o.getters["mediawiki/getPage"](l, c);
      return u == null ? void 0 : u.thumbnail;
    }, a = he(), r = yk(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, c = rk(n.translation.startTimestamp);
      return a.i18n(
        l[c.postfix],
        mw.language.convertNumber(c.value)
      );
    });
    return (l, c) => e.translation ? (lk(), ck("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: c[1] || (c[1] = gg((u) => l.$emit("click"), ["stop"]))
    }, [
      un("div", dk, [
        Eo(Tt(xu), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      un("div", gk, [
        un("div", mk, [
          un("div", pk, [
            un("div", hk, [
              dg(l.$slots, "title")
            ]),
            un("div", fk, [
              Eo(Tt(et), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: c[0] || (c[0] = gg((u) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          dg(l.$slots, "mid-content"),
          Eo(Tt(U), { class: "cx-translation__footer ma-0" }, {
            default: cl(() => [
              Eo(Tt(C), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: cl(() => [
                  un("span", {
                    class: "mw-ui-autonym",
                    dir: Tt(O.getDir)(e.translation.sourceLanguage),
                    textContent: ll(Tt(O.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, wk),
                  Eo(Tt(et), {
                    icon: Tt(k0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  un("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: Tt(O.getDir)(e.translation.targetLanguage),
                    textContent: ll(Tt(O.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, vk)
                ]),
                _: 1
              }),
              Eo(Tt(C), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: cl(() => [
                  un("span", {
                    textContent: ll(r.value)
                  }, null, 8, _k)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : uk("", !0);
  }
};
const Cs = window.Vue.unref, xk = window.Vue.toDisplayString, Ck = window.Vue.normalizeClass, bk = window.Vue.createElementVNode, ul = window.Vue.openBlock, kk = window.Vue.createElementBlock, mg = window.Vue.createCommentVNode, pg = window.Vue.createVNode, Za = window.Vue.withCtx, hg = window.Vue.createBlock, $k = ["lang", "textContent"], Vk = ["lang", "innerHTML"], Ek = window.Vue.computed, Lk = window.Vue.inject, Tk = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: _r,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Lk("colors").gray200, s = Ek(
      () => {
        var c;
        return ((c = t.translation.progress) == null ? void 0 : c.any) * 100 || 0;
      }
    ), a = nt(), { setTranslationURLParams: r } = D(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (c, u) => (ul(), hg(gw, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": Cs(Wh),
      onActionIconClicked: u[0] || (u[0] = (i) => c.$emit("delete-translation")),
      onClick: l
    }, {
      title: Za(() => [
        bk("h5", {
          class: Ck(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: xk(e.translation.sourceTitle)
        }, null, 10, $k),
        e.translation.isLeadSectionTranslation ? mg("", !0) : (ul(), kk("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, Vk))
      ]),
      "mid-content": Za(() => [
        e.translation.progress ? (ul(), hg(Cs(U), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Za(() => [
            pg(Cs(C), null, {
              default: Za(() => [
                pg(Cs(Yh), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: Cs(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : mg("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, Ak = window.Vuex.useStore, pw = [], Dk = (e, t, n) => pw.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), Pk = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  pw.push(o);
}, Bk = () => {
  const e = Ak();
  return (t, n, o) => y(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !Dk(t, n, o) && (s = yield ue.fetchSectionSuggestion(
      t,
      o,
      n
    ), Pk(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, hw = window.Vue.ref, fw = hw(null), Su = hw(null), Fk = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), fw.value = e;
}, Nk = (e) => {
  Su.value = e;
}, Da = () => {
  const e = nt(), t = $r(), { setTranslationURLParams: n } = D();
  return (o, s, a, r, l = null, c = !0) => y(void 0, null, function* () {
    Fk(r), Nk(l);
    const u = yield t(
      s,
      a,
      o
    );
    n(u), c && e.push({ name: "sx-translation-confirmer" });
  });
};
const dl = window.Vue.withModifiers, fg = window.Vue.toDisplayString, wg = window.Vue.createElementVNode, At = window.Vue.unref, so = window.Vue.createVNode, Mk = window.Vue.createTextVNode, ei = window.Vue.openBlock, vg = window.Vue.createElementBlock, _g = window.Vue.createCommentVNode, Sg = window.Vue.createBlock, Lo = window.Vue.withCtx, Uk = ["lang", "href", "textContent"], Ik = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, Rk = {
  key: 2,
  class: "flex"
}, zk = ["innerHTML"], gl = window.Vue.computed, yg = window.Vue.ref, xg = window.Codex.CdxButton, ml = window.Codex.CdxIcon, Ok = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: qu,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = yg(!0), o = yg(null), s = gl(() => {
      var m;
      return (m = o.value) == null ? void 0 : m.missingSections;
    }), a = gl(
      () => s.value && Object.keys(s.value)[0]
    );
    Bk()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((m) => o.value = m).catch((m) => console.log(m)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = D(), c = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, u = Da(), i = (m) => {
      u(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), m && l(m);
    }, d = mw.config.get("wgNamespaceIds"), g = gl(() => new mw.Title(t.translation.targetTitle).getNamespaceId() === d.user);
    return (m, p) => (ei(), Sg(gw, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: c
    }, {
      title: Lo(() => [
        wg("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: p[0] || (p[0] = dl(() => {
          }, ["stop"])),
          textContent: fg(e.translation.sourceTitle)
        }, null, 8, Uk)
      ]),
      "mid-content": Lo(() => [
        so(At(U), { class: "ma-0" }, {
          default: Lo(() => [
            so(At(C), null, {
              default: Lo(() => [
                g.value ? (ei(), vg("div", Ik, [
                  so(At(ml), {
                    icon: At(Ff),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  Mk(" " + fg(m.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : _g("", !0),
                n.value ? (ei(), Sg(At(dt), { key: 1 })) : s.value ? (ei(), vg("div", Rk, [
                  so(At(xg), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: p[1] || (p[1] = dl((h) => i(a.value), ["stop"]))
                  }, {
                    default: Lo(() => [
                      so(At(ml), {
                        class: "me-1",
                        icon: At(Vf)
                      }, null, 8, ["icon"]),
                      wg("span", { innerHTML: a.value }, null, 8, zk)
                    ]),
                    _: 1
                  }),
                  so(At(xg), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": m.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: p[2] || (p[2] = dl((h) => i(null), ["stop"]))
                  }, {
                    default: Lo(() => [
                      so(At(ml), { icon: At(Ru) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : _g("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["translation"]));
  }
}, ww = "cx-translation-session-position-", vw = () => ww + mw.user.sessionId(), jk = () => {
  const e = parseInt(
    mw.storage.get(vw())
  );
  return isNaN(e) ? 0 : e;
}, Hk = function(e) {
  const t = vw();
  mw.storage.set(t, e);
}, qk = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(ww)).forEach((e) => mw.storage.remove(e));
}, Gk = () => {
  const e = jk();
  return e % 10 === 0 && qk(), Hk(e + 1), e;
};
function Wk(e) {
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
    content_translation_session_position: Gk()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : vf(r).then((c) => {
    mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: c,
        user_global_edit_count_bucket: PS(c)
      })
    );
  });
}
const Xk = window.Vuex.useStore, Kk = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], Vt = () => {
  const e = Xk(), { previousRoute: t } = Be(e), n = {
    event_source: { remove: !0 },
    translation_source_language: { remove: !1 },
    translation_target_language: { remove: !1 },
    translation_source_title: { remove: !0 }
  }, o = (s) => {
    for (const [a, { remove: r }] of Object.entries(n))
      if (s[a] === null || s[a] === "") {
        const l = Kk(
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
  return (s) => (s.access_method || (s.access_method = qt ? "desktop" : "mobile web"), o(s), Wk(s));
}, Yk = window.Vuex.useStore, Qk = () => {
  const { commit: e } = Yk(), t = Vt();
  return (n) => y(void 0, null, function* () {
    n.isArticleTranslation ? (yield bt.deleteCXTranslation(
      n
    )) && e("translator/removeCXTranslation", n.translationId) : (yield bt.deleteTranslation(
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
const Jk = window.Vue.resolveDirective, pl = window.Vue.createElementVNode, Zk = window.Vue.withDirectives, hl = window.Vue.unref, Cg = window.Vue.createVNode, bg = window.Vue.withCtx, e8 = window.Vue.openBlock, t8 = window.Vue.createBlock, n8 = { class: "pa-4" }, o8 = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, s8 = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: _r,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Qk(), r = () => {
      a(n.translation), s();
    };
    return (l, c) => {
      const u = Jk("i18n");
      return e8(), t8(hl(kt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: bg(() => [
          pl("div", o8, [
            Cg(hl(Ke), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Cg(hl(Ke), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: bg(() => [
          pl("div", n8, [
            Zk(pl("span", null, null, 512), [
              [u, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function a8(e, t, n) {
  return y(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield i8(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function kg(e, t, n) {
  return y(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(O.sortByAutonym) : (yield a8(e, t, n)).sort(O.sortByAutonym);
  });
}
function i8(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function r8() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function l8(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const c8 = window.Vue.computed;
function u8(e, t) {
  const n = c8(() => {
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
const fl = window.Vue.ref, wl = window.Vue.watch, d8 = window.Vue.computed;
function _w(e, t, n) {
  const o = fl(""), s = fl(-1), a = fl(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = d8(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), c = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return wl(e, () => {
    s.value = -1;
  }), wl(t, () => {
    t.value && l.value.length > 0 && (s.value = 0);
  }), wl(s, () => y(this, null, function* () {
    var u;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (u = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || u.scrollIntoView(!1);
  })), { next: r, prev: c, keyboardNavigationContainer: a, selectedItem: o };
}
function Wu(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const ti = window.Vue.renderSlot, Le = window.Vue.unref, g8 = window.Vue.isRef, $g = window.Vue.createVNode, bs = window.Vue.withModifiers, ks = window.Vue.withKeys, Pn = window.Vue.createElementVNode, m8 = window.Vue.resolveDirective, ni = window.Vue.withDirectives, vl = window.Vue.renderList, _l = window.Vue.Fragment, dn = window.Vue.openBlock, gn = window.Vue.createElementBlock, Vg = window.Vue.toDisplayString, oi = window.Vue.normalizeClass, Sl = window.Vue.createCommentVNode, p8 = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, h8 = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, f8 = { class: "results px-3 pt-4" }, w8 = { class: "results-header ps-8 pb-2" }, v8 = { class: "results-languages--suggestions pa-0 ma-0" }, _8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], S8 = { class: "results px-3 pt-4" }, y8 = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, x8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], C8 = ["aria-selected"], b8 = { class: "no-results px-3 py-4" }, k8 = { class: "ps-8" }, si = window.Vue.ref, $8 = window.Vue.watch, V8 = window.Vue.onMounted, Eg = window.Vue.computed, Sw = {
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
      default: r8
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = si(null), a = si(""), r = si([]), l = si(n.suggestions), c = Eg(
      () => l8(r.value)
    ), u = Eg(() => {
      const b = r.value.length;
      return b < 10 ? "few-results" : b < 30 ? "some-results" : "many-results";
    }), i = (b) => o("select", b), d = () => o("close"), { autocompletion: g, onTabSelect: m } = u8(
      a,
      r
    ), { next: p, prev: h, keyboardNavigationContainer: f, selectedItem: v } = _w(a, r, l), w = () => {
      if (a.value && n.languages.includes(a.value)) {
        i(a.value);
        return;
      }
      if (v.value) {
        i(v.value);
        return;
      }
      if (r.value.length === 1) {
        i(r.value[0]);
        return;
      }
    };
    return $8(a, Wu(() => y(this, null, function* () {
      r.value = yield kg(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), V8(() => y(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield kg(
        n.languages,
        "",
        n.searchAPI
      );
    })), (b, _) => {
      const k = m8("i18n");
      return dn(), gn("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        ti(b.$slots, "search", {}, () => [
          Pn("div", p8, [
            $g(Le(cu), {
              value: Le(g),
              "onUpdate:value": _[0] || (_[0] = (E) => g8(g) ? g.value = E : null),
              icon: Le(gd),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            $g(Le(cu), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": _[1] || (_[1] = (E) => a.value = E),
              class: "mw-ui-language-selector__search pa-4",
              icon: Le(gd),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                ks(bs(w, ["prevent"]), ["enter"]),
                ks(bs(Le(p), ["stop", "prevent"]), ["down"]),
                ks(bs(Le(h), ["stop", "prevent"]), ["up"]),
                ks(bs(d, ["prevent"]), ["esc"]),
                ks(bs(Le(m), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        Pn("section", h8, [
          e.suggestions.length && !a.value ? ti(b.$slots, "suggestions", { key: 0 }, () => [
            Pn("section", f8, [
              ni(Pn("p", w8, null, 512), [
                [k, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Pn("ul", v8, [
                (dn(!0), gn(_l, null, vl(e.suggestions, (E) => (dn(), gn("li", {
                  key: E,
                  class: oi(["language ma-0", { "language--selected": E === Le(v) }]),
                  lang: E,
                  dir: Le(O.getDir)(E),
                  "aria-selected": E === Le(v) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (M) => i(E),
                  textContent: Vg(Le(O.getAutonym)(E))
                }, null, 10, _8))), 128))
              ])
            ])
          ]) : Sl("", !0),
          c.value.length ? ti(b.$slots, "search", { key: 1 }, () => [
            Pn("section", S8, [
              e.suggestions.length && !a.value ? ni((dn(), gn("p", y8, null, 512)), [
                [k, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Sl("", !0),
              (dn(!0), gn(_l, null, vl(c.value, (E, M) => (dn(), gn("ul", {
                key: M,
                class: oi(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (dn(!0), gn(_l, null, vl(E, (L) => (dn(), gn("li", {
                  key: L,
                  class: oi(["language ma-0", { "language--selected": L === Le(v) }]),
                  lang: L,
                  dir: Le(O.getDir)(L),
                  role: "option",
                  "aria-selected": L === Le(v) || null,
                  tabindex: "-1",
                  onClick: (P) => i(L),
                  textContent: Vg(Le(O.getAutonym)(L))
                }, null, 10, x8))), 128)),
                e.allOptionEnabled && !a.value ? ni((dn(), gn("li", {
                  key: 0,
                  class: oi(["language ma-0", { "language--selected": Le(v) === "all" }]),
                  role: "option",
                  "aria-selected": Le(v) === "all" || null,
                  tabindex: "-1",
                  onClick: _[2] || (_[2] = (L) => i("all"))
                }, null, 10, C8)), [
                  [k, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Sl("", !0)
              ], 2))), 128))
            ])
          ]) : ti(b.$slots, "noresults", { key: 2 }, () => [
            Pn("section", b8, [
              ni(Pn("h3", k8, null, 512), [
                [k, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const E8 = window.Vue.resolveDirective, Lg = window.Vue.withDirectives, $s = window.Vue.openBlock, Vs = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Te = window.Vue.unref, Tg = window.Vue.toDisplayString, Dt = window.Vue.createVNode, Ag = window.Vue.withModifiers, ao = window.Vue.withCtx, L8 = window.Vue.normalizeClass, T8 = {
  key: 0,
  class: "mw-ui-autonym"
}, A8 = ["lang", "dir", "textContent"], D8 = {
  key: 0,
  class: "mw-ui-autonym"
}, P8 = ["lang", "dir", "textContent"], Es = window.Vue.computed, B8 = window.Vue.inject, F8 = window.Vue.ref, Dg = window.Codex.CdxButton, yl = window.Codex.CdxIcon, hr = {
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
    const n = e, o = t, s = B8("breakpoints"), a = Es(() => s.value.mobile), r = F8(null), l = Es(() => !!r.value), c = () => r.value = "source", u = () => r.value = "target", i = () => r.value = null, d = Es(() => {
      if (!l.value)
        return;
      const f = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[r.value];
      return n[f];
    }), g = (h) => {
      const v = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[r.value];
      i(), o(v, h);
    }, m = Es(
      () => n.selectedSourceLanguage === "all"
    ), p = Es(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const v = E8("i18n");
      return $s(), Vs("div", {
        class: L8(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        Dt(Te(U), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: ao(() => [
            Dt(Te(C), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: ao(() => [
                Dt(Te(Dg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Ag(c, ["stop"])
                }, {
                  default: ao(() => [
                    m.value ? Lg(($s(), Vs("span", T8, null, 512)), [
                      [v, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : ($s(), Vs("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Te(O.getDir)(e.selectedSourceLanguage),
                      textContent: Tg(Te(O.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, A8)),
                    Dt(Te(yl), {
                      size: "x-small",
                      icon: Te(du)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            Dt(Te(C), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: ao(() => [
                Dt(Te(yl), { icon: Te(Ef) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Dt(Te(C), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: ao(() => [
                Dt(Te(Dg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Ag(u, ["stop"])
                }, {
                  default: ao(() => [
                    p.value ? Lg(($s(), Vs("span", D8, null, 512)), [
                      [v, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : ($s(), Vs("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Te(O.getDir)(e.selectedTargetLanguage),
                      textContent: Tg(Te(O.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, P8)),
                    Dt(Te(yl), {
                      size: "x-small",
                      icon: Te(du)
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
        Dt(Te(kt), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (w) => l.value = w),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: ao(() => [
            Dt(Te(Sw), {
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
const Pg = window.Vue.unref, N8 = window.Vue.createVNode, ai = window.Vue.createElementVNode, Bg = window.Vue.toDisplayString, M8 = window.Vue.openBlock, U8 = window.Vue.createElementBlock, I8 = { class: "cx-list-empty-placeholder pa-4" }, R8 = { class: "cx-list-empty-placeholder__icon-container" }, z8 = { class: "cx-list-empty-placeholder__icon" }, O8 = ["textContent"], j8 = ["textContent"], H8 = window.Codex.CdxIcon, yw = {
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
    return (t, n) => (M8(), U8("div", I8, [
      ai("div", R8, [
        ai("div", z8, [
          N8(Pg(H8), { icon: Pg(Pf) }, null, 8, ["icon"])
        ])
      ]),
      ai("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: Bg(e.title)
      }, null, 8, O8),
      ai("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: Bg(e.description)
      }, null, 8, j8)
    ]));
  }
}, q8 = window.Vuex.useStore, G8 = window.Vue.ref, ii = G8({ draft: !1, published: !1 }), us = () => {
  const e = q8(), t = as(), n = (s) => y(void 0, null, function* () {
    let a = yield bt.fetchTranslations(s);
    e.commit("translator/clearTranslationsByStatus", s), a.forEach(
      (l) => e.commit("translator/addTranslation", l)
    );
    const r = {};
    for (const l of a) {
      const c = l.sourceLanguage;
      r[c] = r[c] || [], r[c].push(l);
    }
    ii.value[s] = !0;
    for (const [l, c] of Object.entries(r))
      t(
        l,
        c.map((u) => u.sourceTitle)
      ), c.forEach((u) => {
        const { targetLanguage: i, targetTitle: d } = u, g = !!e.getters["mediawiki/getPage"](
          i,
          d
        );
        d && !g && e.commit(
          "mediawiki/addPage",
          new ss({ title: d, pagelanguage: i })
        );
      });
  });
  return {
    fetchTranslationsByStatus: n,
    fetchAllTranslations: () => {
      const a = Object.keys(ii.value).filter(
        (r) => !ii.value[r]
      ).map(
        (r) => n(r)
      );
      return Promise.all(a).catch((r) => {
        mw.log.error("[CX] Error while fetching translations", r);
      });
    },
    translationsFetched: ii
  };
};
const W8 = window.Vue.toDisplayString, xl = window.Vue.normalizeClass, Fg = window.Vue.createElementVNode, Xt = window.Vue.openBlock, To = window.Vue.createBlock, ri = window.Vue.createCommentVNode, Ng = window.Vue.unref, Mg = window.Vue.renderList, Ug = window.Vue.Fragment, li = window.Vue.createElementBlock, X8 = window.Vue.createVNode, Ig = window.Vue.withCtx, K8 = ["textContent"], Y8 = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Q8 = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, ci = window.Vue.ref, Pt = window.Vue.computed, J8 = window.Vue.inject, Z8 = window.Vuex.useStore, Rg = {
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
    const t = e, n = ci("all"), o = ci("all"), s = Z8(), { translationsFetched: a } = us(), r = Pt(
      () => a.value[t.translationStatus]
    ), l = ci(!1), c = ci(null), u = Pt(
      () => t.translationStatus === "draft"
    ), i = Pt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), d = Pt(
      () => n.value === "all"
    ), g = Pt(
      () => o.value === "all"
    ), m = Pt(
      () => i.value.filter(
        (_) => (d.value || _.sourceLanguage === n.value) && (g.value || _.targetLanguage === o.value)
      ).sort((_, k) => _.lastUpdatedTimestamp < k.lastUpdatedTimestamp)
    ), p = Pt(() => {
      const _ = i.value.map(
        (k) => k.targetLanguage
      );
      return [...new Set(_)];
    }), h = Pt(() => {
      const _ = i.value.map(
        (k) => k.sourceLanguage
      );
      return [...new Set(_)];
    }), f = (_) => {
      c.value = _, l.value = !0;
    }, v = Pt(() => t.activeStatus === t.translationStatus), w = J8("breakpoints"), x = Pt(() => w.value.mobile), b = Pt(
      () => x.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (_, k) => v.value ? (Xt(), To(Ng(Ze), {
      key: 0,
      class: xl(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: Ig(() => [
        Fg("div", {
          class: xl(["cx-translation-list__header", b.value])
        }, [
          Fg("h3", {
            class: xl(["px-4 mw-ui-card__title mb-0", { "pb-4": x.value }]),
            textContent: W8(_.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, K8),
          m.value.length ? (Xt(), To(hr, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": k[0] || (k[0] = (E) => n.value = E),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": k[1] || (k[1] = (E) => o.value = E),
            "source-languages": h.value,
            "target-languages": p.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : ri("", !0)
        ], 2)
      ]),
      default: Ig(() => [
        r.value && !m.value.length ? (Xt(), To(yw, {
          key: 0,
          title: _.$i18n("cx-sx-translation-list-empty-title"),
          description: _.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : ri("", !0),
        r.value ? ri("", !0) : (Xt(), To(Ng(dt), { key: 1 })),
        u.value ? (Xt(), li("div", Y8, [
          (Xt(!0), li(Ug, null, Mg(m.value, (E) => (Xt(), To(Tk, {
            key: `${e.translationStatus}-${E.key}`,
            translation: E,
            onDeleteTranslation: (M) => f(E)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Xt(), li("div", Q8, [
          (Xt(!0), li(Ug, null, Mg(m.value, (E) => (Xt(), To(Ok, {
            key: `${e.translationStatus}-${E.key}`,
            translation: E
          }, null, 8, ["translation"]))), 128))
        ])),
        X8(s8, {
          modelValue: l.value,
          "onUpdate:modelValue": k[2] || (k[2] = (E) => l.value = E),
          translation: c.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : ri("", !0);
  }
};
const Cl = window.Vue.toDisplayString, dr = window.Vue.createElementVNode, bl = window.Vue.unref, Ls = window.Vue.openBlock, kl = window.Vue.createBlock, zg = window.Vue.createCommentVNode, e2 = window.Vue.Fragment, Og = window.Vue.createElementBlock, t2 = window.Vue.withKeys, n2 = window.Vue.withCtx, o2 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, s2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, a2 = /* @__PURE__ */ dr("span", null, "/", -1), i2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, jg = window.Codex.CdxIcon, r2 = window.Codex.CdxInfoChip, ui = window.Vue.computed, vo = {
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
    const t = e, n = ui(() => t.content.lastIndexOf("/")), o = ui(() => t.content.slice(0, n.value)), s = ui(() => t.content.slice(n.value + 1)), a = ui(
      () => t.expanded ? cx : du
    );
    return (r, l) => (Ls(), kl(bl(r2), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = t2((c) => r.$emit("click"), ["enter"]))
    }, {
      default: n2(() => [
        n.value === -1 ? (Ls(), Og(e2, { key: 0 }, [
          dr("span", null, Cl(e.content), 1),
          e.expandable ? (Ls(), kl(bl(jg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : zg("", !0)
        ], 64)) : (Ls(), Og("div", o2, [
          dr("span", s2, Cl(o.value), 1),
          a2,
          dr("span", i2, Cl(s.value), 1),
          e.expandable ? (Ls(), kl(bl(jg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : zg("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const Se = window.Vue.unref, Bt = window.Vue.createVNode, Bn = window.Vue.createElementVNode, Ts = window.Vue.toDisplayString, ht = window.Vue.withCtx, l2 = window.Vue.resolveDirective, $l = window.Vue.withDirectives, Fn = window.Vue.openBlock, Ao = window.Vue.createBlock, io = window.Vue.createCommentVNode, Hg = window.Vue.createElementBlock, qg = window.Vue.withModifiers, c2 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, u2 = { class: "col shrink pe-4" }, d2 = ["lang", "dir", "textContent"], g2 = ["lang", "dir", "textContent"], m2 = { class: "cx-suggestion__missing-sections" }, p2 = {
  key: 0,
  class: "cx-suggestion__easy-sections ms-1"
}, h2 = ["textContent"], f2 = ["textContent"], Vl = window.Codex.CdxIcon, Ne = window.Vue.computed, w2 = window.Vue.inject, v2 = window.Vuex.useStore, yu = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [Jn, nn, es],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = v2(), o = Ne(() => t.suggestion), s = Ne(
      () => o.value.sourceTitle || o.value.title
    ), a = Ne(
      () => n.getters["mediawiki/getPage"](
        o.value.sourceLanguage,
        s.value
      )
    ), r = Ne(
      () => {
        var _;
        return (_ = o.value) == null ? void 0 : _.missingSectionsCount;
      }
    ), l = Ne(() => !(o.value instanceof nn) || !o.value.orderedMissingSections ? 0 : o.value.orderedMissingSections.filter((_) => {
      const k = o.value.getSectionSize(_.sourceTitle);
      return xf(k);
    }).length), c = he(), u = Ne(() => {
      const _ = c.i18n(
        "cx-sx-translation-suggestion-easy-sections",
        [l.value]
      );
      return c.i18n("parentheses", [_]);
    }), i = Ne(() => {
      var _;
      return (_ = a.value) == null ? void 0 : _.description;
    }), d = Ne(
      () => o.value instanceof nn
    );
    Ne(
      () => o.value instanceof Jn
    );
    const g = Ne(
      () => o.value instanceof es
    ), m = Ne(
      () => O.getAutonym(o.value.sourceLanguage)
    ), p = Ne(
      () => O.getAutonym(o.value.targetLanguage)
    ), h = Ne(
      () => g.value ? Tf : Af
    ), f = w2("colors"), v = Ne(
      () => g.value ? f.blue600 : "currentColor"
    ), w = Ne(
      () => o.value instanceof ff || o.value instanceof wf
    ), x = Ne(
      () => w.value && !o.value.collectionMatchesProvider()
    ), b = Ne(() => x.value || d.value ? !1 : qt ? FS(o.value.size) : NS(o.value.leadSectionSize));
    return (_, k) => {
      const E = l2("i18n");
      return o.value ? (Fn(), Hg("div", c2, [
        Bn("div", u2, [
          Bt(Se(xu), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        Bt(Se(U), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: ht(() => [
            Bt(Se(U), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: ht(() => [
                Bt(Se(C), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: ht(() => [
                    Bn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: o.value.sourceLanguage,
                      dir: Se(O.getDir)(o.value.sourceLanguage),
                      textContent: Ts(s.value)
                    }, null, 8, d2)
                  ]),
                  _: 1
                }),
                Bt(Se(C), { shrink: "" }, {
                  default: ht(() => [
                    Bn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: o.value.sourceLanguage,
                      dir: Se(O.getDir)(o.value.sourceLanguage),
                      textContent: Ts(i.value)
                    }, null, 8, g2)
                  ]),
                  _: 1
                }),
                b.value ? (Fn(), Ao(Se(C), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: ht(() => [
                    $l(Bn("small", null, null, 512), [
                      [E, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : io("", !0),
                d.value ? (Fn(), Ao(Se(C), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom",
                  shrink: ""
                }, {
                  default: ht(() => [
                    $l(Bn("small", m2, null, 512), [
                      [E, [r.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (Fn(), Hg("small", p2, Ts(u.value), 1)) : io("", !0)
                  ]),
                  _: 1
                })) : g.value ? (Fn(), Ao(Se(C), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: ht(() => [
                    Bt(Se(U), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: ht(() => [
                        Bt(Se(C), { grow: "" }, {
                          default: ht(() => [
                            Bn("small", {
                              textContent: Ts(m.value)
                            }, null, 8, h2),
                            Bt(Se(Vl), {
                              icon: Se(Ef),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            Bn("small", {
                              textContent: Ts(p.value)
                            }, null, 8, f2)
                          ]),
                          _: 1
                        }),
                        r.value ? (Fn(), Ao(Se(C), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: ht(() => [
                            $l(Bn("small", null, null, 512), [
                              [E, [
                                r.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : io("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : io("", !0),
                x.value ? (Fn(), Ao(Se(C), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: ht(() => [
                    Bt(vo, {
                      icon: Se(Uu),
                      content: o.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : io("", !0)
              ]),
              _: 1
            }),
            Bt(Se(C), { shrink: "" }, {
              default: ht(() => [
                g.value ? io("", !0) : (Fn(), Ao(Se(Vl), {
                  key: 0,
                  icon: Se(ls),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: k[0] || (k[0] = qg((M) => _.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                Bt(Se(Vl), {
                  class: "cx-suggestion__favorite-button",
                  icon: h.value,
                  "icon-color": v.value,
                  onClick: k[1] || (k[1] = qg((M) => _.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : io("", !0);
    };
  }
};
const El = window.Vue.normalizeClass, Gg = window.Vue.createVNode, _2 = window.Vue.renderList, Wg = window.Vue.Fragment, As = window.Vue.openBlock, di = window.Vue.createElementBlock, S2 = window.Vue.createBlock, y2 = window.Vue.toDisplayString, x2 = window.Vue.withKeys, Xg = window.Vue.createCommentVNode, C2 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, gi = window.Vue.computed, b2 = window.Vue.ref, k2 = window.Vue.watchEffect, $2 = {
  __name: "SuggestionFilterChip",
  props: {
    filter: {
      type: xt,
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
    const n = e, o = gi(
      () => n.isSelected(n.filter) || n.filter.subFilters.some((g) => n.isSelected(g))
    ), s = b2(!1);
    k2(() => {
      n.filter.expandable && (s.value = o.value);
    });
    const a = t, r = () => {
      n.filter.expandable && o.value ? s.value = !s.value : a("filter-selected", n.filter);
    }, l = gi(() => {
      const g = n.filter.subFilters.find(
        (p) => n.isSelected(p)
      );
      let m = n.filter.chipLabel;
      return g && (m += `/${c(g)}`), m;
    }), c = (g) => {
      const { label: m } = g, p = n.filter.label;
      return m.startsWith(`${p}/`) ? m.replace(`${p}/`, "") : m;
    }, u = gi(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), i = gi(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && s.value
    ), d = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, m) => (As(), di(Wg, null, [
      Gg(vo, {
        class: El(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": o.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: s.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      s.value ? (As(), di("div", C2, [
        Gg(vo, {
          class: El(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: m[0] || (m[0] = (p) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (As(!0), di(Wg, null, _2(u.value, (p) => (As(), S2(vo, {
          key: p.id,
          class: El(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(p)
          }]),
          content: c(p),
          icon: p.icon,
          onClick: (h) => g.$emit("filter-selected", p)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        i.value ? (As(), di("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: d,
          onKeyup: x2(d, ["enter"])
        }, y2(e.viewMoreConfig.label), 33)) : Xg("", !0)
      ])) : Xg("", !0)
    ], 64));
  }
};
const V2 = window.Vue.toDisplayString, Kg = window.Vue.createElementVNode, E2 = window.Vue.renderList, Yg = window.Vue.Fragment, Ll = window.Vue.openBlock, Qg = window.Vue.createElementBlock, L2 = window.Vue.createBlock, T2 = { class: "sx-suggestions-filters__group-label mb-3" }, A2 = { class: "sx-suggestions-filters__group-filters mb-3" }, D2 = {
  __name: "SXSuggestionsFiltersDialogTabGroupContent",
  props: {
    filterGroup: {
      type: wa,
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
    return (o, s) => (Ll(), Qg(Yg, null, [
      Kg("div", T2, V2(e.filterGroup.label), 1),
      Kg("div", A2, [
        (Ll(!0), Qg(Yg, null, E2(n(), (a) => (Ll(), L2($2, {
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
}, xw = () => {
  const { featureCollectionPromise: e, featuredCollection: t } = rs();
  function n(o) {
    return y(this, null, function* () {
      var a;
      return !o || !Array.isArray(o) || o.length === 0 ? {} : (yield e, (a = t.value) != null && a.name ? yield ue.fetchPageCollectionMembership(
        t.value.name,
        o
      ) : {});
    });
  }
  return {
    inFeaturedCollection: n
  };
}, Jg = window.Vue.computed, P2 = window.Vue.inject, Zg = window.Vue.ref, em = window.Vue.watch, Cw = (e, t) => {
  const o = Zg([]), s = Zg(!1), a = Jg(
    () => o.value.slice(0, 4)
  ), r = P2("breakpoints"), l = Jg(() => r.value.mobile), { inFeaturedCollection: c } = xw(), u = (g) => y(void 0, null, function* () {
    const m = g.map((h) => h.wikidataId).filter(Boolean), p = yield c(m);
    g.forEach((h) => {
      h.wikidataId && (h.inFeaturedCollection = p[h.wikidataId]);
    });
  }), i = Wu(() => y(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      const g = yield So.searchPagesByTitlePrefix(
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
  return em(t, d), em(e, d), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
class mi {
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
const Tl = window.Vue.ref, tm = window.Vue.watch, nm = window.Vue.computed, { topics: B2, regions: F2 } = mw.loader.require(
  "ext.cx.articlefilters"
), N2 = B2.flatMap(
  (e) => e.topics.map((t) => Ye(de({}, t), {
    groupId: e.groupId
  }))
), M2 = () => {
  const e = Tl(""), t = Tl("all"), n = Tl({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = he(), { pageCollectionGroups: s } = Mu(), { sourceLanguageURLParameter: a } = D(), r = (m) => (m = m.toLowerCase(), N2.filter(
    (p) => p.label.toLowerCase().includes(m)
  )), l = (m) => (m = m.toLowerCase(), Object.values(s.value).flat().filter(
    (h) => h.name.toLowerCase().includes(m)
  )), c = (m) => (m = m.toLowerCase(), F2.flatMap((p) => [p, ...p.countries]).filter(
    (p) => p.label.toLowerCase().includes(m)
  ).map((p) => ({
    label: p.label,
    id: p.id
  }))), u = nm(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: d } = Cw(
    a,
    u
  );
  tm(i, () => {
    n.value.topics = i.value.map(
      (m) => {
        var p;
        return new mi({
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
  }), tm([e, t], () => y(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (m) => new mi({
        label: m.label,
        value: m.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? gu : null,
        filterType: tt,
        filterId: m.topicId
      })
    ), n.value.collections = l(
      e.value
    ).map(
      (m) => new mi({
        label: m.name,
        value: m.name,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          m.articlesCount
        ),
        icon: t.value === "all" ? Uu : null,
        filterType: te,
        filterId: m.name
      })
    ), n.value.regions = c(e.value).map(
      (m) => new mi({
        label: m.label,
        value: m.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? gu : null,
        filterType: Pe,
        filterId: m.id
      })
    );
  }));
  const g = nm(() => {
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
}, U2 = "suggestion_filter_topic_area", I2 = "suggestion_filter_search_result_seed", R2 = "suggestion_filter_collections", z2 = "suggestion_filter_previous_edits", O2 = "suggestion_filter_popular_articles", j2 = "suggestion_filter_region", Al = (e) => {
  if (e.type === tt || e.type === Pe || e.type === te || e.type === Gt)
    return e.id;
  if (e.id === te)
    return "all-collections";
}, Dl = (e) => {
  if (e.type === tt)
    return U2;
  if (e.type === Pe)
    return j2;
  if (e.type === Gt)
    return I2;
  if (e.id === te || e.type === te)
    return R2;
  if (e.id === sn)
    return z2;
  if (e.id === an)
    return O2;
}, bw = () => {
  const e = Vt();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: Dl(r),
      event_context: Al(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: Dl(r),
      event_context: Al(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: Dl(r),
      event_context: Al(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const Ce = window.Vue.unref, ft = window.Vue.createVNode, Ft = window.Vue.withCtx, H2 = window.Vue.resolveDirective, Kt = window.Vue.createElementVNode, Do = window.Vue.withDirectives, om = window.Vue.toDisplayString, q2 = window.Vue.createTextVNode, G2 = window.Vue.vShow, sm = window.Vue.isRef, am = window.Vue.renderList, im = window.Vue.Fragment, mn = window.Vue.openBlock, ro = window.Vue.createElementBlock, W2 = window.Vue.withKeys, rm = window.Vue.createCommentVNode, lm = window.Vue.createBlock, X2 = { class: "sx-suggestions-filters" }, K2 = { class: "mb-0" }, Y2 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, Q2 = { class: "mb-3" }, J2 = { class: "px-4 pb-4 pt-7" }, Z2 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, e$ = ["onKeyup", "onClick"], t$ = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, n$ = { class: "sx-suggestions-filters__search-results-pending" }, o$ = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, s$ = { class: "sx-suggestions-filters__search-results-empty-primary" }, a$ = { class: "sx-suggestions-filters__search-results-empty-secondary" }, pi = window.Vue.ref, lo = window.Vue.computed, i$ = window.Vue.inject, r$ = window.Vue.watch, cm = window.Codex.CdxButton, l$ = window.Codex.CdxIcon, c$ = window.Codex.CdxTextInput, u$ = window.Codex.CdxMenu, d$ = window.Codex.CdxTabs, g$ = window.Codex.CdxTab, m$ = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = he(), o = t, s = lo(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: m([
          We,
          te,
          Pe,
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
        filterGroups: m([Pe])
      },
      {
        name: "topics",
        label: n.i18n("cx-sx-suggestions-filters-tab-topics"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-topics"
        ),
        filterGroups: m([tt])
      }
    ]), a = (R) => Q.value = R, r = lo(
      () => s.value.find((R) => R.name === Q.value)
    ), l = (R, B) => B === "all" && R.type === Pe ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          R.label
        ),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, c = (R, B) => {
      if (R !== "all")
        return !1;
      if (B === te) {
        const j = m([te]);
        return j.length && j[0].filters.length > 6;
      }
      return B === Pe;
    }, { allFilters: u, isFilterSelected: i, selectFilter: d, findSelectedFilter: g } = Aa(), m = (R) => R.flatMap((B) => u.value.filter((j) => j.type === B)).filter(Boolean), p = () => {
      k(), o("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: h,
      logSuggestionFiltersConfirm: f,
      logSuggestionFiltersSelect: v
    } = bw(), w = () => {
      h(), p();
    }, x = () => {
      _.value && (f(_.value), d(_.value)), p();
    }, b = pi(!1), _ = pi(null), k = () => {
      _.value = null, b.value = !1;
    }, E = (R) => {
      v(R), _.value = R, b.value = !0;
    }, M = (R) => _.value ? _.value.id === R.id && _.value.type === R.type : i(R), L = i$("breakpoints"), P = lo(() => L.value.mobile), { searchInput: z, searchScope: Q, searchResults: se, searchResultsLoading: oe } = M2(), N = lo(
      () => _.value || g()
    ), I = pi(null);
    r$(I, () => {
      if (!I.value)
        return;
      const R = X.value.find(
        (B) => B.value === I.value
      );
      E({
        type: R.filterType,
        id: R.filterId,
        label: R.label
      }), z.value = "";
    });
    const G = {
      [te]: "cx-sx-suggestions-filters-view-all-collections-group",
      [Pe]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, X = lo(
      () => se.value.flatMap((R) => R.items)
    ), re = pi({}), xe = lo(
      () => re.value[Q.value]
    ), ke = lo(() => {
      var B;
      const R = (B = xe.value) == null ? void 0 : B.getHighlightedMenuItem();
      return R == null ? void 0 : R.id;
    }), $e = (R) => {
      R.key !== " " && xe.value && xe.value.delegateKeyNavigation(R);
    }, Fe = (R, B) => {
      re.value[B] = R;
    };
    return (R, B) => {
      const j = H2("i18n");
      return mn(), lm(Ce(kt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: P.value,
        header: !1
      }, {
        default: Ft(() => [
          Kt("section", X2, [
            ft(Ce(U), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Ft(() => [
                ft(Ce(C), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Ft(() => [
                    ft(Ce(cm), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": R.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: w
                    }, {
                      default: Ft(() => [
                        ft(Ce(l$), { icon: Ce(ls) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                ft(Ce(C), {
                  grow: "",
                  align: "center"
                }, {
                  default: Ft(() => [
                    Do(Kt("h5", K2, null, 512), [
                      [j, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                ft(Ce(C), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Ft(() => [
                    Do(ft(Ce(cm), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: x
                    }, {
                      default: Ft(() => [
                        q2(om(R.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [G2, b.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Kt("div", Y2, [
              Do(Kt("h5", Q2, null, 512), [
                [j, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Kt("div", null, [
                ft(vo, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: N.value.label,
                  icon: N.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            Kt("div", J2, [
              ft(Ce(c$), {
                modelValue: Ce(z),
                "onUpdate:modelValue": B[0] || (B[0] = (S) => sm(z) ? z.value = S : null),
                role: "combobox",
                "aria-activedescendant": ke.value,
                "aria-controls": "sx-suggestions-filters__search-results__menu",
                "aria-autocomplete": "none",
                placeholder: r.value.searchPlaceholder,
                "input-type": "search",
                "start-icon": Ce(gu),
                clearable: !!Ce(z),
                onKeydown: $e
              }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
            ]),
            ft(Ce(d$), {
              active: Ce(Q),
              "onUpdate:active": [
                B[2] || (B[2] = (S) => sm(Q) ? Q.value = S : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Ft(() => [
                (mn(!0), ro(im, null, am(s.value, (S, V) => (mn(), lm(Ce(g$), {
                  key: V,
                  name: S.name,
                  label: S.label
                }, {
                  default: Ft(() => [
                    Ce(z) ? (mn(), ro("div", t$, [
                      ft(Ce(u$), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (T) => Fe(T, S.name),
                        selected: I.value,
                        "onUpdate:selected": B[1] || (B[1] = (T) => I.value = T),
                        "show-pending": Ce(oe),
                        expanded: "",
                        "menu-items": X.value
                      }, {
                        pending: Ft(() => [
                          Do(Kt("div", n$, null, 512), [
                            [j, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Ft(() => [
                          Ce(oe) ? rm("", !0) : (mn(), ro("div", o$, [
                            Do(Kt("span", s$, null, 512), [
                              [j, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            Do(Kt("span", a$, null, 512), [
                              [j, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (mn(), ro("div", Z2, [
                      (mn(!0), ro(im, null, am(S.filterGroups, (T) => (mn(), ro("div", {
                        key: T.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        ft(D2, {
                          "filter-group": T,
                          "tentatively-select-filter": E,
                          "is-selected": M,
                          limit: c(S.name, T.type) ? 4 : 0,
                          "get-sub-filter-config": (F) => l(F, S.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        c(S.name, T.type) ? (mn(), ro("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: W2((F) => a(T.id), ["enter"]),
                          onClick: (F) => a(T.id)
                        }, [
                          Kt("span", null, om(R.$i18n(G[T.id])), 1)
                        ], 40, e$)) : rm("", !0)
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
const Ds = window.Vue.unref, hi = window.Vue.openBlock, um = window.Vue.createBlock;
window.Vue.createCommentVNode;
const p$ = window.Vue.renderList, h$ = window.Vue.Fragment, dm = window.Vue.createElementBlock, f$ = window.Vue.normalizeClass, gm = window.Vue.createVNode, w$ = {
  key: 1,
  class: "cx-suggestion-list__filters flex mx-4 pb-2"
}, mm = window.Vue.ref, pm = window.Vue.watch, v$ = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = he(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: o } = bw(), { targetLanguageURLParameter: s } = D(), {
      getFiltersSummary: a,
      selectFilter: r,
      isFilterSelected: l,
      waitingForPageCollectionsFetch: c,
      validateURLFilterWithCollections: u,
      setFeaturedCollectionFilterIfNeeded: i
    } = Aa(), { initializeFeaturedCollectionWatcher: d } = rs();
    d();
    const g = mm(!1), m = () => {
      o(), g.value = !0;
    }, p = (f) => {
      n(f), r(f);
    }, h = mm(a());
    return pm(g, (f) => {
      f || (h.value = a());
    }), pm([c, s], ([f]) => {
      f || (u(), i(), h.value = a());
    }), (f, v) => Ds(c) ? (hi(), um(Ds(dt), { key: 0 })) : (hi(), dm("div", w$, [
      (hi(!0), dm(h$, null, p$(h.value, (w) => (hi(), um(vo, {
        key: w.label,
        class: f$(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": Ds(l)(w)
        }]),
        icon: w.icon,
        content: w.label,
        onClick: (x) => p(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      gm(vo, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: Ds(Ru),
        content: Ds(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: m
      }, null, 8, ["icon", "content"]),
      gm(m$, {
        modelValue: g.value,
        "onUpdate:modelValue": v[0] || (v[0] = (w) => g.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, Po = window.Vue.computed, hm = window.Vue.ref, Pl = window.Vue.watch, _$ = window.Vuex.useStore, S$ = () => {
  const e = _$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = kr(), r = Vt(), l = Po(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), c = Po(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), u = hm(0), i = hm(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, g = 4, m = Po(
    () => a(u.value)
  );
  Pl(
    m,
    () => {
      m.value.forEach((z) => {
        z.seen = !0;
      });
    },
    { deep: !0 }
  );
  const p = Po(
    () => s(i.value)
  );
  Pl(
    p,
    () => {
      p.value.forEach((z) => {
        z.seen = !0;
      });
    },
    { deep: !0 }
  );
  const h = () => {
    _(), L(), k(), P();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: v
  } = ju(), w = (z) => z.length === d, x = Po(
    () => w(p.value)
  ), b = Po(
    () => w(m.value)
  ), _ = () => {
    const z = (u.value + 1) % g, Q = w(
      a(z)
    );
    (!b.value || !Q) && f();
  }, k = () => {
    const z = (i.value + 1) % g, Q = w(
      s(z)
    );
    (!x.value || !Q) && v();
  }, E = (z) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", z), _();
  }, M = (z) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", z), k();
  }, L = () => u.value = (u.value + 1) % g, P = () => i.value = (i.value + 1) % g;
  return Pl(
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
    isCurrentPageSuggestionsSliceFull: x,
    isCurrentSectionSuggestionsSliceFull: b
  };
}, y$ = window.Vuex.useStore, Xu = () => {
  const e = y$(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = ju(), o = (u, i, d) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === u && g.targetLanguage === i && g.sourceTitle === d
  ), s = (u) => y(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: d, targetLanguage: g } = u;
    yield ue.markFavorite(i, d, g);
    const m = new es({
      title: i,
      sourceLanguage: d,
      targetLanguage: g
    });
    e.commit("suggestions/addFavoriteSuggestion", m);
  });
  return {
    markFavoritePageSuggestion: (u) => {
      e.commit("suggestions/removePageSuggestionFromList", u), n(), s(u);
    },
    markFavoriteSectionSuggestion: (u) => {
      e.commit(
        "suggestions/removeSectionSuggestionFromList",
        u
      ), t(), s(u);
    },
    markFavoriteSuggestion: (u, i, d) => y(void 0, null, function* () {
      const g = o(
        i,
        d,
        u
      );
      g && (e.commit(
        "suggestions/removePageSuggestionFromList",
        g
      ), n());
      const m = e.getters["suggestions/getSectionSuggestionsForArticle"](i, d, u);
      m != null && m.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        m
      ), t()), yield ue.markFavorite(
        u,
        i,
        d
      );
      const p = new es({
        title: u,
        sourceLanguage: i,
        targetLanguage: d
      });
      e.commit("suggestions/addFavoriteSuggestion", p);
    }),
    removeFavoriteSuggestion: (u) => (e.commit("suggestions/removeFavoriteSuggestion", u), ue.unmarkFavorite(u))
  };
}, x$ = "suggestion_no_seed", C$ = "suggestion_recent_edit", b$ = "suggestion_topic_area", k$ = "suggestion_search_result_seed", $$ = "suggestion_featured", V$ = "suggestion_collections", E$ = "suggestion_region", L$ = () => {
  const { currentSuggestionFilters: e } = D();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === sn)
      return t ? C$ : x$;
    if (n === tt)
      return b$;
    if (n === Pe)
      return E$;
    if (n === Gt)
      return k$;
    if (o === an)
      return $$;
    if (o === te || n === te)
      return V$;
    const s = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${o}`
    );
    throw mw.errorLogger.logError(s, "error.contenttranslation"), s;
  };
};
const fi = window.Vue.unref, fm = window.Vue.createVNode, Bo = window.Vue.toDisplayString, Fo = window.Vue.createElementVNode, Ps = window.Vue.openBlock, Bs = window.Vue.createElementBlock, wi = window.Vue.createCommentVNode, wm = window.Vue.createTextVNode, T$ = window.Vue.normalizeClass, A$ = { class: "cx-featured-collection-banner py-4 px-6" }, D$ = { class: "cx-featured-collection-banner__header mb-3" }, P$ = { class: "cx-featured-collection-banner__header-text" }, B$ = { class: "cx-featured-collection-banner__title mb-0" }, F$ = {
  key: 0,
  class: "cx-featured-collection-banner__source mb-0"
}, N$ = { class: "cx-featured-collection-banner__content" }, M$ = { class: "cx-featured-collection-banner__learn-more-container" }, U$ = ["href"], vm = window.Codex.CdxIcon, Bl = window.Vue.ref, I$ = window.Vue.computed, R$ = window.Vue.onMounted, z$ = window.Vue.onUnmounted, O$ = {
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
    const t = Bl(!1), n = Bl(null), o = Bl(null), s = I$(() => n.value ? (o.value, n.value.scrollHeight > n.value.clientHeight) : !1), a = () => {
      t.value = !t.value;
    }, r = () => {
      o.value = window.innerWidth;
    };
    return R$(() => {
      window.addEventListener("resize", r);
    }), z$(() => {
      window.removeEventListener("resize", r);
    }), (l, c) => (Ps(), Bs("div", A$, [
      Fo("div", D$, [
        fm(fi(vm), {
          icon: fi(Ou),
          class: "cx-featured-collection-banner__icon me-3 mt-1"
        }, null, 8, ["icon"]),
        Fo("div", P$, [
          Fo("h5", B$, Bo(l.$i18n("cx-featured-collection-banner-title")), 1),
          e.communityName ? (Ps(), Bs("span", F$, Bo(e.communityName), 1)) : wi("", !0)
        ])
      ]),
      Fo("div", N$, [
        Fo("div", {
          ref_key: "descriptionRef",
          ref: n,
          class: T$(["cx-featured-collection-banner__description", {
            "cx-featured-collection-banner__description--expanded": t.value
          }])
        }, [
          wm(Bo(e.description || l.$i18n("cx-featured-collection-banner-description")) + " ", 1),
          t.value ? (Ps(), Bs("button", {
            key: 0,
            class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--inline",
            onClick: a
          }, Bo(l.$i18n("cx-featured-collection-banner-toggle-less")), 1)) : wi("", !0)
        ], 2),
        !t.value && s.value ? (Ps(), Bs("button", {
          key: 0,
          class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--external mb-1 ml-1",
          onClick: a
        }, Bo(l.$i18n("cx-featured-collection-banner-toggle-more")), 1)) : wi("", !0)
      ]),
      Fo("div", M$, [
        (t.value || !s.value) && e.learnMoreUrl ? (Ps(), Bs("a", {
          key: 0,
          href: e.learnMoreUrl,
          class: "cx-featured-collection-banner__learn-more",
          target: "_blank"
        }, [
          wm(Bo(l.$i18n("cx-featured-collection-banner-learn-more")) + " ", 1),
          fm(fi(vm), {
            icon: fi(Ta),
            size: "small",
            class: "cx-featured-collection-banner__learn-more-icon"
          }, null, 8, ["icon"])
        ], 8, U$)) : wi("", !0)
      ])
    ]));
  }
};
const _m = window.Vue.normalizeClass, j$ = window.Vue.resolveDirective, Fs = window.Vue.createElementVNode, vi = window.Vue.withDirectives, ge = window.Vue.unref, Qe = window.Vue.openBlock, Nt = window.Vue.createBlock, pn = window.Vue.createCommentVNode, Fl = window.Vue.createVNode, Ns = window.Vue.withCtx, Sm = window.Vue.renderList, ym = window.Vue.Fragment, Nl = window.Vue.createElementBlock, H$ = window.Vue.toDisplayString, q$ = window.Vue.createTextVNode, G$ = window.Vue.vShow, W$ = { class: "cx-suggestion-list" }, X$ = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, K$ = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, Y$ = { class: "cx-suggestion-list__refresh-button-container justify-center" }, wt = window.Vue.computed, Q$ = window.Vue.inject, J$ = window.Vue.ref, Z$ = window.Codex.CdxButton, eV = window.Codex.CdxIcon, tV = window.Vuex.useStore, nV = {
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
    } = D(), { supportedLanguageCodes: s } = Va(), a = If(), r = (B) => a(B, n.value), l = (B) => a(t.value, B), c = L$(), { featuredCollection: u } = rs(), { findSelectedFilter: i } = Aa(), d = wt(() => i()), g = Da(), m = (B) => {
      g(
        B.sourceTitle,
        B.sourceLanguage,
        B.targetLanguage,
        c(B.suggestionSeed),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: p,
      currentSectionSuggestionsSlice: h,
      discardPageSuggestion: f,
      discardSectionSuggestion: v,
      onSuggestionRefresh: w,
      pageSuggestionsLoading: x,
      sectionSuggestionsLoading: b,
      isCurrentPageSuggestionsSliceFull: _,
      isCurrentSectionSuggestionsSliceFull: k
    } = S$(), E = J$(null), M = Vt(), L = () => {
      M({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), w(), E.value && E.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: P, markFavoritePageSuggestion: z } = Xu(), Q = Q$("breakpoints"), se = wt(() => Q.value.mobile), oe = wt(
      () => se.value ? null : "pb-2 flex justify-between items-center"
    ), N = tV(), I = wt(
      () => N.state.suggestions.isPageSuggestionsFetchPending
    ), G = wt(
      () => N.state.suggestions.isSectionSuggestionsFetchPending
    ), X = wt(
      () => I.value || x.value && !_.value
    ), re = wt(
      () => G.value || b.value && !k.value
    ), xe = wt(
      () => I.value || x.value || p.value.length > 0
    ), ke = wt(
      () => G.value || b.value || h.value.length > 0
    ), $e = wt(
      () => !xe.value && !ke.value
    ), Fe = wt(
      () => !b.value && !x.value && !I.value && !G.value && !$e.value
    ), R = wt(
      () => {
        var B;
        return u.value && ((B = d.value) == null ? void 0 : B.id) === u.value.name;
      }
    );
    return (B, j) => {
      const S = j$("i18n");
      return vi((Qe(), Nl("div", W$, [
        Fl(ge(Ze), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: Ns(() => [
            Fs("div", {
              class: _m(["cx-suggestion-list__header-card__header px-4", oe.value])
            }, [
              vi(Fs("h3", {
                class: _m(["mw-ui-card__title mb-0", { "py-3": se.value }])
              }, null, 2), [
                [S, void 0, "cx-suggestionlist-title"]
              ]),
              se.value ? pn("", !0) : (Qe(), Nt(hr, {
                key: 0,
                "source-languages": ge(s),
                "target-languages": ge(s),
                "selected-source-language": ge(t),
                "selected-target-language": ge(n),
                "onUpdate:selectedSourceLanguage": r,
                "onUpdate:selectedTargetLanguage": l
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Fl(v$)
          ]),
          default: Ns(() => [
            se.value ? (Qe(), Nt(hr, {
              key: 0,
              "source-languages": ge(s),
              "target-languages": ge(s),
              "selected-source-language": ge(t),
              "selected-target-language": ge(n),
              "onUpdate:selectedSourceLanguage": r,
              "onUpdate:selectedTargetLanguage": l
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : pn("", !0)
          ]),
          _: 1
        }),
        R.value ? (Qe(), Nt(O$, {
          key: 0,
          "community-name": ge(u).communityName,
          description: ge(u).description,
          "learn-more-url": ge(u).link
        }, null, 8, ["community-name", "description", "learn-more-url"])) : pn("", !0),
        ke.value ? (Qe(), Nt(ge(Ze), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: Ns(() => [
            vi(Fs("h5", X$, null, 512), [
              [S, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Qe(!0), Nl(ym, null, Sm(ge(h), (V, T) => (Qe(), Nt(yu, {
              key: `section-suggestion-${T}`,
              class: "ma-0",
              suggestion: V,
              onClose: (F) => ge(v)(V),
              onClick: (F) => m(V),
              onBookmark: (F) => ge(P)(V)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            re.value ? (Qe(), Nt(ge(dt), { key: 0 })) : pn("", !0)
          ]),
          _: 1
        })) : pn("", !0),
        xe.value ? (Qe(), Nt(ge(Ze), {
          key: 2,
          ref_key: "pageSuggestionsList",
          ref: E,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: Ns(() => [
            vi(Fs("h5", K$, null, 512), [
              [S, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Qe(!0), Nl(ym, null, Sm(ge(p), (V, T) => (Qe(), Nt(yu, {
              key: `page-suggestion-${T}`,
              suggestion: V,
              onClose: (F) => ge(f)(V),
              onClick: (F) => m(V),
              onBookmark: (F) => ge(z)(V)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            X.value ? (Qe(), Nt(ge(dt), { key: 0 })) : pn("", !0)
          ]),
          _: 1
        }, 512)) : pn("", !0),
        $e.value ? (Qe(), Nt(yw, {
          key: 3,
          title: B.$i18n("cx-sx-suggestion-list-empty-title"),
          description: B.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : pn("", !0),
        Fs("div", Y$, [
          Fe.value ? (Qe(), Nt(ge(Z$), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: L
          }, {
            default: Ns(() => [
              Fl(ge(eV), {
                class: "me-1",
                icon: ge(Bf)
              }, null, 8, ["icon"]),
              q$(" " + H$(B.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : pn("", !0)
        ])
      ], 512)), [
        [G$, e.active]
      ]);
    };
  }
}, oV = window.Vue.resolveDirective, sV = window.Vue.createElementVNode, aV = window.Vue.withDirectives, iV = window.Vue.renderList, rV = window.Vue.Fragment, Ml = window.Vue.openBlock, lV = window.Vue.createElementBlock, xm = window.Vue.unref, Cm = window.Vue.createBlock, bm = window.Vue.withCtx, cV = window.Vue.createCommentVNode, uV = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, dV = window.Vue.computed, gV = window.Vuex.useStore, mV = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = gV(), n = dV(() => t.state.suggestions.favorites || []), o = Da(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Xu();
    return (r, l) => {
      const c = oV("i18n");
      return n.value.length ? (Ml(), Cm(xm(Ze), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: bm(() => [
          aV(sV("h3", uV, null, 512), [
            [c, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: bm(() => [
          (Ml(!0), lV(rV, null, iV(n.value, (u, i) => (Ml(), Cm(yu, {
            key: `favorite-${i}`,
            suggestion: u,
            onClick: (d) => s(u),
            onBookmark: (d) => xm(a)(u)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : cV("", !0);
    };
  }
};
const pV = window.Vue.resolveDirective, Ms = window.Vue.createElementVNode, hV = window.Vue.withDirectives, fV = window.Vue.renderList, wV = window.Vue.Fragment, km = window.Vue.openBlock, $m = window.Vue.createElementBlock, vV = window.Vue.unref, _V = window.Vue.createVNode, SV = window.Vue.toDisplayString, yV = { class: "cx-help-panel pa-4" }, xV = { class: "cx-help-panel__item-list mt-6 ps-2" }, CV = ["href", "target"], bV = ["textContent"], kV = window.Codex.CdxIcon, $V = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = he(), n = [
      {
        icon: hx,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: dx,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = pV("i18n");
      return km(), $m("div", yV, [
        hV(Ms("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Ms("ul", xV, [
          (km(), $m(wV, null, fV(n, (r, l) => Ms("li", {
            key: l,
            class: "mt-4"
          }, [
            Ms("a", {
              href: r.href,
              target: r.target
            }, [
              _V(vV(kV), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Ms("span", {
                textContent: SV(r.label)
              }, null, 8, bV)
            ], 8, CV)
          ])), 64))
        ])
      ]);
    };
  }
};
const VV = window.Vue.resolveDirective, Nn = window.Vue.createElementVNode, Ul = window.Vue.withDirectives, Il = window.Vue.toDisplayString, _i = window.Vue.unref, Rl = window.Vue.withCtx, Si = window.Vue.createVNode, EV = window.Vue.openBlock, LV = window.Vue.createElementBlock, TV = { class: "cx-stats-panel pa-4" }, AV = ["textContent"], DV = { class: "cx-stats-panel__monthly-stats-label" }, PV = ["textContent"], BV = { class: "cx-stats-panel__total-stats-label" }, FV = ["href", "target"], NV = ["textContent"], MV = window.Codex.CdxIcon, UV = window.Vue.ref, Vm = window.Vue.computed, IV = window.Vue.watch, RV = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = he(), n = e, o = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", s = Vm(() => {
      var u, i;
      const c = ((i = (u = n.stats) == null ? void 0 : u[o]) == null ? void 0 : i.count) || 0;
      return mw.language.convertNumber(c);
    }), a = Vm(() => {
      var u, i;
      const c = ((i = (u = n.stats) == null ? void 0 : u[o]) == null ? void 0 : i.delta) || 0;
      return mw.language.convertNumber(c);
    }), r = UV(null), l = {
      icon: Df,
      label: t.i18n("cx-sx-dashboard-stats-panel-all-stats-label"),
      href: "https://superset.wmcloud.org/superset/dashboard/p/X61GbQpZ5Rb/",
      target: "_blank"
    };
    return IV(
      () => n.stats,
      () => {
        const c = n.stats, u = r.value.getContext("2d"), i = Object.keys(n.stats || {}).sort(), d = i.reduce(
          (k, E) => Math.max(k, c[E].delta),
          0
        ), g = i.map((k) => c[k].delta), m = r.value.getBoundingClientRect().width, p = r.value.getBoundingClientRect().height;
        r.value.width = m, r.value.height = p;
        const h = 4, f = 6, v = 50, w = (v - h) / d;
        let x = h;
        const b = Math.floor(
          (m - h) / (f + h)
        ), _ = g.slice(
          Math.max(g.length - b, 0)
        );
        _.forEach((k, E) => {
          E === _.length - 1 && (u.fillStyle = "#36c");
          const M = v - k * w;
          u.fillRect(x, M, f, k * w), x += f + h;
        });
      }
    ), (c, u) => {
      const i = VV("i18n");
      return EV(), LV("div", TV, [
        Ul(Nn("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        Si(_i(U), null, {
          default: Rl(() => [
            Si(_i(C), { class: "cx-stats-panel__monthly-stats" }, {
              default: Rl(() => [
                Nn("h3", {
                  textContent: Il(a.value)
                }, null, 8, AV),
                Ul(Nn("h5", DV, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            Si(_i(C), { class: "cx-stats-panel__total-stats" }, {
              default: Rl(() => [
                Nn("h3", {
                  textContent: Il(s.value)
                }, null, 8, PV),
                Ul(Nn("h5", BV, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Nn("canvas", {
          ref_key: "canvasRef",
          ref: r,
          class: "cx-stats-panel__canvas"
        }, null, 512),
        Nn("a", {
          class: "cx-stats-panel__stats-link",
          href: l.href,
          target: l.target
        }, [
          Si(_i(MV), {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          Nn("span", {
            textContent: Il(l.label)
          }, null, 8, NV)
        ], 8, FV)
      ]);
    };
  }
}, kw = () => {
  const e = Vt();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const zV = window.Vue.renderSlot, OV = window.Vue.unref, jV = window.Vue.createVNode, HV = window.Vue.createElementVNode, qV = window.Vue.openBlock, GV = window.Vue.createElementBlock, WV = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, XV = { class: "col-12 ma-0 pa-0" }, KV = {
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
    const n = t, o = kw(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (qV(), GV("footer", WV, [
      HV("div", XV, [
        zV(a.$slots, "default", {}, () => [
          jV(OV(ba), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, YV = window.Vuex.useStore, QV = () => {
  const e = YV(), t = as();
  return () => y(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const n = yield ue.fetchFavorites();
    if (!n || !n.length)
      return;
    const o = {};
    for (const s of n)
      e.commit("suggestions/addFavoriteSuggestion", s), ue.fetchSectionSuggestion(
        s.sourceLanguage,
        s.title,
        s.targetLanguage
      ).then(
        (a) => s.missingSectionsCount = (a == null ? void 0 : a.missingSectionsCount) || 0
      ), o[s.sourceLanguage] = [
        ...o[s.sourceLanguage] || [],
        s
      ];
    for (const [s, a] of Object.entries(
      o
    ))
      t(
        s,
        a.map((r) => r.title)
      );
  });
}, JV = window.Vuex.useStore, $w = () => {
  const e = JV(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = D(), { isDefaultFilter: r } = ku(), { previousRoute: l } = Be(e), c = Vt(), u = () => {
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
}, Em = window.Vue.computed, ZV = window.Vuex.useStore, Ee = () => {
  const e = ZV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o,
    sectionURLParameter: s
  } = D(), a = Em(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ), r = Em(() => s.value === Qn.LEAD_SECTION_DUMMY_TITLE ? s.value : a.value.missingSections[s.value] || a.value.presentSections[s.value] || "");
  return { sectionSuggestion: a, activeSectionTargetTitle: r };
}, eE = window.Vuex.useStore, tE = window.Vue.computed, Wt = () => {
  const e = eE(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = D();
  return { currentTranslation: tE(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, zl = window.Vue.computed, nE = window.Vuex.useStore, ot = () => {
  const e = nE(), { sectionSuggestion: t } = Ee(), { currentTranslation: n } = Wt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = D(), r = zl(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = zl(
    () => {
      var u, i;
      return ((u = t.value) == null ? void 0 : u.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    }
  ), c = zl(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: r, currentTargetPage: c, currentTargetPageTitle: l };
}, yi = window.Vue.computed, oE = window.Vuex.useStore, ne = () => {
  const e = oE(), { currentSourcePage: t } = ot(), { currentMTProvider: n } = Be(e), { sectionURLParameter: o } = D(), s = yi(() => {
    var c, u;
    return o.value ? (u = t.value) == null ? void 0 : u.getSectionByTitle(o.value) : (c = t.value) == null ? void 0 : c.leadSection;
  }), a = yi(
    () => {
      var c;
      return (c = s.value) == null ? void 0 : c.isTitleSelected;
    }
  ), r = yi(
    () => {
      var c;
      return (c = s.value) == null ? void 0 : c.selectedContentTranslationUnit;
    }
  ), l = yi(
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
}, Ol = window.Vue.computed, mt = () => {
  const { sectionURLParameter: e } = D(), { targetPageExists: t } = rn(), { sourceSection: n } = ne(), { sectionSuggestion: o } = Ee(), s = Ol(
    () => {
      var l;
      return t.value && !!((l = n.value) != null && l.isLeadSection);
    }
  ), a = Ol(
    () => {
      var l;
      return !!((l = n.value) != null && l.isLeadSection) && !t.value;
    }
  );
  return {
    isCurrentSectionPresent: Ol(
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
}, sE = window.Vue.ref, xi = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, jl = sE(null), Et = () => {
  const { isCurrentSectionPresent: e } = mt(), t = () => {
    e.value ? o(xi.EXPAND) : o(xi.NEW_SECTION);
  }, n = () => {
    jl.value = null;
  }, o = (s) => {
    if (!Object.values(xi).includes(s))
      throw new Error("[CX] Invalid publishing target used");
    jl.value = s;
  };
  return {
    target: jl,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: o,
    PUBLISHING_TARGETS: xi
  };
}, aE = window.Vue.watch, iE = () => {
  const { fetchAllTranslations: e } = us(), t = Mf(), n = QV(), { fetchPageCollectionGroups: o } = Mu(), { logDashboardOpenEvent: s } = $w(), { applicationLanguagesInitialized: a } = Rf(), { clearPublishTarget: r } = Et();
  return () => y(void 0, null, function* () {
    o(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), aE(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Lm = window.Vue.computed, rE = window.Vue.ref, lE = window.Vue.watch, cE = window.Vue.watchEffect, uE = window.Vuex.useStore, dE = ["suggestions", "draft", "published"], gE = () => {
  const e = uE(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = D(), { translationsFetched: o } = us(), s = rE(null);
  if (dE.includes(t.value))
    s.value = t.value;
  else {
    const a = Lm(
      () => o.value.draft
    ), r = Lm(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", lE(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return cE(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, mE = window.Vue.computed, pE = () => {
  const e = he();
  return mE(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: S0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: wr,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: _0,
        type: "text"
      }
    }
  ]);
};
const be = window.Vue.unref, Ie = window.Vue.createVNode, hE = window.Vue.toDisplayString, fE = window.Vue.createTextVNode, hn = window.Vue.withCtx, Hl = window.Vue.openBlock, Tm = window.Vue.createBlock, Am = window.Vue.createCommentVNode, wE = window.Vue.vShow, vE = window.Vue.withDirectives, _E = window.Vue.isRef, SE = window.Vue.createElementBlock, Dm = window.Vue.computed, yE = window.Vue.inject, xE = window.Vuex.useStore, CE = window.Codex.CdxButton, bE = window.Codex.CdxIcon, kE = {
  __name: "CXDashboard",
  setup(e) {
    const t = nt(), n = Vt(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    iE()();
    const a = xE();
    a.dispatch("translator/fetchTranslatorStats");
    const r = Dm(() => a.state.translator.translatorStats), l = gE(), c = pE(), u = kw(), i = (m) => {
      u(m), l.value = m;
    }, d = yE("breakpoints"), g = Dm(() => d.value.mobile);
    return mw.cx.eventlogging.stats.dashboardAccess(g.value), (m, p) => (Hl(), SE("div", null, [
      Ie(be(U), { class: "ma-0 pb-4" }, {
        default: hn(() => [
          Ie(be(CE), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: hn(() => [
              Ie(be(bE), {
                class: "me-1",
                icon: be(Vf)
              }, null, 8, ["icon"]),
              fE(" " + hE(m.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Ie(be(U), {
        class: "ma-0",
        align: "start"
      }, {
        default: hn(() => [
          m.$mwui.breakpoint.tabletAndUp ? (Hl(), Tm(be(C), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: hn(() => [
              Ie(be(ba), {
                id: "dashboard-list-selector--desktop",
                items: be(c),
                active: be(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Am("", !0),
          Ie(be(C), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: hn(() => [
              vE(Ie(mV, null, null, 512), [
                [wE, be(l) === "suggestions"]
              ]),
              Ie(nV, {
                active: be(l) === "suggestions"
              }, null, 8, ["active"]),
              Ie(Rg, {
                "translation-status": "draft",
                "active-status": be(l)
              }, null, 8, ["active-status"]),
              Ie(Rg, {
                "translation-status": "published",
                "active-status": be(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Ie(be(C), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: hn(() => [
              Ie(be(U), {
                class: "ma-0",
                align: "start"
              }, {
                default: hn(() => [
                  Ie(be(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: hn(() => [
                      Ie(RV, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Ie(be(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: hn(() => [
                      Ie($V)
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
      m.$mwui.breakpoint.mobile ? (Hl(), Tm(KV, {
        key: 0,
        active: be(l),
        "onUpdate:active": p[0] || (p[0] = (h) => _E(l) ? l.value = h : null),
        items: be(c)
      }, null, 8, ["active", "items"])) : Am("", !0)
    ]));
  }
}, $E = {
  name: "DashboardView",
  components: { CxDashboard: kE }
}, VE = window.Vue.resolveComponent, EE = window.Vue.createVNode, LE = window.Vue.openBlock, TE = window.Vue.createElementBlock, AE = { class: "cx-translation-dashboard" };
function DE(e, t, n, o, s, a) {
  const r = VE("cx-dashboard");
  return LE(), TE("main", AE, [
    EE(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const Pm = /* @__PURE__ */ pe($E, [["render", DE]]), No = window.Vue.computed, PE = () => {
  const { sectionSuggestion: e } = Ee(), { targetLanguageURLParameter: t } = D(), { currentTranslation: n } = Wt(), o = No(
    () => {
      var g, m, p;
      return (p = (m = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : m[0]) == null ? void 0 : p.sourceTitle;
    }
  ), s = No(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = No(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = rn(), c = No(() => r ? Z.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), u = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value >= 1 ? "cx-sx-select-section" : a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : a.value > 0 ? "cx-sx-select-section" : "" : "cx-sx-start-translation-button-label", i = No(() => {
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
  }), d = No(
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
function BE(e) {
  return e.$el = $(e), e;
}
function FE(e, t, n, o) {
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
function NE() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function ME(e, t) {
  return y(this, null, function* () {
    yield Ku(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = BE(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const UE = window.Vue.computed, IE = window.Vue.onMounted, RE = window.Vue.ref;
function zE(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const OE = {
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
    const n = RE(null);
    let o = null;
    const s = UE(
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
    return IE(() => y(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = zE;
      const i = yield ME(c, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = FE(
        i,
        e.content,
        e.language,
        e.dir
      );
      const d = ve.ui.contextItemFactory.lookup("reference");
      d.prototype.getRendering = NE, o.focus();
    })), { sxeditor: n };
  }
}, gr = window.Vue.createElementVNode, jE = window.Vue.openBlock, HE = window.Vue.createElementBlock, qE = ["lang", "dir"], GE = /* @__PURE__ */ gr("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ gr("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ gr("div", { class: "toolbar" })
  ])
], -1), WE = ["lang", "dir"];
function XE(e, t, n, o, s, a) {
  return jE(), HE("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    GE,
    gr("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, WE)
  ], 8, qE);
}
const KE = /* @__PURE__ */ pe(OE, [["render", XE]]);
function Ku() {
  return mw.loader.using("mw.cx3.ve");
}
const YE = window.Vuex.useStore, QE = () => {
  const e = YE();
  return (t, n) => y(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Ku(), new Promise((s) => {
      setTimeout(() => {
        const a = pf.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, JE = window.Vuex.useStore, Vw = () => {
  const e = JE();
  return (t, n, o, s = null) => y(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield So.fetchPageContent(
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
}, Tr = () => {
  const { currentSourcePage: e } = ot(), t = QE(), n = Vw(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = D(), c = (d, g) => y(void 0, null, function* () {
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
}, ZE = window.Vuex.useStore, ds = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = D(), { activeSectionTargetTitle: a } = Ee(), { target: r } = Et(), l = ZE(), c = nt(), u = () => {
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
    ), qt) {
      d();
      return;
    }
    if (i())
      return;
    const m = u();
    c.push({ name: m.name });
  };
}, Bm = window.Vue.computed, e4 = window.Vue.ref, t4 = window.Vue.watchEffect, ql = /* @__PURE__ */ new Map(), n4 = (e, t) => y(void 0, null, function* () {
  return (yield ue.fetchArticleSections(
    e,
    t
  )).sections.filter(
    (s) => s.level === "2"
  )[0].byteoffset;
}), o4 = (e, t) => {
  const n = `${e}:${t}`;
  if (ql.has(n))
    return ql.get(n);
  const o = n4(e, t);
  return ql.set(n, o), o;
}, Ew = () => {
  const { currentSourcePage: e } = ot(), { sectionSuggestion: t } = Ee(), { sectionURLParameter: n } = D(), o = e4(null);
  t4(() => y(void 0, null, function* () {
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
      o.value = yield o4(l, c);
    } else
      o.value = ((r = e.value) == null ? void 0 : r.articleSize) || null;
  }));
  const s = Bm(() => o.value ? !t.value && qt ? yf(o.value) : Pu(o.value) : Xe.unknown);
  return { isQuickTranslation: Bm(() => s.value === Xe.stub || s.value === Xe.easy), difficulty: s, sizeInBytes: o };
}, Yu = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = D(), s = Vt(), { difficulty: a } = Ew();
  return {
    logDashboardTranslationStartEvent: () => {
      const l = {
        event_type: "dashboard_translation_start",
        event_source: fw.value,
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
      return Su.value && (l.event_context = Su.value), o.value ? (l.translation_source_section = o.value, l.translation_type = "section") : l.translation_type = "article", s(l);
    }
  };
}, Qu = () => {
  const e = Vt(), { currentTranslation: t } = Wt();
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
}, s4 = window.Vue.ref, a4 = () => {
  const e = nt(), { logDashboardTranslationStartEvent: t } = Yu(), n = Qu(), o = ds(), { sectionURLParameter: s } = D(), { targetPageExists: a } = rn(), { selectPageSectionByTitle: r } = Tr(), l = () => y(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), c = s4(!1), { currentTranslation: u } = Wt();
  return {
    handlePrimaryButtonClick: () => {
      u.value ? u.value.isArticleTranslation && !qt ? c.value = !0 : (n(), o()) : s.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: c
  };
};
const i4 = window.Vue.resolveDirective, Fm = window.Vue.createElementVNode, Nm = window.Vue.withDirectives, r4 = window.Vue.unref, l4 = window.Vue.withCtx, c4 = window.Vue.openBlock, u4 = window.Vue.createBlock, d4 = {
  href: "",
  target: "_blank"
}, g4 = window.Codex.CdxDialog, m4 = {
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
    const n = e, o = t, s = (u) => o("update:modelValue", u), a = he(), r = {
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
      const d = i4("i18n");
      return c4(), u4(r4(g4), {
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
        default: l4(() => [
          Nm(Fm("p", null, null, 512), [
            [d, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Nm(Fm("a", d4, null, 512), [
            [d, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
}, p4 = () => {
  const {
    sectionURLParameter: e,
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = D(), s = $r();
  return () => y(void 0, null, function* () {
    const a = yield s(
      t.value,
      n.value,
      o.value
    );
    return a instanceof nn ? a.sourceSections.includes(e.value) : !1;
  });
};
const _e = window.Vue.unref, h4 = window.Vue.resolveDirective, Us = window.Vue.createElementVNode, Mm = window.Vue.withDirectives, Is = window.Vue.openBlock, Gl = window.Vue.createElementBlock, Wl = window.Vue.createCommentVNode, vt = window.Vue.createVNode, Mt = window.Vue.withCtx, Xl = window.Vue.toDisplayString, Kl = window.Vue.createTextVNode, f4 = window.Vue.withModifiers, Um = window.Vue.createBlock, w4 = window.Vue.Fragment, v4 = { class: "sx-translation-confirmer-body pb-4" }, _4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, S4 = ["innerHTML"], y4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, x4 = ["href"], C4 = ["innerHTML"], Yl = window.Vue.computed, Ql = window.Vue.ref, b4 = window.Vue.watchEffect, k4 = window.Vuex.useStore, Jl = window.Codex.CdxButton, $4 = window.Codex.CdxIcon, V4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = nt(), o = k4(), { sectionSuggestion: s } = Ee(), { targetLanguageAutonym: a } = Be(o), { sectionURLParameter: r, clearSectionURLParameter: l } = D(), { logDashboardTranslationStartEvent: c } = Yu(), u = ds(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: d } = a4(), g = Ql(!1), m = Ql(null), p = () => y(this, null, function* () {
      let oe = !0;
      try {
        oe = yield bt.checkUnreviewedTranslations();
      } catch (N) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          N
        );
      }
      oe !== !0 && (g.value = !0, m.value = oe.targetUrl);
    }), h = () => y(this, null, function* () {
      yield p(), !g.value && (c(), u());
    }), f = () => y(this, null, function* () {
      yield p(), !g.value && i();
    }), v = t;
    b4(() => {
      d.value && (v("open-translation-confirmation-dialog"), d.value = !1);
    });
    const {
      actionInformationMessage: w,
      getActionButtonLabel: x,
      isProgressiveButton: b,
      targetArticlePath: _
    } = PE(), k = he(), E = Yl(
      () => k.i18n(x(!!r.value))
    ), M = () => y(this, null, function* () {
      yield p(), !g.value && n.push({ name: "sx-section-selector" });
    }), L = Yl(() => {
      var oe, N;
      return r.value && !!((N = (oe = s.value) == null ? void 0 : oe.sourceSections) != null && N.length);
    }), { targetPageExists: P } = rn(), z = Yl(() => !r.value && P.value && qt), Q = p4(), se = Ql(!1);
    return Q().then((oe) => {
      oe || l(), se.value = !0;
    }), (oe, N) => {
      const I = h4("i18n");
      return Is(), Gl(w4, null, [
        Us("section", v4, [
          _e(r) && se.value ? (Is(), Gl("section", _4, [
            Mm(Us("h6", null, null, 512), [
              [I, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Us("h5", {
              class: "ma-0",
              innerHTML: _e(r)
            }, null, 8, S4)
          ])) : _e(P) && !_e(r) ? (Is(), Gl("section", y4, [
            vt(_e(U), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Mt(() => [
                Mm(vt(_e(C), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [I, [_e(a)], "cx-sx-existing-translation-status"]
                ]),
                vt(_e(C), { shrink: "" }, {
                  default: Mt(() => [
                    Us("a", {
                      href: _e(_),
                      target: "_blank"
                    }, [
                      vt(_e($4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: _e(Ta)
                      }, null, 8, ["icon"])
                    ], 8, x4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            vt(_e(U), { class: "ma-0" }, {
              default: Mt(() => [
                vt(_e(C), null, {
                  default: Mt(() => [
                    Us("span", { innerHTML: _e(w) }, null, 8, C4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Wl("", !0),
          vt(_e(U), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Mt(() => [
              L.value ? (Is(), Um(_e(C), {
                key: 0,
                shrink: ""
              }, {
                default: Mt(() => [
                  vt(_e(Jl), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: f4(M, ["stop"])
                  }, {
                    default: Mt(() => [
                      Kl(Xl(oe.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Wl("", !0),
              z.value ? (Is(), Um(_e(C), {
                key: 1,
                shrink: ""
              }, {
                default: Mt(() => [
                  vt(_e(Jl), {
                    size: "large",
                    onClick: h
                  }, {
                    default: Mt(() => [
                      Kl(Xl(oe.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Wl("", !0),
              vt(_e(C), { shrink: "" }, {
                default: Mt(() => [
                  vt(_e(Jl), {
                    weight: "primary",
                    size: "large",
                    action: _e(b) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: Mt(() => [
                      Kl(Xl(E.value), 1)
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
        vt(m4, {
          modelValue: g.value,
          "onUpdate:modelValue": N[0] || (N[0] = (G) => g.value = G),
          "target-url": m.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Zl = window.Vue.unref, E4 = window.Vue.openBlock, L4 = window.Vue.createBlock, T4 = window.Vue.computed, Lw = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t } = Va(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = D(), { currentLanguageTitleGroup: s } = rn(), a = T4(
      () => {
        var u;
        return ((u = s.value) == null ? void 0 : u.titles.map((i) => i.lang)) || [];
      }
    ), r = Ux(), l = (u) => r(u, o.value), c = (u) => r(n.value, u);
    return (u, i) => (E4(), L4(hr, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": Zl(t),
      "selected-source-language": Zl(n),
      "selected-target-language": Zl(o),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": c
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, A4 = (e) => {
  const s = e / 5 / 15;
  return Math.ceil(s);
};
const Me = window.Vue.unref, ec = window.Vue.toDisplayString, Mn = window.Vue.createElementVNode, Yt = window.Vue.createVNode, Mo = window.Vue.withCtx, D4 = window.Vue.resolveDirective, P4 = window.Vue.withDirectives, B4 = window.Vue.normalizeClass, Im = window.Vue.openBlock, F4 = window.Vue.createElementBlock, N4 = window.Vue.createCommentVNode, M4 = window.Vue.createBlock, U4 = ["textContent"], I4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, R4 = ["textContent"], z4 = { class: "pe-3" }, O4 = ["textContent"], j4 = window.Codex.CdxButton, Rs = window.Codex.CdxIcon, Un = window.Vue.computed, H4 = window.Vuex.useStore, q4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = H4(), { currentSourcePage: n } = ot(), { sectionSuggestion: o } = Ee(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l
    } = D(), c = Un(() => t.state.suggestions.favorites || []), u = Un(
      () => c.value.some(
        (M) => r.value === M.title && s.value === M.sourceLanguage && a.value === M.targetLanguage
      )
    ), { markFavoriteSuggestion: i, removeFavoriteSuggestion: d } = Xu(), g = () => i(
      r.value,
      s.value,
      a.value
    ), m = () => d(
      new es({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), p = Un(
      () => u.value ? Tf : Af
    ), h = Un(
      () => u.value ? m : g
    ), f = Un(
      () => Z.getPageUrl(s.value || "", r.value || "")
    ), v = Un(
      () => {
        var M;
        return (((M = n.value) == null ? void 0 : M.langLinksCount) || 0) + 1;
      }
    ), w = (M) => {
      const L = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let P = 0; P < L.length; P++)
        if (M >= L[P].value)
          return (M / L[P].value).toFixed(1).replace(/\.0$/, "") + L[P].suffix;
      return M.toString();
    }, x = Un(() => {
      var L;
      const M = Object.values(((L = n.value) == null ? void 0 : L.pageviews) || {}).reduce(
        (P, z) => P + z,
        0
      );
      return w(M);
    }), { isQuickTranslation: b, sizeInBytes: _ } = Ew(), k = he(), E = Un(() => {
      if (!o.value && !n.value || !_.value)
        return "";
      const M = A4(_.value), L = M >= 60 ? M / 60 : 0, P = Math.round(L * 2) / 2;
      if (!o.value && qt)
        return k.i18n(
          "cx-sx-translation-confirmer-translation-time-whole-article",
          P,
          M
        );
      if (o.value) {
        if (l.value)
          return k.i18n(
            "cx-sx-translation-confirmer-translation-time-single-section",
            P,
            M
          );
      } else
        return k.i18n(
          "cx-sx-translation-confirmer-translation-time-lead-section",
          P,
          M
        );
      return k.i18n(
        "cx-sx-translation-confirmer-translation-time-sections",
        P,
        M,
        Object.keys(o.value.missingSections).length
      );
    });
    return (M, L) => {
      const P = D4("i18n");
      return Im(), M4(Me(U), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: Mo(() => [
          Yt(Me(C), null, {
            default: Mo(() => [
              Yt(Me(U), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: Mo(() => [
                  Yt(Me(C), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: Mo(() => [
                      Mn("h5", {
                        class: "ma-0 me-1",
                        textContent: ec(Me(r))
                      }, null, 8, U4),
                      Yt(Me(Rs), {
                        size: "x-small",
                        icon: Me(Ta)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Yt(Me(C), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Mo(() => [
                      Yt(Me(j4), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": M.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: Mo(() => [
                          Yt(Me(Rs), { icon: p.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Mn("div", I4, [
                Mn("div", null, [
                  Mn("span", null, [
                    Yt(Me(Rs), {
                      icon: Me(Pf),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Mn("span", {
                      class: "pe-3",
                      textContent: ec(v.value)
                    }, null, 8, R4)
                  ]),
                  Mn("span", null, [
                    Yt(Me(Rs), {
                      icon: Me(Df),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    P4(Mn("span", z4, null, 512), [
                      [P, [x.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                E.value ? (Im(), F4("span", {
                  key: 0,
                  class: B4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Me(b)
                  }])
                }, [
                  Yt(Me(Rs), {
                    icon: Me(lx),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Mn("span", {
                    textContent: ec(E.value)
                  }, null, 8, O4)
                ], 2)) : N4("", !0)
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
const G4 = window.Vue.resolveDirective, co = window.Vue.createElementVNode, Ci = window.Vue.withDirectives, W4 = window.Vue.toDisplayString, X4 = window.Vue.createTextVNode, tc = window.Vue.unref, nc = window.Vue.withCtx, oc = window.Vue.openBlock, sc = window.Vue.createBlock;
window.Vue.createCommentVNode;
const K4 = { class: "pa-4" }, Y4 = { class: "flex pt-2" }, Q4 = window.Codex.CdxButton, J4 = window.Vue.ref, Z4 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = ds(), a = Qu(), r = J4(!1), { currentTranslation: l } = Wt(), c = () => y(this, null, function* () {
      r.value = !0;
      let u = !1;
      try {
        u = yield bt.splitTranslation(
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
      const d = G4("i18n");
      return oc(), sc(tc(kt), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: nc(() => [
          co("div", Y4, [
            r.value ? (oc(), sc(tc(dt), { key: 1 })) : (oc(), sc(tc(Q4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: nc(() => [
                X4(W4(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: nc(() => [
          co("div", K4, [
            Ci(co("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Ci(co("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            co("p", null, [
              Ci(co("strong", null, null, 512), [
                [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Ci(co("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
};
const Rm = window.Vue.unref, e3 = window.Vue.createVNode, zm = window.Vue.toDisplayString, bi = window.Vue.createElementVNode, t3 = window.Vue.openBlock, n3 = window.Vue.createElementBlock, o3 = { class: "cx-translation-confirmer-featured-collection-banner ma-4 px-4 py-3" }, s3 = { class: "cx-translation-confirmer-featured-collection-banner__header" }, a3 = { class: "cx-translation-confirmer-featured-collection-banner__header-text" }, i3 = { class: "cx-translation-confirmer-featured-collection-banner__body" }, r3 = window.Vue.computed, l3 = window.Codex.CdxIcon, c3 = {
  __name: "SXTranslationConfirmerFeaturedCollectionBanner",
  setup(e) {
    const { featuredCollection: t } = rs(), n = r3(() => {
      var o;
      return (o = t.value) == null ? void 0 : o.name;
    });
    return (o, s) => (t3(), n3("div", o3, [
      bi("div", s3, [
        e3(Rm(l3), {
          icon: Rm(Ou),
          size: "small",
          class: "cx-translation-confirmer-featured-collection-banner__header-icon me-2"
        }, null, 8, ["icon"]),
        bi("span", a3, zm(o.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      bi("div", i3, [
        bi("p", null, zm(n.value), 1)
      ])
    ]));
  }
}, u3 = window.Vuex.useStore;
let ki = [];
const Ju = () => {
  const e = u3();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || ki.includes(o) ? Promise.resolve() : (ki.push(o), So.fetchLanguageTitles(t, n).then((s) => {
      ki = ki.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, d3 = window.Vue.ref, Uo = d3(null), Tw = () => {
  const e = () => y(void 0, null, function* () {
    var n, o;
    Uo.value || (yield br.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, Uo.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        Uo.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = Uo.value) == null ? void 0 : n.refreshAt) <= t ? (Uo.value = null, e()) : (o = Uo.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const Om = window.Vue.resolveDirective, $i = window.Vue.createElementVNode, jm = window.Vue.withDirectives, In = window.Vue.unref, Vi = window.Vue.withCtx, fn = window.Vue.createVNode, Ei = window.Vue.openBlock, Hm = window.Vue.createElementBlock, g3 = window.Vue.createCommentVNode, qm = window.Vue.createBlock, m3 = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, p3 = { class: "mb-0" }, h3 = { class: "sx-translation-confirmer__article-image flex justify-center" }, f3 = ["src"], w3 = { class: "ma-3" }, Gm = window.Vue.computed, v3 = window.Vue.inject, _3 = window.Vue.onBeforeUnmount, Wm = window.Vue.ref, S3 = window.Vue.watch, y3 = window.Vuex.useStore, x3 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = y3(), { currentSourcePage: n } = ot(), { previousRoute: o } = Be(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: c
    } = D(), { inFeaturedCollection: u } = xw(), i = v3("breakpoints"), d = Gm(() => i.value.nextBreakpoint), g = Gm(
      () => {
        var _;
        return (_ = n.value) == null ? void 0 : _.getImage(d.value);
      }
    ), m = Wm(!1);
    S3(
      () => {
        var _;
        return (_ = n.value) == null ? void 0 : _.wikidataId;
      },
      (_) => y(this, null, function* () {
        const k = yield u([_]);
        m.value = k[_];
      }),
      { immediate: !0 }
    );
    const { fetchTranslationsByStatus: p } = us(), h = Ju();
    p("draft"), h(s.value, r.value), Ku(), Tw()(), Nf()(a.value);
    const w = nt(), x = () => {
      const _ = ["dashboard", "sx-article-search"];
      !o.value || !_.includes(o.value) ? w.push({ name: "dashboard" }) : w.push({ name: o.value });
    };
    _3(() => {
      const _ = w.currentRoute.value.name;
      (_ === "dashboard" || _ === "sx-article-search") && c();
    });
    const b = Wm(!1);
    return (_, k) => {
      const E = Om("i18n"), M = Om("i18n-html");
      return Ei(), Hm("section", m3, [
        fn(In(U), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Vi(() => [
            fn(In(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Vi(() => [
                jm($i("h5", p3, null, 512), [
                  [E, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            fn(In(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Vi(() => [
                fn(In(Ke), {
                  class: "pa-0",
                  type: "icon",
                  icon: In(vr),
                  "icon-size": 20,
                  onClick: x
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        $i("div", h3, [
          g.value ? (Ei(), Hm("img", {
            key: 0,
            src: g.value
          }, null, 8, f3)) : (Ei(), qm(In(et), {
            key: 1,
            size: "120",
            icon: In(Kh),
            "icon-color": _.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        fn(q4),
        m.value ? (Ei(), qm(c3, { key: 0 })) : g3("", !0),
        fn(Lw),
        fn(V4, {
          onOpenTranslationConfirmationDialog: k[0] || (k[0] = (L) => b.value = !0)
        }),
        fn(In(U), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Vi(() => [
            $i("p", w3, [
              jm($i("small", null, null, 512), [
                [M, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        fn(Z4, {
          modelValue: b.value,
          "onUpdate:modelValue": k[1] || (k[1] = (L) => b.value = L)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const C3 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: x3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, b3 = window.Vue.resolveComponent, k3 = window.Vue.createVNode, $3 = window.Vue.normalizeClass, V3 = window.Vue.openBlock, E3 = window.Vue.createElementBlock;
function L3(e, t, n, o, s, a) {
  const r = b3("sx-translation-confirmer");
  return V3(), E3("main", {
    class: $3(["sx-translation-confirmer-view", a.classes])
  }, [
    k3(r)
  ], 2);
}
const T3 = /* @__PURE__ */ pe(C3, [["render", L3]]);
const A3 = window.Vue.toDisplayString, Xm = window.Vue.unref, D3 = window.Vue.createVNode, P3 = window.Vue.createTextVNode, B3 = window.Vue.createElementVNode, F3 = window.Vue.openBlock, N3 = window.Vue.createElementBlock, M3 = { class: "sx-section-selector-view-article-item" }, U3 = ["href"], I3 = window.Codex.CdxIcon, Km = {
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
    return (t, n) => (F3(), N3("span", M3, [
      B3("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        P3(A3(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        D3(Xm(I3), {
          size: "x-small",
          icon: Xm(Ta)
        }, null, 8, ["icon"])
      ], 8, U3)
    ]));
  }
};
const R3 = window.Vue.resolveDirective, Li = window.Vue.createElementVNode, ac = window.Vue.withDirectives, uo = window.Vue.unref, z3 = window.Vue.toDisplayString, Ti = window.Vue.withCtx, zs = window.Vue.createVNode, O3 = window.Vue.openBlock, j3 = window.Vue.createElementBlock, H3 = { class: "sx-section-selector__header pa-4" }, q3 = { class: "sx-section-selector__header-text ma-0" }, G3 = ["textContent"], W3 = { class: "pt-0 ma-0" }, X3 = { class: "ma-0" }, K3 = window.Codex.CdxButton, Y3 = window.Codex.CdxIcon, Q3 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Ee();
    return (n, o) => {
      const s = R3("i18n");
      return O3(), j3("div", H3, [
        zs(uo(U), { class: "ma-0 pb-3" }, {
          default: Ti(() => [
            zs(uo(C), null, {
              default: Ti(() => {
                var a;
                return [
                  ac(Li("h6", q3, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Li("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: z3((a = uo(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, G3)
                ];
              }),
              _: 1
            }),
            zs(uo(C), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Ti(() => [
                zs(uo(K3), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Ti(() => [
                    zs(uo(Y3), { icon: uo(ls) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ac(Li("h4", W3, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        ac(Li("p", X3, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, Ym = window.Vue.renderSlot, J3 = window.Vue.renderList, Z3 = window.Vue.Fragment, ic = window.Vue.openBlock, Qm = window.Vue.createElementBlock, Ai = window.Vue.unref, Jm = window.Vue.createVNode, Zm = window.Vue.withCtx, eL = window.Vue.createBlock, tL = { class: "sx-section-selector__sections-list ma-0 pa-0" }, nL = window.Codex.CdxButton, oL = window.Codex.CdxIcon, Aw = {
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
    return (t, n) => (ic(), Qm("ul", tL, [
      Ym(t.$slots, "before-list"),
      (ic(!0), Qm(Z3, null, J3(e.sections, (o) => (ic(), eL(Ai(U), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Zm(() => [
          Jm(Ai(nL), {
            weight: "quiet",
            class: "col justify-start items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Zm(() => [
              Ym(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle,
                isEasy: o.isEasy
              }),
              Jm(Ai(oL), {
                icon: Ai(cs),
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
}, sL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const aL = window.Vue.resolveDirective, Di = window.Vue.createElementVNode, Pi = window.Vue.withDirectives, Ut = window.Vue.unref, Bi = window.Vue.openBlock, rc = window.Vue.createBlock, iL = window.Vue.createCommentVNode, Io = window.Vue.withCtx, Os = window.Vue.createVNode, rL = window.Vue.toDisplayString, lL = window.Vue.createTextVNode, cL = window.Vue.createElementBlock, uL = { class: "sx-section-selector__missing-sections py-2" }, dL = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, gL = ["lang", "dir", "innerHTML"], lc = window.Vue.computed, mL = window.Codex.CdxButton, pL = window.Codex.CdxInfoChip, hL = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Ee(), { targetLanguageURLParameter: n } = D(), o = lc(() => O.getAutonym(n.value)), s = lc(
      () => {
        var r;
        return Object.keys(((r = t.value) == null ? void 0 : r.missingSections) || {}).length === 0;
      }
    ), a = lc(() => {
      var r;
      return (r = t.value) != null && r.orderedMissingSections ? t.value.orderedMissingSections.map((l) => Ye(de({}, l), {
        isEasy: xf(
          t.value.getSectionSize(l.sourceTitle)
        )
      })) : [];
    });
    return (r, l) => {
      const c = aL("i18n");
      return Bi(), cL("section", uL, [
        Pi(Di("h4", dL, null, 512), [
          [c, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (Bi(), rc(Ut(U), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Io(() => [
            Os(Ut(C), {
              class: "py-6 justify-center",
              innerHTML: Ut(sL)
            }, null, 8, ["innerHTML"]),
            Os(Ut(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Io(() => [
                Pi(Di("h6", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Os(Ut(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Io(() => [
                Pi(Di("p", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Os(Ut(C), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Io(() => [
                Os(Ut(mL), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: l[1] || (l[1] = (u) => r.$emit("close"))
                }, {
                  default: Io(() => [
                    lL(rL(r.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Bi(), rc(Aw, {
          key: 0,
          sections: a.value,
          onSelectSection: l[0] || (l[0] = (u) => r.$emit("select-section", u))
        }, {
          default: Io(({ sourceSection: u, isEasy: i }) => {
            var d, g;
            return [
              Di("h5", {
                class: "ma-0",
                lang: (d = Ut(t)) == null ? void 0 : d.sourceLanguage,
                dir: Ut(O.getDir)((g = Ut(t)) == null ? void 0 : g.sourceLanguage),
                innerHTML: u
              }, null, 8, gL),
              i ? Pi((Bi(), rc(Ut(pL), {
                key: 0,
                class: "sx-section-selector__easy-section-badge"
              }, null, 512)), [
                [c, void 0, "cx-sx-section-selector-easy-section-badge"]
              ]) : iL("", !0)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const fL = window.Vue.resolveDirective, Ro = window.Vue.createElementVNode, wL = window.Vue.withDirectives, _t = window.Vue.unref, vL = window.Vue.toDisplayString, Fi = window.Vue.createVNode, Ni = window.Vue.withCtx, _L = window.Vue.openBlock, SL = window.Vue.createElementBlock, yL = { class: "sx-section-selector__present-sections py-2" }, xL = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, CL = { class: "sx-section-selector__present-section-button-content" }, bL = ["textContent"], kL = { class: "sx-section-selector__present-section-button-content" }, $L = ["lang", "dir", "innerHTML"], VL = ["lang", "dir", "innerHTML"], EL = window.Vue.computed, LL = window.Codex.CdxButton, TL = window.Codex.CdxIcon, ep = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Ee(), { targetLanguageURLParameter: n } = D(), o = EL(() => O.getAutonym(n.value));
    return (s, a) => {
      var l;
      const r = fL("i18n");
      return _L(), SL("section", yL, [
        wL(Ro("h4", xL, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        Fi(Aw, {
          sections: ((l = _t(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[1] || (a[1] = (c) => s.$emit("select-section", c))
        }, {
          "before-list": Ni(() => [
            Fi(_t(U), {
              tag: "li",
              class: "ma-0"
            }, {
              default: Ni(() => [
                Fi(_t(LL), {
                  weight: "quiet",
                  class: "col justify-start items-center py-3 px-4",
                  "aria-label": s.$i18n("sx-section-selector-next-button-aria-label"),
                  onClick: a[0] || (a[0] = (c) => s.$emit("select-section", _t(Qn).LEAD_SECTION_DUMMY_TITLE))
                }, {
                  default: Ni(() => [
                    Ro("div", CL, [
                      Ro("h5", {
                        class: "sx-section-selector__present-section-button-source",
                        textContent: vL(s.$i18n("cx-sx-present-lead-section-label"))
                      }, null, 8, bL)
                    ]),
                    Fi(_t(TL), {
                      icon: _t(cs),
                      class: "ms-auto"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          default: Ni(({ sourceSection: c, targetSection: u }) => {
            var i, d, g, m;
            return [
              Ro("div", kL, [
                Ro("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = _t(t)) == null ? void 0 : i.sourceLanguage,
                  dir: _t(O.getDir)((d = _t(t)) == null ? void 0 : d.sourceLanguage),
                  innerHTML: c
                }, null, 8, $L),
                Ro("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = _t(t)) == null ? void 0 : g.targetLanguage,
                  dir: _t(O.getDir)((m = _t(t)) == null ? void 0 : m.targetLanguage),
                  innerHTML: u
                }, null, 8, VL)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Re = window.Vue.createVNode, cc = window.Vue.openBlock, tp = window.Vue.createBlock, np = window.Vue.createCommentVNode, AL = window.Vue.resolveDirective, Rn = window.Vue.createElementVNode, js = window.Vue.withDirectives, at = window.Vue.unref, wn = window.Vue.withCtx, DL = window.Vue.normalizeClass, op = window.Vue.toDisplayString, sp = window.Vue.createTextVNode, PL = window.Vue.createElementBlock, BL = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, FL = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, NL = { class: "sx-section-selector__additional-consideration-title" }, ML = { href: "#" }, UL = { class: "sx-section-selector__additional-consideration-title" }, IL = { href: "#" }, Hs = window.Vue.computed, RL = window.Vue.inject, zL = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = RL("breakpoints"), n = Hs(() => t.value.desktopAndUp), { sectionSuggestion: o } = Ee(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = D(), c = Hs(() => O.getAutonym(s.value)), u = Hs(() => O.getAutonym(a.value)), i = Hs(
      () => {
        var x;
        return Z.getPageUrl(s.value, (x = o.value) == null ? void 0 : x.sourceTitle);
      }
    ), d = Hs(
      () => {
        var x;
        return Z.getPageUrl(a.value, (x = o.value) == null ? void 0 : x.targetTitle);
      }
    ), g = nt(), m = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: p } = Wt(), h = ds(), f = Qu(), { selectPageSectionByTitle: v } = Tr(), w = (x) => {
      l(x), p.value ? (f(), h()) : (v(x), g.push({ name: "sx-content-comparator" }));
    };
    return mw.cx.eventlogging.stats.selectSectionAccess(!n.value), (x, b) => {
      const _ = AL("i18n");
      return cc(), PL("section", BL, [
        Re(Q3, { onClose: m }),
        Re(Lw),
        Re(at(U), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: wn(() => [
            Re(at(C), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: wn(() => [
                Re(hL, {
                  onSelectSection: w,
                  onClose: m
                }),
                n.value ? np("", !0) : (cc(), tp(ep, {
                  key: 0,
                  onSelectSection: w
                })),
                Rn("section", {
                  class: DL(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  js(Rn("h4", FL, null, 512), [
                    [_, [
                      u.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Re(at(U), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: wn(() => [
                      Re(at(C), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: wn(() => [
                          Re(Km, {
                            path: i.value,
                            autonym: c.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Re(at(C), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: wn(() => [
                          Re(Km, {
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
                Re(at(U), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: wn(() => [
                    Re(at(C), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: wn(() => [
                        Rn("h6", NL, [
                          Re(at(et), {
                            icon: at(E0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          sp(" " + op(x.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        js(Rn("p", null, null, 512), [
                          [_, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        js(Rn("a", ML, null, 512), [
                          [_, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Re(at(C), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: wn(() => [
                        Rn("h6", UL, [
                          Re(at(et), {
                            icon: at(V0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          sp(" " + op(x.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        js(Rn("p", null, null, 512), [
                          [_, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        js(Rn("a", IL, null, 512), [
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
            n.value ? (cc(), tp(at(C), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: wn(() => [
                Re(ep, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: w
                })
              ]),
              _: 1
            })) : np("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, OL = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: zL
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, jL = window.Vue.resolveComponent, HL = window.Vue.createVNode, qL = window.Vue.normalizeClass, GL = window.Vue.openBlock, WL = window.Vue.createElementBlock;
function XL(e, t, n, o, s, a) {
  const r = jL("sx-section-selector");
  return GL(), WL("main", {
    class: qL(["sx-section-selector-view", a.classes])
  }, [
    HL(r)
  ], 2);
}
const KL = /* @__PURE__ */ pe(OL, [["render", XL]]), Mi = window.Vue.computed, YL = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = D(), n = Mi(
    () => O.getAutonym(e.value)
  ), o = Mi(
    () => O.getAutonym(t.value)
  ), { target: s, PUBLISHING_TARGETS: a } = Et(), r = Mi(
    () => s.value === a.EXPAND
  ), l = he();
  return Mi(() => {
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
const ap = window.Vue.unref, QL = window.Vue.createVNode, JL = window.Vue.openBlock, ZL = window.Vue.createElementBlock, e5 = { class: "sx-content-comparator__content-type-selector" }, t5 = window.Vue.watchEffect, n5 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = YL();
    return t5(() => {
      a.value.map((l) => l.value).includes(n.selection) || s(a.value[0].value);
    }), (r, l) => (JL(), ZL("div", e5, [
      QL(ap(ba), {
        items: ap(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Ui = window.Vue.computed, Dw = () => {
  const { currentTargetPage: e } = ot(), { activeSectionTargetTitle: t } = Ee(), n = Ui(
    () => {
      var l;
      return (((l = o.value) == null ? void 0 : l.title) || "").replace(/ /g, "_");
    }
  ), o = Ui(
    () => {
      var l;
      return (l = e.value) == null ? void 0 : l.getSectionByTitle(t.value);
    }
  ), { sourceSection: s } = ne(), a = Ui(() => {
    var l;
    return (l = s.value) == null ? void 0 : l.html;
  }), r = Ui(() => {
    var l;
    return (l = o.value) == null ? void 0 : l.html;
  });
  return {
    sourceSectionContent: a,
    targetSectionAnchor: n,
    targetSectionContent: r
  };
};
const Ii = window.Vue.createVNode, vn = window.Vue.unref, o5 = window.Vue.resolveDirective, s5 = window.Vue.withDirectives, qs = window.Vue.openBlock, ip = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ri = window.Vue.withCtx, uc = window.Vue.createBlock, a5 = window.Vue.normalizeClass, i5 = {
  key: 0,
  class: "ma-0 pa-0"
}, r5 = ["lang", "dir", "innerHTML"], rp = window.Vue.ref, zi = window.Vue.computed, l5 = window.Vue.onMounted, c5 = {
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
    const n = e, o = t, s = rp(!1), { sectionSuggestion: a, activeSectionTargetTitle: r } = Ee(), { isPresentLeadSection: l } = mt(), { sectionURLParameter: c } = D(), u = zi(
      () => (g.value || "").replace(/ /g, "_")
    ), i = (f) => o("update:contentTypeSelection", f), { targetSectionAnchor: d } = Dw(), g = zi(
      () => {
        var f;
        return (((f = a.value) == null ? void 0 : f.sourceSections) || []).find(
          (v) => v === c.value
        );
      }
    ), m = zi(() => {
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
    }), p = zi(
      () => Z.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), h = rp(null);
    return l5(() => {
      new IntersectionObserver(
        ([v]) => {
          s.value = v.intersectionRect.height < v.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(h.value.$el);
    }), (f, v) => {
      const w = o5("i18n");
      return qs(), uc(vn(U), {
        ref_key: "contentHeader",
        ref: h,
        class: a5(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
        direction: "column",
        align: "stretch",
        reverse: s.value
      }, {
        default: Ri(() => [
          Ii(n5, {
            selection: e.contentTypeSelection,
            "onUpdate:selection": i
          }, null, 8, ["selection"]),
          Ii(vn(U), {
            justify: "between",
            class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
          }, {
            default: Ri(() => [
              Ii(vn(C), null, {
                default: Ri(() => [
                  vn(l) ? s5((qs(), ip("h3", i5, null, 512)), [
                    [w, void 0, "cx-sx-present-lead-section-label"]
                  ]) : (qs(), ip("h3", {
                    key: 1,
                    lang: m.value.lang,
                    dir: m.value.dir,
                    class: "ma-0 pa-0",
                    innerHTML: m.value.title
                  }, null, 8, r5))
                ]),
                _: 1
              }),
              Ii(vn(C), { shrink: "" }, {
                default: Ri(() => [
                  s.value ? (qs(), uc(vn(Ke), {
                    key: 0,
                    icon: vn(wr),
                    progressive: "",
                    label: f.$i18n(
                      "cx-sx-content-comparator-content-header-translate-button-label"
                    ),
                    onClick: v[0] || (v[0] = (x) => f.$emit("translation-button-clicked"))
                  }, null, 8, ["icon", "label"])) : (qs(), uc(vn(Ke), {
                    key: 1,
                    class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                    icon: vn(Xh),
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
}, Oi = window.Vue.unref, lp = window.Vue.createVNode, u5 = window.Vue.openBlock, d5 = window.Vue.createElementBlock, g5 = { class: "sx-content-comparator__header-navigation flex items-center" }, m5 = window.Vue.computed, p5 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = D(), o = m5(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Tr(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    };
    return (l, c) => (u5(), d5("div", g5, [
      lp(Oi(Ke), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Oi(C0),
        onClick: a
      }, null, 8, ["icon"]),
      lp(Oi(Ke), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Oi(x0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const cp = window.Vue.toDisplayString, we = window.Vue.unref, h5 = window.Vue.resolveDirective, ji = window.Vue.withDirectives, _n = window.Vue.openBlock, zo = window.Vue.createElementBlock, dc = window.Vue.createCommentVNode, f5 = window.Vue.createTextVNode, w5 = window.Vue.createElementVNode, v5 = window.Vue.normalizeClass, gc = window.Vue.withCtx, up = window.Vue.createVNode, mc = window.Vue.createBlock, _5 = { class: "sx-content-comparator-header__mapped-section" }, S5 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, y5 = { key: 0 }, x5 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, C5 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, b5 = {
  key: 2,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, k5 = window.Vue.computed, $5 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = D(), { activeSectionTargetTitle: n } = Ee(), o = he(), { target: s, PUBLISHING_TARGETS: a, setTarget: r } = Et(), l = k5(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        O.getAutonym(t.value)
      )
    ), { isPresentLeadSection: c } = mt();
    return (u, i) => {
      const d = h5("i18n");
      return _n(), zo("div", _5, [
        up(we(U), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: gc(() => [
            up(we(C), { grow: "" }, {
              default: gc(() => [
                w5("h6", S5, [
                  f5(cp(l.value) + " ", 1),
                  we(s) === we(a).NEW_SECTION ? ji((_n(), zo("span", y5, null, 512)), [
                    [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : dc("", !0)
                ]),
                we(c) ? dc("", !0) : (_n(), zo("h6", {
                  key: 0,
                  class: v5(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": we(s) === we(a).NEW_SECTION
                  }])
                }, cp(we(n)), 3))
              ]),
              _: 1
            }),
            we(c) ? dc("", !0) : (_n(), mc(we(C), {
              key: 0,
              shrink: ""
            }, {
              default: gc(() => [
                we(s) === we(a).EXPAND ? (_n(), mc(we(Ke), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: we(Wh),
                  type: "icon",
                  onClick: i[0] || (i[0] = (g) => we(r)(we(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (_n(), mc(we(Ke), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: we(A0),
                  type: "icon",
                  onClick: i[1] || (i[1] = (g) => we(r)(we(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            }))
          ]),
          _: 1
        }),
        we(c) ? ji((_n(), zo("p", x5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-lead-section-clarifications"]
        ]) : we(s) === we(a).EXPAND ? ji((_n(), zo("p", C5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : ji((_n(), zo("p", b5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const Ae = window.Vue.unref, Oo = window.Vue.createVNode, V5 = window.Vue.toDisplayString, Xn = window.Vue.createElementVNode, E5 = window.Vue.resolveDirective, pc = window.Vue.withDirectives, Gs = window.Vue.openBlock, hc = window.Vue.createElementBlock, dp = window.Vue.createCommentVNode, fc = window.Vue.withCtx, gp = window.Vue.createBlock, L5 = { class: "sx-content-comparator__header pa-4" }, T5 = { class: "row my-1 py-2 mx-0 gap-6" }, A5 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, D5 = { class: "sx-content-comparator-header__titles shrink" }, P5 = ["lang", "dir"], B5 = {
  key: 0,
  class: "sx-content-comparator-header__section-title pa-0 ma-0"
}, F5 = ["lang", "dir", "innerHTML"], N5 = { class: "py-2 mb-1" }, M5 = /* @__PURE__ */ Xn("br", null, null, -1), Hi = window.Vue.computed, U5 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = D(), { sourceSection: n } = ne(), { sectionSuggestion: o } = Ee(), { isCurrentSectionPresent: s } = mt(), a = Hi(
      () => {
        var u;
        return (u = o.value) == null ? void 0 : u.missingSections.hasOwnProperty(t.value);
      }
    ), r = Hi(() => {
      var u;
      return (u = n.value) == null ? void 0 : u.html;
    }), l = Hi(() => [
      Qn.LEAD_SECTION_DUMMY_TITLE,
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), c = Hi(
      () => {
        var u;
        return (((u = o.value) == null ? void 0 : u.sourceSections) || []).find(
          (i) => i === t.value
        );
      }
    );
    return (u, i) => {
      var g;
      const d = E5("i18n");
      return Gs(), hc("div", L5, [
        Oo(Ae(Ke), {
          class: "py-2 pa-0",
          icon: Ae(b0),
          label: u.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (m) => u.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Xn("div", T5, [
          Xn("div", A5, [
            Xn("div", D5, [
              Xn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Ae(o).sourceLanguage,
                dir: Ae(O.getDir)(Ae(o).sourceLanguage)
              }, V5(Ae(o).sourceTitle), 9, P5),
              (g = Ae(n)) != null && g.isLeadSection ? pc((Gs(), hc("h2", B5, null, 512)), [
                [d, void 0, "cx-sx-present-lead-section-label"]
              ]) : (Gs(), hc("h2", {
                key: 1,
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Ae(o).sourceLanguage,
                dir: Ae(O.getDir)(Ae(o).sourceLanguage),
                innerHTML: c.value
              }, null, 8, F5))
            ]),
            Oo(p5, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          Xn("div", N5, [
            Oo(Ae(Ke), {
              class: "sx-content-comparator-header__translation-button",
              icon: Ae(wr),
              progressive: "",
              label: u.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (m) => u.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (Gs(), gp(Ae(U), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: fc(() => [
            Oo(Ae(C), {
              shrink: "",
              class: "pe-2"
            }, {
              default: fc(() => [
                Oo(Ae(et), { icon: Ae(L0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Oo(Ae(C), { class: "ma-0" }, {
              default: fc(() => [
                pc(Xn("strong", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                M5,
                pc(Xn("span", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : dp("", !0),
        Ae(s) ? (Gs(), gp($5, { key: 1 })) : dp("", !0)
      ]);
    };
  }
};
const mp = window.Vue.toDisplayString, I5 = window.Vue.createElementVNode, pp = window.Vue.openBlock, hp = window.Vue.createElementBlock, R5 = window.Vue.createCommentVNode, z5 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, O5 = ["textContent"], j5 = ["textContent"], Pw = {
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
    return (t, n) => (pp(), hp("section", z5, [
      I5("h5", {
        textContent: mp(e.placeholderTitle)
      }, null, 8, O5),
      e.placeholderSubtitle ? (pp(), hp("p", {
        key: 0,
        textContent: mp(e.placeholderSubtitle)
      }, null, 8, j5)) : R5("", !0)
    ]));
  }
}, H5 = (e, t, n) => {
  const o = t.indexOf(e);
  return t.slice(o + 1).map((a) => n[a]).filter(Boolean)[0] || null;
}, q5 = ({
  sourceSectionTitle: e,
  sourceSectionTitles: t,
  targetSectionTitles: n,
  presentSectionMappings: o,
  targetAppendixSectionTitles: s
}) => {
  const a = H5(
    e,
    t,
    o
  );
  return a !== null ? a : n.find(
    (l) => s.includes(l)
  ) || null;
}, wc = window.Vue.computed, G5 = window.Vue.createApp, W5 = window.Vuex.useStore, X5 = () => {
  const e = W5(), { sectionSuggestion: t } = Ee(), { currentTargetPage: n } = ot(), { sectionURLParameter: o } = D(), s = he(), a = () => G5(
    Pw,
    {
      placeholderTitle: s.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, r = wc(() => {
    const { appendixSectionTitles: u } = e.state.suggestions;
    return u[t.value.targetLanguage] || [];
  }), l = wc(
    () => q5({
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
  return wc(() => {
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
const vc = window.Vue.createVNode, it = window.Vue.unref, jo = window.Vue.openBlock, fp = window.Vue.createBlock, wp = window.Vue.createCommentVNode, qi = window.Vue.createElementVNode, _c = window.Vue.Fragment, Gi = window.Vue.createElementBlock, K5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, Y5 = { class: "sx-content-comparator__source-content" }, Q5 = ["lang", "dir", "innerHTML"], J5 = ["lang", "dir", "innerHTML"], Z5 = ["innerHTML"], eT = window.Vue.ref, vp = window.Vue.computed, _p = window.Vue.watch, tT = window.Vue.inject, nT = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = Et(), n = nt(), o = eT("source_section"), { logDashboardTranslationStartEvent: s } = Yu(), a = ds(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      s(), a();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = D(), { sourceSectionContent: i, targetSectionContent: d } = Dw(), g = X5(), { sectionSuggestion: m } = Ee(), { isCurrentSectionPresent: p } = mt(), h = vp(() => m.value.targetTitle), f = Vw();
    _p(
      h,
      () => y(this, null, function* () {
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
    ), _p(p, t, { immediate: !0 });
    const v = tT("breakpoints"), w = vp(() => v.value.mobile);
    return mw.cx.eventlogging.stats.sectionCompareAccess(w.value), (x, b) => (jo(), Gi("section", K5, [
      vc(U5, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      vc(c5, {
        "content-type-selection": o.value,
        "onUpdate:contentTypeSelection": b[0] || (b[0] = (_) => o.value = _),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      qi("section", Y5, [
        o.value === "source_section" ? (jo(), Gi(_c, { key: 0 }, [
          it(i) ? wp("", !0) : (jo(), fp(it(dt), { key: 0 })),
          qi("section", {
            lang: it(c),
            dir: it(O.getDir)(it(c)),
            class: "pt-2 px-4",
            innerHTML: it(i)
          }, null, 8, Q5)
        ], 64)) : o.value === "target_article" ? (jo(), Gi(_c, { key: 1 }, [
          it(g) ? wp("", !0) : (jo(), fp(it(dt), { key: 0 })),
          qi("article", {
            lang: it(u),
            dir: it(O.getDir)(it(u)),
            class: "px-4",
            innerHTML: it(g)
          }, null, 8, J5)
        ], 64)) : (jo(), Gi(_c, { key: 2 }, [
          qi("section", {
            class: "pa-4",
            innerHTML: it(d)
          }, null, 8, Z5),
          vc(Pw, {
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
}, oT = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: nT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, sT = window.Vue.resolveComponent, aT = window.Vue.createVNode, iT = window.Vue.normalizeClass, rT = window.Vue.openBlock, lT = window.Vue.createElementBlock;
function cT(e, t, n, o, s, a) {
  const r = sT("sx-content-comparator");
  return rT(), lT("main", {
    class: iT(["sx-content-comparator-view", a.classes])
  }, [
    aT(r)
  ], 2);
}
const uT = /* @__PURE__ */ pe(oT, [["render", cT]]);
const dT = window.Vue.resolveDirective, Ws = window.Vue.createElementVNode, Sp = window.Vue.withDirectives, Wi = window.Vue.unref, Sc = window.Vue.createVNode, yp = window.Vue.toDisplayString, xp = window.Vue.createTextVNode, Xs = window.Vue.withCtx, gT = window.Vue.openBlock, mT = window.Vue.createBlock, pT = { class: "mw-ui-dialog__header px-4 py-3" }, hT = { class: "mw-ui-dialog__header-title" }, fT = { class: "pa-4" }, wT = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Cp = window.Codex.CdxButton, vT = {
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
      const c = dT("i18n");
      return gT(), mT(Wi(kt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: Xs(() => [
          Ws("div", pT, [
            Sp(Ws("span", hT, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Xs(() => [
          Ws("div", wT, [
            Sc(Wi(Cp), {
              weight: "quiet",
              onClick: s
            }, {
              default: Xs(() => [
                xp(yp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Sc(Wi(Cp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Xs(() => [
                xp(yp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Xs(() => [
          Sc(Wi(fr)),
          Ws("div", fT, [
            Sp(Ws("span", null, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, _T = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => wo(a)
  );
  return s && ef(s) ? bt.parseTemplateWikitext(
    Jh(s),
    n,
    t
  ) : Promise.resolve(null);
}, Bw = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => wo(a)
  );
  return s ? bt.parseTemplateWikitext(
    Jh(s),
    n,
    t
  ) : Promise.resolve(null);
}, ST = window.Vuex.useStore, Zu = () => {
  const e = ST(), { sourceSection: t } = ne(), { getCurrentTitleByLanguage: n } = rn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = D(), a = Tw(), r = (i, d, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[d] = g;
      return;
    }
    const m = t.value.getContentTranslationUnitById(i);
    m instanceof ut ? m.blockTemplateProposedTranslations[d] = g : m instanceof Kn && m.addProposedTranslation(d, g);
  }, l = (i, d) => y(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, i))
      return "";
    try {
      const m = yield a();
      return yield bt.fetchSegmentTranslation(
        o.value,
        s.value,
        i,
        d,
        m
      );
    } catch (m) {
      return mw.log.error("Error while translating segment", m), "";
    }
  }), c = (i, d) => y(void 0, null, function* () {
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
    m instanceof ut && (m.setBlockTemplateAdaptationInfoByHtml(
      d,
      p
    ), p = (yield _T(
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
}, yT = window.Vuex.useStore, xT = () => {
  const { sourceSection: e } = ne(), t = yT(), { translateTranslationUnitById: n } = Zu();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function CT(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const bT = window.Vue.resolveDirective, ct = window.Vue.createElementVNode, Xi = window.Vue.withDirectives, je = window.Vue.unref, yc = window.Vue.createVNode, Sn = window.Vue.withCtx, kT = window.Vue.renderList, $T = window.Vue.Fragment, Ki = window.Vue.openBlock, VT = window.Vue.createElementBlock, ET = window.Vue.toDisplayString, xc = window.Vue.createBlock, bp = window.Vue.createCommentVNode, LT = { class: "mw-ui-dialog__header pa-4" }, TT = { class: "row ma-0 py-2" }, AT = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, DT = { class: "mb-0" }, PT = { class: "col shrink justify-center" }, BT = { class: "pb-2 mb-0" }, FT = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, NT = ["dir", "lang", "innerHTML"], MT = ["textContent"], UT = ["innerHTML"], IT = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, RT = /* @__PURE__ */ ct("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), zT = ["innerHTML"], Cc = window.Vue.computed, OT = window.Vuex.useStore, jT = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = ie.EMPTY_TEXT_PROVIDER_KEY, s = ie.ORIGINAL_TEXT_PROVIDER_KEY, a = OT(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: c
    } = ne(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: i
    } = D(), d = Cc(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        u.value,
        i.value
      )
    ), g = Cc(() => {
      const b = [s, o];
      return d.value.filter(
        (_) => !b.includes(_)
      );
    }), m = Cc(
      () => l.value ? r.value.proposedTitleTranslations : c.value.proposedTranslations
    ), p = xT(), h = (b) => {
      p(b), v();
    }, f = ie.getMTProviderLabel, v = () => n("update:active", !1), w = he(), x = CT(
      w.i18n("cx-tools-mt-noservices")
    );
    return (b, _) => {
      const k = bT("i18n");
      return e.active ? (Ki(), xc(je(kt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: Sn(() => [
          ct("div", LT, [
            ct("div", TT, [
              ct("div", AT, [
                Xi(ct("h4", DT, null, 512), [
                  [k, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              ct("div", PT, [
                yc(je(Ke), {
                  type: "icon",
                  icon: je(vr),
                  class: "pa-0",
                  onClick: v
                }, null, 8, ["icon"])
              ])
            ]),
            Xi(ct("h6", BT, null, 512), [
              [k, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: Sn(() => [
          yc(je(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: _[0] || (_[0] = (E) => h(je(s)))
          }, {
            header: Sn(() => [
              Xi(ct("h5", FT, null, 512), [
                [k, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: Sn(() => [
              ct("p", {
                dir: je(O.getDir)(je(u)),
                lang: je(u),
                innerHTML: m.value[je(s)]
              }, null, 8, NT)
            ]),
            _: 1
          }),
          (Ki(!0), VT($T, null, kT(g.value, (E) => (Ki(), xc(je(Ze), {
            key: E,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (M) => h(E)
          }, {
            header: Sn(() => [
              ct("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: ET(je(f)(E))
              }, null, 8, MT)
            ]),
            default: Sn(() => [
              ct("p", {
                innerHTML: m.value[E]
              }, null, 8, UT)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          yc(je(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: _[1] || (_[1] = (E) => h(je(o)))
          }, {
            header: Sn(() => [
              Xi(ct("h5", IT, null, 512), [
                [k, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: Sn(() => [
              RT
            ]),
            _: 1
          }),
          g.value.length ? bp("", !0) : (Ki(), xc(je(Ze), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: Sn(() => [
              ct("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: je(x)
              }, null, 8, zT)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : bp("", !0);
    };
  }
}, HT = window.Vuex.useStore, gs = () => {
  const { sourceSection: e } = ne(), t = HT(), { translateTranslationUnitById: n } = Zu(), { currentMTProvider: o } = Be(t), s = (l) => y(void 0, null, function* () {
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
const kp = window.Vue.toDisplayString, bc = window.Vue.createElementVNode, Yi = window.Vue.unref, qT = window.Vue.createVNode, GT = window.Vue.normalizeClass, WT = window.Vue.withCtx, XT = window.Vue.openBlock, KT = window.Vue.createBlock, YT = ["href"], QT = ["textContent"], JT = ["textContent"], go = window.Vue.computed, $p = "sx-sentence-selector__section-title", ZT = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ne(), { currentSourcePage: o, currentTargetPageTitle: s } = ot(), { sourceLanguageURLParameter: a } = D(), { isPresentLeadSection: r } = mt(), l = go(() => {
      var f;
      return (f = o.value) == null ? void 0 : f.title;
    }), c = go(
      () => {
        var f;
        return ((f = t.value) == null ? void 0 : f.title) || l.value;
      }
    ), u = go(
      () => Z.getPageUrl(a.value, l.value)
    ), i = go(
      () => {
        var f;
        return !!((f = t.value) != null && f.translatedTitle);
      }
    ), d = go(
      () => i.value ? "translated" : "selected"
    ), g = go(() => {
      const f = [$p];
      return n.value && !r.value && f.push(`${$p}--${d.value}`), f;
    }), { selectTranslationUnitById: m } = gs(), p = () => m(0), h = go(
      () => r.value ? s.value : c.value
    );
    return (f, v) => (XT(), KT(Yi(C), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: WT(() => [
        bc("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          bc("strong", {
            textContent: kp(l.value)
          }, null, 8, QT),
          qT(Yi(et), {
            icon: Yi(Xh),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, YT),
        bc("h2", {
          class: GT(["pa-0 ma-0", g.value]),
          onClick: v[0] || (v[0] = (w) => Yi(r) ? p : null),
          textContent: kp(h.value)
        }, null, 10, JT)
      ]),
      _: 1
    }));
  }
};
const yn = window.Vue.unref, Ks = window.Vue.createVNode, Qi = window.Vue.withCtx, Vp = window.Vue.toDisplayString, Ep = window.Vue.createTextVNode, eA = window.Vue.openBlock, tA = window.Vue.createBlock, Lp = window.Vue.computed, kc = window.Codex.CdxButton, Tp = window.Codex.CdxIcon, Fw = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = ne(), { isPresentLeadSection: s } = mt(), a = Lp(
      () => {
        var l;
        return (l = t.value) == null ? void 0 : l.isSelectedTranslationUnitLast;
      }
    ), r = Lp(
      () => s.value || n.value
    );
    return (l, c) => (eA(), tA(yn(U), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Qi(() => [
        Ks(yn(kc), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": l.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: r.value,
          onClick: c[0] || (c[0] = (u) => l.$emit("select-previous-segment"))
        }, {
          default: Qi(() => [
            Ks(yn(Tp), {
              class: "me-1",
              icon: yn(zu)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Ks(yn(kc), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !yn(o),
          onClick: c[1] || (c[1] = (u) => l.$emit("apply-translation"))
        }, {
          default: Qi(() => [
            Ep(Vp(l.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Ks(yn(kc), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: a.value,
          onClick: c[2] || (c[2] = (u) => l.$emit("skip-translation"))
        }, {
          default: Qi(() => [
            Ep(Vp(l.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Ks(yn(Tp), {
              class: "ms-1",
              size: "small",
              icon: yn(cs)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const mo = window.Vue.unref, nA = window.Vue.toDisplayString, Ys = window.Vue.createVNode, Ji = window.Vue.withCtx, oA = window.Vue.openBlock, sA = window.Vue.createBlock, $c = window.Vue.computed, aA = window.Vuex.useStore, iA = window.Codex.CdxButton, rA = window.Codex.CdxIcon, lA = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = aA(), n = $c(() => t.state.application.currentMTProvider), o = he(), s = $c(() => ({
      [ie.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ie.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = $c(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ie.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (oA(), sA(mo(C), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Ji(() => [
        Ys(mo(U), { class: "ma-0 ps-5 pb-4" }, {
          default: Ji(() => [
            Ys(mo(C), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: nA(a.value)
            }, null, 8, ["textContent"]),
            Ys(mo(C), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Ji(() => [
                Ys(mo(iA), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (c) => r.$emit("configure-options"))
                }, {
                  default: Ji(() => [
                    Ys(mo(rA), {
                      class: "pa-0",
                      icon: mo(Ru)
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
const It = window.Vue.unref, zn = window.Vue.createVNode, cA = window.Vue.resolveDirective, Ap = window.Vue.createElementVNode, uA = window.Vue.withDirectives, Dp = window.Vue.toDisplayString, Pp = window.Vue.createTextVNode, Qs = window.Vue.withCtx, dA = window.Vue.openBlock, gA = window.Vue.createElementBlock, mA = { class: "mt-retry-body pb-5" }, pA = { class: "retry-body__message" }, Bp = window.Codex.CdxButton, Vc = window.Codex.CdxIcon, hA = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = cA("i18n");
      return dA(), gA("div", mA, [
        Ap("div", pA, [
          zn(It(Vc), {
            class: "me-2",
            icon: It(ix)
          }, null, 8, ["icon"]),
          uA(Ap("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        zn(It(U), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Qs(() => [
            zn(It(C), { cols: "6" }, {
              default: Qs(() => [
                zn(It(Bp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Qs(() => [
                    zn(It(Vc), {
                      class: "me-1",
                      icon: It(Bf)
                    }, null, 8, ["icon"]),
                    Pp(" " + Dp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            zn(It(C), { cols: "6" }, {
              default: Qs(() => [
                zn(It(Bp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Qs(() => [
                    zn(It(Vc), {
                      class: "me-1",
                      icon: It(wx)
                    }, null, 8, ["icon"]),
                    Pp(" " + Dp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Ho = window.Vue.createVNode, rt = window.Vue.unref, Js = window.Vue.openBlock, fA = window.Vue.createElementBlock, wA = window.Vue.createCommentVNode, Zi = window.Vue.createBlock, vA = window.Vue.normalizeClass, _A = window.Vue.normalizeStyle, Zs = window.Vue.withCtx, SA = window.Vue.toDisplayString, yA = window.Vue.createTextVNode, xA = window.Vue.normalizeProps, CA = window.Vue.guardReactiveProps, bA = ["lang", "dir", "innerHTML"], Ec = window.Vue.ref, kA = window.Vue.onMounted, $A = window.Vue.onBeforeUnmount, Lc = window.Vue.computed, VA = window.Vue.nextTick, EA = window.Vuex.useStore, LA = window.Codex.CdxButton, TA = window.Codex.CdxIcon, AA = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Ec(0), n = Ec(null), o = Ec(null), s = EA(), { currentMTProvider: a } = Be(s), { targetLanguageURLParameter: r } = D(), { sourceSection: l, currentProposedTranslation: c } = ne(), u = Lc(
      () => {
        var p, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (p = l.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), i = Lc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), d = Lc(
      () => !!c.value || a.value === ie.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    kA(() => y(this, null, function* () {
      yield VA(), g(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), $A(() => {
      m.unobserve(n.value.$el), m.unobserve(o.value.$el);
    });
    const m = new ResizeObserver(() => g());
    return (p, h) => (Js(), Zi(rt(Ze), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Zs(() => [
        Ho(rt(U), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Zs(() => [
            Ho(lA, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => p.$emit("configure-options"))
            }, null, 512),
            Ho(rt(C), {
              class: vA(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !d.value && u.value
              }]),
              style: _A(d.value ? i.value : null)
            }, {
              default: Zs(() => [
                d.value ? (Js(), fA("section", {
                  key: 0,
                  lang: rt(r),
                  dir: rt(O.getDir)(rt(r)),
                  innerHTML: rt(c)
                }, null, 8, bA)) : u.value ? (Js(), Zi(rt(dt), { key: 1 })) : (Js(), Zi(hA, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => p.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => p.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Ho(rt(C), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Zs(() => [
                d.value || u.value ? (Js(), Zi(rt(LA), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !d.value,
                  onClick: h[3] || (h[3] = (f) => p.$emit("edit-translation", rt(c)))
                }, {
                  default: Zs(() => [
                    Ho(rt(TA), {
                      class: "me-1",
                      icon: rt(Iu)
                    }, null, 8, ["icon"]),
                    yA(" " + SA(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : wA("", !0),
                Ho(Fw, xA(CA(p.$attrs)), null, 16)
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
}, DA = window.Vue.computed, PA = (e) => DA(() => {
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
const BA = window.Vue.unref, FA = window.Vue.normalizeClass, NA = window.Vue.openBlock, MA = window.Vue.createElementBlock, UA = ["innerHTML"], IA = window.Vue.onMounted, RA = window.Vue.ref, zA = window.Vue.computed, OA = {
  __name: "SubSection",
  props: {
    subSection: {
      type: ut,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = RA(null), a = PA(n.subSection);
    IA(() => {
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
    const { selectTranslationUnitById: r } = gs(), l = (u) => {
      if (u.selected) {
        o("bounce-translation");
        return;
      }
      r(u.id);
    }, c = zA(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (u, i) => (NA(), MA("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: FA(["sx-sentence-selector__subsection", c.value]),
      innerHTML: BA(a)
    }, null, 10, UA));
  }
};
const Fp = window.Vue.unref, Np = window.Vue.createVNode, Mp = window.Vue.normalizeStyle, jA = window.Vue.openBlock, HA = window.Vue.createElementBlock, Up = window.Vue.computed, Nw = {
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
    const t = e, n = Up(() => ({ "--size": t.size })), o = Up(
      () => !t.isTemplateAdapted || t.percentage === 0 ? D0 : lu
    );
    return (s, a) => (jA(), HA("div", {
      class: "block-template-status-indicator",
      style: Mp(n.value)
    }, [
      Np(Fp(K_), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      Np(Fp(et), {
        icon: o.value,
        size: e.size / 2,
        style: Mp({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const On = window.Vue.unref, er = window.Vue.createVNode, Tc = window.Vue.withCtx, qA = window.Vue.openBlock, GA = window.Vue.createBlock, WA = window.Vue.computed, Ip = window.Codex.CdxButton, Rp = window.Codex.CdxIcon, Mw = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ne(), o = WA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (qA(), GA(On(U), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Tc(() => [
        er(On(Ip), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: On(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Tc(() => [
            er(On(Rp), { icon: On(zu) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        er(On(Ip), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: Tc(() => [
            er(On(Rp), { icon: On(cs) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, ea = window.Vue.openBlock, tr = window.Vue.createBlock;
window.Vue.createCommentVNode;
const xn = window.Vue.unref, qo = window.Vue.withCtx, ta = window.Vue.createVNode, Ac = window.Vue.toDisplayString, Dc = window.Vue.createElementVNode, XA = window.Vue.renderList, KA = window.Vue.Fragment, YA = window.Vue.createElementBlock, QA = { class: "pa-4" }, JA = ["textContent"], ZA = ["textContent"], eD = window.Vuex.useStore, nr = window.Vue.computed, tD = {
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
    const t = e, { targetLanguageAutonym: n } = Be(eD()), o = nr(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = he(), a = nr(() => {
      let c;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? c = "cx-sx-block-template-mapping-status-title-partially-template" : c = "cx-sx-block-template-mapping-status-title-fully-template" : c = "cx-sx-block-template-mapping-status-title-unadapted-template" : c = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(c);
    }), r = nr(() => {
      let c;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? c = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? c = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : c = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(c);
    }), l = nr(() => {
      let c = [];
      if (!t.targetTemplateExists)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: B0,
          color: Ct.gray500
        });
      else if (!t.isTemplateAdapted)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: vr,
          color: Ct.gray500
        });
      else if (o.value < 100)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: lu,
          color: Ct.blue600
        });
      else {
        let u;
        t.sourceParamsCount ? u = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : u = s.i18n("cx-sx-block-template-no-source-params-text"), c.push({
          text: u,
          icon: lu,
          color: Ct.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? c.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: wr,
        color: Ct.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && c.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: w0,
        color: Ct.gray500
      }), c;
    });
    return (c, u) => (ea(), tr(xn(kt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: c.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: u[0] || (u[0] = (i) => c.$emit("update:active", i))
    }, {
      header: qo(() => [
        ta(xn(U), {
          justify: "center",
          class: "mt-4"
        }, {
          default: qo(() => [
            ta(xn(C), { shrink: "" }, {
              default: qo(() => [
                e.targetTemplateExists ? (ea(), tr(Nw, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (ea(), tr(xn(et), {
                  key: 1,
                  icon: xn(v0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: qo(() => [
        Dc("div", QA, [
          Dc("h3", {
            textContent: Ac(a.value)
          }, null, 8, JA),
          Dc("p", {
            class: "mt-6 text-small",
            textContent: Ac(r.value)
          }, null, 8, ZA),
          (ea(!0), YA(KA, null, XA(l.value, (i, d) => (ea(), tr(xn(U), {
            key: d,
            align: "start",
            class: "mt-4"
          }, {
            default: qo(() => [
              ta(xn(C), { shrink: "" }, {
                default: qo(() => [
                  ta(xn(et), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              ta(xn(C), {
                textContent: Ac(i.text)
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
const De = window.Vue.unref, He = window.Vue.createVNode, Qt = window.Vue.withCtx, Pc = window.Vue.toDisplayString, zp = window.Vue.createTextVNode, nD = window.Vue.resolveDirective, Op = window.Vue.withDirectives, jp = window.Vue.createElementVNode, oD = window.Vue.normalizeClass, Go = window.Vue.openBlock, Hp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const or = window.Vue.createBlock, qp = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const Gp = window.Vue.mergeProps, sD = { class: "block-template-adaptation-card__container pa-4" }, aD = ["textContent"], iD = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, qe = window.Vue.computed, rD = window.Vue.ref, lD = window.Vuex.useStore, Wp = window.Codex.CdxButton, Xp = window.Codex.CdxIcon, cD = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = lD(), { targetLanguageAutonym: n, currentMTProvider: o } = Be(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = ne(), r = qe(() => {
      var L;
      return (L = s.value) == null ? void 0 : L.isTranslated;
    }), l = qe(() => {
      var P;
      return ((P = s.value) == null ? void 0 : P.blockTemplateTranslatedContent) || a.value;
    }), c = qe(
      () => {
        var L;
        return (L = s.value) == null ? void 0 : L.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = qe(
      () => {
        var L;
        return !((L = t.state.application.mtRequestsPending) != null && L.includes(
          s.value.id
        ));
      }
    ), i = he(), d = qe(
      // Strip HTML comments and return
      () => {
        var L, P;
        return ((P = (L = s.value) == null ? void 0 : L.sourceBlockTemplateName) == null ? void 0 : P.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = qe(
      () => {
        var L, P;
        return (P = (L = s.value) == null ? void 0 : L.blockTemplateAdaptationInfo) == null ? void 0 : P[o.value];
      }
    ), m = qe(
      () => {
        var L, P;
        return ((L = g.value) == null ? void 0 : L.adapted) || !!((P = g.value) != null && P.partial);
      }
    ), p = qe(() => g.value ? "block-template-adaptation-card__body--" + (m.value ? "success" : "warning") : null), h = qe(() => g.value ? m.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = qe(
      () => {
        var L;
        return Object.keys(((L = s.value) == null ? void 0 : L.sourceTemplateParams) || {}).length;
      }
    ), v = qe(() => {
      var P;
      const L = (P = s.value) == null ? void 0 : P.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(L || {});
    }), w = qe(() => v.value.length), x = qe(() => {
      const L = E.value;
      return f.value + L === 0 ? 100 : w.value / (f.value + L) * 100 || 0;
    }), b = rD(!1), _ = () => {
      b.value = !0;
    }, k = (L) => L.filter((P) => !v.value.includes(P)), E = qe(() => {
      var P;
      const L = ((P = g.value) == null ? void 0 : P.mandatoryTargetParams) || [];
      return k(L).length;
    }), M = qe(() => {
      var P;
      const L = ((P = g.value) == null ? void 0 : P.optionalTargetParams) || [];
      return k(L).length;
    });
    return (L, P) => {
      const z = nD("i18n");
      return Go(), or(De(Ze), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Qt(() => [
          jp("div", sD, [
            He(De(U), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Qt(() => [
                He(De(C), { shrink: "" }, {
                  default: Qt(() => [
                    He(De(Xp), {
                      icon: De(vx),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                He(De(C), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Qt(() => [
                    zp(Pc(d.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (Go(), Hp("div", {
              key: 0,
              class: oD(["pa-4 mb-4", p.value])
            }, [
              He(De(U), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Qt(() => [
                  Op(He(De(C), { tag: "h5" }, null, 512), [
                    [z, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  He(De(C), { shrink: "" }, {
                    default: Qt(() => [
                      He(Nw, {
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
              jp("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Pc(c.value)
              }, null, 8, aD),
              He(De(Wp), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: P[0] || (P[0] = (Q) => L.$emit("edit-translation", l.value))
              }, {
                default: Qt(() => [
                  zp(Pc(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (Go(), Hp("div", iD, [
              He(De(U), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Qt(() => [
                  Op(He(De(C), { tag: "h5" }, null, 512), [
                    [z, [
                      De(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  He(De(C), { shrink: "" }, {
                    default: Qt(() => [
                      He(De(Wp), {
                        weight: "quiet",
                        "aria-label": L.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Qt(() => [
                          He(De(Xp), {
                            icon: De(px),
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
            ])) : (Go(), or(De(dt), { key: 2 }))
          ]),
          r.value ? (Go(), or(Mw, qp(Gp({ key: 1 }, L.$attrs)), null, 16)) : (Go(), or(Fw, qp(Gp({ key: 0 }, L.$attrs)), null, 16)),
          He(tD, {
            active: b.value,
            "onUpdate:active": P[1] || (P[1] = (Q) => b.value = Q),
            "source-params-count": f.value,
            "target-params-count": w.value,
            "mandatory-missing-params-count": E.value,
            "optional-missing-params-count": M.value,
            "is-template-adapted": m.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const uD = window.Vue.unref, dD = window.Vue.createVNode, gD = window.Vue.openBlock, mD = window.Vue.createElementBlock, pD = { class: "translated-segment-card-header" }, hD = window.Vue.computed, fD = {
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
    const n = t, { isSectionTitleSelected: o } = ne(), s = he(), a = hD(() => [
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
    return (l, c) => (gD(), mD("div", pD, [
      dD(uD(ba), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const wD = window.Vue.useCssVars, ze = window.Vue.createVNode, Kp = window.Vue.resolveDirective, vD = window.Vue.createElementVNode, Bc = window.Vue.withDirectives, ye = window.Vue.unref, _D = window.Vue.normalizeStyle, sr = window.Vue.openBlock, Yp = window.Vue.createElementBlock, SD = window.Vue.createCommentVNode, yD = window.Vue.normalizeClass, St = window.Vue.withCtx, xD = window.Vue.toDisplayString, CD = window.Vue.createTextVNode, Qp = window.Vue.createBlock, bD = window.Vue.normalizeProps, kD = window.Vue.guardReactiveProps, Cn = window.Vue.computed, $D = window.Vue.ref, VD = window.Vue.inject, ED = window.Vuex.useStore, LD = window.Codex.CdxButton, Fc = window.Codex.CdxIcon, TD = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    wD((w) => ({
      "4929555c": v.value
    }));
    const t = $D("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = ne(), { targetLanguage: a } = Be(ED()), r = Cn(() => t.value === "sentence"), l = Cn(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (x) => {
            var b;
            return x.id === ((b = o.value) == null ? void 0 : b.id);
          }
        )
      )
    ), c = Cn(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), u = VD("colors"), i = u.gray200, d = u.red600, g = Cn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), m = Cn(
      () => on.calculateScore(
        g.value,
        c.value,
        a.value
      )
    ), p = Cn(
      () => on.getScoreStatus(m.value)
    ), h = Cn(
      () => `translated-segment-card__modification-stats__percentage--${p.value}`
    ), f = Cn(() => ({
      failure: m.value === 0 ? null : u.yellow700,
      warning: u.yellow700,
      success: u.green600
    })), v = Cn(
      () => f.value[p.value]
    );
    return (w, x) => {
      const b = Kp("i18n"), _ = Kp("i18n-html");
      return sr(), Qp(ye(Ze), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: St(() => [
          ze(ye(U), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: St(() => [
              ze(fD, {
                selection: t.value,
                "onUpdate:selection": x[0] || (x[0] = (k) => t.value = k)
              }, null, 8, ["selection"]),
              ze(ye(C), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: St(() => [
                  ze(ye(U), { class: "ma-0" }, {
                    default: St(() => [
                      ze(ye(C), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: St(() => [
                          Bc(vD("h5", null, null, 512), [
                            [b, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? Bc((sr(), Yp("p", {
                            key: 0,
                            style: _D({ color: ye(d) })
                          }, null, 4)), [
                            [b, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Bc((sr(), Yp("p", {
                            key: 1,
                            class: yD(h.value)
                          }, null, 2)), [
                            [_, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      ze(ye(C), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: St(() => [
                          ze(ye(U), { class: "ma-0 ms-2" }, {
                            default: St(() => [
                              ze(ye(C), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: St(() => [
                                  ze(ye(Fc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ye(yx)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              ze(ye(C), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: St(() => [
                                  ze(ye(Yh), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: v.value,
                                    background: ye(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              ze(ye(C), { shrink: "" }, {
                                default: St(() => [
                                  ze(ye(Fc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ye(_x)
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
                  r.value ? (sr(), Qp(ye(LD), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: x[1] || (x[1] = (k) => w.$emit("edit-translation", g.value))
                  }, {
                    default: St(() => [
                      ze(ye(Fc), {
                        class: "me-1",
                        icon: ye(Iu)
                      }, null, 8, ["icon"]),
                      CD(" " + xD(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : SD("", !0)
                ]),
                _: 1
              }),
              ze(ye(C), { class: "translated-segment-card__actions" }, {
                default: St(() => [
                  ze(Mw, bD(kD(w.$attrs)), null, 16)
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
}, AD = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = ne(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = gs(), { isPresentLeadSection: s } = mt(), { currentTranslation: a } = Wt();
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
}, Uw = window.Vuex.useStore, DD = () => {
  const e = Uw(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D();
  return () => y(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = mw.config.get("wgContentTranslationEnableMT");
    let s;
    o ? s = yield br.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : s = new ie(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, PD = () => {
  const e = Uw(), { currentMTProvider: t } = Be(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = D(), s = DD();
  return () => y(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = ie.getStorageKey(
        n.value,
        o.value
      );
      let l = mw.storage.get(r);
      (!l || !a.includes(l)) && (l = a[0]), e.commit("application/setCurrentMTProvider", l);
    }
  });
}, BD = window.Vue.computed, FD = (e) => {
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
}, ND = () => {
  const { selectedContentTranslationUnit: e } = ne(), t = BD(
    () => e.value instanceof ut
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && FD(o);
  };
}, MD = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (l) => !ie.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, UD = window.Vue.computed, Iw = () => {
  const { currentTranslation: e } = Wt(), { currentSourcePage: t } = ot();
  return UD(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, ID = window.Vue.computed, Pa = () => {
  const { sourceSection: e } = ne(), { currentTargetPageTitle: t } = ot(), { isMissingLeadSection: n } = mt();
  return { targetPageTitleForPublishing: ID(
    () => n.value ? e.value.title : t.value
  ) };
}, RD = window.Vuex.useStore, ed = () => {
  const e = RD(), { sourceSection: t } = ne(), { targetPageTitleForPublishing: n } = Pa(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = D(), r = Iw(), { target: l, PUBLISHING_TARGETS: c } = Et();
  return () => {
    const u = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(d);
    g.forEach(
      (p) => MD(p, i)
    );
    const m = t.value.getTranslationProgress(a);
    return bt.saveTranslation({
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
}, zD = window.Vue.effectScope, OD = window.Vue.onScopeDispose, jD = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = zD(!0), n = o.run(() => e(...a))), OD(s), n);
}, HD = window.Vuex.useStore;
let Nc;
const qD = () => {
  const e = HD(), t = ed();
  let n = 1e3, o = 0;
  return Nc = Wu(() => t().then((a) => {
    a instanceof Zn ? (n *= o + 1, o++, setTimeout(Nc, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof os)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Nc;
}, Rw = jD(qD), GD = window.Vuex.useStore, WD = () => {
  const e = GD(), t = Rw(), { currentMTProvider: n } = Be(e), { sourceSection: o, currentProposedTranslation: s } = ne(), { selectNextTranslationUnit: a } = gs();
  return () => y(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, XD = window.Vuex.useStore, KD = () => {
  const e = XD(), t = Rw();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, YD = window.Vuex.useStore, QD = window.Vue.computed, zw = () => {
  const e = YD(), { currentTranslation: t } = Wt(), { currentMTProvider: n } = Be(e), { currentTargetPageTitle: o } = ot(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = D(), c = Vt(), u = QD(() => {
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
      const v = t.value.targetSectionTitle;
      v && (f.translation_target_section = v);
    } else
      o.value && (f.translation_target_title = o.value);
    return n.value && (f.translation_provider = ie.getProviderForInstrumentation(n.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      const f = de({
        event_type: "editor_open"
      }, u.value);
      return c(f);
    },
    logEditorCloseEvent: () => {
      const f = de({
        event_type: "editor_close"
      }, u.value);
      return c(f);
    },
    logEditorCloseWarnEvent: () => c(de({
      event_type: "editor_close_warn"
    }, u.value)),
    logEditorSegmentAddEvent: () => c(de({
      event_type: "editor_segment_add"
    }, u.value)),
    logEditorSegmentSkipEvent: () => c(de({
      event_type: "editor_segment_skip"
    }, u.value)),
    logEditorSegmentEditEvent: () => c(de({
      event_type: "editor_segment_edit"
    }, u.value))
  };
}, JD = (e, t, n, o) => y(void 0, null, function* () {
  var l, c, u;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((c = t.mt) == null ? void 0 : c.content), a = (u = t == null ? void 0 : t.mt) == null ? void 0 : u.engine, r = yield Bw(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), ZD = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, e6 = (e, t, n, o) => y(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return JD(e, t, n, o);
  ZD(e, t);
}), t6 = (e, t, n, o) => {
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
        const u = e6(
          l,
          c,
          t || e.title,
          n
        );
        s.push(u);
      }
  return Promise.all(s);
}, n6 = { restoreCorporaDraft: t6 }, o6 = () => {
  const { currentSourcePage: e } = ot(), { sourceSection: t } = ne();
  return (n) => y(void 0, null, function* () {
    if (n.restored)
      return;
    try {
      const s = yield bt.fetchTranslationUnits(
        n.translationId
      );
      yield n6.restoreCorporaDraft(
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
let Mc = null;
function s6() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((o) => t.includes(o));
}
function Ow() {
  return Mc === null && (Mc = s6()), Mc;
}
const jw = window.Vue.ref, Uc = jw(!1), Ic = jw(!1);
function Jp() {
  return {
    isPermissionWarningDismissed: Uc,
    dismissPermissionWarning: () => {
      Uc.value = !0;
    },
    resetPermissionWarning: () => {
      Uc.value = !1;
    },
    isTitleErrorDismissed: Ic,
    dismissTitleError: () => {
      Ic.value = !0;
    },
    resetTitleError: () => {
      Ic.value = !1;
    }
  };
}
const le = window.Vue.unref, yt = window.Vue.createVNode, Rt = window.Vue.withCtx, a6 = window.Vue.resolveDirective, bn = window.Vue.createElementVNode, i6 = window.Vue.withDirectives, na = window.Vue.toDisplayString, r6 = window.Vue.createTextVNode, Jt = window.Vue.openBlock, jn = window.Vue.createBlock, Zp = window.Vue.createCommentVNode, l6 = window.Vue.renderList, c6 = window.Vue.Fragment, eh = window.Vue.createElementBlock, u6 = window.Vue.normalizeClass, d6 = window.Vue.normalizeStyle, g6 = { class: "sx-sentence-selector__header-title mb-0" }, m6 = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, p6 = { class: "sx-sentence-selector__section-contents px-4" }, Hn = window.Vue.computed, h6 = window.Vue.nextTick, f6 = window.Vue.onMounted, oa = window.Vue.ref, th = window.Vue.watch, w6 = window.Vuex.useStore, nh = window.Codex.CdxButton, v6 = window.Codex.CdxIcon, oh = window.Codex.CdxMessage, _6 = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = oa(!1), n = oa(!1), o = oa("100%"), s = w6(), { currentMTProvider: a, previousRoute: r } = Be(s), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      pageURLParameter: u,
      sectionURLParameter: i
    } = D(), { resetPublishTarget: d, target: g } = Et(), m = $r();
    g.value || m(
      l.value,
      c.value,
      u.value
    ).then(() => d());
    const { sourceSection: p, selectedContentTranslationUnit: h } = ne(), { targetPageTitleForPublishing: f } = Pa(), v = oa({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), w = Hn(
      () => Object.values(v.value).every(Boolean)
    ), x = Hn(
      () => {
        var J;
        return (J = p.value) == null ? void 0 : J.isSelectedTranslationUnitTranslated;
      }
    ), b = Hn(() => {
      var J;
      return (J = p.value) == null ? void 0 : J.subSections;
    }), _ = Hn(
      () => {
        var J;
        return (J = p.value) == null ? void 0 : J.selectedTranslationUnitOriginalContent;
      }
    ), k = Hn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: E,
      logEditorCloseEvent: M,
      logEditorCloseWarnEvent: L,
      logEditorSegmentAddEvent: P,
      logEditorSegmentSkipEvent: z
    } = zw(), Q = () => {
      var bo;
      const J = F.currentRoute.value.meta.workflowStep, Tn = F.getRoutes().find(
        (Br) => Br.name === r.value
      ), pt = ((bo = Tn == null ? void 0 : Tn.meta) == null ? void 0 : bo.workflowStep) || 0;
      return J > pt;
    }, se = AD();
    PD()().then(() => {
      Q() && E(), v.value.mtProviders = !0;
    });
    const N = ND(), { fetchTranslationsByStatus: I, translationsFetched: G } = us(), X = o6(), { currentTranslation: re } = Wt(), { selectPageSectionByTitle: xe, selectPageSectionByIndex: ke } = Tr(), $e = Ju(), Fe = as();
    f6(() => y(this, null, function* () {
      if (!G.value.draft) {
        const J = [
          // required to get current draft translation (if exists)
          I("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          $e(l.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          Fe(l.value, [u.value])
        ];
        yield Promise.all(J);
      }
      v.value.pageMetadata = !0, i.value ? yield xe(i.value) : yield ke(0), v.value.pageContent = !0, re.value && (yield X(re.value)), v.value.draftRestored = !0, g.value || m(
        l.value,
        c.value,
        u.value
      ).then(() => d()), th(
        w,
        () => y(this, null, function* () {
          w.value && (yield h6(), se(), N());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), th(h, N);
    const { selectNextTranslationUnit: R, selectPreviousTranslationUnit: B } = gs(), j = () => (z(), R()), S = WD(), V = () => {
      P(), S();
    }, T = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, F = nt(), K = () => {
      const { autoSavePending: J } = s.state.application;
      if (J) {
        ps.value = !0, L();
        return;
      }
      H();
    }, fe = KD(), { clearTranslationURLParameters: W } = D(), H = () => y(this, null, function* () {
      I("draft"), re.value && (p.value.reset(), re.value.restored = !1), M(), W(), fe(), yield F.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: ae,
      translateSelectedTranslationUnitForAllProviders: st
    } = Zu(), Ve = () => {
      ms.value || (t.value = !0, st());
    }, { getCurrentTitleByLanguage: Ba } = rn(), { isMissingLeadSection: Fa } = mt(), no = (J) => {
      F.push({
        name: "sx-editor",
        state: {
          content: J,
          originalContent: _.value,
          title: Ba(
            c.value,
            l.value
          ),
          isInitialEdit: !x.value || null
        }
      });
    }, Ar = () => F.push({ name: "sx-publisher" }), Dr = () => y(this, null, function* () {
      h.value ? yield ae(
        h.value.id,
        a.value
      ) : yield ae(0, a.value);
    }), ms = Hn(
      () => h.value instanceof ut
    ), ps = oa(!1), {
      isPermissionWarningDismissed: Pr,
      dismissPermissionWarning: xo,
      resetPermissionWarning: Co
    } = Jp(), { isTitleErrorDismissed: Na, dismissTitleError: A, resetTitleError: q } = Jp();
    Q() && (Co(), q());
    const Ue = Hn(
      () => !Ow() && !Pr.value
    ), Lt = Hn(
      () => !Na.value && Fa.value && !mw.Title.newFromText(f.value)
    );
    return (J, ln) => {
      const Tn = a6("i18n");
      return Jt(), eh("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: d6(k.value)
      }, [
        yt(le(U), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Rt(() => [
            yt(le(C), { shrink: "" }, {
              default: Rt(() => [
                yt(le(nh), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": J.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: K
                }, {
                  default: Rt(() => [
                    yt(le(v6), { icon: le(Lf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            yt(le(C), {
              grow: "",
              class: "px-1"
            }, {
              default: Rt(() => [
                i6(bn("h4", g6, null, 512), [
                  [Tn, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            yt(le(C), {
              shrink: "",
              class: "px-3"
            }, {
              default: Rt(() => [
                yt(le(nh), {
                  disabled: !(le(p) && le(p).isTranslated),
                  onClick: Ar
                }, {
                  default: Rt(() => [
                    r6(na(J.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        w.value ? (Jt(), jn(le(U), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Rt(() => [
            yt(le(C), {
              dir: le(O.getDir)(le(l)),
              lang: le(l),
              class: "sx-sentence-selector__section"
            }, {
              default: Rt(() => [
                Ue.value ? (Jt(), jn(le(oh), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: le(xo)
                }, {
                  default: Rt(() => [
                    bn("p", null, na(J.$i18n("cx-publish-permission-warning")), 1),
                    bn("p", null, [
                      bn("strong", null, [
                        bn("a", m6, na(J.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : Zp("", !0),
                Lt.value ? (Jt(), jn(le(oh), {
                  key: 1,
                  type: "error",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: le(A)
                }, {
                  default: Rt(() => [
                    bn("p", null, [
                      bn("strong", null, na(J.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    bn("p", null, na(J.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : Zp("", !0),
                yt(ZT),
                bn("div", p6, [
                  (Jt(!0), eh(c6, null, l6(b.value, (pt) => (Jt(), jn(OA, {
                    id: pt.id,
                    key: `sub-section-${pt.id}`,
                    "sub-section": pt,
                    onBounceTranslation: T
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !ms.value && x.value ? (Jt(), jn(TD, {
              key: 0,
              onEditTranslation: no,
              onSelectNextSegment: le(R),
              onSelectPreviousSegment: le(B)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : ms.value ? (Jt(), jn(cD, {
              key: 2,
              onEditTranslation: no,
              onApplyTranslation: V,
              onSkipTranslation: j,
              onSelectPreviousSegment: le(B),
              onSelectNextSegment: le(R)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Jt(), jn(AA, {
              key: 1,
              class: u6({ "mb-0": !n.value }),
              onConfigureOptions: Ve,
              onEditTranslation: no,
              onApplyTranslation: V,
              onSkipTranslation: j,
              onSelectPreviousSegment: le(B),
              onRetryTranslation: Dr
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Jt(), jn(le(U), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Rt(() => [
            yt(le(dt), { class: "mt-0" })
          ]),
          _: 1
        })),
        yt(jT, {
          active: t.value,
          "onUpdate:active": ln[0] || (ln[0] = (pt) => t.value = pt)
        }, null, 8, ["active"]),
        yt(vT, {
          modelValue: ps.value,
          "onUpdate:modelValue": ln[1] || (ln[1] = (pt) => ps.value = pt),
          onDiscardTranslation: H
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const S6 = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: _6
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, y6 = window.Vue.resolveComponent, x6 = window.Vue.createVNode, C6 = window.Vue.normalizeClass, b6 = window.Vue.openBlock, k6 = window.Vue.createElementBlock;
function $6(e, t, n, o, s, a) {
  const r = y6("sx-sentence-selector");
  return b6(), k6("main", {
    class: C6(["sx-sentence-selector-view", a.classes])
  }, [
    x6(r)
  ], 2);
}
const V6 = /* @__PURE__ */ pe(S6, [["render", $6]]), E6 = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, L6 = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const T6 = window.Vue.resolveDirective, ar = window.Vue.withDirectives, zt = window.Vue.openBlock, kn = window.Vue.createElementBlock, ir = window.Vue.createCommentVNode, rr = window.Vue.Transition, po = window.Vue.withCtx, Wo = window.Vue.createVNode, sa = window.Vue.createElementVNode, qn = window.Vue.unref, A6 = window.Vue.renderList, D6 = window.Vue.Fragment, P6 = window.Vue.normalizeClass, sh = window.Vue.createBlock, B6 = window.Vue.toDisplayString, F6 = window.Vue.createTextVNode, N6 = { class: "sx-quick-tutorial" }, M6 = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, U6 = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, I6 = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, R6 = { class: "sx-quick-tutorial__illustration" }, z6 = ["innerHTML"], O6 = ["innerHTML"], j6 = { class: "sx-quick-tutorial__step-indicator py-3" }, H6 = ["onClick"], q6 = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, G6 = {
  key: "secondary-point-1",
  class: "ma-0"
}, W6 = {
  key: "secondary-point-2",
  class: "ma-0"
}, X6 = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, ah = window.Vue.ref, ih = window.Codex.CdxButton, K6 = window.Codex.CdxIcon, Y6 = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = ah(2), n = ah(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = ds();
    return (r, l) => {
      const c = T6("i18n");
      return zt(), kn("section", N6, [
        Wo(qn(U), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: po(() => [
            sa("section", M6, [
              Wo(rr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: po(() => [
                  s(1) ? ar((zt(), kn("h2", U6, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? ar((zt(), kn("h2", I6, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : ir("", !0)
                ]),
                _: 1
              })
            ]),
            sa("section", R6, [
              Wo(rr, { name: "mw-ui-animation-slide-start" }, {
                default: po(() => [
                  s(1) ? (zt(), kn("div", {
                    key: "illustration-1",
                    innerHTML: qn(L6)
                  }, null, 8, z6)) : s(2) ? (zt(), kn("div", {
                    key: "illustration-2",
                    innerHTML: qn(E6)
                  }, null, 8, O6)) : ir("", !0)
                ]),
                _: 1
              })
            ]),
            sa("div", j6, [
              (zt(!0), kn(D6, null, A6(t.value, (u) => (zt(), kn("span", {
                key: `dot-${u}`,
                class: P6(["dot mx-1", { "dot-active": s(u) }]),
                role: "button",
                onClick: (i) => n.value = u
              }, null, 10, H6))), 128))
            ]),
            sa("section", q6, [
              Wo(rr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: po(() => [
                  s(1) ? ar((zt(), kn("h3", G6, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? ar((zt(), kn("h3", W6, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : ir("", !0)
                ]),
                _: 1
              })
            ]),
            sa("div", X6, [
              Wo(rr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: po(() => [
                  s(1) ? (zt(), sh(qn(ih), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: po(() => [
                      Wo(qn(K6), { icon: qn(cs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (zt(), sh(qn(ih), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: qn(a)
                  }, {
                    default: po(() => [
                      F6(B6(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : ir("", !0)
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
const Q6 = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: Y6
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
  const r = J6("sx-quick-tutorial");
  return tP(), nP("main", {
    class: eP(["sx-quick-tutorial-view", a.classes])
  }, [
    Z6(r)
  ], 2);
}
const sP = /* @__PURE__ */ pe(Q6, [["render", oP]]);
const aP = window.Vue.resolveDirective, rh = window.Vue.createElementVNode, iP = window.Vue.withDirectives, rP = window.Vue.unref, lP = window.Vue.withCtx, cP = window.Vue.createVNode, uP = window.Vue.openBlock, dP = window.Vue.createElementBlock, gP = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, mP = { class: "sx-editor__original-content-panel__header mb-2" }, pP = ["lang", "dir", "innerHTML"], lh = window.Vue.ref, hP = window.Vue.onMounted, fP = {
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
    }, o = lh(null), s = lh(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return hP(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const c = aP("i18n");
      return uP(), dP("section", gP, [
        iP(rh("h5", mP, null, 512), [
          [c, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        cP(rP(z_), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: lP(() => [
            rh("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, pP)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, wP = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const vP = window.Vue.unref, aa = window.Vue.createElementVNode, ch = window.Vue.resolveDirective, Rc = window.Vue.withDirectives, _P = window.Vue.normalizeClass, SP = window.Vue.openBlock, yP = window.Vue.createElementBlock, xP = window.Vue.createCommentVNode, CP = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, bP = { class: "sx-editor__feedback-overlay-content px-4" }, kP = ["innerHTML"], $P = { class: "sx-editor__feedback-overlay-content__title" }, VP = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, zc = window.Vue.computed, EP = {
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
    const t = e, { targetLanguageURLParameter: n } = D(), o = zc(
      () => on.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = zc(() => {
      const r = on.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = zc(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, l) => {
      const c = ch("i18n"), u = ch("i18n-html");
      return e.showFeedback ? (SP(), yP("div", CP, [
        aa("div", bP, [
          aa("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: vP(wP)
          }, null, 8, kP),
          Rc(aa("h2", $P, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Rc(aa("p", VP, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Rc(aa("p", {
            class: _P(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [u, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : xP("", !0);
    };
  }
}, LP = window.Vuex.useStore, TP = () => {
  const e = LP(), t = ed(), { selectNextTranslationUnit: n } = gs(), {
    isSectionTitleSelected: o,
    sourceSection: s,
    selectedContentTranslationUnit: a
  } = ne(), { getCurrentTitleByLanguage: r } = rn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: c
  } = D(), { currentMTProvider: u } = Be(e);
  return (i) => y(void 0, null, function* () {
    if (!o.value) {
      const d = document.createElement("div");
      d.innerHTML = i, d.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = d.innerHTML;
    }
    a.value instanceof ut && (i = (yield Bw(
      i,
      r(c.value, l.value),
      c.value
    )) || i), s.value.setTranslationForSelectedTranslationUnit(
      i,
      u.value
    ), t(), n();
  });
};
const Je = window.Vue.unref, Oc = window.Vue.openBlock, jc = window.Vue.createBlock, uh = window.Vue.createCommentVNode, dh = window.Vue.createVNode, AP = window.Vue.createElementVNode, DP = window.Vue.withCtx, PP = { class: "sx-editor__editing-surface-container grow" }, Hc = window.Vue.ref, BP = window.Vue.computed;
window.Vue.inject;
const FP = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Hc(!1), o = nt(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: c, originalContent: u, title: i } = history.state, d = Hc(null), g = Hc(!1), { logEditorSegmentAddEvent: m, logEditorSegmentEditEvent: p } = zw(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = D(), { isSectionTitleSelected: v, sourceSection: w } = ne(), x = BP(
      () => on.calculateScore(
        d.value,
        c,
        f.value
      )
    ), b = TP(), _ = (k) => y(this, null, function* () {
      d.value = k, g.value = !0;
      const E = new Promise((L) => setTimeout(L, 2e3));
      let M = Promise.resolve();
      r ? w.value.editedTranslation = k : M = b(k), x.value === 0 && l ? m() : x.value > 0 && p(), yield Promise.all([E, M]), g.value = !1, a();
    });
    return r ? mw.cx.eventlogging.stats.publishEditorStepAccess() : mw.cx.eventlogging.stats.editingStepAccess(!0), (k, E) => (Oc(), jc(Je(U), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: DP(() => [
        Je(u) ? (Oc(), jc(fP, {
          key: 0,
          language: Je(h),
          dir: Je(O.getDir)(Je(h)),
          "original-content": Je(u)
        }, null, 8, ["language", "dir", "original-content"])) : uh("", !0),
        n.value ? uh("", !0) : (Oc(), jc(Je(dt), { key: 1 })),
        AP("div", PP, [
          dh(EP, {
            "edited-translation": d.value,
            "show-feedback": g.value,
            "proposed-translation": Je(c)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          dh(KE, {
            content: Je(c),
            language: Je(f),
            dir: Je(O.getDir)(Je(f)),
            title: Je(i),
            "use-text": !!Je(v),
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
const NP = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: FP
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
}, MP = window.Vue.resolveComponent, UP = window.Vue.createVNode, IP = window.Vue.normalizeClass, RP = window.Vue.openBlock, zP = window.Vue.createElementBlock;
function OP(e, t, n, o, s, a) {
  const r = MP("sx-editor");
  return RP(), zP("main", {
    class: IP(["sx-editor-view", a.classes])
  }, [
    UP(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const jP = /* @__PURE__ */ pe(NP, [["render", OP]]);
const Zt = window.Vue.unref, ho = window.Vue.createVNode, ia = window.Vue.withCtx, HP = window.Vue.resolveDirective, qP = window.Vue.withDirectives, GP = window.Vue.openBlock, WP = window.Vue.createBlock, gh = window.Codex.CdxButton, mh = window.Codex.CdxIcon, XP = {
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
      const a = HP("i18n");
      return GP(), WP(Zt(U), { class: "ma-0 sx-publisher__header" }, {
        default: ia(() => [
          ho(Zt(C), {
            shrink: "",
            class: "me-2"
          }, {
            default: ia(() => [
              ho(Zt(gh), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: ia(() => [
                  ho(Zt(mh), { icon: Zt(ls) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          qP(ho(Zt(C), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          ho(Zt(C), { shrink: "" }, {
            default: ia(() => [
              ho(Zt(gh), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: ia(() => [
                  ho(Zt(mh), { icon: Zt(rx) }, null, 8, ["icon"])
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
}, KP = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, YP = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, ph = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const qc = window.Vue.createElementVNode, hh = window.Vue.toDisplayString, Gc = window.Vue.unref, Wc = window.Vue.withCtx, fh = window.Vue.createVNode, QP = window.Vue.openBlock, JP = window.Vue.createBlock, ZP = window.Vue.createCommentVNode, eB = ["innerHTML"], tB = ["textContent"], nB = ["textContent"], Xc = window.Vue.computed, oB = {
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
    const t = he(), n = e, o = {
      pending: {
        svg: KP,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: YP,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: ph,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: ph,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = Xc(() => o[n.status].svg), a = Xc(() => o[n.status].title), r = Xc(() => o[n.status].subtitle);
    return (l, c) => e.active ? (QP(), JP(Gc(kt), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: Wc(() => [
        fh(Gc(U), { class: "ma-4" }, {
          default: Wc(() => [
            fh(Gc(C), null, {
              default: Wc(() => [
                qc("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, eB),
                qc("h2", {
                  textContent: hh(a.value)
                }, null, 8, tB),
                qc("p", {
                  class: "ma-0",
                  textContent: hh(r.value)
                }, null, 8, nB)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : ZP("", !0);
  }
};
const lt = window.Vue.unref, Ot = window.Vue.createVNode, $n = window.Vue.withCtx, sB = window.Vue.resolveDirective, aB = window.Vue.withDirectives, wh = window.Vue.toDisplayString, iB = window.Vue.createTextVNode, Kc = window.Vue.openBlock, vh = window.Vue.createElementBlock, rB = window.Vue.createCommentVNode, Hw = window.Vue.createElementVNode, lB = window.Vue.createBlock, cB = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, uB = ["src"], dB = ["textContent"], gB = /* @__PURE__ */ Hw("p", { class: "mt-0" }, null, -1), mB = window.Vue.computed, pB = window.Vue.inject, hB = window.Vue.ref, _h = window.Codex.CdxButton, fB = window.Codex.CdxIcon, wB = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: zf,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = hB(""), s = () => n("close"), a = () => n("publish", o.value), r = pB("breakpoints"), l = mB(() => r.value.mobile);
    return (c, u) => {
      const i = sB("i18n");
      return e.active && e.captchaDetails ? (Kc(), lB(lt(kt), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: $n(() => [
          Ot(lt(U), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: $n(() => [
              Ot(lt(C), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: $n(() => [
                  Ot(lt(_h), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": c.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: $n(() => [
                      Ot(lt(fB), { icon: lt(ls) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              aB(Ot(lt(C), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Ot(lt(C), {
                shrink: "",
                class: "justify-center"
              }, {
                default: $n(() => [
                  Ot(lt(_h), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: $n(() => [
                      iB(wh(c.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Ot(lt(fr))
        ]),
        default: $n(() => [
          Hw("div", cB, [
            e.captchaDetails.type === "image" ? (Kc(), vh("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, uB)) : (Kc(), vh("p", {
              key: 1,
              textContent: wh(e.captchaDetails.question)
            }, null, 8, dB)),
            gB,
            Ot(lt(U), { class: "ma-0" }, {
              default: $n(() => [
                Ot(lt(C), null, {
                  default: $n(() => [
                    Ot(lt(cu), {
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
      }, 8, ["fullscreen"])) : rB("", !0);
    };
  }
};
const Gn = window.Vue.unref, lr = window.Vue.createVNode, Xo = window.Vue.withCtx, Ko = window.Vue.createElementVNode, vB = window.Vue.resolveDirective, _B = window.Vue.withDirectives, SB = window.Vue.renderList, yB = window.Vue.Fragment, Yc = window.Vue.openBlock, xB = window.Vue.createElementBlock, Sh = window.Vue.toDisplayString, yh = window.Vue.createTextVNode, CB = window.Vue.isRef, bB = window.Vue.normalizeClass, xh = window.Vue.createBlock, kB = { class: "mw-ui-dialog__header" }, $B = { class: "row ma-0 px-4 py-3" }, VB = { class: "col shrink justify-center" }, EB = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, LB = { class: "mb-0" }, TB = { class: "pa-4" }, AB = window.Codex.CdxField, DB = window.Codex.CdxRadio, PB = window.Vuex.useStore, cr = window.Vue.computed, BB = window.Codex.CdxButton, FB = window.Codex.CdxIcon, NB = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = PB(), { target: s, PUBLISHING_TARGETS: a } = Et(), r = cr(() => o.state.translator.isAnon), l = he(), { sourceSection: c } = ne(), { isCurrentSectionPresent: u, isPresentLeadSection: i } = mt(), d = cr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), g = cr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), m = cr(() => {
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
      const v = vB("i18n");
      return Yc(), xh(Gn(kt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: h.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: f[1] || (f[1] = (w) => h.$emit("update:active", w)),
        onClose: p
      }, {
        header: Xo(() => [
          Ko("div", kB, [
            Ko("div", $B, [
              Ko("div", VB, [
                lr(Gn(BB), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": h.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: Xo(() => [
                    lr(Gn(FB), { icon: Gn(Lf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Ko("div", EB, [
                _B(Ko("h4", LB, null, 512), [
                  [v, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            lr(Gn(fr))
          ])
        ]),
        default: Xo(() => [
          Ko("div", TB, [
            lr(Gn(AB), { "is-fieldset": "" }, {
              default: Xo(() => [
                (Yc(!0), xB(yB, null, SB(m.value, (w, x) => (Yc(), xh(Gn(DB), {
                  key: "publish-options-radio-" + w.value,
                  modelValue: Gn(s),
                  "onUpdate:modelValue": [
                    f[0] || (f[0] = (b) => CB(s) ? s.value = b : null),
                    p
                  ],
                  class: bB(x < m.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": w.value,
                  disabled: w.disabled,
                  name: "publish-options"
                }, {
                  description: Xo(() => [
                    yh(Sh(w.description), 1)
                  ]),
                  default: Xo(() => [
                    yh(Sh(w.label) + " ", 1)
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
const jt = window.Vue.unref, Ch = window.Vue.toDisplayString, bh = window.Vue.createElementVNode, MB = window.Vue.resolveDirective, Yo = window.Vue.createVNode, UB = window.Vue.withDirectives, ra = window.Vue.withCtx, Qc = window.Vue.openBlock, kh = window.Vue.createBlock, $h = window.Vue.createCommentVNode, IB = window.Vue.Fragment, RB = window.Vue.createElementBlock, zB = window.Vue.normalizeClass, OB = ["textContent"], jB = ["textContent"], Qo = window.Vue.computed, Vh = window.Vue.ref, HB = window.Vue.watch, Eh = window.Codex.CdxButton, Lh = window.Codex.CdxIcon, qB = window.Codex.CdxMessage, GB = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Vh(0), o = Vh(null);
    HB(o, () => {
      var p;
      const m = (p = o.value) == null ? void 0 : p.$el;
      if (m instanceof HTMLElement) {
        const h = m.querySelector("a");
        h && h.setAttribute("target", "_blank");
      }
    });
    const s = Qo(
      () => {
        var m;
        return (m = t.publishFeedbackMessages) == null ? void 0 : m[n.value];
      }
    ), a = Qo(() => {
      var m;
      return ((m = s.value) == null ? void 0 : m.status) || "notice";
    }), r = Qo(() => a.value === "notice"), l = Qo(
      () => `sx-publisher__review-info--${a.value}`
    ), c = he(), u = Qo(() => {
      var m;
      return (m = s.value) == null ? void 0 : m.text;
    }), i = Qo(() => {
      var m;
      return r.value ? c.i18n("cx-sx-publisher-review-info") : ((m = s.value) == null ? void 0 : m.title) || c.i18n("cx-sx-publisher-review-info-error");
    }), d = () => {
      const m = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + m) % m;
    }, g = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (m, p) => {
      const h = MB("i18n-html");
      return Qc(), kh(jt(qB), {
        type: a.value,
        class: zB(["sx-publisher__review-info", l.value]),
        icon: r.value ? jt(ux) : null
      }, {
        default: ra(() => [
          bh("h5", {
            textContent: Ch(i.value)
          }, null, 8, OB),
          r.value ? $h("", !0) : (Qc(), RB(IB, { key: 0 }, [
            bh("p", {
              textContent: Ch(u.value)
            }, null, 8, jB),
            Yo(jt(U), {
              justify: "between",
              class: "ma-0"
            }, {
              default: ra(() => [
                UB(Yo(jt(C), {
                  ref_key: "learnMoreContainer",
                  ref: o,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (Qc(), kh(jt(C), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: ra(() => [
                    Yo(jt(Eh), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: d
                    }, {
                      default: ra(() => [
                        Yo(jt(Lh), { icon: jt(zu) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    Yo(jt(Eh), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: ra(() => [
                        Yo(jt(Lh), { icon: jt(cs) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })) : $h("", !0)
              ]),
              _: 1
            })
          ], 64))
        ]),
        _: 1
      }, 8, ["type", "class", "icon"]);
    };
  }
}, WB = (e) => {
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
}, XB = window.Vuex.useStore, KB = window.Vue.computed, YB = () => {
  const e = XB(), { currentTranslation: t } = Wt(), { currentMTProvider: n } = Be(e), { currentTargetPageTitle: o } = ot(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = D(), { sourceSection: c } = ne(), u = Vt(), i = KB(() => {
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
    return n.value && (p.translation_provider = ie.getProviderForInstrumentation(n.value)), p.human_modification_rate = on.getMTScoreForPageSection(
      c.value,
      a.value
    ) / 100, p.human_modification_threshold = on.getMtModificationThreshold(), p;
  });
  return {
    logPublishAttemptEvent: () => u(de({
      event_type: "publish_attempt"
    }, i.value)),
    logPublishSuccessEvent: (p, h) => {
      u(de({
        event_type: "publish_success",
        published_page_id: p,
        published_revision_id: h
      }, i.value)), mw.cx.eventlogging.stats.published(!0);
    },
    logPublishFailureEvent: () => u(de({
      event_type: "publish_failure"
    }, i.value))
  };
}, QB = window.Vue.computed, Th = window.Vue.ref, JB = window.Vuex.useStore, ZB = () => {
  const e = JB(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = D(), { sourceSection: s } = ne(), { targetPageTitleForPublishing: a } = Pa(), r = Iw(), { isPresentLeadSection: l } = mt(), { sectionSuggestion: c } = Ee(), u = QB(
    () => {
      var _, k;
      return l.value ? Qn.LEAD_SECTION_DUMMY_TITLE : (k = c.value) == null ? void 0 : k.presentSections[(_ = s.value) == null ? void 0 : _.sourceSectionTitleForPublishing];
    }
  ), { target: i, PUBLISHING_TARGETS: d } = Et(), g = Th(!1), m = Th("pending"), p = () => g.value = !1, h = ed(), {
    logPublishAttemptEvent: f,
    logPublishSuccessEvent: v,
    logPublishFailureEvent: w
  } = YB(), x = (_, k) => y(void 0, null, function* () {
    f();
    const E = yield h();
    if (E instanceof Zn)
      return w(), { publishFeedbackMessage: E, targetUrl: null };
    const M = E, L = a.value, P = {
      html: WB(s.value.translationHtml),
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
    u.value && (P.existingSectionTitle = u.value), _ && (P.captchaId = _, P.captchaWord = k);
    const z = yield bt.publishTranslation(
      P
    );
    return z.publishFeedbackMessage === null ? v(z.pageId, z.revisionId) : w(), z;
  });
  return {
    closePublishDialog: p,
    doPublish: (_ = null, k = null) => y(void 0, null, function* () {
      m.value = "pending", g.value = !0;
      let E;
      try {
        E = yield x(
          k == null ? void 0 : k.id,
          _
        );
      } catch (M) {
        if (M instanceof os)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw mw.cx.eventlogging.stats.publishFailed(!0), M;
      }
      return E;
    }),
    isPublishDialogActive: g,
    publishStatus: m
  };
}, e9 = window.Vue.computed, t9 = () => {
  const e = nt(), { sourceSection: t } = ne(), { getCurrentTitleByLanguage: n } = rn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = D(), a = e9(
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
}, n9 = () => {
  const { targetLanguageURLParameter: e } = D(), { sourceSection: t } = ne();
  return () => {
    const n = on.getMTScoreForPageSection(
      t.value,
      e.value
    ), o = on.getScoreStatus(n);
    if (o === "success")
      return null;
    const s = 100 - n, a = o === "failure" ? "error" : "warning";
    let r, l;
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Zn({
      title: r,
      text: l,
      status: a,
      type: "mt"
    });
  };
}, o9 = window.Vue.ref, s9 = window.Vue.computed, a9 = () => {
  const e = n9(), { target: t, PUBLISHING_TARGETS: n } = Et(), { targetPageTitleForPublishing: o } = Pa(), s = o9([]), a = s9(
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
      if (!Ow() && t.value !== n.SANDBOX) {
        const i = new Zn({
          text: mw.message("cx-publish-permission-error").text(),
          title: mw.message("cx-publish-permission-error-title").text(),
          type: "generic",
          status: "error"
        });
        r(i);
      }
      const u = e();
      u && r(u), mw.Title.newFromText(o.value) || r(
        new Zn({
          text: mw.message("cx-tools-linter-invalid-character-message").text(),
          title: mw.message("cx-tools-linter-invalid-character").text(),
          type: "generic",
          status: "error"
        })
      );
    }
  };
}, i9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = Et(), { currentSourcePage: n } = ot(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = D(), { sourceSection: a } = ne(), { targetPageTitleForPublishing: r } = Pa();
  return (l) => y(void 0, null, function* () {
    const c = r.value, u = n.value.title, i = new mw.Title(u), d = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== d.user)
      try {
        yield br.addWikibaseLink(
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
}, Ah = window.Vue.ref, r9 = () => {
  const e = Ah(!1), t = Ah(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ce = window.Vue.unref, Ge = window.Vue.createVNode, l9 = window.Vue.resolveDirective, Jc = window.Vue.withDirectives, la = window.Vue.openBlock, ca = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Dh = window.Vue.toDisplayString, c9 = window.Vue.createTextVNode, Jo = window.Vue.createElementVNode, Zo = window.Vue.withCtx, Ph = window.Vue.normalizeClass, u9 = { class: "sx-publisher" }, d9 = {
  key: 0,
  class: "mb-2"
}, g9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, m9 = { key: 0 }, p9 = { key: 1 }, h9 = ["href"], f9 = ["innerHTML"], w9 = { class: "sx-publisher__section-preview pa-5" }, v9 = ["innerHTML"], ur = window.Vue.computed, _9 = window.Vue.onMounted, S9 = window.Vue.ref, y9 = window.Vue.watch, Bh = window.Codex.CdxButton, Zc = window.Codex.CdxIcon, x9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = ne(), { sectionSuggestion: n } = Ee(), { isCurrentSectionPresent: o, isPresentLeadSection: s } = mt(), {
      targetLanguageURLParameter: a,
      sectionURLParameter: r
    } = D(), l = he(), c = ur(
      () => {
        var I;
        return s.value ? l.i18n("cx-sx-present-lead-section-label") : (I = t.value) == null ? void 0 : I.title;
      }
    ), { target: u, PUBLISHING_TARGETS: i } = Et(), d = ur(() => u.value === i.SANDBOX ? l.i18n(
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
    } = r9(), {
      publishFeedbackMessages: f,
      isPublishingDisabled: v,
      addPublishFeedbackMessage: w,
      clearPublishFeedbackMessages: x,
      initializePublishFeedbackMessages: b
    } = a9(), _ = i9(), { doPublish: k, isPublishDialogActive: E, publishStatus: M, closePublishDialog: L } = ZB(), P = (I = null) => y(this, null, function* () {
      if (v.value)
        return;
      const G = yield k(I, g.value);
      if (!G)
        return;
      const { publishFeedbackMessage: X, targetUrl: re } = G;
      if (p(X)) {
        L();
        return;
      } else
        X && w(X);
      M.value = v.value ? "failure" : "success", setTimeout(() => {
        if (v.value) {
          L();
          return;
        }
        _(re);
      }, 1e3);
    });
    _9(() => {
      b(), mw.cx.eventlogging.stats.publishStepAccess();
    });
    const z = t9(), Q = S9(!1), se = () => Q.value = !0;
    y9(Q, (I) => {
      I || (x(), b());
    });
    const oe = ur(() => {
      var I, G;
      return s.value ? l.i18n("cx-sx-present-lead-section-label") : (G = (I = n.value) == null ? void 0 : I.presentSections) == null ? void 0 : G[r.value];
    }), N = ur(() => {
      var X;
      const I = Z.getPageUrl(
        a.value,
        (X = n.value) == null ? void 0 : X.targetTitle
      ), G = s.value ? "" : (oe.value || "").replace(/ /g, "_");
      return `${I}#${G}`;
    });
    return (I, G) => {
      const X = l9("i18n");
      return la(), ca("section", u9, [
        Ge(XP, {
          "is-publishing-disabled": ce(v),
          onPublishTranslation: P
        }, null, 8, ["is-publishing-disabled"]),
        Jo("div", {
          class: Ph(["sx-publisher__publish-panel", ce(o) ? "py-4" : "pa-4"])
        }, [
          ce(o) ? (la(), ca("div", g9, [
            ce(s) ? Jc((la(), ca("h5", m9, null, 512)), [
              [X, void 0, "cx-sx-publisher-publish-panel-existing-lead-section-notice"]
            ]) : Jc((la(), ca("h5", p9, null, 512)), [
              [X, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            Jo("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: N.value,
              target: "_blank"
            }, [
              c9(Dh(oe.value) + " ", 1),
              Ge(ce(Zc), { icon: ce(Ta) }, null, 8, ["icon"])
            ], 8, h9)
          ])) : Jc((la(), ca("h5", d9, null, 512)), [
            [X, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          Jo("div", {
            class: Ph({ "px-4 mt-4": ce(o) })
          }, [
            Jo("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: d.value
            }, null, 8, f9),
            Ge(ce(U), {
              justify: "end",
              class: "ma-0"
            }, {
              default: Zo(() => [
                Ge(ce(C), { shrink: "" }, {
                  default: Zo(() => [
                    Ge(ce(Bh), {
                      weight: "quiet",
                      "aria-label": I.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: se
                    }, {
                      default: Zo(() => [
                        Ge(ce(Zc), { icon: ce(Sx) }, null, 8, ["icon"])
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
        Ge(GB, { "publish-feedback-messages": ce(f) }, null, 8, ["publish-feedback-messages"]),
        Jo("section", w9, [
          Ge(ce(U), { class: "pb-5 ma-0" }, {
            default: Zo(() => [
              Ge(ce(C), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: Dh(c.value)
              }, null, 8, ["textContent"]),
              Ge(ce(C), { shrink: "" }, {
                default: Zo(() => [
                  Ge(ce(Bh), {
                    weight: "quiet",
                    "aria-label": I.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ce(z)
                  }, {
                    default: Zo(() => [
                      Ge(ce(Zc), { icon: ce(Iu) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Jo("div", {
            innerHTML: ce(t).translationHtml
          }, null, 8, v9)
        ]),
        Ge(NB, {
          active: Q.value,
          "onUpdate:active": G[0] || (G[0] = (re) => Q.value = re)
        }, null, 8, ["active"]),
        Ge(wB, {
          active: ce(m),
          "captcha-details": ce(g),
          onClose: ce(h),
          onPublish: G[1] || (G[1] = (re) => P(re))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ge(oB, {
          active: ce(E),
          status: ce(M)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const C9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: x9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, b9 = window.Vue.resolveComponent, k9 = window.Vue.createVNode, $9 = window.Vue.normalizeClass, V9 = window.Vue.openBlock, E9 = window.Vue.createElementBlock;
function L9(e, t, n, o, s, a) {
  const r = b9("sx-publisher");
  return V9(), E9("main", {
    class: $9(["sx-publisher-view", a.classes])
  }, [
    k9(r)
  ], 2);
}
const T9 = /* @__PURE__ */ pe(C9, [["render", L9]]);
const Fh = window.Vue.unref, A9 = window.Vue.toDisplayString, D9 = window.Vue.createTextVNode, P9 = window.Vue.withCtx, B9 = window.Vue.openBlock, F9 = window.Vue.createBlock, N9 = window.Codex.CdxInfoChip, M9 = {
  __name: "CommunityPriorityBadge",
  setup(e) {
    return (t, n) => (B9(), F9(Fh(N9), {
      icon: Fh(Ou),
      class: "cx-community-priority-badge"
    }, {
      default: P9(() => [
        D9(A9(t.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const Ht = window.Vue.unref, Wn = window.Vue.createVNode, fo = window.Vue.withCtx, eu = window.Vue.toDisplayString, tu = window.Vue.createElementVNode, Nh = window.Vue.openBlock, Mh = window.Vue.createBlock, U9 = window.Vue.createCommentVNode, I9 = ["textContent"], R9 = ["textContent"], z9 = ["textContent"], qw = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: ss,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (Nh(), Mh(Ht(U), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Ht(O.getDir)(e.suggestion.language)
    }, {
      default: fo(() => [
        Wn(Ht(C), { shrink: "" }, {
          default: fo(() => [
            Wn(Ht(xu), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Wn(Ht(C), { class: "ms-4" }, {
          default: fo(() => [
            Wn(Ht(U), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: fo(() => [
                Wn(Ht(C), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: fo(() => [
                    tu("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: eu(e.suggestion.title)
                    }, null, 8, I9)
                  ]),
                  _: 1
                }),
                Wn(Ht(C), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: fo(() => [
                    tu("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: eu(e.suggestion.description)
                    }, null, 8, R9)
                  ]),
                  _: 1
                }),
                Wn(Ht(C), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: fo(() => [
                    e.suggestion.inFeaturedCollection ? (Nh(), Mh(M9, {
                      key: 0,
                      class: "me-2"
                    })) : U9("", !0),
                    Wn(Ht(et), {
                      icon: Ht($0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    tu("small", {
                      textContent: eu((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, z9)
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
const Uh = window.Vue.unref, ua = window.Vue.openBlock, nu = window.Vue.createBlock, O9 = window.Vue.createCommentVNode, j9 = window.Vue.resolveDirective, H9 = window.Vue.withDirectives, Ih = window.Vue.createElementBlock, q9 = window.Vue.renderList, G9 = window.Vue.Fragment, W9 = window.Vue.normalizeClass, X9 = window.Vue.withCtx, K9 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, Rh = window.Vue.computed, Y9 = window.Vue.ref, Q9 = {
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
    const { sourceLanguageURLParameter: t } = D(), n = Rh(() => O.getAutonym(t.value)), o = e, s = Y9(null), a = (u) => s.value = u, r = () => s.value = null, l = (u) => {
      var i;
      return ((i = o.selectedItem) == null ? void 0 : i.title) === u.title && !s.value || s.value === u.pageId;
    }, c = Rh(() => o.searchInput);
    return (u, i) => {
      const d = j9("i18n");
      return ua(), nu(Uh(Ze), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: X9(() => [
          e.searchResultsLoading ? (ua(), nu(Uh(dt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : e.searchResultsSlice.length === 0 ? H9((ua(), Ih("p", K9, null, 512)), [
            [d, [
              c.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : O9("", !0),
          (ua(!0), Ih(G9, null, q9(e.searchResultsSlice, (g) => (ua(), nu(qw, {
            key: g.pageId,
            suggestion: g,
            class: W9({
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
const J9 = window.Vue.toDisplayString, Z9 = window.Vue.createElementVNode, e7 = window.Vue.renderList, t7 = window.Vue.Fragment, ou = window.Vue.openBlock, n7 = window.Vue.createElementBlock, o7 = window.Vue.normalizeClass, zh = window.Vue.createBlock, s7 = window.Vue.unref, Oh = window.Vue.withCtx, a7 = ["textContent"], i7 = window.Vue.ref, jh = {
  __name: "ArticleSuggestionsCard",
  props: {
    cardTitle: {
      type: String,
      required: !0
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
    const n = e, o = i7(null), s = (l) => o.value = l, a = () => o.value = null, r = (l) => {
      var c;
      return ((c = n.selectedItem) == null ? void 0 : c.title) === l.title && !o.value || o.value === l.pageId;
    };
    return (l, c) => (ou(), zh(s7(Ze), { class: "sx-article-search__suggestions pa-0" }, {
      header: Oh(() => [
        Z9("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: J9(e.cardTitle)
        }, null, 8, a7)
      ]),
      default: Oh(() => [
        (ou(!0), n7(t7, null, e7(e.suggestions, (u) => (ou(), zh(qw, {
          key: u.pageId,
          suggestion: u,
          class: o7({
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
}, r7 = window.Vue.computed, l7 = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), Hh = "other", c7 = (e) => r7((t) => {
  const o = e.value.slice(0, 3), s = {
    value: Hh,
    props: {
      icon: T0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== Hh);
  return l7(a, o) ? t : [...o.map((l) => ({
    value: l,
    props: {
      label: O.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), s];
}), u7 = window.Vue.computed, d7 = () => {
  const { supportedLanguageCodes: e } = Va(), { targetLanguageURLParameter: t } = D();
  return { getSuggestedSourceLanguages: (o) => u7(() => {
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
}, g7 = window.Vue.ref, m7 = () => {
  const e = g7([]), t = () => {
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
};
const p7 = window.Vue.resolveDirective, h7 = window.Vue.createElementVNode, su = window.Vue.withDirectives, me = window.Vue.unref, da = window.Vue.withCtx, en = window.Vue.createVNode, ga = window.Vue.openBlock, qh = window.Vue.createBlock, f7 = window.Vue.createCommentVNode, au = window.Vue.createElementBlock, w7 = window.Vue.Fragment, v7 = window.Vue.vShow, ma = window.Vue.withModifiers, pa = window.Vue.withKeys, _7 = ["onKeydown"], S7 = { class: "mb-0" }, y7 = {
  key: 2,
  class: "sx-article-search__empty-state"
}, ha = window.Vue.ref, x7 = window.Vue.onMounted, fa = window.Vue.computed, Gh = window.Vue.watch, C7 = window.Vue.inject, b7 = window.Vuex.useStore, k7 = window.Codex.CdxButton, $7 = window.Codex.CdxIcon, V7 = window.Codex.CdxSearchInput, E7 = 3, L7 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = ha(""), n = ha(!1), o = ha(null), s = ha(!1), { previousLanguages: a, addLanguageToHistory: r } = m7(), l = b7(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = D(), { supportedLanguageCodes: i } = Va(), { searchResultsLoading: d, searchResultsSlice: g } = Cw(
      c,
      t
    ), { getSuggestedSourceLanguages: m } = d7(), p = m(a), h = c7(
      p
    ), f = nt(), { fetchAllTranslations: v } = us();
    x7(() => y(this, null, function* () {
      var B;
      v(), r(c.value), (B = o.value) == null || B.focus();
    }));
    const w = () => {
      f.push({ name: "dashboard" });
    }, x = If(), b = (B) => {
      x(B, u.value), r(B);
    }, _ = (B) => {
      if (B === "other") {
        s.value = !0;
        return;
      }
      b(B);
    };
    Gh(
      c,
      () => {
        var B;
        l.dispatch("mediawiki/fetchNearbyPages"), (B = o.value) == null || B.focus();
      },
      { immediate: !0 }
    );
    const k = Vt();
    Gh(t, () => {
      n.value || (n.value = !0, k({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const E = () => {
      s.value = !1;
    }, M = (B) => {
      s.value = !1, _(B);
    }, { fetchPreviousEditsInSource: L, previousEditsInSource: P } = Cf(), z = ha([]);
    (() => L().then(() => P.value.length > 0 ? So.fetchPages(
      c.value,
      P.value
    ) : []).then((B) => {
      B = B.slice(0, E7), B = B.sort(
        (j, S) => P.value.indexOf(j.title) - P.value.indexOf(S.title)
      ), z.value = B;
    }))();
    const se = fa(() => l.getters["mediawiki/getNearbyPages"]), oe = C7("breakpoints"), N = fa(() => oe.value.mobile), I = Da(), G = fa(
      () => z.value && z.value.length
    ), X = fa(
      () => se.value && se.value.length
    ), { next: re, prev: xe, keyboardNavigationContainer: ke, selectedItem: $e } = _w(t, g, z), Fe = (B) => I(
      B.title,
      c.value,
      u.value,
      R.value
    ), R = fa(() => t.value ? "search_result" : G.value ? "suggestion_recent_edit" : X.value ? "suggestion_nearby" : "");
    return (B, j) => {
      const S = p7("i18n");
      return ga(), au("section", {
        ref_key: "keyboardNavigationContainer",
        ref: ke,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          j[5] || (j[5] = pa(ma((...V) => me(re) && me(re)(...V), ["stop", "prevent"]), ["tab"])),
          j[6] || (j[6] = pa(ma((...V) => me(re) && me(re)(...V), ["stop", "prevent"]), ["down"])),
          j[7] || (j[7] = pa(ma((...V) => me(xe) && me(xe)(...V), ["stop", "prevent"]), ["up"])),
          pa(ma(w, ["stop", "prevent"]), ["esc"]),
          j[8] || (j[8] = pa(ma((V) => Fe(me($e)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        en(me(U), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: da(() => [
            en(me(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: da(() => [
                su(h7("h5", S7, null, 512), [
                  [S, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            en(me(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: da(() => [
                en(me(k7), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": B.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: w
                }, {
                  default: da(() => [
                    en(me($7), { icon: me(ls) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        en(me(V7), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": j[0] || (j[0] = (V) => t.value = V),
          class: "sx-article-search__search-input",
          placeholder: B.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        en(me(ba), {
          class: "sx-article-search__language-button-group",
          items: me(h),
          active: me(c),
          onSelect: _
        }, null, 8, ["items", "active"]),
        t.value ? f7("", !0) : (ga(), au(w7, { key: 0 }, [
          G.value ? (ga(), qh(jh, {
            key: 0,
            "card-title": B.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: z.value,
            "selected-item": me($e),
            onSuggestionClicked: j[1] || (j[1] = (V) => Fe(V))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : X.value ? (ga(), qh(jh, {
            key: 1,
            "card-title": B.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: se.value,
            onSuggestionClicked: j[2] || (j[2] = (V) => Fe(V))
          }, null, 8, ["card-title", "suggestions"])) : su((ga(), au("p", y7, null, 512)), [
            [S, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        su(en(Q9, {
          "search-input": t.value,
          "search-results-loading": me(d),
          "search-results-slice": me(g),
          "selected-item": me($e),
          onSuggestionClicked: j[3] || (j[3] = (V) => Fe(V))
        }, null, 8, ["search-input", "search-results-loading", "search-results-slice", "selected-item"]), [
          [v7, !!t.value]
        ]),
        en(me(kt), {
          value: s.value,
          "onUpdate:value": j[4] || (j[4] = (V) => s.value = V),
          class: "sx-article-search-language-selector",
          fullscreen: N.value,
          header: N.value,
          title: B.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: E
        }, {
          default: da(() => [
            en(me(Sw), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: me(i),
              suggestions: me(p),
              placeholder: B.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: M,
              onClose: E
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, _7);
    };
  }
};
const T7 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: L7
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, A7 = window.Vue.resolveComponent, D7 = window.Vue.createVNode, P7 = window.Vue.normalizeClass, B7 = window.Vue.openBlock, F7 = window.Vue.createElementBlock;
function N7(e, t, n, o, s, a) {
  const r = A7("sx-article-search");
  return B7(), F7("main", {
    class: P7(["sx-article-search-view", a.classes])
  }, [
    D7(r)
  ], 2);
}
const M7 = /* @__PURE__ */ pe(T7, [["render", N7]]), U7 = () => {
  const e = Da(), t = Ju(), { logDashboardOpenEvent: n } = $w(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s,
    pageURLParameter: a
  } = D();
  return () => y(void 0, null, function* () {
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
}, I7 = window.Vuex.useStore, R7 = [
  {
    path: "",
    name: "dashboard",
    component: Pm,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: M7,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: T3,
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
    component: KL,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: uT,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: sP,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: V6,
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
    component: jP,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: T9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Pm,
    meta: { workflowStep: 0 }
  }
], td = sk({
  history: ob(),
  routes: R7
}), iu = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, z7 = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
td.beforeEach((e, t, n) => {
  const o = I7();
  if (mw.user.isAnon() || Qh.assertUser().catch((i) => {
    i instanceof os && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = U7(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: c
  } = D();
  if (!!(a.value && r.value && l.value)) {
    if (z7(
      a.value,
      r.value,
      l.value
    )) {
      const d = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      iu(e.name, d, n);
    } else
      e.name === "sx-translation-confirmer" && s(), iu(e.name, "sx-translation-confirmer", n);
    return;
  }
  c(), iu(e.name, "dashboard", n);
});
td.afterEach((e, t) => {
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
const O7 = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, j7 = window.Vue.createApp, H7 = mw.config.get("wgUserLanguage"), q7 = "en", G7 = mw.messages.values || {}, yo = j7(Wx);
yo.use(td);
yo.use(kC);
yo.use(Z_);
yo.use(J_);
const W7 = A1({
  locale: H7,
  finalFallback: q7,
  messages: G7,
  wikilinks: !0
});
yo.use(W7);
yo.use(O7);
yo.mount("#contenttranslation");
