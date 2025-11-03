var fw = Object.defineProperty, ww = Object.defineProperties;
var vw = Object.getOwnPropertyDescriptors;
var Nu = Object.getOwnPropertySymbols;
var _w = Object.prototype.hasOwnProperty, Sw = Object.prototype.propertyIsEnumerable;
var Mu = (e, t, n) => t in e ? fw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ce = (e, t) => {
  for (var n in t || (t = {}))
    _w.call(t, n) && Mu(e, n, t[n]);
  if (Nu)
    for (var n of Nu(t))
      Sw.call(t, n) && Mu(e, n, t[n]);
  return e;
}, Ke = (e, t) => ww(e, vw(t));
var C = (e, t, n) => new Promise((s, o) => {
  var a = (u) => {
    try {
      l(n.next(u));
    } catch (d) {
      o(d);
    }
  }, r = (u) => {
    try {
      l(n.throw(u));
    } catch (d) {
      o(d);
    }
  }, l = (u) => u.done ? s(u.value) : Promise.resolve(u.value).then(a, r);
  l((n = n.apply(e, t)).next());
});
window.Vuex = require("vuex");
{
  const {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: s,
    CdxSearchInput: o,
    CdxTextInput: a,
    CdxMenu: r,
    CdxMessage: l,
    CdxTabs: u,
    CdxTab: d,
    CdxField: i,
    CdxRadio: c
  } = require("../codex.js");
  window.Codex = {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: s,
    CdxSearchInput: o,
    CdxTextInput: a,
    CdxMenu: r,
    CdxMessage: l,
    CdxTabs: u,
    CdxTab: d,
    CdxField: i,
    CdxRadio: c
  };
}
const de = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, yw = {
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
}, xw = window.Vue.toDisplayString, wr = window.Vue.openBlock, vr = window.Vue.createElementBlock, bw = window.Vue.createCommentVNode, Uu = window.Vue.createElementVNode, Cw = window.Vue.normalizeClass, kw = ["width", "height", "aria-labelledby"], $w = ["id"], Vw = ["fill"], Ew = ["d"];
function Lw(e, t, n, s, o, a) {
  return wr(), vr("span", {
    class: Cw(["mw-ui-icon notranslate", a.classes])
  }, [
    (wr(), vr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (wr(), vr("title", {
        key: 0,
        id: n.iconName
      }, xw(n.iconName), 9, $w)) : bw("", !0),
      Uu("g", { fill: n.iconColor }, [
        Uu("path", { d: a.iconImagePath }, null, 8, Ew)
      ], 8, Vw)
    ], 8, kw))
  ], 2);
}
const Ze = /* @__PURE__ */ de(yw, [["render", Lw]]);
const Tw = {
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
}, Aw = window.Vue.renderSlot, Dw = window.Vue.resolveComponent, Iu = window.Vue.normalizeClass, Va = window.Vue.openBlock, _r = window.Vue.createBlock, Sr = window.Vue.createCommentVNode, Pw = window.Vue.toDisplayString, Bw = window.Vue.createElementBlock, Fw = window.Vue.toHandlerKey, Nw = window.Vue.withModifiers, Mw = window.Vue.mergeProps, Uw = window.Vue.createElementVNode, Iw = window.Vue.resolveDynamicComponent, Rw = window.Vue.withCtx, zw = { class: "mw-ui-button__content" }, Ow = ["textContent"];
function jw(e, t, n, s, o, a) {
  const r = Dw("mw-icon");
  return Va(), _r(Iw(a.component), {
    class: Iu(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Rw(() => [
      Aw(e.$slots, "default", {}, () => [
        Uw("span", zw, [
          n.icon ? (Va(), _r(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Iu(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Sr("", !0),
          !a.isIcon && n.label ? (Va(), Bw("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Pw(n.label)
          }, null, 8, Ow)) : Sr("", !0),
          n.indicator ? (Va(), _r(r, Mw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Fw(a.indicatorClickEvent)]: t[0] || (t[0] = Nw((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Sr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Xe = /* @__PURE__ */ de(Tw, [["render", jw]]);
const Hw = {
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
}, qw = window.Vue.renderList, Gw = window.Vue.Fragment, yr = window.Vue.openBlock, Ru = window.Vue.createElementBlock, Xw = window.Vue.resolveComponent, Ww = window.Vue.withModifiers, Kw = window.Vue.mergeProps, Yw = window.Vue.createBlock, Qw = { class: "row mw-ui-button-group ma-0 pa-0" };
function Jw(e, t, n, s, o, a) {
  const r = Xw("mw-button");
  return yr(), Ru("div", Qw, [
    (yr(!0), Ru(Gw, null, qw(n.items, (l) => (yr(), Yw(r, Kw({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Ww((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const ma = /* @__PURE__ */ de(Hw, [["render", Jw]]);
const Zw = {
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
}, zu = window.Vue.renderSlot, e0 = window.Vue.toDisplayString, Ou = window.Vue.openBlock, ju = window.Vue.createElementBlock, t0 = window.Vue.createCommentVNode, n0 = window.Vue.createElementVNode, s0 = { class: "mw-ui-card" }, o0 = ["textContent"], a0 = { class: "mw-ui-card__content" };
function i0(e, t, n, s, o, a) {
  return Ou(), ju("div", s0, [
    zu(e.$slots, "header", {}, () => [
      n.title ? (Ou(), ju("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: e0(n.title)
      }, null, 8, o0)) : t0("", !0)
    ]),
    n0("div", a0, [
      zu(e.$slots, "default")
    ])
  ]);
}
const Je = /* @__PURE__ */ de(Zw, [["render", i0]]);
const r0 = {}, l0 = window.Vue.openBlock, c0 = window.Vue.createElementBlock, u0 = { class: "mw-ui-divider row" };
function d0(e, t) {
  return l0(), c0("div", u0);
}
const Yi = /* @__PURE__ */ de(r0, [["render", d0]]);
const g0 = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, p0 = window.Vue.renderSlot, m0 = window.Vue.resolveDynamicComponent, h0 = window.Vue.withCtx, f0 = window.Vue.openBlock, w0 = window.Vue.createBlock;
function v0(e, t, n, s, o, a) {
  return f0(), w0(m0(n.tag), { class: "mw-grid container" }, {
    default: h0(() => [
      p0(e.$slots, "default")
    ]),
    _: 3
  });
}
const _0 = /* @__PURE__ */ de(g0, [["render", v0]]), S0 = {
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
}, y0 = window.Vue.renderSlot, x0 = window.Vue.resolveDynamicComponent, b0 = window.Vue.normalizeClass, C0 = window.Vue.withCtx, k0 = window.Vue.openBlock, $0 = window.Vue.createBlock;
function V0(e, t, n, s, o, a) {
  return k0(), $0(x0(n.tag), {
    class: b0(a.classes)
  }, {
    default: C0(() => [
      y0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const U = /* @__PURE__ */ de(S0, [["render", V0]]), Ic = ["mobile", "tablet", "desktop", "desktop-wide"], E0 = Ic.reduce(
  (e, t) => Ke(ce({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), L0 = {
  name: "MwCol",
  props: Ke(ce({}, E0), {
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
      for (let n = 0; n < Ic.length; n++) {
        let s = Ic[n], o = this.$props[s];
        o && e.push(`col-${s}-${o}`);
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
}, T0 = window.Vue.renderSlot, A0 = window.Vue.resolveDynamicComponent, D0 = window.Vue.normalizeClass, P0 = window.Vue.withCtx, B0 = window.Vue.openBlock, F0 = window.Vue.createBlock;
function N0(e, t, n, s, o, a) {
  return B0(), F0(A0(n.tag), {
    class: D0(a.classes)
  }, {
    default: P0(() => [
      T0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ de(L0, [["render", N0]]), M0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", U0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Qi = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", I0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, R0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", ph = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", z0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", O0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Ji = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", j0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", H0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", q0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Hu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", G0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", mh = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", X0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", W0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", K0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", Y0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", Q0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Rc = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, J0 = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, Z0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, hh = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", ev = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const xr = window.Vue.computed, tv = window.Vue.watch, nv = window.Vue.ref, sv = window.Vue.nextTick, ov = {
  name: "MwDialog",
  components: {
    MwButton: Xe,
    MwRow: U,
    MwCol: k,
    MwDivider: Yi
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
    const n = nv(null), s = xr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), o = xr(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    tv(
      () => e.value,
      (u) => {
        u ? (r(), sv(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = xr(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: s,
      cssVars: l,
      overlayClass: o,
      mwIconClose: Ji,
      root: n
    };
  }
}, qu = window.Vue.normalizeClass, br = window.Vue.createElementVNode, Cr = window.Vue.renderSlot, Ea = window.Vue.resolveComponent, ro = window.Vue.createVNode, kr = window.Vue.withCtx, Gu = window.Vue.createCommentVNode, av = window.Vue.withKeys, Xu = window.Vue.openBlock, iv = window.Vue.createElementBlock, rv = window.Vue.Transition, lv = window.Vue.normalizeStyle, cv = window.Vue.createBlock, uv = { class: "mw-ui-dialog__shell items-stretch" }, dv = { class: "mw-ui-dialog__body" };
function gv(e, t, n, s, o, a) {
  const r = Ea("mw-col"), l = Ea("mw-button"), u = Ea("mw-row"), d = Ea("mw-divider");
  return Xu(), cv(rv, {
    name: "mw-ui-animation-fade",
    style: lv(s.cssVars)
  }, {
    default: kr(() => [
      n.value ? (Xu(), iv("div", {
        key: 0,
        ref: "root",
        class: qu(["mw-ui-dialog", s.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = av((i) => n.closeOnEscapeKey && s.close(), ["esc"]))
      }, [
        br("div", {
          class: qu(["mw-ui-dialog__overlay", s.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && s.close())
        }, null, 2),
        br("div", uv, [
          n.header ? Cr(e.$slots, "header", { key: 0 }, () => [
            ro(u, { class: "mw-ui-dialog__header" }, {
              default: kr(() => [
                ro(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                ro(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: kr(() => [
                    ro(l, {
                      type: "icon",
                      icon: s.mwIconClose,
                      onClick: s.close
                    }, null, 8, ["icon", "onClick"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            ro(d)
          ]) : Gu("", !0),
          br("div", dv, [
            Cr(e.$slots, "default")
          ]),
          Cr(e.$slots, "footer")
        ])
      ], 34)) : Gu("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const bt = /* @__PURE__ */ de(ov, [["render", gv]]);
const pv = {
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
}, Wu = window.Vue.renderSlot, mv = window.Vue.resolveComponent, La = window.Vue.openBlock, $r = window.Vue.createBlock, Ku = window.Vue.createCommentVNode, hv = window.Vue.resolveDynamicComponent, fv = window.Vue.toDisplayString, wv = window.Vue.mergeProps, vv = window.Vue.withModifiers, _v = window.Vue.createElementVNode, Sv = window.Vue.normalizeClass, yv = window.Vue.createElementBlock, xv = { class: "mw-ui-input__content" };
function bv(e, t, n, s, o, a) {
  const r = mv("mw-icon");
  return La(), yv("div", {
    class: Sv(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    _v("div", xv, [
      Wu(e.$slots, "icon", {}, () => [
        n.icon ? (La(), $r(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Ku("", !0)
      ]),
      (La(), $r(hv(n.type === "textarea" ? n.type : "input"), wv({
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
        textContent: fv(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Wu(e.$slots, "indicator", {}, () => [
        n.indicator ? (La(), $r(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = vv((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Ku("", !0)
      ])
    ])
  ], 2);
}
const zc = /* @__PURE__ */ de(pv, [["render", bv]]);
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
const Cv = {}, kv = window.Vue.createElementVNode, $v = window.Vue.openBlock, Vv = window.Vue.createElementBlock, Ev = { class: "mw-ui-spinner" }, Lv = /* @__PURE__ */ kv("div", { class: "mw-ui-spinner__bounce" }, null, -1), Tv = [
  Lv
];
function Av(e, t) {
  return $v(), Vv("div", Ev, Tv);
}
const gt = /* @__PURE__ */ de(Cv, [["render", Av]]), St = {
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
const Dv = window.Vue.computed, Pv = {
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
      default: hh
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: St.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: St.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = Dv(() => {
      var a;
      const o = {
        height: `${e.thumbnailSize}px`,
        width: `${e.thumbnailSize}px`
      };
      return (a = e.thumbnail) != null && a.source ? o["background-image"] = `url(${e.thumbnail.source})` : (o.color = e.placeholderColor, o["background-color"] = e.placeholderBackgroundColor), o;
    });
    return {
      handleClick: (o) => t("click", o),
      style: n
    };
  }
}, Yu = window.Vue.normalizeStyle, Qu = window.Vue.openBlock, Bv = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Fv = window.Vue.resolveComponent, Nv = window.Vue.createBlock;
function Mv(e, t, n, s, o, a) {
  const r = Fv("mw-ui-icon");
  return n.thumbnail ? (Qu(), Bv("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Yu(s.style)
  }, null, 4)) : (Qu(), Nv(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Yu(s.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const eu = /* @__PURE__ */ de(Pv, [["render", Mv]]);
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
const Uv = {
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
}, Ju = window.Vue.normalizeClass, Zu = window.Vue.normalizeStyle, Iv = window.Vue.createElementVNode, Rv = window.Vue.openBlock, zv = window.Vue.createElementBlock, Ov = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function jv(e, t, n, s, o, a) {
  return Rv(), zv("div", {
    class: Ju(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Zu(a.containerStyles)
  }, [
    Iv("div", {
      class: Ju(["mw-progress-bar__bar", a.barClass]),
      style: Zu(a.barStyles)
    }, null, 6)
  ], 14, Ov);
}
const fh = /* @__PURE__ */ de(Uv, [["render", jv]]), Hv = (e, t, n, s) => (o) => {
  const a = o.clientY, r = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), l = (d) => {
    s.value = !1;
    let i = Math.min(
      r + d.clientY - a,
      e.value
    );
    i = Math.max(i, t.value), n.value.style.height = i + "px";
  }, u = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), s.value = !0), document.documentElement.removeEventListener(
      "pointermove",
      l,
      !1
    ), document.documentElement.removeEventListener(
      "pointerup",
      u,
      !1
    );
  };
  document.documentElement.addEventListener("pointermove", l, !1), document.documentElement.addEventListener("pointerup", u, !1);
}, qv = (e, t, n, s) => ({ initiateDrag: Hv(
  e,
  t,
  n,
  s
) }), Gv = window.Vue.ref, ed = window.Vue.computed, Xv = (e, t, n, s) => {
  const o = Gv(0), a = ed(
    () => t.value > e.value
  ), r = ed(
    () => t.value <= e.value * (o.value + 1)
  ), l = (d) => {
    o.value = d, n.value.scroll(0, e.value * o.value);
  };
  return {
    handleArrowUpClick: () => {
      if (!s.value) {
        n.value.style.removeProperty("height"), s.value = !0, l(0);
        return;
      }
      l(o.value - 1);
    },
    isScrolledToEnd: r,
    scrollToStepByIndex: l,
    scrollable: a,
    scrollIndex: o
  };
};
const Ta = window.Vue.ref, Wv = window.Vue.onMounted, td = window.Vue.computed, Kv = window.Vue.nextTick, Yv = {
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
    const t = Ta(!0), n = Ta(null), s = td(
      () => Math.min(e.minHeight, o.value)
    ), o = Ta(1), { initiateDrag: a } = qv(
      o,
      s,
      n,
      t
    ), {
      isScrolledToEnd: r,
      scrollable: l,
      scrollIndex: u,
      scrollToStepByIndex: d,
      handleArrowUpClick: i
    } = Xv(s, o, n, t), c = () => d(u.value + 1), g = Ta(null), p = td(() => ({
      "--collapsed-height": s.value + "px"
    })), m = () => {
      if (!n.value)
        return;
      const f = n.value.style.height;
      if (n.value.style.removeProperty("height"), o.value = n.value.scrollHeight, f) {
        let v = Math.min(f, o.value);
        v = Math.max(v, s.value), v === s.value && (t.value = !0), n.value.style.height = v + "px";
      }
    };
    return Wv(() => C(this, null, function* () {
      var f;
      yield Kv(), o.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: Z0,
      mwIconExpand: z0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, Qv = window.Vue.renderSlot, Jv = window.Vue.normalizeClass, Aa = window.Vue.createElementVNode, Zv = window.Vue.resolveComponent, e1 = window.Vue.createVNode, Vr = window.Vue.openBlock, t1 = window.Vue.createBlock, nd = window.Vue.createCommentVNode, sd = window.Vue.createElementBlock, n1 = window.Vue.normalizeStyle, s1 = { class: "mw-ui-expandable-content__container" }, o1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, a1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function i1(e, t, n, s, o, a) {
  const r = Zv("mw-button");
  return Vr(), sd("div", {
    class: "mw-ui-expandable-content",
    style: n1(s.cssVars)
  }, [
    Aa("div", s1, [
      Aa("div", {
        ref: "contentRef",
        class: Jv(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": s.isCollapsed
        }])
      }, [
        Qv(e.$slots, "default")
      ], 2),
      n.scroll && s.scrollable ? (Vr(), sd("div", o1, [
        e1(r, {
          type: "icon",
          icon: s.mwIconCollapse,
          disabled: s.isCollapsed && s.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: s.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        s.isCollapsed ? (Vr(), t1(r, {
          key: 0,
          type: "icon",
          icon: s.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: s.isScrolledToEnd,
          onClick: s.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : nd("", !0)
      ])) : nd("", !0)
    ]),
    Aa("div", a1, [
      Aa("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => s.onDragButtonClicked && s.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const r1 = /* @__PURE__ */ de(Yv, [["render", i1]]);
const Da = window.Vue.computed, l1 = {
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
      default: St.blue600
    },
    inactiveColor: {
      type: String,
      default: St.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = Da(() => e.size / 2 * 0.9), n = Da(() => Math.PI * (t.value * 2)), s = Da(
      () => (100 - e.percentage) / 100 * n.value
    ), o = Da(() => ({
      "--active-color": e.activeColor,
      "--inactive-color": e.inactiveColor,
      "--stroke-width": `${e.strokeWidth}px`
    })), a = `M ${e.size} 0 A ${e.size} ${e.size} 0 1 1 19 0`;
    return {
      cssVars: o,
      dashArray: n,
      path: a,
      radius: t,
      strokeDashOffset: s
    };
  }
}, od = window.Vue.createElementVNode, ad = window.Vue.normalizeStyle, c1 = window.Vue.openBlock, u1 = window.Vue.createElementBlock, d1 = ["width", "height", "viewport"], g1 = ["r", "cx", "cy", "stroke-dasharray"], p1 = ["r", "cx", "cy", "stroke-dasharray"];
function m1(e, t, n, s, o, a) {
  return c1(), u1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: ad(s.cssVars)
  }, [
    od("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: s.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": s.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, g1),
    od("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: s.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": s.dashArray,
      "stroke-dashoffset": "0",
      style: ad({ strokeDashoffset: `${s.strokeDashOffset}px` })
    }, null, 12, p1)
  ], 12, d1);
}
const h1 = /* @__PURE__ */ de(l1, [["render", m1]]), f1 = window.Vue.ref, Sn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, $n = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${Sn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${Sn.tablet}px) and (max-width: ${Sn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${Sn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${Sn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${Sn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${Sn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${Sn["desktop-wide"]}px)`
}, Er = {
  mobile: () => matchMedia($n.mobile).matches,
  tablet: () => matchMedia($n.tablet).matches,
  desktop: () => matchMedia($n.desktop).matches,
  desktopwide: () => matchMedia($n["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia($n["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia($n["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia($n["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia($n["desktop-and-down"]).matches
}, w1 = (e) => {
  const t = Object.values(Sn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, v1 = {
  install: (e) => {
    const t = f1({
      nextBreakpoint: null
    }), n = () => {
      const s = window.innerWidth;
      for (let o in Er)
        Er.hasOwnProperty(o) && (t.value[o] = Er[o]());
      t.value.nextBreakpoint = w1(s);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Ke(ce({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, _1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ke(ce({}, e.config.globalProperties.$mwui || {}), {
      colors: St
    }), e.provide("colors", St);
  }
};
class Xs extends Error {
}
const S1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Xs();
}), wh = { assertUser: S1 };
const y1 = window.Vue.resolveDirective, lo = window.Vue.createElementVNode, id = window.Vue.withDirectives, x1 = window.Vue.toDisplayString, b1 = window.Vue.unref, rd = window.Vue.withCtx, C1 = window.Vue.openBlock, k1 = window.Vue.createBlock, $1 = window.Vue.createCommentVNode, V1 = { class: "pa-4 sx-login-dialog__header" }, E1 = { class: "sx-login-dialog__body px-6 pb-4" }, L1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, T1 = ["href"], A1 = window.Vue.computed, D1 = window.Vue.ref, P1 = window.Vuex.useStore, B1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = P1(), n = A1(() => t.state.application.isLoginDialogOn), s = () => t.commit("application/setIsLoginDialogOn", !1), o = D1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = y1("i18n");
      return n.value ? (C1(), k1(b1(bt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: s
      }, {
        header: rd(() => [
          lo("div", V1, [
            id(lo("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: rd(() => [
          id(lo("div", E1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          lo("div", L1, [
            lo("a", {
              class: "py-1",
              href: o.value,
              target: "_blank"
            }, x1(a.$i18n("cx-sx-login-dialog-button-label")), 9, T1)
          ])
        ]),
        _: 1
      })) : $1("", !0);
    };
  }
}, Y = new mw.cx.SiteMapper(), F1 = mw.util.getUrl, N1 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const s = JSON.parse(mw.cookie.get("ULSGeo"));
  return s && s.latitude + "|" + s.longitude;
}, bn = !mw.config.get("wgMFMode");
class tu {
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
    sourceLanguage: s,
    targetLanguage: o,
    startTimestamp: a,
    lastUpdatedTimestamp: r,
    pageRevision: l,
    status: u,
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = s, this.targetLanguage = o, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = u, this.targetTitle = d;
  }
}
const Pa = "original", Ba = "empty", M1 = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class ae {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, s = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...s,
      Pa,
      Ba
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
    return Pa;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Ba;
  }
  static isUserMTProvider(t) {
    return [Pa, Ba].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === Ba ? "blank" : t === Pa ? "source" : t.toLowerCase();
  }
}
class qn {
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
    translatedContent: s = "",
    node: o = null,
    proposedTranslations: a = {},
    selected: r = !1
  } = {}) {
    this.id = t, this.translatedContent = s, this.mtProviderUsed = "", this.node = o, this.proposedTranslations = Ke(ce({}, a), {
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
const ld = (e) => {
  var n;
  const t = Xi(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Xi = (e) => {
  var n, s, o;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((o = (s = t == null ? void 0 : t.parts) == null ? void 0 : s[0]) == null ? void 0 : o.template) || null;
}, us = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), vh = (e) => {
  const t = Xi(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: s } = t;
  if (!s)
    return `{{${n}}}`;
  for (const o in s) {
    const a = U1(s[o].wt);
    n += ` | ${o} = ${a}`;
  }
  return `{{${n}}}`;
}, U1 = (e) => {
  let t = e, n = "", s = !1, o = 0, a = 0;
  for (; t.length > 0; ) {
    const r = t.match(
      /(?:\[\[)|(?:\]\])|(?:\{\{)|(?:\}\})|\|+|<\/?nowiki>|<nowiki\s*\/>/
    );
    if (!r) {
      n += t;
      break;
    }
    if (n += t.slice(0, r.index), t = t.slice(r.index + r[0].length), s)
      r[0] === "</nowiki>" && (s = !1), n += r[0];
    else {
      let l = !0;
      r[0] === "<nowiki>" ? (s = !0, l = !1) : r[0] === "</nowiki>" || r[0].match(/<nowiki\s*\/>/) ? l = !1 : r[0].match(/(?:\[\[)/) ? (a++, l = !1) : r[0].match(/(?:\]\])/) ? a > 0 && (a--, l = !1) : r[0].match(/(?:\{\{)/) ? (o++, l = !1) : r[0].match(/(?:\}\})/) ? o > 0 && (o--, l = !1) : r[0].match(/\|+/) && (o > 0 || a > 0) && (l = !1), l ? n += "<nowiki>" + r[0] + "</nowiki>" : n += r[0];
    }
  }
  return n;
}, _h = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Sh = (e) => {
  const t = _h(e);
  return t == null ? void 0 : t.targetExists;
};
class Lr {
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
    content: s,
    validate: o = !1,
    origin: a
  } = {}) {
    this.baseSectionId = t, this.subSectionId = n, this.content = s, this.validate = o, this.origin = a;
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
    let s = document.createElement("div");
    s.innerHTML = n, s.firstElementChild.getAttribute("rel") === "cx:Section" && (s = s.firstElementChild);
    const o = Array.from(s.children).find(
      (a) => us(a)
    );
    o && Sh(o) && (this.blockTemplateAdaptationInfo[t] = _h(o));
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
    ).forEach((s) => {
      const o = this.getSentenceById(s.dataset.segmentid);
      if (o.isTranslated) {
        s.innerHTML = o.translatedContent;
        return;
      }
      s.parentNode.removeChild(s);
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
    ).forEach((s) => {
      const o = this.getSentenceById(s.dataset.segmentid);
      if (o.isTranslated) {
        s.innerHTML = o.mtProposedTranslationUsed;
        return;
      }
      s.parentNode.removeChild(s);
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
      (t) => us(t)
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
    const t = Xi(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? ld(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((s) => us(s));
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
    return n && ld(n) || "";
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
    const s = Xi(n);
    return (s == null ? void 0 : s.params) || null;
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
    const s = Array.from(n.children).find(
      (a) => us(a)
    );
    this.isBlockTemplate && s && (s.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const o = [
      new Lr({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Lr({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && o.push(
      new Lr({
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
      const s = Array.from(n.children).find(
        (o) => us(o)
      );
      s && (s.dataset.cx = JSON.stringify([
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
const nu = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), I1 = nu - 10, R1 = [
  { status: "failure", value: 100 - nu },
  { status: "warning", value: 100 - I1 },
  { status: "success", value: 100 }
], yh = (e, t, n) => {
  const s = cd(e).textContent, o = cd(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(o, s, n);
  return Math.ceil(a);
}, z1 = (e) => R1.find((t) => e <= t.value).status, O1 = (e, t) => yh(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), j1 = () => (100 - nu) / 100, cd = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, tn = {
  calculateScore: yh,
  getScoreStatus: z1,
  getMTScoreForPageSection: O1,
  getMtModificationThreshold: j1
}, Fa = "__LEAD_SECTION__";
class Oc {
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
    isLeadSection: s = !1,
    isTitleSelected: o = !1
  } = {}) {
    this.id = t, this.proposedTitleTranslations = {
      [ae.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.mtProviderUsedForTitle = "", this.translatedTitle = "", this.subSections = n, this.isLeadSection = s, this.isTitleSelected = o;
  }
  /**
   * @param {SubSection[]} updatedSubSections
   */
  updateSubSections(t) {
    for (const n of t) {
      const s = this.subSections.find(
        (o) => o.id === n.id
      );
      if (!s)
        return;
      s.node = n.node, s.sentences = n.sentences;
    }
  }
  reset() {
    this.proposedTitleTranslations = {
      [ae.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [ae.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return Fa;
  }
  static isSectionLead(t) {
    return !t || t === Fa;
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
    var s;
    const t = this.subSections.filter(
      (o) => o.isTranslated
    ), n = this.mtProviderUsedForTitle || ((s = t == null ? void 0 : t[0]) == null ? void 0 : s.mtProviderUsed);
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
    const s = Array.from(n.children), o = (a) => s.find(
      (r) => r.id === a.targetSectionId
    );
    this.subSections.forEach((a) => {
      const r = o(a);
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
    return n instanceof ut ? n.transclusionNode.outerHTML : n instanceof qn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof ut ? t.blockTemplateSelected = !1 : t instanceof qn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof ut ? n.blockTemplateSelected = !0 : n instanceof qn && (n.selected = !0);
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
    const s = this.getContentTranslationUnitById(t);
    if (s instanceof ut)
      return !!s.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (s instanceof qn)
      return s.proposedTranslations.hasOwnProperty(n);
  }
  /**
   * Given an MT provider, this method returns the proposed translation for the
   * currently selected translation unit (title/block template/sentence).
   * @param {string} mtProvider
   * @returns {string|null}
   */
  getProposedTranslationByMtProvider(t) {
    const n = this.selectedContentTranslationUnit;
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof ut ? n.blockTemplateProposedTranslations[t] || "" : n instanceof qn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof ut ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof qn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const s = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, o = tn.getMTScoreForPageSection(this, t) / 100;
    return { any: s, mt: 1 - o, human: o };
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
    return this.isLeadSection ? Fa : this.originalTitle;
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
    return this.isLeadSection ? Fa : this.title;
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
      (n, s) => [
        ...n,
        ...s.getParallelCorporaTranslationPayloads(t)
      ],
      []
    );
  }
}
class Zi extends tu {
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
    sectionId: s,
    sourceTitle: o,
    sourceLanguage: a,
    targetLanguage: r,
    startTimestamp: l,
    lastUpdatedTimestamp: u,
    status: d,
    pageRevision: i,
    targetTitle: c,
    sourceSectionTitle: g,
    targetSectionTitle: p,
    progress: m
  }) {
    super({
      translationId: n,
      sourceTitle: o,
      sourceLanguage: a,
      targetLanguage: r,
      startTimestamp: l,
      lastUpdatedTimestamp: u,
      pageRevision: i,
      status: d,
      targetTitle: c
    }), this.sectionTranslationId = t, this.sectionId = s, this.sourceSectionTitle = g, this.targetSectionTitle = p, this.progress = m, this.restored = !1;
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
    return Oc.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Oc.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const nn = "previous-edits", Cn = "popular", We = "topic", ke = "geography", ee = "collections", Qe = "automatic", yt = "seed", ud = window.Vue.ref, { topics: H1, regions: q1 } = mw.loader.require(
  "ext.cx.articlefilters"
), Na = {
  type: Qe,
  id: nn
}, su = () => {
  const e = ud(
    H1.flatMap((l) => l.topics).map((l) => l.topicId.toLowerCase())
  ), t = ud(!1), n = (l, u) => e.value.includes(u) ? { type: We, id: u } : null, s = (l, u) => q1.some(
    (i) => i.id.toLowerCase() === u || i.countries.some(
      (c) => c.id.toLowerCase() === u
    )
  ) ? { type: ke, id: u } : null, o = (l, u, d) => d && !d.some((i) => i.name.toLowerCase() === u) ? null : { type: ee, id: l };
  return { filtersValidatorError: t, validateFilters: ({ type: l, id: u }, d = !1) => {
    t.value = !1;
    const i = l == null ? void 0 : l.toLowerCase(), c = u == null ? void 0 : u.toLowerCase();
    if (c === nn)
      return {
        type: Qe,
        id: nn
      };
    if (c === Cn)
      return {
        type: Qe,
        id: Cn
      };
    if (c === ee)
      return d && !d.length ? (t.value = !0, Na) : {
        type: Qe,
        id: ee
      };
    if (i === We) {
      const g = n(u, c);
      if (g)
        return g;
      t.value = !0;
    } else if (i === ke) {
      const g = s(u, c);
      if (g)
        return g;
      t.value = !0;
    } else if (i === ee) {
      const g = o(
        u,
        c,
        d
      );
      if (g)
        return g;
      t.value = !0;
    } else if (i === yt)
      return { type: yt, id: u };
    return Na;
  }, isDefaultFilter: ({ type: l, id: u }) => l === Na.type && u === Na.id };
}, G1 = window.Vue.inject, X1 = window.Vue.reactive;
var W1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, xh = { exports: {} };
(function(e, t) {
  (function(n, s) {
    e.exports = s();
  })(W1, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, s = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class o {
      constructor(c) {
        this.locale = c;
      }
      convertPlural(c, g) {
        const p = /\d+=/i;
        if (!g || g.length === 0)
          return "";
        for (let h = 0; h < g.length; h++) {
          const f = g[h];
          if (p.test(f)) {
            if (parseInt(f.slice(0, f.indexOf("=")), 10) === c)
              return f.slice(f.indexOf("=") + 1);
            g[h] = void 0;
          }
        }
        g = g.filter((h) => !!h);
        let m = this.getPluralForm(c, this.locale);
        return m = Math.min(m, g.length - 1), g[m];
      }
      getPluralForm(c, g) {
        const p = new Intl.PluralRules(g), m = p.resolvedOptions().pluralCategories, h = p.select(c);
        return ["zero", "one", "two", "few", "many", "other"].filter((f) => m.includes(f)).indexOf(h);
      }
      convertNumber(c, g = !1) {
        let p = this.digitTransformTable(this.locale), m = "";
        if (g) {
          if (parseFloat(c, 10) === c || !p)
            return c;
          const h = [];
          for (const v in p)
            h[p[v]] = v;
          p = h;
          const f = String(c);
          for (let v = 0; v < f.length; v++)
            m += p[f[v]] || f[v];
          return parseFloat(m, 10);
        }
        if (Intl.NumberFormat) {
          let h;
          const f = [...s[this.locale] || [], "en"];
          return h = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : f, m = new Intl.NumberFormat(h).format(c), m === "NaN" && (m = c), m;
        }
      }
      convertGrammar(c, g) {
        return c;
      }
      gender(c, g) {
        if (!g || g.length === 0)
          return "";
        for (; g.length < 2; )
          g.push(g[g.length - 1]);
        return c === "male" ? g[0] : c === "female" ? g[1] : g.length === 3 ? g[2] : g[0];
      }
      digitTransformTable(c) {
        return !!n[c] && n[c].split("");
      }
    }
    var a = { bs: class extends o {
      convertGrammar(i, c) {
        switch (c) {
          case "instrumental":
            i = "s " + i;
            break;
          case "lokativ":
            i = "o " + i;
        }
        return i;
      }
    }, default: o, dsb: class extends o {
      convertGrammar(i, c) {
        switch (c) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, fi: class extends o {
      convertGrammar(i, c) {
        let g = i.match(/[aou][^äöy]*$/i);
        const p = i;
        switch (i.match(/wiki$/i) && (g = !1), i.match(/[bcdfghjklmnpqrstvwxz]$/i) && (i += "i"), c) {
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
    }, ga: class extends o {
      convertGrammar(i, c) {
        if (c === "ainmlae")
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
    }, he: class extends o {
      convertGrammar(i, c) {
        switch (c) {
          case "prefixed":
          case "תחילית":
            i.slice(0, 1) === "ו" && i.slice(0, 2) !== "וו" && (i = "ו" + i), i.slice(0, 1) === "ה" && (i = i.slice(1)), (i.slice(0, 1) < "א" || i.slice(0, 1) > "ת") && (i = "־" + i);
        }
        return i;
      }
    }, hsb: class extends o {
      convertGrammar(i, c) {
        switch (c) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, hu: class extends o {
      convertGrammar(i, c) {
        switch (c) {
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
    }, hy: class extends o {
      convertGrammar(i, c) {
        return c === "genitive" && (i.slice(-1) === "ա" ? i = i.slice(0, -1) + "այի" : i.slice(-1) === "ո" ? i = i.slice(0, -1) + "ոյի" : i.slice(-4) === "գիրք" ? i = i.slice(0, -4) + "գրքի" : i += "ի"), i;
      }
    }, la: class extends o {
      convertGrammar(i, c) {
        switch (c) {
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
    }, os: class extends o {
      convertGrammar(i, c) {
        let g, p, m, h;
        switch (g = "мæ", p = "", m = "", h = "", i.match(/тæ$/i) ? (i = i.slice(0, -1), g = "æм") : i.match(/[аæеёиоыэюя]$/i) ? p = "й" : i.match(/у$/i) ? i.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (p = "й") : i.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), c) {
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
    }, ru: class extends o {
      convertGrammar(i, c) {
        return c === "genitive" && (i.slice(-1) === "ь" ? i = i.slice(0, -1) + "я" : i.slice(-2) === "ия" ? i = i.slice(0, -2) + "ии" : i.slice(-2) === "ка" ? i = i.slice(0, -2) + "ки" : i.slice(-2) === "ти" ? i = i.slice(0, -2) + "тей" : i.slice(-2) === "ды" ? i = i.slice(0, -2) + "дов" : i.slice(-3) === "ник" && (i = i.slice(0, -3) + "ника")), i;
      }
    }, sl: class extends o {
      convertGrammar(i, c) {
        switch (c) {
          case "mestnik":
            i = "o " + i;
            break;
          case "orodnik":
            i = "z " + i;
        }
        return i;
      }
    }, uk: class extends o {
      convertGrammar(i, c) {
        switch (c) {
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
      constructor(c) {
        this.locale = c, this.language = new (a[c] || a.default)(c);
      }
      emit(c, g) {
        let p, m, h;
        switch (typeof c) {
          case "string":
          case "number":
            p = c;
            break;
          case "object":
            if (m = c.slice(1).map((f) => this.emit(f, g)), h = c[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            p = this[h](m, g);
            break;
          case "undefined":
            p = "";
            break;
          default:
            throw new Error("unexpected type in AST: " + typeof c);
        }
        return p;
      }
      concat(c) {
        let g = "";
        return c.forEach((p) => {
          g += p;
        }), g;
      }
      replace(c, g) {
        const p = parseInt(c[0], 10);
        return p < g.length ? g[p] : "$" + (p + 1);
      }
      plural(c) {
        const g = parseFloat(this.language.convertNumber(c[0], 10)), p = c.slice(1);
        return p.length ? this.language.convertPlural(g, p) : "";
      }
      gender(c) {
        const g = c[0], p = c.slice(1);
        return this.language.gender(g, p);
      }
      grammar(c) {
        const g = c[0], p = c[1];
        return p && g && this.language.convertGrammar(p, g);
      }
      wikilink(c) {
        let g, p = c[0];
        p.charAt(0) === ":" && (p = p.slice(1));
        const m = `./${p}`;
        return g = c.length === 1 ? p : c[1], `<a href="${m}" title="${p}">${g}</a>`;
      }
      extlink(c) {
        if (c.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${c[0]}">${c[1]}</a>`;
      }
      bidi(c) {
        const g = function(p) {
          const m = p.match(r);
          return m ? m[2] === void 0 ? "ltr" : "rtl" : null;
        }(c[0]);
        return g === "ltr" ? "‪" + c[0] + "‬" : g === "rtl" ? "‫" + c[0] + "‬" : c[0];
      }
      formatnum(c) {
        const g = !!c[1] && c[1] === "R", p = c[0];
        return typeof p == "string" || typeof p == "number" ? this.language.convertNumber(p, g) : p;
      }
      htmlattributes(c) {
        const g = {};
        for (let p = 0, m = c.length; p < m; p += 2)
          g[c[p]] = c[p + 1];
        return g;
      }
      htmlelement(c) {
        const g = c.shift(), p = c.shift();
        let m = c, h = "";
        for (const f in p)
          h += ` ${f}="${p[f]}"`;
        return Array.isArray(m) || (m = [m]), `<${g}${h}>${m.join("")}</${g}>`;
      }
    }
    class u {
      constructor(c, { wikilinks: g = !1 } = {}) {
        this.locale = c, this.wikilinks = g, this.emitter = new l(this.locale);
      }
      parse(c, g) {
        if (c.includes("{{") || c.includes("<") || this.wikilinks && c.includes("[")) {
          const p = function(m, { wikilinks: h = !1 } = {}) {
            let f = 0;
            function v(L) {
              return () => {
                for (let O = 0; O < L.length; O++) {
                  const Ne = L[O]();
                  if (Ne !== null)
                    return Ne;
                }
                return null;
              };
            }
            function _(L) {
              const O = f, Ne = [];
              for (let q = 0; q < L.length; q++) {
                const ze = L[q]();
                if (ze === null)
                  return f = O, null;
                Ne.push(ze);
              }
              return Ne;
            }
            function b(L, O) {
              return () => {
                const Ne = f, q = [];
                let ze = O();
                for (; ze !== null; )
                  q.push(ze), ze = O();
                return q.length < L ? (f = Ne, null) : q;
              };
            }
            function x(L) {
              const O = L.length;
              return () => {
                let Ne = null;
                return m.slice(f, f + O) === L && (Ne = L, f += O), Ne;
              };
            }
            function y(L) {
              return () => {
                const O = m.slice(f).match(L);
                return O === null ? null : (f += O[0].length, O[0]);
              };
            }
            const E = y(/^\s+/), S = x("|"), F = x(":"), V = x("\\"), A = y(/^./), R = x("$"), K = y(/^\d+/), ie = x('"'), ne = x("'"), j = y(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), W = y(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), se = v([re, y(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function re() {
              const L = _([V, A]);
              return L === null ? null : L[1];
            }
            const $e = v([re, W]), Fe = v([re, j]);
            function Ae() {
              const L = _([R, K]);
              return L === null ? null : ["REPLACE", parseInt(L[1], 10) - 1];
            }
            const Z = (nt = y(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), D = function(L) {
              return L.toString();
            }, () => {
              const L = nt();
              return L === null ? null : D(L);
            });
            var nt, D;
            function M() {
              const L = _([S, b(0, vs)]);
              if (L === null)
                return null;
              const O = L[1];
              return O.length > 1 ? ["CONCAT"].concat(O) : O[0];
            }
            function Q() {
              const L = _([Z, F, Ae]);
              return L === null ? null : [L[0], L[2]];
            }
            function w() {
              const L = _([Z, F, vs]);
              return L === null ? null : [L[0], L[2]];
            }
            function B() {
              const L = _([Z, F]);
              return L === null ? null : [L[0], ""];
            }
            const T = v([function() {
              const L = _([v([Q, w, B]), b(0, M)]);
              return L === null ? null : L[0].concat(L[1]);
            }, function() {
              const L = _([Z, b(0, M)]);
              return L === null ? null : [L[0]].concat(L[1]);
            }]), N = x("{{"), G = x("}}"), pe = x("[["), H = x("]]"), z = x("["), oe = x("]");
            function st() {
              const L = _([N, T, G]);
              return L === null ? null : L[1];
            }
            const Ce = v([function() {
              const L = _([b(1, vs), S, b(1, ws)]);
              return L === null ? null : [["CONCAT"].concat(L[0]), ["CONCAT"].concat(L[2])];
            }, function() {
              const L = _([b(1, vs)]);
              return L === null ? null : [["CONCAT"].concat(L[0])];
            }]);
            function ba() {
              let L = null;
              const O = _([pe, Ce, H]);
              if (O !== null) {
                const Ne = O[1];
                L = ["WIKILINK"].concat(Ne);
              }
              return L;
            }
            function fs() {
              let L = null;
              const O = _([z, b(1, pr), E, b(1, ws), oe]);
              return O !== null && (L = ["EXTLINK", O[1].length === 1 ? O[1][0] : ["CONCAT"].concat(O[1]), ["CONCAT"].concat(O[3])]), L;
            }
            const no = y(/^[A-Za-z]+/);
            function dr() {
              const L = y(/^[^"]*/), O = _([ie, L, ie]);
              return O === null ? null : O[1];
            }
            function so() {
              const L = y(/^[^']*/), O = _([ne, L, ne]);
              return O === null ? null : O[1];
            }
            function oo() {
              const L = y(/^\s*=\s*/), O = _([E, no, L, v([dr, so])]);
              return O === null ? null : [O[1], O[3]];
            }
            function gr() {
              const L = b(0, oo)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], L);
            }
            const pr = v([st, Ae, ba, fs, function() {
              const L = b(1, se)();
              return L === null ? null : L.join("");
            }]), ws = v([st, Ae, ba, fs, function() {
              let L = null;
              const O = f, Ne = x("<"), q = y(/^\/?/), ze = y(/^\s*>/), on = _([Ne, no, gr, q, ze]);
              if (on === null)
                return null;
              const mt = f, ao = on[1], io = b(0, ws)(), uw = f, Bu = _([x("</"), no, ze]);
              if (Bu === null)
                return ["CONCAT", m.slice(O, mt)].concat(io);
              const dw = f, gw = Bu[1], Fu = on[2];
              if (function(Yn, ka, mr, hr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Yn = Yn.toLowerCase()) !== (ka = ka.toLowerCase()) || hr.allowedHtmlElements.indexOf(Yn) === -1)
                  return !1;
                const pw = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let $a = 0, hw = mr.length; $a < hw; $a += 2) {
                  const fr = mr[$a];
                  if (hr.allowedHtmlCommonAttributes.indexOf(fr) === -1 && (hr.allowedHtmlAttributesByElement[Yn] || []).indexOf(fr) === -1 || fr === "style" && mr[$a + 1].search(pw) !== -1)
                    return !1;
                }
                return !0;
              }(ao, gw, Fu.slice(1)))
                L = ["HTMLELEMENT", ao, Fu].concat(io);
              else {
                const Yn = (ka) => ka.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                L = ["CONCAT", Yn(m.slice(O, mt))].concat(io, Yn(m.slice(uw, dw)));
              }
              return L;
            }, function() {
              const L = b(1, Fe)();
              return L === null ? null : L.join("");
            }]), vs = v([st, Ae, function() {
              const L = b(1, $e)();
              return L === null ? null : L.join("");
            }]), Ca = function() {
              const L = b(0, ws)();
              return L === null ? null : ["CONCAT"].concat(L);
            }();
            if (Ca === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return Ca;
          }(c, { wikilinks: this.wikilinks });
          return this.emitter.emit(p, g);
        }
        return this.simpleParse(c, g);
      }
      simpleParse(c, g) {
        return c.replace(/\$(\d+)/g, (p, m) => {
          const h = parseInt(m, 10) - 1;
          return g[h] !== void 0 ? g[h] : "$" + m;
        });
      }
    }
    class d {
      constructor(c) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(c, g) {
        if (typeof c != "object")
          throw new Error("Invalid message source. Must be an object");
        if (g) {
          if (!/^[a-zA-Z0-9-]+$/.test(g))
            throw new Error(`Invalid locale ${g}`);
          for (const p in c)
            if (p.indexOf("@") !== 0) {
              if (typeof c[p] == "object")
                return this.load(c);
              if (typeof c[p] != "string")
                throw new Error(`Invalid message for message ${p} in ${g} locale.`);
              break;
            }
          this.sourceMap.has(g) ? this.sourceMap.set(g, Object.assign(this.sourceMap.get(g), c)) : this.sourceMap.set(g, c);
        } else
          for (g in c)
            this.load(c[g], g);
      }
      getMessage(c, g) {
        const p = this.sourceMap.get(g);
        return p ? p[c] : null;
      }
      hasLocale(c) {
        return this.sourceMap.has(c);
      }
    }
    return class {
      constructor(i, { finalFallback: c = "en", messages: g, wikilinks: p = !1 } = {}) {
        this.locale = i, this.parser = new u(this.locale, { wikilinks: p }), this.messageStore = new d(), g && this.load(g, this.locale), this.finalFallback = c, this.wikilinks = p;
      }
      load(i, c) {
        return this.messageStore.load(i, c || this.locale);
      }
      i18n(i, ...c) {
        return this.parser.parse(this.getMessage(i), c);
      }
      setLocale(i) {
        this.locale = i, this.parser = new u(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...s[this.locale] || [], this.finalFallback];
      }
      getMessage(i) {
        let c = this.locale, g = 0;
        const p = this.getFallbackLocales(this.locale);
        for (; c; ) {
          const m = c.split("-");
          let h = m.length;
          do {
            const f = m.slice(0, h).join("-"), v = this.messageStore.getMessage(i, f);
            if (typeof v == "string")
              return v;
            h--;
          } while (h);
          c = p[g], g++;
        }
        return i;
      }
      registerParserPlugin(i, c) {
        l.prototype[i] = c;
      }
    };
  });
})(xh);
var K1 = xh.exports;
const dd = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, bh = Symbol("banana-context");
function ge() {
  const e = G1(bh);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function Y1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = X1(new K1(e.locale, e));
  return {
    install: (n) => {
      n.provide(bh, t), n.config.globalProperties.$i18n = (s, o) => (o = o || [], Array.isArray(o) || (o = [o]), t.i18n(s, ...o)), n.provide("setLocale", (s) => {
        t.setLocale(s);
      }), n.directive("i18n", (s, o) => {
        const { msg: a, params: r } = dd(o);
        o.modifiers.html ? s.innerHTML = t.i18n(a, ...r) : s.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (s, o) => {
        const { msg: a, params: r } = dd(o);
        s.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const kn = window.Vue.ref, Q1 = window.Vue.computed, er = kn(null), tr = kn(null), nr = kn(null), ha = kn(null), ou = kn(null), sr = kn(null), Ch = kn(null), kh = kn(null), au = kn(null), { validateFilters: J1, filtersValidatorError: Z1 } = su(), $h = {
  from: er,
  to: tr,
  section: ha,
  draft: ou,
  page: nr,
  revision: sr,
  "active-list": au
}, e_ = Q1(() => ({
  type: Ch.value,
  id: kh.value
})), Vh = (e, t) => {
  Ch.value = e, kh.value = t, Wi("filter-type", e), t && Wi("filter-id", t);
}, t_ = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Zi && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const s in n) {
    const o = n[s];
    t.set(s, o), $h[s].value = o;
  }
  t.delete("title"), fa(Object.fromEntries(t));
}, iu = (e, t) => {
  $h[e].value = t, Wi(e, t);
}, n_ = (e) => {
  iu("section", e);
}, s_ = (e) => {
  iu("page", e);
}, o_ = (e) => {
  iu("active-list", e);
}, fa = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    F1(`Special:ContentTranslation${t}`, e)
  );
}, a_ = () => {
  const e = ge(), t = new URLSearchParams(location.search);
  nr.value = t.get("page"), er.value = t.get("from"), tr.value = t.get("to"), ha.value = t.get("section"), sr.value = t.get("revision"), au.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = J1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Vh(n.type, n.id), Z1.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, i_ = () => {
  const e = new URLSearchParams(location.search);
  ha.value = null, e.delete("section"), e.delete("title"), fa(Object.fromEntries(e));
}, Wi = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), fa(Object.fromEntries(n));
}, r_ = (e) => new URLSearchParams(location.search).get(e), l_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), er.value = e, tr.value = t, n.delete("title"), fa(Object.fromEntries(n));
}, c_ = () => {
  const e = new URLSearchParams(location.search);
  nr.value = null, ha.value = null, ou.value = null, sr.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), fa(Object.fromEntries(e));
}, u_ = () => new URLSearchParams(location.search).get("force-quick-tutorial"), P = () => ({
  isQuickTutorialForced: u_,
  setLanguageURLParams: l_,
  setSectionURLParam: n_,
  setTranslationURLParams: t_,
  initializeURLState: a_,
  clearTranslationURLParameters: c_,
  clearSectionURLParameter: i_,
  setUrlParam: Wi,
  getUrlParam: r_,
  pageURLParameter: nr,
  sourceLanguageURLParameter: er,
  targetLanguageURLParameter: tr,
  sectionURLParameter: ha,
  draftURLParameter: ou,
  revisionURLParameter: sr,
  setPageURLParam: s_,
  currentSuggestionFilters: e_,
  setFilterURLParams: Vh,
  activeDashboardTabParameter: au,
  setActiveDashboardTabParameter: o_
}), Eh = window.Vue.ref, gd = Eh([]), pd = Eh([]);
let md = !1;
function wa() {
  if (!md) {
    const e = mw.config.get(
      "wgContentTranslationSupportedLanguages"
    );
    if (!e)
      throw new Error(
        "[CX] No supported languages found in mw.config for wgContentTranslationSupportedLanguages"
      );
    gd.value = e, pd.value = e, md = !0;
  }
  return {
    supportedSourceLanguageCodes: gd,
    supportedTargetLanguageCodes: pd
  };
}
const d_ = {
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
}, g_ = {
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
}, p_ = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], m_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, h_ = {
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
}, f_ = {
  languages: d_,
  scriptgroups: g_,
  rtlscripts: p_,
  regiongroups: m_,
  territories: h_
};
var Re = f_;
function va(e) {
  return !!Re.languages[e];
}
function Kn(e) {
  return va(e) && Re.languages[e].length === 1 ? Re.languages[e][0] : !1;
}
function w_() {
  return Re.languages;
}
function _a(e) {
  var t = Kn(e);
  return t ? _a(t) : va(e) ? Re.languages[e][0] : "Zyyy";
}
function ru(e) {
  var t = Kn(e);
  return t ? ru(t) : va(e) && Re.languages[e][1] || "UNKNOWN";
}
function da(e) {
  var t = Kn(e);
  return t ? da(t) : va(e) && Re.languages[e][2] || e;
}
function v_() {
  var e, t = {};
  for (e in Re.languages)
    Kn(e) || (t[e] = da(e));
  return t;
}
function Lh(e) {
  var t, n, s = [];
  for (t in Re.languages)
    if (!Kn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === _a(t)) {
          s.push(t);
          break;
        }
    }
  return s;
}
function __(e) {
  return Lh([e]);
}
function Th(e) {
  var t;
  for (t in Re.scriptgroups)
    if (Re.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function lu(e) {
  return Th(_a(e));
}
function Ah(e) {
  var t = {}, n, s, o, a;
  for (s = 0; s < e.length; s++)
    n = e[s], o = Kn(n) || n, a = lu(o), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Dh(e) {
  var t, n, s, o = {};
  for (t in Re.languages)
    if (!Kn(t)) {
      for (n = 0; n < e.length; n++)
        if (ru(t).includes(e[n])) {
          s = lu(t), o[s] === void 0 && (o[s] = []), o[s].push(t);
          break;
        }
    }
  return o;
}
function S_(e) {
  return Dh([e]);
}
function y_(e) {
  var t, n, s, o = [];
  for (t = Ah(e), n = Object.keys(t).sort(), s = 0; s < n.length; s++)
    o = o.concat(t[n[s]]);
  return o;
}
function x_(e, t) {
  var n = da(e) || e, s = da(t) || t;
  return n.toLowerCase() < s.toLowerCase() ? -1 : 1;
}
function Ph(e) {
  return Re.rtlscripts.includes(_a(e));
}
function b_(e) {
  return Ph(e) ? "rtl" : "ltr";
}
function C_(e) {
  return Re.territories[e] || [];
}
function k_(e, t) {
  t.target ? Re.languages[e] = [t.target] : Re.languages[e] = [t.script, t.regions, t.autonym];
}
var I = {
  addLanguage: k_,
  getAutonym: da,
  getAutonyms: v_,
  getDir: b_,
  getGroupOfScript: Th,
  getLanguages: w_,
  getLanguagesByScriptGroup: Ah,
  getLanguagesByScriptGroupInRegion: S_,
  getLanguagesByScriptGroupInRegions: Dh,
  getLanguagesInScript: __,
  getLanguagesInScripts: Lh,
  getLanguagesInTerritory: C_,
  getRegions: ru,
  getScript: _a,
  getScriptGroupOfLanguage: lu,
  isKnown: va,
  isRedirect: Kn,
  isRtl: Ph,
  sortByScriptGroup: y_,
  sortByAutonym: x_
};
const _s = window.Vue.computed;
function Te(e) {
  const t = _s(() => e.state.application.sourceLanguage), n = _s(() => e.state.application.targetLanguage), s = _s(
    () => e.state.application.currentMTProvider
  ), o = _s(
    () => I.getAutonym(t.value)
  ), a = _s(
    () => I.getAutonym(n.value)
  ), r = _s(() => e.state.application.previousRoute);
  return {
    currentMTProvider: s,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: o,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class Ws {
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
    lastrevid: s,
    original: o = null,
    pageimage: a = null,
    pageid: r,
    pagelanguage: l,
    pageprops: u,
    pageviews: d,
    thumbnail: i = null,
    title: c,
    revisions: g,
    _alias: p,
    content: m = null,
    sections: h = []
  } = {}) {
    var f;
    this.language = l, this.title = c, this.pageId = r, this.description = t, this.image = o, this.imageName = a, this.pageprops = u, this.pageviews = d, this.thumbnail = i, this.langLinksCount = n, this.articleSize = (f = g == null ? void 0 : g[0]) == null ? void 0 : f.size, this.revision = s, this.alias = p, this.wikidataId = u == null ? void 0 : u.wikibase_item, this.content = m, this.sections = h;
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
   * @param {PageSection[]} updatedSections
   */
  updateSections(t) {
    for (const n of t) {
      const s = this.sections.find(
        (o) => o.id === n.id
      );
      if (!s)
        return;
      s.updateSubSections(n.subSections);
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
    const n = this.thumbnail.source, s = new RegExp(
      `/\\d+px-${this.imageName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`
    );
    return n.replace(s, `/${t}px-${this.imageName}`);
  }
}
class $_ {
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
    return (n = this.titles.find((s) => s.lang === t)) == null ? void 0 : n.title;
  }
  /**
   * @param {string} language
   * @return {boolean}
   */
  hasLanguage(t) {
    return this.titles.some((n) => n.lang === t);
  }
}
function V_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const E_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), V_();
  const s = new ve.init.mw.MobileArticleTarget(n), o = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = s.createSurface(o);
  return a.setReadOnly(!0), s.surfaces.push(a), s.setSurface(a), a.initialize(), a;
}, L_ = (e, t) => {
  let n, s;
  return t ? (n = E_(e), s = n.$element.find(
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
  }), n.destroy()) : s = $(e).filter("section[rel='cx:Section']"), s;
}, T_ = (e, t) => {
  const n = Array.from(
    L_(e, t)
  );
  return A_(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (o) => {
      const [a, ...r] = o;
      let l;
      const u = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = !1 : (l = !0, r.unshift(a));
      const d = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (i) => new ut({
          sentences: D_(i),
          node: i
        })
      );
      return new Oc({ id: u, subSections: d, isLeadSection: l });
    }
  );
}, A_ = (e) => {
  const t = e.reduce((n, s) => {
    const o = s.dataset.mwSectionNumber;
    return n[o] = n[o] ? [...n[o], s] : [s], n;
  }, {});
  return Object.values(t);
}, D_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new qn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Bh = {
  convertSegmentedContentToPageSections: T_
}, cu = 120, P_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: cu,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return Y.getApi(e).get(n).then((o) => {
    const a = o.query.pages, l = (o.query.redirects || []).reduce(
      (i, c) => Ke(ce({}, i), { [c.to]: c.from }),
      {}
    ), d = (o.query.normalized || []).reduce(
      (i, c) => Ke(ce({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = d[i.title] || l[i.title] || null;
      return new Ws(Ke(ce({}, i), { _alias: c }));
    });
  });
}, B_ = (e, t) => {
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
  return Y.getApi(e).get(n).then((o) => {
    var u, d;
    const a = o.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return l ? Object.freeze(new $_(l, r)) : null;
  });
}, F_ = (e, t, n) => {
  const s = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "langlinks",
    titles: n.join("|"),
    lllang: t,
    origin: "*",
    redirects: !0
  };
  return Y.getApi(e).get(s).then((a) => Object.values(a.query.pages).map((l) => {
    var u, d;
    return (d = (u = l.langlinks) == null ? void 0 : u[0]) == null ? void 0 : d["*"];
  }).filter((l) => !!l));
}, N_ = (e, t, n, s = null) => {
  const o = new Promise((r) => {
    const l = {
      action: "parse",
      page: n,
      meta: "siteinfo",
      prop: "sections",
      format: "json",
      redirects: !0,
      formatversion: 2
    };
    Y.getApi(e).get(l).then((d) => {
      var i;
      return r(((i = d == null ? void 0 : d.parse) == null ? void 0 : i.sections) || []);
    }).fail(() => r([]));
  }).then(
    (r) => r.filter((l) => l.toclevel === 1).map((l) => ({
      title: l.line,
      id: l.number
    }))
  ), a = M_(
    e,
    t,
    n,
    s
  );
  return Promise.all([a, o]).then(
    ([r, l]) => {
      const u = Bh.convertSegmentedContentToPageSections(
        r,
        !1
        // No need to resolve references. Content can be used as it is
      );
      return u.forEach((d) => {
        const i = l.find((c) => c.id === d.id);
        d.originalTitle = (i == null ? void 0 : i.title) || "";
      }), new Ws({
        sections: u,
        content: r,
        pagelanguage: e,
        title: n
      });
    }
  );
}, M_ = (e, t, n, s = null) => {
  const o = Y.getWikiDomainCode(e), a = Y.getWikiDomainCode(t), r = {
    $sourcelanguage: o,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  s && (r.$revision = s, l += "/$revision");
  const u = Y.getCXServerUrl(
    l,
    r
  );
  return fetch(u).then((d) => d.json()).then((d) => d.segmentedContent);
}, U_ = (e) => {
  const t = N1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: cu,
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
  return new Promise((s) => {
    Y.getApi(e).get(n).then((a) => {
      var r;
      return s(((r = a == null ? void 0 : a.query) == null ? void 0 : r.pages) || []);
    }).fail(() => s([]));
  }).then((s) => s.map((o) => new Ws(o)));
}, I_ = (e, t) => {
  const s = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount|pageprops",
    piprop: "thumbnail",
    pithumbsize: cu,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return Y.getApi(t).get(s).then((o) => {
    var a;
    return ((a = o.query) == null ? void 0 : a.pages) || [];
  }).then(
    (o) => o.filter((a) => !("disambiguation" in (a.pageprops || {}))).sort((a, r) => a.index - r.index).map(
      (a) => new Ws(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((o) => (mw.cx.eventlogging.stats.articleSearchFailed(), []));
}, ps = {
  fetchPages: P_,
  fetchLanguageTitles: B_,
  fetchPageContent: N_,
  fetchNearbyPages: U_,
  searchPagesByTitlePrefix: I_,
  fetchLanguageLinksForLanguage: F_
}, R_ = window.Vuex.useStore, Ks = () => {
  const e = R_();
  return (t, n) => {
    n = n.filter(
      (a) => !!a && !e.getters["mediawiki/getPage"](t, a)
    );
    const s = 50, o = [];
    for (let a = 0; a < n.length; a += s) {
      const r = n.slice(a, a + s), l = ps.fetchPages(t, r).then(
        (u) => u.forEach(
          (d) => e.commit("mediawiki/addPage", d)
        )
      );
      o.push(l);
    }
    return Promise.all(o);
  };
}, z_ = window.Vuex.useStore, uu = () => {
  const e = z_(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), { maxSuggestionsPerSlice: o } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(s.value)
  ), r = (d) => a().slice(
    o * d,
    o * (d + 1)
  ), l = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(s.value)
  );
  return {
    getFilteredPageSuggestions: l,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: (d) => l().slice(
      o * d,
      o * (d + 1)
    ),
    getSectionSuggestionsSliceByIndex: r
  };
};
class ms {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} [options.targetTitle]
   * @param {number} options.langLinksCount
   * @param {string} options.wikidataId
   * @param {number} options.size
   * @param {string|null} options.suggestionSeed
   * @param {{ type: String, id: String }|null} options.suggestionProvider
   */
  constructor({
    sourceLanguage: t,
    targetLanguage: n,
    sourceTitle: s,
    targetTitle: o,
    langLinksCount: a,
    wikidataId: r,
    size: l,
    suggestionSeed: u = null,
    suggestionProvider: d = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = s, this.targetTitle = o, this.wikidataId = r, this.size = l, this.langLinksCount = a, this.suggestionProvider = d, this.suggestionSeed = u, this.isListable = !0;
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
    var n, s;
    return ((n = this.suggestionProvider) == null ? void 0 : n.type) === t.type && ((s = this.suggestionProvider) == null ? void 0 : s.id) === t.id;
  }
}
class en {
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
    sourceTitle: s,
    targetTitle: o,
    present: a,
    missing: r,
    sourceSectionInfo: l = {},
    sourceSectionSizes: u = {},
    sourceSections: d = [],
    targetSections: i = [],
    suggestionSeed: c = null,
    isListable: g = !0,
    suggestionProvider: p = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = s, this.targetTitle = o, this.missingSections = r, this.presentSections = a, this.sourceSectionInfo = l, this.sourceSectionSizes = u, this.sourceSections = d, this.targetSections = i, this.suggestionSeed = c, this.isListable = g, this.suggestionProvider = p;
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
    var n, s, o;
    return ((s = (n = this.sourceSectionInfo) == null ? void 0 : n[t]) == null ? void 0 : s.size) || ((o = this.sourceSectionSizes) == null ? void 0 : o[t]);
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
    var n, s;
    return ((n = this.suggestionProvider) == null ? void 0 : n.type) === t.type && ((s = this.suggestionProvider) == null ? void 0 : s.id) === t.id;
  }
}
const Fh = [
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
], O_ = [
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
], j_ = [
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
], H_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], q_ = [
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
], G_ = {
  en: Fh,
  es: O_,
  bn: j_,
  fr: H_,
  de: q_
};
class Hs {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: s,
    missingSectionsCount: o = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = s, this.missingSectionsCount = o;
  }
}
class du {
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
    end_date: s,
    articles_count: o,
    articles_by_language_count: a
  }) {
    this.name = t, this.description = n, this.endDate = s, this.articlesCount = o, this.articlesByLanguageCount = a;
  }
}
class Nh extends ms {
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
    sourceTitle: s,
    targetTitle: o,
    langLinksCount: a,
    wikidataId: r,
    size: l,
    suggestionProvider: u = null,
    collection: d = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: s,
      targetTitle: o,
      langLinksCount: a,
      wikidataId: r,
      size: l,
      suggestionProvider: u
    }), this.collection = new du(d);
  }
}
class Mh extends en {
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
    sourceTitle: s,
    targetTitle: o,
    present: a,
    missing: r,
    sourceSectionInfo: l,
    sourceSectionSizes: u,
    sourceSections: d = [],
    targetSections: i = [],
    isListable: c = !0,
    suggestionProvider: g = null,
    collection: p = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: s,
      targetTitle: o,
      present: a,
      missing: r,
      sourceSectionInfo: l,
      sourceSectionSizes: u,
      sourceSections: d,
      targetSections: i,
      isListable: c,
      suggestionProvider: g
    }), this.collection = new du(p);
  }
}
let Ma = null;
const Uh = (e) => {
  if (Ma)
    return Promise.resolve(Ma);
  const t = "https://en.wikipedia.org/w/api.php", n = new URLSearchParams({
    action: "query",
    meta: "globaluserinfo",
    guiuser: e,
    guiprop: "editcount",
    formatversion: 2,
    origin: "*",
    format: "json"
  }), s = t + "?" + n;
  return fetch(s).then((o) => o.json()).then((o) => (Ma = o.query.globaluserinfo.editcount, Ma)).catch((o) => {
    mw.log.error("Error while fetching global edit count for user. ", o);
  });
}, X_ = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits", W_ = () => C(void 0, null, function* () {
  if (mw.user.isAnon())
    return !1;
  const e = mw.user.getName();
  return (yield Uh(e)) < 100;
}), dt = {
  stub: "stub",
  easy: "easy",
  medium: "medium",
  hard: "hard",
  unknown: "unknown"
}, Ih = {
  easy: 2500,
  medium: 1e4,
  hard: 4e4
}, Rh = {
  easy: 1e3,
  medium: 4e3,
  hard: 12e3
}, zh = (e, t) => !e || e < 0 ? dt.unknown : e < t.easy ? dt.stub : e < t.medium ? dt.easy : e < t.hard ? dt.medium : dt.hard, Oh = (e) => zh(e, Ih), jh = (e) => zh(e, Rh), K_ = (e) => {
  if (!e)
    return !1;
  const t = Oh(e);
  return t === dt.stub || t === dt.easy;
}, Hh = (e) => e ? jh(e) === dt.easy : !1, Y_ = Fh, Q_ = (e, t) => C(void 0, null, function* () {
  if (!(yield W_()))
    return;
  let s;
  e ? e === "/sections" && (s = Rh) : (s = Ih, bn || (t.lead_section = !0)), s && (t.min_size = s[dt.easy], t.max_size = s[dt.medium] - 1);
}), zt = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
  let s = mw.config.get("wgRecommendToolAPIURL");
  yield Q_(e, t), e && (s += e);
  const o = new URL(s);
  Object.keys(t).forEach((a) => {
    t[a] && o.searchParams.append(a, t[a]);
  });
  try {
    const a = yield fetch(o);
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
function J_() {
  return C(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield zt({ urlPostfix: t, urlParams: e })) || [], s = {};
      for (const o in n)
        s[o] = n[o].map(
          (a) => new du(a)
        );
      return s;
    } catch (n) {
      return mw.log.error(
        "Error while fetching the page collections from Recommendation API",
        n
      ), {};
    }
  });
}
function Z_(e, t, n = null, s = 24) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: s
    };
    return n && (o.seed = n), ((yield zt({ urlParams: o })) || []).map(
      (r) => new ms({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        size: r.size,
        langLinksCount: parseInt(r.sitelink_count),
        suggestionSeed: n
      })
    );
  });
}
const eS = (e, t) => C(void 0, null, function* () {
  return ((yield zt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (o) => new ms({
      sourceTitle: o.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: o.wikidata_id,
      size: o.size,
      langLinksCount: parseInt(o.langlinks_count)
    })
  );
}), tS = (e, t) => C(void 0, null, function* () {
  const o = (yield zt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return o && o.map(
    (a) => new en({
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
}), nS = (e, t, n = null) => C(void 0, null, function* () {
  const s = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (s.seed = n), ((yield zt({ urlParams: s })) || []).map(
    (a) => new Nh({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), sS = (e, t, n = null) => C(void 0, null, function* () {
  const s = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (s.seed = n);
  const a = (yield zt({ urlPostfix: "/sections", urlParams: s })) || [];
  return a && a.map(
    (r) => new Mh({
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
function oS(e, t, n) {
  return C(this, null, function* () {
    const s = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), o = Y.getCXServerUrl(
      `/suggest/sections/${s.join("/")}?include_section_sizes=true`
    ), a = yield fetch(o).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new en(a) : null;
  });
}
function aS(e, t, n = null) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: 24
    };
    n && (s.seed = n);
    const a = (yield zt({ urlPostfix: "/sections", urlParams: s })) || [];
    return a && a.map(
      (r) => new en({
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
function iS(e, t, n, s = 24) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: s
    };
    return ((yield zt({ urlParams: o })) || []).map(
      (r) => new ms({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        size: r.size,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function rS(e, t, n, s = 24) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: s
    }, r = (yield zt({ urlPostfix: "/sections", urlParams: o })) || [];
    return r && r.map(
      (l) => new en({
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
function lS(e, t, n, s = 24) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      country: n.join("|"),
      count: s
    };
    return ((yield zt({ urlParams: o })) || []).map(
      (r) => new ms({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        size: r.size,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function cS(e, t, n, s = 24) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      country: n.join("|"),
      count: s
    }, r = (yield zt({ urlPostfix: "/sections", urlParams: o })) || [];
    return r && r.map(
      (l) => new en({
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
function uS(e) {
  return C(this, null, function* () {
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
    }, n = Y.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function dS(e, t) {
  return C(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, s = Y.getApi(e);
    try {
      return (yield s.get(n)).parse;
    } catch (o) {
      return mw.log.error("Error while fetching suggestion sections size", o), [];
    }
  });
}
function gS(e) {
  const t = Y_.map((s) => encodeURIComponent(s)).join("|"), n = Y.getCXServerUrl(
    `/suggest/sections/titles/en/${e}?titles=${t}`
  );
  return fetch(n).then(
    (s) => s.ok ? s.json() : Promise.reject(
      new Error(
        `Failed to load appendix target section titles for language: ${e}`
      )
    )
  ).then((s) => Object.values(s).flat()).catch((s) => []);
}
const pS = (e, t, n) => {
  const s = {
    assert: "user",
    action: "cxfavoritesuggestions",
    listaction: "add",
    title: e,
    from: t,
    to: n
  }, o = new mw.Api();
  return Promise.resolve(o.postWithToken("csrf", s)).catch((a) => {
    mw.log.error("Error while marking suggestion as favorite", a);
  });
}, mS = (e) => {
  const t = {
    assert: "user",
    action: "cxfavoritesuggestions",
    listaction: "remove",
    title: e.title,
    from: e.sourceLanguage,
    to: e.targetLanguage
  }, n = new mw.Api();
  return Promise.resolve(n.postWithToken("csrf", t)).catch((s) => {
    mw.log.error("Error while unmarking favorite suggestion", s);
  });
}, hS = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationfavoritesuggestions"
  }, t = new mw.Api();
  return new Promise((n) => {
    t.get(e).then(
      (o) => n(
        o.query.contenttranslationfavoritesuggestions.suggestions || []
      )
    ).fail(() => {
      mw.log.error("Error while fetching favorite suggestions"), n([]);
    });
  }).then(
    (n) => n.map((s) => new Hs(s))
  );
}, me = {
  fetchFavorites: hS,
  fetchPageSuggestions: Z_,
  fetchSectionSuggestion: oS,
  fetchSectionSuggestions: aS,
  fetchAppendixTargetSectionTitles: gS,
  fetchArticleSections: dS,
  markFavorite: pS,
  unmarkFavorite: mS,
  fetchUserEdits: uS,
  fetchMostPopularPageSuggestions: eS,
  fetchMostPopularSectionSuggestions: tS,
  fetchPageSuggestionsByTopics: iS,
  fetchSectionSuggestionsByTopics: rS,
  fetchPageSuggestionsByCountries: lS,
  fetchSectionSuggestionsByCountries: cS,
  fetchPageCollectionGroups: J_,
  fetchPageSuggestionsByCollections: nS,
  fetchSectionSuggestionsByCollections: sS
}, fS = window.Vuex.useStore, Ys = () => {
  const e = fS(), { sourceLanguage: t, targetLanguage: n } = Te(e), s = (l) => {
    if (!l)
      return !1;
    const u = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((c) => c.sourceTitle);
    return !u.includes(l.sourceTitle) && !i.includes(l.sourceTitle);
  }, o = (l) => {
    const { pageSuggestions: u } = e.state.suggestions;
    return !u.some(
      (i) => i.sourceLanguage === l.sourceLanguage && i.targetLanguage === l.targetLanguage && i.sourceTitle === l.sourceTitle
    ) && s(l);
  }, a = (l) => e.state.suggestions.sectionSuggestions.some(
    (u) => u.sourceLanguage === l.sourceLanguage && u.targetLanguage === l.targetLanguage && u.sourceTitle === l.sourceTitle
  );
  return {
    isPageSuggestionValid: o,
    isSectionSuggestionValid: (l) => {
      if (!l)
        return !1;
      const u = e.state.suggestions.appendixSectionTitles[n.value] || [];
      return !a(l) && s(l) && l.isValid(u);
    },
    sectionSuggestionExists: a
  };
};
class wS {
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
}
const vS = window.Vuex.useStore, gu = window.Vue.ref, _S = gu([]), SS = gu([]);
let Tr = !1, Ar = !1, hd = !1;
const Ua = gu([]);
let co = null;
const Dr = {
  page: _S,
  section: SS
}, qh = () => {
  const e = vS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), s = () => C(void 0, null, function* () {
    Ar || (Ua.value = yield me.fetchUserEdits(t.value).then((d) => (Ar = !0, d)));
  }), o = () => C(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !Tr)
      return Tr = !0, d.map(
        (i) => i.sourceTitle
      );
    if (Tr = !0, !Ar && (yield s(), Ua.value.length > 0))
      return Ua.value;
    if (!hd) {
      const i = yield me.fetchUserEdits(n.value).then((c) => (hd = !0, c));
      if (i.length)
        return ps.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (d) => {
    let i = Dr[d].value.find(
      (c) => c.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new wS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), Dr[d].value.push(i)), i;
  }, r = () => C(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield o(), i || (d = !0);
      for (const c in Dr) {
        const g = a(c);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), l = () => co || (co = r(), co.finally(() => {
    co = null;
  }));
  return {
    getSuggestionSeed: (d) => C(void 0, null, function* () {
      let i = a(d);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: s,
    previousEditsInSource: Ua
  };
}, yS = 5;
function gs(e) {
  return C(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < yS);
  });
}
const xS = window.Vuex.useStore, bS = () => {
  const e = xS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), { getSuggestionSeed: s } = qh(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys(), l = {
    id: nn,
    type: Qe
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const c = [];
      return yield gs(() => C(void 0, null, function* () {
        const g = yield s("page");
        let p = yield me.fetchPageSuggestions(
          t.value,
          n.value,
          g || null
        );
        return p = p.filter(
          (m) => a(m)
        ), p = p.slice(0, i), c.push(...p), c.length >= i;
      })), c.forEach(
        (g) => g.suggestionProvider = l
      ), c;
    }),
    fetchSectionSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const c = [];
      return yield gs(() => C(void 0, null, function* () {
        const g = yield s("section"), p = yield me.fetchSectionSuggestions(
          t.value,
          n.value,
          g || null
        );
        if (!p)
          return !1;
        let m = p.filter(
          (f) => o(f)
        );
        const h = p.filter(
          (f) => !o(f)
        );
        return m = m.slice(0, i), c.push(...m), h.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), c.length >= i;
      })), c.forEach(
        (g) => g.suggestionProvider = l
      ), c;
    })
  };
}, CS = window.Vuex.useStore, kS = () => {
  const e = CS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), s = {
    id: Cn,
    type: Qe
  }, {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys();
  return { fetchSectionSuggestionsPopular: (d) => C(void 0, null, function* () {
    const i = [];
    return yield gs(() => C(void 0, null, function* () {
      const c = yield me.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let g = c.filter(
        (m) => o(m)
      );
      const p = c.filter(
        (m) => !o(m)
      );
      return g = g.slice(0, d), i.push(...g), p.forEach((m) => {
        m && !r(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.length >= d;
    })), i.forEach(
      (c) => c.suggestionProvider = s
    ), i;
  }), fetchPageSuggestionsPopular: (d) => C(void 0, null, function* () {
    const i = [];
    return yield gs(() => C(void 0, null, function* () {
      let c = yield me.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, d), i.push(...c), i.length >= d;
    })), i.forEach(
      (c) => c.suggestionProvider = s
    ), i;
  }) };
}, Gh = window.Vue.ref, uo = "ungrouped", fd = Gh({}), wd = Gh(!1), pu = () => ({
  fetchPageCollectionGroups: () => C(void 0, null, function* () {
    try {
      const t = yield me.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((s, o) => s === uo ? 1 : o === uo ? -1 : s.localeCompare(o)).map((s) => [s, t[s]])
      );
      n[uo] && (n[uo] = n[uo].sort(
        (s, o) => s.name.localeCompare(o.name)
      )), fd.value = n, wd.value = !0;
    } catch (t) {
      mw.log.error("Failed to fetch page collections", t);
    }
  }),
  pageCollectionGroupsFetched: wd,
  pageCollectionGroups: fd
});
class ra {
  /**
   * @param {string} id
   * @param {string} label
   * @param {string} type
   * @param {SuggestionFilter[]} filters
   */
  constructor({ id: t, label: n, type: s, filters: o }) {
    this.id = t, this.label = n, this.type = s, this.filters = o;
  }
}
const $S = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', VS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', ES = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', LS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', TS = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', AS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', DS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', PS = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', BS = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', FS = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', NS = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', MS = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', US = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', IS = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', RS = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', zS = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', OS = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', jS = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', HS = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Xh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', qS = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', GS = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', XS = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', WS = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', KS = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', YS = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', QS = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', JS = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', ZS = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', ey = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', ty = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', ny = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', sy = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', oy = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', ay = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Wh = $S, iy = VS, Kh = {
  ltr: ES,
  shouldFlip: !0
}, Yh = {
  ltr: LS,
  shouldFlip: !0
}, mu = {
  ltr: TS,
  shouldFlip: !0
}, Qh = AS, Jh = DS, Zh = PS, ry = BS, ly = FS, Qs = NS, cy = MS, hu = US, fu = IS, jc = RS, uy = zS, dy = {
  ltr: OS,
  shouldFlip: !0
}, gy = {
  ltr: jS,
  shouldFlip: !0
}, py = HS, my = {
  langCodeMap: {
    ar: Xh
  },
  default: qS
}, hy = {
  langCodeMap: {
    ar: Xh
  },
  default: GS
}, ef = XS, or = {
  ltr: WS,
  shouldFlip: !0
}, fy = KS, wy = YS, Sa = {
  ltr: QS,
  shouldFlip: !0
}, wu = {
  ltr: JS,
  shouldFlip: !0
}, vy = {
  ltr: ZS,
  shouldFlip: !0
}, tf = ey, _y = ty, Hc = ny, Sy = sy, yy = oy, nf = ay, xy = {
  [nn]: nf,
  [Cn]: py,
  [ee]: mu
}, by = {
  [ee]: gy,
  [ke]: fy
};
class Rt {
  /**
   * @param {string} id
   * @param {string} label
   * @param {string} type
   * @param {SuggestionFilter[]} subFilters
   */
  constructor({ id: t, label: n, type: s, subFilters: o = [] }) {
    this.id = t, this.label = n, this.type = s, this.subFilters = o;
  }
  get expandable() {
    return this.subFilters.length > 0;
  }
  get chipLabel() {
    return this.expandable ? `${this.label} (${this.subFilters.length})` : this.label;
  }
  get provider() {
    return this.type === Qe ? this.id : this.type;
  }
  get icon() {
    return xy[this.provider] || null;
  }
  get expandableIcon() {
    return by[this.provider] || this.icon;
  }
}
const go = window.Vue.computed, { topics: vd, regions: _d } = mw.loader.require(
  "ext.cx.articlefilters"
), Cy = (e) => new ra({
  id: e.groupId,
  label: e.label,
  type: We,
  filters: e.topics.map(
    (t) => new Rt({
      id: t.topicId,
      label: t.label,
      type: We
    })
  )
}), ar = () => {
  const e = ge(), { currentSuggestionFilters: t, setFilterURLParams: n } = P(), { validateFilters: s, filtersValidatorError: o } = su(), a = new Rt({
    id: nn,
    type: Qe,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), r = new Rt({
    id: Cn,
    type: Qe,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), l = new Rt({
    id: ee,
    type: Qe,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: u, pageCollectionGroupsFetched: d } = pu(), i = go(() => {
    const S = new ra({
      id: Qe,
      type: Qe,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [a, r]
    });
    return Object.keys(u.value).length > 1 && S.filters.push(l), S;
  }), c = () => {
    const S = ce({}, u.value);
    delete S.ungrouped;
    const F = [];
    for (const A in S) {
      const R = S[A].map(
        (ie) => new Rt({
          id: ie.name,
          label: ie.name,
          type: ee
        })
      ), K = new Rt({
        id: A,
        label: A,
        type: ee,
        subFilters: R
      });
      F.push(K);
    }
    const V = (u.value.ungrouped || []).map(
      (A) => new Rt({
        id: A.name,
        label: A.name,
        type: ee
      })
    );
    return [...F, ...V];
  }, g = go(
    () => new ra({
      id: ee,
      type: ee,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: c()
    })
  ), p = go(() => new ra({
    id: ke,
    type: ke,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: _d.map(
      (S) => new Rt({
        id: S.id,
        label: S.label,
        type: ke,
        subFilters: S.countries.map(
          (F) => new Rt({
            id: F.id,
            label: F.label,
            type: ke
          })
        )
      })
    )
  })), m = go(() => {
    const S = [
      i.value,
      ...vd.map(Cy),
      p.value
    ];
    return g.value.filters.length && S.splice(1, 0, g.value), S;
  }), h = go(
    () => [t.value.type, t.value.id].includes(
      ee
    ) && !d.value
  ), f = () => {
    if (h.value)
      return [];
    const S = _();
    return S.type === We || S.type === ke || S.type === yt || S.type === ee || S.id === ee ? [S, a] : [a, r];
  }, v = (S) => {
    n(S.type, S.id);
  }, _ = () => t.value.type === yt ? new Rt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : m.value.flatMap((S) => S.filters).flatMap((S) => [S, ...S.subFilters || []]).find(b), b = (S) => t.value.id === S.id;
  return {
    allFilters: m,
    getFiltersSummary: f,
    selectFilter: v,
    isFilterSelected: b,
    getArticleTopics: (S) => {
      const V = vd.flatMap((A) => A.topics).find((A) => A.topicId === S);
      return V ? V.articletopics : [];
    },
    waitingForPageCollectionsFetch: h,
    findSelectedFilter: _,
    validateURLFilterWithCollections: () => {
      if (!d.value)
        return;
      const S = Object.values(u.value).flat(), F = s(
        {
          type: t.value.type,
          id: t.value.id
        },
        S
      );
      n(F.type, F.id), o.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (S) => {
      const F = _d.find((V) => V.id === S);
      return F ? F.countries.map((V) => V.id) : [S];
    }
  };
}, ky = window.Vuex.useStore, $y = () => {
  const e = ky(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys(), { getArticleTopics: l } = ar();
  return {
    fetchPageSuggestionsByTopics: (i) => C(void 0, null, function* () {
      const c = s.value.id, g = {
        id: c,
        type: We
      }, p = l(c);
      let m = yield me.fetchPageSuggestionsByTopics(
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
    fetchSectionSuggestionsByTopics: (i) => C(void 0, null, function* () {
      const c = s.value.id, g = {
        id: c,
        type: We
      }, p = l(c), m = [];
      return yield gs(() => C(void 0, null, function* () {
        const h = yield me.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          p
        );
        let f = h.filter(
          (_) => o(_)
        );
        const v = h.filter(
          (_) => !o(_)
        );
        return f = f.slice(0, i), m.push(...f), v.forEach((_) => {
          _ && !r(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
        }), m.length >= i;
      })), m.forEach(
        (h) => h.suggestionProvider = g
      ), m;
    })
  };
}, Vy = window.Vuex.useStore, Ey = () => {
  const e = Vy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys(), { getCountries: l } = ar();
  return {
    fetchPageSuggestionsByCountries: (i) => C(void 0, null, function* () {
      let c = yield me.fetchPageSuggestionsByCountries(
        t.value,
        n.value,
        l(s.value.id)
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, i), c.forEach(
        (g) => g.suggestionProvider = s.value
      ), c;
    }),
    fetchSectionSuggestionsByCountries: (i) => C(void 0, null, function* () {
      const c = [];
      return yield gs(() => C(void 0, null, function* () {
        const g = yield me.fetchSectionSuggestionsByCountries(
          t.value,
          n.value,
          l(s.value.id)
        );
        let p = g.filter(
          (h) => o(h)
        );
        const m = g.filter(
          (h) => !o(h)
        );
        return p = p.slice(0, i), c.push(...p), m.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), c.length >= i;
      })), c.forEach(
        (g) => g.suggestionProvider = s.value
      ), c;
    })
  };
}, Ly = window.Vuex.useStore, Ty = window.Vue.computed, Ay = () => {
  const e = Ly(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), o = Ty(() => {
    var i;
    return ((i = s.value) == null ? void 0 : i.type) !== ee ? null : s.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: l
  } = Ys();
  return {
    fetchSectionSuggestionsByCollections: () => C(void 0, null, function* () {
      const i = [], c = yield me.fetchSectionSuggestionsByCollections(
        t.value,
        n.value,
        o.value
      );
      let g = c.filter(
        (m) => a(m)
      );
      const p = c.filter(
        (m) => !a(m)
      );
      return i.push(...g), p.forEach((m) => {
        m && !l(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.forEach(
        (m) => m.suggestionProvider = s.value
      ), i;
    }),
    fetchPageSuggestionsByCollections: () => C(void 0, null, function* () {
      const i = [];
      let c = yield me.fetchPageSuggestionsByCollections(
        t.value,
        n.value,
        o.value
      );
      return c = c.filter(
        (g) => r(g)
      ), i.push(...c), i.forEach(
        (g) => g.suggestionProvider = s.value
      ), i;
    })
  };
}, Dy = window.Vuex.useStore, Py = () => {
  const e = Dy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys();
  return {
    fetchPageSuggestionsBySeed: (d) => C(void 0, null, function* () {
      const i = s.value.id;
      let c = yield me.fetchPageSuggestions(
        t.value,
        n.value,
        i
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, d), c.forEach(
        (g) => g.suggestionProvider = {
          id: i,
          type: yt
        }
      ), c;
    }),
    fetchSectionSuggestionsBySeed: (d) => C(void 0, null, function* () {
      const i = [], c = s.value.id;
      return yield gs(() => C(void 0, null, function* () {
        const g = yield me.fetchSectionSuggestions(
          t.value,
          n.value,
          c
        );
        if (!g)
          return !1;
        let p = g.filter(
          (h) => o(h)
        );
        const m = g.filter(
          (h) => !o(h)
        );
        return p = p.slice(0, d), i.push(...p), m.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), i.length >= d;
      })), i.forEach(
        (g) => g.suggestionProvider = {
          id: c,
          type: yt
        }
      ), i;
    })
  };
}, By = () => {
  const { currentSuggestionFilters: e } = P(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = bS(), { fetchPageSuggestionsPopular: s, fetchSectionSuggestionsPopular: o } = kS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = $y(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: u
  } = Ey(), {
    fetchPageSuggestionsByCollections: d,
    fetchSectionSuggestionsByCollections: i
  } = Ay(), { fetchPageSuggestionsBySeed: c, fetchSectionSuggestionsBySeed: g } = Py(), p = {
    [nn]: t,
    [Cn]: s,
    [ee]: d,
    [We]: a,
    [ke]: l,
    [yt]: c
  }, m = {
    [nn]: n,
    [Cn]: o,
    [ee]: i,
    [We]: r,
    [ke]: u,
    [yt]: g
  }, h = (_) => _.type === Qe ? _.id : _.type;
  return {
    getCurrentPageSuggestionProvider: () => p[h(e.value)],
    getCurrentSectionSuggestionProvider: () => m[h(e.value)]
  };
}, Fy = window.Vuex.useStore, vu = () => {
  const e = Fy(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = uu(), { sourceLanguageURLParameter: s } = P(), o = Ks(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: u
  } = By(), d = (g) => {
    try {
      const p = g.map((m) => m.sourceTitle);
      if (p.length)
        return o(s.value, p);
    } catch (p) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const g = a(), m = yield u()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), d(m), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const g = r(), m = yield l()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), d(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, Ny = window.Vuex.useStore, sf = () => {
  const e = Ny();
  return (t) => C(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield me.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, My = window.Vuex.useStore, of = () => {
  const e = My(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = vu(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: o } = uu(), { targetLanguageURLParameter: a } = P(), r = sf();
  return () => C(void 0, null, function* () {
    const l = o(0), u = s(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, i = l.length === d, c = u.length === d;
    i && c || (yield r(a.value), t(), n());
  });
}, Uy = window.Vuex.useStore, Pr = /* @__PURE__ */ new Map(), ir = () => {
  const e = Uy(), t = Ks();
  return (n, s, o) => C(void 0, null, function* () {
    const a = `${n}:${s}:${o}`;
    if (Pr.has(a))
      return Pr.get(a);
    const l = (() => C(void 0, null, function* () {
      let u = e.getters["suggestions/getSectionSuggestionsForArticle"](n, s, o);
      if (!u) {
        u = yield me.fetchSectionSuggestion(
          n,
          o,
          s
        );
        try {
          if (yield t(n, [o]), u)
            u.isListable = !1, e.commit("suggestions/addSectionSuggestion", u);
          else {
            const d = e.getters["mediawiki/getPage"](
              n,
              o
            );
            return new ms({
              sourceLanguage: n,
              targetLanguage: s,
              sourceTitle: o,
              langLinksCount: d.langLinksCount,
              size: d.articleSize,
              wikidataId: d.wikidataId
            });
          }
        } catch (d) {
          const i = new Error(
            `No page metadata found for title ${o} and language pair ${n}-${s}. ${d}`
          );
          throw mw.errorLogger.logError(i, "error.contenttranslation"), i;
        }
      }
      return u;
    }))();
    return Pr.set(a, l), l;
  });
}, Sd = window.Vue.computed, Iy = window.Vuex.useStore, sn = () => {
  const e = Iy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s
  } = P(), o = Sd(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      s.value
    )
  ), a = Sd(() => o.value ? o.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: o,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => o.value.getTitleForLanguage(l) || o.value.getTitleForLanguage(u)
  };
}, af = window.Vuex.useStore, { setLanguageURLParams: Ry } = P(), _u = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), Ry(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, rf = () => {
  const e = af(), t = of();
  return (n, s) => {
    const { sourceLanguage: o, targetLanguage: a } = Te(e);
    n === s && (n = a.value, s = o.value), _u(e, n, s), t();
  };
}, zy = () => {
  const e = af(), t = ir(), { currentLanguageTitleGroup: n, targetPageExists: s } = sn(), o = Ks();
  return (a, r) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      setPageURLParam: d,
      clearSectionURLParameter: i
    } = P();
    a === r && (a = u.value, r = l.value);
    const c = n.value.getTitleForLanguage(a);
    _u(e, a, r), d(c), s.value ? (i(), yield t(
      l.value,
      u.value,
      c
    )) : yield o(l.value, [c]);
  });
}, Oy = window.Vuex.useStore, jy = window.Vue.ref, yd = jy(!1), lf = () => {
  const e = Oy(), { supportedSourceLanguageCodes: t, supportedTargetLanguageCodes: n } = wa(), { sourceLanguageURLParameter: s, targetLanguageURLParameter: o } = P(), a = () => {
    const l = Y.getCurrentWikiLanguageCode(), u = (h) => t.value.includes(h), d = (h) => n.value.includes(h), i = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, c = [
      o.value,
      mw.storage.get("cxTargetLanguage"),
      l,
      i.targetLanguage
    ], g = [
      s.value,
      mw.storage.get("cxSourceLanguage"),
      i.sourceLanguage,
      l,
      i.targetLanguage
    ], p = c.find(
      (h) => d(h)
    );
    return { sourceLanguage: g.find(
      (h) => u(h) && h !== p
    ), targetLanguage: p };
  };
  return { initializeApplicationLanguages: () => {
    const { sourceLanguage: l, targetLanguage: u } = a();
    _u(e, l, u), yd.value = !0;
  }, applicationLanguagesInitialized: yd };
};
const Hy = window.Vue.resolveDynamicComponent, xd = window.Vue.openBlock, bd = window.Vue.createBlock, qy = window.Vue.Transition, po = window.Vue.withCtx, mo = window.Vue.createVNode, Gy = window.Vue.resolveComponent, Br = window.Vue.unref, Xy = window.Vuex.useStore, Cd = window.Vue.computed, Wy = window.Vue.onMounted, Ky = window.Vue.inject, Yy = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = P(), { initializeApplicationLanguages: n } = lf();
    t(), n();
    const s = Ky("breakpoints"), o = Cd(() => s.value.mobile), a = Xy(), r = Cd(
      () => a.state.application.autoSavePending
    );
    return Wy(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && wh.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof Xs && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, u) => {
      const d = Gy("router-view");
      return xd(), bd(Br(_0), { id: "contenttranslation" }, {
        default: po(() => [
          mo(Br(U), { class: "cx-container" }, {
            default: po(() => [
              mo(Br(k), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: po(() => [
                  mo(d, null, {
                    default: po(({ Component: i, route: c }) => [
                      mo(qy, {
                        name: o.value ? c.meta.transitionName : ""
                      }, {
                        default: po(() => [
                          (xd(), bd(Hy(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      mo(B1)
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
}, Qy = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, Jy = {
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
    (s) => s.sourceLanguage === t && s.targetLanguage === n
  )
};
class cf {
  constructor({ id: t, type: n, question: s, url: o }) {
    this.id = t, this.type = n, this.question = s, this.url = o;
  }
}
class Xn {
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
    type: s = "generic",
    status: o,
    details: a = null
  }) {
    this.text = t, this.title = n, this.type = s, this.status = o, this.details = a && new cf(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const kd = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (o, a) => Ke(ce({}, o), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class Zy {
  /**
   * @param {{user, source, mt, sequenceId}} unit
   * @param {{engine: null, content: string, timestamp: string}} unit.user
   * @param {{engine: null, content: string, timestamp: string}} unit.source
   * @param {{engine: string, content: string, timestamp: string}} unit.mt - current possible values for engine: "Elia"|"MinT"|"Google"|"Yandex"
   * @param {number} unit.sequenceId
   */
  constructor({ user: t, source: n, mt: s, sequenceId: o }) {
    this.user = t, this.source = n, this.mt = s, this.sequenceId = o;
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
    var o, a;
    const t = kd((o = this.user) == null ? void 0 : o.content), n = kd((a = this.mt) == null ? void 0 : a.content);
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
class Su extends tu {
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
    sourceLanguage: s,
    targetLanguage: o,
    startTimestamp: a,
    lastUpdatedTimestamp: r,
    pageRevision: l,
    status: u,
    targetTitle: d,
    targetUrl: i,
    sectionTranslations: c
  }) {
    super({
      translationId: t,
      sourceTitle: n,
      sourceLanguage: s,
      targetLanguage: o,
      startTimestamp: a,
      lastUpdatedTimestamp: r,
      pageRevision: l,
      status: u,
      targetTitle: d
    }), this.targetUrl = i, this.sectionTranslations = c;
  }
}
const rr = mw.user.isAnon() ? void 0 : "user", uf = (e) => {
  if (e === "assertuserfailed")
    throw new Xs();
};
function df(e, t = null) {
  return C(this, null, function* () {
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
    return t && (n.offset = t), new mw.Api().get(n).then((o) => C(this, null, function* () {
      var l;
      const a = o.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (u) => new Zi(Ke(ce({}, u), { status: e }))
      ) : r = a.map(
        (u) => new Su(Ke(ce({}, u), { status: e }))
      ), (l = o.continue) != null && l.offset) {
        const u = yield df(
          e,
          o.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function ex(e) {
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
  return new mw.Api().get(t).then((s) => {
    const { translation: o } = s.query.contenttranslation;
    return Object.values(o.translationUnits).map(
      (a) => new Zy(a)
    );
  });
}
function tx(e, t, n, s, o) {
  return C(this, null, function* () {
    if (!s)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== ae.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = Y.getCXServerUrl(a);
    return fetch(r, {
      headers: { "Content-Type": "application/json", Authorization: o },
      method: "POST",
      body: JSON.stringify({ html: `<div>${s}</div>` })
    }).then(
      (l) => Promise.all([l.json(), Promise.resolve(l.ok)])
    ).then(([l, u]) => {
      var i, c;
      if (!u) {
        const g = l.detail || l.type || l.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(g);
      }
      return (c = (i = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(l.contents)) == null ? void 0 : i.groups) == null ? void 0 : c.content;
    }).catch((l) => Promise.reject(l));
  });
}
const nx = (e, t, n) => {
  const s = Y.getApi(t);
  return Promise.resolve(
    s.post({
      origin: "*",
      action: "visualeditor",
      paction: "parsefragment",
      page: n,
      wikitext: e,
      pst: !0
    })
  ).then((o) => o.visualeditor.content).catch((o) => (mw.log.error(o), Promise.reject(o)));
}, sx = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: s,
  targetSectionTitle: o,
  sourceLanguage: a,
  targetLanguage: r,
  revision: l,
  captchaId: u,
  captchaWord: d,
  publishTarget: i,
  sectionTranslationId: c,
  existingSectionTitle: g
}) => {
  const p = {
    assert: rr,
    action: "cxpublishsection",
    title: n,
    html: e,
    sourcetitle: t,
    sourcerevid: l,
    sourcesectiontitle: s,
    targetsectiontitle: o,
    sourcelanguage: a,
    targetlanguage: r,
    publishtarget: i,
    sectiontranslationid: c,
    existingsectiontitle: g
  };
  return u && (p.captchaid = u, p.captchaword = d), new mw.Api().postWithToken("csrf", p).then((h) => {
    if (h = h.cxpublishsection, h.result === "error") {
      if (h.edit.captcha)
        return {
          publishFeedbackMessage: new Xn({
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
    uf(h);
    let v;
    return f = f || {}, f.exception ? v = f.exception.message : f.error ? v = f.error.info : v = "Unknown error", {
      publishFeedbackMessage: new Xn({
        text: v,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, ox = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: s,
  sourceLanguage: o,
  targetLanguage: a,
  revision: r,
  units: l,
  sectionId: u,
  isSandbox: d,
  progress: i
}) => {
  const c = {
    assert: rr,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: r,
    sourcesectiontitle: n,
    targetsectiontitle: s,
    sourcelanguage: o,
    targetlanguage: a,
    content: JSON.stringify(l),
    sectionid: u,
    issandbox: d,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", c).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    uf(p);
    let h;
    return m.exception ? (h = m.exception.message, mw.cx.eventlogging.stats.saveFailure(!0)) : m.error ? (h = m.error.info, m.error.code && m.error.code.indexOf("internal_api_error") === 0 && mw.cx.eventlogging.stats.saveFailure(!0)) : (h = "Unknown error", mw.cx.eventlogging.stats.saveFailure(!0)), new Xn({ text: h, status: "error" });
  });
}, ax = (e) => {
  const t = {
    assert: rr,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((s) => s.cxsplit.result === "success");
}, ix = () => {
  const e = {
    assert: rr,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new Su(n.cxcheckunreviewed.translation)
  );
}, rx = (e, t, n) => {
  const s = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", s).then(() => !0).catch(() => !1);
}, lx = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, cx = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), xt = {
  fetchTranslations: df,
  fetchTranslationUnits: ex,
  fetchSegmentTranslation: tx,
  parseTemplateWikitext: nx,
  publishTranslation: sx,
  saveTranslation: ox,
  deleteTranslation: rx,
  fetchTranslatorStats: cx,
  deleteCXTranslation: lx,
  splitTranslation: ax,
  checkUnreviewedTranslations: ix
};
function ux(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield xt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const dx = {
  fetchTranslatorStats: ux
}, gx = {
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
}, px = {
  namespaced: !0,
  state: Qy,
  getters: Jy,
  actions: dx,
  mutations: gx
}, mx = {
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
  appendixSectionTitles: G_
}, hx = {
  getFavoriteTitlesByLanguagePair: (e) => (t, n) => e.favorites.filter(
    (s) => s.sourceLanguage === t && s.targetLanguage === n
  ).map((s) => s.title),
  getPageSuggestionsForPair: (e) => (t, n) => e.pageSuggestions.filter(
    (s) => s.sourceLanguage === t && s.targetLanguage === n && s.isListable
  ),
  getSectionSuggestionsForPair: (e) => (t, n) => e.sectionSuggestions.filter(
    (s) => s.sourceLanguage === t && s.targetLanguage === n && s.isListable
  ),
  /**
   * @param state
   * @return {function(string, string, string): SectionSuggestion}
   */
  getSectionSuggestionsForArticle: (e) => (t, n, s) => e.sectionSuggestions.find(
    (o) => o.sourceLanguage === t && o.targetLanguage === n && o.sourceTitle === s
  ),
  appendixTitlesExistForLanguage: (e) => (t) => {
    var n;
    return (((n = e.appendixSectionTitles) == null ? void 0 : n[t]) || []).length > 0;
  }
}, fx = {
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
    const { title: n, sourceLanguage: s, targetLanguage: o } = t;
    e.favorites = e.favorites.filter(
      (a) => a.title !== n || a.sourceLanguage !== s || a.targetLanguage !== o
    );
  },
  setIsPageSuggestionsFetchPending(e, t) {
    e.isPageSuggestionsFetchPending = t;
  },
  setIsSectionSuggestionsFetchPending(e, t) {
    e.isSectionSuggestionsFetchPending = t;
  }
}, wx = {
  namespaced: !0,
  state: mx,
  getters: hx,
  actions: {},
  mutations: fx
}, vx = {
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
}, _x = {
  /**
   * In case of a null or empty title, this getter should
   * return null
   * @param {Object} state
   * @return {function(string, string|null): Page|null}
   */
  getPage: (e) => (t, n) => e.pages.find(
    (s) => s.language === t && (s.title === n || s.alias && s.alias === n)
  ),
  /**
   * @param {object} state
   * @return {function(string, string): LanguageTitleGroup|null}
   */
  getLanguageTitleGroup: (e) => (t, n) => e.languageTitleGroups.find(
    (s) => s.titles.find(
      (o) => o.lang === t && o.title === n
    )
  ),
  /**
   * Get MTProviderGroup for the given language pair
   * @param {object} state
   * @returns {function(sourceLanguage: string, targetLanguage: string): string[]} - method returning an array of supported providers
   */
  getSupportedMTProviders: (e) => (t, n) => {
    var s;
    return ((s = e.supportedMTProviderGroups.find(
      (o) => o.sourceLanguage === t && o.targetLanguage === n
    )) == null ? void 0 : s.providers) || [];
  },
  isValidProviderForTranslation: (e, t) => (n, s, o) => t.getSupportedMTProviders(n, s).includes(o) && o !== ae.EMPTY_TEXT_PROVIDER_KEY,
  /**
   * Get nearby articles (based on user location) in current source language
   *
   * @param {Object} state
   * @param {Object} getters
   * @param {Object} rootState
   * @return {Page[]}
   */
  getNearbyPages: (e, t, n) => {
    const s = n.application.sourceLanguage;
    return e.nearbyPages[s];
  }
};
function Sx(s) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: o } = t.application;
    if ((r = n.nearbyPages[o]) != null && r.length)
      return;
    const a = yield ps.fetchNearbyPages(o);
    e("addNearbyPages", { language: o, pages: a });
  });
}
const yx = { fetchNearbyPages: Sx }, xx = {
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
}, bx = {
  namespaced: !0,
  state: vx,
  getters: _x,
  actions: yx,
  mutations: xx
}, Cx = {
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
}, kx = {
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
    const { sourceLanguage: n, targetLanguage: s } = e, o = ae.getStorageKey(
      n,
      s
    );
    mw.storage.set(o, t);
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
}, $x = {
  namespaced: !0,
  state: Cx,
  mutations: kx
}, Vx = window.Vuex.createStore, Ex = Vx({
  modules: { translator: px, suggestions: wx, mediawiki: bx, application: $x }
});
function Lx() {
  return gf().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function gf() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Tx = typeof Proxy == "function", Ax = "devtools-plugin:setup", Dx = "plugin:settings:set";
let Ss, qc;
function Px() {
  var e;
  return Ss !== void 0 || (typeof window != "undefined" && window.performance ? (Ss = !0, qc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Ss = !0, qc = global.perf_hooks.performance) : Ss = !1), Ss;
}
function Bx() {
  return Px() ? qc.now() : Date.now();
}
class Fx {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const s = {};
    if (t.settings)
      for (const r in t.settings) {
        const l = t.settings[r];
        s[r] = l.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, s);
    try {
      const r = localStorage.getItem(o), l = JSON.parse(r);
      Object.assign(a, l);
    } catch (r) {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(r) {
        try {
          localStorage.setItem(o, JSON.stringify(r));
        } catch (l) {
        }
        a = r;
      },
      now() {
        return Bx();
      }
    }, n && n.on(Dx, (r, l) => {
      r === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (r, l) => this.target ? this.target.on[l] : (...u) => {
        this.onQueue.push({
          method: l,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (r, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...u) => (this.targetQueue.push({
        method: l,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[l](...u)) : (...u) => new Promise((d) => {
        this.targetQueue.push({
          method: l,
          args: u,
          resolve: d
        });
      })
    });
  }
  setRealTarget(t) {
    return C(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Nx(e, t) {
  const n = e, s = gf(), o = Lx(), a = Tx && n.enableEarlyProxy;
  if (o && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    o.emit(Ax, e, t);
  else {
    const r = a ? new Fx(n, o) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
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
const pf = window.Vue.getCurrentInstance, qs = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Zt = window.Vue.computed, la = window.Vue.unref, Mx = window.Vue.watchEffect, mf = window.Vue.defineComponent, Ux = window.Vue.reactive, hf = window.Vue.h, Fr = window.Vue.provide, Ix = window.Vue.ref, ff = window.Vue.watch, Rx = window.Vue.shallowRef, zx = window.Vue.shallowReactive, Ox = window.Vue.nextTick, xn = typeof window != "undefined";
function jx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const J = Object.assign;
function Nr(e, t) {
  const n = {};
  for (const s in t) {
    const o = t[s];
    n[s] = pt(o) ? o.map(e) : e(o);
  }
  return n;
}
const ca = () => {
}, pt = Array.isArray;
function X(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Hx = /\/$/, qx = (e) => e.replace(Hx, "");
function Mr(e, t, n = "/") {
  let s, o = {}, a = "", r = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (s = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), o = e(a)), l > -1 && (s = s || t.slice(0, l), r = t.slice(l, t.length)), s = Wx(s != null ? s : t, n), {
    fullPath: s + (a && "?") + a + r,
    path: s,
    query: o,
    hash: r
  };
}
function Gx(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function $d(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Vd(e, t, n) {
  const s = t.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && Wn(t.matched[s], n.matched[o]) && wf(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Wn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function wf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Xx(e[n], t[n]))
      return !1;
  return !0;
}
function Xx(e, t) {
  return pt(e) ? Ed(e, t) : pt(t) ? Ed(t, e) : e === t;
}
function Ed(e, t) {
  return pt(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Wx(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return X(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), s = e.split("/"), o = s[s.length - 1];
  (o === ".." || o === ".") && s.push("");
  let a = n.length - 1, r, l;
  for (r = 0; r < s.length; r++)
    if (l = s[r], l !== ".")
      if (l === "..")
        a > 1 && a--;
      else
        break;
  return n.slice(0, a).join("/") + "/" + s.slice(r - (r === s.length ? 1 : 0)).join("/");
}
var ga;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ga || (ga = {}));
var ua;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(ua || (ua = {}));
function Kx(e) {
  if (!e)
    if (xn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), qx(e);
}
const Yx = /^[^#]+#/;
function Qx(e, t) {
  return e.replace(Yx, "#") + t;
}
function Jx(e, t) {
  const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  };
}
const lr = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Zx(e) {
  let t;
  if ("el" in e) {
    const n = e.el, s = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!s || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (s && a) {
          X(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        X(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      ({}).NODE_ENV !== "production" && X(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Jx(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Ld(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Gc = /* @__PURE__ */ new Map();
function eb(e, t) {
  Gc.set(e, t);
}
function tb(e) {
  const t = Gc.get(e);
  return Gc.delete(e), t;
}
let nb = () => location.protocol + "//" + location.host;
function vf(e, t) {
  const { pathname: n, search: s, hash: o } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = o.includes(e.slice(a)) ? e.slice(a).length : 1, u = o.slice(l);
    return u[0] !== "/" && (u = "/" + u), $d(u, "");
  }
  return $d(n, e) + s + o;
}
function sb(e, t, n, s) {
  let o = [], a = [], r = null;
  const l = ({ state: g }) => {
    const p = vf(e, location), m = n.value, h = t.value;
    let f = 0;
    if (g) {
      if (n.value = p, t.value = g, r && r === m) {
        r = null;
        return;
      }
      f = h ? g.position - h.position : 0;
    } else
      s(p);
    o.forEach((v) => {
      v(n.value, m, {
        delta: f,
        type: ga.pop,
        direction: f ? f > 0 ? ua.forward : ua.back : ua.unknown
      });
    });
  };
  function u() {
    r = n.value;
  }
  function d(g) {
    o.push(g);
    const p = () => {
      const m = o.indexOf(g);
      m > -1 && o.splice(m, 1);
    };
    return a.push(p), p;
  }
  function i() {
    const { history: g } = window;
    g.state && g.replaceState(J({}, g.state, { scroll: lr() }), "");
  }
  function c() {
    for (const g of a)
      g();
    a = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", i);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", i, {
    passive: !0
  }), {
    pauseListeners: u,
    listen: d,
    destroy: c
  };
}
function Td(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? lr() : null
  };
}
function ob(e) {
  const { history: t, location: n } = window, s = {
    value: vf(e, n)
  }, o = { value: t.state };
  o.value || a(s.value, {
    back: null,
    current: s.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function a(u, d, i) {
    const c = e.indexOf("#"), g = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : nb() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), o.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? X("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(u, d) {
    const i = J({}, t.state, Td(
      o.value.back,
      // keep back and forward entries but override current position
      u,
      o.value.forward,
      !0
    ), d, { position: o.value.position });
    a(u, i, !0), s.value = u;
  }
  function l(u, d) {
    const i = J(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: u,
        scroll: lr()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && X(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = J({}, Td(s.value, u, null), { position: i.position + 1 }, d);
    a(u, c, !1), s.value = u;
  }
  return {
    location: s,
    state: o,
    push: l,
    replace: r
  };
}
function ab(e) {
  e = Kx(e);
  const t = ob(e), n = sb(e, t.state, t.location, t.replace);
  function s(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const o = J({
    // it's overridden right after
    location: "",
    base: e,
    go: s,
    createHref: Qx.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function ib(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && X(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), ab(e);
}
function rb(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function _f(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Vn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Xc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Ad;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ad || (Ad = {}));
const lb = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${ub(t)}" via a navigation guard.`;
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
function Gs(e, t) {
  return {}.NODE_ENV !== "production" ? J(new Error(lb[e](t)), {
    type: e,
    [Xc]: !0
  }, t) : J(new Error(), {
    type: e,
    [Xc]: !0
  }, t);
}
function an(e, t) {
  return e instanceof Error && Xc in e && (t == null || !!(e.type & t));
}
const cb = ["params", "query", "hash"];
function ub(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of cb)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Dd = "[^/]+?", db = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, gb = /[.+*?^${}()[\]/\\]/g;
function pb(e, t) {
  const n = J({}, db, t), s = [];
  let o = n.start ? "^" : "";
  const a = [];
  for (const d of e) {
    const i = d.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !d.length && (o += "/");
    for (let c = 0; c < d.length; c++) {
      const g = d[c];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        c || (o += "/"), o += g.value.replace(gb, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: v } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const _ = v || Dd;
        if (_ !== Dd) {
          p += 10;
          try {
            new RegExp(`(${_})`);
          } catch (x) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${_}): ` + x.message);
          }
        }
        let b = h ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        c || (b = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && d.length < 2 ? `(?:/${b})` : "/" + b), f && (b += "?"), o += b, p += 20, f && (p += -8), h && (p += -20), _ === ".*" && (p += -50);
      }
      i.push(p);
    }
    s.push(i);
  }
  if (n.strict && n.end) {
    const d = s.length - 1;
    s[d][s[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
  const r = new RegExp(o, n.sensitive ? "" : "i");
  function l(d) {
    const i = d.match(r), c = {};
    if (!i)
      return null;
    for (let g = 1; g < i.length; g++) {
      const p = i[g] || "", m = a[g - 1];
      c[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return c;
  }
  function u(d) {
    let i = "", c = !1;
    for (const g of e) {
      (!c || !i.endsWith("/")) && (i += "/"), c = !1;
      for (const p of g)
        if (p.type === 0)
          i += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: h, optional: f } = p, v = m in d ? d[m] : "";
          if (pt(v) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = pt(v) ? v.join("/") : v;
          if (!_)
            if (f)
              g.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : c = !0);
            else
              throw new Error(`Missing required param "${m}"`);
          i += _;
        }
    }
    return i || "/";
  }
  return {
    re: r,
    score: s,
    keys: a,
    parse: l,
    stringify: u
  };
}
function mb(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s)
      return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function hb(e, t) {
  let n = 0;
  const s = e.score, o = t.score;
  for (; n < s.length && n < o.length; ) {
    const a = mb(s[n], o[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (Pd(s))
      return 1;
    if (Pd(o))
      return -1;
  }
  return o.length - s.length;
}
function Pd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const fb = {
  type: 0,
  value: ""
}, wb = /[a-zA-Z0-9_]/;
function vb(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[fb]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${d}": ${p}`);
  }
  let n = 0, s = n;
  const o = [];
  let a;
  function r() {
    a && o.push(a), a = [];
  }
  let l = 0, u, d = "", i = "";
  function c() {
    d && (n === 0 ? a.push({
      type: 0,
      value: d
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: d,
      regexp: i,
      repeatable: u === "*" || u === "+",
      optional: u === "*" || u === "?"
    })) : t("Invalid state to consume buffer"), d = "");
  }
  function g() {
    d += u;
  }
  for (; l < e.length; ) {
    if (u = e[l++], u === "\\" && n !== 2) {
      s = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (d && c(), r()) : u === ":" ? (c(), n = 1) : g();
        break;
      case 4:
        g(), n = s;
        break;
      case 1:
        u === "(" ? n = 2 : wb.test(u) ? g() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
        break;
      case 2:
        u === ")" ? i[i.length - 1] == "\\" ? i = i.slice(0, -1) + u : n = 3 : i += u;
        break;
      case 3:
        c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--, i = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), c(), r(), o;
}
function _b(e, t, n) {
  const s = pb(vb(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of s.keys)
      a.has(r.name) && X(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const o = J(s, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function Sb(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = Nd({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(i) {
    return s.get(i);
  }
  function a(i, c, g) {
    const p = !g, m = yb(i);
    ({}).NODE_ENV !== "production" && kb(m, c), m.aliasOf = g && g.record;
    const h = Nd(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const b = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const x of b)
        f.push(J({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : m.components,
          path: x,
          // we might be the child of an alias
          aliasOf: g ? g.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let v, _;
    for (const b of f) {
      const { path: x } = b;
      if (c && x[0] !== "/") {
        const y = c.record.path, E = y[y.length - 1] === "/" ? "" : "/";
        b.path = c.record.path + (x && E + x);
      }
      if ({}.NODE_ENV !== "production" && b.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (v = _b(b, c, h), {}.NODE_ENV !== "production" && c && x[0] === "/" && $b(v, c), g ? (g.alias.push(v), {}.NODE_ENV !== "production" && Cb(g, v)) : (_ = _ || v, _ !== v && _.alias.push(v), p && i.name && !Fd(v) && r(i.name)), m.children) {
        const y = m.children;
        for (let E = 0; E < y.length; E++)
          a(y[E], v, g && g.children[E]);
      }
      g = g || v, (v.record.components && Object.keys(v.record.components).length || v.record.name || v.record.redirect) && u(v);
    }
    return _ ? () => {
      r(_);
    } : ca;
  }
  function r(i) {
    if (_f(i)) {
      const c = s.get(i);
      c && (s.delete(i), n.splice(n.indexOf(c), 1), c.children.forEach(r), c.alias.forEach(r));
    } else {
      const c = n.indexOf(i);
      c > -1 && (n.splice(c, 1), i.record.name && s.delete(i.record.name), i.children.forEach(r), i.alias.forEach(r));
    }
  }
  function l() {
    return n;
  }
  function u(i) {
    let c = 0;
    for (; c < n.length && hb(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !Sf(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !Fd(i) && s.set(i.record.name, i);
  }
  function d(i, c) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = s.get(i.name), !g)
        throw Gs(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const _ = Object.keys(i.params || {}).filter((b) => !g.keys.find((x) => x.name === b));
        _.length && X(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = J(
        // paramsFromLocation is a new object
        Bd(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((_) => !_.optional).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Bd(i.params, g.keys.map((_) => _.name))
      ), m = g.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && X(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((_) => _.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = c.name ? s.get(c.name) : n.find((_) => _.re.test(c.path)), !g)
        throw Gs(1, {
          location: i,
          currentLocation: c
        });
      h = g.record.name, p = J({}, c.params, i.params), m = g.stringify(p);
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
      meta: bb(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: l, getRecordMatcher: o };
}
function Bd(e, t) {
  const n = {};
  for (const s of t)
    s in e && (n[s] = e[s]);
  return n;
}
function yb(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: xb(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function xb(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const s in e.components)
      t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function Fd(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function bb(e) {
  return e.reduce((t, n) => J(t, n.meta), {});
}
function Nd(e, t) {
  const n = {};
  for (const s in e)
    n[s] = s in t ? t[s] : e[s];
  return n;
}
function Wc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Cb(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Wc.bind(null, n)))
      return X(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Wc.bind(null, n)))
      return X(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function kb(e, t) {
  t && t.record.name && !e.name && !e.path && X(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function $b(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Wc.bind(null, n)))
      return X(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Sf(e, t) {
  return t.children.some((n) => n === e || Sf(e, n));
}
const yf = /#/g, Vb = /&/g, Eb = /\//g, Lb = /=/g, Tb = /\?/g, xf = /\+/g, Ab = /%5B/g, Db = /%5D/g, bf = /%5E/g, Pb = /%60/g, Cf = /%7B/g, Bb = /%7C/g, kf = /%7D/g, Fb = /%20/g;
function yu(e) {
  return encodeURI("" + e).replace(Bb, "|").replace(Ab, "[").replace(Db, "]");
}
function Nb(e) {
  return yu(e).replace(Cf, "{").replace(kf, "}").replace(bf, "^");
}
function Kc(e) {
  return yu(e).replace(xf, "%2B").replace(Fb, "+").replace(yf, "%23").replace(Vb, "%26").replace(Pb, "`").replace(Cf, "{").replace(kf, "}").replace(bf, "^");
}
function Mb(e) {
  return Kc(e).replace(Lb, "%3D");
}
function Ub(e) {
  return yu(e).replace(yf, "%23").replace(Tb, "%3F");
}
function Ib(e) {
  return e == null ? "" : Ub(e).replace(Eb, "%2F");
}
function pa(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && X(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Rb(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < s.length; ++o) {
    const a = s[o].replace(xf, " "), r = a.indexOf("="), l = pa(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : pa(a.slice(r + 1));
    if (l in t) {
      let d = t[l];
      pt(d) || (d = t[l] = [d]), d.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function Md(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = Mb(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (pt(s) ? s.map((a) => a && Kc(a)) : [s && Kc(s)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function zb(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = pt(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const Ob = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Ud = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), cr = Symbol({}.NODE_ENV !== "production" ? "router" : ""), $f = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Yc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function ho() {
  let e = [];
  function t(s) {
    return e.push(s), () => {
      const o = e.indexOf(s);
      o > -1 && e.splice(o, 1);
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
function Gn(e, t, n, s, o) {
  const a = s && // name is defined if record is because of the function overload
  (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
  return () => new Promise((r, l) => {
    const u = (c) => {
      c === !1 ? l(Gs(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : rb(c) ? l(Gs(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === a && typeof c == "function" && a.push(c), r());
    }, d = e.call(s && s.instances[o], t, n, {}.NODE_ENV !== "production" ? jb(u, t, n) : u);
    let i = Promise.resolve(d);
    if (e.length < 3 && (i = i.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const c = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        i = i.then((g) => u._called ? g : (X(c), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !u._called) {
        X(c), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((c) => l(c));
  });
}
function jb(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && X(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function Ur(e, t, n, s) {
  const o = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && X(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let l = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw X(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          X(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = l;
          l = () => u;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, X(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (Hb(l)) {
          const d = (l.__vccOpts || l)[t];
          d && o.push(Gn(d, n, s, a, r));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (X(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), o.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = jx(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && Gn(g, n, s, a, r)();
          }));
        }
    }
  }
  return o;
}
function Hb(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Id(e) {
  const t = qs(cr), n = qs($f), s = Zt(() => t.resolve(la(e.to))), o = Zt(() => {
    const { matched: u } = s.value, { length: d } = u, i = u[d - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const g = c.findIndex(Wn.bind(null, i));
    if (g > -1)
      return g;
    const p = Rd(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Rd(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(Wn.bind(null, u[d - 2])) : g
    );
  }), a = Zt(() => o.value > -1 && Wb(n.params, s.value.params)), r = Zt(() => o.value > -1 && o.value === n.matched.length - 1 && wf(n.params, s.value.params));
  function l(u = {}) {
    return Xb(u) ? t[la(e.replace) ? "replace" : "push"](
      la(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ca) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && xn) {
    const u = pf();
    if (u) {
      const d = {
        route: s.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), Mx(() => {
        d.route = s.value, d.isActive = a.value, d.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: Zt(() => s.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const qb = /* @__PURE__ */ mf({
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
  useLink: Id,
  setup(e, { slots: t }) {
    const n = Ux(Id(e)), { options: s } = qs(cr), o = Zt(() => ({
      [zd(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [zd(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : hf("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, a);
    };
  }
}), Gb = qb;
function Xb(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Wb(e, t) {
  for (const n in t) {
    const s = t[n], o = e[n];
    if (typeof s == "string") {
      if (s !== o)
        return !1;
    } else if (!pt(o) || o.length !== s.length || s.some((a, r) => a !== o[r]))
      return !1;
  }
  return !0;
}
function Rd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const zd = (e, t, n) => e != null ? e : t != null ? t : n, Kb = /* @__PURE__ */ mf({
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
    ({}).NODE_ENV !== "production" && Qb();
    const s = qs(Yc), o = Zt(() => e.route || s.value), a = qs(Ud, 0), r = Zt(() => {
      let d = la(a);
      const { matched: i } = o.value;
      let c;
      for (; (c = i[d]) && !c.components; )
        d++;
      return d;
    }), l = Zt(() => o.value.matched[r.value]);
    Fr(Ud, Zt(() => r.value + 1)), Fr(Ob, l), Fr(Yc, o);
    const u = Ix();
    return ff(() => [u.value, l.value, e.name], ([d, i, c], [g, p, m]) => {
      i && (i.instances[c] = d, p && p !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Wn(i, p) || !g) && (i.enterCallbacks[c] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = o.value, i = e.name, c = l.value, g = c && c.components[i];
      if (!g)
        return Od(n.default, { Component: g, route: d });
      const p = c.props[i], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = hf(g, J({}, m, t, {
        onVnodeUnmounted: (v) => {
          v.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && xn && f.ref) {
        const v = {
          depth: r.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (pt(f.ref) ? f.ref.map((b) => b.i) : [f.ref.i]).forEach((b) => {
          b.__vrv_devtools = v;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Od(n.default, { Component: f, route: d }) || f
      );
    };
  }
});
function Od(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Yb = Kb;
function Qb() {
  const e = pf(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const s = t === "KeepAlive" ? "keep-alive" : "transition";
    X(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`);
  }
}
function fo(e, t) {
  const n = J({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((s) => iC(s, ["instances", "children", "aliasOf"]))
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
function Ia(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Jb = 0;
function Zb(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const s = Jb++;
  Nx({
    id: "org.vuejs.router" + (s ? "." + s : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (o) => {
    typeof o.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), o.on.inspectComponent((i, c) => {
      i.instanceData && i.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: fo(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const g = c.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Vf
        });
      }
      pt(c.__vrl_devtools) && (c.__devtoolsApi = o, c.__vrl_devtools.forEach((g) => {
        let p = Tf, m = "";
        g.isExactActive ? (p = Lf, m = "This is exactly active") : g.isActive && (p = Ef, m = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), ff(t.currentRoute, () => {
      u(), o.notifyComponentUpdate(), o.sendInspectorTree(l), o.sendInspectorState(l);
    });
    const a = "router:navigations:" + s;
    o.addTimelineLayer({
      id: a,
      label: `Router${s ? " " + s : ""} Navigations`,
      color: 4237508
    }), t.onError((i, c) => {
      o.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: c.fullPath,
          logType: "error",
          time: o.now(),
          data: { error: i },
          groupId: c.meta.__navigationId
        }
      });
    });
    let r = 0;
    t.beforeEach((i, c) => {
      const g = {
        guard: Ia("beforeEach"),
        from: fo(c, "Current Location during this navigation"),
        to: fo(i, "Target location")
      };
      Object.defineProperty(i.meta, "__navigationId", {
        value: r++
      }), o.addTimelineEvent({
        layerId: a,
        event: {
          time: o.now(),
          title: "Start of navigation",
          subtitle: i.fullPath,
          data: g,
          groupId: i.meta.__navigationId
        }
      });
    }), t.afterEach((i, c, g) => {
      const p = {
        guard: Ia("afterEach")
      };
      g ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, p.status = Ia("❌")) : p.status = Ia("✅"), p.from = fo(c, "Current Location during this navigation"), p.to = fo(i, "Target location"), o.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: i.fullPath,
          time: o.now(),
          data: p,
          logType: g ? "warning" : "default",
          groupId: i.meta.__navigationId
        }
      });
    });
    const l = "router-inspector:" + s;
    o.addInspector({
      id: l,
      label: "Routes" + (s ? " " + s : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function u() {
      if (!d)
        return;
      const i = d;
      let c = n.getRoutes().filter((g) => !g.parent);
      c.forEach(Pf), i.filter && (c = c.filter((g) => (
        // save matches state based on the payload
        Qc(g, i.filter.toLowerCase())
      ))), c.forEach((g) => Df(g, t.currentRoute.value)), i.rootNodes = c.map(Af);
    }
    let d;
    o.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === l && u();
    }), o.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: tC(g)
        });
      }
    }), o.sendInspectorTree(l), o.sendInspectorState(l);
  });
}
function eC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function tC(e) {
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
        display: e.keys.map((s) => `${s.name}${eC(s)}`).join(" "),
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
    value: e.alias.map((s) => s.record.path)
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
        display: e.score.map((s) => s.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const Vf = 15485081, Ef = 2450411, Lf = 8702998, nC = 2282478, Tf = 16486972, sC = 6710886;
function Af(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: nC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Tf
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Vf
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Lf
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Ef
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: sC
  });
  let s = n.__vd_id;
  return s == null && (s = String(oC++), n.__vd_id = s), {
    id: s,
    label: n.path,
    tags: t,
    children: e.children.map(Af)
  };
}
let oC = 0;
const aC = /^\/(.*)\/([a-z]*)$/;
function Df(e, t) {
  const n = t.matched.length && Wn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => Wn(s, e.record))), e.children.forEach((s) => Df(s, t));
}
function Pf(e) {
  e.__vd_match = !1, e.children.forEach(Pf);
}
function Qc(e, t) {
  const n = String(e.re).match(aC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Qc(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), a = pa(o);
  return !t.startsWith("/") && (a.includes(t) || o.includes(t)) || a.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Qc(r, t));
}
function iC(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function rC(e) {
  const t = Sb(e.routes, e), n = e.parseQuery || Rb, s = e.stringifyQuery || Md, o = e.history;
  if ({}.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = ho(), r = ho(), l = ho(), u = Rx(Vn);
  let d = Vn;
  xn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Nr.bind(null, (w) => "" + w), c = Nr.bind(null, Ib), g = (
    // @ts-expect-error: intentionally avoid the type check
    Nr.bind(null, pa)
  );
  function p(w, B) {
    let T, N;
    return _f(w) ? (T = t.getRecordMatcher(w), N = B) : N = w, t.addRoute(N, T);
  }
  function m(w) {
    const B = t.getRecordMatcher(w);
    B ? t.removeRoute(B) : {}.NODE_ENV !== "production" && X(`Cannot remove non-existent route "${String(w)}"`);
  }
  function h() {
    return t.getRoutes().map((w) => w.record);
  }
  function f(w) {
    return !!t.getRecordMatcher(w);
  }
  function v(w, B) {
    if (B = J({}, B || u.value), typeof w == "string") {
      const z = Mr(n, w, B.path), oe = t.resolve({ path: z.path }, B), st = o.createHref(z.fullPath);
      return {}.NODE_ENV !== "production" && (st.startsWith("//") ? X(`Location "${w}" resolved to "${st}". A resolved location cannot start with multiple slashes.`) : oe.matched.length || X(`No match found for location with path "${w}"`)), J(z, oe, {
        params: g(oe.params),
        hash: pa(z.hash),
        redirectedFrom: void 0,
        href: st
      });
    }
    let T;
    if ("path" in w)
      ({}).NODE_ENV !== "production" && "params" in w && !("name" in w) && // @ts-expect-error: the type is never
      Object.keys(w.params).length && X(`Path "${w.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), T = J({}, w, {
        path: Mr(n, w.path, B.path).path
      });
    else {
      const z = J({}, w.params);
      for (const oe in z)
        z[oe] == null && delete z[oe];
      T = J({}, w, {
        params: c(z)
      }), B.params = c(B.params);
    }
    const N = t.resolve(T, B), G = w.hash || "";
    ({}).NODE_ENV !== "production" && G && !G.startsWith("#") && X(`A \`hash\` should always start with the character "#". Replace "${G}" with "#${G}".`), N.params = i(g(N.params));
    const pe = Gx(s, J({}, w, {
      hash: Nb(G),
      path: N.path
    })), H = o.createHref(pe);
    return {}.NODE_ENV !== "production" && (H.startsWith("//") ? X(`Location "${w}" resolved to "${H}". A resolved location cannot start with multiple slashes.`) : N.matched.length || X(`No match found for location with path "${"path" in w ? w.path : w}"`)), J({
      fullPath: pe,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: G,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        s === Md ? zb(w.query) : w.query || {}
      )
    }, N, {
      redirectedFrom: void 0,
      href: H
    });
  }
  function _(w) {
    return typeof w == "string" ? Mr(n, w, u.value.path) : J({}, w);
  }
  function b(w, B) {
    if (d !== w)
      return Gs(8, {
        from: B,
        to: w
      });
  }
  function x(w) {
    return S(w);
  }
  function y(w) {
    return x(J(_(w), { replace: !0 }));
  }
  function E(w) {
    const B = w.matched[w.matched.length - 1];
    if (B && B.redirect) {
      const { redirect: T } = B;
      let N = typeof T == "function" ? T(w) : T;
      if (typeof N == "string" && (N = N.includes("?") || N.includes("#") ? N = _(N) : (
        // force empty params
        { path: N }
      ), N.params = {}), {}.NODE_ENV !== "production" && !("path" in N) && !("name" in N))
        throw X(`Invalid redirect found:
${JSON.stringify(N, null, 2)}
 when navigating to "${w.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return J({
        query: w.query,
        hash: w.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in N ? {} : w.params
      }, N);
    }
  }
  function S(w, B) {
    const T = d = v(w), N = u.value, G = w.state, pe = w.force, H = w.replace === !0, z = E(T);
    if (z)
      return S(
        J(_(z), {
          state: typeof z == "object" ? J({}, G, z.state) : G,
          force: pe,
          replace: H
        }),
        // keep original redirectedFrom if it exists
        B || T
      );
    const oe = T;
    oe.redirectedFrom = B;
    let st;
    return !pe && Vd(s, N, T) && (st = Gs(16, { to: oe, from: N }), Ae(
      N,
      N,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (st ? Promise.resolve(st) : A(oe, N)).catch((Ce) => an(Ce) ? (
      // navigation redirects still mark the router as ready
      an(
        Ce,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? Ce : Fe(Ce)
    ) : (
      // reject any unknown error
      re(Ce, oe, N)
    )).then((Ce) => {
      if (Ce) {
        if (an(
          Ce,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Vd(s, v(Ce.to), oe) && // and we have done it a couple of times
          B && // @ts-expect-error: added only in dev
          (B._count = B._count ? (
            // @ts-expect-error
            B._count + 1
          ) : 1) > 30 ? (X(`Detected a possibly infinite redirection in a navigation guard when going from "${N.fullPath}" to "${oe.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : S(
            // keep options
            J({
              // preserve an existing replacement but allow the redirect to override it
              replace: H
            }, _(Ce.to), {
              state: typeof Ce.to == "object" ? J({}, G, Ce.to.state) : G,
              force: pe
            }),
            // preserve the original redirectedFrom if any
            B || oe
          );
      } else
        Ce = K(oe, N, !0, H, G);
      return R(oe, N, Ce), Ce;
    });
  }
  function F(w, B) {
    const T = b(w, B);
    return T ? Promise.reject(T) : Promise.resolve();
  }
  function V(w) {
    const B = D.values().next().value;
    return B && typeof B.runWithContext == "function" ? B.runWithContext(w) : w();
  }
  function A(w, B) {
    let T;
    const [N, G, pe] = lC(w, B);
    T = Ur(N.reverse(), "beforeRouteLeave", w, B);
    for (const z of N)
      z.leaveGuards.forEach((oe) => {
        T.push(Gn(oe, w, B));
      });
    const H = F.bind(null, w, B);
    return T.push(H), Q(T).then(() => {
      T = [];
      for (const z of a.list())
        T.push(Gn(z, w, B));
      return T.push(H), Q(T);
    }).then(() => {
      T = Ur(G, "beforeRouteUpdate", w, B);
      for (const z of G)
        z.updateGuards.forEach((oe) => {
          T.push(Gn(oe, w, B));
        });
      return T.push(H), Q(T);
    }).then(() => {
      T = [];
      for (const z of pe)
        if (z.beforeEnter)
          if (pt(z.beforeEnter))
            for (const oe of z.beforeEnter)
              T.push(Gn(oe, w, B));
          else
            T.push(Gn(z.beforeEnter, w, B));
      return T.push(H), Q(T);
    }).then(() => (w.matched.forEach((z) => z.enterCallbacks = {}), T = Ur(pe, "beforeRouteEnter", w, B), T.push(H), Q(T))).then(() => {
      T = [];
      for (const z of r.list())
        T.push(Gn(z, w, B));
      return T.push(H), Q(T);
    }).catch((z) => an(
      z,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? z : Promise.reject(z));
  }
  function R(w, B, T) {
    l.list().forEach((N) => V(() => N(w, B, T)));
  }
  function K(w, B, T, N, G) {
    const pe = b(w, B);
    if (pe)
      return pe;
    const H = B === Vn, z = xn ? history.state : {};
    T && (N || H ? o.replace(w.fullPath, J({
      scroll: H && z && z.scroll
    }, G)) : o.push(w.fullPath, G)), u.value = w, Ae(w, B, T, H), Fe();
  }
  let ie;
  function ne() {
    ie || (ie = o.listen((w, B, T) => {
      if (!M.listening)
        return;
      const N = v(w), G = E(N);
      if (G) {
        S(J(G, { replace: !0 }), N).catch(ca);
        return;
      }
      d = N;
      const pe = u.value;
      xn && eb(Ld(pe.fullPath, T.delta), lr()), A(N, pe).catch((H) => an(
        H,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? H : an(
        H,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (S(
        H.to,
        N
        // avoid an uncaught rejection, let push call triggerError
      ).then((z) => {
        an(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !T.delta && T.type === ga.pop && o.go(-1, !1);
      }).catch(ca), Promise.reject()) : (T.delta && o.go(-T.delta, !1), re(H, N, pe))).then((H) => {
        H = H || K(
          // after navigation, all matched components are resolved
          N,
          pe,
          !1
        ), H && (T.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !an(
          H,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-T.delta, !1) : T.type === ga.pop && an(
          H,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), R(N, pe, H);
      }).catch(ca);
    }));
  }
  let j = ho(), W = ho(), se;
  function re(w, B, T) {
    Fe(w);
    const N = W.list();
    return N.length ? N.forEach((G) => G(w, B, T)) : ({}.NODE_ENV !== "production" && X("uncaught error during route navigation:"), console.error(w)), Promise.reject(w);
  }
  function $e() {
    return se && u.value !== Vn ? Promise.resolve() : new Promise((w, B) => {
      j.add([w, B]);
    });
  }
  function Fe(w) {
    return se || (se = !w, ne(), j.list().forEach(([B, T]) => w ? T(w) : B()), j.reset()), w;
  }
  function Ae(w, B, T, N) {
    const { scrollBehavior: G } = e;
    if (!xn || !G)
      return Promise.resolve();
    const pe = !T && tb(Ld(w.fullPath, 0)) || (N || !T) && history.state && history.state.scroll || null;
    return Ox().then(() => G(w, B, pe)).then((H) => H && Zx(H)).catch((H) => re(H, w, B));
  }
  const Z = (w) => o.go(w);
  let nt;
  const D = /* @__PURE__ */ new Set(), M = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: v,
    options: e,
    push: x,
    replace: y,
    go: Z,
    back: () => Z(-1),
    forward: () => Z(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: W.add,
    isReady: $e,
    install(w) {
      const B = this;
      w.component("RouterLink", Gb), w.component("RouterView", Yb), w.config.globalProperties.$router = B, Object.defineProperty(w.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => la(u)
      }), xn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !nt && u.value === Vn && (nt = !0, x(o.location).catch((G) => {
        ({}).NODE_ENV !== "production" && X("Unexpected error when starting the router:", G);
      }));
      const T = {};
      for (const G in Vn)
        Object.defineProperty(T, G, {
          get: () => u.value[G],
          enumerable: !0
        });
      w.provide(cr, B), w.provide($f, zx(T)), w.provide(Yc, u);
      const N = w.unmount;
      D.add(w), w.unmount = function() {
        D.delete(w), D.size < 1 && (d = Vn, ie && ie(), ie = null, u.value = Vn, nt = !1, se = !1), N();
      }, {}.NODE_ENV !== "production" && xn && Zb(w, B, t);
    }
  };
  function Q(w) {
    return w.reduce((B, T) => B.then(() => V(T)), Promise.resolve());
  }
  return M;
}
function lC(e, t) {
  const n = [], s = [], o = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((d) => Wn(d, l)) ? s.push(l) : n.push(l));
    const u = e.matched[r];
    u && (t.matched.find((d) => Wn(d, u)) || o.push(u));
  }
  return [n, s, o];
}
function et() {
  return qs(cr);
}
const cC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, s = parseInt(e.slice(6, 8)), o = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, s, o, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, uC = (e) => {
  const t = cC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const $t = window.Vue.unref, ys = window.Vue.createVNode, rn = window.Vue.createElementVNode, jd = window.Vue.renderSlot, Hd = window.Vue.withModifiers, Ir = window.Vue.toDisplayString, Rr = window.Vue.withCtx, dC = window.Vue.openBlock, gC = window.Vue.createElementBlock, pC = window.Vue.createCommentVNode, mC = { class: "col shrink pe-4" }, hC = { class: "col" }, fC = { class: "cx-translation__details column justify-between ma-0" }, wC = { class: "row ma-0" }, vC = { class: "col grow" }, _C = { class: "col shrink ps-2" }, SC = ["dir", "textContent"], yC = ["dir", "textContent"], xC = ["textContent"], bC = window.Vuex.useStore, CC = window.Vue.computed, Bf = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: tu,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, s = bC(), o = (l, u) => {
      const d = s.getters["mediawiki/getPage"](l, u);
      return d == null ? void 0 : d.thumbnail;
    }, a = ge(), r = CC(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = uC(n.translation.startTimestamp);
      return a.i18n(
        l[u.postfix],
        mw.language.convertNumber(u.value)
      );
    });
    return (l, u) => e.translation ? (dC(), gC("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = Hd((d) => l.$emit("click"), ["stop"]))
    }, [
      rn("div", mC, [
        ys($t(eu), {
          class: "cx-translation__thumbnail",
          thumbnail: o(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      rn("div", hC, [
        rn("div", fC, [
          rn("div", wC, [
            rn("div", vC, [
              jd(l.$slots, "title")
            ]),
            rn("div", _C, [
              ys($t(Ze), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Hd((d) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          jd(l.$slots, "mid-content"),
          ys($t(U), { class: "cx-translation__footer ma-0" }, {
            default: Rr(() => [
              ys($t(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Rr(() => [
                  rn("span", {
                    class: "mw-ui-autonym",
                    dir: $t(I.getDir)(e.translation.sourceLanguage),
                    textContent: Ir($t(I.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, SC),
                  ys($t(Ze), {
                    icon: $t(q0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  rn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: $t(I.getDir)(e.translation.targetLanguage),
                    textContent: Ir($t(I.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, yC)
                ]),
                _: 1
              }),
              ys($t(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Rr(() => [
                  rn("span", {
                    textContent: Ir(r.value)
                  }, null, 8, xC)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : pC("", !0);
  }
};
const wo = window.Vue.unref, kC = window.Vue.toDisplayString, $C = window.Vue.normalizeClass, VC = window.Vue.createElementVNode, zr = window.Vue.openBlock, EC = window.Vue.createElementBlock, qd = window.Vue.createCommentVNode, Gd = window.Vue.createVNode, Ra = window.Vue.withCtx, Xd = window.Vue.createBlock, LC = ["lang", "textContent"], TC = ["lang", "innerHTML"], AC = window.Vue.computed, DC = window.Vue.inject, PC = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Zi,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, s = DC("colors").gray200, o = AC(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = et(), { setTranslationURLParams: r } = P(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (zr(), Xd(Bf, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": wo(ph),
      onActionIconClicked: d[0] || (d[0] = (i) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: Ra(() => [
        VC("h5", {
          class: $C(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: kC(e.translation.sourceTitle)
        }, null, 10, LC),
        e.translation.isLeadSectionTranslation ? qd("", !0) : (zr(), EC("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, TC))
      ]),
      "mid-content": Ra(() => [
        e.translation.progress ? (zr(), Xd(wo(U), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ra(() => [
            Gd(wo(k), null, {
              default: Ra(() => [
                Gd(wo(fh), {
                  class: "cx-translation__progress-bar",
                  value: o.value,
                  height: "4px",
                  width: "64px",
                  background: wo(s)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : qd("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, BC = window.Vuex.useStore, Ff = [], FC = (e, t, n) => Ff.some(
  (s) => s.sourceLanguage === e && s.targetLanguage === t && s.sourceTitle === n
), NC = (e, t, n) => {
  const s = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Ff.push(s);
}, MC = () => {
  const e = BC();
  return (t, n, s) => C(void 0, null, function* () {
    let o = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, s);
    return !o && !FC(t, n, s) && (o = yield me.fetchSectionSuggestion(
      t,
      s,
      n
    ), NC(t, n, s), o && (o.isListable = !1, e.commit("suggestions/addSectionSuggestion", o))), o;
  });
}, Nf = window.Vue.ref, Mf = Nf(null), Jc = Nf(null), UC = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), Mf.value = e;
}, IC = (e) => {
  Jc.value = e;
}, ya = () => {
  const e = et(), t = ir(), { setTranslationURLParams: n } = P();
  return (s, o, a, r, l = null, u = !0) => C(void 0, null, function* () {
    UC(r), IC(l);
    const d = yield t(
      o,
      a,
      s
    );
    n(d), u && e.push({ name: "sx-translation-confirmer" });
  });
};
const Or = window.Vue.withModifiers, Wd = window.Vue.toDisplayString, Kd = window.Vue.createElementVNode, Vt = window.Vue.unref, Qn = window.Vue.createVNode, RC = window.Vue.createTextVNode, za = window.Vue.openBlock, Yd = window.Vue.createElementBlock, Qd = window.Vue.createCommentVNode, Jd = window.Vue.createBlock, xs = window.Vue.withCtx, zC = ["lang", "href", "textContent"], OC = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, jC = {
  key: 2,
  class: "flex"
}, HC = ["innerHTML"], jr = window.Vue.computed, Zd = window.Vue.ref, eg = window.Codex.CdxButton, Hr = window.Codex.CdxIcon, qC = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Su,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Zd(!0), s = Zd(null), o = jr(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.missingSections;
    }), a = jr(
      () => o.value && Object.keys(o.value)[0]
    );
    MC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((p) => s.value = p).catch((p) => console.log(p)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = P(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, d = ya(), i = (p) => {
      d(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), p && l(p);
    }, c = mw.config.get("wgNamespaceIds"), g = jr(() => new mw.Title(t.translation.targetTitle).getNamespaceId() === c.user);
    return (p, m) => (za(), Jd(Bf, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: xs(() => [
        Kd("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: m[0] || (m[0] = Or(() => {
          }, ["stop"])),
          textContent: Wd(e.translation.sourceTitle)
        }, null, 8, zC)
      ]),
      "mid-content": xs(() => [
        Qn(Vt(U), { class: "ma-0" }, {
          default: xs(() => [
            Qn(Vt(k), null, {
              default: xs(() => [
                g.value ? (za(), Yd("div", OC, [
                  Qn(Vt(Hr), {
                    icon: Vt(nf),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  RC(" " + Wd(p.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : Qd("", !0),
                n.value ? (za(), Jd(Vt(gt), { key: 1 })) : o.value ? (za(), Yd("div", jC, [
                  Qn(Vt(eg), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: m[1] || (m[1] = Or((h) => i(a.value), ["stop"]))
                  }, {
                    default: xs(() => [
                      Qn(Vt(Hr), {
                        class: "me-1",
                        icon: Vt(Wh)
                      }, null, 8, ["icon"]),
                      Kd("span", { innerHTML: a.value }, null, 8, HC)
                    ]),
                    _: 1
                  }),
                  Qn(Vt(eg), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": p.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: m[2] || (m[2] = Or((h) => i(null), ["stop"]))
                  }, {
                    default: xs(() => [
                      Qn(Vt(Hr), { icon: Vt(fu) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : Qd("", !0)
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
}, Uf = "cx-translation-session-position-", If = () => Uf + mw.user.sessionId(), GC = () => {
  const e = parseInt(
    mw.storage.get(If())
  );
  return isNaN(e) ? 0 : e;
}, XC = function(e) {
  const t = If();
  mw.storage.set(t, e);
}, WC = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(Uf)).forEach((e) => mw.storage.remove(e));
}, KC = () => {
  const e = GC();
  return e % 10 === 0 && WC(), XC(e + 1), e;
};
function YC(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), s = `cx_sx_${t}_${e.access_method}_${n}`, o = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), l = {
    $schema: "/analytics/mediawiki/content_translation_event/1.12.0",
    wiki_db: n,
    user_name: r,
    web_session_id: t,
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: s,
    content_translation_session_position: KC()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(o, Object.assign({}, l, e))
  ) : Uh(r).then((u) => {
    mw.eventLog.submit(
      o,
      Object.assign({}, l, e, {
        user_global_edit_count: u,
        user_global_edit_count_bucket: X_(u)
      })
    );
  });
}
const QC = window.Vuex.useStore, JC = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], Ct = () => {
  const e = QC(), { previousRoute: t } = Te(e), n = {
    event_source: { remove: !0 },
    translation_source_language: { remove: !1 },
    translation_target_language: { remove: !1 },
    translation_source_title: { remove: !0 }
  }, s = (o) => {
    for (const [a, { remove: r }] of Object.entries(n))
      if (o[a] === null || o[a] === "") {
        const l = JC(
          o.event_type,
          a,
          t.value
        );
        mw.errorLogger.logError(
          new Error(l.join(" ")),
          "error.contenttranslation"
        ), r && delete o[a];
      }
  };
  return (o) => (o.access_method || (o.access_method = bn ? "desktop" : "mobile web"), s(o), YC(o));
}, ZC = window.Vuex.useStore, ek = () => {
  const { commit: e } = ZC(), t = Ct();
  return (n) => C(void 0, null, function* () {
    n.isArticleTranslation ? (yield xt.deleteCXTranslation(
      n
    )) && e("translator/removeCXTranslation", n.translationId) : (yield xt.deleteTranslation(
      n.sectionTranslationId,
      n.translationId,
      n.sectionId
    )) && e(
      "translator/removeTranslationBySectionTranslationId",
      n.sectionTranslationId
    );
    const s = {
      event_type: "dashboard_translation_discard",
      translation_id: n.translationId,
      translation_source_language: n.sourceLanguage,
      translation_source_title: n.sourceTitle,
      translation_target_language: n.targetLanguage,
      translation_target_title: n.targetTitle
    };
    n.sourceSectionTitle && (s.translation_source_section = n.sourceSectionTitle), n.targetSectionTitle && (s.translation_target_section = n.targetSectionTitle), t(s);
  });
};
const tk = window.Vue.resolveDirective, qr = window.Vue.createElementVNode, nk = window.Vue.withDirectives, Gr = window.Vue.unref, tg = window.Vue.createVNode, ng = window.Vue.withCtx, sk = window.Vue.openBlock, ok = window.Vue.createBlock, ak = { class: "pa-4" }, ik = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, rk = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Zi,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, s = t, o = () => s("update:modelValue", !1), a = ek(), r = () => {
      a(n.translation), o();
    };
    return (l, u) => {
      const d = tk("i18n");
      return sk(), ok(Gr(bt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: ng(() => [
          qr("div", ik, [
            tg(Gr(Xe), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: o
            }, null, 8, ["label"]),
            tg(Gr(Xe), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: ng(() => [
          qr("div", ak, [
            nk(qr("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function lk(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield ck(t, n)).filter((o) => e.includes(o)) : [];
  });
}
function sg(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(I.sortByAutonym) : (yield lk(e, t, n)).sort(I.sortByAutonym);
  });
}
function ck(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((s) => s.json()).then((s) => Object.keys(s.languagesearch || {}));
}
function uk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function dk(e) {
  let t, n = [...e];
  const s = e.length;
  s < 10 && (t = s), s < 30 && (t = 10), s >= 30 && (t = 15);
  const o = [];
  for (; n.length; )
    o.push(n.splice(0, t));
  return o;
}
const gk = window.Vue.computed;
function pk(e, t) {
  const n = gk(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let o = 0; o < t.value.length; o++) {
      const a = I.getAutonym(t.value[o]);
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
const Xr = window.Vue.ref, Wr = window.Vue.watch, mk = window.Vue.computed;
function Rf(e, t, n) {
  const s = Xr(""), o = Xr(-1), a = Xr(null), r = () => {
    o.value++, o.value >= l.value.length && (o.value = 0);
  }, l = mk(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
    o.value--, o.value < 0 && (o.value = 0);
  };
  return Wr(e, () => {
    o.value = -1;
  }), Wr(t, () => {
    t.value && l.value.length > 0 && (o.value = 0);
  }), Wr(o, () => C(this, null, function* () {
    var d;
    if (o.value < 0) {
      s.value = "";
      return;
    }
    s.value = l.value[o.value], (d = a.value.querySelectorAll(`.language[lang="${s.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: u, keyboardNavigationContainer: a, selectedItem: s };
}
function xu(e, t, n) {
  let s;
  const o = (...a) => {
    const r = this, l = () => {
      s = null, n || e.apply(r, a);
    };
    n && !s && e.apply(r, a), (!s || t) && (clearTimeout(s), s = setTimeout(l, t));
  };
  return o.cancel = () => clearTimeout(s), o;
}
const Oa = window.Vue.renderSlot, Ve = window.Vue.unref, hk = window.Vue.isRef, og = window.Vue.createVNode, vo = window.Vue.withModifiers, _o = window.Vue.withKeys, En = window.Vue.createElementVNode, fk = window.Vue.resolveDirective, ja = window.Vue.withDirectives, Kr = window.Vue.renderList, Yr = window.Vue.Fragment, ln = window.Vue.openBlock, cn = window.Vue.createElementBlock, ag = window.Vue.toDisplayString, Ha = window.Vue.normalizeClass, Qr = window.Vue.createCommentVNode, wk = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, vk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, _k = { class: "results px-3 pt-4" }, Sk = { class: "results-header ps-8 pb-2" }, yk = { class: "results-languages--suggestions pa-0 ma-0" }, xk = ["lang", "dir", "aria-selected", "onClick", "textContent"], bk = { class: "results px-3 pt-4" }, Ck = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, kk = ["lang", "dir", "aria-selected", "onClick", "textContent"], $k = ["aria-selected"], Vk = { class: "no-results px-3 py-4" }, Ek = { class: "ps-8" }, qa = window.Vue.ref, Lk = window.Vue.watch, Tk = window.Vue.onMounted, ig = window.Vue.computed, zf = {
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
      default: uk
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = qa(null), a = qa(""), r = qa([]), l = qa(n.suggestions), u = ig(
      () => dk(r.value)
    ), d = ig(() => {
      const x = r.value.length;
      return x < 10 ? "few-results" : x < 30 ? "some-results" : "many-results";
    }), i = (x) => s("select", x), c = () => s("close"), { autocompletion: g, onTabSelect: p } = pk(
      a,
      r
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: v } = Rf(a, r, l), _ = () => {
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
    return Lk(a, xu(() => C(this, null, function* () {
      r.value = yield sg(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), Tk(() => C(this, null, function* () {
      n.autofocus && setTimeout(() => o.value.focus(), 500), r.value = yield sg(
        n.languages,
        "",
        n.searchAPI
      );
    })), (x, y) => {
      const E = fk("i18n");
      return ln(), cn("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        Oa(x.$slots, "search", {}, () => [
          En("div", wk, [
            og(Ve(zc), {
              value: Ve(g),
              "onUpdate:value": y[0] || (y[0] = (S) => hk(g) ? g.value = S : null),
              icon: Ve(Hu),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            og(Ve(zc), {
              ref_key: "searchInputElement",
              ref: o,
              value: a.value,
              "onUpdate:value": y[1] || (y[1] = (S) => a.value = S),
              class: "mw-ui-language-selector__search pa-4",
              icon: Ve(Hu),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                _o(vo(_, ["prevent"]), ["enter"]),
                _o(vo(Ve(m), ["stop", "prevent"]), ["down"]),
                _o(vo(Ve(h), ["stop", "prevent"]), ["up"]),
                _o(vo(c, ["prevent"]), ["esc"]),
                _o(vo(Ve(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        En("section", vk, [
          e.suggestions.length && !a.value ? Oa(x.$slots, "suggestions", { key: 0 }, () => [
            En("section", _k, [
              ja(En("p", Sk, null, 512), [
                [E, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              En("ul", yk, [
                (ln(!0), cn(Yr, null, Kr(e.suggestions, (S) => (ln(), cn("li", {
                  key: S,
                  class: Ha(["language ma-0", { "language--selected": S === Ve(v) }]),
                  lang: S,
                  dir: Ve(I.getDir)(S),
                  "aria-selected": S === Ve(v) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (F) => i(S),
                  textContent: ag(Ve(I.getAutonym)(S))
                }, null, 10, xk))), 128))
              ])
            ])
          ]) : Qr("", !0),
          u.value.length ? Oa(x.$slots, "search", { key: 1 }, () => [
            En("section", bk, [
              e.suggestions.length && !a.value ? ja((ln(), cn("p", Ck, null, 512)), [
                [E, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Qr("", !0),
              (ln(!0), cn(Yr, null, Kr(u.value, (S, F) => (ln(), cn("ul", {
                key: F,
                class: Ha(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (ln(!0), cn(Yr, null, Kr(S, (V) => (ln(), cn("li", {
                  key: V,
                  class: Ha(["language ma-0", { "language--selected": V === Ve(v) }]),
                  lang: V,
                  dir: Ve(I.getDir)(V),
                  role: "option",
                  "aria-selected": V === Ve(v) || null,
                  tabindex: "-1",
                  onClick: (A) => i(V),
                  textContent: ag(Ve(I.getAutonym)(V))
                }, null, 10, kk))), 128)),
                e.allOptionEnabled && !a.value ? ja((ln(), cn("li", {
                  key: 0,
                  class: Ha(["language ma-0", { "language--selected": Ve(v) === "all" }]),
                  role: "option",
                  "aria-selected": Ve(v) === "all" || null,
                  tabindex: "-1",
                  onClick: y[2] || (y[2] = (V) => i("all"))
                }, null, 10, $k)), [
                  [E, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Qr("", !0)
              ], 2))), 128))
            ])
          ]) : Oa(x.$slots, "noresults", { key: 2 }, () => [
            En("section", Vk, [
              ja(En("h3", Ek, null, 512), [
                [E, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const Ak = window.Vue.resolveDirective, rg = window.Vue.withDirectives, So = window.Vue.openBlock, yo = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ee = window.Vue.unref, lg = window.Vue.toDisplayString, Et = window.Vue.createVNode, cg = window.Vue.withModifiers, Jn = window.Vue.withCtx, Dk = window.Vue.normalizeClass, Pk = {
  key: 0,
  class: "mw-ui-autonym"
}, Bk = ["lang", "dir", "textContent"], Fk = {
  key: 0,
  class: "mw-ui-autonym"
}, Nk = ["lang", "dir", "textContent"], xo = window.Vue.computed, Mk = window.Vue.inject, Uk = window.Vue.ref, ug = window.Codex.CdxButton, Jr = window.Codex.CdxIcon, Ki = {
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
    const n = e, s = t, o = Mk("breakpoints"), a = xo(() => o.value.mobile), r = Uk(null), l = xo(() => !!r.value), u = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, c = xo(() => {
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
      i(), s(v, h);
    }, p = xo(
      () => n.selectedSourceLanguage === "all"
    ), m = xo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const v = Ak("i18n");
      return So(), yo("div", {
        class: Dk(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        Et(Ee(U), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Jn(() => [
            Et(Ee(k), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: Jn(() => [
                Et(Ee(ug), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: cg(u, ["stop"])
                }, {
                  default: Jn(() => [
                    p.value ? rg((So(), yo("span", Pk, null, 512)), [
                      [v, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (So(), yo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ee(I.getDir)(e.selectedSourceLanguage),
                      textContent: lg(Ee(I.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, Bk)),
                    Et(Ee(Jr), {
                      size: "x-small",
                      icon: Ee(jc)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            Et(Ee(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: Jn(() => [
                Et(Ee(Jr), { icon: Ee(Kh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Et(Ee(k), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Jn(() => [
                Et(Ee(ug), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: cg(d, ["stop"])
                }, {
                  default: Jn(() => [
                    m.value ? rg((So(), yo("span", Fk, null, 512)), [
                      [v, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (So(), yo("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ee(I.getDir)(e.selectedTargetLanguage),
                      textContent: lg(Ee(I.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, Nk)),
                    Et(Ee(Jr), {
                      size: "x-small",
                      icon: Ee(jc)
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
        Et(Ee(bt), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (_) => l.value = _),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: Jn(() => [
            Et(Ee(zf), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: c.value,
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
const dg = window.Vue.unref, Ik = window.Vue.createVNode, Ga = window.Vue.createElementVNode, gg = window.Vue.toDisplayString, Rk = window.Vue.openBlock, zk = window.Vue.createElementBlock, Ok = { class: "cx-list-empty-placeholder pa-4" }, jk = { class: "cx-list-empty-placeholder__icon-container" }, Hk = { class: "cx-list-empty-placeholder__icon" }, qk = ["textContent"], Gk = ["textContent"], Xk = window.Codex.CdxIcon, Of = {
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
    return (t, n) => (Rk(), zk("div", Ok, [
      Ga("div", jk, [
        Ga("div", Hk, [
          Ik(dg(Xk), { icon: dg(ef) }, null, 8, ["icon"])
        ])
      ]),
      Ga("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: gg(e.title)
      }, null, 8, qk),
      Ga("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: gg(e.description)
      }, null, 8, Gk)
    ]));
  }
}, Wk = window.Vuex.useStore, Kk = window.Vue.ref, Xa = Kk({ draft: !1, published: !1 }), Js = () => {
  const e = Wk(), t = Ks(), n = (o) => C(void 0, null, function* () {
    let a = yield xt.fetchTranslations(o);
    e.commit("translator/clearTranslationsByStatus", o), a.forEach(
      (l) => e.commit("translator/addTranslation", l)
    );
    const r = {};
    for (const l of a) {
      const u = l.sourceLanguage;
      r[u] = r[u] || [], r[u].push(l);
    }
    Xa.value[o] = !0;
    for (const [l, u] of Object.entries(r))
      t(
        l,
        u.map((d) => d.sourceTitle)
      ), u.forEach((d) => {
        const { targetLanguage: i, targetTitle: c } = d, g = !!e.getters["mediawiki/getPage"](
          i,
          c
        );
        c && !g && e.commit(
          "mediawiki/addPage",
          new Ws({ title: c, pagelanguage: i })
        );
      });
  });
  return {
    fetchTranslationsByStatus: n,
    fetchAllTranslations: () => {
      const a = Object.keys(Xa.value).filter(
        (r) => !Xa.value[r]
      ).map(
        (r) => n(r)
      );
      return Promise.all(a).catch((r) => {
        mw.log.error("[CX] Error while fetching translations", r);
      });
    },
    translationsFetched: Xa
  };
};
const Yk = window.Vue.toDisplayString, Zr = window.Vue.normalizeClass, pg = window.Vue.createElementVNode, jt = window.Vue.openBlock, bs = window.Vue.createBlock, Wa = window.Vue.createCommentVNode, mg = window.Vue.unref, hg = window.Vue.renderList, fg = window.Vue.Fragment, Ka = window.Vue.createElementBlock, Qk = window.Vue.createVNode, wg = window.Vue.withCtx, Jk = ["textContent"], Zk = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, e8 = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Ya = window.Vue.ref, Lt = window.Vue.computed, t8 = window.Vue.inject, n8 = window.Vuex.useStore, vg = {
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
    const t = e, n = Ya("all"), s = Ya("all"), o = n8(), { translationsFetched: a } = Js(), r = Lt(
      () => a.value[t.translationStatus]
    ), l = Ya(!1), u = Ya(null), d = Lt(
      () => t.translationStatus === "draft"
    ), i = Lt(
      () => o.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = Lt(
      () => n.value === "all"
    ), g = Lt(
      () => s.value === "all"
    ), p = Lt(
      () => i.value.filter(
        (y) => (c.value || y.sourceLanguage === n.value) && (g.value || y.targetLanguage === s.value)
      ).sort((y, E) => y.lastUpdatedTimestamp < E.lastUpdatedTimestamp)
    ), m = Lt(() => {
      const y = i.value.map(
        (E) => E.targetLanguage
      );
      return [...new Set(y)];
    }), h = Lt(() => {
      const y = i.value.map(
        (E) => E.sourceLanguage
      );
      return [...new Set(y)];
    }), f = (y) => {
      u.value = y, l.value = !0;
    }, v = Lt(() => t.activeStatus === t.translationStatus), _ = t8("breakpoints"), b = Lt(() => _.value.mobile), x = Lt(
      () => b.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (y, E) => v.value ? (jt(), bs(mg(Je), {
      key: 0,
      class: Zr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: wg(() => [
        pg("div", {
          class: Zr(["cx-translation-list__header", x.value])
        }, [
          pg("h3", {
            class: Zr(["px-4 mw-ui-card__title mb-0", { "pb-4": b.value }]),
            textContent: Yk(y.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Jk),
          p.value.length ? (jt(), bs(Ki, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": E[0] || (E[0] = (S) => n.value = S),
            "selected-target-language": s.value,
            "onUpdate:selectedTargetLanguage": E[1] || (E[1] = (S) => s.value = S),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Wa("", !0)
        ], 2)
      ]),
      default: wg(() => [
        r.value && !p.value.length ? (jt(), bs(Of, {
          key: 0,
          title: y.$i18n("cx-sx-translation-list-empty-title"),
          description: y.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Wa("", !0),
        r.value ? Wa("", !0) : (jt(), bs(mg(gt), { key: 1 })),
        d.value ? (jt(), Ka("div", Zk, [
          (jt(!0), Ka(fg, null, hg(p.value, (S) => (jt(), bs(PC, {
            key: `${e.translationStatus}-${S.key}`,
            translation: S,
            onDeleteTranslation: (F) => f(S)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (jt(), Ka("div", e8, [
          (jt(!0), Ka(fg, null, hg(p.value, (S) => (jt(), bs(qC, {
            key: `${e.translationStatus}-${S.key}`,
            translation: S
          }, null, 8, ["translation"]))), 128))
        ])),
        Qk(rk, {
          modelValue: l.value,
          "onUpdate:modelValue": E[2] || (E[2] = (S) => l.value = S),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Wa("", !0);
  }
};
const el = window.Vue.toDisplayString, qi = window.Vue.createElementVNode, tl = window.Vue.unref, bo = window.Vue.openBlock, nl = window.Vue.createBlock, _g = window.Vue.createCommentVNode, s8 = window.Vue.Fragment, Sg = window.Vue.createElementBlock, o8 = window.Vue.withKeys, a8 = window.Vue.withCtx, i8 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, r8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, l8 = /* @__PURE__ */ qi("span", null, "/", -1), c8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, yg = window.Codex.CdxIcon, u8 = window.Codex.CdxInfoChip, Qa = window.Vue.computed, ds = {
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
    const t = e, n = Qa(() => t.content.lastIndexOf("/")), s = Qa(() => t.content.slice(0, n.value)), o = Qa(() => t.content.slice(n.value + 1)), a = Qa(
      () => t.expanded ? cy : jc
    );
    return (r, l) => (bo(), nl(tl(u8), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = o8((u) => r.$emit("click"), ["enter"]))
    }, {
      default: a8(() => [
        n.value === -1 ? (bo(), Sg(s8, { key: 0 }, [
          qi("span", null, el(e.content), 1),
          e.expandable ? (bo(), nl(tl(yg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : _g("", !0)
        ], 64)) : (bo(), Sg("div", i8, [
          qi("span", r8, el(s.value), 1),
          l8,
          qi("span", c8, el(o.value), 1),
          e.expandable ? (bo(), nl(tl(yg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : _g("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const _e = window.Vue.unref, Tt = window.Vue.createVNode, Ln = window.Vue.createElementVNode, Co = window.Vue.toDisplayString, ht = window.Vue.withCtx, d8 = window.Vue.resolveDirective, sl = window.Vue.withDirectives, Tn = window.Vue.openBlock, Cs = window.Vue.createBlock, Zn = window.Vue.createCommentVNode, xg = window.Vue.createElementBlock, bg = window.Vue.withModifiers, g8 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, p8 = { class: "col shrink pe-4" }, m8 = ["lang", "dir", "textContent"], h8 = ["lang", "dir", "textContent"], f8 = { class: "cx-suggestion__missing-sections" }, w8 = {
  key: 0,
  class: "cx-suggestion__easy-sections ms-1"
}, v8 = ["textContent"], _8 = ["textContent"], ol = window.Codex.CdxIcon, Oe = window.Vue.computed, S8 = window.Vue.inject, y8 = window.Vuex.useStore, Zc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [ms, en, Hs],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = y8(), s = Oe(() => t.suggestion), o = Oe(
      () => s.value.sourceTitle || s.value.title
    ), a = Oe(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        o.value
      )
    ), r = Oe(
      () => {
        var x;
        return (x = s.value) == null ? void 0 : x.missingSectionsCount;
      }
    ), l = Oe(() => !(s.value instanceof en) || !s.value.orderedMissingSections ? 0 : s.value.orderedMissingSections.filter((x) => {
      const y = s.value.getSectionSize(x.sourceTitle);
      return Hh(y);
    }).length), u = ge(), d = Oe(() => {
      const x = u.i18n(
        "cx-sx-translation-suggestion-easy-sections",
        [l.value]
      );
      return u.i18n("parentheses", [x]);
    }), i = Oe(() => {
      var x;
      return (x = a.value) == null ? void 0 : x.description;
    }), c = Oe(
      () => s.value instanceof en
    ), g = Oe(
      () => s.value instanceof Hs
    ), p = Oe(
      () => I.getAutonym(s.value.sourceLanguage)
    ), m = Oe(
      () => I.getAutonym(s.value.targetLanguage)
    ), h = Oe(
      () => g.value ? Qh : Jh
    ), f = S8("colors"), v = Oe(
      () => g.value ? f.blue600 : "currentColor"
    ), _ = Oe(
      () => {
        var x;
        return K_((x = a.value) == null ? void 0 : x.articleSize);
      }
    ), b = Oe(
      () => s.value instanceof Nh || s.value instanceof Mh
    );
    return (x, y) => {
      const E = d8("i18n");
      return s.value ? (Tn(), xg("div", g8, [
        Ln("div", p8, [
          Tt(_e(eu), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        Tt(_e(U), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: ht(() => [
            Tt(_e(U), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: ht(() => [
                Tt(_e(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: ht(() => [
                    Ln("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: _e(I.getDir)(s.value.sourceLanguage),
                      textContent: Co(o.value)
                    }, null, 8, m8)
                  ]),
                  _: 1
                }),
                Tt(_e(k), { shrink: "" }, {
                  default: ht(() => [
                    Ln("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: _e(I.getDir)(s.value.sourceLanguage),
                      textContent: Co(i.value)
                    }, null, 8, h8)
                  ]),
                  _: 1
                }),
                _.value && !c.value && !b.value ? (Tn(), Cs(_e(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: ht(() => [
                    sl(Ln("small", null, null, 512), [
                      [E, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Zn("", !0),
                c.value ? (Tn(), Cs(_e(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom",
                  shrink: ""
                }, {
                  default: ht(() => [
                    sl(Ln("small", f8, null, 512), [
                      [E, [r.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (Tn(), xg("small", w8, Co(d.value), 1)) : Zn("", !0)
                  ]),
                  _: 1
                })) : g.value ? (Tn(), Cs(_e(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: ht(() => [
                    Tt(_e(U), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: ht(() => [
                        Tt(_e(k), { grow: "" }, {
                          default: ht(() => [
                            Ln("small", {
                              textContent: Co(p.value)
                            }, null, 8, v8),
                            Tt(_e(ol), {
                              icon: _e(Kh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            Ln("small", {
                              textContent: Co(m.value)
                            }, null, 8, _8)
                          ]),
                          _: 1
                        }),
                        r.value ? (Tn(), Cs(_e(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: ht(() => [
                            sl(Ln("small", null, null, 512), [
                              [E, [
                                r.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : Zn("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : Zn("", !0),
                b.value ? (Tn(), Cs(_e(k), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: ht(() => [
                    Tt(ds, {
                      icon: _e(mu),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : Zn("", !0)
              ]),
              _: 1
            }),
            Tt(_e(k), { shrink: "" }, {
              default: ht(() => [
                g.value ? Zn("", !0) : (Tn(), Cs(_e(ol), {
                  key: 0,
                  icon: _e(Qs),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: y[0] || (y[0] = bg((S) => x.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                Tt(_e(ol), {
                  class: "cx-suggestion__favorite-button",
                  icon: h.value,
                  "icon-color": v.value,
                  onClick: y[1] || (y[1] = bg((S) => x.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : Zn("", !0);
    };
  }
};
const al = window.Vue.normalizeClass, Cg = window.Vue.createVNode, x8 = window.Vue.renderList, kg = window.Vue.Fragment, ko = window.Vue.openBlock, Ja = window.Vue.createElementBlock, b8 = window.Vue.createBlock, C8 = window.Vue.toDisplayString, k8 = window.Vue.withKeys, $g = window.Vue.createCommentVNode, $8 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, Za = window.Vue.computed, V8 = window.Vue.ref, E8 = window.Vue.watchEffect, L8 = {
  __name: "SuggestionFilterChip",
  props: {
    filter: {
      type: Rt,
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
    const n = e, s = Za(
      () => n.isSelected(n.filter) || n.filter.subFilters.some((g) => n.isSelected(g))
    ), o = V8(!1);
    E8(() => {
      n.filter.expandable && (o.value = s.value);
    });
    const a = t, r = () => {
      n.filter.expandable && s.value ? o.value = !o.value : a("filter-selected", n.filter);
    }, l = Za(() => {
      const g = n.filter.subFilters.find(
        (m) => n.isSelected(m)
      );
      let p = n.filter.chipLabel;
      return g && (p += `/${u(g)}`), p;
    }), u = (g) => {
      const { label: p } = g, m = n.filter.label;
      return p.startsWith(`${m}/`) ? p.replace(`${m}/`, "") : p;
    }, d = Za(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), i = Za(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && o.value
    ), c = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, p) => (ko(), Ja(kg, null, [
      Cg(ds, {
        class: al(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": s.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: o.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      o.value ? (ko(), Ja("div", $8, [
        Cg(ds, {
          class: al(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: p[0] || (p[0] = (m) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (ko(!0), Ja(kg, null, x8(d.value, (m) => (ko(), b8(ds, {
          key: m.id,
          class: al(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(m)
          }]),
          content: u(m),
          icon: m.icon,
          onClick: (h) => g.$emit("filter-selected", m)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        i.value ? (ko(), Ja("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: c,
          onKeyup: k8(c, ["enter"])
        }, C8(e.viewMoreConfig.label), 33)) : $g("", !0)
      ])) : $g("", !0)
    ], 64));
  }
};
const T8 = window.Vue.toDisplayString, Vg = window.Vue.createElementVNode, A8 = window.Vue.renderList, Eg = window.Vue.Fragment, il = window.Vue.openBlock, Lg = window.Vue.createElementBlock, D8 = window.Vue.createBlock, P8 = { class: "sx-suggestions-filters__group-label mb-3" }, B8 = { class: "sx-suggestions-filters__group-filters mb-3" }, F8 = {
  __name: "SXSuggestionsFiltersDialogTabGroupContent",
  props: {
    filterGroup: {
      type: ra,
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
    return (s, o) => (il(), Lg(Eg, null, [
      Vg("div", P8, T8(e.filterGroup.label), 1),
      Vg("div", B8, [
        (il(!0), Lg(Eg, null, A8(n(), (a) => (il(), D8(L8, {
          key: a.id,
          filter: a,
          "is-selected": e.isSelected,
          "sub-filter-limit": e.getSubFilterConfig ? e.getSubFilterConfig(a).limit : 0,
          "view-more-config": e.getSubFilterConfig ? e.getSubFilterConfig(a).viewMoreConfig : null,
          onFilterSelected: o[0] || (o[0] = (r) => e.tentativelySelectFilter(r))
        }, null, 8, ["filter", "is-selected", "sub-filter-limit", "view-more-config"]))), 128))
      ])
    ], 64));
  }
}, Tg = window.Vue.computed, N8 = window.Vue.inject, Ag = window.Vue.ref, Dg = window.Vue.watch, bu = (e, t) => {
  const s = Ag([]), o = Ag(!1), a = Tg(
    () => s.value.slice(0, 4)
  ), r = N8("breakpoints"), l = Tg(() => r.value.mobile), u = xu(() => C(void 0, null, function* () {
    if (!t.value) {
      o.value = !1;
      return;
    }
    try {
      s.value = yield ps.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      o.value = !1, mw.cx.eventlogging.stats.articleSearchAccess(l.value);
    }
  }), 500), d = () => {
    s.value = [], t.value && (o.value = !0, u());
  };
  return Dg(t, d), Dg(e, d), {
    searchResultsLoading: o,
    searchResultsSlice: a
  };
};
class ei {
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
    description: s,
    filterType: o,
    filterId: a,
    thumbnail: r = null,
    icon: l = null,
    showThumbnail: u = !1
  }) {
    this.label = t, this.value = n + "-" + o, this.description = s, this.thumbnail = r, this.filterType = o, this.filterId = a, this.icon = l, this.showThumbnail = u;
  }
}
const rl = window.Vue.ref, Pg = window.Vue.watch, Bg = window.Vue.computed, { topics: M8, regions: U8 } = mw.loader.require(
  "ext.cx.articlefilters"
), I8 = M8.flatMap(
  (e) => e.topics.map((t) => Ke(ce({}, t), {
    groupId: e.groupId
  }))
), R8 = () => {
  const e = rl(""), t = rl("all"), n = rl({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), s = ge(), { pageCollectionGroups: o } = pu(), { sourceLanguageURLParameter: a } = P(), r = (p) => (p = p.toLowerCase(), I8.filter(
    (m) => m.label.toLowerCase().includes(p)
  )), l = (p) => (p = p.toLowerCase(), Object.values(o.value).flat().filter(
    (h) => h.name.toLowerCase().includes(p)
  )), u = (p) => (p = p.toLowerCase(), U8.flatMap((m) => [m, ...m.countries]).filter(
    (m) => m.label.toLowerCase().includes(p)
  ).map((m) => ({
    label: m.label,
    id: m.id
  }))), d = Bg(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: c } = bu(
    a,
    d
  );
  Pg(i, () => {
    n.value.topics = i.value.map(
      (p) => {
        var m;
        return new ei({
          label: p.title,
          value: p.title,
          description: p.description,
          thumbnail: { url: (m = p.thumbnail) == null ? void 0 : m.source },
          filterType: yt,
          filterId: p.title,
          showThumbnail: !0
        });
      }
    );
  }), Pg([e, t], () => C(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (p) => new ei({
        label: p.label,
        value: p.label,
        description: s.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? Hc : null,
        filterType: We,
        filterId: p.topicId
      })
    ), n.value.collections = l(
      e.value
    ).map(
      (p) => new ei({
        label: p.name,
        value: p.name,
        description: s.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          p.articlesCount
        ),
        icon: t.value === "all" ? mu : null,
        filterType: ee,
        filterId: p.name
      })
    ), n.value.regions = u(e.value).map(
      (p) => new ei({
        label: p.label,
        value: p.label,
        description: s.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? Hc : null,
        filterType: ke,
        filterId: p.id
      })
    );
  }));
  const g = Bg(() => {
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
  return { searchInput: e, searchScope: t, searchResults: g, searchResultsLoading: c };
}, z8 = "suggestion_filter_topic_area", O8 = "suggestion_filter_search_result_seed", j8 = "suggestion_filter_collections", H8 = "suggestion_filter_previous_edits", q8 = "suggestion_filter_popular_articles", G8 = "suggestion_filter_region", ll = (e) => {
  if (e.type === We || e.type === ke || e.type === ee || e.type === yt)
    return e.id;
  if (e.id === ee)
    return "all-collections";
}, cl = (e) => {
  if (e.type === We)
    return z8;
  if (e.type === ke)
    return G8;
  if (e.type === yt)
    return O8;
  if (e.id === ee || e.type === ee)
    return j8;
  if (e.id === nn)
    return H8;
  if (e.id === Cn)
    return q8;
}, jf = () => {
  const e = Ct();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: cl(r),
      event_context: ll(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: cl(r),
      event_context: ll(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: cl(r),
      event_context: ll(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const ye = window.Vue.unref, ft = window.Vue.createVNode, At = window.Vue.withCtx, X8 = window.Vue.resolveDirective, Ht = window.Vue.createElementVNode, ks = window.Vue.withDirectives, Fg = window.Vue.toDisplayString, W8 = window.Vue.createTextVNode, K8 = window.Vue.vShow, Ng = window.Vue.isRef, Mg = window.Vue.renderList, Ug = window.Vue.Fragment, un = window.Vue.openBlock, es = window.Vue.createElementBlock, Y8 = window.Vue.withKeys, Ig = window.Vue.createCommentVNode, Rg = window.Vue.createBlock, Q8 = { class: "sx-suggestions-filters" }, J8 = { class: "mb-0" }, Z8 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, e2 = { class: "mb-3" }, t2 = { class: "px-4 pb-4 pt-7" }, n2 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, s2 = ["onKeyup", "onClick"], o2 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, a2 = { class: "sx-suggestions-filters__search-results-pending" }, i2 = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, r2 = { class: "sx-suggestions-filters__search-results-empty-primary" }, l2 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, ti = window.Vue.ref, ts = window.Vue.computed, c2 = window.Vue.inject, u2 = window.Vue.watch, zg = window.Codex.CdxButton, d2 = window.Codex.CdxIcon, g2 = window.Codex.CdxTextInput, p2 = window.Codex.CdxMenu, m2 = window.Codex.CdxTabs, h2 = window.Codex.CdxTab, f2 = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = ge(), s = t, o = ts(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: p([
          Qe,
          ee,
          ke,
          We
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
        filterGroups: p([ke])
      },
      {
        name: "topics",
        label: n.i18n("cx-sx-suggestions-filters-tab-topics"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-topics"
        ),
        filterGroups: p([We])
      }
    ]), a = (D) => K.value = D, r = ts(
      () => o.value.find((D) => D.name === K.value)
    ), l = (D, M) => M === "all" && D.type === ke ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          D.label
        ),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, u = (D, M) => {
      if (D !== "all")
        return !1;
      if (M === ee) {
        const Q = p([ee]);
        return Q.length && Q[0].filters.length > 6;
      }
      return M === ke;
    }, { allFilters: d, isFilterSelected: i, selectFilter: c, findSelectedFilter: g } = ar(), p = (D) => D.flatMap((M) => d.value.filter((Q) => Q.type === M)).filter(Boolean), m = () => {
      E(), s("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: h,
      logSuggestionFiltersConfirm: f,
      logSuggestionFiltersSelect: v
    } = jf(), _ = () => {
      h(), m();
    }, b = () => {
      y.value && (f(y.value), c(y.value)), m();
    }, x = ti(!1), y = ti(null), E = () => {
      y.value = null, x.value = !1;
    }, S = (D) => {
      v(D), y.value = D, x.value = !0;
    }, F = (D) => y.value ? y.value.id === D.id && y.value.type === D.type : i(D), V = c2("breakpoints"), A = ts(() => V.value.mobile), { searchInput: R, searchScope: K, searchResults: ie, searchResultsLoading: ne } = R8(), j = ts(
      () => y.value || g()
    ), W = ti(null);
    u2(W, () => {
      if (!W.value)
        return;
      const D = re.value.find(
        (M) => M.value === W.value
      );
      S({
        type: D.filterType,
        id: D.filterId,
        label: D.label
      }), R.value = "";
    });
    const se = {
      [ee]: "cx-sx-suggestions-filters-view-all-collections-group",
      [ke]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, re = ts(
      () => ie.value.flatMap((D) => D.items)
    ), $e = ti({}), Fe = ts(
      () => $e.value[K.value]
    ), Ae = ts(() => {
      var M;
      const D = (M = Fe.value) == null ? void 0 : M.getHighlightedMenuItem();
      return D == null ? void 0 : D.id;
    }), Z = (D) => {
      D.key !== " " && Fe.value && Fe.value.delegateKeyNavigation(D);
    }, nt = (D, M) => {
      $e.value[M] = D;
    };
    return (D, M) => {
      const Q = X8("i18n");
      return un(), Rg(ye(bt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: A.value,
        header: !1
      }, {
        default: At(() => [
          Ht("section", Q8, [
            ft(ye(U), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: At(() => [
                ft(ye(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: At(() => [
                    ft(ye(zg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": D.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: _
                    }, {
                      default: At(() => [
                        ft(ye(d2), { icon: ye(Qs) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                ft(ye(k), {
                  grow: "",
                  align: "center"
                }, {
                  default: At(() => [
                    ks(Ht("h5", J8, null, 512), [
                      [Q, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                ft(ye(k), {
                  shrink: "",
                  align: "start"
                }, {
                  default: At(() => [
                    ks(ft(ye(zg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: b
                    }, {
                      default: At(() => [
                        W8(Fg(D.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [K8, x.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ht("div", Z8, [
              ks(Ht("h5", e2, null, 512), [
                [Q, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Ht("div", null, [
                ft(ds, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: j.value.label,
                  icon: j.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            Ht("div", t2, [
              ft(ye(g2), {
                modelValue: ye(R),
                "onUpdate:modelValue": M[0] || (M[0] = (w) => Ng(R) ? R.value = w : null),
                role: "combobox",
                "aria-activedescendant": Ae.value,
                "aria-controls": "sx-suggestions-filters__search-results__menu",
                "aria-autocomplete": "none",
                placeholder: r.value.searchPlaceholder,
                "input-type": "search",
                "start-icon": ye(Hc),
                clearable: !!ye(R),
                onKeydown: Z
              }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
            ]),
            ft(ye(m2), {
              active: ye(K),
              "onUpdate:active": [
                M[2] || (M[2] = (w) => Ng(K) ? K.value = w : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: At(() => [
                (un(!0), es(Ug, null, Mg(o.value, (w, B) => (un(), Rg(ye(h2), {
                  key: B,
                  name: w.name,
                  label: w.label
                }, {
                  default: At(() => [
                    ye(R) ? (un(), es("div", o2, [
                      ft(ye(p2), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (T) => nt(T, w.name),
                        selected: W.value,
                        "onUpdate:selected": M[1] || (M[1] = (T) => W.value = T),
                        "show-pending": ye(ne),
                        expanded: "",
                        "menu-items": re.value
                      }, {
                        pending: At(() => [
                          ks(Ht("div", a2, null, 512), [
                            [Q, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": At(() => [
                          ye(ne) ? Ig("", !0) : (un(), es("div", i2, [
                            ks(Ht("span", r2, null, 512), [
                              [Q, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            ks(Ht("span", l2, null, 512), [
                              [Q, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (un(), es("div", n2, [
                      (un(!0), es(Ug, null, Mg(w.filterGroups, (T) => (un(), es("div", {
                        key: T.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        ft(F8, {
                          "filter-group": T,
                          "tentatively-select-filter": S,
                          "is-selected": F,
                          limit: u(w.name, T.type) ? 4 : 0,
                          "get-sub-filter-config": (N) => l(N, w.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        u(w.name, T.type) ? (un(), es("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: Y8((N) => a(T.id), ["enter"]),
                          onClick: (N) => a(T.id)
                        }, [
                          Ht("span", null, Fg(D.$i18n(se[T.id])), 1)
                        ], 40, s2)) : Ig("", !0)
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
const $o = window.Vue.unref, ni = window.Vue.openBlock, Og = window.Vue.createBlock;
window.Vue.createCommentVNode;
const w2 = window.Vue.renderList, v2 = window.Vue.Fragment, jg = window.Vue.createElementBlock, _2 = window.Vue.normalizeClass, Hg = window.Vue.createVNode, S2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, qg = window.Vue.ref;
window.Vue.computed;
const Gg = window.Vue.watch, y2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = ge(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: s } = jf(), {
      getFiltersSummary: o,
      selectFilter: a,
      isFilterSelected: r,
      waitingForPageCollectionsFetch: l,
      validateURLFilterWithCollections: u
    } = ar(), d = qg(!1), i = () => {
      s(), d.value = !0;
    }, c = (p) => {
      n(p), a(p);
    }, g = qg(o());
    return Gg(d, (p) => {
      p || (g.value = o());
    }), Gg(l, (p) => {
      p || (u(), g.value = o());
    }), (p, m) => $o(l) ? (ni(), Og($o(gt), { key: 0 })) : (ni(), jg("div", S2, [
      (ni(!0), jg(v2, null, w2(g.value, (h) => (ni(), Og(ds, {
        key: h.label,
        class: _2(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": $o(r)(h)
        }]),
        icon: h.icon,
        content: h.label,
        onClick: (f) => c(h)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Hg(ds, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: $o(fu),
        content: $o(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: i
      }, null, 8, ["icon", "content"]),
      Hg(f2, {
        modelValue: d.value,
        "onUpdate:modelValue": m[0] || (m[0] = (h) => d.value = h)
      }, null, 8, ["modelValue"])
    ]));
  }
}, $s = window.Vue.computed, Xg = window.Vue.ref, x2 = window.Vue.watch, b2 = window.Vuex.useStore, C2 = () => {
  const e = b2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: a } = uu(), r = Ct(), l = $s(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = $s(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = Xg(0), i = Xg(0), { maxSuggestionsPerSlice: c } = e.state.suggestions, g = 4, p = $s(
    () => a(d.value)
  ), m = $s(
    () => o(i.value)
  ), h = () => {
    y(), V(), E(), A();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: v
  } = vu(), _ = (R) => R.length === c, b = $s(
    () => _(m.value)
  ), x = $s(
    () => _(p.value)
  ), y = () => {
    const R = (d.value + 1) % g, K = _(
      a(R)
    );
    (!x.value || !K) && f();
  }, E = () => {
    const R = (i.value + 1) % g, K = _(
      o(R)
    );
    (!b.value || !K) && v();
  }, S = (R) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", R), y();
  }, F = (R) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", R), E();
  }, V = () => d.value = (d.value + 1) % g, A = () => i.value = (i.value + 1) % g;
  return x2(
    s,
    () => {
      i.value = 0, E(), d.value = 0, y();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: F,
    discardSectionSuggestion: S,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: l,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: o,
    isCurrentPageSuggestionsSliceFull: b,
    isCurrentSectionSuggestionsSliceFull: x
  };
}, k2 = window.Vuex.useStore, Cu = () => {
  const e = k2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = vu(), s = (d, i, c) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === c
  ), o = (d) => C(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: c, targetLanguage: g } = d;
    yield me.markFavorite(i, c, g);
    const p = new Hs({
      title: i,
      sourceLanguage: c,
      targetLanguage: g
    });
    e.commit("suggestions/addFavoriteSuggestion", p);
  });
  return {
    markFavoritePageSuggestion: (d) => {
      e.commit("suggestions/removePageSuggestionFromList", d), n(), o(d);
    },
    markFavoriteSectionSuggestion: (d) => {
      e.commit(
        "suggestions/removeSectionSuggestionFromList",
        d
      ), t(), o(d);
    },
    markFavoriteSuggestion: (d, i, c) => C(void 0, null, function* () {
      const g = s(
        i,
        c,
        d
      );
      g && (e.commit(
        "suggestions/removePageSuggestionFromList",
        g
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](i, c, d);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield me.markFavorite(
        d,
        i,
        c
      );
      const m = new Hs({
        title: d,
        sourceLanguage: i,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), me.unmarkFavorite(d))
  };
}, $2 = "suggestion_no_seed", V2 = "suggestion_recent_edit", E2 = "suggestion_topic_area", L2 = "suggestion_search_result_seed", T2 = "suggestion_featured", A2 = "suggestion_collections", D2 = "suggestion_region", P2 = () => {
  const { currentSuggestionFilters: e } = P();
  return (t = null) => {
    const { type: n, id: s } = e.value;
    if (s === nn)
      return t ? V2 : $2;
    if (n === We)
      return E2;
    if (n === ke)
      return D2;
    if (n === yt)
      return L2;
    if (s === Cn)
      return T2;
    if (s === ee || n === ee)
      return A2;
    const o = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${s}`
    );
    throw mw.errorLogger.logError(o, "error.contenttranslation"), o;
  };
};
const Wg = window.Vue.normalizeClass, B2 = window.Vue.resolveDirective, Vo = window.Vue.createElementVNode, si = window.Vue.withDirectives, fe = window.Vue.unref, ot = window.Vue.openBlock, qt = window.Vue.createBlock, An = window.Vue.createCommentVNode, ul = window.Vue.createVNode, Eo = window.Vue.withCtx, Kg = window.Vue.renderList, Yg = window.Vue.Fragment, dl = window.Vue.createElementBlock, F2 = window.Vue.toDisplayString, N2 = window.Vue.createTextVNode, M2 = window.Vue.vShow, U2 = { class: "cx-suggestion-list" }, I2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, R2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, z2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Gt = window.Vue.computed, O2 = window.Vue.inject, j2 = window.Vue.ref, H2 = window.Codex.CdxButton, q2 = window.Codex.CdxIcon, G2 = window.Vuex.useStore, X2 = {
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
      currentSuggestionFilters: s
    } = P(), { supportedSourceLanguageCodes: o, supportedTargetLanguageCodes: a } = wa(), r = rf(), l = (Z) => r(Z, n.value), u = (Z) => r(t.value, Z), d = P2(), i = ya(), c = (Z) => {
      i(
        Z.sourceTitle,
        Z.sourceLanguage,
        Z.targetLanguage,
        d(Z.suggestionSeed),
        s.value.id
      );
    }, {
      currentPageSuggestionsSlice: g,
      currentSectionSuggestionsSlice: p,
      discardPageSuggestion: m,
      discardSectionSuggestion: h,
      onSuggestionRefresh: f,
      pageSuggestionsLoading: v,
      sectionSuggestionsLoading: _,
      isCurrentPageSuggestionsSliceFull: b,
      isCurrentSectionSuggestionsSliceFull: x
    } = C2(), y = j2(null), E = Ct(), S = () => {
      E({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), y.value && y.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: F, markFavoritePageSuggestion: V } = Cu(), A = O2("breakpoints"), R = Gt(() => A.value.mobile), K = Gt(
      () => R.value ? null : "pb-2 flex justify-between items-center"
    ), ie = G2(), ne = Gt(
      () => ie.state.suggestions.isPageSuggestionsFetchPending
    ), j = Gt(
      () => ie.state.suggestions.isSectionSuggestionsFetchPending
    ), W = Gt(
      () => ne.value || v.value && !b.value
    ), se = Gt(
      () => j.value || _.value && !x.value
    ), re = Gt(
      () => ne.value || v.value || g.value.length > 0
    ), $e = Gt(
      () => j.value || _.value || p.value.length > 0
    ), Fe = Gt(
      () => !re.value && !$e.value
    ), Ae = Gt(
      () => !_.value && !v.value && !ne.value && !j.value && !Fe.value
    );
    return (Z, nt) => {
      const D = B2("i18n");
      return si((ot(), dl("div", U2, [
        ul(fe(Je), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: Eo(() => [
            Vo("div", {
              class: Wg(["cx-suggestion-list__header-card__header px-4", K.value])
            }, [
              si(Vo("h3", {
                class: Wg(["mw-ui-card__title mb-0", { "py-3": R.value }])
              }, null, 2), [
                [D, void 0, "cx-suggestionlist-title"]
              ]),
              R.value ? An("", !0) : (ot(), qt(Ki, {
                key: 0,
                "source-languages": fe(o),
                "target-languages": fe(a),
                "selected-source-language": fe(t),
                "selected-target-language": fe(n),
                "onUpdate:selectedSourceLanguage": l,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            ul(y2)
          ]),
          default: Eo(() => [
            R.value ? (ot(), qt(Ki, {
              key: 0,
              "source-languages": fe(o),
              "target-languages": fe(a),
              "selected-source-language": fe(t),
              "selected-target-language": fe(n),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : An("", !0)
          ]),
          _: 1
        }),
        $e.value ? (ot(), qt(fe(Je), {
          key: 0,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: Eo(() => [
            si(Vo("h5", I2, null, 512), [
              [D, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (ot(!0), dl(Yg, null, Kg(fe(p), (M, Q) => (ot(), qt(Zc, {
              key: `section-suggestion-${Q}`,
              class: "ma-0",
              suggestion: M,
              onClose: (w) => fe(h)(M),
              onClick: (w) => c(M),
              onBookmark: (w) => fe(F)(M)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            se.value ? (ot(), qt(fe(gt), { key: 0 })) : An("", !0)
          ]),
          _: 1
        })) : An("", !0),
        re.value ? (ot(), qt(fe(Je), {
          key: 1,
          ref_key: "pageSuggestionsList",
          ref: y,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: Eo(() => [
            si(Vo("h5", R2, null, 512), [
              [D, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (ot(!0), dl(Yg, null, Kg(fe(g), (M, Q) => (ot(), qt(Zc, {
              key: `page-suggestion-${Q}`,
              suggestion: M,
              onClose: (w) => fe(m)(M),
              onClick: (w) => c(M),
              onBookmark: (w) => fe(V)(M)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            W.value ? (ot(), qt(fe(gt), { key: 0 })) : An("", !0)
          ]),
          _: 1
        }, 512)) : An("", !0),
        Fe.value ? (ot(), qt(Of, {
          key: 2,
          title: Z.$i18n("cx-sx-suggestion-list-empty-title"),
          description: Z.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : An("", !0),
        Vo("div", z2, [
          Ae.value ? (ot(), qt(fe(H2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: S
          }, {
            default: Eo(() => [
              ul(fe(q2), {
                class: "me-1",
                icon: fe(tf)
              }, null, 8, ["icon"]),
              N2(" " + F2(Z.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : An("", !0)
        ])
      ], 512)), [
        [M2, e.active]
      ]);
    };
  }
}, W2 = window.Vue.resolveDirective, K2 = window.Vue.createElementVNode, Y2 = window.Vue.withDirectives, Q2 = window.Vue.renderList, J2 = window.Vue.Fragment, gl = window.Vue.openBlock, Z2 = window.Vue.createElementBlock, Qg = window.Vue.unref, Jg = window.Vue.createBlock, Zg = window.Vue.withCtx, e$ = window.Vue.createCommentVNode, t$ = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, n$ = window.Vue.computed, s$ = window.Vuex.useStore, o$ = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = s$(), n = n$(() => t.state.suggestions.favorites || []), s = ya(), o = (r) => s(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Cu();
    return (r, l) => {
      const u = W2("i18n");
      return n.value.length ? (gl(), Jg(Qg(Je), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Zg(() => [
          Y2(K2("h3", t$, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Zg(() => [
          (gl(!0), Z2(J2, null, Q2(n.value, (d, i) => (gl(), Jg(Zc, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (c) => o(d),
            onBookmark: (c) => Qg(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : e$("", !0);
    };
  }
};
const a$ = window.Vue.resolveDirective, Lo = window.Vue.createElementVNode, i$ = window.Vue.withDirectives, r$ = window.Vue.renderList, l$ = window.Vue.Fragment, ep = window.Vue.openBlock, tp = window.Vue.createElementBlock, c$ = window.Vue.unref, u$ = window.Vue.createVNode, d$ = window.Vue.toDisplayString, g$ = { class: "cx-help-panel pa-4" }, p$ = { class: "cx-help-panel__item-list mt-6 ps-2" }, m$ = ["href", "target"], h$ = ["textContent"], f$ = window.Codex.CdxIcon, w$ = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = ge(), n = [
      {
        icon: hy,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: dy,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (s, o) => {
      const a = a$("i18n");
      return ep(), tp("div", g$, [
        i$(Lo("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Lo("ul", p$, [
          (ep(), tp(l$, null, r$(n, (r, l) => Lo("li", {
            key: l,
            class: "mt-4"
          }, [
            Lo("a", {
              href: r.href,
              target: r.target
            }, [
              u$(c$(f$), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Lo("span", {
                textContent: d$(r.label)
              }, null, 8, h$)
            ], 8, m$)
          ])), 64))
        ])
      ]);
    };
  }
};
const v$ = window.Vue.resolveDirective, Dn = window.Vue.createElementVNode, pl = window.Vue.withDirectives, ml = window.Vue.toDisplayString, oi = window.Vue.unref, hl = window.Vue.withCtx, ai = window.Vue.createVNode, _$ = window.Vue.openBlock, S$ = window.Vue.createElementBlock, y$ = { class: "cx-stats-panel pa-4" }, x$ = ["textContent"], b$ = { class: "cx-stats-panel__monthly-stats-label" }, C$ = ["textContent"], k$ = { class: "cx-stats-panel__total-stats-label" }, $$ = ["href", "target"], V$ = ["textContent"], E$ = window.Codex.CdxIcon, L$ = window.Vue.ref, np = window.Vue.computed, T$ = window.Vue.watch, A$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = ge(), n = e, s = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = np(() => {
      var d, i;
      const u = ((i = (d = n.stats) == null ? void 0 : d[s]) == null ? void 0 : i.count) || 0;
      return mw.language.convertNumber(u);
    }), a = np(() => {
      var d, i;
      const u = ((i = (d = n.stats) == null ? void 0 : d[s]) == null ? void 0 : i.delta) || 0;
      return mw.language.convertNumber(u);
    }), r = L$(null), l = {
      icon: Zh,
      label: t.i18n("cx-sx-dashboard-stats-panel-all-stats-label"),
      href: "https://superset.wmcloud.org/superset/dashboard/p/X61GbQpZ5Rb/",
      target: "_blank"
    };
    return T$(
      () => n.stats,
      () => {
        const u = n.stats, d = r.value.getContext("2d"), i = Object.keys(n.stats || {}).sort(), c = i.reduce(
          (E, S) => Math.max(E, u[S].delta),
          0
        ), g = i.map((E) => u[E].delta), p = r.value.getBoundingClientRect().width, m = r.value.getBoundingClientRect().height;
        r.value.width = p, r.value.height = m;
        const h = 4, f = 6, v = 50, _ = (v - h) / c;
        let b = h;
        const x = Math.floor(
          (p - h) / (f + h)
        ), y = g.slice(
          Math.max(g.length - x, 0)
        );
        y.forEach((E, S) => {
          S === y.length - 1 && (d.fillStyle = "#36c");
          const F = v - E * _;
          d.fillRect(b, F, f, E * _), b += f + h;
        });
      }
    ), (u, d) => {
      const i = v$("i18n");
      return _$(), S$("div", y$, [
        pl(Dn("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        ai(oi(U), null, {
          default: hl(() => [
            ai(oi(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: hl(() => [
                Dn("h3", {
                  textContent: ml(a.value)
                }, null, 8, x$),
                pl(Dn("h5", b$, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            ai(oi(k), { class: "cx-stats-panel__total-stats" }, {
              default: hl(() => [
                Dn("h3", {
                  textContent: ml(o.value)
                }, null, 8, C$),
                pl(Dn("h5", k$, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Dn("canvas", {
          ref_key: "canvasRef",
          ref: r,
          class: "cx-stats-panel__canvas"
        }, null, 512),
        Dn("a", {
          class: "cx-stats-panel__stats-link",
          href: l.href,
          target: l.target
        }, [
          ai(oi(E$), {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          Dn("span", {
            textContent: ml(l.label)
          }, null, 8, V$)
        ], 8, $$)
      ]);
    };
  }
}, Hf = () => {
  const e = Ct();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const D$ = window.Vue.renderSlot, P$ = window.Vue.unref, B$ = window.Vue.createVNode, F$ = window.Vue.createElementVNode, N$ = window.Vue.openBlock, M$ = window.Vue.createElementBlock, U$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, I$ = { class: "col-12 ma-0 pa-0" }, R$ = {
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
    const n = t, s = Hf(), o = (a) => {
      s(a), n("update:active", a);
    };
    return (a, r) => (N$(), M$("footer", U$, [
      F$("div", I$, [
        D$(a.$slots, "default", {}, () => [
          B$(P$(ma), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: o
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, z$ = window.Vuex.useStore, O$ = () => {
  const e = z$(), t = Ks();
  return () => C(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const n = yield me.fetchFavorites();
    if (!n || !n.length)
      return;
    const s = {};
    for (const o of n)
      e.commit("suggestions/addFavoriteSuggestion", o), me.fetchSectionSuggestion(
        o.sourceLanguage,
        o.title,
        o.targetLanguage
      ).then(
        (a) => o.missingSectionsCount = (a == null ? void 0 : a.missingSectionsCount) || 0
      ), s[o.sourceLanguage] = [
        ...s[o.sourceLanguage] || [],
        o
      ];
    for (const [o, a] of Object.entries(
      s
    ))
      t(
        o,
        a.map((r) => r.title)
      );
  });
}, j$ = window.Vuex.useStore, qf = () => {
  const e = j$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a
  } = P(), { isDefaultFilter: r } = su(), { previousRoute: l } = Te(e), u = Ct(), d = () => {
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
      return d() || "direct_preselect";
    const p = {
      "sx-article-search": "return_from_search",
      "sx-translation-confirmer": "return_from_confirmation",
      "sx-section-selector": "return_from_section_selection",
      "sx-sentence-selector": "editor_close"
    }[l.value];
    return p || (r(s.value) ? d() || "direct" : "suggestion_filter_direct_preselect");
  };
  return { logDashboardOpenEvent: () => {
    if (n.value && d()) {
      const m = t("campaign");
      mw.hook("mw.cx.cta.accept").fire(
        m,
        o.value,
        a.value
      );
    }
    const g = i(), p = {
      event_type: "dashboard_open",
      event_source: g,
      translation_source_language: o.value,
      translation_target_language: a.value
    };
    return g === "suggestion_filter_direct_preselect" && (p.event_context = s.value.id), u(p);
  } };
}, H$ = window.Vue.computed, q$ = window.Vuex.useStore, Be = () => {
  const e = q$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s
  } = P();
  return { sectionSuggestion: H$(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      s.value
    )
  ) };
}, G$ = window.Vuex.useStore, X$ = window.Vue.computed, Ot = () => {
  const e = G$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: s,
    pageURLParameter: o
  } = P();
  return { currentTranslation: X$(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === o.value && r.sectionTitleMatches(s.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, fl = window.Vue.computed, W$ = window.Vuex.useStore, tt = () => {
  const e = W$(), { sectionSuggestion: t } = Be(), { currentTranslation: n } = Ot(), {
    sourceLanguageURLParameter: s,
    pageURLParameter: o,
    targetLanguageURLParameter: a
  } = P(), r = fl(
    () => e.getters["mediawiki/getPage"](
      s.value,
      o.value
    )
  ), l = fl(
    () => {
      var d, i;
      return ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    }
  ), u = fl(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: r, currentTargetPage: u, currentTargetPageTitle: l };
}, ii = window.Vue.computed, K$ = window.Vuex.useStore, te = () => {
  const e = K$(), { currentSourcePage: t } = tt(), { currentMTProvider: n } = Te(e), { sectionURLParameter: s } = P(), o = ii(() => {
    var u, d;
    return s.value ? (d = t.value) == null ? void 0 : d.getSectionByTitle(s.value) : (u = t.value) == null ? void 0 : u.leadSection;
  }), a = ii(
    () => {
      var u;
      return (u = o.value) == null ? void 0 : u.isTitleSelected;
    }
  ), r = ii(
    () => {
      var u;
      return (u = o.value) == null ? void 0 : u.selectedContentTranslationUnit;
    }
  ), l = ii(
    () => {
      var u;
      return (u = o.value) == null ? void 0 : u.getProposedTranslationByMtProvider(
        n.value
      );
    }
  );
  return {
    sourceSection: o,
    isSectionTitleSelected: a,
    selectedContentTranslationUnit: r,
    currentProposedTranslation: l
  };
}, wl = window.Vue.computed, Zs = () => {
  const { sectionURLParameter: e } = P(), { targetPageExists: t } = sn(), { sourceSection: n } = te(), { sectionSuggestion: s } = Be(), o = wl(
    () => {
      var l;
      return t.value && !!((l = n.value) != null && l.isLeadSection);
    }
  ), a = wl(
    () => {
      var l;
      return !!((l = n.value) != null && l.isLeadSection) && !t.value;
    }
  );
  return {
    isCurrentSectionPresent: wl(
      () => {
        var l;
        return o.value || !!((l = s.value) != null && l.presentSections.hasOwnProperty(
          e.value
        ));
      }
    ),
    isPresentLeadSection: o,
    isMissingLeadSection: a
  };
}, Y$ = window.Vue.ref, ri = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, vl = Y$(null), kt = () => {
  const { isCurrentSectionPresent: e } = Zs(), t = () => {
    e.value ? s(ri.EXPAND) : s(ri.NEW_SECTION);
  }, n = () => {
    vl.value = null;
  }, s = (o) => {
    if (!Object.values(ri).includes(o))
      throw new Error("[CX] Invalid publishing target used");
    vl.value = o;
  };
  return {
    target: vl,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: s,
    PUBLISHING_TARGETS: ri
  };
}, Q$ = window.Vue.watch, J$ = () => {
  const { fetchAllTranslations: e } = Js(), t = of(), n = O$(), { fetchPageCollectionGroups: s } = pu(), { logDashboardOpenEvent: o } = qf(), { applicationLanguagesInitialized: a } = lf(), { clearPublishTarget: r } = kt();
  return () => C(void 0, null, function* () {
    s(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), Q$(
      a,
      () => {
        a.value && (o(), t());
      },
      { immediate: !0 }
    );
  });
}, sp = window.Vue.computed, Z$ = window.Vue.ref, eV = window.Vue.watch, tV = window.Vue.watchEffect, nV = window.Vuex.useStore, sV = ["suggestions", "draft", "published"], oV = () => {
  const e = nV(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = P(), { translationsFetched: s } = Js(), o = Z$(null);
  if (sV.includes(t.value))
    o.value = t.value;
  else {
    const a = sp(
      () => s.value.draft
    ), r = sp(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? o.value = r.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", eV(a, (l) => {
      l && (o.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return tV(() => {
    n(o.value), window.scrollTo(0, 0);
  }), o;
}, aV = window.Vue.computed, iV = () => {
  const e = ge();
  return aV(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: R0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Qi,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: I0,
        type: "text"
      }
    }
  ]);
};
const xe = window.Vue.unref, Me = window.Vue.createVNode, rV = window.Vue.toDisplayString, lV = window.Vue.createTextVNode, dn = window.Vue.withCtx, _l = window.Vue.openBlock, op = window.Vue.createBlock, ap = window.Vue.createCommentVNode, cV = window.Vue.vShow, uV = window.Vue.withDirectives, dV = window.Vue.isRef, gV = window.Vue.createElementBlock, ip = window.Vue.computed, pV = window.Vue.inject, mV = window.Vuex.useStore, hV = window.Codex.CdxButton, fV = window.Codex.CdxIcon, wV = {
  __name: "CXDashboard",
  setup(e) {
    const t = et(), n = Ct(), s = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    J$()();
    const a = mV();
    a.dispatch("translator/fetchTranslatorStats");
    const r = ip(() => a.state.translator.translatorStats), l = oV(), u = iV(), d = Hf(), i = (p) => {
      d(p), l.value = p;
    }, c = pV("breakpoints"), g = ip(() => c.value.mobile);
    return mw.cx.eventlogging.stats.dashboardAccess(g.value), (p, m) => (_l(), gV("div", null, [
      Me(xe(U), { class: "ma-0 pb-4" }, {
        default: dn(() => [
          Me(xe(hV), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: s
          }, {
            default: dn(() => [
              Me(xe(fV), {
                class: "me-1",
                icon: xe(Wh)
              }, null, 8, ["icon"]),
              lV(" " + rV(p.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Me(xe(U), {
        class: "ma-0",
        align: "start"
      }, {
        default: dn(() => [
          p.$mwui.breakpoint.tabletAndUp ? (_l(), op(xe(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: dn(() => [
              Me(xe(ma), {
                id: "dashboard-list-selector--desktop",
                items: xe(u),
                active: xe(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : ap("", !0),
          Me(xe(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: dn(() => [
              uV(Me(o$, null, null, 512), [
                [cV, xe(l) === "suggestions"]
              ]),
              Me(X2, {
                active: xe(l) === "suggestions"
              }, null, 8, ["active"]),
              Me(vg, {
                "translation-status": "draft",
                "active-status": xe(l)
              }, null, 8, ["active-status"]),
              Me(vg, {
                "translation-status": "published",
                "active-status": xe(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Me(xe(k), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: dn(() => [
              Me(xe(U), {
                class: "ma-0",
                align: "start"
              }, {
                default: dn(() => [
                  Me(xe(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: dn(() => [
                      Me(A$, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Me(xe(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: dn(() => [
                      Me(w$)
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
      p.$mwui.breakpoint.mobile ? (_l(), op(R$, {
        key: 0,
        active: xe(l),
        "onUpdate:active": m[0] || (m[0] = (h) => dV(l) ? l.value = h : null),
        items: xe(u)
      }, null, 8, ["active", "items"])) : ap("", !0)
    ]));
  }
}, vV = {
  name: "DashboardView",
  components: { CxDashboard: wV }
}, _V = window.Vue.resolveComponent, SV = window.Vue.createVNode, yV = window.Vue.openBlock, xV = window.Vue.createElementBlock, bV = { class: "cx-translation-dashboard" };
function CV(e, t, n, s, o, a) {
  const r = _V("cx-dashboard");
  return yV(), xV("main", bV, [
    SV(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const rp = /* @__PURE__ */ de(vV, [["render", CV]]), Vs = window.Vue.computed, kV = () => {
  const { sectionSuggestion: e } = Be(), { targetLanguageURLParameter: t } = P(), { currentTranslation: n } = Ot(), s = Vs(
    () => {
      var g, p, m;
      return (m = (p = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), o = Vs(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = Vs(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = sn(), u = Vs(() => r ? Y.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? o.value >= 1 ? "cx-sx-select-section" : a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : a.value > 0 ? "cx-sx-select-section" : "" : "cx-sx-start-translation-button-label", i = Vs(() => {
    if (o.value > 1) {
      const g = "cx-sx-existing-translation-additional-info", p = ["$1", o.value - 1];
      return mw.message(g, ...p).parse().replace("$1", `"${s.value}"`);
    } else if (o.value === 1) {
      const g = "cx-sx-translation-confirmer-action-message-single-missing-multiple-present";
      return mw.message(g, "$1").parse().replace("$1", `"${s.value}"`);
    } else {
      const g = "cx-sx-translation-confirmer-action-message-none-missing-multiple-present";
      return mw.message(g).parse();
    }
  }), c = Vs(
    () => {
      var g;
      return !r.value || ((g = e.value) == null ? void 0 : g.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessage: i,
    getActionButtonLabel: d,
    isProgressiveButton: c,
    targetArticlePath: u
  };
};
function $V(e) {
  return e.$el = $(e), e;
}
function VV(e, t, n, s) {
  e.clearSurfaces();
  const o = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(
      // When content is empty, add a dummy span node so that VE doesn't add a new paragraph
      t || "<span class='sx-edit-dummy-node' />"
    ),
    { lang: n, dir: s }
  ), a = e.createSurface(o);
  return e.surfaces.push(a), e.setSurface(a), a.initialize(), a;
}
function EV() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function LV(e, t) {
  return C(this, null, function* () {
    yield ku(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = $V(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const TV = window.Vue.computed, AV = window.Vue.onMounted, DV = window.Vue.ref;
function PV(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const BV = {
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
    const n = DV(null);
    let s = null;
    const o = TV(
      () => e.useText ? s.getDom().body.textContent : s.getHtml()
    ), a = () => {
      s.destroy(), n.value.querySelector(".toolbar").innerHTML = "";
    }, u = {
      placeholder: !1,
      log: console.log,
      sectionId: 0,
      onBack: () => {
        a(), t.emit("close");
      },
      onNext: () => {
        t.emit("edit-completed", o.value), a();
      },
      language: e.language,
      title: e.title,
      siteMapper: new mw.cx.SiteMapper()
    };
    return AV(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = PV;
      const i = yield LV(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), s = VV(
        i,
        e.content,
        e.language,
        e.dir
      );
      const c = ve.ui.contextItemFactory.lookup("reference");
      c.prototype.getRendering = EV, s.focus();
    })), { sxeditor: n };
  }
}, Gi = window.Vue.createElementVNode, FV = window.Vue.openBlock, NV = window.Vue.createElementBlock, MV = ["lang", "dir"], UV = /* @__PURE__ */ Gi("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ Gi("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ Gi("div", { class: "toolbar" })
  ])
], -1), IV = ["lang", "dir"];
function RV(e, t, n, s, o, a) {
  return FV(), NV("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    UV,
    Gi("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, IV)
  ], 8, MV);
}
const zV = /* @__PURE__ */ de(BV, [["render", RV]]);
function ku() {
  return mw.loader.using("mw.cx3.ve");
}
const OV = window.Vuex.useStore, jV = () => {
  const e = OV();
  return (t, n) => C(void 0, null, function* () {
    const s = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!s)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield ku(), new Promise((o) => {
      setTimeout(() => {
        const a = Bh.convertSegmentedContentToPageSections(
          s.content,
          !0
          // resolve references
        );
        s.updateSections(a), o();
      }, 0);
    });
  });
}, HV = window.Vuex.useStore, Gf = () => {
  const e = HV();
  return (t, n, s, o = null) => C(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      s
    );
    if (a && a.content)
      return;
    const r = yield ps.fetchPageContent(
      t,
      n,
      s,
      o
    );
    a = e.getters["mediawiki/getPage"](
      t,
      s
    ), a ? a.content || (a.content = r.content, e.commit("mediawiki/setPageSections", {
      page: a,
      sections: r.sections
    })) : e.commit("mediawiki/addPage", r);
  });
}, ur = () => {
  const { currentSourcePage: e } = tt(), t = jV(), n = Gf(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = P(), u = (c, g) => C(void 0, null, function* () {
    if (!c()) {
      try {
        yield n(
          o.value,
          a.value,
          r.value,
          l.value
        );
      } catch (p) {
        throw mw.cx.eventlogging.stats.sourceArticleFetchFailed(!0), p;
      }
      bn || (yield t(
        o.value,
        r.value
      ));
    }
    g();
  });
  return {
    selectPageSectionByIndex: (c) => {
      const g = () => {
        var m;
        return (m = e.value.sections) == null ? void 0 : m[c];
      };
      return u(g, () => {
        const m = g();
        c === 0 ? m.originalTitle = e.value.title : s(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (c) => u(() => e.value.getSectionByTitle(c), () => {
      s(c);
    })
  };
}, qV = window.Vuex.useStore, eo = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: s,
    isQuickTutorialForced: o
  } = P(), { target: a } = kt(), r = qV(), l = et(), u = () => {
    const g = l.currentRoute.value.name !== "sx-quick-tutorial" && (o() || !r.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return l.getRoutes().find((p) => p.name === g);
  }, d = () => {
    const c = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), g = Y.getCurrentWikiLanguageCode();
    if (!c || t.value === g)
      return !1;
    const p = s.value ? { section: s.value } : {}, m = Y.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      p
    );
    return location.href = m + "#" + u().path, !0;
  }, i = () => {
    const c = {};
    s.value && (c.sourcesection = s.value), a.value && (c.publishtarget = a.value), location.href = Y.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      c
    );
  };
  return () => {
    if (Y.setCXToken(
      e.value,
      t.value,
      n.value
    ), bn) {
      i();
      return;
    }
    if (d())
      return;
    const g = u();
    l.push({ name: g.name });
  };
}, lp = window.Vue.computed, GV = window.Vue.ref, XV = window.Vue.watchEffect, Sl = /* @__PURE__ */ new Map(), WV = (e, t) => C(void 0, null, function* () {
  return (yield me.fetchArticleSections(
    e,
    t
  )).sections.filter(
    (o) => o.level === "2"
  )[0].byteoffset;
}), KV = (e, t) => {
  const n = `${e}:${t}`;
  if (Sl.has(n))
    return Sl.get(n);
  const s = WV(e, t);
  return Sl.set(n, s), s;
}, Xf = () => {
  const { currentSourcePage: e } = tt(), { sectionSuggestion: t } = Be(), { sectionURLParameter: n } = P(), s = GV(null);
  XV(() => C(void 0, null, function* () {
    var r;
    if (t.value && n.value)
      s.value = t.value.getSectionSize(n.value);
    else if (t.value) {
      const { missingSections: l } = t.value;
      s.value = Object.keys(l).reduce(
        (u, d) => u + t.value.getSectionSize(d),
        0
      );
    } else if (e.value && !bn) {
      const l = e.value.language, u = e.value.title;
      s.value = yield KV(l, u);
    } else
      s.value = ((r = e.value) == null ? void 0 : r.articleSize) || null;
  }));
  const o = lp(() => s.value ? !t.value && bn ? Oh(s.value) : jh(s.value) : dt.unknown);
  return { isQuickTranslation: lp(() => o.value === dt.stub || o.value === dt.easy), difficulty: o, sizeInBytes: s };
}, $u = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: s
  } = P(), o = Ct(), { difficulty: a } = Xf();
  return {
    logDashboardTranslationStartEvent: () => {
      const l = {
        event_type: "dashboard_translation_start",
        event_source: Mf.value,
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
      return Jc.value && (l.event_context = Jc.value), s.value ? (l.translation_source_section = s.value, l.translation_type = "section") : l.translation_type = "article", o(l);
    }
  };
}, Vu = () => {
  const e = Ct(), { currentTranslation: t } = Ot();
  return () => {
    if (!t.value)
      return mw.log.error(
        "[CX Event Logging] No current draft translation to continue"
      ), Promise.resolve();
    const {
      translationId: n,
      sourceLanguage: s,
      targetLanguage: o,
      sourceTitle: a,
      targetTitle: r,
      isLeadSectionTranslation: l,
      sourceSectionTitle: u,
      targetSectionTitle: d
    } = t.value, i = {
      event_type: "dashboard_translation_continue",
      translation_id: n,
      translation_source_language: s,
      translation_source_title: a,
      translation_target_language: o,
      translation_target_title: r,
      translation_type: l ? "article" : "section"
    };
    return u && (i.translation_source_section = u), d && (i.translation_target_section = d), e(i);
  };
}, YV = window.Vue.ref, QV = () => {
  const e = et(), { logDashboardTranslationStartEvent: t } = $u(), n = Vu(), s = eo(), { sectionURLParameter: o } = P(), { targetPageExists: a } = sn(), { selectPageSectionByTitle: r } = ur(), l = () => C(void 0, null, function* () {
    yield r(o.value), e.push({ name: "sx-content-comparator" });
  }), u = YV(!1), { currentTranslation: d } = Ot();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !bn ? u.value = !0 : (n(), s()) : o.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), s());
    },
    translationConfirmationDialogOn: u
  };
};
const JV = window.Vue.resolveDirective, cp = window.Vue.createElementVNode, up = window.Vue.withDirectives, ZV = window.Vue.unref, eE = window.Vue.withCtx, tE = window.Vue.openBlock, nE = window.Vue.createBlock, sE = {
  href: "",
  target: "_blank"
}, oE = window.Codex.CdxDialog, aE = {
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
    const n = e, s = t, o = (d) => s("update:modelValue", d), a = ge(), r = {
      label: a.i18n(
        "cx-unreviewed-translation-dialog-review-translation-button-label"
      ),
      actionType: "progressive"
    }, l = {
      label: a.i18n("cx-unreviewed-translation-dialog-close-button-label")
    };
    function u() {
      window.open(n.targetUrl, "_blank"), o(!1);
    }
    return (d, i) => {
      const c = JV("i18n");
      return tE(), nE(ZV(oE), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: d.$i18n("cx-unreviewed-translation-dialog-title"),
        "use-close-button": !0,
        "primary-action": r,
        "default-action": l,
        "onUpdate:open": i[0] || (i[0] = (g) => o(g)),
        onPrimary: u,
        onDefault: i[1] || (i[1] = (g) => o(!1))
      }, {
        default: eE(() => [
          up(cp("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          up(cp("a", sE, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
}, iE = () => {
  const {
    sectionURLParameter: e,
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s
  } = P(), o = ir();
  return () => C(void 0, null, function* () {
    const a = yield o(
      t.value,
      n.value,
      s.value
    );
    return a instanceof en ? a.sourceSections.includes(e.value) : !1;
  });
};
const we = window.Vue.unref, rE = window.Vue.resolveDirective, To = window.Vue.createElementVNode, dp = window.Vue.withDirectives, Ao = window.Vue.openBlock, yl = window.Vue.createElementBlock, xl = window.Vue.createCommentVNode, wt = window.Vue.createVNode, Dt = window.Vue.withCtx, bl = window.Vue.toDisplayString, Cl = window.Vue.createTextVNode, lE = window.Vue.withModifiers, gp = window.Vue.createBlock, cE = window.Vue.Fragment, uE = { class: "sx-translation-confirmer-body pb-4" }, dE = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, gE = ["innerHTML"], pE = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, mE = ["href"], hE = ["innerHTML"], kl = window.Vue.computed, $l = window.Vue.ref, fE = window.Vue.watchEffect, wE = window.Vuex.useStore, Vl = window.Codex.CdxButton, vE = window.Codex.CdxIcon, _E = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = et(), s = wE(), { sectionSuggestion: o } = Be(), { targetLanguageAutonym: a } = Te(s), { sectionURLParameter: r, clearSectionURLParameter: l } = P(), { logDashboardTranslationStartEvent: u } = $u(), d = eo(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: c } = QV(), g = $l(!1), p = $l(null), m = () => C(this, null, function* () {
      let ne = !0;
      try {
        ne = yield xt.checkUnreviewedTranslations();
      } catch (j) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          j
        );
      }
      ne !== !0 && (g.value = !0, p.value = ne.targetUrl);
    }), h = () => C(this, null, function* () {
      yield m(), !g.value && (u(), d());
    }), f = () => C(this, null, function* () {
      yield m(), !g.value && i();
    }), v = t;
    fE(() => {
      c.value && (v("open-translation-confirmation-dialog"), c.value = !1);
    });
    const {
      actionInformationMessage: _,
      getActionButtonLabel: b,
      isProgressiveButton: x,
      targetArticlePath: y
    } = kV(), E = ge(), S = kl(
      () => E.i18n(b(!!r.value))
    ), F = () => C(this, null, function* () {
      yield m(), !g.value && n.push({ name: "sx-section-selector" });
    }), V = kl(() => {
      var ne, j;
      return r.value && !!((j = (ne = o.value) == null ? void 0 : ne.sourceSections) != null && j.length);
    }), { targetPageExists: A } = sn(), R = kl(() => !r.value && A.value && bn), K = iE(), ie = $l(!1);
    return K().then((ne) => {
      ne || l(), ie.value = !0;
    }), (ne, j) => {
      const W = rE("i18n");
      return Ao(), yl(cE, null, [
        To("section", uE, [
          we(r) && ie.value ? (Ao(), yl("section", dE, [
            dp(To("h6", null, null, 512), [
              [W, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            To("h5", {
              class: "ma-0",
              innerHTML: we(r)
            }, null, 8, gE)
          ])) : we(A) && !we(r) ? (Ao(), yl("section", pE, [
            wt(we(U), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Dt(() => [
                dp(wt(we(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [W, [we(a)], "cx-sx-existing-translation-status"]
                ]),
                wt(we(k), { shrink: "" }, {
                  default: Dt(() => [
                    To("a", {
                      href: we(y),
                      target: "_blank"
                    }, [
                      wt(we(vE), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: we(or)
                      }, null, 8, ["icon"])
                    ], 8, mE)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            wt(we(U), { class: "ma-0" }, {
              default: Dt(() => [
                wt(we(k), null, {
                  default: Dt(() => [
                    To("span", { innerHTML: we(_) }, null, 8, hE)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : xl("", !0),
          wt(we(U), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Dt(() => [
              V.value ? (Ao(), gp(we(k), {
                key: 0,
                shrink: ""
              }, {
                default: Dt(() => [
                  wt(we(Vl), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: lE(F, ["stop"])
                  }, {
                    default: Dt(() => [
                      Cl(bl(ne.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : xl("", !0),
              R.value ? (Ao(), gp(we(k), {
                key: 1,
                shrink: ""
              }, {
                default: Dt(() => [
                  wt(we(Vl), {
                    size: "large",
                    onClick: h
                  }, {
                    default: Dt(() => [
                      Cl(bl(ne.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : xl("", !0),
              wt(we(k), { shrink: "" }, {
                default: Dt(() => [
                  wt(we(Vl), {
                    weight: "primary",
                    size: "large",
                    action: we(x) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: Dt(() => [
                      Cl(bl(S.value), 1)
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
        wt(aE, {
          modelValue: g.value,
          "onUpdate:modelValue": j[0] || (j[0] = (se) => g.value = se),
          "target-url": p.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const El = window.Vue.unref, SE = window.Vue.openBlock, yE = window.Vue.createBlock, xE = window.Vue.computed, Wf = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = wa(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: s
    } = P(), { currentLanguageTitleGroup: o } = sn(), a = xE(
      () => {
        var d;
        return ((d = o.value) == null ? void 0 : d.titles.map((i) => i.lang)) || [];
      }
    ), r = zy(), l = (d) => r(d, s.value), u = (d) => r(n.value, d);
    return (d, i) => (SE(), yE(Ki, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": El(t),
      "selected-source-language": El(n),
      "selected-target-language": El(s),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, bE = (e) => {
  const o = e / 5 / 15;
  return Math.ceil(o);
};
const De = window.Vue.unref, Ll = window.Vue.toDisplayString, Pn = window.Vue.createElementVNode, Xt = window.Vue.createVNode, Es = window.Vue.withCtx, CE = window.Vue.resolveDirective, kE = window.Vue.withDirectives, $E = window.Vue.normalizeClass, pp = window.Vue.openBlock, VE = window.Vue.createElementBlock, EE = window.Vue.createCommentVNode, LE = window.Vue.createBlock, TE = ["textContent"], AE = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, DE = ["textContent"], PE = { class: "pe-3" }, BE = ["textContent"], FE = window.Codex.CdxButton, Do = window.Codex.CdxIcon, Bn = window.Vue.computed, NE = window.Vuex.useStore, ME = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = NE(), { currentSourcePage: n } = tt(), { sectionSuggestion: s } = Be(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l
    } = P(), u = Bn(() => t.state.suggestions.favorites || []), d = Bn(
      () => u.value.some(
        (F) => r.value === F.title && o.value === F.sourceLanguage && a.value === F.targetLanguage
      )
    ), { markFavoriteSuggestion: i, removeFavoriteSuggestion: c } = Cu(), g = () => i(
      r.value,
      o.value,
      a.value
    ), p = () => c(
      new Hs({
        title: r.value,
        sourceLanguage: o.value,
        targetLanguage: a.value
      })
    ), m = Bn(
      () => d.value ? Qh : Jh
    ), h = Bn(
      () => d.value ? p : g
    ), f = Bn(
      () => Y.getPageUrl(o.value || "", r.value || "")
    ), v = Bn(
      () => {
        var F;
        return (((F = n.value) == null ? void 0 : F.langLinksCount) || 0) + 1;
      }
    ), _ = (F) => {
      const V = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let A = 0; A < V.length; A++)
        if (F >= V[A].value)
          return (F / V[A].value).toFixed(1).replace(/\.0$/, "") + V[A].suffix;
      return F.toString();
    }, b = Bn(() => {
      var V;
      const F = Object.values(((V = n.value) == null ? void 0 : V.pageviews) || {}).reduce(
        (A, R) => A + R,
        0
      );
      return _(F);
    }), { isQuickTranslation: x, sizeInBytes: y } = Xf(), E = ge(), S = Bn(() => {
      if (!s.value && !n.value || !y.value)
        return "";
      const F = bE(y.value), V = F >= 60 ? F / 60 : 0, A = Math.round(V * 2) / 2;
      if (!s.value && bn)
        return E.i18n(
          "cx-sx-translation-confirmer-translation-time-whole-article",
          A,
          F
        );
      if (s.value) {
        if (l.value)
          return E.i18n(
            "cx-sx-translation-confirmer-translation-time-single-section",
            A,
            F
          );
      } else
        return E.i18n(
          "cx-sx-translation-confirmer-translation-time-lead-section",
          A,
          F
        );
      return E.i18n(
        "cx-sx-translation-confirmer-translation-time-sections",
        A,
        F,
        Object.keys(s.value.missingSections).length
      );
    });
    return (F, V) => {
      const A = CE("i18n");
      return pp(), LE(De(U), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: Es(() => [
          Xt(De(k), null, {
            default: Es(() => [
              Xt(De(U), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: Es(() => [
                  Xt(De(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: Es(() => [
                      Pn("h5", {
                        class: "ma-0 me-1",
                        textContent: Ll(De(r))
                      }, null, 8, TE),
                      Xt(De(Do), {
                        size: "x-small",
                        icon: De(or)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Xt(De(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Es(() => [
                      Xt(De(FE), {
                        class: "px-0",
                        weight: "quiet",
                        action: d.value ? "progressive" : "default",
                        "aria-label": F.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: Es(() => [
                          Xt(De(Do), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Pn("div", AE, [
                Pn("div", null, [
                  Pn("span", null, [
                    Xt(De(Do), {
                      icon: De(ef),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Pn("span", {
                      class: "pe-3",
                      textContent: Ll(v.value)
                    }, null, 8, DE)
                  ]),
                  Pn("span", null, [
                    Xt(De(Do), {
                      icon: De(Zh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    kE(Pn("span", PE, null, 512), [
                      [A, [b.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                S.value ? (pp(), VE("span", {
                  key: 0,
                  class: $E(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": De(x)
                  }])
                }, [
                  Xt(De(Do), {
                    icon: De(ly),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Pn("span", {
                    textContent: Ll(S.value)
                  }, null, 8, BE)
                ], 2)) : EE("", !0)
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
const UE = window.Vue.resolveDirective, ns = window.Vue.createElementVNode, li = window.Vue.withDirectives, IE = window.Vue.toDisplayString, RE = window.Vue.createTextVNode, Tl = window.Vue.unref, Al = window.Vue.withCtx, Dl = window.Vue.openBlock, Pl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const zE = { class: "pa-4" }, OE = { class: "flex pt-2" }, jE = window.Codex.CdxButton, HE = window.Vue.ref, qE = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, s = () => n("update:modelValue", !1), o = eo(), a = Vu(), r = HE(!1), { currentTranslation: l } = Ot(), u = () => C(this, null, function* () {
      r.value = !0;
      let d = !1;
      try {
        d = yield xt.splitTranslation(
          l.value.translationId
        );
      } catch (i) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          i
        );
      }
      r.value = !1, d && (a(), o(), s());
    });
    return (d, i) => {
      const c = UE("i18n");
      return Dl(), Pl(Tl(bt), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: s
      }, {
        footer: Al(() => [
          ns("div", OE, [
            r.value ? (Dl(), Pl(Tl(gt), { key: 1 })) : (Dl(), Pl(Tl(jE), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: Al(() => [
                RE(IE(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: Al(() => [
          ns("div", zE, [
            li(ns("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            li(ns("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            ns("p", null, [
              li(ns("strong", null, null, 512), [
                [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            li(ns("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, GE = window.Vuex.useStore;
let ci = [];
const Eu = () => {
  const e = GE();
  return (t, n) => {
    const s = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || ci.includes(s) ? Promise.resolve() : (ci.push(s), ps.fetchLanguageTitles(t, n).then((o) => {
      ci = ci.filter(
        (a) => a !== s
      ), o && e.commit("mediawiki/addLanguageTitleGroup", o);
    }));
  };
};
function XE(e, t) {
  return C(this, null, function* () {
    const n = Y.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((s) => s.json()).then(
      (s) => Object.freeze(
        new ae(e, t, s.mt)
      )
    );
  });
}
function WE() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function KE(e, t, n, s) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const o = mw.config.get("wgWikiID"), a = Y.getWikiDomainCode(e), r = Y.getWikiDomainCode(t), l = {
    action: "wblinktitles",
    fromsite: o.replace(r, a),
    fromtitle: n,
    tosite: o,
    totitle: s
  }, u = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(u.postWithToken("csrf", l)).then((d) => {
    const c = {
      action: "tag",
      revid: d.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(u.postWithToken("csrf", c));
  });
}
const Lu = {
  fetchSupportedMTProviders: XE,
  fetchCXServerToken: WE,
  addWikibaseLink: KE
}, YE = window.Vue.ref, Ls = YE(null), Kf = () => {
  const e = () => C(void 0, null, function* () {
    var n, s;
    Ls.value || (yield Lu.fetchCXServerToken().then((o) => {
      o.age <= 30 && (o.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      o.refreshAt = a + o.age - 30, Ls.value = o;
    }).catch((o) => {
      if (o === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        Ls.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = Ls.value) == null ? void 0 : n.refreshAt) <= t ? (Ls.value = null, e()) : (s = Ls.value) == null ? void 0 : s.jwt;
  });
  return e;
};
const mp = window.Vue.resolveDirective, ui = window.Vue.createElementVNode, hp = window.Vue.withDirectives, Fn = window.Vue.unref, di = window.Vue.withCtx, gn = window.Vue.createVNode, Bl = window.Vue.openBlock, fp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const QE = window.Vue.createBlock, JE = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, ZE = { class: "mb-0" }, e4 = { class: "sx-translation-confirmer__article-image flex justify-center" }, t4 = ["src"], n4 = { class: "ma-3" }, wp = window.Vue.computed, s4 = window.Vue.inject, o4 = window.Vue.onBeforeUnmount, a4 = window.Vue.ref, i4 = window.Vuex.useStore, r4 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = i4(), { currentSourcePage: n } = tt(), { previousRoute: s } = Te(t), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: u
    } = P(), d = s4("breakpoints"), i = wp(() => d.value.nextBreakpoint), c = wp(
      () => {
        var b;
        return (b = n.value) == null ? void 0 : b.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: g } = Js(), p = Eu();
    g("draft"), p(o.value, r.value), ku(), Kf()(), sf()(a.value);
    const f = et(), v = () => {
      const b = ["dashboard", "sx-article-search"];
      !s.value || !b.includes(s.value) ? f.push({ name: "dashboard" }) : f.push({ name: s.value });
    };
    o4(() => {
      const b = f.currentRoute.value.name;
      (b === "dashboard" || b === "sx-article-search") && u();
    });
    const _ = a4(!1);
    return (b, x) => {
      const y = mp("i18n"), E = mp("i18n-html");
      return Bl(), fp("section", JE, [
        gn(Fn(U), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: di(() => [
            gn(Fn(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: di(() => [
                hp(ui("h5", ZE, null, 512), [
                  [y, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            gn(Fn(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: di(() => [
                gn(Fn(Xe), {
                  class: "pa-0",
                  type: "icon",
                  icon: Fn(Ji),
                  "icon-size": 20,
                  onClick: v
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ui("div", e4, [
          c.value ? (Bl(), fp("img", {
            key: 0,
            src: c.value
          }, null, 8, t4)) : (Bl(), QE(Fn(Ze), {
            key: 1,
            size: "120",
            icon: Fn(hh),
            "icon-color": b.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        gn(ME),
        gn(Wf),
        gn(_E, {
          onOpenTranslationConfirmationDialog: x[0] || (x[0] = (S) => _.value = !0)
        }),
        gn(Fn(U), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: di(() => [
            ui("p", n4, [
              hp(ui("small", null, null, 512), [
                [E, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        gn(qE, {
          modelValue: _.value,
          "onUpdate:modelValue": x[1] || (x[1] = (S) => _.value = S)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const l4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: r4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, c4 = window.Vue.resolveComponent, u4 = window.Vue.createVNode, d4 = window.Vue.normalizeClass, g4 = window.Vue.openBlock, p4 = window.Vue.createElementBlock;
function m4(e, t, n, s, o, a) {
  const r = c4("sx-translation-confirmer");
  return g4(), p4("main", {
    class: d4(["sx-translation-confirmer-view", a.classes])
  }, [
    u4(r)
  ], 2);
}
const h4 = /* @__PURE__ */ de(l4, [["render", m4]]);
const f4 = window.Vue.toDisplayString, vp = window.Vue.unref, w4 = window.Vue.createVNode, v4 = window.Vue.createTextVNode, _4 = window.Vue.createElementVNode, S4 = window.Vue.openBlock, y4 = window.Vue.createElementBlock, x4 = { class: "sx-section-selector-view-article-item" }, b4 = ["href"], C4 = window.Codex.CdxIcon, _p = {
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
    return (t, n) => (S4(), y4("span", x4, [
      _4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        v4(f4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        w4(vp(C4), {
          size: "x-small",
          icon: vp(or)
        }, null, 8, ["icon"])
      ], 8, b4)
    ]));
  }
};
const k4 = window.Vue.resolveDirective, gi = window.Vue.createElementVNode, Fl = window.Vue.withDirectives, ss = window.Vue.unref, $4 = window.Vue.toDisplayString, pi = window.Vue.withCtx, Po = window.Vue.createVNode, V4 = window.Vue.openBlock, E4 = window.Vue.createElementBlock, L4 = { class: "sx-section-selector__header pa-4" }, T4 = { class: "sx-section-selector__header-text ma-0" }, A4 = ["textContent"], D4 = { class: "pt-0 ma-0" }, P4 = { class: "ma-0" }, B4 = window.Codex.CdxButton, F4 = window.Codex.CdxIcon, N4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Be();
    return (n, s) => {
      const o = k4("i18n");
      return V4(), E4("div", L4, [
        Po(ss(U), { class: "ma-0 pb-3" }, {
          default: pi(() => [
            Po(ss(k), null, {
              default: pi(() => {
                var a;
                return [
                  Fl(gi("h6", T4, null, 512), [
                    [o, void 0, "cx-sx-section-selector-title"]
                  ]),
                  gi("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: $4((a = ss(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, A4)
                ];
              }),
              _: 1
            }),
            Po(ss(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: pi(() => [
                Po(ss(B4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: s[0] || (s[0] = (a) => n.$emit("close"))
                }, {
                  default: pi(() => [
                    Po(ss(F4), { icon: ss(Qs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Fl(gi("h4", D4, null, 512), [
          [o, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Fl(gi("p", P4, null, 512), [
          [o, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, M4 = window.Vue.renderList, U4 = window.Vue.Fragment, Nl = window.Vue.openBlock, Sp = window.Vue.createElementBlock, I4 = window.Vue.renderSlot, mi = window.Vue.unref, yp = window.Vue.createVNode, xp = window.Vue.withCtx, R4 = window.Vue.createBlock, z4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, O4 = window.Codex.CdxButton, j4 = window.Codex.CdxIcon, Yf = {
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
    return (t, n) => (Nl(), Sp("ul", z4, [
      (Nl(!0), Sp(U4, null, M4(e.sections, (s) => (Nl(), R4(mi(U), {
        key: s.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: xp(() => [
          yp(mi(O4), {
            weight: "quiet",
            class: "col justify-start items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (o) => t.$emit("select-section", s.sourceTitle)
          }, {
            default: xp(() => [
              I4(t.$slots, "default", {
                targetSection: s.targetTitle,
                sourceSection: s.sourceTitle,
                isEasy: s.isEasy
              }),
              yp(mi(j4), {
                icon: mi(Sa),
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
}, H4 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const q4 = window.Vue.resolveDirective, hi = window.Vue.createElementVNode, fi = window.Vue.withDirectives, Pt = window.Vue.unref, wi = window.Vue.openBlock, Ml = window.Vue.createBlock, G4 = window.Vue.createCommentVNode, Ts = window.Vue.withCtx, Bo = window.Vue.createVNode, X4 = window.Vue.toDisplayString, W4 = window.Vue.createTextVNode, K4 = window.Vue.createElementBlock, Y4 = { class: "sx-section-selector__missing-sections py-2" }, Q4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, J4 = ["lang", "dir", "innerHTML"], Ul = window.Vue.computed, Z4 = window.Codex.CdxButton, e3 = window.Codex.CdxInfoChip, t3 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Be(), { targetLanguageURLParameter: n } = P(), s = Ul(() => I.getAutonym(n.value)), o = Ul(
      () => {
        var r;
        return Object.keys(((r = t.value) == null ? void 0 : r.missingSections) || {}).length === 0;
      }
    ), a = Ul(() => {
      var r;
      return (r = t.value) != null && r.orderedMissingSections ? t.value.orderedMissingSections.map((l) => Ke(ce({}, l), {
        isEasy: Hh(
          t.value.getSectionSize(l.sourceTitle)
        )
      })) : [];
    });
    return (r, l) => {
      const u = q4("i18n");
      return wi(), K4("section", Y4, [
        fi(hi("h4", Q4, null, 512), [
          [u, [
            s.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (wi(), Ml(Pt(U), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Ts(() => [
            Bo(Pt(k), {
              class: "py-6 justify-center",
              innerHTML: Pt(H4)
            }, null, 8, ["innerHTML"]),
            Bo(Pt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Ts(() => [
                fi(hi("h6", null, null, 512), [
                  [u, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Bo(Pt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Ts(() => [
                fi(hi("p", null, null, 512), [
                  [u, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Bo(Pt(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Ts(() => [
                Bo(Pt(Z4), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: l[1] || (l[1] = (d) => r.$emit("close"))
                }, {
                  default: Ts(() => [
                    W4(X4(r.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (wi(), Ml(Yf, {
          key: 0,
          sections: a.value,
          onSelectSection: l[0] || (l[0] = (d) => r.$emit("select-section", d))
        }, {
          default: Ts(({ sourceSection: d, isEasy: i }) => {
            var c, g;
            return [
              hi("h5", {
                class: "ma-0",
                lang: (c = Pt(t)) == null ? void 0 : c.sourceLanguage,
                dir: Pt(I.getDir)((g = Pt(t)) == null ? void 0 : g.sourceLanguage),
                innerHTML: d
              }, null, 8, J4),
              i ? fi((wi(), Ml(Pt(e3), {
                key: 0,
                class: "sx-section-selector__easy-section-badge"
              }, null, 512)), [
                [u, void 0, "cx-sx-section-selector-easy-section-badge"]
              ]) : G4("", !0)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const n3 = window.Vue.resolveDirective, vi = window.Vue.createElementVNode, s3 = window.Vue.withDirectives, os = window.Vue.unref, o3 = window.Vue.withCtx, a3 = window.Vue.createVNode, i3 = window.Vue.openBlock, r3 = window.Vue.createElementBlock, l3 = { class: "sx-section-selector__present-sections py-2" }, c3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, u3 = { class: "sx-section-selector__present-section-button-content" }, d3 = ["lang", "dir", "innerHTML"], g3 = ["lang", "dir", "innerHTML"], p3 = window.Vue.computed, bp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Be(), { targetLanguageURLParameter: n } = P(), s = p3(() => I.getAutonym(n.value));
    return (o, a) => {
      var l;
      const r = n3("i18n");
      return i3(), r3("section", l3, [
        s3(vi("h4", c3, null, 512), [
          [r, [
            s.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        a3(Yf, {
          sections: ((l = os(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[0] || (a[0] = (u) => o.$emit("select-section", u))
        }, {
          default: o3(({ sourceSection: u, targetSection: d }) => {
            var i, c, g, p;
            return [
              vi("div", u3, [
                vi("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = os(t)) == null ? void 0 : i.sourceLanguage,
                  dir: os(I.getDir)((c = os(t)) == null ? void 0 : c.sourceLanguage),
                  innerHTML: u
                }, null, 8, d3),
                vi("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = os(t)) == null ? void 0 : g.targetLanguage,
                  dir: os(I.getDir)((p = os(t)) == null ? void 0 : p.targetLanguage),
                  innerHTML: d
                }, null, 8, g3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Ue = window.Vue.createVNode, Il = window.Vue.openBlock, Cp = window.Vue.createBlock, kp = window.Vue.createCommentVNode, m3 = window.Vue.resolveDirective, Nn = window.Vue.createElementVNode, Fo = window.Vue.withDirectives, at = window.Vue.unref, pn = window.Vue.withCtx, h3 = window.Vue.normalizeClass, $p = window.Vue.toDisplayString, Vp = window.Vue.createTextVNode, f3 = window.Vue.createElementBlock, w3 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, v3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, _3 = { class: "sx-section-selector__additional-consideration-title" }, S3 = { href: "#" }, y3 = { class: "sx-section-selector__additional-consideration-title" }, x3 = { href: "#" }, No = window.Vue.computed, b3 = window.Vue.inject, C3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = b3("breakpoints"), n = No(() => t.value.desktopAndUp), { sectionSuggestion: s } = Be(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = P(), u = No(() => I.getAutonym(o.value)), d = No(() => I.getAutonym(a.value)), i = No(
      () => {
        var b;
        return Y.getPageUrl(o.value, (b = s.value) == null ? void 0 : b.sourceTitle);
      }
    ), c = No(
      () => {
        var b;
        return Y.getPageUrl(a.value, (b = s.value) == null ? void 0 : b.targetTitle);
      }
    ), g = et(), p = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = Ot(), h = eo(), f = Vu(), { selectPageSectionByTitle: v } = ur(), _ = (b) => {
      l(b), m.value ? (f(), h()) : (v(b), g.push({ name: "sx-content-comparator" }));
    };
    return mw.cx.eventlogging.stats.selectSectionAccess(!n.value), (b, x) => {
      const y = m3("i18n");
      return Il(), f3("section", w3, [
        Ue(N4, { onClose: p }),
        Ue(Wf),
        Ue(at(U), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: pn(() => [
            Ue(at(k), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: pn(() => [
                Ue(t3, {
                  onSelectSection: _,
                  onClose: p
                }),
                n.value ? kp("", !0) : (Il(), Cp(bp, {
                  key: 0,
                  onSelectSection: _
                })),
                Nn("section", {
                  class: h3(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Fo(Nn("h4", v3, null, 512), [
                    [y, [
                      d.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Ue(at(U), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: pn(() => [
                      Ue(at(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: pn(() => [
                          Ue(_p, {
                            path: i.value,
                            autonym: u.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Ue(at(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: pn(() => [
                          Ue(_p, {
                            path: c.value,
                            autonym: d.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 2),
                Ue(at(U), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: pn(() => [
                    Ue(at(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: pn(() => [
                        Nn("h6", _3, [
                          Ue(at(Ze), {
                            icon: at(W0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          Vp(" " + $p(b.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Fo(Nn("p", null, null, 512), [
                          [y, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Fo(Nn("a", S3, null, 512), [
                          [y, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Ue(at(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: pn(() => [
                        Nn("h6", y3, [
                          Ue(at(Ze), {
                            icon: at(X0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          Vp(" " + $p(b.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Fo(Nn("p", null, null, 512), [
                          [y, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Fo(Nn("a", x3, null, 512), [
                          [y, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
            n.value ? (Il(), Cp(at(k), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: pn(() => [
                Ue(bp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: _
                })
              ]),
              _: 1
            })) : kp("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, k3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: C3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, $3 = window.Vue.resolveComponent, V3 = window.Vue.createVNode, E3 = window.Vue.normalizeClass, L3 = window.Vue.openBlock, T3 = window.Vue.createElementBlock;
function A3(e, t, n, s, o, a) {
  const r = $3("sx-section-selector");
  return L3(), T3("main", {
    class: E3(["sx-section-selector-view", a.classes])
  }, [
    V3(r)
  ], 2);
}
const D3 = /* @__PURE__ */ de(k3, [["render", A3]]), _i = window.Vue.computed, P3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = P(), n = _i(
    () => I.getAutonym(e.value)
  ), s = _i(
    () => I.getAutonym(t.value)
  ), { target: o, PUBLISHING_TARGETS: a } = kt(), r = _i(
    () => o.value === a.EXPAND
  ), l = ge();
  return _i(() => {
    const u = {
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
          s.value
        ),
        type: "text"
      }
    } : d = {
      value: "target_article",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-target-selector-full-article-title",
          s.value
        ),
        type: "text"
      }
    }, [u, d];
  });
};
const Ep = window.Vue.unref, B3 = window.Vue.createVNode, F3 = window.Vue.openBlock, N3 = window.Vue.createElementBlock, M3 = { class: "sx-content-comparator__content-type-selector" }, U3 = window.Vue.watchEffect, I3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = (r) => s("update:selection", r), a = P3();
    return U3(() => {
      a.value.map((l) => l.value).includes(n.selection) || o(a.value[0].value);
    }), (r, l) => (F3(), N3("div", M3, [
      B3(Ep(ma), {
        items: Ep(a),
        active: e.selection,
        onSelect: o
      }, null, 8, ["items", "active"])
    ]));
  }
}, Mo = window.Vue.computed, Tu = () => {
  const { currentTargetPage: e } = tt(), { sectionSuggestion: t } = Be(), { sectionURLParameter: n } = P(), s = Mo(
    () => t.value.missingSections[n.value] || t.value.presentSections[n.value] || ""
  ), o = Mo(
    () => {
      var d;
      return (((d = a.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), a = Mo(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.getSectionByTitle(s.value);
    }
  ), { sourceSection: r } = te(), l = Mo(() => {
    var d;
    return (d = r.value) == null ? void 0 : d.html;
  }), u = Mo(() => {
    var d;
    return (d = a.value) == null ? void 0 : d.html;
  });
  return {
    activeSectionTargetTitle: s,
    sourceSectionContent: l,
    targetSectionAnchor: o,
    targetSectionContent: u
  };
};
const Si = window.Vue.createVNode, R3 = window.Vue.createElementVNode, Mn = window.Vue.unref, yi = window.Vue.withCtx, Rl = window.Vue.openBlock, zl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const z3 = window.Vue.normalizeClass, O3 = ["lang", "dir", "innerHTML"], Lp = window.Vue.ref, xi = window.Vue.computed, j3 = window.Vue.onMounted, H3 = {
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
    const n = e, s = t, o = Lp(!1), { sectionSuggestion: a } = Be(), { sectionURLParameter: r } = P(), l = xi(
      () => (c.value || "").replace(/ /g, "_")
    ), u = (h) => s("update:contentTypeSelection", h), { activeSectionTargetTitle: d, targetSectionAnchor: i } = Tu(), c = xi(
      () => {
        var h;
        return (((h = a.value) == null ? void 0 : h.sourceSections) || []).find(
          (f) => f === r.value
        );
      }
    ), g = xi(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: c.value,
            path: `${Y.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${l.value}`,
            lang: a.value.sourceLanguage,
            dir: I.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: p.value,
            lang: a.value.targetLanguage,
            dir: I.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: d.value,
            path: `${p.value}#${i.value}`
          };
      }
    }), p = xi(
      () => Y.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), m = Lp(null);
    return j3(() => {
      new IntersectionObserver(
        ([f]) => {
          o.value = f.intersectionRect.height < f.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(m.value.$el);
    }), (h, f) => (Rl(), zl(Mn(U), {
      ref_key: "contentHeader",
      ref: m,
      class: z3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.value }]),
      direction: "column",
      align: "stretch",
      reverse: o.value
    }, {
      default: yi(() => [
        Si(I3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        Si(Mn(U), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: yi(() => [
            Si(Mn(k), null, {
              default: yi(() => [
                R3("h3", {
                  lang: g.value.lang,
                  dir: g.value.dir,
                  class: "ma-0 pa-0",
                  innerHTML: g.value.title
                }, null, 8, O3)
              ]),
              _: 1
            }),
            Si(Mn(k), { shrink: "" }, {
              default: yi(() => [
                o.value ? (Rl(), zl(Mn(Xe), {
                  key: 0,
                  icon: Mn(Qi),
                  progressive: "",
                  label: h.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: f[0] || (f[0] = (v) => h.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Rl(), zl(Mn(Xe), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: Mn(mh),
                  type: "icon",
                  href: g.value.path,
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
    }, 8, ["class", "reverse"]));
  }
}, bi = window.Vue.unref, Tp = window.Vue.createVNode, q3 = window.Vue.openBlock, G3 = window.Vue.createElementBlock, X3 = { class: "sx-content-comparator__header-navigation flex items-center" }, W3 = window.Vue.computed, K3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = P(), s = W3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: o } = ur(), a = () => {
      const l = (s.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      o(u);
    }, r = () => {
      const l = (s.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      o(u);
    };
    return (l, u) => (q3(), G3("div", X3, [
      Tp(bi(Xe), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: bi(j0),
        onClick: a
      }, null, 8, ["icon"]),
      Tp(bi(Xe), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: bi(O0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const Ap = window.Vue.toDisplayString, be = window.Vue.unref, Y3 = window.Vue.resolveDirective, Ol = window.Vue.withDirectives, As = window.Vue.openBlock, Ci = window.Vue.createElementBlock, Q3 = window.Vue.createCommentVNode, J3 = window.Vue.createTextVNode, Dp = window.Vue.createElementVNode, Z3 = window.Vue.normalizeClass, jl = window.Vue.withCtx, Hl = window.Vue.createVNode, Pp = window.Vue.createBlock, e5 = { class: "sx-content-comparator-header__mapped-section" }, t5 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, n5 = { key: 0 }, s5 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, o5 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, a5 = window.Vue.computed, i5 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = P(), { activeSectionTargetTitle: n } = Tu(), s = ge(), { target: o, PUBLISHING_TARGETS: a, setTarget: r } = kt(), l = a5(
      () => s.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        I.getAutonym(t.value)
      )
    );
    return (u, d) => {
      const i = Y3("i18n");
      return As(), Ci("div", e5, [
        Hl(be(U), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: jl(() => [
            Hl(be(k), { grow: "" }, {
              default: jl(() => [
                Dp("h6", t5, [
                  J3(Ap(l.value) + " ", 1),
                  be(o) === be(a).NEW_SECTION ? Ol((As(), Ci("span", n5, null, 512)), [
                    [i, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : Q3("", !0)
                ]),
                Dp("h6", {
                  class: Z3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": be(o) === be(a).NEW_SECTION
                  }])
                }, Ap(be(n)), 3)
              ]),
              _: 1
            }),
            Hl(be(k), { shrink: "" }, {
              default: jl(() => [
                be(o) === be(a).EXPAND ? (As(), Pp(be(Xe), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: be(ph),
                  type: "icon",
                  onClick: d[0] || (d[0] = (c) => be(r)(be(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (As(), Pp(be(Xe), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: be(Q0),
                  type: "icon",
                  onClick: d[1] || (d[1] = (c) => be(r)(be(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        be(o) === be(a).EXPAND ? Ol((As(), Ci("p", s5, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : Ol((As(), Ci("p", o5, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const Pe = window.Vue.unref, Ds = window.Vue.createVNode, r5 = window.Vue.toDisplayString, yn = window.Vue.createElementVNode, ql = window.Vue.withCtx, l5 = window.Vue.resolveDirective, Bp = window.Vue.withDirectives, Gl = window.Vue.openBlock, Fp = window.Vue.createBlock, Np = window.Vue.createCommentVNode, c5 = window.Vue.createElementBlock, u5 = { class: "sx-content-comparator__header pa-4" }, d5 = { class: "row my-1 py-2 mx-0 gap-6" }, g5 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, p5 = { class: "sx-content-comparator-header__titles shrink" }, m5 = ["lang", "dir"], h5 = ["lang", "dir", "innerHTML"], f5 = { class: "py-2 mb-1" }, w5 = /* @__PURE__ */ yn("br", null, null, -1), ki = window.Vue.computed, v5 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = P(), { sourceSection: n } = te(), { sectionSuggestion: s } = Be(), { isCurrentSectionPresent: o } = Zs(), a = ki(
      () => {
        var d;
        return (d = s.value) == null ? void 0 : d.missingSections.hasOwnProperty(t.value);
      }
    ), r = ki(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), l = ki(() => [
      ...Object.keys(s.value.missingSections),
      ...Object.keys(s.value.presentSections)
    ]), u = ki(
      () => {
        var d;
        return (((d = s.value) == null ? void 0 : d.sourceSections) || []).find(
          (i) => i === t.value
        );
      }
    );
    return (d, i) => {
      const c = l5("i18n");
      return Gl(), c5("div", u5, [
        Ds(Pe(Xe), {
          class: "py-2 pa-0",
          icon: Pe(H0),
          label: d.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (g) => d.$emit("close"))
        }, null, 8, ["icon", "label"]),
        yn("div", d5, [
          yn("div", g5, [
            yn("div", p5, [
              yn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Pe(s).sourceLanguage,
                dir: Pe(I.getDir)(Pe(s).sourceLanguage)
              }, r5(Pe(s).sourceTitle), 9, m5),
              yn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Pe(s).sourceLanguage,
                dir: Pe(I.getDir)(Pe(s).sourceLanguage),
                innerHTML: u.value
              }, null, 8, h5)
            ]),
            Ds(K3, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          yn("div", f5, [
            Ds(Pe(Xe), {
              class: "sx-content-comparator-header__translation-button",
              icon: Pe(Qi),
              progressive: "",
              label: d.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (g) => d.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (Gl(), Fp(Pe(U), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: ql(() => [
            Ds(Pe(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: ql(() => [
                Ds(Pe(Ze), { icon: Pe(K0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Ds(Pe(k), { class: "ma-0" }, {
              default: ql(() => [
                Bp(yn("strong", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                w5,
                Bp(yn("span", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Np("", !0),
        Pe(o) ? (Gl(), Fp(i5, { key: 1 })) : Np("", !0)
      ]);
    };
  }
};
const Mp = window.Vue.toDisplayString, _5 = window.Vue.createElementVNode, Up = window.Vue.openBlock, Ip = window.Vue.createElementBlock, S5 = window.Vue.createCommentVNode, y5 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, x5 = ["textContent"], b5 = ["textContent"], Qf = {
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
    return (t, n) => (Up(), Ip("section", y5, [
      _5("h5", {
        textContent: Mp(e.placeholderTitle)
      }, null, 8, x5),
      e.placeholderSubtitle ? (Up(), Ip("p", {
        key: 0,
        textContent: Mp(e.placeholderSubtitle)
      }, null, 8, b5)) : S5("", !0)
    ]));
  }
}, C5 = (e, t, n) => {
  const s = t.indexOf(e);
  return t.slice(s + 1).map((a) => n[a]).filter(Boolean)[0] || null;
}, k5 = ({
  sourceSectionTitle: e,
  sourceSectionTitles: t,
  targetSectionTitles: n,
  presentSectionMappings: s,
  targetAppendixSectionTitles: o
}) => {
  const a = C5(
    e,
    t,
    s
  );
  return a !== null ? a : n.find(
    (l) => o.includes(l)
  ) || null;
}, Xl = window.Vue.computed, $5 = window.Vue.createApp, V5 = window.Vuex.useStore, E5 = () => {
  const e = V5(), { sectionSuggestion: t } = Be(), { currentTargetPage: n } = tt(), { sectionURLParameter: s } = P(), o = ge(), a = () => $5(
    Qf,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, r = Xl(() => {
    const { appendixSectionTitles: d } = e.state.suggestions;
    return d[t.value.targetLanguage] || [];
  }), l = Xl(
    () => k5({
      sourceSectionTitle: s.value,
      sourceSectionTitles: t.value.sourceSections,
      targetSectionTitles: t.value.targetSections,
      presentSectionMappings: t.value.presentSections,
      targetAppendixSectionTitles: r.value
    })
  ), u = (d) => {
    const i = d.getElementsByTagName("base");
    Array.from(i).forEach(
      (c) => c.parentNode.removeChild(c)
    );
  };
  return Xl(() => {
    var c;
    if (!((c = n.value) != null && c.content))
      return null;
    const d = document.createElement("div");
    d.innerHTML = n.value.content, u(d);
    const i = a();
    if (l.value) {
      const g = Array.from(
        d.querySelectorAll("h2")
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
      d.appendChild(i);
    return d.innerHTML;
  });
};
const Wl = window.Vue.createVNode, it = window.Vue.unref, Ps = window.Vue.openBlock, Rp = window.Vue.createBlock, zp = window.Vue.createCommentVNode, $i = window.Vue.createElementVNode, Kl = window.Vue.Fragment, Vi = window.Vue.createElementBlock, L5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, T5 = { class: "sx-content-comparator__source-content" }, A5 = ["lang", "dir", "innerHTML"], D5 = ["lang", "dir", "innerHTML"], P5 = ["innerHTML"], B5 = window.Vue.ref, Op = window.Vue.computed, jp = window.Vue.watch, F5 = window.Vue.inject, N5 = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = kt(), n = et(), s = B5("source_section"), { logDashboardTranslationStartEvent: o } = $u(), a = eo(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      o(), a();
    }, {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: d
    } = P(), { sourceSectionContent: i, targetSectionContent: c } = Tu(), g = E5(), { sectionSuggestion: p } = Be(), { isCurrentSectionPresent: m } = Zs(), h = Op(() => p.value.targetTitle), f = Gf();
    jp(
      h,
      () => C(this, null, function* () {
        try {
          yield f(
            d.value,
            u.value,
            h.value
          );
        } catch (b) {
          throw mw.cx.eventlogging.stats.sourceArticleFetchFailed(!0), b;
        }
      }),
      { immediate: !0 }
    ), jp(m, t, { immediate: !0 });
    const v = F5("breakpoints"), _ = Op(() => v.value.mobile);
    return mw.cx.eventlogging.stats.sectionCompareAccess(_.value), (b, x) => (Ps(), Vi("section", L5, [
      Wl(v5, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      Wl(H3, {
        "content-type-selection": s.value,
        "onUpdate:contentTypeSelection": x[0] || (x[0] = (y) => s.value = y),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      $i("section", T5, [
        s.value === "source_section" ? (Ps(), Vi(Kl, { key: 0 }, [
          it(i) ? zp("", !0) : (Ps(), Rp(it(gt), { key: 0 })),
          $i("section", {
            lang: it(u),
            dir: it(I.getDir)(it(u)),
            class: "pt-2 px-4",
            innerHTML: it(i)
          }, null, 8, A5)
        ], 64)) : s.value === "target_article" ? (Ps(), Vi(Kl, { key: 1 }, [
          it(g) ? zp("", !0) : (Ps(), Rp(it(gt), { key: 0 })),
          $i("article", {
            lang: it(d),
            dir: it(I.getDir)(it(d)),
            class: "px-4",
            innerHTML: it(g)
          }, null, 8, D5)
        ], 64)) : (Ps(), Vi(Kl, { key: 2 }, [
          $i("section", {
            class: "pa-4",
            innerHTML: it(c)
          }, null, 8, P5),
          Wl(Qf, {
            class: "sx-content-comparator__new-section-placeholder--present",
            "placeholder-title": b.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
            "placeholder-subtitle": b.$i18n(
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
function j5(e, t, n, s, o, a) {
  const r = U5("sx-content-comparator");
  return z5(), O5("main", {
    class: R5(["sx-content-comparator-view", a.classes])
  }, [
    I5(r)
  ], 2);
}
const H5 = /* @__PURE__ */ de(M5, [["render", j5]]);
const q5 = window.Vue.resolveDirective, Uo = window.Vue.createElementVNode, Hp = window.Vue.withDirectives, Ei = window.Vue.unref, Yl = window.Vue.createVNode, qp = window.Vue.toDisplayString, Gp = window.Vue.createTextVNode, Io = window.Vue.withCtx, G5 = window.Vue.openBlock, X5 = window.Vue.createBlock, W5 = { class: "mw-ui-dialog__header px-4 py-3" }, K5 = { class: "mw-ui-dialog__header-title" }, Y5 = { class: "pa-4" }, Q5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Xp = window.Codex.CdxButton, J5 = {
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
    const n = t, s = () => n("update:modelValue", !1), o = () => {
      n("continue-translation"), s();
    }, a = () => {
      n("discard-translation"), s();
    };
    return (r, l) => {
      const u = q5("i18n");
      return G5(), X5(Ei(bt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: Io(() => [
          Uo("div", W5, [
            Hp(Uo("span", K5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Io(() => [
          Uo("div", Q5, [
            Yl(Ei(Xp), {
              weight: "quiet",
              onClick: o
            }, {
              default: Io(() => [
                Gp(qp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Yl(Ei(Xp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Io(() => [
                Gp(qp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Io(() => [
          Yl(Ei(Yi)),
          Uo("div", Y5, [
            Hp(Uo("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, Z5 = (e, t, n) => {
  const s = document.createElement("div");
  s.innerHTML = e;
  const o = Array.from(s.children).find(
    (a) => us(a)
  );
  return o && Sh(o) ? xt.parseTemplateWikitext(
    vh(o),
    n,
    t
  ) : Promise.resolve(null);
}, Jf = (e, t, n) => {
  let s = document.createElement("div");
  s.innerHTML = e, s.firstElementChild.getAttribute("rel") === "cx:Section" && (s = s.firstElementChild);
  const o = Array.from(s.children).find(
    (a) => us(a)
  );
  return o ? xt.parseTemplateWikitext(
    vh(o),
    n,
    t
  ) : Promise.resolve(null);
}, eL = window.Vuex.useStore, Au = () => {
  const e = eL(), { sourceSection: t } = te(), { getCurrentTitleByLanguage: n } = sn(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = P(), a = Kf(), r = (i, c, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[c] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof ut ? p.blockTemplateProposedTranslations[c] = g : p instanceof qn && p.addProposedTranslation(c, g);
  }, l = (i, c) => C(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](s.value, o.value, i))
      return "";
    try {
      const p = yield a();
      return yield xt.fetchSegmentTranslation(
        s.value,
        o.value,
        i,
        c,
        p
      );
    } catch (p) {
      return mw.log.error("Error while translating segment", p), "";
    }
  }), u = (i, c) => C(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      i,
      c
    ))
      return;
    let g = t.value.getOriginalContentByTranslationUnitId(i);
    const p = t.value.getContentTranslationUnitById(i);
    let m;
    if (e.commit("application/addMtRequestsPending", i), m = yield l(c, g), !m) {
      e.commit("application/removeMtRequestsPending", i);
      return;
    }
    p instanceof ut && (p.setBlockTemplateAdaptationInfoByHtml(
      c,
      m
    ), m = (yield Z5(
      m,
      n(o.value, s.value),
      o.value
    )) || ""), r(
      i,
      c,
      m
    ), e.commit("application/removeMtRequestsPending", i);
  });
  return {
    translateTranslationUnitById: u,
    translateSelectedTranslationUnitForAllProviders: () => {
      const i = e.getters["mediawiki/getSupportedMTProviders"](
        s.value,
        o.value
      ), { selectedTranslationUnitId: c } = t.value;
      i.forEach(
        (g) => u(c, g)
      );
    }
  };
}, tL = window.Vuex.useStore, nL = () => {
  const { sourceSection: e } = te(), t = tL(), { translateTranslationUnitById: n } = Au();
  return (s) => {
    t.commit("application/setCurrentMTProvider", s);
    const o = e.value.selectedTranslationUnitId;
    n(o, s);
  };
};
function sL(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((s) => {
    s.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const oL = window.Vue.resolveDirective, ct = window.Vue.createElementVNode, Li = window.Vue.withDirectives, je = window.Vue.unref, Ql = window.Vue.createVNode, mn = window.Vue.withCtx, aL = window.Vue.renderList, iL = window.Vue.Fragment, Ti = window.Vue.openBlock, rL = window.Vue.createElementBlock, lL = window.Vue.toDisplayString, Jl = window.Vue.createBlock, Wp = window.Vue.createCommentVNode, cL = { class: "mw-ui-dialog__header pa-4" }, uL = { class: "row ma-0 py-2" }, dL = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, gL = { class: "mb-0" }, pL = { class: "col shrink justify-center" }, mL = { class: "pb-2 mb-0" }, hL = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, fL = ["dir", "lang", "innerHTML"], wL = ["textContent"], vL = ["innerHTML"], _L = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, SL = /* @__PURE__ */ ct("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), yL = ["innerHTML"], Zl = window.Vue.computed, xL = window.Vuex.useStore, bL = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, s = ae.EMPTY_TEXT_PROVIDER_KEY, o = ae.ORIGINAL_TEXT_PROVIDER_KEY, a = xL(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: u
    } = te(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: i
    } = P(), c = Zl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        i.value
      )
    ), g = Zl(() => {
      const x = [o, s];
      return c.value.filter(
        (y) => !x.includes(y)
      );
    }), p = Zl(
      () => l.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = nL(), h = (x) => {
      m(x), v();
    }, f = ae.getMTProviderLabel, v = () => n("update:active", !1), _ = ge(), b = sL(
      _.i18n("cx-tools-mt-noservices")
    );
    return (x, y) => {
      const E = oL("i18n");
      return e.active ? (Ti(), Jl(je(bt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: mn(() => [
          ct("div", cL, [
            ct("div", uL, [
              ct("div", dL, [
                Li(ct("h4", gL, null, 512), [
                  [E, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              ct("div", pL, [
                Ql(je(Xe), {
                  type: "icon",
                  icon: je(Ji),
                  class: "pa-0",
                  onClick: v
                }, null, 8, ["icon"])
              ])
            ]),
            Li(ct("h6", mL, null, 512), [
              [E, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: mn(() => [
          Ql(je(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[0] || (y[0] = (S) => h(je(o)))
          }, {
            header: mn(() => [
              Li(ct("h5", hL, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: mn(() => [
              ct("p", {
                dir: je(I.getDir)(je(d)),
                lang: je(d),
                innerHTML: p.value[je(o)]
              }, null, 8, fL)
            ]),
            _: 1
          }),
          (Ti(!0), rL(iL, null, aL(g.value, (S) => (Ti(), Jl(je(Je), {
            key: S,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (F) => h(S)
          }, {
            header: mn(() => [
              ct("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: lL(je(f)(S))
              }, null, 8, wL)
            ]),
            default: mn(() => [
              ct("p", {
                innerHTML: p.value[S]
              }, null, 8, vL)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Ql(je(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[1] || (y[1] = (S) => h(je(s)))
          }, {
            header: mn(() => [
              Li(ct("h5", _L, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: mn(() => [
              SL
            ]),
            _: 1
          }),
          g.value.length ? Wp("", !0) : (Ti(), Jl(je(Je), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: mn(() => [
              ct("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: je(b)
              }, null, 8, yL)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Wp("", !0);
    };
  }
}, CL = window.Vuex.useStore, to = () => {
  const { sourceSection: e } = te(), t = CL(), { translateTranslationUnitById: n } = Au(), { currentMTProvider: s } = Te(t), o = (l) => C(void 0, null, function* () {
    e.value.selectTranslationUnitById(l), yield n(l, s.value);
    const { followingTranslationUnit: u } = e.value;
    u && (yield n(
      u.id,
      s
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: l } = e.value;
      return l ? o(l.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: l, contentTranslationUnits: u } = e.value, d = l - 1;
      let i = 0;
      return d > -1 && (i = u[d].id), o(i);
    },
    selectTranslationUnitById: o
  };
};
const Kp = window.Vue.toDisplayString, ec = window.Vue.createElementVNode, tc = window.Vue.unref, kL = window.Vue.createVNode, $L = window.Vue.normalizeClass, VL = window.Vue.withCtx, EL = window.Vue.openBlock, LL = window.Vue.createBlock, TL = ["href"], AL = ["textContent"], DL = ["textContent"], Bs = window.Vue.computed, Yp = "sx-sentence-selector__section-title", PL = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = te(), { currentSourcePage: s } = tt(), { sourceLanguageURLParameter: o } = P(), a = Bs(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.title;
    }), r = Bs(
      () => {
        var p;
        return ((p = t.value) == null ? void 0 : p.title) || a.value;
      }
    ), l = Bs(
      () => Y.getPageUrl(o.value, a.value)
    ), u = Bs(
      () => {
        var p;
        return !!((p = t.value) != null && p.translatedTitle);
      }
    ), d = Bs(
      () => u.value ? "translated" : "selected"
    ), i = Bs(() => {
      const p = [Yp];
      return n.value && p.push(`${Yp}--${d.value}`), p;
    }), { selectTranslationUnitById: c } = to(), g = () => c(0);
    return (p, m) => (EL(), LL(tc(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: VL(() => [
        ec("a", {
          href: l.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          ec("strong", {
            textContent: Kp(a.value)
          }, null, 8, AL),
          kL(tc(Ze), {
            icon: tc(mh),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, TL),
        ec("h2", {
          class: $L(["pa-0 ma-0", i.value]),
          onClick: g,
          textContent: Kp(r.value)
        }, null, 10, DL)
      ]),
      _: 1
    }));
  }
};
const Wt = window.Vue.unref, Ro = window.Vue.createVNode, Ai = window.Vue.withCtx, Qp = window.Vue.toDisplayString, Jp = window.Vue.createTextVNode, BL = window.Vue.openBlock, FL = window.Vue.createBlock, NL = window.Vue.computed, nc = window.Codex.CdxButton, Zp = window.Codex.CdxIcon, Zf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: s } = te(), o = NL(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (BL(), FL(Wt(U), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Ai(() => [
        Ro(Wt(nc), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Wt(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Ai(() => [
            Ro(Wt(Zp), {
              class: "me-1",
              icon: Wt(wu)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Ro(Wt(nc), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Wt(s),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: Ai(() => [
            Jp(Qp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Ro(Wt(nc), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: o.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Ai(() => [
            Jp(Qp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Ro(Wt(Zp), {
              class: "ms-1",
              size: "small",
              icon: Wt(Sa)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const as = window.Vue.unref, ML = window.Vue.toDisplayString, zo = window.Vue.createVNode, Di = window.Vue.withCtx, UL = window.Vue.openBlock, IL = window.Vue.createBlock, sc = window.Vue.computed, RL = window.Vuex.useStore, zL = window.Codex.CdxButton, OL = window.Codex.CdxIcon, jL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = RL(), n = sc(() => t.state.application.currentMTProvider), s = ge(), o = sc(() => ({
      [ae.ORIGINAL_TEXT_PROVIDER_KEY]: s.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ae.EMPTY_TEXT_PROVIDER_KEY]: s.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = sc(
      () => o.value[n.value] || s.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ae.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (UL(), IL(as(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Di(() => [
        zo(as(U), { class: "ma-0 ps-5 pb-4" }, {
          default: Di(() => [
            zo(as(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: ML(a.value)
            }, null, 8, ["textContent"]),
            zo(as(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Di(() => [
                zo(as(zL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: Di(() => [
                    zo(as(OL), {
                      class: "pa-0",
                      icon: as(fu)
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
const Bt = window.Vue.unref, Un = window.Vue.createVNode, HL = window.Vue.resolveDirective, em = window.Vue.createElementVNode, qL = window.Vue.withDirectives, tm = window.Vue.toDisplayString, nm = window.Vue.createTextVNode, Oo = window.Vue.withCtx, GL = window.Vue.openBlock, XL = window.Vue.createElementBlock, WL = { class: "mt-retry-body pb-5" }, KL = { class: "retry-body__message" }, sm = window.Codex.CdxButton, oc = window.Codex.CdxIcon, YL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const s = HL("i18n");
      return GL(), XL("div", WL, [
        em("div", KL, [
          Un(Bt(oc), {
            class: "me-2",
            icon: Bt(iy)
          }, null, 8, ["icon"]),
          qL(em("span", null, null, 512), [
            [s, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Un(Bt(U), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Oo(() => [
            Un(Bt(k), { cols: "6" }, {
              default: Oo(() => [
                Un(Bt(sm), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (o) => t.$emit("retry-translation"))
                }, {
                  default: Oo(() => [
                    Un(Bt(oc), {
                      class: "me-1",
                      icon: Bt(tf)
                    }, null, 8, ["icon"]),
                    nm(" " + tm(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Un(Bt(k), { cols: "6" }, {
              default: Oo(() => [
                Un(Bt(sm), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (o) => t.$emit("configure-options"))
                }, {
                  default: Oo(() => [
                    Un(Bt(oc), {
                      class: "me-1",
                      icon: Bt(wy)
                    }, null, 8, ["icon"]),
                    nm(" " + tm(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Fs = window.Vue.createVNode, rt = window.Vue.unref, jo = window.Vue.openBlock, QL = window.Vue.createElementBlock, JL = window.Vue.createCommentVNode, Pi = window.Vue.createBlock, ZL = window.Vue.normalizeClass, eT = window.Vue.normalizeStyle, Ho = window.Vue.withCtx, tT = window.Vue.toDisplayString, nT = window.Vue.createTextVNode, sT = window.Vue.normalizeProps, oT = window.Vue.guardReactiveProps, aT = ["lang", "dir", "innerHTML"], ac = window.Vue.ref, iT = window.Vue.onMounted, rT = window.Vue.onBeforeUnmount, ic = window.Vue.computed, lT = window.Vue.nextTick, cT = window.Vuex.useStore, uT = window.Codex.CdxButton, dT = window.Codex.CdxIcon, gT = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = ac(0), n = ac(null), s = ac(null), o = cT(), { currentMTProvider: a } = Te(o), { targetLanguageURLParameter: r } = P(), { sourceSection: l, currentProposedTranslation: u } = te(), d = ic(
      () => {
        var m, h;
        return (h = o.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = ic(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = ic(
      () => !!u.value || a.value === ae.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + s.value.$el.clientHeight;
    };
    iT(() => C(this, null, function* () {
      yield lT(), g(), p.observe(n.value.$el), p.observe(s.value.$el);
    })), rT(() => {
      p.unobserve(n.value.$el), p.unobserve(s.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (jo(), Pi(rt(Je), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Ho(() => [
        Fs(rt(U), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Ho(() => [
            Fs(jL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            Fs(rt(k), {
              class: ZL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && d.value
              }]),
              style: eT(c.value ? i.value : null)
            }, {
              default: Ho(() => [
                c.value ? (jo(), QL("section", {
                  key: 0,
                  lang: rt(r),
                  dir: rt(I.getDir)(rt(r)),
                  innerHTML: rt(u)
                }, null, 8, aT)) : d.value ? (jo(), Pi(rt(gt), { key: 1 })) : (jo(), Pi(YL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Fs(rt(k), {
              ref_key: "footer",
              ref: s,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Ho(() => [
                c.value || d.value ? (jo(), Pi(rt(uT), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", rt(u)))
                }, {
                  default: Ho(() => [
                    Fs(rt(dT), {
                      class: "me-1",
                      icon: rt(hu)
                    }, null, 8, ["icon"]),
                    nT(" " + tT(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : JL("", !0),
                Fs(Zf, sT(oT(m.$attrs)), null, 16)
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
}, pT = window.Vue.computed, mT = (e) => pT(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((o) => {
    const a = e.getSentenceById(o.dataset.segmentid);
    o.classList.add(t, "py-1", "me-1");
    const r = ["untranslated", "translated", "selected"].map(
      (u) => `${t}--${u}`
    );
    o.classList.remove(...r), a.selected && o.classList.add(`${t}--selected`);
    const l = a.isTranslated ? "translated" : "untranslated";
    o.classList.add(`${t}--${l}`), o.innerHTML = a.content;
  }), n.innerHTML;
});
const hT = window.Vue.unref, fT = window.Vue.normalizeClass, wT = window.Vue.openBlock, vT = window.Vue.createElementBlock, _T = ["innerHTML"], ST = window.Vue.onMounted, yT = window.Vue.ref, xT = window.Vue.computed, bT = {
  __name: "SubSection",
  props: {
    subSection: {
      type: ut,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = yT(null), a = mT(n.subSection);
    ST(() => {
      o.value.addEventListener("click", (d) => {
        let i;
        if (n.subSection.isBlockTemplate)
          i = n.subSection;
        else {
          const c = d.composedPath().find(
            (g) => g instanceof Element && g.classList.contains("cx-segment")
          );
          if (!c)
            return;
          i = n.subSection.getSentenceById(
            c.dataset.segmentid
          );
        }
        l(i);
      });
    });
    const { selectTranslationUnitById: r } = to(), l = (d) => {
      if (d.selected) {
        s("bounce-translation");
        return;
      }
      r(d.id);
    }, u = xT(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, i) => (wT(), vT("div", {
      ref_key: "subSectionRoot",
      ref: o,
      class: fT(["sx-sentence-selector__subsection", u.value]),
      innerHTML: hT(a)
    }, null, 10, _T));
  }
};
const om = window.Vue.unref, am = window.Vue.createVNode, im = window.Vue.normalizeStyle, CT = window.Vue.openBlock, kT = window.Vue.createElementBlock, rm = window.Vue.computed, ew = {
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
    const t = e, n = rm(() => ({ "--size": t.size })), s = rm(
      () => !t.isTemplateAdapted || t.percentage === 0 ? J0 : Rc
    );
    return (o, a) => (CT(), kT("div", {
      class: "block-template-status-indicator",
      style: im(n.value)
    }, [
      am(om(h1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      am(om(Ze), {
        icon: s.value,
        size: e.size / 2,
        style: im({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const In = window.Vue.unref, Bi = window.Vue.createVNode, rc = window.Vue.withCtx, $T = window.Vue.openBlock, VT = window.Vue.createBlock, ET = window.Vue.computed, lm = window.Codex.CdxButton, cm = window.Codex.CdxIcon, tw = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = te(), s = ET(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (o, a) => ($T(), VT(In(U), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: rc(() => [
        Bi(In(lm), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: In(n),
          "aria-label": o.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => o.$emit("select-previous-segment"))
        }, {
          default: rc(() => [
            Bi(In(cm), { icon: In(wu) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Bi(In(lm), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: s.value,
          "aria-label": o.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => o.$emit("select-next-segment"))
        }, {
          default: rc(() => [
            Bi(In(cm), { icon: In(Sa) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, qo = window.Vue.openBlock, Fi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const hn = window.Vue.unref, Ns = window.Vue.withCtx, Go = window.Vue.createVNode, lc = window.Vue.toDisplayString, cc = window.Vue.createElementVNode, LT = window.Vue.renderList, TT = window.Vue.Fragment, AT = window.Vue.createElementBlock, DT = { class: "pa-4" }, PT = ["textContent"], BT = ["textContent"], FT = window.Vuex.useStore, Ni = window.Vue.computed, NT = {
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
    const t = e, { targetLanguageAutonym: n } = Te(FT()), s = Ni(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), o = ge(), a = Ni(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? s.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", o.i18n(u);
    }), r = Ni(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : s.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", o.i18n(u);
    }), l = Ni(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: o.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: ev,
          color: St.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: o.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Ji,
          color: St.gray500
        });
      else if (s.value < 100)
        u.push({
          text: o.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Rc,
          color: St.blue600
        });
      else {
        let d;
        t.sourceParamsCount ? d = o.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : d = o.i18n("cx-sx-block-template-no-source-params-text"), u.push({
          text: d,
          icon: Rc,
          color: St.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: o.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: Qi,
        color: St.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: o.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: M0,
        color: St.gray500
      }), u;
    });
    return (u, d) => (qo(), Fi(hn(bt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: d[0] || (d[0] = (i) => u.$emit("update:active", i))
    }, {
      header: Ns(() => [
        Go(hn(U), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Ns(() => [
            Go(hn(k), { shrink: "" }, {
              default: Ns(() => [
                e.targetTemplateExists ? (qo(), Fi(ew, {
                  key: 0,
                  percentage: s.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (qo(), Fi(hn(Ze), {
                  key: 1,
                  icon: hn(U0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Ns(() => [
        cc("div", DT, [
          cc("h3", {
            textContent: lc(a.value)
          }, null, 8, PT),
          cc("p", {
            class: "mt-6 text-small",
            textContent: lc(r.value)
          }, null, 8, BT),
          (qo(!0), AT(TT, null, LT(l.value, (i, c) => (qo(), Fi(hn(U), {
            key: c,
            align: "start",
            class: "mt-4"
          }, {
            default: Ns(() => [
              Go(hn(k), { shrink: "" }, {
                default: Ns(() => [
                  Go(hn(Ze), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              Go(hn(k), {
                textContent: lc(i.text)
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
const Le = window.Vue.unref, He = window.Vue.createVNode, Kt = window.Vue.withCtx, uc = window.Vue.toDisplayString, um = window.Vue.createTextVNode, MT = window.Vue.resolveDirective, dm = window.Vue.withDirectives, gm = window.Vue.createElementVNode, UT = window.Vue.normalizeClass, Ms = window.Vue.openBlock, pm = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Mi = window.Vue.createBlock, mm = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const hm = window.Vue.mergeProps, IT = { class: "block-template-adaptation-card__container pa-4" }, RT = ["textContent"], zT = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, qe = window.Vue.computed, OT = window.Vue.ref, jT = window.Vuex.useStore, fm = window.Codex.CdxButton, wm = window.Codex.CdxIcon, HT = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = jT(), { targetLanguageAutonym: n, currentMTProvider: s } = Te(t), {
      selectedContentTranslationUnit: o,
      currentProposedTranslation: a
    } = te(), r = qe(() => {
      var V;
      return (V = o.value) == null ? void 0 : V.isTranslated;
    }), l = qe(() => {
      var A;
      return ((A = o.value) == null ? void 0 : A.blockTemplateTranslatedContent) || a.value;
    }), u = qe(
      () => {
        var V;
        return (V = o.value) == null ? void 0 : V.getTargetBlockTemplateNameByProvider(
          s.value
        );
      }
    ), d = qe(
      () => {
        var V;
        return !((V = t.state.application.mtRequestsPending) != null && V.includes(
          o.value.id
        ));
      }
    ), i = ge(), c = qe(
      // Strip HTML comments and return
      () => {
        var V, A;
        return ((A = (V = o.value) == null ? void 0 : V.sourceBlockTemplateName) == null ? void 0 : A.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = qe(
      () => {
        var V, A;
        return (A = (V = o.value) == null ? void 0 : V.blockTemplateAdaptationInfo) == null ? void 0 : A[s.value];
      }
    ), p = qe(
      () => {
        var V, A;
        return ((V = g.value) == null ? void 0 : V.adapted) || !!((A = g.value) != null && A.partial);
      }
    ), m = qe(() => g.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), h = qe(() => g.value ? p.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = qe(
      () => {
        var V;
        return Object.keys(((V = o.value) == null ? void 0 : V.sourceTemplateParams) || {}).length;
      }
    ), v = qe(() => {
      var A;
      const V = (A = o.value) == null ? void 0 : A.getTargetTemplateParamsByProvider(
        s.value
      );
      return Object.keys(V || {});
    }), _ = qe(() => v.value.length), b = qe(() => {
      const V = S.value;
      return f.value + V === 0 ? 100 : _.value / (f.value + V) * 100 || 0;
    }), x = OT(!1), y = () => {
      x.value = !0;
    }, E = (V) => V.filter((A) => !v.value.includes(A)), S = qe(() => {
      var A;
      const V = ((A = g.value) == null ? void 0 : A.mandatoryTargetParams) || [];
      return E(V).length;
    }), F = qe(() => {
      var A;
      const V = ((A = g.value) == null ? void 0 : A.optionalTargetParams) || [];
      return E(V).length;
    });
    return (V, A) => {
      const R = MT("i18n");
      return Ms(), Mi(Le(Je), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Kt(() => [
          gm("div", IT, [
            He(Le(U), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Kt(() => [
                He(Le(k), { shrink: "" }, {
                  default: Kt(() => [
                    He(Le(wm), {
                      icon: Le(vy),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                He(Le(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Kt(() => [
                    um(uc(c.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u.value ? (Ms(), pm("div", {
              key: 0,
              class: UT(["pa-4 mb-4", m.value])
            }, [
              He(Le(U), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Kt(() => [
                  dm(He(Le(k), { tag: "h5" }, null, 512), [
                    [R, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  He(Le(k), { shrink: "" }, {
                    default: Kt(() => [
                      He(ew, {
                        percentage: b.value,
                        size: 20,
                        "is-template-adapted": p.value,
                        "stroke-width": 2,
                        onClick: y
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              gm("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: uc(u.value)
              }, null, 8, RT),
              He(Le(fm), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: A[0] || (A[0] = (K) => V.$emit("edit-translation", l.value))
              }, {
                default: Kt(() => [
                  um(uc(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (Ms(), pm("div", zT, [
              He(Le(U), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Kt(() => [
                  dm(He(Le(k), { tag: "h5" }, null, 512), [
                    [R, [
                      Le(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  He(Le(k), { shrink: "" }, {
                    default: Kt(() => [
                      He(Le(fm), {
                        weight: "quiet",
                        "aria-label": V.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Kt(() => [
                          He(Le(wm), {
                            icon: Le(my),
                            onClick: y
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
            ])) : (Ms(), Mi(Le(gt), { key: 2 }))
          ]),
          r.value ? (Ms(), Mi(tw, mm(hm({ key: 1 }, V.$attrs)), null, 16)) : (Ms(), Mi(Zf, mm(hm({ key: 0 }, V.$attrs)), null, 16)),
          He(NT, {
            active: x.value,
            "onUpdate:active": A[1] || (A[1] = (K) => x.value = K),
            "source-params-count": f.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": S.value,
            "optional-missing-params-count": F.value,
            "is-template-adapted": p.value,
            "target-template-exists": !!u.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const qT = window.Vue.unref, GT = window.Vue.createVNode, XT = window.Vue.openBlock, WT = window.Vue.createElementBlock, KT = { class: "translated-segment-card-header" }, YT = window.Vue.computed, QT = {
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
    const n = t, { isSectionTitleSelected: s } = te(), o = ge(), a = YT(() => [
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
          disabled: s.value
        }
      }
    ]), r = (l) => n("update:selection", l);
    return (l, u) => (XT(), WT("div", KT, [
      GT(qT(ma), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const JT = window.Vue.useCssVars, Ie = window.Vue.createVNode, vm = window.Vue.resolveDirective, ZT = window.Vue.createElementVNode, dc = window.Vue.withDirectives, Se = window.Vue.unref, eA = window.Vue.normalizeStyle, Ui = window.Vue.openBlock, _m = window.Vue.createElementBlock, tA = window.Vue.createCommentVNode, nA = window.Vue.normalizeClass, vt = window.Vue.withCtx, sA = window.Vue.toDisplayString, oA = window.Vue.createTextVNode, Sm = window.Vue.createBlock, aA = window.Vue.normalizeProps, iA = window.Vue.guardReactiveProps, fn = window.Vue.computed, rA = window.Vue.ref, lA = window.Vue.inject, cA = window.Vuex.useStore, uA = window.Codex.CdxButton, gc = window.Codex.CdxIcon, dA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    JT((_) => ({
      "4929555c": v.value
    }));
    const t = rA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: s,
      isSectionTitleSelected: o
    } = te(), { targetLanguage: a } = Te(cA()), r = fn(() => t.value === "sentence"), l = fn(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (b) => {
            var x;
            return b.id === ((x = s.value) == null ? void 0 : x.id);
          }
        )
      )
    ), u = fn(() => {
      var _;
      return o.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (_ = s.value) == null ? void 0 : _.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), d = lA("colors"), i = d.gray200, c = d.red600, g = fn(() => o.value ? n.value.translatedTitle : r.value ? s.value.translatedContent : l.value.translatedContent), p = fn(
      () => tn.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), m = fn(
      () => tn.getScoreStatus(p.value)
    ), h = fn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = fn(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), v = fn(
      () => f.value[m.value]
    );
    return (_, b) => {
      const x = vm("i18n"), y = vm("i18n-html");
      return Ui(), Sm(Se(Je), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: vt(() => [
          Ie(Se(U), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: vt(() => [
              Ie(QT, {
                selection: t.value,
                "onUpdate:selection": b[0] || (b[0] = (E) => t.value = E)
              }, null, 8, ["selection"]),
              Ie(Se(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: vt(() => [
                  Ie(Se(U), { class: "ma-0" }, {
                    default: vt(() => [
                      Ie(Se(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: vt(() => [
                          dc(ZT("h5", null, null, 512), [
                            [x, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? dc((Ui(), _m("p", {
                            key: 0,
                            style: eA({ color: Se(c) })
                          }, null, 4)), [
                            [x, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : dc((Ui(), _m("p", {
                            key: 1,
                            class: nA(h.value)
                          }, null, 2)), [
                            [y, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Ie(Se(k), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: vt(() => [
                          Ie(Se(U), { class: "ma-0 ms-2" }, {
                            default: vt(() => [
                              Ie(Se(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: vt(() => [
                                  Ie(Se(gc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Se(yy)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Ie(Se(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: vt(() => [
                                  Ie(Se(fh), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: v.value,
                                    background: Se(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Ie(Se(k), { shrink: "" }, {
                                default: vt(() => [
                                  Ie(Se(gc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Se(_y)
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
                  r.value ? (Ui(), Sm(Se(uA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: b[1] || (b[1] = (E) => _.$emit("edit-translation", g.value))
                  }, {
                    default: vt(() => [
                      Ie(Se(gc), {
                        class: "me-1",
                        icon: Se(hu)
                      }, null, 8, ["icon"]),
                      oA(" " + sA(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : tA("", !0)
                ]),
                _: 1
              }),
              Ie(Se(k), { class: "translated-segment-card__actions" }, {
                default: vt(() => [
                  Ie(tw, aA(iA(_.$attrs)), null, 16)
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
}, gA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = te(), { selectNextTranslationUnit: n, selectTranslationUnitById: s } = to(), { currentTranslation: o } = Ot();
  return () => {
    if (e.value)
      if (o.value && !t.value) {
        const { lastTranslatedContentTranslationUnit: a } = e.value;
        e.value.selectTranslationUnitById(
          (a == null ? void 0 : a.id) || 0
        ), n();
      } else
        t.value || s(0);
  };
}, nw = window.Vuex.useStore, pA = () => {
  const e = nw(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P();
  return () => C(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const s = mw.config.get("wgContentTranslationEnableMT");
    let o;
    s ? o = yield Lu.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : o = new ae(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", o);
  });
}, mA = () => {
  const e = nw(), { currentMTProvider: t } = Te(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: s
  } = P(), o = pA();
  return () => C(void 0, null, function* () {
    yield o();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, s.value);
    if (!t.value || !a.includes(t.value)) {
      const r = ae.getStorageKey(
        n.value,
        s.value
      );
      let l = mw.storage.get(r);
      (!l || !a.includes(l)) && (l = a[0]), e.commit("application/setCurrentMTProvider", l);
    }
  });
}, hA = window.Vue.computed, fA = (e) => {
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
}, wA = () => {
  const { selectedContentTranslationUnit: e } = te(), t = hA(
    () => e.value instanceof ut
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, s = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    s && fA(s);
  };
}, vA = (e, t) => {
  const { content: n, origin: s, baseSectionId: o, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (l) => !ae.isUserMTProvider(l)
  );
  if (s !== "source" && s !== "user" && !r.includes(s))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!o || !a || e.sectionId !== `${o}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, _A = window.Vue.computed, sw = () => {
  const { currentTranslation: e } = Ot(), { currentSourcePage: t } = tt();
  return _A(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, SA = window.Vue.computed, xa = () => {
  const { sourceSection: e } = te(), { currentTargetPageTitle: t } = tt(), { isMissingLeadSection: n } = Zs();
  return { targetPageTitleForPublishing: SA(
    () => n.value ? e.value.title : t.value
  ) };
}, yA = window.Vuex.useStore, Du = () => {
  const e = yA(), { sourceSection: t } = te(), { targetPageTitleForPublishing: n } = xa(), {
    pageURLParameter: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a
  } = P(), r = sw(), { target: l, PUBLISHING_TARGETS: u } = kt();
  return () => {
    const d = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](o.value, a.value), c = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(c);
    g.forEach(
      (m) => vA(m, i)
    );
    const p = t.value.getTranslationProgress(a);
    return xt.saveTranslation({
      sourceTitle: s.value,
      targetTitle: d,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: t.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: t.value.targetSectionTitleForPublishing,
      sourceLanguage: o.value,
      targetLanguage: a.value,
      revision: r.value,
      units: g.map((m) => m.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: c,
      isSandbox: l === u.SANDBOX,
      progress: p
    });
  };
}, xA = window.Vue.effectScope, bA = window.Vue.onScopeDispose, CA = (e) => {
  let t = 0, n, s;
  const o = () => {
    s && --t <= 0 && (s.stop(), n = s = null);
  };
  return (...a) => (t++, n || (s = xA(!0), n = s.run(() => e(...a))), bA(o), n);
}, kA = window.Vuex.useStore;
let pc;
const $A = () => {
  const e = kA(), t = Du();
  let n = 1e3, s = 0;
  return pc = xu(() => t().then((a) => {
    a instanceof Xn ? (n *= s + 1, s++, setTimeout(pc, n)) : (s = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Xs)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), pc;
}, ow = CA($A), VA = window.Vuex.useStore, EA = () => {
  const e = VA(), t = ow(), { currentMTProvider: n } = Te(e), { sourceSection: s, currentProposedTranslation: o } = te(), { selectNextTranslationUnit: a } = to();
  return () => C(void 0, null, function* () {
    s.value.setTranslationForSelectedTranslationUnit(
      o.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, LA = window.Vuex.useStore, TA = () => {
  const e = LA(), t = ow();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, AA = window.Vuex.useStore, DA = window.Vue.computed, aw = () => {
  const e = AA(), { currentTranslation: t } = Ot(), { currentMTProvider: n } = Te(e), { currentTargetPageTitle: s } = tt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = P(), u = Ct(), d = DA(() => {
    const f = {
      translation_source_language: o.value,
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
      s.value && (f.translation_target_title = s.value);
    return n.value && (f.translation_provider = ae.getProviderForInstrumentation(n.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      const f = ce({
        event_type: "editor_open"
      }, d.value);
      return u(f);
    },
    logEditorCloseEvent: () => {
      const f = ce({
        event_type: "editor_close"
      }, d.value);
      return u(f);
    },
    logEditorCloseWarnEvent: () => u(ce({
      event_type: "editor_close_warn"
    }, d.value)),
    logEditorSegmentAddEvent: () => u(ce({
      event_type: "editor_segment_add"
    }, d.value)),
    logEditorSegmentSkipEvent: () => u(ce({
      event_type: "editor_segment_skip"
    }, d.value)),
    logEditorSegmentEditEvent: () => u(ce({
      event_type: "editor_segment_edit"
    }, d.value))
  };
}, PA = (e, t, n, s) => C(void 0, null, function* () {
  var l, u, d;
  const o = ((l = t.user) == null ? void 0 : l.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield Jf(
    o,
    n,
    s
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    o
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), BA = (e, t) => {
  t.segments.forEach((n) => {
    var o, a, r;
    const s = e.getSentenceById(n.id);
    if (s && (s.translatedContent = ((o = n.user) == null ? void 0 : o.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      s.addProposedTranslation(l, n.mt.innerHTML), s.mtProviderUsed = l;
    }
  });
}, FA = (e, t, n, s) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return PA(e, t, n, s);
  BA(e, t);
}), NA = (e, t, n, s) => {
  const o = [];
  for (const a of e.sections || [])
    if (s.filter(
      (l) => l.pageSectionId === parseInt(a.id)
    ).length)
      for (const l of a.subSections) {
        const u = s.find(
          (i) => i.subSectionId === l.id
        );
        if (!u)
          continue;
        const d = FA(
          l,
          u,
          t || e.title,
          n
        );
        o.push(d);
      }
  return Promise.all(o);
}, MA = { restoreCorporaDraft: NA }, UA = () => {
  const { currentSourcePage: e } = tt(), { sourceSection: t } = te();
  return (n) => C(void 0, null, function* () {
    if (n.restored)
      return;
    try {
      const o = yield xt.fetchTranslationUnits(
        n.translationId
      );
      yield MA.restoreCorporaDraft(
        e.value,
        n.targetTitle,
        n.targetLanguage,
        o
      );
    } catch (o) {
      throw mw.cx.eventlogging.stats.restoreFailure(!0), new Error(o);
    }
    n.restored = !0;
    let s;
    n.isLeadSectionTranslation ? (t.value.originalTitle = n.sourceTitle, s = n.targetTitle) : s = n.targetSectionTitle, t.value.translatedTitle = s;
  });
};
let mc = null;
function IA() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((s) => t.includes(s));
}
function iw() {
  return mc === null && (mc = IA()), mc;
}
const rw = window.Vue.ref, hc = rw(!1), fc = rw(!1);
function ym() {
  return {
    isPermissionWarningDismissed: hc,
    dismissPermissionWarning: () => {
      hc.value = !0;
    },
    resetPermissionWarning: () => {
      hc.value = !1;
    },
    isTitleErrorDismissed: fc,
    dismissTitleError: () => {
      fc.value = !0;
    },
    resetTitleError: () => {
      fc.value = !1;
    }
  };
}
const le = window.Vue.unref, _t = window.Vue.createVNode, Ft = window.Vue.withCtx, RA = window.Vue.resolveDirective, wn = window.Vue.createElementVNode, zA = window.Vue.withDirectives, Xo = window.Vue.toDisplayString, OA = window.Vue.createTextVNode, Yt = window.Vue.openBlock, Rn = window.Vue.createBlock, xm = window.Vue.createCommentVNode, jA = window.Vue.renderList, HA = window.Vue.Fragment, bm = window.Vue.createElementBlock, qA = window.Vue.normalizeClass, GA = window.Vue.normalizeStyle, XA = { class: "sx-sentence-selector__header-title mb-0" }, WA = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, KA = { class: "sx-sentence-selector__section-contents px-4" }, zn = window.Vue.computed, YA = window.Vue.nextTick, QA = window.Vue.onMounted, Wo = window.Vue.ref, Cm = window.Vue.watch, JA = window.Vuex.useStore, km = window.Codex.CdxButton, ZA = window.Codex.CdxIcon, $m = window.Codex.CdxMessage, eD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Wo(!1), n = Wo(!1), s = Wo("100%"), o = JA(), { currentMTProvider: a, previousRoute: r } = Te(o), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      pageURLParameter: d,
      sectionURLParameter: i
    } = P(), { resetPublishTarget: c, target: g } = kt(), p = ir();
    g.value || p(
      l.value,
      u.value,
      d.value
    ).then(() => c());
    const { sourceSection: m, selectedContentTranslationUnit: h } = te(), { targetPageTitleForPublishing: f } = xa(), v = Wo({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), _ = zn(
      () => Object.values(v.value).every(Boolean)
    ), b = zn(
      () => {
        var q;
        return (q = m.value) == null ? void 0 : q.isSelectedTranslationUnitTranslated;
      }
    ), x = zn(() => {
      var q;
      return (q = m.value) == null ? void 0 : q.subSections;
    }), y = zn(
      () => {
        var q;
        return (q = m.value) == null ? void 0 : q.selectedTranslationUnitOriginalContent;
      }
    ), E = zn(
      () => isNaN(s.value) ? s.value : `${s.value}px`
    ), {
      logEditorOpenEvent: S,
      logEditorCloseEvent: F,
      logEditorCloseWarnEvent: V,
      logEditorSegmentAddEvent: A,
      logEditorSegmentSkipEvent: R
    } = aw(), K = () => {
      var ao;
      const q = N.currentRoute.value.meta.workflowStep, on = N.getRoutes().find(
        (io) => io.name === r.value
      ), mt = ((ao = on == null ? void 0 : on.meta) == null ? void 0 : ao.workflowStep) || 0;
      return q > mt;
    }, ie = gA();
    mA()().then(() => {
      K() && S(), v.value.mtProviders = !0;
    });
    const j = wA(), { fetchTranslationsByStatus: W, translationsFetched: se } = Js(), re = UA(), { currentTranslation: $e } = Ot(), { selectPageSectionByTitle: Fe, selectPageSectionByIndex: Ae } = ur(), Z = Eu(), nt = Ks();
    QA(() => C(this, null, function* () {
      if (!se.value.draft) {
        const q = [
          // required to get current draft translation (if exists)
          W("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          Z(l.value, d.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          nt(l.value, [d.value])
        ];
        yield Promise.all(q);
      }
      v.value.pageMetadata = !0, i.value ? yield Fe(i.value) : yield Ae(0), v.value.pageContent = !0, $e.value && (yield re($e.value)), v.value.draftRestored = !0, Cm(
        _,
        () => C(this, null, function* () {
          _.value && (yield YA(), ie(), j());
        }),
        { immediate: !0 }
      ), s.value = window.innerHeight;
    })), Cm(h, j);
    const { selectNextTranslationUnit: D, selectPreviousTranslationUnit: M } = to(), Q = () => (R(), D()), w = EA(), B = () => {
      A(), w();
    }, T = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, N = et(), G = () => {
      const { autoSavePending: q } = o.state.application;
      if (q) {
        oo.value = !0, V();
        return;
      }
      z();
    }, pe = TA(), { clearTranslationURLParameters: H } = P(), z = () => C(this, null, function* () {
      W("draft"), $e.value && (m.value.reset(), $e.value.restored = !1), F(), H(), pe(), yield N.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: oe,
      translateSelectedTranslationUnitForAllProviders: st
    } = Au(), Ce = () => {
      so.value || (t.value = !0, st());
    }, { getCurrentTitleByLanguage: ba } = sn(), fs = (q) => {
      N.push({
        name: "sx-editor",
        state: {
          content: q,
          originalContent: y.value,
          title: ba(
            u.value,
            l.value
          ),
          isInitialEdit: !b.value || null
        }
      });
    }, no = () => N.push({ name: "sx-publisher" }), dr = () => C(this, null, function* () {
      h.value ? yield oe(
        h.value.id,
        a.value
      ) : yield oe(0, a.value);
    }), so = zn(
      () => h.value instanceof ut
    ), oo = Wo(!1), {
      isPermissionWarningDismissed: gr,
      dismissPermissionWarning: pr,
      resetPermissionWarning: ws
    } = ym(), { isTitleErrorDismissed: vs, dismissTitleError: Ca, resetTitleError: L } = ym();
    K() && (ws(), L());
    const O = zn(
      () => !iw() && !gr.value
    ), Ne = zn(
      () => {
        var q;
        return !vs.value && ((q = m.value) == null ? void 0 : q.isLeadSection) && !mw.Title.newFromText(f.value);
      }
    );
    return (q, ze) => {
      const on = RA("i18n");
      return Yt(), bm("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: GA(E.value)
      }, [
        _t(le(U), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Ft(() => [
            _t(le(k), { shrink: "" }, {
              default: Ft(() => [
                _t(le(km), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": q.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: G
                }, {
                  default: Ft(() => [
                    _t(le(ZA), { icon: le(Yh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            _t(le(k), {
              grow: "",
              class: "px-1"
            }, {
              default: Ft(() => [
                zA(wn("h4", XA, null, 512), [
                  [on, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            _t(le(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: Ft(() => [
                _t(le(km), {
                  disabled: !(le(m) && le(m).isTranslated),
                  onClick: no
                }, {
                  default: Ft(() => [
                    OA(Xo(q.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _.value ? (Yt(), Rn(le(U), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Ft(() => [
            _t(le(k), {
              dir: le(I.getDir)(le(l)),
              lang: le(l),
              class: "sx-sentence-selector__section"
            }, {
              default: Ft(() => [
                O.value ? (Yt(), Rn(le($m), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: le(pr)
                }, {
                  default: Ft(() => [
                    wn("p", null, Xo(q.$i18n("cx-publish-permission-warning")), 1),
                    wn("p", null, [
                      wn("strong", null, [
                        wn("a", WA, Xo(q.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : xm("", !0),
                Ne.value ? (Yt(), Rn(le($m), {
                  key: 1,
                  type: "error",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: le(Ca)
                }, {
                  default: Ft(() => [
                    wn("p", null, [
                      wn("strong", null, Xo(q.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    wn("p", null, Xo(q.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : xm("", !0),
                _t(PL),
                wn("div", KA, [
                  (Yt(!0), bm(HA, null, jA(x.value, (mt) => (Yt(), Rn(bT, {
                    id: mt.id,
                    key: `sub-section-${mt.id}`,
                    "sub-section": mt,
                    onBounceTranslation: T
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !so.value && b.value ? (Yt(), Rn(dA, {
              key: 0,
              onEditTranslation: fs,
              onSelectNextSegment: le(D),
              onSelectPreviousSegment: le(M)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : so.value ? (Yt(), Rn(HT, {
              key: 2,
              onEditTranslation: fs,
              onApplyTranslation: B,
              onSkipTranslation: Q,
              onSelectPreviousSegment: le(M),
              onSelectNextSegment: le(D)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Yt(), Rn(gT, {
              key: 1,
              class: qA({ "mb-0": !n.value }),
              onConfigureOptions: Ce,
              onEditTranslation: fs,
              onApplyTranslation: B,
              onSkipTranslation: Q,
              onSelectPreviousSegment: le(M),
              onRetryTranslation: dr
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Yt(), Rn(le(U), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Ft(() => [
            _t(le(gt), { class: "mt-0" })
          ]),
          _: 1
        })),
        _t(bL, {
          active: t.value,
          "onUpdate:active": ze[0] || (ze[0] = (mt) => t.value = mt)
        }, null, 8, ["active"]),
        _t(J5, {
          modelValue: oo.value,
          "onUpdate:modelValue": ze[1] || (ze[1] = (mt) => oo.value = mt),
          onDiscardTranslation: z
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const tD = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: eD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, nD = window.Vue.resolveComponent, sD = window.Vue.createVNode, oD = window.Vue.normalizeClass, aD = window.Vue.openBlock, iD = window.Vue.createElementBlock;
function rD(e, t, n, s, o, a) {
  const r = nD("sx-sentence-selector");
  return aD(), iD("main", {
    class: oD(["sx-sentence-selector-view", a.classes])
  }, [
    sD(r)
  ], 2);
}
const lD = /* @__PURE__ */ de(tD, [["render", rD]]), cD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, uD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const dD = window.Vue.resolveDirective, Ii = window.Vue.withDirectives, Nt = window.Vue.openBlock, vn = window.Vue.createElementBlock, Ri = window.Vue.createCommentVNode, zi = window.Vue.Transition, is = window.Vue.withCtx, Us = window.Vue.createVNode, Ko = window.Vue.createElementVNode, On = window.Vue.unref, gD = window.Vue.renderList, pD = window.Vue.Fragment, mD = window.Vue.normalizeClass, Vm = window.Vue.createBlock, hD = window.Vue.toDisplayString, fD = window.Vue.createTextVNode, wD = { class: "sx-quick-tutorial" }, vD = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, _D = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, SD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, yD = { class: "sx-quick-tutorial__illustration" }, xD = ["innerHTML"], bD = ["innerHTML"], CD = { class: "sx-quick-tutorial__step-indicator py-3" }, kD = ["onClick"], $D = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, VD = {
  key: "secondary-point-1",
  class: "ma-0"
}, ED = {
  key: "secondary-point-2",
  class: "ma-0"
}, LD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Em = window.Vue.ref, Lm = window.Codex.CdxButton, TD = window.Codex.CdxIcon, AD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Em(2), n = Em(1), s = () => {
      n.value < t.value && n.value++;
    }, o = (r) => r === n.value, a = eo();
    return (r, l) => {
      const u = dD("i18n");
      return Nt(), vn("section", wD, [
        Us(On(U), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: is(() => [
            Ko("section", vD, [
              Us(zi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: is(() => [
                  o(1) ? Ii((Nt(), vn("h2", _D, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : o(2) ? Ii((Nt(), vn("h2", SD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ri("", !0)
                ]),
                _: 1
              })
            ]),
            Ko("section", yD, [
              Us(zi, { name: "mw-ui-animation-slide-start" }, {
                default: is(() => [
                  o(1) ? (Nt(), vn("div", {
                    key: "illustration-1",
                    innerHTML: On(uD)
                  }, null, 8, xD)) : o(2) ? (Nt(), vn("div", {
                    key: "illustration-2",
                    innerHTML: On(cD)
                  }, null, 8, bD)) : Ri("", !0)
                ]),
                _: 1
              })
            ]),
            Ko("div", CD, [
              (Nt(!0), vn(pD, null, gD(t.value, (d) => (Nt(), vn("span", {
                key: `dot-${d}`,
                class: mD(["dot mx-1", { "dot-active": o(d) }]),
                role: "button",
                onClick: (i) => n.value = d
              }, null, 10, kD))), 128))
            ]),
            Ko("section", $D, [
              Us(zi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: is(() => [
                  o(1) ? Ii((Nt(), vn("h3", VD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : o(2) ? Ii((Nt(), vn("h3", ED, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ri("", !0)
                ]),
                _: 1
              })
            ]),
            Ko("div", LD, [
              Us(zi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: is(() => [
                  o(1) ? (Nt(), Vm(On(Lm), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: s
                  }, {
                    default: is(() => [
                      Us(On(TD), { icon: On(Sa) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : o(2) ? (Nt(), Vm(On(Lm), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: On(a)
                  }, {
                    default: is(() => [
                      fD(hD(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : Ri("", !0)
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
const DD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: AD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, PD = window.Vue.resolveComponent, BD = window.Vue.createVNode, FD = window.Vue.normalizeClass, ND = window.Vue.openBlock, MD = window.Vue.createElementBlock;
function UD(e, t, n, s, o, a) {
  const r = PD("sx-quick-tutorial");
  return ND(), MD("main", {
    class: FD(["sx-quick-tutorial-view", a.classes])
  }, [
    BD(r)
  ], 2);
}
const ID = /* @__PURE__ */ de(DD, [["render", UD]]);
const RD = window.Vue.resolveDirective, Tm = window.Vue.createElementVNode, zD = window.Vue.withDirectives, OD = window.Vue.unref, jD = window.Vue.withCtx, HD = window.Vue.createVNode, qD = window.Vue.openBlock, GD = window.Vue.createElementBlock, XD = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, WD = { class: "sx-editor__original-content-panel__header mb-2" }, KD = ["lang", "dir", "innerHTML"], Am = window.Vue.ref, YD = window.Vue.onMounted, QD = {
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
      const u = r.getElementsByTagName("a");
      for (const d of u)
        d.href = Y.getPageUrl(l, d.title), d.target = "_blank";
    }, s = Am(null), o = Am(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(s.value, null).getPropertyValue("line-height")
    );
    return YD(() => {
      o.value = 2 * a(), n(s.value, t.language);
    }), (r, l) => {
      const u = RD("i18n");
      return qD(), GD("section", XD, [
        zD(Tm("h5", WD, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        HD(OD(r1), {
          "min-height": o.value,
          scroll: ""
        }, {
          default: jD(() => [
            Tm("div", {
              ref_key: "originalContentRef",
              ref: s,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, KD)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, JD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const ZD = window.Vue.unref, Yo = window.Vue.createElementVNode, Dm = window.Vue.resolveDirective, wc = window.Vue.withDirectives, e6 = window.Vue.normalizeClass, t6 = window.Vue.openBlock, n6 = window.Vue.createElementBlock, s6 = window.Vue.createCommentVNode, o6 = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, a6 = { class: "sx-editor__feedback-overlay-content px-4" }, i6 = ["innerHTML"], r6 = { class: "sx-editor__feedback-overlay-content__title" }, l6 = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, vc = window.Vue.computed, c6 = {
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
    const t = e, { targetLanguageURLParameter: n } = P(), s = vc(
      () => tn.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), o = vc(() => {
      const r = tn.getScoreStatus(s.value);
      return r === "failure" ? s.value === 0 ? "failure" : "warning" : r;
    }), a = vc(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return (r, l) => {
      const u = Dm("i18n"), d = Dm("i18n-html");
      return e.showFeedback ? (t6(), n6("div", o6, [
        Yo("div", a6, [
          Yo("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: ZD(JD)
          }, null, 8, i6),
          wc(Yo("h2", r6, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          wc(Yo("p", l6, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          wc(Yo("p", {
            class: e6(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [s.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : s6("", !0);
    };
  }
}, u6 = window.Vuex.useStore, d6 = () => {
  const e = u6(), t = Du(), { selectNextTranslationUnit: n } = to(), {
    isSectionTitleSelected: s,
    sourceSection: o,
    selectedContentTranslationUnit: a
  } = te(), { getCurrentTitleByLanguage: r } = sn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: u
  } = P(), { currentMTProvider: d } = Te(e);
  return (i) => C(void 0, null, function* () {
    if (!s.value) {
      const c = document.createElement("div");
      c.innerHTML = i, c.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = c.innerHTML;
    }
    a.value instanceof ut && (i = (yield Jf(
      i,
      r(u.value, l.value),
      u.value
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      d.value
    ), t(), n();
  });
};
const Ye = window.Vue.unref, _c = window.Vue.openBlock, Sc = window.Vue.createBlock, Pm = window.Vue.createCommentVNode, Bm = window.Vue.createVNode, g6 = window.Vue.createElementVNode, p6 = window.Vue.withCtx, m6 = { class: "sx-editor__editing-surface-container grow" }, yc = window.Vue.ref, h6 = window.Vue.computed;
window.Vue.inject;
const f6 = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = yc(!1), s = et(), o = () => n.value = !0, a = () => s.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: u, originalContent: d, title: i } = history.state, c = yc(null), g = yc(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = aw(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = P(), { isSectionTitleSelected: v, sourceSection: _ } = te(), b = h6(
      () => tn.calculateScore(
        c.value,
        u,
        f.value
      )
    ), x = d6(), y = (E) => C(this, null, function* () {
      c.value = E, g.value = !0;
      const S = new Promise((V) => setTimeout(V, 2e3));
      let F = Promise.resolve();
      r ? _.value.editedTranslation = E : F = x(E), b.value === 0 && l ? p() : b.value > 0 && m(), yield Promise.all([S, F]), g.value = !1, a();
    });
    return r ? mw.cx.eventlogging.stats.publishEditorStepAccess() : mw.cx.eventlogging.stats.editingStepAccess(!0), (E, S) => (_c(), Sc(Ye(U), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: p6(() => [
        Ye(d) ? (_c(), Sc(QD, {
          key: 0,
          language: Ye(h),
          dir: Ye(I.getDir)(Ye(h)),
          "original-content": Ye(d)
        }, null, 8, ["language", "dir", "original-content"])) : Pm("", !0),
        n.value ? Pm("", !0) : (_c(), Sc(Ye(gt), { key: 1 })),
        g6("div", m6, [
          Bm(c6, {
            "edited-translation": c.value,
            "show-feedback": g.value,
            "proposed-translation": Ye(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Bm(zV, {
            content: Ye(u),
            language: Ye(f),
            dir: Ye(I.getDir)(Ye(f)),
            title: Ye(i),
            "use-text": !!Ye(v),
            onReady: o,
            onClose: a,
            onEditCompleted: y
          }, null, 8, ["content", "language", "dir", "title", "use-text"])
        ])
      ]),
      _: 1
    }));
  }
};
const w6 = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: f6
  },
  beforeRouteEnter(e, t, n) {
    n((s) => {
      s.fromRoute = t.name;
    });
  },
  data: () => ({
    fromRoute: ""
  }),
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.tabletAndDown })
  }
}, v6 = window.Vue.resolveComponent, _6 = window.Vue.createVNode, S6 = window.Vue.normalizeClass, y6 = window.Vue.openBlock, x6 = window.Vue.createElementBlock;
function b6(e, t, n, s, o, a) {
  const r = v6("sx-editor");
  return y6(), x6("main", {
    class: S6(["sx-editor-view", a.classes])
  }, [
    _6(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const C6 = /* @__PURE__ */ de(w6, [["render", b6]]);
const Qt = window.Vue.unref, rs = window.Vue.createVNode, Qo = window.Vue.withCtx, k6 = window.Vue.resolveDirective, $6 = window.Vue.withDirectives, V6 = window.Vue.openBlock, E6 = window.Vue.createBlock, Fm = window.Codex.CdxButton, Nm = window.Codex.CdxIcon, L6 = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = et(), n = () => t.push({ name: "sx-sentence-selector" });
    return (s, o) => {
      const a = k6("i18n");
      return V6(), E6(Qt(U), { class: "ma-0 sx-publisher__header" }, {
        default: Qo(() => [
          rs(Qt(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: Qo(() => [
              rs(Qt(Fm), {
                class: "px-3",
                weight: "quiet",
                "aria-label": s.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Qo(() => [
                  rs(Qt(Nm), { icon: Qt(Qs) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          $6(rs(Qt(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          rs(Qt(k), { shrink: "" }, {
            default: Qo(() => [
              rs(Qt(Fm), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": s.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: o[0] || (o[0] = (r) => s.$emit("publish-translation"))
              }, {
                default: Qo(() => [
                  rs(Qt(Nm), { icon: Qt(ry) }, null, 8, ["icon"])
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
}, T6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, A6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Mm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const xc = window.Vue.createElementVNode, Um = window.Vue.toDisplayString, bc = window.Vue.unref, Cc = window.Vue.withCtx, Im = window.Vue.createVNode, D6 = window.Vue.openBlock, P6 = window.Vue.createBlock, B6 = window.Vue.createCommentVNode, F6 = ["innerHTML"], N6 = ["textContent"], M6 = ["textContent"], kc = window.Vue.computed, U6 = {
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
    const t = ge(), n = e, s = {
      pending: {
        svg: T6,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: A6,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Mm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Mm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, o = kc(() => s[n.status].svg), a = kc(() => s[n.status].title), r = kc(() => s[n.status].subtitle);
    return (l, u) => e.active ? (D6(), P6(bc(bt), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: Cc(() => [
        Im(bc(U), { class: "ma-4" }, {
          default: Cc(() => [
            Im(bc(k), null, {
              default: Cc(() => [
                xc("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: o.value
                }, null, 8, F6),
                xc("h2", {
                  textContent: Um(a.value)
                }, null, 8, N6),
                xc("p", {
                  class: "ma-0",
                  textContent: Um(r.value)
                }, null, 8, M6)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : B6("", !0);
  }
};
const lt = window.Vue.unref, Mt = window.Vue.createVNode, _n = window.Vue.withCtx, I6 = window.Vue.resolveDirective, R6 = window.Vue.withDirectives, Rm = window.Vue.toDisplayString, z6 = window.Vue.createTextVNode, $c = window.Vue.openBlock, zm = window.Vue.createElementBlock, O6 = window.Vue.createCommentVNode, lw = window.Vue.createElementVNode, j6 = window.Vue.createBlock, H6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, q6 = ["src"], G6 = ["textContent"], X6 = /* @__PURE__ */ lw("p", { class: "mt-0" }, null, -1), W6 = window.Vue.computed, K6 = window.Vue.inject, Y6 = window.Vue.ref, Om = window.Codex.CdxButton, Q6 = window.Codex.CdxIcon, J6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: cf,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, s = Y6(""), o = () => n("close"), a = () => n("publish", s.value), r = K6("breakpoints"), l = W6(() => r.value.mobile);
    return (u, d) => {
      const i = I6("i18n");
      return e.active && e.captchaDetails ? ($c(), j6(lt(bt), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: _n(() => [
          Mt(lt(U), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: _n(() => [
              Mt(lt(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: _n(() => [
                  Mt(lt(Om), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: o
                  }, {
                    default: _n(() => [
                      Mt(lt(Q6), { icon: lt(Qs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              R6(Mt(lt(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Mt(lt(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: _n(() => [
                  Mt(lt(Om), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: _n(() => [
                      z6(Rm(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Mt(lt(Yi))
        ]),
        default: _n(() => [
          lw("div", H6, [
            e.captchaDetails.type === "image" ? ($c(), zm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, q6)) : ($c(), zm("p", {
              key: 1,
              textContent: Rm(e.captchaDetails.question)
            }, null, 8, G6)),
            X6,
            Mt(lt(U), { class: "ma-0" }, {
              default: _n(() => [
                Mt(lt(k), null, {
                  default: _n(() => [
                    Mt(lt(zc), {
                      value: s.value,
                      "onUpdate:value": d[0] || (d[0] = (c) => s.value = c),
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
      }, 8, ["fullscreen"])) : O6("", !0);
    };
  }
};
const jn = window.Vue.unref, Oi = window.Vue.createVNode, Is = window.Vue.withCtx, Rs = window.Vue.createElementVNode, Z6 = window.Vue.resolveDirective, e9 = window.Vue.withDirectives, t9 = window.Vue.renderList, n9 = window.Vue.Fragment, Vc = window.Vue.openBlock, s9 = window.Vue.createElementBlock, jm = window.Vue.toDisplayString, Hm = window.Vue.createTextVNode, o9 = window.Vue.isRef, a9 = window.Vue.normalizeClass, qm = window.Vue.createBlock, i9 = { class: "mw-ui-dialog__header" }, r9 = { class: "row ma-0 px-4 py-3" }, l9 = { class: "col shrink justify-center" }, c9 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, u9 = { class: "mb-0" }, d9 = { class: "pa-4" }, g9 = window.Codex.CdxField, p9 = window.Codex.CdxRadio, m9 = window.Vuex.useStore, ji = window.Vue.computed, h9 = window.Codex.CdxButton, f9 = window.Codex.CdxIcon, w9 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, s = m9(), { target: o, PUBLISHING_TARGETS: a } = kt(), r = ji(() => s.state.translator.isAnon), l = ge(), { sourceSection: u } = te(), { isCurrentSectionPresent: d } = Zs(), i = ji(
      () => u.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), c = ji(
      () => u.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), g = ji(() => {
      const m = [
        {
          label: i.value,
          description: c.value,
          value: a.NEW_SECTION,
          disabled: !1
        },
        {
          label: l.i18n("cx-sx-publisher-sandbox-option-label"),
          description: l.i18n("cx-sx-publisher-sandbox-option-details"),
          value: a.SANDBOX,
          disabled: r.value
        }
      ];
      return d.value && (m.push({
        label: l.i18n("cx-sx-publisher-expand-option-label"),
        description: l.i18n("cx-sx-publisher-expand-option-details"),
        value: a.EXPAND,
        disabled: !1
      }), m.push({
        label: l.i18n("cx-sx-publisher-replace-option-label"),
        description: l.i18n("cx-sx-publisher-replace-option-details"),
        value: a.REPLACE,
        disabled: !1
      })), m;
    }), p = () => n("update:active", !1);
    return (m, h) => {
      const f = Z6("i18n");
      return Vc(), qm(jn(bt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[1] || (h[1] = (v) => m.$emit("update:active", v)),
        onClose: p
      }, {
        header: Is(() => [
          Rs("div", i9, [
            Rs("div", r9, [
              Rs("div", l9, [
                Oi(jn(h9), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: Is(() => [
                    Oi(jn(f9), { icon: jn(Yh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Rs("div", c9, [
                e9(Rs("h4", u9, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Oi(jn(Yi))
          ])
        ]),
        default: Is(() => [
          Rs("div", d9, [
            Oi(jn(g9), { "is-fieldset": "" }, {
              default: Is(() => [
                (Vc(!0), s9(n9, null, t9(g.value, (v, _) => (Vc(), qm(jn(p9), {
                  key: "publish-options-radio-" + v.value,
                  modelValue: jn(o),
                  "onUpdate:modelValue": [
                    h[0] || (h[0] = (b) => o9(o) ? o.value = b : null),
                    p
                  ],
                  class: a9(_ < g.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": v.value,
                  disabled: v.disabled,
                  name: "publish-options"
                }, {
                  description: Is(() => [
                    Hm(jm(v.description), 1)
                  ]),
                  default: Is(() => [
                    Hm(jm(v.label) + " ", 1)
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
const Ut = window.Vue.unref, Gm = window.Vue.toDisplayString, Xm = window.Vue.createElementVNode, v9 = window.Vue.resolveDirective, zs = window.Vue.createVNode, _9 = window.Vue.withDirectives, Jo = window.Vue.withCtx, Ec = window.Vue.openBlock, Wm = window.Vue.createBlock, Km = window.Vue.createCommentVNode, S9 = window.Vue.Fragment, y9 = window.Vue.createElementBlock, x9 = window.Vue.normalizeClass, b9 = ["textContent"], C9 = ["textContent"], Os = window.Vue.computed, Ym = window.Vue.ref, k9 = window.Vue.watch, Qm = window.Codex.CdxButton, Jm = window.Codex.CdxIcon, $9 = window.Codex.CdxMessage, V9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Ym(0), s = Ym(null);
    k9(s, () => {
      var m;
      const p = (m = s.value) == null ? void 0 : m.$el;
      if (p instanceof HTMLElement) {
        const h = p.querySelector("a");
        h && h.setAttribute("target", "_blank");
      }
    });
    const o = Os(
      () => {
        var p;
        return (p = t.publishFeedbackMessages) == null ? void 0 : p[n.value];
      }
    ), a = Os(() => {
      var p;
      return ((p = o.value) == null ? void 0 : p.status) || "notice";
    }), r = Os(() => a.value === "notice"), l = Os(
      () => `sx-publisher__review-info--${a.value}`
    ), u = ge(), d = Os(() => {
      var p;
      return (p = o.value) == null ? void 0 : p.text;
    }), i = Os(() => {
      var p;
      return r.value ? u.i18n("cx-sx-publisher-review-info") : ((p = o.value) == null ? void 0 : p.title) || u.i18n("cx-sx-publisher-review-info-error");
    }), c = () => {
      const p = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + p) % p;
    }, g = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (p, m) => {
      const h = v9("i18n-html");
      return Ec(), Wm(Ut($9), {
        type: a.value,
        class: x9(["sx-publisher__review-info", l.value]),
        icon: r.value ? Ut(uy) : null
      }, {
        default: Jo(() => [
          Xm("h5", {
            textContent: Gm(i.value)
          }, null, 8, b9),
          r.value ? Km("", !0) : (Ec(), y9(S9, { key: 0 }, [
            Xm("p", {
              textContent: Gm(d.value)
            }, null, 8, C9),
            zs(Ut(U), {
              justify: "between",
              class: "ma-0"
            }, {
              default: Jo(() => [
                _9(zs(Ut(k), {
                  ref_key: "learnMoreContainer",
                  ref: s,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (Ec(), Wm(Ut(k), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: Jo(() => [
                    zs(Ut(Qm), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: c
                    }, {
                      default: Jo(() => [
                        zs(Ut(Jm), { icon: Ut(wu) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    zs(Ut(Qm), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: Jo(() => [
                        zs(Ut(Jm), { icon: Ut(Sa) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })) : Km("", !0)
              ]),
              _: 1
            })
          ], 64))
        ]),
        _: 1
      }, 8, ["type", "class", "icon"]);
    };
  }
}, E9 = (e) => {
  const t = document.createElement("article");
  return t.innerHTML = e, Array.prototype.forEach.call(
    t.querySelectorAll("article, section, [data-segmentid]"),
    (n) => {
      const s = n.parentNode;
      for (; n.firstChild; )
        s.insertBefore(n.firstChild, n);
      n.remove();
    }
  ), Array.prototype.forEach.call(t.querySelectorAll(".cx-link"), (n) => {
    var o;
    const s = JSON.parse(n.getAttribute("data-cx") || "{}");
    (s == null ? void 0 : s.adapted) === !1 && ((o = s == null ? void 0 : s.targetTitle) == null ? void 0 : o.missing) !== !0 ? n.replaceWith(...n.childNodes) : ["data-linkid", "class", "title", "id"].forEach((a) => {
      n.removeAttribute(a);
    });
  }), Array.prototype.forEach.call(t.querySelectorAll(".mw-ref"), (n) => {
    const s = JSON.parse(n.getAttribute("data-cx") || "{}");
    (s == null ? void 0 : s.adapted) === !1 && n.parentNode.removeChild(n);
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
}, L9 = window.Vuex.useStore, T9 = window.Vue.computed, A9 = () => {
  const e = L9(), { currentTranslation: t } = Ot(), { currentMTProvider: n } = Te(e), { currentTargetPageTitle: s } = tt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = P(), { sourceSection: u } = te(), d = Ct(), i = T9(() => {
    const m = {
      translation_source_language: o.value,
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
      translation_target_exists: !!s.value
    };
    if (l.value ? (m.translation_source_section = l.value, m.translation_type = "section") : m.translation_type = "article", t.value) {
      m.translation_id = t.value.translationId, m.translation_target_title = t.value.targetTitle;
      const h = t.value.targetSectionTitle;
      h && (m.translation_target_section = h);
    } else
      s.value && (m.translation_target_title = s.value);
    return n.value && (m.translation_provider = ae.getProviderForInstrumentation(n.value)), m.human_modification_rate = tn.getMTScoreForPageSection(
      u.value,
      a.value
    ) / 100, m.human_modification_threshold = tn.getMtModificationThreshold(), m;
  });
  return {
    logPublishAttemptEvent: () => d(ce({
      event_type: "publish_attempt"
    }, i.value)),
    logPublishSuccessEvent: (m, h) => {
      d(ce({
        event_type: "publish_success",
        published_page_id: m,
        published_revision_id: h
      }, i.value)), mw.cx.eventlogging.stats.published(!0);
    },
    logPublishFailureEvent: () => d(ce({
      event_type: "publish_failure"
    }, i.value))
  };
}, D9 = window.Vue.computed, Zm = window.Vue.ref, P9 = window.Vuex.useStore, B9 = () => {
  const e = P9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: s
  } = P(), { sourceSection: o } = te(), { targetPageTitleForPublishing: a } = xa(), r = sw(), { sectionSuggestion: l } = Be(), u = D9(
    () => {
      var x, y;
      return (y = l.value) == null ? void 0 : y.presentSections[(x = o.value) == null ? void 0 : x.sourceSectionTitleForPublishing];
    }
  ), { target: d, PUBLISHING_TARGETS: i } = kt(), c = Zm(!1), g = Zm("pending"), p = () => c.value = !1, m = Du(), {
    logPublishAttemptEvent: h,
    logPublishSuccessEvent: f,
    logPublishFailureEvent: v
  } = A9(), _ = (x, y) => C(void 0, null, function* () {
    h();
    const E = yield m();
    if (E instanceof Xn)
      return v(), { publishFeedbackMessage: E, targetUrl: null };
    const S = E, F = a.value, V = {
      html: E9(o.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: F,
      sourceSectionTitle: o.value.sourceSectionTitleForPublishing,
      targetSectionTitle: o.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: s.value,
      revision: r.value,
      publishTarget: d.value,
      sectionTranslationId: S
    };
    u.value && (V.existingSectionTitle = u.value), x && (V.captchaId = x, V.captchaWord = y);
    const A = yield xt.publishTranslation(
      V
    );
    return A.publishFeedbackMessage === null ? f(A.pageId, A.revisionId) : v(), A;
  });
  return {
    closePublishDialog: p,
    doPublish: (x = null, y = null) => C(void 0, null, function* () {
      g.value = "pending", c.value = !0;
      let E;
      try {
        E = yield _(
          y == null ? void 0 : y.id,
          x
        );
      } catch (S) {
        if (S instanceof Xs)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw mw.cx.eventlogging.stats.publishFailed(!0), S;
      }
      return E;
    }),
    isPublishDialogActive: c,
    publishStatus: g
  };
}, F9 = window.Vue.computed, N9 = () => {
  const e = et(), { sourceSection: t } = te(), { getCurrentTitleByLanguage: n } = sn(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = P(), a = F9(
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
        o.value,
        s.value
      ),
      isFinalEdit: !0
    }
  });
}, M9 = () => {
  const { targetLanguageURLParameter: e } = P(), { sourceSection: t } = te();
  return () => {
    const n = tn.getMTScoreForPageSection(
      t.value,
      e.value
    ), s = tn.getScoreStatus(n);
    if (s === "success")
      return null;
    const o = 100 - n, a = s === "failure" ? "error" : "warning";
    let r, l;
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", o).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", o).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Xn({
      title: r,
      text: l,
      status: a,
      type: "mt"
    });
  };
}, U9 = window.Vue.ref, I9 = window.Vue.computed, R9 = () => {
  const e = M9(), { target: t, PUBLISHING_TARGETS: n } = kt(), { targetPageTitleForPublishing: s } = xa(), o = U9([]), a = I9(
    () => o.value.some((d) => d.isError)
  ), r = (d) => {
    o.value.push(d), o.value.sort((i, c) => +c.isError - +i.isError);
  };
  return {
    addPublishFeedbackMessage: r,
    clearPublishFeedbackMessages: () => {
      o.value = [];
    },
    publishFeedbackMessages: o,
    isPublishingDisabled: a,
    initializePublishFeedbackMessages: () => {
      if (!iw() && t.value !== n.SANDBOX) {
        const i = new Xn({
          text: mw.message("cx-publish-permission-error").text(),
          title: mw.message("cx-publish-permission-error-title").text(),
          type: "generic",
          status: "error"
        });
        r(i);
      }
      const d = e();
      d && r(d), mw.Title.newFromText(s.value) || r(
        new Xn({
          text: mw.message("cx-tools-linter-invalid-character-message").text(),
          title: mw.message("cx-tools-linter-invalid-character").text(),
          type: "generic",
          status: "error"
        })
      );
    }
  };
}, z9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = kt(), { currentSourcePage: n } = tt(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = P(), { sourceSection: a } = te(), { targetPageTitleForPublishing: r } = xa();
  return (l) => C(void 0, null, function* () {
    const u = r.value, d = n.value.title, i = new mw.Title(d), c = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== c.user)
      try {
        yield Lu.addWikibaseLink(
          s.value,
          o.value,
          d,
          u
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
}, eh = window.Vue.ref, O9 = () => {
  const e = eh(!1), t = eh(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (o) => o && o.type === "captcha" ? (t.value = o.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ue = window.Vue.unref, Ge = window.Vue.createVNode, j9 = window.Vue.resolveDirective, th = window.Vue.withDirectives, Lc = window.Vue.openBlock, Tc = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ls = window.Vue.createElementVNode, nh = window.Vue.toDisplayString, H9 = window.Vue.createTextVNode, js = window.Vue.withCtx, sh = window.Vue.normalizeClass, q9 = { class: "sx-publisher" }, G9 = {
  key: 0,
  class: "mb-2"
}, X9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, W9 = ["href"], K9 = ["innerHTML"], Y9 = { class: "sx-publisher__section-preview pa-5" }, Q9 = ["innerHTML"], Hi = window.Vue.computed, J9 = window.Vue.onMounted, Z9 = window.Vue.ref, eP = window.Vue.watch, oh = window.Codex.CdxButton, Ac = window.Codex.CdxIcon, tP = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = te(), { sectionSuggestion: n } = Be(), { isCurrentSectionPresent: s } = Zs(), {
      targetLanguageURLParameter: o,
      sectionURLParameter: a
    } = P(), r = Hi(() => {
      var j;
      return (j = t.value) == null ? void 0 : j.title;
    }), l = ge(), { target: u, PUBLISHING_TARGETS: d } = kt(), i = Hi(() => u.value === d.SANDBOX ? l.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : u.value === d.EXPAND ? l.i18n(
      "cx-sx-publisher-publish-panel-expand-section-result"
    ) : u.value === d.REPLACE ? l.i18n(
      "cx-sx-publisher-publish-panel-replace-section-result"
    ) : t.value.isLeadSection ? l.i18n("cx-sx-publisher-publish-panel-lead-section-result") : l.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: c,
      captchaDialogOn: g,
      handleCaptchaError: p,
      onCaptchaDialogClose: m
    } = O9(), {
      publishFeedbackMessages: h,
      isPublishingDisabled: f,
      addPublishFeedbackMessage: v,
      clearPublishFeedbackMessages: _,
      initializePublishFeedbackMessages: b
    } = R9(), x = z9(), { doPublish: y, isPublishDialogActive: E, publishStatus: S, closePublishDialog: F } = B9(), V = (j = null) => C(this, null, function* () {
      if (f.value)
        return;
      const W = yield y(j, c.value);
      if (!W)
        return;
      const { publishFeedbackMessage: se, targetUrl: re } = W;
      if (p(se)) {
        F();
        return;
      } else
        se && v(se);
      S.value = f.value ? "failure" : "success", setTimeout(() => {
        if (f.value) {
          F();
          return;
        }
        x(re);
      }, 1e3);
    });
    J9(() => {
      b(), mw.cx.eventlogging.stats.publishStepAccess();
    });
    const A = N9(), R = Z9(!1), K = () => R.value = !0;
    eP(R, (j) => {
      j || (_(), b());
    });
    const ie = Hi(
      () => {
        var j, W;
        return (W = (j = n.value) == null ? void 0 : j.presentSections) == null ? void 0 : W[a.value];
      }
    ), ne = Hi(() => {
      var se;
      const j = Y.getPageUrl(
        o.value,
        (se = n.value) == null ? void 0 : se.targetTitle
      ), W = (ie.value || "").replace(
        / /g,
        "_"
      );
      return `${j}#${W}`;
    });
    return (j, W) => {
      const se = j9("i18n");
      return Lc(), Tc("section", q9, [
        Ge(L6, {
          "is-publishing-disabled": ue(f),
          onPublishTranslation: V
        }, null, 8, ["is-publishing-disabled"]),
        ls("div", {
          class: sh(["sx-publisher__publish-panel", ue(s) ? "py-4" : "pa-4"])
        }, [
          ue(s) ? (Lc(), Tc("div", X9, [
            th(ls("h5", null, null, 512), [
              [se, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            ls("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: ne.value,
              target: "_blank"
            }, [
              H9(nh(ie.value) + " ", 1),
              Ge(ue(Ac), { icon: ue(or) }, null, 8, ["icon"])
            ], 8, W9)
          ])) : th((Lc(), Tc("h5", G9, null, 512)), [
            [se, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          ls("div", {
            class: sh({ "px-4 mt-4": ue(s) })
          }, [
            ls("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: i.value
            }, null, 8, K9),
            Ge(ue(U), {
              justify: "end",
              class: "ma-0"
            }, {
              default: js(() => [
                Ge(ue(k), { shrink: "" }, {
                  default: js(() => [
                    Ge(ue(oh), {
                      weight: "quiet",
                      "aria-label": j.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: K
                    }, {
                      default: js(() => [
                        Ge(ue(Ac), { icon: ue(Sy) }, null, 8, ["icon"])
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
        Ge(V9, { "publish-feedback-messages": ue(h) }, null, 8, ["publish-feedback-messages"]),
        ls("section", Y9, [
          Ge(ue(U), { class: "pb-5 ma-0" }, {
            default: js(() => [
              Ge(ue(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: nh(r.value)
              }, null, 8, ["textContent"]),
              Ge(ue(k), { shrink: "" }, {
                default: js(() => [
                  Ge(ue(oh), {
                    weight: "quiet",
                    "aria-label": j.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ue(A)
                  }, {
                    default: js(() => [
                      Ge(ue(Ac), { icon: ue(hu) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          ls("div", {
            innerHTML: ue(t).translationHtml
          }, null, 8, Q9)
        ]),
        Ge(w9, {
          active: R.value,
          "onUpdate:active": W[0] || (W[0] = (re) => R.value = re)
        }, null, 8, ["active"]),
        Ge(J6, {
          active: ue(g),
          "captcha-details": ue(c),
          onClose: ue(m),
          onPublish: W[1] || (W[1] = (re) => V(re))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ge(U6, {
          active: ue(E),
          status: ue(S)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const nP = {
  name: "SxPublisherView",
  components: {
    SxPublisher: tP
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, sP = window.Vue.resolveComponent, oP = window.Vue.createVNode, aP = window.Vue.normalizeClass, iP = window.Vue.openBlock, rP = window.Vue.createElementBlock;
function lP(e, t, n, s, o, a) {
  const r = sP("sx-publisher");
  return iP(), rP("main", {
    class: aP(["sx-publisher-view", a.classes])
  }, [
    oP(r)
  ], 2);
}
const cP = /* @__PURE__ */ de(nP, [["render", lP]]);
const It = window.Vue.unref, Hn = window.Vue.createVNode, cs = window.Vue.withCtx, Dc = window.Vue.toDisplayString, Pc = window.Vue.createElementVNode, uP = window.Vue.openBlock, dP = window.Vue.createBlock, gP = ["textContent"], pP = ["textContent"], mP = ["textContent"], cw = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Ws,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (uP(), dP(It(U), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: It(I.getDir)(e.suggestion.language)
    }, {
      default: cs(() => [
        Hn(It(k), { shrink: "" }, {
          default: cs(() => [
            Hn(It(eu), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Hn(It(k), { class: "ms-4" }, {
          default: cs(() => [
            Hn(It(U), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: cs(() => [
                Hn(It(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: cs(() => [
                    Pc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Dc(e.suggestion.title)
                    }, null, 8, gP)
                  ]),
                  _: 1
                }),
                Hn(It(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: cs(() => [
                    Pc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Dc(e.suggestion.description)
                    }, null, 8, pP)
                  ]),
                  _: 1
                }),
                Hn(It(k), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: cs(() => [
                    Hn(It(Ze), {
                      icon: It(G0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    Pc("small", {
                      textContent: Dc((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, mP)
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
const Zo = window.Vue.unref, ea = window.Vue.openBlock, Bc = window.Vue.createBlock, hP = window.Vue.createCommentVNode, fP = window.Vue.resolveDirective, wP = window.Vue.withDirectives, ah = window.Vue.createElementBlock, vP = window.Vue.renderList, _P = window.Vue.Fragment, SP = window.Vue.normalizeClass, yP = window.Vue.withCtx, xP = {
  key: 1,
  class: "sx-article-search__empty-state"
}, ih = window.Vue.computed, bP = window.Vue.ref, CP = {
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
    const { sourceLanguageURLParameter: t } = P(), n = ih(() => I.getAutonym(t.value)), s = e, o = bP(null), a = (c) => o.value = c, r = () => o.value = null, l = (c) => {
      var g;
      return ((g = s.selectedItem) == null ? void 0 : g.title) === c.title && !o.value || o.value === c.pageId;
    }, u = ih(() => s.searchInput), { searchResultsLoading: d, searchResultsSlice: i } = bu(
      t,
      u
    );
    return (c, g) => {
      const p = fP("i18n");
      return ea(), Bc(Zo(Je), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: yP(() => [
          Zo(d) ? (ea(), Bc(Zo(gt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Zo(i).length === 0 ? wP((ea(), ah("p", xP, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : hP("", !0),
          (ea(!0), ah(_P, null, vP(Zo(i), (m) => (ea(), Bc(cw, {
            key: m.pageId,
            suggestion: m,
            class: SP({
              "sx-article-search__results-selected": l(m)
            }),
            onMouseenter: (h) => a(m.pageId),
            onMouseleave: r,
            onClick: (h) => c.$emit("suggestion-clicked", m)
          }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const kP = window.Vue.toDisplayString, $P = window.Vue.createElementVNode, VP = window.Vue.renderList, EP = window.Vue.Fragment, Fc = window.Vue.openBlock, LP = window.Vue.createElementBlock, TP = window.Vue.normalizeClass, rh = window.Vue.createBlock, AP = window.Vue.unref, lh = window.Vue.withCtx, DP = ["textContent"], PP = window.Vue.ref, ch = {
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
    const n = e, s = PP(null), o = (l) => s.value = l, a = () => s.value = null, r = (l) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === l.title && !s.value || s.value === l.pageId;
    };
    return (l, u) => (Fc(), rh(AP(Je), { class: "sx-article-search__suggestions pa-0" }, {
      header: lh(() => [
        $P("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: kP(e.cardTitle)
        }, null, 8, DP)
      ]),
      default: lh(() => [
        (Fc(!0), LP(EP, null, VP(e.suggestions, (d) => (Fc(), rh(cw, {
          key: d.pageId,
          suggestion: d,
          class: TP({
            "sx-article-search__suggestions-selected": r(d)
          }),
          onMouseenter: (i) => o(d.pageId),
          onMouseleave: a,
          onClick: (i) => l.$emit("suggestion-clicked", d)
        }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, BP = window.Vue.computed, FP = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), uh = "other", NP = (e) => BP((t) => {
  const s = e.value.slice(0, 3), o = {
    value: uh,
    props: {
      icon: Y0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== uh);
  return FP(a, s) ? t : [...s.map((l) => ({
    value: l,
    props: {
      label: I.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), MP = window.Vue.computed, UP = () => {
  const { supportedSourceLanguageCodes: e } = wa(), { targetLanguageURLParameter: t } = P();
  return { getSuggestedSourceLanguages: (s) => MP(() => {
    const o = (navigator.language || "").split("-")[0], a = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((l) => l.split("-")[0]), r = [
      ...s.value,
      // User's current interface language
      mw.config.get("wgUserLanguage"),
      // Current wiki's content language
      mw.config.get("wgContentLanguage"),
      o,
      ...a
    ];
    return [...new Set(r)].filter(
      (l) => l !== t.value && e.value.includes(l)
    );
  }) };
}, IP = window.Vue.ref, RP = () => {
  const e = IP([]), t = () => {
    try {
      const o = mw.storage.get("cxPreviousLanguages");
      o && e.value.push(...JSON.parse(o));
    } catch (o) {
    }
  }, n = () => {
    mw.storage.set(
      "cxPreviousLanguages",
      JSON.stringify(e.value)
    );
  }, s = (o) => {
    o && (e.value = [
      o,
      ...e.value.filter((a) => a !== o)
    ], n());
  };
  return t(), {
    previousLanguages: e,
    addLanguageToHistory: s
  };
};
const zP = window.Vue.resolveDirective, OP = window.Vue.createElementVNode, Nc = window.Vue.withDirectives, he = window.Vue.unref, ta = window.Vue.withCtx, Jt = window.Vue.createVNode, na = window.Vue.openBlock, dh = window.Vue.createBlock, jP = window.Vue.createCommentVNode, Mc = window.Vue.createElementBlock, HP = window.Vue.Fragment, qP = window.Vue.vShow, sa = window.Vue.withModifiers, oa = window.Vue.withKeys, GP = ["onKeydown"], XP = { class: "mb-0" }, WP = {
  key: 2,
  class: "sx-article-search__empty-state"
}, aa = window.Vue.ref, KP = window.Vue.onMounted, ia = window.Vue.computed, gh = window.Vue.watch, YP = window.Vue.inject, QP = window.Vuex.useStore, JP = window.Codex.CdxButton, ZP = window.Codex.CdxIcon, eB = window.Codex.CdxSearchInput, tB = 3, nB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = aa(""), n = aa(!1), s = aa(null), o = aa(!1), { previousLanguages: a, addLanguageToHistory: r } = RP(), l = QP(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: d
    } = P(), { supportedSourceLanguageCodes: i } = wa(), { searchResultsSlice: c } = bu(u, t), { getSuggestedSourceLanguages: g } = UP(), p = g(a), m = NP(
      p
    ), h = et(), { fetchAllTranslations: f } = Js();
    KP(() => C(this, null, function* () {
      var D;
      f(), r(u.value), (D = s.value) == null || D.focus();
    }));
    const v = () => {
      h.push({ name: "dashboard" });
    }, _ = rf(), b = (D) => {
      _(D, d.value), r(D);
    }, x = (D) => {
      if (D === "other") {
        o.value = !0;
        return;
      }
      b(D);
    };
    gh(
      u,
      () => {
        var D;
        l.dispatch("mediawiki/fetchNearbyPages"), (D = s.value) == null || D.focus();
      },
      { immediate: !0 }
    );
    const y = Ct();
    gh(t, () => {
      n.value || (n.value = !0, y({
        event_type: "dashboard_search",
        translation_source_language: u.value,
        translation_target_language: d.value
      }));
    });
    const E = () => {
      o.value = !1;
    }, S = (D) => {
      o.value = !1, x(D);
    }, { fetchPreviousEditsInSource: F, previousEditsInSource: V } = qh(), A = aa([]);
    (() => F().then(() => V.value.length > 0 ? ps.fetchPages(
      u.value,
      V.value
    ) : []).then((D) => {
      D = D.slice(0, tB), D = D.sort(
        (M, Q) => V.value.indexOf(M.title) - V.value.indexOf(Q.title)
      ), A.value = D;
    }))();
    const K = ia(() => l.getters["mediawiki/getNearbyPages"]), ie = YP("breakpoints"), ne = ia(() => ie.value.mobile), j = ya(), W = ia(
      () => A.value && A.value.length
    ), se = ia(
      () => K.value && K.value.length
    ), { next: re, prev: $e, keyboardNavigationContainer: Fe, selectedItem: Ae } = Rf(t, c, A), Z = (D) => j(
      D.title,
      u.value,
      d.value,
      nt.value
    ), nt = ia(() => t.value ? "search_result" : W.value ? "suggestion_recent_edit" : se.value ? "suggestion_nearby" : "");
    return (D, M) => {
      const Q = zP("i18n");
      return na(), Mc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: Fe,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          M[5] || (M[5] = oa(sa((...w) => he(re) && he(re)(...w), ["stop", "prevent"]), ["tab"])),
          M[6] || (M[6] = oa(sa((...w) => he(re) && he(re)(...w), ["stop", "prevent"]), ["down"])),
          M[7] || (M[7] = oa(sa((...w) => he($e) && he($e)(...w), ["stop", "prevent"]), ["up"])),
          oa(sa(v, ["stop", "prevent"]), ["esc"]),
          M[8] || (M[8] = oa(sa((w) => Z(he(Ae)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        Jt(he(U), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ta(() => [
            Jt(he(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ta(() => [
                Nc(OP("h5", XP, null, 512), [
                  [Q, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Jt(he(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ta(() => [
                Jt(he(JP), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": D.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: v
                }, {
                  default: ta(() => [
                    Jt(he(ZP), { icon: he(Qs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Jt(he(eB), {
          ref_key: "searchInputRef",
          ref: s,
          modelValue: t.value,
          "onUpdate:modelValue": M[0] || (M[0] = (w) => t.value = w),
          class: "sx-article-search__search-input",
          placeholder: D.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Jt(he(ma), {
          class: "sx-article-search__language-button-group",
          items: he(m),
          active: he(u),
          onSelect: x
        }, null, 8, ["items", "active"]),
        t.value ? jP("", !0) : (na(), Mc(HP, { key: 0 }, [
          W.value ? (na(), dh(ch, {
            key: 0,
            "card-title": D.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: A.value,
            "selected-item": he(Ae),
            onSuggestionClicked: M[1] || (M[1] = (w) => Z(w))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : se.value ? (na(), dh(ch, {
            key: 1,
            "card-title": D.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: K.value,
            onSuggestionClicked: M[2] || (M[2] = (w) => Z(w))
          }, null, 8, ["card-title", "suggestions"])) : Nc((na(), Mc("p", WP, null, 512)), [
            [Q, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Nc(Jt(CP, {
          "search-input": t.value,
          "selected-item": he(Ae),
          onSuggestionClicked: M[3] || (M[3] = (w) => Z(w))
        }, null, 8, ["search-input", "selected-item"]), [
          [qP, !!t.value]
        ]),
        Jt(he(bt), {
          value: o.value,
          "onUpdate:value": M[4] || (M[4] = (w) => o.value = w),
          class: "sx-article-search-language-selector",
          fullscreen: ne.value,
          header: ne.value,
          title: D.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: E
        }, {
          default: ta(() => [
            Jt(he(zf), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: he(i),
              suggestions: he(p),
              placeholder: D.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: S,
              onClose: E
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, GP);
    };
  }
};
const sB = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: nB
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, oB = window.Vue.resolveComponent, aB = window.Vue.createVNode, iB = window.Vue.normalizeClass, rB = window.Vue.openBlock, lB = window.Vue.createElementBlock;
function cB(e, t, n, s, o, a) {
  const r = oB("sx-article-search");
  return rB(), lB("main", {
    class: iB(["sx-article-search-view", a.classes])
  }, [
    aB(r)
  ], 2);
}
const uB = /* @__PURE__ */ de(sB, [["render", cB]]), dB = () => {
  const e = ya(), t = Eu(), { logDashboardOpenEvent: n } = qf(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o,
    pageURLParameter: a
  } = P();
  return () => C(void 0, null, function* () {
    return t(s.value, a.value).then(
      () => n()
    ), e(
      a.value,
      s.value,
      o.value,
      "direct_preselect",
      null,
      !1
    );
  });
}, gB = window.Vuex.useStore, pB = [
  {
    path: "",
    name: "dashboard",
    component: rp,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: uB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: h4,
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
    component: D3,
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
    component: ID,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: lD,
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
    component: C6,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: cP,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: rp,
    meta: { workflowStep: 0 }
  }
], Pu = rC({
  history: ib(),
  routes: pB
}), Uc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, mB = (e, t, n) => {
  let s = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return s = s.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(s, "");
};
Pu.beforeEach((e, t, n) => {
  const s = gB();
  if (mw.user.isAnon() || wh.assertUser().catch((i) => {
    i instanceof Xs && s.commit("application/setIsLoginDialogOn", !0);
  }), s.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const o = dB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: u
  } = P();
  if (!!(a.value && r.value && l.value)) {
    if (mB(
      a.value,
      r.value,
      l.value
    )) {
      const c = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      Uc(e.name, c, n);
    } else
      e.name === "sx-translation-confirmer" && o(), Uc(e.name, "sx-translation-confirmer", n);
    return;
  }
  u(), Uc(e.name, "dashboard", n);
});
Pu.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, s = t.meta.workflowStep;
  e.meta.transitionName = n < s ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
/*!
 * Plugin that captures errors from Vue code and logs them to error.contenttranslation
 *
 * Based on mediawiki/resources/src/vue/errorLogger.js
 */
const hB = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, fB = window.Vue.createApp, wB = mw.config.get("wgUserLanguage"), vB = "en", _B = mw.messages.values || {}, hs = fB(Yy);
hs.use(Pu);
hs.use(Ex);
hs.use(_1);
hs.use(v1);
const SB = Y1({
  locale: wB,
  finalFallback: vB,
  messages: _B,
  wikilinks: !0
});
hs.use(SB);
hs.use(hB);
hs.mount("#contenttranslation");
