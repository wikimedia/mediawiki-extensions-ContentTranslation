var bw = Object.defineProperty, Cw = Object.defineProperties;
var kw = Object.getOwnPropertyDescriptors;
var Hu = Object.getOwnPropertySymbols;
var $w = Object.prototype.hasOwnProperty, Ew = Object.prototype.propertyIsEnumerable;
var qu = (e, t, n) => t in e ? bw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ue = (e, t) => {
  for (var n in t || (t = {}))
    $w.call(t, n) && qu(e, n, t[n]);
  if (Hu)
    for (var n of Hu(t))
      Ew.call(t, n) && qu(e, n, t[n]);
  return e;
}, Ke = (e, t) => Cw(e, kw(t));
var b = (e, t, n) => new Promise((s, o) => {
  var a = (c) => {
    try {
      l(n.next(c));
    } catch (d) {
      o(d);
    }
  }, r = (c) => {
    try {
      l(n.throw(c));
    } catch (d) {
      o(d);
    }
  }, l = (c) => c.done ? s(c.value) : Promise.resolve(c.value).then(a, r);
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
    CdxTabs: c,
    CdxTab: d,
    CdxField: i,
    CdxRadio: u
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
    CdxTabs: c,
    CdxTab: d,
    CdxField: i,
    CdxRadio: u
  };
}
const de = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Vw = {
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
}, Lw = window.Vue.toDisplayString, Er = window.Vue.openBlock, Vr = window.Vue.createElementBlock, Tw = window.Vue.createCommentVNode, Gu = window.Vue.createElementVNode, Aw = window.Vue.normalizeClass, Dw = ["width", "height", "aria-labelledby"], Pw = ["id"], Bw = ["fill"], Fw = ["d"];
function Mw(e, t, n, s, o, a) {
  return Er(), Vr("span", {
    class: Aw(["mw-ui-icon notranslate", a.classes])
  }, [
    (Er(), Vr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (Er(), Vr("title", {
        key: 0,
        id: n.iconName
      }, Lw(n.iconName), 9, Pw)) : Tw("", !0),
      Gu("g", { fill: n.iconColor }, [
        Gu("path", { d: a.iconImagePath }, null, 8, Fw)
      ], 8, Bw)
    ], 8, Dw))
  ], 2);
}
const Ze = /* @__PURE__ */ de(Vw, [["render", Mw]]);
const Nw = {
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
}, Uw = window.Vue.renderSlot, Iw = window.Vue.resolveComponent, Xu = window.Vue.normalizeClass, Pa = window.Vue.openBlock, Lr = window.Vue.createBlock, Tr = window.Vue.createCommentVNode, Rw = window.Vue.toDisplayString, zw = window.Vue.createElementBlock, Ow = window.Vue.toHandlerKey, jw = window.Vue.withModifiers, Hw = window.Vue.mergeProps, qw = window.Vue.createElementVNode, Gw = window.Vue.resolveDynamicComponent, Xw = window.Vue.withCtx, Ww = { class: "mw-ui-button__content" }, Kw = ["textContent"];
function Yw(e, t, n, s, o, a) {
  const r = Iw("mw-icon");
  return Pa(), Lr(Gw(a.component), {
    class: Xu(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: Xw(() => [
      Uw(e.$slots, "default", {}, () => [
        qw("span", Ww, [
          n.icon ? (Pa(), Lr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Xu(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : Tr("", !0),
          !a.isIcon && n.label ? (Pa(), zw("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: Rw(n.label)
          }, null, 8, Kw)) : Tr("", !0),
          n.indicator ? (Pa(), Lr(r, Hw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [Ow(a.indicatorClickEvent)]: t[0] || (t[0] = jw((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : Tr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Xe = /* @__PURE__ */ de(Nw, [["render", Yw]]);
const Qw = {
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
}, Jw = window.Vue.renderList, Zw = window.Vue.Fragment, Ar = window.Vue.openBlock, Wu = window.Vue.createElementBlock, e0 = window.Vue.resolveComponent, t0 = window.Vue.withModifiers, n0 = window.Vue.mergeProps, s0 = window.Vue.createBlock, o0 = { class: "row mw-ui-button-group ma-0 pa-0" };
function a0(e, t, n, s, o, a) {
  const r = e0("mw-button");
  return Ar(), Wu("div", o0, [
    (Ar(!0), Wu(Zw, null, Jw(n.items, (l) => (Ar(), s0(r, n0({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: t0((c) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const Sa = /* @__PURE__ */ de(Qw, [["render", a0]]);
const i0 = {
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
}, Ku = window.Vue.renderSlot, r0 = window.Vue.toDisplayString, Yu = window.Vue.openBlock, Qu = window.Vue.createElementBlock, l0 = window.Vue.createCommentVNode, c0 = window.Vue.createElementVNode, u0 = { class: "mw-ui-card" }, d0 = ["textContent"], g0 = { class: "mw-ui-card__content" };
function p0(e, t, n, s, o, a) {
  return Yu(), Qu("div", u0, [
    Ku(e.$slots, "header", {}, () => [
      n.title ? (Yu(), Qu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: r0(n.title)
      }, null, 8, d0)) : l0("", !0)
    ]),
    c0("div", g0, [
      Ku(e.$slots, "default")
    ])
  ]);
}
const Je = /* @__PURE__ */ de(i0, [["render", p0]]);
const m0 = {}, h0 = window.Vue.openBlock, f0 = window.Vue.createElementBlock, w0 = { class: "mw-ui-divider row" };
function v0(e, t) {
  return h0(), f0("div", w0);
}
const ar = /* @__PURE__ */ de(m0, [["render", v0]]);
const _0 = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, S0 = window.Vue.renderSlot, y0 = window.Vue.resolveDynamicComponent, x0 = window.Vue.withCtx, b0 = window.Vue.openBlock, C0 = window.Vue.createBlock;
function k0(e, t, n, s, o, a) {
  return b0(), C0(y0(n.tag), { class: "mw-grid container" }, {
    default: x0(() => [
      S0(e.$slots, "default")
    ]),
    _: 3
  });
}
const $0 = /* @__PURE__ */ de(_0, [["render", k0]]), E0 = {
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
}, V0 = window.Vue.renderSlot, L0 = window.Vue.resolveDynamicComponent, T0 = window.Vue.normalizeClass, A0 = window.Vue.withCtx, D0 = window.Vue.openBlock, P0 = window.Vue.createBlock;
function B0(e, t, n, s, o, a) {
  return D0(), P0(L0(n.tag), {
    class: T0(a.classes)
  }, {
    default: A0(() => [
      V0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const U = /* @__PURE__ */ de(E0, [["render", B0]]), Xc = ["mobile", "tablet", "desktop", "desktop-wide"], F0 = Xc.reduce(
  (e, t) => Ke(ue({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), M0 = {
  name: "MwCol",
  props: Ke(ue({}, F0), {
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
      for (let n = 0; n < Xc.length; n++) {
        let s = Xc[n], o = this.$props[s];
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
}, N0 = window.Vue.renderSlot, U0 = window.Vue.resolveDynamicComponent, I0 = window.Vue.normalizeClass, R0 = window.Vue.withCtx, z0 = window.Vue.openBlock, O0 = window.Vue.createBlock;
function j0(e, t, n, s, o, a) {
  return z0(), O0(U0(n.tag), {
    class: I0(a.classes)
  }, {
    default: R0(() => [
      N0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const C = /* @__PURE__ */ de(M0, [["render", j0]]), H0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", q0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", ir = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", G0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, X0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", xh = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", W0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", K0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", rr = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", Y0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", Q0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", J0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", Ju = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", Z0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", bh = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", ev = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", tv = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", nv = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", sv = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", ov = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", Wc = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, av = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, iv = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Ch = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", rv = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const Dr = window.Vue.computed, lv = window.Vue.watch, cv = window.Vue.ref, uv = window.Vue.nextTick, dv = {
  name: "MwDialog",
  components: {
    MwButton: Xe,
    MwRow: U,
    MwCol: C,
    MwDivider: ar
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
    const n = cv(null), s = Dr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), o = Dr(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    lv(
      () => e.value,
      (c) => {
        c ? (r(), uv(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = Dr(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: s,
      cssVars: l,
      overlayClass: o,
      mwIconClose: rr,
      root: n
    };
  }
}, Zu = window.Vue.normalizeClass, Pr = window.Vue.createElementVNode, Br = window.Vue.renderSlot, Ba = window.Vue.resolveComponent, uo = window.Vue.createVNode, Fr = window.Vue.withCtx, ed = window.Vue.createCommentVNode, gv = window.Vue.withKeys, td = window.Vue.openBlock, pv = window.Vue.createElementBlock, mv = window.Vue.Transition, hv = window.Vue.normalizeStyle, fv = window.Vue.createBlock, wv = { class: "mw-ui-dialog__shell items-stretch" }, vv = { class: "mw-ui-dialog__body" };
function _v(e, t, n, s, o, a) {
  const r = Ba("mw-col"), l = Ba("mw-button"), c = Ba("mw-row"), d = Ba("mw-divider");
  return td(), fv(mv, {
    name: "mw-ui-animation-fade",
    style: hv(s.cssVars)
  }, {
    default: Fr(() => [
      n.value ? (td(), pv("div", {
        key: 0,
        ref: "root",
        class: Zu(["mw-ui-dialog", s.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = gv((i) => n.closeOnEscapeKey && s.close(), ["esc"]))
      }, [
        Pr("div", {
          class: Zu(["mw-ui-dialog__overlay", s.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && s.close())
        }, null, 2),
        Pr("div", wv, [
          n.header ? Br(e.$slots, "header", { key: 0 }, () => [
            uo(c, { class: "mw-ui-dialog__header" }, {
              default: Fr(() => [
                uo(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                uo(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: Fr(() => [
                    uo(l, {
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
            uo(d)
          ]) : ed("", !0),
          Pr("div", vv, [
            Br(e.$slots, "default")
          ]),
          Br(e.$slots, "footer")
        ])
      ], 34)) : ed("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const Ct = /* @__PURE__ */ de(dv, [["render", _v]]);
const Sv = {
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
}, nd = window.Vue.renderSlot, yv = window.Vue.resolveComponent, Fa = window.Vue.openBlock, Mr = window.Vue.createBlock, sd = window.Vue.createCommentVNode, xv = window.Vue.resolveDynamicComponent, bv = window.Vue.toDisplayString, Cv = window.Vue.mergeProps, kv = window.Vue.withModifiers, $v = window.Vue.createElementVNode, Ev = window.Vue.normalizeClass, Vv = window.Vue.createElementBlock, Lv = { class: "mw-ui-input__content" };
function Tv(e, t, n, s, o, a) {
  const r = yv("mw-icon");
  return Fa(), Vv("div", {
    class: Ev(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    $v("div", Lv, [
      nd(e.$slots, "icon", {}, () => [
        n.icon ? (Fa(), Mr(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : sd("", !0)
      ]),
      (Fa(), Mr(xv(n.type === "textarea" ? n.type : "input"), Cv({
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
        textContent: bv(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      nd(e.$slots, "indicator", {}, () => [
        n.indicator ? (Fa(), Mr(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = kv((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : sd("", !0)
      ])
    ])
  ], 2);
}
const Kc = /* @__PURE__ */ de(Sv, [["render", Tv]]);
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
const Av = {}, Dv = window.Vue.createElementVNode, Pv = window.Vue.openBlock, Bv = window.Vue.createElementBlock, Fv = { class: "mw-ui-spinner" }, Mv = /* @__PURE__ */ Dv("div", { class: "mw-ui-spinner__bounce" }, null, -1), Nv = [
  Mv
];
function Uv(e, t) {
  return Pv(), Bv("div", Fv, Nv);
}
const dt = /* @__PURE__ */ de(Av, [["render", Uv]]), yt = {
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
const Iv = window.Vue.computed, Rv = {
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
      default: Ch
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: yt.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: yt.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = Iv(() => {
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
}, od = window.Vue.normalizeStyle, ad = window.Vue.openBlock, zv = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ov = window.Vue.resolveComponent, jv = window.Vue.createBlock;
function Hv(e, t, n, s, o, a) {
  const r = Ov("mw-ui-icon");
  return n.thumbnail ? (ad(), zv("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: od(s.style)
  }, null, 4)) : (ad(), jv(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: od(s.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const lu = /* @__PURE__ */ de(Rv, [["render", Hv]]);
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
const qv = {
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
}, id = window.Vue.normalizeClass, rd = window.Vue.normalizeStyle, Gv = window.Vue.createElementVNode, Xv = window.Vue.openBlock, Wv = window.Vue.createElementBlock, Kv = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function Yv(e, t, n, s, o, a) {
  return Xv(), Wv("div", {
    class: id(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: rd(a.containerStyles)
  }, [
    Gv("div", {
      class: id(["mw-progress-bar__bar", a.barClass]),
      style: rd(a.barStyles)
    }, null, 6)
  ], 14, Kv);
}
const kh = /* @__PURE__ */ de(qv, [["render", Yv]]), Qv = (e, t, n, s) => (o) => {
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
  }, c = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), s.value = !0), document.documentElement.removeEventListener(
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
}, Jv = (e, t, n, s) => ({ initiateDrag: Qv(
  e,
  t,
  n,
  s
) }), Zv = window.Vue.ref, ld = window.Vue.computed, e1 = (e, t, n, s) => {
  const o = Zv(0), a = ld(
    () => t.value > e.value
  ), r = ld(
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
const Ma = window.Vue.ref, t1 = window.Vue.onMounted, cd = window.Vue.computed, n1 = window.Vue.nextTick, s1 = {
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
    const t = Ma(!0), n = Ma(null), s = cd(
      () => Math.min(e.minHeight, o.value)
    ), o = Ma(1), { initiateDrag: a } = Jv(
      o,
      s,
      n,
      t
    ), {
      isScrolledToEnd: r,
      scrollable: l,
      scrollIndex: c,
      scrollToStepByIndex: d,
      handleArrowUpClick: i
    } = e1(s, o, n, t), u = () => d(c.value + 1), g = Ma(null), p = cd(() => ({
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
    return t1(() => b(this, null, function* () {
      var f;
      yield n1(), o.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: iv,
      mwIconExpand: W0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: c,
      scrollToNextStep: u
    };
  }
}, o1 = window.Vue.renderSlot, a1 = window.Vue.normalizeClass, Na = window.Vue.createElementVNode, i1 = window.Vue.resolveComponent, r1 = window.Vue.createVNode, Nr = window.Vue.openBlock, l1 = window.Vue.createBlock, ud = window.Vue.createCommentVNode, dd = window.Vue.createElementBlock, c1 = window.Vue.normalizeStyle, u1 = { class: "mw-ui-expandable-content__container" }, d1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, g1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function p1(e, t, n, s, o, a) {
  const r = i1("mw-button");
  return Nr(), dd("div", {
    class: "mw-ui-expandable-content",
    style: c1(s.cssVars)
  }, [
    Na("div", u1, [
      Na("div", {
        ref: "contentRef",
        class: a1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": s.isCollapsed
        }])
      }, [
        o1(e.$slots, "default")
      ], 2),
      n.scroll && s.scrollable ? (Nr(), dd("div", d1, [
        r1(r, {
          type: "icon",
          icon: s.mwIconCollapse,
          disabled: s.isCollapsed && s.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: s.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        s.isCollapsed ? (Nr(), l1(r, {
          key: 0,
          type: "icon",
          icon: s.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: s.isScrolledToEnd,
          onClick: s.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : ud("", !0)
      ])) : ud("", !0)
    ]),
    Na("div", g1, [
      Na("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => s.onDragButtonClicked && s.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const m1 = /* @__PURE__ */ de(s1, [["render", p1]]);
const Ua = window.Vue.computed, h1 = {
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
      default: yt.blue600
    },
    inactiveColor: {
      type: String,
      default: yt.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = Ua(() => e.size / 2 * 0.9), n = Ua(() => Math.PI * (t.value * 2)), s = Ua(
      () => (100 - e.percentage) / 100 * n.value
    ), o = Ua(() => ({
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
}, gd = window.Vue.createElementVNode, pd = window.Vue.normalizeStyle, f1 = window.Vue.openBlock, w1 = window.Vue.createElementBlock, v1 = ["width", "height", "viewport"], _1 = ["r", "cx", "cy", "stroke-dasharray"], S1 = ["r", "cx", "cy", "stroke-dasharray"];
function y1(e, t, n, s, o, a) {
  return f1(), w1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: pd(s.cssVars)
  }, [
    gd("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: s.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": s.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, _1),
    gd("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: s.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": s.dashArray,
      "stroke-dashoffset": "0",
      style: pd({ strokeDashoffset: `${s.strokeDashOffset}px` })
    }, null, 12, S1)
  ], 12, v1);
}
const x1 = /* @__PURE__ */ de(h1, [["render", y1]]), b1 = window.Vue.ref, kn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, Tn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${kn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${kn.tablet}px) and (max-width: ${kn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${kn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${kn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${kn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${kn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${kn["desktop-wide"]}px)`
}, Ur = {
  mobile: () => matchMedia(Tn.mobile).matches,
  tablet: () => matchMedia(Tn.tablet).matches,
  desktop: () => matchMedia(Tn.desktop).matches,
  desktopwide: () => matchMedia(Tn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Tn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Tn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Tn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Tn["desktop-and-down"]).matches
}, C1 = (e) => {
  const t = Object.values(kn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, k1 = {
  install: (e) => {
    const t = b1({
      nextBreakpoint: null
    }), n = () => {
      const s = window.innerWidth;
      for (let o in Ur)
        Ur.hasOwnProperty(o) && (t.value[o] = Ur[o]());
      t.value.nextBreakpoint = C1(s);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Ke(ue({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, $1 = {
  install: (e) => {
    e.config.globalProperties.$mwui = Ke(ue({}, e.config.globalProperties.$mwui || {}), {
      colors: yt
    }), e.provide("colors", yt);
  }
};
class Zs extends Error {
}
const E1 = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Zs();
}), $h = { assertUser: E1 };
const V1 = window.Vue.resolveDirective, go = window.Vue.createElementVNode, md = window.Vue.withDirectives, L1 = window.Vue.toDisplayString, T1 = window.Vue.unref, hd = window.Vue.withCtx, A1 = window.Vue.openBlock, D1 = window.Vue.createBlock, P1 = window.Vue.createCommentVNode, B1 = { class: "pa-4 sx-login-dialog__header" }, F1 = { class: "sx-login-dialog__body px-6 pb-4" }, M1 = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, N1 = ["href"], U1 = window.Vue.computed, I1 = window.Vue.ref, R1 = window.Vuex.useStore, z1 = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = R1(), n = U1(() => t.state.application.isLoginDialogOn), s = () => t.commit("application/setIsLoginDialogOn", !1), o = I1(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = V1("i18n");
      return n.value ? (A1(), D1(T1(Ct), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: s
      }, {
        header: hd(() => [
          go("div", B1, [
            md(go("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: hd(() => [
          md(go("div", F1, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          go("div", M1, [
            go("a", {
              class: "py-1",
              href: o.value,
              target: "_blank"
            }, L1(a.$i18n("cx-sx-login-dialog-button-label")), 9, N1)
          ])
        ]),
        _: 1
      })) : P1("", !0);
    };
  }
}, K = new mw.cx.SiteMapper(), O1 = mw.util.getUrl, j1 = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const s = JSON.parse(mw.cookie.get("ULSGeo"));
  return s && s.latitude + "|" + s.longitude;
}, jt = !mw.config.get("wgMFMode");
class cu {
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
    status: c,
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = s, this.targetLanguage = o, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = c, this.targetTitle = d;
  }
}
const Ia = "original", Ra = "empty", H1 = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class ie {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, s = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...s,
      Ia,
      Ra
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return H1[t] || t;
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
    return Ia;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Ra;
  }
  static isUserMTProvider(t) {
    return [Ia, Ra].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === Ra ? "blank" : t === Ia ? "source" : t.toLowerCase();
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
    translatedContent: s = "",
    node: o = null,
    proposedTranslations: a = {},
    selected: r = !1
  } = {}) {
    this.id = t, this.translatedContent = s, this.mtProviderUsed = "", this.node = o, this.proposedTranslations = Ke(ue({}, a), {
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
const fd = (e) => {
  var n;
  const t = nr(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, nr = (e) => {
  var n, s, o;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((o = (s = t == null ? void 0 : t.parts) == null ? void 0 : s[0]) == null ? void 0 : o.template) || null;
}, fs = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Eh = (e) => {
  const t = nr(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: s } = t;
  if (!s)
    return `{{${n}}}`;
  for (const o in s) {
    const a = q1(s[o].wt);
    n += ` | ${o} = ${a}`;
  }
  return `{{${n}}}`;
}, q1 = (e) => {
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
}, Vh = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, Lh = (e) => {
  const t = Vh(e);
  return t == null ? void 0 : t.targetExists;
};
class Ir {
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
      (a) => fs(a)
    );
    o && Lh(o) && (this.blockTemplateAdaptationInfo[t] = Vh(o));
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
      (t) => fs(t)
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
    const t = nr(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? fd(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((s) => fs(s));
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
    return n && fd(n) || "";
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
    const s = nr(n);
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
      (a) => fs(a)
    );
    this.isBlockTemplate && s && (s.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const o = [
      new Ir({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new Ir({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && o.push(
      new Ir({
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
    if (!t || ie.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const s = Array.from(n.children).find(
        (o) => fs(o)
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
const uu = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), G1 = uu - 10, X1 = [
  { status: "failure", value: 100 - uu },
  { status: "warning", value: 100 - G1 },
  { status: "success", value: 100 }
], Th = (e, t, n) => {
  const s = wd(e).textContent, o = wd(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(o, s, n);
  return Math.ceil(a);
}, W1 = (e) => X1.find((t) => e <= t.value).status, K1 = (e, t) => Th(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), Y1 = () => (100 - uu) / 100, wd = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, sn = {
  calculateScore: Th,
  getScoreStatus: W1,
  getMTScoreForPageSection: K1,
  getMtModificationThreshold: Y1
}, za = "__LEAD_SECTION__";
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
    isLeadSection: s = !1,
    isTitleSelected: o = !1
  } = {}) {
    this.id = t, this.proposedTitleTranslations = {
      [ie.EMPTY_TEXT_PROVIDER_KEY]: ""
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
      [ie.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [ie.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return za;
  }
  static isSectionLead(t) {
    return !t || t === za;
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
    const s = this.getContentTranslationUnitById(t);
    if (s instanceof ut)
      return !!s.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (s instanceof Kn)
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
    const s = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, o = sn.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? za : this.originalTitle;
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
    return this.isLeadSection ? za : this.title;
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
class lr extends cu {
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
    lastUpdatedTimestamp: c,
    status: d,
    pageRevision: i,
    targetTitle: u,
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
      lastUpdatedTimestamp: c,
      pageRevision: i,
      status: d,
      targetTitle: u
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
    return Qn.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Qn.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const on = "previous-edits", En = "popular", We = "topic", $e = "geography", ne = "collections", Qe = "automatic", xt = "seed", vd = window.Vue.ref, { topics: Q1, regions: J1 } = mw.loader.require(
  "ext.cx.articlefilters"
), Oa = {
  type: Qe,
  id: on
}, du = () => {
  const e = vd(
    Q1.flatMap((l) => l.topics).map((l) => l.topicId.toLowerCase())
  ), t = vd(!1), n = (l, c) => e.value.includes(c) ? { type: We, id: c } : null, s = (l, c) => J1.some(
    (i) => i.id.toLowerCase() === c || i.countries.some(
      (u) => u.id.toLowerCase() === c
    )
  ) ? { type: $e, id: c } : null, o = (l, c, d) => d && !d.some((i) => i.name.toLowerCase() === c) ? null : { type: ne, id: l };
  return { filtersValidatorError: t, validateFilters: ({ type: l, id: c }, d = !1) => {
    t.value = !1;
    const i = l == null ? void 0 : l.toLowerCase(), u = c == null ? void 0 : c.toLowerCase();
    if (u === on)
      return {
        type: Qe,
        id: on
      };
    if (u === En)
      return {
        type: Qe,
        id: En
      };
    if (u === ne)
      return d && !d.length ? (t.value = !0, Oa) : {
        type: Qe,
        id: ne
      };
    if (i === We) {
      const g = n(c, u);
      if (g)
        return g;
      t.value = !0;
    } else if (i === $e) {
      const g = s(c, u);
      if (g)
        return g;
      t.value = !0;
    } else if (i === ne) {
      const g = o(
        c,
        u,
        d
      );
      if (g)
        return g;
      t.value = !0;
    } else if (i === xt)
      return { type: xt, id: c };
    return Oa;
  }, isDefaultFilter: ({ type: l, id: c }) => l === Oa.type && c === Oa.id };
}, Z1 = window.Vue.inject, e_ = window.Vue.reactive;
var t_ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, Ah = { exports: {} };
(function(e, t) {
  (function(n, s) {
    e.exports = s();
  })(t_, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, s = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class o {
      constructor(u) {
        this.locale = u;
      }
      convertPlural(u, g) {
        const p = /\d+=/i;
        if (!g || g.length === 0)
          return "";
        for (let h = 0; h < g.length; h++) {
          const f = g[h];
          if (p.test(f)) {
            if (parseInt(f.slice(0, f.indexOf("=")), 10) === u)
              return f.slice(f.indexOf("=") + 1);
            g[h] = void 0;
          }
        }
        g = g.filter((h) => !!h);
        let m = this.getPluralForm(u, this.locale);
        return m = Math.min(m, g.length - 1), g[m];
      }
      getPluralForm(u, g) {
        const p = new Intl.PluralRules(g), m = p.resolvedOptions().pluralCategories, h = p.select(u);
        return ["zero", "one", "two", "few", "many", "other"].filter((f) => m.includes(f)).indexOf(h);
      }
      convertNumber(u, g = !1) {
        let p = this.digitTransformTable(this.locale), m = "";
        if (g) {
          if (parseFloat(u, 10) === u || !p)
            return u;
          const h = [];
          for (const w in p)
            h[p[w]] = w;
          p = h;
          const f = String(u);
          for (let w = 0; w < f.length; w++)
            m += p[f[w]] || f[w];
          return parseFloat(m, 10);
        }
        if (Intl.NumberFormat) {
          let h;
          const f = [...s[this.locale] || [], "en"];
          return h = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : f, m = new Intl.NumberFormat(h).format(u), m === "NaN" && (m = u), m;
        }
      }
      convertGrammar(u, g) {
        return u;
      }
      gender(u, g) {
        if (!g || g.length === 0)
          return "";
        for (; g.length < 2; )
          g.push(g[g.length - 1]);
        return u === "male" ? g[0] : u === "female" ? g[1] : g.length === 3 ? g[2] : g[0];
      }
      digitTransformTable(u) {
        return !!n[u] && n[u].split("");
      }
    }
    var a = { bs: class extends o {
      convertGrammar(i, u) {
        switch (u) {
          case "instrumental":
            i = "s " + i;
            break;
          case "lokativ":
            i = "o " + i;
        }
        return i;
      }
    }, default: o, dsb: class extends o {
      convertGrammar(i, u) {
        switch (u) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, fi: class extends o {
      convertGrammar(i, u) {
        let g = i.match(/[aou][^äöy]*$/i);
        const p = i;
        switch (i.match(/wiki$/i) && (g = !1), i.match(/[bcdfghjklmnpqrstvwxz]$/i) && (i += "i"), u) {
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
      convertGrammar(i, u) {
        if (u === "ainmlae")
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
      convertGrammar(i, u) {
        switch (u) {
          case "prefixed":
          case "תחילית":
            i.slice(0, 1) === "ו" && i.slice(0, 2) !== "וו" && (i = "ו" + i), i.slice(0, 1) === "ה" && (i = i.slice(1)), (i.slice(0, 1) < "א" || i.slice(0, 1) > "ת") && (i = "־" + i);
        }
        return i;
      }
    }, hsb: class extends o {
      convertGrammar(i, u) {
        switch (u) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, hu: class extends o {
      convertGrammar(i, u) {
        switch (u) {
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
      convertGrammar(i, u) {
        return u === "genitive" && (i.slice(-1) === "ա" ? i = i.slice(0, -1) + "այի" : i.slice(-1) === "ո" ? i = i.slice(0, -1) + "ոյի" : i.slice(-4) === "գիրք" ? i = i.slice(0, -4) + "գրքի" : i += "ի"), i;
      }
    }, la: class extends o {
      convertGrammar(i, u) {
        switch (u) {
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
      convertGrammar(i, u) {
        let g, p, m, h;
        switch (g = "мæ", p = "", m = "", h = "", i.match(/тæ$/i) ? (i = i.slice(0, -1), g = "æм") : i.match(/[аæеёиоыэюя]$/i) ? p = "й" : i.match(/у$/i) ? i.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (p = "й") : i.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), u) {
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
      convertGrammar(i, u) {
        return u === "genitive" && (i.slice(-1) === "ь" ? i = i.slice(0, -1) + "я" : i.slice(-2) === "ия" ? i = i.slice(0, -2) + "ии" : i.slice(-2) === "ка" ? i = i.slice(0, -2) + "ки" : i.slice(-2) === "ти" ? i = i.slice(0, -2) + "тей" : i.slice(-2) === "ды" ? i = i.slice(0, -2) + "дов" : i.slice(-3) === "ник" && (i = i.slice(0, -3) + "ника")), i;
      }
    }, sl: class extends o {
      convertGrammar(i, u) {
        switch (u) {
          case "mestnik":
            i = "o " + i;
            break;
          case "orodnik":
            i = "z " + i;
        }
        return i;
      }
    }, uk: class extends o {
      convertGrammar(i, u) {
        switch (u) {
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
      constructor(u) {
        this.locale = u, this.language = new (a[u] || a.default)(u);
      }
      emit(u, g) {
        let p, m, h;
        switch (typeof u) {
          case "string":
          case "number":
            p = u;
            break;
          case "object":
            if (m = u.slice(1).map((f) => this.emit(f, g)), h = u[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            p = this[h](m, g);
            break;
          case "undefined":
            p = "";
            break;
          default:
            throw new Error("unexpected type in AST: " + typeof u);
        }
        return p;
      }
      concat(u) {
        let g = "";
        return u.forEach((p) => {
          g += p;
        }), g;
      }
      replace(u, g) {
        const p = parseInt(u[0], 10);
        return p < g.length ? g[p] : "$" + (p + 1);
      }
      plural(u) {
        const g = parseFloat(this.language.convertNumber(u[0], 10)), p = u.slice(1);
        return p.length ? this.language.convertPlural(g, p) : "";
      }
      gender(u) {
        const g = u[0], p = u.slice(1);
        return this.language.gender(g, p);
      }
      grammar(u) {
        const g = u[0], p = u[1];
        return p && g && this.language.convertGrammar(p, g);
      }
      wikilink(u) {
        let g, p = u[0];
        p.charAt(0) === ":" && (p = p.slice(1));
        const m = `./${p}`;
        return g = u.length === 1 ? p : u[1], `<a href="${m}" title="${p}">${g}</a>`;
      }
      extlink(u) {
        if (u.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${u[0]}">${u[1]}</a>`;
      }
      bidi(u) {
        const g = function(p) {
          const m = p.match(r);
          return m ? m[2] === void 0 ? "ltr" : "rtl" : null;
        }(u[0]);
        return g === "ltr" ? "‪" + u[0] + "‬" : g === "rtl" ? "‫" + u[0] + "‬" : u[0];
      }
      formatnum(u) {
        const g = !!u[1] && u[1] === "R", p = u[0];
        return typeof p == "string" || typeof p == "number" ? this.language.convertNumber(p, g) : p;
      }
      htmlattributes(u) {
        const g = {};
        for (let p = 0, m = u.length; p < m; p += 2)
          g[u[p]] = u[p + 1];
        return g;
      }
      htmlelement(u) {
        const g = u.shift(), p = u.shift();
        let m = u, h = "";
        for (const f in p)
          h += ` ${f}="${p[f]}"`;
        return Array.isArray(m) || (m = [m]), `<${g}${h}>${m.join("")}</${g}>`;
      }
    }
    class c {
      constructor(u, { wikilinks: g = !1 } = {}) {
        this.locale = u, this.wikilinks = g, this.emitter = new l(this.locale);
      }
      parse(u, g) {
        if (u.includes("{{") || u.includes("<") || this.wikilinks && u.includes("[")) {
          const p = function(m, { wikilinks: h = !1 } = {}) {
            let f = 0;
            function w(L) {
              return () => {
                for (let O = 0; O < L.length; O++) {
                  const Me = L[O]();
                  if (Me !== null)
                    return Me;
                }
                return null;
              };
            }
            function _(L) {
              const O = f, Me = [];
              for (let Et = 0; Et < L.length; Et++) {
                const W = L[Et]();
                if (W === null)
                  return f = O, null;
                Me.push(W);
              }
              return Me;
            }
            function x(L, O) {
              return () => {
                const Me = f, Et = [];
                let W = O();
                for (; W !== null; )
                  Et.push(W), W = O();
                return Et.length < L ? (f = Me, null) : Et;
              };
            }
            function k(L) {
              const O = L.length;
              return () => {
                let Me = null;
                return m.slice(f, f + O) === L && (Me = L, f += O), Me;
              };
            }
            function y(L) {
              return () => {
                const O = m.slice(f).match(L);
                return O === null ? null : (f += O[0].length, O[0]);
              };
            }
            const E = y(/^\s+/), S = k("|"), B = k(":"), V = k("\\"), A = y(/^./), I = k("$"), H = y(/^\d+/), ce = k('"'), Z = k("'"), oe = y(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), q = y(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), ee = w([Y, y(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function Y() {
              const L = _([V, A]);
              return L === null ? null : L[1];
            }
            const he = w([Y, q]), Pe = w([Y, oe]);
            function Be() {
              const L = _([I, H]);
              return L === null ? null : ["REPLACE", parseInt(L[1], 10) - 1];
            }
            const te = (nt = y(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), D = function(L) {
              return L.toString();
            }, () => {
              const L = nt();
              return L === null ? null : D(L);
            });
            var nt, D;
            function N() {
              const L = _([S, x(0, xs)]);
              if (L === null)
                return null;
              const O = L[1];
              return O.length > 1 ? ["CONCAT"].concat(O) : O[0];
            }
            function Q() {
              const L = _([te, B, Be]);
              return L === null ? null : [L[0], L[2]];
            }
            function v() {
              const L = _([te, B, xs]);
              return L === null ? null : [L[0], L[2]];
            }
            function F() {
              const L = _([te, B]);
              return L === null ? null : [L[0], ""];
            }
            const T = w([function() {
              const L = _([w([Q, v, F]), x(0, N)]);
              return L === null ? null : L[0].concat(L[1]);
            }, function() {
              const L = _([te, x(0, N)]);
              return L === null ? null : [L[0]].concat(L[1]);
            }]), M = k("{{"), G = k("}}"), pe = k("[["), j = k("]]"), z = k("["), ae = k("]");
            function st() {
              const L = _([M, T, G]);
              return L === null ? null : L[1];
            }
            const ke = w([function() {
              const L = _([x(1, xs), S, x(1, ys)]);
              return L === null ? null : [["CONCAT"].concat(L[0]), ["CONCAT"].concat(L[2])];
            }, function() {
              const L = _([x(1, xs)]);
              return L === null ? null : [["CONCAT"].concat(L[0])];
            }]);
            function Va() {
              let L = null;
              const O = _([pe, ke, j]);
              if (O !== null) {
                const Me = O[1];
                L = ["WIKILINK"].concat(Me);
              }
              return L;
            }
            function La() {
              let L = null;
              const O = _([z, x(1, xr), E, x(1, ys), ae]);
              return O !== null && (L = ["EXTLINK", O[1].length === 1 ? O[1][0] : ["CONCAT"].concat(O[1]), ["CONCAT"].concat(O[3])]), L;
            }
            const ns = y(/^[A-Za-z]+/);
            function Sr() {
              const L = y(/^[^"]*/), O = _([ce, L, ce]);
              return O === null ? null : O[1];
            }
            function yr() {
              const L = y(/^[^']*/), O = _([Z, L, Z]);
              return O === null ? null : O[1];
            }
            function lo() {
              const L = y(/^\s*=\s*/), O = _([E, ns, L, w([Sr, yr])]);
              return O === null ? null : [O[1], O[3]];
            }
            function co() {
              const L = x(0, lo)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], L);
            }
            const xr = w([st, Be, Va, La, function() {
              const L = x(1, ee)();
              return L === null ? null : L.join("");
            }]), ys = w([st, Be, Va, La, function() {
              let L = null;
              const O = f, Me = k("<"), Et = y(/^\/?/), W = y(/^\s*>/), rn = _([Me, ns, co, Et, W]);
              if (rn === null)
                return null;
              const Ln = f, mt = rn[1], bs = x(0, ys)(), br = f, Ou = _([k("</"), ns, W]);
              if (Ou === null)
                return ["CONCAT", m.slice(O, Ln)].concat(bs);
              const _w = f, Sw = Ou[1], ju = rn[2];
              if (function(ss, Aa, Cr, kr = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((ss = ss.toLowerCase()) !== (Aa = Aa.toLowerCase()) || kr.allowedHtmlElements.indexOf(ss) === -1)
                  return !1;
                const yw = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let Da = 0, xw = Cr.length; Da < xw; Da += 2) {
                  const $r = Cr[Da];
                  if (kr.allowedHtmlCommonAttributes.indexOf($r) === -1 && (kr.allowedHtmlAttributesByElement[ss] || []).indexOf($r) === -1 || $r === "style" && Cr[Da + 1].search(yw) !== -1)
                    return !1;
                }
                return !0;
              }(mt, Sw, ju.slice(1)))
                L = ["HTMLELEMENT", mt, ju].concat(bs);
              else {
                const ss = (Aa) => Aa.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                L = ["CONCAT", ss(m.slice(O, Ln))].concat(bs, ss(m.slice(br, _w)));
              }
              return L;
            }, function() {
              const L = x(1, Pe)();
              return L === null ? null : L.join("");
            }]), xs = w([st, Be, function() {
              const L = x(1, he)();
              return L === null ? null : L.join("");
            }]), Ta = function() {
              const L = x(0, ys)();
              return L === null ? null : ["CONCAT"].concat(L);
            }();
            if (Ta === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return Ta;
          }(u, { wikilinks: this.wikilinks });
          return this.emitter.emit(p, g);
        }
        return this.simpleParse(u, g);
      }
      simpleParse(u, g) {
        return u.replace(/\$(\d+)/g, (p, m) => {
          const h = parseInt(m, 10) - 1;
          return g[h] !== void 0 ? g[h] : "$" + m;
        });
      }
    }
    class d {
      constructor(u) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(u, g) {
        if (typeof u != "object")
          throw new Error("Invalid message source. Must be an object");
        if (g) {
          if (!/^[a-zA-Z0-9-]+$/.test(g))
            throw new Error(`Invalid locale ${g}`);
          for (const p in u)
            if (p.indexOf("@") !== 0) {
              if (typeof u[p] == "object")
                return this.load(u);
              if (typeof u[p] != "string")
                throw new Error(`Invalid message for message ${p} in ${g} locale.`);
              break;
            }
          this.sourceMap.has(g) ? this.sourceMap.set(g, Object.assign(this.sourceMap.get(g), u)) : this.sourceMap.set(g, u);
        } else
          for (g in u)
            this.load(u[g], g);
      }
      getMessage(u, g) {
        const p = this.sourceMap.get(g);
        return p ? p[u] : null;
      }
      hasLocale(u) {
        return this.sourceMap.has(u);
      }
    }
    return class {
      constructor(i, { finalFallback: u = "en", messages: g, wikilinks: p = !1 } = {}) {
        this.locale = i, this.parser = new c(this.locale, { wikilinks: p }), this.messageStore = new d(), g && this.load(g, this.locale), this.finalFallback = u, this.wikilinks = p;
      }
      load(i, u) {
        return this.messageStore.load(i, u || this.locale);
      }
      i18n(i, ...u) {
        return this.parser.parse(this.getMessage(i), u);
      }
      setLocale(i) {
        this.locale = i, this.parser = new c(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...s[this.locale] || [], this.finalFallback];
      }
      getMessage(i) {
        let u = this.locale, g = 0;
        const p = this.getFallbackLocales(this.locale);
        for (; u; ) {
          const m = u.split("-");
          let h = m.length;
          do {
            const f = m.slice(0, h).join("-"), w = this.messageStore.getMessage(i, f);
            if (typeof w == "string")
              return w;
            h--;
          } while (h);
          u = p[g], g++;
        }
        return i;
      }
      registerParserPlugin(i, u) {
        l.prototype[i] = u;
      }
    };
  });
})(Ah);
var n_ = Ah.exports;
const _d = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, Dh = Symbol("banana-context");
function ge() {
  const e = Z1(Dh);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function s_(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = e_(new n_(e.locale, e));
  return {
    install: (n) => {
      n.provide(Dh, t), n.config.globalProperties.$i18n = (s, o) => (o = o || [], Array.isArray(o) || (o = [o]), t.i18n(s, ...o)), n.provide("setLocale", (s) => {
        t.setLocale(s);
      }), n.directive("i18n", (s, o) => {
        const { msg: a, params: r } = _d(o);
        o.modifiers.html ? s.innerHTML = t.i18n(a, ...r) : s.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (s, o) => {
        const { msg: a, params: r } = _d(o);
        s.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const Vn = window.Vue.ref, o_ = window.Vue.computed, cr = Vn(null), ur = Vn(null), dr = Vn(null), ya = Vn(null), gu = Vn(null), gr = Vn(null), Ph = Vn(null), Bh = Vn(null), pu = Vn(null), { validateFilters: a_, filtersValidatorError: i_ } = du(), Fh = {
  from: cr,
  to: ur,
  section: ya,
  draft: gu,
  page: dr,
  revision: gr,
  "active-list": pu
}, r_ = o_(() => ({
  type: Ph.value,
  id: Bh.value
})), Mh = (e, t) => {
  Ph.value = e, Bh.value = t, sr("filter-type", e), t && sr("filter-id", t);
}, l_ = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof lr && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const s in n) {
    const o = n[s];
    t.set(s, o), Fh[s].value = o;
  }
  t.delete("title"), xa(Object.fromEntries(t));
}, mu = (e, t) => {
  Fh[e].value = t, sr(e, t);
}, c_ = (e) => {
  mu("section", e);
}, u_ = (e) => {
  mu("page", e);
}, d_ = (e) => {
  mu("active-list", e);
}, xa = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    O1(`Special:ContentTranslation${t}`, e)
  );
}, g_ = () => {
  const e = ge(), t = new URLSearchParams(location.search);
  dr.value = t.get("page"), cr.value = t.get("from"), ur.value = t.get("to"), ya.value = t.get("section"), gr.value = t.get("revision"), pu.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = a_({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  Mh(n.type, n.id), i_.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, p_ = () => {
  const e = new URLSearchParams(location.search);
  ya.value = null, e.delete("section"), e.delete("title"), xa(Object.fromEntries(e));
}, sr = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), xa(Object.fromEntries(n));
}, m_ = (e) => new URLSearchParams(location.search).get(e), h_ = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), cr.value = e, ur.value = t, n.delete("title"), xa(Object.fromEntries(n));
}, f_ = () => {
  const e = new URLSearchParams(location.search);
  dr.value = null, ya.value = null, gu.value = null, gr.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), xa(Object.fromEntries(e));
}, w_ = () => new URLSearchParams(location.search).get("force-quick-tutorial"), P = () => ({
  isQuickTutorialForced: w_,
  setLanguageURLParams: h_,
  setSectionURLParam: c_,
  setTranslationURLParams: l_,
  initializeURLState: g_,
  clearTranslationURLParameters: f_,
  clearSectionURLParameter: p_,
  setUrlParam: sr,
  getUrlParam: m_,
  pageURLParameter: dr,
  sourceLanguageURLParameter: cr,
  targetLanguageURLParameter: ur,
  sectionURLParameter: ya,
  draftURLParameter: gu,
  revisionURLParameter: gr,
  setPageURLParam: u_,
  currentSuggestionFilters: r_,
  setFilterURLParams: Mh,
  activeDashboardTabParameter: pu,
  setActiveDashboardTabParameter: d_
}), Nh = window.Vue.ref, Sd = Nh([]), yd = Nh([]);
let xd = !1;
function ba() {
  if (!xd) {
    const e = mw.config.get(
      "wgContentTranslationSupportedLanguages"
    );
    if (!e)
      throw new Error(
        "[CX] No supported languages found in mw.config for wgContentTranslationSupportedLanguages"
      );
    Sd.value = e, yd.value = e, xd = !0;
  }
  return {
    supportedSourceLanguageCodes: Sd,
    supportedTargetLanguageCodes: yd
  };
}
const v_ = {
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
}, __ = {
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
}, S_ = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], y_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, x_ = {
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
}, b_ = {
  languages: v_,
  scriptgroups: __,
  rtlscripts: S_,
  regiongroups: y_,
  territories: x_
};
var ze = b_;
function Ca(e) {
  return !!ze.languages[e];
}
function ts(e) {
  return Ca(e) && ze.languages[e].length === 1 ? ze.languages[e][0] : !1;
}
function C_() {
  return ze.languages;
}
function ka(e) {
  var t = ts(e);
  return t ? ka(t) : Ca(e) ? ze.languages[e][0] : "Zyyy";
}
function hu(e) {
  var t = ts(e);
  return t ? hu(t) : Ca(e) && ze.languages[e][1] || "UNKNOWN";
}
function wa(e) {
  var t = ts(e);
  return t ? wa(t) : Ca(e) && ze.languages[e][2] || e;
}
function k_() {
  var e, t = {};
  for (e in ze.languages)
    ts(e) || (t[e] = wa(e));
  return t;
}
function Uh(e) {
  var t, n, s = [];
  for (t in ze.languages)
    if (!ts(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === ka(t)) {
          s.push(t);
          break;
        }
    }
  return s;
}
function $_(e) {
  return Uh([e]);
}
function Ih(e) {
  var t;
  for (t in ze.scriptgroups)
    if (ze.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function fu(e) {
  return Ih(ka(e));
}
function Rh(e) {
  var t = {}, n, s, o, a;
  for (s = 0; s < e.length; s++)
    n = e[s], o = ts(n) || n, a = fu(o), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function zh(e) {
  var t, n, s, o = {};
  for (t in ze.languages)
    if (!ts(t)) {
      for (n = 0; n < e.length; n++)
        if (hu(t).includes(e[n])) {
          s = fu(t), o[s] === void 0 && (o[s] = []), o[s].push(t);
          break;
        }
    }
  return o;
}
function E_(e) {
  return zh([e]);
}
function V_(e) {
  var t, n, s, o = [];
  for (t = Rh(e), n = Object.keys(t).sort(), s = 0; s < n.length; s++)
    o = o.concat(t[n[s]]);
  return o;
}
function L_(e, t) {
  var n = wa(e) || e, s = wa(t) || t;
  return n.toLowerCase() < s.toLowerCase() ? -1 : 1;
}
function Oh(e) {
  return ze.rtlscripts.includes(ka(e));
}
function T_(e) {
  return Oh(e) ? "rtl" : "ltr";
}
function A_(e) {
  return ze.territories[e] || [];
}
function D_(e, t) {
  t.target ? ze.languages[e] = [t.target] : ze.languages[e] = [t.script, t.regions, t.autonym];
}
var R = {
  addLanguage: D_,
  getAutonym: wa,
  getAutonyms: k_,
  getDir: T_,
  getGroupOfScript: Ih,
  getLanguages: C_,
  getLanguagesByScriptGroup: Rh,
  getLanguagesByScriptGroupInRegion: E_,
  getLanguagesByScriptGroupInRegions: zh,
  getLanguagesInScript: $_,
  getLanguagesInScripts: Uh,
  getLanguagesInTerritory: A_,
  getRegions: hu,
  getScript: ka,
  getScriptGroupOfLanguage: fu,
  isKnown: Ca,
  isRedirect: ts,
  isRtl: Oh,
  sortByScriptGroup: V_,
  sortByAutonym: L_
};
const Cs = window.Vue.computed;
function De(e) {
  const t = Cs(() => e.state.application.sourceLanguage), n = Cs(() => e.state.application.targetLanguage), s = Cs(
    () => e.state.application.currentMTProvider
  ), o = Cs(
    () => R.getAutonym(t.value)
  ), a = Cs(
    () => R.getAutonym(n.value)
  ), r = Cs(() => e.state.application.previousRoute);
  return {
    currentMTProvider: s,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: o,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class eo {
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
    pageprops: c,
    pageviews: d,
    thumbnail: i = null,
    title: u,
    revisions: g,
    _alias: p,
    content: m = null,
    sections: h = []
  } = {}) {
    var f;
    this.language = l, this.title = u, this.pageId = r, this.description = t, this.image = o, this.imageName = a, this.pageprops = c, this.pageviews = d, this.thumbnail = i, this.langLinksCount = n, this.articleSize = (f = g == null ? void 0 : g[0]) == null ? void 0 : f.size, this.revision = s, this.alias = p, this.wikidataId = c == null ? void 0 : c.wikibase_item, this.content = m, this.sections = h;
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
class P_ {
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
function B_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const F_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), B_();
  const s = new ve.init.mw.MobileArticleTarget(n), o = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = s.createSurface(o);
  return a.setReadOnly(!0), s.surfaces.push(a), s.setSurface(a), a.initialize(), a;
}, M_ = (e, t) => {
  let n, s;
  return t ? (n = F_(e), s = n.$element.find(
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
}, N_ = (e, t) => {
  const n = Array.from(
    M_(e, t)
  );
  return U_(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (o) => {
      const [a, ...r] = o;
      let l;
      const c = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = !1 : (l = !0, r.unshift(a));
      const d = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (i) => new ut({
          sentences: I_(i),
          node: i
        })
      );
      return new Qn({ id: c, subSections: d, isLeadSection: l });
    }
  );
}, U_ = (e) => {
  const t = e.reduce((n, s) => {
    const o = s.dataset.mwSectionNumber;
    return n[o] = n[o] ? [...n[o], s] : [s], n;
  }, {});
  return Object.values(t);
}, I_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Kn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), jh = {
  convertSegmentedContentToPageSections: N_
}, wu = 120, R_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: wu,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return K.getApi(e).get(n).then((o) => {
    const a = o.query.pages, l = (o.query.redirects || []).reduce(
      (i, u) => Ke(ue({}, i), { [u.to]: u.from }),
      {}
    ), d = (o.query.normalized || []).reduce(
      (i, u) => Ke(ue({}, i), {
        [u.to]: u.from
      }),
      {}
    );
    return a.map((i) => {
      const u = d[i.title] || l[i.title] || null;
      return new eo(Ke(ue({}, i), { _alias: u }));
    });
  });
}, z_ = (e, t) => {
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
    var c, d;
    const a = o.query.pages;
    if (!a || !a.length || (c = a[0]) != null && c.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return l ? Object.freeze(new P_(l, r)) : null;
  });
}, O_ = (e, t, n) => {
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
    var c, d;
    return (d = (c = l.langlinks) == null ? void 0 : c[0]) == null ? void 0 : d["*"];
  }).filter((l) => !!l));
}, j_ = (e, t, n, s = null) => {
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
  ), a = H_(
    e,
    t,
    n,
    s
  );
  return Promise.all([a, o]).then(
    ([r, l]) => {
      const c = jh.convertSegmentedContentToPageSections(
        r,
        !1
        // No need to resolve references. Content can be used as it is
      );
      return c.forEach((d) => {
        const i = l.find((u) => u.id === d.id);
        d.originalTitle = (i == null ? void 0 : i.title) || "";
      }), new eo({
        sections: c,
        content: r,
        pagelanguage: e,
        title: n
      });
    }
  );
}, H_ = (e, t, n, s = null) => {
  const o = K.getWikiDomainCode(e), a = K.getWikiDomainCode(t), r = {
    $sourcelanguage: o,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  s && (r.$revision = s, l += "/$revision");
  const c = K.getCXServerUrl(
    l,
    r
  );
  return fetch(c).then((d) => d.json()).then((d) => d.segmentedContent);
}, q_ = (e) => {
  const t = j1();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: wu,
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
  }).then((s) => s.map((o) => new eo(o)));
}, G_ = (e, t) => {
  const s = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount|pageprops",
    piprop: "thumbnail",
    pithumbsize: wu,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return K.getApi(t).get(s).then((o) => {
    var a;
    return ((a = o.query) == null ? void 0 : a.pages) || [];
  }).then(
    (o) => o.filter((a) => !("disambiguation" in (a.pageprops || {}))).sort((a, r) => a.index - r.index).map(
      (a) => new eo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((o) => (mw.cx.eventlogging.stats.articleSearchFailed(), []));
}, _s = {
  fetchPages: R_,
  fetchLanguageTitles: z_,
  fetchPageContent: j_,
  fetchNearbyPages: q_,
  searchPagesByTitlePrefix: G_,
  fetchLanguageLinksForLanguage: O_
}, X_ = window.Vuex.useStore, to = () => {
  const e = X_();
  return (t, n) => {
    n = n.filter(
      (a) => !!a && !e.getters["mediawiki/getPage"](t, a)
    );
    const s = 50, o = [];
    for (let a = 0; a < n.length; a += s) {
      const r = n.slice(a, a + s), l = _s.fetchPages(t, r).then(
        (c) => c.forEach(
          (d) => e.commit("mediawiki/addPage", d)
        )
      );
      o.push(l);
    }
    return Promise.all(o);
  };
}, W_ = window.Vuex.useStore, vu = () => {
  const e = W_(), {
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
    sourceTitle: s,
    targetTitle: o,
    langLinksCount: a,
    wikidataId: r,
    size: l,
    leadSectionSize: c = null,
    suggestionSeed: d = null,
    suggestionProvider: i = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = s, this.targetTitle = o, this.wikidataId = r, this.size = l, this.leadSectionSize = c, this.langLinksCount = a, this.suggestionProvider = i, this.suggestionSeed = d, this.isListable = !0;
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
    sourceTitle: s,
    targetTitle: o,
    present: a,
    missing: r,
    sourceSectionInfo: l = {},
    sourceSectionSizes: c = {},
    sourceSections: d = [],
    targetSections: i = [],
    suggestionSeed: u = null,
    isListable: g = !0,
    suggestionProvider: p = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = s, this.targetTitle = o, this.missingSections = r, this.presentSections = a, this.sourceSectionInfo = l, this.sourceSectionSizes = c, this.sourceSections = d, this.targetSections = i, this.suggestionSeed = u, this.isListable = g, this.suggestionProvider = p;
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
const Hh = [
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
], K_ = [
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
], Y_ = [
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
], Q_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], J_ = [
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
], Z_ = {
  en: Hh,
  es: K_,
  bn: Y_,
  fr: Q_,
  de: J_
};
class Ys {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: s,
    missingSectionsCount: o = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = s, this.missingSectionsCount = o;
  }
}
class _u {
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
class qh extends Jn {
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
    suggestionProvider: c = null,
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
      suggestionProvider: c
    }), this.collection = new _u(d);
  }
}
class Gh extends nn {
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
    sourceSectionSizes: c,
    sourceSections: d = [],
    targetSections: i = [],
    isListable: u = !0,
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
      sourceSectionSizes: c,
      sourceSections: d,
      targetSections: i,
      isListable: u,
      suggestionProvider: g
    }), this.collection = new _u(p);
  }
}
let ja = null;
const Xh = (e) => {
  if (ja)
    return Promise.resolve(ja);
  const t = "https://en.wikipedia.org/w/api.php", n = new URLSearchParams({
    action: "query",
    meta: "globaluserinfo",
    guiuser: e,
    guiprop: "editcount",
    formatversion: 2,
    origin: "*",
    format: "json"
  }), s = t + "?" + n;
  return fetch(s).then((o) => o.json()).then((o) => (ja = o.query.globaluserinfo.editcount, ja)).catch((o) => {
    mw.log.error("Error while fetching global edit count for user. ", o);
  });
}, eS = (e) => e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits", tS = () => b(void 0, null, function* () {
  if (mw.user.isAnon())
    return !1;
  const e = mw.user.getName();
  return (yield Xh(e)) < 100;
}), Ge = {
  stub: "stub",
  easy: "easy",
  medium: "medium",
  hard: "hard",
  unknown: "unknown"
}, Wh = {
  easy: 2500,
  medium: 1e4,
  hard: 4e4
}, Yc = {
  easy: 1e3,
  medium: 4e3,
  hard: 12e3
}, Kh = (e, t) => !e || e < 0 ? Ge.unknown : e < t.easy ? Ge.stub : e < t.medium ? Ge.easy : e < t.hard ? Ge.medium : Ge.hard, Yh = (e) => Kh(e, Wh), Su = (e) => Kh(e, Yc), nS = (e) => {
  if (!e)
    return !1;
  const t = Yh(e);
  return t === Ge.stub || t === Ge.easy;
}, sS = (e) => {
  if (!e)
    return !1;
  const t = Su(e);
  return t === Ge.stub || t === Ge.easy;
}, Qh = (e) => e ? Su(e) === Ge.easy : !1, oS = Hh, aS = (e, t) => b(void 0, null, function* () {
  if (yield tS()) {
    let s;
    e ? e === "/sections" && (s = Yc) : (s = Wh, jt || (t.lead_section = !0, s = Yc)), s && (t.min_size = s[Ge.easy], t.max_size = s[Ge.medium] - 1);
  } else
    jt || (t.lead_section = !0);
}), Ht = (n) => b(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
  let s = mw.config.get("wgRecommendToolAPIURL");
  yield aS(e, t), e && (s += e);
  const o = new URL(s);
  Object.keys(t).forEach((a) => {
    t[a] && o.searchParams.append(a, t[a]);
  });
  try {
    const a = yield fetch(o);
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
function iS() {
  return b(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Ht({ urlPostfix: t, urlParams: e })) || [], s = {};
      for (const o in n)
        s[o] = n[o].map(
          (a) => new _u(a)
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
function rS(e, t, n = null, s = 24) {
  return b(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: s
    };
    return n && (o.seed = n), ((yield Ht({ urlParams: o })) || []).map(
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
const lS = (e, t) => b(void 0, null, function* () {
  return ((yield Ht({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (o) => new Jn({
      sourceTitle: o.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: o.wikidata_id,
      size: o.size,
      leadSectionSize: o.lead_section_size || null,
      langLinksCount: parseInt(o.langlinks_count)
    })
  );
}), cS = (e, t) => b(void 0, null, function* () {
  const o = (yield Ht({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return o && o.map(
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
}), uS = (e, t, n = null) => b(void 0, null, function* () {
  const s = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (s.seed = n), ((yield Ht({ urlParams: s })) || []).map(
    (a) => new qh({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), dS = (e, t, n = null) => b(void 0, null, function* () {
  const s = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (s.seed = n);
  const a = (yield Ht({ urlPostfix: "/sections", urlParams: s })) || [];
  return a && a.map(
    (r) => new Gh({
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
function gS(e, t, n) {
  return b(this, null, function* () {
    const s = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), o = K.getCXServerUrl(
      `/suggest/sections/${s.join("/")}?include_section_sizes=true`
    ), a = yield fetch(o).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new nn(a) : null;
  });
}
function pS(e, t, n = null) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: 24
    };
    n && (s.seed = n);
    const a = (yield Ht({ urlPostfix: "/sections", urlParams: s })) || [];
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
function mS(e, t, n, s = 24) {
  return b(this, null, function* () {
    const o = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: s
    };
    return ((yield Ht({ urlParams: o })) || []).map(
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
function hS(e, t, n, s = 24) {
  return b(this, null, function* () {
    const o = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: s
    }, r = (yield Ht({ urlPostfix: "/sections", urlParams: o })) || [];
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
function fS(e, t, n, s = 24) {
  return b(this, null, function* () {
    const o = {
      source: e,
      target: t,
      country: n.join("|"),
      count: s
    };
    return ((yield Ht({ urlParams: o })) || []).map(
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
function wS(e, t, n, s = 24) {
  return b(this, null, function* () {
    const o = {
      source: e,
      target: t,
      country: n.join("|"),
      count: s
    }, r = (yield Ht({ urlPostfix: "/sections", urlParams: o })) || [];
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
function vS(e) {
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
    }, n = K.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (s) {
      return mw.log.error("Error while fetching suggestion seeds", s), [];
    }
  });
}
function _S(e, t) {
  return b(this, null, function* () {
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
function SS(e) {
  const t = oS.map((s) => encodeURIComponent(s)).join("|"), n = K.getCXServerUrl(
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
const yS = (e, t, n) => {
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
}, xS = (e) => {
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
}, bS = () => {
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
    (n) => n.map((s) => new Ys(s))
  );
}, me = {
  fetchFavorites: bS,
  fetchPageSuggestions: rS,
  fetchSectionSuggestion: gS,
  fetchSectionSuggestions: pS,
  fetchAppendixTargetSectionTitles: SS,
  fetchArticleSections: _S,
  markFavorite: yS,
  unmarkFavorite: xS,
  fetchUserEdits: vS,
  fetchMostPopularPageSuggestions: lS,
  fetchMostPopularSectionSuggestions: cS,
  fetchPageSuggestionsByTopics: mS,
  fetchSectionSuggestionsByTopics: hS,
  fetchPageSuggestionsByCountries: fS,
  fetchSectionSuggestionsByCountries: wS,
  fetchPageCollectionGroups: iS,
  fetchPageSuggestionsByCollections: uS,
  fetchSectionSuggestionsByCollections: dS
}, CS = window.Vuex.useStore, no = () => {
  const e = CS(), { sourceLanguage: t, targetLanguage: n } = De(e), s = (l) => {
    if (!l)
      return !1;
    const c = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((u) => u.sourceTitle);
    return !c.includes(l.sourceTitle) && !i.includes(l.sourceTitle);
  }, o = (l) => {
    const { pageSuggestions: c } = e.state.suggestions;
    return !c.some(
      (i) => i.sourceLanguage === l.sourceLanguage && i.targetLanguage === l.targetLanguage && i.sourceTitle === l.sourceTitle
    ) && s(l);
  }, a = (l) => e.state.suggestions.sectionSuggestions.some(
    (c) => c.sourceLanguage === l.sourceLanguage && c.targetLanguage === l.targetLanguage && c.sourceTitle === l.sourceTitle
  );
  return {
    isPageSuggestionValid: o,
    isSectionSuggestionValid: (l) => {
      if (!l)
        return !1;
      const c = e.state.suggestions.appendixSectionTitles[n.value] || [];
      return !a(l) && s(l) && l.isValid(c);
    },
    sectionSuggestionExists: a
  };
};
class kS {
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
const $S = window.Vuex.useStore, yu = window.Vue.ref, ES = yu([]), VS = yu([]);
let Rr = !1, zr = !1, bd = !1;
const Ha = yu([]);
let po = null;
const Or = {
  page: ES,
  section: VS
}, Jh = () => {
  const e = $S(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), s = () => b(void 0, null, function* () {
    zr || (Ha.value = yield me.fetchUserEdits(t.value).then((d) => (zr = !0, d)));
  }), o = () => b(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !Rr)
      return Rr = !0, d.map(
        (i) => i.sourceTitle
      );
    if (Rr = !0, !zr && (yield s(), Ha.value.length > 0))
      return Ha.value;
    if (!bd) {
      const i = yield me.fetchUserEdits(n.value).then((u) => (bd = !0, u));
      if (i.length)
        return _s.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (d) => {
    let i = Or[d].value.find(
      (u) => u.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new kS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), Or[d].value.push(i)), i;
  }, r = () => b(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield o(), i || (d = !0);
      for (const u in Or) {
        const g = a(u);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), l = () => po || (po = r(), po.finally(() => {
    po = null;
  }));
  return {
    getSuggestionSeed: (d) => b(void 0, null, function* () {
      let i = a(d);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: s,
    previousEditsInSource: Ha
  };
}, LS = 5;
function vs(e) {
  return b(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < LS);
  });
}
const TS = window.Vuex.useStore, AS = () => {
  const e = TS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), { getSuggestionSeed: s } = Jh(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = no(), l = {
    id: on,
    type: Qe
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const u = [];
      return yield vs(() => b(void 0, null, function* () {
        const g = yield s("page");
        let p = yield me.fetchPageSuggestions(
          t.value,
          n.value,
          g || null
        );
        return p = p.filter(
          (m) => a(m)
        ), p = p.slice(0, i), u.push(...p), u.length >= i;
      })), u.forEach(
        (g) => g.suggestionProvider = l
      ), u;
    }),
    fetchSectionSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const u = [];
      return yield vs(() => b(void 0, null, function* () {
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
        return m = m.slice(0, i), u.push(...m), h.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), u.length >= i;
      })), u.forEach(
        (g) => g.suggestionProvider = l
      ), u;
    })
  };
}, DS = window.Vuex.useStore, PS = () => {
  const e = DS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = P(), s = {
    id: En,
    type: Qe
  }, {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = no();
  return { fetchSectionSuggestionsPopular: (d) => b(void 0, null, function* () {
    const i = [];
    return yield vs(() => b(void 0, null, function* () {
      const u = yield me.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let g = u.filter(
        (m) => o(m)
      );
      const p = u.filter(
        (m) => !o(m)
      );
      return g = g.slice(0, d), i.push(...g), p.forEach((m) => {
        m && !r(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.length >= d;
    })), i.forEach(
      (u) => u.suggestionProvider = s
    ), i;
  }), fetchPageSuggestionsPopular: (d) => b(void 0, null, function* () {
    const i = [];
    return yield vs(() => b(void 0, null, function* () {
      let u = yield me.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return u = u.filter(
        (g) => a(g)
      ), u = u.slice(0, d), i.push(...u), i.length >= d;
    })), i.forEach(
      (u) => u.suggestionProvider = s
    ), i;
  }) };
}, Zh = window.Vue.ref, mo = "ungrouped", Cd = Zh({}), kd = Zh(!1), xu = () => ({
  fetchPageCollectionGroups: () => b(void 0, null, function* () {
    try {
      const t = yield me.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((s, o) => s === mo ? 1 : o === mo ? -1 : s.localeCompare(o)).map((s) => [s, t[s]])
      );
      n[mo] && (n[mo] = n[mo].sort(
        (s, o) => s.name.localeCompare(o.name)
      )), Cd.value = n, kd.value = !0;
    } catch (t) {
      mw.log.error("Failed to fetch page collections", t);
    }
  }),
  pageCollectionGroupsFetched: kd,
  pageCollectionGroups: Cd
});
class pa {
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
const BS = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', FS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', MS = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', NS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', US = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', IS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', RS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', zS = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', OS = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', jS = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', HS = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', qS = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', GS = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', XS = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', WS = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', KS = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', YS = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', QS = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', JS = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', ef = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', ZS = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', ey = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', ty = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', ny = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', sy = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', oy = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', ay = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', iy = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', ry = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', ly = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', cy = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', uy = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', dy = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', gy = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', py = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', tf = BS, my = FS, nf = {
  ltr: MS,
  shouldFlip: !0
}, sf = {
  ltr: NS,
  shouldFlip: !0
}, bu = {
  ltr: US,
  shouldFlip: !0
}, of = IS, af = RS, rf = zS, hy = OS, fy = jS, so = HS, wy = qS, Cu = GS, ku = XS, Qc = WS, vy = KS, _y = {
  ltr: YS,
  shouldFlip: !0
}, Sy = {
  ltr: QS,
  shouldFlip: !0
}, yy = JS, xy = {
  langCodeMap: {
    ar: ef
  },
  default: ZS
}, by = {
  langCodeMap: {
    ar: ef
  },
  default: ey
}, lf = ty, pr = {
  ltr: ny,
  shouldFlip: !0
}, Cy = sy, ky = oy, oo = {
  ltr: ay,
  shouldFlip: !0
}, $u = {
  ltr: iy,
  shouldFlip: !0
}, $y = {
  ltr: ry,
  shouldFlip: !0
}, cf = ly, Ey = cy, Jc = uy, Vy = dy, Ly = gy, uf = py, Ty = {
  [on]: uf,
  [En]: yy,
  [ne]: bu
}, Ay = {
  [ne]: Sy,
  [$e]: Cy
};
class Ot {
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
    return Ty[this.provider] || null;
  }
  get expandableIcon() {
    return Ay[this.provider] || this.icon;
  }
}
const ho = window.Vue.computed, { topics: $d, regions: Ed } = mw.loader.require(
  "ext.cx.articlefilters"
), Dy = (e) => new pa({
  id: e.groupId,
  label: e.label,
  type: We,
  filters: e.topics.map(
    (t) => new Ot({
      id: t.topicId,
      label: t.label,
      type: We
    })
  )
}), mr = () => {
  const e = ge(), { currentSuggestionFilters: t, setFilterURLParams: n } = P(), { validateFilters: s, filtersValidatorError: o } = du(), a = new Ot({
    id: on,
    type: Qe,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), r = new Ot({
    id: En,
    type: Qe,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), l = new Ot({
    id: ne,
    type: Qe,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: c, pageCollectionGroupsFetched: d } = xu(), i = ho(() => {
    const S = new pa({
      id: Qe,
      type: Qe,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [a, r]
    });
    return Object.keys(c.value).length > 1 && S.filters.push(l), S;
  }), u = () => {
    const S = ue({}, c.value);
    delete S.ungrouped;
    const B = [];
    for (const A in S) {
      const I = S[A].map(
        (ce) => new Ot({
          id: ce.name,
          label: ce.name,
          type: ne
        })
      ), H = new Ot({
        id: A,
        label: A,
        type: ne,
        subFilters: I
      });
      B.push(H);
    }
    const V = (c.value.ungrouped || []).map(
      (A) => new Ot({
        id: A.name,
        label: A.name,
        type: ne
      })
    );
    return [...B, ...V];
  }, g = ho(
    () => new pa({
      id: ne,
      type: ne,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: u()
    })
  ), p = ho(() => new pa({
    id: $e,
    type: $e,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: Ed.map(
      (S) => new Ot({
        id: S.id,
        label: S.label,
        type: $e,
        subFilters: S.countries.map(
          (B) => new Ot({
            id: B.id,
            label: B.label,
            type: $e
          })
        )
      })
    )
  })), m = ho(() => {
    const S = [
      i.value,
      ...$d.map(Dy),
      p.value
    ];
    return g.value.filters.length && S.splice(1, 0, g.value), S;
  }), h = ho(
    () => [t.value.type, t.value.id].includes(
      ne
    ) && !d.value
  ), f = () => {
    if (h.value)
      return [];
    const S = _();
    return S.type === We || S.type === $e || S.type === xt || S.type === ne || S.id === ne ? [S, a] : [a, r];
  }, w = (S) => {
    n(S.type, S.id);
  }, _ = () => t.value.type === xt ? new Ot({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : m.value.flatMap((S) => S.filters).flatMap((S) => [S, ...S.subFilters || []]).find(x), x = (S) => t.value.id === S.id;
  return {
    allFilters: m,
    getFiltersSummary: f,
    selectFilter: w,
    isFilterSelected: x,
    getArticleTopics: (S) => {
      const V = $d.flatMap((A) => A.topics).find((A) => A.topicId === S);
      return V ? V.articletopics : [];
    },
    waitingForPageCollectionsFetch: h,
    findSelectedFilter: _,
    validateURLFilterWithCollections: () => {
      if (!d.value)
        return;
      const S = Object.values(c.value).flat(), B = s(
        {
          type: t.value.type,
          id: t.value.id
        },
        S
      );
      n(B.type, B.id), o.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (S) => {
      const B = Ed.find((V) => V.id === S);
      return B ? B.countries.map((V) => V.id) : [S];
    }
  };
}, Py = window.Vuex.useStore, By = () => {
  const e = Py(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = no(), { getArticleTopics: l } = mr();
  return {
    fetchPageSuggestionsByTopics: (i) => b(void 0, null, function* () {
      const u = s.value.id, g = {
        id: u,
        type: We
      }, p = l(u);
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
      const u = s.value.id, g = {
        id: u,
        type: We
      }, p = l(u), m = [];
      return yield vs(() => b(void 0, null, function* () {
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
}, Fy = window.Vuex.useStore, My = () => {
  const e = Fy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = no(), { getCountries: l } = mr();
  return {
    fetchPageSuggestionsByCountries: (i) => b(void 0, null, function* () {
      let u = yield me.fetchPageSuggestionsByCountries(
        t.value,
        n.value,
        l(s.value.id)
      );
      return u = u.filter(
        (g) => a(g)
      ), u = u.slice(0, i), u.forEach(
        (g) => g.suggestionProvider = s.value
      ), u;
    }),
    fetchSectionSuggestionsByCountries: (i) => b(void 0, null, function* () {
      const u = [];
      return yield vs(() => b(void 0, null, function* () {
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
        return p = p.slice(0, i), u.push(...p), m.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), u.length >= i;
      })), u.forEach(
        (g) => g.suggestionProvider = s.value
      ), u;
    })
  };
}, Ny = window.Vuex.useStore, Uy = window.Vue.computed, Iy = () => {
  const e = Ny(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), o = Uy(() => {
    var i;
    return ((i = s.value) == null ? void 0 : i.type) !== ne ? null : s.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: l
  } = no();
  return {
    fetchSectionSuggestionsByCollections: () => b(void 0, null, function* () {
      const i = [], u = yield me.fetchSectionSuggestionsByCollections(
        t.value,
        n.value,
        o.value
      );
      let g = u.filter(
        (m) => a(m)
      );
      const p = u.filter(
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
      let u = yield me.fetchPageSuggestionsByCollections(
        t.value,
        n.value,
        o.value
      );
      return u = u.filter(
        (g) => r(g)
      ), i.push(...u), i.forEach(
        (g) => g.suggestionProvider = s.value
      ), i;
    })
  };
}, Ry = window.Vuex.useStore, zy = () => {
  const e = Ry(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), {
    isSectionSuggestionValid: o,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = no();
  return {
    fetchPageSuggestionsBySeed: (d) => b(void 0, null, function* () {
      const i = s.value.id;
      let u = yield me.fetchPageSuggestions(
        t.value,
        n.value,
        i
      );
      return u = u.filter(
        (g) => a(g)
      ), u = u.slice(0, d), u.forEach(
        (g) => g.suggestionProvider = {
          id: i,
          type: xt
        }
      ), u;
    }),
    fetchSectionSuggestionsBySeed: (d) => b(void 0, null, function* () {
      const i = [], u = s.value.id;
      return yield vs(() => b(void 0, null, function* () {
        const g = yield me.fetchSectionSuggestions(
          t.value,
          n.value,
          u
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
          id: u,
          type: xt
        }
      ), i;
    })
  };
}, Oy = () => {
  const { currentSuggestionFilters: e } = P(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = AS(), { fetchPageSuggestionsPopular: s, fetchSectionSuggestionsPopular: o } = PS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = By(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: c
  } = My(), {
    fetchPageSuggestionsByCollections: d,
    fetchSectionSuggestionsByCollections: i
  } = Iy(), { fetchPageSuggestionsBySeed: u, fetchSectionSuggestionsBySeed: g } = zy(), p = {
    [on]: t,
    [En]: s,
    [ne]: d,
    [We]: a,
    [$e]: l,
    [xt]: u
  }, m = {
    [on]: n,
    [En]: o,
    [ne]: i,
    [We]: r,
    [$e]: c,
    [xt]: g
  }, h = (_) => _.type === Qe ? _.id : _.type;
  return {
    getCurrentPageSuggestionProvider: () => p[h(e.value)],
    getCurrentSectionSuggestionProvider: () => m[h(e.value)]
  };
}, jy = window.Vuex.useStore, Eu = () => {
  const e = jy(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = vu(), { sourceLanguageURLParameter: s } = P(), o = to(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: c
  } = Oy(), d = (g) => {
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
      const g = a(), m = yield c()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), d(m), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const g = r(), m = yield l()(
        g
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), d(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, Hy = window.Vuex.useStore, df = () => {
  const e = Hy();
  return (t) => b(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield me.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, qy = window.Vuex.useStore, gf = () => {
  const e = qy(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Eu(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: o } = vu(), { targetLanguageURLParameter: a } = P(), r = df();
  return () => b(void 0, null, function* () {
    const l = o(0), c = s(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, i = l.length === d, u = c.length === d;
    i && u || (yield r(a.value), t(), n());
  });
}, Gy = window.Vuex.useStore, jr = /* @__PURE__ */ new Map(), hr = () => {
  const e = Gy(), t = to();
  return (n, s, o) => b(void 0, null, function* () {
    const a = `${n}:${s}:${o}`;
    if (jr.has(a))
      return jr.get(a);
    const l = (() => b(void 0, null, function* () {
      let c = e.getters["suggestions/getSectionSuggestionsForArticle"](n, s, o);
      if (!c) {
        c = yield me.fetchSectionSuggestion(
          n,
          o,
          s
        );
        try {
          if (yield t(n, [o]), c)
            c.isListable = !1, e.commit("suggestions/addSectionSuggestion", c);
          else {
            const d = e.getters["mediawiki/getPage"](
              n,
              o
            );
            return new Jn({
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
      return c;
    }))();
    return jr.set(a, l), l;
  });
}, Vd = window.Vue.computed, Xy = window.Vuex.useStore, an = () => {
  const e = Xy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s
  } = P(), o = Vd(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      s.value
    )
  ), a = Vd(() => o.value ? o.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: o,
    targetPageExists: a,
    getCurrentTitleByLanguage: (l, c) => o.value.getTitleForLanguage(l) || o.value.getTitleForLanguage(c)
  };
}, pf = window.Vuex.useStore, { setLanguageURLParams: Wy } = P(), Vu = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), Wy(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, mf = () => {
  const e = pf(), t = gf();
  return (n, s) => {
    const { sourceLanguage: o, targetLanguage: a } = De(e);
    n === s && (n = a.value, s = o.value), Vu(e, n, s), t();
  };
}, Ky = () => {
  const e = pf(), t = hr(), { currentLanguageTitleGroup: n, targetPageExists: s } = an(), o = to();
  return (a, r) => b(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      setPageURLParam: d,
      clearSectionURLParameter: i
    } = P();
    a === r && (a = c.value, r = l.value);
    const u = n.value.getTitleForLanguage(a);
    Vu(e, a, r), d(u), s.value ? (i(), yield t(
      l.value,
      c.value,
      u
    )) : yield o(l.value, [u]);
  });
}, Yy = window.Vuex.useStore, Qy = window.Vue.ref, Ld = Qy(!1), hf = () => {
  const e = Yy(), { supportedSourceLanguageCodes: t, supportedTargetLanguageCodes: n } = ba(), { sourceLanguageURLParameter: s, targetLanguageURLParameter: o } = P(), a = () => {
    const l = K.getCurrentWikiLanguageCode(), c = (h) => t.value.includes(h), d = (h) => n.value.includes(h), i = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, u = [
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
    ], p = u.find(
      (h) => d(h)
    );
    return { sourceLanguage: g.find(
      (h) => c(h) && h !== p
    ), targetLanguage: p };
  };
  return { initializeApplicationLanguages: () => {
    const { sourceLanguage: l, targetLanguage: c } = a();
    Vu(e, l, c), Ld.value = !0;
  }, applicationLanguagesInitialized: Ld };
};
const Jy = window.Vue.resolveDynamicComponent, Td = window.Vue.openBlock, Ad = window.Vue.createBlock, Zy = window.Vue.Transition, fo = window.Vue.withCtx, wo = window.Vue.createVNode, ex = window.Vue.resolveComponent, Hr = window.Vue.unref, tx = window.Vuex.useStore, Dd = window.Vue.computed, nx = window.Vue.onMounted, sx = window.Vue.inject, ox = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = P(), { initializeApplicationLanguages: n } = hf();
    t(), n();
    const s = sx("breakpoints"), o = Dd(() => s.value.mobile), a = tx(), r = Dd(
      () => a.state.application.autoSavePending
    );
    return nx(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && $h.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((c) => {
          c instanceof Zs && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, c) => {
      const d = ex("router-view");
      return Td(), Ad(Hr($0), { id: "contenttranslation" }, {
        default: fo(() => [
          wo(Hr(U), { class: "cx-container" }, {
            default: fo(() => [
              wo(Hr(C), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: fo(() => [
                  wo(d, null, {
                    default: fo(({ Component: i, route: u }) => [
                      wo(Zy, {
                        name: o.value ? u.meta.transitionName : ""
                      }, {
                        default: fo(() => [
                          (Td(), Ad(Jy(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      wo(z1)
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
}, ax = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, ix = {
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
class ff {
  constructor({ id: t, type: n, question: s, url: o }) {
    this.id = t, this.type = n, this.question = s, this.url = o;
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
    type: s = "generic",
    status: o,
    details: a = null
  }) {
    this.text = t, this.title = n, this.type = s, this.status = o, this.details = a && new ff(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const Pd = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (o, a) => Ke(ue({}, o), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class rx {
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
    const t = Pd((o = this.user) == null ? void 0 : o.content), n = Pd((a = this.mt) == null ? void 0 : a.content);
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
class Lu extends cu {
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
    status: c,
    targetTitle: d,
    targetUrl: i,
    sectionTranslations: u
  }) {
    super({
      translationId: t,
      sourceTitle: n,
      sourceLanguage: s,
      targetLanguage: o,
      startTimestamp: a,
      lastUpdatedTimestamp: r,
      pageRevision: l,
      status: c,
      targetTitle: d
    }), this.targetUrl = i, this.sectionTranslations = u;
  }
}
const fr = mw.user.isAnon() ? void 0 : "user", wf = (e) => {
  if (e === "assertuserfailed")
    throw new Zs();
};
function vf(e, t = null) {
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
        (c) => new lr(Ke(ue({}, c), { status: e }))
      ) : r = a.map(
        (c) => new Lu(Ke(ue({}, c), { status: e }))
      ), (l = o.continue) != null && l.offset) {
        const c = yield vf(
          e,
          o.continue.offset
        );
        r = r.concat(c);
      }
      return r;
    }));
  });
}
function lx(e) {
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
      (a) => new rx(a)
    );
  });
}
function cx(e, t, n, s, o) {
  return b(this, null, function* () {
    if (!s)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== ie.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = K.getCXServerUrl(a);
    return fetch(r, {
      headers: { "Content-Type": "application/json", Authorization: o },
      method: "POST",
      body: JSON.stringify({ html: `<div>${s}</div>` })
    }).then(
      (l) => Promise.all([l.json(), Promise.resolve(l.ok)])
    ).then(([l, c]) => {
      var i, u;
      if (!c) {
        const g = l.detail || l.type || l.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(g);
      }
      return (u = (i = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(l.contents)) == null ? void 0 : i.groups) == null ? void 0 : u.content;
    }).catch((l) => Promise.reject(l));
  });
}
const ux = (e, t, n) => {
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
}, dx = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: s,
  targetSectionTitle: o,
  sourceLanguage: a,
  targetLanguage: r,
  revision: l,
  captchaId: c,
  captchaWord: d,
  publishTarget: i,
  sectionTranslationId: u,
  existingSectionTitle: g
}) => {
  const p = {
    assert: fr,
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
    sectiontranslationid: u,
    existingsectiontitle: g
  };
  return c && (p.captchaid = c, p.captchaword = d), new mw.Api().postWithToken("csrf", p).then((h) => {
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
    wf(h);
    let w;
    return f = f || {}, f.exception ? w = f.exception.message : f.error ? w = f.error.info : w = "Unknown error", {
      publishFeedbackMessage: new Zn({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, gx = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: s,
  sourceLanguage: o,
  targetLanguage: a,
  revision: r,
  units: l,
  sectionId: c,
  isSandbox: d,
  progress: i
}) => {
  const u = {
    assert: fr,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: r,
    sourcesectiontitle: n,
    targetsectiontitle: s,
    sourcelanguage: o,
    targetlanguage: a,
    content: JSON.stringify(l),
    sectionid: c,
    issandbox: d,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", u).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    wf(p);
    let h;
    return m.exception ? (h = m.exception.message, mw.cx.eventlogging.stats.saveFailure(!0)) : m.error ? (h = m.error.info, m.error.code && m.error.code.indexOf("internal_api_error") === 0 && mw.cx.eventlogging.stats.saveFailure(!0)) : (h = "Unknown error", mw.cx.eventlogging.stats.saveFailure(!0)), new Zn({ text: h, status: "error" });
  });
}, px = (e) => {
  const t = {
    assert: fr,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((s) => s.cxsplit.result === "success");
}, mx = () => {
  const e = {
    assert: fr,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new Lu(n.cxcheckunreviewed.translation)
  );
}, hx = (e, t, n) => {
  const s = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", s).then(() => !0).catch(() => !1);
}, fx = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, wx = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), bt = {
  fetchTranslations: vf,
  fetchTranslationUnits: lx,
  fetchSegmentTranslation: cx,
  parseTemplateWikitext: ux,
  publishTranslation: dx,
  saveTranslation: gx,
  deleteTranslation: hx,
  fetchTranslatorStats: wx,
  deleteCXTranslation: fx,
  splitTranslation: px,
  checkUnreviewedTranslations: mx
};
function vx(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield bt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const _x = {
  fetchTranslatorStats: vx
}, Sx = {
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
}, yx = {
  namespaced: !0,
  state: ax,
  getters: ix,
  actions: _x,
  mutations: Sx
}, xx = {
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
  appendixSectionTitles: Z_
}, bx = {
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
}, kx = {
  namespaced: !0,
  state: xx,
  getters: bx,
  actions: {},
  mutations: Cx
}, $x = {
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
}, Ex = {
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
  isValidProviderForTranslation: (e, t) => (n, s, o) => t.getSupportedMTProviders(n, s).includes(o) && o !== ie.EMPTY_TEXT_PROVIDER_KEY,
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
function Vx(s) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: o } = t.application;
    if ((r = n.nearbyPages[o]) != null && r.length)
      return;
    const a = yield _s.fetchNearbyPages(o);
    e("addNearbyPages", { language: o, pages: a });
  });
}
const Lx = { fetchNearbyPages: Vx }, Tx = {
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
}, Ax = {
  namespaced: !0,
  state: $x,
  getters: Ex,
  actions: Lx,
  mutations: Tx
}, Dx = {
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
}, Px = {
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
    const { sourceLanguage: n, targetLanguage: s } = e, o = ie.getStorageKey(
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
}, Bx = {
  namespaced: !0,
  state: Dx,
  mutations: Px
}, Fx = window.Vuex.createStore, Mx = Fx({
  modules: { translator: yx, suggestions: kx, mediawiki: Ax, application: Bx }
});
function Nx() {
  return _f().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function _f() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Ux = typeof Proxy == "function", Ix = "devtools-plugin:setup", Rx = "plugin:settings:set";
let ks, Zc;
function zx() {
  var e;
  return ks !== void 0 || (typeof window != "undefined" && window.performance ? (ks = !0, Zc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (ks = !0, Zc = global.perf_hooks.performance) : ks = !1), ks;
}
function Ox() {
  return zx() ? Zc.now() : Date.now();
}
class jx {
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
        return Ox();
      }
    }, n && n.on(Rx, (r, l) => {
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
      }), this.fallbacks[l](...c)) : (...c) => new Promise((d) => {
        this.targetQueue.push({
          method: l,
          args: c,
          resolve: d
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
function Hx(e, t) {
  const n = e, s = _f(), o = Nx(), a = Ux && n.enableEarlyProxy;
  if (o && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    o.emit(Ix, e, t);
  else {
    const r = a ? new jx(n, o) : null;
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
const Sf = window.Vue.getCurrentInstance, Qs = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const tn = window.Vue.computed, ma = window.Vue.unref, qx = window.Vue.watchEffect, yf = window.Vue.defineComponent, Gx = window.Vue.reactive, xf = window.Vue.h, qr = window.Vue.provide, Xx = window.Vue.ref, bf = window.Vue.watch, Wx = window.Vue.shallowRef, Kx = window.Vue.shallowReactive, Yx = window.Vue.nextTick, $n = typeof window != "undefined";
function Qx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const J = Object.assign;
function Gr(e, t) {
  const n = {};
  for (const s in t) {
    const o = t[s];
    n[s] = gt(o) ? o.map(e) : e(o);
  }
  return n;
}
const ha = () => {
}, gt = Array.isArray;
function X(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Jx = /\/$/, Zx = (e) => e.replace(Jx, "");
function Xr(e, t, n = "/") {
  let s, o = {}, a = "", r = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return l < c && l >= 0 && (c = -1), c > -1 && (s = t.slice(0, c), a = t.slice(c + 1, l > -1 ? l : t.length), o = e(a)), l > -1 && (s = s || t.slice(0, l), r = t.slice(l, t.length)), s = nb(s != null ? s : t, n), {
    fullPath: s + (a && "?") + a + r,
    path: s,
    query: o,
    hash: r
  };
}
function eb(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Bd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Fd(e, t, n) {
  const s = t.matched.length - 1, o = n.matched.length - 1;
  return s > -1 && s === o && es(t.matched[s], n.matched[o]) && Cf(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function es(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Cf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!tb(e[n], t[n]))
      return !1;
  return !0;
}
function tb(e, t) {
  return gt(e) ? Md(e, t) : gt(t) ? Md(t, e) : e === t;
}
function Md(e, t) {
  return gt(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t;
}
function nb(e, t) {
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
var va;
(function(e) {
  e.pop = "pop", e.push = "push";
})(va || (va = {}));
var fa;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(fa || (fa = {}));
function sb(e) {
  if (!e)
    if ($n) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Zx(e);
}
const ob = /^[^#]+#/;
function ab(e, t) {
  return e.replace(ob, "#") + t;
}
function ib(e, t) {
  const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  };
}
const wr = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function rb(e) {
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
    t = ib(o, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Nd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const eu = /* @__PURE__ */ new Map();
function lb(e, t) {
  eu.set(e, t);
}
function cb(e) {
  const t = eu.get(e);
  return eu.delete(e), t;
}
let ub = () => location.protocol + "//" + location.host;
function kf(e, t) {
  const { pathname: n, search: s, hash: o } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = o.includes(e.slice(a)) ? e.slice(a).length : 1, c = o.slice(l);
    return c[0] !== "/" && (c = "/" + c), Bd(c, "");
  }
  return Bd(n, e) + s + o;
}
function db(e, t, n, s) {
  let o = [], a = [], r = null;
  const l = ({ state: g }) => {
    const p = kf(e, location), m = n.value, h = t.value;
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
        type: va.pop,
        direction: f ? f > 0 ? fa.forward : fa.back : fa.unknown
      });
    });
  };
  function c() {
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
    g.state && g.replaceState(J({}, g.state, { scroll: wr() }), "");
  }
  function u() {
    for (const g of a)
      g();
    a = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", i);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", i, {
    passive: !0
  }), {
    pauseListeners: c,
    listen: d,
    destroy: u
  };
}
function Ud(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? wr() : null
  };
}
function gb(e) {
  const { history: t, location: n } = window, s = {
    value: kf(e, n)
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
  function a(c, d, i) {
    const u = e.indexOf("#"), g = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + c : ub() + e + c;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), o.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? X("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(c, d) {
    const i = J({}, t.state, Ud(
      o.value.back,
      // keep back and forward entries but override current position
      c,
      o.value.forward,
      !0
    ), d, { position: o.value.position });
    a(c, i, !0), s.value = c;
  }
  function l(c, d) {
    const i = J(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      o.value,
      t.state,
      {
        forward: c,
        scroll: wr()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && X(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const u = J({}, Ud(s.value, c, null), { position: i.position + 1 }, d);
    a(c, u, !1), s.value = c;
  }
  return {
    location: s,
    state: o,
    push: l,
    replace: r
  };
}
function pb(e) {
  e = sb(e);
  const t = gb(e), n = db(e, t.state, t.location, t.replace);
  function s(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const o = J({
    // it's overridden right after
    location: "",
    base: e,
    go: s,
    createHref: ab.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function mb(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && X(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), pb(e);
}
function hb(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function $f(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const An = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, tu = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var Id;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Id || (Id = {}));
const fb = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${vb(t)}" via a navigation guard.`;
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
function Js(e, t) {
  return {}.NODE_ENV !== "production" ? J(new Error(fb[e](t)), {
    type: e,
    [tu]: !0
  }, t) : J(new Error(), {
    type: e,
    [tu]: !0
  }, t);
}
function ln(e, t) {
  return e instanceof Error && tu in e && (t == null || !!(e.type & t));
}
const wb = ["params", "query", "hash"];
function vb(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of wb)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Rd = "[^/]+?", _b = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Sb = /[.+*?^${}()[\]/\\]/g;
function yb(e, t) {
  const n = J({}, _b, t), s = [];
  let o = n.start ? "^" : "";
  const a = [];
  for (const d of e) {
    const i = d.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !d.length && (o += "/");
    for (let u = 0; u < d.length; u++) {
      const g = d[u];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        u || (o += "/"), o += g.value.replace(Sb, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: w } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const _ = w || Rd;
        if (_ !== Rd) {
          p += 10;
          try {
            new RegExp(`(${_})`);
          } catch (k) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${_}): ` + k.message);
          }
        }
        let x = h ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        u || (x = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && d.length < 2 ? `(?:/${x})` : "/" + x), f && (x += "?"), o += x, p += 20, f && (p += -8), h && (p += -20), _ === ".*" && (p += -50);
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
    const i = d.match(r), u = {};
    if (!i)
      return null;
    for (let g = 1; g < i.length; g++) {
      const p = i[g] || "", m = a[g - 1];
      u[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return u;
  }
  function c(d) {
    let i = "", u = !1;
    for (const g of e) {
      (!u || !i.endsWith("/")) && (i += "/"), u = !1;
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
              g.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : u = !0);
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
    stringify: c
  };
}
function xb(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s)
      return s;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function bb(e, t) {
  let n = 0;
  const s = e.score, o = t.score;
  for (; n < s.length && n < o.length; ) {
    const a = xb(s[n], o[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (zd(s))
      return 1;
    if (zd(o))
      return -1;
  }
  return o.length - s.length;
}
function zd(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Cb = {
  type: 0,
  value: ""
}, kb = /[a-zA-Z0-9_]/;
function $b(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Cb]];
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
  let l = 0, c, d = "", i = "";
  function u() {
    d && (n === 0 ? a.push({
      type: 0,
      value: d
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: d,
      regexp: i,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), d = "");
  }
  function g() {
    d += c;
  }
  for (; l < e.length; ) {
    if (c = e[l++], c === "\\" && n !== 2) {
      s = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (d && u(), r()) : c === ":" ? (u(), n = 1) : g();
        break;
      case 4:
        g(), n = s;
        break;
      case 1:
        c === "(" ? n = 2 : kb.test(c) ? g() : (u(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")" ? i[i.length - 1] == "\\" ? i = i.slice(0, -1) + c : n = 3 : i += c;
        break;
      case 3:
        u(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--, i = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), u(), r(), o;
}
function Eb(e, t, n) {
  const s = yb($b(e.path), n);
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
function Vb(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  t = Hd({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(i) {
    return s.get(i);
  }
  function a(i, u, g) {
    const p = !g, m = Lb(i);
    ({}).NODE_ENV !== "production" && Pb(m, u), m.aliasOf = g && g.record;
    const h = Hd(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const x = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const k of x)
        f.push(J({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: g ? g.record.components : m.components,
          path: k,
          // we might be the child of an alias
          aliasOf: g ? g.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let w, _;
    for (const x of f) {
      const { path: k } = x;
      if (u && k[0] !== "/") {
        const y = u.record.path, E = y[y.length - 1] === "/" ? "" : "/";
        x.path = u.record.path + (k && E + k);
      }
      if ({}.NODE_ENV !== "production" && x.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (w = Eb(x, u, h), {}.NODE_ENV !== "production" && u && k[0] === "/" && Bb(w, u), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && Db(g, w)) : (_ = _ || w, _ !== w && _.alias.push(w), p && i.name && !jd(w) && r(i.name)), m.children) {
        const y = m.children;
        for (let E = 0; E < y.length; E++)
          a(y[E], w, g && g.children[E]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && c(w);
    }
    return _ ? () => {
      r(_);
    } : ha;
  }
  function r(i) {
    if ($f(i)) {
      const u = s.get(i);
      u && (s.delete(i), n.splice(n.indexOf(u), 1), u.children.forEach(r), u.alias.forEach(r));
    } else {
      const u = n.indexOf(i);
      u > -1 && (n.splice(u, 1), i.record.name && s.delete(i.record.name), i.children.forEach(r), i.alias.forEach(r));
    }
  }
  function l() {
    return n;
  }
  function c(i) {
    let u = 0;
    for (; u < n.length && bb(i, n[u]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[u].record.path || !Ef(i, n[u])); )
      u++;
    n.splice(u, 0, i), i.record.name && !jd(i) && s.set(i.record.name, i);
  }
  function d(i, u) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = s.get(i.name), !g)
        throw Js(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const _ = Object.keys(i.params || {}).filter((x) => !g.keys.find((k) => k.name === x));
        _.length && X(`Discarded invalid param(s) "${_.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = J(
        // paramsFromLocation is a new object
        Od(
          u.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((_) => !_.optional).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Od(i.params, g.keys.map((_) => _.name))
      ), m = g.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && X(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((_) => _.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = u.name ? s.get(u.name) : n.find((_) => _.re.test(u.path)), !g)
        throw Js(1, {
          location: i,
          currentLocation: u
        });
      h = g.record.name, p = J({}, u.params, i.params), m = g.stringify(p);
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
      meta: Ab(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: l, getRecordMatcher: o };
}
function Od(e, t) {
  const n = {};
  for (const s of t)
    s in e && (n[s] = e[s]);
  return n;
}
function Lb(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Tb(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Tb(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const s in e.components)
      t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function jd(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Ab(e) {
  return e.reduce((t, n) => J(t, n.meta), {});
}
function Hd(e, t) {
  const n = {};
  for (const s in e)
    n[s] = s in t ? t[s] : e[s];
  return n;
}
function nu(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Db(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(nu.bind(null, n)))
      return X(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(nu.bind(null, n)))
      return X(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Pb(e, t) {
  t && t.record.name && !e.name && !e.path && X(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Bb(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(nu.bind(null, n)))
      return X(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Ef(e, t) {
  return t.children.some((n) => n === e || Ef(e, n));
}
const Vf = /#/g, Fb = /&/g, Mb = /\//g, Nb = /=/g, Ub = /\?/g, Lf = /\+/g, Ib = /%5B/g, Rb = /%5D/g, Tf = /%5E/g, zb = /%60/g, Af = /%7B/g, Ob = /%7C/g, Df = /%7D/g, jb = /%20/g;
function Tu(e) {
  return encodeURI("" + e).replace(Ob, "|").replace(Ib, "[").replace(Rb, "]");
}
function Hb(e) {
  return Tu(e).replace(Af, "{").replace(Df, "}").replace(Tf, "^");
}
function su(e) {
  return Tu(e).replace(Lf, "%2B").replace(jb, "+").replace(Vf, "%23").replace(Fb, "%26").replace(zb, "`").replace(Af, "{").replace(Df, "}").replace(Tf, "^");
}
function qb(e) {
  return su(e).replace(Nb, "%3D");
}
function Gb(e) {
  return Tu(e).replace(Vf, "%23").replace(Ub, "%3F");
}
function Xb(e) {
  return e == null ? "" : Gb(e).replace(Mb, "%2F");
}
function _a(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && X(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Wb(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < s.length; ++o) {
    const a = s[o].replace(Lf, " "), r = a.indexOf("="), l = _a(r < 0 ? a : a.slice(0, r)), c = r < 0 ? null : _a(a.slice(r + 1));
    if (l in t) {
      let d = t[l];
      gt(d) || (d = t[l] = [d]), d.push(c);
    } else
      t[l] = c;
  }
  return t;
}
function qd(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (n = qb(n), s == null) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (gt(s) ? s.map((a) => a && su(a)) : [s && su(s)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function Kb(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 && (t[n] = gt(s) ? s.map((o) => o == null ? null : "" + o) : s == null ? s : "" + s);
  }
  return t;
}
const Yb = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Gd = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), vr = Symbol({}.NODE_ENV !== "production" ? "router" : ""), Pf = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), ou = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function vo() {
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
function Yn(e, t, n, s, o) {
  const a = s && // name is defined if record is because of the function overload
  (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
  return () => new Promise((r, l) => {
    const c = (u) => {
      u === !1 ? l(Js(4, {
        from: n,
        to: t
      })) : u instanceof Error ? l(u) : hb(u) ? l(Js(2, {
        from: t,
        to: u
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      s.enterCallbacks[o] === a && typeof u == "function" && a.push(u), r());
    }, d = e.call(s && s.instances[o], t, n, {}.NODE_ENV !== "production" ? Qb(c, t, n) : c);
    let i = Promise.resolve(d);
    if (e.length < 3 && (i = i.then(c)), {}.NODE_ENV !== "production" && e.length > 2) {
      const u = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof d == "object" && "then" in d)
        i = i.then((g) => c._called ? g : (X(u), Promise.reject(new Error("Invalid navigation guard"))));
      else if (d !== void 0 && !c._called) {
        X(u), l(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((u) => l(u));
  });
}
function Qb(e, t, n) {
  let s = 0;
  return function() {
    s++ === 1 && X(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, s === 1 && e.apply(null, arguments);
  };
}
function Wr(e, t, n, s) {
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
          const c = l;
          l = () => c;
        } else
          l.__asyncLoader && // warn only once per component
          !l.__warnedDefineAsync && (l.__warnedDefineAsync = !0, X(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (Jb(l)) {
          const d = (l.__vccOpts || l)[t];
          d && o.push(Yn(d, n, s, a, r));
        } else {
          let c = l();
          ({}).NODE_ENV !== "production" && !("catch" in c) && (X(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), o.push(() => c.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Qx(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && Yn(g, n, s, a, r)();
          }));
        }
    }
  }
  return o;
}
function Jb(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Xd(e) {
  const t = Qs(vr), n = Qs(Pf), s = tn(() => t.resolve(ma(e.to))), o = tn(() => {
    const { matched: c } = s.value, { length: d } = c, i = c[d - 1], u = n.matched;
    if (!i || !u.length)
      return -1;
    const g = u.findIndex(es.bind(null, i));
    if (g > -1)
      return g;
    const p = Wd(c[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Wd(i) === p && // avoid comparing the child with its parent
      u[u.length - 1].path !== p ? u.findIndex(es.bind(null, c[d - 2])) : g
    );
  }), a = tn(() => o.value > -1 && nC(n.params, s.value.params)), r = tn(() => o.value > -1 && o.value === n.matched.length - 1 && Cf(n.params, s.value.params));
  function l(c = {}) {
    return tC(c) ? t[ma(e.replace) ? "replace" : "push"](
      ma(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ha) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && $n) {
    const c = Sf();
    if (c) {
      const d = {
        route: s.value,
        isActive: a.value,
        isExactActive: r.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(d), qx(() => {
        d.route = s.value, d.isActive = a.value, d.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: tn(() => s.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const Zb = /* @__PURE__ */ yf({
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
  useLink: Xd,
  setup(e, { slots: t }) {
    const n = Gx(Xd(e)), { options: s } = Qs(vr), o = tn(() => ({
      [Kd(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Kd(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : xf("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: o.value
      }, a);
    };
  }
}), eC = Zb;
function tC(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function nC(e, t) {
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
function Wd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Kd = (e, t, n) => e != null ? e : t != null ? t : n, sC = /* @__PURE__ */ yf({
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
    ({}).NODE_ENV !== "production" && aC();
    const s = Qs(ou), o = tn(() => e.route || s.value), a = Qs(Gd, 0), r = tn(() => {
      let d = ma(a);
      const { matched: i } = o.value;
      let u;
      for (; (u = i[d]) && !u.components; )
        d++;
      return d;
    }), l = tn(() => o.value.matched[r.value]);
    qr(Gd, tn(() => r.value + 1)), qr(Yb, l), qr(ou, o);
    const c = Xx();
    return bf(() => [c.value, l.value, e.name], ([d, i, u], [g, p, m]) => {
      i && (i.instances[u] = d, p && p !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !es(i, p) || !g) && (i.enterCallbacks[u] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = o.value, i = e.name, u = l.value, g = u && u.components[i];
      if (!g)
        return Yd(n.default, { Component: g, route: d });
      const p = u.props[i], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = xf(g, J({}, m, t, {
        onVnodeUnmounted: (w) => {
          w.component.isUnmounted && (u.instances[i] = null);
        },
        ref: c
      }));
      if ({}.NODE_ENV !== "production" && $n && f.ref) {
        const w = {
          depth: r.value,
          name: u.name,
          path: u.path,
          meta: u.meta
        };
        (gt(f.ref) ? f.ref.map((x) => x.i) : [f.ref.i]).forEach((x) => {
          x.__vrv_devtools = w;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Yd(n.default, { Component: f, route: d }) || f
      );
    };
  }
});
function Yd(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const oC = sC;
function aC() {
  const e = Sf(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
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
function _o(e, t) {
  const n = J({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((s) => mC(s, ["instances", "children", "aliasOf"]))
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
function qa(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let iC = 0;
function rC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const s = iC++;
  Hx({
    id: "org.vuejs.router" + (s ? "." + s : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (o) => {
    typeof o.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), o.on.inspectComponent((i, u) => {
      i.instanceData && i.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: _o(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: i, componentInstance: u }) => {
      if (u.__vrv_devtools) {
        const g = u.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Bf
        });
      }
      gt(u.__vrl_devtools) && (u.__devtoolsApi = o, u.__vrl_devtools.forEach((g) => {
        let p = Nf, m = "";
        g.isExactActive ? (p = Mf, m = "This is exactly active") : g.isActive && (p = Ff, m = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), bf(t.currentRoute, () => {
      c(), o.notifyComponentUpdate(), o.sendInspectorTree(l), o.sendInspectorState(l);
    });
    const a = "router:navigations:" + s;
    o.addTimelineLayer({
      id: a,
      label: `Router${s ? " " + s : ""} Navigations`,
      color: 4237508
    }), t.onError((i, u) => {
      o.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: u.fullPath,
          logType: "error",
          time: o.now(),
          data: { error: i },
          groupId: u.meta.__navigationId
        }
      });
    });
    let r = 0;
    t.beforeEach((i, u) => {
      const g = {
        guard: qa("beforeEach"),
        from: _o(u, "Current Location during this navigation"),
        to: _o(i, "Target location")
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
    }), t.afterEach((i, u, g) => {
      const p = {
        guard: qa("afterEach")
      };
      g ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, p.status = qa("❌")) : p.status = qa("✅"), p.from = _o(u, "Current Location during this navigation"), p.to = _o(i, "Target location"), o.addTimelineEvent({
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
    function c() {
      if (!d)
        return;
      const i = d;
      let u = n.getRoutes().filter((g) => !g.parent);
      u.forEach(Rf), i.filter && (u = u.filter((g) => (
        // save matches state based on the payload
        au(g, i.filter.toLowerCase())
      ))), u.forEach((g) => If(g, t.currentRoute.value)), i.rootNodes = u.map(Uf);
    }
    let d;
    o.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === l && c();
    }), o.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: cC(g)
        });
      }
    }), o.sendInspectorTree(l), o.sendInspectorState(l);
  });
}
function lC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function cC(e) {
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
        display: e.keys.map((s) => `${s.name}${lC(s)}`).join(" "),
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
const Bf = 15485081, Ff = 2450411, Mf = 8702998, uC = 2282478, Nf = 16486972, dC = 6710886;
function Uf(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: uC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Nf
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Bf
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Mf
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Ff
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: dC
  });
  let s = n.__vd_id;
  return s == null && (s = String(gC++), n.__vd_id = s), {
    id: s,
    label: n.path,
    tags: t,
    children: e.children.map(Uf)
  };
}
let gC = 0;
const pC = /^\/(.*)\/([a-z]*)$/;
function If(e, t) {
  const n = t.matched.length && es(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((s) => es(s, e.record))), e.children.forEach((s) => If(s, t));
}
function Rf(e) {
  e.__vd_match = !1, e.children.forEach(Rf);
}
function au(e, t) {
  const n = String(e.re).match(pC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => au(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const o = e.record.path.toLowerCase(), a = _a(o);
  return !t.startsWith("/") && (a.includes(t) || o.includes(t)) || a.startsWith(t) || o.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => au(r, t));
}
function mC(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || (n[s] = e[s]);
  return n;
}
function hC(e) {
  const t = Vb(e.routes, e), n = e.parseQuery || Wb, s = e.stringifyQuery || qd, o = e.history;
  if ({}.NODE_ENV !== "production" && !o)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = vo(), r = vo(), l = vo(), c = Wx(An);
  let d = An;
  $n && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Gr.bind(null, (v) => "" + v), u = Gr.bind(null, Xb), g = (
    // @ts-expect-error: intentionally avoid the type check
    Gr.bind(null, _a)
  );
  function p(v, F) {
    let T, M;
    return $f(v) ? (T = t.getRecordMatcher(v), M = F) : M = v, t.addRoute(M, T);
  }
  function m(v) {
    const F = t.getRecordMatcher(v);
    F ? t.removeRoute(F) : {}.NODE_ENV !== "production" && X(`Cannot remove non-existent route "${String(v)}"`);
  }
  function h() {
    return t.getRoutes().map((v) => v.record);
  }
  function f(v) {
    return !!t.getRecordMatcher(v);
  }
  function w(v, F) {
    if (F = J({}, F || c.value), typeof v == "string") {
      const z = Xr(n, v, F.path), ae = t.resolve({ path: z.path }, F), st = o.createHref(z.fullPath);
      return {}.NODE_ENV !== "production" && (st.startsWith("//") ? X(`Location "${v}" resolved to "${st}". A resolved location cannot start with multiple slashes.`) : ae.matched.length || X(`No match found for location with path "${v}"`)), J(z, ae, {
        params: g(ae.params),
        hash: _a(z.hash),
        redirectedFrom: void 0,
        href: st
      });
    }
    let T;
    if ("path" in v)
      ({}).NODE_ENV !== "production" && "params" in v && !("name" in v) && // @ts-expect-error: the type is never
      Object.keys(v.params).length && X(`Path "${v.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), T = J({}, v, {
        path: Xr(n, v.path, F.path).path
      });
    else {
      const z = J({}, v.params);
      for (const ae in z)
        z[ae] == null && delete z[ae];
      T = J({}, v, {
        params: u(z)
      }), F.params = u(F.params);
    }
    const M = t.resolve(T, F), G = v.hash || "";
    ({}).NODE_ENV !== "production" && G && !G.startsWith("#") && X(`A \`hash\` should always start with the character "#". Replace "${G}" with "#${G}".`), M.params = i(g(M.params));
    const pe = eb(s, J({}, v, {
      hash: Hb(G),
      path: M.path
    })), j = o.createHref(pe);
    return {}.NODE_ENV !== "production" && (j.startsWith("//") ? X(`Location "${v}" resolved to "${j}". A resolved location cannot start with multiple slashes.`) : M.matched.length || X(`No match found for location with path "${"path" in v ? v.path : v}"`)), J({
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
        s === qd ? Kb(v.query) : v.query || {}
      )
    }, M, {
      redirectedFrom: void 0,
      href: j
    });
  }
  function _(v) {
    return typeof v == "string" ? Xr(n, v, c.value.path) : J({}, v);
  }
  function x(v, F) {
    if (d !== v)
      return Js(8, {
        from: F,
        to: v
      });
  }
  function k(v) {
    return S(v);
  }
  function y(v) {
    return k(J(_(v), { replace: !0 }));
  }
  function E(v) {
    const F = v.matched[v.matched.length - 1];
    if (F && F.redirect) {
      const { redirect: T } = F;
      let M = typeof T == "function" ? T(v) : T;
      if (typeof M == "string" && (M = M.includes("?") || M.includes("#") ? M = _(M) : (
        // force empty params
        { path: M }
      ), M.params = {}), {}.NODE_ENV !== "production" && !("path" in M) && !("name" in M))
        throw X(`Invalid redirect found:
${JSON.stringify(M, null, 2)}
 when navigating to "${v.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return J({
        query: v.query,
        hash: v.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in M ? {} : v.params
      }, M);
    }
  }
  function S(v, F) {
    const T = d = w(v), M = c.value, G = v.state, pe = v.force, j = v.replace === !0, z = E(T);
    if (z)
      return S(
        J(_(z), {
          state: typeof z == "object" ? J({}, G, z.state) : G,
          force: pe,
          replace: j
        }),
        // keep original redirectedFrom if it exists
        F || T
      );
    const ae = T;
    ae.redirectedFrom = F;
    let st;
    return !pe && Fd(s, M, T) && (st = Js(16, { to: ae, from: M }), Be(
      M,
      M,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (st ? Promise.resolve(st) : A(ae, M)).catch((ke) => ln(ke) ? (
      // navigation redirects still mark the router as ready
      ln(
        ke,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? ke : Pe(ke)
    ) : (
      // reject any unknown error
      Y(ke, ae, M)
    )).then((ke) => {
      if (ke) {
        if (ln(
          ke,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Fd(s, w(ke.to), ae) && // and we have done it a couple of times
          F && // @ts-expect-error: added only in dev
          (F._count = F._count ? (
            // @ts-expect-error
            F._count + 1
          ) : 1) > 30 ? (X(`Detected a possibly infinite redirection in a navigation guard when going from "${M.fullPath}" to "${ae.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : S(
            // keep options
            J({
              // preserve an existing replacement but allow the redirect to override it
              replace: j
            }, _(ke.to), {
              state: typeof ke.to == "object" ? J({}, G, ke.to.state) : G,
              force: pe
            }),
            // preserve the original redirectedFrom if any
            F || ae
          );
      } else
        ke = H(ae, M, !0, j, G);
      return I(ae, M, ke), ke;
    });
  }
  function B(v, F) {
    const T = x(v, F);
    return T ? Promise.reject(T) : Promise.resolve();
  }
  function V(v) {
    const F = D.values().next().value;
    return F && typeof F.runWithContext == "function" ? F.runWithContext(v) : v();
  }
  function A(v, F) {
    let T;
    const [M, G, pe] = fC(v, F);
    T = Wr(M.reverse(), "beforeRouteLeave", v, F);
    for (const z of M)
      z.leaveGuards.forEach((ae) => {
        T.push(Yn(ae, v, F));
      });
    const j = B.bind(null, v, F);
    return T.push(j), Q(T).then(() => {
      T = [];
      for (const z of a.list())
        T.push(Yn(z, v, F));
      return T.push(j), Q(T);
    }).then(() => {
      T = Wr(G, "beforeRouteUpdate", v, F);
      for (const z of G)
        z.updateGuards.forEach((ae) => {
          T.push(Yn(ae, v, F));
        });
      return T.push(j), Q(T);
    }).then(() => {
      T = [];
      for (const z of pe)
        if (z.beforeEnter)
          if (gt(z.beforeEnter))
            for (const ae of z.beforeEnter)
              T.push(Yn(ae, v, F));
          else
            T.push(Yn(z.beforeEnter, v, F));
      return T.push(j), Q(T);
    }).then(() => (v.matched.forEach((z) => z.enterCallbacks = {}), T = Wr(pe, "beforeRouteEnter", v, F), T.push(j), Q(T))).then(() => {
      T = [];
      for (const z of r.list())
        T.push(Yn(z, v, F));
      return T.push(j), Q(T);
    }).catch((z) => ln(
      z,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? z : Promise.reject(z));
  }
  function I(v, F, T) {
    l.list().forEach((M) => V(() => M(v, F, T)));
  }
  function H(v, F, T, M, G) {
    const pe = x(v, F);
    if (pe)
      return pe;
    const j = F === An, z = $n ? history.state : {};
    T && (M || j ? o.replace(v.fullPath, J({
      scroll: j && z && z.scroll
    }, G)) : o.push(v.fullPath, G)), c.value = v, Be(v, F, T, j), Pe();
  }
  let ce;
  function Z() {
    ce || (ce = o.listen((v, F, T) => {
      if (!N.listening)
        return;
      const M = w(v), G = E(M);
      if (G) {
        S(J(G, { replace: !0 }), M).catch(ha);
        return;
      }
      d = M;
      const pe = c.value;
      $n && lb(Nd(pe.fullPath, T.delta), wr()), A(M, pe).catch((j) => ln(
        j,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? j : ln(
        j,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (S(
        j.to,
        M
        // avoid an uncaught rejection, let push call triggerError
      ).then((z) => {
        ln(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !T.delta && T.type === va.pop && o.go(-1, !1);
      }).catch(ha), Promise.reject()) : (T.delta && o.go(-T.delta, !1), Y(j, M, pe))).then((j) => {
        j = j || H(
          // after navigation, all matched components are resolved
          M,
          pe,
          !1
        ), j && (T.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !ln(
          j,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? o.go(-T.delta, !1) : T.type === va.pop && ln(
          j,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && o.go(-1, !1)), I(M, pe, j);
      }).catch(ha);
    }));
  }
  let oe = vo(), q = vo(), ee;
  function Y(v, F, T) {
    Pe(v);
    const M = q.list();
    return M.length ? M.forEach((G) => G(v, F, T)) : ({}.NODE_ENV !== "production" && X("uncaught error during route navigation:"), console.error(v)), Promise.reject(v);
  }
  function he() {
    return ee && c.value !== An ? Promise.resolve() : new Promise((v, F) => {
      oe.add([v, F]);
    });
  }
  function Pe(v) {
    return ee || (ee = !v, Z(), oe.list().forEach(([F, T]) => v ? T(v) : F()), oe.reset()), v;
  }
  function Be(v, F, T, M) {
    const { scrollBehavior: G } = e;
    if (!$n || !G)
      return Promise.resolve();
    const pe = !T && cb(Nd(v.fullPath, 0)) || (M || !T) && history.state && history.state.scroll || null;
    return Yx().then(() => G(v, F, pe)).then((j) => j && rb(j)).catch((j) => Y(j, v, F));
  }
  const te = (v) => o.go(v);
  let nt;
  const D = /* @__PURE__ */ new Set(), N = {
    currentRoute: c,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: w,
    options: e,
    push: k,
    replace: y,
    go: te,
    back: () => te(-1),
    forward: () => te(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: q.add,
    isReady: he,
    install(v) {
      const F = this;
      v.component("RouterLink", eC), v.component("RouterView", oC), v.config.globalProperties.$router = F, Object.defineProperty(v.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ma(c)
      }), $n && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !nt && c.value === An && (nt = !0, k(o.location).catch((G) => {
        ({}).NODE_ENV !== "production" && X("Unexpected error when starting the router:", G);
      }));
      const T = {};
      for (const G in An)
        Object.defineProperty(T, G, {
          get: () => c.value[G],
          enumerable: !0
        });
      v.provide(vr, F), v.provide(Pf, Kx(T)), v.provide(ou, c);
      const M = v.unmount;
      D.add(v), v.unmount = function() {
        D.delete(v), D.size < 1 && (d = An, ce && ce(), ce = null, c.value = An, nt = !1, ee = !1), M();
      }, {}.NODE_ENV !== "production" && $n && rC(v, F, t);
    }
  };
  function Q(v) {
    return v.reduce((F, T) => F.then(() => V(T)), Promise.resolve());
  }
  return N;
}
function fC(e, t) {
  const n = [], s = [], o = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((d) => es(d, l)) ? s.push(l) : n.push(l));
    const c = e.matched[r];
    c && (t.matched.find((d) => es(d, c)) || o.push(c));
  }
  return [n, s, o];
}
function et() {
  return Qs(vr);
}
const wC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, s = parseInt(e.slice(6, 8)), o = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, s, o, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, vC = (e) => {
  const t = wC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const Vt = window.Vue.unref, $s = window.Vue.createVNode, cn = window.Vue.createElementVNode, Qd = window.Vue.renderSlot, Jd = window.Vue.withModifiers, Kr = window.Vue.toDisplayString, Yr = window.Vue.withCtx, _C = window.Vue.openBlock, SC = window.Vue.createElementBlock, yC = window.Vue.createCommentVNode, xC = { class: "col shrink pe-4" }, bC = { class: "col" }, CC = { class: "cx-translation__details column justify-between ma-0" }, kC = { class: "row ma-0" }, $C = { class: "col grow" }, EC = { class: "col shrink ps-2" }, VC = ["dir", "textContent"], LC = ["dir", "textContent"], TC = ["textContent"], AC = window.Vuex.useStore, DC = window.Vue.computed, zf = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: cu,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, s = AC(), o = (l, c) => {
      const d = s.getters["mediawiki/getPage"](l, c);
      return d == null ? void 0 : d.thumbnail;
    }, a = ge(), r = DC(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, c = vC(n.translation.startTimestamp);
      return a.i18n(
        l[c.postfix],
        mw.language.convertNumber(c.value)
      );
    });
    return (l, c) => e.translation ? (_C(), SC("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: c[1] || (c[1] = Jd((d) => l.$emit("click"), ["stop"]))
    }, [
      cn("div", xC, [
        $s(Vt(lu), {
          class: "cx-translation__thumbnail",
          thumbnail: o(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      cn("div", bC, [
        cn("div", CC, [
          cn("div", kC, [
            cn("div", $C, [
              Qd(l.$slots, "title")
            ]),
            cn("div", EC, [
              $s(Vt(Ze), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: c[0] || (c[0] = Jd((d) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Qd(l.$slots, "mid-content"),
          $s(Vt(U), { class: "cx-translation__footer ma-0" }, {
            default: Yr(() => [
              $s(Vt(C), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: Yr(() => [
                  cn("span", {
                    class: "mw-ui-autonym",
                    dir: Vt(R.getDir)(e.translation.sourceLanguage),
                    textContent: Kr(Vt(R.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, VC),
                  $s(Vt(Ze), {
                    icon: Vt(J0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  cn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: Vt(R.getDir)(e.translation.targetLanguage),
                    textContent: Kr(Vt(R.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, LC)
                ]),
                _: 1
              }),
              $s(Vt(C), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: Yr(() => [
                  cn("span", {
                    textContent: Kr(r.value)
                  }, null, 8, TC)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : yC("", !0);
  }
};
const So = window.Vue.unref, PC = window.Vue.toDisplayString, BC = window.Vue.normalizeClass, FC = window.Vue.createElementVNode, Qr = window.Vue.openBlock, MC = window.Vue.createElementBlock, Zd = window.Vue.createCommentVNode, eg = window.Vue.createVNode, Ga = window.Vue.withCtx, tg = window.Vue.createBlock, NC = ["lang", "textContent"], UC = ["lang", "innerHTML"], IC = window.Vue.computed, RC = window.Vue.inject, zC = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: lr,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, s = RC("colors").gray200, o = IC(
      () => {
        var c;
        return ((c = t.translation.progress) == null ? void 0 : c.any) * 100 || 0;
      }
    ), a = et(), { setTranslationURLParams: r } = P(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (c, d) => (Qr(), tg(zf, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": So(xh),
      onActionIconClicked: d[0] || (d[0] = (i) => c.$emit("delete-translation")),
      onClick: l
    }, {
      title: Ga(() => [
        FC("h5", {
          class: BC(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: PC(e.translation.sourceTitle)
        }, null, 10, NC),
        e.translation.isLeadSectionTranslation ? Zd("", !0) : (Qr(), MC("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          innerHTML: e.translation.sourceSectionTitle
        }, null, 8, UC))
      ]),
      "mid-content": Ga(() => [
        e.translation.progress ? (Qr(), tg(So(U), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ga(() => [
            eg(So(C), null, {
              default: Ga(() => [
                eg(So(kh), {
                  class: "cx-translation__progress-bar",
                  value: o.value,
                  height: "4px",
                  width: "64px",
                  background: So(s)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Zd("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, OC = window.Vuex.useStore, Of = [], jC = (e, t, n) => Of.some(
  (s) => s.sourceLanguage === e && s.targetLanguage === t && s.sourceTitle === n
), HC = (e, t, n) => {
  const s = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  Of.push(s);
}, qC = () => {
  const e = OC();
  return (t, n, s) => b(void 0, null, function* () {
    let o = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, s);
    return !o && !jC(t, n, s) && (o = yield me.fetchSectionSuggestion(
      t,
      s,
      n
    ), HC(t, n, s), o && (o.isListable = !1, e.commit("suggestions/addSectionSuggestion", o))), o;
  });
}, jf = window.Vue.ref, Hf = jf(null), iu = jf(null), GC = (e) => {
  e || mw.errorLogger.logError(
    new Error("[CX] Empty event source set"),
    "error.contenttranslation"
  ), Hf.value = e;
}, XC = (e) => {
  iu.value = e;
}, $a = () => {
  const e = et(), t = hr(), { setTranslationURLParams: n } = P();
  return (s, o, a, r, l = null, c = !0) => b(void 0, null, function* () {
    GC(r), XC(l);
    const d = yield t(
      o,
      a,
      s
    );
    n(d), c && e.push({ name: "sx-translation-confirmer" });
  });
};
const Jr = window.Vue.withModifiers, ng = window.Vue.toDisplayString, sg = window.Vue.createElementVNode, Lt = window.Vue.unref, os = window.Vue.createVNode, WC = window.Vue.createTextVNode, Xa = window.Vue.openBlock, og = window.Vue.createElementBlock, ag = window.Vue.createCommentVNode, ig = window.Vue.createBlock, Es = window.Vue.withCtx, KC = ["lang", "href", "textContent"], YC = {
  key: 0,
  class: "cx-published-translation__personal-draft-indicator"
}, QC = {
  key: 2,
  class: "flex"
}, JC = ["innerHTML"], Zr = window.Vue.computed, rg = window.Vue.ref, lg = window.Codex.CdxButton, el = window.Codex.CdxIcon, ZC = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Lu,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = rg(!0), s = rg(null), o = Zr(() => {
      var p;
      return (p = s.value) == null ? void 0 : p.missingSections;
    }), a = Zr(
      () => o.value && Object.keys(o.value)[0]
    );
    qC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((p) => s.value = p).catch((p) => console.log(p)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = P(), c = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, d = $a(), i = (p) => {
      d(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), p && l(p);
    }, u = mw.config.get("wgNamespaceIds"), g = Zr(() => new mw.Title(t.translation.targetTitle).getNamespaceId() === u.user);
    return (p, m) => (Xa(), ig(zf, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: c
    }, {
      title: Es(() => [
        sg("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: m[0] || (m[0] = Jr(() => {
          }, ["stop"])),
          textContent: ng(e.translation.sourceTitle)
        }, null, 8, KC)
      ]),
      "mid-content": Es(() => [
        os(Lt(U), { class: "ma-0" }, {
          default: Es(() => [
            os(Lt(C), null, {
              default: Es(() => [
                g.value ? (Xa(), og("div", YC, [
                  os(Lt(el), {
                    icon: Lt(uf),
                    class: "me-1",
                    size: "small"
                  }, null, 8, ["icon"]),
                  WC(" " + ng(p.$i18n("sx-published-translation-personal-draft-indicator")), 1)
                ])) : ag("", !0),
                n.value ? (Xa(), ig(Lt(dt), { key: 1 })) : o.value ? (Xa(), og("div", QC, [
                  os(Lt(lg), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: m[1] || (m[1] = Jr((h) => i(a.value), ["stop"]))
                  }, {
                    default: Es(() => [
                      os(Lt(el), {
                        class: "me-1",
                        icon: Lt(tf)
                      }, null, 8, ["icon"]),
                      sg("span", { innerHTML: a.value }, null, 8, JC)
                    ]),
                    _: 1
                  }),
                  os(Lt(lg), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": p.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: m[2] || (m[2] = Jr((h) => i(null), ["stop"]))
                  }, {
                    default: Es(() => [
                      os(Lt(el), { icon: Lt(ku) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : ag("", !0)
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
}, qf = "cx-translation-session-position-", Gf = () => qf + mw.user.sessionId(), ek = () => {
  const e = parseInt(
    mw.storage.get(Gf())
  );
  return isNaN(e) ? 0 : e;
}, tk = function(e) {
  const t = Gf();
  mw.storage.set(t, e);
}, nk = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(qf)).forEach((e) => mw.storage.remove(e));
}, sk = () => {
  const e = ek();
  return e % 10 === 0 && nk(), tk(e + 1), e;
};
function ok(e) {
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
    content_translation_session_position: sk()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(o, Object.assign({}, l, e))
  ) : Xh(r).then((c) => {
    mw.eventLog.submit(
      o,
      Object.assign({}, l, e, {
        user_global_edit_count: c,
        user_global_edit_count_bucket: eS(c)
      })
    );
  });
}
const ak = window.Vuex.useStore, ik = (e, t, n) => [
  `Event ${e} is missing ${t}.`,
  `Current URL params: ${location.href}.`,
  `Previous route: ${n}`
], kt = () => {
  const e = ak(), { previousRoute: t } = De(e), n = {
    event_source: { remove: !0 },
    translation_source_language: { remove: !1 },
    translation_target_language: { remove: !1 },
    translation_source_title: { remove: !0 }
  }, s = (o) => {
    for (const [a, { remove: r }] of Object.entries(n))
      if (o[a] === null || o[a] === "") {
        const l = ik(
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
  return (o) => (o.access_method || (o.access_method = jt ? "desktop" : "mobile web"), s(o), ok(o));
}, rk = window.Vuex.useStore, lk = () => {
  const { commit: e } = rk(), t = kt();
  return (n) => b(void 0, null, function* () {
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
const ck = window.Vue.resolveDirective, tl = window.Vue.createElementVNode, uk = window.Vue.withDirectives, nl = window.Vue.unref, cg = window.Vue.createVNode, ug = window.Vue.withCtx, dk = window.Vue.openBlock, gk = window.Vue.createBlock, pk = { class: "pa-4" }, mk = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, hk = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: lr,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, s = t, o = () => s("update:modelValue", !1), a = lk(), r = () => {
      a(n.translation), o();
    };
    return (l, c) => {
      const d = ck("i18n");
      return dk(), gk(nl(Ct), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: ug(() => [
          tl("div", mk, [
            cg(nl(Xe), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: o
            }, null, 8, ["label"]),
            cg(nl(Xe), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: ug(() => [
          tl("div", pk, [
            uk(tl("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function fk(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield wk(t, n)).filter((o) => e.includes(o)) : [];
  });
}
function dg(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(R.sortByAutonym) : (yield fk(e, t, n)).sort(R.sortByAutonym);
  });
}
function wk(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((s) => s.json()).then((s) => Object.keys(s.languagesearch || {}));
}
function vk() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function _k(e) {
  let t, n = [...e];
  const s = e.length;
  s < 10 && (t = s), s < 30 && (t = 10), s >= 30 && (t = 15);
  const o = [];
  for (; n.length; )
    o.push(n.splice(0, t));
  return o;
}
const Sk = window.Vue.computed;
function yk(e, t) {
  const n = Sk(() => {
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
const sl = window.Vue.ref, ol = window.Vue.watch, xk = window.Vue.computed;
function Xf(e, t, n) {
  const s = sl(""), o = sl(-1), a = sl(null), r = () => {
    o.value++, o.value >= l.value.length && (o.value = 0);
  }, l = xk(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), c = () => {
    o.value--, o.value < 0 && (o.value = 0);
  };
  return ol(e, () => {
    o.value = -1;
  }), ol(t, () => {
    t.value && l.value.length > 0 && (o.value = 0);
  }), ol(o, () => b(this, null, function* () {
    var d;
    if (o.value < 0) {
      s.value = "";
      return;
    }
    s.value = l.value[o.value], (d = a.value.querySelectorAll(`.language[lang="${s.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: c, keyboardNavigationContainer: a, selectedItem: s };
}
function Au(e, t, n) {
  let s;
  const o = (...a) => {
    const r = this, l = () => {
      s = null, n || e.apply(r, a);
    };
    n && !s && e.apply(r, a), (!s || t) && (clearTimeout(s), s = setTimeout(l, t));
  };
  return o.cancel = () => clearTimeout(s), o;
}
const Wa = window.Vue.renderSlot, Ve = window.Vue.unref, bk = window.Vue.isRef, gg = window.Vue.createVNode, yo = window.Vue.withModifiers, xo = window.Vue.withKeys, Dn = window.Vue.createElementVNode, Ck = window.Vue.resolveDirective, Ka = window.Vue.withDirectives, al = window.Vue.renderList, il = window.Vue.Fragment, un = window.Vue.openBlock, dn = window.Vue.createElementBlock, pg = window.Vue.toDisplayString, Ya = window.Vue.normalizeClass, rl = window.Vue.createCommentVNode, kk = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, $k = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, Ek = { class: "results px-3 pt-4" }, Vk = { class: "results-header ps-8 pb-2" }, Lk = { class: "results-languages--suggestions pa-0 ma-0" }, Tk = ["lang", "dir", "aria-selected", "onClick", "textContent"], Ak = { class: "results px-3 pt-4" }, Dk = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, Pk = ["lang", "dir", "aria-selected", "onClick", "textContent"], Bk = ["aria-selected"], Fk = { class: "no-results px-3 py-4" }, Mk = { class: "ps-8" }, Qa = window.Vue.ref, Nk = window.Vue.watch, Uk = window.Vue.onMounted, mg = window.Vue.computed, Wf = {
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
      default: vk
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = Qa(null), a = Qa(""), r = Qa([]), l = Qa(n.suggestions), c = mg(
      () => _k(r.value)
    ), d = mg(() => {
      const k = r.value.length;
      return k < 10 ? "few-results" : k < 30 ? "some-results" : "many-results";
    }), i = (k) => s("select", k), u = () => s("close"), { autocompletion: g, onTabSelect: p } = yk(
      a,
      r
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: w } = Xf(a, r, l), _ = () => {
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
    return Nk(a, Au(() => b(this, null, function* () {
      r.value = yield dg(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), Uk(() => b(this, null, function* () {
      n.autofocus && setTimeout(() => o.value.focus(), 500), r.value = yield dg(
        n.languages,
        "",
        n.searchAPI
      );
    })), (k, y) => {
      const E = Ck("i18n");
      return un(), dn("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        Wa(k.$slots, "search", {}, () => [
          Dn("div", kk, [
            gg(Ve(Kc), {
              value: Ve(g),
              "onUpdate:value": y[0] || (y[0] = (S) => bk(g) ? g.value = S : null),
              icon: Ve(Ju),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            gg(Ve(Kc), {
              ref_key: "searchInputElement",
              ref: o,
              value: a.value,
              "onUpdate:value": y[1] || (y[1] = (S) => a.value = S),
              class: "mw-ui-language-selector__search pa-4",
              icon: Ve(Ju),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                xo(yo(_, ["prevent"]), ["enter"]),
                xo(yo(Ve(m), ["stop", "prevent"]), ["down"]),
                xo(yo(Ve(h), ["stop", "prevent"]), ["up"]),
                xo(yo(u, ["prevent"]), ["esc"]),
                xo(yo(Ve(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        Dn("section", $k, [
          e.suggestions.length && !a.value ? Wa(k.$slots, "suggestions", { key: 0 }, () => [
            Dn("section", Ek, [
              Ka(Dn("p", Vk, null, 512), [
                [E, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Dn("ul", Lk, [
                (un(!0), dn(il, null, al(e.suggestions, (S) => (un(), dn("li", {
                  key: S,
                  class: Ya(["language ma-0", { "language--selected": S === Ve(w) }]),
                  lang: S,
                  dir: Ve(R.getDir)(S),
                  "aria-selected": S === Ve(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (B) => i(S),
                  textContent: pg(Ve(R.getAutonym)(S))
                }, null, 10, Tk))), 128))
              ])
            ])
          ]) : rl("", !0),
          c.value.length ? Wa(k.$slots, "search", { key: 1 }, () => [
            Dn("section", Ak, [
              e.suggestions.length && !a.value ? Ka((un(), dn("p", Dk, null, 512)), [
                [E, void 0, "cx-sx-language-selector-all-languages"]
              ]) : rl("", !0),
              (un(!0), dn(il, null, al(c.value, (S, B) => (un(), dn("ul", {
                key: B,
                class: Ya(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (un(!0), dn(il, null, al(S, (V) => (un(), dn("li", {
                  key: V,
                  class: Ya(["language ma-0", { "language--selected": V === Ve(w) }]),
                  lang: V,
                  dir: Ve(R.getDir)(V),
                  role: "option",
                  "aria-selected": V === Ve(w) || null,
                  tabindex: "-1",
                  onClick: (A) => i(V),
                  textContent: pg(Ve(R.getAutonym)(V))
                }, null, 10, Pk))), 128)),
                e.allOptionEnabled && !a.value ? Ka((un(), dn("li", {
                  key: 0,
                  class: Ya(["language ma-0", { "language--selected": Ve(w) === "all" }]),
                  role: "option",
                  "aria-selected": Ve(w) === "all" || null,
                  tabindex: "-1",
                  onClick: y[2] || (y[2] = (V) => i("all"))
                }, null, 10, Bk)), [
                  [E, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : rl("", !0)
              ], 2))), 128))
            ])
          ]) : Wa(k.$slots, "noresults", { key: 2 }, () => [
            Dn("section", Fk, [
              Ka(Dn("h3", Mk, null, 512), [
                [E, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const Ik = window.Vue.resolveDirective, hg = window.Vue.withDirectives, bo = window.Vue.openBlock, Co = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Le = window.Vue.unref, fg = window.Vue.toDisplayString, Tt = window.Vue.createVNode, wg = window.Vue.withModifiers, as = window.Vue.withCtx, Rk = window.Vue.normalizeClass, zk = {
  key: 0,
  class: "mw-ui-autonym"
}, Ok = ["lang", "dir", "textContent"], jk = {
  key: 0,
  class: "mw-ui-autonym"
}, Hk = ["lang", "dir", "textContent"], ko = window.Vue.computed, qk = window.Vue.inject, Gk = window.Vue.ref, vg = window.Codex.CdxButton, ll = window.Codex.CdxIcon, or = {
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
    const n = e, s = t, o = qk("breakpoints"), a = ko(() => o.value.mobile), r = Gk(null), l = ko(() => !!r.value), c = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, u = ko(() => {
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
    }, p = ko(
      () => n.selectedSourceLanguage === "all"
    ), m = ko(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const w = Ik("i18n");
      return bo(), Co("div", {
        class: Rk(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        Tt(Le(U), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: as(() => [
            Tt(Le(C), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: as(() => [
                Tt(Le(vg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: wg(c, ["stop"])
                }, {
                  default: as(() => [
                    p.value ? hg((bo(), Co("span", zk, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (bo(), Co("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Le(R.getDir)(e.selectedSourceLanguage),
                      textContent: fg(Le(R.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, Ok)),
                    Tt(Le(ll), {
                      size: "x-small",
                      icon: Le(Qc)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            Tt(Le(C), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: as(() => [
                Tt(Le(ll), { icon: Le(nf) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            Tt(Le(C), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: as(() => [
                Tt(Le(vg), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: wg(d, ["stop"])
                }, {
                  default: as(() => [
                    m.value ? hg((bo(), Co("span", jk, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (bo(), Co("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Le(R.getDir)(e.selectedTargetLanguage),
                      textContent: fg(Le(R.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, Hk)),
                    Tt(Le(ll), {
                      size: "x-small",
                      icon: Le(Qc)
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
        Tt(Le(Ct), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (_) => l.value = _),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: as(() => [
            Tt(Le(Wf), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: u.value,
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
const _g = window.Vue.unref, Xk = window.Vue.createVNode, Ja = window.Vue.createElementVNode, Sg = window.Vue.toDisplayString, Wk = window.Vue.openBlock, Kk = window.Vue.createElementBlock, Yk = { class: "cx-list-empty-placeholder pa-4" }, Qk = { class: "cx-list-empty-placeholder__icon-container" }, Jk = { class: "cx-list-empty-placeholder__icon" }, Zk = ["textContent"], e8 = ["textContent"], t8 = window.Codex.CdxIcon, Kf = {
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
    return (t, n) => (Wk(), Kk("div", Yk, [
      Ja("div", Qk, [
        Ja("div", Jk, [
          Xk(_g(t8), { icon: _g(lf) }, null, 8, ["icon"])
        ])
      ]),
      Ja("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: Sg(e.title)
      }, null, 8, Zk),
      Ja("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: Sg(e.description)
      }, null, 8, e8)
    ]));
  }
}, n8 = window.Vuex.useStore, s8 = window.Vue.ref, Za = s8({ draft: !1, published: !1 }), ao = () => {
  const e = n8(), t = to(), n = (o) => b(void 0, null, function* () {
    let a = yield bt.fetchTranslations(o);
    e.commit("translator/clearTranslationsByStatus", o), a.forEach(
      (l) => e.commit("translator/addTranslation", l)
    );
    const r = {};
    for (const l of a) {
      const c = l.sourceLanguage;
      r[c] = r[c] || [], r[c].push(l);
    }
    Za.value[o] = !0;
    for (const [l, c] of Object.entries(r))
      t(
        l,
        c.map((d) => d.sourceTitle)
      ), c.forEach((d) => {
        const { targetLanguage: i, targetTitle: u } = d, g = !!e.getters["mediawiki/getPage"](
          i,
          u
        );
        u && !g && e.commit(
          "mediawiki/addPage",
          new eo({ title: u, pagelanguage: i })
        );
      });
  });
  return {
    fetchTranslationsByStatus: n,
    fetchAllTranslations: () => {
      const a = Object.keys(Za.value).filter(
        (r) => !Za.value[r]
      ).map(
        (r) => n(r)
      );
      return Promise.all(a).catch((r) => {
        mw.log.error("[CX] Error while fetching translations", r);
      });
    },
    translationsFetched: Za
  };
};
const o8 = window.Vue.toDisplayString, cl = window.Vue.normalizeClass, yg = window.Vue.createElementVNode, Gt = window.Vue.openBlock, Vs = window.Vue.createBlock, ei = window.Vue.createCommentVNode, xg = window.Vue.unref, bg = window.Vue.renderList, Cg = window.Vue.Fragment, ti = window.Vue.createElementBlock, a8 = window.Vue.createVNode, kg = window.Vue.withCtx, i8 = ["textContent"], r8 = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, l8 = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, ni = window.Vue.ref, At = window.Vue.computed, c8 = window.Vue.inject, u8 = window.Vuex.useStore, $g = {
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
    const t = e, n = ni("all"), s = ni("all"), o = u8(), { translationsFetched: a } = ao(), r = At(
      () => a.value[t.translationStatus]
    ), l = ni(!1), c = ni(null), d = At(
      () => t.translationStatus === "draft"
    ), i = At(
      () => o.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), u = At(
      () => n.value === "all"
    ), g = At(
      () => s.value === "all"
    ), p = At(
      () => i.value.filter(
        (y) => (u.value || y.sourceLanguage === n.value) && (g.value || y.targetLanguage === s.value)
      ).sort((y, E) => y.lastUpdatedTimestamp < E.lastUpdatedTimestamp)
    ), m = At(() => {
      const y = i.value.map(
        (E) => E.targetLanguage
      );
      return [...new Set(y)];
    }), h = At(() => {
      const y = i.value.map(
        (E) => E.sourceLanguage
      );
      return [...new Set(y)];
    }), f = (y) => {
      c.value = y, l.value = !0;
    }, w = At(() => t.activeStatus === t.translationStatus), _ = c8("breakpoints"), x = At(() => _.value.mobile), k = At(
      () => x.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (y, E) => w.value ? (Gt(), Vs(xg(Je), {
      key: 0,
      class: cl(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: kg(() => [
        yg("div", {
          class: cl(["cx-translation-list__header", k.value])
        }, [
          yg("h3", {
            class: cl(["px-4 mw-ui-card__title mb-0", { "pb-4": x.value }]),
            textContent: o8(y.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, i8),
          p.value.length ? (Gt(), Vs(or, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": E[0] || (E[0] = (S) => n.value = S),
            "selected-target-language": s.value,
            "onUpdate:selectedTargetLanguage": E[1] || (E[1] = (S) => s.value = S),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : ei("", !0)
        ], 2)
      ]),
      default: kg(() => [
        r.value && !p.value.length ? (Gt(), Vs(Kf, {
          key: 0,
          title: y.$i18n("cx-sx-translation-list-empty-title"),
          description: y.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : ei("", !0),
        r.value ? ei("", !0) : (Gt(), Vs(xg(dt), { key: 1 })),
        d.value ? (Gt(), ti("div", r8, [
          (Gt(!0), ti(Cg, null, bg(p.value, (S) => (Gt(), Vs(zC, {
            key: `${e.translationStatus}-${S.key}`,
            translation: S,
            onDeleteTranslation: (B) => f(S)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Gt(), ti("div", l8, [
          (Gt(!0), ti(Cg, null, bg(p.value, (S) => (Gt(), Vs(ZC, {
            key: `${e.translationStatus}-${S.key}`,
            translation: S
          }, null, 8, ["translation"]))), 128))
        ])),
        a8(hk, {
          modelValue: l.value,
          "onUpdate:modelValue": E[2] || (E[2] = (S) => l.value = S),
          translation: c.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : ei("", !0);
  }
};
const ul = window.Vue.toDisplayString, er = window.Vue.createElementVNode, dl = window.Vue.unref, $o = window.Vue.openBlock, gl = window.Vue.createBlock, Eg = window.Vue.createCommentVNode, d8 = window.Vue.Fragment, Vg = window.Vue.createElementBlock, g8 = window.Vue.withKeys, p8 = window.Vue.withCtx, m8 = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, h8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, f8 = /* @__PURE__ */ er("span", null, "/", -1), w8 = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, Lg = window.Codex.CdxIcon, v8 = window.Codex.CdxInfoChip, si = window.Vue.computed, ws = {
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
    const t = e, n = si(() => t.content.lastIndexOf("/")), s = si(() => t.content.slice(0, n.value)), o = si(() => t.content.slice(n.value + 1)), a = si(
      () => t.expanded ? wy : Qc
    );
    return (r, l) => ($o(), gl(dl(v8), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = g8((c) => r.$emit("click"), ["enter"]))
    }, {
      default: p8(() => [
        n.value === -1 ? ($o(), Vg(d8, { key: 0 }, [
          er("span", null, ul(e.content), 1),
          e.expandable ? ($o(), gl(dl(Lg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : Eg("", !0)
        ], 64)) : ($o(), Vg("div", m8, [
          er("span", h8, ul(s.value), 1),
          f8,
          er("span", w8, ul(o.value), 1),
          e.expandable ? ($o(), gl(dl(Lg), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : Eg("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const ye = window.Vue.unref, Dt = window.Vue.createVNode, Pn = window.Vue.createElementVNode, Eo = window.Vue.toDisplayString, ht = window.Vue.withCtx, _8 = window.Vue.resolveDirective, pl = window.Vue.withDirectives, Bn = window.Vue.openBlock, Ls = window.Vue.createBlock, is = window.Vue.createCommentVNode, Tg = window.Vue.createElementBlock, Ag = window.Vue.withModifiers, S8 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, y8 = { class: "col shrink pe-4" }, x8 = ["lang", "dir", "textContent"], b8 = ["lang", "dir", "textContent"], C8 = { class: "cx-suggestion__missing-sections" }, k8 = {
  key: 0,
  class: "cx-suggestion__easy-sections ms-1"
}, $8 = ["textContent"], E8 = ["textContent"], ml = window.Codex.CdxIcon, Ne = window.Vue.computed, V8 = window.Vue.inject, L8 = window.Vuex.useStore, ru = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [Jn, nn, Ys],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = L8(), s = Ne(() => t.suggestion), o = Ne(
      () => s.value.sourceTitle || s.value.title
    ), a = Ne(
      () => n.getters["mediawiki/getPage"](
        s.value.sourceLanguage,
        o.value
      )
    ), r = Ne(
      () => {
        var y;
        return (y = s.value) == null ? void 0 : y.missingSectionsCount;
      }
    ), l = Ne(() => !(s.value instanceof nn) || !s.value.orderedMissingSections ? 0 : s.value.orderedMissingSections.filter((y) => {
      const E = s.value.getSectionSize(y.sourceTitle);
      return Qh(E);
    }).length), c = ge(), d = Ne(() => {
      const y = c.i18n(
        "cx-sx-translation-suggestion-easy-sections",
        [l.value]
      );
      return c.i18n("parentheses", [y]);
    }), i = Ne(() => {
      var y;
      return (y = a.value) == null ? void 0 : y.description;
    }), u = Ne(
      () => s.value instanceof nn
    ), g = Ne(
      () => s.value instanceof Jn
    ), p = Ne(
      () => s.value instanceof Ys
    ), m = Ne(
      () => R.getAutonym(s.value.sourceLanguage)
    ), h = Ne(
      () => R.getAutonym(s.value.targetLanguage)
    ), f = Ne(
      () => p.value ? of : af
    ), w = V8("colors"), _ = Ne(
      () => p.value ? w.blue600 : "currentColor"
    ), x = Ne(
      () => s.value instanceof qh || s.value instanceof Gh
    ), k = Ne(() => g.value && !x.value ? jt ? nS(s.value.size) : sS(s.value.leadSectionSize) : !1);
    return (y, E) => {
      const S = _8("i18n");
      return s.value ? (Bn(), Tg("div", S8, [
        Pn("div", y8, [
          Dt(ye(lu), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        Dt(ye(U), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: ht(() => [
            Dt(ye(U), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: ht(() => [
                Dt(ye(C), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: ht(() => [
                    Pn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: s.value.sourceLanguage,
                      dir: ye(R.getDir)(s.value.sourceLanguage),
                      textContent: Eo(o.value)
                    }, null, 8, x8)
                  ]),
                  _: 1
                }),
                Dt(ye(C), { shrink: "" }, {
                  default: ht(() => [
                    Pn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: s.value.sourceLanguage,
                      dir: ye(R.getDir)(s.value.sourceLanguage),
                      textContent: Eo(i.value)
                    }, null, 8, b8)
                  ]),
                  _: 1
                }),
                k.value ? (Bn(), Ls(ye(C), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: ht(() => [
                    pl(Pn("small", null, null, 512), [
                      [S, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : is("", !0),
                u.value ? (Bn(), Ls(ye(C), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom",
                  shrink: ""
                }, {
                  default: ht(() => [
                    pl(Pn("small", C8, null, 512), [
                      [S, [r.value], "cx-sx-translation-suggestion-info"]
                    ]),
                    l.value ? (Bn(), Tg("small", k8, Eo(d.value), 1)) : is("", !0)
                  ]),
                  _: 1
                })) : p.value ? (Bn(), Ls(ye(C), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: ht(() => [
                    Dt(ye(U), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: ht(() => [
                        Dt(ye(C), { grow: "" }, {
                          default: ht(() => [
                            Pn("small", {
                              textContent: Eo(m.value)
                            }, null, 8, $8),
                            Dt(ye(ml), {
                              icon: ye(nf),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            Pn("small", {
                              textContent: Eo(h.value)
                            }, null, 8, E8)
                          ]),
                          _: 1
                        }),
                        r.value ? (Bn(), Ls(ye(C), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: ht(() => [
                            pl(Pn("small", null, null, 512), [
                              [S, [
                                r.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : is("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : is("", !0),
                x.value ? (Bn(), Ls(ye(C), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: ht(() => [
                    Dt(ws, {
                      icon: ye(bu),
                      content: s.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : is("", !0)
              ]),
              _: 1
            }),
            Dt(ye(C), { shrink: "" }, {
              default: ht(() => [
                p.value ? is("", !0) : (Bn(), Ls(ye(ml), {
                  key: 0,
                  icon: ye(so),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: E[0] || (E[0] = Ag((B) => y.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                Dt(ye(ml), {
                  class: "cx-suggestion__favorite-button",
                  icon: f.value,
                  "icon-color": _.value,
                  onClick: E[1] || (E[1] = Ag((B) => y.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : is("", !0);
    };
  }
};
const hl = window.Vue.normalizeClass, Dg = window.Vue.createVNode, T8 = window.Vue.renderList, Pg = window.Vue.Fragment, Vo = window.Vue.openBlock, oi = window.Vue.createElementBlock, A8 = window.Vue.createBlock, D8 = window.Vue.toDisplayString, P8 = window.Vue.withKeys, Bg = window.Vue.createCommentVNode, B8 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, ai = window.Vue.computed, F8 = window.Vue.ref, M8 = window.Vue.watchEffect, N8 = {
  __name: "SuggestionFilterChip",
  props: {
    filter: {
      type: Ot,
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
    const n = e, s = ai(
      () => n.isSelected(n.filter) || n.filter.subFilters.some((g) => n.isSelected(g))
    ), o = F8(!1);
    M8(() => {
      n.filter.expandable && (o.value = s.value);
    });
    const a = t, r = () => {
      n.filter.expandable && s.value ? o.value = !o.value : a("filter-selected", n.filter);
    }, l = ai(() => {
      const g = n.filter.subFilters.find(
        (m) => n.isSelected(m)
      );
      let p = n.filter.chipLabel;
      return g && (p += `/${c(g)}`), p;
    }), c = (g) => {
      const { label: p } = g, m = n.filter.label;
      return p.startsWith(`${m}/`) ? p.replace(`${m}/`, "") : p;
    }, d = ai(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), i = ai(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && o.value
    ), u = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (g, p) => (Vo(), oi(Pg, null, [
      Dg(ws, {
        class: hl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": s.value
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: l.value,
        expandable: !!e.filter.expandable,
        expanded: o.value,
        onClick: r
      }, null, 8, ["class", "icon", "content", "expandable", "expanded"]),
      o.value ? (Vo(), oi("div", B8, [
        Dg(ws, {
          class: hl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: g.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: p[0] || (p[0] = (m) => g.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (Vo(!0), oi(Pg, null, T8(d.value, (m) => (Vo(), A8(ws, {
          key: m.id,
          class: hl(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(m)
          }]),
          content: c(m),
          icon: m.icon,
          onClick: (h) => g.$emit("filter-selected", m)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        i.value ? (Vo(), oi("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: u,
          onKeyup: P8(u, ["enter"])
        }, D8(e.viewMoreConfig.label), 33)) : Bg("", !0)
      ])) : Bg("", !0)
    ], 64));
  }
};
const U8 = window.Vue.toDisplayString, Fg = window.Vue.createElementVNode, I8 = window.Vue.renderList, Mg = window.Vue.Fragment, fl = window.Vue.openBlock, Ng = window.Vue.createElementBlock, R8 = window.Vue.createBlock, z8 = { class: "sx-suggestions-filters__group-label mb-3" }, O8 = { class: "sx-suggestions-filters__group-filters mb-3" }, j8 = {
  __name: "SXSuggestionsFiltersDialogTabGroupContent",
  props: {
    filterGroup: {
      type: pa,
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
    return (s, o) => (fl(), Ng(Mg, null, [
      Fg("div", z8, U8(e.filterGroup.label), 1),
      Fg("div", O8, [
        (fl(!0), Ng(Mg, null, I8(n(), (a) => (fl(), R8(N8, {
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
}, Ug = window.Vue.computed, H8 = window.Vue.inject, Ig = window.Vue.ref, Rg = window.Vue.watch, Du = (e, t) => {
  const s = Ig([]), o = Ig(!1), a = Ug(
    () => s.value.slice(0, 4)
  ), r = H8("breakpoints"), l = Ug(() => r.value.mobile), c = Au(() => b(void 0, null, function* () {
    if (!t.value) {
      o.value = !1;
      return;
    }
    try {
      s.value = yield _s.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      o.value = !1, mw.cx.eventlogging.stats.articleSearchAccess(l.value);
    }
  }), 500), d = () => {
    s.value = [], t.value && (o.value = !0, c());
  };
  return Rg(t, d), Rg(e, d), {
    searchResultsLoading: o,
    searchResultsSlice: a
  };
};
class ii {
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
    showThumbnail: c = !1
  }) {
    this.label = t, this.value = n + "-" + o, this.description = s, this.thumbnail = r, this.filterType = o, this.filterId = a, this.icon = l, this.showThumbnail = c;
  }
}
const wl = window.Vue.ref, zg = window.Vue.watch, Og = window.Vue.computed, { topics: q8, regions: G8 } = mw.loader.require(
  "ext.cx.articlefilters"
), X8 = q8.flatMap(
  (e) => e.topics.map((t) => Ke(ue({}, t), {
    groupId: e.groupId
  }))
), W8 = () => {
  const e = wl(""), t = wl("all"), n = wl({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), s = ge(), { pageCollectionGroups: o } = xu(), { sourceLanguageURLParameter: a } = P(), r = (p) => (p = p.toLowerCase(), X8.filter(
    (m) => m.label.toLowerCase().includes(p)
  )), l = (p) => (p = p.toLowerCase(), Object.values(o.value).flat().filter(
    (h) => h.name.toLowerCase().includes(p)
  )), c = (p) => (p = p.toLowerCase(), G8.flatMap((m) => [m, ...m.countries]).filter(
    (m) => m.label.toLowerCase().includes(p)
  ).map((m) => ({
    label: m.label,
    id: m.id
  }))), d = Og(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: u } = Du(
    a,
    d
  );
  zg(i, () => {
    n.value.topics = i.value.map(
      (p) => {
        var m;
        return new ii({
          label: p.title,
          value: p.title,
          description: p.description,
          thumbnail: { url: (m = p.thumbnail) == null ? void 0 : m.source },
          filterType: xt,
          filterId: p.title,
          showThumbnail: !0
        });
      }
    );
  }), zg([e, t], () => b(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (p) => new ii({
        label: p.label,
        value: p.label,
        description: s.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? Jc : null,
        filterType: We,
        filterId: p.topicId
      })
    ), n.value.collections = l(
      e.value
    ).map(
      (p) => new ii({
        label: p.name,
        value: p.name,
        description: s.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          p.articlesCount
        ),
        icon: t.value === "all" ? bu : null,
        filterType: ne,
        filterId: p.name
      })
    ), n.value.regions = c(e.value).map(
      (p) => new ii({
        label: p.label,
        value: p.label,
        description: s.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? Jc : null,
        filterType: $e,
        filterId: p.id
      })
    );
  }));
  const g = Og(() => {
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
  return { searchInput: e, searchScope: t, searchResults: g, searchResultsLoading: u };
}, K8 = "suggestion_filter_topic_area", Y8 = "suggestion_filter_search_result_seed", Q8 = "suggestion_filter_collections", J8 = "suggestion_filter_previous_edits", Z8 = "suggestion_filter_popular_articles", e2 = "suggestion_filter_region", vl = (e) => {
  if (e.type === We || e.type === $e || e.type === ne || e.type === xt)
    return e.id;
  if (e.id === ne)
    return "all-collections";
}, _l = (e) => {
  if (e.type === We)
    return K8;
  if (e.type === $e)
    return e2;
  if (e.type === xt)
    return Y8;
  if (e.id === ne || e.type === ne)
    return Q8;
  if (e.id === on)
    return J8;
  if (e.id === En)
    return Z8;
}, Yf = () => {
  const e = kt();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: _l(r),
      event_context: vl(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: _l(r),
      event_context: vl(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: _l(r),
      event_context: vl(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const be = window.Vue.unref, ft = window.Vue.createVNode, Pt = window.Vue.withCtx, t2 = window.Vue.resolveDirective, Xt = window.Vue.createElementVNode, Ts = window.Vue.withDirectives, jg = window.Vue.toDisplayString, n2 = window.Vue.createTextVNode, s2 = window.Vue.vShow, Hg = window.Vue.isRef, qg = window.Vue.renderList, Gg = window.Vue.Fragment, gn = window.Vue.openBlock, rs = window.Vue.createElementBlock, o2 = window.Vue.withKeys, Xg = window.Vue.createCommentVNode, Wg = window.Vue.createBlock, a2 = { class: "sx-suggestions-filters" }, i2 = { class: "mb-0" }, r2 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, l2 = { class: "mb-3" }, c2 = { class: "px-4 pb-4 pt-7" }, u2 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, d2 = ["onKeyup", "onClick"], g2 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, p2 = { class: "sx-suggestions-filters__search-results-pending" }, m2 = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, h2 = { class: "sx-suggestions-filters__search-results-empty-primary" }, f2 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, ri = window.Vue.ref, ls = window.Vue.computed, w2 = window.Vue.inject, v2 = window.Vue.watch, Kg = window.Codex.CdxButton, _2 = window.Codex.CdxIcon, S2 = window.Codex.CdxTextInput, y2 = window.Codex.CdxMenu, x2 = window.Codex.CdxTabs, b2 = window.Codex.CdxTab, C2 = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = ge(), s = t, o = ls(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: p([
          Qe,
          ne,
          $e,
          We
        ])
      },
      {
        name: "collections",
        label: n.i18n("cx-sx-suggestions-filters-tab-collections"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-collections"
        ),
        filterGroups: p([ne])
      },
      {
        name: "geography",
        label: n.i18n("cx-sx-suggestions-filters-tab-regions"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-regions"
        ),
        filterGroups: p([$e])
      },
      {
        name: "topics",
        label: n.i18n("cx-sx-suggestions-filters-tab-topics"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-topics"
        ),
        filterGroups: p([We])
      }
    ]), a = (D) => H.value = D, r = ls(
      () => o.value.find((D) => D.name === H.value)
    ), l = (D, N) => N === "all" && D.type === $e ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          D.label
        ),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, c = (D, N) => {
      if (D !== "all")
        return !1;
      if (N === ne) {
        const Q = p([ne]);
        return Q.length && Q[0].filters.length > 6;
      }
      return N === $e;
    }, { allFilters: d, isFilterSelected: i, selectFilter: u, findSelectedFilter: g } = mr(), p = (D) => D.flatMap((N) => d.value.filter((Q) => Q.type === N)).filter(Boolean), m = () => {
      E(), s("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: h,
      logSuggestionFiltersConfirm: f,
      logSuggestionFiltersSelect: w
    } = Yf(), _ = () => {
      h(), m();
    }, x = () => {
      y.value && (f(y.value), u(y.value)), m();
    }, k = ri(!1), y = ri(null), E = () => {
      y.value = null, k.value = !1;
    }, S = (D) => {
      w(D), y.value = D, k.value = !0;
    }, B = (D) => y.value ? y.value.id === D.id && y.value.type === D.type : i(D), V = w2("breakpoints"), A = ls(() => V.value.mobile), { searchInput: I, searchScope: H, searchResults: ce, searchResultsLoading: Z } = W8(), oe = ls(
      () => y.value || g()
    ), q = ri(null);
    v2(q, () => {
      if (!q.value)
        return;
      const D = Y.value.find(
        (N) => N.value === q.value
      );
      S({
        type: D.filterType,
        id: D.filterId,
        label: D.label
      }), I.value = "";
    });
    const ee = {
      [ne]: "cx-sx-suggestions-filters-view-all-collections-group",
      [$e]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, Y = ls(
      () => ce.value.flatMap((D) => D.items)
    ), he = ri({}), Pe = ls(
      () => he.value[H.value]
    ), Be = ls(() => {
      var N;
      const D = (N = Pe.value) == null ? void 0 : N.getHighlightedMenuItem();
      return D == null ? void 0 : D.id;
    }), te = (D) => {
      D.key !== " " && Pe.value && Pe.value.delegateKeyNavigation(D);
    }, nt = (D, N) => {
      he.value[N] = D;
    };
    return (D, N) => {
      const Q = t2("i18n");
      return gn(), Wg(be(Ct), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: A.value,
        header: !1
      }, {
        default: Pt(() => [
          Xt("section", a2, [
            ft(be(U), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Pt(() => [
                ft(be(C), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Pt(() => [
                    ft(be(Kg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": D.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: _
                    }, {
                      default: Pt(() => [
                        ft(be(_2), { icon: be(so) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                ft(be(C), {
                  grow: "",
                  align: "center"
                }, {
                  default: Pt(() => [
                    Ts(Xt("h5", i2, null, 512), [
                      [Q, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                ft(be(C), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Pt(() => [
                    Ts(ft(be(Kg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: x
                    }, {
                      default: Pt(() => [
                        n2(jg(D.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [s2, k.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Xt("div", r2, [
              Ts(Xt("h5", l2, null, 512), [
                [Q, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Xt("div", null, [
                ft(ws, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: oe.value.label,
                  icon: oe.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            Xt("div", c2, [
              ft(be(S2), {
                modelValue: be(I),
                "onUpdate:modelValue": N[0] || (N[0] = (v) => Hg(I) ? I.value = v : null),
                role: "combobox",
                "aria-activedescendant": Be.value,
                "aria-controls": "sx-suggestions-filters__search-results__menu",
                "aria-autocomplete": "none",
                placeholder: r.value.searchPlaceholder,
                "input-type": "search",
                "start-icon": be(Jc),
                clearable: !!be(I),
                onKeydown: te
              }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
            ]),
            ft(be(x2), {
              active: be(H),
              "onUpdate:active": [
                N[2] || (N[2] = (v) => Hg(H) ? H.value = v : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Pt(() => [
                (gn(!0), rs(Gg, null, qg(o.value, (v, F) => (gn(), Wg(be(b2), {
                  key: F,
                  name: v.name,
                  label: v.label
                }, {
                  default: Pt(() => [
                    be(I) ? (gn(), rs("div", g2, [
                      ft(be(y2), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (T) => nt(T, v.name),
                        selected: q.value,
                        "onUpdate:selected": N[1] || (N[1] = (T) => q.value = T),
                        "show-pending": be(Z),
                        expanded: "",
                        "menu-items": Y.value
                      }, {
                        pending: Pt(() => [
                          Ts(Xt("div", p2, null, 512), [
                            [Q, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": Pt(() => [
                          be(Z) ? Xg("", !0) : (gn(), rs("div", m2, [
                            Ts(Xt("span", h2, null, 512), [
                              [Q, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            Ts(Xt("span", f2, null, 512), [
                              [Q, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (gn(), rs("div", u2, [
                      (gn(!0), rs(Gg, null, qg(v.filterGroups, (T) => (gn(), rs("div", {
                        key: T.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        ft(j8, {
                          "filter-group": T,
                          "tentatively-select-filter": S,
                          "is-selected": B,
                          limit: c(v.name, T.type) ? 4 : 0,
                          "get-sub-filter-config": (M) => l(M, v.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        c(v.name, T.type) ? (gn(), rs("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: o2((M) => a(T.id), ["enter"]),
                          onClick: (M) => a(T.id)
                        }, [
                          Xt("span", null, jg(D.$i18n(ee[T.id])), 1)
                        ], 40, d2)) : Xg("", !0)
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
const Lo = window.Vue.unref, li = window.Vue.openBlock, Yg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const k2 = window.Vue.renderList, $2 = window.Vue.Fragment, Qg = window.Vue.createElementBlock, E2 = window.Vue.normalizeClass, Jg = window.Vue.createVNode, V2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, Zg = window.Vue.ref;
window.Vue.computed;
const ep = window.Vue.watch, L2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = ge(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: s } = Yf(), {
      getFiltersSummary: o,
      selectFilter: a,
      isFilterSelected: r,
      waitingForPageCollectionsFetch: l,
      validateURLFilterWithCollections: c
    } = mr(), d = Zg(!1), i = () => {
      s(), d.value = !0;
    }, u = (p) => {
      n(p), a(p);
    }, g = Zg(o());
    return ep(d, (p) => {
      p || (g.value = o());
    }), ep(l, (p) => {
      p || (c(), g.value = o());
    }), (p, m) => Lo(l) ? (li(), Yg(Lo(dt), { key: 0 })) : (li(), Qg("div", V2, [
      (li(!0), Qg($2, null, k2(g.value, (h) => (li(), Yg(ws, {
        key: h.label,
        class: E2(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": Lo(r)(h)
        }]),
        icon: h.icon,
        content: h.label,
        onClick: (f) => u(h)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      Jg(ws, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: Lo(ku),
        content: Lo(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: i
      }, null, 8, ["icon", "content"]),
      Jg(C2, {
        modelValue: d.value,
        "onUpdate:modelValue": m[0] || (m[0] = (h) => d.value = h)
      }, null, 8, ["modelValue"])
    ]));
  }
}, As = window.Vue.computed, tp = window.Vue.ref, T2 = window.Vue.watch, A2 = window.Vuex.useStore, D2 = () => {
  const e = A2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: s
  } = P(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: a } = vu(), r = kt(), l = As(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), c = As(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = tp(0), i = tp(0), { maxSuggestionsPerSlice: u } = e.state.suggestions, g = 4, p = As(
    () => a(d.value)
  ), m = As(
    () => o(i.value)
  ), h = () => {
    y(), V(), E(), A();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: w
  } = Eu(), _ = (I) => I.length === u, x = As(
    () => _(m.value)
  ), k = As(
    () => _(p.value)
  ), y = () => {
    const I = (d.value + 1) % g, H = _(
      a(I)
    );
    (!k.value || !H) && f();
  }, E = () => {
    const I = (i.value + 1) % g, H = _(
      o(I)
    );
    (!x.value || !H) && w();
  }, S = (I) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", I), y();
  }, B = (I) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", I), E();
  }, V = () => d.value = (d.value + 1) % g, A = () => i.value = (i.value + 1) % g;
  return T2(
    s,
    () => {
      i.value = 0, E(), d.value = 0, y();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: B,
    discardSectionSuggestion: S,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: c,
    sectionSuggestionsLoading: l,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: o,
    isCurrentPageSuggestionsSliceFull: x,
    isCurrentSectionSuggestionsSliceFull: k
  };
}, P2 = window.Vuex.useStore, Pu = () => {
  const e = P2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Eu(), s = (d, i, u) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === u
  ), o = (d) => b(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: u, targetLanguage: g } = d;
    yield me.markFavorite(i, u, g);
    const p = new Ys({
      title: i,
      sourceLanguage: u,
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
    markFavoriteSuggestion: (d, i, u) => b(void 0, null, function* () {
      const g = s(
        i,
        u,
        d
      );
      g && (e.commit(
        "suggestions/removePageSuggestionFromList",
        g
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](i, u, d);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield me.markFavorite(
        d,
        i,
        u
      );
      const m = new Ys({
        title: d,
        sourceLanguage: i,
        targetLanguage: u
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), me.unmarkFavorite(d))
  };
}, B2 = "suggestion_no_seed", F2 = "suggestion_recent_edit", M2 = "suggestion_topic_area", N2 = "suggestion_search_result_seed", U2 = "suggestion_featured", I2 = "suggestion_collections", R2 = "suggestion_region", z2 = () => {
  const { currentSuggestionFilters: e } = P();
  return (t = null) => {
    const { type: n, id: s } = e.value;
    if (s === on)
      return t ? F2 : B2;
    if (n === We)
      return M2;
    if (n === $e)
      return R2;
    if (n === xt)
      return N2;
    if (s === En)
      return U2;
    if (s === ne || n === ne)
      return I2;
    const o = new Error(
      `[CX] No matching event source found for filter with type ${n} and id ${s}`
    );
    throw mw.errorLogger.logError(o, "error.contenttranslation"), o;
  };
};
const np = window.Vue.normalizeClass, O2 = window.Vue.resolveDirective, To = window.Vue.createElementVNode, ci = window.Vue.withDirectives, _e = window.Vue.unref, ot = window.Vue.openBlock, Wt = window.Vue.createBlock, Fn = window.Vue.createCommentVNode, Sl = window.Vue.createVNode, Ao = window.Vue.withCtx, sp = window.Vue.renderList, op = window.Vue.Fragment, yl = window.Vue.createElementBlock, j2 = window.Vue.toDisplayString, H2 = window.Vue.createTextVNode, q2 = window.Vue.vShow, G2 = { class: "cx-suggestion-list" }, X2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, W2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, K2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Kt = window.Vue.computed, Y2 = window.Vue.inject, Q2 = window.Vue.ref, J2 = window.Codex.CdxButton, Z2 = window.Codex.CdxIcon, e$ = window.Vuex.useStore, t$ = {
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
    } = P(), { supportedSourceLanguageCodes: o, supportedTargetLanguageCodes: a } = ba(), r = mf(), l = (te) => r(te, n.value), c = (te) => r(t.value, te), d = z2(), i = $a(), u = (te) => {
      i(
        te.sourceTitle,
        te.sourceLanguage,
        te.targetLanguage,
        d(te.suggestionSeed),
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
      isCurrentPageSuggestionsSliceFull: x,
      isCurrentSectionSuggestionsSliceFull: k
    } = D2(), y = Q2(null), E = kt(), S = () => {
      E({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), y.value && y.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: B, markFavoritePageSuggestion: V } = Pu(), A = Y2("breakpoints"), I = Kt(() => A.value.mobile), H = Kt(
      () => I.value ? null : "pb-2 flex justify-between items-center"
    ), ce = e$(), Z = Kt(
      () => ce.state.suggestions.isPageSuggestionsFetchPending
    ), oe = Kt(
      () => ce.state.suggestions.isSectionSuggestionsFetchPending
    ), q = Kt(
      () => Z.value || w.value && !x.value
    ), ee = Kt(
      () => oe.value || _.value && !k.value
    ), Y = Kt(
      () => Z.value || w.value || g.value.length > 0
    ), he = Kt(
      () => oe.value || _.value || p.value.length > 0
    ), Pe = Kt(
      () => !Y.value && !he.value
    ), Be = Kt(
      () => !_.value && !w.value && !Z.value && !oe.value && !Pe.value
    );
    return (te, nt) => {
      const D = O2("i18n");
      return ci((ot(), yl("div", G2, [
        Sl(_e(Je), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: Ao(() => [
            To("div", {
              class: np(["cx-suggestion-list__header-card__header px-4", H.value])
            }, [
              ci(To("h3", {
                class: np(["mw-ui-card__title mb-0", { "py-3": I.value }])
              }, null, 2), [
                [D, void 0, "cx-suggestionlist-title"]
              ]),
              I.value ? Fn("", !0) : (ot(), Wt(or, {
                key: 0,
                "source-languages": _e(o),
                "target-languages": _e(a),
                "selected-source-language": _e(t),
                "selected-target-language": _e(n),
                "onUpdate:selectedSourceLanguage": l,
                "onUpdate:selectedTargetLanguage": c
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Sl(L2)
          ]),
          default: Ao(() => [
            I.value ? (ot(), Wt(or, {
              key: 0,
              "source-languages": _e(o),
              "target-languages": _e(a),
              "selected-source-language": _e(t),
              "selected-target-language": _e(n),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": c
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : Fn("", !0)
          ]),
          _: 1
        }),
        he.value ? (ot(), Wt(_e(Je), {
          key: 0,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: Ao(() => [
            ci(To("h5", X2, null, 512), [
              [D, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (ot(!0), yl(op, null, sp(_e(p), (N, Q) => (ot(), Wt(ru, {
              key: `section-suggestion-${Q}`,
              class: "ma-0",
              suggestion: N,
              onClose: (v) => _e(h)(N),
              onClick: (v) => u(N),
              onBookmark: (v) => _e(B)(N)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ee.value ? (ot(), Wt(_e(dt), { key: 0 })) : Fn("", !0)
          ]),
          _: 1
        })) : Fn("", !0),
        Y.value ? (ot(), Wt(_e(Je), {
          key: 1,
          ref_key: "pageSuggestionsList",
          ref: y,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: Ao(() => [
            ci(To("h5", W2, null, 512), [
              [D, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (ot(!0), yl(op, null, sp(_e(g), (N, Q) => (ot(), Wt(ru, {
              key: `page-suggestion-${Q}`,
              suggestion: N,
              onClose: (v) => _e(m)(N),
              onClick: (v) => u(N),
              onBookmark: (v) => _e(V)(N)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            q.value ? (ot(), Wt(_e(dt), { key: 0 })) : Fn("", !0)
          ]),
          _: 1
        }, 512)) : Fn("", !0),
        Pe.value ? (ot(), Wt(Kf, {
          key: 2,
          title: te.$i18n("cx-sx-suggestion-list-empty-title"),
          description: te.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : Fn("", !0),
        To("div", K2, [
          Be.value ? (ot(), Wt(_e(J2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: S
          }, {
            default: Ao(() => [
              Sl(_e(Z2), {
                class: "me-1",
                icon: _e(cf)
              }, null, 8, ["icon"]),
              H2(" " + j2(te.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : Fn("", !0)
        ])
      ], 512)), [
        [q2, e.active]
      ]);
    };
  }
}, n$ = window.Vue.resolveDirective, s$ = window.Vue.createElementVNode, o$ = window.Vue.withDirectives, a$ = window.Vue.renderList, i$ = window.Vue.Fragment, xl = window.Vue.openBlock, r$ = window.Vue.createElementBlock, ap = window.Vue.unref, ip = window.Vue.createBlock, rp = window.Vue.withCtx, l$ = window.Vue.createCommentVNode, c$ = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, u$ = window.Vue.computed, d$ = window.Vuex.useStore, g$ = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = d$(), n = u$(() => t.state.suggestions.favorites || []), s = $a(), o = (r) => s(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = Pu();
    return (r, l) => {
      const c = n$("i18n");
      return n.value.length ? (xl(), ip(ap(Je), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: rp(() => [
          o$(s$("h3", c$, null, 512), [
            [c, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: rp(() => [
          (xl(!0), r$(i$, null, a$(n.value, (d, i) => (xl(), ip(ru, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (u) => o(d),
            onBookmark: (u) => ap(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : l$("", !0);
    };
  }
};
const p$ = window.Vue.resolveDirective, Do = window.Vue.createElementVNode, m$ = window.Vue.withDirectives, h$ = window.Vue.renderList, f$ = window.Vue.Fragment, lp = window.Vue.openBlock, cp = window.Vue.createElementBlock, w$ = window.Vue.unref, v$ = window.Vue.createVNode, _$ = window.Vue.toDisplayString, S$ = { class: "cx-help-panel pa-4" }, y$ = { class: "cx-help-panel__item-list mt-6 ps-2" }, x$ = ["href", "target"], b$ = ["textContent"], C$ = window.Codex.CdxIcon, k$ = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = ge(), n = [
      {
        icon: by,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: _y,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (s, o) => {
      const a = p$("i18n");
      return lp(), cp("div", S$, [
        m$(Do("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Do("ul", y$, [
          (lp(), cp(f$, null, h$(n, (r, l) => Do("li", {
            key: l,
            class: "mt-4"
          }, [
            Do("a", {
              href: r.href,
              target: r.target
            }, [
              v$(w$(C$), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Do("span", {
                textContent: _$(r.label)
              }, null, 8, b$)
            ], 8, x$)
          ])), 64))
        ])
      ]);
    };
  }
};
const $$ = window.Vue.resolveDirective, Mn = window.Vue.createElementVNode, bl = window.Vue.withDirectives, Cl = window.Vue.toDisplayString, ui = window.Vue.unref, kl = window.Vue.withCtx, di = window.Vue.createVNode, E$ = window.Vue.openBlock, V$ = window.Vue.createElementBlock, L$ = { class: "cx-stats-panel pa-4" }, T$ = ["textContent"], A$ = { class: "cx-stats-panel__monthly-stats-label" }, D$ = ["textContent"], P$ = { class: "cx-stats-panel__total-stats-label" }, B$ = ["href", "target"], F$ = ["textContent"], M$ = window.Codex.CdxIcon, N$ = window.Vue.ref, up = window.Vue.computed, U$ = window.Vue.watch, I$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = ge(), n = e, s = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = up(() => {
      var d, i;
      const c = ((i = (d = n.stats) == null ? void 0 : d[s]) == null ? void 0 : i.count) || 0;
      return mw.language.convertNumber(c);
    }), a = up(() => {
      var d, i;
      const c = ((i = (d = n.stats) == null ? void 0 : d[s]) == null ? void 0 : i.delta) || 0;
      return mw.language.convertNumber(c);
    }), r = N$(null), l = {
      icon: rf,
      label: t.i18n("cx-sx-dashboard-stats-panel-all-stats-label"),
      href: "https://superset.wmcloud.org/superset/dashboard/p/X61GbQpZ5Rb/",
      target: "_blank"
    };
    return U$(
      () => n.stats,
      () => {
        const c = n.stats, d = r.value.getContext("2d"), i = Object.keys(n.stats || {}).sort(), u = i.reduce(
          (E, S) => Math.max(E, c[S].delta),
          0
        ), g = i.map((E) => c[E].delta), p = r.value.getBoundingClientRect().width, m = r.value.getBoundingClientRect().height;
        r.value.width = p, r.value.height = m;
        const h = 4, f = 6, w = 50, _ = (w - h) / u;
        let x = h;
        const k = Math.floor(
          (p - h) / (f + h)
        ), y = g.slice(
          Math.max(g.length - k, 0)
        );
        y.forEach((E, S) => {
          S === y.length - 1 && (d.fillStyle = "#36c");
          const B = w - E * _;
          d.fillRect(x, B, f, E * _), x += f + h;
        });
      }
    ), (c, d) => {
      const i = $$("i18n");
      return E$(), V$("div", L$, [
        bl(Mn("h5", null, null, 512), [
          [i, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        di(ui(U), null, {
          default: kl(() => [
            di(ui(C), { class: "cx-stats-panel__monthly-stats" }, {
              default: kl(() => [
                Mn("h3", {
                  textContent: Cl(a.value)
                }, null, 8, T$),
                bl(Mn("h5", A$, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            di(ui(C), { class: "cx-stats-panel__total-stats" }, {
              default: kl(() => [
                Mn("h3", {
                  textContent: Cl(o.value)
                }, null, 8, D$),
                bl(Mn("h5", P$, null, 512), [
                  [i, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Mn("canvas", {
          ref_key: "canvasRef",
          ref: r,
          class: "cx-stats-panel__canvas"
        }, null, 512),
        Mn("a", {
          class: "cx-stats-panel__stats-link",
          href: l.href,
          target: l.target
        }, [
          di(ui(M$), {
            class: "me-2",
            icon: l.icon
          }, null, 8, ["icon"]),
          Mn("span", {
            textContent: Cl(l.label)
          }, null, 8, F$)
        ], 8, B$)
      ]);
    };
  }
}, Qf = () => {
  const e = kt();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const R$ = window.Vue.renderSlot, z$ = window.Vue.unref, O$ = window.Vue.createVNode, j$ = window.Vue.createElementVNode, H$ = window.Vue.openBlock, q$ = window.Vue.createElementBlock, G$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, X$ = { class: "col-12 ma-0 pa-0" }, W$ = {
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
    const n = t, s = Qf(), o = (a) => {
      s(a), n("update:active", a);
    };
    return (a, r) => (H$(), q$("footer", G$, [
      j$("div", X$, [
        R$(a.$slots, "default", {}, () => [
          O$(z$(Sa), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: o
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, K$ = window.Vuex.useStore, Y$ = () => {
  const e = K$(), t = to();
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
}, Q$ = window.Vuex.useStore, Jf = () => {
  const e = Q$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a
  } = P(), { isDefaultFilter: r } = du(), { previousRoute: l } = De(e), c = kt(), d = () => {
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
    return g === "suggestion_filter_direct_preselect" && (p.event_context = s.value.id), c(p);
  } };
}, dp = window.Vue.computed, J$ = window.Vuex.useStore, Ee = () => {
  const e = J$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s,
    sectionURLParameter: o
  } = P(), a = dp(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      s.value
    )
  ), r = dp(() => o.value === Qn.LEAD_SECTION_DUMMY_TITLE ? o.value : a.value.missingSections[o.value] || a.value.presentSections[o.value] || "");
  return { sectionSuggestion: a, activeSectionTargetTitle: r };
}, Z$ = window.Vuex.useStore, eE = window.Vue.computed, qt = () => {
  const e = Z$(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: s,
    pageURLParameter: o
  } = P();
  return { currentTranslation: eE(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === o.value && r.sectionTitleMatches(s.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, $l = window.Vue.computed, tE = window.Vuex.useStore, tt = () => {
  const e = tE(), { sectionSuggestion: t } = Ee(), { currentTranslation: n } = qt(), {
    sourceLanguageURLParameter: s,
    pageURLParameter: o,
    targetLanguageURLParameter: a
  } = P(), r = $l(
    () => e.getters["mediawiki/getPage"](
      s.value,
      o.value
    )
  ), l = $l(
    () => {
      var d, i;
      return ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    }
  ), c = $l(
    () => e.getters["mediawiki/getPage"](
      a.value,
      l.value
    )
  );
  return { currentSourcePage: r, currentTargetPage: c, currentTargetPageTitle: l };
}, gi = window.Vue.computed, nE = window.Vuex.useStore, se = () => {
  const e = nE(), { currentSourcePage: t } = tt(), { currentMTProvider: n } = De(e), { sectionURLParameter: s } = P(), o = gi(() => {
    var c, d;
    return s.value ? (d = t.value) == null ? void 0 : d.getSectionByTitle(s.value) : (c = t.value) == null ? void 0 : c.leadSection;
  }), a = gi(
    () => {
      var c;
      return (c = o.value) == null ? void 0 : c.isTitleSelected;
    }
  ), r = gi(
    () => {
      var c;
      return (c = o.value) == null ? void 0 : c.selectedContentTranslationUnit;
    }
  ), l = gi(
    () => {
      var c;
      return (c = o.value) == null ? void 0 : c.getProposedTranslationByMtProvider(
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
}, El = window.Vue.computed, pt = () => {
  const { sectionURLParameter: e } = P(), { targetPageExists: t } = an(), { sourceSection: n } = se(), { sectionSuggestion: s } = Ee(), o = El(
    () => {
      var l;
      return t.value && !!((l = n.value) != null && l.isLeadSection);
    }
  ), a = El(
    () => {
      var l;
      return !!((l = n.value) != null && l.isLeadSection) && !t.value;
    }
  );
  return {
    isCurrentSectionPresent: El(
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
}, sE = window.Vue.ref, pi = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX"
}, Vl = sE(null), $t = () => {
  const { isCurrentSectionPresent: e } = pt(), t = () => {
    e.value ? s(pi.EXPAND) : s(pi.NEW_SECTION);
  }, n = () => {
    Vl.value = null;
  }, s = (o) => {
    if (!Object.values(pi).includes(o))
      throw new Error("[CX] Invalid publishing target used");
    Vl.value = o;
  };
  return {
    target: Vl,
    resetPublishTarget: t,
    clearPublishTarget: n,
    setTarget: s,
    PUBLISHING_TARGETS: pi
  };
}, oE = window.Vue.watch, aE = () => {
  const { fetchAllTranslations: e } = ao(), t = gf(), n = Y$(), { fetchPageCollectionGroups: s } = xu(), { logDashboardOpenEvent: o } = Jf(), { applicationLanguagesInitialized: a } = hf(), { clearPublishTarget: r } = $t();
  return () => b(void 0, null, function* () {
    s(), r();
    try {
      yield n();
    } catch (l) {
      mw.log.error("[CX] Error while fetching favorite suggestions", l);
    }
    yield e(), oE(
      a,
      () => {
        a.value && (o(), t());
      },
      { immediate: !0 }
    );
  });
}, gp = window.Vue.computed, iE = window.Vue.ref, rE = window.Vue.watch, lE = window.Vue.watchEffect, cE = window.Vuex.useStore, uE = ["suggestions", "draft", "published"], dE = () => {
  const e = cE(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = P(), { translationsFetched: s } = ao(), o = iE(null);
  if (uE.includes(t.value))
    o.value = t.value;
  else {
    const a = gp(
      () => s.value.draft
    ), r = gp(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? o.value = r.value.length > 0 ? "draft" : "suggestions" : (o.value = "suggestions", rE(a, (l) => {
      l && (o.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return lE(() => {
    n(o.value), window.scrollTo(0, 0);
  }), o;
}, gE = window.Vue.computed, pE = () => {
  const e = ge();
  return gE(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: X0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: ir,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: G0,
        type: "text"
      }
    }
  ]);
};
const Ce = window.Vue.unref, Ue = window.Vue.createVNode, mE = window.Vue.toDisplayString, hE = window.Vue.createTextVNode, pn = window.Vue.withCtx, Ll = window.Vue.openBlock, pp = window.Vue.createBlock, mp = window.Vue.createCommentVNode, fE = window.Vue.vShow, wE = window.Vue.withDirectives, vE = window.Vue.isRef, _E = window.Vue.createElementBlock, hp = window.Vue.computed, SE = window.Vue.inject, yE = window.Vuex.useStore, xE = window.Codex.CdxButton, bE = window.Codex.CdxIcon, CE = {
  __name: "CXDashboard",
  setup(e) {
    const t = et(), n = kt(), s = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    aE()();
    const a = yE();
    a.dispatch("translator/fetchTranslatorStats");
    const r = hp(() => a.state.translator.translatorStats), l = dE(), c = pE(), d = Qf(), i = (p) => {
      d(p), l.value = p;
    }, u = SE("breakpoints"), g = hp(() => u.value.mobile);
    return mw.cx.eventlogging.stats.dashboardAccess(g.value), (p, m) => (Ll(), _E("div", null, [
      Ue(Ce(U), { class: "ma-0 pb-4" }, {
        default: pn(() => [
          Ue(Ce(xE), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: s
          }, {
            default: pn(() => [
              Ue(Ce(bE), {
                class: "me-1",
                icon: Ce(tf)
              }, null, 8, ["icon"]),
              hE(" " + mE(p.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Ue(Ce(U), {
        class: "ma-0",
        align: "start"
      }, {
        default: pn(() => [
          p.$mwui.breakpoint.tabletAndUp ? (Ll(), pp(Ce(C), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: pn(() => [
              Ue(Ce(Sa), {
                id: "dashboard-list-selector--desktop",
                items: Ce(c),
                active: Ce(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : mp("", !0),
          Ue(Ce(C), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: pn(() => [
              wE(Ue(g$, null, null, 512), [
                [fE, Ce(l) === "suggestions"]
              ]),
              Ue(t$, {
                active: Ce(l) === "suggestions"
              }, null, 8, ["active"]),
              Ue($g, {
                "translation-status": "draft",
                "active-status": Ce(l)
              }, null, 8, ["active-status"]),
              Ue($g, {
                "translation-status": "published",
                "active-status": Ce(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Ue(Ce(C), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: pn(() => [
              Ue(Ce(U), {
                class: "ma-0",
                align: "start"
              }, {
                default: pn(() => [
                  Ue(Ce(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: pn(() => [
                      Ue(I$, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Ue(Ce(C), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: pn(() => [
                      Ue(k$)
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
      p.$mwui.breakpoint.mobile ? (Ll(), pp(W$, {
        key: 0,
        active: Ce(l),
        "onUpdate:active": m[0] || (m[0] = (h) => vE(l) ? l.value = h : null),
        items: Ce(c)
      }, null, 8, ["active", "items"])) : mp("", !0)
    ]));
  }
}, kE = {
  name: "DashboardView",
  components: { CxDashboard: CE }
}, $E = window.Vue.resolveComponent, EE = window.Vue.createVNode, VE = window.Vue.openBlock, LE = window.Vue.createElementBlock, TE = { class: "cx-translation-dashboard" };
function AE(e, t, n, s, o, a) {
  const r = $E("cx-dashboard");
  return VE(), LE("main", TE, [
    EE(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const fp = /* @__PURE__ */ de(kE, [["render", AE]]), Ds = window.Vue.computed, DE = () => {
  const { sectionSuggestion: e } = Ee(), { targetLanguageURLParameter: t } = P(), { currentTranslation: n } = qt(), s = Ds(
    () => {
      var g, p, m;
      return (m = (p = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), o = Ds(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = Ds(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = an(), c = Ds(() => r ? K.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? o.value >= 1 ? "cx-sx-select-section" : a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : a.value > 0 ? "cx-sx-select-section" : "" : "cx-sx-start-translation-button-label", i = Ds(() => {
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
  }), u = Ds(
    () => {
      var g;
      return !r.value || ((g = e.value) == null ? void 0 : g.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessage: i,
    getActionButtonLabel: d,
    isProgressiveButton: u,
    targetArticlePath: c
  };
};
function PE(e) {
  return e.$el = $(e), e;
}
function BE(e, t, n, s) {
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
function FE() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function ME(e, t) {
  return b(this, null, function* () {
    yield Bu(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = PE(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const NE = window.Vue.computed, UE = window.Vue.onMounted, IE = window.Vue.ref;
function RE(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const zE = {
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
    const n = IE(null);
    let s = null;
    const o = NE(
      () => e.useText ? s.getDom().body.textContent : s.getHtml()
    ), a = () => {
      s.destroy(), n.value.querySelector(".toolbar").innerHTML = "";
    }, c = {
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
    return UE(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = RE;
      const i = yield ME(c, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), s = BE(
        i,
        e.content,
        e.language,
        e.dir
      );
      const u = ve.ui.contextItemFactory.lookup("reference");
      u.prototype.getRendering = FE, s.focus();
    })), { sxeditor: n };
  }
}, tr = window.Vue.createElementVNode, OE = window.Vue.openBlock, jE = window.Vue.createElementBlock, HE = ["lang", "dir"], qE = /* @__PURE__ */ tr("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ tr("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ tr("div", { class: "toolbar" })
  ])
], -1), GE = ["lang", "dir"];
function XE(e, t, n, s, o, a) {
  return OE(), jE("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    qE,
    tr("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, GE)
  ], 8, HE);
}
const WE = /* @__PURE__ */ de(zE, [["render", XE]]);
function Bu() {
  return mw.loader.using("mw.cx3.ve");
}
const KE = window.Vuex.useStore, YE = () => {
  const e = KE();
  return (t, n) => b(void 0, null, function* () {
    const s = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!s)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield Bu(), new Promise((o) => {
      setTimeout(() => {
        const a = jh.convertSegmentedContentToPageSections(
          s.content,
          !0
          // resolve references
        );
        s.updateSections(a), o();
      }, 0);
    });
  });
}, QE = window.Vuex.useStore, Zf = () => {
  const e = QE();
  return (t, n, s, o = null) => b(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      s
    );
    if (a && a.content)
      return;
    const r = yield _s.fetchPageContent(
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
}, _r = () => {
  const { currentSourcePage: e } = tt(), t = YE(), n = Zf(), {
    setSectionURLParam: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = P(), c = (u, g) => b(void 0, null, function* () {
    if (!u()) {
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
      jt || (yield t(
        o.value,
        r.value
      ));
    }
    g();
  });
  return {
    selectPageSectionByIndex: (u) => {
      const g = () => {
        var m;
        return (m = e.value.sections) == null ? void 0 : m[u];
      };
      return c(g, () => {
        const m = g();
        u === 0 ? m.originalTitle = e.value.title : s(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (u) => c(() => e.value.getSectionByTitle(u), () => {
      s(u);
    })
  };
}, JE = window.Vuex.useStore, io = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: s,
    isQuickTutorialForced: o
  } = P(), { activeSectionTargetTitle: a } = Ee(), { target: r } = $t(), l = JE(), c = et(), d = () => {
    const p = c.currentRoute.value.name !== "sx-quick-tutorial" && (o() || !l.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return c.getRoutes().find((m) => m.name === p);
  }, i = () => {
    const g = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), p = K.getCurrentWikiLanguageCode();
    if (!g || t.value === p)
      return !1;
    const m = s.value ? { section: s.value } : {}, h = K.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      m
    );
    return location.href = h + "#" + d().path, !0;
  }, u = () => {
    const g = {};
    s.value && (g.sourcesection = s.value, a.value && (g.targetsection = a.value)), r.value && (g.publishtarget = r.value), location.href = K.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      g
    );
  };
  return () => {
    if (K.setCXToken(
      e.value,
      t.value,
      n.value
    ), jt) {
      u();
      return;
    }
    if (i())
      return;
    const p = d();
    c.push({ name: p.name });
  };
}, wp = window.Vue.computed, ZE = window.Vue.ref, eV = window.Vue.watchEffect, Tl = /* @__PURE__ */ new Map(), tV = (e, t) => b(void 0, null, function* () {
  return (yield me.fetchArticleSections(
    e,
    t
  )).sections.filter(
    (o) => o.level === "2"
  )[0].byteoffset;
}), nV = (e, t) => {
  const n = `${e}:${t}`;
  if (Tl.has(n))
    return Tl.get(n);
  const s = tV(e, t);
  return Tl.set(n, s), s;
}, ew = () => {
  const { currentSourcePage: e } = tt(), { sectionSuggestion: t } = Ee(), { sectionURLParameter: n } = P(), s = ZE(null);
  eV(() => b(void 0, null, function* () {
    var r;
    if (t.value && n.value)
      s.value = t.value.getSectionSize(n.value);
    else if (t.value) {
      const { missingSections: l } = t.value;
      s.value = Object.keys(l).reduce(
        (c, d) => c + t.value.getSectionSize(d),
        0
      );
    } else if (e.value && !jt) {
      const l = e.value.language, c = e.value.title;
      s.value = yield nV(l, c);
    } else
      s.value = ((r = e.value) == null ? void 0 : r.articleSize) || null;
  }));
  const o = wp(() => s.value ? !t.value && jt ? Yh(s.value) : Su(s.value) : Ge.unknown);
  return { isQuickTranslation: wp(() => o.value === Ge.stub || o.value === Ge.easy), difficulty: o, sizeInBytes: s };
}, Fu = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: s
  } = P(), o = kt(), { difficulty: a } = ew();
  return {
    logDashboardTranslationStartEvent: () => {
      const l = {
        event_type: "dashboard_translation_start",
        event_source: Hf.value,
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
      return iu.value && (l.event_context = iu.value), s.value ? (l.translation_source_section = s.value, l.translation_type = "section") : l.translation_type = "article", o(l);
    }
  };
}, Mu = () => {
  const e = kt(), { currentTranslation: t } = qt();
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
      sourceSectionTitle: c,
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
    return c && (i.translation_source_section = c), d && (i.translation_target_section = d), e(i);
  };
}, sV = window.Vue.ref, oV = () => {
  const e = et(), { logDashboardTranslationStartEvent: t } = Fu(), n = Mu(), s = io(), { sectionURLParameter: o } = P(), { targetPageExists: a } = an(), { selectPageSectionByTitle: r } = _r(), l = () => b(void 0, null, function* () {
    yield r(o.value), e.push({ name: "sx-content-comparator" });
  }), c = sV(!1), { currentTranslation: d } = qt();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !jt ? c.value = !0 : (n(), s()) : o.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), s());
    },
    translationConfirmationDialogOn: c
  };
};
const aV = window.Vue.resolveDirective, vp = window.Vue.createElementVNode, _p = window.Vue.withDirectives, iV = window.Vue.unref, rV = window.Vue.withCtx, lV = window.Vue.openBlock, cV = window.Vue.createBlock, uV = {
  href: "",
  target: "_blank"
}, dV = window.Codex.CdxDialog, gV = {
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
    function c() {
      window.open(n.targetUrl, "_blank"), o(!1);
    }
    return (d, i) => {
      const u = aV("i18n");
      return lV(), cV(iV(dV), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: d.$i18n("cx-unreviewed-translation-dialog-title"),
        "use-close-button": !0,
        "primary-action": r,
        "default-action": l,
        "onUpdate:open": i[0] || (i[0] = (g) => o(g)),
        onPrimary: c,
        onDefault: i[1] || (i[1] = (g) => o(!1))
      }, {
        default: rV(() => [
          _p(vp("p", null, null, 512), [
            [u, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          _p(vp("a", uV, null, 512), [
            [u, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
}, pV = () => {
  const {
    sectionURLParameter: e,
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: s
  } = P(), o = hr();
  return () => b(void 0, null, function* () {
    const a = yield o(
      t.value,
      n.value,
      s.value
    );
    return a instanceof nn ? a.sourceSections.includes(e.value) : !1;
  });
};
const Se = window.Vue.unref, mV = window.Vue.resolveDirective, Po = window.Vue.createElementVNode, Sp = window.Vue.withDirectives, Bo = window.Vue.openBlock, Al = window.Vue.createElementBlock, Dl = window.Vue.createCommentVNode, wt = window.Vue.createVNode, Bt = window.Vue.withCtx, Pl = window.Vue.toDisplayString, Bl = window.Vue.createTextVNode, hV = window.Vue.withModifiers, yp = window.Vue.createBlock, fV = window.Vue.Fragment, wV = { class: "sx-translation-confirmer-body pb-4" }, vV = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, _V = ["innerHTML"], SV = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, yV = ["href"], xV = ["innerHTML"], Fl = window.Vue.computed, Ml = window.Vue.ref, bV = window.Vue.watchEffect, CV = window.Vuex.useStore, Nl = window.Codex.CdxButton, kV = window.Codex.CdxIcon, $V = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = et(), s = CV(), { sectionSuggestion: o } = Ee(), { targetLanguageAutonym: a } = De(s), { sectionURLParameter: r, clearSectionURLParameter: l } = P(), { logDashboardTranslationStartEvent: c } = Fu(), d = io(), { handlePrimaryButtonClick: i, translationConfirmationDialogOn: u } = oV(), g = Ml(!1), p = Ml(null), m = () => b(this, null, function* () {
      let Z = !0;
      try {
        Z = yield bt.checkUnreviewedTranslations();
      } catch (oe) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          oe
        );
      }
      Z !== !0 && (g.value = !0, p.value = Z.targetUrl);
    }), h = () => b(this, null, function* () {
      yield m(), !g.value && (c(), d());
    }), f = () => b(this, null, function* () {
      yield m(), !g.value && i();
    }), w = t;
    bV(() => {
      u.value && (w("open-translation-confirmation-dialog"), u.value = !1);
    });
    const {
      actionInformationMessage: _,
      getActionButtonLabel: x,
      isProgressiveButton: k,
      targetArticlePath: y
    } = DE(), E = ge(), S = Fl(
      () => E.i18n(x(!!r.value))
    ), B = () => b(this, null, function* () {
      yield m(), !g.value && n.push({ name: "sx-section-selector" });
    }), V = Fl(() => {
      var Z, oe;
      return r.value && !!((oe = (Z = o.value) == null ? void 0 : Z.sourceSections) != null && oe.length);
    }), { targetPageExists: A } = an(), I = Fl(() => !r.value && A.value && jt), H = pV(), ce = Ml(!1);
    return H().then((Z) => {
      Z || l(), ce.value = !0;
    }), (Z, oe) => {
      const q = mV("i18n");
      return Bo(), Al(fV, null, [
        Po("section", wV, [
          Se(r) && ce.value ? (Bo(), Al("section", vV, [
            Sp(Po("h6", null, null, 512), [
              [q, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            Po("h5", {
              class: "ma-0",
              innerHTML: Se(r)
            }, null, 8, _V)
          ])) : Se(A) && !Se(r) ? (Bo(), Al("section", SV, [
            wt(Se(U), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Bt(() => [
                Sp(wt(Se(C), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [q, [Se(a)], "cx-sx-existing-translation-status"]
                ]),
                wt(Se(C), { shrink: "" }, {
                  default: Bt(() => [
                    Po("a", {
                      href: Se(y),
                      target: "_blank"
                    }, [
                      wt(Se(kV), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: Se(pr)
                      }, null, 8, ["icon"])
                    ], 8, yV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            wt(Se(U), { class: "ma-0" }, {
              default: Bt(() => [
                wt(Se(C), null, {
                  default: Bt(() => [
                    Po("span", { innerHTML: Se(_) }, null, 8, xV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : Dl("", !0),
          wt(Se(U), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Bt(() => [
              V.value ? (Bo(), yp(Se(C), {
                key: 0,
                shrink: ""
              }, {
                default: Bt(() => [
                  wt(Se(Nl), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: hV(B, ["stop"])
                  }, {
                    default: Bt(() => [
                      Bl(Pl(Z.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Dl("", !0),
              I.value ? (Bo(), yp(Se(C), {
                key: 1,
                shrink: ""
              }, {
                default: Bt(() => [
                  wt(Se(Nl), {
                    size: "large",
                    onClick: h
                  }, {
                    default: Bt(() => [
                      Bl(Pl(Z.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : Dl("", !0),
              wt(Se(C), { shrink: "" }, {
                default: Bt(() => [
                  wt(Se(Nl), {
                    weight: "primary",
                    size: "large",
                    action: Se(k) ? "progressive" : "default",
                    onClick: f
                  }, {
                    default: Bt(() => [
                      Bl(Pl(S.value), 1)
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
        wt(gV, {
          modelValue: g.value,
          "onUpdate:modelValue": oe[0] || (oe[0] = (ee) => g.value = ee),
          "target-url": p.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const Ul = window.Vue.unref, EV = window.Vue.openBlock, VV = window.Vue.createBlock, LV = window.Vue.computed, tw = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = ba(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: s
    } = P(), { currentLanguageTitleGroup: o } = an(), a = LV(
      () => {
        var d;
        return ((d = o.value) == null ? void 0 : d.titles.map((i) => i.lang)) || [];
      }
    ), r = Ky(), l = (d) => r(d, s.value), c = (d) => r(n.value, d);
    return (d, i) => (EV(), VV(or, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": Ul(t),
      "selected-source-language": Ul(n),
      "selected-target-language": Ul(s),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": c
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, TV = (e) => {
  const o = e / 5 / 15;
  return Math.ceil(o);
};
const Fe = window.Vue.unref, Il = window.Vue.toDisplayString, Nn = window.Vue.createElementVNode, Yt = window.Vue.createVNode, Ps = window.Vue.withCtx, AV = window.Vue.resolveDirective, DV = window.Vue.withDirectives, PV = window.Vue.normalizeClass, xp = window.Vue.openBlock, BV = window.Vue.createElementBlock, FV = window.Vue.createCommentVNode, MV = window.Vue.createBlock, NV = ["textContent"], UV = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, IV = ["textContent"], RV = { class: "pe-3" }, zV = ["textContent"], OV = window.Codex.CdxButton, Fo = window.Codex.CdxIcon, Un = window.Vue.computed, jV = window.Vuex.useStore, HV = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = jV(), { currentSourcePage: n } = tt(), { sectionSuggestion: s } = Ee(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l
    } = P(), c = Un(() => t.state.suggestions.favorites || []), d = Un(
      () => c.value.some(
        (B) => r.value === B.title && o.value === B.sourceLanguage && a.value === B.targetLanguage
      )
    ), { markFavoriteSuggestion: i, removeFavoriteSuggestion: u } = Pu(), g = () => i(
      r.value,
      o.value,
      a.value
    ), p = () => u(
      new Ys({
        title: r.value,
        sourceLanguage: o.value,
        targetLanguage: a.value
      })
    ), m = Un(
      () => d.value ? of : af
    ), h = Un(
      () => d.value ? p : g
    ), f = Un(
      () => K.getPageUrl(o.value || "", r.value || "")
    ), w = Un(
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
      for (let A = 0; A < V.length; A++)
        if (B >= V[A].value)
          return (B / V[A].value).toFixed(1).replace(/\.0$/, "") + V[A].suffix;
      return B.toString();
    }, x = Un(() => {
      var V;
      const B = Object.values(((V = n.value) == null ? void 0 : V.pageviews) || {}).reduce(
        (A, I) => A + I,
        0
      );
      return _(B);
    }), { isQuickTranslation: k, sizeInBytes: y } = ew(), E = ge(), S = Un(() => {
      if (!s.value && !n.value || !y.value)
        return "";
      const B = TV(y.value), V = B >= 60 ? B / 60 : 0, A = Math.round(V * 2) / 2;
      if (!s.value && jt)
        return E.i18n(
          "cx-sx-translation-confirmer-translation-time-whole-article",
          A,
          B
        );
      if (s.value) {
        if (l.value)
          return E.i18n(
            "cx-sx-translation-confirmer-translation-time-single-section",
            A,
            B
          );
      } else
        return E.i18n(
          "cx-sx-translation-confirmer-translation-time-lead-section",
          A,
          B
        );
      return E.i18n(
        "cx-sx-translation-confirmer-translation-time-sections",
        A,
        B,
        Object.keys(s.value.missingSections).length
      );
    });
    return (B, V) => {
      const A = AV("i18n");
      return xp(), MV(Fe(U), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: Ps(() => [
          Yt(Fe(C), null, {
            default: Ps(() => [
              Yt(Fe(U), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: Ps(() => [
                  Yt(Fe(C), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: f.value,
                    target: "_blank"
                  }, {
                    default: Ps(() => [
                      Nn("h5", {
                        class: "ma-0 me-1",
                        textContent: Il(Fe(r))
                      }, null, 8, NV),
                      Yt(Fe(Fo), {
                        size: "x-small",
                        icon: Fe(pr)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Yt(Fe(C), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: Ps(() => [
                      Yt(Fe(OV), {
                        class: "px-0",
                        weight: "quiet",
                        action: d.value ? "progressive" : "default",
                        "aria-label": B.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: h.value
                      }, {
                        default: Ps(() => [
                          Yt(Fe(Fo), { icon: m.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Nn("div", UV, [
                Nn("div", null, [
                  Nn("span", null, [
                    Yt(Fe(Fo), {
                      icon: Fe(lf),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    Nn("span", {
                      class: "pe-3",
                      textContent: Il(w.value)
                    }, null, 8, IV)
                  ]),
                  Nn("span", null, [
                    Yt(Fe(Fo), {
                      icon: Fe(rf),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    DV(Nn("span", RV, null, 512), [
                      [A, [x.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                S.value ? (xp(), BV("span", {
                  key: 0,
                  class: PV(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Fe(k)
                  }])
                }, [
                  Yt(Fe(Fo), {
                    icon: Fe(fy),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  Nn("span", {
                    textContent: Il(S.value)
                  }, null, 8, zV)
                ], 2)) : FV("", !0)
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
const qV = window.Vue.resolveDirective, cs = window.Vue.createElementVNode, mi = window.Vue.withDirectives, GV = window.Vue.toDisplayString, XV = window.Vue.createTextVNode, Rl = window.Vue.unref, zl = window.Vue.withCtx, Ol = window.Vue.openBlock, jl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const WV = { class: "pa-4" }, KV = { class: "flex pt-2" }, YV = window.Codex.CdxButton, QV = window.Vue.ref, JV = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, s = () => n("update:modelValue", !1), o = io(), a = Mu(), r = QV(!1), { currentTranslation: l } = qt(), c = () => b(this, null, function* () {
      r.value = !0;
      let d = !1;
      try {
        d = yield bt.splitTranslation(
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
      const u = qV("i18n");
      return Ol(), jl(Rl(Ct), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: s
      }, {
        footer: zl(() => [
          cs("div", KV, [
            r.value ? (Ol(), jl(Rl(dt), { key: 1 })) : (Ol(), jl(Rl(YV), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: c
            }, {
              default: zl(() => [
                XV(GV(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: zl(() => [
          cs("div", WV, [
            mi(cs("p", null, null, 512), [
              [u, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            mi(cs("p", null, null, 512), [
              [u, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            cs("p", null, [
              mi(cs("strong", null, null, 512), [
                [u, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            mi(cs("p", null, null, 512), [
              [u, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, ZV = window.Vuex.useStore;
let hi = [];
const Nu = () => {
  const e = ZV();
  return (t, n) => {
    const s = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || hi.includes(s) ? Promise.resolve() : (hi.push(s), _s.fetchLanguageTitles(t, n).then((o) => {
      hi = hi.filter(
        (a) => a !== s
      ), o && e.commit("mediawiki/addLanguageTitleGroup", o);
    }));
  };
};
function e4(e, t) {
  return b(this, null, function* () {
    const n = K.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((s) => s.json()).then(
      (s) => Object.freeze(
        new ie(e, t, s.mt)
      )
    );
  });
}
function t4() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function n4(e, t, n, s) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const o = mw.config.get("wgWikiID"), a = K.getWikiDomainCode(e), r = K.getWikiDomainCode(t), l = {
    action: "wblinktitles",
    fromsite: o.replace(r, a),
    fromtitle: n,
    tosite: o,
    totitle: s
  }, c = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(c.postWithToken("csrf", l)).then((d) => {
    const u = {
      action: "tag",
      revid: d.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(c.postWithToken("csrf", u));
  });
}
const Uu = {
  fetchSupportedMTProviders: e4,
  fetchCXServerToken: t4,
  addWikibaseLink: n4
}, s4 = window.Vue.ref, Bs = s4(null), nw = () => {
  const e = () => b(void 0, null, function* () {
    var n, s;
    Bs.value || (yield Uu.fetchCXServerToken().then((o) => {
      o.age <= 30 && (o.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      o.refreshAt = a + o.age - 30, Bs.value = o;
    }).catch((o) => {
      if (o === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        Bs.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = Bs.value) == null ? void 0 : n.refreshAt) <= t ? (Bs.value = null, e()) : (s = Bs.value) == null ? void 0 : s.jwt;
  });
  return e;
};
const bp = window.Vue.resolveDirective, fi = window.Vue.createElementVNode, Cp = window.Vue.withDirectives, In = window.Vue.unref, wi = window.Vue.withCtx, mn = window.Vue.createVNode, Hl = window.Vue.openBlock, kp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const o4 = window.Vue.createBlock, a4 = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, i4 = { class: "mb-0" }, r4 = { class: "sx-translation-confirmer__article-image flex justify-center" }, l4 = ["src"], c4 = { class: "ma-3" }, $p = window.Vue.computed, u4 = window.Vue.inject, d4 = window.Vue.onBeforeUnmount, g4 = window.Vue.ref, p4 = window.Vuex.useStore, m4 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = p4(), { currentSourcePage: n } = tt(), { previousRoute: s } = De(t), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: c
    } = P(), d = u4("breakpoints"), i = $p(() => d.value.nextBreakpoint), u = $p(
      () => {
        var x;
        return (x = n.value) == null ? void 0 : x.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: g } = ao(), p = Nu();
    g("draft"), p(o.value, r.value), Bu(), nw()(), df()(a.value);
    const f = et(), w = () => {
      const x = ["dashboard", "sx-article-search"];
      !s.value || !x.includes(s.value) ? f.push({ name: "dashboard" }) : f.push({ name: s.value });
    };
    d4(() => {
      const x = f.currentRoute.value.name;
      (x === "dashboard" || x === "sx-article-search") && c();
    });
    const _ = g4(!1);
    return (x, k) => {
      const y = bp("i18n"), E = bp("i18n-html");
      return Hl(), kp("section", a4, [
        mn(In(U), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: wi(() => [
            mn(In(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: wi(() => [
                Cp(fi("h5", i4, null, 512), [
                  [y, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            mn(In(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: wi(() => [
                mn(In(Xe), {
                  class: "pa-0",
                  type: "icon",
                  icon: In(rr),
                  "icon-size": 20,
                  onClick: w
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        fi("div", r4, [
          u.value ? (Hl(), kp("img", {
            key: 0,
            src: u.value
          }, null, 8, l4)) : (Hl(), o4(In(Ze), {
            key: 1,
            size: "120",
            icon: In(Ch),
            "icon-color": x.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        mn(HV),
        mn(tw),
        mn($V, {
          onOpenTranslationConfirmationDialog: k[0] || (k[0] = (S) => _.value = !0)
        }),
        mn(In(U), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: wi(() => [
            fi("p", c4, [
              Cp(fi("small", null, null, 512), [
                [E, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        mn(JV, {
          modelValue: _.value,
          "onUpdate:modelValue": k[1] || (k[1] = (S) => _.value = S)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const h4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: m4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, f4 = window.Vue.resolveComponent, w4 = window.Vue.createVNode, v4 = window.Vue.normalizeClass, _4 = window.Vue.openBlock, S4 = window.Vue.createElementBlock;
function y4(e, t, n, s, o, a) {
  const r = f4("sx-translation-confirmer");
  return _4(), S4("main", {
    class: v4(["sx-translation-confirmer-view", a.classes])
  }, [
    w4(r)
  ], 2);
}
const x4 = /* @__PURE__ */ de(h4, [["render", y4]]);
const b4 = window.Vue.toDisplayString, Ep = window.Vue.unref, C4 = window.Vue.createVNode, k4 = window.Vue.createTextVNode, $4 = window.Vue.createElementVNode, E4 = window.Vue.openBlock, V4 = window.Vue.createElementBlock, L4 = { class: "sx-section-selector-view-article-item" }, T4 = ["href"], A4 = window.Codex.CdxIcon, Vp = {
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
    return (t, n) => (E4(), V4("span", L4, [
      $4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        k4(b4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        C4(Ep(A4), {
          size: "x-small",
          icon: Ep(pr)
        }, null, 8, ["icon"])
      ], 8, T4)
    ]));
  }
};
const D4 = window.Vue.resolveDirective, vi = window.Vue.createElementVNode, ql = window.Vue.withDirectives, us = window.Vue.unref, P4 = window.Vue.toDisplayString, _i = window.Vue.withCtx, Mo = window.Vue.createVNode, B4 = window.Vue.openBlock, F4 = window.Vue.createElementBlock, M4 = { class: "sx-section-selector__header pa-4" }, N4 = { class: "sx-section-selector__header-text ma-0" }, U4 = ["textContent"], I4 = { class: "pt-0 ma-0" }, R4 = { class: "ma-0" }, z4 = window.Codex.CdxButton, O4 = window.Codex.CdxIcon, j4 = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Ee();
    return (n, s) => {
      const o = D4("i18n");
      return B4(), F4("div", M4, [
        Mo(us(U), { class: "ma-0 pb-3" }, {
          default: _i(() => [
            Mo(us(C), null, {
              default: _i(() => {
                var a;
                return [
                  ql(vi("h6", N4, null, 512), [
                    [o, void 0, "cx-sx-section-selector-title"]
                  ]),
                  vi("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: P4((a = us(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, U4)
                ];
              }),
              _: 1
            }),
            Mo(us(C), {
              shrink: "",
              class: "justify-end"
            }, {
              default: _i(() => [
                Mo(us(z4), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: s[0] || (s[0] = (a) => n.$emit("close"))
                }, {
                  default: _i(() => [
                    Mo(us(O4), { icon: us(so) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ql(vi("h4", I4, null, 512), [
          [o, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        ql(vi("p", R4, null, 512), [
          [o, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, Lp = window.Vue.renderSlot, H4 = window.Vue.renderList, q4 = window.Vue.Fragment, Gl = window.Vue.openBlock, Tp = window.Vue.createElementBlock, Si = window.Vue.unref, Ap = window.Vue.createVNode, Dp = window.Vue.withCtx, G4 = window.Vue.createBlock, X4 = { class: "sx-section-selector__sections-list ma-0 pa-0" }, W4 = window.Codex.CdxButton, K4 = window.Codex.CdxIcon, sw = {
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
    return (t, n) => (Gl(), Tp("ul", X4, [
      Lp(t.$slots, "before-list"),
      (Gl(!0), Tp(q4, null, H4(e.sections, (s) => (Gl(), G4(Si(U), {
        key: s.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: Dp(() => [
          Ap(Si(W4), {
            weight: "quiet",
            class: "col justify-start items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (o) => t.$emit("select-section", s.sourceTitle)
          }, {
            default: Dp(() => [
              Lp(t.$slots, "default", {
                targetSection: s.targetTitle,
                sourceSection: s.sourceTitle,
                isEasy: s.isEasy
              }),
              Ap(Si(K4), {
                icon: Si(oo),
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
}, Y4 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const Q4 = window.Vue.resolveDirective, yi = window.Vue.createElementVNode, xi = window.Vue.withDirectives, Ft = window.Vue.unref, bi = window.Vue.openBlock, Xl = window.Vue.createBlock, J4 = window.Vue.createCommentVNode, Fs = window.Vue.withCtx, No = window.Vue.createVNode, Z4 = window.Vue.toDisplayString, e3 = window.Vue.createTextVNode, t3 = window.Vue.createElementBlock, n3 = { class: "sx-section-selector__missing-sections py-2" }, s3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, o3 = ["lang", "dir", "innerHTML"], Wl = window.Vue.computed, a3 = window.Codex.CdxButton, i3 = window.Codex.CdxInfoChip, r3 = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Ee(), { targetLanguageURLParameter: n } = P(), s = Wl(() => R.getAutonym(n.value)), o = Wl(
      () => {
        var r;
        return Object.keys(((r = t.value) == null ? void 0 : r.missingSections) || {}).length === 0;
      }
    ), a = Wl(() => {
      var r;
      return (r = t.value) != null && r.orderedMissingSections ? t.value.orderedMissingSections.map((l) => Ke(ue({}, l), {
        isEasy: Qh(
          t.value.getSectionSize(l.sourceTitle)
        )
      })) : [];
    });
    return (r, l) => {
      const c = Q4("i18n");
      return bi(), t3("section", n3, [
        xi(yi("h4", s3, null, 512), [
          [c, [
            s.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        o.value ? (bi(), Xl(Ft(U), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: Fs(() => [
            No(Ft(C), {
              class: "py-6 justify-center",
              innerHTML: Ft(Y4)
            }, null, 8, ["innerHTML"]),
            No(Ft(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: Fs(() => [
                xi(yi("h6", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            No(Ft(C), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: Fs(() => [
                xi(yi("p", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            No(Ft(C), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: Fs(() => [
                No(Ft(a3), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: l[1] || (l[1] = (d) => r.$emit("close"))
                }, {
                  default: Fs(() => [
                    e3(Z4(r.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (bi(), Xl(sw, {
          key: 0,
          sections: a.value,
          onSelectSection: l[0] || (l[0] = (d) => r.$emit("select-section", d))
        }, {
          default: Fs(({ sourceSection: d, isEasy: i }) => {
            var u, g;
            return [
              yi("h5", {
                class: "ma-0",
                lang: (u = Ft(t)) == null ? void 0 : u.sourceLanguage,
                dir: Ft(R.getDir)((g = Ft(t)) == null ? void 0 : g.sourceLanguage),
                innerHTML: d
              }, null, 8, o3),
              i ? xi((bi(), Xl(Ft(i3), {
                key: 0,
                class: "sx-section-selector__easy-section-badge"
              }, null, 512)), [
                [c, void 0, "cx-sx-section-selector-easy-section-badge"]
              ]) : J4("", !0)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const l3 = window.Vue.resolveDirective, Ms = window.Vue.createElementVNode, c3 = window.Vue.withDirectives, vt = window.Vue.unref, u3 = window.Vue.toDisplayString, Ci = window.Vue.createVNode, ki = window.Vue.withCtx, d3 = window.Vue.openBlock, g3 = window.Vue.createElementBlock, p3 = { class: "sx-section-selector__present-sections py-2" }, m3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, h3 = { class: "sx-section-selector__present-section-button-content" }, f3 = ["textContent"], w3 = { class: "sx-section-selector__present-section-button-content" }, v3 = ["lang", "dir", "innerHTML"], _3 = ["lang", "dir", "innerHTML"], S3 = window.Vue.computed, y3 = window.Codex.CdxButton, x3 = window.Codex.CdxIcon, Pp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Ee(), { targetLanguageURLParameter: n } = P(), s = S3(() => R.getAutonym(n.value));
    return (o, a) => {
      var l;
      const r = l3("i18n");
      return d3(), g3("section", p3, [
        c3(Ms("h4", m3, null, 512), [
          [r, [
            s.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        Ci(sw, {
          sections: ((l = vt(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[1] || (a[1] = (c) => o.$emit("select-section", c))
        }, {
          "before-list": ki(() => [
            Ci(vt(U), {
              tag: "li",
              class: "ma-0"
            }, {
              default: ki(() => [
                Ci(vt(y3), {
                  weight: "quiet",
                  class: "col justify-start items-center py-3 px-4",
                  "aria-label": o.$i18n("sx-section-selector-next-button-aria-label"),
                  onClick: a[0] || (a[0] = (c) => o.$emit("select-section", vt(Qn).LEAD_SECTION_DUMMY_TITLE))
                }, {
                  default: ki(() => [
                    Ms("div", h3, [
                      Ms("h5", {
                        class: "sx-section-selector__present-section-button-source",
                        textContent: u3(o.$i18n("cx-sx-present-lead-section-label"))
                      }, null, 8, f3)
                    ]),
                    Ci(vt(x3), {
                      icon: vt(oo),
                      class: "ms-auto"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          default: ki(({ sourceSection: c, targetSection: d }) => {
            var i, u, g, p;
            return [
              Ms("div", w3, [
                Ms("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = vt(t)) == null ? void 0 : i.sourceLanguage,
                  dir: vt(R.getDir)((u = vt(t)) == null ? void 0 : u.sourceLanguage),
                  innerHTML: c
                }, null, 8, v3),
                Ms("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = vt(t)) == null ? void 0 : g.targetLanguage,
                  dir: vt(R.getDir)((p = vt(t)) == null ? void 0 : p.targetLanguage),
                  innerHTML: d
                }, null, 8, _3)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Ie = window.Vue.createVNode, Kl = window.Vue.openBlock, Bp = window.Vue.createBlock, Fp = window.Vue.createCommentVNode, b3 = window.Vue.resolveDirective, Rn = window.Vue.createElementVNode, Uo = window.Vue.withDirectives, at = window.Vue.unref, hn = window.Vue.withCtx, C3 = window.Vue.normalizeClass, Mp = window.Vue.toDisplayString, Np = window.Vue.createTextVNode, k3 = window.Vue.createElementBlock, $3 = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, E3 = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, V3 = { class: "sx-section-selector__additional-consideration-title" }, L3 = { href: "#" }, T3 = { class: "sx-section-selector__additional-consideration-title" }, A3 = { href: "#" }, Io = window.Vue.computed, D3 = window.Vue.inject, P3 = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = D3("breakpoints"), n = Io(() => t.value.desktopAndUp), { sectionSuggestion: s } = Ee(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = P(), c = Io(() => R.getAutonym(o.value)), d = Io(() => R.getAutonym(a.value)), i = Io(
      () => {
        var x;
        return K.getPageUrl(o.value, (x = s.value) == null ? void 0 : x.sourceTitle);
      }
    ), u = Io(
      () => {
        var x;
        return K.getPageUrl(a.value, (x = s.value) == null ? void 0 : x.targetTitle);
      }
    ), g = et(), p = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = qt(), h = io(), f = Mu(), { selectPageSectionByTitle: w } = _r(), _ = (x) => {
      l(x), m.value ? (f(), h()) : (w(x), g.push({ name: "sx-content-comparator" }));
    };
    return mw.cx.eventlogging.stats.selectSectionAccess(!n.value), (x, k) => {
      const y = b3("i18n");
      return Kl(), k3("section", $3, [
        Ie(j4, { onClose: p }),
        Ie(tw),
        Ie(at(U), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: hn(() => [
            Ie(at(C), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: hn(() => [
                Ie(r3, {
                  onSelectSection: _,
                  onClose: p
                }),
                n.value ? Fp("", !0) : (Kl(), Bp(Pp, {
                  key: 0,
                  onSelectSection: _
                })),
                Rn("section", {
                  class: C3(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Uo(Rn("h4", E3, null, 512), [
                    [y, [
                      d.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Ie(at(U), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: hn(() => [
                      Ie(at(C), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: hn(() => [
                          Ie(Vp, {
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
                        default: hn(() => [
                          Ie(Vp, {
                            path: u.value,
                            autonym: d.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 2),
                Ie(at(U), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: hn(() => [
                    Ie(at(C), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: hn(() => [
                        Rn("h6", V3, [
                          Ie(at(Ze), {
                            icon: at(tv),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          Np(" " + Mp(x.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Uo(Rn("p", null, null, 512), [
                          [y, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Uo(Rn("a", L3, null, 512), [
                          [y, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Ie(at(C), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: hn(() => [
                        Rn("h6", T3, [
                          Ie(at(Ze), {
                            icon: at(ev),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          Np(" " + Mp(x.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Uo(Rn("p", null, null, 512), [
                          [y, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Uo(Rn("a", A3, null, 512), [
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
            n.value ? (Kl(), Bp(at(C), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: hn(() => [
                Ie(Pp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: _
                })
              ]),
              _: 1
            })) : Fp("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, B3 = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: P3
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, F3 = window.Vue.resolveComponent, M3 = window.Vue.createVNode, N3 = window.Vue.normalizeClass, U3 = window.Vue.openBlock, I3 = window.Vue.createElementBlock;
function R3(e, t, n, s, o, a) {
  const r = F3("sx-section-selector");
  return U3(), I3("main", {
    class: N3(["sx-section-selector-view", a.classes])
  }, [
    M3(r)
  ], 2);
}
const z3 = /* @__PURE__ */ de(B3, [["render", R3]]), $i = window.Vue.computed, O3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = P(), n = $i(
    () => R.getAutonym(e.value)
  ), s = $i(
    () => R.getAutonym(t.value)
  ), { target: o, PUBLISHING_TARGETS: a } = $t(), r = $i(
    () => o.value === a.EXPAND
  ), l = ge();
  return $i(() => {
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
    }, [c, d];
  });
};
const Up = window.Vue.unref, j3 = window.Vue.createVNode, H3 = window.Vue.openBlock, q3 = window.Vue.createElementBlock, G3 = { class: "sx-content-comparator__content-type-selector" }, X3 = window.Vue.watchEffect, W3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = (r) => s("update:selection", r), a = O3();
    return X3(() => {
      a.value.map((l) => l.value).includes(n.selection) || o(a.value[0].value);
    }), (r, l) => (H3(), q3("div", G3, [
      j3(Up(Sa), {
        items: Up(a),
        active: e.selection,
        onSelect: o
      }, null, 8, ["items", "active"])
    ]));
  }
}, Ei = window.Vue.computed, ow = () => {
  const { currentTargetPage: e } = tt(), { activeSectionTargetTitle: t } = Ee(), n = Ei(
    () => {
      var l;
      return (((l = s.value) == null ? void 0 : l.title) || "").replace(/ /g, "_");
    }
  ), s = Ei(
    () => {
      var l;
      return (l = e.value) == null ? void 0 : l.getSectionByTitle(t.value);
    }
  ), { sourceSection: o } = se(), a = Ei(() => {
    var l;
    return (l = o.value) == null ? void 0 : l.html;
  }), r = Ei(() => {
    var l;
    return (l = s.value) == null ? void 0 : l.html;
  });
  return {
    sourceSectionContent: a,
    targetSectionAnchor: n,
    targetSectionContent: r
  };
};
const Vi = window.Vue.createVNode, fn = window.Vue.unref, K3 = window.Vue.resolveDirective, Y3 = window.Vue.withDirectives, Ro = window.Vue.openBlock, Ip = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Li = window.Vue.withCtx, Yl = window.Vue.createBlock, Q3 = window.Vue.normalizeClass, J3 = {
  key: 0,
  class: "ma-0 pa-0"
}, Z3 = ["lang", "dir", "innerHTML"], Rp = window.Vue.ref, Ti = window.Vue.computed, e5 = window.Vue.onMounted, t5 = {
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
    const n = e, s = t, o = Rp(!1), { sectionSuggestion: a, activeSectionTargetTitle: r } = Ee(), { isPresentLeadSection: l } = pt(), { sectionURLParameter: c } = P(), d = Ti(
      () => (g.value || "").replace(/ /g, "_")
    ), i = (f) => s("update:contentTypeSelection", f), { targetSectionAnchor: u } = ow(), g = Ti(
      () => {
        var f;
        return (((f = a.value) == null ? void 0 : f.sourceSections) || []).find(
          (w) => w === c.value
        );
      }
    ), p = Ti(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: g.value,
            path: `${K.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${d.value}`,
            lang: a.value.sourceLanguage,
            dir: R.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: m.value,
            lang: a.value.targetLanguage,
            dir: R.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: r.value,
            path: `${m.value}#${u.value}`
          };
      }
    }), m = Ti(
      () => K.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), h = Rp(null);
    return e5(() => {
      new IntersectionObserver(
        ([w]) => {
          o.value = w.intersectionRect.height < w.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(h.value.$el);
    }), (f, w) => {
      const _ = K3("i18n");
      return Ro(), Yl(fn(U), {
        ref_key: "contentHeader",
        ref: h,
        class: Q3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: o.value }]),
        direction: "column",
        align: "stretch",
        reverse: o.value
      }, {
        default: Li(() => [
          Vi(W3, {
            selection: e.contentTypeSelection,
            "onUpdate:selection": i
          }, null, 8, ["selection"]),
          Vi(fn(U), {
            justify: "between",
            class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
          }, {
            default: Li(() => [
              Vi(fn(C), null, {
                default: Li(() => [
                  fn(l) ? Y3((Ro(), Ip("h3", J3, null, 512)), [
                    [_, void 0, "cx-sx-present-lead-section-label"]
                  ]) : (Ro(), Ip("h3", {
                    key: 1,
                    lang: p.value.lang,
                    dir: p.value.dir,
                    class: "ma-0 pa-0",
                    innerHTML: p.value.title
                  }, null, 8, Z3))
                ]),
                _: 1
              }),
              Vi(fn(C), { shrink: "" }, {
                default: Li(() => [
                  o.value ? (Ro(), Yl(fn(Xe), {
                    key: 0,
                    icon: fn(ir),
                    progressive: "",
                    label: f.$i18n(
                      "cx-sx-content-comparator-content-header-translate-button-label"
                    ),
                    onClick: w[0] || (w[0] = (x) => f.$emit("translation-button-clicked"))
                  }, null, 8, ["icon", "label"])) : (Ro(), Yl(fn(Xe), {
                    key: 1,
                    class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                    icon: fn(bh),
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
}, Ai = window.Vue.unref, zp = window.Vue.createVNode, n5 = window.Vue.openBlock, s5 = window.Vue.createElementBlock, o5 = { class: "sx-content-comparator__header-navigation flex items-center" }, a5 = window.Vue.computed, i5 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = P(), s = a5(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: o } = _r(), a = () => {
      const l = (s.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      o(c);
    }, r = () => {
      const l = (s.value + 1) % t.sectionSourceTitles.length, c = t.sectionSourceTitles[l];
      o(c);
    };
    return (l, c) => (n5(), s5("div", o5, [
      zp(Ai(Xe), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: Ai(Y0),
        onClick: a
      }, null, 8, ["icon"]),
      zp(Ai(Xe), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: Ai(K0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const Op = window.Vue.toDisplayString, fe = window.Vue.unref, r5 = window.Vue.resolveDirective, Di = window.Vue.withDirectives, wn = window.Vue.openBlock, Ns = window.Vue.createElementBlock, Ql = window.Vue.createCommentVNode, l5 = window.Vue.createTextVNode, c5 = window.Vue.createElementVNode, u5 = window.Vue.normalizeClass, Jl = window.Vue.withCtx, jp = window.Vue.createVNode, Zl = window.Vue.createBlock, d5 = { class: "sx-content-comparator-header__mapped-section" }, g5 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, p5 = { key: 0 }, m5 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, h5 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, f5 = {
  key: 2,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, w5 = window.Vue.computed, v5 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = P(), { activeSectionTargetTitle: n } = Ee(), s = ge(), { target: o, PUBLISHING_TARGETS: a, setTarget: r } = $t(), l = w5(
      () => s.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        R.getAutonym(t.value)
      )
    ), { isPresentLeadSection: c } = pt();
    return (d, i) => {
      const u = r5("i18n");
      return wn(), Ns("div", d5, [
        jp(fe(U), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: Jl(() => [
            jp(fe(C), { grow: "" }, {
              default: Jl(() => [
                c5("h6", g5, [
                  l5(Op(l.value) + " ", 1),
                  fe(o) === fe(a).NEW_SECTION ? Di((wn(), Ns("span", p5, null, 512)), [
                    [u, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : Ql("", !0)
                ]),
                fe(c) ? Ql("", !0) : (wn(), Ns("h6", {
                  key: 0,
                  class: u5(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": fe(o) === fe(a).NEW_SECTION
                  }])
                }, Op(fe(n)), 3))
              ]),
              _: 1
            }),
            fe(c) ? Ql("", !0) : (wn(), Zl(fe(C), {
              key: 0,
              shrink: ""
            }, {
              default: Jl(() => [
                fe(o) === fe(a).EXPAND ? (wn(), Zl(fe(Xe), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: fe(xh),
                  type: "icon",
                  onClick: i[0] || (i[0] = (g) => fe(r)(fe(a).NEW_SECTION))
                }, null, 8, ["icon"])) : (wn(), Zl(fe(Xe), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: fe(ov),
                  type: "icon",
                  onClick: i[1] || (i[1] = (g) => fe(r)(fe(a).EXPAND))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            }))
          ]),
          _: 1
        }),
        fe(c) ? Di((wn(), Ns("p", m5, null, 512)), [
          [u, void 0, "cx-sx-content-comparator-mapped-lead-section-clarifications"]
        ]) : fe(o) === fe(a).EXPAND ? Di((wn(), Ns("p", h5, null, 512)), [
          [u, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ]) : Di((wn(), Ns("p", f5, null, 512)), [
          [u, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ])
      ]);
    };
  }
};
const Te = window.Vue.unref, Us = window.Vue.createVNode, _5 = window.Vue.toDisplayString, Wn = window.Vue.createElementVNode, S5 = window.Vue.resolveDirective, ec = window.Vue.withDirectives, zo = window.Vue.openBlock, tc = window.Vue.createElementBlock, Hp = window.Vue.createCommentVNode, nc = window.Vue.withCtx, qp = window.Vue.createBlock, y5 = { class: "sx-content-comparator__header pa-4" }, x5 = { class: "row my-1 py-2 mx-0 gap-6" }, b5 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, C5 = { class: "sx-content-comparator-header__titles shrink" }, k5 = ["lang", "dir"], $5 = {
  key: 0,
  class: "sx-content-comparator-header__section-title pa-0 ma-0"
}, E5 = ["lang", "dir", "innerHTML"], V5 = { class: "py-2 mb-1" }, L5 = /* @__PURE__ */ Wn("br", null, null, -1), Pi = window.Vue.computed, T5 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = P(), { sourceSection: n } = se(), { sectionSuggestion: s } = Ee(), { isCurrentSectionPresent: o } = pt(), a = Pi(
      () => {
        var d;
        return (d = s.value) == null ? void 0 : d.missingSections.hasOwnProperty(t.value);
      }
    ), r = Pi(() => {
      var d;
      return (d = n.value) == null ? void 0 : d.html;
    }), l = Pi(() => [
      Qn.LEAD_SECTION_DUMMY_TITLE,
      ...Object.keys(s.value.missingSections),
      ...Object.keys(s.value.presentSections)
    ]), c = Pi(
      () => {
        var d;
        return (((d = s.value) == null ? void 0 : d.sourceSections) || []).find(
          (i) => i === t.value
        );
      }
    );
    return (d, i) => {
      var g;
      const u = S5("i18n");
      return zo(), tc("div", y5, [
        Us(Te(Xe), {
          class: "py-2 pa-0",
          icon: Te(Q0),
          label: d.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (p) => d.$emit("close"))
        }, null, 8, ["icon", "label"]),
        Wn("div", x5, [
          Wn("div", b5, [
            Wn("div", C5, [
              Wn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Te(s).sourceLanguage,
                dir: Te(R.getDir)(Te(s).sourceLanguage)
              }, _5(Te(s).sourceTitle), 9, k5),
              (g = Te(n)) != null && g.isLeadSection ? ec((zo(), tc("h2", $5, null, 512)), [
                [u, void 0, "cx-sx-present-lead-section-label"]
              ]) : (zo(), tc("h2", {
                key: 1,
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Te(s).sourceLanguage,
                dir: Te(R.getDir)(Te(s).sourceLanguage),
                innerHTML: c.value
              }, null, 8, E5))
            ]),
            Us(i5, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          Wn("div", V5, [
            Us(Te(Xe), {
              class: "sx-content-comparator-header__translation-button",
              icon: Te(ir),
              progressive: "",
              label: d.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (p) => d.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (zo(), qp(Te(U), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: nc(() => [
            Us(Te(C), {
              shrink: "",
              class: "pe-2"
            }, {
              default: nc(() => [
                Us(Te(Ze), { icon: Te(nv) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            Us(Te(C), { class: "ma-0" }, {
              default: nc(() => [
                ec(Wn("strong", null, null, 512), [
                  [u, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                L5,
                ec(Wn("span", null, null, 512), [
                  [u, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Hp("", !0),
        Te(o) ? (zo(), qp(v5, { key: 1 })) : Hp("", !0)
      ]);
    };
  }
};
const Gp = window.Vue.toDisplayString, A5 = window.Vue.createElementVNode, Xp = window.Vue.openBlock, Wp = window.Vue.createElementBlock, D5 = window.Vue.createCommentVNode, P5 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, B5 = ["textContent"], F5 = ["textContent"], aw = {
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
    return (t, n) => (Xp(), Wp("section", P5, [
      A5("h5", {
        textContent: Gp(e.placeholderTitle)
      }, null, 8, B5),
      e.placeholderSubtitle ? (Xp(), Wp("p", {
        key: 0,
        textContent: Gp(e.placeholderSubtitle)
      }, null, 8, F5)) : D5("", !0)
    ]));
  }
}, M5 = (e, t, n) => {
  const s = t.indexOf(e);
  return t.slice(s + 1).map((a) => n[a]).filter(Boolean)[0] || null;
}, N5 = ({
  sourceSectionTitle: e,
  sourceSectionTitles: t,
  targetSectionTitles: n,
  presentSectionMappings: s,
  targetAppendixSectionTitles: o
}) => {
  const a = M5(
    e,
    t,
    s
  );
  return a !== null ? a : n.find(
    (l) => o.includes(l)
  ) || null;
}, sc = window.Vue.computed, U5 = window.Vue.createApp, I5 = window.Vuex.useStore, R5 = () => {
  const e = I5(), { sectionSuggestion: t } = Ee(), { currentTargetPage: n } = tt(), { sectionURLParameter: s } = P(), o = ge(), a = () => U5(
    aw,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, r = sc(() => {
    const { appendixSectionTitles: d } = e.state.suggestions;
    return d[t.value.targetLanguage] || [];
  }), l = sc(
    () => N5({
      sourceSectionTitle: s.value,
      sourceSectionTitles: t.value.sourceSections,
      targetSectionTitles: t.value.targetSections,
      presentSectionMappings: t.value.presentSections,
      targetAppendixSectionTitles: r.value
    })
  ), c = (d) => {
    const i = d.getElementsByTagName("base");
    Array.from(i).forEach(
      (u) => u.parentNode.removeChild(u)
    );
  };
  return sc(() => {
    var u;
    if (!((u = n.value) != null && u.content))
      return null;
    const d = document.createElement("div");
    d.innerHTML = n.value.content, c(d);
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
const oc = window.Vue.createVNode, it = window.Vue.unref, Is = window.Vue.openBlock, Kp = window.Vue.createBlock, Yp = window.Vue.createCommentVNode, Bi = window.Vue.createElementVNode, ac = window.Vue.Fragment, Fi = window.Vue.createElementBlock, z5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, O5 = { class: "sx-content-comparator__source-content" }, j5 = ["lang", "dir", "innerHTML"], H5 = ["lang", "dir", "innerHTML"], q5 = ["innerHTML"], G5 = window.Vue.ref, Qp = window.Vue.computed, Jp = window.Vue.watch, X5 = window.Vue.inject, W5 = {
  __name: "SXContentComparator",
  setup(e) {
    const { resetPublishTarget: t } = $t(), n = et(), s = G5("source_section"), { logDashboardTranslationStartEvent: o } = Fu(), a = io(), r = () => n.push({ name: "sx-section-selector" }), l = () => {
      o(), a();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: d
    } = P(), { sourceSectionContent: i, targetSectionContent: u } = ow(), g = R5(), { sectionSuggestion: p } = Ee(), { isCurrentSectionPresent: m } = pt(), h = Qp(() => p.value.targetTitle), f = Zf();
    Jp(
      h,
      () => b(this, null, function* () {
        try {
          yield f(
            d.value,
            c.value,
            h.value
          );
        } catch (x) {
          throw mw.cx.eventlogging.stats.sourceArticleFetchFailed(!0), x;
        }
      }),
      { immediate: !0 }
    ), Jp(m, t, { immediate: !0 });
    const w = X5("breakpoints"), _ = Qp(() => w.value.mobile);
    return mw.cx.eventlogging.stats.sectionCompareAccess(_.value), (x, k) => (Is(), Fi("section", z5, [
      oc(T5, {
        onTranslationButtonClicked: l,
        onClose: r
      }),
      oc(t5, {
        "content-type-selection": s.value,
        "onUpdate:contentTypeSelection": k[0] || (k[0] = (y) => s.value = y),
        onTranslationButtonClicked: l
      }, null, 8, ["content-type-selection"]),
      Bi("section", O5, [
        s.value === "source_section" ? (Is(), Fi(ac, { key: 0 }, [
          it(i) ? Yp("", !0) : (Is(), Kp(it(dt), { key: 0 })),
          Bi("section", {
            lang: it(c),
            dir: it(R.getDir)(it(c)),
            class: "pt-2 px-4",
            innerHTML: it(i)
          }, null, 8, j5)
        ], 64)) : s.value === "target_article" ? (Is(), Fi(ac, { key: 1 }, [
          it(g) ? Yp("", !0) : (Is(), Kp(it(dt), { key: 0 })),
          Bi("article", {
            lang: it(d),
            dir: it(R.getDir)(it(d)),
            class: "px-4",
            innerHTML: it(g)
          }, null, 8, H5)
        ], 64)) : (Is(), Fi(ac, { key: 2 }, [
          Bi("section", {
            class: "pa-4",
            innerHTML: it(u)
          }, null, 8, q5),
          oc(aw, {
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
}, K5 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: W5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, Y5 = window.Vue.resolveComponent, Q5 = window.Vue.createVNode, J5 = window.Vue.normalizeClass, Z5 = window.Vue.openBlock, eL = window.Vue.createElementBlock;
function tL(e, t, n, s, o, a) {
  const r = Y5("sx-content-comparator");
  return Z5(), eL("main", {
    class: J5(["sx-content-comparator-view", a.classes])
  }, [
    Q5(r)
  ], 2);
}
const nL = /* @__PURE__ */ de(K5, [["render", tL]]);
const sL = window.Vue.resolveDirective, Oo = window.Vue.createElementVNode, Zp = window.Vue.withDirectives, Mi = window.Vue.unref, ic = window.Vue.createVNode, em = window.Vue.toDisplayString, tm = window.Vue.createTextVNode, jo = window.Vue.withCtx, oL = window.Vue.openBlock, aL = window.Vue.createBlock, iL = { class: "mw-ui-dialog__header px-4 py-3" }, rL = { class: "mw-ui-dialog__header-title" }, lL = { class: "pa-4" }, cL = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, nm = window.Codex.CdxButton, uL = {
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
      const c = sL("i18n");
      return oL(), aL(Mi(Ct), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: jo(() => [
          Oo("div", iL, [
            Zp(Oo("span", rL, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: jo(() => [
          Oo("div", cL, [
            ic(Mi(nm), {
              weight: "quiet",
              onClick: o
            }, {
              default: jo(() => [
                tm(em(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            ic(Mi(nm), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: jo(() => [
                tm(em(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: jo(() => [
          ic(Mi(ar)),
          Oo("div", lL, [
            Zp(Oo("span", null, null, 512), [
              [c, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, dL = (e, t, n) => {
  const s = document.createElement("div");
  s.innerHTML = e;
  const o = Array.from(s.children).find(
    (a) => fs(a)
  );
  return o && Lh(o) ? bt.parseTemplateWikitext(
    Eh(o),
    n,
    t
  ) : Promise.resolve(null);
}, iw = (e, t, n) => {
  let s = document.createElement("div");
  s.innerHTML = e, s.firstElementChild.getAttribute("rel") === "cx:Section" && (s = s.firstElementChild);
  const o = Array.from(s.children).find(
    (a) => fs(a)
  );
  return o ? bt.parseTemplateWikitext(
    Eh(o),
    n,
    t
  ) : Promise.resolve(null);
}, gL = window.Vuex.useStore, Iu = () => {
  const e = gL(), { sourceSection: t } = se(), { getCurrentTitleByLanguage: n } = an(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = P(), a = nw(), r = (i, u, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[u] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof ut ? p.blockTemplateProposedTranslations[u] = g : p instanceof Kn && p.addProposedTranslation(u, g);
  }, l = (i, u) => b(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](s.value, o.value, i))
      return "";
    try {
      const p = yield a();
      return yield bt.fetchSegmentTranslation(
        s.value,
        o.value,
        i,
        u,
        p
      );
    } catch (p) {
      return mw.log.error("Error while translating segment", p), "";
    }
  }), c = (i, u) => b(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      i,
      u
    ))
      return;
    let g = t.value.getOriginalContentByTranslationUnitId(i);
    const p = t.value.getContentTranslationUnitById(i);
    let m;
    if (e.commit("application/addMtRequestsPending", i), m = yield l(u, g), !m) {
      e.commit("application/removeMtRequestsPending", i);
      return;
    }
    p instanceof ut && (p.setBlockTemplateAdaptationInfoByHtml(
      u,
      m
    ), m = (yield dL(
      m,
      n(o.value, s.value),
      o.value
    )) || ""), r(
      i,
      u,
      m
    ), e.commit("application/removeMtRequestsPending", i);
  });
  return {
    translateTranslationUnitById: c,
    translateSelectedTranslationUnitForAllProviders: () => {
      const i = e.getters["mediawiki/getSupportedMTProviders"](
        s.value,
        o.value
      ), { selectedTranslationUnitId: u } = t.value;
      i.forEach(
        (g) => c(u, g)
      );
    }
  };
}, pL = window.Vuex.useStore, mL = () => {
  const { sourceSection: e } = se(), t = pL(), { translateTranslationUnitById: n } = Iu();
  return (s) => {
    t.commit("application/setCurrentMTProvider", s);
    const o = e.value.selectedTranslationUnitId;
    n(o, s);
  };
};
function hL(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((s) => {
    s.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const fL = window.Vue.resolveDirective, ct = window.Vue.createElementVNode, Ni = window.Vue.withDirectives, Oe = window.Vue.unref, rc = window.Vue.createVNode, vn = window.Vue.withCtx, wL = window.Vue.renderList, vL = window.Vue.Fragment, Ui = window.Vue.openBlock, _L = window.Vue.createElementBlock, SL = window.Vue.toDisplayString, lc = window.Vue.createBlock, sm = window.Vue.createCommentVNode, yL = { class: "mw-ui-dialog__header pa-4" }, xL = { class: "row ma-0 py-2" }, bL = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, CL = { class: "mb-0" }, kL = { class: "col shrink justify-center" }, $L = { class: "pb-2 mb-0" }, EL = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, VL = ["dir", "lang", "innerHTML"], LL = ["textContent"], TL = ["innerHTML"], AL = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, DL = /* @__PURE__ */ ct("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), PL = ["innerHTML"], cc = window.Vue.computed, BL = window.Vuex.useStore, FL = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, s = ie.EMPTY_TEXT_PROVIDER_KEY, o = ie.ORIGINAL_TEXT_PROVIDER_KEY, a = BL(), {
      sourceSection: r,
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: c
    } = se(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: i
    } = P(), u = cc(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        i.value
      )
    ), g = cc(() => {
      const k = [o, s];
      return u.value.filter(
        (y) => !k.includes(y)
      );
    }), p = cc(
      () => l.value ? r.value.proposedTitleTranslations : c.value.proposedTranslations
    ), m = mL(), h = (k) => {
      m(k), w();
    }, f = ie.getMTProviderLabel, w = () => n("update:active", !1), _ = ge(), x = hL(
      _.i18n("cx-tools-mt-noservices")
    );
    return (k, y) => {
      const E = fL("i18n");
      return e.active ? (Ui(), lc(Oe(Ct), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: vn(() => [
          ct("div", yL, [
            ct("div", xL, [
              ct("div", bL, [
                Ni(ct("h4", CL, null, 512), [
                  [E, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              ct("div", kL, [
                rc(Oe(Xe), {
                  type: "icon",
                  icon: Oe(rr),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            Ni(ct("h6", $L, null, 512), [
              [E, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: vn(() => [
          rc(Oe(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[0] || (y[0] = (S) => h(Oe(o)))
          }, {
            header: vn(() => [
              Ni(ct("h5", EL, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: vn(() => [
              ct("p", {
                dir: Oe(R.getDir)(Oe(d)),
                lang: Oe(d),
                innerHTML: p.value[Oe(o)]
              }, null, 8, VL)
            ]),
            _: 1
          }),
          (Ui(!0), _L(vL, null, wL(g.value, (S) => (Ui(), lc(Oe(Je), {
            key: S,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (B) => h(S)
          }, {
            header: vn(() => [
              ct("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: SL(Oe(f)(S))
              }, null, 8, LL)
            ]),
            default: vn(() => [
              ct("p", {
                innerHTML: p.value[S]
              }, null, 8, TL)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          rc(Oe(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: y[1] || (y[1] = (S) => h(Oe(s)))
          }, {
            header: vn(() => [
              Ni(ct("h5", AL, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: vn(() => [
              DL
            ]),
            _: 1
          }),
          g.value.length ? sm("", !0) : (Ui(), lc(Oe(Je), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: vn(() => [
              ct("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: Oe(x)
              }, null, 8, PL)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : sm("", !0);
    };
  }
}, ML = window.Vuex.useStore, ro = () => {
  const { sourceSection: e } = se(), t = ML(), { translateTranslationUnitById: n } = Iu(), { currentMTProvider: s } = De(t), o = (l) => b(void 0, null, function* () {
    e.value.selectTranslationUnitById(l), yield n(l, s.value);
    const { followingTranslationUnit: c } = e.value;
    c && (yield n(
      c.id,
      s
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: l } = e.value;
      return l ? o(l.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: l, contentTranslationUnits: c } = e.value, d = l - 1;
      let i = 0;
      return d > -1 && (i = c[d].id), o(i);
    },
    selectTranslationUnitById: o
  };
};
const om = window.Vue.toDisplayString, uc = window.Vue.createElementVNode, Ii = window.Vue.unref, NL = window.Vue.createVNode, UL = window.Vue.normalizeClass, IL = window.Vue.withCtx, RL = window.Vue.openBlock, zL = window.Vue.createBlock, OL = ["href"], jL = ["textContent"], HL = ["textContent"], ds = window.Vue.computed, am = "sx-sentence-selector__section-title", qL = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = se(), { currentSourcePage: s, currentTargetPageTitle: o } = tt(), { sourceLanguageURLParameter: a } = P(), { isPresentLeadSection: r } = pt(), l = ds(() => {
      var f;
      return (f = s.value) == null ? void 0 : f.title;
    }), c = ds(
      () => {
        var f;
        return ((f = t.value) == null ? void 0 : f.title) || l.value;
      }
    ), d = ds(
      () => K.getPageUrl(a.value, l.value)
    ), i = ds(
      () => {
        var f;
        return !!((f = t.value) != null && f.translatedTitle);
      }
    ), u = ds(
      () => i.value ? "translated" : "selected"
    ), g = ds(() => {
      const f = [am];
      return n.value && !r.value && f.push(`${am}--${u.value}`), f;
    }), { selectTranslationUnitById: p } = ro(), m = () => p(0), h = ds(
      () => r.value ? o.value : c.value
    );
    return (f, w) => (RL(), zL(Ii(C), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: IL(() => [
        uc("a", {
          href: d.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          uc("strong", {
            textContent: om(l.value)
          }, null, 8, jL),
          NL(Ii(Ze), {
            icon: Ii(bh),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, OL),
        uc("h2", {
          class: UL(["pa-0 ma-0", g.value]),
          onClick: w[0] || (w[0] = (_) => Ii(r) ? m : null),
          textContent: om(h.value)
        }, null, 10, HL)
      ]),
      _: 1
    }));
  }
};
const _n = window.Vue.unref, Ho = window.Vue.createVNode, Ri = window.Vue.withCtx, im = window.Vue.toDisplayString, rm = window.Vue.createTextVNode, GL = window.Vue.openBlock, XL = window.Vue.createBlock, lm = window.Vue.computed, dc = window.Codex.CdxButton, cm = window.Codex.CdxIcon, rw = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: s } = se(), { isPresentLeadSection: o } = pt(), a = lm(
      () => {
        var l;
        return (l = t.value) == null ? void 0 : l.isSelectedTranslationUnitLast;
      }
    ), r = lm(
      () => o.value || n.value
    );
    return (l, c) => (GL(), XL(_n(U), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: Ri(() => [
        Ho(_n(dc), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": l.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: r.value,
          onClick: c[0] || (c[0] = (d) => l.$emit("select-previous-segment"))
        }, {
          default: Ri(() => [
            Ho(_n(cm), {
              class: "me-1",
              icon: _n($u)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Ho(_n(dc), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !_n(s),
          onClick: c[1] || (c[1] = (d) => l.$emit("apply-translation"))
        }, {
          default: Ri(() => [
            rm(im(l.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Ho(_n(dc), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: a.value,
          onClick: c[2] || (c[2] = (d) => l.$emit("skip-translation"))
        }, {
          default: Ri(() => [
            rm(im(l.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Ho(_n(cm), {
              class: "ms-1",
              size: "small",
              icon: _n(oo)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const gs = window.Vue.unref, WL = window.Vue.toDisplayString, qo = window.Vue.createVNode, zi = window.Vue.withCtx, KL = window.Vue.openBlock, YL = window.Vue.createBlock, gc = window.Vue.computed, QL = window.Vuex.useStore, JL = window.Codex.CdxButton, ZL = window.Codex.CdxIcon, eT = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = QL(), n = gc(() => t.state.application.currentMTProvider), s = ge(), o = gc(() => ({
      [ie.ORIGINAL_TEXT_PROVIDER_KEY]: s.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ie.EMPTY_TEXT_PROVIDER_KEY]: s.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = gc(
      () => o.value[n.value] || s.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ie.getMTProviderLabel(n.value)
      )
    );
    return (r, l) => (KL(), YL(gs(C), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: zi(() => [
        qo(gs(U), { class: "ma-0 ps-5 pb-4" }, {
          default: zi(() => [
            qo(gs(C), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: WL(a.value)
            }, null, 8, ["textContent"]),
            qo(gs(C), {
              shrink: "",
              class: "pe-5"
            }, {
              default: zi(() => [
                qo(gs(JL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (c) => r.$emit("configure-options"))
                }, {
                  default: zi(() => [
                    qo(gs(ZL), {
                      class: "pa-0",
                      icon: gs(ku)
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
const Mt = window.Vue.unref, zn = window.Vue.createVNode, tT = window.Vue.resolveDirective, um = window.Vue.createElementVNode, nT = window.Vue.withDirectives, dm = window.Vue.toDisplayString, gm = window.Vue.createTextVNode, Go = window.Vue.withCtx, sT = window.Vue.openBlock, oT = window.Vue.createElementBlock, aT = { class: "mt-retry-body pb-5" }, iT = { class: "retry-body__message" }, pm = window.Codex.CdxButton, pc = window.Codex.CdxIcon, rT = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const s = tT("i18n");
      return sT(), oT("div", aT, [
        um("div", iT, [
          zn(Mt(pc), {
            class: "me-2",
            icon: Mt(my)
          }, null, 8, ["icon"]),
          nT(um("span", null, null, 512), [
            [s, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        zn(Mt(U), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Go(() => [
            zn(Mt(C), { cols: "6" }, {
              default: Go(() => [
                zn(Mt(pm), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (o) => t.$emit("retry-translation"))
                }, {
                  default: Go(() => [
                    zn(Mt(pc), {
                      class: "me-1",
                      icon: Mt(cf)
                    }, null, 8, ["icon"]),
                    gm(" " + dm(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            zn(Mt(C), { cols: "6" }, {
              default: Go(() => [
                zn(Mt(pm), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (o) => t.$emit("configure-options"))
                }, {
                  default: Go(() => [
                    zn(Mt(pc), {
                      class: "me-1",
                      icon: Mt(ky)
                    }, null, 8, ["icon"]),
                    gm(" " + dm(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Rs = window.Vue.createVNode, rt = window.Vue.unref, Xo = window.Vue.openBlock, lT = window.Vue.createElementBlock, cT = window.Vue.createCommentVNode, Oi = window.Vue.createBlock, uT = window.Vue.normalizeClass, dT = window.Vue.normalizeStyle, Wo = window.Vue.withCtx, gT = window.Vue.toDisplayString, pT = window.Vue.createTextVNode, mT = window.Vue.normalizeProps, hT = window.Vue.guardReactiveProps, fT = ["lang", "dir", "innerHTML"], mc = window.Vue.ref, wT = window.Vue.onMounted, vT = window.Vue.onBeforeUnmount, hc = window.Vue.computed, _T = window.Vue.nextTick, ST = window.Vuex.useStore, yT = window.Codex.CdxButton, xT = window.Codex.CdxIcon, bT = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = mc(0), n = mc(null), s = mc(null), o = ST(), { currentMTProvider: a } = De(o), { targetLanguageURLParameter: r } = P(), { sourceSection: l, currentProposedTranslation: c } = se(), d = hc(
      () => {
        var m, h;
        return (h = o.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = hc(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), u = hc(
      () => !!c.value || a.value === ie.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + s.value.$el.clientHeight;
    };
    wT(() => b(this, null, function* () {
      yield _T(), g(), p.observe(n.value.$el), p.observe(s.value.$el);
    })), vT(() => {
      p.unobserve(n.value.$el), p.unobserve(s.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (Xo(), Oi(rt(Je), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Wo(() => [
        Rs(rt(U), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Wo(() => [
            Rs(eT, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            Rs(rt(C), {
              class: uT(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !u.value && d.value
              }]),
              style: dT(u.value ? i.value : null)
            }, {
              default: Wo(() => [
                u.value ? (Xo(), lT("section", {
                  key: 0,
                  lang: rt(r),
                  dir: rt(R.getDir)(rt(r)),
                  innerHTML: rt(c)
                }, null, 8, fT)) : d.value ? (Xo(), Oi(rt(dt), { key: 1 })) : (Xo(), Oi(rT, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Rs(rt(C), {
              ref_key: "footer",
              ref: s,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Wo(() => [
                u.value || d.value ? (Xo(), Oi(rt(yT), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !u.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", rt(c)))
                }, {
                  default: Wo(() => [
                    Rs(rt(xT), {
                      class: "me-1",
                      icon: rt(Cu)
                    }, null, 8, ["icon"]),
                    pT(" " + gT(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : cT("", !0),
                Rs(rw, mT(hT(m.$attrs)), null, 16)
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
}, CT = window.Vue.computed, kT = (e) => CT(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((o) => {
    const a = e.getSentenceById(o.dataset.segmentid);
    o.classList.add(t, "py-1", "me-1");
    const r = ["untranslated", "translated", "selected"].map(
      (c) => `${t}--${c}`
    );
    o.classList.remove(...r), a.selected && o.classList.add(`${t}--selected`);
    const l = a.isTranslated ? "translated" : "untranslated";
    o.classList.add(`${t}--${l}`), o.innerHTML = a.content;
  }), n.innerHTML;
});
const $T = window.Vue.unref, ET = window.Vue.normalizeClass, VT = window.Vue.openBlock, LT = window.Vue.createElementBlock, TT = ["innerHTML"], AT = window.Vue.onMounted, DT = window.Vue.ref, PT = window.Vue.computed, BT = {
  __name: "SubSection",
  props: {
    subSection: {
      type: ut,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = DT(null), a = kT(n.subSection);
    AT(() => {
      o.value.addEventListener("click", (d) => {
        let i;
        if (n.subSection.isBlockTemplate)
          i = n.subSection;
        else {
          const u = d.composedPath().find(
            (g) => g instanceof Element && g.classList.contains("cx-segment")
          );
          if (!u)
            return;
          i = n.subSection.getSentenceById(
            u.dataset.segmentid
          );
        }
        l(i);
      });
    });
    const { selectTranslationUnitById: r } = ro(), l = (d) => {
      if (d.selected) {
        s("bounce-translation");
        return;
      }
      r(d.id);
    }, c = PT(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, i) => (VT(), LT("div", {
      ref_key: "subSectionRoot",
      ref: o,
      class: ET(["sx-sentence-selector__subsection", c.value]),
      innerHTML: $T(a)
    }, null, 10, TT));
  }
};
const mm = window.Vue.unref, hm = window.Vue.createVNode, fm = window.Vue.normalizeStyle, FT = window.Vue.openBlock, MT = window.Vue.createElementBlock, wm = window.Vue.computed, lw = {
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
    const t = e, n = wm(() => ({ "--size": t.size })), s = wm(
      () => !t.isTemplateAdapted || t.percentage === 0 ? av : Wc
    );
    return (o, a) => (FT(), MT("div", {
      class: "block-template-status-indicator",
      style: fm(n.value)
    }, [
      hm(mm(x1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      hm(mm(Ze), {
        icon: s.value,
        size: e.size / 2,
        style: fm({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const On = window.Vue.unref, ji = window.Vue.createVNode, fc = window.Vue.withCtx, NT = window.Vue.openBlock, UT = window.Vue.createBlock, IT = window.Vue.computed, vm = window.Codex.CdxButton, _m = window.Codex.CdxIcon, cw = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = se(), s = IT(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (o, a) => (NT(), UT(On(U), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: fc(() => [
        ji(On(vm), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: On(n),
          "aria-label": o.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => o.$emit("select-previous-segment"))
        }, {
          default: fc(() => [
            ji(On(_m), { icon: On($u) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        ji(On(vm), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: s.value,
          "aria-label": o.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => o.$emit("select-next-segment"))
        }, {
          default: fc(() => [
            ji(On(_m), { icon: On(oo) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, Ko = window.Vue.openBlock, Hi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Sn = window.Vue.unref, zs = window.Vue.withCtx, Yo = window.Vue.createVNode, wc = window.Vue.toDisplayString, vc = window.Vue.createElementVNode, RT = window.Vue.renderList, zT = window.Vue.Fragment, OT = window.Vue.createElementBlock, jT = { class: "pa-4" }, HT = ["textContent"], qT = ["textContent"], GT = window.Vuex.useStore, qi = window.Vue.computed, XT = {
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
    const t = e, { targetLanguageAutonym: n } = De(GT()), s = qi(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), o = ge(), a = qi(() => {
      let c;
      return t.targetTemplateExists ? t.isTemplateAdapted ? s.value < 100 ? c = "cx-sx-block-template-mapping-status-title-partially-template" : c = "cx-sx-block-template-mapping-status-title-fully-template" : c = "cx-sx-block-template-mapping-status-title-unadapted-template" : c = "cx-sx-block-template-mapping-status-title-no-target-template", o.i18n(c);
    }), r = qi(() => {
      let c;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? c = "cx-sx-block-template-mapping-status-explanation-no-mapping" : s.value < 100 ? c = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : c = "cx-sx-block-template-mapping-status-explanation-full-mapping", o.i18n(c);
    }), l = qi(() => {
      let c = [];
      if (!t.targetTemplateExists)
        c.push({
          text: o.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: rv,
          color: yt.gray500
        });
      else if (!t.isTemplateAdapted)
        c.push({
          text: o.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: rr,
          color: yt.gray500
        });
      else if (s.value < 100)
        c.push({
          text: o.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Wc,
          color: yt.blue600
        });
      else {
        let d;
        t.sourceParamsCount ? d = o.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : d = o.i18n("cx-sx-block-template-no-source-params-text"), c.push({
          text: d,
          icon: Wc,
          color: yt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? c.push({
        text: o.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: ir,
        color: yt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && c.push({
        text: o.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: H0,
        color: yt.gray500
      }), c;
    });
    return (c, d) => (Ko(), Hi(Sn(Ct), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: c.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: d[0] || (d[0] = (i) => c.$emit("update:active", i))
    }, {
      header: zs(() => [
        Yo(Sn(U), {
          justify: "center",
          class: "mt-4"
        }, {
          default: zs(() => [
            Yo(Sn(C), { shrink: "" }, {
              default: zs(() => [
                e.targetTemplateExists ? (Ko(), Hi(lw, {
                  key: 0,
                  percentage: s.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (Ko(), Hi(Sn(Ze), {
                  key: 1,
                  icon: Sn(q0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: zs(() => [
        vc("div", jT, [
          vc("h3", {
            textContent: wc(a.value)
          }, null, 8, HT),
          vc("p", {
            class: "mt-6 text-small",
            textContent: wc(r.value)
          }, null, 8, qT),
          (Ko(!0), OT(zT, null, RT(l.value, (i, u) => (Ko(), Hi(Sn(U), {
            key: u,
            align: "start",
            class: "mt-4"
          }, {
            default: zs(() => [
              Yo(Sn(C), { shrink: "" }, {
                default: zs(() => [
                  Yo(Sn(Ze), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              Yo(Sn(C), {
                textContent: wc(i.text)
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
const Ae = window.Vue.unref, je = window.Vue.createVNode, Qt = window.Vue.withCtx, _c = window.Vue.toDisplayString, Sm = window.Vue.createTextVNode, WT = window.Vue.resolveDirective, ym = window.Vue.withDirectives, xm = window.Vue.createElementVNode, KT = window.Vue.normalizeClass, Os = window.Vue.openBlock, bm = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Gi = window.Vue.createBlock, Cm = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const km = window.Vue.mergeProps, YT = { class: "block-template-adaptation-card__container pa-4" }, QT = ["textContent"], JT = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, He = window.Vue.computed, ZT = window.Vue.ref, eA = window.Vuex.useStore, $m = window.Codex.CdxButton, Em = window.Codex.CdxIcon, tA = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = eA(), { targetLanguageAutonym: n, currentMTProvider: s } = De(t), {
      selectedContentTranslationUnit: o,
      currentProposedTranslation: a
    } = se(), r = He(() => {
      var V;
      return (V = o.value) == null ? void 0 : V.isTranslated;
    }), l = He(() => {
      var A;
      return ((A = o.value) == null ? void 0 : A.blockTemplateTranslatedContent) || a.value;
    }), c = He(
      () => {
        var V;
        return (V = o.value) == null ? void 0 : V.getTargetBlockTemplateNameByProvider(
          s.value
        );
      }
    ), d = He(
      () => {
        var V;
        return !((V = t.state.application.mtRequestsPending) != null && V.includes(
          o.value.id
        ));
      }
    ), i = ge(), u = He(
      // Strip HTML comments and return
      () => {
        var V, A;
        return ((A = (V = o.value) == null ? void 0 : V.sourceBlockTemplateName) == null ? void 0 : A.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = He(
      () => {
        var V, A;
        return (A = (V = o.value) == null ? void 0 : V.blockTemplateAdaptationInfo) == null ? void 0 : A[s.value];
      }
    ), p = He(
      () => {
        var V, A;
        return ((V = g.value) == null ? void 0 : V.adapted) || !!((A = g.value) != null && A.partial);
      }
    ), m = He(() => g.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), h = He(() => g.value ? p.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = He(
      () => {
        var V;
        return Object.keys(((V = o.value) == null ? void 0 : V.sourceTemplateParams) || {}).length;
      }
    ), w = He(() => {
      var A;
      const V = (A = o.value) == null ? void 0 : A.getTargetTemplateParamsByProvider(
        s.value
      );
      return Object.keys(V || {});
    }), _ = He(() => w.value.length), x = He(() => {
      const V = S.value;
      return f.value + V === 0 ? 100 : _.value / (f.value + V) * 100 || 0;
    }), k = ZT(!1), y = () => {
      k.value = !0;
    }, E = (V) => V.filter((A) => !w.value.includes(A)), S = He(() => {
      var A;
      const V = ((A = g.value) == null ? void 0 : A.mandatoryTargetParams) || [];
      return E(V).length;
    }), B = He(() => {
      var A;
      const V = ((A = g.value) == null ? void 0 : A.optionalTargetParams) || [];
      return E(V).length;
    });
    return (V, A) => {
      const I = WT("i18n");
      return Os(), Gi(Ae(Je), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Qt(() => [
          xm("div", YT, [
            je(Ae(U), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Qt(() => [
                je(Ae(C), { shrink: "" }, {
                  default: Qt(() => [
                    je(Ae(Em), {
                      icon: Ae($y),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                je(Ae(C), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Qt(() => [
                    Sm(_c(u.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            c.value ? (Os(), bm("div", {
              key: 0,
              class: KT(["pa-4 mb-4", m.value])
            }, [
              je(Ae(U), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Qt(() => [
                  ym(je(Ae(C), { tag: "h5" }, null, 512), [
                    [I, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  je(Ae(C), { shrink: "" }, {
                    default: Qt(() => [
                      je(lw, {
                        percentage: x.value,
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
              xm("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: _c(c.value)
              }, null, 8, QT),
              je(Ae($m), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: A[0] || (A[0] = (H) => V.$emit("edit-translation", l.value))
              }, {
                default: Qt(() => [
                  Sm(_c(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (Os(), bm("div", JT, [
              je(Ae(U), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Qt(() => [
                  ym(je(Ae(C), { tag: "h5" }, null, 512), [
                    [I, [
                      Ae(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  je(Ae(C), { shrink: "" }, {
                    default: Qt(() => [
                      je(Ae($m), {
                        weight: "quiet",
                        "aria-label": V.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Qt(() => [
                          je(Ae(Em), {
                            icon: Ae(xy),
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
            ])) : (Os(), Gi(Ae(dt), { key: 2 }))
          ]),
          r.value ? (Os(), Gi(cw, Cm(km({ key: 1 }, V.$attrs)), null, 16)) : (Os(), Gi(rw, Cm(km({ key: 0 }, V.$attrs)), null, 16)),
          je(XT, {
            active: k.value,
            "onUpdate:active": A[1] || (A[1] = (H) => k.value = H),
            "source-params-count": f.value,
            "target-params-count": _.value,
            "mandatory-missing-params-count": S.value,
            "optional-missing-params-count": B.value,
            "is-template-adapted": p.value,
            "target-template-exists": !!c.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const nA = window.Vue.unref, sA = window.Vue.createVNode, oA = window.Vue.openBlock, aA = window.Vue.createElementBlock, iA = { class: "translated-segment-card-header" }, rA = window.Vue.computed, lA = {
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
    const n = t, { isSectionTitleSelected: s } = se(), o = ge(), a = rA(() => [
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
    return (l, c) => (oA(), aA("div", iA, [
      sA(nA(Sa), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const cA = window.Vue.useCssVars, Re = window.Vue.createVNode, Vm = window.Vue.resolveDirective, uA = window.Vue.createElementVNode, Sc = window.Vue.withDirectives, xe = window.Vue.unref, dA = window.Vue.normalizeStyle, Xi = window.Vue.openBlock, Lm = window.Vue.createElementBlock, gA = window.Vue.createCommentVNode, pA = window.Vue.normalizeClass, _t = window.Vue.withCtx, mA = window.Vue.toDisplayString, hA = window.Vue.createTextVNode, Tm = window.Vue.createBlock, fA = window.Vue.normalizeProps, wA = window.Vue.guardReactiveProps, yn = window.Vue.computed, vA = window.Vue.ref, _A = window.Vue.inject, SA = window.Vuex.useStore, yA = window.Codex.CdxButton, yc = window.Codex.CdxIcon, xA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    cA((_) => ({
      "4929555c": w.value
    }));
    const t = vA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: s,
      isSectionTitleSelected: o
    } = se(), { targetLanguage: a } = De(SA()), r = yn(() => t.value === "sentence"), l = yn(
      () => n.value.subSections.find(
        (_) => _.sentences.some(
          (x) => {
            var k;
            return x.id === ((k = s.value) == null ? void 0 : k.id);
          }
        )
      )
    ), c = yn(() => {
      var _;
      return o.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (_ = s.value) == null ? void 0 : _.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), d = _A("colors"), i = d.gray200, u = d.red600, g = yn(() => o.value ? n.value.translatedTitle : r.value ? s.value.translatedContent : l.value.translatedContent), p = yn(
      () => sn.calculateScore(
        g.value,
        c.value,
        a.value
      )
    ), m = yn(
      () => sn.getScoreStatus(p.value)
    ), h = yn(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = yn(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), w = yn(
      () => f.value[m.value]
    );
    return (_, x) => {
      const k = Vm("i18n"), y = Vm("i18n-html");
      return Xi(), Tm(xe(Je), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: _t(() => [
          Re(xe(U), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: _t(() => [
              Re(lA, {
                selection: t.value,
                "onUpdate:selection": x[0] || (x[0] = (E) => t.value = E)
              }, null, 8, ["selection"]),
              Re(xe(C), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: _t(() => [
                  Re(xe(U), { class: "ma-0" }, {
                    default: _t(() => [
                      Re(xe(C), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: _t(() => [
                          Sc(uA("h5", null, null, 512), [
                            [k, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Sc((Xi(), Lm("p", {
                            key: 0,
                            style: dA({ color: xe(u) })
                          }, null, 4)), [
                            [k, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Sc((Xi(), Lm("p", {
                            key: 1,
                            class: pA(h.value)
                          }, null, 2)), [
                            [y, [
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
                        default: _t(() => [
                          Re(xe(U), { class: "ma-0 ms-2" }, {
                            default: _t(() => [
                              Re(xe(C), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: _t(() => [
                                  Re(xe(yc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: xe(Ly)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Re(xe(C), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: _t(() => [
                                  Re(xe(kh), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: w.value,
                                    background: xe(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Re(xe(C), { shrink: "" }, {
                                default: _t(() => [
                                  Re(xe(yc), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: xe(Ey)
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
                  r.value ? (Xi(), Tm(xe(yA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: x[1] || (x[1] = (E) => _.$emit("edit-translation", g.value))
                  }, {
                    default: _t(() => [
                      Re(xe(yc), {
                        class: "me-1",
                        icon: xe(Cu)
                      }, null, 8, ["icon"]),
                      hA(" " + mA(_.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : gA("", !0)
                ]),
                _: 1
              }),
              Re(xe(C), { class: "translated-segment-card__actions" }, {
                default: _t(() => [
                  Re(cw, fA(wA(_.$attrs)), null, 16)
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
}, bA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = se(), { selectNextTranslationUnit: n, selectTranslationUnitById: s } = ro(), { isPresentLeadSection: o } = pt(), { currentTranslation: a } = qt();
  return () => {
    if (e.value)
      if (a.value && !t.value) {
        const { lastTranslatedContentTranslationUnit: r } = e.value;
        e.value.selectTranslationUnitById(
          (r == null ? void 0 : r.id) || 0
        ), n();
      } else
        t.value || (s(0), o.value && n());
  };
}, uw = window.Vuex.useStore, CA = () => {
  const e = uw(), {
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
    s ? o = yield Uu.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : o = new ie(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", o);
  });
}, kA = () => {
  const e = uw(), { currentMTProvider: t } = De(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: s
  } = P(), o = CA();
  return () => b(void 0, null, function* () {
    yield o();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, s.value);
    if (!t.value || !a.includes(t.value)) {
      const r = ie.getStorageKey(
        n.value,
        s.value
      );
      let l = mw.storage.get(r);
      (!l || !a.includes(l)) && (l = a[0]), e.commit("application/setCurrentMTProvider", l);
    }
  });
}, $A = window.Vue.computed, EA = (e) => {
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
}, VA = () => {
  const { selectedContentTranslationUnit: e } = se(), t = $A(
    () => e.value instanceof ut
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, s = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    s && EA(s);
  };
}, LA = (e, t) => {
  const { content: n, origin: s, baseSectionId: o, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (l) => !ie.isUserMTProvider(l)
  );
  if (s !== "source" && s !== "user" && !r.includes(s))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!o || !a || e.sectionId !== `${o}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, TA = window.Vue.computed, dw = () => {
  const { currentTranslation: e } = qt(), { currentSourcePage: t } = tt();
  return TA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, AA = window.Vue.computed, Ea = () => {
  const { sourceSection: e } = se(), { currentTargetPageTitle: t } = tt(), { isMissingLeadSection: n } = pt();
  return { targetPageTitleForPublishing: AA(
    () => n.value ? e.value.title : t.value
  ) };
}, DA = window.Vuex.useStore, Ru = () => {
  const e = DA(), { sourceSection: t } = se(), { targetPageTitleForPublishing: n } = Ea(), {
    pageURLParameter: s,
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a
  } = P(), r = dw(), { target: l, PUBLISHING_TARGETS: c } = $t();
  return () => {
    const d = n.value, i = e.getters["mediawiki/getSupportedMTProviders"](o.value, a.value), u = `${r.value}_${t.value.id}`, g = t.value.getParallelCorporaUnits(u);
    g.forEach(
      (m) => LA(m, i)
    );
    const p = t.value.getTranslationProgress(a);
    return bt.saveTranslation({
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
      sectionId: u,
      isSandbox: l === c.SANDBOX,
      progress: p
    });
  };
}, PA = window.Vue.effectScope, BA = window.Vue.onScopeDispose, FA = (e) => {
  let t = 0, n, s;
  const o = () => {
    s && --t <= 0 && (s.stop(), n = s = null);
  };
  return (...a) => (t++, n || (s = PA(!0), n = s.run(() => e(...a))), BA(o), n);
}, MA = window.Vuex.useStore;
let xc;
const NA = () => {
  const e = MA(), t = Ru();
  let n = 1e3, s = 0;
  return xc = Au(() => t().then((a) => {
    a instanceof Zn ? (n *= s + 1, s++, setTimeout(xc, n)) : (s = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Zs)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), xc;
}, gw = FA(NA), UA = window.Vuex.useStore, IA = () => {
  const e = UA(), t = gw(), { currentMTProvider: n } = De(e), { sourceSection: s, currentProposedTranslation: o } = se(), { selectNextTranslationUnit: a } = ro();
  return () => b(void 0, null, function* () {
    s.value.setTranslationForSelectedTranslationUnit(
      o.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, RA = window.Vuex.useStore, zA = () => {
  const e = RA(), t = gw();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, OA = window.Vuex.useStore, jA = window.Vue.computed, pw = () => {
  const e = OA(), { currentTranslation: t } = qt(), { currentMTProvider: n } = De(e), { currentTargetPageTitle: s } = tt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = P(), c = kt(), d = jA(() => {
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
    return n.value && (f.translation_provider = ie.getProviderForInstrumentation(n.value)), f;
  });
  return {
    logEditorOpenEvent: () => {
      const f = ue({
        event_type: "editor_open"
      }, d.value);
      return c(f);
    },
    logEditorCloseEvent: () => {
      const f = ue({
        event_type: "editor_close"
      }, d.value);
      return c(f);
    },
    logEditorCloseWarnEvent: () => c(ue({
      event_type: "editor_close_warn"
    }, d.value)),
    logEditorSegmentAddEvent: () => c(ue({
      event_type: "editor_segment_add"
    }, d.value)),
    logEditorSegmentSkipEvent: () => c(ue({
      event_type: "editor_segment_skip"
    }, d.value)),
    logEditorSegmentEditEvent: () => c(ue({
      event_type: "editor_segment_edit"
    }, d.value))
  };
}, HA = (e, t, n, s) => b(void 0, null, function* () {
  var l, c, d;
  const o = ((l = t.user) == null ? void 0 : l.content) || ((c = t.mt) == null ? void 0 : c.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield iw(
    o,
    n,
    s
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    o
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), qA = (e, t) => {
  t.segments.forEach((n) => {
    var o, a, r;
    const s = e.getSentenceById(n.id);
    if (s && (s.translatedContent = ((o = n.user) == null ? void 0 : o.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const l = (r = t.mt) == null ? void 0 : r.engine;
      s.addProposedTranslation(l, n.mt.innerHTML), s.mtProviderUsed = l;
    }
  });
}, GA = (e, t, n, s) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return HA(e, t, n, s);
  qA(e, t);
}), XA = (e, t, n, s) => {
  const o = [];
  for (const a of e.sections || [])
    if (s.filter(
      (l) => l.pageSectionId === parseInt(a.id)
    ).length)
      for (const l of a.subSections) {
        const c = s.find(
          (i) => i.subSectionId === l.id
        );
        if (!c)
          continue;
        const d = GA(
          l,
          c,
          t || e.title,
          n
        );
        o.push(d);
      }
  return Promise.all(o);
}, WA = { restoreCorporaDraft: XA }, KA = () => {
  const { currentSourcePage: e } = tt(), { sourceSection: t } = se();
  return (n) => b(void 0, null, function* () {
    if (n.restored)
      return;
    try {
      const o = yield bt.fetchTranslationUnits(
        n.translationId
      );
      yield WA.restoreCorporaDraft(
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
let bc = null;
function YA() {
  const e = mw.config.get(
    "wgContentTranslationPublishRequirements"
  ), t = mw.config.get("wgUserGroups") || [];
  if (!e || !e.userGroups)
    return !0;
  const n = e.userGroups;
  return n.includes("*") ? !0 : n.some((s) => t.includes(s));
}
function hw() {
  return bc === null && (bc = YA()), bc;
}
const fw = window.Vue.ref, Cc = fw(!1), kc = fw(!1);
function Am() {
  return {
    isPermissionWarningDismissed: Cc,
    dismissPermissionWarning: () => {
      Cc.value = !0;
    },
    resetPermissionWarning: () => {
      Cc.value = !1;
    },
    isTitleErrorDismissed: kc,
    dismissTitleError: () => {
      kc.value = !0;
    },
    resetTitleError: () => {
      kc.value = !1;
    }
  };
}
const re = window.Vue.unref, St = window.Vue.createVNode, Nt = window.Vue.withCtx, QA = window.Vue.resolveDirective, xn = window.Vue.createElementVNode, JA = window.Vue.withDirectives, Qo = window.Vue.toDisplayString, ZA = window.Vue.createTextVNode, Jt = window.Vue.openBlock, jn = window.Vue.createBlock, Dm = window.Vue.createCommentVNode, eD = window.Vue.renderList, tD = window.Vue.Fragment, Pm = window.Vue.createElementBlock, nD = window.Vue.normalizeClass, sD = window.Vue.normalizeStyle, oD = { class: "sx-sentence-selector__header-title mb-0" }, aD = {
  href: "https://www.mediawiki.org/wiki/Help:Content_translation/Publishing",
  target: "_blank"
}, iD = { class: "sx-sentence-selector__section-contents px-4" }, Hn = window.Vue.computed, rD = window.Vue.nextTick, lD = window.Vue.onMounted, Jo = window.Vue.ref, Bm = window.Vue.watch, cD = window.Vuex.useStore, Fm = window.Codex.CdxButton, uD = window.Codex.CdxIcon, Mm = window.Codex.CdxMessage, dD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Jo(!1), n = Jo(!1), s = Jo("100%"), o = cD(), { currentMTProvider: a, previousRoute: r } = De(o), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: c,
      pageURLParameter: d,
      sectionURLParameter: i
    } = P(), { resetPublishTarget: u, target: g } = $t(), p = hr();
    g.value || p(
      l.value,
      c.value,
      d.value
    ).then(() => u());
    const { sourceSection: m, selectedContentTranslationUnit: h } = se(), { targetPageTitleForPublishing: f } = Ea(), w = Jo({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), _ = Hn(
      () => Object.values(w.value).every(Boolean)
    ), x = Hn(
      () => {
        var W;
        return (W = m.value) == null ? void 0 : W.isSelectedTranslationUnitTranslated;
      }
    ), k = Hn(() => {
      var W;
      return (W = m.value) == null ? void 0 : W.subSections;
    }), y = Hn(
      () => {
        var W;
        return (W = m.value) == null ? void 0 : W.selectedTranslationUnitOriginalContent;
      }
    ), E = Hn(
      () => isNaN(s.value) ? s.value : `${s.value}px`
    ), {
      logEditorOpenEvent: S,
      logEditorCloseEvent: B,
      logEditorCloseWarnEvent: V,
      logEditorSegmentAddEvent: A,
      logEditorSegmentSkipEvent: I
    } = pw(), H = () => {
      var bs;
      const W = M.currentRoute.value.meta.workflowStep, Ln = M.getRoutes().find(
        (br) => br.name === r.value
      ), mt = ((bs = Ln == null ? void 0 : Ln.meta) == null ? void 0 : bs.workflowStep) || 0;
      return W > mt;
    }, ce = bA();
    kA()().then(() => {
      H() && S(), w.value.mtProviders = !0;
    });
    const oe = VA(), { fetchTranslationsByStatus: q, translationsFetched: ee } = ao(), Y = KA(), { currentTranslation: he } = qt(), { selectPageSectionByTitle: Pe, selectPageSectionByIndex: Be } = _r(), te = Nu(), nt = to();
    lD(() => b(this, null, function* () {
      if (!ee.value.draft) {
        const W = [
          // required to get current draft translation (if exists)
          q("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          te(l.value, d.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          nt(l.value, [d.value])
        ];
        yield Promise.all(W);
      }
      w.value.pageMetadata = !0, i.value ? yield Pe(i.value) : yield Be(0), w.value.pageContent = !0, he.value && (yield Y(he.value)), w.value.draftRestored = !0, g.value || p(
        l.value,
        c.value,
        d.value
      ).then(() => u()), Bm(
        _,
        () => b(this, null, function* () {
          _.value && (yield rD(), ce(), oe());
        }),
        { immediate: !0 }
      ), s.value = window.innerHeight;
    })), Bm(h, oe);
    const { selectNextTranslationUnit: D, selectPreviousTranslationUnit: N } = ro(), Q = () => (I(), D()), v = IA(), F = () => {
      A(), v();
    }, T = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, M = et(), G = () => {
      const { autoSavePending: W } = o.state.application;
      if (W) {
        co.value = !0, V();
        return;
      }
      z();
    }, pe = zA(), { clearTranslationURLParameters: j } = P(), z = () => b(this, null, function* () {
      q("draft"), he.value && (m.value.reset(), he.value.restored = !1), B(), j(), pe(), yield M.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: ae,
      translateSelectedTranslationUnitForAllProviders: st
    } = Iu(), ke = () => {
      lo.value || (t.value = !0, st());
    }, { getCurrentTitleByLanguage: Va } = an(), { isMissingLeadSection: La } = pt(), ns = (W) => {
      M.push({
        name: "sx-editor",
        state: {
          content: W,
          originalContent: y.value,
          title: Va(
            c.value,
            l.value
          ),
          isInitialEdit: !x.value || null
        }
      });
    }, Sr = () => M.push({ name: "sx-publisher" }), yr = () => b(this, null, function* () {
      h.value ? yield ae(
        h.value.id,
        a.value
      ) : yield ae(0, a.value);
    }), lo = Hn(
      () => h.value instanceof ut
    ), co = Jo(!1), {
      isPermissionWarningDismissed: xr,
      dismissPermissionWarning: ys,
      resetPermissionWarning: xs
    } = Am(), { isTitleErrorDismissed: Ta, dismissTitleError: L, resetTitleError: O } = Am();
    H() && (xs(), O());
    const Me = Hn(
      () => !hw() && !xr.value
    ), Et = Hn(
      () => !Ta.value && La.value && !mw.Title.newFromText(f.value)
    );
    return (W, rn) => {
      const Ln = QA("i18n");
      return Jt(), Pm("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: sD(E.value)
      }, [
        St(re(U), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: Nt(() => [
            St(re(C), { shrink: "" }, {
              default: Nt(() => [
                St(re(Fm), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": W.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: G
                }, {
                  default: Nt(() => [
                    St(re(uD), { icon: re(sf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            St(re(C), {
              grow: "",
              class: "px-1"
            }, {
              default: Nt(() => [
                JA(xn("h4", oD, null, 512), [
                  [Ln, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            St(re(C), {
              shrink: "",
              class: "px-3"
            }, {
              default: Nt(() => [
                St(re(Fm), {
                  disabled: !(re(m) && re(m).isTranslated),
                  onClick: Sr
                }, {
                  default: Nt(() => [
                    ZA(Qo(W.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _.value ? (Jt(), jn(re(U), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: Nt(() => [
            St(re(C), {
              dir: re(R.getDir)(re(l)),
              lang: re(l),
              class: "sx-sentence-selector__section"
            }, {
              default: Nt(() => [
                Me.value ? (Jt(), jn(re(Mm), {
                  key: 0,
                  type: "warning",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: re(ys)
                }, {
                  default: Nt(() => [
                    xn("p", null, Qo(W.$i18n("cx-publish-permission-warning")), 1),
                    xn("p", null, [
                      xn("strong", null, [
                        xn("a", aD, Qo(W.$i18n("cx-publish-permission-warning-link-label")), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : Dm("", !0),
                Et.value ? (Jt(), jn(re(Mm), {
                  key: 1,
                  type: "error",
                  "allow-user-dismiss": !0,
                  class: "mx-4 mt-4",
                  onUserDismissed: re(L)
                }, {
                  default: Nt(() => [
                    xn("p", null, [
                      xn("strong", null, Qo(W.$i18n("cx-tools-linter-invalid-character")), 1)
                    ]),
                    xn("p", null, Qo(W.$i18n("cx-tools-linter-invalid-character-message")), 1)
                  ]),
                  _: 1
                }, 8, ["onUserDismissed"])) : Dm("", !0),
                St(qL),
                xn("div", iD, [
                  (Jt(!0), Pm(tD, null, eD(k.value, (mt) => (Jt(), jn(BT, {
                    id: mt.id,
                    key: `sub-section-${mt.id}`,
                    "sub-section": mt,
                    onBounceTranslation: T
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !lo.value && x.value ? (Jt(), jn(xA, {
              key: 0,
              onEditTranslation: ns,
              onSelectNextSegment: re(D),
              onSelectPreviousSegment: re(N)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : lo.value ? (Jt(), jn(tA, {
              key: 2,
              onEditTranslation: ns,
              onApplyTranslation: F,
              onSkipTranslation: Q,
              onSelectPreviousSegment: re(N),
              onSelectNextSegment: re(D)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Jt(), jn(bT, {
              key: 1,
              class: nD({ "mb-0": !n.value }),
              onConfigureOptions: ke,
              onEditTranslation: ns,
              onApplyTranslation: F,
              onSkipTranslation: Q,
              onSelectPreviousSegment: re(N),
              onRetryTranslation: yr
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Jt(), jn(re(U), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: Nt(() => [
            St(re(dt), { class: "mt-0" })
          ]),
          _: 1
        })),
        St(FL, {
          active: t.value,
          "onUpdate:active": rn[0] || (rn[0] = (mt) => t.value = mt)
        }, null, 8, ["active"]),
        St(uL, {
          modelValue: co.value,
          "onUpdate:modelValue": rn[1] || (rn[1] = (mt) => co.value = mt),
          onDiscardTranslation: z
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const gD = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: dD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, pD = window.Vue.resolveComponent, mD = window.Vue.createVNode, hD = window.Vue.normalizeClass, fD = window.Vue.openBlock, wD = window.Vue.createElementBlock;
function vD(e, t, n, s, o, a) {
  const r = pD("sx-sentence-selector");
  return fD(), wD("main", {
    class: hD(["sx-sentence-selector-view", a.classes])
  }, [
    mD(r)
  ], 2);
}
const _D = /* @__PURE__ */ de(gD, [["render", vD]]), SD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, yD = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const xD = window.Vue.resolveDirective, Wi = window.Vue.withDirectives, Ut = window.Vue.openBlock, bn = window.Vue.createElementBlock, Ki = window.Vue.createCommentVNode, Yi = window.Vue.Transition, ps = window.Vue.withCtx, js = window.Vue.createVNode, Zo = window.Vue.createElementVNode, qn = window.Vue.unref, bD = window.Vue.renderList, CD = window.Vue.Fragment, kD = window.Vue.normalizeClass, Nm = window.Vue.createBlock, $D = window.Vue.toDisplayString, ED = window.Vue.createTextVNode, VD = { class: "sx-quick-tutorial" }, LD = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, TD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, AD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, DD = { class: "sx-quick-tutorial__illustration" }, PD = ["innerHTML"], BD = ["innerHTML"], FD = { class: "sx-quick-tutorial__step-indicator py-3" }, MD = ["onClick"], ND = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, UD = {
  key: "secondary-point-1",
  class: "ma-0"
}, ID = {
  key: "secondary-point-2",
  class: "ma-0"
}, RD = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, Um = window.Vue.ref, Im = window.Codex.CdxButton, zD = window.Codex.CdxIcon, OD = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = Um(2), n = Um(1), s = () => {
      n.value < t.value && n.value++;
    }, o = (r) => r === n.value, a = io();
    return (r, l) => {
      const c = xD("i18n");
      return Ut(), bn("section", VD, [
        js(qn(U), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: ps(() => [
            Zo("section", LD, [
              js(Yi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: ps(() => [
                  o(1) ? Wi((Ut(), bn("h2", TD, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : o(2) ? Wi((Ut(), bn("h2", AD, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Ki("", !0)
                ]),
                _: 1
              })
            ]),
            Zo("section", DD, [
              js(Yi, { name: "mw-ui-animation-slide-start" }, {
                default: ps(() => [
                  o(1) ? (Ut(), bn("div", {
                    key: "illustration-1",
                    innerHTML: qn(yD)
                  }, null, 8, PD)) : o(2) ? (Ut(), bn("div", {
                    key: "illustration-2",
                    innerHTML: qn(SD)
                  }, null, 8, BD)) : Ki("", !0)
                ]),
                _: 1
              })
            ]),
            Zo("div", FD, [
              (Ut(!0), bn(CD, null, bD(t.value, (d) => (Ut(), bn("span", {
                key: `dot-${d}`,
                class: kD(["dot mx-1", { "dot-active": o(d) }]),
                role: "button",
                onClick: (i) => n.value = d
              }, null, 10, MD))), 128))
            ]),
            Zo("section", ND, [
              js(Yi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: ps(() => [
                  o(1) ? Wi((Ut(), bn("h3", UD, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : o(2) ? Wi((Ut(), bn("h3", ID, null, 512)), [
                    [c, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Ki("", !0)
                ]),
                _: 1
              })
            ]),
            Zo("div", RD, [
              js(Yi, {
                name: "fade",
                mode: "out-in"
              }, {
                default: ps(() => [
                  o(1) ? (Ut(), Nm(qn(Im), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: s
                  }, {
                    default: ps(() => [
                      js(qn(zD), { icon: qn(oo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : o(2) ? (Ut(), Nm(qn(Im), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: qn(a)
                  }, {
                    default: ps(() => [
                      ED($D(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : Ki("", !0)
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
const jD = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: OD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, HD = window.Vue.resolveComponent, qD = window.Vue.createVNode, GD = window.Vue.normalizeClass, XD = window.Vue.openBlock, WD = window.Vue.createElementBlock;
function KD(e, t, n, s, o, a) {
  const r = HD("sx-quick-tutorial");
  return XD(), WD("main", {
    class: GD(["sx-quick-tutorial-view", a.classes])
  }, [
    qD(r)
  ], 2);
}
const YD = /* @__PURE__ */ de(jD, [["render", KD]]);
const QD = window.Vue.resolveDirective, Rm = window.Vue.createElementVNode, JD = window.Vue.withDirectives, ZD = window.Vue.unref, e6 = window.Vue.withCtx, t6 = window.Vue.createVNode, n6 = window.Vue.openBlock, s6 = window.Vue.createElementBlock, o6 = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, a6 = { class: "sx-editor__original-content-panel__header mb-2" }, i6 = ["lang", "dir", "innerHTML"], zm = window.Vue.ref, r6 = window.Vue.onMounted, l6 = {
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
      for (const d of c)
        d.href = K.getPageUrl(l, d.title), d.target = "_blank";
    }, s = zm(null), o = zm(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(s.value, null).getPropertyValue("line-height")
    );
    return r6(() => {
      o.value = 2 * a(), n(s.value, t.language);
    }), (r, l) => {
      const c = QD("i18n");
      return n6(), s6("section", o6, [
        JD(Rm("h5", a6, null, 512), [
          [c, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        t6(ZD(m1), {
          "min-height": o.value,
          scroll: ""
        }, {
          default: e6(() => [
            Rm("div", {
              ref_key: "originalContentRef",
              ref: s,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, i6)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, c6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const u6 = window.Vue.unref, ea = window.Vue.createElementVNode, Om = window.Vue.resolveDirective, $c = window.Vue.withDirectives, d6 = window.Vue.normalizeClass, g6 = window.Vue.openBlock, p6 = window.Vue.createElementBlock, m6 = window.Vue.createCommentVNode, h6 = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, f6 = { class: "sx-editor__feedback-overlay-content px-4" }, w6 = ["innerHTML"], v6 = { class: "sx-editor__feedback-overlay-content__title" }, _6 = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, Ec = window.Vue.computed, S6 = {
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
    const t = e, { targetLanguageURLParameter: n } = P(), s = Ec(
      () => sn.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), o = Ec(() => {
      const r = sn.getScoreStatus(s.value);
      return r === "failure" ? s.value === 0 ? "failure" : "warning" : r;
    }), a = Ec(
      () => `sx-editor__feedback-overlay-content__stats--${o.value}`
    );
    return (r, l) => {
      const c = Om("i18n"), d = Om("i18n-html");
      return e.showFeedback ? (g6(), p6("div", h6, [
        ea("div", f6, [
          ea("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: u6(c6)
          }, null, 8, w6),
          $c(ea("h2", v6, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          $c(ea("p", _6, null, 512), [
            [c, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          $c(ea("p", {
            class: d6(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [d, [s.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : m6("", !0);
    };
  }
}, y6 = window.Vuex.useStore, x6 = () => {
  const e = y6(), t = Ru(), { selectNextTranslationUnit: n } = ro(), {
    isSectionTitleSelected: s,
    sourceSection: o,
    selectedContentTranslationUnit: a
  } = se(), { getCurrentTitleByLanguage: r } = an(), {
    sourceLanguageURLParameter: l,
    targetLanguageURLParameter: c
  } = P(), { currentMTProvider: d } = De(e);
  return (i) => b(void 0, null, function* () {
    if (!s.value) {
      const u = document.createElement("div");
      u.innerHTML = i, u.querySelectorAll(".sx-edit-dummy-node").forEach((g) => g.remove()), i = u.innerHTML;
    }
    a.value instanceof ut && (i = (yield iw(
      i,
      r(c.value, l.value),
      c.value
    )) || i), o.value.setTranslationForSelectedTranslationUnit(
      i,
      d.value
    ), t(), n();
  });
};
const Ye = window.Vue.unref, Vc = window.Vue.openBlock, Lc = window.Vue.createBlock, jm = window.Vue.createCommentVNode, Hm = window.Vue.createVNode, b6 = window.Vue.createElementVNode, C6 = window.Vue.withCtx, k6 = { class: "sx-editor__editing-surface-container grow" }, Tc = window.Vue.ref, $6 = window.Vue.computed;
window.Vue.inject;
const E6 = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Tc(!1), s = et(), o = () => n.value = !0, a = () => s.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: c, originalContent: d, title: i } = history.state, u = Tc(null), g = Tc(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = pw(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = P(), { isSectionTitleSelected: w, sourceSection: _ } = se(), x = $6(
      () => sn.calculateScore(
        u.value,
        c,
        f.value
      )
    ), k = x6(), y = (E) => b(this, null, function* () {
      u.value = E, g.value = !0;
      const S = new Promise((V) => setTimeout(V, 2e3));
      let B = Promise.resolve();
      r ? _.value.editedTranslation = E : B = k(E), x.value === 0 && l ? p() : x.value > 0 && m(), yield Promise.all([S, B]), g.value = !1, a();
    });
    return r ? mw.cx.eventlogging.stats.publishEditorStepAccess() : mw.cx.eventlogging.stats.editingStepAccess(!0), (E, S) => (Vc(), Lc(Ye(U), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: C6(() => [
        Ye(d) ? (Vc(), Lc(l6, {
          key: 0,
          language: Ye(h),
          dir: Ye(R.getDir)(Ye(h)),
          "original-content": Ye(d)
        }, null, 8, ["language", "dir", "original-content"])) : jm("", !0),
        n.value ? jm("", !0) : (Vc(), Lc(Ye(dt), { key: 1 })),
        b6("div", k6, [
          Hm(S6, {
            "edited-translation": u.value,
            "show-feedback": g.value,
            "proposed-translation": Ye(c)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Hm(WE, {
            content: Ye(c),
            language: Ye(f),
            dir: Ye(R.getDir)(Ye(f)),
            title: Ye(i),
            "use-text": !!Ye(w),
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
const V6 = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: E6
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
}, L6 = window.Vue.resolveComponent, T6 = window.Vue.createVNode, A6 = window.Vue.normalizeClass, D6 = window.Vue.openBlock, P6 = window.Vue.createElementBlock;
function B6(e, t, n, s, o, a) {
  const r = L6("sx-editor");
  return D6(), P6("main", {
    class: A6(["sx-editor-view", a.classes])
  }, [
    T6(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const F6 = /* @__PURE__ */ de(V6, [["render", B6]]);
const Zt = window.Vue.unref, ms = window.Vue.createVNode, ta = window.Vue.withCtx, M6 = window.Vue.resolveDirective, N6 = window.Vue.withDirectives, U6 = window.Vue.openBlock, I6 = window.Vue.createBlock, qm = window.Codex.CdxButton, Gm = window.Codex.CdxIcon, R6 = {
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
      const a = M6("i18n");
      return U6(), I6(Zt(U), { class: "ma-0 sx-publisher__header" }, {
        default: ta(() => [
          ms(Zt(C), {
            shrink: "",
            class: "me-2"
          }, {
            default: ta(() => [
              ms(Zt(qm), {
                class: "px-3",
                weight: "quiet",
                "aria-label": s.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: ta(() => [
                  ms(Zt(Gm), { icon: Zt(so) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          N6(ms(Zt(C), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          ms(Zt(C), { shrink: "" }, {
            default: ta(() => [
              ms(Zt(qm), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": s.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: o[0] || (o[0] = (r) => s.$emit("publish-translation"))
              }, {
                default: ta(() => [
                  ms(Zt(Gm), { icon: Zt(hy) }, null, 8, ["icon"])
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
}, z6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, O6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, Xm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const Ac = window.Vue.createElementVNode, Wm = window.Vue.toDisplayString, Dc = window.Vue.unref, Pc = window.Vue.withCtx, Km = window.Vue.createVNode, j6 = window.Vue.openBlock, H6 = window.Vue.createBlock, q6 = window.Vue.createCommentVNode, G6 = ["innerHTML"], X6 = ["textContent"], W6 = ["textContent"], Bc = window.Vue.computed, K6 = {
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
        svg: z6,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: O6,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: Xm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Xm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, o = Bc(() => s[n.status].svg), a = Bc(() => s[n.status].title), r = Bc(() => s[n.status].subtitle);
    return (l, c) => e.active ? (j6(), H6(Dc(Ct), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: Pc(() => [
        Km(Dc(U), { class: "ma-4" }, {
          default: Pc(() => [
            Km(Dc(C), null, {
              default: Pc(() => [
                Ac("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: o.value
                }, null, 8, G6),
                Ac("h2", {
                  textContent: Wm(a.value)
                }, null, 8, X6),
                Ac("p", {
                  class: "ma-0",
                  textContent: Wm(r.value)
                }, null, 8, W6)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : q6("", !0);
  }
};
const lt = window.Vue.unref, It = window.Vue.createVNode, Cn = window.Vue.withCtx, Y6 = window.Vue.resolveDirective, Q6 = window.Vue.withDirectives, Ym = window.Vue.toDisplayString, J6 = window.Vue.createTextVNode, Fc = window.Vue.openBlock, Qm = window.Vue.createElementBlock, Z6 = window.Vue.createCommentVNode, ww = window.Vue.createElementVNode, e9 = window.Vue.createBlock, t9 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, n9 = ["src"], s9 = ["textContent"], o9 = /* @__PURE__ */ ww("p", { class: "mt-0" }, null, -1), a9 = window.Vue.computed, i9 = window.Vue.inject, r9 = window.Vue.ref, Jm = window.Codex.CdxButton, l9 = window.Codex.CdxIcon, c9 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: ff,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, s = r9(""), o = () => n("close"), a = () => n("publish", s.value), r = i9("breakpoints"), l = a9(() => r.value.mobile);
    return (c, d) => {
      const i = Y6("i18n");
      return e.active && e.captchaDetails ? (Fc(), e9(lt(Ct), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: Cn(() => [
          It(lt(U), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: Cn(() => [
              It(lt(C), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: Cn(() => [
                  It(lt(Jm), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": c.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: o
                  }, {
                    default: Cn(() => [
                      It(lt(l9), { icon: lt(so) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              Q6(It(lt(C), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              It(lt(C), {
                shrink: "",
                class: "justify-center"
              }, {
                default: Cn(() => [
                  It(lt(Jm), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: Cn(() => [
                      J6(Ym(c.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          It(lt(ar))
        ]),
        default: Cn(() => [
          ww("div", t9, [
            e.captchaDetails.type === "image" ? (Fc(), Qm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, n9)) : (Fc(), Qm("p", {
              key: 1,
              textContent: Ym(e.captchaDetails.question)
            }, null, 8, s9)),
            o9,
            It(lt(U), { class: "ma-0" }, {
              default: Cn(() => [
                It(lt(C), null, {
                  default: Cn(() => [
                    It(lt(Kc), {
                      value: s.value,
                      "onUpdate:value": d[0] || (d[0] = (u) => s.value = u),
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
      }, 8, ["fullscreen"])) : Z6("", !0);
    };
  }
};
const Gn = window.Vue.unref, Qi = window.Vue.createVNode, Hs = window.Vue.withCtx, qs = window.Vue.createElementVNode, u9 = window.Vue.resolveDirective, d9 = window.Vue.withDirectives, g9 = window.Vue.renderList, p9 = window.Vue.Fragment, Mc = window.Vue.openBlock, m9 = window.Vue.createElementBlock, Zm = window.Vue.toDisplayString, eh = window.Vue.createTextVNode, h9 = window.Vue.isRef, f9 = window.Vue.normalizeClass, th = window.Vue.createBlock, w9 = { class: "mw-ui-dialog__header" }, v9 = { class: "row ma-0 px-4 py-3" }, _9 = { class: "col shrink justify-center" }, S9 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, y9 = { class: "mb-0" }, x9 = { class: "pa-4" }, b9 = window.Codex.CdxField, C9 = window.Codex.CdxRadio, k9 = window.Vuex.useStore, Ji = window.Vue.computed, $9 = window.Codex.CdxButton, E9 = window.Codex.CdxIcon, V9 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, s = k9(), { target: o, PUBLISHING_TARGETS: a } = $t(), r = Ji(() => s.state.translator.isAnon), l = ge(), { sourceSection: c } = se(), { isCurrentSectionPresent: d, isPresentLeadSection: i } = pt(), u = Ji(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-label") : l.i18n("cx-sx-publisher-new-section-option-label")
    ), g = Ji(
      () => c.value.isLeadSection ? l.i18n("cx-sx-publisher-lead-section-option-details") : l.i18n("cx-sx-publisher-new-section-option-details")
    ), p = Ji(() => {
      const h = [];
      return i.value || h.push({
        label: u.value,
        description: g.value,
        value: a.NEW_SECTION,
        disabled: !1
      }), h.push({
        label: l.i18n("cx-sx-publisher-sandbox-option-label"),
        description: l.i18n("cx-sx-publisher-sandbox-option-details"),
        value: a.SANDBOX,
        disabled: r.value
      }), d.value && (h.push({
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
      const w = u9("i18n");
      return Mc(), th(Gn(Ct), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: h.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: f[1] || (f[1] = (_) => h.$emit("update:active", _)),
        onClose: m
      }, {
        header: Hs(() => [
          qs("div", w9, [
            qs("div", v9, [
              qs("div", _9, [
                Qi(Gn($9), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": h.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: m
                }, {
                  default: Hs(() => [
                    Qi(Gn(E9), { icon: Gn(sf) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              qs("div", S9, [
                d9(qs("h4", y9, null, 512), [
                  [w, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Qi(Gn(ar))
          ])
        ]),
        default: Hs(() => [
          qs("div", x9, [
            Qi(Gn(b9), { "is-fieldset": "" }, {
              default: Hs(() => [
                (Mc(!0), m9(p9, null, g9(p.value, (_, x) => (Mc(), th(Gn(C9), {
                  key: "publish-options-radio-" + _.value,
                  modelValue: Gn(o),
                  "onUpdate:modelValue": [
                    f[0] || (f[0] = (k) => h9(o) ? o.value = k : null),
                    m
                  ],
                  class: f9(x < p.value.length - 1 ? "mb-4" : "mb-0"),
                  "input-value": _.value,
                  disabled: _.disabled,
                  name: "publish-options"
                }, {
                  description: Hs(() => [
                    eh(Zm(_.description), 1)
                  ]),
                  default: Hs(() => [
                    eh(Zm(_.label) + " ", 1)
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
const Rt = window.Vue.unref, nh = window.Vue.toDisplayString, sh = window.Vue.createElementVNode, L9 = window.Vue.resolveDirective, Gs = window.Vue.createVNode, T9 = window.Vue.withDirectives, na = window.Vue.withCtx, Nc = window.Vue.openBlock, oh = window.Vue.createBlock, ah = window.Vue.createCommentVNode, A9 = window.Vue.Fragment, D9 = window.Vue.createElementBlock, P9 = window.Vue.normalizeClass, B9 = ["textContent"], F9 = ["textContent"], Xs = window.Vue.computed, ih = window.Vue.ref, M9 = window.Vue.watch, rh = window.Codex.CdxButton, lh = window.Codex.CdxIcon, N9 = window.Codex.CdxMessage, U9 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ih(0), s = ih(null);
    M9(s, () => {
      var m;
      const p = (m = s.value) == null ? void 0 : m.$el;
      if (p instanceof HTMLElement) {
        const h = p.querySelector("a");
        h && h.setAttribute("target", "_blank");
      }
    });
    const o = Xs(
      () => {
        var p;
        return (p = t.publishFeedbackMessages) == null ? void 0 : p[n.value];
      }
    ), a = Xs(() => {
      var p;
      return ((p = o.value) == null ? void 0 : p.status) || "notice";
    }), r = Xs(() => a.value === "notice"), l = Xs(
      () => `sx-publisher__review-info--${a.value}`
    ), c = ge(), d = Xs(() => {
      var p;
      return (p = o.value) == null ? void 0 : p.text;
    }), i = Xs(() => {
      var p;
      return r.value ? c.i18n("cx-sx-publisher-review-info") : ((p = o.value) == null ? void 0 : p.title) || c.i18n("cx-sx-publisher-review-info-error");
    }), u = () => {
      const p = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + p) % p;
    }, g = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (p, m) => {
      const h = L9("i18n-html");
      return Nc(), oh(Rt(N9), {
        type: a.value,
        class: P9(["sx-publisher__review-info", l.value]),
        icon: r.value ? Rt(vy) : null
      }, {
        default: na(() => [
          sh("h5", {
            textContent: nh(i.value)
          }, null, 8, B9),
          r.value ? ah("", !0) : (Nc(), D9(A9, { key: 0 }, [
            sh("p", {
              textContent: nh(d.value)
            }, null, 8, F9),
            Gs(Rt(U), {
              justify: "between",
              class: "ma-0"
            }, {
              default: na(() => [
                T9(Gs(Rt(C), {
                  ref_key: "learnMoreContainer",
                  ref: s,
                  class: "sx-publisher__review-info__learn-more-anchor"
                }, null, 512), [
                  [h, void 0, "cx-sx-publisher-review-info-learn-more"]
                ]),
                e.publishFeedbackMessages.length > 1 ? (Nc(), oh(Rt(C), {
                  key: 0,
                  class: "sx-publisher__review-info__navigation-buttons justify-end",
                  align: "center"
                }, {
                  default: na(() => [
                    Gs(Rt(rh), {
                      weight: "quiet",
                      class: "pa-0 me-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                      onClick: u
                    }, {
                      default: na(() => [
                        Gs(Rt(lh), { icon: Rt($u) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"]),
                    Gs(Rt(rh), {
                      weight: "quiet",
                      class: "pa-0 ms-1",
                      "aria-label": p.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                      onClick: g
                    }, {
                      default: na(() => [
                        Gs(Rt(lh), { icon: Rt(oo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                })) : ah("", !0)
              ]),
              _: 1
            })
          ], 64))
        ]),
        _: 1
      }, 8, ["type", "class", "icon"]);
    };
  }
}, I9 = (e) => {
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
}, R9 = window.Vuex.useStore, z9 = window.Vue.computed, O9 = () => {
  const e = R9(), { currentTranslation: t } = qt(), { currentMTProvider: n } = De(e), { currentTargetPageTitle: s } = tt(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    sectionURLParameter: l
  } = P(), { sourceSection: c } = se(), d = kt(), i = z9(() => {
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
    return n.value && (m.translation_provider = ie.getProviderForInstrumentation(n.value)), m.human_modification_rate = sn.getMTScoreForPageSection(
      c.value,
      a.value
    ) / 100, m.human_modification_threshold = sn.getMtModificationThreshold(), m;
  });
  return {
    logPublishAttemptEvent: () => d(ue({
      event_type: "publish_attempt"
    }, i.value)),
    logPublishSuccessEvent: (m, h) => {
      d(ue({
        event_type: "publish_success",
        published_page_id: m,
        published_revision_id: h
      }, i.value)), mw.cx.eventlogging.stats.published(!0);
    },
    logPublishFailureEvent: () => d(ue({
      event_type: "publish_failure"
    }, i.value))
  };
}, j9 = window.Vue.computed, ch = window.Vue.ref, H9 = window.Vuex.useStore, q9 = () => {
  const e = H9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: s
  } = P(), { sourceSection: o } = se(), { targetPageTitleForPublishing: a } = Ea(), r = dw(), { isPresentLeadSection: l } = pt(), { sectionSuggestion: c } = Ee(), d = j9(
    () => {
      var y, E;
      return l.value ? Qn.LEAD_SECTION_DUMMY_TITLE : (E = c.value) == null ? void 0 : E.presentSections[(y = o.value) == null ? void 0 : y.sourceSectionTitleForPublishing];
    }
  ), { target: i, PUBLISHING_TARGETS: u } = $t(), g = ch(!1), p = ch("pending"), m = () => g.value = !1, h = Ru(), {
    logPublishAttemptEvent: f,
    logPublishSuccessEvent: w,
    logPublishFailureEvent: _
  } = O9(), x = (y, E) => b(void 0, null, function* () {
    f();
    const S = yield h();
    if (S instanceof Zn)
      return _(), { publishFeedbackMessage: S, targetUrl: null };
    const B = S, V = a.value, A = {
      html: I9(o.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: V,
      sourceSectionTitle: o.value.sourceSectionTitleForPublishing,
      targetSectionTitle: o.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: s.value,
      revision: r.value,
      publishTarget: i.value,
      sectionTranslationId: B
    };
    d.value && (A.existingSectionTitle = d.value), y && (A.captchaId = y, A.captchaWord = E);
    const I = yield bt.publishTranslation(
      A
    );
    return I.publishFeedbackMessage === null ? w(I.pageId, I.revisionId) : _(), I;
  });
  return {
    closePublishDialog: m,
    doPublish: (y = null, E = null) => b(void 0, null, function* () {
      p.value = "pending", g.value = !0;
      let S;
      try {
        S = yield x(
          E == null ? void 0 : E.id,
          y
        );
      } catch (B) {
        if (B instanceof Zs)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw mw.cx.eventlogging.stats.publishFailed(!0), B;
      }
      return S;
    }),
    isPublishDialogActive: g,
    publishStatus: p
  };
}, G9 = window.Vue.computed, X9 = () => {
  const e = et(), { sourceSection: t } = se(), { getCurrentTitleByLanguage: n } = an(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = P(), a = G9(
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
}, W9 = () => {
  const { targetLanguageURLParameter: e } = P(), { sourceSection: t } = se();
  return () => {
    const n = sn.getMTScoreForPageSection(
      t.value,
      e.value
    ), s = sn.getScoreStatus(n);
    if (s === "success")
      return null;
    const o = 100 - n, a = s === "failure" ? "error" : "warning";
    let r, l;
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", o).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", o).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Zn({
      title: r,
      text: l,
      status: a,
      type: "mt"
    });
  };
}, K9 = window.Vue.ref, Y9 = window.Vue.computed, Q9 = () => {
  const e = W9(), { target: t, PUBLISHING_TARGETS: n } = $t(), { targetPageTitleForPublishing: s } = Ea(), o = K9([]), a = Y9(
    () => o.value.some((d) => d.isError)
  ), r = (d) => {
    o.value.push(d), o.value.sort((i, u) => +u.isError - +i.isError);
  };
  return {
    addPublishFeedbackMessage: r,
    clearPublishFeedbackMessages: () => {
      o.value = [];
    },
    publishFeedbackMessages: o,
    isPublishingDisabled: a,
    initializePublishFeedbackMessages: () => {
      if (!hw() && t.value !== n.SANDBOX) {
        const i = new Zn({
          text: mw.message("cx-publish-permission-error").text(),
          title: mw.message("cx-publish-permission-error-title").text(),
          type: "generic",
          status: "error"
        });
        r(i);
      }
      const d = e();
      d && r(d), mw.Title.newFromText(s.value) || r(
        new Zn({
          text: mw.message("cx-tools-linter-invalid-character-message").text(),
          title: mw.message("cx-tools-linter-invalid-character").text(),
          type: "generic",
          status: "error"
        })
      );
    }
  };
}, J9 = () => {
  const { target: e, PUBLISHING_TARGETS: t } = $t(), { currentSourcePage: n } = tt(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: o
  } = P(), { sourceSection: a } = se(), { targetPageTitleForPublishing: r } = Ea();
  return (l) => b(void 0, null, function* () {
    const c = r.value, d = n.value.title, i = new mw.Title(d), u = mw.config.get("wgNamespaceIds");
    if (a.value.isLeadSection && e.value !== t.SANDBOX && i.getNamespaceId() !== u.user)
      try {
        yield Uu.addWikibaseLink(
          s.value,
          o.value,
          d,
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
}, uh = window.Vue.ref, Z9 = () => {
  const e = uh(!1), t = uh(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (o) => o && o.type === "captcha" ? (t.value = o.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const le = window.Vue.unref, qe = window.Vue.createVNode, eP = window.Vue.resolveDirective, Uc = window.Vue.withDirectives, sa = window.Vue.openBlock, oa = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const dh = window.Vue.toDisplayString, tP = window.Vue.createTextVNode, Ws = window.Vue.createElementVNode, Ks = window.Vue.withCtx, gh = window.Vue.normalizeClass, nP = { class: "sx-publisher" }, sP = {
  key: 0,
  class: "mb-2"
}, oP = {
  key: 1,
  class: "sx-publisher__publish-panel__existing-target-section px-4 pb-4"
}, aP = { key: 0 }, iP = { key: 1 }, rP = ["href"], lP = ["innerHTML"], cP = { class: "sx-publisher__section-preview pa-5" }, uP = ["innerHTML"], Zi = window.Vue.computed, dP = window.Vue.onMounted, gP = window.Vue.ref, pP = window.Vue.watch, ph = window.Codex.CdxButton, Ic = window.Codex.CdxIcon, mP = {
  __name: "SXPublisher",
  setup(e) {
    const { sourceSection: t } = se(), { sectionSuggestion: n } = Ee(), { isCurrentSectionPresent: s, isPresentLeadSection: o } = pt(), {
      targetLanguageURLParameter: a,
      sectionURLParameter: r
    } = P(), l = ge(), c = Zi(
      () => {
        var q;
        return o.value ? l.i18n("cx-sx-present-lead-section-label") : (q = t.value) == null ? void 0 : q.title;
      }
    ), { target: d, PUBLISHING_TARGETS: i } = $t(), u = Zi(() => d.value === i.SANDBOX ? l.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : d.value === i.EXPAND ? l.i18n(
      "cx-sx-publisher-publish-panel-expand-section-result"
    ) : d.value === i.REPLACE ? l.i18n(
      "cx-sx-publisher-publish-panel-replace-section-result"
    ) : t.value.isLeadSection ? l.i18n("cx-sx-publisher-publish-panel-lead-section-result") : l.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: g,
      captchaDialogOn: p,
      handleCaptchaError: m,
      onCaptchaDialogClose: h
    } = Z9(), {
      publishFeedbackMessages: f,
      isPublishingDisabled: w,
      addPublishFeedbackMessage: _,
      clearPublishFeedbackMessages: x,
      initializePublishFeedbackMessages: k
    } = Q9(), y = J9(), { doPublish: E, isPublishDialogActive: S, publishStatus: B, closePublishDialog: V } = q9(), A = (q = null) => b(this, null, function* () {
      if (w.value)
        return;
      const ee = yield E(q, g.value);
      if (!ee)
        return;
      const { publishFeedbackMessage: Y, targetUrl: he } = ee;
      if (m(Y)) {
        V();
        return;
      } else
        Y && _(Y);
      B.value = w.value ? "failure" : "success", setTimeout(() => {
        if (w.value) {
          V();
          return;
        }
        y(he);
      }, 1e3);
    });
    dP(() => {
      k(), mw.cx.eventlogging.stats.publishStepAccess();
    });
    const I = X9(), H = gP(!1), ce = () => H.value = !0;
    pP(H, (q) => {
      q || (x(), k());
    });
    const Z = Zi(() => {
      var q, ee;
      return o.value ? l.i18n("cx-sx-present-lead-section-label") : (ee = (q = n.value) == null ? void 0 : q.presentSections) == null ? void 0 : ee[r.value];
    }), oe = Zi(() => {
      var Y;
      const q = K.getPageUrl(
        a.value,
        (Y = n.value) == null ? void 0 : Y.targetTitle
      ), ee = o.value ? "" : (Z.value || "").replace(/ /g, "_");
      return `${q}#${ee}`;
    });
    return (q, ee) => {
      const Y = eP("i18n");
      return sa(), oa("section", nP, [
        qe(R6, {
          "is-publishing-disabled": le(w),
          onPublishTranslation: A
        }, null, 8, ["is-publishing-disabled"]),
        Ws("div", {
          class: gh(["sx-publisher__publish-panel", le(s) ? "py-4" : "pa-4"])
        }, [
          le(s) ? (sa(), oa("div", oP, [
            le(o) ? Uc((sa(), oa("h5", aP, null, 512)), [
              [Y, void 0, "cx-sx-publisher-publish-panel-existing-lead-section-notice"]
            ]) : Uc((sa(), oa("h5", iP, null, 512)), [
              [Y, void 0, "cx-sx-publisher-publish-panel-existing-section-notice"]
            ]),
            Ws("a", {
              class: "sx-publisher__publish-panel__existing-target-section-link py-2 px-3 mt-4",
              href: oe.value,
              target: "_blank"
            }, [
              tP(dh(Z.value) + " ", 1),
              qe(le(Ic), { icon: le(pr) }, null, 8, ["icon"])
            ], 8, rP)
          ])) : Uc((sa(), oa("h5", sP, null, 512)), [
            [Y, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          Ws("div", {
            class: gh({ "px-4 mt-4": le(s) })
          }, [
            Ws("h6", {
              class: "sx-publisher__publish-panel__expected-publishing-result mb-2",
              innerHTML: u.value
            }, null, 8, lP),
            qe(le(U), {
              justify: "end",
              class: "ma-0"
            }, {
              default: Ks(() => [
                qe(le(C), { shrink: "" }, {
                  default: Ks(() => [
                    qe(le(ph), {
                      weight: "quiet",
                      "aria-label": q.$i18n("cx-sx-publisher-configure-button-aria-label"),
                      onClick: ce
                    }, {
                      default: Ks(() => [
                        qe(le(Ic), { icon: le(Vy) }, null, 8, ["icon"])
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
        qe(U9, { "publish-feedback-messages": le(f) }, null, 8, ["publish-feedback-messages"]),
        Ws("section", cP, [
          qe(le(U), { class: "pb-5 ma-0" }, {
            default: Ks(() => [
              qe(le(C), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                textContent: dh(c.value)
              }, null, 8, ["textContent"]),
              qe(le(C), { shrink: "" }, {
                default: Ks(() => [
                  qe(le(ph), {
                    weight: "quiet",
                    "aria-label": q.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: le(I)
                  }, {
                    default: Ks(() => [
                      qe(le(Ic), { icon: le(Cu) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Ws("div", {
            innerHTML: le(t).translationHtml
          }, null, 8, uP)
        ]),
        qe(V9, {
          active: H.value,
          "onUpdate:active": ee[0] || (ee[0] = (he) => H.value = he)
        }, null, 8, ["active"]),
        qe(c9, {
          active: le(p),
          "captcha-details": le(g),
          onClose: le(h),
          onPublish: ee[1] || (ee[1] = (he) => A(he))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        qe(K6, {
          active: le(S),
          status: le(B)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const hP = {
  name: "SxPublisherView",
  components: {
    SxPublisher: mP
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, fP = window.Vue.resolveComponent, wP = window.Vue.createVNode, vP = window.Vue.normalizeClass, _P = window.Vue.openBlock, SP = window.Vue.createElementBlock;
function yP(e, t, n, s, o, a) {
  const r = fP("sx-publisher");
  return _P(), SP("main", {
    class: vP(["sx-publisher-view", a.classes])
  }, [
    wP(r)
  ], 2);
}
const xP = /* @__PURE__ */ de(hP, [["render", yP]]);
const zt = window.Vue.unref, Xn = window.Vue.createVNode, hs = window.Vue.withCtx, Rc = window.Vue.toDisplayString, zc = window.Vue.createElementVNode, bP = window.Vue.openBlock, CP = window.Vue.createBlock, kP = ["textContent"], $P = ["textContent"], EP = ["textContent"], vw = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: eo,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (bP(), CP(zt(U), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: zt(R.getDir)(e.suggestion.language)
    }, {
      default: hs(() => [
        Xn(zt(C), { shrink: "" }, {
          default: hs(() => [
            Xn(zt(lu), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Xn(zt(C), { class: "ms-4" }, {
          default: hs(() => [
            Xn(zt(U), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: hs(() => [
                Xn(zt(C), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: hs(() => [
                    zc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: Rc(e.suggestion.title)
                    }, null, 8, kP)
                  ]),
                  _: 1
                }),
                Xn(zt(C), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: hs(() => [
                    zc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: Rc(e.suggestion.description)
                    }, null, 8, $P)
                  ]),
                  _: 1
                }),
                Xn(zt(C), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: hs(() => [
                    Xn(zt(Ze), {
                      icon: zt(Z0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    zc("small", {
                      textContent: Rc((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, EP)
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
const aa = window.Vue.unref, ia = window.Vue.openBlock, Oc = window.Vue.createBlock, VP = window.Vue.createCommentVNode, LP = window.Vue.resolveDirective, TP = window.Vue.withDirectives, mh = window.Vue.createElementBlock, AP = window.Vue.renderList, DP = window.Vue.Fragment, PP = window.Vue.normalizeClass, BP = window.Vue.withCtx, FP = {
  key: 1,
  class: "sx-article-search__empty-state"
}, hh = window.Vue.computed, MP = window.Vue.ref, NP = {
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
    const { sourceLanguageURLParameter: t } = P(), n = hh(() => R.getAutonym(t.value)), s = e, o = MP(null), a = (u) => o.value = u, r = () => o.value = null, l = (u) => {
      var g;
      return ((g = s.selectedItem) == null ? void 0 : g.title) === u.title && !o.value || o.value === u.pageId;
    }, c = hh(() => s.searchInput), { searchResultsLoading: d, searchResultsSlice: i } = Du(
      t,
      c
    );
    return (u, g) => {
      const p = LP("i18n");
      return ia(), Oc(aa(Je), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: BP(() => [
          aa(d) ? (ia(), Oc(aa(dt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : aa(i).length === 0 ? TP((ia(), mh("p", FP, null, 512)), [
            [p, [
              c.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : VP("", !0),
          (ia(!0), mh(DP, null, AP(aa(i), (m) => (ia(), Oc(vw, {
            key: m.pageId,
            suggestion: m,
            class: PP({
              "sx-article-search__results-selected": l(m)
            }),
            onMouseenter: (h) => a(m.pageId),
            onMouseleave: r,
            onClick: (h) => u.$emit("suggestion-clicked", m)
          }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const UP = window.Vue.toDisplayString, IP = window.Vue.createElementVNode, RP = window.Vue.renderList, zP = window.Vue.Fragment, jc = window.Vue.openBlock, OP = window.Vue.createElementBlock, jP = window.Vue.normalizeClass, fh = window.Vue.createBlock, HP = window.Vue.unref, wh = window.Vue.withCtx, qP = ["textContent"], GP = window.Vue.ref, vh = {
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
    const n = e, s = GP(null), o = (l) => s.value = l, a = () => s.value = null, r = (l) => {
      var c;
      return ((c = n.selectedItem) == null ? void 0 : c.title) === l.title && !s.value || s.value === l.pageId;
    };
    return (l, c) => (jc(), fh(HP(Je), { class: "sx-article-search__suggestions pa-0" }, {
      header: wh(() => [
        IP("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: UP(e.cardTitle)
        }, null, 8, qP)
      ]),
      default: wh(() => [
        (jc(!0), OP(zP, null, RP(e.suggestions, (d) => (jc(), fh(vw, {
          key: d.pageId,
          suggestion: d,
          class: jP({
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
}, XP = window.Vue.computed, WP = (e, t) => e.length === t.length && e.every((n) => t.includes(n)) && t.every((n) => e.includes(n)), _h = "other", KP = (e) => XP((t) => {
  const s = e.value.slice(0, 3), o = {
    value: _h,
    props: {
      icon: sv,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  }, a = (t || []).map((l) => l.value).filter((l) => l !== _h);
  return WP(a, s) ? t : [...s.map((l) => ({
    value: l,
    props: {
      label: R.getAutonym(l),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), o];
}), YP = window.Vue.computed, QP = () => {
  const { supportedSourceLanguageCodes: e } = ba(), { targetLanguageURLParameter: t } = P();
  return { getSuggestedSourceLanguages: (s) => YP(() => {
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
}, JP = window.Vue.ref, ZP = () => {
  const e = JP([]), t = () => {
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
const eB = window.Vue.resolveDirective, tB = window.Vue.createElementVNode, Hc = window.Vue.withDirectives, we = window.Vue.unref, ra = window.Vue.withCtx, en = window.Vue.createVNode, la = window.Vue.openBlock, Sh = window.Vue.createBlock, nB = window.Vue.createCommentVNode, qc = window.Vue.createElementBlock, sB = window.Vue.Fragment, oB = window.Vue.vShow, ca = window.Vue.withModifiers, ua = window.Vue.withKeys, aB = ["onKeydown"], iB = { class: "mb-0" }, rB = {
  key: 2,
  class: "sx-article-search__empty-state"
}, da = window.Vue.ref, lB = window.Vue.onMounted, ga = window.Vue.computed, yh = window.Vue.watch, cB = window.Vue.inject, uB = window.Vuex.useStore, dB = window.Codex.CdxButton, gB = window.Codex.CdxIcon, pB = window.Codex.CdxSearchInput, mB = 3, hB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = da(""), n = da(!1), s = da(null), o = da(!1), { previousLanguages: a, addLanguageToHistory: r } = ZP(), l = uB(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: d
    } = P(), { supportedSourceLanguageCodes: i } = ba(), { searchResultsSlice: u } = Du(c, t), { getSuggestedSourceLanguages: g } = QP(), p = g(a), m = KP(
      p
    ), h = et(), { fetchAllTranslations: f } = ao();
    lB(() => b(this, null, function* () {
      var D;
      f(), r(c.value), (D = s.value) == null || D.focus();
    }));
    const w = () => {
      h.push({ name: "dashboard" });
    }, _ = mf(), x = (D) => {
      _(D, d.value), r(D);
    }, k = (D) => {
      if (D === "other") {
        o.value = !0;
        return;
      }
      x(D);
    };
    yh(
      c,
      () => {
        var D;
        l.dispatch("mediawiki/fetchNearbyPages"), (D = s.value) == null || D.focus();
      },
      { immediate: !0 }
    );
    const y = kt();
    yh(t, () => {
      n.value || (n.value = !0, y({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: d.value
      }));
    });
    const E = () => {
      o.value = !1;
    }, S = (D) => {
      o.value = !1, k(D);
    }, { fetchPreviousEditsInSource: B, previousEditsInSource: V } = Jh(), A = da([]);
    (() => B().then(() => V.value.length > 0 ? _s.fetchPages(
      c.value,
      V.value
    ) : []).then((D) => {
      D = D.slice(0, mB), D = D.sort(
        (N, Q) => V.value.indexOf(N.title) - V.value.indexOf(Q.title)
      ), A.value = D;
    }))();
    const H = ga(() => l.getters["mediawiki/getNearbyPages"]), ce = cB("breakpoints"), Z = ga(() => ce.value.mobile), oe = $a(), q = ga(
      () => A.value && A.value.length
    ), ee = ga(
      () => H.value && H.value.length
    ), { next: Y, prev: he, keyboardNavigationContainer: Pe, selectedItem: Be } = Xf(t, u, A), te = (D) => oe(
      D.title,
      c.value,
      d.value,
      nt.value
    ), nt = ga(() => t.value ? "search_result" : q.value ? "suggestion_recent_edit" : ee.value ? "suggestion_nearby" : "");
    return (D, N) => {
      const Q = eB("i18n");
      return la(), qc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: Pe,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          N[5] || (N[5] = ua(ca((...v) => we(Y) && we(Y)(...v), ["stop", "prevent"]), ["tab"])),
          N[6] || (N[6] = ua(ca((...v) => we(Y) && we(Y)(...v), ["stop", "prevent"]), ["down"])),
          N[7] || (N[7] = ua(ca((...v) => we(he) && we(he)(...v), ["stop", "prevent"]), ["up"])),
          ua(ca(w, ["stop", "prevent"]), ["esc"]),
          N[8] || (N[8] = ua(ca((v) => te(we(Be)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        en(we(U), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ra(() => [
            en(we(C), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ra(() => [
                Hc(tB("h5", iB, null, 512), [
                  [Q, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            en(we(C), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: ra(() => [
                en(we(dB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": D.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: w
                }, {
                  default: ra(() => [
                    en(we(gB), { icon: we(so) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        en(we(pB), {
          ref_key: "searchInputRef",
          ref: s,
          modelValue: t.value,
          "onUpdate:modelValue": N[0] || (N[0] = (v) => t.value = v),
          class: "sx-article-search__search-input",
          placeholder: D.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        en(we(Sa), {
          class: "sx-article-search__language-button-group",
          items: we(m),
          active: we(c),
          onSelect: k
        }, null, 8, ["items", "active"]),
        t.value ? nB("", !0) : (la(), qc(sB, { key: 0 }, [
          q.value ? (la(), Sh(vh, {
            key: 0,
            "card-title": D.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: A.value,
            "selected-item": we(Be),
            onSuggestionClicked: N[1] || (N[1] = (v) => te(v))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : ee.value ? (la(), Sh(vh, {
            key: 1,
            "card-title": D.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: H.value,
            onSuggestionClicked: N[2] || (N[2] = (v) => te(v))
          }, null, 8, ["card-title", "suggestions"])) : Hc((la(), qc("p", rB, null, 512)), [
            [Q, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        Hc(en(NP, {
          "search-input": t.value,
          "selected-item": we(Be),
          onSuggestionClicked: N[3] || (N[3] = (v) => te(v))
        }, null, 8, ["search-input", "selected-item"]), [
          [oB, !!t.value]
        ]),
        en(we(Ct), {
          value: o.value,
          "onUpdate:value": N[4] || (N[4] = (v) => o.value = v),
          class: "sx-article-search-language-selector",
          fullscreen: Z.value,
          header: Z.value,
          title: D.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: E
        }, {
          default: ra(() => [
            en(we(Wf), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: we(i),
              suggestions: we(p),
              placeholder: D.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: S,
              onClose: E
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, aB);
    };
  }
};
const fB = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: hB
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, wB = window.Vue.resolveComponent, vB = window.Vue.createVNode, _B = window.Vue.normalizeClass, SB = window.Vue.openBlock, yB = window.Vue.createElementBlock;
function xB(e, t, n, s, o, a) {
  const r = wB("sx-article-search");
  return SB(), yB("main", {
    class: _B(["sx-article-search-view", a.classes])
  }, [
    vB(r)
  ], 2);
}
const bB = /* @__PURE__ */ de(fB, [["render", xB]]), CB = () => {
  const e = $a(), t = Nu(), { logDashboardOpenEvent: n } = Jf(), {
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
}, kB = window.Vuex.useStore, $B = [
  {
    path: "",
    name: "dashboard",
    component: fp,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: bB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: x4,
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
    component: z3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: nL,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: YD,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: _D,
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
    component: F6,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: xP,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: fp,
    meta: { workflowStep: 0 }
  }
], zu = hC({
  history: mb(),
  routes: $B
}), Gc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, EB = (e, t, n) => {
  let s = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return s = s.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(s, "");
};
zu.beforeEach((e, t, n) => {
  const s = kB();
  if (mw.user.isAnon() || $h.assertUser().catch((i) => {
    i instanceof Zs && s.commit("application/setIsLoginDialogOn", !0);
  }), s.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const o = CB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: c
  } = P();
  if (!!(a.value && r.value && l.value)) {
    if (EB(
      a.value,
      r.value,
      l.value
    )) {
      const u = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      Gc(e.name, u, n);
    } else
      e.name === "sx-translation-confirmer" && o(), Gc(e.name, "sx-translation-confirmer", n);
    return;
  }
  c(), Gc(e.name, "dashboard", n);
});
zu.afterEach((e, t) => {
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
const VB = {
  install: function(e) {
    e.config.errorHandler = function(t) {
      mw.errorLogger.logError(t, "error.contenttranslation"), mw.log.error(t);
    };
  }
}, LB = window.Vue.createApp, TB = mw.config.get("wgUserLanguage"), AB = "en", DB = mw.messages.values || {}, Ss = LB(ox);
Ss.use(zu);
Ss.use(Mx);
Ss.use($1);
Ss.use(k1);
const PB = s_({
  locale: TB,
  finalFallback: AB,
  messages: DB,
  wikilinks: !0
});
Ss.use(PB);
Ss.use(VB);
Ss.mount("#contenttranslation");
