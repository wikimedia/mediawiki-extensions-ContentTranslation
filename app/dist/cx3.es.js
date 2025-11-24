var Rw = Object.defineProperty, zw = Object.defineProperties;
var Ow = Object.getOwnPropertyDescriptors;
var sd = Object.getOwnPropertySymbols;
var jw = Object.prototype.hasOwnProperty, Hw = Object.prototype.propertyIsEnumerable;
var ad = (e, t, n) => t in e ? Rw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ce = (e, t) => {
  for (var n in t || (t = {}))
    jw.call(t, n) && ad(e, n, t[n]);
  if (sd)
    for (var n of sd(t))
      Hw.call(t, n) && ad(e, n, t[n]);
  return e;
}, Ye = (e, t) => zw(e, Ow(t));
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
const ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, qw = {
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
}, Gw = window.Vue.toDisplayString, Mr = window.Vue.openBlock, Ur = window.Vue.createElementBlock, Ww = window.Vue.createCommentVNode, id = window.Vue.createElementVNode, Xw = window.Vue.normalizeClass, Kw = ["width", "height", "aria-labelledby"], Yw = ["id"], Qw = ["fill"], Jw = ["d"];
function Zw(e, t, n, o, s, a) {
  return Mr(), Ur("span", {
    class: Xw(["mw-ui-icon notranslate", a.classes])
  }, [
    (Mr(), Ur("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (Mr(), Ur("title", {
        key: 0,
        id: n.iconName
      }, Gw(n.iconName), 9, Yw)) : Ww("", !0),
      id("g", { fill: n.iconColor }, [
        id("path", { d: a.iconImagePath }, null, 8, Jw)
      ], 8, Qw)
    ], 8, Kw))
  ], 2);
}
const et = /* @__PURE__ */ ge(qw, [["render", Zw]]);
const e0 = {
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
}, t0 = window.Vue.renderSlot, n0 = window.Vue.resolveComponent, rd = window.Vue.normalizeClass, Ia = window.Vue.openBlock, Ir = window.Vue.createBlock, Rr = window.Vue.createCommentVNode, o0 = window.Vue.toDisplayString, s0 = window.Vue.createElementBlock, a0 = window.Vue.toHandlerKey, i0 = window.Vue.withModifiers, r0 = window.Vue.mergeProps, l0 = window.Vue.createElementVNode, c0 = window.Vue.resolveDynamicComponent, u0 = window.Vue.withCtx, d0 = { class: "mw-ui-button__content" }, g0 = ["textContent"];
function p0(e, t, n, o, s, a) {
  const r = n0("mw-icon");
  return Ia(), Ir(c0(a.component), {
    class: rd(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: u0(() => [
      t0(e.$slots, "default", {}, () => [
        l0("span", d0, [
          n.icon ? (Ia(), Ir(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: rd(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Rr("", !0),
          !a.isIcon && n.label ? (Ia(), s0("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: o0(n.label)
          }, null, 8, g0)) : Rr("", !0),
          n.indicator ? (Ia(), Ir(r, r0({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [a0(a.indicatorClickEvent)]: t[0] || (t[0] = i0((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Rr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Xe = /* @__PURE__ */ ge(e0, [["render", p0]]);
const m0 = {
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
}, h0 = window.Vue.renderList, f0 = window.Vue.Fragment, zr = window.Vue.openBlock, ld = window.Vue.createElementBlock, w0 = window.Vue.resolveComponent, v0 = window.Vue.withModifiers, _0 = window.Vue.mergeProps, S0 = window.Vue.createBlock, y0 = { class: "row mw-ui-button-group ma-0 pa-0" };
function x0(e, t, n, o, s, a) {
  const r = w0("mw-button");
  return zr(), ld("div", y0, [
    (zr(!0), ld(f0, null, h0(n.items, (l) => (zr(), S0(r, _0({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: v0((c) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Ca = /* @__PURE__ */ ge(m0, [["render", x0]]);
const b0 = {
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
}, cd = window.Vue.renderSlot, C0 = window.Vue.toDisplayString, ud = window.Vue.openBlock, dd = window.Vue.createElementBlock, k0 = window.Vue.createCommentVNode, $0 = window.Vue.createElementVNode, V0 = { class: "mw-ui-card" }, E0 = ["textContent"], L0 = { class: "mw-ui-card__content" };
function T0(e, t, n, o, s, a) {
  return ud(), dd("div", V0, [
    cd(e.$slots, "header", {}, () => [
      n.title ? (ud(), dd("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: C0(n.title)
      }, null, 8, E0)) : k0("", !0)
    ]),
    $0("div", L0, [
      cd(e.$slots, "default")
    ])
  ]);
}
const Ze = /* @__PURE__ */ ge(b0, [["render", T0]]);
const A0 = {}, D0 = window.Vue.openBlock, P0 = window.Vue.createElementBlock, B0 = { class: "mw-ui-divider row" };
function F0(e, t) {
  return D0(), P0("div", B0);
}
const mr = /* @__PURE__ */ ge(A0, [["render", F0]]);
const N0 = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, M0 = window.Vue.renderSlot, U0 = window.Vue.resolveDynamicComponent, I0 = window.Vue.withCtx, R0 = window.Vue.openBlock, z0 = window.Vue.createBlock;
function O0(e, t, n, o, s, a) {
  return R0(), z0(U0(n.tag), { class: "mw-grid container" }, {
    default: I0(() => [
      M0(e.$slots, "default")
    ]),
    _: 3
  });
}
const j0 = /* @__PURE__ */ ge(N0, [["render", O0]]), H0 = {
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
}, q0 = window.Vue.renderSlot, G0 = window.Vue.resolveDynamicComponent, W0 = window.Vue.normalizeClass, X0 = window.Vue.withCtx, K0 = window.Vue.openBlock, Y0 = window.Vue.createBlock;
function Q0(e, t, n, o, s, a) {
  return K0(), Y0(G0(n.tag), {
    class: W0(a.classes)
  }, {
    default: X0(() => [
      q0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const I = /* @__PURE__ */ ge(H0, [["render", Q0]]), ru = ["mobile", "tablet", "desktop", "desktop-wide"], J0 = ru.reduce(
  (e, t) => Ye(ce({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), Z0 = {
  name: "MwCol",
  props: Ye(ce({}, J0), {
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
}, ev = window.Vue.renderSlot, tv = window.Vue.resolveDynamicComponent, nv = window.Vue.normalizeClass, ov = window.Vue.withCtx, sv = window.Vue.openBlock, av = window.Vue.createBlock;
function iv(e, t, n, o, s, a) {
  return sv(), av(tv(n.tag), {
    class: nv(a.classes)
  }, {
    default: ov(() => [
      ev(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const C = /* @__PURE__ */ ge(Z0, [["render", iv]]), rv = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", lv = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", hr = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", cv = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, uv = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Ih = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", dv = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", gv = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", fr = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", pv = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", mv = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", hv = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", gd = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", fv = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Rh = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", wv = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", vv = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", _v = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", Sv = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", yv = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", lu = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, xv = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, bv = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, zh = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", Cv = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const Or = window.Vue.computed, kv = window.Vue.watch, $v = window.Vue.ref, Vv = window.Vue.nextTick, Ev = {
  name: "MwDialog",
  components: {
    MwButton: Xe,
    MwRow: I,
    MwCol: C,
    MwDivider: mr
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
    const n = $v(null), o = Or(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = Or(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    kv(
      () => e.value,
      (c) => {
        c ? (r(), Vv(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = Or(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClass: s,
      mwIconClose: fr,
      root: n
    };
  }
}, pd = window.Vue.normalizeClass, jr = window.Vue.createElementVNode, Hr = window.Vue.renderSlot, Ra = window.Vue.resolveComponent, ms = window.Vue.createVNode, qr = window.Vue.withCtx, md = window.Vue.createCommentVNode, Lv = window.Vue.withKeys, hd = window.Vue.openBlock, Tv = window.Vue.createElementBlock, Av = window.Vue.Transition, Dv = window.Vue.normalizeStyle, Pv = window.Vue.createBlock, Bv = { class: "mw-ui-dialog__shell items-stretch" }, Fv = { class: "mw-ui-dialog__body" };
function Nv(e, t, n, o, s, a) {
  const r = Ra("mw-col"), l = Ra("mw-button"), c = Ra("mw-row"), u = Ra("mw-divider");
  return hd(), Pv(Av, {
    name: "mw-ui-animation-fade",
    style: Dv(o.cssVars)
  }, {
    default: qr(() => [
      n.value ? (hd(), Tv("div", {
        key: 0,
        ref: "root",
        class: pd(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = Lv((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        jr("div", {
          class: pd(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        jr("div", Bv, [
          n.header ? Hr(e.$slots, "header", { key: 0 }, () => [
            ms(c, { class: "mw-ui-dialog__header" }, {
              default: qr(() => [
                ms(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                ms(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: qr(() => [
                    ms(l, {
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
            ms(u)
          ]) : md("", !0),
          jr("div", Fv, [
            Hr(e.$slots, "default")
          ]),
          Hr(e.$slots, "footer")
        ])
      ], 34)) : md("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const kt = /* @__PURE__ */ ge(Ev, [["render", Nv]]);
const Mv = {
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
      const t = ce({}, e.$attrs);
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
}, fd = window.Vue.renderSlot, Uv = window.Vue.resolveComponent, za = window.Vue.openBlock, Gr = window.Vue.createBlock, wd = window.Vue.createCommentVNode, Iv = window.Vue.resolveDynamicComponent, Rv = window.Vue.toDisplayString, zv = window.Vue.mergeProps, Ov = window.Vue.withModifiers, jv = window.Vue.createElementVNode, Hv = window.Vue.normalizeClass, qv = window.Vue.createElementBlock, Gv = { class: "mw-ui-input__content" };
function Wv(e, t, n, o, s, a) {
  const r = Uv("mw-icon");
  return za(), qv("div", {
    class: Hv(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    jv("div", Gv, [
      fd(e.$slots, "icon", {}, () => [
        n.icon ? (za(), Gr(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : wd("", !0)
      ]),
      (za(), Gr(Iv(n.type === "textarea" ? n.type : "input"), zv({
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
        textContent: Rv(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      fd(e.$slots, "indicator", {}, () => [
        n.indicator ? (za(), Gr(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = Ov((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : wd("", !0)
      ])
    ])
  ], 2);
}
const cu = /* @__PURE__ */ ge(Mv, [["render", Wv]]);
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
const Xv = {}, Kv = window.Vue.createElementVNode, Yv = window.Vue.openBlock, Qv = window.Vue.createElementBlock, Jv = { class: "mw-ui-spinner" }, Zv = /* @__PURE__ */ Kv("div", { class: "mw-ui-spinner__bounce" }, null, -1), e_ = [
  Zv
];
function t_(e, t) {
  return Yv(), Qv("div", Jv, e_);
}
const dt = /* @__PURE__ */ ge(Xv, [["render", t_]]), bt = {
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
const n_ = window.Vue.computed, o_ = {
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
      default: zh
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: bt.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: bt.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = n_(() => {
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
}, vd = window.Vue.normalizeStyle, _d = window.Vue.openBlock, s_ = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const a_ = window.Vue.resolveComponent, i_ = window.Vue.createBlock;
function r_(e, t, n, o, s, a) {
  const r = a_("mw-ui-icon");
  return n.thumbnail ? (_d(), s_("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: vd(o.style)
  }, null, 4)) : (_d(), i_(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: vd(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const xu = /* @__PURE__ */ ge(o_, [["render", r_]]);
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
const l_ = {
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
}, Sd = window.Vue.normalizeClass, yd = window.Vue.normalizeStyle, c_ = window.Vue.createElementVNode, u_ = window.Vue.openBlock, d_ = window.Vue.createElementBlock, g_ = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function p_(e, t, n, o, s, a) {
  return u_(), d_("div", {
    class: Sd(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: yd(a.containerStyles)
  }, [
    c_("div", {
      class: Sd(["mw-progress-bar__bar", a.barClass]),
      style: yd(a.barStyles)
    }, null, 6)
  ], 14, g_);
}
const Oh = /* @__PURE__ */ ge(l_, [["render", p_]]), m_ = (e, t, n, o) => (s) => {
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
}, h_ = (e, t, n, o) => ({ initiateDrag: m_(
  e,
  t,
  n,
  o
) }), f_ = window.Vue.ref, xd = window.Vue.computed, w_ = (e, t, n, o) => {
  const s = f_(0), a = xd(
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
const Oa = window.Vue.ref, v_ = window.Vue.onMounted, bd = window.Vue.computed, __ = window.Vue.nextTick, S_ = {
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
    const t = Oa(!0), n = Oa(null), o = bd(
      () => Math.min(e.minHeight, s.value)
    ), s = Oa(1), { initiateDrag: a } = h_(
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
    } = w_(o, s, n, t), d = () => u(c.value + 1), g = Oa(null), p = bd(() => ({
      "--collapsed-height": o.value + "px"
    })), m = () => {
      if (!n.value)
        return;
      const f = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, f) {
        let v = Math.min(f, s.value);
        v = Math.max(v, o.value), v === o.value && (t.value = !0), n.value.style.height = v + "px";
      }
    };
    return v_(() => x(this, null, function* () {
      var f;
      yield __(), s.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
        "pointerdown",
        a,
        !1
      ), window.addEventListener("resize", m);
    })), {
      contentRef: n,
      cssVars: p,
      dragIndicatorRef: g,
      handleArrowUpClick: i,
      isCollapsed: t,
      isScrolledToEnd: r,
      mwIconCollapse: bv,
      mwIconExpand: dv,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), u(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: c,
      scrollToNextStep: d
    };
  }
}, y_ = window.Vue.renderSlot, x_ = window.Vue.normalizeClass, ja = window.Vue.createElementVNode, b_ = window.Vue.resolveComponent, C_ = window.Vue.createVNode, Wr = window.Vue.openBlock, k_ = window.Vue.createBlock, Cd = window.Vue.createCommentVNode, kd = window.Vue.createElementBlock, $_ = window.Vue.normalizeStyle, V_ = { class: "mw-ui-expandable-content__container" }, E_ = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, L_ = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function T_(e, t, n, o, s, a) {
  const r = b_("mw-button");
  return Wr(), kd("div", {
    class: "mw-ui-expandable-content",
    style: $_(o.cssVars)
  }, [
    ja("div", V_, [
      ja("div", {
        ref: "contentRef",
        class: x_(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        y_(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (Wr(), kd("div", E_, [
        C_(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (Wr(), k_(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Cd("", !0)
      ])) : Cd("", !0)
    ]),
    ja("div", L_, [
      ja("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const A_ = /* @__PURE__ */ ge(S_, [["render", T_]]);
const Ha = window.Vue.computed, D_ = {
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
      default: bt.blue600
    },
    inactiveColor: {
      type: String,
      default: bt.gray300
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
}, $d = window.Vue.createElementVNode, Vd = window.Vue.normalizeStyle, P_ = window.Vue.openBlock, B_ = window.Vue.createElementBlock, F_ = ["width", "height", "viewport"], N_ = ["r", "cx", "cy", "stroke-dasharray"], M_ = ["r", "cx", "cy", "stroke-dasharray"];
function U_(e, t, n, o, s, a) {
  return P_(), B_("svg", {
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
    }, null, 8, N_),
    $d("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: Vd({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, M_)
  ], 12, F_);
}
const I_ = /* @__PURE__ */ ge(D_, [["render", U_]]), R_ = window.Vue.ref, Vn = {
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
}, Xr = {
  mobile: () => matchMedia(An.mobile).matches,
  tablet: () => matchMedia(An.tablet).matches,
  desktop: () => matchMedia(An.desktop).matches,
  desktopwide: () => matchMedia(An["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(An["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(An["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(An["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(An["desktop-and-down"]).matches
}, z_ = (e) => {
  const t = Object.values(Vn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, O_ = {
  install: (e) => {
    const t = R_({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in Xr)
        Xr.hasOwnProperty(s) && (t.value[s] = Xr[s]());
      t.value.nextBreakpoint = z_(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Ye(ce({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, j_ = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ye(ce({}, e.config.globalProperties.$mwui || {}), {
      colors: bt
    }), e.provide("colors", bt);
  }
};
class os extends Error {
}
const H_ = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new os();
}), jh = { assertUser: H_ };
const q_ = window.Vue.resolveDirective, hs = window.Vue.createElementVNode, Ed = window.Vue.withDirectives, G_ = window.Vue.toDisplayString, W_ = window.Vue.unref, Ld = window.Vue.withCtx, X_ = window.Vue.openBlock, K_ = window.Vue.createBlock, Y_ = window.Vue.createCommentVNode, Q_ = { class: "pa-4 sx-login-dialog__header" }, J_ = { class: "sx-login-dialog__body px-6 pb-4" }, Z_ = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, e1 = ["href"], t1 = window.Vue.computed, n1 = window.Vue.ref, o1 = window.Vuex.useStore, s1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = o1(), n = t1(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = n1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = q_("i18n");
      return n.value ? (X_(), K_(W_(kt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Ld(() => [
          hs("div", Q_, [
            Ed(hs("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Ld(() => [
          Ed(hs("div", J_, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          hs("div", Z_, [
            hs("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, G_(a.$i18n("cx-sx-login-dialog-button-label")), 9, e1)
          ])
        ]),
        _: 1
      })) : Y_("", !0);
    };
  }
}, J = new mw.cx.SiteMapper(), a1 = mw.util.getUrl, i1 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, Ht = !mw.config.get("wgMFMode");
class bu {
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
const qa = "original", Ga = "empty", r1 = {
  Elia: "Elia.eus",
  Google: "Google Translate"
};
class ae {
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
    return r1[t] || t;
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Ye(ce({}, a), {
      [ae.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [ae.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
  }
  reset() {
    this.proposedTranslations = {
      [ae.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [ae.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[ae.ORIGINAL_TEXT_PROVIDER_KEY];
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
  const t = dr(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, dr = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, wo = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Hh = (e) => {
  const t = dr(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = l1(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, l1 = (e) => {
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
}, qh = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Gh = (e) => {
  const t = qh(e);
  return t == null ? void 0 : t.targetExists;
};
class Kr {
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
    s && Gh(s) && (this.blockTemplateAdaptationInfo[t] = qh(s));
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
    const t = dr(this.transclusionNode);
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
    const o = dr(n);
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
      new Kr({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Kr({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new Kr({
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
    if (!t || ae.isUserMTProvider(t))
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
const Cu = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), c1 = Cu - 10, u1 = [
  { status: "failure", value: 100 - Cu },
  { status: "warning", value: 100 - c1 },
  { status: "success", value: 100 }
], Wh = (e, t, n) => {
  const o = Ad(e).textContent, s = Ad(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, d1 = (e) => u1.find((t) => e <= t.value).status, g1 = (e, t) => Wh(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), p1 = () => (100 - Cu) / 100, Ad = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, on = {
  calculateScore: Wh,
  getScoreStatus: d1,
  getMTScoreForPageSection: g1,
  getMtModificationThreshold: p1
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
      [ae.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [ae.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [ae.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return Wa;
  }
  static isSectionLead(t) {
    return !t || t === Wa;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[ae.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[ae.ORIGINAL_TEXT_PROVIDER_KEY];
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
class wr extends bu {
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
    targetSectionTitle: p,
    progress: m
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
    }), this.sectionTranslationId = t, this.sectionId = o, this.sourceSectionTitle = g, this.targetSectionTitle = p, this.progress = m, this.restored = !1;
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
const sn = "previous-edits", an = "popular", tt = "topic", Pe = "geography", ee = "collections", Ge = "automatic", qt = "seed", Dd = window.Vue.ref, { topics: m1, regions: h1 } = mw.loader.require(
  "ext.cx.articlefilters"
), Yr = {
  type: Ge,
  id: sn
}, f1 = {
  type: Ge,
  id: an
}, ku = () => {
  const e = Dd(
    m1.flatMap((u) => u.topics).map((u) => u.topicId.toLowerCase())
  ), t = Dd(!1), n = (u, i) => e.value.includes(i) ? { type: tt, id: i } : null, o = (u, i) => h1.some(
    (g) => g.id.toLowerCase() === i || g.countries.some(
      (p) => p.id.toLowerCase() === i
    )
  ) ? { type: Pe, id: i } : null, s = (u, i, d) => d && !d.some((g) => g.name.toLowerCase() === i) ? null : { type: ee, id: u }, a = ({ type: u, id: i }, d = !1) => {
    t.value = !1;
    const g = u == null ? void 0 : u.toLowerCase(), p = i == null ? void 0 : i.toLowerCase();
    if (p === sn)
      return {
        type: Ge,
        id: sn
      };
    if (p === an)
      return {
        type: Ge,
        id: an
      };
    if (p === ee)
      return d && !d.length ? (t.value = !0, Yr) : {
        type: Ge,
        id: ee
      };
    if (g === tt) {
      const m = n(i, p);
      if (m)
        return m;
      t.value = !0;
    } else if (g === Pe) {
      const m = o(i, p);
      if (m)
        return m;
      t.value = !0;
    } else if (g === ee) {
      const m = s(
        i,
        p,
        d
      );
      if (m)
        return m;
      t.value = !0;
    } else if (g === qt)
      return { type: qt, id: i };
    return Yr;
  }, r = ({ type: u, id: i }) => c({ type: u, id: i }, Yr), l = ({ type: u, id: i }) => c({ type: u, id: i }, f1), c = (u, i) => u.id === i.id && u.type === i.type;
  return {
    filtersValidatorError: t,
    validateFilters: a,
    isDefaultFilter: r,
    isPopularFilter: l,
    isEqualFilter: c
  };
}, w1 = window.Vue.inject, v1 = window.Vue.reactive;
var _1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Xh = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(_1, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(d) {
        this.locale = d;
      }
      convertPlural(d, g) {
        const p = /\d+=/i;
        if (!g || g.length === 0)
          return "";
        for (let h = 0; h < g.length; h++) {
          const f = g[h];
          if (p.test(f)) {
            if (parseInt(f.slice(0, f.indexOf("=")), 10) === d)
              return f.slice(f.indexOf("=") + 1);
            g[h] = void 0;
          }
        }
        g = g.filter((h) => !!h);
        let m = this.getPluralForm(d, this.locale);
        return m = Math.min(m, g.length - 1), g[m];
      }
      getPluralForm(d, g) {
        const p = new Intl.PluralRules(g), m = p.resolvedOptions().pluralCategories, h = p.select(d);
        return ["zero", "one", "two", "few", "many", "other"].filter((f) => m.includes(f)).indexOf(h);
      }
      convertNumber(d, g = !1) {
        let p = this.digitTransformTable(this.locale), m = "";
        if (g) {
          if (parseFloat(d, 10) === d || !p)
            return d;
          const h = [];
          for (const v in p)
            h[p[v]] = v;
          p = h;
          const f = String(d);
          for (let v = 0; v < f.length; v++)
            m += p[f[v]] || f[v];
          return parseFloat(m, 10);
        }
        if (Intl.NumberFormat) {
          let h;
          const f = [...o[this.locale] || [], "en"];
          return h = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : f, m = new Intl.NumberFormat(h).format(d), m === "NaN" && (m = d), m;
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
        const p = i;
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
            i = p;
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
        let g, p, m, h;
        switch (g = "мæ", p = "", m = "", h = "", i.match(/тæ$/i) ? (i = i.slice(0, -1), g = "æм") : i.match(/[аæеёиоыэюя]$/i) ? p = "й" : i.match(/у$/i) ? i.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (p = "й") : i.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), d) {
          case "genitive":
            h = m + p + "ы";
            break;
          case "dative":
            h = m + p + "æн";
            break;
          case "allative":
            h = m + g;
            break;
          case "ablative":
            h = p === "й" ? m + p + "æ" : m + p + "æй";
            break;
          case "superessive":
            h = m + p + "ыл";
            break;
          case "equative":
            h = m + p + "ау";
            break;
          case "comitative":
            h = m + "имæ";
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
        let p, m, h;
        switch (typeof d) {
          case "string":
          case "number":
            p = d;
            break;
          case "object":
            if (m = d.slice(1).map((f) => this.emit(f, g)), h = d[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            p = this[h](m, g);
            break;
          case "undefined":
            p = "";
            break;
          default:
            throw new Error("unexpected type in AST: " + typeof d);
        }
        return p;
      }
      concat(d) {
        let g = "";
        return d.forEach((p) => {
          g += p;
        }), g;
      }
      replace(d, g) {
        const p = parseInt(d[0], 10);
        return p < g.length ? g[p] : "$" + (p + 1);
      }
      plural(d) {
        const g = parseFloat(this.language.convertNumber(d[0], 10)), p = d.slice(1);
        return p.length ? this.language.convertPlural(g, p) : "";
      }
      gender(d) {
        const g = d[0], p = d.slice(1);
        return this.language.gender(g, p);
      }
      grammar(d) {
        const g = d[0], p = d[1];
        return p && g && this.language.convertGrammar(p, g);
      }
      wikilink(d) {
        let g, p = d[0];
        p.charAt(0) === ":" && (p = p.slice(1));
        const m = `./${p}`;
        return g = d.length === 1 ? p : d[1], `<a href="${m}" title="${p}">${g}</a>`;
      }
      extlink(d) {
        if (d.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${d[0]}">${d[1]}</a>`;
      }
      bidi(d) {
        const g = function(p) {
          const m = p.match(r);
          return m ? m[2] === void 0 ? "ltr" : "rtl" : null;
        }(d[0]);
        return g === "ltr" ? "‪" + d[0] + "‬" : g === "rtl" ? "‫" + d[0] + "‬" : d[0];
      }
      formatnum(d) {
        const g = !!d[1] && d[1] === "R", p = d[0];
        return typeof p == "string" || typeof p == "number" ? this.language.convertNumber(p, g) : p;
      }
      htmlattributes(d) {
        const g = {};
        for (let p = 0, m = d.length; p < m; p += 2)
          g[d[p]] = d[p + 1];
        return g;
      }
      htmlelement(d) {
        const g = d.shift(), p = d.shift();
        let m = d, h = "";
        for (const f in p)
          h += ` ${f}="${p[f]}"`;
        return Array.isArray(m) || (m = [m]), `<${g}${h}>${m.join("")}</${g}>`;
      }
    }
    class c {
      constructor(d, { wikilinks: g = !1 } = {}) {
        this.locale = d, this.wikilinks = g, this.emitter = new l(this.locale);
      }
      parse(d, g) {
        if (d.includes("{{") || d.includes("<") || this.wikilinks && d.includes("[")) {
          const p = function(m, { wikilinks: h = !1 } = {}) {
            let f = 0;
            function v(T) {
              return () => {
                for (let H = 0; H < T.length; H++) {
                  const Me = T[H]();
                  if (Me !== null)
                    return Me;
                }
                return null;
              };
            }
            function w(T) {
              const H = f, Me = [];
              for (let Et = 0; Et < T.length; Et++) {
                const Q = T[Et]();
                if (Q === null)
                  return f = H, null;
                Me.push(Q);
              }
              return Me;
            }
            function y(T, H) {
              return () => {
                const Me = f, Et = [];
                let Q = H();
                for (; Q !== null; )
                  Et.push(Q), Q = H();
                return Et.length < T ? (f = Me, null) : Et;
              };
            }
            function b(T) {
              const H = T.length;
              return () => {
                let Me = null;
                return m.slice(f, f + H) === T && (Me = T, f += H), Me;
              };
            }
            function S(T) {
              return () => {
                const H = m.slice(f).match(T);
                return H === null ? null : (f += H[0].length, H[0]);
              };
            }
            const k = S(/^\s+/), V = b("|"), U = b(":"), L = b("\\"), B = S(/^./), z = b("$"), X = S(/^\d+/), le = b('"'), ne = b("'"), N = S(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), R = S(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), q = v([G, S(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function G() {
              const T = w([L, B]);
              return T === null ? null : T[1];
            }
            const me = v([G, R]), $e = v([G, N]);
            function Se() {
              const T = w([z, X]);
              return T === null ? null : ["REPLACE", parseInt(T[1], 10) - 1];
            }
            const be = (Ke = S(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), P = function(T) {
              return T.toString();
            }, () => {
              const T = Ke();
              return T === null ? null : P(T);
            });
            var Ke, P;
            function M() {
              const T = w([V, y(0, bo)]);
              if (T === null)
                return null;
              const H = T[1];
              return H.length > 1 ? ["CONCAT"].concat(H) : H[0];
            }
            function oe() {
              const T = w([be, U, Se]);
              return T === null ? null : [T[0], T[2]];
            }
            function _() {
              const T = w([be, U, bo]);
              return T === null ? null : [T[0], T[2]];
            }
            function A() {
              const T = w([be, U]);
              return T === null ? null : [T[0], ""];
            }
            const E = v([function() {
              const T = w([v([oe, _, A]), y(0, M)]);
              return T === null ? null : T[0].concat(T[1]);
            }, function() {
              const T = w([be, y(0, M)]);
              return T === null ? null : [T[0]].concat(T[1]);
            }]), F = b("{{"), K = b("}}"), he = b("[["), W = b("]]"), j = b("["), se = b("]");
            function st() {
              const T = w([F, E, K]);
              return T === null ? null : T[1];
            }
            const Ve = v([function() {
              const T = w([y(1, bo), V, y(1, xo)]);
              return T === null ? null : [["CONCAT"].concat(T[0]), ["CONCAT"].concat(T[2])];
            }, function() {
              const T = w([y(1, bo)]);
              return T === null ? null : [["CONCAT"].concat(T[0])];
            }]);
            function Ba() {
              let T = null;
              const H = w([he, Ve, W]);
              if (H !== null) {
                const Me = H[1];
                T = ["WIKILINK"].concat(Me);
              }
              return T;
            }
            function Fa() {
              let T = null;
              const H = w([j, y(1, Dr), k, y(1, xo), se]);
              return H !== null && (T = ["EXTLINK", H[1].length === 1 ? H[1][0] : ["CONCAT"].concat(H[1]), ["CONCAT"].concat(H[3])]), T;
            }
            const no = S(/^[A-Za-z]+/);
            function Tr() {
              const T = S(/^[^"]*/), H = w([le, T, le]);
              return H === null ? null : H[1];
            }
            function Ar() {
              const T = S(/^[^']*/), H = w([ne, T, ne]);
              return H === null ? null : H[1];
            }
            function gs() {
              const T = S(/^\s*=\s*/), H = w([k, no, T, v([Tr, Ar])]);
              return H === null ? null : [H[1], H[3]];
            }
            function ps() {
              const T = y(0, gs)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], T);
            }
            const Dr = v([st, Se, Ba, Fa, function() {
              const T = y(1, q)();
              return T === null ? null : T.join("");
            }]), xo = v([st, Se, Ba, Fa, function() {
              let T = null;
              const H = f, Me = b("<"), Et = S(/^\/?/), Q = S(/^\s*>/), ln = w([Me, no, ps, Et, Q]);
              if (ln === null)
                return null;
              const Tn = f, mt = ln[1], Co = y(0, xo)(), Pr = f, nd = w([b("</"), no, Q]);
              if (nd === null)
                return ["CONCAT", m.slice(H, Tn)].concat(Co);
              const Nw = f, Mw = nd[1], od = ln[2];
              if (function(oo, Ma, Br, Fr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((oo = oo.toLowerCase()) !== (Ma = Ma.toLowerCase()) || Fr.allowedHtmlElements.indexOf(oo) === -1)
                  return !1;
                const Uw = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Ua = 0, Iw = Br.length; Ua < Iw; Ua += 2) {
                  const Nr = Br[Ua];
                  if (Fr.allowedHtmlCommonAttributes.indexOf(Nr) === -1 && (Fr.allowedHtmlAttributesByElement[oo] || []).indexOf(Nr) === -1 || Nr === "style" && Br[Ua + 1].search(Uw) !== -1)
                    return !1;
                }
                return !0;
              }(mt, Mw, od.slice(1)))
                T = ["HTMLELEMENT", mt, od].concat(Co);
              else {
                const oo = (Ma) => Ma.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                T = ["CONCAT", oo(m.slice(H, Tn))].concat(Co, oo(m.slice(Pr, Nw)));
              }
              return T;
            }, function() {
              const T = y(1, $e)();
              return T === null ? null : T.join("");
            }]), bo = v([st, Se, function() {
              const T = y(1, me)();
              return T === null ? null : T.join("");
            }]), Na = function() {
              const T = y(0, xo)();
              return T === null ? null : ["CONCAT"].concat(T);
            }();
            if (Na === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return Na;
          }(d, { wikilinks: this.wikilinks });
          return this.emitter.emit(p, g);
        }
        return this.simpleParse(d, g);
      }
      simpleParse(d, g) {
        return d.replace(/\$(\d+)/g, (p, m) => {
          const h = parseInt(m, 10) - 1;
          return g[h] !== void 0 ? g[h] : "$" + m;
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
          for (const p in d)
            if (p.indexOf("@") !== 0) {
              if (typeof d[p] == "object")
                return this.load(d);
              if (typeof d[p] != "string")
                throw new Error(`Invalid message for message ${p} in ${g} locale.`);
              break;
            }
          this.sourceMap.has(g) ? this.sourceMap.set(g, Object.assign(this.sourceMap.get(g), d)) : this.sourceMap.set(g, d);
        } else
          for (g in d)
            this.load(d[g], g);
      }
      getMessage(d, g) {
        const p = this.sourceMap.get(g);
        return p ? p[d] : null;
      }
      hasLocale(d) {
        return this.sourceMap.has(d);
      }
    }
    return class {
      constructor(i, { finalFallback: d = "en", messages: g, wikilinks: p = !1 } = {}) {
        this.locale = i, this.parser = new c(this.locale, { wikilinks: p }), this.messageStore = new u(), g && this.load(g, this.locale), this.finalFallback = d, this.wikilinks = p;
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
        const p = this.getFallbackLocales(this.locale);
        for (; d; ) {
          const m = d.split("-");
          let h = m.length;
          do {
            const f = m.slice(0, h).join("-"), v = this.messageStore.getMessage(i, f);
            if (typeof v == "string")
              return v;
            h--;
          } while (h);
          d = p[g], g++;
        }
        return i;
      }
      registerParserPlugin(i, d) {
        l.prototype[i] = d;
      }
    };
  });
})(Xh);
var S1 = Xh.exports;
const Pd = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Kh = Symbol("banana-context");
function pe() {
  const e = w1(Kh);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function y1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = v1(new S1(e.locale, e));
  return {
    install: (n) => {
      n.provide(Kh, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
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
const Ln = window.Vue.ref, x1 = window.Vue.computed, vr = Ln(null), _r = Ln(null), Sr = Ln(null), ka = Ln(null), $u = Ln(null), yr = Ln(null), Yh = Ln(null), Qh = Ln(null), Vu = Ln(null), { validateFilters: b1, filtersValidatorError: C1 } = ku(), Jh = {
  from: vr,
  to: _r,
  section: ka,
  draft: $u,
  page: Sr,
  revision: yr,
  "active-list": Vu
}, k1 = x1(() => ({
  type: Yh.value,
  id: Qh.value
})), Zh = (e, t) => {
  Yh.value = e, Qh.value = t, gr("filter-type", e), t && gr("filter-id", t);
}, $1 = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof wr && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), Jh[o].value = s;
  }
  t.delete("title"), $a(Object.fromEntries(t));
}, Eu = (e, t) => {
  Jh[e].value = t, gr(e, t);
}, V1 = (e) => {
  Eu("section", e);
}, E1 = (e) => {
  Eu("page", e);
}, L1 = (e) => {
  Eu("active-list", e);
}, $a = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    a1(`Special:ContentTranslation${t}`, e)
  );
}, T1 = () => {
  const e = pe(), t = new URLSearchParams(location.search);
  Sr.value = t.get("page"), vr.value = t.get("from"), _r.value = t.get("to"), ka.value = t.get("section"), yr.value = t.get("revision"), Vu.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = b1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Zh(n.type, n.id), C1.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, A1 = () => {
  const e = new URLSearchParams(location.search);
  ka.value = null, e.delete("section"), e.delete("title"), $a(Object.fromEntries(e));
}, gr = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), $a(Object.fromEntries(n));
}, D1 = (e) => new URLSearchParams(location.search).get(e), P1 = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), vr.value = e, _r.value = t, n.delete("title"), $a(Object.fromEntries(n));
}, B1 = () => {
  const e = new URLSearchParams(location.search);
  Sr.value = null, ka.value = null, $u.value = null, yr.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), $a(Object.fromEntries(e));
}, F1 = () => new URLSearchParams(location.search).get("force-quick-tutorial"), D = () => ({
  isQuickTutorialForced: F1,
  setLanguageURLParams: P1,
  setSectionURLParam: V1,
  setTranslationURLParams: $1,
  initializeURLState: T1,
  clearTranslationURLParameters: B1,
  clearSectionURLParameter: A1,
  setUrlParam: gr,
  getUrlParam: D1,
  pageURLParameter: Sr,
  sourceLanguageURLParameter: vr,
  targetLanguageURLParameter: _r,
  sectionURLParameter: ka,
  draftURLParameter: $u,
  revisionURLParameter: yr,
  setPageURLParam: E1,
  currentSuggestionFilters: k1,
  setFilterURLParams: Zh,
  activeDashboardTabParameter: Vu,
  setActiveDashboardTabParameter: L1
}), N1 = () => {
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
function M1(e, t) {
  return x(this, null, function* () {
    const n = J.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new ae(e, t, o.mt)
      )
    );
  });
}
function U1() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function I1(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = J.getWikiDomainCode(e), r = J.getWikiDomainCode(t), l = {
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
const xr = {
  fetchSupportedLanguageCodes: N1,
  fetchSupportedMTProviders: M1,
  fetchCXServerToken: U1,
  addWikibaseLink: I1
}, R1 = window.Vue.ref, Xa = R1([]);
let Bd = !1;
function Va() {
  return {
    fetchSupportedLanguageCodes: () => x(this, null, function* () {
      if (!Bd) {
        Bd = !0, Xa.value = yield xr.fetchSupportedLanguageCodes();
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
const z1 = {
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
}, O1 = {
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
}, j1 = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], H1 = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, q1 = {
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
}, G1 = {
  languages: z1,
  scriptgroups: O1,
  rtlscripts: j1,
  regiongroups: H1,
  territories: q1
};
var ze = G1;
function Ea(e) {
  return !!ze.languages[e];
}
function to(e) {
  return Ea(e) && ze.languages[e].length === 1 ? ze.languages[e][0] : !1;
}
function W1() {
  return ze.languages;
}
function La(e) {
  var t = to(e);
  return t ? La(t) : Ea(e) ? ze.languages[e][0] : "Zyyy";
}
function Lu(e) {
  var t = to(e);
  return t ? Lu(t) : Ea(e) && ze.languages[e][1] || "UNKNOWN";
}
function ya(e) {
  var t = to(e);
  return t ? ya(t) : Ea(e) && ze.languages[e][2] || e;
}
function X1() {
  var e, t = {};
  for (e in ze.languages)
    to(e) || (t[e] = ya(e));
  return t;
}
function ef(e) {
  var t, n, o = [];
  for (t in ze.languages)
    if (!to(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === La(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function K1(e) {
  return ef([e]);
}
function tf(e) {
  var t;
  for (t in ze.scriptgroups)
    if (ze.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Tu(e) {
  return tf(La(e));
}
function nf(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = to(n) || n, a = Tu(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function of(e) {
  var t, n, o, s = {};
  for (t in ze.languages)
    if (!to(t)) {
      for (n = 0; n < e.length; n++)
        if (Lu(t).includes(e[n])) {
          o = Tu(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function Y1(e) {
  return of([e]);
}
function Q1(e) {
  var t, n, o, s = [];
  for (t = nf(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function J1(e, t) {
  var n = ya(e) || e, o = ya(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function sf(e) {
  return ze.rtlscripts.includes(La(e));
}
function Z1(e) {
  return sf(e) ? "rtl" : "ltr";
}
function eS(e) {
  return ze.territories[e] || [];
}
function tS(e, t) {
  t.target ? ze.languages[e] = [t.target] : ze.languages[e] = [t.script, t.regions, t.autonym];
}
var O = {
  addLanguage: tS,
  getAutonym: ya,
  getAutonyms: X1,
  getDir: Z1,
  getGroupOfScript: tf,
  getLanguages: W1,
  getLanguagesByScriptGroup: nf,
  getLanguagesByScriptGroupInRegion: Y1,
  getLanguagesByScriptGroupInRegions: of,
  getLanguagesInScript: K1,
  getLanguagesInScripts: ef,
  getLanguagesInTerritory: eS,
  getRegions: Lu,
  getScript: La,
  getScriptGroupOfLanguage: Tu,
  isKnown: Ea,
  isRedirect: to,
  isRtl: sf,
  sortByScriptGroup: Q1,
  sortByAutonym: J1
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
    _alias: p,
    content: m = null,
    sections: h = []
  } = {}) {
    var f;
    this.language = l, this.title = d, this.pageId = r, this.description = t, this.image = s, this.imageName = a, this.pageprops = c, this.pageviews = u, this.thumbnail = i, this.langLinksCount = n, this.articleSize = (f = g == null ? void 0 : g[0]) == null ? void 0 : f.size, this.revision = o, this.alias = p, this.wikidataId = c == null ? void 0 : c.wikibase_item, this.content = m, this.sections = h;
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
class nS {
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
function oS() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const sS = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), oS();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, aS = (e, t) => {
  let n, o;
  return t ? (n = sS(e), o = n.$element.find(
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
}, iS = (e, t) => {
  const n = Array.from(
    aS(e, t)
  );
  return rS(n).map(
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
          sentences: lS(i),
          node: i
        })
      );
      return new Qn({ id: c, subSections: u, isLeadSection: l });
    }
  );
}, rS = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, lS = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Kn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), af = {
  convertSegmentedContentToPageSections: iS
}, Au = 120, cS = (e, t) => {
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
  return J.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (i, d) => Ye(ce({}, i), { [d.to]: d.from }),
      {}
    ), u = (s.query.normalized || []).reduce(
      (i, d) => Ye(ce({}, i), {
        [d.to]: d.from
      }),
      {}
    );
    return a.map((i) => {
      const d = u[i.title] || l[i.title] || null;
      return new ss(Ye(ce({}, i), { _alias: d }));
    });
  });
}, uS = (e, t) => {
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
  return J.getApi(e).get(n).then((s) => {
    var c, u;
    const a = s.query.pages;
    if (!a || !a.length || (c = a[0]) != null && c.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (u = a[0].pageprops) == null ? void 0 : u.wikibase_item;
    return l ? Object.freeze(new nS(l, r)) : null;
  });
}, dS = (e, t, n) => {
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
  return J.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((l) => {
    var c, u;
    return (u = (c = l.langlinks) == null ? void 0 : c[0]) == null ? void 0 : u["*"];
  }).filter((l) => !!l));
}, gS = (e, t, n, o = null) => {
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
    J.getApi(e).get(l).then((u) => {
      var i;
      return r(((i = u == null ? void 0 : u.parse) == null ? void 0 : i.sections) || []);
    }).fail(() => r([]));
  }).then(
    (r) => r.filter((l) => l.toclevel === 1).map((l) => ({
      title: l.line,
      id: l.number
    }))
  ), a = pS(
    e,
    t,
    n,
    o
  );
  return Promise.all([a, s]).then(
    ([r, l]) => {
      const c = af.convertSegmentedContentToPageSections(
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
}, pS = (e, t, n, o = null) => {
  const s = J.getWikiDomainCode(e), a = J.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, l += "/$revision");
  const c = J.getCXServerUrl(
    l,
    r
  );
  return fetch(c).then((u) => u.json()).then((u) => u.segmentedContent);
}, mS = (e) => {
  const t = i1();
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
    J.getApi(e).get(n).then((a) => {
      var r;
      return o(((r = a == null ? void 0 : a.query) == null ? void 0 : r.pages) || []);
    }).fail(() => o([]));
  }).then((o) => o.map((s) => new ss(s)));
}, hS = (e, t) => {
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
  return J.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.filter((a) => !("disambiguation" in (a.pageprops || {}))).sort((a, r) => a.index - r.index).map(
      (a) => new ss(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => (mw.cx.eventlogging.stats.articleSearchFailed(), []));
}, So = {
  fetchPages: cS,
  fetchLanguageTitles: uS,
  fetchPageContent: gS,
  fetchNearbyPages: mS,
  searchPagesByTitlePrefix: hS,
  fetchLanguageLinksForLanguage: dS
}, fS = window.Vuex.useStore, as = () => {
  const e = fS();
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
}, wS = window.Vuex.useStore, br = () => {
  const e = wS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (p) => p.matchesFilter(o.value)
  ), r = (g) => a().slice(
    s * g,
    s * (g + 1)
  ), l = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (p) => p.matchesFilter(o.value)
  ), c = (g) => l().slice(
    s * g,
    s * (g + 1)
  ), u = (g, p, m) => {
    const h = {
      id: g,
      type: ee
    }, f = e.getters[p](h);
    return f != null && f.id && e.commit(m, f == null ? void 0 : f.id), f;
  };
  return {
    getFilteredPageSuggestions: l,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: c,
    getSectionSuggestionsSliceByIndex: r,
    getNextUnseenSectionSuggestionByCollection: (g) => {
      const p = e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value);
      return u(
        p,
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
    suggestionProvider: p = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSectionInfo = l, this.sourceSectionSizes = c, this.sourceSections = u, this.targetSections = i, this.suggestionSeed = d, this.isListable = g, this.suggestionProvider = p, this.seen = !1;
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
const rf = [
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
], vS = [
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
], _S = [
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
], SS = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], yS = [
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
], xS = {
  en: rf,
  es: vS,
  bn: _S,
  fr: SS,
  de: yS
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
class lf extends Jn {
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
class cf extends nn {
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
    collection: p = {}
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
    }), this.collection = new Du(p);
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
const uf = (e) => {
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
}, bS = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits", CS = () => x(void 0, null, function* () {
  if (mw.user.isAnon())
    return !1;
  const e = mw.user.getName();
  return (yield uf(e)) < 100;
}), We = {
  stub: "stub",
  easy: "easy",
  medium: "medium",
  hard: "hard",
  unknown: "unknown"
}, df = {
  easy: 2500,
  medium: 1e4,
  hard: 4e4
}, uu = {
  easy: 1e3,
  medium: 4e3,
  hard: 12e3
}, gf = (e, t) => !e || e < 0 ? We.unknown : e < t.easy ? We.stub : e < t.medium ? We.easy : e < t.hard ? We.medium : We.hard, pf = (e) => gf(e, df), Pu = (e) => gf(e, uu), kS = (e) => {
  if (!e)
    return !1;
  const t = pf(e);
  return t === We.stub || t === We.easy;
}, $S = (e) => {
  if (!e)
    return !1;
  const t = Pu(e);
  return t === We.stub || t === We.easy;
}, mf = (e) => e ? Pu(e) === We.easy : !1, VS = rf, ES = (e, t) => x(void 0, null, function* () {
  if (yield CS()) {
    let o;
    e ? e === "/sections" && (o = uu) : (o = df, Ht || (t.lead_section = !0, o = uu)), o && (t.min_size = o[We.easy], t.max_size = o[We.medium] - 1);
  } else
    Ht || (t.lead_section = !0);
}), Gt = (n) => x(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
  let o = mw.config.get("wgRecommendToolAPIURL");
  yield ES(e, t), e && (o += e);
  const s = new URL(o);
  Object.keys(t).forEach((a) => {
    t[a] && s.searchParams.append(a, t[a]);
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
function LS() {
  return x(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Gt({ urlPostfix: t, urlParams: e })) || [], o = {};
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
function TS(e) {
  const n = J.getApi(e).get({
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
function AS(e, t, n = null, o = 24) {
  return x(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: o
    };
    return n && (s.seed = n), ((yield Gt({ urlParams: s })) || []).map(
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
const DS = (e, t) => x(void 0, null, function* () {
  return ((yield Gt({ urlParams: {
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
}), PS = (e, t) => x(void 0, null, function* () {
  const s = (yield Gt({ urlParams: {
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
}), BS = (e, t, n = null) => x(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield Gt({ urlParams: o })) || []).map(
    (a) => new lf({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), FS = (e, t, n = null) => x(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield Gt({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (r) => new cf({
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
function NS(e, t, n) {
  return x(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = J.getCXServerUrl(
      `/suggest/sections/${o.join("/")}?include_section_sizes=true`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new nn(a) : null;
  });
}
function MS(e, t, n = null) {
  return x(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: 24
    };
    n && (o.seed = n);
    const a = (yield Gt({ urlPostfix: "/sections", urlParams: o })) || [];
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
function US(e, t, n, o = 24) {
  return x(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield Gt({ urlParams: s })) || []).map(
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
function IS(e, t, n, o = 24) {
  return x(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield Gt({ urlPostfix: "/sections", urlParams: s })) || [];
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
function RS(e, t, n, o = 24) {
  return x(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    };
    return ((yield Gt({ urlParams: s })) || []).map(
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
function zS(e, t, n, o = 24) {
  return x(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    }, r = (yield Gt({ urlPostfix: "/sections", urlParams: s })) || [];
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
function OS(e) {
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
    }, n = J.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function jS(e, t) {
  return x(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = J.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function HS(e) {
  const t = VS.map((o) => encodeURIComponent(o)).join("|"), n = J.getCXServerUrl(
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
const qS = (e, t, n) => {
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
}, GS = (e) => {
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
}, WS = () => {
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
}, de = {
  fetchFavorites: WS,
  fetchPageSuggestions: AS,
  fetchSectionSuggestion: NS,
  fetchSectionSuggestions: MS,
  fetchAppendixTargetSectionTitles: HS,
  fetchArticleSections: jS,
  markFavorite: qS,
  unmarkFavorite: GS,
  fetchUserEdits: OS,
  fetchMostPopularPageSuggestions: DS,
  fetchMostPopularSectionSuggestions: PS,
  fetchPageSuggestionsByTopics: US,
  fetchSectionSuggestionsByTopics: IS,
  fetchPageSuggestionsByCountries: RS,
  fetchSectionSuggestionsByCountries: zS,
  fetchPageCollectionGroups: LS,
  fetchPageSuggestionsByCollections: BS,
  fetchSectionSuggestionsByCollections: FS,
  fetchFeaturedCollectionDataByLanguage: TS
}, XS = window.Vuex.useStore, is = () => {
  const e = XS(), { sourceLanguage: t, targetLanguage: n } = Be(e), o = (l) => {
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
function KS(e) {
  const t = [...e];
  for (let n = t.length - 1; n > 0; n--) {
    const o = Math.floor(Math.random() * (n + 1));
    [t[n], t[o]] = [t[o], t[n]];
  }
  return t;
}
class YS {
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
    this.seeds = KS(t);
  }
}
const QS = window.Vuex.useStore, Bu = window.Vue.ref, JS = Bu([]), ZS = Bu([]);
let Qr = !1, Jr = !1, Fd = !1;
const Ya = Bu([]);
let fs = null;
const Zr = {
  page: JS,
  section: ZS
}, hf = () => {
  const e = QS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), o = () => x(void 0, null, function* () {
    Jr || (Ya.value = yield de.fetchUserEdits(t.value).then((u) => (Jr = !0, u)));
  }), s = () => x(void 0, null, function* () {
    let u = e.getters["translator/getTranslationsByStatus"]("published");
    if (u = u.filter(
      (i) => i.sourceLanguage === t.value
    ), u.length && !Qr)
      return Qr = !0, u.map(
        (i) => i.sourceTitle
      );
    if (Qr = !0, !Jr && (yield o(), Ya.value.length > 0))
      return Ya.value;
    if (!Fd) {
      const i = yield de.fetchUserEdits(n.value).then((d) => (Fd = !0, d));
      if (i.length)
        return So.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (u) => {
    let i = Zr[u].value.find(
      (d) => d.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new YS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), Zr[u].value.push(i)), i;
  }, r = () => x(void 0, null, function* () {
    let u = !1, i = [];
    do {
      i = yield s(), i || (u = !0);
      for (const d in Zr) {
        const g = a(d);
        g.setSeeds([
          ...g.seeds,
          ...i || []
        ]);
      }
    } while (!u && !(i != null && i.length));
  }), l = () => fs || (fs = r(), fs.finally(() => {
    fs = null;
  }));
  return {
    getSuggestionSeed: (u) => x(void 0, null, function* () {
      let i = a(u);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: o,
    previousEditsInSource: Ya
  };
}, ey = 5;
function _o(e) {
  return x(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < ey);
  });
}
const ty = window.Vuex.useStore, ny = () => {
  const e = ty(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), { getSuggestionSeed: o } = hf(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = is(), l = {
    id: sn,
    type: Ge
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => x(void 0, null, function* () {
      const d = [];
      return yield _o(() => x(void 0, null, function* () {
        const g = yield o("page");
        let p = yield de.fetchPageSuggestions(
          t.value,
          n.value,
          g || null
        );
        return p = p.filter(
          (m) => a(m)
        ), p = p.slice(0, i), d.push(...p), d.length >= i;
      })), d.forEach(
        (g) => g.suggestionProvider = l
      ), d;
    }),
    fetchSectionSuggestionsBasedOnEdits: (i) => x(void 0, null, function* () {
      const d = [];
      return yield _o(() => x(void 0, null, function* () {
        const g = yield o("section"), p = yield de.fetchSectionSuggestions(
          t.value,
          n.value,
          g || null
        );
        if (!p)
          return !1;
        let m = p.filter(
          (f) => s(f)
        );
        const h = p.filter(
          (f) => !s(f)
        );
        return m = m.slice(0, i), d.push(...m), h.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), d.length >= i;
      })), d.forEach(
        (g) => g.suggestionProvider = l
      ), d;
    })
  };
}, el = window.Vue.computed, Fu = window.Vue.ref, oy = window.Vue.watch, sy = new mw.cx.SiteMapper(), Nu = sy.getCurrentWikiLanguageCode(), ay = mw.config.get(
  "wgContentTranslationFeaturedCollection"
), iy = mw.config.get(
  "wgContentTranslationFeaturedCollectionCommunityName"
), ry = mw.config.get(
  "wgContentTranslationFeaturedCollectionDescription"
), ly = mw.config.get(
  "wgContentTranslationFeaturedCollectionLink"
), Qa = Fu({
  [Nu]: {
    name: ay,
    communityName: iy,
    description: ry,
    link: ly
  }
}), cy = Fu({
  [Nu]: Promise.resolve()
}), Nd = Fu({
  [Nu]: !0
});
let Md = !1;
const Cr = () => {
  const { targetLanguageURLParameter: e } = D(), t = () => {
    Md || (oy(
      e,
      () => {
        e.value && !Qa.value[e.value] && de.fetchFeaturedCollectionDataByLanguage(e.value).then((a) => {
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
  }, n = el(
    () => {
      var a;
      return (a = Qa.value[e.value]) != null && a.name ? Qa.value[e.value] : null;
    }
  ), o = el(
    () => Nd.value[e.value] || !1
  ), s = el(
    () => cy.value[e.value]
  );
  return {
    featuredCollection: n,
    featuredCollectionFetched: o,
    featuredCollectionPromise: s,
    initializeFeaturedCollectionWatcher: t
  };
}, uy = window.Vuex.useStore, dy = window.Vue.computed, ff = () => {
  const e = uy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), s = dy(() => {
    var p;
    return ((p = o.value) == null ? void 0 : p.type) !== ee ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: l
  } = is(), c = (p = null) => p ? { id: p, type: ee } : o.value, u = (p) => x(void 0, null, function* () {
    const m = [];
    let h = yield de.fetchPageSuggestionsByCollections(
      t.value,
      n.value,
      p
    );
    return h = h.filter(
      (f) => r(f)
    ), m.push(...h), m.forEach((f) => {
      f.suggestionProvider = c(p);
    }), m;
  }), i = () => u(s.value), d = (p) => x(void 0, null, function* () {
    const m = [], h = yield de.fetchSectionSuggestionsByCollections(
      t.value,
      n.value,
      p
    );
    let f = h.filter(
      (w) => a(w)
    );
    const v = h.filter(
      (w) => !a(w)
    );
    return m.push(...f), v.forEach((w) => {
      w && !l(w) && (w.isListable = !1, e.commit("suggestions/addSectionSuggestion", w));
    }), m.forEach((w) => {
      w.suggestionProvider = c(p);
    }), m;
  });
  return {
    fetchSectionSuggestionsByCollections: () => d(s.value),
    fetchPageSuggestionsByCollections: i,
    doFetchPageSuggestionsByCollection: u,
    doFetchSectionSuggestionsByCollection: d
  };
}, gy = window.Vuex.useStore, py = () => {
  const e = gy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), o = {
    id: an,
    type: Ge
  }, {
    getNextUnseenSectionSuggestionByCollection: s,
    getNextUnseenPageSuggestionByCollection: a
  } = br(), {
    isSectionSuggestionValid: r,
    isPageSuggestionValid: l,
    sectionSuggestionExists: c
  } = is(), { featuredCollection: u, featuredCollectionPromise: i } = Cr(), {
    doFetchPageSuggestionsByCollection: d,
    doFetchSectionSuggestionsByCollection: g
  } = ff(), p = (f, v, w, y, b) => x(void 0, null, function* () {
    if (yield i, u.value) {
      let S = v(u.value);
      if (!S) {
        const [k = null, ...V] = yield f(u.value);
        S = k, V.forEach((U) => {
          e.commit(w, U);
        });
      }
      S && (y.push(S), b--);
    }
    return b;
  });
  return { fetchSectionSuggestionsPopular: (f) => x(void 0, null, function* () {
    const v = [];
    return f = yield p(
      g,
      s,
      "suggestions/addSectionSuggestion",
      v,
      f
    ), yield _o(() => x(void 0, null, function* () {
      const w = yield de.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let y = w.filter(
        (S) => r(S)
      );
      const b = w.filter(
        (S) => !r(S)
      );
      return y = y.slice(0, f), v.push(...y), b.forEach((S) => {
        S && !c(S) && (S.isListable = !1, e.commit("suggestions/addSectionSuggestion", S));
      }), v.length >= f;
    })), v.forEach(
      (w) => w.suggestionProvider = o
    ), v;
  }), fetchPageSuggestionsPopular: (f) => x(void 0, null, function* () {
    const v = [];
    return f = yield p(
      d,
      a,
      "suggestions/addPageSuggestion",
      v,
      f
    ), yield _o(() => x(void 0, null, function* () {
      let w = yield de.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return w = w.filter(
        (y) => l(y)
      ), w = w.slice(0, f), v.push(...w), v.length >= f;
    })), v.forEach(
      (w) => w.suggestionProvider = o
    ), v;
  }) };
}, wf = window.Vue.ref, ws = "ungrouped", Ud = wf({}), Id = wf(!1), Mu = () => ({
  fetchPageCollectionGroups: () => x(void 0, null, function* () {
    try {
      const t = yield de.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((o, s) => o === ws ? 1 : s === ws ? -1 : o.localeCompare(s)).map((o) => [o, t[o]])
      );
      n[ws] && (n[ws] = n[ws].sort(
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
const my = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', hy = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', fy = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', wy = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', vy = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', _y = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', Sy = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', yy = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', xy = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', by = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', Cy = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', ky = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', $y = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', Vy = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', Ey = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', Ly = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', Ty = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', Ay = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', Dy = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', vf = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', Py = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', By = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', Fy = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', Ny = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', My = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', Uy = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', Iy = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', Ry = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', zy = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', Oy = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', jy = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', Hy = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', qy = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', Gy = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', Wy = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Xy = '<circle cx="6" cy="6" r="3"/><circle cx="14" cy="6" r="3"/><path d="M14 10c3.31 0 6 1.79 6 4v2h-6v-2c0-1.48-1.21-2.77-3-3.46.88-.35 1.91-.54 3-.54m-8 0c3.31 0 6 1.79 6 4v2H0v-2c0-2.21 2.69-4 6-4"/>', _f = my, Ky = hy, Sf = {
  ltr: fy,
  shouldFlip: !0
}, yf = {
  ltr: wy,
  shouldFlip: !0
}, Uu = {
  ltr: vy,
  shouldFlip: !0
}, xf = _y, bf = Sy, Cf = yy, Yy = xy, Qy = by, rs = Cy, Jy = ky, Iu = $y, Ru = Vy, du = Ey, Zy = Ly, ex = {
  ltr: Ty,
  shouldFlip: !0
}, tx = {
  ltr: Ay,
  shouldFlip: !0
}, nx = Dy, ox = {
  langCodeMap: {
    ar: vf
  },
  default: Py
}, sx = {
  langCodeMap: {
    ar: vf
  },
  default: By
}, kf = Fy, Ta = {
  ltr: Ny,
  shouldFlip: !0
}, ax = My, ix = Uy, ls = {
  ltr: Iy,
  shouldFlip: !0
}, zu = {
  ltr: Ry,
  shouldFlip: !0
}, rx = {
  ltr: zy,
  shouldFlip: !0
}, $f = Oy, lx = jy, gu = Hy, cx = qy, ux = Gy, Vf = Wy, dx = {
  ltr: Xy,
  shouldFlip: !0
}, gx = {
  [sn]: Vf,
  [an]: nx,
  [ee]: Uu
}, px = {
  [ee]: tx,
  [Pe]: ax
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
    return this.type === Ge ? this.id : this.type;
  }
  get icon() {
    return gx[this.provider] || null;
  }
  get expandableIcon() {
    return px[this.provider] || this.icon;
  }
}
const $o = window.Vue.computed, { topics: Rd, regions: zd } = mw.loader.require(
  "ext.cx.articlefilters"
), mx = (e) => new wa({
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
  const e = pe(), { currentSuggestionFilters: t, setFilterURLParams: n } = D(), { featuredCollection: o, featuredCollectionFetched: s } = Cr(), {
    validateFilters: a,
    filtersValidatorError: r,
    isDefaultFilter: l,
    isPopularFilter: c,
    isEqualFilter: u
  } = ku(), i = new xt({
    id: sn,
    type: Ge,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), d = new xt({
    id: an,
    type: Ge,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), g = new xt({
    id: ee,
    type: Ge,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: p, pageCollectionGroupsFetched: m } = Mu(), h = $o(() => {
    const N = new wa({
      id: Ge,
      type: Ge,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [i, d]
    });
    return Object.keys(p.value).length > 1 && N.filters.push(g), N;
  }), f = () => {
    const N = ce({}, p.value);
    delete N.ungrouped;
    const R = [];
    for (const G in N) {
      const me = N[G].map(
        (Se) => new xt({
          id: Se.name,
          label: Se.name,
          type: ee
        })
      ), $e = new xt({
        id: G,
        label: G,
        type: ee,
        subFilters: me
      });
      R.push($e);
    }
    const q = (p.value.ungrouped || []).map(
      (G) => new xt({
        id: G.name,
        label: G.name,
        type: ee
      })
    );
    return [...R, ...q];
  }, v = $o(
    () => new wa({
      id: ee,
      type: ee,
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
          (R) => new xt({
            id: R.id,
            label: R.label,
            type: Pe
          })
        )
      })
    )
  }), y = $o(() => {
    const N = [
      h.value,
      ...Rd.map(mx),
      w
    ];
    return v.value.filters.length && N.splice(1, 0, v.value), N;
  }), b = $o(
    () => !m.value || !s.value
  ), S = $o(
    () => {
      var N, R;
      return new xt({
        id: (N = o.value) == null ? void 0 : N.name,
        label: (R = o.value) == null ? void 0 : R.name,
        type: ee
      });
    }
  ), k = () => {
    if (b.value)
      return [];
    const N = U(), R = [];
    return o.value && R.push(S.value), !l(N) && !c(N) && !u(N, S.value) && R.push(N), R.push(i, d), R;
  }, V = (N) => {
    n(N.type, N.id);
  }, U = () => t.value.type === qt ? new xt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : y.value.flatMap((N) => N.filters).flatMap((N) => [N, ...N.subFilters || []]).find(L), L = (N) => u(N, t.value), B = (N) => {
    const q = Rd.flatMap((G) => G.topics).find((G) => G.topicId === N);
    return q ? q.articletopics : [];
  }, z = (N) => {
    const R = zd.find((q) => q.id === N);
    return R ? R.countries.map((q) => q.id) : [N];
  }, X = $o(
    () => Object.values(p.value).flat()
  );
  return {
    allFilters: y,
    getFiltersSummary: k,
    selectFilter: V,
    isFilterSelected: L,
    getArticleTopics: B,
    waitingForPageCollectionsFetch: b,
    findSelectedFilter: U,
    validateURLFilterWithCollections: () => {
      if (!m.value)
        return;
      const N = a(
        {
          type: t.value.type,
          id: t.value.id
        },
        X.value
      );
      n(N.type, N.id), r.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: z,
    setFeaturedCollectionFilterIfNeeded: () => {
      if (!l(t.value))
        return;
      const N = a(
        S.value,
        X.value
      );
      V(N);
    }
  };
}, hx = window.Vuex.useStore, fx = () => {
  const e = hx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = is(), { getArticleTopics: l } = Aa();
  return {
    fetchPageSuggestionsByTopics: (i) => x(void 0, null, function* () {
      const d = o.value.id, g = {
        id: d,
        type: tt
      }, p = l(d);
      let m = yield de.fetchPageSuggestionsByTopics(
        t.value,
        n.value,
        p
      );
      return m = m.filter(
        (h) => a(h)
      ), m = m.slice(0, i), m.forEach(
        (h) => h.suggestionProvider = g
      ), m;
    }),
    fetchSectionSuggestionsByTopics: (i) => x(void 0, null, function* () {
      const d = o.value.id, g = {
        id: d,
        type: tt
      }, p = l(d), m = [];
      return yield _o(() => x(void 0, null, function* () {
        const h = yield de.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          p
        );
        let f = h.filter(
          (w) => s(w)
        );
        const v = h.filter(
          (w) => !s(w)
        );
        return f = f.slice(0, i), m.push(...f), v.forEach((w) => {
          w && !r(w) && (w.isListable = !1, e.commit("suggestions/addSectionSuggestion", w));
        }), m.length >= i;
      })), m.forEach(
        (h) => h.suggestionProvider = g
      ), m;
    })
  };
}, wx = window.Vuex.useStore, vx = () => {
  const e = wx(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = is(), { getCountries: l } = Aa();
  return {
    fetchPageSuggestionsByCountries: (i) => x(void 0, null, function* () {
      let d = yield de.fetchPageSuggestionsByCountries(
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
    fetchSectionSuggestionsByCountries: (i) => x(void 0, null, function* () {
      const d = [];
      return yield _o(() => x(void 0, null, function* () {
        const g = yield de.fetchSectionSuggestionsByCountries(
          t.value,
          n.value,
          l(o.value.id)
        );
        let p = g.filter(
          (h) => s(h)
        );
        const m = g.filter(
          (h) => !s(h)
        );
        return p = p.slice(0, i), d.push(...p), m.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), d.length >= i;
      })), d.forEach(
        (g) => g.suggestionProvider = o.value
      ), d;
    })
  };
}, _x = window.Vuex.useStore, Sx = () => {
  const e = _x(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = is();
  return {
    fetchPageSuggestionsBySeed: (u) => x(void 0, null, function* () {
      const i = o.value.id;
      let d = yield de.fetchPageSuggestions(
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
    fetchSectionSuggestionsBySeed: (u) => x(void 0, null, function* () {
      const i = [], d = o.value.id;
      return yield _o(() => x(void 0, null, function* () {
        const g = yield de.fetchSectionSuggestions(
          t.value,
          n.value,
          d
        );
        if (!g)
          return !1;
        let p = g.filter(
          (h) => s(h)
        );
        const m = g.filter(
          (h) => !s(h)
        );
        return p = p.slice(0, u), i.push(...p), m.forEach((h) => {
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
}, yx = () => {
  const { currentSuggestionFilters: e } = D(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = ny(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = py(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = fx(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: c
  } = vx(), {
    fetchPageSuggestionsByCollections: u,
    fetchSectionSuggestionsByCollections: i
  } = ff(), { fetchPageSuggestionsBySeed: d, fetchSectionSuggestionsBySeed: g } = Sx(), p = {
    [sn]: t,
    [an]: o,
    [ee]: u,
    [tt]: a,
    [Pe]: l,
    [qt]: d
  }, m = {
    [sn]: n,
    [an]: s,
    [ee]: i,
    [tt]: r,
    [Pe]: c,
    [qt]: g
  }, h = (w) => w.type === Ge ? w.id : w.type;
  return {
    getCurrentPageSuggestionProvider: () => p[h(e.value)],
    getCurrentSectionSuggestionProvider: () => m[h(e.value)]
  };
}, xx = window.Vuex.useStore, Ou = () => {
  const e = xx(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = br(), { sourceLanguageURLParameter: o } = D(), s = as(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: c
  } = yx(), u = (g) => {
    try {
      const p = g.map((m) => m.sourceTitle);
      if (p.length)
        return s(o.value, p);
    } catch (p) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => x(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const g = a(), m = yield c()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), u(m), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => x(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const g = r(), m = yield l()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), u(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, bx = window.Vuex.useStore, Ef = () => {
  const e = bx();
  return (t) => x(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield de.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, Cx = window.Vuex.useStore, Lf = () => {
  const e = Cx(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Ou(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = br(), { targetLanguageURLParameter: a } = D(), r = Ef();
  return () => x(void 0, null, function* () {
    const l = s(0), c = o(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, i = l.length === u, d = c.length === u;
    i && d || (yield r(a.value), t(), n());
  });
}, kx = window.Vuex.useStore, tl = /* @__PURE__ */ new Map(), kr = () => {
  const e = kx(), t = as();
  return (n, o, s) => x(void 0, null, function* () {
    const a = `${n}:${o}:${s}`;
    if (tl.has(a))
      return tl.get(a);
    const l = (() => x(void 0, null, function* () {
      let c = e.getters["suggestions/getSectionSuggestionsForArticle"](n, o, s);
      if (!c) {
        c = yield de.fetchSectionSuggestion(
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
    return tl.set(a, l), l;
  });
}, Od = window.Vue.computed, $x = window.Vuex.useStore, rn = () => {
  const e = $x(), {
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
}, Tf = window.Vuex.useStore, { setLanguageURLParams: Vx } = D(), ju = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), Vx(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, Af = () => {
  const e = Tf(), t = Lf();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Be(e);
    n === o && (n = a.value, o = s.value), ju(e, n, o), t();
  };
}, Ex = () => {
  const e = Tf(), t = kr(), { currentLanguageTitleGroup: n, targetPageExists: o } = rn(), s = as();
  return (a, r) => x(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      setPageURLParam: u,
      clearSectionURLParameter: i
    } = D();
    a === r && (a = c.value, r = l.value);
    const d = n.value.getTitleForLanguage(a);
    ju(e, a, r), u(d), o.value ? (i(), yield t(
      l.value,
      c.value,
      d
    )) : yield s(l.value, [d]);
  });
}, Lx = window.Vuex.useStore, Tx = window.Vue.ref, jd = Tx(!1), Df = () => {
  const e = Lx(), { supportedLanguageCodes: t, fetchSupportedLanguageCodes: n } = Va(), { sourceLanguageURLParameter: o, targetLanguageURLParameter: s } = D(), a = () => {
    const l = J.getCurrentWikiLanguageCode(), c = (m) => t.value.includes(m), u = {
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
      (m) => c(m)
    );
    return { sourceLanguage: d.find(
      (m) => c(m) && m !== g
    ), targetLanguage: g };
  };
  return { initializeApplicationLanguages: () => x(void 0, null, function* () {
    yield n();
    const { sourceLanguage: l, targetLanguage: c } = a();
    ju(e, l, c), jd.value = !0;
  }), applicationLanguagesInitialized: jd };
};
const Ax = window.Vue.resolveDynamicComponent, Hd = window.Vue.openBlock, qd = window.Vue.createBlock, Dx = window.Vue.Transition, vs = window.Vue.withCtx, _s = window.Vue.createVNode, Px = window.Vue.resolveComponent, nl = window.Vue.unref, Bx = window.Vuex.useStore, Gd = window.Vue.computed, Fx = window.Vue.onMounted, Nx = window.Vue.inject, Mx = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = D(), { initializeApplicationLanguages: n } = Df();
    t(), n();
    const o = Nx("breakpoints"), s = Gd(() => o.value.mobile), a = Bx(), r = Gd(
      () => a.state.application.autoSavePending
    );
    return Fx(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && jh.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((c) => {
          c instanceof os && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, c) => {
      const u = Px("router-view");
      return Hd(), qd(nl(j0), { id: "contenttranslation" }, {
        default: vs(() => [
          _s(nl(I), { class: "cx-container" }, {
            default: vs(() => [
              _s(nl(C), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: vs(() => [
                  _s(u, null, {
                    default: vs(({ Component: i, route: d }) => [
                      _s(Dx, {
                        name: s.value ? d.meta.transitionName : ""
                      }, {
                        default: vs(() => [
                          (Hd(), qd(Ax(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      _s(s1)
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
}, Ux = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, Ix = {
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
class Pf {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Pf(a);
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
    (s, a) => Ye(ce({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class Rx {
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
class Hu extends bu {
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
const $r = mw.user.isAnon() ? void 0 : "user", Bf = (e) => {
  if (e === "assertuserfailed")
    throw new os();
};
function Ff(e, t = null) {
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
        (c) => new wr(Ye(ce({}, c), { status: e }))
      ) : r = a.map(
        (c) => new Hu(Ye(ce({}, c), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const c = yield Ff(
          e,
          s.continue.offset
        );
        r = r.concat(c);
      }
      return r;
    }));
  });
}
function zx(e) {
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
      (a) => new Rx(a)
    );
  });
}
function Ox(e, t, n, o, s) {
  return x(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== ae.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = J.getCXServerUrl(a);
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
const jx = (e, t, n) => {
  const o = J.getApi(t);
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
}, Hx = ({
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
  const p = {
    assert: $r,
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
  return c && (p.captchaid = c, p.captchaword = u), new mw.Api().postWithToken("csrf", p).then((h) => {
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
    Bf(h);
    let v;
    return f = f || {}, f.exception ? v = f.exception.message : f.error ? v = f.error.info : v = "Unknown error", {
      publishFeedbackMessage: new Zn({
        text: v,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, qx = ({
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
    assert: $r,
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
  return new mw.Api().postWithToken("csrf", d).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    Bf(p);
    let h;
    return m.exception ? (h = m.exception.message, mw.cx.eventlogging.stats.saveFailure(!0)) : m.error ? (h = m.error.info, m.error.code && m.error.code.indexOf("internal_api_error") === 0 && mw.cx.eventlogging.stats.saveFailure(!0)) : (h = "Unknown error", mw.cx.eventlogging.stats.saveFailure(!0)), new Zn({ text: h, status: "error" });
  });
}, Gx = (e) => {
  const t = {
    assert: $r,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, Wx = () => {
  const e = {
    assert: $r,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new Hu(n.cxcheckunreviewed.translation)
  );
}, Xx = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, Kx = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, Yx = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), Ct = {
  fetchTranslations: Ff,
  fetchTranslationUnits: zx,
  fetchSegmentTranslation: Ox,
  parseTemplateWikitext: jx,
  publishTranslation: Hx,
  saveTranslation: qx,
  deleteTranslation: Xx,
  fetchTranslatorStats: Yx,
  deleteCXTranslation: Kx,
  splitTranslation: Gx,
  checkUnreviewedTranslations: Wx
};
function Qx(t) {
  return x(this, arguments, function* ({ commit: e }) {
    const n = yield Ct.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const Jx = {
  fetchTranslatorStats: Qx
}, Zx = {
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
}, eb = {
  namespaced: !0,
  state: Ux,
  getters: Ix,
  actions: Jx,
  mutations: Zx
}, tb = {
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
  appendixSectionTitles: xS
}, nb = {
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
}, ob = {
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
}, sb = {
  namespaced: !0,
  state: tb,
  getters: nb,
  actions: {},
  mutations: ob
}, ab = {
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
}, ib = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== ae.EMPTY_TEXT_PROVIDER_KEY,
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
function rb(o) {
  return x(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield So.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const lb = { fetchNearbyPages: rb }, cb = {
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
}, ub = {
  namespaced: !0,
  state: ab,
  getters: ib,
  actions: lb,
  mutations: cb
}, db = {
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
}, gb = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = ae.getStorageKey(
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
}, pb = {
  namespaced: !0,
  state: db,
  mutations: gb
}, mb = window.Vuex.createStore, hb = mb({
  modules: { translator: eb, suggestions: sb, mediawiki: ub, application: pb }
});
function fb() {
  return Nf().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Nf() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const wb = typeof Proxy == "function", vb = "devtools-plugin:setup", _b = "plugin:settings:set";
let Vo, pu;
function Sb() {
  var e;
  return Vo !== void 0 || (typeof window != "undefined" && window.performance ? (Vo = !0, pu = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Vo = !0, pu = global.perf_hooks.performance) : Vo = !1), Vo;
}
function yb() {
  return Sb() ? pu.now() : Date.now();
}
class xb {
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
        return yb();
      }
    }, n && n.on(_b, (r, l) => {
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
function bb(e, t) {
  const n = e, o = Nf(), s = fb(), a = wb && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(vb, e, t);
  else {
    const r = a ? new xb(n, s) : null;
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
const Mf = window.Vue.getCurrentInstance, ts = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const tn = window.Vue.computed, va = window.Vue.unref, Cb = window.Vue.watchEffect, Uf = window.Vue.defineComponent, kb = window.Vue.reactive, If = window.Vue.h, ol = window.Vue.provide, $b = window.Vue.ref, Rf = window.Vue.watch, Vb = window.Vue.shallowRef, Eb = window.Vue.shallowReactive, Lb = window.Vue.nextTick, En = typeof window != "undefined";
function Tb(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Z = Object.assign;
function sl(e, t) {
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
const Ab = /\/$/, Db = (e) => e.replace(Ab, "");
function al(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return l < c && l >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), a = t.slice(c + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = Fb(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Pb(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Xd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Kd(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && eo(t.matched[o], n.matched[s]) && zf(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function eo(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function zf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Bb(e[n], t[n]))
      return !1;
  return !0;
}
function Bb(e, t) {
  return gt(e) ? Yd(e, t) : gt(t) ? Yd(t, e) : e === t;
}
function Yd(e, t) {
  return gt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Fb(e, t) {
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
function Nb(e) {
  if (!e)
    if (En) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Db(e);
}
const Mb = /^[^#]+#/;
function Ub(e, t) {
  return e.replace(Mb, "#") + t;
}
function Ib(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Vr = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Rb(e) {
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
    t = Ib(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Qd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const mu = /* @__PURE__ */ new Map();
function zb(e, t) {
  mu.set(e, t);
}
function Ob(e) {
  const t = mu.get(e);
  return mu.delete(e), t;
}
let jb = () => location.protocol + "//" + location.host;
function Of(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), Xd(c, "");
  }
  return Xd(n, e) + o + s;
}
function Hb(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: g }) => {
    const p = Of(e, location), m = n.value, h = t.value;
    let f = 0;
    if (g) {
      if (n.value = p, t.value = g, r && r === m) {
        r = null;
        return;
      }
      f = h ? g.position - h.position : 0;
    } else
      o(p);
    s.forEach((v) => {
      v(n.value, m, {
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
    const p = () => {
      const m = s.indexOf(g);
      m > -1 && s.splice(m, 1);
    };
    return a.push(p), p;
  }
  function i() {
    const { history: g } = window;
    g.state && g.replaceState(Z({}, g.state, { scroll: Vr() }), "");
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
    scroll: s ? Vr() : null
  };
}
function qb(e) {
  const { history: t, location: n } = window, o = {
    value: Of(e, n)
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
    const d = e.indexOf("#"), g = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : jb() + e + c;
    try {
      t[i ? "replaceState" : "pushState"](u, "", g), s.value = u;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? Y("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(c, u) {
    const i = Z({}, t.state, Jd(
      s.value.back,
      // keep back and forward entries but override current position
      c,
      s.value.forward,
      !0
    ), u, { position: s.value.position });
    a(c, i, !0), o.value = c;
  }
  function l(c, u) {
    const i = Z(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: c,
        scroll: Vr()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && Y(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const d = Z({}, Jd(o.value, c, null), { position: i.position + 1 }, u);
    a(c, d, !1), o.value = c;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function Gb(e) {
  e = Nb(e);
  const t = qb(e), n = Hb(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = Z({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Ub.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Wb(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && Y(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Gb(e);
}
function Xb(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function jf(e) {
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
const Kb = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Qb(t)}" via a navigation guard.`;
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
  return {}.NODE_ENV !== "production" ? Z(new Error(Kb[e](t)), {
    type: e,
    [hu]: !0
  }, t) : Z(new Error(), {
    type: e,
    [hu]: !0
  }, t);
}
function cn(e, t) {
  return e instanceof Error && hu in e && (t == null || !!(e.type & t));
}
const Yb = ["params", "query", "hash"];
function Qb(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Yb)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const eg = "[^/]+?", Jb = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Zb = /[.+*?^${}()[\]/\\]/g;
function eC(e, t) {
  const n = Z({}, Jb, t), o = [];
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
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        d || (s += "/"), s += g.value.replace(Zb, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: v } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const w = v || eg;
        if (w !== eg) {
          p += 10;
          try {
            new RegExp(`(${w})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${w}): ` + b.message);
          }
        }
        let y = h ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
        d || (y = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && u.length < 2 ? `(?:/${y})` : "/" + y), f && (y += "?"), s += y, p += 20, f && (p += -8), h && (p += -20), w === ".*" && (p += -50);
      }
      i.push(p);
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
      const p = i[g] || "", m = a[g - 1];
      d[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return d;
  }
  function c(u) {
    let i = "", d = !1;
    for (const g of e) {
      (!d || !i.endsWith("/")) && (i += "/"), d = !1;
      for (const p of g)
        if (p.type === 0)
          i += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: h, optional: f } = p, v = m in u ? u[m] : "";
          if (gt(v) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = gt(v) ? v.join("/") : v;
          if (!w)
            if (f)
              g.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${m}"`);
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
function tC(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function nC(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = tC(o[n], s[n]);
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
const oC = {
  type: 0,
  value: ""
}, sC = /[a-zA-Z0-9_]/;
function aC(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[oC]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${u}": ${p}`);
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
        c === "(" ? n = 2 : sC.test(c) ? g() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
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
function iC(e, t, n) {
  const o = eC(aC(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && Y(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const s = Z(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function rC(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = sg({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, d, g) {
    const p = !g, m = lC(i);
    ({}).NODE_ENV !== "production" && gC(m, d), m.aliasOf = g && g.record;
    const h = sg(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const y = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const b of y)
        f.push(Z({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : m.components,
          path: b,
          // we might be the child of an alias
          aliasOf: g ? g.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let v, w;
    for (const y of f) {
      const { path: b } = y;
      if (d && b[0] !== "/") {
        const S = d.record.path, k = S[S.length - 1] === "/" ? "" : "/";
        y.path = d.record.path + (b && k + b);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (v = iC(y, d, h), {}.NODE_ENV !== "production" && d && b[0] === "/" && pC(v, d), g ? (g.alias.push(v), {}.NODE_ENV !== "production" && dC(g, v)) : (w = w || v, w !== v && w.alias.push(v), p && i.name && !og(v) && r(i.name)), m.children) {
        const S = m.children;
        for (let k = 0; k < S.length; k++)
          a(S[k], v, g && g.children[k]);
      }
      g = g || v, (v.record.components && Object.keys(v.record.components).length || v.record.name || v.record.redirect) && c(v);
    }
    return w ? () => {
      r(w);
    } : _a;
  }
  function r(i) {
    if (jf(i)) {
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
    for (; d < n.length && nC(i, n[d]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[d].record.path || !Hf(i, n[d])); )
      d++;
    n.splice(d, 0, i), i.record.name && !og(i) && o.set(i.record.name, i);
  }
  function u(i, d) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw ns(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const w = Object.keys(i.params || {}).filter((y) => !g.keys.find((b) => b.name === y));
        w.length && Y(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = Z(
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
      ), m = g.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && Y(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((w) => w.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = d.name ? o.get(d.name) : n.find((w) => w.re.test(d.path)), !g)
        throw ns(1, {
          location: i,
          currentLocation: d
        });
      h = g.record.name, p = Z({}, d.params, i.params), m = g.stringify(p);
    }
    const f = [];
    let v = g;
    for (; v; )
      f.unshift(v.record), v = v.parent;
    return {
      name: h,
      path: m,
      params: p,
      matched: f,
      meta: uC(f)
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
function lC(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: cC(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function cC(e) {
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
function uC(e) {
  return e.reduce((t, n) => Z(t, n.meta), {});
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
function dC(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(fu.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(fu.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function gC(e, t) {
  t && t.record.name && !e.name && !e.path && Y(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function pC(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(fu.bind(null, n)))
      return Y(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Hf(e, t) {
  return t.children.some((n) => n === e || Hf(e, n));
}
const qf = /#/g, mC = /&/g, hC = /\//g, fC = /=/g, wC = /\?/g, Gf = /\+/g, vC = /%5B/g, _C = /%5D/g, Wf = /%5E/g, SC = /%60/g, Xf = /%7B/g, yC = /%7C/g, Kf = /%7D/g, xC = /%20/g;
function qu(e) {
  return encodeURI("" + e).replace(yC, "|").replace(vC, "[").replace(_C, "]");
}
function bC(e) {
  return qu(e).replace(Xf, "{").replace(Kf, "}").replace(Wf, "^");
}
function wu(e) {
  return qu(e).replace(Gf, "%2B").replace(xC, "+").replace(qf, "%23").replace(mC, "%26").replace(SC, "`").replace(Xf, "{").replace(Kf, "}").replace(Wf, "^");
}
function CC(e) {
  return wu(e).replace(fC, "%3D");
}
function kC(e) {
  return qu(e).replace(qf, "%23").replace(wC, "%3F");
}
function $C(e) {
  return e == null ? "" : kC(e).replace(hC, "%2F");
}
function ba(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && Y(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function VC(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(Gf, " "), r = a.indexOf("="), l = ba(r < 0 ? a : a.slice(0, r)), c = r < 0 ? null : ba(a.slice(r + 1));
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
    if (n = CC(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (gt(o) ? o.map((a) => a && wu(a)) : [o && wu(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function EC(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = gt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const LC = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), ig = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Er = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Yf = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), vu = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function Ss() {
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
      })) : d instanceof Error ? l(d) : Xb(d) ? l(ns(2, {
        from: t,
        to: d
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof d == "function" && a.push(d), r());
    }, u = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? TC(c, t, n) : c);
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
function TC(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && Y(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function il(e, t, n, o) {
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
        if (AC(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(Yn(u, n, o, a, r));
        } else {
          let c = l();
          ({}).NODE_ENV !== "production" && !("catch" in c) && (Y(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), s.push(() => c.then((u) => {
            if (!u)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Tb(u) ? u.default : u;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && Yn(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function AC(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function rg(e) {
  const t = ts(Er), n = ts(Yf), o = tn(() => t.resolve(va(e.to))), s = tn(() => {
    const { matched: c } = o.value, { length: u } = c, i = c[u - 1], d = n.matched;
    if (!i || !d.length)
      return -1;
    const g = d.findIndex(eo.bind(null, i));
    if (g > -1)
      return g;
    const p = lg(c[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      lg(i) === p && // avoid comparing the child with its parent
      d[d.length - 1].path !== p ? d.findIndex(eo.bind(null, c[u - 2])) : g
    );
  }), a = tn(() => s.value > -1 && FC(n.params, o.value.params)), r = tn(() => s.value > -1 && s.value === n.matched.length - 1 && zf(n.params, o.value.params));
  function l(c = {}) {
    return BC(c) ? t[va(e.replace) ? "replace" : "push"](
      va(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(_a) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && En) {
    const c = Mf();
    if (c) {
      const u = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(u), Cb(() => {
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
const DC = /* @__PURE__ */ Uf({
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
    const n = kb(rg(e)), { options: o } = ts(Er), s = tn(() => ({
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
      return e.custom ? a : If("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), PC = DC;
function BC(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function FC(e, t) {
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
const cg = (e, t, n) => e != null ? e : t != null ? t : n, NC = /* @__PURE__ */ Uf({
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
    ({}).NODE_ENV !== "production" && UC();
    const o = ts(vu), s = tn(() => e.route || o.value), a = ts(ig, 0), r = tn(() => {
      let u = va(a);
      const { matched: i } = s.value;
      let d;
      for (; (d = i[u]) && !d.components; )
        u++;
      return u;
    }), l = tn(() => s.value.matched[r.value]);
    ol(ig, tn(() => r.value + 1)), ol(LC, l), ol(vu, s);
    const c = $b();
    return Rf(() => [c.value, l.value, e.name], ([u, i, d], [g, p, m]) => {
      i && (i.instances[d] = u, p && p !== i && u && u === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), u && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !eo(i, p) || !g) && (i.enterCallbacks[d] || []).forEach((h) => h(u));
    }, { flush: "post" }), () => {
      const u = s.value, i = e.name, d = l.value, g = d && d.components[i];
      if (!g)
        return ug(n.default, { Component: g, route: u });
      const p = d.props[i], m = p ? p === !0 ? u.params : typeof p == "function" ? p(u) : p : null, f = If(g, Z({}, m, t, {
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
        (gt(f.ref) ? f.ref.map((y) => y.i) : [f.ref.i]).forEach((y) => {
          y.__vrv_devtools = v;
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
const MC = NC;
function UC() {
  const e = Mf(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function ys(e, t) {
  const n = Z({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => WC(o, ["instances", "children", "aliasOf"]))
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
let IC = 0;
function RC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = IC++;
  bb({
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
        value: ys(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const g = d.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Qf
        });
      }
      gt(d.__vrl_devtools) && (d.__devtoolsApi = s, d.__vrl_devtools.forEach((g) => {
        let p = ew, m = "";
        g.isExactActive ? (p = Zf, m = "This is exactly active") : g.isActive && (p = Jf, m = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), Rf(t.currentRoute, () => {
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
        from: ys(d, "Current Location during this navigation"),
        to: ys(i, "Target location")
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
      const p = {
        guard: Ja("afterEach")
      };
      g ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, p.status = Ja("❌")) : p.status = Ja("✅"), p.from = ys(d, "Current Location during this navigation"), p.to = ys(i, "Target location"), s.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: i.fullPath,
          time: s.now(),
          data: p,
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
      d.forEach(ow), i.filter && (d = d.filter((g) => (
        // save matches state based on the payload
        _u(g, i.filter.toLowerCase())
      ))), d.forEach((g) => nw(g, t.currentRoute.value)), i.rootNodes = d.map(tw);
    }
    let u;
    s.on.getInspectorTree((i) => {
      u = i, i.app === e && i.inspectorId === l && c();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: OC(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function zC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function OC(e) {
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
        display: e.keys.map((o) => `${o.name}${zC(o)}`).join(" "),
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
const Qf = 15485081, Jf = 2450411, Zf = 8702998, jC = 2282478, ew = 16486972, HC = 6710886;
function tw(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: jC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: ew
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Qf
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Zf
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Jf
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: HC
  });
  let o = n.__vd_id;
  return o == null && (o = String(qC++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(tw)
  };
}
let qC = 0;
const GC = /^\/(.*)\/([a-z]*)$/;
function nw(e, t) {
  const n = t.matched.length && eo(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => eo(o, e.record))), e.children.forEach((o) => nw(o, t));
}
function ow(e) {
  e.__vd_match = !1, e.children.forEach(ow);
}
function _u(e, t) {
  const n = String(e.re).match(GC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => _u(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = ba(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => _u(r, t));
}
function WC(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function XC(e) {
  const t = rC(e.routes, e), n = e.parseQuery || VC, o = e.stringifyQuery || ag, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = Ss(), r = Ss(), l = Ss(), c = Vb(Dn);
  let u = Dn;
  En && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = sl.bind(null, (_) => "" + _), d = sl.bind(null, $C), g = (
    // @ts-expect-error: intentionally avoid the type check
    sl.bind(null, ba)
  );
  function p(_, A) {
    let E, F;
    return jf(_) ? (E = t.getRecordMatcher(_), F = A) : F = _, t.addRoute(F, E);
  }
  function m(_) {
    const A = t.getRecordMatcher(_);
    A ? t.removeRoute(A) : {}.NODE_ENV !== "production" && Y(`Cannot remove non-existent route "${String(_)}"`);
  }
  function h() {
    return t.getRoutes().map((_) => _.record);
  }
  function f(_) {
    return !!t.getRecordMatcher(_);
  }
  function v(_, A) {
    if (A = Z({}, A || c.value), typeof _ == "string") {
      const j = al(n, _, A.path), se = t.resolve({ path: j.path }, A), st = s.createHref(j.fullPath);
      return {}.NODE_ENV !== "production" && (st.startsWith("//") ? Y(`Location "${_}" resolved to "${st}". A resolved location cannot start with multiple slashes.`) : se.matched.length || Y(`No match found for location with path "${_}"`)), Z(j, se, {
        params: g(se.params),
        hash: ba(j.hash),
        redirectedFrom: void 0,
        href: st
      });
    }
    let E;
    if ("path" in _)
      ({}).NODE_ENV !== "production" && "params" in _ && !("name" in _) && // @ts-expect-error: the type is never
      Object.keys(_.params).length && Y(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), E = Z({}, _, {
        path: al(n, _.path, A.path).path
      });
    else {
      const j = Z({}, _.params);
      for (const se in j)
        j[se] == null && delete j[se];
      E = Z({}, _, {
        params: d(j)
      }), A.params = d(A.params);
    }
    const F = t.resolve(E, A), K = _.hash || "";
    ({}).NODE_ENV !== "production" && K && !K.startsWith("#") && Y(`A \`hash\` should always start with the character "#". Replace "${K}" with "#${K}".`), F.params = i(g(F.params));
    const he = Pb(o, Z({}, _, {
      hash: bC(K),
      path: F.path
    })), W = s.createHref(he);
    return {}.NODE_ENV !== "production" && (W.startsWith("//") ? Y(`Location "${_}" resolved to "${W}". A resolved location cannot start with multiple slashes.`) : F.matched.length || Y(`No match found for location with path "${"path" in _ ? _.path : _}"`)), Z({
      fullPath: he,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: K,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === ag ? EC(_.query) : _.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: W
    });
  }
  function w(_) {
    return typeof _ == "string" ? al(n, _, c.value.path) : Z({}, _);
  }
  function y(_, A) {
    if (u !== _)
      return ns(8, {
        from: A,
        to: _
      });
  }
  function b(_) {
    return V(_);
  }
  function S(_) {
    return b(Z(w(_), { replace: !0 }));
  }
  function k(_) {
    const A = _.matched[_.matched.length - 1];
    if (A && A.redirect) {
      const { redirect: E } = A;
      let F = typeof E == "function" ? E(_) : E;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = w(F) : (
        // force empty params
        { path: F }
      ), F.params = {}), {}.NODE_ENV !== "production" && !("path" in F) && !("name" in F))
        throw Y(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Z({
        query: _.query,
        hash: _.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in F ? {} : _.params
      }, F);
    }
  }
  function V(_, A) {
    const E = u = v(_), F = c.value, K = _.state, he = _.force, W = _.replace === !0, j = k(E);
    if (j)
      return V(
        Z(w(j), {
          state: typeof j == "object" ? Z({}, K, j.state) : K,
          force: he,
          replace: W
        }),
        // keep original redirectedFrom if it exists
        A || E
      );
    const se = E;
    se.redirectedFrom = A;
    let st;
    return !he && Kd(o, F, E) && (st = ns(16, { to: se, from: F }), Se(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (st ? Promise.resolve(st) : B(se, F)).catch((Ve) => cn(Ve) ? (
      // navigation redirects still mark the router as ready
      cn(
        Ve,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? Ve : $e(Ve)
    ) : (
      // reject any unknown error
      G(Ve, se, F)
    )).then((Ve) => {
      if (Ve) {
        if (cn(
          Ve,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Kd(o, v(Ve.to), se) && // and we have done it a couple of times
          A && // @ts-expect-error: added only in dev
          (A._count = A._count ? (
            // @ts-expect-error
            A._count + 1
          ) : 1) > 30 ? (Y(`Detected a possibly infinite redirection in a navigation guard when going from "${F.fullPath}" to "${se.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : V(
            // keep options
            Z({
              // preserve an existing replacement but allow the redirect to override it
              replace: W
            }, w(Ve.to), {
              state: typeof Ve.to == "object" ? Z({}, K, Ve.to.state) : K,
              force: he
            }),
            // preserve the original redirectedFrom if any
            A || se
          );
      } else
        Ve = X(se, F, !0, W, K);
      return z(se, F, Ve), Ve;
    });
  }
  function U(_, A) {
    const E = y(_, A);
    return E ? Promise.reject(E) : Promise.resolve();
  }
  function L(_) {
    const A = P.values().next().value;
    return A && typeof A.runWithContext == "function" ? A.runWithContext(_) : _();
  }
  function B(_, A) {
    let E;
    const [F, K, he] = KC(_, A);
    E = il(F.reverse(), "beforeRouteLeave", _, A);
    for (const j of F)
      j.leaveGuards.forEach((se) => {
        E.push(Yn(se, _, A));
      });
    const W = U.bind(null, _, A);
    return E.push(W), oe(E).then(() => {
      E = [];
      for (const j of a.list())
        E.push(Yn(j, _, A));
      return E.push(W), oe(E);
    }).then(() => {
      E = il(K, "beforeRouteUpdate", _, A);
      for (const j of K)
        j.updateGuards.forEach((se) => {
          E.push(Yn(se, _, A));
        });
      return E.push(W), oe(E);
    }).then(() => {
      E = [];
      for (const j of he)
        if (j.beforeEnter)
          if (gt(j.beforeEnter))
            for (const se of j.beforeEnter)
              E.push(Yn(se, _, A));
          else
            E.push(Yn(j.beforeEnter, _, A));
      return E.push(W), oe(E);
    }).then(() => (_.matched.forEach((j) => j.enterCallbacks = {}), E = il(he, "beforeRouteEnter", _, A), E.push(W), oe(E))).then(() => {
      E = [];
      for (const j of r.list())
        E.push(Yn(j, _, A));
      return E.push(W), oe(E);
    }).catch((j) => cn(
      j,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? j : Promise.reject(j));
  }
  function z(_, A, E) {
    l.list().forEach((F) => L(() => F(_, A, E)));
  }
  function X(_, A, E, F, K) {
    const he = y(_, A);
    if (he)
      return he;
    const W = A === Dn, j = En ? history.state : {};
    E && (F || W ? s.replace(_.fullPath, Z({
      scroll: W && j && j.scroll
    }, K)) : s.push(_.fullPath, K)), c.value = _, Se(_, A, E, W), $e();
  }
  let le;
  function ne() {
    le || (le = s.listen((_, A, E) => {
      if (!M.listening)
        return;
      const F = v(_), K = k(F);
      if (K) {
        V(Z(K, { replace: !0 }), F).catch(_a);
        return;
      }
      u = F;
      const he = c.value;
      En && zb(Qd(he.fullPath, E.delta), Vr()), B(F, he).catch((W) => cn(
        W,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? W : cn(
        W,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (V(
        W.to,
        F
        // avoid an uncaught rejection, let push call triggerError
      ).then((j) => {
        cn(
          j,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !E.delta && E.type === xa.pop && s.go(-1, !1);
      }).catch(_a), Promise.reject()) : (E.delta && s.go(-E.delta, !1), G(W, F, he))).then((W) => {
        W = W || X(
          // after navigation, all matched components are resolved
          F,
          he,
          !1
        ), W && (E.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !cn(
          W,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-E.delta, !1) : E.type === xa.pop && cn(
          W,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), z(F, he, W);
      }).catch(_a);
    }));
  }
  let N = Ss(), R = Ss(), q;
  function G(_, A, E) {
    $e(_);
    const F = R.list();
    return F.length ? F.forEach((K) => K(_, A, E)) : ({}.NODE_ENV !== "production" && Y("uncaught error during route navigation:"), console.error(_)), Promise.reject(_);
  }
  function me() {
    return q && c.value !== Dn ? Promise.resolve() : new Promise((_, A) => {
      N.add([_, A]);
    });
  }
  function $e(_) {
    return q || (q = !_, ne(), N.list().forEach(([A, E]) => _ ? E(_) : A()), N.reset()), _;
  }
  function Se(_, A, E, F) {
    const { scrollBehavior: K } = e;
    if (!En || !K)
      return Promise.resolve();
    const he = !E && Ob(Qd(_.fullPath, 0)) || (F || !E) && history.state && history.state.scroll || null;
    return Lb().then(() => K(_, A, he)).then((W) => W && Rb(W)).catch((W) => G(W, _, A));
  }
  const be = (_) => s.go(_);
  let Ke;
  const P = /* @__PURE__ */ new Set(), M = {
    currentRoute: c,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: v,
    options: e,
    push: b,
    replace: S,
    go: be,
    back: () => be(-1),
    forward: () => be(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: R.add,
    isReady: me,
    install(_) {
      const A = this;
      _.component("RouterLink", PC), _.component("RouterView", MC), _.config.globalProperties.$router = A, Object.defineProperty(_.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => va(c)
      }), En && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Ke && c.value === Dn && (Ke = !0, b(s.location).catch((K) => {
        ({}).NODE_ENV !== "production" && Y("Unexpected error when starting the router:", K);
      }));
      const E = {};
      for (const K in Dn)
        Object.defineProperty(E, K, {
          get: () => c.value[K],
          enumerable: !0
        });
      _.provide(Er, A), _.provide(Yf, Eb(E)), _.provide(vu, c);
      const F = _.unmount;
      P.add(_), _.unmount = function() {
        P.delete(_), P.size < 1 && (u = Dn, le && le(), le = null, c.value = Dn, Ke = !1, q = !1), F();
      }, {}.NODE_ENV !== "production" && En && RC(_, A, t);
    }
  };
  function oe(_) {
    return _.reduce((A, E) => A.then(() => L(E)), Promise.resolve());
  }
  return M;
}
function KC(e, t) {
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
  return ts(Er);
}
const YC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), u = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(u / (1e3 * 3600 * 24));
}, QC = (e) => {
  const t = YC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const Lt = window.Vue.unref, Eo = window.Vue.createVNode, un = window.Vue.createElementVNode, dg = window.Vue.renderSlot, gg = window.Vue.withModifiers, rl = window.Vue.toDisplayString, ll = window.Vue.withCtx, JC = window.Vue.openBlock, ZC = window.Vue.createElementBlock, ek = window.Vue.createCommentVNode, tk = { class: "col shrink pe-4" }, nk = { class: "col" }, ok = { class: "cx-translation__details column justify-between ma-0" }, sk = { class: "row ma-0" }, ak = { class: "col grow" }, ik = { class: "col shrink ps-2" }, rk = ["dir", "textContent"], lk = ["dir", "textContent"], ck = ["textContent"], uk = window.Vuex.useStore, dk = window.Vue.computed, sw = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: bu,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = uk(), s = (l, c) => {
      const u = o.getters["mediawiki/getPage"](l, c);
      return u == null ? void 0 : u.thumbnail;
    }, a = pe(), r = dk(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, c = QC(n.translation.startTimestamp);
      return a.i18n(
        l[c.postfix],
        mw.language.convertNumber(c.value)
      );
    });
    return (l, c) => e.translation ? (JC(), ZC("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: c[1] || (c[1] = gg((u) => l.$emit("click"), ["stop"]))
    }, [
      un("div", tk, [
        Eo(Lt(xu), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      un("div", nk, [
        un("div", ok, [
          un("div", sk, [
            un("div", ak, [
              dg(l.$slots, "title")
            ]),
            un("div", ik, [
              Eo(Lt(et), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: c[0] || (c[0] = gg((u) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          dg(l.$slots, "mid-content"),
          Eo(Lt(I), { class: "cx-translation__footer ma-0" }, {
            default: ll(() => [
              Eo(Lt(C), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: ll(() => [
                  un("span", {
                    class: "mw-ui-autonym",
                    dir: Lt(O.getDir)(e.translation.sourceLanguage),
                    textContent: rl(Lt(O.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, rk),
                  Eo(Lt(et), {
                    icon: Lt(hv),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  un("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: Lt(O.getDir)(e.translation.targetLanguage),
                    textContent: rl(Lt(O.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, lk)
                ]),
                _: 1
              }),
              Eo(Lt(C), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: ll(() => [
                  un("span", {
                    textContent: rl(r.value)
                  }, null, 8, ck)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : ek("", !0);
  }
};
const xs = window.Vue.unref, gk = window.Vue.toDisplayString, pk = window.Vue.normalizeClass, mk = window.Vue.createElementVNode, cl = window.Vue.openBlock, hk = window.Vue.createElementBlock, pg = window.Vue.createCommentVNode, mg = window.Vue.createVNode, Za = window.Vue.withCtx, hg = window.Vue.createBlock, fk = ["lang", "textContent"], wk = ["lang", "innerHTML"], vk = window.Vue.computed, _k = window.Vue.inject, Sk = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: wr,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = _k("colors").gray200, s = vk(
      () => {
        var c;
        return ((c = t.translation.progress) == null ? void 0 : c.any) * 100 || 0;
      }
    ), a = nt(), { setTranslationURLParams: r } = D(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (c, u) => (cl(), hg(sw, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": xs(Ih),
      onActionIconClicked: u[0] || (u[0] = (i) => c.$emit("delete-translation")),
      onClick: l
    }, {
      title: Za(() => [
        mk("h5", {
          class: pk(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: gk(e.translation.sourceTitle)
        }, null, 10, fk),
        e.translation.isLeadSectionTranslation ? pg("", !0) : (cl(), hk("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, wk))
      ]),
      "mid-content": Za(() => [
        e.translation.progress ? (cl(), hg(xs(I), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Za(() => [
            mg(xs(C), null, {
              default: Za(() => [
                mg(xs(Oh), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: xs(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : pg("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, yk = window.Vuex.useStore, aw = [], xk = (e, t, n) => aw.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), bk = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  aw.push(o);
}, Ck = () => {
  const e = yk();
  return (t, n, o) => x(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !xk(t, n, o) && (s = yield de.fetchSectionSuggestion(
      t,
      o,
      n
    ), bk(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, iw = window.Vue.ref, rw = iw(null), Su = iw(null), kk = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), rw.value = e;
}, $k = (e) => {
  Su.value = e;
}, Da = () => {
  const e = nt(), t = kr(), { setTranslationURLParams: n } = D();
  return (o, s, a, r, l = null, c = !0) => x(void 0, null, function* () {
    kk(r), $k(l);
    const u = yield t(
      s,
      a,
      o
    );
    n(u), c && e.push({ name: "sx-translation-confirmer" });
  });
};
const ul = window.Vue.withModifiers, fg = window.Vue.toDisplayString, wg = window.Vue.createElementVNode, Tt = window.Vue.unref, so = window.Vue.createVNode, Vk = window.Vue.createTextVNode, ei = window.Vue.openBlock, vg = window.Vue.createElementBlock, _g = window.Vue.createCommentVNode, Sg = window.Vue.createBlock, Lo = window.Vue.withCtx, Ek = ["lang", "href", "textContent"], Lk = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, Tk = {
  key: 2,
  class: "flex"
}, Ak = ["innerHTML"], dl = window.Vue.computed, yg = window.Vue.ref, xg = window.Codex.CdxButton, gl = window.Codex.CdxIcon, Dk = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Hu,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = yg(!0), o = yg(null), s = dl(() => {
      var p;
      return (p = o.value) == null ? void 0 : p.missingSections;
    }), a = dl(
      () => s.value && Object.keys(s.value)[0]
    );
    Ck()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((p) => o.value = p).catch((p) => console.log(p)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = D(), c = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, u = Da(), i = (p) => {
      u(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), p && l(p);
    }, d = mw.config.get("wgNamespaceIds"), g = dl(() => new mw.Title(t.translation.targetTitle).getNamespaceId() === d.user);
    return (p, m) => (ei(), Sg(sw, {
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
          onClick: m[0] || (m[0] = ul(() => {
          }, ["stop"])),
          textContent: fg(e.translation.sourceTitle)
        }, null, 8, Ek)
      ]),
      "mid-content": Lo(() => [
        so(Tt(I), { class: "ma-0" }, {
          default: Lo(() => [
            so(Tt(C), null, {
              default: Lo(() => [
                g.value ? (ei(), vg("div", Lk, [
                  so(Tt(gl), {
                    icon: Tt(Vf),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  Vk(" " + fg(p.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : _g("", !0),
                n.value ? (ei(), Sg(Tt(dt), { key: 1 })) : s.value ? (ei(), vg("div", Tk, [
                  so(Tt(xg), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: m[1] || (m[1] = ul((h) => i(a.value), ["stop"]))
                  }, {
                    default: Lo(() => [
                      so(Tt(gl), {
                        class: "me-1",
                        icon: Tt(_f)
                      }, null, 8, ["icon"]),
                      wg("span", { innerHTML: a.value }, null, 8, Ak)
                    ]),
                    _: 1
                  }),
                  so(Tt(xg), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": p.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: m[2] || (m[2] = ul((h) => i(null), ["stop"]))
                  }, {
                    default: Lo(() => [
                      so(Tt(gl), { icon: Tt(Ru) }, null, 8, ["icon"])
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
}, lw = "cx-translation-session-position-", cw = () => lw + mw.user.sessionId(), Pk = () => {
  const e = parseInt(
    mw.storage.get(cw())
  );
  return isNaN(e) ? 0 : e;
}, Bk = function(e) {
  const t = cw();
  mw.storage.set(t, e);
}, Fk = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(lw)).forEach((e) => mw.storage.remove(e));
}, Nk = () => {
  const e = Pk();
  return e % 10 === 0 && Fk(), Bk(e + 1), e;
};
function Mk(e) {
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
    content_translation_session_position: Nk()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : uf(r).then((c) => {
    mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: c,
        user_global_edit_count_bucket: bS(c)
      })
    );
  });
}
const Uk = window.Vuex.useStore, Ik = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], $t = () => {
  const e = Uk(), { previousRoute: t } = Be(e), n = {
    event_source: { remove: !0 },
    translation_source_language: { remove: !1 },
    translation_target_language: { remove: !1 },
    translation_source_title: { remove: !0 }
  }, o = (s) => {
    for (const [a, { remove: r }] of Object.entries(n))
      if (s[a] === null || s[a] === "") {
        const l = Ik(
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
  return (s) => (s.access_method || (s.access_method = Ht ? "desktop" : "mobile web"), o(s), Mk(s));
}, Rk = window.Vuex.useStore, zk = () => {
  const { commit: e } = Rk(), t = $t();
  return (n) => x(void 0, null, function* () {
    n.isArticleTranslation ? (yield Ct.deleteCXTranslation(
      n
    )) && e("translator/removeCXTranslation", n.translationId) : (yield Ct.deleteTranslation(
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
const Ok = window.Vue.resolveDirective, pl = window.Vue.createElementVNode, jk = window.Vue.withDirectives, ml = window.Vue.unref, bg = window.Vue.createVNode, Cg = window.Vue.withCtx, Hk = window.Vue.openBlock, qk = window.Vue.createBlock, Gk = { class: "pa-4" }, Wk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Xk = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: wr,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = zk(), r = () => {
      a(n.translation), s();
    };
    return (l, c) => {
      const u = Ok("i18n");
      return Hk(), qk(ml(kt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Cg(() => [
          pl("div", Wk, [
            bg(ml(Xe), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            bg(ml(Xe), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Cg(() => [
          pl("div", Gk, [
            jk(pl("span", null, null, 512), [
              [u, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function Kk(e, t, n) {
  return x(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield Yk(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function kg(e, t, n) {
  return x(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(O.sortByAutonym) : (yield Kk(e, t, n)).sort(O.sortByAutonym);
  });
}
function Yk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Qk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Jk(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const Zk = window.Vue.computed;
function e8(e, t) {
  const n = Zk(() => {
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
const hl = window.Vue.ref, fl = window.Vue.watch, t8 = window.Vue.computed;
function uw(e, t, n) {
  const o = hl(""), s = hl(-1), a = hl(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = t8(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), c = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return fl(e, () => {
    s.value = -1;
  }), fl(t, () => {
    t.value && l.value.length > 0 && (s.value = 0);
  }), fl(s, () => x(this, null, function* () {
    var u;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (u = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || u.scrollIntoView(!1);
  })), { next: r, prev: c, keyboardNavigationContainer: a, selectedItem: o };
}
function Gu(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const ti = window.Vue.renderSlot, Le = window.Vue.unref, n8 = window.Vue.isRef, $g = window.Vue.createVNode, bs = window.Vue.withModifiers, Cs = window.Vue.withKeys, Pn = window.Vue.createElementVNode, o8 = window.Vue.resolveDirective, ni = window.Vue.withDirectives, wl = window.Vue.renderList, vl = window.Vue.Fragment, dn = window.Vue.openBlock, gn = window.Vue.createElementBlock, Vg = window.Vue.toDisplayString, oi = window.Vue.normalizeClass, _l = window.Vue.createCommentVNode, s8 = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, a8 = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, i8 = { class: "results px-3 pt-4" }, r8 = { class: "results-header ps-8 pb-2" }, l8 = { class: "results-languages--suggestions pa-0 ma-0" }, c8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], u8 = { class: "results px-3 pt-4" }, d8 = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, g8 = ["lang", "dir", "aria-selected", "onClick", "textContent"], p8 = ["aria-selected"], m8 = { class: "no-results px-3 py-4" }, h8 = { class: "ps-8" }, si = window.Vue.ref, f8 = window.Vue.watch, w8 = window.Vue.onMounted, Eg = window.Vue.computed, dw = {
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
      default: Qk
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = si(null), a = si(""), r = si([]), l = si(n.suggestions), c = Eg(
      () => Jk(r.value)
    ), u = Eg(() => {
      const b = r.value.length;
      return b < 10 ? "few-results" : b < 30 ? "some-results" : "many-results";
    }), i = (b) => o("select", b), d = () => o("close"), { autocompletion: g, onTabSelect: p } = e8(
      a,
      r
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: v } = uw(a, r, l), w = () => {
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
    return f8(a, Gu(() => x(this, null, function* () {
      r.value = yield kg(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), w8(() => x(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield kg(
        n.languages,
        "",
        n.searchAPI
      );
    })), (b, S) => {
      const k = o8("i18n");
      return dn(), gn("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        ti(b.$slots, "search", {}, () => [
          Pn("div", s8, [
            $g(Le(cu), {
              value: Le(g),
              "onUpdate:value": S[0] || (S[0] = (V) => n8(g) ? g.value = V : null),
              icon: Le(gd),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            $g(Le(cu), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": S[1] || (S[1] = (V) => a.value = V),
              class: "mw-ui-language-selector__search pa-4",
              icon: Le(gd),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                Cs(bs(w, ["prevent"]), ["enter"]),
                Cs(bs(Le(m), ["stop", "prevent"]), ["down"]),
                Cs(bs(Le(h), ["stop", "prevent"]), ["up"]),
                Cs(bs(d, ["prevent"]), ["esc"]),
                Cs(bs(Le(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        Pn("section", a8, [
          e.suggestions.length && !a.value ? ti(b.$slots, "suggestions", { key: 0 }, () => [
            Pn("section", i8, [
              ni(Pn("p", r8, null, 512), [
                [k, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Pn("ul", l8, [
                (dn(!0), gn(vl, null, wl(e.suggestions, (V) => (dn(), gn("li", {
                  key: V,
                  class: oi(["language ma-0", { "language--selected": V === Le(v) }]),
                  lang: V,
                  dir: Le(O.getDir)(V),
                  "aria-selected": V === Le(v) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (U) => i(V),
                  textContent: Vg(Le(O.getAutonym)(V))
                }, null, 10, c8))), 128))
              ])
            ])
          ]) : _l("", !0),
          c.value.length ? ti(b.$slots, "search", { key: 1 }, () => [
            Pn("section", u8, [
              e.suggestions.length && !a.value ? ni((dn(), gn("p", d8, null, 512)), [
                [k, void 0, "cx-sx-language-selector-all-languages"]
              ]) : _l("", !0),
              (dn(!0), gn(vl, null, wl(c.value, (V, U) => (dn(), gn("ul", {
                key: U,
                class: oi(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (dn(!0), gn(vl, null, wl(V, (L) => (dn(), gn("li", {
                  key: L,
                  class: oi(["language ma-0", { "language--selected": L === Le(v) }]),
                  lang: L,
                  dir: Le(O.getDir)(L),
                  role: "option",
                  "aria-selected": L === Le(v) || null,
                  tabindex: "-1",
                  onClick: (B) => i(L),
                  textContent: Vg(Le(O.getAutonym)(L))
                }, null, 10, g8))), 128)),
                e.allOptionEnabled && !a.value ? ni((dn(), gn("li", {
                  key: 0,
                  class: oi(["language ma-0", { "language--selected": Le(v) === "all" }]),
                  role: "option",
                  "aria-selected": Le(v) === "all" || null,
                  tabindex: "-1",
                  onClick: S[2] || (S[2] = (L) => i("all"))
                }, null, 10, p8)), [
                  [k, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : _l("", !0)
              ], 2))), 128))
            ])
          ]) : ti(b.$slots, "noresults", { key: 2 }, () => [
            Pn("section", m8, [
              ni(Pn("h3", h8, null, 512), [
                [k, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const v8 = window.Vue.resolveDirective, Lg = window.Vue.withDirectives, ks = window.Vue.openBlock, $s = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Te = window.Vue.unref, Tg = window.Vue.toDisplayString, At = window.Vue.createVNode, Ag = window.Vue.withModifiers, ao = window.Vue.withCtx, _8 = window.Vue.normalizeClass, S8 = {
  key: 0,
  class: "mw-ui-autonym"
}, y8 = ["lang", "dir", "textContent"], x8 = {
  key: 0,
  class: "mw-ui-autonym"
}, b8 = ["lang", "dir", "textContent"], Vs = window.Vue.computed, C8 = window.Vue.inject, k8 = window.Vue.ref, Dg = window.Codex.CdxButton, Sl = window.Codex.CdxIcon, pr = {
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
    const n = e, o = t, s = C8("breakpoints"), a = Vs(() => s.value.mobile), r = k8(null), l = Vs(() => !!r.value), c = () => r.value = "source", u = () => r.value = "target", i = () => r.value = null, d = Vs(() => {
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
    }, p = Vs(
      () => n.selectedSourceLanguage === "all"
    ), m = Vs(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const v = v8("i18n");
      return ks(), $s("div", {
        class: _8(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        At(Te(I), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: ao(() => [
            At(Te(C), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: ao(() => [
                At(Te(Dg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Ag(c, ["stop"])
                }, {
                  default: ao(() => [
                    p.value ? Lg((ks(), $s("span", S8, null, 512)), [
                      [v, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (ks(), $s("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Te(O.getDir)(e.selectedSourceLanguage),
                      textContent: Tg(Te(O.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, y8)),
                    At(Te(Sl), {
                      size: "x-small",
                      icon: Te(du)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            At(Te(C), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: ao(() => [
                At(Te(Sl), { icon: Te(Sf) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            At(Te(C), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: ao(() => [
                At(Te(Dg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Ag(u, ["stop"])
                }, {
                  default: ao(() => [
                    m.value ? Lg((ks(), $s("span", x8, null, 512)), [
                      [v, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (ks(), $s("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Te(O.getDir)(e.selectedTargetLanguage),
                      textContent: Tg(Te(O.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, b8)),
                    At(Te(Sl), {
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
        At(Te(kt), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (w) => l.value = w),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: ao(() => [
            At(Te(dw), {
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
const Pg = window.Vue.unref, $8 = window.Vue.createVNode, ai = window.Vue.createElementVNode, Bg = window.Vue.toDisplayString, V8 = window.Vue.openBlock, E8 = window.Vue.createElementBlock, L8 = { class: "cx-list-empty-placeholder pa-4" }, T8 = { class: "cx-list-empty-placeholder__icon-container" }, A8 = { class: "cx-list-empty-placeholder__icon" }, D8 = ["textContent"], P8 = ["textContent"], B8 = window.Codex.CdxIcon, gw = {
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
    return (t, n) => (V8(), E8("div", L8, [
      ai("div", T8, [
        ai("div", A8, [
          $8(Pg(B8), { icon: Pg(kf) }, null, 8, ["icon"])
        ])
      ]),
      ai("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: Bg(e.title)
      }, null, 8, D8),
      ai("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: Bg(e.description)
      }, null, 8, P8)
    ]));
  }
}, F8 = window.Vuex.useStore, N8 = window.Vue.ref, ii = N8({ draft: !1, published: !1 }), cs = () => {
  const e = F8(), t = as(), n = (s) => x(void 0, null, function* () {
    let a = yield Ct.fetchTranslations(s);
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
const M8 = window.Vue.toDisplayString, yl = window.Vue.normalizeClass, Fg = window.Vue.createElementVNode, Xt = window.Vue.openBlock, To = window.Vue.createBlock, ri = window.Vue.createCommentVNode, Ng = window.Vue.unref, Mg = window.Vue.renderList, Ug = window.Vue.Fragment, li = window.Vue.createElementBlock, U8 = window.Vue.createVNode, Ig = window.Vue.withCtx, I8 = ["textContent"], R8 = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, z8 = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, ci = window.Vue.ref, Dt = window.Vue.computed, O8 = window.Vue.inject, j8 = window.Vuex.useStore, Rg = {
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
    const t = e, n = ci("all"), o = ci("all"), s = j8(), { translationsFetched: a } = cs(), r = Dt(
      () => a.value[t.translationStatus]
    ), l = ci(!1), c = ci(null), u = Dt(
      () => t.translationStatus === "draft"
    ), i = Dt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), d = Dt(
      () => n.value === "all"
    ), g = Dt(
      () => o.value === "all"
    ), p = Dt(
      () => i.value.filter(
        (S) => (d.value || S.sourceLanguage === n.value) && (g.value || S.targetLanguage === o.value)
      ).sort((S, k) => S.lastUpdatedTimestamp < k.lastUpdatedTimestamp)
    ), m = Dt(() => {
      const S = i.value.map(
        (k) => k.targetLanguage
      );
      return [...new Set(S)];
    }), h = Dt(() => {
      const S = i.value.map(
        (k) => k.sourceLanguage
      );
      return [...new Set(S)];
    }), f = (S) => {
      c.value = S, l.value = !0;
    }, v = Dt(() => t.activeStatus === t.translationStatus), w = O8("breakpoints"), y = Dt(() => w.value.mobile), b = Dt(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (S, k) => v.value ? (Xt(), To(Ng(Ze), {
      key: 0,
      class: yl(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: Ig(() => [
        Fg("div", {
          class: yl(["cx-translation-list__header", b.value])
        }, [
          Fg("h3", {
            class: yl(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: M8(S.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, I8),
          p.value.length ? (Xt(), To(pr, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": k[0] || (k[0] = (V) => n.value = V),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": k[1] || (k[1] = (V) => o.value = V),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : ri("", !0)
        ], 2)
      ]),
      default: Ig(() => [
        r.value && !p.value.length ? (Xt(), To(gw, {
          key: 0,
          title: S.$i18n("cx-sx-translation-list-empty-title"),
          description: S.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : ri("", !0),
        r.value ? ri("", !0) : (Xt(), To(Ng(dt), { key: 1 })),
        u.value ? (Xt(), li("div", R8, [
          (Xt(!0), li(Ug, null, Mg(p.value, (V) => (Xt(), To(Sk, {
            key: `${e.translationStatus}-${V.key}`,
            translation: V,
            onDeleteTranslation: (U) => f(V)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Xt(), li("div", z8, [
          (Xt(!0), li(Ug, null, Mg(p.value, (V) => (Xt(), To(Dk, {
            key: `${e.translationStatus}-${V.key}`,
            translation: V
          }, null, 8, ["translation"]))), 128))
        ])),
        U8(Xk, {
          modelValue: l.value,
          "onUpdate:modelValue": k[2] || (k[2] = (V) => l.value = V),
          translation: c.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : ri("", !0);
  }
};
const xl = window.Vue.toDisplayString, cr = window.Vue.createElementVNode, bl = window.Vue.unref, Es = window.Vue.openBlock, Cl = window.Vue.createBlock, zg = window.Vue.createCommentVNode, H8 = window.Vue.Fragment, Og = window.Vue.createElementBlock, q8 = window.Vue.withKeys, G8 = window.Vue.withCtx, W8 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, X8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, K8 = /* @__PURE__ */ cr("span", null, "/", -1), Y8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, jg = window.Codex.CdxIcon, Q8 = window.Codex.CdxInfoChip, ui = window.Vue.computed, vo = {
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
      () => t.expanded ? Jy : du
    );
    return (r, l) => (Es(), Cl(bl(Q8), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = q8((c) => r.$emit("click"), ["enter"]))
    }, {
      default: G8(() => [
        n.value === -1 ? (Es(), Og(H8, { key: 0 }, [
          cr("span", null, xl(e.content), 1),
          e.expandable ? (Es(), Cl(bl(jg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : zg("", !0)
        ], 64)) : (Es(), Og("div", W8, [
          cr("span", X8, xl(o.value), 1),
          K8,
          cr("span", Y8, xl(s.value), 1),
          e.expandable ? (Es(), Cl(bl(jg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : zg("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const ye = window.Vue.unref, Pt = window.Vue.createVNode, Bn = window.Vue.createElementVNode, Ls = window.Vue.toDisplayString, ht = window.Vue.withCtx, J8 = window.Vue.resolveDirective, kl = window.Vue.withDirectives, Fn = window.Vue.openBlock, Ao = window.Vue.createBlock, io = window.Vue.createCommentVNode, Hg = window.Vue.createElementBlock, qg = window.Vue.withModifiers, Z8 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, e2 = { class: "col shrink pe-4" }, t2 = ["lang", "dir", "textContent"], n2 = ["lang", "dir", "textContent"], o2 = { class: "cx-suggestion__missing-sections" }, s2 = {
  key: 0,
  class: "cx-suggestion__easy-sections ms-1"
}, a2 = ["textContent"], i2 = ["textContent"], $l = window.Codex.CdxIcon, Fe = window.Vue.computed, r2 = window.Vue.inject, l2 = window.Vuex.useStore, yu = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [Jn, nn, es],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = l2(), o = Fe(() => t.suggestion), s = Fe(
      () => o.value.sourceTitle || o.value.title
    ), a = Fe(
      () => n.getters["mediawiki/getPage"](
        o.value.sourceLanguage,
        s.value
      )
    ), r = Fe(
      () => {
        var S;
        return (S = o.value) == null ? void 0 : S.missingSectionsCount;
      }
    ), l = Fe(() => !(o.value instanceof nn) || !o.value.orderedMissingSections ? 0 : o.value.orderedMissingSections.filter((S) => {
      const k = o.value.getSectionSize(S.sourceTitle);
      return mf(k);
    }).length), c = pe(), u = Fe(() => {
      const S = c.i18n(
        "cx-sx-translation-suggestion-easy-sections",
        [l.value]
      );
      return c.i18n("parentheses", [S]);
    }), i = Fe(() => {
      var S;
      return (S = a.value) == null ? void 0 : S.description;
    }), d = Fe(
      () => o.value instanceof nn
    );
    Fe(
      () => o.value instanceof Jn
    );
    const g = Fe(
      () => o.value instanceof es
    ), p = Fe(
      () => O.getAutonym(o.value.sourceLanguage)
    ), m = Fe(
      () => O.getAutonym(o.value.targetLanguage)
    ), h = Fe(
      () => g.value ? xf : bf
    ), f = r2("colors"), v = Fe(
      () => g.value ? f.blue600 : "currentColor"
    ), w = Fe(
      () => o.value instanceof lf || o.value instanceof cf
    ), y = Fe(
      () => w.value && !o.value.collectionMatchesProvider()
    ), b = Fe(() => y.value || d.value ? !1 : Ht ? kS(o.value.size) : $S(o.value.leadSectionSize));
    return (S, k) => {
      const V = J8("i18n");
      return o.value ? (Fn(), Hg("div", Z8, [
        Bn("div", e2, [
          Pt(ye(xu), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        Pt(ye(I), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: ht(() => [
            Pt(ye(I), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: ht(() => [
                Pt(ye(C), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: ht(() => [
                    Bn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: o.value.sourceLanguage,
                      dir: ye(O.getDir)(o.value.sourceLanguage),
                      textContent: Ls(s.value)
                    }, null, 8, t2)
                  ]),
                  _: 1
                }),
                Pt(ye(C), { shrink: "" }, {
                  default: ht(() => [
                    Bn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: o.value.sourceLanguage,
                      dir: ye(O.getDir)(o.value.sourceLanguage),
                      textContent: Ls(i.value)
                    }, null, 8, n2)
                  ]),
                  _: 1
                }),
                b.value ? (Fn(), Ao(ye(C), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: ht(() => [
                    kl(Bn("small", null, null, 512), [
                      [V, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : io("", !0),
                d.value ? (Fn(), Ao(ye(C), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom",
                  shrink: ""
                }, {
                  default: ht(() => [
                    kl(Bn("small", o2, null, 512), [
                      [V, [r.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (Fn(), Hg("small", s2, Ls(u.value), 1)) : io("", !0)
                  ]),
                  _: 1
                })) : g.value ? (Fn(), Ao(ye(C), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: ht(() => [
                    Pt(ye(I), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: ht(() => [
                        Pt(ye(C), { grow: "" }, {
                          default: ht(() => [
                            Bn("small", {
                              textContent: Ls(p.value)
                            }, null, 8, a2),
                            Pt(ye($l), {
                              icon: ye(Sf),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            Bn("small", {
                              textContent: Ls(m.value)
                            }, null, 8, i2)
                          ]),
                          _: 1
                        }),
                        r.value ? (Fn(), Ao(ye(C), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: ht(() => [
                            kl(Bn("small", null, null, 512), [
                              [V, [
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
                y.value ? (Fn(), Ao(ye(C), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: ht(() => [
                    Pt(vo, {
                      icon: ye(Uu),
                      content: o.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : io("", !0)
              ]),
              _: 1
            }),
            Pt(ye(C), { shrink: "" }, {
              default: ht(() => [
                g.value ? io("", !0) : (Fn(), Ao(ye($l), {
                  key: 0,
                  icon: ye(rs),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: k[0] || (k[0] = qg((U) => S.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                Pt(ye($l), {
                  class: "cx-suggestion__favorite-button",
                  icon: h.value,
                  "icon-color": v.value,
                  onClick: k[1] || (k[1] = qg((U) => S.$emit("bookmark"), ["stop"]))
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
const Vl = window.Vue.normalizeClass, Gg = window.Vue.createVNode, c2 = window.Vue.renderList, Wg = window.Vue.Fragment, Ts = window.Vue.openBlock, di = window.Vue.createElementBlock, u2 = window.Vue.createBlock, d2 = window.Vue.toDisplayString, g2 = window.Vue.withKeys, Xg = window.Vue.createCommentVNode, p2 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, gi = window.Vue.computed, m2 = window.Vue.ref, h2 = window.Vue.watchEffect, f2 = {
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
    ), s = m2(!1);
    h2(() => {
      n.filter.expandable && (s.value = o.value);
    });
    const a = t, r = () => {
      n.filter.expandable && o.value ? s.value = !s.value : a("filter-selected", n.filter);
    }, l = gi(() => {
      const g = n.filter.subFilters.find(
        (m) => n.isSelected(m)
      );
      let p = n.filter.chipLabel;
      return g && (p += `/${c(g)}`), p;
    }), c = (g) => {
      const { label: p } = g, m = n.filter.label;
      return p.startsWith(`${m}/`) ? p.replace(`${m}/`, "") : p;
    }, u = gi(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), i = gi(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && s.value
    ), d = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, p) => (Ts(), di(Wg, null, [
      Gg(vo, {
        class: Vl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": o.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: s.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      s.value ? (Ts(), di("div", p2, [
        Gg(vo, {
          class: Vl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: p[0] || (p[0] = (m) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Ts(!0), di(Wg, null, c2(u.value, (m) => (Ts(), u2(vo, {
          key: m.id,
          class: Vl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(m)
          }]),
          content: c(m),
          icon: m.icon,
          onClick: (h) => g.$emit("filter-selected", m)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        i.value ? (Ts(), di("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: d,
          onKeyup: g2(d, ["enter"])
        }, d2(e.viewMoreConfig.label), 33)) : Xg("", !0)
      ])) : Xg("", !0)
    ], 64));
  }
};
const w2 = window.Vue.toDisplayString, Kg = window.Vue.createElementVNode, v2 = window.Vue.renderList, Yg = window.Vue.Fragment, El = window.Vue.openBlock, Qg = window.Vue.createElementBlock, _2 = window.Vue.createBlock, S2 = { class: "sx-suggestions-filters__group-label mb-3" }, y2 = { class: "sx-suggestions-filters__group-filters mb-3" }, x2 = {
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
    return (o, s) => (El(), Qg(Yg, null, [
      Kg("div", S2, w2(e.filterGroup.label), 1),
      Kg("div", y2, [
        (El(!0), Qg(Yg, null, v2(n(), (a) => (El(), _2(f2, {
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
}, Jg = window.Vue.computed, b2 = window.Vue.inject, Zg = window.Vue.ref, ep = window.Vue.watch, Wu = (e, t) => {
  const o = Zg([]), s = Zg(!1), a = Jg(
    () => o.value.slice(0, 4)
  ), r = b2("breakpoints"), l = Jg(() => r.value.mobile), c = Gu(() => x(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      o.value = yield So.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1, mw.cx.eventlogging.stats.articleSearchAccess(l.value);
    }
  }), 500), u = () => {
    o.value = [], t.value && (s.value = !0, c());
  };
  return ep(t, u), ep(e, u), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
class pi {
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
const Ll = window.Vue.ref, tp = window.Vue.watch, np = window.Vue.computed, { topics: C2, regions: k2 } = mw.loader.require(
  "ext.cx.articlefilters"
), $2 = C2.flatMap(
  (e) => e.topics.map((t) => Ye(ce({}, t), {
    groupId: e.groupId
  }))
), V2 = () => {
  const e = Ll(""), t = Ll("all"), n = Ll({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = pe(), { pageCollectionGroups: s } = Mu(), { sourceLanguageURLParameter: a } = D(), r = (p) => (p = p.toLowerCase(), $2.filter(
    (m) => m.label.toLowerCase().includes(p)
  )), l = (p) => (p = p.toLowerCase(), Object.values(s.value).flat().filter(
    (h) => h.name.toLowerCase().includes(p)
  )), c = (p) => (p = p.toLowerCase(), k2.flatMap((m) => [m, ...m.countries]).filter(
    (m) => m.label.toLowerCase().includes(p)
  ).map((m) => ({
    label: m.label,
    id: m.id
  }))), u = np(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: d } = Wu(
    a,
    u
  );
  tp(i, () => {
    n.value.topics = i.value.map(
      (p) => {
        var m;
        return new pi({
          label: p.title,
          value: p.title,
          description: p.description,
          thumbnail: { url: (m = p.thumbnail) == null ? void 0 : m.source },
          filterType: qt,
          filterId: p.title,
          showThumbnail: !0
        });
      }
    );
  }), tp([e, t], () => x(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (p) => new pi({
        label: p.label,
        value: p.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? gu : null,
        filterType: tt,
        filterId: p.topicId
      })
    ), n.value.collections = l(
      e.value
    ).map(
      (p) => new pi({
        label: p.name,
        value: p.name,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          p.articlesCount
        ),
        icon: t.value === "all" ? Uu : null,
        filterType: ee,
        filterId: p.name
      })
    ), n.value.regions = c(e.value).map(
      (p) => new pi({
        label: p.label,
        value: p.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? gu : null,
        filterType: Pe,
        filterId: p.id
      })
    );
  }));
  const g = np(() => {
    const p = t.value === "all";
    return [
      {
        key: "topics",
        show: n.value.topics.length && p,
        items: n.value.topics
      },
      {
        key: "topic-areas",
        show: n.value.topic_areas.length && (p || t.value === "topics"),
        items: n.value.topic_areas
      },
      {
        key: "geography",
        show: n.value.regions.length && (p || t.value === "geography"),
        items: n.value.regions
      },
      {
        key: "collections",
        show: n.value.collections.length && (p || t.value === "collections"),
        items: n.value.collections
      }
    ].filter((m) => m.show);
  });
  return { searchInput: e, searchScope: t, searchResults: g, searchResultsLoading: d };
}, E2 = "suggestion_filter_topic_area", L2 = "suggestion_filter_search_result_seed", T2 = "suggestion_filter_collections", A2 = "suggestion_filter_previous_edits", D2 = "suggestion_filter_popular_articles", P2 = "suggestion_filter_region", Tl = (e) => {
  if (e.type === tt || e.type === Pe || e.type === ee || e.type === qt)
    return e.id;
  if (e.id === ee)
    return "all-collections";
}, Al = (e) => {
  if (e.type === tt)
    return E2;
  if (e.type === Pe)
    return P2;
  if (e.type === qt)
    return L2;
  if (e.id === ee || e.type === ee)
    return T2;
  if (e.id === sn)
    return A2;
  if (e.id === an)
    return D2;
}, pw = () => {
  const e = $t();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: Al(r),
      event_context: Tl(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: Al(r),
      event_context: Tl(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: Al(r),
      event_context: Tl(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const Ce = window.Vue.unref, ft = window.Vue.createVNode, Bt = window.Vue.withCtx, B2 = window.Vue.resolveDirective, Kt = window.Vue.createElementVNode, Do = window.Vue.withDirectives, op = window.Vue.toDisplayString, F2 = window.Vue.createTextVNode, N2 = window.Vue.vShow, sp = window.Vue.isRef, ap = window.Vue.renderList, ip = window.Vue.Fragment, pn = window.Vue.openBlock, ro = window.Vue.createElementBlock, M2 = window.Vue.withKeys, rp = window.Vue.createCommentVNode, lp = window.Vue.createBlock, U2 = { class: "sx-suggestions-filters" }, I2 = { class: "mb-0" }, R2 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, z2 = { class: "mb-3" }, O2 = { class: "px-4 pb-4 pt-7" }, j2 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, H2 = ["onKeyup", "onClick"], q2 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, G2 = { class: "sx-suggestions-filters__search-results-pending" }, W2 = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, X2 = { class: "sx-suggestions-filters__search-results-empty-primary" }, K2 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, mi = window.Vue.ref, lo = window.Vue.computed, Y2 = window.Vue.inject, Q2 = window.Vue.watch, cp = window.Codex.CdxButton, J2 = window.Codex.CdxIcon, Z2 = window.Codex.CdxTextInput, e$ = window.Codex.CdxMenu, t$ = window.Codex.CdxTabs, n$ = window.Codex.CdxTab, o$ = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = pe(), o = t, s = lo(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: p([
          Ge,
          ee,
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
        filterGroups: p([ee])
      },
      {
        name: "geography",
        label: n.i18n("cx-sx-suggestions-filters-tab-regions"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-regions"
        ),
        filterGroups: p([Pe])
      },
      {
        name: "topics",
        label: n.i18n("cx-sx-suggestions-filters-tab-topics"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-topics"
        ),
        filterGroups: p([tt])
      }
    ]), a = (P) => X.value = P, r = lo(
      () => s.value.find((P) => P.name === X.value)
    ), l = (P, M) => M === "all" && P.type === Pe ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          P.label
        ),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, c = (P, M) => {
      if (P !== "all")
        return !1;
      if (M === ee) {
        const oe = p([ee]);
        return oe.length && oe[0].filters.length > 6;
      }
      return M === Pe;
    }, { allFilters: u, isFilterSelected: i, selectFilter: d, findSelectedFilter: g } = Aa(), p = (P) => P.flatMap((M) => u.value.filter((oe) => oe.type === M)).filter(Boolean), m = () => {
      k(), o("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: h,
      logSuggestionFiltersConfirm: f,
      logSuggestionFiltersSelect: v
    } = pw(), w = () => {
      h(), m();
    }, y = () => {
      S.value && (f(S.value), d(S.value)), m();
    }, b = mi(!1), S = mi(null), k = () => {
      S.value = null, b.value = !1;
    }, V = (P) => {
      v(P), S.value = P, b.value = !0;
    }, U = (P) => S.value ? S.value.id === P.id && S.value.type === P.type : i(P), L = Y2("breakpoints"), B = lo(() => L.value.mobile), { searchInput: z, searchScope: X, searchResults: le, searchResultsLoading: ne } = V2(), N = lo(
      () => S.value || g()
    ), R = mi(null);
    Q2(R, () => {
      if (!R.value)
        return;
      const P = G.value.find(
        (M) => M.value === R.value
      );
      V({
        type: P.filterType,
        id: P.filterId,
        label: P.label
      }), z.value = "";
    });
    const q = {
      [ee]: "cx-sx-suggestions-filters-view-all-collections-group",
      [Pe]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, G = lo(
      () => le.value.flatMap((P) => P.items)
    ), me = mi({}), $e = lo(
      () => me.value[X.value]
    ), Se = lo(() => {
      var M;
      const P = (M = $e.value) == null ? void 0 : M.getHighlightedMenuItem();
      return P == null ? void 0 : P.id;
    }), be = (P) => {
      P.key !== " " && $e.value && $e.value.delegateKeyNavigation(P);
    }, Ke = (P, M) => {
      me.value[M] = P;
    };
    return (P, M) => {
      const oe = B2("i18n");
      return pn(), lp(Ce(kt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: B.value,
        header: !1
      }, {
        default: Bt(() => [
          Kt("section", U2, [
            ft(Ce(I), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Bt(() => [
                ft(Ce(C), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Bt(() => [
                    ft(Ce(cp), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": P.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: w
                    }, {
                      default: Bt(() => [
                        ft(Ce(J2), { icon: Ce(rs) }, null, 8, ["icon"])
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
                  default: Bt(() => [
                    Do(Kt("h5", I2, null, 512), [
                      [oe, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                ft(Ce(C), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Bt(() => [
                    Do(ft(Ce(cp), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: y
                    }, {
                      default: Bt(() => [
                        F2(op(P.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [N2, b.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Kt("div", R2, [
              Do(Kt("h5", z2, null, 512), [
                [oe, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Kt("div", null, [
                ft(vo, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: N.value.label,
                  icon: N.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            Kt("div", O2, [
              ft(Ce(Z2), {
                modelValue: Ce(z),
                "onUpdate:modelValue": M[0] || (M[0] = (_) => sp(z) ? z.value = _ : null),
                role: "combobox",
                "aria-activedescendant": Se.value,
                "aria-controls": "sx-suggestions-filters__search-results__menu",
                "aria-autocomplete": "none",
                placeholder: r.value.searchPlaceholder,
                "input-type": "search",
                "start-icon": Ce(gu),
                clearable: !!Ce(z),
                onKeydown: be
              }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
            ]),
            ft(Ce(t$), {
              active: Ce(X),
              "onUpdate:active": [
                M[2] || (M[2] = (_) => sp(X) ? X.value = _ : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Bt(() => [
                (pn(!0), ro(ip, null, ap(s.value, (_, A) => (pn(), lp(Ce(n$), {
                  key: A,
                  name: _.name,
                  label: _.label
                }, {
                  default: Bt(() => [
                    Ce(z) ? (pn(), ro("div", q2, [
                      ft(Ce(e$), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (E) => Ke(E, _.name),
                        selected: R.value,
                        "onUpdate:selected": M[1] || (M[1] = (E) => R.value = E),
                        "show-pending": Ce(ne),
                        expanded: "",
                        "menu-items": G.value
                      }, {
                        pending: Bt(() => [
                          Do(Kt("div", G2, null, 512), [
                            [oe, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Bt(() => [
                          Ce(ne) ? rp("", !0) : (pn(), ro("div", W2, [
                            Do(Kt("span", X2, null, 512), [
                              [oe, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            Do(Kt("span", K2, null, 512), [
                              [oe, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (pn(), ro("div", j2, [
                      (pn(!0), ro(ip, null, ap(_.filterGroups, (E) => (pn(), ro("div", {
                        key: E.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        ft(x2, {
                          "filter-group": E,
                          "tentatively-select-filter": V,
                          "is-selected": U,
                          limit: c(_.name, E.type) ? 4 : 0,
                          "get-sub-filter-config": (F) => l(F, _.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        c(_.name, E.type) ? (pn(), ro("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: M2((F) => a(E.id), ["enter"]),
                          onClick: (F) => a(E.id)
                        }, [
                          Kt("span", null, op(P.$i18n(q[E.id])), 1)
                        ], 40, H2)) : rp("", !0)
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
const As = window.Vue.unref, hi = window.Vue.openBlock, up = window.Vue.createBlock;
window.Vue.createCommentVNode;
const s$ = window.Vue.renderList, a$ = window.Vue.Fragment, dp = window.Vue.createElementBlock, i$ = window.Vue.normalizeClass, gp = window.Vue.createVNode, r$ = {
  key: 1,
  class: "cx-suggestion-list__filters flex mx-4 pb-2"
}, pp = window.Vue.ref, mp = window.Vue.watch, l$ = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = pe(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: o } = pw(), { targetLanguageURLParameter: s } = D(), {
      getFiltersSummary: a,
      selectFilter: r,
      isFilterSelected: l,
      waitingForPageCollectionsFetch: c,
      validateURLFilterWithCollections: u,
      setFeaturedCollectionFilterIfNeeded: i
    } = Aa(), { initializeFeaturedCollectionWatcher: d } = Cr();
    d();
    const g = pp(!1), p = () => {
      o(), g.value = !0;
    }, m = (f) => {
      n(f), r(f);
    }, h = pp(a());
    return mp(g, (f) => {
      f || (h.value = a());
    }), mp([c, s], ([f]) => {
      f || (u(), i(), h.value = a());
    }), (f, v) => As(c) ? (hi(), up(As(dt), { key: 0 })) : (hi(), dp("div", r$, [
      (hi(!0), dp(a$, null, s$(h.value, (w) => (hi(), up(vo, {
        key: w.label,
        class: i$(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": As(l)(w)
        }]),
        icon: w.icon,
        content: w.label,
        onClick: (y) => m(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      gp(vo, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: As(Ru),
        content: As(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: p
      }, null, 8, ["icon", "content"]),
      gp(o$, {
        modelValue: g.value,
        "onUpdate:modelValue": v[0] || (v[0] = (w) => g.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, Po = window.Vue.computed, hp = window.Vue.ref, Dl = window.Vue.watch, c$ = window.Vuex.useStore, u$ = () => {
  const e = c$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = D(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = br(), r = $t(), l = Po(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), c = Po(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), u = hp(0), i = hp(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, g = 4, p = Po(
    () => a(u.value)
  );
  Dl(
    p,
    () => {
      p.value.forEach((z) => {
        z.seen = !0;
      });
    },
    { deep: !0 }
  );
  const m = Po(
    () => s(i.value)
  );
  Dl(
    m,
    () => {
      m.value.forEach((z) => {
        z.seen = !0;
      });
    },
    { deep: !0 }
  );
  const h = () => {
    S(), L(), k(), B();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: v
  } = Ou(), w = (z) => z.length === d, y = Po(
    () => w(m.value)
  ), b = Po(
    () => w(p.value)
  ), S = () => {
    const z = (u.value + 1) % g, X = w(
      a(z)
    );
    (!b.value || !X) && f();
  }, k = () => {
    const z = (i.value + 1) % g, X = w(
      s(z)
    );
    (!y.value || !X) && v();
  }, V = (z) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", z), S();
  }, U = (z) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", z), k();
  }, L = () => u.value = (u.value + 1) % g, B = () => i.value = (i.value + 1) % g;
  return Dl(
    o,
    () => {
      i.value = 0, k(), u.value = 0, S();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: U,
    discardSectionSuggestion: V,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: c,
    sectionSuggestionsLoading: l,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: b
  };
}, d$ = window.Vuex.useStore, Xu = () => {
  const e = d$(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Ou(), o = (u, i, d) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === u && g.targetLanguage === i && g.sourceTitle === d
  ), s = (u) => x(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: d, targetLanguage: g } = u;
    yield de.markFavorite(i, d, g);
    const p = new es({
      title: i,
      sourceLanguage: d,
      targetLanguage: g
    });
    e.commit("suggestions/addFavoriteSuggestion", p);
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
    markFavoriteSuggestion: (u, i, d) => x(void 0, null, function* () {
      const g = o(
        i,
        d,
        u
      );
      g && (e.commit(
        "suggestions/removePageSuggestionFromList",
        g
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](i, d, u);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield de.markFavorite(
        u,
        i,
        d
      );
      const m = new es({
        title: u,
        sourceLanguage: i,
        targetLanguage: d
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (u) => (e.commit("suggestions/removeFavoriteSuggestion", u), de.unmarkFavorite(u))
  };
}, g$ = "suggestion_no_seed", p$ = "suggestion_recent_edit", m$ = "suggestion_topic_area", h$ = "suggestion_search_result_seed", f$ = "suggestion_featured", w$ = "suggestion_collections", v$ = "suggestion_region", _$ = () => {
  const { currentSuggestionFilters: e } = D();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === sn)
      return t ? p$ : g$;
    if (n === tt)
      return m$;
    if (n === Pe)
      return v$;
    if (n === qt)
      return h$;
    if (o === an)
      return f$;
    if (o === ee || n === ee)
      return w$;
    const s = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${o}`
    );
    throw mw.errorLogger.logError(s, "error.contenttranslation"), s;
  };
};
const fi = window.Vue.unref, fp = window.Vue.createVNode, Bo = window.Vue.toDisplayString, Fo = window.Vue.createElementVNode, Ds = window.Vue.openBlock, Ps = window.Vue.createElementBlock, wi = window.Vue.createCommentVNode, wp = window.Vue.createTextVNode, S$ = window.Vue.normalizeClass, y$ = { class: "cx-featured-collection-banner py-4 px-6" }, x$ = { class: "cx-featured-collection-banner__header mb-3" }, b$ = { class: "cx-featured-collection-banner__header-text" }, C$ = { class: "cx-featured-collection-banner__title mb-0" }, k$ = {
  key: 0,
  class: "cx-featured-collection-banner__source mb-0"
}, $$ = { class: "cx-featured-collection-banner__content" }, V$ = { class: "cx-featured-collection-banner__learn-more-container" }, E$ = ["href"], vp = window.Codex.CdxIcon, Pl = window.Vue.ref, L$ = window.Vue.computed, T$ = window.Vue.onMounted, A$ = window.Vue.onUnmounted, D$ = {
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
    const t = Pl(!1), n = Pl(null), o = Pl(null), s = L$(() => n.value ? (o.value, n.value.scrollHeight > n.value.clientHeight) : !1), a = () => {
      t.value = !t.value;
    }, r = () => {
      o.value = window.innerWidth;
    };
    return T$(() => {
      window.addEventListener("resize", r);
    }), A$(() => {
      window.removeEventListener("resize", r);
    }), (l, c) => (Ds(), Ps("div", y$, [
      Fo("div", x$, [
        fp(fi(vp), {
          icon: fi(dx),
          class: "cx-featured-collection-banner__icon me-3 mt-1"
        }, null, 8, ["icon"]),
        Fo("div", b$, [
          Fo("h5", C$, Bo(l.$i18n("cx-featured-collection-banner-title")), 1),
          e.communityName ? (Ds(), Ps("span", k$, Bo(e.communityName), 1)) : wi("", !0)
        ])
      ]),
      Fo("div", $$, [
        Fo("div", {
          ref_key: "descriptionRef",
          ref: n,
          class: S$(["cx-featured-collection-banner__description", {
            "cx-featured-collection-banner__description--expanded": t.value
          }])
        }, [
          wp(Bo(e.description || l.$i18n("cx-featured-collection-banner-description")) + " ", 1),
          t.value ? (Ds(), Ps("button", {
            key: 0,
            class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--inline",
            onClick: a
          }, Bo(l.$i18n("cx-featured-collection-banner-toggle-less")), 1)) : wi("", !0)
        ], 2),
        !t.value && s.value ? (Ds(), Ps("button", {
          key: 0,
          class: "cx-featured-collection-banner__toggle cx-featured-collection-banner__toggle--external mb-1 ml-1",
          onClick: a
        }, Bo(l.$i18n("cx-featured-collection-banner-toggle-more")), 1)) : wi("", !0)
      ]),
      Fo("div", V$, [
        (t.value || !s.value) && e.learnMoreUrl ? (Ds(), Ps("a", {
          key: 0,
          href: e.learnMoreUrl,
          class: "cx-featured-collection-banner__learn-more",
          target: "_blank"
        }, [
          wp(Bo(l.$i18n("cx-featured-collection-banner-learn-more")) + " ", 1),
          fp(fi(vp), {
            icon: fi(Ta),
            size: "small",
            class: "cx-featured-collection-banner__learn-more-icon"
          }, null, 8, ["icon"])
        ], 8, E$)) : wi("", !0)
      ])
    ]));
  }
};
const _p = window.Vue.normalizeClass, P$ = window.Vue.resolveDirective, Bs = window.Vue.createElementVNode, vi = window.Vue.withDirectives, ue = window.Vue.unref, Qe = window.Vue.openBlock, Ft = window.Vue.createBlock, mn = window.Vue.createCommentVNode, Bl = window.Vue.createVNode, Fs = window.Vue.withCtx, Sp = window.Vue.renderList, yp = window.Vue.Fragment, Fl = window.Vue.createElementBlock, B$ = window.Vue.toDisplayString, F$ = window.Vue.createTextVNode, N$ = window.Vue.vShow, M$ = { class: "cx-suggestion-list" }, U$ = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, I$ = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, R$ = { class: "cx-suggestion-list__refresh-button-container justify-center" }, wt = window.Vue.computed, z$ = window.Vue.inject, O$ = window.Vue.ref, j$ = window.Codex.CdxButton, H$ = window.Codex.CdxIcon, q$ = window.Vuex.useStore, G$ = {
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
    } = D(), { supportedLanguageCodes: s } = Va(), a = Af(), r = (M) => a(M, n.value), l = (M) => a(t.value, M), c = _$(), { featuredCollection: u } = Cr(), { findSelectedFilter: i } = Aa(), d = wt(() => i()), g = Da(), p = (M) => {
      g(
        M.sourceTitle,
        M.sourceLanguage,
        M.targetLanguage,
        c(M.suggestionSeed),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: m,
      currentSectionSuggestionsSlice: h,
      discardPageSuggestion: f,
      discardSectionSuggestion: v,
      onSuggestionRefresh: w,
      pageSuggestionsLoading: y,
      sectionSuggestionsLoading: b,
      isCurrentPageSuggestionsSliceFull: S,
      isCurrentSectionSuggestionsSliceFull: k
    } = u$(), V = O$(null), U = $t(), L = () => {
      U({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), w(), V.value && V.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: B, markFavoritePageSuggestion: z } = Xu(), X = z$("breakpoints"), le = wt(() => X.value.mobile), ne = wt(
      () => le.value ? null : "pb-2 flex justify-between items-center"
    ), N = q$(), R = wt(
      () => N.state.suggestions.isPageSuggestionsFetchPending
    ), q = wt(
      () => N.state.suggestions.isSectionSuggestionsFetchPending
    ), G = wt(
      () => R.value || y.value && !S.value
    ), me = wt(
      () => q.value || b.value && !k.value
    ), $e = wt(
      () => R.value || y.value || m.value.length > 0
    ), Se = wt(
      () => q.value || b.value || h.value.length > 0
    ), be = wt(
      () => !$e.value && !Se.value
    ), Ke = wt(
      () => !b.value && !y.value && !R.value && !q.value && !be.value
    ), P = wt(
      () => {
        var M;
        return u.value && ((M = d.value) == null ? void 0 : M.id) === u.value.name;
      }
    );
    return (M, oe) => {
      const _ = P$("i18n");
      return vi((Qe(), Fl("div", M$, [
        Bl(ue(Ze), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: Fs(() => [
            Bs("div", {
              class: _p(["cx-suggestion-list__header-card__header px-4", ne.value])
            }, [
              vi(Bs("h3", {
                class: _p(["mw-ui-card__title mb-0", { "py-3": le.value }])
              }, null, 2), [
                [_, void 0, "cx-suggestionlist-title"]
              ]),
              le.value ? mn("", !0) : (Qe(), Ft(pr, {
                key: 0,
                "source-languages": ue(s),
                "target-languages": ue(s),
                "selected-source-language": ue(t),
                "selected-target-language": ue(n),
                "onUpdate:selectedSourceLanguage": r,
                "onUpdate:selectedTargetLanguage": l
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Bl(l$)
          ]),
          default: Fs(() => [
            le.value ? (Qe(), Ft(pr, {
              key: 0,
              "source-languages": ue(s),
              "target-languages": ue(s),
              "selected-source-language": ue(t),
              "selected-target-language": ue(n),
              "onUpdate:selectedSourceLanguage": r,
              "onUpdate:selectedTargetLanguage": l
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : mn("", !0)
          ]),
          _: 1
        }),
        P.value ? (Qe(), Ft(D$, {
          key: 0,
          "community-name": ue(u).communityName,
          description: ue(u).description,
          "learn-more-url": ue(u).link
        }, null, 8, ["community-name", "description", "learn-more-url"])) : mn("", !0),
        Se.value ? (Qe(), Ft(ue(Ze), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: Fs(() => [
            vi(Bs("h5", U$, null, 512), [
              [_, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Qe(!0), Fl(yp, null, Sp(ue(h), (A, E) => (Qe(), Ft(yu, {
              key: `section-suggestion-${E}`,
              class: "ma-0",
              suggestion: A,
              onClose: (F) => ue(v)(A),
              onClick: (F) => p(A),
              onBookmark: (F) => ue(B)(A)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            me.value ? (Qe(), Ft(ue(dt), { key: 0 })) : mn("", !0)
          ]),
          _: 1
        })) : mn("", !0),
        $e.value ? (Qe(), Ft(ue(Ze), {
          key: 2,
          ref_key: "pageSuggestionsList",
          ref: V,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: Fs(() => [
            vi(Bs("h5", I$, null, 512), [
              [_, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Qe(!0), Fl(yp, null, Sp(ue(m), (A, E) => (Qe(), Ft(yu, {
              key: `page-suggestion-${E}`,
              suggestion: A,
              onClose: (F) => ue(f)(A),
              onClick: (F) => p(A),
              onBookmark: (F) => ue(z)(A)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            G.value ? (Qe(), Ft(ue(dt), { key: 0 })) : mn("", !0)
          ]),
          _: 1
        }, 512)) : mn("", !0),
        be.value ? (Qe(), Ft(gw, {
          key: 3,
          title: M.$i18n("cx-sx-suggestion-list-empty-title"),
          description: M.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : mn("", !0),
        Bs("div", R$, [
          Ke.value ? (Qe(), Ft(ue(j$), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: L
          }, {
            default: Fs(() => [
              Bl(ue(H$), {
                class: "me-1",
                icon: ue($f)
              }, null, 8, ["icon"]),
              F$(" " + B$(M.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : mn("", !0)
        ])
      ], 512)), [
        [N$, e.active]
      ]);
    };
  }
}, W$ = window.Vue.resolveDirective, X$ = window.Vue.createElementVNode, K$ = window.Vue.withDirectives, Y$ = window.Vue.renderList, Q$ = window.Vue.Fragment, Nl = window.Vue.openBlock, J$ = window.Vue.createElementBlock, xp = window.Vue.unref, bp = window.Vue.createBlock, Cp = window.Vue.withCtx, Z$ = window.Vue.createCommentVNode, eV = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, tV = window.Vue.computed, nV = window.Vuex.useStore, oV = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = nV(), n = tV(() => t.state.suggestions.favorites || []), o = Da(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Xu();
    return (r, l) => {
      const c = W$("i18n");
      return n.value.length ? (Nl(), bp(xp(Ze), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Cp(() => [
          K$(X$("h3", eV, null, 512), [
            [c, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Cp(() => [
          (Nl(!0), J$(Q$, null, Y$(n.value, (u, i) => (Nl(), bp(yu, {
            key: `favorite-${i}`,
            suggestion: u,
            onClick: (d) => s(u),
            onBookmark: (d) => xp(a)(u)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : Z$("", !0);
    };
  }
};
const sV = window.Vue.resolveDirective, Ns = window.Vue.createElementVNode, aV = window.Vue.withDirectives, iV = window.Vue.renderList, rV = window.Vue.Fragment, kp = window.Vue.openBlock, $p = window.Vue.createElementBlock, lV = window.Vue.unref, cV = window.Vue.createVNode, uV = window.Vue.toDisplayString, dV = { class: "cx-help-panel pa-4" }, gV = { class: "cx-help-panel__item-list mt-6 ps-2" }, pV = ["href", "target"], mV = ["textContent"], hV = window.Codex.CdxIcon, fV = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = pe(), n = [
      {
        icon: sx,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: ex,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = sV("i18n");
      return kp(), $p("div", dV, [
        aV(Ns("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Ns("ul", gV, [
          (kp(), $p(rV, null, iV(n, (r, l) => Ns("li", {
            key: l,
            class: "mt-4"
          }, [
            Ns("a", {
              href: r.href,
              target: r.target
            }, [
              cV(lV(hV), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Ns("span", {
                textContent: uV(r.label)
              }, null, 8, mV)
            ], 8, pV)
          ])), 64))
        ])
      ]);
    };
  }
};
const wV = window.Vue.resolveDirective, Nn = window.Vue.createElementVNode, Ml = window.Vue.withDirectives, Ul = window.Vue.toDisplayString, _i = window.Vue.unref, Il = window.Vue.withCtx, Si = window.Vue.createVNode, vV = window.Vue.openBlock, _V = window.Vue.createElementBlock, SV = { class: "cx-stats-panel pa-4" }, yV = ["textContent"], xV = { class: "cx-stats-panel__monthly-stats-label" }, bV = ["textContent"], CV = { class: "cx-stats-panel__total-stats-label" }, kV = ["href", "target"], $V = ["textContent"], VV = window.Codex.CdxIcon, EV = window.Vue.ref, Vp = window.Vue.computed, LV = window.Vue.watch, TV = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = pe(), n = e, o = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", s = Vp(() => {
      var u, i;
      const c = ((i = (u = n.stats) == null ? void 0 : u[o]) == null ? void 0 : i.count) || 0;
      return mw.language.convertNumber(c);
    }), a = Vp(() => {
      var u, i;
      const c = ((i = (u = n.stats) == null ? void 0 : u[o]) == null ? void 0 : i.delta) || 0;
      return mw.language.convertNumber(c);
    }), r = EV(null), l = {
      icon: Cf,
      label: t.i18n("cx-sx-dashboard-stats-panel-all-stats-label"),
      href: "https://superset.wmcloud.org/superset/dashboard/p/X61GbQpZ5Rb/",
      target: "_blank"
    };
    return LV(
      () => n.stats,
      () => {
        const c = n.stats, u = r.value.getContext("2d"), i = Object.keys(n.stats || {}).sort(), d = i.reduce(
          (k, V) => Math.max(k, c[V].delta),
          0
        ), g = i.map((k) => c[k].delta), p = r.value.getBoundingClientRect().width, m = r.value.getBoundingClientRect().height;
        r.value.width = p, r.value.height = m;
        const h = 4, f = 6, v = 50, w = (v - h) / d;
        let y = h;
        const b = Math.floor(
          (p - h) / (f + h)
        ), S = g.slice(
          Math.max(g.length - b, 0)
        );
        S.forEach((k, V) => {
          V === S.length - 1 && (u.fillStyle = "#36c");
          const U = v - k * w;
          u.fillRect(y, U, f, k * w), y += f + h;
        });
      }
    ), (c, u) => {
      const i = wV("i18n");
      return vV(), _V("div", SV, [
        Ml(Nn("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        Si(_i(I), null, {
          default: Il(() => [
            Si(_i(C), { class: "cx-stats-panel__monthly-stats" }, {
              default: Il(() => [
                Nn("h3", {
                  textContent: Ul(a.value)
                }, null, 8, yV),
                Ml(Nn("h5", xV, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            Si(_i(C), { class: "cx-stats-panel__total-stats" }, {
              default: Il(() => [
                Nn("h3", {
                  textContent: Ul(s.value)
                }, null, 8, bV),
                Ml(Nn("h5", CV, null, 512), [
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
          Si(_i(VV), {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          Nn("span", {
            textContent: Ul(l.label)
          }, null, 8, $V)
        ], 8, kV)
      ]);
    };
  }
}, hw = () => {
  const e = $t();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const AV = window.Vue.renderSlot, DV = window.Vue.unref, PV = window.Vue.createVNode, BV = window.Vue.createElementVNode, FV = window.Vue.openBlock, NV = window.Vue.createElementBlock, MV = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, UV = { class: "col-12 ma-0 pa-0" }, IV = {
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
    const n = t, o = hw(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (FV(), NV("footer", MV, [
      BV("div", UV, [
        AV(a.$slots, "default", {}, () => [
          PV(DV(Ca), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, RV = window.Vuex.useStore, zV = () => {
  const e = RV(), t = as();
  return () => x(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const n = yield de.fetchFavorites();
    if (!n || !n.length)
      return;
    const o = {};
    for (const s of n)
      e.commit("suggestions/addFavoriteSuggestion", s), de.fetchSectionSuggestion(
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
}, OV = window.Vuex.useStore, fw = () => {
  const e = OV(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = D(), { isDefaultFilter: r } = ku(), { previousRoute: l } = Be(e), c = $t(), u = () => {
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
    }, p = t("campaign");
    return g[p];
  }, i = () => {
    if (n.value)
      return u() || "direct_preselect";
    const p = {
      "sx-article-search": "return_from_search",
      "sx-translation-confirmer": "return_from_confirmation",
      "sx-section-selector": "return_from_section_selection",
      "sx-sentence-selector": "editor_close"
    }[l.value];
    return p || (r(o.value) ? u() || "direct" : "suggestion_filter_direct_preselect");
  };
  return { logDashboardOpenEvent: () => {
    if (n.value && u()) {
      const m = t("campaign");
      mw.hook("mw.cx.cta.accept").fire(
        m,
        s.value,
        a.value
      );
    }
    const g = i(), p = {
      event_type: "dashboard_open",
      event_source: g,
      translation_source_language: s.value,
      translation_target_language: a.value
    };
    return g === "suggestion_filter_direct_preselect" && (p.event_context = o.value.id), c(p);
  } };
}, Ep = window.Vue.computed, jV = window.Vuex.useStore, Ee = () => {
  const e = jV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o,
    sectionURLParameter: s
  } = D(), a = Ep(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ), r = Ep(() => s.value === Qn.LEAD_SECTION_DUMMY_TITLE ? s.value : a.value.missingSections[s.value] || a.value.presentSections[s.value] || "");
  return { sectionSuggestion: a, activeSectionTargetTitle: r };
}, HV = window.Vuex.useStore, qV = window.Vue.computed, Wt = () => {
  const e = HV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = D();
  return { currentTranslation: qV(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, Rl = window.Vue.computed, GV = window.Vuex.useStore, ot = () => {
  const e = GV(), { sectionSuggestion: t } = Ee(), { currentTranslation: n } = Wt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = D(), r = Rl(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = Rl(
    () => {
      var u, i;
      return ((u = t.value) == null ? void 0 : u.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    }
  ), c = Rl(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: r, currentTargetPage: c, currentTargetPageTitle: l };
}, yi = window.Vue.computed, WV = window.Vuex.useStore, te = () => {
  const e = WV(), { currentSourcePage: t } = ot(), { currentMTProvider: n } = Be(e), { sectionURLParameter: o } = D(), s = yi(() => {
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
}, zl = window.Vue.computed, pt = () => {
  const { sectionURLParameter: e } = D(), { targetPageExists: t } = rn(), { sourceSection: n } = te(), { sectionSuggestion: o } = Ee(), s = zl(
    () => {
      var l;
      return t.value && !!((l = n.value) != null && l.isLeadSection);
    }
  ), a = zl(
    () => {
      var l;
      return !!((l = n.value) != null && l.isLeadSection) && !t.value;
    }
  );
  return {
    isCurrentSectionPresent: zl(
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
}, XV = window.Vue.ref, xi = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, Ol = XV(null), Vt = () => {
  const { isCurrentSectionPresent: e } = pt(), t = () => {
    e.value ? o(xi.EXPAND) : o(xi.NEW_SECTION);
  }, n = () => {
    Ol.value = null;
  }, o = (s) => {
    if (!Object.values(xi).includes(s))
      throw new Error("[CX] Invalid publishing target used");
    Ol.value = s;
  };
  return {
    target: Ol,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: o,
    PUBLISHING_TARGETS: xi
  };
}, KV = window.Vue.watch, YV = () => {
  const { fetchAllTranslations: e } = cs(), t = Lf(), n = zV(), { fetchPageCollectionGroups: o } = Mu(), { logDashboardOpenEvent: s } = fw(), { applicationLanguagesInitialized: a } = Df(), { clearPublishTarget: r } = Vt();
  return () => x(void 0, null, function* () {
    o(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), KV(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Lp = window.Vue.computed, QV = window.Vue.ref, JV = window.Vue.watch, ZV = window.Vue.watchEffect, eE = window.Vuex.useStore, tE = ["suggestions", "draft", "published"], nE = () => {
  const e = eE(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = D(), { translationsFetched: o } = cs(), s = QV(null);
  if (tE.includes(t.value))
    s.value = t.value;
  else {
    const a = Lp(
      () => o.value.draft
    ), r = Lp(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", JV(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return ZV(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, oE = window.Vue.computed, sE = () => {
  const e = pe();
  return oE(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: uv,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: hr,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: cv,
        type: "text"
      }
    }
  ]);
};
const ke = window.Vue.unref, Ue = window.Vue.createVNode, aE = window.Vue.toDisplayString, iE = window.Vue.createTextVNode, hn = window.Vue.withCtx, jl = window.Vue.openBlock, Tp = window.Vue.createBlock, Ap = window.Vue.createCommentVNode, rE = window.Vue.vShow, lE = window.Vue.withDirectives, cE = window.Vue.isRef, uE = window.Vue.createElementBlock, Dp = window.Vue.computed, dE = window.Vue.inject, gE = window.Vuex.useStore, pE = window.Codex.CdxButton, mE = window.Codex.CdxIcon, hE = {
  __name: "CXDashboard",
  setup(e) {
    const t = nt(), n = $t(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    YV()();
    const a = gE();
    a.dispatch("translator/fetchTranslatorStats");
    const r = Dp(() => a.state.translator.translatorStats), l = nE(), c = sE(), u = hw(), i = (p) => {
      u(p), l.value = p;
    }, d = dE("breakpoints"), g = Dp(() => d.value.mobile);
    return mw.cx.eventlogging.stats.dashboardAccess(g.value), (p, m) => (jl(), uE("div", null, [
      Ue(ke(I), { class: "ma-0 pb-4" }, {
        default: hn(() => [
          Ue(ke(pE), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: hn(() => [
              Ue(ke(mE), {
                class: "me-1",
                icon: ke(_f)
              }, null, 8, ["icon"]),
              iE(" " + aE(p.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Ue(ke(I), {
        class: "ma-0",
        align: "start"
      }, {
        default: hn(() => [
          p.$mwui.breakpoint.tabletAndUp ? (jl(), Tp(ke(C), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: hn(() => [
              Ue(ke(Ca), {
                id: "dashboard-list-selector--desktop",
                items: ke(c),
                active: ke(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Ap("", !0),
          Ue(ke(C), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: hn(() => [
              lE(Ue(oV, null, null, 512), [
                [rE, ke(l) === "suggestions"]
              ]),
              Ue(G$, {
                active: ke(l) === "suggestions"
              }, null, 8, ["active"]),
              Ue(Rg, {
                "translation-status": "draft",
                "active-status": ke(l)
              }, null, 8, ["active-status"]),
              Ue(Rg, {
                "translation-status": "published",
                "active-status": ke(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Ue(ke(C), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: hn(() => [
              Ue(ke(I), {
                class: "ma-0",
                align: "start"
              }, {
                default: hn(() => [
                  Ue(ke(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: hn(() => [
                      Ue(TV, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Ue(ke(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: hn(() => [
                      Ue(fV)
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
      p.$mwui.breakpoint.mobile ? (jl(), Tp(IV, {
        key: 0,
        active: ke(l),
        "onUpdate:active": m[0] || (m[0] = (h) => cE(l) ? l.value = h : null),
        items: ke(c)
      }, null, 8, ["active", "items"])) : Ap("", !0)
    ]));
  }
}, fE = {
  name: "DashboardView",
  components: { CxDashboard: hE }
}, wE = window.Vue.resolveComponent, vE = window.Vue.createVNode, _E = window.Vue.openBlock, SE = window.Vue.createElementBlock, yE = { class: "cx-translation-dashboard" };
function xE(e, t, n, o, s, a) {
  const r = wE("cx-dashboard");
  return _E(), SE("main", yE, [
    vE(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const Pp = /* @__PURE__ */ ge(fE, [["render", xE]]), No = window.Vue.computed, bE = () => {
  const { sectionSuggestion: e } = Ee(), { targetLanguageURLParameter: t } = D(), { currentTranslation: n } = Wt(), o = No(
    () => {
      var g, p, m;
      return (m = (p = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
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
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = rn(), c = No(() => r ? J.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), u = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value >= 1 ? "cx-sx-select-section" : a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : a.value > 0 ? "cx-sx-select-section" : "" : "cx-sx-start-translation-button-label", i = No(() => {
    if (s.value > 1) {
      const g = "cx-sx-existing-translation-additional-info", p = ["$1", s.value - 1];
      return mw.message(g, ...p).parse().replace("$1", `"${o.value}"`);
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
function CE(e) {
  return e.$el = $(e), e;
}
function kE(e, t, n, o) {
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
function $E() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function VE(e, t) {
  return x(this, null, function* () {
    yield Ku(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = CE(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const EE = window.Vue.computed, LE = window.Vue.onMounted, TE = window.Vue.ref;
function AE(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const DE = {
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
    const n = TE(null);
    let o = null;
    const s = EE(
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
    return LE(() => x(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = AE;
      const i = yield VE(c, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = kE(
        i,
        e.content,
        e.language,
        e.dir
      );
      const d = ve.ui.contextItemFactory.lookup("reference");
      d.prototype.getRendering = $E, o.focus();
    })), { sxeditor: n };
  }
}, ur = window.Vue.createElementVNode, PE = window.Vue.openBlock, BE = window.Vue.createElementBlock, FE = ["lang", "dir"], NE = /* @__PURE__ */ ur("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ ur("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ ur("div", { class: "toolbar" })
  ])
], -1), ME = ["lang", "dir"];
function UE(e, t, n, o, s, a) {
  return PE(), BE("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    NE,
    ur("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, ME)
  ], 8, FE);
}
const IE = /* @__PURE__ */ ge(DE, [["render", UE]]);
function Ku() {
  return mw.loader.using("mw.cx3.ve");
}
const RE = window.Vuex.useStore, zE = () => {
  const e = RE();
  return (t, n) => x(void 0, null, function* () {
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
        const a = af.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, OE = window.Vuex.useStore, ww = () => {
  const e = OE();
  return (t, n, o, s = null) => x(void 0, null, function* () {
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
}, Lr = () => {
  const { currentSourcePage: e } = ot(), t = zE(), n = ww(), {
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
      } catch (p) {
        throw mw.cx.eventlogging.stats.sourceArticleFetchFailed(!0), p;
      }
      Ht || (yield t(
        s.value,
        r.value
      ));
    }
    g();
  });
  return {
    selectPageSectionByIndex: (d) => {
      const g = () => {
        var m;
        return (m = e.value.sections) == null ? void 0 : m[d];
      };
      return c(g, () => {
        const m = g();
        d === 0 ? m.originalTitle = e.value.title : o(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (d) => c(() => e.value.getSectionByTitle(d), () => {
      o(d);
    })
  };
}, jE = window.Vuex.useStore, us = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = D(), { activeSectionTargetTitle: a } = Ee(), { target: r } = Vt(), l = jE(), c = nt(), u = () => {
    const p = c.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !l.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return c.getRoutes().find((m) => m.name === p);
  }, i = () => {
    const g = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), p = J.getCurrentWikiLanguageCode();
    if (!g || t.value === p)
      return !1;
    const m = o.value ? { section: o.value } : {}, h = J.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      m
    );
    return location.href = h + "#" + u().path, !0;
  }, d = () => {
    const g = {};
    o.value && (g.sourcesection = o.value, a.value && (g.targetsection = a.value)), r.value && (g.publishtarget = r.value), location.href = J.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      g
    );
  };
  return () => {
    if (J.setCXToken(
      e.value,
      t.value,
      n.value
    ), Ht) {
      d();
      return;
    }
    if (i())
      return;
    const p = u();
    c.push({ name: p.name });
  };
}, Bp = window.Vue.computed, HE = window.Vue.ref, qE = window.Vue.watchEffect, Hl = /* @__PURE__ */ new Map(), GE = (e, t) => x(void 0, null, function* () {
  return (yield de.fetchArticleSections(
    e,
    t
  )).sections.filter(
    (s) => s.level === "2"
  )[0].byteoffset;
}), WE = (e, t) => {
  const n = `${e}:${t}`;
  if (Hl.has(n))
    return Hl.get(n);
  const o = GE(e, t);
  return Hl.set(n, o), o;
}, vw = () => {
  const { currentSourcePage: e } = ot(), { sectionSuggestion: t } = Ee(), { sectionURLParameter: n } = D(), o = HE(null);
  qE(() => x(void 0, null, function* () {
    var r;
    if (t.value && n.value)
      o.value = t.value.getSectionSize(n.value);
    else if (t.value) {
      const { missingSections: l } = t.value;
      o.value = Object.keys(l).reduce(
        (c, u) => c + t.value.getSectionSize(u),
        0
      );
    } else if (e.value && !Ht) {
      const l = e.value.language, c = e.value.title;
      o.value = yield WE(l, c);
    } else
      o.value = ((r = e.value) == null ? void 0 : r.articleSize) || null;
  }));
  const s = Bp(() => o.value ? !t.value && Ht ? pf(o.value) : Pu(o.value) : We.unknown);
  return { isQuickTranslation: Bp(() => s.value === We.stub || s.value === We.easy), difficulty: s, sizeInBytes: o };
}, Yu = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = D(), s = $t(), { difficulty: a } = vw();
  return {
    logDashboardTranslationStartEvent: () => {
      const l = {
        event_type: "dashboard_translation_start",
        event_source: rw.value,
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
  const e = $t(), { currentTranslation: t } = Wt();
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
}, XE = window.Vue.ref, KE = () => {
  const e = nt(), { logDashboardTranslationStartEvent: t } = Yu(), n = Qu(), o = us(), { sectionURLParameter: s } = D(), { targetPageExists: a } = rn(), { selectPageSectionByTitle: r } = Lr(), l = () => x(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), c = XE(!1), { currentTranslation: u } = Wt();
  return {
    handlePrimaryButtonClick: () => {
      u.value ? u.value.isArticleTranslation && !Ht ? c.value = !0 : (n(), o()) : s.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: c
  };
};
const YE = window.Vue.resolveDirective, Fp = window.Vue.createElementVNode, Np = window.Vue.withDirectives, QE = window.Vue.unref, JE = window.Vue.withCtx, ZE = window.Vue.openBlock, e4 = window.Vue.createBlock, t4 = {
  href: "",
  target: "_blank"
}, n4 = window.Codex.CdxDialog, o4 = {
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
    const n = e, o = t, s = (u) => o("update:modelValue", u), a = pe(), r = {
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
      const d = YE("i18n");
      return ZE(), e4(QE(n4), {
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
        default: JE(() => [
          Np(Fp("p", null, null, 512), [
            [d, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Np(Fp("a", t4, null, 512), [
            [d, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
}, s4 = () => {
  const {
    sectionURLParameter: e,
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = D(), s = kr();
  return () => x(void 0, null, function* () {
    const a = yield s(
      t.value,
      n.value,
      o.value
    );
    return a instanceof nn ? a.sourceSections.includes(e.value) : !1;
  });
};
const _e = window.Vue.unref, a4 = window.Vue.resolveDirective, Ms = window.Vue.createElementVNode, Mp = window.Vue.withDirectives, Us = window.Vue.openBlock, ql = window.Vue.createElementBlock, Gl = window.Vue.createCommentVNode, vt = window.Vue.createVNode, Nt = window.Vue.withCtx, Wl = window.Vue.toDisplayString, Xl = window.Vue.createTextVNode, i4 = window.Vue.withModifiers, Up = window.Vue.createBlock, r4 = window.Vue.Fragment, l4 = { class: "sx-translation-confirmer-body pb-4" }, c4 = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, u4 = ["innerHTML"], d4 = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, g4 = ["href"], p4 = ["innerHTML"], Kl = window.Vue.computed, Yl = window.Vue.ref, m4 = window.Vue.watchEffect, h4 = window.Vuex.useStore, Ql = window.Codex.CdxButton, f4 = window.Codex.CdxIcon, w4 = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = nt(), o = h4(), { sectionSuggestion: s } = Ee(), { targetLanguageAutonym: a } = Be(o), { sectionURLParameter: r, clearSectionURLParameter: l } = D(), { logDashboardTranslationStartEvent: c } = Yu(), u = us(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: d } = KE(), g = Yl(!1), p = Yl(null), m = () => x(this, null, function* () {
      let ne = !0;
      try {
        ne = yield Ct.checkUnreviewedTranslations();
      } catch (N) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          N
        );
      }
      ne !== !0 && (g.value = !0, p.value = ne.targetUrl);
    }), h = () => x(this, null, function* () {
      yield m(), !g.value && (c(), u());
    }), f = () => x(this, null, function* () {
      yield m(), !g.value && i();
    }), v = t;
    m4(() => {
      d.value && (v("open-translation-confirmation-dialog"), d.value = !1);
    });
    const {
      actionInformationMessage: w,
      getActionButtonLabel: y,
      isProgressiveButton: b,
      targetArticlePath: S
    } = bE(), k = pe(), V = Kl(
      () => k.i18n(y(!!r.value))
    ), U = () => x(this, null, function* () {
      yield m(), !g.value && n.push({ name: "sx-section-selector" });
    }), L = Kl(() => {
      var ne, N;
      return r.value && !!((N = (ne = s.value) == null ? void 0 : ne.sourceSections) != null && N.length);
    }), { targetPageExists: B } = rn(), z = Kl(() => !r.value && B.value && Ht), X = s4(), le = Yl(!1);
    return X().then((ne) => {
      ne || l(), le.value = !0;
    }), (ne, N) => {
      const R = a4("i18n");
      return Us(), ql(r4, null, [
        Ms("section", l4, [
          _e(r) && le.value ? (Us(), ql("section", c4, [
            Mp(Ms("h6", null, null, 512), [
              [R, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Ms("h5", {
              class: "ma-0",
              innerHTML: _e(r)
            }, null, 8, u4)
          ])) : _e(B) && !_e(r) ? (Us(), ql("section", d4, [
            vt(_e(I), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Nt(() => [
                Mp(vt(_e(C), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [R, [_e(a)], "cx-sx-existing-translation-status"]
                ]),
                vt(_e(C), { shrink: "" }, {
                  default: Nt(() => [
                    Ms("a", {
                      href: _e(S),
                      target: "_blank"
                    }, [
                      vt(_e(f4), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: _e(Ta)
                      }, null, 8, ["icon"])
                    ], 8, g4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            vt(_e(I), { class: "ma-0" }, {
              default: Nt(() => [
                vt(_e(C), null, {
                  default: Nt(() => [
                    Ms("span", { innerHTML: _e(w) }, null, 8, p4)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Gl("", !0),
          vt(_e(I), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Nt(() => [
              L.value ? (Us(), Up(_e(C), {
                key: 0,
                shrink: ""
              }, {
                default: Nt(() => [
                  vt(_e(Ql), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: i4(U, ["stop"])
                  }, {
                    default: Nt(() => [
                      Xl(Wl(ne.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Gl("", !0),
              z.value ? (Us(), Up(_e(C), {
                key: 1,
                shrink: ""
              }, {
                default: Nt(() => [
                  vt(_e(Ql), {
                    size: "large",
                    onClick: h
                  }, {
                    default: Nt(() => [
                      Xl(Wl(ne.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Gl("", !0),
              vt(_e(C), { shrink: "" }, {
                default: Nt(() => [
                  vt(_e(Ql), {
                    weight: "primary",
                    size: "large",
                    action: _e(b) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: Nt(() => [
                      Xl(Wl(V.value), 1)
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
        vt(o4, {
          modelValue: g.value,
          "onUpdate:modelValue": N[0] || (N[0] = (q) => g.value = q),
          "target-url": p.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Jl = window.Vue.unref, v4 = window.Vue.openBlock, _4 = window.Vue.createBlock, S4 = window.Vue.computed, _w = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedLanguageCodes: t } = Va(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = D(), { currentLanguageTitleGroup: s } = rn(), a = S4(
      () => {
        var u;
        return ((u = s.value) == null ? void 0 : u.titles.map((i) => i.lang)) || [];
      }
    ), r = Ex(), l = (u) => r(u, o.value), c = (u) => r(n.value, u);
    return (u, i) => (v4(), _4(pr, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": Jl(t),
      "selected-source-language": Jl(n),
      "selected-target-language": Jl(o),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": c
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, y4 = (e) => {
  const s = e / 5 / 15;
  return Math.ceil(s);
};
const Ne = window.Vue.unref, Zl = window.Vue.toDisplayString, Mn = window.Vue.createElementVNode, Yt = window.Vue.createVNode, Mo = window.Vue.withCtx, x4 = window.Vue.resolveDirective, b4 = window.Vue.withDirectives, C4 = window.Vue.normalizeClass, Ip = window.Vue.openBlock, k4 = window.Vue.createElementBlock, $4 = window.Vue.createCommentVNode, V4 = window.Vue.createBlock, E4 = ["textContent"], L4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, T4 = ["textContent"], A4 = { class: "pe-3" }, D4 = ["textContent"], P4 = window.Codex.CdxButton, Is = window.Codex.CdxIcon, Un = window.Vue.computed, B4 = window.Vuex.useStore, F4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = B4(), { currentSourcePage: n } = ot(), { sectionSuggestion: o } = Ee(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l
    } = D(), c = Un(() => t.state.suggestions.favorites || []), u = Un(
      () => c.value.some(
        (U) => r.value === U.title && s.value === U.sourceLanguage && a.value === U.targetLanguage
      )
    ), { markFavoriteSuggestion: i, removeFavoriteSuggestion: d } = Xu(), g = () => i(
      r.value,
      s.value,
      a.value
    ), p = () => d(
      new es({
        title: r.value,
        sourceLanguage: s.value,
        targetLanguage: a.value
      })
    ), m = Un(
      () => u.value ? xf : bf
    ), h = Un(
      () => u.value ? p : g
    ), f = Un(
      () => J.getPageUrl(s.value || "", r.value || "")
    ), v = Un(
      () => {
        var U;
        return (((U = n.value) == null ? void 0 : U.langLinksCount) || 0) + 1;
      }
    ), w = (U) => {
      const L = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let B = 0; B < L.length; B++)
        if (U >= L[B].value)
          return (U / L[B].value).toFixed(1).replace(/\.0$/, "") + L[B].suffix;
      return U.toString();
    }, y = Un(() => {
      var L;
      const U = Object.values(((L = n.value) == null ? void 0 : L.pageviews) || {}).reduce(
        (B, z) => B + z,
        0
      );
      return w(U);
    }), { isQuickTranslation: b, sizeInBytes: S } = vw(), k = pe(), V = Un(() => {
      if (!o.value && !n.value || !S.value)
        return "";
      const U = y4(S.value), L = U >= 60 ? U / 60 : 0, B = Math.round(L * 2) / 2;
      if (!o.value && Ht)
        return k.i18n(
          "cx-sx-translation-confirmer-translation-time-whole-article",
          B,
          U
        );
      if (o.value) {
        if (l.value)
          return k.i18n(
            "cx-sx-translation-confirmer-translation-time-single-section",
            B,
            U
          );
      } else
        return k.i18n(
          "cx-sx-translation-confirmer-translation-time-lead-section",
          B,
          U
        );
      return k.i18n(
        "cx-sx-translation-confirmer-translation-time-sections",
        B,
        U,
        Object.keys(o.value.missingSections).length
      );
    });
    return (U, L) => {
      const B = x4("i18n");
      return Ip(), V4(Ne(I), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: Mo(() => [
          Yt(Ne(C), null, {
            default: Mo(() => [
              Yt(Ne(I), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: Mo(() => [
                  Yt(Ne(C), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: Mo(() => [
                      Mn("h5", {
                        class: "ma-0 me-1",
                        textContent: Zl(Ne(r))
                      }, null, 8, E4),
                      Yt(Ne(Is), {
                        size: "x-small",
                        icon: Ne(Ta)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Yt(Ne(C), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Mo(() => [
                      Yt(Ne(P4), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": U.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: Mo(() => [
                          Yt(Ne(Is), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Mn("div", L4, [
                Mn("div", null, [
                  Mn("span", null, [
                    Yt(Ne(Is), {
                      icon: Ne(kf),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Mn("span", {
                      class: "pe-3",
                      textContent: Zl(v.value)
                    }, null, 8, T4)
                  ]),
                  Mn("span", null, [
                    Yt(Ne(Is), {
                      icon: Ne(Cf),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    b4(Mn("span", A4, null, 512), [
                      [B, [y.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                V.value ? (Ip(), k4("span", {
                  key: 0,
                  class: C4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Ne(b)
                  }])
                }, [
                  Yt(Ne(Is), {
                    icon: Ne(Qy),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Mn("span", {
                    textContent: Zl(V.value)
                  }, null, 8, D4)
                ], 2)) : $4("", !0)
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
const N4 = window.Vue.resolveDirective, co = window.Vue.createElementVNode, bi = window.Vue.withDirectives, M4 = window.Vue.toDisplayString, U4 = window.Vue.createTextVNode, ec = window.Vue.unref, tc = window.Vue.withCtx, nc = window.Vue.openBlock, oc = window.Vue.createBlock;
window.Vue.createCommentVNode;
const I4 = { class: "pa-4" }, R4 = { class: "flex pt-2" }, z4 = window.Codex.CdxButton, O4 = window.Vue.ref, j4 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = us(), a = Qu(), r = O4(!1), { currentTranslation: l } = Wt(), c = () => x(this, null, function* () {
      r.value = !0;
      let u = !1;
      try {
        u = yield Ct.splitTranslation(
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
      const d = N4("i18n");
      return nc(), oc(ec(kt), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: tc(() => [
          co("div", R4, [
            r.value ? (nc(), oc(ec(dt), { key: 1 })) : (nc(), oc(ec(z4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: tc(() => [
                U4(M4(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: tc(() => [
          co("div", I4, [
            bi(co("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            bi(co("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            co("p", null, [
              bi(co("strong", null, null, 512), [
                [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            bi(co("p", null, null, 512), [
              [d, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, H4 = window.Vuex.useStore;
let Ci = [];
const Ju = () => {
  const e = H4();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || Ci.includes(o) ? Promise.resolve() : (Ci.push(o), So.fetchLanguageTitles(t, n).then((s) => {
      Ci = Ci.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, q4 = window.Vue.ref, Uo = q4(null), Sw = () => {
  const e = () => x(void 0, null, function* () {
    var n, o;
    Uo.value || (yield xr.fetchCXServerToken().then((s) => {
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
const Rp = window.Vue.resolveDirective, ki = window.Vue.createElementVNode, zp = window.Vue.withDirectives, In = window.Vue.unref, $i = window.Vue.withCtx, fn = window.Vue.createVNode, sc = window.Vue.openBlock, Op = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const G4 = window.Vue.createBlock, W4 = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, X4 = { class: "mb-0" }, K4 = { class: "sx-translation-confirmer__article-image flex justify-center" }, Y4 = ["src"], Q4 = { class: "ma-3" }, jp = window.Vue.computed, J4 = window.Vue.inject, Z4 = window.Vue.onBeforeUnmount, e3 = window.Vue.ref, t3 = window.Vuex.useStore, n3 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = t3(), { currentSourcePage: n } = ot(), { previousRoute: o } = Be(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: c
    } = D(), u = J4("breakpoints"), i = jp(() => u.value.nextBreakpoint), d = jp(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: g } = cs(), p = Ju();
    g("draft"), p(s.value, r.value), Ku(), Sw()(), Ef()(a.value);
    const f = nt(), v = () => {
      const y = ["dashboard", "sx-article-search"];
      !o.value || !y.includes(o.value) ? f.push({ name: "dashboard" }) : f.push({ name: o.value });
    };
    Z4(() => {
      const y = f.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && c();
    });
    const w = e3(!1);
    return (y, b) => {
      const S = Rp("i18n"), k = Rp("i18n-html");
      return sc(), Op("section", W4, [
        fn(In(I), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: $i(() => [
            fn(In(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: $i(() => [
                zp(ki("h5", X4, null, 512), [
                  [S, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            fn(In(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: $i(() => [
                fn(In(Xe), {
                  class: "pa-0",
                  type: "icon",
                  icon: In(fr),
                  "icon-size": 20,
                  onClick: v
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ki("div", K4, [
          d.value ? (sc(), Op("img", {
            key: 0,
            src: d.value
          }, null, 8, Y4)) : (sc(), G4(In(et), {
            key: 1,
            size: "120",
            icon: In(zh),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        fn(F4),
        fn(_w),
        fn(w4, {
          onOpenTranslationConfirmationDialog: b[0] || (b[0] = (V) => w.value = !0)
        }),
        fn(In(I), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: $i(() => [
            ki("p", Q4, [
              zp(ki("small", null, null, 512), [
                [k, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        fn(j4, {
          modelValue: w.value,
          "onUpdate:modelValue": b[1] || (b[1] = (V) => w.value = V)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const o3 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: n3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, s3 = window.Vue.resolveComponent, a3 = window.Vue.createVNode, i3 = window.Vue.normalizeClass, r3 = window.Vue.openBlock, l3 = window.Vue.createElementBlock;
function c3(e, t, n, o, s, a) {
  const r = s3("sx-translation-confirmer");
  return r3(), l3("main", {
    class: i3(["sx-translation-confirmer-view", a.classes])
  }, [
    a3(r)
  ], 2);
}
const u3 = /* @__PURE__ */ ge(o3, [["render", c3]]);
const d3 = window.Vue.toDisplayString, Hp = window.Vue.unref, g3 = window.Vue.createVNode, p3 = window.Vue.createTextVNode, m3 = window.Vue.createElementVNode, h3 = window.Vue.openBlock, f3 = window.Vue.createElementBlock, w3 = { class: "sx-section-selector-view-article-item" }, v3 = ["href"], _3 = window.Codex.CdxIcon, qp = {
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
    return (t, n) => (h3(), f3("span", w3, [
      m3("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        p3(d3(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        g3(Hp(_3), {
          size: "x-small",
          icon: Hp(Ta)
        }, null, 8, ["icon"])
      ], 8, v3)
    ]));
  }
};
const S3 = window.Vue.resolveDirective, Vi = window.Vue.createElementVNode, ac = window.Vue.withDirectives, uo = window.Vue.unref, y3 = window.Vue.toDisplayString, Ei = window.Vue.withCtx, Rs = window.Vue.createVNode, x3 = window.Vue.openBlock, b3 = window.Vue.createElementBlock, C3 = { class: "sx-section-selector__header pa-4" }, k3 = { class: "sx-section-selector__header-text ma-0" }, $3 = ["textContent"], V3 = { class: "pt-0 ma-0" }, E3 = { class: "ma-0" }, L3 = window.Codex.CdxButton, T3 = window.Codex.CdxIcon, A3 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Ee();
    return (n, o) => {
      const s = S3("i18n");
      return x3(), b3("div", C3, [
        Rs(uo(I), { class: "ma-0 pb-3" }, {
          default: Ei(() => [
            Rs(uo(C), null, {
              default: Ei(() => {
                var a;
                return [
                  ac(Vi("h6", k3, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  Vi("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: y3((a = uo(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, $3)
                ];
              }),
              _: 1
            }),
            Rs(uo(C), {
              shrink: "",
              class: "justify-end"
            }, {
              default: Ei(() => [
                Rs(uo(L3), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: Ei(() => [
                    Rs(uo(T3), { icon: uo(rs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ac(Vi("h4", V3, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        ac(Vi("p", E3, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, Gp = window.Vue.renderSlot, D3 = window.Vue.renderList, P3 = window.Vue.Fragment, ic = window.Vue.openBlock, Wp = window.Vue.createElementBlock, Li = window.Vue.unref, Xp = window.Vue.createVNode, Kp = window.Vue.withCtx, B3 = window.Vue.createBlock, F3 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, N3 = window.Codex.CdxButton, M3 = window.Codex.CdxIcon, yw = {
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
    return (t, n) => (ic(), Wp("ul", F3, [
      Gp(t.$slots, "before-list"),
      (ic(!0), Wp(P3, null, D3(e.sections, (o) => (ic(), B3(Li(I), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Kp(() => [
          Xp(Li(N3), {
            weight: "quiet",
            class: "col justify-start items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: Kp(() => [
              Gp(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle,
                isEasy: o.isEasy
              }),
              Xp(Li(M3), {
                icon: Li(ls),
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
}, U3 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const I3 = window.Vue.resolveDirective, Ti = window.Vue.createElementVNode, Ai = window.Vue.withDirectives, Mt = window.Vue.unref, Di = window.Vue.openBlock, rc = window.Vue.createBlock, R3 = window.Vue.createCommentVNode, Io = window.Vue.withCtx, zs = window.Vue.createVNode, z3 = window.Vue.toDisplayString, O3 = window.Vue.createTextVNode, j3 = window.Vue.createElementBlock, H3 = { class: "sx-section-selector__missing-sections py-2" }, q3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, G3 = ["lang", "dir", "innerHTML"], lc = window.Vue.computed, W3 = window.Codex.CdxButton, X3 = window.Codex.CdxInfoChip, K3 = {
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
      return (r = t.value) != null && r.orderedMissingSections ? t.value.orderedMissingSections.map((l) => Ye(ce({}, l), {
        isEasy: mf(
          t.value.getSectionSize(l.sourceTitle)
        )
      })) : [];
    });
    return (r, l) => {
      const c = I3("i18n");
      return Di(), j3("section", H3, [
        Ai(Ti("h4", q3, null, 512), [
          [c, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (Di(), rc(Mt(I), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Io(() => [
            zs(Mt(C), {
              class: "py-6 justify-center",
              innerHTML: Mt(U3)
            }, null, 8, ["innerHTML"]),
            zs(Mt(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Io(() => [
                Ai(Ti("h6", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            zs(Mt(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Io(() => [
                Ai(Ti("p", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            zs(Mt(C), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Io(() => [
                zs(Mt(W3), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: l[1] || (l[1] = (u) => r.$emit("close"))
                }, {
                  default: Io(() => [
                    O3(z3(r.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (Di(), rc(yw, {
          key: 0,
          sections: a.value,
          onSelectSection: l[0] || (l[0] = (u) => r.$emit("select-section", u))
        }, {
          default: Io(({ sourceSection: u, isEasy: i }) => {
            var d, g;
            return [
              Ti("h5", {
                class: "ma-0",
                lang: (d = Mt(t)) == null ? void 0 : d.sourceLanguage,
                dir: Mt(O.getDir)((g = Mt(t)) == null ? void 0 : g.sourceLanguage),
                innerHTML: u
              }, null, 8, G3),
              i ? Ai((Di(), rc(Mt(X3), {
                key: 0,
                class: "sx-section-selector__easy-section-badge"
              }, null, 512)), [
                [c, void 0, "cx-sx-section-selector-easy-section-badge"]
              ]) : R3("", !0)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const Y3 = window.Vue.resolveDirective, Ro = window.Vue.createElementVNode, Q3 = window.Vue.withDirectives, _t = window.Vue.unref, J3 = window.Vue.toDisplayString, Pi = window.Vue.createVNode, Bi = window.Vue.withCtx, Z3 = window.Vue.openBlock, eL = window.Vue.createElementBlock, tL = { class: "sx-section-selector__present-sections py-2" }, nL = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, oL = { class: "sx-section-selector__present-section-button-content" }, sL = ["textContent"], aL = { class: "sx-section-selector__present-section-button-content" }, iL = ["lang", "dir", "innerHTML"], rL = ["lang", "dir", "innerHTML"], lL = window.Vue.computed, cL = window.Codex.CdxButton, uL = window.Codex.CdxIcon, Yp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Ee(), { targetLanguageURLParameter: n } = D(), o = lL(() => O.getAutonym(n.value));
    return (s, a) => {
      var l;
      const r = Y3("i18n");
      return Z3(), eL("section", tL, [
        Q3(Ro("h4", nL, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        Pi(yw, {
          sections: ((l = _t(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[1] || (a[1] = (c) => s.$emit("select-section", c))
        }, {
          "before-list": Bi(() => [
            Pi(_t(I), {
              tag: "li",
              class: "ma-0"
            }, {
              default: Bi(() => [
                Pi(_t(cL), {
                  weight: "quiet",
                  class: "col justify-start items-center py-3 px-4",
                  "aria-label": s.$i18n("sx-section-selector-next-button-aria-label"),
                  onClick: a[0] || (a[0] = (c) => s.$emit("select-section", _t(Qn).LEAD_SECTION_DUMMY_TITLE))
                }, {
                  default: Bi(() => [
                    Ro("div", oL, [
                      Ro("h5", {
                        class: "sx-section-selector__present-section-button-source",
                        textContent: J3(s.$i18n("cx-sx-present-lead-section-label"))
                      }, null, 8, sL)
                    ]),
                    Pi(_t(uL), {
                      icon: _t(ls),
                      class: "ms-auto"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          default: Bi(({ sourceSection: c, targetSection: u }) => {
            var i, d, g, p;
            return [
              Ro("div", aL, [
                Ro("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = _t(t)) == null ? void 0 : i.sourceLanguage,
                  dir: _t(O.getDir)((d = _t(t)) == null ? void 0 : d.sourceLanguage),
                  innerHTML: c
                }, null, 8, iL),
                Ro("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = _t(t)) == null ? void 0 : g.targetLanguage,
                  dir: _t(O.getDir)((p = _t(t)) == null ? void 0 : p.targetLanguage),
                  innerHTML: u
                }, null, 8, rL)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Ie = window.Vue.createVNode, cc = window.Vue.openBlock, Qp = window.Vue.createBlock, Jp = window.Vue.createCommentVNode, dL = window.Vue.resolveDirective, Rn = window.Vue.createElementVNode, Os = window.Vue.withDirectives, at = window.Vue.unref, wn = window.Vue.withCtx, gL = window.Vue.normalizeClass, Zp = window.Vue.toDisplayString, em = window.Vue.createTextVNode, pL = window.Vue.createElementBlock, mL = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, hL = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, fL = { class: "sx-section-selector__additional-consideration-title" }, wL = { href: "#" }, vL = { class: "sx-section-selector__additional-consideration-title" }, _L = { href: "#" }, js = window.Vue.computed, SL = window.Vue.inject, yL = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = SL("breakpoints"), n = js(() => t.value.desktopAndUp), { sectionSuggestion: o } = Ee(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = D(), c = js(() => O.getAutonym(s.value)), u = js(() => O.getAutonym(a.value)), i = js(
      () => {
        var y;
        return J.getPageUrl(s.value, (y = o.value) == null ? void 0 : y.sourceTitle);
      }
    ), d = js(
      () => {
        var y;
        return J.getPageUrl(a.value, (y = o.value) == null ? void 0 : y.targetTitle);
      }
    ), g = nt(), p = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = Wt(), h = us(), f = Qu(), { selectPageSectionByTitle: v } = Lr(), w = (y) => {
      l(y), m.value ? (f(), h()) : (v(y), g.push({ name: "sx-content-comparator" }));
    };
    return mw.cx.eventlogging.stats.selectSectionAccess(!n.value), (y, b) => {
      const S = dL("i18n");
      return cc(), pL("section", mL, [
        Ie(A3, { onClose: p }),
        Ie(_w),
        Ie(at(I), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: wn(() => [
            Ie(at(C), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: wn(() => [
                Ie(K3, {
                  onSelectSection: w,
                  onClose: p
                }),
                n.value ? Jp("", !0) : (cc(), Qp(Yp, {
                  key: 0,
                  onSelectSection: w
                })),
                Rn("section", {
                  class: gL(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Os(Rn("h4", hL, null, 512), [
                    [S, [
                      u.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Ie(at(I), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: wn(() => [
                      Ie(at(C), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: wn(() => [
                          Ie(qp, {
                            path: i.value,
                            autonym: c.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Ie(at(C), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: wn(() => [
                          Ie(qp, {
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
                Ie(at(I), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: wn(() => [
                    Ie(at(C), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: wn(() => [
                        Rn("h6", fL, [
                          Ie(at(et), {
                            icon: at(vv),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          em(" " + Zp(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Os(Rn("p", null, null, 512), [
                          [S, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Os(Rn("a", wL, null, 512), [
                          [S, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Ie(at(C), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: wn(() => [
                        Rn("h6", vL, [
                          Ie(at(et), {
                            icon: at(wv),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          em(" " + Zp(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Os(Rn("p", null, null, 512), [
                          [S, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Os(Rn("a", _L, null, 512), [
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
            n.value ? (cc(), Qp(at(C), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: wn(() => [
                Ie(Yp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: w
                })
              ]),
              _: 1
            })) : Jp("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, xL = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: yL
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, bL = window.Vue.resolveComponent, CL = window.Vue.createVNode, kL = window.Vue.normalizeClass, $L = window.Vue.openBlock, VL = window.Vue.createElementBlock;
function EL(e, t, n, o, s, a) {
  const r = bL("sx-section-selector");
  return $L(), VL("main", {
    class: kL(["sx-section-selector-view", a.classes])
  }, [
    CL(r)
  ], 2);
}
const LL = /* @__PURE__ */ ge(xL, [["render", EL]]), Fi = window.Vue.computed, TL = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = D(), n = Fi(
    () => O.getAutonym(e.value)
  ), o = Fi(
    () => O.getAutonym(t.value)
  ), { target: s, PUBLISHING_TARGETS: a } = Vt(), r = Fi(
    () => s.value === a.EXPAND
  ), l = pe();
  return Fi(() => {
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
const tm = window.Vue.unref, AL = window.Vue.createVNode, DL = window.Vue.openBlock, PL = window.Vue.createElementBlock, BL = { class: "sx-content-comparator__content-type-selector" }, FL = window.Vue.watchEffect, NL = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = TL();
    return FL(() => {
      a.value.map((l) => l.value).includes(n.selection) || s(a.value[0].value);
    }), (r, l) => (DL(), PL("div", BL, [
      AL(tm(Ca), {
        items: tm(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Ni = window.Vue.computed, xw = () => {
  const { currentTargetPage: e } = ot(), { activeSectionTargetTitle: t } = Ee(), n = Ni(
    () => {
      var l;
      return (((l = o.value) == null ? void 0 : l.title) || "").replace(/ /g, "_");
    }
  ), o = Ni(
    () => {
      var l;
      return (l = e.value) == null ? void 0 : l.getSectionByTitle(t.value);
    }
  ), { sourceSection: s } = te(), a = Ni(() => {
    var l;
    return (l = s.value) == null ? void 0 : l.html;
  }), r = Ni(() => {
    var l;
    return (l = o.value) == null ? void 0 : l.html;
  });
  return {
    sourceSectionContent: a,
    targetSectionAnchor: n,
    targetSectionContent: r
  };
};
const Mi = window.Vue.createVNode, vn = window.Vue.unref, ML = window.Vue.resolveDirective, UL = window.Vue.withDirectives, Hs = window.Vue.openBlock, nm = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ui = window.Vue.withCtx, uc = window.Vue.createBlock, IL = window.Vue.normalizeClass, RL = {
  key: 0,
  class: "ma-0 pa-0"
}, zL = ["lang", "dir", "innerHTML"], om = window.Vue.ref, Ii = window.Vue.computed, OL = window.Vue.onMounted, jL = {
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
    const n = e, o = t, s = om(!1), { sectionSuggestion: a, activeSectionTargetTitle: r } = Ee(), { isPresentLeadSection: l } = pt(), { sectionURLParameter: c } = D(), u = Ii(
      () => (g.value || "").replace(/ /g, "_")
    ), i = (f) => o("update:contentTypeSelection", f), { targetSectionAnchor: d } = xw(), g = Ii(
      () => {
        var f;
        return (((f = a.value) == null ? void 0 : f.sourceSections) || []).find(
          (v) => v === c.value
        );
      }
    ), p = Ii(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: g.value,
            path: `${J.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${u.value}`,
            lang: a.value.sourceLanguage,
            dir: O.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: m.value,
            lang: a.value.targetLanguage,
            dir: O.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: r.value,
            path: `${m.value}#${d.value}`
          };
      }
    }), m = Ii(
      () => J.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), h = om(null);
    return OL(() => {
      new IntersectionObserver(
        ([v]) => {
          s.value = v.intersectionRect.height < v.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(h.value.$el);
    }), (f, v) => {
      const w = ML("i18n");
      return Hs(), uc(vn(I), {
        ref_key: "contentHeader",
        ref: h,
        class: IL(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
        direction: "column",
        align: "stretch",
        reverse: s.value
      }, {
        default: Ui(() => [
          Mi(NL, {
            selection: e.contentTypeSelection,
            "onUpdate:selection": i
          }, null, 8, ["selection"]),
          Mi(vn(I), {
            justify: "between",
            class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
          }, {
            default: Ui(() => [
              Mi(vn(C), null, {
                default: Ui(() => [
                  vn(l) ? UL((Hs(), nm("h3", RL, null, 512)), [
                    [w, void 0, "cx-sx-present-lead-section-label"]
                  ]) : (Hs(), nm("h3", {
                    key: 1,
                    lang: p.value.lang,
                    dir: p.value.dir,
                    class: "ma-0 pa-0",
                    innerHTML: p.value.title
                  }, null, 8, zL))
                ]),
                _: 1
              }),
              Mi(vn(C), { shrink: "" }, {
                default: Ui(() => [
                  s.value ? (Hs(), uc(vn(Xe), {
                    key: 0,
                    icon: vn(hr),
                    progressive: "",
                    label: f.$i18n(
                      "cx-sx-content-comparator-content-header-translate-button-label"
                    ),
                    onClick: v[0] || (v[0] = (y) => f.$emit("translation-button-clicked"))
                  }, null, 8, ["icon", "label"])) : (Hs(), uc(vn(Xe), {
                    key: 1,
                    class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                    icon: vn(Rh),
                    type: "icon",
                    href: p.value.path,
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
}, Ri = window.Vue.unref, sm = window.Vue.createVNode, HL = window.Vue.openBlock, qL = window.Vue.createElementBlock, GL = { class: "sx-content-comparator__header-navigation flex items-center" }, WL = window.Vue.computed, XL = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = D(), o = WL(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Lr(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      s(c);
    };
    return (l, c) => (HL(), qL("div", GL, [
      sm(Ri(Xe), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Ri(pv),
        onClick: a
      }, null, 8, ["icon"]),
      sm(Ri(Xe), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Ri(gv),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const am = window.Vue.toDisplayString, fe = window.Vue.unref, KL = window.Vue.resolveDirective, zi = window.Vue.withDirectives, _n = window.Vue.openBlock, zo = window.Vue.createElementBlock, dc = window.Vue.createCommentVNode, YL = window.Vue.createTextVNode, QL = window.Vue.createElementVNode, JL = window.Vue.normalizeClass, gc = window.Vue.withCtx, im = window.Vue.createVNode, pc = window.Vue.createBlock, ZL = { class: "sx-content-comparator-header__mapped-section" }, e5 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, t5 = { key: 0 }, n5 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, o5 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, s5 = {
  key: 2,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, a5 = window.Vue.computed, i5 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = D(), { activeSectionTargetTitle: n } = Ee(), o = pe(), { target: s, PUBLISHING_TARGETS: a, setTarget: r } = Vt(), l = a5(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        O.getAutonym(t.value)
      )
    ), { isPresentLeadSection: c } = pt();
    return (u, i) => {
      const d = KL("i18n");
      return _n(), zo("div", ZL, [
        im(fe(I), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: gc(() => [
            im(fe(C), { grow: "" }, {
              default: gc(() => [
                QL("h6", e5, [
                  YL(am(l.value) + " ", 1),
                  fe(s) === fe(a).NEW_SECTION ? zi((_n(), zo("span", t5, null, 512)), [
                    [d, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : dc("", !0)
                ]),
                fe(c) ? dc("", !0) : (_n(), zo("h6", {
                  key: 0,
                  class: JL(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": fe(s) === fe(a).NEW_SECTION
                  }])
                }, am(fe(n)), 3))
              ]),
              _: 1
            }),
            fe(c) ? dc("", !0) : (_n(), pc(fe(C), {
              key: 0,
              shrink: ""
            }, {
              default: gc(() => [
                fe(s) === fe(a).EXPAND ? (_n(), pc(fe(Xe), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: fe(Ih),
                  type: "icon",
                  onClick: i[0] || (i[0] = (g) => fe(r)(fe(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (_n(), pc(fe(Xe), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: fe(yv),
                  type: "icon",
                  onClick: i[1] || (i[1] = (g) => fe(r)(fe(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            }))
          ]),
          _: 1
        }),
        fe(c) ? zi((_n(), zo("p", n5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-lead-section-clarifications"]
        ]) : fe(s) === fe(a).EXPAND ? zi((_n(), zo("p", o5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : zi((_n(), zo("p", s5, null, 512)), [
          [d, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const Ae = window.Vue.unref, Oo = window.Vue.createVNode, r5 = window.Vue.toDisplayString, Xn = window.Vue.createElementVNode, l5 = window.Vue.resolveDirective, mc = window.Vue.withDirectives, qs = window.Vue.openBlock, hc = window.Vue.createElementBlock, rm = window.Vue.createCommentVNode, fc = window.Vue.withCtx, lm = window.Vue.createBlock, c5 = { class: "sx-content-comparator__header pa-4" }, u5 = { class: "row my-1 py-2 mx-0 gap-6" }, d5 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, g5 = { class: "sx-content-comparator-header__titles shrink" }, p5 = ["lang", "dir"], m5 = {
  key: 0,
  class: "sx-content-comparator-header__section-title pa-0 ma-0"
}, h5 = ["lang", "dir", "innerHTML"], f5 = { class: "py-2 mb-1" }, w5 = /* @__PURE__ */ Xn("br", null, null, -1), Oi = window.Vue.computed, v5 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = D(), { sourceSection: n } = te(), { sectionSuggestion: o } = Ee(), { isCurrentSectionPresent: s } = pt(), a = Oi(
      () => {
        var u;
        return (u = o.value) == null ? void 0 : u.missingSections.hasOwnProperty(t.value);
      }
    ), r = Oi(() => {
      var u;
      return (u = n.value) == null ? void 0 : u.html;
    }), l = Oi(() => [
      Qn.LEAD_SECTION_DUMMY_TITLE,
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), c = Oi(
      () => {
        var u;
        return (((u = o.value) == null ? void 0 : u.sourceSections) || []).find(
          (i) => i === t.value
        );
      }
    );
    return (u, i) => {
      var g;
      const d = l5("i18n");
      return qs(), hc("div", c5, [
        Oo(Ae(Xe), {
          class: "py-2 pa-0",
          icon: Ae(mv),
          label: u.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (p) => u.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Xn("div", u5, [
          Xn("div", d5, [
            Xn("div", g5, [
              Xn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Ae(o).sourceLanguage,
                dir: Ae(O.getDir)(Ae(o).sourceLanguage)
              }, r5(Ae(o).sourceTitle), 9, p5),
              (g = Ae(n)) != null && g.isLeadSection ? mc((qs(), hc("h2", m5, null, 512)), [
                [d, void 0, "cx-sx-present-lead-section-label"]
              ]) : (qs(), hc("h2", {
                key: 1,
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Ae(o).sourceLanguage,
                dir: Ae(O.getDir)(Ae(o).sourceLanguage),
                innerHTML: c.value
              }, null, 8, h5))
            ]),
            Oo(XL, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          Xn("div", f5, [
            Oo(Ae(Xe), {
              class: "sx-content-comparator-header__translation-button",
              icon: Ae(hr),
              progressive: "",
              label: u.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (p) => u.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (qs(), lm(Ae(I), {
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
                Oo(Ae(et), { icon: Ae(_v) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Oo(Ae(C), { class: "ma-0" }, {
              default: fc(() => [
                mc(Xn("strong", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                w5,
                mc(Xn("span", null, null, 512), [
                  [d, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : rm("", !0),
        Ae(s) ? (qs(), lm(i5, { key: 1 })) : rm("", !0)
      ]);
    };
  }
};
const cm = window.Vue.toDisplayString, _5 = window.Vue.createElementVNode, um = window.Vue.openBlock, dm = window.Vue.createElementBlock, S5 = window.Vue.createCommentVNode, y5 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, x5 = ["textContent"], b5 = ["textContent"], bw = {
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
    return (t, n) => (um(), dm("section", y5, [
      _5("h5", {
        textContent: cm(e.placeholderTitle)
      }, null, 8, x5),
      e.placeholderSubtitle ? (um(), dm("p", {
        key: 0,
        textContent: cm(e.placeholderSubtitle)
      }, null, 8, b5)) : S5("", !0)
    ]));
  }
}, C5 = (e, t, n) => {
  const o = t.indexOf(e);
  return t.slice(o + 1).map((a) => n[a]).filter(Boolean)[0] || null;
}, k5 = ({
  sourceSectionTitle: e,
  sourceSectionTitles: t,
  targetSectionTitles: n,
  presentSectionMappings: o,
  targetAppendixSectionTitles: s
}) => {
  const a = C5(
    e,
    t,
    o
  );
  return a !== null ? a : n.find(
    (l) => s.includes(l)
  ) || null;
}, wc = window.Vue.computed, $5 = window.Vue.createApp, V5 = window.Vuex.useStore, E5 = () => {
  const e = V5(), { sectionSuggestion: t } = Ee(), { currentTargetPage: n } = ot(), { sectionURLParameter: o } = D(), s = pe(), a = () => $5(
    bw,
    {
      placeholderTitle: s.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, r = wc(() => {
    const { appendixSectionTitles: u } = e.state.suggestions;
    return u[t.value.targetLanguage] || [];
  }), l = wc(
    () => k5({
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
        (p) => p.textContent.match(l.value)
      );
      if (g && g.length) {
        const p = g[0].parentNode;
        p.parentNode.insertBefore(
          i,
          p
        );
      }
    } else
      u.appendChild(i);
    return u.innerHTML;
  });
};
const vc = window.Vue.createVNode, it = window.Vue.unref, jo = window.Vue.openBlock, gm = window.Vue.createBlock, pm = window.Vue.createCommentVNode, ji = window.Vue.createElementVNode, _c = window.Vue.Fragment, Hi = window.Vue.createElementBlock, L5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, T5 = { class: "sx-content-comparator__source-content" }, A5 = ["lang", "dir", "innerHTML"], D5 = ["lang", "dir", "innerHTML"], P5 = ["innerHTML"], B5 = window.Vue.ref, mm = window.Vue.computed, hm = window.Vue.watch, F5 = window.Vue.inject, N5 = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = Vt(), n = nt(), o = B5("source_section"), { logDashboardTranslationStartEvent: s } = Yu(), a = us(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      s(), a();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = D(), { sourceSectionContent: i, targetSectionContent: d } = xw(), g = E5(), { sectionSuggestion: p } = Ee(), { isCurrentSectionPresent: m } = pt(), h = mm(() => p.value.targetTitle), f = ww();
    hm(
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
    ), hm(m, t, { immediate: !0 });
    const v = F5("breakpoints"), w = mm(() => v.value.mobile);
    return mw.cx.eventlogging.stats.sectionCompareAccess(w.value), (y, b) => (jo(), Hi("section", L5, [
      vc(v5, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      vc(jL, {
        "content-type-selection": o.value,
        "onUpdate:contentTypeSelection": b[0] || (b[0] = (S) => o.value = S),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      ji("section", T5, [
        o.value === "source_section" ? (jo(), Hi(_c, { key: 0 }, [
          it(i) ? pm("", !0) : (jo(), gm(it(dt), { key: 0 })),
          ji("section", {
            lang: it(c),
            dir: it(O.getDir)(it(c)),
            class: "pt-2 px-4",
            innerHTML: it(i)
          }, null, 8, A5)
        ], 64)) : o.value === "target_article" ? (jo(), Hi(_c, { key: 1 }, [
          it(g) ? pm("", !0) : (jo(), gm(it(dt), { key: 0 })),
          ji("article", {
            lang: it(u),
            dir: it(O.getDir)(it(u)),
            class: "px-4",
            innerHTML: it(g)
          }, null, 8, D5)
        ], 64)) : (jo(), Hi(_c, { key: 2 }, [
          ji("section", {
            class: "pa-4",
            innerHTML: it(d)
          }, null, 8, P5),
          vc(bw, {
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
}, M5 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: N5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, U5 = window.Vue.resolveComponent, I5 = window.Vue.createVNode, R5 = window.Vue.normalizeClass, z5 = window.Vue.openBlock, O5 = window.Vue.createElementBlock;
function j5(e, t, n, o, s, a) {
  const r = U5("sx-content-comparator");
  return z5(), O5("main", {
    class: R5(["sx-content-comparator-view", a.classes])
  }, [
    I5(r)
  ], 2);
}
const H5 = /* @__PURE__ */ ge(M5, [["render", j5]]);
const q5 = window.Vue.resolveDirective, Gs = window.Vue.createElementVNode, fm = window.Vue.withDirectives, qi = window.Vue.unref, Sc = window.Vue.createVNode, wm = window.Vue.toDisplayString, vm = window.Vue.createTextVNode, Ws = window.Vue.withCtx, G5 = window.Vue.openBlock, W5 = window.Vue.createBlock, X5 = { class: "mw-ui-dialog__header px-4 py-3" }, K5 = { class: "mw-ui-dialog__header-title" }, Y5 = { class: "pa-4" }, Q5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, _m = window.Codex.CdxButton, J5 = {
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
      const c = q5("i18n");
      return G5(), W5(qi(kt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: Ws(() => [
          Gs("div", X5, [
            fm(Gs("span", K5, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Ws(() => [
          Gs("div", Q5, [
            Sc(qi(_m), {
              weight: "quiet",
              onClick: s
            }, {
              default: Ws(() => [
                vm(wm(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Sc(qi(_m), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Ws(() => [
                vm(wm(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Ws(() => [
          Sc(qi(mr)),
          Gs("div", Y5, [
            fm(Gs("span", null, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, Z5 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => wo(a)
  );
  return s && Gh(s) ? Ct.parseTemplateWikitext(
    Hh(s),
    n,
    t
  ) : Promise.resolve(null);
}, Cw = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => wo(a)
  );
  return s ? Ct.parseTemplateWikitext(
    Hh(s),
    n,
    t
  ) : Promise.resolve(null);
}, eT = window.Vuex.useStore, Zu = () => {
  const e = eT(), { sourceSection: t } = te(), { getCurrentTitleByLanguage: n } = rn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = D(), a = Sw(), r = (i, d, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[d] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof ut ? p.blockTemplateProposedTranslations[d] = g : p instanceof Kn && p.addProposedTranslation(d, g);
  }, l = (i, d) => x(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, i))
      return "";
    try {
      const p = yield a();
      return yield Ct.fetchSegmentTranslation(
        o.value,
        s.value,
        i,
        d,
        p
      );
    } catch (p) {
      return mw.log.error("Error while translating segment", p), "";
    }
  }), c = (i, d) => x(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      i,
      d
    ))
      return;
    let g = t.value.getOriginalContentByTranslationUnitId(i);
    const p = t.value.getContentTranslationUnitById(i);
    let m;
    if (e.commit("application/addMtRequestsPending", i), m = yield l(d, g), !m) {
      e.commit("application/removeMtRequestsPending", i);
      return;
    }
    p instanceof ut && (p.setBlockTemplateAdaptationInfoByHtml(
      d,
      m
    ), m = (yield Z5(
      m,
      n(s.value, o.value),
      s.value
    )) || ""), r(
      i,
      d,
      m
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
}, tT = window.Vuex.useStore, nT = () => {
  const { sourceSection: e } = te(), t = tT(), { translateTranslationUnitById: n } = Zu();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function oT(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const sT = window.Vue.resolveDirective, ct = window.Vue.createElementVNode, Gi = window.Vue.withDirectives, Oe = window.Vue.unref, yc = window.Vue.createVNode, Sn = window.Vue.withCtx, aT = window.Vue.renderList, iT = window.Vue.Fragment, Wi = window.Vue.openBlock, rT = window.Vue.createElementBlock, lT = window.Vue.toDisplayString, xc = window.Vue.createBlock, Sm = window.Vue.createCommentVNode, cT = { class: "mw-ui-dialog__header pa-4" }, uT = { class: "row ma-0 py-2" }, dT = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, gT = { class: "mb-0" }, pT = { class: "col shrink justify-center" }, mT = { class: "pb-2 mb-0" }, hT = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, fT = ["dir", "lang", "innerHTML"], wT = ["textContent"], vT = ["innerHTML"], _T = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, ST = /* @__PURE__ */ ct("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), yT = ["innerHTML"], bc = window.Vue.computed, xT = window.Vuex.useStore, bT = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = ae.EMPTY_TEXT_PROVIDER_KEY, s = ae.ORIGINAL_TEXT_PROVIDER_KEY, a = xT(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: c
    } = te(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: i
    } = D(), d = bc(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        u.value,
        i.value
      )
    ), g = bc(() => {
      const b = [s, o];
      return d.value.filter(
        (S) => !b.includes(S)
      );
    }), p = bc(
      () => l.value ? r.value.proposedTitleTranslations : c.value.proposedTranslations
    ), m = nT(), h = (b) => {
      m(b), v();
    }, f = ae.getMTProviderLabel, v = () => n("update:active", !1), w = pe(), y = oT(
      w.i18n("cx-tools-mt-noservices")
    );
    return (b, S) => {
      const k = sT("i18n");
      return e.active ? (Wi(), xc(Oe(kt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: Sn(() => [
          ct("div", cT, [
            ct("div", uT, [
              ct("div", dT, [
                Gi(ct("h4", gT, null, 512), [
                  [k, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              ct("div", pT, [
                yc(Oe(Xe), {
                  type: "icon",
                  icon: Oe(fr),
                  class: "pa-0",
                  onClick: v
                }, null, 8, ["icon"])
              ])
            ]),
            Gi(ct("h6", mT, null, 512), [
              [k, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: Sn(() => [
          yc(Oe(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[0] || (S[0] = (V) => h(Oe(s)))
          }, {
            header: Sn(() => [
              Gi(ct("h5", hT, null, 512), [
                [k, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: Sn(() => [
              ct("p", {
                dir: Oe(O.getDir)(Oe(u)),
                lang: Oe(u),
                innerHTML: p.value[Oe(s)]
              }, null, 8, fT)
            ]),
            _: 1
          }),
          (Wi(!0), rT(iT, null, aT(g.value, (V) => (Wi(), xc(Oe(Ze), {
            key: V,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (U) => h(V)
          }, {
            header: Sn(() => [
              ct("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: lT(Oe(f)(V))
              }, null, 8, wT)
            ]),
            default: Sn(() => [
              ct("p", {
                innerHTML: p.value[V]
              }, null, 8, vT)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          yc(Oe(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: S[1] || (S[1] = (V) => h(Oe(o)))
          }, {
            header: Sn(() => [
              Gi(ct("h5", _T, null, 512), [
                [k, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: Sn(() => [
              ST
            ]),
            _: 1
          }),
          g.value.length ? Sm("", !0) : (Wi(), xc(Oe(Ze), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: Sn(() => [
              ct("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: Oe(y)
              }, null, 8, yT)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Sm("", !0);
    };
  }
}, CT = window.Vuex.useStore, ds = () => {
  const { sourceSection: e } = te(), t = CT(), { translateTranslationUnitById: n } = Zu(), { currentMTProvider: o } = Be(t), s = (l) => x(void 0, null, function* () {
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
const ym = window.Vue.toDisplayString, Cc = window.Vue.createElementVNode, Xi = window.Vue.unref, kT = window.Vue.createVNode, $T = window.Vue.normalizeClass, VT = window.Vue.withCtx, ET = window.Vue.openBlock, LT = window.Vue.createBlock, TT = ["href"], AT = ["textContent"], DT = ["textContent"], go = window.Vue.computed, xm = "sx-sentence-selector__section-title", PT = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = te(), { currentSourcePage: o, currentTargetPageTitle: s } = ot(), { sourceLanguageURLParameter: a } = D(), { isPresentLeadSection: r } = pt(), l = go(() => {
      var f;
      return (f = o.value) == null ? void 0 : f.title;
    }), c = go(
      () => {
        var f;
        return ((f = t.value) == null ? void 0 : f.title) || l.value;
      }
    ), u = go(
      () => J.getPageUrl(a.value, l.value)
    ), i = go(
      () => {
        var f;
        return !!((f = t.value) != null && f.translatedTitle);
      }
    ), d = go(
      () => i.value ? "translated" : "selected"
    ), g = go(() => {
      const f = [xm];
      return n.value && !r.value && f.push(`${xm}--${d.value}`), f;
    }), { selectTranslationUnitById: p } = ds(), m = () => p(0), h = go(
      () => r.value ? s.value : c.value
    );
    return (f, v) => (ET(), LT(Xi(C), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: VT(() => [
        Cc("a", {
          href: u.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Cc("strong", {
            textContent: ym(l.value)
          }, null, 8, AT),
          kT(Xi(et), {
            icon: Xi(Rh),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, TT),
        Cc("h2", {
          class: $T(["pa-0 ma-0", g.value]),
          onClick: v[0] || (v[0] = (w) => Xi(r) ? m : null),
          textContent: ym(h.value)
        }, null, 10, DT)
      ]),
      _: 1
    }));
  }
};
const yn = window.Vue.unref, Xs = window.Vue.createVNode, Ki = window.Vue.withCtx, bm = window.Vue.toDisplayString, Cm = window.Vue.createTextVNode, BT = window.Vue.openBlock, FT = window.Vue.createBlock, km = window.Vue.computed, kc = window.Codex.CdxButton, $m = window.Codex.CdxIcon, kw = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = te(), { isPresentLeadSection: s } = pt(), a = km(
      () => {
        var l;
        return (l = t.value) == null ? void 0 : l.isSelectedTranslationUnitLast;
      }
    ), r = km(
      () => s.value || n.value
    );
    return (l, c) => (BT(), FT(yn(I), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Ki(() => [
        Xs(yn(kc), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": l.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: r.value,
          onClick: c[0] || (c[0] = (u) => l.$emit("select-previous-segment"))
        }, {
          default: Ki(() => [
            Xs(yn($m), {
              class: "me-1",
              icon: yn(zu)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Xs(yn(kc), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !yn(o),
          onClick: c[1] || (c[1] = (u) => l.$emit("apply-translation"))
        }, {
          default: Ki(() => [
            Cm(bm(l.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Xs(yn(kc), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: a.value,
          onClick: c[2] || (c[2] = (u) => l.$emit("skip-translation"))
        }, {
          default: Ki(() => [
            Cm(bm(l.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Xs(yn($m), {
              class: "ms-1",
              size: "small",
              icon: yn(ls)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const po = window.Vue.unref, NT = window.Vue.toDisplayString, Ks = window.Vue.createVNode, Yi = window.Vue.withCtx, MT = window.Vue.openBlock, UT = window.Vue.createBlock, $c = window.Vue.computed, IT = window.Vuex.useStore, RT = window.Codex.CdxButton, zT = window.Codex.CdxIcon, OT = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = IT(), n = $c(() => t.state.application.currentMTProvider), o = pe(), s = $c(() => ({
      [ae.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ae.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = $c(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ae.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (MT(), UT(po(C), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Yi(() => [
        Ks(po(I), { class: "ma-0 ps-5 pb-4" }, {
          default: Yi(() => [
            Ks(po(C), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: NT(a.value)
            }, null, 8, ["textContent"]),
            Ks(po(C), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Yi(() => [
                Ks(po(RT), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (c) => r.$emit("configure-options"))
                }, {
                  default: Yi(() => [
                    Ks(po(zT), {
                      class: "pa-0",
                      icon: po(Ru)
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
const Ut = window.Vue.unref, zn = window.Vue.createVNode, jT = window.Vue.resolveDirective, Vm = window.Vue.createElementVNode, HT = window.Vue.withDirectives, Em = window.Vue.toDisplayString, Lm = window.Vue.createTextVNode, Ys = window.Vue.withCtx, qT = window.Vue.openBlock, GT = window.Vue.createElementBlock, WT = { class: "mt-retry-body pb-5" }, XT = { class: "retry-body__message" }, Tm = window.Codex.CdxButton, Vc = window.Codex.CdxIcon, KT = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = jT("i18n");
      return qT(), GT("div", WT, [
        Vm("div", XT, [
          zn(Ut(Vc), {
            class: "me-2",
            icon: Ut(Ky)
          }, null, 8, ["icon"]),
          HT(Vm("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        zn(Ut(I), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Ys(() => [
            zn(Ut(C), { cols: "6" }, {
              default: Ys(() => [
                zn(Ut(Tm), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Ys(() => [
                    zn(Ut(Vc), {
                      class: "me-1",
                      icon: Ut($f)
                    }, null, 8, ["icon"]),
                    Lm(" " + Em(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            zn(Ut(C), { cols: "6" }, {
              default: Ys(() => [
                zn(Ut(Tm), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Ys(() => [
                    zn(Ut(Vc), {
                      class: "me-1",
                      icon: Ut(ix)
                    }, null, 8, ["icon"]),
                    Lm(" " + Em(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Ho = window.Vue.createVNode, rt = window.Vue.unref, Qs = window.Vue.openBlock, YT = window.Vue.createElementBlock, QT = window.Vue.createCommentVNode, Qi = window.Vue.createBlock, JT = window.Vue.normalizeClass, ZT = window.Vue.normalizeStyle, Js = window.Vue.withCtx, eA = window.Vue.toDisplayString, tA = window.Vue.createTextVNode, nA = window.Vue.normalizeProps, oA = window.Vue.guardReactiveProps, sA = ["lang", "dir", "innerHTML"], Ec = window.Vue.ref, aA = window.Vue.onMounted, iA = window.Vue.onBeforeUnmount, Lc = window.Vue.computed, rA = window.Vue.nextTick, lA = window.Vuex.useStore, cA = window.Codex.CdxButton, uA = window.Codex.CdxIcon, dA = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Ec(0), n = Ec(null), o = Ec(null), s = lA(), { currentMTProvider: a } = Be(s), { targetLanguageURLParameter: r } = D(), { sourceSection: l, currentProposedTranslation: c } = te(), u = Lc(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = Lc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), d = Lc(
      () => !!c.value || a.value === ae.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    aA(() => x(this, null, function* () {
      yield rA(), g(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), iA(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (Qs(), Qi(rt(Ze), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Js(() => [
        Ho(rt(I), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Js(() => [
            Ho(OT, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            Ho(rt(C), {
              class: JT(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !d.value && u.value
              }]),
              style: ZT(d.value ? i.value : null)
            }, {
              default: Js(() => [
                d.value ? (Qs(), YT("section", {
                  key: 0,
                  lang: rt(r),
                  dir: rt(O.getDir)(rt(r)),
                  innerHTML: rt(c)
                }, null, 8, sA)) : u.value ? (Qs(), Qi(rt(dt), { key: 1 })) : (Qs(), Qi(KT, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
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
              default: Js(() => [
                d.value || u.value ? (Qs(), Qi(rt(cA), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !d.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", rt(c)))
                }, {
                  default: Js(() => [
                    Ho(rt(uA), {
                      class: "me-1",
                      icon: rt(Iu)
                    }, null, 8, ["icon"]),
                    tA(" " + eA(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : QT("", !0),
                Ho(kw, nA(oA(m.$attrs)), null, 16)
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
}, gA = window.Vue.computed, pA = (e) => gA(() => {
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
const mA = window.Vue.unref, hA = window.Vue.normalizeClass, fA = window.Vue.openBlock, wA = window.Vue.createElementBlock, vA = ["innerHTML"], _A = window.Vue.onMounted, SA = window.Vue.ref, yA = window.Vue.computed, xA = {
  __name: "SubSection",
  props: {
    subSection: {
      type: ut,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = SA(null), a = pA(n.subSection);
    _A(() => {
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
    const { selectTranslationUnitById: r } = ds(), l = (u) => {
      if (u.selected) {
        o("bounce-translation");
        return;
      }
      r(u.id);
    }, c = yA(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (u, i) => (fA(), wA("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: hA(["sx-sentence-selector__subsection", c.value]),
      innerHTML: mA(a)
    }, null, 10, vA));
  }
};
const Am = window.Vue.unref, Dm = window.Vue.createVNode, Pm = window.Vue.normalizeStyle, bA = window.Vue.openBlock, CA = window.Vue.createElementBlock, Bm = window.Vue.computed, $w = {
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
    const t = e, n = Bm(() => ({ "--size": t.size })), o = Bm(
      () => !t.isTemplateAdapted || t.percentage === 0 ? xv : lu
    );
    return (s, a) => (bA(), CA("div", {
      class: "block-template-status-indicator",
      style: Pm(n.value)
    }, [
      Dm(Am(I_), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      Dm(Am(et), {
        icon: o.value,
        size: e.size / 2,
        style: Pm({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const On = window.Vue.unref, Ji = window.Vue.createVNode, Tc = window.Vue.withCtx, kA = window.Vue.openBlock, $A = window.Vue.createBlock, VA = window.Vue.computed, Fm = window.Codex.CdxButton, Nm = window.Codex.CdxIcon, Vw = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = te(), o = VA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (kA(), $A(On(I), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Tc(() => [
        Ji(On(Fm), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: On(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Tc(() => [
            Ji(On(Nm), { icon: On(zu) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Ji(On(Fm), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: Tc(() => [
            Ji(On(Nm), { icon: On(ls) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, Zs = window.Vue.openBlock, Zi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const xn = window.Vue.unref, qo = window.Vue.withCtx, ea = window.Vue.createVNode, Ac = window.Vue.toDisplayString, Dc = window.Vue.createElementVNode, EA = window.Vue.renderList, LA = window.Vue.Fragment, TA = window.Vue.createElementBlock, AA = { class: "pa-4" }, DA = ["textContent"], PA = ["textContent"], BA = window.Vuex.useStore, er = window.Vue.computed, FA = {
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
    const t = e, { targetLanguageAutonym: n } = Be(BA()), o = er(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = pe(), a = er(() => {
      let c;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? c = "cx-sx-block-template-mapping-status-title-partially-template" : c = "cx-sx-block-template-mapping-status-title-fully-template" : c = "cx-sx-block-template-mapping-status-title-unadapted-template" : c = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(c);
    }), r = er(() => {
      let c;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? c = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? c = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : c = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(c);
    }), l = er(() => {
      let c = [];
      if (!t.targetTemplateExists)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: Cv,
          color: bt.gray500
        });
      else if (!t.isTemplateAdapted)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: fr,
          color: bt.gray500
        });
      else if (o.value < 100)
        c.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: lu,
          color: bt.blue600
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
          color: bt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? c.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: hr,
        color: bt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && c.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: rv,
        color: bt.gray500
      }), c;
    });
    return (c, u) => (Zs(), Zi(xn(kt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: c.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: u[0] || (u[0] = (i) => c.$emit("update:active", i))
    }, {
      header: qo(() => [
        ea(xn(I), {
          justify: "center",
          class: "mt-4"
        }, {
          default: qo(() => [
            ea(xn(C), { shrink: "" }, {
              default: qo(() => [
                e.targetTemplateExists ? (Zs(), Zi($w, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (Zs(), Zi(xn(et), {
                  key: 1,
                  icon: xn(lv)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: qo(() => [
        Dc("div", AA, [
          Dc("h3", {
            textContent: Ac(a.value)
          }, null, 8, DA),
          Dc("p", {
            class: "mt-6 text-small",
            textContent: Ac(r.value)
          }, null, 8, PA),
          (Zs(!0), TA(LA, null, EA(l.value, (i, d) => (Zs(), Zi(xn(I), {
            key: d,
            align: "start",
            class: "mt-4"
          }, {
            default: qo(() => [
              ea(xn(C), { shrink: "" }, {
                default: qo(() => [
                  ea(xn(et), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              ea(xn(C), {
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
const De = window.Vue.unref, je = window.Vue.createVNode, Qt = window.Vue.withCtx, Pc = window.Vue.toDisplayString, Mm = window.Vue.createTextVNode, NA = window.Vue.resolveDirective, Um = window.Vue.withDirectives, Im = window.Vue.createElementVNode, MA = window.Vue.normalizeClass, Go = window.Vue.openBlock, Rm = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const tr = window.Vue.createBlock, zm = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const Om = window.Vue.mergeProps, UA = { class: "block-template-adaptation-card__container pa-4" }, IA = ["textContent"], RA = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, He = window.Vue.computed, zA = window.Vue.ref, OA = window.Vuex.useStore, jm = window.Codex.CdxButton, Hm = window.Codex.CdxIcon, jA = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = OA(), { targetLanguageAutonym: n, currentMTProvider: o } = Be(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = te(), r = He(() => {
      var L;
      return (L = s.value) == null ? void 0 : L.isTranslated;
    }), l = He(() => {
      var B;
      return ((B = s.value) == null ? void 0 : B.blockTemplateTranslatedContent) || a.value;
    }), c = He(
      () => {
        var L;
        return (L = s.value) == null ? void 0 : L.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), u = He(
      () => {
        var L;
        return !((L = t.state.application.mtRequestsPending) != null && L.includes(
          s.value.id
        ));
      }
    ), i = pe(), d = He(
      // Strip HTML comments and return
      () => {
        var L, B;
        return ((B = (L = s.value) == null ? void 0 : L.sourceBlockTemplateName) == null ? void 0 : B.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = He(
      () => {
        var L, B;
        return (B = (L = s.value) == null ? void 0 : L.blockTemplateAdaptationInfo) == null ? void 0 : B[o.value];
      }
    ), p = He(
      () => {
        var L, B;
        return ((L = g.value) == null ? void 0 : L.adapted) || !!((B = g.value) != null && B.partial);
      }
    ), m = He(() => g.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), h = He(() => g.value ? p.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = He(
      () => {
        var L;
        return Object.keys(((L = s.value) == null ? void 0 : L.sourceTemplateParams) || {}).length;
      }
    ), v = He(() => {
      var B;
      const L = (B = s.value) == null ? void 0 : B.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(L || {});
    }), w = He(() => v.value.length), y = He(() => {
      const L = V.value;
      return f.value + L === 0 ? 100 : w.value / (f.value + L) * 100 || 0;
    }), b = zA(!1), S = () => {
      b.value = !0;
    }, k = (L) => L.filter((B) => !v.value.includes(B)), V = He(() => {
      var B;
      const L = ((B = g.value) == null ? void 0 : B.mandatoryTargetParams) || [];
      return k(L).length;
    }), U = He(() => {
      var B;
      const L = ((B = g.value) == null ? void 0 : B.optionalTargetParams) || [];
      return k(L).length;
    });
    return (L, B) => {
      const z = NA("i18n");
      return Go(), tr(De(Ze), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Qt(() => [
          Im("div", UA, [
            je(De(I), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Qt(() => [
                je(De(C), { shrink: "" }, {
                  default: Qt(() => [
                    je(De(Hm), {
                      icon: De(rx),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                je(De(C), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Qt(() => [
                    Mm(Pc(d.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (Go(), Rm("div", {
              key: 0,
              class: MA(["pa-4 mb-4", m.value])
            }, [
              je(De(I), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Qt(() => [
                  Um(je(De(C), { tag: "h5" }, null, 512), [
                    [z, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  je(De(C), { shrink: "" }, {
                    default: Qt(() => [
                      je($w, {
                        percentage: y.value,
                        size: 20,
                        "is-template-adapted": p.value,
                        "stroke-width": 2,
                        onClick: S
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Im("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: Pc(c.value)
              }, null, 8, IA),
              je(De(jm), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: B[0] || (B[0] = (X) => L.$emit("edit-translation", l.value))
              }, {
                default: Qt(() => [
                  Mm(Pc(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (Go(), Rm("div", RA, [
              je(De(I), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Qt(() => [
                  Um(je(De(C), { tag: "h5" }, null, 512), [
                    [z, [
                      De(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  je(De(C), { shrink: "" }, {
                    default: Qt(() => [
                      je(De(jm), {
                        weight: "quiet",
                        "aria-label": L.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Qt(() => [
                          je(De(Hm), {
                            icon: De(ox),
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
            ])) : (Go(), tr(De(dt), { key: 2 }))
          ]),
          r.value ? (Go(), tr(Vw, zm(Om({ key: 1 }, L.$attrs)), null, 16)) : (Go(), tr(kw, zm(Om({ key: 0 }, L.$attrs)), null, 16)),
          je(FA, {
            active: b.value,
            "onUpdate:active": B[1] || (B[1] = (X) => b.value = X),
            "source-params-count": f.value,
            "target-params-count": w.value,
            "mandatory-missing-params-count": V.value,
            "optional-missing-params-count": U.value,
            "is-template-adapted": p.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const HA = window.Vue.unref, qA = window.Vue.createVNode, GA = window.Vue.openBlock, WA = window.Vue.createElementBlock, XA = { class: "translated-segment-card-header" }, KA = window.Vue.computed, YA = {
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
    const n = t, { isSectionTitleSelected: o } = te(), s = pe(), a = KA(() => [
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
    return (l, c) => (GA(), WA("div", XA, [
      qA(HA(Ca), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const QA = window.Vue.useCssVars, Re = window.Vue.createVNode, qm = window.Vue.resolveDirective, JA = window.Vue.createElementVNode, Bc = window.Vue.withDirectives, xe = window.Vue.unref, ZA = window.Vue.normalizeStyle, nr = window.Vue.openBlock, Gm = window.Vue.createElementBlock, eD = window.Vue.createCommentVNode, tD = window.Vue.normalizeClass, St = window.Vue.withCtx, nD = window.Vue.toDisplayString, oD = window.Vue.createTextVNode, Wm = window.Vue.createBlock, sD = window.Vue.normalizeProps, aD = window.Vue.guardReactiveProps, bn = window.Vue.computed, iD = window.Vue.ref, rD = window.Vue.inject, lD = window.Vuex.useStore, cD = window.Codex.CdxButton, Fc = window.Codex.CdxIcon, uD = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    QA((w) => ({
      "4929555c": v.value
    }));
    const t = iD("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = te(), { targetLanguage: a } = Be(lD()), r = bn(() => t.value === "sentence"), l = bn(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (y) => {
            var b;
            return y.id === ((b = o.value) == null ? void 0 : b.id);
          }
        )
      )
    ), c = bn(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), u = rD("colors"), i = u.gray200, d = u.red600, g = bn(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), p = bn(
      () => on.calculateScore(
        g.value,
        c.value,
        a.value
      )
    ), m = bn(
      () => on.getScoreStatus(p.value)
    ), h = bn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = bn(() => ({
      failure: p.value === 0 ? null : u.yellow700,
      warning: u.yellow700,
      success: u.green600
    })), v = bn(
      () => f.value[m.value]
    );
    return (w, y) => {
      const b = qm("i18n"), S = qm("i18n-html");
      return nr(), Wm(xe(Ze), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: St(() => [
          Re(xe(I), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: St(() => [
              Re(YA, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (k) => t.value = k)
              }, null, 8, ["selection"]),
              Re(xe(C), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: St(() => [
                  Re(xe(I), { class: "ma-0" }, {
                    default: St(() => [
                      Re(xe(C), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: St(() => [
                          Bc(JA("h5", null, null, 512), [
                            [b, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Bc((nr(), Gm("p", {
                            key: 0,
                            style: ZA({ color: xe(d) })
                          }, null, 4)), [
                            [b, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Bc((nr(), Gm("p", {
                            key: 1,
                            class: tD(h.value)
                          }, null, 2)), [
                            [S, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Re(xe(C), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: St(() => [
                          Re(xe(I), { class: "ma-0 ms-2" }, {
                            default: St(() => [
                              Re(xe(C), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: St(() => [
                                  Re(xe(Fc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: xe(ux)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Re(xe(C), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: St(() => [
                                  Re(xe(Oh), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: v.value,
                                    background: xe(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Re(xe(C), { shrink: "" }, {
                                default: St(() => [
                                  Re(xe(Fc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: xe(lx)
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
                  r.value ? (nr(), Wm(xe(cD), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (k) => w.$emit("edit-translation", g.value))
                  }, {
                    default: St(() => [
                      Re(xe(Fc), {
                        class: "me-1",
                        icon: xe(Iu)
                      }, null, 8, ["icon"]),
                      oD(" " + nD(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : eD("", !0)
                ]),
                _: 1
              }),
              Re(xe(C), { class: "translated-segment-card__actions" }, {
                default: St(() => [
                  Re(Vw, sD(aD(w.$attrs)), null, 16)
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
}, dD = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = te(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = ds(), { isPresentLeadSection: s } = pt(), { currentTranslation: a } = Wt();
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
}, Ew = window.Vuex.useStore, gD = () => {
  const e = Ew(), {
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
    o ? s = yield xr.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : s = new ae(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, pD = () => {
  const e = Ew(), { currentMTProvider: t } = Be(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = D(), s = gD();
  return () => x(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = ae.getStorageKey(
        n.value,
        o.value
      );
      let l = mw.storage.get(r);
      (!l || !a.includes(l)) && (l = a[0]), e.commit("application/setCurrentMTProvider", l);
    }
  });
}, mD = window.Vue.computed, hD = (e) => {
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
}, fD = () => {
  const { selectedContentTranslationUnit: e } = te(), t = mD(
    () => e.value instanceof ut
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && hD(o);
  };
}, wD = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (l) => !ae.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, vD = window.Vue.computed, Lw = () => {
  const { currentTranslation: e } = Wt(), { currentSourcePage: t } = ot();
  return vD(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, _D = window.Vue.computed, Pa = () => {
  const { sourceSection: e } = te(), { currentTargetPageTitle: t } = ot(), { isMissingLeadSection: n } = pt();
  return { targetPageTitleForPublishing: _D(
    () => n.value ? e.value.title : t.value
  ) };
}, SD = window.Vuex.useStore, ed = () => {
  const e = SD(), { sourceSection: t } = te(), { targetPageTitleForPublishing: n } = Pa(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = D(), r = Lw(), { target: l, PUBLISHING_TARGETS: c } = Vt();
  return () => {
    const u = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(d);
    g.forEach(
      (m) => wD(m, i)
    );
    const p = t.value.getTranslationProgress(a);
    return Ct.saveTranslation({
      sourceTitle: o.value,
      targetTitle: u,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: t.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: t.value.targetSectionTitleForPublishing,
      sourceLanguage: s.value,
      targetLanguage: a.value,
      revision: r.value,
      units: g.map((m) => m.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: d,
      isSandbox: l === c.SANDBOX,
      progress: p
    });
  };
}, yD = window.Vue.effectScope, xD = window.Vue.onScopeDispose, bD = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = yD(!0), n = o.run(() => e(...a))), xD(s), n);
}, CD = window.Vuex.useStore;
let Nc;
const kD = () => {
  const e = CD(), t = ed();
  let n = 1e3, o = 0;
  return Nc = Gu(() => t().then((a) => {
    a instanceof Zn ? (n *= o + 1, o++, setTimeout(Nc, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof os)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Nc;
}, Tw = bD(kD), $D = window.Vuex.useStore, VD = () => {
  const e = $D(), t = Tw(), { currentMTProvider: n } = Be(e), { sourceSection: o, currentProposedTranslation: s } = te(), { selectNextTranslationUnit: a } = ds();
  return () => x(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, ED = window.Vuex.useStore, LD = () => {
  const e = ED(), t = Tw();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, TD = window.Vuex.useStore, AD = window.Vue.computed, Aw = () => {
  const e = TD(), { currentTranslation: t } = Wt(), { currentMTProvider: n } = Be(e), { currentTargetPageTitle: o } = ot(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = D(), c = $t(), u = AD(() => {
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
    return n.value && (f.translation_provider = ae.getProviderForInstrumentation(n.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      const f = ce({
        event_type: "editor_open"
      }, u.value);
      return c(f);
    },
    logEditorCloseEvent: () => {
      const f = ce({
        event_type: "editor_close"
      }, u.value);
      return c(f);
    },
    logEditorCloseWarnEvent: () => c(ce({
      event_type: "editor_close_warn"
    }, u.value)),
    logEditorSegmentAddEvent: () => c(ce({
      event_type: "editor_segment_add"
    }, u.value)),
    logEditorSegmentSkipEvent: () => c(ce({
      event_type: "editor_segment_skip"
    }, u.value)),
    logEditorSegmentEditEvent: () => c(ce({
      event_type: "editor_segment_edit"
    }, u.value))
  };
}, DD = (e, t, n, o) => x(void 0, null, function* () {
  var l, c, u;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((c = t.mt) == null ? void 0 : c.content), a = (u = t == null ? void 0 : t.mt) == null ? void 0 : u.engine, r = yield Cw(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), PD = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, BD = (e, t, n, o) => x(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return DD(e, t, n, o);
  PD(e, t);
}), FD = (e, t, n, o) => {
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
        const u = BD(
          l,
          c,
          t || e.title,
          n
        );
        s.push(u);
      }
  return Promise.all(s);
}, ND = { restoreCorporaDraft: FD }, MD = () => {
  const { currentSourcePage: e } = ot(), { sourceSection: t } = te();
  return (n) => x(void 0, null, function* () {
    if (n.restored)
      return;
    try {
      const s = yield Ct.fetchTranslationUnits(
        n.translationId
      );
      yield ND.restoreCorporaDraft(
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
function UD() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((o) => t.includes(o));
}
function Dw() {
  return Mc === null && (Mc = UD()), Mc;
}
const Pw = window.Vue.ref, Uc = Pw(!1), Ic = Pw(!1);
function Xm() {
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
const ie = window.Vue.unref, yt = window.Vue.createVNode, It = window.Vue.withCtx, ID = window.Vue.resolveDirective, Cn = window.Vue.createElementVNode, RD = window.Vue.withDirectives, ta = window.Vue.toDisplayString, zD = window.Vue.createTextVNode, Jt = window.Vue.openBlock, jn = window.Vue.createBlock, Km = window.Vue.createCommentVNode, OD = window.Vue.renderList, jD = window.Vue.Fragment, Ym = window.Vue.createElementBlock, HD = window.Vue.normalizeClass, qD = window.Vue.normalizeStyle, GD = { class: "sx-sentence-selector__header-title mb-0" }, WD = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, XD = { class: "sx-sentence-selector__section-contents px-4" }, Hn = window.Vue.computed, KD = window.Vue.nextTick, YD = window.Vue.onMounted, na = window.Vue.ref, Qm = window.Vue.watch, QD = window.Vuex.useStore, Jm = window.Codex.CdxButton, JD = window.Codex.CdxIcon, Zm = window.Codex.CdxMessage, ZD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = na(!1), n = na(!1), o = na("100%"), s = QD(), { currentMTProvider: a, previousRoute: r } = Be(s), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      pageURLParameter: u,
      sectionURLParameter: i
    } = D(), { resetPublishTarget: d, target: g } = Vt(), p = kr();
    g.value || p(
      l.value,
      c.value,
      u.value
    ).then(() => d());
    const { sourceSection: m, selectedContentTranslationUnit: h } = te(), { targetPageTitleForPublishing: f } = Pa(), v = na({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), w = Hn(
      () => Object.values(v.value).every(Boolean)
    ), y = Hn(
      () => {
        var Q;
        return (Q = m.value) == null ? void 0 : Q.isSelectedTranslationUnitTranslated;
      }
    ), b = Hn(() => {
      var Q;
      return (Q = m.value) == null ? void 0 : Q.subSections;
    }), S = Hn(
      () => {
        var Q;
        return (Q = m.value) == null ? void 0 : Q.selectedTranslationUnitOriginalContent;
      }
    ), k = Hn(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: V,
      logEditorCloseEvent: U,
      logEditorCloseWarnEvent: L,
      logEditorSegmentAddEvent: B,
      logEditorSegmentSkipEvent: z
    } = Aw(), X = () => {
      var Co;
      const Q = F.currentRoute.value.meta.workflowStep, Tn = F.getRoutes().find(
        (Pr) => Pr.name === r.value
      ), mt = ((Co = Tn == null ? void 0 : Tn.meta) == null ? void 0 : Co.workflowStep) || 0;
      return Q > mt;
    }, le = dD();
    pD()().then(() => {
      X() && V(), v.value.mtProviders = !0;
    });
    const N = fD(), { fetchTranslationsByStatus: R, translationsFetched: q } = cs(), G = MD(), { currentTranslation: me } = Wt(), { selectPageSectionByTitle: $e, selectPageSectionByIndex: Se } = Lr(), be = Ju(), Ke = as();
    YD(() => x(this, null, function* () {
      if (!q.value.draft) {
        const Q = [
          // required to get current draft translation (if exists)
          R("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          be(l.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          Ke(l.value, [u.value])
        ];
        yield Promise.all(Q);
      }
      v.value.pageMetadata = !0, i.value ? yield $e(i.value) : yield Se(0), v.value.pageContent = !0, me.value && (yield G(me.value)), v.value.draftRestored = !0, g.value || p(
        l.value,
        c.value,
        u.value
      ).then(() => d()), Qm(
        w,
        () => x(this, null, function* () {
          w.value && (yield KD(), le(), N());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), Qm(h, N);
    const { selectNextTranslationUnit: P, selectPreviousTranslationUnit: M } = ds(), oe = () => (z(), P()), _ = VD(), A = () => {
      B(), _();
    }, E = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, F = nt(), K = () => {
      const { autoSavePending: Q } = s.state.application;
      if (Q) {
        ps.value = !0, L();
        return;
      }
      j();
    }, he = LD(), { clearTranslationURLParameters: W } = D(), j = () => x(this, null, function* () {
      R("draft"), me.value && (m.value.reset(), me.value.restored = !1), U(), W(), he(), yield F.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: se,
      translateSelectedTranslationUnitForAllProviders: st
    } = Zu(), Ve = () => {
      gs.value || (t.value = !0, st());
    }, { getCurrentTitleByLanguage: Ba } = rn(), { isMissingLeadSection: Fa } = pt(), no = (Q) => {
      F.push({
        name: "sx-editor",
        state: {
          content: Q,
          originalContent: S.value,
          title: Ba(
            c.value,
            l.value
          ),
          isInitialEdit: !y.value || null
        }
      });
    }, Tr = () => F.push({ name: "sx-publisher" }), Ar = () => x(this, null, function* () {
      h.value ? yield se(
        h.value.id,
        a.value
      ) : yield se(0, a.value);
    }), gs = Hn(
      () => h.value instanceof ut
    ), ps = na(!1), {
      isPermissionWarningDismissed: Dr,
      dismissPermissionWarning: xo,
      resetPermissionWarning: bo
    } = Xm(), { isTitleErrorDismissed: Na, dismissTitleError: T, resetTitleError: H } = Xm();
    X() && (bo(), H());
    const Me = Hn(
      () => !Dw() && !Dr.value
    ), Et = Hn(
      () => !Na.value && Fa.value && !mw.Title.newFromText(f.value)
    );
    return (Q, ln) => {
      const Tn = ID("i18n");
      return Jt(), Ym("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: qD(k.value)
      }, [
        yt(ie(I), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: It(() => [
            yt(ie(C), { shrink: "" }, {
              default: It(() => [
                yt(ie(Jm), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": Q.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: K
                }, {
                  default: It(() => [
                    yt(ie(JD), { icon: ie(yf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            yt(ie(C), {
              grow: "",
              class: "px-1"
            }, {
              default: It(() => [
                RD(Cn("h4", GD, null, 512), [
                  [Tn, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            yt(ie(C), {
              shrink: "",
              class: "px-3"
            }, {
              default: It(() => [
                yt(ie(Jm), {
                  disabled: !(ie(m) && ie(m).isTranslated),
                  onClick: Tr
                }, {
                  default: It(() => [
                    zD(ta(Q.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        w.value ? (Jt(), jn(ie(I), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: It(() => [
            yt(ie(C), {
              dir: ie(O.getDir)(ie(l)),
              lang: ie(l),
              class: "sx-sentence-selector__section"
            }, {
              default: It(() => [
                Me.value ? (Jt(), jn(ie(Zm), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ie(xo)
                }, {
                  default: It(() => [
                    Cn("p", null, ta(Q.$i18n("cx-publish-permission-warning")), 1),
                    Cn("p", null, [
                      Cn("strong", null, [
                        Cn("a", WD, ta(Q.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : Km("", !0),
                Et.value ? (Jt(), jn(ie(Zm), {
                  key: 1,
                  type: "error",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ie(T)
                }, {
                  default: It(() => [
                    Cn("p", null, [
                      Cn("strong", null, ta(Q.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    Cn("p", null, ta(Q.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : Km("", !0),
                yt(PT),
                Cn("div", XD, [
                  (Jt(!0), Ym(jD, null, OD(b.value, (mt) => (Jt(), jn(xA, {
                    id: mt.id,
                    key: `sub-section-${mt.id}`,
                    "sub-section": mt,
                    onBounceTranslation: E
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !gs.value && y.value ? (Jt(), jn(uD, {
              key: 0,
              onEditTranslation: no,
              onSelectNextSegment: ie(P),
              onSelectPreviousSegment: ie(M)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : gs.value ? (Jt(), jn(jA, {
              key: 2,
              onEditTranslation: no,
              onApplyTranslation: A,
              onSkipTranslation: oe,
              onSelectPreviousSegment: ie(M),
              onSelectNextSegment: ie(P)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Jt(), jn(dA, {
              key: 1,
              class: HD({ "mb-0": !n.value }),
              onConfigureOptions: Ve,
              onEditTranslation: no,
              onApplyTranslation: A,
              onSkipTranslation: oe,
              onSelectPreviousSegment: ie(M),
              onRetryTranslation: Ar
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Jt(), jn(ie(I), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: It(() => [
            yt(ie(dt), { class: "mt-0" })
          ]),
          _: 1
        })),
        yt(bT, {
          active: t.value,
          "onUpdate:active": ln[0] || (ln[0] = (mt) => t.value = mt)
        }, null, 8, ["active"]),
        yt(J5, {
          modelValue: ps.value,
          "onUpdate:modelValue": ln[1] || (ln[1] = (mt) => ps.value = mt),
          onDiscardTranslation: j
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const e6 = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: ZD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, t6 = window.Vue.resolveComponent, n6 = window.Vue.createVNode, o6 = window.Vue.normalizeClass, s6 = window.Vue.openBlock, a6 = window.Vue.createElementBlock;
function i6(e, t, n, o, s, a) {
  const r = t6("sx-sentence-selector");
  return s6(), a6("main", {
    class: o6(["sx-sentence-selector-view", a.classes])
  }, [
    n6(r)
  ], 2);
}
const r6 = /* @__PURE__ */ ge(e6, [["render", i6]]), l6 = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, c6 = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const u6 = window.Vue.resolveDirective, or = window.Vue.withDirectives, Rt = window.Vue.openBlock, kn = window.Vue.createElementBlock, sr = window.Vue.createCommentVNode, ar = window.Vue.Transition, mo = window.Vue.withCtx, Wo = window.Vue.createVNode, oa = window.Vue.createElementVNode, qn = window.Vue.unref, d6 = window.Vue.renderList, g6 = window.Vue.Fragment, p6 = window.Vue.normalizeClass, eh = window.Vue.createBlock, m6 = window.Vue.toDisplayString, h6 = window.Vue.createTextVNode, f6 = { class: "sx-quick-tutorial" }, w6 = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, v6 = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, _6 = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, S6 = { class: "sx-quick-tutorial__illustration" }, y6 = ["innerHTML"], x6 = ["innerHTML"], b6 = { class: "sx-quick-tutorial__step-indicator py-3" }, C6 = ["onClick"], k6 = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, $6 = {
  key: "secondary-point-1",
  class: "ma-0"
}, V6 = {
  key: "secondary-point-2",
  class: "ma-0"
}, E6 = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, th = window.Vue.ref, nh = window.Codex.CdxButton, L6 = window.Codex.CdxIcon, T6 = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = th(2), n = th(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = us();
    return (r, l) => {
      const c = u6("i18n");
      return Rt(), kn("section", f6, [
        Wo(qn(I), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: mo(() => [
            oa("section", w6, [
              Wo(ar, {
                name: "fade",
                mode: "out-in"
              }, {
                default: mo(() => [
                  s(1) ? or((Rt(), kn("h2", v6, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? or((Rt(), kn("h2", _6, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : sr("", !0)
                ]),
                _: 1
              })
            ]),
            oa("section", S6, [
              Wo(ar, { name: "mw-ui-animation-slide-start" }, {
                default: mo(() => [
                  s(1) ? (Rt(), kn("div", {
                    key: "illustration-1",
                    innerHTML: qn(c6)
                  }, null, 8, y6)) : s(2) ? (Rt(), kn("div", {
                    key: "illustration-2",
                    innerHTML: qn(l6)
                  }, null, 8, x6)) : sr("", !0)
                ]),
                _: 1
              })
            ]),
            oa("div", b6, [
              (Rt(!0), kn(g6, null, d6(t.value, (u) => (Rt(), kn("span", {
                key: `dot-${u}`,
                class: p6(["dot mx-1", { "dot-active": s(u) }]),
                role: "button",
                onClick: (i) => n.value = u
              }, null, 10, C6))), 128))
            ]),
            oa("section", k6, [
              Wo(ar, {
                name: "fade",
                mode: "out-in"
              }, {
                default: mo(() => [
                  s(1) ? or((Rt(), kn("h3", $6, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? or((Rt(), kn("h3", V6, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : sr("", !0)
                ]),
                _: 1
              })
            ]),
            oa("div", E6, [
              Wo(ar, {
                name: "fade",
                mode: "out-in"
              }, {
                default: mo(() => [
                  s(1) ? (Rt(), eh(qn(nh), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: mo(() => [
                      Wo(qn(L6), { icon: qn(ls) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Rt(), eh(qn(nh), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: qn(a)
                  }, {
                    default: mo(() => [
                      h6(m6(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : sr("", !0)
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
const A6 = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: T6
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, D6 = window.Vue.resolveComponent, P6 = window.Vue.createVNode, B6 = window.Vue.normalizeClass, F6 = window.Vue.openBlock, N6 = window.Vue.createElementBlock;
function M6(e, t, n, o, s, a) {
  const r = D6("sx-quick-tutorial");
  return F6(), N6("main", {
    class: B6(["sx-quick-tutorial-view", a.classes])
  }, [
    P6(r)
  ], 2);
}
const U6 = /* @__PURE__ */ ge(A6, [["render", M6]]);
const I6 = window.Vue.resolveDirective, oh = window.Vue.createElementVNode, R6 = window.Vue.withDirectives, z6 = window.Vue.unref, O6 = window.Vue.withCtx, j6 = window.Vue.createVNode, H6 = window.Vue.openBlock, q6 = window.Vue.createElementBlock, G6 = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, W6 = { class: "sx-editor__original-content-panel__header mb-2" }, X6 = ["lang", "dir", "innerHTML"], sh = window.Vue.ref, K6 = window.Vue.onMounted, Y6 = {
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
        u.href = J.getPageUrl(l, u.title), u.target = "_blank";
    }, o = sh(null), s = sh(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return K6(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const c = I6("i18n");
      return H6(), q6("section", G6, [
        R6(oh("h5", W6, null, 512), [
          [c, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        j6(z6(A_), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: O6(() => [
            oh("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, X6)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, Q6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const J6 = window.Vue.unref, sa = window.Vue.createElementVNode, ah = window.Vue.resolveDirective, Rc = window.Vue.withDirectives, Z6 = window.Vue.normalizeClass, eP = window.Vue.openBlock, tP = window.Vue.createElementBlock, nP = window.Vue.createCommentVNode, oP = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, sP = { class: "sx-editor__feedback-overlay-content px-4" }, aP = ["innerHTML"], iP = { class: "sx-editor__feedback-overlay-content__title" }, rP = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, zc = window.Vue.computed, lP = {
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
      const c = ah("i18n"), u = ah("i18n-html");
      return e.showFeedback ? (eP(), tP("div", oP, [
        sa("div", sP, [
          sa("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: J6(Q6)
          }, null, 8, aP),
          Rc(sa("h2", iP, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Rc(sa("p", rP, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Rc(sa("p", {
            class: Z6(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [u, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : nP("", !0);
    };
  }
}, cP = window.Vuex.useStore, uP = () => {
  const e = cP(), t = ed(), { selectNextTranslationUnit: n } = ds(), {
    isSectionTitleSelected: o,
    sourceSection: s,
    selectedContentTranslationUnit: a
  } = te(), { getCurrentTitleByLanguage: r } = rn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: c
  } = D(), { currentMTProvider: u } = Be(e);
  return (i) => x(void 0, null, function* () {
    if (!o.value) {
      const d = document.createElement("div");
      d.innerHTML = i, d.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = d.innerHTML;
    }
    a.value instanceof ut && (i = (yield Cw(
      i,
      r(c.value, l.value),
      c.value
    )) || i), s.value.setTranslationForSelectedTranslationUnit(
      i,
      u.value
    ), t(), n();
  });
};
const Je = window.Vue.unref, Oc = window.Vue.openBlock, jc = window.Vue.createBlock, ih = window.Vue.createCommentVNode, rh = window.Vue.createVNode, dP = window.Vue.createElementVNode, gP = window.Vue.withCtx, pP = { class: "sx-editor__editing-surface-container grow" }, Hc = window.Vue.ref, mP = window.Vue.computed;
window.Vue.inject;
const hP = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Hc(!1), o = nt(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: c, originalContent: u, title: i } = history.state, d = Hc(null), g = Hc(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = Aw(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = D(), { isSectionTitleSelected: v, sourceSection: w } = te(), y = mP(
      () => on.calculateScore(
        d.value,
        c,
        f.value
      )
    ), b = uP(), S = (k) => x(this, null, function* () {
      d.value = k, g.value = !0;
      const V = new Promise((L) => setTimeout(L, 2e3));
      let U = Promise.resolve();
      r ? w.value.editedTranslation = k : U = b(k), y.value === 0 && l ? p() : y.value > 0 && m(), yield Promise.all([V, U]), g.value = !1, a();
    });
    return r ? mw.cx.eventlogging.stats.publishEditorStepAccess() : mw.cx.eventlogging.stats.editingStepAccess(!0), (k, V) => (Oc(), jc(Je(I), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: gP(() => [
        Je(u) ? (Oc(), jc(Y6, {
          key: 0,
          language: Je(h),
          dir: Je(O.getDir)(Je(h)),
          "original-content": Je(u)
        }, null, 8, ["language", "dir", "original-content"])) : ih("", !0),
        n.value ? ih("", !0) : (Oc(), jc(Je(dt), { key: 1 })),
        dP("div", pP, [
          rh(lP, {
            "edited-translation": d.value,
            "show-feedback": g.value,
            "proposed-translation": Je(c)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          rh(IE, {
            content: Je(c),
            language: Je(f),
            dir: Je(O.getDir)(Je(f)),
            title: Je(i),
            "use-text": !!Je(v),
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
const fP = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: hP
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
}, wP = window.Vue.resolveComponent, vP = window.Vue.createVNode, _P = window.Vue.normalizeClass, SP = window.Vue.openBlock, yP = window.Vue.createElementBlock;
function xP(e, t, n, o, s, a) {
  const r = wP("sx-editor");
  return SP(), yP("main", {
    class: _P(["sx-editor-view", a.classes])
  }, [
    vP(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const bP = /* @__PURE__ */ ge(fP, [["render", xP]]);
const Zt = window.Vue.unref, ho = window.Vue.createVNode, aa = window.Vue.withCtx, CP = window.Vue.resolveDirective, kP = window.Vue.withDirectives, $P = window.Vue.openBlock, VP = window.Vue.createBlock, lh = window.Codex.CdxButton, ch = window.Codex.CdxIcon, EP = {
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
      const a = CP("i18n");
      return $P(), VP(Zt(I), { class: "ma-0 sx-publisher__header" }, {
        default: aa(() => [
          ho(Zt(C), {
            shrink: "",
            class: "me-2"
          }, {
            default: aa(() => [
              ho(Zt(lh), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: aa(() => [
                  ho(Zt(ch), { icon: Zt(rs) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          kP(ho(Zt(C), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          ho(Zt(C), { shrink: "" }, {
            default: aa(() => [
              ho(Zt(lh), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: aa(() => [
                  ho(Zt(ch), { icon: Zt(Yy) }, null, 8, ["icon"])
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
}, LP = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, TP = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, uh = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const qc = window.Vue.createElementVNode, dh = window.Vue.toDisplayString, Gc = window.Vue.unref, Wc = window.Vue.withCtx, gh = window.Vue.createVNode, AP = window.Vue.openBlock, DP = window.Vue.createBlock, PP = window.Vue.createCommentVNode, BP = ["innerHTML"], FP = ["textContent"], NP = ["textContent"], Xc = window.Vue.computed, MP = {
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
    const t = pe(), n = e, o = {
      pending: {
        svg: LP,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: TP,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: uh,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: uh,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = Xc(() => o[n.status].svg), a = Xc(() => o[n.status].title), r = Xc(() => o[n.status].subtitle);
    return (l, c) => e.active ? (AP(), DP(Gc(kt), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: Wc(() => [
        gh(Gc(I), { class: "ma-4" }, {
          default: Wc(() => [
            gh(Gc(C), null, {
              default: Wc(() => [
                qc("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, BP),
                qc("h2", {
                  textContent: dh(a.value)
                }, null, 8, FP),
                qc("p", {
                  class: "ma-0",
                  textContent: dh(r.value)
                }, null, 8, NP)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : PP("", !0);
  }
};
const lt = window.Vue.unref, zt = window.Vue.createVNode, $n = window.Vue.withCtx, UP = window.Vue.resolveDirective, IP = window.Vue.withDirectives, ph = window.Vue.toDisplayString, RP = window.Vue.createTextVNode, Kc = window.Vue.openBlock, mh = window.Vue.createElementBlock, zP = window.Vue.createCommentVNode, Bw = window.Vue.createElementVNode, OP = window.Vue.createBlock, jP = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, HP = ["src"], qP = ["textContent"], GP = /* @__PURE__ */ Bw("p", { class: "mt-0" }, null, -1), WP = window.Vue.computed, XP = window.Vue.inject, KP = window.Vue.ref, hh = window.Codex.CdxButton, YP = window.Codex.CdxIcon, QP = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Pf,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = KP(""), s = () => n("close"), a = () => n("publish", o.value), r = XP("breakpoints"), l = WP(() => r.value.mobile);
    return (c, u) => {
      const i = UP("i18n");
      return e.active && e.captchaDetails ? (Kc(), OP(lt(kt), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: $n(() => [
          zt(lt(I), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: $n(() => [
              zt(lt(C), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: $n(() => [
                  zt(lt(hh), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": c.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: $n(() => [
                      zt(lt(YP), { icon: lt(rs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              IP(zt(lt(C), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              zt(lt(C), {
                shrink: "",
                class: "justify-center"
              }, {
                default: $n(() => [
                  zt(lt(hh), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: $n(() => [
                      RP(ph(c.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          zt(lt(mr))
        ]),
        default: $n(() => [
          Bw("div", jP, [
            e.captchaDetails.type === "image" ? (Kc(), mh("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, HP)) : (Kc(), mh("p", {
              key: 1,
              textContent: ph(e.captchaDetails.question)
            }, null, 8, qP)),
            GP,
            zt(lt(I), { class: "ma-0" }, {
              default: $n(() => [
                zt(lt(C), null, {
                  default: $n(() => [
                    zt(lt(cu), {
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
      }, 8, ["fullscreen"])) : zP("", !0);
    };
  }
};
const Gn = window.Vue.unref, ir = window.Vue.createVNode, Xo = window.Vue.withCtx, Ko = window.Vue.createElementVNode, JP = window.Vue.resolveDirective, ZP = window.Vue.withDirectives, e9 = window.Vue.renderList, t9 = window.Vue.Fragment, Yc = window.Vue.openBlock, n9 = window.Vue.createElementBlock, fh = window.Vue.toDisplayString, wh = window.Vue.createTextVNode, o9 = window.Vue.isRef, s9 = window.Vue.normalizeClass, vh = window.Vue.createBlock, a9 = { class: "mw-ui-dialog__header" }, i9 = { class: "row ma-0 px-4 py-3" }, r9 = { class: "col shrink justify-center" }, l9 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, c9 = { class: "mb-0" }, u9 = { class: "pa-4" }, d9 = window.Codex.CdxField, g9 = window.Codex.CdxRadio, p9 = window.Vuex.useStore, rr = window.Vue.computed, m9 = window.Codex.CdxButton, h9 = window.Codex.CdxIcon, f9 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = p9(), { target: s, PUBLISHING_TARGETS: a } = Vt(), r = rr(() => o.state.translator.isAnon), l = pe(), { sourceSection: c } = te(), { isCurrentSectionPresent: u, isPresentLeadSection: i } = pt(), d = rr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), g = rr(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), p = rr(() => {
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
    }), m = () => n("update:active", !1);
    return (h, f) => {
      const v = JP("i18n");
      return Yc(), vh(Gn(kt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: h.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: f[1] || (f[1] = (w) => h.$emit("update:active", w)),
        onClose: m
      }, {
        header: Xo(() => [
          Ko("div", a9, [
            Ko("div", i9, [
              Ko("div", r9, [
                ir(Gn(m9), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": h.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: m
                }, {
                  default: Xo(() => [
                    ir(Gn(h9), { icon: Gn(yf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Ko("div", l9, [
                ZP(Ko("h4", c9, null, 512), [
                  [v, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            ir(Gn(mr))
          ])
        ]),
        default: Xo(() => [
          Ko("div", u9, [
            ir(Gn(d9), { "is-fieldset": "" }, {
              default: Xo(() => [
                (Yc(!0), n9(t9, null, e9(p.value, (w, y) => (Yc(), vh(Gn(g9), {
                  key: "publish-options-radio-" + w.value,
                  modelValue: Gn(s),
                  "onUpdate:modelValue": [
                    f[0] || (f[0] = (b) => o9(s) ? s.value = b : null),
                    m
                  ],
                  class: s9(y < p.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": w.value,
                  disabled: w.disabled,
                  name: "publish-options"
                }, {
                  description: Xo(() => [
                    wh(fh(w.description), 1)
                  ]),
                  default: Xo(() => [
                    wh(fh(w.label) + " ", 1)
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
const Ot = window.Vue.unref, _h = window.Vue.toDisplayString, Sh = window.Vue.createElementVNode, w9 = window.Vue.resolveDirective, Yo = window.Vue.createVNode, v9 = window.Vue.withDirectives, ia = window.Vue.withCtx, Qc = window.Vue.openBlock, yh = window.Vue.createBlock, xh = window.Vue.createCommentVNode, _9 = window.Vue.Fragment, S9 = window.Vue.createElementBlock, y9 = window.Vue.normalizeClass, x9 = ["textContent"], b9 = ["textContent"], Qo = window.Vue.computed, bh = window.Vue.ref, C9 = window.Vue.watch, Ch = window.Codex.CdxButton, kh = window.Codex.CdxIcon, k9 = window.Codex.CdxMessage, $9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = bh(0), o = bh(null);
    C9(o, () => {
      var m;
      const p = (m = o.value) == null ? void 0 : m.$el;
      if (p instanceof HTMLElement) {
        const h = p.querySelector("a");
        h && h.setAttribute("target", "_blank");
      }
    });
    const s = Qo(
      () => {
        var p;
        return (p = t.publishFeedbackMessages) == null ? void 0 : p[n.value];
      }
    ), a = Qo(() => {
      var p;
      return ((p = s.value) == null ? void 0 : p.status) || "notice";
    }), r = Qo(() => a.value === "notice"), l = Qo(
      () => `sx-publisher__review-info--${a.value}`
    ), c = pe(), u = Qo(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.text;
    }), i = Qo(() => {
      var p;
      return r.value ? c.i18n("cx-sx-publisher-review-info") : ((p = s.value) == null ? void 0 : p.title) || c.i18n("cx-sx-publisher-review-info-error");
    }), d = () => {
      const p = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + p) % p;
    }, g = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (p, m) => {
      const h = w9("i18n-html");
      return Qc(), yh(Ot(k9), {
        type: a.value,
        class: y9(["sx-publisher__review-info", l.value]),
        icon: r.value ? Ot(Zy) : null
      }, {
        default: ia(() => [
          Sh("h5", {
            textContent: _h(i.value)
          }, null, 8, x9),
          r.value ? xh("", !0) : (Qc(), S9(_9, { key: 0 }, [
            Sh("p", {
              textContent: _h(u.value)
            }, null, 8, b9),
            Yo(Ot(I), {
              justify: "between",
              class: "ma-0"
            }, {
              default: ia(() => [
                v9(Yo(Ot(C), {
                  ref_key: "learnMoreContainer",
                  ref: o,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (Qc(), yh(Ot(C), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: ia(() => [
                    Yo(Ot(Ch), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: d
                    }, {
                      default: ia(() => [
                        Yo(Ot(kh), { icon: Ot(zu) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    Yo(Ot(Ch), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: ia(() => [
                        Yo(Ot(kh), { icon: Ot(ls) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })) : xh("", !0)
              ]),
              _: 1
            })
          ], 64))
        ]),
        _: 1
      }, 8, ["type", "class", "icon"]);
    };
  }
}, V9 = (e) => {
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
}, E9 = window.Vuex.useStore, L9 = window.Vue.computed, T9 = () => {
  const e = E9(), { currentTranslation: t } = Wt(), { currentMTProvider: n } = Be(e), { currentTargetPageTitle: o } = ot(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = D(), { sourceSection: c } = te(), u = $t(), i = L9(() => {
    const m = {
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
    if (l.value ? (m.translation_source_section = l.value, m.translation_type = "section") : m.translation_type = "article", t.value) {
      m.translation_id = t.value.translationId, m.translation_target_title = t.value.targetTitle;
      const h = t.value.targetSectionTitle;
      h && (m.translation_target_section = h);
    } else
      o.value && (m.translation_target_title = o.value);
    return n.value && (m.translation_provider = ae.getProviderForInstrumentation(n.value)), m.human_modification_rate = on.getMTScoreForPageSection(
      c.value,
      a.value
    ) / 100, m.human_modification_threshold = on.getMtModificationThreshold(), m;
  });
  return {
    logPublishAttemptEvent: () => u(ce({
      event_type: "publish_attempt"
    }, i.value)),
    logPublishSuccessEvent: (m, h) => {
      u(ce({
        event_type: "publish_success",
        published_page_id: m,
        published_revision_id: h
      }, i.value)), mw.cx.eventlogging.stats.published(!0);
    },
    logPublishFailureEvent: () => u(ce({
      event_type: "publish_failure"
    }, i.value))
  };
}, A9 = window.Vue.computed, $h = window.Vue.ref, D9 = window.Vuex.useStore, P9 = () => {
  const e = D9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = D(), { sourceSection: s } = te(), { targetPageTitleForPublishing: a } = Pa(), r = Lw(), { isPresentLeadSection: l } = pt(), { sectionSuggestion: c } = Ee(), u = A9(
    () => {
      var S, k;
      return l.value ? Qn.LEAD_SECTION_DUMMY_TITLE : (k = c.value) == null ? void 0 : k.presentSections[(S = s.value) == null ? void 0 : S.sourceSectionTitleForPublishing];
    }
  ), { target: i, PUBLISHING_TARGETS: d } = Vt(), g = $h(!1), p = $h("pending"), m = () => g.value = !1, h = ed(), {
    logPublishAttemptEvent: f,
    logPublishSuccessEvent: v,
    logPublishFailureEvent: w
  } = T9(), y = (S, k) => x(void 0, null, function* () {
    f();
    const V = yield h();
    if (V instanceof Zn)
      return w(), { publishFeedbackMessage: V, targetUrl: null };
    const U = V, L = a.value, B = {
      html: V9(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: L,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: r.value,
      publishTarget: i.value,
      sectionTranslationId: U
    };
    u.value && (B.existingSectionTitle = u.value), S && (B.captchaId = S, B.captchaWord = k);
    const z = yield Ct.publishTranslation(
      B
    );
    return z.publishFeedbackMessage === null ? v(z.pageId, z.revisionId) : w(), z;
  });
  return {
    closePublishDialog: m,
    doPublish: (S = null, k = null) => x(void 0, null, function* () {
      p.value = "pending", g.value = !0;
      let V;
      try {
        V = yield y(
          k == null ? void 0 : k.id,
          S
        );
      } catch (U) {
        if (U instanceof os)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw mw.cx.eventlogging.stats.publishFailed(!0), U;
      }
      return V;
    }),
    isPublishDialogActive: g,
    publishStatus: p
  };
}, B9 = window.Vue.computed, F9 = () => {
  const e = nt(), { sourceSection: t } = te(), { getCurrentTitleByLanguage: n } = rn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = D(), a = B9(
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
}, N9 = () => {
  const { targetLanguageURLParameter: e } = D(), { sourceSection: t } = te();
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
}, M9 = window.Vue.ref, U9 = window.Vue.computed, I9 = () => {
  const e = N9(), { target: t, PUBLISHING_TARGETS: n } = Vt(), { targetPageTitleForPublishing: o } = Pa(), s = M9([]), a = U9(
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
      if (!Dw() && t.value !== n.SANDBOX) {
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
}, R9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = Vt(), { currentSourcePage: n } = ot(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = D(), { sourceSection: a } = te(), { targetPageTitleForPublishing: r } = Pa();
  return (l) => x(void 0, null, function* () {
    const c = r.value, u = n.value.title, i = new mw.Title(u), d = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== d.user)
      try {
        yield xr.addWikibaseLink(
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
}, Vh = window.Vue.ref, z9 = () => {
  const e = Vh(!1), t = Vh(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const re = window.Vue.unref, qe = window.Vue.createVNode, O9 = window.Vue.resolveDirective, Jc = window.Vue.withDirectives, ra = window.Vue.openBlock, la = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Eh = window.Vue.toDisplayString, j9 = window.Vue.createTextVNode, Jo = window.Vue.createElementVNode, Zo = window.Vue.withCtx, Lh = window.Vue.normalizeClass, H9 = { class: "sx-publisher" }, q9 = {
  key: 0,
  class: "mb-2"
}, G9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, W9 = { key: 0 }, X9 = { key: 1 }, K9 = ["href"], Y9 = ["innerHTML"], Q9 = { class: "sx-publisher__section-preview pa-5" }, J9 = ["innerHTML"], lr = window.Vue.computed, Z9 = window.Vue.onMounted, eB = window.Vue.ref, tB = window.Vue.watch, Th = window.Codex.CdxButton, Zc = window.Codex.CdxIcon, nB = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = te(), { sectionSuggestion: n } = Ee(), { isCurrentSectionPresent: o, isPresentLeadSection: s } = pt(), {
      targetLanguageURLParameter: a,
      sectionURLParameter: r
    } = D(), l = pe(), c = lr(
      () => {
        var R;
        return s.value ? l.i18n("cx-sx-present-lead-section-label") : (R = t.value) == null ? void 0 : R.title;
      }
    ), { target: u, PUBLISHING_TARGETS: i } = Vt(), d = lr(() => u.value === i.SANDBOX ? l.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : u.value === i.EXPAND ? l.i18n(
      "cx-sx-publisher-publish-panel-expand-section-result"
    ) : u.value === i.REPLACE ? l.i18n(
      "cx-sx-publisher-publish-panel-replace-section-result"
    ) : t.value.isLeadSection ? l.i18n("cx-sx-publisher-publish-panel-lead-section-result") : l.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: g,
      captchaDialogOn: p,
      handleCaptchaError: m,
      onCaptchaDialogClose: h
    } = z9(), {
      publishFeedbackMessages: f,
      isPublishingDisabled: v,
      addPublishFeedbackMessage: w,
      clearPublishFeedbackMessages: y,
      initializePublishFeedbackMessages: b
    } = I9(), S = R9(), { doPublish: k, isPublishDialogActive: V, publishStatus: U, closePublishDialog: L } = P9(), B = (R = null) => x(this, null, function* () {
      if (v.value)
        return;
      const q = yield k(R, g.value);
      if (!q)
        return;
      const { publishFeedbackMessage: G, targetUrl: me } = q;
      if (m(G)) {
        L();
        return;
      } else
        G && w(G);
      U.value = v.value ? "failure" : "success", setTimeout(() => {
        if (v.value) {
          L();
          return;
        }
        S(me);
      }, 1e3);
    });
    Z9(() => {
      b(), mw.cx.eventlogging.stats.publishStepAccess();
    });
    const z = F9(), X = eB(!1), le = () => X.value = !0;
    tB(X, (R) => {
      R || (y(), b());
    });
    const ne = lr(() => {
      var R, q;
      return s.value ? l.i18n("cx-sx-present-lead-section-label") : (q = (R = n.value) == null ? void 0 : R.presentSections) == null ? void 0 : q[r.value];
    }), N = lr(() => {
      var G;
      const R = J.getPageUrl(
        a.value,
        (G = n.value) == null ? void 0 : G.targetTitle
      ), q = s.value ? "" : (ne.value || "").replace(/ /g, "_");
      return `${R}#${q}`;
    });
    return (R, q) => {
      const G = O9("i18n");
      return ra(), la("section", H9, [
        qe(EP, {
          "is-publishing-disabled": re(v),
          onPublishTranslation: B
        }, null, 8, ["is-publishing-disabled"]),
        Jo("div", {
          class: Lh(["sx-publisher__publish-panel", re(o) ? "py-4" : "pa-4"])
        }, [
          re(o) ? (ra(), la("div", G9, [
            re(s) ? Jc((ra(), la("h5", W9, null, 512)), [
              [G, void 0, "cx-sx-publisher-publish-panel-existing-lead-section-notice"]
            ]) : Jc((ra(), la("h5", X9, null, 512)), [
              [G, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            Jo("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: N.value,
              target: "_blank"
            }, [
              j9(Eh(ne.value) + " ", 1),
              qe(re(Zc), { icon: re(Ta) }, null, 8, ["icon"])
            ], 8, K9)
          ])) : Jc((ra(), la("h5", q9, null, 512)), [
            [G, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          Jo("div", {
            class: Lh({ "px-4 mt-4": re(o) })
          }, [
            Jo("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: d.value
            }, null, 8, Y9),
            qe(re(I), {
              justify: "end",
              class: "ma-0"
            }, {
              default: Zo(() => [
                qe(re(C), { shrink: "" }, {
                  default: Zo(() => [
                    qe(re(Th), {
                      weight: "quiet",
                      "aria-label": R.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: le
                    }, {
                      default: Zo(() => [
                        qe(re(Zc), { icon: re(cx) }, null, 8, ["icon"])
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
        qe($9, { "publish-feedback-messages": re(f) }, null, 8, ["publish-feedback-messages"]),
        Jo("section", Q9, [
          qe(re(I), { class: "pb-5 ma-0" }, {
            default: Zo(() => [
              qe(re(C), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: Eh(c.value)
              }, null, 8, ["textContent"]),
              qe(re(C), { shrink: "" }, {
                default: Zo(() => [
                  qe(re(Th), {
                    weight: "quiet",
                    "aria-label": R.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: re(z)
                  }, {
                    default: Zo(() => [
                      qe(re(Zc), { icon: re(Iu) }, null, 8, ["icon"])
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
            innerHTML: re(t).translationHtml
          }, null, 8, J9)
        ]),
        qe(f9, {
          active: X.value,
          "onUpdate:active": q[0] || (q[0] = (me) => X.value = me)
        }, null, 8, ["active"]),
        qe(QP, {
          active: re(p),
          "captcha-details": re(g),
          onClose: re(h),
          onPublish: q[1] || (q[1] = (me) => B(me))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        qe(MP, {
          active: re(V),
          status: re(U)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const oB = {
  name: "SxPublisherView",
  components: {
    SxPublisher: nB
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, sB = window.Vue.resolveComponent, aB = window.Vue.createVNode, iB = window.Vue.normalizeClass, rB = window.Vue.openBlock, lB = window.Vue.createElementBlock;
function cB(e, t, n, o, s, a) {
  const r = sB("sx-publisher");
  return rB(), lB("main", {
    class: iB(["sx-publisher-view", a.classes])
  }, [
    aB(r)
  ], 2);
}
const uB = /* @__PURE__ */ ge(oB, [["render", cB]]);
const jt = window.Vue.unref, Wn = window.Vue.createVNode, fo = window.Vue.withCtx, eu = window.Vue.toDisplayString, tu = window.Vue.createElementVNode, dB = window.Vue.openBlock, gB = window.Vue.createBlock, pB = ["textContent"], mB = ["textContent"], hB = ["textContent"], Fw = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: ss,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (dB(), gB(jt(I), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: jt(O.getDir)(e.suggestion.language)
    }, {
      default: fo(() => [
        Wn(jt(C), { shrink: "" }, {
          default: fo(() => [
            Wn(jt(xu), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Wn(jt(C), { class: "ms-4" }, {
          default: fo(() => [
            Wn(jt(I), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: fo(() => [
                Wn(jt(C), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: fo(() => [
                    tu("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: eu(e.suggestion.title)
                    }, null, 8, pB)
                  ]),
                  _: 1
                }),
                Wn(jt(C), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: fo(() => [
                    tu("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: eu(e.suggestion.description)
                    }, null, 8, mB)
                  ]),
                  _: 1
                }),
                Wn(jt(C), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: fo(() => [
                    Wn(jt(et), {
                      icon: jt(fv),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    tu("small", {
                      textContent: eu((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, hB)
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
const ca = window.Vue.unref, ua = window.Vue.openBlock, nu = window.Vue.createBlock, fB = window.Vue.createCommentVNode, wB = window.Vue.resolveDirective, vB = window.Vue.withDirectives, Ah = window.Vue.createElementBlock, _B = window.Vue.renderList, SB = window.Vue.Fragment, yB = window.Vue.normalizeClass, xB = window.Vue.withCtx, bB = {
  key: 1,
  class: "sx-article-search__empty-state"
}, Dh = window.Vue.computed, CB = window.Vue.ref, kB = {
  __name: "SearchResultsCard",
  props: {
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
    const { sourceLanguageURLParameter: t } = D(), n = Dh(() => O.getAutonym(t.value)), o = e, s = CB(null), a = (d) => s.value = d, r = () => s.value = null, l = (d) => {
      var g;
      return ((g = o.selectedItem) == null ? void 0 : g.title) === d.title && !s.value || s.value === d.pageId;
    }, c = Dh(() => o.searchInput), { searchResultsLoading: u, searchResultsSlice: i } = Wu(
      t,
      c
    );
    return (d, g) => {
      const p = wB("i18n");
      return ua(), nu(ca(Ze), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: xB(() => [
          ca(u) ? (ua(), nu(ca(dt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : ca(i).length === 0 ? vB((ua(), Ah("p", bB, null, 512)), [
            [p, [
              c.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : fB("", !0),
          (ua(!0), Ah(SB, null, _B(ca(i), (m) => (ua(), nu(Fw, {
            key: m.pageId,
            suggestion: m,
            class: yB({
              "sx-article-search__results-selected": l(m)
            }),
            onMouseenter: (h) => a(m.pageId),
            onMouseleave: r,
            onClick: (h) => d.$emit("suggestion-clicked", m)
          }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const $B = window.Vue.toDisplayString, VB = window.Vue.createElementVNode, EB = window.Vue.renderList, LB = window.Vue.Fragment, ou = window.Vue.openBlock, TB = window.Vue.createElementBlock, AB = window.Vue.normalizeClass, Ph = window.Vue.createBlock, DB = window.Vue.unref, Bh = window.Vue.withCtx, PB = ["textContent"], BB = window.Vue.ref, Fh = {
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
    const n = e, o = BB(null), s = (l) => o.value = l, a = () => o.value = null, r = (l) => {
      var c;
      return ((c = n.selectedItem) == null ? void 0 : c.title) === l.title && !o.value || o.value === l.pageId;
    };
    return (l, c) => (ou(), Ph(DB(Ze), { class: "sx-article-search__suggestions pa-0" }, {
      header: Bh(() => [
        VB("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: $B(e.cardTitle)
        }, null, 8, PB)
      ]),
      default: Bh(() => [
        (ou(!0), TB(LB, null, EB(e.suggestions, (u) => (ou(), Ph(Fw, {
          key: u.pageId,
          suggestion: u,
          class: AB({
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
}, FB = window.Vue.computed, NB = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), Nh = "other", MB = (e) => FB((t) => {
  const o = e.value.slice(0, 3), s = {
    value: Nh,
    props: {
      icon: Sv,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== Nh);
  return NB(a, o) ? t : [...o.map((l) => ({
    value: l,
    props: {
      label: O.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), s];
}), UB = window.Vue.computed, IB = () => {
  const { supportedLanguageCodes: e } = Va(), { targetLanguageURLParameter: t } = D();
  return { getSuggestedSourceLanguages: (o) => UB(() => {
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
}, RB = window.Vue.ref, zB = () => {
  const e = RB([]), t = () => {
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
const OB = window.Vue.resolveDirective, jB = window.Vue.createElementVNode, su = window.Vue.withDirectives, we = window.Vue.unref, da = window.Vue.withCtx, en = window.Vue.createVNode, ga = window.Vue.openBlock, Mh = window.Vue.createBlock, HB = window.Vue.createCommentVNode, au = window.Vue.createElementBlock, qB = window.Vue.Fragment, GB = window.Vue.vShow, pa = window.Vue.withModifiers, ma = window.Vue.withKeys, WB = ["onKeydown"], XB = { class: "mb-0" }, KB = {
  key: 2,
  class: "sx-article-search__empty-state"
}, ha = window.Vue.ref, YB = window.Vue.onMounted, fa = window.Vue.computed, Uh = window.Vue.watch, QB = window.Vue.inject, JB = window.Vuex.useStore, ZB = window.Codex.CdxButton, e7 = window.Codex.CdxIcon, t7 = window.Codex.CdxSearchInput, n7 = 3, o7 = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = ha(""), n = ha(!1), o = ha(null), s = ha(!1), { previousLanguages: a, addLanguageToHistory: r } = zB(), l = JB(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = D(), { supportedLanguageCodes: i } = Va(), { searchResultsSlice: d } = Wu(c, t), { getSuggestedSourceLanguages: g } = IB(), p = g(a), m = MB(
      p
    ), h = nt(), { fetchAllTranslations: f } = cs();
    YB(() => x(this, null, function* () {
      var P;
      f(), r(c.value), (P = o.value) == null || P.focus();
    }));
    const v = () => {
      h.push({ name: "dashboard" });
    }, w = Af(), y = (P) => {
      w(P, u.value), r(P);
    }, b = (P) => {
      if (P === "other") {
        s.value = !0;
        return;
      }
      y(P);
    };
    Uh(
      c,
      () => {
        var P;
        l.dispatch("mediawiki/fetchNearbyPages"), (P = o.value) == null || P.focus();
      },
      { immediate: !0 }
    );
    const S = $t();
    Uh(t, () => {
      n.value || (n.value = !0, S({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const k = () => {
      s.value = !1;
    }, V = (P) => {
      s.value = !1, b(P);
    }, { fetchPreviousEditsInSource: U, previousEditsInSource: L } = hf(), B = ha([]);
    (() => U().then(() => L.value.length > 0 ? So.fetchPages(
      c.value,
      L.value
    ) : []).then((P) => {
      P = P.slice(0, n7), P = P.sort(
        (M, oe) => L.value.indexOf(M.title) - L.value.indexOf(oe.title)
      ), B.value = P;
    }))();
    const X = fa(() => l.getters["mediawiki/getNearbyPages"]), le = QB("breakpoints"), ne = fa(() => le.value.mobile), N = Da(), R = fa(
      () => B.value && B.value.length
    ), q = fa(
      () => X.value && X.value.length
    ), { next: G, prev: me, keyboardNavigationContainer: $e, selectedItem: Se } = uw(t, d, B), be = (P) => N(
      P.title,
      c.value,
      u.value,
      Ke.value
    ), Ke = fa(() => t.value ? "search_result" : R.value ? "suggestion_recent_edit" : q.value ? "suggestion_nearby" : "");
    return (P, M) => {
      const oe = OB("i18n");
      return ga(), au("section", {
        ref_key: "keyboardNavigationContainer",
        ref: $e,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          M[5] || (M[5] = ma(pa((..._) => we(G) && we(G)(..._), ["stop", "prevent"]), ["tab"])),
          M[6] || (M[6] = ma(pa((..._) => we(G) && we(G)(..._), ["stop", "prevent"]), ["down"])),
          M[7] || (M[7] = ma(pa((..._) => we(me) && we(me)(..._), ["stop", "prevent"]), ["up"])),
          ma(pa(v, ["stop", "prevent"]), ["esc"]),
          M[8] || (M[8] = ma(pa((_) => be(we(Se)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        en(we(I), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: da(() => [
            en(we(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: da(() => [
                su(jB("h5", XB, null, 512), [
                  [oe, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            en(we(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: da(() => [
                en(we(ZB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": P.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: v
                }, {
                  default: da(() => [
                    en(we(e7), { icon: we(rs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        en(we(t7), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": M[0] || (M[0] = (_) => t.value = _),
          class: "sx-article-search__search-input",
          placeholder: P.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        en(we(Ca), {
          class: "sx-article-search__language-button-group",
          items: we(m),
          active: we(c),
          onSelect: b
        }, null, 8, ["items", "active"]),
        t.value ? HB("", !0) : (ga(), au(qB, { key: 0 }, [
          R.value ? (ga(), Mh(Fh, {
            key: 0,
            "card-title": P.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: B.value,
            "selected-item": we(Se),
            onSuggestionClicked: M[1] || (M[1] = (_) => be(_))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : q.value ? (ga(), Mh(Fh, {
            key: 1,
            "card-title": P.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: X.value,
            onSuggestionClicked: M[2] || (M[2] = (_) => be(_))
          }, null, 8, ["card-title", "suggestions"])) : su((ga(), au("p", KB, null, 512)), [
            [oe, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        su(en(kB, {
          "search-input": t.value,
          "selected-item": we(Se),
          onSuggestionClicked: M[3] || (M[3] = (_) => be(_))
        }, null, 8, ["search-input", "selected-item"]), [
          [GB, !!t.value]
        ]),
        en(we(kt), {
          value: s.value,
          "onUpdate:value": M[4] || (M[4] = (_) => s.value = _),
          class: "sx-article-search-language-selector",
          fullscreen: ne.value,
          header: ne.value,
          title: P.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: k
        }, {
          default: da(() => [
            en(we(dw), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: we(i),
              suggestions: we(p),
              placeholder: P.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: V,
              onClose: k
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, WB);
    };
  }
};
const s7 = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: o7
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, a7 = window.Vue.resolveComponent, i7 = window.Vue.createVNode, r7 = window.Vue.normalizeClass, l7 = window.Vue.openBlock, c7 = window.Vue.createElementBlock;
function u7(e, t, n, o, s, a) {
  const r = a7("sx-article-search");
  return l7(), c7("main", {
    class: r7(["sx-article-search-view", a.classes])
  }, [
    i7(r)
  ], 2);
}
const d7 = /* @__PURE__ */ ge(s7, [["render", u7]]), g7 = () => {
  const e = Da(), t = Ju(), { logDashboardOpenEvent: n } = fw(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s,
    pageURLParameter: a
  } = D();
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
}, p7 = window.Vuex.useStore, m7 = [
  {
    path: "",
    name: "dashboard",
    component: Pp,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: d7,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: u3,
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
    component: LL,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: H5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: U6,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: r6,
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
    component: bP,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: uB,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Pp,
    meta: { workflowStep: 0 }
  }
], td = XC({
  history: Wb(),
  routes: m7
}), iu = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, h7 = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
td.beforeEach((e, t, n) => {
  const o = p7();
  if (mw.user.isAnon() || jh.assertUser().catch((i) => {
    i instanceof os && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = g7(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: c
  } = D();
  if (!!(a.value && r.value && l.value)) {
    if (h7(
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
const f7 = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, w7 = window.Vue.createApp, v7 = mw.config.get("wgUserLanguage"), _7 = "en", S7 = mw.messages.values || {}, yo = w7(Mx);
yo.use(td);
yo.use(hb);
yo.use(j_);
yo.use(O_);
const y7 = y1({
  locale: v7,
  finalFallback: _7,
  messages: S7,
  wikilinks: !0
});
yo.use(y7);
yo.use(f7);
yo.mount("#contenttranslation");
