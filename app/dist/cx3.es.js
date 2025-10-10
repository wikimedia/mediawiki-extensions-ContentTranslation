var pw = Object.defineProperty, hw = Object.defineProperties;
var fw = Object.getOwnPropertyDescriptors;
var Bu = Object.getOwnPropertySymbols;
var ww = Object.prototype.hasOwnProperty, vw = Object.prototype.propertyIsEnumerable;
var Fu = (e, t, n) => t in e ? pw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ce = (e, t) => {
  for (var n in t || (t = {}))
    ww.call(t, n) && Fu(e, n, t[n]);
  if (Bu)
    for (var n of Bu(t))
      vw.call(t, n) && Fu(e, n, t[n]);
  return e;
}, Ke = (e, t) => hw(e, fw(t));
var b = (e, t, n) => new Promise((s, o) => {
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
}, Sw = window.Vue.toDisplayString, fr = window.Vue.openBlock, wr = window.Vue.createElementBlock, yw = window.Vue.createCommentVNode, Nu = window.Vue.createElementVNode, xw = window.Vue.normalizeClass, bw = ["width", "height", "aria-labelledby"], Cw = ["id"], kw = ["fill"], $w = ["d"];
function Vw(e, t, n, s, o, a) {
  return fr(), wr("span", {
    class: xw(["mw-ui-icon notranslate", a.classes])
  }, [
    (fr(), wr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (fr(), wr("title", {
        key: 0,
        id: n.iconName
      }, Sw(n.iconName), 9, Cw)) : yw("", !0),
      Nu("g", { fill: n.iconColor }, [
        Nu("path", { d: a.iconImagePath }, null, 8, $w)
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
}, Lw = window.Vue.renderSlot, Aw = window.Vue.resolveComponent, Mu = window.Vue.normalizeClass, $a = window.Vue.openBlock, vr = window.Vue.createBlock, _r = window.Vue.createCommentVNode, Tw = window.Vue.toDisplayString, Dw = window.Vue.createElementBlock, Pw = window.Vue.toHandlerKey, Bw = window.Vue.withModifiers, Fw = window.Vue.mergeProps, Nw = window.Vue.createElementVNode, Mw = window.Vue.resolveDynamicComponent, Uw = window.Vue.withCtx, Iw = { class: "mw-ui-button__content" }, Rw = ["textContent"];
function zw(e, t, n, s, o, a) {
  const r = Aw("mw-icon");
  return $a(), vr(Mw(a.component), {
    class: Mu(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Uw(() => [
      Lw(e.$slots, "default", {}, () => [
        Nw("span", Iw, [
          n.icon ? ($a(), vr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Mu(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : _r("", !0),
          !a.isIcon && n.label ? ($a(), Dw("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Tw(n.label)
          }, null, 8, Rw)) : _r("", !0),
          n.indicator ? ($a(), vr(r, Fw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Pw(a.indicatorClickEvent)]: t[0] || (t[0] = Bw((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : _r("", !0)
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
}, jw = window.Vue.renderList, Hw = window.Vue.Fragment, Sr = window.Vue.openBlock, Uu = window.Vue.createElementBlock, qw = window.Vue.resolveComponent, Gw = window.Vue.withModifiers, Xw = window.Vue.mergeProps, Ww = window.Vue.createBlock, Kw = { class: "row mw-ui-button-group ma-0 pa-0" };
function Yw(e, t, n, s, o, a) {
  const r = qw("mw-button");
  return Sr(), Uu("div", Kw, [
    (Sr(!0), Uu(Hw, null, jw(n.items, (l) => (Sr(), Ww(r, Xw({
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
}, Iu = window.Vue.renderSlot, Jw = window.Vue.toDisplayString, Ru = window.Vue.openBlock, zu = window.Vue.createElementBlock, Zw = window.Vue.createCommentVNode, e0 = window.Vue.createElementVNode, t0 = { class: "mw-ui-card" }, n0 = ["textContent"], s0 = { class: "mw-ui-card__content" };
function o0(e, t, n, s, o, a) {
  return Ru(), zu("div", t0, [
    Iu(e.$slots, "header", {}, () => [
      n.title ? (Ru(), zu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Jw(n.title)
      }, null, 8, n0)) : Zw("", !0)
    ]),
    e0("div", s0, [
      Iu(e.$slots, "default")
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
const U = /* @__PURE__ */ de(v0, [["render", k0]]), Mc = ["mobile", "tablet", "desktop", "desktop-wide"], $0 = Mc.reduce(
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
      for (let n = 0; n < Mc.length; n++) {
        let s = Mc[n], o = this.$props[s];
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
}, E0 = window.Vue.renderSlot, L0 = window.Vue.resolveDynamicComponent, A0 = window.Vue.normalizeClass, T0 = window.Vue.withCtx, D0 = window.Vue.openBlock, P0 = window.Vue.createBlock;
function B0(e, t, n, s, o, a) {
  return D0(), P0(L0(n.tag), {
    class: A0(a.classes)
  }, {
    default: T0(() => [
      E0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ de(V0, [["render", B0]]), F0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", N0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Ki = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", M0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, U0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", gh = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", I0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", R0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Yi = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", z0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", O0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", j0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Ou = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", H0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", ph = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", q0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", G0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", X0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", W0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", K0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Uc = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, Y0 = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, Q0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, mh = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", J0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const yr = window.Vue.computed, Z0 = window.Vue.watch, ev = window.Vue.ref, tv = window.Vue.nextTick, nv = {
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
    const n = ev(null), s = yr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), o = yr(
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
    const l = yr(() => ({
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
}, ju = window.Vue.normalizeClass, xr = window.Vue.createElementVNode, br = window.Vue.renderSlot, Va = window.Vue.resolveComponent, io = window.Vue.createVNode, Cr = window.Vue.withCtx, Hu = window.Vue.createCommentVNode, sv = window.Vue.withKeys, qu = window.Vue.openBlock, ov = window.Vue.createElementBlock, av = window.Vue.Transition, iv = window.Vue.normalizeStyle, rv = window.Vue.createBlock, lv = { class: "mw-ui-dialog__shell items-stretch" }, cv = { class: "mw-ui-dialog__body" };
function uv(e, t, n, s, o, a) {
  const r = Va("mw-col"), l = Va("mw-button"), d = Va("mw-row"), u = Va("mw-divider");
  return qu(), rv(av, {
    name: "mw-ui-animation-fade",
    style: iv(s.cssVars)
  }, {
    default: Cr(() => [
      n.value ? (qu(), ov("div", {
        key: 0,
        ref: "root",
        class: ju(["mw-ui-dialog", s.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = sv((i) => n.closeOnEscapeKey && s.close(), ["esc"]))
      }, [
        xr("div", {
          class: ju(["mw-ui-dialog__overlay", s.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && s.close())
        }, null, 2),
        xr("div", lv, [
          n.header ? br(e.$slots, "header", { key: 0 }, () => [
            io(d, { class: "mw-ui-dialog__header" }, {
              default: Cr(() => [
                io(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                io(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Cr(() => [
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
          ]) : Hu("", !0),
          xr("div", cv, [
            br(e.$slots, "default")
          ]),
          br(e.$slots, "footer")
        ])
      ], 34)) : Hu("", !0)
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
}, Gu = window.Vue.renderSlot, gv = window.Vue.resolveComponent, Ea = window.Vue.openBlock, kr = window.Vue.createBlock, Xu = window.Vue.createCommentVNode, pv = window.Vue.resolveDynamicComponent, mv = window.Vue.toDisplayString, hv = window.Vue.mergeProps, fv = window.Vue.withModifiers, wv = window.Vue.createElementVNode, vv = window.Vue.normalizeClass, _v = window.Vue.createElementBlock, Sv = { class: "mw-ui-input__content" };
function yv(e, t, n, s, o, a) {
  const r = gv("mw-icon");
  return Ea(), _v("div", {
    class: vv(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    wv("div", Sv, [
      Gu(e.$slots, "icon", {}, () => [
        n.icon ? (Ea(), kr(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Xu("", !0)
      ]),
      (Ea(), kr(pv(n.type === "textarea" ? n.type : "input"), hv({
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
      Gu(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ea(), kr(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = fv((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Xu("", !0)
      ])
    ])
  ], 2);
}
const Ic = /* @__PURE__ */ de(dv, [["render", yv]]);
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
const Av = window.Vue.computed, Tv = {
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
      default: mh
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
    const n = Av(() => {
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
}, Wu = window.Vue.normalizeStyle, Ku = window.Vue.openBlock, Dv = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Pv = window.Vue.resolveComponent, Bv = window.Vue.createBlock;
function Fv(e, t, n, s, o, a) {
  const r = Pv("mw-ui-icon");
  return n.thumbnail ? (Ku(), Dv("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Wu(s.style)
  }, null, 4)) : (Ku(), Bv(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Wu(s.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Jc = /* @__PURE__ */ de(Tv, [["render", Fv]]);
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
}, Yu = window.Vue.normalizeClass, Qu = window.Vue.normalizeStyle, Mv = window.Vue.createElementVNode, Uv = window.Vue.openBlock, Iv = window.Vue.createElementBlock, Rv = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function zv(e, t, n, s, o, a) {
  return Uv(), Iv("div", {
    class: Yu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Qu(a.containerStyles)
  }, [
    Mv("div", {
      class: Yu(["mw-progress-bar__bar", a.barClass]),
      style: Qu(a.barStyles)
    }, null, 6)
  ], 14, Rv);
}
const hh = /* @__PURE__ */ de(Nv, [["render", zv]]), Ov = (e, t, n, s) => (o) => {
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
) }), Hv = window.Vue.ref, Ju = window.Vue.computed, qv = (e, t, n, s) => {
  const o = Hv(0), a = Ju(
    () => t.value > e.value
  ), r = Ju(
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
const La = window.Vue.ref, Gv = window.Vue.onMounted, Zu = window.Vue.computed, Xv = window.Vue.nextTick, Wv = {
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
    const t = La(!0), n = La(null), s = Zu(
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
    } = qv(s, o, n, t), c = () => u(d.value + 1), g = La(null), p = Zu(() => ({
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
    return Gv(() => b(this, null, function* () {
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
}, Kv = window.Vue.renderSlot, Yv = window.Vue.normalizeClass, Aa = window.Vue.createElementVNode, Qv = window.Vue.resolveComponent, Jv = window.Vue.createVNode, $r = window.Vue.openBlock, Zv = window.Vue.createBlock, ed = window.Vue.createCommentVNode, td = window.Vue.createElementBlock, e1 = window.Vue.normalizeStyle, t1 = { class: "mw-ui-expandable-content__container" }, n1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, s1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function o1(e, t, n, s, o, a) {
  const r = Qv("mw-button");
  return $r(), td("div", {
    class: "mw-ui-expandable-content",
    style: e1(s.cssVars)
  }, [
    Aa("div", t1, [
      Aa("div", {
        ref: "contentRef",
        class: Yv(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": s.isCollapsed
        }])
      }, [
        Kv(e.$slots, "default")
      ], 2),
      n.scroll && s.scrollable ? ($r(), td("div", n1, [
        Jv(r, {
          type: "icon",
          icon: s.mwIconCollapse,
          disabled: s.isCollapsed && s.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: s.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        s.isCollapsed ? ($r(), Zv(r, {
          key: 0,
          type: "icon",
          icon: s.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: s.isScrolledToEnd,
          onClick: s.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : ed("", !0)
      ])) : ed("", !0)
    ]),
    Aa("div", s1, [
      Aa("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => s.onDragButtonClicked && s.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const a1 = /* @__PURE__ */ de(Wv, [["render", o1]]);
const Ta = window.Vue.computed, i1 = {
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
    const t = Ta(() => e.size / 2 * 0.9), n = Ta(() => Math.PI * (t.value * 2)), s = Ta(
      () => (100 - e.percentage) / 100 * n.value
    ), o = Ta(() => ({
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
}, nd = window.Vue.createElementVNode, sd = window.Vue.normalizeStyle, r1 = window.Vue.openBlock, l1 = window.Vue.createElementBlock, c1 = ["width", "height", "viewport"], u1 = ["r", "cx", "cy", "stroke-dasharray"], d1 = ["r", "cx", "cy", "stroke-dasharray"];
function g1(e, t, n, s, o, a) {
  return r1(), l1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: sd(s.cssVars)
  }, [
    nd("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: s.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": s.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, u1),
    nd("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: s.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": s.dashArray,
      "stroke-dashoffset": "0",
      style: sd({ strokeDashoffset: `${s.strokeDashOffset}px` })
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
}, Vr = {
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
      for (let o in Vr)
        Vr.hasOwnProperty(o) && (t.value[o] = Vr[o]());
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
}), fh = { assertUser: v1 };
const _1 = window.Vue.resolveDirective, ro = window.Vue.createElementVNode, od = window.Vue.withDirectives, S1 = window.Vue.toDisplayString, y1 = window.Vue.unref, ad = window.Vue.withCtx, x1 = window.Vue.openBlock, b1 = window.Vue.createBlock, C1 = window.Vue.createCommentVNode, k1 = { class: "pa-4 sx-login-dialog__header" }, $1 = { class: "sx-login-dialog__body px-6 pb-4" }, V1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, E1 = ["href"], L1 = window.Vue.computed, A1 = window.Vue.ref, T1 = window.Vuex.useStore, D1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = T1(), n = L1(() => t.state.application.isLoginDialogOn), s = () => t.commit("application/setIsLoginDialogOn", !1), o = A1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = _1("i18n");
      return n.value ? (x1(), b1(y1(bt), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: s
      }, {
        header: ad(() => [
          ro("div", k1, [
            od(ro("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: ad(() => [
          od(ro("div", $1, null, 512), [
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
class Zc {
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
const id = (e) => {
  var n;
  const t = qi(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, qi = (e) => {
  var n, s, o;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((o = (s = t == null ? void 0 : t.parts) == null ? void 0 : s[0]) == null ? void 0 : o.template) || null;
}, us = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), wh = (e) => {
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
}, vh = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, _h = (e) => {
  const t = vh(e);
  return t == null ? void 0 : t.targetExists;
};
class Er {
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
    o && _h(o) && (this.blockTemplateAdaptationInfo[t] = vh(o));
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
    return this.isBlockTemplate ? id(this.transclusionNode) : null;
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
    return n && id(n) || "";
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
      new Er({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Er({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && o.push(
      new Er({
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
const eu = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), M1 = eu - 10, U1 = [
  { status: "failure", value: 100 - eu },
  { status: "warning", value: 100 - M1 },
  { status: "success", value: 100 }
], Sh = (e, t, n) => {
  const s = rd(e).textContent, o = rd(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(o, s, n);
  return Math.ceil(a);
}, I1 = (e) => U1.find((t) => e <= t.value).status, R1 = (e, t) => Sh(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), z1 = () => (100 - eu) / 100, rd = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, tn = {
  calculateScore: Sh,
  getScoreStatus: I1,
  getMTScoreForPageSection: R1,
  getMtModificationThreshold: z1
}, Ba = "__LEAD_SECTION__";
class Rc {
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
class Qi extends Zc {
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
    return Rc.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Rc.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const nn = "previous-edits", bn = "popular", We = "topic", ke = "geography", ee = "collections", Qe = "automatic", yt = "seed", ld = window.Vue.ref, { topics: O1, regions: j1 } = mw.loader.require(
  "ext.cx.articlefilters"
), Fa = {
  type: Qe,
  id: nn
}, tu = () => {
  const e = ld(
    O1.flatMap((l) => l.topics).map((l) => l.topicId.toLowerCase())
  ), t = ld(!1), n = (l, d) => e.value.includes(d) ? { type: We, id: d } : null, s = (l, d) => j1.some(
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
var G1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, yh = { exports: {} };
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
            function C(L, O) {
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
            const E = y(/^\s+/), S = x("|"), F = x(":"), V = x("\\"), T = y(/^./), R = x("$"), K = y(/^\d+/), ie = x('"'), te = x("'"), j = y(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), W = y(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), se = v([re, y(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function re() {
              const L = _([V, T]);
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
              const L = _([S, C(0, vs)]);
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
            const A = v([function() {
              const L = _([v([Q, w, B]), C(0, M)]);
              return L === null ? null : L[0].concat(L[1]);
            }, function() {
              const L = _([Z, C(0, M)]);
              return L === null ? null : [L[0]].concat(L[1]);
            }]), N = x("{{"), G = x("}}"), pe = x("[["), H = x("]]"), z = x("["), oe = x("]");
            function nt() {
              const L = _([N, A, G]);
              return L === null ? null : L[1];
            }
            const Ce = v([function() {
              const L = _([C(1, vs), S, C(1, ws)]);
              return L === null ? null : [["CONCAT"].concat(L[0]), ["CONCAT"].concat(L[2])];
            }, function() {
              const L = _([C(1, vs)]);
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
              const O = _([z, C(1, gr), E, C(1, ws), oe]);
              return O !== null && (L = ["EXTLINK", O[1].length === 1 ? O[1][0] : ["CONCAT"].concat(O[1]), ["CONCAT"].concat(O[3])]), L;
            }
            const to = y(/^[A-Za-z]+/);
            function ur() {
              const L = y(/^[^"]*/), O = _([ie, L, ie]);
              return O === null ? null : O[1];
            }
            function no() {
              const L = y(/^[^']*/), O = _([te, L, te]);
              return O === null ? null : O[1];
            }
            function so() {
              const L = y(/^\s*=\s*/), O = _([E, to, L, v([ur, no])]);
              return O === null ? null : [O[1], O[3]];
            }
            function dr() {
              const L = C(0, so)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], L);
            }
            const gr = v([nt, De, xa, fs, function() {
              const L = C(1, se)();
              return L === null ? null : L.join("");
            }]), ws = v([nt, De, xa, fs, function() {
              let L = null;
              const O = f, Ne = x("<"), q = y(/^\/?/), ze = y(/^\s*>/), sn = _([Ne, to, dr, q, ze]);
              if (sn === null)
                return null;
              const mt = f, oo = sn[1], ao = C(0, ws)(), lw = f, Du = _([x("</"), to, ze]);
              if (Du === null)
                return ["CONCAT", m.slice(O, mt)].concat(ao);
              const cw = f, uw = Du[1], Pu = sn[2];
              if (function(Yn, Ca, pr, mr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Yn = Yn.toLowerCase()) !== (Ca = Ca.toLowerCase()) || mr.allowedHtmlElements.indexOf(Yn) === -1)
                  return !1;
                const dw = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let ka = 0, gw = pr.length; ka < gw; ka += 2) {
                  const hr = pr[ka];
                  if (mr.allowedHtmlCommonAttributes.indexOf(hr) === -1 && (mr.allowedHtmlAttributesByElement[Yn] || []).indexOf(hr) === -1 || hr === "style" && pr[ka + 1].search(dw) !== -1)
                    return !1;
                }
                return !0;
              }(oo, uw, Pu.slice(1)))
                L = ["HTMLELEMENT", oo, Pu].concat(ao);
              else {
                const Yn = (Ca) => Ca.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                L = ["CONCAT", Yn(m.slice(O, mt))].concat(ao, Yn(m.slice(lw, cw)));
              }
              return L;
            }, function() {
              const L = C(1, Fe)();
              return L === null ? null : L.join("");
            }]), vs = v([nt, De, function() {
              const L = C(1, $e)();
              return L === null ? null : L.join("");
            }]), ba = function() {
              const L = C(0, ws)();
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
})(yh);
var X1 = yh.exports;
const cd = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, xh = Symbol("banana-context");
function ge() {
  const e = H1(xh);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function W1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = q1(new X1(e.locale, e));
  return {
    install: (n) => {
      n.provide(xh, t), n.config.globalProperties.$i18n = (s, o) => (o = o || [], Array.isArray(o) || (o = [o]), t.i18n(s, ...o)), n.provide("setLocale", (s) => {
        t.setLocale(s);
      }), n.directive("i18n", (s, o) => {
        const { msg: a, params: r } = cd(o);
        o.modifiers.html ? s.innerHTML = t.i18n(a, ...r) : s.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (s, o) => {
        const { msg: a, params: r } = cd(o);
        s.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Cn = window.Vue.ref, K1 = window.Vue.computed, Ji = Cn(null), Zi = Cn(null), er = Cn(null), ha = Cn(null), nu = Cn(null), tr = Cn(null), bh = Cn(null), Ch = Cn(null), su = Cn(null), { validateFilters: Y1, filtersValidatorError: Q1 } = tu(), kh = {
  from: Ji,
  to: Zi,
  section: ha,
  draft: nu,
  page: er,
  revision: tr,
  "active-list": su
}, J1 = K1(() => ({
  type: bh.value,
  id: Ch.value
})), $h = (e, t) => {
  bh.value = e, Ch.value = t, Gi("filter-type", e), t && Gi("filter-id", t);
}, Z1 = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Qi && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const s in n) {
    const o = n[s];
    t.set(s, o), kh[s].value = o;
  }
  t.delete("title"), fa(Object.fromEntries(t));
}, ou = (e, t) => {
  kh[e].value = t, Gi(e, t);
}, e_ = (e) => {
  ou("section", e);
}, t_ = (e) => {
  ou("page", e);
}, n_ = (e) => {
  ou("active-list", e);
}, fa = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    P1(`Special:ContentTranslation${t}`, e)
  );
}, s_ = () => {
  const e = ge(), t = new URLSearchParams(location.search);
  er.value = t.get("page"), Ji.value = t.get("from"), Zi.value = t.get("to"), ha.value = t.get("section"), tr.value = t.get("revision"), su.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = Y1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  $h(n.type, n.id), Q1.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
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
  er.value = null, ha.value = null, nu.value = null, tr.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), fa(Object.fromEntries(e));
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
  draftURLParameter: nu,
  revisionURLParameter: tr,
  setPageURLParam: t_,
  currentSuggestionFilters: J1,
  setFilterURLParams: $h,
  activeDashboardTabParameter: su,
  setActiveDashboardTabParameter: n_
}), c_ = () => Y.getLanguagePairs();
function u_(e, t) {
  return b(this, null, function* () {
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
function d_() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function g_(e, t, n, s) {
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
const nr = {
  fetchSupportedLanguageCodes: c_,
  fetchSupportedMTProviders: u_,
  fetchCXServerToken: d_,
  addWikibaseLink: g_
}, au = window.Vue.ref, ud = au([]), dd = au([]), gd = au(!1);
function wa() {
  return {
    fetchSupportedLanguageCodes: () => b(this, null, function* () {
      if (!gd.value) {
        gd.value = !0;
        const t = yield nr.fetchSupportedLanguageCodes();
        ud.value = t.sourceLanguages, dd.value = t.targetLanguages;
      }
    }),
    supportedSourceLanguageCodes: ud,
    supportedTargetLanguageCodes: dd
  };
}
const p_ = {
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
}, m_ = {
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
}, h_ = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], f_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, w_ = {
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
}, v_ = {
  languages: p_,
  scriptgroups: m_,
  rtlscripts: h_,
  regiongroups: f_,
  territories: w_
};
var Re = v_;
function va(e) {
  return !!Re.languages[e];
}
function Kn(e) {
  return va(e) && Re.languages[e].length === 1 ? Re.languages[e][0] : !1;
}
function __() {
  return Re.languages;
}
function _a(e) {
  var t = Kn(e);
  return t ? _a(t) : va(e) ? Re.languages[e][0] : "Zyyy";
}
function iu(e) {
  var t = Kn(e);
  return t ? iu(t) : va(e) && Re.languages[e][1] || "UNKNOWN";
}
function da(e) {
  var t = Kn(e);
  return t ? da(t) : va(e) && Re.languages[e][2] || e;
}
function S_() {
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
function y_(e) {
  return Vh([e]);
}
function Eh(e) {
  var t;
  for (t in Re.scriptgroups)
    if (Re.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function ru(e) {
  return Eh(_a(e));
}
function Lh(e) {
  var t = {}, n, s, o, a;
  for (s = 0; s < e.length; s++)
    n = e[s], o = Kn(n) || n, a = ru(o), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Ah(e) {
  var t, n, s, o = {};
  for (t in Re.languages)
    if (!Kn(t)) {
      for (n = 0; n < e.length; n++)
        if (iu(t).includes(e[n])) {
          s = ru(t), o[s] === void 0 && (o[s] = []), o[s].push(t);
          break;
        }
    }
  return o;
}
function x_(e) {
  return Ah([e]);
}
function b_(e) {
  var t, n, s, o = [];
  for (t = Lh(e), n = Object.keys(t).sort(), s = 0; s < n.length; s++)
    o = o.concat(t[n[s]]);
  return o;
}
function C_(e, t) {
  var n = da(e) || e, s = da(t) || t;
  return n.toLowerCase() < s.toLowerCase() ? -1 : 1;
}
function Th(e) {
  return Re.rtlscripts.includes(_a(e));
}
function k_(e) {
  return Th(e) ? "rtl" : "ltr";
}
function $_(e) {
  return Re.territories[e] || [];
}
function V_(e, t) {
  t.target ? Re.languages[e] = [t.target] : Re.languages[e] = [t.script, t.regions, t.autonym];
}
var I = {
  addLanguage: V_,
  getAutonym: da,
  getAutonyms: S_,
  getDir: k_,
  getGroupOfScript: Eh,
  getLanguages: __,
  getLanguagesByScriptGroup: Lh,
  getLanguagesByScriptGroupInRegion: x_,
  getLanguagesByScriptGroupInRegions: Ah,
  getLanguagesInScript: y_,
  getLanguagesInScripts: Vh,
  getLanguagesInTerritory: $_,
  getRegions: iu,
  getScript: _a,
  getScriptGroupOfLanguage: ru,
  isKnown: va,
  isRedirect: Kn,
  isRtl: Th,
  sortByScriptGroup: b_,
  sortByAutonym: C_
};
const _s = window.Vue.computed;
function Ae(e) {
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
class E_ {
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
function L_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const A_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), L_();
  const s = new ve.init.mw.MobileArticleTarget(n), o = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = s.createSurface(o);
  return a.setReadOnly(!0), s.surfaces.push(a), s.setSurface(a), a.initialize(), a;
}, T_ = (e, t) => {
  let n, s;
  return t ? (n = A_(e), s = n.$element.find(
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
}, D_ = (e, t) => {
  const n = Array.from(
    T_(e, t)
  );
  return P_(n).map(
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
          sentences: B_(i),
          node: i
        })
      );
      return new Rc({ id: d, subSections: u, isLeadSection: l });
    }
  );
}, P_ = (e) => {
  const t = e.reduce((n, s) => {
    const o = s.dataset.mwSectionNumber;
    return n[o] = n[o] ? [...n[o], s] : [s], n;
  }, {});
  return Object.values(t);
}, B_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new qn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Dh = {
  convertSegmentedContentToPageSections: D_
}, lu = 120, F_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: lu,
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
}, N_ = (e, t) => {
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
    return l ? Object.freeze(new E_(l, r)) : null;
  });
}, M_ = (e, t, n) => {
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
}, U_ = (e, t, n, s = null) => {
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
  ), a = I_(
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
}, I_ = (e, t, n, s = null) => {
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
}, R_ = (e) => {
  const t = B1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: lu,
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
}, z_ = (e, t) => {
  const s = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: lu,
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
  fetchPages: F_,
  fetchLanguageTitles: N_,
  fetchPageContent: U_,
  fetchNearbyPages: R_,
  searchPagesByTitlePrefix: z_,
  fetchLanguageLinksForLanguage: M_
}, O_ = window.Vuex.useStore, Ks = () => {
  const e = O_();
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
}, j_ = window.Vuex.useStore, cu = () => {
  const e = j_(), {
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
], H_ = [
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
], q_ = [
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
], G_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], X_ = [
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
], W_ = {
  en: Ph,
  es: H_,
  bn: q_,
  fr: G_,
  de: X_
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
class uu {
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
    }), this.collection = new uu(u);
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
    }), this.collection = new uu(p);
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
}, K_ = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits", Y_ = () => b(void 0, null, function* () {
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
}, Ih = (e, t) => !e || e < 0 ? ut.unknown : e < t.easy ? ut.stub : e < t.medium ? ut.easy : e < t.hard ? ut.medium : ut.hard, Rh = (e) => Ih(e, Mh), zh = (e) => Ih(e, Uh), Q_ = (e) => {
  if (!e)
    return !1;
  const t = Rh(e);
  return t === ut.stub || t === ut.easy;
}, Oh = (e) => e ? zh(e) === ut.easy : !1, J_ = Ph, Z_ = (e, t) => b(void 0, null, function* () {
  if (!(yield Y_()))
    return;
  let s;
  e ? e === "/sections" && (s = Uh) : (s = Mh, xn || (t.lead_section = !0)), s && (t.min_size = s[ut.easy], t.max_size = s[ut.medium] - 1);
}), Rt = (n) => b(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
  let s = mw.config.get("wgRecommendToolAPIURL");
  yield Z_(e, t), e && (s += e);
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
function eS() {
  return b(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Rt({ urlPostfix: t, urlParams: e })) || [], s = {};
      for (const o in n)
        s[o] = n[o].map(
          (a) => new uu(a)
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
function tS(e, t, n = null, s = 24) {
  return b(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: s
    };
    return n && (o.seed = n), ((yield Rt({ urlParams: o })) || []).map(
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
const nS = (e, t) => b(void 0, null, function* () {
  return ((yield Rt({ urlParams: {
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
}), sS = (e, t) => b(void 0, null, function* () {
  const o = (yield Rt({ urlParams: {
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
}), oS = (e, t, n = null) => b(void 0, null, function* () {
  const s = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (s.seed = n), ((yield Rt({ urlParams: s })) || []).map(
    (a) => new Bh({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), aS = (e, t, n = null) => b(void 0, null, function* () {
  const s = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (s.seed = n);
  const a = (yield Rt({ urlPostfix: "/sections", urlParams: s })) || [];
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
function iS(e, t, n) {
  return b(this, null, function* () {
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
function rS(e, t, n = null) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: 24
    };
    n && (s.seed = n);
    const a = (yield Rt({ urlPostfix: "/sections", urlParams: s })) || [];
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
function lS(e, t, n, s = 24) {
  return b(this, null, function* () {
    const o = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: s
    };
    return ((yield Rt({ urlParams: o })) || []).map(
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
  return b(this, null, function* () {
    const o = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: s
    }, r = (yield Rt({ urlPostfix: "/sections", urlParams: o })) || [];
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
function uS(e, t, n, s = 24) {
  return b(this, null, function* () {
    const o = {
      source: e,
      target: t,
      country: n.join("|"),
      count: s
    };
    return ((yield Rt({ urlParams: o })) || []).map(
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
function dS(e, t, n, s = 24) {
  return b(this, null, function* () {
    const o = {
      source: e,
      target: t,
      country: n.join("|"),
      count: s
    }, r = (yield Rt({ urlPostfix: "/sections", urlParams: o })) || [];
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
function gS(e) {
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
    }, n = Y.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function pS(e, t) {
  return b(this, null, function* () {
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
function mS(e) {
  const t = J_.map((s) => encodeURIComponent(s)).join("|"), n = Y.getCXServerUrl(
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
const hS = (e, t, n) => {
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
}, fS = (e) => {
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
}, wS = () => {
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
  fetchFavorites: wS,
  fetchPageSuggestions: tS,
  fetchSectionSuggestion: iS,
  fetchSectionSuggestions: rS,
  fetchAppendixTargetSectionTitles: mS,
  fetchArticleSections: pS,
  markFavorite: hS,
  unmarkFavorite: fS,
  fetchUserEdits: gS,
  fetchMostPopularPageSuggestions: nS,
  fetchMostPopularSectionSuggestions: sS,
  fetchPageSuggestionsByTopics: lS,
  fetchSectionSuggestionsByTopics: cS,
  fetchPageSuggestionsByCountries: uS,
  fetchSectionSuggestionsByCountries: dS,
  fetchPageCollectionGroups: eS,
  fetchPageSuggestionsByCollections: oS,
  fetchSectionSuggestionsByCollections: aS
}, vS = window.Vuex.useStore, Ys = () => {
  const e = vS(), { sourceLanguage: t, targetLanguage: n } = Ae(e), s = (l) => {
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
class _S {
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
const SS = window.Vuex.useStore, du = window.Vue.ref, yS = du([]), xS = du([]);
let Lr = !1, Ar = !1, pd = !1;
const Ma = du([]);
let lo = null;
const Tr = {
  page: yS,
  section: xS
}, jh = () => {
  const e = SS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), s = () => b(void 0, null, function* () {
    Ar || (Ma.value = yield me.fetchUserEdits(t.value).then((u) => (Ar = !0, u)));
  }), o = () => b(void 0, null, function* () {
    let u = e.getters["translator/getTranslationsByStatus"]("published");
    if (u = u.filter(
      (i) => i.sourceLanguage === t.value
    ), u.length && !Lr)
      return Lr = !0, u.map(
        (i) => i.sourceTitle
      );
    if (Lr = !0, !Ar && (yield s(), Ma.value.length > 0))
      return Ma.value;
    if (!pd) {
      const i = yield me.fetchUserEdits(n.value).then((c) => (pd = !0, c));
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
    return i || (i = new _S({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), Tr[u].value.push(i)), i;
  }, r = () => b(void 0, null, function* () {
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
    getSuggestionSeed: (u) => b(void 0, null, function* () {
      let i = a(u);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: s,
    previousEditsInSource: Ma
  };
}, bS = 5;
function gs(e) {
  return b(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < bS);
  });
}
const CS = window.Vuex.useStore, kS = () => {
  const e = CS(), {
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
    fetchPageSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const c = [];
      return yield gs(() => b(void 0, null, function* () {
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
    fetchSectionSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const c = [];
      return yield gs(() => b(void 0, null, function* () {
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
}, $S = window.Vuex.useStore, VS = () => {
  const e = $S(), {
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
  return { fetchSectionSuggestionsPopular: (u) => b(void 0, null, function* () {
    const i = [];
    return yield gs(() => b(void 0, null, function* () {
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
  }), fetchPageSuggestionsPopular: (u) => b(void 0, null, function* () {
    const i = [];
    return yield gs(() => b(void 0, null, function* () {
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
}, Hh = window.Vue.ref, co = "ungrouped", md = Hh({}), hd = Hh(!1), gu = () => ({
  fetchPageCollectionGroups: () => b(void 0, null, function* () {
    try {
      const t = yield me.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((s, o) => s === co ? 1 : o === co ? -1 : s.localeCompare(o)).map((s) => [s, t[s]])
      );
      n[co] && (n[co] = n[co].sort(
        (s, o) => s.name.localeCompare(o.name)
      )), md.value = n, hd.value = !0;
    } catch (t) {
      mw.log.error("Failed to fetch page collections", t);
    }
  }),
  pageCollectionGroupsFetched: hd,
  pageCollectionGroups: md
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
const ES = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', LS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', AS = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', TS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', DS = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', PS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', BS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', FS = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', NS = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', MS = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', US = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', IS = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', RS = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', zS = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', OS = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', jS = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', HS = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', qS = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', GS = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', qh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', XS = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', WS = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', KS = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', YS = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', QS = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', JS = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', ZS = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', ey = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', ty = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', ny = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', sy = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', oy = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', ay = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', iy = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', ry = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Gh = ES, ly = LS, Xh = {
  ltr: AS,
  shouldFlip: !0
}, Wh = {
  ltr: TS,
  shouldFlip: !0
}, pu = {
  ltr: DS,
  shouldFlip: !0
}, Kh = PS, Yh = BS, Qh = FS, cy = NS, uy = MS, Qs = US, dy = IS, mu = RS, hu = zS, zc = OS, gy = jS, py = {
  ltr: HS,
  shouldFlip: !0
}, my = {
  ltr: qS,
  shouldFlip: !0
}, hy = GS, fy = {
  langCodeMap: {
    ar: qh
  },
  default: XS
}, wy = {
  langCodeMap: {
    ar: qh
  },
  default: WS
}, Jh = KS, sr = {
  ltr: YS,
  shouldFlip: !0
}, vy = QS, _y = JS, Sa = {
  ltr: ZS,
  shouldFlip: !0
}, fu = {
  ltr: ey,
  shouldFlip: !0
}, Sy = {
  ltr: ty,
  shouldFlip: !0
}, Zh = ny, yy = sy, Oc = oy, xy = ay, by = iy, ef = ry, Cy = {
  [nn]: ef,
  [bn]: hy,
  [ee]: pu
}, ky = {
  [ee]: my,
  [ke]: vy
};
class It {
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
    return Cy[this.provider] || null;
  }
  get expandableIcon() {
    return ky[this.provider] || this.icon;
  }
}
const uo = window.Vue.computed, { topics: fd, regions: wd } = mw.loader.require(
  "ext.cx.articlefilters"
), $y = (e) => new ra({
  id: e.groupId,
  label: e.label,
  type: We,
  filters: e.topics.map(
    (t) => new It({
      id: t.topicId,
      label: t.label,
      type: We
    })
  )
}), or = () => {
  const e = ge(), { currentSuggestionFilters: t, setFilterURLParams: n } = P(), { validateFilters: s, filtersValidatorError: o } = tu(), a = new It({
    id: nn,
    type: Qe,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), r = new It({
    id: bn,
    type: Qe,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), l = new It({
    id: ee,
    type: Qe,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: d, pageCollectionGroupsFetched: u } = gu(), i = uo(() => {
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
    for (const T in S) {
      const R = S[T].map(
        (ie) => new It({
          id: ie.name,
          label: ie.name,
          type: ee
        })
      ), K = new It({
        id: T,
        label: T,
        type: ee,
        subFilters: R
      });
      F.push(K);
    }
    const V = (d.value.ungrouped || []).map(
      (T) => new It({
        id: T.name,
        label: T.name,
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
    filters: wd.map(
      (S) => new It({
        id: S.id,
        label: S.label,
        type: ke,
        subFilters: S.countries.map(
          (F) => new It({
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
      ...fd.map($y),
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
  }, _ = () => t.value.type === yt ? new It({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : m.value.flatMap((S) => S.filters).flatMap((S) => [S, ...S.subFilters || []]).find(C), C = (S) => t.value.id === S.id;
  return {
    allFilters: m,
    getFiltersSummary: f,
    selectFilter: v,
    isFilterSelected: C,
    getArticleTopics: (S) => {
      const V = fd.flatMap((T) => T.topics).find((T) => T.topicId === S);
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
      const F = wd.find((V) => V.id === S);
      return F ? F.countries.map((V) => V.id) : [S];
    }
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
  } = Ys(), { getArticleTopics: l } = or();
  return {
    fetchPageSuggestionsByTopics: (i) => b(void 0, null, function* () {
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
    fetchSectionSuggestionsByTopics: (i) => b(void 0, null, function* () {
      const c = s.value.id, g = {
        id: c,
        type: We
      }, p = l(c), m = [];
      return yield gs(() => b(void 0, null, function* () {
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
}, Ly = window.Vuex.useStore, Ay = () => {
  const e = Ly(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys(), { getCountries: l } = or();
  return {
    fetchPageSuggestionsByCountries: (i) => b(void 0, null, function* () {
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
    fetchSectionSuggestionsByCountries: (i) => b(void 0, null, function* () {
      const c = [];
      return yield gs(() => b(void 0, null, function* () {
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
}, Ty = window.Vuex.useStore, Dy = window.Vue.computed, Py = () => {
  const e = Ty(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), o = Dy(() => {
    var i;
    return ((i = s.value) == null ? void 0 : i.type) !== ee ? null : s.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: l
  } = Ys();
  return {
    fetchSectionSuggestionsByCollections: () => b(void 0, null, function* () {
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
    fetchPageSuggestionsByCollections: () => b(void 0, null, function* () {
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
}, By = window.Vuex.useStore, Fy = () => {
  const e = By(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys();
  return {
    fetchPageSuggestionsBySeed: (u) => b(void 0, null, function* () {
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
    fetchSectionSuggestionsBySeed: (u) => b(void 0, null, function* () {
      const i = [], c = s.value.id;
      return yield gs(() => b(void 0, null, function* () {
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
}, Ny = () => {
  const { currentSuggestionFilters: e } = P(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = kS(), { fetchPageSuggestionsPopular: s, fetchSectionSuggestionsPopular: o } = VS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = Ey(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: d
  } = Ay(), {
    fetchPageSuggestionsByCollections: u,
    fetchSectionSuggestionsByCollections: i
  } = Py(), { fetchPageSuggestionsBySeed: c, fetchSectionSuggestionsBySeed: g } = Fy(), p = {
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
}, My = window.Vuex.useStore, wu = () => {
  const e = My(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = cu(), { sourceLanguageURLParameter: s } = P(), o = Ks(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: d
  } = Ny(), u = (g) => {
    try {
      const p = g.map((m) => m.sourceTitle);
      if (p.length)
        return o(s.value, p);
    } catch (p) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const g = a(), m = yield d()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), u(m), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const g = r(), m = yield l()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), u(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, Uy = window.Vuex.useStore, tf = () => {
  const e = Uy();
  return (t) => b(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield me.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, Iy = window.Vuex.useStore, nf = () => {
  const e = Iy(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = wu(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: o } = cu(), { targetLanguageURLParameter: a } = P(), r = tf();
  return () => b(void 0, null, function* () {
    const l = o(0), d = s(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, i = l.length === u, c = d.length === u;
    i && c || (yield r(a.value), t(), n());
  });
}, Ry = window.Vuex.useStore, Dr = /* @__PURE__ */ new Map(), ar = () => {
  const e = Ry(), t = Ks();
  return (n, s, o) => b(void 0, null, function* () {
    const a = `${n}:${s}:${o}`;
    if (Dr.has(a))
      return Dr.get(a);
    const l = (() => b(void 0, null, function* () {
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
    return Dr.set(a, l), l;
  });
}, vd = window.Vue.computed, zy = window.Vuex.useStore, kn = () => {
  const e = zy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s
  } = P(), o = vd(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      s.value
    )
  ), a = vd(() => o.value ? o.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: o,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, d) => o.value.getTitleForLanguage(l) || o.value.getTitleForLanguage(d)
  };
}, sf = window.Vuex.useStore, { setLanguageURLParams: Oy } = P(), vu = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), Oy(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, of = () => {
  const e = sf(), t = nf();
  return (n, s) => {
    const { sourceLanguage: o, targetLanguage: a } = Ae(e);
    n === s && (n = a.value, s = o.value), vu(e, n, s), t();
  };
}, jy = () => {
  const e = sf(), t = ar(), { currentLanguageTitleGroup: n, targetPageExists: s } = kn(), o = Ks();
  return (a, r) => b(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: d,
      setPageURLParam: u,
      clearSectionURLParameter: i
    } = P();
    a === r && (a = d.value, r = l.value);
    const c = n.value.getTitleForLanguage(a);
    vu(e, a, r), u(c), s.value ? (i(), yield t(
      l.value,
      d.value,
      c
    )) : yield o(l.value, [c]);
  });
}, Hy = window.Vuex.useStore, qy = window.Vue.ref, _d = qy(!1), af = () => {
  const e = Hy(), {
    supportedSourceLanguageCodes: t,
    supportedTargetLanguageCodes: n,
    fetchSupportedLanguageCodes: s
  } = wa(), { sourceLanguageURLParameter: o, targetLanguageURLParameter: a } = P(), r = () => {
    const d = Y.getCurrentWikiLanguageCode(), u = (f) => t.value.includes(f), i = (f) => n.value.includes(f), c = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, g = [
      a.value,
      mw.storage.get("cxTargetLanguage"),
      d,
      c.targetLanguage
    ], p = [
      o.value,
      mw.storage.get("cxSourceLanguage"),
      c.sourceLanguage,
      d,
      c.targetLanguage
    ], m = g.find(
      (f) => i(f)
    );
    return { sourceLanguage: p.find(
      (f) => u(f) && f !== m
    ), targetLanguage: m };
  };
  return { initializeApplicationLanguages: () => b(void 0, null, function* () {
    yield s();
    const { sourceLanguage: d, targetLanguage: u } = r();
    vu(e, d, u), _d.value = !0;
  }), applicationLanguagesInitialized: _d };
};
const Gy = window.Vue.resolveDynamicComponent, Sd = window.Vue.openBlock, yd = window.Vue.createBlock, Xy = window.Vue.Transition, go = window.Vue.withCtx, po = window.Vue.createVNode, Wy = window.Vue.resolveComponent, Pr = window.Vue.unref, Ky = window.Vuex.useStore, xd = window.Vue.computed, Yy = window.Vue.onMounted, Qy = window.Vue.inject, Jy = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = P(), { initializeApplicationLanguages: n } = af();
    t(), n();
    const s = Qy("breakpoints"), o = xd(() => s.value.mobile), a = Ky(), r = xd(
      () => a.state.application.autoSavePending
    );
    return Yy(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && fh.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((d) => {
          d instanceof Xs && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, d) => {
      const u = Wy("router-view");
      return Sd(), yd(Pr(w0), { id: "contenttranslation" }, {
        default: go(() => [
          po(Pr(U), { class: "cx-container" }, {
            default: go(() => [
              po(Pr(k), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: go(() => [
                  po(u, null, {
                    default: go(({ Component: i, route: c }) => [
                      po(Xy, {
                        name: o.value ? c.meta.transitionName : ""
                      }, {
                        default: go(() => [
                          (Sd(), yd(Gy(i)))
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
}, Zy = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, ex = {
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
const bd = (e) => {
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
class tx {
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
    const t = bd((o = this.user) == null ? void 0 : o.content), n = bd((a = this.mt) == null ? void 0 : a.content);
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
class _u extends Zc {
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
const ir = mw.user.isAnon() ? void 0 : "user", lf = (e) => {
  if (e === "assertuserfailed")
    throw new Xs();
};
function cf(e, t = null) {
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
    return t && (n.offset = t), new mw.Api().get(n).then((o) => b(this, null, function* () {
      var l;
      const a = o.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (d) => new Qi(Ke(ce({}, d), { status: e }))
      ) : r = a.map(
        (d) => new _u(Ke(ce({}, d), { status: e }))
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
function nx(e) {
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
      (a) => new tx(a)
    );
  });
}
function sx(e, t, n, s, o) {
  return b(this, null, function* () {
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
const ox = (e, t, n) => {
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
}, ax = ({
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
  isSandbox: i,
  sectionTranslationId: c,
  existingSectionTitle: g
}) => {
  const p = {
    assert: ir,
    action: "cxpublishsection",
    title: n,
    html: e,
    sourcetitle: t,
    sourcerevid: l,
    sourcesectiontitle: s,
    targetsectiontitle: o,
    sourcelanguage: a,
    targetlanguage: r,
    issandbox: i,
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
}, ix = ({
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
    assert: ir,
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
}, rx = (e) => {
  const t = {
    assert: ir,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((s) => s.cxsplit.result === "success");
}, lx = () => {
  const e = {
    assert: ir,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new _u(n.cxcheckunreviewed.translation)
  );
}, cx = (e, t, n) => {
  const s = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", s).then(() => !0).catch(() => !1);
}, ux = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, dx = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), xt = {
  fetchTranslations: cf,
  fetchTranslationUnits: nx,
  fetchSegmentTranslation: sx,
  parseTemplateWikitext: ox,
  publishTranslation: ax,
  saveTranslation: ix,
  deleteTranslation: cx,
  fetchTranslatorStats: dx,
  deleteCXTranslation: ux,
  splitTranslation: rx,
  checkUnreviewedTranslations: lx
};
function gx(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield xt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const px = {
  fetchTranslatorStats: gx
}, mx = {
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
}, hx = {
  namespaced: !0,
  state: Zy,
  getters: ex,
  actions: px,
  mutations: mx
}, fx = {
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
  appendixSectionTitles: W_
}, wx = {
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
}, vx = {
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
}, _x = {
  namespaced: !0,
  state: fx,
  getters: wx,
  actions: {},
  mutations: vx
}, Sx = {
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
}, yx = {
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
function xx(s) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: o } = t.application;
    if ((r = n.nearbyPages[o]) != null && r.length)
      return;
    const a = yield ps.fetchNearbyPages(o);
    e("addNearbyPages", { language: o, pages: a });
  });
}
const bx = { fetchNearbyPages: xx }, Cx = {
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
}, kx = {
  namespaced: !0,
  state: Sx,
  getters: yx,
  actions: bx,
  mutations: Cx
}, $x = {
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
}, Vx = {
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
}, Ex = {
  namespaced: !0,
  state: $x,
  mutations: Vx
}, Lx = window.Vuex.createStore, Ax = Lx({
  modules: { translator: hx, suggestions: _x, mediawiki: kx, application: Ex }
});
function Tx() {
  return uf().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function uf() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Dx = typeof Proxy == "function", Px = "devtools-plugin:setup", Bx = "plugin:settings:set";
let Ss, jc;
function Fx() {
  var e;
  return Ss !== void 0 || (typeof window != "undefined" && window.performance ? (Ss = !0, jc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Ss = !0, jc = global.perf_hooks.performance) : Ss = !1), Ss;
}
function Nx() {
  return Fx() ? jc.now() : Date.now();
}
class Mx {
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
        return Nx();
      }
    }, n && n.on(Bx, (r, l) => {
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
    return b(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Ux(e, t) {
  const n = e, s = uf(), o = Tx(), a = Dx && n.enableEarlyProxy;
  if (o && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    o.emit(Px, e, t);
  else {
    const r = a ? new Mx(n, o) : null;
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
const Zt = window.Vue.computed, la = window.Vue.unref, Ix = window.Vue.watchEffect, gf = window.Vue.defineComponent, Rx = window.Vue.reactive, pf = window.Vue.h, Br = window.Vue.provide, zx = window.Vue.ref, mf = window.Vue.watch, Ox = window.Vue.shallowRef, jx = window.Vue.shallowReactive, Hx = window.Vue.nextTick, yn = typeof window != "undefined";
function qx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const J = Object.assign;
function Fr(e, t) {
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
const Gx = /\/$/, Xx = (e) => e.replace(Gx, "");
function Nr(e, t, n = "/") {
  let s, o = {}, a = "", r = "";
  const l = t.indexOf("#");
  let d = t.indexOf("?");
  return l < d && l >= 0 && (d = -1), d > -1 && (s = t.slice(0, d), a = t.slice(d + 1, l > -1 ? l : t.length), o = e(a)), l > -1 && (s = s || t.slice(0, l), r = t.slice(l, t.length)), s = Yx(s != null ? s : t, n), {
    fullPath: s + (a && "?") + a + r,
    path: s,
    query: o,
    hash: r
  };
}
function Wx(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Cd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function kd(e, t, n) {
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
    if (!Kx(e[n], t[n]))
      return !1;
  return !0;
}
function Kx(e, t) {
  return gt(e) ? $d(e, t) : gt(t) ? $d(t, e) : e === t;
}
function $d(e, t) {
  return gt(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Yx(e, t) {
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
function Qx(e) {
  if (!e)
    if (yn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Xx(e);
}
const Jx = /^[^#]+#/;
function Zx(e, t) {
  return e.replace(Jx, "#") + t;
}
function eb(e, t) {
  const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  };
}
const rr = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function tb(e) {
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
    t = eb(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Vd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Hc = /* @__PURE__ */ new Map();
function nb(e, t) {
  Hc.set(e, t);
}
function sb(e) {
  const t = Hc.get(e);
  return Hc.delete(e), t;
}
let ob = () => location.protocol + "//" + location.host;
function ff(e, t) {
  const { pathname: n, search: s, hash: o } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = o.includes(e.slice(a)) ? e.slice(a).length : 1, d = o.slice(l);
    return d[0] !== "/" && (d = "/" + d), Cd(d, "");
  }
  return Cd(n, e) + s + o;
}
function ab(e, t, n, s) {
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
    g.state && g.replaceState(J({}, g.state, { scroll: rr() }), "");
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
function Ed(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? rr() : null
  };
}
function ib(e) {
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
    const c = e.indexOf("#"), g = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + d : ob() + e + d;
    try {
      t[i ? "replaceState" : "pushState"](u, "", g), o.value = u;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? X("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(d, u) {
    const i = J({}, t.state, Ed(
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
        scroll: rr()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && X(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = J({}, Ed(s.value, d, null), { position: i.position + 1 }, u);
    a(d, c, !1), s.value = d;
  }
  return {
    location: s,
    state: o,
    push: l,
    replace: r
  };
}
function rb(e) {
  e = Qx(e);
  const t = ib(e), n = ab(e, t.state, t.location, t.replace);
  function s(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const o = J({
    // it's overridden right after
    location: "",
    base: e,
    go: s,
    createHref: Zx.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function lb(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && X(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), rb(e);
}
function cb(e) {
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
}, qc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Ld;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ld || (Ld = {}));
const ub = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${gb(t)}" via a navigation guard.`;
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
  return {}.NODE_ENV !== "production" ? J(new Error(ub[e](t)), {
    type: e,
    [qc]: !0
  }, t) : J(new Error(), {
    type: e,
    [qc]: !0
  }, t);
}
function on(e, t) {
  return e instanceof Error && qc in e && (t == null || !!(e.type & t));
}
const db = ["params", "query", "hash"];
function gb(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of db)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Ad = "[^/]+?", pb = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, mb = /[.+*?^${}()[\]/\\]/g;
function hb(e, t) {
  const n = J({}, pb, t), s = [];
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
        c || (o += "/"), o += g.value.replace(mb, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: v } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const _ = v || Ad;
        if (_ !== Ad) {
          p += 10;
          try {
            new RegExp(`(${_})`);
          } catch (x) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${_}): ` + x.message);
          }
        }
        let C = h ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        c || (C = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && u.length < 2 ? `(?:/${C})` : "/" + C), f && (C += "?"), o += C, p += 20, f && (p += -8), h && (p += -20), _ === ".*" && (p += -50);
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
function fb(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s)
      return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function wb(e, t) {
  let n = 0;
  const s = e.score, o = t.score;
  for (; n < s.length && n < o.length; ) {
    const a = fb(s[n], o[n]);
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
const vb = {
  type: 0,
  value: ""
}, _b = /[a-zA-Z0-9_]/;
function Sb(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[vb]];
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
        d === "(" ? n = 2 : _b.test(d) ? g() : (c(), n = 0, d !== "*" && d !== "?" && d !== "+" && l--);
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
function yb(e, t, n) {
  const s = hb(Sb(e.path), n);
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
function xb(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = Bd({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(i) {
    return s.get(i);
  }
  function a(i, c, g) {
    const p = !g, m = bb(i);
    ({}).NODE_ENV !== "production" && Vb(m, c), m.aliasOf = g && g.record;
    const h = Bd(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const C = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const x of C)
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
    for (const C of f) {
      const { path: x } = C;
      if (c && x[0] !== "/") {
        const y = c.record.path, E = y[y.length - 1] === "/" ? "" : "/";
        C.path = c.record.path + (x && E + x);
      }
      if ({}.NODE_ENV !== "production" && C.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (v = yb(C, c, h), {}.NODE_ENV !== "production" && c && x[0] === "/" && Eb(v, c), g ? (g.alias.push(v), {}.NODE_ENV !== "production" && $b(g, v)) : (_ = _ || v, _ !== v && _.alias.push(v), p && i.name && !Pd(v) && r(i.name)), m.children) {
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
    for (; c < n.length && wb(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !vf(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !Pd(i) && s.set(i.record.name, i);
  }
  function u(i, c) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = s.get(i.name), !g)
        throw Gs(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const _ = Object.keys(i.params || {}).filter((C) => !g.keys.find((x) => x.name === C));
        _.length && X(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = J(
        // paramsFromLocation is a new object
        Dd(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((_) => !_.optional).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Dd(i.params, g.keys.map((_) => _.name))
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
      meta: kb(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: u, removeRoute: r, getRoutes: l, getRecordMatcher: o };
}
function Dd(e, t) {
  const n = {};
  for (const s of t)
    s in e && (n[s] = e[s]);
  return n;
}
function bb(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Cb(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Cb(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const s in e.components)
      t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function Pd(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function kb(e) {
  return e.reduce((t, n) => J(t, n.meta), {});
}
function Bd(e, t) {
  const n = {};
  for (const s in e)
    n[s] = s in t ? t[s] : e[s];
  return n;
}
function Gc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function $b(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Gc.bind(null, n)))
      return X(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Gc.bind(null, n)))
      return X(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Vb(e, t) {
  t && t.record.name && !e.name && !e.path && X(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Eb(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Gc.bind(null, n)))
      return X(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function vf(e, t) {
  return t.children.some((n) => n === e || vf(e, n));
}
const _f = /#/g, Lb = /&/g, Ab = /\//g, Tb = /=/g, Db = /\?/g, Sf = /\+/g, Pb = /%5B/g, Bb = /%5D/g, yf = /%5E/g, Fb = /%60/g, xf = /%7B/g, Nb = /%7C/g, bf = /%7D/g, Mb = /%20/g;
function Su(e) {
  return encodeURI("" + e).replace(Nb, "|").replace(Pb, "[").replace(Bb, "]");
}
function Ub(e) {
  return Su(e).replace(xf, "{").replace(bf, "}").replace(yf, "^");
}
function Xc(e) {
  return Su(e).replace(Sf, "%2B").replace(Mb, "+").replace(_f, "%23").replace(Lb, "%26").replace(Fb, "`").replace(xf, "{").replace(bf, "}").replace(yf, "^");
}
function Ib(e) {
  return Xc(e).replace(Tb, "%3D");
}
function Rb(e) {
  return Su(e).replace(_f, "%23").replace(Db, "%3F");
}
function zb(e) {
  return e == null ? "" : Rb(e).replace(Ab, "%2F");
}
function pa(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && X(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Ob(e) {
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
function Fd(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = Ib(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (gt(s) ? s.map((a) => a && Xc(a)) : [s && Xc(s)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function jb(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = gt(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const Hb = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Nd = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), lr = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Cf = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Wc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
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
      })) : c instanceof Error ? l(c) : cb(c) ? l(Gs(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === a && typeof c == "function" && a.push(c), r());
    }, u = e.call(s && s.instances[o], t, n, {}.NODE_ENV !== "production" ? qb(d, t, n) : d);
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
function qb(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && X(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function Mr(e, t, n, s) {
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
        if (Gb(l)) {
          const u = (l.__vccOpts || l)[t];
          u && o.push(Gn(u, n, s, a, r));
        } else {
          let d = l();
          ({}).NODE_ENV !== "production" && !("catch" in d) && (X(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), d = Promise.resolve(d)), o.push(() => d.then((u) => {
            if (!u)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = qx(u) ? u.default : u;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && Gn(g, n, s, a, r)();
          }));
        }
    }
  }
  return o;
}
function Gb(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Md(e) {
  const t = qs(lr), n = qs(Cf), s = Zt(() => t.resolve(la(e.to))), o = Zt(() => {
    const { matched: d } = s.value, { length: u } = d, i = d[u - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const g = c.findIndex(Wn.bind(null, i));
    if (g > -1)
      return g;
    const p = Ud(d[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Ud(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(Wn.bind(null, d[u - 2])) : g
    );
  }), a = Zt(() => o.value > -1 && Yb(n.params, s.value.params)), r = Zt(() => o.value > -1 && o.value === n.matched.length - 1 && hf(n.params, s.value.params));
  function l(d = {}) {
    return Kb(d) ? t[la(e.replace) ? "replace" : "push"](
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
      d.__vrl_devtools = d.__vrl_devtools || [], d.__vrl_devtools.push(u), Ix(() => {
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
const Xb = /* @__PURE__ */ gf({
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
  useLink: Md,
  setup(e, { slots: t }) {
    const n = Rx(Md(e)), { options: s } = qs(lr), o = Zt(() => ({
      [Id(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Id(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
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
}), Wb = Xb;
function Kb(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Yb(e, t) {
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
function Ud(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Id = (e, t, n) => e != null ? e : t != null ? t : n, Qb = /* @__PURE__ */ gf({
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
    ({}).NODE_ENV !== "production" && Zb();
    const s = qs(Wc), o = Zt(() => e.route || s.value), a = qs(Nd, 0), r = Zt(() => {
      let u = la(a);
      const { matched: i } = o.value;
      let c;
      for (; (c = i[u]) && !c.components; )
        u++;
      return u;
    }), l = Zt(() => o.value.matched[r.value]);
    Br(Nd, Zt(() => r.value + 1)), Br(Hb, l), Br(Wc, o);
    const d = zx();
    return mf(() => [d.value, l.value, e.name], ([u, i, c], [g, p, m]) => {
      i && (i.instances[c] = u, p && p !== i && u && u === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), u && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Wn(i, p) || !g) && (i.enterCallbacks[c] || []).forEach((h) => h(u));
    }, { flush: "post" }), () => {
      const u = o.value, i = e.name, c = l.value, g = c && c.components[i];
      if (!g)
        return Rd(n.default, { Component: g, route: u });
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
        (gt(f.ref) ? f.ref.map((C) => C.i) : [f.ref.i]).forEach((C) => {
          C.__vrv_devtools = v;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Rd(n.default, { Component: f, route: u }) || f
      );
    };
  }
});
function Rd(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Jb = Qb;
function Zb() {
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
    matched: e.matched.map((s) => lC(s, ["instances", "children", "aliasOf"]))
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
let eC = 0;
function tC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const s = eC++;
  Ux({
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
      c.forEach(Tf), i.filter && (c = c.filter((g) => (
        // save matches state based on the payload
        Kc(g, i.filter.toLowerCase())
      ))), c.forEach((g) => Af(g, t.currentRoute.value)), i.rootNodes = c.map(Lf);
    }
    let u;
    o.on.getInspectorTree((i) => {
      u = i, i.app === e && i.inspectorId === l && d();
    }), o.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: sC(g)
        });
      }
    }), o.sendInspectorTree(l), o.sendInspectorState(l);
  });
}
function nC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function sC(e) {
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
        display: e.keys.map((s) => `${s.name}${nC(s)}`).join(" "),
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
const kf = 15485081, $f = 2450411, Vf = 8702998, oC = 2282478, Ef = 16486972, aC = 6710886;
function Lf(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: oC
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
    backgroundColor: aC
  });
  let s = n.__vd_id;
  return s == null && (s = String(iC++), n.__vd_id = s), {
    id: s,
    label: n.path,
    tags: t,
    children: e.children.map(Lf)
  };
}
let iC = 0;
const rC = /^\/(.*)\/([a-z]*)$/;
function Af(e, t) {
  const n = t.matched.length && Wn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => Wn(s, e.record))), e.children.forEach((s) => Af(s, t));
}
function Tf(e) {
  e.__vd_match = !1, e.children.forEach(Tf);
}
function Kc(e, t) {
  const n = String(e.re).match(rC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Kc(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), a = pa(o);
  return !t.startsWith("/") && (a.includes(t) || o.includes(t)) || a.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Kc(r, t));
}
function lC(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function cC(e) {
  const t = xb(e.routes, e), n = e.parseQuery || Ob, s = e.stringifyQuery || Fd, o = e.history;
  if ({}.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = mo(), r = mo(), l = mo(), d = Ox(Vn);
  let u = Vn;
  yn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Fr.bind(null, (w) => "" + w), c = Fr.bind(null, zb), g = (
    // @ts-expect-error: intentionally avoid the type check
    Fr.bind(null, pa)
  );
  function p(w, B) {
    let A, N;
    return wf(w) ? (A = t.getRecordMatcher(w), N = B) : N = w, t.addRoute(N, A);
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
      const z = Nr(n, w, B.path), oe = t.resolve({ path: z.path }, B), nt = o.createHref(z.fullPath);
      return {}.NODE_ENV !== "production" && (nt.startsWith("//") ? X(`Location "${w}" resolved to "${nt}". A resolved location cannot start with multiple slashes.`) : oe.matched.length || X(`No match found for location with path "${w}"`)), J(z, oe, {
        params: g(oe.params),
        hash: pa(z.hash),
        redirectedFrom: void 0,
        href: nt
      });
    }
    let A;
    if ("path" in w)
      ({}).NODE_ENV !== "production" && "params" in w && !("name" in w) && // @ts-expect-error: the type is never
      Object.keys(w.params).length && X(`Path "${w.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), A = J({}, w, {
        path: Nr(n, w.path, B.path).path
      });
    else {
      const z = J({}, w.params);
      for (const oe in z)
        z[oe] == null && delete z[oe];
      A = J({}, w, {
        params: c(z)
      }), B.params = c(B.params);
    }
    const N = t.resolve(A, B), G = w.hash || "";
    ({}).NODE_ENV !== "production" && G && !G.startsWith("#") && X(`A \`hash\` should always start with the character "#". Replace "${G}" with "#${G}".`), N.params = i(g(N.params));
    const pe = Wx(s, J({}, w, {
      hash: Ub(G),
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
        s === Fd ? jb(w.query) : w.query || {}
      )
    }, N, {
      redirectedFrom: void 0,
      href: H
    });
  }
  function _(w) {
    return typeof w == "string" ? Nr(n, w, d.value.path) : J({}, w);
  }
  function C(w, B) {
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
      const { redirect: A } = B;
      let N = typeof A == "function" ? A(w) : A;
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
    const A = u = v(w), N = d.value, G = w.state, pe = w.force, H = w.replace === !0, z = E(A);
    if (z)
      return S(
        J(_(z), {
          state: typeof z == "object" ? J({}, G, z.state) : G,
          force: pe,
          replace: H
        }),
        // keep original redirectedFrom if it exists
        B || A
      );
    const oe = A;
    oe.redirectedFrom = B;
    let nt;
    return !pe && kd(s, N, A) && (nt = Gs(16, { to: oe, from: N }), De(
      N,
      N,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (nt ? Promise.resolve(nt) : T(oe, N)).catch((Ce) => on(Ce) ? (
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
          kd(s, v(Ce.to), oe) && // and we have done it a couple of times
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
    const A = C(w, B);
    return A ? Promise.reject(A) : Promise.resolve();
  }
  function V(w) {
    const B = D.values().next().value;
    return B && typeof B.runWithContext == "function" ? B.runWithContext(w) : w();
  }
  function T(w, B) {
    let A;
    const [N, G, pe] = uC(w, B);
    A = Mr(N.reverse(), "beforeRouteLeave", w, B);
    for (const z of N)
      z.leaveGuards.forEach((oe) => {
        A.push(Gn(oe, w, B));
      });
    const H = F.bind(null, w, B);
    return A.push(H), Q(A).then(() => {
      A = [];
      for (const z of a.list())
        A.push(Gn(z, w, B));
      return A.push(H), Q(A);
    }).then(() => {
      A = Mr(G, "beforeRouteUpdate", w, B);
      for (const z of G)
        z.updateGuards.forEach((oe) => {
          A.push(Gn(oe, w, B));
        });
      return A.push(H), Q(A);
    }).then(() => {
      A = [];
      for (const z of pe)
        if (z.beforeEnter)
          if (gt(z.beforeEnter))
            for (const oe of z.beforeEnter)
              A.push(Gn(oe, w, B));
          else
            A.push(Gn(z.beforeEnter, w, B));
      return A.push(H), Q(A);
    }).then(() => (w.matched.forEach((z) => z.enterCallbacks = {}), A = Mr(pe, "beforeRouteEnter", w, B), A.push(H), Q(A))).then(() => {
      A = [];
      for (const z of r.list())
        A.push(Gn(z, w, B));
      return A.push(H), Q(A);
    }).catch((z) => on(
      z,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? z : Promise.reject(z));
  }
  function R(w, B, A) {
    l.list().forEach((N) => V(() => N(w, B, A)));
  }
  function K(w, B, A, N, G) {
    const pe = C(w, B);
    if (pe)
      return pe;
    const H = B === Vn, z = yn ? history.state : {};
    A && (N || H ? o.replace(w.fullPath, J({
      scroll: H && z && z.scroll
    }, G)) : o.push(w.fullPath, G)), d.value = w, De(w, B, A, H), Fe();
  }
  let ie;
  function te() {
    ie || (ie = o.listen((w, B, A) => {
      if (!M.listening)
        return;
      const N = v(w), G = E(N);
      if (G) {
        S(J(G, { replace: !0 }), N).catch(ca);
        return;
      }
      u = N;
      const pe = d.value;
      yn && nb(Vd(pe.fullPath, A.delta), rr()), T(N, pe).catch((H) => on(
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
        ) && !A.delta && A.type === ga.pop && o.go(-1, !1);
      }).catch(ca), Promise.reject()) : (A.delta && o.go(-A.delta, !1), re(H, N, pe))).then((H) => {
        H = H || K(
          // after navigation, all matched components are resolved
          N,
          pe,
          !1
        ), H && (A.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !on(
          H,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-A.delta, !1) : A.type === ga.pop && on(
          H,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), R(N, pe, H);
      }).catch(ca);
    }));
  }
  let j = mo(), W = mo(), se;
  function re(w, B, A) {
    Fe(w);
    const N = W.list();
    return N.length ? N.forEach((G) => G(w, B, A)) : ({}.NODE_ENV !== "production" && X("uncaught error during route navigation:"), console.error(w)), Promise.reject(w);
  }
  function $e() {
    return se && d.value !== Vn ? Promise.resolve() : new Promise((w, B) => {
      j.add([w, B]);
    });
  }
  function Fe(w) {
    return se || (se = !w, te(), j.list().forEach(([B, A]) => w ? A(w) : B()), j.reset()), w;
  }
  function De(w, B, A, N) {
    const { scrollBehavior: G } = e;
    if (!yn || !G)
      return Promise.resolve();
    const pe = !A && sb(Vd(w.fullPath, 0)) || (N || !A) && history.state && history.state.scroll || null;
    return Hx().then(() => G(w, B, pe)).then((H) => H && tb(H)).catch((H) => re(H, w, B));
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
      w.component("RouterLink", Wb), w.component("RouterView", Jb), w.config.globalProperties.$router = B, Object.defineProperty(w.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => la(d)
      }), yn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !tt && d.value === Vn && (tt = !0, x(o.location).catch((G) => {
        ({}).NODE_ENV !== "production" && X("Unexpected error when starting the router:", G);
      }));
      const A = {};
      for (const G in Vn)
        Object.defineProperty(A, G, {
          get: () => d.value[G],
          enumerable: !0
        });
      w.provide(lr, B), w.provide(Cf, jx(A)), w.provide(Wc, d);
      const N = w.unmount;
      D.add(w), w.unmount = function() {
        D.delete(w), D.size < 1 && (u = Vn, ie && ie(), ie = null, d.value = Vn, tt = !1, se = !1), N();
      }, {}.NODE_ENV !== "production" && yn && tC(w, B, t);
    }
  };
  function Q(w) {
    return w.reduce((B, A) => B.then(() => V(A)), Promise.resolve());
  }
  return M;
}
function uC(e, t) {
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
  return qs(lr);
}
const dC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, s = parseInt(e.slice(6, 8)), o = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, s, o, a, r)), u = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(u / (1e3 * 3600 * 24));
}, gC = (e) => {
  const t = dC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const kt = window.Vue.unref, ys = window.Vue.createVNode, an = window.Vue.createElementVNode, zd = window.Vue.renderSlot, Od = window.Vue.withModifiers, Ur = window.Vue.toDisplayString, Ir = window.Vue.withCtx, pC = window.Vue.openBlock, mC = window.Vue.createElementBlock, hC = window.Vue.createCommentVNode, fC = { class: "col shrink pe-4" }, wC = { class: "col" }, vC = { class: "cx-translation__details column justify-between ma-0" }, _C = { class: "row ma-0" }, SC = { class: "col grow" }, yC = { class: "col shrink ps-2" }, xC = ["dir", "textContent"], bC = ["dir", "textContent"], CC = ["textContent"], kC = window.Vuex.useStore, $C = window.Vue.computed, Df = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Zc,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, s = kC(), o = (l, d) => {
      const u = s.getters["mediawiki/getPage"](l, d);
      return u == null ? void 0 : u.thumbnail;
    }, a = ge(), r = $C(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, d = gC(n.translation.startTimestamp);
      return a.i18n(
        l[d.postfix],
        mw.language.convertNumber(d.value)
      );
    });
    return (l, d) => e.translation ? (pC(), mC("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: d[1] || (d[1] = Od((u) => l.$emit("click"), ["stop"]))
    }, [
      an("div", fC, [
        ys(kt(Jc), {
          class: "cx-translation__thumbnail",
          thumbnail: o(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      an("div", wC, [
        an("div", vC, [
          an("div", _C, [
            an("div", SC, [
              zd(l.$slots, "title")
            ]),
            an("div", yC, [
              ys(kt(Ze), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: d[0] || (d[0] = Od((u) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          zd(l.$slots, "mid-content"),
          ys(kt(U), { class: "cx-translation__footer ma-0" }, {
            default: Ir(() => [
              ys(kt(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Ir(() => [
                  an("span", {
                    class: "mw-ui-autonym",
                    dir: kt(I.getDir)(e.translation.sourceLanguage),
                    textContent: Ur(kt(I.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, xC),
                  ys(kt(Ze), {
                    icon: kt(j0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  an("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: kt(I.getDir)(e.translation.targetLanguage),
                    textContent: Ur(kt(I.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, bC)
                ]),
                _: 1
              }),
              ys(kt(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Ir(() => [
                  an("span", {
                    textContent: Ur(r.value)
                  }, null, 8, CC)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : hC("", !0);
  }
};
const fo = window.Vue.unref, VC = window.Vue.toDisplayString, EC = window.Vue.normalizeClass, LC = window.Vue.createElementVNode, Rr = window.Vue.openBlock, AC = window.Vue.createElementBlock, jd = window.Vue.createCommentVNode, Hd = window.Vue.createVNode, Ia = window.Vue.withCtx, qd = window.Vue.createBlock, TC = ["lang", "textContent"], DC = ["lang", "innerHTML"], PC = window.Vue.computed, BC = window.Vue.inject, FC = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Qi,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, s = BC("colors").gray200, o = PC(
      () => {
        var d;
        return ((d = t.translation.progress) == null ? void 0 : d.any) * 100 || 0;
      }
    ), a = et(), { setTranslationURLParams: r } = P(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (d, u) => (Rr(), qd(Df, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": fo(gh),
      onActionIconClicked: u[0] || (u[0] = (i) => d.$emit("delete-translation")),
      onClick: l
    }, {
      title: Ia(() => [
        LC("h5", {
          class: EC(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: VC(e.translation.sourceTitle)
        }, null, 10, TC),
        e.translation.isLeadSectionTranslation ? jd("", !0) : (Rr(), AC("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, DC))
      ]),
      "mid-content": Ia(() => [
        e.translation.progress ? (Rr(), qd(fo(U), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ia(() => [
            Hd(fo(k), null, {
              default: Ia(() => [
                Hd(fo(hh), {
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
        })) : jd("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, NC = window.Vuex.useStore, Pf = [], MC = (e, t, n) => Pf.some(
  (s) => s.sourceLanguage === e && s.targetLanguage === t && s.sourceTitle === n
), UC = (e, t, n) => {
  const s = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Pf.push(s);
}, IC = () => {
  const e = NC();
  return (t, n, s) => b(void 0, null, function* () {
    let o = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, s);
    return !o && !MC(t, n, s) && (o = yield me.fetchSectionSuggestion(
      t,
      s,
      n
    ), UC(t, n, s), o && (o.isListable = !1, e.commit("suggestions/addSectionSuggestion", o))), o;
  });
}, Bf = window.Vue.ref, Ff = Bf(null), Yc = Bf(null), RC = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), Ff.value = e;
}, zC = (e) => {
  Yc.value = e;
}, ya = () => {
  const e = et(), t = ar(), { setTranslationURLParams: n } = P();
  return (s, o, a, r, l = null, d = !0) => b(void 0, null, function* () {
    RC(r), zC(l);
    const u = yield t(
      o,
      a,
      s
    );
    n(u), d && e.push({ name: "sx-translation-confirmer" });
  });
};
const zr = window.Vue.withModifiers, Gd = window.Vue.toDisplayString, Xd = window.Vue.createElementVNode, $t = window.Vue.unref, Qn = window.Vue.createVNode, OC = window.Vue.createTextVNode, Ra = window.Vue.openBlock, Wd = window.Vue.createElementBlock, Kd = window.Vue.createCommentVNode, Yd = window.Vue.createBlock, xs = window.Vue.withCtx, jC = ["lang", "href", "textContent"], HC = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, qC = {
  key: 2,
  class: "flex"
}, GC = ["innerHTML"], Or = window.Vue.computed, Qd = window.Vue.ref, Jd = window.Codex.CdxButton, jr = window.Codex.CdxIcon, XC = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: _u,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Qd(!0), s = Qd(null), o = Or(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.missingSections;
    }), a = Or(
      () => o.value && Object.keys(o.value)[0]
    );
    IC()(
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
    }, c = mw.config.get("wgNamespaceIds"), g = Or(() => new mw.Title(t.translation.targetTitle).getNamespaceId() === c.user);
    return (p, m) => (Ra(), Yd(Df, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: d
    }, {
      title: xs(() => [
        Xd("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: m[0] || (m[0] = zr(() => {
          }, ["stop"])),
          textContent: Gd(e.translation.sourceTitle)
        }, null, 8, jC)
      ]),
      "mid-content": xs(() => [
        Qn($t(U), { class: "ma-0" }, {
          default: xs(() => [
            Qn($t(k), null, {
              default: xs(() => [
                g.value ? (Ra(), Wd("div", HC, [
                  Qn($t(jr), {
                    icon: $t(ef),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  OC(" " + Gd(p.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : Kd("", !0),
                n.value ? (Ra(), Yd($t(dt), { key: 1 })) : o.value ? (Ra(), Wd("div", qC, [
                  Qn($t(Jd), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: m[1] || (m[1] = zr((h) => i(a.value), ["stop"]))
                  }, {
                    default: xs(() => [
                      Qn($t(jr), {
                        class: "me-1",
                        icon: $t(Gh)
                      }, null, 8, ["icon"]),
                      Xd("span", { innerHTML: a.value }, null, 8, GC)
                    ]),
                    _: 1
                  }),
                  Qn($t(Jd), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": p.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: m[2] || (m[2] = zr((h) => i(null), ["stop"]))
                  }, {
                    default: xs(() => [
                      Qn($t(jr), { icon: $t(hu) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : Kd("", !0)
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
}, Nf = "cx-translation-session-position-", Mf = () => Nf + mw.user.sessionId(), WC = () => {
  const e = parseInt(
    mw.storage.get(Mf())
  );
  return isNaN(e) ? 0 : e;
}, KC = function(e) {
  const t = Mf();
  mw.storage.set(t, e);
}, YC = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(Nf)).forEach((e) => mw.storage.remove(e));
}, QC = () => {
  const e = WC();
  return e % 10 === 0 && YC(), KC(e + 1), e;
};
function JC(e) {
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
    content_translation_session_position: QC()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(o, Object.assign({}, l, e))
  ) : Nh(r).then((d) => {
    mw.eventLog.submit(
      o,
      Object.assign({}, l, e, {
        user_global_edit_count: d,
        user_global_edit_count_bucket: K_(d)
      })
    );
  });
}
const ZC = window.Vuex.useStore, ek = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], Ct = () => {
  const e = ZC(), { previousRoute: t } = Ae(e), n = [
    "event_source",
    "translation_source_language",
    "translation_target_language",
    "translation_source_title"
  ], s = (o) => {
    for (const a of n)
      if (o[a] === null) {
        const r = ek(
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
  return (o) => (o.access_method || (o.access_method = xn ? "desktop" : "mobile web"), s(o), JC(o));
}, tk = window.Vuex.useStore, nk = () => {
  const { commit: e } = tk(), t = Ct();
  return (n) => b(void 0, null, function* () {
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
const sk = window.Vue.resolveDirective, Hr = window.Vue.createElementVNode, ok = window.Vue.withDirectives, qr = window.Vue.unref, Zd = window.Vue.createVNode, eg = window.Vue.withCtx, ak = window.Vue.openBlock, ik = window.Vue.createBlock, rk = { class: "pa-4" }, lk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, ck = {
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
    const n = e, s = t, o = () => s("update:modelValue", !1), a = nk(), r = () => {
      a(n.translation), o();
    };
    return (l, d) => {
      const u = sk("i18n");
      return ak(), ik(qr(bt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: eg(() => [
          Hr("div", lk, [
            Zd(qr(Xe), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: o
            }, null, 8, ["label"]),
            Zd(qr(Xe), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: eg(() => [
          Hr("div", rk, [
            ok(Hr("span", null, null, 512), [
              [u, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function uk(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield dk(t, n)).filter((o) => e.includes(o)) : [];
  });
}
function tg(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(I.sortByAutonym) : (yield uk(e, t, n)).sort(I.sortByAutonym);
  });
}
function dk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((s) => s.json()).then((s) => Object.keys(s.languagesearch || {}));
}
function gk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function pk(e) {
  let t, n = [...e];
  const s = e.length;
  s < 10 && (t = s), s < 30 && (t = 10), s >= 30 && (t = 15);
  const o = [];
  for (; n.length; )
    o.push(n.splice(0, t));
  return o;
}
const mk = window.Vue.computed;
function hk(e, t) {
  const n = mk(() => {
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
const Gr = window.Vue.ref, Xr = window.Vue.watch, fk = window.Vue.computed;
function Uf(e, t, n) {
  const s = Gr(""), o = Gr(-1), a = Gr(null), r = () => {
    o.value++, o.value >= l.value.length && (o.value = 0);
  }, l = fk(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), d = () => {
    o.value--, o.value < 0 && (o.value = 0);
  };
  return Xr(e, () => {
    o.value = -1;
  }), Xr(t, () => {
    t.value && l.value.length > 0 && (o.value = 0);
  }), Xr(o, () => b(this, null, function* () {
    var u;
    if (o.value < 0) {
      s.value = "";
      return;
    }
    s.value = l.value[o.value], (u = a.value.querySelectorAll(`.language[lang="${s.value}"]`)[0]) == null || u.scrollIntoView(!1);
  })), { next: r, prev: d, keyboardNavigationContainer: a, selectedItem: s };
}
function yu(e, t, n) {
  let s;
  const o = (...a) => {
    const r = this, l = () => {
      s = null, n || e.apply(r, a);
    };
    n && !s && e.apply(r, a), (!s || t) && (clearTimeout(s), s = setTimeout(l, t));
  };
  return o.cancel = () => clearTimeout(s), o;
}
const za = window.Vue.renderSlot, Ve = window.Vue.unref, wk = window.Vue.isRef, ng = window.Vue.createVNode, wo = window.Vue.withModifiers, vo = window.Vue.withKeys, En = window.Vue.createElementVNode, vk = window.Vue.resolveDirective, Oa = window.Vue.withDirectives, Wr = window.Vue.renderList, Kr = window.Vue.Fragment, rn = window.Vue.openBlock, ln = window.Vue.createElementBlock, sg = window.Vue.toDisplayString, ja = window.Vue.normalizeClass, Yr = window.Vue.createCommentVNode, _k = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, Sk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, yk = { class: "results px-3 pt-4" }, xk = { class: "results-header ps-8 pb-2" }, bk = { class: "results-languages--suggestions pa-0 ma-0" }, Ck = ["lang", "dir", "aria-selected", "onClick", "textContent"], kk = { class: "results px-3 pt-4" }, $k = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, Vk = ["lang", "dir", "aria-selected", "onClick", "textContent"], Ek = ["aria-selected"], Lk = { class: "no-results px-3 py-4" }, Ak = { class: "ps-8" }, Ha = window.Vue.ref, Tk = window.Vue.watch, Dk = window.Vue.onMounted, og = window.Vue.computed, If = {
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
      default: gk
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = Ha(null), a = Ha(""), r = Ha([]), l = Ha(n.suggestions), d = og(
      () => pk(r.value)
    ), u = og(() => {
      const x = r.value.length;
      return x < 10 ? "few-results" : x < 30 ? "some-results" : "many-results";
    }), i = (x) => s("select", x), c = () => s("close"), { autocompletion: g, onTabSelect: p } = hk(
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
    return Tk(a, yu(() => b(this, null, function* () {
      r.value = yield tg(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), Dk(() => b(this, null, function* () {
      n.autofocus && setTimeout(() => o.value.focus(), 500), r.value = yield tg(
        n.languages,
        "",
        n.searchAPI
      );
    })), (x, y) => {
      const E = vk("i18n");
      return rn(), ln("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        za(x.$slots, "search", {}, () => [
          En("div", _k, [
            ng(Ve(Ic), {
              value: Ve(g),
              "onUpdate:value": y[0] || (y[0] = (S) => wk(g) ? g.value = S : null),
              icon: Ve(Ou),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            ng(Ve(Ic), {
              ref_key: "searchInputElement",
              ref: o,
              value: a.value,
              "onUpdate:value": y[1] || (y[1] = (S) => a.value = S),
              class: "mw-ui-language-selector__search pa-4",
              icon: Ve(Ou),
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
        En("section", Sk, [
          e.suggestions.length && !a.value ? za(x.$slots, "suggestions", { key: 0 }, () => [
            En("section", yk, [
              Oa(En("p", xk, null, 512), [
                [E, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              En("ul", bk, [
                (rn(!0), ln(Kr, null, Wr(e.suggestions, (S) => (rn(), ln("li", {
                  key: S,
                  class: ja(["language ma-0", { "language--selected": S === Ve(v) }]),
                  lang: S,
                  dir: Ve(I.getDir)(S),
                  "aria-selected": S === Ve(v) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (F) => i(S),
                  textContent: sg(Ve(I.getAutonym)(S))
                }, null, 10, Ck))), 128))
              ])
            ])
          ]) : Yr("", !0),
          d.value.length ? za(x.$slots, "search", { key: 1 }, () => [
            En("section", kk, [
              e.suggestions.length && !a.value ? Oa((rn(), ln("p", $k, null, 512)), [
                [E, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Yr("", !0),
              (rn(!0), ln(Kr, null, Wr(d.value, (S, F) => (rn(), ln("ul", {
                key: F,
                class: ja(["results-languages pa-0 ma-0 mb-6", u.value])
              }, [
                (rn(!0), ln(Kr, null, Wr(S, (V) => (rn(), ln("li", {
                  key: V,
                  class: ja(["language ma-0", { "language--selected": V === Ve(v) }]),
                  lang: V,
                  dir: Ve(I.getDir)(V),
                  role: "option",
                  "aria-selected": V === Ve(v) || null,
                  tabindex: "-1",
                  onClick: (T) => i(V),
                  textContent: sg(Ve(I.getAutonym)(V))
                }, null, 10, Vk))), 128)),
                e.allOptionEnabled && !a.value ? Oa((rn(), ln("li", {
                  key: 0,
                  class: ja(["language ma-0", { "language--selected": Ve(v) === "all" }]),
                  role: "option",
                  "aria-selected": Ve(v) === "all" || null,
                  tabindex: "-1",
                  onClick: y[2] || (y[2] = (V) => i("all"))
                }, null, 10, Ek)), [
                  [E, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Yr("", !0)
              ], 2))), 128))
            ])
          ]) : za(x.$slots, "noresults", { key: 2 }, () => [
            En("section", Lk, [
              Oa(En("h3", Ak, null, 512), [
                [E, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const Pk = window.Vue.resolveDirective, ag = window.Vue.withDirectives, _o = window.Vue.openBlock, So = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ee = window.Vue.unref, ig = window.Vue.toDisplayString, Vt = window.Vue.createVNode, rg = window.Vue.withModifiers, Jn = window.Vue.withCtx, Bk = window.Vue.normalizeClass, Fk = {
  key: 0,
  class: "mw-ui-autonym"
}, Nk = ["lang", "dir", "textContent"], Mk = {
  key: 0,
  class: "mw-ui-autonym"
}, Uk = ["lang", "dir", "textContent"], yo = window.Vue.computed, Ik = window.Vue.inject, Rk = window.Vue.ref, lg = window.Codex.CdxButton, Qr = window.Codex.CdxIcon, Xi = {
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
    const n = e, s = t, o = Ik("breakpoints"), a = yo(() => o.value.mobile), r = Rk(null), l = yo(() => !!r.value), d = () => r.value = "source", u = () => r.value = "target", i = () => r.value = null, c = yo(() => {
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
      const v = Pk("i18n");
      return _o(), So("div", {
        class: Bk(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        Vt(Ee(U), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Jn(() => [
            Vt(Ee(k), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: Jn(() => [
                Vt(Ee(lg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: rg(d, ["stop"])
                }, {
                  default: Jn(() => [
                    p.value ? ag((_o(), So("span", Fk, null, 512)), [
                      [v, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (_o(), So("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ee(I.getDir)(e.selectedSourceLanguage),
                      textContent: ig(Ee(I.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, Nk)),
                    Vt(Ee(Qr), {
                      size: "x-small",
                      icon: Ee(zc)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            Vt(Ee(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: Jn(() => [
                Vt(Ee(Qr), { icon: Ee(Xh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Vt(Ee(k), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Jn(() => [
                Vt(Ee(lg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: rg(u, ["stop"])
                }, {
                  default: Jn(() => [
                    m.value ? ag((_o(), So("span", Mk, null, 512)), [
                      [v, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (_o(), So("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ee(I.getDir)(e.selectedTargetLanguage),
                      textContent: ig(Ee(I.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, Uk)),
                    Vt(Ee(Qr), {
                      size: "x-small",
                      icon: Ee(zc)
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
        Vt(Ee(bt), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (_) => l.value = _),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: Jn(() => [
            Vt(Ee(If), {
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
const cg = window.Vue.unref, zk = window.Vue.createVNode, qa = window.Vue.createElementVNode, ug = window.Vue.toDisplayString, Ok = window.Vue.openBlock, jk = window.Vue.createElementBlock, Hk = { class: "cx-list-empty-placeholder pa-4" }, qk = { class: "cx-list-empty-placeholder__icon-container" }, Gk = { class: "cx-list-empty-placeholder__icon" }, Xk = ["textContent"], Wk = ["textContent"], Kk = window.Codex.CdxIcon, Rf = {
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
    return (t, n) => (Ok(), jk("div", Hk, [
      qa("div", qk, [
        qa("div", Gk, [
          zk(cg(Kk), { icon: cg(Jh) }, null, 8, ["icon"])
        ])
      ]),
      qa("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: ug(e.title)
      }, null, 8, Xk),
      qa("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: ug(e.description)
      }, null, 8, Wk)
    ]));
  }
}, Yk = window.Vuex.useStore, Qk = window.Vue.ref, Ga = Qk({ draft: !1, published: !1 }), Js = () => {
  const e = Yk(), t = Ks(), n = (o) => b(void 0, null, function* () {
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
const Jk = window.Vue.toDisplayString, Jr = window.Vue.normalizeClass, dg = window.Vue.createElementVNode, jt = window.Vue.openBlock, bs = window.Vue.createBlock, Xa = window.Vue.createCommentVNode, gg = window.Vue.unref, pg = window.Vue.renderList, mg = window.Vue.Fragment, Wa = window.Vue.createElementBlock, Zk = window.Vue.createVNode, hg = window.Vue.withCtx, e8 = ["textContent"], t8 = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, n8 = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Ka = window.Vue.ref, Et = window.Vue.computed, s8 = window.Vue.inject, o8 = window.Vuex.useStore, fg = {
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
    const t = e, n = Ka("all"), s = Ka("all"), o = o8(), { translationsFetched: a } = Js(), r = Et(
      () => a.value[t.translationStatus]
    ), l = Ka(!1), d = Ka(null), u = Et(
      () => t.translationStatus === "draft"
    ), i = Et(
      () => o.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = Et(
      () => n.value === "all"
    ), g = Et(
      () => s.value === "all"
    ), p = Et(
      () => i.value.filter(
        (y) => (c.value || y.sourceLanguage === n.value) && (g.value || y.targetLanguage === s.value)
      ).sort((y, E) => y.lastUpdatedTimestamp < E.lastUpdatedTimestamp)
    ), m = Et(() => {
      const y = i.value.map(
        (E) => E.targetLanguage
      );
      return [...new Set(y)];
    }), h = Et(() => {
      const y = i.value.map(
        (E) => E.sourceLanguage
      );
      return [...new Set(y)];
    }), f = (y) => {
      d.value = y, l.value = !0;
    }, v = Et(() => t.activeStatus === t.translationStatus), _ = s8("breakpoints"), C = Et(() => _.value.mobile), x = Et(
      () => C.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (y, E) => v.value ? (jt(), bs(gg(Je), {
      key: 0,
      class: Jr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: hg(() => [
        dg("div", {
          class: Jr(["cx-translation-list__header", x.value])
        }, [
          dg("h3", {
            class: Jr(["px-4 mw-ui-card__title mb-0", { "pb-4": C.value }]),
            textContent: Jk(y.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, e8),
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
      default: hg(() => [
        r.value && !p.value.length ? (jt(), bs(Rf, {
          key: 0,
          title: y.$i18n("cx-sx-translation-list-empty-title"),
          description: y.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Xa("", !0),
        r.value ? Xa("", !0) : (jt(), bs(gg(dt), { key: 1 })),
        u.value ? (jt(), Wa("div", t8, [
          (jt(!0), Wa(mg, null, pg(p.value, (S) => (jt(), bs(FC, {
            key: `${e.translationStatus}-${S.key}`,
            translation: S,
            onDeleteTranslation: (F) => f(S)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (jt(), Wa("div", n8, [
          (jt(!0), Wa(mg, null, pg(p.value, (S) => (jt(), bs(XC, {
            key: `${e.translationStatus}-${S.key}`,
            translation: S
          }, null, 8, ["translation"]))), 128))
        ])),
        Zk(ck, {
          modelValue: l.value,
          "onUpdate:modelValue": E[2] || (E[2] = (S) => l.value = S),
          translation: d.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Xa("", !0);
  }
};
const Zr = window.Vue.toDisplayString, ji = window.Vue.createElementVNode, el = window.Vue.unref, xo = window.Vue.openBlock, tl = window.Vue.createBlock, wg = window.Vue.createCommentVNode, a8 = window.Vue.Fragment, vg = window.Vue.createElementBlock, i8 = window.Vue.withKeys, r8 = window.Vue.withCtx, l8 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, c8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, u8 = /* @__PURE__ */ ji("span", null, "/", -1), d8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, _g = window.Codex.CdxIcon, g8 = window.Codex.CdxInfoChip, Ya = window.Vue.computed, ds = {
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
      () => t.expanded ? dy : zc
    );
    return (r, l) => (xo(), tl(el(g8), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = i8((d) => r.$emit("click"), ["enter"]))
    }, {
      default: r8(() => [
        n.value === -1 ? (xo(), vg(a8, { key: 0 }, [
          ji("span", null, Zr(e.content), 1),
          e.expandable ? (xo(), tl(el(_g), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : wg("", !0)
        ], 64)) : (xo(), vg("div", l8, [
          ji("span", c8, Zr(s.value), 1),
          u8,
          ji("span", d8, Zr(o.value), 1),
          e.expandable ? (xo(), tl(el(_g), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : wg("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const _e = window.Vue.unref, Lt = window.Vue.createVNode, Ln = window.Vue.createElementVNode, bo = window.Vue.toDisplayString, ht = window.Vue.withCtx, p8 = window.Vue.resolveDirective, nl = window.Vue.withDirectives, An = window.Vue.openBlock, Cs = window.Vue.createBlock, Zn = window.Vue.createCommentVNode, Sg = window.Vue.createElementBlock, yg = window.Vue.withModifiers, m8 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, h8 = { class: "col shrink pe-4" }, f8 = ["lang", "dir", "textContent"], w8 = ["lang", "dir", "textContent"], v8 = { class: "cx-suggestion__missing-sections" }, _8 = {
  key: 0,
  class: "cx-suggestion__easy-sections ms-1"
}, S8 = ["textContent"], y8 = ["textContent"], sl = window.Codex.CdxIcon, Oe = window.Vue.computed, x8 = window.Vue.inject, b8 = window.Vuex.useStore, Qc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [ms, en, Hs],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = b8(), s = Oe(() => t.suggestion), o = Oe(
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
    ), f = x8("colors"), v = Oe(
      () => g.value ? f.blue600 : "currentColor"
    ), _ = Oe(
      () => {
        var x;
        return Q_((x = a.value) == null ? void 0 : x.articleSize);
      }
    ), C = Oe(
      () => s.value instanceof Bh || s.value instanceof Fh
    );
    return (x, y) => {
      const E = p8("i18n");
      return s.value ? (An(), Sg("div", m8, [
        Ln("div", h8, [
          Lt(_e(Jc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        Lt(_e(U), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: ht(() => [
            Lt(_e(U), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: ht(() => [
                Lt(_e(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: ht(() => [
                    Ln("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: _e(I.getDir)(s.value.sourceLanguage),
                      textContent: bo(o.value)
                    }, null, 8, f8)
                  ]),
                  _: 1
                }),
                Lt(_e(k), { shrink: "" }, {
                  default: ht(() => [
                    Ln("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: _e(I.getDir)(s.value.sourceLanguage),
                      textContent: bo(i.value)
                    }, null, 8, w8)
                  ]),
                  _: 1
                }),
                _.value && !c.value && !C.value ? (An(), Cs(_e(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: ht(() => [
                    nl(Ln("small", null, null, 512), [
                      [E, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Zn("", !0),
                c.value ? (An(), Cs(_e(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom",
                  shrink: ""
                }, {
                  default: ht(() => [
                    nl(Ln("small", v8, null, 512), [
                      [E, [r.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (An(), Sg("small", _8, bo(u.value), 1)) : Zn("", !0)
                  ]),
                  _: 1
                })) : g.value ? (An(), Cs(_e(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: ht(() => [
                    Lt(_e(U), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: ht(() => [
                        Lt(_e(k), { grow: "" }, {
                          default: ht(() => [
                            Ln("small", {
                              textContent: bo(p.value)
                            }, null, 8, S8),
                            Lt(_e(sl), {
                              icon: _e(Xh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            Ln("small", {
                              textContent: bo(m.value)
                            }, null, 8, y8)
                          ]),
                          _: 1
                        }),
                        r.value ? (An(), Cs(_e(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: ht(() => [
                            nl(Ln("small", null, null, 512), [
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
                C.value ? (An(), Cs(_e(k), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: ht(() => [
                    Lt(ds, {
                      icon: _e(pu),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : Zn("", !0)
              ]),
              _: 1
            }),
            Lt(_e(k), { shrink: "" }, {
              default: ht(() => [
                g.value ? Zn("", !0) : (An(), Cs(_e(sl), {
                  key: 0,
                  icon: _e(Qs),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: y[0] || (y[0] = yg((S) => x.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                Lt(_e(sl), {
                  class: "cx-suggestion__favorite-button",
                  icon: h.value,
                  "icon-color": v.value,
                  onClick: y[1] || (y[1] = yg((S) => x.$emit("bookmark"), ["stop"]))
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
const ol = window.Vue.normalizeClass, xg = window.Vue.createVNode, C8 = window.Vue.renderList, bg = window.Vue.Fragment, Co = window.Vue.openBlock, Qa = window.Vue.createElementBlock, k8 = window.Vue.createBlock, $8 = window.Vue.toDisplayString, V8 = window.Vue.withKeys, Cg = window.Vue.createCommentVNode, E8 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, Ja = window.Vue.computed, L8 = window.Vue.ref, A8 = window.Vue.watchEffect, T8 = {
  __name: "SuggestionFilterChip",
  props: {
    filter: {
      type: It,
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
    ), o = L8(!1);
    A8(() => {
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
    return (g, p) => (Co(), Qa(bg, null, [
      xg(ds, {
        class: ol(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": s.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: o.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      o.value ? (Co(), Qa("div", E8, [
        xg(ds, {
          class: ol(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: p[0] || (p[0] = (m) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Co(!0), Qa(bg, null, C8(u.value, (m) => (Co(), k8(ds, {
          key: m.id,
          class: ol(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
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
          onKeyup: V8(c, ["enter"])
        }, $8(e.viewMoreConfig.label), 33)) : Cg("", !0)
      ])) : Cg("", !0)
    ], 64));
  }
};
const D8 = window.Vue.toDisplayString, kg = window.Vue.createElementVNode, P8 = window.Vue.renderList, $g = window.Vue.Fragment, al = window.Vue.openBlock, Vg = window.Vue.createElementBlock, B8 = window.Vue.createBlock, F8 = { class: "sx-suggestions-filters__group-label mb-3" }, N8 = { class: "sx-suggestions-filters__group-filters mb-3" }, M8 = {
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
    return (s, o) => (al(), Vg($g, null, [
      kg("div", F8, D8(e.filterGroup.label), 1),
      kg("div", N8, [
        (al(!0), Vg($g, null, P8(n(), (a) => (al(), B8(T8, {
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
}, Eg = window.Vue.computed, U8 = window.Vue.inject, Lg = window.Vue.ref, Ag = window.Vue.watch, xu = (e, t) => {
  const s = Lg([]), o = Lg(!1), a = Eg(
    () => s.value.slice(0, 4)
  ), r = U8("breakpoints"), l = Eg(() => r.value.mobile), d = yu(() => b(void 0, null, function* () {
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
  return Ag(t, u), Ag(e, u), {
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
const il = window.Vue.ref, Tg = window.Vue.watch, Dg = window.Vue.computed, { topics: I8, regions: R8 } = mw.loader.require(
  "ext.cx.articlefilters"
), z8 = I8.flatMap(
  (e) => e.topics.map((t) => Ke(ce({}, t), {
    groupId: e.groupId
  }))
), O8 = () => {
  const e = il(""), t = il("all"), n = il({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), s = ge(), { pageCollectionGroups: o } = gu(), { sourceLanguageURLParameter: a } = P(), r = (p) => (p = p.toLowerCase(), z8.filter(
    (m) => m.label.toLowerCase().includes(p)
  )), l = (p) => (p = p.toLowerCase(), Object.values(o.value).flat().filter(
    (h) => h.name.toLowerCase().includes(p)
  )), d = (p) => (p = p.toLowerCase(), R8.flatMap((m) => [m, ...m.countries]).filter(
    (m) => m.label.toLowerCase().includes(p)
  ).map((m) => ({
    label: m.label,
    id: m.id
  }))), u = Dg(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: c } = xu(
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
  }), Tg([e, t], () => b(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (p) => new Za({
        label: p.label,
        value: p.label,
        description: s.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? Oc : null,
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
        icon: t.value === "all" ? pu : null,
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
        icon: t.value === "all" ? Oc : null,
        filterType: ke,
        filterId: p.id
      })
    );
  }));
  const g = Dg(() => {
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
}, j8 = "suggestion_filter_topic_area", H8 = "suggestion_filter_search_result_seed", q8 = "suggestion_filter_collections", G8 = "suggestion_filter_previous_edits", X8 = "suggestion_filter_popular_articles", W8 = "suggestion_filter_region", rl = (e) => {
  if (e.type === We || e.type === ke || e.type === ee || e.type === yt)
    return e.id;
  if (e.id === ee)
    return "all-collections";
}, ll = (e) => {
  if (e.type === We)
    return j8;
  if (e.type === ke)
    return W8;
  if (e.type === yt)
    return H8;
  if (e.id === ee || e.type === ee)
    return q8;
  if (e.id === nn)
    return G8;
  if (e.id === bn)
    return X8;
}, zf = () => {
  const e = Ct();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: ll(r),
      event_context: rl(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: ll(r),
      event_context: rl(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: ll(r),
      event_context: rl(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const ye = window.Vue.unref, ft = window.Vue.createVNode, At = window.Vue.withCtx, K8 = window.Vue.resolveDirective, Ht = window.Vue.createElementVNode, ks = window.Vue.withDirectives, Pg = window.Vue.toDisplayString, Y8 = window.Vue.createTextVNode, Q8 = window.Vue.vShow, Bg = window.Vue.isRef, Fg = window.Vue.renderList, Ng = window.Vue.Fragment, cn = window.Vue.openBlock, es = window.Vue.createElementBlock, J8 = window.Vue.withKeys, Mg = window.Vue.createCommentVNode, Ug = window.Vue.createBlock, Z8 = { class: "sx-suggestions-filters" }, e2 = { class: "mb-0" }, t2 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, n2 = { class: "mb-3" }, s2 = { class: "px-4 pb-4 pt-7" }, o2 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, a2 = ["onKeyup", "onClick"], i2 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, r2 = { class: "sx-suggestions-filters__search-results-pending" }, l2 = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, c2 = { class: "sx-suggestions-filters__search-results-empty-primary" }, u2 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, ei = window.Vue.ref, ts = window.Vue.computed, d2 = window.Vue.inject, g2 = window.Vue.watch, Ig = window.Codex.CdxButton, p2 = window.Codex.CdxIcon, m2 = window.Codex.CdxTextInput, h2 = window.Codex.CdxMenu, f2 = window.Codex.CdxTabs, w2 = window.Codex.CdxTab, v2 = {
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
    }, { allFilters: u, isFilterSelected: i, selectFilter: c, findSelectedFilter: g } = or(), p = (D) => D.flatMap((M) => u.value.filter((Q) => Q.type === M)).filter(Boolean), m = () => {
      E(), s("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: h,
      logSuggestionFiltersConfirm: f,
      logSuggestionFiltersSelect: v
    } = zf(), _ = () => {
      h(), m();
    }, C = () => {
      y.value && (f(y.value), c(y.value)), m();
    }, x = ei(!1), y = ei(null), E = () => {
      y.value = null, x.value = !1;
    }, S = (D) => {
      v(D), y.value = D, x.value = !0;
    }, F = (D) => y.value ? y.value.id === D.id && y.value.type === D.type : i(D), V = d2("breakpoints"), T = ts(() => V.value.mobile), { searchInput: R, searchScope: K, searchResults: ie, searchResultsLoading: te } = O8(), j = ts(
      () => y.value || g()
    ), W = ei(null);
    g2(W, () => {
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
      const Q = K8("i18n");
      return cn(), Ug(ye(bt), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: T.value,
        header: !1
      }, {
        default: At(() => [
          Ht("section", Z8, [
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
                    ft(ye(Ig), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": D.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: _
                    }, {
                      default: At(() => [
                        ft(ye(p2), { icon: ye(Qs) }, null, 8, ["icon"])
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
                    ks(Ht("h5", e2, null, 512), [
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
                    ks(ft(ye(Ig), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: C
                    }, {
                      default: At(() => [
                        Y8(Pg(D.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [Q8, x.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ht("div", t2, [
              ks(Ht("h5", n2, null, 512), [
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
            Ht("div", s2, [
              ft(ye(m2), {
                modelValue: ye(R),
                "onUpdate:modelValue": M[0] || (M[0] = (w) => Bg(R) ? R.value = w : null),
                role: "combobox",
                "aria-activedescendant": De.value,
                "aria-controls": "sx-suggestions-filters__search-results__menu",
                "aria-autocomplete": "none",
                placeholder: r.value.searchPlaceholder,
                "input-type": "search",
                "start-icon": ye(Oc),
                clearable: !!ye(R),
                onKeydown: Z
              }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
            ]),
            ft(ye(f2), {
              active: ye(K),
              "onUpdate:active": [
                M[2] || (M[2] = (w) => Bg(K) ? K.value = w : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: At(() => [
                (cn(!0), es(Ng, null, Fg(o.value, (w, B) => (cn(), Ug(ye(w2), {
                  key: B,
                  name: w.name,
                  label: w.label
                }, {
                  default: At(() => [
                    ye(R) ? (cn(), es("div", i2, [
                      ft(ye(h2), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (A) => tt(A, w.name),
                        selected: W.value,
                        "onUpdate:selected": M[1] || (M[1] = (A) => W.value = A),
                        "show-pending": ye(te),
                        expanded: "",
                        "menu-items": re.value
                      }, {
                        pending: At(() => [
                          ks(Ht("div", r2, null, 512), [
                            [Q, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": At(() => [
                          ye(te) ? Mg("", !0) : (cn(), es("div", l2, [
                            ks(Ht("span", c2, null, 512), [
                              [Q, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            ks(Ht("span", u2, null, 512), [
                              [Q, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (cn(), es("div", o2, [
                      (cn(!0), es(Ng, null, Fg(w.filterGroups, (A) => (cn(), es("div", {
                        key: A.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        ft(M8, {
                          "filter-group": A,
                          "tentatively-select-filter": S,
                          "is-selected": F,
                          limit: d(w.name, A.type) ? 4 : 0,
                          "get-sub-filter-config": (N) => l(N, w.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        d(w.name, A.type) ? (cn(), es("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: J8((N) => a(A.id), ["enter"]),
                          onClick: (N) => a(A.id)
                        }, [
                          Ht("span", null, Pg(D.$i18n(se[A.id])), 1)
                        ], 40, a2)) : Mg("", !0)
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
const ko = window.Vue.unref, ti = window.Vue.openBlock, Rg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const _2 = window.Vue.renderList, S2 = window.Vue.Fragment, zg = window.Vue.createElementBlock, y2 = window.Vue.normalizeClass, Og = window.Vue.createVNode, x2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, jg = window.Vue.ref;
window.Vue.computed;
const Hg = window.Vue.watch, b2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = ge(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: s } = zf(), {
      getFiltersSummary: o,
      selectFilter: a,
      isFilterSelected: r,
      waitingForPageCollectionsFetch: l,
      validateURLFilterWithCollections: d
    } = or(), u = jg(!1), i = () => {
      s(), u.value = !0;
    }, c = (p) => {
      n(p), a(p);
    }, g = jg(o());
    return Hg(u, (p) => {
      p || (g.value = o());
    }), Hg(l, (p) => {
      p || (d(), g.value = o());
    }), (p, m) => ko(l) ? (ti(), Rg(ko(dt), { key: 0 })) : (ti(), zg("div", x2, [
      (ti(!0), zg(S2, null, _2(g.value, (h) => (ti(), Rg(ds, {
        key: h.label,
        class: y2(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": ko(r)(h)
        }]),
        icon: h.icon,
        content: h.label,
        onClick: (f) => c(h)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Og(ds, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: ko(hu),
        content: ko(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: i
      }, null, 8, ["icon", "content"]),
      Og(v2, {
        modelValue: u.value,
        "onUpdate:modelValue": m[0] || (m[0] = (h) => u.value = h)
      }, null, 8, ["modelValue"])
    ]));
  }
}, $s = window.Vue.computed, qg = window.Vue.ref, C2 = window.Vue.watch, k2 = window.Vuex.useStore, $2 = () => {
  const e = k2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: a } = cu(), r = Ct(), l = $s(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), d = $s(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), u = qg(0), i = qg(0), { maxSuggestionsPerSlice: c } = e.state.suggestions, g = 4, p = $s(
    () => a(u.value)
  ), m = $s(
    () => o(i.value)
  ), h = () => {
    y(), V(), E(), T();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: v
  } = wu(), _ = (R) => R.length === c, C = $s(
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
    (!C.value || !K) && v();
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
  }, V = () => u.value = (u.value + 1) % g, T = () => i.value = (i.value + 1) % g;
  return C2(
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
    isCurrentPageSuggestionsSliceFull: C,
    isCurrentSectionSuggestionsSliceFull: x
  };
}, V2 = window.Vuex.useStore, bu = () => {
  const e = V2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = wu(), s = (u, i, c) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === u && g.targetLanguage === i && g.sourceTitle === c
  ), o = (u) => b(void 0, null, function* () {
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
    markFavoriteSuggestion: (u, i, c) => b(void 0, null, function* () {
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
}, E2 = "suggestion_no_seed", L2 = "suggestion_recent_edit", A2 = "suggestion_topic_area", T2 = "suggestion_search_result_seed", D2 = "suggestion_featured", P2 = "suggestion_collections", B2 = "suggestion_region", F2 = () => {
  const { currentSuggestionFilters: e } = P();
  return (t = null) => {
    const { type: n, id: s } = e.value;
    if (s === nn)
      return t ? L2 : E2;
    if (n === We)
      return A2;
    if (n === ke)
      return B2;
    if (n === yt)
      return T2;
    if (s === bn)
      return D2;
    if (s === ee || n === ee)
      return P2;
    const o = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${s}`
    );
    throw mw.errorLogger.logError(o, "error.contenttranslation"), o;
  };
};
const Gg = window.Vue.normalizeClass, N2 = window.Vue.resolveDirective, $o = window.Vue.createElementVNode, ni = window.Vue.withDirectives, fe = window.Vue.unref, st = window.Vue.openBlock, qt = window.Vue.createBlock, Tn = window.Vue.createCommentVNode, cl = window.Vue.createVNode, Vo = window.Vue.withCtx, Xg = window.Vue.renderList, Wg = window.Vue.Fragment, ul = window.Vue.createElementBlock, M2 = window.Vue.toDisplayString, U2 = window.Vue.createTextVNode, I2 = window.Vue.vShow, R2 = { class: "cx-suggestion-list" }, z2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, O2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, j2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Gt = window.Vue.computed, H2 = window.Vue.inject, q2 = window.Vue.ref, G2 = window.Codex.CdxButton, X2 = window.Codex.CdxIcon, W2 = window.Vuex.useStore, K2 = {
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
    } = P(), { supportedSourceLanguageCodes: o, supportedTargetLanguageCodes: a } = wa(), r = of(), l = (Z) => r(Z, n.value), d = (Z) => r(t.value, Z), u = F2(), i = ya(), c = (Z) => {
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
      isCurrentPageSuggestionsSliceFull: C,
      isCurrentSectionSuggestionsSliceFull: x
    } = $2(), y = q2(null), E = Ct(), S = () => {
      E({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), y.value && y.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: F, markFavoritePageSuggestion: V } = bu(), T = H2("breakpoints"), R = Gt(() => T.value.mobile), K = Gt(
      () => R.value ? null : "pb-2 flex justify-between items-center"
    ), ie = W2(), te = Gt(
      () => ie.state.suggestions.isPageSuggestionsFetchPending
    ), j = Gt(
      () => ie.state.suggestions.isSectionSuggestionsFetchPending
    ), W = Gt(
      () => te.value || v.value && !C.value
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
      const D = N2("i18n");
      return ni((st(), ul("div", R2, [
        cl(fe(Je), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: Vo(() => [
            $o("div", {
              class: Gg(["cx-suggestion-list__header-card__header px-4", K.value])
            }, [
              ni($o("h3", {
                class: Gg(["mw-ui-card__title mb-0", { "py-3": R.value }])
              }, null, 2), [
                [D, void 0, "cx-suggestionlist-title"]
              ]),
              R.value ? Tn("", !0) : (st(), qt(Xi, {
                key: 0,
                "source-languages": fe(o),
                "target-languages": fe(a),
                "selected-source-language": fe(t),
                "selected-target-language": fe(n),
                "onUpdate:selectedSourceLanguage": l,
                "onUpdate:selectedTargetLanguage": d
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            cl(b2)
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
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : Tn("", !0)
          ]),
          _: 1
        }),
        $e.value ? (st(), qt(fe(Je), {
          key: 0,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: Vo(() => [
            ni($o("h5", z2, null, 512), [
              [D, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (st(!0), ul(Wg, null, Xg(fe(p), (M, Q) => (st(), qt(Qc, {
              key: `section-suggestion-${Q}`,
              class: "ma-0",
              suggestion: M,
              onClose: (w) => fe(h)(M),
              onClick: (w) => c(M),
              onBookmark: (w) => fe(F)(M)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            se.value ? (st(), qt(fe(dt), { key: 0 })) : Tn("", !0)
          ]),
          _: 1
        })) : Tn("", !0),
        re.value ? (st(), qt(fe(Je), {
          key: 1,
          ref_key: "pageSuggestionsList",
          ref: y,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: Vo(() => [
            ni($o("h5", O2, null, 512), [
              [D, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (st(!0), ul(Wg, null, Xg(fe(g), (M, Q) => (st(), qt(Qc, {
              key: `page-suggestion-${Q}`,
              suggestion: M,
              onClose: (w) => fe(m)(M),
              onClick: (w) => c(M),
              onBookmark: (w) => fe(V)(M)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            W.value ? (st(), qt(fe(dt), { key: 0 })) : Tn("", !0)
          ]),
          _: 1
        }, 512)) : Tn("", !0),
        Fe.value ? (st(), qt(Rf, {
          key: 2,
          title: Z.$i18n("cx-sx-suggestion-list-empty-title"),
          description: Z.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : Tn("", !0),
        $o("div", j2, [
          De.value ? (st(), qt(fe(G2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: S
          }, {
            default: Vo(() => [
              cl(fe(X2), {
                class: "me-1",
                icon: fe(Zh)
              }, null, 8, ["icon"]),
              U2(" " + M2(Z.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Tn("", !0)
        ])
      ], 512)), [
        [I2, e.active]
      ]);
    };
  }
}, Y2 = window.Vue.resolveDirective, Q2 = window.Vue.createElementVNode, J2 = window.Vue.withDirectives, Z2 = window.Vue.renderList, e$ = window.Vue.Fragment, dl = window.Vue.openBlock, t$ = window.Vue.createElementBlock, Kg = window.Vue.unref, Yg = window.Vue.createBlock, Qg = window.Vue.withCtx, n$ = window.Vue.createCommentVNode, s$ = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, o$ = window.Vue.computed, a$ = window.Vuex.useStore, i$ = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = a$(), n = o$(() => t.state.suggestions.favorites || []), s = ya(), o = (r) => s(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = bu();
    return (r, l) => {
      const d = Y2("i18n");
      return n.value.length ? (dl(), Yg(Kg(Je), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Qg(() => [
          J2(Q2("h3", s$, null, 512), [
            [d, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Qg(() => [
          (dl(!0), t$(e$, null, Z2(n.value, (u, i) => (dl(), Yg(Qc, {
            key: `favorite-${i}`,
            suggestion: u,
            onClick: (c) => o(u),
            onBookmark: (c) => Kg(a)(u)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : n$("", !0);
    };
  }
};
const r$ = window.Vue.resolveDirective, Eo = window.Vue.createElementVNode, l$ = window.Vue.withDirectives, c$ = window.Vue.renderList, u$ = window.Vue.Fragment, Jg = window.Vue.openBlock, Zg = window.Vue.createElementBlock, d$ = window.Vue.unref, g$ = window.Vue.createVNode, p$ = window.Vue.toDisplayString, m$ = { class: "cx-help-panel pa-4" }, h$ = { class: "cx-help-panel__item-list mt-6 ps-2" }, f$ = ["href", "target"], w$ = ["textContent"], v$ = window.Codex.CdxIcon, _$ = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = ge(), n = [
      {
        icon: wy,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: py,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (s, o) => {
      const a = r$("i18n");
      return Jg(), Zg("div", m$, [
        l$(Eo("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Eo("ul", h$, [
          (Jg(), Zg(u$, null, c$(n, (r, l) => Eo("li", {
            key: l,
            class: "mt-4"
          }, [
            Eo("a", {
              href: r.href,
              target: r.target
            }, [
              g$(d$(v$), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Eo("span", {
                textContent: p$(r.label)
              }, null, 8, w$)
            ], 8, f$)
          ])), 64))
        ])
      ]);
    };
  }
};
const S$ = window.Vue.resolveDirective, Dn = window.Vue.createElementVNode, gl = window.Vue.withDirectives, pl = window.Vue.toDisplayString, si = window.Vue.unref, ml = window.Vue.withCtx, oi = window.Vue.createVNode, y$ = window.Vue.openBlock, x$ = window.Vue.createElementBlock, b$ = { class: "cx-stats-panel pa-4" }, C$ = ["textContent"], k$ = { class: "cx-stats-panel__monthly-stats-label" }, $$ = ["textContent"], V$ = { class: "cx-stats-panel__total-stats-label" }, E$ = ["href", "target"], L$ = ["textContent"], A$ = window.Codex.CdxIcon, T$ = window.Vue.ref, ep = window.Vue.computed, D$ = window.Vue.watch, P$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = ge(), n = e, s = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = ep(() => {
      var u, i;
      const d = ((i = (u = n.stats) == null ? void 0 : u[s]) == null ? void 0 : i.count) || 0;
      return mw.language.convertNumber(d);
    }), a = ep(() => {
      var u, i;
      const d = ((i = (u = n.stats) == null ? void 0 : u[s]) == null ? void 0 : i.delta) || 0;
      return mw.language.convertNumber(d);
    }), r = T$(null), l = {
      icon: Qh,
      label: t.i18n("cx-sx-dashboard-stats-panel-all-stats-label"),
      href: "https://superset.wmcloud.org/superset/dashboard/p/X61GbQpZ5Rb/",
      target: "_blank"
    };
    return D$(
      () => n.stats,
      () => {
        const d = n.stats, u = r.value.getContext("2d"), i = Object.keys(n.stats || {}).sort(), c = i.reduce(
          (E, S) => Math.max(E, d[S].delta),
          0
        ), g = i.map((E) => d[E].delta), p = r.value.getBoundingClientRect().width, m = r.value.getBoundingClientRect().height;
        r.value.width = p, r.value.height = m;
        const h = 4, f = 6, v = 50, _ = (v - h) / c;
        let C = h;
        const x = Math.floor(
          (p - h) / (f + h)
        ), y = g.slice(
          Math.max(g.length - x, 0)
        );
        y.forEach((E, S) => {
          S === y.length - 1 && (u.fillStyle = "#36c");
          const F = v - E * _;
          u.fillRect(C, F, f, E * _), C += f + h;
        });
      }
    ), (d, u) => {
      const i = S$("i18n");
      return y$(), x$("div", b$, [
        gl(Dn("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        oi(si(U), null, {
          default: ml(() => [
            oi(si(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: ml(() => [
                Dn("h3", {
                  textContent: pl(a.value)
                }, null, 8, C$),
                gl(Dn("h5", k$, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            oi(si(k), { class: "cx-stats-panel__total-stats" }, {
              default: ml(() => [
                Dn("h3", {
                  textContent: pl(o.value)
                }, null, 8, $$),
                gl(Dn("h5", V$, null, 512), [
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
          oi(si(A$), {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          Dn("span", {
            textContent: pl(l.label)
          }, null, 8, L$)
        ], 8, E$)
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
const B$ = window.Vue.renderSlot, F$ = window.Vue.unref, N$ = window.Vue.createVNode, M$ = window.Vue.createElementVNode, U$ = window.Vue.openBlock, I$ = window.Vue.createElementBlock, R$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, z$ = { class: "col-12 ma-0 pa-0" }, O$ = {
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
    return (a, r) => (U$(), I$("footer", R$, [
      M$("div", z$, [
        B$(a.$slots, "default", {}, () => [
          N$(F$(ma), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: o
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, j$ = window.Vuex.useStore, H$ = () => {
  const e = j$(), t = Ks();
  return () => b(void 0, null, function* () {
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
}, q$ = window.Vuex.useStore, jf = () => {
  const e = q$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a
  } = P(), { isDefaultFilter: r } = tu(), { previousRoute: l } = Ae(e), d = Ct(), u = () => {
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
}, tp = window.Vue.computed, G$ = window.Vuex.useStore, Te = () => {
  const e = G$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s,
    sectionURLParameter: o
  } = P(), a = tp(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      s.value
    )
  ), r = tp(
    () => {
      var l;
      return !!((l = a.value) != null && l.presentSections.hasOwnProperty(
        o.value
      ));
    }
  );
  return { sectionSuggestion: a, isCurrentSectionPresent: r };
}, X$ = window.Vue.ref, ai = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, hl = X$(null), zt = () => {
  const { isCurrentSectionPresent: e } = Te(), t = () => {
    e.value ? s(ai.EXPAND) : s(ai.NEW_SECTION);
  }, n = () => {
    hl.value = null;
  }, s = (o) => {
    if (!Object.values(ai).includes(o))
      throw new Error("[CX] Invalid publishing target used");
    hl.value = o;
  };
  return {
    target: hl,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: s,
    PUBLISHING_TARGETS: ai
  };
}, W$ = window.Vue.watch, K$ = () => {
  const { fetchAllTranslations: e } = Js(), t = nf(), n = H$(), { fetchPageCollectionGroups: s } = gu(), { logDashboardOpenEvent: o } = jf(), { applicationLanguagesInitialized: a } = af(), { clearPublishTarget: r } = zt();
  return () => b(void 0, null, function* () {
    s(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), W$(
      a,
      () => {
        a.value && (o(), t());
      },
      { immediate: !0 }
    );
  });
}, np = window.Vue.computed, Y$ = window.Vue.ref, Q$ = window.Vue.watch, J$ = window.Vue.watchEffect, Z$ = window.Vuex.useStore, eV = ["suggestions", "draft", "published"], tV = () => {
  const e = Z$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = P(), { translationsFetched: s } = Js(), o = Y$(null);
  if (eV.includes(t.value))
    o.value = t.value;
  else {
    const a = np(
      () => s.value.draft
    ), r = np(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? o.value = r.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", Q$(a, (l) => {
      l && (o.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return J$(() => {
    n(o.value), window.scrollTo(0, 0);
  }), o;
}, nV = window.Vue.computed, sV = () => {
  const e = ge();
  return nV(() => [
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
const xe = window.Vue.unref, Me = window.Vue.createVNode, oV = window.Vue.toDisplayString, aV = window.Vue.createTextVNode, un = window.Vue.withCtx, fl = window.Vue.openBlock, sp = window.Vue.createBlock, op = window.Vue.createCommentVNode, iV = window.Vue.vShow, rV = window.Vue.withDirectives, lV = window.Vue.isRef, cV = window.Vue.createElementBlock, ap = window.Vue.computed, uV = window.Vue.inject, dV = window.Vuex.useStore, gV = window.Codex.CdxButton, pV = window.Codex.CdxIcon, mV = {
  __name: "CXDashboard",
  setup(e) {
    const t = et(), n = Ct(), s = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    K$()();
    const a = dV();
    a.dispatch("translator/fetchTranslatorStats");
    const r = ap(() => a.state.translator.translatorStats), l = tV(), d = sV(), u = Of(), i = (p) => {
      u(p), l.value = p;
    }, c = uV("breakpoints"), g = ap(() => c.value.mobile);
    return mw.cx.eventlogging.stats.dashboardAccess(g.value), (p, m) => (fl(), cV("div", null, [
      Me(xe(U), { class: "ma-0 pb-4" }, {
        default: un(() => [
          Me(xe(gV), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: s
          }, {
            default: un(() => [
              Me(xe(pV), {
                class: "me-1",
                icon: xe(Gh)
              }, null, 8, ["icon"]),
              aV(" " + oV(p.$i18n("cx-create-new-translation")), 1)
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
          p.$mwui.breakpoint.tabletAndUp ? (fl(), sp(xe(k), {
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
          })) : op("", !0),
          Me(xe(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: un(() => [
              rV(Me(i$, null, null, 512), [
                [iV, xe(l) === "suggestions"]
              ]),
              Me(K2, {
                active: xe(l) === "suggestions"
              }, null, 8, ["active"]),
              Me(fg, {
                "translation-status": "draft",
                "active-status": xe(l)
              }, null, 8, ["active-status"]),
              Me(fg, {
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
                      Me(P$, { stats: r.value }, null, 8, ["stats"])
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
                      Me(_$)
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
      p.$mwui.breakpoint.mobile ? (fl(), sp(O$, {
        key: 0,
        active: xe(l),
        "onUpdate:active": m[0] || (m[0] = (h) => lV(l) ? l.value = h : null),
        items: xe(d)
      }, null, 8, ["active", "items"])) : op("", !0)
    ]));
  }
}, hV = {
  name: "DashboardView",
  components: { CxDashboard: mV }
}, fV = window.Vue.resolveComponent, wV = window.Vue.createVNode, vV = window.Vue.openBlock, _V = window.Vue.createElementBlock, SV = { class: "cx-translation-dashboard" };
function yV(e, t, n, s, o, a) {
  const r = fV("cx-dashboard");
  return vV(), _V("main", SV, [
    wV(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const ip = /* @__PURE__ */ de(hV, [["render", yV]]), xV = window.Vuex.useStore, bV = window.Vue.computed, Ot = () => {
  const e = xV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: s,
    pageURLParameter: o
  } = P();
  return { currentTranslation: bV(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === o.value && r.sectionTitleMatches(s.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, Vs = window.Vue.computed, CV = () => {
  const { sectionSuggestion: e } = Te(), { targetLanguageURLParameter: t } = P(), { currentTranslation: n } = Ot(), s = Vs(
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
function kV(e) {
  return e.$el = $(e), e;
}
function $V(e, t, n, s) {
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
function VV() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function EV(e, t) {
  return b(this, null, function* () {
    yield Cu(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = kV(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const LV = window.Vue.computed, AV = window.Vue.onMounted, TV = window.Vue.ref;
function DV(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const PV = {
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
    const n = TV(null);
    let s = null;
    const o = LV(
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
    return AV(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = DV;
      const i = yield EV(d, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), s = $V(
        i,
        e.content,
        e.language,
        e.dir
      );
      const c = ve.ui.contextItemFactory.lookup("reference");
      c.prototype.getRendering = VV, s.focus();
    })), { sxeditor: n };
  }
}, Hi = window.Vue.createElementVNode, BV = window.Vue.openBlock, FV = window.Vue.createElementBlock, NV = ["lang", "dir"], MV = /* @__PURE__ */ Hi("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ Hi("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ Hi("div", { class: "toolbar" })
  ])
], -1), UV = ["lang", "dir"];
function IV(e, t, n, s, o, a) {
  return BV(), FV("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    MV,
    Hi("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, UV)
  ], 8, NV);
}
const RV = /* @__PURE__ */ de(PV, [["render", IV]]);
function Cu() {
  return mw.loader.using("mw.cx3.ve");
}
const zV = window.Vuex.useStore, OV = () => {
  const e = zV();
  return (t, n) => b(void 0, null, function* () {
    const s = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!s)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Cu(), new Promise((o) => {
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
}, jV = window.Vuex.useStore, Hf = () => {
  const e = jV();
  return (t, n, s, o = null) => b(void 0, null, function* () {
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
}, wl = window.Vue.computed, HV = window.Vuex.useStore, pt = () => {
  const e = HV(), { sectionSuggestion: t } = Te(), { currentTranslation: n } = Ot(), {
    sourceLanguageURLParameter: s,
    pageURLParameter: o,
    targetLanguageURLParameter: a
  } = P(), r = wl(
    () => e.getters["mediawiki/getPage"](
      s.value,
      o.value
    )
  ), l = wl(
    () => {
      var u, i;
      return ((u = t.value) == null ? void 0 : u.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    }
  ), d = wl(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: r, currentTargetPage: d, currentTargetPageTitle: l };
}, cr = () => {
  const { currentSourcePage: e } = pt(), t = OV(), n = Hf(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = P(), d = (c, g) => b(void 0, null, function* () {
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
}, qV = window.Vuex.useStore, Zs = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: s,
    isQuickTutorialForced: o
  } = P(), a = qV(), r = et(), l = () => {
    const c = r.currentRoute.value.name !== "sx-quick-tutorial" && (o() || !a.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return r.getRoutes().find((g) => g.name === c);
  }, d = () => {
    const i = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), c = Y.getCurrentWikiLanguageCode();
    if (!i || t.value === c)
      return !1;
    const g = s.value ? { section: s.value } : {}, p = Y.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      g
    );
    return location.href = p + "#" + l().path, !0;
  }, u = () => {
    location.href = Y.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      s.value ? { sourcesection: s.value } : {}
    );
  };
  return () => {
    if (Y.setCXToken(
      e.value,
      t.value,
      n.value
    ), xn) {
      u();
      return;
    }
    if (d())
      return;
    const c = l();
    r.push({ name: c.name });
  };
}, rp = window.Vue.computed, GV = window.Vue.ref, XV = window.Vue.watchEffect, vl = /* @__PURE__ */ new Map(), WV = (e, t) => b(void 0, null, function* () {
  return (yield me.fetchArticleSections(
    e,
    t
  )).sections.filter(
    (o) => o.level === "2"
  )[0].byteoffset;
}), KV = (e, t) => {
  const n = `${e}:${t}`;
  if (vl.has(n))
    return vl.get(n);
  const s = WV(e, t);
  return vl.set(n, s), s;
}, qf = () => {
  const { currentSourcePage: e } = pt(), { sectionSuggestion: t } = Te(), { sectionURLParameter: n } = P(), s = GV(null);
  XV(() => b(void 0, null, function* () {
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
      s.value = yield KV(l, d);
    } else
      s.value = ((r = e.value) == null ? void 0 : r.articleSize) || null;
  }));
  const o = rp(() => s.value ? !t.value && xn ? Rh(s.value) : zh(s.value) : ut.unknown);
  return { isQuickTranslation: rp(() => o.value === ut.stub || o.value === ut.easy), difficulty: o, sizeInBytes: s };
}, ku = () => {
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
      return Yc.value && (l.event_context = Yc.value), s.value ? (l.translation_source_section = s.value, l.translation_type = "section") : l.translation_type = "article", o(l);
    }
  };
}, $u = () => {
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
}, YV = window.Vue.ref, QV = () => {
  const e = et(), { logDashboardTranslationStartEvent: t } = ku(), n = $u(), s = Zs(), { sectionURLParameter: o } = P(), { targetPageExists: a } = kn(), { selectPageSectionByTitle: r } = cr(), l = () => b(void 0, null, function* () {
    yield r(o.value), e.push({ name: "sx-content-comparator" });
  }), d = YV(!1), { currentTranslation: u } = Ot();
  return {
    handlePrimaryButtonClick: () => {
      u.value ? u.value.isArticleTranslation && !xn ? d.value = !0 : (n(), s()) : o.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), s());
    },
    translationConfirmationDialogOn: d
  };
};
const JV = window.Vue.resolveDirective, lp = window.Vue.createElementVNode, cp = window.Vue.withDirectives, ZV = window.Vue.unref, eE = window.Vue.withCtx, tE = window.Vue.openBlock, nE = window.Vue.createBlock, sE = {
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
      const c = JV("i18n");
      return tE(), nE(ZV(oE), {
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
        default: eE(() => [
          cp(lp("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          cp(lp("a", sE, null, 512), [
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
  } = P(), o = ar();
  return () => b(void 0, null, function* () {
    const a = yield o(
      t.value,
      n.value,
      s.value
    );
    return a instanceof en ? a.sourceSections.includes(e.value) : !1;
  });
};
const we = window.Vue.unref, rE = window.Vue.resolveDirective, Lo = window.Vue.createElementVNode, up = window.Vue.withDirectives, Ao = window.Vue.openBlock, _l = window.Vue.createElementBlock, Sl = window.Vue.createCommentVNode, wt = window.Vue.createVNode, Tt = window.Vue.withCtx, yl = window.Vue.toDisplayString, xl = window.Vue.createTextVNode, lE = window.Vue.withModifiers, dp = window.Vue.createBlock, cE = window.Vue.Fragment, uE = { class: "sx-translation-confirmer-body pb-4" }, dE = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, gE = ["innerHTML"], pE = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, mE = ["href"], hE = ["innerHTML"], bl = window.Vue.computed, Cl = window.Vue.ref, fE = window.Vue.watchEffect, wE = window.Vuex.useStore, kl = window.Codex.CdxButton, vE = window.Codex.CdxIcon, _E = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = et(), s = wE(), { sectionSuggestion: o } = Te(), { targetLanguageAutonym: a } = Ae(s), { sectionURLParameter: r, clearSectionURLParameter: l } = P(), { logDashboardTranslationStartEvent: d } = ku(), u = Zs(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: c } = QV(), g = Cl(!1), p = Cl(null), m = () => b(this, null, function* () {
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
    }), h = () => b(this, null, function* () {
      yield m(), !g.value && (d(), u());
    }), f = () => b(this, null, function* () {
      yield m(), !g.value && i();
    }), v = t;
    fE(() => {
      c.value && (v("open-translation-confirmation-dialog"), c.value = !1);
    });
    const {
      actionInformationMessage: _,
      getActionButtonLabel: C,
      isProgressiveButton: x,
      targetArticlePath: y
    } = CV(), E = ge(), S = bl(
      () => E.i18n(C(!!r.value))
    ), F = () => b(this, null, function* () {
      yield m(), !g.value && n.push({ name: "sx-section-selector" });
    }), V = bl(() => {
      var te, j;
      return r.value && !!((j = (te = o.value) == null ? void 0 : te.sourceSections) != null && j.length);
    }), { targetPageExists: T } = kn(), R = bl(() => !r.value && T.value && xn), K = iE(), ie = Cl(!1);
    return K().then((te) => {
      te || l(), ie.value = !0;
    }), (te, j) => {
      const W = rE("i18n");
      return Ao(), _l(cE, null, [
        Lo("section", uE, [
          we(r) && ie.value ? (Ao(), _l("section", dE, [
            up(Lo("h6", null, null, 512), [
              [W, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Lo("h5", {
              class: "ma-0",
              innerHTML: we(r)
            }, null, 8, gE)
          ])) : we(T) && !we(r) ? (Ao(), _l("section", pE, [
            wt(we(U), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Tt(() => [
                up(wt(we(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [W, [we(a)], "cx-sx-existing-translation-status"]
                ]),
                wt(we(k), { shrink: "" }, {
                  default: Tt(() => [
                    Lo("a", {
                      href: we(y),
                      target: "_blank"
                    }, [
                      wt(we(vE), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: we(sr)
                      }, null, 8, ["icon"])
                    ], 8, mE)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            wt(we(U), { class: "ma-0" }, {
              default: Tt(() => [
                wt(we(k), null, {
                  default: Tt(() => [
                    Lo("span", { innerHTML: we(_) }, null, 8, hE)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Sl("", !0),
          wt(we(U), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Tt(() => [
              V.value ? (Ao(), dp(we(k), {
                key: 0,
                shrink: ""
              }, {
                default: Tt(() => [
                  wt(we(kl), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: lE(F, ["stop"])
                  }, {
                    default: Tt(() => [
                      xl(yl(te.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Sl("", !0),
              R.value ? (Ao(), dp(we(k), {
                key: 1,
                shrink: ""
              }, {
                default: Tt(() => [
                  wt(we(kl), {
                    size: "large",
                    onClick: h
                  }, {
                    default: Tt(() => [
                      xl(yl(te.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Sl("", !0),
              wt(we(k), { shrink: "" }, {
                default: Tt(() => [
                  wt(we(kl), {
                    weight: "primary",
                    size: "large",
                    action: we(x) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: Tt(() => [
                      xl(yl(S.value), 1)
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
const $l = window.Vue.unref, SE = window.Vue.openBlock, yE = window.Vue.createBlock, xE = window.Vue.computed, Gf = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = wa(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: s
    } = P(), { currentLanguageTitleGroup: o } = kn(), a = xE(
      () => {
        var u;
        return ((u = o.value) == null ? void 0 : u.titles.map((i) => i.lang)) || [];
      }
    ), r = jy(), l = (u) => r(u, s.value), d = (u) => r(n.value, u);
    return (u, i) => (SE(), yE(Xi, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": $l(t),
      "selected-source-language": $l(n),
      "selected-target-language": $l(s),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": d
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, bE = (e) => {
  const o = e / 5 / 15;
  return Math.ceil(o);
};
const Pe = window.Vue.unref, Vl = window.Vue.toDisplayString, Pn = window.Vue.createElementVNode, Xt = window.Vue.createVNode, Es = window.Vue.withCtx, CE = window.Vue.resolveDirective, kE = window.Vue.withDirectives, $E = window.Vue.normalizeClass, gp = window.Vue.openBlock, VE = window.Vue.createElementBlock, EE = window.Vue.createCommentVNode, LE = window.Vue.createBlock, AE = ["textContent"], TE = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, DE = ["textContent"], PE = { class: "pe-3" }, BE = ["textContent"], FE = window.Codex.CdxButton, To = window.Codex.CdxIcon, Bn = window.Vue.computed, NE = window.Vuex.useStore, ME = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = NE(), { currentSourcePage: n } = pt(), { sectionSuggestion: s } = Te(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l
    } = P(), d = Bn(() => t.state.suggestions.favorites || []), u = Bn(
      () => d.value.some(
        (F) => r.value === F.title && o.value === F.sourceLanguage && a.value === F.targetLanguage
      )
    ), { markFavoriteSuggestion: i, removeFavoriteSuggestion: c } = bu(), g = () => i(
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
      for (let T = 0; T < V.length; T++)
        if (F >= V[T].value)
          return (F / V[T].value).toFixed(1).replace(/\.0$/, "") + V[T].suffix;
      return F.toString();
    }, C = Bn(() => {
      var V;
      const F = Object.values(((V = n.value) == null ? void 0 : V.pageviews) || {}).reduce(
        (T, R) => T + R,
        0
      );
      return _(F);
    }), { isQuickTranslation: x, sizeInBytes: y } = qf(), E = ge(), S = Bn(() => {
      if (!s.value && !n.value || !y.value)
        return "";
      const F = bE(y.value), V = F >= 60 ? F / 60 : 0, T = Math.round(V * 2) / 2;
      if (!s.value && xn)
        return E.i18n(
          "cx-sx-translation-confirmer-translation-time-whole-article",
          T,
          F
        );
      if (s.value) {
        if (l.value)
          return E.i18n(
            "cx-sx-translation-confirmer-translation-time-single-section",
            T,
            F
          );
      } else
        return E.i18n(
          "cx-sx-translation-confirmer-translation-time-lead-section",
          T,
          F
        );
      return E.i18n(
        "cx-sx-translation-confirmer-translation-time-sections",
        T,
        F,
        Object.keys(s.value.missingSections).length
      );
    });
    return (F, V) => {
      const T = CE("i18n");
      return gp(), LE(Pe(U), {
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
                        textContent: Vl(Pe(r))
                      }, null, 8, AE),
                      Xt(Pe(To), {
                        size: "x-small",
                        icon: Pe(sr)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Xt(Pe(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Es(() => [
                      Xt(Pe(FE), {
                        class: "px-0",
                        weight: "quiet",
                        action: u.value ? "progressive" : "default",
                        "aria-label": F.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: Es(() => [
                          Xt(Pe(To), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Pn("div", TE, [
                Pn("div", null, [
                  Pn("span", null, [
                    Xt(Pe(To), {
                      icon: Pe(Jh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Pn("span", {
                      class: "pe-3",
                      textContent: Vl(v.value)
                    }, null, 8, DE)
                  ]),
                  Pn("span", null, [
                    Xt(Pe(To), {
                      icon: Pe(Qh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    kE(Pn("span", PE, null, 512), [
                      [T, [C.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                S.value ? (gp(), VE("span", {
                  key: 0,
                  class: $E(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Pe(x)
                  }])
                }, [
                  Xt(Pe(To), {
                    icon: Pe(uy),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Pn("span", {
                    textContent: Vl(S.value)
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
const UE = window.Vue.resolveDirective, ns = window.Vue.createElementVNode, ii = window.Vue.withDirectives, IE = window.Vue.toDisplayString, RE = window.Vue.createTextVNode, El = window.Vue.unref, Ll = window.Vue.withCtx, Al = window.Vue.openBlock, Tl = window.Vue.createBlock;
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
    const n = t, s = () => n("update:modelValue", !1), o = Zs(), a = $u(), r = HE(!1), { currentTranslation: l } = Ot(), d = () => b(this, null, function* () {
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
      const c = UE("i18n");
      return Al(), Tl(El(bt), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: u.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: s
      }, {
        footer: Ll(() => [
          ns("div", OE, [
            r.value ? (Al(), Tl(El(dt), { key: 1 })) : (Al(), Tl(El(jE), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: d
            }, {
              default: Ll(() => [
                RE(IE(u.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: Ll(() => [
          ns("div", zE, [
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
}, GE = window.Vuex.useStore;
let ri = [];
const Vu = () => {
  const e = GE();
  return (t, n) => {
    const s = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || ri.includes(s) ? Promise.resolve() : (ri.push(s), ps.fetchLanguageTitles(t, n).then((o) => {
      ri = ri.filter(
        (a) => a !== s
      ), o && e.commit("mediawiki/addLanguageTitleGroup", o);
    }));
  };
}, XE = window.Vue.ref, Ls = XE(null), Xf = () => {
  const e = () => b(void 0, null, function* () {
    var n, s;
    Ls.value || (yield nr.fetchCXServerToken().then((o) => {
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
const pp = window.Vue.resolveDirective, li = window.Vue.createElementVNode, mp = window.Vue.withDirectives, Fn = window.Vue.unref, ci = window.Vue.withCtx, dn = window.Vue.createVNode, Dl = window.Vue.openBlock, hp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const WE = window.Vue.createBlock, KE = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, YE = { class: "mb-0" }, QE = { class: "sx-translation-confirmer__article-image flex justify-center" }, JE = ["src"], ZE = { class: "ma-3" }, fp = window.Vue.computed, e4 = window.Vue.inject, t4 = window.Vue.onBeforeUnmount, n4 = window.Vue.ref, s4 = window.Vuex.useStore, o4 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = s4(), { currentSourcePage: n } = pt(), { previousRoute: s } = Ae(t), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: d
    } = P(), u = e4("breakpoints"), i = fp(() => u.value.nextBreakpoint), c = fp(
      () => {
        var C;
        return (C = n.value) == null ? void 0 : C.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: g } = Js(), p = Vu();
    g("draft"), p(o.value, r.value), Cu(), Xf()(), tf()(a.value);
    const f = et(), v = () => {
      const C = ["dashboard", "sx-article-search"];
      !s.value || !C.includes(s.value) ? f.push({ name: "dashboard" }) : f.push({ name: s.value });
    };
    t4(() => {
      const C = f.currentRoute.value.name;
      (C === "dashboard" || C === "sx-article-search") && d();
    });
    const _ = n4(!1);
    return (C, x) => {
      const y = pp("i18n"), E = pp("i18n-html");
      return Dl(), hp("section", KE, [
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
                mp(li("h5", YE, null, 512), [
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
        li("div", QE, [
          c.value ? (Dl(), hp("img", {
            key: 0,
            src: c.value
          }, null, 8, JE)) : (Dl(), WE(Fn(Ze), {
            key: 1,
            size: "120",
            icon: Fn(mh),
            "icon-color": C.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        dn(ME),
        dn(Gf),
        dn(_E, {
          onOpenTranslationConfirmationDialog: x[0] || (x[0] = (S) => _.value = !0)
        }),
        dn(Fn(U), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: ci(() => [
            li("p", ZE, [
              mp(li("small", null, null, 512), [
                [E, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        dn(qE, {
          modelValue: _.value,
          "onUpdate:modelValue": x[1] || (x[1] = (S) => _.value = S)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const a4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: o4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, i4 = window.Vue.resolveComponent, r4 = window.Vue.createVNode, l4 = window.Vue.normalizeClass, c4 = window.Vue.openBlock, u4 = window.Vue.createElementBlock;
function d4(e, t, n, s, o, a) {
  const r = i4("sx-translation-confirmer");
  return c4(), u4("main", {
    class: l4(["sx-translation-confirmer-view", a.classes])
  }, [
    r4(r)
  ], 2);
}
const g4 = /* @__PURE__ */ de(a4, [["render", d4]]);
const p4 = window.Vue.toDisplayString, wp = window.Vue.unref, m4 = window.Vue.createVNode, h4 = window.Vue.createTextVNode, f4 = window.Vue.createElementVNode, w4 = window.Vue.openBlock, v4 = window.Vue.createElementBlock, _4 = { class: "sx-section-selector-view-article-item" }, S4 = ["href"], y4 = window.Codex.CdxIcon, vp = {
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
    return (t, n) => (w4(), v4("span", _4, [
      f4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        h4(p4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        m4(wp(y4), {
          size: "x-small",
          icon: wp(sr)
        }, null, 8, ["icon"])
      ], 8, S4)
    ]));
  }
};
const x4 = window.Vue.resolveDirective, ui = window.Vue.createElementVNode, Pl = window.Vue.withDirectives, ss = window.Vue.unref, b4 = window.Vue.toDisplayString, di = window.Vue.withCtx, Do = window.Vue.createVNode, C4 = window.Vue.openBlock, k4 = window.Vue.createElementBlock, $4 = { class: "sx-section-selector__header pa-4" }, V4 = { class: "sx-section-selector__header-text ma-0" }, E4 = ["textContent"], L4 = { class: "pt-0 ma-0" }, A4 = { class: "ma-0" }, T4 = window.Codex.CdxButton, D4 = window.Codex.CdxIcon, P4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Te();
    return (n, s) => {
      const o = x4("i18n");
      return C4(), k4("div", $4, [
        Do(ss(U), { class: "ma-0 pb-3" }, {
          default: di(() => [
            Do(ss(k), null, {
              default: di(() => {
                var a;
                return [
                  Pl(ui("h6", V4, null, 512), [
                    [o, void 0, "cx-sx-section-selector-title"]
                  ]),
                  ui("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: b4((a = ss(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, E4)
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
                    Do(ss(D4), { icon: ss(Qs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Pl(ui("h4", L4, null, 512), [
          [o, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Pl(ui("p", A4, null, 512), [
          [o, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, B4 = window.Vue.renderList, F4 = window.Vue.Fragment, Bl = window.Vue.openBlock, _p = window.Vue.createElementBlock, N4 = window.Vue.renderSlot, gi = window.Vue.unref, Sp = window.Vue.createVNode, yp = window.Vue.withCtx, M4 = window.Vue.createBlock, U4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, I4 = window.Codex.CdxButton, R4 = window.Codex.CdxIcon, Wf = {
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
    return (t, n) => (Bl(), _p("ul", U4, [
      (Bl(!0), _p(F4, null, B4(e.sections, (s) => (Bl(), M4(gi(U), {
        key: s.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: yp(() => [
          Sp(gi(I4), {
            weight: "quiet",
            class: "col justify-start items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (o) => t.$emit("select-section", s.sourceTitle)
          }, {
            default: yp(() => [
              N4(t.$slots, "default", {
                targetSection: s.targetTitle,
                sourceSection: s.sourceTitle,
                isEasy: s.isEasy
              }),
              Sp(gi(R4), {
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
}, z4 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const O4 = window.Vue.resolveDirective, pi = window.Vue.createElementVNode, mi = window.Vue.withDirectives, Dt = window.Vue.unref, hi = window.Vue.openBlock, Fl = window.Vue.createBlock, j4 = window.Vue.createCommentVNode, As = window.Vue.withCtx, Po = window.Vue.createVNode, H4 = window.Vue.toDisplayString, q4 = window.Vue.createTextVNode, G4 = window.Vue.createElementBlock, X4 = { class: "sx-section-selector__missing-sections py-2" }, W4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, K4 = ["lang", "dir", "innerHTML"], Nl = window.Vue.computed, Y4 = window.Codex.CdxButton, Q4 = window.Codex.CdxInfoChip, J4 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Te(), { targetLanguageURLParameter: n } = P(), s = Nl(() => I.getAutonym(n.value)), o = Nl(
      () => {
        var r;
        return Object.keys(((r = t.value) == null ? void 0 : r.missingSections) || {}).length === 0;
      }
    ), a = Nl(() => {
      var r;
      return (r = t.value) != null && r.orderedMissingSections ? t.value.orderedMissingSections.map((l) => Ke(ce({}, l), {
        isEasy: Oh(
          t.value.getSectionSize(l.sourceTitle)
        )
      })) : [];
    });
    return (r, l) => {
      const d = O4("i18n");
      return hi(), G4("section", X4, [
        mi(pi("h4", W4, null, 512), [
          [d, [
            s.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (hi(), Fl(Dt(U), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: As(() => [
            Po(Dt(k), {
              class: "py-6 justify-center",
              innerHTML: Dt(z4)
            }, null, 8, ["innerHTML"]),
            Po(Dt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: As(() => [
                mi(pi("h6", null, null, 512), [
                  [d, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Po(Dt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: As(() => [
                mi(pi("p", null, null, 512), [
                  [d, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Po(Dt(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: As(() => [
                Po(Dt(Y4), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: l[1] || (l[1] = (u) => r.$emit("close"))
                }, {
                  default: As(() => [
                    q4(H4(r.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (hi(), Fl(Wf, {
          key: 0,
          sections: a.value,
          onSelectSection: l[0] || (l[0] = (u) => r.$emit("select-section", u))
        }, {
          default: As(({ sourceSection: u, isEasy: i }) => {
            var c, g;
            return [
              pi("h5", {
                class: "ma-0",
                lang: (c = Dt(t)) == null ? void 0 : c.sourceLanguage,
                dir: Dt(I.getDir)((g = Dt(t)) == null ? void 0 : g.sourceLanguage),
                innerHTML: u
              }, null, 8, K4),
              i ? mi((hi(), Fl(Dt(Q4), {
                key: 0,
                class: "sx-section-selector__easy-section-badge"
              }, null, 512)), [
                [d, void 0, "cx-sx-section-selector-easy-section-badge"]
              ]) : j4("", !0)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const Z4 = window.Vue.resolveDirective, fi = window.Vue.createElementVNode, e3 = window.Vue.withDirectives, os = window.Vue.unref, t3 = window.Vue.withCtx, n3 = window.Vue.createVNode, s3 = window.Vue.openBlock, o3 = window.Vue.createElementBlock, a3 = { class: "sx-section-selector__present-sections py-2" }, i3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, r3 = { class: "sx-section-selector__present-section-button-content" }, l3 = ["lang", "dir", "innerHTML"], c3 = ["lang", "dir", "innerHTML"], u3 = window.Vue.computed, xp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Te(), { targetLanguageURLParameter: n } = P(), s = u3(() => I.getAutonym(n.value));
    return (o, a) => {
      var l;
      const r = Z4("i18n");
      return s3(), o3("section", a3, [
        e3(fi("h4", i3, null, 512), [
          [r, [
            s.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        n3(Wf, {
          sections: ((l = os(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[0] || (a[0] = (d) => o.$emit("select-section", d))
        }, {
          default: t3(({ sourceSection: d, targetSection: u }) => {
            var i, c, g, p;
            return [
              fi("div", r3, [
                fi("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = os(t)) == null ? void 0 : i.sourceLanguage,
                  dir: os(I.getDir)((c = os(t)) == null ? void 0 : c.sourceLanguage),
                  innerHTML: d
                }, null, 8, l3),
                fi("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = os(t)) == null ? void 0 : g.targetLanguage,
                  dir: os(I.getDir)((p = os(t)) == null ? void 0 : p.targetLanguage),
                  innerHTML: u
                }, null, 8, c3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Ue = window.Vue.createVNode, Ml = window.Vue.openBlock, bp = window.Vue.createBlock, Cp = window.Vue.createCommentVNode, d3 = window.Vue.resolveDirective, Nn = window.Vue.createElementVNode, Bo = window.Vue.withDirectives, ot = window.Vue.unref, gn = window.Vue.withCtx, g3 = window.Vue.normalizeClass, kp = window.Vue.toDisplayString, $p = window.Vue.createTextVNode, p3 = window.Vue.createElementBlock, m3 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, h3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, f3 = { class: "sx-section-selector__additional-consideration-title" }, w3 = { href: "#" }, v3 = { class: "sx-section-selector__additional-consideration-title" }, _3 = { href: "#" }, Fo = window.Vue.computed, S3 = window.Vue.inject, y3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = S3("breakpoints"), n = Fo(() => t.value.desktopAndUp), { sectionSuggestion: s } = Te(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = P(), d = Fo(() => I.getAutonym(o.value)), u = Fo(() => I.getAutonym(a.value)), i = Fo(
      () => {
        var C;
        return Y.getPageUrl(o.value, (C = s.value) == null ? void 0 : C.sourceTitle);
      }
    ), c = Fo(
      () => {
        var C;
        return Y.getPageUrl(a.value, (C = s.value) == null ? void 0 : C.targetTitle);
      }
    ), g = et(), p = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = Ot(), h = Zs(), f = $u(), { selectPageSectionByTitle: v } = cr(), _ = (C) => {
      l(C), m.value ? (f(), h()) : (v(C), g.push({ name: "sx-content-comparator" }));
    };
    return mw.cx.eventlogging.stats.selectSectionAccess(!n.value), (C, x) => {
      const y = d3("i18n");
      return Ml(), p3("section", m3, [
        Ue(P4, { onClose: p }),
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
                Ue(J4, {
                  onSelectSection: _,
                  onClose: p
                }),
                n.value ? Cp("", !0) : (Ml(), bp(xp, {
                  key: 0,
                  onSelectSection: _
                })),
                Nn("section", {
                  class: g3(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Bo(Nn("h4", h3, null, 512), [
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
                          Ue(vp, {
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
                          Ue(vp, {
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
                        Nn("h6", f3, [
                          Ue(ot(Ze), {
                            icon: ot(G0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          $p(" " + kp(C.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Bo(Nn("p", null, null, 512), [
                          [y, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Bo(Nn("a", w3, null, 512), [
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
                        Nn("h6", v3, [
                          Ue(ot(Ze), {
                            icon: ot(q0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          $p(" " + kp(C.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Bo(Nn("p", null, null, 512), [
                          [y, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Bo(Nn("a", _3, null, 512), [
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
            n.value ? (Ml(), bp(ot(k), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: gn(() => [
                Ue(xp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: _
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
}, x3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: y3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, b3 = window.Vue.resolveComponent, C3 = window.Vue.createVNode, k3 = window.Vue.normalizeClass, $3 = window.Vue.openBlock, V3 = window.Vue.createElementBlock;
function E3(e, t, n, s, o, a) {
  const r = b3("sx-section-selector");
  return $3(), V3("main", {
    class: k3(["sx-section-selector-view", a.classes])
  }, [
    C3(r)
  ], 2);
}
const L3 = /* @__PURE__ */ de(x3, [["render", E3]]), wi = window.Vue.computed, A3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = P(), n = wi(
    () => I.getAutonym(e.value)
  ), s = wi(
    () => I.getAutonym(t.value)
  ), { target: o, PUBLISHING_TARGETS: a } = zt(), r = wi(
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
const Vp = window.Vue.unref, T3 = window.Vue.createVNode, D3 = window.Vue.openBlock, P3 = window.Vue.createElementBlock, B3 = { class: "sx-content-comparator__content-type-selector" }, F3 = window.Vue.watchEffect, N3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = (r) => s("update:selection", r), a = A3();
    return F3(() => {
      a.value.map((l) => l.value).includes(n.selection) || o(a.value[0].value);
    }), (r, l) => (D3(), P3("div", B3, [
      T3(Vp(ma), {
        items: Vp(a),
        active: e.selection,
        onSelect: o
      }, null, 8, ["items", "active"])
    ]));
  }
}, No = window.Vue.computed, M3 = window.Vuex.useStore, ne = () => {
  const e = M3(), { currentSourcePage: t, currentTargetPageTitle: n } = pt(), { currentMTProvider: s } = Ae(e), { sectionURLParameter: o } = P(), a = No(() => {
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
}, Mo = window.Vue.computed, Eu = () => {
  const { currentTargetPage: e } = pt(), { sectionSuggestion: t } = Te(), { sectionURLParameter: n } = P(), s = Mo(
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
const vi = window.Vue.createVNode, U3 = window.Vue.createElementVNode, Mn = window.Vue.unref, _i = window.Vue.withCtx, Ul = window.Vue.openBlock, Il = window.Vue.createBlock;
window.Vue.createCommentVNode;
const I3 = window.Vue.normalizeClass, R3 = ["lang", "dir", "innerHTML"], Ep = window.Vue.ref, Si = window.Vue.computed, z3 = window.Vue.onMounted, O3 = {
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
    const n = e, s = t, o = Ep(!1), { sectionSuggestion: a } = Te(), { sectionURLParameter: r } = P(), l = Si(
      () => (c.value || "").replace(/ /g, "_")
    ), d = (h) => s("update:contentTypeSelection", h), { activeSectionTargetTitle: u, targetSectionAnchor: i } = Eu(), c = Si(
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
    ), m = Ep(null);
    return z3(() => {
      new IntersectionObserver(
        ([f]) => {
          o.value = f.intersectionRect.height < f.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(m.value.$el);
    }), (h, f) => (Ul(), Il(Mn(U), {
      ref_key: "contentHeader",
      ref: m,
      class: I3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.value }]),
      direction: "column",
      align: "stretch",
      reverse: o.value
    }, {
      default: _i(() => [
        vi(N3, {
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
                U3("h3", {
                  lang: g.value.lang,
                  dir: g.value.dir,
                  class: "ma-0 pa-0",
                  innerHTML: g.value.title
                }, null, 8, R3)
              ]),
              _: 1
            }),
            vi(Mn(k), { shrink: "" }, {
              default: _i(() => [
                o.value ? (Ul(), Il(Mn(Xe), {
                  key: 0,
                  icon: Mn(Ki),
                  progressive: "",
                  label: h.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: f[0] || (f[0] = (v) => h.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Ul(), Il(Mn(Xe), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: Mn(ph),
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
}, yi = window.Vue.unref, Lp = window.Vue.createVNode, j3 = window.Vue.openBlock, H3 = window.Vue.createElementBlock, q3 = { class: "sx-content-comparator__header-navigation flex items-center" }, G3 = window.Vue.computed, X3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = P(), s = G3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: o } = cr(), a = () => {
      const l = (s.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, d = t.sectionSourceTitles[l];
      o(d);
    }, r = () => {
      const l = (s.value + 1) % t.sectionSourceTitles.length, d = t.sectionSourceTitles[l];
      o(d);
    };
    return (l, d) => (j3(), H3("div", q3, [
      Lp(yi(Xe), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: yi(z0),
        onClick: a
      }, null, 8, ["icon"]),
      Lp(yi(Xe), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: yi(R0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const Ap = window.Vue.toDisplayString, be = window.Vue.unref, W3 = window.Vue.resolveDirective, Rl = window.Vue.withDirectives, Ts = window.Vue.openBlock, xi = window.Vue.createElementBlock, K3 = window.Vue.createCommentVNode, Y3 = window.Vue.createTextVNode, Tp = window.Vue.createElementVNode, Q3 = window.Vue.normalizeClass, zl = window.Vue.withCtx, Ol = window.Vue.createVNode, Dp = window.Vue.createBlock, J3 = { class: "sx-content-comparator-header__mapped-section" }, Z3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, e5 = { key: 0 }, t5 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, n5 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, s5 = window.Vue.computed, o5 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = P(), { activeSectionTargetTitle: n } = Eu(), s = ge(), { target: o, PUBLISHING_TARGETS: a, setTarget: r } = zt(), l = s5(
      () => s.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        I.getAutonym(t.value)
      )
    );
    return (d, u) => {
      const i = W3("i18n");
      return Ts(), xi("div", J3, [
        Ol(be(U), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: zl(() => [
            Ol(be(k), { grow: "" }, {
              default: zl(() => [
                Tp("h6", Z3, [
                  Y3(Ap(l.value) + " ", 1),
                  be(o) === be(a).NEW_SECTION ? Rl((Ts(), xi("span", e5, null, 512)), [
                    [i, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : K3("", !0)
                ]),
                Tp("h6", {
                  class: Q3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": be(o) === be(a).NEW_SECTION
                  }])
                }, Ap(be(n)), 3)
              ]),
              _: 1
            }),
            Ol(be(k), { shrink: "" }, {
              default: zl(() => [
                be(o) === be(a).EXPAND ? (Ts(), Dp(be(Xe), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: be(gh),
                  type: "icon",
                  onClick: u[0] || (u[0] = (c) => be(r)(be(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (Ts(), Dp(be(Xe), {
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
        be(o) === be(a).EXPAND ? Rl((Ts(), xi("p", t5, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : Rl((Ts(), xi("p", n5, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const Be = window.Vue.unref, Ds = window.Vue.createVNode, a5 = window.Vue.toDisplayString, Sn = window.Vue.createElementVNode, jl = window.Vue.withCtx, i5 = window.Vue.resolveDirective, Pp = window.Vue.withDirectives, Hl = window.Vue.openBlock, Bp = window.Vue.createBlock, Fp = window.Vue.createCommentVNode, r5 = window.Vue.createElementBlock, l5 = { class: "sx-content-comparator__header pa-4" }, c5 = { class: "row my-1 py-2 mx-0 gap-6" }, u5 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, d5 = { class: "sx-content-comparator-header__titles shrink" }, g5 = ["lang", "dir"], p5 = ["lang", "dir", "innerHTML"], m5 = { class: "py-2 mb-1" }, h5 = /* @__PURE__ */ Sn("br", null, null, -1), bi = window.Vue.computed, f5 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = P(), { sourceSection: n } = ne(), { sectionSuggestion: s, isCurrentSectionPresent: o } = Te(), a = bi(
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
      const c = i5("i18n");
      return Hl(), r5("div", l5, [
        Ds(Be(Xe), {
          class: "py-2 pa-0",
          icon: Be(O0),
          label: u.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (g) => u.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Sn("div", c5, [
          Sn("div", u5, [
            Sn("div", d5, [
              Sn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Be(s).sourceLanguage,
                dir: Be(I.getDir)(Be(s).sourceLanguage)
              }, a5(Be(s).sourceTitle), 9, g5),
              Sn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Be(s).sourceLanguage,
                dir: Be(I.getDir)(Be(s).sourceLanguage),
                innerHTML: d.value
              }, null, 8, p5)
            ]),
            Ds(X3, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          Sn("div", m5, [
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
        a.value ? (Hl(), Bp(Be(U), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: jl(() => [
            Ds(Be(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: jl(() => [
                Ds(Be(Ze), { icon: Be(X0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Ds(Be(k), { class: "ma-0" }, {
              default: jl(() => [
                Pp(Sn("strong", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                h5,
                Pp(Sn("span", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Fp("", !0),
        Be(o) ? (Hl(), Bp(o5, { key: 1 })) : Fp("", !0)
      ]);
    };
  }
};
const Np = window.Vue.toDisplayString, w5 = window.Vue.createElementVNode, Mp = window.Vue.openBlock, Up = window.Vue.createElementBlock, v5 = window.Vue.createCommentVNode, _5 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, S5 = ["textContent"], y5 = ["textContent"], Kf = {
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
    return (t, n) => (Mp(), Up("section", _5, [
      w5("h5", {
        textContent: Np(e.placeholderTitle)
      }, null, 8, S5),
      e.placeholderSubtitle ? (Mp(), Up("p", {
        key: 0,
        textContent: Np(e.placeholderSubtitle)
      }, null, 8, y5)) : v5("", !0)
    ]));
  }
}, x5 = (e, t, n) => {
  const s = t.indexOf(e);
  return t.slice(s + 1).map((a) => n[a]).filter(Boolean)[0] || null;
}, b5 = ({
  sourceSectionTitle: e,
  sourceSectionTitles: t,
  targetSectionTitles: n,
  presentSectionMappings: s,
  targetAppendixSectionTitles: o
}) => {
  const a = x5(
    e,
    t,
    s
  );
  return a !== null ? a : n.find(
    (l) => o.includes(l)
  ) || null;
}, ql = window.Vue.computed, C5 = window.Vue.createApp, k5 = window.Vuex.useStore, $5 = () => {
  const e = k5(), { sectionSuggestion: t } = Te(), { currentTargetPage: n } = pt(), { sectionURLParameter: s } = P(), o = ge(), a = () => C5(
    Kf,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, r = ql(() => {
    const { appendixSectionTitles: u } = e.state.suggestions;
    return u[t.value.targetLanguage] || [];
  }), l = ql(
    () => b5({
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
  return ql(() => {
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
const Gl = window.Vue.createVNode, at = window.Vue.unref, Ps = window.Vue.openBlock, Ip = window.Vue.createBlock, Rp = window.Vue.createCommentVNode, Ci = window.Vue.createElementVNode, Xl = window.Vue.Fragment, ki = window.Vue.createElementBlock, V5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, E5 = { class: "sx-content-comparator__source-content" }, L5 = ["lang", "dir", "innerHTML"], A5 = ["lang", "dir", "innerHTML"], T5 = ["innerHTML"], D5 = window.Vue.ref, zp = window.Vue.computed, Op = window.Vue.watch, P5 = window.Vue.inject, B5 = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = zt(), n = et(), s = D5("source_section"), { logDashboardTranslationStartEvent: o } = ku(), a = Zs(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      o(), a();
    }, {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: u
    } = P(), { sourceSectionContent: i, targetSectionContent: c } = Eu(), g = $5(), { sectionSuggestion: p, isCurrentSectionPresent: m } = Te(), h = zp(() => p.value.targetTitle), f = Hf();
    Op(
      h,
      () => b(this, null, function* () {
        try {
          yield f(
            u.value,
            d.value,
            h.value
          );
        } catch (C) {
          throw mw.cx.eventlogging.stats.sourceArticleFetchFailed(!0), C;
        }
      }),
      { immediate: !0 }
    ), Op(m, t, { immediate: !0 });
    const v = P5("breakpoints"), _ = zp(() => v.value.mobile);
    return mw.cx.eventlogging.stats.sectionCompareAccess(_.value), (C, x) => (Ps(), ki("section", V5, [
      Gl(f5, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      Gl(O3, {
        "content-type-selection": s.value,
        "onUpdate:contentTypeSelection": x[0] || (x[0] = (y) => s.value = y),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      Ci("section", E5, [
        s.value === "source_section" ? (Ps(), ki(Xl, { key: 0 }, [
          at(i) ? Rp("", !0) : (Ps(), Ip(at(dt), { key: 0 })),
          Ci("section", {
            lang: at(d),
            dir: at(I.getDir)(at(d)),
            class: "pt-2 px-4",
            innerHTML: at(i)
          }, null, 8, L5)
        ], 64)) : s.value === "target_article" ? (Ps(), ki(Xl, { key: 1 }, [
          at(g) ? Rp("", !0) : (Ps(), Ip(at(dt), { key: 0 })),
          Ci("article", {
            lang: at(u),
            dir: at(I.getDir)(at(u)),
            class: "px-4",
            innerHTML: at(g)
          }, null, 8, A5)
        ], 64)) : (Ps(), ki(Xl, { key: 2 }, [
          Ci("section", {
            class: "pa-4",
            innerHTML: at(c)
          }, null, 8, T5),
          Gl(Kf, {
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
}, F5 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: B5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, N5 = window.Vue.resolveComponent, M5 = window.Vue.createVNode, U5 = window.Vue.normalizeClass, I5 = window.Vue.openBlock, R5 = window.Vue.createElementBlock;
function z5(e, t, n, s, o, a) {
  const r = N5("sx-content-comparator");
  return I5(), R5("main", {
    class: U5(["sx-content-comparator-view", a.classes])
  }, [
    M5(r)
  ], 2);
}
const O5 = /* @__PURE__ */ de(F5, [["render", z5]]);
const j5 = window.Vue.resolveDirective, Uo = window.Vue.createElementVNode, jp = window.Vue.withDirectives, $i = window.Vue.unref, Wl = window.Vue.createVNode, Hp = window.Vue.toDisplayString, qp = window.Vue.createTextVNode, Io = window.Vue.withCtx, H5 = window.Vue.openBlock, q5 = window.Vue.createBlock, G5 = { class: "mw-ui-dialog__header px-4 py-3" }, X5 = { class: "mw-ui-dialog__header-title" }, W5 = { class: "pa-4" }, K5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Gp = window.Codex.CdxButton, Y5 = {
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
      const d = j5("i18n");
      return H5(), q5($i(bt), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: Io(() => [
          Uo("div", G5, [
            jp(Uo("span", X5, null, 512), [
              [d, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Io(() => [
          Uo("div", K5, [
            Wl($i(Gp), {
              weight: "quiet",
              onClick: o
            }, {
              default: Io(() => [
                qp(Hp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Wl($i(Gp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Io(() => [
                qp(Hp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Io(() => [
          Wl($i(Wi)),
          Uo("div", W5, [
            jp(Uo("span", null, null, 512), [
              [d, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, Q5 = (e, t, n) => {
  const s = document.createElement("div");
  s.innerHTML = e;
  const o = Array.from(s.children).find(
    (a) => us(a)
  );
  return o && _h(o) ? xt.parseTemplateWikitext(
    wh(o),
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
    wh(o),
    n,
    t
  ) : Promise.resolve(null);
}, J5 = window.Vuex.useStore, Lu = () => {
  const e = J5(), { sourceSection: t } = ne(), { getCurrentTitleByLanguage: n } = kn(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = P(), a = Xf(), r = (i, c, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[c] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof ct ? p.blockTemplateProposedTranslations[c] = g : p instanceof qn && p.addProposedTranslation(c, g);
  }, l = (i, c) => b(void 0, null, function* () {
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
  }), d = (i, c) => b(void 0, null, function* () {
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
    ), m = (yield Q5(
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
}, Z5 = window.Vuex.useStore, eL = () => {
  const { sourceSection: e } = ne(), t = Z5(), { translateTranslationUnitById: n } = Lu();
  return (s) => {
    t.commit("application/setCurrentMTProvider", s);
    const o = e.value.selectedTranslationUnitId;
    n(o, s);
  };
};
function tL(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((s) => {
    s.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const nL = window.Vue.resolveDirective, lt = window.Vue.createElementVNode, Vi = window.Vue.withDirectives, je = window.Vue.unref, Kl = window.Vue.createVNode, pn = window.Vue.withCtx, sL = window.Vue.renderList, oL = window.Vue.Fragment, Ei = window.Vue.openBlock, aL = window.Vue.createElementBlock, iL = window.Vue.toDisplayString, Yl = window.Vue.createBlock, Xp = window.Vue.createCommentVNode, rL = { class: "mw-ui-dialog__header pa-4" }, lL = { class: "row ma-0 py-2" }, cL = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, uL = { class: "mb-0" }, dL = { class: "col shrink justify-center" }, gL = { class: "pb-2 mb-0" }, pL = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, mL = ["dir", "lang", "innerHTML"], hL = ["textContent"], fL = ["innerHTML"], wL = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, vL = /* @__PURE__ */ lt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), _L = ["innerHTML"], Ql = window.Vue.computed, SL = window.Vuex.useStore, yL = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, s = ae.EMPTY_TEXT_PROVIDER_KEY, o = ae.ORIGINAL_TEXT_PROVIDER_KEY, a = SL(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: d
    } = ne(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: i
    } = P(), c = Ql(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        u.value,
        i.value
      )
    ), g = Ql(() => {
      const x = [o, s];
      return c.value.filter(
        (y) => !x.includes(y)
      );
    }), p = Ql(
      () => l.value ? r.value.proposedTitleTranslations : d.value.proposedTranslations
    ), m = eL(), h = (x) => {
      m(x), v();
    }, f = ae.getMTProviderLabel, v = () => n("update:active", !1), _ = ge(), C = tL(
      _.i18n("cx-tools-mt-noservices")
    );
    return (x, y) => {
      const E = nL("i18n");
      return e.active ? (Ei(), Yl(je(bt), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: pn(() => [
          lt("div", rL, [
            lt("div", lL, [
              lt("div", cL, [
                Vi(lt("h4", uL, null, 512), [
                  [E, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              lt("div", dL, [
                Kl(je(Xe), {
                  type: "icon",
                  icon: je(Yi),
                  class: "pa-0",
                  onClick: v
                }, null, 8, ["icon"])
              ])
            ]),
            Vi(lt("h6", gL, null, 512), [
              [E, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: pn(() => [
          Kl(je(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[0] || (y[0] = (S) => h(je(o)))
          }, {
            header: pn(() => [
              Vi(lt("h5", pL, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: pn(() => [
              lt("p", {
                dir: je(I.getDir)(je(u)),
                lang: je(u),
                innerHTML: p.value[je(o)]
              }, null, 8, mL)
            ]),
            _: 1
          }),
          (Ei(!0), aL(oL, null, sL(g.value, (S) => (Ei(), Yl(je(Je), {
            key: S,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (F) => h(S)
          }, {
            header: pn(() => [
              lt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: iL(je(f)(S))
              }, null, 8, hL)
            ]),
            default: pn(() => [
              lt("p", {
                innerHTML: p.value[S]
              }, null, 8, fL)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Kl(je(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[1] || (y[1] = (S) => h(je(s)))
          }, {
            header: pn(() => [
              Vi(lt("h5", wL, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: pn(() => [
              vL
            ]),
            _: 1
          }),
          g.value.length ? Xp("", !0) : (Ei(), Yl(je(Je), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: pn(() => [
              lt("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: je(C)
              }, null, 8, _L)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Xp("", !0);
    };
  }
}, xL = window.Vuex.useStore, eo = () => {
  const { sourceSection: e } = ne(), t = xL(), { translateTranslationUnitById: n } = Lu(), { currentMTProvider: s } = Ae(t), o = (l) => b(void 0, null, function* () {
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
const Wp = window.Vue.toDisplayString, Jl = window.Vue.createElementVNode, Zl = window.Vue.unref, bL = window.Vue.createVNode, CL = window.Vue.normalizeClass, kL = window.Vue.withCtx, $L = window.Vue.openBlock, VL = window.Vue.createBlock, EL = ["href"], LL = ["textContent"], AL = ["textContent"], Bs = window.Vue.computed, Kp = "sx-sentence-selector__section-title", TL = {
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
      const p = [Kp];
      return n.value && p.push(`${Kp}--${u.value}`), p;
    }), { selectTranslationUnitById: c } = eo(), g = () => c(0);
    return (p, m) => ($L(), VL(Zl(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: kL(() => [
        Jl("a", {
          href: l.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Jl("strong", {
            textContent: Wp(a.value)
          }, null, 8, LL),
          bL(Zl(Ze), {
            icon: Zl(ph),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, EL),
        Jl("h2", {
          class: CL(["pa-0 ma-0", i.value]),
          onClick: g,
          textContent: Wp(r.value)
        }, null, 10, AL)
      ]),
      _: 1
    }));
  }
};
const Wt = window.Vue.unref, Ro = window.Vue.createVNode, Li = window.Vue.withCtx, Yp = window.Vue.toDisplayString, Qp = window.Vue.createTextVNode, DL = window.Vue.openBlock, PL = window.Vue.createBlock, BL = window.Vue.computed, ec = window.Codex.CdxButton, Jp = window.Codex.CdxIcon, Qf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: s } = ne(), o = BL(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (DL(), PL(Wt(U), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Li(() => [
        Ro(Wt(ec), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Wt(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Li(() => [
            Ro(Wt(Jp), {
              class: "me-1",
              icon: Wt(fu)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Ro(Wt(ec), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Wt(s),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: Li(() => [
            Qp(Yp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Ro(Wt(ec), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: o.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Li(() => [
            Qp(Yp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Ro(Wt(Jp), {
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
const as = window.Vue.unref, FL = window.Vue.toDisplayString, zo = window.Vue.createVNode, Ai = window.Vue.withCtx, NL = window.Vue.openBlock, ML = window.Vue.createBlock, tc = window.Vue.computed, UL = window.Vuex.useStore, IL = window.Codex.CdxButton, RL = window.Codex.CdxIcon, zL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = UL(), n = tc(() => t.state.application.currentMTProvider), s = ge(), o = tc(() => ({
      [ae.ORIGINAL_TEXT_PROVIDER_KEY]: s.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ae.EMPTY_TEXT_PROVIDER_KEY]: s.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = tc(
      () => o.value[n.value] || s.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ae.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (NL(), ML(as(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Ai(() => [
        zo(as(U), { class: "ma-0 ps-5 pb-4" }, {
          default: Ai(() => [
            zo(as(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: FL(a.value)
            }, null, 8, ["textContent"]),
            zo(as(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Ai(() => [
                zo(as(IL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (d) => r.$emit("configure-options"))
                }, {
                  default: Ai(() => [
                    zo(as(RL), {
                      class: "pa-0",
                      icon: as(hu)
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
const Pt = window.Vue.unref, Un = window.Vue.createVNode, OL = window.Vue.resolveDirective, Zp = window.Vue.createElementVNode, jL = window.Vue.withDirectives, em = window.Vue.toDisplayString, tm = window.Vue.createTextVNode, Oo = window.Vue.withCtx, HL = window.Vue.openBlock, qL = window.Vue.createElementBlock, GL = { class: "mt-retry-body pb-5" }, XL = { class: "retry-body__message" }, nm = window.Codex.CdxButton, nc = window.Codex.CdxIcon, WL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const s = OL("i18n");
      return HL(), qL("div", GL, [
        Zp("div", XL, [
          Un(Pt(nc), {
            class: "me-2",
            icon: Pt(ly)
          }, null, 8, ["icon"]),
          jL(Zp("span", null, null, 512), [
            [s, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Un(Pt(U), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Oo(() => [
            Un(Pt(k), { cols: "6" }, {
              default: Oo(() => [
                Un(Pt(nm), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (o) => t.$emit("retry-translation"))
                }, {
                  default: Oo(() => [
                    Un(Pt(nc), {
                      class: "me-1",
                      icon: Pt(Zh)
                    }, null, 8, ["icon"]),
                    tm(" " + em(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Un(Pt(k), { cols: "6" }, {
              default: Oo(() => [
                Un(Pt(nm), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (o) => t.$emit("configure-options"))
                }, {
                  default: Oo(() => [
                    Un(Pt(nc), {
                      class: "me-1",
                      icon: Pt(_y)
                    }, null, 8, ["icon"]),
                    tm(" " + em(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Fs = window.Vue.createVNode, it = window.Vue.unref, jo = window.Vue.openBlock, KL = window.Vue.createElementBlock, YL = window.Vue.createCommentVNode, Ti = window.Vue.createBlock, QL = window.Vue.normalizeClass, JL = window.Vue.normalizeStyle, Ho = window.Vue.withCtx, ZL = window.Vue.toDisplayString, eA = window.Vue.createTextVNode, tA = window.Vue.normalizeProps, nA = window.Vue.guardReactiveProps, sA = ["lang", "dir", "innerHTML"], sc = window.Vue.ref, oA = window.Vue.onMounted, aA = window.Vue.onBeforeUnmount, oc = window.Vue.computed, iA = window.Vue.nextTick, rA = window.Vuex.useStore, lA = window.Codex.CdxButton, cA = window.Codex.CdxIcon, uA = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = sc(0), n = sc(null), s = sc(null), o = rA(), { currentMTProvider: a } = Ae(o), { targetLanguageURLParameter: r } = P(), { sourceSection: l, currentProposedTranslation: d } = ne(), u = oc(
      () => {
        var m, h;
        return (h = o.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = oc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = oc(
      () => !!d.value || a.value === ae.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + s.value.$el.clientHeight;
    };
    oA(() => b(this, null, function* () {
      yield iA(), g(), p.observe(n.value.$el), p.observe(s.value.$el);
    })), aA(() => {
      p.unobserve(n.value.$el), p.unobserve(s.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (jo(), Ti(it(Je), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Ho(() => [
        Fs(it(U), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Ho(() => [
            Fs(zL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            Fs(it(k), {
              class: QL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && u.value
              }]),
              style: JL(c.value ? i.value : null)
            }, {
              default: Ho(() => [
                c.value ? (jo(), KL("section", {
                  key: 0,
                  lang: it(r),
                  dir: it(I.getDir)(it(r)),
                  innerHTML: it(d)
                }, null, 8, sA)) : u.value ? (jo(), Ti(it(dt), { key: 1 })) : (jo(), Ti(WL, {
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
                c.value || u.value ? (jo(), Ti(it(lA), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", it(d)))
                }, {
                  default: Ho(() => [
                    Fs(it(cA), {
                      class: "me-1",
                      icon: it(mu)
                    }, null, 8, ["icon"]),
                    eA(" " + ZL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : YL("", !0),
                Fs(Qf, tA(nA(m.$attrs)), null, 16)
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
}, dA = window.Vue.computed, gA = (e) => dA(() => {
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
const pA = window.Vue.unref, mA = window.Vue.normalizeClass, hA = window.Vue.openBlock, fA = window.Vue.createElementBlock, wA = ["innerHTML"], vA = window.Vue.onMounted, _A = window.Vue.ref, SA = window.Vue.computed, yA = {
  __name: "SubSection",
  props: {
    subSection: {
      type: ct,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = _A(null), a = gA(n.subSection);
    vA(() => {
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
    }, d = SA(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (u, i) => (hA(), fA("div", {
      ref_key: "subSectionRoot",
      ref: o,
      class: mA(["sx-sentence-selector__subsection", d.value]),
      innerHTML: pA(a)
    }, null, 10, wA));
  }
};
const sm = window.Vue.unref, om = window.Vue.createVNode, am = window.Vue.normalizeStyle, xA = window.Vue.openBlock, bA = window.Vue.createElementBlock, im = window.Vue.computed, Jf = {
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
    const t = e, n = im(() => ({ "--size": t.size })), s = im(
      () => !t.isTemplateAdapted || t.percentage === 0 ? Y0 : Uc
    );
    return (o, a) => (xA(), bA("div", {
      class: "block-template-status-indicator",
      style: am(n.value)
    }, [
      om(sm(p1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      om(sm(Ze), {
        icon: s.value,
        size: e.size / 2,
        style: am({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const In = window.Vue.unref, Di = window.Vue.createVNode, ac = window.Vue.withCtx, CA = window.Vue.openBlock, kA = window.Vue.createBlock, $A = window.Vue.computed, rm = window.Codex.CdxButton, lm = window.Codex.CdxIcon, Zf = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ne(), s = $A(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (o, a) => (CA(), kA(In(U), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: ac(() => [
        Di(In(rm), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: In(n),
          "aria-label": o.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => o.$emit("select-previous-segment"))
        }, {
          default: ac(() => [
            Di(In(lm), { icon: In(fu) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Di(In(rm), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: s.value,
          "aria-label": o.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => o.$emit("select-next-segment"))
        }, {
          default: ac(() => [
            Di(In(lm), { icon: In(Sa) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, qo = window.Vue.openBlock, Pi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const mn = window.Vue.unref, Ns = window.Vue.withCtx, Go = window.Vue.createVNode, ic = window.Vue.toDisplayString, rc = window.Vue.createElementVNode, VA = window.Vue.renderList, EA = window.Vue.Fragment, LA = window.Vue.createElementBlock, AA = { class: "pa-4" }, TA = ["textContent"], DA = ["textContent"], PA = window.Vuex.useStore, Bi = window.Vue.computed, BA = {
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
    const t = e, { targetLanguageAutonym: n } = Ae(PA()), s = Bi(
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
          icon: Uc,
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
          icon: Uc,
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
        rc("div", AA, [
          rc("h3", {
            textContent: ic(a.value)
          }, null, 8, TA),
          rc("p", {
            class: "mt-6 text-small",
            textContent: ic(r.value)
          }, null, 8, DA),
          (qo(!0), LA(EA, null, VA(l.value, (i, c) => (qo(), Pi(mn(U), {
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
                textContent: ic(i.text)
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
const Le = window.Vue.unref, He = window.Vue.createVNode, Kt = window.Vue.withCtx, lc = window.Vue.toDisplayString, cm = window.Vue.createTextVNode, FA = window.Vue.resolveDirective, um = window.Vue.withDirectives, dm = window.Vue.createElementVNode, NA = window.Vue.normalizeClass, Ms = window.Vue.openBlock, gm = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Fi = window.Vue.createBlock, pm = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const mm = window.Vue.mergeProps, MA = { class: "block-template-adaptation-card__container pa-4" }, UA = ["textContent"], IA = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, qe = window.Vue.computed, RA = window.Vue.ref, zA = window.Vuex.useStore, hm = window.Codex.CdxButton, fm = window.Codex.CdxIcon, OA = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = zA(), { targetLanguageAutonym: n, currentMTProvider: s } = Ae(t), {
      selectedContentTranslationUnit: o,
      currentProposedTranslation: a
    } = ne(), r = qe(() => {
      var V;
      return (V = o.value) == null ? void 0 : V.isTranslated;
    }), l = qe(() => {
      var T;
      return ((T = o.value) == null ? void 0 : T.blockTemplateTranslatedContent) || a.value;
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
        var V, T;
        return ((T = (V = o.value) == null ? void 0 : V.sourceBlockTemplateName) == null ? void 0 : T.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = qe(
      () => {
        var V, T;
        return (T = (V = o.value) == null ? void 0 : V.blockTemplateAdaptationInfo) == null ? void 0 : T[s.value];
      }
    ), p = qe(
      () => {
        var V, T;
        return ((V = g.value) == null ? void 0 : V.adapted) || !!((T = g.value) != null && T.partial);
      }
    ), m = qe(() => g.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), h = qe(() => g.value ? p.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = qe(
      () => {
        var V;
        return Object.keys(((V = o.value) == null ? void 0 : V.sourceTemplateParams) || {}).length;
      }
    ), v = qe(() => {
      var T;
      const V = (T = o.value) == null ? void 0 : T.getTargetTemplateParamsByProvider(
        s.value
      );
      return Object.keys(V || {});
    }), _ = qe(() => v.value.length), C = qe(() => {
      const V = S.value;
      return f.value + V === 0 ? 100 : _.value / (f.value + V) * 100 || 0;
    }), x = RA(!1), y = () => {
      x.value = !0;
    }, E = (V) => V.filter((T) => !v.value.includes(T)), S = qe(() => {
      var T;
      const V = ((T = g.value) == null ? void 0 : T.mandatoryTargetParams) || [];
      return E(V).length;
    }), F = qe(() => {
      var T;
      const V = ((T = g.value) == null ? void 0 : T.optionalTargetParams) || [];
      return E(V).length;
    });
    return (V, T) => {
      const R = FA("i18n");
      return Ms(), Fi(Le(Je), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Kt(() => [
          dm("div", MA, [
            He(Le(U), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Kt(() => [
                He(Le(k), { shrink: "" }, {
                  default: Kt(() => [
                    He(Le(fm), {
                      icon: Le(Sy),
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
                    cm(lc(c.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            d.value ? (Ms(), gm("div", {
              key: 0,
              class: NA(["pa-4 mb-4", m.value])
            }, [
              He(Le(U), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Kt(() => [
                  um(He(Le(k), { tag: "h5" }, null, 512), [
                    [R, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  He(Le(k), { shrink: "" }, {
                    default: Kt(() => [
                      He(Jf, {
                        percentage: C.value,
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
              dm("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: lc(d.value)
              }, null, 8, UA),
              He(Le(hm), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: T[0] || (T[0] = (K) => V.$emit("edit-translation", l.value))
              }, {
                default: Kt(() => [
                  cm(lc(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : u.value ? (Ms(), gm("div", IA, [
              He(Le(U), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Kt(() => [
                  um(He(Le(k), { tag: "h5" }, null, 512), [
                    [R, [
                      Le(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  He(Le(k), { shrink: "" }, {
                    default: Kt(() => [
                      He(Le(hm), {
                        weight: "quiet",
                        "aria-label": V.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Kt(() => [
                          He(Le(fm), {
                            icon: Le(fy),
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
          r.value ? (Ms(), Fi(Zf, pm(mm({ key: 1 }, V.$attrs)), null, 16)) : (Ms(), Fi(Qf, pm(mm({ key: 0 }, V.$attrs)), null, 16)),
          He(BA, {
            active: x.value,
            "onUpdate:active": T[1] || (T[1] = (K) => x.value = K),
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
const jA = window.Vue.unref, HA = window.Vue.createVNode, qA = window.Vue.openBlock, GA = window.Vue.createElementBlock, XA = { class: "translated-segment-card-header" }, WA = window.Vue.computed, KA = {
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
    const n = t, { isSectionTitleSelected: s } = ne(), o = ge(), a = WA(() => [
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
    return (l, d) => (qA(), GA("div", XA, [
      HA(jA(ma), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const YA = window.Vue.useCssVars, Ie = window.Vue.createVNode, wm = window.Vue.resolveDirective, QA = window.Vue.createElementVNode, cc = window.Vue.withDirectives, Se = window.Vue.unref, JA = window.Vue.normalizeStyle, Ni = window.Vue.openBlock, vm = window.Vue.createElementBlock, ZA = window.Vue.createCommentVNode, eT = window.Vue.normalizeClass, vt = window.Vue.withCtx, tT = window.Vue.toDisplayString, nT = window.Vue.createTextVNode, _m = window.Vue.createBlock, sT = window.Vue.normalizeProps, oT = window.Vue.guardReactiveProps, hn = window.Vue.computed, aT = window.Vue.ref, iT = window.Vue.inject, rT = window.Vuex.useStore, lT = window.Codex.CdxButton, uc = window.Codex.CdxIcon, cT = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    YA((_) => ({
      "4929555c": v.value
    }));
    const t = aT("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: s,
      isSectionTitleSelected: o
    } = ne(), { targetLanguage: a } = Ae(rT()), r = hn(() => t.value === "sentence"), l = hn(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (C) => {
            var x;
            return C.id === ((x = s.value) == null ? void 0 : x.id);
          }
        )
      )
    ), d = hn(() => {
      var _;
      return o.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (_ = s.value) == null ? void 0 : _.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), u = iT("colors"), i = u.gray200, c = u.red600, g = hn(() => o.value ? n.value.translatedTitle : r.value ? s.value.translatedContent : l.value.translatedContent), p = hn(
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
    return (_, C) => {
      const x = wm("i18n"), y = wm("i18n-html");
      return Ni(), _m(Se(Je), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: vt(() => [
          Ie(Se(U), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: vt(() => [
              Ie(KA, {
                selection: t.value,
                "onUpdate:selection": C[0] || (C[0] = (E) => t.value = E)
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
                          cc(QA("h5", null, null, 512), [
                            [x, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? cc((Ni(), vm("p", {
                            key: 0,
                            style: JA({ color: Se(c) })
                          }, null, 4)), [
                            [x, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : cc((Ni(), vm("p", {
                            key: 1,
                            class: eT(h.value)
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
                                  Ie(Se(uc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Se(by)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Ie(Se(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: vt(() => [
                                  Ie(Se(hh), {
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
                                  Ie(Se(uc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: Se(yy)
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
                  r.value ? (Ni(), _m(Se(lT), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: C[1] || (C[1] = (E) => _.$emit("edit-translation", g.value))
                  }, {
                    default: vt(() => [
                      Ie(Se(uc), {
                        class: "me-1",
                        icon: Se(mu)
                      }, null, 8, ["icon"]),
                      nT(" " + tT(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : ZA("", !0)
                ]),
                _: 1
              }),
              Ie(Se(k), { class: "translated-segment-card__actions" }, {
                default: vt(() => [
                  Ie(Zf, sT(oT(_.$attrs)), null, 16)
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
}, uT = () => {
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
}, ew = window.Vuex.useStore, dT = () => {
  const e = ew(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P();
  return () => b(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const s = mw.config.get("wgContentTranslationEnableMT");
    let o;
    s ? o = yield nr.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : o = new ae(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", o);
  });
}, gT = () => {
  const e = ew(), { currentMTProvider: t } = Ae(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: s
  } = P(), o = dT();
  return () => b(void 0, null, function* () {
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
}, pT = window.Vue.computed, mT = (e) => {
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
}, hT = () => {
  const { selectedContentTranslationUnit: e } = ne(), t = pT(
    () => e.value instanceof ct
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, s = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    s && mT(s);
  };
}, fT = (e, t) => {
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
}, wT = window.Vue.computed, tw = () => {
  const { currentTranslation: e } = Ot(), { currentSourcePage: t } = pt();
  return wT(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, vT = window.Vuex.useStore, Au = () => {
  const e = vT(), { sourceSection: t, targetPageTitleForPublishing: n } = ne(), {
    pageURLParameter: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a
  } = P(), r = tw(), { target: l, PUBLISHING_TARGETS: d } = zt();
  return () => {
    const u = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](o.value, a.value), c = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(c);
    g.forEach(
      (m) => fT(m, i)
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
}, _T = window.Vue.effectScope, ST = window.Vue.onScopeDispose, yT = (e) => {
  let t = 0, n, s;
  const o = () => {
    s && --t <= 0 && (s.stop(), n = s = null);
  };
  return (...a) => (t++, n || (s = _T(!0), n = s.run(() => e(...a))), ST(o), n);
}, xT = window.Vuex.useStore;
let dc;
const bT = () => {
  const e = xT(), t = Au();
  let n = 1e3, s = 0;
  return dc = yu(() => t().then((a) => {
    a instanceof Xn ? (n *= s + 1, s++, setTimeout(dc, n)) : (s = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Xs)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), dc;
}, nw = yT(bT), CT = window.Vuex.useStore, kT = () => {
  const e = CT(), t = nw(), { currentMTProvider: n } = Ae(e), { sourceSection: s, currentProposedTranslation: o } = ne(), { selectNextTranslationUnit: a } = eo();
  return () => b(void 0, null, function* () {
    s.value.setTranslationForSelectedTranslationUnit(
      o.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, $T = window.Vuex.useStore, VT = () => {
  const e = $T(), t = nw();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, ET = window.Vuex.useStore, LT = window.Vue.computed, sw = () => {
  const e = ET(), { currentTranslation: t } = Ot(), { currentMTProvider: n } = Ae(e), { currentTargetPageTitle: s } = pt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = P(), d = Ct(), u = LT(() => {
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
}, AT = (e, t, n, s) => b(void 0, null, function* () {
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
}), TT = (e, t) => {
  t.segments.forEach((n) => {
    var o, a, r;
    const s = e.getSentenceById(n.id);
    if (s && (s.translatedContent = ((o = n.user) == null ? void 0 : o.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      s.addProposedTranslation(l, n.mt.innerHTML), s.mtProviderUsed = l;
    }
  });
}, DT = (e, t, n, s) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return AT(e, t, n, s);
  TT(e, t);
}), PT = (e, t, n, s) => {
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
        const u = DT(
          l,
          d,
          t || e.title,
          n
        );
        o.push(u);
      }
  return Promise.all(o);
}, BT = { restoreCorporaDraft: PT }, FT = () => {
  const { currentSourcePage: e } = pt(), { sourceSection: t } = ne();
  return (n) => b(void 0, null, function* () {
    if (n.restored)
      return;
    try {
      const o = yield xt.fetchTranslationUnits(
        n.translationId
      );
      yield BT.restoreCorporaDraft(
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
let gc = null;
function NT() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((s) => t.includes(s));
}
function ow() {
  return gc === null && (gc = NT()), gc;
}
const aw = window.Vue.ref, pc = aw(!1), mc = aw(!1);
function Sm() {
  return {
    isPermissionWarningDismissed: pc,
    dismissPermissionWarning: () => {
      pc.value = !0;
    },
    resetPermissionWarning: () => {
      pc.value = !1;
    },
    isTitleErrorDismissed: mc,
    dismissTitleError: () => {
      mc.value = !0;
    },
    resetTitleError: () => {
      mc.value = !1;
    }
  };
}
const le = window.Vue.unref, _t = window.Vue.createVNode, Bt = window.Vue.withCtx, MT = window.Vue.resolveDirective, fn = window.Vue.createElementVNode, UT = window.Vue.withDirectives, Xo = window.Vue.toDisplayString, IT = window.Vue.createTextVNode, Yt = window.Vue.openBlock, Rn = window.Vue.createBlock, ym = window.Vue.createCommentVNode, RT = window.Vue.renderList, zT = window.Vue.Fragment, xm = window.Vue.createElementBlock, OT = window.Vue.normalizeClass, jT = window.Vue.normalizeStyle, HT = { class: "sx-sentence-selector__header-title mb-0" }, qT = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, GT = { class: "sx-sentence-selector__section-contents px-4" }, zn = window.Vue.computed, XT = window.Vue.nextTick, WT = window.Vue.onMounted, Wo = window.Vue.ref, bm = window.Vue.watch, KT = window.Vuex.useStore, Cm = window.Codex.CdxButton, YT = window.Codex.CdxIcon, km = window.Codex.CdxMessage, QT = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Wo(!1), n = Wo(!1), s = Wo("100%"), o = KT(), { currentMTProvider: a, previousRoute: r } = Ae(o), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: d,
      pageURLParameter: u,
      sectionURLParameter: i
    } = P(), { resetPublishTarget: c, target: g } = zt(), p = ar();
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
    ), C = zn(
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
      logEditorSegmentAddEvent: T,
      logEditorSegmentSkipEvent: R
    } = sw(), K = () => {
      var oo;
      const q = N.currentRoute.value.meta.workflowStep, sn = N.getRoutes().find(
        (ao) => ao.name === r.value
      ), mt = ((oo = sn == null ? void 0 : sn.meta) == null ? void 0 : oo.workflowStep) || 0;
      return q > mt;
    }, ie = uT();
    gT()().then(() => {
      K() && S(), v.value.mtProviders = !0;
    });
    const j = hT(), { fetchTranslationsByStatus: W, translationsFetched: se } = Js(), re = FT(), { currentTranslation: $e } = Ot(), { selectPageSectionByTitle: Fe, selectPageSectionByIndex: De } = cr(), Z = Vu(), tt = Ks();
    WT(() => b(this, null, function* () {
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
      v.value.pageMetadata = !0, i.value ? yield Fe(i.value) : yield De(0), v.value.pageContent = !0, $e.value && (yield re($e.value)), v.value.draftRestored = !0, bm(
        _,
        () => b(this, null, function* () {
          _.value && (yield XT(), ie(), j());
        }),
        { immediate: !0 }
      ), s.value = window.innerHeight;
    })), bm(h, j);
    const { selectNextTranslationUnit: D, selectPreviousTranslationUnit: M } = eo(), Q = () => (R(), D()), w = kT(), B = () => {
      T(), w();
    }, A = () => {
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
    }, pe = VT(), { clearTranslationURLParameters: H } = P(), z = () => b(this, null, function* () {
      W("draft"), $e.value && (m.value.reset(), $e.value.restored = !1), F(), H(), pe(), yield N.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: oe,
      translateSelectedTranslationUnitForAllProviders: nt
    } = Lu(), Ce = () => {
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
          isInitialEdit: !C.value || null
        }
      });
    }, to = () => N.push({ name: "sx-publisher" }), ur = () => b(this, null, function* () {
      h.value ? yield oe(
        h.value.id,
        a.value
      ) : yield oe(0, a.value);
    }), no = zn(
      () => h.value instanceof ct
    ), so = Wo(!1), {
      isPermissionWarningDismissed: dr,
      dismissPermissionWarning: gr,
      resetPermissionWarning: ws
    } = Sm(), { isTitleErrorDismissed: vs, dismissTitleError: ba, resetTitleError: L } = Sm();
    K() && (ws(), L());
    const O = zn(
      () => !ow() && !dr.value
    ), Ne = zn(
      () => {
        var q;
        return !vs.value && ((q = m.value) == null ? void 0 : q.isLeadSection) && !mw.Title.newFromText(f.value);
      }
    );
    return (q, ze) => {
      const sn = MT("i18n");
      return Yt(), xm("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: jT(E.value)
      }, [
        _t(le(U), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Bt(() => [
            _t(le(k), { shrink: "" }, {
              default: Bt(() => [
                _t(le(Cm), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": q.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: G
                }, {
                  default: Bt(() => [
                    _t(le(YT), { icon: le(Wh) }, null, 8, ["icon"])
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
              default: Bt(() => [
                UT(fn("h4", HT, null, 512), [
                  [sn, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            _t(le(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: Bt(() => [
                _t(le(Cm), {
                  disabled: !(le(m) && le(m).isTranslated),
                  onClick: to
                }, {
                  default: Bt(() => [
                    IT(Xo(q.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
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
          default: Bt(() => [
            _t(le(k), {
              dir: le(I.getDir)(le(l)),
              lang: le(l),
              class: "sx-sentence-selector__section"
            }, {
              default: Bt(() => [
                O.value ? (Yt(), Rn(le(km), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: le(gr)
                }, {
                  default: Bt(() => [
                    fn("p", null, Xo(q.$i18n("cx-publish-permission-warning")), 1),
                    fn("p", null, [
                      fn("strong", null, [
                        fn("a", qT, Xo(q.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : ym("", !0),
                Ne.value ? (Yt(), Rn(le(km), {
                  key: 1,
                  type: "error",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: le(ba)
                }, {
                  default: Bt(() => [
                    fn("p", null, [
                      fn("strong", null, Xo(q.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    fn("p", null, Xo(q.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : ym("", !0),
                _t(TL),
                fn("div", GT, [
                  (Yt(!0), xm(zT, null, RT(x.value, (mt) => (Yt(), Rn(yA, {
                    id: mt.id,
                    key: `sub-section-${mt.id}`,
                    "sub-section": mt,
                    onBounceTranslation: A
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !no.value && C.value ? (Yt(), Rn(cT, {
              key: 0,
              onEditTranslation: fs,
              onSelectNextSegment: le(D),
              onSelectPreviousSegment: le(M)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : no.value ? (Yt(), Rn(OA, {
              key: 2,
              onEditTranslation: fs,
              onApplyTranslation: B,
              onSkipTranslation: Q,
              onSelectPreviousSegment: le(M),
              onSelectNextSegment: le(D)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Yt(), Rn(uA, {
              key: 1,
              class: OT({ "mb-0": !n.value }),
              onConfigureOptions: Ce,
              onEditTranslation: fs,
              onApplyTranslation: B,
              onSkipTranslation: Q,
              onSelectPreviousSegment: le(M),
              onRetryTranslation: ur
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Yt(), Rn(le(U), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Bt(() => [
            _t(le(dt), { class: "mt-0" })
          ]),
          _: 1
        })),
        _t(yL, {
          active: t.value,
          "onUpdate:active": ze[0] || (ze[0] = (mt) => t.value = mt)
        }, null, 8, ["active"]),
        _t(Y5, {
          modelValue: so.value,
          "onUpdate:modelValue": ze[1] || (ze[1] = (mt) => so.value = mt),
          onDiscardTranslation: z
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const JT = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: QT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, ZT = window.Vue.resolveComponent, eD = window.Vue.createVNode, tD = window.Vue.normalizeClass, nD = window.Vue.openBlock, sD = window.Vue.createElementBlock;
function oD(e, t, n, s, o, a) {
  const r = ZT("sx-sentence-selector");
  return nD(), sD("main", {
    class: tD(["sx-sentence-selector-view", a.classes])
  }, [
    eD(r)
  ], 2);
}
const aD = /* @__PURE__ */ de(JT, [["render", oD]]), iD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, rD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const lD = window.Vue.resolveDirective, Mi = window.Vue.withDirectives, Ft = window.Vue.openBlock, wn = window.Vue.createElementBlock, Ui = window.Vue.createCommentVNode, Ii = window.Vue.Transition, is = window.Vue.withCtx, Us = window.Vue.createVNode, Ko = window.Vue.createElementVNode, On = window.Vue.unref, cD = window.Vue.renderList, uD = window.Vue.Fragment, dD = window.Vue.normalizeClass, $m = window.Vue.createBlock, gD = window.Vue.toDisplayString, pD = window.Vue.createTextVNode, mD = { class: "sx-quick-tutorial" }, hD = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, fD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, wD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, vD = { class: "sx-quick-tutorial__illustration" }, _D = ["innerHTML"], SD = ["innerHTML"], yD = { class: "sx-quick-tutorial__step-indicator py-3" }, xD = ["onClick"], bD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, CD = {
  key: "secondary-point-1",
  class: "ma-0"
}, kD = {
  key: "secondary-point-2",
  class: "ma-0"
}, $D = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Vm = window.Vue.ref, Em = window.Codex.CdxButton, VD = window.Codex.CdxIcon, ED = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Vm(2), n = Vm(1), s = () => {
      n.value < t.value && n.value++;
    }, o = (r) => r === n.value, a = Zs();
    return (r, l) => {
      const d = lD("i18n");
      return Ft(), wn("section", mD, [
        Us(On(U), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: is(() => [
            Ko("section", hD, [
              Us(Ii, {
                name: "fade",
                mode: "out-in"
              }, {
                default: is(() => [
                  o(1) ? Mi((Ft(), wn("h2", fD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : o(2) ? Mi((Ft(), wn("h2", wD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ui("", !0)
                ]),
                _: 1
              })
            ]),
            Ko("section", vD, [
              Us(Ii, { name: "mw-ui-animation-slide-start" }, {
                default: is(() => [
                  o(1) ? (Ft(), wn("div", {
                    key: "illustration-1",
                    innerHTML: On(rD)
                  }, null, 8, _D)) : o(2) ? (Ft(), wn("div", {
                    key: "illustration-2",
                    innerHTML: On(iD)
                  }, null, 8, SD)) : Ui("", !0)
                ]),
                _: 1
              })
            ]),
            Ko("div", yD, [
              (Ft(!0), wn(uD, null, cD(t.value, (u) => (Ft(), wn("span", {
                key: `dot-${u}`,
                class: dD(["dot mx-1", { "dot-active": o(u) }]),
                role: "button",
                onClick: (i) => n.value = u
              }, null, 10, xD))), 128))
            ]),
            Ko("section", bD, [
              Us(Ii, {
                name: "fade",
                mode: "out-in"
              }, {
                default: is(() => [
                  o(1) ? Mi((Ft(), wn("h3", CD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : o(2) ? Mi((Ft(), wn("h3", kD, null, 512)), [
                    [d, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ui("", !0)
                ]),
                _: 1
              })
            ]),
            Ko("div", $D, [
              Us(Ii, {
                name: "fade",
                mode: "out-in"
              }, {
                default: is(() => [
                  o(1) ? (Ft(), $m(On(Em), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: s
                  }, {
                    default: is(() => [
                      Us(On(VD), { icon: On(Sa) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : o(2) ? (Ft(), $m(On(Em), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: On(a)
                  }, {
                    default: is(() => [
                      pD(gD(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
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
const LD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: ED
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, AD = window.Vue.resolveComponent, TD = window.Vue.createVNode, DD = window.Vue.normalizeClass, PD = window.Vue.openBlock, BD = window.Vue.createElementBlock;
function FD(e, t, n, s, o, a) {
  const r = AD("sx-quick-tutorial");
  return PD(), BD("main", {
    class: DD(["sx-quick-tutorial-view", a.classes])
  }, [
    TD(r)
  ], 2);
}
const ND = /* @__PURE__ */ de(LD, [["render", FD]]);
const MD = window.Vue.resolveDirective, Lm = window.Vue.createElementVNode, UD = window.Vue.withDirectives, ID = window.Vue.unref, RD = window.Vue.withCtx, zD = window.Vue.createVNode, OD = window.Vue.openBlock, jD = window.Vue.createElementBlock, HD = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, qD = { class: "sx-editor__original-content-panel__header mb-2" }, GD = ["lang", "dir", "innerHTML"], Am = window.Vue.ref, XD = window.Vue.onMounted, WD = {
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
    }, s = Am(null), o = Am(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(s.value, null).getPropertyValue("line-height")
    );
    return XD(() => {
      o.value = 2 * a(), n(s.value, t.language);
    }), (r, l) => {
      const d = MD("i18n");
      return OD(), jD("section", HD, [
        UD(Lm("h5", qD, null, 512), [
          [d, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        zD(ID(a1), {
          "min-height": o.value,
          scroll: ""
        }, {
          default: RD(() => [
            Lm("div", {
              ref_key: "originalContentRef",
              ref: s,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, GD)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, KD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const YD = window.Vue.unref, Yo = window.Vue.createElementVNode, Tm = window.Vue.resolveDirective, hc = window.Vue.withDirectives, QD = window.Vue.normalizeClass, JD = window.Vue.openBlock, ZD = window.Vue.createElementBlock, e6 = window.Vue.createCommentVNode, t6 = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, n6 = { class: "sx-editor__feedback-overlay-content px-4" }, s6 = ["innerHTML"], o6 = { class: "sx-editor__feedback-overlay-content__title" }, a6 = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, fc = window.Vue.computed, i6 = {
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
    const t = e, { targetLanguageURLParameter: n } = P(), s = fc(
      () => tn.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), o = fc(() => {
      const r = tn.getScoreStatus(s.value);
      return r === "failure" ? s.value === 0 ? "failure" : "warning" : r;
    }), a = fc(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return (r, l) => {
      const d = Tm("i18n"), u = Tm("i18n-html");
      return e.showFeedback ? (JD(), ZD("div", t6, [
        Yo("div", n6, [
          Yo("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: YD(KD)
          }, null, 8, s6),
          hc(Yo("h2", o6, null, 512), [
            [d, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          hc(Yo("p", a6, null, 512), [
            [d, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          hc(Yo("p", {
            class: QD(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [u, [s.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : e6("", !0);
    };
  }
}, r6 = window.Vuex.useStore, l6 = () => {
  const e = r6(), t = Au(), { selectNextTranslationUnit: n } = eo(), {
    isSectionTitleSelected: s,
    sourceSection: o,
    selectedContentTranslationUnit: a
  } = ne(), { getCurrentTitleByLanguage: r } = kn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: d
  } = P(), { currentMTProvider: u } = Ae(e);
  return (i) => b(void 0, null, function* () {
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
const Ye = window.Vue.unref, wc = window.Vue.openBlock, vc = window.Vue.createBlock, Dm = window.Vue.createCommentVNode, Pm = window.Vue.createVNode, c6 = window.Vue.createElementVNode, u6 = window.Vue.withCtx, d6 = { class: "sx-editor__editing-surface-container grow" }, _c = window.Vue.ref, g6 = window.Vue.computed;
window.Vue.inject;
const p6 = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = _c(!1), s = et(), o = () => n.value = !0, a = () => s.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: d, originalContent: u, title: i } = history.state, c = _c(null), g = _c(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = sw(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = P(), { isSectionTitleSelected: v, sourceSection: _ } = ne(), C = g6(
      () => tn.calculateScore(
        c.value,
        d,
        f.value
      )
    ), x = l6(), y = (E) => b(this, null, function* () {
      c.value = E, g.value = !0;
      const S = new Promise((V) => setTimeout(V, 2e3));
      let F = Promise.resolve();
      r ? _.value.editedTranslation = E : F = x(E), C.value === 0 && l ? p() : C.value > 0 && m(), yield Promise.all([S, F]), g.value = !1, a();
    });
    return r ? mw.cx.eventlogging.stats.publishEditorStepAccess() : mw.cx.eventlogging.stats.editingStepAccess(!0), (E, S) => (wc(), vc(Ye(U), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: u6(() => [
        Ye(u) ? (wc(), vc(WD, {
          key: 0,
          language: Ye(h),
          dir: Ye(I.getDir)(Ye(h)),
          "original-content": Ye(u)
        }, null, 8, ["language", "dir", "original-content"])) : Dm("", !0),
        n.value ? Dm("", !0) : (wc(), vc(Ye(dt), { key: 1 })),
        c6("div", d6, [
          Pm(i6, {
            "edited-translation": c.value,
            "show-feedback": g.value,
            "proposed-translation": Ye(d)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Pm(RV, {
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
const m6 = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: p6
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
}, h6 = window.Vue.resolveComponent, f6 = window.Vue.createVNode, w6 = window.Vue.normalizeClass, v6 = window.Vue.openBlock, _6 = window.Vue.createElementBlock;
function S6(e, t, n, s, o, a) {
  const r = h6("sx-editor");
  return v6(), _6("main", {
    class: w6(["sx-editor-view", a.classes])
  }, [
    f6(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const y6 = /* @__PURE__ */ de(m6, [["render", S6]]);
const Qt = window.Vue.unref, rs = window.Vue.createVNode, Qo = window.Vue.withCtx, x6 = window.Vue.resolveDirective, b6 = window.Vue.withDirectives, C6 = window.Vue.openBlock, k6 = window.Vue.createBlock, Bm = window.Codex.CdxButton, Fm = window.Codex.CdxIcon, $6 = {
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
      const a = x6("i18n");
      return C6(), k6(Qt(U), { class: "ma-0 sx-publisher__header" }, {
        default: Qo(() => [
          rs(Qt(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: Qo(() => [
              rs(Qt(Bm), {
                class: "px-3",
                weight: "quiet",
                "aria-label": s.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Qo(() => [
                  rs(Qt(Fm), { icon: Qt(Qs) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          b6(rs(Qt(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          rs(Qt(k), { shrink: "" }, {
            default: Qo(() => [
              rs(Qt(Bm), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": s.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: o[0] || (o[0] = (r) => s.$emit("publish-translation"))
              }, {
                default: Qo(() => [
                  rs(Qt(Fm), { icon: Qt(cy) }, null, 8, ["icon"])
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
}, V6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, E6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Nm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const Sc = window.Vue.createElementVNode, Mm = window.Vue.toDisplayString, yc = window.Vue.unref, xc = window.Vue.withCtx, Um = window.Vue.createVNode, L6 = window.Vue.openBlock, A6 = window.Vue.createBlock, T6 = window.Vue.createCommentVNode, D6 = ["innerHTML"], P6 = ["textContent"], B6 = ["textContent"], bc = window.Vue.computed, F6 = {
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
        svg: V6,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: E6,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Nm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Nm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, o = bc(() => s[n.status].svg), a = bc(() => s[n.status].title), r = bc(() => s[n.status].subtitle);
    return (l, d) => e.active ? (L6(), A6(yc(bt), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: xc(() => [
        Um(yc(U), { class: "ma-4" }, {
          default: xc(() => [
            Um(yc(k), null, {
              default: xc(() => [
                Sc("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: o.value
                }, null, 8, D6),
                Sc("h2", {
                  textContent: Mm(a.value)
                }, null, 8, P6),
                Sc("p", {
                  class: "ma-0",
                  textContent: Mm(r.value)
                }, null, 8, B6)
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
const rt = window.Vue.unref, Nt = window.Vue.createVNode, vn = window.Vue.withCtx, N6 = window.Vue.resolveDirective, M6 = window.Vue.withDirectives, Im = window.Vue.toDisplayString, U6 = window.Vue.createTextVNode, Cc = window.Vue.openBlock, Rm = window.Vue.createElementBlock, I6 = window.Vue.createCommentVNode, iw = window.Vue.createElementVNode, R6 = window.Vue.createBlock, z6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, O6 = ["src"], j6 = ["textContent"], H6 = /* @__PURE__ */ iw("p", { class: "mt-0" }, null, -1), q6 = window.Vue.computed, G6 = window.Vue.inject, X6 = window.Vue.ref, zm = window.Codex.CdxButton, W6 = window.Codex.CdxIcon, K6 = {
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
    const n = t, s = X6(""), o = () => n("close"), a = () => n("publish", s.value), r = G6("breakpoints"), l = q6(() => r.value.mobile);
    return (d, u) => {
      const i = N6("i18n");
      return e.active && e.captchaDetails ? (Cc(), R6(rt(bt), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: vn(() => [
          Nt(rt(U), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: vn(() => [
              Nt(rt(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: vn(() => [
                  Nt(rt(zm), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": d.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: o
                  }, {
                    default: vn(() => [
                      Nt(rt(W6), { icon: rt(Qs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              M6(Nt(rt(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Nt(rt(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: vn(() => [
                  Nt(rt(zm), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: vn(() => [
                      U6(Im(d.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Nt(rt(Wi))
        ]),
        default: vn(() => [
          iw("div", z6, [
            e.captchaDetails.type === "image" ? (Cc(), Rm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, O6)) : (Cc(), Rm("p", {
              key: 1,
              textContent: Im(e.captchaDetails.question)
            }, null, 8, j6)),
            H6,
            Nt(rt(U), { class: "ma-0" }, {
              default: vn(() => [
                Nt(rt(k), null, {
                  default: vn(() => [
                    Nt(rt(Ic), {
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
      }, 8, ["fullscreen"])) : I6("", !0);
    };
  }
};
const jn = window.Vue.unref, Ri = window.Vue.createVNode, Is = window.Vue.withCtx, Rs = window.Vue.createElementVNode, Y6 = window.Vue.resolveDirective, Q6 = window.Vue.withDirectives, J6 = window.Vue.renderList, Z6 = window.Vue.Fragment, kc = window.Vue.openBlock, e9 = window.Vue.createElementBlock, Om = window.Vue.toDisplayString, jm = window.Vue.createTextVNode, t9 = window.Vue.isRef, n9 = window.Vue.normalizeClass, Hm = window.Vue.createBlock, s9 = { class: "mw-ui-dialog__header" }, o9 = { class: "row ma-0 px-4 py-3" }, a9 = { class: "col shrink justify-center" }, i9 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, r9 = { class: "mb-0" }, l9 = { class: "pa-4" }, c9 = window.Codex.CdxField, u9 = window.Codex.CdxRadio, d9 = window.Vuex.useStore, zi = window.Vue.computed, g9 = window.Codex.CdxButton, p9 = window.Codex.CdxIcon, m9 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, s = d9(), { target: o, PUBLISHING_TARGETS: a } = zt(), r = zi(() => s.state.translator.isAnon), l = ge(), { sourceSection: d } = ne(), { isCurrentSectionPresent: u } = Te(), i = zi(
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
      return u.value && m.push({
        label: l.i18n("cx-sx-publisher-expand-option-label"),
        description: l.i18n("cx-sx-publisher-expand-option-details"),
        value: a.EXPAND,
        disabled: !1
      }), m;
    }), p = () => n("update:active", !1);
    return (m, h) => {
      const f = Y6("i18n");
      return kc(), Hm(jn(bt), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[1] || (h[1] = (v) => m.$emit("update:active", v)),
        onClose: p
      }, {
        header: Is(() => [
          Rs("div", s9, [
            Rs("div", o9, [
              Rs("div", a9, [
                Ri(jn(g9), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: Is(() => [
                    Ri(jn(p9), { icon: jn(Wh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Rs("div", i9, [
                Q6(Rs("h4", r9, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Ri(jn(Wi))
          ])
        ]),
        default: Is(() => [
          Rs("div", l9, [
            Ri(jn(c9), { "is-fieldset": "" }, {
              default: Is(() => [
                (kc(!0), e9(Z6, null, J6(g.value, (v, _) => (kc(), Hm(jn(u9), {
                  key: "publish-options-radio-" + v.value,
                  modelValue: jn(o),
                  "onUpdate:modelValue": [
                    h[0] || (h[0] = (C) => t9(o) ? o.value = C : null),
                    p
                  ],
                  class: n9(_ < g.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": v.value,
                  disabled: v.disabled,
                  name: "publish-options"
                }, {
                  description: Is(() => [
                    jm(Om(v.description), 1)
                  ]),
                  default: Is(() => [
                    jm(Om(v.label) + " ", 1)
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
const Mt = window.Vue.unref, qm = window.Vue.toDisplayString, Gm = window.Vue.createElementVNode, h9 = window.Vue.resolveDirective, zs = window.Vue.createVNode, f9 = window.Vue.withDirectives, Jo = window.Vue.withCtx, $c = window.Vue.openBlock, Xm = window.Vue.createBlock, Wm = window.Vue.createCommentVNode, w9 = window.Vue.Fragment, v9 = window.Vue.createElementBlock, _9 = window.Vue.normalizeClass, S9 = ["textContent"], y9 = ["textContent"], Os = window.Vue.computed, Km = window.Vue.ref, x9 = window.Vue.watch, Ym = window.Codex.CdxButton, Qm = window.Codex.CdxIcon, b9 = window.Codex.CdxMessage, C9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Km(0), s = Km(null);
    x9(s, () => {
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
      const h = h9("i18n-html");
      return $c(), Xm(Mt(b9), {
        type: a.value,
        class: _9(["sx-publisher__review-info", l.value]),
        icon: r.value ? Mt(gy) : null
      }, {
        default: Jo(() => [
          Gm("h5", {
            textContent: qm(i.value)
          }, null, 8, S9),
          r.value ? Wm("", !0) : ($c(), v9(w9, { key: 0 }, [
            Gm("p", {
              textContent: qm(u.value)
            }, null, 8, y9),
            zs(Mt(U), {
              justify: "between",
              class: "ma-0"
            }, {
              default: Jo(() => [
                f9(zs(Mt(k), {
                  ref_key: "learnMoreContainer",
                  ref: s,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? ($c(), Xm(Mt(k), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: Jo(() => [
                    zs(Mt(Ym), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: c
                    }, {
                      default: Jo(() => [
                        zs(Mt(Qm), { icon: Mt(fu) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    zs(Mt(Ym), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: Jo(() => [
                        zs(Mt(Qm), { icon: Mt(Sa) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })) : Wm("", !0)
              ]),
              _: 1
            })
          ], 64))
        ]),
        _: 1
      }, 8, ["type", "class", "icon"]);
    };
  }
}, k9 = (e) => {
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
}, $9 = window.Vuex.useStore, V9 = window.Vue.computed, E9 = () => {
  const e = $9(), { currentTranslation: t } = Ot(), { currentMTProvider: n } = Ae(e), { currentTargetPageTitle: s } = pt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = P(), { sourceSection: d } = ne(), u = Ct(), i = V9(() => {
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
}, L9 = window.Vue.computed, Jm = window.Vue.ref, A9 = window.Vuex.useStore, T9 = () => {
  const e = A9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: s
  } = P(), { sourceSection: o, targetPageTitleForPublishing: a } = ne(), r = tw(), { sectionSuggestion: l } = Te(), d = L9(
    () => {
      var x, y;
      return (y = l.value) == null ? void 0 : y.presentSections[(x = o.value) == null ? void 0 : x.sourceSectionTitleForPublishing];
    }
  ), { target: u, PUBLISHING_TARGETS: i } = zt(), c = Jm(!1), g = Jm("pending"), p = () => c.value = !1, m = Au(), {
    logPublishAttemptEvent: h,
    logPublishSuccessEvent: f,
    logPublishFailureEvent: v
  } = E9(), _ = (x, y) => b(void 0, null, function* () {
    h();
    const E = yield m();
    if (E instanceof Xn)
      return v(), { publishFeedbackMessage: E, targetUrl: null };
    const S = E, F = a.value, V = {
      html: k9(o.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: F,
      sourceSectionTitle: o.value.sourceSectionTitleForPublishing,
      targetSectionTitle: o.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: s.value,
      revision: r.value,
      isSandbox: u.value === i.SANDBOX,
      sectionTranslationId: S
    };
    d.value && u.value === i.EXPAND && (V.existingSectionTitle = d.value), x && (V.captchaId = x, V.captchaWord = y);
    const T = yield xt.publishTranslation(
      V
    );
    return T.publishFeedbackMessage === null ? f(T.pageId, T.revisionId) : v(), T;
  });
  return {
    closePublishDialog: p,
    doPublish: (x = null, y = null) => b(void 0, null, function* () {
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
}, D9 = window.Vue.computed, P9 = () => {
  const e = et(), { sourceSection: t } = ne(), { getCurrentTitleByLanguage: n } = kn(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = P(), a = D9(
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
}, B9 = () => {
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
}, F9 = window.Vue.ref, N9 = window.Vue.computed, M9 = () => {
  const e = B9(), { target: t, PUBLISHING_TARGETS: n } = zt(), { targetPageTitleForPublishing: s } = ne(), o = F9([]), a = N9(
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
}, U9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = zt(), { currentSourcePage: n } = pt(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = P(), { sourceSection: a, targetPageTitleForPublishing: r } = ne();
  return (l) => b(void 0, null, function* () {
    const d = r.value, u = n.value.title, i = new mw.Title(u), c = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== c.user)
      try {
        yield nr.addWikibaseLink(
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
}, Zm = window.Vue.ref, I9 = () => {
  const e = Zm(!1), t = Zm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (o) => o && o.type === "captcha" ? (t.value = o.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ue = window.Vue.unref, Ge = window.Vue.createVNode, R9 = window.Vue.resolveDirective, eh = window.Vue.withDirectives, Vc = window.Vue.openBlock, Ec = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const ls = window.Vue.createElementVNode, th = window.Vue.toDisplayString, z9 = window.Vue.createTextVNode, js = window.Vue.withCtx, nh = window.Vue.normalizeClass, O9 = { class: "sx-publisher" }, j9 = {
  key: 0,
  class: "mb-2"
}, H9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, q9 = ["href"], G9 = ["innerHTML"], X9 = { class: "sx-publisher__section-preview pa-5" }, W9 = ["innerHTML"], Oi = window.Vue.computed, K9 = window.Vue.onMounted, Y9 = window.Vue.ref, Q9 = window.Vue.watch, sh = window.Codex.CdxButton, Lc = window.Codex.CdxIcon, J9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = ne(), { sectionSuggestion: n, isCurrentSectionPresent: s } = Te(), {
      targetLanguageURLParameter: o,
      sectionURLParameter: a
    } = P(), r = Oi(() => {
      var j;
      return (j = t.value) == null ? void 0 : j.title;
    }), l = ge(), { target: d, PUBLISHING_TARGETS: u } = zt(), i = Oi(() => d.value === u.SANDBOX ? l.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : d.value === u.EXPAND ? l.i18n(
      "cx-sx-publisher-publish-panel-expand-section-result"
    ) : t.value.isLeadSection ? l.i18n("cx-sx-publisher-publish-panel-lead-section-result") : l.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: c,
      captchaDialogOn: g,
      handleCaptchaError: p,
      onCaptchaDialogClose: m
    } = I9(), {
      publishFeedbackMessages: h,
      isPublishingDisabled: f,
      addPublishFeedbackMessage: v,
      clearPublishFeedbackMessages: _,
      initializePublishFeedbackMessages: C
    } = M9(), x = U9(), { doPublish: y, isPublishDialogActive: E, publishStatus: S, closePublishDialog: F } = T9(), V = (j = null) => b(this, null, function* () {
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
    K9(() => {
      C(), mw.cx.eventlogging.stats.publishStepAccess();
    });
    const T = P9(), R = Y9(!1), K = () => R.value = !0;
    Q9(R, (j) => {
      j || (_(), C());
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
      const se = R9("i18n");
      return Vc(), Ec("section", O9, [
        Ge($6, {
          "is-publishing-disabled": ue(f),
          onPublishTranslation: V
        }, null, 8, ["is-publishing-disabled"]),
        ls("div", {
          class: nh(["sx-publisher__publish-panel", ue(s) ? "py-4" : "pa-4"])
        }, [
          ue(s) ? (Vc(), Ec("div", H9, [
            eh(ls("h5", null, null, 512), [
              [se, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            ls("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: te.value,
              target: "_blank"
            }, [
              z9(th(ie.value) + " ", 1),
              Ge(ue(Lc), { icon: ue(sr) }, null, 8, ["icon"])
            ], 8, q9)
          ])) : eh((Vc(), Ec("h5", j9, null, 512)), [
            [se, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          ls("div", {
            class: nh({ "px-4 mt-4": ue(s) })
          }, [
            ls("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: i.value
            }, null, 8, G9),
            Ge(ue(U), {
              justify: "end",
              class: "ma-0"
            }, {
              default: js(() => [
                Ge(ue(k), { shrink: "" }, {
                  default: js(() => [
                    Ge(ue(sh), {
                      weight: "quiet",
                      "aria-label": j.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: K
                    }, {
                      default: js(() => [
                        Ge(ue(Lc), { icon: ue(xy) }, null, 8, ["icon"])
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
        Ge(C9, { "publish-feedback-messages": ue(h) }, null, 8, ["publish-feedback-messages"]),
        ls("section", X9, [
          Ge(ue(U), { class: "pb-5 ma-0" }, {
            default: js(() => [
              Ge(ue(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: th(r.value)
              }, null, 8, ["textContent"]),
              Ge(ue(k), { shrink: "" }, {
                default: js(() => [
                  Ge(ue(sh), {
                    weight: "quiet",
                    "aria-label": j.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ue(T)
                  }, {
                    default: js(() => [
                      Ge(ue(Lc), { icon: ue(mu) }, null, 8, ["icon"])
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
          }, null, 8, W9)
        ]),
        Ge(m9, {
          active: R.value,
          "onUpdate:active": W[0] || (W[0] = (re) => R.value = re)
        }, null, 8, ["active"]),
        Ge(K6, {
          active: ue(g),
          "captcha-details": ue(c),
          onClose: ue(m),
          onPublish: W[1] || (W[1] = (re) => V(re))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ge(F6, {
          active: ue(E),
          status: ue(S)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const Z9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: J9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, eP = window.Vue.resolveComponent, tP = window.Vue.createVNode, nP = window.Vue.normalizeClass, sP = window.Vue.openBlock, oP = window.Vue.createElementBlock;
function aP(e, t, n, s, o, a) {
  const r = eP("sx-publisher");
  return sP(), oP("main", {
    class: nP(["sx-publisher-view", a.classes])
  }, [
    tP(r)
  ], 2);
}
const iP = /* @__PURE__ */ de(Z9, [["render", aP]]);
const Ut = window.Vue.unref, Hn = window.Vue.createVNode, cs = window.Vue.withCtx, Ac = window.Vue.toDisplayString, Tc = window.Vue.createElementVNode, rP = window.Vue.openBlock, lP = window.Vue.createBlock, cP = ["textContent"], uP = ["textContent"], dP = ["textContent"], rw = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Ws,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (rP(), lP(Ut(U), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Ut(I.getDir)(e.suggestion.language)
    }, {
      default: cs(() => [
        Hn(Ut(k), { shrink: "" }, {
          default: cs(() => [
            Hn(Ut(Jc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Hn(Ut(k), { class: "ms-4" }, {
          default: cs(() => [
            Hn(Ut(U), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: cs(() => [
                Hn(Ut(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: cs(() => [
                    Tc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Ac(e.suggestion.title)
                    }, null, 8, cP)
                  ]),
                  _: 1
                }),
                Hn(Ut(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: cs(() => [
                    Tc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Ac(e.suggestion.description)
                    }, null, 8, uP)
                  ]),
                  _: 1
                }),
                Hn(Ut(k), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: cs(() => [
                    Hn(Ut(Ze), {
                      icon: Ut(H0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    Tc("small", {
                      textContent: Ac((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, dP)
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
const Zo = window.Vue.unref, ea = window.Vue.openBlock, Dc = window.Vue.createBlock, gP = window.Vue.createCommentVNode, pP = window.Vue.resolveDirective, mP = window.Vue.withDirectives, oh = window.Vue.createElementBlock, hP = window.Vue.renderList, fP = window.Vue.Fragment, wP = window.Vue.normalizeClass, vP = window.Vue.withCtx, _P = {
  key: 1,
  class: "sx-article-search__empty-state"
}, ah = window.Vue.computed, SP = window.Vue.ref, yP = {
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
    const { sourceLanguageURLParameter: t } = P(), n = ah(() => I.getAutonym(t.value)), s = e, o = SP(null), a = (c) => o.value = c, r = () => o.value = null, l = (c) => {
      var g;
      return ((g = s.selectedItem) == null ? void 0 : g.title) === c.title && !o.value || o.value === c.pageId;
    }, d = ah(() => s.searchInput), { searchResultsLoading: u, searchResultsSlice: i } = xu(
      t,
      d
    );
    return (c, g) => {
      const p = pP("i18n");
      return ea(), Dc(Zo(Je), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: vP(() => [
          Zo(u) ? (ea(), Dc(Zo(dt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Zo(i).length === 0 ? mP((ea(), oh("p", _P, null, 512)), [
            [p, [
              d.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : gP("", !0),
          (ea(!0), oh(fP, null, hP(Zo(i), (m) => (ea(), Dc(rw, {
            key: m.pageId,
            suggestion: m,
            class: wP({
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
const xP = window.Vue.toDisplayString, bP = window.Vue.createElementVNode, CP = window.Vue.renderList, kP = window.Vue.Fragment, Pc = window.Vue.openBlock, $P = window.Vue.createElementBlock, VP = window.Vue.normalizeClass, ih = window.Vue.createBlock, EP = window.Vue.unref, rh = window.Vue.withCtx, LP = ["textContent"], AP = window.Vue.ref, lh = {
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
    const n = e, s = AP(null), o = (l) => s.value = l, a = () => s.value = null, r = (l) => {
      var d;
      return ((d = n.selectedItem) == null ? void 0 : d.title) === l.title && !s.value || s.value === l.pageId;
    };
    return (l, d) => (Pc(), ih(EP(Je), { class: "sx-article-search__suggestions pa-0" }, {
      header: rh(() => [
        bP("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: xP(e.cardTitle)
        }, null, 8, LP)
      ]),
      default: rh(() => [
        (Pc(!0), $P(kP, null, CP(e.suggestions, (u) => (Pc(), ih(rw, {
          key: u.pageId,
          suggestion: u,
          class: VP({
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
}, TP = window.Vue.computed, DP = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), ch = "other", PP = (e) => TP((t) => {
  const s = e.value.slice(0, 3), o = {
    value: ch,
    props: {
      icon: W0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== ch);
  return DP(a, s) ? t : [...s.map((l) => ({
    value: l,
    props: {
      label: I.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), BP = window.Vue.computed, FP = () => {
  const { supportedSourceLanguageCodes: e } = wa(), { targetLanguageURLParameter: t } = P();
  return { getSuggestedSourceLanguages: (s) => BP(() => {
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
}, NP = window.Vue.ref, MP = () => {
  const e = NP([]), t = () => {
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
const UP = window.Vue.resolveDirective, IP = window.Vue.createElementVNode, Bc = window.Vue.withDirectives, he = window.Vue.unref, ta = window.Vue.withCtx, Jt = window.Vue.createVNode, na = window.Vue.openBlock, uh = window.Vue.createBlock, RP = window.Vue.createCommentVNode, Fc = window.Vue.createElementBlock, zP = window.Vue.Fragment, OP = window.Vue.vShow, sa = window.Vue.withModifiers, oa = window.Vue.withKeys, jP = ["onKeydown"], HP = { class: "mb-0" }, qP = {
  key: 2,
  class: "sx-article-search__empty-state"
}, aa = window.Vue.ref, GP = window.Vue.onMounted, ia = window.Vue.computed, dh = window.Vue.watch, XP = window.Vue.inject, WP = window.Vuex.useStore, KP = window.Codex.CdxButton, YP = window.Codex.CdxIcon, QP = window.Codex.CdxSearchInput, JP = 3, ZP = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = aa(""), n = aa(!1), s = aa(null), o = aa(!1), { previousLanguages: a, addLanguageToHistory: r } = MP(), l = WP(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: u
    } = P(), { supportedSourceLanguageCodes: i } = wa(), { searchResultsSlice: c } = xu(d, t), { getSuggestedSourceLanguages: g } = FP(), p = g(a), m = PP(
      p
    ), h = et(), { fetchAllTranslations: f } = Js();
    GP(() => b(this, null, function* () {
      var D;
      f(), r(d.value), (D = s.value) == null || D.focus();
    }));
    const v = () => {
      h.push({ name: "dashboard" });
    }, _ = of(), C = (D) => {
      _(D, u.value), r(D);
    }, x = (D) => {
      if (D === "other") {
        o.value = !0;
        return;
      }
      C(D);
    };
    dh(
      d,
      () => {
        var D;
        l.dispatch("mediawiki/fetchNearbyPages"), (D = s.value) == null || D.focus();
      },
      { immediate: !0 }
    );
    const y = Ct();
    dh(t, () => {
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
    }, { fetchPreviousEditsInSource: F, previousEditsInSource: V } = jh(), T = aa([]);
    (() => F().then(() => V.value.length > 0 ? ps.fetchPages(
      d.value,
      V.value
    ) : []).then((D) => {
      D = D.slice(0, JP), D = D.sort(
        (M, Q) => V.value.indexOf(M.title) - V.value.indexOf(Q.title)
      ), T.value = D;
    }))();
    const K = ia(() => l.getters["mediawiki/getNearbyPages"]), ie = XP("breakpoints"), te = ia(() => ie.value.mobile), j = ya(), W = ia(
      () => T.value && T.value.length
    ), se = ia(
      () => K.value && K.value.length
    ), { next: re, prev: $e, keyboardNavigationContainer: Fe, selectedItem: De } = Uf(t, c, T), Z = (D) => j(
      D.title,
      d.value,
      u.value,
      tt.value
    ), tt = ia(() => t.value ? "search_result" : W.value ? "suggestion_recent_edit" : se.value ? "suggestion_nearby" : "");
    return (D, M) => {
      const Q = UP("i18n");
      return na(), Fc("section", {
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
                Bc(IP("h5", HP, null, 512), [
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
                Jt(he(KP), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": D.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: v
                }, {
                  default: ta(() => [
                    Jt(he(YP), { icon: he(Qs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Jt(he(QP), {
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
        t.value ? RP("", !0) : (na(), Fc(zP, { key: 0 }, [
          W.value ? (na(), uh(lh, {
            key: 0,
            "card-title": D.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: T.value,
            "selected-item": he(De),
            onSuggestionClicked: M[1] || (M[1] = (w) => Z(w))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : se.value ? (na(), uh(lh, {
            key: 1,
            "card-title": D.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: K.value,
            onSuggestionClicked: M[2] || (M[2] = (w) => Z(w))
          }, null, 8, ["card-title", "suggestions"])) : Bc((na(), Fc("p", qP, null, 512)), [
            [Q, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Bc(Jt(yP, {
          "search-input": t.value,
          "selected-item": he(De),
          onSuggestionClicked: M[3] || (M[3] = (w) => Z(w))
        }, null, 8, ["search-input", "selected-item"]), [
          [OP, !!t.value]
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
      ], 40, jP);
    };
  }
};
const eB = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: ZP
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, tB = window.Vue.resolveComponent, nB = window.Vue.createVNode, sB = window.Vue.normalizeClass, oB = window.Vue.openBlock, aB = window.Vue.createElementBlock;
function iB(e, t, n, s, o, a) {
  const r = tB("sx-article-search");
  return oB(), aB("main", {
    class: sB(["sx-article-search-view", a.classes])
  }, [
    nB(r)
  ], 2);
}
const rB = /* @__PURE__ */ de(eB, [["render", iB]]), lB = () => {
  const e = ya(), t = Vu(), { logDashboardOpenEvent: n } = jf(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o,
    pageURLParameter: a
  } = P();
  return () => b(void 0, null, function* () {
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
}, cB = window.Vuex.useStore, uB = [
  {
    path: "",
    name: "dashboard",
    component: ip,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: rB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: g4,
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
    component: L3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: O5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: ND,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: aD,
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
    component: y6,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: iP,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: ip,
    meta: { workflowStep: 0 }
  }
], Tu = cC({
  history: lb(),
  routes: uB
}), Nc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, dB = (e, t, n) => {
  let s = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return s = s.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(s, "");
};
Tu.beforeEach((e, t, n) => {
  const s = cB();
  if (mw.user.isAnon() || fh.assertUser().catch((i) => {
    i instanceof Xs && s.commit("application/setIsLoginDialogOn", !0);
  }), s.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const o = lB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: d
  } = P();
  if (!!(a.value && r.value && l.value)) {
    if (dB(
      a.value,
      r.value,
      l.value
    )) {
      const c = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      Nc(e.name, c, n);
    } else
      e.name === "sx-translation-confirmer" && o(), Nc(e.name, "sx-translation-confirmer", n);
    return;
  }
  d(), Nc(e.name, "dashboard", n);
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
const gB = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, pB = window.Vue.createApp, mB = mw.config.get("wgUserLanguage"), hB = "en", fB = mw.messages.values || {}, hs = pB(Jy);
hs.use(Tu);
hs.use(Ax);
hs.use(w1);
hs.use(f1);
const wB = W1({
  locale: mB,
  finalFallback: hB,
  messages: fB,
  wikilinks: !0
});
hs.use(wB);
hs.use(gB);
hs.mount("#contenttranslation");
