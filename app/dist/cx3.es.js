var pw = Object.defineProperty, hw = Object.defineProperties;
var fw = Object.getOwnPropertyDescriptors;
var Pu = Object.getOwnPropertySymbols;
var ww = Object.prototype.hasOwnProperty, vw = Object.prototype.propertyIsEnumerable;
var Bu = (e, t, n) => t in e ? pw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ce = (e, t) => {
  for (var n in t || (t = {}))
    ww.call(t, n) && Bu(e, n, t[n]);
  if (Pu)
    for (var n of Pu(t))
      vw.call(t, n) && Bu(e, n, t[n]);
  return e;
}, Ke = (e, t) => hw(e, fw(t));
var C = (e, t, n) => new Promise((s, o) => {
  var a = (d) => {
    try {
      l(n.next(d));
    } catch (u) {
      o(u);
    }
  }, r = (d) => {
    try {
      l(n.throw(d));
    } catch (u) {
      o(u);
    }
  }, l = (d) => d.done ? s(d.value) : Promise.resolve(d.value).then(a, r);
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
    CdxTabs: d,
    CdxTab: u,
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
    CdxTabs: d,
    CdxTab: u,
    CdxField: i,
    CdxRadio: c
  };
}
const de = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, _w = {
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
}, Sw = window.Vue.toDisplayString, hr = window.Vue.openBlock, fr = window.Vue.createElementBlock, yw = window.Vue.createCommentVNode, Fu = window.Vue.createElementVNode, xw = window.Vue.normalizeClass, bw = ["width", "height", "aria-labelledby"], Cw = ["id"], kw = ["fill"], $w = ["d"];
function Vw(e, t, n, s, o, a) {
  return hr(), fr("span", {
    class: xw(["mw-ui-icon notranslate", a.classes])
  }, [
    (hr(), fr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (hr(), fr("title", {
        key: 0,
        id: n.iconName
      }, Sw(n.iconName), 9, Cw)) : yw("", !0),
      Fu("g", { fill: n.iconColor }, [
        Fu("path", { d: a.iconImagePath }, null, 8, $w)
      ], 8, kw)
    ], 8, bw))
  ], 2);
}
const Ze = /* @__PURE__ */ de(_w, [["render", Vw]]);
const Ew = {
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
}, Lw = window.Vue.renderSlot, Tw = window.Vue.resolveComponent, Nu = window.Vue.normalizeClass, $a = window.Vue.openBlock, wr = window.Vue.createBlock, vr = window.Vue.createCommentVNode, Aw = window.Vue.toDisplayString, Dw = window.Vue.createElementBlock, Pw = window.Vue.toHandlerKey, Bw = window.Vue.withModifiers, Fw = window.Vue.mergeProps, Nw = window.Vue.createElementVNode, Mw = window.Vue.resolveDynamicComponent, Uw = window.Vue.withCtx, Iw = { class: "mw-ui-button__content" }, Rw = ["textContent"];
function zw(e, t, n, s, o, a) {
  const r = Tw("mw-icon");
  return $a(), wr(Mw(a.component), {
    class: Nu(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Uw(() => [
      Lw(e.$slots, "default", {}, () => [
        Nw("span", Iw, [
          n.icon ? ($a(), wr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Nu(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : vr("", !0),
          !a.isIcon && n.label ? ($a(), Dw("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Aw(n.label)
          }, null, 8, Rw)) : vr("", !0),
          n.indicator ? ($a(), wr(r, Fw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Pw(a.indicatorClickEvent)]: t[0] || (t[0] = Bw((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : vr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Xe = /* @__PURE__ */ de(Ew, [["render", zw]]);
const Ow = {
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
}, jw = window.Vue.renderList, Hw = window.Vue.Fragment, _r = window.Vue.openBlock, Mu = window.Vue.createElementBlock, qw = window.Vue.resolveComponent, Gw = window.Vue.withModifiers, Xw = window.Vue.mergeProps, Ww = window.Vue.createBlock, Kw = { class: "row mw-ui-button-group ma-0 pa-0" };
function Yw(e, t, n, s, o, a) {
  const r = qw("mw-button");
  return _r(), Mu("div", Kw, [
    (_r(!0), Mu(Hw, null, jw(n.items, (l) => (_r(), Ww(r, Xw({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Gw((d) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const ma = /* @__PURE__ */ de(Ow, [["render", Yw]]);
const Qw = {
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
}, Uu = window.Vue.renderSlot, Jw = window.Vue.toDisplayString, Iu = window.Vue.openBlock, Ru = window.Vue.createElementBlock, Zw = window.Vue.createCommentVNode, e0 = window.Vue.createElementVNode, t0 = { class: "mw-ui-card" }, n0 = ["textContent"], s0 = { class: "mw-ui-card__content" };
function o0(e, t, n, s, o, a) {
  return Iu(), Ru("div", t0, [
    Uu(e.$slots, "header", {}, () => [
      n.title ? (Iu(), Ru("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Jw(n.title)
      }, null, 8, n0)) : Zw("", !0)
    ]),
    e0("div", s0, [
      Uu(e.$slots, "default")
    ])
  ]);
}
const Je = /* @__PURE__ */ de(Qw, [["render", o0]]);
const a0 = {}, i0 = window.Vue.openBlock, r0 = window.Vue.createElementBlock, l0 = { class: "mw-ui-divider row" };
function c0(e, t) {
  return i0(), r0("div", l0);
}
const Wi = /* @__PURE__ */ de(a0, [["render", c0]]);
const u0 = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, d0 = window.Vue.renderSlot, g0 = window.Vue.resolveDynamicComponent, p0 = window.Vue.withCtx, m0 = window.Vue.openBlock, h0 = window.Vue.createBlock;
function f0(e, t, n, s, o, a) {
  return m0(), h0(g0(n.tag), { class: "mw-grid container" }, {
    default: p0(() => [
      d0(e.$slots, "default")
    ]),
    _: 3
  });
}
const w0 = /* @__PURE__ */ de(u0, [["render", f0]]), v0 = {
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
}, _0 = window.Vue.renderSlot, S0 = window.Vue.resolveDynamicComponent, y0 = window.Vue.normalizeClass, x0 = window.Vue.withCtx, b0 = window.Vue.openBlock, C0 = window.Vue.createBlock;
function k0(e, t, n, s, o, a) {
  return b0(), C0(S0(n.tag), {
    class: y0(a.classes)
  }, {
    default: x0(() => [
      _0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const U = /* @__PURE__ */ de(v0, [["render", k0]]), Nc = ["mobile", "tablet", "desktop", "desktop-wide"], $0 = Nc.reduce(
  (e, t) => Ke(ce({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), V0 = {
  name: "MwCol",
  props: Ke(ce({}, $0), {
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
      for (let n = 0; n < Nc.length; n++) {
        let s = Nc[n], o = this.$props[s];
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
}, E0 = window.Vue.renderSlot, L0 = window.Vue.resolveDynamicComponent, T0 = window.Vue.normalizeClass, A0 = window.Vue.withCtx, D0 = window.Vue.openBlock, P0 = window.Vue.createBlock;
function B0(e, t, n, s, o, a) {
  return D0(), P0(L0(n.tag), {
    class: T0(a.classes)
  }, {
    default: A0(() => [
      E0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ de(V0, [["render", B0]]), F0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", N0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Ki = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", M0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, U0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", dh = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", I0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", R0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Yi = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", z0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", O0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", j0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", zu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", H0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", gh = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", q0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", G0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", X0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", W0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", K0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Mc = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, Y0 = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, Q0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, ph = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", J0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const Sr = window.Vue.computed, Z0 = window.Vue.watch, ev = window.Vue.ref, tv = window.Vue.nextTick, nv = {
  name: "MwDialog",
  components: {
    MwButton: Xe,
    MwRow: U,
    MwCol: k,
    MwDivider: Wi
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
    const n = ev(null), s = Sr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), o = Sr(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    Z0(
      () => e.value,
      (d) => {
        d ? (r(), tv(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = Sr(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: s,
      cssVars: l,
      overlayClass: o,
      mwIconClose: Yi,
      root: n
    };
  }
}, Ou = window.Vue.normalizeClass, yr = window.Vue.createElementVNode, xr = window.Vue.renderSlot, Va = window.Vue.resolveComponent, io = window.Vue.createVNode, br = window.Vue.withCtx, ju = window.Vue.createCommentVNode, sv = window.Vue.withKeys, Hu = window.Vue.openBlock, ov = window.Vue.createElementBlock, av = window.Vue.Transition, iv = window.Vue.normalizeStyle, rv = window.Vue.createBlock, lv = { class: "mw-ui-dialog__shell items-stretch" }, cv = { class: "mw-ui-dialog__body" };
function uv(e, t, n, s, o, a) {
  const r = Va("mw-col"), l = Va("mw-button"), d = Va("mw-row"), u = Va("mw-divider");
  return Hu(), rv(av, {
    name: "mw-ui-animation-fade",
    style: iv(s.cssVars)
  }, {
    default: br(() => [
      n.value ? (Hu(), ov("div", {
        key: 0,
        ref: "root",
        class: Ou(["mw-ui-dialog", s.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = sv((i) => n.closeOnEscapeKey && s.close(), ["esc"]))
      }, [
        yr("div", {
          class: Ou(["mw-ui-dialog__overlay", s.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && s.close())
        }, null, 2),
        yr("div", lv, [
          n.header ? xr(e.$slots, "header", { key: 0 }, () => [
            io(d, { class: "mw-ui-dialog__header" }, {
              default: br(() => [
                io(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                io(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: br(() => [
                    io(l, {
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
            io(u)
          ]) : ju("", !0),
          yr("div", cv, [
            xr(e.$slots, "default")
          ]),
          xr(e.$slots, "footer")
        ])
      ], 34)) : ju("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const bt = /* @__PURE__ */ de(nv, [["render", uv]]);
const dv = {
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
}, qu = window.Vue.renderSlot, gv = window.Vue.resolveComponent, Ea = window.Vue.openBlock, Cr = window.Vue.createBlock, Gu = window.Vue.createCommentVNode, pv = window.Vue.resolveDynamicComponent, mv = window.Vue.toDisplayString, hv = window.Vue.mergeProps, fv = window.Vue.withModifiers, wv = window.Vue.createElementVNode, vv = window.Vue.normalizeClass, _v = window.Vue.createElementBlock, Sv = { class: "mw-ui-input__content" };
function yv(e, t, n, s, o, a) {
  const r = gv("mw-icon");
  return Ea(), _v("div", {
    class: vv(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    wv("div", Sv, [
      qu(e.$slots, "icon", {}, () => [
        n.icon ? (Ea(), Cr(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Gu("", !0)
      ]),
      (Ea(), Cr(pv(n.type === "textarea" ? n.type : "input"), hv({
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
        textContent: mv(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      qu(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ea(), Cr(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = fv((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Gu("", !0)
      ])
    ])
  ], 2);
}
const Uc = /* @__PURE__ */ de(dv, [["render", yv]]);
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
const xv = {}, bv = window.Vue.createElementVNode, Cv = window.Vue.openBlock, kv = window.Vue.createElementBlock, $v = { class: "mw-ui-spinner" }, Vv = /* @__PURE__ */ bv("div", { class: "mw-ui-spinner__bounce" }, null, -1), Ev = [
  Vv
];
function Lv(e, t) {
  return Cv(), kv("div", $v, Ev);
}
const dt = /* @__PURE__ */ de(xv, [["render", Lv]]), St = {
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
const Tv = window.Vue.computed, Av = {
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
      default: ph
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
    const n = Tv(() => {
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
}, Xu = window.Vue.normalizeStyle, Wu = window.Vue.openBlock, Dv = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Pv = window.Vue.resolveComponent, Bv = window.Vue.createBlock;
function Fv(e, t, n, s, o, a) {
  const r = Pv("mw-ui-icon");
  return n.thumbnail ? (Wu(), Dv("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Xu(s.style)
  }, null, 4)) : (Wu(), Bv(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Xu(s.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Qc = /* @__PURE__ */ de(Av, [["render", Fv]]);
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
const Nv = {
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
}, Ku = window.Vue.normalizeClass, Yu = window.Vue.normalizeStyle, Mv = window.Vue.createElementVNode, Uv = window.Vue.openBlock, Iv = window.Vue.createElementBlock, Rv = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function zv(e, t, n, s, o, a) {
  return Uv(), Iv("div", {
    class: Ku(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Yu(a.containerStyles)
  }, [
    Mv("div", {
      class: Ku(["mw-progress-bar__bar", a.barClass]),
      style: Yu(a.barStyles)
    }, null, 6)
  ], 14, Rv);
}
const mh = /* @__PURE__ */ de(Nv, [["render", zv]]), Ov = (e, t, n, s) => (o) => {
  const a = o.clientY, r = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), l = (u) => {
    s.value = !1;
    let i = Math.min(
      r + u.clientY - a,
      e.value
    );
    i = Math.max(i, t.value), n.value.style.height = i + "px";
  }, d = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), s.value = !0), document.documentElement.removeEventListener(
      "pointermove",
      l,
      !1
    ), document.documentElement.removeEventListener(
      "pointerup",
      d,
      !1
    );
  };
  document.documentElement.addEventListener("pointermove", l, !1), document.documentElement.addEventListener("pointerup", d, !1);
}, jv = (e, t, n, s) => ({ initiateDrag: Ov(
  e,
  t,
  n,
  s
) }), Hv = window.Vue.ref, Qu = window.Vue.computed, qv = (e, t, n, s) => {
  const o = Hv(0), a = Qu(
    () => t.value > e.value
  ), r = Qu(
    () => t.value <= e.value * (o.value + 1)
  ), l = (u) => {
    o.value = u, n.value.scroll(0, e.value * o.value);
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
const La = window.Vue.ref, Gv = window.Vue.onMounted, Ju = window.Vue.computed, Xv = window.Vue.nextTick, Wv = {
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
    const t = La(!0), n = La(null), s = Ju(
      () => Math.min(e.minHeight, o.value)
    ), o = La(1), { initiateDrag: a } = jv(
      o,
      s,
      n,
      t
    ), {
      isScrolledToEnd: r,
      scrollable: l,
      scrollIndex: d,
      scrollToStepByIndex: u,
      handleArrowUpClick: i
    } = qv(s, o, n, t), c = () => u(d.value + 1), g = La(null), p = Ju(() => ({
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
    return Gv(() => C(this, null, function* () {
      var f;
      yield Xv(), o.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: Q0,
      mwIconExpand: I0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), u(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: d,
      scrollToNextStep: c
    };
  }
}, Kv = window.Vue.renderSlot, Yv = window.Vue.normalizeClass, Ta = window.Vue.createElementVNode, Qv = window.Vue.resolveComponent, Jv = window.Vue.createVNode, kr = window.Vue.openBlock, Zv = window.Vue.createBlock, Zu = window.Vue.createCommentVNode, ed = window.Vue.createElementBlock, e1 = window.Vue.normalizeStyle, t1 = { class: "mw-ui-expandable-content__container" }, n1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, s1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function o1(e, t, n, s, o, a) {
  const r = Qv("mw-button");
  return kr(), ed("div", {
    class: "mw-ui-expandable-content",
    style: e1(s.cssVars)
  }, [
    Ta("div", t1, [
      Ta("div", {
        ref: "contentRef",
        class: Yv(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": s.isCollapsed
        }])
      }, [
        Kv(e.$slots, "default")
      ], 2),
      n.scroll && s.scrollable ? (kr(), ed("div", n1, [
        Jv(r, {
          type: "icon",
          icon: s.mwIconCollapse,
          disabled: s.isCollapsed && s.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: s.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        s.isCollapsed ? (kr(), Zv(r, {
          key: 0,
          type: "icon",
          icon: s.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: s.isScrolledToEnd,
          onClick: s.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Zu("", !0)
      ])) : Zu("", !0)
    ]),
    Ta("div", s1, [
      Ta("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => s.onDragButtonClicked && s.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const a1 = /* @__PURE__ */ de(Wv, [["render", o1]]);
const Aa = window.Vue.computed, i1 = {
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
    const t = Aa(() => e.size / 2 * 0.9), n = Aa(() => Math.PI * (t.value * 2)), s = Aa(
      () => (100 - e.percentage) / 100 * n.value
    ), o = Aa(() => ({
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
}, td = window.Vue.createElementVNode, nd = window.Vue.normalizeStyle, r1 = window.Vue.openBlock, l1 = window.Vue.createElementBlock, c1 = ["width", "height", "viewport"], u1 = ["r", "cx", "cy", "stroke-dasharray"], d1 = ["r", "cx", "cy", "stroke-dasharray"];
function g1(e, t, n, s, o, a) {
  return r1(), l1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: nd(s.cssVars)
  }, [
    td("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: s.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": s.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, u1),
    td("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: s.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": s.dashArray,
      "stroke-dashoffset": "0",
      style: nd({ strokeDashoffset: `${s.strokeDashOffset}px` })
    }, null, 12, d1)
  ], 12, c1);
}
const p1 = /* @__PURE__ */ de(i1, [["render", g1]]), m1 = window.Vue.ref, _n = {
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
  mobile: `only screen and (max-width: ${_n.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${_n.tablet}px) and (max-width: ${_n.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${_n.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${_n.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${_n["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${_n.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${_n["desktop-wide"]}px)`
}, $r = {
  mobile: () => matchMedia($n.mobile).matches,
  tablet: () => matchMedia($n.tablet).matches,
  desktop: () => matchMedia($n.desktop).matches,
  desktopwide: () => matchMedia($n["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia($n["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia($n["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia($n["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia($n["desktop-and-down"]).matches
}, h1 = (e) => {
  const t = Object.values(_n);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, f1 = {
  install: (e) => {
    const t = m1({
      nextBreakpoint: null
    }), n = () => {
      const s = window.innerWidth;
      for (let o in $r)
        $r.hasOwnProperty(o) && (t.value[o] = $r[o]());
      t.value.nextBreakpoint = h1(s);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Ke(ce({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, w1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ke(ce({}, e.config.globalProperties.$mwui || {}), {
      colors: St
    }), e.provide("colors", St);
  }
};
class Xs extends Error {
}
const v1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Xs();
}), hh = { assertUser: v1 };
const _1 = window.Vue.resolveDirective, ro = window.Vue.createElementVNode, sd = window.Vue.withDirectives, S1 = window.Vue.toDisplayString, y1 = window.Vue.unref, od = window.Vue.withCtx, x1 = window.Vue.openBlock, b1 = window.Vue.createBlock, C1 = window.Vue.createCommentVNode, k1 = { class: "pa-4 sx-login-dialog__header" }, $1 = { class: "sx-login-dialog__body px-6 pb-4" }, V1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, E1 = ["href"], L1 = window.Vue.computed, T1 = window.Vue.ref, A1 = window.Vuex.useStore, D1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = A1(), n = L1(() => t.state.application.isLoginDialogOn), s = () => t.commit("application/setIsLoginDialogOn", !1), o = T1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = _1("i18n");
      return n.value ? (x1(), b1(y1(bt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: s
      }, {
        header: od(() => [
          ro("div", k1, [
            sd(ro("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: od(() => [
          sd(ro("div", $1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          ro("div", V1, [
            ro("a", {
              class: "py-1",
              href: o.value,
              target: "_blank"
            }, S1(a.$i18n("cx-sx-login-dialog-button-label")), 9, E1)
          ])
        ]),
        _: 1
      })) : C1("", !0);
    };
  }
}, Y = new mw.cx.SiteMapper(), P1 = mw.util.getUrl, B1 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const s = JSON.parse(mw.cookie.get("ULSGeo"));
  return s && s.latitude + "|" + s.longitude;
}, xn = !mw.config.get("wgMFMode");
class Jc {
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
    status: d,
    targetTitle: u
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = s, this.targetLanguage = o, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = d, this.targetTitle = u;
  }
}
const Da = "original", Pa = "empty", F1 = {
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
      Da,
      Pa
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return F1[t] || t;
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
    return Da;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Pa;
  }
  static isUserMTProvider(t) {
    return [Da, Pa].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === Pa ? "blank" : t === Da ? "source" : t.toLowerCase();
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
const ad = (e) => {
  var n;
  const t = qi(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, qi = (e) => {
  var n, s, o;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((o = (s = t == null ? void 0 : t.parts) == null ? void 0 : s[0]) == null ? void 0 : o.template) || null;
}, us = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), fh = (e) => {
  const t = qi(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: s } = t;
  if (!s)
    return `{{${n}}}`;
  for (const o in s) {
    const a = N1(s[o].wt);
    n += ` | ${o} = ${a}`;
  }
  return `{{${n}}}`;
}, N1 = (e) => {
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
}, wh = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, vh = (e) => {
  const t = wh(e);
  return t == null ? void 0 : t.targetExists;
};
class Vr {
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
class ct {
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
    o && vh(o) && (this.blockTemplateAdaptationInfo[t] = wh(o));
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
    const t = qi(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? ad(this.transclusionNode) : null;
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
    return n && ad(n) || "";
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
    const s = qi(n);
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
      new Vr({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Vr({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && o.push(
      new Vr({
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
const Zc = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), M1 = Zc - 10, U1 = [
  { status: "failure", value: 100 - Zc },
  { status: "warning", value: 100 - M1 },
  { status: "success", value: 100 }
], _h = (e, t, n) => {
  const s = id(e).textContent, o = id(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(o, s, n);
  return Math.ceil(a);
}, I1 = (e) => U1.find((t) => e <= t.value).status, R1 = (e, t) => _h(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), z1 = () => (100 - Zc) / 100, id = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, tn = {
  calculateScore: _h,
  getScoreStatus: I1,
  getMTScoreForPageSection: R1,
  getMtModificationThreshold: z1
}, Ba = "__LEAD_SECTION__";
class Ic {
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
    return Ba;
  }
  static isSectionLead(t) {
    return !t || t === Ba;
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
    return n instanceof ct ? n.transclusionNode.outerHTML : n instanceof qn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof ct ? t.blockTemplateSelected = !1 : t instanceof qn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof ct ? n.blockTemplateSelected = !0 : n instanceof qn && (n.selected = !0);
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
    if (s instanceof ct)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof ct ? n.blockTemplateProposedTranslations[t] || "" : n instanceof qn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof ct ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof qn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
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
    return this.isLeadSection ? Ba : this.originalTitle;
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
    return this.isLeadSection ? Ba : this.title;
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
class Qi extends Jc {
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
    lastUpdatedTimestamp: d,
    status: u,
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
      lastUpdatedTimestamp: d,
      pageRevision: i,
      status: u,
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
    return Ic.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Ic.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const nn = "previous-edits", bn = "popular", We = "topic", ke = "geography", ee = "collections", Qe = "automatic", yt = "seed", rd = window.Vue.ref, { topics: O1, regions: j1 } = mw.loader.require(
  "ext.cx.articlefilters"
), Fa = {
  type: Qe,
  id: nn
}, eu = () => {
  const e = rd(
    O1.flatMap((l) => l.topics).map((l) => l.topicId.toLowerCase())
  ), t = rd(!1), n = (l, d) => e.value.includes(d) ? { type: We, id: d } : null, s = (l, d) => j1.some(
    (i) => i.id.toLowerCase() === d || i.countries.some(
      (c) => c.id.toLowerCase() === d
    )
  ) ? { type: ke, id: d } : null, o = (l, d, u) => u && !u.some((i) => i.name.toLowerCase() === d) ? null : { type: ee, id: l };
  return { filtersValidatorError: t, validateFilters: ({ type: l, id: d }, u = !1) => {
    t.value = !1;
    const i = l == null ? void 0 : l.toLowerCase(), c = d == null ? void 0 : d.toLowerCase();
    if (c === nn)
      return {
        type: Qe,
        id: nn
      };
    if (c === bn)
      return {
        type: Qe,
        id: bn
      };
    if (c === ee)
      return u && !u.length ? (t.value = !0, Fa) : {
        type: Qe,
        id: ee
      };
    if (i === We) {
      const g = n(d, c);
      if (g)
        return g;
      t.value = !0;
    } else if (i === ke) {
      const g = s(d, c);
      if (g)
        return g;
      t.value = !0;
    } else if (i === ee) {
      const g = o(
        d,
        c,
        u
      );
      if (g)
        return g;
      t.value = !0;
    } else if (i === yt)
      return { type: yt, id: d };
    return Fa;
  }, isDefaultFilter: ({ type: l, id: d }) => l === Fa.type && d === Fa.id };
}, H1 = window.Vue.inject, q1 = window.Vue.reactive;
var G1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Sh = { exports: {} };
(function(e, t) {
  (function(n, s) {
    e.exports = s();
  })(G1, function() {
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
    class d {
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
            const E = y(/^\s+/), S = x("|"), F = x(":"), V = x("\\"), A = y(/^./), R = x("$"), K = y(/^\d+/), ie = x('"'), te = x("'"), j = y(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), W = y(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), se = v([re, y(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function re() {
              const L = _([V, A]);
              return L === null ? null : L[1];
            }
            const $e = v([re, W]), Fe = v([re, j]);
            function De() {
              const L = _([R, K]);
              return L === null ? null : ["REPLACE", parseInt(L[1], 10) - 1];
            }
            const Z = (tt = y(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), D = function(L) {
              return L.toString();
            }, () => {
              const L = tt();
              return L === null ? null : D(L);
            });
            var tt, D;
            function M() {
              const L = _([S, b(0, vs)]);
              if (L === null)
                return null;
              const O = L[1];
              return O.length > 1 ? ["CONCAT"].concat(O) : O[0];
            }
            function Q() {
              const L = _([Z, F, De]);
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
            function nt() {
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
            function xa() {
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
              const O = _([z, b(1, dr), E, b(1, ws), oe]);
              return O !== null && (L = ["EXTLINK", O[1].length === 1 ? O[1][0] : ["CONCAT"].concat(O[1]), ["CONCAT"].concat(O[3])]), L;
            }
            const to = y(/^[A-Za-z]+/);
            function cr() {
              const L = y(/^[^"]*/), O = _([ie, L, ie]);
              return O === null ? null : O[1];
            }
            function no() {
              const L = y(/^[^']*/), O = _([te, L, te]);
              return O === null ? null : O[1];
            }
            function so() {
              const L = y(/^\s*=\s*/), O = _([E, to, L, v([cr, no])]);
              return O === null ? null : [O[1], O[3]];
            }
            function ur() {
              const L = b(0, so)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], L);
            }
            const dr = v([nt, De, xa, fs, function() {
              const L = b(1, se)();
              return L === null ? null : L.join("");
            }]), ws = v([nt, De, xa, fs, function() {
              let L = null;
              const O = f, Ne = x("<"), q = y(/^\/?/), ze = y(/^\s*>/), sn = _([Ne, to, ur, q, ze]);
              if (sn === null)
                return null;
              const mt = f, oo = sn[1], ao = b(0, ws)(), lw = f, Au = _([x("</"), to, ze]);
              if (Au === null)
                return ["CONCAT", m.slice(O, mt)].concat(ao);
              const cw = f, uw = Au[1], Du = sn[2];
              if (function(Yn, Ca, gr, pr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Yn = Yn.toLowerCase()) !== (Ca = Ca.toLowerCase()) || pr.allowedHtmlElements.indexOf(Yn) === -1)
                  return !1;
                const dw = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let ka = 0, gw = gr.length; ka < gw; ka += 2) {
                  const mr = gr[ka];
                  if (pr.allowedHtmlCommonAttributes.indexOf(mr) === -1 && (pr.allowedHtmlAttributesByElement[Yn] || []).indexOf(mr) === -1 || mr === "style" && gr[ka + 1].search(dw) !== -1)
                    return !1;
                }
                return !0;
              }(oo, uw, Du.slice(1)))
                L = ["HTMLELEMENT", oo, Du].concat(ao);
              else {
                const Yn = (Ca) => Ca.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                L = ["CONCAT", Yn(m.slice(O, mt))].concat(ao, Yn(m.slice(lw, cw)));
              }
              return L;
            }, function() {
              const L = b(1, Fe)();
              return L === null ? null : L.join("");
            }]), vs = v([nt, De, function() {
              const L = b(1, $e)();
              return L === null ? null : L.join("");
            }]), ba = function() {
              const L = b(0, ws)();
              return L === null ? null : ["CONCAT"].concat(L);
            }();
            if (ba === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return ba;
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
    class u {
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
        this.locale = i, this.parser = new d(this.locale, { wikilinks: p }), this.messageStore = new u(), g && this.load(g, this.locale), this.finalFallback = c, this.wikilinks = p;
      }
      load(i, c) {
        return this.messageStore.load(i, c || this.locale);
      }
      i18n(i, ...c) {
        return this.parser.parse(this.getMessage(i), c);
      }
      setLocale(i) {
        this.locale = i, this.parser = new d(this.locale, { wikilinks: this.wikilinks });
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
})(Sh);
var X1 = Sh.exports;
const ld = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, yh = Symbol("banana-context");
function ge() {
  const e = H1(yh);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function W1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = q1(new X1(e.locale, e));
  return {
    install: (n) => {
      n.provide(yh, t), n.config.globalProperties.$i18n = (s, o) => (o = o || [], Array.isArray(o) || (o = [o]), t.i18n(s, ...o)), n.provide("setLocale", (s) => {
        t.setLocale(s);
      }), n.directive("i18n", (s, o) => {
        const { msg: a, params: r } = ld(o);
        o.modifiers.html ? s.innerHTML = t.i18n(a, ...r) : s.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (s, o) => {
        const { msg: a, params: r } = ld(o);
        s.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Cn = window.Vue.ref, K1 = window.Vue.computed, Ji = Cn(null), Zi = Cn(null), er = Cn(null), ha = Cn(null), tu = Cn(null), tr = Cn(null), xh = Cn(null), bh = Cn(null), nu = Cn(null), { validateFilters: Y1, filtersValidatorError: Q1 } = eu(), Ch = {
  from: Ji,
  to: Zi,
  section: ha,
  draft: tu,
  page: er,
  revision: tr,
  "active-list": nu
}, J1 = K1(() => ({
  type: xh.value,
  id: bh.value
})), kh = (e, t) => {
  xh.value = e, bh.value = t, Gi("filter-type", e), t && Gi("filter-id", t);
}, Z1 = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Qi && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const s in n) {
    const o = n[s];
    t.set(s, o), Ch[s].value = o;
  }
  t.delete("title"), fa(Object.fromEntries(t));
}, su = (e, t) => {
  Ch[e].value = t, Gi(e, t);
}, e_ = (e) => {
  su("section", e);
}, t_ = (e) => {
  su("page", e);
}, n_ = (e) => {
  su("active-list", e);
}, fa = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    P1(`Special:ContentTranslation${t}`, e)
  );
}, s_ = () => {
  const e = ge(), t = new URLSearchParams(location.search);
  er.value = t.get("page"), Ji.value = t.get("from"), Zi.value = t.get("to"), ha.value = t.get("section"), tr.value = t.get("revision"), nu.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = Y1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  kh(n.type, n.id), Q1.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, o_ = () => {
  const e = new URLSearchParams(location.search);
  ha.value = null, e.delete("section"), e.delete("title"), fa(Object.fromEntries(e));
}, Gi = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), fa(Object.fromEntries(n));
}, a_ = (e) => new URLSearchParams(location.search).get(e), i_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Ji.value = e, Zi.value = t, n.delete("title"), fa(Object.fromEntries(n));
}, r_ = () => {
  const e = new URLSearchParams(location.search);
  er.value = null, ha.value = null, tu.value = null, tr.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), fa(Object.fromEntries(e));
}, l_ = () => new URLSearchParams(location.search).get("force-quick-tutorial"), P = () => ({
  isQuickTutorialForced: l_,
  setLanguageURLParams: i_,
  setSectionURLParam: e_,
  setTranslationURLParams: Z1,
  initializeURLState: s_,
  clearTranslationURLParameters: r_,
  clearSectionURLParameter: o_,
  setUrlParam: Gi,
  getUrlParam: a_,
  pageURLParameter: er,
  sourceLanguageURLParameter: Ji,
  targetLanguageURLParameter: Zi,
  sectionURLParameter: ha,
  draftURLParameter: tu,
  revisionURLParameter: tr,
  setPageURLParam: t_,
  currentSuggestionFilters: J1,
  setFilterURLParams: kh,
  activeDashboardTabParameter: nu,
  setActiveDashboardTabParameter: n_
}), $h = window.Vue.ref, cd = $h([]), ud = $h([]);
let dd = !1;
function wa() {
  if (!dd) {
    const e = mw.config.get(
      "wgContentTranslationSupportedLanguages"
    );
    if (!e)
      throw new Error(
        "[CX] No supported languages found in mw.config for wgContentTranslationSupportedLanguages"
      );
    cd.value = e, ud.value = e, dd = !0;
  }
  return {
    supportedSourceLanguageCodes: cd,
    supportedTargetLanguageCodes: ud
  };
}
const c_ = {
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
}, u_ = {
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
}, d_ = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], g_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, p_ = {
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
}, m_ = {
  languages: c_,
  scriptgroups: u_,
  rtlscripts: d_,
  regiongroups: g_,
  territories: p_
};
var Re = m_;
function va(e) {
  return !!Re.languages[e];
}
function Kn(e) {
  return va(e) && Re.languages[e].length === 1 ? Re.languages[e][0] : !1;
}
function h_() {
  return Re.languages;
}
function _a(e) {
  var t = Kn(e);
  return t ? _a(t) : va(e) ? Re.languages[e][0] : "Zyyy";
}
function ou(e) {
  var t = Kn(e);
  return t ? ou(t) : va(e) && Re.languages[e][1] || "UNKNOWN";
}
function da(e) {
  var t = Kn(e);
  return t ? da(t) : va(e) && Re.languages[e][2] || e;
}
function f_() {
  var e, t = {};
  for (e in Re.languages)
    Kn(e) || (t[e] = da(e));
  return t;
}
function Vh(e) {
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
function w_(e) {
  return Vh([e]);
}
function Eh(e) {
  var t;
  for (t in Re.scriptgroups)
    if (Re.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function au(e) {
  return Eh(_a(e));
}
function Lh(e) {
  var t = {}, n, s, o, a;
  for (s = 0; s < e.length; s++)
    n = e[s], o = Kn(n) || n, a = au(o), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Th(e) {
  var t, n, s, o = {};
  for (t in Re.languages)
    if (!Kn(t)) {
      for (n = 0; n < e.length; n++)
        if (ou(t).includes(e[n])) {
          s = au(t), o[s] === void 0 && (o[s] = []), o[s].push(t);
          break;
        }
    }
  return o;
}
function v_(e) {
  return Th([e]);
}
function __(e) {
  var t, n, s, o = [];
  for (t = Lh(e), n = Object.keys(t).sort(), s = 0; s < n.length; s++)
    o = o.concat(t[n[s]]);
  return o;
}
function S_(e, t) {
  var n = da(e) || e, s = da(t) || t;
  return n.toLowerCase() < s.toLowerCase() ? -1 : 1;
}
function Ah(e) {
  return Re.rtlscripts.includes(_a(e));
}
function y_(e) {
  return Ah(e) ? "rtl" : "ltr";
}
function x_(e) {
  return Re.territories[e] || [];
}
function b_(e, t) {
  t.target ? Re.languages[e] = [t.target] : Re.languages[e] = [t.script, t.regions, t.autonym];
}
var I = {
  addLanguage: b_,
  getAutonym: da,
  getAutonyms: f_,
  getDir: y_,
  getGroupOfScript: Eh,
  getLanguages: h_,
  getLanguagesByScriptGroup: Lh,
  getLanguagesByScriptGroupInRegion: v_,
  getLanguagesByScriptGroupInRegions: Th,
  getLanguagesInScript: w_,
  getLanguagesInScripts: Vh,
  getLanguagesInTerritory: x_,
  getRegions: ou,
  getScript: _a,
  getScriptGroupOfLanguage: au,
  isKnown: va,
  isRedirect: Kn,
  isRtl: Ah,
  sortByScriptGroup: __,
  sortByAutonym: S_
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
    pageprops: d,
    pageviews: u,
    thumbnail: i = null,
    title: c,
    revisions: g,
    _alias: p,
    content: m = null,
    sections: h = []
  } = {}) {
    var f;
    this.language = l, this.title = c, this.pageId = r, this.description = t, this.image = o, this.imageName = a, this.pageprops = d, this.pageviews = u, this.thumbnail = i, this.langLinksCount = n, this.articleSize = (f = g == null ? void 0 : g[0]) == null ? void 0 : f.size, this.revision = s, this.alias = p, this.wikidataId = d == null ? void 0 : d.wikibase_item, this.content = m, this.sections = h;
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
class C_ {
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
function k_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const $_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), k_();
  const s = new ve.init.mw.MobileArticleTarget(n), o = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = s.createSurface(o);
  return a.setReadOnly(!0), s.surfaces.push(a), s.setSurface(a), a.initialize(), a;
}, V_ = (e, t) => {
  let n, s;
  return t ? (n = $_(e), s = n.$element.find(
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
}, E_ = (e, t) => {
  const n = Array.from(
    V_(e, t)
  );
  return L_(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (o) => {
      const [a, ...r] = o;
      let l;
      const d = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = !1 : (l = !0, r.unshift(a));
      const u = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (i) => new ct({
          sentences: T_(i),
          node: i
        })
      );
      return new Ic({ id: d, subSections: u, isLeadSection: l });
    }
  );
}, L_ = (e) => {
  const t = e.reduce((n, s) => {
    const o = s.dataset.mwSectionNumber;
    return n[o] = n[o] ? [...n[o], s] : [s], n;
  }, {});
  return Object.values(t);
}, T_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new qn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Dh = {
  convertSegmentedContentToPageSections: E_
}, iu = 120, A_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: iu,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return Y.getApi(e).get(n).then((o) => {
    const a = o.query.pages, l = (o.query.redirects || []).reduce(
      (i, c) => Ke(ce({}, i), { [c.to]: c.from }),
      {}
    ), u = (o.query.normalized || []).reduce(
      (i, c) => Ke(ce({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = u[i.title] || l[i.title] || null;
      return new Ws(Ke(ce({}, i), { _alias: c }));
    });
  });
}, D_ = (e, t) => {
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
    var d, u;
    const a = o.query.pages;
    if (!a || !a.length || (d = a[0]) != null && d.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (u = a[0].pageprops) == null ? void 0 : u.wikibase_item;
    return l ? Object.freeze(new C_(l, r)) : null;
  });
}, P_ = (e, t, n) => {
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
    var d, u;
    return (u = (d = l.langlinks) == null ? void 0 : d[0]) == null ? void 0 : u["*"];
  }).filter((l) => !!l));
}, B_ = (e, t, n, s = null) => {
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
    Y.getApi(e).get(l).then((u) => {
      var i;
      return r(((i = u == null ? void 0 : u.parse) == null ? void 0 : i.sections) || []);
    }).fail(() => r([]));
  }).then(
    (r) => r.filter((l) => l.toclevel === 1).map((l) => ({
      title: l.line,
      id: l.number
    }))
  ), a = F_(
    e,
    t,
    n,
    s
  );
  return Promise.all([a, o]).then(
    ([r, l]) => {
      const d = Dh.convertSegmentedContentToPageSections(
        r,
        !1
        // No need to resolve references. Content can be used as it is
      );
      return d.forEach((u) => {
        const i = l.find((c) => c.id === u.id);
        u.originalTitle = (i == null ? void 0 : i.title) || "";
      }), new Ws({
        sections: d,
        content: r,
        pagelanguage: e,
        title: n
      });
    }
  );
}, F_ = (e, t, n, s = null) => {
  const o = Y.getWikiDomainCode(e), a = Y.getWikiDomainCode(t), r = {
    $sourcelanguage: o,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  s && (r.$revision = s, l += "/$revision");
  const d = Y.getCXServerUrl(
    l,
    r
  );
  return fetch(d).then((u) => u.json()).then((u) => u.segmentedContent);
}, N_ = (e) => {
  const t = B1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: iu,
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
}, M_ = (e, t) => {
  const s = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: iu,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return Y.getApi(t).get(s).then((o) => {
    var a;
    return ((a = o.query) == null ? void 0 : a.pages) || [];
  }).then(
    (o) => o.sort((a, r) => a.index - r.index).map(
      (a) => new Ws(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((o) => (mw.cx.eventlogging.stats.articleSearchFailed(), []));
}, ps = {
  fetchPages: A_,
  fetchLanguageTitles: D_,
  fetchPageContent: B_,
  fetchNearbyPages: N_,
  searchPagesByTitlePrefix: M_,
  fetchLanguageLinksForLanguage: P_
}, U_ = window.Vuex.useStore, Ks = () => {
  const e = U_();
  return (t, n) => {
    n = n.filter(
      (a) => !!a && !e.getters["mediawiki/getPage"](t, a)
    );
    const s = 50, o = [];
    for (let a = 0; a < n.length; a += s) {
      const r = n.slice(a, a + s), l = ps.fetchPages(t, r).then(
        (d) => d.forEach(
          (u) => e.commit("mediawiki/addPage", u)
        )
      );
      o.push(l);
    }
    return Promise.all(o);
  };
}, I_ = window.Vuex.useStore, ru = () => {
  const e = I_(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), { maxSuggestionsPerSlice: o } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(s.value)
  ), r = (u) => a().slice(
    o * u,
    o * (u + 1)
  ), l = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(s.value)
  );
  return {
    getFilteredPageSuggestions: l,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: (u) => l().slice(
      o * u,
      o * (u + 1)
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
    suggestionSeed: d = null,
    suggestionProvider: u = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = s, this.targetTitle = o, this.wikidataId = r, this.size = l, this.langLinksCount = a, this.suggestionProvider = u, this.suggestionSeed = d, this.isListable = !0;
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
    sourceSectionSizes: d = {},
    sourceSections: u = [],
    targetSections: i = [],
    suggestionSeed: c = null,
    isListable: g = !0,
    suggestionProvider: p = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = s, this.targetTitle = o, this.missingSections = r, this.presentSections = a, this.sourceSectionInfo = l, this.sourceSectionSizes = d, this.sourceSections = u, this.targetSections = i, this.suggestionSeed = c, this.isListable = g, this.suggestionProvider = p;
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
const Ph = [
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
], R_ = [
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
], z_ = [
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
], O_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], j_ = [
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
], H_ = {
  en: Ph,
  es: R_,
  bn: z_,
  fr: O_,
  de: j_
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
class lu {
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
class Bh extends ms {
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
    suggestionProvider: d = null,
    collection: u = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: s,
      targetTitle: o,
      langLinksCount: a,
      wikidataId: r,
      size: l,
      suggestionProvider: d
    }), this.collection = new lu(u);
  }
}
class Fh extends en {
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
    sourceSectionSizes: d,
    sourceSections: u = [],
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
      sourceSectionSizes: d,
      sourceSections: u,
      targetSections: i,
      isListable: c,
      suggestionProvider: g
    }), this.collection = new lu(p);
  }
}
let Na = null;
const Nh = (e) => {
  if (Na)
    return Promise.resolve(Na);
  const t = "https://en.wikipedia.org/w/api.php", n = new URLSearchParams({
    action: "query",
    meta: "globaluserinfo",
    guiuser: e,
    guiprop: "editcount",
    formatversion: 2,
    origin: "*",
    format: "json"
  }), s = t + "?" + n;
  return fetch(s).then((o) => o.json()).then((o) => (Na = o.query.globaluserinfo.editcount, Na)).catch((o) => {
    mw.log.error("Error while fetching global edit count for user. ", o);
  });
}, q_ = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits", G_ = () => C(void 0, null, function* () {
  if (mw.user.isAnon())
    return !1;
  const e = mw.user.getName();
  return (yield Nh(e)) < 100;
}), ut = {
  stub: "stub",
  easy: "easy",
  medium: "medium",
  hard: "hard",
  unknown: "unknown"
}, Mh = {
  easy: 2500,
  medium: 1e4,
  hard: 4e4
}, Uh = {
  easy: 1e3,
  medium: 4e3,
  hard: 12e3
}, Ih = (e, t) => !e || e < 0 ? ut.unknown : e < t.easy ? ut.stub : e < t.medium ? ut.easy : e < t.hard ? ut.medium : ut.hard, Rh = (e) => Ih(e, Mh), zh = (e) => Ih(e, Uh), X_ = (e) => {
  if (!e)
    return !1;
  const t = Rh(e);
  return t === ut.stub || t === ut.easy;
}, Oh = (e) => e ? zh(e) === ut.easy : !1, W_ = Ph, K_ = (e, t) => C(void 0, null, function* () {
  if (!(yield G_()))
    return;
  let s;
  e ? e === "/sections" && (s = Uh) : (s = Mh, xn || (t.lead_section = !0)), s && (t.min_size = s[ut.easy], t.max_size = s[ut.medium] - 1);
}), zt = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
  let s = mw.config.get("wgRecommendToolAPIURL");
  yield K_(e, t), e && (s += e);
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
function Y_() {
  return C(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield zt({ urlPostfix: t, urlParams: e })) || [], s = {};
      for (const o in n)
        s[o] = n[o].map(
          (a) => new lu(a)
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
function Q_(e, t, n = null, s = 24) {
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
const J_ = (e, t) => C(void 0, null, function* () {
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
}), Z_ = (e, t) => C(void 0, null, function* () {
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
}), eS = (e, t, n = null) => C(void 0, null, function* () {
  const s = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (s.seed = n), ((yield zt({ urlParams: s })) || []).map(
    (a) => new Bh({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), tS = (e, t, n = null) => C(void 0, null, function* () {
  const s = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (s.seed = n);
  const a = (yield zt({ urlPostfix: "/sections", urlParams: s })) || [];
  return a && a.map(
    (r) => new Fh({
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
function nS(e, t, n) {
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
function sS(e, t, n = null) {
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
function oS(e, t, n, s = 24) {
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
function aS(e, t, n, s = 24) {
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
function iS(e, t, n, s = 24) {
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
function rS(e, t, n, s = 24) {
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
function lS(e) {
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
function cS(e, t) {
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
function uS(e) {
  const t = W_.map((s) => encodeURIComponent(s)).join("|"), n = Y.getCXServerUrl(
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
const dS = (e, t, n) => {
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
}, gS = (e) => {
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
}, pS = () => {
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
  fetchFavorites: pS,
  fetchPageSuggestions: Q_,
  fetchSectionSuggestion: nS,
  fetchSectionSuggestions: sS,
  fetchAppendixTargetSectionTitles: uS,
  fetchArticleSections: cS,
  markFavorite: dS,
  unmarkFavorite: gS,
  fetchUserEdits: lS,
  fetchMostPopularPageSuggestions: J_,
  fetchMostPopularSectionSuggestions: Z_,
  fetchPageSuggestionsByTopics: oS,
  fetchSectionSuggestionsByTopics: aS,
  fetchPageSuggestionsByCountries: iS,
  fetchSectionSuggestionsByCountries: rS,
  fetchPageCollectionGroups: Y_,
  fetchPageSuggestionsByCollections: eS,
  fetchSectionSuggestionsByCollections: tS
}, mS = window.Vuex.useStore, Ys = () => {
  const e = mS(), { sourceLanguage: t, targetLanguage: n } = Te(e), s = (l) => {
    if (!l)
      return !1;
    const d = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((c) => c.sourceTitle);
    return !d.includes(l.sourceTitle) && !i.includes(l.sourceTitle);
  }, o = (l) => {
    const { pageSuggestions: d } = e.state.suggestions;
    return !d.some(
      (i) => i.sourceLanguage === l.sourceLanguage && i.targetLanguage === l.targetLanguage && i.sourceTitle === l.sourceTitle
    ) && s(l);
  }, a = (l) => e.state.suggestions.sectionSuggestions.some(
    (d) => d.sourceLanguage === l.sourceLanguage && d.targetLanguage === l.targetLanguage && d.sourceTitle === l.sourceTitle
  );
  return {
    isPageSuggestionValid: o,
    isSectionSuggestionValid: (l) => {
      if (!l)
        return !1;
      const d = e.state.suggestions.appendixSectionTitles[n.value] || [];
      return !a(l) && s(l) && l.isValid(d);
    },
    sectionSuggestionExists: a
  };
};
class hS {
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
const fS = window.Vuex.useStore, cu = window.Vue.ref, wS = cu([]), vS = cu([]);
let Er = !1, Lr = !1, gd = !1;
const Ma = cu([]);
let lo = null;
const Tr = {
  page: wS,
  section: vS
}, jh = () => {
  const e = fS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), s = () => C(void 0, null, function* () {
    Lr || (Ma.value = yield me.fetchUserEdits(t.value).then((u) => (Lr = !0, u)));
  }), o = () => C(void 0, null, function* () {
    let u = e.getters["translator/getTranslationsByStatus"]("published");
    if (u = u.filter(
      (i) => i.sourceLanguage === t.value
    ), u.length && !Er)
      return Er = !0, u.map(
        (i) => i.sourceTitle
      );
    if (Er = !0, !Lr && (yield s(), Ma.value.length > 0))
      return Ma.value;
    if (!gd) {
      const i = yield me.fetchUserEdits(n.value).then((c) => (gd = !0, c));
      if (i.length)
        return ps.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (u) => {
    let i = Tr[u].value.find(
      (c) => c.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new hS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), Tr[u].value.push(i)), i;
  }, r = () => C(void 0, null, function* () {
    let u = !1, i = [];
    do {
      i = yield o(), i || (u = !0);
      for (const c in Tr) {
        const g = a(c);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!u && !(i != null && i.length));
  }), l = () => lo || (lo = r(), lo.finally(() => {
    lo = null;
  }));
  return {
    getSuggestionSeed: (u) => C(void 0, null, function* () {
      let i = a(u);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: s,
    previousEditsInSource: Ma
  };
}, _S = 5;
function gs(e) {
  return C(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < _S);
  });
}
const SS = window.Vuex.useStore, yS = () => {
  const e = SS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), { getSuggestionSeed: s } = jh(), {
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
}, xS = window.Vuex.useStore, bS = () => {
  const e = xS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), s = {
    id: bn,
    type: Qe
  }, {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys();
  return { fetchSectionSuggestionsPopular: (u) => C(void 0, null, function* () {
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
      return g = g.slice(0, u), i.push(...g), p.forEach((m) => {
        m && !r(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.length >= u;
    })), i.forEach(
      (c) => c.suggestionProvider = s
    ), i;
  }), fetchPageSuggestionsPopular: (u) => C(void 0, null, function* () {
    const i = [];
    return yield gs(() => C(void 0, null, function* () {
      let c = yield me.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, u), i.push(...c), i.length >= u;
    })), i.forEach(
      (c) => c.suggestionProvider = s
    ), i;
  }) };
}, Hh = window.Vue.ref, co = "ungrouped", pd = Hh({}), md = Hh(!1), uu = () => ({
  fetchPageCollectionGroups: () => C(void 0, null, function* () {
    try {
      const t = yield me.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((s, o) => s === co ? 1 : o === co ? -1 : s.localeCompare(o)).map((s) => [s, t[s]])
      );
      n[co] && (n[co] = n[co].sort(
        (s, o) => s.name.localeCompare(o.name)
      )), pd.value = n, md.value = !0;
    } catch (t) {
      mw.log.error("Failed to fetch page collections", t);
    }
  }),
  pageCollectionGroupsFetched: md,
  pageCollectionGroups: pd
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
const CS = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', kS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', $S = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', VS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', ES = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', LS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', TS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', AS = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', DS = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', PS = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', BS = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', FS = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', NS = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', MS = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', US = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', IS = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', RS = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', zS = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', OS = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', qh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', jS = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', HS = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', qS = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', GS = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', XS = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', WS = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', KS = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', YS = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', QS = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', JS = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', ZS = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', ey = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', ty = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', ny = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', sy = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Gh = CS, oy = kS, Xh = {
  ltr: $S,
  shouldFlip: !0
}, Wh = {
  ltr: VS,
  shouldFlip: !0
}, du = {
  ltr: ES,
  shouldFlip: !0
}, Kh = LS, Yh = TS, Qh = AS, ay = DS, iy = PS, Qs = BS, ry = FS, gu = NS, pu = MS, Rc = US, ly = IS, cy = {
  ltr: RS,
  shouldFlip: !0
}, uy = {
  ltr: zS,
  shouldFlip: !0
}, dy = OS, gy = {
  langCodeMap: {
    ar: qh
  },
  default: jS
}, py = {
  langCodeMap: {
    ar: qh
  },
  default: HS
}, Jh = qS, nr = {
  ltr: GS,
  shouldFlip: !0
}, my = XS, hy = WS, Sa = {
  ltr: KS,
  shouldFlip: !0
}, mu = {
  ltr: YS,
  shouldFlip: !0
}, fy = {
  ltr: QS,
  shouldFlip: !0
}, Zh = JS, wy = ZS, zc = ey, vy = ty, _y = ny, ef = sy, Sy = {
  [nn]: ef,
  [bn]: dy,
  [ee]: du
}, yy = {
  [ee]: uy,
  [ke]: my
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
    return Sy[this.provider] || null;
  }
  get expandableIcon() {
    return yy[this.provider] || this.icon;
  }
}
const uo = window.Vue.computed, { topics: hd, regions: fd } = mw.loader.require(
  "ext.cx.articlefilters"
), xy = (e) => new ra({
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
}), sr = () => {
  const e = ge(), { currentSuggestionFilters: t, setFilterURLParams: n } = P(), { validateFilters: s, filtersValidatorError: o } = eu(), a = new Rt({
    id: nn,
    type: Qe,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), r = new Rt({
    id: bn,
    type: Qe,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), l = new Rt({
    id: ee,
    type: Qe,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: d, pageCollectionGroupsFetched: u } = uu(), i = uo(() => {
    const S = new ra({
      id: Qe,
      type: Qe,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [a, r]
    });
    return Object.keys(d.value).length > 1 && S.filters.push(l), S;
  }), c = () => {
    const S = ce({}, d.value);
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
    const V = (d.value.ungrouped || []).map(
      (A) => new Rt({
        id: A.name,
        label: A.name,
        type: ee
      })
    );
    return [...F, ...V];
  }, g = uo(
    () => new ra({
      id: ee,
      type: ee,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: c()
    })
  ), p = uo(() => new ra({
    id: ke,
    type: ke,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: fd.map(
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
  })), m = uo(() => {
    const S = [
      i.value,
      ...hd.map(xy),
      p.value
    ];
    return g.value.filters.length && S.splice(1, 0, g.value), S;
  }), h = uo(
    () => [t.value.type, t.value.id].includes(
      ee
    ) && !u.value
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
      const V = hd.flatMap((A) => A.topics).find((A) => A.topicId === S);
      return V ? V.articletopics : [];
    },
    waitingForPageCollectionsFetch: h,
    findSelectedFilter: _,
    validateURLFilterWithCollections: () => {
      if (!u.value)
        return;
      const S = Object.values(d.value).flat(), F = s(
        {
          type: t.value.type,
          id: t.value.id
        },
        S
      );
      n(F.type, F.id), o.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (S) => {
      const F = fd.find((V) => V.id === S);
      return F ? F.countries.map((V) => V.id) : [S];
    }
  };
}, by = window.Vuex.useStore, Cy = () => {
  const e = by(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys(), { getArticleTopics: l } = sr();
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
}, ky = window.Vuex.useStore, $y = () => {
  const e = ky(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys(), { getCountries: l } = sr();
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
}, Vy = window.Vuex.useStore, Ey = window.Vue.computed, Ly = () => {
  const e = Vy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), o = Ey(() => {
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
}, Ty = window.Vuex.useStore, Ay = () => {
  const e = Ty(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys();
  return {
    fetchPageSuggestionsBySeed: (u) => C(void 0, null, function* () {
      const i = s.value.id;
      let c = yield me.fetchPageSuggestions(
        t.value,
        n.value,
        i
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, u), c.forEach(
        (g) => g.suggestionProvider = {
          id: i,
          type: yt
        }
      ), c;
    }),
    fetchSectionSuggestionsBySeed: (u) => C(void 0, null, function* () {
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
        return p = p.slice(0, u), i.push(...p), m.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), i.length >= u;
      })), i.forEach(
        (g) => g.suggestionProvider = {
          id: c,
          type: yt
        }
      ), i;
    })
  };
}, Dy = () => {
  const { currentSuggestionFilters: e } = P(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = yS(), { fetchPageSuggestionsPopular: s, fetchSectionSuggestionsPopular: o } = bS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = Cy(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: d
  } = $y(), {
    fetchPageSuggestionsByCollections: u,
    fetchSectionSuggestionsByCollections: i
  } = Ly(), { fetchPageSuggestionsBySeed: c, fetchSectionSuggestionsBySeed: g } = Ay(), p = {
    [nn]: t,
    [bn]: s,
    [ee]: u,
    [We]: a,
    [ke]: l,
    [yt]: c
  }, m = {
    [nn]: n,
    [bn]: o,
    [ee]: i,
    [We]: r,
    [ke]: d,
    [yt]: g
  }, h = (_) => _.type === Qe ? _.id : _.type;
  return {
    getCurrentPageSuggestionProvider: () => p[h(e.value)],
    getCurrentSectionSuggestionProvider: () => m[h(e.value)]
  };
}, Py = window.Vuex.useStore, hu = () => {
  const e = Py(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = ru(), { sourceLanguageURLParameter: s } = P(), o = Ks(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: d
  } = Dy(), u = (g) => {
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
      const g = a(), m = yield d()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), u(m), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const g = r(), m = yield l()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), u(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, By = window.Vuex.useStore, tf = () => {
  const e = By();
  return (t) => C(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield me.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, Fy = window.Vuex.useStore, nf = () => {
  const e = Fy(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = hu(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: o } = ru(), { targetLanguageURLParameter: a } = P(), r = tf();
  return () => C(void 0, null, function* () {
    const l = o(0), d = s(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, i = l.length === u, c = d.length === u;
    i && c || (yield r(a.value), t(), n());
  });
}, Ny = window.Vuex.useStore, Ar = /* @__PURE__ */ new Map(), or = () => {
  const e = Ny(), t = Ks();
  return (n, s, o) => C(void 0, null, function* () {
    const a = `${n}:${s}:${o}`;
    if (Ar.has(a))
      return Ar.get(a);
    const l = (() => C(void 0, null, function* () {
      let d = e.getters["suggestions/getSectionSuggestionsForArticle"](n, s, o);
      if (!d) {
        d = yield me.fetchSectionSuggestion(
          n,
          o,
          s
        );
        try {
          if (yield t(n, [o]), d)
            d.isListable = !1, e.commit("suggestions/addSectionSuggestion", d);
          else {
            const u = e.getters["mediawiki/getPage"](
              n,
              o
            );
            return new ms({
              sourceLanguage: n,
              targetLanguage: s,
              sourceTitle: o,
              langLinksCount: u.langLinksCount,
              size: u.articleSize,
              wikidataId: u.wikidataId
            });
          }
        } catch (u) {
          const i = new Error(
            `No page metadata found for title ${o} and language pair ${n}-${s}. ${u}`
          );
          throw mw.errorLogger.logError(i, "error.contenttranslation"), i;
        }
      }
      return d;
    }))();
    return Ar.set(a, l), l;
  });
}, wd = window.Vue.computed, My = window.Vuex.useStore, kn = () => {
  const e = My(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s
  } = P(), o = wd(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      s.value
    )
  ), a = wd(() => o.value ? o.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: o,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, d) => o.value.getTitleForLanguage(l) || o.value.getTitleForLanguage(d)
  };
}, sf = window.Vuex.useStore, { setLanguageURLParams: Uy } = P(), fu = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), Uy(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, of = () => {
  const e = sf(), t = nf();
  return (n, s) => {
    const { sourceLanguage: o, targetLanguage: a } = Te(e);
    n === s && (n = a.value, s = o.value), fu(e, n, s), t();
  };
}, Iy = () => {
  const e = sf(), t = or(), { currentLanguageTitleGroup: n, targetPageExists: s } = kn(), o = Ks();
  return (a, r) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: d,
      setPageURLParam: u,
      clearSectionURLParameter: i
    } = P();
    a === r && (a = d.value, r = l.value);
    const c = n.value.getTitleForLanguage(a);
    fu(e, a, r), u(c), s.value ? (i(), yield t(
      l.value,
      d.value,
      c
    )) : yield o(l.value, [c]);
  });
}, Ry = window.Vuex.useStore, zy = window.Vue.ref, vd = zy(!1), af = () => {
  const e = Ry(), { supportedSourceLanguageCodes: t, supportedTargetLanguageCodes: n } = wa(), { sourceLanguageURLParameter: s, targetLanguageURLParameter: o } = P(), a = () => {
    const l = Y.getCurrentWikiLanguageCode(), d = (h) => t.value.includes(h), u = (h) => n.value.includes(h), i = {
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
      (h) => u(h)
    );
    return { sourceLanguage: g.find(
      (h) => d(h) && h !== p
    ), targetLanguage: p };
  };
  return { initializeApplicationLanguages: () => {
    const { sourceLanguage: l, targetLanguage: d } = a();
    fu(e, l, d), vd.value = !0;
  }, applicationLanguagesInitialized: vd };
};
const Oy = window.Vue.resolveDynamicComponent, _d = window.Vue.openBlock, Sd = window.Vue.createBlock, jy = window.Vue.Transition, go = window.Vue.withCtx, po = window.Vue.createVNode, Hy = window.Vue.resolveComponent, Dr = window.Vue.unref, qy = window.Vuex.useStore, yd = window.Vue.computed, Gy = window.Vue.onMounted, Xy = window.Vue.inject, Wy = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = P(), { initializeApplicationLanguages: n } = af();
    t(), n();
    const s = Xy("breakpoints"), o = yd(() => s.value.mobile), a = qy(), r = yd(
      () => a.state.application.autoSavePending
    );
    return Gy(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && hh.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((d) => {
          d instanceof Xs && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, d) => {
      const u = Hy("router-view");
      return _d(), Sd(Dr(w0), { id: "contenttranslation" }, {
        default: go(() => [
          po(Dr(U), { class: "cx-container" }, {
            default: go(() => [
              po(Dr(k), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: go(() => [
                  po(u, null, {
                    default: go(({ Component: i, route: c }) => [
                      po(jy, {
                        name: o.value ? c.meta.transitionName : ""
                      }, {
                        default: go(() => [
                          (_d(), Sd(Oy(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      po(D1)
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
}, Ky = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, Yy = {
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
class rf {
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
    this.text = t, this.title = n, this.type = s, this.status = o, this.details = a && new rf(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const xd = (e) => {
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
class Qy {
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
    const t = xd((o = this.user) == null ? void 0 : o.content), n = xd((a = this.mt) == null ? void 0 : a.content);
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
class wu extends Jc {
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
    status: d,
    targetTitle: u,
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
      status: d,
      targetTitle: u
    }), this.targetUrl = i, this.sectionTranslations = c;
  }
}
const ar = mw.user.isAnon() ? void 0 : "user", lf = (e) => {
  if (e === "assertuserfailed")
    throw new Xs();
};
function cf(e, t = null) {
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
        (d) => new Qi(Ke(ce({}, d), { status: e }))
      ) : r = a.map(
        (d) => new wu(Ke(ce({}, d), { status: e }))
      ), (l = o.continue) != null && l.offset) {
        const d = yield cf(
          e,
          o.continue.offset
        );
        r = r.concat(d);
      }
      return r;
    }));
  });
}
function Jy(e) {
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
      (a) => new Qy(a)
    );
  });
}
function Zy(e, t, n, s, o) {
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
    ).then(([l, d]) => {
      var i, c;
      if (!d) {
        const g = l.detail || l.type || l.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(g);
      }
      return (c = (i = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(l.contents)) == null ? void 0 : i.groups) == null ? void 0 : c.content;
    }).catch((l) => Promise.reject(l));
  });
}
const ex = (e, t, n) => {
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
}, tx = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: s,
  targetSectionTitle: o,
  sourceLanguage: a,
  targetLanguage: r,
  revision: l,
  captchaId: d,
  captchaWord: u,
  publishTarget: i,
  sectionTranslationId: c,
  existingSectionTitle: g
}) => {
  const p = {
    assert: ar,
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
  return d && (p.captchaid = d, p.captchaword = u), new mw.Api().postWithToken("csrf", p).then((h) => {
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
    lf(h);
    let v;
    return f = f || {}, f.exception ? v = f.exception.message : f.error ? v = f.error.info : v = "Unknown error", {
      publishFeedbackMessage: new Xn({
        text: v,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, nx = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: s,
  sourceLanguage: o,
  targetLanguage: a,
  revision: r,
  units: l,
  sectionId: d,
  isSandbox: u,
  progress: i
}) => {
  const c = {
    assert: ar,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: r,
    sourcesectiontitle: n,
    targetsectiontitle: s,
    sourcelanguage: o,
    targetlanguage: a,
    content: JSON.stringify(l),
    sectionid: d,
    issandbox: u,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", c).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    lf(p);
    let h;
    return m.exception ? (h = m.exception.message, mw.cx.eventlogging.stats.saveFailure(!0)) : m.error ? (h = m.error.info, m.error.code && m.error.code.indexOf("internal_api_error") === 0 && mw.cx.eventlogging.stats.saveFailure(!0)) : (h = "Unknown error", mw.cx.eventlogging.stats.saveFailure(!0)), new Xn({ text: h, status: "error" });
  });
}, sx = (e) => {
  const t = {
    assert: ar,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((s) => s.cxsplit.result === "success");
}, ox = () => {
  const e = {
    assert: ar,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new wu(n.cxcheckunreviewed.translation)
  );
}, ax = (e, t, n) => {
  const s = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", s).then(() => !0).catch(() => !1);
}, ix = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, rx = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), xt = {
  fetchTranslations: cf,
  fetchTranslationUnits: Jy,
  fetchSegmentTranslation: Zy,
  parseTemplateWikitext: ex,
  publishTranslation: tx,
  saveTranslation: nx,
  deleteTranslation: ax,
  fetchTranslatorStats: rx,
  deleteCXTranslation: ix,
  splitTranslation: sx,
  checkUnreviewedTranslations: ox
};
function lx(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield xt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const cx = {
  fetchTranslatorStats: lx
}, ux = {
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
}, dx = {
  namespaced: !0,
  state: Ky,
  getters: Yy,
  actions: cx,
  mutations: ux
}, gx = {
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
  appendixSectionTitles: H_
}, px = {
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
}, mx = {
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
}, hx = {
  namespaced: !0,
  state: gx,
  getters: px,
  actions: {},
  mutations: mx
}, fx = {
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
}, wx = {
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
function vx(s) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: o } = t.application;
    if ((r = n.nearbyPages[o]) != null && r.length)
      return;
    const a = yield ps.fetchNearbyPages(o);
    e("addNearbyPages", { language: o, pages: a });
  });
}
const _x = { fetchNearbyPages: vx }, Sx = {
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
}, yx = {
  namespaced: !0,
  state: fx,
  getters: wx,
  actions: _x,
  mutations: Sx
}, xx = {
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
}, bx = {
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
}, Cx = {
  namespaced: !0,
  state: xx,
  mutations: bx
}, kx = window.Vuex.createStore, $x = kx({
  modules: { translator: dx, suggestions: hx, mediawiki: yx, application: Cx }
});
function Vx() {
  return uf().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function uf() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Ex = typeof Proxy == "function", Lx = "devtools-plugin:setup", Tx = "plugin:settings:set";
let Ss, Oc;
function Ax() {
  var e;
  return Ss !== void 0 || (typeof window != "undefined" && window.performance ? (Ss = !0, Oc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Ss = !0, Oc = global.perf_hooks.performance) : Ss = !1), Ss;
}
function Dx() {
  return Ax() ? Oc.now() : Date.now();
}
class Px {
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
        return Dx();
      }
    }, n && n.on(Tx, (r, l) => {
      r === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (r, l) => this.target ? this.target.on[l] : (...d) => {
        this.onQueue.push({
          method: l,
          args: d
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (r, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...d) => (this.targetQueue.push({
        method: l,
        args: d,
        resolve: () => {
        }
      }), this.fallbacks[l](...d)) : (...d) => new Promise((u) => {
        this.targetQueue.push({
          method: l,
          args: d,
          resolve: u
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
function Bx(e, t) {
  const n = e, s = uf(), o = Vx(), a = Ex && n.enableEarlyProxy;
  if (o && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    o.emit(Lx, e, t);
  else {
    const r = a ? new Px(n, o) : null;
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
const df = window.Vue.getCurrentInstance, qs = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Zt = window.Vue.computed, la = window.Vue.unref, Fx = window.Vue.watchEffect, gf = window.Vue.defineComponent, Nx = window.Vue.reactive, pf = window.Vue.h, Pr = window.Vue.provide, Mx = window.Vue.ref, mf = window.Vue.watch, Ux = window.Vue.shallowRef, Ix = window.Vue.shallowReactive, Rx = window.Vue.nextTick, yn = typeof window != "undefined";
function zx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const J = Object.assign;
function Br(e, t) {
  const n = {};
  for (const s in t) {
    const o = t[s];
    n[s] = gt(o) ? o.map(e) : e(o);
  }
  return n;
}
const ca = () => {
}, gt = Array.isArray;
function X(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Ox = /\/$/, jx = (e) => e.replace(Ox, "");
function Fr(e, t, n = "/") {
  let s, o = {}, a = "", r = "";
  const l = t.indexOf("#");
  let d = t.indexOf("?");
  return l < d && l >= 0 && (d = -1), d > -1 && (s = t.slice(0, d), a = t.slice(d + 1, l > -1 ? l : t.length), o = e(a)), l > -1 && (s = s || t.slice(0, l), r = t.slice(l, t.length)), s = Gx(s != null ? s : t, n), {
    fullPath: s + (a && "?") + a + r,
    path: s,
    query: o,
    hash: r
  };
}
function Hx(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function bd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Cd(e, t, n) {
  const s = t.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && Wn(t.matched[s], n.matched[o]) && hf(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Wn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function hf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!qx(e[n], t[n]))
      return !1;
  return !0;
}
function qx(e, t) {
  return gt(e) ? kd(e, t) : gt(t) ? kd(t, e) : e === t;
}
function kd(e, t) {
  return gt(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Gx(e, t) {
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
function Xx(e) {
  if (!e)
    if (yn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), jx(e);
}
const Wx = /^[^#]+#/;
function Kx(e, t) {
  return e.replace(Wx, "#") + t;
}
function Yx(e, t) {
  const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  };
}
const ir = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Qx(e) {
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
    t = Yx(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function $d(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const jc = /* @__PURE__ */ new Map();
function Jx(e, t) {
  jc.set(e, t);
}
function Zx(e) {
  const t = jc.get(e);
  return jc.delete(e), t;
}
let eb = () => location.protocol + "//" + location.host;
function ff(e, t) {
  const { pathname: n, search: s, hash: o } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = o.includes(e.slice(a)) ? e.slice(a).length : 1, d = o.slice(l);
    return d[0] !== "/" && (d = "/" + d), bd(d, "");
  }
  return bd(n, e) + s + o;
}
function tb(e, t, n, s) {
  let o = [], a = [], r = null;
  const l = ({ state: g }) => {
    const p = ff(e, location), m = n.value, h = t.value;
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
  function d() {
    r = n.value;
  }
  function u(g) {
    o.push(g);
    const p = () => {
      const m = o.indexOf(g);
      m > -1 && o.splice(m, 1);
    };
    return a.push(p), p;
  }
  function i() {
    const { history: g } = window;
    g.state && g.replaceState(J({}, g.state, { scroll: ir() }), "");
  }
  function c() {
    for (const g of a)
      g();
    a = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", i);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", i, {
    passive: !0
  }), {
    pauseListeners: d,
    listen: u,
    destroy: c
  };
}
function Vd(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? ir() : null
  };
}
function nb(e) {
  const { history: t, location: n } = window, s = {
    value: ff(e, n)
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
  function a(d, u, i) {
    const c = e.indexOf("#"), g = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + d : eb() + e + d;
    try {
      t[i ? "replaceState" : "pushState"](u, "", g), o.value = u;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? X("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(d, u) {
    const i = J({}, t.state, Vd(
      o.value.back,
      // keep back and forward entries but override current position
      d,
      o.value.forward,
      !0
    ), u, { position: o.value.position });
    a(d, i, !0), s.value = d;
  }
  function l(d, u) {
    const i = J(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: d,
        scroll: ir()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && X(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = J({}, Vd(s.value, d, null), { position: i.position + 1 }, u);
    a(d, c, !1), s.value = d;
  }
  return {
    location: s,
    state: o,
    push: l,
    replace: r
  };
}
function sb(e) {
  e = Xx(e);
  const t = nb(e), n = tb(e, t.state, t.location, t.replace);
  function s(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const o = J({
    // it's overridden right after
    location: "",
    base: e,
    go: s,
    createHref: Kx.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function ob(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && X(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), sb(e);
}
function ab(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function wf(e) {
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
}, Hc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Ed;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ed || (Ed = {}));
const ib = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${lb(t)}" via a navigation guard.`;
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
  return {}.NODE_ENV !== "production" ? J(new Error(ib[e](t)), {
    type: e,
    [Hc]: !0
  }, t) : J(new Error(), {
    type: e,
    [Hc]: !0
  }, t);
}
function on(e, t) {
  return e instanceof Error && Hc in e && (t == null || !!(e.type & t));
}
const rb = ["params", "query", "hash"];
function lb(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of rb)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Ld = "[^/]+?", cb = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, ub = /[.+*?^${}()[\]/\\]/g;
function db(e, t) {
  const n = J({}, cb, t), s = [];
  let o = n.start ? "^" : "";
  const a = [];
  for (const u of e) {
    const i = u.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !u.length && (o += "/");
    for (let c = 0; c < u.length; c++) {
      const g = u[c];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        c || (o += "/"), o += g.value.replace(ub, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: v } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const _ = v || Ld;
        if (_ !== Ld) {
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
        f && u.length < 2 ? `(?:/${b})` : "/" + b), f && (b += "?"), o += b, p += 20, f && (p += -8), h && (p += -20), _ === ".*" && (p += -50);
      }
      i.push(p);
    }
    s.push(i);
  }
  if (n.strict && n.end) {
    const u = s.length - 1;
    s[u][s[u].length - 1] += 0.7000000000000001;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
  const r = new RegExp(o, n.sensitive ? "" : "i");
  function l(u) {
    const i = u.match(r), c = {};
    if (!i)
      return null;
    for (let g = 1; g < i.length; g++) {
      const p = i[g] || "", m = a[g - 1];
      c[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return c;
  }
  function d(u) {
    let i = "", c = !1;
    for (const g of e) {
      (!c || !i.endsWith("/")) && (i += "/"), c = !1;
      for (const p of g)
        if (p.type === 0)
          i += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: h, optional: f } = p, v = m in u ? u[m] : "";
          if (gt(v) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = gt(v) ? v.join("/") : v;
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
    stringify: d
  };
}
function gb(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s)
      return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function pb(e, t) {
  let n = 0;
  const s = e.score, o = t.score;
  for (; n < s.length && n < o.length; ) {
    const a = gb(s[n], o[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (Td(s))
      return 1;
    if (Td(o))
      return -1;
  }
  return o.length - s.length;
}
function Td(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const mb = {
  type: 0,
  value: ""
}, hb = /[a-zA-Z0-9_]/;
function fb(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[mb]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${u}": ${p}`);
  }
  let n = 0, s = n;
  const o = [];
  let a;
  function r() {
    a && o.push(a), a = [];
  }
  let l = 0, d, u = "", i = "";
  function c() {
    u && (n === 0 ? a.push({
      type: 0,
      value: u
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (d === "*" || d === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: u,
      regexp: i,
      repeatable: d === "*" || d === "+",
      optional: d === "*" || d === "?"
    })) : t("Invalid state to consume buffer"), u = "");
  }
  function g() {
    u += d;
  }
  for (; l < e.length; ) {
    if (d = e[l++], d === "\\" && n !== 2) {
      s = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        d === "/" ? (u && c(), r()) : d === ":" ? (c(), n = 1) : g();
        break;
      case 4:
        g(), n = s;
        break;
      case 1:
        d === "(" ? n = 2 : hb.test(d) ? g() : (c(), n = 0, d !== "*" && d !== "?" && d !== "+" && l--);
        break;
      case 2:
        d === ")" ? i[i.length - 1] == "\\" ? i = i.slice(0, -1) + d : n = 3 : i += d;
        break;
      case 3:
        c(), n = 0, d !== "*" && d !== "?" && d !== "+" && l--, i = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), c(), r(), o;
}
function wb(e, t, n) {
  const s = db(fb(e.path), n);
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
function vb(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = Pd({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(i) {
    return s.get(i);
  }
  function a(i, c, g) {
    const p = !g, m = _b(i);
    ({}).NODE_ENV !== "production" && bb(m, c), m.aliasOf = g && g.record;
    const h = Pd(t, i), f = [
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
      if (v = wb(b, c, h), {}.NODE_ENV !== "production" && c && x[0] === "/" && Cb(v, c), g ? (g.alias.push(v), {}.NODE_ENV !== "production" && xb(g, v)) : (_ = _ || v, _ !== v && _.alias.push(v), p && i.name && !Dd(v) && r(i.name)), m.children) {
        const y = m.children;
        for (let E = 0; E < y.length; E++)
          a(y[E], v, g && g.children[E]);
      }
      g = g || v, (v.record.components && Object.keys(v.record.components).length || v.record.name || v.record.redirect) && d(v);
    }
    return _ ? () => {
      r(_);
    } : ca;
  }
  function r(i) {
    if (wf(i)) {
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
  function d(i) {
    let c = 0;
    for (; c < n.length && pb(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !vf(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !Dd(i) && s.set(i.record.name, i);
  }
  function u(i, c) {
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
        Ad(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((_) => !_.optional).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Ad(i.params, g.keys.map((_) => _.name))
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
      meta: yb(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: u, removeRoute: r, getRoutes: l, getRecordMatcher: o };
}
function Ad(e, t) {
  const n = {};
  for (const s of t)
    s in e && (n[s] = e[s]);
  return n;
}
function _b(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Sb(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Sb(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const s in e.components)
      t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function Dd(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function yb(e) {
  return e.reduce((t, n) => J(t, n.meta), {});
}
function Pd(e, t) {
  const n = {};
  for (const s in e)
    n[s] = s in t ? t[s] : e[s];
  return n;
}
function qc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function xb(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(qc.bind(null, n)))
      return X(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(qc.bind(null, n)))
      return X(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function bb(e, t) {
  t && t.record.name && !e.name && !e.path && X(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Cb(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(qc.bind(null, n)))
      return X(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function vf(e, t) {
  return t.children.some((n) => n === e || vf(e, n));
}
const _f = /#/g, kb = /&/g, $b = /\//g, Vb = /=/g, Eb = /\?/g, Sf = /\+/g, Lb = /%5B/g, Tb = /%5D/g, yf = /%5E/g, Ab = /%60/g, xf = /%7B/g, Db = /%7C/g, bf = /%7D/g, Pb = /%20/g;
function vu(e) {
  return encodeURI("" + e).replace(Db, "|").replace(Lb, "[").replace(Tb, "]");
}
function Bb(e) {
  return vu(e).replace(xf, "{").replace(bf, "}").replace(yf, "^");
}
function Gc(e) {
  return vu(e).replace(Sf, "%2B").replace(Pb, "+").replace(_f, "%23").replace(kb, "%26").replace(Ab, "`").replace(xf, "{").replace(bf, "}").replace(yf, "^");
}
function Fb(e) {
  return Gc(e).replace(Vb, "%3D");
}
function Nb(e) {
  return vu(e).replace(_f, "%23").replace(Eb, "%3F");
}
function Mb(e) {
  return e == null ? "" : Nb(e).replace($b, "%2F");
}
function pa(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && X(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Ub(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < s.length; ++o) {
    const a = s[o].replace(Sf, " "), r = a.indexOf("="), l = pa(r < 0 ? a : a.slice(0, r)), d = r < 0 ? null : pa(a.slice(r + 1));
    if (l in t) {
      let u = t[l];
      gt(u) || (u = t[l] = [u]), u.push(d);
    } else
      t[l] = d;
  }
  return t;
}
function Bd(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = Fb(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (gt(s) ? s.map((a) => a && Gc(a)) : [s && Gc(s)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function Ib(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = gt(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const Rb = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Fd = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), rr = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Cf = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Xc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function mo() {
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
    const d = (c) => {
      c === !1 ? l(Gs(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : ab(c) ? l(Gs(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === a && typeof c == "function" && a.push(c), r());
    }, u = e.call(s && s.instances[o], t, n, {}.NODE_ENV !== "production" ? zb(d, t, n) : d);
    let i = Promise.resolve(u);
    if (e.length < 3 && (i = i.then(d)), {}.NODE_ENV !== "production" && e.length > 2) {
      const c = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        i = i.then((g) => d._called ? g : (X(c), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !d._called) {
        X(c), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((c) => l(c));
  });
}
function zb(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && X(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function Nr(e, t, n, s) {
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
          const d = l;
          l = () => d;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, X(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (Ob(l)) {
          const u = (l.__vccOpts || l)[t];
          u && o.push(Gn(u, n, s, a, r));
        } else {
          let d = l();
          ({}).NODE_ENV !== "production" && !("catch" in d) && (X(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), d = Promise.resolve(d)), o.push(() => d.then((u) => {
            if (!u)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = zx(u) ? u.default : u;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && Gn(g, n, s, a, r)();
          }));
        }
    }
  }
  return o;
}
function Ob(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Nd(e) {
  const t = qs(rr), n = qs(Cf), s = Zt(() => t.resolve(la(e.to))), o = Zt(() => {
    const { matched: d } = s.value, { length: u } = d, i = d[u - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const g = c.findIndex(Wn.bind(null, i));
    if (g > -1)
      return g;
    const p = Md(d[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Md(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(Wn.bind(null, d[u - 2])) : g
    );
  }), a = Zt(() => o.value > -1 && Gb(n.params, s.value.params)), r = Zt(() => o.value > -1 && o.value === n.matched.length - 1 && hf(n.params, s.value.params));
  function l(d = {}) {
    return qb(d) ? t[la(e.replace) ? "replace" : "push"](
      la(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ca) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && yn) {
    const d = df();
    if (d) {
      const u = {
        route: s.value,
        isActive: a.value,
        isExactActive: r.value
      };
      d.__vrl_devtools = d.__vrl_devtools || [], d.__vrl_devtools.push(u), Fx(() => {
        u.route = s.value, u.isActive = a.value, u.isExactActive = r.value;
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
const jb = /* @__PURE__ */ gf({
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
  useLink: Nd,
  setup(e, { slots: t }) {
    const n = Nx(Nd(e)), { options: s } = qs(rr), o = Zt(() => ({
      [Ud(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Ud(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : pf("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, a);
    };
  }
}), Hb = jb;
function qb(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Gb(e, t) {
  for (const n in t) {
    const s = t[n], o = e[n];
    if (typeof s == "string") {
      if (s !== o)
        return !1;
    } else if (!gt(o) || o.length !== s.length || s.some((a, r) => a !== o[r]))
      return !1;
  }
  return !0;
}
function Md(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Ud = (e, t, n) => e != null ? e : t != null ? t : n, Xb = /* @__PURE__ */ gf({
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
    ({}).NODE_ENV !== "production" && Kb();
    const s = qs(Xc), o = Zt(() => e.route || s.value), a = qs(Fd, 0), r = Zt(() => {
      let u = la(a);
      const { matched: i } = o.value;
      let c;
      for (; (c = i[u]) && !c.components; )
        u++;
      return u;
    }), l = Zt(() => o.value.matched[r.value]);
    Pr(Fd, Zt(() => r.value + 1)), Pr(Rb, l), Pr(Xc, o);
    const d = Mx();
    return mf(() => [d.value, l.value, e.name], ([u, i, c], [g, p, m]) => {
      i && (i.instances[c] = u, p && p !== i && u && u === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), u && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Wn(i, p) || !g) && (i.enterCallbacks[c] || []).forEach((h) => h(u));
    }, { flush: "post" }), () => {
      const u = o.value, i = e.name, c = l.value, g = c && c.components[i];
      if (!g)
        return Id(n.default, { Component: g, route: u });
      const p = c.props[i], m = p ? p === !0 ? u.params : typeof p == "function" ? p(u) : p : null, f = pf(g, J({}, m, t, {
        onVnodeUnmounted: (v) => {
          v.component.isUnmounted && (c.instances[i] = null);
        },
        ref: d
      }));
      if ({}.NODE_ENV !== "production" && yn && f.ref) {
        const v = {
          depth: r.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (gt(f.ref) ? f.ref.map((b) => b.i) : [f.ref.i]).forEach((b) => {
          b.__vrv_devtools = v;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Id(n.default, { Component: f, route: u }) || f
      );
    };
  }
});
function Id(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Wb = Xb;
function Kb() {
  const e = df(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function ho(e, t) {
  const n = J({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((s) => oC(s, ["instances", "children", "aliasOf"]))
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
function Ua(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Yb = 0;
function Qb(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const s = Yb++;
  Bx({
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
        value: ho(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const g = c.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: kf
        });
      }
      gt(c.__vrl_devtools) && (c.__devtoolsApi = o, c.__vrl_devtools.forEach((g) => {
        let p = Ef, m = "";
        g.isExactActive ? (p = Vf, m = "This is exactly active") : g.isActive && (p = $f, m = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), mf(t.currentRoute, () => {
      d(), o.notifyComponentUpdate(), o.sendInspectorTree(l), o.sendInspectorState(l);
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
        guard: Ua("beforeEach"),
        from: ho(c, "Current Location during this navigation"),
        to: ho(i, "Target location")
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
        guard: Ua("afterEach")
      };
      g ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, p.status = Ua("❌")) : p.status = Ua("✅"), p.from = ho(c, "Current Location during this navigation"), p.to = ho(i, "Target location"), o.addTimelineEvent({
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
    function d() {
      if (!u)
        return;
      const i = u;
      let c = n.getRoutes().filter((g) => !g.parent);
      c.forEach(Af), i.filter && (c = c.filter((g) => (
        // save matches state based on the payload
        Wc(g, i.filter.toLowerCase())
      ))), c.forEach((g) => Tf(g, t.currentRoute.value)), i.rootNodes = c.map(Lf);
    }
    let u;
    o.on.getInspectorTree((i) => {
      u = i, i.app === e && i.inspectorId === l && d();
    }), o.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: Zb(g)
        });
      }
    }), o.sendInspectorTree(l), o.sendInspectorState(l);
  });
}
function Jb(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Zb(e) {
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
        display: e.keys.map((s) => `${s.name}${Jb(s)}`).join(" "),
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
const kf = 15485081, $f = 2450411, Vf = 8702998, eC = 2282478, Ef = 16486972, tC = 6710886;
function Lf(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: eC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Ef
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: kf
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Vf
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: $f
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: tC
  });
  let s = n.__vd_id;
  return s == null && (s = String(nC++), n.__vd_id = s), {
    id: s,
    label: n.path,
    tags: t,
    children: e.children.map(Lf)
  };
}
let nC = 0;
const sC = /^\/(.*)\/([a-z]*)$/;
function Tf(e, t) {
  const n = t.matched.length && Wn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => Wn(s, e.record))), e.children.forEach((s) => Tf(s, t));
}
function Af(e) {
  e.__vd_match = !1, e.children.forEach(Af);
}
function Wc(e, t) {
  const n = String(e.re).match(sC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Wc(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), a = pa(o);
  return !t.startsWith("/") && (a.includes(t) || o.includes(t)) || a.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Wc(r, t));
}
function oC(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function aC(e) {
  const t = vb(e.routes, e), n = e.parseQuery || Ub, s = e.stringifyQuery || Bd, o = e.history;
  if ({}.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = mo(), r = mo(), l = mo(), d = Ux(Vn);
  let u = Vn;
  yn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Br.bind(null, (w) => "" + w), c = Br.bind(null, Mb), g = (
    // @ts-expect-error: intentionally avoid the type check
    Br.bind(null, pa)
  );
  function p(w, B) {
    let T, N;
    return wf(w) ? (T = t.getRecordMatcher(w), N = B) : N = w, t.addRoute(N, T);
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
    if (B = J({}, B || d.value), typeof w == "string") {
      const z = Fr(n, w, B.path), oe = t.resolve({ path: z.path }, B), nt = o.createHref(z.fullPath);
      return {}.NODE_ENV !== "production" && (nt.startsWith("//") ? X(`Location "${w}" resolved to "${nt}". A resolved location cannot start with multiple slashes.`) : oe.matched.length || X(`No match found for location with path "${w}"`)), J(z, oe, {
        params: g(oe.params),
        hash: pa(z.hash),
        redirectedFrom: void 0,
        href: nt
      });
    }
    let T;
    if ("path" in w)
      ({}).NODE_ENV !== "production" && "params" in w && !("name" in w) && // @ts-expect-error: the type is never
      Object.keys(w.params).length && X(`Path "${w.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), T = J({}, w, {
        path: Fr(n, w.path, B.path).path
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
    const pe = Hx(s, J({}, w, {
      hash: Bb(G),
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
        s === Bd ? Ib(w.query) : w.query || {}
      )
    }, N, {
      redirectedFrom: void 0,
      href: H
    });
  }
  function _(w) {
    return typeof w == "string" ? Fr(n, w, d.value.path) : J({}, w);
  }
  function b(w, B) {
    if (u !== w)
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
    const T = u = v(w), N = d.value, G = w.state, pe = w.force, H = w.replace === !0, z = E(T);
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
    let nt;
    return !pe && Cd(s, N, T) && (nt = Gs(16, { to: oe, from: N }), De(
      N,
      N,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (nt ? Promise.resolve(nt) : A(oe, N)).catch((Ce) => on(Ce) ? (
      // navigation redirects still mark the router as ready
      on(
        Ce,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? Ce : Fe(Ce)
    ) : (
      // reject any unknown error
      re(Ce, oe, N)
    )).then((Ce) => {
      if (Ce) {
        if (on(
          Ce,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Cd(s, v(Ce.to), oe) && // and we have done it a couple of times
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
    const [N, G, pe] = iC(w, B);
    T = Nr(N.reverse(), "beforeRouteLeave", w, B);
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
      T = Nr(G, "beforeRouteUpdate", w, B);
      for (const z of G)
        z.updateGuards.forEach((oe) => {
          T.push(Gn(oe, w, B));
        });
      return T.push(H), Q(T);
    }).then(() => {
      T = [];
      for (const z of pe)
        if (z.beforeEnter)
          if (gt(z.beforeEnter))
            for (const oe of z.beforeEnter)
              T.push(Gn(oe, w, B));
          else
            T.push(Gn(z.beforeEnter, w, B));
      return T.push(H), Q(T);
    }).then(() => (w.matched.forEach((z) => z.enterCallbacks = {}), T = Nr(pe, "beforeRouteEnter", w, B), T.push(H), Q(T))).then(() => {
      T = [];
      for (const z of r.list())
        T.push(Gn(z, w, B));
      return T.push(H), Q(T);
    }).catch((z) => on(
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
    const H = B === Vn, z = yn ? history.state : {};
    T && (N || H ? o.replace(w.fullPath, J({
      scroll: H && z && z.scroll
    }, G)) : o.push(w.fullPath, G)), d.value = w, De(w, B, T, H), Fe();
  }
  let ie;
  function te() {
    ie || (ie = o.listen((w, B, T) => {
      if (!M.listening)
        return;
      const N = v(w), G = E(N);
      if (G) {
        S(J(G, { replace: !0 }), N).catch(ca);
        return;
      }
      u = N;
      const pe = d.value;
      yn && Jx($d(pe.fullPath, T.delta), ir()), A(N, pe).catch((H) => on(
        H,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? H : on(
        H,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (S(
        H.to,
        N
        // avoid an uncaught rejection, let push call triggerError
      ).then((z) => {
        on(
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
        !on(
          H,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-T.delta, !1) : T.type === ga.pop && on(
          H,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), R(N, pe, H);
      }).catch(ca);
    }));
  }
  let j = mo(), W = mo(), se;
  function re(w, B, T) {
    Fe(w);
    const N = W.list();
    return N.length ? N.forEach((G) => G(w, B, T)) : ({}.NODE_ENV !== "production" && X("uncaught error during route navigation:"), console.error(w)), Promise.reject(w);
  }
  function $e() {
    return se && d.value !== Vn ? Promise.resolve() : new Promise((w, B) => {
      j.add([w, B]);
    });
  }
  function Fe(w) {
    return se || (se = !w, te(), j.list().forEach(([B, T]) => w ? T(w) : B()), j.reset()), w;
  }
  function De(w, B, T, N) {
    const { scrollBehavior: G } = e;
    if (!yn || !G)
      return Promise.resolve();
    const pe = !T && Zx($d(w.fullPath, 0)) || (N || !T) && history.state && history.state.scroll || null;
    return Rx().then(() => G(w, B, pe)).then((H) => H && Qx(H)).catch((H) => re(H, w, B));
  }
  const Z = (w) => o.go(w);
  let tt;
  const D = /* @__PURE__ */ new Set(), M = {
    currentRoute: d,
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
      w.component("RouterLink", Hb), w.component("RouterView", Wb), w.config.globalProperties.$router = B, Object.defineProperty(w.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => la(d)
      }), yn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !tt && d.value === Vn && (tt = !0, x(o.location).catch((G) => {
        ({}).NODE_ENV !== "production" && X("Unexpected error when starting the router:", G);
      }));
      const T = {};
      for (const G in Vn)
        Object.defineProperty(T, G, {
          get: () => d.value[G],
          enumerable: !0
        });
      w.provide(rr, B), w.provide(Cf, Ix(T)), w.provide(Xc, d);
      const N = w.unmount;
      D.add(w), w.unmount = function() {
        D.delete(w), D.size < 1 && (u = Vn, ie && ie(), ie = null, d.value = Vn, tt = !1, se = !1), N();
      }, {}.NODE_ENV !== "production" && yn && Qb(w, B, t);
    }
  };
  function Q(w) {
    return w.reduce((B, T) => B.then(() => V(T)), Promise.resolve());
  }
  return M;
}
function iC(e, t) {
  const n = [], s = [], o = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((u) => Wn(u, l)) ? s.push(l) : n.push(l));
    const d = e.matched[r];
    d && (t.matched.find((u) => Wn(u, d)) || o.push(d));
  }
  return [n, s, o];
}
function et() {
  return qs(rr);
}
const rC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, s = parseInt(e.slice(6, 8)), o = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, s, o, a, r)), u = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(u / (1e3 * 3600 * 24));
}, lC = (e) => {
  const t = rC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const $t = window.Vue.unref, ys = window.Vue.createVNode, an = window.Vue.createElementVNode, Rd = window.Vue.renderSlot, zd = window.Vue.withModifiers, Mr = window.Vue.toDisplayString, Ur = window.Vue.withCtx, cC = window.Vue.openBlock, uC = window.Vue.createElementBlock, dC = window.Vue.createCommentVNode, gC = { class: "col shrink pe-4" }, pC = { class: "col" }, mC = { class: "cx-translation__details column justify-between ma-0" }, hC = { class: "row ma-0" }, fC = { class: "col grow" }, wC = { class: "col shrink ps-2" }, vC = ["dir", "textContent"], _C = ["dir", "textContent"], SC = ["textContent"], yC = window.Vuex.useStore, xC = window.Vue.computed, Df = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Jc,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, s = yC(), o = (l, d) => {
      const u = s.getters["mediawiki/getPage"](l, d);
      return u == null ? void 0 : u.thumbnail;
    }, a = ge(), r = xC(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, d = lC(n.translation.startTimestamp);
      return a.i18n(
        l[d.postfix],
        mw.language.convertNumber(d.value)
      );
    });
    return (l, d) => e.translation ? (cC(), uC("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: d[1] || (d[1] = zd((u) => l.$emit("click"), ["stop"]))
    }, [
      an("div", gC, [
        ys($t(Qc), {
          class: "cx-translation__thumbnail",
          thumbnail: o(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      an("div", pC, [
        an("div", mC, [
          an("div", hC, [
            an("div", fC, [
              Rd(l.$slots, "title")
            ]),
            an("div", wC, [
              ys($t(Ze), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: d[0] || (d[0] = zd((u) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Rd(l.$slots, "mid-content"),
          ys($t(U), { class: "cx-translation__footer ma-0" }, {
            default: Ur(() => [
              ys($t(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Ur(() => [
                  an("span", {
                    class: "mw-ui-autonym",
                    dir: $t(I.getDir)(e.translation.sourceLanguage),
                    textContent: Mr($t(I.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, vC),
                  ys($t(Ze), {
                    icon: $t(j0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  an("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: $t(I.getDir)(e.translation.targetLanguage),
                    textContent: Mr($t(I.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, _C)
                ]),
                _: 1
              }),
              ys($t(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Ur(() => [
                  an("span", {
                    textContent: Mr(r.value)
                  }, null, 8, SC)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : dC("", !0);
  }
};
const fo = window.Vue.unref, bC = window.Vue.toDisplayString, CC = window.Vue.normalizeClass, kC = window.Vue.createElementVNode, Ir = window.Vue.openBlock, $C = window.Vue.createElementBlock, Od = window.Vue.createCommentVNode, jd = window.Vue.createVNode, Ia = window.Vue.withCtx, Hd = window.Vue.createBlock, VC = ["lang", "textContent"], EC = ["lang", "innerHTML"], LC = window.Vue.computed, TC = window.Vue.inject, AC = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Qi,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, s = TC("colors").gray200, o = LC(
      () => {
        var d;
        return ((d = t.translation.progress) == null ? void 0 : d.any) * 100 || 0;
      }
    ), a = et(), { setTranslationURLParams: r } = P(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (d, u) => (Ir(), Hd(Df, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": fo(dh),
      onActionIconClicked: u[0] || (u[0] = (i) => d.$emit("delete-translation")),
      onClick: l
    }, {
      title: Ia(() => [
        kC("h5", {
          class: CC(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: bC(e.translation.sourceTitle)
        }, null, 10, VC),
        e.translation.isLeadSectionTranslation ? Od("", !0) : (Ir(), $C("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, EC))
      ]),
      "mid-content": Ia(() => [
        e.translation.progress ? (Ir(), Hd(fo(U), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ia(() => [
            jd(fo(k), null, {
              default: Ia(() => [
                jd(fo(mh), {
                  class: "cx-translation__progress-bar",
                  value: o.value,
                  height: "4px",
                  width: "64px",
                  background: fo(s)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Od("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, DC = window.Vuex.useStore, Pf = [], PC = (e, t, n) => Pf.some(
  (s) => s.sourceLanguage === e && s.targetLanguage === t && s.sourceTitle === n
), BC = (e, t, n) => {
  const s = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Pf.push(s);
}, FC = () => {
  const e = DC();
  return (t, n, s) => C(void 0, null, function* () {
    let o = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, s);
    return !o && !PC(t, n, s) && (o = yield me.fetchSectionSuggestion(
      t,
      s,
      n
    ), BC(t, n, s), o && (o.isListable = !1, e.commit("suggestions/addSectionSuggestion", o))), o;
  });
}, Bf = window.Vue.ref, Ff = Bf(null), Kc = Bf(null), NC = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), Ff.value = e;
}, MC = (e) => {
  Kc.value = e;
}, ya = () => {
  const e = et(), t = or(), { setTranslationURLParams: n } = P();
  return (s, o, a, r, l = null, d = !0) => C(void 0, null, function* () {
    NC(r), MC(l);
    const u = yield t(
      o,
      a,
      s
    );
    n(u), d && e.push({ name: "sx-translation-confirmer" });
  });
};
const Rr = window.Vue.withModifiers, qd = window.Vue.toDisplayString, Gd = window.Vue.createElementVNode, Vt = window.Vue.unref, Qn = window.Vue.createVNode, UC = window.Vue.createTextVNode, Ra = window.Vue.openBlock, Xd = window.Vue.createElementBlock, Wd = window.Vue.createCommentVNode, Kd = window.Vue.createBlock, xs = window.Vue.withCtx, IC = ["lang", "href", "textContent"], RC = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, zC = {
  key: 2,
  class: "flex"
}, OC = ["innerHTML"], zr = window.Vue.computed, Yd = window.Vue.ref, Qd = window.Codex.CdxButton, Or = window.Codex.CdxIcon, jC = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: wu,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Yd(!0), s = Yd(null), o = zr(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.missingSections;
    }), a = zr(
      () => o.value && Object.keys(o.value)[0]
    );
    FC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((p) => s.value = p).catch((p) => console.log(p)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = P(), d = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, u = ya(), i = (p) => {
      u(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), p && l(p);
    }, c = mw.config.get("wgNamespaceIds"), g = zr(() => new mw.Title(t.translation.targetTitle).getNamespaceId() === c.user);
    return (p, m) => (Ra(), Kd(Df, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: d
    }, {
      title: xs(() => [
        Gd("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: m[0] || (m[0] = Rr(() => {
          }, ["stop"])),
          textContent: qd(e.translation.sourceTitle)
        }, null, 8, IC)
      ]),
      "mid-content": xs(() => [
        Qn(Vt(U), { class: "ma-0" }, {
          default: xs(() => [
            Qn(Vt(k), null, {
              default: xs(() => [
                g.value ? (Ra(), Xd("div", RC, [
                  Qn(Vt(Or), {
                    icon: Vt(ef),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  UC(" " + qd(p.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : Wd("", !0),
                n.value ? (Ra(), Kd(Vt(dt), { key: 1 })) : o.value ? (Ra(), Xd("div", zC, [
                  Qn(Vt(Qd), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: m[1] || (m[1] = Rr((h) => i(a.value), ["stop"]))
                  }, {
                    default: xs(() => [
                      Qn(Vt(Or), {
                        class: "me-1",
                        icon: Vt(Gh)
                      }, null, 8, ["icon"]),
                      Gd("span", { innerHTML: a.value }, null, 8, OC)
                    ]),
                    _: 1
                  }),
                  Qn(Vt(Qd), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": p.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: m[2] || (m[2] = Rr((h) => i(null), ["stop"]))
                  }, {
                    default: xs(() => [
                      Qn(Vt(Or), { icon: Vt(pu) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : Wd("", !0)
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
}, Nf = "cx-translation-session-position-", Mf = () => Nf + mw.user.sessionId(), HC = () => {
  const e = parseInt(
    mw.storage.get(Mf())
  );
  return isNaN(e) ? 0 : e;
}, qC = function(e) {
  const t = Mf();
  mw.storage.set(t, e);
}, GC = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(Nf)).forEach((e) => mw.storage.remove(e));
}, XC = () => {
  const e = HC();
  return e % 10 === 0 && GC(), qC(e + 1), e;
};
function WC(e) {
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
    content_translation_session_position: XC()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(o, Object.assign({}, l, e))
  ) : Nh(r).then((d) => {
    mw.eventLog.submit(
      o,
      Object.assign({}, l, e, {
        user_global_edit_count: d,
        user_global_edit_count_bucket: q_(d)
      })
    );
  });
}
const KC = window.Vuex.useStore, YC = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], Ct = () => {
  const e = KC(), { previousRoute: t } = Te(e), n = [
    "event_source",
    "translation_source_language",
    "translation_target_language",
    "translation_source_title"
  ], s = (o) => {
    for (const a of n)
      if (o[a] === null) {
        const r = YC(
          o.event_type,
          a,
          t.value
        );
        mw.errorLogger.logError(
          new Error(r.join(" ")),
          "error.contenttranslation"
        );
      }
  };
  return (o) => (o.access_method || (o.access_method = xn ? "desktop" : "mobile web"), s(o), WC(o));
}, QC = window.Vuex.useStore, JC = () => {
  const { commit: e } = QC(), t = Ct();
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
const ZC = window.Vue.resolveDirective, jr = window.Vue.createElementVNode, ek = window.Vue.withDirectives, Hr = window.Vue.unref, Jd = window.Vue.createVNode, Zd = window.Vue.withCtx, tk = window.Vue.openBlock, nk = window.Vue.createBlock, sk = { class: "pa-4" }, ok = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, ak = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Qi,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, s = t, o = () => s("update:modelValue", !1), a = JC(), r = () => {
      a(n.translation), o();
    };
    return (l, d) => {
      const u = ZC("i18n");
      return tk(), nk(Hr(bt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Zd(() => [
          jr("div", ok, [
            Jd(Hr(Xe), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: o
            }, null, 8, ["label"]),
            Jd(Hr(Xe), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Zd(() => [
          jr("div", sk, [
            ek(jr("span", null, null, 512), [
              [u, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function ik(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield rk(t, n)).filter((o) => e.includes(o)) : [];
  });
}
function eg(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(I.sortByAutonym) : (yield ik(e, t, n)).sort(I.sortByAutonym);
  });
}
function rk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((s) => s.json()).then((s) => Object.keys(s.languagesearch || {}));
}
function lk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function ck(e) {
  let t, n = [...e];
  const s = e.length;
  s < 10 && (t = s), s < 30 && (t = 10), s >= 30 && (t = 15);
  const o = [];
  for (; n.length; )
    o.push(n.splice(0, t));
  return o;
}
const uk = window.Vue.computed;
function dk(e, t) {
  const n = uk(() => {
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
const qr = window.Vue.ref, Gr = window.Vue.watch, gk = window.Vue.computed;
function Uf(e, t, n) {
  const s = qr(""), o = qr(-1), a = qr(null), r = () => {
    o.value++, o.value >= l.value.length && (o.value = 0);
  }, l = gk(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), d = () => {
    o.value--, o.value < 0 && (o.value = 0);
  };
  return Gr(e, () => {
    o.value = -1;
  }), Gr(t, () => {
    t.value && l.value.length > 0 && (o.value = 0);
  }), Gr(o, () => C(this, null, function* () {
    var u;
    if (o.value < 0) {
      s.value = "";
      return;
    }
    s.value = l.value[o.value], (u = a.value.querySelectorAll(`.language[lang="${s.value}"]`)[0]) == null || u.scrollIntoView(!1);
  })), { next: r, prev: d, keyboardNavigationContainer: a, selectedItem: s };
}
function _u(e, t, n) {
  let s;
  const o = (...a) => {
    const r = this, l = () => {
      s = null, n || e.apply(r, a);
    };
    n && !s && e.apply(r, a), (!s || t) && (clearTimeout(s), s = setTimeout(l, t));
  };
  return o.cancel = () => clearTimeout(s), o;
}
const za = window.Vue.renderSlot, Ve = window.Vue.unref, pk = window.Vue.isRef, tg = window.Vue.createVNode, wo = window.Vue.withModifiers, vo = window.Vue.withKeys, En = window.Vue.createElementVNode, mk = window.Vue.resolveDirective, Oa = window.Vue.withDirectives, Xr = window.Vue.renderList, Wr = window.Vue.Fragment, rn = window.Vue.openBlock, ln = window.Vue.createElementBlock, ng = window.Vue.toDisplayString, ja = window.Vue.normalizeClass, Kr = window.Vue.createCommentVNode, hk = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, fk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, wk = { class: "results px-3 pt-4" }, vk = { class: "results-header ps-8 pb-2" }, _k = { class: "results-languages--suggestions pa-0 ma-0" }, Sk = ["lang", "dir", "aria-selected", "onClick", "textContent"], yk = { class: "results px-3 pt-4" }, xk = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, bk = ["lang", "dir", "aria-selected", "onClick", "textContent"], Ck = ["aria-selected"], kk = { class: "no-results px-3 py-4" }, $k = { class: "ps-8" }, Ha = window.Vue.ref, Vk = window.Vue.watch, Ek = window.Vue.onMounted, sg = window.Vue.computed, If = {
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
      default: lk
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = Ha(null), a = Ha(""), r = Ha([]), l = Ha(n.suggestions), d = sg(
      () => ck(r.value)
    ), u = sg(() => {
      const x = r.value.length;
      return x < 10 ? "few-results" : x < 30 ? "some-results" : "many-results";
    }), i = (x) => s("select", x), c = () => s("close"), { autocompletion: g, onTabSelect: p } = dk(
      a,
      r
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: v } = Uf(a, r, l), _ = () => {
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
    return Vk(a, _u(() => C(this, null, function* () {
      r.value = yield eg(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), Ek(() => C(this, null, function* () {
      n.autofocus && setTimeout(() => o.value.focus(), 500), r.value = yield eg(
        n.languages,
        "",
        n.searchAPI
      );
    })), (x, y) => {
      const E = mk("i18n");
      return rn(), ln("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        za(x.$slots, "search", {}, () => [
          En("div", hk, [
            tg(Ve(Uc), {
              value: Ve(g),
              "onUpdate:value": y[0] || (y[0] = (S) => pk(g) ? g.value = S : null),
              icon: Ve(zu),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            tg(Ve(Uc), {
              ref_key: "searchInputElement",
              ref: o,
              value: a.value,
              "onUpdate:value": y[1] || (y[1] = (S) => a.value = S),
              class: "mw-ui-language-selector__search pa-4",
              icon: Ve(zu),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                vo(wo(_, ["prevent"]), ["enter"]),
                vo(wo(Ve(m), ["stop", "prevent"]), ["down"]),
                vo(wo(Ve(h), ["stop", "prevent"]), ["up"]),
                vo(wo(c, ["prevent"]), ["esc"]),
                vo(wo(Ve(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        En("section", fk, [
          e.suggestions.length && !a.value ? za(x.$slots, "suggestions", { key: 0 }, () => [
            En("section", wk, [
              Oa(En("p", vk, null, 512), [
                [E, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              En("ul", _k, [
                (rn(!0), ln(Wr, null, Xr(e.suggestions, (S) => (rn(), ln("li", {
                  key: S,
                  class: ja(["language ma-0", { "language--selected": S === Ve(v) }]),
                  lang: S,
                  dir: Ve(I.getDir)(S),
                  "aria-selected": S === Ve(v) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (F) => i(S),
                  textContent: ng(Ve(I.getAutonym)(S))
                }, null, 10, Sk))), 128))
              ])
            ])
          ]) : Kr("", !0),
          d.value.length ? za(x.$slots, "search", { key: 1 }, () => [
            En("section", yk, [
              e.suggestions.length && !a.value ? Oa((rn(), ln("p", xk, null, 512)), [
                [E, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Kr("", !0),
              (rn(!0), ln(Wr, null, Xr(d.value, (S, F) => (rn(), ln("ul", {
                key: F,
                class: ja(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (rn(!0), ln(Wr, null, Xr(S, (V) => (rn(), ln("li", {
                  key: V,
                  class: ja(["language ma-0", { "language--selected": V === Ve(v) }]),
                  lang: V,
                  dir: Ve(I.getDir)(V),
                  role: "option",
                  "aria-selected": V === Ve(v) || null,
                  tabindex: "-1",
                  onClick: (A) => i(V),
                  textContent: ng(Ve(I.getAutonym)(V))
                }, null, 10, bk))), 128)),
                e.allOptionEnabled && !a.value ? Oa((rn(), ln("li", {
                  key: 0,
                  class: ja(["language ma-0", { "language--selected": Ve(v) === "all" }]),
                  role: "option",
                  "aria-selected": Ve(v) === "all" || null,
                  tabindex: "-1",
                  onClick: y[2] || (y[2] = (V) => i("all"))
                }, null, 10, Ck)), [
                  [E, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Kr("", !0)
              ], 2))), 128))
            ])
          ]) : za(x.$slots, "noresults", { key: 2 }, () => [
            En("section", kk, [
              Oa(En("h3", $k, null, 512), [
                [E, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const Lk = window.Vue.resolveDirective, og = window.Vue.withDirectives, _o = window.Vue.openBlock, So = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ee = window.Vue.unref, ag = window.Vue.toDisplayString, Et = window.Vue.createVNode, ig = window.Vue.withModifiers, Jn = window.Vue.withCtx, Tk = window.Vue.normalizeClass, Ak = {
  key: 0,
  class: "mw-ui-autonym"
}, Dk = ["lang", "dir", "textContent"], Pk = {
  key: 0,
  class: "mw-ui-autonym"
}, Bk = ["lang", "dir", "textContent"], yo = window.Vue.computed, Fk = window.Vue.inject, Nk = window.Vue.ref, rg = window.Codex.CdxButton, Yr = window.Codex.CdxIcon, Xi = {
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
    const n = e, s = t, o = Fk("breakpoints"), a = yo(() => o.value.mobile), r = Nk(null), l = yo(() => !!r.value), d = () => r.value = "source", u = () => r.value = "target", i = () => r.value = null, c = yo(() => {
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
    }, p = yo(
      () => n.selectedSourceLanguage === "all"
    ), m = yo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const v = Lk("i18n");
      return _o(), So("div", {
        class: Tk(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
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
                Et(Ee(rg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: ig(d, ["stop"])
                }, {
                  default: Jn(() => [
                    p.value ? og((_o(), So("span", Ak, null, 512)), [
                      [v, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (_o(), So("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ee(I.getDir)(e.selectedSourceLanguage),
                      textContent: ag(Ee(I.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, Dk)),
                    Et(Ee(Yr), {
                      size: "x-small",
                      icon: Ee(Rc)
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
                Et(Ee(Yr), { icon: Ee(Xh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Et(Ee(k), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Jn(() => [
                Et(Ee(rg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: ig(u, ["stop"])
                }, {
                  default: Jn(() => [
                    m.value ? og((_o(), So("span", Pk, null, 512)), [
                      [v, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (_o(), So("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ee(I.getDir)(e.selectedTargetLanguage),
                      textContent: ag(Ee(I.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, Bk)),
                    Et(Ee(Yr), {
                      size: "x-small",
                      icon: Ee(Rc)
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
            Et(Ee(If), {
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
const lg = window.Vue.unref, Mk = window.Vue.createVNode, qa = window.Vue.createElementVNode, cg = window.Vue.toDisplayString, Uk = window.Vue.openBlock, Ik = window.Vue.createElementBlock, Rk = { class: "cx-list-empty-placeholder pa-4" }, zk = { class: "cx-list-empty-placeholder__icon-container" }, Ok = { class: "cx-list-empty-placeholder__icon" }, jk = ["textContent"], Hk = ["textContent"], qk = window.Codex.CdxIcon, Rf = {
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
    return (t, n) => (Uk(), Ik("div", Rk, [
      qa("div", zk, [
        qa("div", Ok, [
          Mk(lg(qk), { icon: lg(Jh) }, null, 8, ["icon"])
        ])
      ]),
      qa("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: cg(e.title)
      }, null, 8, jk),
      qa("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: cg(e.description)
      }, null, 8, Hk)
    ]));
  }
}, Gk = window.Vuex.useStore, Xk = window.Vue.ref, Ga = Xk({ draft: !1, published: !1 }), Js = () => {
  const e = Gk(), t = Ks(), n = (o) => C(void 0, null, function* () {
    let a = yield xt.fetchTranslations(o);
    e.commit("translator/clearTranslationsByStatus", o), a.forEach(
      (l) => e.commit("translator/addTranslation", l)
    );
    const r = {};
    for (const l of a) {
      const d = l.sourceLanguage;
      r[d] = r[d] || [], r[d].push(l);
    }
    Ga.value[o] = !0;
    for (const [l, d] of Object.entries(r))
      t(
        l,
        d.map((u) => u.sourceTitle)
      ), d.forEach((u) => {
        const { targetLanguage: i, targetTitle: c } = u, g = !!e.getters["mediawiki/getPage"](
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
      const a = Object.keys(Ga.value).filter(
        (r) => !Ga.value[r]
      ).map(
        (r) => n(r)
      );
      return Promise.all(a).catch((r) => {
        mw.log.error("[CX] Error while fetching translations", r);
      });
    },
    translationsFetched: Ga
  };
};
const Wk = window.Vue.toDisplayString, Qr = window.Vue.normalizeClass, ug = window.Vue.createElementVNode, jt = window.Vue.openBlock, bs = window.Vue.createBlock, Xa = window.Vue.createCommentVNode, dg = window.Vue.unref, gg = window.Vue.renderList, pg = window.Vue.Fragment, Wa = window.Vue.createElementBlock, Kk = window.Vue.createVNode, mg = window.Vue.withCtx, Yk = ["textContent"], Qk = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Jk = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Ka = window.Vue.ref, Lt = window.Vue.computed, Zk = window.Vue.inject, e8 = window.Vuex.useStore, hg = {
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
    const t = e, n = Ka("all"), s = Ka("all"), o = e8(), { translationsFetched: a } = Js(), r = Lt(
      () => a.value[t.translationStatus]
    ), l = Ka(!1), d = Ka(null), u = Lt(
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
      d.value = y, l.value = !0;
    }, v = Lt(() => t.activeStatus === t.translationStatus), _ = Zk("breakpoints"), b = Lt(() => _.value.mobile), x = Lt(
      () => b.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (y, E) => v.value ? (jt(), bs(dg(Je), {
      key: 0,
      class: Qr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: mg(() => [
        ug("div", {
          class: Qr(["cx-translation-list__header", x.value])
        }, [
          ug("h3", {
            class: Qr(["px-4 mw-ui-card__title mb-0", { "pb-4": b.value }]),
            textContent: Wk(y.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Yk),
          p.value.length ? (jt(), bs(Xi, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": E[0] || (E[0] = (S) => n.value = S),
            "selected-target-language": s.value,
            "onUpdate:selectedTargetLanguage": E[1] || (E[1] = (S) => s.value = S),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Xa("", !0)
        ], 2)
      ]),
      default: mg(() => [
        r.value && !p.value.length ? (jt(), bs(Rf, {
          key: 0,
          title: y.$i18n("cx-sx-translation-list-empty-title"),
          description: y.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Xa("", !0),
        r.value ? Xa("", !0) : (jt(), bs(dg(dt), { key: 1 })),
        u.value ? (jt(), Wa("div", Qk, [
          (jt(!0), Wa(pg, null, gg(p.value, (S) => (jt(), bs(AC, {
            key: `${e.translationStatus}-${S.key}`,
            translation: S,
            onDeleteTranslation: (F) => f(S)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (jt(), Wa("div", Jk, [
          (jt(!0), Wa(pg, null, gg(p.value, (S) => (jt(), bs(jC, {
            key: `${e.translationStatus}-${S.key}`,
            translation: S
          }, null, 8, ["translation"]))), 128))
        ])),
        Kk(ak, {
          modelValue: l.value,
          "onUpdate:modelValue": E[2] || (E[2] = (S) => l.value = S),
          translation: d.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Xa("", !0);
  }
};
const Jr = window.Vue.toDisplayString, ji = window.Vue.createElementVNode, Zr = window.Vue.unref, xo = window.Vue.openBlock, el = window.Vue.createBlock, fg = window.Vue.createCommentVNode, t8 = window.Vue.Fragment, wg = window.Vue.createElementBlock, n8 = window.Vue.withKeys, s8 = window.Vue.withCtx, o8 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, a8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, i8 = /* @__PURE__ */ ji("span", null, "/", -1), r8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, vg = window.Codex.CdxIcon, l8 = window.Codex.CdxInfoChip, Ya = window.Vue.computed, ds = {
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
    const t = e, n = Ya(() => t.content.lastIndexOf("/")), s = Ya(() => t.content.slice(0, n.value)), o = Ya(() => t.content.slice(n.value + 1)), a = Ya(
      () => t.expanded ? ry : Rc
    );
    return (r, l) => (xo(), el(Zr(l8), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = n8((d) => r.$emit("click"), ["enter"]))
    }, {
      default: s8(() => [
        n.value === -1 ? (xo(), wg(t8, { key: 0 }, [
          ji("span", null, Jr(e.content), 1),
          e.expandable ? (xo(), el(Zr(vg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : fg("", !0)
        ], 64)) : (xo(), wg("div", o8, [
          ji("span", a8, Jr(s.value), 1),
          i8,
          ji("span", r8, Jr(o.value), 1),
          e.expandable ? (xo(), el(Zr(vg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : fg("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const _e = window.Vue.unref, Tt = window.Vue.createVNode, Ln = window.Vue.createElementVNode, bo = window.Vue.toDisplayString, ht = window.Vue.withCtx, c8 = window.Vue.resolveDirective, tl = window.Vue.withDirectives, Tn = window.Vue.openBlock, Cs = window.Vue.createBlock, Zn = window.Vue.createCommentVNode, _g = window.Vue.createElementBlock, Sg = window.Vue.withModifiers, u8 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, d8 = { class: "col shrink pe-4" }, g8 = ["lang", "dir", "textContent"], p8 = ["lang", "dir", "textContent"], m8 = { class: "cx-suggestion__missing-sections" }, h8 = {
  key: 0,
  class: "cx-suggestion__easy-sections ms-1"
}, f8 = ["textContent"], w8 = ["textContent"], nl = window.Codex.CdxIcon, Oe = window.Vue.computed, v8 = window.Vue.inject, _8 = window.Vuex.useStore, Yc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [ms, en, Hs],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = _8(), s = Oe(() => t.suggestion), o = Oe(
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
      return Oh(y);
    }).length), d = ge(), u = Oe(() => {
      const x = d.i18n(
        "cx-sx-translation-suggestion-easy-sections",
        [l.value]
      );
      return d.i18n("parentheses", [x]);
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
      () => g.value ? Kh : Yh
    ), f = v8("colors"), v = Oe(
      () => g.value ? f.blue600 : "currentColor"
    ), _ = Oe(
      () => {
        var x;
        return X_((x = a.value) == null ? void 0 : x.articleSize);
      }
    ), b = Oe(
      () => s.value instanceof Bh || s.value instanceof Fh
    );
    return (x, y) => {
      const E = c8("i18n");
      return s.value ? (Tn(), _g("div", u8, [
        Ln("div", d8, [
          Tt(_e(Qc), {
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
                      textContent: bo(o.value)
                    }, null, 8, g8)
                  ]),
                  _: 1
                }),
                Tt(_e(k), { shrink: "" }, {
                  default: ht(() => [
                    Ln("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: _e(I.getDir)(s.value.sourceLanguage),
                      textContent: bo(i.value)
                    }, null, 8, p8)
                  ]),
                  _: 1
                }),
                _.value && !c.value && !b.value ? (Tn(), Cs(_e(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: ht(() => [
                    tl(Ln("small", null, null, 512), [
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
                    tl(Ln("small", m8, null, 512), [
                      [E, [r.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (Tn(), _g("small", h8, bo(u.value), 1)) : Zn("", !0)
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
                              textContent: bo(p.value)
                            }, null, 8, f8),
                            Tt(_e(nl), {
                              icon: _e(Xh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            Ln("small", {
                              textContent: bo(m.value)
                            }, null, 8, w8)
                          ]),
                          _: 1
                        }),
                        r.value ? (Tn(), Cs(_e(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: ht(() => [
                            tl(Ln("small", null, null, 512), [
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
                      icon: _e(du),
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
                g.value ? Zn("", !0) : (Tn(), Cs(_e(nl), {
                  key: 0,
                  icon: _e(Qs),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: y[0] || (y[0] = Sg((S) => x.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                Tt(_e(nl), {
                  class: "cx-suggestion__favorite-button",
                  icon: h.value,
                  "icon-color": v.value,
                  onClick: y[1] || (y[1] = Sg((S) => x.$emit("bookmark"), ["stop"]))
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
const sl = window.Vue.normalizeClass, yg = window.Vue.createVNode, S8 = window.Vue.renderList, xg = window.Vue.Fragment, Co = window.Vue.openBlock, Qa = window.Vue.createElementBlock, y8 = window.Vue.createBlock, x8 = window.Vue.toDisplayString, b8 = window.Vue.withKeys, bg = window.Vue.createCommentVNode, C8 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, Ja = window.Vue.computed, k8 = window.Vue.ref, $8 = window.Vue.watchEffect, V8 = {
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
    const n = e, s = Ja(
      () => n.isSelected(n.filter) || n.filter.subFilters.some((g) => n.isSelected(g))
    ), o = k8(!1);
    $8(() => {
      n.filter.expandable && (o.value = s.value);
    });
    const a = t, r = () => {
      n.filter.expandable && s.value ? o.value = !o.value : a("filter-selected", n.filter);
    }, l = Ja(() => {
      const g = n.filter.subFilters.find(
        (m) => n.isSelected(m)
      );
      let p = n.filter.chipLabel;
      return g && (p += `/${d(g)}`), p;
    }), d = (g) => {
      const { label: p } = g, m = n.filter.label;
      return p.startsWith(`${m}/`) ? p.replace(`${m}/`, "") : p;
    }, u = Ja(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), i = Ja(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && o.value
    ), c = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, p) => (Co(), Qa(xg, null, [
      yg(ds, {
        class: sl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": s.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: o.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      o.value ? (Co(), Qa("div", C8, [
        yg(ds, {
          class: sl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: p[0] || (p[0] = (m) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Co(!0), Qa(xg, null, S8(u.value, (m) => (Co(), y8(ds, {
          key: m.id,
          class: sl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(m)
          }]),
          content: d(m),
          icon: m.icon,
          onClick: (h) => g.$emit("filter-selected", m)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        i.value ? (Co(), Qa("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: c,
          onKeyup: b8(c, ["enter"])
        }, x8(e.viewMoreConfig.label), 33)) : bg("", !0)
      ])) : bg("", !0)
    ], 64));
  }
};
const E8 = window.Vue.toDisplayString, Cg = window.Vue.createElementVNode, L8 = window.Vue.renderList, kg = window.Vue.Fragment, ol = window.Vue.openBlock, $g = window.Vue.createElementBlock, T8 = window.Vue.createBlock, A8 = { class: "sx-suggestions-filters__group-label mb-3" }, D8 = { class: "sx-suggestions-filters__group-filters mb-3" }, P8 = {
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
    return (s, o) => (ol(), $g(kg, null, [
      Cg("div", A8, E8(e.filterGroup.label), 1),
      Cg("div", D8, [
        (ol(!0), $g(kg, null, L8(n(), (a) => (ol(), T8(V8, {
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
}, Vg = window.Vue.computed, B8 = window.Vue.inject, Eg = window.Vue.ref, Lg = window.Vue.watch, Su = (e, t) => {
  const s = Eg([]), o = Eg(!1), a = Vg(
    () => s.value.slice(0, 4)
  ), r = B8("breakpoints"), l = Vg(() => r.value.mobile), d = _u(() => C(void 0, null, function* () {
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
  }), 500), u = () => {
    s.value = [], t.value && (o.value = !0, d());
  };
  return Lg(t, u), Lg(e, u), {
    searchResultsLoading: o,
    searchResultsSlice: a
  };
};
class Za {
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
    showThumbnail: d = !1
  }) {
    this.label = t, this.value = n + "-" + o, this.description = s, this.thumbnail = r, this.filterType = o, this.filterId = a, this.icon = l, this.showThumbnail = d;
  }
}
const al = window.Vue.ref, Tg = window.Vue.watch, Ag = window.Vue.computed, { topics: F8, regions: N8 } = mw.loader.require(
  "ext.cx.articlefilters"
), M8 = F8.flatMap(
  (e) => e.topics.map((t) => Ke(ce({}, t), {
    groupId: e.groupId
  }))
), U8 = () => {
  const e = al(""), t = al("all"), n = al({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), s = ge(), { pageCollectionGroups: o } = uu(), { sourceLanguageURLParameter: a } = P(), r = (p) => (p = p.toLowerCase(), M8.filter(
    (m) => m.label.toLowerCase().includes(p)
  )), l = (p) => (p = p.toLowerCase(), Object.values(o.value).flat().filter(
    (h) => h.name.toLowerCase().includes(p)
  )), d = (p) => (p = p.toLowerCase(), N8.flatMap((m) => [m, ...m.countries]).filter(
    (m) => m.label.toLowerCase().includes(p)
  ).map((m) => ({
    label: m.label,
    id: m.id
  }))), u = Ag(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: c } = Su(
    a,
    u
  );
  Tg(i, () => {
    n.value.topics = i.value.map(
      (p) => {
        var m;
        return new Za({
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
  }), Tg([e, t], () => C(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (p) => new Za({
        label: p.label,
        value: p.label,
        description: s.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? zc : null,
        filterType: We,
        filterId: p.topicId
      })
    ), n.value.collections = l(
      e.value
    ).map(
      (p) => new Za({
        label: p.name,
        value: p.name,
        description: s.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          p.articlesCount
        ),
        icon: t.value === "all" ? du : null,
        filterType: ee,
        filterId: p.name
      })
    ), n.value.regions = d(e.value).map(
      (p) => new Za({
        label: p.label,
        value: p.label,
        description: s.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? zc : null,
        filterType: ke,
        filterId: p.id
      })
    );
  }));
  const g = Ag(() => {
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
}, I8 = "suggestion_filter_topic_area", R8 = "suggestion_filter_search_result_seed", z8 = "suggestion_filter_collections", O8 = "suggestion_filter_previous_edits", j8 = "suggestion_filter_popular_articles", H8 = "suggestion_filter_region", il = (e) => {
  if (e.type === We || e.type === ke || e.type === ee || e.type === yt)
    return e.id;
  if (e.id === ee)
    return "all-collections";
}, rl = (e) => {
  if (e.type === We)
    return I8;
  if (e.type === ke)
    return H8;
  if (e.type === yt)
    return R8;
  if (e.id === ee || e.type === ee)
    return z8;
  if (e.id === nn)
    return O8;
  if (e.id === bn)
    return j8;
}, zf = () => {
  const e = Ct();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: rl(r),
      event_context: il(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: rl(r),
      event_context: il(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: rl(r),
      event_context: il(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const ye = window.Vue.unref, ft = window.Vue.createVNode, At = window.Vue.withCtx, q8 = window.Vue.resolveDirective, Ht = window.Vue.createElementVNode, ks = window.Vue.withDirectives, Dg = window.Vue.toDisplayString, G8 = window.Vue.createTextVNode, X8 = window.Vue.vShow, Pg = window.Vue.isRef, Bg = window.Vue.renderList, Fg = window.Vue.Fragment, cn = window.Vue.openBlock, es = window.Vue.createElementBlock, W8 = window.Vue.withKeys, Ng = window.Vue.createCommentVNode, Mg = window.Vue.createBlock, K8 = { class: "sx-suggestions-filters" }, Y8 = { class: "mb-0" }, Q8 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, J8 = { class: "mb-3" }, Z8 = { class: "px-4 pb-4 pt-7" }, e2 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, t2 = ["onKeyup", "onClick"], n2 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, s2 = { class: "sx-suggestions-filters__search-results-pending" }, o2 = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, a2 = { class: "sx-suggestions-filters__search-results-empty-primary" }, i2 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, ei = window.Vue.ref, ts = window.Vue.computed, r2 = window.Vue.inject, l2 = window.Vue.watch, Ug = window.Codex.CdxButton, c2 = window.Codex.CdxIcon, u2 = window.Codex.CdxTextInput, d2 = window.Codex.CdxMenu, g2 = window.Codex.CdxTabs, p2 = window.Codex.CdxTab, m2 = {
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
    } : { limit: 0 }, d = (D, M) => {
      if (D !== "all")
        return !1;
      if (M === ee) {
        const Q = p([ee]);
        return Q.length && Q[0].filters.length > 6;
      }
      return M === ke;
    }, { allFilters: u, isFilterSelected: i, selectFilter: c, findSelectedFilter: g } = sr(), p = (D) => D.flatMap((M) => u.value.filter((Q) => Q.type === M)).filter(Boolean), m = () => {
      E(), s("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: h,
      logSuggestionFiltersConfirm: f,
      logSuggestionFiltersSelect: v
    } = zf(), _ = () => {
      h(), m();
    }, b = () => {
      y.value && (f(y.value), c(y.value)), m();
    }, x = ei(!1), y = ei(null), E = () => {
      y.value = null, x.value = !1;
    }, S = (D) => {
      v(D), y.value = D, x.value = !0;
    }, F = (D) => y.value ? y.value.id === D.id && y.value.type === D.type : i(D), V = r2("breakpoints"), A = ts(() => V.value.mobile), { searchInput: R, searchScope: K, searchResults: ie, searchResultsLoading: te } = U8(), j = ts(
      () => y.value || g()
    ), W = ei(null);
    l2(W, () => {
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
    ), $e = ei({}), Fe = ts(
      () => $e.value[K.value]
    ), De = ts(() => {
      var M;
      const D = (M = Fe.value) == null ? void 0 : M.getHighlightedMenuItem();
      return D == null ? void 0 : D.id;
    }), Z = (D) => {
      D.key !== " " && Fe.value && Fe.value.delegateKeyNavigation(D);
    }, tt = (D, M) => {
      $e.value[M] = D;
    };
    return (D, M) => {
      const Q = q8("i18n");
      return cn(), Mg(ye(bt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: A.value,
        header: !1
      }, {
        default: At(() => [
          Ht("section", K8, [
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
                    ft(ye(Ug), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": D.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: _
                    }, {
                      default: At(() => [
                        ft(ye(c2), { icon: ye(Qs) }, null, 8, ["icon"])
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
                    ks(Ht("h5", Y8, null, 512), [
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
                    ks(ft(ye(Ug), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: b
                    }, {
                      default: At(() => [
                        G8(Dg(D.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [X8, x.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ht("div", Q8, [
              ks(Ht("h5", J8, null, 512), [
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
            Ht("div", Z8, [
              ft(ye(u2), {
                modelValue: ye(R),
                "onUpdate:modelValue": M[0] || (M[0] = (w) => Pg(R) ? R.value = w : null),
                role: "combobox",
                "aria-activedescendant": De.value,
                "aria-controls": "sx-suggestions-filters__search-results__menu",
                "aria-autocomplete": "none",
                placeholder: r.value.searchPlaceholder,
                "input-type": "search",
                "start-icon": ye(zc),
                clearable: !!ye(R),
                onKeydown: Z
              }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
            ]),
            ft(ye(g2), {
              active: ye(K),
              "onUpdate:active": [
                M[2] || (M[2] = (w) => Pg(K) ? K.value = w : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: At(() => [
                (cn(!0), es(Fg, null, Bg(o.value, (w, B) => (cn(), Mg(ye(p2), {
                  key: B,
                  name: w.name,
                  label: w.label
                }, {
                  default: At(() => [
                    ye(R) ? (cn(), es("div", n2, [
                      ft(ye(d2), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (T) => tt(T, w.name),
                        selected: W.value,
                        "onUpdate:selected": M[1] || (M[1] = (T) => W.value = T),
                        "show-pending": ye(te),
                        expanded: "",
                        "menu-items": re.value
                      }, {
                        pending: At(() => [
                          ks(Ht("div", s2, null, 512), [
                            [Q, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": At(() => [
                          ye(te) ? Ng("", !0) : (cn(), es("div", o2, [
                            ks(Ht("span", a2, null, 512), [
                              [Q, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            ks(Ht("span", i2, null, 512), [
                              [Q, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (cn(), es("div", e2, [
                      (cn(!0), es(Fg, null, Bg(w.filterGroups, (T) => (cn(), es("div", {
                        key: T.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        ft(P8, {
                          "filter-group": T,
                          "tentatively-select-filter": S,
                          "is-selected": F,
                          limit: d(w.name, T.type) ? 4 : 0,
                          "get-sub-filter-config": (N) => l(N, w.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        d(w.name, T.type) ? (cn(), es("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: W8((N) => a(T.id), ["enter"]),
                          onClick: (N) => a(T.id)
                        }, [
                          Ht("span", null, Dg(D.$i18n(se[T.id])), 1)
                        ], 40, t2)) : Ng("", !0)
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
const ko = window.Vue.unref, ti = window.Vue.openBlock, Ig = window.Vue.createBlock;
window.Vue.createCommentVNode;
const h2 = window.Vue.renderList, f2 = window.Vue.Fragment, Rg = window.Vue.createElementBlock, w2 = window.Vue.normalizeClass, zg = window.Vue.createVNode, v2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, Og = window.Vue.ref;
window.Vue.computed;
const jg = window.Vue.watch, _2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = ge(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: s } = zf(), {
      getFiltersSummary: o,
      selectFilter: a,
      isFilterSelected: r,
      waitingForPageCollectionsFetch: l,
      validateURLFilterWithCollections: d
    } = sr(), u = Og(!1), i = () => {
      s(), u.value = !0;
    }, c = (p) => {
      n(p), a(p);
    }, g = Og(o());
    return jg(u, (p) => {
      p || (g.value = o());
    }), jg(l, (p) => {
      p || (d(), g.value = o());
    }), (p, m) => ko(l) ? (ti(), Ig(ko(dt), { key: 0 })) : (ti(), Rg("div", v2, [
      (ti(!0), Rg(f2, null, h2(g.value, (h) => (ti(), Ig(ds, {
        key: h.label,
        class: w2(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": ko(r)(h)
        }]),
        icon: h.icon,
        content: h.label,
        onClick: (f) => c(h)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      zg(ds, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: ko(pu),
        content: ko(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: i
      }, null, 8, ["icon", "content"]),
      zg(m2, {
        modelValue: u.value,
        "onUpdate:modelValue": m[0] || (m[0] = (h) => u.value = h)
      }, null, 8, ["modelValue"])
    ]));
  }
}, $s = window.Vue.computed, Hg = window.Vue.ref, S2 = window.Vue.watch, y2 = window.Vuex.useStore, x2 = () => {
  const e = y2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: a } = ru(), r = Ct(), l = $s(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), d = $s(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), u = Hg(0), i = Hg(0), { maxSuggestionsPerSlice: c } = e.state.suggestions, g = 4, p = $s(
    () => a(u.value)
  ), m = $s(
    () => o(i.value)
  ), h = () => {
    y(), V(), E(), A();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: v
  } = hu(), _ = (R) => R.length === c, b = $s(
    () => _(m.value)
  ), x = $s(
    () => _(p.value)
  ), y = () => {
    const R = (u.value + 1) % g, K = _(
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
  }, V = () => u.value = (u.value + 1) % g, A = () => i.value = (i.value + 1) % g;
  return S2(
    s,
    () => {
      i.value = 0, E(), u.value = 0, y();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: F,
    discardSectionSuggestion: S,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: d,
    sectionSuggestionsLoading: l,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: o,
    isCurrentPageSuggestionsSliceFull: b,
    isCurrentSectionSuggestionsSliceFull: x
  };
}, b2 = window.Vuex.useStore, yu = () => {
  const e = b2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = hu(), s = (u, i, c) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === u && g.targetLanguage === i && g.sourceTitle === c
  ), o = (u) => C(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: c, targetLanguage: g } = u;
    yield me.markFavorite(i, c, g);
    const p = new Hs({
      title: i,
      sourceLanguage: c,
      targetLanguage: g
    });
    e.commit("suggestions/addFavoriteSuggestion", p);
  });
  return {
    markFavoritePageSuggestion: (u) => {
      e.commit("suggestions/removePageSuggestionFromList", u), n(), o(u);
    },
    markFavoriteSectionSuggestion: (u) => {
      e.commit(
        "suggestions/removeSectionSuggestionFromList",
        u
      ), t(), o(u);
    },
    markFavoriteSuggestion: (u, i, c) => C(void 0, null, function* () {
      const g = s(
        i,
        c,
        u
      );
      g && (e.commit(
        "suggestions/removePageSuggestionFromList",
        g
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](i, c, u);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield me.markFavorite(
        u,
        i,
        c
      );
      const m = new Hs({
        title: u,
        sourceLanguage: i,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (u) => (e.commit("suggestions/removeFavoriteSuggestion", u), me.unmarkFavorite(u))
  };
}, C2 = "suggestion_no_seed", k2 = "suggestion_recent_edit", $2 = "suggestion_topic_area", V2 = "suggestion_search_result_seed", E2 = "suggestion_featured", L2 = "suggestion_collections", T2 = "suggestion_region", A2 = () => {
  const { currentSuggestionFilters: e } = P();
  return (t = null) => {
    const { type: n, id: s } = e.value;
    if (s === nn)
      return t ? k2 : C2;
    if (n === We)
      return $2;
    if (n === ke)
      return T2;
    if (n === yt)
      return V2;
    if (s === bn)
      return E2;
    if (s === ee || n === ee)
      return L2;
    const o = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${s}`
    );
    throw mw.errorLogger.logError(o, "error.contenttranslation"), o;
  };
};
const qg = window.Vue.normalizeClass, D2 = window.Vue.resolveDirective, $o = window.Vue.createElementVNode, ni = window.Vue.withDirectives, fe = window.Vue.unref, st = window.Vue.openBlock, qt = window.Vue.createBlock, An = window.Vue.createCommentVNode, ll = window.Vue.createVNode, Vo = window.Vue.withCtx, Gg = window.Vue.renderList, Xg = window.Vue.Fragment, cl = window.Vue.createElementBlock, P2 = window.Vue.toDisplayString, B2 = window.Vue.createTextVNode, F2 = window.Vue.vShow, N2 = { class: "cx-suggestion-list" }, M2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, U2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, I2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Gt = window.Vue.computed, R2 = window.Vue.inject, z2 = window.Vue.ref, O2 = window.Codex.CdxButton, j2 = window.Codex.CdxIcon, H2 = window.Vuex.useStore, q2 = {
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
    } = P(), { supportedSourceLanguageCodes: o, supportedTargetLanguageCodes: a } = wa(), r = of(), l = (Z) => r(Z, n.value), d = (Z) => r(t.value, Z), u = A2(), i = ya(), c = (Z) => {
      i(
        Z.sourceTitle,
        Z.sourceLanguage,
        Z.targetLanguage,
        u(Z.suggestionSeed),
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
    } = x2(), y = z2(null), E = Ct(), S = () => {
      E({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), y.value && y.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: F, markFavoritePageSuggestion: V } = yu(), A = R2("breakpoints"), R = Gt(() => A.value.mobile), K = Gt(
      () => R.value ? null : "pb-2 flex justify-between items-center"
    ), ie = H2(), te = Gt(
      () => ie.state.suggestions.isPageSuggestionsFetchPending
    ), j = Gt(
      () => ie.state.suggestions.isSectionSuggestionsFetchPending
    ), W = Gt(
      () => te.value || v.value && !b.value
    ), se = Gt(
      () => j.value || _.value && !x.value
    ), re = Gt(
      () => te.value || v.value || g.value.length > 0
    ), $e = Gt(
      () => j.value || _.value || p.value.length > 0
    ), Fe = Gt(
      () => !re.value && !$e.value
    ), De = Gt(
      () => !_.value && !v.value && !te.value && !j.value && !Fe.value
    );
    return (Z, tt) => {
      const D = D2("i18n");
      return ni((st(), cl("div", N2, [
        ll(fe(Je), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: Vo(() => [
            $o("div", {
              class: qg(["cx-suggestion-list__header-card__header px-4", K.value])
            }, [
              ni($o("h3", {
                class: qg(["mw-ui-card__title mb-0", { "py-3": R.value }])
              }, null, 2), [
                [D, void 0, "cx-suggestionlist-title"]
              ]),
              R.value ? An("", !0) : (st(), qt(Xi, {
                key: 0,
                "source-languages": fe(o),
                "target-languages": fe(a),
                "selected-source-language": fe(t),
                "selected-target-language": fe(n),
                "onUpdate:selectedSourceLanguage": l,
                "onUpdate:selectedTargetLanguage": d
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            ll(_2)
          ]),
          default: Vo(() => [
            R.value ? (st(), qt(Xi, {
              key: 0,
              "source-languages": fe(o),
              "target-languages": fe(a),
              "selected-source-language": fe(t),
              "selected-target-language": fe(n),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": d
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : An("", !0)
          ]),
          _: 1
        }),
        $e.value ? (st(), qt(fe(Je), {
          key: 0,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: Vo(() => [
            ni($o("h5", M2, null, 512), [
              [D, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (st(!0), cl(Xg, null, Gg(fe(p), (M, Q) => (st(), qt(Yc, {
              key: `section-suggestion-${Q}`,
              class: "ma-0",
              suggestion: M,
              onClose: (w) => fe(h)(M),
              onClick: (w) => c(M),
              onBookmark: (w) => fe(F)(M)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            se.value ? (st(), qt(fe(dt), { key: 0 })) : An("", !0)
          ]),
          _: 1
        })) : An("", !0),
        re.value ? (st(), qt(fe(Je), {
          key: 1,
          ref_key: "pageSuggestionsList",
          ref: y,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: Vo(() => [
            ni($o("h5", U2, null, 512), [
              [D, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (st(!0), cl(Xg, null, Gg(fe(g), (M, Q) => (st(), qt(Yc, {
              key: `page-suggestion-${Q}`,
              suggestion: M,
              onClose: (w) => fe(m)(M),
              onClick: (w) => c(M),
              onBookmark: (w) => fe(V)(M)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            W.value ? (st(), qt(fe(dt), { key: 0 })) : An("", !0)
          ]),
          _: 1
        }, 512)) : An("", !0),
        Fe.value ? (st(), qt(Rf, {
          key: 2,
          title: Z.$i18n("cx-sx-suggestion-list-empty-title"),
          description: Z.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : An("", !0),
        $o("div", I2, [
          De.value ? (st(), qt(fe(O2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: S
          }, {
            default: Vo(() => [
              ll(fe(j2), {
                class: "me-1",
                icon: fe(Zh)
              }, null, 8, ["icon"]),
              B2(" " + P2(Z.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : An("", !0)
        ])
      ], 512)), [
        [F2, e.active]
      ]);
    };
  }
}, G2 = window.Vue.resolveDirective, X2 = window.Vue.createElementVNode, W2 = window.Vue.withDirectives, K2 = window.Vue.renderList, Y2 = window.Vue.Fragment, ul = window.Vue.openBlock, Q2 = window.Vue.createElementBlock, Wg = window.Vue.unref, Kg = window.Vue.createBlock, Yg = window.Vue.withCtx, J2 = window.Vue.createCommentVNode, Z2 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, e$ = window.Vue.computed, t$ = window.Vuex.useStore, n$ = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = t$(), n = e$(() => t.state.suggestions.favorites || []), s = ya(), o = (r) => s(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = yu();
    return (r, l) => {
      const d = G2("i18n");
      return n.value.length ? (ul(), Kg(Wg(Je), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Yg(() => [
          W2(X2("h3", Z2, null, 512), [
            [d, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Yg(() => [
          (ul(!0), Q2(Y2, null, K2(n.value, (u, i) => (ul(), Kg(Yc, {
            key: `favorite-${i}`,
            suggestion: u,
            onClick: (c) => o(u),
            onBookmark: (c) => Wg(a)(u)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : J2("", !0);
    };
  }
};
const s$ = window.Vue.resolveDirective, Eo = window.Vue.createElementVNode, o$ = window.Vue.withDirectives, a$ = window.Vue.renderList, i$ = window.Vue.Fragment, Qg = window.Vue.openBlock, Jg = window.Vue.createElementBlock, r$ = window.Vue.unref, l$ = window.Vue.createVNode, c$ = window.Vue.toDisplayString, u$ = { class: "cx-help-panel pa-4" }, d$ = { class: "cx-help-panel__item-list mt-6 ps-2" }, g$ = ["href", "target"], p$ = ["textContent"], m$ = window.Codex.CdxIcon, h$ = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = ge(), n = [
      {
        icon: py,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: cy,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (s, o) => {
      const a = s$("i18n");
      return Qg(), Jg("div", u$, [
        o$(Eo("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Eo("ul", d$, [
          (Qg(), Jg(i$, null, a$(n, (r, l) => Eo("li", {
            key: l,
            class: "mt-4"
          }, [
            Eo("a", {
              href: r.href,
              target: r.target
            }, [
              l$(r$(m$), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Eo("span", {
                textContent: c$(r.label)
              }, null, 8, p$)
            ], 8, g$)
          ])), 64))
        ])
      ]);
    };
  }
};
const f$ = window.Vue.resolveDirective, Dn = window.Vue.createElementVNode, dl = window.Vue.withDirectives, gl = window.Vue.toDisplayString, si = window.Vue.unref, pl = window.Vue.withCtx, oi = window.Vue.createVNode, w$ = window.Vue.openBlock, v$ = window.Vue.createElementBlock, _$ = { class: "cx-stats-panel pa-4" }, S$ = ["textContent"], y$ = { class: "cx-stats-panel__monthly-stats-label" }, x$ = ["textContent"], b$ = { class: "cx-stats-panel__total-stats-label" }, C$ = ["href", "target"], k$ = ["textContent"], $$ = window.Codex.CdxIcon, V$ = window.Vue.ref, Zg = window.Vue.computed, E$ = window.Vue.watch, L$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = ge(), n = e, s = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = Zg(() => {
      var u, i;
      const d = ((i = (u = n.stats) == null ? void 0 : u[s]) == null ? void 0 : i.count) || 0;
      return mw.language.convertNumber(d);
    }), a = Zg(() => {
      var u, i;
      const d = ((i = (u = n.stats) == null ? void 0 : u[s]) == null ? void 0 : i.delta) || 0;
      return mw.language.convertNumber(d);
    }), r = V$(null), l = {
      icon: Qh,
      label: t.i18n("cx-sx-dashboard-stats-panel-all-stats-label"),
      href: "https://superset.wmcloud.org/superset/dashboard/p/X61GbQpZ5Rb/",
      target: "_blank"
    };
    return E$(
      () => n.stats,
      () => {
        const d = n.stats, u = r.value.getContext("2d"), i = Object.keys(n.stats || {}).sort(), c = i.reduce(
          (E, S) => Math.max(E, d[S].delta),
          0
        ), g = i.map((E) => d[E].delta), p = r.value.getBoundingClientRect().width, m = r.value.getBoundingClientRect().height;
        r.value.width = p, r.value.height = m;
        const h = 4, f = 6, v = 50, _ = (v - h) / c;
        let b = h;
        const x = Math.floor(
          (p - h) / (f + h)
        ), y = g.slice(
          Math.max(g.length - x, 0)
        );
        y.forEach((E, S) => {
          S === y.length - 1 && (u.fillStyle = "#36c");
          const F = v - E * _;
          u.fillRect(b, F, f, E * _), b += f + h;
        });
      }
    ), (d, u) => {
      const i = f$("i18n");
      return w$(), v$("div", _$, [
        dl(Dn("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        oi(si(U), null, {
          default: pl(() => [
            oi(si(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: pl(() => [
                Dn("h3", {
                  textContent: gl(a.value)
                }, null, 8, S$),
                dl(Dn("h5", y$, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            oi(si(k), { class: "cx-stats-panel__total-stats" }, {
              default: pl(() => [
                Dn("h3", {
                  textContent: gl(o.value)
                }, null, 8, x$),
                dl(Dn("h5", b$, null, 512), [
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
          oi(si($$), {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          Dn("span", {
            textContent: gl(l.label)
          }, null, 8, k$)
        ], 8, C$)
      ]);
    };
  }
}, Of = () => {
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
const T$ = window.Vue.renderSlot, A$ = window.Vue.unref, D$ = window.Vue.createVNode, P$ = window.Vue.createElementVNode, B$ = window.Vue.openBlock, F$ = window.Vue.createElementBlock, N$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, M$ = { class: "col-12 ma-0 pa-0" }, U$ = {
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
    const n = t, s = Of(), o = (a) => {
      s(a), n("update:active", a);
    };
    return (a, r) => (B$(), F$("footer", N$, [
      P$("div", M$, [
        T$(a.$slots, "default", {}, () => [
          D$(A$(ma), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: o
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, I$ = window.Vuex.useStore, R$ = () => {
  const e = I$(), t = Ks();
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
}, z$ = window.Vuex.useStore, jf = () => {
  const e = z$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a
  } = P(), { isDefaultFilter: r } = eu(), { previousRoute: l } = Te(e), d = Ct(), u = () => {
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
    return p || (r(s.value) ? u() || "direct" : "suggestion_filter_direct_preselect");
  };
  return { logDashboardOpenEvent: () => {
    if (n.value && u()) {
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
    return g === "suggestion_filter_direct_preselect" && (p.event_context = s.value.id), d(p);
  } };
}, ep = window.Vue.computed, O$ = window.Vuex.useStore, Ae = () => {
  const e = O$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s,
    sectionURLParameter: o
  } = P(), a = ep(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      s.value
    )
  ), r = ep(
    () => {
      var l;
      return !!((l = a.value) != null && l.presentSections.hasOwnProperty(
        o.value
      ));
    }
  );
  return { sectionSuggestion: a, isCurrentSectionPresent: r };
}, j$ = window.Vue.ref, ai = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, ml = j$(null), kt = () => {
  const { isCurrentSectionPresent: e } = Ae(), t = () => {
    e.value ? s(ai.EXPAND) : s(ai.NEW_SECTION);
  }, n = () => {
    ml.value = null;
  }, s = (o) => {
    if (!Object.values(ai).includes(o))
      throw new Error("[CX] Invalid publishing target used");
    ml.value = o;
  };
  return {
    target: ml,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: s,
    PUBLISHING_TARGETS: ai
  };
}, H$ = window.Vue.watch, q$ = () => {
  const { fetchAllTranslations: e } = Js(), t = nf(), n = R$(), { fetchPageCollectionGroups: s } = uu(), { logDashboardOpenEvent: o } = jf(), { applicationLanguagesInitialized: a } = af(), { clearPublishTarget: r } = kt();
  return () => C(void 0, null, function* () {
    s(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), H$(
      a,
      () => {
        a.value && (o(), t());
      },
      { immediate: !0 }
    );
  });
}, tp = window.Vue.computed, G$ = window.Vue.ref, X$ = window.Vue.watch, W$ = window.Vue.watchEffect, K$ = window.Vuex.useStore, Y$ = ["suggestions", "draft", "published"], Q$ = () => {
  const e = K$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = P(), { translationsFetched: s } = Js(), o = G$(null);
  if (Y$.includes(t.value))
    o.value = t.value;
  else {
    const a = tp(
      () => s.value.draft
    ), r = tp(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? o.value = r.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", X$(a, (l) => {
      l && (o.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return W$(() => {
    n(o.value), window.scrollTo(0, 0);
  }), o;
}, J$ = window.Vue.computed, Z$ = () => {
  const e = ge();
  return J$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: U0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Ki,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: M0,
        type: "text"
      }
    }
  ]);
};
const xe = window.Vue.unref, Me = window.Vue.createVNode, eV = window.Vue.toDisplayString, tV = window.Vue.createTextVNode, un = window.Vue.withCtx, hl = window.Vue.openBlock, np = window.Vue.createBlock, sp = window.Vue.createCommentVNode, nV = window.Vue.vShow, sV = window.Vue.withDirectives, oV = window.Vue.isRef, aV = window.Vue.createElementBlock, op = window.Vue.computed, iV = window.Vue.inject, rV = window.Vuex.useStore, lV = window.Codex.CdxButton, cV = window.Codex.CdxIcon, uV = {
  __name: "CXDashboard",
  setup(e) {
    const t = et(), n = Ct(), s = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    q$()();
    const a = rV();
    a.dispatch("translator/fetchTranslatorStats");
    const r = op(() => a.state.translator.translatorStats), l = Q$(), d = Z$(), u = Of(), i = (p) => {
      u(p), l.value = p;
    }, c = iV("breakpoints"), g = op(() => c.value.mobile);
    return mw.cx.eventlogging.stats.dashboardAccess(g.value), (p, m) => (hl(), aV("div", null, [
      Me(xe(U), { class: "ma-0 pb-4" }, {
        default: un(() => [
          Me(xe(lV), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: s
          }, {
            default: un(() => [
              Me(xe(cV), {
                class: "me-1",
                icon: xe(Gh)
              }, null, 8, ["icon"]),
              tV(" " + eV(p.$i18n("cx-create-new-translation")), 1)
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
        default: un(() => [
          p.$mwui.breakpoint.tabletAndUp ? (hl(), np(xe(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: un(() => [
              Me(xe(ma), {
                id: "dashboard-list-selector--desktop",
                items: xe(d),
                active: xe(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : sp("", !0),
          Me(xe(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: un(() => [
              sV(Me(n$, null, null, 512), [
                [nV, xe(l) === "suggestions"]
              ]),
              Me(q2, {
                active: xe(l) === "suggestions"
              }, null, 8, ["active"]),
              Me(hg, {
                "translation-status": "draft",
                "active-status": xe(l)
              }, null, 8, ["active-status"]),
              Me(hg, {
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
            default: un(() => [
              Me(xe(U), {
                class: "ma-0",
                align: "start"
              }, {
                default: un(() => [
                  Me(xe(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: un(() => [
                      Me(L$, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Me(xe(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: un(() => [
                      Me(h$)
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
      p.$mwui.breakpoint.mobile ? (hl(), np(U$, {
        key: 0,
        active: xe(l),
        "onUpdate:active": m[0] || (m[0] = (h) => oV(l) ? l.value = h : null),
        items: xe(d)
      }, null, 8, ["active", "items"])) : sp("", !0)
    ]));
  }
}, dV = {
  name: "DashboardView",
  components: { CxDashboard: uV }
}, gV = window.Vue.resolveComponent, pV = window.Vue.createVNode, mV = window.Vue.openBlock, hV = window.Vue.createElementBlock, fV = { class: "cx-translation-dashboard" };
function wV(e, t, n, s, o, a) {
  const r = gV("cx-dashboard");
  return mV(), hV("main", fV, [
    pV(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const ap = /* @__PURE__ */ de(dV, [["render", wV]]), vV = window.Vuex.useStore, _V = window.Vue.computed, Ot = () => {
  const e = vV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: s,
    pageURLParameter: o
  } = P();
  return { currentTranslation: _V(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === o.value && r.sectionTitleMatches(s.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, Vs = window.Vue.computed, SV = () => {
  const { sectionSuggestion: e } = Ae(), { targetLanguageURLParameter: t } = P(), { currentTranslation: n } = Ot(), s = Vs(
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
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = kn(), d = Vs(() => r ? Y.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), u = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? o.value > 1 || o.value === 1 && a.value > 0 ? "cx-sx-select-section" : o.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : o.value === 0 && a.value > 0 ? "cx-sx-select-section" : o.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = Vs(() => {
    if (o.value > 1) {
      const g = "cx-sx-existing-translation-additional-info", p = ["$1", o.value - 1];
      return mw.message(g, ...p).parse().replace("$1", `"${s.value}"`);
    } else if (o.value === 1 && a.value > 0) {
      const g = "cx-sx-translation-confirmer-action-message-single-missing-multiple-present";
      return mw.message(g, "$1").parse().replace("$1", `"${s.value}"`);
    } else if (o.value === 1 && a.value === 0) {
      const g = "cx-sx-translation-confirmer-action-message-single-missing-none-present";
      return mw.message(g, "$1").parse().replace("$1", `"${s.value}"`);
    } else if (a.value > 0) {
      const g = "cx-sx-translation-confirmer-action-message-none-missing-multiple-present";
      return mw.message(g).parse();
    } else {
      const g = "cx-sx-translation-confirmer-action-message-none-missing-none-present";
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
    getActionButtonLabel: u,
    isProgressiveButton: c,
    targetArticlePath: d
  };
};
function yV(e) {
  return e.$el = $(e), e;
}
function xV(e, t, n, s) {
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
function bV() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function CV(e, t) {
  return C(this, null, function* () {
    yield xu(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = yV(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const kV = window.Vue.computed, $V = window.Vue.onMounted, VV = window.Vue.ref;
function EV(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const LV = {
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
    const n = VV(null);
    let s = null;
    const o = kV(
      () => e.useText ? s.getDom().body.textContent : s.getHtml()
    ), a = () => {
      s.destroy(), n.value.querySelector(".toolbar").innerHTML = "";
    }, d = {
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
    return $V(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = EV;
      const i = yield CV(d, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), s = xV(
        i,
        e.content,
        e.language,
        e.dir
      );
      const c = ve.ui.contextItemFactory.lookup("reference");
      c.prototype.getRendering = bV, s.focus();
    })), { sxeditor: n };
  }
}, Hi = window.Vue.createElementVNode, TV = window.Vue.openBlock, AV = window.Vue.createElementBlock, DV = ["lang", "dir"], PV = /* @__PURE__ */ Hi("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ Hi("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ Hi("div", { class: "toolbar" })
  ])
], -1), BV = ["lang", "dir"];
function FV(e, t, n, s, o, a) {
  return TV(), AV("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    PV,
    Hi("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, BV)
  ], 8, DV);
}
const NV = /* @__PURE__ */ de(LV, [["render", FV]]);
function xu() {
  return mw.loader.using("mw.cx3.ve");
}
const MV = window.Vuex.useStore, UV = () => {
  const e = MV();
  return (t, n) => C(void 0, null, function* () {
    const s = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!s)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield xu(), new Promise((o) => {
      setTimeout(() => {
        const a = Dh.convertSegmentedContentToPageSections(
          s.content,
          !0
          // resolve references
        );
        s.updateSections(a), o();
      }, 0);
    });
  });
}, IV = window.Vuex.useStore, Hf = () => {
  const e = IV();
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
}, fl = window.Vue.computed, RV = window.Vuex.useStore, pt = () => {
  const e = RV(), { sectionSuggestion: t } = Ae(), { currentTranslation: n } = Ot(), {
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
      var u, i;
      return ((u = t.value) == null ? void 0 : u.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    }
  ), d = fl(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: r, currentTargetPage: d, currentTargetPageTitle: l };
}, lr = () => {
  const { currentSourcePage: e } = pt(), t = UV(), n = Hf(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = P(), d = (c, g) => C(void 0, null, function* () {
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
      xn || (yield t(
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
      return d(g, () => {
        const m = g();
        c === 0 ? m.originalTitle = e.value.title : s(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (c) => d(() => e.value.getSectionByTitle(c), () => {
      s(c);
    })
  };
}, zV = window.Vuex.useStore, Zs = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: s,
    isQuickTutorialForced: o
  } = P(), { target: a } = kt(), r = zV(), l = et(), d = () => {
    const g = l.currentRoute.value.name !== "sx-quick-tutorial" && (o() || !r.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return l.getRoutes().find((p) => p.name === g);
  }, u = () => {
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
    return location.href = m + "#" + d().path, !0;
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
    ), xn) {
      i();
      return;
    }
    if (u())
      return;
    const g = d();
    l.push({ name: g.name });
  };
}, ip = window.Vue.computed, OV = window.Vue.ref, jV = window.Vue.watchEffect, wl = /* @__PURE__ */ new Map(), HV = (e, t) => C(void 0, null, function* () {
  return (yield me.fetchArticleSections(
    e,
    t
  )).sections.filter(
    (o) => o.level === "2"
  )[0].byteoffset;
}), qV = (e, t) => {
  const n = `${e}:${t}`;
  if (wl.has(n))
    return wl.get(n);
  const s = HV(e, t);
  return wl.set(n, s), s;
}, qf = () => {
  const { currentSourcePage: e } = pt(), { sectionSuggestion: t } = Ae(), { sectionURLParameter: n } = P(), s = OV(null);
  jV(() => C(void 0, null, function* () {
    var r;
    if (t.value && n.value)
      s.value = t.value.getSectionSize(n.value);
    else if (t.value) {
      const { missingSections: l } = t.value;
      s.value = Object.keys(l).reduce(
        (d, u) => d + t.value.getSectionSize(u),
        0
      );
    } else if (e.value && !xn) {
      const l = e.value.language, d = e.value.title;
      s.value = yield qV(l, d);
    } else
      s.value = ((r = e.value) == null ? void 0 : r.articleSize) || null;
  }));
  const o = ip(() => s.value ? !t.value && xn ? Rh(s.value) : zh(s.value) : ut.unknown);
  return { isQuickTranslation: ip(() => o.value === ut.stub || o.value === ut.easy), difficulty: o, sizeInBytes: s };
}, bu = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: s
  } = P(), o = Ct(), { difficulty: a } = qf();
  return {
    logDashboardTranslationStartEvent: () => {
      const l = {
        event_type: "dashboard_translation_start",
        event_source: Ff.value,
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
      return Kc.value && (l.event_context = Kc.value), s.value ? (l.translation_source_section = s.value, l.translation_type = "section") : l.translation_type = "article", o(l);
    }
  };
}, Cu = () => {
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
      sourceSectionTitle: d,
      targetSectionTitle: u
    } = t.value, i = {
      event_type: "dashboard_translation_continue",
      translation_id: n,
      translation_source_language: s,
      translation_source_title: a,
      translation_target_language: o,
      translation_target_title: r,
      translation_type: l ? "article" : "section"
    };
    return d && (i.translation_source_section = d), u && (i.translation_target_section = u), e(i);
  };
}, GV = window.Vue.ref, XV = () => {
  const e = et(), { logDashboardTranslationStartEvent: t } = bu(), n = Cu(), s = Zs(), { sectionURLParameter: o } = P(), { targetPageExists: a } = kn(), { selectPageSectionByTitle: r } = lr(), l = () => C(void 0, null, function* () {
    yield r(o.value), e.push({ name: "sx-content-comparator" });
  }), d = GV(!1), { currentTranslation: u } = Ot();
  return {
    handlePrimaryButtonClick: () => {
      u.value ? u.value.isArticleTranslation && !xn ? d.value = !0 : (n(), s()) : o.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), s());
    },
    translationConfirmationDialogOn: d
  };
};
const WV = window.Vue.resolveDirective, rp = window.Vue.createElementVNode, lp = window.Vue.withDirectives, KV = window.Vue.unref, YV = window.Vue.withCtx, QV = window.Vue.openBlock, JV = window.Vue.createBlock, ZV = {
  href: "",
  target: "_blank"
}, eE = window.Codex.CdxDialog, tE = {
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
    const n = e, s = t, o = (u) => s("update:modelValue", u), a = ge(), r = {
      label: a.i18n(
        "cx-unreviewed-translation-dialog-review-translation-button-label"
      ),
      actionType: "progressive"
    }, l = {
      label: a.i18n("cx-unreviewed-translation-dialog-close-button-label")
    };
    function d() {
      window.open(n.targetUrl, "_blank"), o(!1);
    }
    return (u, i) => {
      const c = WV("i18n");
      return QV(), JV(KV(eE), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: u.$i18n("cx-unreviewed-translation-dialog-title"),
        "use-close-button": !0,
        "primary-action": r,
        "default-action": l,
        "onUpdate:open": i[0] || (i[0] = (g) => o(g)),
        onPrimary: d,
        onDefault: i[1] || (i[1] = (g) => o(!1))
      }, {
        default: YV(() => [
          lp(rp("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          lp(rp("a", ZV, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
}, nE = () => {
  const {
    sectionURLParameter: e,
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s
  } = P(), o = or();
  return () => C(void 0, null, function* () {
    const a = yield o(
      t.value,
      n.value,
      s.value
    );
    return a instanceof en ? a.sourceSections.includes(e.value) : !1;
  });
};
const we = window.Vue.unref, sE = window.Vue.resolveDirective, Lo = window.Vue.createElementVNode, cp = window.Vue.withDirectives, To = window.Vue.openBlock, vl = window.Vue.createElementBlock, _l = window.Vue.createCommentVNode, wt = window.Vue.createVNode, Dt = window.Vue.withCtx, Sl = window.Vue.toDisplayString, yl = window.Vue.createTextVNode, oE = window.Vue.withModifiers, up = window.Vue.createBlock, aE = window.Vue.Fragment, iE = { class: "sx-translation-confirmer-body pb-4" }, rE = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, lE = ["innerHTML"], cE = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, uE = ["href"], dE = ["innerHTML"], xl = window.Vue.computed, bl = window.Vue.ref, gE = window.Vue.watchEffect, pE = window.Vuex.useStore, Cl = window.Codex.CdxButton, mE = window.Codex.CdxIcon, hE = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = et(), s = pE(), { sectionSuggestion: o } = Ae(), { targetLanguageAutonym: a } = Te(s), { sectionURLParameter: r, clearSectionURLParameter: l } = P(), { logDashboardTranslationStartEvent: d } = bu(), u = Zs(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: c } = XV(), g = bl(!1), p = bl(null), m = () => C(this, null, function* () {
      let te = !0;
      try {
        te = yield xt.checkUnreviewedTranslations();
      } catch (j) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          j
        );
      }
      te !== !0 && (g.value = !0, p.value = te.targetUrl);
    }), h = () => C(this, null, function* () {
      yield m(), !g.value && (d(), u());
    }), f = () => C(this, null, function* () {
      yield m(), !g.value && i();
    }), v = t;
    gE(() => {
      c.value && (v("open-translation-confirmation-dialog"), c.value = !1);
    });
    const {
      actionInformationMessage: _,
      getActionButtonLabel: b,
      isProgressiveButton: x,
      targetArticlePath: y
    } = SV(), E = ge(), S = xl(
      () => E.i18n(b(!!r.value))
    ), F = () => C(this, null, function* () {
      yield m(), !g.value && n.push({ name: "sx-section-selector" });
    }), V = xl(() => {
      var te, j;
      return r.value && !!((j = (te = o.value) == null ? void 0 : te.sourceSections) != null && j.length);
    }), { targetPageExists: A } = kn(), R = xl(() => !r.value && A.value && xn), K = nE(), ie = bl(!1);
    return K().then((te) => {
      te || l(), ie.value = !0;
    }), (te, j) => {
      const W = sE("i18n");
      return To(), vl(aE, null, [
        Lo("section", iE, [
          we(r) && ie.value ? (To(), vl("section", rE, [
            cp(Lo("h6", null, null, 512), [
              [W, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Lo("h5", {
              class: "ma-0",
              innerHTML: we(r)
            }, null, 8, lE)
          ])) : we(A) && !we(r) ? (To(), vl("section", cE, [
            wt(we(U), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Dt(() => [
                cp(wt(we(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [W, [we(a)], "cx-sx-existing-translation-status"]
                ]),
                wt(we(k), { shrink: "" }, {
                  default: Dt(() => [
                    Lo("a", {
                      href: we(y),
                      target: "_blank"
                    }, [
                      wt(we(mE), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: we(nr)
                      }, null, 8, ["icon"])
                    ], 8, uE)
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
                    Lo("span", { innerHTML: we(_) }, null, 8, dE)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : _l("", !0),
          wt(we(U), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Dt(() => [
              V.value ? (To(), up(we(k), {
                key: 0,
                shrink: ""
              }, {
                default: Dt(() => [
                  wt(we(Cl), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: oE(F, ["stop"])
                  }, {
                    default: Dt(() => [
                      yl(Sl(te.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : _l("", !0),
              R.value ? (To(), up(we(k), {
                key: 1,
                shrink: ""
              }, {
                default: Dt(() => [
                  wt(we(Cl), {
                    size: "large",
                    onClick: h
                  }, {
                    default: Dt(() => [
                      yl(Sl(te.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : _l("", !0),
              wt(we(k), { shrink: "" }, {
                default: Dt(() => [
                  wt(we(Cl), {
                    weight: "primary",
                    size: "large",
                    action: we(x) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: Dt(() => [
                      yl(Sl(S.value), 1)
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
        wt(tE, {
          modelValue: g.value,
          "onUpdate:modelValue": j[0] || (j[0] = (se) => g.value = se),
          "target-url": p.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const kl = window.Vue.unref, fE = window.Vue.openBlock, wE = window.Vue.createBlock, vE = window.Vue.computed, Gf = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = wa(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: s
    } = P(), { currentLanguageTitleGroup: o } = kn(), a = vE(
      () => {
        var u;
        return ((u = o.value) == null ? void 0 : u.titles.map((i) => i.lang)) || [];
      }
    ), r = Iy(), l = (u) => r(u, s.value), d = (u) => r(n.value, u);
    return (u, i) => (fE(), wE(Xi, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": kl(t),
      "selected-source-language": kl(n),
      "selected-target-language": kl(s),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": d
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, _E = (e) => {
  const o = e / 5 / 15;
  return Math.ceil(o);
};
const Pe = window.Vue.unref, $l = window.Vue.toDisplayString, Pn = window.Vue.createElementVNode, Xt = window.Vue.createVNode, Es = window.Vue.withCtx, SE = window.Vue.resolveDirective, yE = window.Vue.withDirectives, xE = window.Vue.normalizeClass, dp = window.Vue.openBlock, bE = window.Vue.createElementBlock, CE = window.Vue.createCommentVNode, kE = window.Vue.createBlock, $E = ["textContent"], VE = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, EE = ["textContent"], LE = { class: "pe-3" }, TE = ["textContent"], AE = window.Codex.CdxButton, Ao = window.Codex.CdxIcon, Bn = window.Vue.computed, DE = window.Vuex.useStore, PE = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = DE(), { currentSourcePage: n } = pt(), { sectionSuggestion: s } = Ae(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l
    } = P(), d = Bn(() => t.state.suggestions.favorites || []), u = Bn(
      () => d.value.some(
        (F) => r.value === F.title && o.value === F.sourceLanguage && a.value === F.targetLanguage
      )
    ), { markFavoriteSuggestion: i, removeFavoriteSuggestion: c } = yu(), g = () => i(
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
      () => u.value ? Kh : Yh
    ), h = Bn(
      () => u.value ? p : g
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
    }), { isQuickTranslation: x, sizeInBytes: y } = qf(), E = ge(), S = Bn(() => {
      if (!s.value && !n.value || !y.value)
        return "";
      const F = _E(y.value), V = F >= 60 ? F / 60 : 0, A = Math.round(V * 2) / 2;
      if (!s.value && xn)
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
      const A = SE("i18n");
      return dp(), kE(Pe(U), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: Es(() => [
          Xt(Pe(k), null, {
            default: Es(() => [
              Xt(Pe(U), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: Es(() => [
                  Xt(Pe(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: Es(() => [
                      Pn("h5", {
                        class: "ma-0 me-1",
                        textContent: $l(Pe(r))
                      }, null, 8, $E),
                      Xt(Pe(Ao), {
                        size: "x-small",
                        icon: Pe(nr)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Xt(Pe(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Es(() => [
                      Xt(Pe(AE), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": F.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: Es(() => [
                          Xt(Pe(Ao), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Pn("div", VE, [
                Pn("div", null, [
                  Pn("span", null, [
                    Xt(Pe(Ao), {
                      icon: Pe(Jh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Pn("span", {
                      class: "pe-3",
                      textContent: $l(v.value)
                    }, null, 8, EE)
                  ]),
                  Pn("span", null, [
                    Xt(Pe(Ao), {
                      icon: Pe(Qh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    yE(Pn("span", LE, null, 512), [
                      [A, [b.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                S.value ? (dp(), bE("span", {
                  key: 0,
                  class: xE(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Pe(x)
                  }])
                }, [
                  Xt(Pe(Ao), {
                    icon: Pe(iy),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Pn("span", {
                    textContent: $l(S.value)
                  }, null, 8, TE)
                ], 2)) : CE("", !0)
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
const BE = window.Vue.resolveDirective, ns = window.Vue.createElementVNode, ii = window.Vue.withDirectives, FE = window.Vue.toDisplayString, NE = window.Vue.createTextVNode, Vl = window.Vue.unref, El = window.Vue.withCtx, Ll = window.Vue.openBlock, Tl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const ME = { class: "pa-4" }, UE = { class: "flex pt-2" }, IE = window.Codex.CdxButton, RE = window.Vue.ref, zE = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, s = () => n("update:modelValue", !1), o = Zs(), a = Cu(), r = RE(!1), { currentTranslation: l } = Ot(), d = () => C(this, null, function* () {
      r.value = !0;
      let u = !1;
      try {
        u = yield xt.splitTranslation(
          l.value.translationId
        );
      } catch (i) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          i
        );
      }
      r.value = !1, u && (a(), o(), s());
    });
    return (u, i) => {
      const c = BE("i18n");
      return Ll(), Tl(Vl(bt), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: s
      }, {
        footer: El(() => [
          ns("div", UE, [
            r.value ? (Ll(), Tl(Vl(dt), { key: 1 })) : (Ll(), Tl(Vl(IE), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: d
            }, {
              default: El(() => [
                NE(FE(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: El(() => [
          ns("div", ME, [
            ii(ns("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ii(ns("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            ns("p", null, [
              ii(ns("strong", null, null, 512), [
                [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ii(ns("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, OE = window.Vuex.useStore;
let ri = [];
const ku = () => {
  const e = OE();
  return (t, n) => {
    const s = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || ri.includes(s) ? Promise.resolve() : (ri.push(s), ps.fetchLanguageTitles(t, n).then((o) => {
      ri = ri.filter(
        (a) => a !== s
      ), o && e.commit("mediawiki/addLanguageTitleGroup", o);
    }));
  };
};
function jE(e, t) {
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
function HE() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function qE(e, t, n, s) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const o = mw.config.get("wgWikiID"), a = Y.getWikiDomainCode(e), r = Y.getWikiDomainCode(t), l = {
    action: "wblinktitles",
    fromsite: o.replace(r, a),
    fromtitle: n,
    tosite: o,
    totitle: s
  }, d = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(d.postWithToken("csrf", l)).then((u) => {
    const c = {
      action: "tag",
      revid: u.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(d.postWithToken("csrf", c));
  });
}
const $u = {
  fetchSupportedMTProviders: jE,
  fetchCXServerToken: HE,
  addWikibaseLink: qE
}, GE = window.Vue.ref, Ls = GE(null), Xf = () => {
  const e = () => C(void 0, null, function* () {
    var n, s;
    Ls.value || (yield $u.fetchCXServerToken().then((o) => {
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
const gp = window.Vue.resolveDirective, li = window.Vue.createElementVNode, pp = window.Vue.withDirectives, Fn = window.Vue.unref, ci = window.Vue.withCtx, dn = window.Vue.createVNode, Al = window.Vue.openBlock, mp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const XE = window.Vue.createBlock, WE = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, KE = { class: "mb-0" }, YE = { class: "sx-translation-confirmer__article-image flex justify-center" }, QE = ["src"], JE = { class: "ma-3" }, hp = window.Vue.computed, ZE = window.Vue.inject, e4 = window.Vue.onBeforeUnmount, t4 = window.Vue.ref, n4 = window.Vuex.useStore, s4 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = n4(), { currentSourcePage: n } = pt(), { previousRoute: s } = Te(t), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: d
    } = P(), u = ZE("breakpoints"), i = hp(() => u.value.nextBreakpoint), c = hp(
      () => {
        var b;
        return (b = n.value) == null ? void 0 : b.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: g } = Js(), p = ku();
    g("draft"), p(o.value, r.value), xu(), Xf()(), tf()(a.value);
    const f = et(), v = () => {
      const b = ["dashboard", "sx-article-search"];
      !s.value || !b.includes(s.value) ? f.push({ name: "dashboard" }) : f.push({ name: s.value });
    };
    e4(() => {
      const b = f.currentRoute.value.name;
      (b === "dashboard" || b === "sx-article-search") && d();
    });
    const _ = t4(!1);
    return (b, x) => {
      const y = gp("i18n"), E = gp("i18n-html");
      return Al(), mp("section", WE, [
        dn(Fn(U), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ci(() => [
            dn(Fn(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ci(() => [
                pp(li("h5", KE, null, 512), [
                  [y, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            dn(Fn(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ci(() => [
                dn(Fn(Xe), {
                  class: "pa-0",
                  type: "icon",
                  icon: Fn(Yi),
                  "icon-size": 20,
                  onClick: v
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        li("div", YE, [
          c.value ? (Al(), mp("img", {
            key: 0,
            src: c.value
          }, null, 8, QE)) : (Al(), XE(Fn(Ze), {
            key: 1,
            size: "120",
            icon: Fn(ph),
            "icon-color": b.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        dn(PE),
        dn(Gf),
        dn(hE, {
          onOpenTranslationConfirmationDialog: x[0] || (x[0] = (S) => _.value = !0)
        }),
        dn(Fn(U), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: ci(() => [
            li("p", JE, [
              pp(li("small", null, null, 512), [
                [E, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        dn(zE, {
          modelValue: _.value,
          "onUpdate:modelValue": x[1] || (x[1] = (S) => _.value = S)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const o4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: s4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, a4 = window.Vue.resolveComponent, i4 = window.Vue.createVNode, r4 = window.Vue.normalizeClass, l4 = window.Vue.openBlock, c4 = window.Vue.createElementBlock;
function u4(e, t, n, s, o, a) {
  const r = a4("sx-translation-confirmer");
  return l4(), c4("main", {
    class: r4(["sx-translation-confirmer-view", a.classes])
  }, [
    i4(r)
  ], 2);
}
const d4 = /* @__PURE__ */ de(o4, [["render", u4]]);
const g4 = window.Vue.toDisplayString, fp = window.Vue.unref, p4 = window.Vue.createVNode, m4 = window.Vue.createTextVNode, h4 = window.Vue.createElementVNode, f4 = window.Vue.openBlock, w4 = window.Vue.createElementBlock, v4 = { class: "sx-section-selector-view-article-item" }, _4 = ["href"], S4 = window.Codex.CdxIcon, wp = {
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
    return (t, n) => (f4(), w4("span", v4, [
      h4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        m4(g4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        p4(fp(S4), {
          size: "x-small",
          icon: fp(nr)
        }, null, 8, ["icon"])
      ], 8, _4)
    ]));
  }
};
const y4 = window.Vue.resolveDirective, ui = window.Vue.createElementVNode, Dl = window.Vue.withDirectives, ss = window.Vue.unref, x4 = window.Vue.toDisplayString, di = window.Vue.withCtx, Do = window.Vue.createVNode, b4 = window.Vue.openBlock, C4 = window.Vue.createElementBlock, k4 = { class: "sx-section-selector__header pa-4" }, $4 = { class: "sx-section-selector__header-text ma-0" }, V4 = ["textContent"], E4 = { class: "pt-0 ma-0" }, L4 = { class: "ma-0" }, T4 = window.Codex.CdxButton, A4 = window.Codex.CdxIcon, D4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Ae();
    return (n, s) => {
      const o = y4("i18n");
      return b4(), C4("div", k4, [
        Do(ss(U), { class: "ma-0 pb-3" }, {
          default: di(() => [
            Do(ss(k), null, {
              default: di(() => {
                var a;
                return [
                  Dl(ui("h6", $4, null, 512), [
                    [o, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ui("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: x4((a = ss(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, V4)
                ];
              }),
              _: 1
            }),
            Do(ss(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: di(() => [
                Do(ss(T4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: s[0] || (s[0] = (a) => n.$emit("close"))
                }, {
                  default: di(() => [
                    Do(ss(A4), { icon: ss(Qs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Dl(ui("h4", E4, null, 512), [
          [o, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Dl(ui("p", L4, null, 512), [
          [o, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, P4 = window.Vue.renderList, B4 = window.Vue.Fragment, Pl = window.Vue.openBlock, vp = window.Vue.createElementBlock, F4 = window.Vue.renderSlot, gi = window.Vue.unref, _p = window.Vue.createVNode, Sp = window.Vue.withCtx, N4 = window.Vue.createBlock, M4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, U4 = window.Codex.CdxButton, I4 = window.Codex.CdxIcon, Wf = {
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
    return (t, n) => (Pl(), vp("ul", M4, [
      (Pl(!0), vp(B4, null, P4(e.sections, (s) => (Pl(), N4(gi(U), {
        key: s.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Sp(() => [
          _p(gi(U4), {
            weight: "quiet",
            class: "col justify-start items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (o) => t.$emit("select-section", s.sourceTitle)
          }, {
            default: Sp(() => [
              F4(t.$slots, "default", {
                targetSection: s.targetTitle,
                sourceSection: s.sourceTitle,
                isEasy: s.isEasy
              }),
              _p(gi(I4), {
                icon: gi(Sa),
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
}, R4 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const z4 = window.Vue.resolveDirective, pi = window.Vue.createElementVNode, mi = window.Vue.withDirectives, Pt = window.Vue.unref, hi = window.Vue.openBlock, Bl = window.Vue.createBlock, O4 = window.Vue.createCommentVNode, Ts = window.Vue.withCtx, Po = window.Vue.createVNode, j4 = window.Vue.toDisplayString, H4 = window.Vue.createTextVNode, q4 = window.Vue.createElementBlock, G4 = { class: "sx-section-selector__missing-sections py-2" }, X4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, W4 = ["lang", "dir", "innerHTML"], Fl = window.Vue.computed, K4 = window.Codex.CdxButton, Y4 = window.Codex.CdxInfoChip, Q4 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Ae(), { targetLanguageURLParameter: n } = P(), s = Fl(() => I.getAutonym(n.value)), o = Fl(
      () => {
        var r;
        return Object.keys(((r = t.value) == null ? void 0 : r.missingSections) || {}).length === 0;
      }
    ), a = Fl(() => {
      var r;
      return (r = t.value) != null && r.orderedMissingSections ? t.value.orderedMissingSections.map((l) => Ke(ce({}, l), {
        isEasy: Oh(
          t.value.getSectionSize(l.sourceTitle)
        )
      })) : [];
    });
    return (r, l) => {
      const d = z4("i18n");
      return hi(), q4("section", G4, [
        mi(pi("h4", X4, null, 512), [
          [d, [
            s.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (hi(), Bl(Pt(U), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Ts(() => [
            Po(Pt(k), {
              class: "py-6 justify-center",
              innerHTML: Pt(R4)
            }, null, 8, ["innerHTML"]),
            Po(Pt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Ts(() => [
                mi(pi("h6", null, null, 512), [
                  [d, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Po(Pt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Ts(() => [
                mi(pi("p", null, null, 512), [
                  [d, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Po(Pt(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Ts(() => [
                Po(Pt(K4), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: l[1] || (l[1] = (u) => r.$emit("close"))
                }, {
                  default: Ts(() => [
                    H4(j4(r.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (hi(), Bl(Wf, {
          key: 0,
          sections: a.value,
          onSelectSection: l[0] || (l[0] = (u) => r.$emit("select-section", u))
        }, {
          default: Ts(({ sourceSection: u, isEasy: i }) => {
            var c, g;
            return [
              pi("h5", {
                class: "ma-0",
                lang: (c = Pt(t)) == null ? void 0 : c.sourceLanguage,
                dir: Pt(I.getDir)((g = Pt(t)) == null ? void 0 : g.sourceLanguage),
                innerHTML: u
              }, null, 8, W4),
              i ? mi((hi(), Bl(Pt(Y4), {
                key: 0,
                class: "sx-section-selector__easy-section-badge"
              }, null, 512)), [
                [d, void 0, "cx-sx-section-selector-easy-section-badge"]
              ]) : O4("", !0)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const J4 = window.Vue.resolveDirective, fi = window.Vue.createElementVNode, Z4 = window.Vue.withDirectives, os = window.Vue.unref, e3 = window.Vue.withCtx, t3 = window.Vue.createVNode, n3 = window.Vue.openBlock, s3 = window.Vue.createElementBlock, o3 = { class: "sx-section-selector__present-sections py-2" }, a3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, i3 = { class: "sx-section-selector__present-section-button-content" }, r3 = ["lang", "dir", "innerHTML"], l3 = ["lang", "dir", "innerHTML"], c3 = window.Vue.computed, yp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Ae(), { targetLanguageURLParameter: n } = P(), s = c3(() => I.getAutonym(n.value));
    return (o, a) => {
      var l;
      const r = J4("i18n");
      return n3(), s3("section", o3, [
        Z4(fi("h4", a3, null, 512), [
          [r, [
            s.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        t3(Wf, {
          sections: ((l = os(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[0] || (a[0] = (d) => o.$emit("select-section", d))
        }, {
          default: e3(({ sourceSection: d, targetSection: u }) => {
            var i, c, g, p;
            return [
              fi("div", i3, [
                fi("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = os(t)) == null ? void 0 : i.sourceLanguage,
                  dir: os(I.getDir)((c = os(t)) == null ? void 0 : c.sourceLanguage),
                  innerHTML: d
                }, null, 8, r3),
                fi("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = os(t)) == null ? void 0 : g.targetLanguage,
                  dir: os(I.getDir)((p = os(t)) == null ? void 0 : p.targetLanguage),
                  innerHTML: u
                }, null, 8, l3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Ue = window.Vue.createVNode, Nl = window.Vue.openBlock, xp = window.Vue.createBlock, bp = window.Vue.createCommentVNode, u3 = window.Vue.resolveDirective, Nn = window.Vue.createElementVNode, Bo = window.Vue.withDirectives, ot = window.Vue.unref, gn = window.Vue.withCtx, d3 = window.Vue.normalizeClass, Cp = window.Vue.toDisplayString, kp = window.Vue.createTextVNode, g3 = window.Vue.createElementBlock, p3 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, m3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, h3 = { class: "sx-section-selector__additional-consideration-title" }, f3 = { href: "#" }, w3 = { class: "sx-section-selector__additional-consideration-title" }, v3 = { href: "#" }, Fo = window.Vue.computed, _3 = window.Vue.inject, S3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = _3("breakpoints"), n = Fo(() => t.value.desktopAndUp), { sectionSuggestion: s } = Ae(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = P(), d = Fo(() => I.getAutonym(o.value)), u = Fo(() => I.getAutonym(a.value)), i = Fo(
      () => {
        var b;
        return Y.getPageUrl(o.value, (b = s.value) == null ? void 0 : b.sourceTitle);
      }
    ), c = Fo(
      () => {
        var b;
        return Y.getPageUrl(a.value, (b = s.value) == null ? void 0 : b.targetTitle);
      }
    ), g = et(), p = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = Ot(), h = Zs(), f = Cu(), { selectPageSectionByTitle: v } = lr(), _ = (b) => {
      l(b), m.value ? (f(), h()) : (v(b), g.push({ name: "sx-content-comparator" }));
    };
    return mw.cx.eventlogging.stats.selectSectionAccess(!n.value), (b, x) => {
      const y = u3("i18n");
      return Nl(), g3("section", p3, [
        Ue(D4, { onClose: p }),
        Ue(Gf),
        Ue(ot(U), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: gn(() => [
            Ue(ot(k), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: gn(() => [
                Ue(Q4, {
                  onSelectSection: _,
                  onClose: p
                }),
                n.value ? bp("", !0) : (Nl(), xp(yp, {
                  key: 0,
                  onSelectSection: _
                })),
                Nn("section", {
                  class: d3(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Bo(Nn("h4", m3, null, 512), [
                    [y, [
                      u.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Ue(ot(U), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: gn(() => [
                      Ue(ot(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: gn(() => [
                          Ue(wp, {
                            path: i.value,
                            autonym: d.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Ue(ot(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: gn(() => [
                          Ue(wp, {
                            path: c.value,
                            autonym: u.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 2),
                Ue(ot(U), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: gn(() => [
                    Ue(ot(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: gn(() => [
                        Nn("h6", h3, [
                          Ue(ot(Ze), {
                            icon: ot(G0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          kp(" " + Cp(b.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Bo(Nn("p", null, null, 512), [
                          [y, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Bo(Nn("a", f3, null, 512), [
                          [y, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Ue(ot(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: gn(() => [
                        Nn("h6", w3, [
                          Ue(ot(Ze), {
                            icon: ot(q0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          kp(" " + Cp(b.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Bo(Nn("p", null, null, 512), [
                          [y, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Bo(Nn("a", v3, null, 512), [
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
            n.value ? (Nl(), xp(ot(k), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: gn(() => [
                Ue(yp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: _
                })
              ]),
              _: 1
            })) : bp("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, y3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: S3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, x3 = window.Vue.resolveComponent, b3 = window.Vue.createVNode, C3 = window.Vue.normalizeClass, k3 = window.Vue.openBlock, $3 = window.Vue.createElementBlock;
function V3(e, t, n, s, o, a) {
  const r = x3("sx-section-selector");
  return k3(), $3("main", {
    class: C3(["sx-section-selector-view", a.classes])
  }, [
    b3(r)
  ], 2);
}
const E3 = /* @__PURE__ */ de(y3, [["render", V3]]), wi = window.Vue.computed, L3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = P(), n = wi(
    () => I.getAutonym(e.value)
  ), s = wi(
    () => I.getAutonym(t.value)
  ), { target: o, PUBLISHING_TARGETS: a } = kt(), r = wi(
    () => o.value === a.EXPAND
  ), l = ge();
  return wi(() => {
    const d = {
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
          s.value
        ),
        type: "text"
      }
    } : u = {
      value: "target_article",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-target-selector-full-article-title",
          s.value
        ),
        type: "text"
      }
    }, [d, u];
  });
};
const $p = window.Vue.unref, T3 = window.Vue.createVNode, A3 = window.Vue.openBlock, D3 = window.Vue.createElementBlock, P3 = { class: "sx-content-comparator__content-type-selector" }, B3 = window.Vue.watchEffect, F3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = (r) => s("update:selection", r), a = L3();
    return B3(() => {
      a.value.map((l) => l.value).includes(n.selection) || o(a.value[0].value);
    }), (r, l) => (A3(), D3("div", P3, [
      T3($p(ma), {
        items: $p(a),
        active: e.selection,
        onSelect: o
      }, null, 8, ["items", "active"])
    ]));
  }
}, No = window.Vue.computed, N3 = window.Vuex.useStore, ne = () => {
  const e = N3(), { currentSourcePage: t, currentTargetPageTitle: n } = pt(), { currentMTProvider: s } = Te(e), { sectionURLParameter: o } = P(), a = No(() => {
    var i, c;
    return o.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(o.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = No(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), l = No(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), d = No(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        s.value
      );
    }
  ), u = No(
    () => a.value.isLeadSection ? a.value.title : n.value
  );
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: d,
    targetPageTitleForPublishing: u
  };
}, Mo = window.Vue.computed, Vu = () => {
  const { currentTargetPage: e } = pt(), { sectionSuggestion: t } = Ae(), { sectionURLParameter: n } = P(), s = Mo(
    () => t.value.missingSections[n.value] || t.value.presentSections[n.value] || ""
  ), o = Mo(
    () => {
      var u;
      return (((u = a.value) == null ? void 0 : u.title) || "").replace(/ /g, "_");
    }
  ), a = Mo(
    () => {
      var u;
      return (u = e.value) == null ? void 0 : u.getSectionByTitle(s.value);
    }
  ), { sourceSection: r } = ne(), l = Mo(() => {
    var u;
    return (u = r.value) == null ? void 0 : u.html;
  }), d = Mo(() => {
    var u;
    return (u = a.value) == null ? void 0 : u.html;
  });
  return {
    activeSectionTargetTitle: s,
    sourceSectionContent: l,
    targetSectionAnchor: o,
    targetSectionContent: d
  };
};
const vi = window.Vue.createVNode, M3 = window.Vue.createElementVNode, Mn = window.Vue.unref, _i = window.Vue.withCtx, Ml = window.Vue.openBlock, Ul = window.Vue.createBlock;
window.Vue.createCommentVNode;
const U3 = window.Vue.normalizeClass, I3 = ["lang", "dir", "innerHTML"], Vp = window.Vue.ref, Si = window.Vue.computed, R3 = window.Vue.onMounted, z3 = {
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
    const n = e, s = t, o = Vp(!1), { sectionSuggestion: a } = Ae(), { sectionURLParameter: r } = P(), l = Si(
      () => (c.value || "").replace(/ /g, "_")
    ), d = (h) => s("update:contentTypeSelection", h), { activeSectionTargetTitle: u, targetSectionAnchor: i } = Vu(), c = Si(
      () => {
        var h;
        return (((h = a.value) == null ? void 0 : h.sourceSections) || []).find(
          (f) => f === r.value
        );
      }
    ), g = Si(() => {
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
            title: u.value,
            path: `${p.value}#${i.value}`
          };
      }
    }), p = Si(
      () => Y.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), m = Vp(null);
    return R3(() => {
      new IntersectionObserver(
        ([f]) => {
          o.value = f.intersectionRect.height < f.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(m.value.$el);
    }), (h, f) => (Ml(), Ul(Mn(U), {
      ref_key: "contentHeader",
      ref: m,
      class: U3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.value }]),
      direction: "column",
      align: "stretch",
      reverse: o.value
    }, {
      default: _i(() => [
        vi(F3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": d
        }, null, 8, ["selection"]),
        vi(Mn(U), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: _i(() => [
            vi(Mn(k), null, {
              default: _i(() => [
                M3("h3", {
                  lang: g.value.lang,
                  dir: g.value.dir,
                  class: "ma-0 pa-0",
                  innerHTML: g.value.title
                }, null, 8, I3)
              ]),
              _: 1
            }),
            vi(Mn(k), { shrink: "" }, {
              default: _i(() => [
                o.value ? (Ml(), Ul(Mn(Xe), {
                  key: 0,
                  icon: Mn(Ki),
                  progressive: "",
                  label: h.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: f[0] || (f[0] = (v) => h.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Ml(), Ul(Mn(Xe), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: Mn(gh),
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
}, yi = window.Vue.unref, Ep = window.Vue.createVNode, O3 = window.Vue.openBlock, j3 = window.Vue.createElementBlock, H3 = { class: "sx-content-comparator__header-navigation flex items-center" }, q3 = window.Vue.computed, G3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = P(), s = q3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: o } = lr(), a = () => {
      const l = (s.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, d = t.sectionSourceTitles[l];
      o(d);
    }, r = () => {
      const l = (s.value + 1) % t.sectionSourceTitles.length, d = t.sectionSourceTitles[l];
      o(d);
    };
    return (l, d) => (O3(), j3("div", H3, [
      Ep(yi(Xe), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: yi(z0),
        onClick: a
      }, null, 8, ["icon"]),
      Ep(yi(Xe), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: yi(R0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const Lp = window.Vue.toDisplayString, be = window.Vue.unref, X3 = window.Vue.resolveDirective, Il = window.Vue.withDirectives, As = window.Vue.openBlock, xi = window.Vue.createElementBlock, W3 = window.Vue.createCommentVNode, K3 = window.Vue.createTextVNode, Tp = window.Vue.createElementVNode, Y3 = window.Vue.normalizeClass, Rl = window.Vue.withCtx, zl = window.Vue.createVNode, Ap = window.Vue.createBlock, Q3 = { class: "sx-content-comparator-header__mapped-section" }, J3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, Z3 = { key: 0 }, e5 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, t5 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, n5 = window.Vue.computed, s5 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = P(), { activeSectionTargetTitle: n } = Vu(), s = ge(), { target: o, PUBLISHING_TARGETS: a, setTarget: r } = kt(), l = n5(
      () => s.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        I.getAutonym(t.value)
      )
    );
    return (d, u) => {
      const i = X3("i18n");
      return As(), xi("div", Q3, [
        zl(be(U), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Rl(() => [
            zl(be(k), { grow: "" }, {
              default: Rl(() => [
                Tp("h6", J3, [
                  K3(Lp(l.value) + " ", 1),
                  be(o) === be(a).NEW_SECTION ? Il((As(), xi("span", Z3, null, 512)), [
                    [i, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : W3("", !0)
                ]),
                Tp("h6", {
                  class: Y3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": be(o) === be(a).NEW_SECTION
                  }])
                }, Lp(be(n)), 3)
              ]),
              _: 1
            }),
            zl(be(k), { shrink: "" }, {
              default: Rl(() => [
                be(o) === be(a).EXPAND ? (As(), Ap(be(Xe), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: be(dh),
                  type: "icon",
                  onClick: u[0] || (u[0] = (c) => be(r)(be(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (As(), Ap(be(Xe), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: be(K0),
                  type: "icon",
                  onClick: u[1] || (u[1] = (c) => be(r)(be(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        be(o) === be(a).EXPAND ? Il((As(), xi("p", e5, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : Il((As(), xi("p", t5, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const Be = window.Vue.unref, Ds = window.Vue.createVNode, o5 = window.Vue.toDisplayString, Sn = window.Vue.createElementVNode, Ol = window.Vue.withCtx, a5 = window.Vue.resolveDirective, Dp = window.Vue.withDirectives, jl = window.Vue.openBlock, Pp = window.Vue.createBlock, Bp = window.Vue.createCommentVNode, i5 = window.Vue.createElementBlock, r5 = { class: "sx-content-comparator__header pa-4" }, l5 = { class: "row my-1 py-2 mx-0 gap-6" }, c5 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, u5 = { class: "sx-content-comparator-header__titles shrink" }, d5 = ["lang", "dir"], g5 = ["lang", "dir", "innerHTML"], p5 = { class: "py-2 mb-1" }, m5 = /* @__PURE__ */ Sn("br", null, null, -1), bi = window.Vue.computed, h5 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = P(), { sourceSection: n } = ne(), { sectionSuggestion: s, isCurrentSectionPresent: o } = Ae(), a = bi(
      () => {
        var u;
        return (u = s.value) == null ? void 0 : u.missingSections.hasOwnProperty(t.value);
      }
    ), r = bi(() => {
      var u;
      return (u = n.value) == null ? void 0 : u.html;
    }), l = bi(() => [
      ...Object.keys(s.value.missingSections),
      ...Object.keys(s.value.presentSections)
    ]), d = bi(
      () => {
        var u;
        return (((u = s.value) == null ? void 0 : u.sourceSections) || []).find(
          (i) => i === t.value
        );
      }
    );
    return (u, i) => {
      const c = a5("i18n");
      return jl(), i5("div", r5, [
        Ds(Be(Xe), {
          class: "py-2 pa-0",
          icon: Be(O0),
          label: u.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (g) => u.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Sn("div", l5, [
          Sn("div", c5, [
            Sn("div", u5, [
              Sn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Be(s).sourceLanguage,
                dir: Be(I.getDir)(Be(s).sourceLanguage)
              }, o5(Be(s).sourceTitle), 9, d5),
              Sn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Be(s).sourceLanguage,
                dir: Be(I.getDir)(Be(s).sourceLanguage),
                innerHTML: d.value
              }, null, 8, g5)
            ]),
            Ds(G3, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          Sn("div", p5, [
            Ds(Be(Xe), {
              class: "sx-content-comparator-header__translation-button",
              icon: Be(Ki),
              progressive: "",
              label: u.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (g) => u.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (jl(), Pp(Be(U), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Ol(() => [
            Ds(Be(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Ol(() => [
                Ds(Be(Ze), { icon: Be(X0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Ds(Be(k), { class: "ma-0" }, {
              default: Ol(() => [
                Dp(Sn("strong", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                m5,
                Dp(Sn("span", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Bp("", !0),
        Be(o) ? (jl(), Pp(s5, { key: 1 })) : Bp("", !0)
      ]);
    };
  }
};
const Fp = window.Vue.toDisplayString, f5 = window.Vue.createElementVNode, Np = window.Vue.openBlock, Mp = window.Vue.createElementBlock, w5 = window.Vue.createCommentVNode, v5 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, _5 = ["textContent"], S5 = ["textContent"], Kf = {
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
    return (t, n) => (Np(), Mp("section", v5, [
      f5("h5", {
        textContent: Fp(e.placeholderTitle)
      }, null, 8, _5),
      e.placeholderSubtitle ? (Np(), Mp("p", {
        key: 0,
        textContent: Fp(e.placeholderSubtitle)
      }, null, 8, S5)) : w5("", !0)
    ]));
  }
}, y5 = (e, t, n) => {
  const s = t.indexOf(e);
  return t.slice(s + 1).map((a) => n[a]).filter(Boolean)[0] || null;
}, x5 = ({
  sourceSectionTitle: e,
  sourceSectionTitles: t,
  targetSectionTitles: n,
  presentSectionMappings: s,
  targetAppendixSectionTitles: o
}) => {
  const a = y5(
    e,
    t,
    s
  );
  return a !== null ? a : n.find(
    (l) => o.includes(l)
  ) || null;
}, Hl = window.Vue.computed, b5 = window.Vue.createApp, C5 = window.Vuex.useStore, k5 = () => {
  const e = C5(), { sectionSuggestion: t } = Ae(), { currentTargetPage: n } = pt(), { sectionURLParameter: s } = P(), o = ge(), a = () => b5(
    Kf,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, r = Hl(() => {
    const { appendixSectionTitles: u } = e.state.suggestions;
    return u[t.value.targetLanguage] || [];
  }), l = Hl(
    () => x5({
      sourceSectionTitle: s.value,
      sourceSectionTitles: t.value.sourceSections,
      targetSectionTitles: t.value.targetSections,
      presentSectionMappings: t.value.presentSections,
      targetAppendixSectionTitles: r.value
    })
  ), d = (u) => {
    const i = u.getElementsByTagName("base");
    Array.from(i).forEach(
      (c) => c.parentNode.removeChild(c)
    );
  };
  return Hl(() => {
    var c;
    if (!((c = n.value) != null && c.content))
      return null;
    const u = document.createElement("div");
    u.innerHTML = n.value.content, d(u);
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
const ql = window.Vue.createVNode, at = window.Vue.unref, Ps = window.Vue.openBlock, Up = window.Vue.createBlock, Ip = window.Vue.createCommentVNode, Ci = window.Vue.createElementVNode, Gl = window.Vue.Fragment, ki = window.Vue.createElementBlock, $5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, V5 = { class: "sx-content-comparator__source-content" }, E5 = ["lang", "dir", "innerHTML"], L5 = ["lang", "dir", "innerHTML"], T5 = ["innerHTML"], A5 = window.Vue.ref, Rp = window.Vue.computed, zp = window.Vue.watch, D5 = window.Vue.inject, P5 = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = kt(), n = et(), s = A5("source_section"), { logDashboardTranslationStartEvent: o } = bu(), a = Zs(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      o(), a();
    }, {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: u
    } = P(), { sourceSectionContent: i, targetSectionContent: c } = Vu(), g = k5(), { sectionSuggestion: p, isCurrentSectionPresent: m } = Ae(), h = Rp(() => p.value.targetTitle), f = Hf();
    zp(
      h,
      () => C(this, null, function* () {
        try {
          yield f(
            u.value,
            d.value,
            h.value
          );
        } catch (b) {
          throw mw.cx.eventlogging.stats.sourceArticleFetchFailed(!0), b;
        }
      }),
      { immediate: !0 }
    ), zp(m, t, { immediate: !0 });
    const v = D5("breakpoints"), _ = Rp(() => v.value.mobile);
    return mw.cx.eventlogging.stats.sectionCompareAccess(_.value), (b, x) => (Ps(), ki("section", $5, [
      ql(h5, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      ql(z3, {
        "content-type-selection": s.value,
        "onUpdate:contentTypeSelection": x[0] || (x[0] = (y) => s.value = y),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      Ci("section", V5, [
        s.value === "source_section" ? (Ps(), ki(Gl, { key: 0 }, [
          at(i) ? Ip("", !0) : (Ps(), Up(at(dt), { key: 0 })),
          Ci("section", {
            lang: at(d),
            dir: at(I.getDir)(at(d)),
            class: "pt-2 px-4",
            innerHTML: at(i)
          }, null, 8, E5)
        ], 64)) : s.value === "target_article" ? (Ps(), ki(Gl, { key: 1 }, [
          at(g) ? Ip("", !0) : (Ps(), Up(at(dt), { key: 0 })),
          Ci("article", {
            lang: at(u),
            dir: at(I.getDir)(at(u)),
            class: "px-4",
            innerHTML: at(g)
          }, null, 8, L5)
        ], 64)) : (Ps(), ki(Gl, { key: 2 }, [
          Ci("section", {
            class: "pa-4",
            innerHTML: at(c)
          }, null, 8, T5),
          ql(Kf, {
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
}, B5 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: P5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, F5 = window.Vue.resolveComponent, N5 = window.Vue.createVNode, M5 = window.Vue.normalizeClass, U5 = window.Vue.openBlock, I5 = window.Vue.createElementBlock;
function R5(e, t, n, s, o, a) {
  const r = F5("sx-content-comparator");
  return U5(), I5("main", {
    class: M5(["sx-content-comparator-view", a.classes])
  }, [
    N5(r)
  ], 2);
}
const z5 = /* @__PURE__ */ de(B5, [["render", R5]]);
const O5 = window.Vue.resolveDirective, Uo = window.Vue.createElementVNode, Op = window.Vue.withDirectives, $i = window.Vue.unref, Xl = window.Vue.createVNode, jp = window.Vue.toDisplayString, Hp = window.Vue.createTextVNode, Io = window.Vue.withCtx, j5 = window.Vue.openBlock, H5 = window.Vue.createBlock, q5 = { class: "mw-ui-dialog__header px-4 py-3" }, G5 = { class: "mw-ui-dialog__header-title" }, X5 = { class: "pa-4" }, W5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, qp = window.Codex.CdxButton, K5 = {
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
      const d = O5("i18n");
      return j5(), H5($i(bt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: Io(() => [
          Uo("div", q5, [
            Op(Uo("span", G5, null, 512), [
              [d, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Io(() => [
          Uo("div", W5, [
            Xl($i(qp), {
              weight: "quiet",
              onClick: o
            }, {
              default: Io(() => [
                Hp(jp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Xl($i(qp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Io(() => [
                Hp(jp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Io(() => [
          Xl($i(Wi)),
          Uo("div", X5, [
            Op(Uo("span", null, null, 512), [
              [d, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, Y5 = (e, t, n) => {
  const s = document.createElement("div");
  s.innerHTML = e;
  const o = Array.from(s.children).find(
    (a) => us(a)
  );
  return o && vh(o) ? xt.parseTemplateWikitext(
    fh(o),
    n,
    t
  ) : Promise.resolve(null);
}, Yf = (e, t, n) => {
  let s = document.createElement("div");
  s.innerHTML = e, s.firstElementChild.getAttribute("rel") === "cx:Section" && (s = s.firstElementChild);
  const o = Array.from(s.children).find(
    (a) => us(a)
  );
  return o ? xt.parseTemplateWikitext(
    fh(o),
    n,
    t
  ) : Promise.resolve(null);
}, Q5 = window.Vuex.useStore, Eu = () => {
  const e = Q5(), { sourceSection: t } = ne(), { getCurrentTitleByLanguage: n } = kn(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = P(), a = Xf(), r = (i, c, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[c] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof ct ? p.blockTemplateProposedTranslations[c] = g : p instanceof qn && p.addProposedTranslation(c, g);
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
  }), d = (i, c) => C(void 0, null, function* () {
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
    p instanceof ct && (p.setBlockTemplateAdaptationInfoByHtml(
      c,
      m
    ), m = (yield Y5(
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
    translateTranslationUnitById: d,
    translateSelectedTranslationUnitForAllProviders: () => {
      const i = e.getters["mediawiki/getSupportedMTProviders"](
        s.value,
        o.value
      ), { selectedTranslationUnitId: c } = t.value;
      i.forEach(
        (g) => d(c, g)
      );
    }
  };
}, J5 = window.Vuex.useStore, Z5 = () => {
  const { sourceSection: e } = ne(), t = J5(), { translateTranslationUnitById: n } = Eu();
  return (s) => {
    t.commit("application/setCurrentMTProvider", s);
    const o = e.value.selectedTranslationUnitId;
    n(o, s);
  };
};
function eL(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((s) => {
    s.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const tL = window.Vue.resolveDirective, lt = window.Vue.createElementVNode, Vi = window.Vue.withDirectives, je = window.Vue.unref, Wl = window.Vue.createVNode, pn = window.Vue.withCtx, nL = window.Vue.renderList, sL = window.Vue.Fragment, Ei = window.Vue.openBlock, oL = window.Vue.createElementBlock, aL = window.Vue.toDisplayString, Kl = window.Vue.createBlock, Gp = window.Vue.createCommentVNode, iL = { class: "mw-ui-dialog__header pa-4" }, rL = { class: "row ma-0 py-2" }, lL = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, cL = { class: "mb-0" }, uL = { class: "col shrink justify-center" }, dL = { class: "pb-2 mb-0" }, gL = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, pL = ["dir", "lang", "innerHTML"], mL = ["textContent"], hL = ["innerHTML"], fL = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, wL = /* @__PURE__ */ lt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), vL = ["innerHTML"], Yl = window.Vue.computed, _L = window.Vuex.useStore, SL = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, s = ae.EMPTY_TEXT_PROVIDER_KEY, o = ae.ORIGINAL_TEXT_PROVIDER_KEY, a = _L(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: d
    } = ne(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: i
    } = P(), c = Yl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        u.value,
        i.value
      )
    ), g = Yl(() => {
      const x = [o, s];
      return c.value.filter(
        (y) => !x.includes(y)
      );
    }), p = Yl(
      () => l.value ? r.value.proposedTitleTranslations : d.value.proposedTranslations
    ), m = Z5(), h = (x) => {
      m(x), v();
    }, f = ae.getMTProviderLabel, v = () => n("update:active", !1), _ = ge(), b = eL(
      _.i18n("cx-tools-mt-noservices")
    );
    return (x, y) => {
      const E = tL("i18n");
      return e.active ? (Ei(), Kl(je(bt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: pn(() => [
          lt("div", iL, [
            lt("div", rL, [
              lt("div", lL, [
                Vi(lt("h4", cL, null, 512), [
                  [E, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              lt("div", uL, [
                Wl(je(Xe), {
                  type: "icon",
                  icon: je(Yi),
                  class: "pa-0",
                  onClick: v
                }, null, 8, ["icon"])
              ])
            ]),
            Vi(lt("h6", dL, null, 512), [
              [E, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: pn(() => [
          Wl(je(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[0] || (y[0] = (S) => h(je(o)))
          }, {
            header: pn(() => [
              Vi(lt("h5", gL, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: pn(() => [
              lt("p", {
                dir: je(I.getDir)(je(u)),
                lang: je(u),
                innerHTML: p.value[je(o)]
              }, null, 8, pL)
            ]),
            _: 1
          }),
          (Ei(!0), oL(sL, null, nL(g.value, (S) => (Ei(), Kl(je(Je), {
            key: S,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (F) => h(S)
          }, {
            header: pn(() => [
              lt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: aL(je(f)(S))
              }, null, 8, mL)
            ]),
            default: pn(() => [
              lt("p", {
                innerHTML: p.value[S]
              }, null, 8, hL)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Wl(je(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[1] || (y[1] = (S) => h(je(s)))
          }, {
            header: pn(() => [
              Vi(lt("h5", fL, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: pn(() => [
              wL
            ]),
            _: 1
          }),
          g.value.length ? Gp("", !0) : (Ei(), Kl(je(Je), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: pn(() => [
              lt("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: je(b)
              }, null, 8, vL)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Gp("", !0);
    };
  }
}, yL = window.Vuex.useStore, eo = () => {
  const { sourceSection: e } = ne(), t = yL(), { translateTranslationUnitById: n } = Eu(), { currentMTProvider: s } = Te(t), o = (l) => C(void 0, null, function* () {
    e.value.selectTranslationUnitById(l), yield n(l, s.value);
    const { followingTranslationUnit: d } = e.value;
    d && (yield n(
      d.id,
      s
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: l } = e.value;
      return l ? o(l.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: l, contentTranslationUnits: d } = e.value, u = l - 1;
      let i = 0;
      return u > -1 && (i = d[u].id), o(i);
    },
    selectTranslationUnitById: o
  };
};
const Xp = window.Vue.toDisplayString, Ql = window.Vue.createElementVNode, Jl = window.Vue.unref, xL = window.Vue.createVNode, bL = window.Vue.normalizeClass, CL = window.Vue.withCtx, kL = window.Vue.openBlock, $L = window.Vue.createBlock, VL = ["href"], EL = ["textContent"], LL = ["textContent"], Bs = window.Vue.computed, Wp = "sx-sentence-selector__section-title", TL = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ne(), { currentSourcePage: s } = pt(), { sourceLanguageURLParameter: o } = P(), a = Bs(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.title;
    }), r = Bs(
      () => {
        var p;
        return ((p = t.value) == null ? void 0 : p.title) || a.value;
      }
    ), l = Bs(
      () => Y.getPageUrl(o.value, a.value)
    ), d = Bs(
      () => {
        var p;
        return !!((p = t.value) != null && p.translatedTitle);
      }
    ), u = Bs(
      () => d.value ? "translated" : "selected"
    ), i = Bs(() => {
      const p = [Wp];
      return n.value && p.push(`${Wp}--${u.value}`), p;
    }), { selectTranslationUnitById: c } = eo(), g = () => c(0);
    return (p, m) => (kL(), $L(Jl(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: CL(() => [
        Ql("a", {
          href: l.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Ql("strong", {
            textContent: Xp(a.value)
          }, null, 8, EL),
          xL(Jl(Ze), {
            icon: Jl(gh),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, VL),
        Ql("h2", {
          class: bL(["pa-0 ma-0", i.value]),
          onClick: g,
          textContent: Xp(r.value)
        }, null, 10, LL)
      ]),
      _: 1
    }));
  }
};
const Wt = window.Vue.unref, Ro = window.Vue.createVNode, Li = window.Vue.withCtx, Kp = window.Vue.toDisplayString, Yp = window.Vue.createTextVNode, AL = window.Vue.openBlock, DL = window.Vue.createBlock, PL = window.Vue.computed, Zl = window.Codex.CdxButton, Qp = window.Codex.CdxIcon, Qf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: s } = ne(), o = PL(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (AL(), DL(Wt(U), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Li(() => [
        Ro(Wt(Zl), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Wt(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Li(() => [
            Ro(Wt(Qp), {
              class: "me-1",
              icon: Wt(mu)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Ro(Wt(Zl), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Wt(s),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: Li(() => [
            Yp(Kp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Ro(Wt(Zl), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: o.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Li(() => [
            Yp(Kp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Ro(Wt(Qp), {
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
const as = window.Vue.unref, BL = window.Vue.toDisplayString, zo = window.Vue.createVNode, Ti = window.Vue.withCtx, FL = window.Vue.openBlock, NL = window.Vue.createBlock, ec = window.Vue.computed, ML = window.Vuex.useStore, UL = window.Codex.CdxButton, IL = window.Codex.CdxIcon, RL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = ML(), n = ec(() => t.state.application.currentMTProvider), s = ge(), o = ec(() => ({
      [ae.ORIGINAL_TEXT_PROVIDER_KEY]: s.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ae.EMPTY_TEXT_PROVIDER_KEY]: s.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = ec(
      () => o.value[n.value] || s.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ae.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (FL(), NL(as(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Ti(() => [
        zo(as(U), { class: "ma-0 ps-5 pb-4" }, {
          default: Ti(() => [
            zo(as(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: BL(a.value)
            }, null, 8, ["textContent"]),
            zo(as(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Ti(() => [
                zo(as(UL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (d) => r.$emit("configure-options"))
                }, {
                  default: Ti(() => [
                    zo(as(IL), {
                      class: "pa-0",
                      icon: as(pu)
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
const Bt = window.Vue.unref, Un = window.Vue.createVNode, zL = window.Vue.resolveDirective, Jp = window.Vue.createElementVNode, OL = window.Vue.withDirectives, Zp = window.Vue.toDisplayString, em = window.Vue.createTextVNode, Oo = window.Vue.withCtx, jL = window.Vue.openBlock, HL = window.Vue.createElementBlock, qL = { class: "mt-retry-body pb-5" }, GL = { class: "retry-body__message" }, tm = window.Codex.CdxButton, tc = window.Codex.CdxIcon, XL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const s = zL("i18n");
      return jL(), HL("div", qL, [
        Jp("div", GL, [
          Un(Bt(tc), {
            class: "me-2",
            icon: Bt(oy)
          }, null, 8, ["icon"]),
          OL(Jp("span", null, null, 512), [
            [s, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Un(Bt(U), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Oo(() => [
            Un(Bt(k), { cols: "6" }, {
              default: Oo(() => [
                Un(Bt(tm), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (o) => t.$emit("retry-translation"))
                }, {
                  default: Oo(() => [
                    Un(Bt(tc), {
                      class: "me-1",
                      icon: Bt(Zh)
                    }, null, 8, ["icon"]),
                    em(" " + Zp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Un(Bt(k), { cols: "6" }, {
              default: Oo(() => [
                Un(Bt(tm), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (o) => t.$emit("configure-options"))
                }, {
                  default: Oo(() => [
                    Un(Bt(tc), {
                      class: "me-1",
                      icon: Bt(hy)
                    }, null, 8, ["icon"]),
                    em(" " + Zp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Fs = window.Vue.createVNode, it = window.Vue.unref, jo = window.Vue.openBlock, WL = window.Vue.createElementBlock, KL = window.Vue.createCommentVNode, Ai = window.Vue.createBlock, YL = window.Vue.normalizeClass, QL = window.Vue.normalizeStyle, Ho = window.Vue.withCtx, JL = window.Vue.toDisplayString, ZL = window.Vue.createTextVNode, eT = window.Vue.normalizeProps, tT = window.Vue.guardReactiveProps, nT = ["lang", "dir", "innerHTML"], nc = window.Vue.ref, sT = window.Vue.onMounted, oT = window.Vue.onBeforeUnmount, sc = window.Vue.computed, aT = window.Vue.nextTick, iT = window.Vuex.useStore, rT = window.Codex.CdxButton, lT = window.Codex.CdxIcon, cT = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = nc(0), n = nc(null), s = nc(null), o = iT(), { currentMTProvider: a } = Te(o), { targetLanguageURLParameter: r } = P(), { sourceSection: l, currentProposedTranslation: d } = ne(), u = sc(
      () => {
        var m, h;
        return (h = o.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = sc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = sc(
      () => !!d.value || a.value === ae.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + s.value.$el.clientHeight;
    };
    sT(() => C(this, null, function* () {
      yield aT(), g(), p.observe(n.value.$el), p.observe(s.value.$el);
    })), oT(() => {
      p.unobserve(n.value.$el), p.unobserve(s.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (jo(), Ai(it(Je), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Ho(() => [
        Fs(it(U), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Ho(() => [
            Fs(RL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            Fs(it(k), {
              class: YL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && u.value
              }]),
              style: QL(c.value ? i.value : null)
            }, {
              default: Ho(() => [
                c.value ? (jo(), WL("section", {
                  key: 0,
                  lang: it(r),
                  dir: it(I.getDir)(it(r)),
                  innerHTML: it(d)
                }, null, 8, nT)) : u.value ? (jo(), Ai(it(dt), { key: 1 })) : (jo(), Ai(XL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Fs(it(k), {
              ref_key: "footer",
              ref: s,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Ho(() => [
                c.value || u.value ? (jo(), Ai(it(rT), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", it(d)))
                }, {
                  default: Ho(() => [
                    Fs(it(lT), {
                      class: "me-1",
                      icon: it(gu)
                    }, null, 8, ["icon"]),
                    ZL(" " + JL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : KL("", !0),
                Fs(Qf, eT(tT(m.$attrs)), null, 16)
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
}, uT = window.Vue.computed, dT = (e) => uT(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((o) => {
    const a = e.getSentenceById(o.dataset.segmentid);
    o.classList.add(t, "py-1", "me-1");
    const r = ["untranslated", "translated", "selected"].map(
      (d) => `${t}--${d}`
    );
    o.classList.remove(...r), a.selected && o.classList.add(`${t}--selected`);
    const l = a.isTranslated ? "translated" : "untranslated";
    o.classList.add(`${t}--${l}`), o.innerHTML = a.content;
  }), n.innerHTML;
});
const gT = window.Vue.unref, pT = window.Vue.normalizeClass, mT = window.Vue.openBlock, hT = window.Vue.createElementBlock, fT = ["innerHTML"], wT = window.Vue.onMounted, vT = window.Vue.ref, _T = window.Vue.computed, ST = {
  __name: "SubSection",
  props: {
    subSection: {
      type: ct,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = vT(null), a = dT(n.subSection);
    wT(() => {
      o.value.addEventListener("click", (u) => {
        let i;
        if (n.subSection.isBlockTemplate)
          i = n.subSection;
        else {
          const c = u.composedPath().find(
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
    const { selectTranslationUnitById: r } = eo(), l = (u) => {
      if (u.selected) {
        s("bounce-translation");
        return;
      }
      r(u.id);
    }, d = _T(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (u, i) => (mT(), hT("div", {
      ref_key: "subSectionRoot",
      ref: o,
      class: pT(["sx-sentence-selector__subsection", d.value]),
      innerHTML: gT(a)
    }, null, 10, fT));
  }
};
const nm = window.Vue.unref, sm = window.Vue.createVNode, om = window.Vue.normalizeStyle, yT = window.Vue.openBlock, xT = window.Vue.createElementBlock, am = window.Vue.computed, Jf = {
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
    const t = e, n = am(() => ({ "--size": t.size })), s = am(
      () => !t.isTemplateAdapted || t.percentage === 0 ? Y0 : Mc
    );
    return (o, a) => (yT(), xT("div", {
      class: "block-template-status-indicator",
      style: om(n.value)
    }, [
      sm(nm(p1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      sm(nm(Ze), {
        icon: s.value,
        size: e.size / 2,
        style: om({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const In = window.Vue.unref, Di = window.Vue.createVNode, oc = window.Vue.withCtx, bT = window.Vue.openBlock, CT = window.Vue.createBlock, kT = window.Vue.computed, im = window.Codex.CdxButton, rm = window.Codex.CdxIcon, Zf = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ne(), s = kT(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (o, a) => (bT(), CT(In(U), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: oc(() => [
        Di(In(im), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: In(n),
          "aria-label": o.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => o.$emit("select-previous-segment"))
        }, {
          default: oc(() => [
            Di(In(rm), { icon: In(mu) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Di(In(im), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: s.value,
          "aria-label": o.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => o.$emit("select-next-segment"))
        }, {
          default: oc(() => [
            Di(In(rm), { icon: In(Sa) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, qo = window.Vue.openBlock, Pi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const mn = window.Vue.unref, Ns = window.Vue.withCtx, Go = window.Vue.createVNode, ac = window.Vue.toDisplayString, ic = window.Vue.createElementVNode, $T = window.Vue.renderList, VT = window.Vue.Fragment, ET = window.Vue.createElementBlock, LT = { class: "pa-4" }, TT = ["textContent"], AT = ["textContent"], DT = window.Vuex.useStore, Bi = window.Vue.computed, PT = {
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
    const t = e, { targetLanguageAutonym: n } = Te(DT()), s = Bi(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), o = ge(), a = Bi(() => {
      let d;
      return t.targetTemplateExists ? t.isTemplateAdapted ? s.value < 100 ? d = "cx-sx-block-template-mapping-status-title-partially-template" : d = "cx-sx-block-template-mapping-status-title-fully-template" : d = "cx-sx-block-template-mapping-status-title-unadapted-template" : d = "cx-sx-block-template-mapping-status-title-no-target-template", o.i18n(d);
    }), r = Bi(() => {
      let d;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? d = "cx-sx-block-template-mapping-status-explanation-no-mapping" : s.value < 100 ? d = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : d = "cx-sx-block-template-mapping-status-explanation-full-mapping", o.i18n(d);
    }), l = Bi(() => {
      let d = [];
      if (!t.targetTemplateExists)
        d.push({
          text: o.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: J0,
          color: St.gray500
        });
      else if (!t.isTemplateAdapted)
        d.push({
          text: o.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Yi,
          color: St.gray500
        });
      else if (s.value < 100)
        d.push({
          text: o.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Mc,
          color: St.blue600
        });
      else {
        let u;
        t.sourceParamsCount ? u = o.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : u = o.i18n("cx-sx-block-template-no-source-params-text"), d.push({
          text: u,
          icon: Mc,
          color: St.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? d.push({
        text: o.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: Ki,
        color: St.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && d.push({
        text: o.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: F0,
        color: St.gray500
      }), d;
    });
    return (d, u) => (qo(), Pi(mn(bt), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: d.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: u[0] || (u[0] = (i) => d.$emit("update:active", i))
    }, {
      header: Ns(() => [
        Go(mn(U), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Ns(() => [
            Go(mn(k), { shrink: "" }, {
              default: Ns(() => [
                e.targetTemplateExists ? (qo(), Pi(Jf, {
                  key: 0,
                  percentage: s.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (qo(), Pi(mn(Ze), {
                  key: 1,
                  icon: mn(N0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Ns(() => [
        ic("div", LT, [
          ic("h3", {
            textContent: ac(a.value)
          }, null, 8, TT),
          ic("p", {
            class: "mt-6 text-small",
            textContent: ac(r.value)
          }, null, 8, AT),
          (qo(!0), ET(VT, null, $T(l.value, (i, c) => (qo(), Pi(mn(U), {
            key: c,
            align: "start",
            class: "mt-4"
          }, {
            default: Ns(() => [
              Go(mn(k), { shrink: "" }, {
                default: Ns(() => [
                  Go(mn(Ze), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              Go(mn(k), {
                textContent: ac(i.text)
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
const Le = window.Vue.unref, He = window.Vue.createVNode, Kt = window.Vue.withCtx, rc = window.Vue.toDisplayString, lm = window.Vue.createTextVNode, BT = window.Vue.resolveDirective, cm = window.Vue.withDirectives, um = window.Vue.createElementVNode, FT = window.Vue.normalizeClass, Ms = window.Vue.openBlock, dm = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Fi = window.Vue.createBlock, gm = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const pm = window.Vue.mergeProps, NT = { class: "block-template-adaptation-card__container pa-4" }, MT = ["textContent"], UT = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, qe = window.Vue.computed, IT = window.Vue.ref, RT = window.Vuex.useStore, mm = window.Codex.CdxButton, hm = window.Codex.CdxIcon, zT = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = RT(), { targetLanguageAutonym: n, currentMTProvider: s } = Te(t), {
      selectedContentTranslationUnit: o,
      currentProposedTranslation: a
    } = ne(), r = qe(() => {
      var V;
      return (V = o.value) == null ? void 0 : V.isTranslated;
    }), l = qe(() => {
      var A;
      return ((A = o.value) == null ? void 0 : A.blockTemplateTranslatedContent) || a.value;
    }), d = qe(
      () => {
        var V;
        return (V = o.value) == null ? void 0 : V.getTargetBlockTemplateNameByProvider(
          s.value
        );
      }
    ), u = qe(
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
    }), x = IT(!1), y = () => {
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
      const R = BT("i18n");
      return Ms(), Fi(Le(Je), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Kt(() => [
          um("div", NT, [
            He(Le(U), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Kt(() => [
                He(Le(k), { shrink: "" }, {
                  default: Kt(() => [
                    He(Le(hm), {
                      icon: Le(fy),
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
                    lm(rc(c.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            d.value ? (Ms(), dm("div", {
              key: 0,
              class: FT(["pa-4 mb-4", m.value])
            }, [
              He(Le(U), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Kt(() => [
                  cm(He(Le(k), { tag: "h5" }, null, 512), [
                    [R, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  He(Le(k), { shrink: "" }, {
                    default: Kt(() => [
                      He(Jf, {
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
              um("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: rc(d.value)
              }, null, 8, MT),
              He(Le(mm), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: A[0] || (A[0] = (K) => V.$emit("edit-translation", l.value))
              }, {
                default: Kt(() => [
                  lm(rc(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (Ms(), dm("div", UT, [
              He(Le(U), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Kt(() => [
                  cm(He(Le(k), { tag: "h5" }, null, 512), [
                    [R, [
                      Le(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  He(Le(k), { shrink: "" }, {
                    default: Kt(() => [
                      He(Le(mm), {
                        weight: "quiet",
                        "aria-label": V.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Kt(() => [
                          He(Le(hm), {
                            icon: Le(gy),
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
            ])) : (Ms(), Fi(Le(dt), { key: 2 }))
          ]),
          r.value ? (Ms(), Fi(Zf, gm(pm({ key: 1 }, V.$attrs)), null, 16)) : (Ms(), Fi(Qf, gm(pm({ key: 0 }, V.$attrs)), null, 16)),
          He(PT, {
            active: x.value,
            "onUpdate:active": A[1] || (A[1] = (K) => x.value = K),
            "source-params-count": f.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": S.value,
            "optional-missing-params-count": F.value,
            "is-template-adapted": p.value,
            "target-template-exists": !!d.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const OT = window.Vue.unref, jT = window.Vue.createVNode, HT = window.Vue.openBlock, qT = window.Vue.createElementBlock, GT = { class: "translated-segment-card-header" }, XT = window.Vue.computed, WT = {
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
    const n = t, { isSectionTitleSelected: s } = ne(), o = ge(), a = XT(() => [
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
    return (l, d) => (HT(), qT("div", GT, [
      jT(OT(ma), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const KT = window.Vue.useCssVars, Ie = window.Vue.createVNode, fm = window.Vue.resolveDirective, YT = window.Vue.createElementVNode, lc = window.Vue.withDirectives, Se = window.Vue.unref, QT = window.Vue.normalizeStyle, Ni = window.Vue.openBlock, wm = window.Vue.createElementBlock, JT = window.Vue.createCommentVNode, ZT = window.Vue.normalizeClass, vt = window.Vue.withCtx, eA = window.Vue.toDisplayString, tA = window.Vue.createTextVNode, vm = window.Vue.createBlock, nA = window.Vue.normalizeProps, sA = window.Vue.guardReactiveProps, hn = window.Vue.computed, oA = window.Vue.ref, aA = window.Vue.inject, iA = window.Vuex.useStore, rA = window.Codex.CdxButton, cc = window.Codex.CdxIcon, lA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    KT((_) => ({
      "4929555c": v.value
    }));
    const t = oA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: s,
      isSectionTitleSelected: o
    } = ne(), { targetLanguage: a } = Te(iA()), r = hn(() => t.value === "sentence"), l = hn(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (b) => {
            var x;
            return b.id === ((x = s.value) == null ? void 0 : x.id);
          }
        )
      )
    ), d = hn(() => {
      var _;
      return o.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (_ = s.value) == null ? void 0 : _.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), u = aA("colors"), i = u.gray200, c = u.red600, g = hn(() => o.value ? n.value.translatedTitle : r.value ? s.value.translatedContent : l.value.translatedContent), p = hn(
      () => tn.calculateScore(
        g.value,
        d.value,
        a.value
      )
    ), m = hn(
      () => tn.getScoreStatus(p.value)
    ), h = hn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = hn(() => ({
      failure: p.value === 0 ? null : u.yellow700,
      warning: u.yellow700,
      success: u.green600
    })), v = hn(
      () => f.value[m.value]
    );
    return (_, b) => {
      const x = fm("i18n"), y = fm("i18n-html");
      return Ni(), vm(Se(Je), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: vt(() => [
          Ie(Se(U), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: vt(() => [
              Ie(WT, {
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
                          lc(YT("h5", null, null, 512), [
                            [x, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? lc((Ni(), wm("p", {
                            key: 0,
                            style: QT({ color: Se(c) })
                          }, null, 4)), [
                            [x, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : lc((Ni(), wm("p", {
                            key: 1,
                            class: ZT(h.value)
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
                                  Ie(Se(cc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Se(_y)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Ie(Se(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: vt(() => [
                                  Ie(Se(mh), {
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
                                  Ie(Se(cc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Se(wy)
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
                  r.value ? (Ni(), vm(Se(rA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: b[1] || (b[1] = (E) => _.$emit("edit-translation", g.value))
                  }, {
                    default: vt(() => [
                      Ie(Se(cc), {
                        class: "me-1",
                        icon: Se(gu)
                      }, null, 8, ["icon"]),
                      tA(" " + eA(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : JT("", !0)
                ]),
                _: 1
              }),
              Ie(Se(k), { class: "translated-segment-card__actions" }, {
                default: vt(() => [
                  Ie(Zf, nA(sA(_.$attrs)), null, 16)
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
}, cA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = ne(), { selectNextTranslationUnit: n, selectTranslationUnitById: s } = eo(), { currentTranslation: o } = Ot();
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
}, ew = window.Vuex.useStore, uA = () => {
  const e = ew(), {
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
    s ? o = yield $u.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : o = new ae(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", o);
  });
}, dA = () => {
  const e = ew(), { currentMTProvider: t } = Te(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: s
  } = P(), o = uA();
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
}, gA = window.Vue.computed, pA = (e) => {
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
}, mA = () => {
  const { selectedContentTranslationUnit: e } = ne(), t = gA(
    () => e.value instanceof ct
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, s = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    s && pA(s);
  };
}, hA = (e, t) => {
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
}, fA = window.Vue.computed, tw = () => {
  const { currentTranslation: e } = Ot(), { currentSourcePage: t } = pt();
  return fA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, wA = window.Vuex.useStore, Lu = () => {
  const e = wA(), { sourceSection: t, targetPageTitleForPublishing: n } = ne(), {
    pageURLParameter: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a
  } = P(), r = tw(), { target: l, PUBLISHING_TARGETS: d } = kt();
  return () => {
    const u = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](o.value, a.value), c = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(c);
    g.forEach(
      (m) => hA(m, i)
    );
    const p = t.value.getTranslationProgress(a);
    return xt.saveTranslation({
      sourceTitle: s.value,
      targetTitle: u,
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
      isSandbox: l === d.SANDBOX,
      progress: p
    });
  };
}, vA = window.Vue.effectScope, _A = window.Vue.onScopeDispose, SA = (e) => {
  let t = 0, n, s;
  const o = () => {
    s && --t <= 0 && (s.stop(), n = s = null);
  };
  return (...a) => (t++, n || (s = vA(!0), n = s.run(() => e(...a))), _A(o), n);
}, yA = window.Vuex.useStore;
let uc;
const xA = () => {
  const e = yA(), t = Lu();
  let n = 1e3, s = 0;
  return uc = _u(() => t().then((a) => {
    a instanceof Xn ? (n *= s + 1, s++, setTimeout(uc, n)) : (s = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Xs)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), uc;
}, nw = SA(xA), bA = window.Vuex.useStore, CA = () => {
  const e = bA(), t = nw(), { currentMTProvider: n } = Te(e), { sourceSection: s, currentProposedTranslation: o } = ne(), { selectNextTranslationUnit: a } = eo();
  return () => C(void 0, null, function* () {
    s.value.setTranslationForSelectedTranslationUnit(
      o.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, kA = window.Vuex.useStore, $A = () => {
  const e = kA(), t = nw();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, VA = window.Vuex.useStore, EA = window.Vue.computed, sw = () => {
  const e = VA(), { currentTranslation: t } = Ot(), { currentMTProvider: n } = Te(e), { currentTargetPageTitle: s } = pt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = P(), d = Ct(), u = EA(() => {
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
      }, u.value);
      return d(f);
    },
    logEditorCloseEvent: () => {
      const f = ce({
        event_type: "editor_close"
      }, u.value);
      return d(f);
    },
    logEditorCloseWarnEvent: () => d(ce({
      event_type: "editor_close_warn"
    }, u.value)),
    logEditorSegmentAddEvent: () => d(ce({
      event_type: "editor_segment_add"
    }, u.value)),
    logEditorSegmentSkipEvent: () => d(ce({
      event_type: "editor_segment_skip"
    }, u.value)),
    logEditorSegmentEditEvent: () => d(ce({
      event_type: "editor_segment_edit"
    }, u.value))
  };
}, LA = (e, t, n, s) => C(void 0, null, function* () {
  var l, d, u;
  const o = ((l = t.user) == null ? void 0 : l.content) || ((d = t.mt) == null ? void 0 : d.content), a = (u = t == null ? void 0 : t.mt) == null ? void 0 : u.engine, r = yield Yf(
    o,
    n,
    s
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    o
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), TA = (e, t) => {
  t.segments.forEach((n) => {
    var o, a, r;
    const s = e.getSentenceById(n.id);
    if (s && (s.translatedContent = ((o = n.user) == null ? void 0 : o.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      s.addProposedTranslation(l, n.mt.innerHTML), s.mtProviderUsed = l;
    }
  });
}, AA = (e, t, n, s) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return LA(e, t, n, s);
  TA(e, t);
}), DA = (e, t, n, s) => {
  const o = [];
  for (const a of e.sections || [])
    if (s.filter(
      (l) => l.pageSectionId === parseInt(a.id)
    ).length)
      for (const l of a.subSections) {
        const d = s.find(
          (i) => i.subSectionId === l.id
        );
        if (!d)
          continue;
        const u = AA(
          l,
          d,
          t || e.title,
          n
        );
        o.push(u);
      }
  return Promise.all(o);
}, PA = { restoreCorporaDraft: DA }, BA = () => {
  const { currentSourcePage: e } = pt(), { sourceSection: t } = ne();
  return (n) => C(void 0, null, function* () {
    if (n.restored)
      return;
    try {
      const o = yield xt.fetchTranslationUnits(
        n.translationId
      );
      yield PA.restoreCorporaDraft(
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
let dc = null;
function FA() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((s) => t.includes(s));
}
function ow() {
  return dc === null && (dc = FA()), dc;
}
const aw = window.Vue.ref, gc = aw(!1), pc = aw(!1);
function _m() {
  return {
    isPermissionWarningDismissed: gc,
    dismissPermissionWarning: () => {
      gc.value = !0;
    },
    resetPermissionWarning: () => {
      gc.value = !1;
    },
    isTitleErrorDismissed: pc,
    dismissTitleError: () => {
      pc.value = !0;
    },
    resetTitleError: () => {
      pc.value = !1;
    }
  };
}
const le = window.Vue.unref, _t = window.Vue.createVNode, Ft = window.Vue.withCtx, NA = window.Vue.resolveDirective, fn = window.Vue.createElementVNode, MA = window.Vue.withDirectives, Xo = window.Vue.toDisplayString, UA = window.Vue.createTextVNode, Yt = window.Vue.openBlock, Rn = window.Vue.createBlock, Sm = window.Vue.createCommentVNode, IA = window.Vue.renderList, RA = window.Vue.Fragment, ym = window.Vue.createElementBlock, zA = window.Vue.normalizeClass, OA = window.Vue.normalizeStyle, jA = { class: "sx-sentence-selector__header-title mb-0" }, HA = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, qA = { class: "sx-sentence-selector__section-contents px-4" }, zn = window.Vue.computed, GA = window.Vue.nextTick, XA = window.Vue.onMounted, Wo = window.Vue.ref, xm = window.Vue.watch, WA = window.Vuex.useStore, bm = window.Codex.CdxButton, KA = window.Codex.CdxIcon, Cm = window.Codex.CdxMessage, YA = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Wo(!1), n = Wo(!1), s = Wo("100%"), o = WA(), { currentMTProvider: a, previousRoute: r } = Te(o), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: d,
      pageURLParameter: u,
      sectionURLParameter: i
    } = P(), { resetPublishTarget: c, target: g } = kt(), p = or();
    g.value || p(
      l.value,
      d.value,
      u.value
    ).then(() => c());
    const {
      sourceSection: m,
      selectedContentTranslationUnit: h,
      targetPageTitleForPublishing: f
    } = ne(), v = Wo({
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
    } = sw(), K = () => {
      var oo;
      const q = N.currentRoute.value.meta.workflowStep, sn = N.getRoutes().find(
        (ao) => ao.name === r.value
      ), mt = ((oo = sn == null ? void 0 : sn.meta) == null ? void 0 : oo.workflowStep) || 0;
      return q > mt;
    }, ie = cA();
    dA()().then(() => {
      K() && S(), v.value.mtProviders = !0;
    });
    const j = mA(), { fetchTranslationsByStatus: W, translationsFetched: se } = Js(), re = BA(), { currentTranslation: $e } = Ot(), { selectPageSectionByTitle: Fe, selectPageSectionByIndex: De } = lr(), Z = ku(), tt = Ks();
    XA(() => C(this, null, function* () {
      if (!se.value.draft) {
        const q = [
          // required to get current draft translation (if exists)
          W("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          Z(l.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          tt(l.value, [u.value])
        ];
        yield Promise.all(q);
      }
      v.value.pageMetadata = !0, i.value ? yield Fe(i.value) : yield De(0), v.value.pageContent = !0, $e.value && (yield re($e.value)), v.value.draftRestored = !0, xm(
        _,
        () => C(this, null, function* () {
          _.value && (yield GA(), ie(), j());
        }),
        { immediate: !0 }
      ), s.value = window.innerHeight;
    })), xm(h, j);
    const { selectNextTranslationUnit: D, selectPreviousTranslationUnit: M } = eo(), Q = () => (R(), D()), w = CA(), B = () => {
      A(), w();
    }, T = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, N = et(), G = () => {
      const { autoSavePending: q } = o.state.application;
      if (q) {
        so.value = !0, V();
        return;
      }
      z();
    }, pe = $A(), { clearTranslationURLParameters: H } = P(), z = () => C(this, null, function* () {
      W("draft"), $e.value && (m.value.reset(), $e.value.restored = !1), F(), H(), pe(), yield N.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: oe,
      translateSelectedTranslationUnitForAllProviders: nt
    } = Eu(), Ce = () => {
      no.value || (t.value = !0, nt());
    }, { getCurrentTitleByLanguage: xa } = kn(), fs = (q) => {
      N.push({
        name: "sx-editor",
        state: {
          content: q,
          originalContent: y.value,
          title: xa(
            d.value,
            l.value
          ),
          isInitialEdit: !b.value || null
        }
      });
    }, to = () => N.push({ name: "sx-publisher" }), cr = () => C(this, null, function* () {
      h.value ? yield oe(
        h.value.id,
        a.value
      ) : yield oe(0, a.value);
    }), no = zn(
      () => h.value instanceof ct
    ), so = Wo(!1), {
      isPermissionWarningDismissed: ur,
      dismissPermissionWarning: dr,
      resetPermissionWarning: ws
    } = _m(), { isTitleErrorDismissed: vs, dismissTitleError: ba, resetTitleError: L } = _m();
    K() && (ws(), L());
    const O = zn(
      () => !ow() && !ur.value
    ), Ne = zn(
      () => {
        var q;
        return !vs.value && ((q = m.value) == null ? void 0 : q.isLeadSection) && !mw.Title.newFromText(f.value);
      }
    );
    return (q, ze) => {
      const sn = NA("i18n");
      return Yt(), ym("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: OA(E.value)
      }, [
        _t(le(U), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Ft(() => [
            _t(le(k), { shrink: "" }, {
              default: Ft(() => [
                _t(le(bm), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": q.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: G
                }, {
                  default: Ft(() => [
                    _t(le(KA), { icon: le(Wh) }, null, 8, ["icon"])
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
                MA(fn("h4", jA, null, 512), [
                  [sn, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            _t(le(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: Ft(() => [
                _t(le(bm), {
                  disabled: !(le(m) && le(m).isTranslated),
                  onClick: to
                }, {
                  default: Ft(() => [
                    UA(Xo(q.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
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
                O.value ? (Yt(), Rn(le(Cm), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: le(dr)
                }, {
                  default: Ft(() => [
                    fn("p", null, Xo(q.$i18n("cx-publish-permission-warning")), 1),
                    fn("p", null, [
                      fn("strong", null, [
                        fn("a", HA, Xo(q.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : Sm("", !0),
                Ne.value ? (Yt(), Rn(le(Cm), {
                  key: 1,
                  type: "error",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: le(ba)
                }, {
                  default: Ft(() => [
                    fn("p", null, [
                      fn("strong", null, Xo(q.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    fn("p", null, Xo(q.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : Sm("", !0),
                _t(TL),
                fn("div", qA, [
                  (Yt(!0), ym(RA, null, IA(x.value, (mt) => (Yt(), Rn(ST, {
                    id: mt.id,
                    key: `sub-section-${mt.id}`,
                    "sub-section": mt,
                    onBounceTranslation: T
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !no.value && b.value ? (Yt(), Rn(lA, {
              key: 0,
              onEditTranslation: fs,
              onSelectNextSegment: le(D),
              onSelectPreviousSegment: le(M)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : no.value ? (Yt(), Rn(zT, {
              key: 2,
              onEditTranslation: fs,
              onApplyTranslation: B,
              onSkipTranslation: Q,
              onSelectPreviousSegment: le(M),
              onSelectNextSegment: le(D)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Yt(), Rn(cT, {
              key: 1,
              class: zA({ "mb-0": !n.value }),
              onConfigureOptions: Ce,
              onEditTranslation: fs,
              onApplyTranslation: B,
              onSkipTranslation: Q,
              onSelectPreviousSegment: le(M),
              onRetryTranslation: cr
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Yt(), Rn(le(U), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Ft(() => [
            _t(le(dt), { class: "mt-0" })
          ]),
          _: 1
        })),
        _t(SL, {
          active: t.value,
          "onUpdate:active": ze[0] || (ze[0] = (mt) => t.value = mt)
        }, null, 8, ["active"]),
        _t(K5, {
          modelValue: so.value,
          "onUpdate:modelValue": ze[1] || (ze[1] = (mt) => so.value = mt),
          onDiscardTranslation: z
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const QA = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: YA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, JA = window.Vue.resolveComponent, ZA = window.Vue.createVNode, eD = window.Vue.normalizeClass, tD = window.Vue.openBlock, nD = window.Vue.createElementBlock;
function sD(e, t, n, s, o, a) {
  const r = JA("sx-sentence-selector");
  return tD(), nD("main", {
    class: eD(["sx-sentence-selector-view", a.classes])
  }, [
    ZA(r)
  ], 2);
}
const oD = /* @__PURE__ */ de(QA, [["render", sD]]), aD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, iD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const rD = window.Vue.resolveDirective, Mi = window.Vue.withDirectives, Nt = window.Vue.openBlock, wn = window.Vue.createElementBlock, Ui = window.Vue.createCommentVNode, Ii = window.Vue.Transition, is = window.Vue.withCtx, Us = window.Vue.createVNode, Ko = window.Vue.createElementVNode, On = window.Vue.unref, lD = window.Vue.renderList, cD = window.Vue.Fragment, uD = window.Vue.normalizeClass, km = window.Vue.createBlock, dD = window.Vue.toDisplayString, gD = window.Vue.createTextVNode, pD = { class: "sx-quick-tutorial" }, mD = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, hD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, fD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, wD = { class: "sx-quick-tutorial__illustration" }, vD = ["innerHTML"], _D = ["innerHTML"], SD = { class: "sx-quick-tutorial__step-indicator py-3" }, yD = ["onClick"], xD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, bD = {
  key: "secondary-point-1",
  class: "ma-0"
}, CD = {
  key: "secondary-point-2",
  class: "ma-0"
}, kD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, $m = window.Vue.ref, Vm = window.Codex.CdxButton, $D = window.Codex.CdxIcon, VD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = $m(2), n = $m(1), s = () => {
      n.value < t.value && n.value++;
    }, o = (r) => r === n.value, a = Zs();
    return (r, l) => {
      const d = rD("i18n");
      return Nt(), wn("section", pD, [
        Us(On(U), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: is(() => [
            Ko("section", mD, [
              Us(Ii, {
                name: "fade",
                mode: "out-in"
              }, {
                default: is(() => [
                  o(1) ? Mi((Nt(), wn("h2", hD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : o(2) ? Mi((Nt(), wn("h2", fD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ui("", !0)
                ]),
                _: 1
              })
            ]),
            Ko("section", wD, [
              Us(Ii, { name: "mw-ui-animation-slide-start" }, {
                default: is(() => [
                  o(1) ? (Nt(), wn("div", {
                    key: "illustration-1",
                    innerHTML: On(iD)
                  }, null, 8, vD)) : o(2) ? (Nt(), wn("div", {
                    key: "illustration-2",
                    innerHTML: On(aD)
                  }, null, 8, _D)) : Ui("", !0)
                ]),
                _: 1
              })
            ]),
            Ko("div", SD, [
              (Nt(!0), wn(cD, null, lD(t.value, (u) => (Nt(), wn("span", {
                key: `dot-${u}`,
                class: uD(["dot mx-1", { "dot-active": o(u) }]),
                role: "button",
                onClick: (i) => n.value = u
              }, null, 10, yD))), 128))
            ]),
            Ko("section", xD, [
              Us(Ii, {
                name: "fade",
                mode: "out-in"
              }, {
                default: is(() => [
                  o(1) ? Mi((Nt(), wn("h3", bD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : o(2) ? Mi((Nt(), wn("h3", CD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ui("", !0)
                ]),
                _: 1
              })
            ]),
            Ko("div", kD, [
              Us(Ii, {
                name: "fade",
                mode: "out-in"
              }, {
                default: is(() => [
                  o(1) ? (Nt(), km(On(Vm), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: s
                  }, {
                    default: is(() => [
                      Us(On($D), { icon: On(Sa) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : o(2) ? (Nt(), km(On(Vm), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: On(a)
                  }, {
                    default: is(() => [
                      gD(dD(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : Ui("", !0)
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
const ED = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: VD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, LD = window.Vue.resolveComponent, TD = window.Vue.createVNode, AD = window.Vue.normalizeClass, DD = window.Vue.openBlock, PD = window.Vue.createElementBlock;
function BD(e, t, n, s, o, a) {
  const r = LD("sx-quick-tutorial");
  return DD(), PD("main", {
    class: AD(["sx-quick-tutorial-view", a.classes])
  }, [
    TD(r)
  ], 2);
}
const FD = /* @__PURE__ */ de(ED, [["render", BD]]);
const ND = window.Vue.resolveDirective, Em = window.Vue.createElementVNode, MD = window.Vue.withDirectives, UD = window.Vue.unref, ID = window.Vue.withCtx, RD = window.Vue.createVNode, zD = window.Vue.openBlock, OD = window.Vue.createElementBlock, jD = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, HD = { class: "sx-editor__original-content-panel__header mb-2" }, qD = ["lang", "dir", "innerHTML"], Lm = window.Vue.ref, GD = window.Vue.onMounted, XD = {
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
      const d = r.getElementsByTagName("a");
      for (const u of d)
        u.href = Y.getPageUrl(l, u.title), u.target = "_blank";
    }, s = Lm(null), o = Lm(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(s.value, null).getPropertyValue("line-height")
    );
    return GD(() => {
      o.value = 2 * a(), n(s.value, t.language);
    }), (r, l) => {
      const d = ND("i18n");
      return zD(), OD("section", jD, [
        MD(Em("h5", HD, null, 512), [
          [d, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        RD(UD(a1), {
          "min-height": o.value,
          scroll: ""
        }, {
          default: ID(() => [
            Em("div", {
              ref_key: "originalContentRef",
              ref: s,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, qD)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, WD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const KD = window.Vue.unref, Yo = window.Vue.createElementVNode, Tm = window.Vue.resolveDirective, mc = window.Vue.withDirectives, YD = window.Vue.normalizeClass, QD = window.Vue.openBlock, JD = window.Vue.createElementBlock, ZD = window.Vue.createCommentVNode, e6 = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, t6 = { class: "sx-editor__feedback-overlay-content px-4" }, n6 = ["innerHTML"], s6 = { class: "sx-editor__feedback-overlay-content__title" }, o6 = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, hc = window.Vue.computed, a6 = {
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
    const t = e, { targetLanguageURLParameter: n } = P(), s = hc(
      () => tn.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), o = hc(() => {
      const r = tn.getScoreStatus(s.value);
      return r === "failure" ? s.value === 0 ? "failure" : "warning" : r;
    }), a = hc(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return (r, l) => {
      const d = Tm("i18n"), u = Tm("i18n-html");
      return e.showFeedback ? (QD(), JD("div", e6, [
        Yo("div", t6, [
          Yo("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: KD(WD)
          }, null, 8, n6),
          mc(Yo("h2", s6, null, 512), [
            [d, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          mc(Yo("p", o6, null, 512), [
            [d, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          mc(Yo("p", {
            class: YD(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [u, [s.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : ZD("", !0);
    };
  }
}, i6 = window.Vuex.useStore, r6 = () => {
  const e = i6(), t = Lu(), { selectNextTranslationUnit: n } = eo(), {
    isSectionTitleSelected: s,
    sourceSection: o,
    selectedContentTranslationUnit: a
  } = ne(), { getCurrentTitleByLanguage: r } = kn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: d
  } = P(), { currentMTProvider: u } = Te(e);
  return (i) => C(void 0, null, function* () {
    if (!s.value) {
      const c = document.createElement("div");
      c.innerHTML = i, c.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = c.innerHTML;
    }
    a.value instanceof ct && (i = (yield Yf(
      i,
      r(d.value, l.value),
      d.value
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      u.value
    ), t(), n();
  });
};
const Ye = window.Vue.unref, fc = window.Vue.openBlock, wc = window.Vue.createBlock, Am = window.Vue.createCommentVNode, Dm = window.Vue.createVNode, l6 = window.Vue.createElementVNode, c6 = window.Vue.withCtx, u6 = { class: "sx-editor__editing-surface-container grow" }, vc = window.Vue.ref, d6 = window.Vue.computed;
window.Vue.inject;
const g6 = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = vc(!1), s = et(), o = () => n.value = !0, a = () => s.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: d, originalContent: u, title: i } = history.state, c = vc(null), g = vc(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = sw(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = P(), { isSectionTitleSelected: v, sourceSection: _ } = ne(), b = d6(
      () => tn.calculateScore(
        c.value,
        d,
        f.value
      )
    ), x = r6(), y = (E) => C(this, null, function* () {
      c.value = E, g.value = !0;
      const S = new Promise((V) => setTimeout(V, 2e3));
      let F = Promise.resolve();
      r ? _.value.editedTranslation = E : F = x(E), b.value === 0 && l ? p() : b.value > 0 && m(), yield Promise.all([S, F]), g.value = !1, a();
    });
    return r ? mw.cx.eventlogging.stats.publishEditorStepAccess() : mw.cx.eventlogging.stats.editingStepAccess(!0), (E, S) => (fc(), wc(Ye(U), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: c6(() => [
        Ye(u) ? (fc(), wc(XD, {
          key: 0,
          language: Ye(h),
          dir: Ye(I.getDir)(Ye(h)),
          "original-content": Ye(u)
        }, null, 8, ["language", "dir", "original-content"])) : Am("", !0),
        n.value ? Am("", !0) : (fc(), wc(Ye(dt), { key: 1 })),
        l6("div", u6, [
          Dm(a6, {
            "edited-translation": c.value,
            "show-feedback": g.value,
            "proposed-translation": Ye(d)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Dm(NV, {
            content: Ye(d),
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
const p6 = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: g6
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
}, m6 = window.Vue.resolveComponent, h6 = window.Vue.createVNode, f6 = window.Vue.normalizeClass, w6 = window.Vue.openBlock, v6 = window.Vue.createElementBlock;
function _6(e, t, n, s, o, a) {
  const r = m6("sx-editor");
  return w6(), v6("main", {
    class: f6(["sx-editor-view", a.classes])
  }, [
    h6(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const S6 = /* @__PURE__ */ de(p6, [["render", _6]]);
const Qt = window.Vue.unref, rs = window.Vue.createVNode, Qo = window.Vue.withCtx, y6 = window.Vue.resolveDirective, x6 = window.Vue.withDirectives, b6 = window.Vue.openBlock, C6 = window.Vue.createBlock, Pm = window.Codex.CdxButton, Bm = window.Codex.CdxIcon, k6 = {
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
      const a = y6("i18n");
      return b6(), C6(Qt(U), { class: "ma-0 sx-publisher__header" }, {
        default: Qo(() => [
          rs(Qt(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: Qo(() => [
              rs(Qt(Pm), {
                class: "px-3",
                weight: "quiet",
                "aria-label": s.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Qo(() => [
                  rs(Qt(Bm), { icon: Qt(Qs) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          x6(rs(Qt(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          rs(Qt(k), { shrink: "" }, {
            default: Qo(() => [
              rs(Qt(Pm), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": s.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: o[0] || (o[0] = (r) => s.$emit("publish-translation"))
              }, {
                default: Qo(() => [
                  rs(Qt(Bm), { icon: Qt(ay) }, null, 8, ["icon"])
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
}, $6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, V6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Fm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const _c = window.Vue.createElementVNode, Nm = window.Vue.toDisplayString, Sc = window.Vue.unref, yc = window.Vue.withCtx, Mm = window.Vue.createVNode, E6 = window.Vue.openBlock, L6 = window.Vue.createBlock, T6 = window.Vue.createCommentVNode, A6 = ["innerHTML"], D6 = ["textContent"], P6 = ["textContent"], xc = window.Vue.computed, B6 = {
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
        svg: $6,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: V6,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Fm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Fm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, o = xc(() => s[n.status].svg), a = xc(() => s[n.status].title), r = xc(() => s[n.status].subtitle);
    return (l, d) => e.active ? (E6(), L6(Sc(bt), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: yc(() => [
        Mm(Sc(U), { class: "ma-4" }, {
          default: yc(() => [
            Mm(Sc(k), null, {
              default: yc(() => [
                _c("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: o.value
                }, null, 8, A6),
                _c("h2", {
                  textContent: Nm(a.value)
                }, null, 8, D6),
                _c("p", {
                  class: "ma-0",
                  textContent: Nm(r.value)
                }, null, 8, P6)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : T6("", !0);
  }
};
const rt = window.Vue.unref, Mt = window.Vue.createVNode, vn = window.Vue.withCtx, F6 = window.Vue.resolveDirective, N6 = window.Vue.withDirectives, Um = window.Vue.toDisplayString, M6 = window.Vue.createTextVNode, bc = window.Vue.openBlock, Im = window.Vue.createElementBlock, U6 = window.Vue.createCommentVNode, iw = window.Vue.createElementVNode, I6 = window.Vue.createBlock, R6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, z6 = ["src"], O6 = ["textContent"], j6 = /* @__PURE__ */ iw("p", { class: "mt-0" }, null, -1), H6 = window.Vue.computed, q6 = window.Vue.inject, G6 = window.Vue.ref, Rm = window.Codex.CdxButton, X6 = window.Codex.CdxIcon, W6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: rf,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, s = G6(""), o = () => n("close"), a = () => n("publish", s.value), r = q6("breakpoints"), l = H6(() => r.value.mobile);
    return (d, u) => {
      const i = F6("i18n");
      return e.active && e.captchaDetails ? (bc(), I6(rt(bt), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: vn(() => [
          Mt(rt(U), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: vn(() => [
              Mt(rt(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: vn(() => [
                  Mt(rt(Rm), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": d.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: o
                  }, {
                    default: vn(() => [
                      Mt(rt(X6), { icon: rt(Qs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              N6(Mt(rt(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Mt(rt(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: vn(() => [
                  Mt(rt(Rm), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: vn(() => [
                      M6(Um(d.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Mt(rt(Wi))
        ]),
        default: vn(() => [
          iw("div", R6, [
            e.captchaDetails.type === "image" ? (bc(), Im("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, z6)) : (bc(), Im("p", {
              key: 1,
              textContent: Um(e.captchaDetails.question)
            }, null, 8, O6)),
            j6,
            Mt(rt(U), { class: "ma-0" }, {
              default: vn(() => [
                Mt(rt(k), null, {
                  default: vn(() => [
                    Mt(rt(Uc), {
                      value: s.value,
                      "onUpdate:value": u[0] || (u[0] = (c) => s.value = c),
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
      }, 8, ["fullscreen"])) : U6("", !0);
    };
  }
};
const jn = window.Vue.unref, Ri = window.Vue.createVNode, Is = window.Vue.withCtx, Rs = window.Vue.createElementVNode, K6 = window.Vue.resolveDirective, Y6 = window.Vue.withDirectives, Q6 = window.Vue.renderList, J6 = window.Vue.Fragment, Cc = window.Vue.openBlock, Z6 = window.Vue.createElementBlock, zm = window.Vue.toDisplayString, Om = window.Vue.createTextVNode, e9 = window.Vue.isRef, t9 = window.Vue.normalizeClass, jm = window.Vue.createBlock, n9 = { class: "mw-ui-dialog__header" }, s9 = { class: "row ma-0 px-4 py-3" }, o9 = { class: "col shrink justify-center" }, a9 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, i9 = { class: "mb-0" }, r9 = { class: "pa-4" }, l9 = window.Codex.CdxField, c9 = window.Codex.CdxRadio, u9 = window.Vuex.useStore, zi = window.Vue.computed, d9 = window.Codex.CdxButton, g9 = window.Codex.CdxIcon, p9 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, s = u9(), { target: o, PUBLISHING_TARGETS: a } = kt(), r = zi(() => s.state.translator.isAnon), l = ge(), { sourceSection: d } = ne(), { isCurrentSectionPresent: u } = Ae(), i = zi(
      () => d.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), c = zi(
      () => d.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), g = zi(() => {
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
      return u.value && (m.push({
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
      const f = K6("i18n");
      return Cc(), jm(jn(bt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[1] || (h[1] = (v) => m.$emit("update:active", v)),
        onClose: p
      }, {
        header: Is(() => [
          Rs("div", n9, [
            Rs("div", s9, [
              Rs("div", o9, [
                Ri(jn(d9), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: Is(() => [
                    Ri(jn(g9), { icon: jn(Wh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Rs("div", a9, [
                Y6(Rs("h4", i9, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Ri(jn(Wi))
          ])
        ]),
        default: Is(() => [
          Rs("div", r9, [
            Ri(jn(l9), { "is-fieldset": "" }, {
              default: Is(() => [
                (Cc(!0), Z6(J6, null, Q6(g.value, (v, _) => (Cc(), jm(jn(c9), {
                  key: "publish-options-radio-" + v.value,
                  modelValue: jn(o),
                  "onUpdate:modelValue": [
                    h[0] || (h[0] = (b) => e9(o) ? o.value = b : null),
                    p
                  ],
                  class: t9(_ < g.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": v.value,
                  disabled: v.disabled,
                  name: "publish-options"
                }, {
                  description: Is(() => [
                    Om(zm(v.description), 1)
                  ]),
                  default: Is(() => [
                    Om(zm(v.label) + " ", 1)
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
const Ut = window.Vue.unref, Hm = window.Vue.toDisplayString, qm = window.Vue.createElementVNode, m9 = window.Vue.resolveDirective, zs = window.Vue.createVNode, h9 = window.Vue.withDirectives, Jo = window.Vue.withCtx, kc = window.Vue.openBlock, Gm = window.Vue.createBlock, Xm = window.Vue.createCommentVNode, f9 = window.Vue.Fragment, w9 = window.Vue.createElementBlock, v9 = window.Vue.normalizeClass, _9 = ["textContent"], S9 = ["textContent"], Os = window.Vue.computed, Wm = window.Vue.ref, y9 = window.Vue.watch, Km = window.Codex.CdxButton, Ym = window.Codex.CdxIcon, x9 = window.Codex.CdxMessage, b9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Wm(0), s = Wm(null);
    y9(s, () => {
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
    ), d = ge(), u = Os(() => {
      var p;
      return (p = o.value) == null ? void 0 : p.text;
    }), i = Os(() => {
      var p;
      return r.value ? d.i18n("cx-sx-publisher-review-info") : ((p = o.value) == null ? void 0 : p.title) || d.i18n("cx-sx-publisher-review-info-error");
    }), c = () => {
      const p = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + p) % p;
    }, g = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (p, m) => {
      const h = m9("i18n-html");
      return kc(), Gm(Ut(x9), {
        type: a.value,
        class: v9(["sx-publisher__review-info", l.value]),
        icon: r.value ? Ut(ly) : null
      }, {
        default: Jo(() => [
          qm("h5", {
            textContent: Hm(i.value)
          }, null, 8, _9),
          r.value ? Xm("", !0) : (kc(), w9(f9, { key: 0 }, [
            qm("p", {
              textContent: Hm(u.value)
            }, null, 8, S9),
            zs(Ut(U), {
              justify: "between",
              class: "ma-0"
            }, {
              default: Jo(() => [
                h9(zs(Ut(k), {
                  ref_key: "learnMoreContainer",
                  ref: s,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (kc(), Gm(Ut(k), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: Jo(() => [
                    zs(Ut(Km), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: c
                    }, {
                      default: Jo(() => [
                        zs(Ut(Ym), { icon: Ut(mu) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    zs(Ut(Km), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: Jo(() => [
                        zs(Ut(Ym), { icon: Ut(Sa) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })) : Xm("", !0)
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
}, k9 = window.Vuex.useStore, $9 = window.Vue.computed, V9 = () => {
  const e = k9(), { currentTranslation: t } = Ot(), { currentMTProvider: n } = Te(e), { currentTargetPageTitle: s } = pt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = P(), { sourceSection: d } = ne(), u = Ct(), i = $9(() => {
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
      d.value,
      a.value
    ) / 100, m.human_modification_threshold = tn.getMtModificationThreshold(), m;
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
}, E9 = window.Vue.computed, Qm = window.Vue.ref, L9 = window.Vuex.useStore, T9 = () => {
  const e = L9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: s
  } = P(), { sourceSection: o, targetPageTitleForPublishing: a } = ne(), r = tw(), { sectionSuggestion: l } = Ae(), d = E9(
    () => {
      var x, y;
      return (y = l.value) == null ? void 0 : y.presentSections[(x = o.value) == null ? void 0 : x.sourceSectionTitleForPublishing];
    }
  ), { target: u, PUBLISHING_TARGETS: i } = kt(), c = Qm(!1), g = Qm("pending"), p = () => c.value = !1, m = Lu(), {
    logPublishAttemptEvent: h,
    logPublishSuccessEvent: f,
    logPublishFailureEvent: v
  } = V9(), _ = (x, y) => C(void 0, null, function* () {
    h();
    const E = yield m();
    if (E instanceof Xn)
      return v(), { publishFeedbackMessage: E, targetUrl: null };
    const S = E, F = a.value, V = {
      html: C9(o.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: F,
      sourceSectionTitle: o.value.sourceSectionTitleForPublishing,
      targetSectionTitle: o.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: s.value,
      revision: r.value,
      publishTarget: u.value,
      sectionTranslationId: S
    };
    d.value && (V.existingSectionTitle = d.value), x && (V.captchaId = x, V.captchaWord = y);
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
}, A9 = window.Vue.computed, D9 = () => {
  const e = et(), { sourceSection: t } = ne(), { getCurrentTitleByLanguage: n } = kn(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
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
        o.value,
        s.value
      ),
      isFinalEdit: !0
    }
  });
}, P9 = () => {
  const { targetLanguageURLParameter: e } = P(), { sourceSection: t } = ne();
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
}, B9 = window.Vue.ref, F9 = window.Vue.computed, N9 = () => {
  const e = P9(), { target: t, PUBLISHING_TARGETS: n } = kt(), { targetPageTitleForPublishing: s } = ne(), o = B9([]), a = F9(
    () => o.value.some((u) => u.isError)
  ), r = (u) => {
    o.value.push(u), o.value.sort((i, c) => +c.isError - +i.isError);
  };
  return {
    addPublishFeedbackMessage: r,
    clearPublishFeedbackMessages: () => {
      o.value = [];
    },
    publishFeedbackMessages: o,
    isPublishingDisabled: a,
    initializePublishFeedbackMessages: () => {
      if (!ow() && t.value !== n.SANDBOX) {
        const i = new Xn({
          text: mw.message("cx-publish-permission-error").text(),
          title: mw.message("cx-publish-permission-error-title").text(),
          type: "generic",
          status: "error"
        });
        r(i);
      }
      const u = e();
      u && r(u), mw.Title.newFromText(s.value) || r(
        new Xn({
          text: mw.message("cx-tools-linter-invalid-character-message").text(),
          title: mw.message("cx-tools-linter-invalid-character").text(),
          type: "generic",
          status: "error"
        })
      );
    }
  };
}, M9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = kt(), { currentSourcePage: n } = pt(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = P(), { sourceSection: a, targetPageTitleForPublishing: r } = ne();
  return (l) => C(void 0, null, function* () {
    const d = r.value, u = n.value.title, i = new mw.Title(u), c = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== c.user)
      try {
        yield $u.addWikibaseLink(
          s.value,
          o.value,
          u,
          d
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
}, Jm = window.Vue.ref, U9 = () => {
  const e = Jm(!1), t = Jm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (o) => o && o.type === "captcha" ? (t.value = o.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ue = window.Vue.unref, Ge = window.Vue.createVNode, I9 = window.Vue.resolveDirective, Zm = window.Vue.withDirectives, $c = window.Vue.openBlock, Vc = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ls = window.Vue.createElementVNode, eh = window.Vue.toDisplayString, R9 = window.Vue.createTextVNode, js = window.Vue.withCtx, th = window.Vue.normalizeClass, z9 = { class: "sx-publisher" }, O9 = {
  key: 0,
  class: "mb-2"
}, j9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, H9 = ["href"], q9 = ["innerHTML"], G9 = { class: "sx-publisher__section-preview pa-5" }, X9 = ["innerHTML"], Oi = window.Vue.computed, W9 = window.Vue.onMounted, K9 = window.Vue.ref, Y9 = window.Vue.watch, nh = window.Codex.CdxButton, Ec = window.Codex.CdxIcon, Q9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = ne(), { sectionSuggestion: n, isCurrentSectionPresent: s } = Ae(), {
      targetLanguageURLParameter: o,
      sectionURLParameter: a
    } = P(), r = Oi(() => {
      var j;
      return (j = t.value) == null ? void 0 : j.title;
    }), l = ge(), { target: d, PUBLISHING_TARGETS: u } = kt(), i = Oi(() => d.value === u.SANDBOX ? l.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : d.value === u.EXPAND ? l.i18n(
      "cx-sx-publisher-publish-panel-expand-section-result"
    ) : d.value === u.REPLACE ? l.i18n(
      "cx-sx-publisher-publish-panel-replace-section-result"
    ) : t.value.isLeadSection ? l.i18n("cx-sx-publisher-publish-panel-lead-section-result") : l.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: c,
      captchaDialogOn: g,
      handleCaptchaError: p,
      onCaptchaDialogClose: m
    } = U9(), {
      publishFeedbackMessages: h,
      isPublishingDisabled: f,
      addPublishFeedbackMessage: v,
      clearPublishFeedbackMessages: _,
      initializePublishFeedbackMessages: b
    } = N9(), x = M9(), { doPublish: y, isPublishDialogActive: E, publishStatus: S, closePublishDialog: F } = T9(), V = (j = null) => C(this, null, function* () {
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
    W9(() => {
      b(), mw.cx.eventlogging.stats.publishStepAccess();
    });
    const A = D9(), R = K9(!1), K = () => R.value = !0;
    Y9(R, (j) => {
      j || (_(), b());
    });
    const ie = Oi(
      () => {
        var j, W;
        return (W = (j = n.value) == null ? void 0 : j.presentSections) == null ? void 0 : W[a.value];
      }
    ), te = Oi(() => {
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
      const se = I9("i18n");
      return $c(), Vc("section", z9, [
        Ge(k6, {
          "is-publishing-disabled": ue(f),
          onPublishTranslation: V
        }, null, 8, ["is-publishing-disabled"]),
        ls("div", {
          class: th(["sx-publisher__publish-panel", ue(s) ? "py-4" : "pa-4"])
        }, [
          ue(s) ? ($c(), Vc("div", j9, [
            Zm(ls("h5", null, null, 512), [
              [se, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            ls("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: te.value,
              target: "_blank"
            }, [
              R9(eh(ie.value) + " ", 1),
              Ge(ue(Ec), { icon: ue(nr) }, null, 8, ["icon"])
            ], 8, H9)
          ])) : Zm(($c(), Vc("h5", O9, null, 512)), [
            [se, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          ls("div", {
            class: th({ "px-4 mt-4": ue(s) })
          }, [
            ls("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: i.value
            }, null, 8, q9),
            Ge(ue(U), {
              justify: "end",
              class: "ma-0"
            }, {
              default: js(() => [
                Ge(ue(k), { shrink: "" }, {
                  default: js(() => [
                    Ge(ue(nh), {
                      weight: "quiet",
                      "aria-label": j.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: K
                    }, {
                      default: js(() => [
                        Ge(ue(Ec), { icon: ue(vy) }, null, 8, ["icon"])
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
        Ge(b9, { "publish-feedback-messages": ue(h) }, null, 8, ["publish-feedback-messages"]),
        ls("section", G9, [
          Ge(ue(U), { class: "pb-5 ma-0" }, {
            default: js(() => [
              Ge(ue(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: eh(r.value)
              }, null, 8, ["textContent"]),
              Ge(ue(k), { shrink: "" }, {
                default: js(() => [
                  Ge(ue(nh), {
                    weight: "quiet",
                    "aria-label": j.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ue(A)
                  }, {
                    default: js(() => [
                      Ge(ue(Ec), { icon: ue(gu) }, null, 8, ["icon"])
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
          }, null, 8, X9)
        ]),
        Ge(p9, {
          active: R.value,
          "onUpdate:active": W[0] || (W[0] = (re) => R.value = re)
        }, null, 8, ["active"]),
        Ge(W6, {
          active: ue(g),
          "captcha-details": ue(c),
          onClose: ue(m),
          onPublish: W[1] || (W[1] = (re) => V(re))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ge(B6, {
          active: ue(E),
          status: ue(S)
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
}, Z9 = window.Vue.resolveComponent, eP = window.Vue.createVNode, tP = window.Vue.normalizeClass, nP = window.Vue.openBlock, sP = window.Vue.createElementBlock;
function oP(e, t, n, s, o, a) {
  const r = Z9("sx-publisher");
  return nP(), sP("main", {
    class: tP(["sx-publisher-view", a.classes])
  }, [
    eP(r)
  ], 2);
}
const aP = /* @__PURE__ */ de(J9, [["render", oP]]);
const It = window.Vue.unref, Hn = window.Vue.createVNode, cs = window.Vue.withCtx, Lc = window.Vue.toDisplayString, Tc = window.Vue.createElementVNode, iP = window.Vue.openBlock, rP = window.Vue.createBlock, lP = ["textContent"], cP = ["textContent"], uP = ["textContent"], rw = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Ws,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (iP(), rP(It(U), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: It(I.getDir)(e.suggestion.language)
    }, {
      default: cs(() => [
        Hn(It(k), { shrink: "" }, {
          default: cs(() => [
            Hn(It(Qc), {
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
                    Tc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Lc(e.suggestion.title)
                    }, null, 8, lP)
                  ]),
                  _: 1
                }),
                Hn(It(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: cs(() => [
                    Tc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Lc(e.suggestion.description)
                    }, null, 8, cP)
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
                      icon: It(H0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    Tc("small", {
                      textContent: Lc((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, uP)
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
const Zo = window.Vue.unref, ea = window.Vue.openBlock, Ac = window.Vue.createBlock, dP = window.Vue.createCommentVNode, gP = window.Vue.resolveDirective, pP = window.Vue.withDirectives, sh = window.Vue.createElementBlock, mP = window.Vue.renderList, hP = window.Vue.Fragment, fP = window.Vue.normalizeClass, wP = window.Vue.withCtx, vP = {
  key: 1,
  class: "sx-article-search__empty-state"
}, oh = window.Vue.computed, _P = window.Vue.ref, SP = {
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
    const { sourceLanguageURLParameter: t } = P(), n = oh(() => I.getAutonym(t.value)), s = e, o = _P(null), a = (c) => o.value = c, r = () => o.value = null, l = (c) => {
      var g;
      return ((g = s.selectedItem) == null ? void 0 : g.title) === c.title && !o.value || o.value === c.pageId;
    }, d = oh(() => s.searchInput), { searchResultsLoading: u, searchResultsSlice: i } = Su(
      t,
      d
    );
    return (c, g) => {
      const p = gP("i18n");
      return ea(), Ac(Zo(Je), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: wP(() => [
          Zo(u) ? (ea(), Ac(Zo(dt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Zo(i).length === 0 ? pP((ea(), sh("p", vP, null, 512)), [
            [p, [
              d.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : dP("", !0),
          (ea(!0), sh(hP, null, mP(Zo(i), (m) => (ea(), Ac(rw, {
            key: m.pageId,
            suggestion: m,
            class: fP({
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
const yP = window.Vue.toDisplayString, xP = window.Vue.createElementVNode, bP = window.Vue.renderList, CP = window.Vue.Fragment, Dc = window.Vue.openBlock, kP = window.Vue.createElementBlock, $P = window.Vue.normalizeClass, ah = window.Vue.createBlock, VP = window.Vue.unref, ih = window.Vue.withCtx, EP = ["textContent"], LP = window.Vue.ref, rh = {
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
    const n = e, s = LP(null), o = (l) => s.value = l, a = () => s.value = null, r = (l) => {
      var d;
      return ((d = n.selectedItem) == null ? void 0 : d.title) === l.title && !s.value || s.value === l.pageId;
    };
    return (l, d) => (Dc(), ah(VP(Je), { class: "sx-article-search__suggestions pa-0" }, {
      header: ih(() => [
        xP("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: yP(e.cardTitle)
        }, null, 8, EP)
      ]),
      default: ih(() => [
        (Dc(!0), kP(CP, null, bP(e.suggestions, (u) => (Dc(), ah(rw, {
          key: u.pageId,
          suggestion: u,
          class: $P({
            "sx-article-search__suggestions-selected": r(u)
          }),
          onMouseenter: (i) => o(u.pageId),
          onMouseleave: a,
          onClick: (i) => l.$emit("suggestion-clicked", u)
        }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, TP = window.Vue.computed, AP = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), lh = "other", DP = (e) => TP((t) => {
  const s = e.value.slice(0, 3), o = {
    value: lh,
    props: {
      icon: W0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== lh);
  return AP(a, s) ? t : [...s.map((l) => ({
    value: l,
    props: {
      label: I.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), PP = window.Vue.computed, BP = () => {
  const { supportedSourceLanguageCodes: e } = wa(), { targetLanguageURLParameter: t } = P();
  return { getSuggestedSourceLanguages: (s) => PP(() => {
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
}, FP = window.Vue.ref, NP = () => {
  const e = FP([]), t = () => {
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
const MP = window.Vue.resolveDirective, UP = window.Vue.createElementVNode, Pc = window.Vue.withDirectives, he = window.Vue.unref, ta = window.Vue.withCtx, Jt = window.Vue.createVNode, na = window.Vue.openBlock, ch = window.Vue.createBlock, IP = window.Vue.createCommentVNode, Bc = window.Vue.createElementBlock, RP = window.Vue.Fragment, zP = window.Vue.vShow, sa = window.Vue.withModifiers, oa = window.Vue.withKeys, OP = ["onKeydown"], jP = { class: "mb-0" }, HP = {
  key: 2,
  class: "sx-article-search__empty-state"
}, aa = window.Vue.ref, qP = window.Vue.onMounted, ia = window.Vue.computed, uh = window.Vue.watch, GP = window.Vue.inject, XP = window.Vuex.useStore, WP = window.Codex.CdxButton, KP = window.Codex.CdxIcon, YP = window.Codex.CdxSearchInput, QP = 3, JP = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = aa(""), n = aa(!1), s = aa(null), o = aa(!1), { previousLanguages: a, addLanguageToHistory: r } = NP(), l = XP(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: u
    } = P(), { supportedSourceLanguageCodes: i } = wa(), { searchResultsSlice: c } = Su(d, t), { getSuggestedSourceLanguages: g } = BP(), p = g(a), m = DP(
      p
    ), h = et(), { fetchAllTranslations: f } = Js();
    qP(() => C(this, null, function* () {
      var D;
      f(), r(d.value), (D = s.value) == null || D.focus();
    }));
    const v = () => {
      h.push({ name: "dashboard" });
    }, _ = of(), b = (D) => {
      _(D, u.value), r(D);
    }, x = (D) => {
      if (D === "other") {
        o.value = !0;
        return;
      }
      b(D);
    };
    uh(
      d,
      () => {
        var D;
        l.dispatch("mediawiki/fetchNearbyPages"), (D = s.value) == null || D.focus();
      },
      { immediate: !0 }
    );
    const y = Ct();
    uh(t, () => {
      n.value || (n.value = !0, y({
        event_type: "dashboard_search",
        translation_source_language: d.value,
        translation_target_language: u.value
      }));
    });
    const E = () => {
      o.value = !1;
    }, S = (D) => {
      o.value = !1, x(D);
    }, { fetchPreviousEditsInSource: F, previousEditsInSource: V } = jh(), A = aa([]);
    (() => F().then(() => V.value.length > 0 ? ps.fetchPages(
      d.value,
      V.value
    ) : []).then((D) => {
      D = D.slice(0, QP), D = D.sort(
        (M, Q) => V.value.indexOf(M.title) - V.value.indexOf(Q.title)
      ), A.value = D;
    }))();
    const K = ia(() => l.getters["mediawiki/getNearbyPages"]), ie = GP("breakpoints"), te = ia(() => ie.value.mobile), j = ya(), W = ia(
      () => A.value && A.value.length
    ), se = ia(
      () => K.value && K.value.length
    ), { next: re, prev: $e, keyboardNavigationContainer: Fe, selectedItem: De } = Uf(t, c, A), Z = (D) => j(
      D.title,
      d.value,
      u.value,
      tt.value
    ), tt = ia(() => t.value ? "search_result" : W.value ? "suggestion_recent_edit" : se.value ? "suggestion_nearby" : "");
    return (D, M) => {
      const Q = MP("i18n");
      return na(), Bc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: Fe,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          M[5] || (M[5] = oa(sa((...w) => he(re) && he(re)(...w), ["stop", "prevent"]), ["tab"])),
          M[6] || (M[6] = oa(sa((...w) => he(re) && he(re)(...w), ["stop", "prevent"]), ["down"])),
          M[7] || (M[7] = oa(sa((...w) => he($e) && he($e)(...w), ["stop", "prevent"]), ["up"])),
          oa(sa(v, ["stop", "prevent"]), ["esc"]),
          M[8] || (M[8] = oa(sa((w) => Z(he(De)), ["stop", "prevent"]), ["enter"]))
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
                Pc(UP("h5", jP, null, 512), [
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
                Jt(he(WP), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": D.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: v
                }, {
                  default: ta(() => [
                    Jt(he(KP), { icon: he(Qs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Jt(he(YP), {
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
          active: he(d),
          onSelect: x
        }, null, 8, ["items", "active"]),
        t.value ? IP("", !0) : (na(), Bc(RP, { key: 0 }, [
          W.value ? (na(), ch(rh, {
            key: 0,
            "card-title": D.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: A.value,
            "selected-item": he(De),
            onSuggestionClicked: M[1] || (M[1] = (w) => Z(w))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : se.value ? (na(), ch(rh, {
            key: 1,
            "card-title": D.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: K.value,
            onSuggestionClicked: M[2] || (M[2] = (w) => Z(w))
          }, null, 8, ["card-title", "suggestions"])) : Pc((na(), Bc("p", HP, null, 512)), [
            [Q, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Pc(Jt(SP, {
          "search-input": t.value,
          "selected-item": he(De),
          onSuggestionClicked: M[3] || (M[3] = (w) => Z(w))
        }, null, 8, ["search-input", "selected-item"]), [
          [zP, !!t.value]
        ]),
        Jt(he(bt), {
          value: o.value,
          "onUpdate:value": M[4] || (M[4] = (w) => o.value = w),
          class: "sx-article-search-language-selector",
          fullscreen: te.value,
          header: te.value,
          title: D.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: E
        }, {
          default: ta(() => [
            Jt(he(If), {
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
      ], 40, OP);
    };
  }
};
const ZP = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: JP
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, eB = window.Vue.resolveComponent, tB = window.Vue.createVNode, nB = window.Vue.normalizeClass, sB = window.Vue.openBlock, oB = window.Vue.createElementBlock;
function aB(e, t, n, s, o, a) {
  const r = eB("sx-article-search");
  return sB(), oB("main", {
    class: nB(["sx-article-search-view", a.classes])
  }, [
    tB(r)
  ], 2);
}
const iB = /* @__PURE__ */ de(ZP, [["render", aB]]), rB = () => {
  const e = ya(), t = ku(), { logDashboardOpenEvent: n } = jf(), {
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
}, lB = window.Vuex.useStore, cB = [
  {
    path: "",
    name: "dashboard",
    component: ap,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: iB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: d4,
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
    component: E3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: z5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: FD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: oD,
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
    component: S6,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: aP,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: ap,
    meta: { workflowStep: 0 }
  }
], Tu = aC({
  history: ob(),
  routes: cB
}), Fc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, uB = (e, t, n) => {
  let s = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return s = s.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(s, "");
};
Tu.beforeEach((e, t, n) => {
  const s = lB();
  if (mw.user.isAnon() || hh.assertUser().catch((i) => {
    i instanceof Xs && s.commit("application/setIsLoginDialogOn", !0);
  }), s.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const o = rB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: d
  } = P();
  if (!!(a.value && r.value && l.value)) {
    if (uB(
      a.value,
      r.value,
      l.value
    )) {
      const c = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      Fc(e.name, c, n);
    } else
      e.name === "sx-translation-confirmer" && o(), Fc(e.name, "sx-translation-confirmer", n);
    return;
  }
  d(), Fc(e.name, "dashboard", n);
});
Tu.afterEach((e, t) => {
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
const dB = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, gB = window.Vue.createApp, pB = mw.config.get("wgUserLanguage"), mB = "en", hB = mw.messages.values || {}, hs = gB(Wy);
hs.use(Tu);
hs.use($x);
hs.use(w1);
hs.use(f1);
const fB = W1({
  locale: pB,
  finalFallback: mB,
  messages: hB,
  wikilinks: !0
});
hs.use(fB);
hs.use(dB);
hs.mount("#contenttranslation");
