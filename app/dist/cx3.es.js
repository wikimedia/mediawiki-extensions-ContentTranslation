var cw = Object.defineProperty, uw = Object.defineProperties;
var dw = Object.getOwnPropertyDescriptors;
var Pu = Object.getOwnPropertySymbols;
var gw = Object.prototype.hasOwnProperty, pw = Object.prototype.propertyIsEnumerable;
var Bu = (e, t, n) => t in e ? cw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ue = (e, t) => {
  for (var n in t || (t = {}))
    gw.call(t, n) && Bu(e, n, t[n]);
  if (Pu)
    for (var n of Pu(t))
      pw.call(t, n) && Bu(e, n, t[n]);
  return e;
}, Ye = (e, t) => uw(e, dw(t));
var x = (e, t, n) => new Promise((s, o) => {
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
const ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, hw = {
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
}, fw = window.Vue.toDisplayString, mr = window.Vue.openBlock, hr = window.Vue.createElementBlock, ww = window.Vue.createCommentVNode, Fu = window.Vue.createElementVNode, vw = window.Vue.normalizeClass, _w = ["width", "height", "aria-labelledby"], Sw = ["id"], yw = ["fill"], xw = ["d"];
function Cw(e, t, n, s, o, a) {
  return mr(), hr("span", {
    class: vw(["mw-ui-icon notranslate", a.classes])
  }, [
    (mr(), hr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (mr(), hr("title", {
        key: 0,
        id: n.iconName
      }, fw(n.iconName), 9, Sw)) : ww("", !0),
      Fu("g", { fill: n.iconColor }, [
        Fu("path", { d: a.iconImagePath }, null, 8, xw)
      ], 8, yw)
    ], 8, _w))
  ], 2);
}
const et = /* @__PURE__ */ ge(hw, [["render", Cw]]);
const bw = {
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
}, kw = window.Vue.renderSlot, $w = window.Vue.resolveComponent, Nu = window.Vue.normalizeClass, $a = window.Vue.openBlock, fr = window.Vue.createBlock, wr = window.Vue.createCommentVNode, Vw = window.Vue.toDisplayString, Ew = window.Vue.createElementBlock, Lw = window.Vue.toHandlerKey, Tw = window.Vue.withModifiers, Aw = window.Vue.mergeProps, Dw = window.Vue.createElementVNode, Pw = window.Vue.resolveDynamicComponent, Bw = window.Vue.withCtx, Fw = { class: "mw-ui-button__content" }, Nw = ["textContent"];
function Mw(e, t, n, s, o, a) {
  const r = $w("mw-icon");
  return $a(), fr(Pw(a.component), {
    class: Nu(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Bw(() => [
      kw(e.$slots, "default", {}, () => [
        Dw("span", Fw, [
          n.icon ? ($a(), fr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Nu(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : wr("", !0),
          !a.isIcon && n.label ? ($a(), Ew("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Vw(n.label)
          }, null, 8, Nw)) : wr("", !0),
          n.indicator ? ($a(), fr(r, Aw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Lw(a.indicatorClickEvent)]: t[0] || (t[0] = Tw((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : wr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Xe = /* @__PURE__ */ ge(bw, [["render", Mw]]);
const Uw = {
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
}, Iw = window.Vue.renderList, Rw = window.Vue.Fragment, vr = window.Vue.openBlock, Mu = window.Vue.createElementBlock, zw = window.Vue.resolveComponent, Ow = window.Vue.withModifiers, Hw = window.Vue.mergeProps, jw = window.Vue.createBlock, qw = { class: "row mw-ui-button-group ma-0 pa-0" };
function Gw(e, t, n, s, o, a) {
  const r = zw("mw-button");
  return vr(), Mu("div", qw, [
    (vr(!0), Mu(Rw, null, Iw(n.items, (l) => (vr(), jw(r, Hw({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Ow((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const ma = /* @__PURE__ */ ge(Uw, [["render", Gw]]);
const Xw = {
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
}, Uu = window.Vue.renderSlot, Ww = window.Vue.toDisplayString, Iu = window.Vue.openBlock, Ru = window.Vue.createElementBlock, Kw = window.Vue.createCommentVNode, Yw = window.Vue.createElementVNode, Qw = { class: "mw-ui-card" }, Jw = ["textContent"], Zw = { class: "mw-ui-card__content" };
function e0(e, t, n, s, o, a) {
  return Iu(), Ru("div", Qw, [
    Uu(e.$slots, "header", {}, () => [
      n.title ? (Iu(), Ru("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Ww(n.title)
      }, null, 8, Jw)) : Kw("", !0)
    ]),
    Yw("div", Zw, [
      Uu(e.$slots, "default")
    ])
  ]);
}
const Ze = /* @__PURE__ */ ge(Xw, [["render", e0]]);
const t0 = {}, n0 = window.Vue.openBlock, s0 = window.Vue.createElementBlock, o0 = { class: "mw-ui-divider row" };
function a0(e, t) {
  return n0(), s0("div", o0);
}
const Gi = /* @__PURE__ */ ge(t0, [["render", a0]]);
const i0 = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, r0 = window.Vue.renderSlot, l0 = window.Vue.resolveDynamicComponent, c0 = window.Vue.withCtx, u0 = window.Vue.openBlock, d0 = window.Vue.createBlock;
function g0(e, t, n, s, o, a) {
  return u0(), d0(l0(n.tag), { class: "mw-grid container" }, {
    default: c0(() => [
      r0(e.$slots, "default")
    ]),
    _: 3
  });
}
const p0 = /* @__PURE__ */ ge(i0, [["render", g0]]), m0 = {
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
}, h0 = window.Vue.renderSlot, f0 = window.Vue.resolveDynamicComponent, w0 = window.Vue.normalizeClass, v0 = window.Vue.withCtx, _0 = window.Vue.openBlock, S0 = window.Vue.createBlock;
function y0(e, t, n, s, o, a) {
  return _0(), S0(f0(n.tag), {
    class: w0(a.classes)
  }, {
    default: v0(() => [
      h0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const M = /* @__PURE__ */ ge(m0, [["render", y0]]), Nc = ["mobile", "tablet", "desktop", "desktop-wide"], x0 = Nc.reduce(
  (e, t) => Ye(ue({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), C0 = {
  name: "MwCol",
  props: Ye(ue({}, x0), {
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
}, b0 = window.Vue.renderSlot, k0 = window.Vue.resolveDynamicComponent, $0 = window.Vue.normalizeClass, V0 = window.Vue.withCtx, E0 = window.Vue.openBlock, L0 = window.Vue.createBlock;
function T0(e, t, n, s, o, a) {
  return E0(), L0(k0(n.tag), {
    class: $0(a.classes)
  }, {
    default: V0(() => [
      b0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ ge(C0, [["render", T0]]), A0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", D0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Xi = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", P0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, B0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", ch = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", F0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", N0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", Wi = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", M0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", U0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", I0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", zu = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", R0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", uh = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", z0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", O0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", H0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", j0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", q0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Mc = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, G0 = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, X0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, dh = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", W0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const _r = window.Vue.computed, K0 = window.Vue.watch, Y0 = window.Vue.ref, Q0 = window.Vue.nextTick, J0 = {
  name: "MwDialog",
  components: {
    MwButton: Xe,
    MwRow: M,
    MwCol: k,
    MwDivider: Gi
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
    const n = Y0(null), s = _r(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), o = _r(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    K0(
      () => e.value,
      (u) => {
        u ? (r(), Q0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = _r(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: s,
      cssVars: l,
      overlayClass: o,
      mwIconClose: Wi,
      root: n
    };
  }
}, Ou = window.Vue.normalizeClass, Sr = window.Vue.createElementVNode, yr = window.Vue.renderSlot, Va = window.Vue.resolveComponent, io = window.Vue.createVNode, xr = window.Vue.withCtx, Hu = window.Vue.createCommentVNode, Z0 = window.Vue.withKeys, ju = window.Vue.openBlock, ev = window.Vue.createElementBlock, tv = window.Vue.Transition, nv = window.Vue.normalizeStyle, sv = window.Vue.createBlock, ov = { class: "mw-ui-dialog__shell items-stretch" }, av = { class: "mw-ui-dialog__body" };
function iv(e, t, n, s, o, a) {
  const r = Va("mw-col"), l = Va("mw-button"), u = Va("mw-row"), d = Va("mw-divider");
  return ju(), sv(tv, {
    name: "mw-ui-animation-fade",
    style: nv(s.cssVars)
  }, {
    default: xr(() => [
      n.value ? (ju(), ev("div", {
        key: 0,
        ref: "root",
        class: Ou(["mw-ui-dialog", s.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = Z0((i) => n.closeOnEscapeKey && s.close(), ["esc"]))
      }, [
        Sr("div", {
          class: Ou(["mw-ui-dialog__overlay", s.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && s.close())
        }, null, 2),
        Sr("div", ov, [
          n.header ? yr(e.$slots, "header", { key: 0 }, () => [
            io(u, { class: "mw-ui-dialog__header" }, {
              default: xr(() => [
                io(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                io(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: xr(() => [
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
            io(d)
          ]) : Hu("", !0),
          Sr("div", av, [
            yr(e.$slots, "default")
          ]),
          yr(e.$slots, "footer")
        ])
      ], 34)) : Hu("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const Ct = /* @__PURE__ */ ge(J0, [["render", iv]]);
const rv = {
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
      const t = ue({}, e.$attrs);
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
}, qu = window.Vue.renderSlot, lv = window.Vue.resolveComponent, Ea = window.Vue.openBlock, Cr = window.Vue.createBlock, Gu = window.Vue.createCommentVNode, cv = window.Vue.resolveDynamicComponent, uv = window.Vue.toDisplayString, dv = window.Vue.mergeProps, gv = window.Vue.withModifiers, pv = window.Vue.createElementVNode, mv = window.Vue.normalizeClass, hv = window.Vue.createElementBlock, fv = { class: "mw-ui-input__content" };
function wv(e, t, n, s, o, a) {
  const r = lv("mw-icon");
  return Ea(), hv("div", {
    class: mv(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    pv("div", fv, [
      qu(e.$slots, "icon", {}, () => [
        n.icon ? (Ea(), Cr(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Gu("", !0)
      ]),
      (Ea(), Cr(cv(n.type === "textarea" ? n.type : "input"), dv({
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
        textContent: uv(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      qu(e.$slots, "indicator", {}, () => [
        n.indicator ? (Ea(), Cr(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = gv((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Gu("", !0)
      ])
    ])
  ], 2);
}
const Uc = /* @__PURE__ */ ge(rv, [["render", wv]]);
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
const vv = {}, _v = window.Vue.createElementVNode, Sv = window.Vue.openBlock, yv = window.Vue.createElementBlock, xv = { class: "mw-ui-spinner" }, Cv = /* @__PURE__ */ _v("div", { class: "mw-ui-spinner__bounce" }, null, -1), bv = [
  Cv
];
function kv(e, t) {
  return Sv(), yv("div", xv, bv);
}
const dt = /* @__PURE__ */ ge(vv, [["render", kv]]), St = {
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
const $v = window.Vue.computed, Vv = {
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
      default: dh
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
    const n = $v(() => {
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
}, Xu = window.Vue.normalizeStyle, Wu = window.Vue.openBlock, Ev = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Lv = window.Vue.resolveComponent, Tv = window.Vue.createBlock;
function Av(e, t, n, s, o, a) {
  const r = Lv("mw-ui-icon");
  return n.thumbnail ? (Wu(), Ev("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Xu(s.style)
  }, null, 4)) : (Wu(), Tv(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Xu(s.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Qc = /* @__PURE__ */ ge(Vv, [["render", Av]]);
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
const Dv = {
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
}, Ku = window.Vue.normalizeClass, Yu = window.Vue.normalizeStyle, Pv = window.Vue.createElementVNode, Bv = window.Vue.openBlock, Fv = window.Vue.createElementBlock, Nv = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function Mv(e, t, n, s, o, a) {
  return Bv(), Fv("div", {
    class: Ku(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Yu(a.containerStyles)
  }, [
    Pv("div", {
      class: Ku(["mw-progress-bar__bar", a.barClass]),
      style: Yu(a.barStyles)
    }, null, 6)
  ], 14, Nv);
}
const gh = /* @__PURE__ */ ge(Dv, [["render", Mv]]), Uv = (e, t, n, s) => (o) => {
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
}, Iv = (e, t, n, s) => ({ initiateDrag: Uv(
  e,
  t,
  n,
  s
) }), Rv = window.Vue.ref, Qu = window.Vue.computed, zv = (e, t, n, s) => {
  const o = Rv(0), a = Qu(
    () => t.value > e.value
  ), r = Qu(
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
const La = window.Vue.ref, Ov = window.Vue.onMounted, Ju = window.Vue.computed, Hv = window.Vue.nextTick, jv = {
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
    ), o = La(1), { initiateDrag: a } = Iv(
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
    } = zv(s, o, n, t), c = () => d(u.value + 1), g = La(null), p = Ju(() => ({
      "--collapsed-height": s.value + "px"
    })), m = () => {
      if (!n.value)
        return;
      const f = n.value.style.height;
      if (n.value.style.removeProperty("height"), o.value = n.value.scrollHeight, f) {
        let w = Math.min(f, o.value);
        w = Math.max(w, s.value), w === s.value && (t.value = !0), n.value.style.height = w + "px";
      }
    };
    return Ov(() => x(this, null, function* () {
      var f;
      yield Hv(), o.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: X0,
      mwIconExpand: F0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, qv = window.Vue.renderSlot, Gv = window.Vue.normalizeClass, Ta = window.Vue.createElementVNode, Xv = window.Vue.resolveComponent, Wv = window.Vue.createVNode, br = window.Vue.openBlock, Kv = window.Vue.createBlock, Zu = window.Vue.createCommentVNode, ed = window.Vue.createElementBlock, Yv = window.Vue.normalizeStyle, Qv = { class: "mw-ui-expandable-content__container" }, Jv = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, Zv = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function e1(e, t, n, s, o, a) {
  const r = Xv("mw-button");
  return br(), ed("div", {
    class: "mw-ui-expandable-content",
    style: Yv(s.cssVars)
  }, [
    Ta("div", Qv, [
      Ta("div", {
        ref: "contentRef",
        class: Gv(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": s.isCollapsed
        }])
      }, [
        qv(e.$slots, "default")
      ], 2),
      n.scroll && s.scrollable ? (br(), ed("div", Jv, [
        Wv(r, {
          type: "icon",
          icon: s.mwIconCollapse,
          disabled: s.isCollapsed && s.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: s.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        s.isCollapsed ? (br(), Kv(r, {
          key: 0,
          type: "icon",
          icon: s.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: s.isScrolledToEnd,
          onClick: s.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Zu("", !0)
      ])) : Zu("", !0)
    ]),
    Ta("div", Zv, [
      Ta("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => s.onDragButtonClicked && s.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const t1 = /* @__PURE__ */ ge(jv, [["render", e1]]);
const Aa = window.Vue.computed, n1 = {
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
}, td = window.Vue.createElementVNode, nd = window.Vue.normalizeStyle, s1 = window.Vue.openBlock, o1 = window.Vue.createElementBlock, a1 = ["width", "height", "viewport"], i1 = ["r", "cx", "cy", "stroke-dasharray"], r1 = ["r", "cx", "cy", "stroke-dasharray"];
function l1(e, t, n, s, o, a) {
  return s1(), o1("svg", {
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
    }, null, 8, i1),
    td("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: s.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": s.dashArray,
      "stroke-dashoffset": "0",
      style: nd({ strokeDashoffset: `${s.strokeDashOffset}px` })
    }, null, 12, r1)
  ], 12, a1);
}
const c1 = /* @__PURE__ */ ge(n1, [["render", l1]]), u1 = window.Vue.ref, _n = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, kn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${_n.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${_n.tablet}px) and (max-width: ${_n.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${_n.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${_n.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${_n["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${_n.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${_n["desktop-wide"]}px)`
}, kr = {
  mobile: () => matchMedia(kn.mobile).matches,
  tablet: () => matchMedia(kn.tablet).matches,
  desktop: () => matchMedia(kn.desktop).matches,
  desktopwide: () => matchMedia(kn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(kn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(kn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(kn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(kn["desktop-and-down"]).matches
}, d1 = (e) => {
  const t = Object.values(_n);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, g1 = {
  install: (e) => {
    const t = u1({
      nextBreakpoint: null
    }), n = () => {
      const s = window.innerWidth;
      for (let o in kr)
        kr.hasOwnProperty(o) && (t.value[o] = kr[o]());
      t.value.nextBreakpoint = d1(s);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Ye(ue({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, p1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ye(ue({}, e.config.globalProperties.$mwui || {}), {
      colors: St
    }), e.provide("colors", St);
  }
};
class Xs extends Error {
}
const m1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Xs();
}), ph = { assertUser: m1 };
const h1 = window.Vue.resolveDirective, ro = window.Vue.createElementVNode, sd = window.Vue.withDirectives, f1 = window.Vue.toDisplayString, w1 = window.Vue.unref, od = window.Vue.withCtx, v1 = window.Vue.openBlock, _1 = window.Vue.createBlock, S1 = window.Vue.createCommentVNode, y1 = { class: "pa-4 sx-login-dialog__header" }, x1 = { class: "sx-login-dialog__body px-6 pb-4" }, C1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, b1 = ["href"], k1 = window.Vue.computed, $1 = window.Vue.ref, V1 = window.Vuex.useStore, E1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = V1(), n = k1(() => t.state.application.isLoginDialogOn), s = () => t.commit("application/setIsLoginDialogOn", !1), o = $1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = h1("i18n");
      return n.value ? (v1(), _1(w1(Ct), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: s
      }, {
        header: od(() => [
          ro("div", y1, [
            sd(ro("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: od(() => [
          sd(ro("div", x1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          ro("div", C1, [
            ro("a", {
              class: "py-1",
              href: o.value,
              target: "_blank"
            }, f1(a.$i18n("cx-sx-login-dialog-button-label")), 9, b1)
          ])
        ]),
        _: 1
      })) : S1("", !0);
    };
  }
}, K = new mw.cx.SiteMapper(), L1 = mw.util.getUrl, T1 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const s = JSON.parse(mw.cookie.get("ULSGeo"));
  return s && s.latitude + "|" + s.longitude;
}, qn = !mw.config.get("wgMFMode");
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
    status: u,
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = s, this.targetLanguage = o, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = u, this.targetTitle = d;
  }
}
const Da = "original", Pa = "empty", A1 = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class re {
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
    return A1[t] || t;
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
class Hn {
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
    this.id = t, this.translatedContent = s, this.mtProviderUsed = "", this.node = o, this.proposedTranslations = Ye(ue({}, a), {
      [re.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [re.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
  }
  reset() {
    this.proposedTranslations = {
      [re.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [re.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[re.ORIGINAL_TEXT_PROVIDER_KEY];
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
  const t = Hi(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Hi = (e) => {
  var n, s, o;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((o = (s = t == null ? void 0 : t.parts) == null ? void 0 : s[0]) == null ? void 0 : o.template) || null;
}, ls = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), mh = (e) => {
  const t = Hi(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: s } = t;
  if (!s)
    return `{{${n}}}`;
  for (const o in s) {
    const a = D1(s[o].wt);
    n += ` | ${o} = ${a}`;
  }
  return `{{${n}}}`;
}, D1 = (e) => {
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
}, hh = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, fh = (e) => {
  const t = hh(e);
  return t == null ? void 0 : t.targetExists;
};
class $r {
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
      (a) => ls(a)
    );
    o && fh(o) && (this.blockTemplateAdaptationInfo[t] = hh(o));
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
      (t) => ls(t)
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
    const t = Hi(this.transclusionNode);
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((s) => ls(s));
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
    const s = Hi(n);
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
      (a) => ls(a)
    );
    this.isBlockTemplate && s && (s.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const o = [
      new $r({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new $r({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && o.push(
      new $r({
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
    if (!t || re.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const s = Array.from(n.children).find(
        (o) => ls(o)
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
), P1 = Zc - 10, B1 = [
  { status: "failure", value: 100 - Zc },
  { status: "warning", value: 100 - P1 },
  { status: "success", value: 100 }
], wh = (e, t, n) => {
  const s = id(e).textContent, o = id(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(o, s, n);
  return Math.ceil(a);
}, F1 = (e) => B1.find((t) => e <= t.value).status, N1 = (e, t) => wh(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), M1 = () => (100 - Zc) / 100, id = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, tn = {
  calculateScore: wh,
  getScoreStatus: F1,
  getMTScoreForPageSection: N1,
  getMtModificationThreshold: M1
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
      [re.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [re.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [re.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return Ba;
  }
  static isSectionLead(t) {
    return !t || t === Ba;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[re.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[re.ORIGINAL_TEXT_PROVIDER_KEY];
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
    return n instanceof ct ? n.transclusionNode.outerHTML : n instanceof Hn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof ct ? t.blockTemplateSelected = !1 : t instanceof Hn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof ct ? n.blockTemplateSelected = !0 : n instanceof Hn && (n.selected = !0);
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
    if (s instanceof Hn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof ct ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Hn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof ct ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Hn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
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
class Ki extends Jc {
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
    return Ic.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Ic.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const nn = "previous-edits", xn = "popular", We = "topic", Ve = "geography", ee = "collections", Je = "automatic", yt = "seed", rd = window.Vue.ref, { topics: U1, regions: I1 } = mw.loader.require(
  "ext.cx.articlefilters"
), Fa = {
  type: Je,
  id: nn
}, eu = () => {
  const e = rd(
    U1.flatMap((l) => l.topics).map((l) => l.topicId.toLowerCase())
  ), t = rd(!1), n = (l, u) => e.value.includes(u) ? { type: We, id: u } : null, s = (l, u) => I1.some(
    (i) => i.id.toLowerCase() === u || i.countries.some(
      (c) => c.id.toLowerCase() === u
    )
  ) ? { type: Ve, id: u } : null, o = (l, u, d) => d && !d.some((i) => i.name.toLowerCase() === u) ? null : { type: ee, id: l };
  return { filtersValidatorError: t, validateFilters: ({ type: l, id: u }, d = !1) => {
    t.value = !1;
    const i = l == null ? void 0 : l.toLowerCase(), c = u == null ? void 0 : u.toLowerCase();
    if (c === nn)
      return {
        type: Je,
        id: nn
      };
    if (c === xn)
      return {
        type: Je,
        id: xn
      };
    if (c === ee)
      return d && !d.length ? (t.value = !0, Fa) : {
        type: Je,
        id: ee
      };
    if (i === We) {
      const g = n(u, c);
      if (g)
        return g;
      t.value = !0;
    } else if (i === Ve) {
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
    return Fa;
  }, isDefaultFilter: ({ type: l, id: u }) => l === Fa.type && u === Fa.id };
}, R1 = window.Vue.inject, z1 = window.Vue.reactive;
var O1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, vh = { exports: {} };
(function(e, t) {
  (function(n, s) {
    e.exports = s();
  })(O1, function() {
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
          for (const w in p)
            h[p[w]] = w;
          p = h;
          const f = String(c);
          for (let w = 0; w < f.length; w++)
            m += p[f[w]] || f[w];
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
            function w(L) {
              return () => {
                for (let H = 0; H < L.length; H++) {
                  const Ne = L[H]();
                  if (Ne !== null)
                    return Ne;
                }
                return null;
              };
            }
            function _(L) {
              const H = f, Ne = [];
              for (let G = 0; G < L.length; G++) {
                const ze = L[G]();
                if (ze === null)
                  return f = H, null;
                Ne.push(ze);
              }
              return Ne;
            }
            function C(L, H) {
              return () => {
                const Ne = f, G = [];
                let ze = H();
                for (; ze !== null; )
                  G.push(ze), ze = H();
                return G.length < L ? (f = Ne, null) : G;
              };
            }
            function S(L) {
              const H = L.length;
              return () => {
                let Ne = null;
                return m.slice(f, f + H) === L && (Ne = L, f += H), Ne;
              };
            }
            function b(L) {
              return () => {
                const H = m.slice(f).match(L);
                return H === null ? null : (f += H[0].length, H[0]);
              };
            }
            const A = b(/^\s+/), y = S("|"), B = S(":"), V = S("\\"), E = b(/^./), j = S("$"), se = b(/^\d+/), ae = S('"'), te = S("'"), z = b(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), J = b(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), oe = w([le, b(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function le() {
              const L = _([V, E]);
              return L === null ? null : L[1];
            }
            const ke = w([le, J]), Ke = w([le, z]);
            function Pe() {
              const L = _([j, se]);
              return L === null ? null : ["REPLACE", parseInt(L[1], 10) - 1];
            }
            const Z = (I = b(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), F = function(L) {
              return L.toString();
            }, () => {
              const L = I();
              return L === null ? null : F(L);
            });
            var I, F;
            function U() {
              const L = _([y, C(0, fs)]);
              if (L === null)
                return null;
              const H = L[1];
              return H.length > 1 ? ["CONCAT"].concat(H) : H[0];
            }
            function Y() {
              const L = _([Z, B, Pe]);
              return L === null ? null : [L[0], L[2]];
            }
            function v() {
              const L = _([Z, B, fs]);
              return L === null ? null : [L[0], L[2]];
            }
            function T() {
              const L = _([Z, B]);
              return L === null ? null : [L[0], ""];
            }
            const P = w([function() {
              const L = _([w([Y, v, T]), C(0, U)]);
              return L === null ? null : L[0].concat(L[1]);
            }, function() {
              const L = _([Z, C(0, U)]);
              return L === null ? null : [L[0]].concat(L[1]);
            }]), N = S("{{"), X = S("}}"), pe = S("[["), q = S("]]"), O = S("["), ie = S("]");
            function nt() {
              const L = _([N, P, X]);
              return L === null ? null : L[1];
            }
            const $e = w([function() {
              const L = _([C(1, fs), y, C(1, hs)]);
              return L === null ? null : [["CONCAT"].concat(L[0]), ["CONCAT"].concat(L[2])];
            }, function() {
              const L = _([C(1, fs)]);
              return L === null ? null : [["CONCAT"].concat(L[0])];
            }]);
            function xa() {
              let L = null;
              const H = _([pe, $e, q]);
              if (H !== null) {
                const Ne = H[1];
                L = ["WIKILINK"].concat(Ne);
              }
              return L;
            }
            function ms() {
              let L = null;
              const H = _([O, C(1, ur), A, C(1, hs), ie]);
              return H !== null && (L = ["EXTLINK", H[1].length === 1 ? H[1][0] : ["CONCAT"].concat(H[1]), ["CONCAT"].concat(H[3])]), L;
            }
            const to = b(/^[A-Za-z]+/);
            function lr() {
              const L = b(/^[^"]*/), H = _([ae, L, ae]);
              return H === null ? null : H[1];
            }
            function no() {
              const L = b(/^[^']*/), H = _([te, L, te]);
              return H === null ? null : H[1];
            }
            function so() {
              const L = b(/^\s*=\s*/), H = _([A, to, L, w([lr, no])]);
              return H === null ? null : [H[1], H[3]];
            }
            function cr() {
              const L = C(0, so)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], L);
            }
            const ur = w([nt, Pe, xa, ms, function() {
              const L = C(1, oe)();
              return L === null ? null : L.join("");
            }]), hs = w([nt, Pe, xa, ms, function() {
              let L = null;
              const H = f, Ne = S("<"), G = b(/^\/?/), ze = b(/^\s*>/), sn = _([Ne, to, cr, G, ze]);
              if (sn === null)
                return null;
              const mt = f, oo = sn[1], ao = C(0, hs)(), ow = f, Au = _([S("</"), to, ze]);
              if (Au === null)
                return ["CONCAT", m.slice(H, mt)].concat(ao);
              const aw = f, iw = Au[1], Du = sn[2];
              if (function(Kn, ba, dr, gr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((Kn = Kn.toLowerCase()) !== (ba = ba.toLowerCase()) || gr.allowedHtmlElements.indexOf(Kn) === -1)
                  return !1;
                const rw = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let ka = 0, lw = dr.length; ka < lw; ka += 2) {
                  const pr = dr[ka];
                  if (gr.allowedHtmlCommonAttributes.indexOf(pr) === -1 && (gr.allowedHtmlAttributesByElement[Kn] || []).indexOf(pr) === -1 || pr === "style" && dr[ka + 1].search(rw) !== -1)
                    return !1;
                }
                return !0;
              }(oo, iw, Du.slice(1)))
                L = ["HTMLELEMENT", oo, Du].concat(ao);
              else {
                const Kn = (ba) => ba.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                L = ["CONCAT", Kn(m.slice(H, mt))].concat(ao, Kn(m.slice(ow, aw)));
              }
              return L;
            }, function() {
              const L = C(1, Ke)();
              return L === null ? null : L.join("");
            }]), fs = w([nt, Pe, function() {
              const L = C(1, ke)();
              return L === null ? null : L.join("");
            }]), Ca = function() {
              const L = C(0, hs)();
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
            const f = m.slice(0, h).join("-"), w = this.messageStore.getMessage(i, f);
            if (typeof w == "string")
              return w;
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
})(vh);
var H1 = vh.exports;
const ld = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, _h = Symbol("banana-context");
function he() {
  const e = R1(_h);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function j1(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = z1(new H1(e.locale, e));
  return {
    install: (n) => {
      n.provide(_h, t), n.config.globalProperties.$i18n = (s, o) => (o = o || [], Array.isArray(o) || (o = [o]), t.i18n(s, ...o)), n.provide("setLocale", (s) => {
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
const Cn = window.Vue.ref, q1 = window.Vue.computed, Yi = Cn(null), Qi = Cn(null), Ji = Cn(null), ha = Cn(null), tu = Cn(null), Zi = Cn(null), Sh = Cn(null), yh = Cn(null), nu = Cn(null), { validateFilters: G1, filtersValidatorError: X1 } = eu(), xh = {
  from: Yi,
  to: Qi,
  section: ha,
  draft: tu,
  page: Ji,
  revision: Zi,
  "active-list": nu
}, W1 = q1(() => ({
  type: Sh.value,
  id: yh.value
})), Ch = (e, t) => {
  Sh.value = e, yh.value = t, ji("filter-type", e), t && ji("filter-id", t);
}, K1 = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Ki && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const s in n) {
    const o = n[s];
    t.set(s, o), xh[s].value = o;
  }
  t.delete("title"), fa(Object.fromEntries(t));
}, su = (e, t) => {
  xh[e].value = t, ji(e, t);
}, Y1 = (e) => {
  su("section", e);
}, Q1 = (e) => {
  su("page", e);
}, J1 = (e) => {
  su("active-list", e);
}, fa = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    L1(`Special:ContentTranslation${t}`, e)
  );
}, Z1 = () => {
  const e = he(), t = new URLSearchParams(location.search);
  Ji.value = t.get("page"), Yi.value = t.get("from"), Qi.value = t.get("to"), ha.value = t.get("section"), Zi.value = t.get("revision"), nu.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = G1({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Ch(n.type, n.id), X1.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, e_ = () => {
  const e = new URLSearchParams(location.search);
  ha.value = null, e.delete("section"), e.delete("title"), fa(Object.fromEntries(e));
}, ji = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), fa(Object.fromEntries(n));
}, t_ = (e) => new URLSearchParams(location.search).get(e), n_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Yi.value = e, Qi.value = t, n.delete("title"), fa(Object.fromEntries(n));
}, s_ = () => {
  const e = new URLSearchParams(location.search);
  Ji.value = null, ha.value = null, tu.value = null, Zi.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), fa(Object.fromEntries(e));
}, o_ = () => new URLSearchParams(location.search).get("force-quick-tutorial"), D = () => ({
  isQuickTutorialForced: o_,
  setLanguageURLParams: n_,
  setSectionURLParam: Y1,
  setTranslationURLParams: K1,
  initializeURLState: Z1,
  clearTranslationURLParameters: s_,
  clearSectionURLParameter: e_,
  setUrlParam: ji,
  getUrlParam: t_,
  pageURLParameter: Ji,
  sourceLanguageURLParameter: Yi,
  targetLanguageURLParameter: Qi,
  sectionURLParameter: ha,
  draftURLParameter: tu,
  revisionURLParameter: Zi,
  setPageURLParam: Q1,
  currentSuggestionFilters: W1,
  setFilterURLParams: Ch,
  activeDashboardTabParameter: nu,
  setActiveDashboardTabParameter: J1
}), a_ = () => K.getLanguagePairs();
function i_(e, t) {
  return x(this, null, function* () {
    const n = K.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((s) => s.json()).then(
      (s) => Object.freeze(
        new re(e, t, s.mt)
      )
    );
  });
}
function r_() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function l_(e, t, n, s) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const o = mw.config.get("wgWikiID"), a = K.getWikiDomainCode(e), r = K.getWikiDomainCode(t), l = {
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
const er = {
  fetchSupportedLanguageCodes: a_,
  fetchSupportedMTProviders: i_,
  fetchCXServerToken: r_,
  addWikibaseLink: l_
}, ou = window.Vue.ref, cd = ou([]), ud = ou([]), dd = ou(!1);
function wa() {
  return {
    fetchSupportedLanguageCodes: () => x(this, null, function* () {
      if (!dd.value) {
        dd.value = !0;
        const t = yield er.fetchSupportedLanguageCodes();
        cd.value = t.sourceLanguages, ud.value = t.targetLanguages;
      }
    }),
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
function Wn(e) {
  return va(e) && Re.languages[e].length === 1 ? Re.languages[e][0] : !1;
}
function h_() {
  return Re.languages;
}
function _a(e) {
  var t = Wn(e);
  return t ? _a(t) : va(e) ? Re.languages[e][0] : "Zyyy";
}
function au(e) {
  var t = Wn(e);
  return t ? au(t) : va(e) && Re.languages[e][1] || "UNKNOWN";
}
function da(e) {
  var t = Wn(e);
  return t ? da(t) : va(e) && Re.languages[e][2] || e;
}
function f_() {
  var e, t = {};
  for (e in Re.languages)
    Wn(e) || (t[e] = da(e));
  return t;
}
function bh(e) {
  var t, n, s = [];
  for (t in Re.languages)
    if (!Wn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === _a(t)) {
          s.push(t);
          break;
        }
    }
  return s;
}
function w_(e) {
  return bh([e]);
}
function kh(e) {
  var t;
  for (t in Re.scriptgroups)
    if (Re.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function iu(e) {
  return kh(_a(e));
}
function $h(e) {
  var t = {}, n, s, o, a;
  for (s = 0; s < e.length; s++)
    n = e[s], o = Wn(n) || n, a = iu(o), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function Vh(e) {
  var t, n, s, o = {};
  for (t in Re.languages)
    if (!Wn(t)) {
      for (n = 0; n < e.length; n++)
        if (au(t).includes(e[n])) {
          s = iu(t), o[s] === void 0 && (o[s] = []), o[s].push(t);
          break;
        }
    }
  return o;
}
function v_(e) {
  return Vh([e]);
}
function __(e) {
  var t, n, s, o = [];
  for (t = $h(e), n = Object.keys(t).sort(), s = 0; s < n.length; s++)
    o = o.concat(t[n[s]]);
  return o;
}
function S_(e, t) {
  var n = da(e) || e, s = da(t) || t;
  return n.toLowerCase() < s.toLowerCase() ? -1 : 1;
}
function Eh(e) {
  return Re.rtlscripts.includes(_a(e));
}
function y_(e) {
  return Eh(e) ? "rtl" : "ltr";
}
function x_(e) {
  return Re.territories[e] || [];
}
function C_(e, t) {
  t.target ? Re.languages[e] = [t.target] : Re.languages[e] = [t.script, t.regions, t.autonym];
}
var R = {
  addLanguage: C_,
  getAutonym: da,
  getAutonyms: f_,
  getDir: y_,
  getGroupOfScript: kh,
  getLanguages: h_,
  getLanguagesByScriptGroup: $h,
  getLanguagesByScriptGroupInRegion: v_,
  getLanguagesByScriptGroupInRegions: Vh,
  getLanguagesInScript: w_,
  getLanguagesInScripts: bh,
  getLanguagesInTerritory: x_,
  getRegions: au,
  getScript: _a,
  getScriptGroupOfLanguage: iu,
  isKnown: va,
  isRedirect: Wn,
  isRtl: Eh,
  sortByScriptGroup: __,
  sortByAutonym: S_
};
const ws = window.Vue.computed;
function Ae(e) {
  const t = ws(() => e.state.application.sourceLanguage), n = ws(() => e.state.application.targetLanguage), s = ws(
    () => e.state.application.currentMTProvider
  ), o = ws(
    () => R.getAutonym(t.value)
  ), a = ws(
    () => R.getAutonym(n.value)
  ), r = ws(() => e.state.application.previousRoute);
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
class b_ {
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
      const u = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = !1 : (l = !0, r.unshift(a));
      const d = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (i) => new ct({
          sentences: T_(i),
          node: i
        })
      );
      return new Ic({ id: u, subSections: d, isLeadSection: l });
    }
  );
}, L_ = (e) => {
  const t = e.reduce((n, s) => {
    const o = s.dataset.mwSectionNumber;
    return n[o] = n[o] ? [...n[o], s] : [s], n;
  }, {});
  return Object.values(t);
}, T_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Hn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), Lh = {
  convertSegmentedContentToPageSections: E_
}, ru = 120, A_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: ru,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return K.getApi(e).get(n).then((o) => {
    const a = o.query.pages, l = (o.query.redirects || []).reduce(
      (i, c) => Ye(ue({}, i), { [c.to]: c.from }),
      {}
    ), d = (o.query.normalized || []).reduce(
      (i, c) => Ye(ue({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = d[i.title] || l[i.title] || null;
      return new Ws(Ye(ue({}, i), { _alias: c }));
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
  return K.getApi(e).get(n).then((o) => {
    var u, d;
    const a = o.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return l ? Object.freeze(new b_(l, r)) : null;
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
  return K.getApi(e).get(s).then((a) => Object.values(a.query.pages).map((l) => {
    var u, d;
    return (d = (u = l.langlinks) == null ? void 0 : u[0]) == null ? void 0 : d["*"];
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
    K.getApi(e).get(l).then((d) => {
      var i;
      return r(((i = d == null ? void 0 : d.parse) == null ? void 0 : i.sections) || []);
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
      const u = Lh.convertSegmentedContentToPageSections(
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
}, F_ = (e, t, n, s = null) => {
  const o = K.getWikiDomainCode(e), a = K.getWikiDomainCode(t), r = {
    $sourcelanguage: o,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  s && (r.$revision = s, l += "/$revision");
  const u = K.getCXServerUrl(
    l,
    r
  );
  return fetch(u).then((d) => d.json()).then((d) => d.segmentedContent);
}, N_ = (e) => {
  const t = T1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: ru,
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
    K.getApi(e).get(n).then((a) => {
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
    pithumbsize: ru,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return K.getApi(t).get(s).then((o) => {
    var a;
    return ((a = o.query) == null ? void 0 : a.pages) || [];
  }).then(
    (o) => o.sort((a, r) => a.index - r.index).map(
      (a) => new Ws(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((o) => []);
}, ds = {
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
      const r = n.slice(a, a + s), l = ds.fetchPages(t, r).then(
        (u) => u.forEach(
          (d) => e.commit("mediawiki/addPage", d)
        )
      );
      o.push(l);
    }
    return Promise.all(o);
  };
}, I_ = window.Vuex.useStore, lu = () => {
  const e = I_(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = D(), { maxSuggestionsPerSlice: o } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
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
class gs {
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
const Th = [
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
], H_ = [
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
], j_ = {
  en: Th,
  es: R_,
  bn: z_,
  fr: O_,
  de: H_
};
class js {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: s,
    missingSectionsCount: o = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = s, this.missingSectionsCount = o;
  }
}
class cu {
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
class Ah extends gs {
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
    }), this.collection = new cu(d);
  }
}
class Dh extends en {
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
    }), this.collection = new cu(p);
  }
}
let Na = null;
const Ph = (e) => {
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
}, q_ = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits", G_ = () => x(void 0, null, function* () {
  if (mw.user.isAnon())
    return !1;
  const e = mw.user.getName();
  return (yield Ph(e)) < 100;
}), ut = {
  stub: "stub",
  easy: "easy",
  medium: "medium",
  hard: "hard",
  unknown: "unknown"
}, Bh = {
  easy: 2500,
  medium: 1e4,
  hard: 4e4
}, Fh = {
  easy: 1e3,
  medium: 4e3,
  hard: 12e3
}, Nh = (e, t) => !e || e < 0 ? ut.unknown : e < t.easy ? ut.stub : e < t.medium ? ut.easy : e < t.hard ? ut.medium : ut.hard, Mh = (e) => Nh(e, Bh), Uh = (e) => Nh(e, Fh), X_ = (e) => {
  if (!e)
    return !1;
  const t = Mh(e);
  return t === ut.stub || t === ut.easy;
}, Ih = (e) => e ? Uh(e) === ut.easy : !1, W_ = Th, K_ = (e, t) => x(void 0, null, function* () {
  if (!(yield G_()))
    return;
  let s;
  e ? e === "/sections" && (s = Fh) : s = Bh, s && (t.min_size = s[ut.easy], t.max_size = s[ut.medium] - 1);
}), Rt = (n) => x(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
    ), null;
  }
});
function Y_() {
  return x(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Rt({ urlPostfix: t, urlParams: e })) || [], s = {};
      for (const o in n)
        s[o] = n[o].map(
          (a) => new cu(a)
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
  return x(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: s
    };
    return n && (o.seed = n), ((yield Rt({ urlParams: o })) || []).map(
      (r) => new gs({
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
const J_ = (e, t) => x(void 0, null, function* () {
  return ((yield Rt({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (o) => new gs({
      sourceTitle: o.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: o.wikidata_id,
      size: o.size,
      langLinksCount: parseInt(o.langlinks_count)
    })
  );
}), Z_ = (e, t) => x(void 0, null, function* () {
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
}), eS = (e, t, n = null) => x(void 0, null, function* () {
  const s = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (s.seed = n), ((yield Rt({ urlParams: s })) || []).map(
    (a) => new Ah({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), tS = (e, t, n = null) => x(void 0, null, function* () {
  const s = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (s.seed = n);
  const a = (yield Rt({ urlPostfix: "/sections", urlParams: s })) || [];
  return a && a.map(
    (r) => new Dh({
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
  return x(this, null, function* () {
    const s = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), o = K.getCXServerUrl(
      `/suggest/sections/${s.join("/")}?include_section_sizes=true`
    ), a = yield fetch(o).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new en(a) : null;
  });
}
function sS(e, t, n = null) {
  return x(this, null, function* () {
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
function oS(e, t, n, s = 24) {
  return x(this, null, function* () {
    const o = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: s
    };
    return ((yield Rt({ urlParams: o })) || []).map(
      (r) => new gs({
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
  return x(this, null, function* () {
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
function iS(e, t, n, s = 24) {
  return x(this, null, function* () {
    const o = {
      source: e,
      target: t,
      country: n.join("|"),
      count: s
    };
    return ((yield Rt({ urlParams: o })) || []).map(
      (r) => new gs({
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
  return x(this, null, function* () {
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
function lS(e) {
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
    }, n = K.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function cS(e, t) {
  return x(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, s = K.getApi(e);
    try {
      return (yield s.get(n)).parse;
    } catch (o) {
      return mw.log.error("Error while fetching suggestion sections size", o), [];
    }
  });
}
function uS(e) {
  const t = W_.map((s) => encodeURIComponent(s)).join("|"), n = K.getCXServerUrl(
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
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const s = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(s)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((l) => new js(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
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
  const e = mS(), { sourceLanguage: t, targetLanguage: n } = Ae(e), s = (l) => {
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
const fS = window.Vuex.useStore, uu = window.Vue.ref, wS = uu([]), vS = uu([]);
let Vr = !1, Er = !1, gd = !1;
const Ma = uu([]);
let lo = null;
const Lr = {
  page: wS,
  section: vS
}, Rh = () => {
  const e = fS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), s = () => x(void 0, null, function* () {
    Er || (Ma.value = yield me.fetchUserEdits(t.value).then((d) => (Er = !0, d)));
  }), o = () => x(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !Vr)
      return Vr = !0, d.map(
        (i) => i.sourceTitle
      );
    if (Vr = !0, !Er && (yield s(), Ma.value.length > 0))
      return Ma.value;
    if (!gd) {
      const i = yield me.fetchUserEdits(n.value).then((c) => (gd = !0, c));
      if (i.length)
        return ds.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (d) => {
    let i = Lr[d].value.find(
      (c) => c.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new hS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), Lr[d].value.push(i)), i;
  }, r = () => x(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield o(), i || (d = !0);
      for (const c in Lr) {
        const g = a(c);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), l = () => lo || (lo = r(), lo.finally(() => {
    lo = null;
  }));
  return {
    getSuggestionSeed: (d) => x(void 0, null, function* () {
      let i = a(d);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: s,
    previousEditsInSource: Ma
  };
}, _S = 5;
function us(e) {
  return x(this, null, function* () {
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
  } = D(), { getSuggestionSeed: s } = Rh(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys(), l = {
    id: nn,
    type: Je
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => x(void 0, null, function* () {
      const c = [];
      return yield us(() => x(void 0, null, function* () {
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
    fetchSectionSuggestionsBasedOnEdits: (i) => x(void 0, null, function* () {
      const c = [];
      return yield us(() => x(void 0, null, function* () {
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
}, xS = window.Vuex.useStore, CS = () => {
  const e = xS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D(), s = {
    id: xn,
    type: Je
  }, {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys();
  return { fetchSectionSuggestionsPopular: (d) => x(void 0, null, function* () {
    const i = [];
    return yield us(() => x(void 0, null, function* () {
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
  }), fetchPageSuggestionsPopular: (d) => x(void 0, null, function* () {
    const i = [];
    return yield us(() => x(void 0, null, function* () {
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
}, zh = window.Vue.ref, co = "ungrouped", pd = zh({}), md = zh(!1), du = () => ({
  fetchPageCollectionGroups: () => x(void 0, null, function* () {
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
const bS = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', kS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', $S = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', VS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', ES = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', LS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', TS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', AS = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', DS = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', PS = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', BS = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', FS = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', NS = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', MS = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', US = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', IS = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', RS = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', zS = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', OS = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Oh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', HS = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', jS = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', qS = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', GS = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', XS = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', WS = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', KS = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', YS = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', QS = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', JS = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', ZS = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', ey = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', ty = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', ny = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', sy = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', Hh = bS, oy = kS, jh = {
  ltr: $S,
  shouldFlip: !0
}, qh = {
  ltr: VS,
  shouldFlip: !0
}, gu = {
  ltr: ES,
  shouldFlip: !0
}, Gh = LS, Xh = TS, ay = AS, iy = DS, ry = PS, Qs = BS, ly = FS, pu = NS, mu = MS, Rc = US, cy = IS, uy = {
  ltr: RS,
  shouldFlip: !0
}, dy = {
  ltr: zS,
  shouldFlip: !0
}, gy = OS, py = {
  langCodeMap: {
    ar: Oh
  },
  default: HS
}, my = {
  langCodeMap: {
    ar: Oh
  },
  default: jS
}, Wh = qS, tr = {
  ltr: GS,
  shouldFlip: !0
}, hy = XS, fy = WS, Sa = {
  ltr: KS,
  shouldFlip: !0
}, hu = {
  ltr: YS,
  shouldFlip: !0
}, wy = {
  ltr: QS,
  shouldFlip: !0
}, Kh = JS, vy = ZS, zc = ey, _y = ty, Sy = ny, Yh = sy, yy = {
  [nn]: Yh,
  [xn]: gy,
  [ee]: gu
}, xy = {
  [ee]: dy,
  [Ve]: hy
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
    return this.type === Je ? this.id : this.type;
  }
  get icon() {
    return yy[this.provider] || null;
  }
  get expandableIcon() {
    return xy[this.provider] || this.icon;
  }
}
const uo = window.Vue.computed, { topics: hd, regions: fd } = mw.loader.require(
  "ext.cx.articlefilters"
), Cy = (e) => new ra({
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
}), nr = () => {
  const e = he(), { currentSuggestionFilters: t, setFilterURLParams: n } = D(), { validateFilters: s, filtersValidatorError: o } = eu(), a = new It({
    id: nn,
    type: Je,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), r = new It({
    id: xn,
    type: Je,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), l = new It({
    id: ee,
    type: Je,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: u, pageCollectionGroupsFetched: d } = du(), i = uo(() => {
    const y = new ra({
      id: Je,
      type: Je,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [a, r]
    });
    return Object.keys(u.value).length > 1 && y.filters.push(l), y;
  }), c = () => {
    const y = ue({}, u.value);
    delete y.ungrouped;
    const B = [];
    for (const E in y) {
      const j = y[E].map(
        (ae) => new It({
          id: ae.name,
          label: ae.name,
          type: ee
        })
      ), se = new It({
        id: E,
        label: E,
        type: ee,
        subFilters: j
      });
      B.push(se);
    }
    const V = (u.value.ungrouped || []).map(
      (E) => new It({
        id: E.name,
        label: E.name,
        type: ee
      })
    );
    return [...B, ...V];
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
    id: Ve,
    type: Ve,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: fd.map(
      (y) => new It({
        id: y.id,
        label: y.label,
        type: Ve,
        subFilters: y.countries.map(
          (B) => new It({
            id: B.id,
            label: B.label,
            type: Ve
          })
        )
      })
    )
  })), m = uo(() => {
    const y = [
      i.value,
      ...hd.map(Cy),
      p.value
    ];
    return g.value.filters.length && y.splice(1, 0, g.value), y;
  }), h = uo(
    () => [t.value.type, t.value.id].includes(
      ee
    ) && !d.value
  ), f = () => {
    if (h.value)
      return [];
    const y = _();
    return y.type === We || y.type === Ve || y.type === yt || y.type === ee || y.id === ee ? [y, a] : [a, r];
  }, w = (y) => {
    n(y.type, y.id);
  }, _ = () => t.value.type === yt ? new It({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : m.value.flatMap((y) => y.filters).flatMap((y) => [y, ...y.subFilters || []]).find(C), C = (y) => t.value.id === y.id;
  return {
    allFilters: m,
    getFiltersSummary: f,
    selectFilter: w,
    isFilterSelected: C,
    getArticleTopics: (y) => {
      const V = hd.flatMap((E) => E.topics).find((E) => E.topicId === y);
      return V ? V.articletopics : [];
    },
    waitingForPageCollectionsFetch: h,
    findSelectedFilter: _,
    validateURLFilterWithCollections: () => {
      if (!d.value)
        return;
      const y = Object.values(u.value).flat(), B = s(
        {
          type: t.value.type,
          id: t.value.id
        },
        y
      );
      n(B.type, B.id), o.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (y) => {
      const B = fd.find((V) => V.id === y);
      return B ? B.countries.map((V) => V.id) : [y];
    }
  };
}, by = window.Vuex.useStore, ky = () => {
  const e = by(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = D(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys(), { getArticleTopics: l } = nr();
  return {
    fetchPageSuggestionsByTopics: (i) => x(void 0, null, function* () {
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
    fetchSectionSuggestionsByTopics: (i) => x(void 0, null, function* () {
      const c = s.value.id, g = {
        id: c,
        type: We
      }, p = l(c), m = [];
      return yield us(() => x(void 0, null, function* () {
        const h = yield me.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          p
        );
        let f = h.filter(
          (_) => o(_)
        );
        const w = h.filter(
          (_) => !o(_)
        );
        return f = f.slice(0, i), m.push(...f), w.forEach((_) => {
          _ && !r(_) && (_.isListable = !1, e.commit("suggestions/addSectionSuggestion", _));
        }), m.length >= i;
      })), m.forEach(
        (h) => h.suggestionProvider = g
      ), m;
    })
  };
}, $y = window.Vuex.useStore, Vy = () => {
  const e = $y(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = D(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys(), { getCountries: l } = nr();
  return {
    fetchPageSuggestionsByCountries: (i) => x(void 0, null, function* () {
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
    fetchSectionSuggestionsByCountries: (i) => x(void 0, null, function* () {
      const c = [];
      return yield us(() => x(void 0, null, function* () {
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
}, Ey = window.Vuex.useStore, Ly = window.Vue.computed, Ty = () => {
  const e = Ey(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = D(), o = Ly(() => {
    var i;
    return ((i = s.value) == null ? void 0 : i.type) !== ee ? null : s.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: l
  } = Ys();
  return {
    fetchSectionSuggestionsByCollections: () => x(void 0, null, function* () {
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
    fetchPageSuggestionsByCollections: () => x(void 0, null, function* () {
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
}, Ay = window.Vuex.useStore, Dy = () => {
  const e = Ay(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = D(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Ys();
  return {
    fetchPageSuggestionsBySeed: (d) => x(void 0, null, function* () {
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
    fetchSectionSuggestionsBySeed: (d) => x(void 0, null, function* () {
      const i = [], c = s.value.id;
      return yield us(() => x(void 0, null, function* () {
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
}, Py = () => {
  const { currentSuggestionFilters: e } = D(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = yS(), { fetchPageSuggestionsPopular: s, fetchSectionSuggestionsPopular: o } = CS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = ky(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: u
  } = Vy(), {
    fetchPageSuggestionsByCollections: d,
    fetchSectionSuggestionsByCollections: i
  } = Ty(), { fetchPageSuggestionsBySeed: c, fetchSectionSuggestionsBySeed: g } = Dy(), p = {
    [nn]: t,
    [xn]: s,
    [ee]: d,
    [We]: a,
    [Ve]: l,
    [yt]: c
  }, m = {
    [nn]: n,
    [xn]: o,
    [ee]: i,
    [We]: r,
    [Ve]: u,
    [yt]: g
  }, h = (_) => _.type === Je ? _.id : _.type;
  return {
    getCurrentPageSuggestionProvider: () => p[h(e.value)],
    getCurrentSectionSuggestionProvider: () => m[h(e.value)]
  };
}, By = window.Vuex.useStore, fu = () => {
  const e = By(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = lu(), { sourceLanguageURLParameter: s } = D(), o = Ks(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: u
  } = Py(), d = (g) => {
    try {
      const p = g.map((m) => m.sourceTitle);
      if (p.length)
        return o(s.value, p);
    } catch (p) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => x(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const g = a(), m = yield u()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), d(m), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => x(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const g = r(), m = yield l()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), d(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, Fy = window.Vuex.useStore, Qh = () => {
  const e = Fy();
  return (t) => x(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield me.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, Ny = window.Vuex.useStore, Jh = () => {
  const e = Ny(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = fu(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: o } = lu(), { targetLanguageURLParameter: a } = D(), r = Qh();
  return () => x(void 0, null, function* () {
    const l = o(0), u = s(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, i = l.length === d, c = u.length === d;
    i && c || (yield r(a.value), t(), n());
  });
}, My = window.Vuex.useStore, Tr = /* @__PURE__ */ new Map(), sr = () => {
  const e = My(), t = Ks();
  return (n, s, o) => x(void 0, null, function* () {
    const a = `${n}:${s}:${o}`;
    if (Tr.has(a))
      return Tr.get(a);
    const l = (() => x(void 0, null, function* () {
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
            return new gs({
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
    return Tr.set(a, l), l;
  });
}, wd = window.Vue.computed, Uy = window.Vuex.useStore, bn = () => {
  const e = Uy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s
  } = D(), o = wd(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      s.value
    )
  ), a = wd(() => o.value ? o.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: o,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, u) => o.value.getTitleForLanguage(l) || o.value.getTitleForLanguage(u)
  };
}, Zh = window.Vuex.useStore, { setLanguageURLParams: Iy } = D(), wu = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), Iy(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, ef = () => {
  const e = Zh(), t = Jh();
  return (n, s) => {
    const { sourceLanguage: o, targetLanguage: a } = Ae(e);
    n === s && (n = a.value, s = o.value), wu(e, n, s), t();
  };
}, Ry = () => {
  const e = Zh(), t = sr(), { currentLanguageTitleGroup: n, targetPageExists: s } = bn(), o = Ks();
  return (a, r) => x(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      setPageURLParam: d,
      clearSectionURLParameter: i
    } = D();
    a === r && (a = u.value, r = l.value);
    const c = n.value.getTitleForLanguage(a);
    wu(e, a, r), d(c), s.value ? (i(), yield t(
      l.value,
      u.value,
      c
    )) : yield o(l.value, [c]);
  });
}, zy = window.Vuex.useStore, Oy = window.Vue.ref, vd = Oy(!1), tf = () => {
  const e = zy(), {
    supportedSourceLanguageCodes: t,
    supportedTargetLanguageCodes: n,
    fetchSupportedLanguageCodes: s
  } = wa(), { sourceLanguageURLParameter: o, targetLanguageURLParameter: a } = D(), r = () => {
    const u = K.getCurrentWikiLanguageCode(), d = (f) => t.value.includes(f), i = (f) => n.value.includes(f), c = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, g = [
      a.value,
      mw.storage.get("cxTargetLanguage"),
      u,
      c.targetLanguage
    ], p = [
      o.value,
      mw.storage.get("cxSourceLanguage"),
      c.sourceLanguage,
      u,
      c.targetLanguage
    ], m = g.find(
      (f) => i(f)
    );
    return { sourceLanguage: p.find(
      (f) => d(f) && f !== m
    ), targetLanguage: m };
  };
  return { initializeApplicationLanguages: () => x(void 0, null, function* () {
    yield s();
    const { sourceLanguage: u, targetLanguage: d } = r();
    wu(e, u, d), vd.value = !0;
  }), applicationLanguagesInitialized: vd };
};
const Hy = window.Vue.resolveDynamicComponent, _d = window.Vue.openBlock, Sd = window.Vue.createBlock, jy = window.Vue.Transition, go = window.Vue.withCtx, po = window.Vue.createVNode, qy = window.Vue.resolveComponent, Ar = window.Vue.unref, Gy = window.Vuex.useStore, yd = window.Vue.computed, Xy = window.Vue.onMounted, Wy = window.Vue.inject, Ky = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = D(), { initializeApplicationLanguages: n } = tf();
    t(), n();
    const s = Wy("breakpoints"), o = yd(() => s.value.mobile), a = Gy(), r = yd(
      () => a.state.application.autoSavePending
    );
    return Xy(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && ph.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof Xs && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, u) => {
      const d = qy("router-view");
      return _d(), Sd(Ar(p0), { id: "contenttranslation" }, {
        default: go(() => [
          po(Ar(M), { class: "cx-container" }, {
            default: go(() => [
              po(Ar(k), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: go(() => [
                  po(d, null, {
                    default: go(({ Component: i, route: c }) => [
                      po(jy, {
                        name: o.value ? c.meta.transitionName : ""
                      }, {
                        default: go(() => [
                          (_d(), Sd(Hy(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      po(E1)
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
}, Yy = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, Qy = {
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
class nf {
  constructor({ id: t, type: n, question: s, url: o }) {
    this.id = t, this.type = n, this.question = s, this.url = o;
  }
}
class Gn {
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
    this.text = t, this.title = n, this.type = s, this.status = o, this.details = a && new nf(a);
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
    (o, a) => Ye(ue({}, o), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class Jy {
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
class vu extends Jc {
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
const or = mw.user.isAnon() ? void 0 : "user", sf = (e) => {
  if (e === "assertuserfailed")
    throw new Xs();
};
function of(e, t = null) {
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
    return t && (n.offset = t), new mw.Api().get(n).then((o) => x(this, null, function* () {
      var l;
      const a = o.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (u) => new Ki(Ye(ue({}, u), { status: e }))
      ) : r = a.map(
        (u) => new vu(Ye(ue({}, u), { status: e }))
      ), (l = o.continue) != null && l.offset) {
        const u = yield of(
          e,
          o.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function Zy(e) {
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
      (a) => new Jy(a)
    );
  });
}
function ex(e, t, n, s, o) {
  return x(this, null, function* () {
    if (!s)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== re.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = K.getCXServerUrl(a);
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
const tx = (e, t, n) => {
  const s = K.getApi(t);
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
}, nx = ({
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
  isSandbox: i,
  sectionTranslationId: c,
  existingSectionTitle: g
}) => {
  const p = {
    assert: or,
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
  return u && (p.captchaid = u, p.captchaword = d), new mw.Api().postWithToken("csrf", p).then((h) => {
    if (h = h.cxpublishsection, h.result === "error") {
      if (h.edit.captcha)
        return {
          publishFeedbackMessage: new Gn({
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
    sf(h);
    let w;
    return f = f || {}, f.exception ? w = f.exception.message : f.error ? w = f.error.info : w = "Unknown error", {
      publishFeedbackMessage: new Gn({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, sx = ({
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
    assert: or,
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
    sf(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new Gn({ text: h, status: "error" });
  });
}, ox = (e) => {
  const t = {
    assert: or,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((s) => s.cxsplit.result === "success");
}, ax = () => {
  const e = {
    assert: or,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new vu(n.cxcheckunreviewed.translation)
  );
}, ix = (e, t, n) => {
  const s = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", s).then(() => !0).catch(() => !1);
}, rx = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, lx = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), xt = {
  fetchTranslations: of,
  fetchTranslationUnits: Zy,
  fetchSegmentTranslation: ex,
  parseTemplateWikitext: tx,
  publishTranslation: nx,
  saveTranslation: sx,
  deleteTranslation: ix,
  fetchTranslatorStats: lx,
  deleteCXTranslation: rx,
  splitTranslation: ox,
  checkUnreviewedTranslations: ax
};
function cx(t) {
  return x(this, arguments, function* ({ commit: e }) {
    const n = yield xt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const ux = {
  fetchTranslatorStats: cx
}, dx = {
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
}, gx = {
  namespaced: !0,
  state: Yy,
  getters: Qy,
  actions: ux,
  mutations: dx
}, px = {
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
  appendixSectionTitles: j_
}, mx = {
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
}, hx = {
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
}, fx = {
  namespaced: !0,
  state: px,
  getters: mx,
  actions: {},
  mutations: hx
}, wx = {
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
}, vx = {
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
  isValidProviderForTranslation: (e, t) => (n, s, o) => t.getSupportedMTProviders(n, s).includes(o) && o !== re.EMPTY_TEXT_PROVIDER_KEY,
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
function _x(s) {
  return x(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: o } = t.application;
    if ((r = n.nearbyPages[o]) != null && r.length)
      return;
    const a = yield ds.fetchNearbyPages(o);
    e("addNearbyPages", { language: o, pages: a });
  });
}
const Sx = { fetchNearbyPages: _x }, yx = {
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
}, xx = {
  namespaced: !0,
  state: wx,
  getters: vx,
  actions: Sx,
  mutations: yx
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
    const { sourceLanguage: n, targetLanguage: s } = e, o = re.getStorageKey(
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
}, kx = {
  namespaced: !0,
  state: Cx,
  mutations: bx
}, $x = window.Vuex.createStore, Vx = $x({
  modules: { translator: gx, suggestions: fx, mediawiki: xx, application: kx }
});
function Ex() {
  return af().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function af() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Lx = typeof Proxy == "function", Tx = "devtools-plugin:setup", Ax = "plugin:settings:set";
let vs, Oc;
function Dx() {
  var e;
  return vs !== void 0 || (typeof window != "undefined" && window.performance ? (vs = !0, Oc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (vs = !0, Oc = global.perf_hooks.performance) : vs = !1), vs;
}
function Px() {
  return Dx() ? Oc.now() : Date.now();
}
class Bx {
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
        return Px();
      }
    }, n && n.on(Ax, (r, l) => {
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
    return x(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Fx(e, t) {
  const n = e, s = af(), o = Ex(), a = Lx && n.enableEarlyProxy;
  if (o && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    o.emit(Tx, e, t);
  else {
    const r = a ? new Bx(n, o) : null;
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
const rf = window.Vue.getCurrentInstance, qs = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Zt = window.Vue.computed, la = window.Vue.unref, Nx = window.Vue.watchEffect, lf = window.Vue.defineComponent, Mx = window.Vue.reactive, cf = window.Vue.h, Dr = window.Vue.provide, Ux = window.Vue.ref, uf = window.Vue.watch, Ix = window.Vue.shallowRef, Rx = window.Vue.shallowReactive, zx = window.Vue.nextTick, yn = typeof window != "undefined";
function Ox(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Q = Object.assign;
function Pr(e, t) {
  const n = {};
  for (const s in t) {
    const o = t[s];
    n[s] = gt(o) ? o.map(e) : e(o);
  }
  return n;
}
const ca = () => {
}, gt = Array.isArray;
function W(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Hx = /\/$/, jx = (e) => e.replace(Hx, "");
function Br(e, t, n = "/") {
  let s, o = {}, a = "", r = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (s = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), o = e(a)), l > -1 && (s = s || t.slice(0, l), r = t.slice(l, t.length)), s = Xx(s != null ? s : t, n), {
    fullPath: s + (a && "?") + a + r,
    path: s,
    query: o,
    hash: r
  };
}
function qx(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Cd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function bd(e, t, n) {
  const s = t.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && Xn(t.matched[s], n.matched[o]) && df(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Xn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function df(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Gx(e[n], t[n]))
      return !1;
  return !0;
}
function Gx(e, t) {
  return gt(e) ? kd(e, t) : gt(t) ? kd(t, e) : e === t;
}
function kd(e, t) {
  return gt(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function Xx(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return W(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
function Wx(e) {
  if (!e)
    if (yn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), jx(e);
}
const Kx = /^[^#]+#/;
function Yx(e, t) {
  return e.replace(Kx, "#") + t;
}
function Qx(e, t) {
  const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  };
}
const ar = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Jx(e) {
  let t;
  if ("el" in e) {
    const n = e.el, s = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!s || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (s && a) {
          W(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        W(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const o = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o) {
      ({}).NODE_ENV !== "production" && W(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Qx(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function $d(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Hc = /* @__PURE__ */ new Map();
function Zx(e, t) {
  Hc.set(e, t);
}
function eC(e) {
  const t = Hc.get(e);
  return Hc.delete(e), t;
}
let tC = () => location.protocol + "//" + location.host;
function gf(e, t) {
  const { pathname: n, search: s, hash: o } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = o.includes(e.slice(a)) ? e.slice(a).length : 1, u = o.slice(l);
    return u[0] !== "/" && (u = "/" + u), Cd(u, "");
  }
  return Cd(n, e) + s + o;
}
function nC(e, t, n, s) {
  let o = [], a = [], r = null;
  const l = ({ state: g }) => {
    const p = gf(e, location), m = n.value, h = t.value;
    let f = 0;
    if (g) {
      if (n.value = p, t.value = g, r && r === m) {
        r = null;
        return;
      }
      f = h ? g.position - h.position : 0;
    } else
      s(p);
    o.forEach((w) => {
      w(n.value, m, {
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
    g.state && g.replaceState(Q({}, g.state, { scroll: ar() }), "");
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
function Vd(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? ar() : null
  };
}
function sC(e) {
  const { history: t, location: n } = window, s = {
    value: gf(e, n)
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
    const c = e.indexOf("#"), g = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : tC() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), o.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? W("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(u, d) {
    const i = Q({}, t.state, Vd(
      o.value.back,
      // keep back and forward entries but override current position
      u,
      o.value.forward,
      !0
    ), d, { position: o.value.position });
    a(u, i, !0), s.value = u;
  }
  function l(u, d) {
    const i = Q(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: u,
        scroll: ar()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && W(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = Q({}, Vd(s.value, u, null), { position: i.position + 1 }, d);
    a(u, c, !1), s.value = u;
  }
  return {
    location: s,
    state: o,
    push: l,
    replace: r
  };
}
function oC(e) {
  e = Wx(e);
  const t = sC(e), n = nC(e, t.state, t.location, t.replace);
  function s(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const o = Q({
    // it's overridden right after
    location: "",
    base: e,
    go: s,
    createHref: Yx.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function aC(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && W(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), oC(e);
}
function iC(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function pf(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const $n = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, jc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Ed;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Ed || (Ed = {}));
const rC = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${cC(t)}" via a navigation guard.`;
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
  return {}.NODE_ENV !== "production" ? Q(new Error(rC[e](t)), {
    type: e,
    [jc]: !0
  }, t) : Q(new Error(), {
    type: e,
    [jc]: !0
  }, t);
}
function on(e, t) {
  return e instanceof Error && jc in e && (t == null || !!(e.type & t));
}
const lC = ["params", "query", "hash"];
function cC(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of lC)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Ld = "[^/]+?", uC = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, dC = /[.+*?^${}()[\]/\\]/g;
function gC(e, t) {
  const n = Q({}, uC, t), s = [];
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
        c || (o += "/"), o += g.value.replace(dC, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: w } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const _ = w || Ld;
        if (_ !== Ld) {
          p += 10;
          try {
            new RegExp(`(${_})`);
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${_}): ` + S.message);
          }
        }
        let C = h ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        c || (C = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && d.length < 2 ? `(?:/${C})` : "/" + C), f && (C += "?"), o += C, p += 20, f && (p += -8), h && (p += -20), _ === ".*" && (p += -50);
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
          const { value: m, repeatable: h, optional: f } = p, w = m in d ? d[m] : "";
          if (gt(w) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = gt(w) ? w.join("/") : w;
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
function pC(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s)
      return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function mC(e, t) {
  let n = 0;
  const s = e.score, o = t.score;
  for (; n < s.length && n < o.length; ) {
    const a = pC(s[n], o[n]);
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
const hC = {
  type: 0,
  value: ""
}, fC = /[a-zA-Z0-9_]/;
function wC(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[hC]];
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
        u === "(" ? n = 2 : fC.test(u) ? g() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
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
function vC(e, t, n) {
  const s = gC(wC(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of s.keys)
      a.has(r.name) && W(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const o = Q(s, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function _C(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = Pd({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(i) {
    return s.get(i);
  }
  function a(i, c, g) {
    const p = !g, m = SC(i);
    ({}).NODE_ENV !== "production" && bC(m, c), m.aliasOf = g && g.record;
    const h = Pd(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const C = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const S of C)
        f.push(Q({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : m.components,
          path: S,
          // we might be the child of an alias
          aliasOf: g ? g.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let w, _;
    for (const C of f) {
      const { path: S } = C;
      if (c && S[0] !== "/") {
        const b = c.record.path, A = b[b.length - 1] === "/" ? "" : "/";
        C.path = c.record.path + (S && A + S);
      }
      if ({}.NODE_ENV !== "production" && C.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (w = vC(C, c, h), {}.NODE_ENV !== "production" && c && S[0] === "/" && kC(w, c), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && CC(g, w)) : (_ = _ || w, _ !== w && _.alias.push(w), p && i.name && !Dd(w) && r(i.name)), m.children) {
        const b = m.children;
        for (let A = 0; A < b.length; A++)
          a(b[A], w, g && g.children[A]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && u(w);
    }
    return _ ? () => {
      r(_);
    } : ca;
  }
  function r(i) {
    if (pf(i)) {
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
    for (; c < n.length && mC(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !mf(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !Dd(i) && s.set(i.record.name, i);
  }
  function d(i, c) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = s.get(i.name), !g)
        throw Gs(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const _ = Object.keys(i.params || {}).filter((C) => !g.keys.find((S) => S.name === C));
        _.length && W(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = Q(
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
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && W(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((_) => _.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = c.name ? s.get(c.name) : n.find((_) => _.re.test(c.path)), !g)
        throw Gs(1, {
          location: i,
          currentLocation: c
        });
      h = g.record.name, p = Q({}, c.params, i.params), m = g.stringify(p);
    }
    const f = [];
    let w = g;
    for (; w; )
      f.unshift(w.record), w = w.parent;
    return {
      name: h,
      path: m,
      params: p,
      matched: f,
      meta: xC(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: l, getRecordMatcher: o };
}
function Ad(e, t) {
  const n = {};
  for (const s of t)
    s in e && (n[s] = e[s]);
  return n;
}
function SC(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: yC(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function yC(e) {
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
function xC(e) {
  return e.reduce((t, n) => Q(t, n.meta), {});
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
function CC(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(qc.bind(null, n)))
      return W(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(qc.bind(null, n)))
      return W(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function bC(e, t) {
  t && t.record.name && !e.name && !e.path && W(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function kC(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(qc.bind(null, n)))
      return W(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function mf(e, t) {
  return t.children.some((n) => n === e || mf(e, n));
}
const hf = /#/g, $C = /&/g, VC = /\//g, EC = /=/g, LC = /\?/g, ff = /\+/g, TC = /%5B/g, AC = /%5D/g, wf = /%5E/g, DC = /%60/g, vf = /%7B/g, PC = /%7C/g, _f = /%7D/g, BC = /%20/g;
function _u(e) {
  return encodeURI("" + e).replace(PC, "|").replace(TC, "[").replace(AC, "]");
}
function FC(e) {
  return _u(e).replace(vf, "{").replace(_f, "}").replace(wf, "^");
}
function Gc(e) {
  return _u(e).replace(ff, "%2B").replace(BC, "+").replace(hf, "%23").replace($C, "%26").replace(DC, "`").replace(vf, "{").replace(_f, "}").replace(wf, "^");
}
function NC(e) {
  return Gc(e).replace(EC, "%3D");
}
function MC(e) {
  return _u(e).replace(hf, "%23").replace(LC, "%3F");
}
function UC(e) {
  return e == null ? "" : MC(e).replace(VC, "%2F");
}
function pa(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && W(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function IC(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < s.length; ++o) {
    const a = s[o].replace(ff, " "), r = a.indexOf("="), l = pa(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : pa(a.slice(r + 1));
    if (l in t) {
      let d = t[l];
      gt(d) || (d = t[l] = [d]), d.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function Bd(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = NC(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (gt(s) ? s.map((a) => a && Gc(a)) : [s && Gc(s)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function RC(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = gt(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const zC = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Fd = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), ir = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Sf = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), Xc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
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
function jn(e, t, n, s, o) {
  const a = s && // name is defined if record is because of the function overload
  (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
  return () => new Promise((r, l) => {
    const u = (c) => {
      c === !1 ? l(Gs(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : iC(c) ? l(Gs(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === a && typeof c == "function" && a.push(c), r());
    }, d = e.call(s && s.instances[o], t, n, {}.NODE_ENV !== "production" ? OC(u, t, n) : u);
    let i = Promise.resolve(d);
    if (e.length < 3 && (i = i.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const c = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        i = i.then((g) => u._called ? g : (W(c), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !u._called) {
        W(c), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((c) => l(c));
  });
}
function OC(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && W(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function Fr(e, t, n, s) {
  const o = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && W(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let l = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!l || typeof l != "object" && typeof l != "function")
          throw W(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(l)}".`), new Error("Invalid route component");
        if ("then" in l) {
          W(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = l;
          l = () => u;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, W(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (HC(l)) {
          const d = (l.__vccOpts || l)[t];
          d && o.push(jn(d, n, s, a, r));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (W(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), o.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Ox(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && jn(g, n, s, a, r)();
          }));
        }
    }
  }
  return o;
}
function HC(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Nd(e) {
  const t = qs(ir), n = qs(Sf), s = Zt(() => t.resolve(la(e.to))), o = Zt(() => {
    const { matched: u } = s.value, { length: d } = u, i = u[d - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const g = c.findIndex(Xn.bind(null, i));
    if (g > -1)
      return g;
    const p = Md(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Md(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(Xn.bind(null, u[d - 2])) : g
    );
  }), a = Zt(() => o.value > -1 && XC(n.params, s.value.params)), r = Zt(() => o.value > -1 && o.value === n.matched.length - 1 && df(n.params, s.value.params));
  function l(u = {}) {
    return GC(u) ? t[la(e.replace) ? "replace" : "push"](
      la(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ca) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && yn) {
    const u = rf();
    if (u) {
      const d = {
        route: s.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), Nx(() => {
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
const jC = /* @__PURE__ */ lf({
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
    const n = Mx(Nd(e)), { options: s } = qs(ir), o = Zt(() => ({
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
      return e.custom ? a : cf("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, a);
    };
  }
}), qC = jC;
function GC(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function XC(e, t) {
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
const Ud = (e, t, n) => e != null ? e : t != null ? t : n, WC = /* @__PURE__ */ lf({
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
    ({}).NODE_ENV !== "production" && YC();
    const s = qs(Xc), o = Zt(() => e.route || s.value), a = qs(Fd, 0), r = Zt(() => {
      let d = la(a);
      const { matched: i } = o.value;
      let c;
      for (; (c = i[d]) && !c.components; )
        d++;
      return d;
    }), l = Zt(() => o.value.matched[r.value]);
    Dr(Fd, Zt(() => r.value + 1)), Dr(zC, l), Dr(Xc, o);
    const u = Ux();
    return uf(() => [u.value, l.value, e.name], ([d, i, c], [g, p, m]) => {
      i && (i.instances[c] = d, p && p !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !Xn(i, p) || !g) && (i.enterCallbacks[c] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = o.value, i = e.name, c = l.value, g = c && c.components[i];
      if (!g)
        return Id(n.default, { Component: g, route: d });
      const p = c.props[i], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = cf(g, Q({}, m, t, {
        onVnodeUnmounted: (w) => {
          w.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && yn && f.ref) {
        const w = {
          depth: r.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (gt(f.ref) ? f.ref.map((C) => C.i) : [f.ref.i]).forEach((C) => {
          C.__vrv_devtools = w;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Id(n.default, { Component: f, route: d }) || f
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
const KC = WC;
function YC() {
  const e = rf(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const s = t === "KeepAlive" ? "keep-alive" : "transition";
    W(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`);
  }
}
function ho(e, t) {
  const n = Q({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((s) => ab(s, ["instances", "children", "aliasOf"]))
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
let QC = 0;
function JC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const s = QC++;
  Fx({
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
          backgroundColor: yf
        });
      }
      gt(c.__vrl_devtools) && (c.__devtoolsApi = o, c.__vrl_devtools.forEach((g) => {
        let p = bf, m = "";
        g.isExactActive ? (p = Cf, m = "This is exactly active") : g.isActive && (p = xf, m = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), uf(t.currentRoute, () => {
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
    function u() {
      if (!d)
        return;
      const i = d;
      let c = n.getRoutes().filter((g) => !g.parent);
      c.forEach(Vf), i.filter && (c = c.filter((g) => (
        // save matches state based on the payload
        Wc(g, i.filter.toLowerCase())
      ))), c.forEach((g) => $f(g, t.currentRoute.value)), i.rootNodes = c.map(kf);
    }
    let d;
    o.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === l && u();
    }), o.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: eb(g)
        });
      }
    }), o.sendInspectorTree(l), o.sendInspectorState(l);
  });
}
function ZC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function eb(e) {
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
        display: e.keys.map((s) => `${s.name}${ZC(s)}`).join(" "),
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
const yf = 15485081, xf = 2450411, Cf = 8702998, tb = 2282478, bf = 16486972, nb = 6710886;
function kf(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: tb
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: bf
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: yf
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Cf
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: xf
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: nb
  });
  let s = n.__vd_id;
  return s == null && (s = String(sb++), n.__vd_id = s), {
    id: s,
    label: n.path,
    tags: t,
    children: e.children.map(kf)
  };
}
let sb = 0;
const ob = /^\/(.*)\/([a-z]*)$/;
function $f(e, t) {
  const n = t.matched.length && Xn(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => Xn(s, e.record))), e.children.forEach((s) => $f(s, t));
}
function Vf(e) {
  e.__vd_match = !1, e.children.forEach(Vf);
}
function Wc(e, t) {
  const n = String(e.re).match(ob);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => Wc(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), a = pa(o);
  return !t.startsWith("/") && (a.includes(t) || o.includes(t)) || a.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => Wc(r, t));
}
function ab(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function ib(e) {
  const t = _C(e.routes, e), n = e.parseQuery || IC, s = e.stringifyQuery || Bd, o = e.history;
  if ({}.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = mo(), r = mo(), l = mo(), u = Ix($n);
  let d = $n;
  yn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Pr.bind(null, (v) => "" + v), c = Pr.bind(null, UC), g = (
    // @ts-expect-error: intentionally avoid the type check
    Pr.bind(null, pa)
  );
  function p(v, T) {
    let P, N;
    return pf(v) ? (P = t.getRecordMatcher(v), N = T) : N = v, t.addRoute(N, P);
  }
  function m(v) {
    const T = t.getRecordMatcher(v);
    T ? t.removeRoute(T) : {}.NODE_ENV !== "production" && W(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function f(v) {
    return !!t.getRecordMatcher(v);
  }
  function w(v, T) {
    if (T = Q({}, T || u.value), typeof v == "string") {
      const O = Br(n, v, T.path), ie = t.resolve({ path: O.path }, T), nt = o.createHref(O.fullPath);
      return {}.NODE_ENV !== "production" && (nt.startsWith("//") ? W(`Location "${v}" resolved to "${nt}". A resolved location cannot start with multiple slashes.`) : ie.matched.length || W(`No match found for location with path "${v}"`)), Q(O, ie, {
        params: g(ie.params),
        hash: pa(O.hash),
        redirectedFrom: void 0,
        href: nt
      });
    }
    let P;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && W(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), P = Q({}, v, {
        path: Br(n, v.path, T.path).path
      });
    else {
      const O = Q({}, v.params);
      for (const ie in O)
        O[ie] == null && delete O[ie];
      P = Q({}, v, {
        params: c(O)
      }), T.params = c(T.params);
    }
    const N = t.resolve(P, T), X = v.hash || "";
    ({}).NODE_ENV !== "production" && X && !X.startsWith("#") && W(`A \`hash\` should always start with the character "#". Replace "${X}" with "#${X}".`), N.params = i(g(N.params));
    const pe = qx(s, Q({}, v, {
      hash: FC(X),
      path: N.path
    })), q = o.createHref(pe);
    return {}.NODE_ENV !== "production" && (q.startsWith("//") ? W(`Location "${v}" resolved to "${q}". A resolved location cannot start with multiple slashes.`) : N.matched.length || W(`No match found for location with path "${"path" in v ? v.path : v}"`)), Q({
      fullPath: pe,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: X,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        s === Bd ? RC(v.query) : v.query || {}
      )
    }, N, {
      redirectedFrom: void 0,
      href: q
    });
  }
  function _(v) {
    return typeof v == "string" ? Br(n, v, u.value.path) : Q({}, v);
  }
  function C(v, T) {
    if (d !== v)
      return Gs(8, {
        from: T,
        to: v
      });
  }
  function S(v) {
    return y(v);
  }
  function b(v) {
    return S(Q(_(v), { replace: !0 }));
  }
  function A(v) {
    const T = v.matched[v.matched.length - 1];
    if (T && T.redirect) {
      const { redirect: P } = T;
      let N = typeof P == "function" ? P(v) : P;
      if (typeof N == "string" && (N = N.includes("?") || N.includes("#") ? N = _(N) : (
        // force empty params
        { path: N }
      ), N.params = {}), {}.NODE_ENV !== "production" && !("path" in N) && !("name" in N))
        throw W(`Invalid redirect found:
${JSON.stringify(N, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Q({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in N ? {} : v.params
      }, N);
    }
  }
  function y(v, T) {
    const P = d = w(v), N = u.value, X = v.state, pe = v.force, q = v.replace === !0, O = A(P);
    if (O)
      return y(
        Q(_(O), {
          state: typeof O == "object" ? Q({}, X, O.state) : X,
          force: pe,
          replace: q
        }),
        // keep original redirectedFrom if it exists
        T || P
      );
    const ie = P;
    ie.redirectedFrom = T;
    let nt;
    return !pe && bd(s, N, P) && (nt = Gs(16, { to: ie, from: N }), Pe(
      N,
      N,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (nt ? Promise.resolve(nt) : E(ie, N)).catch(($e) => on($e) ? (
      // navigation redirects still mark the router as ready
      on(
        $e,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? $e : Ke($e)
    ) : (
      // reject any unknown error
      le($e, ie, N)
    )).then(($e) => {
      if ($e) {
        if (on(
          $e,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          bd(s, w($e.to), ie) && // and we have done it a couple of times
          T && // @ts-expect-error: added only in dev
          (T._count = T._count ? (
            // @ts-expect-error
            T._count + 1
          ) : 1) > 30 ? (W(`Detected a possibly infinite redirection in a navigation guard when going from "${N.fullPath}" to "${ie.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : y(
            // keep options
            Q({
              // preserve an existing replacement but allow the redirect to override it
              replace: q
            }, _($e.to), {
              state: typeof $e.to == "object" ? Q({}, X, $e.to.state) : X,
              force: pe
            }),
            // preserve the original redirectedFrom if any
            T || ie
          );
      } else
        $e = se(ie, N, !0, q, X);
      return j(ie, N, $e), $e;
    });
  }
  function B(v, T) {
    const P = C(v, T);
    return P ? Promise.reject(P) : Promise.resolve();
  }
  function V(v) {
    const T = F.values().next().value;
    return T && typeof T.runWithContext == "function" ? T.runWithContext(v) : v();
  }
  function E(v, T) {
    let P;
    const [N, X, pe] = rb(v, T);
    P = Fr(N.reverse(), "beforeRouteLeave", v, T);
    for (const O of N)
      O.leaveGuards.forEach((ie) => {
        P.push(jn(ie, v, T));
      });
    const q = B.bind(null, v, T);
    return P.push(q), Y(P).then(() => {
      P = [];
      for (const O of a.list())
        P.push(jn(O, v, T));
      return P.push(q), Y(P);
    }).then(() => {
      P = Fr(X, "beforeRouteUpdate", v, T);
      for (const O of X)
        O.updateGuards.forEach((ie) => {
          P.push(jn(ie, v, T));
        });
      return P.push(q), Y(P);
    }).then(() => {
      P = [];
      for (const O of pe)
        if (O.beforeEnter)
          if (gt(O.beforeEnter))
            for (const ie of O.beforeEnter)
              P.push(jn(ie, v, T));
          else
            P.push(jn(O.beforeEnter, v, T));
      return P.push(q), Y(P);
    }).then(() => (v.matched.forEach((O) => O.enterCallbacks = {}), P = Fr(pe, "beforeRouteEnter", v, T), P.push(q), Y(P))).then(() => {
      P = [];
      for (const O of r.list())
        P.push(jn(O, v, T));
      return P.push(q), Y(P);
    }).catch((O) => on(
      O,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? O : Promise.reject(O));
  }
  function j(v, T, P) {
    l.list().forEach((N) => V(() => N(v, T, P)));
  }
  function se(v, T, P, N, X) {
    const pe = C(v, T);
    if (pe)
      return pe;
    const q = T === $n, O = yn ? history.state : {};
    P && (N || q ? o.replace(v.fullPath, Q({
      scroll: q && O && O.scroll
    }, X)) : o.push(v.fullPath, X)), u.value = v, Pe(v, T, P, q), Ke();
  }
  let ae;
  function te() {
    ae || (ae = o.listen((v, T, P) => {
      if (!U.listening)
        return;
      const N = w(v), X = A(N);
      if (X) {
        y(Q(X, { replace: !0 }), N).catch(ca);
        return;
      }
      d = N;
      const pe = u.value;
      yn && Zx($d(pe.fullPath, P.delta), ar()), E(N, pe).catch((q) => on(
        q,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? q : on(
        q,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (y(
        q.to,
        N
        // avoid an uncaught rejection, let push call triggerError
      ).then((O) => {
        on(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !P.delta && P.type === ga.pop && o.go(-1, !1);
      }).catch(ca), Promise.reject()) : (P.delta && o.go(-P.delta, !1), le(q, N, pe))).then((q) => {
        q = q || se(
          // after navigation, all matched components are resolved
          N,
          pe,
          !1
        ), q && (P.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !on(
          q,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-P.delta, !1) : P.type === ga.pop && on(
          q,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), j(N, pe, q);
      }).catch(ca);
    }));
  }
  let z = mo(), J = mo(), oe;
  function le(v, T, P) {
    Ke(v);
    const N = J.list();
    return N.length ? N.forEach((X) => X(v, T, P)) : ({}.NODE_ENV !== "production" && W("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function ke() {
    return oe && u.value !== $n ? Promise.resolve() : new Promise((v, T) => {
      z.add([v, T]);
    });
  }
  function Ke(v) {
    return oe || (oe = !v, te(), z.list().forEach(([T, P]) => v ? P(v) : T()), z.reset()), v;
  }
  function Pe(v, T, P, N) {
    const { scrollBehavior: X } = e;
    if (!yn || !X)
      return Promise.resolve();
    const pe = !P && eC($d(v.fullPath, 0)) || (N || !P) && history.state && history.state.scroll || null;
    return zx().then(() => X(v, T, pe)).then((q) => q && Jx(q)).catch((q) => le(q, v, T));
  }
  const Z = (v) => o.go(v);
  let I;
  const F = /* @__PURE__ */ new Set(), U = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: w,
    options: e,
    push: S,
    replace: b,
    go: Z,
    back: () => Z(-1),
    forward: () => Z(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: J.add,
    isReady: ke,
    install(v) {
      const T = this;
      v.component("RouterLink", qC), v.component("RouterView", KC), v.config.globalProperties.$router = T, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => la(u)
      }), yn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !I && u.value === $n && (I = !0, S(o.location).catch((X) => {
        ({}).NODE_ENV !== "production" && W("Unexpected error when starting the router:", X);
      }));
      const P = {};
      for (const X in $n)
        Object.defineProperty(P, X, {
          get: () => u.value[X],
          enumerable: !0
        });
      v.provide(ir, T), v.provide(Sf, Rx(P)), v.provide(Xc, u);
      const N = v.unmount;
      F.add(v), v.unmount = function() {
        F.delete(v), F.size < 1 && (d = $n, ae && ae(), ae = null, u.value = $n, I = !1, oe = !1), N();
      }, {}.NODE_ENV !== "production" && yn && JC(v, T, t);
    }
  };
  function Y(v) {
    return v.reduce((T, P) => T.then(() => V(P)), Promise.resolve());
  }
  return U;
}
function rb(e, t) {
  const n = [], s = [], o = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((d) => Xn(d, l)) ? s.push(l) : n.push(l));
    const u = e.matched[r];
    u && (t.matched.find((d) => Xn(d, u)) || o.push(u));
  }
  return [n, s, o];
}
function tt() {
  return qs(ir);
}
const lb = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, s = parseInt(e.slice(6, 8)), o = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, s, o, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, cb = (e) => {
  const t = lb(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const kt = window.Vue.unref, _s = window.Vue.createVNode, an = window.Vue.createElementVNode, Rd = window.Vue.renderSlot, zd = window.Vue.withModifiers, Nr = window.Vue.toDisplayString, Mr = window.Vue.withCtx, ub = window.Vue.openBlock, db = window.Vue.createElementBlock, gb = window.Vue.createCommentVNode, pb = { class: "col shrink pe-4" }, mb = { class: "col" }, hb = { class: "cx-translation__details column justify-between ma-0" }, fb = { class: "row ma-0" }, wb = { class: "col grow" }, vb = { class: "col shrink ps-2" }, _b = ["dir", "textContent"], Sb = ["dir", "textContent"], yb = ["textContent"], xb = window.Vuex.useStore, Cb = window.Vue.computed, Ef = {
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
    const n = e, s = xb(), o = (l, u) => {
      const d = s.getters["mediawiki/getPage"](l, u);
      return d == null ? void 0 : d.thumbnail;
    }, a = he(), r = Cb(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = cb(n.translation.startTimestamp);
      return a.i18n(
        l[u.postfix],
        u.value
      );
    });
    return (l, u) => e.translation ? (ub(), db("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = zd((d) => l.$emit("click"), ["stop"]))
    }, [
      an("div", pb, [
        _s(kt(Qc), {
          class: "cx-translation__thumbnail",
          thumbnail: o(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      an("div", mb, [
        an("div", hb, [
          an("div", fb, [
            an("div", wb, [
              Rd(l.$slots, "title")
            ]),
            an("div", vb, [
              _s(kt(et), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = zd((d) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Rd(l.$slots, "mid-content"),
          _s(kt(M), { class: "cx-translation__footer ma-0" }, {
            default: Mr(() => [
              _s(kt(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Mr(() => [
                  an("span", {
                    class: "mw-ui-autonym",
                    dir: kt(R.getDir)(e.translation.sourceLanguage),
                    textContent: Nr(kt(R.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, _b),
                  _s(kt(et), {
                    icon: kt(I0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  an("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: kt(R.getDir)(e.translation.targetLanguage),
                    textContent: Nr(kt(R.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, Sb)
                ]),
                _: 1
              }),
              _s(kt(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Mr(() => [
                  an("span", {
                    textContent: Nr(r.value)
                  }, null, 8, yb)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : gb("", !0);
  }
};
const fo = window.Vue.unref, bb = window.Vue.toDisplayString, kb = window.Vue.normalizeClass, $b = window.Vue.createElementVNode, Ur = window.Vue.openBlock, Vb = window.Vue.createElementBlock, Od = window.Vue.createCommentVNode, Hd = window.Vue.createVNode, Ia = window.Vue.withCtx, jd = window.Vue.createBlock, Eb = ["lang", "textContent"], Lb = ["lang", "innerHTML"], Tb = window.Vue.computed, Ab = window.Vue.inject, Db = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Ki,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, s = Ab("colors").gray200, o = Tb(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = tt(), { setTranslationURLParams: r } = D(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (Ur(), jd(Ef, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": fo(ch),
      onActionIconClicked: d[0] || (d[0] = (i) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: Ia(() => [
        $b("h5", {
          class: kb(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: bb(e.translation.sourceTitle)
        }, null, 10, Eb),
        e.translation.isLeadSectionTranslation ? Od("", !0) : (Ur(), Vb("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, Lb))
      ]),
      "mid-content": Ia(() => [
        e.translation.progress ? (Ur(), jd(fo(M), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ia(() => [
            Hd(fo(k), null, {
              default: Ia(() => [
                Hd(fo(gh), {
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
}, Pb = window.Vuex.useStore, Lf = [], Bb = (e, t, n) => Lf.some(
  (s) => s.sourceLanguage === e && s.targetLanguage === t && s.sourceTitle === n
), Fb = (e, t, n) => {
  const s = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Lf.push(s);
}, Nb = () => {
  const e = Pb();
  return (t, n, s) => x(void 0, null, function* () {
    let o = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, s);
    return !o && !Bb(t, n, s) && (o = yield me.fetchSectionSuggestion(
      t,
      s,
      n
    ), Fb(t, n, s), o && (o.isListable = !1, e.commit("suggestions/addSectionSuggestion", o))), o;
  });
}, Tf = window.Vue.ref, Af = Tf(null), Kc = Tf(null), Mb = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), Af.value = e;
}, Ub = (e) => {
  Kc.value = e;
}, ya = () => {
  const e = tt(), t = sr(), { setTranslationURLParams: n } = D();
  return (s, o, a, r, l = null, u = !0) => x(void 0, null, function* () {
    Mb(r), Ub(l);
    const d = yield t(
      o,
      a,
      s
    );
    n(d), u && e.push({ name: "sx-translation-confirmer" });
  });
};
const Ir = window.Vue.withModifiers, qd = window.Vue.toDisplayString, Gd = window.Vue.createElementVNode, $t = window.Vue.unref, Yn = window.Vue.createVNode, Ib = window.Vue.createTextVNode, Ra = window.Vue.openBlock, Xd = window.Vue.createElementBlock, Wd = window.Vue.createCommentVNode, Kd = window.Vue.createBlock, Ss = window.Vue.withCtx, Rb = ["lang", "href", "textContent"], zb = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, Ob = {
  key: 2,
  class: "flex"
}, Hb = ["innerHTML"], Rr = window.Vue.computed, Yd = window.Vue.ref, Qd = window.Codex.CdxButton, zr = window.Codex.CdxIcon, jb = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: vu,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Yd(!0), s = Yd(null), o = Rr(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.missingSections;
    }), a = Rr(
      () => o.value && Object.keys(o.value)[0]
    );
    Nb()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((p) => s.value = p).catch((p) => console.log(p)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = D(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, d = ya(), i = (p) => {
      d(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), p && l(p);
    }, c = mw.config.get("wgNamespaceIds"), g = Rr(() => new mw.Title(t.translation.targetTitle).getNamespaceId() === c.user);
    return (p, m) => (Ra(), Kd(Ef, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: Ss(() => [
        Gd("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: m[0] || (m[0] = Ir(() => {
          }, ["stop"])),
          textContent: qd(e.translation.sourceTitle)
        }, null, 8, Rb)
      ]),
      "mid-content": Ss(() => [
        Yn($t(M), { class: "ma-0" }, {
          default: Ss(() => [
            Yn($t(k), null, {
              default: Ss(() => [
                g.value ? (Ra(), Xd("div", zb, [
                  Yn($t(zr), {
                    icon: $t(Yh),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  Ib(" " + qd(p.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : Wd("", !0),
                n.value ? (Ra(), Kd($t(dt), { key: 1 })) : o.value ? (Ra(), Xd("div", Ob, [
                  Yn($t(Qd), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: m[1] || (m[1] = Ir((h) => i(a.value), ["stop"]))
                  }, {
                    default: Ss(() => [
                      Yn($t(zr), {
                        class: "me-1",
                        icon: $t(Hh)
                      }, null, 8, ["icon"]),
                      Gd("span", { innerHTML: a.value }, null, 8, Hb)
                    ]),
                    _: 1
                  }),
                  Yn($t(Qd), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": p.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: m[2] || (m[2] = Ir((h) => i(null), ["stop"]))
                  }, {
                    default: Ss(() => [
                      Yn($t(zr), { icon: $t(mu) }, null, 8, ["icon"])
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
}, Df = "cx-translation-session-position-", Pf = () => Df + mw.user.sessionId(), qb = () => {
  const e = parseInt(
    mw.storage.get(Pf())
  );
  return isNaN(e) ? 0 : e;
}, Gb = function(e) {
  const t = Pf();
  mw.storage.set(t, e);
}, Xb = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(Df)).forEach((e) => mw.storage.remove(e));
}, Wb = () => {
  const e = qb();
  return e % 10 === 0 && Xb(), Gb(e + 1), e;
};
function Kb(e) {
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
    content_translation_session_position: Wb()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(o, Object.assign({}, l, e))
  ) : Ph(r).then((u) => {
    mw.eventLog.submit(
      o,
      Object.assign({}, l, e, {
        user_global_edit_count: u,
        user_global_edit_count_bucket: q_(u)
      })
    );
  });
}
const Yb = window.Vuex.useStore, Qb = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], bt = () => {
  const e = Yb(), { previousRoute: t } = Ae(e), n = [
    "event_source",
    "translation_source_language",
    "translation_target_language",
    "translation_source_title"
  ], s = (o) => {
    for (const a of n)
      if (o[a] === null) {
        const r = Qb(
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
  return (o) => (o.access_method || (o.access_method = qn ? "desktop" : "mobile web"), s(o), Kb(o));
}, Jb = window.Vuex.useStore, Zb = () => {
  const { commit: e } = Jb(), t = bt();
  return (n) => x(void 0, null, function* () {
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
const ek = window.Vue.resolveDirective, Or = window.Vue.createElementVNode, tk = window.Vue.withDirectives, Hr = window.Vue.unref, Jd = window.Vue.createVNode, Zd = window.Vue.withCtx, nk = window.Vue.openBlock, sk = window.Vue.createBlock, ok = { class: "pa-4" }, ak = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, ik = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Ki,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, s = t, o = () => s("update:modelValue", !1), a = Zb(), r = () => {
      a(n.translation), o();
    };
    return (l, u) => {
      const d = ek("i18n");
      return nk(), sk(Hr(Ct), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Zd(() => [
          Or("div", ak, [
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
          Or("div", ok, [
            tk(Or("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function rk(e, t, n) {
  return x(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield lk(t, n)).filter((o) => e.includes(o)) : [];
  });
}
function eg(e, t, n) {
  return x(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(R.sortByAutonym) : (yield rk(e, t, n)).sort(R.sortByAutonym);
  });
}
function lk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((s) => s.json()).then((s) => Object.keys(s.languagesearch || {}));
}
function ck() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function uk(e) {
  let t, n = [...e];
  const s = e.length;
  s < 10 && (t = s), s < 30 && (t = 10), s >= 30 && (t = 15);
  const o = [];
  for (; n.length; )
    o.push(n.splice(0, t));
  return o;
}
const dk = window.Vue.computed;
function gk(e, t) {
  const n = dk(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let o = 0; o < t.value.length; o++) {
      const a = R.getAutonym(t.value[o]);
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
const jr = window.Vue.ref, qr = window.Vue.watch, pk = window.Vue.computed;
function Bf(e, t, n) {
  const s = jr(""), o = jr(-1), a = jr(null), r = () => {
    o.value++, o.value >= l.value.length && (o.value = 0);
  }, l = pk(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
    o.value--, o.value < 0 && (o.value = 0);
  };
  return qr(e, () => {
    o.value = -1;
  }), qr(t, () => {
    t.value && l.value.length > 0 && (o.value = 0);
  }), qr(o, () => x(this, null, function* () {
    var d;
    if (o.value < 0) {
      s.value = "";
      return;
    }
    s.value = l.value[o.value], (d = a.value.querySelectorAll(`.language[lang="${s.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: u, keyboardNavigationContainer: a, selectedItem: s };
}
function Su(e, t, n) {
  let s;
  const o = (...a) => {
    const r = this, l = () => {
      s = null, n || e.apply(r, a);
    };
    n && !s && e.apply(r, a), (!s || t) && (clearTimeout(s), s = setTimeout(l, t));
  };
  return o.cancel = () => clearTimeout(s), o;
}
const za = window.Vue.renderSlot, Ee = window.Vue.unref, mk = window.Vue.isRef, tg = window.Vue.createVNode, wo = window.Vue.withModifiers, vo = window.Vue.withKeys, Vn = window.Vue.createElementVNode, hk = window.Vue.resolveDirective, Oa = window.Vue.withDirectives, Gr = window.Vue.renderList, Xr = window.Vue.Fragment, rn = window.Vue.openBlock, ln = window.Vue.createElementBlock, ng = window.Vue.toDisplayString, Ha = window.Vue.normalizeClass, Wr = window.Vue.createCommentVNode, fk = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, wk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, vk = { class: "results px-3 pt-4" }, _k = { class: "results-header ps-8 pb-2" }, Sk = { class: "results-languages--suggestions pa-0 ma-0" }, yk = ["lang", "dir", "aria-selected", "onClick", "textContent"], xk = { class: "results px-3 pt-4" }, Ck = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, bk = ["lang", "dir", "aria-selected", "onClick", "textContent"], kk = ["aria-selected"], $k = { class: "no-results px-3 py-4" }, Vk = { class: "ps-8" }, ja = window.Vue.ref, Ek = window.Vue.watch, Lk = window.Vue.onMounted, sg = window.Vue.computed, Ff = {
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
      default: ck
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = ja(null), a = ja(""), r = ja([]), l = ja(n.suggestions), u = sg(
      () => uk(r.value)
    ), d = sg(() => {
      const S = r.value.length;
      return S < 10 ? "few-results" : S < 30 ? "some-results" : "many-results";
    }), i = (S) => s("select", S), c = () => s("close"), { autocompletion: g, onTabSelect: p } = gk(
      a,
      r
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: w } = Bf(a, r, l), _ = () => {
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
    return Ek(a, Su(() => x(this, null, function* () {
      r.value = yield eg(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), Lk(() => x(this, null, function* () {
      n.autofocus && setTimeout(() => o.value.focus(), 500), r.value = yield eg(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, b) => {
      const A = hk("i18n");
      return rn(), ln("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        za(S.$slots, "search", {}, () => [
          Vn("div", fk, [
            tg(Ee(Uc), {
              value: Ee(g),
              "onUpdate:value": b[0] || (b[0] = (y) => mk(g) ? g.value = y : null),
              icon: Ee(zu),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            tg(Ee(Uc), {
              ref_key: "searchInputElement",
              ref: o,
              value: a.value,
              "onUpdate:value": b[1] || (b[1] = (y) => a.value = y),
              class: "mw-ui-language-selector__search pa-4",
              icon: Ee(zu),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                vo(wo(_, ["prevent"]), ["enter"]),
                vo(wo(Ee(m), ["stop", "prevent"]), ["down"]),
                vo(wo(Ee(h), ["stop", "prevent"]), ["up"]),
                vo(wo(c, ["prevent"]), ["esc"]),
                vo(wo(Ee(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        Vn("section", wk, [
          e.suggestions.length && !a.value ? za(S.$slots, "suggestions", { key: 0 }, () => [
            Vn("section", vk, [
              Oa(Vn("p", _k, null, 512), [
                [A, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Vn("ul", Sk, [
                (rn(!0), ln(Xr, null, Gr(e.suggestions, (y) => (rn(), ln("li", {
                  key: y,
                  class: Ha(["language ma-0", { "language--selected": y === Ee(w) }]),
                  lang: y,
                  dir: Ee(R.getDir)(y),
                  "aria-selected": y === Ee(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (B) => i(y),
                  textContent: ng(Ee(R.getAutonym)(y))
                }, null, 10, yk))), 128))
              ])
            ])
          ]) : Wr("", !0),
          u.value.length ? za(S.$slots, "search", { key: 1 }, () => [
            Vn("section", xk, [
              e.suggestions.length && !a.value ? Oa((rn(), ln("p", Ck, null, 512)), [
                [A, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Wr("", !0),
              (rn(!0), ln(Xr, null, Gr(u.value, (y, B) => (rn(), ln("ul", {
                key: B,
                class: Ha(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (rn(!0), ln(Xr, null, Gr(y, (V) => (rn(), ln("li", {
                  key: V,
                  class: Ha(["language ma-0", { "language--selected": V === Ee(w) }]),
                  lang: V,
                  dir: Ee(R.getDir)(V),
                  role: "option",
                  "aria-selected": V === Ee(w) || null,
                  tabindex: "-1",
                  onClick: (E) => i(V),
                  textContent: ng(Ee(R.getAutonym)(V))
                }, null, 10, bk))), 128)),
                e.allOptionEnabled && !a.value ? Oa((rn(), ln("li", {
                  key: 0,
                  class: Ha(["language ma-0", { "language--selected": Ee(w) === "all" }]),
                  role: "option",
                  "aria-selected": Ee(w) === "all" || null,
                  tabindex: "-1",
                  onClick: b[2] || (b[2] = (V) => i("all"))
                }, null, 10, kk)), [
                  [A, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Wr("", !0)
              ], 2))), 128))
            ])
          ]) : za(S.$slots, "noresults", { key: 2 }, () => [
            Vn("section", $k, [
              Oa(Vn("h3", Vk, null, 512), [
                [A, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const Tk = window.Vue.resolveDirective, og = window.Vue.withDirectives, _o = window.Vue.openBlock, So = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Le = window.Vue.unref, ag = window.Vue.toDisplayString, Vt = window.Vue.createVNode, ig = window.Vue.withModifiers, Qn = window.Vue.withCtx, Ak = window.Vue.normalizeClass, Dk = {
  key: 0,
  class: "mw-ui-autonym"
}, Pk = ["lang", "dir", "textContent"], Bk = {
  key: 0,
  class: "mw-ui-autonym"
}, Fk = ["lang", "dir", "textContent"], yo = window.Vue.computed, Nk = window.Vue.inject, Mk = window.Vue.ref, rg = window.Codex.CdxButton, Kr = window.Codex.CdxIcon, qi = {
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
    const n = e, s = t, o = Nk("breakpoints"), a = yo(() => o.value.mobile), r = Mk(null), l = yo(() => !!r.value), u = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, c = yo(() => {
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
      i(), s(w, h);
    }, p = yo(
      () => n.selectedSourceLanguage === "all"
    ), m = yo(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const w = Tk("i18n");
      return _o(), So("div", {
        class: Ak(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        Vt(Le(M), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Qn(() => [
            Vt(Le(k), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: Qn(() => [
                Vt(Le(rg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: ig(u, ["stop"])
                }, {
                  default: Qn(() => [
                    p.value ? og((_o(), So("span", Dk, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (_o(), So("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Le(R.getDir)(e.selectedSourceLanguage),
                      textContent: ag(Le(R.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, Pk)),
                    Vt(Le(Kr), {
                      size: "x-small",
                      icon: Le(Rc)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            Vt(Le(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: Qn(() => [
                Vt(Le(Kr), { icon: Le(jh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Vt(Le(k), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Qn(() => [
                Vt(Le(rg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: ig(d, ["stop"])
                }, {
                  default: Qn(() => [
                    m.value ? og((_o(), So("span", Bk, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (_o(), So("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Le(R.getDir)(e.selectedTargetLanguage),
                      textContent: ag(Le(R.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, Fk)),
                    Vt(Le(Kr), {
                      size: "x-small",
                      icon: Le(Rc)
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
        Vt(Le(Ct), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (_) => l.value = _),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: Qn(() => [
            Vt(Le(Ff), {
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
const lg = window.Vue.unref, Uk = window.Vue.createVNode, qa = window.Vue.createElementVNode, cg = window.Vue.toDisplayString, Ik = window.Vue.openBlock, Rk = window.Vue.createElementBlock, zk = { class: "cx-list-empty-placeholder pa-4" }, Ok = { class: "cx-list-empty-placeholder__icon-container" }, Hk = { class: "cx-list-empty-placeholder__icon" }, jk = ["textContent"], qk = ["textContent"], Gk = window.Codex.CdxIcon, Nf = {
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
    return (t, n) => (Ik(), Rk("div", zk, [
      qa("div", Ok, [
        qa("div", Hk, [
          Uk(lg(Gk), { icon: lg(Wh) }, null, 8, ["icon"])
        ])
      ]),
      qa("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: cg(e.title)
      }, null, 8, jk),
      qa("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: cg(e.description)
      }, null, 8, qk)
    ]));
  }
}, Xk = window.Vuex.useStore, Wk = window.Vue.ref, Ga = Wk({ draft: !1, published: !1 }), Js = () => {
  const e = Xk(), t = Ks(), n = (o) => x(void 0, null, function* () {
    let a = yield xt.fetchTranslations(o);
    e.commit("translator/clearTranslationsByStatus", o), a.forEach(
      (l) => e.commit("translator/addTranslation", l)
    );
    const r = {};
    for (const l of a) {
      const u = l.sourceLanguage;
      r[u] = r[u] || [], r[u].push(l);
    }
    Ga.value[o] = !0;
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
const Kk = window.Vue.toDisplayString, Yr = window.Vue.normalizeClass, ug = window.Vue.createElementVNode, Ht = window.Vue.openBlock, ys = window.Vue.createBlock, Xa = window.Vue.createCommentVNode, dg = window.Vue.unref, gg = window.Vue.renderList, pg = window.Vue.Fragment, Wa = window.Vue.createElementBlock, Yk = window.Vue.createVNode, mg = window.Vue.withCtx, Qk = ["textContent"], Jk = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Zk = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, Ka = window.Vue.ref, Et = window.Vue.computed, e8 = window.Vue.inject, t8 = window.Vuex.useStore, hg = {
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
    const t = e, n = Ka("all"), s = Ka("all"), o = t8(), { translationsFetched: a } = Js(), r = Et(
      () => a.value[t.translationStatus]
    ), l = Ka(!1), u = Ka(null), d = Et(
      () => t.translationStatus === "draft"
    ), i = Et(
      () => o.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = Et(
      () => n.value === "all"
    ), g = Et(
      () => s.value === "all"
    ), p = Et(
      () => i.value.filter(
        (b) => (c.value || b.sourceLanguage === n.value) && (g.value || b.targetLanguage === s.value)
      ).sort((b, A) => b.lastUpdatedTimestamp < A.lastUpdatedTimestamp)
    ), m = Et(() => {
      const b = i.value.map(
        (A) => A.targetLanguage
      );
      return [...new Set(b)];
    }), h = Et(() => {
      const b = i.value.map(
        (A) => A.sourceLanguage
      );
      return [...new Set(b)];
    }), f = (b) => {
      u.value = b, l.value = !0;
    }, w = Et(() => t.activeStatus === t.translationStatus), _ = e8("breakpoints"), C = Et(() => _.value.mobile), S = Et(
      () => C.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (b, A) => w.value ? (Ht(), ys(dg(Ze), {
      key: 0,
      class: Yr(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: mg(() => [
        ug("div", {
          class: Yr(["cx-translation-list__header", S.value])
        }, [
          ug("h3", {
            class: Yr(["px-4 mw-ui-card__title mb-0", { "pb-4": C.value }]),
            textContent: Kk(b.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Qk),
          p.value.length ? (Ht(), ys(qi, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": A[0] || (A[0] = (y) => n.value = y),
            "selected-target-language": s.value,
            "onUpdate:selectedTargetLanguage": A[1] || (A[1] = (y) => s.value = y),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : Xa("", !0)
        ], 2)
      ]),
      default: mg(() => [
        r.value && !p.value.length ? (Ht(), ys(Nf, {
          key: 0,
          title: b.$i18n("cx-sx-translation-list-empty-title"),
          description: b.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : Xa("", !0),
        r.value ? Xa("", !0) : (Ht(), ys(dg(dt), { key: 1 })),
        d.value ? (Ht(), Wa("div", Jk, [
          (Ht(!0), Wa(pg, null, gg(p.value, (y) => (Ht(), ys(Db, {
            key: `${e.translationStatus}-${y.key}`,
            translation: y,
            onDeleteTranslation: (B) => f(y)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Ht(), Wa("div", Zk, [
          (Ht(!0), Wa(pg, null, gg(p.value, (y) => (Ht(), ys(jb, {
            key: `${e.translationStatus}-${y.key}`,
            translation: y
          }, null, 8, ["translation"]))), 128))
        ])),
        Yk(ik, {
          modelValue: l.value,
          "onUpdate:modelValue": A[2] || (A[2] = (y) => l.value = y),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : Xa("", !0);
  }
};
const Qr = window.Vue.toDisplayString, zi = window.Vue.createElementVNode, Jr = window.Vue.unref, xo = window.Vue.openBlock, Zr = window.Vue.createBlock, fg = window.Vue.createCommentVNode, n8 = window.Vue.Fragment, wg = window.Vue.createElementBlock, s8 = window.Vue.withKeys, o8 = window.Vue.withCtx, a8 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, i8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, r8 = /* @__PURE__ */ zi("span", null, "/", -1), l8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, vg = window.Codex.CdxIcon, c8 = window.Codex.CdxInfoChip, Ya = window.Vue.computed, cs = {
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
      () => t.expanded ? ly : Rc
    );
    return (r, l) => (xo(), Zr(Jr(c8), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = s8((u) => r.$emit("click"), ["enter"]))
    }, {
      default: o8(() => [
        n.value === -1 ? (xo(), wg(n8, { key: 0 }, [
          zi("span", null, Qr(e.content), 1),
          e.expandable ? (xo(), Zr(Jr(vg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : fg("", !0)
        ], 64)) : (xo(), wg("div", a8, [
          zi("span", i8, Qr(s.value), 1),
          r8,
          zi("span", l8, Qr(o.value), 1),
          e.expandable ? (xo(), Zr(Jr(vg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : fg("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const Se = window.Vue.unref, Lt = window.Vue.createVNode, En = window.Vue.createElementVNode, Co = window.Vue.toDisplayString, ht = window.Vue.withCtx, u8 = window.Vue.resolveDirective, el = window.Vue.withDirectives, Ln = window.Vue.openBlock, xs = window.Vue.createBlock, Jn = window.Vue.createCommentVNode, _g = window.Vue.createElementBlock, Sg = window.Vue.withModifiers, d8 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, g8 = { class: "col shrink pe-4" }, p8 = ["lang", "dir", "textContent"], m8 = ["lang", "dir", "textContent"], h8 = { class: "cx-suggestion__missing-sections" }, f8 = {
  key: 0,
  class: "cx-suggestion__easy-sections ms-1"
}, w8 = ["textContent"], v8 = ["textContent"], tl = window.Codex.CdxIcon, Oe = window.Vue.computed, _8 = window.Vue.inject, S8 = window.Vuex.useStore, Yc = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [gs, en, js],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = S8(), s = Oe(() => t.suggestion), o = Oe(
      () => s.value.sourceTitle || s.value.title
    ), a = Oe(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        o.value
      )
    ), r = Oe(
      () => {
        var S;
        return (S = s.value) == null ? void 0 : S.missingSectionsCount;
      }
    ), l = Oe(() => !(s.value instanceof en) || !s.value.orderedMissingSections ? 0 : s.value.orderedMissingSections.filter((S) => {
      const b = s.value.getSectionSize(S.sourceTitle);
      return Ih(b);
    }).length), u = he(), d = Oe(() => {
      const S = u.i18n(
        "cx-sx-translation-suggestion-easy-sections",
        [l.value]
      );
      return u.i18n("parentheses", [S]);
    }), i = Oe(() => {
      var S;
      return (S = a.value) == null ? void 0 : S.description;
    }), c = Oe(
      () => s.value instanceof en
    ), g = Oe(
      () => s.value instanceof js
    ), p = Oe(
      () => R.getAutonym(s.value.sourceLanguage)
    ), m = Oe(
      () => R.getAutonym(s.value.targetLanguage)
    ), h = Oe(
      () => g.value ? Gh : Xh
    ), f = _8("colors"), w = Oe(
      () => g.value ? f.blue600 : "currentColor"
    ), _ = Oe(
      () => {
        var S;
        return X_((S = a.value) == null ? void 0 : S.articleSize);
      }
    ), C = Oe(
      () => s.value instanceof Ah || s.value instanceof Dh
    );
    return (S, b) => {
      const A = u8("i18n");
      return s.value ? (Ln(), _g("div", d8, [
        En("div", g8, [
          Lt(Se(Qc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        Lt(Se(M), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: ht(() => [
            Lt(Se(M), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: ht(() => [
                Lt(Se(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: ht(() => [
                    En("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: Se(R.getDir)(s.value.sourceLanguage),
                      textContent: Co(o.value)
                    }, null, 8, p8)
                  ]),
                  _: 1
                }),
                Lt(Se(k), { shrink: "" }, {
                  default: ht(() => [
                    En("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: Se(R.getDir)(s.value.sourceLanguage),
                      textContent: Co(i.value)
                    }, null, 8, m8)
                  ]),
                  _: 1
                }),
                _.value && !c.value && !C.value ? (Ln(), xs(Se(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: ht(() => [
                    el(En("small", null, null, 512), [
                      [A, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : Jn("", !0),
                c.value ? (Ln(), xs(Se(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom",
                  shrink: ""
                }, {
                  default: ht(() => [
                    el(En("small", h8, null, 512), [
                      [A, [r.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (Ln(), _g("small", f8, Co(d.value), 1)) : Jn("", !0)
                  ]),
                  _: 1
                })) : g.value ? (Ln(), xs(Se(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: ht(() => [
                    Lt(Se(M), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: ht(() => [
                        Lt(Se(k), { grow: "" }, {
                          default: ht(() => [
                            En("small", {
                              textContent: Co(p.value)
                            }, null, 8, w8),
                            Lt(Se(tl), {
                              icon: Se(jh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            En("small", {
                              textContent: Co(m.value)
                            }, null, 8, v8)
                          ]),
                          _: 1
                        }),
                        r.value ? (Ln(), xs(Se(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: ht(() => [
                            el(En("small", null, null, 512), [
                              [A, [
                                r.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : Jn("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : Jn("", !0),
                C.value ? (Ln(), xs(Se(k), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: ht(() => [
                    Lt(cs, {
                      icon: Se(gu),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : Jn("", !0)
              ]),
              _: 1
            }),
            Lt(Se(k), { shrink: "" }, {
              default: ht(() => [
                g.value ? Jn("", !0) : (Ln(), xs(Se(tl), {
                  key: 0,
                  icon: Se(Qs),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: b[0] || (b[0] = Sg((y) => S.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                Lt(Se(tl), {
                  class: "cx-suggestion__favorite-button",
                  icon: h.value,
                  "icon-color": w.value,
                  onClick: b[1] || (b[1] = Sg((y) => S.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : Jn("", !0);
    };
  }
};
const nl = window.Vue.normalizeClass, yg = window.Vue.createVNode, y8 = window.Vue.renderList, xg = window.Vue.Fragment, bo = window.Vue.openBlock, Qa = window.Vue.createElementBlock, x8 = window.Vue.createBlock, C8 = window.Vue.toDisplayString, b8 = window.Vue.withKeys, Cg = window.Vue.createCommentVNode, k8 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, Ja = window.Vue.computed, $8 = window.Vue.ref, V8 = window.Vue.watchEffect, E8 = {
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
    ), o = $8(!1);
    V8(() => {
      n.filter.expandable && (o.value = s.value);
    });
    const a = t, r = () => {
      n.filter.expandable && s.value ? o.value = !o.value : a("filter-selected", n.filter);
    }, l = Ja(() => {
      const g = n.filter.subFilters.find(
        (m) => n.isSelected(m)
      );
      let p = n.filter.chipLabel;
      return g && (p += `/${u(g)}`), p;
    }), u = (g) => {
      const { label: p } = g, m = n.filter.label;
      return p.startsWith(`${m}/`) ? p.replace(`${m}/`, "") : p;
    }, d = Ja(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), i = Ja(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && o.value
    ), c = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, p) => (bo(), Qa(xg, null, [
      yg(cs, {
        class: nl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": s.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: o.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      o.value ? (bo(), Qa("div", k8, [
        yg(cs, {
          class: nl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: p[0] || (p[0] = (m) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (bo(!0), Qa(xg, null, y8(d.value, (m) => (bo(), x8(cs, {
          key: m.id,
          class: nl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(m)
          }]),
          content: u(m),
          icon: m.icon,
          onClick: (h) => g.$emit("filter-selected", m)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        i.value ? (bo(), Qa("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: c,
          onKeyup: b8(c, ["enter"])
        }, C8(e.viewMoreConfig.label), 33)) : Cg("", !0)
      ])) : Cg("", !0)
    ], 64));
  }
};
const L8 = window.Vue.toDisplayString, bg = window.Vue.createElementVNode, T8 = window.Vue.renderList, kg = window.Vue.Fragment, sl = window.Vue.openBlock, $g = window.Vue.createElementBlock, A8 = window.Vue.createBlock, D8 = { class: "sx-suggestions-filters__group-label mb-3" }, P8 = { class: "sx-suggestions-filters__group-filters mb-3" }, B8 = {
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
    return (s, o) => (sl(), $g(kg, null, [
      bg("div", D8, L8(e.filterGroup.label), 1),
      bg("div", P8, [
        (sl(!0), $g(kg, null, T8(n(), (a) => (sl(), A8(E8, {
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
}, F8 = window.Vue.computed, Vg = window.Vue.ref, Eg = window.Vue.watch, yu = (e, t) => {
  const s = Vg([]), o = Vg(!1), a = F8(
    () => s.value.slice(0, 4)
  ), r = Su(() => x(void 0, null, function* () {
    if (!t.value) {
      o.value = !1;
      return;
    }
    try {
      s.value = yield ds.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      o.value = !1;
    }
  }), 500), l = () => {
    s.value = [], t.value && (o.value = !0, r());
  };
  return Eg(t, l), Eg(e, l), {
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
    showThumbnail: u = !1
  }) {
    this.label = t, this.value = n + "-" + o, this.description = s, this.thumbnail = r, this.filterType = o, this.filterId = a, this.icon = l, this.showThumbnail = u;
  }
}
const ol = window.Vue.ref, Lg = window.Vue.watch, Tg = window.Vue.computed, { topics: N8, regions: M8 } = mw.loader.require(
  "ext.cx.articlefilters"
), U8 = N8.flatMap(
  (e) => e.topics.map((t) => Ye(ue({}, t), {
    groupId: e.groupId
  }))
), I8 = () => {
  const e = ol(""), t = ol("all"), n = ol({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), s = he(), { pageCollectionGroups: o } = du(), { sourceLanguageURLParameter: a } = D(), r = (p) => (p = p.toLowerCase(), U8.filter(
    (m) => m.label.toLowerCase().includes(p)
  )), l = (p) => (p = p.toLowerCase(), Object.values(o.value).flat().filter(
    (h) => h.name.toLowerCase().includes(p)
  )), u = (p) => (p = p.toLowerCase(), M8.flatMap((m) => [m, ...m.countries]).filter(
    (m) => m.label.toLowerCase().includes(p)
  ).map((m) => ({
    label: m.label,
    id: m.id
  }))), d = Tg(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: c } = yu(
    a,
    d
  );
  Lg(i, () => {
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
  }), Lg([e, t], () => x(void 0, null, function* () {
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
        icon: t.value === "all" ? gu : null,
        filterType: ee,
        filterId: p.name
      })
    ), n.value.regions = u(e.value).map(
      (p) => new Za({
        label: p.label,
        value: p.label,
        description: s.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? zc : null,
        filterType: Ve,
        filterId: p.id
      })
    );
  }));
  const g = Tg(() => {
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
}, R8 = "suggestion_filter_topic_area", z8 = "suggestion_filter_search_result_seed", O8 = "suggestion_filter_collections", H8 = "suggestion_filter_previous_edits", j8 = "suggestion_filter_popular_articles", q8 = "suggestion_filter_region", al = (e) => {
  if (e.type === We || e.type === Ve || e.type === ee || e.type === yt)
    return e.id;
  if (e.id === ee)
    return "all-collections";
}, il = (e) => {
  if (e.type === We)
    return R8;
  if (e.type === Ve)
    return q8;
  if (e.type === yt)
    return z8;
  if (e.id === ee || e.type === ee)
    return O8;
  if (e.id === nn)
    return H8;
  if (e.id === xn)
    return j8;
}, Mf = () => {
  const e = bt();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: il(r),
      event_context: al(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: il(r),
      event_context: al(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: il(r),
      event_context: al(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const xe = window.Vue.unref, ft = window.Vue.createVNode, Tt = window.Vue.withCtx, G8 = window.Vue.resolveDirective, jt = window.Vue.createElementVNode, Cs = window.Vue.withDirectives, Ag = window.Vue.toDisplayString, X8 = window.Vue.createTextVNode, W8 = window.Vue.vShow, Dg = window.Vue.renderList, Pg = window.Vue.Fragment, cn = window.Vue.openBlock, Zn = window.Vue.createElementBlock, Bg = window.Vue.isRef, K8 = window.Vue.withKeys, Fg = window.Vue.createCommentVNode, Ng = window.Vue.createBlock, Y8 = { class: "sx-suggestions-filters" }, Q8 = { class: "mb-0" }, J8 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, Z8 = { class: "mb-3" }, e2 = { class: "px-4 pb-4 pt-7" }, t2 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, n2 = ["onKeyup", "onClick"], s2 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, o2 = { class: "sx-suggestions-filters__search-results-pending" }, a2 = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, i2 = { class: "sx-suggestions-filters__search-results-empty-primary" }, r2 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, ei = window.Vue.ref, bs = window.Vue.computed, l2 = window.Vue.inject, c2 = window.Vue.watch, Mg = window.Codex.CdxButton, u2 = window.Codex.CdxIcon, d2 = window.Codex.CdxTextInput, g2 = window.Codex.CdxMenu, p2 = window.Codex.CdxTabs, m2 = window.Codex.CdxTab, h2 = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = he(), s = t, o = bs(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: g([
          Je,
          ee,
          Ve,
          We
        ])
      },
      {
        name: "collections",
        label: n.i18n("cx-sx-suggestions-filters-tab-collections"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-collections"
        ),
        filterGroups: g([ee])
      },
      {
        name: "geography",
        label: n.i18n("cx-sx-suggestions-filters-tab-regions"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-regions"
        ),
        filterGroups: g([Ve])
      },
      {
        name: "topics",
        label: n.i18n("cx-sx-suggestions-filters-tab-topics"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-topics"
        ),
        filterGroups: g([We])
      }
    ]), a = (I) => j.value = I, r = (I, F) => F === "all" && I.type === Ve ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          I.label
        ),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, l = (I, F) => {
      if (I !== "all")
        return !1;
      if (F === ee) {
        const U = g([ee]);
        return U.length && U[0].filters.length > 6;
      }
      return F === Ve;
    }, { allFilters: u, isFilterSelected: d, selectFilter: i, findSelectedFilter: c } = nr(), g = (I) => I.flatMap((F) => u.value.filter((U) => U.type === F)).filter(Boolean), p = () => {
      b(), s("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: m,
      logSuggestionFiltersConfirm: h,
      logSuggestionFiltersSelect: f
    } = Mf(), w = () => {
      m(), p();
    }, _ = () => {
      S.value && (h(S.value), i(S.value)), p();
    }, C = ei(!1), S = ei(null), b = () => {
      S.value = null, C.value = !1;
    }, A = (I) => {
      f(I), S.value = I, C.value = !0;
    }, y = (I) => S.value ? S.value.id === I.id && S.value.type === I.type : d(I), B = l2("breakpoints"), V = bs(() => B.value.mobile), { searchInput: E, searchScope: j, searchResults: se, searchResultsLoading: ae } = I8(), te = bs(
      () => S.value || c()
    ), z = ei(null);
    c2(z, () => {
      if (!z.value)
        return;
      const I = oe.value.find(
        (F) => F.value === z.value
      );
      A({
        type: I.filterType,
        id: I.filterId,
        label: I.label
      }), E.value = "";
    });
    const J = {
      [ee]: "cx-sx-suggestions-filters-view-all-collections-group",
      [Ve]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, oe = bs(
      () => se.value.flatMap((I) => I.items)
    ), le = ei({}), ke = bs(
      () => le.value[j.value]
    ), Ke = bs(() => {
      var F;
      const I = (F = ke.value) == null ? void 0 : F.getHighlightedMenuItem();
      return I == null ? void 0 : I.id;
    }), Pe = (I) => {
      I.key !== " " && ke.value && ke.value.delegateKeyNavigation(I);
    }, Z = (I, F) => {
      le.value[F] = I;
    };
    return (I, F) => {
      const U = G8("i18n");
      return cn(), Ng(xe(Ct), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: V.value,
        header: !1
      }, {
        default: Tt(() => [
          jt("section", Y8, [
            ft(xe(M), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Tt(() => [
                ft(xe(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Tt(() => [
                    ft(xe(Mg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": I.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: w
                    }, {
                      default: Tt(() => [
                        ft(xe(u2), { icon: xe(Qs) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                ft(xe(k), {
                  grow: "",
                  align: "center"
                }, {
                  default: Tt(() => [
                    Cs(jt("h5", Q8, null, 512), [
                      [U, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                ft(xe(k), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Tt(() => [
                    Cs(ft(xe(Mg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: _
                    }, {
                      default: Tt(() => [
                        X8(Ag(I.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [W8, C.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            jt("div", J8, [
              Cs(jt("h5", Z8, null, 512), [
                [U, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              jt("div", null, [
                ft(cs, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: te.value.label,
                  icon: te.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            ft(xe(p2), {
              active: xe(j),
              "onUpdate:active": [
                F[2] || (F[2] = (Y) => Bg(j) ? j.value = Y : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Tt(() => [
                (cn(!0), Zn(Pg, null, Dg(o.value, (Y, v) => (cn(), Ng(xe(m2), {
                  key: v,
                  name: Y.name,
                  label: Y.label
                }, {
                  default: Tt(() => [
                    jt("div", e2, [
                      ft(xe(d2), {
                        modelValue: xe(E),
                        "onUpdate:modelValue": F[0] || (F[0] = (T) => Bg(E) ? E.value = T : null),
                        role: "combobox",
                        "aria-activedescendant": Ke.value,
                        "aria-controls": "sx-suggestions-filters__search-results__menu",
                        "aria-autocomplete": "none",
                        placeholder: Y.searchPlaceholder,
                        "input-type": "search",
                        "start-icon": xe(zc),
                        clearable: !!xe(E),
                        onKeydown: Pe
                      }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
                    ]),
                    xe(E) ? (cn(), Zn("div", s2, [
                      ft(xe(g2), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (T) => Z(T, Y.name),
                        selected: z.value,
                        "onUpdate:selected": F[1] || (F[1] = (T) => z.value = T),
                        "show-pending": xe(ae),
                        expanded: "",
                        "menu-items": oe.value
                      }, {
                        pending: Tt(() => [
                          Cs(jt("div", o2, null, 512), [
                            [U, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Tt(() => [
                          xe(ae) ? Fg("", !0) : (cn(), Zn("div", a2, [
                            Cs(jt("span", i2, null, 512), [
                              [U, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            Cs(jt("span", r2, null, 512), [
                              [U, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (cn(), Zn("div", t2, [
                      (cn(!0), Zn(Pg, null, Dg(Y.filterGroups, (T) => (cn(), Zn("div", {
                        key: T.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        ft(B8, {
                          "filter-group": T,
                          "tentatively-select-filter": A,
                          "is-selected": y,
                          limit: l(Y.name, T.type) ? 4 : 0,
                          "get-sub-filter-config": (P) => r(P, Y.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        l(Y.name, T.type) ? (cn(), Zn("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: K8((P) => a(T.id), ["enter"]),
                          onClick: (P) => a(T.id)
                        }, [
                          jt("span", null, Ag(I.$i18n(J[T.id])), 1)
                        ], 40, n2)) : Fg("", !0)
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
const ko = window.Vue.unref, ti = window.Vue.openBlock, Ug = window.Vue.createBlock;
window.Vue.createCommentVNode;
const f2 = window.Vue.renderList, w2 = window.Vue.Fragment, Ig = window.Vue.createElementBlock, v2 = window.Vue.normalizeClass, Rg = window.Vue.createVNode, _2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, zg = window.Vue.ref;
window.Vue.computed;
const Og = window.Vue.watch, S2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = he(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: s } = Mf(), {
      getFiltersSummary: o,
      selectFilter: a,
      isFilterSelected: r,
      waitingForPageCollectionsFetch: l,
      validateURLFilterWithCollections: u
    } = nr(), d = zg(!1), i = () => {
      s(), d.value = !0;
    }, c = (p) => {
      n(p), a(p);
    }, g = zg(o());
    return Og(d, (p) => {
      p || (g.value = o());
    }), Og(l, (p) => {
      p || (u(), g.value = o());
    }), (p, m) => ko(l) ? (ti(), Ug(ko(dt), { key: 0 })) : (ti(), Ig("div", _2, [
      (ti(!0), Ig(w2, null, f2(g.value, (h) => (ti(), Ug(cs, {
        key: h.label,
        class: v2(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": ko(r)(h)
        }]),
        icon: h.icon,
        content: h.label,
        onClick: (f) => c(h)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Rg(cs, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: ko(mu),
        content: ko(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: i
      }, null, 8, ["icon", "content"]),
      Rg(h2, {
        modelValue: d.value,
        "onUpdate:modelValue": m[0] || (m[0] = (h) => d.value = h)
      }, null, 8, ["modelValue"])
    ]));
  }
}, ks = window.Vue.computed, Hg = window.Vue.ref, y2 = window.Vue.watch, x2 = window.Vuex.useStore, C2 = () => {
  const e = x2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = D(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: a } = lu(), r = bt(), l = ks(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = ks(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = Hg(0), i = Hg(0), { maxSuggestionsPerSlice: c } = e.state.suggestions, g = 4, p = ks(
    () => a(d.value)
  ), m = ks(
    () => o(i.value)
  ), h = () => {
    b(), V(), A(), E();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: w
  } = fu(), _ = (j) => j.length === c, C = ks(
    () => _(m.value)
  ), S = ks(
    () => _(p.value)
  ), b = () => {
    const j = (d.value + 1) % g, se = _(
      a(j)
    );
    (!S.value || !se) && f();
  }, A = () => {
    const j = (i.value + 1) % g, se = _(
      o(j)
    );
    (!C.value || !se) && w();
  }, y = (j) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", j), b();
  }, B = (j) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", j), A();
  }, V = () => d.value = (d.value + 1) % g, E = () => i.value = (i.value + 1) % g;
  return y2(
    s,
    () => {
      i.value = 0, A(), d.value = 0, b();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: B,
    discardSectionSuggestion: y,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: l,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: o,
    isCurrentPageSuggestionsSliceFull: C,
    isCurrentSectionSuggestionsSliceFull: S
  };
}, b2 = window.Vuex.useStore, xu = () => {
  const e = b2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = fu(), s = (d, i, c) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === c
  ), o = (d) => x(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: c, targetLanguage: g } = d;
    yield me.markFavorite(i, c, g);
    const p = new js({
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
    markFavoriteSuggestion: (d, i, c) => x(void 0, null, function* () {
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
      const m = new js({
        title: d,
        sourceLanguage: i,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), me.unmarkFavorite(d))
  };
}, k2 = "suggestion_no_seed", $2 = "suggestion_recent_edit", V2 = "suggestion_topic_area", E2 = "suggestion_search_result_seed", L2 = "suggestion_featured", T2 = "suggestion_collections", A2 = "suggestion_region", D2 = () => {
  const { currentSuggestionFilters: e } = D();
  return (t = null) => {
    const { type: n, id: s } = e.value;
    if (s === nn)
      return t ? $2 : k2;
    if (n === We)
      return V2;
    if (n === Ve)
      return A2;
    if (n === yt)
      return E2;
    if (s === xn)
      return L2;
    if (s === ee || n === ee)
      return T2;
    const o = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${s}`
    );
    throw mw.errorLogger.logError(o, "error.contenttranslation"), o;
  };
};
const jg = window.Vue.normalizeClass, P2 = window.Vue.resolveDirective, $o = window.Vue.createElementVNode, ni = window.Vue.withDirectives, we = window.Vue.unref, st = window.Vue.openBlock, qt = window.Vue.createBlock, Tn = window.Vue.createCommentVNode, rl = window.Vue.createVNode, Vo = window.Vue.withCtx, qg = window.Vue.renderList, Gg = window.Vue.Fragment, ll = window.Vue.createElementBlock, B2 = window.Vue.toDisplayString, F2 = window.Vue.createTextVNode, N2 = window.Vue.vShow, M2 = { class: "cx-suggestion-list" }, U2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, I2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, R2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Gt = window.Vue.computed, z2 = window.Vue.inject, O2 = window.Vue.ref, H2 = window.Codex.CdxButton, j2 = window.Codex.CdxIcon, q2 = window.Vuex.useStore, G2 = {
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
    } = D(), { supportedSourceLanguageCodes: o, supportedTargetLanguageCodes: a } = wa(), r = ef(), l = (Z) => r(Z, n.value), u = (Z) => r(t.value, Z), d = D2(), i = ya(), c = (Z) => {
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
      pageSuggestionsLoading: w,
      sectionSuggestionsLoading: _,
      isCurrentPageSuggestionsSliceFull: C,
      isCurrentSectionSuggestionsSliceFull: S
    } = C2(), b = O2(null), A = bt(), y = () => {
      A({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), b.value && b.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: B, markFavoritePageSuggestion: V } = xu(), E = z2("breakpoints"), j = Gt(() => E.value.mobile), se = Gt(
      () => j.value ? null : "pb-2 flex justify-between items-center"
    ), ae = q2(), te = Gt(
      () => ae.state.suggestions.isPageSuggestionsFetchPending
    ), z = Gt(
      () => ae.state.suggestions.isSectionSuggestionsFetchPending
    ), J = Gt(
      () => te.value || w.value && !C.value
    ), oe = Gt(
      () => z.value || _.value && !S.value
    ), le = Gt(
      () => te.value || w.value || g.value.length > 0
    ), ke = Gt(
      () => z.value || _.value || p.value.length > 0
    ), Ke = Gt(
      () => !le.value && !ke.value
    ), Pe = Gt(
      () => !_.value && !w.value && !te.value && !z.value && !Ke.value
    );
    return (Z, I) => {
      const F = P2("i18n");
      return ni((st(), ll("div", M2, [
        rl(we(Ze), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: Vo(() => [
            $o("div", {
              class: jg(["cx-suggestion-list__header-card__header px-4", se.value])
            }, [
              ni($o("h3", {
                class: jg(["mw-ui-card__title mb-0", { "py-3": j.value }])
              }, null, 2), [
                [F, void 0, "cx-suggestionlist-title"]
              ]),
              j.value ? Tn("", !0) : (st(), qt(qi, {
                key: 0,
                "source-languages": we(o),
                "target-languages": we(a),
                "selected-source-language": we(t),
                "selected-target-language": we(n),
                "onUpdate:selectedSourceLanguage": l,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            rl(S2)
          ]),
          default: Vo(() => [
            j.value ? (st(), qt(qi, {
              key: 0,
              "source-languages": we(o),
              "target-languages": we(a),
              "selected-source-language": we(t),
              "selected-target-language": we(n),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : Tn("", !0)
          ]),
          _: 1
        }),
        ke.value ? (st(), qt(we(Ze), {
          key: 0,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: Vo(() => [
            ni($o("h5", U2, null, 512), [
              [F, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (st(!0), ll(Gg, null, qg(we(p), (U, Y) => (st(), qt(Yc, {
              key: `section-suggestion-${Y}`,
              class: "ma-0",
              suggestion: U,
              onClose: (v) => we(h)(U),
              onClick: (v) => c(U),
              onBookmark: (v) => we(B)(U)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            oe.value ? (st(), qt(we(dt), { key: 0 })) : Tn("", !0)
          ]),
          _: 1
        })) : Tn("", !0),
        le.value ? (st(), qt(we(Ze), {
          key: 1,
          ref_key: "pageSuggestionsList",
          ref: b,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: Vo(() => [
            ni($o("h5", I2, null, 512), [
              [F, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (st(!0), ll(Gg, null, qg(we(g), (U, Y) => (st(), qt(Yc, {
              key: `page-suggestion-${Y}`,
              suggestion: U,
              onClose: (v) => we(m)(U),
              onClick: (v) => c(U),
              onBookmark: (v) => we(V)(U)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            J.value ? (st(), qt(we(dt), { key: 0 })) : Tn("", !0)
          ]),
          _: 1
        }, 512)) : Tn("", !0),
        Ke.value ? (st(), qt(Nf, {
          key: 2,
          title: Z.$i18n("cx-sx-suggestion-list-empty-title"),
          description: Z.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : Tn("", !0),
        $o("div", R2, [
          Pe.value ? (st(), qt(we(H2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: y
          }, {
            default: Vo(() => [
              rl(we(j2), {
                class: "me-1",
                icon: we(Kh)
              }, null, 8, ["icon"]),
              F2(" " + B2(Z.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Tn("", !0)
        ])
      ], 512)), [
        [N2, e.active]
      ]);
    };
  }
}, X2 = window.Vue.resolveDirective, W2 = window.Vue.createElementVNode, K2 = window.Vue.withDirectives, Y2 = window.Vue.renderList, Q2 = window.Vue.Fragment, cl = window.Vue.openBlock, J2 = window.Vue.createElementBlock, Xg = window.Vue.unref, Wg = window.Vue.createBlock, Kg = window.Vue.withCtx, Z2 = window.Vue.createCommentVNode, e$ = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, t$ = window.Vue.computed, n$ = window.Vuex.useStore, s$ = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = n$(), n = t$(() => t.state.suggestions.favorites || []), s = ya(), o = (r) => s(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = xu();
    return (r, l) => {
      const u = X2("i18n");
      return n.value.length ? (cl(), Wg(Xg(Ze), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Kg(() => [
          K2(W2("h3", e$, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Kg(() => [
          (cl(!0), J2(Q2, null, Y2(n.value, (d, i) => (cl(), Wg(Yc, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (c) => o(d),
            onBookmark: (c) => Xg(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : Z2("", !0);
    };
  }
};
const o$ = window.Vue.resolveDirective, Eo = window.Vue.createElementVNode, a$ = window.Vue.withDirectives, i$ = window.Vue.renderList, r$ = window.Vue.Fragment, Yg = window.Vue.openBlock, Qg = window.Vue.createElementBlock, l$ = window.Vue.unref, c$ = window.Vue.createVNode, u$ = window.Vue.toDisplayString, d$ = { class: "cx-help-panel pa-4" }, g$ = { class: "cx-help-panel__item-list mt-6 ps-2" }, p$ = ["href", "target"], m$ = ["textContent"], h$ = window.Codex.CdxIcon, f$ = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = he(), n = [
      {
        icon: my,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: uy,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (s, o) => {
      const a = o$("i18n");
      return Yg(), Qg("div", d$, [
        a$(Eo("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Eo("ul", g$, [
          (Yg(), Qg(r$, null, i$(n, (r, l) => Eo("li", {
            key: l,
            class: "mt-4"
          }, [
            Eo("a", {
              href: r.href,
              target: r.target
            }, [
              c$(l$(h$), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Eo("span", {
                textContent: u$(r.label)
              }, null, 8, m$)
            ], 8, p$)
          ])), 64))
        ])
      ]);
    };
  }
};
const w$ = window.Vue.resolveDirective, $s = window.Vue.createElementVNode, ul = window.Vue.withDirectives, Jg = window.Vue.toDisplayString, dl = window.Vue.unref, gl = window.Vue.withCtx, pl = window.Vue.createVNode, v$ = window.Vue.openBlock, _$ = window.Vue.createElementBlock, S$ = { class: "cx-stats-panel pa-4" }, y$ = ["textContent"], x$ = { class: "cx-stats-panel__monthly-stats-label" }, C$ = ["textContent"], b$ = { class: "cx-stats-panel__total-stats-label" }, k$ = window.Vue.ref, Zg = window.Vue.computed, $$ = window.Vue.watch, V$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", s = Zg(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.count) || 0;
    }), o = Zg(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.delta) || 0;
    }), a = k$(null);
    return $$(
      () => t.stats,
      () => {
        const r = t.stats, l = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), d = u.reduce(
          (S, b) => Math.max(S, r[b].delta),
          0
        ), i = u.map((S) => r[S].delta), c = a.value.getBoundingClientRect().width, g = a.value.getBoundingClientRect().height;
        a.value.width = c, a.value.height = g;
        const p = 4, m = 6, h = 50, f = (h - p) / d;
        let w = p;
        const _ = Math.floor(
          (c - p) / (m + p)
        ), C = i.slice(
          Math.max(i.length - _, 0)
        );
        C.forEach((S, b) => {
          b === C.length - 1 && (l.fillStyle = "#36c");
          const A = h - S * f;
          l.fillRect(w, A, m, S * f), w += m + p;
        });
      }
    ), (r, l) => {
      const u = w$("i18n");
      return v$(), _$("div", S$, [
        ul($s("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        pl(dl(M), null, {
          default: gl(() => [
            pl(dl(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: gl(() => [
                $s("h3", {
                  textContent: Jg(o.value)
                }, null, 8, y$),
                ul($s("h5", x$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            pl(dl(k), { class: "cx-stats-panel__total-stats" }, {
              default: gl(() => [
                $s("h3", {
                  textContent: Jg(s.value)
                }, null, 8, C$),
                ul($s("h5", b$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        $s("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, Uf = () => {
  const e = bt();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const E$ = window.Vue.renderSlot, L$ = window.Vue.unref, T$ = window.Vue.createVNode, A$ = window.Vue.createElementVNode, D$ = window.Vue.openBlock, P$ = window.Vue.createElementBlock, B$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, F$ = { class: "col-12 ma-0 pa-0" }, N$ = {
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
    const n = t, s = Uf(), o = (a) => {
      s(a), n("update:active", a);
    };
    return (a, r) => (D$(), P$("footer", B$, [
      A$("div", F$, [
        E$(a.$slots, "default", {}, () => [
          T$(L$(ma), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: o
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, M$ = window.Vuex.useStore, U$ = () => {
  const e = M$(), t = Ks();
  return () => x(void 0, null, function* () {
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
}, I$ = window.Vuex.useStore, If = () => {
  const e = I$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a
  } = D(), { isDefaultFilter: r } = eu(), { previousRoute: l } = Ae(e), u = bt(), d = () => {
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
    const g = i(), p = {
      event_type: "dashboard_open",
      event_source: g,
      translation_source_language: o.value,
      translation_target_language: a.value
    };
    return g === "suggestion_filter_direct_preselect" && (p.event_context = s.value.id), u(p);
  } };
}, ep = window.Vue.computed, R$ = window.Vuex.useStore, De = () => {
  const e = R$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s,
    sectionURLParameter: o
  } = D(), a = ep(
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
}, z$ = window.Vue.ref, si = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, ml = z$(null), zt = () => {
  const { isCurrentSectionPresent: e } = De(), t = () => {
    e.value ? s(si.EXPAND) : s(si.NEW_SECTION);
  }, n = () => {
    ml.value = null;
  }, s = (o) => {
    if (!Object.values(si).includes(o))
      throw new Error("[CX] Invalid publishing target used");
    ml.value = o;
  };
  return {
    target: ml,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: s,
    PUBLISHING_TARGETS: si
  };
}, O$ = window.Vue.watch, H$ = () => {
  const { fetchAllTranslations: e } = Js(), t = Jh(), n = U$(), { fetchPageCollectionGroups: s } = du(), { logDashboardOpenEvent: o } = If(), { applicationLanguagesInitialized: a } = tf(), { clearPublishTarget: r } = zt();
  return () => x(void 0, null, function* () {
    s(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), O$(
      a,
      () => {
        a.value && (o(), t());
      },
      { immediate: !0 }
    );
  });
}, tp = window.Vue.computed, j$ = window.Vue.ref, q$ = window.Vue.watch, G$ = window.Vue.watchEffect, X$ = window.Vuex.useStore, W$ = ["suggestions", "draft", "published"], K$ = () => {
  const e = X$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = D(), { translationsFetched: s } = Js(), o = j$(null);
  if (W$.includes(t.value))
    o.value = t.value;
  else {
    const a = tp(
      () => s.value.draft
    ), r = tp(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? o.value = r.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", q$(a, (l) => {
      l && (o.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return G$(() => {
    n(o.value), window.scrollTo(0, 0);
  }), o;
}, Y$ = window.Vue.computed, Q$ = () => {
  const e = he();
  return Y$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: B0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Xi,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: P0,
        type: "text"
      }
    }
  ]);
};
const Ce = window.Vue.unref, Me = window.Vue.createVNode, J$ = window.Vue.toDisplayString, Z$ = window.Vue.createTextVNode, un = window.Vue.withCtx, hl = window.Vue.openBlock, np = window.Vue.createBlock, sp = window.Vue.createCommentVNode, eV = window.Vue.vShow, tV = window.Vue.withDirectives, nV = window.Vue.isRef, sV = window.Vue.createElementBlock, oV = window.Vue.computed, aV = window.Vuex.useStore, iV = window.Codex.CdxButton, rV = window.Codex.CdxIcon, lV = {
  __name: "CXDashboard",
  setup(e) {
    const t = tt(), n = bt(), s = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    H$()();
    const a = aV();
    a.dispatch("translator/fetchTranslatorStats");
    const r = oV(() => a.state.translator.translatorStats), l = K$(), u = Q$(), d = Uf(), i = (c) => {
      d(c), l.value = c;
    };
    return (c, g) => (hl(), sV("div", null, [
      Me(Ce(M), { class: "ma-0 pb-4" }, {
        default: un(() => [
          Me(Ce(iV), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: s
          }, {
            default: un(() => [
              Me(Ce(rV), {
                class: "me-1",
                icon: Ce(Hh)
              }, null, 8, ["icon"]),
              Z$(" " + J$(c.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Me(Ce(M), {
        class: "ma-0",
        align: "start"
      }, {
        default: un(() => [
          c.$mwui.breakpoint.tabletAndUp ? (hl(), np(Ce(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: un(() => [
              Me(Ce(ma), {
                id: "dashboard-list-selector--desktop",
                items: Ce(u),
                active: Ce(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : sp("", !0),
          Me(Ce(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: un(() => [
              tV(Me(s$, null, null, 512), [
                [eV, Ce(l) === "suggestions"]
              ]),
              Me(G2, {
                active: Ce(l) === "suggestions"
              }, null, 8, ["active"]),
              Me(hg, {
                "translation-status": "draft",
                "active-status": Ce(l)
              }, null, 8, ["active-status"]),
              Me(hg, {
                "translation-status": "published",
                "active-status": Ce(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Me(Ce(k), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: un(() => [
              Me(Ce(M), {
                class: "ma-0",
                align: "start"
              }, {
                default: un(() => [
                  Me(Ce(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: un(() => [
                      Me(V$, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Me(Ce(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: un(() => [
                      Me(f$)
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
      c.$mwui.breakpoint.mobile ? (hl(), np(N$, {
        key: 0,
        active: Ce(l),
        "onUpdate:active": g[0] || (g[0] = (p) => nV(l) ? l.value = p : null),
        items: Ce(u)
      }, null, 8, ["active", "items"])) : sp("", !0)
    ]));
  }
}, cV = {
  name: "DashboardView",
  components: { CxDashboard: lV }
}, uV = window.Vue.resolveComponent, dV = window.Vue.createVNode, gV = window.Vue.openBlock, pV = window.Vue.createElementBlock, mV = { class: "cx-translation-dashboard" };
function hV(e, t, n, s, o, a) {
  const r = uV("cx-dashboard");
  return gV(), pV("main", mV, [
    dV(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const op = /* @__PURE__ */ ge(cV, [["render", hV]]), fV = window.Vuex.useStore, wV = window.Vue.computed, Ot = () => {
  const e = fV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: s,
    pageURLParameter: o
  } = D();
  return { currentTranslation: wV(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === o.value && r.sectionTitleMatches(s.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, Vs = window.Vue.computed, vV = () => {
  const { sectionSuggestion: e } = De(), { targetLanguageURLParameter: t } = D(), { currentTranslation: n } = Ot(), s = Vs(
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
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = bn(), u = Vs(() => r ? K.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? o.value > 1 || o.value === 1 && a.value > 0 ? "cx-sx-select-section" : o.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : o.value === 0 && a.value > 0 ? "cx-sx-select-section" : o.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = Vs(() => {
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
    getActionButtonLabel: d,
    isProgressiveButton: c,
    targetArticlePath: u
  };
};
function _V(e) {
  return e.$el = $(e), e;
}
function SV(e, t, n, s) {
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
function yV() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function xV(e, t) {
  return x(this, null, function* () {
    yield Cu(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = _V(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const CV = window.Vue.computed, bV = window.Vue.onMounted, kV = window.Vue.ref;
function $V(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const VV = {
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
    const n = kV(null);
    let s = null;
    const o = CV(
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
    return bV(() => x(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = $V;
      const i = yield xV(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), s = SV(
        i,
        e.content,
        e.language,
        e.dir
      );
      const c = ve.ui.contextItemFactory.lookup("reference");
      c.prototype.getRendering = yV, s.focus();
    })), { sxeditor: n };
  }
}, Oi = window.Vue.createElementVNode, EV = window.Vue.openBlock, LV = window.Vue.createElementBlock, TV = ["lang", "dir"], AV = /* @__PURE__ */ Oi("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ Oi("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ Oi("div", { class: "toolbar" })
  ])
], -1), DV = ["lang", "dir"];
function PV(e, t, n, s, o, a) {
  return EV(), LV("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    AV,
    Oi("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, DV)
  ], 8, TV);
}
const BV = /* @__PURE__ */ ge(VV, [["render", PV]]);
function Cu() {
  return mw.loader.using("mw.cx3.ve");
}
const FV = window.Vuex.useStore, NV = () => {
  const e = FV();
  return (t, n) => x(void 0, null, function* () {
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
        const a = Lh.convertSegmentedContentToPageSections(
          s.content,
          !0
          // resolve references
        );
        s.updateSections(a), o();
      }, 0);
    });
  });
}, MV = window.Vuex.useStore, Rf = () => {
  const e = MV();
  return (t, n, s, o = null) => x(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      s
    );
    if (a && a.content)
      return;
    const r = yield ds.fetchPageContent(
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
}, fl = window.Vue.computed, UV = window.Vuex.useStore, pt = () => {
  const e = UV(), { sectionSuggestion: t } = De(), { currentTranslation: n } = Ot(), {
    sourceLanguageURLParameter: s,
    pageURLParameter: o,
    targetLanguageURLParameter: a
  } = D(), r = fl(
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
}, rr = () => {
  const { currentSourcePage: e } = pt(), t = NV(), n = Rf(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = D(), u = (c, g) => x(void 0, null, function* () {
    c() || (yield n(
      o.value,
      a.value,
      r.value,
      l.value
    ), qn || (yield t(
      o.value,
      r.value
    ))), g();
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
}, IV = window.Vuex.useStore, Zs = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: s,
    isQuickTutorialForced: o
  } = D(), a = IV(), r = tt(), l = () => {
    const c = r.currentRoute.value.name !== "sx-quick-tutorial" && (o() || !a.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return r.getRoutes().find((g) => g.name === c);
  }, u = () => {
    const i = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), c = K.getCurrentWikiLanguageCode();
    if (!i || t.value === c)
      return !1;
    const g = s.value ? { section: s.value } : {}, p = K.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      g
    );
    return location.href = p + "#" + l().path, !0;
  }, d = () => {
    location.href = K.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      s.value ? { sourcesection: s.value } : {}
    );
  };
  return () => {
    if (K.setCXToken(
      e.value,
      t.value,
      n.value
    ), qn) {
      d();
      return;
    }
    if (u())
      return;
    const c = l();
    r.push({ name: c.name });
  };
}, ap = window.Vue.computed, RV = window.Vue.ref, zV = window.Vue.watchEffect, wl = /* @__PURE__ */ new Map(), OV = (e, t) => x(void 0, null, function* () {
  return (yield me.fetchArticleSections(
    e,
    t
  )).sections.filter(
    (o) => o.level === "2"
  )[0].byteoffset;
}), HV = (e, t) => {
  const n = `${e}:${t}`;
  if (wl.has(n))
    return wl.get(n);
  const s = OV(e, t);
  return wl.set(n, s), s;
}, zf = () => {
  const { currentSourcePage: e } = pt(), { sectionSuggestion: t } = De(), { sectionURLParameter: n } = D(), s = RV(null);
  zV(() => x(void 0, null, function* () {
    var r;
    if (t.value && n.value)
      s.value = t.value.getSectionSize(n.value);
    else if (t.value) {
      const { missingSections: l } = t.value;
      s.value = Object.keys(l).reduce(
        (u, d) => u + t.value.getSectionSize(d),
        0
      );
    } else if (e.value && !qn) {
      const l = e.value.language, u = e.value.title;
      s.value = yield HV(l, u);
    } else
      s.value = ((r = e.value) == null ? void 0 : r.articleSize) || null;
  }));
  const o = ap(() => s.value ? !t.value && qn ? Mh(s.value) : Uh(s.value) : ut.unknown);
  return { isQuickTranslation: ap(() => o.value === ut.stub || o.value === ut.easy), difficulty: o, sizeInBytes: s };
}, bu = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: s
  } = D(), o = bt(), { difficulty: a } = zf();
  return {
    logDashboardTranslationStartEvent: () => {
      const l = {
        event_type: "dashboard_translation_start",
        event_source: Af.value,
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
}, ku = () => {
  const e = bt(), { currentTranslation: t } = Ot();
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
}, jV = window.Vue.ref, qV = () => {
  const e = tt(), { logDashboardTranslationStartEvent: t } = bu(), n = ku(), s = Zs(), { sectionURLParameter: o } = D(), { targetPageExists: a } = bn(), { selectPageSectionByTitle: r } = rr(), l = () => x(void 0, null, function* () {
    yield r(o.value), e.push({ name: "sx-content-comparator" });
  }), u = jV(!1), { currentTranslation: d } = Ot();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !qn ? u.value = !0 : (n(), s()) : o.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), s());
    },
    translationConfirmationDialogOn: u
  };
};
const GV = window.Vue.resolveDirective, ip = window.Vue.createElementVNode, rp = window.Vue.withDirectives, XV = window.Vue.unref, WV = window.Vue.withCtx, KV = window.Vue.openBlock, YV = window.Vue.createBlock, QV = {
  href: "",
  target: "_blank"
}, JV = window.Codex.CdxDialog, ZV = {
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
    const n = e, s = t, o = (d) => s("update:modelValue", d), a = he(), r = {
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
      const c = GV("i18n");
      return KV(), YV(XV(JV), {
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
        default: WV(() => [
          rp(ip("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          rp(ip("a", QV, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
}, eE = () => {
  const {
    sectionURLParameter: e,
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s
  } = D(), o = sr();
  return () => x(void 0, null, function* () {
    const a = yield o(
      t.value,
      n.value,
      s.value
    );
    return a instanceof en ? a.sourceSections.includes(e.value) : !1;
  });
};
const _e = window.Vue.unref, tE = window.Vue.resolveDirective, Lo = window.Vue.createElementVNode, lp = window.Vue.withDirectives, To = window.Vue.openBlock, vl = window.Vue.createElementBlock, _l = window.Vue.createCommentVNode, wt = window.Vue.createVNode, At = window.Vue.withCtx, Sl = window.Vue.toDisplayString, yl = window.Vue.createTextVNode, nE = window.Vue.withModifiers, cp = window.Vue.createBlock, sE = window.Vue.Fragment, oE = { class: "sx-translation-confirmer-body pb-4" }, aE = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, iE = ["innerHTML"], rE = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, lE = ["href"], cE = ["innerHTML"], xl = window.Vue.computed, Cl = window.Vue.ref, uE = window.Vue.watchEffect, dE = window.Vuex.useStore, bl = window.Codex.CdxButton, gE = window.Codex.CdxIcon, pE = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = tt(), s = dE(), { sectionSuggestion: o } = De(), { targetLanguageAutonym: a } = Ae(s), { sectionURLParameter: r, clearSectionURLParameter: l } = D(), { logDashboardTranslationStartEvent: u } = bu(), d = Zs(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: c } = qV(), g = Cl(!1), p = Cl(null), m = () => x(this, null, function* () {
      let te = !0;
      try {
        te = yield xt.checkUnreviewedTranslations();
      } catch (z) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          z
        );
      }
      te !== !0 && (g.value = !0, p.value = te.targetUrl);
    }), h = () => x(this, null, function* () {
      yield m(), !g.value && (u(), d());
    }), f = () => x(this, null, function* () {
      yield m(), !g.value && i();
    }), w = t;
    uE(() => {
      c.value && (w("open-translation-confirmation-dialog"), c.value = !1);
    });
    const {
      actionInformationMessage: _,
      getActionButtonLabel: C,
      isProgressiveButton: S,
      targetArticlePath: b
    } = vV(), A = he(), y = xl(
      () => A.i18n(C(!!r.value))
    ), B = () => x(this, null, function* () {
      yield m(), !g.value && n.push({ name: "sx-section-selector" });
    }), V = xl(() => {
      var te, z;
      return r.value && !!((z = (te = o.value) == null ? void 0 : te.sourceSections) != null && z.length);
    }), { targetPageExists: E } = bn(), j = xl(() => !r.value && E.value && qn), se = eE(), ae = Cl(!1);
    return se().then((te) => {
      te || l(), ae.value = !0;
    }), (te, z) => {
      const J = tE("i18n");
      return To(), vl(sE, null, [
        Lo("section", oE, [
          _e(r) && ae.value ? (To(), vl("section", aE, [
            lp(Lo("h6", null, null, 512), [
              [J, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Lo("h5", {
              class: "ma-0",
              innerHTML: _e(r)
            }, null, 8, iE)
          ])) : _e(E) && !_e(r) ? (To(), vl("section", rE, [
            wt(_e(M), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: At(() => [
                lp(wt(_e(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [J, [_e(a)], "cx-sx-existing-translation-status"]
                ]),
                wt(_e(k), { shrink: "" }, {
                  default: At(() => [
                    Lo("a", {
                      href: _e(b),
                      target: "_blank"
                    }, [
                      wt(_e(gE), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: _e(tr)
                      }, null, 8, ["icon"])
                    ], 8, lE)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            wt(_e(M), { class: "ma-0" }, {
              default: At(() => [
                wt(_e(k), null, {
                  default: At(() => [
                    Lo("span", { innerHTML: _e(_) }, null, 8, cE)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : _l("", !0),
          wt(_e(M), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: At(() => [
              V.value ? (To(), cp(_e(k), {
                key: 0,
                shrink: ""
              }, {
                default: At(() => [
                  wt(_e(bl), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: nE(B, ["stop"])
                  }, {
                    default: At(() => [
                      yl(Sl(te.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : _l("", !0),
              j.value ? (To(), cp(_e(k), {
                key: 1,
                shrink: ""
              }, {
                default: At(() => [
                  wt(_e(bl), {
                    size: "large",
                    onClick: h
                  }, {
                    default: At(() => [
                      yl(Sl(te.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : _l("", !0),
              wt(_e(k), { shrink: "" }, {
                default: At(() => [
                  wt(_e(bl), {
                    weight: "primary",
                    size: "large",
                    action: _e(S) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: At(() => [
                      yl(Sl(y.value), 1)
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
        wt(ZV, {
          modelValue: g.value,
          "onUpdate:modelValue": z[0] || (z[0] = (oe) => g.value = oe),
          "target-url": p.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const kl = window.Vue.unref, mE = window.Vue.openBlock, hE = window.Vue.createBlock, fE = window.Vue.computed, Of = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = wa(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: s
    } = D(), { currentLanguageTitleGroup: o } = bn(), a = fE(
      () => {
        var d;
        return ((d = o.value) == null ? void 0 : d.titles.map((i) => i.lang)) || [];
      }
    ), r = Ry(), l = (d) => r(d, s.value), u = (d) => r(n.value, d);
    return (d, i) => (mE(), hE(qi, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": kl(t),
      "selected-source-language": kl(n),
      "selected-target-language": kl(s),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, wE = (e) => {
  const o = e / 5 / 15;
  return Math.ceil(o);
};
const Be = window.Vue.unref, $l = window.Vue.toDisplayString, An = window.Vue.createElementVNode, Xt = window.Vue.createVNode, Es = window.Vue.withCtx, vE = window.Vue.resolveDirective, _E = window.Vue.withDirectives, SE = window.Vue.normalizeClass, up = window.Vue.openBlock, yE = window.Vue.createElementBlock, xE = window.Vue.createCommentVNode, CE = window.Vue.createBlock, bE = ["textContent"], kE = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, $E = ["textContent"], VE = { class: "pe-3" }, EE = ["textContent"], LE = window.Codex.CdxButton, Ao = window.Codex.CdxIcon, Dn = window.Vue.computed, TE = window.Vuex.useStore, AE = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = TE(), { currentSourcePage: n } = pt(), { sectionSuggestion: s } = De(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l
    } = D(), u = Dn(() => t.state.suggestions.favorites || []), d = Dn(
      () => u.value.some(
        (B) => r.value === B.title && o.value === B.sourceLanguage && a.value === B.targetLanguage
      )
    ), { markFavoriteSuggestion: i, removeFavoriteSuggestion: c } = xu(), g = () => i(
      r.value,
      o.value,
      a.value
    ), p = () => c(
      new js({
        title: r.value,
        sourceLanguage: o.value,
        targetLanguage: a.value
      })
    ), m = Dn(
      () => d.value ? Gh : Xh
    ), h = Dn(
      () => d.value ? p : g
    ), f = Dn(
      () => K.getPageUrl(o.value || "", r.value || "")
    ), w = Dn(
      () => {
        var B;
        return (((B = n.value) == null ? void 0 : B.langLinksCount) || 0) + 1;
      }
    ), _ = (B) => {
      const V = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let E = 0; E < V.length; E++)
        if (B >= V[E].value)
          return (B / V[E].value).toFixed(1).replace(/\.0$/, "") + V[E].suffix;
      return B.toString();
    }, C = Dn(() => {
      var V;
      const B = Object.values(((V = n.value) == null ? void 0 : V.pageviews) || {}).reduce(
        (E, j) => E + j,
        0
      );
      return _(B);
    }), { isQuickTranslation: S, sizeInBytes: b } = zf(), A = he(), y = Dn(() => {
      if (!s.value && !n.value || !b.value)
        return "";
      const B = wE(b.value), V = B >= 60 ? B / 60 : 0, E = Math.round(V * 2) / 2;
      if (!s.value && qn)
        return A.i18n(
          "cx-sx-translation-confirmer-translation-time-whole-article",
          E,
          B
        );
      if (s.value) {
        if (l.value)
          return A.i18n(
            "cx-sx-translation-confirmer-translation-time-single-section",
            E,
            B
          );
      } else
        return A.i18n(
          "cx-sx-translation-confirmer-translation-time-lead-section",
          E,
          B
        );
      return A.i18n(
        "cx-sx-translation-confirmer-translation-time-sections",
        E,
        B,
        Object.keys(s.value.missingSections).length
      );
    });
    return (B, V) => {
      const E = vE("i18n");
      return up(), CE(Be(M), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: Es(() => [
          Xt(Be(k), null, {
            default: Es(() => [
              Xt(Be(M), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: Es(() => [
                  Xt(Be(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: Es(() => [
                      An("h5", {
                        class: "ma-0 me-1",
                        textContent: $l(Be(r))
                      }, null, 8, bE),
                      Xt(Be(Ao), {
                        size: "x-small",
                        icon: Be(tr)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Xt(Be(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Es(() => [
                      Xt(Be(LE), {
                        class: "px-0",
                        weight: "quiet",
                        action: d.value ? "progressive" : "default",
                        "aria-label": B.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: Es(() => [
                          Xt(Be(Ao), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              An("div", kE, [
                An("div", null, [
                  An("span", null, [
                    Xt(Be(Ao), {
                      icon: Be(Wh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    An("span", {
                      class: "pe-3",
                      textContent: $l(w.value)
                    }, null, 8, $E)
                  ]),
                  An("span", null, [
                    Xt(Be(Ao), {
                      icon: Be(ay),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    _E(An("span", VE, null, 512), [
                      [E, [C.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                y.value ? (up(), yE("span", {
                  key: 0,
                  class: SE(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Be(S)
                  }])
                }, [
                  Xt(Be(Ao), {
                    icon: Be(ry),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  An("span", {
                    textContent: $l(y.value)
                  }, null, 8, EE)
                ], 2)) : xE("", !0)
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
const DE = window.Vue.resolveDirective, es = window.Vue.createElementVNode, oi = window.Vue.withDirectives, PE = window.Vue.toDisplayString, BE = window.Vue.createTextVNode, Vl = window.Vue.unref, El = window.Vue.withCtx, Ll = window.Vue.openBlock, Tl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const FE = { class: "pa-4" }, NE = { class: "flex pt-2" }, ME = window.Codex.CdxButton, UE = window.Vue.ref, IE = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, s = () => n("update:modelValue", !1), o = Zs(), a = ku(), r = UE(!1), { currentTranslation: l } = Ot(), u = () => x(this, null, function* () {
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
      const c = DE("i18n");
      return Ll(), Tl(Vl(Ct), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: s
      }, {
        footer: El(() => [
          es("div", NE, [
            r.value ? (Ll(), Tl(Vl(dt), { key: 1 })) : (Ll(), Tl(Vl(ME), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: El(() => [
                BE(PE(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: El(() => [
          es("div", FE, [
            oi(es("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            oi(es("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            es("p", null, [
              oi(es("strong", null, null, 512), [
                [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            oi(es("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, RE = window.Vuex.useStore;
let ai = [];
const $u = () => {
  const e = RE();
  return (t, n) => {
    const s = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || ai.includes(s) ? Promise.resolve() : (ai.push(s), ds.fetchLanguageTitles(t, n).then((o) => {
      ai = ai.filter(
        (a) => a !== s
      ), o && e.commit("mediawiki/addLanguageTitleGroup", o);
    }));
  };
}, zE = window.Vue.ref, Ls = zE(null), Hf = () => {
  const e = () => x(void 0, null, function* () {
    var n, s;
    Ls.value || (yield er.fetchCXServerToken().then((o) => {
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
const dp = window.Vue.resolveDirective, ii = window.Vue.createElementVNode, gp = window.Vue.withDirectives, Pn = window.Vue.unref, ri = window.Vue.withCtx, dn = window.Vue.createVNode, Al = window.Vue.openBlock, pp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const OE = window.Vue.createBlock, HE = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, jE = { class: "mb-0" }, qE = { class: "sx-translation-confirmer__article-image flex justify-center" }, GE = ["src"], XE = { class: "ma-3" }, mp = window.Vue.computed, WE = window.Vue.inject, KE = window.Vue.onBeforeUnmount, YE = window.Vue.ref, QE = window.Vuex.useStore, JE = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = QE(), { currentSourcePage: n } = pt(), { previousRoute: s } = Ae(t), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: u
    } = D(), d = WE("breakpoints"), i = mp(() => d.value.nextBreakpoint), c = mp(
      () => {
        var C;
        return (C = n.value) == null ? void 0 : C.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: g } = Js(), p = $u();
    g("draft"), p(o.value, r.value), Cu(), Hf()(), Qh()(a.value);
    const f = tt(), w = () => {
      const C = ["dashboard", "sx-article-search"];
      !s.value || !C.includes(s.value) ? f.push({ name: "dashboard" }) : f.push({ name: s.value });
    };
    KE(() => {
      const C = f.currentRoute.value.name;
      (C === "dashboard" || C === "sx-article-search") && u();
    });
    const _ = YE(!1);
    return (C, S) => {
      const b = dp("i18n"), A = dp("i18n-html");
      return Al(), pp("section", HE, [
        dn(Pn(M), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ri(() => [
            dn(Pn(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ri(() => [
                gp(ii("h5", jE, null, 512), [
                  [b, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            dn(Pn(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ri(() => [
                dn(Pn(Xe), {
                  class: "pa-0",
                  type: "icon",
                  icon: Pn(Wi),
                  "icon-size": 20,
                  onClick: w
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ii("div", qE, [
          c.value ? (Al(), pp("img", {
            key: 0,
            src: c.value
          }, null, 8, GE)) : (Al(), OE(Pn(et), {
            key: 1,
            size: "120",
            icon: Pn(dh),
            "icon-color": C.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        dn(AE),
        dn(Of),
        dn(pE, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (y) => _.value = !0)
        }),
        dn(Pn(M), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: ri(() => [
            ii("p", XE, [
              gp(ii("small", null, null, 512), [
                [A, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        dn(IE, {
          modelValue: _.value,
          "onUpdate:modelValue": S[1] || (S[1] = (y) => _.value = y)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const ZE = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: JE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, e4 = window.Vue.resolveComponent, t4 = window.Vue.createVNode, n4 = window.Vue.normalizeClass, s4 = window.Vue.openBlock, o4 = window.Vue.createElementBlock;
function a4(e, t, n, s, o, a) {
  const r = e4("sx-translation-confirmer");
  return s4(), o4("main", {
    class: n4(["sx-translation-confirmer-view", a.classes])
  }, [
    t4(r)
  ], 2);
}
const i4 = /* @__PURE__ */ ge(ZE, [["render", a4]]);
const r4 = window.Vue.toDisplayString, hp = window.Vue.unref, l4 = window.Vue.createVNode, c4 = window.Vue.createTextVNode, u4 = window.Vue.createElementVNode, d4 = window.Vue.openBlock, g4 = window.Vue.createElementBlock, p4 = { class: "sx-section-selector-view-article-item" }, m4 = ["href"], h4 = window.Codex.CdxIcon, fp = {
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
    return (t, n) => (d4(), g4("span", p4, [
      u4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        c4(r4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        l4(hp(h4), {
          size: "x-small",
          icon: hp(tr)
        }, null, 8, ["icon"])
      ], 8, m4)
    ]));
  }
};
const f4 = window.Vue.resolveDirective, li = window.Vue.createElementVNode, Dl = window.Vue.withDirectives, ts = window.Vue.unref, w4 = window.Vue.toDisplayString, ci = window.Vue.withCtx, Do = window.Vue.createVNode, v4 = window.Vue.openBlock, _4 = window.Vue.createElementBlock, S4 = { class: "sx-section-selector__header pa-4" }, y4 = { class: "sx-section-selector__header-text ma-0" }, x4 = ["textContent"], C4 = { class: "pt-0 ma-0" }, b4 = { class: "ma-0" }, k4 = window.Codex.CdxButton, $4 = window.Codex.CdxIcon, V4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = De();
    return (n, s) => {
      const o = f4("i18n");
      return v4(), _4("div", S4, [
        Do(ts(M), { class: "ma-0 pb-3" }, {
          default: ci(() => [
            Do(ts(k), null, {
              default: ci(() => {
                var a;
                return [
                  Dl(li("h6", y4, null, 512), [
                    [o, void 0, "cx-sx-section-selector-title"]
                  ]),
                  li("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: w4((a = ts(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, x4)
                ];
              }),
              _: 1
            }),
            Do(ts(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: ci(() => [
                Do(ts(k4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: s[0] || (s[0] = (a) => n.$emit("close"))
                }, {
                  default: ci(() => [
                    Do(ts($4), { icon: ts(Qs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Dl(li("h4", C4, null, 512), [
          [o, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        Dl(li("p", b4, null, 512), [
          [o, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, E4 = window.Vue.renderList, L4 = window.Vue.Fragment, Pl = window.Vue.openBlock, wp = window.Vue.createElementBlock, T4 = window.Vue.renderSlot, ui = window.Vue.unref, vp = window.Vue.createVNode, _p = window.Vue.withCtx, A4 = window.Vue.createBlock, D4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, P4 = window.Codex.CdxButton, B4 = window.Codex.CdxIcon, jf = {
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
    return (t, n) => (Pl(), wp("ul", D4, [
      (Pl(!0), wp(L4, null, E4(e.sections, (s) => (Pl(), A4(ui(M), {
        key: s.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: _p(() => [
          vp(ui(P4), {
            weight: "quiet",
            class: "col justify-start items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (o) => t.$emit("select-section", s.sourceTitle)
          }, {
            default: _p(() => [
              T4(t.$slots, "default", {
                targetSection: s.targetTitle,
                sourceSection: s.sourceTitle,
                isEasy: s.isEasy
              }),
              vp(ui(B4), {
                icon: ui(Sa),
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
}, F4 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const N4 = window.Vue.resolveDirective, di = window.Vue.createElementVNode, gi = window.Vue.withDirectives, Dt = window.Vue.unref, pi = window.Vue.openBlock, Bl = window.Vue.createBlock, M4 = window.Vue.createCommentVNode, Ts = window.Vue.withCtx, Po = window.Vue.createVNode, U4 = window.Vue.toDisplayString, I4 = window.Vue.createTextVNode, R4 = window.Vue.createElementBlock, z4 = { class: "sx-section-selector__missing-sections py-2" }, O4 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, H4 = ["lang", "dir", "innerHTML"], Fl = window.Vue.computed, j4 = window.Codex.CdxButton, q4 = window.Codex.CdxInfoChip, G4 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = De(), { targetLanguageURLParameter: n } = D(), s = Fl(() => R.getAutonym(n.value)), o = Fl(
      () => {
        var r;
        return Object.keys(((r = t.value) == null ? void 0 : r.missingSections) || {}).length === 0;
      }
    ), a = Fl(() => {
      var r;
      return (r = t.value) != null && r.orderedMissingSections ? t.value.orderedMissingSections.map((l) => Ye(ue({}, l), {
        isEasy: Ih(
          t.value.getSectionSize(l.sourceTitle)
        )
      })) : [];
    });
    return (r, l) => {
      const u = N4("i18n");
      return pi(), R4("section", z4, [
        gi(di("h4", O4, null, 512), [
          [u, [
            s.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (pi(), Bl(Dt(M), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Ts(() => [
            Po(Dt(k), {
              class: "py-6 justify-center",
              innerHTML: Dt(F4)
            }, null, 8, ["innerHTML"]),
            Po(Dt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Ts(() => [
                gi(di("h6", null, null, 512), [
                  [u, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Po(Dt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Ts(() => [
                gi(di("p", null, null, 512), [
                  [u, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Po(Dt(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Ts(() => [
                Po(Dt(j4), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: l[1] || (l[1] = (d) => r.$emit("close"))
                }, {
                  default: Ts(() => [
                    I4(U4(r.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (pi(), Bl(jf, {
          key: 0,
          sections: a.value,
          onSelectSection: l[0] || (l[0] = (d) => r.$emit("select-section", d))
        }, {
          default: Ts(({ sourceSection: d, isEasy: i }) => {
            var c, g;
            return [
              di("h5", {
                class: "ma-0",
                lang: (c = Dt(t)) == null ? void 0 : c.sourceLanguage,
                dir: Dt(R.getDir)((g = Dt(t)) == null ? void 0 : g.sourceLanguage),
                innerHTML: d
              }, null, 8, H4),
              i ? gi((pi(), Bl(Dt(q4), {
                key: 0,
                class: "sx-section-selector__easy-section-badge"
              }, null, 512)), [
                [u, void 0, "cx-sx-section-selector-easy-section-badge"]
              ]) : M4("", !0)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const X4 = window.Vue.resolveDirective, mi = window.Vue.createElementVNode, W4 = window.Vue.withDirectives, ns = window.Vue.unref, K4 = window.Vue.withCtx, Y4 = window.Vue.createVNode, Q4 = window.Vue.openBlock, J4 = window.Vue.createElementBlock, Z4 = { class: "sx-section-selector__present-sections py-2" }, e3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, t3 = { class: "sx-section-selector__present-section-button-content" }, n3 = ["lang", "dir", "innerHTML"], s3 = ["lang", "dir", "innerHTML"], o3 = window.Vue.computed, Sp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = De(), { targetLanguageURLParameter: n } = D(), s = o3(() => R.getAutonym(n.value));
    return (o, a) => {
      var l;
      const r = X4("i18n");
      return Q4(), J4("section", Z4, [
        W4(mi("h4", e3, null, 512), [
          [r, [
            s.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        Y4(jf, {
          sections: ((l = ns(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[0] || (a[0] = (u) => o.$emit("select-section", u))
        }, {
          default: K4(({ sourceSection: u, targetSection: d }) => {
            var i, c, g, p;
            return [
              mi("div", t3, [
                mi("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = ns(t)) == null ? void 0 : i.sourceLanguage,
                  dir: ns(R.getDir)((c = ns(t)) == null ? void 0 : c.sourceLanguage),
                  innerHTML: u
                }, null, 8, n3),
                mi("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = ns(t)) == null ? void 0 : g.targetLanguage,
                  dir: ns(R.getDir)((p = ns(t)) == null ? void 0 : p.targetLanguage),
                  innerHTML: d
                }, null, 8, s3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Ue = window.Vue.createVNode, Nl = window.Vue.openBlock, yp = window.Vue.createBlock, xp = window.Vue.createCommentVNode, a3 = window.Vue.resolveDirective, Bn = window.Vue.createElementVNode, Bo = window.Vue.withDirectives, ot = window.Vue.unref, gn = window.Vue.withCtx, i3 = window.Vue.normalizeClass, Cp = window.Vue.toDisplayString, bp = window.Vue.createTextVNode, r3 = window.Vue.createElementBlock, l3 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, c3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, u3 = { class: "sx-section-selector__additional-consideration-title" }, d3 = { href: "#" }, g3 = { class: "sx-section-selector__additional-consideration-title" }, p3 = { href: "#" }, Fo = window.Vue.computed, m3 = window.Vue.inject, h3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = m3("breakpoints"), n = Fo(() => t.value.desktopAndUp), { sectionSuggestion: s } = De(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = D(), u = Fo(() => R.getAutonym(o.value)), d = Fo(() => R.getAutonym(a.value)), i = Fo(
      () => {
        var C;
        return K.getPageUrl(o.value, (C = s.value) == null ? void 0 : C.sourceTitle);
      }
    ), c = Fo(
      () => {
        var C;
        return K.getPageUrl(a.value, (C = s.value) == null ? void 0 : C.targetTitle);
      }
    ), g = tt(), p = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = Ot(), h = Zs(), f = ku(), { selectPageSectionByTitle: w } = rr(), _ = (C) => {
      l(C), m.value ? (f(), h()) : (w(C), g.push({ name: "sx-content-comparator" }));
    };
    return (C, S) => {
      const b = a3("i18n");
      return Nl(), r3("section", l3, [
        Ue(V4, { onClose: p }),
        Ue(Of),
        Ue(ot(M), {
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
                Ue(G4, {
                  onSelectSection: _,
                  onClose: p
                }),
                n.value ? xp("", !0) : (Nl(), yp(Sp, {
                  key: 0,
                  onSelectSection: _
                })),
                Bn("section", {
                  class: i3(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Bo(Bn("h4", c3, null, 512), [
                    [b, [
                      d.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Ue(ot(M), {
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
                          Ue(fp, {
                            path: i.value,
                            autonym: u.value
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
                          Ue(fp, {
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
                Ue(ot(M), {
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
                        Bn("h6", u3, [
                          Ue(ot(et), {
                            icon: ot(O0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          bp(" " + Cp(C.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Bo(Bn("p", null, null, 512), [
                          [b, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Bo(Bn("a", d3, null, 512), [
                          [b, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
                        Bn("h6", g3, [
                          Ue(ot(et), {
                            icon: ot(z0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          bp(" " + Cp(C.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Bo(Bn("p", null, null, 512), [
                          [b, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Bo(Bn("a", p3, null, 512), [
                          [b, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
            n.value ? (Nl(), yp(ot(k), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: gn(() => [
                Ue(Sp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: _
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
}, f3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: h3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, w3 = window.Vue.resolveComponent, v3 = window.Vue.createVNode, _3 = window.Vue.normalizeClass, S3 = window.Vue.openBlock, y3 = window.Vue.createElementBlock;
function x3(e, t, n, s, o, a) {
  const r = w3("sx-section-selector");
  return S3(), y3("main", {
    class: _3(["sx-section-selector-view", a.classes])
  }, [
    v3(r)
  ], 2);
}
const C3 = /* @__PURE__ */ ge(f3, [["render", x3]]), hi = window.Vue.computed, b3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = D(), n = hi(
    () => R.getAutonym(e.value)
  ), s = hi(
    () => R.getAutonym(t.value)
  ), { target: o, PUBLISHING_TARGETS: a } = zt(), r = hi(
    () => o.value === a.EXPAND
  ), l = he();
  return hi(() => {
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
const kp = window.Vue.unref, k3 = window.Vue.createVNode, $3 = window.Vue.openBlock, V3 = window.Vue.createElementBlock, E3 = { class: "sx-content-comparator__content-type-selector" }, L3 = window.Vue.watchEffect, T3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = (r) => s("update:selection", r), a = b3();
    return L3(() => {
      a.value.map((l) => l.value).includes(n.selection) || o(a.value[0].value);
    }), (r, l) => ($3(), V3("div", E3, [
      k3(kp(ma), {
        items: kp(a),
        active: e.selection,
        onSelect: o
      }, null, 8, ["items", "active"])
    ]));
  }
}, No = window.Vue.computed, A3 = window.Vuex.useStore, ne = () => {
  const e = A3(), { currentSourcePage: t, currentTargetPageTitle: n } = pt(), { currentMTProvider: s } = Ae(e), { sectionURLParameter: o } = D(), a = No(() => {
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
  ), u = No(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        s.value
      );
    }
  ), d = No(
    () => a.value.isLeadSection ? a.value.title : n.value
  );
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: d
  };
}, Mo = window.Vue.computed, Vu = () => {
  const { currentTargetPage: e } = pt(), { sectionSuggestion: t } = De(), { sectionURLParameter: n } = D(), s = Mo(
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
  ), { sourceSection: r } = ne(), l = Mo(() => {
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
const fi = window.Vue.createVNode, D3 = window.Vue.createElementVNode, Fn = window.Vue.unref, wi = window.Vue.withCtx, Ml = window.Vue.openBlock, Ul = window.Vue.createBlock;
window.Vue.createCommentVNode;
const P3 = window.Vue.normalizeClass, B3 = ["lang", "dir", "innerHTML"], $p = window.Vue.ref, vi = window.Vue.computed, F3 = window.Vue.onMounted, N3 = {
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
    const n = e, s = t, o = $p(!1), { sectionSuggestion: a } = De(), { sectionURLParameter: r } = D(), l = vi(
      () => (c.value || "").replace(/ /g, "_")
    ), u = (h) => s("update:contentTypeSelection", h), { activeSectionTargetTitle: d, targetSectionAnchor: i } = Vu(), c = vi(
      () => {
        var h;
        return (((h = a.value) == null ? void 0 : h.sourceSections) || []).find(
          (f) => f === r.value
        );
      }
    ), g = vi(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: c.value,
            path: `${K.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${l.value}`,
            lang: a.value.sourceLanguage,
            dir: R.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: p.value,
            lang: a.value.targetLanguage,
            dir: R.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: d.value,
            path: `${p.value}#${i.value}`
          };
      }
    }), p = vi(
      () => K.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), m = $p(null);
    return F3(() => {
      new IntersectionObserver(
        ([f]) => {
          o.value = f.intersectionRect.height < f.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(m.value.$el);
    }), (h, f) => (Ml(), Ul(Fn(M), {
      ref_key: "contentHeader",
      ref: m,
      class: P3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.value }]),
      direction: "column",
      align: "stretch",
      reverse: o.value
    }, {
      default: wi(() => [
        fi(T3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        fi(Fn(M), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: wi(() => [
            fi(Fn(k), null, {
              default: wi(() => [
                D3("h3", {
                  lang: g.value.lang,
                  dir: g.value.dir,
                  class: "ma-0 pa-0",
                  innerHTML: g.value.title
                }, null, 8, B3)
              ]),
              _: 1
            }),
            fi(Fn(k), { shrink: "" }, {
              default: wi(() => [
                o.value ? (Ml(), Ul(Fn(Xe), {
                  key: 0,
                  icon: Fn(Xi),
                  progressive: "",
                  label: h.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: f[0] || (f[0] = (w) => h.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Ml(), Ul(Fn(Xe), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: Fn(uh),
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
}, _i = window.Vue.unref, Vp = window.Vue.createVNode, M3 = window.Vue.openBlock, U3 = window.Vue.createElementBlock, I3 = { class: "sx-content-comparator__header-navigation flex items-center" }, R3 = window.Vue.computed, z3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = D(), s = R3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: o } = rr(), a = () => {
      const l = (s.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      o(u);
    }, r = () => {
      const l = (s.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      o(u);
    };
    return (l, u) => (M3(), U3("div", I3, [
      Vp(_i(Xe), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: _i(M0),
        onClick: a
      }, null, 8, ["icon"]),
      Vp(_i(Xe), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: _i(N0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const Ep = window.Vue.toDisplayString, be = window.Vue.unref, O3 = window.Vue.resolveDirective, Il = window.Vue.withDirectives, As = window.Vue.openBlock, Si = window.Vue.createElementBlock, H3 = window.Vue.createCommentVNode, j3 = window.Vue.createTextVNode, Lp = window.Vue.createElementVNode, q3 = window.Vue.normalizeClass, Rl = window.Vue.withCtx, zl = window.Vue.createVNode, Tp = window.Vue.createBlock, G3 = { class: "sx-content-comparator-header__mapped-section" }, X3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, W3 = { key: 0 }, K3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Y3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Q3 = window.Vue.computed, J3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = D(), { activeSectionTargetTitle: n } = Vu(), s = he(), { target: o, PUBLISHING_TARGETS: a, setTarget: r } = zt(), l = Q3(
      () => s.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        R.getAutonym(t.value)
      )
    );
    return (u, d) => {
      const i = O3("i18n");
      return As(), Si("div", G3, [
        zl(be(M), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Rl(() => [
            zl(be(k), { grow: "" }, {
              default: Rl(() => [
                Lp("h6", X3, [
                  j3(Ep(l.value) + " ", 1),
                  be(o) === be(a).NEW_SECTION ? Il((As(), Si("span", W3, null, 512)), [
                    [i, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : H3("", !0)
                ]),
                Lp("h6", {
                  class: q3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": be(o) === be(a).NEW_SECTION
                  }])
                }, Ep(be(n)), 3)
              ]),
              _: 1
            }),
            zl(be(k), { shrink: "" }, {
              default: Rl(() => [
                be(o) === be(a).EXPAND ? (As(), Tp(be(Xe), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: be(ch),
                  type: "icon",
                  onClick: d[0] || (d[0] = (c) => be(r)(be(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (As(), Tp(be(Xe), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: be(q0),
                  type: "icon",
                  onClick: d[1] || (d[1] = (c) => be(r)(be(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        be(o) === be(a).EXPAND ? Il((As(), Si("p", K3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : Il((As(), Si("p", Y3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const Fe = window.Vue.unref, Ds = window.Vue.createVNode, Z3 = window.Vue.toDisplayString, Sn = window.Vue.createElementVNode, Ol = window.Vue.withCtx, e5 = window.Vue.resolveDirective, Ap = window.Vue.withDirectives, Hl = window.Vue.openBlock, Dp = window.Vue.createBlock, Pp = window.Vue.createCommentVNode, t5 = window.Vue.createElementBlock, n5 = { class: "sx-content-comparator__header pa-4" }, s5 = { class: "row my-1 py-2 mx-0 gap-6" }, o5 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, a5 = { class: "sx-content-comparator-header__titles shrink" }, i5 = ["lang", "dir"], r5 = ["lang", "dir", "innerHTML"], l5 = { class: "py-2 mb-1" }, c5 = /* @__PURE__ */ Sn("br", null, null, -1), yi = window.Vue.computed, u5 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = D(), { sourceSection: n } = ne(), { sectionSuggestion: s, isCurrentSectionPresent: o } = De(), a = yi(
      () => {
        var d;
        return (d = s.value) == null ? void 0 : d.missingSections.hasOwnProperty(t.value);
      }
    ), r = yi(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), l = yi(() => [
      ...Object.keys(s.value.missingSections),
      ...Object.keys(s.value.presentSections)
    ]), u = yi(
      () => {
        var d;
        return (((d = s.value) == null ? void 0 : d.sourceSections) || []).find(
          (i) => i === t.value
        );
      }
    );
    return (d, i) => {
      const c = e5("i18n");
      return Hl(), t5("div", n5, [
        Ds(Fe(Xe), {
          class: "py-2 pa-0",
          icon: Fe(U0),
          label: d.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (g) => d.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Sn("div", s5, [
          Sn("div", o5, [
            Sn("div", a5, [
              Sn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Fe(s).sourceLanguage,
                dir: Fe(R.getDir)(Fe(s).sourceLanguage)
              }, Z3(Fe(s).sourceTitle), 9, i5),
              Sn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Fe(s).sourceLanguage,
                dir: Fe(R.getDir)(Fe(s).sourceLanguage),
                innerHTML: u.value
              }, null, 8, r5)
            ]),
            Ds(z3, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          Sn("div", l5, [
            Ds(Fe(Xe), {
              class: "sx-content-comparator-header__translation-button",
              icon: Fe(Xi),
              progressive: "",
              label: d.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (g) => d.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (Hl(), Dp(Fe(M), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Ol(() => [
            Ds(Fe(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Ol(() => [
                Ds(Fe(et), { icon: Fe(H0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Ds(Fe(k), { class: "ma-0" }, {
              default: Ol(() => [
                Ap(Sn("strong", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                c5,
                Ap(Sn("span", null, null, 512), [
                  [c, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Pp("", !0),
        Fe(o) ? (Hl(), Dp(J3, { key: 1 })) : Pp("", !0)
      ]);
    };
  }
};
const Bp = window.Vue.toDisplayString, d5 = window.Vue.createElementVNode, Fp = window.Vue.openBlock, Np = window.Vue.createElementBlock, g5 = window.Vue.createCommentVNode, p5 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, m5 = ["textContent"], h5 = ["textContent"], qf = {
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
    return (t, n) => (Fp(), Np("section", p5, [
      d5("h5", {
        textContent: Bp(e.placeholderTitle)
      }, null, 8, m5),
      e.placeholderSubtitle ? (Fp(), Np("p", {
        key: 0,
        textContent: Bp(e.placeholderSubtitle)
      }, null, 8, h5)) : g5("", !0)
    ]));
  }
}, f5 = (e, t, n) => {
  const s = t.indexOf(e);
  return t.slice(s + 1).map((a) => n[a]).filter(Boolean)[0] || null;
}, w5 = ({
  sourceSectionTitle: e,
  sourceSectionTitles: t,
  targetSectionTitles: n,
  presentSectionMappings: s,
  targetAppendixSectionTitles: o
}) => {
  const a = f5(
    e,
    t,
    s
  );
  return a !== null ? a : n.find(
    (l) => o.includes(l)
  ) || null;
}, jl = window.Vue.computed, v5 = window.Vue.createApp, _5 = window.Vuex.useStore, S5 = () => {
  const e = _5(), { sectionSuggestion: t } = De(), { currentTargetPage: n } = pt(), { sectionURLParameter: s } = D(), o = he(), a = () => v5(
    qf,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, r = jl(() => {
    const { appendixSectionTitles: d } = e.state.suggestions;
    return d[t.value.targetLanguage] || [];
  }), l = jl(
    () => w5({
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
  return jl(() => {
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
const ql = window.Vue.createVNode, at = window.Vue.unref, Ps = window.Vue.openBlock, Mp = window.Vue.createBlock, Up = window.Vue.createCommentVNode, xi = window.Vue.createElementVNode, Gl = window.Vue.Fragment, Ci = window.Vue.createElementBlock, y5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, x5 = { class: "sx-content-comparator__source-content" }, C5 = ["lang", "dir", "innerHTML"], b5 = ["lang", "dir", "innerHTML"], k5 = ["innerHTML"], $5 = window.Vue.ref, V5 = window.Vue.computed, Ip = window.Vue.watch, E5 = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = zt(), n = tt(), s = $5("source_section"), { logDashboardTranslationStartEvent: o } = bu(), a = Zs(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      o(), a();
    }, {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: d
    } = D(), { sourceSectionContent: i, targetSectionContent: c } = Vu(), g = S5(), { sectionSuggestion: p, isCurrentSectionPresent: m } = De(), h = V5(() => p.value.targetTitle), f = Rf();
    return Ip(
      h,
      () => f(
        d.value,
        u.value,
        h.value
      ),
      { immediate: !0 }
    ), Ip(m, t, { immediate: !0 }), (w, _) => (Ps(), Ci("section", y5, [
      ql(u5, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      ql(N3, {
        "content-type-selection": s.value,
        "onUpdate:contentTypeSelection": _[0] || (_[0] = (C) => s.value = C),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      xi("section", x5, [
        s.value === "source_section" ? (Ps(), Ci(Gl, { key: 0 }, [
          at(i) ? Up("", !0) : (Ps(), Mp(at(dt), { key: 0 })),
          xi("section", {
            lang: at(u),
            dir: at(R.getDir)(at(u)),
            class: "pt-2 px-4",
            innerHTML: at(i)
          }, null, 8, C5)
        ], 64)) : s.value === "target_article" ? (Ps(), Ci(Gl, { key: 1 }, [
          at(g) ? Up("", !0) : (Ps(), Mp(at(dt), { key: 0 })),
          xi("article", {
            lang: at(d),
            dir: at(R.getDir)(at(d)),
            class: "px-4",
            innerHTML: at(g)
          }, null, 8, b5)
        ], 64)) : (Ps(), Ci(Gl, { key: 2 }, [
          xi("section", {
            class: "pa-4",
            innerHTML: at(c)
          }, null, 8, k5),
          ql(qf, {
            class: "sx-content-comparator__new-section-placeholder--present",
            "placeholder-title": w.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
            "placeholder-subtitle": w.$i18n(
              "cx-sx-content-comparator-present-section-placeholder-subtitle"
            )
          }, null, 8, ["placeholder-title", "placeholder-subtitle"])
        ], 64))
      ])
    ]));
  }
}, L5 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: E5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, T5 = window.Vue.resolveComponent, A5 = window.Vue.createVNode, D5 = window.Vue.normalizeClass, P5 = window.Vue.openBlock, B5 = window.Vue.createElementBlock;
function F5(e, t, n, s, o, a) {
  const r = T5("sx-content-comparator");
  return P5(), B5("main", {
    class: D5(["sx-content-comparator-view", a.classes])
  }, [
    A5(r)
  ], 2);
}
const N5 = /* @__PURE__ */ ge(L5, [["render", F5]]);
const M5 = window.Vue.resolveDirective, Uo = window.Vue.createElementVNode, Rp = window.Vue.withDirectives, bi = window.Vue.unref, Xl = window.Vue.createVNode, zp = window.Vue.toDisplayString, Op = window.Vue.createTextVNode, Io = window.Vue.withCtx, U5 = window.Vue.openBlock, I5 = window.Vue.createBlock, R5 = { class: "mw-ui-dialog__header px-4 py-3" }, z5 = { class: "mw-ui-dialog__header-title" }, O5 = { class: "pa-4" }, H5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Hp = window.Codex.CdxButton, j5 = {
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
      const u = M5("i18n");
      return U5(), I5(bi(Ct), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: Io(() => [
          Uo("div", R5, [
            Rp(Uo("span", z5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Io(() => [
          Uo("div", H5, [
            Xl(bi(Hp), {
              weight: "quiet",
              onClick: o
            }, {
              default: Io(() => [
                Op(zp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Xl(bi(Hp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Io(() => [
                Op(zp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Io(() => [
          Xl(bi(Gi)),
          Uo("div", O5, [
            Rp(Uo("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, q5 = (e, t, n) => {
  const s = document.createElement("div");
  s.innerHTML = e;
  const o = Array.from(s.children).find(
    (a) => ls(a)
  );
  return o && fh(o) ? xt.parseTemplateWikitext(
    mh(o),
    n,
    t
  ) : Promise.resolve(null);
}, Gf = (e, t, n) => {
  let s = document.createElement("div");
  s.innerHTML = e, s.firstElementChild.getAttribute("rel") === "cx:Section" && (s = s.firstElementChild);
  const o = Array.from(s.children).find(
    (a) => ls(a)
  );
  return o ? xt.parseTemplateWikitext(
    mh(o),
    n,
    t
  ) : Promise.resolve(null);
}, G5 = window.Vuex.useStore, Eu = () => {
  const e = G5(), { sourceSection: t } = ne(), { getCurrentTitleByLanguage: n } = bn(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = D(), a = Hf(), r = (i, c, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[c] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof ct ? p.blockTemplateProposedTranslations[c] = g : p instanceof Hn && p.addProposedTranslation(c, g);
  }, l = (i, c) => x(void 0, null, function* () {
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
  }), u = (i, c) => x(void 0, null, function* () {
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
    ), m = (yield q5(
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
}, X5 = window.Vuex.useStore, W5 = () => {
  const { sourceSection: e } = ne(), t = X5(), { translateTranslationUnitById: n } = Eu();
  return (s) => {
    t.commit("application/setCurrentMTProvider", s);
    const o = e.value.selectedTranslationUnitId;
    n(o, s);
  };
};
function K5(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((s) => {
    s.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const Y5 = window.Vue.resolveDirective, lt = window.Vue.createElementVNode, ki = window.Vue.withDirectives, He = window.Vue.unref, Wl = window.Vue.createVNode, pn = window.Vue.withCtx, Q5 = window.Vue.renderList, J5 = window.Vue.Fragment, $i = window.Vue.openBlock, Z5 = window.Vue.createElementBlock, eL = window.Vue.toDisplayString, Kl = window.Vue.createBlock, jp = window.Vue.createCommentVNode, tL = { class: "mw-ui-dialog__header pa-4" }, nL = { class: "row ma-0 py-2" }, sL = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, oL = { class: "mb-0" }, aL = { class: "col shrink justify-center" }, iL = { class: "pb-2 mb-0" }, rL = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, lL = ["dir", "lang", "innerHTML"], cL = ["textContent"], uL = ["innerHTML"], dL = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, gL = /* @__PURE__ */ lt("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), pL = ["innerHTML"], Yl = window.Vue.computed, mL = window.Vuex.useStore, hL = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, s = re.EMPTY_TEXT_PROVIDER_KEY, o = re.ORIGINAL_TEXT_PROVIDER_KEY, a = mL(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: u
    } = ne(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: i
    } = D(), c = Yl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        i.value
      )
    ), g = Yl(() => {
      const S = [o, s];
      return c.value.filter(
        (b) => !S.includes(b)
      );
    }), p = Yl(
      () => l.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = W5(), h = (S) => {
      m(S), w();
    }, f = re.getMTProviderLabel, w = () => n("update:active", !1), _ = he(), C = K5(
      _.i18n("cx-tools-mt-noservices")
    );
    return (S, b) => {
      const A = Y5("i18n");
      return e.active ? ($i(), Kl(He(Ct), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: pn(() => [
          lt("div", tL, [
            lt("div", nL, [
              lt("div", sL, [
                ki(lt("h4", oL, null, 512), [
                  [A, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              lt("div", aL, [
                Wl(He(Xe), {
                  type: "icon",
                  icon: He(Wi),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            ki(lt("h6", iL, null, 512), [
              [A, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: pn(() => [
          Wl(He(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: b[0] || (b[0] = (y) => h(He(o)))
          }, {
            header: pn(() => [
              ki(lt("h5", rL, null, 512), [
                [A, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: pn(() => [
              lt("p", {
                dir: He(R.getDir)(He(d)),
                lang: He(d),
                innerHTML: p.value[He(o)]
              }, null, 8, lL)
            ]),
            _: 1
          }),
          ($i(!0), Z5(J5, null, Q5(g.value, (y) => ($i(), Kl(He(Ze), {
            key: y,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (B) => h(y)
          }, {
            header: pn(() => [
              lt("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: eL(He(f)(y))
              }, null, 8, cL)
            ]),
            default: pn(() => [
              lt("p", {
                innerHTML: p.value[y]
              }, null, 8, uL)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Wl(He(Ze), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: b[1] || (b[1] = (y) => h(He(s)))
          }, {
            header: pn(() => [
              ki(lt("h5", dL, null, 512), [
                [A, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: pn(() => [
              gL
            ]),
            _: 1
          }),
          g.value.length ? jp("", !0) : ($i(), Kl(He(Ze), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: pn(() => [
              lt("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: He(C)
              }, null, 8, pL)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : jp("", !0);
    };
  }
}, fL = window.Vuex.useStore, eo = () => {
  const { sourceSection: e } = ne(), t = fL(), { translateTranslationUnitById: n } = Eu(), { currentMTProvider: s } = Ae(t), o = (l) => x(void 0, null, function* () {
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
const qp = window.Vue.toDisplayString, Ql = window.Vue.createElementVNode, Jl = window.Vue.unref, wL = window.Vue.createVNode, vL = window.Vue.normalizeClass, _L = window.Vue.withCtx, SL = window.Vue.openBlock, yL = window.Vue.createBlock, xL = ["href"], CL = ["textContent"], bL = ["textContent"], Bs = window.Vue.computed, Gp = "sx-sentence-selector__section-title", kL = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ne(), { currentSourcePage: s } = pt(), { sourceLanguageURLParameter: o } = D(), a = Bs(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.title;
    }), r = Bs(
      () => {
        var p;
        return ((p = t.value) == null ? void 0 : p.title) || a.value;
      }
    ), l = Bs(
      () => K.getPageUrl(o.value, a.value)
    ), u = Bs(
      () => {
        var p;
        return !!((p = t.value) != null && p.translatedTitle);
      }
    ), d = Bs(
      () => u.value ? "translated" : "selected"
    ), i = Bs(() => {
      const p = [Gp];
      return n.value && p.push(`${Gp}--${d.value}`), p;
    }), { selectTranslationUnitById: c } = eo(), g = () => c(0);
    return (p, m) => (SL(), yL(Jl(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: _L(() => [
        Ql("a", {
          href: l.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Ql("strong", {
            textContent: qp(a.value)
          }, null, 8, CL),
          wL(Jl(et), {
            icon: Jl(uh),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, xL),
        Ql("h2", {
          class: vL(["pa-0 ma-0", i.value]),
          onClick: g,
          textContent: qp(r.value)
        }, null, 10, bL)
      ]),
      _: 1
    }));
  }
};
const Wt = window.Vue.unref, Ro = window.Vue.createVNode, Vi = window.Vue.withCtx, Xp = window.Vue.toDisplayString, Wp = window.Vue.createTextVNode, $L = window.Vue.openBlock, VL = window.Vue.createBlock, EL = window.Vue.computed, Zl = window.Codex.CdxButton, Kp = window.Codex.CdxIcon, Xf = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: s } = ne(), o = EL(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => ($L(), VL(Wt(M), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Vi(() => [
        Ro(Wt(Zl), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Wt(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: Vi(() => [
            Ro(Wt(Kp), {
              class: "me-1",
              icon: Wt(hu)
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
          default: Vi(() => [
            Wp(Xp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Ro(Wt(Zl), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: o.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: Vi(() => [
            Wp(Xp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Ro(Wt(Kp), {
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
const ss = window.Vue.unref, LL = window.Vue.toDisplayString, zo = window.Vue.createVNode, Ei = window.Vue.withCtx, TL = window.Vue.openBlock, AL = window.Vue.createBlock, ec = window.Vue.computed, DL = window.Vuex.useStore, PL = window.Codex.CdxButton, BL = window.Codex.CdxIcon, FL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = DL(), n = ec(() => t.state.application.currentMTProvider), s = he(), o = ec(() => ({
      [re.ORIGINAL_TEXT_PROVIDER_KEY]: s.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [re.EMPTY_TEXT_PROVIDER_KEY]: s.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = ec(
      () => o.value[n.value] || s.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        re.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (TL(), AL(ss(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: Ei(() => [
        zo(ss(M), { class: "ma-0 ps-5 pb-4" }, {
          default: Ei(() => [
            zo(ss(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: LL(a.value)
            }, null, 8, ["textContent"]),
            zo(ss(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: Ei(() => [
                zo(ss(PL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: Ei(() => [
                    zo(ss(BL), {
                      class: "pa-0",
                      icon: ss(mu)
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
const Pt = window.Vue.unref, Nn = window.Vue.createVNode, NL = window.Vue.resolveDirective, Yp = window.Vue.createElementVNode, ML = window.Vue.withDirectives, Qp = window.Vue.toDisplayString, Jp = window.Vue.createTextVNode, Oo = window.Vue.withCtx, UL = window.Vue.openBlock, IL = window.Vue.createElementBlock, RL = { class: "mt-retry-body pb-5" }, zL = { class: "retry-body__message" }, Zp = window.Codex.CdxButton, tc = window.Codex.CdxIcon, OL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const s = NL("i18n");
      return UL(), IL("div", RL, [
        Yp("div", zL, [
          Nn(Pt(tc), {
            class: "me-2",
            icon: Pt(oy)
          }, null, 8, ["icon"]),
          ML(Yp("span", null, null, 512), [
            [s, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        Nn(Pt(M), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Oo(() => [
            Nn(Pt(k), { cols: "6" }, {
              default: Oo(() => [
                Nn(Pt(Zp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (o) => t.$emit("retry-translation"))
                }, {
                  default: Oo(() => [
                    Nn(Pt(tc), {
                      class: "me-1",
                      icon: Pt(Kh)
                    }, null, 8, ["icon"]),
                    Jp(" " + Qp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Nn(Pt(k), { cols: "6" }, {
              default: Oo(() => [
                Nn(Pt(Zp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (o) => t.$emit("configure-options"))
                }, {
                  default: Oo(() => [
                    Nn(Pt(tc), {
                      class: "me-1",
                      icon: Pt(fy)
                    }, null, 8, ["icon"]),
                    Jp(" " + Qp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Fs = window.Vue.createVNode, it = window.Vue.unref, Ho = window.Vue.openBlock, HL = window.Vue.createElementBlock, jL = window.Vue.createCommentVNode, Li = window.Vue.createBlock, qL = window.Vue.normalizeClass, GL = window.Vue.normalizeStyle, jo = window.Vue.withCtx, XL = window.Vue.toDisplayString, WL = window.Vue.createTextVNode, KL = window.Vue.normalizeProps, YL = window.Vue.guardReactiveProps, QL = ["lang", "dir", "innerHTML"], nc = window.Vue.ref, JL = window.Vue.onMounted, ZL = window.Vue.onBeforeUnmount, sc = window.Vue.computed, eT = window.Vue.nextTick, tT = window.Vuex.useStore, nT = window.Codex.CdxButton, sT = window.Codex.CdxIcon, oT = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = nc(0), n = nc(null), s = nc(null), o = tT(), { currentMTProvider: a } = Ae(o), { targetLanguageURLParameter: r } = D(), { sourceSection: l, currentProposedTranslation: u } = ne(), d = sc(
      () => {
        var m, h;
        return (h = o.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = sc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = sc(
      () => !!u.value || a.value === re.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + s.value.$el.clientHeight;
    };
    JL(() => x(this, null, function* () {
      yield eT(), g(), p.observe(n.value.$el), p.observe(s.value.$el);
    })), ZL(() => {
      p.unobserve(n.value.$el), p.unobserve(s.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (Ho(), Li(it(Ze), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: jo(() => [
        Fs(it(M), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: jo(() => [
            Fs(FL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            Fs(it(k), {
              class: qL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && d.value
              }]),
              style: GL(c.value ? i.value : null)
            }, {
              default: jo(() => [
                c.value ? (Ho(), HL("section", {
                  key: 0,
                  lang: it(r),
                  dir: it(R.getDir)(it(r)),
                  innerHTML: it(u)
                }, null, 8, QL)) : d.value ? (Ho(), Li(it(dt), { key: 1 })) : (Ho(), Li(OL, {
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
              default: jo(() => [
                c.value || d.value ? (Ho(), Li(it(nT), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", it(u)))
                }, {
                  default: jo(() => [
                    Fs(it(sT), {
                      class: "me-1",
                      icon: it(pu)
                    }, null, 8, ["icon"]),
                    WL(" " + XL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : jL("", !0),
                Fs(Xf, KL(YL(m.$attrs)), null, 16)
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
}, aT = window.Vue.computed, iT = (e) => aT(() => {
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
const rT = window.Vue.unref, lT = window.Vue.normalizeClass, cT = window.Vue.openBlock, uT = window.Vue.createElementBlock, dT = ["innerHTML"], gT = window.Vue.onMounted, pT = window.Vue.ref, mT = window.Vue.computed, hT = {
  __name: "SubSection",
  props: {
    subSection: {
      type: ct,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = pT(null), a = iT(n.subSection);
    gT(() => {
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
    const { selectTranslationUnitById: r } = eo(), l = (d) => {
      if (d.selected) {
        s("bounce-translation");
        return;
      }
      r(d.id);
    }, u = mT(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, i) => (cT(), uT("div", {
      ref_key: "subSectionRoot",
      ref: o,
      class: lT(["sx-sentence-selector__subsection", u.value]),
      innerHTML: rT(a)
    }, null, 10, dT));
  }
};
const em = window.Vue.unref, tm = window.Vue.createVNode, nm = window.Vue.normalizeStyle, fT = window.Vue.openBlock, wT = window.Vue.createElementBlock, sm = window.Vue.computed, Wf = {
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
    const t = e, n = sm(() => ({ "--size": t.size })), s = sm(
      () => !t.isTemplateAdapted || t.percentage === 0 ? G0 : Mc
    );
    return (o, a) => (fT(), wT("div", {
      class: "block-template-status-indicator",
      style: nm(n.value)
    }, [
      tm(em(c1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      tm(em(et), {
        icon: s.value,
        size: e.size / 2,
        style: nm({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const Mn = window.Vue.unref, Ti = window.Vue.createVNode, oc = window.Vue.withCtx, vT = window.Vue.openBlock, _T = window.Vue.createBlock, ST = window.Vue.computed, om = window.Codex.CdxButton, am = window.Codex.CdxIcon, Kf = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = ne(), s = ST(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (o, a) => (vT(), _T(Mn(M), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: oc(() => [
        Ti(Mn(om), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Mn(n),
          "aria-label": o.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => o.$emit("select-previous-segment"))
        }, {
          default: oc(() => [
            Ti(Mn(am), { icon: Mn(hu) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        Ti(Mn(om), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: s.value,
          "aria-label": o.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => o.$emit("select-next-segment"))
        }, {
          default: oc(() => [
            Ti(Mn(am), { icon: Mn(Sa) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, qo = window.Vue.openBlock, Ai = window.Vue.createBlock;
window.Vue.createCommentVNode;
const mn = window.Vue.unref, Ns = window.Vue.withCtx, Go = window.Vue.createVNode, ac = window.Vue.toDisplayString, ic = window.Vue.createElementVNode, yT = window.Vue.renderList, xT = window.Vue.Fragment, CT = window.Vue.createElementBlock, bT = { class: "pa-4" }, kT = ["textContent"], $T = ["textContent"], VT = window.Vuex.useStore, Di = window.Vue.computed, ET = {
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
    const t = e, { targetLanguageAutonym: n } = Ae(VT()), s = Di(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), o = he(), a = Di(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? s.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", o.i18n(u);
    }), r = Di(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : s.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", o.i18n(u);
    }), l = Di(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: o.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: W0,
          color: St.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: o.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: Wi,
          color: St.gray500
        });
      else if (s.value < 100)
        u.push({
          text: o.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Mc,
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
          icon: Mc,
          color: St.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: o.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: Xi,
        color: St.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: o.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: A0,
        color: St.gray500
      }), u;
    });
    return (u, d) => (qo(), Ai(mn(Ct), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: d[0] || (d[0] = (i) => u.$emit("update:active", i))
    }, {
      header: Ns(() => [
        Go(mn(M), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Ns(() => [
            Go(mn(k), { shrink: "" }, {
              default: Ns(() => [
                e.targetTemplateExists ? (qo(), Ai(Wf, {
                  key: 0,
                  percentage: s.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (qo(), Ai(mn(et), {
                  key: 1,
                  icon: mn(D0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Ns(() => [
        ic("div", bT, [
          ic("h3", {
            textContent: ac(a.value)
          }, null, 8, kT),
          ic("p", {
            class: "mt-6 text-small",
            textContent: ac(r.value)
          }, null, 8, $T),
          (qo(!0), CT(xT, null, yT(l.value, (i, c) => (qo(), Ai(mn(M), {
            key: c,
            align: "start",
            class: "mt-4"
          }, {
            default: Ns(() => [
              Go(mn(k), { shrink: "" }, {
                default: Ns(() => [
                  Go(mn(et), {
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
const Te = window.Vue.unref, je = window.Vue.createVNode, Kt = window.Vue.withCtx, rc = window.Vue.toDisplayString, im = window.Vue.createTextVNode, LT = window.Vue.resolveDirective, rm = window.Vue.withDirectives, lm = window.Vue.createElementVNode, TT = window.Vue.normalizeClass, Ms = window.Vue.openBlock, cm = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Pi = window.Vue.createBlock, um = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const dm = window.Vue.mergeProps, AT = { class: "block-template-adaptation-card__container pa-4" }, DT = ["textContent"], PT = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, qe = window.Vue.computed, BT = window.Vue.ref, FT = window.Vuex.useStore, gm = window.Codex.CdxButton, pm = window.Codex.CdxIcon, NT = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = FT(), { targetLanguageAutonym: n, currentMTProvider: s } = Ae(t), {
      selectedContentTranslationUnit: o,
      currentProposedTranslation: a
    } = ne(), r = qe(() => {
      var V;
      return (V = o.value) == null ? void 0 : V.isTranslated;
    }), l = qe(() => {
      var E;
      return ((E = o.value) == null ? void 0 : E.blockTemplateTranslatedContent) || a.value;
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
    ), i = he(), c = qe(
      // Strip HTML comments and return
      () => {
        var V, E;
        return ((E = (V = o.value) == null ? void 0 : V.sourceBlockTemplateName) == null ? void 0 : E.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = qe(
      () => {
        var V, E;
        return (E = (V = o.value) == null ? void 0 : V.blockTemplateAdaptationInfo) == null ? void 0 : E[s.value];
      }
    ), p = qe(
      () => {
        var V, E;
        return ((V = g.value) == null ? void 0 : V.adapted) || !!((E = g.value) != null && E.partial);
      }
    ), m = qe(() => g.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), h = qe(() => g.value ? p.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = qe(
      () => {
        var V;
        return Object.keys(((V = o.value) == null ? void 0 : V.sourceTemplateParams) || {}).length;
      }
    ), w = qe(() => {
      var E;
      const V = (E = o.value) == null ? void 0 : E.getTargetTemplateParamsByProvider(
        s.value
      );
      return Object.keys(V || {});
    }), _ = qe(() => w.value.length), C = qe(() => {
      const V = y.value;
      return f.value + V === 0 ? 100 : _.value / (f.value + V) * 100 || 0;
    }), S = BT(!1), b = () => {
      S.value = !0;
    }, A = (V) => V.filter((E) => !w.value.includes(E)), y = qe(() => {
      var E;
      const V = ((E = g.value) == null ? void 0 : E.mandatoryTargetParams) || [];
      return A(V).length;
    }), B = qe(() => {
      var E;
      const V = ((E = g.value) == null ? void 0 : E.optionalTargetParams) || [];
      return A(V).length;
    });
    return (V, E) => {
      const j = LT("i18n");
      return Ms(), Pi(Te(Ze), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Kt(() => [
          lm("div", AT, [
            je(Te(M), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Kt(() => [
                je(Te(k), { shrink: "" }, {
                  default: Kt(() => [
                    je(Te(pm), {
                      icon: Te(wy),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                je(Te(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Kt(() => [
                    im(rc(c.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u.value ? (Ms(), cm("div", {
              key: 0,
              class: TT(["pa-4 mb-4", m.value])
            }, [
              je(Te(M), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Kt(() => [
                  rm(je(Te(k), { tag: "h5" }, null, 512), [
                    [j, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  je(Te(k), { shrink: "" }, {
                    default: Kt(() => [
                      je(Wf, {
                        percentage: C.value,
                        size: 20,
                        "is-template-adapted": p.value,
                        "stroke-width": 2,
                        onClick: b
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              lm("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: rc(u.value)
              }, null, 8, DT),
              je(Te(gm), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: E[0] || (E[0] = (se) => V.$emit("edit-translation", l.value))
              }, {
                default: Kt(() => [
                  im(rc(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (Ms(), cm("div", PT, [
              je(Te(M), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Kt(() => [
                  rm(je(Te(k), { tag: "h5" }, null, 512), [
                    [j, [
                      Te(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  je(Te(k), { shrink: "" }, {
                    default: Kt(() => [
                      je(Te(gm), {
                        weight: "quiet",
                        "aria-label": V.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Kt(() => [
                          je(Te(pm), {
                            icon: Te(py),
                            onClick: b
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
            ])) : (Ms(), Pi(Te(dt), { key: 2 }))
          ]),
          r.value ? (Ms(), Pi(Kf, um(dm({ key: 1 }, V.$attrs)), null, 16)) : (Ms(), Pi(Xf, um(dm({ key: 0 }, V.$attrs)), null, 16)),
          je(ET, {
            active: S.value,
            "onUpdate:active": E[1] || (E[1] = (se) => S.value = se),
            "source-params-count": f.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": y.value,
            "optional-missing-params-count": B.value,
            "is-template-adapted": p.value,
            "target-template-exists": !!u.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const MT = window.Vue.unref, UT = window.Vue.createVNode, IT = window.Vue.openBlock, RT = window.Vue.createElementBlock, zT = { class: "translated-segment-card-header" }, OT = window.Vue.computed, HT = {
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
    const n = t, { isSectionTitleSelected: s } = ne(), o = he(), a = OT(() => [
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
    return (l, u) => (IT(), RT("div", zT, [
      UT(MT(ma), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const jT = window.Vue.useCssVars, Ie = window.Vue.createVNode, mm = window.Vue.resolveDirective, qT = window.Vue.createElementVNode, lc = window.Vue.withDirectives, ye = window.Vue.unref, GT = window.Vue.normalizeStyle, Bi = window.Vue.openBlock, hm = window.Vue.createElementBlock, XT = window.Vue.createCommentVNode, WT = window.Vue.normalizeClass, vt = window.Vue.withCtx, KT = window.Vue.toDisplayString, YT = window.Vue.createTextVNode, fm = window.Vue.createBlock, QT = window.Vue.normalizeProps, JT = window.Vue.guardReactiveProps, hn = window.Vue.computed, ZT = window.Vue.ref, eA = window.Vue.inject, tA = window.Vuex.useStore, nA = window.Codex.CdxButton, cc = window.Codex.CdxIcon, sA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    jT((_) => ({
      "4929555c": w.value
    }));
    const t = ZT("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: s,
      isSectionTitleSelected: o
    } = ne(), { targetLanguage: a } = Ae(tA()), r = hn(() => t.value === "sentence"), l = hn(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (C) => {
            var S;
            return C.id === ((S = s.value) == null ? void 0 : S.id);
          }
        )
      )
    ), u = hn(() => {
      var _;
      return o.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (_ = s.value) == null ? void 0 : _.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), d = eA("colors"), i = d.gray200, c = d.red600, g = hn(() => o.value ? n.value.translatedTitle : r.value ? s.value.translatedContent : l.value.translatedContent), p = hn(
      () => tn.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), m = hn(
      () => tn.getScoreStatus(p.value)
    ), h = hn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = hn(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), w = hn(
      () => f.value[m.value]
    );
    return (_, C) => {
      const S = mm("i18n"), b = mm("i18n-html");
      return Bi(), fm(ye(Ze), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: vt(() => [
          Ie(ye(M), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: vt(() => [
              Ie(HT, {
                selection: t.value,
                "onUpdate:selection": C[0] || (C[0] = (A) => t.value = A)
              }, null, 8, ["selection"]),
              Ie(ye(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: vt(() => [
                  Ie(ye(M), { class: "ma-0" }, {
                    default: vt(() => [
                      Ie(ye(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: vt(() => [
                          lc(qT("h5", null, null, 512), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? lc((Bi(), hm("p", {
                            key: 0,
                            style: GT({ color: ye(c) })
                          }, null, 4)), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : lc((Bi(), hm("p", {
                            key: 1,
                            class: WT(h.value)
                          }, null, 2)), [
                            [b, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Ie(ye(k), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: vt(() => [
                          Ie(ye(M), { class: "ma-0 ms-2" }, {
                            default: vt(() => [
                              Ie(ye(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: vt(() => [
                                  Ie(ye(cc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ye(Sy)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Ie(ye(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: vt(() => [
                                  Ie(ye(gh), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: w.value,
                                    background: ye(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Ie(ye(k), { shrink: "" }, {
                                default: vt(() => [
                                  Ie(ye(cc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: ye(vy)
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
                  r.value ? (Bi(), fm(ye(nA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: C[1] || (C[1] = (A) => _.$emit("edit-translation", g.value))
                  }, {
                    default: vt(() => [
                      Ie(ye(cc), {
                        class: "me-1",
                        icon: ye(pu)
                      }, null, 8, ["icon"]),
                      YT(" " + KT(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : XT("", !0)
                ]),
                _: 1
              }),
              Ie(ye(k), { class: "translated-segment-card__actions" }, {
                default: vt(() => [
                  Ie(Kf, QT(JT(_.$attrs)), null, 16)
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
}, oA = () => {
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
}, Yf = window.Vuex.useStore, aA = () => {
  const e = Yf(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = D();
  return () => x(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const s = mw.config.get("wgContentTranslationEnableMT");
    let o;
    s ? o = yield er.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : o = new re(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", o);
  });
}, iA = () => {
  const e = Yf(), { currentMTProvider: t } = Ae(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: s
  } = D(), o = aA();
  return () => x(void 0, null, function* () {
    yield o();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, s.value);
    if (!t.value || !a.includes(t.value)) {
      const r = re.getStorageKey(
        n.value,
        s.value
      );
      let l = mw.storage.get(r);
      (!l || !a.includes(l)) && (l = a[0]), e.commit("application/setCurrentMTProvider", l);
    }
  });
}, rA = window.Vue.computed, lA = (e) => {
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
}, cA = () => {
  const { selectedContentTranslationUnit: e } = ne(), t = rA(
    () => e.value instanceof ct
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, s = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    s && lA(s);
  };
}, uA = (e, t) => {
  const { content: n, origin: s, baseSectionId: o, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (l) => !re.isUserMTProvider(l)
  );
  if (s !== "source" && s !== "user" && !r.includes(s))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!o || !a || e.sectionId !== `${o}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, dA = window.Vue.computed, Qf = () => {
  const { currentTranslation: e } = Ot(), { currentSourcePage: t } = pt();
  return dA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, gA = window.Vuex.useStore, Lu = () => {
  const e = gA(), { sourceSection: t, targetPageTitleForPublishing: n } = ne(), {
    pageURLParameter: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a
  } = D(), r = Qf(), { target: l, PUBLISHING_TARGETS: u } = zt();
  return () => {
    const d = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](o.value, a.value), c = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(c);
    g.forEach(
      (m) => uA(m, i)
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
}, pA = window.Vue.effectScope, mA = window.Vue.onScopeDispose, hA = (e) => {
  let t = 0, n, s;
  const o = () => {
    s && --t <= 0 && (s.stop(), n = s = null);
  };
  return (...a) => (t++, n || (s = pA(!0), n = s.run(() => e(...a))), mA(o), n);
}, fA = window.Vuex.useStore;
let uc;
const wA = () => {
  const e = fA(), t = Lu();
  let n = 1e3, s = 0;
  return uc = Su(() => t().then((a) => {
    a instanceof Gn ? (n *= s + 1, s++, setTimeout(uc, n)) : (s = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Xs)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), uc;
}, Jf = hA(wA), vA = window.Vuex.useStore, _A = () => {
  const e = vA(), t = Jf(), { currentMTProvider: n } = Ae(e), { sourceSection: s, currentProposedTranslation: o } = ne(), { selectNextTranslationUnit: a } = eo();
  return () => x(void 0, null, function* () {
    s.value.setTranslationForSelectedTranslationUnit(
      o.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, SA = window.Vuex.useStore, yA = () => {
  const e = SA(), t = Jf();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, xA = window.Vuex.useStore, CA = window.Vue.computed, Zf = () => {
  const e = xA(), { currentTranslation: t } = Ot(), { currentMTProvider: n } = Ae(e), { currentTargetPageTitle: s } = pt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = D(), u = bt(), d = CA(() => {
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
      const w = t.value.targetSectionTitle;
      w && (f.translation_target_section = w);
    } else
      s.value && (f.translation_target_title = s.value);
    return n.value && (f.translation_provider = re.getProviderForInstrumentation(n.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      const f = ue({
        event_type: "editor_open"
      }, d.value);
      return u(f);
    },
    logEditorCloseEvent: () => {
      const f = ue({
        event_type: "editor_close"
      }, d.value);
      return u(f);
    },
    logEditorCloseWarnEvent: () => u(ue({
      event_type: "editor_close_warn"
    }, d.value)),
    logEditorSegmentAddEvent: () => u(ue({
      event_type: "editor_segment_add"
    }, d.value)),
    logEditorSegmentSkipEvent: () => u(ue({
      event_type: "editor_segment_skip"
    }, d.value)),
    logEditorSegmentEditEvent: () => u(ue({
      event_type: "editor_segment_edit"
    }, d.value))
  };
}, bA = (e, t, n, s) => x(void 0, null, function* () {
  var l, u, d;
  const o = ((l = t.user) == null ? void 0 : l.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield Gf(
    o,
    n,
    s
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    o
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), kA = (e, t) => {
  t.segments.forEach((n) => {
    var o, a, r;
    const s = e.getSentenceById(n.id);
    if (s && (s.translatedContent = ((o = n.user) == null ? void 0 : o.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      s.addProposedTranslation(l, n.mt.innerHTML), s.mtProviderUsed = l;
    }
  });
}, $A = (e, t, n, s) => x(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return bA(e, t, n, s);
  kA(e, t);
}), VA = (e, t, n, s) => {
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
        const d = $A(
          l,
          u,
          t || e.title,
          n
        );
        o.push(d);
      }
  return Promise.all(o);
}, EA = { restoreCorporaDraft: VA }, LA = () => {
  const { currentSourcePage: e } = pt(), { sourceSection: t } = ne();
  return (n) => x(void 0, null, function* () {
    if (n.restored)
      return;
    const s = yield xt.fetchTranslationUnits(
      n.translationId
    );
    yield EA.restoreCorporaDraft(
      e.value,
      n.targetTitle,
      n.targetLanguage,
      s
    ), n.restored = !0;
    let o;
    n.isLeadSectionTranslation ? (t.value.originalTitle = n.sourceTitle, o = n.targetTitle) : o = n.targetSectionTitle, t.value.translatedTitle = o;
  });
};
let dc = null;
function TA() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((s) => t.includes(s));
}
function ew() {
  return dc === null && (dc = TA()), dc;
}
const tw = window.Vue.ref, gc = tw(!1), pc = tw(!1);
function wm() {
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
const ce = window.Vue.unref, _t = window.Vue.createVNode, Bt = window.Vue.withCtx, AA = window.Vue.resolveDirective, fn = window.Vue.createElementVNode, DA = window.Vue.withDirectives, Xo = window.Vue.toDisplayString, PA = window.Vue.createTextVNode, Yt = window.Vue.openBlock, Un = window.Vue.createBlock, vm = window.Vue.createCommentVNode, BA = window.Vue.renderList, FA = window.Vue.Fragment, _m = window.Vue.createElementBlock, NA = window.Vue.normalizeClass, MA = window.Vue.normalizeStyle, UA = { class: "sx-sentence-selector__header-title mb-0" }, IA = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, RA = { class: "sx-sentence-selector__section-contents px-4" }, In = window.Vue.computed, zA = window.Vue.nextTick, OA = window.Vue.onMounted, Wo = window.Vue.ref, Sm = window.Vue.watch, HA = window.Vuex.useStore, ym = window.Codex.CdxButton, jA = window.Codex.CdxIcon, xm = window.Codex.CdxMessage, qA = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Wo(!1), n = Wo(!1), s = Wo("100%"), o = HA(), { currentMTProvider: a, previousRoute: r } = Ae(o), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      pageURLParameter: d,
      sectionURLParameter: i
    } = D(), { resetPublishTarget: c, target: g } = zt(), p = sr();
    g.value || p(
      l.value,
      u.value,
      d.value
    ).then(() => c());
    const {
      sourceSection: m,
      selectedContentTranslationUnit: h,
      targetPageTitleForPublishing: f
    } = ne(), w = Wo({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), _ = In(
      () => Object.values(w.value).every(Boolean)
    ), C = In(
      () => {
        var G;
        return (G = m.value) == null ? void 0 : G.isSelectedTranslationUnitTranslated;
      }
    ), S = In(() => {
      var G;
      return (G = m.value) == null ? void 0 : G.subSections;
    }), b = In(
      () => {
        var G;
        return (G = m.value) == null ? void 0 : G.selectedTranslationUnitOriginalContent;
      }
    ), A = In(
      () => isNaN(s.value) ? s.value : `${s.value}px`
    ), {
      logEditorOpenEvent: y,
      logEditorCloseEvent: B,
      logEditorCloseWarnEvent: V,
      logEditorSegmentAddEvent: E,
      logEditorSegmentSkipEvent: j
    } = Zf(), se = () => {
      var oo;
      const G = N.currentRoute.value.meta.workflowStep, sn = N.getRoutes().find(
        (ao) => ao.name === r.value
      ), mt = ((oo = sn == null ? void 0 : sn.meta) == null ? void 0 : oo.workflowStep) || 0;
      return G > mt;
    }, ae = oA();
    iA()().then(() => {
      se() && y(), w.value.mtProviders = !0;
    });
    const z = cA(), { fetchTranslationsByStatus: J, translationsFetched: oe } = Js(), le = LA(), { currentTranslation: ke } = Ot(), { selectPageSectionByTitle: Ke, selectPageSectionByIndex: Pe } = rr(), Z = $u(), I = Ks();
    OA(() => x(this, null, function* () {
      if (!oe.value.draft) {
        const G = [
          // required to get current draft translation (if exists)
          J("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          Z(l.value, d.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          I(l.value, [d.value])
        ];
        yield Promise.all(G);
      }
      w.value.pageMetadata = !0, i.value ? yield Ke(i.value) : yield Pe(0), w.value.pageContent = !0, ke.value && (yield le(ke.value)), w.value.draftRestored = !0, Sm(
        _,
        () => x(this, null, function* () {
          _.value && (yield zA(), ae(), z());
        }),
        { immediate: !0 }
      ), s.value = window.innerHeight;
    })), Sm(h, z);
    const { selectNextTranslationUnit: F, selectPreviousTranslationUnit: U } = eo(), Y = () => (j(), F()), v = _A(), T = () => {
      E(), v();
    }, P = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, N = tt(), X = () => {
      const { autoSavePending: G } = o.state.application;
      if (G) {
        so.value = !0, V();
        return;
      }
      O();
    }, pe = yA(), { clearTranslationURLParameters: q } = D(), O = () => x(this, null, function* () {
      J("draft"), ke.value && (m.value.reset(), ke.value.restored = !1), B(), q(), pe(), yield N.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: ie,
      translateSelectedTranslationUnitForAllProviders: nt
    } = Eu(), $e = () => {
      no.value || (t.value = !0, nt());
    }, { getCurrentTitleByLanguage: xa } = bn(), ms = (G) => {
      N.push({
        name: "sx-editor",
        state: {
          content: G,
          originalContent: b.value,
          title: xa(
            u.value,
            l.value
          ),
          isInitialEdit: !C.value || null
        }
      });
    }, to = () => N.push({ name: "sx-publisher" }), lr = () => x(this, null, function* () {
      h.value ? yield ie(
        h.value.id,
        a.value
      ) : yield ie(0, a.value);
    }), no = In(
      () => h.value instanceof ct
    ), so = Wo(!1), {
      isPermissionWarningDismissed: cr,
      dismissPermissionWarning: ur,
      resetPermissionWarning: hs
    } = wm(), { isTitleErrorDismissed: fs, dismissTitleError: Ca, resetTitleError: L } = wm();
    se() && (hs(), L());
    const H = In(
      () => !ew() && !cr.value
    ), Ne = In(
      () => {
        var G;
        return !fs.value && ((G = m.value) == null ? void 0 : G.isLeadSection) && !mw.Title.newFromText(f.value);
      }
    );
    return (G, ze) => {
      const sn = AA("i18n");
      return Yt(), _m("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: MA(A.value)
      }, [
        _t(ce(M), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Bt(() => [
            _t(ce(k), { shrink: "" }, {
              default: Bt(() => [
                _t(ce(ym), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": G.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: X
                }, {
                  default: Bt(() => [
                    _t(ce(jA), { icon: ce(qh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            _t(ce(k), {
              grow: "",
              class: "px-1"
            }, {
              default: Bt(() => [
                DA(fn("h4", UA, null, 512), [
                  [sn, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            _t(ce(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: Bt(() => [
                _t(ce(ym), {
                  disabled: !(ce(m) && ce(m).isTranslated),
                  onClick: to
                }, {
                  default: Bt(() => [
                    PA(Xo(G.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _.value ? (Yt(), Un(ce(M), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Bt(() => [
            _t(ce(k), {
              dir: ce(R.getDir)(ce(l)),
              lang: ce(l),
              class: "sx-sentence-selector__section"
            }, {
              default: Bt(() => [
                H.value ? (Yt(), Un(ce(xm), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ce(ur)
                }, {
                  default: Bt(() => [
                    fn("p", null, Xo(G.$i18n("cx-publish-permission-warning")), 1),
                    fn("p", null, [
                      fn("strong", null, [
                        fn("a", IA, Xo(G.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : vm("", !0),
                Ne.value ? (Yt(), Un(ce(xm), {
                  key: 1,
                  type: "error",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: ce(Ca)
                }, {
                  default: Bt(() => [
                    fn("p", null, [
                      fn("strong", null, Xo(G.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    fn("p", null, Xo(G.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : vm("", !0),
                _t(kL),
                fn("div", RA, [
                  (Yt(!0), _m(FA, null, BA(S.value, (mt) => (Yt(), Un(hT, {
                    id: mt.id,
                    key: `sub-section-${mt.id}`,
                    "sub-section": mt,
                    onBounceTranslation: P
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !no.value && C.value ? (Yt(), Un(sA, {
              key: 0,
              onEditTranslation: ms,
              onSelectNextSegment: ce(F),
              onSelectPreviousSegment: ce(U)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : no.value ? (Yt(), Un(NT, {
              key: 2,
              onEditTranslation: ms,
              onApplyTranslation: T,
              onSkipTranslation: Y,
              onSelectPreviousSegment: ce(U),
              onSelectNextSegment: ce(F)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Yt(), Un(oT, {
              key: 1,
              class: NA({ "mb-0": !n.value }),
              onConfigureOptions: $e,
              onEditTranslation: ms,
              onApplyTranslation: T,
              onSkipTranslation: Y,
              onSelectPreviousSegment: ce(U),
              onRetryTranslation: lr
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Yt(), Un(ce(M), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Bt(() => [
            _t(ce(dt), { class: "mt-0" })
          ]),
          _: 1
        })),
        _t(hL, {
          active: t.value,
          "onUpdate:active": ze[0] || (ze[0] = (mt) => t.value = mt)
        }, null, 8, ["active"]),
        _t(j5, {
          modelValue: so.value,
          "onUpdate:modelValue": ze[1] || (ze[1] = (mt) => so.value = mt),
          onDiscardTranslation: O
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const GA = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: qA
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, XA = window.Vue.resolveComponent, WA = window.Vue.createVNode, KA = window.Vue.normalizeClass, YA = window.Vue.openBlock, QA = window.Vue.createElementBlock;
function JA(e, t, n, s, o, a) {
  const r = XA("sx-sentence-selector");
  return YA(), QA("main", {
    class: KA(["sx-sentence-selector-view", a.classes])
  }, [
    WA(r)
  ], 2);
}
const ZA = /* @__PURE__ */ ge(GA, [["render", JA]]), eD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, tD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const nD = window.Vue.resolveDirective, Fi = window.Vue.withDirectives, Ft = window.Vue.openBlock, wn = window.Vue.createElementBlock, Ni = window.Vue.createCommentVNode, Mi = window.Vue.Transition, os = window.Vue.withCtx, Us = window.Vue.createVNode, Ko = window.Vue.createElementVNode, Rn = window.Vue.unref, sD = window.Vue.renderList, oD = window.Vue.Fragment, aD = window.Vue.normalizeClass, Cm = window.Vue.createBlock, iD = window.Vue.toDisplayString, rD = window.Vue.createTextVNode, lD = { class: "sx-quick-tutorial" }, cD = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, uD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, dD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, gD = { class: "sx-quick-tutorial__illustration" }, pD = ["innerHTML"], mD = ["innerHTML"], hD = { class: "sx-quick-tutorial__step-indicator py-3" }, fD = ["onClick"], wD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, vD = {
  key: "secondary-point-1",
  class: "ma-0"
}, _D = {
  key: "secondary-point-2",
  class: "ma-0"
}, SD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, bm = window.Vue.ref, km = window.Codex.CdxButton, yD = window.Codex.CdxIcon, xD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = bm(2), n = bm(1), s = () => {
      n.value < t.value && n.value++;
    }, o = (r) => r === n.value, a = Zs();
    return (r, l) => {
      const u = nD("i18n");
      return Ft(), wn("section", lD, [
        Us(Rn(M), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: os(() => [
            Ko("section", cD, [
              Us(Mi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: os(() => [
                  o(1) ? Fi((Ft(), wn("h2", uD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : o(2) ? Fi((Ft(), wn("h2", dD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ni("", !0)
                ]),
                _: 1
              })
            ]),
            Ko("section", gD, [
              Us(Mi, { name: "mw-ui-animation-slide-start" }, {
                default: os(() => [
                  o(1) ? (Ft(), wn("div", {
                    key: "illustration-1",
                    innerHTML: Rn(tD)
                  }, null, 8, pD)) : o(2) ? (Ft(), wn("div", {
                    key: "illustration-2",
                    innerHTML: Rn(eD)
                  }, null, 8, mD)) : Ni("", !0)
                ]),
                _: 1
              })
            ]),
            Ko("div", hD, [
              (Ft(!0), wn(oD, null, sD(t.value, (d) => (Ft(), wn("span", {
                key: `dot-${d}`,
                class: aD(["dot mx-1", { "dot-active": o(d) }]),
                role: "button",
                onClick: (i) => n.value = d
              }, null, 10, fD))), 128))
            ]),
            Ko("section", wD, [
              Us(Mi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: os(() => [
                  o(1) ? Fi((Ft(), wn("h3", vD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : o(2) ? Fi((Ft(), wn("h3", _D, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ni("", !0)
                ]),
                _: 1
              })
            ]),
            Ko("div", SD, [
              Us(Mi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: os(() => [
                  o(1) ? (Ft(), Cm(Rn(km), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: s
                  }, {
                    default: os(() => [
                      Us(Rn(yD), { icon: Rn(Sa) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : o(2) ? (Ft(), Cm(Rn(km), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Rn(a)
                  }, {
                    default: os(() => [
                      rD(iD(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : Ni("", !0)
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
const CD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: xD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, bD = window.Vue.resolveComponent, kD = window.Vue.createVNode, $D = window.Vue.normalizeClass, VD = window.Vue.openBlock, ED = window.Vue.createElementBlock;
function LD(e, t, n, s, o, a) {
  const r = bD("sx-quick-tutorial");
  return VD(), ED("main", {
    class: $D(["sx-quick-tutorial-view", a.classes])
  }, [
    kD(r)
  ], 2);
}
const TD = /* @__PURE__ */ ge(CD, [["render", LD]]);
const AD = window.Vue.resolveDirective, $m = window.Vue.createElementVNode, DD = window.Vue.withDirectives, PD = window.Vue.unref, BD = window.Vue.withCtx, FD = window.Vue.createVNode, ND = window.Vue.openBlock, MD = window.Vue.createElementBlock, UD = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, ID = { class: "sx-editor__original-content-panel__header mb-2" }, RD = ["lang", "dir", "innerHTML"], Vm = window.Vue.ref, zD = window.Vue.onMounted, OD = {
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
        d.href = K.getPageUrl(l, d.title), d.target = "_blank";
    }, s = Vm(null), o = Vm(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(s.value, null).getPropertyValue("line-height")
    );
    return zD(() => {
      o.value = 2 * a(), n(s.value, t.language);
    }), (r, l) => {
      const u = AD("i18n");
      return ND(), MD("section", UD, [
        DD($m("h5", ID, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        FD(PD(t1), {
          "min-height": o.value,
          scroll: ""
        }, {
          default: BD(() => [
            $m("div", {
              ref_key: "originalContentRef",
              ref: s,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, RD)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, HD = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const jD = window.Vue.unref, Yo = window.Vue.createElementVNode, Em = window.Vue.resolveDirective, mc = window.Vue.withDirectives, qD = window.Vue.normalizeClass, GD = window.Vue.openBlock, XD = window.Vue.createElementBlock, WD = window.Vue.createCommentVNode, KD = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, YD = { class: "sx-editor__feedback-overlay-content px-4" }, QD = ["innerHTML"], JD = { class: "sx-editor__feedback-overlay-content__title" }, ZD = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, hc = window.Vue.computed, e6 = {
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
    const t = e, { targetLanguageURLParameter: n } = D(), s = hc(
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
      const u = Em("i18n"), d = Em("i18n-html");
      return e.showFeedback ? (GD(), XD("div", KD, [
        Yo("div", YD, [
          Yo("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: jD(HD)
          }, null, 8, QD),
          mc(Yo("h2", JD, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          mc(Yo("p", ZD, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          mc(Yo("p", {
            class: qD(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [s.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : WD("", !0);
    };
  }
}, t6 = window.Vuex.useStore, n6 = () => {
  const e = t6(), t = Lu(), { selectNextTranslationUnit: n } = eo(), {
    isSectionTitleSelected: s,
    sourceSection: o,
    selectedContentTranslationUnit: a
  } = ne(), { getCurrentTitleByLanguage: r } = bn(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: u
  } = D(), { currentMTProvider: d } = Ae(e);
  return (i) => x(void 0, null, function* () {
    if (!s.value) {
      const c = document.createElement("div");
      c.innerHTML = i, c.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = c.innerHTML;
    }
    a.value instanceof ct && (i = (yield Gf(
      i,
      r(u.value, l.value),
      u.value
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      d.value
    ), t(), n();
  });
};
const Qe = window.Vue.unref, fc = window.Vue.openBlock, wc = window.Vue.createBlock, Lm = window.Vue.createCommentVNode, Tm = window.Vue.createVNode, s6 = window.Vue.createElementVNode, o6 = window.Vue.withCtx, a6 = { class: "sx-editor__editing-surface-container grow" }, vc = window.Vue.ref, i6 = window.Vue.computed, r6 = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = vc(!1), s = tt(), o = () => n.value = !0, a = () => s.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: u, originalContent: d, title: i } = history.state, c = vc(null), g = vc(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = Zf(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = D(), { isSectionTitleSelected: w, sourceSection: _ } = ne(), C = i6(
      () => tn.calculateScore(
        c.value,
        u,
        f.value
      )
    ), S = n6(), b = (A) => x(this, null, function* () {
      c.value = A, g.value = !0;
      const y = new Promise((V) => setTimeout(V, 2e3));
      let B = Promise.resolve();
      r ? _.value.editedTranslation = A : B = S(A), C.value === 0 && l ? p() : C.value > 0 && m(), yield Promise.all([y, B]), g.value = !1, a();
    });
    return (A, y) => (fc(), wc(Qe(M), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: o6(() => [
        Qe(d) ? (fc(), wc(OD, {
          key: 0,
          language: Qe(h),
          dir: Qe(R.getDir)(Qe(h)),
          "original-content": Qe(d)
        }, null, 8, ["language", "dir", "original-content"])) : Lm("", !0),
        n.value ? Lm("", !0) : (fc(), wc(Qe(dt), { key: 1 })),
        s6("div", a6, [
          Tm(e6, {
            "edited-translation": c.value,
            "show-feedback": g.value,
            "proposed-translation": Qe(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Tm(BV, {
            content: Qe(u),
            language: Qe(f),
            dir: Qe(R.getDir)(Qe(f)),
            title: Qe(i),
            "use-text": !!Qe(w),
            onReady: o,
            onClose: a,
            onEditCompleted: b
          }, null, 8, ["content", "language", "dir", "title", "use-text"])
        ])
      ]),
      _: 1
    }));
  }
};
const l6 = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: r6
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
}, c6 = window.Vue.resolveComponent, u6 = window.Vue.createVNode, d6 = window.Vue.normalizeClass, g6 = window.Vue.openBlock, p6 = window.Vue.createElementBlock;
function m6(e, t, n, s, o, a) {
  const r = c6("sx-editor");
  return g6(), p6("main", {
    class: d6(["sx-editor-view", a.classes])
  }, [
    u6(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const h6 = /* @__PURE__ */ ge(l6, [["render", m6]]);
const Qt = window.Vue.unref, as = window.Vue.createVNode, Qo = window.Vue.withCtx, f6 = window.Vue.resolveDirective, w6 = window.Vue.withDirectives, v6 = window.Vue.openBlock, _6 = window.Vue.createBlock, Am = window.Codex.CdxButton, Dm = window.Codex.CdxIcon, S6 = {
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
    return (s, o) => {
      const a = f6("i18n");
      return v6(), _6(Qt(M), { class: "ma-0 sx-publisher__header" }, {
        default: Qo(() => [
          as(Qt(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: Qo(() => [
              as(Qt(Am), {
                class: "px-3",
                weight: "quiet",
                "aria-label": s.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: Qo(() => [
                  as(Qt(Dm), { icon: Qt(Qs) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          w6(as(Qt(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          as(Qt(k), { shrink: "" }, {
            default: Qo(() => [
              as(Qt(Am), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": s.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: o[0] || (o[0] = (r) => s.$emit("publish-translation"))
              }, {
                default: Qo(() => [
                  as(Qt(Dm), { icon: Qt(iy) }, null, 8, ["icon"])
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
}, y6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, x6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Pm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const _c = window.Vue.createElementVNode, Bm = window.Vue.toDisplayString, Sc = window.Vue.unref, yc = window.Vue.withCtx, Fm = window.Vue.createVNode, C6 = window.Vue.openBlock, b6 = window.Vue.createBlock, k6 = window.Vue.createCommentVNode, $6 = ["innerHTML"], V6 = ["textContent"], E6 = ["textContent"], xc = window.Vue.computed, L6 = {
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
    const t = he(), n = e, s = {
      pending: {
        svg: y6,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: x6,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Pm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Pm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, o = xc(() => s[n.status].svg), a = xc(() => s[n.status].title), r = xc(() => s[n.status].subtitle);
    return (l, u) => e.active ? (C6(), b6(Sc(Ct), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: yc(() => [
        Fm(Sc(M), { class: "ma-4" }, {
          default: yc(() => [
            Fm(Sc(k), null, {
              default: yc(() => [
                _c("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: o.value
                }, null, 8, $6),
                _c("h2", {
                  textContent: Bm(a.value)
                }, null, 8, V6),
                _c("p", {
                  class: "ma-0",
                  textContent: Bm(r.value)
                }, null, 8, E6)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : k6("", !0);
  }
};
const rt = window.Vue.unref, Nt = window.Vue.createVNode, vn = window.Vue.withCtx, T6 = window.Vue.resolveDirective, A6 = window.Vue.withDirectives, Nm = window.Vue.toDisplayString, D6 = window.Vue.createTextVNode, Cc = window.Vue.openBlock, Mm = window.Vue.createElementBlock, P6 = window.Vue.createCommentVNode, nw = window.Vue.createElementVNode, B6 = window.Vue.createBlock, F6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, N6 = ["src"], M6 = ["textContent"], U6 = /* @__PURE__ */ nw("p", { class: "mt-0" }, null, -1), I6 = window.Vue.computed, R6 = window.Vue.inject, z6 = window.Vue.ref, Um = window.Codex.CdxButton, O6 = window.Codex.CdxIcon, H6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: nf,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, s = z6(""), o = () => n("close"), a = () => n("publish", s.value), r = R6("breakpoints"), l = I6(() => r.value.mobile);
    return (u, d) => {
      const i = T6("i18n");
      return e.active && e.captchaDetails ? (Cc(), B6(rt(Ct), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: vn(() => [
          Nt(rt(M), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: vn(() => [
              Nt(rt(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: vn(() => [
                  Nt(rt(Um), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: o
                  }, {
                    default: vn(() => [
                      Nt(rt(O6), { icon: rt(Qs) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              A6(Nt(rt(k), {
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
                  Nt(rt(Um), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: vn(() => [
                      D6(Nm(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Nt(rt(Gi))
        ]),
        default: vn(() => [
          nw("div", F6, [
            e.captchaDetails.type === "image" ? (Cc(), Mm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, N6)) : (Cc(), Mm("p", {
              key: 1,
              textContent: Nm(e.captchaDetails.question)
            }, null, 8, M6)),
            U6,
            Nt(rt(M), { class: "ma-0" }, {
              default: vn(() => [
                Nt(rt(k), null, {
                  default: vn(() => [
                    Nt(rt(Uc), {
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
      }, 8, ["fullscreen"])) : P6("", !0);
    };
  }
};
const zn = window.Vue.unref, Ui = window.Vue.createVNode, Is = window.Vue.withCtx, Rs = window.Vue.createElementVNode, j6 = window.Vue.resolveDirective, q6 = window.Vue.withDirectives, G6 = window.Vue.renderList, X6 = window.Vue.Fragment, bc = window.Vue.openBlock, W6 = window.Vue.createElementBlock, Im = window.Vue.toDisplayString, Rm = window.Vue.createTextVNode, K6 = window.Vue.isRef, Y6 = window.Vue.normalizeClass, zm = window.Vue.createBlock, Q6 = { class: "mw-ui-dialog__header" }, J6 = { class: "row ma-0 px-4 py-3" }, Z6 = { class: "col shrink justify-center" }, e9 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, t9 = { class: "mb-0" }, n9 = { class: "pa-4" }, s9 = window.Codex.CdxField, o9 = window.Codex.CdxRadio, a9 = window.Vuex.useStore, Ii = window.Vue.computed, i9 = window.Codex.CdxButton, r9 = window.Codex.CdxIcon, l9 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, s = a9(), { target: o, PUBLISHING_TARGETS: a } = zt(), r = Ii(() => s.state.translator.isAnon), l = he(), { sourceSection: u } = ne(), { isCurrentSectionPresent: d } = De(), i = Ii(
      () => u.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), c = Ii(
      () => u.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), g = Ii(() => {
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
      return d.value && m.push({
        label: l.i18n("cx-sx-publisher-expand-option-label"),
        description: l.i18n("cx-sx-publisher-expand-option-details"),
        value: a.EXPAND,
        disabled: !1
      }), m;
    }), p = () => n("update:active", !1);
    return (m, h) => {
      const f = j6("i18n");
      return bc(), zm(zn(Ct), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: m.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: h[1] || (h[1] = (w) => m.$emit("update:active", w)),
        onClose: p
      }, {
        header: Is(() => [
          Rs("div", Q6, [
            Rs("div", J6, [
              Rs("div", Z6, [
                Ui(zn(i9), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": m.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: p
                }, {
                  default: Is(() => [
                    Ui(zn(r9), { icon: zn(qh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Rs("div", e9, [
                q6(Rs("h4", t9, null, 512), [
                  [f, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Ui(zn(Gi))
          ])
        ]),
        default: Is(() => [
          Rs("div", n9, [
            Ui(zn(s9), { "is-fieldset": "" }, {
              default: Is(() => [
                (bc(!0), W6(X6, null, G6(g.value, (w, _) => (bc(), zm(zn(o9), {
                  key: "publish-options-radio-" + w.value,
                  modelValue: zn(o),
                  "onUpdate:modelValue": [
                    h[0] || (h[0] = (C) => K6(o) ? o.value = C : null),
                    p
                  ],
                  class: Y6(_ < g.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": w.value,
                  disabled: w.disabled,
                  name: "publish-options"
                }, {
                  description: Is(() => [
                    Rm(Im(w.description), 1)
                  ]),
                  default: Is(() => [
                    Rm(Im(w.label) + " ", 1)
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
const Mt = window.Vue.unref, Om = window.Vue.toDisplayString, Hm = window.Vue.createElementVNode, c9 = window.Vue.resolveDirective, zs = window.Vue.createVNode, u9 = window.Vue.withDirectives, Jo = window.Vue.withCtx, kc = window.Vue.openBlock, jm = window.Vue.createBlock, qm = window.Vue.createCommentVNode, d9 = window.Vue.Fragment, g9 = window.Vue.createElementBlock, p9 = window.Vue.normalizeClass, m9 = ["textContent"], h9 = ["textContent"], Os = window.Vue.computed, Gm = window.Vue.ref, f9 = window.Vue.watch, Xm = window.Codex.CdxButton, Wm = window.Codex.CdxIcon, w9 = window.Codex.CdxMessage, v9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Gm(0), s = Gm(null);
    f9(s, () => {
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
    ), u = he(), d = Os(() => {
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
      const h = c9("i18n-html");
      return kc(), jm(Mt(w9), {
        type: a.value,
        class: p9(["sx-publisher__review-info", l.value]),
        icon: r.value ? Mt(cy) : null
      }, {
        default: Jo(() => [
          Hm("h5", {
            textContent: Om(i.value)
          }, null, 8, m9),
          r.value ? qm("", !0) : (kc(), g9(d9, { key: 0 }, [
            Hm("p", {
              textContent: Om(d.value)
            }, null, 8, h9),
            zs(Mt(M), {
              justify: "between",
              class: "ma-0"
            }, {
              default: Jo(() => [
                u9(zs(Mt(k), {
                  ref_key: "learnMoreContainer",
                  ref: s,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (kc(), jm(Mt(k), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: Jo(() => [
                    zs(Mt(Xm), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: c
                    }, {
                      default: Jo(() => [
                        zs(Mt(Wm), { icon: Mt(hu) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    zs(Mt(Xm), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: Jo(() => [
                        zs(Mt(Wm), { icon: Mt(Sa) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })) : qm("", !0)
              ]),
              _: 1
            })
          ], 64))
        ]),
        _: 1
      }, 8, ["type", "class", "icon"]);
    };
  }
}, _9 = (e) => {
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
}, S9 = window.Vuex.useStore, y9 = window.Vue.computed, x9 = () => {
  const e = S9(), { currentTranslation: t } = Ot(), { currentMTProvider: n } = Ae(e), { currentTargetPageTitle: s } = pt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = D(), { sourceSection: u } = ne(), d = bt(), i = y9(() => {
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
    return n.value && (m.translation_provider = re.getProviderForInstrumentation(n.value)), m.human_modification_rate = tn.getMTScoreForPageSection(
      u.value,
      a.value
    ) / 100, m.human_modification_threshold = tn.getMtModificationThreshold(), m;
  });
  return {
    logPublishAttemptEvent: () => d(ue({
      event_type: "publish_attempt"
    }, i.value)),
    logPublishSuccessEvent: (m, h) => d(ue({
      event_type: "publish_success",
      published_page_id: m,
      published_revision_id: h
    }, i.value)),
    logPublishFailureEvent: () => d(ue({
      event_type: "publish_failure"
    }, i.value))
  };
}, C9 = window.Vue.computed, Km = window.Vue.ref, b9 = window.Vuex.useStore, k9 = () => {
  const e = b9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: s
  } = D(), { sourceSection: o, targetPageTitleForPublishing: a } = ne(), r = Qf(), { sectionSuggestion: l } = De(), u = C9(
    () => {
      var S, b;
      return (b = l.value) == null ? void 0 : b.presentSections[(S = o.value) == null ? void 0 : S.sourceSectionTitleForPublishing];
    }
  ), { target: d, PUBLISHING_TARGETS: i } = zt(), c = Km(!1), g = Km("pending"), p = () => c.value = !1, m = Lu(), {
    logPublishAttemptEvent: h,
    logPublishSuccessEvent: f,
    logPublishFailureEvent: w
  } = x9(), _ = (S, b) => x(void 0, null, function* () {
    h();
    const A = yield m();
    if (A instanceof Gn)
      return w(), { publishFeedbackMessage: A, targetUrl: null };
    const y = A, B = a.value, V = {
      html: _9(o.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: B,
      sourceSectionTitle: o.value.sourceSectionTitleForPublishing,
      targetSectionTitle: o.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: s.value,
      revision: r.value,
      isSandbox: d.value === i.SANDBOX,
      sectionTranslationId: y
    };
    u.value && d.value === i.EXPAND && (V.existingSectionTitle = u.value), S && (V.captchaId = S, V.captchaWord = b);
    const E = yield xt.publishTranslation(
      V
    );
    return E.publishFeedbackMessage === null ? f(E.pageId, E.revisionId) : w(), E;
  });
  return {
    closePublishDialog: p,
    doPublish: (S = null, b = null) => x(void 0, null, function* () {
      g.value = "pending", c.value = !0;
      let A;
      try {
        A = yield _(
          b == null ? void 0 : b.id,
          S
        );
      } catch (y) {
        if (y instanceof Xs)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw y;
      }
      return A;
    }),
    isPublishDialogActive: c,
    publishStatus: g
  };
}, $9 = window.Vue.computed, V9 = () => {
  const e = tt(), { sourceSection: t } = ne(), { getCurrentTitleByLanguage: n } = bn(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = D(), a = $9(
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
}, E9 = () => {
  const { targetLanguageURLParameter: e } = D(), { sourceSection: t } = ne();
  return () => {
    const n = tn.getMTScoreForPageSection(
      t.value,
      e.value
    ), s = tn.getScoreStatus(n);
    if (s === "success")
      return null;
    const o = 100 - n, a = s === "failure" ? "error" : "warning";
    let r, l;
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", o).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", o).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Gn({
      title: r,
      text: l,
      status: a,
      type: "mt"
    });
  };
}, L9 = window.Vue.ref, T9 = window.Vue.computed, A9 = () => {
  const e = E9(), { target: t, PUBLISHING_TARGETS: n } = zt(), { targetPageTitleForPublishing: s } = ne(), o = L9([]), a = T9(
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
      if (!ew() && t.value !== n.SANDBOX) {
        const i = new Gn({
          text: mw.message("cx-publish-permission-error").text(),
          title: mw.message("cx-publish-permission-error-title").text(),
          type: "generic",
          status: "error"
        });
        r(i);
      }
      const d = e();
      d && r(d), mw.Title.newFromText(s.value) || r(
        new Gn({
          text: mw.message("cx-tools-linter-invalid-character-message").text(),
          title: mw.message("cx-tools-linter-invalid-character").text(),
          type: "generic",
          status: "error"
        })
      );
    }
  };
}, D9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = zt(), { currentSourcePage: n } = pt(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = D(), { sourceSection: a, targetPageTitleForPublishing: r } = ne();
  return (l) => x(void 0, null, function* () {
    const u = r.value, d = n.value.title, i = new mw.Title(d), c = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== c.user)
      try {
        yield er.addWikibaseLink(
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
}, Ym = window.Vue.ref, P9 = () => {
  const e = Ym(!1), t = Ym(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (o) => o && o.type === "captcha" ? (t.value = o.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const de = window.Vue.unref, Ge = window.Vue.createVNode, B9 = window.Vue.resolveDirective, Qm = window.Vue.withDirectives, $c = window.Vue.openBlock, Vc = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const is = window.Vue.createElementVNode, Jm = window.Vue.toDisplayString, F9 = window.Vue.createTextVNode, Hs = window.Vue.withCtx, Zm = window.Vue.normalizeClass, N9 = { class: "sx-publisher" }, M9 = {
  key: 0,
  class: "mb-2"
}, U9 = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, I9 = ["href"], R9 = ["innerHTML"], z9 = { class: "sx-publisher__section-preview pa-5" }, O9 = ["innerHTML"], Ri = window.Vue.computed, H9 = window.Vue.onMounted, j9 = window.Vue.ref, q9 = window.Vue.watch, eh = window.Codex.CdxButton, Ec = window.Codex.CdxIcon, G9 = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = ne(), { sectionSuggestion: n, isCurrentSectionPresent: s } = De(), {
      targetLanguageURLParameter: o,
      sectionURLParameter: a
    } = D(), r = Ri(() => {
      var z;
      return (z = t.value) == null ? void 0 : z.title;
    }), l = he(), { target: u, PUBLISHING_TARGETS: d } = zt(), i = Ri(() => u.value === d.SANDBOX ? l.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : u.value === d.EXPAND ? l.i18n(
      "cx-sx-publisher-publish-panel-expand-section-result"
    ) : t.value.isLeadSection ? l.i18n("cx-sx-publisher-publish-panel-lead-section-result") : l.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: c,
      captchaDialogOn: g,
      handleCaptchaError: p,
      onCaptchaDialogClose: m
    } = P9(), {
      publishFeedbackMessages: h,
      isPublishingDisabled: f,
      addPublishFeedbackMessage: w,
      clearPublishFeedbackMessages: _,
      initializePublishFeedbackMessages: C
    } = A9(), S = D9(), { doPublish: b, isPublishDialogActive: A, publishStatus: y, closePublishDialog: B } = k9(), V = (z = null) => x(this, null, function* () {
      if (f.value)
        return;
      const J = yield b(z, c.value);
      if (!J)
        return;
      const { publishFeedbackMessage: oe, targetUrl: le } = J;
      if (p(oe)) {
        B();
        return;
      } else
        oe && w(oe);
      y.value = f.value ? "failure" : "success", setTimeout(() => {
        if (f.value) {
          B();
          return;
        }
        S(le);
      }, 1e3);
    });
    H9(() => C());
    const E = V9(), j = j9(!1), se = () => j.value = !0;
    q9(j, (z) => {
      z || (_(), C());
    });
    const ae = Ri(
      () => {
        var z, J;
        return (J = (z = n.value) == null ? void 0 : z.presentSections) == null ? void 0 : J[a.value];
      }
    ), te = Ri(() => {
      var oe;
      const z = K.getPageUrl(
        o.value,
        (oe = n.value) == null ? void 0 : oe.targetTitle
      ), J = (ae.value || "").replace(
        / /g,
        "_"
      );
      return `${z}#${J}`;
    });
    return (z, J) => {
      const oe = B9("i18n");
      return $c(), Vc("section", N9, [
        Ge(S6, {
          "is-publishing-disabled": de(f),
          onPublishTranslation: V
        }, null, 8, ["is-publishing-disabled"]),
        is("div", {
          class: Zm(["sx-publisher__publish-panel", de(s) ? "py-4" : "pa-4"])
        }, [
          de(s) ? ($c(), Vc("div", U9, [
            Qm(is("h5", null, null, 512), [
              [oe, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            is("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: te.value,
              target: "_blank"
            }, [
              F9(Jm(ae.value) + " ", 1),
              Ge(de(Ec), { icon: de(tr) }, null, 8, ["icon"])
            ], 8, I9)
          ])) : Qm(($c(), Vc("h5", M9, null, 512)), [
            [oe, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          is("div", {
            class: Zm({ "px-4 mt-4": de(s) })
          }, [
            is("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: i.value
            }, null, 8, R9),
            Ge(de(M), {
              justify: "end",
              class: "ma-0"
            }, {
              default: Hs(() => [
                Ge(de(k), { shrink: "" }, {
                  default: Hs(() => [
                    Ge(de(eh), {
                      weight: "quiet",
                      "aria-label": z.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: se
                    }, {
                      default: Hs(() => [
                        Ge(de(Ec), { icon: de(_y) }, null, 8, ["icon"])
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
        Ge(v9, { "publish-feedback-messages": de(h) }, null, 8, ["publish-feedback-messages"]),
        is("section", z9, [
          Ge(de(M), { class: "pb-5 ma-0" }, {
            default: Hs(() => [
              Ge(de(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: Jm(r.value)
              }, null, 8, ["textContent"]),
              Ge(de(k), { shrink: "" }, {
                default: Hs(() => [
                  Ge(de(eh), {
                    weight: "quiet",
                    "aria-label": z.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: de(E)
                  }, {
                    default: Hs(() => [
                      Ge(de(Ec), { icon: de(pu) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          is("div", {
            innerHTML: de(t).translationHtml
          }, null, 8, O9)
        ]),
        Ge(l9, {
          active: j.value,
          "onUpdate:active": J[0] || (J[0] = (le) => j.value = le)
        }, null, 8, ["active"]),
        Ge(H6, {
          active: de(g),
          "captcha-details": de(c),
          onClose: de(m),
          onPublish: J[1] || (J[1] = (le) => V(le))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ge(L6, {
          active: de(A),
          status: de(y)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const X9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: G9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, W9 = window.Vue.resolveComponent, K9 = window.Vue.createVNode, Y9 = window.Vue.normalizeClass, Q9 = window.Vue.openBlock, J9 = window.Vue.createElementBlock;
function Z9(e, t, n, s, o, a) {
  const r = W9("sx-publisher");
  return Q9(), J9("main", {
    class: Y9(["sx-publisher-view", a.classes])
  }, [
    K9(r)
  ], 2);
}
const eP = /* @__PURE__ */ ge(X9, [["render", Z9]]);
const Ut = window.Vue.unref, On = window.Vue.createVNode, rs = window.Vue.withCtx, Lc = window.Vue.toDisplayString, Tc = window.Vue.createElementVNode, tP = window.Vue.openBlock, nP = window.Vue.createBlock, sP = ["textContent"], oP = ["textContent"], aP = ["textContent"], sw = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Ws,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (tP(), nP(Ut(M), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Ut(R.getDir)(e.suggestion.language)
    }, {
      default: rs(() => [
        On(Ut(k), { shrink: "" }, {
          default: rs(() => [
            On(Ut(Qc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        On(Ut(k), { class: "ms-4" }, {
          default: rs(() => [
            On(Ut(M), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: rs(() => [
                On(Ut(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: rs(() => [
                    Tc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Lc(e.suggestion.title)
                    }, null, 8, sP)
                  ]),
                  _: 1
                }),
                On(Ut(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: rs(() => [
                    Tc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Lc(e.suggestion.description)
                    }, null, 8, oP)
                  ]),
                  _: 1
                }),
                On(Ut(k), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: rs(() => [
                    On(Ut(et), {
                      icon: Ut(R0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    Tc("small", {
                      textContent: Lc((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, aP)
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
const Zo = window.Vue.unref, ea = window.Vue.openBlock, Ac = window.Vue.createBlock, iP = window.Vue.createCommentVNode, rP = window.Vue.resolveDirective, lP = window.Vue.withDirectives, th = window.Vue.createElementBlock, cP = window.Vue.renderList, uP = window.Vue.Fragment, dP = window.Vue.normalizeClass, gP = window.Vue.withCtx, pP = {
  key: 1,
  class: "sx-article-search__empty-state"
}, nh = window.Vue.computed, mP = window.Vue.ref, hP = {
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
    const { sourceLanguageURLParameter: t } = D(), n = nh(() => R.getAutonym(t.value)), s = e, o = mP(null), a = (c) => o.value = c, r = () => o.value = null, l = (c) => {
      var g;
      return ((g = s.selectedItem) == null ? void 0 : g.title) === c.title && !o.value || o.value === c.pageId;
    }, u = nh(() => s.searchInput), { searchResultsLoading: d, searchResultsSlice: i } = yu(
      t,
      u
    );
    return (c, g) => {
      const p = rP("i18n");
      return ea(), Ac(Zo(Ze), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: gP(() => [
          Zo(d) ? (ea(), Ac(Zo(dt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Zo(i).length === 0 ? lP((ea(), th("p", pP, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : iP("", !0),
          (ea(!0), th(uP, null, cP(Zo(i), (m) => (ea(), Ac(sw, {
            key: m.pageId,
            suggestion: m,
            class: dP({
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
const fP = window.Vue.toDisplayString, wP = window.Vue.createElementVNode, vP = window.Vue.renderList, _P = window.Vue.Fragment, Dc = window.Vue.openBlock, SP = window.Vue.createElementBlock, yP = window.Vue.normalizeClass, sh = window.Vue.createBlock, xP = window.Vue.unref, oh = window.Vue.withCtx, CP = ["textContent"], bP = window.Vue.ref, ah = {
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
    const n = e, s = bP(null), o = (l) => s.value = l, a = () => s.value = null, r = (l) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === l.title && !s.value || s.value === l.pageId;
    };
    return (l, u) => (Dc(), sh(xP(Ze), { class: "sx-article-search__suggestions pa-0" }, {
      header: oh(() => [
        wP("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: fP(e.cardTitle)
        }, null, 8, CP)
      ]),
      default: oh(() => [
        (Dc(!0), SP(_P, null, vP(e.suggestions, (d) => (Dc(), sh(sw, {
          key: d.pageId,
          suggestion: d,
          class: yP({
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
}, kP = window.Vue.computed, $P = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), ih = "other", VP = (e) => kP((t) => {
  const s = e.value.slice(0, 3), o = {
    value: ih,
    props: {
      icon: j0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== ih);
  return $P(a, s) ? t : [...s.map((l) => ({
    value: l,
    props: {
      label: R.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), EP = window.Vue.computed, LP = () => {
  const { supportedSourceLanguageCodes: e } = wa(), { targetLanguageURLParameter: t } = D();
  return { getSuggestedSourceLanguages: (s) => EP(() => {
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
}, TP = window.Vue.ref, AP = () => {
  const e = TP([]), t = () => {
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
const DP = window.Vue.resolveDirective, PP = window.Vue.createElementVNode, Pc = window.Vue.withDirectives, fe = window.Vue.unref, ta = window.Vue.withCtx, Jt = window.Vue.createVNode, na = window.Vue.openBlock, rh = window.Vue.createBlock, BP = window.Vue.createCommentVNode, Bc = window.Vue.createElementBlock, FP = window.Vue.Fragment, NP = window.Vue.vShow, sa = window.Vue.withModifiers, oa = window.Vue.withKeys, MP = ["onKeydown"], UP = { class: "mb-0" }, IP = {
  key: 2,
  class: "sx-article-search__empty-state"
}, aa = window.Vue.ref, RP = window.Vue.onMounted, ia = window.Vue.computed, lh = window.Vue.watch, zP = window.Vue.inject, OP = window.Vuex.useStore, HP = window.Codex.CdxButton, jP = window.Codex.CdxIcon, qP = window.Codex.CdxSearchInput, GP = 3, XP = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = aa(""), n = aa(!1), s = aa(null), o = aa(!1), { previousLanguages: a, addLanguageToHistory: r } = AP(), l = OP(), {
      sourceLanguageURLParameter: u,
      targetLanguageURLParameter: d
    } = D(), { supportedSourceLanguageCodes: i } = wa(), { searchResultsSlice: c } = yu(u, t), { getSuggestedSourceLanguages: g } = LP(), p = g(a), m = VP(
      p
    ), h = tt(), { fetchAllTranslations: f } = Js();
    RP(() => x(this, null, function* () {
      var F;
      f(), r(u.value), (F = s.value) == null || F.focus();
    }));
    const w = () => {
      h.push({ name: "dashboard" });
    }, _ = ef(), C = (F) => {
      _(F, d.value), r(F);
    }, S = (F) => {
      if (F === "other") {
        o.value = !0;
        return;
      }
      C(F);
    };
    lh(
      u,
      () => {
        var F;
        l.dispatch("mediawiki/fetchNearbyPages"), (F = s.value) == null || F.focus();
      },
      { immediate: !0 }
    );
    const b = bt();
    lh(t, () => {
      n.value || (n.value = !0, b({
        event_type: "dashboard_search",
        translation_source_language: u.value,
        translation_target_language: d.value
      }));
    });
    const A = () => {
      o.value = !1;
    }, y = (F) => {
      o.value = !1, S(F);
    }, { fetchPreviousEditsInSource: B, previousEditsInSource: V } = Rh(), E = aa([]);
    (() => B().then(() => V.value.length > 0 ? ds.fetchPages(
      u.value,
      V.value
    ) : []).then((F) => {
      F = F.slice(0, GP), F = F.sort(
        (U, Y) => V.value.indexOf(U.title) - V.value.indexOf(Y.title)
      ), E.value = F;
    }))();
    const se = ia(() => l.getters["mediawiki/getNearbyPages"]), ae = zP("breakpoints"), te = ia(() => ae.value.mobile), z = ya(), J = ia(
      () => E.value && E.value.length
    ), oe = ia(
      () => se.value && se.value.length
    ), { next: le, prev: ke, keyboardNavigationContainer: Ke, selectedItem: Pe } = Bf(t, c, E), Z = (F) => z(
      F.title,
      u.value,
      d.value,
      I.value
    ), I = ia(() => t.value ? "search_result" : J.value ? "suggestion_recent_edit" : oe.value ? "suggestion_nearby" : "");
    return (F, U) => {
      const Y = DP("i18n");
      return na(), Bc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: Ke,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          U[5] || (U[5] = oa(sa((...v) => fe(le) && fe(le)(...v), ["stop", "prevent"]), ["tab"])),
          U[6] || (U[6] = oa(sa((...v) => fe(le) && fe(le)(...v), ["stop", "prevent"]), ["down"])),
          U[7] || (U[7] = oa(sa((...v) => fe(ke) && fe(ke)(...v), ["stop", "prevent"]), ["up"])),
          oa(sa(w, ["stop", "prevent"]), ["esc"]),
          U[8] || (U[8] = oa(sa((v) => Z(fe(Pe)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        Jt(fe(M), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ta(() => [
            Jt(fe(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ta(() => [
                Pc(PP("h5", UP, null, 512), [
                  [Y, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Jt(fe(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ta(() => [
                Jt(fe(HP), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": F.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: w
                }, {
                  default: ta(() => [
                    Jt(fe(jP), { icon: fe(Qs) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Jt(fe(qP), {
          ref_key: "searchInputRef",
          ref: s,
          modelValue: t.value,
          "onUpdate:modelValue": U[0] || (U[0] = (v) => t.value = v),
          class: "sx-article-search__search-input",
          placeholder: F.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Jt(fe(ma), {
          class: "sx-article-search__language-button-group",
          items: fe(m),
          active: fe(u),
          onSelect: S
        }, null, 8, ["items", "active"]),
        t.value ? BP("", !0) : (na(), Bc(FP, { key: 0 }, [
          J.value ? (na(), rh(ah, {
            key: 0,
            "card-title": F.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: E.value,
            "selected-item": fe(Pe),
            onSuggestionClicked: U[1] || (U[1] = (v) => Z(v))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : oe.value ? (na(), rh(ah, {
            key: 1,
            "card-title": F.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: se.value,
            onSuggestionClicked: U[2] || (U[2] = (v) => Z(v))
          }, null, 8, ["card-title", "suggestions"])) : Pc((na(), Bc("p", IP, null, 512)), [
            [Y, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Pc(Jt(hP, {
          "search-input": t.value,
          "selected-item": fe(Pe),
          onSuggestionClicked: U[3] || (U[3] = (v) => Z(v))
        }, null, 8, ["search-input", "selected-item"]), [
          [NP, !!t.value]
        ]),
        Jt(fe(Ct), {
          value: o.value,
          "onUpdate:value": U[4] || (U[4] = (v) => o.value = v),
          class: "sx-article-search-language-selector",
          fullscreen: te.value,
          header: te.value,
          title: F.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: A
        }, {
          default: ta(() => [
            Jt(fe(Ff), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: fe(i),
              suggestions: fe(p),
              placeholder: F.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: y,
              onClose: A
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, MP);
    };
  }
};
const WP = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: XP
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, KP = window.Vue.resolveComponent, YP = window.Vue.createVNode, QP = window.Vue.normalizeClass, JP = window.Vue.openBlock, ZP = window.Vue.createElementBlock;
function eB(e, t, n, s, o, a) {
  const r = KP("sx-article-search");
  return JP(), ZP("main", {
    class: QP(["sx-article-search-view", a.classes])
  }, [
    YP(r)
  ], 2);
}
const tB = /* @__PURE__ */ ge(WP, [["render", eB]]), nB = () => {
  const e = ya(), t = $u(), { logDashboardOpenEvent: n } = If(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o,
    pageURLParameter: a
  } = D();
  return () => x(void 0, null, function* () {
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
}, sB = window.Vuex.useStore, oB = [
  {
    path: "",
    name: "dashboard",
    component: op,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: tB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: i4,
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
    component: C3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: N5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: TD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: ZA,
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
    component: h6,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: eP,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: op,
    meta: { workflowStep: 0 }
  }
], Tu = ib({
  history: aC(),
  routes: oB
}), Fc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, aB = (e, t, n) => {
  let s = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return s = s.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(s, "");
};
Tu.beforeEach((e, t, n) => {
  const s = sB();
  if (mw.user.isAnon() || ph.assertUser().catch((i) => {
    i instanceof Xs && s.commit("application/setIsLoginDialogOn", !0);
  }), s.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const o = nB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: u
  } = D();
  if (!!(a.value && r.value && l.value)) {
    if (aB(
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
  u(), Fc(e.name, "dashboard", n);
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
const iB = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, rB = window.Vue.createApp, lB = mw.config.get("wgUserLanguage"), cB = "en", uB = mw.messages.values || {}, ps = rB(Ky);
ps.use(Tu);
ps.use(Vx);
ps.use(p1);
ps.use(g1);
const dB = j1({
  locale: lB,
  finalFallback: cB,
  messages: uB,
  wikilinks: !0
});
ps.use(dB);
ps.use(iB);
ps.mount("#contenttranslation");
