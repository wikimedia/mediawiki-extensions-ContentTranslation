var Wf = Object.defineProperty, Kf = Object.defineProperties;
var Yf = Object.getOwnPropertyDescriptors;
var wu = Object.getOwnPropertySymbols;
var Jf = Object.prototype.hasOwnProperty, Qf = Object.prototype.propertyIsEnumerable;
var vu = (e, t, n) => t in e ? Wf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ie = (e, t) => {
  for (var n in t || (t = {}))
    Jf.call(t, n) && vu(e, n, t[n]);
  if (wu)
    for (var n of wu(t))
      Qf.call(t, n) && vu(e, n, t[n]);
  return e;
}, Qe = (e, t) => Kf(e, Yf(t));
var C = (e, t, n) => new Promise((o, s) => {
  var a = (u) => {
    try {
      c(n.next(u));
    } catch (g) {
      s(g);
    }
  }, r = (u) => {
    try {
      c(n.throw(u));
    } catch (g) {
      s(g);
    }
  }, c = (u) => u.done ? o(u.value) : Promise.resolve(u.value).then(a, r);
  c((n = n.apply(e, t)).next());
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
    CdxMessage: c,
    CdxTabs: u,
    CdxTab: g,
    CdxField: i,
    CdxRadio: l
  } = require("../codex.js");
  window.Codex = {
    CdxButton: e,
    CdxIcon: t,
    CdxDialog: n,
    CdxInfoChip: o,
    CdxSearchInput: s,
    CdxTextInput: a,
    CdxMenu: r,
    CdxMessage: c,
    CdxTabs: u,
    CdxTab: g,
    CdxField: i,
    CdxRadio: l
  };
}
const oe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Zf = {
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
}, ew = window.Vue.toDisplayString, nr = window.Vue.openBlock, or = window.Vue.createElementBlock, tw = window.Vue.createCommentVNode, _u = window.Vue.createElementVNode, nw = window.Vue.normalizeClass, ow = ["width", "height", "aria-labelledby"], sw = ["id"], aw = ["fill"], iw = ["d"];
function rw(e, t, n, o, s, a) {
  return nr(), or("span", {
    class: nw(["mw-ui-icon notranslate", a.classes])
  }, [
    (nr(), or("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (nr(), or("title", {
        key: 0,
        id: n.iconName
      }, ew(n.iconName), 9, sw)) : tw("", !0),
      _u("g", { fill: n.iconColor }, [
        _u("path", { d: a.iconImagePath }, null, 8, iw)
      ], 8, aw)
    ], 8, ow))
  ], 2);
}
const qe = /* @__PURE__ */ oe(Zf, [["render", rw]]);
const lw = {
  name: "MwButton",
  components: {
    MwIcon: qe
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
}, cw = window.Vue.renderSlot, uw = window.Vue.resolveComponent, Su = window.Vue.normalizeClass, _a = window.Vue.openBlock, sr = window.Vue.createBlock, ar = window.Vue.createCommentVNode, dw = window.Vue.toDisplayString, gw = window.Vue.createElementBlock, pw = window.Vue.toHandlerKey, hw = window.Vue.withModifiers, fw = window.Vue.mergeProps, ww = window.Vue.createElementVNode, vw = window.Vue.resolveDynamicComponent, _w = window.Vue.withCtx, Sw = { class: "mw-ui-button__content" }, yw = ["textContent"];
function xw(e, t, n, o, s, a) {
  const r = uw("mw-icon");
  return _a(), sr(vw(a.component), {
    class: Su(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: _w(() => [
      cw(e.$slots, "default", {}, () => [
        ww("span", Sw, [
          n.icon ? (_a(), sr(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Su(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : ar("", !0),
          !a.isIcon && n.label ? (_a(), gw("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: dw(n.label)
          }, null, 8, yw)) : ar("", !0),
          n.indicator ? (_a(), sr(r, fw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [pw(a.indicatorClickEvent)]: t[0] || (t[0] = hw((c) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : ar("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Me = /* @__PURE__ */ oe(lw, [["render", xw]]);
const bw = {
  name: "MwButtonGroup",
  components: {
    MwButton: Me
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
}, Cw = window.Vue.renderList, kw = window.Vue.Fragment, ir = window.Vue.openBlock, yu = window.Vue.createElementBlock, $w = window.Vue.resolveComponent, Vw = window.Vue.withModifiers, Ew = window.Vue.mergeProps, Lw = window.Vue.createBlock, Aw = { class: "row mw-ui-button-group ma-0 pa-0" };
function Dw(e, t, n, o, s, a) {
  const r = $w("mw-button");
  return ir(), yu("div", Aw, [
    (ir(!0), yu(kw, null, Cw(n.items, (c) => (ir(), Lw(r, Ew({
      key: c.value,
      value: c.value,
      "aria-selected": a.isActive(c) || null,
      ref_for: !0
    }, c.props, {
      class: ["ma-0", a.buttonClasses(c)],
      style: a.activeIndicatorStyle(c),
      onClick: Vw((u) => e.$emit("select", c.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const ia = /* @__PURE__ */ oe(bw, [["render", Dw]]);
const Tw = {
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
}, xu = window.Vue.renderSlot, Bw = window.Vue.toDisplayString, bu = window.Vue.openBlock, Cu = window.Vue.createElementBlock, Pw = window.Vue.createCommentVNode, Fw = window.Vue.createElementVNode, Mw = { class: "mw-ui-card" }, Nw = ["textContent"], Uw = { class: "mw-ui-card__content" };
function Iw(e, t, n, o, s, a) {
  return bu(), Cu("div", Mw, [
    xu(e.$slots, "header", {}, () => [
      n.title ? (bu(), Cu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Bw(n.title)
      }, null, 8, Nw)) : Pw("", !0)
    ]),
    Fw("div", Uw, [
      xu(e.$slots, "default")
    ])
  ]);
}
const Je = /* @__PURE__ */ oe(Tw, [["render", Iw]]);
const Rw = {}, zw = window.Vue.openBlock, Ow = window.Vue.createElementBlock, jw = { class: "mw-ui-divider row" };
function Hw(e, t) {
  return zw(), Ow("div", jw);
}
const Mi = /* @__PURE__ */ oe(Rw, [["render", Hw]]);
const qw = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Gw = window.Vue.renderSlot, Xw = window.Vue.resolveDynamicComponent, Ww = window.Vue.withCtx, Kw = window.Vue.openBlock, Yw = window.Vue.createBlock;
function Jw(e, t, n, o, s, a) {
  return Kw(), Yw(Xw(n.tag), { class: "mw-grid container" }, {
    default: Ww(() => [
      Gw(e.$slots, "default")
    ]),
    _: 3
  });
}
const Qw = /* @__PURE__ */ oe(qw, [["render", Jw]]), Zw = {
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
}, e0 = window.Vue.renderSlot, t0 = window.Vue.resolveDynamicComponent, n0 = window.Vue.normalizeClass, o0 = window.Vue.withCtx, s0 = window.Vue.openBlock, a0 = window.Vue.createBlock;
function i0(e, t, n, o, s, a) {
  return s0(), a0(t0(n.tag), {
    class: n0(a.classes)
  }, {
    default: o0(() => [
      e0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const M = /* @__PURE__ */ oe(Zw, [["render", i0]]), hc = ["mobile", "tablet", "desktop", "desktop-wide"], r0 = hc.reduce(
  (e, t) => Qe(ie({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), l0 = {
  name: "MwCol",
  props: Qe(ie({}, r0), {
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
      for (let n = 0; n < hc.length; n++) {
        let o = hc[n], s = this.$props[o];
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
}, c0 = window.Vue.renderSlot, u0 = window.Vue.resolveDynamicComponent, d0 = window.Vue.normalizeClass, g0 = window.Vue.withCtx, p0 = window.Vue.openBlock, m0 = window.Vue.createBlock;
function h0(e, t, n, o, s, a) {
  return p0(), m0(u0(n.tag), {
    class: d0(a.classes)
  }, {
    default: g0(() => [
      c0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ oe(l0, [["render", h0]]), f0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", w0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Ni = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", v0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, _0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Gm = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", S0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", y0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", ra = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", x0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", b0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", C0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", ku = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", k0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Xm = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", $0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", V0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", E0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", L0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", A0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", D0 = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, Ti = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, T0 = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Wm = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, B0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, Km = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", P0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const rr = window.Vue.computed, F0 = window.Vue.watch, M0 = window.Vue.ref, N0 = window.Vue.nextTick, U0 = {
  name: "MwDialog",
  components: {
    MwButton: Me,
    MwRow: M,
    MwCol: k,
    MwDivider: Mi
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
    const n = M0(null), o = rr(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = rr(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    F0(
      () => e.value,
      (u) => {
        u ? (r(), N0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const c = rr(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: c,
      overlayClass: s,
      mwIconClose: ra,
      root: n
    };
  }
}, $u = window.Vue.normalizeClass, lr = window.Vue.createElementVNode, cr = window.Vue.renderSlot, Sa = window.Vue.resolveComponent, Zo = window.Vue.createVNode, ur = window.Vue.withCtx, Vu = window.Vue.createCommentVNode, I0 = window.Vue.withKeys, Eu = window.Vue.openBlock, R0 = window.Vue.createElementBlock, z0 = window.Vue.Transition, O0 = window.Vue.normalizeStyle, j0 = window.Vue.createBlock, H0 = { class: "mw-ui-dialog__shell items-stretch" }, q0 = { class: "mw-ui-dialog__body" };
function G0(e, t, n, o, s, a) {
  const r = Sa("mw-col"), c = Sa("mw-button"), u = Sa("mw-row"), g = Sa("mw-divider");
  return Eu(), j0(z0, {
    name: "mw-ui-animation-fade",
    style: O0(o.cssVars)
  }, {
    default: ur(() => [
      n.value ? (Eu(), R0("div", {
        key: 0,
        ref: "root",
        class: $u(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = I0((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        lr("div", {
          class: $u(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        lr("div", H0, [
          n.header ? cr(e.$slots, "header", { key: 0 }, () => [
            Zo(u, { class: "mw-ui-dialog__header" }, {
              default: ur(() => [
                Zo(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                Zo(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: ur(() => [
                    Zo(c, {
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
            Zo(g)
          ]) : Vu("", !0),
          lr("div", q0, [
            cr(e.$slots, "default")
          ]),
          cr(e.$slots, "footer")
        ])
      ], 34)) : Vu("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const St = /* @__PURE__ */ oe(U0, [["render", G0]]);
const X0 = {
  name: "MwInput",
  components: {
    MwIcon: qe
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
      const t = ie({}, e.$attrs);
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
}, Lu = window.Vue.renderSlot, W0 = window.Vue.resolveComponent, ya = window.Vue.openBlock, dr = window.Vue.createBlock, Au = window.Vue.createCommentVNode, K0 = window.Vue.resolveDynamicComponent, Y0 = window.Vue.toDisplayString, J0 = window.Vue.mergeProps, Q0 = window.Vue.withModifiers, Z0 = window.Vue.createElementVNode, e1 = window.Vue.normalizeClass, t1 = window.Vue.createElementBlock, n1 = { class: "mw-ui-input__content" };
function o1(e, t, n, o, s, a) {
  const r = W0("mw-icon");
  return ya(), t1("div", {
    class: e1(a.classes),
    onClick: t[2] || (t[2] = (c) => a.focus())
  }, [
    Z0("div", n1, [
      Lu(e.$slots, "icon", {}, () => [
        n.icon ? (ya(), dr(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Au("", !0)
      ]),
      (ya(), dr(K0(n.type === "textarea" ? n.type : "input"), J0({
        ref: "input",
        class: "mw-ui-input__input",
        disabled: n.disabled || null,
        "aria-disabled": n.disabled || null,
        ".value": n.value,
        placeholder: n.placeholder
      }, a.customAttrs, {
        type: n.type,
        onInput: t[0] || (t[0] = (c) => e.$emit("update:value", c.target.value)),
        onFocus: a.onFocus,
        onBlur: a.onBlur,
        onClick: a.onClick,
        textContent: Y0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Lu(e.$slots, "indicator", {}, () => [
        n.indicator ? (ya(), dr(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = Q0((c) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Au("", !0)
      ])
    ])
  ], 2);
}
const fc = /* @__PURE__ */ oe(X0, [["render", o1]]);
const s1 = {
  name: "MwMessage",
  components: { MwCol: k, MwRow: M, MwIcon: qe, MwButton: Me },
  props: {
    /**
     * Type of the message.
     * @values notice, error, success, warning
     **/
    type: {
      type: String,
      default: "notice",
      validator: (e) => ["notice", "error", "success", "warning"].indexOf(e) !== -1
    },
    /**
     * Inline messages does not have borders
     **/
    inline: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether the message can be dismissed by clicking the close button.
     **/
    dismissable: {
      type: Boolean,
      default: !1
    }
  },
  data: () => ({
    shown: !0,
    mwIconClose: ra,
    id: ""
  }),
  computed: {
    classes: (e) => ({
      "mw-ui-message--notice": e.type === "notice",
      "mw-ui-message--warning": e.type === "warning",
      "mw-ui-message--error": e.type === "error",
      "mw-ui-message--success": e.type === "success",
      "mw-ui-message--inline": e.inline
    }),
    icon: (e) => ({
      notice: D0,
      warning: Wm,
      success: Ti,
      error: T0
    })[e.type]
  },
  mounted() {
    this.id = this.type + Math.floor(Math.random() * 100);
  },
  methods: {
    hideMessage() {
      this.shown = !1;
    }
  }
}, gr = window.Vue.renderSlot, xa = window.Vue.resolveComponent, Du = window.Vue.createVNode, Tu = window.Vue.withCtx, Bu = window.Vue.openBlock, Pu = window.Vue.createBlock, Fu = window.Vue.createCommentVNode, a1 = window.Vue.normalizeClass;
function i1(e, t, n, o, s, a) {
  const r = xa("mw-icon"), c = xa("mw-col"), u = xa("mw-button"), g = xa("mw-row");
  return e.shown ? (Bu(), Pu(g, {
    key: 0,
    class: a1([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Tu(() => [
      gr(e.$slots, "icon", {}, () => [
        Du(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Du(c, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Tu(() => [
          gr(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      gr(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
        n.dismissable ? (Bu(), Pu(u, {
          key: 0,
          class: "col shrink items-start mw-ui-message__action py-1",
          type: "icon",
          icon: e.mwIconClose,
          "icon-size": 24,
          onClick: a.hideMessage
        }, null, 8, ["icon", "onClick"])) : Fu("", !0)
      ])
    ]),
    _: 3
  }, 8, ["class", "aria-live", "aria-labelledby", "role"])) : Fu("", !0);
}
const r1 = /* @__PURE__ */ oe(s1, [["render", i1]]);
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
const l1 = {}, c1 = window.Vue.createElementVNode, u1 = window.Vue.openBlock, d1 = window.Vue.createElementBlock, g1 = { class: "mw-ui-spinner" }, p1 = /* @__PURE__ */ c1("div", { class: "mw-ui-spinner__bounce" }, null, -1), m1 = [
  p1
];
function h1(e, t) {
  return u1(), d1("div", g1, m1);
}
const rt = /* @__PURE__ */ oe(l1, [["render", h1]]), wt = {
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
const f1 = window.Vue.computed, w1 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: qe },
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
      default: Km
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: wt.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: wt.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = f1(() => {
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
}, Mu = window.Vue.normalizeStyle, Nu = window.Vue.openBlock, v1 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const _1 = window.Vue.resolveComponent, S1 = window.Vue.createBlock;
function y1(e, t, n, o, s, a) {
  const r = _1("mw-ui-icon");
  return n.thumbnail ? (Nu(), v1("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Mu(o.style)
  }, null, 4)) : (Nu(), S1(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Mu(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Tc = /* @__PURE__ */ oe(w1, [["render", y1]]);
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
const x1 = {
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
}, Uu = window.Vue.normalizeClass, Iu = window.Vue.normalizeStyle, b1 = window.Vue.createElementVNode, C1 = window.Vue.openBlock, k1 = window.Vue.createElementBlock, $1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function V1(e, t, n, o, s, a) {
  return C1(), k1("div", {
    class: Uu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Iu(a.containerStyles)
  }, [
    b1("div", {
      class: Uu(["mw-progress-bar__bar", a.barClass]),
      style: Iu(a.barStyles)
    }, null, 6)
  ], 14, $1);
}
const Ym = /* @__PURE__ */ oe(x1, [["render", V1]]), E1 = (e, t, n, o) => (s) => {
  const a = s.clientY, r = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), c = (g) => {
    o.value = !1;
    let i = Math.min(
      r + g.clientY - a,
      e.value
    );
    i = Math.max(i, t.value), n.value.style.height = i + "px";
  }, u = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), o.value = !0), document.documentElement.removeEventListener(
      "pointermove",
      c,
      !1
    ), document.documentElement.removeEventListener(
      "pointerup",
      u,
      !1
    );
  };
  document.documentElement.addEventListener("pointermove", c, !1), document.documentElement.addEventListener("pointerup", u, !1);
}, L1 = (e, t, n, o) => ({ initiateDrag: E1(
  e,
  t,
  n,
  o
) }), A1 = window.Vue.ref, Ru = window.Vue.computed, D1 = (e, t, n, o) => {
  const s = A1(0), a = Ru(
    () => t.value > e.value
  ), r = Ru(
    () => t.value <= e.value * (s.value + 1)
  ), c = (g) => {
    s.value = g, n.value.scroll(0, e.value * s.value);
  };
  return {
    handleArrowUpClick: () => {
      if (!o.value) {
        n.value.style.removeProperty("height"), o.value = !0, c(0);
        return;
      }
      c(s.value - 1);
    },
    isScrolledToEnd: r,
    scrollToStepByIndex: c,
    scrollable: a,
    scrollIndex: s
  };
};
const ba = window.Vue.ref, T1 = window.Vue.onMounted, zu = window.Vue.computed, B1 = window.Vue.nextTick, P1 = {
  name: "MwExpandableContent",
  components: {
    MwButton: Me
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
    const t = ba(!0), n = ba(null), o = zu(
      () => Math.min(e.minHeight, s.value)
    ), s = ba(1), { initiateDrag: a } = L1(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: r,
      scrollable: c,
      scrollIndex: u,
      scrollToStepByIndex: g,
      handleArrowUpClick: i
    } = D1(o, s, n, t), l = () => g(u.value + 1), d = ba(null), p = zu(() => ({
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
    return T1(() => C(this, null, function* () {
      var f;
      yield B1(), s.value = n.value.scrollHeight, (f = d.value) == null || f.addEventListener(
        "pointerdown",
        a,
        !1
      ), window.addEventListener("resize", m);
    })), {
      contentRef: n,
      cssVars: p,
      dragIndicatorRef: d,
      handleArrowUpClick: i,
      isCollapsed: t,
      isScrolledToEnd: r,
      mwIconCollapse: B0,
      mwIconExpand: S0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), g(0)), t.value = !t.value;
      },
      scrollable: c,
      scrollIndex: u,
      scrollToNextStep: l
    };
  }
}, F1 = window.Vue.renderSlot, M1 = window.Vue.normalizeClass, Ca = window.Vue.createElementVNode, N1 = window.Vue.resolveComponent, U1 = window.Vue.createVNode, pr = window.Vue.openBlock, I1 = window.Vue.createBlock, Ou = window.Vue.createCommentVNode, ju = window.Vue.createElementBlock, R1 = window.Vue.normalizeStyle, z1 = { class: "mw-ui-expandable-content__container" }, O1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, j1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function H1(e, t, n, o, s, a) {
  const r = N1("mw-button");
  return pr(), ju("div", {
    class: "mw-ui-expandable-content",
    style: R1(o.cssVars)
  }, [
    Ca("div", z1, [
      Ca("div", {
        ref: "contentRef",
        class: M1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        F1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (pr(), ju("div", O1, [
        U1(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (pr(), I1(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Ou("", !0)
      ])) : Ou("", !0)
    ]),
    Ca("div", j1, [
      Ca("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...c) => o.onDragButtonClicked && o.onDragButtonClicked(...c))
      })
    ], 512)
  ], 4);
}
const q1 = /* @__PURE__ */ oe(P1, [["render", H1]]);
const ka = window.Vue.computed, G1 = {
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
      default: wt.blue600
    },
    inactiveColor: {
      type: String,
      default: wt.gray300
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  setup(e) {
    const t = ka(() => e.size / 2 * 0.9), n = ka(() => Math.PI * (t.value * 2)), o = ka(
      () => (100 - e.percentage) / 100 * n.value
    ), s = ka(() => ({
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
}, Hu = window.Vue.createElementVNode, qu = window.Vue.normalizeStyle, X1 = window.Vue.openBlock, W1 = window.Vue.createElementBlock, K1 = ["width", "height", "viewport"], Y1 = ["r", "cx", "cy", "stroke-dasharray"], J1 = ["r", "cx", "cy", "stroke-dasharray"];
function Q1(e, t, n, o, s, a) {
  return X1(), W1("svg", {
    class: "mw-circle-progress-bar",
    width: n.size,
    height: n.size,
    xmlns: "http://www.w3.org/2000/svg",
    viewport: `0 0 ${n.size} ${n.size}`,
    style: qu(o.cssVars)
  }, [
    Hu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--inactive",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0"
    }, null, 8, Y1),
    Hu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: qu({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, J1)
  ], 12, K1);
}
const Z1 = /* @__PURE__ */ oe(G1, [["render", Q1]]), ev = window.Vue.ref, mn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, _n = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${mn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${mn.tablet}px) and (max-width: ${mn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${mn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${mn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${mn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${mn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${mn["desktop-wide"]}px)`
}, mr = {
  mobile: () => matchMedia(_n.mobile).matches,
  tablet: () => matchMedia(_n.tablet).matches,
  desktop: () => matchMedia(_n.desktop).matches,
  desktopwide: () => matchMedia(_n["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(_n["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(_n["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(_n["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(_n["desktop-and-down"]).matches
}, tv = (e) => {
  const t = Object.values(mn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, nv = {
  install: (e) => {
    const t = ev({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in mr)
        mr.hasOwnProperty(s) && (t.value[s] = mr[s]());
      t.value.nextBreakpoint = tv(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Qe(ie({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, ov = {
  install: (e) => {
    e.config.globalProperties.$mwui = Qe(ie({}, e.config.globalProperties.$mwui || {}), {
      colors: wt
    }), e.provide("colors", wt);
  }
};
class Oo extends Error {
}
const sv = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new Oo();
}), Jm = { assertUser: sv };
const av = window.Vue.resolveDirective, es = window.Vue.createElementVNode, Gu = window.Vue.withDirectives, iv = window.Vue.toDisplayString, rv = window.Vue.unref, Xu = window.Vue.withCtx, lv = window.Vue.openBlock, cv = window.Vue.createBlock, uv = window.Vue.createCommentVNode, dv = { class: "pa-4 sx-login-dialog__header" }, gv = { class: "sx-login-dialog__body px-6 pb-4" }, pv = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, mv = ["href"], hv = window.Vue.computed, fv = window.Vue.ref, wv = window.Vuex.useStore, vv = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = wv(), n = hv(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = fv(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const c = av("i18n");
      return n.value ? (lv(), cv(rv(St), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Xu(() => [
          es("div", dv, [
            Gu(es("h4", null, null, 512), [
              [c, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Xu(() => [
          Gu(es("div", gv, null, 512), [
            [c, void 0, "cx-sx-login-dialog-body"]
          ]),
          es("div", pv, [
            es("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, iv(a.$i18n("cx-sx-login-dialog-button-label")), 9, mv)
          ])
        ]),
        _: 1
      })) : uv("", !0);
    };
  }
}, Z = new mw.cx.SiteMapper(), _v = mw.util.getUrl, Sv = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, jo = !mw.config.get("wgMFMode");
class Bc {
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
    pageRevision: c,
    status: u,
    targetTitle: g
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = c, this.status = u, this.targetTitle = g;
  }
}
const $a = "original", Va = "empty", yv = {
  Elia: "Elia.eus",
  Google: "Google Translate",
  Yandex: "Yandex.Translate"
};
class ee {
  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string[]} providers
   */
  constructor(t, n, o = []) {
    this.sourceLanguage = t, this.targetLanguage = n, this.providers = [
      ...o,
      $a,
      Va
    ];
  }
  /**
   * Returns the label to be displayed for the given MT provider
   *
   * @param {string} mtProvider
   * @return {string}
   */
  static getMTProviderLabel(t) {
    return yv[t] || t;
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
    return $a;
  }
  static get EMPTY_TEXT_PROVIDER_KEY() {
    return Va;
  }
  static isUserMTProvider(t) {
    return [$a, Va].includes(
      t
    );
  }
  static getProviderForInstrumentation(t) {
    return t === Va ? "blank" : t === $a ? "source" : t.toLowerCase();
  }
}
class Mn {
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Qe(ie({}, a), {
      [ee.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [ee.EMPTY_TEXT_PROVIDER_KEY]: ""
    }), this.selected = r;
  }
  reset() {
    this.proposedTranslations = {
      [ee.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalContent,
      [ee.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedContent = "", this.mtProviderUsed = "", this.selected = !1;
  }
  /**
   * @return {string}
   */
  get originalContent() {
    return this.proposedTranslations[ee.ORIGINAL_TEXT_PROVIDER_KEY];
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
const Wu = (e) => {
  var n;
  const t = Bi(e);
  return ((n = t == null ? void 0 : t.target) == null ? void 0 : n.wt) || null;
}, Bi = (e) => {
  var n, o, s;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.mw) || "{}");
  return ((s = (o = t == null ? void 0 : t.parts) == null ? void 0 : o[0]) == null ? void 0 : s.template) || null;
}, no = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), Qm = (e) => {
  const t = Bi(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = xv(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, xv = (e) => {
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
      let c = !0;
      r[0] === "<nowiki>" ? (o = !0, c = !1) : r[0] === "</nowiki>" || r[0].match(/<nowiki\s*\/>/) ? c = !1 : r[0].match(/(?:\[\[)/) ? (a++, c = !1) : r[0].match(/(?:\]\])/) ? a > 0 && (a--, c = !1) : r[0].match(/(?:\{\{)/) ? (s++, c = !1) : r[0].match(/(?:\}\})/) ? s > 0 && (s--, c = !1) : r[0].match(/\|+/) && (s > 0 || a > 0) && (c = !1), c ? n += "<nowiki>" + r[0] + "</nowiki>" : n += r[0];
    }
  }
  return n;
}, Zm = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, eh = (e) => {
  const t = Zm(e);
  return t == null ? void 0 : t.targetExists;
};
class hr {
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
class it {
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
      (a) => no(a)
    );
    s && eh(s) && (this.blockTemplateAdaptationInfo[t] = Zm(s));
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
      (t) => no(t)
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
    const t = Bi(this.transclusionNode);
    return (t == null ? void 0 : t.params) || {};
  }
  /**
   * If current subsection is a block template, it returns the
   * source block template name. Otherwise, it returns null.
   *
   * @return {string|null}
   */
  get sourceBlockTemplateName() {
    return this.isBlockTemplate ? Wu(this.transclusionNode) : null;
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => no(o));
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
    return n && Wu(n) || "";
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
    const o = Bi(n);
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
   *
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
      (a) => no(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new hr({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new hr({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new hr({
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
    if (!t || ee.isUserMTProvider(t))
      return null;
    if (this.isBlockTemplate) {
      n.innerHTML = this.blockTemplateProposedTranslations[t];
      const o = Array.from(n.children).find(
        (s) => no(s)
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
const Pc = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), bv = Pc - 10, Cv = [
  { status: "failure", value: 100 - Pc },
  { status: "warning", value: 100 - bv },
  { status: "success", value: 100 }
], th = (e, t, n) => {
  const o = Ku(e).textContent, s = Ku(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, kv = (e) => Cv.find((t) => e <= t.value).status, $v = (e, t) => th(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), Vv = () => (100 - Pc) / 100, Ku = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Kt = {
  calculateScore: th,
  getScoreStatus: kv,
  getMTScoreForPageSection: $v,
  getMtModificationThreshold: Vv
}, Ea = "__LEAD_SECTION__";
class No {
  /**
   * Creates an instance of PageSection.
   * @param {Object} options
   * @param {string} [options.id]
   * @param {string|null} [options.title] the title of the section or the page title when section is a lead section
   * @param {boolean} [options.isLeadSection]
   * @param {SubSection[]} [options.subSections]
   */
  constructor({
    id: t,
    title: n = null,
    subSections: o = [],
    isLeadSection: s = !1,
    isTitleSelected: a = !1
  } = {}) {
    this.id = t, this.proposedTitleTranslations = {
      [ee.ORIGINAL_TEXT_PROVIDER_KEY]: n,
      [ee.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.mtProviderUsedForTitle = "", this.translatedTitle = "", this.subSections = o, this.isLeadSection = s, this.isTitleSelected = a;
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
      [ee.ORIGINAL_TEXT_PROVIDER_KEY]: this.originalTitle,
      [ee.EMPTY_TEXT_PROVIDER_KEY]: ""
    }, this.translatedTitle = "", this.subSections.forEach((t) => t.reset());
  }
  static get LEAD_SECTION_DUMMY_TITLE() {
    return Ea;
  }
  static isSectionLead(t) {
    return !t || t === Ea;
  }
  set originalTitle(t) {
    this.proposedTitleTranslations[ee.ORIGINAL_TEXT_PROVIDER_KEY] = t;
  }
  /**
   * @return {string}
   */
  get originalTitle() {
    return this.proposedTitleTranslations[ee.ORIGINAL_TEXT_PROVIDER_KEY];
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
      let c = "";
      r && (c = r.innerHTML), a.editedTranslation = c;
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
    return n instanceof it ? n.transclusionNode.outerHTML : n instanceof Mn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof it ? t.blockTemplateSelected = !1 : t instanceof Mn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof it ? n.blockTemplateSelected = !0 : n instanceof Mn && (n.selected = !0);
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
    if (o instanceof it)
      return !!o.blockTemplateProposedTranslations.hasOwnProperty(
        n
      );
    if (o instanceof Mn)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof it ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Mn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof it ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Mn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Kt.getMTScoreForPageSection(this, t) / 100;
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
    return this.isLeadSection ? Ea : this.originalTitle;
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
    return this.isLeadSection ? Ea : this.title;
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
class Ui extends Bc {
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
    startTimestamp: c,
    lastUpdatedTimestamp: u,
    status: g,
    pageRevision: i,
    targetTitle: l,
    sourceSectionTitle: d,
    targetSectionTitle: p,
    progress: m
  }) {
    super({
      translationId: n,
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: r,
      startTimestamp: c,
      lastUpdatedTimestamp: u,
      pageRevision: i,
      status: g,
      targetTitle: l
    }), this.sectionTranslationId = t, this.sectionId = o, this.sourceSectionTitle = d, this.targetSectionTitle = p, this.progress = m, this.restored = !1;
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
    return No.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? No.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const Pt = "previous-edits", Yt = "popular", Ne = "topic", Ce = "geography", Q = "collections", Ye = "automatic", vt = "seed", Yu = window.Vue.ref, { topics: Ev, regions: Lv } = mw.loader.require(
  "ext.cx.articlefilters"
), La = {
  type: Ye,
  id: Pt
}, Fc = () => {
  const e = Yu(
    Ev.flatMap((c) => c.topics).map((c) => c.topicId.toLowerCase())
  ), t = Yu(!1), n = (c, u) => e.value.includes(u) ? { type: Ne, id: u } : null, o = (c, u) => Lv.some(
    (i) => i.id.toLowerCase() === u || i.countries.some(
      (l) => l.id.toLowerCase() === u
    )
  ) ? { type: Ce, id: u } : null, s = (c, u, g) => g && !g.some((i) => i.name.toLowerCase() === u) ? null : { type: Q, id: c };
  return { filtersValidatorError: t, validateFilters: ({ type: c, id: u }, g = !1) => {
    t.value = !1;
    const i = c == null ? void 0 : c.toLowerCase(), l = u == null ? void 0 : u.toLowerCase();
    if (l === Pt)
      return {
        type: Ye,
        id: Pt
      };
    if (l === Yt)
      return {
        type: Ye,
        id: Yt
      };
    if (l === Q)
      return g && !g.length ? (t.value = !0, La) : {
        type: Ye,
        id: Q
      };
    if (i === Ne) {
      const d = n(u, l);
      if (d)
        return d;
      t.value = !0;
    } else if (i === Ce) {
      const d = o(u, l);
      if (d)
        return d;
      t.value = !0;
    } else if (i === Q) {
      const d = s(
        u,
        l,
        g
      );
      if (d)
        return d;
      t.value = !0;
    } else if (i === vt)
      return { type: vt, id: u };
    return La;
  }, isDefaultFilter: ({ type: c, id: u }) => c === La.type && u === La.id };
}, Av = window.Vue.inject, Dv = window.Vue.reactive;
var Tv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, nh = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Tv, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
      constructor(l) {
        this.locale = l;
      }
      convertPlural(l, d) {
        const p = /\d+=/i;
        if (!d || d.length === 0)
          return "";
        for (let h = 0; h < d.length; h++) {
          const f = d[h];
          if (p.test(f)) {
            if (parseInt(f.slice(0, f.indexOf("=")), 10) === l)
              return f.slice(f.indexOf("=") + 1);
            d[h] = void 0;
          }
        }
        d = d.filter((h) => !!h);
        let m = this.getPluralForm(l, this.locale);
        return m = Math.min(m, d.length - 1), d[m];
      }
      getPluralForm(l, d) {
        const p = new Intl.PluralRules(d), m = p.resolvedOptions().pluralCategories, h = p.select(l);
        return ["zero", "one", "two", "few", "many", "other"].filter((f) => m.includes(f)).indexOf(h);
      }
      convertNumber(l, d = !1) {
        let p = this.digitTransformTable(this.locale), m = "";
        if (d) {
          if (parseFloat(l, 10) === l || !p)
            return l;
          const h = [];
          for (const v in p)
            h[p[v]] = v;
          p = h;
          const f = String(l);
          for (let v = 0; v < f.length; v++)
            m += p[f[v]] || f[v];
          return parseFloat(m, 10);
        }
        if (Intl.NumberFormat) {
          let h;
          const f = [...o[this.locale] || [], "en"];
          return h = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : f, m = new Intl.NumberFormat(h).format(l), m === "NaN" && (m = l), m;
        }
      }
      convertGrammar(l, d) {
        return l;
      }
      gender(l, d) {
        if (!d || d.length === 0)
          return "";
        for (; d.length < 2; )
          d.push(d[d.length - 1]);
        return l === "male" ? d[0] : l === "female" ? d[1] : d.length === 3 ? d[2] : d[0];
      }
      digitTransformTable(l) {
        return !!n[l] && n[l].split("");
      }
    }
    var a = { bs: class extends s {
      convertGrammar(i, l) {
        switch (l) {
          case "instrumental":
            i = "s " + i;
            break;
          case "lokativ":
            i = "o " + i;
        }
        return i;
      }
    }, default: s, dsb: class extends s {
      convertGrammar(i, l) {
        switch (l) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, fi: class extends s {
      convertGrammar(i, l) {
        let d = i.match(/[aou][^äöy]*$/i);
        const p = i;
        switch (i.match(/wiki$/i) && (d = !1), i.match(/[bcdfghjklmnpqrstvwxz]$/i) && (i += "i"), l) {
          case "genitive":
            i += "n";
            break;
          case "elative":
            i += d ? "sta" : "stä";
            break;
          case "partitive":
            i += d ? "a" : "ä";
            break;
          case "illative":
            i += i.slice(-1) + "n";
            break;
          case "inessive":
            i += d ? "ssa" : "ssä";
            break;
          default:
            i = p;
        }
        return i;
      }
    }, ga: class extends s {
      convertGrammar(i, l) {
        if (l === "ainmlae")
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
      convertGrammar(i, l) {
        switch (l) {
          case "prefixed":
          case "תחילית":
            i.slice(0, 1) === "ו" && i.slice(0, 2) !== "וו" && (i = "ו" + i), i.slice(0, 1) === "ה" && (i = i.slice(1)), (i.slice(0, 1) < "א" || i.slice(0, 1) > "ת") && (i = "־" + i);
        }
        return i;
      }
    }, hsb: class extends s {
      convertGrammar(i, l) {
        switch (l) {
          case "instrumental":
            i = "z " + i;
            break;
          case "lokatiw":
            i = "wo " + i;
        }
        return i;
      }
    }, hu: class extends s {
      convertGrammar(i, l) {
        switch (l) {
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
      convertGrammar(i, l) {
        return l === "genitive" && (i.slice(-1) === "ա" ? i = i.slice(0, -1) + "այի" : i.slice(-1) === "ո" ? i = i.slice(0, -1) + "ոյի" : i.slice(-4) === "գիրք" ? i = i.slice(0, -4) + "գրքի" : i += "ի"), i;
      }
    }, la: class extends s {
      convertGrammar(i, l) {
        switch (l) {
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
      convertGrammar(i, l) {
        let d, p, m, h;
        switch (d = "мæ", p = "", m = "", h = "", i.match(/тæ$/i) ? (i = i.slice(0, -1), d = "æм") : i.match(/[аæеёиоыэюя]$/i) ? p = "й" : i.match(/у$/i) ? i.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (p = "й") : i.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (m = "-"), l) {
          case "genitive":
            h = m + p + "ы";
            break;
          case "dative":
            h = m + p + "æн";
            break;
          case "allative":
            h = m + d;
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
      convertGrammar(i, l) {
        return l === "genitive" && (i.slice(-1) === "ь" ? i = i.slice(0, -1) + "я" : i.slice(-2) === "ия" ? i = i.slice(0, -2) + "ии" : i.slice(-2) === "ка" ? i = i.slice(0, -2) + "ки" : i.slice(-2) === "ти" ? i = i.slice(0, -2) + "тей" : i.slice(-2) === "ды" ? i = i.slice(0, -2) + "дов" : i.slice(-3) === "ник" && (i = i.slice(0, -3) + "ника")), i;
      }
    }, sl: class extends s {
      convertGrammar(i, l) {
        switch (l) {
          case "mestnik":
            i = "o " + i;
            break;
          case "orodnik":
            i = "z " + i;
        }
        return i;
      }
    }, uk: class extends s {
      convertGrammar(i, l) {
        switch (l) {
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
    class c {
      constructor(l) {
        this.locale = l, this.language = new (a[l] || a.default)(l);
      }
      emit(l, d) {
        let p, m, h;
        switch (typeof l) {
          case "string":
          case "number":
            p = l;
            break;
          case "object":
            if (m = l.slice(1).map((f) => this.emit(f, d)), h = l[0].toLowerCase(), typeof this[h] != "function")
              throw new Error('unknown operation "' + h + '"');
            p = this[h](m, d);
            break;
          case "undefined":
            p = "";
            break;
          default:
            throw new Error("unexpected type in AST: " + typeof l);
        }
        return p;
      }
      concat(l) {
        let d = "";
        return l.forEach((p) => {
          d += p;
        }), d;
      }
      replace(l, d) {
        const p = parseInt(l[0], 10);
        return p < d.length ? d[p] : "$" + (p + 1);
      }
      plural(l) {
        const d = parseFloat(this.language.convertNumber(l[0], 10)), p = l.slice(1);
        return p.length ? this.language.convertPlural(d, p) : "";
      }
      gender(l) {
        const d = l[0], p = l.slice(1);
        return this.language.gender(d, p);
      }
      grammar(l) {
        const d = l[0], p = l[1];
        return p && d && this.language.convertGrammar(p, d);
      }
      wikilink(l) {
        let d, p = l[0];
        p.charAt(0) === ":" && (p = p.slice(1));
        const m = `./${p}`;
        return d = l.length === 1 ? p : l[1], `<a href="${m}" title="${p}">${d}</a>`;
      }
      extlink(l) {
        if (l.length !== 2)
          throw new Error("Expected two items in the node");
        return `<a href="${l[0]}">${l[1]}</a>`;
      }
      bidi(l) {
        const d = function(p) {
          const m = p.match(r);
          return m ? m[2] === void 0 ? "ltr" : "rtl" : null;
        }(l[0]);
        return d === "ltr" ? "‪" + l[0] + "‬" : d === "rtl" ? "‫" + l[0] + "‬" : l[0];
      }
      formatnum(l) {
        const d = !!l[1] && l[1] === "R", p = l[0];
        return typeof p == "string" || typeof p == "number" ? this.language.convertNumber(p, d) : p;
      }
      htmlattributes(l) {
        const d = {};
        for (let p = 0, m = l.length; p < m; p += 2)
          d[l[p]] = l[p + 1];
        return d;
      }
      htmlelement(l) {
        const d = l.shift(), p = l.shift();
        let m = l, h = "";
        for (const f in p)
          h += ` ${f}="${p[f]}"`;
        return Array.isArray(m) || (m = [m]), `<${d}${h}>${m.join("")}</${d}>`;
      }
    }
    class u {
      constructor(l, { wikilinks: d = !1 } = {}) {
        this.locale = l, this.wikilinks = d, this.emitter = new c(this.locale);
      }
      parse(l, d) {
        if (l.includes("{{") || l.includes("<") || this.wikilinks && l.includes("[")) {
          const p = function(m, { wikilinks: h = !1 } = {}) {
            let f = 0;
            function v(A) {
              return () => {
                for (let j = 0; j < A.length; j++) {
                  const We = A[j]();
                  if (We !== null)
                    return We;
                }
                return null;
              };
            }
            function w(A) {
              const j = f, We = [];
              for (let Qt = 0; Qt < A.length; Qt++) {
                const Zt = A[Qt]();
                if (Zt === null)
                  return f = j, null;
                We.push(Zt);
              }
              return We;
            }
            function y(A, j) {
              return () => {
                const We = f, Qt = [];
                let Zt = j();
                for (; Zt !== null; )
                  Qt.push(Zt), Zt = j();
                return Qt.length < A ? (f = We, null) : Qt;
              };
            }
            function S(A) {
              const j = A.length;
              return () => {
                let We = null;
                return m.slice(f, f + j) === A && (We = A, f += j), We;
              };
            }
            function x(A) {
              return () => {
                const j = m.slice(f).match(A);
                return j === null ? null : (f += j[0].length, j[0]);
              };
            }
            const L = x(/^\s+/), b = S("|"), N = S(":"), V = S("\\"), T = x(/^./), I = S("$"), X = x(/^\d+/), Y = S('"'), ke = S("'"), Se = x(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), Xe = x(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), Re = v([ye, x(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function ye() {
              const A = w([V, T]);
              return A === null ? null : A[1];
            }
            const De = v([ye, Xe]), U = v([ye, Se]);
            function q() {
              const A = w([I, X]);
              return A === null ? null : ["REPLACE", parseInt(A[1], 10) - 1];
            }
            const G = (se = x(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), xe = function(A) {
              return A.toString();
            }, () => {
              const A = se();
              return A === null ? null : xe(A);
            });
            var se, xe;
            function P() {
              const A = w([b, y(0, fa)]);
              if (A === null)
                return null;
              const j = A[1];
              return j.length > 1 ? ["CONCAT"].concat(j) : j[0];
            }
            function H() {
              const A = w([G, N, q]);
              return A === null ? null : [A[0], A[2]];
            }
            function _() {
              const A = w([G, N, fa]);
              return A === null ? null : [A[0], A[2]];
            }
            function E() {
              const A = w([G, N]);
              return A === null ? null : [A[0], ""];
            }
            const D = v([function() {
              const A = w([v([H, _, E]), y(0, P)]);
              return A === null ? null : A[0].concat(A[1]);
            }, function() {
              const A = w([G, y(0, P)]);
              return A === null ? null : [A[0]].concat(A[1]);
            }]), F = S("{{"), W = S("}}"), ae = S("[["), z = S("]]"), O = S("["), ne = S("]");
            function ze() {
              const A = w([F, D, W]);
              return A === null ? null : A[1];
            }
            const pe = v([function() {
              const A = w([y(1, fa), b, y(1, ha)]);
              return A === null ? null : [["CONCAT"].concat(A[0]), ["CONCAT"].concat(A[2])];
            }, function() {
              const A = w([y(1, fa)]);
              return A === null ? null : [["CONCAT"].concat(A[0])];
            }]);
            function he() {
              let A = null;
              const j = w([ae, pe, z]);
              if (j !== null) {
                const We = j[1];
                A = ["WIKILINK"].concat(We);
              }
              return A;
            }
            function zn() {
              let A = null;
              const j = w([O, y(1, Of), L, y(1, ha), ne]);
              return j !== null && (A = ["EXTLINK", j[1].length === 1 ? j[1][0] : ["CONCAT"].concat(j[1]), ["CONCAT"].concat(j[3])]), A;
            }
            const Qo = x(/^[A-Za-z]+/);
            function Jt() {
              const A = x(/^[^"]*/), j = w([Y, A, Y]);
              return j === null ? null : j[1];
            }
            function If() {
              const A = x(/^[^']*/), j = w([ke, A, ke]);
              return j === null ? null : j[1];
            }
            function Rf() {
              const A = x(/^\s*=\s*/), j = w([L, Qo, A, v([Jt, If])]);
              return j === null ? null : [j[1], j[3]];
            }
            function zf() {
              const A = y(0, Rf)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], A);
            }
            const Of = v([ze, q, he, zn, function() {
              const A = y(1, Re)();
              return A === null ? null : A.join("");
            }]), ha = v([ze, q, he, zn, function() {
              let A = null;
              const j = f, We = S("<"), Qt = x(/^\/?/), Zt = x(/^\s*>/), Ji = w([We, Qo, zf, Qt, Zt]);
              if (Ji === null)
                return null;
              const pu = f, mu = Ji[1], Qi = y(0, ha)(), jf = f, hu = w([S("</"), Qo, Zt]);
              if (hu === null)
                return ["CONCAT", m.slice(j, pu)].concat(Qi);
              const Hf = f, qf = hu[1], fu = Ji[2];
              if (function(On, wa, Zi, er = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((On = On.toLowerCase()) !== (wa = wa.toLowerCase()) || er.allowedHtmlElements.indexOf(On) === -1)
                  return !1;
                const Gf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let va = 0, Xf = Zi.length; va < Xf; va += 2) {
                  const tr = Zi[va];
                  if (er.allowedHtmlCommonAttributes.indexOf(tr) === -1 && (er.allowedHtmlAttributesByElement[On] || []).indexOf(tr) === -1 || tr === "style" && Zi[va + 1].search(Gf) !== -1)
                    return !1;
                }
                return !0;
              }(mu, qf, fu.slice(1)))
                A = ["HTMLELEMENT", mu, fu].concat(Qi);
              else {
                const On = (wa) => wa.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                A = ["CONCAT", On(m.slice(j, pu))].concat(Qi, On(m.slice(jf, Hf)));
              }
              return A;
            }, function() {
              const A = y(1, U)();
              return A === null ? null : A.join("");
            }]), fa = v([ze, q, function() {
              const A = y(1, De)();
              return A === null ? null : A.join("");
            }]), gu = function() {
              const A = y(0, ha)();
              return A === null ? null : ["CONCAT"].concat(A);
            }();
            if (gu === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return gu;
          }(l, { wikilinks: this.wikilinks });
          return this.emitter.emit(p, d);
        }
        return this.simpleParse(l, d);
      }
      simpleParse(l, d) {
        return l.replace(/\$(\d+)/g, (p, m) => {
          const h = parseInt(m, 10) - 1;
          return d[h] !== void 0 ? d[h] : "$" + m;
        });
      }
    }
    class g {
      constructor(l) {
        this.sourceMap = /* @__PURE__ */ new Map();
      }
      load(l, d) {
        if (typeof l != "object")
          throw new Error("Invalid message source. Must be an object");
        if (d) {
          if (!/^[a-zA-Z0-9-]+$/.test(d))
            throw new Error(`Invalid locale ${d}`);
          for (const p in l)
            if (p.indexOf("@") !== 0) {
              if (typeof l[p] == "object")
                return this.load(l);
              if (typeof l[p] != "string")
                throw new Error(`Invalid message for message ${p} in ${d} locale.`);
              break;
            }
          this.sourceMap.has(d) ? this.sourceMap.set(d, Object.assign(this.sourceMap.get(d), l)) : this.sourceMap.set(d, l);
        } else
          for (d in l)
            this.load(l[d], d);
      }
      getMessage(l, d) {
        const p = this.sourceMap.get(d);
        return p ? p[l] : null;
      }
      hasLocale(l) {
        return this.sourceMap.has(l);
      }
    }
    return class {
      constructor(i, { finalFallback: l = "en", messages: d, wikilinks: p = !1 } = {}) {
        this.locale = i, this.parser = new u(this.locale, { wikilinks: p }), this.messageStore = new g(), d && this.load(d, this.locale), this.finalFallback = l, this.wikilinks = p;
      }
      load(i, l) {
        return this.messageStore.load(i, l || this.locale);
      }
      i18n(i, ...l) {
        return this.parser.parse(this.getMessage(i), l);
      }
      setLocale(i) {
        this.locale = i, this.parser = new u(this.locale, { wikilinks: this.wikilinks });
      }
      getFallbackLocales() {
        return [...o[this.locale] || [], this.finalFallback];
      }
      getMessage(i) {
        let l = this.locale, d = 0;
        const p = this.getFallbackLocales(this.locale);
        for (; l; ) {
          const m = l.split("-");
          let h = m.length;
          do {
            const f = m.slice(0, h).join("-"), v = this.messageStore.getMessage(i, f);
            if (typeof v == "string")
              return v;
            h--;
          } while (h);
          l = p[d], d++;
        }
        return i;
      }
      registerParserPlugin(i, l) {
        c.prototype[i] = l;
      }
    };
  });
})(nh);
var Bv = nh.exports;
const Ju = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, oh = Symbol("banana-context");
function ue() {
  const e = Av(oh);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function Pv(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = Dv(new Bv(e.locale, e));
  return {
    install: (n) => {
      n.provide(oh, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = Ju(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = Ju(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const wn = window.Vue.ref, Fv = window.Vue.computed, Ii = wn(null), Ri = wn(null), zi = wn(null), la = wn(null), Mc = wn(null), Oi = wn(null), sh = wn(null), ah = wn(null), Nc = wn(null), { validateFilters: Mv, filtersValidatorError: Nv } = Fc(), ih = {
  from: Ii,
  to: Ri,
  section: la,
  draft: Mc,
  page: zi,
  revision: Oi,
  "active-list": Nc
}, Uv = Fv(() => ({
  type: sh.value,
  id: ah.value
})), rh = (e, t) => {
  sh.value = e, ah.value = t, Pi("filter-type", e), t && Pi("filter-id", t);
}, Iv = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Ui && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), ih[o].value = s;
  }
  t.delete("title"), ca(Object.fromEntries(t));
}, Uc = (e, t) => {
  ih[e].value = t, Pi(e, t);
}, Rv = (e) => {
  Uc("section", e);
}, zv = (e) => {
  Uc("page", e);
}, Ov = (e) => {
  Uc("active-list", e);
}, ca = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    _v(`Special:ContentTranslation${t}`, e)
  );
}, jv = () => {
  const e = ue(), t = new URLSearchParams(location.search);
  zi.value = t.get("page"), Ii.value = t.get("from"), Ri.value = t.get("to"), la.value = t.get("section"), Oi.value = t.get("revision"), Nc.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = Mv({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  rh(n.type, n.id), Nv.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, Hv = () => {
  const e = new URLSearchParams(location.search);
  la.value = null, e.delete("section"), e.delete("title"), ca(Object.fromEntries(e));
}, Pi = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), ca(Object.fromEntries(n));
}, qv = (e) => new URLSearchParams(location.search).get(e), Gv = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Ii.value = e, Ri.value = t, n.delete("title"), ca(Object.fromEntries(n));
}, Xv = () => {
  const e = new URLSearchParams(location.search);
  zi.value = null, la.value = null, Mc.value = null, Oi.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), ca(Object.fromEntries(e));
}, Wv = () => new URLSearchParams(location.search).get("force-quick-tutorial"), B = () => ({
  isQuickTutorialForced: Wv,
  setLanguageURLParams: Gv,
  setSectionURLParam: Rv,
  setTranslationURLParams: Iv,
  initializeURLState: jv,
  clearTranslationURLParameters: Xv,
  clearSectionURLParameter: Hv,
  setUrlParam: Pi,
  getUrlParam: qv,
  pageURLParameter: zi,
  sourceLanguageURLParameter: Ii,
  targetLanguageURLParameter: Ri,
  sectionURLParameter: la,
  draftURLParameter: Mc,
  revisionURLParameter: Oi,
  setPageURLParam: zv,
  currentSuggestionFilters: Uv,
  setFilterURLParams: rh,
  activeDashboardTabParameter: Nc,
  setActiveDashboardTabParameter: Ov
}), Kv = () => Z.getLanguagePairs();
function Yv(e, t) {
  return C(this, null, function* () {
    const n = Z.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new ee(e, t, o.mt)
      )
    );
  });
}
function Jv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function Qv(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = Z.getWikiDomainCode(e), r = Z.getWikiDomainCode(t), c = {
    action: "wblinktitles",
    fromsite: s.replace(r, a),
    fromtitle: n,
    tosite: s,
    totitle: o
  }, u = new mw.ForeignApi("https://www.wikidata.org/w/api.php");
  return Promise.resolve(u.postWithToken("csrf", c)).then((g) => {
    const l = {
      action: "tag",
      revid: g.entity.sitelinks.lastrevid,
      tags: ["contenttranslation", "sectiontranslation"]
    };
    return Promise.resolve(u.postWithToken("csrf", l));
  });
}
const ji = {
  fetchSupportedLanguageCodes: Kv,
  fetchSupportedMTProviders: Yv,
  fetchCXServerToken: Jv,
  addWikibaseLink: Qv
}, Ic = window.Vue.ref, Qu = Ic([]), Zu = Ic([]), ed = Ic(!1);
function ua() {
  return {
    fetchSupportedLanguageCodes: () => C(this, null, function* () {
      if (!ed.value) {
        ed.value = !0;
        const t = yield ji.fetchSupportedLanguageCodes();
        Qu.value = t.sourceLanguages, Zu.value = t.targetLanguages;
      }
    }),
    supportedSourceLanguageCodes: Qu,
    supportedTargetLanguageCodes: Zu
  };
}
const Zv = {
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
}, e_ = {
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
}, t_ = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], n_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, o_ = {
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
}, s_ = {
  languages: Zv,
  scriptgroups: e_,
  rtlscripts: t_,
  regiongroups: n_,
  territories: o_
};
var Ue = s_;
function da(e) {
  return !!Ue.languages[e];
}
function Rn(e) {
  return da(e) && Ue.languages[e].length === 1 ? Ue.languages[e][0] : !1;
}
function a_() {
  return Ue.languages;
}
function ga(e) {
  var t = Rn(e);
  return t ? ga(t) : da(e) ? Ue.languages[e][0] : "Zyyy";
}
function Rc(e) {
  var t = Rn(e);
  return t ? Rc(t) : da(e) && Ue.languages[e][1] || "UNKNOWN";
}
function oa(e) {
  var t = Rn(e);
  return t ? oa(t) : da(e) && Ue.languages[e][2] || e;
}
function i_() {
  var e, t = {};
  for (e in Ue.languages)
    Rn(e) || (t[e] = oa(e));
  return t;
}
function lh(e) {
  var t, n, o = [];
  for (t in Ue.languages)
    if (!Rn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === ga(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function r_(e) {
  return lh([e]);
}
function ch(e) {
  var t;
  for (t in Ue.scriptgroups)
    if (Ue.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function zc(e) {
  return ch(ga(e));
}
function uh(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Rn(n) || n, a = zc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function dh(e) {
  var t, n, o, s = {};
  for (t in Ue.languages)
    if (!Rn(t)) {
      for (n = 0; n < e.length; n++)
        if (Rc(t).includes(e[n])) {
          o = zc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function l_(e) {
  return dh([e]);
}
function c_(e) {
  var t, n, o, s = [];
  for (t = uh(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function u_(e, t) {
  var n = oa(e) || e, o = oa(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function gh(e) {
  return Ue.rtlscripts.includes(ga(e));
}
function d_(e) {
  return gh(e) ? "rtl" : "ltr";
}
function g_(e) {
  return Ue.territories[e] || [];
}
function p_(e, t) {
  t.target ? Ue.languages[e] = [t.target] : Ue.languages[e] = [t.script, t.regions, t.autonym];
}
var R = {
  addLanguage: p_,
  getAutonym: oa,
  getAutonyms: i_,
  getDir: d_,
  getGroupOfScript: ch,
  getLanguages: a_,
  getLanguagesByScriptGroup: uh,
  getLanguagesByScriptGroupInRegion: l_,
  getLanguagesByScriptGroupInRegions: dh,
  getLanguagesInScript: r_,
  getLanguagesInScripts: lh,
  getLanguagesInTerritory: g_,
  getRegions: Rc,
  getScript: ga,
  getScriptGroupOfLanguage: zc,
  isKnown: da,
  isRedirect: Rn,
  isRtl: gh,
  sortByScriptGroup: c_,
  sortByAutonym: u_
};
const io = window.Vue.computed;
function Ae(e) {
  const t = io(() => e.state.application.sourceLanguage), n = io(() => e.state.application.targetLanguage), o = io(
    () => e.state.application.currentMTProvider
  ), s = io(
    () => R.getAutonym(t.value)
  ), a = io(
    () => R.getAutonym(n.value)
  ), r = io(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class Ho {
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
    pagelanguage: c,
    pageprops: u,
    pageviews: g,
    thumbnail: i = null,
    title: l,
    revisions: d,
    _alias: p,
    content: m = null,
    sections: h = []
  } = {}) {
    var f;
    this.language = c, this.title = l, this.pageId = r, this.description = t, this.image = s, this.imageName = a, this.pageprops = u, this.pageviews = g, this.thumbnail = i, this.langLinksCount = n, this.articleSize = (f = d == null ? void 0 : d[0]) == null ? void 0 : f.size, this.revision = o, this.alias = p, this.wikidataId = u == null ? void 0 : u.wikibase_item, this.content = m, this.sections = h;
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
class m_ {
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
function h_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const f_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), h_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, w_ = (e, t) => {
  let n, o;
  return t ? (n = f_(e), o = n.$element.find(
    "section[rel='cx:Section']"
  ).map((a, r) => {
    const c = $(r).data("view").getModel();
    if (c)
      return ve.dm.converter.getDomFromNode(
        c,
        // CLIPBOARD_MODE helps to copy the data-mw from elsewhere to
        // to the local nodes
        ve.dm.Converter.static.CLIPBOARD_MODE
      ).body.children[0];
  }), n.destroy()) : o = $(e).filter("section[rel='cx:Section']"), o;
}, v_ = (e, t) => {
  const n = Array.from(
    w_(e, t)
  );
  return __(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...r] = s;
      let c = "";
      const u = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? c = a.textContent.trim() : r.unshift(a);
      const g = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (l) => new it({
          sentences: S_(l),
          node: l
        })
      ), i = !c;
      return new No({ id: u, title: c, subSections: g, isLeadSection: i });
    }
  );
}, __ = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, S_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Mn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), ph = {
  convertSegmentedContentToPageSections: v_
}, Oc = 120, y_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: Oc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return Z.getApi(e).get(n).then((s) => {
    const a = s.query.pages, c = (s.query.redirects || []).reduce(
      (i, l) => Qe(ie({}, i), { [l.to]: l.from }),
      {}
    ), g = (s.query.normalized || []).reduce(
      (i, l) => Qe(ie({}, i), {
        [l.to]: l.from
      }),
      {}
    );
    return a.map((i) => {
      const l = g[i.title] || c[i.title] || null;
      return new Ho(Qe(ie({}, i), { _alias: l }));
    });
  });
}, x_ = (e, t) => {
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
    var u, g;
    const a = s.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], c = (g = a[0].pageprops) == null ? void 0 : g.wikibase_item;
    return c ? Object.freeze(new m_(c, r)) : null;
  });
}, b_ = (e, t, n) => {
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
  return Z.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((c) => {
    var u, g;
    return (g = (u = c.langlinks) == null ? void 0 : u[0]) == null ? void 0 : g["*"];
  }).filter((c) => !!c));
}, C_ = (e, t, n, o = null) => mh(
  e,
  t,
  n,
  o
).then(
  (s) => new Ho({
    sections: ph.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), mh = (e, t, n, o = null) => {
  const s = Z.getWikiDomainCode(e), a = Z.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let c = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, c += "/$revision");
  const u = Z.getCXServerUrl(
    c,
    r
  );
  return fetch(u).then((g) => g.json()).then((g) => g.segmentedContent);
}, k_ = (e) => C(void 0, null, function* () {
  const t = Sv();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: Oc,
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
  return yield Z.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new Ho(s))).catch((o) => []);
}), $_ = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: Oc,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return Z.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, r) => a.index - r.index).map(
      (a) => new Ho(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, so = {
  fetchPages: y_,
  fetchLanguageTitles: x_,
  fetchPageContent: C_,
  fetchSegmentedContent: mh,
  fetchNearbyPages: k_,
  searchPagesByTitlePrefix: $_,
  fetchLanguageLinksForLanguage: b_
}, V_ = window.Vuex.useStore, qo = () => {
  const e = V_();
  return (t, n) => {
    n = n.filter(
      (a) => !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const r = n.slice(a, a + o), c = so.fetchPages(t, r).then(
        (u) => u.forEach(
          (g) => e.commit("mediawiki/addPage", g)
        )
      );
      s.push(c);
    }
    return Promise.all(s);
  };
}, E_ = window.Vuex.useStore, jc = () => {
  const e = E_(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(o.value)
  ), r = (g) => a().slice(
    s * g,
    s * (g + 1)
  ), c = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(o.value)
  );
  return {
    getFilteredPageSuggestions: c,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: (g) => c().slice(
      s * g,
      s * (g + 1)
    ),
    getSectionSuggestionsSliceByIndex: r
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
    suggestionSeed: c = null,
    suggestionProvider: u = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = r, this.langLinksCount = a, this.suggestionProvider = u, this.suggestionSeed = c, this.isListable = !0;
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
class Un {
  /**
   * Creates an instance of SectionSuggestion.
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} options.targetTitle
   * @param {Object<string, string>} options.present Object that maps section titles in source article to already existing section titles in target article
   * @param {Object<string, string>} options.missing
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
    sourceSections: c = [],
    targetSections: u = [],
    suggestionSeed: g = null,
    isListable: i = !0,
    suggestionProvider: l = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSections = c, this.targetSections = u, this.suggestionSeed = g, this.isListable = i, this.suggestionProvider = l;
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
const hh = [
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
], L_ = [
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
], A_ = [
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
], D_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], T_ = [
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
], B_ = {
  en: hh,
  es: L_,
  bn: A_,
  fr: D_,
  de: T_
};
class Uo {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class Hc {
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
class fh extends ao {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} [options.targetTitle]
   * @param {number} options.langLinksCount
   * @param {string} options.wikidataId
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
      suggestionProvider: c
    }), this.collection = new Hc(u);
  }
}
class wh extends Un {
  /**
   * @param {Object} options
   * @param {string} options.sourceLanguage
   * @param {string} options.targetLanguage
   * @param {string} options.sourceTitle
   * @param {string} options.targetTitle
   * @param {Object<string, string>} options.present Object that maps section titles in source article to already existing section titles in target article
   * @param {Object<string, string>} options.missing
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
    sourceSections: c = [],
    targetSections: u = [],
    isListable: g = !0,
    suggestionProvider: i = null,
    collection: l = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      present: a,
      missing: r,
      sourceSections: c,
      targetSections: u,
      isListable: g,
      suggestionProvider: i
    }), this.collection = new Hc(l);
  }
}
const P_ = hh, Ft = (n) => C(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
  let o = mw.config.get("wgRecommendToolAPIURL");
  e && (o += e);
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
    ), null;
  }
});
function F_() {
  return C(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Ft({ urlPostfix: t, urlParams: e })) || [], o = {};
      for (const s in n)
        o[s] = n[s].map(
          (a) => new Hc(a)
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
function M_(e, t, n = null, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: o
    };
    return n && (s.seed = n), ((yield Ft({ urlParams: s })) || []).map(
      (r) => new ao({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count),
        suggestionSeed: n
      })
    );
  });
}
const N_ = (e, t) => C(void 0, null, function* () {
  return ((yield Ft({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new ao({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), U_ = (e, t) => C(void 0, null, function* () {
  const s = (yield Ft({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  }, urlPostfix: "/sections" })) || [];
  return s && s.map(
    (a) => new Un({
      sourceLanguage: e,
      targetLanguage: t,
      sourceTitle: a.source_title,
      targetTitle: a.target_title,
      sourceSections: a.source_sections,
      targetSections: a.target_sections,
      present: a.present,
      missing: a.missing
    })
  );
}), I_ = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield Ft({ urlParams: o })) || []).map(
    (a) => new fh({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), R_ = (e, t, n = null) => C(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield Ft({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (r) => new wh({
      sourceLanguage: e,
      targetLanguage: t,
      sourceTitle: r.source_title,
      targetTitle: r.target_title,
      sourceSections: r.source_sections,
      targetSections: r.target_sections,
      present: r.present,
      missing: r.missing,
      collection: r.collection
    })
  );
});
function z_(e, t, n) {
  return C(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = Z.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new Un(a) : null;
  });
}
function O_(e, t, n = null) {
  return C(this, null, function* () {
    const o = {
      source: e,
      target: t,
      count: 24
    };
    n && (o.seed = n);
    const a = (yield Ft({ urlPostfix: "/sections", urlParams: o })) || [];
    return a && a.map(
      (r) => new Un({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: r.source_title,
        targetTitle: r.target_title,
        sourceSections: r.source_sections,
        targetSections: r.target_sections,
        present: r.present,
        missing: r.missing,
        seed: n
      })
    );
  });
}
function j_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield Ft({ urlParams: s })) || []).map(
      (r) => new ao({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function H_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield Ft({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (c) => new Un({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: c.source_title,
        targetTitle: c.target_title,
        sourceSections: c.source_sections,
        targetSections: c.target_sections,
        present: c.present,
        missing: c.missing
      })
    );
  });
}
function q_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    };
    return ((yield Ft({ urlParams: s })) || []).map(
      (r) => new ao({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function G_(e, t, n, o = 24) {
  return C(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    }, r = (yield Ft({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (c) => new Un({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: c.source_title,
        targetTitle: c.target_title,
        sourceSections: c.source_sections,
        targetSections: c.target_sections,
        present: c.present,
        missing: c.missing
      })
    );
  });
}
function X_(e) {
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
    }, n = Z.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function W_(e, t) {
  return C(this, null, function* () {
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
function K_(e) {
  const t = P_.map((o) => encodeURIComponent(o)).join("|"), n = Z.getCXServerUrl(
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
const Y_ = (e, t, n) => {
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
}, J_ = (e) => {
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
}, Q_ = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((c) => new Uo(c));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, re = {
  fetchFavorites: Q_,
  fetchPageSuggestions: M_,
  fetchSectionSuggestion: z_,
  fetchSectionSuggestions: O_,
  fetchAppendixTargetSectionTitles: K_,
  fetchArticleSections: W_,
  markFavorite: Y_,
  unmarkFavorite: J_,
  fetchUserEdits: X_,
  fetchMostPopularPageSuggestions: N_,
  fetchMostPopularSectionSuggestions: U_,
  fetchPageSuggestionsByTopics: j_,
  fetchSectionSuggestionsByTopics: H_,
  fetchPageSuggestionsByCountries: q_,
  fetchSectionSuggestionsByCountries: G_,
  fetchPageCollectionGroups: F_,
  fetchPageSuggestionsByCollections: I_,
  fetchSectionSuggestionsByCollections: R_
}, Z_ = window.Vuex.useStore, Go = () => {
  const e = Z_(), { sourceLanguage: t, targetLanguage: n } = Ae(e), o = (c) => {
    if (!c)
      return !1;
    const u = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((l) => l.sourceTitle);
    return !u.includes(c.sourceTitle) && !i.includes(c.sourceTitle);
  }, s = (c) => {
    const { pageSuggestions: u } = e.state.suggestions;
    return !u.some(
      (i) => i.sourceLanguage === c.sourceLanguage && i.targetLanguage === c.targetLanguage && i.sourceTitle === c.sourceTitle
    ) && o(c);
  }, a = (c) => e.state.suggestions.sectionSuggestions.some(
    (u) => u.sourceLanguage === c.sourceLanguage && u.targetLanguage === c.targetLanguage && u.sourceTitle === c.sourceTitle
  );
  return {
    isPageSuggestionValid: s,
    isSectionSuggestionValid: (c) => {
      if (!c)
        return !1;
      const u = e.state.suggestions.appendixSectionTitles[n.value] || [];
      return !a(c) && o(c) && c.isValid(u);
    },
    sectionSuggestionExists: a
  };
};
class eS {
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
const tS = window.Vuex.useStore, qc = window.Vue.ref, nS = qc([]), oS = qc([]);
let fr = !1, wr = !1, td = !1;
const Aa = qc([]);
let ts = null;
const vr = {
  page: nS,
  section: oS
}, vh = () => {
  const e = tS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = () => C(void 0, null, function* () {
    wr || (Aa.value = yield re.fetchUserEdits(t.value).then((g) => (wr = !0, g)));
  }), s = () => C(void 0, null, function* () {
    let g = e.getters["translator/getTranslationsByStatus"]("published");
    if (g = g.filter(
      (i) => i.sourceLanguage === t.value
    ), g.length && !fr)
      return fr = !0, g.map(
        (i) => i.sourceTitle
      );
    if (fr = !0, !wr && (yield o(), Aa.value.length > 0))
      return Aa.value;
    if (!td) {
      const i = yield re.fetchUserEdits(n.value).then((l) => (td = !0, l));
      if (i.length)
        return so.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (g) => {
    let i = vr[g].value.find(
      (l) => l.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new eS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), vr[g].value.push(i)), i;
  }, r = () => C(void 0, null, function* () {
    let g = !1, i = [];
    do {
      i = yield s(), i || (g = !0);
      for (const l in vr) {
        const d = a(l);
        d.seeds = [
          ...d.seeds,
          ...i || []
        ];
      }
    } while (!g && !(i != null && i.length));
  }), c = () => ts || (ts = r(), ts.finally(() => {
    ts = null;
  }));
  return {
    getSuggestionSeed: (g) => C(void 0, null, function* () {
      let i = a(g);
      return i.seeds.length || (yield c()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: o,
    previousEditsInSource: Aa
  };
}, sS = 5;
function oo(e) {
  return C(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < sS);
  });
}
const aS = window.Vuex.useStore, iS = () => {
  const e = aS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), { getSuggestionSeed: o } = vh(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Go(), c = {
    id: Pt,
    type: Ye
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const l = [];
      return yield oo(() => C(void 0, null, function* () {
        const d = yield o("page");
        let p = yield re.fetchPageSuggestions(
          t.value,
          n.value,
          d || null
        );
        return p = p.filter(
          (m) => a(m)
        ), p = p.slice(0, i), l.push(...p), l.length >= i;
      })), l.forEach(
        (d) => d.suggestionProvider = c
      ), l;
    }),
    fetchSectionSuggestionsBasedOnEdits: (i) => C(void 0, null, function* () {
      const l = [];
      return yield oo(() => C(void 0, null, function* () {
        const d = yield o("section"), p = yield re.fetchSectionSuggestions(
          t.value,
          n.value,
          d || null
        );
        if (!p)
          return !1;
        let m = p.filter(
          (f) => s(f)
        );
        const h = p.filter(
          (f) => !s(f)
        );
        return m = m.slice(0, i), l.push(...m), h.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), l.length >= i;
      })), l.forEach(
        (d) => d.suggestionProvider = c
      ), l;
    })
  };
}, rS = window.Vuex.useStore, lS = () => {
  const e = rS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = {
    id: Yt,
    type: Ye
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Go();
  return { fetchSectionSuggestionsPopular: (g) => C(void 0, null, function* () {
    const i = [];
    return yield oo(() => C(void 0, null, function* () {
      const l = yield re.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let d = l.filter(
        (m) => s(m)
      );
      const p = l.filter(
        (m) => !s(m)
      );
      return d = d.slice(0, g), i.push(...d), p.forEach((m) => {
        m && !r(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.length >= g;
    })), i.forEach(
      (l) => l.suggestionProvider = o
    ), i;
  }), fetchPageSuggestionsPopular: (g) => C(void 0, null, function* () {
    const i = [];
    return yield oo(() => C(void 0, null, function* () {
      let l = yield re.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return l = l.filter(
        (d) => a(d)
      ), l = l.slice(0, g), i.push(...l), i.length >= g;
    })), i.forEach(
      (l) => l.suggestionProvider = o
    ), i;
  }) };
}, _h = window.Vue.ref, ns = "ungrouped", nd = _h({}), od = _h(!1), Gc = () => ({
  fetchPageCollectionGroups: () => C(void 0, null, function* () {
    try {
      const t = yield re.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((o, s) => o === ns ? 1 : s === ns ? -1 : o.localeCompare(s)).map((o) => [o, t[o]])
      );
      n[ns] && (n[ns] = n[ns].sort(
        (o, s) => o.name.localeCompare(s.name)
      )), nd.value = n, od.value = !0;
    } catch (t) {
      mw.log.error("Failed to fetch page collections", t);
    }
  }),
  pageCollectionGroupsFetched: od,
  pageCollectionGroups: nd
});
class Zs {
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
const cS = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', uS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', dS = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', gS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', pS = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', mS = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', hS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', fS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', wS = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', vS = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', _S = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', SS = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', yS = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', xS = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', bS = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', CS = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', kS = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', $S = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', VS = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', ES = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', Sh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', LS = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', AS = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', DS = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', TS = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', BS = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', PS = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', FS = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', MS = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', NS = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', US = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', IS = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', RS = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', zS = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', OS = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', jS = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', wc = cS, yh = uS, xh = {
  ltr: dS,
  shouldFlip: !0
}, bh = {
  ltr: gS,
  shouldFlip: !0
}, Hi = {
  ltr: pS,
  shouldFlip: !0
}, HS = mS, Ch = hS, kh = fS, qS = wS, GS = vS, XS = _S, Xo = SS, WS = yS, Xc = xS, Wc = bS, vc = CS, KS = kS, YS = {
  ltr: $S,
  shouldFlip: !0
}, JS = {
  ltr: VS,
  shouldFlip: !0
}, $h = ES, QS = {
  langCodeMap: {
    ar: Sh
  },
  default: LS
}, ZS = {
  langCodeMap: {
    ar: Sh
  },
  default: AS
}, Vh = DS, Kc = {
  ltr: TS,
  shouldFlip: !0
}, ey = BS, ty = PS, pa = {
  ltr: FS,
  shouldFlip: !0
}, Yc = {
  ltr: MS,
  shouldFlip: !0
}, ny = {
  ltr: NS,
  shouldFlip: !0
}, Eh = US, oy = IS, _c = RS, sy = zS, ay = OS, Lh = jS, iy = {
  [Pt]: Lh,
  [Yt]: $h,
  [Q]: Hi
}, ry = {
  [Q]: JS,
  [Ce]: ey
};
class Bt {
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
    return this.type === Ye ? this.id : this.type;
  }
  get icon() {
    return iy[this.provider] || null;
  }
  get expandableIcon() {
    return ry[this.provider] || this.icon;
  }
}
const os = window.Vue.computed, { topics: sd, regions: ad } = mw.loader.require(
  "ext.cx.articlefilters"
), ly = (e) => new Zs({
  id: e.groupId,
  label: e.label,
  type: Ne,
  filters: e.topics.map(
    (t) => new Bt({
      id: t.topicId,
      label: t.label,
      type: Ne
    })
  )
}), qi = () => {
  const e = ue(), { currentSuggestionFilters: t, setFilterURLParams: n } = B(), { validateFilters: o, filtersValidatorError: s } = Fc(), a = new Bt({
    id: Pt,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), r = new Bt({
    id: Yt,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), c = new Bt({
    id: Q,
    type: Ye,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: u, pageCollectionGroupsFetched: g } = Gc(), i = os(() => {
    const b = new Zs({
      id: Ye,
      type: Ye,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [a, r]
    });
    return Object.keys(u.value).length > 1 && b.filters.push(c), b;
  }), l = () => {
    const b = ie({}, u.value);
    delete b.ungrouped;
    const N = [];
    for (const T in b) {
      const I = b[T].map(
        (Y) => new Bt({
          id: Y.name,
          label: Y.name,
          type: Q
        })
      ), X = new Bt({
        id: T,
        label: T,
        type: Q,
        subFilters: I
      });
      N.push(X);
    }
    const V = (u.value.ungrouped || []).map(
      (T) => new Bt({
        id: T.name,
        label: T.name,
        type: Q
      })
    );
    return [...N, ...V];
  }, d = os(
    () => new Zs({
      id: Q,
      type: Q,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: l()
    })
  ), p = os(() => new Zs({
    id: Ce,
    type: Ce,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: ad.map(
      (b) => new Bt({
        id: b.id,
        label: b.label,
        type: Ce,
        subFilters: b.countries.map(
          (N) => new Bt({
            id: N.id,
            label: N.label,
            type: Ce
          })
        )
      })
    )
  })), m = os(() => {
    const b = [
      i.value,
      ...sd.map(ly),
      p.value
    ];
    return d.value.filters.length && b.splice(1, 0, d.value), b;
  }), h = os(
    () => [t.value.type, t.value.id].includes(
      Q
    ) && !g.value
  ), f = () => {
    if (h.value)
      return [];
    const b = w();
    return b.type === Ne || b.type === Ce || b.type === vt || b.type === Q || b.id === Q ? [b, a] : [a, r];
  }, v = (b) => {
    n(b.type, b.id);
  }, w = () => t.value.type === vt ? new Bt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : m.value.flatMap((b) => b.filters).flatMap((b) => [b, ...b.subFilters || []]).find(y), y = (b) => t.value.id === b.id;
  return {
    allFilters: m,
    getFiltersSummary: f,
    selectFilter: v,
    isFilterSelected: y,
    getArticleTopics: (b) => {
      const V = sd.flatMap((T) => T.topics).find((T) => T.topicId === b);
      return V ? V.articletopics : [];
    },
    waitingForPageCollectionsFetch: h,
    findSelectedFilter: w,
    validateURLFilterWithCollections: () => {
      if (!g.value)
        return;
      const b = Object.values(u.value).flat(), N = o(
        {
          type: t.value.type,
          id: t.value.id
        },
        b
      );
      n(N.type, N.id), s.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (b) => {
      const N = ad.find((V) => V.id === b);
      return N ? N.countries.map((V) => V.id) : [b];
    }
  };
}, cy = window.Vuex.useStore, uy = () => {
  const e = cy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Go(), { getArticleTopics: c } = qi();
  return {
    fetchPageSuggestionsByTopics: (i) => C(void 0, null, function* () {
      const l = o.value.id, d = {
        id: l,
        type: Ne
      }, p = c(l);
      let m = yield re.fetchPageSuggestionsByTopics(
        t.value,
        n.value,
        p
      );
      return m = m.filter(
        (h) => a(h)
      ), m = m.slice(0, i), m.forEach(
        (h) => h.suggestionProvider = d
      ), m;
    }),
    fetchSectionSuggestionsByTopics: (i) => C(void 0, null, function* () {
      const l = o.value.id, d = {
        id: l,
        type: Ne
      }, p = c(l), m = [];
      return yield oo(() => C(void 0, null, function* () {
        const h = yield re.fetchSectionSuggestionsByTopics(
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
        (h) => h.suggestionProvider = d
      ), m;
    })
  };
}, dy = window.Vuex.useStore, gy = () => {
  const e = dy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Go(), { getCountries: c } = qi();
  return {
    fetchPageSuggestionsByCountries: (i) => C(void 0, null, function* () {
      let l = yield re.fetchPageSuggestionsByCountries(
        t.value,
        n.value,
        c(o.value.id)
      );
      return l = l.filter(
        (d) => a(d)
      ), l = l.slice(0, i), l.forEach(
        (d) => d.suggestionProvider = o.value
      ), l;
    }),
    fetchSectionSuggestionsByCountries: (i) => C(void 0, null, function* () {
      const l = [];
      return yield oo(() => C(void 0, null, function* () {
        const d = yield re.fetchSectionSuggestionsByCountries(
          t.value,
          n.value,
          c(o.value.id)
        );
        let p = d.filter(
          (h) => s(h)
        );
        const m = d.filter(
          (h) => !s(h)
        );
        return p = p.slice(0, i), l.push(...p), m.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), l.length >= i;
      })), l.forEach(
        (d) => d.suggestionProvider = o.value
      ), l;
    })
  };
}, py = window.Vuex.useStore, my = window.Vue.computed, hy = () => {
  const e = py(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), s = my(() => {
    var i;
    return ((i = o.value) == null ? void 0 : i.type) !== Q ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: c
  } = Go();
  return {
    fetchSectionSuggestionsByCollections: () => C(void 0, null, function* () {
      const i = [], l = yield re.fetchSectionSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      let d = l.filter(
        (m) => a(m)
      );
      const p = l.filter(
        (m) => !a(m)
      );
      return i.push(...d), p.forEach((m) => {
        m && !c(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.forEach(
        (m) => m.suggestionProvider = o.value
      ), i;
    }),
    fetchPageSuggestionsByCollections: () => C(void 0, null, function* () {
      const i = [];
      let l = yield re.fetchPageSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      return l = l.filter(
        (d) => r(d)
      ), i.push(...l), i.forEach(
        (d) => d.suggestionProvider = o.value
      ), i;
    })
  };
}, fy = window.Vuex.useStore, wy = () => {
  const e = fy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Go();
  return {
    fetchPageSuggestionsBySeed: (g) => C(void 0, null, function* () {
      const i = o.value.id;
      let l = yield re.fetchPageSuggestions(
        t.value,
        n.value,
        i
      );
      return l = l.filter(
        (d) => a(d)
      ), l = l.slice(0, g), l.forEach(
        (d) => d.suggestionProvider = {
          id: i,
          type: vt
        }
      ), l;
    }),
    fetchSectionSuggestionsBySeed: (g) => C(void 0, null, function* () {
      const i = [], l = o.value.id;
      return yield oo(() => C(void 0, null, function* () {
        const d = yield re.fetchSectionSuggestions(
          t.value,
          n.value,
          l
        );
        if (!d)
          return !1;
        let p = d.filter(
          (h) => s(h)
        );
        const m = d.filter(
          (h) => !s(h)
        );
        return p = p.slice(0, g), i.push(...p), m.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), i.length >= g;
      })), i.forEach(
        (d) => d.suggestionProvider = {
          id: l,
          type: vt
        }
      ), i;
    })
  };
}, Ah = () => {
  const { currentSuggestionFilters: e } = B(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = iS(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = lS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = uy(), {
    fetchPageSuggestionsByCountries: c,
    fetchSectionSuggestionsByCountries: u
  } = gy(), {
    fetchPageSuggestionsByCollections: g,
    fetchSectionSuggestionsByCollections: i
  } = hy(), { fetchPageSuggestionsBySeed: l, fetchSectionSuggestionsBySeed: d } = wy(), p = {
    [Pt]: t,
    [Yt]: o,
    [Q]: g,
    [Ne]: a,
    [Ce]: c,
    [vt]: l
  }, m = {
    [Pt]: n,
    [Yt]: s,
    [Q]: i,
    [Ne]: r,
    [Ce]: u,
    [vt]: d
  }, h = (w) => w.type === Ye ? w.id : w.type;
  return {
    getFilterProvider: h,
    getCurrentPageSuggestionProvider: () => p[h(e.value)],
    getCurrentSectionSuggestionProvider: () => m[h(e.value)]
  };
}, vy = window.Vuex.useStore, Jc = () => {
  const e = vy(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = jc(), { sourceLanguageURLParameter: o } = B(), s = qo(), a = () => {
    const d = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - d.length % p;
  }, r = () => {
    const d = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - d.length % p;
  }, {
    getCurrentPageSuggestionProvider: c,
    getCurrentSectionSuggestionProvider: u
  } = Ah(), g = (d) => {
    try {
      const p = d.map((m) => m.sourceTitle);
      if (p.length)
        return s(o.value, p);
    } catch (p) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const d = a(), m = yield u()(
        d
      );
      m.forEach(
        (h) => e.commit("suggestions/addSectionSuggestion", h)
      ), g(m), e.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
    }),
    fetchNextPageSuggestionsSlice: () => C(void 0, null, function* () {
      e.commit("suggestions/setIsPageSuggestionsFetchPending", !1), e.commit("suggestions/increasePageSuggestionsLoadingCount");
      const d = r(), m = yield c()(
        d
      );
      m.forEach(
        (h) => e.commit("suggestions/addPageSuggestion", h)
      ), g(m), e.commit("suggestions/decreasePageSuggestionsLoadingCount");
    })
  };
}, _y = window.Vuex.useStore, Dh = () => {
  const e = _y();
  return (t) => C(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield re.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, Sy = window.Vuex.useStore, Th = () => {
  const e = Sy(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Jc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = jc(), { targetLanguageURLParameter: a } = B(), r = Dh();
  return () => C(void 0, null, function* () {
    const c = s(0), u = o(0), { maxSuggestionsPerSlice: g } = e.state.suggestions, i = c.length === g, l = u.length === g;
    i && l || (yield r(a.value), t(), n());
  });
}, yy = window.Vuex.useStore, Bh = () => {
  const e = yy(), t = qo();
  return (n, o, s) => C(void 0, null, function* () {
    let a = e.getters["suggestions/getSectionSuggestionsForArticle"](n, o, s);
    if (!a) {
      a = yield re.fetchSectionSuggestion(
        n,
        s,
        o
      );
      try {
        if (yield t(n, [s]), a)
          a.isListable = !1, e.commit("suggestions/addSectionSuggestion", a);
        else {
          const r = e.getters["mediawiki/getPage"](
            n,
            s
          );
          return new ao({
            sourceLanguage: n,
            targetLanguage: o,
            sourceTitle: s,
            langLinksCount: r.langLinksCount,
            wikidataId: r.wikidataId
          });
        }
      } catch (r) {
        throw new Error(
          `No page metadata found for title ${s} and language pair ${n}-${o}`
        );
      }
    }
    return a;
  });
}, id = window.Vue.computed, xy = window.Vuex.useStore, vn = () => {
  const e = xy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B(), s = id(
    () => e.getters["mediawiki/getLanguageTitleGroup"](
      t.value,
      o.value
    )
  ), a = id(() => s.value ? s.value.hasLanguage(n.value) : !1);
  return {
    currentLanguageTitleGroup: s,
    targetPageExists: a,
    getCurrentTitleByLanguage: (c, u) => s.value.getTitleForLanguage(c) || s.value.getTitleForLanguage(u)
  };
}, Ph = window.Vuex.useStore, { setLanguageURLParams: by } = B(), Qc = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), by(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, Fh = () => {
  const e = Ph(), t = Th();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Ae(e);
    n === o && (n = a.value, o = s.value), Qc(e, n, o), t();
  };
}, Cy = () => {
  const e = Ph(), t = Bh(), { currentLanguageTitleGroup: n, targetPageExists: o } = vn(), s = qo();
  return (a, r) => C(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u,
      setPageURLParam: g,
      clearSectionURLParameter: i
    } = B();
    a === r && (a = u.value, r = c.value);
    const l = n.value.getTitleForLanguage(a);
    Qc(e, a, r), g(l), o.value ? (i(), yield t(
      c.value,
      u.value,
      l
    )) : yield s(c.value, [l]);
  });
}, ky = window.Vuex.useStore, $y = window.Vue.ref, rd = $y(!1), Mh = () => {
  const e = ky(), {
    supportedSourceLanguageCodes: t,
    supportedTargetLanguageCodes: n,
    fetchSupportedLanguageCodes: o
  } = ua(), { sourceLanguageURLParameter: s, targetLanguageURLParameter: a } = B(), r = () => {
    const u = Z.getCurrentWikiLanguageCode(), g = (f) => t.value.includes(f), i = (f) => n.value.includes(f), l = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, d = [
      a.value,
      mw.storage.get("cxTargetLanguage"),
      u,
      l.targetLanguage
    ], p = [
      s.value,
      mw.storage.get("cxSourceLanguage"),
      l.sourceLanguage,
      u,
      l.targetLanguage
    ], m = d.find(
      (f) => i(f)
    );
    return { sourceLanguage: p.find(
      (f) => g(f) && f !== m
    ), targetLanguage: m };
  };
  return { initializeApplicationLanguages: () => C(void 0, null, function* () {
    yield o();
    const { sourceLanguage: u, targetLanguage: g } = r();
    Qc(e, u, g), rd.value = !0;
  }), applicationLanguagesInitialized: rd };
};
const Vy = window.Vue.resolveDynamicComponent, ld = window.Vue.openBlock, cd = window.Vue.createBlock, Ey = window.Vue.Transition, ss = window.Vue.withCtx, as = window.Vue.createVNode, Ly = window.Vue.resolveComponent, _r = window.Vue.unref, Ay = window.Vuex.useStore, ud = window.Vue.computed, Dy = window.Vue.onMounted, Ty = window.Vue.inject, By = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = B(), { initializeApplicationLanguages: n } = Mh();
    t(), n();
    const o = Ty("breakpoints"), s = ud(() => o.value.mobile), a = Ay(), r = ud(
      () => a.state.application.autoSavePending
    );
    return Dy(() => {
      window.addEventListener("beforeunload", (c) => {
        r.value && (c.preventDefault(), c.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (c) => {
        document.visibilityState === "visible" && Jm.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof Oo && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (c, u) => {
      const g = Ly("router-view");
      return ld(), cd(_r(Qw), { id: "contenttranslation" }, {
        default: ss(() => [
          as(_r(M), { class: "cx-container" }, {
            default: ss(() => [
              as(_r(k), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: ss(() => [
                  as(g, null, {
                    default: ss(({ Component: i, route: l }) => [
                      as(Ey, {
                        name: s.value ? l.meta.transitionName : ""
                      }, {
                        default: ss(() => [
                          (ld(), cd(Vy(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      as(vv)
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
}, Py = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, Fy = {
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
class Nh {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Io {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Nh(a);
  }
  get isMTMessage() {
    return this.type === "mt";
  }
  get isError() {
    return this.status === "error";
  }
}
const dd = (e) => {
  if (!e)
    return {};
  const t = document.createElement("div");
  t.innerHTML = e;
  const n = t.firstChild;
  return Array.from(n.getElementsByClassName("cx-segment")).reduce(
    (s, a) => Qe(ie({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class My {
  /**
   * @param {{user, source, mt, sequenceId}} unit
   * @param {{engine: null, content: string, timestamp: string}} unit.user
   * @param {{engine: null, content: string, timestamp: string}} unit.source
   * @param {{engine: string, content: string, timestamp: string}} unit.mt - current possible values for engine: "Elia"|"MinT"|"Google"|"Yandex"
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
    const t = dd((s = this.user) == null ? void 0 : s.content), n = dd((a = this.mt) == null ? void 0 : a.content);
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
class Zc extends Bc {
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
    pageRevision: c,
    status: u,
    targetTitle: g,
    targetUrl: i,
    sectionTranslations: l
  }) {
    super({
      translationId: t,
      sourceTitle: n,
      sourceLanguage: o,
      targetLanguage: s,
      startTimestamp: a,
      lastUpdatedTimestamp: r,
      pageRevision: c,
      status: u,
      targetTitle: g
    }), this.targetUrl = i, this.sectionTranslations = l;
  }
}
const Gi = mw.user.isAnon() ? void 0 : "user", Uh = (e) => {
  if (e === "assertuserfailed")
    throw new Oo();
};
function Ih(e, t = null) {
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
    return t && (n.offset = t), new mw.Api().get(n).then((s) => C(this, null, function* () {
      var c;
      const a = s.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (u) => new Ui(Qe(ie({}, u), { status: e }))
      ) : r = a.map(
        (u) => new Zc(Qe(ie({}, u), { status: e }))
      ), (c = s.continue) != null && c.offset) {
        const u = yield Ih(
          e,
          s.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function Ny(e) {
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
      (a) => new My(a)
    );
  });
}
function Uy(e, t, n, o, s) {
  return C(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== ee.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = Z.getCXServerUrl(a);
    return fetch(r, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
    }).then(
      (c) => Promise.all([c.json(), Promise.resolve(c.ok)])
    ).then(([c, u]) => {
      var i, l;
      if (!u) {
        const d = c.detail || c.type || c.title || "fetchSegmentTranslation: Unknown error";
        throw new Error(d);
      }
      return (l = (i = new RegExp("<div>(?<content>(.|\\s)*)<\\/div>").exec(c.contents)) == null ? void 0 : i.groups) == null ? void 0 : l.content;
    }).catch((c) => Promise.reject(c));
  });
}
const Iy = (e, t, n) => {
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
}, Ry = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
  sourceLanguage: a,
  targetLanguage: r,
  revision: c,
  captchaId: u,
  captchaWord: g,
  isSandbox: i,
  sectionTranslationId: l,
  existingSectionTitle: d
}) => {
  const p = {
    assert: Gi,
    action: "cxpublishsection",
    title: n,
    html: e,
    sourcetitle: t,
    sourcerevid: c,
    sourcesectiontitle: o,
    targetsectiontitle: s,
    sourcelanguage: a,
    targetlanguage: r,
    issandbox: i,
    sectiontranslationid: l,
    existingsectiontitle: d
  };
  return u && (p.captchaid = u, p.captchaword = g), new mw.Api().postWithToken("csrf", p).then((h) => {
    if (h = h.cxpublishsection, h.result === "error") {
      if (h.edit.captcha)
        return {
          publishFeedbackMessage: new Io({
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
    Uh(h);
    let v;
    return f = f || {}, f.exception ? v = f.exception.message : f.error ? v = f.error.info : v = "Unknown error", {
      publishFeedbackMessage: new Io({
        text: v,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, zy = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: r,
  units: c,
  sectionId: u,
  isSandbox: g,
  progress: i
}) => {
  const l = {
    assert: Gi,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: r,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(c),
    sectionid: u,
    issandbox: g,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", l).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    Uh(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new Io({ text: h, status: "error" });
  });
}, Oy = (e) => {
  const t = {
    assert: Gi,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, jy = () => {
  const e = {
    assert: Gi,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new Zc(n.cxcheckunreviewed.translation)
  );
}, Hy = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, qy = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, Gy = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), _t = {
  fetchTranslations: Ih,
  fetchTranslationUnits: Ny,
  fetchSegmentTranslation: Uy,
  parseTemplateWikitext: Iy,
  publishTranslation: Ry,
  saveTranslation: zy,
  deleteTranslation: Hy,
  fetchTranslatorStats: Gy,
  deleteCXTranslation: qy,
  splitTranslation: Oy,
  checkUnreviewedTranslations: jy
};
function Xy(t) {
  return C(this, arguments, function* ({ commit: e }) {
    const n = yield _t.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const Wy = {
  fetchTranslatorStats: Xy
}, Ky = {
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
}, Yy = {
  namespaced: !0,
  state: Py,
  getters: Fy,
  actions: Wy,
  mutations: Ky
}, Jy = {
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
  appendixSectionTitles: B_
}, Qy = {
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
  /**
   * This getter returns the first (by order of appearance) appendix section
   * title found inside target article page. Appendix section titles for each
   * language are stored in appendixSectionTitles state variable.
   * Such titles are "References" and similar section titles.
   * If none such section is found, it returns null
   *
   * @param {Object} state
   * @return {function(SectionSuggestion): String|null}
   */
  getFirstAppendixTitleBySectionSuggestion: (e) => (
    /**
     * @param {SectionSuggestion} sectionSuggestion
     * @return {String|null}
     */
    (t) => {
      const n = e.appendixSectionTitles[t.targetLanguage] || [];
      return (t.targetSections || []).find(
        (o) => n.includes(o)
      );
    }
  ),
  appendixTitlesExistForLanguage: (e) => (t) => {
    var n;
    return (((n = e.appendixSectionTitles) == null ? void 0 : n[t]) || []).length > 0;
  }
}, Zy = {
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
}, ex = {
  namespaced: !0,
  state: Jy,
  getters: Qy,
  actions: {},
  mutations: Zy
}, tx = {
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
}, nx = {
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
  isValidProviderForTranslation: (e, t) => (n, o, s) => t.getSupportedMTProviders(n, o).includes(s) && s !== ee.EMPTY_TEXT_PROVIDER_KEY,
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
function ox(o) {
  return C(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield so.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const sx = { fetchNearbyPages: ox }, ax = {
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
}, ix = {
  namespaced: !0,
  state: tx,
  getters: nx,
  actions: sx,
  mutations: ax
}, rx = {
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
  publishTarget: "NEW_SECTION",
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
}, lx = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, cx = {
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
    const { sourceLanguage: n, targetLanguage: o } = e, s = ee.getStorageKey(
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
   * @param state
   * @param {("NEW_SECTION"|"SANDBOX_SECTION")} target
   */
  setPublishTarget: (e, t) => {
    if (!["NEW_SECTION", "SANDBOX_SECTION"].includes(t))
      throw "Invalid publish target";
    e.publishTarget = t;
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
}, ux = {
  namespaced: !0,
  state: rx,
  getters: lx,
  actions: {},
  mutations: cx
}, dx = window.Vuex.createStore, gx = dx({
  modules: { translator: Yy, suggestions: ex, mediawiki: ix, application: ux }
});
function px() {
  return Rh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Rh() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const mx = typeof Proxy == "function", hx = "devtools-plugin:setup", fx = "plugin:settings:set";
let ro, Sc;
function wx() {
  var e;
  return ro !== void 0 || (typeof window != "undefined" && window.performance ? (ro = !0, Sc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (ro = !0, Sc = global.perf_hooks.performance) : ro = !1), ro;
}
function vx() {
  return wx() ? Sc.now() : Date.now();
}
class _x {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const r in t.settings) {
        const c = t.settings[r];
        o[r] = c.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, o);
    try {
      const r = localStorage.getItem(s), c = JSON.parse(r);
      Object.assign(a, c);
    } catch (r) {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(r) {
        try {
          localStorage.setItem(s, JSON.stringify(r));
        } catch (c) {
        }
        a = r;
      },
      now() {
        return vx();
      }
    }, n && n.on(fx, (r, c) => {
      r === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (r, c) => this.target ? this.target.on[c] : (...u) => {
        this.onQueue.push({
          method: c,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (r, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...u) => (this.targetQueue.push({
        method: c,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[c](...u)) : (...u) => new Promise((g) => {
        this.targetQueue.push({
          method: c,
          args: u,
          resolve: g
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
function Sx(e, t) {
  const n = e, o = Rh(), s = px(), a = mx && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(hx, e, t);
  else {
    const r = a ? new _x(n, s) : null;
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
const zh = window.Vue.getCurrentInstance, Ro = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Wt = window.Vue.computed, ea = window.Vue.unref, yx = window.Vue.watchEffect, Oh = window.Vue.defineComponent, xx = window.Vue.reactive, jh = window.Vue.h, Sr = window.Vue.provide, bx = window.Vue.ref, Hh = window.Vue.watch, Cx = window.Vue.shallowRef, kx = window.Vue.shallowReactive, $x = window.Vue.nextTick, fn = typeof window != "undefined";
function Vx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const J = Object.assign;
function yr(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = lt(s) ? s.map(e) : e(s);
  }
  return n;
}
const ta = () => {
}, lt = Array.isArray;
function K(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Ex = /\/$/, Lx = (e) => e.replace(Ex, "");
function xr(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const c = t.indexOf("#");
  let u = t.indexOf("?");
  return c < u && c >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, c > -1 ? c : t.length), s = e(a)), c > -1 && (o = o || t.slice(0, c), r = t.slice(c, t.length)), o = Tx(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Ax(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function gd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function pd(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && In(t.matched[o], n.matched[s]) && qh(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function In(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function qh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Dx(e[n], t[n]))
      return !1;
  return !0;
}
function Dx(e, t) {
  return lt(e) ? md(e, t) : lt(t) ? md(t, e) : e === t;
}
function md(e, t) {
  return lt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Tx(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return K(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), s = o[o.length - 1];
  (s === ".." || s === ".") && o.push("");
  let a = n.length - 1, r, c;
  for (r = 0; r < o.length; r++)
    if (c = o[r], c !== ".")
      if (c === "..")
        a > 1 && a--;
      else
        break;
  return n.slice(0, a).join("/") + "/" + o.slice(r - (r === o.length ? 1 : 0)).join("/");
}
var sa;
(function(e) {
  e.pop = "pop", e.push = "push";
})(sa || (sa = {}));
var na;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(na || (na = {}));
function Bx(e) {
  if (!e)
    if (fn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Lx(e);
}
const Px = /^[^#]+#/;
function Fx(e, t) {
  return e.replace(Px, "#") + t;
}
function Mx(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Xi = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Nx(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          K(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        K(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && K(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = Mx(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function hd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const yc = /* @__PURE__ */ new Map();
function Ux(e, t) {
  yc.set(e, t);
}
function Ix(e) {
  const t = yc.get(e);
  return yc.delete(e), t;
}
let Rx = () => location.protocol + "//" + location.host;
function Gh(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(c);
    return u[0] !== "/" && (u = "/" + u), gd(u, "");
  }
  return gd(n, e) + o + s;
}
function zx(e, t, n, o) {
  let s = [], a = [], r = null;
  const c = ({ state: d }) => {
    const p = Gh(e, location), m = n.value, h = t.value;
    let f = 0;
    if (d) {
      if (n.value = p, t.value = d, r && r === m) {
        r = null;
        return;
      }
      f = h ? d.position - h.position : 0;
    } else
      o(p);
    s.forEach((v) => {
      v(n.value, m, {
        delta: f,
        type: sa.pop,
        direction: f ? f > 0 ? na.forward : na.back : na.unknown
      });
    });
  };
  function u() {
    r = n.value;
  }
  function g(d) {
    s.push(d);
    const p = () => {
      const m = s.indexOf(d);
      m > -1 && s.splice(m, 1);
    };
    return a.push(p), p;
  }
  function i() {
    const { history: d } = window;
    d.state && d.replaceState(J({}, d.state, { scroll: Xi() }), "");
  }
  function l() {
    for (const d of a)
      d();
    a = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", i);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", i, {
    passive: !0
  }), {
    pauseListeners: u,
    listen: g,
    destroy: l
  };
}
function fd(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Xi() : null
  };
}
function Ox(e) {
  const { history: t, location: n } = window, o = {
    value: Gh(e, n)
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
  function a(u, g, i) {
    const l = e.indexOf("#"), d = l > -1 ? (n.host && document.querySelector("base") ? e : e.slice(l)) + u : Rx() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](g, "", d), s.value = g;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? K("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](d);
    }
  }
  function r(u, g) {
    const i = J({}, t.state, fd(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), g, { position: s.value.position });
    a(u, i, !0), o.value = u;
  }
  function c(u, g) {
    const i = J(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: Xi()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && K(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const l = J({}, fd(o.value, u, null), { position: i.position + 1 }, g);
    a(u, l, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: c,
    replace: r
  };
}
function jx(e) {
  e = Bx(e);
  const t = Ox(e), n = zx(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = J({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Fx.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Hx(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && K(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), jx(e);
}
function qx(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Xh(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Sn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, xc = Symbol({}.NODE_ENV !== "production" ? "navigation failure" : "");
var wd;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(wd || (wd = {}));
const Gx = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Wx(t)}" via a navigation guard.`;
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
function zo(e, t) {
  return {}.NODE_ENV !== "production" ? J(new Error(Gx[e](t)), {
    type: e,
    [xc]: !0
  }, t) : J(new Error(), {
    type: e,
    [xc]: !0
  }, t);
}
function en(e, t) {
  return e instanceof Error && xc in e && (t == null || !!(e.type & t));
}
const Xx = ["params", "query", "hash"];
function Wx(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Xx)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const vd = "[^/]+?", Kx = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Yx = /[.+*?^${}()[\]/\\]/g;
function Jx(e, t) {
  const n = J({}, Kx, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const g of e) {
    const i = g.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !g.length && (s += "/");
    for (let l = 0; l < g.length; l++) {
      const d = g[l];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (d.type === 0)
        l || (s += "/"), s += d.value.replace(Yx, "\\$&"), p += 40;
      else if (d.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: v } = d;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const w = v || vd;
        if (w !== vd) {
          p += 10;
          try {
            new RegExp(`(${w})`);
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${w}): ` + S.message);
          }
        }
        let y = h ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
        l || (y = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && g.length < 2 ? `(?:/${y})` : "/" + y), f && (y += "?"), s += y, p += 20, f && (p += -8), h && (p += -20), w === ".*" && (p += -50);
      }
      i.push(p);
    }
    o.push(i);
  }
  if (n.strict && n.end) {
    const g = o.length - 1;
    o[g][o[g].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
  const r = new RegExp(s, n.sensitive ? "" : "i");
  function c(g) {
    const i = g.match(r), l = {};
    if (!i)
      return null;
    for (let d = 1; d < i.length; d++) {
      const p = i[d] || "", m = a[d - 1];
      l[m.name] = p && m.repeatable ? p.split("/") : p;
    }
    return l;
  }
  function u(g) {
    let i = "", l = !1;
    for (const d of e) {
      (!l || !i.endsWith("/")) && (i += "/"), l = !1;
      for (const p of d)
        if (p.type === 0)
          i += p.value;
        else if (p.type === 1) {
          const { value: m, repeatable: h, optional: f } = p, v = m in g ? g[m] : "";
          if (lt(v) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = lt(v) ? v.join("/") : v;
          if (!w)
            if (f)
              d.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : l = !0);
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
    parse: c,
    stringify: u
  };
}
function Qx(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function Zx(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = Qx(o[n], s[n]);
    if (a)
      return a;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (_d(o))
      return 1;
    if (_d(s))
      return -1;
  }
  return s.length - o.length;
}
function _d(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const eb = {
  type: 0,
  value: ""
}, tb = /[a-zA-Z0-9_]/;
function nb(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[eb]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${g}": ${p}`);
  }
  let n = 0, o = n;
  const s = [];
  let a;
  function r() {
    a && s.push(a), a = [];
  }
  let c = 0, u, g = "", i = "";
  function l() {
    g && (n === 0 ? a.push({
      type: 0,
      value: g
    }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${g}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: g,
      regexp: i,
      repeatable: u === "*" || u === "+",
      optional: u === "*" || u === "?"
    })) : t("Invalid state to consume buffer"), g = "");
  }
  function d() {
    g += u;
  }
  for (; c < e.length; ) {
    if (u = e[c++], u === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (g && l(), r()) : u === ":" ? (l(), n = 1) : d();
        break;
      case 4:
        d(), n = o;
        break;
      case 1:
        u === "(" ? n = 2 : tb.test(u) ? d() : (l(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--);
        break;
      case 2:
        u === ")" ? i[i.length - 1] == "\\" ? i = i.slice(0, -1) + u : n = 3 : i += u;
        break;
      case 3:
        l(), n = 0, u !== "*" && u !== "?" && u !== "+" && c--, i = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${g}"`), l(), r(), s;
}
function ob(e, t, n) {
  const o = Jx(nb(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && K(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const s = J(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function sb(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = xd({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, l, d) {
    const p = !d, m = ab(i);
    ({}).NODE_ENV !== "production" && cb(m, l), m.aliasOf = d && d.record;
    const h = xd(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const y = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const S of y)
        f.push(J({}, m, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: d ? d.record.components : m.components,
          path: S,
          // we might be the child of an alias
          aliasOf: d ? d.record : m
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let v, w;
    for (const y of f) {
      const { path: S } = y;
      if (l && S[0] !== "/") {
        const x = l.record.path, L = x[x.length - 1] === "/" ? "" : "/";
        y.path = l.record.path + (S && L + S);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (v = ob(y, l, h), {}.NODE_ENV !== "production" && l && S[0] === "/" && ub(v, l), d ? (d.alias.push(v), {}.NODE_ENV !== "production" && lb(d, v)) : (w = w || v, w !== v && w.alias.push(v), p && i.name && !yd(v) && r(i.name)), m.children) {
        const x = m.children;
        for (let L = 0; L < x.length; L++)
          a(x[L], v, d && d.children[L]);
      }
      d = d || v, (v.record.components && Object.keys(v.record.components).length || v.record.name || v.record.redirect) && u(v);
    }
    return w ? () => {
      r(w);
    } : ta;
  }
  function r(i) {
    if (Xh(i)) {
      const l = o.get(i);
      l && (o.delete(i), n.splice(n.indexOf(l), 1), l.children.forEach(r), l.alias.forEach(r));
    } else {
      const l = n.indexOf(i);
      l > -1 && (n.splice(l, 1), i.record.name && o.delete(i.record.name), i.children.forEach(r), i.alias.forEach(r));
    }
  }
  function c() {
    return n;
  }
  function u(i) {
    let l = 0;
    for (; l < n.length && Zx(i, n[l]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[l].record.path || !Wh(i, n[l])); )
      l++;
    n.splice(l, 0, i), i.record.name && !yd(i) && o.set(i.record.name, i);
  }
  function g(i, l) {
    let d, p = {}, m, h;
    if ("name" in i && i.name) {
      if (d = o.get(i.name), !d)
        throw zo(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const w = Object.keys(i.params || {}).filter((y) => !d.keys.find((S) => S.name === y));
        w.length && K(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = d.record.name, p = J(
        // paramsFromLocation is a new object
        Sd(
          l.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          d.keys.filter((w) => !w.optional).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Sd(i.params, d.keys.map((w) => w.name))
      ), m = d.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && K(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), d = n.find((w) => w.re.test(m)), d && (p = d.parse(m), h = d.record.name);
    else {
      if (d = l.name ? o.get(l.name) : n.find((w) => w.re.test(l.path)), !d)
        throw zo(1, {
          location: i,
          currentLocation: l
        });
      h = d.record.name, p = J({}, l.params, i.params), m = d.stringify(p);
    }
    const f = [];
    let v = d;
    for (; v; )
      f.unshift(v.record), v = v.parent;
    return {
      name: h,
      path: m,
      params: p,
      matched: f,
      meta: rb(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: g, removeRoute: r, getRoutes: c, getRecordMatcher: s };
}
function Sd(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function ab(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: ib(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function ib(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function yd(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function rb(e) {
  return e.reduce((t, n) => J(t, n.meta), {});
}
function xd(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function bc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function lb(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(bc.bind(null, n)))
      return K(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(bc.bind(null, n)))
      return K(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function cb(e, t) {
  t && t.record.name && !e.name && !e.path && K(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function ub(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(bc.bind(null, n)))
      return K(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Wh(e, t) {
  return t.children.some((n) => n === e || Wh(e, n));
}
const Kh = /#/g, db = /&/g, gb = /\//g, pb = /=/g, mb = /\?/g, Yh = /\+/g, hb = /%5B/g, fb = /%5D/g, Jh = /%5E/g, wb = /%60/g, Qh = /%7B/g, vb = /%7C/g, Zh = /%7D/g, _b = /%20/g;
function eu(e) {
  return encodeURI("" + e).replace(vb, "|").replace(hb, "[").replace(fb, "]");
}
function Sb(e) {
  return eu(e).replace(Qh, "{").replace(Zh, "}").replace(Jh, "^");
}
function Cc(e) {
  return eu(e).replace(Yh, "%2B").replace(_b, "+").replace(Kh, "%23").replace(db, "%26").replace(wb, "`").replace(Qh, "{").replace(Zh, "}").replace(Jh, "^");
}
function yb(e) {
  return Cc(e).replace(pb, "%3D");
}
function xb(e) {
  return eu(e).replace(Kh, "%23").replace(mb, "%3F");
}
function bb(e) {
  return e == null ? "" : xb(e).replace(gb, "%2F");
}
function aa(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && K(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function Cb(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(Yh, " "), r = a.indexOf("="), c = aa(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : aa(a.slice(r + 1));
    if (c in t) {
      let g = t[c];
      lt(g) || (g = t[c] = [g]), g.push(u);
    } else
      t[c] = u;
  }
  return t;
}
function bd(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = yb(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (lt(o) ? o.map((a) => a && Cc(a)) : [o && Cc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function kb(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = lt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const $b = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), Cd = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Wi = Symbol({}.NODE_ENV !== "production" ? "router" : ""), ef = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), kc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function is() {
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
function Nn(e, t, n, o, s) {
  const a = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((r, c) => {
    const u = (l) => {
      l === !1 ? c(zo(4, {
        from: n,
        to: t
      })) : l instanceof Error ? c(l) : qx(l) ? c(zo(2, {
        from: t,
        to: l
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof l == "function" && a.push(l), r());
    }, g = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? Vb(u, t, n) : u);
    let i = Promise.resolve(g);
    if (e.length < 3 && (i = i.then(u)), {}.NODE_ENV !== "production" && e.length > 2) {
      const l = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof g == "object" && "then" in g)
        i = i.then((d) => u._called ? d : (K(l), Promise.reject(new Error("Invalid navigation guard"))));
      else if (g !== void 0 && !u._called) {
        K(l), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    i.catch((l) => c(l));
  });
}
function Vb(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && K(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function br(e, t, n, o) {
  const s = [];
  for (const a of e) {
    ({}).NODE_ENV !== "production" && !a.components && !a.children.length && K(`Record with path "${a.path}" is either missing a "component(s)" or "children" property.`);
    for (const r in a.components) {
      let c = a.components[r];
      if ({}.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw K(`Component "${r}" in record with path "${a.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          K(`Component "${r}" in record with path "${a.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const u = c;
          c = () => u;
        } else
          c.__asyncLoader && // warn only once per component
          !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, K(`Component "${r}" in record with path "${a.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !a.instances[r]))
        if (Eb(c)) {
          const g = (c.__vccOpts || c)[t];
          g && s.push(Nn(g, n, o, a, r));
        } else {
          let u = c();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (K(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((g) => {
            if (!g)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Vx(g) ? g.default : g;
            a.components[r] = i;
            const d = (i.__vccOpts || i)[t];
            return d && Nn(d, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function Eb(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function kd(e) {
  const t = Ro(Wi), n = Ro(ef), o = Wt(() => t.resolve(ea(e.to))), s = Wt(() => {
    const { matched: u } = o.value, { length: g } = u, i = u[g - 1], l = n.matched;
    if (!i || !l.length)
      return -1;
    const d = l.findIndex(In.bind(null, i));
    if (d > -1)
      return d;
    const p = $d(u[g - 2]);
    return (
      // we are dealing with nested routes
      g > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      $d(i) === p && // avoid comparing the child with its parent
      l[l.length - 1].path !== p ? l.findIndex(In.bind(null, u[g - 2])) : d
    );
  }), a = Wt(() => s.value > -1 && Tb(n.params, o.value.params)), r = Wt(() => s.value > -1 && s.value === n.matched.length - 1 && qh(n.params, o.value.params));
  function c(u = {}) {
    return Db(u) ? t[ea(e.replace) ? "replace" : "push"](
      ea(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ta) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && fn) {
    const u = zh();
    if (u) {
      const g = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(g), yx(() => {
        g.route = o.value, g.isActive = a.value, g.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: Wt(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: c
  };
}
const Lb = /* @__PURE__ */ Oh({
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
  useLink: kd,
  setup(e, { slots: t }) {
    const n = xx(kd(e)), { options: o } = Ro(Wi), s = Wt(() => ({
      [Vd(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Vd(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const a = t.default && t.default(n);
      return e.custom ? a : jh("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), Ab = Lb;
function Db(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Tb(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!lt(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function $d(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Vd = (e, t, n) => e != null ? e : t != null ? t : n, Bb = /* @__PURE__ */ Oh({
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
    ({}).NODE_ENV !== "production" && Fb();
    const o = Ro(kc), s = Wt(() => e.route || o.value), a = Ro(Cd, 0), r = Wt(() => {
      let g = ea(a);
      const { matched: i } = s.value;
      let l;
      for (; (l = i[g]) && !l.components; )
        g++;
      return g;
    }), c = Wt(() => s.value.matched[r.value]);
    Sr(Cd, Wt(() => r.value + 1)), Sr($b, c), Sr(kc, s);
    const u = bx();
    return Hh(() => [u.value, c.value, e.name], ([g, i, l], [d, p, m]) => {
      i && (i.instances[l] = g, p && p !== i && g && g === d && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), g && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !In(i, p) || !d) && (i.enterCallbacks[l] || []).forEach((h) => h(g));
    }, { flush: "post" }), () => {
      const g = s.value, i = e.name, l = c.value, d = l && l.components[i];
      if (!d)
        return Ed(n.default, { Component: d, route: g });
      const p = l.props[i], m = p ? p === !0 ? g.params : typeof p == "function" ? p(g) : p : null, f = jh(d, J({}, m, t, {
        onVnodeUnmounted: (v) => {
          v.component.isUnmounted && (l.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && fn && f.ref) {
        const v = {
          depth: r.value,
          name: l.name,
          path: l.path,
          meta: l.meta
        };
        (lt(f.ref) ? f.ref.map((y) => y.i) : [f.ref.i]).forEach((y) => {
          y.__vrv_devtools = v;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Ed(n.default, { Component: f, route: g }) || f
      );
    };
  }
});
function Ed(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Pb = Bb;
function Fb() {
  const e = zh(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    K(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function rs(e, t) {
  const n = J({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => Hb(o, ["instances", "children", "aliasOf"]))
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
function Da(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let Mb = 0;
function Nb(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = Mb++;
  Sx({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((i, l) => {
      i.instanceData && i.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: rs(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: l }) => {
      if (l.__vrv_devtools) {
        const d = l.__vrv_devtools;
        i.tags.push({
          label: (d.name ? `${d.name.toString()}: ` : "") + d.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: tf
        });
      }
      lt(l.__vrl_devtools) && (l.__devtoolsApi = s, l.__vrl_devtools.forEach((d) => {
        let p = sf, m = "";
        d.isExactActive ? (p = of, m = "This is exactly active") : d.isActive && (p = nf, m = "This link is active"), i.tags.push({
          label: d.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), Hh(t.currentRoute, () => {
      u(), s.notifyComponentUpdate(), s.sendInspectorTree(c), s.sendInspectorState(c);
    });
    const a = "router:navigations:" + o;
    s.addTimelineLayer({
      id: a,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((i, l) => {
      s.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: l.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: i },
          groupId: l.meta.__navigationId
        }
      });
    });
    let r = 0;
    t.beforeEach((i, l) => {
      const d = {
        guard: Da("beforeEach"),
        from: rs(l, "Current Location during this navigation"),
        to: rs(i, "Target location")
      };
      Object.defineProperty(i.meta, "__navigationId", {
        value: r++
      }), s.addTimelineEvent({
        layerId: a,
        event: {
          time: s.now(),
          title: "Start of navigation",
          subtitle: i.fullPath,
          data: d,
          groupId: i.meta.__navigationId
        }
      });
    }), t.afterEach((i, l, d) => {
      const p = {
        guard: Da("afterEach")
      };
      d ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: d ? d.message : "",
          tooltip: "Navigation Failure",
          value: d
        }
      }, p.status = Da("❌")) : p.status = Da("✅"), p.from = rs(l, "Current Location during this navigation"), p.to = rs(i, "Target location"), s.addTimelineEvent({
        layerId: a,
        event: {
          title: "End of navigation",
          subtitle: i.fullPath,
          time: s.now(),
          data: p,
          logType: d ? "warning" : "default",
          groupId: i.meta.__navigationId
        }
      });
    });
    const c = "router-inspector:" + o;
    s.addInspector({
      id: c,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function u() {
      if (!g)
        return;
      const i = g;
      let l = n.getRoutes().filter((d) => !d.parent);
      l.forEach(lf), i.filter && (l = l.filter((d) => (
        // save matches state based on the payload
        $c(d, i.filter.toLowerCase())
      ))), l.forEach((d) => rf(d, t.currentRoute.value)), i.rootNodes = l.map(af);
    }
    let g;
    s.on.getInspectorTree((i) => {
      g = i, i.app === e && i.inspectorId === c && u();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === c) {
        const d = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        d && (i.state = {
          options: Ib(d)
        });
      }
    }), s.sendInspectorTree(c), s.sendInspectorState(c);
  });
}
function Ub(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Ib(e) {
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
        display: e.keys.map((o) => `${o.name}${Ub(o)}`).join(" "),
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
const tf = 15485081, nf = 2450411, of = 8702998, Rb = 2282478, sf = 16486972, zb = 6710886;
function af(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: Rb
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: sf
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: tf
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: of
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: nf
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: zb
  });
  let o = n.__vd_id;
  return o == null && (o = String(Ob++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(af)
  };
}
let Ob = 0;
const jb = /^\/(.*)\/([a-z]*)$/;
function rf(e, t) {
  const n = t.matched.length && In(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => In(o, e.record))), e.children.forEach((o) => rf(o, t));
}
function lf(e) {
  e.__vd_match = !1, e.children.forEach(lf);
}
function $c(e, t) {
  const n = String(e.re).match(jb);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => $c(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = aa(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => $c(r, t));
}
function Hb(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function qb(e) {
  const t = sb(e.routes, e), n = e.parseQuery || Cb, o = e.stringifyQuery || bd, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = is(), r = is(), c = is(), u = Cx(Sn);
  let g = Sn;
  fn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = yr.bind(null, (_) => "" + _), l = yr.bind(null, bb), d = (
    // @ts-expect-error: intentionally avoid the type check
    yr.bind(null, aa)
  );
  function p(_, E) {
    let D, F;
    return Xh(_) ? (D = t.getRecordMatcher(_), F = E) : F = _, t.addRoute(F, D);
  }
  function m(_) {
    const E = t.getRecordMatcher(_);
    E ? t.removeRoute(E) : {}.NODE_ENV !== "production" && K(`Cannot remove non-existent route "${String(_)}"`);
  }
  function h() {
    return t.getRoutes().map((_) => _.record);
  }
  function f(_) {
    return !!t.getRecordMatcher(_);
  }
  function v(_, E) {
    if (E = J({}, E || u.value), typeof _ == "string") {
      const O = xr(n, _, E.path), ne = t.resolve({ path: O.path }, E), ze = s.createHref(O.fullPath);
      return {}.NODE_ENV !== "production" && (ze.startsWith("//") ? K(`Location "${_}" resolved to "${ze}". A resolved location cannot start with multiple slashes.`) : ne.matched.length || K(`No match found for location with path "${_}"`)), J(O, ne, {
        params: d(ne.params),
        hash: aa(O.hash),
        redirectedFrom: void 0,
        href: ze
      });
    }
    let D;
    if ("path" in _)
      ({}).NODE_ENV !== "production" && "params" in _ && !("name" in _) && // @ts-expect-error: the type is never
      Object.keys(_.params).length && K(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), D = J({}, _, {
        path: xr(n, _.path, E.path).path
      });
    else {
      const O = J({}, _.params);
      for (const ne in O)
        O[ne] == null && delete O[ne];
      D = J({}, _, {
        params: l(O)
      }), E.params = l(E.params);
    }
    const F = t.resolve(D, E), W = _.hash || "";
    ({}).NODE_ENV !== "production" && W && !W.startsWith("#") && K(`A \`hash\` should always start with the character "#". Replace "${W}" with "#${W}".`), F.params = i(d(F.params));
    const ae = Ax(o, J({}, _, {
      hash: Sb(W),
      path: F.path
    })), z = s.createHref(ae);
    return {}.NODE_ENV !== "production" && (z.startsWith("//") ? K(`Location "${_}" resolved to "${z}". A resolved location cannot start with multiple slashes.`) : F.matched.length || K(`No match found for location with path "${"path" in _ ? _.path : _}"`)), J({
      fullPath: ae,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: W,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === bd ? kb(_.query) : _.query || {}
      )
    }, F, {
      redirectedFrom: void 0,
      href: z
    });
  }
  function w(_) {
    return typeof _ == "string" ? xr(n, _, u.value.path) : J({}, _);
  }
  function y(_, E) {
    if (g !== _)
      return zo(8, {
        from: E,
        to: _
      });
  }
  function S(_) {
    return b(_);
  }
  function x(_) {
    return S(J(w(_), { replace: !0 }));
  }
  function L(_) {
    const E = _.matched[_.matched.length - 1];
    if (E && E.redirect) {
      const { redirect: D } = E;
      let F = typeof D == "function" ? D(_) : D;
      if (typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = w(F) : (
        // force empty params
        { path: F }
      ), F.params = {}), {}.NODE_ENV !== "production" && !("path" in F) && !("name" in F))
        throw K(`Invalid redirect found:
${JSON.stringify(F, null, 2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return J({
        query: _.query,
        hash: _.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in F ? {} : _.params
      }, F);
    }
  }
  function b(_, E) {
    const D = g = v(_), F = u.value, W = _.state, ae = _.force, z = _.replace === !0, O = L(D);
    if (O)
      return b(
        J(w(O), {
          state: typeof O == "object" ? J({}, W, O.state) : W,
          force: ae,
          replace: z
        }),
        // keep original redirectedFrom if it exists
        E || D
      );
    const ne = D;
    ne.redirectedFrom = E;
    let ze;
    return !ae && pd(o, F, D) && (ze = zo(16, { to: ne, from: F }), q(
      F,
      F,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (ze ? Promise.resolve(ze) : T(ne, F)).catch((pe) => en(pe) ? (
      // navigation redirects still mark the router as ready
      en(
        pe,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? pe : U(pe)
    ) : (
      // reject any unknown error
      ye(pe, ne, F)
    )).then((pe) => {
      if (pe) {
        if (en(
          pe,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          pd(o, v(pe.to), ne) && // and we have done it a couple of times
          E && // @ts-expect-error: added only in dev
          (E._count = E._count ? (
            // @ts-expect-error
            E._count + 1
          ) : 1) > 30 ? (K(`Detected a possibly infinite redirection in a navigation guard when going from "${F.fullPath}" to "${ne.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : b(
            // keep options
            J({
              // preserve an existing replacement but allow the redirect to override it
              replace: z
            }, w(pe.to), {
              state: typeof pe.to == "object" ? J({}, W, pe.to.state) : W,
              force: ae
            }),
            // preserve the original redirectedFrom if any
            E || ne
          );
      } else
        pe = X(ne, F, !0, z, W);
      return I(ne, F, pe), pe;
    });
  }
  function N(_, E) {
    const D = y(_, E);
    return D ? Promise.reject(D) : Promise.resolve();
  }
  function V(_) {
    const E = xe.values().next().value;
    return E && typeof E.runWithContext == "function" ? E.runWithContext(_) : _();
  }
  function T(_, E) {
    let D;
    const [F, W, ae] = Gb(_, E);
    D = br(F.reverse(), "beforeRouteLeave", _, E);
    for (const O of F)
      O.leaveGuards.forEach((ne) => {
        D.push(Nn(ne, _, E));
      });
    const z = N.bind(null, _, E);
    return D.push(z), H(D).then(() => {
      D = [];
      for (const O of a.list())
        D.push(Nn(O, _, E));
      return D.push(z), H(D);
    }).then(() => {
      D = br(W, "beforeRouteUpdate", _, E);
      for (const O of W)
        O.updateGuards.forEach((ne) => {
          D.push(Nn(ne, _, E));
        });
      return D.push(z), H(D);
    }).then(() => {
      D = [];
      for (const O of ae)
        if (O.beforeEnter)
          if (lt(O.beforeEnter))
            for (const ne of O.beforeEnter)
              D.push(Nn(ne, _, E));
          else
            D.push(Nn(O.beforeEnter, _, E));
      return D.push(z), H(D);
    }).then(() => (_.matched.forEach((O) => O.enterCallbacks = {}), D = br(ae, "beforeRouteEnter", _, E), D.push(z), H(D))).then(() => {
      D = [];
      for (const O of r.list())
        D.push(Nn(O, _, E));
      return D.push(z), H(D);
    }).catch((O) => en(
      O,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? O : Promise.reject(O));
  }
  function I(_, E, D) {
    c.list().forEach((F) => V(() => F(_, E, D)));
  }
  function X(_, E, D, F, W) {
    const ae = y(_, E);
    if (ae)
      return ae;
    const z = E === Sn, O = fn ? history.state : {};
    D && (F || z ? s.replace(_.fullPath, J({
      scroll: z && O && O.scroll
    }, W)) : s.push(_.fullPath, W)), u.value = _, q(_, E, D, z), U();
  }
  let Y;
  function ke() {
    Y || (Y = s.listen((_, E, D) => {
      if (!P.listening)
        return;
      const F = v(_), W = L(F);
      if (W) {
        b(J(W, { replace: !0 }), F).catch(ta);
        return;
      }
      g = F;
      const ae = u.value;
      fn && Ux(hd(ae.fullPath, D.delta), Xi()), T(F, ae).catch((z) => en(
        z,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? z : en(
        z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (b(
        z.to,
        F
        // avoid an uncaught rejection, let push call triggerError
      ).then((O) => {
        en(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !D.delta && D.type === sa.pop && s.go(-1, !1);
      }).catch(ta), Promise.reject()) : (D.delta && s.go(-D.delta, !1), ye(z, F, ae))).then((z) => {
        z = z || X(
          // after navigation, all matched components are resolved
          F,
          ae,
          !1
        ), z && (D.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !en(
          z,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-D.delta, !1) : D.type === sa.pop && en(
          z,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), I(F, ae, z);
      }).catch(ta);
    }));
  }
  let Se = is(), Xe = is(), Re;
  function ye(_, E, D) {
    U(_);
    const F = Xe.list();
    return F.length ? F.forEach((W) => W(_, E, D)) : ({}.NODE_ENV !== "production" && K("uncaught error during route navigation:"), console.error(_)), Promise.reject(_);
  }
  function De() {
    return Re && u.value !== Sn ? Promise.resolve() : new Promise((_, E) => {
      Se.add([_, E]);
    });
  }
  function U(_) {
    return Re || (Re = !_, ke(), Se.list().forEach(([E, D]) => _ ? D(_) : E()), Se.reset()), _;
  }
  function q(_, E, D, F) {
    const { scrollBehavior: W } = e;
    if (!fn || !W)
      return Promise.resolve();
    const ae = !D && Ix(hd(_.fullPath, 0)) || (F || !D) && history.state && history.state.scroll || null;
    return $x().then(() => W(_, E, ae)).then((z) => z && Nx(z)).catch((z) => ye(z, _, E));
  }
  const G = (_) => s.go(_);
  let se;
  const xe = /* @__PURE__ */ new Set(), P = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: v,
    options: e,
    push: S,
    replace: x,
    go: G,
    back: () => G(-1),
    forward: () => G(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: c.add,
    onError: Xe.add,
    isReady: De,
    install(_) {
      const E = this;
      _.component("RouterLink", Ab), _.component("RouterView", Pb), _.config.globalProperties.$router = E, Object.defineProperty(_.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ea(u)
      }), fn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !se && u.value === Sn && (se = !0, S(s.location).catch((W) => {
        ({}).NODE_ENV !== "production" && K("Unexpected error when starting the router:", W);
      }));
      const D = {};
      for (const W in Sn)
        Object.defineProperty(D, W, {
          get: () => u.value[W],
          enumerable: !0
        });
      _.provide(Wi, E), _.provide(ef, kx(D)), _.provide(kc, u);
      const F = _.unmount;
      xe.add(_), _.unmount = function() {
        xe.delete(_), xe.size < 1 && (g = Sn, Y && Y(), Y = null, u.value = Sn, se = !1, Re = !1), F();
      }, {}.NODE_ENV !== "production" && fn && Nb(_, E, t);
    }
  };
  function H(_) {
    return _.reduce((E, D) => E.then(() => V(D)), Promise.resolve());
  }
  return P;
}
function Gb(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const c = t.matched[r];
    c && (e.matched.find((g) => In(g, c)) ? o.push(c) : n.push(c));
    const u = e.matched[r];
    u && (t.matched.find((g) => In(g, u)) || s.push(u));
  }
  return [n, o, s];
}
function Ge() {
  return Ro(Wi);
}
window.Vue.computed;
window.Vue.unref;
window.Vue.resolveDirective;
window.Vue.createElementVNode;
window.Vue.withDirectives;
window.Vue.withCtx;
window.Vue.openBlock;
window.Vue.createBlock;
window.Codex.CdxMessage;
const Xb = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), c = new Date(Date.UTC(t, n, o, s, a, r)), g = (/* @__PURE__ */ new Date()).getTime() - c.getTime();
  return Math.round(g / (1e3 * 3600 * 24));
}, Wb = (e) => {
  const t = Xb(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const yt = window.Vue.unref, lo = window.Vue.createVNode, tn = window.Vue.createElementVNode, Ld = window.Vue.renderSlot, Ad = window.Vue.withModifiers, Cr = window.Vue.toDisplayString, kr = window.Vue.withCtx, Kb = window.Vue.openBlock, Yb = window.Vue.createElementBlock, Jb = window.Vue.createCommentVNode, Qb = { class: "col shrink pe-4" }, Zb = { class: "col" }, eC = { class: "cx-translation__details column justify-between ma-0" }, tC = { class: "row ma-0" }, nC = { class: "col grow" }, oC = { class: "col shrink ps-2" }, sC = ["dir", "textContent"], aC = ["dir", "textContent"], iC = ["textContent"], rC = window.Vuex.useStore, lC = window.Vue.computed, cf = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Bc,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = rC(), s = (c, u) => {
      const g = o.getters["mediawiki/getPage"](c, u);
      return g == null ? void 0 : g.thumbnail;
    }, a = ue(), r = lC(() => {
      const c = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = Wb(n.translation.startTimestamp);
      return a.i18n(
        c[u.postfix],
        u.value
      );
    });
    return (c, u) => e.translation ? (Kb(), Yb("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = Ad((g) => c.$emit("click"), ["stop"]))
    }, [
      tn("div", Qb, [
        lo(yt(Tc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      tn("div", Zb, [
        tn("div", eC, [
          tn("div", tC, [
            tn("div", nC, [
              Ld(c.$slots, "title")
            ]),
            tn("div", oC, [
              lo(yt(qe), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Ad((g) => c.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Ld(c.$slots, "mid-content"),
          lo(yt(M), { class: "cx-translation__footer ma-0" }, {
            default: kr(() => [
              lo(yt(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: kr(() => [
                  tn("span", {
                    class: "mw-ui-autonym",
                    dir: yt(R.getDir)(e.translation.sourceLanguage),
                    textContent: Cr(yt(R.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, sC),
                  lo(yt(qe), {
                    icon: yt(C0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  tn("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: yt(R.getDir)(e.translation.targetLanguage),
                    textContent: Cr(yt(R.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, aC)
                ]),
                _: 1
              }),
              lo(yt(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: kr(() => [
                  tn("span", {
                    textContent: Cr(r.value)
                  }, null, 8, iC)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : Jb("", !0);
  }
};
const ls = window.Vue.unref, Dd = window.Vue.toDisplayString, cC = window.Vue.normalizeClass, uC = window.Vue.createElementVNode, $r = window.Vue.openBlock, dC = window.Vue.createElementBlock, Td = window.Vue.createCommentVNode, Bd = window.Vue.createVNode, Ta = window.Vue.withCtx, Pd = window.Vue.createBlock, gC = ["lang", "textContent"], pC = ["lang", "textContent"], mC = window.Vue.computed, hC = window.Vue.inject, fC = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Ui,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = hC("colors").gray200, s = mC(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = Ge(), { setTranslationURLParams: r } = B(), c = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, g) => ($r(), Pd(cf, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": ls(Gm),
      onActionIconClicked: g[0] || (g[0] = (i) => u.$emit("delete-translation")),
      onClick: c
    }, {
      title: Ta(() => [
        uC("h5", {
          class: cC(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Dd(e.translation.sourceTitle)
        }, null, 10, gC),
        e.translation.isLeadSectionTranslation ? Td("", !0) : ($r(), dC("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Dd(e.translation.sourceSectionTitle)
        }, null, 8, pC))
      ]),
      "mid-content": Ta(() => [
        e.translation.progress ? ($r(), Pd(ls(M), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ta(() => [
            Bd(ls(k), null, {
              default: Ta(() => [
                Bd(ls(Ym), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: ls(o)
                }, null, 8, ["value", "background"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Td("", !0)
      ]),
      _: 1
    }, 8, ["translation", "action-icon"]));
  }
}, wC = window.Vuex.useStore, uf = [], vC = (e, t, n) => uf.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), _C = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  uf.push(o);
}, SC = () => {
  const e = wC();
  return (t, n, o) => C(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !vC(t, n, o) && (s = yield re.fetchSectionSuggestion(
      t,
      o,
      n
    ), _C(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, df = "cx-translation-session-position-", gf = () => df + mw.user.sessionId(), yC = () => {
  const e = parseInt(
    mw.storage.get(gf())
  );
  return isNaN(e) ? 0 : e;
}, xC = function(e) {
  const t = gf();
  mw.storage.set(t, e);
}, bC = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(df)).forEach((e) => mw.storage.remove(e));
}, CC = () => {
  const e = yC();
  return e % 10 === 0 && bC(), xC(e + 1), e;
};
let Vc = null;
function kC(e) {
  if (Vc)
    return Promise.resolve(Vc);
  const t = "https://en.wikipedia.org/w/api.php", n = new URLSearchParams({
    action: "query",
    meta: "globaluserinfo",
    guiuser: e,
    guiprop: "editcount",
    formatversion: 2,
    origin: "*",
    format: "json"
  });
  return fetch(`${t}?${n}`).then((o) => o.json()).then((o) => o.query.globaluserinfo.editcount).catch((o) => {
    mw.log.error("Error while fetching global edit count for user. ", o);
  });
}
function $C(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function VC(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), o = `cx_sx_${t}_${e.access_method}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), c = {
    $schema: "/analytics/mediawiki/content_translation_event/1.11.0",
    wiki_db: n,
    user_name: r,
    web_session_id: t,
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: CC()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, c, e))
  ) : kC(r).then((u) => {
    Vc = u, mw.eventLog.submit(
      s,
      Object.assign({}, c, e, {
        user_global_edit_count: u,
        user_global_edit_count_bucket: $C(u)
      })
    );
  });
}
const ct = () => (e) => (e.access_method || (e.access_method = jo ? "desktop" : "mobile web"), VC(e)), pf = window.Vue.ref, mf = pf(null), Ec = pf(null), EC = (e) => {
  mf.value = e;
}, LC = (e) => {
  Ec.value = e;
}, Ki = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = B(), s = ct();
  return {
    logDashboardTranslationStartEvent: () => {
      const r = {
        event_type: "dashboard_translation_start",
        event_source: mf.value,
        translation_source_language: e.value,
        translation_target_language: t.value,
        translation_source_title: n.value
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
      return Ec.value && (r.event_context = Ec.value), o.value ? (r.translation_source_section = o.value, r.translation_type = "section") : r.translation_type = "article", s(r);
    },
    setStartTranslationEventSource: EC,
    setStartTranslationEventContext: LC
  };
}, ma = () => {
  const e = Ge(), t = Bh(), { setTranslationURLParams: n } = B(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = Ki();
  return (a, r, c, u, g = null, i = !0) => C(void 0, null, function* () {
    const l = yield t(
      r,
      c,
      a
    );
    l && (n(l), o(u), s(g), i && e.push({
      name: "sx-translation-confirmer"
    }));
  });
};
const Ba = window.Vue.withModifiers, Vr = window.Vue.toDisplayString, Er = window.Vue.createElementVNode, dt = window.Vue.unref, Pa = window.Vue.openBlock, Fd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const yn = window.Vue.createVNode, jn = window.Vue.withCtx, Md = window.Vue.createElementBlock, AC = ["lang", "href", "textContent"], DC = {
  key: 1,
  class: "flex"
}, TC = { key: 2 }, Nd = window.Vue.computed, Ud = window.Vue.ref, Lr = window.Codex.CdxButton, Ar = window.Codex.CdxIcon, BC = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Zc,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Ud(!0), o = Ud(null), s = Nd(() => {
      var l;
      return (l = o.value) == null ? void 0 : l.missingSections;
    }), a = Nd(
      () => s.value && Object.keys(s.value)[0]
    );
    SC()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((l) => o.value = l).catch((l) => console.log(l)).finally(() => n.value = !1);
    const { setSectionURLParam: c } = B(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, g = ma(), i = (l) => {
      g(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), l && c(l);
    };
    return (l, d) => (Pa(), Fd(cf, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: jn(() => [
        Er("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: d[0] || (d[0] = Ba(() => {
          }, ["stop"])),
          textContent: Vr(e.translation.sourceTitle)
        }, null, 8, AC)
      ]),
      "mid-content": jn(() => [
        yn(dt(M), { class: "ma-0" }, {
          default: jn(() => [
            yn(dt(k), null, {
              default: jn(() => [
                n.value ? (Pa(), Fd(dt(rt), { key: 0 })) : s.value ? (Pa(), Md("div", DC, [
                  yn(dt(Lr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: d[1] || (d[1] = Ba((p) => i(a.value), ["stop"]))
                  }, {
                    default: jn(() => [
                      yn(dt(Ar), {
                        class: "me-1",
                        icon: dt(wc)
                      }, null, 8, ["icon"]),
                      Er("span", null, Vr(a.value), 1)
                    ]),
                    _: 1
                  }),
                  yn(dt(Lr), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": l.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: d[2] || (d[2] = Ba((p) => i(null), ["stop"]))
                  }, {
                    default: jn(() => [
                      yn(dt(Ar), { icon: dt(Wc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (Pa(), Md("div", TC, [
                  yn(dt(Lr), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: d[3] || (d[3] = Ba((p) => i(null), ["stop"]))
                  }, {
                    default: jn(() => [
                      yn(dt(Ar), {
                        class: "me-1",
                        icon: dt(wc)
                      }, null, 8, ["icon"]),
                      Er("span", null, Vr(l.$i18n("sx-published-translation-new-translation-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]))
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
}, PC = window.Vuex.useStore, FC = () => {
  const { commit: e } = PC(), t = ct();
  return (n) => C(void 0, null, function* () {
    n.isArticleTranslation ? (yield _t.deleteCXTranslation(
      n
    )) && e("translator/removeCXTranslation", n.translationId) : (yield _t.deleteTranslation(
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
const MC = window.Vue.resolveDirective, Dr = window.Vue.createElementVNode, NC = window.Vue.withDirectives, Tr = window.Vue.unref, Id = window.Vue.createVNode, Rd = window.Vue.withCtx, UC = window.Vue.openBlock, IC = window.Vue.createBlock, RC = { class: "pa-4" }, zC = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, OC = {
  __name: "SXConfirmTranslationDeletionDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    },
    translation: {
      type: Ui,
      default: null
    }
  },
  emits: [
    "update:modelValue",
    "continue-translation",
    "discard-translation"
  ],
  setup(e, { emit: t }) {
    const n = e, o = t, s = () => o("update:modelValue", !1), a = FC(), r = () => {
      a(n.translation), s();
    };
    return (c, u) => {
      const g = MC("i18n");
      return UC(), IC(Tr(St), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Rd(() => [
          Dr("div", zC, [
            Id(Tr(Me), {
              class: "grow py-3",
              large: "",
              label: c.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Id(Tr(Me), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: c.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Rd(() => [
          Dr("div", RC, [
            NC(Dr("span", null, null, 512), [
              [g, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function jC(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield HC(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function zd(e, t, n) {
  return C(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(R.sortByAutonym) : (yield jC(e, t, n)).sort(R.sortByAutonym);
  });
}
function HC(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function qC() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function GC(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const XC = window.Vue.computed;
function WC(e, t) {
  const n = XC(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = R.getAutonym(t.value[s]);
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
const Br = window.Vue.ref, Pr = window.Vue.watch, KC = window.Vue.computed;
function hf(e, t, n) {
  const o = Br(""), s = Br(-1), a = Br(null), r = () => {
    s.value++, s.value >= c.value.length && (s.value = 0);
  }, c = KC(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Pr(e, () => {
    s.value = -1;
  }), Pr(t, () => {
    t.value && c.value.length > 0 && (s.value = 0);
  }), Pr(s, () => C(this, null, function* () {
    var g;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = c.value[s.value], (g = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || g.scrollIntoView(!1);
  })), { next: r, prev: u, keyboardNavigationContainer: a, selectedItem: o };
}
function tu(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, c = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(c, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const Fa = window.Vue.renderSlot, $e = window.Vue.unref, YC = window.Vue.isRef, Od = window.Vue.createVNode, cs = window.Vue.withModifiers, us = window.Vue.withKeys, xn = window.Vue.createElementVNode, JC = window.Vue.resolveDirective, Ma = window.Vue.withDirectives, Fr = window.Vue.renderList, Mr = window.Vue.Fragment, nn = window.Vue.openBlock, on = window.Vue.createElementBlock, jd = window.Vue.toDisplayString, Na = window.Vue.normalizeClass, Nr = window.Vue.createCommentVNode, QC = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, ZC = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, ek = { class: "results px-3 pt-4" }, tk = { class: "results-header ps-8 pb-2" }, nk = { class: "results-languages--suggestions pa-0 ma-0" }, ok = ["lang", "dir", "aria-selected", "onClick", "textContent"], sk = { class: "results px-3 pt-4" }, ak = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, ik = ["lang", "dir", "aria-selected", "onClick", "textContent"], rk = ["aria-selected"], lk = { class: "no-results px-3 py-4" }, ck = { class: "ps-8" }, Ua = window.Vue.ref, uk = window.Vue.watch, dk = window.Vue.onMounted, Hd = window.Vue.computed, ff = {
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
      default: qC
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Ua(null), a = Ua(""), r = Ua([]), c = Ua(n.suggestions), u = Hd(
      () => GC(r.value)
    ), g = Hd(() => {
      const S = r.value.length;
      return S < 10 ? "few-results" : S < 30 ? "some-results" : "many-results";
    }), i = (S) => o("select", S), l = () => o("close"), { autocompletion: d, onTabSelect: p } = WC(
      a,
      r
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: v } = hf(a, r, c), w = () => {
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
    return uk(a, tu(() => C(this, null, function* () {
      r.value = yield zd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), dk(() => C(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield zd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, x) => {
      const L = JC("i18n");
      return nn(), on("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        Fa(S.$slots, "search", {}, () => [
          xn("div", QC, [
            Od($e(fc), {
              value: $e(d),
              "onUpdate:value": x[0] || (x[0] = (b) => YC(d) ? d.value = b : null),
              icon: $e(ku),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Od($e(fc), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": x[1] || (x[1] = (b) => a.value = b),
              class: "mw-ui-language-selector__search pa-4",
              icon: $e(ku),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                us(cs(w, ["prevent"]), ["enter"]),
                us(cs($e(m), ["stop", "prevent"]), ["down"]),
                us(cs($e(h), ["stop", "prevent"]), ["up"]),
                us(cs(l, ["prevent"]), ["esc"]),
                us(cs($e(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        xn("section", ZC, [
          e.suggestions.length && !a.value ? Fa(S.$slots, "suggestions", { key: 0 }, () => [
            xn("section", ek, [
              Ma(xn("p", tk, null, 512), [
                [L, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              xn("ul", nk, [
                (nn(!0), on(Mr, null, Fr(e.suggestions, (b) => (nn(), on("li", {
                  key: b,
                  class: Na(["language ma-0", { "language--selected": b === $e(v) }]),
                  lang: b,
                  dir: $e(R.getDir)(b),
                  "aria-selected": b === $e(v) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (N) => i(b),
                  textContent: jd($e(R.getAutonym)(b))
                }, null, 10, ok))), 128))
              ])
            ])
          ]) : Nr("", !0),
          u.value.length ? Fa(S.$slots, "search", { key: 1 }, () => [
            xn("section", sk, [
              e.suggestions.length && !a.value ? Ma((nn(), on("p", ak, null, 512)), [
                [L, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Nr("", !0),
              (nn(!0), on(Mr, null, Fr(u.value, (b, N) => (nn(), on("ul", {
                key: N,
                class: Na(["results-languages pa-0 ma-0 mb-6", g.value])
              }, [
                (nn(!0), on(Mr, null, Fr(b, (V) => (nn(), on("li", {
                  key: V,
                  class: Na(["language ma-0", { "language--selected": V === $e(v) }]),
                  lang: V,
                  dir: $e(R.getDir)(V),
                  role: "option",
                  "aria-selected": V === $e(v) || null,
                  tabindex: "-1",
                  onClick: (T) => i(V),
                  textContent: jd($e(R.getAutonym)(V))
                }, null, 10, ik))), 128)),
                e.allOptionEnabled && !a.value ? Ma((nn(), on("li", {
                  key: 0,
                  class: Na(["language ma-0", { "language--selected": $e(v) === "all" }]),
                  role: "option",
                  "aria-selected": $e(v) === "all" || null,
                  tabindex: "-1",
                  onClick: x[2] || (x[2] = (V) => i("all"))
                }, null, 10, rk)), [
                  [L, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Nr("", !0)
              ], 2))), 128))
            ])
          ]) : Fa(S.$slots, "noresults", { key: 2 }, () => [
            xn("section", lk, [
              Ma(xn("h3", ck, null, 512), [
                [L, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const gk = window.Vue.resolveDirective, qd = window.Vue.withDirectives, ds = window.Vue.openBlock, gs = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ve = window.Vue.unref, Gd = window.Vue.toDisplayString, xt = window.Vue.createVNode, Xd = window.Vue.withModifiers, Hn = window.Vue.withCtx, pk = window.Vue.normalizeClass, mk = {
  key: 0,
  class: "mw-ui-autonym"
}, hk = ["lang", "dir", "textContent"], fk = {
  key: 0,
  class: "mw-ui-autonym"
}, wk = ["lang", "dir", "textContent"], ps = window.Vue.computed, vk = window.Vue.inject, _k = window.Vue.ref, Wd = window.Codex.CdxButton, Ur = window.Codex.CdxIcon, Fi = {
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
    const n = e, o = t, s = vk("breakpoints"), a = ps(() => s.value.mobile), r = _k(null), c = ps(() => !!r.value), u = () => r.value = "source", g = () => r.value = "target", i = () => r.value = null, l = ps(() => {
      if (!c.value)
        return;
      const f = {
        source: "sourceLanguages",
        target: "targetLanguages"
      }[r.value];
      return n[f];
    }), d = (h) => {
      const v = {
        source: "update:selectedSourceLanguage",
        target: "update:selectedTargetLanguage"
      }[r.value];
      i(), o(v, h);
    }, p = ps(
      () => n.selectedSourceLanguage === "all"
    ), m = ps(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const v = gk("i18n");
      return ds(), gs("div", {
        class: pk(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        xt(Ve(M), {
          justify: "center",
          align: "center",
          class: "ma-0"
        }, {
          default: Hn(() => [
            xt(Ve(k), {
              class: "flex justify-end px-0",
              cols: a.value ? 5 : null
            }, {
              default: Hn(() => [
                xt(Ve(Wd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  onClick: Xd(u, ["stop"])
                }, {
                  default: Hn(() => [
                    p.value ? qd((ds(), gs("span", mk, null, 512)), [
                      [v, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (ds(), gs("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ve(R.getDir)(e.selectedSourceLanguage),
                      textContent: Gd(Ve(R.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, hk)),
                    xt(Ve(Ur), {
                      size: "x-small",
                      icon: Ve(vc)
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["cols"]),
            xt(Ve(k), {
              class: "sx-translation-list-language-selector__arrow flex justify-center px-0",
              cols: a.value ? 2 : null
            }, {
              default: Hn(() => [
                xt(Ve(Ur), { icon: Ve(xh) }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["cols"]),
            xt(Ve(k), {
              class: "px-0",
              cols: a.value ? 5 : null
            }, {
              default: Hn(() => [
                xt(Ve(Wd), {
                  class: "sx-translation-list-language-selector__button",
                  weight: "quiet",
                  disabled: e.targetLanguages.length < 2,
                  onClick: Xd(g, ["stop"])
                }, {
                  default: Hn(() => [
                    m.value ? qd((ds(), gs("span", fk, null, 512)), [
                      [v, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (ds(), gs("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ve(R.getDir)(e.selectedTargetLanguage),
                      textContent: Gd(Ve(R.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, wk)),
                    xt(Ve(Ur), {
                      size: "x-small",
                      icon: Ve(vc)
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
        xt(Ve(St), {
          value: c.value,
          "onUpdate:value": f[0] || (f[0] = (w) => c.value = w),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: Hn(() => [
            xt(Ve(ff), {
              class: "sx-translation-list-language-selector__widget col-12",
              placeholder: h.$i18n("cx-sx-language-selector-placeholder"),
              languages: l.value,
              "all-option-enabled": e.allOptionEnabled,
              onSelect: d,
              onClose: i
            }, null, 8, ["placeholder", "languages", "all-option-enabled"])
          ]),
          _: 1
        }, 8, ["value", "title", "fullscreen", "header"])
      ], 2);
    };
  }
};
const Kd = window.Vue.unref, Sk = window.Vue.createVNode, Ia = window.Vue.createElementVNode, Yd = window.Vue.toDisplayString, yk = window.Vue.openBlock, xk = window.Vue.createElementBlock, bk = { class: "cx-list-empty-placeholder pa-4" }, Ck = { class: "cx-list-empty-placeholder__icon-container" }, kk = { class: "cx-list-empty-placeholder__icon" }, $k = ["textContent"], Vk = ["textContent"], Ek = window.Codex.CdxIcon, wf = {
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
    return (t, n) => (yk(), xk("div", bk, [
      Ia("div", Ck, [
        Ia("div", kk, [
          Sk(Kd(Ek), { icon: Kd(Vh) }, null, 8, ["icon"])
        ])
      ]),
      Ia("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: Yd(e.title)
      }, null, 8, $k),
      Ia("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: Yd(e.description)
      }, null, 8, Vk)
    ]));
  }
}, Lk = window.Vuex.useStore, Ak = window.Vue.ref, Ra = Ak({ draft: !1, published: !1 }), Wo = () => {
  const e = Lk(), t = qo(), n = (s) => C(void 0, null, function* () {
    let a = yield _t.fetchTranslations(s);
    e.commit("translator/clearTranslationsByStatus", s), a.forEach(
      (c) => e.commit("translator/addTranslation", c)
    );
    const r = {};
    for (const c of a) {
      const u = c.sourceLanguage;
      r[u] = r[u] || [], r[u].push(c);
    }
    Ra.value[s] = !0;
    for (const [c, u] of Object.entries(r))
      t(
        c,
        u.map((g) => g.sourceTitle)
      ), u.forEach((g) => {
        const { targetLanguage: i, targetTitle: l } = g, d = !!e.getters["mediawiki/getPage"](
          i,
          l
        );
        l && !d && e.commit(
          "mediawiki/addPage",
          new Ho({ title: l, pagelanguage: i })
        );
      });
  });
  return {
    fetchTranslationsByStatus: n,
    fetchAllTranslations: () => {
      const a = Object.keys(Ra.value).filter(
        (r) => !Ra.value[r]
      ).map(
        (r) => n(r)
      );
      return Promise.all(a).catch((r) => {
        mw.log.error("[CX] Error while fetching translations", r);
      });
    },
    translationsFetched: Ra
  };
};
const Dk = window.Vue.toDisplayString, Ir = window.Vue.normalizeClass, Jd = window.Vue.createElementVNode, Nt = window.Vue.openBlock, co = window.Vue.createBlock, za = window.Vue.createCommentVNode, Qd = window.Vue.unref, Zd = window.Vue.renderList, eg = window.Vue.Fragment, Oa = window.Vue.createElementBlock, Tk = window.Vue.createVNode, tg = window.Vue.withCtx, Bk = ["textContent"], Pk = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Fk = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, ja = window.Vue.ref, bt = window.Vue.computed, Mk = window.Vue.inject, Nk = window.Vuex.useStore, ng = {
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
    const t = e, n = ja("all"), o = ja("all"), s = Nk(), { translationsFetched: a } = Wo(), r = bt(
      () => a.value[t.translationStatus]
    ), c = ja(!1), u = ja(null), g = bt(
      () => t.translationStatus === "draft"
    ), i = bt(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), l = bt(
      () => n.value === "all"
    ), d = bt(
      () => o.value === "all"
    ), p = bt(
      () => i.value.filter(
        (x) => (l.value || x.sourceLanguage === n.value) && (d.value || x.targetLanguage === o.value)
      ).sort((x, L) => x.lastUpdatedTimestamp < L.lastUpdatedTimestamp)
    ), m = bt(() => {
      const x = i.value.map(
        (L) => L.targetLanguage
      );
      return [...new Set(x)];
    }), h = bt(() => {
      const x = i.value.map(
        (L) => L.sourceLanguage
      );
      return [...new Set(x)];
    }), f = (x) => {
      u.value = x, c.value = !0;
    }, v = bt(() => t.activeStatus === t.translationStatus), w = Mk("breakpoints"), y = bt(() => w.value.mobile), S = bt(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (x, L) => v.value ? (Nt(), co(Qd(Je), {
      key: 0,
      class: Ir(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: tg(() => [
        Jd("div", {
          class: Ir(["cx-translation-list__header", S.value])
        }, [
          Jd("h3", {
            class: Ir(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: Dk(x.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Bk),
          p.value.length ? (Nt(), co(Fi, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": L[0] || (L[0] = (b) => n.value = b),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": L[1] || (L[1] = (b) => o.value = b),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : za("", !0)
        ], 2)
      ]),
      default: tg(() => [
        r.value && !p.value.length ? (Nt(), co(wf, {
          key: 0,
          title: x.$i18n("cx-sx-translation-list-empty-title"),
          description: x.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : za("", !0),
        r.value ? za("", !0) : (Nt(), co(Qd(rt), { key: 1 })),
        g.value ? (Nt(), Oa("div", Pk, [
          (Nt(!0), Oa(eg, null, Zd(p.value, (b) => (Nt(), co(fC, {
            key: `${e.translationStatus}-${b.key}`,
            translation: b,
            onDeleteTranslation: (N) => f(b)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Nt(), Oa("div", Fk, [
          (Nt(!0), Oa(eg, null, Zd(p.value, (b) => (Nt(), co(BC, {
            key: `${e.translationStatus}-${b.key}`,
            translation: b
          }, null, 8, ["translation"]))), 128))
        ])),
        Tk(OC, {
          modelValue: c.value,
          "onUpdate:modelValue": L[2] || (L[2] = (b) => c.value = b),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : za("", !0);
  }
}, Uk = (e, t) => C(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, r = (yield re.fetchArticleSections(
    n,
    o
  )).sections.filter(
    (u) => u.level === "2"
  ), c = r.reduce(
    (u, g, i, l) => {
      const d = i < l.length - 1 ? l[i + 1].byteoffset : s;
      return u[g.line] = d - g.byteoffset, u;
    },
    { [No.LEAD_SECTION_DUMMY_TITLE]: r[0].byteoffset }
  );
  return t.length === 1 ? c[t[0]] : Object.keys(c).filter((u) => t.includes(u)).reduce((u, g) => u + c[g], 0);
}), vf = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Ik = (e, t = []) => {
  const n = e >= 60 ? e / 60 : 0, o = Math.round(n * 2) / 2;
  let s;
  if (t.length) {
    if (t.length === 1)
      return s = t[0] === No.LEAD_SECTION_DUMMY_TITLE ? "cx-sx-translation-confirmer-translation-time-lead-section" : "cx-sx-translation-confirmer-translation-time-single-section", [s, o, e];
  } else
    return s = "cx-sx-translation-confirmer-translation-time-whole-article", [s, o, e];
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    o,
    e,
    t.length
  ];
}, _f = (e) => vf(e) < 15;
const Rr = window.Vue.toDisplayString, zr = window.Vue.unref, ms = window.Vue.openBlock, Or = window.Vue.createBlock, og = window.Vue.createCommentVNode, Rk = window.Vue.createTextVNode, zk = window.Vue.Fragment, sg = window.Vue.createElementBlock, Lc = window.Vue.createElementVNode, Ok = window.Vue.withKeys, jk = window.Vue.withCtx, Hk = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, qk = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, Gk = /* @__PURE__ */ Lc("span", null, "/", -1), Xk = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, ag = window.Codex.CdxIcon, Wk = window.Codex.CdxInfoChip, Ha = window.Vue.computed, Mo = {
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
      required: !1,
      default: !1
    },
    expanded: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = e, n = Ha(() => t.content.lastIndexOf("/")), o = Ha(() => t.content.slice(0, n.value)), s = Ha(() => t.content.slice(n.value + 1)), a = Ha(
      () => t.expanded ? WS : vc
    );
    return (r, c) => (ms(), Or(zr(Wk), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: c[0] || (c[0] = Ok((u) => r.$emit("click"), ["enter"]))
    }, {
      default: jk(() => [
        n.value === -1 ? (ms(), sg(zk, { key: 0 }, [
          Rk(Rr(e.content) + " ", 1),
          e.expandable ? (ms(), Or(zr(ag), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : og("", !0)
        ], 64)) : (ms(), sg("div", Hk, [
          Lc("span", qk, Rr(o.value), 1),
          Gk,
          Lc("span", Xk, Rr(s.value), 1),
          e.expandable ? (ms(), Or(zr(ag), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : og("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const le = window.Vue.unref, Ct = window.Vue.createVNode, bn = window.Vue.createElementVNode, qa = window.Vue.toDisplayString, gt = window.Vue.withCtx, Kk = window.Vue.resolveDirective, jr = window.Vue.withDirectives, qn = window.Vue.openBlock, uo = window.Vue.createBlock, go = window.Vue.createCommentVNode, ig = window.Vue.withModifiers, Yk = window.Vue.createElementBlock, Jk = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, Qk = { class: "col shrink pe-4" }, Zk = ["lang", "dir", "textContent"], e8 = ["lang", "dir", "textContent"], t8 = ["textContent"], n8 = ["textContent"], Hr = window.Codex.CdxIcon, kt = window.Vue.computed, o8 = window.Vue.inject, s8 = window.Vuex.useStore, Ac = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [ao, Un, Uo],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = s8(), o = kt(() => t.suggestion), s = kt(
      () => o.value.sourceTitle || o.value.title
    ), a = kt(
      () => n.getters["mediawiki/getPage"](
        o.value.sourceLanguage,
        s.value
      )
    ), r = kt(
      () => {
        var v;
        return (v = o.value) == null ? void 0 : v.missingSectionsCount;
      }
    ), c = kt(() => {
      var v;
      return (v = a.value) == null ? void 0 : v.description;
    }), u = kt(
      () => o.value instanceof Un
    ), g = kt(
      () => o.value instanceof Uo
    ), { sourceLanguageAutonym: i, targetLanguageAutonym: l } = Ae(n), d = kt(
      () => g.value ? Ch : kh
    ), p = o8("colors"), m = kt(
      () => g.value ? p.blue600 : "currentColor"
    ), h = kt(
      () => {
        var v;
        return _f((v = a.value) == null ? void 0 : v.articleSize);
      }
    ), f = kt(
      () => o.value instanceof fh || o.value instanceof wh
    );
    return (v, w) => {
      const y = Kk("i18n");
      return o.value ? (qn(), Yk("div", Jk, [
        bn("div", Qk, [
          Ct(le(Tc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        Ct(le(M), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: gt(() => [
            Ct(le(M), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: gt(() => [
                Ct(le(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: gt(() => [
                    bn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: o.value.sourceLanguage,
                      dir: le(R.getDir)(o.value.sourceLanguage),
                      textContent: qa(s.value)
                    }, null, 8, Zk)
                  ]),
                  _: 1
                }),
                Ct(le(k), { shrink: "" }, {
                  default: gt(() => [
                    bn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: o.value.sourceLanguage,
                      dir: le(R.getDir)(o.value.sourceLanguage),
                      textContent: qa(c.value)
                    }, null, 8, e8)
                  ]),
                  _: 1
                }),
                h.value && !u.value && !f.value ? (qn(), uo(le(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: gt(() => [
                    jr(bn("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : go("", !0),
                u.value ? (qn(), uo(le(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: gt(() => [
                    jr(bn("small", null, null, 512), [
                      [y, [r.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : g.value ? (qn(), uo(le(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: gt(() => [
                    Ct(le(M), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: gt(() => [
                        Ct(le(k), { grow: "" }, {
                          default: gt(() => [
                            bn("small", {
                              textContent: qa(le(i))
                            }, null, 8, t8),
                            Ct(le(Hr), {
                              icon: le(xh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            bn("small", {
                              textContent: qa(le(l))
                            }, null, 8, n8)
                          ]),
                          _: 1
                        }),
                        r.value ? (qn(), uo(le(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: gt(() => [
                            jr(bn("small", null, null, 512), [
                              [y, [
                                r.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : go("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : go("", !0),
                f.value ? (qn(), uo(le(k), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: gt(() => [
                    Ct(Mo, {
                      icon: le(Hi),
                      content: o.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : go("", !0)
              ]),
              _: 1
            }),
            Ct(le(k), { shrink: "" }, {
              default: gt(() => [
                g.value ? go("", !0) : (qn(), uo(le(Hr), {
                  key: 0,
                  icon: le(Xo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: w[0] || (w[0] = ig((S) => v.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                Ct(le(Hr), {
                  class: "cx-suggestion__favorite-button",
                  icon: d.value,
                  "icon-color": m.value,
                  onClick: w[1] || (w[1] = ig((S) => v.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : go("", !0);
    };
  }
}, a8 = "suggestion_filter_topic_area", i8 = "suggestion_filter_search_result_seed", r8 = "suggestion_filter_collections", l8 = "suggestion_filter_previous_edits", c8 = "suggestion_filter_popular_articles", u8 = "suggestion_filter_region", Sf = (e) => {
  if (e.type === Ne)
    return a8;
  if (e.type === Ce)
    return u8;
  if (e.type === vt)
    return i8;
  if (e.id === Q || e.type === Q)
    return r8;
  if (e.id === Pt)
    return l8;
  if (e.id === Yt)
    return c8;
}, Dc = (e) => {
  if (e.type === Ne || e.type === Ce || e.type === Q || e.type === vt)
    return e.id;
  if (e.id === Q)
    return "all-collections";
};
const qr = window.Vue.normalizeClass, rg = window.Vue.createVNode, d8 = window.Vue.renderList, lg = window.Vue.Fragment, hs = window.Vue.openBlock, Ga = window.Vue.createElementBlock, g8 = window.Vue.createBlock, p8 = window.Vue.toDisplayString, m8 = window.Vue.withKeys, cg = window.Vue.createCommentVNode, h8 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, Xa = window.Vue.computed, f8 = {
  __name: "SuggestionFilterChip",
  props: {
    filter: {
      type: Bt,
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
    const n = e, o = Xa(() => n.filter.expandable ? n.isSelected(n.filter) ? !0 : n.filter.subFilters ? n.filter.subFilters.some(
      (l) => n.isSelected(l)
    ) : !1 : !1), s = t, a = () => {
      s("filter-selected", n.filter);
    }, r = Xa(() => n.filter.chipLabel), c = (l) => {
      const { label: d } = l, p = n.filter.label;
      return d.startsWith(`${p}/`) ? d.replace(`${p}/`, "") : d;
    }, u = Xa(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), g = Xa(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && o.value
    ), i = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (l, d) => (hs(), Ga(lg, null, [
      rg(Mo, {
        class: qr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: r.value,
        expandable: !!e.filter.expandable,
        onClick: a
      }, null, 8, ["class", "icon", "content", "expandable"]),
      o.value ? (hs(), Ga("div", h8, [
        rg(Mo, {
          class: qr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: l.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: d[0] || (d[0] = (p) => l.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (hs(!0), Ga(lg, null, d8(u.value, (p) => (hs(), g8(Mo, {
          key: p.id,
          class: qr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(p)
          }]),
          content: c(p),
          icon: p.icon,
          onClick: (m) => l.$emit("filter-selected", p)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        g.value ? (hs(), Ga("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: i,
          onKeyup: m8(i, ["enter"])
        }, p8(e.viewMoreConfig.label), 33)) : cg("", !0)
      ])) : cg("", !0)
    ], 64));
  }
};
const w8 = window.Vue.toDisplayString, ug = window.Vue.createElementVNode, v8 = window.Vue.renderList, dg = window.Vue.Fragment, Gr = window.Vue.openBlock, gg = window.Vue.createElementBlock, _8 = window.Vue.createBlock, S8 = { class: "sx-suggestions-filters__group-label mb-3" }, y8 = { class: "sx-suggestions-filters__group-filters mb-3" }, x8 = {
  __name: "SXSuggestionsFiltersDialogTabGroupContent",
  props: {
    filterGroup: {
      type: Zs,
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
    return (o, s) => (Gr(), gg(dg, null, [
      ug("div", S8, w8(e.filterGroup.label), 1),
      ug("div", y8, [
        (Gr(!0), gg(dg, null, v8(n(), (a) => (Gr(), _8(f8, {
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
}, b8 = window.Vue.computed, pg = window.Vue.ref, mg = window.Vue.watch, nu = (e, t) => {
  const o = pg([]), s = pg(!1), a = b8(
    () => o.value.slice(0, 4)
  ), r = tu(() => C(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      o.value = yield so.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500), c = () => {
    s.value = !0, o.value = [], r();
  };
  return mg(t, c), mg(e, c), {
    searchResultsLoading: s,
    searchResultsSlice: a
  };
};
class Wa {
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
    icon: c = null,
    showThumbnail: u = !1
  }) {
    this.label = t, this.value = n + "-" + s, this.description = o, this.thumbnail = r, this.filterType = s, this.filterId = a, this.icon = c, this.showThumbnail = u;
  }
}
const Xr = window.Vue.ref, hg = window.Vue.watch, C8 = window.Vue.computed, { topics: k8, regions: $8 } = mw.loader.require(
  "ext.cx.articlefilters"
), V8 = k8.flatMap(
  (e) => e.topics.map((t) => Qe(ie({}, t), {
    groupId: e.groupId
  }))
), E8 = () => {
  const e = Xr(""), t = Xr("all"), n = Xr({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = ue(), { pageCollectionGroups: s } = Gc(), { sourceLanguageURLParameter: a } = B(), r = (l) => (l = l.toLowerCase(), V8.filter(
    (d) => d.label.toLowerCase().includes(l)
  )), c = (l) => (l = l.toLowerCase(), Object.values(s.value).flat().filter(
    (p) => p.name.toLowerCase().includes(l)
  )), u = (l) => (l = l.toLowerCase(), $8.flatMap((d) => [d, ...d.countries]).filter(
    (d) => d.label.toLowerCase().includes(l)
  ).map((d) => ({
    label: d.label,
    id: d.id
  }))), { searchResultsSlice: g } = nu(a, e);
  hg(g, () => {
    n.value.topics = g.value.map(
      (l) => {
        var d;
        return new Wa({
          label: l.title,
          value: l.title,
          description: l.description,
          thumbnail: { url: (d = l.thumbnail) == null ? void 0 : d.source },
          filterType: vt,
          filterId: l.title,
          showThumbnail: !0
        });
      }
    );
  }), hg([e, t], () => C(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (l) => new Wa({
        label: l.label,
        value: l.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? _c : null,
        filterType: Ne,
        filterId: l.topicId
      })
    ), n.value.collections = c(
      e.value
    ).map(
      (l) => new Wa({
        label: l.name,
        value: l.name,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          l.articlesCount
        ),
        icon: t.value === "all" ? Hi : null,
        filterType: Q,
        filterId: l.name
      })
    ), n.value.regions = u(e.value).map(
      (l) => new Wa({
        label: l.label,
        value: l.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? _c : null,
        filterType: Ce,
        filterId: l.id
      })
    );
  }));
  const i = C8(() => {
    const l = t.value === "all";
    return [
      {
        key: "topics",
        show: n.value.topics.length && l,
        items: n.value.topics
      },
      {
        key: "topic-areas",
        show: n.value.topic_areas.length && (l || t.value === "topics"),
        items: n.value.topic_areas
      },
      {
        key: "geography",
        show: n.value.regions.length && (l || t.value === "geography"),
        items: n.value.regions
      },
      {
        key: "collections",
        show: n.value.collections.length && (l || t.value === "collections"),
        items: n.value.collections
      }
    ].filter((d) => d.show);
  });
  return { searchInput: e, searchScope: t, searchResults: i };
};
const Ee = window.Vue.unref, pt = window.Vue.createVNode, Ut = window.Vue.withCtx, L8 = window.Vue.resolveDirective, It = window.Vue.createElementVNode, Wr = window.Vue.withDirectives, Ka = window.Vue.toDisplayString, A8 = window.Vue.createTextVNode, D8 = window.Vue.vShow, fg = window.Vue.renderList, wg = window.Vue.Fragment, Cn = window.Vue.openBlock, po = window.Vue.createElementBlock, vg = window.Vue.isRef, T8 = window.Vue.withKeys, B8 = window.Vue.createCommentVNode, _g = window.Vue.createBlock, P8 = { class: "sx-suggestions-filters" }, F8 = { class: "mb-0" }, M8 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, N8 = { class: "mb-3" }, U8 = { class: "px-4 pb-4 pt-7" }, I8 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, R8 = ["onKeyup", "onClick"], z8 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, O8 = { class: "sx-suggestions-filters__search-results-empty" }, j8 = { class: "sx-suggestions-filters__search-results-empty-primary" }, H8 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, Ya = window.Vue.ref, mo = window.Vue.computed, q8 = window.Vue.inject, G8 = window.Vue.watch, Sg = window.Codex.CdxButton, X8 = window.Codex.CdxIcon, W8 = window.Codex.CdxTextInput, K8 = window.Codex.CdxMenu, Y8 = window.Codex.CdxTabs, J8 = window.Codex.CdxTab, Q8 = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = ue(), o = t, s = mo(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: d([
          Ye,
          Q,
          Ce,
          Ne
        ])
      },
      {
        name: "collections",
        label: n.i18n("cx-sx-suggestions-filters-tab-collections"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-collections"
        ),
        filterGroups: d([Q])
      },
      {
        name: "geography",
        label: n.i18n("cx-sx-suggestions-filters-tab-regions"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-regions"
        ),
        filterGroups: d([Ce])
      },
      {
        name: "topics",
        label: n.i18n("cx-sx-suggestions-filters-tab-topics"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-topics"
        ),
        filterGroups: d([Ne])
      }
    ]), a = (U) => V.value = U, r = (U, q) => q === "all" && U.type === Ce ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          U.label
        ),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, c = (U, q) => {
      if (U !== "all")
        return !1;
      if (q === Q) {
        const G = d([Q]);
        return G.length && G[0].filters.length > 6;
      }
      return q === Ce;
    }, { allFilters: u, isFilterSelected: g, selectFilter: i, findSelectedFilter: l } = qi(), d = (U) => U.flatMap((q) => u.value.filter((G) => G.type === q)).filter(Boolean), p = ct(), m = () => {
      y(), o("update:modelValue", !1);
    }, h = () => {
      p({ event_type: "suggestion_filters_close" }), m();
    }, f = () => {
      w.value && (p({
        event_type: "suggestion_filters_confirm",
        event_subtype: "suggestion_filters_single_select_confirm",
        event_context: Dc(
          w.value
        )
      }), i(w.value)), m();
    }, v = Ya(!1), w = Ya(null), y = () => {
      w.value = null, v.value = !1;
    }, S = (U) => {
      const q = {
        event_type: "suggestion_filters_select",
        event_subtype: "suggestion_filters_single_select",
        event_source: Sf(U),
        event_context: Dc(U)
      };
      p(q), w.value = U, v.value = !0;
    }, x = (U) => w.value ? w.value.id === U.id && w.value.type === U.type : g(U), L = q8("breakpoints"), b = mo(() => L.value.mobile), { searchInput: N, searchScope: V, searchResults: T } = E8(), I = mo(
      () => w.value || l()
    ), X = Ya(null);
    G8(X, () => {
      if (!X.value)
        return;
      const U = ke.value.find(
        (q) => q.value === X.value
      );
      S({
        type: U.filterType,
        id: U.filterId,
        label: U.label
      }), N.value = "";
    });
    const Y = {
      [Q]: "cx-sx-suggestions-filters-view-all-collections-group",
      [Ce]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, ke = mo(
      () => T.value.flatMap((U) => U.items)
    ), Se = Ya({}), Xe = mo(
      () => Se.value[V.value]
    ), Re = mo(() => {
      var q;
      const U = (q = Xe.value) == null ? void 0 : q.getHighlightedMenuItem();
      return U == null ? void 0 : U.id;
    }), ye = (U) => {
      U.key !== " " && Xe.value && Xe.value.delegateKeyNavigation(U);
    }, De = (U, q) => {
      Se.value[q] = U;
    };
    return (U, q) => {
      const G = L8("i18n");
      return Cn(), _g(Ee(St), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: b.value,
        header: !1
      }, {
        default: Ut(() => [
          It("section", P8, [
            pt(Ee(M), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: Ut(() => [
                pt(Ee(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: Ut(() => [
                    pt(Ee(Sg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": U.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: h
                    }, {
                      default: Ut(() => [
                        pt(Ee(X8), { icon: Ee(Xo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                pt(Ee(k), {
                  grow: "",
                  align: "center"
                }, {
                  default: Ut(() => [
                    Wr(It("h5", F8, null, 512), [
                      [G, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                pt(Ee(k), {
                  shrink: "",
                  align: "start"
                }, {
                  default: Ut(() => [
                    Wr(pt(Ee(Sg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: f
                    }, {
                      default: Ut(() => [
                        A8(Ka(U.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [D8, v.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            It("div", M8, [
              Wr(It("h5", N8, null, 512), [
                [G, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              It("div", null, [
                pt(Mo, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: I.value.label,
                  icon: I.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            pt(Ee(Y8), {
              active: Ee(V),
              "onUpdate:active": [
                q[2] || (q[2] = (se) => vg(V) ? V.value = se : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: Ut(() => [
                (Cn(!0), po(wg, null, fg(s.value, (se, xe) => (Cn(), _g(Ee(J8), {
                  key: xe,
                  name: se.name,
                  label: se.label
                }, {
                  default: Ut(() => [
                    It("div", U8, [
                      pt(Ee(W8), {
                        modelValue: Ee(N),
                        "onUpdate:modelValue": q[0] || (q[0] = (P) => vg(N) ? N.value = P : null),
                        role: "combobox",
                        "aria-activedescendant": Re.value,
                        "aria-controls": "sx-suggestions-filters__search-results__menu",
                        "aria-autocomplete": "none",
                        placeholder: se.searchPlaceholder,
                        "input-type": "search",
                        "start-icon": Ee(_c),
                        clearable: !!Ee(N),
                        onKeydown: ye
                      }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
                    ]),
                    Ee(N) ? (Cn(), po("div", z8, [
                      pt(Ee(K8), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (P) => De(P, se.name),
                        selected: X.value,
                        "onUpdate:selected": q[1] || (q[1] = (P) => X.value = P),
                        expanded: "",
                        "menu-items": ke.value
                      }, {
                        "no-results": Ut(() => [
                          It("div", O8, [
                            It("span", j8, Ka(U.$i18n(
                              "cx-sx-suggestions-filter-search-results-empty-primary"
                            )), 1),
                            It("span", H8, Ka(U.$i18n(
                              "cx-sx-suggestions-filter-search-results-empty-secondary"
                            )), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["selected", "menu-items"])
                    ])) : (Cn(), po("div", I8, [
                      (Cn(!0), po(wg, null, fg(se.filterGroups, (P) => (Cn(), po("div", {
                        key: P.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        pt(x8, {
                          "filter-group": P,
                          "tentatively-select-filter": S,
                          "is-selected": x,
                          limit: c(se.name, P.type) ? 4 : 0,
                          "get-sub-filter-config": (H) => r(H, se.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        c(se.name, P.type) ? (Cn(), po("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: T8((H) => a(P.id), ["enter"]),
                          onClick: (H) => a(P.id)
                        }, [
                          It("span", null, Ka(U.$i18n(Y[P.id])), 1)
                        ], 40, R8)) : B8("", !0)
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
const Kr = window.Vue.unref, Ja = window.Vue.openBlock, yg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Z8 = window.Vue.renderList, e2 = window.Vue.Fragment, xg = window.Vue.createElementBlock, t2 = window.Vue.normalizeClass, n2 = window.Vue.createVNode, o2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, bg = window.Vue.ref, s2 = window.Vue.computed, Cg = window.Vue.watch, a2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = ue(), n = ct(), {
      getFiltersSummary: o,
      selectFilter: s,
      isFilterSelected: a,
      waitingForPageCollectionsFetch: r,
      validateURLFilterWithCollections: c
    } = qi(), u = bg(!1), g = () => {
      n({ event_type: "dashboard_suggestion_filters_view_more" }), u.value = !0;
    }, i = (f) => {
      const v = {
        event_type: "dashboard_suggestion_filters_quick_select",
        event_source: Sf(f),
        event_context: Dc(f)
      };
      n(v), s(f);
    }, l = {
      [Pt]: Lh,
      [Yt]: $h,
      [Q]: Hi,
      [Ne]: null
    }, { getFilterProvider: d } = Ah(), p = (f) => ({
      id: f.id,
      type: f.type,
      icon: l[d(f)],
      label: f.label,
      action: i
    }), m = bg(o());
    Cg(u, (f) => {
      f || (m.value = o());
    }), Cg(r, (f) => {
      f || (c(), m.value = o());
    });
    const h = s2(() => [
      ...m.value.map(p),
      {
        id: "more",
        icon: Wc,
        label: t.i18n("cx-sx-suggestions-filter-more-label"),
        action: g
      }
    ]);
    return (f, v) => Kr(r) ? (Ja(), yg(Kr(rt), { key: 0 })) : (Ja(), xg("div", o2, [
      (Ja(!0), xg(e2, null, Z8(h.value, (w) => (Ja(), yg(Mo, {
        key: w.label,
        class: t2(["cx-suggestion-list__filter py-1 me-1", { "cx-suggestion-list__filter--active": Kr(a)(w) }]),
        icon: w.icon,
        content: w.label,
        onClick: (y) => w.action(w)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      n2(Q8, {
        modelValue: u.value,
        "onUpdate:modelValue": v[0] || (v[0] = (w) => u.value = w)
      }, null, 8, ["modelValue"])
    ]));
  }
}, ho = window.Vue.computed, kg = window.Vue.ref, i2 = window.Vue.watch, r2 = window.Vuex.useStore, l2 = () => {
  const e = r2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = jc(), r = ct(), c = ho(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = ho(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), g = kg(0), i = kg(0), { maxSuggestionsPerSlice: l } = e.state.suggestions, d = 4, p = ho(
    () => a(g.value)
  ), m = ho(
    () => s(i.value)
  ), h = () => {
    x(), V(), L(), T();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: v
  } = Jc(), w = (I) => I.length === l, y = ho(
    () => w(m.value)
  ), S = ho(
    () => w(p.value)
  ), x = () => {
    const I = (g.value + 1) % d, X = w(
      a(I)
    );
    (!S.value || !X) && f();
  }, L = () => {
    const I = (i.value + 1) % d, X = w(
      s(I)
    );
    (!y.value || !X) && v();
  }, b = (I) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", I), x();
  }, N = (I) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", I), L();
  }, V = () => g.value = (g.value + 1) % d, T = () => i.value = (i.value + 1) % d;
  return i2(
    o,
    () => {
      i.value = 0, L(), g.value = 0, x();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: N,
    discardSectionSuggestion: b,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: c,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: S
  };
}, c2 = window.Vuex.useStore, ou = () => {
  const e = c2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Jc(), o = (g, i, l) => e.state.suggestions.pageSuggestions.find(
    (d) => d.sourceLanguage === g && d.targetLanguage === i && d.sourceTitle === l
  ), s = (g) => C(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: l, targetLanguage: d } = g;
    yield re.markFavorite(i, l, d);
    const p = new Uo({
      title: i,
      sourceLanguage: l,
      targetLanguage: d
    });
    e.commit("suggestions/addFavoriteSuggestion", p);
  });
  return {
    markFavoritePageSuggestion: (g) => {
      e.commit("suggestions/removePageSuggestionFromList", g), n(), s(g);
    },
    markFavoriteSectionSuggestion: (g) => {
      e.commit(
        "suggestions/removeSectionSuggestionFromList",
        g
      ), t(), s(g);
    },
    markFavoriteSuggestion: (g, i, l) => C(void 0, null, function* () {
      const d = o(
        i,
        l,
        g
      );
      d && (e.commit(
        "suggestions/removePageSuggestionFromList",
        d
      ), n());
      const p = e.getters["suggestions/getSectionSuggestionsForArticle"](i, l, g);
      p != null && p.isListable && (e.commit(
        "suggestions/removeSectionSuggestionFromList",
        p
      ), t()), yield re.markFavorite(
        g,
        i,
        l
      );
      const m = new Uo({
        title: g,
        sourceLanguage: i,
        targetLanguage: l
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (g) => (e.commit("suggestions/removeFavoriteSuggestion", g), re.unmarkFavorite(g))
  };
}, u2 = "suggestion_no_seed", d2 = "suggestion_recent_edit", g2 = "suggestion_topic_area", p2 = "suggestion_search_result_seed", m2 = "suggestion_featured", h2 = "suggestion_collections", f2 = "suggestion_region", w2 = () => {
  const { currentSuggestionFilters: e } = B();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === Pt)
      return t ? d2 : u2;
    if (n === Ne)
      return g2;
    if (n === Ce)
      return f2;
    if (n === vt)
      return p2;
    if (o === Yt)
      return m2;
    if (o === Q || n === Q)
      return h2;
    throw new Error("Event source cannot be empty");
  };
};
const $g = window.Vue.normalizeClass, v2 = window.Vue.resolveDirective, fs = window.Vue.createElementVNode, Qa = window.Vue.withDirectives, de = window.Vue.unref, Ze = window.Vue.openBlock, Rt = window.Vue.createBlock, kn = window.Vue.createCommentVNode, Yr = window.Vue.createVNode, ws = window.Vue.withCtx, Vg = window.Vue.renderList, Eg = window.Vue.Fragment, Jr = window.Vue.createElementBlock, _2 = window.Vue.toDisplayString, S2 = window.Vue.createTextVNode, y2 = window.Vue.vShow, x2 = { class: "cx-suggestion-list" }, b2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, C2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, k2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, zt = window.Vue.computed, $2 = window.Vue.inject, V2 = window.Vue.ref, E2 = window.Codex.CdxButton, L2 = window.Codex.CdxIcon, A2 = window.Vuex.useStore, D2 = {
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
    } = B(), { supportedSourceLanguageCodes: s, supportedTargetLanguageCodes: a } = ua(), r = Fh(), c = (G) => r(G, n.value), u = (G) => r(t.value, G), g = w2(), i = ma(), l = (G) => {
      i(
        G.sourceTitle,
        G.sourceLanguage,
        G.targetLanguage,
        g(G.suggestionSeed),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: d,
      currentSectionSuggestionsSlice: p,
      discardPageSuggestion: m,
      discardSectionSuggestion: h,
      onSuggestionRefresh: f,
      pageSuggestionsLoading: v,
      sectionSuggestionsLoading: w,
      isCurrentPageSuggestionsSliceFull: y,
      isCurrentSectionSuggestionsSliceFull: S
    } = l2(), x = V2(null), L = ct(), b = () => {
      L({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), x.value && x.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: N, markFavoritePageSuggestion: V } = ou(), T = $2("breakpoints"), I = zt(() => T.value.mobile), X = zt(
      () => I.value ? null : "pb-2 flex justify-between items-center"
    ), Y = A2(), ke = zt(
      () => Y.state.suggestions.isPageSuggestionsFetchPending
    ), Se = zt(
      () => Y.state.suggestions.isSectionSuggestionsFetchPending
    ), Xe = zt(
      () => ke.value || v.value && !y.value
    ), Re = zt(
      () => Se.value || w.value && !S.value
    ), ye = zt(
      () => ke.value || v.value || d.value.length > 0
    ), De = zt(
      () => Se.value || w.value || p.value.length > 0
    ), U = zt(
      () => !ye.value && !De.value
    ), q = zt(
      () => !w.value && !v.value && !ke.value && !Se.value && !U.value
    );
    return (G, se) => {
      const xe = v2("i18n");
      return Qa((Ze(), Jr("div", x2, [
        Yr(de(Je), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: ws(() => [
            fs("div", {
              class: $g(["cx-suggestion-list__header-card__header px-4", X.value])
            }, [
              Qa(fs("h3", {
                class: $g(["mw-ui-card__title mb-0", { "py-3": I.value }])
              }, null, 2), [
                [xe, void 0, "cx-suggestionlist-title"]
              ]),
              I.value ? kn("", !0) : (Ze(), Rt(Fi, {
                key: 0,
                "source-languages": de(s),
                "target-languages": de(a),
                "selected-source-language": de(t),
                "selected-target-language": de(n),
                "onUpdate:selectedSourceLanguage": c,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Yr(a2)
          ]),
          default: ws(() => [
            I.value ? (Ze(), Rt(Fi, {
              key: 0,
              "source-languages": de(s),
              "target-languages": de(a),
              "selected-source-language": de(t),
              "selected-target-language": de(n),
              "onUpdate:selectedSourceLanguage": c,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : kn("", !0)
          ]),
          _: 1
        }),
        ye.value ? (Ze(), Rt(de(Je), {
          key: 0,
          ref_key: "pageSuggestionsList",
          ref: x,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: ws(() => [
            Qa(fs("h5", b2, null, 512), [
              [xe, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Ze(!0), Jr(Eg, null, Vg(de(d), (P, H) => (Ze(), Rt(Ac, {
              key: `page-suggestion-${H}`,
              suggestion: P,
              onClose: (_) => de(m)(P),
              onClick: (_) => l(P),
              onBookmark: (_) => de(V)(P)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Xe.value ? (Ze(), Rt(de(rt), { key: 0 })) : kn("", !0)
          ]),
          _: 1
        }, 512)) : kn("", !0),
        De.value ? (Ze(), Rt(de(Je), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: ws(() => [
            Qa(fs("h5", C2, null, 512), [
              [xe, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Ze(!0), Jr(Eg, null, Vg(de(p), (P, H) => (Ze(), Rt(Ac, {
              key: `section-suggestion-${H}`,
              class: "ma-0",
              suggestion: P,
              onClose: (_) => de(h)(P),
              onClick: (_) => l(P),
              onBookmark: (_) => de(N)(P)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            Re.value ? (Ze(), Rt(de(rt), { key: 0 })) : kn("", !0)
          ]),
          _: 1
        })) : kn("", !0),
        U.value ? (Ze(), Rt(wf, {
          key: 2,
          title: G.$i18n("cx-sx-suggestion-list-empty-title"),
          description: G.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : kn("", !0),
        fs("div", k2, [
          q.value ? (Ze(), Rt(de(E2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: b
          }, {
            default: ws(() => [
              Yr(de(L2), {
                class: "me-1",
                icon: de(Eh)
              }, null, 8, ["icon"]),
              S2(" " + _2(G.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : kn("", !0)
        ])
      ], 512)), [
        [y2, e.active]
      ]);
    };
  }
}, T2 = window.Vue.resolveDirective, B2 = window.Vue.createElementVNode, P2 = window.Vue.withDirectives, F2 = window.Vue.renderList, M2 = window.Vue.Fragment, Qr = window.Vue.openBlock, N2 = window.Vue.createElementBlock, Lg = window.Vue.unref, Ag = window.Vue.createBlock, Dg = window.Vue.withCtx, U2 = window.Vue.createCommentVNode, I2 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, R2 = window.Vue.computed, z2 = window.Vuex.useStore, O2 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = z2(), n = R2(() => t.state.suggestions.favorites || []), o = ma(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = ou();
    return (r, c) => {
      const u = T2("i18n");
      return n.value.length ? (Qr(), Ag(Lg(Je), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Dg(() => [
          P2(B2("h3", I2, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Dg(() => [
          (Qr(!0), N2(M2, null, F2(n.value, (g, i) => (Qr(), Ag(Ac, {
            key: `favorite-${i}`,
            suggestion: g,
            onClick: (l) => s(g),
            onBookmark: (l) => Lg(a)(g)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : U2("", !0);
    };
  }
};
const j2 = window.Vue.resolveDirective, vs = window.Vue.createElementVNode, H2 = window.Vue.withDirectives, q2 = window.Vue.renderList, G2 = window.Vue.Fragment, Tg = window.Vue.openBlock, Bg = window.Vue.createElementBlock, X2 = window.Vue.unref, W2 = window.Vue.createVNode, K2 = window.Vue.toDisplayString, Y2 = { class: "cx-help-panel pa-4" }, J2 = { class: "cx-help-panel__item-list mt-6 ps-2" }, Q2 = ["href", "target"], Z2 = ["textContent"], e$ = window.Codex.CdxIcon, t$ = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = ue(), n = [
      {
        icon: ZS,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: YS,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = j2("i18n");
      return Tg(), Bg("div", Y2, [
        H2(vs("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        vs("ul", J2, [
          (Tg(), Bg(G2, null, q2(n, (r, c) => vs("li", {
            key: c,
            class: "mt-4"
          }, [
            vs("a", {
              href: r.href,
              target: r.target
            }, [
              W2(X2(e$), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              vs("span", {
                textContent: K2(r.label)
              }, null, 8, Z2)
            ], 8, Q2)
          ])), 64))
        ])
      ]);
    };
  }
};
const n$ = window.Vue.resolveDirective, fo = window.Vue.createElementVNode, Zr = window.Vue.withDirectives, Pg = window.Vue.toDisplayString, el = window.Vue.unref, tl = window.Vue.withCtx, nl = window.Vue.createVNode, o$ = window.Vue.openBlock, s$ = window.Vue.createElementBlock, a$ = { class: "cx-stats-panel pa-4" }, i$ = ["textContent"], r$ = { class: "cx-stats-panel__monthly-stats-label" }, l$ = ["textContent"], c$ = { class: "cx-stats-panel__total-stats-label" }, u$ = window.Vue.ref, Fg = window.Vue.computed, d$ = window.Vue.watch, g$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = Fg(() => {
      var r, c;
      return ((c = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : c.count) || 0;
    }), s = Fg(() => {
      var r, c;
      return ((c = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : c.delta) || 0;
    }), a = u$(null);
    return d$(
      () => t.stats,
      () => {
        const r = t.stats, c = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), g = u.reduce(
          (S, x) => Math.max(S, r[x].delta),
          0
        ), i = u.map((S) => r[S].delta), l = a.value.getBoundingClientRect().width, d = a.value.getBoundingClientRect().height;
        a.value.width = l, a.value.height = d;
        const p = 4, m = 6, h = 50, f = (h - p) / g;
        let v = p;
        const w = Math.floor(
          (l - p) / (m + p)
        ), y = i.slice(
          Math.max(i.length - w, 0)
        );
        y.forEach((S, x) => {
          x === y.length - 1 && (c.fillStyle = "#36c");
          const L = h - S * f;
          c.fillRect(v, L, m, S * f), v += m + p;
        });
      }
    ), (r, c) => {
      const u = n$("i18n");
      return o$(), s$("div", a$, [
        Zr(fo("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        nl(el(M), null, {
          default: tl(() => [
            nl(el(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: tl(() => [
                fo("h3", {
                  textContent: Pg(s.value)
                }, null, 8, i$),
                Zr(fo("h5", r$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            nl(el(k), { class: "cx-stats-panel__total-stats" }, {
              default: tl(() => [
                fo("h3", {
                  textContent: Pg(o.value)
                }, null, 8, l$),
                Zr(fo("h5", c$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        fo("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, yf = () => {
  const e = ct();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const p$ = window.Vue.renderSlot, m$ = window.Vue.unref, h$ = window.Vue.createVNode, f$ = window.Vue.createElementVNode, w$ = window.Vue.openBlock, v$ = window.Vue.createElementBlock, _$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, S$ = { class: "col-12 ma-0 pa-0" }, y$ = {
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
    const n = t, o = yf(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (w$(), v$("footer", _$, [
      f$("div", S$, [
        p$(a.$slots, "default", {}, () => [
          h$(m$(ia), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, x$ = window.Vuex.useStore, b$ = () => {
  const e = x$(), t = qo();
  return () => C(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const n = yield re.fetchFavorites();
    if (!n || !n.length)
      return;
    const o = {};
    for (const s of n)
      e.commit("suggestions/addFavoriteSuggestion", s), re.fetchSectionSuggestion(
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
}, C$ = window.Vuex.useStore, xf = () => {
  const e = C$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), { isDefaultFilter: r } = Fc(), { previousRoute: c } = Ae(e), u = ct(), g = () => {
    const d = {
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
    return d[p];
  }, i = () => {
    if (n.value)
      return g() || "direct_preselect";
    const p = {
      "sx-article-search": "return_from_search",
      "sx-translation-confirmer": "return_from_confirmation",
      "sx-section-selector": "return_from_section_selection",
      "sx-sentence-selector": "editor_close"
    }[c.value];
    return p || (r(o.value) ? g() || "direct" : "suggestion_filter_direct_preselect");
  };
  return { logDashboardOpenEvent: () => {
    const d = i(), p = {
      event_type: "dashboard_open",
      event_source: d,
      translation_source_language: s.value,
      translation_target_language: a.value
    };
    return d === "suggestion_filter_direct_preselect" && (p.event_context = o.value.id), u(p);
  }, getEventSource: i };
}, k$ = window.Vue.watch, $$ = () => {
  const { fetchAllTranslations: e } = Wo(), t = Th(), n = b$(), { fetchPageCollectionGroups: o } = Gc(), { logDashboardOpenEvent: s } = xf(), { applicationLanguagesInitialized: a } = Mh();
  return () => C(void 0, null, function* () {
    o();
    try {
      yield n();
    } catch (r) {
      mw.log.error("[CX] Error while fetching favorite suggestions", r);
    }
    yield e(), k$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Mg = window.Vue.computed, V$ = window.Vue.ref, E$ = window.Vue.watch, L$ = window.Vue.watchEffect, A$ = window.Vuex.useStore, D$ = ["suggestions", "draft", "published"], T$ = () => {
  const e = A$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = B(), { translationsFetched: o } = Wo(), s = V$(null);
  if (D$.includes(t.value))
    s.value = t.value;
  else {
    const a = Mg(
      () => o.value.draft
    ), r = Mg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", E$(a, (c) => {
      c && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return L$(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, B$ = window.Vue.computed, P$ = () => {
  const e = ue();
  return B$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: _0,
        type: "text"
      }
    },
    {
      value: "draft",
      props: {
        label: e.i18n("cx-translation-filter-draft-translations"),
        icon: Ni,
        type: "text"
      }
    },
    {
      value: "published",
      props: {
        label: e.i18n("cx-translation-filter-published-translations"),
        icon: v0,
        type: "text"
      }
    }
  ]);
};
const fe = window.Vue.unref, Be = window.Vue.createVNode, F$ = window.Vue.toDisplayString, M$ = window.Vue.createTextVNode, sn = window.Vue.withCtx, ol = window.Vue.openBlock, Ng = window.Vue.createBlock, Ug = window.Vue.createCommentVNode, N$ = window.Vue.vShow, U$ = window.Vue.withDirectives, I$ = window.Vue.isRef, R$ = window.Vue.createElementBlock, z$ = window.Vue.computed, O$ = window.Vuex.useStore, j$ = window.Codex.CdxButton, H$ = window.Codex.CdxIcon, q$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = Ge(), n = ct(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    $$()();
    const a = O$();
    a.dispatch("translator/fetchTranslatorStats");
    const r = z$(() => a.state.translator.translatorStats), c = T$(), u = P$(), g = yf(), i = (l) => {
      g(l), c.value = l;
    };
    return (l, d) => (ol(), R$("div", null, [
      Be(fe(M), { class: "ma-0 pb-4" }, {
        default: sn(() => [
          Be(fe(j$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: sn(() => [
              Be(fe(H$), {
                class: "me-1",
                icon: fe(wc)
              }, null, 8, ["icon"]),
              M$(" " + F$(l.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Be(fe(M), {
        class: "ma-0",
        align: "start"
      }, {
        default: sn(() => [
          l.$mwui.breakpoint.tabletAndUp ? (ol(), Ng(fe(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: sn(() => [
              Be(fe(ia), {
                id: "dashboard-list-selector--desktop",
                items: fe(u),
                active: fe(c),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Ug("", !0),
          Be(fe(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: sn(() => [
              U$(Be(O2, null, null, 512), [
                [N$, fe(c) === "suggestions"]
              ]),
              Be(D2, {
                active: fe(c) === "suggestions"
              }, null, 8, ["active"]),
              Be(ng, {
                "translation-status": "draft",
                "active-status": fe(c)
              }, null, 8, ["active-status"]),
              Be(ng, {
                "translation-status": "published",
                "active-status": fe(c)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Be(fe(k), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: sn(() => [
              Be(fe(M), {
                class: "ma-0",
                align: "start"
              }, {
                default: sn(() => [
                  Be(fe(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: sn(() => [
                      Be(g$, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Be(fe(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: sn(() => [
                      Be(t$)
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
      l.$mwui.breakpoint.mobile ? (ol(), Ng(y$, {
        key: 0,
        active: fe(c),
        "onUpdate:active": d[0] || (d[0] = (p) => I$(c) ? c.value = p : null),
        items: fe(u)
      }, null, 8, ["active", "items"])) : Ug("", !0)
    ]));
  }
}, G$ = {
  name: "DashboardView",
  components: { CxDashboard: q$ }
}, X$ = window.Vue.resolveComponent, W$ = window.Vue.createVNode, K$ = window.Vue.openBlock, Y$ = window.Vue.createElementBlock, J$ = { class: "cx-translation-dashboard" };
function Q$(e, t, n, o, s, a) {
  const r = X$("cx-dashboard");
  return K$(), Y$("main", J$, [
    W$(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const Ig = /* @__PURE__ */ oe(G$, [["render", Q$]]), Z$ = window.Vue.computed, eV = window.Vuex.useStore, Ie = () => {
  const e = eV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o
  } = B();
  return { sectionSuggestion: Z$(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ) };
}, tV = window.Vuex.useStore, nV = window.Vue.computed, Mt = () => {
  const e = tV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = B();
  return { currentTranslation: nV(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, wo = window.Vue.computed, oV = () => {
  const { sectionSuggestion: e } = Ie(), { targetLanguageURLParameter: t } = B(), { currentTranslation: n } = Mt(), o = wo(
    () => {
      var d, p, m;
      return (m = (p = (d = e.value) == null ? void 0 : d.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = wo(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.missingSectionsCount;
    }
  ), a = wo(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: c } = vn(), u = wo(() => r ? Z.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    c(t.value, null)
  ) : null), g = (d) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : d ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = wo(() => {
    let d;
    return s.value > 1 ? d = [
      "cx-sx-existing-translation-additional-info",
      `"${o.value}"`,
      s.value - 1
    ] : s.value === 1 && a.value > 0 ? d = [
      "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
      `"${o.value}"`
    ] : s.value === 1 && a.value === 0 ? d = [
      "cx-sx-translation-confirmer-action-message-single-missing-none-present",
      `"${o.value}"`
    ] : a.value > 0 ? d = [
      "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
    ] : d = [
      "cx-sx-translation-confirmer-action-message-none-missing-none-present"
    ], d;
  }), l = wo(
    () => {
      var d;
      return !r.value || ((d = e.value) == null ? void 0 : d.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: i,
    getActionButtonLabel: g,
    isProgressiveButton: l,
    targetArticlePath: u
  };
};
function sV(e) {
  return e.$el = $(e), e;
}
function aV(e, t, n, o) {
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
function iV() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function rV(e, t) {
  return C(this, null, function* () {
    yield su(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = sV(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const lV = window.Vue.computed, cV = window.Vue.onMounted, uV = window.Vue.ref;
function dV(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const gV = {
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
    dir: {
      type: String,
      default: "auto"
    }
  },
  emits: ["ready", "close", "edit-completed"],
  setup(e, t) {
    const n = uV(null);
    let o = null;
    const s = lV(() => o.getHtml()), a = () => {
      o.destroy(), n.value.querySelector(".toolbar").innerHTML = "";
    }, u = {
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
    return cV(() => C(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = dV;
      const i = yield rV(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = aV(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = iV, o.focus();
    })), { sxeditor: n };
  }
}, Di = window.Vue.createElementVNode, pV = window.Vue.openBlock, mV = window.Vue.createElementBlock, hV = ["lang", "dir"], fV = /* @__PURE__ */ Di("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ Di("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ Di("div", { class: "toolbar" })
  ])
], -1), wV = ["lang", "dir"];
function vV(e, t, n, o, s, a) {
  return pV(), mV("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    fV,
    Di("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, wV)
  ], 8, hV);
}
const _V = /* @__PURE__ */ oe(gV, [["render", vV]]);
function su() {
  return mw.loader.using("mw.cx3.ve");
}
const SV = window.Vuex.useStore, yV = () => {
  const e = SV();
  return (t, n) => C(void 0, null, function* () {
    const o = e.getters["mediawiki/getPage"](
      t,
      n
    );
    if (!o)
      throw new Error(
        `[CX] No page found for the ${t} language and the ${n} title`
      );
    return yield su(), new Promise((s) => {
      setTimeout(() => {
        const a = ph.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, xV = window.Vuex.useStore, bf = () => {
  const e = xV();
  return (t, n, o, s = null) => C(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield so.fetchPageContent(
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
}, Rg = window.Vue.computed, bV = window.Vuex.useStore, ut = () => {
  const e = bV(), { sectionSuggestion: t } = Ie(), { currentTranslation: n } = Mt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), r = Rg(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), c = Rg(() => {
    var g, i;
    const u = ((g = t.value) == null ? void 0 : g.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: r, currentTargetPage: c };
}, Yi = () => {
  const { currentSourcePage: e } = ut(), t = yV(), n = bf(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: c
  } = B(), u = (l, d) => C(void 0, null, function* () {
    l() || (yield n(
      s.value,
      a.value,
      r.value,
      c.value
    ), jo || (yield t(
      s.value,
      r.value
    ))), d();
  });
  return {
    selectPageSectionByIndex: (l) => {
      const d = () => {
        var m;
        return (m = e.value.sections) == null ? void 0 : m[l];
      };
      return u(d, () => {
        const m = d();
        l === 0 ? m.originalTitle = e.value.title : o(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (l) => u(() => e.value.getSectionByTitle(l), () => {
      o(l);
    })
  };
}, CV = window.Vuex.useStore, Ko = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = B(), a = CV(), r = Ge(), c = () => {
    const l = r.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !a.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return r.getRoutes().find((d) => d.name === l);
  }, u = () => {
    const i = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), l = Z.getCurrentWikiLanguageCode();
    if (!i || t.value === l)
      return !1;
    const d = o.value ? { section: o.value } : {}, p = Z.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      d
    );
    return location.href = p + "#" + c().path, !0;
  }, g = () => {
    location.href = Z.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      o.value ? { sourcesection: o.value } : {}
    );
  };
  return () => {
    if (Z.setCXToken(
      e.value,
      t.value,
      n.value
    ), jo) {
      g();
      return;
    }
    if (u())
      return;
    const l = c();
    r.push({ name: l.name });
  };
}, au = () => {
  const e = ct(), { currentTranslation: t } = Mt();
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
      isLeadSectionTranslation: c,
      sourceSectionTitle: u,
      targetSectionTitle: g
    } = t.value, i = {
      event_type: "dashboard_translation_continue",
      translation_id: n,
      translation_source_language: o,
      translation_source_title: a,
      translation_target_language: s,
      translation_target_title: r,
      translation_type: c ? "article" : "section"
    };
    return u && (i.translation_source_section = u), g && (i.translation_target_section = g), e(i);
  };
}, kV = window.Vue.ref, $V = () => {
  const e = Ge(), { logDashboardTranslationStartEvent: t } = Ki(), n = au(), o = Ko(), { sectionURLParameter: s } = B(), { targetPageExists: a } = vn(), { selectPageSectionByTitle: r } = Yi(), c = () => C(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), u = kV(!1), { currentTranslation: g } = Mt();
  return {
    handlePrimaryButtonClick: () => {
      g.value ? g.value.isArticleTranslation && !jo ? u.value = !0 : (n(), o()) : s.value ? c() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: u
  };
};
const VV = window.Vue.resolveDirective, zg = window.Vue.createElementVNode, Og = window.Vue.withDirectives, EV = window.Vue.unref, LV = window.Vue.withCtx, AV = window.Vue.openBlock, DV = window.Vue.createBlock, TV = {
  href: "",
  target: "_blank"
}, BV = window.Codex.CdxDialog, PV = {
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
    const n = e, o = t, s = (g) => o("update:modelValue", g), a = ue(), r = {
      label: a.i18n(
        "cx-unreviewed-translation-dialog-review-translation-button-label"
      ),
      actionType: "progressive"
    }, c = {
      label: a.i18n("cx-unreviewed-translation-dialog-close-button-label")
    };
    function u() {
      window.open(n.targetUrl, "_blank"), s(!1);
    }
    return (g, i) => {
      const l = VV("i18n");
      return AV(), DV(EV(BV), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: g.$i18n("cx-unreviewed-translation-dialog-title"),
        "use-close-button": !0,
        "primary-action": r,
        "default-action": c,
        "onUpdate:open": i[0] || (i[0] = (d) => s(d)),
        onPrimary: u,
        onDefault: i[1] || (i[1] = (d) => s(!1))
      }, {
        default: LV(() => [
          Og(zg("p", null, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Og(zg("a", TV, null, 512), [
            [l, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
};
const we = window.Vue.unref, FV = window.Vue.resolveDirective, _s = window.Vue.createElementVNode, jg = window.Vue.withDirectives, Ss = window.Vue.toDisplayString, ys = window.Vue.openBlock, sl = window.Vue.createElementBlock, al = window.Vue.createCommentVNode, mt = window.Vue.createVNode, $t = window.Vue.withCtx, il = window.Vue.createTextVNode, MV = window.Vue.withModifiers, Hg = window.Vue.createBlock, NV = window.Vue.Fragment, UV = { class: "sx-translation-confirmer-body pb-4" }, IV = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, RV = ["textContent"], zV = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, OV = ["href"], jV = ["textContent"], Za = window.Vue.computed, HV = window.Vue.inject, qg = window.Vue.ref, qV = window.Vue.watchEffect, GV = window.Vuex.useStore, rl = window.Codex.CdxButton, XV = window.Codex.CdxIcon, WV = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = Ge(), o = GV();
    HV("colors");
    const { sectionSuggestion: s } = Ie(), { targetLanguageAutonym: a } = Ae(o), { sectionURLParameter: r } = B(), { logDashboardTranslationStartEvent: c } = Ki(), u = Ko(), { handlePrimaryButtonClick: g, translationConfirmationDialogOn: i } = $V(), l = qg(!1), d = qg(null), p = () => C(this, null, function* () {
      let X = !0;
      try {
        X = yield _t.checkUnreviewedTranslations();
      } catch (Y) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          Y
        );
      }
      X !== !0 && (l.value = !0, d.value = X.targetUrl);
    }), m = () => C(this, null, function* () {
      yield p(), !l.value && (c(), u());
    }), h = () => C(this, null, function* () {
      yield p(), !l.value && g();
    }), f = t;
    qV(() => {
      i.value && (f("open-translation-confirmation-dialog"), i.value = !1);
    });
    const {
      actionInformationMessageArgs: v,
      getActionButtonLabel: w,
      isProgressiveButton: y,
      targetArticlePath: S
    } = oV(), x = ue(), L = Za(
      () => x.i18n(w(!!r.value))
    ), b = Za(
      () => x.i18n(...v.value)
    ), N = () => C(this, null, function* () {
      yield p(), !l.value && n.push({ name: "sx-section-selector" });
    }), V = Za(() => {
      var X, Y;
      return r.value && !!((Y = (X = s.value) == null ? void 0 : X.sourceSections) != null && Y.length);
    }), { targetPageExists: T } = vn(), I = Za(() => !r.value && T.value && jo);
    return (X, Y) => {
      const ke = FV("i18n");
      return ys(), sl(NV, null, [
        _s("section", UV, [
          we(r) ? (ys(), sl("section", IV, [
            jg(_s("h6", null, null, 512), [
              [ke, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            _s("h5", {
              class: "ma-0",
              textContent: Ss(we(r))
            }, null, 8, RV)
          ])) : we(T) ? (ys(), sl("section", zV, [
            mt(we(M), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: $t(() => [
                jg(mt(we(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [ke, [we(a)], "cx-sx-existing-translation-status"]
                ]),
                mt(we(k), { shrink: "" }, {
                  default: $t(() => [
                    _s("a", {
                      href: we(S),
                      target: "_blank"
                    }, [
                      mt(we(XV), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: we(Kc)
                      }, null, 8, ["icon"])
                    ], 8, OV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            mt(we(M), { class: "ma-0" }, {
              default: $t(() => [
                mt(we(k), null, {
                  default: $t(() => [
                    _s("span", {
                      textContent: Ss(b.value)
                    }, null, 8, jV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : al("", !0),
          mt(we(M), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: $t(() => [
              V.value ? (ys(), Hg(we(k), {
                key: 0,
                shrink: ""
              }, {
                default: $t(() => [
                  mt(we(rl), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: MV(N, ["stop"])
                  }, {
                    default: $t(() => [
                      il(Ss(X.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : al("", !0),
              I.value ? (ys(), Hg(we(k), {
                key: 1,
                shrink: ""
              }, {
                default: $t(() => [
                  mt(we(rl), {
                    size: "large",
                    onClick: m
                  }, {
                    default: $t(() => [
                      il(Ss(X.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : al("", !0),
              mt(we(k), { shrink: "" }, {
                default: $t(() => [
                  mt(we(rl), {
                    weight: "primary",
                    size: "large",
                    action: we(y) ? "progressive" : "default",
                    onClick: h
                  }, {
                    default: $t(() => [
                      il(Ss(L.value), 1)
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
        mt(PV, {
          modelValue: l.value,
          "onUpdate:modelValue": Y[0] || (Y[0] = (Se) => l.value = Se),
          "target-url": d.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const ll = window.Vue.unref, KV = window.Vue.openBlock, YV = window.Vue.createBlock, JV = window.Vue.computed, Cf = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = ua(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = B(), { currentLanguageTitleGroup: s } = vn(), a = JV(
      () => {
        var g;
        return ((g = s.value) == null ? void 0 : g.titles.map((i) => i.lang)) || [];
      }
    ), r = Cy(), c = (g) => r(g, o.value), u = (g) => r(n.value, g);
    return (g, i) => (KV(), YV(Fi, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": ll(t),
      "selected-source-language": ll(n),
      "selected-target-language": ll(o),
      "onUpdate:selectedSourceLanguage": c,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, cl = window.Vue.computed, Gg = window.Vue.ref, QV = window.Vue.watchEffect, ZV = () => {
  const { currentSourcePage: e } = ut(), { sectionSuggestion: t } = Ie(), n = ue(), { sectionURLParameter: o } = B(), s = Gg(null), a = Gg([]);
  QV(() => C(void 0, null, function* () {
    var g;
    if (t.value && o.value)
      a.value = [o.value];
    else if (t.value) {
      const { missingSections: i } = t.value;
      a.value = Object.keys(i);
    } else
      e.value && !jo ? a.value = [No.LEAD_SECTION_DUMMY_TITLE] : a.value = [];
    a.value.length ? s.value = yield Uk(
      e.value,
      a.value
    ) : s.value = ((g = e.value) == null ? void 0 : g.articleSize) || null;
  }));
  const r = cl(() => vf(s.value || 0)), c = cl(() => {
    if (!t.value && !e.value || !r.value)
      return "";
    const g = Ik(
      r.value,
      a.value
    );
    return n.i18n(...g);
  }), u = cl(
    () => _f(s.value)
  );
  return { timeEstimateMessage: c, isQuickTranslation: u };
};
const be = window.Vue.unref, ul = window.Vue.toDisplayString, $n = window.Vue.createElementVNode, Ot = window.Vue.createVNode, vo = window.Vue.withCtx, e4 = window.Vue.resolveDirective, t4 = window.Vue.withDirectives, n4 = window.Vue.normalizeClass, Xg = window.Vue.openBlock, o4 = window.Vue.createElementBlock, s4 = window.Vue.createCommentVNode, a4 = window.Vue.createBlock, i4 = ["textContent"], r4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, l4 = ["textContent"], c4 = { class: "pe-3" }, u4 = ["textContent"], d4 = window.Codex.CdxButton, xs = window.Codex.CdxIcon, Gn = window.Vue.computed, g4 = window.Vuex.useStore, p4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = g4(), { currentSourcePage: n } = ut(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s,
      pageURLParameter: a
    } = B(), r = Gn(() => t.state.suggestions.favorites || []), c = Gn(
      () => r.value.some(
        (S) => a.value === S.title && o.value === S.sourceLanguage && s.value === S.targetLanguage
      )
    ), { markFavoriteSuggestion: u, removeFavoriteSuggestion: g } = ou(), i = () => u(
      a.value,
      o.value,
      s.value
    ), l = () => g(
      new Uo({
        title: a.value,
        sourceLanguage: o.value,
        targetLanguage: s.value
      })
    ), d = Gn(
      () => c.value ? Ch : kh
    ), p = Gn(
      () => c.value ? l : i
    ), m = Gn(
      () => Z.getPageUrl(o.value || "", a.value || "")
    ), h = Gn(
      () => {
        var S;
        return (((S = n.value) == null ? void 0 : S.langLinksCount) || 0) + 1;
      }
    ), f = (S) => {
      const x = [
        { value: 1e9, suffix: "B" },
        // 1 billion
        { value: 1e6, suffix: "M" },
        // 1 million
        { value: 1e3, suffix: "K" }
        // 1 thousand
      ];
      for (let L = 0; L < x.length; L++)
        if (S >= x[L].value)
          return (S / x[L].value).toFixed(1).replace(/\.0$/, "") + x[L].suffix;
      return S.toString();
    }, v = Gn(() => {
      var x;
      const S = Object.values(((x = n.value) == null ? void 0 : x.pageviews) || {}).reduce(
        (L, b) => L + b,
        0
      );
      return f(S);
    }), { timeEstimateMessage: w, isQuickTranslation: y } = ZV();
    return (S, x) => {
      const L = e4("i18n");
      return Xg(), a4(be(M), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: vo(() => [
          Ot(be(k), null, {
            default: vo(() => [
              Ot(be(M), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: vo(() => [
                  Ot(be(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: m.value,
                    target: "_blank"
                  }, {
                    default: vo(() => [
                      $n("h5", {
                        class: "ma-0 me-1",
                        textContent: ul(be(a))
                      }, null, 8, i4),
                      Ot(be(xs), {
                        size: "x-small",
                        icon: be(Kc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  Ot(be(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: vo(() => [
                      Ot(be(d4), {
                        class: "px-0",
                        weight: "quiet",
                        action: c.value ? "progressive" : "default",
                        "aria-label": S.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: p.value
                      }, {
                        default: vo(() => [
                          Ot(be(xs), { icon: d.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              $n("div", r4, [
                $n("div", null, [
                  $n("span", null, [
                    Ot(be(xs), {
                      icon: be(Vh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    $n("span", {
                      class: "pe-3",
                      textContent: ul(h.value)
                    }, null, 8, l4)
                  ]),
                  $n("span", null, [
                    Ot(be(xs), {
                      icon: be(qS),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    t4($n("span", c4, null, 512), [
                      [L, [v.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                be(w) ? (Xg(), o4("span", {
                  key: 0,
                  class: n4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": be(y)
                  }])
                }, [
                  Ot(be(xs), {
                    icon: be(XS),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  $n("span", {
                    textContent: ul(be(w))
                  }, null, 8, u4)
                ], 2)) : s4("", !0)
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
const m4 = window.Vue.resolveDirective, Xn = window.Vue.createElementVNode, ei = window.Vue.withDirectives, h4 = window.Vue.toDisplayString, f4 = window.Vue.createTextVNode, dl = window.Vue.unref, gl = window.Vue.withCtx, pl = window.Vue.openBlock, ml = window.Vue.createBlock;
window.Vue.createCommentVNode;
const w4 = { class: "pa-4" }, v4 = { class: "flex pt-2" }, _4 = window.Codex.CdxButton, S4 = window.Vue.ref, y4 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Ko(), a = au(), r = S4(!1), { currentTranslation: c } = Mt(), u = () => C(this, null, function* () {
      r.value = !0;
      let g = !1;
      try {
        g = yield _t.splitTranslation(
          c.value.translationId
        );
      } catch (i) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          i
        );
      }
      r.value = !1, g && (a(), s(), o());
    });
    return (g, i) => {
      const l = m4("i18n");
      return pl(), ml(dl(St), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: g.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: gl(() => [
          Xn("div", v4, [
            r.value ? (pl(), ml(dl(rt), { key: 1 })) : (pl(), ml(dl(_4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: gl(() => [
                f4(h4(g.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: gl(() => [
          Xn("div", w4, [
            ei(Xn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            ei(Xn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Xn("p", null, [
              ei(Xn("strong", null, null, 512), [
                [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            ei(Xn("p", null, null, 512), [
              [l, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, x4 = window.Vuex.useStore;
let ti = [];
const iu = () => {
  const e = x4();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || ti.includes(o) ? Promise.resolve() : (ti.push(o), so.fetchLanguageTitles(t, n).then((s) => {
      ti = ti.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, b4 = window.Vue.ref, _o = b4(null), kf = () => {
  const e = () => C(void 0, null, function* () {
    var n, o;
    _o.value || (yield ji.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, _o.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        _o.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = _o.value) == null ? void 0 : n.refreshAt) <= t ? (_o.value = null, e()) : (o = _o.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const Wg = window.Vue.resolveDirective, ni = window.Vue.createElementVNode, Kg = window.Vue.withDirectives, Vn = window.Vue.unref, oi = window.Vue.withCtx, an = window.Vue.createVNode, hl = window.Vue.openBlock, Yg = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const C4 = window.Vue.createBlock, k4 = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, $4 = { class: "mb-0" }, V4 = { class: "sx-translation-confirmer__article-image flex justify-center" }, E4 = ["src"], L4 = { class: "ma-3" }, Jg = window.Vue.computed, A4 = window.Vue.inject, D4 = window.Vue.onBeforeUnmount, T4 = window.Vue.ref, B4 = window.Vuex.useStore, P4 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = B4(), { currentSourcePage: n } = ut(), { previousRoute: o } = Ae(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: c,
      clearTranslationURLParameters: u
    } = B(), g = A4("breakpoints"), i = Jg(() => g.value.nextBreakpoint), l = Jg(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: d } = Wo(), p = iu();
    d("draft"), p(s.value, r.value), su(), kf()(), Dh()(a.value);
    const f = Ge(), v = () => {
      const y = ["dashboard", "sx-article-search"];
      !o.value || !y.includes(o.value) ? f.push({ name: "dashboard" }) : f.push({ name: o.value });
    };
    D4(() => {
      const y = f.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && u();
    });
    const w = T4(!1);
    return (y, S) => {
      const x = Wg("i18n"), L = Wg("i18n-html");
      return hl(), Yg("section", k4, [
        an(Vn(M), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: oi(() => [
            an(Vn(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: oi(() => [
                Kg(ni("h5", $4, null, 512), [
                  [x, void 0, "cx-sx-translation-confirmer-title"]
                ])
              ]),
              _: 1
            }),
            an(Vn(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: oi(() => [
                an(Vn(Me), {
                  class: "pa-0",
                  type: "icon",
                  icon: Vn(ra),
                  "icon-size": 20,
                  onClick: v
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ni("div", V4, [
          l.value ? (hl(), Yg("img", {
            key: 0,
            src: l.value
          }, null, 8, E4)) : (hl(), C4(Vn(qe), {
            key: 1,
            size: "120",
            icon: Vn(Km),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        an(p4),
        an(Cf),
        an(WV, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (b) => w.value = !0)
        }),
        an(Vn(M), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: oi(() => [
            ni("p", L4, [
              Kg(ni("small", null, null, 512), [
                [L, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        an(y4, {
          modelValue: w.value,
          "onUpdate:modelValue": S[1] || (S[1] = (b) => w.value = b)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const F4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: P4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, M4 = window.Vue.resolveComponent, N4 = window.Vue.createVNode, U4 = window.Vue.normalizeClass, I4 = window.Vue.openBlock, R4 = window.Vue.createElementBlock;
function z4(e, t, n, o, s, a) {
  const r = M4("sx-translation-confirmer");
  return I4(), R4("main", {
    class: U4(["sx-translation-confirmer-view", a.classes])
  }, [
    N4(r)
  ], 2);
}
const O4 = /* @__PURE__ */ oe(F4, [["render", z4]]);
const j4 = window.Vue.toDisplayString, Qg = window.Vue.unref, H4 = window.Vue.createVNode, q4 = window.Vue.createTextVNode, G4 = window.Vue.createElementVNode, X4 = window.Vue.openBlock, W4 = window.Vue.createElementBlock, K4 = { class: "sx-section-selector-view-article-item" }, Y4 = ["href"], J4 = window.Codex.CdxIcon, Zg = {
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
    return (t, n) => (X4(), W4("span", K4, [
      G4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        q4(j4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        H4(Qg(J4), {
          size: "x-small",
          icon: Qg(Kc)
        }, null, 8, ["icon"])
      ], 8, Y4)
    ]));
  }
};
const Q4 = window.Vue.resolveDirective, si = window.Vue.createElementVNode, fl = window.Vue.withDirectives, Wn = window.Vue.unref, Z4 = window.Vue.toDisplayString, ai = window.Vue.withCtx, bs = window.Vue.createVNode, eE = window.Vue.openBlock, tE = window.Vue.createElementBlock, nE = { class: "sx-section-selector__header pa-4" }, oE = { class: "sx-section-selector__header-text ma-0" }, sE = ["textContent"], aE = { class: "pt-0 ma-0" }, iE = { class: "ma-0" }, rE = window.Codex.CdxButton, lE = window.Codex.CdxIcon, cE = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Ie();
    return (n, o) => {
      const s = Q4("i18n");
      return eE(), tE("div", nE, [
        bs(Wn(M), { class: "ma-0 pb-3" }, {
          default: ai(() => [
            bs(Wn(k), null, {
              default: ai(() => {
                var a;
                return [
                  fl(si("h6", oE, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  si("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: Z4((a = Wn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, sE)
                ];
              }),
              _: 1
            }),
            bs(Wn(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: ai(() => [
                bs(Wn(rE), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: ai(() => [
                    bs(Wn(lE), { icon: Wn(Xo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        fl(si("h4", aE, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        fl(si("p", iE, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, uE = window.Vue.renderList, dE = window.Vue.Fragment, wl = window.Vue.openBlock, ep = window.Vue.createElementBlock, gE = window.Vue.renderSlot, ii = window.Vue.unref, tp = window.Vue.createVNode, np = window.Vue.withCtx, pE = window.Vue.createBlock, mE = { class: "sx-section-selector__sections-list ma-0 pa-0" }, hE = window.Codex.CdxButton, fE = window.Codex.CdxIcon, $f = {
  __name: "SXSectionSelectorSectionList",
  props: {
    /**
     * @type {{targetTitle: string, sourceTitle: string}[]}
     */
    sections: {
      type: Array,
      required: !0
    }
  },
  emits: ["select-section"],
  setup(e) {
    return (t, n) => (wl(), ep("ul", mE, [
      (wl(!0), ep(dE, null, uE(e.sections, (o) => (wl(), pE(ii(M), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: np(() => [
          tp(ii(hE), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: np(() => [
              gE(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              tp(ii(fE), { icon: ii(pa) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, wE = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const vE = window.Vue.resolveDirective, ri = window.Vue.createElementVNode, vl = window.Vue.withDirectives, Vt = window.Vue.unref, op = window.Vue.toDisplayString, So = window.Vue.withCtx, _l = window.Vue.openBlock, sp = window.Vue.createBlock;
window.Vue.createCommentVNode;
const Cs = window.Vue.createVNode, _E = window.Vue.createTextVNode, SE = window.Vue.createElementBlock, yE = { class: "sx-section-selector__missing-sections py-2" }, xE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, bE = ["lang", "dir", "textContent"], ap = window.Vue.computed, CE = window.Codex.CdxButton, kE = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Ie(), { targetLanguageURLParameter: n } = B(), o = ap(() => R.getAutonym(n.value)), s = ap(
      () => {
        var a;
        return Object.keys(((a = t.value) == null ? void 0 : a.missingSections) || {}).length === 0;
      }
    );
    return (a, r) => {
      const c = vE("i18n");
      return _l(), SE("section", yE, [
        vl(ri("h4", xE, null, 512), [
          [c, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (_l(), sp(Vt(M), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: So(() => [
            Cs(Vt(k), {
              class: "py-6 justify-center",
              innerHTML: Vt(wE)
            }, null, 8, ["innerHTML"]),
            Cs(Vt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: So(() => [
                vl(ri("h6", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            Cs(Vt(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: So(() => [
                vl(ri("p", null, null, 512), [
                  [c, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            Cs(Vt(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: So(() => [
                Cs(Vt(CE), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: r[1] || (r[1] = (u) => a.$emit("close"))
                }, {
                  default: So(() => [
                    _E(op(a.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (_l(), sp($f, {
          key: 0,
          sections: Vt(t).orderedMissingSections,
          onSelectSection: r[0] || (r[0] = (u) => a.$emit("select-section", u))
        }, {
          default: So(({ sourceSection: u }) => {
            var g, i;
            return [
              ri("h5", {
                class: "ma-0",
                lang: (g = Vt(t)) == null ? void 0 : g.sourceLanguage,
                dir: Vt(R.getDir)((i = Vt(t)) == null ? void 0 : i.sourceLanguage),
                textContent: op(u)
              }, null, 8, bE)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const $E = window.Vue.resolveDirective, li = window.Vue.createElementVNode, VE = window.Vue.withDirectives, Kn = window.Vue.unref, ip = window.Vue.toDisplayString, EE = window.Vue.withCtx, LE = window.Vue.createVNode, AE = window.Vue.openBlock, DE = window.Vue.createElementBlock, TE = { class: "sx-section-selector__present-sections py-2" }, BE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, PE = { class: "sx-section-selector__present-section-button-content" }, FE = ["lang", "dir", "textContent"], ME = ["lang", "dir", "textContent"], NE = window.Vue.computed, rp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Ie(), { targetLanguageURLParameter: n } = B(), o = NE(() => R.getAutonym(n.value));
    return (s, a) => {
      var c;
      const r = $E("i18n");
      return AE(), DE("section", TE, [
        VE(li("h4", BE, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        LE($f, {
          sections: ((c = Kn(t)) == null ? void 0 : c.orderedPresentSections) || [],
          onSelectSection: a[0] || (a[0] = (u) => s.$emit("select-section", u))
        }, {
          default: EE(({ sourceSection: u, targetSection: g }) => {
            var i, l, d, p;
            return [
              li("div", PE, [
                li("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = Kn(t)) == null ? void 0 : i.sourceLanguage,
                  dir: Kn(R.getDir)((l = Kn(t)) == null ? void 0 : l.sourceLanguage),
                  textContent: ip(u)
                }, null, 8, FE),
                li("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (d = Kn(t)) == null ? void 0 : d.targetLanguage,
                  dir: Kn(R.getDir)((p = Kn(t)) == null ? void 0 : p.targetLanguage),
                  textContent: ip(g)
                }, null, 8, ME)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Pe = window.Vue.createVNode, Sl = window.Vue.openBlock, lp = window.Vue.createBlock, cp = window.Vue.createCommentVNode, UE = window.Vue.resolveDirective, En = window.Vue.createElementVNode, ks = window.Vue.withDirectives, et = window.Vue.unref, rn = window.Vue.withCtx, IE = window.Vue.normalizeClass, up = window.Vue.toDisplayString, dp = window.Vue.createTextVNode, RE = window.Vue.createElementBlock, zE = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, OE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, jE = { class: "sx-section-selector__additional-consideration-title" }, HE = { href: "#" }, qE = { class: "sx-section-selector__additional-consideration-title" }, GE = { href: "#" }, $s = window.Vue.computed, XE = window.Vue.inject, WE = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = XE("breakpoints"), n = $s(() => t.value.desktopAndUp), { sectionSuggestion: o } = Ie(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: c
    } = B(), u = $s(() => R.getAutonym(s.value)), g = $s(() => R.getAutonym(a.value)), i = $s(
      () => {
        var y;
        return Z.getPageUrl(s.value, (y = o.value) == null ? void 0 : y.sourceTitle);
      }
    ), l = $s(
      () => {
        var y;
        return Z.getPageUrl(a.value, (y = o.value) == null ? void 0 : y.targetTitle);
      }
    ), d = Ge(), p = () => {
      r(), d.push({ name: "dashboard" });
    }, { currentTranslation: m } = Mt(), h = Ko(), f = au(), { selectPageSectionByTitle: v } = Yi(), w = (y) => {
      c(y), m.value ? (f(), h()) : (v(y), d.push({ name: "sx-content-comparator" }));
    };
    return (y, S) => {
      const x = UE("i18n");
      return Sl(), RE("section", zE, [
        Pe(cE, { onClose: p }),
        Pe(Cf),
        Pe(et(M), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: rn(() => [
            Pe(et(k), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: rn(() => [
                Pe(kE, {
                  onSelectSection: w,
                  onClose: p
                }),
                n.value ? cp("", !0) : (Sl(), lp(rp, {
                  key: 0,
                  onSelectSection: w
                })),
                En("section", {
                  class: IE(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  ks(En("h4", OE, null, 512), [
                    [x, [
                      g.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Pe(et(M), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: rn(() => [
                      Pe(et(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: rn(() => [
                          Pe(Zg, {
                            path: i.value,
                            autonym: u.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Pe(et(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: rn(() => [
                          Pe(Zg, {
                            path: l.value,
                            autonym: g.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 2),
                Pe(et(M), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: rn(() => [
                    Pe(et(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: rn(() => [
                        En("h6", jE, [
                          Pe(et(qe), {
                            icon: et(V0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          dp(" " + up(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        ks(En("p", null, null, 512), [
                          [x, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        ks(En("a", HE, null, 512), [
                          [x, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Pe(et(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: rn(() => [
                        En("h6", qE, [
                          Pe(et(qe), {
                            icon: et($0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          dp(" " + up(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        ks(En("p", null, null, 512), [
                          [x, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        ks(En("a", GE, null, 512), [
                          [x, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
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
            n.value ? (Sl(), lp(et(k), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: rn(() => [
                Pe(rp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: w
                })
              ]),
              _: 1
            })) : cp("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, KE = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: WE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, YE = window.Vue.resolveComponent, JE = window.Vue.createVNode, QE = window.Vue.normalizeClass, ZE = window.Vue.openBlock, e3 = window.Vue.createElementBlock;
function t3(e, t, n, o, s, a) {
  const r = YE("sx-section-selector");
  return ZE(), e3("main", {
    class: QE(["sx-section-selector-view", a.classes])
  }, [
    JE(r)
  ], 2);
}
const n3 = /* @__PURE__ */ oe(KE, [["render", t3]]), o3 = window.Vue.ref, Vf = o3("expand"), s3 = (e) => {
  Vf.value = e;
}, ru = () => ({
  existingSectionPublishOption: Vf,
  setExistingSectionPublishOption: s3
}), Vs = window.Vue.computed, a3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    sectionURLParameter: n
  } = B(), o = Vs(
    () => R.getAutonym(e.value)
  ), s = Vs(
    () => R.getAutonym(t.value)
  ), { sectionSuggestion: a } = Ie(), { existingSectionPublishOption: r } = ru(), c = Vs(
    () => {
      var i;
      return !!((i = a.value) != null && i.presentSections.hasOwnProperty(n.value));
    }
  ), u = Vs(
    () => c.value && r.value === "expand"
  ), g = ue();
  return Vs(() => {
    const i = {
      value: "source_section",
      props: {
        label: g.i18n(
          "cx-sx-content-comparator-source-selector-title",
          o.value
        ),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    };
    let l;
    switch (!0) {
      case u.value:
        l = {
          value: "target_section",
          props: {
            label: g.i18n(
              "cx-sx-content-comparator-target-selector-target-section-title",
              s.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
        break;
      default:
        l = {
          value: "target_article",
          props: {
            label: g.i18n(
              "cx-sx-content-comparator-target-selector-full-article-title",
              s.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
    }
    return [i, l];
  });
};
const gp = window.Vue.unref, i3 = window.Vue.createVNode, r3 = window.Vue.openBlock, l3 = window.Vue.createElementBlock, c3 = { class: "sx-content-comparator__content-type-selector" }, u3 = window.Vue.watchEffect, d3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = a3();
    return u3(() => {
      a.value.map((c) => c.value).includes(n.selection) || s(a.value[0].value);
    }), (r, c) => (r3(), l3("div", c3, [
      i3(gp(ia), {
        items: gp(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Es = window.Vue.computed, g3 = window.Vuex.useStore, te = () => {
  const e = g3(), { currentSourcePage: t, currentTargetPage: n } = ut(), { currentMTProvider: o } = Ae(e), { sectionURLParameter: s } = B(), a = Es(() => {
    var i, l;
    return s.value ? (l = t.value) == null ? void 0 : l.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = Es(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), c = Es(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = Es(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), g = Es(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: c,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: g
  };
}, Ls = window.Vue.computed, lu = () => {
  const { currentTargetPage: e } = ut(), { sectionSuggestion: t } = Ie(), { sectionURLParameter: n } = B(), o = Ls(
    () => t.value.missingSections[n.value] || t.value.presentSections[n.value] || ""
  ), s = Ls(
    () => {
      var g;
      return (((g = a.value) == null ? void 0 : g.title) || "").replace(/ /g, "_");
    }
  ), a = Ls(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.getSectionByTitle(o.value);
    }
  ), { sourceSection: r } = te(), c = Ls(() => {
    var g;
    return (g = r.value) == null ? void 0 : g.html;
  }), u = Ls(() => {
    var g;
    return (g = a.value) == null ? void 0 : g.html;
  });
  return {
    activeSectionTargetTitle: o,
    sourceSectionContent: c,
    targetSectionAnchor: s,
    targetSectionContent: u
  };
};
const ci = window.Vue.createVNode, p3 = window.Vue.toDisplayString, m3 = window.Vue.createElementVNode, Ln = window.Vue.unref, ui = window.Vue.withCtx, yl = window.Vue.openBlock, xl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const h3 = window.Vue.normalizeClass, f3 = ["lang", "dir", "textContent"], pp = window.Vue.ref, bl = window.Vue.computed, w3 = window.Vue.onMounted, v3 = {
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
    const n = e, o = t, s = pp(!1), { sectionSuggestion: a } = Ie(), { sectionURLParameter: r } = B(), c = bl(
      () => (r.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:contentTypeSelection", m), { activeSectionTargetTitle: g, targetSectionAnchor: i } = lu(), l = bl(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: r.value,
            path: `${Z.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${c.value}`,
            lang: a.value.sourceLanguage,
            dir: R.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: d.value,
            lang: a.value.targetLanguage,
            dir: R.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: g.value,
            path: `${d.value}#${i.value}`
          };
      }
    }), d = bl(
      () => Z.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = pp(null);
    return w3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (yl(), xl(Ln(M), {
      ref_key: "contentHeader",
      ref: p,
      class: h3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: ui(() => [
        ci(d3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        ci(Ln(M), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: ui(() => [
            ci(Ln(k), null, {
              default: ui(() => [
                m3("h3", {
                  lang: l.value.lang,
                  dir: l.value.dir,
                  class: "ma-0 pa-0",
                  textContent: p3(l.value.title)
                }, null, 8, f3)
              ]),
              _: 1
            }),
            ci(Ln(k), { shrink: "" }, {
              default: ui(() => [
                s.value ? (yl(), xl(Ln(Me), {
                  key: 0,
                  icon: Ln(Ni),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (yl(), xl(Ln(Me), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: Ln(Xm),
                  type: "icon",
                  href: l.value.path,
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
}, di = window.Vue.unref, mp = window.Vue.createVNode, _3 = window.Vue.openBlock, S3 = window.Vue.createElementBlock, y3 = { class: "sx-content-comparator__header-navigation flex items-center" }, x3 = window.Vue.computed, b3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = B(), o = x3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Yi(), a = () => {
      const c = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[c];
      s(u);
    }, r = () => {
      const c = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[c];
      s(u);
    };
    return (c, u) => (_3(), S3("div", y3, [
      mp(di(Me), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: di(x0),
        onClick: a
      }, null, 8, ["icon"]),
      mp(di(Me), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: di(y0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const hp = window.Vue.toDisplayString, C3 = window.Vue.resolveDirective, Cl = window.Vue.withDirectives, yo = window.Vue.openBlock, gi = window.Vue.createElementBlock, k3 = window.Vue.createCommentVNode, $3 = window.Vue.createTextVNode, fp = window.Vue.createElementVNode, jt = window.Vue.unref, V3 = window.Vue.normalizeClass, kl = window.Vue.withCtx, $l = window.Vue.createVNode, wp = window.Vue.createBlock, E3 = { class: "sx-content-comparator-header__mapped-section" }, L3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, A3 = { key: 0 }, D3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, T3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, vp = window.Vue.computed, B3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { sectionSuggestion: t } = Ie(), { activeSectionTargetTitle: n } = lu(), o = ue(), { existingSectionPublishOption: s, setExistingSectionPublishOption: a } = ru(), r = vp(
      () => s.value === "new"
    ), c = vp(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        R.getAutonym(t.value.targetLanguage)
      )
    );
    return (u, g) => {
      const i = C3("i18n");
      return yo(), gi("div", E3, [
        $l(jt(M), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: kl(() => [
            $l(jt(k), { grow: "" }, {
              default: kl(() => [
                fp("h6", L3, [
                  $3(hp(c.value) + " ", 1),
                  r.value ? Cl((yo(), gi("span", A3, null, 512)), [
                    [i, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : k3("", !0)
                ]),
                fp("h6", {
                  class: V3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": r.value
                  }])
                }, hp(jt(n)), 3)
              ]),
              _: 1
            }),
            $l(jt(k), { shrink: "" }, {
              default: kl(() => [
                r.value ? (yo(), wp(jt(Me), {
                  key: 1,
                  class: "pa-0",
                  icon: jt(A0),
                  type: "icon",
                  onClick: g[1] || (g[1] = (l) => jt(a)("expand"))
                }, null, 8, ["icon"])) : (yo(), wp(jt(Me), {
                  key: 0,
                  class: "pa-0",
                  icon: jt(Gm),
                  type: "icon",
                  onClick: g[0] || (g[0] = (l) => jt(a)("new"))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        r.value ? Cl((yo(), gi("p", T3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : Cl((yo(), gi("p", D3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const Te = window.Vue.unref, xo = window.Vue.createVNode, _p = window.Vue.toDisplayString, hn = window.Vue.createElementVNode, Vl = window.Vue.withCtx, P3 = window.Vue.resolveDirective, Sp = window.Vue.withDirectives, El = window.Vue.openBlock, yp = window.Vue.createBlock, xp = window.Vue.createCommentVNode, F3 = window.Vue.createElementBlock, M3 = { class: "sx-content-comparator__header pa-4" }, N3 = { class: "row my-1 py-2 mx-0 gap-6" }, U3 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, I3 = { class: "sx-content-comparator-header__titles shrink" }, R3 = ["lang", "dir"], z3 = ["lang", "dir"], O3 = { class: "py-2 mb-1" }, j3 = /* @__PURE__ */ hn("br", null, null, -1), As = window.Vue.computed, H3 = window.Vue.inject, q3 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = B(), { sourceSection: n } = te(), { sectionSuggestion: o } = Ie(), s = As(
      () => {
        var g;
        return (g = o.value) == null ? void 0 : g.missingSections.hasOwnProperty(t.value);
      }
    ), a = As(
      () => {
        var g;
        return (g = o.value) == null ? void 0 : g.presentSections.hasOwnProperty(t.value);
      }
    ), r = As(() => {
      var g;
      return (g = n.value) == null ? void 0 : g.html;
    }), c = As(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]), u = H3("breakpoints");
    return As(() => u.value.mobile), (g, i) => {
      const l = P3("i18n");
      return El(), F3("div", M3, [
        xo(Te(Me), {
          class: "py-2 pa-0",
          icon: Te(b0),
          label: g.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: i[0] || (i[0] = (d) => g.$emit("close"))
        }, null, 8, ["icon", "label"]),
        hn("div", N3, [
          hn("div", U3, [
            hn("div", I3, [
              hn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Te(o).sourceLanguage,
                dir: Te(R.getDir)(Te(o).sourceLanguage)
              }, _p(Te(o).sourceTitle), 9, R3),
              hn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Te(o).sourceLanguage,
                dir: Te(R.getDir)(Te(o).sourceLanguage)
              }, _p(Te(t)), 9, z3)
            ]),
            xo(b3, { "section-source-titles": c.value }, null, 8, ["section-source-titles"])
          ]),
          hn("div", O3, [
            xo(Te(Me), {
              icon: Te(Ni),
              progressive: "",
              label: g.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: i[1] || (i[1] = (d) => g.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        s.value ? (El(), yp(Te(M), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: Vl(() => [
            xo(Te(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: Vl(() => [
                xo(Te(qe), { icon: Te(E0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            xo(Te(k), { class: "ma-0" }, {
              default: Vl(() => [
                Sp(hn("strong", null, null, 512), [
                  [l, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                j3,
                Sp(hn("span", null, null, 512), [
                  [l, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : xp("", !0),
        a.value ? (El(), yp(B3, { key: 1 })) : xp("", !0)
      ]);
    };
  }
};
const bp = window.Vue.toDisplayString, G3 = window.Vue.createElementVNode, Cp = window.Vue.openBlock, kp = window.Vue.createElementBlock, X3 = window.Vue.createCommentVNode, W3 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, K3 = ["textContent"], Y3 = ["textContent"], Ef = {
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
    return (t, n) => (Cp(), kp("section", W3, [
      G3("h5", {
        textContent: bp(e.placeholderTitle)
      }, null, 8, K3),
      e.placeholderSubtitle ? (Cp(), kp("p", {
        key: 0,
        textContent: bp(e.placeholderSubtitle)
      }, null, 8, Y3)) : X3("", !0)
    ]));
  }
}, J3 = window.Vue.computed, Q3 = window.Vue.createApp, Z3 = window.Vuex.useStore, e5 = () => {
  const e = Z3(), { sectionSuggestion: t } = Ie(), { currentTargetPage: n } = ut(), o = ue(), s = () => Q3(
    Ef,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (c) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    c
  ), r = (c) => {
    const u = c.getElementsByTagName("base");
    Array.from(u).forEach(
      (g) => g.parentNode.removeChild(g)
    );
  };
  return J3(() => {
    var i;
    const c = document.createElement("div");
    c.innerHTML = (i = n.value) == null ? void 0 : i.content, r(c);
    const u = s(), g = a(
      t.value
    );
    if (g) {
      const l = Array.from(
        c.querySelectorAll("h2")
      ).filter((d) => d.textContent.match(g));
      if (l && l.length) {
        const d = l[0].parentNode;
        d.parentNode.insertBefore(
          u,
          d
        );
      }
    } else
      c.appendChild(u);
    return c.innerHTML;
  });
};
const Ll = window.Vue.createVNode, tt = window.Vue.unref, bo = window.Vue.openBlock, $p = window.Vue.createBlock, Vp = window.Vue.createCommentVNode, pi = window.Vue.createElementVNode, Al = window.Vue.Fragment, mi = window.Vue.createElementBlock, t5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, n5 = { class: "sx-content-comparator__source-content" }, o5 = ["lang", "dir", "innerHTML"], s5 = ["lang", "dir", "innerHTML"], a5 = ["innerHTML"], i5 = window.Vue.ref, r5 = window.Vue.computed, l5 = window.Vue.watch, c5 = window.Vuex.useStore, u5 = {
  __name: "SXContentComparator",
  setup(e) {
    c5();
    const t = Ge(), n = i5("source_section"), { logDashboardTranslationStartEvent: o } = Ki(), s = Ko(), a = () => t.push({ name: "sx-section-selector" }), r = () => {
      o(), s();
    }, {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u,
      pageURLParameter: g,
      sectionURLParameter: i
    } = B(), { activeSectionTargetTitle: l, sourceSectionContent: d, targetSectionContent: p } = lu(), m = e5(), { sectionSuggestion: h } = Ie(), f = r5(() => h.value.targetTitle), v = bf();
    return l5(
      f,
      () => v(
        u.value,
        c.value,
        f.value
      ),
      { immediate: !0 }
    ), (w, y) => (bo(), mi("section", t5, [
      Ll(q3, {
        onTranslationButtonClicked: r,
        onClose: a
      }),
      Ll(v3, {
        "content-type-selection": n.value,
        "onUpdate:contentTypeSelection": y[0] || (y[0] = (S) => n.value = S),
        onTranslationButtonClicked: r
      }, null, 8, ["content-type-selection"]),
      pi("section", n5, [
        n.value === "source_section" ? (bo(), mi(Al, { key: 0 }, [
          tt(d) ? Vp("", !0) : (bo(), $p(tt(rt), { key: 0 })),
          pi("section", {
            lang: tt(c),
            dir: tt(R.getDir)(tt(c)),
            class: "pt-2 px-4",
            innerHTML: tt(d)
          }, null, 8, o5)
        ], 64)) : n.value === "target_article" ? (bo(), mi(Al, { key: 1 }, [
          tt(m) ? Vp("", !0) : (bo(), $p(tt(rt), { key: 0 })),
          pi("article", {
            lang: tt(u),
            dir: tt(R.getDir)(tt(u)),
            class: "px-4",
            innerHTML: tt(m)
          }, null, 8, s5)
        ], 64)) : (bo(), mi(Al, { key: 2 }, [
          pi("section", {
            class: "pa-4",
            innerHTML: tt(p)
          }, null, 8, a5),
          Ll(Ef, {
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
}, d5 = {
  name: "SxContentComparatorView",
  components: {
    SxContentComparator: u5
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, g5 = window.Vue.resolveComponent, p5 = window.Vue.createVNode, m5 = window.Vue.normalizeClass, h5 = window.Vue.openBlock, f5 = window.Vue.createElementBlock;
function w5(e, t, n, o, s, a) {
  const r = g5("sx-content-comparator");
  return h5(), f5("main", {
    class: m5(["sx-content-comparator-view", a.classes])
  }, [
    p5(r)
  ], 2);
}
const v5 = /* @__PURE__ */ oe(d5, [["render", w5]]);
const _5 = window.Vue.resolveDirective, Ds = window.Vue.createElementVNode, Ep = window.Vue.withDirectives, hi = window.Vue.unref, Dl = window.Vue.createVNode, Lp = window.Vue.toDisplayString, Ap = window.Vue.createTextVNode, Ts = window.Vue.withCtx, S5 = window.Vue.openBlock, y5 = window.Vue.createBlock, x5 = { class: "mw-ui-dialog__header px-4 py-3" }, b5 = { class: "mw-ui-dialog__header-title" }, C5 = { class: "pa-4" }, k5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Dp = window.Codex.CdxButton, $5 = {
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
    return (r, c) => {
      const u = _5("i18n");
      return S5(), y5(hi(St), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: Ts(() => [
          Ds("div", x5, [
            Ep(Ds("span", b5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Ts(() => [
          Ds("div", k5, [
            Dl(hi(Dp), {
              weight: "quiet",
              onClick: s
            }, {
              default: Ts(() => [
                Ap(Lp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Dl(hi(Dp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Ts(() => [
                Ap(Lp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Ts(() => [
          Dl(hi(Mi)),
          Ds("div", C5, [
            Ep(Ds("span", null, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
}, V5 = (e, t, n) => {
  const o = document.createElement("div");
  o.innerHTML = e;
  const s = Array.from(o.children).find(
    (a) => no(a)
  );
  return s && eh(s) ? _t.parseTemplateWikitext(
    Qm(s),
    n,
    t
  ) : Promise.resolve(null);
}, Lf = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => no(a)
  );
  return s ? _t.parseTemplateWikitext(
    Qm(s),
    n,
    t
  ) : Promise.resolve(null);
}, E5 = window.Vuex.useStore, cu = () => {
  const e = E5(), { sourceSection: t } = te(), { getCurrentTitleByLanguage: n } = vn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = kf(), r = (i, l, d) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[l] = d;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof it ? p.blockTemplateProposedTranslations[l] = d : p instanceof Mn && p.addProposedTranslation(l, d);
  }, c = (i, l) => C(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, i))
      return "";
    try {
      const p = yield a();
      return yield _t.fetchSegmentTranslation(
        o.value,
        s.value,
        i,
        l,
        p
      );
    } catch (p) {
      return mw.log.error("Error while translating segment", p), "";
    }
  }), u = (i, l) => C(void 0, null, function* () {
    if (t.value.hasProposedTranslationByTranslationUnitId(
      i,
      l
    ))
      return;
    let d = t.value.getOriginalContentByTranslationUnitId(i);
    const p = t.value.getContentTranslationUnitById(i);
    let m;
    if (e.commit("application/addMtRequestsPending", i), m = yield c(l, d), !m) {
      e.commit("application/removeMtRequestsPending", i);
      return;
    }
    p instanceof it && (p.setBlockTemplateAdaptationInfoByHtml(
      l,
      m
    ), m = (yield V5(
      m,
      n(s.value, o.value),
      s.value
    )) || ""), r(
      i,
      l,
      m
    ), e.commit("application/removeMtRequestsPending", i);
  });
  return {
    translateTranslationUnitById: u,
    translateSelectedTranslationUnitForAllProviders: () => {
      const i = e.getters["mediawiki/getSupportedMTProviders"](
        o.value,
        s.value
      ), { selectedTranslationUnitId: l } = t.value;
      i.forEach(
        (d) => u(l, d)
      );
    }
  };
}, L5 = window.Vuex.useStore, A5 = () => {
  const { sourceSection: e } = te(), t = L5(), { translateTranslationUnitById: n } = cu();
  return (o) => {
    t.commit("application/setCurrentMTProvider", o);
    const s = e.value.selectedTranslationUnitId;
    n(s, o);
  };
};
function D5(e) {
  const t = document.createElement("div");
  return t.innerHTML = e, t.querySelectorAll("a").forEach((o) => {
    o.setAttribute("target", "_blank");
  }), t.innerHTML;
}
const T5 = window.Vue.resolveDirective, at = window.Vue.createElementVNode, fi = window.Vue.withDirectives, Oe = window.Vue.unref, Tl = window.Vue.createVNode, ln = window.Vue.withCtx, B5 = window.Vue.renderList, P5 = window.Vue.Fragment, wi = window.Vue.openBlock, F5 = window.Vue.createElementBlock, M5 = window.Vue.toDisplayString, Bl = window.Vue.createBlock, Tp = window.Vue.createCommentVNode, N5 = { class: "mw-ui-dialog__header pa-4" }, U5 = { class: "row ma-0 py-2" }, I5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, R5 = { class: "mb-0" }, z5 = { class: "col shrink justify-center" }, O5 = { class: "pb-2 mb-0" }, j5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, H5 = ["dir", "lang", "innerHTML"], q5 = ["textContent"], G5 = ["innerHTML"], X5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, W5 = /* @__PURE__ */ at("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), K5 = ["innerHTML"], Pl = window.Vue.computed, Y5 = window.Vuex.useStore, J5 = {
  __name: "SXTranslationSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = ee.EMPTY_TEXT_PROVIDER_KEY, s = ee.ORIGINAL_TEXT_PROVIDER_KEY, a = Y5(), {
      sourceSection: r,
      isSectionTitleSelected: c,
      selectedContentTranslationUnit: u
    } = te(), {
      sourceLanguageURLParameter: g,
      targetLanguageURLParameter: i
    } = B(), l = Pl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        g.value,
        i.value
      )
    ), d = Pl(() => {
      const S = [s, o];
      return l.value.filter(
        (x) => !S.includes(x)
      );
    }), p = Pl(
      () => c.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = A5(), h = (S) => {
      m(S), v();
    }, f = ee.getMTProviderLabel, v = () => n("update:active", !1), w = ue(), y = D5(
      w.i18n("cx-tools-mt-noservices")
    );
    return (S, x) => {
      const L = T5("i18n");
      return e.active ? (wi(), Bl(Oe(St), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: ln(() => [
          at("div", N5, [
            at("div", U5, [
              at("div", I5, [
                fi(at("h4", R5, null, 512), [
                  [L, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              at("div", z5, [
                Tl(Oe(Me), {
                  type: "icon",
                  icon: Oe(ra),
                  class: "pa-0",
                  onClick: v
                }, null, 8, ["icon"])
              ])
            ]),
            fi(at("h6", O5, null, 512), [
              [L, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: ln(() => [
          Tl(Oe(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: x[0] || (x[0] = (b) => h(Oe(s)))
          }, {
            header: ln(() => [
              fi(at("h5", j5, null, 512), [
                [L, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: ln(() => [
              at("p", {
                dir: Oe(R.getDir)(Oe(g)),
                lang: Oe(g),
                innerHTML: p.value[Oe(s)]
              }, null, 8, H5)
            ]),
            _: 1
          }),
          (wi(!0), F5(P5, null, B5(d.value, (b) => (wi(), Bl(Oe(Je), {
            key: b,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (N) => h(b)
          }, {
            header: ln(() => [
              at("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: M5(Oe(f)(b))
              }, null, 8, q5)
            ]),
            default: ln(() => [
              at("p", {
                innerHTML: p.value[b]
              }, null, 8, G5)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Tl(Oe(Je), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: x[1] || (x[1] = (b) => h(Oe(o)))
          }, {
            header: ln(() => [
              fi(at("h5", X5, null, 512), [
                [L, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: ln(() => [
              W5
            ]),
            _: 1
          }),
          d.value.length ? Tp("", !0) : (wi(), Bl(Oe(Je), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: ln(() => [
              at("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: Oe(y)
              }, null, 8, K5)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Tp("", !0);
    };
  }
}, Q5 = window.Vuex.useStore, Yo = () => {
  const { sourceSection: e } = te(), t = Q5(), { translateTranslationUnitById: n } = cu(), { currentMTProvider: o } = Ae(t), s = (c) => C(void 0, null, function* () {
    e.value.selectTranslationUnitById(c), yield n(c, o.value);
    const { followingTranslationUnit: u } = e.value;
    u && (yield n(
      u.id,
      o
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: c } = e.value;
      return c ? s(c.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: c, contentTranslationUnits: u } = e.value, g = c - 1;
      let i = 0;
      return g > -1 && (i = u[g].id), s(i);
    },
    selectTranslationUnitById: s
  };
};
const Z5 = window.Vue.toDisplayString, Fl = window.Vue.createElementVNode, Ml = window.Vue.unref, eL = window.Vue.createVNode, tL = window.Vue.normalizeClass, nL = window.Vue.withCtx, oL = window.Vue.openBlock, sL = window.Vue.createBlock, aL = ["href"], iL = ["textContent"], rL = ["innerHTML"], Co = window.Vue.computed, Bp = "sx-sentence-selector__section-title", lL = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = te(), { currentSourcePage: o } = ut(), { sourceLanguageURLParameter: s } = B(), a = Co(() => {
      var p;
      return (p = o.value) == null ? void 0 : p.title;
    }), r = Co(
      () => {
        var p;
        return ((p = t.value) == null ? void 0 : p.title) || a.value;
      }
    ), c = Co(
      () => Z.getPageUrl(s.value, a.value)
    ), u = Co(
      () => {
        var p;
        return !!((p = t.value) != null && p.translatedTitle);
      }
    ), g = Co(
      () => u.value ? "translated" : "selected"
    ), i = Co(() => {
      const p = [Bp];
      return n.value && p.push(`${Bp}--${g.value}`), p;
    }), { selectTranslationUnitById: l } = Yo(), d = () => l(0);
    return (p, m) => (oL(), sL(Ml(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: nL(() => [
        Fl("a", {
          href: c.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Fl("strong", {
            textContent: Z5(a.value)
          }, null, 8, iL),
          eL(Ml(qe), {
            icon: Ml(Xm),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, aL),
        Fl("h2", {
          class: tL(["pa-0 ma-0", i.value]),
          onClick: d,
          innerHTML: r.value
        }, null, 10, rL)
      ]),
      _: 1
    }));
  }
};
const Ht = window.Vue.unref, Bs = window.Vue.createVNode, vi = window.Vue.withCtx, Pp = window.Vue.toDisplayString, Fp = window.Vue.createTextVNode, cL = window.Vue.openBlock, uL = window.Vue.createBlock, dL = window.Vue.computed, Nl = window.Codex.CdxButton, Mp = window.Codex.CdxIcon, Af = {
  __name: "ProposedTranslationActionButtons",
  emits: [
    "select-previous-segment",
    "apply-translation",
    "skip-translation"
  ],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n, currentProposedTranslation: o } = te(), s = dL(
      () => {
        var a;
        return (a = t.value) == null ? void 0 : a.isSelectedTranslationUnitLast;
      }
    );
    return (a, r) => (cL(), uL(Ht(M), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: vi(() => [
        Bs(Ht(Nl), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: Ht(n),
          onClick: r[0] || (r[0] = (c) => a.$emit("select-previous-segment"))
        }, {
          default: vi(() => [
            Bs(Ht(Mp), {
              class: "me-1",
              icon: Ht(Yc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Bs(Ht(Nl), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !Ht(o),
          onClick: r[1] || (r[1] = (c) => a.$emit("apply-translation"))
        }, {
          default: vi(() => [
            Fp(Pp(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Bs(Ht(Nl), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (c) => a.$emit("skip-translation"))
        }, {
          default: vi(() => [
            Fp(Pp(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Bs(Ht(Mp), {
              class: "ms-1",
              size: "small",
              icon: Ht(pa)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Yn = window.Vue.unref, gL = window.Vue.toDisplayString, Ps = window.Vue.createVNode, _i = window.Vue.withCtx, pL = window.Vue.openBlock, mL = window.Vue.createBlock, Ul = window.Vue.computed, hL = window.Vuex.useStore, fL = window.Codex.CdxButton, wL = window.Codex.CdxIcon, vL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = hL(), n = Ul(() => t.state.application.currentMTProvider), o = ue(), s = Ul(() => ({
      [ee.ORIGINAL_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-original-card-title"
      ),
      [ee.EMPTY_TEXT_PROVIDER_KEY]: o.i18n(
        "cx-sx-sentence-selector-translation-options-empty-card-title"
      )
    })), a = Ul(
      () => s.value[n.value] || o.i18n(
        "cx-sx-sentence-selector-suggested-translation-title",
        ee.getMTProviderLabel(n.value)
      )
    );
    return (r, c) => (pL(), mL(Yn(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: _i(() => [
        Ps(Yn(M), { class: "ma-0 ps-5 pb-4" }, {
          default: _i(() => [
            Ps(Yn(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: gL(a.value)
            }, null, 8, ["textContent"]),
            Ps(Yn(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: _i(() => [
                Ps(Yn(fL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: c[0] || (c[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: _i(() => [
                    Ps(Yn(wL), {
                      class: "pa-0",
                      icon: Yn(Wc)
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
const Et = window.Vue.unref, An = window.Vue.createVNode, _L = window.Vue.resolveDirective, Np = window.Vue.createElementVNode, SL = window.Vue.withDirectives, Up = window.Vue.toDisplayString, Ip = window.Vue.createTextVNode, Fs = window.Vue.withCtx, yL = window.Vue.openBlock, xL = window.Vue.createElementBlock, bL = { class: "mt-retry-body pb-5" }, CL = { class: "retry-body__message" }, Rp = window.Codex.CdxButton, Il = window.Codex.CdxIcon, kL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = _L("i18n");
      return yL(), xL("div", bL, [
        Np("div", CL, [
          An(Et(Il), {
            class: "me-2",
            icon: Et(yh)
          }, null, 8, ["icon"]),
          SL(Np("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        An(Et(M), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Fs(() => [
            An(Et(k), { cols: "6" }, {
              default: Fs(() => [
                An(Et(Rp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Fs(() => [
                    An(Et(Il), {
                      class: "me-1",
                      icon: Et(Eh)
                    }, null, 8, ["icon"]),
                    Ip(" " + Up(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            An(Et(k), { cols: "6" }, {
              default: Fs(() => [
                An(Et(Rp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Fs(() => [
                    An(Et(Il), {
                      class: "me-1",
                      icon: Et(ty)
                    }, null, 8, ["icon"]),
                    Ip(" " + Up(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const ko = window.Vue.createVNode, nt = window.Vue.unref, Ms = window.Vue.openBlock, $L = window.Vue.createElementBlock, VL = window.Vue.createCommentVNode, Si = window.Vue.createBlock, EL = window.Vue.normalizeClass, LL = window.Vue.normalizeStyle, Ns = window.Vue.withCtx, AL = window.Vue.toDisplayString, DL = window.Vue.createTextVNode, TL = window.Vue.normalizeProps, BL = window.Vue.guardReactiveProps, PL = ["lang", "dir", "innerHTML"], Rl = window.Vue.ref, FL = window.Vue.onMounted, ML = window.Vue.onBeforeUnmount, zl = window.Vue.computed, NL = window.Vue.nextTick, UL = window.Vuex.useStore, IL = window.Codex.CdxButton, RL = window.Codex.CdxIcon, zL = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Rl(0), n = Rl(null), o = Rl(null), s = UL(), { currentMTProvider: a } = Ae(s), { targetLanguageURLParameter: r } = B(), { sourceSection: c, currentProposedTranslation: u } = te(), g = zl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = c.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = zl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), l = zl(
      () => !!u.value || a.value === ee.EMPTY_TEXT_PROVIDER_KEY
    ), d = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    FL(() => C(this, null, function* () {
      yield NL(), d(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), ML(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => d());
    return (m, h) => (Ms(), Si(nt(Je), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Ns(() => [
        ko(nt(M), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Ns(() => [
            ko(vL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            ko(nt(k), {
              class: EL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !l.value && g.value
              }]),
              style: LL(l.value ? i.value : null)
            }, {
              default: Ns(() => [
                l.value ? (Ms(), $L("section", {
                  key: 0,
                  lang: nt(r),
                  dir: nt(R.getDir)(nt(r)),
                  innerHTML: nt(u)
                }, null, 8, PL)) : g.value ? (Ms(), Si(nt(rt), { key: 1 })) : (Ms(), Si(kL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            ko(nt(k), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Ns(() => [
                l.value || g.value ? (Ms(), Si(nt(IL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !l.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", nt(u)))
                }, {
                  default: Ns(() => [
                    ko(nt(RL), {
                      class: "me-1",
                      icon: nt(Xc)
                    }, null, 8, ["icon"]),
                    DL(" " + AL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : VL("", !0),
                ko(Af, TL(BL(m.$attrs)), null, 16)
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
}, OL = window.Vue.computed, jL = (e) => OL(() => {
  if (e.isBlockTemplate)
    return e.isTranslated ? e.translatedContent : e.node.innerHTML;
  const t = "sx-sentence-selector__section-sentence", n = e.node.cloneNode(!0);
  return Array.from(n.getElementsByClassName("cx-segment")).forEach((s) => {
    const a = e.getSentenceById(s.dataset.segmentid);
    s.classList.add(t, "py-1", "me-1");
    const r = ["untranslated", "translated", "selected"].map(
      (u) => `${t}--${u}`
    );
    s.classList.remove(...r), a.selected && s.classList.add(`${t}--selected`);
    const c = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${c}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const HL = window.Vue.unref, qL = window.Vue.normalizeClass, GL = window.Vue.openBlock, XL = window.Vue.createElementBlock, WL = ["innerHTML"], KL = window.Vue.onMounted, YL = window.Vue.ref, JL = window.Vue.computed, QL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: it,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = YL(null), a = jL(n.subSection);
    KL(() => {
      s.value.addEventListener("click", (g) => {
        let i;
        if (n.subSection.isBlockTemplate)
          i = n.subSection;
        else {
          const l = g.composedPath().find(
            (d) => d instanceof Element && d.classList.contains("cx-segment")
          );
          if (!l)
            return;
          i = n.subSection.getSentenceById(
            l.dataset.segmentid
          );
        }
        c(i);
      });
    });
    const { selectTranslationUnitById: r } = Yo(), c = (g) => {
      if (g.selected) {
        o("bounce-translation");
        return;
      }
      r(g.id);
    }, u = JL(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (g, i) => (GL(), XL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: qL(["sx-sentence-selector__subsection", u.value]),
      innerHTML: HL(a)
    }, null, 10, WL));
  }
};
const zp = window.Vue.unref, Op = window.Vue.createVNode, jp = window.Vue.normalizeStyle, ZL = window.Vue.openBlock, eA = window.Vue.createElementBlock, Hp = window.Vue.computed, Df = {
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
    const t = e, n = Hp(() => ({ "--size": t.size })), o = Hp(
      () => !t.isTemplateAdapted || t.percentage === 0 ? Wm : Ti
    );
    return (s, a) => (ZL(), eA("div", {
      class: "block-template-status-indicator",
      style: jp(n.value)
    }, [
      Op(zp(Z1), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      Op(zp(qe), {
        icon: o.value,
        size: e.size / 2,
        style: jp({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const Dn = window.Vue.unref, yi = window.Vue.createVNode, Ol = window.Vue.withCtx, tA = window.Vue.openBlock, nA = window.Vue.createBlock, oA = window.Vue.computed, qp = window.Codex.CdxButton, Gp = window.Codex.CdxIcon, Tf = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = te(), o = oA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (tA(), nA(Dn(M), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Ol(() => [
        yi(Dn(qp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Dn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Ol(() => [
            yi(Dn(Gp), { icon: Dn(Yc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        yi(Dn(qp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: Ol(() => [
            yi(Dn(Gp), { icon: Dn(pa) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, Us = window.Vue.openBlock, xi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const cn = window.Vue.unref, $o = window.Vue.withCtx, Is = window.Vue.createVNode, jl = window.Vue.toDisplayString, Hl = window.Vue.createElementVNode, sA = window.Vue.renderList, aA = window.Vue.Fragment, iA = window.Vue.createElementBlock, rA = { class: "pa-4" }, lA = ["textContent"], cA = ["textContent"], uA = window.Vuex.useStore, bi = window.Vue.computed, dA = {
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
    const t = e, { targetLanguageAutonym: n } = Ae(uA()), o = bi(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = ue(), a = bi(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), r = bi(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), c = bi(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: P0,
          color: wt.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: ra,
          color: wt.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Ti,
          color: wt.blue600
        });
      else {
        let g;
        t.sourceParamsCount ? g = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : g = s.i18n("cx-sx-block-template-no-source-params-text"), u.push({
          text: g,
          icon: Ti,
          color: wt.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: Ni,
        color: wt.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: f0,
        color: wt.gray500
      }), u;
    });
    return (u, g) => (Us(), xi(cn(St), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: g[0] || (g[0] = (i) => u.$emit("update:active", i))
    }, {
      header: $o(() => [
        Is(cn(M), {
          justify: "center",
          class: "mt-4"
        }, {
          default: $o(() => [
            Is(cn(k), { shrink: "" }, {
              default: $o(() => [
                e.targetTemplateExists ? (Us(), xi(Df, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (Us(), xi(cn(qe), {
                  key: 1,
                  icon: cn(w0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: $o(() => [
        Hl("div", rA, [
          Hl("h3", {
            textContent: jl(a.value)
          }, null, 8, lA),
          Hl("p", {
            class: "mt-6 text-small",
            textContent: jl(r.value)
          }, null, 8, cA),
          (Us(!0), iA(aA, null, sA(c.value, (i, l) => (Us(), xi(cn(M), {
            key: l,
            align: "start",
            class: "mt-4"
          }, {
            default: $o(() => [
              Is(cn(k), { shrink: "" }, {
                default: $o(() => [
                  Is(cn(qe), {
                    class: "me-2",
                    icon: i.icon,
                    "icon-color": i.color
                  }, null, 8, ["icon", "icon-color"])
                ]),
                _: 2
              }, 1024),
              Is(cn(k), {
                textContent: jl(i.text)
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
const Le = window.Vue.unref, je = window.Vue.createVNode, qt = window.Vue.withCtx, ql = window.Vue.toDisplayString, Xp = window.Vue.createTextVNode, gA = window.Vue.resolveDirective, Wp = window.Vue.withDirectives, Kp = window.Vue.createElementVNode, pA = window.Vue.normalizeClass, Vo = window.Vue.openBlock, Yp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ci = window.Vue.createBlock, Jp = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const Qp = window.Vue.mergeProps, mA = { class: "block-template-adaptation-card__container pa-4" }, hA = ["textContent"], fA = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, He = window.Vue.computed, wA = window.Vue.ref, vA = window.Vuex.useStore, Zp = window.Codex.CdxButton, em = window.Codex.CdxIcon, _A = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = vA(), { targetLanguageAutonym: n, currentMTProvider: o } = Ae(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = te(), r = He(() => {
      var V;
      return (V = s.value) == null ? void 0 : V.isTranslated;
    }), c = He(() => {
      var T;
      return ((T = s.value) == null ? void 0 : T.blockTemplateTranslatedContent) || a.value;
    }), u = He(
      () => {
        var V;
        return (V = s.value) == null ? void 0 : V.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), g = He(
      () => {
        var V;
        return !((V = t.state.application.mtRequestsPending) != null && V.includes(
          s.value.id
        ));
      }
    ), i = ue(), l = He(
      // Strip HTML comments and return
      () => {
        var V, T;
        return ((T = (V = s.value) == null ? void 0 : V.sourceBlockTemplateName) == null ? void 0 : T.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), d = He(
      () => {
        var V, T;
        return (T = (V = s.value) == null ? void 0 : V.blockTemplateAdaptationInfo) == null ? void 0 : T[o.value];
      }
    ), p = He(
      () => {
        var V, T;
        return ((V = d.value) == null ? void 0 : V.adapted) || !!((T = d.value) != null && T.partial);
      }
    ), m = He(() => d.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), h = He(() => d.value ? p.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = He(
      () => {
        var V;
        return Object.keys(((V = s.value) == null ? void 0 : V.sourceTemplateParams) || {}).length;
      }
    ), v = He(() => {
      var T;
      const V = (T = s.value) == null ? void 0 : T.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(V || {});
    }), w = He(() => v.value.length), y = He(() => {
      const V = b.value;
      return f.value + V === 0 ? 100 : w.value / (f.value + V) * 100 || 0;
    }), S = wA(!1), x = () => {
      S.value = !0;
    }, L = (V) => V.filter((T) => !v.value.includes(T)), b = He(() => {
      var T;
      const V = ((T = d.value) == null ? void 0 : T.mandatoryTargetParams) || [];
      return L(V).length;
    }), N = He(() => {
      var T;
      const V = ((T = d.value) == null ? void 0 : T.optionalTargetParams) || [];
      return L(V).length;
    });
    return (V, T) => {
      const I = gA("i18n");
      return Vo(), Ci(Le(Je), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: qt(() => [
          Kp("div", mA, [
            je(Le(M), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: qt(() => [
                je(Le(k), { shrink: "" }, {
                  default: qt(() => [
                    je(Le(em), {
                      icon: Le(ny),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                je(Le(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: qt(() => [
                    Xp(ql(l.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u.value ? (Vo(), Yp("div", {
              key: 0,
              class: pA(["pa-4 mb-4", m.value])
            }, [
              je(Le(M), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: qt(() => [
                  Wp(je(Le(k), { tag: "h5" }, null, 512), [
                    [I, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  je(Le(k), { shrink: "" }, {
                    default: qt(() => [
                      je(Df, {
                        percentage: y.value,
                        size: 20,
                        "is-template-adapted": p.value,
                        "stroke-width": 2,
                        onClick: x
                      }, null, 8, ["percentage", "is-template-adapted"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              Kp("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: ql(u.value)
              }, null, 8, hA),
              je(Le(Zp), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: T[0] || (T[0] = (X) => V.$emit("edit-translation", c.value))
              }, {
                default: qt(() => [
                  Xp(ql(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : g.value ? (Vo(), Yp("div", fA, [
              je(Le(M), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: qt(() => [
                  Wp(je(Le(k), { tag: "h5" }, null, 512), [
                    [I, [
                      Le(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  je(Le(k), { shrink: "" }, {
                    default: qt(() => [
                      je(Le(Zp), {
                        weight: "quiet",
                        "aria-label": V.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: qt(() => [
                          je(Le(em), {
                            icon: Le(QS),
                            onClick: x
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
            ])) : (Vo(), Ci(Le(rt), { key: 2 }))
          ]),
          r.value ? (Vo(), Ci(Tf, Jp(Qp({ key: 1 }, V.$attrs)), null, 16)) : (Vo(), Ci(Af, Jp(Qp({ key: 0 }, V.$attrs)), null, 16)),
          je(dA, {
            active: S.value,
            "onUpdate:active": T[1] || (T[1] = (X) => S.value = X),
            "source-params-count": f.value,
            "target-params-count": w.value,
            "mandatory-missing-params-count": b.value,
            "optional-missing-params-count": N.value,
            "is-template-adapted": p.value,
            "target-template-exists": !!u.value
          }, null, 8, ["active", "source-params-count", "target-params-count", "mandatory-missing-params-count", "optional-missing-params-count", "is-template-adapted", "target-template-exists"])
        ]),
        _: 1
      });
    };
  }
};
const SA = window.Vue.unref, yA = window.Vue.createVNode, xA = window.Vue.openBlock, bA = window.Vue.createElementBlock, CA = { class: "translated-segment-card-header" }, kA = window.Vue.computed, $A = {
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
    const n = t, { isSectionTitleSelected: o } = te(), s = ue(), a = kA(() => [
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
    ]), r = (c) => n("update:selection", c);
    return (c, u) => (xA(), bA("div", CA, [
      yA(SA(ia), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const VA = window.Vue.useCssVars, Fe = window.Vue.createVNode, tm = window.Vue.resolveDirective, EA = window.Vue.createElementVNode, Gl = window.Vue.withDirectives, me = window.Vue.unref, LA = window.Vue.normalizeStyle, ki = window.Vue.openBlock, nm = window.Vue.createElementBlock, AA = window.Vue.createCommentVNode, DA = window.Vue.normalizeClass, ht = window.Vue.withCtx, TA = window.Vue.toDisplayString, BA = window.Vue.createTextVNode, om = window.Vue.createBlock, PA = window.Vue.normalizeProps, FA = window.Vue.guardReactiveProps, un = window.Vue.computed, MA = window.Vue.ref, NA = window.Vue.inject, UA = window.Vuex.useStore, IA = window.Codex.CdxButton, Xl = window.Codex.CdxIcon, RA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    VA((w) => ({
      "4929555c": v.value
    }));
    const t = MA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = te(), { targetLanguage: a } = Ae(UA()), r = un(() => t.value === "sentence"), c = un(
      () => n.value.subSections.find(
        (w) => w.sentences.some(
          (y) => {
            var S;
            return y.id === ((S = o.value) == null ? void 0 : S.id);
          }
        )
      )
    ), u = un(() => {
      var w;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (w = o.value) == null ? void 0 : w.mtProposedTranslationUsed : c.value.proposedContentForMTValidation;
    }), g = NA("colors"), i = g.gray200, l = g.red600, d = un(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : c.value.translatedContent), p = un(
      () => Kt.calculateScore(
        d.value,
        u.value,
        a.value
      )
    ), m = un(
      () => Kt.getScoreStatus(p.value)
    ), h = un(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = un(() => ({
      failure: p.value === 0 ? null : g.yellow700,
      warning: g.yellow700,
      success: g.green600
    })), v = un(
      () => f.value[m.value]
    );
    return (w, y) => {
      const S = tm("i18n"), x = tm("i18n-html");
      return ki(), om(me(Je), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: ht(() => [
          Fe(me(M), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: ht(() => [
              Fe($A, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (L) => t.value = L)
              }, null, 8, ["selection"]),
              Fe(me(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: ht(() => [
                  Fe(me(M), { class: "ma-0" }, {
                    default: ht(() => [
                      Fe(me(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: ht(() => [
                          Gl(EA("h5", null, null, 512), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Gl((ki(), nm("p", {
                            key: 0,
                            style: LA({ color: me(l) })
                          }, null, 4)), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Gl((ki(), nm("p", {
                            key: 1,
                            class: DA(h.value)
                          }, null, 2)), [
                            [x, [
                              p.value
                            ], "cx-sx-sentence-selector-translated-segment-modification-percentage"]
                          ])
                        ]),
                        _: 1
                      }),
                      Fe(me(k), {
                        shrink: "",
                        class: "translated-segment-card__animated-stats"
                      }, {
                        default: ht(() => [
                          Fe(me(M), { class: "ma-0 ms-2" }, {
                            default: ht(() => [
                              Fe(me(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: ht(() => [
                                  Fe(me(Xl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: me(ay)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Fe(me(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: ht(() => [
                                  Fe(me(Ym), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: v.value,
                                    background: me(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Fe(me(k), { shrink: "" }, {
                                default: ht(() => [
                                  Fe(me(Xl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: me(oy)
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
                  r.value ? (ki(), om(me(IA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (L) => w.$emit("edit-translation", d.value))
                  }, {
                    default: ht(() => [
                      Fe(me(Xl), {
                        class: "me-1",
                        icon: me(Xc)
                      }, null, 8, ["icon"]),
                      BA(" " + TA(w.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : AA("", !0)
                ]),
                _: 1
              }),
              Fe(me(k), { class: "translated-segment-card__actions" }, {
                default: ht(() => [
                  Fe(Tf, PA(FA(w.$attrs)), null, 16)
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
}, zA = () => {
  const {
    sourceSection: e,
    selectedContentTranslationUnit: t
  } = te(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = Yo(), { currentTranslation: s } = Mt();
  return () => {
    if (e.value)
      if (s.value && !t.value) {
        const { lastTranslatedContentTranslationUnit: a } = e.value;
        e.value.selectTranslationUnitById(
          (a == null ? void 0 : a.id) || 0
        ), n();
      } else
        t.value || o(0);
  };
}, Bf = window.Vuex.useStore, OA = () => {
  const e = Bf(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return () => C(void 0, null, function* () {
    if (e.getters["mediawiki/getSupportedMTProviders"](
      t.value,
      n.value
    ).length)
      return;
    const o = mw.config.get("wgContentTranslationEnableMT");
    let s;
    o ? s = yield ji.fetchSupportedMTProviders(
      t.value,
      n.value
    ) : s = new ee(
      t.value,
      n.value,
      []
      // Empty providers array - only "original" and "empty" will be added by constructor
    ), e.commit("mediawiki/addMtProviderGroup", s);
  });
}, jA = () => {
  const e = Bf(), { currentMTProvider: t } = Ae(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), s = OA();
  return () => C(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = ee.getStorageKey(
        n.value,
        o.value
      );
      let c = mw.storage.get(r);
      (!c || !a.includes(c)) && (c = a[0]), e.commit("application/setCurrentMTProvider", c);
    }
  });
}, HA = window.Vue.computed, qA = (e) => {
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
}, GA = () => {
  const { selectedContentTranslationUnit: e } = te(), t = HA(
    () => e.value instanceof it
  );
  return () => {
    if (!e.value)
      return;
    const n = e.value.id, o = t.value ? document.getElementById(n) : document.querySelector(`[data-segmentid='${n}']`);
    o && qA(o);
  };
}, XA = (e, t) => {
  const { content: n, origin: o, baseSectionId: s, subSectionId: a } = e;
  if (!n)
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  const r = t.filter(
    (c) => !ee.isUserMTProvider(c)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, WA = window.Vue.computed, Pf = () => {
  const { currentTranslation: e } = Mt(), { currentSourcePage: t } = ut();
  return WA(
    () => {
      var n;
      return ((n = e.value) == null ? void 0 : n.pageRevision) || t.value.revision;
    }
  );
}, KA = window.Vuex.useStore, uu = () => {
  const e = KA(), { sourceSection: t, targetPageTitleForPublishing: n } = te(), {
    pageURLParameter: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), r = Pf();
  return () => {
    const c = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), g = `${r.value}_${t.value.id}`, i = t.value.getParallelCorporaUnits(g);
    i.forEach(
      (p) => XA(p, u)
    );
    const l = t.value.getTranslationProgress(a), d = e.getters["application/isSandboxTarget"];
    return _t.saveTranslation({
      sourceTitle: o.value,
      targetTitle: c,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: t.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: t.value.targetSectionTitleForPublishing,
      sourceLanguage: s.value,
      targetLanguage: a.value,
      revision: r.value,
      units: i.map((p) => p.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: g,
      isSandbox: d,
      progress: l
    });
  };
}, YA = window.Vue.effectScope, JA = window.Vue.onScopeDispose, QA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = YA(!0), n = o.run(() => e(...a))), JA(s), n);
}, ZA = window.Vuex.useStore;
let Wl;
const eD = () => {
  const e = ZA(), t = uu();
  let n = 1e3, o = 0;
  return Wl = tu(() => t().then((a) => {
    a instanceof Io ? (n *= o + 1, o++, setTimeout(Wl, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof Oo)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Wl;
}, Ff = QA(eD), tD = window.Vuex.useStore, nD = () => {
  const e = tD(), t = Ff(), { currentMTProvider: n } = Ae(e), { sourceSection: o, currentProposedTranslation: s } = te(), { selectNextTranslationUnit: a } = Yo();
  return () => C(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, oD = window.Vuex.useStore, sD = () => {
  const e = oD(), t = Ff();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, aD = window.Vuex.useStore, iD = window.Vue.computed, Mf = () => {
  const e = aD(), t = Ge(), { currentTranslation: n } = Mt(), { currentMTProvider: o, previousRoute: s } = Ae(e), { currentTargetPage: a } = ut(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: c,
    pageURLParameter: u,
    sectionURLParameter: g
  } = B(), i = ct(), l = iD(() => {
    var y;
    const w = {
      translation_source_language: r.value,
      translation_target_language: c.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L294)
      // translation_source_title:
      //   The title of the source article of the current translation. Applies only
      //   to events which relate to a specific translation or suggestion: all
      //   `editor_` and `publish_` events and some `dashboard_` events (e.g.
      //   `dashboard_start_translation`, `dashboard_delete_translation`)
      translation_source_title: u.value
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L301)
      // translation_target_exists:
      //   Whether the target article or section already exists. Applies only to
      //   events which relate to a specific translation or suggestion: all `editor_`
      //   and `publish_` events and some `dashboard_` events (e.g. `dashboard_start_translation`,
      //   `dashboard_delete_translation`). In section translation, if the user discards the mapping
      //   to an existing target section, the value should change to false in future events.
      // translation_target_exists: !!currentTargetPage.value,
    };
    if (g.value ? (w.translation_source_section = g.value, w.translation_type = "section") : w.translation_type = "article", n.value) {
      w.translation_id = n.value.translationId, w.translation_target_title = n.value.targetTitle;
      const S = n.value.targetSectionTitle;
      S && (w.translation_target_section = S);
    } else
      a.value && (w.translation_target_title = (y = a.value) == null ? void 0 : y.title);
    return o.value && (w.translation_provider = ee.getProviderForInstrumentation(o.value)), w;
  });
  return {
    logEditorOpenEvent: () => {
      var L;
      const w = t.currentRoute.value.meta.workflowStep, S = t.getRoutes().find(
        (b) => b.name === s.value
      ), x = ((L = S == null ? void 0 : S.meta) == null ? void 0 : L.workflowStep) || 0;
      return w > x ? i(ie({
        event_type: "editor_open"
      }, l.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => i(ie({
      event_type: "editor_close"
    }, l.value)),
    logEditorCloseWarnEvent: () => i(ie({
      event_type: "editor_close_warn"
    }, l.value)),
    logEditorSegmentAddEvent: () => i(ie({
      event_type: "editor_segment_add"
    }, l.value)),
    logEditorSegmentSkipEvent: () => i(ie({
      event_type: "editor_segment_skip"
    }, l.value)),
    logEditorSegmentEditEvent: () => i(ie({
      event_type: "editor_segment_edit"
    }, l.value))
  };
}, rD = (e, t, n, o) => C(void 0, null, function* () {
  var c, u, g;
  const s = ((c = t.user) == null ? void 0 : c.content) || ((u = t.mt) == null ? void 0 : u.content), a = (g = t == null ? void 0 : t.mt) == null ? void 0 : g.engine, r = yield Lf(
    s,
    n,
    o
  );
  a && (e.setBlockTemplateAdaptationInfoByHtml(
    a,
    s
  ), e.blockTemplateProposedTranslations[a] = r, e.blockTemplateMTProviderUsed = a), e.blockTemplateTranslatedContent = r;
}), lD = (e, t) => {
  t.segments.forEach((n) => {
    var s, a, r;
    const o = e.getSentenceById(n.id);
    if (o && (o.translatedContent = ((s = n.user) == null ? void 0 : s.innerHTML) || ((a = n.mt) == null ? void 0 : a.innerHTML), n.mt)) {
      const c = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(c, n.mt.innerHTML), o.mtProviderUsed = c;
    }
  });
}, cD = (e, t, n, o) => C(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return rD(e, t, n, o);
  lD(e, t);
}), uD = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (c) => c.pageSectionId === parseInt(a.id)
    ).length)
      for (const c of a.subSections) {
        const u = o.find(
          (i) => i.subSectionId === c.id
        );
        if (!u)
          continue;
        const g = cD(
          c,
          u,
          t || e.title,
          n
        );
        s.push(g);
      }
  return Promise.all(s);
}, dD = { restoreCorporaDraft: uD }, gD = () => {
  const { currentSourcePage: e } = ut(), { sourceSection: t } = te();
  return (n) => C(void 0, null, function* () {
    if (n.restored)
      return;
    const o = yield _t.fetchTranslationUnits(
      n.translationId
    );
    yield dD.restoreCorporaDraft(
      e.value,
      n.targetTitle,
      n.targetLanguage,
      o
    ), n.restored = !0;
    let s;
    n.isLeadSectionTranslation ? (t.value.originalTitle = n.sourceTitle, s = n.targetTitle) : s = n.targetSectionTitle, t.value.translatedTitle = s;
  });
};
const ge = window.Vue.unref, ft = window.Vue.createVNode, dn = window.Vue.withCtx, pD = window.Vue.resolveDirective, sm = window.Vue.createElementVNode, mD = window.Vue.withDirectives, hD = window.Vue.toDisplayString, fD = window.Vue.createTextVNode, wD = window.Vue.renderList, vD = window.Vue.Fragment, Tn = window.Vue.openBlock, am = window.Vue.createElementBlock, Eo = window.Vue.createBlock;
window.Vue.createCommentVNode;
const _D = window.Vue.normalizeClass, SD = window.Vue.normalizeStyle, yD = { class: "sx-sentence-selector__header-title mb-0" }, xD = { class: "sx-sentence-selector__section-contents px-4" }, Lo = window.Vue.computed, bD = window.Vue.nextTick, CD = window.Vue.onMounted, Rs = window.Vue.ref, im = window.Vue.watch, kD = window.Vuex.useStore, rm = window.Codex.CdxButton, $D = window.Codex.CdxIcon, VD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Rs(!1), n = Rs(!1), o = Rs("100%"), s = kD(), { currentMTProvider: a } = Ae(s), {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: c,
      pageURLParameter: u,
      sectionURLParameter: g
    } = B(), { sourceSection: i, selectedContentTranslationUnit: l } = te(), d = Rs({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), p = Lo(
      () => Object.values(d.value).every(Boolean)
    ), m = Lo(
      () => {
        var he;
        return (he = i.value) == null ? void 0 : he.isSelectedTranslationUnitTranslated;
      }
    ), h = Lo(() => {
      var he;
      return (he = i.value) == null ? void 0 : he.subSections;
    }), f = Lo(
      () => {
        var he;
        return (he = i.value) == null ? void 0 : he.selectedTranslationUnitOriginalContent;
      }
    ), v = Lo(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: w,
      logEditorCloseEvent: y,
      logEditorCloseWarnEvent: S,
      logEditorSegmentAddEvent: x,
      logEditorSegmentSkipEvent: L
    } = Mf(), b = zA();
    jA()().then(() => {
      w(), d.value.mtProviders = !0;
    });
    const V = GA(), { fetchTranslationsByStatus: T, translationsFetched: I } = Wo(), X = gD(), { currentTranslation: Y } = Mt(), { selectPageSectionByTitle: ke, selectPageSectionByIndex: Se } = Yi(), Xe = iu(), Re = qo();
    CD(() => C(this, null, function* () {
      if (!I.value.draft) {
        const he = [
          // required to get current draft translation (if exists)
          T("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          Xe(r.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          Re(r.value, [u.value])
        ];
        yield Promise.all(he);
      }
      d.value.pageMetadata = !0, g.value ? yield ke(g.value) : yield Se(0), d.value.pageContent = !0, Y.value && (yield X(Y.value)), d.value.draftRestored = !0, im(
        p,
        () => C(this, null, function* () {
          p.value && (yield bD(), b(), V());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), im(l, V);
    const { selectNextTranslationUnit: ye, selectPreviousTranslationUnit: De } = Yo(), U = () => (L(), ye()), q = nD(), G = () => {
      x(), q();
    }, se = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, xe = Ge(), P = () => {
      const { autoSavePending: he } = s.state.application;
      if (he) {
        pe.value = !0, S();
        return;
      }
      E();
    }, H = sD(), { clearTranslationURLParameters: _ } = B(), E = () => C(this, null, function* () {
      T("draft"), Y.value && (i.value.reset(), Y.value.restored = !1), y(), _(), H(), yield xe.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: D,
      translateSelectedTranslationUnitForAllProviders: F
    } = cu(), W = () => {
      ze.value || (t.value = !0, F());
    }, { getCurrentTitleByLanguage: ae } = vn(), z = (he) => {
      xe.push({
        name: "sx-editor",
        state: {
          content: he,
          originalContent: f.value,
          title: ae(
            c.value,
            r.value
          ),
          isInitialEdit: !m.value || null
        }
      });
    }, O = () => xe.push({ name: "sx-publisher" }), ne = () => C(this, null, function* () {
      l.value ? yield D(
        l.value.id,
        a.value
      ) : yield D(0, a.value);
    }), ze = Lo(
      () => l.value instanceof it
    ), pe = Rs(!1);
    return (he, zn) => {
      const Qo = pD("i18n");
      return Tn(), am("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: SD(v.value)
      }, [
        ft(ge(M), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: dn(() => [
            ft(ge(k), { shrink: "" }, {
              default: dn(() => [
                ft(ge(rm), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": he.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: P
                }, {
                  default: dn(() => [
                    ft(ge($D), { icon: ge(bh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            ft(ge(k), {
              grow: "",
              class: "px-1"
            }, {
              default: dn(() => [
                mD(sm("h4", yD, null, 512), [
                  [Qo, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            ft(ge(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: dn(() => [
                ft(ge(rm), {
                  disabled: !(ge(i) && ge(i).isTranslated),
                  onClick: O
                }, {
                  default: dn(() => [
                    fD(hD(he.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        p.value ? (Tn(), Eo(ge(M), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: dn(() => [
            ft(ge(k), {
              dir: ge(R.getDir)(ge(r)),
              lang: ge(r),
              class: "sx-sentence-selector__section"
            }, {
              default: dn(() => [
                ft(lL),
                sm("div", xD, [
                  (Tn(!0), am(vD, null, wD(h.value, (Jt) => (Tn(), Eo(QL, {
                    id: Jt.id,
                    key: `sub-section-${Jt.id}`,
                    "sub-section": Jt,
                    onBounceTranslation: se
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !ze.value && m.value ? (Tn(), Eo(RA, {
              key: 0,
              onEditTranslation: z,
              onSelectNextSegment: ge(ye),
              onSelectPreviousSegment: ge(De)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : ze.value ? (Tn(), Eo(_A, {
              key: 2,
              onEditTranslation: z,
              onApplyTranslation: G,
              onSkipTranslation: U,
              onSelectPreviousSegment: ge(De),
              onSelectNextSegment: ge(ye)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Tn(), Eo(zL, {
              key: 1,
              class: _D({ "mb-0": !n.value }),
              onConfigureOptions: W,
              onEditTranslation: z,
              onApplyTranslation: G,
              onSkipTranslation: U,
              onSelectPreviousSegment: ge(De),
              onRetryTranslation: ne
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Tn(), Eo(ge(M), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: dn(() => [
            ft(ge(rt), { class: "mt-0" })
          ]),
          _: 1
        })),
        ft(J5, {
          active: t.value,
          "onUpdate:active": zn[0] || (zn[0] = (Jt) => t.value = Jt)
        }, null, 8, ["active"]),
        ft($5, {
          modelValue: pe.value,
          "onUpdate:modelValue": zn[1] || (zn[1] = (Jt) => pe.value = Jt),
          onDiscardTranslation: E
        }, null, 8, ["modelValue"])
      ], 4);
    };
  }
};
const ED = {
  name: "SxSentenceSelectorView",
  components: {
    SxSentenceSelector: VD
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, LD = window.Vue.resolveComponent, AD = window.Vue.createVNode, DD = window.Vue.normalizeClass, TD = window.Vue.openBlock, BD = window.Vue.createElementBlock;
function PD(e, t, n, o, s, a) {
  const r = LD("sx-sentence-selector");
  return TD(), BD("main", {
    class: DD(["sx-sentence-selector-view", a.classes])
  }, [
    AD(r)
  ], 2);
}
const FD = /* @__PURE__ */ oe(ED, [["render", PD]]), MD = `<svg width="375" height="200" viewBox="0 0 375 200"
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
`, ND = `<svg  width="375" height="200" viewBox="0 0 375 200"
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
const UD = window.Vue.resolveDirective, $i = window.Vue.withDirectives, Lt = window.Vue.openBlock, gn = window.Vue.createElementBlock, Vi = window.Vue.createCommentVNode, Ei = window.Vue.Transition, Jn = window.Vue.withCtx, Ao = window.Vue.createVNode, zs = window.Vue.createElementVNode, Bn = window.Vue.unref, ID = window.Vue.renderList, RD = window.Vue.Fragment, zD = window.Vue.normalizeClass, lm = window.Vue.createBlock, OD = window.Vue.toDisplayString, jD = window.Vue.createTextVNode, HD = { class: "sx-quick-tutorial" }, qD = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, GD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, XD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, WD = { class: "sx-quick-tutorial__illustration" }, KD = ["innerHTML"], YD = ["innerHTML"], JD = { class: "sx-quick-tutorial__step-indicator py-3" }, QD = ["onClick"], ZD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, eT = {
  key: "secondary-point-1",
  class: "ma-0"
}, tT = {
  key: "secondary-point-2",
  class: "ma-0"
}, nT = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, cm = window.Vue.ref, um = window.Codex.CdxButton, oT = window.Codex.CdxIcon, sT = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = cm(2), n = cm(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = Ko();
    return (r, c) => {
      const u = UD("i18n");
      return Lt(), gn("section", HD, [
        Ao(Bn(M), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Jn(() => [
            zs("section", qD, [
              Ao(Ei, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Jn(() => [
                  s(1) ? $i((Lt(), gn("h2", GD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? $i((Lt(), gn("h2", XD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Vi("", !0)
                ]),
                _: 1
              })
            ]),
            zs("section", WD, [
              Ao(Ei, { name: "mw-ui-animation-slide-start" }, {
                default: Jn(() => [
                  s(1) ? (Lt(), gn("div", {
                    key: "illustration-1",
                    innerHTML: Bn(ND)
                  }, null, 8, KD)) : s(2) ? (Lt(), gn("div", {
                    key: "illustration-2",
                    innerHTML: Bn(MD)
                  }, null, 8, YD)) : Vi("", !0)
                ]),
                _: 1
              })
            ]),
            zs("div", JD, [
              (Lt(!0), gn(RD, null, ID(t.value, (g) => (Lt(), gn("span", {
                key: `dot-${g}`,
                class: zD(["dot mx-1", { "dot-active": s(g) }]),
                role: "button",
                onClick: (i) => n.value = g
              }, null, 10, QD))), 128))
            ]),
            zs("section", ZD, [
              Ao(Ei, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Jn(() => [
                  s(1) ? $i((Lt(), gn("h3", eT, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? $i((Lt(), gn("h3", tT, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Vi("", !0)
                ]),
                _: 1
              })
            ]),
            zs("div", nT, [
              Ao(Ei, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Jn(() => [
                  s(1) ? (Lt(), lm(Bn(um), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Jn(() => [
                      Ao(Bn(oT), { icon: Bn(pa) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (Lt(), lm(Bn(um), {
                    key: "quick-tutorial-action-button-2",
                    class: "mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: Bn(a)
                  }, {
                    default: Jn(() => [
                      jD(OD(r.$i18n("sx-quick-tutorial-translate-button-label")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : Vi("", !0)
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
const aT = {
  name: "SxContentComparatorView",
  components: {
    SxQuickTutorial: sT
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, iT = window.Vue.resolveComponent, rT = window.Vue.createVNode, lT = window.Vue.normalizeClass, cT = window.Vue.openBlock, uT = window.Vue.createElementBlock;
function dT(e, t, n, o, s, a) {
  const r = iT("sx-quick-tutorial");
  return cT(), uT("main", {
    class: lT(["sx-quick-tutorial-view", a.classes])
  }, [
    rT(r)
  ], 2);
}
const gT = /* @__PURE__ */ oe(aT, [["render", dT]]);
const pT = window.Vue.resolveDirective, dm = window.Vue.createElementVNode, mT = window.Vue.withDirectives, hT = window.Vue.unref, fT = window.Vue.withCtx, wT = window.Vue.createVNode, vT = window.Vue.openBlock, _T = window.Vue.createElementBlock, ST = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, yT = { class: "sx-editor__original-content-panel__header mb-2" }, xT = ["lang", "dir", "innerHTML"], gm = window.Vue.ref, bT = window.Vue.onMounted, CT = {
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
    const t = e, n = (r, c) => {
      const u = r.getElementsByTagName("a");
      for (const g of u)
        g.href = Z.getPageUrl(c, g.title), g.target = "_blank";
    }, o = gm(null), s = gm(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return bT(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, c) => {
      const u = pT("i18n");
      return vT(), _T("section", ST, [
        mT(dm("h5", yT, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        wT(hT(q1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: fT(() => [
            dm("div", {
              ref_key: "originalContentRef",
              ref: o,
              class: "sx-editor__original-content-panel__body",
              lang: e.language,
              dir: e.dir,
              innerHTML: e.originalContent
            }, null, 8, xT)
          ]),
          _: 1
        }, 8, ["min-height"])
      ]);
    };
  }
}, kT = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>happy-robot</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAF3FF" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,73 C62,76.3137085 64.6862915,79 68,79 C71.3137085,79 74,76.3137085 74,73 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#3366CC"></path>
    </g>
</svg>
`;
const $T = window.Vue.unref, Os = window.Vue.createElementVNode, pm = window.Vue.resolveDirective, Kl = window.Vue.withDirectives, VT = window.Vue.normalizeClass, ET = window.Vue.openBlock, LT = window.Vue.createElementBlock, AT = window.Vue.createCommentVNode, DT = {
  key: 0,
  class: "sx-editor__feedback-overlay fill-height"
}, TT = { class: "sx-editor__feedback-overlay-content px-4" }, BT = ["innerHTML"], PT = { class: "sx-editor__feedback-overlay-content__title" }, FT = { class: "sx-editor__feedback-overlay-content__clarification mb-1" }, Yl = window.Vue.computed, MT = {
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
    const t = e, { targetLanguageURLParameter: n } = B(), o = Yl(
      () => Kt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = Yl(() => {
      const r = Kt.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = Yl(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, c) => {
      const u = pm("i18n"), g = pm("i18n-html");
      return e.showFeedback ? (ET(), LT("div", DT, [
        Os("div", TT, [
          Os("div", {
            class: "sx-editor__feedback-overlay-content__happy-robot mb-4",
            innerHTML: $T(kT)
          }, null, 8, BT),
          Kl(Os("h2", PT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-title"]
          ]),
          Kl(Os("p", FT, null, 512), [
            [u, void 0, "sx-editor-feedback-overlay-clarification"]
          ]),
          Kl(Os("p", {
            class: VT(["sx-editor__feedback-overlay-content__stats", a.value])
          }, null, 2), [
            [g, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : AT("", !0);
    };
  }
}, NT = window.Vuex.useStore, UT = () => {
  const e = NT(), t = uu(), { selectNextTranslationUnit: n } = Yo(), { sourceSection: o, selectedContentTranslationUnit: s } = te(), { getCurrentTitleByLanguage: a } = vn(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: c
  } = B(), { currentMTProvider: u } = Ae(e);
  return (g) => C(void 0, null, function* () {
    const i = document.createElement("div");
    i.innerHTML = g, i.querySelectorAll(".sx-edit-dummy-node").forEach((l) => l.remove()), g = i.innerHTML, s.value instanceof it && (g = (yield Lf(
      g,
      a(c.value, r.value),
      c.value
    )) || g), o.value.setTranslationForSelectedTranslationUnit(
      g,
      u.value
    ), t(), n();
  });
};
const ot = window.Vue.unref, Jl = window.Vue.openBlock, Ql = window.Vue.createBlock, mm = window.Vue.createCommentVNode, hm = window.Vue.createVNode, IT = window.Vue.createElementVNode, RT = window.Vue.withCtx, zT = { class: "sx-editor__editing-surface-container grow" }, Zl = window.Vue.ref, OT = window.Vue.computed, jT = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Zl(!1), o = Ge(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: c, content: u, originalContent: g, title: i } = history.state, l = Zl(null), d = Zl(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = Mf(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = B(), { sourceSection: v } = te(), w = OT(
      () => Kt.calculateScore(
        l.value,
        u,
        f.value
      )
    ), y = UT(), S = (x) => C(this, null, function* () {
      l.value = x, d.value = !0;
      const L = new Promise((N) => setTimeout(N, 2e3));
      let b = Promise.resolve();
      r ? v.value.editedTranslation = x : b = y(x), w.value === 0 && c ? p() : w.value > 0 && m(), yield Promise.all([L, b]), d.value = !1, a();
    });
    return (x, L) => (Jl(), Ql(ot(M), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: RT(() => [
        ot(g) ? (Jl(), Ql(CT, {
          key: 0,
          language: ot(h),
          dir: ot(R.getDir)(ot(h)),
          "original-content": ot(g)
        }, null, 8, ["language", "dir", "original-content"])) : mm("", !0),
        n.value ? mm("", !0) : (Jl(), Ql(ot(rt), { key: 1 })),
        IT("div", zT, [
          hm(MT, {
            "edited-translation": l.value,
            "show-feedback": d.value,
            "proposed-translation": ot(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          hm(_V, {
            content: ot(u),
            language: ot(f),
            dir: ot(R.getDir)(ot(f)),
            title: ot(i),
            onReady: s,
            onClose: a,
            onEditCompleted: S
          }, null, 8, ["content", "language", "dir", "title"])
        ])
      ]),
      _: 1
    }));
  }
};
const HT = {
  name: "SxContentComparatorView",
  components: {
    SxEditor: jT
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
}, qT = window.Vue.resolveComponent, GT = window.Vue.createVNode, XT = window.Vue.normalizeClass, WT = window.Vue.openBlock, KT = window.Vue.createElementBlock;
function YT(e, t, n, o, s, a) {
  const r = qT("sx-editor");
  return WT(), KT("main", {
    class: XT(["sx-editor-view", a.classes])
  }, [
    GT(r, { "from-route": e.fromRoute }, null, 8, ["from-route"])
  ], 2);
}
const JT = /* @__PURE__ */ oe(HT, [["render", YT]]);
const Gt = window.Vue.unref, Qn = window.Vue.createVNode, js = window.Vue.withCtx, QT = window.Vue.resolveDirective, ZT = window.Vue.withDirectives, e6 = window.Vue.openBlock, t6 = window.Vue.createBlock, fm = window.Codex.CdxButton, wm = window.Codex.CdxIcon, n6 = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = Ge(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = QT("i18n");
      return e6(), t6(Gt(M), { class: "ma-0 sx-publisher__header" }, {
        default: js(() => [
          Qn(Gt(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: js(() => [
              Qn(Gt(fm), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: js(() => [
                  Qn(Gt(wm), { icon: Gt(Xo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          ZT(Qn(Gt(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Qn(Gt(k), { shrink: "" }, {
            default: js(() => [
              Qn(Gt(fm), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: js(() => [
                  Qn(Gt(wm), { icon: Gt(GS) }, null, 8, ["icon"])
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
}, o6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, s6 = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`, vm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const ec = window.Vue.createElementVNode, _m = window.Vue.toDisplayString, tc = window.Vue.unref, nc = window.Vue.withCtx, Sm = window.Vue.createVNode, a6 = window.Vue.openBlock, i6 = window.Vue.createBlock, r6 = window.Vue.createCommentVNode, l6 = ["innerHTML"], c6 = ["textContent"], u6 = ["textContent"], oc = window.Vue.computed, d6 = {
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
    const t = ue(), n = e, o = {
      pending: {
        svg: o6,
        title: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-title"
        ),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-publishing-indicator-subtitle"
        )
      },
      success: {
        svg: s6,
        title: t.i18n("cx-sx-publisher-animation-success-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-success-message-subtitle"
        )
      },
      failure: {
        svg: vm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: vm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = oc(() => o[n.status].svg), a = oc(() => o[n.status].title), r = oc(() => o[n.status].subtitle);
    return (c, u) => e.active ? (a6(), i6(tc(St), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: nc(() => [
        Sm(tc(M), { class: "ma-4" }, {
          default: nc(() => [
            Sm(tc(k), null, {
              default: nc(() => [
                ec("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, l6),
                ec("h2", {
                  textContent: _m(a.value)
                }, null, 8, c6),
                ec("p", {
                  class: "ma-0",
                  textContent: _m(r.value)
                }, null, 8, u6)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : r6("", !0);
  }
};
const st = window.Vue.unref, At = window.Vue.createVNode, pn = window.Vue.withCtx, g6 = window.Vue.resolveDirective, p6 = window.Vue.withDirectives, ym = window.Vue.toDisplayString, m6 = window.Vue.createTextVNode, sc = window.Vue.openBlock, xm = window.Vue.createElementBlock, h6 = window.Vue.createCommentVNode, Nf = window.Vue.createElementVNode, f6 = window.Vue.createBlock, w6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, v6 = ["src"], _6 = ["textContent"], S6 = /* @__PURE__ */ Nf("p", { class: "mt-0" }, null, -1), y6 = window.Vue.computed, x6 = window.Vue.inject, b6 = window.Vue.ref, bm = window.Codex.CdxButton, C6 = window.Codex.CdxIcon, k6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Nh,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = b6(""), s = () => n("close"), a = () => n("publish", o.value), r = x6("breakpoints"), c = y6(() => r.value.mobile);
    return (u, g) => {
      const i = g6("i18n");
      return e.active && e.captchaDetails ? (sc(), f6(st(St), {
        key: 0,
        fullscreen: c.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: pn(() => [
          At(st(M), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: pn(() => [
              At(st(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: pn(() => [
                  At(st(bm), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: pn(() => [
                      At(st(C6), { icon: st(Xo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              p6(At(st(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              At(st(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: pn(() => [
                  At(st(bm), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: pn(() => [
                      m6(ym(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          At(st(Mi))
        ]),
        default: pn(() => [
          Nf("div", w6, [
            e.captchaDetails.type === "image" ? (sc(), xm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, v6)) : (sc(), xm("p", {
              key: 1,
              textContent: ym(e.captchaDetails.question)
            }, null, 8, _6)),
            S6,
            At(st(M), { class: "ma-0" }, {
              default: pn(() => [
                At(st(k), null, {
                  default: pn(() => [
                    At(st(fc), {
                      value: o.value,
                      "onUpdate:value": g[0] || (g[0] = (l) => o.value = l),
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
      }, 8, ["fullscreen"])) : h6("", !0);
    };
  }
};
const Zn = window.Vue.unref, Li = window.Vue.createVNode, Do = window.Vue.withCtx, To = window.Vue.createElementVNode, $6 = window.Vue.resolveDirective, V6 = window.Vue.withDirectives, E6 = window.Vue.renderList, L6 = window.Vue.Fragment, ac = window.Vue.openBlock, A6 = window.Vue.createElementBlock, Cm = window.Vue.toDisplayString, km = window.Vue.createTextVNode, D6 = window.Vue.normalizeClass, $m = window.Vue.createBlock, T6 = { class: "mw-ui-dialog__header" }, B6 = { class: "row ma-0 px-4 py-3" }, P6 = { class: "col shrink justify-center" }, F6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, M6 = { class: "mb-0" }, N6 = { class: "pa-4" }, U6 = window.Codex.CdxField, I6 = window.Codex.CdxRadio, R6 = window.Vuex.useStore, Hs = window.Vue.computed, z6 = window.Codex.CdxButton, O6 = window.Codex.CdxIcon, j6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = R6(), s = Hs(() => o.state.application.publishTarget), a = Hs(() => o.state.translator.isAnon), r = ue(), { sourceSection: c } = te(), u = Hs(
      () => c.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-label") : r.i18n("cx-sx-publisher-new-section-option-label")
    ), g = Hs(
      () => c.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-details") : r.i18n("cx-sx-publisher-new-section-option-details")
    ), i = Hs(() => [
      {
        label: u.value,
        description: g.value,
        value: "NEW_SECTION",
        disabled: !1
      },
      {
        label: r.i18n("cx-sx-publisher-sandbox-option-label"),
        description: r.i18n("cx-sx-publisher-sandbox-option-details"),
        value: "SANDBOX_SECTION",
        disabled: a.value
      }
    ]), l = () => n("update:active", !1), d = (p) => {
      o.commit("application/setPublishTarget", p), l();
    };
    return (p, m) => {
      const h = $6("i18n");
      return ac(), $m(Zn(St), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: p.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: m[0] || (m[0] = (f) => p.$emit("update:active", f)),
        onClose: l
      }, {
        header: Do(() => [
          To("div", T6, [
            To("div", B6, [
              To("div", P6, [
                Li(Zn(z6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": p.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: l
                }, {
                  default: Do(() => [
                    Li(Zn(O6), { icon: Zn(bh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              To("div", F6, [
                V6(To("h4", M6, null, 512), [
                  [h, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Li(Zn(Mi))
          ])
        ]),
        default: Do(() => [
          To("div", N6, [
            Li(Zn(U6), { "is-fieldset": "" }, {
              default: Do(() => [
                (ac(!0), A6(L6, null, E6(i.value, (f, v) => (ac(), $m(Zn(I6), {
                  key: "publish-options-radio-" + f.value,
                  class: D6(v < i.value.length - 1 ? "mb-4" : "mb-0"),
                  "model-value": s.value,
                  "input-value": f.value,
                  disabled: f.disabled,
                  name: "publish-options",
                  "onUpdate:modelValue": d
                }, {
                  description: Do(() => [
                    km(Cm(f.description), 1)
                  ]),
                  default: Do(() => [
                    km(Cm(f.label) + " ", 1)
                  ]),
                  _: 2
                }, 1032, ["class", "model-value", "input-value", "disabled"]))), 128))
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
const Dt = window.Vue.unref, eo = window.Vue.createVNode, Vm = window.Vue.resolveDirective, Em = window.Vue.withDirectives, Ai = window.Vue.openBlock, Lm = window.Vue.createElementBlock, H6 = window.Vue.createCommentVNode, Am = window.Vue.toDisplayString, ic = window.Vue.createElementVNode, Bo = window.Vue.withCtx, Dm = window.Vue.createBlock, q6 = window.Vue.Fragment, G6 = window.Vue.normalizeClass, X6 = { class: "sx-publisher__review-info__content" }, W6 = { key: 0 }, K6 = ["textContent"], Y6 = ["textContent"], Pn = window.Vue.computed, Tm = window.Vue.ref, J6 = window.Vue.watch, Bm = window.Codex.CdxButton, rc = window.Codex.CdxIcon, Q6 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Tm(0), o = Tm(null);
    J6(o, () => {
      var f;
      const h = (f = o.value) == null ? void 0 : f.$el;
      if (h instanceof HTMLElement) {
        const v = h.querySelector("a");
        v && v.setAttribute("target", "_blank");
      }
    });
    const s = Pn(
      () => {
        var h;
        return (h = t.publishFeedbackMessages) == null ? void 0 : h[n.value];
      }
    ), a = Pn(() => {
      var h;
      return ((h = s.value) == null ? void 0 : h.status) || "default";
    }), r = Pn(() => {
      switch (a.value) {
        case "warning":
          return yh;
        case "error":
          return HS;
        default:
          return KS;
      }
    }), c = Pn(() => a.value === "default"), u = Pn(
      () => c.value ? "notice" : a.value
    ), g = Pn(
      () => `sx-publisher__review-info--${u.value}`
    ), i = ue(), l = Pn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), d = Pn(
      () => {
        var h;
        return ((h = s.value) == null ? void 0 : h.title) || i.i18n("cx-sx-publisher-review-info-error");
      }
    ), p = () => {
      const h = t.publishFeedbackMessages.length;
      n.value = (n.value - 1 + h) % h;
    }, m = () => {
      n.value = (n.value + 1) % t.publishFeedbackMessages.length;
    };
    return (h, f) => {
      const v = Vm("i18n"), w = Vm("i18n-html");
      return Ai(), Dm(Dt(r1), {
        type: u.value,
        class: G6(["sx-publisher__review-info ma-0 pa-4", g.value]),
        inline: c.value
      }, {
        icon: Bo(() => [
          eo(Dt(rc), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: Bo(() => [
          ic("div", X6, [
            a.value === "default" ? Em((Ai(), Lm("h5", W6, null, 512)), [
              [v, void 0, "cx-sx-publisher-review-info"]
            ]) : (Ai(), Lm(q6, { key: 1 }, [
              ic("h5", {
                textContent: Am(d.value)
              }, null, 8, K6),
              ic("p", {
                textContent: Am(l.value)
              }, null, 8, Y6),
              eo(Dt(M), {
                justify: "between",
                class: "ma-0"
              }, {
                default: Bo(() => [
                  Em(eo(Dt(k), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [w, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (Ai(), Dm(Dt(k), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: Bo(() => [
                      eo(Dt(Bm), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: Bo(() => [
                          eo(Dt(rc), { icon: Dt(Yc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      eo(Dt(Bm), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: Bo(() => [
                          eo(Dt(rc), { icon: Dt(pa) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ]),
                    _: 1
                  })) : H6("", !0)
                ]),
                _: 1
              })
            ], 64))
          ])
        ]),
        _: 1
      }, 8, ["type", "class", "inline"]);
    };
  }
}, Z6 = (e) => {
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
}, e9 = window.Vuex.useStore, t9 = window.Vue.computed, n9 = () => {
  const e = e9(), { currentTranslation: t } = Mt(), { currentMTProvider: n, previousRoute: o } = Ae(e), { currentTargetPage: s } = ut(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: c,
    sectionURLParameter: u
  } = B(), { sourceSection: g } = te(), i = ct(), l = t9(() => {
    var f;
    const h = {
      translation_source_language: a.value,
      translation_target_language: r.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L294)
      // translation_source_title:
      //   The title of the source article of the current translation. Applies only
      //   to events which relate to a specific translation or suggestion: all
      //   `editor_` and `publish_` events and some `dashboard_` events (e.g.
      //   `dashboard_start_translation`, `dashboard_delete_translation`)
      translation_source_title: c.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L301)
      // translation_target_exists:
      //   Whether the target article or section already exists. Applies only to
      //   events which relate to a specific translation or suggestion: all `editor_`
      //   and `publish_` events and some `dashboard_` events (e.g. `dashboard_start_translation`,
      //   `dashboard_delete_translation`). In section translation, if the user discards the mapping
      //   to an existing target section, the value should change to false in future events.
      translation_target_exists: !!s.value
    };
    if (u.value ? (h.translation_source_section = u.value, h.translation_type = "section") : h.translation_type = "article", t.value) {
      h.translation_id = t.value.translationId, h.translation_target_title = t.value.targetTitle;
      const v = t.value.targetSectionTitle;
      v && (h.translation_target_section = v);
    } else
      s.value && (h.translation_target_title = (f = s.value) == null ? void 0 : f.title);
    return n.value && (h.translation_provider = ee.getProviderForInstrumentation(n.value)), h.human_modification_rate = Kt.getMTScoreForPageSection(
      g.value,
      r.value
    ) / 100, h.human_modification_threshold = Kt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => i(ie({
      event_type: "publish_attempt"
    }, l.value)),
    logPublishSuccessEvent: (h, f) => i(ie({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: f
    }, l.value)),
    logPublishFailureEvent: () => i(ie({
      event_type: "publish_failure"
    }, l.value))
  };
}, o9 = window.Vue.computed, Pm = window.Vue.ref, s9 = window.Vuex.useStore, a9 = () => {
  const e = s9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), { sourceSection: s, targetPageTitleForPublishing: a } = te(), r = Pf(), { sectionSuggestion: c } = Ie(), u = o9(
    () => {
      var y, S;
      return (S = c.value) == null ? void 0 : S.presentSections[(y = s.value) == null ? void 0 : y.sourceSectionTitleForPublishing];
    }
  ), { existingSectionPublishOption: g } = ru(), i = Pm(!1), l = Pm("pending"), d = () => i.value = !1, p = uu(), {
    logPublishAttemptEvent: m,
    logPublishSuccessEvent: h,
    logPublishFailureEvent: f
  } = n9(), v = (y, S) => C(void 0, null, function* () {
    m();
    const x = yield p();
    if (x instanceof Io)
      return f(), { publishFeedbackMessage: x, targetUrl: null };
    const L = x, b = a.value, N = e.getters["application/isSandboxTarget"], V = {
      html: Z6(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: b,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: r.value,
      isSandbox: N,
      sectionTranslationId: L
    };
    u.value && g.value === "expand" && (V.existingSectionTitle = u.value), y && (V.captchaId = y, V.captchaWord = S);
    const T = yield _t.publishTranslation(
      V
    );
    return T.publishFeedbackMessage === null ? h(T.pageId, T.revisionId) : f(), T;
  });
  return {
    closePublishDialog: d,
    doPublish: (y = null, S = null) => C(void 0, null, function* () {
      l.value = "pending", i.value = !0;
      let x;
      try {
        x = yield v(
          S == null ? void 0 : S.id,
          y
        );
      } catch (L) {
        if (L instanceof Oo)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw L;
      }
      return x;
    }),
    isPublishDialogActive: i,
    publishStatus: l
  };
}, i9 = window.Vue.computed, r9 = () => {
  const e = Ge(), { sourceSection: t } = te(), { getCurrentTitleByLanguage: n } = vn(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = i9(
    () => t.value.subSections.reduce(
      (r, c) => c.isTranslated ? `${r}<section rel="cx:Section" id="${c.targetSectionId}">${c.translatedContent}</section>` : r,
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
}, l9 = () => {
  const { targetLanguageURLParameter: e } = B(), { sourceSection: t } = te();
  return () => {
    const n = Kt.getMTScoreForPageSection(
      t.value,
      e.value
    ), o = Kt.getScoreStatus(n);
    if (o === "success")
      return null;
    const s = 100 - n, a = o === "failure" ? "error" : "warning";
    let r, c;
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), c = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), c = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Io({
      title: r,
      text: c,
      status: a,
      type: "mt"
    });
  };
}, c9 = window.Vue.ref, u9 = window.Vue.computed, d9 = () => {
  const e = l9(), t = c9([]), n = u9(
    () => t.value.some((r) => r.isError)
  );
  return {
    addPublishFeedbackMessage: (r) => {
      t.value.push(r), t.value.sort((c, u) => +u.isError - +c.isError);
    },
    clearPublishFeedbackMessages: () => {
      t.value = [];
    },
    publishFeedbackMessages: t,
    isPublishingDisabled: n,
    initializePublishFeedbackMessages: () => {
      const r = e();
      r && t.value.push(r);
    }
  };
}, g9 = window.Vuex.useStore, p9 = () => {
  const e = g9(), { currentSourcePage: t } = ut(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), { sourceSection: s, targetPageTitleForPublishing: a } = te();
  return (r) => C(void 0, null, function* () {
    const c = a.value, u = e.getters["application/isSandboxTarget"], g = t.value.title, i = new mw.Title(g), l = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && i.getNamespaceId() !== l.user)
      try {
        yield ji.addWikibaseLink(
          n.value,
          o.value,
          g,
          c
        );
      } catch (d) {
        mw.log.error("Error while adding wikibase link", d);
      }
    if (!r) {
      const d = "[CX] Target URL is empty after successful publishing";
      throw mw.log.error(d), new Error(d);
    }
    location.href = r;
  });
}, Fm = window.Vue.ref, m9 = () => {
  const e = Fm(!1), t = Fm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const _e = window.Vue.unref, Ke = window.Vue.createVNode, h9 = window.Vue.resolveDirective, qs = window.Vue.createElementVNode, f9 = window.Vue.withDirectives, Po = window.Vue.withCtx, w9 = window.Vue.openBlock, v9 = window.Vue.createElementBlock, _9 = { class: "sx-publisher" }, S9 = { class: "sx-publisher__publish-panel pa-4" }, y9 = { class: "mb-2" }, x9 = ["innerHTML"], b9 = { class: "sx-publisher__section-preview pa-5" }, C9 = ["innerHTML"], Mm = window.Vue.computed, k9 = window.Vue.onMounted, $9 = window.Vue.ref, V9 = window.Vue.watch, E9 = window.Vuex.useStore, Nm = window.Codex.CdxButton, Um = window.Codex.CdxIcon, L9 = {
  __name: "SXPublisher",
  setup(e) {
    const t = E9(), { sourceSection: n } = te(), o = Mm(() => {
      var N;
      return (N = n.value) == null ? void 0 : N.title;
    }), s = ue(), a = Mm(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: r,
      captchaDialogOn: c,
      handleCaptchaError: u,
      onCaptchaDialogClose: g
    } = m9(), {
      publishFeedbackMessages: i,
      isPublishingDisabled: l,
      addPublishFeedbackMessage: d,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = d9(), h = p9(), { doPublish: f, isPublishDialogActive: v, publishStatus: w, closePublishDialog: y } = a9(), S = (N = null) => C(this, null, function* () {
      if (l.value)
        return;
      const V = yield f(N, r.value);
      if (!V)
        return;
      const { publishFeedbackMessage: T, targetUrl: I } = V;
      if (u(T)) {
        y();
        return;
      } else
        T && d(T);
      w.value = l.value ? "failure" : "success", setTimeout(() => {
        if (l.value) {
          y();
          return;
        }
        h(I);
      }, 1e3);
    });
    k9(() => m());
    const x = r9(), L = $9(!1), b = () => L.value = !0;
    return V9(L, (N) => {
      N || (p(), m());
    }), (N, V) => {
      const T = h9("i18n");
      return w9(), v9("section", _9, [
        Ke(n6, {
          "is-publishing-disabled": _e(l),
          onPublishTranslation: S
        }, null, 8, ["is-publishing-disabled"]),
        qs("div", S9, [
          f9(qs("h5", y9, null, 512), [
            [T, void 0, "cx-sx-publisher-publish-panel-new-section-status"]
          ]),
          qs("h6", {
            class: "mb-2",
            innerHTML: a.value
          }, null, 8, x9),
          Ke(_e(M), {
            justify: "end",
            class: "ma-0"
          }, {
            default: Po(() => [
              Ke(_e(k), { shrink: "" }, {
                default: Po(() => [
                  Ke(_e(Nm), {
                    weight: "quiet",
                    "aria-label": N.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: b
                  }, {
                    default: Po(() => [
                      Ke(_e(Um), { icon: _e(sy) }, null, 8, ["icon"])
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
        Ke(Q6, { "publish-feedback-messages": _e(i) }, null, 8, ["publish-feedback-messages"]),
        qs("section", b9, [
          Ke(_e(M), { class: "pb-5 ma-0" }, {
            default: Po(() => [
              Ke(_e(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              Ke(_e(k), { shrink: "" }, {
                default: Po(() => [
                  Ke(_e(Nm), {
                    weight: "quiet",
                    "aria-label": N.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: _e(x)
                  }, {
                    default: Po(() => [
                      Ke(_e(Um), { icon: _e(Xc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label", "onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          qs("div", {
            innerHTML: _e(n).translationHtml
          }, null, 8, C9)
        ]),
        Ke(j6, {
          active: L.value,
          "onUpdate:active": V[0] || (V[0] = (I) => L.value = I)
        }, null, 8, ["active"]),
        Ke(k6, {
          active: _e(c),
          "captcha-details": _e(r),
          onClose: _e(g),
          onPublish: V[1] || (V[1] = (I) => S(I))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        Ke(d6, {
          active: _e(v),
          status: _e(w)
        }, null, 8, ["active", "status"])
      ]);
    };
  }
};
const A9 = {
  name: "SxPublisherView",
  components: {
    SxPublisher: L9
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.tabletAndDown
      };
    }
  }
}, D9 = window.Vue.resolveComponent, T9 = window.Vue.createVNode, B9 = window.Vue.normalizeClass, P9 = window.Vue.openBlock, F9 = window.Vue.createElementBlock;
function M9(e, t, n, o, s, a) {
  const r = D9("sx-publisher");
  return P9(), F9("main", {
    class: B9(["sx-publisher-view", a.classes])
  }, [
    T9(r)
  ], 2);
}
const N9 = /* @__PURE__ */ oe(A9, [["render", M9]]);
const Tt = window.Vue.unref, Fn = window.Vue.createVNode, to = window.Vue.withCtx, lc = window.Vue.toDisplayString, cc = window.Vue.createElementVNode, U9 = window.Vue.openBlock, I9 = window.Vue.createBlock, R9 = ["textContent"], z9 = ["textContent"], O9 = ["textContent"], Uf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: Ho,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (U9(), I9(Tt(M), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Tt(R.getDir)(e.suggestion.language)
    }, {
      default: to(() => [
        Fn(Tt(k), { shrink: "" }, {
          default: to(() => [
            Fn(Tt(Tc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Fn(Tt(k), { class: "ms-4" }, {
          default: to(() => [
            Fn(Tt(M), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: to(() => [
                Fn(Tt(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: to(() => [
                    cc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: lc(e.suggestion.title)
                    }, null, 8, R9)
                  ]),
                  _: 1
                }),
                Fn(Tt(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: to(() => [
                    cc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: lc(e.suggestion.description)
                    }, null, 8, z9)
                  ]),
                  _: 1
                }),
                Fn(Tt(k), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: to(() => [
                    Fn(Tt(qe), {
                      icon: Tt(k0),
                      size: 16,
                      class: "me-2"
                    }, null, 8, ["icon"]),
                    cc("small", {
                      textContent: lc((e.suggestion.langLinksCount || 0) + 1)
                    }, null, 8, O9)
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
const Gs = window.Vue.unref, Xs = window.Vue.openBlock, uc = window.Vue.createBlock, j9 = window.Vue.createCommentVNode, H9 = window.Vue.resolveDirective, q9 = window.Vue.withDirectives, Im = window.Vue.createElementBlock, G9 = window.Vue.renderList, X9 = window.Vue.Fragment, W9 = window.Vue.normalizeClass, K9 = window.Vue.withCtx, Y9 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, Rm = window.Vue.computed, J9 = window.Vue.ref, Q9 = {
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
    const { sourceLanguageURLParameter: t } = B(), n = Rm(() => R.getAutonym(t.value)), o = e, s = J9(null), a = (l) => s.value = l, r = () => s.value = null, c = (l) => {
      var d;
      return ((d = o.selectedItem) == null ? void 0 : d.title) === l.title && !s.value || s.value === l.pageId;
    }, u = Rm(() => o.searchInput), { searchResultsLoading: g, searchResultsSlice: i } = nu(
      t,
      u
    );
    return (l, d) => {
      const p = H9("i18n");
      return Xs(), uc(Gs(Je), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: K9(() => [
          Gs(g) ? (Xs(), uc(Gs(rt), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Gs(i).length === 0 ? q9((Xs(), Im("p", Y9, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : j9("", !0),
          (Xs(!0), Im(X9, null, G9(Gs(i), (m) => (Xs(), uc(Uf, {
            key: m.pageId,
            suggestion: m,
            class: W9({
              "sx-article-search__results-selected": c(m)
            }),
            onMouseenter: (h) => a(m.pageId),
            onMouseleave: r,
            onClick: (h) => l.$emit("suggestion-clicked", m)
          }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
        ]),
        _: 1
      });
    };
  }
};
const Z9 = window.Vue.toDisplayString, eB = window.Vue.createElementVNode, tB = window.Vue.renderList, nB = window.Vue.Fragment, dc = window.Vue.openBlock, oB = window.Vue.createElementBlock, sB = window.Vue.normalizeClass, zm = window.Vue.createBlock, aB = window.Vue.unref, Om = window.Vue.withCtx, iB = ["textContent"], rB = window.Vue.ref, jm = {
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
    const n = e, o = rB(null), s = (c) => o.value = c, a = () => o.value = null, r = (c) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === c.title && !o.value || o.value === c.pageId;
    };
    return (c, u) => (dc(), zm(aB(Je), { class: "sx-article-search__suggestions pa-0" }, {
      header: Om(() => [
        eB("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: Z9(e.cardTitle)
        }, null, 8, iB)
      ]),
      default: Om(() => [
        (dc(!0), oB(nB, null, tB(e.suggestions, (g) => (dc(), zm(Uf, {
          key: g.pageId,
          suggestion: g,
          class: sB({
            "sx-article-search__suggestions-selected": r(g)
          }),
          onMouseenter: (i) => s(g.pageId),
          onMouseleave: a,
          onClick: (i) => c.$emit("suggestion-clicked", g)
        }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, lB = window.Vue.computed, cB = (e, t) => lB(() => {
  const o = [], s = {
    value: "other",
    props: {
      icon: L0,
      type: "icon",
      class: "px-0 py-4 me-4 ms-auto"
    }
  };
  return t.value.includes(e.value) ? o.push(
    ...t.value.slice(0, 2 + 1)
  ) : o.push(
    e.value,
    ...t.value.slice(0, 2)
  ), [...o.filter(
    (r, c) => o.findIndex((u) => u === r) === c
  ).map((r) => ({
    value: r,
    props: {
      label: R.getAutonym(r),
      type: "text",
      class: "px-0 py-4 mx-4"
    }
  })), s];
}), uB = window.Vue.computed, dB = () => {
  const { supportedSourceLanguageCodes: e } = ua(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return { getSuggestedSourceLanguages: (s) => uB(() => {
    const a = (navigator.language || "").split("-")[0], r = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((u) => u.split("-")[0]), c = [
      ...s.value,
      // User's current interface language
      mw.config.get("wgUserLanguage"),
      // Current wiki's content language
      mw.config.get("wgContentLanguage"),
      a,
      ...r
    ];
    return [...new Set(c)].filter(
      (u) => u !== n.value && e.value.includes(u)
    );
  }) };
};
const gB = window.Vue.resolveDirective, pB = window.Vue.createElementVNode, gc = window.Vue.withDirectives, ce = window.Vue.unref, Ws = window.Vue.withCtx, Xt = window.Vue.createVNode, Ks = window.Vue.openBlock, Hm = window.Vue.createBlock, mB = window.Vue.createCommentVNode, pc = window.Vue.createElementBlock, hB = window.Vue.Fragment, fB = window.Vue.vShow, Ys = window.Vue.withModifiers, Js = window.Vue.withKeys, wB = ["onKeydown"], vB = { class: "mb-0" }, _B = {
  key: 2,
  class: "sx-article-search__empty-state"
}, Fo = window.Vue.ref, SB = window.Vue.onMounted, yB = window.Vue.onBeforeUnmount, Qs = window.Vue.computed, qm = window.Vue.watch, xB = window.Vue.inject, bB = window.Vuex.useStore, CB = window.Codex.CdxButton, kB = window.Codex.CdxIcon, $B = window.Codex.CdxSearchInput, VB = 3, EB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = Fo(""), n = Fo(!1), o = Fo(null), s = Fo(!1), a = Fo([]), r = bB(), {
      sourceLanguageURLParameter: c,
      targetLanguageURLParameter: u
    } = B(), { supportedSourceLanguageCodes: g } = ua(), { searchResultsSlice: i } = nu(c, t), { getSuggestedSourceLanguages: l } = dB(), d = l(a), p = cB(
      c,
      d
    ), m = Ge(), { fetchAllTranslations: h } = Wo();
    SB(() => C(this, null, function* () {
      var P;
      h();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("cxPreviousLanguages"))
        ), y();
      } catch (H) {
      }
      (P = o.value) == null || P.focus(), window.addEventListener("beforeunload", S);
    })), yB(() => {
      window.removeEventListener("beforeunload", S), S();
    });
    const f = () => {
      m.push({ name: "dashboard" });
    }, v = Fh(), w = (P) => {
      v(P, u.value), a.value.includes(P) || y();
    }, y = () => {
      a.value = [
        c.value,
        ...a.value.filter((P) => P !== c.value)
      ];
    }, S = () => {
      mw.storage.set(
        "cxPreviousLanguages",
        JSON.stringify(a.value)
      );
    }, x = (P) => {
      if (P === "other") {
        s.value = !0;
        return;
      }
      w(P);
    };
    qm(
      c,
      () => {
        var P;
        r.dispatch("mediawiki/fetchNearbyPages"), (P = o.value) == null || P.focus();
      },
      { immediate: !0 }
    );
    const L = ct();
    qm(t, () => {
      n.value || (n.value = !0, L({
        event_type: "dashboard_search",
        translation_source_language: c.value,
        translation_target_language: u.value
      }));
    });
    const b = () => {
      s.value = !1;
    }, N = (P) => {
      s.value = !1, x(P);
    }, { fetchPreviousEditsInSource: V, previousEditsInSource: T } = vh(), I = Fo([]);
    (() => V().then(() => T.value.length > 0 ? so.fetchPages(
      c.value,
      T.value
    ) : []).then((P) => {
      P = P.slice(0, VB), P = P.sort(
        (H, _) => T.value.indexOf(H.title) - T.value.indexOf(_.title)
      ), I.value = P;
    }))();
    const Y = Qs(() => r.getters["mediawiki/getNearbyPages"]), ke = xB("breakpoints"), Se = Qs(() => ke.value.mobile), Xe = ma(), Re = Qs(
      () => I.value && I.value.length
    ), ye = Qs(
      () => Y.value && Y.value.length
    ), { next: De, prev: U, keyboardNavigationContainer: q, selectedItem: G } = hf(t, i, I), se = (P) => Xe(
      P.title,
      c.value,
      u.value,
      xe.value
    ), xe = Qs(() => t.value ? "search_result" : Re.value ? "suggestion_recent_edit" : ye.value ? "suggestion_nearby" : "");
    return (P, H) => {
      const _ = gB("i18n");
      return Ks(), pc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: q,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          H[5] || (H[5] = Js(Ys((...E) => ce(De) && ce(De)(...E), ["stop", "prevent"]), ["tab"])),
          H[6] || (H[6] = Js(Ys((...E) => ce(De) && ce(De)(...E), ["stop", "prevent"]), ["down"])),
          H[7] || (H[7] = Js(Ys((...E) => ce(U) && ce(U)(...E), ["stop", "prevent"]), ["up"])),
          Js(Ys(f, ["stop", "prevent"]), ["esc"]),
          H[8] || (H[8] = Js(Ys((E) => se(ce(G)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        Xt(ce(M), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Ws(() => [
            Xt(ce(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: Ws(() => [
                gc(pB("h5", vB, null, 512), [
                  [_, void 0, "cx-sx-article-search-header"]
                ])
              ]),
              _: 1
            }),
            Xt(ce(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Ws(() => [
                Xt(ce(CB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": P.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: f
                }, {
                  default: Ws(() => [
                    Xt(ce(kB), { icon: ce(Xo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Xt(ce($B), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": H[0] || (H[0] = (E) => t.value = E),
          class: "sx-article-search__search-input",
          placeholder: P.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Xt(ce(ia), {
          class: "sx-article-search__language-button-group",
          items: ce(p),
          active: ce(c),
          onSelect: x
        }, null, 8, ["items", "active"]),
        t.value ? mB("", !0) : (Ks(), pc(hB, { key: 0 }, [
          Re.value ? (Ks(), Hm(jm, {
            key: 0,
            "card-title": P.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: I.value,
            "selected-item": ce(G),
            onSuggestionClicked: H[1] || (H[1] = (E) => se(E))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : ye.value ? (Ks(), Hm(jm, {
            key: 1,
            "card-title": P.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: Y.value,
            onSuggestionClicked: H[2] || (H[2] = (E) => se(E))
          }, null, 8, ["card-title", "suggestions"])) : gc((Ks(), pc("p", _B, null, 512)), [
            [_, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        gc(Xt(Q9, {
          "search-input": t.value,
          "selected-item": ce(G),
          onSuggestionClicked: H[3] || (H[3] = (E) => se(E))
        }, null, 8, ["search-input", "selected-item"]), [
          [fB, !!t.value]
        ]),
        Xt(ce(St), {
          value: s.value,
          "onUpdate:value": H[4] || (H[4] = (E) => s.value = E),
          class: "sx-article-search-language-selector",
          fullscreen: Se.value,
          header: Se.value,
          title: P.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: b
        }, {
          default: Ws(() => [
            Xt(ce(ff), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: ce(g),
              suggestions: ce(d),
              placeholder: P.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: N,
              onClose: b
            }, null, 8, ["languages", "suggestions", "placeholder"])
          ]),
          _: 1
        }, 8, ["value", "fullscreen", "header", "title"])
      ], 40, wB);
    };
  }
};
const LB = {
  name: "SxArticleSearchView",
  components: {
    SxArticleSearch: EB
  },
  computed: {
    classes: (e) => ({ fullscreen: e.$mwui.breakpoint.mobile })
  }
}, AB = window.Vue.resolveComponent, DB = window.Vue.createVNode, TB = window.Vue.normalizeClass, BB = window.Vue.openBlock, PB = window.Vue.createElementBlock;
function FB(e, t, n, o, s, a) {
  const r = AB("sx-article-search");
  return BB(), PB("main", {
    class: TB(["sx-article-search-view", a.classes])
  }, [
    DB(r)
  ], 2);
}
const MB = /* @__PURE__ */ oe(LB, [["render", FB]]), NB = () => {
  const e = ma(), t = iu(), { logDashboardOpenEvent: n, getEventSource: o } = xf(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r
  } = B();
  return () => C(void 0, null, function* () {
    return t(s.value, r.value).then(
      () => n()
    ), e(
      r.value,
      s.value,
      a.value,
      o(),
      null,
      !1
    );
  });
}, UB = window.Vuex.useStore, IB = [
  {
    path: "",
    name: "dashboard",
    component: Ig,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: MB,
    meta: { workflowStep: 0.5 }
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: O4,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: n3,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: v5,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: gT,
    meta: { workflowStep: 3.5 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: FD,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: JT,
    meta: { workflowStep: 4.5 }
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: N9,
    meta: { workflowStep: 5 }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Ig,
    meta: { workflowStep: 0 }
  }
], du = qb({
  history: Hx(),
  routes: IB
}), mc = (e, t, n) => {
  e === t ? n() : n({ name: t });
}, RB = (e, t, n) => {
  let o = "cx_" + btoa(
    encodeURIComponent([n, e, t].join("_"))
  );
  return o = o.replace(/[()<>@,;\\[\]?={}]/g, ""), mw.cookie.get(o, "");
};
du.beforeEach((e, t, n) => {
  const o = UB();
  if (mw.user.isAnon() || Jm.assertUser().catch((i) => {
    i instanceof Oo && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = NB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: c,
    clearTranslationURLParameters: u
  } = B();
  if (!!(a.value && r.value && c.value)) {
    if (RB(
      a.value,
      r.value,
      c.value
    )) {
      const l = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      mc(e.name, l, n);
    } else
      e.name === "sx-translation-confirmer" && s(), mc(e.name, "sx-translation-confirmer", n);
    return;
  }
  u(), mc(e.name, "dashboard", n);
});
du.afterEach((e, t) => {
  if (!t.name)
    return;
  const n = e.meta.workflowStep, o = t.meta.workflowStep;
  e.meta.transitionName = n < o ? "mw-ui-animation-slide-end" : "mw-ui-animation-slide-start";
});
const zB = window.Vue.createApp, OB = mw.config.get("wgUserLanguage"), jB = "en", HB = mw.messages.values || {}, Jo = zB(By);
Jo.use(du);
Jo.use(gx);
Jo.use(ov);
Jo.use(nv);
const qB = Pv({
  locale: OB,
  finalFallback: jB,
  messages: HB,
  wikilinks: !0
});
Jo.use(qB);
Jo.mount("#contenttranslation");
