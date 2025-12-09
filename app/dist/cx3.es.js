var nv = Object.defineProperty, ov = Object.defineProperties;
var sv = Object.getOwnPropertyDescriptors;
var hd = Object.getOwnPropertySymbols;
var av = Object.prototype.hasOwnProperty, iv = Object.prototype.propertyIsEnumerable;
var fd = (e, t, n) => t in e ? nv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, de = (e, t) => {
  for (var n in t || (t = {}))
    av.call(t, n) && fd(e, n, t[n]);
  if (hd)
    for (var n of hd(t))
      iv.call(t, n) && fd(e, n, t[n]);
  return e;
}, Ye = (e, t) => ov(e, sv(t));
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
const pe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, rv = {
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
}, lv = window.Vue.toDisplayString, Hr = window.Vue.openBlock, qr = window.Vue.createElementBlock, cv = window.Vue.createCommentVNode, wd = window.Vue.createElementVNode, uv = window.Vue.normalizeClass, dv = ["width", "height", "aria-labelledby"], gv = ["id"], mv = ["fill"], pv = ["d"];
function hv(e, t, n, o, s, a) {
  return Hr(), qr("span", {
    class: uv(["mw-ui-icon notranslate", a.classes])
  }, [
    (Hr(), qr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (Hr(), qr("title", {
        key: 0,
        id: n.iconName
      }, lv(n.iconName), 9, gv)) : cv("", !0),
      wd("g", { fill: n.iconColor }, [
        wd("path", { d: a.iconImagePath }, null, 8, pv)
      ], 8, mv)
    ], 8, dv))
  ], 2);
}
const et = /* @__PURE__ */ pe(rv, [["render", hv]]);
const fv = {
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
}, wv = window.Vue.renderSlot, vv = window.Vue.resolveComponent, vd = window.Vue.normalizeClass, Oa = window.Vue.openBlock, Gr = window.Vue.createBlock, Wr = window.Vue.createCommentVNode, _v = window.Vue.toDisplayString, Sv = window.Vue.createElementBlock, yv = window.Vue.toHandlerKey, xv = window.Vue.withModifiers, Cv = window.Vue.mergeProps, bv = window.Vue.createElementVNode, kv = window.Vue.resolveDynamicComponent, $v = window.Vue.withCtx, Vv = { class: "mw-ui-button__content" }, Ev = ["textContent"];
function Lv(e, t, n, o, s, a) {
  const r = vv("mw-icon");
  return Oa(), Gr(kv(a.component), {
    class: vd(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: $v(() => [
      wv(e.$slots, "default", {}, () => [
        bv("span", Vv, [
          n.icon ? (Oa(), Gr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: vd(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Wr("", !0),
          !a.isIcon && n.label ? (Oa(), Sv("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: _v(n.label)
          }, null, 8, Ev)) : Wr("", !0),
          n.indicator ? (Oa(), Gr(r, Cv({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [yv(a.indicatorClickEvent)]: t[0] || (t[0] = xv((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Wr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Ke = /* @__PURE__ */ pe(fv, [["render", Lv]]);
const Tv = {
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
}, Av = window.Vue.renderList, Dv = window.Vue.Fragment, Xr = window.Vue.openBlock, _d = window.Vue.createElementBlock, Pv = window.Vue.resolveComponent, Bv = window.Vue.withModifiers, Fv = window.Vue.mergeProps, Nv = window.Vue.createBlock, Mv = { class: "row mw-ui-button-group ma-0 pa-0" };
function Uv(e, t, n, o, s, a) {
  const r = Pv("mw-button");
  return Xr(), _d("div", Mv, [
    (Xr(!0), _d(Dv, null, Av(n.items, (l) => (Xr(), Nv(r, Fv({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Bv((c) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Ea = /* @__PURE__ */ pe(Tv, [["render", Uv]]);
const Iv = {
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
}, Sd = window.Vue.renderSlot, Rv = window.Vue.toDisplayString, yd = window.Vue.openBlock, xd = window.Vue.createElementBlock, zv = window.Vue.createCommentVNode, Ov = window.Vue.createElementVNode, jv = { class: "mw-ui-card" }, Hv = ["textContent"], qv = { class: "mw-ui-card__content" };
function Gv(e, t, n, o, s, a) {
  return yd(), xd("div", jv, [
    Sd(e.$slots, "header", {}, () => [
      n.title ? (yd(), xd("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Rv(n.title)
      }, null, 8, Hv)) : zv("", !0)
    ]),
    Ov("div", qv, [
      Sd(e.$slots, "default")
    ])
  ]);
}
const Ze = /* @__PURE__ */ pe(Iv, [["render", Gv]]);
const Wv = {}, Xv = window.Vue.openBlock, Kv = window.Vue.createElementBlock, Yv = { class: "mw-ui-divider row" };
function Qv(e, t) {
  return Xv(), Kv("div", Yv);
}
const vr = /* @__PURE__ */ pe(Wv, [["render", Qv]]);
const Jv = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Zv = window.Vue.renderSlot, e0 = window.Vue.resolveDynamicComponent, t0 = window.Vue.withCtx, n0 = window.Vue.openBlock, o0 = window.Vue.createBlock;
function s0(e, t, n, o, s, a) {
  return n0(), o0(e0(n.tag), { class: "mw-grid container" }, {
    default: t0(() => [
      Zv(e.$slots, "default")
    ]),
    _: 3
  });
}
const a0 = /* @__PURE__ */ pe(Jv, [["render", s0]]), i0 = {
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
}, r0 = window.Vue.renderSlot, l0 = window.Vue.resolveDynamicComponent, c0 = window.Vue.normalizeClass, u0 = window.Vue.withCtx, d0 = window.Vue.openBlock, g0 = window.Vue.createBlock;
function m0(e, t, n, o, s, a) {
  return d0(), g0(l0(n.tag), {
    class: c0(a.classes)
  }, {
    default: u0(() => [
      r0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const U = /* @__PURE__ */ pe(i0, [["render", m0]]), fu = ["mobile", "tablet", "desktop", "desktop-wide"], p0 = fu.reduce(
  (e, t) => Ye(de({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), h0 = {
  name: "MwCol",
  props: Ye(de({}, p0), {
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
      for (let n = 0; n < fu.length; n++) {
        let o = fu[n], s = this.$props[o];
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
}, f0 = window.Vue.renderSlot, w0 = window.Vue.resolveDynamicComponent, v0 = window.Vue.normalizeClass, _0 = window.Vue.withCtx, S0 = window.Vue.openBlock, y0 = window.Vue.createBlock;
function x0(e, t, n, o, s, a) {
  return S0(), y0(w0(n.tag), {
    class: v0(a.classes)
  }, {
    default: _0(() => [
      f0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const V = /* @__PURE__ */ pe(h0, [["render", x0]]), C0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", b0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", _r = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", k0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, $0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", ef = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", V0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", E0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Sr = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", L0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", T0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", A0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Cd = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", D0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", tf = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", P0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", B0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", F0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", N0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", M0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", wu = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, U0 = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, I0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, nf = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", R0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const Kr = window.Vue.computed, z0 = window.Vue.watch, O0 = window.Vue.ref, j0 = window.Vue.nextTick, H0 = {
  name: "MwDialog",
  components: {
    MwButton: Ke,
    MwRow: U,
    MwCol: V,
    MwDivider: vr
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
    const n = O0(null), o = Kr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Kr(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    z0(
      () => e.value,
      (c) => {
        c ? (r(), j0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = Kr(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClass: s,
      mwIconClose: Sr,
      root: n
    };
  }
}, bd = window.Vue.normalizeClass, Yr = window.Vue.createElementVNode, Qr = window.Vue.renderSlot, ja = window.Vue.resolveComponent, vs = window.Vue.createVNode, Jr = window.Vue.withCtx, kd = window.Vue.createCommentVNode, q0 = window.Vue.withKeys, $d = window.Vue.openBlock, G0 = window.Vue.createElementBlock, W0 = window.Vue.Transition, X0 = window.Vue.normalizeStyle, K0 = window.Vue.createBlock, Y0 = { class: "mw-ui-dialog__shell items-stretch" }, Q0 = { class: "mw-ui-dialog__body" };
function J0(e, t, n, o, s, a) {
  const r = ja("mw-col"), l = ja("mw-button"), c = ja("mw-row"), u = ja("mw-divider");
  return $d(), K0(W0, {
    name: "mw-ui-animation-fade",
    style: X0(o.cssVars)
  }, {
    default: Jr(() => [
      n.value ? ($d(), G0("div", {
        key: 0,
        ref: "root",
        class: bd(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = q0((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        Yr("div", {
          class: bd(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        Yr("div", Y0, [
          n.header ? Qr(e.$slots, "header", { key: 0 }, () => [
            vs(c, { class: "mw-ui-dialog__header" }, {
              default: Jr(() => [
                vs(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                vs(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Jr(() => [
                    vs(l, {
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
            vs(u)
          ]) : kd("", !0),
          Yr("div", Q0, [
            Qr(e.$slots, "default")
          ]),
          Qr(e.$slots, "footer")
        ])
      ], 34)) : kd("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const Vt = /* @__PURE__ */ pe(H0, [["render", J0]]);
const Z0 = {
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
}, Vd = window.Vue.renderSlot, e_ = window.Vue.resolveComponent, Ha = window.Vue.openBlock, Zr = window.Vue.createBlock, Ed = window.Vue.createCommentVNode, t_ = window.Vue.resolveDynamicComponent, n_ = window.Vue.toDisplayString, o_ = window.Vue.mergeProps, s_ = window.Vue.withModifiers, a_ = window.Vue.createElementVNode, i_ = window.Vue.normalizeClass, r_ = window.Vue.createElementBlock, l_ = { class: "mw-ui-input__content" };
function c_(e, t, n, o, s, a) {
  const r = e_("mw-icon");
  return Ha(), r_("div", {
    class: i_(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    a_("div", l_, [
      Vd(e.$slots, "icon", {}, () => [
        n.icon ? (Ha(), Zr(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Ed("", !0)
      ]),
      (Ha(), Zr(t_(n.type === "textarea" ? n.type : "input"), o_({
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
        textContent: n_(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Vd(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ha(), Zr(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = s_((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Ed("", !0)
      ])
    ])
  ], 2);
}
const vu = /* @__PURE__ */ pe(Z0, [["render", c_]]);
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
const u_ = {}, d_ = window.Vue.createElementVNode, g_ = window.Vue.openBlock, m_ = window.Vue.createElementBlock, p_ = { class: "mw-ui-spinner" }, h_ = /* @__PURE__ */ d_("div", { class: "mw-ui-spinner__bounce" }, null, -1), f_ = [
  h_
];
function w_(e, t) {
  return g_(), m_("div", p_, f_);
}
const mt = /* @__PURE__ */ pe(u_, [["render", w_]]), kt = {
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
const v_ = window.Vue.computed, __ = {
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
      default: nf
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
    const n = v_(() => {
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
}, Ld = window.Vue.normalizeStyle, Td = window.Vue.openBlock, S_ = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const y_ = window.Vue.resolveComponent, x_ = window.Vue.createBlock;
function C_(e, t, n, o, s, a) {
  const r = y_("mw-ui-icon");
  return n.thumbnail ? (Td(), S_("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Ld(o.style)
  }, null, 4)) : (Td(), x_(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Ld(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Pu = /* @__PURE__ */ pe(__, [["render", C_]]);
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
const b_ = {
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
}, Ad = window.Vue.normalizeClass, Dd = window.Vue.normalizeStyle, k_ = window.Vue.createElementVNode, $_ = window.Vue.openBlock, V_ = window.Vue.createElementBlock, E_ = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function L_(e, t, n, o, s, a) {
  return $_(), V_("div", {
    class: Ad(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Dd(a.containerStyles)
  }, [
    k_("div", {
      class: Ad(["mw-progress-bar__bar", a.barClass]),
      style: Dd(a.barStyles)
    }, null, 6)
  ], 14, E_);
}
const of = /* @__PURE__ */ pe(b_, [["render", L_]]), T_ = (e, t, n, o) => (s) => {
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
}, A_ = (e, t, n, o) => ({ initiateDrag: T_(
  e,
  t,
  n,
  o
) }), D_ = window.Vue.ref, Pd = window.Vue.computed, P_ = (e, t, n, o) => {
  const s = D_(0), a = Pd(
    () => t.value > e.value
  ), r = Pd(
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
const qa = window.Vue.ref, B_ = window.Vue.onMounted, Bd = window.Vue.computed, F_ = window.Vue.nextTick, N_ = {
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
    const t = qa(!0), n = qa(null), o = Bd(
      () => Math.min(e.minHeight, s.value)
    ), s = qa(1), { initiateDrag: a } = A_(
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
    } = P_(o, s, n, t), d = () => u(c.value + 1), g = qa(null), m = Bd(() => ({
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
    return B_(() => x(this, null, function* () {
      var f;
      yield F_(), s.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: I0,
      mwIconExpand: V0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), u(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: c,
      scrollToNextStep: d
    };
  }
}, M_ = window.Vue.renderSlot, U_ = window.Vue.normalizeClass, Ga = window.Vue.createElementVNode, I_ = window.Vue.resolveComponent, R_ = window.Vue.createVNode, el = window.Vue.openBlock, z_ = window.Vue.createBlock, Fd = window.Vue.createCommentVNode, Nd = window.Vue.createElementBlock, O_ = window.Vue.normalizeStyle, j_ = { class: "mw-ui-expandable-content__container" }, H_ = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, q_ = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function G_(e, t, n, o, s, a) {
  const r = I_("mw-button");
  return el(), Nd("div", {
    class: "mw-ui-expandable-content",
    style: O_(o.cssVars)
  }, [
    Ga("div", j_, [
      Ga("div", {
        ref: "contentRef",
        class: U_(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        M_(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (el(), Nd("div", H_, [
        R_(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (el(), z_(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Fd("", !0)
      ])) : Fd("", !0)
    ]),
    Ga("div", q_, [
      Ga("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const W_ = /* @__PURE__ */ pe(N_, [["render", G_]]);
const Wa = window.Vue.computed, X_ = {
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
    const t = Wa(() => e.size / 2 * 0.9), n = Wa(() => Math.PI * (t.value * 2)), o = Wa(
      () => (100 - e.percentage) / 100 * n.value
    ), s = Wa(() => ({
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
}, Md = window.Vue.createElementVNode, Ud = window.Vue.normalizeStyle, K_ = window.Vue.openBlock, Y_ = window.Vue.createElementBlock, Q_ = ["width", "height", "viewport"], J_ = ["r", "cx", "cy", "stroke-dasharray"], Z_ = ["r", "cx", "cy", "stroke-dasharray"];
function e1(e, t, n, o, s, a) {
  return K_(), Y_("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: Ud(o.cssVars)
  }, [
    Md("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, J_),
    Md("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Ud({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, Z_)
  ], 12, Q_);
}
const t1 = /* @__PURE__ */ pe(X_, [["render", e1]]), n1 = window.Vue.ref, An = {
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
}, tl = {
  mobile: () => matchMedia(Fn.mobile).matches,
  tablet: () => matchMedia(Fn.tablet).matches,
  desktop: () => matchMedia(Fn.desktop).matches,
  desktopwide: () => matchMedia(Fn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Fn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Fn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Fn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Fn["desktop-and-down"]).matches
}, o1 = (e) => {
  const t = Object.values(An);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, s1 = {
  install: (e) => {
    const t = n1({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in tl)
        tl.hasOwnProperty(s) && (t.value[s] = tl[s]());
      t.value.nextBreakpoint = o1(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Ye(de({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, a1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ye(de({}, e.config.globalProperties.$mwui || {}), {
      colors: kt
    }), e.provide("colors", kt);
  }
};
class rs extends Error {
}
const i1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new rs();
}), sf = { assertUser: i1 };
const r1 = window.Vue.resolveDirective, _s = window.Vue.createElementVNode, Id = window.Vue.withDirectives, l1 = window.Vue.toDisplayString, c1 = window.Vue.unref, Rd = window.Vue.withCtx, u1 = window.Vue.openBlock, d1 = window.Vue.createBlock, g1 = window.Vue.createCommentVNode, m1 = { class: "pa-4 sx-login-dialog__header" }, p1 = { class: "sx-login-dialog__body px-6 pb-4" }, h1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, f1 = ["href"], w1 = window.Vue.computed, v1 = window.Vue.ref, _1 = window.Vuex.useStore, S1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = _1(), n = w1(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = v1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = r1("i18n");
      return n.value ? (u1(), d1(c1(Vt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Rd(() => [
          _s("div", m1, [
            Id(_s("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Rd(() => [
          Id(_s("div", p1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          _s("div", h1, [
            _s("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, l1(a.$i18n("cx-sx-login-dialog-button-label")), 9, f1)
          ])
        ]),
        _: 1
      })) : g1("", !0);
    };
  }
}, Z = new mw.cx.SiteMapper(), y1 = mw.util.getUrl, x1 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, qt = !mw.config.get("wgMFMode");
class Bu {
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
const Xa = "original", Ka = "empty", C1 = {
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
      Xa,
      Ka
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return C1[t] || t;
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
    return Xa;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Ka;
  }
  static isUserMTProvider(t) {
    return [Xa, Ka].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === Ka ? "blank" : t === Xa ? "source" : t.toLowerCase();
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
const zd = (e) => {
  var n;
  const t = hr(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, hr = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, xo = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), af = (e) => {
  const t = hr(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = b1(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, b1 = (e) => {
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
}, rf = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, lf = (e) => {
  const t = rf(e);
  return t == null ? void 0 : t.targetExists;
};
class nl {
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
      (a) => xo(a)
    );
    s && lf(s) && (this.blockTemplateAdaptationInfo[t] = rf(s));
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
      (t) => xo(t)
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
    const t = hr(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? zd(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => xo(o));
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
    return n && zd(n) || "";
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
    const o = hr(n);
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
      (a) => xo(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new nl({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new nl({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new nl({
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
        (s) => xo(s)
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
const Fu = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), k1 = Fu - 10, $1 = [
  { status: "failure", value: 100 - Fu },
  { status: "warning", value: 100 - k1 },
  { status: "success", value: 100 }
], cf = (e, t, n) => {
  const o = Od(e).textContent, s = Od(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, V1 = (e) => $1.find((t) => e <= t.value).status, E1 = (e, t) => cf(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), L1 = () => (100 - Fu) / 100, Od = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, sn = {
  calculateScore: cf,
  getScoreStatus: V1,
  getMTScoreForPageSection: E1,
  getMtModificationThreshold: L1
}, Ya = "__LEAD_SECTION__";
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
    return Ya;
  }
  static isSectionLead(t) {
    return !t || t === Ya;
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
    return this.isLeadSection ? Ya : this.originalTitle;
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
    return this.isLeadSection ? Ya : this.title;
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
class yr extends Bu {
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
const an = "previous-edits", rn = "popular", tt = "topic", Be = "geography", ee = "collections", We = "automatic", Gt = "seed", jd = window.Vue.ref, { topics: T1, regions: A1 } = mw.loader.require(
  "ext.cx.articlefilters"
), ol = {
  type: We,
  id: an
}, D1 = {
  type: We,
  id: rn
}, Nu = () => {
  const e = jd(
    T1.flatMap((u) => u.topics).map((u) => u.topicId.toLowerCase())
  ), t = jd(!1), n = (u, i) => e.value.includes(i) ? { type: tt, id: i } : null, o = (u, i) => A1.some(
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
      return d && !d.length ? (t.value = !0, ol) : {
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
    } else if (g === Gt)
      return { type: Gt, id: i };
    return ol;
  }, r = ({ type: u, id: i }) => c({ type: u, id: i }, ol), l = ({ type: u, id: i }) => c({ type: u, id: i }, D1), c = (u, i) => !(u != null && u.id) || !(u != null && u.type) || !(i != null && i.id) || !(i != null && i.type) ? !1 : u.id.toLowerCase() === i.id.toLowerCase() && u.type.toLowerCase() === i.type.toLowerCase();
  return {
    filtersValidatorError: t,
    validateFilters: a,
    isDefaultFilter: r,
    isPopularFilter: l,
    isEqualFilter: c
  };
}, P1 = window.Vue.inject, B1 = window.Vue.reactive;
var F1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, uf = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(F1, function() {
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
            function y(A, q) {
              return () => {
                const Ue = f, At = [];
                let J = q();
                for (; J !== null; )
                  At.push(J), J = q();
                return At.length < A ? (f = Ue, null) : At;
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
            const k = _(/^\s+/), L = b("|"), M = b(":"), C = b("\\"), D = _(/^./), I = b("$"), Q = _(/^\d+/), se = b('"'), oe = b("'"), N = _(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), R = _(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), G = w([X, _(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function X() {
              const A = v([C, D]);
              return A === null ? null : A[1];
            }
            const re = w([X, R]), xe = w([X, N]);
            function ke() {
              const A = v([I, Q]);
              return A === null ? null : ["REPLACE", parseInt(A[1], 10) - 1];
            }
            const $e = (Ne = _(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), z = function(A) {
              return A.toString();
            }, () => {
              const A = Ne();
              return A === null ? null : z(A);
            });
            var Ne, z;
            function B() {
              const A = v([L, y(0, Lo)]);
              if (A === null)
                return null;
              const q = A[1];
              return q.length > 1 ? ["CONCAT"].concat(q) : q[0];
            }
            function j() {
              const A = v([$e, M, ke]);
              return A === null ? null : [A[0], A[2]];
            }
            function S() {
              const A = v([$e, M, Lo]);
              return A === null ? null : [A[0], A[2]];
            }
            function E() {
              const A = v([$e, M]);
              return A === null ? null : [A[0], ""];
            }
            const T = w([function() {
              const A = v([w([j, S, E]), y(0, B)]);
              return A === null ? null : A[0].concat(A[1]);
            }, function() {
              const A = v([$e, y(0, B)]);
              return A === null ? null : [A[0]].concat(A[1]);
            }]), F = b("{{"), K = b("}}"), fe = b("[["), W = b("]]"), H = b("["), ae = b("]");
            function st() {
              const A = v([F, T, K]);
              return A === null ? null : A[1];
            }
            const Ve = w([function() {
              const A = v([y(1, Lo), L, y(1, Eo)]);
              return A === null ? null : [["CONCAT"].concat(A[0]), ["CONCAT"].concat(A[2])];
            }, function() {
              const A = v([y(1, Lo)]);
              return A === null ? null : [["CONCAT"].concat(A[0])];
            }]);
            function Ma() {
              let A = null;
              const q = v([fe, Ve, W]);
              if (q !== null) {
                const Ue = q[1];
                A = ["WIKILINK"].concat(Ue);
              }
              return A;
            }
            function Ua() {
              let A = null;
              const q = v([H, y(1, Ir), k, y(1, Eo), ae]);
              return q !== null && (A = ["EXTLINK", q[1].length === 1 ? q[1][0] : ["CONCAT"].concat(q[1]), ["CONCAT"].concat(q[3])]), A;
            }
            const ro = _(/^[A-Za-z]+/);
            function Mr() {
              const A = _(/^[^"]*/), q = v([se, A, se]);
              return q === null ? null : q[1];
            }
            function Ur() {
              const A = _(/^[^']*/), q = v([oe, A, oe]);
              return q === null ? null : q[1];
            }
            function fs() {
              const A = _(/^\s*=\s*/), q = v([k, ro, A, w([Mr, Ur])]);
              return q === null ? null : [q[1], q[3]];
            }
            function ws() {
              const A = y(0, fs)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], A);
            }
            const Ir = w([st, ke, Ma, Ua, function() {
              const A = y(1, G)();
              return A === null ? null : A.join("");
            }]), Eo = w([st, ke, Ma, Ua, function() {
              let A = null;
              const q = f, Ue = b("<"), At = _(/^\/?/), J = _(/^\s*>/), un = v([Ue, ro, ws, At, J]);
              if (un === null)
                return null;
              const Bn = f, ft = un[1], To = y(0, Eo)(), Rr = f, md = v([b("</"), ro, J]);
              if (md === null)
                return ["CONCAT", p.slice(q, Bn)].concat(To);
              const Jw = f, Zw = md[1], pd = un[2];
              if (function(lo, Ra, zr, Or = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((lo = lo.toLowerCase()) !== (Ra = Ra.toLowerCase()) || Or.allowedHtmlElements.indexOf(lo) === -1)
                  return !1;
                const ev = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let za = 0, tv = zr.length; za < tv; za += 2) {
                  const jr = zr[za];
                  if (Or.allowedHtmlCommonAttributes.indexOf(jr) === -1 && (Or.allowedHtmlAttributesByElement[lo] || []).indexOf(jr) === -1 || jr === "style" && zr[za + 1].search(ev) !== -1)
                    return !1;
                }
                return !0;
              }(ft, Zw, pd.slice(1)))
                A = ["HTMLELEMENT", ft, pd].concat(To);
              else {
                const lo = (Ra) => Ra.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                A = ["CONCAT", lo(p.slice(q, Bn))].concat(To, lo(p.slice(Rr, Jw)));
              }
              return A;
            }, function() {
              const A = y(1, xe)();
              return A === null ? null : A.join("");
            }]), Lo = w([st, ke, function() {
              const A = y(1, re)();
              return A === null ? null : A.join("");
            }]), Ia = function() {
              const A = y(0, Eo)();
              return A === null ? null : ["CONCAT"].concat(A);
            }();
            if (Ia === null || f !== p.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + p);
            return Ia;
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
})(uf);
var N1 = uf.exports;
const Hd = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, df = Symbol("banana-context");
function he() {
  const e = P1(df);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function M1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = B1(new N1(e.locale, e));
  return {
    install: (n) => {
      n.provide(df, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = Hd(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = Hd(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Pn = window.Vue.ref, U1 = window.Vue.computed, xr = Pn(null), Cr = Pn(null), br = Pn(null), La = Pn(null), Mu = Pn(null), kr = Pn(null), gf = Pn(null), mf = Pn(null), Uu = Pn(null), { validateFilters: I1, filtersValidatorError: R1 } = Nu(), pf = {
  from: xr,
  to: Cr,
  section: La,
  draft: Mu,
  page: br,
  revision: kr,
  "active-list": Uu
}, z1 = U1(() => ({
  type: gf.value,
  id: mf.value
})), hf = (e, t) => {
  gf.value = e, mf.value = t, fr("filter-type", e), t && fr("filter-id", t);
}, O1 = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof yr && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), pf[o].value = s;
  }
  t.delete("title"), Ta(Object.fromEntries(t));
}, Iu = (e, t) => {
  pf[e].value = t, fr(e, t);
}, j1 = (e) => {
  Iu("section", e);
}, H1 = (e) => {
  Iu("page", e);
}, q1 = (e) => {
  Iu("active-list", e);
}, Ta = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    y1(`Special:ContentTranslation${t}`, e)
  );
}, G1 = () => {
  const e = he(), t = new URLSearchParams(location.search);
  br.value = t.get("page"), xr.value = t.get("from"), Cr.value = t.get("to"), La.value = t.get("section"), kr.value = t.get("revision"), Uu.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = I1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  hf(n.type, n.id), R1.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, W1 = () => {
  const e = new URLSearchParams(location.search);
  La.value = null, e.delete("section"), e.delete("title"), Ta(Object.fromEntries(e));
}, fr = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), Ta(Object.fromEntries(n));
}, X1 = (e) => new URLSearchParams(location.search).get(e), K1 = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), xr.value = e, Cr.value = t, n.delete("title"), Ta(Object.fromEntries(n));
}, Y1 = () => {
  const e = new URLSearchParams(location.search);
  br.value = null, La.value = null, Mu.value = null, kr.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), Ta(Object.fromEntries(e));
}, Q1 = () => new URLSearchParams(location.search).get("force-quick-tutorial"), P = () => ({
  isQuickTutorialForced: Q1,
  setLanguageURLParams: K1,
  setSectionURLParam: j1,
  setTranslationURLParams: O1,
  initializeURLState: G1,
  clearTranslationURLParameters: Y1,
  clearSectionURLParameter: W1,
  setUrlParam: fr,
  getUrlParam: X1,
  pageURLParameter: br,
  sourceLanguageURLParameter: xr,
  targetLanguageURLParameter: Cr,
  sectionURLParameter: La,
  draftURLParameter: Mu,
  revisionURLParameter: kr,
  setPageURLParam: H1,
  currentSuggestionFilters: z1,
  setFilterURLParams: hf,
  activeDashboardTabParameter: Uu,
  setActiveDashboardTabParameter: q1
}), J1 = () => {
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
function Z1(e, t) {
  return x(this, null, function* () {
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
function eS() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function tS(e, t, n, o) {
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
const $r = {
  fetchSupportedLanguageCodes: J1,
  fetchSupportedMTProviders: Z1,
  fetchCXServerToken: eS,
  addWikibaseLink: tS
}, nS = window.Vue.ref, Qa = nS([]);
let qd = !1;
function Aa() {
  return {
    fetchSupportedLanguageCodes: () => x(this, null, function* () {
      if (!qd) {
        qd = !0, Qa.value = yield $r.fetchSupportedLanguageCodes();
        const t = mw.config.get(
          "ContentTranslationDomainCodeMapping"
        );
        Object.keys(t).forEach((n) => {
          if (n === "be-x-old")
            return;
          const o = t[n], s = Qa.value.indexOf(o);
          s > -1 && (Qa.value[s] = n);
        });
      }
    }),
    supportedLanguageCodes: Qa
  };
}
const oS = {
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
}, sS = {
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
}, aS = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], iS = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, rS = {
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
}, lS = {
  languages: oS,
  scriptgroups: sS,
  rtlscripts: aS,
  regiongroups: iS,
  territories: rS
};
var Oe = lS;
function Da(e) {
  return !!Oe.languages[e];
}
function io(e) {
  return Da(e) && Oe.languages[e].length === 1 ? Oe.languages[e][0] : !1;
}
function cS() {
  return Oe.languages;
}
function Pa(e) {
  var t = io(e);
  return t ? Pa(t) : Da(e) ? Oe.languages[e][0] : "Zyyy";
}
function Ru(e) {
  var t = io(e);
  return t ? Ru(t) : Da(e) && Oe.languages[e][1] || "UNKNOWN";
}
function ka(e) {
  var t = io(e);
  return t ? ka(t) : Da(e) && Oe.languages[e][2] || e;
}
function uS() {
  var e, t = {};
  for (e in Oe.languages)
    io(e) || (t[e] = ka(e));
  return t;
}
function ff(e) {
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
function dS(e) {
  return ff([e]);
}
function wf(e) {
  var t;
  for (t in Oe.scriptgroups)
    if (Oe.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function zu(e) {
  return wf(Pa(e));
}
function vf(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = io(n) || n, a = zu(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function _f(e) {
  var t, n, o, s = {};
  for (t in Oe.languages)
    if (!io(t)) {
      for (n = 0; n < e.length; n++)
        if (Ru(t).includes(e[n])) {
          o = zu(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function gS(e) {
  return _f([e]);
}
function mS(e) {
  var t, n, o, s = [];
  for (t = vf(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function pS(e, t) {
  var n = ka(e) || e, o = ka(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function Sf(e) {
  return Oe.rtlscripts.includes(Pa(e));
}
function hS(e) {
  return Sf(e) ? "rtl" : "ltr";
}
function fS(e) {
  return Oe.territories[e] || [];
}
function wS(e, t) {
  t.target ? Oe.languages[e] = [t.target] : Oe.languages[e] = [t.script, t.regions, t.autonym];
}
var O = {
  addLanguage: wS,
  getAutonym: ka,
  getAutonyms: uS,
  getDir: hS,
  getGroupOfScript: wf,
  getLanguages: cS,
  getLanguagesByScriptGroup: vf,
  getLanguagesByScriptGroupInRegion: gS,
  getLanguagesByScriptGroupInRegions: _f,
  getLanguagesInScript: dS,
  getLanguagesInScripts: ff,
  getLanguagesInTerritory: fS,
  getRegions: Ru,
  getScript: Pa,
  getScriptGroupOfLanguage: zu,
  isKnown: Da,
  isRedirect: io,
  isRtl: Sf,
  sortByScriptGroup: mS,
  sortByAutonym: pS
};
const Ao = window.Vue.computed;
function Fe(e) {
  const t = Ao(() => e.state.application.sourceLanguage), n = Ao(() => e.state.application.targetLanguage), o = Ao(
    () => e.state.application.currentMTProvider
  ), s = Ao(
    () => O.getAutonym(t.value)
  ), a = Ao(
    () => O.getAutonym(n.value)
  ), r = Ao(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class ls {
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
}, xS = (e, t) => {
  const n = Array.from(
    yS(e, t)
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
        (i) => new gt({
          sentences: bS(i),
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
}, bS = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new eo({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), yf = {
  convertSegmentedContentToPageSections: xS
}, Ou = 120, kS = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Ou,
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
      return new ls(Ye(de({}, i), { _alias: d }));
    });
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
  };
  return Z.getApi(e).get(n).then((s) => {
    var c, u;
    const a = s.query.pages;
    if (!a || !a.length || (c = a[0]) != null && c.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (u = a[0].pageprops) == null ? void 0 : u.wikibase_item;
    return l ? Object.freeze(new vS(l, r)) : null;
  });
}, VS = (e, t, n) => {
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
}, ES = (e, t, n, o = null) => {
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
  ), a = LS(
    e,
    t,
    n,
    o
  );
  return Promise.all([a, s]).then(
    ([r, l]) => {
      const c = yf.convertSegmentedContentToPageSections(
        r,
        !1
        // No need to resolve references. Content can be used as it is
      );
      return c.forEach((u) => {
        const i = l.find((d) => d.id === u.id);
        u.originalTitle = (i == null ? void 0 : i.title) || "";
      }), new ls({
        sections: c,
        content: r,
        pagelanguage: e,
        title: n
      });
    }
  );
}, LS = (e, t, n, o = null) => {
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
}, TS = (e) => {
  const t = x1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Ou,
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
  }).then((o) => o.map((s) => new ls(s)));
}, AS = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount|pageprops",
    piprop: "thumbnail",
    pithumbsize: Ou,
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
      (a) => new ls(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => (mw.cx.eventlogging.stats.articleSearchFailed(), []));
}, ko = {
  fetchPages: kS,
  fetchLanguageTitles: $S,
  fetchPageContent: ES,
  fetchNearbyPages: TS,
  searchPagesByTitlePrefix: AS,
  fetchLanguageLinksForLanguage: VS
}, DS = window.Vuex.useStore, cs = () => {
  const e = DS();
  return (t, n) => {
    n = n.filter(
      (a) => !!a && !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const r = n.slice(a, a + o), l = ko.fetchPages(t, r).then(
        (c) => c.forEach(
          (u) => e.commit("mediawiki/addPage", u)
        )
      );
      s.push(l);
    }
    return Promise.all(s);
  };
}, PS = window.Vuex.useStore, Vr = () => {
  const e = PS(), {
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
      type: ee
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
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSectionInfo = l, this.sourceSectionSizes = c, this.sourceSections = u, this.targetSections = i, this.suggestionSeed = d, this.isListable = g, this.suggestionProvider = m, this.seen = !1, this.inFeaturedCollection = !1;
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
const xf = [
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
  en: xf,
  es: BS,
  bn: FS,
  fr: NS,
  de: MS
};
class ss {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s, this.inFeaturedCollection = !1;
  }
}
class ju {
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
class Cf extends oo {
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
    }), this.collection = new ju(u);
  }
  /**
   * @returns {boolean}
   */
  collectionMatchesProvider() {
    var t;
    return this.collection.name === ((t = this.suggestionProvider) == null ? void 0 : t.id);
  }
}
class bf extends on {
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
    }), this.collection = new ju(m);
  }
  /**
   * @returns {boolean}
   */
  collectionMatchesProvider() {
    var t;
    return this.collection.name === ((t = this.suggestionProvider) == null ? void 0 : t.id);
  }
}
let Ja = null;
const kf = (e) => {
  if (Ja)
    return Promise.resolve(Ja);
  const t = "https://en.wikipedia.org/w/api.php", n = new URLSearchParams({
    action: "query",
    meta: "globaluserinfo",
    guiuser: e,
    guiprop: "editcount",
    formatversion: 2,
    origin: "*",
    format: "json"
  }), o = t + "?" + n;
  return fetch(o).then((s) => s.json()).then((s) => (Ja = s.query.globaluserinfo.editcount, Ja)).catch((s) => {
    mw.log.error("Error while fetching global edit count for user. ", s);
  });
}, IS = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits", RS = () => x(void 0, null, function* () {
  if (mw.user.isAnon())
    return !1;
  const e = mw.user.getName();
  return (yield kf(e)) < 100;
}), Xe = {
  stub: "stub",
  easy: "easy",
  medium: "medium",
  hard: "hard",
  unknown: "unknown"
}, $f = {
  easy: 2500,
  medium: 1e4,
  hard: 4e4
}, _u = {
  easy: 1e3,
  medium: 4e3,
  hard: 12e3
}, Vf = (e, t) => !e || e < 0 ? Xe.unknown : e < t.easy ? Xe.stub : e < t.medium ? Xe.easy : e < t.hard ? Xe.medium : Xe.hard, Ef = (e) => Vf(e, $f), Hu = (e) => Vf(e, _u), zS = (e) => {
  if (!e)
    return !1;
  const t = Ef(e);
  return t === Xe.stub || t === Xe.easy;
}, OS = (e) => {
  if (!e)
    return !1;
  const t = Hu(e);
  return t === Xe.stub || t === Xe.easy;
}, Lf = (e) => e ? Hu(e) === Xe.easy : !1;
class jS {
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
const HS = xf, ln = 6, qS = (e, t) => x(void 0, null, function* () {
  if (yield RS()) {
    let o;
    e ? e === "/sections" && (o = _u) : (o = $f, qt || (t.lead_section = !0, o = _u)), o && (t.min_size = o[Xe.easy], t.max_size = o[Xe.medium] - 1);
  } else
    qt || (t.lead_section = !0);
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
    ), mw.cx.eventlogging.stats.recommendationFailed(), null;
  }
});
function GS() {
  return x(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Et({ urlPostfix: t, urlParams: e })) || [], o = {};
      for (const s in n)
        o[s] = n[s].map(
          (a) => new ju(a)
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
      var r;
      const a = (r = s == null ? void 0 : s.query) == null ? void 0 : r.cxconfig;
      o(
        a ? new jS(
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
const YS = (e, t) => x(void 0, null, function* () {
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
      sourceSectionInfo: a.source_section_info,
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
      (d) => new Cf({
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
      (g) => new bf({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: g.source_title,
        targetTitle: g.target_title,
        sourceSections: g.source_sections,
        targetSections: g.target_sections,
        present: g.present,
        missing: g.missing,
        collection: g.collection,
        sourceSectionInfo: g.source_section_info,
        sourceSectionSizes: g.source_section_sizes
      })
    ),
    continue_offset: i.continue_offset,
    continue_seed: i.continue_seed
  };
});
function ey(e, t, n) {
  return x(this, null, function* () {
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
      (r) => new on({
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
function oy(a) {
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
        sourceSectionInfo: u.source_section_info,
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
function ay(a) {
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
        sourceSectionInfo: u.source_section_info,
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
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
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
    (n) => n.map((o) => new ss(o))
  );
}, ue = {
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
}, gy = window.Vuex.useStore, us = () => {
  const e = gy(), { sourceLanguage: t, targetLanguage: n } = Fe(e), o = (l) => {
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
const hy = window.Vuex.useStore, qu = window.Vue.ref, fy = qu([]), wy = qu([]);
let sl = !1, al = !1, Gd = !1;
const Za = qu([]);
let Ss = null;
const il = {
  page: fy,
  section: wy
}, Tf = () => {
  const e = hy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), o = () => x(void 0, null, function* () {
    al || (Za.value = yield ue.fetchUserEdits(t.value).then((u) => (al = !0, u)));
  }), s = () => x(void 0, null, function* () {
    let u = e.getters["translator/getTranslationsByStatus"]("published");
    if (u = u.filter(
      (i) => i.sourceLanguage === t.value
    ), u.length && !sl)
      return sl = !0, u.map(
        (i) => i.sourceTitle
      );
    if (sl = !0, !al && (yield o(), Za.value.length > 0))
      return Za.value;
    if (!Gd) {
      const i = yield ue.fetchUserEdits(n.value).then((d) => (Gd = !0, d));
      if (i.length)
        return ko.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (u) => {
    let i = il[u].value.find(
      (d) => d.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new py({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), il[u].value.push(i)), i;
  }, r = () => x(void 0, null, function* () {
    let u = !1, i = [];
    do {
      i = yield s(), i || (u = !0);
      for (const d in il) {
        const g = a(d);
        g.setSeeds([
          ...g.seeds,
          ...i || []
        ]);
      }
    } while (!u && !(i != null && i.length));
  }), l = () => Ss || (Ss = r(), Ss.finally(() => {
    Ss = null;
  }));
  return {
    getSuggestionSeed: (u) => x(void 0, null, function* () {
      let i = a(u);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: o,
    previousEditsInSource: Za
  };
}, vy = 5;
function bo(e) {
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
  } = P(), { getSuggestionSeed: o } = Tf(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = us(), l = {
    id: an,
    type: We
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => x(void 0, null, function* () {
      const d = [];
      return yield bo(() => x(void 0, null, function* () {
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
    fetchSectionSuggestionsBasedOnEdits: (i) => x(void 0, null, function* () {
      const d = [];
      return yield bo(() => x(void 0, null, function* () {
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
}, Gu = window.Vue.ref, ys = "ungrouped", Wd = Gu({}), Xd = Gu({}), Kd = Gu(!1), Er = () => ({
  fetchPageCollectionGroups: () => x(void 0, null, function* () {
    try {
      const t = yield ue.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((o, s) => o === ys ? 1 : s === ys ? -1 : o.localeCompare(s)).map((o) => [o, t[o]])
      );
      n[ys] && (n[ys] = n[ys].sort(
        (o, s) => o.name.localeCompare(s.name)
      )), Wd.value = n, Xd.value = Object.values(t).flat(), Kd.value = !0;
    } catch (t) {
      mw.log.error("Failed to fetch page collections", t);
    }
  }),
  pageCollectionGroupsFetched: Kd,
  pageCollectionGroups: Wd,
  pageCollections: Xd
}), rl = window.Vue.computed, Lr = window.Vue.ref, yy = window.Vue.watch, xy = new mw.cx.SiteMapper(), Wu = xy.getCurrentWikiLanguageCode(), Cy = mw.config.get(
  "wgContentTranslationFeaturedCollection"
), by = mw.config.get(
  "wgContentTranslationFeaturedCollectionCommunityName"
), ky = mw.config.get(
  "wgContentTranslationFeaturedCollectionDescription"
), $y = mw.config.get(
  "wgContentTranslationFeaturedCollectionLink"
), Af = Lr({
  [Wu]: {
    name: Cy,
    communityName: by,
    description: ky,
    link: $y
  }
}), Su = Lr({
  [Wu]: Promise.resolve()
}), yu = Lr({
  [Wu]: !0
});
let Yd = !1;
const Qd = (e) => {
  if (!e || Su.value[e])
    return;
  const t = ue.fetchFeaturedCollectionDataByLanguage(e).then((n) => {
    n && (Af.value[e] = n), yu.value[e] = !0;
  }).catch((n) => {
    yu.value[e] = !0, console.error("Failed to fetch featured collection:", n);
  });
  Su.value[e] = t;
}, Vy = (e, t) => !e || !Array.isArray(t) ? !1 : t.some(
  (n) => n.name.toLowerCase() === e.toLowerCase()
), Wt = (e = void 0) => {
  const { pageCollections: t } = Er();
  let n;
  if (e)
    n = Lr(e), e && Qd(e);
  else {
    const { targetLanguageURLParameter: r } = P();
    n = r, Yd || (yy(
      n,
      (l) => {
        l && Qd(l);
      },
      { immediate: !0 }
    ), Yd = !0);
  }
  const o = rl(() => {
    const r = n.value, l = Af.value[r];
    return l != null && l.name && Vy(l.name, t.value) ? l : null;
  }), s = rl(
    () => yu.value[n.value] || !1
  ), a = rl(
    () => Su.value[n.value]
  );
  return {
    featuredCollection: o,
    featuredCollectionFetched: s,
    featuredCollectionPromise: a
  };
}, Ey = window.Vuex.useStore, Ly = window.Vue.computed, Df = () => {
  const e = Ey(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), s = Ly(() => {
    var h;
    return ((h = o.value) == null ? void 0 : h.type) !== ee ? null : o.value.id;
  }), { featuredCollection: a, featuredCollectionPromise: r } = Wt(), {
    isSectionSuggestionValid: l,
    isPageSuggestionValid: c,
    sectionSuggestionExists: u
  } = us(), i = (h = null) => h ? { id: h, type: ee } : o.value, d = (h) => x(void 0, null, function* () {
    var b;
    let f = null;
    h || (yield r.value, f = ((b = a.value) == null ? void 0 : b.name) || null);
    const w = [], y = (yield ue.fetchPageSuggestionsByCollections({
      sourceLanguage: t.value,
      targetLanguage: n.value,
      featuredCollection: f,
      collectionName: h
    })).recommendations.filter(
      (_) => c(_)
    );
    return w.push(...y), w.forEach((_) => {
      _.suggestionProvider = i(h);
    }), w;
  }), g = () => d(s.value), m = (h) => x(void 0, null, function* () {
    var _;
    let f = null;
    h || (yield r.value, f = ((_ = a.value) == null ? void 0 : _.name) || null), yield r.value;
    const w = [], v = yield ue.fetchSectionSuggestionsByCollections({
      sourceLanguage: t.value,
      targetLanguage: n.value,
      featuredCollection: f,
      collectionName: h
    }), y = v.recommendations.filter(
      (k) => l(k)
    ), b = v.recommendations.filter(
      (k) => !l(k)
    );
    return w.push(...y), b.forEach((k) => {
      k && !u(k) && (k.isListable = !1, e.commit("suggestions/addSectionSuggestion", k));
    }), w.forEach((k) => {
      k.suggestionProvider = i(h);
    }), w;
  });
  return {
    fetchSectionSuggestionsByCollections: () => m(s.value),
    fetchPageSuggestionsByCollections: g,
    doFetchPageSuggestionsByCollection: d,
    doFetchSectionSuggestionsByCollection: m
  };
}, Ty = window.Vuex.useStore, Ay = () => {
  const e = Ty(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), o = {
    id: rn,
    type: We
  }, {
    getNextUnseenSectionSuggestionByCollection: s,
    getNextUnseenPageSuggestionByCollection: a
  } = Vr(), {
    isSectionSuggestionValid: r,
    isPageSuggestionValid: l,
    sectionSuggestionExists: c
  } = us(), { featuredCollection: u, featuredCollectionPromise: i } = Wt(), {
    doFetchPageSuggestionsByCollection: d,
    doFetchSectionSuggestionsByCollection: g
  } = Df(), m = (f, w, v, y, b) => x(void 0, null, function* () {
    var k;
    yield i.value;
    const _ = (k = u.value) == null ? void 0 : k.name;
    if (_) {
      let L = w(_);
      if (!L) {
        const [M = null, ...C] = yield f(_);
        L = M, C.forEach((D) => {
          e.commit(v, D);
        });
      }
      L && (y.push(L), b--);
    }
    return b;
  });
  return { fetchSectionSuggestionsPopular: (f) => x(void 0, null, function* () {
    const w = [];
    return f = yield m(
      g,
      s,
      "suggestions/addSectionSuggestion",
      w,
      f
    ), yield bo(() => x(void 0, null, function* () {
      const v = yield ue.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let y = v.filter(
        (_) => r(_)
      );
      const b = v.filter(
        (_) => !r(_)
      );
      return y = y.slice(0, f), w.push(...y), b.forEach((_) => {
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
    ), yield bo(() => x(void 0, null, function* () {
      let v = yield ue.fetchMostPopularPageSuggestions(
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
const Dy = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', Py = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', By = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', Fy = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', Ny = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', My = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', Uy = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', Iy = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', Ry = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', zy = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', Oy = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', jy = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', Hy = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', qy = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', Gy = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', Wy = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', Xy = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', Ky = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', Yy = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Pf = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', Qy = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', Jy = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', Zy = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', ex = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', tx = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', nx = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', ox = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', sx = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', ax = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', ix = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', rx = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', lx = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', cx = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', ux = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', dx = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', gx = '<circle cx="6" cy="6" r="3"/><circle cx="14" cy="6" r="3"/><path d="M14 10c3.31 0 6 1.79 6 4v2h-6v-2c0-1.48-1.21-2.77-3-3.46.88-.35 1.91-.54 3-.54m-8 0c3.31 0 6 1.79 6 4v2H0v-2c0-2.21 2.69-4 6-4"/>', Bf = Dy, mx = Py, Ff = {
  ltr: By,
  shouldFlip: !0
}, Nf = {
  ltr: Fy,
  shouldFlip: !0
}, Xu = {
  ltr: Ny,
  shouldFlip: !0
}, Mf = My, Uf = Uy, If = Iy, px = Ry, hx = zy, ds = Oy, fx = jy, Ku = Hy, Yu = qy, xu = Gy, wx = Wy, vx = {
  ltr: Xy,
  shouldFlip: !0
}, _x = {
  ltr: Ky,
  shouldFlip: !0
}, Sx = Yy, yx = {
  langCodeMap: {
    ar: Pf
  },
  default: Qy
}, xx = {
  langCodeMap: {
    ar: Pf
  },
  default: Jy
}, Rf = Zy, Ba = {
  ltr: ex,
  shouldFlip: !0
}, Cx = tx, bx = nx, gs = {
  ltr: ox,
  shouldFlip: !0
}, Qu = {
  ltr: sx,
  shouldFlip: !0
}, kx = {
  ltr: ax,
  shouldFlip: !0
}, zf = ix, $x = rx, Cu = lx, Vx = cx, Ex = ux, Of = dx, Ju = {
  ltr: gx,
  shouldFlip: !0
}, Lx = {
  [an]: Of,
  [rn]: Sx,
  [ee]: Xu
}, Tx = {
  [ee]: _x,
  [Be]: Cx
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
    return Lx[this.provider] || null;
  }
  get expandableIcon() {
    return Tx[this.provider] || this.icon;
  }
}
const xs = window.Vue.computed, { topics: Jd, regions: Zd } = mw.loader.require(
  "ext.cx.articlefilters"
), Ax = (e) => new ya({
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
}), $o = () => {
  const e = he(), { currentSuggestionFilters: t, setFilterURLParams: n } = P(), { featuredCollection: o, featuredCollectionFetched: s } = Wt(), {
    validateFilters: a,
    filtersValidatorError: r,
    isDefaultFilter: l,
    isPopularFilter: c,
    isEqualFilter: u
  } = Nu(), i = new bt({
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
  }), { pageCollections: m, pageCollectionGroups: p, pageCollectionGroupsFetched: h } = Er(), f = xs(() => {
    const N = new ya({
      id: We,
      type: We,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [i, d]
    });
    return Object.keys(p.value).length > 1 && N.filters.push(g), N;
  }), w = () => {
    const N = de({}, p.value);
    delete N.ungrouped;
    const R = [];
    for (const X in N) {
      const re = N[X].map(
        (ke) => new bt({
          id: ke.name,
          label: ke.name,
          type: ee
        })
      ), xe = new bt({
        id: X,
        label: X,
        type: ee,
        subFilters: re
      });
      R.push(xe);
    }
    const G = (p.value.ungrouped || []).map(
      (X) => new bt({
        id: X.name,
        label: X.name,
        type: ee
      })
    );
    return [...R, ...G];
  }, v = xs(
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
    filters: Zd.map(
      (N) => new bt({
        id: N.id,
        label: N.label,
        type: Be,
        subFilters: N.countries.map(
          (R) => new bt({
            id: R.id,
            label: R.label,
            type: Be
          })
        )
      })
    )
  }), b = xs(() => {
    const N = [
      f.value,
      ...Jd.map(Ax),
      y
    ];
    return v.value.filters.length && N.splice(1, 0, v.value), N;
  }), _ = xs(
    () => !h.value || !s.value
  ), k = xs(
    () => {
      var N, R;
      return new bt({
        id: (N = o.value) == null ? void 0 : N.name,
        label: (R = o.value) == null ? void 0 : R.name,
        type: ee
      });
    }
  ), L = () => {
    if (_.value)
      return [];
    const N = C(), R = [];
    return o.value && R.push(k.value), !l(N) && !c(N) && !u(N, k.value) && R.push(N), R.push(i, d), R;
  }, M = (N) => {
    n(N.type, N.id);
  }, C = () => t.value.type === Gt ? new bt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : b.value.flatMap((N) => N.filters).flatMap((N) => [N, ...N.subFilters || []]).find(D), D = (N) => u(N, t.value);
  return {
    allFilters: b,
    getFiltersSummary: L,
    selectFilter: M,
    isFilterSelected: D,
    getArticleTopics: (N) => {
      const G = Jd.flatMap((X) => X.topics).find((X) => X.topicId === N);
      return G ? G.articletopics : [];
    },
    waitingForPageCollectionsFetch: _,
    findSelectedFilter: C,
    validateURLFilterWithCollections: () => {
      if (!h.value)
        return;
      const N = a(
        {
          type: t.value.type,
          id: t.value.id
        },
        m.value
      );
      n(N.type, N.id), r.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (N) => {
      const R = Zd.find((G) => G.id === N);
      return R ? R.countries.map((G) => G.id) : [N];
    },
    setFeaturedCollectionFilterIfNeeded: () => {
      if (!l(t.value))
        return;
      const N = a(
        k.value,
        m.value
      );
      M(N);
    }
  };
}, Dx = window.Vuex.useStore, Px = () => {
  const e = Dx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = us(), { getArticleTopics: l } = $o(), { featuredCollection: c, featuredCollectionPromise: u } = Wt();
  return {
    fetchPageSuggestionsByTopics: (g) => x(void 0, null, function* () {
      var w;
      yield u.value;
      const m = o.value.id, p = {
        id: m,
        type: tt
      }, h = l(m);
      let f = yield ue.fetchPageSuggestionsByTopics({
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
        type: tt
      }, h = l(m), f = [];
      return yield bo(() => x(void 0, null, function* () {
        var b;
        const w = yield ue.fetchSectionSuggestionsByTopics({
          sourceLanguage: t.value,
          targetLanguage: n.value,
          topics: h,
          featuredCollection: (b = c.value) == null ? void 0 : b.name
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
}, Bx = window.Vuex.useStore, Fx = () => {
  const e = Bx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = us(), { getCountries: l } = $o(), { featuredCollection: c, featuredCollectionPromise: u } = Wt();
  return {
    fetchPageSuggestionsByCountries: (g) => x(void 0, null, function* () {
      var p;
      yield u.value;
      let m = yield ue.fetchPageSuggestionsByCountries({
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
      return yield bo(() => x(void 0, null, function* () {
        var w;
        const p = yield ue.fetchSectionSuggestionsByCountries({
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
}, Nx = window.Vuex.useStore, Mx = () => {
  const e = Nx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = us();
  return {
    fetchPageSuggestionsBySeed: (u) => x(void 0, null, function* () {
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
    fetchSectionSuggestionsBySeed: (u) => x(void 0, null, function* () {
      const i = [], d = o.value.id;
      return yield bo(() => x(void 0, null, function* () {
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
}, Ux = () => {
  const { currentSuggestionFilters: e } = P(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = Sy(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = Ay(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = Px(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: c
  } = Fx(), {
    fetchPageSuggestionsByCollections: u,
    fetchSectionSuggestionsByCollections: i
  } = Df(), { fetchPageSuggestionsBySeed: d, fetchSectionSuggestionsBySeed: g } = Mx(), m = {
    [an]: t,
    [rn]: o,
    [ee]: u,
    [tt]: a,
    [Be]: l,
    [Gt]: d
  }, p = {
    [an]: n,
    [rn]: s,
    [ee]: i,
    [tt]: r,
    [Be]: c,
    [Gt]: g
  }, h = (v) => v.type === We ? v.id : v.type;
  return {
    getCurrentPageSuggestionProvider: () => m[h(e.value)],
    getCurrentSectionSuggestionProvider: () => p[h(e.value)]
  };
}, Zu = () => {
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
      return yield ue.fetchPageCollectionMembership(
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
}, Tr = () => {
  const { inFeaturedCollection: e } = Zu(), t = (s) => {
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
          const b = v[y], _ = b.map((L) => r(L)), k = e(
            null,
            y,
            _,
            w.value.name
          );
          d.push({ promise: k, items: b });
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
}, Ix = window.Vuex.useStore, ed = () => {
  const e = Ix(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Vr(), { sourceLanguageURLParameter: o } = P(), s = cs(), { addFeaturedCollectionFlag: a } = Tr(), { featuredCollection: r } = Wt(), { findSelectedFilter: l } = $o(), c = () => {
    var w;
    const f = l();
    return (f == null ? void 0 : f.id) === ((w = r.value) == null ? void 0 : w.name);
  }, u = () => {
    const f = t(), w = e.state.suggestions.maxSuggestionsPerSlice;
    return w - f.length % w;
  }, i = () => {
    const f = n(), w = e.state.suggestions.maxSuggestionsPerSlice;
    return w - f.length % w;
  }, {
    getCurrentPageSuggestionProvider: d,
    getCurrentSectionSuggestionProvider: g
  } = Ux(), m = (f) => {
    try {
      const w = f.map((v) => v.sourceTitle);
      if (w.length)
        return s(o.value, w);
    } catch (w) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => x(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const f = u(), v = yield g()(
        f
      );
      !c() && v.length > 0 && (yield a(v, {
        titleGetter: (y) => y.sourceTitle
      })), v.forEach(
        (y) => e.commit("suggestions/addSectionSuggestion", y)
      ), m(v), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => x(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const f = i(), v = yield d()(
        f
      );
      !c() && v.length > 0 && (yield a(v, {
        titleGetter: (y) => y.sourceTitle
      })), v.forEach(
        (y) => e.commit("suggestions/addPageSuggestion", y)
      ), m(v), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, Rx = window.Vuex.useStore, jf = () => {
  const e = Rx();
  return (t) => x(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ue.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, zx = window.Vuex.useStore, Hf = () => {
  const e = zx(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = ed(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Vr(), { targetLanguageURLParameter: a } = P(), r = jf();
  return () => x(void 0, null, function* () {
    const l = s(0), c = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, i = l.length === u, d = c.length === u;
    i && d || (yield r(a.value), t(), n());
  });
}, Ox = window.Vuex.useStore, ll = /* @__PURE__ */ new Map(), Ar = () => {
  const e = Ox(), t = cs();
  return (n, o, s) => x(void 0, null, function* () {
    const a = `${n}:${o}:${s}`;
    if (ll.has(a))
      return ll.get(a);
    const l = (() => x(void 0, null, function* () {
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
            return new oo({
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
    return ll.set(a, l), l;
  });
}, eg = window.Vue.computed, jx = window.Vuex.useStore, cn = () => {
  const e = jx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = P(), s = eg(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = eg(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, c) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(c)
  };
}, qf = window.Vuex.useStore, { setLanguageURLParams: Hx } = P(), td = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), Hx(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, Gf = () => {
  const e = qf(), t = Hf();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Fe(e);
    n === o && (n = a.value, o = s.value), td(e, n, o), t();
  };
}, qx = () => {
  const e = qf(), t = Ar(), { currentLanguageTitleGroup: n, targetPageExists: o } = cn(), s = cs();
  return (a, r) => x(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      setPageURLParam: u,
      clearSectionURLParameter: i
    } = P();
    a === r && (a = c.value, r = l.value);
    const d = n.value.getTitleForLanguage(a);
    td(e, a, r), u(d), o.value ? (i(), yield t(
      l.value,
      c.value,
      d
    )) : yield s(l.value, [d]);
  });
}, Gx = window.Vuex.useStore, Wx = window.Vue.ref, tg = Wx(!1), Wf = () => {
  const e = Gx(), { supportedLanguageCodes: t, fetchSupportedLanguageCodes: n } = Aa(), { sourceLanguageURLParameter: o, targetLanguageURLParameter: s } = P(), a = () => {
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
  return { initializeApplicationLanguages: () => x(void 0, null, function* () {
    yield n();
    const { sourceLanguage: l, targetLanguage: c } = a();
    td(e, l, c), tg.value = !0;
  }), applicationLanguagesInitialized: tg };
};
const Xx = window.Vue.resolveDynamicComponent, ng = window.Vue.openBlock, og = window.Vue.createBlock, Kx = window.Vue.Transition, Cs = window.Vue.withCtx, bs = window.Vue.createVNode, Yx = window.Vue.resolveComponent, cl = window.Vue.unref, Qx = window.Vuex.useStore, sg = window.Vue.computed, Jx = window.Vue.onMounted, Zx = window.Vue.inject, eC = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = P(), { initializeApplicationLanguages: n } = Wf();
    t(), n();
    const o = Zx("breakpoints"), s = sg(() => o.value.mobile), a = Qx(), r = sg(
      () => a.state.application.autoSavePending
    );
    return Jx(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && sf.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((c) => {
          c instanceof rs && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, c) => {
      const u = Yx("router-view");
      return ng(), og(cl(a0), { id: "contenttranslation" }, {
        default: Cs(() => [
          bs(cl(U), { class: "cx-container" }, {
            default: Cs(() => [
              bs(cl(V), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: Cs(() => [
                  bs(u, null, {
                    default: Cs(({ Component: i, route: d }) => [
                      bs(Kx, {
                        name: s.value ? d.meta.transitionName : ""
                      }, {
                        default: Cs(() => [
                          (ng(), og(Xx(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      bs(S1)
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
}, tC = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, nC = {
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
class Xf {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Xf(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const ag = (e) => {
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
class oC {
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
    const t = ag((s = this.user) == null ? void 0 : s.content), n = ag((a = this.mt) == null ? void 0 : a.content);
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
class nd extends Bu {
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
const Dr = mw.user.isAnon() ? void 0 : "user", Kf = (e) => {
  if (e === "assertuserfailed")
    throw new rs();
};
function Yf(e, t = null) {
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
        (c) => new yr(Ye(de({}, c), { status: e }))
      ) : r = a.map(
        (c) => new nd(Ye(de({}, c), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const c = yield Yf(
          e,
          s.continue.offset
        );
        r = r.concat(c);
      }
      return r;
    }));
  });
}
function sC(e) {
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
      (a) => new oC(a)
    );
  });
}
function aC(e, t, n, o, s) {
  return x(this, null, function* () {
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
const iC = (e, t, n) => {
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
}, rC = ({
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
    assert: Dr,
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
    Kf(h);
    let w;
    return f = f || {}, f.exception ? w = f.exception.message : f.error ? w = f.error.info : w = "Unknown error", {
      publishFeedbackMessage: new so({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, lC = ({
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
    assert: Dr,
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
    Kf(m);
    let h;
    return p.exception ? (h = p.exception.message, mw.cx.eventlogging.stats.saveFailure(!0)) : p.error ? (h = p.error.info, p.error.code && p.error.code.indexOf("internal_api_error") === 0 && mw.cx.eventlogging.stats.saveFailure(!0)) : (h = "Unknown error", mw.cx.eventlogging.stats.saveFailure(!0)), new so({ text: h, status: "error" });
  });
}, cC = (e) => {
  const t = {
    assert: Dr,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, uC = () => {
  const e = {
    assert: Dr,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new nd(n.cxcheckunreviewed.translation)
  );
}, dC = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, gC = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, mC = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), $t = {
  fetchTranslations: Yf,
  fetchTranslationUnits: sC,
  fetchSegmentTranslation: aC,
  parseTemplateWikitext: iC,
  publishTranslation: rC,
  saveTranslation: lC,
  deleteTranslation: dC,
  fetchTranslatorStats: mC,
  deleteCXTranslation: gC,
  splitTranslation: cC,
  checkUnreviewedTranslations: uC
};
function pC(t) {
  return x(this, arguments, function* ({ commit: e }) {
    const n = yield $t.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const hC = {
  fetchTranslatorStats: pC
}, fC = {
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
}, wC = {
  namespaced: !0,
  state: tC,
  getters: nC,
  actions: hC,
  mutations: fC
}, vC = {
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
}, _C = {
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
}, SC = {
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
}, yC = {
  namespaced: !0,
  state: vC,
  getters: _C,
  actions: {},
  mutations: SC
}, xC = {
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
}, CC = {
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
function bC(o) {
  return x(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield ko.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const kC = { fetchNearbyPages: bC }, $C = {
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
}, VC = {
  namespaced: !0,
  state: xC,
  getters: CC,
  actions: kC,
  mutations: $C
}, EC = {
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
}, LC = {
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
}, TC = {
  namespaced: !0,
  state: EC,
  mutations: LC
}, AC = window.Vuex.createStore, DC = AC({
  modules: { translator: wC, suggestions: yC, mediawiki: VC, application: TC }
});
function PC() {
  return Qf().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Qf() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const BC = typeof Proxy == "function", FC = "devtools-plugin:setup", NC = "plugin:settings:set";
let Do, bu;
function MC() {
  var e;
  return Do !== void 0 || (typeof window != "undefined" && window.performance ? (Do = !0, bu = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Do = !0, bu = global.perf_hooks.performance) : Do = !1), Do;
}
function UC() {
  return MC() ? bu.now() : Date.now();
}
class IC {
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
        return UC();
      }
    }, n && n.on(NC, (r, l) => {
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
function RC(e, t) {
  const n = e, o = Qf(), s = PC(), a = BC && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(FC, e, t);
  else {
    const r = a ? new IC(n, s) : null;
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
const Jf = window.Vue.getCurrentInstance, as = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const nn = window.Vue.computed, xa = window.Vue.unref, zC = window.Vue.watchEffect, Zf = window.Vue.defineComponent, OC = window.Vue.reactive, ew = window.Vue.h, ul = window.Vue.provide, jC = window.Vue.ref, tw = window.Vue.watch, HC = window.Vue.shallowRef, qC = window.Vue.shallowReactive, GC = window.Vue.nextTick, Dn = typeof window != "undefined";
function WC(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const te = Object.assign;
function dl(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = pt(s) ? s.map(e) : e(s);
  }
  return n;
}
const Ca = () => {
}, pt = Array.isArray;
function Y(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const XC = /\/$/, KC = (e) => e.replace(XC, "");
function gl(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return l < c && l >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), a = t.slice(c + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = JC(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function YC(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ig(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function rg(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && ao(t.matched[o], n.matched[s]) && nw(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function ao(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function nw(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!QC(e[n], t[n]))
      return !1;
  return !0;
}
function QC(e, t) {
  return pt(e) ? lg(e, t) : pt(t) ? lg(t, e) : e === t;
}
function lg(e, t) {
  return pt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function JC(e, t) {
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
function ZC(e) {
  if (!e)
    if (Dn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), KC(e);
}
const eb = /^[^#]+#/;
function tb(e, t) {
  return e.replace(eb, "#") + t;
}
function nb(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Pr = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function ob(e) {
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
    t = nb(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function cg(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ku = /* @__PURE__ */ new Map();
function sb(e, t) {
  ku.set(e, t);
}
function ab(e) {
  const t = ku.get(e);
  return ku.delete(e), t;
}
let ib = () => location.protocol + "//" + location.host;
function ow(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), ig(c, "");
  }
  return ig(n, e) + o + s;
}
function rb(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: g }) => {
    const m = ow(e, location), p = n.value, h = t.value;
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
    g.state && g.replaceState(te({}, g.state, { scroll: Pr() }), "");
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
function ug(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Pr() : null
  };
}
function lb(e) {
  const { history: t, location: n } = window, o = {
    value: ow(e, n)
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
    const d = e.indexOf("#"), g = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : ib() + e + c;
    try {
      t[i ? "replaceState" : "pushState"](u, "", g), s.value = u;
    } catch (m) {
      ({}).NODE_ENV !== "production" ? Y("Error with push/replace State", m) : console.error(m), n[i ? "replace" : "assign"](g);
    }
  }
  function r(c, u) {
    const i = te({}, t.state, ug(
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
        scroll: Pr()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && Y(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const d = te({}, ug(o.value, c, null), { position: i.position + 1 }, u);
    a(c, d, !1), o.value = c;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function cb(e) {
  e = ZC(e);
  const t = lb(e), n = rb(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = te({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: tb.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function ub(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Y(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), cb(e);
}
function db(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function sw(e) {
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
}, $u = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var dg;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(dg || (dg = {}));
const gb = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${pb(t)}" via a navigation guard.`;
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
function is(e, t) {
  return {}.NODE_ENV !== "production" ? te(new Error(gb[e](t)), {
    type: e,
    [$u]: !0
  }, t) : te(new Error(), {
    type: e,
    [$u]: !0
  }, t);
}
function dn(e, t) {
  return e instanceof Error && $u in e && (t == null || !!(e.type & t));
}
const mb = ["params", "query", "hash"];
function pb(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of mb)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const gg = "[^/]+?", hb = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, fb = /[.+*?^${}()[\]/\\]/g;
function wb(e, t) {
  const n = te({}, hb, t), o = [];
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
        d || (s += "/"), s += g.value.replace(fb, "\\$&"), m += 40;
      else if (g.type === 1) {
        const { value: p, repeatable: h, optional: f, regexp: w } = g;
        a.push({
          name: p,
          repeatable: h,
          optional: f
        });
        const v = w || gg;
        if (v !== gg) {
          m += 10;
          try {
            new RegExp(`(${v})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${p}" (${v}): ` + b.message);
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
function vb(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function _b(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = vb(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (mg(o))
      return 1;
    if (mg(s))
      return -1;
  }
  return s.length - o.length;
}
function mg(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Sb = {
  type: 0,
  value: ""
}, yb = /[a-zA-Z0-9_]/;
function xb(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Sb]];
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
        c === "(" ? n = 2 : yb.test(c) ? g() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
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
function Cb(e, t, n) {
  const o = wb(xb(e.path), n);
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
function bb(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = fg({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, d, g) {
    const m = !g, p = kb(i);
    ({}).NODE_ENV !== "production" && Lb(p, d), p.aliasOf = g && g.record;
    const h = fg(t, i), f = [
      p
    ];
    if ("alias" in i) {
      const y = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const b of y)
        f.push(te({}, p, {
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
    let w, v;
    for (const y of f) {
      const { path: b } = y;
      if (d && b[0] !== "/") {
        const _ = d.record.path, k = _[_.length - 1] === "/" ? "" : "/";
        y.path = d.record.path + (b && k + b);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (w = Cb(y, d, h), {}.NODE_ENV !== "production" && d && b[0] === "/" && Tb(w, d), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && Eb(g, w)) : (v = v || w, v !== w && v.alias.push(w), m && i.name && !hg(w) && r(i.name)), p.children) {
        const _ = p.children;
        for (let k = 0; k < _.length; k++)
          a(_[k], w, g && g.children[k]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && c(w);
    }
    return v ? () => {
      r(v);
    } : Ca;
  }
  function r(i) {
    if (sw(i)) {
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
    for (; d < n.length && _b(i, n[d]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[d].record.path || !aw(i, n[d])); )
      d++;
    n.splice(d, 0, i), i.record.name && !hg(i) && o.set(i.record.name, i);
  }
  function u(i, d) {
    let g, m = {}, p, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw is(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const v = Object.keys(i.params || {}).filter((y) => !g.keys.find((b) => b.name === y));
        v.length && Y(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, m = te(
        // paramsFromLocation is a new object
        pg(
          d.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((v) => !v.optional).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && pg(i.params, g.keys.map((v) => v.name))
      ), p = g.stringify(m);
    } else if ("path" in i)
      p = i.path, {}.NODE_ENV !== "production" && !p.startsWith("/") && Y(`The Matcher cannot resolve relative paths but received "${p}". Unless you directly called \`matcher.resolve("${p}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((v) => v.re.test(p)), g && (m = g.parse(p), h = g.record.name);
    else {
      if (g = d.name ? o.get(d.name) : n.find((v) => v.re.test(d.path)), !g)
        throw is(1, {
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
      meta: Vb(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: u, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function pg(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function kb(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: $b(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function $b(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function hg(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Vb(e) {
  return e.reduce((t, n) => te(t, n.meta), {});
}
function fg(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Vu(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Eb(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Vu.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Vu.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Lb(e, t) {
  t && t.record.name && !e.name && !e.path && Y(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Tb(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Vu.bind(null, n)))
      return Y(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function aw(e, t) {
  return t.children.some((n) => n === e || aw(e, n));
}
const iw = /#/g, Ab = /&/g, Db = /\//g, Pb = /=/g, Bb = /\?/g, rw = /\+/g, Fb = /%5B/g, Nb = /%5D/g, lw = /%5E/g, Mb = /%60/g, cw = /%7B/g, Ub = /%7C/g, uw = /%7D/g, Ib = /%20/g;
function od(e) {
  return encodeURI("" + e).replace(Ub, "|").replace(Fb, "[").replace(Nb, "]");
}
function Rb(e) {
  return od(e).replace(cw, "{").replace(uw, "}").replace(lw, "^");
}
function Eu(e) {
  return od(e).replace(rw, "%2B").replace(Ib, "+").replace(iw, "%23").replace(Ab, "%26").replace(Mb, "`").replace(cw, "{").replace(uw, "}").replace(lw, "^");
}
function zb(e) {
  return Eu(e).replace(Pb, "%3D");
}
function Ob(e) {
  return od(e).replace(iw, "%23").replace(Bb, "%3F");
}
function jb(e) {
  return e == null ? "" : Ob(e).replace(Db, "%2F");
}
function Va(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && Y(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Hb(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(rw, " "), r = a.indexOf("="), l = Va(r < 0 ? a : a.slice(0, r)), c = r < 0 ? null : Va(a.slice(r + 1));
    if (l in t) {
      let u = t[l];
      pt(u) || (u = t[l] = [u]), u.push(c);
    } else
      t[l] = c;
  }
  return t;
}
function wg(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = zb(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (pt(o) ? o.map((a) => a && Eu(a)) : [o && Eu(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function qb(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = pt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const Gb = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), vg = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Br = Symbol({}.NODE_ENV !== "production" ? "router" : ""), dw = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Lu = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function ks() {
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
      d === !1 ? l(is(4, {
        from: n,
        to: t
      })) : d instanceof Error ? l(d) : db(d) ? l(is(2, {
        from: t,
        to: d
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof d == "function" && a.push(d), r());
    }, u = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? Wb(c, t, n) : c);
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
function Wb(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && Y(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function ml(e, t, n, o) {
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
        if (Xb(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(to(u, n, o, a, r));
        } else {
          let c = l();
          ({}).NODE_ENV !== "production" && !("catch" in c) && (Y(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), s.push(() => c.then((u) => {
            if (!u)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = WC(u) ? u.default : u;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && to(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function Xb(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function _g(e) {
  const t = as(Br), n = as(dw), o = nn(() => t.resolve(xa(e.to))), s = nn(() => {
    const { matched: c } = o.value, { length: u } = c, i = c[u - 1], d = n.matched;
    if (!i || !d.length)
      return -1;
    const g = d.findIndex(ao.bind(null, i));
    if (g > -1)
      return g;
    const m = Sg(c[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Sg(i) === m && // avoid comparing the child with its parent
      d[d.length - 1].path !== m ? d.findIndex(ao.bind(null, c[u - 2])) : g
    );
  }), a = nn(() => s.value > -1 && Jb(n.params, o.value.params)), r = nn(() => s.value > -1 && s.value === n.matched.length - 1 && nw(n.params, o.value.params));
  function l(c = {}) {
    return Qb(c) ? t[xa(e.replace) ? "replace" : "push"](
      xa(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Ca) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && Dn) {
    const c = Jf();
    if (c) {
      const u = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(u), zC(() => {
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
const Kb = /* @__PURE__ */ Zf({
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
  useLink: _g,
  setup(e, { slots: t }) {
    const n = OC(_g(e)), { options: o } = as(Br), s = nn(() => ({
      [yg(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [yg(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : ew("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), Yb = Kb;
function Qb(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Jb(e, t) {
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
function Sg(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const yg = (e, t, n) => e != null ? e : t != null ? t : n, Zb = /* @__PURE__ */ Zf({
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
    ({}).NODE_ENV !== "production" && tk();
    const o = as(Lu), s = nn(() => e.route || o.value), a = as(vg, 0), r = nn(() => {
      let u = xa(a);
      const { matched: i } = s.value;
      let d;
      for (; (d = i[u]) && !d.components; )
        u++;
      return u;
    }), l = nn(() => s.value.matched[r.value]);
    ul(vg, nn(() => r.value + 1)), ul(Gb, l), ul(Lu, s);
    const c = jC();
    return tw(() => [c.value, l.value, e.name], ([u, i, d], [g, m, p]) => {
      i && (i.instances[d] = u, m && m !== i && u && u === g && (i.leaveGuards.size || (i.leaveGuards = m.leaveGuards), i.updateGuards.size || (i.updateGuards = m.updateGuards))), u && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !ao(i, m) || !g) && (i.enterCallbacks[d] || []).forEach((h) => h(u));
    }, { flush: "post" }), () => {
      const u = s.value, i = e.name, d = l.value, g = d && d.components[i];
      if (!g)
        return xg(n.default, { Component: g, route: u });
      const m = d.props[i], p = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null, f = ew(g, te({}, p, t, {
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
        xg(n.default, { Component: f, route: u }) || f
      );
    };
  }
});
function xg(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const ek = Zb;
function tk() {
  const e = Jf(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function $s(e, t) {
  const n = te({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => uk(o, ["instances", "children", "aliasOf"]))
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
let nk = 0;
function ok(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = nk++;
  RC({
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
        value: $s(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const g = d.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: gw
        });
      }
      pt(d.__vrl_devtools) && (d.__devtoolsApi = s, d.__vrl_devtools.forEach((g) => {
        let m = fw, p = "";
        g.isExactActive ? (m = hw, p = "This is exactly active") : g.isActive && (m = pw, p = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: p,
          backgroundColor: m
        });
      }));
    }), tw(t.currentRoute, () => {
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
        guard: ei("beforeEach"),
        from: $s(d, "Current Location during this navigation"),
        to: $s(i, "Target location")
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
      }, m.status = ei("❌")) : m.status = ei("✅"), m.from = $s(d, "Current Location during this navigation"), m.to = $s(i, "Target location"), s.addTimelineEvent({
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
      d.forEach(_w), i.filter && (d = d.filter((g) => (
        // save matches state based on the payload
        Tu(g, i.filter.toLowerCase())
      ))), d.forEach((g) => vw(g, t.currentRoute.value)), i.rootNodes = d.map(ww);
    }
    let u;
    s.on.getInspectorTree((i) => {
      u = i, i.app === e && i.inspectorId === l && c();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((m) => m.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: ak(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function sk(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function ak(e) {
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
        display: e.keys.map((o) => `${o.name}${sk(o)}`).join(" "),
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
const gw = 15485081, pw = 2450411, hw = 8702998, ik = 2282478, fw = 16486972, rk = 6710886;
function ww(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: ik
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: fw
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: gw
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: hw
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: pw
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: rk
  });
  let o = n.__vd_id;
  return o == null && (o = String(lk++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(ww)
  };
}
let lk = 0;
const ck = /^\/(.*)\/([a-z]*)$/;
function vw(e, t) {
  const n = t.matched.length && ao(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => ao(o, e.record))), e.children.forEach((o) => vw(o, t));
}
function _w(e) {
  e.__vd_match = !1, e.children.forEach(_w);
}
function Tu(e, t) {
  const n = String(e.re).match(ck);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Tu(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = Va(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Tu(r, t));
}
function uk(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function dk(e) {
  const t = bb(e.routes, e), n = e.parseQuery || Hb, o = e.stringifyQuery || wg, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = ks(), r = ks(), l = ks(), c = HC(Nn);
  let u = Nn;
  Dn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = dl.bind(null, (S) => "" + S), d = dl.bind(null, jb), g = (
    // @ts-expect-error: intentionally avoid the type check
    dl.bind(null, Va)
  );
  function m(S, E) {
    let T, F;
    return sw(S) ? (T = t.getRecordMatcher(S), F = E) : F = S, t.addRoute(F, T);
  }
  function p(S) {
    const E = t.getRecordMatcher(S);
    E ? t.removeRoute(E) : {}.NODE_ENV !== "production" && Y(`Cannot remove non-existent route "${String(S)}"`);
  }
  function h() {
    return t.getRoutes().map((S) => S.record);
  }
  function f(S) {
    return !!t.getRecordMatcher(S);
  }
  function w(S, E) {
    if (E = te({}, E || c.value), typeof S == "string") {
      const H = gl(n, S, E.path), ae = t.resolve({ path: H.path }, E), st = s.createHref(H.fullPath);
      return {}.NODE_ENV !== "production" && (st.startsWith("//") ? Y(`Location "${S}" resolved to "${st}". A resolved location cannot start with multiple slashes.`) : ae.matched.length || Y(`No match found for location with path "${S}"`)), te(H, ae, {
        params: g(ae.params),
        hash: Va(H.hash),
        redirectedFrom: void 0,
        href: st
      });
    }
    let T;
    if ("path" in S)
      ({}).NODE_ENV !== "production" && "params" in S && !("name" in S) && // @ts-expect-error: the type is never
      Object.keys(S.params).length && Y(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), T = te({}, S, {
        path: gl(n, S.path, E.path).path
      });
    else {
      const H = te({}, S.params);
      for (const ae in H)
        H[ae] == null && delete H[ae];
      T = te({}, S, {
        params: d(H)
      }), E.params = d(E.params);
    }
    const F = t.resolve(T, E), K = S.hash || "";
    ({}).NODE_ENV !== "production" && K && !K.startsWith("#") && Y(`A \`hash\` should always start with the character "#". Replace "${K}" with "#${K}".`), F.params = i(g(F.params));
    const fe = YC(o, te({}, S, {
      hash: Rb(K),
      path: F.path
    })), W = s.createHref(fe);
    return {}.NODE_ENV !== "production" && (W.startsWith("//") ? Y(`Location "${S}" resolved to "${W}". A resolved location cannot start with multiple slashes.`) : F.matched.length || Y(`No match found for location with path "${"path" in S ? S.path : S}"`)), te({
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
        o === wg ? qb(S.query) : S.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: W
    });
  }
  function v(S) {
    return typeof S == "string" ? gl(n, S, c.value.path) : te({}, S);
  }
  function y(S, E) {
    if (u !== S)
      return is(8, {
        from: E,
        to: S
      });
  }
  function b(S) {
    return L(S);
  }
  function _(S) {
    return b(te(v(S), { replace: !0 }));
  }
  function k(S) {
    const E = S.matched[S.matched.length - 1];
    if (E && E.redirect) {
      const { redirect: T } = E;
      let F = typeof T == "function" ? T(S) : T;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = v(F) : (
        // force empty params
        { path: F }
      ), F.params = {}), {}.NODE_ENV !== "production" && !("path" in F) && !("name" in F))
        throw Y(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return te({
        query: S.query,
        hash: S.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in F ? {} : S.params
      }, F);
    }
  }
  function L(S, E) {
    const T = u = w(S), F = c.value, K = S.state, fe = S.force, W = S.replace === !0, H = k(T);
    if (H)
      return L(
        te(v(H), {
          state: typeof H == "object" ? te({}, K, H.state) : K,
          force: fe,
          replace: W
        }),
        // keep original redirectedFrom if it exists
        E || T
      );
    const ae = T;
    ae.redirectedFrom = E;
    let st;
    return !fe && rg(o, F, T) && (st = is(16, { to: ae, from: F }), ke(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (st ? Promise.resolve(st) : D(ae, F)).catch((Ve) => dn(Ve) ? (
      // navigation redirects still mark the router as ready
      dn(
        Ve,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? Ve : xe(Ve)
    ) : (
      // reject any unknown error
      X(Ve, ae, F)
    )).then((Ve) => {
      if (Ve) {
        if (dn(
          Ve,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          rg(o, w(Ve.to), ae) && // and we have done it a couple of times
          E && // @ts-expect-error: added only in dev
          (E._count = E._count ? (
            // @ts-expect-error
            E._count + 1
          ) : 1) > 30 ? (Y(`Detected a possibly infinite redirection in a navigation guard when going from "${F.fullPath}" to "${ae.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : L(
            // keep options
            te({
              // preserve an existing replacement but allow the redirect to override it
              replace: W
            }, v(Ve.to), {
              state: typeof Ve.to == "object" ? te({}, K, Ve.to.state) : K,
              force: fe
            }),
            // preserve the original redirectedFrom if any
            E || ae
          );
      } else
        Ve = Q(ae, F, !0, W, K);
      return I(ae, F, Ve), Ve;
    });
  }
  function M(S, E) {
    const T = y(S, E);
    return T ? Promise.reject(T) : Promise.resolve();
  }
  function C(S) {
    const E = z.values().next().value;
    return E && typeof E.runWithContext == "function" ? E.runWithContext(S) : S();
  }
  function D(S, E) {
    let T;
    const [F, K, fe] = gk(S, E);
    T = ml(F.reverse(), "beforeRouteLeave", S, E);
    for (const H of F)
      H.leaveGuards.forEach((ae) => {
        T.push(to(ae, S, E));
      });
    const W = M.bind(null, S, E);
    return T.push(W), j(T).then(() => {
      T = [];
      for (const H of a.list())
        T.push(to(H, S, E));
      return T.push(W), j(T);
    }).then(() => {
      T = ml(K, "beforeRouteUpdate", S, E);
      for (const H of K)
        H.updateGuards.forEach((ae) => {
          T.push(to(ae, S, E));
        });
      return T.push(W), j(T);
    }).then(() => {
      T = [];
      for (const H of fe)
        if (H.beforeEnter)
          if (pt(H.beforeEnter))
            for (const ae of H.beforeEnter)
              T.push(to(ae, S, E));
          else
            T.push(to(H.beforeEnter, S, E));
      return T.push(W), j(T);
    }).then(() => (S.matched.forEach((H) => H.enterCallbacks = {}), T = ml(fe, "beforeRouteEnter", S, E), T.push(W), j(T))).then(() => {
      T = [];
      for (const H of r.list())
        T.push(to(H, S, E));
      return T.push(W), j(T);
    }).catch((H) => dn(
      H,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? H : Promise.reject(H));
  }
  function I(S, E, T) {
    l.list().forEach((F) => C(() => F(S, E, T)));
  }
  function Q(S, E, T, F, K) {
    const fe = y(S, E);
    if (fe)
      return fe;
    const W = E === Nn, H = Dn ? history.state : {};
    T && (F || W ? s.replace(S.fullPath, te({
      scroll: W && H && H.scroll
    }, K)) : s.push(S.fullPath, K)), c.value = S, ke(S, E, T, W), xe();
  }
  let se;
  function oe() {
    se || (se = s.listen((S, E, T) => {
      if (!B.listening)
        return;
      const F = w(S), K = k(F);
      if (K) {
        L(te(K, { replace: !0 }), F).catch(Ca);
        return;
      }
      u = F;
      const fe = c.value;
      Dn && sb(cg(fe.fullPath, T.delta), Pr()), D(F, fe).catch((W) => dn(
        W,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? W : dn(
        W,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (L(
        W.to,
        F
        // avoid an uncaught rejection, let push call triggerError
      ).then((H) => {
        dn(
          H,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !T.delta && T.type === $a.pop && s.go(-1, !1);
      }).catch(Ca), Promise.reject()) : (T.delta && s.go(-T.delta, !1), X(W, F, fe))).then((W) => {
        W = W || Q(
          // after navigation, all matched components are resolved
          F,
          fe,
          !1
        ), W && (T.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !dn(
          W,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-T.delta, !1) : T.type === $a.pop && dn(
          W,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), I(F, fe, W);
      }).catch(Ca);
    }));
  }
  let N = ks(), R = ks(), G;
  function X(S, E, T) {
    xe(S);
    const F = R.list();
    return F.length ? F.forEach((K) => K(S, E, T)) : ({}.NODE_ENV !== "production" && Y("uncaught error during route navigation:"), console.error(S)), Promise.reject(S);
  }
  function re() {
    return G && c.value !== Nn ? Promise.resolve() : new Promise((S, E) => {
      N.add([S, E]);
    });
  }
  function xe(S) {
    return G || (G = !S, oe(), N.list().forEach(([E, T]) => S ? T(S) : E()), N.reset()), S;
  }
  function ke(S, E, T, F) {
    const { scrollBehavior: K } = e;
    if (!Dn || !K)
      return Promise.resolve();
    const fe = !T && ab(cg(S.fullPath, 0)) || (F || !T) && history.state && history.state.scroll || null;
    return GC().then(() => K(S, E, fe)).then((W) => W && ob(W)).catch((W) => X(W, S, E));
  }
  const $e = (S) => s.go(S);
  let Ne;
  const z = /* @__PURE__ */ new Set(), B = {
    currentRoute: c,
    listening: !0,
    addRoute: m,
    removeRoute: p,
    hasRoute: f,
    getRoutes: h,
    resolve: w,
    options: e,
    push: b,
    replace: _,
    go: $e,
    back: () => $e(-1),
    forward: () => $e(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: R.add,
    isReady: re,
    install(S) {
      const E = this;
      S.component("RouterLink", Yb), S.component("RouterView", ek), S.config.globalProperties.$router = E, Object.defineProperty(S.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => xa(c)
      }), Dn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Ne && c.value === Nn && (Ne = !0, b(s.location).catch((K) => {
        ({}).NODE_ENV !== "production" && Y("Unexpected error when starting the router:", K);
      }));
      const T = {};
      for (const K in Nn)
        Object.defineProperty(T, K, {
          get: () => c.value[K],
          enumerable: !0
        });
      S.provide(Br, E), S.provide(dw, qC(T)), S.provide(Lu, c);
      const F = S.unmount;
      z.add(S), S.unmount = function() {
        z.delete(S), z.size < 1 && (u = Nn, se && se(), se = null, c.value = Nn, Ne = !1, G = !1), F();
      }, {}.NODE_ENV !== "production" && Dn && ok(S, E, t);
    }
  };
  function j(S) {
    return S.reduce((E, T) => E.then(() => C(T)), Promise.resolve());
  }
  return B;
}
function gk(e, t) {
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
  return as(Br);
}
const mk = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), u = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(u / (1e3 * 3600 * 24));
}, pk = (e) => {
  const t = mk(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const Dt = window.Vue.unref, Po = window.Vue.createVNode, gn = window.Vue.createElementVNode, Cg = window.Vue.renderSlot, bg = window.Vue.withModifiers, pl = window.Vue.toDisplayString, hl = window.Vue.withCtx, hk = window.Vue.openBlock, fk = window.Vue.createElementBlock, wk = window.Vue.createCommentVNode, vk = { class: "col shrink pe-4" }, _k = { class: "col" }, Sk = { class: "cx-translation__details column justify-between ma-0" }, yk = { class: "row ma-0" }, xk = { class: "col grow" }, Ck = { class: "col shrink ps-2" }, bk = ["dir", "textContent"], kk = ["dir", "textContent"], $k = ["textContent"], Vk = window.Vuex.useStore, Ek = window.Vue.computed, Sw = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Bu,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = Vk(), s = (l, c) => {
      const u = o.getters["mediawiki/getPage"](l, c);
      return u == null ? void 0 : u.thumbnail;
    }, a = he(), r = Ek(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, c = pk(n.translation.startTimestamp);
      return a.i18n(
        l[c.postfix],
        mw.language.convertNumber(c.value)
      );
    });
    return (l, c) => e.translation ? (hk(), fk("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: c[1] || (c[1] = bg((u) => l.$emit("click"), ["stop"]))
    }, [
      gn("div", vk, [
        Po(Dt(Pu), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      gn("div", _k, [
        gn("div", Sk, [
          gn("div", yk, [
            gn("div", xk, [
              Cg(l.$slots, "title")
            ]),
            gn("div", Ck, [
              Po(Dt(et), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: c[0] || (c[0] = bg((u) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Cg(l.$slots, "mid-content"),
          Po(Dt(U), { class: "cx-translation__footer ma-0" }, {
            default: hl(() => [
              Po(Dt(V), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: hl(() => [
                  gn("span", {
                    class: "mw-ui-autonym",
                    dir: Dt(O.getDir)(e.translation.sourceLanguage),
                    textContent: pl(Dt(O.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, bk),
                  Po(Dt(et), {
                    icon: Dt(A0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  gn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: Dt(O.getDir)(e.translation.targetLanguage),
                    textContent: pl(Dt(O.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, kk)
                ]),
                _: 1
              }),
              Po(Dt(V), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: hl(() => [
                  gn("span", {
                    textContent: pl(r.value)
                  }, null, 8, $k)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : wk("", !0);
  }
};
const kg = window.Vue.unref, Lk = window.Vue.toDisplayString, Tk = window.Vue.createTextVNode, Ak = window.Vue.withCtx, Dk = window.Vue.openBlock, Pk = window.Vue.createBlock, Bk = window.Codex.CdxInfoChip, Fr = {
  __name: "CommunityPriorityBadge",
  setup(e) {
    return (t, n) => (Dk(), Pk(kg(Bk), {
      icon: kg(Ju),
      class: "cx-community-priority-badge"
    }, {
      default: Ak(() => [
        Tk(Lk(t.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const co = window.Vue.unref, Fk = window.Vue.toDisplayString, Nk = window.Vue.normalizeClass, Mk = window.Vue.createElementVNode, ti = window.Vue.openBlock, Uk = window.Vue.createElementBlock, fl = window.Vue.createCommentVNode, ni = window.Vue.createVNode, Bo = window.Vue.withCtx, wl = window.Vue.createBlock, Ik = ["lang", "textContent"], Rk = ["lang", "innerHTML"], zk = window.Vue.computed, Ok = window.Vue.inject, jk = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: yr,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Ok("colors").gray200, s = zk(
      () => {
        var c;
        return ((c = t.translation.progress) == null ? void 0 : c.any) * 100 || 0;
      }
    ), a = nt(), { setTranslationURLParams: r } = P(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (c, u) => (ti(), wl(Sw, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": co(ef),
      onActionIconClicked: u[0] || (u[0] = (i) => c.$emit("delete-translation")),
      onClick: l
    }, {
      title: Bo(() => [
        Mk("h5", {
          class: Nk(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Fk(e.translation.sourceTitle)
        }, null, 10, Ik),
        e.translation.isLeadSectionTranslation ? fl("", !0) : (ti(), Uk("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, Rk))
      ]),
      "mid-content": Bo(() => [
        e.translation.progress ? (ti(), wl(co(U), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Bo(() => [
            ni(co(V), null, {
              default: Bo(() => [
                ni(co(of), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: co(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : fl("", !0),
        e.translation.inFeaturedCollection ? (ti(), wl(co(U), {
          key: 1,
          class: "ma-0 py-2"
        }, {
          default: Bo(() => [
            ni(co(V), { shrink: "" }, {
              default: Bo(() => [
                ni(Fr)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : fl("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, Hk = window.Vuex.useStore, yw = [], qk = (e, t, n) => yw.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), Gk = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  yw.push(o);
}, Wk = () => {
  const e = Hk();
  return (t, n, o) => x(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !qk(t, n, o) && (s = yield ue.fetchSectionSuggestion(
      t,
      o,
      n
    ), Gk(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, xw = window.Vue.ref, Cw = xw(null), Au = xw(null), Xk = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), Cw.value = e;
}, Kk = (e) => {
  Au.value = e;
}, Fa = () => {
  const e = nt(), t = Ar(), { setTranslationURLParams: n } = P();
  return (o, s, a, r, l = null, c = !0) => x(void 0, null, function* () {
    Xk(r), Kk(l);
    const u = yield t(
      s,
      a,
      o
    );
    n(u), c && e.push({ name: "sx-translation-confirmer" });
  });
};
const vl = window.Vue.withModifiers, $g = window.Vue.toDisplayString, Vg = window.Vue.createElementVNode, at = window.Vue.unref, mn = window.Vue.createVNode, Yk = window.Vue.createTextVNode, Vs = window.Vue.openBlock, Eg = window.Vue.createElementBlock, _l = window.Vue.createCommentVNode, Sl = window.Vue.createBlock, Mn = window.Vue.withCtx, Qk = ["lang", "href", "textContent"], Jk = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, Zk = {
  key: 2,
  class: "flex"
}, e8 = ["innerHTML"], yl = window.Vue.computed, Lg = window.Vue.ref, Tg = window.Codex.CdxButton, xl = window.Codex.CdxIcon, t8 = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: nd,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Lg(!0), o = Lg(null), s = yl(() => {
      var m;
      return (m = o.value) == null ? void 0 : m.missingSections;
    }), a = yl(
      () => s.value && Object.keys(s.value)[0]
    );
    Wk()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((m) => o.value = m).catch((m) => console.log(m)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = P(), c = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, u = Fa(), i = (m) => {
      u(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), m && l(m);
    }, d = mw.config.get("wgNamespaceIds"), g = yl(() => new mw.Title(t.translation.targetTitle).getNamespaceId() === d.user);
    return (m, p) => (Vs(), Sl(Sw, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: c
    }, {
      title: Mn(() => [
        Vg("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: p[0] || (p[0] = vl(() => {
          }, ["stop"])),
          textContent: $g(e.translation.sourceTitle)
        }, null, 8, Qk)
      ]),
      "mid-content": Mn(() => [
        mn(at(U), { class: "ma-0" }, {
          default: Mn(() => [
            mn(at(V), null, {
              default: Mn(() => [
                g.value ? (Vs(), Eg("div", Jk, [
                  mn(at(xl), {
                    icon: at(Of),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  Yk(" " + $g(m.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : _l("", !0),
                n.value ? (Vs(), Sl(at(mt), { key: 1 })) : s.value ? (Vs(), Eg("div", Zk, [
                  mn(at(Tg), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: p[1] || (p[1] = vl((h) => i(a.value), ["stop"]))
                  }, {
                    default: Mn(() => [
                      mn(at(xl), {
                        class: "me-1",
                        icon: at(Bf)
                      }, null, 8, ["icon"]),
                      Vg("span", { innerHTML: a.value }, null, 8, e8)
                    ]),
                    _: 1
                  }),
                  mn(at(Tg), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": m.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: p[2] || (p[2] = vl((h) => i(null), ["stop"]))
                  }, {
                    default: Mn(() => [
                      mn(at(xl), { icon: at(Yu) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : _l("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e.translation.inFeaturedCollection ? (Vs(), Sl(at(U), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Mn(() => [
            mn(at(V), { shrink: "" }, {
              default: Mn(() => [
                mn(Fr)
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : _l("", !0)
      ]),
      _: 1
    }, 8, ["translation"]));
  }
}, bw = "cx-translation-session-position-", kw = () => bw + mw.user.sessionId(), n8 = () => {
  const e = parseInt(
    mw.storage.get(kw())
  );
  return isNaN(e) ? 0 : e;
}, o8 = function(e) {
  const t = kw();
  mw.storage.set(t, e);
}, s8 = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(bw)).forEach((e) => mw.storage.remove(e));
}, a8 = () => {
  const e = n8();
  return e % 10 === 0 && s8(), o8(e + 1), e;
};
function i8(e) {
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
    content_translation_session_position: a8()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : kf(r).then((c) => {
    mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: c,
        user_global_edit_count_bucket: IS(c)
      })
    );
  });
}
const r8 = window.Vuex.useStore, l8 = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], Lt = () => {
  const e = r8(), { previousRoute: t } = Fe(e), n = {
    event_source: { remove: !0 },
    translation_source_language: { remove: !1 },
    translation_target_language: { remove: !1 },
    translation_source_title: { remove: !0 }
  }, o = (s) => {
    for (const [a, { remove: r }] of Object.entries(n))
      if (s[a] === null || s[a] === "") {
        const l = l8(
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
  return (s) => (s.access_method || (s.access_method = qt ? "desktop" : "mobile web"), o(s), i8(s));
}, c8 = window.Vuex.useStore, u8 = () => {
  const { commit: e } = c8(), t = Lt();
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
const d8 = window.Vue.resolveDirective, Cl = window.Vue.createElementVNode, g8 = window.Vue.withDirectives, bl = window.Vue.unref, Ag = window.Vue.createVNode, Dg = window.Vue.withCtx, m8 = window.Vue.openBlock, p8 = window.Vue.createBlock, h8 = { class: "pa-4" }, f8 = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, w8 = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: yr,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = u8(), r = () => {
      a(n.translation), s();
    };
    return (l, c) => {
      const u = d8("i18n");
      return m8(), p8(bl(Vt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Dg(() => [
          Cl("div", f8, [
            Ag(bl(Ke), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Ag(bl(Ke), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Dg(() => [
          Cl("div", h8, [
            g8(Cl("span", null, null, 512), [
              [u, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function v8(e, t, n) {
  return x(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield _8(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function Pg(e, t, n) {
  return x(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(O.sortByAutonym) : (yield v8(e, t, n)).sort(O.sortByAutonym);
  });
}
function _8(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function S8() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function y8(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const x8 = window.Vue.computed;
function C8(e, t) {
  const n = x8(() => {
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
const kl = window.Vue.ref, $l = window.Vue.watch, b8 = window.Vue.computed;
function $w(e, t, n) {
  const o = kl(""), s = kl(-1), a = kl(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = b8(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), c = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return $l(e, () => {
    s.value = -1;
  }), $l(t, () => {
    t.value && l.value.length > 0 && (s.value = 0);
  }), $l(s, () => x(this, null, function* () {
    var u;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (u = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || u.scrollIntoView(!1);
  })), { next: r, prev: c, keyboardNavigationContainer: a, selectedItem: o };
}
function sd(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const oi = window.Vue.renderSlot, Te = window.Vue.unref, k8 = window.Vue.isRef, Bg = window.Vue.createVNode, Es = window.Vue.withModifiers, Ls = window.Vue.withKeys, Un = window.Vue.createElementVNode, $8 = window.Vue.resolveDirective, si = window.Vue.withDirectives, Vl = window.Vue.renderList, El = window.Vue.Fragment, pn = window.Vue.openBlock, hn = window.Vue.createElementBlock, Fg = window.Vue.toDisplayString, ai = window.Vue.normalizeClass, Ll = window.Vue.createCommentVNode, V8 = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, E8 = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, L8 = { class: "results px-3 pt-4" }, T8 = { class: "results-header ps-8 pb-2" }, A8 = { class: "results-languages--suggestions pa-0 ma-0" }, D8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], P8 = { class: "results px-3 pt-4" }, B8 = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, F8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], N8 = ["aria-selected"], M8 = { class: "no-results px-3 py-4" }, U8 = { class: "ps-8" }, ii = window.Vue.ref, I8 = window.Vue.watch, R8 = window.Vue.onMounted, Ng = window.Vue.computed, Vw = {
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
      default: S8
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = ii(null), a = ii(""), r = ii([]), l = ii(n.suggestions), c = Ng(
      () => y8(r.value)
    ), u = Ng(() => {
      const b = r.value.length;
      return b < 10 ? "few-results" : b < 30 ? "some-results" : "many-results";
    }), i = (b) => o("select", b), d = () => o("close"), { autocompletion: g, onTabSelect: m } = C8(
      a,
      r
    ), { next: p, prev: h, keyboardNavigationContainer: f, selectedItem: w } = $w(a, r, l), v = () => {
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
    return I8(a, sd(() => x(this, null, function* () {
      r.value = yield Pg(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), R8(() => x(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield Pg(
        n.languages,
        "",
        n.searchAPI
      );
    })), (b, _) => {
      const k = $8("i18n");
      return pn(), hn("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        oi(b.$slots, "search", {}, () => [
          Un("div", V8, [
            Bg(Te(vu), {
              value: Te(g),
              "onUpdate:value": _[0] || (_[0] = (L) => k8(g) ? g.value = L : null),
              icon: Te(Cd),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Bg(Te(vu), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": _[1] || (_[1] = (L) => a.value = L),
              class: "mw-ui-language-selector__search pa-4",
              icon: Te(Cd),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Ls(Es(v, ["prevent"]), ["enter"]),
                Ls(Es(Te(p), ["stop", "prevent"]), ["down"]),
                Ls(Es(Te(h), ["stop", "prevent"]), ["up"]),
                Ls(Es(d, ["prevent"]), ["esc"]),
                Ls(Es(Te(m), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        Un("section", E8, [
          e.suggestions.length && !a.value ? oi(b.$slots, "suggestions", { key: 0 }, () => [
            Un("section", L8, [
              si(Un("p", T8, null, 512), [
                [k, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Un("ul", A8, [
                (pn(!0), hn(El, null, Vl(e.suggestions, (L) => (pn(), hn("li", {
                  key: L,
                  class: ai(["language ma-0", { "language--selected": L === Te(w) }]),
                  lang: L,
                  dir: Te(O.getDir)(L),
                  "aria-selected": L === Te(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (M) => i(L),
                  textContent: Fg(Te(O.getAutonym)(L))
                }, null, 10, D8))), 128))
              ])
            ])
          ]) : Ll("", !0),
          c.value.length ? oi(b.$slots, "search", { key: 1 }, () => [
            Un("section", P8, [
              e.suggestions.length && !a.value ? si((pn(), hn("p", B8, null, 512)), [
                [k, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Ll("", !0),
              (pn(!0), hn(El, null, Vl(c.value, (L, M) => (pn(), hn("ul", {
                key: M,
                class: ai(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (pn(!0), hn(El, null, Vl(L, (C) => (pn(), hn("li", {
                  key: C,
                  class: ai(["language ma-0", { "language--selected": C === Te(w) }]),
                  lang: C,
                  dir: Te(O.getDir)(C),
                  role: "option",
                  "aria-selected": C === Te(w) || null,
                  tabindex: "-1",
                  onClick: (D) => i(C),
                  textContent: Fg(Te(O.getAutonym)(C))
                }, null, 10, F8))), 128)),
                e.allOptionEnabled && !a.value ? si((pn(), hn("li", {
                  key: 0,
                  class: ai(["language ma-0", { "language--selected": Te(w) === "all" }]),
                  role: "option",
                  "aria-selected": Te(w) === "all" || null,
                  tabindex: "-1",
                  onClick: _[2] || (_[2] = (C) => i("all"))
                }, null, 10, N8)), [
                  [k, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Ll("", !0)
              ], 2))), 128))
            ])
          ]) : oi(b.$slots, "noresults", { key: 2 }, () => [
            Un("section", M8, [
              si(Un("h3", U8, null, 512), [
                [k, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const z8 = window.Vue.resolveDirective, Mg = window.Vue.withDirectives, Ts = window.Vue.openBlock, As = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ae = window.Vue.unref, Ug = window.Vue.toDisplayString, Pt = window.Vue.createVNode, Ig = window.Vue.withModifiers, uo = window.Vue.withCtx, O8 = window.Vue.normalizeClass, j8 = {
  key: 0,
  class: "mw-ui-autonym"
}, H8 = ["lang", "dir", "textContent"], q8 = {
  key: 0,
  class: "mw-ui-autonym"
}, G8 = ["lang", "dir", "textContent"], Ds = window.Vue.computed, W8 = window.Vue.inject, X8 = window.Vue.ref, Rg = window.Codex.CdxButton, Tl = window.Codex.CdxIcon, wr = {
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
    const n = e, o = t, s = W8("breakpoints"), a = Ds(() => s.value.mobile), r = X8(null), l = Ds(() => !!r.value), c = () => r.value = "source", u = () => r.value = "target", i = () => r.value = null, d = Ds(() => {
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
    }, m = Ds(
      () => n.selectedSourceLanguage === "all"
    ), p = Ds(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const w = z8("i18n");
      return Ts(), As("div", {
        class: O8(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        Pt(Ae(U), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: uo(() => [
            Pt(Ae(V), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: uo(() => [
                Pt(Ae(Rg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Ig(c, ["stop"])
                }, {
                  default: uo(() => [
                    m.value ? Mg((Ts(), As("span", j8, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ts(), As("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ae(O.getDir)(e.selectedSourceLanguage),
                      textContent: Ug(Ae(O.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, H8)),
                    Pt(Ae(Tl), {
                      size: "x-small",
                      icon: Ae(xu)
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
              default: uo(() => [
                Pt(Ae(Tl), { icon: Ae(Ff) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Pt(Ae(V), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: uo(() => [
                Pt(Ae(Rg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Ig(u, ["stop"])
                }, {
                  default: uo(() => [
                    p.value ? Mg((Ts(), As("span", q8, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (Ts(), As("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ae(O.getDir)(e.selectedTargetLanguage),
                      textContent: Ug(Ae(O.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, G8)),
                    Pt(Ae(Tl), {
                      size: "x-small",
                      icon: Ae(xu)
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
          default: uo(() => [
            Pt(Ae(Vw), {
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
const zg = window.Vue.unref, K8 = window.Vue.createVNode, ri = window.Vue.createElementVNode, Og = window.Vue.toDisplayString, Y8 = window.Vue.openBlock, Q8 = window.Vue.createElementBlock, J8 = { class: "cx-list-empty-placeholder pa-4" }, Z8 = { class: "cx-list-empty-placeholder__icon-container" }, e2 = { class: "cx-list-empty-placeholder__icon" }, t2 = ["textContent"], n2 = ["textContent"], o2 = window.Codex.CdxIcon, Ew = {
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
    return (t, n) => (Y8(), Q8("div", J8, [
      ri("div", Z8, [
        ri("div", e2, [
          K8(zg(o2), { icon: zg(Rf) }, null, 8, ["icon"])
        ])
      ]),
      ri("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: Og(e.title)
      }, null, 8, t2),
      ri("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: Og(e.description)
      }, null, 8, n2)
    ]));
  }
}, s2 = window.Vuex.useStore, a2 = window.Vue.ref, li = a2({ draft: !1, published: !1 }), ms = () => {
  const e = s2(), t = cs(), { addFeaturedCollectionFlag: n } = Tr(), o = (a) => x(void 0, null, function* () {
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
    li.value[a] = !0;
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
          new ls({ title: g, pagelanguage: d })
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
const i2 = window.Vue.toDisplayString, Al = window.Vue.normalizeClass, jg = window.Vue.createElementVNode, Kt = window.Vue.openBlock, Fo = window.Vue.createBlock, ci = window.Vue.createCommentVNode, Hg = window.Vue.unref, qg = window.Vue.renderList, Gg = window.Vue.Fragment, ui = window.Vue.createElementBlock, r2 = window.Vue.createVNode, Wg = window.Vue.withCtx, l2 = ["textContent"], c2 = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, u2 = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, di = window.Vue.ref, Bt = window.Vue.computed, d2 = window.Vue.inject, g2 = window.Vuex.useStore, Xg = {
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
    const t = e, n = di("all"), o = di("all"), s = g2(), { translationsFetched: a } = ms(), r = Bt(
      () => a.value[t.translationStatus]
    ), l = di(!1), c = di(null), u = Bt(
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
    }, w = Bt(() => t.activeStatus === t.translationStatus), v = d2("breakpoints"), y = Bt(() => v.value.mobile), b = Bt(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (_, k) => w.value ? (Kt(), Fo(Hg(Ze), {
      key: 0,
      class: Al(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: Wg(() => [
        jg("div", {
          class: Al(["cx-translation-list__header", b.value])
        }, [
          jg("h3", {
            class: Al(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: i2(_.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, l2),
          m.value.length ? (Kt(), Fo(wr, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": k[0] || (k[0] = (L) => n.value = L),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": k[1] || (k[1] = (L) => o.value = L),
            "source-languages": h.value,
            "target-languages": p.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : ci("", !0)
        ], 2)
      ]),
      default: Wg(() => [
        r.value && !m.value.length ? (Kt(), Fo(Ew, {
          key: 0,
          title: _.$i18n("cx-sx-translation-list-empty-title"),
          description: _.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : ci("", !0),
        r.value ? ci("", !0) : (Kt(), Fo(Hg(mt), { key: 1 })),
        u.value ? (Kt(), ui("div", c2, [
          (Kt(!0), ui(Gg, null, qg(m.value, (L) => (Kt(), Fo(jk, {
            key: `${e.translationStatus}-${L.key}`,
            translation: L,
            onDeleteTranslation: (M) => f(L)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Kt(), ui("div", u2, [
          (Kt(!0), ui(Gg, null, qg(m.value, (L) => (Kt(), Fo(t8, {
            key: `${e.translationStatus}-${L.key}`,
            translation: L
          }, null, 8, ["translation"]))), 128))
        ])),
        r2(w8, {
          modelValue: l.value,
          "onUpdate:modelValue": k[2] || (k[2] = (L) => l.value = L),
          translation: c.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : ci("", !0);
  }
};
const Dl = window.Vue.toDisplayString, mr = window.Vue.createElementVNode, Pl = window.Vue.unref, Ps = window.Vue.openBlock, Bl = window.Vue.createBlock, Kg = window.Vue.createCommentVNode, m2 = window.Vue.Fragment, Yg = window.Vue.createElementBlock, p2 = window.Vue.withKeys, h2 = window.Vue.withCtx, f2 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, w2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, v2 = /* @__PURE__ */ mr("span", null, "/", -1), _2 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, Qg = window.Codex.CdxIcon, S2 = window.Codex.CdxInfoChip, gi = window.Vue.computed, Co = {
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
      () => t.expanded ? fx : xu
    );
    return (r, l) => (Ps(), Bl(Pl(S2), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = p2((c) => r.$emit("click"), ["enter"]))
    }, {
      default: h2(() => [
        n.value === -1 ? (Ps(), Yg(m2, { key: 0 }, [
          mr("span", null, Dl(e.content), 1),
          e.expandable ? (Ps(), Bl(Pl(Qg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : Kg("", !0)
        ], 64)) : (Ps(), Yg("div", f2, [
          mr("span", w2, Dl(o.value), 1),
          v2,
          mr("span", _2, Dl(s.value), 1),
          e.expandable ? (Ps(), Bl(Pl(Qg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : Kg("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const _e = window.Vue.unref, wt = window.Vue.createVNode, In = window.Vue.createElementVNode, Bs = window.Vue.toDisplayString, it = window.Vue.withCtx, y2 = window.Vue.resolveDirective, Fl = window.Vue.withDirectives, fn = window.Vue.openBlock, go = window.Vue.createBlock, Rn = window.Vue.createCommentVNode, Jg = window.Vue.createElementBlock, Zg = window.Vue.withModifiers, x2 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, C2 = { class: "col shrink pe-4" }, b2 = ["lang", "dir", "textContent"], k2 = ["lang", "dir", "textContent"], $2 = { class: "cx-suggestion__missing-sections" }, V2 = {
  key: 0,
  class: "cx-suggestion__easy-sections ms-1"
}, E2 = ["textContent"], L2 = ["textContent"], Nl = window.Codex.CdxIcon, Ee = window.Vue.computed, T2 = window.Vue.inject, A2 = window.Vuex.useStore, Du = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [oo, on, ss],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = A2(), o = Ee(() => t.suggestion), s = Ee(
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
      return Lf(D);
    }).length), c = he(), u = Ee(() => {
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
      () => o.value instanceof ss
    ), m = Ee(
      () => O.getAutonym(o.value.sourceLanguage)
    ), p = Ee(
      () => O.getAutonym(o.value.targetLanguage)
    ), h = Ee(
      () => g.value ? Mf : Uf
    ), f = T2("colors"), w = Ee(
      () => g.value ? f.blue600 : "currentColor"
    ), v = Ee(
      () => o.value instanceof Cf || o.value instanceof bf
    ), y = Ee(() => {
      if (!v.value || o.value.inFeaturedCollection)
        return !1;
      const C = k();
      return (C == null ? void 0 : C.id) === ee;
    }), b = Ee(() => y.value || d.value ? !1 : qt ? zS(o.value.size) : OS(o.value.leadSectionSize)), { featuredCollection: _ } = Wt(), { findSelectedFilter: k } = $o(), L = Ee(() => {
      var D, I;
      const C = k();
      return ((D = C == null ? void 0 : C.id) == null ? void 0 : D.toLowerCase()) === ((I = _.value) == null ? void 0 : I.name.toLowerCase());
    }), M = Ee(() => {
      if (!o.value.inFeaturedCollection)
        return !1;
      if (g.value)
        return !0;
      const C = k();
      return (C == null ? void 0 : C.id) === ee ? !0 : !L.value;
    });
    return (C, D) => {
      const I = y2("i18n");
      return o.value ? (fn(), Jg("div", x2, [
        In("div", C2, [
          wt(_e(Pu), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        wt(_e(U), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: it(() => [
            wt(_e(U), {
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
                      textContent: Bs(s.value)
                    }, null, 8, b2)
                  ]),
                  _: 1
                }),
                wt(_e(V), { shrink: "" }, {
                  default: it(() => [
                    In("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: o.value.sourceLanguage,
                      dir: _e(O.getDir)(o.value.sourceLanguage),
                      textContent: Bs(i.value)
                    }, null, 8, k2)
                  ]),
                  _: 1
                }),
                b.value ? (fn(), go(_e(V), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: it(() => [
                    Fl(In("small", null, null, 512), [
                      [I, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Rn("", !0),
                d.value ? (fn(), go(_e(V), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom",
                  shrink: ""
                }, {
                  default: it(() => [
                    Fl(In("small", $2, null, 512), [
                      [I, [r.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (fn(), Jg("small", V2, Bs(u.value), 1)) : Rn("", !0)
                  ]),
                  _: 1
                })) : Rn("", !0),
                M.value ? (fn(), go(_e(V), {
                  key: 2,
                  shrink: "",
                  class: "cx-suggestion__information-panel__featured mt-auto"
                }, {
                  default: it(() => [
                    wt(Fr)
                  ]),
                  _: 1
                })) : g.value ? (fn(), go(_e(V), {
                  key: 3,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: it(() => [
                    wt(_e(U), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: it(() => [
                        wt(_e(V), { grow: "" }, {
                          default: it(() => [
                            In("small", {
                              textContent: Bs(m.value)
                            }, null, 8, E2),
                            wt(_e(Nl), {
                              icon: _e(Ff),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            In("small", {
                              textContent: Bs(p.value)
                            }, null, 8, L2)
                          ]),
                          _: 1
                        }),
                        r.value ? (fn(), go(_e(V), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: it(() => [
                            Fl(In("small", null, null, 512), [
                              [I, [
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
                y.value ? (fn(), go(_e(V), {
                  key: 4,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: it(() => [
                    wt(Co, {
                      icon: _e(Xu),
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
                g.value ? Rn("", !0) : (fn(), go(_e(Nl), {
                  key: 0,
                  icon: _e(ds),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: D[0] || (D[0] = Zg((Q) => C.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                wt(_e(Nl), {
                  class: "cx-suggestion__favorite-button",
                  icon: h.value,
                  "icon-color": w.value,
                  onClick: D[1] || (D[1] = Zg((Q) => C.$emit("bookmark"), ["stop"]))
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
const Ml = window.Vue.normalizeClass, em = window.Vue.createVNode, D2 = window.Vue.renderList, tm = window.Vue.Fragment, Fs = window.Vue.openBlock, mi = window.Vue.createElementBlock, P2 = window.Vue.createBlock, B2 = window.Vue.toDisplayString, F2 = window.Vue.withKeys, nm = window.Vue.createCommentVNode, N2 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, pi = window.Vue.computed, M2 = window.Vue.ref, U2 = window.Vue.watchEffect, I2 = {
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
    ), s = M2(!1);
    U2(() => {
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
    }, u = pi(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), i = pi(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && s.value
    ), d = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, m) => (Fs(), mi(tm, null, [
      em(Co, {
        class: Ml(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": o.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: s.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      s.value ? (Fs(), mi("div", N2, [
        em(Co, {
          class: Ml(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: m[0] || (m[0] = (p) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Fs(!0), mi(tm, null, D2(u.value, (p) => (Fs(), P2(Co, {
          key: p.id,
          class: Ml(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(p)
          }]),
          content: c(p),
          icon: p.icon,
          onClick: (h) => g.$emit("filter-selected", p)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        i.value ? (Fs(), mi("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: d,
          onKeyup: F2(d, ["enter"])
        }, B2(e.viewMoreConfig.label), 33)) : nm("", !0)
      ])) : nm("", !0)
    ], 64));
  }
};
const R2 = window.Vue.toDisplayString, om = window.Vue.createElementVNode, z2 = window.Vue.renderList, sm = window.Vue.Fragment, Ul = window.Vue.openBlock, am = window.Vue.createElementBlock, O2 = window.Vue.createBlock, j2 = { class: "sx-suggestions-filters__group-label mb-3" }, H2 = { class: "sx-suggestions-filters__group-filters mb-3" }, q2 = {
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
    return (o, s) => (Ul(), am(sm, null, [
      om("div", j2, R2(e.filterGroup.label), 1),
      om("div", H2, [
        (Ul(!0), am(sm, null, z2(n(), (a) => (Ul(), O2(I2, {
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
}, im = window.Vue.computed, G2 = window.Vue.inject, rm = window.Vue.ref, lm = window.Vue.watch, Lw = (e, t) => {
  const o = rm([]), s = rm(!1), a = im(
    () => o.value.slice(0, 4)
  ), r = G2("breakpoints"), l = im(() => r.value.mobile), { inFeaturedCollection: c } = Zu(), u = (g) => x(void 0, null, function* () {
    const m = g.map((h) => h.wikidataId).filter(Boolean), p = yield c(m);
    g.forEach((h) => {
      h.wikidataId && (h.inFeaturedCollection = p[h.wikidataId]);
    });
  }), i = sd(() => x(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      const g = yield ko.searchPagesByTitlePrefix(
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
  return lm(t, d), lm(e, d), {
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
const Il = window.Vue.ref, cm = window.Vue.watch, um = window.Vue.computed, { topics: W2, regions: X2 } = mw.loader.require(
  "ext.cx.articlefilters"
), K2 = W2.flatMap(
  (e) => e.topics.map((t) => Ye(de({}, t), {
    groupId: e.groupId
  }))
), Y2 = () => {
  const e = Il(""), t = Il("all"), n = Il({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = he(), { pageCollectionGroups: s } = Er(), { sourceLanguageURLParameter: a } = P(), r = (m) => (m = m.toLowerCase(), K2.filter(
    (p) => p.label.toLowerCase().includes(m)
  )), l = (m) => (m = m.toLowerCase(), Object.values(s.value).flat().filter(
    (h) => h.name.toLowerCase().includes(m)
  )), c = (m) => (m = m.toLowerCase(), X2.flatMap((p) => [p, ...p.countries]).filter(
    (p) => p.label.toLowerCase().includes(m)
  ).map((p) => ({
    label: p.label,
    id: p.id
  }))), u = um(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: d } = Lw(
    a,
    u
  );
  cm(i, () => {
    n.value.topics = i.value.map(
      (m) => {
        var p;
        return new hi({
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
  }), cm([e, t], () => x(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (m) => new hi({
        label: m.label,
        value: m.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? Cu : null,
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
        icon: t.value === "all" ? Xu : null,
        filterType: ee,
        filterId: m.name
      })
    ), n.value.regions = c(e.value).map(
      (m) => new hi({
        label: m.label,
        value: m.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? Cu : null,
        filterType: Be,
        filterId: m.id
      })
    );
  }));
  const g = um(() => {
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
}, Q2 = "suggestion_filter_topic_area", J2 = "suggestion_filter_search_result_seed", Z2 = "suggestion_filter_collections", e$ = "suggestion_filter_previous_edits", t$ = "suggestion_filter_popular_articles", n$ = "suggestion_filter_region", Rl = (e) => {
  if (e.type === tt || e.type === Be || e.type === ee || e.type === Gt)
    return e.id;
  if (e.id === ee)
    return "all-collections";
}, zl = (e) => {
  if (e.type === tt)
    return Q2;
  if (e.type === Be)
    return n$;
  if (e.type === Gt)
    return J2;
  if (e.id === ee || e.type === ee)
    return Z2;
  if (e.id === an)
    return e$;
  if (e.id === rn)
    return t$;
}, Tw = () => {
  const e = Lt();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: zl(r),
      event_context: Rl(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: zl(r),
      event_context: Rl(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: zl(r),
      event_context: Rl(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const Ce = window.Vue.unref, vt = window.Vue.createVNode, Ft = window.Vue.withCtx, o$ = window.Vue.resolveDirective, Yt = window.Vue.createElementVNode, No = window.Vue.withDirectives, dm = window.Vue.toDisplayString, s$ = window.Vue.createTextVNode, a$ = window.Vue.vShow, gm = window.Vue.isRef, mm = window.Vue.renderList, pm = window.Vue.Fragment, wn = window.Vue.openBlock, mo = window.Vue.createElementBlock, i$ = window.Vue.withKeys, hm = window.Vue.createCommentVNode, fm = window.Vue.createBlock, r$ = { class: "sx-suggestions-filters" }, l$ = { class: "mb-0" }, c$ = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, u$ = { class: "mb-3" }, d$ = { class: "px-4 pb-4 pt-7" }, g$ = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, m$ = ["onKeyup", "onClick"], p$ = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, h$ = { class: "sx-suggestions-filters__search-results-pending" }, f$ = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, w$ = { class: "sx-suggestions-filters__search-results-empty-primary" }, v$ = { class: "sx-suggestions-filters__search-results-empty-secondary" }, fi = window.Vue.ref, po = window.Vue.computed, _$ = window.Vue.inject, S$ = window.Vue.watch, wm = window.Codex.CdxButton, y$ = window.Codex.CdxIcon, x$ = window.Codex.CdxTextInput, C$ = window.Codex.CdxMenu, b$ = window.Codex.CdxTabs, k$ = window.Codex.CdxTab, $$ = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = he(), o = t, s = po(() => [
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
    ]), a = (z) => Q.value = z, r = po(
      () => s.value.find((z) => z.name === Q.value)
    ), l = (z, B) => B === "all" && z.type === Be ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          z.label
        ),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, c = (z, B) => {
      if (z !== "all")
        return !1;
      if (B === ee) {
        const j = m([ee]);
        return j.length && j[0].filters.length > 6;
      }
      return B === Be;
    }, { allFilters: u, isFilterSelected: i, selectFilter: d, findSelectedFilter: g } = $o(), m = (z) => z.flatMap((B) => u.value.filter((j) => j.type === B)).filter(Boolean), p = () => {
      k(), o("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: h,
      logSuggestionFiltersConfirm: f,
      logSuggestionFiltersSelect: w
    } = Tw(), v = () => {
      h(), p();
    }, y = () => {
      _.value && (f(_.value), d(_.value)), p();
    }, b = fi(!1), _ = fi(null), k = () => {
      _.value = null, b.value = !1;
    }, L = (z) => {
      w(z), _.value = z, b.value = !0;
    }, M = (z) => _.value ? _.value.id === z.id && _.value.type === z.type : i(z), C = _$("breakpoints"), D = po(() => C.value.mobile), { searchInput: I, searchScope: Q, searchResults: se, searchResultsLoading: oe } = Y2(), N = po(
      () => _.value || g()
    ), R = fi(null);
    S$(R, () => {
      if (!R.value)
        return;
      const z = X.value.find(
        (B) => B.value === R.value
      );
      L({
        type: z.filterType,
        id: z.filterId,
        label: z.label
      }), I.value = "";
    });
    const G = {
      [ee]: "cx-sx-suggestions-filters-view-all-collections-group",
      [Be]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, X = po(
      () => se.value.flatMap((z) => z.items)
    ), re = fi({}), xe = po(
      () => re.value[Q.value]
    ), ke = po(() => {
      var B;
      const z = (B = xe.value) == null ? void 0 : B.getHighlightedMenuItem();
      return z == null ? void 0 : z.id;
    }), $e = (z) => {
      z.key !== " " && xe.value && xe.value.delegateKeyNavigation(z);
    }, Ne = (z, B) => {
      re.value[B] = z;
    };
    return (z, B) => {
      const j = o$("i18n");
      return wn(), fm(Ce(Vt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: D.value,
        header: !1
      }, {
        default: Ft(() => [
          Yt("section", r$, [
            vt(Ce(U), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Ft(() => [
                vt(Ce(V), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Ft(() => [
                    vt(Ce(wm), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": z.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: v
                    }, {
                      default: Ft(() => [
                        vt(Ce(y$), { icon: Ce(ds) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                vt(Ce(V), {
                  grow: "",
                  align: "center"
                }, {
                  default: Ft(() => [
                    No(Yt("h5", l$, null, 512), [
                      [j, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                vt(Ce(V), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Ft(() => [
                    No(vt(Ce(wm), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: y
                    }, {
                      default: Ft(() => [
                        s$(dm(z.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [a$, b.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Yt("div", c$, [
              No(Yt("h5", u$, null, 512), [
                [j, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Yt("div", null, [
                vt(Co, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: N.value.label,
                  icon: N.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            Yt("div", d$, [
              vt(Ce(x$), {
                modelValue: Ce(I),
                "onUpdate:modelValue": B[0] || (B[0] = (S) => gm(I) ? I.value = S : null),
                role: "combobox",
                "aria-activedescendant": ke.value,
                "aria-controls": "sx-suggestions-filters__search-results__menu",
                "aria-autocomplete": "none",
                placeholder: r.value.searchPlaceholder,
                "input-type": "search",
                "start-icon": Ce(Cu),
                clearable: !!Ce(I),
                onKeydown: $e
              }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
            ]),
            vt(Ce(b$), {
              active: Ce(Q),
              "onUpdate:active": [
                B[2] || (B[2] = (S) => gm(Q) ? Q.value = S : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Ft(() => [
                (wn(!0), mo(pm, null, mm(s.value, (S, E) => (wn(), fm(Ce(k$), {
                  key: E,
                  name: S.name,
                  label: S.label
                }, {
                  default: Ft(() => [
                    Ce(I) ? (wn(), mo("div", p$, [
                      vt(Ce(C$), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (T) => Ne(T, S.name),
                        selected: R.value,
                        "onUpdate:selected": B[1] || (B[1] = (T) => R.value = T),
                        "show-pending": Ce(oe),
                        expanded: "",
                        "menu-items": X.value
                      }, {
                        pending: Ft(() => [
                          No(Yt("div", h$, null, 512), [
                            [j, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Ft(() => [
                          Ce(oe) ? hm("", !0) : (wn(), mo("div", f$, [
                            No(Yt("span", w$, null, 512), [
                              [j, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            No(Yt("span", v$, null, 512), [
                              [j, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (wn(), mo("div", g$, [
                      (wn(!0), mo(pm, null, mm(S.filterGroups, (T) => (wn(), mo("div", {
                        key: T.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        vt(q2, {
                          "filter-group": T,
                          "tentatively-select-filter": L,
                          "is-selected": M,
                          limit: c(S.name, T.type) ? 4 : 0,
                          "get-sub-filter-config": (F) => l(F, S.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        c(S.name, T.type) ? (wn(), mo("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: i$((F) => a(T.id), ["enter"]),
                          onClick: (F) => a(T.id)
                        }, [
                          Yt("span", null, dm(z.$i18n(G[T.id])), 1)
                        ], 40, m$)) : hm("", !0)
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
const Ns = window.Vue.unref, wi = window.Vue.openBlock, vm = window.Vue.createBlock;
window.Vue.createCommentVNode;
const V$ = window.Vue.renderList, E$ = window.Vue.Fragment, _m = window.Vue.createElementBlock, L$ = window.Vue.normalizeClass, Sm = window.Vue.createVNode, T$ = {
  key: 1,
  class: "cx-suggestion-list__filters flex mx-4 pb-2"
}, ym = window.Vue.ref, xm = window.Vue.watch, A$ = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = he(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: o } = Tw(), { targetLanguageURLParameter: s } = P(), {
      getFiltersSummary: a,
      selectFilter: r,
      isFilterSelected: l,
      waitingForPageCollectionsFetch: c,
      validateURLFilterWithCollections: u,
      setFeaturedCollectionFilterIfNeeded: i
    } = $o(), d = ym(!1), g = () => {
      o(), d.value = !0;
    }, m = (h) => {
      n(h), r(h);
    }, p = ym(a());
    return xm(d, (h) => {
      h || (p.value = a());
    }), xm([c, s], ([h]) => {
      h || (u(), i(), p.value = a());
    }), (h, f) => Ns(c) ? (wi(), vm(Ns(mt), { key: 0 })) : (wi(), _m("div", T$, [
      (wi(!0), _m(E$, null, V$(p.value, (w) => (wi(), vm(Co, {
        key: w.label,
        class: L$(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": Ns(l)(w)
        }]),
        icon: w.icon,
        content: w.label,
        onClick: (v) => m(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Sm(Co, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: Ns(Yu),
        content: Ns(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: g
      }, null, 8, ["icon", "content"]),
      Sm($$, {
        modelValue: d.value,
        "onUpdate:modelValue": f[0] || (f[0] = (w) => d.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, Mo = window.Vue.computed, Cm = window.Vue.ref, Ol = window.Vue.watch, D$ = window.Vuex.useStore, P$ = () => {
  const e = D$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = P(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Vr(), r = Lt(), l = Mo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), c = Mo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), u = Cm(0), i = Cm(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, g = 4, m = Mo(
    () => a(u.value)
  );
  Ol(
    m,
    () => {
      m.value.forEach((I) => {
        I.seen = !0;
      });
    },
    { deep: !0 }
  );
  const p = Mo(
    () => s(i.value)
  );
  Ol(
    p,
    () => {
      p.value.forEach((I) => {
        I.seen = !0;
      });
    },
    { deep: !0 }
  );
  const h = () => {
    _(), C(), k(), D();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: w
  } = ed(), v = (I) => I.length === d, y = Mo(
    () => v(p.value)
  ), b = Mo(
    () => v(m.value)
  ), _ = () => {
    const I = (u.value + 1) % g, Q = v(
      a(I)
    );
    (!b.value || !Q) && f();
  }, k = () => {
    const I = (i.value + 1) % g, Q = v(
      s(I)
    );
    (!y.value || !Q) && w();
  }, L = (I) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", I), _();
  }, M = (I) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", I), k();
  }, C = () => u.value = (u.value + 1) % g, D = () => i.value = (i.value + 1) % g;
  return Ol(
    o,
    () => {
      i.value = 0, k(), u.value = 0, _();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: p,
    currentSectionSuggestionsSlice: m,
    discardPageSuggestion: M,
    discardSectionSuggestion: L,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: c,
    sectionSuggestionsLoading: l,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: b
  };
}, B$ = window.Vuex.useStore, ad = () => {
  const e = B$(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = ed(), { addFeaturedCollectionFlag: o } = Tr(), s = (i, d, g) => e.state.suggestions.pageSuggestions.find(
    (m) => m.sourceLanguage === i && m.targetLanguage === d && m.sourceTitle === g
  ), a = (i) => x(void 0, null, function* () {
    const { sourceTitle: d, sourceLanguage: g, targetLanguage: m } = i;
    yield ue.markFavorite(d, g, m);
    const p = new ss({
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
      ), t()), yield ue.markFavorite(
        i,
        d,
        g
      );
      const h = new ss({
        title: i,
        sourceLanguage: d,
        targetLanguage: g
      });
      yield o([h], {
        titleGetter: (f) => f.title
      }), e.commit("suggestions/addFavoriteSuggestion", h);
    }),
    removeFavoriteSuggestion: (i) => (e.commit("suggestions/removeFavoriteSuggestion", i), ue.unmarkFavorite(i))
  };
}, F$ = "suggestion_no_seed", N$ = "suggestion_recent_edit", M$ = "suggestion_topic_area", U$ = "suggestion_search_result_seed", I$ = "suggestion_featured", R$ = "suggestion_collections", z$ = "suggestion_region", O$ = () => {
  const { currentSuggestionFilters: e } = P();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === an)
      return t ? N$ : F$;
    if (n === tt)
      return M$;
    if (n === Be)
      return z$;
    if (n === Gt)
      return U$;
    if (o === rn)
      return I$;
    if (o === ee || n === ee)
      return R$;
    const s = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${o}`
    );
    throw mw.errorLogger.logError(s, "error.contenttranslation"), s;
  };
};
const vi = window.Vue.unref, bm = window.Vue.createVNode, Uo = window.Vue.toDisplayString, Io = window.Vue.createElementVNode, Ms = window.Vue.openBlock, Us = window.Vue.createElementBlock, _i = window.Vue.createCommentVNode, km = window.Vue.createTextVNode, j$ = window.Vue.normalizeClass, H$ = { class: "cx-featured-collection-banner py-4 px-6" }, q$ = { class: "cx-featured-collection-banner__header mb-3" }, G$ = { class: "cx-featured-collection-banner__header-text" }, W$ = { class: "cx-featured-collection-banner__title mb-0" }, X$ = {
  key: 0,
  class: "cx-featured-collection-banner__source mb-0"
}, K$ = { class: "cx-featured-collection-banner__content" }, Y$ = { class: "cx-featured-collection-banner__learn-more-container" }, Q$ = ["href"], $m = window.Codex.CdxIcon, jl = window.Vue.ref, J$ = window.Vue.computed, Z$ = window.Vue.onMounted, eV = window.Vue.onUnmounted, tV = {
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
    const t = jl(!1), n = jl(null), o = jl(null), s = J$(() => n.value ? (o.value, n.value.scrollHeight > n.value.clientHeight) : !1), a = () => {
      t.value = !t.value;
    }, r = () => {
      o.value = window.innerWidth;
    };
    return Z$(() => {
      window.addEventListener("resize", r);
    }), eV(() => {
      window.removeEventListener("resize", r);
    }), (l, c) => (Ms(), Us("div", H$, [
      Io("div", q$, [
        bm(vi($m), {
          icon: vi(Ju),
          class: "cx-featured-collection-banner__icon me-3 mt-1"
        }, null, 8, ["icon"]),
        Io("div", G$, [
          Io("h5", W$, Uo(l.$i18n("cx-featured-collection-banner-title")), 1),
          e.communityName ? (Ms(), Us("span", X$, Uo(e.communityName), 1)) : _i("", !0)
        ])
      ]),
      Io("div", K$, [
        Io("div", {
          ref_key: "descriptionRef",
          ref: n,
          class: j$(["cx-featured-collection-banner__description", {
            "cx-featured-collection-banner__description--expanded": t.value
          }])
        }, [
          km(Uo(e.description || l.$i18n("cx-featured-collection-banner-description")) + " ", 1),
          t.value ? (Ms(), Us("button", {
            key: 0,
            class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--inline",
            onClick: a
          }, Uo(l.$i18n("cx-featured-collection-banner-toggle-less")), 1)) : _i("", !0)
        ], 2),
        !t.value && s.value ? (Ms(), Us("button", {
          key: 0,
          class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--external mb-1 ml-1",
          onClick: a
        }, Uo(l.$i18n("cx-featured-collection-banner-toggle-more")), 1)) : _i("", !0)
      ]),
      Io("div", Y$, [
        (t.value || !s.value) && e.learnMoreUrl ? (Ms(), Us("a", {
          key: 0,
          href: e.learnMoreUrl,
          class: "cx-featured-collection-banner__learn-more",
          target: "_blank"
        }, [
          km(Uo(l.$i18n("cx-featured-collection-banner-learn-more")) + " ", 1),
          bm(vi($m), {
            icon: vi(Ba),
            size: "small",
            class: "cx-featured-collection-banner__learn-more-icon"
          }, null, 8, ["icon"])
        ], 8, Q$)) : _i("", !0)
      ])
    ]));
  }
};
const Vm = window.Vue.normalizeClass, nV = window.Vue.resolveDirective, Is = window.Vue.createElementVNode, Si = window.Vue.withDirectives, ge = window.Vue.unref, Qe = window.Vue.openBlock, Nt = window.Vue.createBlock, vn = window.Vue.createCommentVNode, Hl = window.Vue.createVNode, Rs = window.Vue.withCtx, Em = window.Vue.renderList, Lm = window.Vue.Fragment, ql = window.Vue.createElementBlock, oV = window.Vue.toDisplayString, sV = window.Vue.createTextVNode, aV = window.Vue.vShow, iV = { class: "cx-suggestion-list" }, rV = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, lV = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, cV = { class: "cx-suggestion-list__refresh-button-container justify-center" }, _t = window.Vue.computed, uV = window.Vue.inject, dV = window.Vue.ref, gV = window.Codex.CdxButton, mV = window.Codex.CdxIcon, pV = window.Vuex.useStore, hV = {
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
    } = P(), { supportedLanguageCodes: s } = Aa(), a = Gf(), r = (B) => a(B, n.value), l = (B) => a(t.value, B), c = O$(), { featuredCollection: u } = Wt(), { findSelectedFilter: i } = $o(), d = _t(() => i()), g = Fa(), m = (B) => {
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
      discardSectionSuggestion: w,
      onSuggestionRefresh: v,
      pageSuggestionsLoading: y,
      sectionSuggestionsLoading: b,
      isCurrentPageSuggestionsSliceFull: _,
      isCurrentSectionSuggestionsSliceFull: k
    } = P$(), L = dV(null), M = Lt(), C = () => {
      M({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), v(), L.value && L.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: D, markFavoritePageSuggestion: I } = ad(), Q = uV("breakpoints"), se = _t(() => Q.value.mobile), oe = _t(
      () => se.value ? null : "pb-2 flex justify-between items-center"
    ), N = pV(), R = _t(
      () => N.state.suggestions.isPageSuggestionsFetchPending
    ), G = _t(
      () => N.state.suggestions.isSectionSuggestionsFetchPending
    ), X = _t(
      () => R.value || y.value && !_.value
    ), re = _t(
      () => G.value || b.value && !k.value
    ), xe = _t(
      () => R.value || y.value || p.value.length > 0
    ), ke = _t(
      () => G.value || b.value || h.value.length > 0
    ), $e = _t(
      () => !xe.value && !ke.value
    ), Ne = _t(
      () => !b.value && !y.value && !R.value && !G.value && !$e.value
    ), z = _t(
      () => {
        var B;
        return u.value && ((B = d.value) == null ? void 0 : B.id) === u.value.name;
      }
    );
    return (B, j) => {
      const S = nV("i18n");
      return Si((Qe(), ql("div", iV, [
        Hl(ge(Ze), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: Rs(() => [
            Is("div", {
              class: Vm(["cx-suggestion-list__header-card__header px-4", oe.value])
            }, [
              Si(Is("h3", {
                class: Vm(["mw-ui-card__title mb-0", { "py-3": se.value }])
              }, null, 2), [
                [S, void 0, "cx-suggestionlist-title"]
              ]),
              se.value ? vn("", !0) : (Qe(), Nt(wr, {
                key: 0,
                "source-languages": ge(s),
                "target-languages": ge(s),
                "selected-source-language": ge(t),
                "selected-target-language": ge(n),
                "onUpdate:selectedSourceLanguage": r,
                "onUpdate:selectedTargetLanguage": l
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Hl(A$)
          ]),
          default: Rs(() => [
            se.value ? (Qe(), Nt(wr, {
              key: 0,
              "source-languages": ge(s),
              "target-languages": ge(s),
              "selected-source-language": ge(t),
              "selected-target-language": ge(n),
              "onUpdate:selectedSourceLanguage": r,
              "onUpdate:selectedTargetLanguage": l
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : vn("", !0)
          ]),
          _: 1
        }),
        z.value ? (Qe(), Nt(tV, {
          key: 0,
          "community-name": ge(u).communityName,
          description: ge(u).description,
          "learn-more-url": ge(u).link
        }, null, 8, ["community-name", "description", "learn-more-url"])) : vn("", !0),
        ke.value ? (Qe(), Nt(ge(Ze), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: Rs(() => [
            Si(Is("h5", rV, null, 512), [
              [S, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Qe(!0), ql(Lm, null, Em(ge(h), (E, T) => (Qe(), Nt(Du, {
              key: `section-suggestion-${T}`,
              class: "ma-0",
              suggestion: E,
              onClose: (F) => ge(w)(E),
              onClick: (F) => m(E),
              onBookmark: (F) => ge(D)(E)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            re.value ? (Qe(), Nt(ge(mt), { key: 0 })) : vn("", !0)
          ]),
          _: 1
        })) : vn("", !0),
        xe.value ? (Qe(), Nt(ge(Ze), {
          key: 2,
          ref_key: "pageSuggestionsList",
          ref: L,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: Rs(() => [
            Si(Is("h5", lV, null, 512), [
              [S, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Qe(!0), ql(Lm, null, Em(ge(p), (E, T) => (Qe(), Nt(Du, {
              key: `page-suggestion-${T}`,
              suggestion: E,
              onClose: (F) => ge(f)(E),
              onClick: (F) => m(E),
              onBookmark: (F) => ge(I)(E)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            X.value ? (Qe(), Nt(ge(mt), { key: 0 })) : vn("", !0)
          ]),
          _: 1
        }, 512)) : vn("", !0),
        $e.value ? (Qe(), Nt(Ew, {
          key: 3,
          title: B.$i18n("cx-sx-suggestion-list-empty-title"),
          description: B.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : vn("", !0),
        Is("div", cV, [
          Ne.value ? (Qe(), Nt(ge(gV), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: C
          }, {
            default: Rs(() => [
              Hl(ge(mV), {
                class: "me-1",
                icon: ge(zf)
              }, null, 8, ["icon"]),
              sV(" " + oV(B.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : vn("", !0)
        ])
      ], 512)), [
        [aV, e.active]
      ]);
    };
  }
}, fV = window.Vue.resolveDirective, wV = window.Vue.createElementVNode, vV = window.Vue.withDirectives, _V = window.Vue.renderList, SV = window.Vue.Fragment, Gl = window.Vue.openBlock, yV = window.Vue.createElementBlock, Tm = window.Vue.unref, Am = window.Vue.createBlock, Dm = window.Vue.withCtx, xV = window.Vue.createCommentVNode, CV = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, bV = window.Vue.computed, kV = window.Vuex.useStore, $V = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = kV(), n = bV(() => t.state.suggestions.favorites || []), o = Fa(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = ad();
    return (r, l) => {
      const c = fV("i18n");
      return n.value.length ? (Gl(), Am(Tm(Ze), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Dm(() => [
          vV(wV("h3", CV, null, 512), [
            [c, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Dm(() => [
          (Gl(!0), yV(SV, null, _V(n.value, (u, i) => (Gl(), Am(Du, {
            key: `favorite-${i}`,
            suggestion: u,
            onClick: (d) => s(u),
            onBookmark: (d) => Tm(a)(u)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : xV("", !0);
    };
  }
};
const VV = window.Vue.resolveDirective, zs = window.Vue.createElementVNode, EV = window.Vue.withDirectives, LV = window.Vue.renderList, TV = window.Vue.Fragment, Pm = window.Vue.openBlock, Bm = window.Vue.createElementBlock, AV = window.Vue.unref, DV = window.Vue.createVNode, PV = window.Vue.toDisplayString, BV = { class: "cx-help-panel pa-4" }, FV = { class: "cx-help-panel__item-list mt-6 ps-2" }, NV = ["href", "target"], MV = ["textContent"], UV = window.Codex.CdxIcon, IV = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = he(), n = [
      {
        icon: xx,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: vx,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = VV("i18n");
      return Pm(), Bm("div", BV, [
        EV(zs("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        zs("ul", FV, [
          (Pm(), Bm(TV, null, LV(n, (r, l) => zs("li", {
            key: l,
            class: "mt-4"
          }, [
            zs("a", {
              href: r.href,
              target: r.target
            }, [
              DV(AV(UV), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              zs("span", {
                textContent: PV(r.label)
              }, null, 8, MV)
            ], 8, NV)
          ])), 64))
        ])
      ]);
    };
  }
};
const RV = window.Vue.resolveDirective, zn = window.Vue.createElementVNode, Wl = window.Vue.withDirectives, Xl = window.Vue.toDisplayString, yi = window.Vue.unref, Kl = window.Vue.withCtx, xi = window.Vue.createVNode, zV = window.Vue.openBlock, OV = window.Vue.createElementBlock, jV = { class: "cx-stats-panel pa-4" }, HV = ["textContent"], qV = { class: "cx-stats-panel__monthly-stats-label" }, GV = ["textContent"], WV = { class: "cx-stats-panel__total-stats-label" }, XV = ["href", "target"], KV = ["textContent"], YV = window.Codex.CdxIcon, QV = window.Vue.ref, Fm = window.Vue.computed, JV = window.Vue.watch, ZV = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = he(), n = e, o = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", s = Fm(() => {
      var u, i;
      const c = ((i = (u = n.stats) == null ? void 0 : u[o]) == null ? void 0 : i.count) || 0;
      return mw.language.convertNumber(c);
    }), a = Fm(() => {
      var u, i;
      const c = ((i = (u = n.stats) == null ? void 0 : u[o]) == null ? void 0 : i.delta) || 0;
      return mw.language.convertNumber(c);
    }), r = QV(null), l = {
      icon: If,
      label: t.i18n("cx-sx-dashboard-stats-panel-all-stats-label"),
      href: "https://superset.wmcloud.org/superset/dashboard/p/X61GbQpZ5Rb/",
      target: "_blank"
    };
    return JV(
      () => n.stats,
      () => {
        const c = n.stats, u = r.value.getContext("2d"), i = Object.keys(n.stats || {}).sort(), d = i.reduce(
          (k, L) => Math.max(k, c[L].delta),
          0
        ), g = i.map((k) => c[k].delta), m = r.value.getBoundingClientRect().width, p = r.value.getBoundingClientRect().height;
        r.value.width = m, r.value.height = p;
        const h = 4, f = 6, w = 50, v = (w - h) / d;
        let y = h;
        const b = Math.floor(
          (m - h) / (f + h)
        ), _ = g.slice(
          Math.max(g.length - b, 0)
        );
        _.forEach((k, L) => {
          L === _.length - 1 && (u.fillStyle = "#36c");
          const M = w - k * v;
          u.fillRect(y, M, f, k * v), y += f + h;
        });
      }
    ), (c, u) => {
      const i = RV("i18n");
      return zV(), OV("div", jV, [
        Wl(zn("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        xi(yi(U), null, {
          default: Kl(() => [
            xi(yi(V), { class: "cx-stats-panel__monthly-stats" }, {
              default: Kl(() => [
                zn("h3", {
                  textContent: Xl(a.value)
                }, null, 8, HV),
                Wl(zn("h5", qV, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            xi(yi(V), { class: "cx-stats-panel__total-stats" }, {
              default: Kl(() => [
                zn("h3", {
                  textContent: Xl(s.value)
                }, null, 8, GV),
                Wl(zn("h5", WV, null, 512), [
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
          xi(yi(YV), {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          zn("span", {
            textContent: Xl(l.label)
          }, null, 8, KV)
        ], 8, XV)
      ]);
    };
  }
}, Aw = () => {
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
const eE = window.Vue.renderSlot, tE = window.Vue.unref, nE = window.Vue.createVNode, oE = window.Vue.createElementVNode, sE = window.Vue.openBlock, aE = window.Vue.createElementBlock, iE = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, rE = { class: "col-12 ma-0 pa-0" }, lE = {
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
    const n = t, o = Aw(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (sE(), aE("footer", iE, [
      oE("div", rE, [
        eE(a.$slots, "default", {}, () => [
          nE(tE(Ea), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, cE = window.Vuex.useStore, uE = () => {
  const e = cE(), t = cs(), { addFeaturedCollectionFlag: n } = Tr();
  return () => x(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const o = yield ue.fetchFavorites();
    if (!o || !o.length)
      return;
    const s = {};
    for (const a of o)
      ue.fetchSectionSuggestion(
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
}, dE = window.Vuex.useStore, Dw = () => {
  const e = dE(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), { isDefaultFilter: r } = Nu(), { previousRoute: l } = Fe(e), c = Lt(), u = () => {
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
}, Nm = window.Vue.computed, gE = window.Vuex.useStore, Le = () => {
  const e = gE(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o,
    sectionURLParameter: s
  } = P(), a = Nm(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ), r = Nm(() => s.value === no.LEAD_SECTION_DUMMY_TITLE ? s.value : a.value.missingSections[s.value] || a.value.presentSections[s.value] || "");
  return { sectionSuggestion: a, activeSectionTargetTitle: r };
}, mE = window.Vuex.useStore, pE = window.Vue.computed, Xt = () => {
  const e = mE(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = P();
  return { currentTranslation: pE(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, Yl = window.Vue.computed, hE = window.Vuex.useStore, ot = () => {
  const e = hE(), { sectionSuggestion: t } = Le(), { currentTranslation: n } = Xt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), r = Yl(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = Yl(
    () => {
      var u, i;
      return ((u = t.value) == null ? void 0 : u.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    }
  ), c = Yl(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: r, currentTargetPage: c, currentTargetPageTitle: l };
}, Ci = window.Vue.computed, fE = window.Vuex.useStore, ne = () => {
  const e = fE(), { currentSourcePage: t } = ot(), { currentMTProvider: n } = Fe(e), { sectionURLParameter: o } = P(), s = Ci(() => {
    var c, u;
    return o.value ? (u = t.value) == null ? void 0 : u.getSectionByTitle(o.value) : (c = t.value) == null ? void 0 : c.leadSection;
  }), a = Ci(
    () => {
      var c;
      return (c = s.value) == null ? void 0 : c.isTitleSelected;
    }
  ), r = Ci(
    () => {
      var c;
      return (c = s.value) == null ? void 0 : c.selectedContentTranslationUnit;
    }
  ), l = Ci(
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
}, Ql = window.Vue.computed, ht = () => {
  const { sectionURLParameter: e } = P(), { targetPageExists: t } = cn(), { sourceSection: n } = ne(), { sectionSuggestion: o } = Le(), s = Ql(
    () => {
      var l;
      return t.value && !!((l = n.value) != null && l.isLeadSection);
    }
  ), a = Ql(
    () => {
      var l;
      return !!((l = n.value) != null && l.isLeadSection) && !t.value;
    }
  );
  return {
    isCurrentSectionPresent: Ql(
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
}, wE = window.Vue.ref, bi = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, Jl = wE(null), Tt = () => {
  const { isCurrentSectionPresent: e } = ht(), t = () => {
    e.value ? o(bi.EXPAND) : o(bi.NEW_SECTION);
  }, n = () => {
    Jl.value = null;
  }, o = (s) => {
    if (!Object.values(bi).includes(s))
      throw new Error("[CX] Invalid publishing target used");
    Jl.value = s;
  };
  return {
    target: Jl,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: o,
    PUBLISHING_TARGETS: bi
  };
}, vE = window.Vue.watch, _E = () => {
  const { fetchAllTranslations: e } = ms(), t = Hf(), n = uE(), { fetchPageCollectionGroups: o } = Er(), { logDashboardOpenEvent: s } = Dw(), { applicationLanguagesInitialized: a } = Wf(), { clearPublishTarget: r } = Tt();
  return () => x(void 0, null, function* () {
    o(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), vE(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Mm = window.Vue.computed, SE = window.Vue.ref, yE = window.Vue.watch, xE = window.Vue.watchEffect, CE = window.Vuex.useStore, bE = ["suggestions", "draft", "published"], kE = () => {
  const e = CE(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = P(), { translationsFetched: o } = ms(), s = SE(null);
  if (bE.includes(t.value))
    s.value = t.value;
  else {
    const a = Mm(
      () => o.value.draft
    ), r = Mm(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", yE(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return xE(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, $E = window.Vue.computed, VE = () => {
  const e = he();
  return $E(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: $0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: _r,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: k0,
        type: "text"
      }
    }
  ]);
};
const be = window.Vue.unref, Ie = window.Vue.createVNode, EE = window.Vue.toDisplayString, LE = window.Vue.createTextVNode, _n = window.Vue.withCtx, Zl = window.Vue.openBlock, Um = window.Vue.createBlock, Im = window.Vue.createCommentVNode, TE = window.Vue.vShow, AE = window.Vue.withDirectives, DE = window.Vue.isRef, PE = window.Vue.createElementBlock, Rm = window.Vue.computed, BE = window.Vue.inject, FE = window.Vuex.useStore, NE = window.Codex.CdxButton, ME = window.Codex.CdxIcon, UE = {
  __name: "CXDashboard",
  setup(e) {
    const t = nt(), n = Lt(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    _E()();
    const a = FE();
    a.dispatch("translator/fetchTranslatorStats");
    const r = Rm(() => a.state.translator.translatorStats), l = kE(), c = VE(), u = Aw(), i = (m) => {
      u(m), l.value = m;
    }, d = BE("breakpoints"), g = Rm(() => d.value.mobile);
    return mw.cx.eventlogging.stats.dashboardAccess(g.value), (m, p) => (Zl(), PE("div", null, [
      Ie(be(U), { class: "ma-0 pb-4" }, {
        default: _n(() => [
          Ie(be(NE), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: _n(() => [
              Ie(be(ME), {
                class: "me-1",
                icon: be(Bf)
              }, null, 8, ["icon"]),
              LE(" " + EE(m.$i18n("cx-create-new-translation")), 1)
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
        default: _n(() => [
          m.$mwui.breakpoint.tabletAndUp ? (Zl(), Um(be(V), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: _n(() => [
              Ie(be(Ea), {
                id: "dashboard-list-selector--desktop",
                items: be(c),
                active: be(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Im("", !0),
          Ie(be(V), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: _n(() => [
              AE(Ie($V, null, null, 512), [
                [TE, be(l) === "suggestions"]
              ]),
              Ie(hV, {
                active: be(l) === "suggestions"
              }, null, 8, ["active"]),
              Ie(Xg, {
                "translation-status": "draft",
                "active-status": be(l)
              }, null, 8, ["active-status"]),
              Ie(Xg, {
                "translation-status": "published",
                "active-status": be(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Ie(be(V), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: _n(() => [
              Ie(be(U), {
                class: "ma-0",
                align: "start"
              }, {
                default: _n(() => [
                  Ie(be(V), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: _n(() => [
                      Ie(ZV, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Ie(be(V), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: _n(() => [
                      Ie(IV)
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
      m.$mwui.breakpoint.mobile ? (Zl(), Um(lE, {
        key: 0,
        active: be(l),
        "onUpdate:active": p[0] || (p[0] = (h) => DE(l) ? l.value = h : null),
        items: be(c)
      }, null, 8, ["active", "items"])) : Im("", !0)
    ]));
  }
}, IE = {
  name: "DashboardView",
  components: { CxDashboard: UE }
}, RE = window.Vue.resolveComponent, zE = window.Vue.createVNode, OE = window.Vue.openBlock, jE = window.Vue.createElementBlock, HE = { class: "cx-translation-dashboard" };
function qE(e, t, n, o, s, a) {
  const r = RE("cx-dashboard");
  return OE(), jE("main", HE, [
    zE(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const zm = /* @__PURE__ */ pe(IE, [["render", qE]]), Ro = window.Vue.computed, GE = () => {
  const { sectionSuggestion: e } = Le(), { targetLanguageURLParameter: t } = P(), { currentTranslation: n } = Xt(), o = Ro(
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
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = cn(), c = Ro(() => r ? Z.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), u = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value >= 1 ? "cx-sx-select-section" : a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : a.value > 0 ? "cx-sx-select-section" : "" : "cx-sx-start-translation-button-label", i = Ro(() => {
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
function WE(e) {
  return e.$el = $(e), e;
}
function XE(e, t, n, o) {
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
function KE() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function YE(e, t) {
  return x(this, null, function* () {
    yield id(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = WE(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const QE = window.Vue.computed, JE = window.Vue.onMounted, ZE = window.Vue.ref;
function e4(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const t4 = {
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
    const n = ZE(null);
    let o = null;
    const s = QE(
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
    return JE(() => x(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = e4;
      const i = yield YE(c, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = XE(
        i,
        e.content,
        e.language,
        e.dir
      );
      const d = ve.ui.contextItemFactory.lookup("reference");
      d.prototype.getRendering = KE, o.focus();
    })), { sxeditor: n };
  }
}, pr = window.Vue.createElementVNode, n4 = window.Vue.openBlock, o4 = window.Vue.createElementBlock, s4 = ["lang", "dir"], a4 = /* @__PURE__ */ pr("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ pr("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ pr("div", { class: "toolbar" })
  ])
], -1), i4 = ["lang", "dir"];
function r4(e, t, n, o, s, a) {
  return n4(), o4("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    a4,
    pr("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, i4)
  ], 8, s4);
}
const l4 = /* @__PURE__ */ pe(t4, [["render", r4]]);
function id() {
  return mw.loader.using("mw.cx3.ve");
}
const c4 = window.Vuex.useStore, u4 = () => {
  const e = c4();
  return (t, n) => x(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield id(), new Promise((s) => {
      setTimeout(() => {
        const a = yf.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, d4 = window.Vuex.useStore, Pw = () => {
  const e = d4();
  return (t, n, o, s = null) => x(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield ko.fetchPageContent(
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
}, Nr = () => {
  const { currentSourcePage: e } = ot(), t = u4(), n = Pw(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = P(), c = (d, g) => x(void 0, null, function* () {
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
}, g4 = window.Vuex.useStore, ps = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = P(), { activeSectionTargetTitle: a } = Le(), { target: r } = Tt(), l = g4(), c = nt(), u = () => {
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
}, Om = window.Vue.computed, m4 = window.Vue.ref, p4 = window.Vue.watchEffect, ec = /* @__PURE__ */ new Map(), h4 = (e, t) => x(void 0, null, function* () {
  return (yield ue.fetchArticleSections(
    e,
    t
  )).sections.filter(
    (s) => s.level === "2"
  )[0].byteoffset;
}), f4 = (e, t) => {
  const n = `${e}:${t}`;
  if (ec.has(n))
    return ec.get(n);
  const o = h4(e, t);
  return ec.set(n, o), o;
}, Bw = () => {
  const { currentSourcePage: e } = ot(), { sectionSuggestion: t } = Le(), { sectionURLParameter: n } = P(), o = m4(null);
  p4(() => x(void 0, null, function* () {
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
      o.value = yield f4(l, c);
    } else
      o.value = ((r = e.value) == null ? void 0 : r.articleSize) || null;
  }));
  const s = Om(() => o.value ? !t.value && qt ? Ef(o.value) : Hu(o.value) : Xe.unknown);
  return { isQuickTranslation: Om(() => s.value === Xe.stub || s.value === Xe.easy), difficulty: s, sizeInBytes: o };
}, rd = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = P(), s = Lt(), { difficulty: a } = Bw();
  return {
    logDashboardTranslationStartEvent: () => {
      const l = {
        event_type: "dashboard_translation_start",
        event_source: Cw.value,
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
      return Au.value && (l.event_context = Au.value), o.value ? (l.translation_source_section = o.value, l.translation_type = "section") : l.translation_type = "article", s(l);
    }
  };
}, ld = () => {
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
}, w4 = window.Vue.ref, v4 = () => {
  const e = nt(), { logDashboardTranslationStartEvent: t } = rd(), n = ld(), o = ps(), { sectionURLParameter: s } = P(), { targetPageExists: a } = cn(), { selectPageSectionByTitle: r } = Nr(), l = () => x(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), c = w4(!1), { currentTranslation: u } = Xt();
  return {
    handlePrimaryButtonClick: () => {
      u.value ? u.value.isArticleTranslation && !qt ? c.value = !0 : (n(), o()) : s.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: c
  };
};
const _4 = window.Vue.resolveDirective, jm = window.Vue.createElementVNode, Hm = window.Vue.withDirectives, S4 = window.Vue.unref, y4 = window.Vue.withCtx, x4 = window.Vue.openBlock, C4 = window.Vue.createBlock, b4 = {
  href: "",
  target: "_blank"
}, k4 = window.Codex.CdxDialog, $4 = {
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
      const d = _4("i18n");
      return x4(), C4(S4(k4), {
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
        default: y4(() => [
          Hm(jm("p", null, null, 512), [
            [d, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Hm(jm("a", b4, null, 512), [
            [d, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
}, V4 = () => {
  const {
    sectionURLParameter: e,
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = P(), s = Ar();
  return () => x(void 0, null, function* () {
    const a = yield s(
      t.value,
      n.value,
      o.value
    );
    return a instanceof on ? a.sourceSections.includes(e.value) : !1;
  });
};
const Se = window.Vue.unref, E4 = window.Vue.resolveDirective, Os = window.Vue.createElementVNode, qm = window.Vue.withDirectives, js = window.Vue.openBlock, tc = window.Vue.createElementBlock, nc = window.Vue.createCommentVNode, St = window.Vue.createVNode, Mt = window.Vue.withCtx, oc = window.Vue.toDisplayString, sc = window.Vue.createTextVNode, L4 = window.Vue.withModifiers, Gm = window.Vue.createBlock, T4 = window.Vue.Fragment, A4 = { class: "sx-translation-confirmer-body pb-4" }, D4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, P4 = ["innerHTML"], B4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, F4 = ["href"], N4 = ["innerHTML"], ac = window.Vue.computed, ic = window.Vue.ref, M4 = window.Vue.watchEffect, U4 = window.Vuex.useStore, rc = window.Codex.CdxButton, I4 = window.Codex.CdxIcon, R4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = nt(), o = U4(), { sectionSuggestion: s } = Le(), { targetLanguageAutonym: a } = Fe(o), { sectionURLParameter: r, clearSectionURLParameter: l } = P(), { logDashboardTranslationStartEvent: c } = rd(), u = ps(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: d } = v4(), g = ic(!1), m = ic(null), p = () => x(this, null, function* () {
      let oe = !0;
      try {
        oe = yield $t.checkUnreviewedTranslations();
      } catch (N) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          N
        );
      }
      oe !== !0 && (g.value = !0, m.value = oe.targetUrl);
    }), h = () => x(this, null, function* () {
      yield p(), !g.value && (c(), u());
    }), f = () => x(this, null, function* () {
      yield p(), !g.value && i();
    }), w = t;
    M4(() => {
      d.value && (w("open-translation-confirmation-dialog"), d.value = !1);
    });
    const {
      actionInformationMessage: v,
      getActionButtonLabel: y,
      isProgressiveButton: b,
      targetArticlePath: _
    } = GE(), k = he(), L = ac(
      () => k.i18n(y(!!r.value))
    ), M = () => x(this, null, function* () {
      yield p(), !g.value && n.push({ name: "sx-section-selector" });
    }), C = ac(() => {
      var oe, N;
      return r.value && !!((N = (oe = s.value) == null ? void 0 : oe.sourceSections) != null && N.length);
    }), { targetPageExists: D } = cn(), I = ac(() => !r.value && D.value && qt), Q = V4(), se = ic(!1);
    return Q().then((oe) => {
      oe || l(), se.value = !0;
    }), (oe, N) => {
      const R = E4("i18n");
      return js(), tc(T4, null, [
        Os("section", A4, [
          Se(r) && se.value ? (js(), tc("section", D4, [
            qm(Os("h6", null, null, 512), [
              [R, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Os("h5", {
              class: "ma-0",
              innerHTML: Se(r)
            }, null, 8, P4)
          ])) : Se(D) && !Se(r) ? (js(), tc("section", B4, [
            St(Se(U), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Mt(() => [
                qm(St(Se(V), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [R, [Se(a)], "cx-sx-existing-translation-status"]
                ]),
                St(Se(V), { shrink: "" }, {
                  default: Mt(() => [
                    Os("a", {
                      href: Se(_),
                      target: "_blank"
                    }, [
                      St(Se(I4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: Se(Ba)
                      }, null, 8, ["icon"])
                    ], 8, F4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            St(Se(U), { class: "ma-0" }, {
              default: Mt(() => [
                St(Se(V), null, {
                  default: Mt(() => [
                    Os("span", { innerHTML: Se(v) }, null, 8, N4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : nc("", !0),
          St(Se(U), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Mt(() => [
              C.value ? (js(), Gm(Se(V), {
                key: 0,
                shrink: ""
              }, {
                default: Mt(() => [
                  St(Se(rc), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: L4(M, ["stop"])
                  }, {
                    default: Mt(() => [
                      sc(oc(oe.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : nc("", !0),
              I.value ? (js(), Gm(Se(V), {
                key: 1,
                shrink: ""
              }, {
                default: Mt(() => [
                  St(Se(rc), {
                    size: "large",
                    onClick: h
                  }, {
                    default: Mt(() => [
                      sc(oc(oe.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : nc("", !0),
              St(Se(V), { shrink: "" }, {
                default: Mt(() => [
                  St(Se(rc), {
                    weight: "primary",
                    size: "large",
                    action: Se(b) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: Mt(() => [
                      sc(oc(L.value), 1)
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
        St($4, {
          modelValue: g.value,
          "onUpdate:modelValue": N[0] || (N[0] = (G) => g.value = G),
          "target-url": m.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const lc = window.Vue.unref, z4 = window.Vue.openBlock, O4 = window.Vue.createBlock, j4 = window.Vue.computed, Fw = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t } = Aa(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = P(), { currentLanguageTitleGroup: s } = cn(), a = j4(
      () => {
        var u;
        return ((u = s.value) == null ? void 0 : u.titles.map((i) => i.lang)) || [];
      }
    ), r = qx(), l = (u) => r(u, o.value), c = (u) => r(n.value, u);
    return (u, i) => (z4(), O4(wr, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": lc(t),
      "selected-source-language": lc(n),
      "selected-target-language": lc(o),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": c
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, H4 = (e) => {
  const s = e / 5 / 15;
  return Math.ceil(s);
};
const Me = window.Vue.unref, cc = window.Vue.toDisplayString, On = window.Vue.createElementVNode, Qt = window.Vue.createVNode, zo = window.Vue.withCtx, q4 = window.Vue.resolveDirective, G4 = window.Vue.withDirectives, W4 = window.Vue.normalizeClass, Wm = window.Vue.openBlock, X4 = window.Vue.createElementBlock, K4 = window.Vue.createCommentVNode, Y4 = window.Vue.createBlock, Q4 = ["textContent"], J4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, Z4 = ["textContent"], e3 = { class: "pe-3" }, t3 = ["textContent"], n3 = window.Codex.CdxButton, Hs = window.Codex.CdxIcon, jn = window.Vue.computed, o3 = window.Vuex.useStore, s3 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = o3(), { currentSourcePage: n } = ot(), { sectionSuggestion: o } = Le(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l
    } = P(), c = jn(() => t.state.suggestions.favorites || []), u = jn(
      () => c.value.some(
        (M) => r.value === M.title && s.value === M.sourceLanguage && a.value === M.targetLanguage
      )
    ), { markFavoriteSuggestion: i, removeFavoriteSuggestion: d } = ad(), g = () => i(
      r.value,
      s.value,
      a.value
    ), m = () => d(
      new ss({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), p = jn(
      () => u.value ? Mf : Uf
    ), h = jn(
      () => u.value ? m : g
    ), f = jn(
      () => Z.getPageUrl(s.value || "", r.value || "")
    ), w = jn(
      () => {
        var M;
        return (((M = n.value) == null ? void 0 : M.langLinksCount) || 0) + 1;
      }
    ), v = (M) => {
      const C = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let D = 0; D < C.length; D++)
        if (M >= C[D].value)
          return (M / C[D].value).toFixed(1).replace(/\.0$/, "") + C[D].suffix;
      return M.toString();
    }, y = jn(() => {
      var C;
      const M = Object.values(((C = n.value) == null ? void 0 : C.pageviews) || {}).reduce(
        (D, I) => D + I,
        0
      );
      return v(M);
    }), { isQuickTranslation: b, sizeInBytes: _ } = Bw(), k = he(), L = jn(() => {
      if (!o.value && !n.value || !_.value)
        return "";
      const M = H4(_.value), C = M >= 60 ? M / 60 : 0, D = Math.round(C * 2) / 2;
      if (!o.value && qt)
        return k.i18n(
          "cx-sx-translation-confirmer-translation-time-whole-article",
          D,
          M
        );
      if (o.value) {
        if (l.value)
          return k.i18n(
            "cx-sx-translation-confirmer-translation-time-single-section",
            D,
            M
          );
      } else
        return k.i18n(
          "cx-sx-translation-confirmer-translation-time-lead-section",
          D,
          M
        );
      return k.i18n(
        "cx-sx-translation-confirmer-translation-time-sections",
        D,
        M,
        Object.keys(o.value.missingSections).length
      );
    });
    return (M, C) => {
      const D = q4("i18n");
      return Wm(), Y4(Me(U), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: zo(() => [
          Qt(Me(V), null, {
            default: zo(() => [
              Qt(Me(U), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: zo(() => [
                  Qt(Me(V), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: zo(() => [
                      On("h5", {
                        class: "ma-0 me-1",
                        textContent: cc(Me(r))
                      }, null, 8, Q4),
                      Qt(Me(Hs), {
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
                    default: zo(() => [
                      Qt(Me(n3), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": M.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: zo(() => [
                          Qt(Me(Hs), { icon: p.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              On("div", J4, [
                On("div", null, [
                  On("span", null, [
                    Qt(Me(Hs), {
                      icon: Me(Rf),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    On("span", {
                      class: "pe-3",
                      textContent: cc(w.value)
                    }, null, 8, Z4)
                  ]),
                  On("span", null, [
                    Qt(Me(Hs), {
                      icon: Me(If),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    G4(On("span", e3, null, 512), [
                      [D, [y.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                L.value ? (Wm(), X4("span", {
                  key: 0,
                  class: W4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Me(b)
                  }])
                }, [
                  Qt(Me(Hs), {
                    icon: Me(hx),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  On("span", {
                    textContent: cc(L.value)
                  }, null, 8, t3)
                ], 2)) : K4("", !0)
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
const a3 = window.Vue.resolveDirective, ho = window.Vue.createElementVNode, ki = window.Vue.withDirectives, i3 = window.Vue.toDisplayString, r3 = window.Vue.createTextVNode, uc = window.Vue.unref, dc = window.Vue.withCtx, gc = window.Vue.openBlock, mc = window.Vue.createBlock;
window.Vue.createCommentVNode;
const l3 = { class: "pa-4" }, c3 = { class: "flex pt-2" }, u3 = window.Codex.CdxButton, d3 = window.Vue.ref, g3 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = ps(), a = ld(), r = d3(!1), { currentTranslation: l } = Xt(), c = () => x(this, null, function* () {
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
      const d = a3("i18n");
      return gc(), mc(uc(Vt), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: dc(() => [
          ho("div", c3, [
            r.value ? (gc(), mc(uc(mt), { key: 1 })) : (gc(), mc(uc(u3), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: dc(() => [
                r3(i3(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: dc(() => [
          ho("div", l3, [
            ki(ho("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ki(ho("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            ho("p", null, [
              ki(ho("strong", null, null, 512), [
                [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ki(ho("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
};
const Xm = window.Vue.unref, m3 = window.Vue.createVNode, Km = window.Vue.toDisplayString, $i = window.Vue.createElementVNode, p3 = window.Vue.openBlock, h3 = window.Vue.createElementBlock, f3 = { class: "cx-translation-confirmer-featured-collection-banner ma-4 px-4 py-3" }, w3 = { class: "cx-translation-confirmer-featured-collection-banner__header" }, v3 = { class: "cx-translation-confirmer-featured-collection-banner__header-text" }, _3 = { class: "cx-translation-confirmer-featured-collection-banner__body" }, S3 = window.Vue.computed, y3 = window.Codex.CdxIcon, x3 = {
  __name: "SXTranslationConfirmerFeaturedCollectionBanner",
  setup(e) {
    const { featuredCollection: t } = Wt(), n = S3(() => {
      var o;
      return (o = t.value) == null ? void 0 : o.name;
    });
    return (o, s) => (p3(), h3("div", f3, [
      $i("div", w3, [
        m3(Xm(y3), {
          icon: Xm(Ju),
          size: "small",
          class: "cx-translation-confirmer-featured-collection-banner__header-icon me-2"
        }, null, 8, ["icon"]),
        $i("span", v3, Km(o.$i18n("cx-featured-collection-confirmation-banner-title")), 1)
      ]),
      $i("div", _3, [
        $i("p", null, Km(n.value), 1)
      ])
    ]));
  }
}, C3 = window.Vuex.useStore;
let Vi = [];
const cd = () => {
  const e = C3();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Vi.includes(o) ? Promise.resolve() : (Vi.push(o), ko.fetchLanguageTitles(t, n).then((s) => {
      Vi = Vi.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, b3 = window.Vue.ref, Oo = b3(null), Nw = () => {
  const e = () => x(void 0, null, function* () {
    var n, o;
    Oo.value || (yield $r.fetchCXServerToken().then((s) => {
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
const Ym = window.Vue.resolveDirective, Ei = window.Vue.createElementVNode, Qm = window.Vue.withDirectives, Hn = window.Vue.unref, Li = window.Vue.withCtx, Sn = window.Vue.createVNode, Ti = window.Vue.openBlock, Jm = window.Vue.createElementBlock, k3 = window.Vue.createCommentVNode, Zm = window.Vue.createBlock, $3 = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, V3 = { class: "mb-0" }, E3 = { class: "sx-translation-confirmer__article-image flex justify-center" }, L3 = ["src"], T3 = { class: "ma-3" }, ep = window.Vue.computed, A3 = window.Vue.inject, D3 = window.Vue.onBeforeUnmount, tp = window.Vue.ref, P3 = window.Vue.watch, B3 = window.Vuex.useStore, F3 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = B3(), { currentSourcePage: n } = ot(), { previousRoute: o } = Fe(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: c
    } = P(), { inFeaturedCollection: u } = Zu(), i = A3("breakpoints"), d = ep(() => i.value.nextBreakpoint), g = ep(
      () => {
        var _;
        return (_ = n.value) == null ? void 0 : _.getImage(d.value);
      }
    ), m = tp(!1);
    P3(
      () => {
        var _;
        return (_ = n.value) == null ? void 0 : _.wikidataId;
      },
      (_) => x(this, null, function* () {
        const k = yield u([_]);
        m.value = k[_];
      }),
      { immediate: !0 }
    );
    const { fetchTranslationsByStatus: p } = ms(), h = cd();
    p("draft"), h(s.value, r.value), id(), Nw()(), jf()(a.value);
    const v = nt(), y = () => {
      const _ = ["dashboard", "sx-article-search"];
      !o.value || !_.includes(o.value) ? v.push({ name: "dashboard" }) : v.push({ name: o.value });
    };
    D3(() => {
      const _ = v.currentRoute.value.name;
      (_ === "dashboard" || _ === "sx-article-search") && c();
    });
    const b = tp(!1);
    return (_, k) => {
      const L = Ym("i18n"), M = Ym("i18n-html");
      return Ti(), Jm("section", $3, [
        Sn(Hn(U), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Li(() => [
            Sn(Hn(V), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Li(() => [
                Qm(Ei("h5", V3, null, 512), [
                  [L, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            Sn(Hn(V), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Li(() => [
                Sn(Hn(Ke), {
                  class: "pa-0",
                  type: "icon",
                  icon: Hn(Sr),
                  "icon-size": 20,
                  onClick: y
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Ei("div", E3, [
          g.value ? (Ti(), Jm("img", {
            key: 0,
            src: g.value
          }, null, 8, L3)) : (Ti(), Zm(Hn(et), {
            key: 1,
            size: "120",
            icon: Hn(nf),
            "icon-color": _.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        Sn(s3),
        m.value ? (Ti(), Zm(x3, { key: 0 })) : k3("", !0),
        Sn(Fw),
        Sn(R4, {
          onOpenTranslationConfirmationDialog: k[0] || (k[0] = (C) => b.value = !0)
        }),
        Sn(Hn(U), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: Li(() => [
            Ei("p", T3, [
              Qm(Ei("small", null, null, 512), [
                [M, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        Sn(g3, {
          modelValue: b.value,
          "onUpdate:modelValue": k[1] || (k[1] = (C) => b.value = C)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const N3 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: F3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, M3 = window.Vue.resolveComponent, U3 = window.Vue.createVNode, I3 = window.Vue.normalizeClass, R3 = window.Vue.openBlock, z3 = window.Vue.createElementBlock;
function O3(e, t, n, o, s, a) {
  const r = M3("sx-translation-confirmer");
  return R3(), z3("main", {
    class: I3(["sx-translation-confirmer-view", a.classes])
  }, [
    U3(r)
  ], 2);
}
const j3 = /* @__PURE__ */ pe(N3, [["render", O3]]);
const H3 = window.Vue.toDisplayString, np = window.Vue.unref, q3 = window.Vue.createVNode, G3 = window.Vue.createTextVNode, W3 = window.Vue.createElementVNode, X3 = window.Vue.openBlock, K3 = window.Vue.createElementBlock, Y3 = { class: "sx-section-selector-view-article-item" }, Q3 = ["href"], J3 = window.Codex.CdxIcon, op = {
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
    return (t, n) => (X3(), K3("span", Y3, [
      W3("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        G3(H3(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        q3(np(J3), {
          size: "x-small",
          icon: np(Ba)
        }, null, 8, ["icon"])
      ], 8, Q3)
    ]));
  }
};
const Z3 = window.Vue.resolveDirective, Ai = window.Vue.createElementVNode, pc = window.Vue.withDirectives, fo = window.Vue.unref, eL = window.Vue.toDisplayString, Di = window.Vue.withCtx, qs = window.Vue.createVNode, tL = window.Vue.openBlock, nL = window.Vue.createElementBlock, oL = { class: "sx-section-selector__header pa-4" }, sL = { class: "sx-section-selector__header-text ma-0" }, aL = ["textContent"], iL = { class: "pt-0 ma-0" }, rL = { class: "ma-0" }, lL = window.Codex.CdxButton, cL = window.Codex.CdxIcon, uL = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Le();
    return (n, o) => {
      const s = Z3("i18n");
      return tL(), nL("div", oL, [
        qs(fo(U), { class: "ma-0 pb-3" }, {
          default: Di(() => [
            qs(fo(V), null, {
              default: Di(() => {
                var a;
                return [
                  pc(Ai("h6", sL, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Ai("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: eL((a = fo(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, aL)
                ];
              }),
              _: 1
            }),
            qs(fo(V), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Di(() => [
                qs(fo(lL), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Di(() => [
                    qs(fo(cL), { icon: fo(ds) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        pc(Ai("h4", iL, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        pc(Ai("p", rL, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, sp = window.Vue.renderSlot, dL = window.Vue.renderList, gL = window.Vue.Fragment, hc = window.Vue.openBlock, ap = window.Vue.createElementBlock, Pi = window.Vue.unref, ip = window.Vue.createVNode, rp = window.Vue.withCtx, mL = window.Vue.createBlock, pL = { class: "sx-section-selector__sections-list ma-0 pa-0" }, hL = window.Codex.CdxButton, fL = window.Codex.CdxIcon, Mw = {
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
    return (t, n) => (hc(), ap("ul", pL, [
      sp(t.$slots, "before-list"),
      (hc(!0), ap(gL, null, dL(e.sections, (o) => (hc(), mL(Pi(U), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: rp(() => [
          ip(Pi(hL), {
            weight: "quiet",
            class: "col justify-start items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: rp(() => [
              sp(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle,
                isEasy: o.isEasy
              }),
              ip(Pi(fL), {
                icon: Pi(gs),
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
}, wL = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const vL = window.Vue.resolveDirective, Bi = window.Vue.createElementVNode, Fi = window.Vue.withDirectives, Ut = window.Vue.unref, Ni = window.Vue.openBlock, fc = window.Vue.createBlock, _L = window.Vue.createCommentVNode, jo = window.Vue.withCtx, Gs = window.Vue.createVNode, SL = window.Vue.toDisplayString, yL = window.Vue.createTextVNode, xL = window.Vue.createElementBlock, CL = { class: "sx-section-selector__missing-sections py-2" }, bL = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, kL = ["lang", "dir", "innerHTML"], wc = window.Vue.computed, $L = window.Codex.CdxButton, VL = window.Codex.CdxInfoChip, EL = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Le(), { targetLanguageURLParameter: n } = P(), o = wc(() => O.getAutonym(n.value)), s = wc(
      () => {
        var r;
        return Object.keys(((r = t.value) == null ? void 0 : r.missingSections) || {}).length === 0;
      }
    ), a = wc(() => {
      var r;
      return (r = t.value) != null && r.orderedMissingSections ? t.value.orderedMissingSections.map((l) => Ye(de({}, l), {
        isEasy: Lf(
          t.value.getSectionSize(l.sourceTitle)
        )
      })) : [];
    });
    return (r, l) => {
      const c = vL("i18n");
      return Ni(), xL("section", CL, [
        Fi(Bi("h4", bL, null, 512), [
          [c, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (Ni(), fc(Ut(U), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: jo(() => [
            Gs(Ut(V), {
              class: "py-6 justify-center",
              innerHTML: Ut(wL)
            }, null, 8, ["innerHTML"]),
            Gs(Ut(V), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: jo(() => [
                Fi(Bi("h6", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Gs(Ut(V), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: jo(() => [
                Fi(Bi("p", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Gs(Ut(V), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: jo(() => [
                Gs(Ut($L), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: l[1] || (l[1] = (u) => r.$emit("close"))
                }, {
                  default: jo(() => [
                    yL(SL(r.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Ni(), fc(Mw, {
          key: 0,
          sections: a.value,
          onSelectSection: l[0] || (l[0] = (u) => r.$emit("select-section", u))
        }, {
          default: jo(({ sourceSection: u, isEasy: i }) => {
            var d, g;
            return [
              Bi("h5", {
                class: "ma-0",
                lang: (d = Ut(t)) == null ? void 0 : d.sourceLanguage,
                dir: Ut(O.getDir)((g = Ut(t)) == null ? void 0 : g.sourceLanguage),
                innerHTML: u
              }, null, 8, kL),
              i ? Fi((Ni(), fc(Ut(VL), {
                key: 0,
                class: "sx-section-selector__easy-section-badge"
              }, null, 512)), [
                [c, void 0, "cx-sx-section-selector-easy-section-badge"]
              ]) : _L("", !0)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const LL = window.Vue.resolveDirective, Ho = window.Vue.createElementVNode, TL = window.Vue.withDirectives, yt = window.Vue.unref, AL = window.Vue.toDisplayString, Mi = window.Vue.createVNode, Ui = window.Vue.withCtx, DL = window.Vue.openBlock, PL = window.Vue.createElementBlock, BL = { class: "sx-section-selector__present-sections py-2" }, FL = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, NL = { class: "sx-section-selector__present-section-button-content" }, ML = ["textContent"], UL = { class: "sx-section-selector__present-section-button-content" }, IL = ["lang", "dir", "innerHTML"], RL = ["lang", "dir", "innerHTML"], zL = window.Vue.computed, OL = window.Codex.CdxButton, jL = window.Codex.CdxIcon, lp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Le(), { targetLanguageURLParameter: n } = P(), o = zL(() => O.getAutonym(n.value));
    return (s, a) => {
      var l;
      const r = LL("i18n");
      return DL(), PL("section", BL, [
        TL(Ho("h4", FL, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        Mi(Mw, {
          sections: ((l = yt(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[1] || (a[1] = (c) => s.$emit("select-section", c))
        }, {
          "before-list": Ui(() => [
            Mi(yt(U), {
              tag: "li",
              class: "ma-0"
            }, {
              default: Ui(() => [
                Mi(yt(OL), {
                  weight: "quiet",
                  class: "col justify-start items-center py-3 px-4",
                  "aria-label": s.$i18n("sx-section-selector-next-button-aria-label"),
                  onClick: a[0] || (a[0] = (c) => s.$emit("select-section", yt(no).LEAD_SECTION_DUMMY_TITLE))
                }, {
                  default: Ui(() => [
                    Ho("div", NL, [
                      Ho("h5", {
                        class: "sx-section-selector__present-section-button-source",
                        textContent: AL(s.$i18n("cx-sx-present-lead-section-label"))
                      }, null, 8, ML)
                    ]),
                    Mi(yt(jL), {
                      icon: yt(gs),
                      class: "ms-auto"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          default: Ui(({ sourceSection: c, targetSection: u }) => {
            var i, d, g, m;
            return [
              Ho("div", UL, [
                Ho("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = yt(t)) == null ? void 0 : i.sourceLanguage,
                  dir: yt(O.getDir)((d = yt(t)) == null ? void 0 : d.sourceLanguage),
                  innerHTML: c
                }, null, 8, IL),
                Ho("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = yt(t)) == null ? void 0 : g.targetLanguage,
                  dir: yt(O.getDir)((m = yt(t)) == null ? void 0 : m.targetLanguage),
                  innerHTML: u
                }, null, 8, RL)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Re = window.Vue.createVNode, vc = window.Vue.openBlock, cp = window.Vue.createBlock, up = window.Vue.createCommentVNode, HL = window.Vue.resolveDirective, qn = window.Vue.createElementVNode, Ws = window.Vue.withDirectives, rt = window.Vue.unref, yn = window.Vue.withCtx, qL = window.Vue.normalizeClass, dp = window.Vue.toDisplayString, gp = window.Vue.createTextVNode, GL = window.Vue.createElementBlock, WL = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, XL = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, KL = { class: "sx-section-selector__additional-consideration-title" }, YL = { href: "#" }, QL = { class: "sx-section-selector__additional-consideration-title" }, JL = { href: "#" }, Xs = window.Vue.computed, ZL = window.Vue.inject, e5 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = ZL("breakpoints"), n = Xs(() => t.value.desktopAndUp), { sectionSuggestion: o } = Le(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = P(), c = Xs(() => O.getAutonym(s.value)), u = Xs(() => O.getAutonym(a.value)), i = Xs(
      () => {
        var y;
        return Z.getPageUrl(s.value, (y = o.value) == null ? void 0 : y.sourceTitle);
      }
    ), d = Xs(
      () => {
        var y;
        return Z.getPageUrl(a.value, (y = o.value) == null ? void 0 : y.targetTitle);
      }
    ), g = nt(), m = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: p } = Xt(), h = ps(), f = ld(), { selectPageSectionByTitle: w } = Nr(), v = (y) => {
      l(y), p.value ? (f(), h()) : (w(y), g.push({ name: "sx-content-comparator" }));
    };
    return mw.cx.eventlogging.stats.selectSectionAccess(!n.value), (y, b) => {
      const _ = HL("i18n");
      return vc(), GL("section", WL, [
        Re(uL, { onClose: m }),
        Re(Fw),
        Re(rt(U), {
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
                Re(EL, {
                  onSelectSection: v,
                  onClose: m
                }),
                n.value ? up("", !0) : (vc(), cp(lp, {
                  key: 0,
                  onSelectSection: v
                })),
                qn("section", {
                  class: qL(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Ws(qn("h4", XL, null, 512), [
                    [_, [
                      u.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Re(rt(U), {
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
                          Re(op, {
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
                          Re(op, {
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
                Re(rt(U), {
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
                        qn("h6", KL, [
                          Re(rt(et), {
                            icon: rt(B0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          gp(" " + dp(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Ws(qn("p", null, null, 512), [
                          [_, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Ws(qn("a", YL, null, 512), [
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
                        qn("h6", QL, [
                          Re(rt(et), {
                            icon: rt(P0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          gp(" " + dp(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Ws(qn("p", null, null, 512), [
                          [_, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Ws(qn("a", JL, null, 512), [
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
            n.value ? (vc(), cp(rt(V), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: yn(() => [
                Re(lp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: v
                })
              ]),
              _: 1
            })) : up("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, t5 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: e5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, n5 = window.Vue.resolveComponent, o5 = window.Vue.createVNode, s5 = window.Vue.normalizeClass, a5 = window.Vue.openBlock, i5 = window.Vue.createElementBlock;
function r5(e, t, n, o, s, a) {
  const r = n5("sx-section-selector");
  return a5(), i5("main", {
    class: s5(["sx-section-selector-view", a.classes])
  }, [
    o5(r)
  ], 2);
}
const l5 = /* @__PURE__ */ pe(t5, [["render", r5]]), Ii = window.Vue.computed, c5 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = P(), n = Ii(
    () => O.getAutonym(e.value)
  ), o = Ii(
    () => O.getAutonym(t.value)
  ), { target: s, PUBLISHING_TARGETS: a } = Tt(), r = Ii(
    () => s.value === a.EXPAND
  ), l = he();
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
const mp = window.Vue.unref, u5 = window.Vue.createVNode, d5 = window.Vue.openBlock, g5 = window.Vue.createElementBlock, m5 = { class: "sx-content-comparator__content-type-selector" }, p5 = window.Vue.watchEffect, h5 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = c5();
    return p5(() => {
      a.value.map((l) => l.value).includes(n.selection) || s(a.value[0].value);
    }), (r, l) => (d5(), g5("div", m5, [
      u5(mp(Ea), {
        items: mp(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Ri = window.Vue.computed, Uw = () => {
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
  ), { sourceSection: s } = ne(), a = Ri(() => {
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
const zi = window.Vue.createVNode, xn = window.Vue.unref, f5 = window.Vue.resolveDirective, w5 = window.Vue.withDirectives, Ks = window.Vue.openBlock, pp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Oi = window.Vue.withCtx, _c = window.Vue.createBlock, v5 = window.Vue.normalizeClass, _5 = {
  key: 0,
  class: "ma-0 pa-0"
}, S5 = ["lang", "dir", "innerHTML"], hp = window.Vue.ref, ji = window.Vue.computed, y5 = window.Vue.onMounted, x5 = {
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
    const n = e, o = t, s = hp(!1), { sectionSuggestion: a, activeSectionTargetTitle: r } = Le(), { isPresentLeadSection: l } = ht(), { sectionURLParameter: c } = P(), u = ji(
      () => (g.value || "").replace(/ /g, "_")
    ), i = (f) => o("update:contentTypeSelection", f), { targetSectionAnchor: d } = Uw(), g = ji(
      () => {
        var f;
        return (((f = a.value) == null ? void 0 : f.sourceSections) || []).find(
          (w) => w === c.value
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
    }), p = ji(
      () => Z.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), h = hp(null);
    return y5(() => {
      new IntersectionObserver(
        ([w]) => {
          s.value = w.intersectionRect.height < w.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(h.value.$el);
    }), (f, w) => {
      const v = f5("i18n");
      return Ks(), _c(xn(U), {
        ref_key: "contentHeader",
        ref: h,
        class: v5(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
        direction: "column",
        align: "stretch",
        reverse: s.value
      }, {
        default: Oi(() => [
          zi(h5, {
            selection: e.contentTypeSelection,
            "onUpdate:selection": i
          }, null, 8, ["selection"]),
          zi(xn(U), {
            justify: "between",
            class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
          }, {
            default: Oi(() => [
              zi(xn(V), null, {
                default: Oi(() => [
                  xn(l) ? w5((Ks(), pp("h3", _5, null, 512)), [
                    [v, void 0, "cx-sx-present-lead-section-label"]
                  ]) : (Ks(), pp("h3", {
                    key: 1,
                    lang: m.value.lang,
                    dir: m.value.dir,
                    class: "ma-0 pa-0",
                    innerHTML: m.value.title
                  }, null, 8, S5))
                ]),
                _: 1
              }),
              zi(xn(V), { shrink: "" }, {
                default: Oi(() => [
                  s.value ? (Ks(), _c(xn(Ke), {
                    key: 0,
                    icon: xn(_r),
                    progressive: "",
                    label: f.$i18n(
                      "cx-sx-content-comparator-content-header-translate-button-label"
                    ),
                    onClick: w[0] || (w[0] = (y) => f.$emit("translation-button-clicked"))
                  }, null, 8, ["icon", "label"])) : (Ks(), _c(xn(Ke), {
                    key: 1,
                    class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                    icon: xn(tf),
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
}, Hi = window.Vue.unref, fp = window.Vue.createVNode, C5 = window.Vue.openBlock, b5 = window.Vue.createElementBlock, k5 = { class: "sx-content-comparator__header-navigation flex items-center" }, $5 = window.Vue.computed, V5 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = P(), o = $5(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Nr(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    };
    return (l, c) => (C5(), b5("div", k5, [
      fp(Hi(Ke), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Hi(L0),
        onClick: a
      }, null, 8, ["icon"]),
      fp(Hi(Ke), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Hi(E0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const wp = window.Vue.toDisplayString, we = window.Vue.unref, E5 = window.Vue.resolveDirective, qi = window.Vue.withDirectives, Cn = window.Vue.openBlock, qo = window.Vue.createElementBlock, Sc = window.Vue.createCommentVNode, L5 = window.Vue.createTextVNode, T5 = window.Vue.createElementVNode, A5 = window.Vue.normalizeClass, yc = window.Vue.withCtx, vp = window.Vue.createVNode, xc = window.Vue.createBlock, D5 = { class: "sx-content-comparator-header__mapped-section" }, P5 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, B5 = { key: 0 }, F5 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, N5 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, M5 = {
  key: 2,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, U5 = window.Vue.computed, I5 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = P(), { activeSectionTargetTitle: n } = Le(), o = he(), { target: s, PUBLISHING_TARGETS: a, setTarget: r } = Tt(), l = U5(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        O.getAutonym(t.value)
      )
    ), { isPresentLeadSection: c } = ht();
    return (u, i) => {
      const d = E5("i18n");
      return Cn(), qo("div", D5, [
        vp(we(U), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: yc(() => [
            vp(we(V), { grow: "" }, {
              default: yc(() => [
                T5("h6", P5, [
                  L5(wp(l.value) + " ", 1),
                  we(s) === we(a).NEW_SECTION ? qi((Cn(), qo("span", B5, null, 512)), [
                    [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : Sc("", !0)
                ]),
                we(c) ? Sc("", !0) : (Cn(), qo("h6", {
                  key: 0,
                  class: A5(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": we(s) === we(a).NEW_SECTION
                  }])
                }, wp(we(n)), 3))
              ]),
              _: 1
            }),
            we(c) ? Sc("", !0) : (Cn(), xc(we(V), {
              key: 0,
              shrink: ""
            }, {
              default: yc(() => [
                we(s) === we(a).EXPAND ? (Cn(), xc(we(Ke), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: we(ef),
                  type: "icon",
                  onClick: i[0] || (i[0] = (g) => we(r)(we(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (Cn(), xc(we(Ke), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: we(M0),
                  type: "icon",
                  onClick: i[1] || (i[1] = (g) => we(r)(we(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            }))
          ]),
          _: 1
        }),
        we(c) ? qi((Cn(), qo("p", F5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-lead-section-clarifications"]
        ]) : we(s) === we(a).EXPAND ? qi((Cn(), qo("p", N5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : qi((Cn(), qo("p", M5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const De = window.Vue.unref, Go = window.Vue.createVNode, R5 = window.Vue.toDisplayString, Zn = window.Vue.createElementVNode, z5 = window.Vue.resolveDirective, Cc = window.Vue.withDirectives, Ys = window.Vue.openBlock, bc = window.Vue.createElementBlock, _p = window.Vue.createCommentVNode, kc = window.Vue.withCtx, Sp = window.Vue.createBlock, O5 = { class: "sx-content-comparator__header pa-4" }, j5 = { class: "row my-1 py-2 mx-0 gap-6" }, H5 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, q5 = { class: "sx-content-comparator-header__titles shrink" }, G5 = ["lang", "dir"], W5 = {
  key: 0,
  class: "sx-content-comparator-header__section-title pa-0 ma-0"
}, X5 = ["lang", "dir", "innerHTML"], K5 = { class: "py-2 mb-1" }, Y5 = /* @__PURE__ */ Zn("br", null, null, -1), Gi = window.Vue.computed, Q5 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = P(), { sourceSection: n } = ne(), { sectionSuggestion: o } = Le(), { isCurrentSectionPresent: s } = ht(), a = Gi(
      () => {
        var u;
        return (u = o.value) == null ? void 0 : u.missingSections.hasOwnProperty(t.value);
      }
    ), r = Gi(() => {
      var u;
      return (u = n.value) == null ? void 0 : u.html;
    }), l = Gi(() => [
      no.LEAD_SECTION_DUMMY_TITLE,
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), c = Gi(
      () => {
        var u;
        return (((u = o.value) == null ? void 0 : u.sourceSections) || []).find(
          (i) => i === t.value
        );
      }
    );
    return (u, i) => {
      var g;
      const d = z5("i18n");
      return Ys(), bc("div", O5, [
        Go(De(Ke), {
          class: "py-2 pa-0",
          icon: De(T0),
          label: u.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (m) => u.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Zn("div", j5, [
          Zn("div", H5, [
            Zn("div", q5, [
              Zn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: De(o).sourceLanguage,
                dir: De(O.getDir)(De(o).sourceLanguage)
              }, R5(De(o).sourceTitle), 9, G5),
              (g = De(n)) != null && g.isLeadSection ? Cc((Ys(), bc("h2", W5, null, 512)), [
                [d, void 0, "cx-sx-present-lead-section-label"]
              ]) : (Ys(), bc("h2", {
                key: 1,
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: De(o).sourceLanguage,
                dir: De(O.getDir)(De(o).sourceLanguage),
                innerHTML: c.value
              }, null, 8, X5))
            ]),
            Go(V5, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          Zn("div", K5, [
            Go(De(Ke), {
              class: "sx-content-comparator-header__translation-button",
              icon: De(_r),
              progressive: "",
              label: u.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (m) => u.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (Ys(), Sp(De(U), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: kc(() => [
            Go(De(V), {
              shrink: "",
              class: "pe-2"
            }, {
              default: kc(() => [
                Go(De(et), { icon: De(F0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Go(De(V), { class: "ma-0" }, {
              default: kc(() => [
                Cc(Zn("strong", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                Y5,
                Cc(Zn("span", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : _p("", !0),
        De(s) ? (Ys(), Sp(I5, { key: 1 })) : _p("", !0)
      ]);
    };
  }
};
const yp = window.Vue.toDisplayString, J5 = window.Vue.createElementVNode, xp = window.Vue.openBlock, Cp = window.Vue.createElementBlock, Z5 = window.Vue.createCommentVNode, eT = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, tT = ["textContent"], nT = ["textContent"], Iw = {
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
    return (t, n) => (xp(), Cp("section", eT, [
      J5("h5", {
        textContent: yp(e.placeholderTitle)
      }, null, 8, tT),
      e.placeholderSubtitle ? (xp(), Cp("p", {
        key: 0,
        textContent: yp(e.placeholderSubtitle)
      }, null, 8, nT)) : Z5("", !0)
    ]));
  }
}, oT = (e, t, n) => {
  const o = t.indexOf(e);
  return t.slice(o + 1).map((a) => n[a]).filter(Boolean)[0] || null;
}, sT = ({
  sourceSectionTitle: e,
  sourceSectionTitles: t,
  targetSectionTitles: n,
  presentSectionMappings: o,
  targetAppendixSectionTitles: s
}) => {
  const a = oT(
    e,
    t,
    o
  );
  return a !== null ? a : n.find(
    (l) => s.includes(l)
  ) || null;
}, $c = window.Vue.computed, aT = window.Vue.createApp, iT = window.Vuex.useStore, rT = () => {
  const e = iT(), { sectionSuggestion: t } = Le(), { currentTargetPage: n } = ot(), { sectionURLParameter: o } = P(), s = he(), a = () => aT(
    Iw,
    {
      placeholderTitle: s.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, r = $c(() => {
    const { appendixSectionTitles: u } = e.state.suggestions;
    return u[t.value.targetLanguage] || [];
  }), l = $c(
    () => sT({
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
  return $c(() => {
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
const Vc = window.Vue.createVNode, lt = window.Vue.unref, Wo = window.Vue.openBlock, bp = window.Vue.createBlock, kp = window.Vue.createCommentVNode, Wi = window.Vue.createElementVNode, Ec = window.Vue.Fragment, Xi = window.Vue.createElementBlock, lT = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, cT = { class: "sx-content-comparator__source-content" }, uT = ["lang", "dir", "innerHTML"], dT = ["lang", "dir", "innerHTML"], gT = ["innerHTML"], mT = window.Vue.ref, $p = window.Vue.computed, Vp = window.Vue.watch, pT = window.Vue.inject, hT = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = Tt(), n = nt(), o = mT("source_section"), { logDashboardTranslationStartEvent: s } = rd(), a = ps(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      s(), a();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = P(), { sourceSectionContent: i, targetSectionContent: d } = Uw(), g = rT(), { sectionSuggestion: m } = Le(), { isCurrentSectionPresent: p } = ht(), h = $p(() => m.value.targetTitle), f = Pw();
    Vp(
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
    ), Vp(p, t, { immediate: !0 });
    const w = pT("breakpoints"), v = $p(() => w.value.mobile);
    return mw.cx.eventlogging.stats.sectionCompareAccess(v.value), (y, b) => (Wo(), Xi("section", lT, [
      Vc(Q5, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      Vc(x5, {
        "content-type-selection": o.value,
        "onUpdate:contentTypeSelection": b[0] || (b[0] = (_) => o.value = _),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      Wi("section", cT, [
        o.value === "source_section" ? (Wo(), Xi(Ec, { key: 0 }, [
          lt(i) ? kp("", !0) : (Wo(), bp(lt(mt), { key: 0 })),
          Wi("section", {
            lang: lt(c),
            dir: lt(O.getDir)(lt(c)),
            class: "pt-2 px-4",
            innerHTML: lt(i)
          }, null, 8, uT)
        ], 64)) : o.value === "target_article" ? (Wo(), Xi(Ec, { key: 1 }, [
          lt(g) ? kp("", !0) : (Wo(), bp(lt(mt), { key: 0 })),
          Wi("article", {
            lang: lt(u),
            dir: lt(O.getDir)(lt(u)),
            class: "px-4",
            innerHTML: lt(g)
          }, null, 8, dT)
        ], 64)) : (Wo(), Xi(Ec, { key: 2 }, [
          Wi("section", {
            class: "pa-4",
            innerHTML: lt(d)
          }, null, 8, gT),
          Vc(Iw, {
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
}, fT = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: hT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, wT = window.Vue.resolveComponent, vT = window.Vue.createVNode, _T = window.Vue.normalizeClass, ST = window.Vue.openBlock, yT = window.Vue.createElementBlock;
function xT(e, t, n, o, s, a) {
  const r = wT("sx-content-comparator");
  return ST(), yT("main", {
    class: _T(["sx-content-comparator-view", a.classes])
  }, [
    vT(r)
  ], 2);
}
const CT = /* @__PURE__ */ pe(fT, [["render", xT]]);
const bT = window.Vue.resolveDirective, Qs = window.Vue.createElementVNode, Ep = window.Vue.withDirectives, Ki = window.Vue.unref, Lc = window.Vue.createVNode, Lp = window.Vue.toDisplayString, Tp = window.Vue.createTextVNode, Js = window.Vue.withCtx, kT = window.Vue.openBlock, $T = window.Vue.createBlock, VT = { class: "mw-ui-dialog__header px-4 py-3" }, ET = { class: "mw-ui-dialog__header-title" }, LT = { class: "pa-4" }, TT = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Ap = window.Codex.CdxButton, AT = {
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
      const c = bT("i18n");
      return kT(), $T(Ki(Vt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: Js(() => [
          Qs("div", VT, [
            Ep(Qs("span", ET, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Js(() => [
          Qs("div", TT, [
            Lc(Ki(Ap), {
              weight: "quiet",
              onClick: s
            }, {
              default: Js(() => [
                Tp(Lp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Lc(Ki(Ap), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Js(() => [
                Tp(Lp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Js(() => [
          Lc(Ki(vr)),
          Qs("div", LT, [
            Ep(Qs("span", null, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, DT = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => xo(a)
  );
  return s && lf(s) ? $t.parseTemplateWikitext(
    af(s),
    n,
    t
  ) : Promise.resolve(null);
}, Rw = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => xo(a)
  );
  return s ? $t.parseTemplateWikitext(
    af(s),
    n,
    t
  ) : Promise.resolve(null);
}, PT = window.Vuex.useStore, ud = () => {
  const e = PT(), { sourceSection: t } = ne(), { getCurrentTitleByLanguage: n } = cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = P(), a = Nw(), r = (i, d, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[d] = g;
      return;
    }
    const m = t.value.getContentTranslationUnitById(i);
    m instanceof gt ? m.blockTemplateProposedTranslations[d] = g : m instanceof eo && m.addProposedTranslation(d, g);
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
    m instanceof gt && (m.setBlockTemplateAdaptationInfoByHtml(
      d,
      p
    ), p = (yield DT(
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
}, BT = window.Vuex.useStore, FT = () => {
  const { sourceSection: e } = ne(), t = BT(), { translateTranslationUnitById: n } = ud();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function NT(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const MT = window.Vue.resolveDirective, dt = window.Vue.createElementVNode, Yi = window.Vue.withDirectives, je = window.Vue.unref, Tc = window.Vue.createVNode, bn = window.Vue.withCtx, UT = window.Vue.renderList, IT = window.Vue.Fragment, Qi = window.Vue.openBlock, RT = window.Vue.createElementBlock, zT = window.Vue.toDisplayString, Ac = window.Vue.createBlock, Dp = window.Vue.createCommentVNode, OT = { class: "mw-ui-dialog__header pa-4" }, jT = { class: "row ma-0 py-2" }, HT = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, qT = { class: "mb-0" }, GT = { class: "col shrink justify-center" }, WT = { class: "pb-2 mb-0" }, XT = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, KT = ["dir", "lang", "innerHTML"], YT = ["textContent"], QT = ["innerHTML"], JT = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, ZT = /* @__PURE__ */ dt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), eA = ["innerHTML"], Dc = window.Vue.computed, tA = window.Vuex.useStore, nA = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = ie.EMPTY_TEXT_PROVIDER_KEY, s = ie.ORIGINAL_TEXT_PROVIDER_KEY, a = tA(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: c
    } = ne(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: i
    } = P(), d = Dc(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        u.value,
        i.value
      )
    ), g = Dc(() => {
      const b = [s, o];
      return d.value.filter(
        (_) => !b.includes(_)
      );
    }), m = Dc(
      () => l.value ? r.value.proposedTitleTranslations : c.value.proposedTranslations
    ), p = FT(), h = (b) => {
      p(b), w();
    }, f = ie.getMTProviderLabel, w = () => n("update:active", !1), v = he(), y = NT(
      v.i18n("cx-tools-mt-noservices")
    );
    return (b, _) => {
      const k = MT("i18n");
      return e.active ? (Qi(), Ac(je(Vt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: bn(() => [
          dt("div", OT, [
            dt("div", jT, [
              dt("div", HT, [
                Yi(dt("h4", qT, null, 512), [
                  [k, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              dt("div", GT, [
                Tc(je(Ke), {
                  type: "icon",
                  icon: je(Sr),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            Yi(dt("h6", WT, null, 512), [
              [k, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: bn(() => [
          Tc(je(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: _[0] || (_[0] = (L) => h(je(s)))
          }, {
            header: bn(() => [
              Yi(dt("h5", XT, null, 512), [
                [k, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: bn(() => [
              dt("p", {
                dir: je(O.getDir)(je(u)),
                lang: je(u),
                innerHTML: m.value[je(s)]
              }, null, 8, KT)
            ]),
            _: 1
          }),
          (Qi(!0), RT(IT, null, UT(g.value, (L) => (Qi(), Ac(je(Ze), {
            key: L,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (M) => h(L)
          }, {
            header: bn(() => [
              dt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: zT(je(f)(L))
              }, null, 8, YT)
            ]),
            default: bn(() => [
              dt("p", {
                innerHTML: m.value[L]
              }, null, 8, QT)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Tc(je(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: _[1] || (_[1] = (L) => h(je(o)))
          }, {
            header: bn(() => [
              Yi(dt("h5", JT, null, 512), [
                [k, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: bn(() => [
              ZT
            ]),
            _: 1
          }),
          g.value.length ? Dp("", !0) : (Qi(), Ac(je(Ze), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: bn(() => [
              dt("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: je(y)
              }, null, 8, eA)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Dp("", !0);
    };
  }
}, oA = window.Vuex.useStore, hs = () => {
  const { sourceSection: e } = ne(), t = oA(), { translateTranslationUnitById: n } = ud(), { currentMTProvider: o } = Fe(t), s = (l) => x(void 0, null, function* () {
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
const Pp = window.Vue.toDisplayString, Pc = window.Vue.createElementVNode, Ji = window.Vue.unref, sA = window.Vue.createVNode, aA = window.Vue.normalizeClass, iA = window.Vue.withCtx, rA = window.Vue.openBlock, lA = window.Vue.createBlock, cA = ["href"], uA = ["textContent"], dA = ["textContent"], wo = window.Vue.computed, Bp = "sx-sentence-selector__section-title", gA = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ne(), { currentSourcePage: o, currentTargetPageTitle: s } = ot(), { sourceLanguageURLParameter: a } = P(), { isPresentLeadSection: r } = ht(), l = wo(() => {
      var f;
      return (f = o.value) == null ? void 0 : f.title;
    }), c = wo(
      () => {
        var f;
        return ((f = t.value) == null ? void 0 : f.title) || l.value;
      }
    ), u = wo(
      () => Z.getPageUrl(a.value, l.value)
    ), i = wo(
      () => {
        var f;
        return !!((f = t.value) != null && f.translatedTitle);
      }
    ), d = wo(
      () => i.value ? "translated" : "selected"
    ), g = wo(() => {
      const f = [Bp];
      return n.value && !r.value && f.push(`${Bp}--${d.value}`), f;
    }), { selectTranslationUnitById: m } = hs(), p = () => m(0), h = wo(
      () => r.value ? s.value : c.value
    );
    return (f, w) => (rA(), lA(Ji(V), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: iA(() => [
        Pc("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Pc("strong", {
            textContent: Pp(l.value)
          }, null, 8, uA),
          sA(Ji(et), {
            icon: Ji(tf),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, cA),
        Pc("h2", {
          class: aA(["pa-0 ma-0", g.value]),
          onClick: w[0] || (w[0] = (v) => Ji(r) ? p : null),
          textContent: Pp(h.value)
        }, null, 10, dA)
      ]),
      _: 1
    }));
  }
};
const kn = window.Vue.unref, Zs = window.Vue.createVNode, Zi = window.Vue.withCtx, Fp = window.Vue.toDisplayString, Np = window.Vue.createTextVNode, mA = window.Vue.openBlock, pA = window.Vue.createBlock, Mp = window.Vue.computed, Bc = window.Codex.CdxButton, Up = window.Codex.CdxIcon, zw = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = ne(), { isPresentLeadSection: s } = ht(), a = Mp(
      () => {
        var l;
        return (l = t.value) == null ? void 0 : l.isSelectedTranslationUnitLast;
      }
    ), r = Mp(
      () => s.value || n.value
    );
    return (l, c) => (mA(), pA(kn(U), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Zi(() => [
        Zs(kn(Bc), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": l.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: r.value,
          onClick: c[0] || (c[0] = (u) => l.$emit("select-previous-segment"))
        }, {
          default: Zi(() => [
            Zs(kn(Up), {
              class: "me-1",
              icon: kn(Qu)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Zs(kn(Bc), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !kn(o),
          onClick: c[1] || (c[1] = (u) => l.$emit("apply-translation"))
        }, {
          default: Zi(() => [
            Np(Fp(l.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Zs(kn(Bc), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: a.value,
          onClick: c[2] || (c[2] = (u) => l.$emit("skip-translation"))
        }, {
          default: Zi(() => [
            Np(Fp(l.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Zs(kn(Up), {
              class: "ms-1",
              size: "small",
              icon: kn(gs)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const vo = window.Vue.unref, hA = window.Vue.toDisplayString, ea = window.Vue.createVNode, er = window.Vue.withCtx, fA = window.Vue.openBlock, wA = window.Vue.createBlock, Fc = window.Vue.computed, vA = window.Vuex.useStore, _A = window.Codex.CdxButton, SA = window.Codex.CdxIcon, yA = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = vA(), n = Fc(() => t.state.application.currentMTProvider), o = he(), s = Fc(() => ({
      [ie.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ie.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Fc(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ie.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (fA(), wA(vo(V), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: er(() => [
        ea(vo(U), { class: "ma-0 ps-5 pb-4" }, {
          default: er(() => [
            ea(vo(V), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: hA(a.value)
            }, null, 8, ["textContent"]),
            ea(vo(V), {
              shrink: "",
              class: "pe-5"
            }, {
              default: er(() => [
                ea(vo(_A), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (c) => r.$emit("configure-options"))
                }, {
                  default: er(() => [
                    ea(vo(SA), {
                      class: "pa-0",
                      icon: vo(Yu)
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
const It = window.Vue.unref, Gn = window.Vue.createVNode, xA = window.Vue.resolveDirective, Ip = window.Vue.createElementVNode, CA = window.Vue.withDirectives, Rp = window.Vue.toDisplayString, zp = window.Vue.createTextVNode, ta = window.Vue.withCtx, bA = window.Vue.openBlock, kA = window.Vue.createElementBlock, $A = { class: "mt-retry-body pb-5" }, VA = { class: "retry-body__message" }, Op = window.Codex.CdxButton, Nc = window.Codex.CdxIcon, EA = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = xA("i18n");
      return bA(), kA("div", $A, [
        Ip("div", VA, [
          Gn(It(Nc), {
            class: "me-2",
            icon: It(mx)
          }, null, 8, ["icon"]),
          CA(Ip("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Gn(It(U), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: ta(() => [
            Gn(It(V), { cols: "6" }, {
              default: ta(() => [
                Gn(It(Op), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: ta(() => [
                    Gn(It(Nc), {
                      class: "me-1",
                      icon: It(zf)
                    }, null, 8, ["icon"]),
                    zp(" " + Rp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Gn(It(V), { cols: "6" }, {
              default: ta(() => [
                Gn(It(Op), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: ta(() => [
                    Gn(It(Nc), {
                      class: "me-1",
                      icon: It(bx)
                    }, null, 8, ["icon"]),
                    zp(" " + Rp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Xo = window.Vue.createVNode, ct = window.Vue.unref, na = window.Vue.openBlock, LA = window.Vue.createElementBlock, TA = window.Vue.createCommentVNode, tr = window.Vue.createBlock, AA = window.Vue.normalizeClass, DA = window.Vue.normalizeStyle, oa = window.Vue.withCtx, PA = window.Vue.toDisplayString, BA = window.Vue.createTextVNode, FA = window.Vue.normalizeProps, NA = window.Vue.guardReactiveProps, MA = ["lang", "dir", "innerHTML"], Mc = window.Vue.ref, UA = window.Vue.onMounted, IA = window.Vue.onBeforeUnmount, Uc = window.Vue.computed, RA = window.Vue.nextTick, zA = window.Vuex.useStore, OA = window.Codex.CdxButton, jA = window.Codex.CdxIcon, HA = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Mc(0), n = Mc(null), o = Mc(null), s = zA(), { currentMTProvider: a } = Fe(s), { targetLanguageURLParameter: r } = P(), { sourceSection: l, currentProposedTranslation: c } = ne(), u = Uc(
      () => {
        var p, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (p = l.value) == null ? void 0 : p.selectedTranslationUnitId
        );
      }
    ), i = Uc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), d = Uc(
      () => !!c.value || a.value === ie.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    UA(() => x(this, null, function* () {
      yield RA(), g(), m.observe(n.value.$el), m.observe(o.value.$el);
    })), IA(() => {
      m.unobserve(n.value.$el), m.unobserve(o.value.$el);
    });
    const m = new ResizeObserver(() => g());
    return (p, h) => (na(), tr(ct(Ze), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: oa(() => [
        Xo(ct(U), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: oa(() => [
            Xo(yA, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => p.$emit("configure-options"))
            }, null, 512),
            Xo(ct(V), {
              class: AA(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !d.value && u.value
              }]),
              style: DA(d.value ? i.value : null)
            }, {
              default: oa(() => [
                d.value ? (na(), LA("section", {
                  key: 0,
                  lang: ct(r),
                  dir: ct(O.getDir)(ct(r)),
                  innerHTML: ct(c)
                }, null, 8, MA)) : u.value ? (na(), tr(ct(mt), { key: 1 })) : (na(), tr(EA, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => p.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => p.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Xo(ct(V), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: oa(() => [
                d.value || u.value ? (na(), tr(ct(OA), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !d.value,
                  onClick: h[3] || (h[3] = (f) => p.$emit("edit-translation", ct(c)))
                }, {
                  default: oa(() => [
                    Xo(ct(jA), {
                      class: "me-1",
                      icon: ct(Ku)
                    }, null, 8, ["icon"]),
                    BA(" " + PA(p.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : TA("", !0),
                Xo(zw, FA(NA(p.$attrs)), null, 16)
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
}, qA = window.Vue.computed, GA = (e) => qA(() => {
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
const WA = window.Vue.unref, XA = window.Vue.normalizeClass, KA = window.Vue.openBlock, YA = window.Vue.createElementBlock, QA = ["innerHTML"], JA = window.Vue.onMounted, ZA = window.Vue.ref, eD = window.Vue.computed, tD = {
  __name: "SubSection",
  props: {
    subSection: {
      type: gt,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = ZA(null), a = GA(n.subSection);
    JA(() => {
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
    const { selectTranslationUnitById: r } = hs(), l = (u) => {
      if (u.selected) {
        o("bounce-translation");
        return;
      }
      r(u.id);
    }, c = eD(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (u, i) => (KA(), YA("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: XA(["sx-sentence-selector__subsection", c.value]),
      innerHTML: WA(a)
    }, null, 10, QA));
  }
};
const jp = window.Vue.unref, Hp = window.Vue.createVNode, qp = window.Vue.normalizeStyle, nD = window.Vue.openBlock, oD = window.Vue.createElementBlock, Gp = window.Vue.computed, Ow = {
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
    const t = e, n = Gp(() => ({ "--size": t.size })), o = Gp(
      () => !t.isTemplateAdapted || t.percentage === 0 ? U0 : wu
    );
    return (s, a) => (nD(), oD("div", {
      class: "block-template-status-indicator",
      style: qp(n.value)
    }, [
      Hp(jp(t1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      Hp(jp(et), {
        icon: o.value,
        size: e.size / 2,
        style: qp({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const Wn = window.Vue.unref, nr = window.Vue.createVNode, Ic = window.Vue.withCtx, sD = window.Vue.openBlock, aD = window.Vue.createBlock, iD = window.Vue.computed, Wp = window.Codex.CdxButton, Xp = window.Codex.CdxIcon, jw = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ne(), o = iD(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (sD(), aD(Wn(U), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Ic(() => [
        nr(Wn(Wp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Wn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Ic(() => [
            nr(Wn(Xp), { icon: Wn(Qu) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        nr(Wn(Wp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: Ic(() => [
            nr(Wn(Xp), { icon: Wn(gs) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, sa = window.Vue.openBlock, or = window.Vue.createBlock;
window.Vue.createCommentVNode;
const $n = window.Vue.unref, Ko = window.Vue.withCtx, aa = window.Vue.createVNode, Rc = window.Vue.toDisplayString, zc = window.Vue.createElementVNode, rD = window.Vue.renderList, lD = window.Vue.Fragment, cD = window.Vue.createElementBlock, uD = { class: "pa-4" }, dD = ["textContent"], gD = ["textContent"], mD = window.Vuex.useStore, sr = window.Vue.computed, pD = {
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
    const t = e, { targetLanguageAutonym: n } = Fe(mD()), o = sr(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = he(), a = sr(() => {
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
          icon: R0,
          color: kt.gray500
        });
      else if (!t.isTemplateAdapted)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Sr,
          color: kt.gray500
        });
      else if (o.value < 100)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: wu,
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
          icon: wu,
          color: kt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? c.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: _r,
        color: kt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && c.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: C0,
        color: kt.gray500
      }), c;
    });
    return (c, u) => (sa(), or($n(Vt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: c.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: u[0] || (u[0] = (i) => c.$emit("update:active", i))
    }, {
      header: Ko(() => [
        aa($n(U), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Ko(() => [
            aa($n(V), { shrink: "" }, {
              default: Ko(() => [
                e.targetTemplateExists ? (sa(), or(Ow, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (sa(), or($n(et), {
                  key: 1,
                  icon: $n(b0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Ko(() => [
        zc("div", uD, [
          zc("h3", {
            textContent: Rc(a.value)
          }, null, 8, dD),
          zc("p", {
            class: "mt-6 text-small",
            textContent: Rc(r.value)
          }, null, 8, gD),
          (sa(!0), cD(lD, null, rD(l.value, (i, d) => (sa(), or($n(U), {
            key: d,
            align: "start",
            class: "mt-4"
          }, {
            default: Ko(() => [
              aa($n(V), { shrink: "" }, {
                default: Ko(() => [
                  aa($n(et), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              aa($n(V), {
                textContent: Rc(i.text)
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
const Pe = window.Vue.unref, He = window.Vue.createVNode, Jt = window.Vue.withCtx, Oc = window.Vue.toDisplayString, Kp = window.Vue.createTextVNode, hD = window.Vue.resolveDirective, Yp = window.Vue.withDirectives, Qp = window.Vue.createElementVNode, fD = window.Vue.normalizeClass, Yo = window.Vue.openBlock, Jp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ar = window.Vue.createBlock, Zp = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const eh = window.Vue.mergeProps, wD = { class: "block-template-adaptation-card__container pa-4" }, vD = ["textContent"], _D = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, qe = window.Vue.computed, SD = window.Vue.ref, yD = window.Vuex.useStore, th = window.Codex.CdxButton, nh = window.Codex.CdxIcon, xD = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = yD(), { targetLanguageAutonym: n, currentMTProvider: o } = Fe(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = ne(), r = qe(() => {
      var C;
      return (C = s.value) == null ? void 0 : C.isTranslated;
    }), l = qe(() => {
      var D;
      return ((D = s.value) == null ? void 0 : D.blockTemplateTranslatedContent) || a.value;
    }), c = qe(
      () => {
        var C;
        return (C = s.value) == null ? void 0 : C.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = qe(
      () => {
        var C;
        return !((C = t.state.application.mtRequestsPending) != null && C.includes(
          s.value.id
        ));
      }
    ), i = he(), d = qe(
      // Strip HTML comments and return
      () => {
        var C, D;
        return ((D = (C = s.value) == null ? void 0 : C.sourceBlockTemplateName) == null ? void 0 : D.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = qe(
      () => {
        var C, D;
        return (D = (C = s.value) == null ? void 0 : C.blockTemplateAdaptationInfo) == null ? void 0 : D[o.value];
      }
    ), m = qe(
      () => {
        var C, D;
        return ((C = g.value) == null ? void 0 : C.adapted) || !!((D = g.value) != null && D.partial);
      }
    ), p = qe(() => g.value ? "block-template-adaptation-card__body--" + (m.value ? "success" : "warning") : null), h = qe(() => g.value ? m.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = qe(
      () => {
        var C;
        return Object.keys(((C = s.value) == null ? void 0 : C.sourceTemplateParams) || {}).length;
      }
    ), w = qe(() => {
      var D;
      const C = (D = s.value) == null ? void 0 : D.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(C || {});
    }), v = qe(() => w.value.length), y = qe(() => {
      const C = L.value;
      return f.value + C === 0 ? 100 : v.value / (f.value + C) * 100 || 0;
    }), b = SD(!1), _ = () => {
      b.value = !0;
    }, k = (C) => C.filter((D) => !w.value.includes(D)), L = qe(() => {
      var D;
      const C = ((D = g.value) == null ? void 0 : D.mandatoryTargetParams) || [];
      return k(C).length;
    }), M = qe(() => {
      var D;
      const C = ((D = g.value) == null ? void 0 : D.optionalTargetParams) || [];
      return k(C).length;
    });
    return (C, D) => {
      const I = hD("i18n");
      return Yo(), ar(Pe(Ze), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Jt(() => [
          Qp("div", wD, [
            He(Pe(U), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Jt(() => [
                He(Pe(V), { shrink: "" }, {
                  default: Jt(() => [
                    He(Pe(nh), {
                      icon: Pe(kx),
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
                    Kp(Oc(d.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (Yo(), Jp("div", {
              key: 0,
              class: fD(["pa-4 mb-4", p.value])
            }, [
              He(Pe(U), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Jt(() => [
                  Yp(He(Pe(V), { tag: "h5" }, null, 512), [
                    [I, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  He(Pe(V), { shrink: "" }, {
                    default: Jt(() => [
                      He(Ow, {
                        percentage: y.value,
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
              Qp("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Oc(c.value)
              }, null, 8, vD),
              He(Pe(th), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: D[0] || (D[0] = (Q) => C.$emit("edit-translation", l.value))
              }, {
                default: Jt(() => [
                  Kp(Oc(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (Yo(), Jp("div", _D, [
              He(Pe(U), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Jt(() => [
                  Yp(He(Pe(V), { tag: "h5" }, null, 512), [
                    [I, [
                      Pe(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  He(Pe(V), { shrink: "" }, {
                    default: Jt(() => [
                      He(Pe(th), {
                        weight: "quiet",
                        "aria-label": C.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Jt(() => [
                          He(Pe(nh), {
                            icon: Pe(yx),
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
            ])) : (Yo(), ar(Pe(mt), { key: 2 }))
          ]),
          r.value ? (Yo(), ar(jw, Zp(eh({ key: 1 }, C.$attrs)), null, 16)) : (Yo(), ar(zw, Zp(eh({ key: 0 }, C.$attrs)), null, 16)),
          He(pD, {
            active: b.value,
            "onUpdate:active": D[1] || (D[1] = (Q) => b.value = Q),
            "source-params-count": f.value,
            "target-params-count": v.value,
            "mandatory-missing-params-count": L.value,
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
const CD = window.Vue.unref, bD = window.Vue.createVNode, kD = window.Vue.openBlock, $D = window.Vue.createElementBlock, VD = { class: "translated-segment-card-header" }, ED = window.Vue.computed, LD = {
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
    const n = t, { isSectionTitleSelected: o } = ne(), s = he(), a = ED(() => [
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
    return (l, c) => (kD(), $D("div", VD, [
      bD(CD(Ea), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const TD = window.Vue.useCssVars, ze = window.Vue.createVNode, oh = window.Vue.resolveDirective, AD = window.Vue.createElementVNode, jc = window.Vue.withDirectives, ye = window.Vue.unref, DD = window.Vue.normalizeStyle, ir = window.Vue.openBlock, sh = window.Vue.createElementBlock, PD = window.Vue.createCommentVNode, BD = window.Vue.normalizeClass, xt = window.Vue.withCtx, FD = window.Vue.toDisplayString, ND = window.Vue.createTextVNode, ah = window.Vue.createBlock, MD = window.Vue.normalizeProps, UD = window.Vue.guardReactiveProps, Vn = window.Vue.computed, ID = window.Vue.ref, RD = window.Vue.inject, zD = window.Vuex.useStore, OD = window.Codex.CdxButton, Hc = window.Codex.CdxIcon, jD = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    TD((v) => ({
      "4929555c": w.value
    }));
    const t = ID("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = ne(), { targetLanguage: a } = Fe(zD()), r = Vn(() => t.value === "sentence"), l = Vn(
      () => n.value.subSections.find(
        (v) => v.sentences.some(
          (y) => {
            var b;
            return y.id === ((b = o.value) == null ? void 0 : b.id);
          }
        )
      )
    ), c = Vn(() => {
      var v;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (v = o.value) == null ? void 0 : v.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), u = RD("colors"), i = u.gray200, d = u.red600, g = Vn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), m = Vn(
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
      const b = oh("i18n"), _ = oh("i18n-html");
      return ir(), ah(ye(Ze), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: xt(() => [
          ze(ye(U), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: xt(() => [
              ze(LD, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (k) => t.value = k)
              }, null, 8, ["selection"]),
              ze(ye(V), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: xt(() => [
                  ze(ye(U), { class: "ma-0" }, {
                    default: xt(() => [
                      ze(ye(V), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: xt(() => [
                          jc(AD("h5", null, null, 512), [
                            [b, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          m.value === 0 ? jc((ir(), sh("p", {
                            key: 0,
                            style: DD({ color: ye(d) })
                          }, null, 4)), [
                            [b, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : jc((ir(), sh("p", {
                            key: 1,
                            class: BD(h.value)
                          }, null, 2)), [
                            [_, [
                              m.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      ze(ye(V), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: xt(() => [
                          ze(ye(U), { class: "ma-0 ms-2" }, {
                            default: xt(() => [
                              ze(ye(V), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: xt(() => [
                                  ze(ye(Hc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ye(Ex)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              ze(ye(V), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: xt(() => [
                                  ze(ye(of), {
                                    value: m.value,
                                    height: "4px",
                                    width: "64px",
                                    color: w.value,
                                    background: ye(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              ze(ye(V), { shrink: "" }, {
                                default: xt(() => [
                                  ze(ye(Hc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ye($x)
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
                  r.value ? (ir(), ah(ye(OD), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (k) => v.$emit("edit-translation", g.value))
                  }, {
                    default: xt(() => [
                      ze(ye(Hc), {
                        class: "me-1",
                        icon: ye(Ku)
                      }, null, 8, ["icon"]),
                      ND(" " + FD(v.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : PD("", !0)
                ]),
                _: 1
              }),
              ze(ye(V), { class: "translated-segment-card__actions" }, {
                default: xt(() => [
                  ze(jw, MD(UD(v.$attrs)), null, 16)
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
}, HD = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = ne(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = hs(), { isPresentLeadSection: s } = ht(), { currentTranslation: a } = Xt();
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
}, Hw = window.Vuex.useStore, qD = () => {
  const e = Hw(), {
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
    o ? s = yield $r.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : s = new ie(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, GD = () => {
  const e = Hw(), { currentMTProvider: t } = Fe(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = P(), s = qD();
  return () => x(void 0, null, function* () {
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
}, WD = window.Vue.computed, XD = (e) => {
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
}, KD = () => {
  const { selectedContentTranslationUnit: e } = ne(), t = WD(
    () => e.value instanceof gt
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && XD(o);
  };
}, YD = (e, t) => {
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
}, QD = window.Vue.computed, qw = () => {
  const { currentTranslation: e } = Xt(), { currentSourcePage: t } = ot();
  return QD(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, JD = window.Vue.computed, Na = () => {
  const { sourceSection: e } = ne(), { currentTargetPageTitle: t } = ot(), { isMissingLeadSection: n } = ht();
  return { targetPageTitleForPublishing: JD(
    () => n.value ? e.value.title : t.value
  ) };
}, ZD = window.Vuex.useStore, dd = () => {
  const e = ZD(), { sourceSection: t } = ne(), { targetPageTitleForPublishing: n } = Na(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = P(), r = qw(), { target: l, PUBLISHING_TARGETS: c } = Tt();
  return () => {
    const u = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(d);
    g.forEach(
      (p) => YD(p, i)
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
}, e6 = window.Vue.effectScope, t6 = window.Vue.onScopeDispose, n6 = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = e6(!0), n = o.run(() => e(...a))), t6(s), n);
}, o6 = window.Vuex.useStore;
let qc;
const s6 = () => {
  const e = o6(), t = dd();
  let n = 1e3, o = 0;
  return qc = sd(() => t().then((a) => {
    a instanceof so ? (n *= o + 1, o++, setTimeout(qc, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof rs)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), qc;
}, Gw = n6(s6), a6 = window.Vuex.useStore, i6 = () => {
  const e = a6(), t = Gw(), { currentMTProvider: n } = Fe(e), { sourceSection: o, currentProposedTranslation: s } = ne(), { selectNextTranslationUnit: a } = hs();
  return () => x(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, r6 = window.Vuex.useStore, l6 = () => {
  const e = r6(), t = Gw();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, c6 = window.Vuex.useStore, u6 = window.Vue.computed, Ww = () => {
  const e = c6(), { currentTranslation: t } = Xt(), { currentMTProvider: n } = Fe(e), { currentTargetPageTitle: o } = ot(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = P(), c = Lt(), u = u6(() => {
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
}, d6 = (e, t, n, o) => x(void 0, null, function* () {
  var l, c, u;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((c = t.mt) == null ? void 0 : c.content), a = (u = t == null ? void 0 : t.mt) == null ? void 0 : u.engine, r = yield Rw(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), g6 = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, m6 = (e, t, n, o) => x(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return d6(e, t, n, o);
  g6(e, t);
}), p6 = (e, t, n, o) => {
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
        const u = m6(
          l,
          c,
          t || e.title,
          n
        );
        s.push(u);
      }
  return Promise.all(s);
}, h6 = { restoreCorporaDraft: p6 }, f6 = () => {
  const { currentSourcePage: e } = ot(), { sourceSection: t } = ne();
  return (n) => x(void 0, null, function* () {
    if (n.restored)
      return;
    try {
      const s = yield $t.fetchTranslationUnits(
        n.translationId
      );
      yield h6.restoreCorporaDraft(
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
let Gc = null;
function w6() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((o) => t.includes(o));
}
function Xw() {
  return Gc === null && (Gc = w6()), Gc;
}
const Kw = window.Vue.ref, Wc = Kw(!1), Xc = Kw(!1);
function ih() {
  return {
    isPermissionWarningDismissed: Wc,
    dismissPermissionWarning: () => {
      Wc.value = !0;
    },
    resetPermissionWarning: () => {
      Wc.value = !1;
    },
    isTitleErrorDismissed: Xc,
    dismissTitleError: () => {
      Xc.value = !0;
    },
    resetTitleError: () => {
      Xc.value = !1;
    }
  };
}
const le = window.Vue.unref, Ct = window.Vue.createVNode, Rt = window.Vue.withCtx, v6 = window.Vue.resolveDirective, En = window.Vue.createElementVNode, _6 = window.Vue.withDirectives, ia = window.Vue.toDisplayString, S6 = window.Vue.createTextVNode, Zt = window.Vue.openBlock, Xn = window.Vue.createBlock, rh = window.Vue.createCommentVNode, y6 = window.Vue.renderList, x6 = window.Vue.Fragment, lh = window.Vue.createElementBlock, C6 = window.Vue.normalizeClass, b6 = window.Vue.normalizeStyle, k6 = { class: "sx-sentence-selector__header-title mb-0" }, $6 = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, V6 = { class: "sx-sentence-selector__section-contents px-4" }, Kn = window.Vue.computed, E6 = window.Vue.nextTick, L6 = window.Vue.onMounted, ra = window.Vue.ref, ch = window.Vue.watch, T6 = window.Vuex.useStore, uh = window.Codex.CdxButton, A6 = window.Codex.CdxIcon, dh = window.Codex.CdxMessage, D6 = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = ra(!1), n = ra(!1), o = ra("100%"), s = T6(), { currentMTProvider: a, previousRoute: r } = Fe(s), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      pageURLParameter: u,
      sectionURLParameter: i
    } = P(), { resetPublishTarget: d, target: g } = Tt(), m = Ar();
    g.value || m(
      l.value,
      c.value,
      u.value
    ).then(() => d());
    const { sourceSection: p, selectedContentTranslationUnit: h } = ne(), { targetPageTitleForPublishing: f } = Na(), w = ra({
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
    ), b = Kn(() => {
      var J;
      return (J = p.value) == null ? void 0 : J.subSections;
    }), _ = Kn(
      () => {
        var J;
        return (J = p.value) == null ? void 0 : J.selectedTranslationUnitOriginalContent;
      }
    ), k = Kn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: L,
      logEditorCloseEvent: M,
      logEditorCloseWarnEvent: C,
      logEditorSegmentAddEvent: D,
      logEditorSegmentSkipEvent: I
    } = Ww(), Q = () => {
      var To;
      const J = F.currentRoute.value.meta.workflowStep, Bn = F.getRoutes().find(
        (Rr) => Rr.name === r.value
      ), ft = ((To = Bn == null ? void 0 : Bn.meta) == null ? void 0 : To.workflowStep) || 0;
      return J > ft;
    }, se = HD();
    GD()().then(() => {
      Q() && L(), w.value.mtProviders = !0;
    });
    const N = KD(), { fetchTranslationsByStatus: R, translationsFetched: G } = ms(), X = f6(), { currentTranslation: re } = Xt(), { selectPageSectionByTitle: xe, selectPageSectionByIndex: ke } = Nr(), $e = cd(), Ne = cs();
    L6(() => x(this, null, function* () {
      if (!G.value.draft) {
        const J = [
          // required to get current draft translation (if exists)
          R("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          $e(l.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          Ne(l.value, [u.value])
        ];
        yield Promise.all(J);
      }
      w.value.pageMetadata = !0, i.value ? yield xe(i.value) : yield ke(0), w.value.pageContent = !0, re.value && (yield X(re.value)), w.value.draftRestored = !0, g.value || m(
        l.value,
        c.value,
        u.value
      ).then(() => d()), ch(
        v,
        () => x(this, null, function* () {
          v.value && (yield E6(), se(), N());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), ch(h, N);
    const { selectNextTranslationUnit: z, selectPreviousTranslationUnit: B } = hs(), j = () => (I(), z()), S = i6(), E = () => {
      D(), S();
    }, T = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, F = nt(), K = () => {
      const { autoSavePending: J } = s.state.application;
      if (J) {
        ws.value = !0, C();
        return;
      }
      H();
    }, fe = l6(), { clearTranslationURLParameters: W } = P(), H = () => x(this, null, function* () {
      R("draft"), re.value && (p.value.reset(), re.value.restored = !1), M(), W(), fe(), yield F.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: ae,
      translateSelectedTranslationUnitForAllProviders: st
    } = ud(), Ve = () => {
      fs.value || (t.value = !0, st());
    }, { getCurrentTitleByLanguage: Ma } = cn(), { isMissingLeadSection: Ua } = ht(), ro = (J) => {
      F.push({
        name: "sx-editor",
        state: {
          content: J,
          originalContent: _.value,
          title: Ma(
            c.value,
            l.value
          ),
          isInitialEdit: !y.value || null
        }
      });
    }, Mr = () => F.push({ name: "sx-publisher" }), Ur = () => x(this, null, function* () {
      h.value ? yield ae(
        h.value.id,
        a.value
      ) : yield ae(0, a.value);
    }), fs = Kn(
      () => h.value instanceof gt
    ), ws = ra(!1), {
      isPermissionWarningDismissed: Ir,
      dismissPermissionWarning: Eo,
      resetPermissionWarning: Lo
    } = ih(), { isTitleErrorDismissed: Ia, dismissTitleError: A, resetTitleError: q } = ih();
    Q() && (Lo(), q());
    const Ue = Kn(
      () => !Xw() && !Ir.value
    ), At = Kn(
      () => !Ia.value && Ua.value && !mw.Title.newFromText(f.value)
    );
    return (J, un) => {
      const Bn = v6("i18n");
      return Zt(), lh("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: b6(k.value)
      }, [
        Ct(le(U), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Rt(() => [
            Ct(le(V), { shrink: "" }, {
              default: Rt(() => [
                Ct(le(uh), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": J.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: K
                }, {
                  default: Rt(() => [
                    Ct(le(A6), { icon: le(Nf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            Ct(le(V), {
              grow: "",
              class: "px-1"
            }, {
              default: Rt(() => [
                _6(En("h4", k6, null, 512), [
                  [Bn, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            Ct(le(V), {
              shrink: "",
              class: "px-3"
            }, {
              default: Rt(() => [
                Ct(le(uh), {
                  disabled: !(le(p) && le(p).isTranslated),
                  onClick: Mr
                }, {
                  default: Rt(() => [
                    S6(ia(J.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        v.value ? (Zt(), Xn(le(U), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Rt(() => [
            Ct(le(V), {
              dir: le(O.getDir)(le(l)),
              lang: le(l),
              class: "sx-sentence-selector__section"
            }, {
              default: Rt(() => [
                Ue.value ? (Zt(), Xn(le(dh), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: le(Eo)
                }, {
                  default: Rt(() => [
                    En("p", null, ia(J.$i18n("cx-publish-permission-warning")), 1),
                    En("p", null, [
                      En("strong", null, [
                        En("a", $6, ia(J.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : rh("", !0),
                At.value ? (Zt(), Xn(le(dh), {
                  key: 1,
                  type: "error",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: le(A)
                }, {
                  default: Rt(() => [
                    En("p", null, [
                      En("strong", null, ia(J.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    En("p", null, ia(J.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : rh("", !0),
                Ct(gA),
                En("div", V6, [
                  (Zt(!0), lh(x6, null, y6(b.value, (ft) => (Zt(), Xn(tD, {
                    id: ft.id,
                    key: `sub-section-${ft.id}`,
                    "sub-section": ft,
                    onBounceTranslation: T
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !fs.value && y.value ? (Zt(), Xn(jD, {
              key: 0,
              onEditTranslation: ro,
              onSelectNextSegment: le(z),
              onSelectPreviousSegment: le(B)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : fs.value ? (Zt(), Xn(xD, {
              key: 2,
              onEditTranslation: ro,
              onApplyTranslation: E,
              onSkipTranslation: j,
              onSelectPreviousSegment: le(B),
              onSelectNextSegment: le(z)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Zt(), Xn(HA, {
              key: 1,
              class: C6({ "mb-0": !n.value }),
              onConfigureOptions: Ve,
              onEditTranslation: ro,
              onApplyTranslation: E,
              onSkipTranslation: j,
              onSelectPreviousSegment: le(B),
              onRetryTranslation: Ur
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Zt(), Xn(le(U), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Rt(() => [
            Ct(le(mt), { class: "mt-0" })
          ]),
          _: 1
        })),
        Ct(nA, {
          active: t.value,
          "onUpdate:active": un[0] || (un[0] = (ft) => t.value = ft)
        }, null, 8, ["active"]),
        Ct(AT, {
          modelValue: ws.value,
          "onUpdate:modelValue": un[1] || (un[1] = (ft) => ws.value = ft),
          onDiscardTranslation: H
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const P6 = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: D6
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, B6 = window.Vue.resolveComponent, F6 = window.Vue.createVNode, N6 = window.Vue.normalizeClass, M6 = window.Vue.openBlock, U6 = window.Vue.createElementBlock;
function I6(e, t, n, o, s, a) {
  const r = B6("sx-sentence-selector");
  return M6(), U6("main", {
    class: N6(["sx-sentence-selector-view", a.classes])
  }, [
    F6(r)
  ], 2);
}
const R6 = /* @__PURE__ */ pe(P6, [["render", I6]]), z6 = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, O6 = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const j6 = window.Vue.resolveDirective, rr = window.Vue.withDirectives, zt = window.Vue.openBlock, Ln = window.Vue.createElementBlock, lr = window.Vue.createCommentVNode, cr = window.Vue.Transition, _o = window.Vue.withCtx, Qo = window.Vue.createVNode, la = window.Vue.createElementVNode, Yn = window.Vue.unref, H6 = window.Vue.renderList, q6 = window.Vue.Fragment, G6 = window.Vue.normalizeClass, gh = window.Vue.createBlock, W6 = window.Vue.toDisplayString, X6 = window.Vue.createTextVNode, K6 = { class: "sx-quick-tutorial" }, Y6 = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, Q6 = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, J6 = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, Z6 = { class: "sx-quick-tutorial__illustration" }, eP = ["innerHTML"], tP = ["innerHTML"], nP = { class: "sx-quick-tutorial__step-indicator py-3" }, oP = ["onClick"], sP = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, aP = {
  key: "secondary-point-1",
  class: "ma-0"
}, iP = {
  key: "secondary-point-2",
  class: "ma-0"
}, rP = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, mh = window.Vue.ref, ph = window.Codex.CdxButton, lP = window.Codex.CdxIcon, cP = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = mh(2), n = mh(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = ps();
    return (r, l) => {
      const c = j6("i18n");
      return zt(), Ln("section", K6, [
        Qo(Yn(U), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: _o(() => [
            la("section", Y6, [
              Qo(cr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: _o(() => [
                  s(1) ? rr((zt(), Ln("h2", Q6, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? rr((zt(), Ln("h2", J6, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : lr("", !0)
                ]),
                _: 1
              })
            ]),
            la("section", Z6, [
              Qo(cr, { name: "mw-ui-animation-slide-start" }, {
                default: _o(() => [
                  s(1) ? (zt(), Ln("div", {
                    key: "illustration-1",
                    innerHTML: Yn(O6)
                  }, null, 8, eP)) : s(2) ? (zt(), Ln("div", {
                    key: "illustration-2",
                    innerHTML: Yn(z6)
                  }, null, 8, tP)) : lr("", !0)
                ]),
                _: 1
              })
            ]),
            la("div", nP, [
              (zt(!0), Ln(q6, null, H6(t.value, (u) => (zt(), Ln("span", {
                key: `dot-${u}`,
                class: G6(["dot mx-1", { "dot-active": s(u) }]),
                role: "button",
                onClick: (i) => n.value = u
              }, null, 10, oP))), 128))
            ]),
            la("section", sP, [
              Qo(cr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: _o(() => [
                  s(1) ? rr((zt(), Ln("h3", aP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? rr((zt(), Ln("h3", iP, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : lr("", !0)
                ]),
                _: 1
              })
            ]),
            la("div", rP, [
              Qo(cr, {
                name: "fade",
                mode: "out-in"
              }, {
                default: _o(() => [
                  s(1) ? (zt(), gh(Yn(ph), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: _o(() => [
                      Qo(Yn(lP), { icon: Yn(gs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (zt(), gh(Yn(ph), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Yn(a)
                  }, {
                    default: _o(() => [
                      X6(W6(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
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
const uP = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: cP
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, dP = window.Vue.resolveComponent, gP = window.Vue.createVNode, mP = window.Vue.normalizeClass, pP = window.Vue.openBlock, hP = window.Vue.createElementBlock;
function fP(e, t, n, o, s, a) {
  const r = dP("sx-quick-tutorial");
  return pP(), hP("main", {
    class: mP(["sx-quick-tutorial-view", a.classes])
  }, [
    gP(r)
  ], 2);
}
const wP = /* @__PURE__ */ pe(uP, [["render", fP]]);
const vP = window.Vue.resolveDirective, hh = window.Vue.createElementVNode, _P = window.Vue.withDirectives, SP = window.Vue.unref, yP = window.Vue.withCtx, xP = window.Vue.createVNode, CP = window.Vue.openBlock, bP = window.Vue.createElementBlock, kP = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, $P = { class: "sx-editor__original-content-panel__header mb-2" }, VP = ["lang", "dir", "innerHTML"], fh = window.Vue.ref, EP = window.Vue.onMounted, LP = {
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
    }, o = fh(null), s = fh(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return EP(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const c = vP("i18n");
      return CP(), bP("section", kP, [
        _P(hh("h5", $P, null, 512), [
          [c, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        xP(SP(W_), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: yP(() => [
            hh("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, VP)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, TP = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const AP = window.Vue.unref, ca = window.Vue.createElementVNode, wh = window.Vue.resolveDirective, Kc = window.Vue.withDirectives, DP = window.Vue.normalizeClass, PP = window.Vue.openBlock, BP = window.Vue.createElementBlock, FP = window.Vue.createCommentVNode, NP = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, MP = { class: "sx-editor__feedback-overlay-content px-4" }, UP = ["innerHTML"], IP = { class: "sx-editor__feedback-overlay-content__title" }, RP = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, Yc = window.Vue.computed, zP = {
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
    const t = e, { targetLanguageURLParameter: n } = P(), o = Yc(
      () => sn.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = Yc(() => {
      const r = sn.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = Yc(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, l) => {
      const c = wh("i18n"), u = wh("i18n-html");
      return e.showFeedback ? (PP(), BP("div", NP, [
        ca("div", MP, [
          ca("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: AP(TP)
          }, null, 8, UP),
          Kc(ca("h2", IP, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Kc(ca("p", RP, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Kc(ca("p", {
            class: DP(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [u, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : FP("", !0);
    };
  }
}, OP = window.Vuex.useStore, jP = () => {
  const e = OP(), t = dd(), { selectNextTranslationUnit: n } = hs(), {
    isSectionTitleSelected: o,
    sourceSection: s,
    selectedContentTranslationUnit: a
  } = ne(), { getCurrentTitleByLanguage: r } = cn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: c
  } = P(), { currentMTProvider: u } = Fe(e);
  return (i) => x(void 0, null, function* () {
    if (!o.value) {
      const d = document.createElement("div");
      d.innerHTML = i, d.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = d.innerHTML;
    }
    a.value instanceof gt && (i = (yield Rw(
      i,
      r(c.value, l.value),
      c.value
    )) || i), s.value.setTranslationForSelectedTranslationUnit(
      i,
      u.value
    ), t(), n();
  });
};
const Je = window.Vue.unref, Qc = window.Vue.openBlock, Jc = window.Vue.createBlock, vh = window.Vue.createCommentVNode, _h = window.Vue.createVNode, HP = window.Vue.createElementVNode, qP = window.Vue.withCtx, GP = { class: "sx-editor__editing-surface-container grow" }, Zc = window.Vue.ref, WP = window.Vue.computed;
window.Vue.inject;
const XP = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Zc(!1), o = nt(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: c, originalContent: u, title: i } = history.state, d = Zc(null), g = Zc(!1), { logEditorSegmentAddEvent: m, logEditorSegmentEditEvent: p } = Ww(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = P(), { isSectionTitleSelected: w, sourceSection: v } = ne(), y = WP(
      () => sn.calculateScore(
        d.value,
        c,
        f.value
      )
    ), b = jP(), _ = (k) => x(this, null, function* () {
      d.value = k, g.value = !0;
      const L = new Promise((C) => setTimeout(C, 2e3));
      let M = Promise.resolve();
      r ? v.value.editedTranslation = k : M = b(k), y.value === 0 && l ? m() : y.value > 0 && p(), yield Promise.all([L, M]), g.value = !1, a();
    });
    return r ? mw.cx.eventlogging.stats.publishEditorStepAccess() : mw.cx.eventlogging.stats.editingStepAccess(!0), (k, L) => (Qc(), Jc(Je(U), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: qP(() => [
        Je(u) ? (Qc(), Jc(LP, {
          key: 0,
          language: Je(h),
          dir: Je(O.getDir)(Je(h)),
          "original-content": Je(u)
        }, null, 8, ["language", "dir", "original-content"])) : vh("", !0),
        n.value ? vh("", !0) : (Qc(), Jc(Je(mt), { key: 1 })),
        HP("div", GP, [
          _h(zP, {
            "edited-translation": d.value,
            "show-feedback": g.value,
            "proposed-translation": Je(c)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          _h(l4, {
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
const KP = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: XP
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
}, YP = window.Vue.resolveComponent, QP = window.Vue.createVNode, JP = window.Vue.normalizeClass, ZP = window.Vue.openBlock, eB = window.Vue.createElementBlock;
function tB(e, t, n, o, s, a) {
  const r = YP("sx-editor");
  return ZP(), eB("main", {
    class: JP(["sx-editor-view", a.classes])
  }, [
    QP(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const nB = /* @__PURE__ */ pe(KP, [["render", tB]]);
const en = window.Vue.unref, So = window.Vue.createVNode, ua = window.Vue.withCtx, oB = window.Vue.resolveDirective, sB = window.Vue.withDirectives, aB = window.Vue.openBlock, iB = window.Vue.createBlock, Sh = window.Codex.CdxButton, yh = window.Codex.CdxIcon, rB = {
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
      const a = oB("i18n");
      return aB(), iB(en(U), { class: "ma-0 sx-publisher__header" }, {
        default: ua(() => [
          So(en(V), {
            shrink: "",
            class: "me-2"
          }, {
            default: ua(() => [
              So(en(Sh), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: ua(() => [
                  So(en(yh), { icon: en(ds) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          sB(So(en(V), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          So(en(V), { shrink: "" }, {
            default: ua(() => [
              So(en(Sh), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: ua(() => [
                  So(en(yh), { icon: en(px) }, null, 8, ["icon"])
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
}, lB = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, cB = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, xh = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const eu = window.Vue.createElementVNode, Ch = window.Vue.toDisplayString, tu = window.Vue.unref, nu = window.Vue.withCtx, bh = window.Vue.createVNode, uB = window.Vue.openBlock, dB = window.Vue.createBlock, gB = window.Vue.createCommentVNode, mB = ["innerHTML"], pB = ["textContent"], hB = ["textContent"], ou = window.Vue.computed, fB = {
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
        svg: lB,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: cB,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: xh,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: xh,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = ou(() => o[n.status].svg), a = ou(() => o[n.status].title), r = ou(() => o[n.status].subtitle);
    return (l, c) => e.active ? (uB(), dB(tu(Vt), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: nu(() => [
        bh(tu(U), { class: "ma-4" }, {
          default: nu(() => [
            bh(tu(V), null, {
              default: nu(() => [
                eu("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, mB),
                eu("h2", {
                  textContent: Ch(a.value)
                }, null, 8, pB),
                eu("p", {
                  class: "ma-0",
                  textContent: Ch(r.value)
                }, null, 8, hB)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : gB("", !0);
  }
};
const ut = window.Vue.unref, Ot = window.Vue.createVNode, Tn = window.Vue.withCtx, wB = window.Vue.resolveDirective, vB = window.Vue.withDirectives, kh = window.Vue.toDisplayString, _B = window.Vue.createTextVNode, su = window.Vue.openBlock, $h = window.Vue.createElementBlock, SB = window.Vue.createCommentVNode, Yw = window.Vue.createElementVNode, yB = window.Vue.createBlock, xB = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, CB = ["src"], bB = ["textContent"], kB = /* @__PURE__ */ Yw("p", { class: "mt-0" }, null, -1), $B = window.Vue.computed, VB = window.Vue.inject, EB = window.Vue.ref, Vh = window.Codex.CdxButton, LB = window.Codex.CdxIcon, TB = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Xf,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = EB(""), s = () => n("close"), a = () => n("publish", o.value), r = VB("breakpoints"), l = $B(() => r.value.mobile);
    return (c, u) => {
      const i = wB("i18n");
      return e.active && e.captchaDetails ? (su(), yB(ut(Vt), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: Tn(() => [
          Ot(ut(U), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: Tn(() => [
              Ot(ut(V), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: Tn(() => [
                  Ot(ut(Vh), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": c.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: Tn(() => [
                      Ot(ut(LB), { icon: ut(ds) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              vB(Ot(ut(V), {
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
                  Ot(ut(Vh), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: Tn(() => [
                      _B(kh(c.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Ot(ut(vr))
        ]),
        default: Tn(() => [
          Yw("div", xB, [
            e.captchaDetails.type === "image" ? (su(), $h("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, CB)) : (su(), $h("p", {
              key: 1,
              textContent: kh(e.captchaDetails.question)
            }, null, 8, bB)),
            kB,
            Ot(ut(U), { class: "ma-0" }, {
              default: Tn(() => [
                Ot(ut(V), null, {
                  default: Tn(() => [
                    Ot(ut(vu), {
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
      }, 8, ["fullscreen"])) : SB("", !0);
    };
  }
};
const Qn = window.Vue.unref, ur = window.Vue.createVNode, Jo = window.Vue.withCtx, Zo = window.Vue.createElementVNode, AB = window.Vue.resolveDirective, DB = window.Vue.withDirectives, PB = window.Vue.renderList, BB = window.Vue.Fragment, au = window.Vue.openBlock, FB = window.Vue.createElementBlock, Eh = window.Vue.toDisplayString, Lh = window.Vue.createTextVNode, NB = window.Vue.isRef, MB = window.Vue.normalizeClass, Th = window.Vue.createBlock, UB = { class: "mw-ui-dialog__header" }, IB = { class: "row ma-0 px-4 py-3" }, RB = { class: "col shrink justify-center" }, zB = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, OB = { class: "mb-0" }, jB = { class: "pa-4" }, HB = window.Codex.CdxField, qB = window.Codex.CdxRadio, GB = window.Vuex.useStore, dr = window.Vue.computed, WB = window.Codex.CdxButton, XB = window.Codex.CdxIcon, KB = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = GB(), { target: s, PUBLISHING_TARGETS: a } = Tt(), r = dr(() => o.state.translator.isAnon), l = he(), { sourceSection: c } = ne(), { isCurrentSectionPresent: u, isPresentLeadSection: i } = ht(), d = dr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), g = dr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), m = dr(() => {
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
      const w = AB("i18n");
      return au(), Th(Qn(Vt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: h.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: f[1] || (f[1] = (v) => h.$emit("update:active", v)),
        onClose: p
      }, {
        header: Jo(() => [
          Zo("div", UB, [
            Zo("div", IB, [
              Zo("div", RB, [
                ur(Qn(WB), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": h.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: Jo(() => [
                    ur(Qn(XB), { icon: Qn(Nf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Zo("div", zB, [
                DB(Zo("h4", OB, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            ur(Qn(vr))
          ])
        ]),
        default: Jo(() => [
          Zo("div", jB, [
            ur(Qn(HB), { "is-fieldset": "" }, {
              default: Jo(() => [
                (au(!0), FB(BB, null, PB(m.value, (v, y) => (au(), Th(Qn(qB), {
                  key: "publish-options-radio-" + v.value,
                  modelValue: Qn(s),
                  "onUpdate:modelValue": [
                    f[0] || (f[0] = (b) => NB(s) ? s.value = b : null),
                    p
                  ],
                  class: MB(y < m.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": v.value,
                  disabled: v.disabled,
                  name: "publish-options"
                }, {
                  description: Jo(() => [
                    Lh(Eh(v.description), 1)
                  ]),
                  default: Jo(() => [
                    Lh(Eh(v.label) + " ", 1)
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
const jt = window.Vue.unref, Ah = window.Vue.toDisplayString, Dh = window.Vue.createElementVNode, YB = window.Vue.resolveDirective, es = window.Vue.createVNode, QB = window.Vue.withDirectives, da = window.Vue.withCtx, iu = window.Vue.openBlock, Ph = window.Vue.createBlock, Bh = window.Vue.createCommentVNode, JB = window.Vue.Fragment, ZB = window.Vue.createElementBlock, e9 = window.Vue.normalizeClass, t9 = ["textContent"], n9 = ["textContent"], ts = window.Vue.computed, Fh = window.Vue.ref, o9 = window.Vue.watch, Nh = window.Codex.CdxButton, Mh = window.Codex.CdxIcon, s9 = window.Codex.CdxMessage, a9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Fh(0), o = Fh(null);
    o9(o, () => {
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
    ), c = he(), u = ts(() => {
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
      const h = YB("i18n-html");
      return iu(), Ph(jt(s9), {
        type: a.value,
        class: e9(["sx-publisher__review-info", l.value]),
        icon: r.value ? jt(wx) : null
      }, {
        default: da(() => [
          Dh("h5", {
            textContent: Ah(i.value)
          }, null, 8, t9),
          r.value ? Bh("", !0) : (iu(), ZB(JB, { key: 0 }, [
            Dh("p", {
              textContent: Ah(u.value)
            }, null, 8, n9),
            es(jt(U), {
              justify: "between",
              class: "ma-0"
            }, {
              default: da(() => [
                QB(es(jt(V), {
                  ref_key: "learnMoreContainer",
                  ref: o,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (iu(), Ph(jt(V), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: da(() => [
                    es(jt(Nh), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: d
                    }, {
                      default: da(() => [
                        es(jt(Mh), { icon: jt(Qu) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    es(jt(Nh), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": m.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: da(() => [
                        es(jt(Mh), { icon: jt(gs) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })) : Bh("", !0)
              ]),
              _: 1
            })
          ], 64))
        ]),
        _: 1
      }, 8, ["type", "class", "icon"]);
    };
  }
}, i9 = (e) => {
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
}, r9 = window.Vuex.useStore, l9 = window.Vue.computed, c9 = () => {
  const e = r9(), { currentTranslation: t } = Xt(), { currentMTProvider: n } = Fe(e), { currentTargetPageTitle: o } = ot(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = P(), { sourceSection: c } = ne(), u = Lt(), i = l9(() => {
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
    return n.value && (p.translation_provider = ie.getProviderForInstrumentation(n.value)), p.human_modification_rate = sn.getMTScoreForPageSection(
      c.value,
      a.value
    ) / 100, p.human_modification_threshold = sn.getMtModificationThreshold(), p;
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
}, u9 = window.Vue.computed, Uh = window.Vue.ref, d9 = window.Vuex.useStore, g9 = () => {
  const e = d9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = P(), { sourceSection: s } = ne(), { targetPageTitleForPublishing: a } = Na(), r = qw(), { isPresentLeadSection: l } = ht(), { sectionSuggestion: c } = Le(), u = u9(
    () => {
      var _, k;
      return l.value ? no.LEAD_SECTION_DUMMY_TITLE : (k = c.value) == null ? void 0 : k.presentSections[(_ = s.value) == null ? void 0 : _.sourceSectionTitleForPublishing];
    }
  ), { target: i, PUBLISHING_TARGETS: d } = Tt(), g = Uh(!1), m = Uh("pending"), p = () => g.value = !1, h = dd(), {
    logPublishAttemptEvent: f,
    logPublishSuccessEvent: w,
    logPublishFailureEvent: v
  } = c9(), y = (_, k) => x(void 0, null, function* () {
    f();
    const L = yield h();
    if (L instanceof so)
      return v(), { publishFeedbackMessage: L, targetUrl: null };
    const M = L, C = a.value, D = {
      html: i9(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: C,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: r.value,
      publishTarget: i.value,
      sectionTranslationId: M
    };
    u.value && (D.existingSectionTitle = u.value), _ && (D.captchaId = _, D.captchaWord = k);
    const I = yield $t.publishTranslation(
      D
    );
    return I.publishFeedbackMessage === null ? w(I.pageId, I.revisionId) : v(), I;
  });
  return {
    closePublishDialog: p,
    doPublish: (_ = null, k = null) => x(void 0, null, function* () {
      m.value = "pending", g.value = !0;
      let L;
      try {
        L = yield y(
          k == null ? void 0 : k.id,
          _
        );
      } catch (M) {
        if (M instanceof rs)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw mw.cx.eventlogging.stats.publishFailed(!0), M;
      }
      return L;
    }),
    isPublishDialogActive: g,
    publishStatus: m
  };
}, m9 = window.Vue.computed, p9 = () => {
  const e = nt(), { sourceSection: t } = ne(), { getCurrentTitleByLanguage: n } = cn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = P(), a = m9(
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
}, h9 = () => {
  const { targetLanguageURLParameter: e } = P(), { sourceSection: t } = ne();
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
}, f9 = window.Vue.ref, w9 = window.Vue.computed, v9 = () => {
  const e = h9(), { target: t, PUBLISHING_TARGETS: n } = Tt(), { targetPageTitleForPublishing: o } = Na(), s = f9([]), a = w9(
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
      if (!Xw() && t.value !== n.SANDBOX) {
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
}, _9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = Tt(), { currentSourcePage: n } = ot(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = P(), { sourceSection: a } = ne(), { targetPageTitleForPublishing: r } = Na();
  return (l) => x(void 0, null, function* () {
    const c = r.value, u = n.value.title, i = new mw.Title(u), d = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== d.user)
      try {
        yield $r.addWikibaseLink(
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
}, Ih = window.Vue.ref, S9 = () => {
  const e = Ih(!1), t = Ih(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ce = window.Vue.unref, Ge = window.Vue.createVNode, y9 = window.Vue.resolveDirective, ru = window.Vue.withDirectives, ga = window.Vue.openBlock, ma = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Rh = window.Vue.toDisplayString, x9 = window.Vue.createTextVNode, ns = window.Vue.createElementVNode, os = window.Vue.withCtx, zh = window.Vue.normalizeClass, C9 = { class: "sx-publisher" }, b9 = {
  key: 0,
  class: "mb-2"
}, k9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, $9 = { key: 0 }, V9 = { key: 1 }, E9 = ["href"], L9 = ["innerHTML"], T9 = { class: "sx-publisher__section-preview pa-5" }, A9 = ["innerHTML"], gr = window.Vue.computed, D9 = window.Vue.onMounted, P9 = window.Vue.ref, B9 = window.Vue.watch, Oh = window.Codex.CdxButton, lu = window.Codex.CdxIcon, F9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = ne(), { sectionSuggestion: n } = Le(), { isCurrentSectionPresent: o, isPresentLeadSection: s } = ht(), {
      targetLanguageURLParameter: a,
      sectionURLParameter: r
    } = P(), l = he(), c = gr(
      () => {
        var R;
        return s.value ? l.i18n("cx-sx-present-lead-section-label") : (R = t.value) == null ? void 0 : R.title;
      }
    ), { target: u, PUBLISHING_TARGETS: i } = Tt(), d = gr(() => u.value === i.SANDBOX ? l.i18n(
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
    } = S9(), {
      publishFeedbackMessages: f,
      isPublishingDisabled: w,
      addPublishFeedbackMessage: v,
      clearPublishFeedbackMessages: y,
      initializePublishFeedbackMessages: b
    } = v9(), _ = _9(), { doPublish: k, isPublishDialogActive: L, publishStatus: M, closePublishDialog: C } = g9(), D = (R = null) => x(this, null, function* () {
      if (w.value)
        return;
      const G = yield k(R, g.value);
      if (!G)
        return;
      const { publishFeedbackMessage: X, targetUrl: re } = G;
      if (p(X)) {
        C();
        return;
      } else
        X && v(X);
      M.value = w.value ? "failure" : "success", setTimeout(() => {
        if (w.value) {
          C();
          return;
        }
        _(re);
      }, 1e3);
    });
    D9(() => {
      b(), mw.cx.eventlogging.stats.publishStepAccess();
    });
    const I = p9(), Q = P9(!1), se = () => Q.value = !0;
    B9(Q, (R) => {
      R || (y(), b());
    });
    const oe = gr(() => {
      var R, G;
      return s.value ? l.i18n("cx-sx-present-lead-section-label") : (G = (R = n.value) == null ? void 0 : R.presentSections) == null ? void 0 : G[r.value];
    }), N = gr(() => {
      var X;
      const R = Z.getPageUrl(
        a.value,
        (X = n.value) == null ? void 0 : X.targetTitle
      ), G = s.value ? "" : (oe.value || "").replace(/ /g, "_");
      return `${R}#${G}`;
    });
    return (R, G) => {
      const X = y9("i18n");
      return ga(), ma("section", C9, [
        Ge(rB, {
          "is-publishing-disabled": ce(w),
          onPublishTranslation: D
        }, null, 8, ["is-publishing-disabled"]),
        ns("div", {
          class: zh(["sx-publisher__publish-panel", ce(o) ? "py-4" : "pa-4"])
        }, [
          ce(o) ? (ga(), ma("div", k9, [
            ce(s) ? ru((ga(), ma("h5", $9, null, 512)), [
              [X, void 0, "cx-sx-publisher-publish-panel-existing-lead-section-notice"]
            ]) : ru((ga(), ma("h5", V9, null, 512)), [
              [X, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            ns("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: N.value,
              target: "_blank"
            }, [
              x9(Rh(oe.value) + " ", 1),
              Ge(ce(lu), { icon: ce(Ba) }, null, 8, ["icon"])
            ], 8, E9)
          ])) : ru((ga(), ma("h5", b9, null, 512)), [
            [X, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          ns("div", {
            class: zh({ "px-4 mt-4": ce(o) })
          }, [
            ns("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: d.value
            }, null, 8, L9),
            Ge(ce(U), {
              justify: "end",
              class: "ma-0"
            }, {
              default: os(() => [
                Ge(ce(V), { shrink: "" }, {
                  default: os(() => [
                    Ge(ce(Oh), {
                      weight: "quiet",
                      "aria-label": R.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: se
                    }, {
                      default: os(() => [
                        Ge(ce(lu), { icon: ce(Vx) }, null, 8, ["icon"])
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
        Ge(a9, { "publish-feedback-messages": ce(f) }, null, 8, ["publish-feedback-messages"]),
        ns("section", T9, [
          Ge(ce(U), { class: "pb-5 ma-0" }, {
            default: os(() => [
              Ge(ce(V), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: Rh(c.value)
              }, null, 8, ["textContent"]),
              Ge(ce(V), { shrink: "" }, {
                default: os(() => [
                  Ge(ce(Oh), {
                    weight: "quiet",
                    "aria-label": R.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ce(I)
                  }, {
                    default: os(() => [
                      Ge(ce(lu), { icon: ce(Ku) }, null, 8, ["icon"])
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
            innerHTML: ce(t).translationHtml
          }, null, 8, A9)
        ]),
        Ge(KB, {
          active: Q.value,
          "onUpdate:active": G[0] || (G[0] = (re) => Q.value = re)
        }, null, 8, ["active"]),
        Ge(TB, {
          active: ce(m),
          "captcha-details": ce(g),
          onClose: ce(h),
          onPublish: G[1] || (G[1] = (re) => D(re))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ge(fB, {
          active: ce(L),
          status: ce(M)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const N9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: F9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, M9 = window.Vue.resolveComponent, U9 = window.Vue.createVNode, I9 = window.Vue.normalizeClass, R9 = window.Vue.openBlock, z9 = window.Vue.createElementBlock;
function O9(e, t, n, o, s, a) {
  const r = M9("sx-publisher");
  return R9(), z9("main", {
    class: I9(["sx-publisher-view", a.classes])
  }, [
    U9(r)
  ], 2);
}
const j9 = /* @__PURE__ */ pe(N9, [["render", O9]]);
const Ht = window.Vue.unref, Jn = window.Vue.createVNode, yo = window.Vue.withCtx, cu = window.Vue.toDisplayString, uu = window.Vue.createElementVNode, jh = window.Vue.openBlock, Hh = window.Vue.createBlock, H9 = window.Vue.createCommentVNode, q9 = ["textContent"], G9 = ["textContent"], W9 = ["textContent"], Qw = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: ls,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (jh(), Hh(Ht(U), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Ht(O.getDir)(e.suggestion.language)
    }, {
      default: yo(() => [
        Jn(Ht(V), { shrink: "" }, {
          default: yo(() => [
            Jn(Ht(Pu), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Jn(Ht(V), { class: "ms-4" }, {
          default: yo(() => [
            Jn(Ht(U), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: yo(() => [
                Jn(Ht(V), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: yo(() => [
                    uu("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: cu(e.suggestion.title)
                    }, null, 8, q9)
                  ]),
                  _: 1
                }),
                Jn(Ht(V), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: yo(() => [
                    uu("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: cu(e.suggestion.description)
                    }, null, 8, G9)
                  ]),
                  _: 1
                }),
                Jn(Ht(V), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: yo(() => [
                    e.suggestion.inFeaturedCollection ? (jh(), Hh(Fr, {
                      key: 0,
                      class: "me-2"
                    })) : H9("", !0),
                    Jn(Ht(et), {
                      icon: Ht(D0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    uu("small", {
                      textContent: cu((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, W9)
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
const qh = window.Vue.unref, pa = window.Vue.openBlock, du = window.Vue.createBlock, X9 = window.Vue.createCommentVNode, K9 = window.Vue.resolveDirective, Y9 = window.Vue.withDirectives, Gh = window.Vue.createElementBlock, Q9 = window.Vue.renderList, J9 = window.Vue.Fragment, Z9 = window.Vue.normalizeClass, e7 = window.Vue.withCtx, t7 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, Wh = window.Vue.computed, n7 = window.Vue.ref, o7 = {
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
    const { sourceLanguageURLParameter: t } = P(), n = Wh(() => O.getAutonym(t.value)), o = e, s = n7(null), a = (u) => s.value = u, r = () => s.value = null, l = (u) => {
      var i;
      return ((i = o.selectedItem) == null ? void 0 : i.title) === u.title && !s.value || s.value === u.pageId;
    }, c = Wh(() => o.searchInput);
    return (u, i) => {
      const d = K9("i18n");
      return pa(), du(qh(Ze), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: e7(() => [
          e.searchResultsLoading ? (pa(), du(qh(mt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : e.searchResultsSlice.length === 0 ? Y9((pa(), Gh("p", t7, null, 512)), [
            [d, [
              c.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : X9("", !0),
          (pa(!0), Gh(J9, null, Q9(e.searchResultsSlice, (g) => (pa(), du(Qw, {
            key: g.pageId,
            suggestion: g,
            class: Z9({
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
const s7 = window.Vue.toDisplayString, a7 = window.Vue.createElementVNode, i7 = window.Vue.renderList, r7 = window.Vue.Fragment, gu = window.Vue.openBlock, l7 = window.Vue.createElementBlock, c7 = window.Vue.normalizeClass, Xh = window.Vue.createBlock, u7 = window.Vue.unref, Kh = window.Vue.withCtx, d7 = ["textContent"], g7 = window.Vue.ref, Yh = {
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
    const n = e, o = g7(null), s = (l) => o.value = l, a = () => o.value = null, r = (l) => {
      var c;
      return ((c = n.selectedItem) == null ? void 0 : c.title) === l.title && !o.value || o.value === l.pageId;
    };
    return (l, c) => (gu(), Xh(u7(Ze), { class: "sx-article-search__suggestions pa-0" }, {
      header: Kh(() => [
        a7("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: s7(e.cardTitle)
        }, null, 8, d7)
      ]),
      default: Kh(() => [
        (gu(!0), l7(r7, null, i7(e.suggestions, (u) => (gu(), Xh(Qw, {
          key: u.pageId,
          suggestion: u,
          class: c7({
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
}, m7 = window.Vue.computed, p7 = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), Qh = "other", h7 = (e) => m7((t) => {
  const o = e.value.slice(0, 3), s = {
    value: Qh,
    props: {
      icon: N0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== Qh);
  return p7(a, o) ? t : [...o.map((l) => ({
    value: l,
    props: {
      label: O.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), s];
}), f7 = window.Vue.computed, w7 = () => {
  const { supportedLanguageCodes: e } = Aa(), { targetLanguageURLParameter: t } = P();
  return { getSuggestedSourceLanguages: (o) => f7(() => {
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
}, v7 = window.Vue.ref, _7 = () => {
  const e = v7([]), t = () => {
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
const S7 = window.Vue.resolveDirective, y7 = window.Vue.createElementVNode, mu = window.Vue.withDirectives, me = window.Vue.unref, ha = window.Vue.withCtx, tn = window.Vue.createVNode, fa = window.Vue.openBlock, Jh = window.Vue.createBlock, x7 = window.Vue.createCommentVNode, pu = window.Vue.createElementBlock, C7 = window.Vue.Fragment, b7 = window.Vue.vShow, wa = window.Vue.withModifiers, va = window.Vue.withKeys, k7 = ["onKeydown"], $7 = { class: "mb-0" }, V7 = {
  key: 2,
  class: "sx-article-search__empty-state"
}, _a = window.Vue.ref, E7 = window.Vue.onMounted, Sa = window.Vue.computed, Zh = window.Vue.watch, L7 = window.Vue.inject, T7 = window.Vuex.useStore, A7 = window.Codex.CdxButton, D7 = window.Codex.CdxIcon, P7 = window.Codex.CdxSearchInput, B7 = 3, F7 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = _a(""), n = _a(!1), o = _a(null), s = _a(!1), { previousLanguages: a, addLanguageToHistory: r } = _7(), l = T7(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = P(), { supportedLanguageCodes: i } = Aa(), { searchResultsLoading: d, searchResultsSlice: g } = Lw(
      c,
      t
    ), { getSuggestedSourceLanguages: m } = w7(), p = m(a), h = h7(
      p
    ), f = nt(), { fetchAllTranslations: w } = ms();
    E7(() => x(this, null, function* () {
      var B;
      w(), r(c.value), (B = o.value) == null || B.focus();
    }));
    const v = () => {
      f.push({ name: "dashboard" });
    }, y = Gf(), b = (B) => {
      y(B, u.value), r(B);
    }, _ = (B) => {
      if (B === "other") {
        s.value = !0;
        return;
      }
      b(B);
    };
    Zh(
      c,
      () => {
        var B;
        l.dispatch("mediawiki/fetchNearbyPages"), (B = o.value) == null || B.focus();
      },
      { immediate: !0 }
    );
    const k = Lt();
    Zh(t, () => {
      n.value || (n.value = !0, k({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const L = () => {
      s.value = !1;
    }, M = (B) => {
      s.value = !1, _(B);
    }, { fetchPreviousEditsInSource: C, previousEditsInSource: D } = Tf(), I = _a([]);
    (() => C().then(() => D.value.length > 0 ? ko.fetchPages(
      c.value,
      D.value
    ) : []).then((B) => {
      B = B.slice(0, B7), B = B.sort(
        (j, S) => D.value.indexOf(j.title) - D.value.indexOf(S.title)
      ), I.value = B;
    }))();
    const se = Sa(() => l.getters["mediawiki/getNearbyPages"]), oe = L7("breakpoints"), N = Sa(() => oe.value.mobile), R = Fa(), G = Sa(
      () => I.value && I.value.length
    ), X = Sa(
      () => se.value && se.value.length
    ), { next: re, prev: xe, keyboardNavigationContainer: ke, selectedItem: $e } = $w(t, g, I), Ne = (B) => R(
      B.title,
      c.value,
      u.value,
      z.value
    ), z = Sa(() => t.value ? "search_result" : G.value ? "suggestion_recent_edit" : X.value ? "suggestion_nearby" : "");
    return (B, j) => {
      const S = S7("i18n");
      return fa(), pu("section", {
        ref_key: "keyboardNavigationContainer",
        ref: ke,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          j[5] || (j[5] = va(wa((...E) => me(re) && me(re)(...E), ["stop", "prevent"]), ["tab"])),
          j[6] || (j[6] = va(wa((...E) => me(re) && me(re)(...E), ["stop", "prevent"]), ["down"])),
          j[7] || (j[7] = va(wa((...E) => me(xe) && me(xe)(...E), ["stop", "prevent"]), ["up"])),
          va(wa(v, ["stop", "prevent"]), ["esc"]),
          j[8] || (j[8] = va(wa((E) => Ne(me($e)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        tn(me(U), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ha(() => [
            tn(me(V), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ha(() => [
                mu(y7("h5", $7, null, 512), [
                  [S, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            tn(me(V), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ha(() => [
                tn(me(A7), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": B.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: v
                }, {
                  default: ha(() => [
                    tn(me(D7), { icon: me(ds) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        tn(me(P7), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": j[0] || (j[0] = (E) => t.value = E),
          class: "sx-article-search__search-input",
          placeholder: B.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        tn(me(Ea), {
          class: "sx-article-search__language-button-group",
          items: me(h),
          active: me(c),
          onSelect: _
        }, null, 8, ["items", "active"]),
        t.value ? x7("", !0) : (fa(), pu(C7, { key: 0 }, [
          G.value ? (fa(), Jh(Yh, {
            key: 0,
            "card-title": B.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: I.value,
            "selected-item": me($e),
            onSuggestionClicked: j[1] || (j[1] = (E) => Ne(E))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : X.value ? (fa(), Jh(Yh, {
            key: 1,
            "card-title": B.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: se.value,
            onSuggestionClicked: j[2] || (j[2] = (E) => Ne(E))
          }, null, 8, ["card-title", "suggestions"])) : mu((fa(), pu("p", V7, null, 512)), [
            [S, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        mu(tn(o7, {
          "search-input": t.value,
          "search-results-loading": me(d),
          "search-results-slice": me(g),
          "selected-item": me($e),
          onSuggestionClicked: j[3] || (j[3] = (E) => Ne(E))
        }, null, 8, ["search-input", "search-results-loading", "search-results-slice", "selected-item"]), [
          [b7, !!t.value]
        ]),
        tn(me(Vt), {
          value: s.value,
          "onUpdate:value": j[4] || (j[4] = (E) => s.value = E),
          class: "sx-article-search-language-selector",
          fullscreen: N.value,
          header: N.value,
          title: B.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: L
        }, {
          default: ha(() => [
            tn(me(Vw), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: me(i),
              suggestions: me(p),
              placeholder: B.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: M,
              onClose: L
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, k7);
    };
  }
};
const N7 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: F7
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, M7 = window.Vue.resolveComponent, U7 = window.Vue.createVNode, I7 = window.Vue.normalizeClass, R7 = window.Vue.openBlock, z7 = window.Vue.createElementBlock;
function O7(e, t, n, o, s, a) {
  const r = M7("sx-article-search");
  return R7(), z7("main", {
    class: I7(["sx-article-search-view", a.classes])
  }, [
    U7(r)
  ], 2);
}
const j7 = /* @__PURE__ */ pe(N7, [["render", O7]]), H7 = () => {
  const e = Fa(), t = cd(), { logDashboardOpenEvent: n } = Dw(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s,
    pageURLParameter: a
  } = P();
  return () => x(void 0, null, function* () {
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
}, q7 = window.Vuex.useStore, G7 = [
  {
    path: "",
    name: "dashboard",
    component: zm,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: j7,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: j3,
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
    component: l5,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: CT,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: wP,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: R6,
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
    component: nB,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: j9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: zm,
    meta: { workflowStep: 0 }
  }
], gd = dk({
  history: ub(),
  routes: G7
}), hu = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, W7 = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
gd.beforeEach((e, t, n) => {
  const o = q7();
  if (mw.user.isAnon() || sf.assertUser().catch((i) => {
    i instanceof rs && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = H7(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: c
  } = P();
  if (!!(a.value && r.value && l.value)) {
    if (W7(
      a.value,
      r.value,
      l.value
    )) {
      const d = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      hu(e.name, d, n);
    } else
      e.name === "sx-translation-confirmer" && s(), hu(e.name, "sx-translation-confirmer", n);
    return;
  }
  c(), hu(e.name, "dashboard", n);
});
gd.afterEach((e, t) => {
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
const X7 = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, K7 = window.Vue.createApp, Y7 = mw.config.get("wgUserLanguage"), Q7 = "en", J7 = mw.messages.values || {}, Vo = K7(eC);
Vo.use(gd);
Vo.use(DC);
Vo.use(a1);
Vo.use(s1);
const Z7 = M1({
  locale: Y7,
  finalFallback: Q7,
  messages: J7,
  wikilinks: !0
});
Vo.use(Z7);
Vo.use(X7);
Vo.mount("#contenttranslation");
