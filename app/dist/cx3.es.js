var Yf = Object.defineProperty, Qf = Object.defineProperties;
var Jf = Object.getOwnPropertyDescriptors;
var wu = Object.getOwnPropertySymbols;
var Zf = Object.prototype.hasOwnProperty, ew = Object.prototype.propertyIsEnumerable;
var vu = (e, t, n) => t in e ? Yf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ae = (e, t) => {
  for (var n in t || (t = {}))
    Zf.call(t, n) && vu(e, n, t[n]);
  if (wu)
    for (var n of wu(t))
      ew.call(t, n) && vu(e, n, t[n]);
  return e;
}, Qe = (e, t) => Qf(e, Jf(t));
var b = (e, t, n) => new Promise((o, s) => {
  var a = (u) => {
    try {
      l(n.next(u));
    } catch (d) {
      s(d);
    }
  }, r = (u) => {
    try {
      l(n.throw(u));
    } catch (d) {
      s(d);
    }
  }, l = (u) => u.done ? o(u.value) : Promise.resolve(u.value).then(a, r);
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
    CdxTabs: u,
    CdxTab: d,
    CdxField: i,
    CdxRadio: c
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
    CdxTabs: u,
    CdxTab: d,
    CdxField: i,
    CdxRadio: c
  };
}
const oe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, tw = {
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
}, nw = window.Vue.toDisplayString, tr = window.Vue.openBlock, nr = window.Vue.createElementBlock, ow = window.Vue.createCommentVNode, _u = window.Vue.createElementVNode, sw = window.Vue.normalizeClass, aw = ["width", "height", "aria-labelledby"], iw = ["id"], rw = ["fill"], lw = ["d"];
function cw(e, t, n, o, s, a) {
  return tr(), nr("span", {
    class: sw(["mw-ui-icon notranslate", a.classes])
  }, [
    (tr(), nr("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 20 20",
      "aria-labelledby": n.iconName,
      "aria-hidden": "true",
      role: "presentation",
      onClick: t[0] || (t[0] = (...r) => a.handleClick && a.handleClick(...r))
    }, [
      n.iconName ? (tr(), nr("title", {
        key: 0,
        id: n.iconName
      }, nw(n.iconName), 9, iw)) : ow("", !0),
      _u("g", { fill: n.iconColor }, [
        _u("path", { d: a.iconImagePath }, null, 8, lw)
      ], 8, rw)
    ], 8, aw))
  ], 2);
}
const je = /* @__PURE__ */ oe(tw, [["render", cw]]);
const uw = {
  name: "MwButton",
  components: {
    MwIcon: je
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
}, dw = window.Vue.renderSlot, gw = window.Vue.resolveComponent, Su = window.Vue.normalizeClass, _a = window.Vue.openBlock, or = window.Vue.createBlock, sr = window.Vue.createCommentVNode, pw = window.Vue.toDisplayString, hw = window.Vue.createElementBlock, fw = window.Vue.toHandlerKey, ww = window.Vue.withModifiers, vw = window.Vue.mergeProps, _w = window.Vue.createElementVNode, Sw = window.Vue.resolveDynamicComponent, yw = window.Vue.withCtx, xw = { class: "mw-ui-button__content" }, Cw = ["textContent"];
function bw(e, t, n, o, s, a) {
  const r = gw("mw-icon");
  return _a(), or(Sw(a.component), {
    class: Su(["mw-ui-button", a.classes]),
    href: n.href,
    disabled: n.disabled || null
  }, {
    default: yw(() => [
      dw(e.$slots, "default", {}, () => [
        _w("span", xw, [
          n.icon ? (_a(), or(r, {
            key: 0,
            icon: n.icon,
            size: n.large ? 28 : n.iconSize,
            class: Su(["mw-ui-button__icon", a.iconClass])
          }, null, 8, ["icon", "size", "class"])) : sr("", !0),
          !a.isIcon && n.label ? (_a(), hw("span", {
            key: 1,
            class: "mw-ui-button__label",
            textContent: pw(n.label)
          }, null, 8, Cw)) : sr("", !0),
          n.indicator ? (_a(), or(r, vw({
            key: 2,
            icon: n.indicator,
            size: n.large ? 28 : n.indicatorSize,
            class: ["mw-ui-button__indicator", a.indicatorClass]
          }, {
            [fw(a.indicatorClickEvent)]: t[0] || (t[0] = ww((l) => e.$emit("indicator-icon-clicked"), ["stop"]))
          }), null, 16, ["icon", "size", "class"])) : sr("", !0)
        ])
      ])
    ]),
    _: 3
  }, 8, ["class", "href", "disabled"]);
}
const Me = /* @__PURE__ */ oe(uw, [["render", bw]]);
const kw = {
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
}, $w = window.Vue.renderList, Vw = window.Vue.Fragment, ar = window.Vue.openBlock, yu = window.Vue.createElementBlock, Ew = window.Vue.resolveComponent, Lw = window.Vue.withModifiers, Aw = window.Vue.mergeProps, Dw = window.Vue.createBlock, Tw = { class: "row mw-ui-button-group ma-0 pa-0" };
function Bw(e, t, n, o, s, a) {
  const r = Ew("mw-button");
  return ar(), yu("div", Tw, [
    (ar(!0), yu(Vw, null, $w(n.items, (l) => (ar(), Dw(r, Aw({
      key: l.value,
      value: l.value,
      "aria-selected": a.isActive(l) || null,
      ref_for: !0
    }, l.props, {
      class: ["ma-0", a.buttonClasses(l)],
      style: a.activeIndicatorStyle(l),
      onClick: Lw((u) => e.$emit("select", l.value), ["stop"])
    }), null, 16, ["value", "aria-selected", "class", "style", "onClick"]))), 128))
  ]);
}
const ia = /* @__PURE__ */ oe(kw, [["render", Bw]]);
const Pw = {
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
}, xu = window.Vue.renderSlot, Fw = window.Vue.toDisplayString, Cu = window.Vue.openBlock, bu = window.Vue.createElementBlock, Mw = window.Vue.createCommentVNode, Nw = window.Vue.createElementVNode, Uw = { class: "mw-ui-card" }, Iw = ["textContent"], Rw = { class: "mw-ui-card__content" };
function zw(e, t, n, o, s, a) {
  return Cu(), bu("div", Uw, [
    xu(e.$slots, "header", {}, () => [
      n.title ? (Cu(), bu("div", {
        key: 0,
        class: "mw-ui-card__title title",
        textContent: Fw(n.title)
      }, null, 8, Iw)) : Mw("", !0)
    ]),
    Nw("div", Rw, [
      xu(e.$slots, "default")
    ])
  ]);
}
const Ye = /* @__PURE__ */ oe(Pw, [["render", zw]]);
const Ow = {}, jw = window.Vue.openBlock, Hw = window.Vue.createElementBlock, qw = { class: "mw-ui-divider row" };
function Gw(e, t) {
  return jw(), Hw("div", qw);
}
const Mi = /* @__PURE__ */ oe(Ow, [["render", Gw]]);
const Xw = {
  name: "MWGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
}, Ww = window.Vue.renderSlot, Kw = window.Vue.resolveDynamicComponent, Yw = window.Vue.withCtx, Qw = window.Vue.openBlock, Jw = window.Vue.createBlock;
function Zw(e, t, n, o, s, a) {
  return Qw(), Jw(Kw(n.tag), { class: "mw-grid container" }, {
    default: Yw(() => [
      Ww(e.$slots, "default")
    ]),
    _: 3
  });
}
const e0 = /* @__PURE__ */ oe(Xw, [["render", Zw]]), t0 = {
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
}, n0 = window.Vue.renderSlot, o0 = window.Vue.resolveDynamicComponent, s0 = window.Vue.normalizeClass, a0 = window.Vue.withCtx, i0 = window.Vue.openBlock, r0 = window.Vue.createBlock;
function l0(e, t, n, o, s, a) {
  return i0(), r0(o0(n.tag), {
    class: s0(a.classes)
  }, {
    default: a0(() => [
      n0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const F = /* @__PURE__ */ oe(t0, [["render", l0]]), hc = ["mobile", "tablet", "desktop", "desktop-wide"], c0 = hc.reduce(
  (e, t) => Qe(ae({}, e), {
    [t]: {
      type: [String, Number],
      default: null
    }
  }),
  {}
), u0 = {
  name: "MwCol",
  props: Qe(ae({}, c0), {
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
}, d0 = window.Vue.renderSlot, g0 = window.Vue.resolveDynamicComponent, p0 = window.Vue.normalizeClass, m0 = window.Vue.withCtx, h0 = window.Vue.openBlock, f0 = window.Vue.createBlock;
function w0(e, t, n, o, s, a) {
  return h0(), f0(g0(n.tag), {
    class: p0(a.classes)
  }, {
    default: m0(() => [
      d0(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const k = /* @__PURE__ */ oe(u0, [["render", w0]]), v0 = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z", _0 = "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z", Ni = "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z", S0 = {
  path: "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: !1
}, y0 = "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z", Qm = "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z", x0 = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z", C0 = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z", ra = "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z", b0 = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z", k0 = "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z", $0 = "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z", ku = "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z", V0 = "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z", Jm = "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z", E0 = "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z", L0 = "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", A0 = "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0", D0 = "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2", T0 = "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z", B0 = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
}, Ti = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: !1
}, P0 = {
  path: "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
}, Zm = {
  path: "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
}, F0 = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
}, eh = "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z", M0 = "m 15.17,5 h -2.91 a 4.88,4.88 0 0 1 1.55,2 H 15 a 3,3 0 1 1 0,6 H 12 A 3,3 0 0 1 9.18,9 H 7.08 A 4.82,4.82 0 0 0 7,9.83 v 0.34 A 4.83,4.83 0 0 0 11.83,15 h 3.34 A 4.83,4.83 0 0 0 20,10.17 V 9.83 A 4.83,4.83 0 0 0 15.17,5 Z M 4.83,15 H 7.74 A 4.88,4.88 0 0 1 6.19,13 H 5 A 3,3 0 1 1 5,7 h 3 a 3,3 0 0 1 2.82,4 h 2.1 A 4.82,4.82 0 0 0 13,10.17 V 9.83 A 4.83,4.83 0 0 0 8.17,5 H 4.83 A 4.83,4.83 0 0 0 0,9.83 v 0.34 A 4.83,4.83 0 0 0 4.83,15 Z";
const ir = window.Vue.computed, N0 = window.Vue.watch, U0 = window.Vue.ref, I0 = window.Vue.nextTick, R0 = {
  name: "MwDialog",
  components: {
    MwButton: Me,
    MwRow: F,
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
    const n = U0(null), o = ir(() => ({
      "mw-ui-dialog--fullscreen": e.fullscreen,
      "mw-ui-dialog--dialog": !e.fullscreen
    })), s = ir(
      () => `mw-ui-dialog__overlay--${e.overlayMode}`
    ), a = () => {
      document.body.classList.remove("mw-ui-dialog--open"), t.emit("input", !1), t.emit("close");
    }, r = () => {
      document.body.classList.add("mw-ui-dialog--open");
    };
    N0(
      () => e.value,
      (u) => {
        u ? (r(), I0(() => {
          n.value.focus();
        })) : a();
      }
    );
    const l = ir(() => ({
      "--dialog-min-height": e.minHeight
    }));
    return {
      close: a,
      classes: o,
      cssVars: l,
      overlayClass: s,
      mwIconClose: ra,
      root: n
    };
  }
}, $u = window.Vue.normalizeClass, rr = window.Vue.createElementVNode, lr = window.Vue.renderSlot, Sa = window.Vue.resolveComponent, es = window.Vue.createVNode, cr = window.Vue.withCtx, Vu = window.Vue.createCommentVNode, z0 = window.Vue.withKeys, Eu = window.Vue.openBlock, O0 = window.Vue.createElementBlock, j0 = window.Vue.Transition, H0 = window.Vue.normalizeStyle, q0 = window.Vue.createBlock, G0 = { class: "mw-ui-dialog__shell items-stretch" }, X0 = { class: "mw-ui-dialog__body" };
function W0(e, t, n, o, s, a) {
  const r = Sa("mw-col"), l = Sa("mw-button"), u = Sa("mw-row"), d = Sa("mw-divider");
  return Eu(), q0(j0, {
    name: "mw-ui-animation-fade",
    style: H0(o.cssVars)
  }, {
    default: cr(() => [
      n.value ? (Eu(), O0("div", {
        key: 0,
        ref: "root",
        class: $u(["mw-ui-dialog", o.classes]),
        tabindex: "0",
        role: "dialog",
        "aria-modal": "true",
        onKeyup: t[1] || (t[1] = z0((i) => n.closeOnEscapeKey && o.close(), ["esc"]))
      }, [
        rr("div", {
          class: $u(["mw-ui-dialog__overlay", o.overlayClass]),
          onClick: t[0] || (t[0] = (i) => !n.persistent && o.close())
        }, null, 2),
        rr("div", G0, [
          n.header ? lr(e.$slots, "header", { key: 0 }, () => [
            es(u, { class: "mw-ui-dialog__header" }, {
              default: cr(() => [
                es(r, {
                  grow: "",
                  class: "items-center mw-ui-dialog__header-title justify-start",
                  innerHTML: n.title
                }, null, 8, ["innerHTML"]),
                es(r, {
                  shrink: "",
                  class: "justify-center"
                }, {
                  default: cr(() => [
                    es(l, {
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
            es(d)
          ]) : Vu("", !0),
          rr("div", X0, [
            lr(e.$slots, "default")
          ]),
          lr(e.$slots, "footer")
        ])
      ], 34)) : Vu("", !0)
    ]),
    _: 3
  }, 8, ["style"]);
}
const _t = /* @__PURE__ */ oe(R0, [["render", W0]]);
const K0 = {
  name: "MwInput",
  components: {
    MwIcon: je
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
      const t = ae({}, e.$attrs);
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
}, Lu = window.Vue.renderSlot, Y0 = window.Vue.resolveComponent, ya = window.Vue.openBlock, ur = window.Vue.createBlock, Au = window.Vue.createCommentVNode, Q0 = window.Vue.resolveDynamicComponent, J0 = window.Vue.toDisplayString, Z0 = window.Vue.mergeProps, e1 = window.Vue.withModifiers, t1 = window.Vue.createElementVNode, n1 = window.Vue.normalizeClass, o1 = window.Vue.createElementBlock, s1 = { class: "mw-ui-input__content" };
function a1(e, t, n, o, s, a) {
  const r = Y0("mw-icon");
  return ya(), o1("div", {
    class: n1(a.classes),
    onClick: t[2] || (t[2] = (l) => a.focus())
  }, [
    t1("div", s1, [
      Lu(e.$slots, "icon", {}, () => [
        n.icon ? (ya(), ur(r, {
          key: 0,
          icon: n.icon,
          size: n.large ? 28 : n.iconSize,
          class: "mw-ui-input__icon"
        }, null, 8, ["icon", "size"])) : Au("", !0)
      ]),
      (ya(), ur(Q0(n.type === "textarea" ? n.type : "input"), Z0({
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
        textContent: J0(n.value)
      }), null, 48, ["disabled", "aria-disabled", ".value", "placeholder", "type", "onFocus", "onBlur", "onClick", "textContent"])),
      Lu(e.$slots, "indicator", {}, () => [
        n.indicator ? (ya(), ur(r, {
          key: 0,
          icon: n.indicator,
          size: n.large ? 28 : n.indicatorSize || n.iconSize,
          class: "mw-ui-input__indicator",
          onClick: t[1] || (t[1] = e1((l) => e.$emit("indicator-clicked"), ["stop"]))
        }, null, 8, ["icon", "size"])) : Au("", !0)
      ])
    ])
  ], 2);
}
const fc = /* @__PURE__ */ oe(K0, [["render", a1]]);
const i1 = {
  name: "MwMessage",
  components: { MwCol: k, MwRow: F, MwIcon: je, MwButton: Me },
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
      notice: B0,
      warning: Zm,
      success: Ti,
      error: P0
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
}, dr = window.Vue.renderSlot, xa = window.Vue.resolveComponent, Du = window.Vue.createVNode, Tu = window.Vue.withCtx, Bu = window.Vue.openBlock, Pu = window.Vue.createBlock, Fu = window.Vue.createCommentVNode, r1 = window.Vue.normalizeClass;
function l1(e, t, n, o, s, a) {
  const r = xa("mw-icon"), l = xa("mw-col"), u = xa("mw-button"), d = xa("mw-row");
  return e.shown ? (Bu(), Pu(d, {
    key: 0,
    class: r1([a.classes, "mw-ui-message"]),
    "aria-live": n.type !== "error" ? "polite" : null,
    "aria-labelledby": `${e.id}-label`,
    role: n.type === "error" ? "alert" : null,
    align: "normal"
  }, {
    default: Tu(() => [
      dr(e.$slots, "icon", {}, () => [
        Du(r, {
          icon: a.icon,
          size: 24,
          class: "col shrink mw-ui-message__icon pa-1 items-start"
        }, null, 8, ["icon"])
      ]),
      Du(l, {
        id: `${e.id}-label`,
        tag: "span",
        grow: "",
        align: "center",
        class: "mw-ui-message__label"
      }, {
        default: Tu(() => [
          dr(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id"]),
      dr(e.$slots, "action", { hideMessage: a.hideMessage }, () => [
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
const c1 = /* @__PURE__ */ oe(i1, [["render", l1]]);
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
const u1 = {}, d1 = window.Vue.createElementVNode, g1 = window.Vue.openBlock, p1 = window.Vue.createElementBlock, m1 = { class: "mw-ui-spinner" }, h1 = /* @__PURE__ */ d1("div", { class: "mw-ui-spinner__bounce" }, null, -1), f1 = [
  h1
];
function w1(e, t) {
  return g1(), p1("div", m1, f1);
}
const it = /* @__PURE__ */ oe(u1, [["render", w1]]), ft = {
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
const v1 = window.Vue.computed, _1 = {
  name: "MwUiThumbnail",
  components: { MwUiIcon: je },
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
      default: eh
    },
    placeholderIconSize: {
      type: Number,
      default: 50
    },
    placeholderColor: {
      type: String,
      default: ft.gray600
    },
    placeholderBackgroundColor: {
      type: String,
      default: ft.gray200
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = v1(() => {
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
}, Mu = window.Vue.normalizeStyle, Nu = window.Vue.openBlock, S1 = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const y1 = window.Vue.resolveComponent, x1 = window.Vue.createBlock;
function C1(e, t, n, o, s, a) {
  const r = y1("mw-ui-icon");
  return n.thumbnail ? (Nu(), S1("div", {
    key: 0,
    class: "mw-ui-thumbnail",
    style: Mu(o.style)
  }, null, 4)) : (Nu(), x1(r, {
    key: 1,
    class: "mw-ui-thumbnail mw-ui-thumbnail--missing justify-center",
    style: Mu(o.style),
    icon: n.placeholderIcon,
    size: n.placeholderIconSize
  }, null, 8, ["style", "icon", "size"]));
}
const Dc = /* @__PURE__ */ oe(_1, [["render", C1]]);
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
const b1 = {
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
}, Uu = window.Vue.normalizeClass, Iu = window.Vue.normalizeStyle, k1 = window.Vue.createElementVNode, $1 = window.Vue.openBlock, V1 = window.Vue.createElementBlock, E1 = ["aria-valuenow", "aria-valuemin", "aria-valuemax"];
function L1(e, t, n, o, s, a) {
  return $1(), V1("div", {
    class: Uu(["mw-progress-bar", a.containerClass]),
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": n.minValue,
    "aria-valuemax": n.maxValue,
    style: Iu(a.containerStyles)
  }, [
    k1("div", {
      class: Uu(["mw-progress-bar__bar", a.barClass]),
      style: Iu(a.barStyles)
    }, null, 6)
  ], 14, E1);
}
const th = /* @__PURE__ */ oe(b1, [["render", L1]]), A1 = (e, t, n, o) => (s) => {
  const a = s.clientY, r = parseInt(
    document.defaultView.getComputedStyle(n.value).height,
    10
  ), l = (d) => {
    o.value = !1;
    let i = Math.min(
      r + d.clientY - a,
      e.value
    );
    i = Math.max(i, t.value), n.value.style.height = i + "px";
  }, u = () => {
    n.value.style.height === t.value + "px" && (n.value.style.removeProperty("height"), o.value = !0), document.documentElement.removeEventListener(
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
}, D1 = (e, t, n, o) => ({ initiateDrag: A1(
  e,
  t,
  n,
  o
) }), T1 = window.Vue.ref, Ru = window.Vue.computed, B1 = (e, t, n, o) => {
  const s = T1(0), a = Ru(
    () => t.value > e.value
  ), r = Ru(
    () => t.value <= e.value * (s.value + 1)
  ), l = (d) => {
    s.value = d, n.value.scroll(0, e.value * s.value);
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
const Ca = window.Vue.ref, P1 = window.Vue.onMounted, zu = window.Vue.computed, F1 = window.Vue.nextTick, M1 = {
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
    const t = Ca(!0), n = Ca(null), o = zu(
      () => Math.min(e.minHeight, s.value)
    ), s = Ca(1), { initiateDrag: a } = D1(
      s,
      o,
      n,
      t
    ), {
      isScrolledToEnd: r,
      scrollable: l,
      scrollIndex: u,
      scrollToStepByIndex: d,
      handleArrowUpClick: i
    } = B1(o, s, n, t), c = () => d(u.value + 1), g = Ca(null), p = zu(() => ({
      "--collapsed-height": o.value + "px"
    })), m = () => {
      if (!n.value)
        return;
      const f = n.value.style.height;
      if (n.value.style.removeProperty("height"), s.value = n.value.scrollHeight, f) {
        let w = Math.min(f, s.value);
        w = Math.max(w, o.value), w === o.value && (t.value = !0), n.value.style.height = w + "px";
      }
    };
    return P1(() => b(this, null, function* () {
      var f;
      yield F1(), s.value = n.value.scrollHeight, (f = g.value) == null || f.addEventListener(
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
      mwIconCollapse: F0,
      mwIconExpand: x0,
      onDragButtonClicked: () => {
        t.value || (n.value.style.removeProperty("height"), d(0)), t.value = !t.value;
      },
      scrollable: l,
      scrollIndex: u,
      scrollToNextStep: c
    };
  }
}, N1 = window.Vue.renderSlot, U1 = window.Vue.normalizeClass, ba = window.Vue.createElementVNode, I1 = window.Vue.resolveComponent, R1 = window.Vue.createVNode, gr = window.Vue.openBlock, z1 = window.Vue.createBlock, Ou = window.Vue.createCommentVNode, ju = window.Vue.createElementBlock, O1 = window.Vue.normalizeStyle, j1 = { class: "mw-ui-expandable-content__container" }, H1 = {
  key: 0,
  class: "mw-ui-expandable-content__scroll"
}, q1 = {
  ref: "dragIndicatorRef",
  class: "mw-ui-expandable-content__drag-button"
};
function G1(e, t, n, o, s, a) {
  const r = I1("mw-button");
  return gr(), ju("div", {
    class: "mw-ui-expandable-content",
    style: O1(o.cssVars)
  }, [
    ba("div", j1, [
      ba("div", {
        ref: "contentRef",
        class: U1(["mw-ui-expandable-content__body", {
          "mw-ui-expandable-content__body--collapsed": o.isCollapsed
        }])
      }, [
        N1(e.$slots, "default")
      ], 2),
      n.scroll && o.scrollable ? (gr(), ju("div", H1, [
        R1(r, {
          type: "icon",
          icon: o.mwIconCollapse,
          disabled: o.isCollapsed && o.scrollIndex === 0,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--up",
          onClick: o.handleArrowUpClick
        }, null, 8, ["icon", "disabled", "onClick"]),
        o.isCollapsed ? (gr(), z1(r, {
          key: 0,
          type: "icon",
          icon: o.mwIconExpand,
          class: "mw-ui-expandable-content__scroll-control mw-ui-expandable-content__scroll-control--down",
          disabled: o.isScrolledToEnd,
          onClick: o.scrollToNextStep
        }, null, 8, ["icon", "disabled", "onClick"])) : Ou("", !0)
      ])) : Ou("", !0)
    ]),
    ba("div", q1, [
      ba("span", {
        class: "mw-ui-expandable-content__drag-button__icon",
        onClick: t[0] || (t[0] = (...l) => o.onDragButtonClicked && o.onDragButtonClicked(...l))
      })
    ], 512)
  ], 4);
}
const X1 = /* @__PURE__ */ oe(M1, [["render", G1]]);
const ka = window.Vue.computed, W1 = {
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
      default: ft.blue600
    },
    inactiveColor: {
      type: String,
      default: ft.gray300
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
}, Hu = window.Vue.createElementVNode, qu = window.Vue.normalizeStyle, K1 = window.Vue.openBlock, Y1 = window.Vue.createElementBlock, Q1 = ["width", "height", "viewport"], J1 = ["r", "cx", "cy", "stroke-dasharray"], Z1 = ["r", "cx", "cy", "stroke-dasharray"];
function ev(e, t, n, o, s, a) {
  return K1(), Y1("svg", {
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
    }, null, 8, J1),
    Hu("circle", {
      class: "mw-circle-progress-bar__circle mw-circle-progress-bar__circle--active",
      r: o.radius,
      cx: n.size / 2,
      cy: n.size / 2,
      fill: "transparent",
      "stroke-dasharray": o.dashArray,
      "stroke-dashoffset": "0",
      style: qu({ strokeDashoffset: `${o.strokeDashOffset}px` })
    }, null, 12, Z1)
  ], 12, Q1);
}
const tv = /* @__PURE__ */ oe(W1, [["render", ev]]), nv = window.Vue.ref, mn = {
  mobile: 320,
  // min-width-breakpoint-mobile
  tablet: 640,
  // min-width-breakpoint-tablet
  desktop: 1120,
  // min-width-breakpoint-desktop
  "desktop-wide": 1680
  // min-width-breakpoint-desktop-wide
}, Sn = {
  print: "only print",
  screen: "only screen",
  mobile: `only screen and (max-width: ${mn.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${mn.tablet}px) and (max-width: ${mn.desktop - 1}px)`,
  "tablet-and-down": `only screen and (max-width: ${mn.desktop - 1}px)`,
  "tablet-and-up": `only screen and (min-width: ${mn.tablet}px)`,
  "desktop-and-down": `only screen and (max-width: ${mn["desktop-wide"] - 1}px)`,
  "desktop-and-up": `only screen and (min-width: ${mn.desktop}px)`,
  "desktop-wide": `only screen and (min-width: ${mn["desktop-wide"]}px)`
}, pr = {
  mobile: () => matchMedia(Sn.mobile).matches,
  tablet: () => matchMedia(Sn.tablet).matches,
  desktop: () => matchMedia(Sn.desktop).matches,
  desktopwide: () => matchMedia(Sn["desktop-wide"]).matches,
  tabletAndUp: () => matchMedia(Sn["tablet-and-up"]).matches,
  tabletAndDown: () => matchMedia(Sn["tablet-and-down"]).matches,
  desktopAndUp: () => matchMedia(Sn["desktop-and-up"]).matches,
  desktopAndDown: () => matchMedia(Sn["desktop-and-down"]).matches
}, ov = (e) => {
  const t = Object.values(mn);
  for (let n = 0; n < t.length; n++)
    if (e < t[n])
      return t[n];
  return null;
}, sv = {
  install: (e) => {
    const t = nv({
      nextBreakpoint: null
    }), n = () => {
      const o = window.innerWidth;
      for (let s in pr)
        pr.hasOwnProperty(s) && (t.value[s] = pr[s]());
      t.value.nextBreakpoint = ov(o);
    };
    n(), window.addEventListener("resize", n), e.config.globalProperties.$mwui = Qe(ae({}, e.config.globalProperties.$mwui || {}), {
      breakpoint: t.value
    }), e.provide("breakpoints", t);
  }
}, av = {
  install: (e) => {
    e.config.globalProperties.$mwui = Qe(ae({}, e.config.globalProperties.$mwui || {}), {
      colors: ft
    }), e.provide("colors", ft);
  }
};
class jo extends Error {
}
const iv = () => new mw.Api().get({ assert: "user" }).catch((e) => {
  if (e === "assertuserfailed")
    throw new jo();
}), nh = { assertUser: iv };
const rv = window.Vue.resolveDirective, ts = window.Vue.createElementVNode, Gu = window.Vue.withDirectives, lv = window.Vue.toDisplayString, cv = window.Vue.unref, Xu = window.Vue.withCtx, uv = window.Vue.openBlock, dv = window.Vue.createBlock, gv = window.Vue.createCommentVNode, pv = { class: "pa-4 sx-login-dialog__header" }, mv = { class: "sx-login-dialog__body px-6 pb-4" }, hv = { class: "sx-login-dialog__footer px-4 py-2 flex justify-center" }, fv = ["href"], wv = window.Vue.computed, vv = window.Vue.ref, _v = window.Vuex.useStore, Sv = {
  __name: "SXLoginDialog",
  setup(e) {
    const t = _v(), n = wv(() => t.state.application.isLoginDialogOn), o = () => t.commit("application/setIsLoginDialogOn", !1), s = vv(mw.util.getUrl("Special:UserLogin"));
    return (a, r) => {
      const l = rv("i18n");
      return n.value ? (uv(), dv(cv(_t), {
        key: 0,
        "close-on-escape-key": !1,
        persistent: "",
        class: "sx-login-dialog",
        onClose: o
      }, {
        header: Xu(() => [
          ts("div", pv, [
            Gu(ts("h4", null, null, 512), [
              [l, void 0, "cx-sx-login-dialog-title"]
            ])
          ])
        ]),
        default: Xu(() => [
          Gu(ts("div", mv, null, 512), [
            [l, void 0, "cx-sx-login-dialog-body"]
          ]),
          ts("div", hv, [
            ts("a", {
              class: "py-1",
              href: s.value,
              target: "_blank"
            }, lv(a.$i18n("cx-sx-login-dialog-button-label")), 9, fv)
          ])
        ]),
        _: 1
      })) : gv("", !0);
    };
  }
}, Q = new mw.cx.SiteMapper(), yv = mw.util.getUrl, xv = () => {
  let e = mw.cookie.get("GeoIP", "");
  const t = e && e.match(/\d+\.?\d*:\d+\.?\d*/g), n = t && t[0].replace(":", "|");
  if (n)
    return n;
  const o = JSON.parse(mw.cookie.get("ULSGeo"));
  return o && o.latitude + "|" + o.longitude;
}, Ho = !mw.config.get("wgMFMode");
class Tc {
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
    status: u,
    targetTitle: d
  }) {
    this.translationId = t, this.sourceTitle = n, this.sourceLanguage = o, this.targetLanguage = s, this.startTimestamp = a, this.lastUpdatedTimestamp = r, this.pageRevision = l, this.status = u, this.targetTitle = d;
  }
}
const $a = "original", Va = "empty", Cv = {
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
    return Cv[t] || t;
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
    this.id = t, this.translatedContent = o, this.mtProviderUsed = "", this.node = s, this.proposedTranslations = Qe(ae({}, a), {
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
}, oo = (e) => !!(e.attributes.about || e.attributes.typeof && e.getAttribute("typeof").match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/)), oh = (e) => {
  const t = Bi(e);
  if (!(t != null && t.target))
    return null;
  let n = t.target.wt;
  const { params: o } = t;
  if (!o)
    return `{{${n}}}`;
  for (const s in o) {
    const a = bv(o[s].wt);
    n += ` | ${s} = ${a}`;
  }
  return `{{${n}}}`;
}, bv = (e) => {
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
}, sh = (e) => {
  var n;
  const t = JSON.parse(((n = e.dataset) == null ? void 0 : n.cx) || "{}");
  return (t == null ? void 0 : t[0]) || null;
}, ah = (e) => {
  const t = sh(e);
  return t == null ? void 0 : t.targetExists;
};
class mr {
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
class at {
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
      (a) => oo(a)
    );
    s && ah(s) && (this.blockTemplateAdaptationInfo[t] = sh(s));
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
      (t) => oo(t)
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
    return n.innerHTML = this.blockTemplateProposedTranslations[t], Array.from(n.children).find((o) => oo(o));
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
      (a) => oo(a)
    );
    this.isBlockTemplate && o && (o.dataset.cx = JSON.stringify([
      this.blockTemplateAdaptationInfo[this.mtProviderUsed]
    ]));
    const s = [
      new mr({
        baseSectionId: t,
        subSectionId: this.id,
        content: this.originalHtml,
        origin: "source"
      }),
      new mr({
        baseSectionId: t,
        subSectionId: this.id,
        content: n.outerHTML,
        origin: "user"
      })
    ];
    return this.parallelCorporaMTContent && s.push(
      new mr({
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
        (s) => oo(s)
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
const Bc = mw.config.get(
  "wgContentTranslationUnmodifiedMTThresholdForPublish",
  95
), kv = Bc - 10, $v = [
  { status: "failure", value: 100 - Bc },
  { status: "warning", value: 100 - kv },
  { status: "success", value: 100 }
], ih = (e, t, n) => {
  const o = Ku(e).textContent, s = Ku(t).textContent, a = 100 - 100 * mw.cx.calculateUnmodifiedContent(s, o, n);
  return Math.ceil(a);
}, Vv = (e) => $v.find((t) => e <= t.value).status, Ev = (e, t) => ih(
  e.translationHtml,
  e.proposedTranslationHTMLForMTValidation,
  t
), Lv = () => (100 - Bc) / 100, Ku = (e) => {
  const t = document.createElement("div");
  return t.innerHTML = e, t;
}, Wt = {
  calculateScore: ih,
  getScoreStatus: Vv,
  getMTScoreForPageSection: Ev,
  getMtModificationThreshold: Lv
}, Ea = "__LEAD_SECTION__";
class Uo {
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
    return n instanceof at ? n.transclusionNode.outerHTML : n instanceof Mn ? n.originalContent : null;
  }
  get selectedTranslationUnitOriginalContent() {
    return this.getOriginalContentByTranslationUnitId(
      this.selectedTranslationUnitId
    );
  }
  resetSelection() {
    this.isTitleSelected = !1, this.contentTranslationUnits.forEach((t) => {
      t instanceof at ? t.blockTemplateSelected = !1 : t instanceof Mn && (t.selected = !1);
    });
  }
  selectTranslationUnitById(t) {
    if (this.resetSelection(), t === 0) {
      this.isTitleSelected = !0;
      return;
    }
    const n = this.getContentTranslationUnitById(t);
    n instanceof at ? n.blockTemplateSelected = !0 : n instanceof Mn && (n.selected = !0);
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
    if (o instanceof at)
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
    return this.isTitleSelected ? this.proposedTitleTranslations[t] || "" : n instanceof at ? n.blockTemplateProposedTranslations[t] || "" : n instanceof Mn ? n.proposedTranslations[t] || "" : null;
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
    this.selectedContentTranslationUnit instanceof at ? (this.selectedContentTranslationUnit.blockTemplateTranslatedContent = t, this.selectedContentTranslationUnit.blockTemplateMTProviderUsed = n) : this.selectedContentTranslationUnit instanceof Mn && (this.selectedContentTranslationUnit.translatedContent = t, this.selectedContentTranslationUnit.mtProviderUsed = n);
  }
  getTranslationProgress(t) {
    const o = this.subSections.filter(
      (a) => a.isTranslated
    ).length / this.subSections.length, s = Wt.getMTScoreForPageSection(this, t) / 100;
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
class Ui extends Tc {
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
      sourceTitle: s,
      sourceLanguage: a,
      targetLanguage: r,
      startTimestamp: l,
      lastUpdatedTimestamp: u,
      pageRevision: i,
      status: d,
      targetTitle: c
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
    return Uo.isSectionLead(this.sourceSectionTitle);
  }
  sectionTitleMatches(t) {
    return this.isLeadSectionTranslation ? Uo.isSectionLead(t) : this.sourceSectionTitle === t;
  }
}
const Kt = "previous-edits", wn = "popular", He = "topic", be = "geography", Z = "collections", Ke = "automatic", wt = "seed", Yu = window.Vue.ref, { topics: Av, regions: Dv } = mw.loader.require(
  "ext.cx.articlefilters"
), La = {
  type: Ke,
  id: Kt
}, Pc = () => {
  const e = Yu(
    Av.flatMap((l) => l.topics).map((l) => l.topicId.toLowerCase())
  ), t = Yu(!1), n = (l, u) => e.value.includes(u) ? { type: He, id: u } : null, o = (l, u) => Dv.some(
    (i) => i.id.toLowerCase() === u || i.countries.some(
      (c) => c.id.toLowerCase() === u
    )
  ) ? { type: be, id: u } : null, s = (l, u, d) => d && !d.some((i) => i.name.toLowerCase() === u) ? null : { type: Z, id: l };
  return { filtersValidatorError: t, validateFilters: ({ type: l, id: u }, d = !1) => {
    t.value = !1;
    const i = l == null ? void 0 : l.toLowerCase(), c = u == null ? void 0 : u.toLowerCase();
    if (c === Kt)
      return {
        type: Ke,
        id: Kt
      };
    if (c === wn)
      return {
        type: Ke,
        id: wn
      };
    if (c === Z)
      return d && !d.length ? (t.value = !0, La) : {
        type: Ke,
        id: Z
      };
    if (i === He) {
      const g = n(u, c);
      if (g)
        return g;
      t.value = !0;
    } else if (i === be) {
      const g = o(u, c);
      if (g)
        return g;
      t.value = !0;
    } else if (i === Z) {
      const g = s(
        u,
        c,
        d
      );
      if (g)
        return g;
      t.value = !0;
    } else if (i === wt)
      return { type: wt, id: u };
    return La;
  }, isDefaultFilter: ({ type: l, id: u }) => l === La.type && u === La.id };
}, Tv = window.Vue.inject, Bv = window.Vue.reactive;
var Pv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, rh = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(Pv, function() {
    var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, o = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
    class s {
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
          const f = [...o[this.locale] || [], "en"];
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
    var a = { bs: class extends s {
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
    }, default: s, dsb: class extends s {
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
    }, fi: class extends s {
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
    }, ga: class extends s {
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
    }, he: class extends s {
      convertGrammar(i, c) {
        switch (c) {
          case "prefixed":
          case "תחילית":
            i.slice(0, 1) === "ו" && i.slice(0, 2) !== "וו" && (i = "ו" + i), i.slice(0, 1) === "ה" && (i = i.slice(1)), (i.slice(0, 1) < "א" || i.slice(0, 1) > "ת") && (i = "־" + i);
        }
        return i;
      }
    }, hsb: class extends s {
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
    }, hu: class extends s {
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
    }, hy: class extends s {
      convertGrammar(i, c) {
        return c === "genitive" && (i.slice(-1) === "ա" ? i = i.slice(0, -1) + "այի" : i.slice(-1) === "ո" ? i = i.slice(0, -1) + "ոյի" : i.slice(-4) === "գիրք" ? i = i.slice(0, -4) + "գրքի" : i += "ի"), i;
      }
    }, la: class extends s {
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
    }, os: class extends s {
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
    }, ru: class extends s {
      convertGrammar(i, c) {
        return c === "genitive" && (i.slice(-1) === "ь" ? i = i.slice(0, -1) + "я" : i.slice(-2) === "ия" ? i = i.slice(0, -2) + "ии" : i.slice(-2) === "ка" ? i = i.slice(0, -2) + "ки" : i.slice(-2) === "ти" ? i = i.slice(0, -2) + "тей" : i.slice(-2) === "ды" ? i = i.slice(0, -2) + "дов" : i.slice(-3) === "ник" && (i = i.slice(0, -3) + "ника")), i;
      }
    }, sl: class extends s {
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
    }, uk: class extends s {
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
            function w(A) {
              return () => {
                for (let H = 0; H < A.length; H++) {
                  const Xe = A[H]();
                  if (Xe !== null)
                    return Xe;
                }
                return null;
              };
            }
            function v(A) {
              const H = f, Xe = [];
              for (let Qt = 0; Qt < A.length; Qt++) {
                const Jt = A[Qt]();
                if (Jt === null)
                  return f = H, null;
                Xe.push(Jt);
              }
              return Xe;
            }
            function y(A, H) {
              return () => {
                const Xe = f, Qt = [];
                let Jt = H();
                for (; Jt !== null; )
                  Qt.push(Jt), Jt = H();
                return Qt.length < A ? (f = Xe, null) : Qt;
              };
            }
            function S(A) {
              const H = A.length;
              return () => {
                let Xe = null;
                return m.slice(f, f + H) === A && (Xe = A, f += H), Xe;
              };
            }
            function x(A) {
              return () => {
                const H = m.slice(f).match(A);
                return H === null ? null : (f += H[0].length, H[0]);
              };
            }
            const E = x(/^\s+/), C = S("|"), N = S(":"), L = S("\\"), T = x(/^./), R = S("$"), K = x(/^\d+/), W = S('"'), ke = S("'"), ue = x(h ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), ct = x(h ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), De = w([he, x(h ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
            function he() {
              const A = v([L, T]);
              return A === null ? null : A[1];
            }
            const xe = w([he, ct]), Te = w([he, ue]);
            function Ue() {
              const A = v([R, K]);
              return A === null ? null : ["REPLACE", parseInt(A[1], 10) - 1];
            }
            const J = (U = x(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), q = function(A) {
              return A.toString();
            }, () => {
              const A = U();
              return A === null ? null : q(A);
            });
            var U, q;
            function M() {
              const A = v([C, y(0, fa)]);
              if (A === null)
                return null;
              const H = A[1];
              return H.length > 1 ? ["CONCAT"].concat(H) : H[0];
            }
            function I() {
              const A = v([J, N, Ue]);
              return A === null ? null : [A[0], A[2]];
            }
            function _() {
              const A = v([J, N, fa]);
              return A === null ? null : [A[0], A[2]];
            }
            function V() {
              const A = v([J, N]);
              return A === null ? null : [A[0], ""];
            }
            const D = w([function() {
              const A = v([w([I, _, V]), y(0, M)]);
              return A === null ? null : A[0].concat(A[1]);
            }, function() {
              const A = v([J, y(0, M)]);
              return A === null ? null : [A[0]].concat(A[1]);
            }]), P = S("{{"), G = S("}}"), se = S("[["), O = S("]]"), j = S("["), ne = S("]");
            function Ie() {
              const A = v([P, D, G]);
              return A === null ? null : A[1];
            }
            const pe = w([function() {
              const A = v([y(1, fa), C, y(1, ha)]);
              return A === null ? null : [["CONCAT"].concat(A[0]), ["CONCAT"].concat(A[2])];
            }, function() {
              const A = v([y(1, fa)]);
              return A === null ? null : [["CONCAT"].concat(A[0])];
            }]);
            function fe() {
              let A = null;
              const H = v([se, pe, O]);
              if (H !== null) {
                const Xe = H[1];
                A = ["WIKILINK"].concat(Xe);
              }
              return A;
            }
            function zn() {
              let A = null;
              const H = v([j, y(1, Hf), E, y(1, ha), ne]);
              return H !== null && (A = ["EXTLINK", H[1].length === 1 ? H[1][0] : ["CONCAT"].concat(H[1]), ["CONCAT"].concat(H[3])]), A;
            }
            const Zo = x(/^[A-Za-z]+/);
            function Yt() {
              const A = x(/^[^"]*/), H = v([W, A, W]);
              return H === null ? null : H[1];
            }
            function zf() {
              const A = x(/^[^']*/), H = v([ke, A, ke]);
              return H === null ? null : H[1];
            }
            function Of() {
              const A = x(/^\s*=\s*/), H = v([E, Zo, A, w([Yt, zf])]);
              return H === null ? null : [H[1], H[3]];
            }
            function jf() {
              const A = y(0, Of)();
              return Array.prototype.concat.apply(["HTMLATTRIBUTES"], A);
            }
            const Hf = w([Ie, Ue, fe, zn, function() {
              const A = y(1, De)();
              return A === null ? null : A.join("");
            }]), ha = w([Ie, Ue, fe, zn, function() {
              let A = null;
              const H = f, Xe = S("<"), Qt = x(/^\/?/), Jt = x(/^\s*>/), Yi = v([Xe, Zo, jf, Qt, Jt]);
              if (Yi === null)
                return null;
              const pu = f, mu = Yi[1], Qi = y(0, ha)(), qf = f, hu = v([S("</"), Zo, Jt]);
              if (hu === null)
                return ["CONCAT", m.slice(H, pu)].concat(Qi);
              const Gf = f, Xf = hu[1], fu = Yi[2];
              if (function(On, wa, Ji, Zi = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                if ((On = On.toLowerCase()) !== (wa = wa.toLowerCase()) || Zi.allowedHtmlElements.indexOf(On) === -1)
                  return !1;
                const Wf = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                for (let va = 0, Kf = Ji.length; va < Kf; va += 2) {
                  const er = Ji[va];
                  if (Zi.allowedHtmlCommonAttributes.indexOf(er) === -1 && (Zi.allowedHtmlAttributesByElement[On] || []).indexOf(er) === -1 || er === "style" && Ji[va + 1].search(Wf) !== -1)
                    return !1;
                }
                return !0;
              }(mu, Xf, fu.slice(1)))
                A = ["HTMLELEMENT", mu, fu].concat(Qi);
              else {
                const On = (wa) => wa.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                A = ["CONCAT", On(m.slice(H, pu))].concat(Qi, On(m.slice(qf, Gf)));
              }
              return A;
            }, function() {
              const A = y(1, Te)();
              return A === null ? null : A.join("");
            }]), fa = w([Ie, Ue, function() {
              const A = y(1, xe)();
              return A === null ? null : A.join("");
            }]), gu = function() {
              const A = y(0, ha)();
              return A === null ? null : ["CONCAT"].concat(A);
            }();
            if (gu === null || f !== m.length)
              throw new Error("Parse error at position " + f.toString() + " in input: " + m);
            return gu;
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
        return [...o[this.locale] || [], this.finalFallback];
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
})(rh);
var Fv = rh.exports;
const Qu = (e) => {
  let t, n;
  if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
    throw new Error(`${e.rawName} used with parameter array but without message key`);
  return { msg: t, params: n };
}, lh = Symbol("banana-context");
function ce() {
  const e = Tv(lh);
  if (!e)
    throw new Error("No i18n provided!!!");
  return e;
}
function Mv(e = { messages: {}, locale: "en", wikilinks: !0 }) {
  const t = Bv(new Fv(e.locale, e));
  return {
    install: (n) => {
      n.provide(lh, t), n.config.globalProperties.$i18n = (o, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(o, ...s)), n.provide("setLocale", (o) => {
        t.setLocale(o);
      }), n.directive("i18n", (o, s) => {
        const { msg: a, params: r } = Qu(s);
        s.modifiers.html ? o.innerHTML = t.i18n(a, ...r) : o.textContent = t.i18n(a, ...r);
      }), n.directive("i18n-html", (o, s) => {
        const { msg: a, params: r } = Qu(s);
        o.innerHTML = t.i18n(a, ...r);
      });
    }
  };
}
const vn = window.Vue.ref, Nv = window.Vue.computed, Ii = vn(null), Ri = vn(null), zi = vn(null), la = vn(null), Fc = vn(null), Oi = vn(null), ch = vn(null), uh = vn(null), Mc = vn(null), { validateFilters: Uv, filtersValidatorError: Iv } = Pc(), dh = {
  from: Ii,
  to: Ri,
  section: la,
  draft: Fc,
  page: zi,
  revision: Oi,
  "active-list": Mc
}, Rv = Nv(() => ({
  type: ch.value,
  id: uh.value
})), gh = (e, t) => {
  ch.value = e, uh.value = t, Pi("filter-type", e), t && Pi("filter-id", t);
}, zv = (e) => {
  const t = new URLSearchParams(location.search), n = {
    page: e == null ? void 0 : e.sourceTitle,
    from: e == null ? void 0 : e.sourceLanguage,
    to: e == null ? void 0 : e.targetLanguage
  };
  e instanceof Ui && (n.draft = !0, n.revision = e.pageRevision, e.isLeadSectionTranslation || (n.section = e.sourceSectionTitle));
  for (const o in n) {
    const s = n[o];
    t.set(o, s), dh[o].value = s;
  }
  t.delete("title"), ca(Object.fromEntries(t));
}, Nc = (e, t) => {
  dh[e].value = t, Pi(e, t);
}, Ov = (e) => {
  Nc("section", e);
}, jv = (e) => {
  Nc("page", e);
}, Hv = (e) => {
  Nc("active-list", e);
}, ca = (e, t = location.hash) => {
  history.replaceState(
    {},
    document.title,
    yv(`Special:ContentTranslation${t}`, e)
  );
}, qv = () => {
  const e = ce(), t = new URLSearchParams(location.search);
  zi.value = t.get("page"), Ii.value = t.get("from"), Ri.value = t.get("to"), la.value = t.get("section"), Oi.value = t.get("revision"), Mc.value = t.get("active-list") || location.hash.slice(2).toLowerCase();
  const n = Uv({
    type: t.get("filter-type"),
    id: t.get("filter-id")
  });
  gh(n.type, n.id), Iv.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
}, Gv = () => {
  const e = new URLSearchParams(location.search);
  la.value = null, e.delete("section"), e.delete("title"), ca(Object.fromEntries(e));
}, Pi = (e, t) => {
  const n = new URLSearchParams(location.search);
  t == null ? n.delete(e) : n.set(e, t), n.delete("title"), ca(Object.fromEntries(n));
}, Xv = (e) => new URLSearchParams(location.search).get(e), Wv = (e, t) => {
  const n = new URLSearchParams(location.search);
  n.set("from", e), n.set("to", t), Ii.value = e, Ri.value = t, n.delete("title"), ca(Object.fromEntries(n));
}, Kv = () => {
  const e = new URLSearchParams(location.search);
  zi.value = null, la.value = null, Fc.value = null, Oi.value = null, e.delete("page"), e.delete("section"), e.delete("draft"), e.delete("revision"), e.delete("title"), ca(Object.fromEntries(e));
}, Yv = () => new URLSearchParams(location.search).get("force-quick-tutorial"), B = () => ({
  isQuickTutorialForced: Yv,
  setLanguageURLParams: Wv,
  setSectionURLParam: Ov,
  setTranslationURLParams: zv,
  initializeURLState: qv,
  clearTranslationURLParameters: Kv,
  clearSectionURLParameter: Gv,
  setUrlParam: Pi,
  getUrlParam: Xv,
  pageURLParameter: zi,
  sourceLanguageURLParameter: Ii,
  targetLanguageURLParameter: Ri,
  sectionURLParameter: la,
  draftURLParameter: Fc,
  revisionURLParameter: Oi,
  setPageURLParam: jv,
  currentSuggestionFilters: Rv,
  setFilterURLParams: gh,
  activeDashboardTabParameter: Mc,
  setActiveDashboardTabParameter: Hv
}), Qv = () => Q.getLanguagePairs();
function Jv(e, t) {
  return b(this, null, function* () {
    const n = Q.getCXServerUrl(
      `/list/pair/${e}/${t}`
    );
    return fetch(n).then((o) => o.json()).then(
      (o) => Object.freeze(
        new ee(e, t, o.mt)
      )
    );
  });
}
function Zv() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}
function e_(e, t, n, o) {
  if (!mw.config.get("wgContentTranslationTranslateInTarget"))
    return Promise.resolve();
  const s = mw.config.get("wgWikiID"), a = Q.getWikiDomainCode(e), r = Q.getWikiDomainCode(t), l = {
    action: "wblinktitles",
    fromsite: s.replace(r, a),
    fromtitle: n,
    tosite: s,
    totitle: o
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
const ji = {
  fetchSupportedLanguageCodes: Qv,
  fetchSupportedMTProviders: Jv,
  fetchCXServerToken: Zv,
  addWikibaseLink: e_
}, Uc = window.Vue.ref, Ju = Uc([]), Zu = Uc([]), ed = Uc(!1);
function ua() {
  return {
    fetchSupportedLanguageCodes: () => b(this, null, function* () {
      if (!ed.value) {
        ed.value = !0;
        const t = yield ji.fetchSupportedLanguageCodes();
        Ju.value = t.sourceLanguages, Zu.value = t.targetLanguages;
      }
    }),
    supportedSourceLanguageCodes: Ju,
    supportedTargetLanguageCodes: Zu
  };
}
const t_ = {
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
}, n_ = {
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
}, o_ = [
  "Arab",
  "Hebr",
  "Syrc",
  "Nkoo",
  "Rohg",
  "Thaa"
], s_ = {
  WW: 1,
  SP: 1,
  AM: 2,
  EU: 3,
  ME: 3,
  AF: 3,
  AS: 4,
  PA: 4
}, a_ = {
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
}, i_ = {
  languages: t_,
  scriptgroups: n_,
  rtlscripts: o_,
  regiongroups: s_,
  territories: a_
};
var Ne = i_;
function da(e) {
  return !!Ne.languages[e];
}
function Rn(e) {
  return da(e) && Ne.languages[e].length === 1 ? Ne.languages[e][0] : !1;
}
function r_() {
  return Ne.languages;
}
function ga(e) {
  var t = Rn(e);
  return t ? ga(t) : da(e) ? Ne.languages[e][0] : "Zyyy";
}
function Ic(e) {
  var t = Rn(e);
  return t ? Ic(t) : da(e) && Ne.languages[e][1] || "UNKNOWN";
}
function oa(e) {
  var t = Rn(e);
  return t ? oa(t) : da(e) && Ne.languages[e][2] || e;
}
function l_() {
  var e, t = {};
  for (e in Ne.languages)
    Rn(e) || (t[e] = oa(e));
  return t;
}
function ph(e) {
  var t, n, o = [];
  for (t in Ne.languages)
    if (!Rn(t)) {
      for (n = 0; n < e.length; n++)
        if (e[n] === ga(t)) {
          o.push(t);
          break;
        }
    }
  return o;
}
function c_(e) {
  return ph([e]);
}
function mh(e) {
  var t;
  for (t in Ne.scriptgroups)
    if (Ne.scriptgroups[t].includes(e))
      return t;
  return "Other";
}
function Rc(e) {
  return mh(ga(e));
}
function hh(e) {
  var t = {}, n, o, s, a;
  for (o = 0; o < e.length; o++)
    n = e[o], s = Rn(n) || n, a = Rc(s), t[a] || (t[a] = []), t[a].push(n);
  return t;
}
function fh(e) {
  var t, n, o, s = {};
  for (t in Ne.languages)
    if (!Rn(t)) {
      for (n = 0; n < e.length; n++)
        if (Ic(t).includes(e[n])) {
          o = Rc(t), s[o] === void 0 && (s[o] = []), s[o].push(t);
          break;
        }
    }
  return s;
}
function u_(e) {
  return fh([e]);
}
function d_(e) {
  var t, n, o, s = [];
  for (t = hh(e), n = Object.keys(t).sort(), o = 0; o < n.length; o++)
    s = s.concat(t[n[o]]);
  return s;
}
function g_(e, t) {
  var n = oa(e) || e, o = oa(t) || t;
  return n.toLowerCase() < o.toLowerCase() ? -1 : 1;
}
function wh(e) {
  return Ne.rtlscripts.includes(ga(e));
}
function p_(e) {
  return wh(e) ? "rtl" : "ltr";
}
function m_(e) {
  return Ne.territories[e] || [];
}
function h_(e, t) {
  t.target ? Ne.languages[e] = [t.target] : Ne.languages[e] = [t.script, t.regions, t.autonym];
}
var z = {
  addLanguage: h_,
  getAutonym: oa,
  getAutonyms: l_,
  getDir: p_,
  getGroupOfScript: mh,
  getLanguages: r_,
  getLanguagesByScriptGroup: hh,
  getLanguagesByScriptGroupInRegion: u_,
  getLanguagesByScriptGroupInRegions: fh,
  getLanguagesInScript: c_,
  getLanguagesInScripts: ph,
  getLanguagesInTerritory: m_,
  getRegions: Ic,
  getScript: ga,
  getScriptGroupOfLanguage: Rc,
  isKnown: da,
  isRedirect: Rn,
  isRtl: wh,
  sortByScriptGroup: d_,
  sortByAutonym: g_
};
const lo = window.Vue.computed;
function Ae(e) {
  const t = lo(() => e.state.application.sourceLanguage), n = lo(() => e.state.application.targetLanguage), o = lo(
    () => e.state.application.currentMTProvider
  ), s = lo(
    () => z.getAutonym(t.value)
  ), a = lo(
    () => z.getAutonym(n.value)
  ), r = lo(() => e.state.application.previousRoute);
  return {
    currentMTProvider: o,
    previousRoute: r,
    sourceLanguage: t,
    sourceLanguageAutonym: s,
    targetLanguage: n,
    targetLanguageAutonym: a
  };
}
class qo {
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
    this.language = l, this.title = c, this.pageId = r, this.description = t, this.image = s, this.imageName = a, this.pageprops = u, this.pageviews = d, this.thumbnail = i, this.langLinksCount = n, this.articleSize = (f = g == null ? void 0 : g[0]) == null ? void 0 : f.size, this.revision = o, this.alias = p, this.wikidataId = u == null ? void 0 : u.wikibase_item, this.content = m, this.sections = h;
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
class f_ {
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
function w_() {
  const e = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes = ve.dm.SectionNode.static.matchRdfaTypes || [], ve.dm.SectionNode.static.matchRdfaTypes.includes(e) || (ve.dm.SectionNode.static.matchRdfaTypes.push(e), ve.dm.modelRegistry.unregister(ve.dm.SectionNode), ve.dm.modelRegistry.register(ve.dm.SectionNode));
}
const v_ = (e) => {
  const t = document.createElement("div");
  t.classList.add("surface");
  const n = document.createElement("div");
  n.appendChild(t), n.$el = $(n), w_();
  const o = new ve.init.mw.MobileArticleTarget(n), s = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(e)
  ), a = o.createSurface(s);
  return a.setReadOnly(!0), o.surfaces.push(a), o.setSurface(a), a.initialize(), a;
}, __ = (e, t) => {
  let n, o;
  return t ? (n = v_(e), o = n.$element.find(
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
}, S_ = (e, t) => {
  const n = Array.from(
    __(e, t)
  );
  return y_(n).map(
    /**
     * @param {Node[]} sectionNodes
     * @return {PageSection}
     */
    (s) => {
      const [a, ...r] = s;
      let l = "";
      const u = a.dataset.mwSectionNumber;
      a.querySelector("h2") ? l = a.textContent.trim() : r.unshift(a);
      const d = r.map(
        /**
         * @param {Node} node
         * @return {SubSection}
         */
        (c) => new at({
          sentences: x_(c),
          node: c
        })
      ), i = !l;
      return new Uo({ id: u, title: l, subSections: d, isLeadSection: i });
    }
  );
}, y_ = (e) => {
  const t = e.reduce((n, o) => {
    const s = o.dataset.mwSectionNumber;
    return n[s] = n[s] ? [...n[s], o] : [o], n;
  }, {});
  return Object.values(t);
}, x_ = (e) => Array.from(e.getElementsByClassName("cx-segment")).map(
  (t) => new Mn({
    id: t.dataset.segmentid,
    originalContent: t.innerHTML,
    node: t
  })
), vh = {
  convertSegmentedContentToPageSections: S_
}, zc = 120, C_ = (e, t) => {
  const n = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7,
    // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: zc,
    titles: t.join("|"),
    origin: "*",
    redirects: !0
  };
  return Q.getApi(e).get(n).then((s) => {
    const a = s.query.pages, l = (s.query.redirects || []).reduce(
      (i, c) => Qe(ae({}, i), { [c.to]: c.from }),
      {}
    ), d = (s.query.normalized || []).reduce(
      (i, c) => Qe(ae({}, i), {
        [c.to]: c.from
      }),
      {}
    );
    return a.map((i) => {
      const c = d[i.title] || l[i.title] || null;
      return new qo(Qe(ae({}, i), { _alias: c }));
    });
  });
}, b_ = (e, t) => {
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
  return Q.getApi(e).get(n).then((s) => {
    var u, d;
    const a = s.query.pages;
    if (!a || !a.length || (u = a[0]) != null && u.missing)
      return null;
    const r = [{ lang: e, title: t }, ...a[0].langlinks || []], l = (d = a[0].pageprops) == null ? void 0 : d.wikibase_item;
    return l ? Object.freeze(new f_(l, r)) : null;
  });
}, k_ = (e, t, n) => {
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
  return Q.getApi(e).get(o).then((a) => Object.values(a.query.pages).map((l) => {
    var u, d;
    return (d = (u = l.langlinks) == null ? void 0 : u[0]) == null ? void 0 : d["*"];
  }).filter((l) => !!l));
}, $_ = (e, t, n, o = null) => _h(
  e,
  t,
  n,
  o
).then(
  (s) => new qo({
    sections: vh.convertSegmentedContentToPageSections(
      s,
      !1
      // No need to resolve references. Content can be used as it is
    ),
    content: s,
    pagelanguage: e,
    title: n
  })
), _h = (e, t, n, o = null) => {
  const s = Q.getWikiDomainCode(e), a = Q.getWikiDomainCode(t), r = {
    $sourcelanguage: s,
    $targetlanguage: a,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: n.replace(/ /g, "_")
  };
  let l = "/page/$sourcelanguage/$targetlanguage/$title";
  o && (r.$revision = o, l += "/$revision");
  const u = Q.getCXServerUrl(
    l,
    r
  );
  return fetch(u).then((d) => d.json()).then((d) => d.segmentedContent);
}, V_ = (e) => b(void 0, null, function* () {
  const t = xv();
  if (!t)
    return Promise.resolve([]);
  const n = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: zc,
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
  return yield Q.getApi(e).get(n).then((o) => o.query.pages).then((o) => o.map((s) => new qo(s))).catch((o) => []);
}), E_ = (e, t) => {
  const o = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: e.trim(),
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: zc,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };
  return Q.getApi(t).get(o).then((s) => {
    var a;
    return ((a = s.query) == null ? void 0 : a.pages) || [];
  }).then(
    (s) => s.sort((a, r) => a.index - r.index).map(
      (a) => new qo(Object.assign(a, { pagelanguage: t }))
    )
  ).catch((s) => []);
}, io = {
  fetchPages: C_,
  fetchLanguageTitles: b_,
  fetchPageContent: $_,
  fetchSegmentedContent: _h,
  fetchNearbyPages: V_,
  searchPagesByTitlePrefix: E_,
  fetchLanguageLinksForLanguage: k_
}, L_ = window.Vuex.useStore, Go = () => {
  const e = L_();
  return (t, n) => {
    n = n.filter(
      (a) => !e.getters["mediawiki/getPage"](t, a)
    );
    const o = 50, s = [];
    for (let a = 0; a < n.length; a += o) {
      const r = n.slice(a, a + o), l = io.fetchPages(t, r).then(
        (u) => u.forEach(
          (d) => e.commit("mediawiki/addPage", d)
        )
      );
      s.push(l);
    }
    return Promise.all(s);
  };
}, A_ = window.Vuex.useStore, Oc = () => {
  const e = A_(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { maxSuggestionsPerSlice: s } = e.state.suggestions, a = () => e.getters["suggestions/getSectionSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(o.value)
  ), r = (d) => a().slice(
    s * d,
    s * (d + 1)
  ), l = () => e.getters["suggestions/getPageSuggestionsForPair"](t.value, n.value).filter(
    (i) => i.matchesFilter(o.value)
  );
  return {
    getFilteredPageSuggestions: l,
    getFilteredSectionSuggestions: a,
    getPageSuggestionsSliceByIndex: (d) => l().slice(
      s * d,
      s * (d + 1)
    ),
    getSectionSuggestionsSliceByIndex: r
  };
};
class ro {
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
    suggestionSeed: l = null,
    suggestionProvider: u = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.wikidataId = r, this.langLinksCount = a, this.suggestionProvider = u, this.suggestionSeed = l, this.isListable = !0;
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
    sourceSections: l = [],
    targetSections: u = [],
    suggestionSeed: d = null,
    isListable: i = !0,
    suggestionProvider: c = null
  }) {
    this.sourceLanguage = t, this.targetLanguage = n, this.sourceTitle = o, this.targetTitle = s, this.missingSections = r, this.presentSections = a, this.sourceSections = l, this.targetSections = u, this.suggestionSeed = d, this.isListable = i, this.suggestionProvider = c;
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
const Sh = [
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
], D_ = [
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
], T_ = [
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
], B_ = [
  "Bibliographie",
  "Références",
  "Discographie",
  "Filmographie",
  "Travaux",
  "Liens externes",
  "Principales publications",
  "Voir aussi"
], P_ = [
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
], F_ = {
  en: Sh,
  es: D_,
  bn: T_,
  fr: B_,
  de: P_
};
class Io {
  constructor({
    title: t,
    sourceLanguage: n,
    targetLanguage: o,
    missingSectionsCount: s = 0
  } = {}) {
    this.title = t, this.sourceLanguage = n, this.targetLanguage = o, this.missingSectionsCount = s;
  }
}
class jc {
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
class yh extends ro {
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
    suggestionProvider: l = null,
    collection: u = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      langLinksCount: a,
      wikidataId: r,
      suggestionProvider: l
    }), this.collection = new jc(u);
  }
}
class xh extends Un {
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
    sourceSections: l = [],
    targetSections: u = [],
    isListable: d = !0,
    suggestionProvider: i = null,
    collection: c = {}
  }) {
    super({
      sourceLanguage: t,
      targetLanguage: n,
      sourceTitle: o,
      targetTitle: s,
      present: a,
      missing: r,
      sourceSections: l,
      targetSections: u,
      isListable: d,
      suggestionProvider: i
    }), this.collection = new jc(c);
  }
}
const M_ = Sh, Ft = (n) => b(void 0, [n], function* ({ urlPostfix: e = null, urlParams: t }) {
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
function N_() {
  return b(this, null, function* () {
    const e = {}, t = "/page-collection-groups";
    try {
      const n = (yield Ft({ urlPostfix: t, urlParams: e })) || [], o = {};
      for (const s in n)
        o[s] = n[s].map(
          (a) => new jc(a)
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
function U_(e, t, n = null, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      count: o
    };
    return n && (s.seed = n), ((yield Ft({ urlParams: s })) || []).map(
      (r) => new ro({
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
const I_ = (e, t) => b(void 0, null, function* () {
  return ((yield Ft({ urlParams: {
    source: e,
    target: t,
    count: 24,
    search_algorithm: "mostpopular"
  } })) || []).map(
    (s) => new ro({
      sourceTitle: s.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: s.wikidata_id,
      langLinksCount: parseInt(s.langlinks_count)
    })
  );
}), R_ = (e, t) => b(void 0, null, function* () {
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
}), z_ = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  return n && (o.seed = n), ((yield Ft({ urlParams: o })) || []).map(
    (a) => new yh({
      sourceTitle: a.title.replace(/_/g, " "),
      sourceLanguage: e,
      targetLanguage: t,
      wikidataId: a.wikidata_id,
      langLinksCount: parseInt(a.langlinks_count),
      collection: a.collection
    })
  );
}), O_ = (e, t, n = null) => b(void 0, null, function* () {
  const o = {
    source: e,
    target: t,
    count: 24,
    collections: !0
  };
  n && (o.seed = n);
  const a = (yield Ft({ urlPostfix: "/sections", urlParams: o })) || [];
  return a && a.map(
    (r) => new xh({
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
function j_(e, t, n) {
  return b(this, null, function* () {
    const o = [t, e, n].map(
      (r) => encodeURIComponent(r)
    ), s = Q.getCXServerUrl(
      `/suggest/sections/${o.join("/")}`
    ), a = yield fetch(s).then(
      (r) => r.ok ? r.json() : Promise.reject(new Error("Failed to load data from server"))
    ).then((r) => r == null ? void 0 : r.sections).catch((r) => null);
    return a ? new Un(a) : null;
  });
}
function H_(e, t, n = null) {
  return b(this, null, function* () {
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
function q_(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    };
    return ((yield Ft({ urlParams: s })) || []).map(
      (r) => new ro({
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
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      topic: n.join("|"),
      count: o
    }, r = (yield Ft({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new Un({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: l.source_title,
        targetTitle: l.target_title,
        sourceSections: l.source_sections,
        targetSections: l.target_sections,
        present: l.present,
        missing: l.missing
      })
    );
  });
}
function X_(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    };
    return ((yield Ft({ urlParams: s })) || []).map(
      (r) => new ro({
        sourceTitle: r.title.replace(/_/g, " "),
        sourceLanguage: e,
        targetLanguage: t,
        wikidataId: r.wikidata_id,
        langLinksCount: parseInt(r.sitelink_count)
      })
    );
  });
}
function W_(e, t, n, o = 24) {
  return b(this, null, function* () {
    const s = {
      source: e,
      target: t,
      country: n.join("|"),
      count: o
    }, r = (yield Ft({ urlPostfix: "/sections", urlParams: s })) || [];
    return r && r.map(
      (l) => new Un({
        sourceLanguage: e,
        targetLanguage: t,
        sourceTitle: l.source_title,
        targetTitle: l.target_title,
        sourceSections: l.source_sections,
        targetSections: l.target_sections,
        present: l.present,
        missing: l.missing
      })
    );
  });
}
function K_(e) {
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
    }, n = Q.getApi(e);
    try {
      const a = (yield n.get(t)).query.usercontribs.map((r) => r.title);
      return [...new Set(a)];
    } catch (o) {
      return mw.log.error("Error while fetching suggestion seeds", o), [];
    }
  });
}
function Y_(e, t) {
  return b(this, null, function* () {
    const n = {
      action: "parse",
      format: "json",
      formatversion: 2,
      prop: "sections",
      page: t
    }, o = Q.getApi(e);
    try {
      return (yield o.get(n)).parse;
    } catch (s) {
      return mw.log.error("Error while fetching suggestion sections size", s), [];
    }
  });
}
function Q_(e) {
  const t = M_.map((o) => encodeURIComponent(o)).join("|"), n = Q.getCXServerUrl(
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
const J_ = (e, t, n) => {
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
}, Z_ = (e) => {
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
}, eS = () => {
  const e = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions"
  }, t = new mw.Api();
  return Promise.resolve(t.postWithToken("csrf", e)).then((n) => {
    var a, r;
    const o = n.query.contenttranslationsuggestions.lists || {};
    return (((r = (a = Object.values(o)) == null ? void 0 : a[0]) == null ? void 0 : r.suggestions) || []).map((l) => new Io(l));
  }).catch((n) => {
    mw.log.error("Error while fetching favorite suggestions", n);
  });
}, ie = {
  fetchFavorites: eS,
  fetchPageSuggestions: U_,
  fetchSectionSuggestion: j_,
  fetchSectionSuggestions: H_,
  fetchAppendixTargetSectionTitles: Q_,
  fetchArticleSections: Y_,
  markFavorite: J_,
  unmarkFavorite: Z_,
  fetchUserEdits: K_,
  fetchMostPopularPageSuggestions: I_,
  fetchMostPopularSectionSuggestions: R_,
  fetchPageSuggestionsByTopics: q_,
  fetchSectionSuggestionsByTopics: G_,
  fetchPageSuggestionsByCountries: X_,
  fetchSectionSuggestionsByCountries: W_,
  fetchPageCollectionGroups: N_,
  fetchPageSuggestionsByCollections: z_,
  fetchSectionSuggestionsByCollections: O_
}, tS = window.Vuex.useStore, Xo = () => {
  const e = tS(), { sourceLanguage: t, targetLanguage: n } = Ae(e), o = (l) => {
    if (!l)
      return !1;
    const u = e.getters["suggestions/getFavoriteTitlesByLanguagePair"](t.value, n.value), i = e.getters["translator/getTranslationsForLanguagePair"](t.value, n.value).map((c) => c.sourceTitle);
    return !u.includes(l.sourceTitle) && !i.includes(l.sourceTitle);
  }, s = (l) => {
    const { pageSuggestions: u } = e.state.suggestions;
    return !u.some(
      (i) => i.sourceLanguage === l.sourceLanguage && i.targetLanguage === l.targetLanguage && i.sourceTitle === l.sourceTitle
    ) && o(l);
  }, a = (l) => e.state.suggestions.sectionSuggestions.some(
    (u) => u.sourceLanguage === l.sourceLanguage && u.targetLanguage === l.targetLanguage && u.sourceTitle === l.sourceTitle
  );
  return {
    isPageSuggestionValid: s,
    isSectionSuggestionValid: (l) => {
      if (!l)
        return !1;
      const u = e.state.suggestions.appendixSectionTitles[n.value] || [];
      return !a(l) && o(l) && l.isValid(u);
    },
    sectionSuggestionExists: a
  };
};
class nS {
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
const oS = window.Vuex.useStore, Hc = window.Vue.ref, sS = Hc([]), aS = Hc([]);
let hr = !1, fr = !1, td = !1;
const Aa = Hc([]);
let ns = null;
const wr = {
  page: sS,
  section: aS
}, Ch = () => {
  const e = oS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = () => b(void 0, null, function* () {
    fr || (Aa.value = yield ie.fetchUserEdits(t.value).then((d) => (fr = !0, d)));
  }), s = () => b(void 0, null, function* () {
    let d = e.getters["translator/getTranslationsByStatus"]("published");
    if (d = d.filter(
      (i) => i.sourceLanguage === t.value
    ), d.length && !hr)
      return hr = !0, d.map(
        (i) => i.sourceTitle
      );
    if (hr = !0, !fr && (yield o(), Aa.value.length > 0))
      return Aa.value;
    if (!td) {
      const i = yield ie.fetchUserEdits(n.value).then((c) => (td = !0, c));
      if (i.length)
        return io.fetchLanguageLinksForLanguage(
          n.value,
          t.value,
          i
        );
    }
    return null;
  }), a = (d) => {
    let i = wr[d].value.find(
      (c) => c.matchesLanguagePair(t.value, n.value)
    );
    return i || (i = new nS({
      sourceLanguage: t.value,
      targetLanguage: n.value
    }), wr[d].value.push(i)), i;
  }, r = () => b(void 0, null, function* () {
    let d = !1, i = [];
    do {
      i = yield s(), i || (d = !0);
      for (const c in wr) {
        const g = a(c);
        g.seeds = [
          ...g.seeds,
          ...i || []
        ];
      }
    } while (!d && !(i != null && i.length));
  }), l = () => ns || (ns = r(), ns.finally(() => {
    ns = null;
  }));
  return {
    getSuggestionSeed: (d) => b(void 0, null, function* () {
      let i = a(d);
      return i.seeds.length || (yield l()), i.shiftSeeds();
    }),
    fetchPreviousEditsInSource: o,
    previousEditsInSource: Aa
  };
}, iS = 5;
function ao(e) {
  return b(this, null, function* () {
    let t = 0, n;
    do
      n = yield e();
    while (!n && ++t < iS);
  });
}
const rS = window.Vuex.useStore, lS = () => {
  const e = rS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), { getSuggestionSeed: o } = Ch(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Xo(), l = {
    id: Kt,
    type: Ke
  };
  return {
    fetchPageSuggestionsBasedOnEdits: (i) => b(void 0, null, function* () {
      const c = [];
      return yield ao(() => b(void 0, null, function* () {
        const g = yield o("page");
        let p = yield ie.fetchPageSuggestions(
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
      return yield ao(() => b(void 0, null, function* () {
        const g = yield o("section"), p = yield ie.fetchSectionSuggestions(
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
        return m = m.slice(0, i), c.push(...m), h.forEach((f) => {
          f && !r(f) && (f.isListable = !1, e.commit("suggestions/addSectionSuggestion", f));
        }), c.length >= i;
      })), c.forEach(
        (g) => g.suggestionProvider = l
      ), c;
    })
  };
}, cS = window.Vuex.useStore, uS = () => {
  const e = cS(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B(), o = {
    id: wn,
    type: Ke
  }, {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Xo();
  return { fetchSectionSuggestionsPopular: (d) => b(void 0, null, function* () {
    const i = [];
    return yield ao(() => b(void 0, null, function* () {
      const c = yield ie.fetchMostPopularSectionSuggestions(
        t.value,
        n.value
      );
      let g = c.filter(
        (m) => s(m)
      );
      const p = c.filter(
        (m) => !s(m)
      );
      return g = g.slice(0, d), i.push(...g), p.forEach((m) => {
        m && !r(m) && (m.isListable = !1, e.commit("suggestions/addSectionSuggestion", m));
      }), i.length >= d;
    })), i.forEach(
      (c) => c.suggestionProvider = o
    ), i;
  }), fetchPageSuggestionsPopular: (d) => b(void 0, null, function* () {
    const i = [];
    return yield ao(() => b(void 0, null, function* () {
      let c = yield ie.fetchMostPopularPageSuggestions(
        t.value,
        n.value
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, d), i.push(...c), i.length >= d;
    })), i.forEach(
      (c) => c.suggestionProvider = o
    ), i;
  }) };
}, bh = window.Vue.ref, os = "ungrouped", nd = bh({}), od = bh(!1), qc = () => ({
  fetchPageCollectionGroups: () => b(void 0, null, function* () {
    try {
      const t = yield ie.fetchPageCollectionGroups(), n = Object.fromEntries(
        Object.keys(t).sort((o, s) => o === os ? 1 : s === os ? -1 : o.localeCompare(s)).map((o) => [o, t[o]])
      );
      n[os] && (n[os] = n[os].sort(
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
const dS = '<path d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"/>', gS = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', pS = '<path d="M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"/>', mS = '<path d="m5.83 9 5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z"/>', hS = '<path d="M7 0a2 2 0 00-2 2h9a2 2 0 012 2v12a2 2 0 002-2V2a2 2 0 00-2-2z"/><path d="M13 20a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2zM9 5h4v5H9zM4 5h4v1H4zm0 2h4v1H4zm0 2h4v1H4zm0 2h9v1H4zm0 2h9v1H4zm0 2h9v1H4z"/>', fS = '<path d="M10 1a9 9 0 109 9 9 9 0 00-9-9m5 10H5V9h10z"/>', wS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z"/>', vS = '<path d="M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2zm10 14.25-5-3.5-5 3.5V3h10z"/>', _S = '<path d="M3 3H1v16h18v-2H3z"/><path d="M11 11 8 9l-4 4v3h14V5z"/>', SS = '<path d="M7 14.17 2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z"/>', yS = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0m2.5 14.5L9 11V4h2v6l3 3z"/>', xS = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', CS = '<path d="m2.5 15.25 7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"/>', bS = '<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>', kS = '<circle cx="10" cy="10" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="17" cy="10" r="2"/>', $S = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', VS = '<path d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"/><circle cx="10" cy="10" r="2.5"/>', ES = '<path d="M19 16 2 12a3.83 3.83 0 01-1-2.5A3.83 3.83 0 012 7l17-4z"/><rect width="4" height="8" x="4" y="9" rx="2"/>', LS = '<path d="M8 2H2a2 2 0 00-2 2v2h12z"/><rect width="20" height="14" y="4" rx="2"/>', AS = '<path d="M14.75 1A5.24 5.24 0 0010 4 5.24 5.24 0 000 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0014.75 1"/>', kh = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7"/>', DS = '<path d="M4 10a6 6 0 1012 0 6 6 0 00-12 0m6-8a8 8 0 110 16 8 8 0 010-16m1 7v5H9V9zm0-1V6H9v2z"/>', TS = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0M9 5h2v2H9zm0 4h2v6H9z"/>', BS = '<path d="M20 18h-1.44a.6.6 0 01-.4-.12.8.8 0 01-.23-.31L17 15h-5l-1 2.54a.8.8 0 01-.22.3.6.6 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a12 12 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.4 13.4 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.2 17.2 0 01-5 2.1q.56.82.87 1.38a23.3 23.3 0 005.22-2.51 15.6 15.6 0 003.56 1.77zM3.63 5.33h4.91a8.1 8.1 0 01-2.45 4.45 9.1 9.1 0 01-2.46-4.45"/>', PS = '<path d="M19 1h-8l3.286 3.286L6 12l1.371 1.472 8.332-7.77.007.008L19 9zM2 5h4v2H3v10h10v-4.004h2V18a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1"/>', FS = '<path d="M10 0a7.65 7.65 0 00-8 8c0 2.52 2 5 3 6s5 6 5 6 4-5 5-6 3-3.48 3-6a7.65 7.65 0 00-8-8m0 11.25A3.25 3.25 0 1113.25 8 3.25 3.25 0 0110 11.25"/>', MS = '<path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/>', NS = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', US = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', IS = '<circle cx="17" cy="10" r="3"/><path d="M10.58 3A3 3 0 0111 4.5a3 3 0 01-6 0A3 3 0 015.42 3H1v12a2 2 0 002 2h12V3z"/>', RS = '<path d="M15.65 4.35A8 8 0 1017.4 13h-2.22a6 6 0 11-1-7.22L11 9h7V2z"/>', zS = '<path d="M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3m7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3"/>', OS = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8"/>', jS = '<g transform="translate(10 10)"><path id="cdx-icon-settings-a" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(45)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(90)"/><use xlink:href="#cdx-icon-settings-a" transform="rotate(135)"/></g><path d="M10 2.5a7.5 7.5 0 000 15 7.5 7.5 0 000-15v4a3.5 3.5 0 010 7 3.5 3.5 0 010-7"/>', HS = '<path d="M10 12.5c-5.92 0-9 3.5-9 5.5v1h18v-1c0-2-3.08-5.5-9-5.5"/><circle cx="10" cy="6" r="5"/>', qS = '<path d="M10 11c-5.92 0-8 3-8 5v3h16v-3c0-2-2.08-5-8-5"/><circle cx="10" cy="5.5" r="4.5"/>', wc = dS, $h = gS, Vh = {
  ltr: pS,
  shouldFlip: !0
}, Eh = {
  ltr: mS,
  shouldFlip: !0
}, Gc = {
  ltr: hS,
  shouldFlip: !0
}, GS = fS, Lh = wS, Ah = vS, XS = _S, WS = SS, KS = yS, Wo = xS, YS = CS, Xc = bS, Wc = kS, vc = $S, QS = VS, JS = {
  ltr: ES,
  shouldFlip: !0
}, ZS = {
  ltr: LS,
  shouldFlip: !0
}, ey = AS, ty = {
  langCodeMap: {
    ar: kh
  },
  default: DS
}, ny = {
  langCodeMap: {
    ar: kh
  },
  default: TS
}, Dh = BS, Kc = {
  ltr: PS,
  shouldFlip: !0
}, oy = FS, sy = MS, pa = {
  ltr: NS,
  shouldFlip: !0
}, Yc = {
  ltr: US,
  shouldFlip: !0
}, ay = {
  ltr: IS,
  shouldFlip: !0
}, Th = RS, iy = zS, _c = OS, ry = jS, ly = HS, cy = qS, uy = {
  [Kt]: cy,
  [wn]: ey,
  [Z]: Gc
}, dy = {
  [Z]: ZS,
  [be]: oy
};
class Pt {
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
    return this.type === Ke ? this.id : this.type;
  }
  get icon() {
    return uy[this.provider] || null;
  }
  get expandableIcon() {
    return dy[this.provider] || this.icon;
  }
}
const ss = window.Vue.computed, { topics: sd, regions: ad } = mw.loader.require(
  "ext.cx.articlefilters"
), gy = (e) => new Zs({
  id: e.groupId,
  label: e.label,
  type: He,
  filters: e.topics.map(
    (t) => new Pt({
      id: t.topicId,
      label: t.label,
      type: He
    })
  )
}), Hi = () => {
  const e = ce(), { currentSuggestionFilters: t, setFilterURLParams: n } = B(), { validateFilters: o, filtersValidatorError: s } = Pc(), a = new Pt({
    id: Kt,
    type: Ke,
    label: e.i18n("cx-sx-suggestions-filter-user-edit-label")
  }), r = new Pt({
    id: wn,
    type: Ke,
    label: e.i18n("cx-sx-suggestions-filter-most-popular-label")
  }), l = new Pt({
    id: Z,
    type: Ke,
    label: e.i18n("cx-sx-suggestions-filter-page-collection-label")
  }), { pageCollectionGroups: u, pageCollectionGroupsFetched: d } = qc(), i = ss(() => {
    const C = new Zs({
      id: Ke,
      type: Ke,
      label: e.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [a, r]
    });
    return Object.keys(u.value).length > 1 && C.filters.push(l), C;
  }), c = () => {
    const C = ae({}, u.value);
    delete C.ungrouped;
    const N = [];
    for (const T in C) {
      const R = C[T].map(
        (W) => new Pt({
          id: W.name,
          label: W.name,
          type: Z
        })
      ), K = new Pt({
        id: T,
        label: T,
        type: Z,
        subFilters: R
      });
      N.push(K);
    }
    const L = (u.value.ungrouped || []).map(
      (T) => new Pt({
        id: T.name,
        label: T.name,
        type: Z
      })
    );
    return [...N, ...L];
  }, g = ss(
    () => new Zs({
      id: Z,
      type: Z,
      label: e.i18n(
        "cx-sx-suggestions-filter-page-collections-group-label"
      ),
      filters: c()
    })
  ), p = ss(() => new Zs({
    id: be,
    type: be,
    label: e.i18n("cx-sx-suggestions-filters-tab-regions"),
    filters: ad.map(
      (C) => new Pt({
        id: C.id,
        label: C.label,
        type: be,
        subFilters: C.countries.map(
          (N) => new Pt({
            id: N.id,
            label: N.label,
            type: be
          })
        )
      })
    )
  })), m = ss(() => {
    const C = [
      i.value,
      ...sd.map(gy),
      p.value
    ];
    return g.value.filters.length && C.splice(1, 0, g.value), C;
  }), h = ss(
    () => [t.value.type, t.value.id].includes(
      Z
    ) && !d.value
  ), f = () => {
    if (h.value)
      return [];
    const C = v();
    return C.type === He || C.type === be || C.type === wt || C.type === Z || C.id === Z ? [C, a] : [a, r];
  }, w = (C) => {
    n(C.type, C.id);
  }, v = () => t.value.type === wt ? new Pt({
    id: t.value.id,
    label: t.value.id,
    type: t.value.type
  }) : m.value.flatMap((C) => C.filters).flatMap((C) => [C, ...C.subFilters || []]).find(y), y = (C) => t.value.id === C.id;
  return {
    allFilters: m,
    getFiltersSummary: f,
    selectFilter: w,
    isFilterSelected: y,
    getArticleTopics: (C) => {
      const L = sd.flatMap((T) => T.topics).find((T) => T.topicId === C);
      return L ? L.articletopics : [];
    },
    waitingForPageCollectionsFetch: h,
    findSelectedFilter: v,
    validateURLFilterWithCollections: () => {
      if (!d.value)
        return;
      const C = Object.values(u.value).flat(), N = o(
        {
          type: t.value.type,
          id: t.value.id
        },
        C
      );
      n(N.type, N.id), s.value && mw.notify(e.i18n("cx-sx-suggestions-filters-invalid-url"));
    },
    getCountries: (C) => {
      const N = ad.find((L) => L.id === C);
      return N ? N.countries.map((L) => L.id) : [C];
    }
  };
}, py = window.Vuex.useStore, my = () => {
  const e = py(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Xo(), { getArticleTopics: l } = Hi();
  return {
    fetchPageSuggestionsByTopics: (i) => b(void 0, null, function* () {
      const c = o.value.id, g = {
        id: c,
        type: He
      }, p = l(c);
      let m = yield ie.fetchPageSuggestionsByTopics(
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
      const c = o.value.id, g = {
        id: c,
        type: He
      }, p = l(c), m = [];
      return yield ao(() => b(void 0, null, function* () {
        const h = yield ie.fetchSectionSuggestionsByTopics(
          t.value,
          n.value,
          p
        );
        let f = h.filter(
          (v) => s(v)
        );
        const w = h.filter(
          (v) => !s(v)
        );
        return f = f.slice(0, i), m.push(...f), w.forEach((v) => {
          v && !r(v) && (v.isListable = !1, e.commit("suggestions/addSectionSuggestion", v));
        }), m.length >= i;
      })), m.forEach(
        (h) => h.suggestionProvider = g
      ), m;
    })
  };
}, hy = window.Vuex.useStore, fy = () => {
  const e = hy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Xo(), { getCountries: l } = Hi();
  return {
    fetchPageSuggestionsByCountries: (i) => b(void 0, null, function* () {
      let c = yield ie.fetchPageSuggestionsByCountries(
        t.value,
        n.value,
        l(o.value.id)
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, i), c.forEach(
        (g) => g.suggestionProvider = o.value
      ), c;
    }),
    fetchSectionSuggestionsByCountries: (i) => b(void 0, null, function* () {
      const c = [];
      return yield ao(() => b(void 0, null, function* () {
        const g = yield ie.fetchSectionSuggestionsByCountries(
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
        return p = p.slice(0, i), c.push(...p), m.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), c.length >= i;
      })), c.forEach(
        (g) => g.suggestionProvider = o.value
      ), c;
    })
  };
}, wy = window.Vuex.useStore, vy = window.Vue.computed, _y = () => {
  const e = wy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), s = vy(() => {
    var i;
    return ((i = o.value) == null ? void 0 : i.type) !== Z ? null : o.value.id;
  }), {
    isSectionSuggestionValid: a,
    isPageSuggestionValid: r,
    sectionSuggestionExists: l
  } = Xo();
  return {
    fetchSectionSuggestionsByCollections: () => b(void 0, null, function* () {
      const i = [], c = yield ie.fetchSectionSuggestionsByCollections(
        t.value,
        n.value,
        s.value
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
        (m) => m.suggestionProvider = o.value
      ), i;
    }),
    fetchPageSuggestionsByCollections: () => b(void 0, null, function* () {
      const i = [];
      let c = yield ie.fetchPageSuggestionsByCollections(
        t.value,
        n.value,
        s.value
      );
      return c = c.filter(
        (g) => r(g)
      ), i.push(...c), i.forEach(
        (g) => g.suggestionProvider = o.value
      ), i;
    })
  };
}, Sy = window.Vuex.useStore, yy = () => {
  const e = Sy(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), {
    isSectionSuggestionValid: s,
    isPageSuggestionValid: a,
    sectionSuggestionExists: r
  } = Xo();
  return {
    fetchPageSuggestionsBySeed: (d) => b(void 0, null, function* () {
      const i = o.value.id;
      let c = yield ie.fetchPageSuggestions(
        t.value,
        n.value,
        i
      );
      return c = c.filter(
        (g) => a(g)
      ), c = c.slice(0, d), c.forEach(
        (g) => g.suggestionProvider = {
          id: i,
          type: wt
        }
      ), c;
    }),
    fetchSectionSuggestionsBySeed: (d) => b(void 0, null, function* () {
      const i = [], c = o.value.id;
      return yield ao(() => b(void 0, null, function* () {
        const g = yield ie.fetchSectionSuggestions(
          t.value,
          n.value,
          c
        );
        if (!g)
          return !1;
        let p = g.filter(
          (h) => s(h)
        );
        const m = g.filter(
          (h) => !s(h)
        );
        return p = p.slice(0, d), i.push(...p), m.forEach((h) => {
          h && !r(h) && (h.isListable = !1, e.commit("suggestions/addSectionSuggestion", h));
        }), i.length >= d;
      })), i.forEach(
        (g) => g.suggestionProvider = {
          id: c,
          type: wt
        }
      ), i;
    })
  };
}, xy = () => {
  const { currentSuggestionFilters: e } = B(), {
    fetchPageSuggestionsBasedOnEdits: t,
    fetchSectionSuggestionsBasedOnEdits: n
  } = lS(), { fetchPageSuggestionsPopular: o, fetchSectionSuggestionsPopular: s } = uS(), { fetchPageSuggestionsByTopics: a, fetchSectionSuggestionsByTopics: r } = my(), {
    fetchPageSuggestionsByCountries: l,
    fetchSectionSuggestionsByCountries: u
  } = fy(), {
    fetchPageSuggestionsByCollections: d,
    fetchSectionSuggestionsByCollections: i
  } = _y(), { fetchPageSuggestionsBySeed: c, fetchSectionSuggestionsBySeed: g } = yy(), p = {
    [Kt]: t,
    [wn]: o,
    [Z]: d,
    [He]: a,
    [be]: l,
    [wt]: c
  }, m = {
    [Kt]: n,
    [wn]: s,
    [Z]: i,
    [He]: r,
    [be]: u,
    [wt]: g
  }, h = (v) => v.type === Ke ? v.id : v.type;
  return {
    getCurrentPageSuggestionProvider: () => p[h(e.value)],
    getCurrentSectionSuggestionProvider: () => m[h(e.value)]
  };
}, Cy = window.Vuex.useStore, Qc = () => {
  const e = Cy(), { getFilteredSectionSuggestions: t, getFilteredPageSuggestions: n } = Oc(), { sourceLanguageURLParameter: o } = B(), s = Go(), a = () => {
    const g = t(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, r = () => {
    const g = n(), p = e.state.suggestions.maxSuggestionsPerSlice;
    return p - g.length % p;
  }, {
    getCurrentPageSuggestionProvider: l,
    getCurrentSectionSuggestionProvider: u
  } = xy(), d = (g) => {
    try {
      const p = g.map((m) => m.sourceTitle);
      if (p.length)
        return s(o.value, p);
    } catch (p) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };
  return {
    fetchNextSectionSuggestionsSlice: () => b(void 0, null, function* () {
      e.commit("suggestions/setIsSectionSuggestionsFetchPending", !1), e.commit("suggestions/increaseSectionSuggestionsLoadingCount");
      const g = a(), m = yield u()(
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
}, by = window.Vuex.useStore, Bh = () => {
  const e = by();
  return (t) => b(void 0, null, function* () {
    if (e.getters["suggestions/appendixTitlesExistForLanguage"](t))
      return;
    const n = yield ie.fetchAppendixTargetSectionTitles(t);
    e.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language: t,
      titles: n
    });
  });
}, ky = window.Vuex.useStore, Ph = () => {
  const e = ky(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Qc(), { getPageSuggestionsSliceByIndex: o, getSectionSuggestionsSliceByIndex: s } = Oc(), { targetLanguageURLParameter: a } = B(), r = Bh();
  return () => b(void 0, null, function* () {
    const l = s(0), u = o(0), { maxSuggestionsPerSlice: d } = e.state.suggestions, i = l.length === d, c = u.length === d;
    i && c || (yield r(a.value), t(), n());
  });
}, $y = window.Vuex.useStore, Fh = () => {
  const e = $y(), t = Go();
  return (n, o, s) => b(void 0, null, function* () {
    let a = e.getters["suggestions/getSectionSuggestionsForArticle"](n, o, s);
    if (!a) {
      a = yield ie.fetchSectionSuggestion(
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
          return new ro({
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
}, id = window.Vue.computed, Vy = window.Vuex.useStore, _n = () => {
  const e = Vy(), {
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
    getCurrentTitleByLanguage: (l, u) => s.value.getTitleForLanguage(l) || s.value.getTitleForLanguage(u)
  };
}, Mh = window.Vuex.useStore, { setLanguageURLParams: Ey } = B(), Jc = (e, t, n) => {
  e.commit("application/setSourceLanguage", t), e.commit("application/setTargetLanguage", n), Ey(t, n), mw.storage.set("cxSourceLanguage", t), mw.storage.set("cxTargetLanguage", n);
}, Nh = () => {
  const e = Mh(), t = Ph();
  return (n, o) => {
    const { sourceLanguage: s, targetLanguage: a } = Ae(e);
    n === o && (n = a.value, o = s.value), Jc(e, n, o), t();
  };
}, Ly = () => {
  const e = Mh(), t = Fh(), { currentLanguageTitleGroup: n, targetPageExists: o } = _n(), s = Go();
  return (a, r) => b(void 0, null, function* () {
    const {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      setPageURLParam: d,
      clearSectionURLParameter: i
    } = B();
    a === r && (a = u.value, r = l.value);
    const c = n.value.getTitleForLanguage(a);
    Jc(e, a, r), d(c), o.value ? (i(), yield t(
      l.value,
      u.value,
      c
    )) : yield s(l.value, [c]);
  });
}, Ay = window.Vuex.useStore, Dy = window.Vue.ref, rd = Dy(!1), Uh = () => {
  const e = Ay(), {
    supportedSourceLanguageCodes: t,
    supportedTargetLanguageCodes: n,
    fetchSupportedLanguageCodes: o
  } = ua(), { sourceLanguageURLParameter: s, targetLanguageURLParameter: a } = B(), r = () => {
    const u = Q.getCurrentWikiLanguageCode(), d = (f) => t.value.includes(f), i = (f) => n.value.includes(f), c = {
      sourceLanguage: "en",
      targetLanguage: "es"
    }, g = [
      a.value,
      mw.storage.get("cxTargetLanguage"),
      u,
      c.targetLanguage
    ], p = [
      s.value,
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
  return { initializeApplicationLanguages: () => b(void 0, null, function* () {
    yield o();
    const { sourceLanguage: u, targetLanguage: d } = r();
    Jc(e, u, d), rd.value = !0;
  }), applicationLanguagesInitialized: rd };
};
const Ty = window.Vue.resolveDynamicComponent, ld = window.Vue.openBlock, cd = window.Vue.createBlock, By = window.Vue.Transition, as = window.Vue.withCtx, is = window.Vue.createVNode, Py = window.Vue.resolveComponent, vr = window.Vue.unref, Fy = window.Vuex.useStore, ud = window.Vue.computed, My = window.Vue.onMounted, Ny = window.Vue.inject, Uy = {
  __name: "App",
  setup(e) {
    const { initializeURLState: t } = B(), { initializeApplicationLanguages: n } = Uh();
    t(), n();
    const o = Ny("breakpoints"), s = ud(() => o.value.mobile), a = Fy(), r = ud(
      () => a.state.application.autoSavePending
    );
    return My(() => {
      window.addEventListener("beforeunload", (l) => {
        r.value && (l.preventDefault(), l.returnValue = "");
      }), mw.user.isAnon() || window.addEventListener("visibilitychange", (l) => {
        document.visibilityState === "visible" && nh.assertUser().then(() => a.commit("application/setIsLoginDialogOn", !1)).catch((u) => {
          u instanceof jo && a.commit("application/setIsLoginDialogOn", !0);
        });
      });
    }), (l, u) => {
      const d = Py("router-view");
      return ld(), cd(vr(e0), { id: "contenttranslation" }, {
        default: as(() => [
          is(vr(F), { class: "cx-container" }, {
            default: as(() => [
              is(vr(k), {
                class: "cx-container__wrapper-col",
                cols: "12"
              }, {
                default: as(() => [
                  is(d, null, {
                    default: as(({ Component: i, route: c }) => [
                      is(By, {
                        name: s.value ? c.meta.transitionName : ""
                      }, {
                        default: as(() => [
                          (ld(), cd(Ty(i)))
                        ]),
                        _: 2
                      }, 1032, ["name"]),
                      is(Sv)
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
}, Iy = {
  username: mw.config.get("wgUserName"),
  isAnon: mw.user.isAnon(),
  /** @type Translation[] */
  translations: [],
  translatorStats: null
}, Ry = {
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
class Ih {
  constructor({ id: t, type: n, question: o, url: s }) {
    this.id = t, this.type = n, this.question = o, this.url = s;
  }
}
class Ro {
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
    this.text = t, this.title = n, this.type = o, this.status = s, this.details = a && new Ih(a);
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
    (s, a) => Qe(ae({}, s), {
      [a.dataset.segmentid]: a
    }),
    {}
  );
};
class zy {
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
class Zc extends Tc {
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
    status: u,
    targetTitle: d,
    targetUrl: i,
    sectionTranslations: c
  }) {
    super({
      translationId: t,
      sourceTitle: n,
      sourceLanguage: o,
      targetLanguage: s,
      startTimestamp: a,
      lastUpdatedTimestamp: r,
      pageRevision: l,
      status: u,
      targetTitle: d
    }), this.targetUrl = i, this.sectionTranslations = c;
  }
}
const qi = mw.user.isAnon() ? void 0 : "user", Rh = (e) => {
  if (e === "assertuserfailed")
    throw new jo();
};
function zh(e, t = null) {
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
    return t && (n.offset = t), new mw.Api().get(n).then((s) => b(this, null, function* () {
      var l;
      const a = s.query.contenttranslation.translations;
      let r;
      if (e === "draft" ? r = a.map(
        (u) => new Ui(Qe(ae({}, u), { status: e }))
      ) : r = a.map(
        (u) => new Zc(Qe(ae({}, u), { status: e }))
      ), (l = s.continue) != null && l.offset) {
        const u = yield zh(
          e,
          s.continue.offset
        );
        r = r.concat(u);
      }
      return r;
    }));
  });
}
function Oy(e) {
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
      (a) => new zy(a)
    );
  });
}
function jy(e, t, n, o, s) {
  return b(this, null, function* () {
    if (!o)
      return "";
    let a = `/translate/${e}/${t}`;
    n !== ee.ORIGINAL_TEXT_PROVIDER_KEY && (a += `/${n}`);
    const r = Q.getCXServerUrl(a);
    return fetch(r, {
      headers: { "Content-Type": "application/json", Authorization: s },
      method: "POST",
      body: JSON.stringify({ html: `<div>${o}</div>` })
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
const Hy = (e, t, n) => {
  const o = Q.getApi(t);
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
}, qy = ({
  html: e,
  sourceTitle: t,
  targetTitle: n,
  sourceSectionTitle: o,
  targetSectionTitle: s,
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
    assert: qi,
    action: "cxpublishsection",
    title: n,
    html: e,
    sourcetitle: t,
    sourcerevid: l,
    sourcesectiontitle: o,
    targetsectiontitle: s,
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
          publishFeedbackMessage: new Ro({
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
    Rh(h);
    let w;
    return f = f || {}, f.exception ? w = f.exception.message : f.error ? w = f.error.info : w = "Unknown error", {
      publishFeedbackMessage: new Ro({
        text: w,
        status: "error"
      }),
      targetTitle: null
    };
  });
}, Gy = ({
  sourceTitle: e,
  targetTitle: t,
  sourceSectionTitle: n,
  targetSectionTitle: o,
  sourceLanguage: s,
  targetLanguage: a,
  revision: r,
  units: l,
  sectionId: u,
  isSandbox: d,
  progress: i
}) => {
  const c = {
    assert: qi,
    action: "sxsave",
    targettitle: t,
    sourcetitle: e,
    sourcerevision: r,
    sourcesectiontitle: n,
    targetsectiontitle: o,
    sourcelanguage: s,
    targetlanguage: a,
    content: JSON.stringify(l),
    sectionid: u,
    issandbox: d,
    progress: JSON.stringify(i)
  };
  return new mw.Api().postWithToken("csrf", c).then((p) => p.sxsave.sectiontranslationid).catch((p, m) => {
    Rh(p);
    let h;
    return m.exception ? h = m.exception.message : m.error ? h = m.error.info : h = "Unknown error", new Ro({ text: h, status: "error" });
  });
}, Xy = (e) => {
  const t = {
    assert: qi,
    action: "cxsplit",
    translationid: e
  };
  return new mw.Api().postWithToken("csrf", t).then((o) => o.cxsplit.result === "success");
}, Wy = () => {
  const e = {
    assert: qi,
    action: "cxcheckunreviewed"
  };
  return new mw.Api().get(e).then(
    (n) => n.cxcheckunreviewed.result === "success" || new Zc(n.cxcheckunreviewed.translation)
  );
}, Ky = (e, t, n) => {
  const o = {
    action: "sxdelete",
    sectiontranslationid: e,
    translationid: t,
    sectionid: n
  };
  return new mw.Api().postWithToken("csrf", o).then(() => !0).catch(() => !1);
}, Yy = (e) => {
  const t = {
    assert: "user",
    action: "cxdelete",
    from: e.sourceLanguage,
    to: e.targetLanguage,
    sourcetitle: e.sourceTitle
  };
  return new mw.Api().postWithToken("csrf", t).then(() => !0).catch(() => !1);
}, Qy = () => new mw.Api().get({ action: "query", list: "cxtranslatorstats" }).then((t) => {
  var n;
  return (n = t.cxtranslatorstats) == null ? void 0 : n.publishTrend;
}).catch((t) => (mw.log.error("[CX] Fetching translator stats failed", t), null)), vt = {
  fetchTranslations: zh,
  fetchTranslationUnits: Oy,
  fetchSegmentTranslation: jy,
  parseTemplateWikitext: Hy,
  publishTranslation: qy,
  saveTranslation: Gy,
  deleteTranslation: Ky,
  fetchTranslatorStats: Qy,
  deleteCXTranslation: Yy,
  splitTranslation: Xy,
  checkUnreviewedTranslations: Wy
};
function Jy(t) {
  return b(this, arguments, function* ({ commit: e }) {
    const n = yield vt.fetchTranslatorStats();
    e("setTranslatorStats", n);
  });
}
const Zy = {
  fetchTranslatorStats: Jy
}, ex = {
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
}, tx = {
  namespaced: !0,
  state: Iy,
  getters: Ry,
  actions: Zy,
  mutations: ex
}, nx = {
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
  appendixSectionTitles: F_
}, ox = {
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
}, sx = {
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
}, ax = {
  namespaced: !0,
  state: nx,
  getters: ox,
  actions: {},
  mutations: sx
}, ix = {
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
}, rx = {
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
function lx(o) {
  return b(this, arguments, function* ({ commit: e, rootState: t, state: n }) {
    var r;
    const { sourceLanguage: s } = t.application;
    if ((r = n.nearbyPages[s]) != null && r.length)
      return;
    const a = yield io.fetchNearbyPages(s);
    e("addNearbyPages", { language: s, pages: a });
  });
}
const cx = { fetchNearbyPages: lx }, ux = {
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
}, dx = {
  namespaced: !0,
  state: ix,
  getters: rx,
  actions: cx,
  mutations: ux
}, gx = {
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
}, px = {
  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (e) => e.publishTarget === "SANDBOX_SECTION"
}, mx = {
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
}, hx = {
  namespaced: !0,
  state: gx,
  getters: px,
  actions: {},
  mutations: mx
}, fx = window.Vuex.createStore, wx = fx({
  modules: { translator: tx, suggestions: ax, mediawiki: dx, application: hx }
});
function vx() {
  return Oh().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Oh() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const _x = typeof Proxy == "function", Sx = "devtools-plugin:setup", yx = "plugin:settings:set";
let co, Sc;
function xx() {
  var e;
  return co !== void 0 || (typeof window != "undefined" && window.performance ? (co = !0, Sc = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (co = !0, Sc = global.perf_hooks.performance) : co = !1), co;
}
function Cx() {
  return xx() ? Sc.now() : Date.now();
}
class bx {
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
        return Cx();
      }
    }, n && n.on(yx, (r, l) => {
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
    return b(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function kx(e, t) {
  const n = e, o = Oh(), s = vx(), a = _x && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Sx, e, t);
  else {
    const r = a ? new bx(n, s) : null;
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
const jh = window.Vue.getCurrentInstance, zo = window.Vue.inject;
window.Vue.onUnmounted;
window.Vue.onDeactivated;
window.Vue.onActivated;
const Xt = window.Vue.computed, ea = window.Vue.unref, $x = window.Vue.watchEffect, Hh = window.Vue.defineComponent, Vx = window.Vue.reactive, qh = window.Vue.h, _r = window.Vue.provide, Ex = window.Vue.ref, Gh = window.Vue.watch, Lx = window.Vue.shallowRef, Ax = window.Vue.shallowReactive, Dx = window.Vue.nextTick, fn = typeof window != "undefined";
function Tx(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Y = Object.assign;
function Sr(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = rt(s) ? s.map(e) : e(s);
  }
  return n;
}
const ta = () => {
}, rt = Array.isArray;
function X(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Bx = /\/$/, Px = (e) => e.replace(Bx, "");
function yr(e, t, n = "/") {
  let o, s = {}, a = "", r = "";
  const l = t.indexOf("#");
  let u = t.indexOf("?");
  return l < u && l >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), a = t.slice(u + 1, l > -1 ? l : t.length), s = e(a)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = Nx(o != null ? o : t, n), {
    fullPath: o + (a && "?") + a + r,
    path: o,
    query: s,
    hash: r
  };
}
function Fx(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function gd(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function pd(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && In(t.matched[o], n.matched[s]) && Xh(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function In(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Xh(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!Mx(e[n], t[n]))
      return !1;
  return !0;
}
function Mx(e, t) {
  return rt(e) ? md(e, t) : rt(t) ? md(t, e) : e === t;
}
function md(e, t) {
  return rt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function Nx(e, t) {
  if (e.startsWith("/"))
    return e;
  if ({}.NODE_ENV !== "production" && !t.startsWith("/"))
    return X(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
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
var sa;
(function(e) {
  e.pop = "pop", e.push = "push";
})(sa || (sa = {}));
var na;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(na || (na = {}));
function Ux(e) {
  if (!e)
    if (fn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Px(e);
}
const Ix = /^[^#]+#/;
function Rx(e, t) {
  return e.replace(Ix, "#") + t;
}
function zx(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Gi = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Ox(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if ({}.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const a = document.querySelector(e.el);
        if (o && a) {
          X(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch (a) {
        X(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      ({}).NODE_ENV !== "production" && X(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = zx(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function hd(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const yc = /* @__PURE__ */ new Map();
function jx(e, t) {
  yc.set(e, t);
}
function Hx(e) {
  const t = yc.get(e);
  return yc.delete(e), t;
}
let qx = () => location.protocol + "//" + location.host;
function Wh(e, t) {
  const { pathname: n, search: o, hash: s } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = s.includes(e.slice(a)) ? e.slice(a).length : 1, u = s.slice(l);
    return u[0] !== "/" && (u = "/" + u), gd(u, "");
  }
  return gd(n, e) + o + s;
}
function Gx(e, t, n, o) {
  let s = [], a = [], r = null;
  const l = ({ state: g }) => {
    const p = Wh(e, location), m = n.value, h = t.value;
    let f = 0;
    if (g) {
      if (n.value = p, t.value = g, r && r === m) {
        r = null;
        return;
      }
      f = h ? g.position - h.position : 0;
    } else
      o(p);
    s.forEach((w) => {
      w(n.value, m, {
        delta: f,
        type: sa.pop,
        direction: f ? f > 0 ? na.forward : na.back : na.unknown
      });
    });
  };
  function u() {
    r = n.value;
  }
  function d(g) {
    s.push(g);
    const p = () => {
      const m = s.indexOf(g);
      m > -1 && s.splice(m, 1);
    };
    return a.push(p), p;
  }
  function i() {
    const { history: g } = window;
    g.state && g.replaceState(Y({}, g.state, { scroll: Gi() }), "");
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
function fd(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Gi() : null
  };
}
function Xx(e) {
  const { history: t, location: n } = window, o = {
    value: Wh(e, n)
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
  function a(u, d, i) {
    const c = e.indexOf("#"), g = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + u : qx() + e + u;
    try {
      t[i ? "replaceState" : "pushState"](d, "", g), s.value = d;
    } catch (p) {
      ({}).NODE_ENV !== "production" ? X("Error with push/replace State", p) : console.error(p), n[i ? "replace" : "assign"](g);
    }
  }
  function r(u, d) {
    const i = Y({}, t.state, fd(
      s.value.back,
      // keep back and forward entries but override current position
      u,
      s.value.forward,
      !0
    ), d, { position: s.value.position });
    a(u, i, !0), o.value = u;
  }
  function l(u, d) {
    const i = Y(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: u,
        scroll: Gi()
      }
    );
    ({}).NODE_ENV !== "production" && !t.state && X(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), a(i.current, i, !0);
    const c = Y({}, fd(o.value, u, null), { position: i.position + 1 }, d);
    a(u, c, !1), o.value = u;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: r
  };
}
function Wx(e) {
  e = Ux(e);
  const t = Xx(e), n = Gx(e, t.state, t.location, t.replace);
  function o(a, r = !0) {
    r || n.pauseListeners(), history.go(a);
  }
  const s = Y({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: Rx.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Kx(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), {}.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && X(`A hash base must end with a "#":
"${e}" should be "${e.replace(/#.*$/, "#")}".`), Wx(e);
}
function Yx(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Kh(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const yn = {
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
const Qx = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Zx(t)}" via a navigation guard.`;
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
function Oo(e, t) {
  return {}.NODE_ENV !== "production" ? Y(new Error(Qx[e](t)), {
    type: e,
    [xc]: !0
  }, t) : Y(new Error(), {
    type: e,
    [xc]: !0
  }, t);
}
function Zt(e, t) {
  return e instanceof Error && xc in e && (t == null || !!(e.type & t));
}
const Jx = ["params", "query", "hash"];
function Zx(e) {
  if (typeof e == "string")
    return e;
  if ("path" in e)
    return e.path;
  const t = {};
  for (const n of Jx)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const vd = "[^/]+?", eC = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, tC = /[.+*?^${}()[\]/\\]/g;
function nC(e, t) {
  const n = Y({}, eC, t), o = [];
  let s = n.start ? "^" : "";
  const a = [];
  for (const d of e) {
    const i = d.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !d.length && (s += "/");
    for (let c = 0; c < d.length; c++) {
      const g = d[c];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        c || (s += "/"), s += g.value.replace(tC, "\\$&"), p += 40;
      else if (g.type === 1) {
        const { value: m, repeatable: h, optional: f, regexp: w } = g;
        a.push({
          name: m,
          repeatable: h,
          optional: f
        });
        const v = w || vd;
        if (v !== vd) {
          p += 10;
          try {
            new RegExp(`(${v})`);
          } catch (S) {
            throw new Error(`Invalid custom RegExp for param "${m}" (${v}): ` + S.message);
          }
        }
        let y = h ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        c || (y = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        f && d.length < 2 ? `(?:/${y})` : "/" + y), f && (y += "?"), s += y, p += 20, f && (p += -8), h && (p += -20), v === ".*" && (p += -50);
      }
      i.push(p);
    }
    o.push(i);
  }
  if (n.strict && n.end) {
    const d = o.length - 1;
    o[d][o[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
  const r = new RegExp(s, n.sensitive ? "" : "i");
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
          if (rt(w) && !h)
            throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const v = rt(w) ? w.join("/") : w;
          if (!v)
            if (f)
              g.length < 2 && (i.endsWith("/") ? i = i.slice(0, -1) : c = !0);
            else
              throw new Error(`Missing required param "${m}"`);
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
    stringify: u
  };
}
function oC(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function sC(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const a = oC(o[n], s[n]);
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
const aC = {
  type: 0,
  value: ""
}, iC = /[a-zA-Z0-9_]/;
function rC(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[aC]];
  if (!e.startsWith("/"))
    throw new Error({}.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${d}": ${p}`);
  }
  let n = 0, o = n;
  const s = [];
  let a;
  function r() {
    a && s.push(a), a = [];
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
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        u === "/" ? (d && c(), r()) : u === ":" ? (c(), n = 1) : g();
        break;
      case 4:
        g(), n = o;
        break;
      case 1:
        u === "(" ? n = 2 : iC.test(u) ? g() : (c(), n = 0, u !== "*" && u !== "?" && u !== "+" && l--);
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
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), c(), r(), s;
}
function lC(e, t, n) {
  const o = nC(rC(e.path), n);
  if ({}.NODE_ENV !== "production") {
    const a = /* @__PURE__ */ new Set();
    for (const r of o.keys)
      a.has(r.name) && X(`Found duplicated params with name "${r.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), a.add(r.name);
  }
  const s = Y(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function cC(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = xd({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(i) {
    return o.get(i);
  }
  function a(i, c, g) {
    const p = !g, m = uC(i);
    ({}).NODE_ENV !== "production" && mC(m, c), m.aliasOf = g && g.record;
    const h = xd(t, i), f = [
      m
    ];
    if ("alias" in i) {
      const y = typeof i.alias == "string" ? [i.alias] : i.alias;
      for (const S of y)
        f.push(Y({}, m, {
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
    let w, v;
    for (const y of f) {
      const { path: S } = y;
      if (c && S[0] !== "/") {
        const x = c.record.path, E = x[x.length - 1] === "/" ? "" : "/";
        y.path = c.record.path + (S && E + S);
      }
      if ({}.NODE_ENV !== "production" && y.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (w = lC(y, c, h), {}.NODE_ENV !== "production" && c && S[0] === "/" && hC(w, c), g ? (g.alias.push(w), {}.NODE_ENV !== "production" && pC(g, w)) : (v = v || w, v !== w && v.alias.push(w), p && i.name && !yd(w) && r(i.name)), m.children) {
        const x = m.children;
        for (let E = 0; E < x.length; E++)
          a(x[E], w, g && g.children[E]);
      }
      g = g || w, (w.record.components && Object.keys(w.record.components).length || w.record.name || w.record.redirect) && u(w);
    }
    return v ? () => {
      r(v);
    } : ta;
  }
  function r(i) {
    if (Kh(i)) {
      const c = o.get(i);
      c && (o.delete(i), n.splice(n.indexOf(c), 1), c.children.forEach(r), c.alias.forEach(r));
    } else {
      const c = n.indexOf(i);
      c > -1 && (n.splice(c, 1), i.record.name && o.delete(i.record.name), i.children.forEach(r), i.alias.forEach(r));
    }
  }
  function l() {
    return n;
  }
  function u(i) {
    let c = 0;
    for (; c < n.length && sC(i, n[c]) >= 0 && // Adding children with empty path should still appear before the parent
    // https://github.com/vuejs/router/issues/1124
    (i.record.path !== n[c].record.path || !Yh(i, n[c])); )
      c++;
    n.splice(c, 0, i), i.record.name && !yd(i) && o.set(i.record.name, i);
  }
  function d(i, c) {
    let g, p = {}, m, h;
    if ("name" in i && i.name) {
      if (g = o.get(i.name), !g)
        throw Oo(1, {
          location: i
        });
      if ({}.NODE_ENV !== "production") {
        const v = Object.keys(i.params || {}).filter((y) => !g.keys.find((S) => S.name === y));
        v.length && X(`Discarded invalid param(s) "${v.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      h = g.record.name, p = Y(
        // paramsFromLocation is a new object
        Sd(
          c.params,
          // only keep params that exist in the resolved location
          // TODO: only keep optional params coming from a parent record
          g.keys.filter((v) => !v.optional).map((v) => v.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        i.params && Sd(i.params, g.keys.map((v) => v.name))
      ), m = g.stringify(p);
    } else if ("path" in i)
      m = i.path, {}.NODE_ENV !== "production" && !m.startsWith("/") && X(`The Matcher cannot resolve relative paths but received "${m}". Unless you directly called \`matcher.resolve("${m}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), g = n.find((v) => v.re.test(m)), g && (p = g.parse(m), h = g.record.name);
    else {
      if (g = c.name ? o.get(c.name) : n.find((v) => v.re.test(c.path)), !g)
        throw Oo(1, {
          location: i,
          currentLocation: c
        });
      h = g.record.name, p = Y({}, c.params, i.params), m = g.stringify(p);
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
      meta: gC(f)
    };
  }
  return e.forEach((i) => a(i)), { addRoute: a, resolve: d, removeRoute: r, getRoutes: l, getRecordMatcher: s };
}
function Sd(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function uC(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: dC(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function dC(e) {
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
function gC(e) {
  return e.reduce((t, n) => Y(t, n.meta), {});
}
function xd(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function Cc(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function pC(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(Cc.bind(null, n)))
      return X(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(Cc.bind(null, n)))
      return X(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function mC(e, t) {
  t && t.record.name && !e.name && !e.path && X(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function hC(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(Cc.bind(null, n)))
      return X(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function Yh(e, t) {
  return t.children.some((n) => n === e || Yh(e, n));
}
const Qh = /#/g, fC = /&/g, wC = /\//g, vC = /=/g, _C = /\?/g, Jh = /\+/g, SC = /%5B/g, yC = /%5D/g, Zh = /%5E/g, xC = /%60/g, ef = /%7B/g, CC = /%7C/g, tf = /%7D/g, bC = /%20/g;
function eu(e) {
  return encodeURI("" + e).replace(CC, "|").replace(SC, "[").replace(yC, "]");
}
function kC(e) {
  return eu(e).replace(ef, "{").replace(tf, "}").replace(Zh, "^");
}
function bc(e) {
  return eu(e).replace(Jh, "%2B").replace(bC, "+").replace(Qh, "%23").replace(fC, "%26").replace(xC, "`").replace(ef, "{").replace(tf, "}").replace(Zh, "^");
}
function $C(e) {
  return bc(e).replace(vC, "%3D");
}
function VC(e) {
  return eu(e).replace(Qh, "%23").replace(_C, "%3F");
}
function EC(e) {
  return e == null ? "" : VC(e).replace(wC, "%2F");
}
function aa(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) {
    ({}).NODE_ENV !== "production" && X(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
function LC(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const a = o[s].replace(Jh, " "), r = a.indexOf("="), l = aa(r < 0 ? a : a.slice(0, r)), u = r < 0 ? null : aa(a.slice(r + 1));
    if (l in t) {
      let d = t[l];
      rt(d) || (d = t[l] = [d]), d.push(u);
    } else
      t[l] = u;
  }
  return t;
}
function Cd(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = $C(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (rt(o) ? o.map((a) => a && bc(a)) : [o && bc(o)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a));
    });
  }
  return t;
}
function AC(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = rt(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const DC = Symbol({}.NODE_ENV !== "production" ? "router view location matched" : ""), bd = Symbol({}.NODE_ENV !== "production" ? "router view depth" : ""), Xi = Symbol({}.NODE_ENV !== "production" ? "router" : ""), nf = Symbol({}.NODE_ENV !== "production" ? "route location" : ""), kc = Symbol({}.NODE_ENV !== "production" ? "router view location" : "");
function rs() {
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
  return () => new Promise((r, l) => {
    const u = (c) => {
      c === !1 ? l(Oo(4, {
        from: n,
        to: t
      })) : c instanceof Error ? l(c) : Yx(c) ? l(Oo(2, {
        from: t,
        to: c
      })) : (a && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === a && typeof c == "function" && a.push(c), r());
    }, d = e.call(o && o.instances[s], t, n, {}.NODE_ENV !== "production" ? TC(u, t, n) : u);
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
function TC(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && X(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function xr(e, t, n, o) {
  const s = [];
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
        if (BC(l)) {
          const d = (l.__vccOpts || l)[t];
          d && s.push(Nn(d, n, o, a, r));
        } else {
          let u = l();
          ({}).NODE_ENV !== "production" && !("catch" in u) && (X(`Component "${r}" in record with path "${a.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), u = Promise.resolve(u)), s.push(() => u.then((d) => {
            if (!d)
              return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${a.path}"`));
            const i = Tx(d) ? d.default : d;
            a.components[r] = i;
            const g = (i.__vccOpts || i)[t];
            return g && Nn(g, n, o, a, r)();
          }));
        }
    }
  }
  return s;
}
function BC(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function kd(e) {
  const t = zo(Xi), n = zo(nf), o = Xt(() => t.resolve(ea(e.to))), s = Xt(() => {
    const { matched: u } = o.value, { length: d } = u, i = u[d - 1], c = n.matched;
    if (!i || !c.length)
      return -1;
    const g = c.findIndex(In.bind(null, i));
    if (g > -1)
      return g;
    const p = $d(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      $d(i) === p && // avoid comparing the child with its parent
      c[c.length - 1].path !== p ? c.findIndex(In.bind(null, u[d - 2])) : g
    );
  }), a = Xt(() => s.value > -1 && NC(n.params, o.value.params)), r = Xt(() => s.value > -1 && s.value === n.matched.length - 1 && Xh(n.params, o.value.params));
  function l(u = {}) {
    return MC(u) ? t[ea(e.replace) ? "replace" : "push"](
      ea(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(ta) : Promise.resolve();
  }
  if ({}.NODE_ENV !== "production" && fn) {
    const u = jh();
    if (u) {
      const d = {
        route: o.value,
        isActive: a.value,
        isExactActive: r.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), $x(() => {
        d.route = o.value, d.isActive = a.value, d.isExactActive = r.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: Xt(() => o.value.href),
    isActive: a,
    isExactActive: r,
    navigate: l
  };
}
const PC = /* @__PURE__ */ Hh({
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
    const n = Vx(kd(e)), { options: o } = zo(Xi), s = Xt(() => ({
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
      return e.custom ? a : qh("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, a);
    };
  }
}), FC = PC;
function MC(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function NC(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!rt(s) || s.length !== o.length || o.some((a, r) => a !== s[r]))
      return !1;
  }
  return !0;
}
function $d(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Vd = (e, t, n) => e != null ? e : t != null ? t : n, UC = /* @__PURE__ */ Hh({
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
    ({}).NODE_ENV !== "production" && RC();
    const o = zo(kc), s = Xt(() => e.route || o.value), a = zo(bd, 0), r = Xt(() => {
      let d = ea(a);
      const { matched: i } = s.value;
      let c;
      for (; (c = i[d]) && !c.components; )
        d++;
      return d;
    }), l = Xt(() => s.value.matched[r.value]);
    _r(bd, Xt(() => r.value + 1)), _r(DC, l), _r(kc, s);
    const u = Ex();
    return Gh(() => [u.value, l.value, e.name], ([d, i, c], [g, p, m]) => {
      i && (i.instances[c] = d, p && p !== i && d && d === g && (i.leaveGuards.size || (i.leaveGuards = p.leaveGuards), i.updateGuards.size || (i.updateGuards = p.updateGuards))), d && i && // if there is no instance but to and from are the same this might be
      // the first visit
      (!p || !In(i, p) || !g) && (i.enterCallbacks[c] || []).forEach((h) => h(d));
    }, { flush: "post" }), () => {
      const d = s.value, i = e.name, c = l.value, g = c && c.components[i];
      if (!g)
        return Ed(n.default, { Component: g, route: d });
      const p = c.props[i], m = p ? p === !0 ? d.params : typeof p == "function" ? p(d) : p : null, f = qh(g, Y({}, m, t, {
        onVnodeUnmounted: (w) => {
          w.component.isUnmounted && (c.instances[i] = null);
        },
        ref: u
      }));
      if ({}.NODE_ENV !== "production" && fn && f.ref) {
        const w = {
          depth: r.value,
          name: c.name,
          path: c.path,
          meta: c.meta
        };
        (rt(f.ref) ? f.ref.map((y) => y.i) : [f.ref.i]).forEach((y) => {
          y.__vrv_devtools = w;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Ed(n.default, { Component: f, route: d }) || f
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
const IC = UC;
function RC() {
  const e = jh(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    X(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function ls(e, t) {
  const n = Y({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => KC(o, ["instances", "children", "aliasOf"]))
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
let zC = 0;
function OC(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = zC++;
  kx({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((i, c) => {
      i.instanceData && i.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: ls(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: i, componentInstance: c }) => {
      if (c.__vrv_devtools) {
        const g = c.__vrv_devtools;
        i.tags.push({
          label: (g.name ? `${g.name.toString()}: ` : "") + g.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: of
        });
      }
      rt(c.__vrl_devtools) && (c.__devtoolsApi = s, c.__vrl_devtools.forEach((g) => {
        let p = rf, m = "";
        g.isExactActive ? (p = af, m = "This is exactly active") : g.isActive && (p = sf, m = "This link is active"), i.tags.push({
          label: g.route.path,
          textColor: 0,
          tooltip: m,
          backgroundColor: p
        });
      }));
    }), Gh(t.currentRoute, () => {
      u(), s.notifyComponentUpdate(), s.sendInspectorTree(l), s.sendInspectorState(l);
    });
    const a = "router:navigations:" + o;
    s.addTimelineLayer({
      id: a,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((i, c) => {
      s.addTimelineEvent({
        layerId: a,
        event: {
          title: "Error during Navigation",
          subtitle: c.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: i },
          groupId: c.meta.__navigationId
        }
      });
    });
    let r = 0;
    t.beforeEach((i, c) => {
      const g = {
        guard: Da("beforeEach"),
        from: ls(c, "Current Location during this navigation"),
        to: ls(i, "Target location")
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
    }), t.afterEach((i, c, g) => {
      const p = {
        guard: Da("afterEach")
      };
      g ? (p.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: g ? g.message : "",
          tooltip: "Navigation Failure",
          value: g
        }
      }, p.status = Da("❌")) : p.status = Da("✅"), p.from = ls(c, "Current Location during this navigation"), p.to = ls(i, "Target location"), s.addTimelineEvent({
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
    function u() {
      if (!d)
        return;
      const i = d;
      let c = n.getRoutes().filter((g) => !g.parent);
      c.forEach(uf), i.filter && (c = c.filter((g) => (
        // save matches state based on the payload
        $c(g, i.filter.toLowerCase())
      ))), c.forEach((g) => cf(g, t.currentRoute.value)), i.rootNodes = c.map(lf);
    }
    let d;
    s.on.getInspectorTree((i) => {
      d = i, i.app === e && i.inspectorId === l && u();
    }), s.on.getInspectorState((i) => {
      if (i.app === e && i.inspectorId === l) {
        const g = n.getRoutes().find((p) => p.record.__vd_id === i.nodeId);
        g && (i.state = {
          options: HC(g)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function jC(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function HC(e) {
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
        display: e.keys.map((o) => `${o.name}${jC(o)}`).join(" "),
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
const of = 15485081, sf = 2450411, af = 8702998, qC = 2282478, rf = 16486972, GC = 6710886;
function lf(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: qC
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: rf
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: of
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: af
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: sf
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: GC
  });
  let o = n.__vd_id;
  return o == null && (o = String(XC++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(lf)
  };
}
let XC = 0;
const WC = /^\/(.*)\/([a-z]*)$/;
function cf(e, t) {
  const n = t.matched.length && In(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => In(o, e.record))), e.children.forEach((o) => cf(o, t));
}
function uf(e) {
  e.__vd_match = !1, e.children.forEach(uf);
}
function $c(e, t) {
  const n = String(e.re).match(WC);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((r) => $c(r, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), a = aa(s);
  return !t.startsWith("/") && (a.includes(t) || s.includes(t)) || a.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((r) => $c(r, t));
}
function KC(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function YC(e) {
  const t = cC(e.routes, e), n = e.parseQuery || LC, o = e.stringifyQuery || Cd, s = e.history;
  if ({}.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const a = rs(), r = rs(), l = rs(), u = Lx(yn);
  let d = yn;
  fn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const i = Sr.bind(null, (_) => "" + _), c = Sr.bind(null, EC), g = (
    // @ts-expect-error: intentionally avoid the type check
    Sr.bind(null, aa)
  );
  function p(_, V) {
    let D, P;
    return Kh(_) ? (D = t.getRecordMatcher(_), P = V) : P = _, t.addRoute(P, D);
  }
  function m(_) {
    const V = t.getRecordMatcher(_);
    V ? t.removeRoute(V) : {}.NODE_ENV !== "production" && X(`Cannot remove non-existent route "${String(_)}"`);
  }
  function h() {
    return t.getRoutes().map((_) => _.record);
  }
  function f(_) {
    return !!t.getRecordMatcher(_);
  }
  function w(_, V) {
    if (V = Y({}, V || u.value), typeof _ == "string") {
      const j = yr(n, _, V.path), ne = t.resolve({ path: j.path }, V), Ie = s.createHref(j.fullPath);
      return {}.NODE_ENV !== "production" && (Ie.startsWith("//") ? X(`Location "${_}" resolved to "${Ie}". A resolved location cannot start with multiple slashes.`) : ne.matched.length || X(`No match found for location with path "${_}"`)), Y(j, ne, {
        params: g(ne.params),
        hash: aa(j.hash),
        redirectedFrom: void 0,
        href: Ie
      });
    }
    let D;
    if ("path" in _)
      ({}).NODE_ENV !== "production" && "params" in _ && !("name" in _) && // @ts-expect-error: the type is never
      Object.keys(_.params).length && X(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), D = Y({}, _, {
        path: yr(n, _.path, V.path).path
      });
    else {
      const j = Y({}, _.params);
      for (const ne in j)
        j[ne] == null && delete j[ne];
      D = Y({}, _, {
        params: c(j)
      }), V.params = c(V.params);
    }
    const P = t.resolve(D, V), G = _.hash || "";
    ({}).NODE_ENV !== "production" && G && !G.startsWith("#") && X(`A \`hash\` should always start with the character "#". Replace "${G}" with "#${G}".`), P.params = i(g(P.params));
    const se = Fx(o, Y({}, _, {
      hash: kC(G),
      path: P.path
    })), O = s.createHref(se);
    return {}.NODE_ENV !== "production" && (O.startsWith("//") ? X(`Location "${_}" resolved to "${O}". A resolved location cannot start with multiple slashes.`) : P.matched.length || X(`No match found for location with path "${"path" in _ ? _.path : _}"`)), Y({
      fullPath: se,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: G,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Cd ? AC(_.query) : _.query || {}
      )
    }, P, {
      redirectedFrom: void 0,
      href: O
    });
  }
  function v(_) {
    return typeof _ == "string" ? yr(n, _, u.value.path) : Y({}, _);
  }
  function y(_, V) {
    if (d !== _)
      return Oo(8, {
        from: V,
        to: _
      });
  }
  function S(_) {
    return C(_);
  }
  function x(_) {
    return S(Y(v(_), { replace: !0 }));
  }
  function E(_) {
    const V = _.matched[_.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: D } = V;
      let P = typeof D == "function" ? D(_) : D;
      if (typeof P == "string" && (P = P.includes("?") || P.includes("#") ? P = v(P) : (
        // force empty params
        { path: P }
      ), P.params = {}), {}.NODE_ENV !== "production" && !("path" in P) && !("name" in P))
        throw X(`Invalid redirect found:
${JSON.stringify(P, null, 2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Y({
        query: _.query,
        hash: _.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in P ? {} : _.params
      }, P);
    }
  }
  function C(_, V) {
    const D = d = w(_), P = u.value, G = _.state, se = _.force, O = _.replace === !0, j = E(D);
    if (j)
      return C(
        Y(v(j), {
          state: typeof j == "object" ? Y({}, G, j.state) : G,
          force: se,
          replace: O
        }),
        // keep original redirectedFrom if it exists
        V || D
      );
    const ne = D;
    ne.redirectedFrom = V;
    let Ie;
    return !se && pd(o, P, D) && (Ie = Oo(16, { to: ne, from: P }), Ue(
      P,
      P,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (Ie ? Promise.resolve(Ie) : T(ne, P)).catch((pe) => Zt(pe) ? (
      // navigation redirects still mark the router as ready
      Zt(
        pe,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? pe : Te(pe)
    ) : (
      // reject any unknown error
      he(pe, ne, P)
    )).then((pe) => {
      if (pe) {
        if (Zt(
          pe,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return {}.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          pd(o, w(pe.to), ne) && // and we have done it a couple of times
          V && // @ts-expect-error: added only in dev
          (V._count = V._count ? (
            // @ts-expect-error
            V._count + 1
          ) : 1) > 30 ? (X(`Detected a possibly infinite redirection in a navigation guard when going from "${P.fullPath}" to "${ne.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : C(
            // keep options
            Y({
              // preserve an existing replacement but allow the redirect to override it
              replace: O
            }, v(pe.to), {
              state: typeof pe.to == "object" ? Y({}, G, pe.to.state) : G,
              force: se
            }),
            // preserve the original redirectedFrom if any
            V || ne
          );
      } else
        pe = K(ne, P, !0, O, G);
      return R(ne, P, pe), pe;
    });
  }
  function N(_, V) {
    const D = y(_, V);
    return D ? Promise.reject(D) : Promise.resolve();
  }
  function L(_) {
    const V = q.values().next().value;
    return V && typeof V.runWithContext == "function" ? V.runWithContext(_) : _();
  }
  function T(_, V) {
    let D;
    const [P, G, se] = QC(_, V);
    D = xr(P.reverse(), "beforeRouteLeave", _, V);
    for (const j of P)
      j.leaveGuards.forEach((ne) => {
        D.push(Nn(ne, _, V));
      });
    const O = N.bind(null, _, V);
    return D.push(O), I(D).then(() => {
      D = [];
      for (const j of a.list())
        D.push(Nn(j, _, V));
      return D.push(O), I(D);
    }).then(() => {
      D = xr(G, "beforeRouteUpdate", _, V);
      for (const j of G)
        j.updateGuards.forEach((ne) => {
          D.push(Nn(ne, _, V));
        });
      return D.push(O), I(D);
    }).then(() => {
      D = [];
      for (const j of se)
        if (j.beforeEnter)
          if (rt(j.beforeEnter))
            for (const ne of j.beforeEnter)
              D.push(Nn(ne, _, V));
          else
            D.push(Nn(j.beforeEnter, _, V));
      return D.push(O), I(D);
    }).then(() => (_.matched.forEach((j) => j.enterCallbacks = {}), D = xr(se, "beforeRouteEnter", _, V), D.push(O), I(D))).then(() => {
      D = [];
      for (const j of r.list())
        D.push(Nn(j, _, V));
      return D.push(O), I(D);
    }).catch((j) => Zt(
      j,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? j : Promise.reject(j));
  }
  function R(_, V, D) {
    l.list().forEach((P) => L(() => P(_, V, D)));
  }
  function K(_, V, D, P, G) {
    const se = y(_, V);
    if (se)
      return se;
    const O = V === yn, j = fn ? history.state : {};
    D && (P || O ? s.replace(_.fullPath, Y({
      scroll: O && j && j.scroll
    }, G)) : s.push(_.fullPath, G)), u.value = _, Ue(_, V, D, O), Te();
  }
  let W;
  function ke() {
    W || (W = s.listen((_, V, D) => {
      if (!M.listening)
        return;
      const P = w(_), G = E(P);
      if (G) {
        C(Y(G, { replace: !0 }), P).catch(ta);
        return;
      }
      d = P;
      const se = u.value;
      fn && jx(hd(se.fullPath, D.delta), Gi()), T(P, se).catch((O) => Zt(
        O,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? O : Zt(
        O,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (C(
        O.to,
        P
        // avoid an uncaught rejection, let push call triggerError
      ).then((j) => {
        Zt(
          j,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !D.delta && D.type === sa.pop && s.go(-1, !1);
      }).catch(ta), Promise.reject()) : (D.delta && s.go(-D.delta, !1), he(O, P, se))).then((O) => {
        O = O || K(
          // after navigation, all matched components are resolved
          P,
          se,
          !1
        ), O && (D.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Zt(
          O,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-D.delta, !1) : D.type === sa.pop && Zt(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), R(P, se, O);
      }).catch(ta);
    }));
  }
  let ue = rs(), ct = rs(), De;
  function he(_, V, D) {
    Te(_);
    const P = ct.list();
    return P.length ? P.forEach((G) => G(_, V, D)) : ({}.NODE_ENV !== "production" && X("uncaught error during route navigation:"), console.error(_)), Promise.reject(_);
  }
  function xe() {
    return De && u.value !== yn ? Promise.resolve() : new Promise((_, V) => {
      ue.add([_, V]);
    });
  }
  function Te(_) {
    return De || (De = !_, ke(), ue.list().forEach(([V, D]) => _ ? D(_) : V()), ue.reset()), _;
  }
  function Ue(_, V, D, P) {
    const { scrollBehavior: G } = e;
    if (!fn || !G)
      return Promise.resolve();
    const se = !D && Hx(hd(_.fullPath, 0)) || (P || !D) && history.state && history.state.scroll || null;
    return Dx().then(() => G(_, V, se)).then((O) => O && Ox(O)).catch((O) => he(O, _, V));
  }
  const J = (_) => s.go(_);
  let U;
  const q = /* @__PURE__ */ new Set(), M = {
    currentRoute: u,
    listening: !0,
    addRoute: p,
    removeRoute: m,
    hasRoute: f,
    getRoutes: h,
    resolve: w,
    options: e,
    push: S,
    replace: x,
    go: J,
    back: () => J(-1),
    forward: () => J(1),
    beforeEach: a.add,
    beforeResolve: r.add,
    afterEach: l.add,
    onError: ct.add,
    isReady: xe,
    install(_) {
      const V = this;
      _.component("RouterLink", FC), _.component("RouterView", IC), _.config.globalProperties.$router = V, Object.defineProperty(_.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => ea(u)
      }), fn && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !U && u.value === yn && (U = !0, S(s.location).catch((G) => {
        ({}).NODE_ENV !== "production" && X("Unexpected error when starting the router:", G);
      }));
      const D = {};
      for (const G in yn)
        Object.defineProperty(D, G, {
          get: () => u.value[G],
          enumerable: !0
        });
      _.provide(Xi, V), _.provide(nf, Ax(D)), _.provide(kc, u);
      const P = _.unmount;
      q.add(_), _.unmount = function() {
        q.delete(_), q.size < 1 && (d = yn, W && W(), W = null, u.value = yn, U = !1, De = !1), P();
      }, {}.NODE_ENV !== "production" && fn && OC(_, V, t);
    }
  };
  function I(_) {
    return _.reduce((V, D) => V.then(() => L(D)), Promise.resolve());
  }
  return M;
}
function QC(e, t) {
  const n = [], o = [], s = [], a = Math.max(t.matched.length, e.matched.length);
  for (let r = 0; r < a; r++) {
    const l = t.matched[r];
    l && (e.matched.find((d) => In(d, l)) ? o.push(l) : n.push(l));
    const u = e.matched[r];
    u && (t.matched.find((d) => In(d, u)) || s.push(u));
  }
  return [n, o, s];
}
function qe() {
  return zo(Xi);
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
const JC = (e) => {
  const t = parseInt(e.slice(0, 4)), n = e.slice(4, 6) - 1, o = parseInt(e.slice(6, 8)), s = parseInt(e.slice(8, 10)), a = parseInt(e.slice(10, 12)), r = parseInt(e.slice(12, 14)), l = new Date(Date.UTC(t, n, o, s, a, r)), d = (/* @__PURE__ */ new Date()).getTime() - l.getTime();
  return Math.round(d / (1e3 * 3600 * 24));
}, ZC = (e) => {
  const t = JC(e);
  if (t < 30)
    return { postfix: "days", value: t };
  {
    const n = Math.round(t / 30);
    return n < 12 ? { postfix: "months", value: n } : { postfix: "years", value: Math.round(n / 12) };
  }
};
const yt = window.Vue.unref, uo = window.Vue.createVNode, en = window.Vue.createElementVNode, Ld = window.Vue.renderSlot, Ad = window.Vue.withModifiers, Cr = window.Vue.toDisplayString, br = window.Vue.withCtx, eb = window.Vue.openBlock, tb = window.Vue.createElementBlock, nb = window.Vue.createCommentVNode, ob = { class: "col shrink pe-4" }, sb = { class: "col" }, ab = { class: "cx-translation__details column justify-between ma-0" }, ib = { class: "row ma-0" }, rb = { class: "col grow" }, lb = { class: "col shrink ps-2" }, cb = ["dir", "textContent"], ub = ["dir", "textContent"], db = ["textContent"], gb = window.Vuex.useStore, pb = window.Vue.computed, df = {
  __name: "CXTranslationWork",
  props: {
    translation: {
      type: Tc,
      required: !0
    },
    actionIcon: {
      type: String,
      default: null
    }
  },
  emits: ["click", "action-icon-clicked"],
  setup(e, { emit: t }) {
    const n = e, o = gb(), s = (l, u) => {
      const d = o.getters["mediawiki/getPage"](l, u);
      return d == null ? void 0 : d.thumbnail;
    }, a = ce(), r = pb(() => {
      const l = {
        days: "cx-sx-translation-work-days-since-started",
        months: "cx-sx-translation-work-months-since-started",
        years: "cx-sx-translation-work-years-since-started"
      }, u = ZC(n.translation.startTimestamp);
      return a.i18n(
        l[u.postfix],
        u.value
      );
    });
    return (l, u) => e.translation ? (eb(), tb("div", {
      key: 0,
      class: "row cx-translation pa-4 ma-0",
      onClick: u[1] || (u[1] = Ad((d) => l.$emit("click"), ["stop"]))
    }, [
      en("div", ob, [
        uo(yt(Dc), {
          class: "cx-translation__thumbnail",
          thumbnail: s(e.translation.sourceLanguage, e.translation.sourceTitle)
        }, null, 8, ["thumbnail"])
      ]),
      en("div", sb, [
        en("div", ab, [
          en("div", ib, [
            en("div", rb, [
              Ld(l.$slots, "title")
            ]),
            en("div", lb, [
              uo(yt(je), {
                class: "cx-translation__action-icon",
                icon: e.actionIcon,
                onClick: u[0] || (u[0] = Ad((d) => l.$emit("action-icon-clicked"), ["stop"]))
              }, null, 8, ["icon"])
            ])
          ]),
          Ld(l.$slots, "mid-content"),
          uo(yt(F), { class: "cx-translation__footer ma-0" }, {
            default: br(() => [
              uo(yt(k), {
                class: "cx-translation__languages",
                grow: ""
              }, {
                default: br(() => [
                  en("span", {
                    class: "mw-ui-autonym",
                    dir: yt(z.getDir)(e.translation.sourceLanguage),
                    textContent: Cr(yt(z.getAutonym)(e.translation.sourceLanguage))
                  }, null, 8, cb),
                  uo(yt(je), {
                    icon: yt($0),
                    class: "mx-1",
                    size: 14
                  }, null, 8, ["icon"]),
                  en("span", {
                    class: "mw-ui-autonym ma-0",
                    dir: yt(z.getDir)(e.translation.targetLanguage),
                    textContent: Cr(yt(z.getAutonym)(e.translation.targetLanguage))
                  }, null, 8, ub)
                ]),
                _: 1
              }),
              uo(yt(k), {
                class: "cx-translation__days-since-started",
                shrink: ""
              }, {
                default: br(() => [
                  en("span", {
                    textContent: Cr(r.value)
                  }, null, 8, db)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ])) : nb("", !0);
  }
};
const cs = window.Vue.unref, Dd = window.Vue.toDisplayString, mb = window.Vue.normalizeClass, hb = window.Vue.createElementVNode, kr = window.Vue.openBlock, fb = window.Vue.createElementBlock, Td = window.Vue.createCommentVNode, Bd = window.Vue.createVNode, Ta = window.Vue.withCtx, Pd = window.Vue.createBlock, wb = ["lang", "textContent"], vb = ["lang", "textContent"], _b = window.Vue.computed, Sb = window.Vue.inject, yb = {
  __name: "CXTranslationWorkDraft",
  props: {
    translation: {
      type: Ui,
      required: !0
    }
  },
  emits: ["delete-translation"],
  setup(e) {
    const t = e, o = Sb("colors").gray200, s = _b(
      () => {
        var u;
        return ((u = t.translation.progress) == null ? void 0 : u.any) * 100 || 0;
      }
    ), a = qe(), { setTranslationURLParams: r } = B(), l = () => {
      r(t.translation), a.push({ name: "sx-translation-confirmer" });
    };
    return (u, d) => (kr(), Pd(df, {
      class: "cx-translation--draft",
      translation: e.translation,
      "action-icon": cs(Qm),
      onActionIconClicked: d[0] || (d[0] = (i) => u.$emit("delete-translation")),
      onClick: l
    }, {
      title: Ta(() => [
        hb("h5", {
          class: mb(["cx-translation__source-page-title", {
            "cx-translation__primary-title": e.translation.isLeadSectionTranslation
          }]),
          lang: e.translation.sourceLanguage,
          textContent: Dd(e.translation.sourceTitle)
        }, null, 10, wb),
        e.translation.isLeadSectionTranslation ? Td("", !0) : (kr(), fb("h6", {
          key: 0,
          class: "cx-translation__source-section-title cx-translation__primary-title",
          lang: e.translation.sourceLanguage,
          textContent: Dd(e.translation.sourceSectionTitle)
        }, null, 8, vb))
      ]),
      "mid-content": Ta(() => [
        e.translation.progress ? (kr(), Pd(cs(F), {
          key: 0,
          class: "ma-0 py-2"
        }, {
          default: Ta(() => [
            Bd(cs(k), null, {
              default: Ta(() => [
                Bd(cs(th), {
                  class: "cx-translation__progress-bar",
                  value: s.value,
                  height: "4px",
                  width: "64px",
                  background: cs(o)
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
}, xb = window.Vuex.useStore, gf = [], Cb = (e, t, n) => gf.some(
  (o) => o.sourceLanguage === e && o.targetLanguage === t && o.sourceTitle === n
), bb = (e, t, n) => {
  const o = { sourceLanguage: e, targetLanguage: t, sourceTitle: n };
  gf.push(o);
}, kb = () => {
  const e = xb();
  return (t, n, o) => b(void 0, null, function* () {
    let s = e.getters["suggestions/getSectionSuggestionsForArticle"](t, n, o);
    return !s && !Cb(t, n, o) && (s = yield ie.fetchSectionSuggestion(
      t,
      o,
      n
    ), bb(t, n, o), s && (s.isListable = !1, e.commit("suggestions/addSectionSuggestion", s))), s;
  });
}, pf = "cx-translation-session-position-", mf = () => pf + mw.user.sessionId(), $b = () => {
  const e = parseInt(
    mw.storage.get(mf())
  );
  return isNaN(e) ? 0 : e;
}, Vb = function(e) {
  const t = mf();
  mw.storage.set(t, e);
}, Eb = () => {
  Object.keys(mw.storage.store).filter((e) => e.startsWith(pf)).forEach((e) => mw.storage.remove(e));
}, Lb = () => {
  const e = $b();
  return e % 10 === 0 && Eb(), Vb(e + 1), e;
};
let Vc = null;
function Ab(e) {
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
function Db(e) {
  return e === null ? null : e === 0 ? "0 edits" : e < 5 ? "1-4 edits" : e < 100 ? "5-99 edits" : e < 1e3 ? "100-999 edits" : "1000+ edits";
}
function Tb(e) {
  if (!mw.eventLog)
    return mw.log({ event: e }), Promise.resolve();
  const t = mw.user.sessionId(), n = mw.config.get("wgDBname"), o = `cx_sx_${t}_${e.access_method}_${n}`, s = "mediawiki.content_translation_event", a = mw.user.isAnon(), r = mw.user.getName(), l = {
    $schema: "/analytics/mediawiki/content_translation_event/1.11.0",
    wiki_db: n,
    user_name: r,
    web_session_id: t,
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: a,
    content_translation_session_id: o,
    content_translation_session_position: Lb()
  };
  return a ? Promise.resolve(
    mw.eventLog.submit(s, Object.assign({}, l, e))
  ) : Ab(r).then((u) => {
    Vc = u, mw.eventLog.submit(
      s,
      Object.assign({}, l, e, {
        user_global_edit_count: u,
        user_global_edit_count_bucket: Db(u)
      })
    );
  });
}
const St = () => (e) => (e.access_method || (e.access_method = Ho ? "desktop" : "mobile web"), Tb(e)), hf = window.Vue.ref, ff = hf(null), Ec = hf(null), Bb = (e) => {
  ff.value = e;
}, Pb = (e) => {
  Ec.value = e;
}, Wi = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o
  } = B(), s = St();
  return {
    logDashboardTranslationStartEvent: () => {
      const r = {
        event_type: "dashboard_translation_start",
        event_source: ff.value,
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
    setStartTranslationEventSource: Bb,
    setStartTranslationEventContext: Pb
  };
}, ma = () => {
  const e = qe(), t = Fh(), { setTranslationURLParams: n } = B(), { setStartTranslationEventSource: o, setStartTranslationEventContext: s } = Wi();
  return (a, r, l, u, d = null, i = !0) => b(void 0, null, function* () {
    const c = yield t(
      r,
      l,
      a
    );
    c && (n(c), o(u), s(d), i && e.push({
      name: "sx-translation-confirmer"
    }));
  });
};
const Ba = window.Vue.withModifiers, $r = window.Vue.toDisplayString, Vr = window.Vue.createElementVNode, ut = window.Vue.unref, Pa = window.Vue.openBlock, Fd = window.Vue.createBlock;
window.Vue.createCommentVNode;
const xn = window.Vue.createVNode, jn = window.Vue.withCtx, Md = window.Vue.createElementBlock, Fb = ["lang", "href", "textContent"], Mb = {
  key: 1,
  class: "flex"
}, Nb = { key: 2 }, Nd = window.Vue.computed, Ud = window.Vue.ref, Er = window.Codex.CdxButton, Lr = window.Codex.CdxIcon, Ub = {
  __name: "CXTranslationWorkPublished",
  props: {
    translation: {
      type: Zc,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Ud(!0), o = Ud(null), s = Nd(() => {
      var c;
      return (c = o.value) == null ? void 0 : c.missingSections;
    }), a = Nd(
      () => s.value && Object.keys(s.value)[0]
    );
    kb()(
      t.translation.sourceLanguage,
      t.translation.targetLanguage,
      t.translation.sourceTitle
    ).then((c) => o.value = c).catch((c) => console.log(c)).finally(() => n.value = !1);
    const { setSectionURLParam: l } = B(), u = () => {
      window.open(t.translation.targetUrl, "_blank");
    }, d = ma(), i = (c) => {
      d(
        t.translation.sourceTitle,
        t.translation.sourceLanguage,
        t.translation.targetLanguage,
        "continue_published"
      ), c && l(c);
    };
    return (c, g) => (Pa(), Fd(df, {
      class: "cx-published-translation",
      translation: e.translation,
      onClick: u
    }, {
      title: jn(() => [
        Vr("a", {
          class: "cx-published-translation__source-page-title",
          lang: e.translation.sourceLanguage,
          href: e.translation.targetUrl,
          target: "_blank",
          onClick: g[0] || (g[0] = Ba(() => {
          }, ["stop"])),
          textContent: $r(e.translation.sourceTitle)
        }, null, 8, Fb)
      ]),
      "mid-content": jn(() => [
        xn(ut(F), { class: "ma-0" }, {
          default: jn(() => [
            xn(ut(k), null, {
              default: jn(() => [
                n.value ? (Pa(), Fd(ut(it), { key: 0 })) : s.value ? (Pa(), Md("div", Mb, [
                  xn(ut(Er), {
                    class: "cx-published-translation__start-new-translation-button flex items-center px-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: g[1] || (g[1] = Ba((p) => i(a.value), ["stop"]))
                  }, {
                    default: jn(() => [
                      xn(ut(Lr), {
                        class: "me-1",
                        icon: ut(wc)
                      }, null, 8, ["icon"]),
                      Vr("span", null, $r(a.value), 1)
                    ]),
                    _: 1
                  }),
                  xn(ut(Er), {
                    class: "cx-published-translation__start-new-translation-button pa-0 ms-4",
                    weight: "quiet",
                    action: "progressive",
                    "aria-label": c.$i18n(
                      "sx-published-translation-start-section-translation-button-aria-label"
                    ),
                    onClick: g[2] || (g[2] = Ba((p) => i(null), ["stop"]))
                  }, {
                    default: jn(() => [
                      xn(ut(Lr), { icon: ut(Wc) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ])) : (Pa(), Md("div", Nb, [
                  xn(ut(Er), {
                    class: "cx-published-translation__start-new-translation-button flex items-center pa-0",
                    weight: "quiet",
                    action: "progressive",
                    onClick: g[3] || (g[3] = Ba((p) => i(null), ["stop"]))
                  }, {
                    default: jn(() => [
                      xn(ut(Lr), {
                        class: "me-1",
                        icon: ut(wc)
                      }, null, 8, ["icon"]),
                      Vr("span", null, $r(c.$i18n("sx-published-translation-new-translation-button-label")), 1)
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
}, Ib = window.Vuex.useStore, Rb = () => {
  const { commit: e } = Ib(), t = St();
  return (n) => b(void 0, null, function* () {
    n.isArticleTranslation ? (yield vt.deleteCXTranslation(
      n
    )) && e("translator/removeCXTranslation", n.translationId) : (yield vt.deleteTranslation(
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
const zb = window.Vue.resolveDirective, Ar = window.Vue.createElementVNode, Ob = window.Vue.withDirectives, Dr = window.Vue.unref, Id = window.Vue.createVNode, Rd = window.Vue.withCtx, jb = window.Vue.openBlock, Hb = window.Vue.createBlock, qb = { class: "pa-4" }, Gb = { class: "flex justify-end sx-confirm-delete-dialog__footer pt-2" }, Xb = {
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
    const n = e, o = t, s = () => o("update:modelValue", !1), a = Rb(), r = () => {
      a(n.translation), s();
    };
    return (l, u) => {
      const d = zb("i18n");
      return jb(), Hb(Dr(_t), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog",
        header: !1,
        "min-height": "unset"
      }, {
        footer: Rd(() => [
          Ar("div", Gb, [
            Id(Dr(Me), {
              class: "grow py-3",
              large: "",
              label: l.$i18n("sx-translation-deletion-cancel-button-label"),
              onClick: s
            }, null, 8, ["label"]),
            Id(Dr(Me), {
              class: "grow py-3",
              large: "",
              destructive: "",
              label: l.$i18n("sx-translation-deletion-confirm-button-label"),
              onClick: r
            }, null, 8, ["label"])
          ])
        ]),
        default: Rd(() => [
          Ar("div", qb, [
            Ob(Ar("span", null, null, 512), [
              [d, void 0, "sx-confirm-translation-deletion-dialog-body"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
};
function Wb(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e : n ? (yield Kb(t, n)).filter((s) => e.includes(s)) : [];
  });
}
function zd(e, t, n) {
  return b(this, null, function* () {
    return !t || t.trim().length === 0 ? e.sort(z.sortByAutonym) : (yield Wb(e, t, n)).sort(z.sortByAutonym);
  });
}
function Kb(e, t) {
  const n = new URL(t);
  return n.searchParams.set("search", e), fetch(n.toString()).then((o) => o.json()).then((o) => Object.keys(o.languagesearch || {}));
}
function Yb() {
  const e = new URL("https://en.wikipedia.org/w/api.php");
  return e.searchParams.set("action", "languagesearch"), e.searchParams.set("format", "json"), e.searchParams.set("origin", "*"), e.searchParams.set("formatversion", 2), e.toString();
}
function Qb(e) {
  let t, n = [...e];
  const o = e.length;
  o < 10 && (t = o), o < 30 && (t = 10), o >= 30 && (t = 15);
  const s = [];
  for (; n.length; )
    s.push(n.splice(0, t));
  return s;
}
const Jb = window.Vue.computed;
function Zb(e, t) {
  const n = Jb(() => {
    if (!t.value.length || !e.value.trim())
      return "";
    for (let s = 0; s < t.value.length; s++) {
      const a = z.getAutonym(t.value[s]);
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
const Tr = window.Vue.ref, Br = window.Vue.watch, ek = window.Vue.computed;
function wf(e, t, n) {
  const o = Tr(""), s = Tr(-1), a = Tr(null), r = () => {
    s.value++, s.value >= l.value.length && (s.value = 0);
  }, l = ek(() => e.value ? t.value : n && n.value ? [...n.value, ...t.value] : []), u = () => {
    s.value--, s.value < 0 && (s.value = 0);
  };
  return Br(e, () => {
    s.value = -1;
  }), Br(t, () => {
    t.value && l.value.length > 0 && (s.value = 0);
  }), Br(s, () => b(this, null, function* () {
    var d;
    if (s.value < 0) {
      o.value = "";
      return;
    }
    o.value = l.value[s.value], (d = a.value.querySelectorAll(`.language[lang="${o.value}"]`)[0]) == null || d.scrollIntoView(!1);
  })), { next: r, prev: u, keyboardNavigationContainer: a, selectedItem: o };
}
function tu(e, t, n) {
  let o;
  const s = (...a) => {
    const r = this, l = () => {
      o = null, n || e.apply(r, a);
    };
    n && !o && e.apply(r, a), (!o || t) && (clearTimeout(o), o = setTimeout(l, t));
  };
  return s.cancel = () => clearTimeout(o), s;
}
const Fa = window.Vue.renderSlot, $e = window.Vue.unref, tk = window.Vue.isRef, Od = window.Vue.createVNode, us = window.Vue.withModifiers, ds = window.Vue.withKeys, Cn = window.Vue.createElementVNode, nk = window.Vue.resolveDirective, Ma = window.Vue.withDirectives, Pr = window.Vue.renderList, Fr = window.Vue.Fragment, tn = window.Vue.openBlock, nn = window.Vue.createElementBlock, jd = window.Vue.toDisplayString, Na = window.Vue.normalizeClass, Mr = window.Vue.createCommentVNode, ok = { class: "mw-ui-language-selector__inputcontainer pa-4 mb-4" }, sk = { class: "mw-ui-language-selector__resultscontainer pa-0 ma-0" }, ak = { class: "results px-3 pt-4" }, ik = { class: "results-header ps-8 pb-2" }, rk = { class: "results-languages--suggestions pa-0 ma-0" }, lk = ["lang", "dir", "aria-selected", "onClick", "textContent"], ck = { class: "results px-3 pt-4" }, uk = {
  key: 0,
  class: "results-header ps-8 pb-2"
}, dk = ["lang", "dir", "aria-selected", "onClick", "textContent"], gk = ["aria-selected"], pk = { class: "no-results px-3 py-4" }, mk = { class: "ps-8" }, Ua = window.Vue.ref, hk = window.Vue.watch, fk = window.Vue.onMounted, Hd = window.Vue.computed, vf = {
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
      default: Yb
    }
  },
  emits: ["select", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Ua(null), a = Ua(""), r = Ua([]), l = Ua(n.suggestions), u = Hd(
      () => Qb(r.value)
    ), d = Hd(() => {
      const S = r.value.length;
      return S < 10 ? "few-results" : S < 30 ? "some-results" : "many-results";
    }), i = (S) => o("select", S), c = () => o("close"), { autocompletion: g, onTabSelect: p } = Zb(
      a,
      r
    ), { next: m, prev: h, keyboardNavigationContainer: f, selectedItem: w } = wf(a, r, l), v = () => {
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
    return hk(a, tu(() => b(this, null, function* () {
      r.value = yield zd(
        n.languages,
        a.value,
        n.searchAPI
      );
    }), 300)), fk(() => b(this, null, function* () {
      n.autofocus && setTimeout(() => s.value.focus(), 500), r.value = yield zd(
        n.languages,
        "",
        n.searchAPI
      );
    })), (S, x) => {
      const E = nk("i18n");
      return tn(), nn("div", {
        ref_key: "keyboardNavigationContainer",
        ref: f,
        class: "mw-ui-language-selector"
      }, [
        Fa(S.$slots, "search", {}, () => [
          Cn("div", ok, [
            Od($e(fc), {
              value: $e(g),
              "onUpdate:value": x[0] || (x[0] = (C) => tk(g) ? g.value = C : null),
              icon: $e(ku),
              "icon-size": 20,
              class: "mw-ui-language-selector__autocomplete pa-4",
              disabled: ""
            }, null, 8, ["value", "icon"]),
            Od($e(fc), {
              ref_key: "searchInputElement",
              ref: s,
              value: a.value,
              "onUpdate:value": x[1] || (x[1] = (C) => a.value = C),
              class: "mw-ui-language-selector__search pa-4",
              icon: $e(ku),
              "icon-size": 20,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              onKeydown: [
                ds(us(v, ["prevent"]), ["enter"]),
                ds(us($e(m), ["stop", "prevent"]), ["down"]),
                ds(us($e(h), ["stop", "prevent"]), ["up"]),
                ds(us(c, ["prevent"]), ["esc"]),
                ds(us($e(p), ["prevent"]), ["tab"])
              ]
            }, null, 8, ["value", "icon", "placeholder", "autofocus", "onKeydown"])
          ])
        ]),
        Cn("section", sk, [
          e.suggestions.length && !a.value ? Fa(S.$slots, "suggestions", { key: 0 }, () => [
            Cn("section", ak, [
              Ma(Cn("p", ik, null, 512), [
                [E, void 0, "cx-sx-language-selector-suggestions"]
              ]),
              Cn("ul", rk, [
                (tn(!0), nn(Fr, null, Pr(e.suggestions, (C) => (tn(), nn("li", {
                  key: C,
                  class: Na(["language ma-0", { "language--selected": C === $e(w) }]),
                  lang: C,
                  dir: $e(z.getDir)(C),
                  "aria-selected": C === $e(w) || null,
                  tabindex: "-1",
                  role: "option",
                  onClick: (N) => i(C),
                  textContent: jd($e(z.getAutonym)(C))
                }, null, 10, lk))), 128))
              ])
            ])
          ]) : Mr("", !0),
          u.value.length ? Fa(S.$slots, "search", { key: 1 }, () => [
            Cn("section", ck, [
              e.suggestions.length && !a.value ? Ma((tn(), nn("p", uk, null, 512)), [
                [E, void 0, "cx-sx-language-selector-all-languages"]
              ]) : Mr("", !0),
              (tn(!0), nn(Fr, null, Pr(u.value, (C, N) => (tn(), nn("ul", {
                key: N,
                class: Na(["results-languages pa-0 ma-0 mb-6", d.value])
              }, [
                (tn(!0), nn(Fr, null, Pr(C, (L) => (tn(), nn("li", {
                  key: L,
                  class: Na(["language ma-0", { "language--selected": L === $e(w) }]),
                  lang: L,
                  dir: $e(z.getDir)(L),
                  role: "option",
                  "aria-selected": L === $e(w) || null,
                  tabindex: "-1",
                  onClick: (T) => i(L),
                  textContent: jd($e(z.getAutonym)(L))
                }, null, 10, dk))), 128)),
                e.allOptionEnabled && !a.value ? Ma((tn(), nn("li", {
                  key: 0,
                  class: Na(["language ma-0", { "language--selected": $e(w) === "all" }]),
                  role: "option",
                  "aria-selected": $e(w) === "all" || null,
                  tabindex: "-1",
                  onClick: x[2] || (x[2] = (L) => i("all"))
                }, null, 10, gk)), [
                  [E, void 0, "cx-translation-list-all-languages-option-label"]
                ]) : Mr("", !0)
              ], 2))), 128))
            ])
          ]) : Fa(S.$slots, "noresults", { key: 2 }, () => [
            Cn("section", pk, [
              Ma(Cn("h3", mk, null, 512), [
                [E, void 0, "cx-sx-language-selector-no-search-results"]
              ])
            ])
          ])
        ])
      ], 512);
    };
  }
};
const wk = window.Vue.resolveDirective, qd = window.Vue.withDirectives, gs = window.Vue.openBlock, ps = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const Ve = window.Vue.unref, Gd = window.Vue.toDisplayString, xt = window.Vue.createVNode, Xd = window.Vue.withModifiers, Hn = window.Vue.withCtx, vk = window.Vue.normalizeClass, _k = {
  key: 0,
  class: "mw-ui-autonym"
}, Sk = ["lang", "dir", "textContent"], yk = {
  key: 0,
  class: "mw-ui-autonym"
}, xk = ["lang", "dir", "textContent"], ms = window.Vue.computed, Ck = window.Vue.inject, bk = window.Vue.ref, Wd = window.Codex.CdxButton, Nr = window.Codex.CdxIcon, Fi = {
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
    const n = e, o = t, s = Ck("breakpoints"), a = ms(() => s.value.mobile), r = bk(null), l = ms(() => !!r.value), u = () => r.value = "source", d = () => r.value = "target", i = () => r.value = null, c = ms(() => {
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
    }, p = ms(
      () => n.selectedSourceLanguage === "all"
    ), m = ms(
      () => n.selectedTargetLanguage === "all"
    );
    return (h, f) => {
      const w = wk("i18n");
      return gs(), ps("div", {
        class: vk(["sx-translation-list-language-selector py-1", { "sx-translation-list-language-selector--mobile": a.value }])
      }, [
        xt(Ve(F), {
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
                    p.value ? qd((gs(), ps("span", _k, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (gs(), ps("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedSourceLanguage,
                      dir: Ve(z.getDir)(e.selectedSourceLanguage),
                      textContent: Gd(Ve(z.getAutonym)(e.selectedSourceLanguage))
                    }, null, 8, Sk)),
                    xt(Ve(Nr), {
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
                xt(Ve(Nr), { icon: Ve(Vh) }, null, 8, ["icon"])
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
                  onClick: Xd(d, ["stop"])
                }, {
                  default: Hn(() => [
                    m.value ? qd((gs(), ps("span", yk, null, 512)), [
                      [w, void 0, "cx-translation-list-all-languages-option-label"]
                    ]) : (gs(), ps("span", {
                      key: 1,
                      class: "mw-ui-autonym",
                      lang: e.selectedTargetLanguage,
                      dir: Ve(z.getDir)(e.selectedTargetLanguage),
                      textContent: Gd(Ve(z.getAutonym)(e.selectedTargetLanguage))
                    }, null, 8, xk)),
                    xt(Ve(Nr), {
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
        xt(Ve(_t), {
          value: l.value,
          "onUpdate:value": f[0] || (f[0] = (v) => l.value = v),
          title: h.$i18n("sx-translation-list-language-selector-dialog-title"),
          fullscreen: a.value,
          header: a.value,
          "overlay-mode": "dark",
          onClose: i
        }, {
          default: Hn(() => [
            xt(Ve(vf), {
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
const Kd = window.Vue.unref, kk = window.Vue.createVNode, Ia = window.Vue.createElementVNode, Yd = window.Vue.toDisplayString, $k = window.Vue.openBlock, Vk = window.Vue.createElementBlock, Ek = { class: "cx-list-empty-placeholder pa-4" }, Lk = { class: "cx-list-empty-placeholder__icon-container" }, Ak = { class: "cx-list-empty-placeholder__icon" }, Dk = ["textContent"], Tk = ["textContent"], Bk = window.Codex.CdxIcon, _f = {
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
    return (t, n) => ($k(), Vk("div", Ek, [
      Ia("div", Lk, [
        Ia("div", Ak, [
          kk(Kd(Bk), { icon: Kd(Dh) }, null, 8, ["icon"])
        ])
      ]),
      Ia("p", {
        class: "cx-list-empty-placeholder__title mt-5",
        textContent: Yd(e.title)
      }, null, 8, Dk),
      Ia("p", {
        class: "cx-list-empty-placeholder__description mt-2",
        textContent: Yd(e.description)
      }, null, 8, Tk)
    ]));
  }
}, Pk = window.Vuex.useStore, Fk = window.Vue.ref, Ra = Fk({ draft: !1, published: !1 }), Ko = () => {
  const e = Pk(), t = Go(), n = (s) => b(void 0, null, function* () {
    let a = yield vt.fetchTranslations(s);
    e.commit("translator/clearTranslationsByStatus", s), a.forEach(
      (l) => e.commit("translator/addTranslation", l)
    );
    const r = {};
    for (const l of a) {
      const u = l.sourceLanguage;
      r[u] = r[u] || [], r[u].push(l);
    }
    Ra.value[s] = !0;
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
          new qo({ title: c, pagelanguage: i })
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
const Mk = window.Vue.toDisplayString, Ur = window.Vue.normalizeClass, Qd = window.Vue.createElementVNode, Nt = window.Vue.openBlock, go = window.Vue.createBlock, za = window.Vue.createCommentVNode, Jd = window.Vue.unref, Zd = window.Vue.renderList, eg = window.Vue.Fragment, Oa = window.Vue.createElementBlock, Nk = window.Vue.createVNode, tg = window.Vue.withCtx, Uk = ["textContent"], Ik = {
  key: 2,
  class: "cx-translation-list-wrapper"
}, Rk = {
  key: 3,
  class: "cx-translation-list-wrapper"
}, ja = window.Vue.ref, Ct = window.Vue.computed, zk = window.Vue.inject, Ok = window.Vuex.useStore, ng = {
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
    const t = e, n = ja("all"), o = ja("all"), s = Ok(), { translationsFetched: a } = Ko(), r = Ct(
      () => a.value[t.translationStatus]
    ), l = ja(!1), u = ja(null), d = Ct(
      () => t.translationStatus === "draft"
    ), i = Ct(
      () => s.getters["translator/getTranslationsByStatus"](t.translationStatus)
    ), c = Ct(
      () => n.value === "all"
    ), g = Ct(
      () => o.value === "all"
    ), p = Ct(
      () => i.value.filter(
        (x) => (c.value || x.sourceLanguage === n.value) && (g.value || x.targetLanguage === o.value)
      ).sort((x, E) => x.lastUpdatedTimestamp < E.lastUpdatedTimestamp)
    ), m = Ct(() => {
      const x = i.value.map(
        (E) => E.targetLanguage
      );
      return [...new Set(x)];
    }), h = Ct(() => {
      const x = i.value.map(
        (E) => E.sourceLanguage
      );
      return [...new Set(x)];
    }), f = (x) => {
      u.value = x, l.value = !0;
    }, w = Ct(() => t.activeStatus === t.translationStatus), v = zk("breakpoints"), y = Ct(() => v.value.mobile), S = Ct(
      () => y.value ? "pt-3" : "pb-2 flex justify-between items-center"
    );
    return (x, E) => w.value ? (Nt(), go(Jd(Ye), {
      key: 0,
      class: Ur(["px-0", `cx-translation-list--${e.translationStatus}`])
    }, {
      header: tg(() => [
        Qd("div", {
          class: Ur(["cx-translation-list__header", S.value])
        }, [
          Qd("h3", {
            class: Ur(["px-4 mw-ui-card__title mb-0", { "pb-4": y.value }]),
            textContent: Mk(x.$i18n(`cx-translation-label-${e.translationStatus}`))
          }, null, 10, Uk),
          p.value.length ? (Nt(), go(Fi, {
            key: 0,
            "selected-source-language": n.value,
            "onUpdate:selectedSourceLanguage": E[0] || (E[0] = (C) => n.value = C),
            "selected-target-language": o.value,
            "onUpdate:selectedTargetLanguage": E[1] || (E[1] = (C) => o.value = C),
            "source-languages": h.value,
            "target-languages": m.value,
            "all-option-enabled": ""
          }, null, 8, ["selected-source-language", "selected-target-language", "source-languages", "target-languages"])) : za("", !0)
        ], 2)
      ]),
      default: tg(() => [
        r.value && !p.value.length ? (Nt(), go(_f, {
          key: 0,
          title: x.$i18n("cx-sx-translation-list-empty-title"),
          description: x.$i18n("cx-sx-translation-list-empty-description")
        }, null, 8, ["title", "description"])) : za("", !0),
        r.value ? za("", !0) : (Nt(), go(Jd(it), { key: 1 })),
        d.value ? (Nt(), Oa("div", Ik, [
          (Nt(!0), Oa(eg, null, Zd(p.value, (C) => (Nt(), go(yb, {
            key: `${e.translationStatus}-${C.key}`,
            translation: C,
            onDeleteTranslation: (N) => f(C)
          }, null, 8, ["translation", "onDeleteTranslation"]))), 128))
        ])) : (Nt(), Oa("div", Rk, [
          (Nt(!0), Oa(eg, null, Zd(p.value, (C) => (Nt(), go(Ub, {
            key: `${e.translationStatus}-${C.key}`,
            translation: C
          }, null, 8, ["translation"]))), 128))
        ])),
        Nk(Xb, {
          modelValue: l.value,
          "onUpdate:modelValue": E[2] || (E[2] = (C) => l.value = C),
          translation: u.value
        }, null, 8, ["modelValue", "translation"])
      ]),
      _: 1
    }, 8, ["class"])) : za("", !0);
  }
}, jk = (e, t) => b(void 0, null, function* () {
  const n = e.language, o = e.title, s = e.articleSize, r = (yield ie.fetchArticleSections(
    n,
    o
  )).sections.filter(
    (u) => u.level === "2"
  ), l = r.reduce(
    (u, d, i, c) => {
      const g = i < c.length - 1 ? c[i + 1].byteoffset : s;
      return u[d.line] = g - d.byteoffset, u;
    },
    { [Uo.LEAD_SECTION_DUMMY_TITLE]: r[0].byteoffset }
  );
  return t.length === 1 ? l[t[0]] : Object.keys(l).filter((u) => t.includes(u)).reduce((u, d) => u + l[d], 0);
}), Sf = (e) => {
  const s = e / 5 / 200;
  return Math.ceil(s);
}, Hk = (e, t = []) => {
  const n = e >= 60 ? e / 60 : 0, o = Math.round(n * 2) / 2;
  let s;
  if (t.length) {
    if (t.length === 1)
      return s = t[0] === Uo.LEAD_SECTION_DUMMY_TITLE ? "cx-sx-translation-confirmer-translation-time-lead-section" : "cx-sx-translation-confirmer-translation-time-single-section", [s, o, e];
  } else
    return s = "cx-sx-translation-confirmer-translation-time-whole-article", [s, o, e];
  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    o,
    e,
    t.length
  ];
}, yf = (e) => Sf(e) < 15;
const Ir = window.Vue.toDisplayString, Rr = window.Vue.unref, hs = window.Vue.openBlock, zr = window.Vue.createBlock, og = window.Vue.createCommentVNode, qk = window.Vue.createTextVNode, Gk = window.Vue.Fragment, sg = window.Vue.createElementBlock, Lc = window.Vue.createElementVNode, Xk = window.Vue.withKeys, Wk = window.Vue.withCtx, Kk = {
  key: 1,
  class: "cdx-info-chip__text custom-info-chip__with-slash"
}, Yk = { class: "cdx-info-chip__text custom-info-chip__with-slash__first" }, Qk = /* @__PURE__ */ Lc("span", null, "/", -1), Jk = { class: "cdx-info-chip__text custom-info-chip__with-slash__second" }, ag = window.Codex.CdxIcon, Zk = window.Codex.CdxInfoChip, Ha = window.Vue.computed, so = {
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
      () => t.expanded ? YS : vc
    );
    return (r, l) => (hs(), zr(Rr(Zk), {
      icon: e.icon,
      class: "custom-info-chip",
      tabindex: "0",
      onKeyup: l[0] || (l[0] = Xk((u) => r.$emit("click"), ["enter"]))
    }, {
      default: Wk(() => [
        n.value === -1 ? (hs(), sg(Gk, { key: 0 }, [
          qk(Ir(e.content) + " ", 1),
          e.expandable ? (hs(), zr(Rr(ag), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : og("", !0)
        ], 64)) : (hs(), sg("div", Kk, [
          Lc("span", Yk, Ir(o.value), 1),
          Qk,
          Lc("span", Jk, Ir(s.value), 1),
          e.expandable ? (hs(), zr(Rr(ag), {
            key: 0,
            icon: a.value
          }, null, 8, ["icon"])) : og("", !0)
        ]))
      ]),
      _: 1
    }, 8, ["icon"]));
  }
};
const re = window.Vue.unref, bt = window.Vue.createVNode, bn = window.Vue.createElementVNode, qa = window.Vue.toDisplayString, dt = window.Vue.withCtx, e8 = window.Vue.resolveDirective, Or = window.Vue.withDirectives, qn = window.Vue.openBlock, po = window.Vue.createBlock, mo = window.Vue.createCommentVNode, ig = window.Vue.withModifiers, t8 = window.Vue.createElementBlock, n8 = {
  key: 0,
  class: "row cx-suggestion pa-4 ma-0"
}, o8 = { class: "col shrink pe-4" }, s8 = ["lang", "dir", "textContent"], a8 = ["lang", "dir", "textContent"], i8 = ["textContent"], r8 = ["textContent"], jr = window.Codex.CdxIcon, kt = window.Vue.computed, l8 = window.Vue.inject, c8 = window.Vuex.useStore, Ac = {
  __name: "CXTranslationSuggestion",
  props: {
    suggestion: {
      type: [ro, Un, Io],
      required: !0
    }
  },
  emits: ["close", "bookmark"],
  setup(e) {
    const t = e, n = c8(), o = kt(() => t.suggestion), s = kt(
      () => o.value.sourceTitle || o.value.title
    ), a = kt(
      () => n.getters["mediawiki/getPage"](
        o.value.sourceLanguage,
        s.value
      )
    ), r = kt(
      () => {
        var w;
        return (w = o.value) == null ? void 0 : w.missingSectionsCount;
      }
    ), l = kt(() => {
      var w;
      return (w = a.value) == null ? void 0 : w.description;
    }), u = kt(
      () => o.value instanceof Un
    ), d = kt(
      () => o.value instanceof Io
    ), { sourceLanguageAutonym: i, targetLanguageAutonym: c } = Ae(n), g = kt(
      () => d.value ? Lh : Ah
    ), p = l8("colors"), m = kt(
      () => d.value ? p.blue600 : "currentColor"
    ), h = kt(
      () => {
        var w;
        return yf((w = a.value) == null ? void 0 : w.articleSize);
      }
    ), f = kt(
      () => o.value instanceof yh || o.value instanceof xh
    );
    return (w, v) => {
      const y = e8("i18n");
      return o.value ? (qn(), t8("div", n8, [
        bn("div", o8, [
          bt(re(Dc), {
            class: "cx-suggestion__thumbnail",
            thumbnail: a.value && a.value.thumbnail
          }, null, 8, ["thumbnail"])
        ]),
        bt(re(F), {
          class: "col cx-suggestion__information-panel ma-0",
          align: "start"
        }, {
          default: dt(() => [
            bt(re(F), {
              direction: "column",
              class: "ma-0 col cx-suggestion__information-panel__main-body pe-2",
              align: "start"
            }, {
              default: dt(() => [
                bt(re(k), {
                  shrink: "",
                  class: "mb-2"
                }, {
                  default: dt(() => [
                    bn("h5", {
                      class: "my-0 cx-suggestion__source-title",
                      lang: o.value.sourceLanguage,
                      dir: re(z.getDir)(o.value.sourceLanguage),
                      textContent: qa(s.value)
                    }, null, 8, s8)
                  ]),
                  _: 1
                }),
                bt(re(k), { shrink: "" }, {
                  default: dt(() => [
                    bn("p", {
                      class: "ma-0 cx-suggestion__source-description",
                      lang: o.value.sourceLanguage,
                      dir: re(z.getDir)(o.value.sourceLanguage),
                      textContent: qa(l.value)
                    }, null, 8, a8)
                  ]),
                  _: 1
                }),
                h.value && !u.value && !f.value ? (qn(), po(re(k), {
                  key: 0,
                  shrink: "",
                  class: "cx-suggestion__information-panel__quick-translation mt-auto"
                }, {
                  default: dt(() => [
                    Or(bn("small", null, null, 512), [
                      [y, void 0, "cx-sx-translation-suggestion-quick"]
                    ])
                  ]),
                  _: 1
                })) : mo("", !0),
                u.value ? (qn(), po(re(k), {
                  key: 1,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__missing-sections",
                  shrink: ""
                }, {
                  default: dt(() => [
                    Or(bn("small", null, null, 512), [
                      [y, [r.value], "cx-sx-translation-suggestion-info"]
                    ])
                  ]),
                  _: 1
                })) : d.value ? (qn(), po(re(k), {
                  key: 2,
                  class: "cx-suggestion__information-panel__bottom cx-suggestion__language-pair",
                  shrink: ""
                }, {
                  default: dt(() => [
                    bt(re(F), {
                      justify: "between",
                      class: "ma-0"
                    }, {
                      default: dt(() => [
                        bt(re(k), { grow: "" }, {
                          default: dt(() => [
                            bn("small", {
                              textContent: qa(re(i))
                            }, null, 8, i8),
                            bt(re(jr), {
                              icon: re(Vh),
                              size: "small",
                              class: "mx-1"
                            }, null, 8, ["icon"]),
                            bn("small", {
                              textContent: qa(re(c))
                            }, null, 8, r8)
                          ]),
                          _: 1
                        }),
                        r.value ? (qn(), po(re(k), {
                          key: 0,
                          shrink: "",
                          class: "cx-suggestion__favorite-missing-sections"
                        }, {
                          default: dt(() => [
                            Or(bn("small", null, null, 512), [
                              [y, [
                                r.value
                              ], "cx-sx-translation-suggestion-info"]
                            ])
                          ]),
                          _: 1
                        })) : mo("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : mo("", !0),
                f.value ? (qn(), po(re(k), {
                  key: 3,
                  shrink: "",
                  class: "cx-suggestion__information-panel__collection mt-auto"
                }, {
                  default: dt(() => [
                    bt(so, {
                      icon: re(Gc),
                      content: o.value.collection.name
                    }, null, 8, ["icon", "content"])
                  ]),
                  _: 1
                })) : mo("", !0)
              ]),
              _: 1
            }),
            bt(re(k), { shrink: "" }, {
              default: dt(() => [
                d.value ? mo("", !0) : (qn(), po(re(jr), {
                  key: 0,
                  icon: re(Wo),
                  class: "cx-suggestion__discard-button mb-4",
                  onClick: v[0] || (v[0] = ig((S) => w.$emit("close"), ["stop"]))
                }, null, 8, ["icon"])),
                bt(re(jr), {
                  class: "cx-suggestion__favorite-button",
                  icon: g.value,
                  "icon-color": m.value,
                  onClick: v[1] || (v[1] = ig((S) => w.$emit("bookmark"), ["stop"]))
                }, null, 8, ["icon", "icon-color"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : mo("", !0);
    };
  }
};
const Hr = window.Vue.normalizeClass, rg = window.Vue.createVNode, u8 = window.Vue.renderList, lg = window.Vue.Fragment, fs = window.Vue.openBlock, Ga = window.Vue.createElementBlock, d8 = window.Vue.createBlock, g8 = window.Vue.toDisplayString, p8 = window.Vue.withKeys, cg = window.Vue.createCommentVNode, m8 = {
  key: 0,
  class: "sx-suggestions-filters__filter__expanded-filters"
}, Xa = window.Vue.computed, h8 = {
  __name: "SuggestionFilterChip",
  props: {
    filter: {
      type: Pt,
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
      (c) => n.isSelected(c)
    ) : !1 : !1), s = t, a = () => {
      s("filter-selected", n.filter);
    }, r = Xa(() => n.filter.chipLabel), l = (c) => {
      const { label: g } = c, p = n.filter.label;
      return g.startsWith(`${p}/`) ? g.replace(`${p}/`, "") : g;
    }, u = Xa(() => n.subFilterLimit > 0 ? n.filter.subFilters.slice(0, n.subFilterLimit) : n.filter.subFilters), d = Xa(
      () => n.viewMoreConfig && n.subFilterLimit > 0 && n.filter.subFilters.length > n.subFilterLimit && o.value
    ), i = () => {
      n.viewMoreConfig && n.viewMoreConfig.onClick && n.viewMoreConfig.onClick();
    };
    return (c, g) => (fs(), Ga(lg, null, [
      rg(so, {
        class: Hr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
          "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
        }]),
        icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
        content: r.value,
        expandable: !!e.filter.expandable,
        onClick: a
      }, null, 8, ["class", "icon", "content", "expandable"]),
      o.value ? (fs(), Ga("div", m8, [
        rg(so, {
          class: Hr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(e.filter)
          }]),
          icon: e.filter.expandable ? e.filter.expandableIcon : e.filter.icon,
          content: c.$i18n("cx-sx-suggestions-filter-collection-group-all-option-label"),
          onClick: g[0] || (g[0] = (p) => c.$emit("filter-selected", e.filter))
        }, null, 8, ["class", "icon", "content"]),
        (fs(!0), Ga(lg, null, u8(u.value, (p) => (fs(), d8(so, {
          key: p.id,
          class: Hr(["sx-suggestions-filters__filter my-1 mx-1 py-1", {
            "sx-suggestions-filters__filter--active": e.isSelected(p)
          }]),
          content: l(p),
          icon: p.icon,
          onClick: (m) => c.$emit("filter-selected", p)
        }, null, 8, ["class", "content", "icon", "onClick"]))), 128)),
        d.value ? (fs(), Ga("div", {
          key: 0,
          class: "sx-suggestions-filters__view-more-link",
          tabindex: "0",
          onClick: i,
          onKeyup: p8(i, ["enter"])
        }, g8(e.viewMoreConfig.label), 33)) : cg("", !0)
      ])) : cg("", !0)
    ], 64));
  }
};
const f8 = window.Vue.toDisplayString, ug = window.Vue.createElementVNode, w8 = window.Vue.renderList, dg = window.Vue.Fragment, qr = window.Vue.openBlock, gg = window.Vue.createElementBlock, v8 = window.Vue.createBlock, _8 = { class: "sx-suggestions-filters__group-label mb-3" }, S8 = { class: "sx-suggestions-filters__group-filters mb-3" }, y8 = {
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
    return (o, s) => (qr(), gg(dg, null, [
      ug("div", _8, f8(e.filterGroup.label), 1),
      ug("div", S8, [
        (qr(!0), gg(dg, null, w8(n(), (a) => (qr(), v8(h8, {
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
}, x8 = window.Vue.computed, pg = window.Vue.ref, mg = window.Vue.watch, nu = (e, t) => {
  const o = pg([]), s = pg(!1), a = x8(
    () => o.value.slice(0, 4)
  ), r = tu(() => b(void 0, null, function* () {
    if (!t.value) {
      s.value = !1;
      return;
    }
    try {
      o.value = yield io.searchPagesByTitlePrefix(
        t.value,
        e.value
      );
    } finally {
      s.value = !1;
    }
  }), 500), l = () => {
    s.value = !0, o.value = [], r();
  };
  return mg(t, l), mg(e, l), {
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
    icon: l = null,
    showThumbnail: u = !1
  }) {
    this.label = t, this.value = n + "-" + s, this.description = o, this.thumbnail = r, this.filterType = s, this.filterId = a, this.icon = l, this.showThumbnail = u;
  }
}
const Gr = window.Vue.ref, hg = window.Vue.watch, fg = window.Vue.computed, { topics: C8, regions: b8 } = mw.loader.require(
  "ext.cx.articlefilters"
), k8 = C8.flatMap(
  (e) => e.topics.map((t) => Qe(ae({}, t), {
    groupId: e.groupId
  }))
), $8 = () => {
  const e = Gr(""), t = Gr("all"), n = Gr({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: []
  }), o = ce(), { pageCollectionGroups: s } = qc(), { sourceLanguageURLParameter: a } = B(), r = (p) => (p = p.toLowerCase(), k8.filter(
    (m) => m.label.toLowerCase().includes(p)
  )), l = (p) => (p = p.toLowerCase(), Object.values(s.value).flat().filter(
    (h) => h.name.toLowerCase().includes(p)
  )), u = (p) => (p = p.toLowerCase(), b8.flatMap((m) => [m, ...m.countries]).filter(
    (m) => m.label.toLowerCase().includes(p)
  ).map((m) => ({
    label: m.label,
    id: m.id
  }))), d = fg(
    () => t.value === "all" ? e.value : ""
  ), { searchResultsSlice: i, searchResultsLoading: c } = nu(
    a,
    d
  );
  hg(i, () => {
    n.value.topics = i.value.map(
      (p) => {
        var m;
        return new Wa({
          label: p.title,
          value: p.title,
          description: p.description,
          thumbnail: { url: (m = p.thumbnail) == null ? void 0 : m.source },
          filterType: wt,
          filterId: p.title,
          showThumbnail: !0
        });
      }
    );
  }), hg([e, t], () => b(void 0, null, function* () {
    n.value.topic_areas = r(e.value).map(
      (p) => new Wa({
        label: p.label,
        value: p.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-topics-default-description" : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: t.value === "all" ? _c : null,
        filterType: He,
        filterId: p.topicId
      })
    ), n.value.collections = l(
      e.value
    ).map(
      (p) => new Wa({
        label: p.name,
        value: p.name,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-collections-default-description" : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
          p.articlesCount
        ),
        icon: t.value === "all" ? Gc : null,
        filterType: Z,
        filterId: p.name
      })
    ), n.value.regions = u(e.value).map(
      (p) => new Wa({
        label: p.label,
        value: p.label,
        description: o.i18n(
          t.value === "all" ? "cx-sx-suggestions-filter-search-results-regions-default-description" : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
        ),
        icon: t.value === "all" ? _c : null,
        filterType: be,
        filterId: p.id
      })
    );
  }));
  const g = fg(() => {
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
}, V8 = "suggestion_filter_topic_area", E8 = "suggestion_filter_search_result_seed", L8 = "suggestion_filter_collections", A8 = "suggestion_filter_previous_edits", D8 = "suggestion_filter_popular_articles", T8 = "suggestion_filter_region", Xr = (e) => {
  if (e.type === He || e.type === be || e.type === Z || e.type === wt)
    return e.id;
  if (e.id === Z)
    return "all-collections";
}, Wr = (e) => {
  if (e.type === He)
    return V8;
  if (e.type === be)
    return T8;
  if (e.type === wt)
    return E8;
  if (e.id === Z || e.type === Z)
    return L8;
  if (e.id === Kt)
    return A8;
  if (e.id === wn)
    return D8;
}, xf = () => {
  const e = St();
  return {
    logSuggestionFiltersClose: () => e({ event_type: "suggestion_filters_close" }),
    logSuggestionFiltersConfirm: (r) => e({
      event_type: "suggestion_filters_confirm",
      event_subtype: "suggestion_filters_single_select_confirm",
      event_source: Wr(r),
      event_context: Xr(r)
    }),
    logSuggestionFiltersSelect: (r) => e({
      event_type: "suggestion_filters_select",
      event_subtype: "suggestion_filters_single_select",
      event_source: Wr(r),
      event_context: Xr(r)
    }),
    logSuggestionFiltersQuickSelect: (r) => e({
      event_type: "dashboard_suggestion_filters_quick_select",
      event_source: Wr(r),
      event_context: Xr(r)
    }),
    logSuggestionFiltersViewMore: () => e({ event_type: "dashboard_suggestion_filters_view_more" })
  };
};
const we = window.Vue.unref, gt = window.Vue.createVNode, $t = window.Vue.withCtx, B8 = window.Vue.resolveDirective, Ut = window.Vue.createElementVNode, ho = window.Vue.withDirectives, wg = window.Vue.toDisplayString, P8 = window.Vue.createTextVNode, F8 = window.Vue.vShow, vg = window.Vue.renderList, _g = window.Vue.Fragment, on = window.Vue.openBlock, Gn = window.Vue.createElementBlock, Sg = window.Vue.isRef, M8 = window.Vue.withKeys, yg = window.Vue.createCommentVNode, xg = window.Vue.createBlock, N8 = { class: "sx-suggestions-filters" }, U8 = { class: "mb-0" }, I8 = { class: "sx-suggestions-filters__active-filters px-4 py-3" }, R8 = { class: "mb-3" }, z8 = { class: "px-4 pb-4 pt-7" }, O8 = {
  key: 0,
  class: "sx-suggestions-filters__filter-options pt-3 px-4"
}, j8 = ["onKeyup", "onClick"], H8 = {
  key: 1,
  class: "sx-suggestions-filters__search-results px-4 pt-3"
}, q8 = { class: "sx-suggestions-filters__search-results-pending" }, G8 = {
  key: 0,
  class: "sx-suggestions-filters__search-results-empty"
}, X8 = { class: "sx-suggestions-filters__search-results-empty-primary" }, W8 = { class: "sx-suggestions-filters__search-results-empty-secondary" }, Ka = window.Vue.ref, fo = window.Vue.computed, K8 = window.Vue.inject, Y8 = window.Vue.watch, Cg = window.Codex.CdxButton, Q8 = window.Codex.CdxIcon, J8 = window.Codex.CdxTextInput, Z8 = window.Codex.CdxMenu, e2 = window.Codex.CdxTabs, t2 = window.Codex.CdxTab, n2 = {
  __name: "SXSuggestionsFiltersDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = ce(), o = t, s = fo(() => [
      {
        name: "all",
        label: n.i18n("cx-sx-suggestions-filters-tab-all"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder"
        ),
        filterGroups: g([
          Ke,
          Z,
          be,
          He
        ])
      },
      {
        name: "collections",
        label: n.i18n("cx-sx-suggestions-filters-tab-collections"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-collections"
        ),
        filterGroups: g([Z])
      },
      {
        name: "geography",
        label: n.i18n("cx-sx-suggestions-filters-tab-regions"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-regions"
        ),
        filterGroups: g([be])
      },
      {
        name: "topics",
        label: n.i18n("cx-sx-suggestions-filters-tab-topics"),
        searchPlaceholder: n.i18n(
          "cx-sx-suggestions-filter-search-input-placeholder-topics"
        ),
        filterGroups: g([He])
      }
    ]), a = (U) => R.value = U, r = (U, q) => q === "all" && U.type === be ? {
      limit: 7,
      viewMoreConfig: {
        label: n.i18n(
          "cx-sx-suggestions-filters-view-more-countries",
          U.label
        ),
        onClick: () => a("geography")
      }
    } : { limit: 0 }, l = (U, q) => {
      if (U !== "all")
        return !1;
      if (q === Z) {
        const M = g([Z]);
        return M.length && M[0].filters.length > 6;
      }
      return q === be;
    }, { allFilters: u, isFilterSelected: d, selectFilter: i, findSelectedFilter: c } = Hi(), g = (U) => U.flatMap((q) => u.value.filter((M) => M.type === q)).filter(Boolean), p = () => {
      x(), o("update:modelValue", !1);
    }, {
      logSuggestionFiltersClose: m,
      logSuggestionFiltersConfirm: h,
      logSuggestionFiltersSelect: f
    } = xf(), w = () => {
      m(), p();
    }, v = () => {
      S.value && (h(S.value), i(S.value)), p();
    }, y = Ka(!1), S = Ka(null), x = () => {
      S.value = null, y.value = !1;
    }, E = (U) => {
      f(U), S.value = U, y.value = !0;
    }, C = (U) => S.value ? S.value.id === U.id && S.value.type === U.type : d(U), N = K8("breakpoints"), L = fo(() => N.value.mobile), { searchInput: T, searchScope: R, searchResults: K, searchResultsLoading: W } = $8(), ke = fo(
      () => S.value || c()
    ), ue = Ka(null);
    Y8(ue, () => {
      if (!ue.value)
        return;
      const U = De.value.find(
        (q) => q.value === ue.value
      );
      E({
        type: U.filterType,
        id: U.filterId,
        label: U.label
      }), T.value = "";
    });
    const ct = {
      [Z]: "cx-sx-suggestions-filters-view-all-collections-group",
      [be]: "cx-sx-suggestions-filters-view-all-regions-group"
    }, De = fo(
      () => K.value.flatMap((U) => U.items)
    ), he = Ka({}), xe = fo(
      () => he.value[R.value]
    ), Te = fo(() => {
      var q;
      const U = (q = xe.value) == null ? void 0 : q.getHighlightedMenuItem();
      return U == null ? void 0 : U.id;
    }), Ue = (U) => {
      U.key !== " " && xe.value && xe.value.delegateKeyNavigation(U);
    }, J = (U, q) => {
      he.value[q] = U;
    };
    return (U, q) => {
      const M = B8("i18n");
      return on(), xg(we(_t), {
        class: "sx-suggestions-filters-dialog",
        value: e.modelValue,
        fullscreen: L.value,
        header: !1
      }, {
        default: $t(() => [
          Ut("section", N8, [
            gt(we(F), {
              class: "sx-suggestions-filters__header ma-0 py-3 px-4",
              align: "stretch",
              justify: "start"
            }, {
              default: $t(() => [
                gt(we(k), {
                  shrink: "",
                  align: "start",
                  class: "pe-4"
                }, {
                  default: $t(() => [
                    gt(we(Cg), {
                      class: "pa-0",
                      weight: "quiet",
                      "aria-label": U.$i18n("cx-sx-suggestions-filters-close-button-aria-label"),
                      onClick: w
                    }, {
                      default: $t(() => [
                        gt(we(Q8), { icon: we(Wo) }, null, 8, ["icon"])
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  _: 1
                }),
                gt(we(k), {
                  grow: "",
                  align: "center"
                }, {
                  default: $t(() => [
                    ho(Ut("h5", U8, null, 512), [
                      [M, void 0, "cx-sx-suggestions-filters-header"]
                    ])
                  ]),
                  _: 1
                }),
                gt(we(k), {
                  shrink: "",
                  align: "start"
                }, {
                  default: $t(() => [
                    ho(gt(we(Cg), {
                      class: "ms-4",
                      weight: "primary",
                      action: "progressive",
                      onClick: v
                    }, {
                      default: $t(() => [
                        P8(wg(U.$i18n("cx-sx-suggestions-filters-done-button-label")), 1)
                      ]),
                      _: 1
                    }, 512), [
                      [F8, y.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            Ut("div", I8, [
              ho(Ut("h5", R8, null, 512), [
                [M, void 0, "cx-sx-suggestions-filter-active-group-label"]
              ]),
              Ut("div", null, [
                gt(so, {
                  class: "sx-suggestions-filters__filter sx-suggestions-filters__filter--active my-1 mx-1 py-1",
                  content: ke.value.label,
                  icon: ke.value.icon
                }, null, 8, ["content", "icon"])
              ])
            ]),
            gt(we(e2), {
              active: we(R),
              "onUpdate:active": [
                q[2] || (q[2] = (I) => Sg(R) ? R.value = I : null),
                a
              ],
              class: "sx-suggestions-filters__tabs"
            }, {
              default: $t(() => [
                (on(!0), Gn(_g, null, vg(s.value, (I, _) => (on(), xg(we(t2), {
                  key: _,
                  name: I.name,
                  label: I.label
                }, {
                  default: $t(() => [
                    Ut("div", z8, [
                      gt(we(J8), {
                        modelValue: we(T),
                        "onUpdate:modelValue": q[0] || (q[0] = (V) => Sg(T) ? T.value = V : null),
                        role: "combobox",
                        "aria-activedescendant": Te.value,
                        "aria-controls": "sx-suggestions-filters__search-results__menu",
                        "aria-autocomplete": "none",
                        placeholder: I.searchPlaceholder,
                        "input-type": "search",
                        "start-icon": we(_c),
                        clearable: !!we(T),
                        onKeydown: Ue
                      }, null, 8, ["modelValue", "aria-activedescendant", "placeholder", "start-icon", "clearable"])
                    ]),
                    we(T) ? (on(), Gn("div", H8, [
                      gt(we(Z8), {
                        id: "sx-suggestions-filters__search-results__menu",
                        ref_for: !0,
                        ref: (V) => J(V, I.name),
                        selected: ue.value,
                        "onUpdate:selected": q[1] || (q[1] = (V) => ue.value = V),
                        "show-pending": we(W),
                        expanded: "",
                        "menu-items": De.value
                      }, {
                        pending: $t(() => [
                          ho(Ut("div", q8, null, 512), [
                            [M, void 0, "cx-sx-suggestions-filter-search-results-loading"]
                          ])
                        ]),
                        "no-results": $t(() => [
                          we(W) ? yg("", !0) : (on(), Gn("div", G8, [
                            ho(Ut("span", X8, null, 512), [
                              [M, void 0, "cx-sx-suggestions-filter-search-results-empty-primary"]
                            ]),
                            ho(Ut("span", W8, null, 512), [
                              [M, void 0, "cx-sx-suggestions-filter-search-results-empty-secondary"]
                            ])
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["selected", "show-pending", "menu-items"])
                    ])) : (on(), Gn("div", O8, [
                      (on(!0), Gn(_g, null, vg(I.filterGroups, (V) => (on(), Gn("div", {
                        key: V.id,
                        class: "sx-suggestions-filters__group"
                      }, [
                        gt(y8, {
                          "filter-group": V,
                          "tentatively-select-filter": E,
                          "is-selected": C,
                          limit: l(I.name, V.type) ? 4 : 0,
                          "get-sub-filter-config": (D) => r(D, I.name)
                        }, null, 8, ["filter-group", "limit", "get-sub-filter-config"]),
                        l(I.name, V.type) ? (on(), Gn("div", {
                          key: 0,
                          class: "sx-suggestions-filters__group-view-all mb-3",
                          tabindex: "0",
                          onKeyup: M8((D) => a(V.id), ["enter"]),
                          onClick: (D) => a(V.id)
                        }, [
                          Ut("span", null, wg(U.$i18n(ct[V.id])), 1)
                        ], 40, j8)) : yg("", !0)
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
const ws = window.Vue.unref, Ya = window.Vue.openBlock, bg = window.Vue.createBlock;
window.Vue.createCommentVNode;
const o2 = window.Vue.renderList, s2 = window.Vue.Fragment, kg = window.Vue.createElementBlock, a2 = window.Vue.normalizeClass, $g = window.Vue.createVNode, i2 = {
  key: 1,
  class: "cx-suggestion-list__filters flex px-4 pb-2"
}, Vg = window.Vue.ref;
window.Vue.computed;
const Eg = window.Vue.watch, r2 = {
  __name: "CXSuggestionListFilters",
  setup(e) {
    const t = ce(), { logSuggestionFiltersQuickSelect: n, logSuggestionFiltersViewMore: o } = xf(), {
      getFiltersSummary: s,
      selectFilter: a,
      isFilterSelected: r,
      waitingForPageCollectionsFetch: l,
      validateURLFilterWithCollections: u
    } = Hi(), d = Vg(!1), i = () => {
      o(), d.value = !0;
    }, c = (p) => {
      n(p), a(p);
    }, g = Vg(s());
    return Eg(d, (p) => {
      p || (g.value = s());
    }), Eg(l, (p) => {
      p || (u(), g.value = s());
    }), (p, m) => ws(l) ? (Ya(), bg(ws(it), { key: 0 })) : (Ya(), kg("div", i2, [
      (Ya(!0), kg(s2, null, o2(g.value, (h) => (Ya(), bg(so, {
        key: h.label,
        class: a2(["cx-suggestion-list__filter py-1 me-1", {
          "cx-suggestion-list__filter--active": ws(r)(h)
        }]),
        icon: h.icon,
        content: h.label,
        onClick: (f) => c(h)
      }, null, 8, ["class", "icon", "content", "onClick"]))), 128)),
      $g(so, {
        class: "cx-suggestion-list__filter py-1 me-1",
        icon: ws(Wc),
        content: ws(t).i18n("cx-sx-suggestions-filter-more-label"),
        onClick: i
      }, null, 8, ["icon", "content"]),
      $g(n2, {
        modelValue: d.value,
        "onUpdate:modelValue": m[0] || (m[0] = (h) => d.value = h)
      }, null, 8, ["modelValue"])
    ]));
  }
}, wo = window.Vue.computed, Lg = window.Vue.ref, l2 = window.Vue.watch, c2 = window.Vuex.useStore, u2 = () => {
  const e = c2(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    currentSuggestionFilters: o
  } = B(), { getPageSuggestionsSliceByIndex: s, getSectionSuggestionsSliceByIndex: a } = Oc(), r = St(), l = wo(
    () => e.state.suggestions.sectionSuggestionsLoadingCount > 0
  ), u = wo(
    () => e.state.suggestions.pageSuggestionsLoadingCount > 0
  ), d = Lg(0), i = Lg(0), { maxSuggestionsPerSlice: c } = e.state.suggestions, g = 4, p = wo(
    () => a(d.value)
  ), m = wo(
    () => s(i.value)
  ), h = () => {
    x(), L(), E(), T();
  }, {
    fetchNextSectionSuggestionsSlice: f,
    fetchNextPageSuggestionsSlice: w
  } = Qc(), v = (R) => R.length === c, y = wo(
    () => v(m.value)
  ), S = wo(
    () => v(p.value)
  ), x = () => {
    const R = (d.value + 1) % g, K = v(
      a(R)
    );
    (!S.value || !K) && f();
  }, E = () => {
    const R = (i.value + 1) % g, K = v(
      s(R)
    );
    (!y.value || !K) && w();
  }, C = (R) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removeSectionSuggestionFromList", R), x();
  }, N = (R) => {
    r({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: t.value,
      translation_target_language: n.value
    }), e.commit("suggestions/removePageSuggestionFromList", R), E();
  }, L = () => d.value = (d.value + 1) % g, T = () => i.value = (i.value + 1) % g;
  return l2(
    o,
    () => {
      i.value = 0, E(), d.value = 0, x();
    },
    { deep: !0 }
  ), {
    currentPageSuggestionsSlice: m,
    currentSectionSuggestionsSlice: p,
    discardPageSuggestion: N,
    discardSectionSuggestion: C,
    onSuggestionRefresh: h,
    pageSuggestionsLoading: u,
    sectionSuggestionsLoading: l,
    getSectionSuggestionsSliceByIndex: a,
    getPageSuggestionsSliceByIndex: s,
    isCurrentPageSuggestionsSliceFull: y,
    isCurrentSectionSuggestionsSliceFull: S
  };
}, d2 = window.Vuex.useStore, ou = () => {
  const e = d2(), { fetchNextSectionSuggestionsSlice: t, fetchNextPageSuggestionsSlice: n } = Qc(), o = (d, i, c) => e.state.suggestions.pageSuggestions.find(
    (g) => g.sourceLanguage === d && g.targetLanguage === i && g.sourceTitle === c
  ), s = (d) => b(void 0, null, function* () {
    const { sourceTitle: i, sourceLanguage: c, targetLanguage: g } = d;
    yield ie.markFavorite(i, c, g);
    const p = new Io({
      title: i,
      sourceLanguage: c,
      targetLanguage: g
    });
    e.commit("suggestions/addFavoriteSuggestion", p);
  });
  return {
    markFavoritePageSuggestion: (d) => {
      e.commit("suggestions/removePageSuggestionFromList", d), n(), s(d);
    },
    markFavoriteSectionSuggestion: (d) => {
      e.commit(
        "suggestions/removeSectionSuggestionFromList",
        d
      ), t(), s(d);
    },
    markFavoriteSuggestion: (d, i, c) => b(void 0, null, function* () {
      const g = o(
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
      ), t()), yield ie.markFavorite(
        d,
        i,
        c
      );
      const m = new Io({
        title: d,
        sourceLanguage: i,
        targetLanguage: c
      });
      e.commit("suggestions/addFavoriteSuggestion", m);
    }),
    removeFavoriteSuggestion: (d) => (e.commit("suggestions/removeFavoriteSuggestion", d), ie.unmarkFavorite(d))
  };
}, g2 = "suggestion_no_seed", p2 = "suggestion_recent_edit", m2 = "suggestion_topic_area", h2 = "suggestion_search_result_seed", f2 = "suggestion_featured", w2 = "suggestion_collections", v2 = "suggestion_region", _2 = () => {
  const { currentSuggestionFilters: e } = B();
  return (t = null) => {
    const { type: n, id: o } = e.value;
    if (o === Kt)
      return t ? p2 : g2;
    if (n === He)
      return m2;
    if (n === be)
      return v2;
    if (n === wt)
      return h2;
    if (o === wn)
      return f2;
    if (o === Z || n === Z)
      return w2;
    throw new Error("Event source cannot be empty");
  };
};
const Ag = window.Vue.normalizeClass, S2 = window.Vue.resolveDirective, vs = window.Vue.createElementVNode, Qa = window.Vue.withDirectives, de = window.Vue.unref, Je = window.Vue.openBlock, It = window.Vue.createBlock, kn = window.Vue.createCommentVNode, Kr = window.Vue.createVNode, _s = window.Vue.withCtx, Dg = window.Vue.renderList, Tg = window.Vue.Fragment, Yr = window.Vue.createElementBlock, y2 = window.Vue.toDisplayString, x2 = window.Vue.createTextVNode, C2 = window.Vue.vShow, b2 = { class: "cx-suggestion-list" }, k2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, $2 = { class: "cx-suggestion-list__division-title ma-0 pa-4" }, V2 = { class: "cx-suggestion-list__refresh-button-container justify-center" }, Rt = window.Vue.computed, E2 = window.Vue.inject, L2 = window.Vue.ref, A2 = window.Codex.CdxButton, D2 = window.Codex.CdxIcon, T2 = window.Vuex.useStore, B2 = {
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
    } = B(), { supportedSourceLanguageCodes: s, supportedTargetLanguageCodes: a } = ua(), r = Nh(), l = (J) => r(J, n.value), u = (J) => r(t.value, J), d = _2(), i = ma(), c = (J) => {
      i(
        J.sourceTitle,
        J.sourceLanguage,
        J.targetLanguage,
        d(J.suggestionSeed),
        o.value.id
      );
    }, {
      currentPageSuggestionsSlice: g,
      currentSectionSuggestionsSlice: p,
      discardPageSuggestion: m,
      discardSectionSuggestion: h,
      onSuggestionRefresh: f,
      pageSuggestionsLoading: w,
      sectionSuggestionsLoading: v,
      isCurrentPageSuggestionsSliceFull: y,
      isCurrentSectionSuggestionsSliceFull: S
    } = u2(), x = L2(null), E = St(), C = () => {
      E({
        event_type: "dashboard_refresh_suggestions",
        translation_source_language: t.value,
        translation_target_language: n.value
      }), f(), x.value && x.value.$el.scrollIntoView({ behavior: "smooth" });
    }, { markFavoriteSectionSuggestion: N, markFavoritePageSuggestion: L } = ou(), T = E2("breakpoints"), R = Rt(() => T.value.mobile), K = Rt(
      () => R.value ? null : "pb-2 flex justify-between items-center"
    ), W = T2(), ke = Rt(
      () => W.state.suggestions.isPageSuggestionsFetchPending
    ), ue = Rt(
      () => W.state.suggestions.isSectionSuggestionsFetchPending
    ), ct = Rt(
      () => ke.value || w.value && !y.value
    ), De = Rt(
      () => ue.value || v.value && !S.value
    ), he = Rt(
      () => ke.value || w.value || g.value.length > 0
    ), xe = Rt(
      () => ue.value || v.value || p.value.length > 0
    ), Te = Rt(
      () => !he.value && !xe.value
    ), Ue = Rt(
      () => !v.value && !w.value && !ke.value && !ue.value && !Te.value
    );
    return (J, U) => {
      const q = S2("i18n");
      return Qa((Je(), Yr("div", b2, [
        Kr(de(Ye), { class: "cx-suggestion-list__header-card px-0 pt-2 pb-0 mb-0" }, {
          header: _s(() => [
            vs("div", {
              class: Ag(["cx-suggestion-list__header-card__header px-4", K.value])
            }, [
              Qa(vs("h3", {
                class: Ag(["mw-ui-card__title mb-0", { "py-3": R.value }])
              }, null, 2), [
                [q, void 0, "cx-suggestionlist-title"]
              ]),
              R.value ? kn("", !0) : (Je(), It(Fi, {
                key: 0,
                "source-languages": de(s),
                "target-languages": de(a),
                "selected-source-language": de(t),
                "selected-target-language": de(n),
                "onUpdate:selectedSourceLanguage": l,
                "onUpdate:selectedTargetLanguage": u
              }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]))
            ], 2),
            Kr(r2)
          ]),
          default: _s(() => [
            R.value ? (Je(), It(Fi, {
              key: 0,
              "source-languages": de(s),
              "target-languages": de(a),
              "selected-source-language": de(t),
              "selected-target-language": de(n),
              "onUpdate:selectedSourceLanguage": l,
              "onUpdate:selectedTargetLanguage": u
            }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"])) : kn("", !0)
          ]),
          _: 1
        }),
        he.value ? (Je(), It(de(Ye), {
          key: 0,
          ref_key: "pageSuggestionsList",
          ref: x,
          class: "cx-suggestion-list__page-suggestions pa-0 mb-0"
        }, {
          default: _s(() => [
            Qa(vs("h5", k2, null, 512), [
              [q, void 0, "cx-suggestion-list-new-pages-division"]
            ]),
            (Je(!0), Yr(Tg, null, Dg(de(g), (M, I) => (Je(), It(Ac, {
              key: `page-suggestion-${I}`,
              suggestion: M,
              onClose: (_) => de(m)(M),
              onClick: (_) => c(M),
              onBookmark: (_) => de(L)(M)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            ct.value ? (Je(), It(de(it), { key: 0 })) : kn("", !0)
          ]),
          _: 1
        }, 512)) : kn("", !0),
        xe.value ? (Je(), It(de(Ye), {
          key: 1,
          class: "cx-suggestion-list__section-suggestions pa-0 mb-0"
        }, {
          default: _s(() => [
            Qa(vs("h5", $2, null, 512), [
              [q, void 0, "cx-suggestionlist-expand-sections-title"]
            ]),
            (Je(!0), Yr(Tg, null, Dg(de(p), (M, I) => (Je(), It(Ac, {
              key: `section-suggestion-${I}`,
              class: "ma-0",
              suggestion: M,
              onClose: (_) => de(h)(M),
              onClick: (_) => c(M),
              onBookmark: (_) => de(N)(M)
            }, null, 8, ["suggestion", "onClose", "onClick", "onBookmark"]))), 128)),
            De.value ? (Je(), It(de(it), { key: 0 })) : kn("", !0)
          ]),
          _: 1
        })) : kn("", !0),
        Te.value ? (Je(), It(_f, {
          key: 2,
          title: J.$i18n("cx-sx-suggestion-list-empty-title"),
          description: J.$i18n("cx-sx-suggestion-list-empty-description")
        }, null, 8, ["title", "description"])) : kn("", !0),
        vs("div", V2, [
          Ue.value ? (Je(), It(de(A2), {
            key: 0,
            class: "px-4",
            weight: "quiet",
            action: "progressive",
            size: "large",
            onClick: C
          }, {
            default: _s(() => [
              Kr(de(D2), {
                class: "me-1",
                icon: de(Th)
              }, null, 8, ["icon"]),
              x2(" " + y2(J.$i18n("cx-suggestionlist-refresh")), 1)
            ]),
            _: 1
          })) : kn("", !0)
        ])
      ], 512)), [
        [C2, e.active]
      ]);
    };
  }
}, P2 = window.Vue.resolveDirective, F2 = window.Vue.createElementVNode, M2 = window.Vue.withDirectives, N2 = window.Vue.renderList, U2 = window.Vue.Fragment, Qr = window.Vue.openBlock, I2 = window.Vue.createElementBlock, Bg = window.Vue.unref, Pg = window.Vue.createBlock, Fg = window.Vue.withCtx, R2 = window.Vue.createCommentVNode, z2 = { class: "mw-ui-card__title pa-4 pt-5 mb-0" }, O2 = window.Vue.computed, j2 = window.Vuex.useStore, H2 = {
  __name: "CXFavoriteList",
  setup(e) {
    const t = j2(), n = O2(() => t.state.suggestions.favorites || []), o = ma(), s = (r) => o(
      r.title,
      r.sourceLanguage,
      r.targetLanguage,
      "for_later"
    ), { removeFavoriteSuggestion: a } = ou();
    return (r, l) => {
      const u = P2("i18n");
      return n.value.length ? (Qr(), Pg(Bg(Ye), {
        key: 0,
        class: "cx-translation-list--favorites pa-0 mb-4"
      }, {
        header: Fg(() => [
          M2(F2("h3", z2, null, 512), [
            [u, void 0, "cx-suggestion-list-favorites-division"]
          ])
        ]),
        default: Fg(() => [
          (Qr(!0), I2(U2, null, N2(n.value, (d, i) => (Qr(), Pg(Ac, {
            key: `favorite-${i}`,
            suggestion: d,
            onClick: (c) => s(d),
            onBookmark: (c) => Bg(a)(d)
          }, null, 8, ["suggestion", "onClick", "onBookmark"]))), 128))
        ]),
        _: 1
      })) : R2("", !0);
    };
  }
};
const q2 = window.Vue.resolveDirective, Ss = window.Vue.createElementVNode, G2 = window.Vue.withDirectives, X2 = window.Vue.renderList, W2 = window.Vue.Fragment, Mg = window.Vue.openBlock, Ng = window.Vue.createElementBlock, K2 = window.Vue.unref, Y2 = window.Vue.createVNode, Q2 = window.Vue.toDisplayString, J2 = { class: "cx-help-panel pa-4" }, Z2 = { class: "cx-help-panel__item-list mt-6 ps-2" }, e$ = ["href", "target"], t$ = ["textContent"], n$ = window.Codex.CdxIcon, o$ = {
  __name: "CXHelpPanel",
  setup(e) {
    const t = ce(), n = [
      {
        icon: ny,
        label: t.i18n("cx-sx-dashboard-help-panel-more-info-label"),
        href: "https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation",
        target: "_blank"
      },
      {
        icon: JS,
        label: t.i18n("cx-sx-dashboard-help-panel-feedback-label"),
        href: "https://www.mediawiki.org/wiki/Talk:Content_translation",
        target: "_blank"
      }
    ];
    return (o, s) => {
      const a = q2("i18n");
      return Mg(), Ng("div", J2, [
        G2(Ss("h5", null, null, 512), [
          [a, void 0, "cx-sx-dashboard-help-panel-title"]
        ]),
        Ss("ul", Z2, [
          (Mg(), Ng(W2, null, X2(n, (r, l) => Ss("li", {
            key: l,
            class: "mt-4"
          }, [
            Ss("a", {
              href: r.href,
              target: r.target
            }, [
              Y2(K2(n$), {
                class: "me-2",
                icon: r.icon
              }, null, 8, ["icon"]),
              Ss("span", {
                textContent: Q2(r.label)
              }, null, 8, t$)
            ], 8, e$)
          ])), 64))
        ])
      ]);
    };
  }
};
const s$ = window.Vue.resolveDirective, vo = window.Vue.createElementVNode, Jr = window.Vue.withDirectives, Ug = window.Vue.toDisplayString, Zr = window.Vue.unref, el = window.Vue.withCtx, tl = window.Vue.createVNode, a$ = window.Vue.openBlock, i$ = window.Vue.createElementBlock, r$ = { class: "cx-stats-panel pa-4" }, l$ = ["textContent"], c$ = { class: "cx-stats-panel__monthly-stats-label" }, u$ = ["textContent"], d$ = { class: "cx-stats-panel__total-stats-label" }, g$ = window.Vue.ref, Ig = window.Vue.computed, p$ = window.Vue.watch, m$ = {
  __name: "CXStatsPanel",
  props: {
    stats: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01", o = Ig(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.count) || 0;
    }), s = Ig(() => {
      var r, l;
      return ((l = (r = t.stats) == null ? void 0 : r[n]) == null ? void 0 : l.delta) || 0;
    }), a = g$(null);
    return p$(
      () => t.stats,
      () => {
        const r = t.stats, l = a.value.getContext("2d"), u = Object.keys(t.stats || {}).sort(), d = u.reduce(
          (S, x) => Math.max(S, r[x].delta),
          0
        ), i = u.map((S) => r[S].delta), c = a.value.getBoundingClientRect().width, g = a.value.getBoundingClientRect().height;
        a.value.width = c, a.value.height = g;
        const p = 4, m = 6, h = 50, f = (h - p) / d;
        let w = p;
        const v = Math.floor(
          (c - p) / (m + p)
        ), y = i.slice(
          Math.max(i.length - v, 0)
        );
        y.forEach((S, x) => {
          x === y.length - 1 && (l.fillStyle = "#36c");
          const E = h - S * f;
          l.fillRect(w, E, m, S * f), w += m + p;
        });
      }
    ), (r, l) => {
      const u = s$("i18n");
      return a$(), i$("div", r$, [
        Jr(vo("h5", null, null, 512), [
          [u, void 0, "cx-sx-dashboard-stats-panel-title"]
        ]),
        tl(Zr(F), null, {
          default: el(() => [
            tl(Zr(k), { class: "cx-stats-panel__monthly-stats" }, {
              default: el(() => [
                vo("h3", {
                  textContent: Ug(s.value)
                }, null, 8, l$),
                Jr(vo("h5", c$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-monthly-stats-label"]
                ])
              ]),
              _: 1
            }),
            tl(Zr(k), { class: "cx-stats-panel__total-stats" }, {
              default: el(() => [
                vo("h3", {
                  textContent: Ug(o.value)
                }, null, 8, u$),
                Jr(vo("h5", d$, null, 512), [
                  [u, void 0, "cx-sx-dashboard-stats-panel-total-stats-label"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vo("canvas", {
          ref_key: "canvasRef",
          ref: a,
          class: "cx-stats-panel__canvas"
        }, null, 512)
      ]);
    };
  }
}, Cf = () => {
  const e = St();
  return (t) => e({
    event_type: "dashboard_tab_select",
    event_source: {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab"
    }[t]
  });
};
const h$ = window.Vue.renderSlot, f$ = window.Vue.unref, w$ = window.Vue.createVNode, v$ = window.Vue.createElementVNode, _$ = window.Vue.openBlock, S$ = window.Vue.createElementBlock, y$ = { class: "mw-ui-bottom-navigation row ma-0 justify-center" }, x$ = { class: "col-12 ma-0 pa-0" }, C$ = {
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
    const n = t, o = Cf(), s = (a) => {
      o(a), n("update:active", a);
    };
    return (a, r) => (_$(), S$("footer", y$, [
      v$("div", x$, [
        h$(a.$slots, "default", {}, () => [
          w$(f$(ia), {
            class: "mw-ui-bottom-navigation__button-group justify-around",
            active: e.active,
            items: e.items,
            onSelect: s
          }, null, 8, ["active", "items"])
        ])
      ])
    ]));
  }
}, b$ = window.Vuex.useStore, k$ = () => {
  const e = b$(), t = Go();
  return () => b(void 0, null, function* () {
    if (e.state.suggestions.favorites.length)
      return;
    const n = yield ie.fetchFavorites();
    if (!n || !n.length)
      return;
    const o = {};
    for (const s of n)
      e.commit("suggestions/addFavoriteSuggestion", s), ie.fetchSectionSuggestion(
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
}, $$ = window.Vuex.useStore, bf = () => {
  const e = $$(), {
    getUrlParam: t,
    pageURLParameter: n,
    currentSuggestionFilters: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), { isDefaultFilter: r } = Pc(), { previousRoute: l } = Ae(e), u = St(), d = () => {
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
    return p || (r(o.value) ? d() || "direct" : "suggestion_filter_direct_preselect");
  };
  return { logDashboardOpenEvent: () => {
    const g = i(), p = {
      event_type: "dashboard_open",
      event_source: g,
      translation_source_language: s.value,
      translation_target_language: a.value
    };
    return g === "suggestion_filter_direct_preselect" && (p.event_context = o.value.id), u(p);
  }, getEventSource: i };
}, V$ = window.Vue.watch, E$ = () => {
  const { fetchAllTranslations: e } = Ko(), t = Ph(), n = k$(), { fetchPageCollectionGroups: o } = qc(), { logDashboardOpenEvent: s } = bf(), { applicationLanguagesInitialized: a } = Uh();
  return () => b(void 0, null, function* () {
    o();
    try {
      yield n();
    } catch (r) {
      mw.log.error("[CX] Error while fetching favorite suggestions", r);
    }
    yield e(), V$(
      a,
      () => {
        a.value && (s(), t());
      },
      { immediate: !0 }
    );
  });
}, Rg = window.Vue.computed, L$ = window.Vue.ref, A$ = window.Vue.watch, D$ = window.Vue.watchEffect, T$ = window.Vuex.useStore, B$ = ["suggestions", "draft", "published"], P$ = () => {
  const e = T$(), { activeDashboardTabParameter: t, setActiveDashboardTabParameter: n } = B(), { translationsFetched: o } = Ko(), s = L$(null);
  if (B$.includes(t.value))
    s.value = t.value;
  else {
    const a = Rg(
      () => o.value.draft
    ), r = Rg(
      () => e.getters["translator/getTranslationsByStatus"]("draft")
    );
    a.value ? s.value = r.value.length > 0 ? "draft" : "suggestions" : (s.value = "suggestions", A$(a, (l) => {
      l && (s.value = r.value.length > 0 ? "draft" : "suggestions");
    }));
  }
  return D$(() => {
    n(s.value), window.scrollTo(0, 0);
  }), s;
}, F$ = window.Vue.computed, M$ = () => {
  const e = ce();
  return F$(() => [
    {
      value: "suggestions",
      props: {
        label: e.i18n("cx-translation-filter-suggested-translations"),
        icon: y0,
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
        icon: S0,
        type: "text"
      }
    }
  ]);
};
const _e = window.Vue.unref, Be = window.Vue.createVNode, N$ = window.Vue.toDisplayString, U$ = window.Vue.createTextVNode, sn = window.Vue.withCtx, nl = window.Vue.openBlock, zg = window.Vue.createBlock, Og = window.Vue.createCommentVNode, I$ = window.Vue.vShow, R$ = window.Vue.withDirectives, z$ = window.Vue.isRef, O$ = window.Vue.createElementBlock, j$ = window.Vue.computed, H$ = window.Vuex.useStore, q$ = window.Codex.CdxButton, G$ = window.Codex.CdxIcon, X$ = {
  __name: "CXDashboard",
  setup(e) {
    const t = qe(), n = St(), o = () => {
      n({
        event_type: "dashboard_new_translation_search"
      }), t.push({ name: "sx-article-search" });
    };
    E$()();
    const a = H$();
    a.dispatch("translator/fetchTranslatorStats");
    const r = j$(() => a.state.translator.translatorStats), l = P$(), u = M$(), d = Cf(), i = (c) => {
      d(c), l.value = c;
    };
    return (c, g) => (nl(), O$("div", null, [
      Be(_e(F), { class: "ma-0 pb-4" }, {
        default: sn(() => [
          Be(_e(q$), {
            id: "dashboard-search-translation-button",
            action: "progressive",
            weight: "primary",
            size: "large",
            class: "col-offset-desktop-2 col-offset-tablet-3",
            onClick: o
          }, {
            default: sn(() => [
              Be(_e(G$), {
                class: "me-1",
                icon: _e(wc)
              }, null, 8, ["icon"]),
              U$(" " + N$(c.$i18n("cx-create-new-translation")), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      Be(_e(F), {
        class: "ma-0",
        align: "start"
      }, {
        default: sn(() => [
          c.$mwui.breakpoint.tabletAndUp ? (nl(), zg(_e(k), {
            key: 0,
            class: "px-0",
            tablet: "3",
            desktop: "2"
          }, {
            default: sn(() => [
              Be(_e(ia), {
                id: "dashboard-list-selector--desktop",
                items: _e(u),
                active: _e(l),
                onSelect: i
              }, null, 8, ["items", "active"])
            ]),
            _: 1
          })) : Og("", !0),
          Be(_e(k), {
            class: "cx-dashboard__main-panel px-0",
            cols: "12",
            tablet: "9",
            desktop: "7"
          }, {
            default: sn(() => [
              R$(Be(H2, null, null, 512), [
                [I$, _e(l) === "suggestions"]
              ]),
              Be(B2, {
                active: _e(l) === "suggestions"
              }, null, 8, ["active"]),
              Be(ng, {
                "translation-status": "draft",
                "active-status": _e(l)
              }, null, 8, ["active-status"]),
              Be(ng, {
                "translation-status": "published",
                "active-status": _e(l)
              }, null, 8, ["active-status"])
            ]),
            _: 1
          }),
          Be(_e(k), {
            class: "ps-0 ps-desktop-4 pe-0 pt-4 pt-desktop-0 col-offset-tablet-3 col-offset-desktop-0",
            cols: "12",
            tablet: "9",
            desktop: "3"
          }, {
            default: sn(() => [
              Be(_e(F), {
                class: "ma-0",
                align: "start"
              }, {
                default: sn(() => [
                  Be(_e(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 mb-4 mb-tablet-0 mb-desktop-4 pe-tablet-2 pe-desktop-0"
                  }, {
                    default: sn(() => [
                      Be(m$, { stats: r.value }, null, 8, ["stats"])
                    ]),
                    _: 1
                  }),
                  Be(_e(k), {
                    cols: "12",
                    tablet: "6",
                    desktop: "12",
                    class: "px-0 ps-tablet-2 ps-desktop-0"
                  }, {
                    default: sn(() => [
                      Be(o$)
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
      c.$mwui.breakpoint.mobile ? (nl(), zg(C$, {
        key: 0,
        active: _e(l),
        "onUpdate:active": g[0] || (g[0] = (p) => z$(l) ? l.value = p : null),
        items: _e(u)
      }, null, 8, ["active", "items"])) : Og("", !0)
    ]));
  }
}, W$ = {
  name: "DashboardView",
  components: { CxDashboard: X$ }
}, K$ = window.Vue.resolveComponent, Y$ = window.Vue.createVNode, Q$ = window.Vue.openBlock, J$ = window.Vue.createElementBlock, Z$ = { class: "cx-translation-dashboard" };
function eV(e, t, n, o, s, a) {
  const r = K$("cx-dashboard");
  return Q$(), J$("main", Z$, [
    Y$(r, { class: "mb-4 pb-12 px-3 px-tablet-10" })
  ]);
}
const jg = /* @__PURE__ */ oe(W$, [["render", eV]]), Hg = window.Vue.computed, tV = window.Vuex.useStore, Ge = () => {
  const e = tV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    pageURLParameter: o,
    sectionURLParameter: s
  } = B(), a = Hg(
    () => e.getters["suggestions/getSectionSuggestionsForArticle"](
      t.value,
      n.value,
      o.value
    )
  ), r = Hg(
    () => {
      var l;
      return !!((l = a.value) != null && l.presentSections.hasOwnProperty(
        s.value
      ));
    }
  );
  return { sectionSuggestion: a, isCurrentSectionPresent: r };
}, nV = window.Vuex.useStore, oV = window.Vue.computed, Mt = () => {
  const e = nV(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n,
    sectionURLParameter: o,
    pageURLParameter: s
  } = B();
  return { currentTranslation: oV(
    () => e.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (r) => r.status === "draft" && r.sourceTitle === s.value && r.sectionTitleMatches(o.value) && r.sourceLanguage === t.value && r.targetLanguage === n.value
    )
  ) };
}, _o = window.Vue.computed, sV = () => {
  const { sectionSuggestion: e } = Ge(), { targetLanguageURLParameter: t } = B(), { currentTranslation: n } = Mt(), o = _o(
    () => {
      var g, p, m;
      return (m = (p = (g = e.value) == null ? void 0 : g.orderedMissingSections) == null ? void 0 : p[0]) == null ? void 0 : m.sourceTitle;
    }
  ), s = _o(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.missingSectionsCount;
    }
  ), a = _o(
    () => {
      var g;
      return (g = e.value) == null ? void 0 : g.presentSectionsCount;
    }
  ), { targetPageExists: r, getCurrentTitleByLanguage: l } = _n(), u = _o(() => r ? Q.getPageUrl(
    t.value || "",
    // no need for fallback language, since we know that current target page exists
    l(t.value, null)
  ) : null), d = (g) => n.value ? "cx-sx-translation-confirmer-continue-translation-button-label" : g ? "cx-sx-translation-confirmer-translate-prefilled-section-button-label" : r.value ? s.value > 1 || s.value === 1 && a.value > 0 ? "cx-sx-select-section" : s.value === 1 && a.value === 0 ? "cx-sx-translation-confirmer-action-view-section" : s.value === 0 && a.value > 0 ? "cx-sx-select-section" : s.value === 0 && a.value === 0 ? "cx-sx-translation-confirmer-action-new-translation" : "" : "cx-sx-start-translation-button-label", i = _o(() => {
    let g;
    return s.value > 1 ? g = [
      "cx-sx-existing-translation-additional-info",
      `"${o.value}"`,
      s.value - 1
    ] : s.value === 1 && a.value > 0 ? g = [
      "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
      `"${o.value}"`
    ] : s.value === 1 && a.value === 0 ? g = [
      "cx-sx-translation-confirmer-action-message-single-missing-none-present",
      `"${o.value}"`
    ] : a.value > 0 ? g = [
      "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
    ] : g = [
      "cx-sx-translation-confirmer-action-message-none-missing-none-present"
    ], g;
  }), c = _o(
    () => {
      var g;
      return !r.value || ((g = e.value) == null ? void 0 : g.missingSectionsCount) > 0;
    }
  );
  return {
    actionInformationMessageArgs: i,
    getActionButtonLabel: d,
    isProgressiveButton: c,
    targetArticlePath: u
  };
};
function aV(e) {
  return e.$el = $(e), e;
}
function iV(e, t, n, o) {
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
function rV() {
  var e = this.getReferenceNode();
  return e ? (this.view = new ve.ui.MWPreviewElement(e, {
    useView: !0
  }), this.view.once("render", this.context.updateDimensions.bind(this.context)), this.view.$element) : $("<div>").addClass("ve-ui-mwReferenceContextItem-muted").text(ve.msg("cite-ve-referenceslist-missingref"));
}
function lV(e, t) {
  return b(this, null, function* () {
    yield su(), OO.ui.isMobile = () => !0, yield mw.libs.ve.targetLoader.loadModules("visual");
    const n = aV(t);
    return new ve.init.mw.SectionTranslationTarget(n, e);
  });
}
const cV = window.Vue.computed, uV = window.Vue.onMounted, dV = window.Vue.ref;
function gV(e) {
  let t = e[0].getAttribute("title");
  return t || (t = e[0].getAttribute("href").replace(/^\.\//, "")), ve.dm.MWInternalLinkAnnotation.static.dataElementFromTitle(
    mw.Title.newFromText(t)
  );
}
const pV = {
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
    const n = dV(null);
    let o = null;
    const s = cV(() => o.getHtml()), a = () => {
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
    return uV(() => b(this, null, function* () {
      ve.dm.MWInternalLinkAnnotation.static.toDataElement = gV;
      const i = yield lV(u, n.value);
      t.emit("ready"), n.value.appendChild(i.$element[0]), o = iV(
        i,
        e.content,
        e.language,
        e.dir
      ), ve.ui.MWReferenceContextItem.prototype.getRendering = rV, o.focus();
    })), { sxeditor: n };
  }
}, Di = window.Vue.createElementVNode, mV = window.Vue.openBlock, hV = window.Vue.createElementBlock, fV = ["lang", "dir"], wV = /* @__PURE__ */ Di("div", { class: "overlay-header-container" }, [
  /* @__PURE__ */ Di("div", { class: "overlay-header header initial-header" }, [
    /* @__PURE__ */ Di("div", { class: "toolbar" })
  ])
], -1), vV = ["lang", "dir"];
function _V(e, t, n, o, s, a) {
  return mV(), hV("div", {
    ref: "sxeditor",
    lang: n.language,
    dir: n.dir,
    class: "visual-editor"
  }, [
    wV,
    Di("div", {
      class: "surface pa-5",
      lang: n.language,
      dir: n.dir
    }, null, 8, vV)
  ], 8, fV);
}
const SV = /* @__PURE__ */ oe(pV, [["render", _V]]);
function su() {
  return mw.loader.using("mw.cx3.ve");
}
const yV = window.Vuex.useStore, xV = () => {
  const e = yV();
  return (t, n) => b(void 0, null, function* () {
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
        const a = vh.convertSegmentedContentToPageSections(
          o.content,
          !0
          // resolve references
        );
        o.updateSections(a), s();
      }, 0);
    });
  });
}, CV = window.Vuex.useStore, kf = () => {
  const e = CV();
  return (t, n, o, s = null) => b(void 0, null, function* () {
    let a = e.getters["mediawiki/getPage"](
      t,
      o
    );
    if (a && a.content)
      return;
    const r = yield io.fetchPageContent(
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
}, qg = window.Vue.computed, bV = window.Vuex.useStore, lt = () => {
  const e = bV(), { sectionSuggestion: t } = Ge(), { currentTranslation: n } = Mt(), {
    sourceLanguageURLParameter: o,
    pageURLParameter: s,
    targetLanguageURLParameter: a
  } = B(), r = qg(
    () => e.getters["mediawiki/getPage"](
      o.value,
      s.value
    )
  ), l = qg(() => {
    var d, i;
    const u = ((d = t.value) == null ? void 0 : d.targetTitle) || ((i = n.value) == null ? void 0 : i.targetTitle);
    return e.getters["mediawiki/getPage"](
      a.value,
      u
    );
  });
  return { currentSourcePage: r, currentTargetPage: l };
}, Ki = () => {
  const { currentSourcePage: e } = lt(), t = xV(), n = kf(), {
    setSectionURLParam: o,
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r,
    revisionURLParameter: l
  } = B(), u = (c, g) => b(void 0, null, function* () {
    c() || (yield n(
      s.value,
      a.value,
      r.value,
      l.value
    ), Ho || (yield t(
      s.value,
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
        c === 0 ? m.originalTitle = e.value.title : o(m.originalTitle);
      });
    },
    selectPageSectionByTitle: (c) => u(() => e.value.getSectionByTitle(c), () => {
      o(c);
    })
  };
}, kV = window.Vuex.useStore, Yo = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t,
    pageURLParameter: n,
    sectionURLParameter: o,
    isQuickTutorialForced: s
  } = B(), a = kV(), r = qe(), l = () => {
    const c = r.currentRoute.value.name !== "sx-quick-tutorial" && (s() || !a.getters["translator/userHasSectionTranslations"]) ? "sx-quick-tutorial" : "sx-sentence-selector";
    return r.getRoutes().find((g) => g.name === c);
  }, u = () => {
    const i = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    ), c = Q.getCurrentWikiLanguageCode();
    if (!i || t.value === c)
      return !1;
    const g = o.value ? { section: o.value } : {}, p = Q.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      g
    );
    return location.href = p + "#" + l().path, !0;
  }, d = () => {
    location.href = Q.getCXUrl(
      n.value,
      null,
      e.value,
      t.value,
      o.value ? { sourcesection: o.value } : {}
    );
  };
  return () => {
    if (Q.setCXToken(
      e.value,
      t.value,
      n.value
    ), Ho) {
      d();
      return;
    }
    if (u())
      return;
    const c = l();
    r.push({ name: c.name });
  };
}, au = () => {
  const e = St(), { currentTranslation: t } = Mt();
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
      sourceSectionTitle: u,
      targetSectionTitle: d
    } = t.value, i = {
      event_type: "dashboard_translation_continue",
      translation_id: n,
      translation_source_language: o,
      translation_source_title: a,
      translation_target_language: s,
      translation_target_title: r,
      translation_type: l ? "article" : "section"
    };
    return u && (i.translation_source_section = u), d && (i.translation_target_section = d), e(i);
  };
}, $V = window.Vue.ref, VV = () => {
  const e = qe(), { logDashboardTranslationStartEvent: t } = Wi(), n = au(), o = Yo(), { sectionURLParameter: s } = B(), { targetPageExists: a } = _n(), { selectPageSectionByTitle: r } = Ki(), l = () => b(void 0, null, function* () {
    yield r(s.value), e.push({ name: "sx-content-comparator" });
  }), u = $V(!1), { currentTranslation: d } = Mt();
  return {
    handlePrimaryButtonClick: () => {
      d.value ? d.value.isArticleTranslation && !Ho ? u.value = !0 : (n(), o()) : s.value ? l() : a.value ? e.push({ name: "sx-section-selector" }) : (t(), o());
    },
    translationConfirmationDialogOn: u
  };
};
const EV = window.Vue.resolveDirective, Gg = window.Vue.createElementVNode, Xg = window.Vue.withDirectives, LV = window.Vue.unref, AV = window.Vue.withCtx, DV = window.Vue.openBlock, TV = window.Vue.createBlock, BV = {
  href: "",
  target: "_blank"
}, PV = window.Codex.CdxDialog, FV = {
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
    const n = e, o = t, s = (d) => o("update:modelValue", d), a = ce(), r = {
      label: a.i18n(
        "cx-unreviewed-translation-dialog-review-translation-button-label"
      ),
      actionType: "progressive"
    }, l = {
      label: a.i18n("cx-unreviewed-translation-dialog-close-button-label")
    };
    function u() {
      window.open(n.targetUrl, "_blank"), s(!1);
    }
    return (d, i) => {
      const c = EV("i18n");
      return DV(), TV(LV(PV), {
        class: "cx-unreviewed-translation-dialog",
        open: e.modelValue,
        title: d.$i18n("cx-unreviewed-translation-dialog-title"),
        "use-close-button": !0,
        "primary-action": r,
        "default-action": l,
        "onUpdate:open": i[0] || (i[0] = (g) => s(g)),
        onPrimary: u,
        onDefault: i[1] || (i[1] = (g) => s(!1))
      }, {
        default: AV(() => [
          Xg(Gg("p", null, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-body"]
          ]),
          Xg(Gg("a", BV, null, 512), [
            [c, void 0, "cx-unreviewed-translation-dialog-learn-more-link-label"]
          ])
        ]),
        _: 1
      }, 8, ["open", "title"]);
    };
  }
};
const Se = window.Vue.unref, MV = window.Vue.resolveDirective, ys = window.Vue.createElementVNode, Wg = window.Vue.withDirectives, xs = window.Vue.toDisplayString, Cs = window.Vue.openBlock, ol = window.Vue.createElementBlock, sl = window.Vue.createCommentVNode, pt = window.Vue.createVNode, Vt = window.Vue.withCtx, al = window.Vue.createTextVNode, NV = window.Vue.withModifiers, Kg = window.Vue.createBlock, UV = window.Vue.Fragment, IV = { class: "sx-translation-confirmer-body pb-4" }, RV = {
  key: 0,
  class: "sx-translation-confirmer-body__pre-filled-banner pa-4 ma-0"
}, zV = ["textContent"], OV = {
  key: 1,
  class: "mt-1 px-4 pt-4"
}, jV = ["href"], HV = ["textContent"], Ja = window.Vue.computed, qV = window.Vue.inject, Yg = window.Vue.ref, GV = window.Vue.watchEffect, XV = window.Vuex.useStore, il = window.Codex.CdxButton, WV = window.Codex.CdxIcon, KV = {
  __name: "SXTranslationConfirmerActionPanel",
  emits: ["open-translation-confirmation-dialog"],
  setup(e, { emit: t }) {
    const n = qe(), o = XV();
    qV("colors");
    const { sectionSuggestion: s } = Ge(), { targetLanguageAutonym: a } = Ae(o), { sectionURLParameter: r } = B(), { logDashboardTranslationStartEvent: l } = Wi(), u = Yo(), { handlePrimaryButtonClick: d, translationConfirmationDialogOn: i } = VV(), c = Yg(!1), g = Yg(null), p = () => b(this, null, function* () {
      let K = !0;
      try {
        K = yield vt.checkUnreviewedTranslations();
      } catch (W) {
        mw.log.error(
          "Error while checking for user's unreviewed translations ",
          W
        );
      }
      K !== !0 && (c.value = !0, g.value = K.targetUrl);
    }), m = () => b(this, null, function* () {
      yield p(), !c.value && (l(), u());
    }), h = () => b(this, null, function* () {
      yield p(), !c.value && d();
    }), f = t;
    GV(() => {
      i.value && (f("open-translation-confirmation-dialog"), i.value = !1);
    });
    const {
      actionInformationMessageArgs: w,
      getActionButtonLabel: v,
      isProgressiveButton: y,
      targetArticlePath: S
    } = sV(), x = ce(), E = Ja(
      () => x.i18n(v(!!r.value))
    ), C = Ja(
      () => x.i18n(...w.value)
    ), N = () => b(this, null, function* () {
      yield p(), !c.value && n.push({ name: "sx-section-selector" });
    }), L = Ja(() => {
      var K, W;
      return r.value && !!((W = (K = s.value) == null ? void 0 : K.sourceSections) != null && W.length);
    }), { targetPageExists: T } = _n(), R = Ja(() => !r.value && T.value && Ho);
    return (K, W) => {
      const ke = MV("i18n");
      return Cs(), ol(UV, null, [
        ys("section", IV, [
          Se(r) ? (Cs(), ol("section", RV, [
            Wg(ys("h6", null, null, 512), [
              [ke, void 0, "cx-sx-translation-confirmer-prefilled-section-heading"]
            ]),
            ys("h5", {
              class: "ma-0",
              textContent: xs(Se(r))
            }, null, 8, zV)
          ])) : Se(T) ? (Cs(), ol("section", OV, [
            pt(Se(F), {
              class: "sx-translation-confirmer__translation-status ma-0 pb-2",
              justify: "between"
            }, {
              default: Vt(() => [
                Wg(pt(Se(k), {
                  tag: "h5",
                  class: "ma-0 pe-2"
                }, null, 512), [
                  [ke, [Se(a)], "cx-sx-existing-translation-status"]
                ]),
                pt(Se(k), { shrink: "" }, {
                  default: Vt(() => [
                    ys("a", {
                      href: Se(S),
                      target: "_blank"
                    }, [
                      pt(Se(WV), {
                        class: "sx-translation-confirmer__existing-target-article-link-icon",
                        size: "small",
                        icon: Se(Kc)
                      }, null, 8, ["icon"])
                    ], 8, jV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            pt(Se(F), { class: "ma-0" }, {
              default: Vt(() => [
                pt(Se(k), null, {
                  default: Vt(() => [
                    ys("span", {
                      textContent: xs(C.value)
                    }, null, 8, HV)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : sl("", !0),
          pt(Se(F), {
            class: "sx-translation-confirmer__action pt-5 pb-2 ma-0 px-4",
            justify: "center"
          }, {
            default: Vt(() => [
              L.value ? (Cs(), Kg(Se(k), {
                key: 0,
                shrink: ""
              }, {
                default: Vt(() => [
                  pt(Se(il), {
                    size: "large",
                    weight: "quiet",
                    action: "progressive",
                    onClick: NV(N, ["stop"])
                  }, {
                    default: Vt(() => [
                      al(xs(K.$i18n("cx-sx-translation-confirmer-more-sections-button-label")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : sl("", !0),
              R.value ? (Cs(), Kg(Se(k), {
                key: 1,
                shrink: ""
              }, {
                default: Vt(() => [
                  pt(Se(il), {
                    size: "large",
                    onClick: m
                  }, {
                    default: Vt(() => [
                      al(xs(K.$i18n(
                        "cx-sx-translation-confirmer-new-desktop-translation-button-label"
                      )), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : sl("", !0),
              pt(Se(k), { shrink: "" }, {
                default: Vt(() => [
                  pt(Se(il), {
                    weight: "primary",
                    size: "large",
                    action: Se(y) ? "progressive" : "default",
                    onClick: h
                  }, {
                    default: Vt(() => [
                      al(xs(E.value), 1)
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
        pt(FV, {
          modelValue: c.value,
          "onUpdate:modelValue": W[0] || (W[0] = (ue) => c.value = ue),
          "target-url": g.value
        }, null, 8, ["modelValue", "target-url"])
      ], 64);
    };
  }
};
const rl = window.Vue.unref, YV = window.Vue.openBlock, QV = window.Vue.createBlock, JV = window.Vue.computed, $f = {
  __name: "SXArticleLanguageSelector",
  setup(e) {
    const { supportedTargetLanguageCodes: t } = ua(), {
      sourceLanguageURLParameter: n,
      targetLanguageURLParameter: o
    } = B(), { currentLanguageTitleGroup: s } = _n(), a = JV(
      () => {
        var d;
        return ((d = s.value) == null ? void 0 : d.titles.map((i) => i.lang)) || [];
      }
    ), r = Ly(), l = (d) => r(d, o.value), u = (d) => r(n.value, d);
    return (d, i) => (YV(), QV(Fi, {
      class: "sx-article-language-selector",
      "source-languages": a.value,
      "target-languages": rl(t),
      "selected-source-language": rl(n),
      "selected-target-language": rl(o),
      "onUpdate:selectedSourceLanguage": l,
      "onUpdate:selectedTargetLanguage": u
    }, null, 8, ["source-languages", "target-languages", "selected-source-language", "selected-target-language"]));
  }
}, ll = window.Vue.computed, Qg = window.Vue.ref, ZV = window.Vue.watchEffect, e4 = () => {
  const { currentSourcePage: e } = lt(), { sectionSuggestion: t } = Ge(), n = ce(), { sectionURLParameter: o } = B(), s = Qg(null), a = Qg([]);
  ZV(() => b(void 0, null, function* () {
    var d;
    if (t.value && o.value)
      a.value = [o.value];
    else if (t.value) {
      const { missingSections: i } = t.value;
      a.value = Object.keys(i);
    } else
      e.value && !Ho ? a.value = [Uo.LEAD_SECTION_DUMMY_TITLE] : a.value = [];
    a.value.length ? s.value = yield jk(
      e.value,
      a.value
    ) : s.value = ((d = e.value) == null ? void 0 : d.articleSize) || null;
  }));
  const r = ll(() => Sf(s.value || 0)), l = ll(() => {
    if (!t.value && !e.value || !r.value)
      return "";
    const d = Hk(
      r.value,
      a.value
    );
    return n.i18n(...d);
  }), u = ll(
    () => yf(s.value)
  );
  return { timeEstimateMessage: l, isQuickTranslation: u };
};
const Ce = window.Vue.unref, cl = window.Vue.toDisplayString, $n = window.Vue.createElementVNode, zt = window.Vue.createVNode, So = window.Vue.withCtx, t4 = window.Vue.resolveDirective, n4 = window.Vue.withDirectives, o4 = window.Vue.normalizeClass, Jg = window.Vue.openBlock, s4 = window.Vue.createElementBlock, a4 = window.Vue.createCommentVNode, i4 = window.Vue.createBlock, r4 = ["textContent"], l4 = { class: "complementary sx-translation-confirmer__article-information__stats ma-0 flex" }, c4 = ["textContent"], u4 = { class: "pe-3" }, d4 = ["textContent"], g4 = window.Codex.CdxButton, bs = window.Codex.CdxIcon, Xn = window.Vue.computed, p4 = window.Vuex.useStore, m4 = {
  __name: "SXTranslationConfirmerArticleInformation",
  setup(e) {
    const t = p4(), { currentSourcePage: n } = lt(), {
      sourceLanguageURLParameter: o,
      targetLanguageURLParameter: s,
      pageURLParameter: a
    } = B(), r = Xn(() => t.state.suggestions.favorites || []), l = Xn(
      () => r.value.some(
        (S) => a.value === S.title && o.value === S.sourceLanguage && s.value === S.targetLanguage
      )
    ), { markFavoriteSuggestion: u, removeFavoriteSuggestion: d } = ou(), i = () => u(
      a.value,
      o.value,
      s.value
    ), c = () => d(
      new Io({
        title: a.value,
        sourceLanguage: o.value,
        targetLanguage: s.value
      })
    ), g = Xn(
      () => l.value ? Lh : Ah
    ), p = Xn(
      () => l.value ? c : i
    ), m = Xn(
      () => Q.getPageUrl(o.value || "", a.value || "")
    ), h = Xn(
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
      for (let E = 0; E < x.length; E++)
        if (S >= x[E].value)
          return (S / x[E].value).toFixed(1).replace(/\.0$/, "") + x[E].suffix;
      return S.toString();
    }, w = Xn(() => {
      var x;
      const S = Object.values(((x = n.value) == null ? void 0 : x.pageviews) || {}).reduce(
        (E, C) => E + C,
        0
      );
      return f(S);
    }), { timeEstimateMessage: v, isQuickTranslation: y } = e4();
    return (S, x) => {
      const E = t4("i18n");
      return Jg(), i4(Ce(F), {
        class: "sx-translation-confirmer__article-information ma-0 pa-4",
        align: "stretch",
        justify: "start"
      }, {
        default: So(() => [
          zt(Ce(k), null, {
            default: So(() => [
              zt(Ce(F), {
                justify: "between",
                class: "sx-translation-confirmer__article-information__header ma-0 mb-2"
              }, {
                default: So(() => [
                  zt(Ce(k), {
                    class: "pa-0 pe-4 flex sx-translation-confirmer__article-information__title",
                    tag: "a",
                    href: m.value,
                    target: "_blank"
                  }, {
                    default: So(() => [
                      $n("h5", {
                        class: "ma-0 me-1",
                        textContent: cl(Ce(a))
                      }, null, 8, r4),
                      zt(Ce(bs), {
                        size: "x-small",
                        icon: Ce(Kc)
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  zt(Ce(k), {
                    shrink: "",
                    align: "start"
                  }, {
                    default: So(() => [
                      zt(Ce(g4), {
                        class: "px-0",
                        weight: "quiet",
                        action: l.value ? "progressive" : "default",
                        "aria-label": S.$i18n("cx-sx-translation-confirmer-bookmark-button-aria-label"),
                        onClick: p.value
                      }, {
                        default: So(() => [
                          zt(Ce(bs), { icon: g.value }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["action", "aria-label", "onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              $n("div", l4, [
                $n("div", null, [
                  $n("span", null, [
                    zt(Ce(bs), {
                      icon: Ce(Dh),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    $n("span", {
                      class: "pe-3",
                      textContent: cl(h.value)
                    }, null, 8, c4)
                  ]),
                  $n("span", null, [
                    zt(Ce(bs), {
                      icon: Ce(XS),
                      size: "small",
                      class: "me-1"
                    }, null, 8, ["icon"]),
                    n4($n("span", u4, null, 512), [
                      [E, [w.value], "cx-sx-translation-confirmer-views-count"]
                    ])
                  ])
                ]),
                Ce(v) ? (Jg(), s4("span", {
                  key: 0,
                  class: o4(["sx-translation-confirmer__article-information__stats__time-estimate", {
                    "sx-translation-confirmer__article-information__stats__time-estimate--quick": Ce(y)
                  }])
                }, [
                  zt(Ce(bs), {
                    icon: Ce(KS),
                    size: "small",
                    class: "me-1"
                  }, null, 8, ["icon"]),
                  $n("span", {
                    textContent: cl(Ce(v))
                  }, null, 8, d4)
                ], 2)) : a4("", !0)
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
const h4 = window.Vue.resolveDirective, Wn = window.Vue.createElementVNode, Za = window.Vue.withDirectives, f4 = window.Vue.toDisplayString, w4 = window.Vue.createTextVNode, ul = window.Vue.unref, dl = window.Vue.withCtx, gl = window.Vue.openBlock, pl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const v4 = { class: "pa-4" }, _4 = { class: "flex pt-2" }, S4 = window.Codex.CdxButton, y4 = window.Vue.ref, x4 = {
  __name: "SXConfirmTranslationStartDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = t, o = () => n("update:modelValue", !1), s = Yo(), a = au(), r = y4(!1), { currentTranslation: l } = Mt(), u = () => b(this, null, function* () {
      r.value = !0;
      let d = !1;
      try {
        d = yield vt.splitTranslation(
          l.value.translationId
        );
      } catch (i) {
        mw.log.error(
          "[CX] Error while splitting the translation into section translations",
          i
        );
      }
      r.value = !1, d && (a(), s(), o());
    });
    return (d, i) => {
      const c = h4("i18n");
      return gl(), pl(ul(_t), {
        value: e.modelValue,
        persistent: r.value,
        class: "sx-confirm-translation-start-dialog",
        "min-height": "unset",
        title: d.$i18n("sx-confirm-draft-translation-start-dialog-title"),
        onClose: o
      }, {
        footer: dl(() => [
          Wn("div", _4, [
            r.value ? (gl(), pl(ul(it), { key: 1 })) : (gl(), pl(ul(S4), {
              key: 0,
              class: "sx-confirm-translation-start-dialog__confirm-button grow",
              size: "large",
              onClick: u
            }, {
              default: dl(() => [
                w4(f4(d.$i18n("sx-confirm-draft-translation-start-button-label")), 1)
              ]),
              _: 1
            }))
          ])
        ]),
        default: dl(() => [
          Wn("div", v4, [
            Za(Wn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-subtitle"]
            ]),
            Za(Wn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-first-line"]
            ]),
            Wn("p", null, [
              Za(Wn("strong", null, null, 512), [
                [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-second-line"]
              ])
            ]),
            Za(Wn("p", null, null, 512), [
              [c, void 0, "sx-confirm-draft-translation-start-dialog-explanation-third-line"]
            ])
          ])
        ]),
        _: 1
      }, 8, ["value", "persistent", "title"]);
    };
  }
}, C4 = window.Vuex.useStore;
let ei = [];
const iu = () => {
  const e = C4();
  return (t, n) => {
    const o = `${t}:${n}`;
    return e.getters["mediawiki/getLanguageTitleGroup"](t, n) || ei.includes(o) ? Promise.resolve() : (ei.push(o), io.fetchLanguageTitles(t, n).then((s) => {
      ei = ei.filter(
        (a) => a !== o
      ), s && e.commit("mediawiki/addLanguageTitleGroup", s);
    }));
  };
}, b4 = window.Vue.ref, yo = b4(null), Vf = () => {
  const e = () => b(void 0, null, function* () {
    var n, o;
    yo.value || (yield ji.fetchCXServerToken().then((s) => {
      s.age <= 30 && (s.age = 3600);
      const a = Math.floor(Date.now() / 1e3);
      s.refreshAt = a + s.age - 30, yo.value = s;
    }).catch((s) => {
      if (s === "token-impossible") {
        const a = Math.floor(Date.now() / 1e3);
        yo.value = { jwt: "", refreshAt: a + 36e3 };
      }
    }));
    const t = Math.floor(Date.now() / 1e3);
    return ((n = yo.value) == null ? void 0 : n.refreshAt) <= t ? (yo.value = null, e()) : (o = yo.value) == null ? void 0 : o.jwt;
  });
  return e;
};
const Zg = window.Vue.resolveDirective, ti = window.Vue.createElementVNode, ep = window.Vue.withDirectives, Vn = window.Vue.unref, ni = window.Vue.withCtx, an = window.Vue.createVNode, ml = window.Vue.openBlock, tp = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const k4 = window.Vue.createBlock, $4 = { class: "sx-translation-confirmer col-12 col-tablet-9 col-desktop-7 mx-auto" }, V4 = { class: "mb-0" }, E4 = { class: "sx-translation-confirmer__article-image flex justify-center" }, L4 = ["src"], A4 = { class: "ma-3" }, np = window.Vue.computed, D4 = window.Vue.inject, T4 = window.Vue.onBeforeUnmount, B4 = window.Vue.ref, P4 = window.Vuex.useStore, F4 = {
  __name: "SXTranslationConfirmer",
  setup(e) {
    const t = P4(), { currentSourcePage: n } = lt(), { previousRoute: o } = Ae(t), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      pageURLParameter: r,
      sectionURLParameter: l,
      clearTranslationURLParameters: u
    } = B(), d = D4("breakpoints"), i = np(() => d.value.nextBreakpoint), c = np(
      () => {
        var y;
        return (y = n.value) == null ? void 0 : y.getImage(i.value);
      }
    ), { fetchTranslationsByStatus: g } = Ko(), p = iu();
    g("draft"), p(s.value, r.value), su(), Vf()(), Bh()(a.value);
    const f = qe(), w = () => {
      const y = ["dashboard", "sx-article-search"];
      !o.value || !y.includes(o.value) ? f.push({ name: "dashboard" }) : f.push({ name: o.value });
    };
    T4(() => {
      const y = f.currentRoute.value.name;
      (y === "dashboard" || y === "sx-article-search") && u();
    });
    const v = B4(!1);
    return (y, S) => {
      const x = Zg("i18n"), E = Zg("i18n-html");
      return ml(), tp("section", $4, [
        an(Vn(F), {
          class: "sx-translation-confirmer__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: ni(() => [
            an(Vn(k), {
              grow: "",
              class: "px-4",
              align: "center"
            }, {
              default: ni(() => [
                ep(ti("h5", V4, null, 512), [
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
              default: ni(() => [
                an(Vn(Me), {
                  class: "pa-0",
                  type: "icon",
                  icon: Vn(ra),
                  "icon-size": 20,
                  onClick: w
                }, null, 8, ["icon"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        ti("div", E4, [
          c.value ? (ml(), tp("img", {
            key: 0,
            src: c.value
          }, null, 8, L4)) : (ml(), k4(Vn(je), {
            key: 1,
            size: "120",
            icon: Vn(eh),
            "icon-color": y.$mwui.colors.blue600
          }, null, 8, ["icon", "icon-color"]))
        ]),
        an(m4),
        an($f),
        an(KV, {
          onOpenTranslationConfirmationDialog: S[0] || (S[0] = (C) => v.value = !0)
        }),
        an(Vn(F), {
          justify: "center",
          class: "sx-translation-confirmer__license ma-0"
        }, {
          default: ni(() => [
            ti("p", A4, [
              ep(ti("small", null, null, 512), [
                [E, void 0, "cx-license-agreement"]
              ])
            ])
          ]),
          _: 1
        }),
        an(x4, {
          modelValue: v.value,
          "onUpdate:modelValue": S[1] || (S[1] = (C) => v.value = C)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const M4 = {
  name: "SxTranslationConfirmerView",
  components: {
    SxTranslationConfirmer: F4
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, N4 = window.Vue.resolveComponent, U4 = window.Vue.createVNode, I4 = window.Vue.normalizeClass, R4 = window.Vue.openBlock, z4 = window.Vue.createElementBlock;
function O4(e, t, n, o, s, a) {
  const r = N4("sx-translation-confirmer");
  return R4(), z4("main", {
    class: I4(["sx-translation-confirmer-view", a.classes])
  }, [
    U4(r)
  ], 2);
}
const j4 = /* @__PURE__ */ oe(M4, [["render", O4]]);
const H4 = window.Vue.toDisplayString, op = window.Vue.unref, q4 = window.Vue.createVNode, G4 = window.Vue.createTextVNode, X4 = window.Vue.createElementVNode, W4 = window.Vue.openBlock, K4 = window.Vue.createElementBlock, Y4 = { class: "sx-section-selector-view-article-item" }, Q4 = ["href"], J4 = window.Codex.CdxIcon, sp = {
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
    return (t, n) => (W4(), K4("span", Y4, [
      X4("a", {
        href: e.path,
        target: "_blank",
        class: "justify-between items-center py-3 px-4"
      }, [
        G4(H4(t.$i18n("cx-sx-section-selector-view-article-button-label", e.autonym)) + " ", 1),
        q4(op(J4), {
          size: "x-small",
          icon: op(Kc)
        }, null, 8, ["icon"])
      ], 8, Q4)
    ]));
  }
};
const Z4 = window.Vue.resolveDirective, oi = window.Vue.createElementVNode, hl = window.Vue.withDirectives, Kn = window.Vue.unref, eE = window.Vue.toDisplayString, si = window.Vue.withCtx, ks = window.Vue.createVNode, tE = window.Vue.openBlock, nE = window.Vue.createElementBlock, oE = { class: "sx-section-selector__header pa-4" }, sE = { class: "sx-section-selector__header-text ma-0" }, aE = ["textContent"], iE = { class: "pt-0 ma-0" }, rE = { class: "ma-0" }, lE = window.Codex.CdxButton, cE = window.Codex.CdxIcon, uE = {
  __name: "SXSectionSelectorHeader",
  emits: ["close"],
  setup(e) {
    const { sectionSuggestion: t } = Ge();
    return (n, o) => {
      const s = Z4("i18n");
      return tE(), nE("div", oE, [
        ks(Kn(F), { class: "ma-0 pb-3" }, {
          default: si(() => [
            ks(Kn(k), null, {
              default: si(() => {
                var a;
                return [
                  hl(oi("h6", sE, null, 512), [
                    [s, void 0, "cx-sx-section-selector-title"]
                  ]),
                  oi("h2", {
                    class: "sx-section-selector__title ma-0 py-0",
                    textContent: eE((a = Kn(t)) == null ? void 0 : a.sourceTitle)
                  }, null, 8, aE)
                ];
              }),
              _: 1
            }),
            ks(Kn(k), {
              shrink: "",
              class: "justify-end"
            }, {
              default: si(() => [
                ks(Kn(lE), {
                  weight: "quiet",
                  "aria-label": n.$i18n("sx-section-selector-close-button-aria-label"),
                  onClick: o[0] || (o[0] = (a) => n.$emit("close"))
                }, {
                  default: si(() => [
                    ks(Kn(cE), { icon: Kn(Wo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        hl(oi("h4", iE, null, 512), [
          [s, void 0, "cx-sx-section-selector-subtitle"]
        ]),
        hl(oi("p", rE, null, 512), [
          [s, void 0, "cx-sx-section-selector-desc"]
        ])
      ]);
    };
  }
}, dE = window.Vue.renderList, gE = window.Vue.Fragment, fl = window.Vue.openBlock, ap = window.Vue.createElementBlock, pE = window.Vue.renderSlot, ai = window.Vue.unref, ip = window.Vue.createVNode, rp = window.Vue.withCtx, mE = window.Vue.createBlock, hE = { class: "sx-section-selector__sections-list ma-0 pa-0" }, fE = window.Codex.CdxButton, wE = window.Codex.CdxIcon, Ef = {
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
    return (t, n) => (fl(), ap("ul", hE, [
      (fl(!0), ap(gE, null, dE(e.sections, (o) => (fl(), mE(ai(F), {
        key: o.sourceTitle,
        tag: "li",
        class: "ma-0"
      }, {
        default: rp(() => [
          ip(ai(fE), {
            weight: "quiet",
            class: "col justify-between items-center py-3 px-4",
            "aria-label": t.$i18n("sx-section-selector-next-button-aria-label"),
            onClick: (s) => t.$emit("select-section", o.sourceTitle)
          }, {
            default: rp(() => [
              pE(t.$slots, "default", {
                targetSection: o.targetTitle,
                sourceSection: o.sourceTitle
              }),
              ip(ai(wE), { icon: ai(pa) }, null, 8, ["icon"])
            ]),
            _: 2
          }, 1032, ["aria-label", "onClick"])
        ]),
        _: 2
      }, 1024))), 128))
    ]));
  }
}, vE = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>sad-robot</title>
    <g id="sad-robot" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#EAECF0" cx="68" cy="68" r="68"></circle>
        <path d="M70,40.99684 L96.02,40.99684 C100.428,40.99684 104,44.58084 104,48.98484 L104,82.99684 L74,82.99684 L74,92.99684 L96.02,92.99684 C100.428,92.99684 104,96.54884 104,100.99684 L104,108.99684 L32,108.99684 L32,100.99684 C32,96.57684 35.572,92.99684 39.98,92.99684 L62,92.99684 L62,82.99684 L32,82.99684 L32,48.98484 C32,44.57284 35.572,40.99684 39.98,40.99684 L66,40.99684 L66,32.65684 C63.244908,31.68276 61.59226,28.86552 62.086412,25.98536 C62.580564,23.10524 65.077784,21 68,21 C70.9222,21 73.41944,23.10524 73.9136,25.98536 C74.40776,28.86552 72.75508,31.68276 70,32.65684 L70,40.99684 Z M62,78 C62,74.6862915 64.6862915,72 68,72 C71.3137085,72 74,74.6862915 74,78 M54,64.99684 C57.313708,64.99684 60,62.310548 60,58.99684 C60,55.68312 57.313708,52.99684 54,52.99684 C50.686292,52.99684 48,55.68312 48,58.99684 C48,62.310548 50.686292,64.99684 54,64.99684 Z M82,64.99684 C85.31372,64.99684 88,62.310548 88,58.99684 C88,55.68312 85.31372,52.99684 82,52.99684 C78.68628,52.99684 76,55.68312 76,58.99684 C76,62.310548 78.68628,64.99684 82,64.99684 Z" fill="#54595D"></path>
    </g>
</svg>`;
const _E = window.Vue.resolveDirective, ii = window.Vue.createElementVNode, wl = window.Vue.withDirectives, Et = window.Vue.unref, lp = window.Vue.toDisplayString, xo = window.Vue.withCtx, vl = window.Vue.openBlock, cp = window.Vue.createBlock;
window.Vue.createCommentVNode;
const $s = window.Vue.createVNode, SE = window.Vue.createTextVNode, yE = window.Vue.createElementBlock, xE = { class: "sx-section-selector__missing-sections py-2" }, CE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, bE = ["lang", "dir", "textContent"], up = window.Vue.computed, kE = window.Codex.CdxButton, $E = {
  __name: "SXSectionSelectorSectionListMissing",
  emits: ["select-section", "close"],
  setup(e) {
    const { sectionSuggestion: t } = Ge(), { targetLanguageURLParameter: n } = B(), o = up(() => z.getAutonym(n.value)), s = up(
      () => {
        var a;
        return Object.keys(((a = t.value) == null ? void 0 : a.missingSections) || {}).length === 0;
      }
    );
    return (a, r) => {
      const l = _E("i18n");
      return vl(), yE("section", xE, [
        wl(ii("h4", CE, null, 512), [
          [l, [
            o.value
          ], "cx-sx-section-selector-missing-sections-title"]
        ]),
        s.value ? (vl(), cp(Et(F), {
          key: 1,
          class: "sx-section-selector__empty-missing-sections px-4 my-0"
        }, {
          default: xo(() => [
            $s(Et(k), {
              class: "py-6 justify-center",
              innerHTML: Et(vE)
            }, null, 8, ["innerHTML"]),
            $s(Et(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0"
            }, {
              default: xo(() => [
                wl(ii("h6", null, null, 512), [
                  [l, void 0, "cx-sx-section-selector-empty-missing-sections-title"]
                ])
              ]),
              _: 1
            }),
            $s(Et(k), {
              cols: "12",
              class: "sx-section-selector__empty-missing-sections-details pa-0 mb-2"
            }, {
              default: xo(() => [
                wl(ii("p", null, null, 512), [
                  [l, void 0, "cx-sx-section-selector-empty-missing-sections-desc"]
                ])
              ]),
              _: 1
            }),
            $s(Et(k), {
              cols: "12",
              class: "pa-0 mb-2"
            }, {
              default: xo(() => [
                $s(Et(kE), {
                  weight: "quiet",
                  action: "progressive",
                  class: "px-0",
                  onClick: r[1] || (r[1] = (u) => a.$emit("close"))
                }, {
                  default: xo(() => [
                    SE(lp(a.$i18n("cx-sx-section-selector-pick-other-translation-button-label")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : (vl(), cp(Ef, {
          key: 0,
          sections: Et(t).orderedMissingSections,
          onSelectSection: r[0] || (r[0] = (u) => a.$emit("select-section", u))
        }, {
          default: xo(({ sourceSection: u }) => {
            var d, i;
            return [
              ii("h5", {
                class: "ma-0",
                lang: (d = Et(t)) == null ? void 0 : d.sourceLanguage,
                dir: Et(z.getDir)((i = Et(t)) == null ? void 0 : i.sourceLanguage),
                textContent: lp(u)
              }, null, 8, bE)
            ];
          }),
          _: 1
        }, 8, ["sections"]))
      ]);
    };
  }
};
const VE = window.Vue.resolveDirective, ri = window.Vue.createElementVNode, EE = window.Vue.withDirectives, Yn = window.Vue.unref, dp = window.Vue.toDisplayString, LE = window.Vue.withCtx, AE = window.Vue.createVNode, DE = window.Vue.openBlock, TE = window.Vue.createElementBlock, BE = { class: "sx-section-selector__present-sections py-2" }, PE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, FE = { class: "sx-section-selector__present-section-button-content" }, ME = ["lang", "dir", "textContent"], NE = ["lang", "dir", "textContent"], UE = window.Vue.computed, gp = {
  __name: "SXSectionSelectorSectionListPresent",
  emits: ["select-section"],
  setup(e) {
    const { sectionSuggestion: t } = Ge(), { targetLanguageURLParameter: n } = B(), o = UE(() => z.getAutonym(n.value));
    return (s, a) => {
      var l;
      const r = VE("i18n");
      return DE(), TE("section", BE, [
        EE(ri("h4", PE, null, 512), [
          [r, [
            o.value
          ], "cx-sx-section-selector-present-sections-title"]
        ]),
        AE(Ef, {
          sections: ((l = Yn(t)) == null ? void 0 : l.orderedPresentSections) || [],
          onSelectSection: a[0] || (a[0] = (u) => s.$emit("select-section", u))
        }, {
          default: LE(({ sourceSection: u, targetSection: d }) => {
            var i, c, g, p;
            return [
              ri("div", FE, [
                ri("h5", {
                  class: "sx-section-selector__present-section-button-source",
                  lang: (i = Yn(t)) == null ? void 0 : i.sourceLanguage,
                  dir: Yn(z.getDir)((c = Yn(t)) == null ? void 0 : c.sourceLanguage),
                  textContent: dp(u)
                }, null, 8, ME),
                ri("h6", {
                  class: "sx-section-selector__present-section-button-target",
                  lang: (g = Yn(t)) == null ? void 0 : g.targetLanguage,
                  dir: Yn(z.getDir)((p = Yn(t)) == null ? void 0 : p.targetLanguage),
                  textContent: dp(d)
                }, null, 8, NE)
              ])
            ];
          }),
          _: 1
        }, 8, ["sections"])
      ]);
    };
  }
};
const Pe = window.Vue.createVNode, _l = window.Vue.openBlock, pp = window.Vue.createBlock, mp = window.Vue.createCommentVNode, IE = window.Vue.resolveDirective, En = window.Vue.createElementVNode, Vs = window.Vue.withDirectives, Ze = window.Vue.unref, rn = window.Vue.withCtx, RE = window.Vue.normalizeClass, hp = window.Vue.toDisplayString, fp = window.Vue.createTextVNode, zE = window.Vue.createElementBlock, OE = { class: "sx-section-selector col-12 col-tablet-9 col-desktop-7 mx-auto" }, jE = { class: "sx-section-selector__list-title mb-0 pb-0 py-3 px-4" }, HE = { class: "sx-section-selector__additional-consideration-title" }, qE = { href: "#" }, GE = { class: "sx-section-selector__additional-consideration-title" }, XE = { href: "#" }, Es = window.Vue.computed, WE = window.Vue.inject, KE = {
  __name: "SXSectionSelector",
  setup(e) {
    const t = WE("breakpoints"), n = Es(() => t.value.desktopAndUp), { sectionSuggestion: o } = Ge(), {
      sourceLanguageURLParameter: s,
      targetLanguageURLParameter: a,
      clearTranslationURLParameters: r,
      setSectionURLParam: l
    } = B(), u = Es(() => z.getAutonym(s.value)), d = Es(() => z.getAutonym(a.value)), i = Es(
      () => {
        var y;
        return Q.getPageUrl(s.value, (y = o.value) == null ? void 0 : y.sourceTitle);
      }
    ), c = Es(
      () => {
        var y;
        return Q.getPageUrl(a.value, (y = o.value) == null ? void 0 : y.targetTitle);
      }
    ), g = qe(), p = () => {
      r(), g.push({ name: "dashboard" });
    }, { currentTranslation: m } = Mt(), h = Yo(), f = au(), { selectPageSectionByTitle: w } = Ki(), v = (y) => {
      l(y), m.value ? (f(), h()) : (w(y), g.push({ name: "sx-content-comparator" }));
    };
    return (y, S) => {
      const x = IE("i18n");
      return _l(), zE("section", OE, [
        Pe(uE, { onClose: p }),
        Pe($f),
        Pe(Ze(F), {
          class: "ma-0",
          align: "stretch"
        }, {
          default: rn(() => [
            Pe(Ze(k), {
              cols: "12",
              desktop: "8",
              class: "ma-0 pa-0"
            }, {
              default: rn(() => [
                Pe($E, {
                  onSelectSection: v,
                  onClose: p
                }),
                n.value ? mp("", !0) : (_l(), pp(gp, {
                  key: 0,
                  onSelectSection: v
                })),
                En("section", {
                  class: RE(["py-2", { "sx-section-selector__more-details--desktop": n.value }])
                }, [
                  Vs(En("h4", jE, null, 512), [
                    [x, [
                      d.value
                    ], "cx-sx-section-selector-more-details-title"]
                  ]),
                  Pe(Ze(F), {
                    class: "ma-0",
                    align: "start",
                    justify: "start"
                  }, {
                    default: rn(() => [
                      Pe(Ze(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: rn(() => [
                          Pe(sp, {
                            path: i.value,
                            autonym: u.value
                          }, null, 8, ["path", "autonym"])
                        ]),
                        _: 1
                      }),
                      Pe(Ze(k), {
                        cols: "12",
                        tablet: "6",
                        class: "pa-0"
                      }, {
                        default: rn(() => [
                          Pe(sp, {
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
                Pe(Ze(F), {
                  class: "sx-section-selector__additional-considerations ma-0",
                  align: "stretch"
                }, {
                  default: rn(() => [
                    Pe(Ze(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 pt-5 pb-4"
                    }, {
                      default: rn(() => [
                        En("h6", HE, [
                          Pe(Ze(je), {
                            icon: Ze(L0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          fp(" " + hp(y.$i18n("cx-sx-section-selector-automatic-section-matching-title")), 1)
                        ]),
                        Vs(En("p", null, null, 512), [
                          [x, void 0, "cx-sx-section-selector-automatic-section-matching-description"]
                        ]),
                        Vs(En("a", qE, null, 512), [
                          [x, void 0, "cx-sx-section-selector-learn-more-anchor-label"]
                        ])
                      ]),
                      _: 1
                    }),
                    Pe(Ze(k), {
                      cols: "12",
                      tablet: "6",
                      class: "px-4 py-5"
                    }, {
                      default: rn(() => [
                        En("h6", GE, [
                          Pe(Ze(je), {
                            icon: Ze(E0),
                            class: "pe-2"
                          }, null, 8, ["icon"]),
                          fp(" " + hp(y.$i18n("cx-sx-section-selector-unsupported-sections-title")), 1)
                        ]),
                        Vs(En("p", null, null, 512), [
                          [x, void 0, "cx-sx-section-selector-unsupported-sections-description"]
                        ]),
                        Vs(En("a", XE, null, 512), [
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
            n.value ? (_l(), pp(Ze(k), {
              key: 0,
              desktop: "4",
              class: "ma-0 pa-0"
            }, {
              default: rn(() => [
                Pe(gp, {
                  class: "sx-section-selector-section-list-present--sidebar fill-height p-0",
                  onSelectSection: v
                })
              ]),
              _: 1
            })) : mp("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
}, YE = {
  name: "SxSectionSelectorView",
  components: {
    SxSectionSelector: KE
  },
  computed: {
    classes() {
      return {
        fullscreen: this.$mwui.breakpoint.mobile
      };
    }
  }
}, QE = window.Vue.resolveComponent, JE = window.Vue.createVNode, ZE = window.Vue.normalizeClass, e3 = window.Vue.openBlock, t3 = window.Vue.createElementBlock;
function n3(e, t, n, o, s, a) {
  const r = QE("sx-section-selector");
  return e3(), t3("main", {
    class: ZE(["sx-section-selector-view", a.classes])
  }, [
    JE(r)
  ], 2);
}
const o3 = /* @__PURE__ */ oe(YE, [["render", n3]]), s3 = window.Vue.ref, Lf = s3("expand"), a3 = (e) => {
  Lf.value = e;
}, ru = () => ({
  existingSectionPublishOption: Lf,
  setExistingSectionPublishOption: a3
}), li = window.Vue.computed, i3 = () => {
  const {
    sourceLanguageURLParameter: e,
    targetLanguageURLParameter: t
  } = B(), n = li(
    () => z.getAutonym(e.value)
  ), o = li(
    () => z.getAutonym(t.value)
  ), { isCurrentSectionPresent: s } = Ge(), { existingSectionPublishOption: a } = ru(), r = li(
    () => s.value && a.value === "expand"
  ), l = ce();
  return li(() => {
    const u = {
      value: "source_section",
      props: {
        label: l.i18n(
          "cx-sx-content-comparator-source-selector-title",
          n.value
        ),
        type: "text",
        class: "px-0 py-4 mx-4"
      }
    };
    let d;
    switch (!0) {
      case r.value:
        d = {
          value: "target_section",
          props: {
            label: l.i18n(
              "cx-sx-content-comparator-target-selector-target-section-title",
              o.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
        break;
      default:
        d = {
          value: "target_article",
          props: {
            label: l.i18n(
              "cx-sx-content-comparator-target-selector-full-article-title",
              o.value
            ),
            type: "text",
            class: "px-0 py-4 mx-4"
          }
        };
    }
    return [u, d];
  });
};
const wp = window.Vue.unref, r3 = window.Vue.createVNode, l3 = window.Vue.openBlock, c3 = window.Vue.createElementBlock, u3 = { class: "sx-content-comparator__content-type-selector" }, d3 = window.Vue.watchEffect, g3 = {
  __name: "ContentTypeSelector",
  props: {
    selection: {
      type: String,
      required: !0
    }
  },
  emits: ["update:selection"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = (r) => o("update:selection", r), a = i3();
    return d3(() => {
      a.value.map((l) => l.value).includes(n.selection) || s(a.value[0].value);
    }), (r, l) => (l3(), c3("div", u3, [
      r3(wp(ia), {
        items: wp(a),
        active: e.selection,
        onSelect: s
      }, null, 8, ["items", "active"])
    ]));
  }
}, Ls = window.Vue.computed, p3 = window.Vuex.useStore, te = () => {
  const e = p3(), { currentSourcePage: t, currentTargetPage: n } = lt(), { currentMTProvider: o } = Ae(e), { sectionURLParameter: s } = B(), a = Ls(() => {
    var i, c;
    return s.value ? (c = t.value) == null ? void 0 : c.getSectionByTitle(s.value) : (i = t.value) == null ? void 0 : i.leadSection;
  }), r = Ls(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.isTitleSelected;
    }
  ), l = Ls(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.selectedContentTranslationUnit;
    }
  ), u = Ls(
    () => {
      var i;
      return (i = a.value) == null ? void 0 : i.getProposedTranslationByMtProvider(
        o.value
      );
    }
  ), d = Ls(() => a.value.isLeadSection ? a.value.title : n.value.title);
  return {
    sourceSection: a,
    isSectionTitleSelected: r,
    selectedContentTranslationUnit: l,
    currentProposedTranslation: u,
    targetPageTitleForPublishing: d
  };
}, As = window.Vue.computed, lu = () => {
  const { currentTargetPage: e } = lt(), { sectionSuggestion: t } = Ge(), { sectionURLParameter: n } = B(), o = As(
    () => t.value.missingSections[n.value] || t.value.presentSections[n.value] || ""
  ), s = As(
    () => {
      var d;
      return (((d = a.value) == null ? void 0 : d.title) || "").replace(/ /g, "_");
    }
  ), a = As(
    () => {
      var d;
      return (d = e.value) == null ? void 0 : d.getSectionByTitle(o.value);
    }
  ), { sourceSection: r } = te(), l = As(() => {
    var d;
    return (d = r.value) == null ? void 0 : d.html;
  }), u = As(() => {
    var d;
    return (d = a.value) == null ? void 0 : d.html;
  });
  return {
    activeSectionTargetTitle: o,
    sourceSectionContent: l,
    targetSectionAnchor: s,
    targetSectionContent: u
  };
};
const ci = window.Vue.createVNode, m3 = window.Vue.toDisplayString, h3 = window.Vue.createElementVNode, Ln = window.Vue.unref, ui = window.Vue.withCtx, Sl = window.Vue.openBlock, yl = window.Vue.createBlock;
window.Vue.createCommentVNode;
const f3 = window.Vue.normalizeClass, w3 = ["lang", "dir", "textContent"], vp = window.Vue.ref, xl = window.Vue.computed, v3 = window.Vue.onMounted, _3 = {
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
    const n = e, o = t, s = vp(!1), { sectionSuggestion: a } = Ge(), { sectionURLParameter: r } = B(), l = xl(
      () => (r.value || "").replace(/ /g, "_")
    ), u = (m) => o("update:contentTypeSelection", m), { activeSectionTargetTitle: d, targetSectionAnchor: i } = lu(), c = xl(() => {
      switch (n.contentTypeSelection) {
        case "source_section":
          return {
            title: r.value,
            path: `${Q.getPageUrl(
              a.value.sourceLanguage,
              a.value.sourceTitle
            )}#${l.value}`,
            lang: a.value.sourceLanguage,
            dir: z.getDir(a.value.sourceLanguage)
          };
        case "target_article":
          return {
            title: a.value.targetTitle,
            path: g.value,
            lang: a.value.targetLanguage,
            dir: z.getDir(a.value.targetLanguage)
          };
        default:
          return {
            title: d.value,
            path: `${g.value}#${i.value}`
          };
      }
    }), g = xl(
      () => Q.getPageUrl(
        a.value.targetLanguage,
        a.value.targetTitle
      )
    ), p = vp(null);
    return v3(() => {
      new IntersectionObserver(
        ([h]) => {
          s.value = h.intersectionRect.height < h.boundingClientRect.height;
        },
        { threshold: [1] }
      ).observe(p.value.$el);
    }), (m, h) => (Sl(), yl(Ln(F), {
      ref_key: "contentHeader",
      ref: p,
      class: f3(["sx-content-comparator__content-header ma-0 pt-1", { sticky: s.value }]),
      direction: "column",
      align: "stretch",
      reverse: s.value
    }, {
      default: ui(() => [
        ci(g3, {
          selection: e.contentTypeSelection,
          "onUpdate:selection": u
        }, null, 8, ["selection"]),
        ci(Ln(F), {
          justify: "between",
          class: "sx-content-comparator__content-header-title mx-4 my-0 pt-4 pb-2"
        }, {
          default: ui(() => [
            ci(Ln(k), null, {
              default: ui(() => [
                h3("h3", {
                  lang: c.value.lang,
                  dir: c.value.dir,
                  class: "ma-0 pa-0",
                  textContent: m3(c.value.title)
                }, null, 8, w3)
              ]),
              _: 1
            }),
            ci(Ln(k), { shrink: "" }, {
              default: ui(() => [
                s.value ? (Sl(), yl(Ln(Me), {
                  key: 0,
                  icon: Ln(Ni),
                  progressive: "",
                  label: m.$i18n(
                    "cx-sx-content-comparator-content-header-translate-button-label"
                  ),
                  onClick: h[0] || (h[0] = (f) => m.$emit("translation-button-clicked"))
                }, null, 8, ["icon", "label"])) : (Sl(), yl(Ln(Me), {
                  key: 1,
                  class: "sx-content-comparator__open-content-link-button pa-0 pe-2",
                  icon: Ln(Jm),
                  type: "icon",
                  href: c.value.path,
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
}, di = window.Vue.unref, _p = window.Vue.createVNode, S3 = window.Vue.openBlock, y3 = window.Vue.createElementBlock, x3 = { class: "sx-content-comparator__header-navigation flex items-center" }, C3 = window.Vue.computed, b3 = {
  __name: "SXContentComparatorHeaderNavigation",
  props: {
    sectionSourceTitles: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, { sectionURLParameter: n } = B(), o = C3(
      () => t.sectionSourceTitles.indexOf(n.value)
    ), { selectPageSectionByTitle: s } = Ki(), a = () => {
      const l = (o.value - 1 + t.sectionSourceTitles.length) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    }, r = () => {
      const l = (o.value + 1) % t.sectionSourceTitles.length, u = t.sectionSourceTitles[l];
      s(u);
    };
    return (l, u) => (S3(), y3("div", x3, [
      _p(di(Me), {
        class: "pa-0 pe-1",
        type: "icon",
        icon: di(b0),
        onClick: a
      }, null, 8, ["icon"]),
      _p(di(Me), {
        class: "pa-0 ps-1",
        type: "icon",
        icon: di(C0),
        onClick: r
      }, null, 8, ["icon"])
    ]));
  }
};
const Sp = window.Vue.toDisplayString, k3 = window.Vue.resolveDirective, Cl = window.Vue.withDirectives, Co = window.Vue.openBlock, gi = window.Vue.createElementBlock, $3 = window.Vue.createCommentVNode, V3 = window.Vue.createTextVNode, yp = window.Vue.createElementVNode, Ot = window.Vue.unref, E3 = window.Vue.normalizeClass, bl = window.Vue.withCtx, kl = window.Vue.createVNode, xp = window.Vue.createBlock, L3 = { class: "sx-content-comparator-header__mapped-section" }, A3 = { class: "sx-content-comparator-header__mapped-section-header-title pa-0 mb-1 ms-1" }, D3 = { key: 0 }, T3 = {
  key: 0,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, B3 = {
  key: 1,
  class: "sx-content-comparator-header__mapped-section-clarifications pa-3 ma-0 complementary"
}, Cp = window.Vue.computed, P3 = {
  __name: "SXContentComparatorHeaderMappedSection",
  setup(e) {
    const { targetLanguageURLParameter: t } = B(), { activeSectionTargetTitle: n } = lu(), o = ce(), { existingSectionPublishOption: s, setExistingSectionPublishOption: a } = ru(), r = Cp(
      () => s.value === "new"
    ), l = Cp(
      () => o.i18n(
        "cx-sx-content-comparator-mapped-section-header-title",
        z.getAutonym(t.value)
      )
    );
    return (u, d) => {
      const i = k3("i18n");
      return Co(), gi("div", L3, [
        kl(Ot(F), { class: "sx-content-comparator-header__mapped-section-header pa-2 ma-0" }, {
          default: bl(() => [
            kl(Ot(k), { grow: "" }, {
              default: bl(() => [
                yp("h6", A3, [
                  V3(Sp(l.value) + " ", 1),
                  r.value ? Cl((Co(), gi("span", D3, null, 512)), [
                    [i, void 0, "cx-sx-content-comparator-discarded-section-label"]
                  ]) : $3("", !0)
                ]),
                yp("h6", {
                  class: E3(["sx-content-comparator-header__mapped-section-target-title pa-0 ms-1", {
                    "sx-content-comparator-header__mapped-section-target-title--discarded": r.value
                  }])
                }, Sp(Ot(n)), 3)
              ]),
              _: 1
            }),
            kl(Ot(k), { shrink: "" }, {
              default: bl(() => [
                r.value ? (Co(), xp(Ot(Me), {
                  key: 1,
                  class: "sx-content-comparator-header__mapped-section__undo-button pa-0",
                  icon: Ot(T0),
                  type: "icon",
                  onClick: d[1] || (d[1] = (c) => Ot(a)("expand"))
                }, null, 8, ["icon"])) : (Co(), xp(Ot(Me), {
                  key: 0,
                  class: "sx-content-comparator-header__mapped-section__discard-button pa-0",
                  icon: Ot(Qm),
                  type: "icon",
                  onClick: d[0] || (d[0] = (c) => Ot(a)("new"))
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        r.value ? Cl((Co(), gi("p", B3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-discarded-section-clarifications"]
        ]) : Cl((Co(), gi("p", T3, null, 512)), [
          [i, void 0, "cx-sx-content-comparator-mapped-section-clarifications"]
        ])
      ]);
    };
  }
};
const Ee = window.Vue.unref, bo = window.Vue.createVNode, bp = window.Vue.toDisplayString, hn = window.Vue.createElementVNode, $l = window.Vue.withCtx, F3 = window.Vue.resolveDirective, kp = window.Vue.withDirectives, Vl = window.Vue.openBlock, $p = window.Vue.createBlock, Vp = window.Vue.createCommentVNode, M3 = window.Vue.createElementBlock, N3 = { class: "sx-content-comparator__header pa-4" }, U3 = { class: "row my-1 py-2 mx-0 gap-6" }, I3 = { class: "sx-content-comparator-header__titles-nav flex grow justify-between" }, R3 = { class: "sx-content-comparator-header__titles shrink" }, z3 = ["lang", "dir"], O3 = ["lang", "dir"], j3 = { class: "py-2 mb-1" }, H3 = /* @__PURE__ */ hn("br", null, null, -1), El = window.Vue.computed, q3 = {
  __name: "SXContentComparatorHeader",
  emits: ["close", "translation-button-clicked"],
  setup(e) {
    const { sectionURLParameter: t } = B(), { sourceSection: n } = te(), { sectionSuggestion: o, isCurrentSectionPresent: s } = Ge(), a = El(
      () => {
        var u;
        return (u = o.value) == null ? void 0 : u.missingSections.hasOwnProperty(t.value);
      }
    ), r = El(() => {
      var u;
      return (u = n.value) == null ? void 0 : u.html;
    }), l = El(() => [
      ...Object.keys(o.value.missingSections),
      ...Object.keys(o.value.presentSections)
    ]);
    return (u, d) => {
      const i = F3("i18n");
      return Vl(), M3("div", N3, [
        bo(Ee(Me), {
          class: "py-2 pa-0",
          icon: Ee(k0),
          label: u.$i18n("cx-sx-content-comparator-back-to-sections-button-label"),
          type: "text",
          onClick: d[0] || (d[0] = (c) => u.$emit("close"))
        }, null, 8, ["icon", "label"]),
        hn("div", U3, [
          hn("div", I3, [
            hn("div", R3, [
              hn("h4", {
                class: "pa-0 sx-content-comparator-header__article-title",
                lang: Ee(o).sourceLanguage,
                dir: Ee(z.getDir)(Ee(o).sourceLanguage)
              }, bp(Ee(o).sourceTitle), 9, z3),
              hn("h2", {
                class: "sx-content-comparator-header__section-title pa-0 ma-0",
                lang: Ee(o).sourceLanguage,
                dir: Ee(z.getDir)(Ee(o).sourceLanguage)
              }, bp(Ee(t)), 9, O3)
            ]),
            bo(b3, { "section-source-titles": l.value }, null, 8, ["section-source-titles"])
          ]),
          hn("div", j3, [
            bo(Ee(Me), {
              class: "sx-content-comparator-header__translation-button",
              icon: Ee(Ni),
              progressive: "",
              label: u.$i18n("cx-sx-content-comparator-translation-section-button-label"),
              disabled: !r.value,
              onClick: d[1] || (d[1] = (c) => u.$emit("translation-button-clicked"))
            }, null, 8, ["icon", "label", "disabled"])
          ])
        ]),
        a.value ? (Vl(), $p(Ee(F), {
          key: 0,
          align: "start",
          class: "sx-content-comparator-header__review-contents mx-0"
        }, {
          default: $l(() => [
            bo(Ee(k), {
              shrink: "",
              class: "pe-2"
            }, {
              default: $l(() => [
                bo(Ee(je), { icon: Ee(A0) }, null, 8, ["icon"])
              ]),
              _: 1
            }),
            bo(Ee(k), { class: "ma-0" }, {
              default: $l(() => [
                kp(hn("strong", null, null, 512), [
                  [i, void 0, "cx-sx-content-comparator-review-contents-title"]
                ]),
                H3,
                kp(hn("span", null, null, 512), [
                  [i, void 0, "cx-sx-content-comparator-review-contents-rest"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Vp("", !0),
        Ee(s) ? (Vl(), $p(P3, { key: 1 })) : Vp("", !0)
      ]);
    };
  }
};
const Ep = window.Vue.toDisplayString, G3 = window.Vue.createElementVNode, Lp = window.Vue.openBlock, Ap = window.Vue.createElementBlock, X3 = window.Vue.createCommentVNode, W3 = { class: "sx-content-comparator__new-section-placeholder mt-4 py-4 px-7" }, K3 = ["textContent"], Y3 = ["textContent"], Af = {
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
    return (t, n) => (Lp(), Ap("section", W3, [
      G3("h5", {
        textContent: Ep(e.placeholderTitle)
      }, null, 8, K3),
      e.placeholderSubtitle ? (Lp(), Ap("p", {
        key: 0,
        textContent: Ep(e.placeholderSubtitle)
      }, null, 8, Y3)) : X3("", !0)
    ]));
  }
}, Q3 = window.Vue.computed, J3 = window.Vue.createApp, Z3 = window.Vuex.useStore, e5 = () => {
  const e = Z3(), { sectionSuggestion: t } = Ge(), { currentTargetPage: n } = lt(), o = ce(), s = () => J3(
    Af,
    {
      placeholderTitle: o.i18n(
        "cx-sx-content-comparator-missing-section-placeholder-title"
      )
    }
  ).mount(document.createElement("div")).$el, a = (l) => e.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
    l
  ), r = (l) => {
    const u = l.getElementsByTagName("base");
    Array.from(u).forEach(
      (d) => d.parentNode.removeChild(d)
    );
  };
  return Q3(() => {
    var i;
    const l = document.createElement("div");
    l.innerHTML = (i = n.value) == null ? void 0 : i.content, r(l);
    const u = s(), d = a(
      t.value
    );
    if (d) {
      const c = Array.from(
        l.querySelectorAll("h2")
      ).filter((g) => g.textContent.match(d));
      if (c && c.length) {
        const g = c[0].parentNode;
        g.parentNode.insertBefore(
          u,
          g
        );
      }
    } else
      l.appendChild(u);
    return l.innerHTML;
  });
};
const Ll = window.Vue.createVNode, et = window.Vue.unref, ko = window.Vue.openBlock, Dp = window.Vue.createBlock, Tp = window.Vue.createCommentVNode, pi = window.Vue.createElementVNode, Al = window.Vue.Fragment, mi = window.Vue.createElementBlock, t5 = { class: "sx-content-comparator col-12 col-tablet-9 col-desktop-7 mx-auto" }, n5 = { class: "sx-content-comparator__source-content" }, o5 = ["lang", "dir", "innerHTML"], s5 = ["lang", "dir", "innerHTML"], a5 = ["innerHTML"], i5 = window.Vue.ref, r5 = window.Vue.computed, l5 = window.Vue.watch, c5 = window.Vuex.useStore, u5 = {
  __name: "SXContentComparator",
  setup(e) {
    c5();
    const t = qe(), n = i5("source_section"), { logDashboardTranslationStartEvent: o } = Wi(), s = Yo(), a = () => t.push({ name: "sx-section-selector" }), r = () => {
      o(), s();
    }, {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u,
      pageURLParameter: d,
      sectionURLParameter: i
    } = B(), { activeSectionTargetTitle: c, sourceSectionContent: g, targetSectionContent: p } = lu(), m = e5(), { sectionSuggestion: h } = Ge(), f = r5(() => h.value.targetTitle), w = kf();
    return l5(
      f,
      () => w(
        u.value,
        l.value,
        f.value
      ),
      { immediate: !0 }
    ), (v, y) => (ko(), mi("section", t5, [
      Ll(q3, {
        onTranslationButtonClicked: r,
        onClose: a
      }),
      Ll(_3, {
        "content-type-selection": n.value,
        "onUpdate:contentTypeSelection": y[0] || (y[0] = (S) => n.value = S),
        onTranslationButtonClicked: r
      }, null, 8, ["content-type-selection"]),
      pi("section", n5, [
        n.value === "source_section" ? (ko(), mi(Al, { key: 0 }, [
          et(g) ? Tp("", !0) : (ko(), Dp(et(it), { key: 0 })),
          pi("section", {
            lang: et(l),
            dir: et(z.getDir)(et(l)),
            class: "pt-2 px-4",
            innerHTML: et(g)
          }, null, 8, o5)
        ], 64)) : n.value === "target_article" ? (ko(), mi(Al, { key: 1 }, [
          et(m) ? Tp("", !0) : (ko(), Dp(et(it), { key: 0 })),
          pi("article", {
            lang: et(u),
            dir: et(z.getDir)(et(u)),
            class: "px-4",
            innerHTML: et(m)
          }, null, 8, s5)
        ], 64)) : (ko(), mi(Al, { key: 2 }, [
          pi("section", {
            class: "pa-4",
            innerHTML: et(p)
          }, null, 8, a5),
          Ll(Af, {
            class: "sx-content-comparator__new-section-placeholder--present",
            "placeholder-title": v.$i18n("cx-sx-content-comparator-present-section-placeholder-title"),
            "placeholder-subtitle": v.$i18n(
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
const _5 = window.Vue.resolveDirective, Ds = window.Vue.createElementVNode, Bp = window.Vue.withDirectives, hi = window.Vue.unref, Dl = window.Vue.createVNode, Pp = window.Vue.toDisplayString, Fp = window.Vue.createTextVNode, Ts = window.Vue.withCtx, S5 = window.Vue.openBlock, y5 = window.Vue.createBlock, x5 = { class: "mw-ui-dialog__header px-4 py-3" }, C5 = { class: "mw-ui-dialog__header-title" }, b5 = { class: "pa-4" }, k5 = { class: "flex justify-end py-2 sx-confirm-back-navigation-dialog__footer" }, Mp = window.Codex.CdxButton, $5 = {
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
      const u = _5("i18n");
      return S5(), y5(hi(_t), {
        value: e.modelValue,
        class: "sx-confirm-back-navigation-dialog"
      }, {
        header: Ts(() => [
          Ds("div", x5, [
            Bp(Ds("span", C5, null, 512), [
              [u, void 0, "sx-confirm-back-navigation-dialog-title"]
            ])
          ])
        ]),
        footer: Ts(() => [
          Ds("div", k5, [
            Dl(hi(Mp), {
              weight: "quiet",
              onClick: s
            }, {
              default: Ts(() => [
                Fp(Pp(r.$i18n("sx-confirm-back-navigation-dialog-continue-button-label")), 1)
              ]),
              _: 1
            }),
            Dl(hi(Mp), {
              weight: "quiet",
              action: "destructive",
              onClick: a
            }, {
              default: Ts(() => [
                Fp(Pp(r.$i18n("sx-confirm-back-navigation-dialog-discard-button-label")), 1)
              ]),
              _: 1
            })
          ])
        ]),
        default: Ts(() => [
          Dl(hi(Mi)),
          Ds("div", b5, [
            Bp(Ds("span", null, null, 512), [
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
    (a) => oo(a)
  );
  return s && ah(s) ? vt.parseTemplateWikitext(
    oh(s),
    n,
    t
  ) : Promise.resolve(null);
}, Df = (e, t, n) => {
  let o = document.createElement("div");
  o.innerHTML = e, o.firstElementChild.getAttribute("rel") === "cx:Section" && (o = o.firstElementChild);
  const s = Array.from(o.children).find(
    (a) => oo(a)
  );
  return s ? vt.parseTemplateWikitext(
    oh(s),
    n,
    t
  ) : Promise.resolve(null);
}, E5 = window.Vuex.useStore, cu = () => {
  const e = E5(), { sourceSection: t } = te(), { getCurrentTitleByLanguage: n } = _n(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = Vf(), r = (i, c, g) => {
    if (i === 0) {
      t.value.proposedTitleTranslations[c] = g;
      return;
    }
    const p = t.value.getContentTranslationUnitById(i);
    p instanceof at ? p.blockTemplateProposedTranslations[c] = g : p instanceof Mn && p.addProposedTranslation(c, g);
  }, l = (i, c) => b(void 0, null, function* () {
    if (!e.getters["mediawiki/isValidProviderForTranslation"](o.value, s.value, i))
      return "";
    try {
      const p = yield a();
      return yield vt.fetchSegmentTranslation(
        o.value,
        s.value,
        i,
        c,
        p
      );
    } catch (p) {
      return mw.log.error("Error while translating segment", p), "";
    }
  }), u = (i, c) => b(void 0, null, function* () {
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
    p instanceof at && (p.setBlockTemplateAdaptationInfoByHtml(
      c,
      m
    ), m = (yield V5(
      m,
      n(s.value, o.value),
      s.value
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
        o.value,
        s.value
      ), { selectedTranslationUnitId: c } = t.value;
      i.forEach(
        (g) => u(c, g)
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
const T5 = window.Vue.resolveDirective, st = window.Vue.createElementVNode, fi = window.Vue.withDirectives, Re = window.Vue.unref, Tl = window.Vue.createVNode, ln = window.Vue.withCtx, B5 = window.Vue.renderList, P5 = window.Vue.Fragment, wi = window.Vue.openBlock, F5 = window.Vue.createElementBlock, M5 = window.Vue.toDisplayString, Bl = window.Vue.createBlock, Np = window.Vue.createCommentVNode, N5 = { class: "mw-ui-dialog__header pa-4" }, U5 = { class: "row ma-0 py-2" }, I5 = { class: "col grow items-center mw-ui-dialog__header-title justify-start pe-2" }, R5 = { class: "mb-0" }, z5 = { class: "col shrink justify-center" }, O5 = { class: "pb-2 mb-0" }, j5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, H5 = ["dir", "lang", "innerHTML"], q5 = ["textContent"], G5 = ["innerHTML"], X5 = { class: "sx-sentence-selector__translation-options-card-title mb-4" }, W5 = /* @__PURE__ */ st("p", { class: "sx-sentence-selector__empty-sentence-option__cursor" }, "|", -1), K5 = ["innerHTML"], Pl = window.Vue.computed, Y5 = window.Vuex.useStore, Q5 = {
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
      isSectionTitleSelected: l,
      selectedContentTranslationUnit: u
    } = te(), {
      sourceLanguageURLParameter: d,
      targetLanguageURLParameter: i
    } = B(), c = Pl(
      () => a.getters["mediawiki/getSupportedMTProviders"](
        d.value,
        i.value
      )
    ), g = Pl(() => {
      const S = [s, o];
      return c.value.filter(
        (x) => !S.includes(x)
      );
    }), p = Pl(
      () => l.value ? r.value.proposedTitleTranslations : u.value.proposedTranslations
    ), m = A5(), h = (S) => {
      m(S), w();
    }, f = ee.getMTProviderLabel, w = () => n("update:active", !1), v = ce(), y = D5(
      v.i18n("cx-tools-mt-noservices")
    );
    return (S, x) => {
      const E = T5("i18n");
      return e.active ? (wi(), Bl(Re(_t), {
        key: 0,
        class: "sx-sentence-selector__translation-options",
        fullscreen: ""
      }, {
        header: ln(() => [
          st("div", N5, [
            st("div", U5, [
              st("div", I5, [
                fi(st("h4", R5, null, 512), [
                  [E, void 0, "cx-sx-sentence-selector-translation-options-header-title"]
                ])
              ]),
              st("div", z5, [
                Tl(Re(Me), {
                  type: "icon",
                  icon: Re(ra),
                  class: "pa-0",
                  onClick: w
                }, null, 8, ["icon"])
              ])
            ]),
            fi(st("h6", O5, null, 512), [
              [E, void 0, "cx-sx-sentence-selector-translation-options-header-text"]
            ])
          ])
        ]),
        default: ln(() => [
          Tl(Re(Ye), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: x[0] || (x[0] = (C) => h(Re(s)))
          }, {
            header: ln(() => [
              fi(st("h5", j5, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-original-card-title"]
              ])
            ]),
            default: ln(() => [
              st("p", {
                dir: Re(z.getDir)(Re(d)),
                lang: Re(d),
                innerHTML: p.value[Re(s)]
              }, null, 8, H5)
            ]),
            _: 1
          }),
          (wi(!0), F5(P5, null, B5(g.value, (C) => (wi(), Bl(Re(Ye), {
            key: C,
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: (N) => h(C)
          }, {
            header: ln(() => [
              st("h5", {
                class: "sx-sentence-selector__translation-options-card-title mb-4",
                textContent: M5(Re(f)(C))
              }, null, 8, q5)
            ]),
            default: ln(() => [
              st("p", {
                innerHTML: p.value[C]
              }, null, 8, G5)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128)),
          Tl(Re(Ye), {
            class: "sx-sentence-selector__mt-provider-option-card mx-4 pa-5",
            role: "button",
            onClick: x[1] || (x[1] = (C) => h(Re(o)))
          }, {
            header: ln(() => [
              fi(st("h5", X5, null, 512), [
                [E, void 0, "cx-sx-sentence-selector-translation-options-empty-card-title"]
              ])
            ]),
            default: ln(() => [
              W5
            ]),
            _: 1
          }),
          g.value.length ? Np("", !0) : (wi(), Bl(Re(Ye), {
            key: 0,
            class: "sx-sentence-selector__mt-disabled-info-card mx-4 pa-5"
          }, {
            header: ln(() => [
              st("h5", {
                class: "sx-sentence-selector__translation-info-card-title",
                innerHTML: Re(y)
              }, null, 8, K5)
            ]),
            _: 1
          }))
        ]),
        _: 1
      })) : Np("", !0);
    };
  }
}, J5 = window.Vuex.useStore, Qo = () => {
  const { sourceSection: e } = te(), t = J5(), { translateTranslationUnitById: n } = cu(), { currentMTProvider: o } = Ae(t), s = (l) => b(void 0, null, function* () {
    e.value.selectTranslationUnitById(l), yield n(l, o.value);
    const { followingTranslationUnit: u } = e.value;
    u && (yield n(
      u.id,
      o
    ));
  });
  return {
    selectNextTranslationUnit: () => {
      const { followingTranslationUnit: l } = e.value;
      return l ? s(l.id) : Promise.resolve();
    },
    selectPreviousTranslationUnit: () => {
      const { selectedContentTranslationUnitIndex: l, contentTranslationUnits: u } = e.value, d = l - 1;
      let i = 0;
      return d > -1 && (i = u[d].id), s(i);
    },
    selectTranslationUnitById: s
  };
};
const Z5 = window.Vue.toDisplayString, Fl = window.Vue.createElementVNode, Ml = window.Vue.unref, eL = window.Vue.createVNode, tL = window.Vue.normalizeClass, nL = window.Vue.withCtx, oL = window.Vue.openBlock, sL = window.Vue.createBlock, aL = ["href"], iL = ["textContent"], rL = ["innerHTML"], $o = window.Vue.computed, Up = "sx-sentence-selector__section-title", lL = {
  __name: "SXSentenceSelectorContentHeader",
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = te(), { currentSourcePage: o } = lt(), { sourceLanguageURLParameter: s } = B(), a = $o(() => {
      var p;
      return (p = o.value) == null ? void 0 : p.title;
    }), r = $o(
      () => {
        var p;
        return ((p = t.value) == null ? void 0 : p.title) || a.value;
      }
    ), l = $o(
      () => Q.getPageUrl(s.value, a.value)
    ), u = $o(
      () => {
        var p;
        return !!((p = t.value) != null && p.translatedTitle);
      }
    ), d = $o(
      () => u.value ? "translated" : "selected"
    ), i = $o(() => {
      const p = [Up];
      return n.value && p.push(`${Up}--${d.value}`), p;
    }), { selectTranslationUnitById: c } = Qo(), g = () => c(0);
    return (p, m) => (oL(), sL(Ml(k), {
      shrink: "",
      class: "sx-sentence-selector__section-header pa-5"
    }, {
      default: nL(() => [
        Fl("a", {
          href: l.value,
          target: "_blank",
          class: "sx-sentence-selector__section-article-title mb-1"
        }, [
          Fl("strong", {
            textContent: Z5(a.value)
          }, null, 8, iL),
          eL(Ml(je), {
            icon: Ml(Jm),
            class: "ms-1",
            size: "12"
          }, null, 8, ["icon"])
        ], 8, aL),
        Fl("h2", {
          class: tL(["pa-0 ma-0", i.value]),
          onClick: g,
          innerHTML: r.value
        }, null, 10, rL)
      ]),
      _: 1
    }));
  }
};
const jt = window.Vue.unref, Bs = window.Vue.createVNode, vi = window.Vue.withCtx, Ip = window.Vue.toDisplayString, Rp = window.Vue.createTextVNode, cL = window.Vue.openBlock, uL = window.Vue.createBlock, dL = window.Vue.computed, Nl = window.Codex.CdxButton, zp = window.Codex.CdxIcon, Tf = {
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
    return (a, r) => (cL(), uL(jt(F), { class: "sx-sentence-selector__translation-action-buttons ma-0" }, {
      default: vi(() => [
        Bs(jt(Nl), {
          weight: "quiet",
          class: "sx-sentence-selector__previous-sentence-button col shrink pa-4",
          "aria-label": a.$i18n("cx-sx-sentence-selector-previous-translation-button-aria-label"),
          disabled: jt(n),
          onClick: r[0] || (r[0] = (l) => a.$emit("select-previous-segment"))
        }, {
          default: vi(() => [
            Bs(jt(zp), {
              class: "me-1",
              icon: jt(Yc)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "disabled"]),
        Bs(jt(Nl), {
          weight: "quiet",
          class: "sx-sentence-selector__apply-translation-button col grow pa-4",
          disabled: !jt(o),
          onClick: r[1] || (r[1] = (l) => a.$emit("apply-translation"))
        }, {
          default: vi(() => [
            Rp(Ip(a.$i18n("cx-sx-sentence-selector-apply-translation-button-label")), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        Bs(jt(Nl), {
          weight: "quiet",
          class: "sx-sentence-selector__skip-translation-button col shrink pa-4",
          disabled: s.value,
          onClick: r[2] || (r[2] = (l) => a.$emit("skip-translation"))
        }, {
          default: vi(() => [
            Rp(Ip(a.$i18n("cx-sx-sentence-selector-skip-translation-button-label")) + " ", 1),
            Bs(jt(zp), {
              class: "ms-1",
              size: "small",
              icon: jt(pa)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
};
const Qn = window.Vue.unref, gL = window.Vue.toDisplayString, Ps = window.Vue.createVNode, _i = window.Vue.withCtx, pL = window.Vue.openBlock, mL = window.Vue.createBlock, Ul = window.Vue.computed, hL = window.Vuex.useStore, fL = window.Codex.CdxButton, wL = window.Codex.CdxIcon, vL = {
  __name: "ProposedTranslationHeader",
  emits: ["configure-options"],
  setup(e) {
    const t = hL(), n = Ul(() => t.state.application.currentMTProvider), o = ce(), s = Ul(() => ({
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
    return (r, l) => (pL(), mL(Qn(k), { class: "sx-sentence-selector__proposed-translation__header pt-5 shrink" }, {
      default: _i(() => [
        Ps(Qn(F), { class: "ma-0 ps-5 pb-4" }, {
          default: _i(() => [
            Ps(Qn(k), {
              tag: "h6",
              grow: "",
              class: "sx-sentence-selector__proposed-translation__header-title pa-0 ma-0 pe-4",
              textContent: gL(a.value)
            }, null, 8, ["textContent"]),
            Ps(Qn(k), {
              shrink: "",
              class: "pe-5"
            }, {
              default: _i(() => [
                Ps(Qn(fL), {
                  class: "sx-sentence-selector__proposed-translation__header-settings-button",
                  weight: "quiet",
                  "aria-label": r.$i18n("cx-sx-sentence-selector-mt-settings-button-aria-label"),
                  onClick: l[0] || (l[0] = (u) => r.$emit("configure-options"))
                }, {
                  default: _i(() => [
                    Ps(Qn(wL), {
                      class: "pa-0",
                      icon: Qn(Wc)
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
const Lt = window.Vue.unref, An = window.Vue.createVNode, _L = window.Vue.resolveDirective, Op = window.Vue.createElementVNode, SL = window.Vue.withDirectives, jp = window.Vue.toDisplayString, Hp = window.Vue.createTextVNode, Fs = window.Vue.withCtx, yL = window.Vue.openBlock, xL = window.Vue.createElementBlock, CL = { class: "mt-retry-body pb-5" }, bL = { class: "retry-body__message" }, qp = window.Codex.CdxButton, Il = window.Codex.CdxIcon, kL = {
  __name: "RetryMtCard",
  emits: ["configure-options", "retry-translation"],
  setup(e) {
    return (t, n) => {
      const o = _L("i18n");
      return yL(), xL("div", CL, [
        Op("div", bL, [
          An(Lt(Il), {
            class: "me-2",
            icon: Lt($h)
          }, null, 8, ["icon"]),
          SL(Op("span", null, null, 512), [
            [o, void 0, "cx-sx-proposed-translation-not-available-message"]
          ])
        ]),
        An(Lt(F), { class: "retry-body__action-buttons ma-0 pt-4" }, {
          default: Fs(() => [
            An(Lt(k), { cols: "6" }, {
              default: Fs(() => [
                An(Lt(qp), {
                  class: "retry-body__retry-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[0] || (n[0] = (s) => t.$emit("retry-translation"))
                }, {
                  default: Fs(() => [
                    An(Lt(Il), {
                      class: "me-1",
                      icon: Lt(Th)
                    }, null, 8, ["icon"]),
                    Hp(" " + jp(t.$i18n("cx-sx-proposed-translation-retry-button")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            An(Lt(k), { cols: "6" }, {
              default: Fs(() => [
                An(Lt(qp), {
                  class: "retry-body__other-options-action-button",
                  weight: "quiet",
                  action: "progressive",
                  onClick: n[1] || (n[1] = (s) => t.$emit("configure-options"))
                }, {
                  default: Fs(() => [
                    An(Lt(Il), {
                      class: "me-1",
                      icon: Lt(sy)
                    }, null, 8, ["icon"]),
                    Hp(" " + jp(t.$i18n("cx-sx-proposed-translation-other-options-button")), 1)
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
const Vo = window.Vue.createVNode, tt = window.Vue.unref, Ms = window.Vue.openBlock, $L = window.Vue.createElementBlock, VL = window.Vue.createCommentVNode, Si = window.Vue.createBlock, EL = window.Vue.normalizeClass, LL = window.Vue.normalizeStyle, Ns = window.Vue.withCtx, AL = window.Vue.toDisplayString, DL = window.Vue.createTextVNode, TL = window.Vue.normalizeProps, BL = window.Vue.guardReactiveProps, PL = ["lang", "dir", "innerHTML"], Rl = window.Vue.ref, FL = window.Vue.onMounted, ML = window.Vue.onBeforeUnmount, zl = window.Vue.computed, NL = window.Vue.nextTick, UL = window.Vuex.useStore, IL = window.Codex.CdxButton, RL = window.Codex.CdxIcon, zL = {
  __name: "ProposedTranslationCard",
  emits: ["edit-translation", "configure-options", "retry-translation"],
  setup(e) {
    const t = Rl(0), n = Rl(null), o = Rl(null), s = UL(), { currentMTProvider: a } = Ae(s), { targetLanguageURLParameter: r } = B(), { sourceSection: l, currentProposedTranslation: u } = te(), d = zl(
      () => {
        var m, h;
        return (h = s.state.application.mtRequestsPending) == null ? void 0 : h.includes(
          (m = l.value) == null ? void 0 : m.selectedTranslationUnitId
        );
      }
    ), i = zl(() => ({
      "max-height": `calc(100% - ${t.value}px)`
    })), c = zl(
      () => !!u.value || a.value === ee.EMPTY_TEXT_PROVIDER_KEY
    ), g = () => {
      t.value = n.value.$el.clientHeight + o.value.$el.clientHeight;
    };
    FL(() => b(this, null, function* () {
      yield NL(), g(), p.observe(n.value.$el), p.observe(o.value.$el);
    })), ML(() => {
      p.unobserve(n.value.$el), p.unobserve(o.value.$el);
    });
    const p = new ResizeObserver(() => g());
    return (m, h) => (Ms(), Si(tt(Ye), { class: "sx-sentence-selector__proposed-translation col shrink pa-0" }, {
      default: Ns(() => [
        Vo(tt(F), {
          direction: "column",
          align: "start",
          class: "ma-0 no-wrap fill-height"
        }, {
          default: Ns(() => [
            Vo(vL, {
              ref_key: "header",
              ref: n,
              onConfigureOptions: h[0] || (h[0] = (f) => m.$emit("configure-options"))
            }, null, 512),
            Vo(tt(k), {
              class: EL(["sx-sentence-selector__proposed-translation__contents px-5", {
                "sx-sentence-selector__proposed-translation__contents--loading": !c.value && d.value
              }]),
              style: LL(c.value ? i.value : null)
            }, {
              default: Ns(() => [
                c.value ? (Ms(), $L("section", {
                  key: 0,
                  lang: tt(r),
                  dir: tt(z.getDir)(tt(r)),
                  innerHTML: tt(u)
                }, null, 8, PL)) : d.value ? (Ms(), Si(tt(it), { key: 1 })) : (Ms(), Si(kL, {
                  key: 2,
                  onConfigureOptions: h[1] || (h[1] = (f) => m.$emit("configure-options")),
                  onRetryTranslation: h[2] || (h[2] = (f) => m.$emit("retry-translation"))
                }))
              ]),
              _: 1
            }, 8, ["class", "style"]),
            Vo(tt(k), {
              ref_key: "footer",
              ref: o,
              shrink: "",
              class: "sx-sentence-selector__proposed-translation__footer"
            }, {
              default: Ns(() => [
                c.value || d.value ? (Ms(), Si(tt(IL), {
                  key: 0,
                  class: "sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5",
                  weight: "quiet",
                  action: "progressive",
                  disabled: !c.value,
                  onClick: h[3] || (h[3] = (f) => m.$emit("edit-translation", tt(u)))
                }, {
                  default: Ns(() => [
                    Vo(tt(RL), {
                      class: "me-1",
                      icon: tt(Xc)
                    }, null, 8, ["icon"]),
                    DL(" " + AL(m.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : VL("", !0),
                Vo(Tf, TL(BL(m.$attrs)), null, 16)
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
    const l = a.isTranslated ? "translated" : "untranslated";
    s.classList.add(`${t}--${l}`), s.innerHTML = a.content;
  }), n.innerHTML;
});
const HL = window.Vue.unref, qL = window.Vue.normalizeClass, GL = window.Vue.openBlock, XL = window.Vue.createElementBlock, WL = ["innerHTML"], KL = window.Vue.onMounted, YL = window.Vue.ref, QL = window.Vue.computed, JL = {
  __name: "SubSection",
  props: {
    subSection: {
      type: at,
      required: !0
    }
  },
  emits: ["bounce-translation"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = YL(null), a = jL(n.subSection);
    KL(() => {
      s.value.addEventListener("click", (d) => {
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
    const { selectTranslationUnitById: r } = Qo(), l = (d) => {
      if (d.selected) {
        o("bounce-translation");
        return;
      }
      r(d.id);
    }, u = QL(() => ({
      "sx-sentence-selector__subsection--block-selected": n.subSection.selected
    }));
    return (d, i) => (GL(), XL("div", {
      ref_key: "subSectionRoot",
      ref: s,
      class: qL(["sx-sentence-selector__subsection", u.value]),
      innerHTML: HL(a)
    }, null, 10, WL));
  }
};
const Gp = window.Vue.unref, Xp = window.Vue.createVNode, Wp = window.Vue.normalizeStyle, ZL = window.Vue.openBlock, eA = window.Vue.createElementBlock, Kp = window.Vue.computed, Bf = {
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
    const t = e, n = Kp(() => ({ "--size": t.size })), o = Kp(
      () => !t.isTemplateAdapted || t.percentage === 0 ? Zm : Ti
    );
    return (s, a) => (ZL(), eA("div", {
      class: "block-template-status-indicator",
      style: Wp(n.value)
    }, [
      Xp(Gp(tv), {
        percentage: e.percentage,
        size: e.size,
        "stroke-width": e.strokeWidth
      }, null, 8, ["percentage", "size", "stroke-width"]),
      Xp(Gp(je), {
        icon: o.value,
        size: e.size / 2,
        style: Wp({
          left: `calc(50% - ${e.size / 4}px)`,
          top: `calc(50% - ${e.size / 4}px)`
        })
      }, null, 8, ["icon", "size", "style"])
    ], 4));
  }
};
const Dn = window.Vue.unref, yi = window.Vue.createVNode, Ol = window.Vue.withCtx, tA = window.Vue.openBlock, nA = window.Vue.createBlock, oA = window.Vue.computed, Yp = window.Codex.CdxButton, Qp = window.Codex.CdxIcon, Pf = {
  __name: "TranslatedSegmentCardActionButtons",
  emits: ["select-previous-segment", "select-next-segment"],
  setup(e) {
    const { sourceSection: t, isSectionTitleSelected: n } = te(), o = oA(
      () => t.value.isSelectedTranslationUnitLast
    );
    return (s, a) => (tA(), nA(Dn(F), { class: "sx-sentence-selector__translated-segment-card__action-buttons ma-0" }, {
      default: Ol(() => [
        yi(Dn(Yp), {
          class: "sx-sentence-selector__translated-segment-card__previous-button col pa-4",
          weight: "quiet",
          disabled: Dn(n),
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-previous-button-aria-label"
          ),
          onClick: a[0] || (a[0] = (r) => s.$emit("select-previous-segment"))
        }, {
          default: Ol(() => [
            yi(Dn(Qp), { icon: Dn(Yc) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"]),
        yi(Dn(Yp), {
          class: "sx-sentence-selector__translated-segment-card__next-button col pa-4",
          weight: "quiet",
          disabled: o.value,
          "aria-label": s.$i18n(
            "cx-sx-sentence-selector-translated-segment-next-button-aria-label"
          ),
          onClick: a[1] || (a[1] = (r) => s.$emit("select-next-segment"))
        }, {
          default: Ol(() => [
            yi(Dn(Qp), { icon: Dn(pa) }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ]),
      _: 1
    }));
  }
}, Us = window.Vue.openBlock, xi = window.Vue.createBlock;
window.Vue.createCommentVNode;
const cn = window.Vue.unref, Eo = window.Vue.withCtx, Is = window.Vue.createVNode, jl = window.Vue.toDisplayString, Hl = window.Vue.createElementVNode, sA = window.Vue.renderList, aA = window.Vue.Fragment, iA = window.Vue.createElementBlock, rA = { class: "pa-4" }, lA = ["textContent"], cA = ["textContent"], uA = window.Vuex.useStore, Ci = window.Vue.computed, dA = {
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
    const t = e, { targetLanguageAutonym: n } = Ae(uA()), o = Ci(
      () => t.targetParamsCount / (t.sourceParamsCount + t.mandatoryMissingParamsCount) * 100
    ), s = ce(), a = Ci(() => {
      let u;
      return t.targetTemplateExists ? t.isTemplateAdapted ? o.value < 100 ? u = "cx-sx-block-template-mapping-status-title-partially-template" : u = "cx-sx-block-template-mapping-status-title-fully-template" : u = "cx-sx-block-template-mapping-status-title-unadapted-template" : u = "cx-sx-block-template-mapping-status-title-no-target-template", s.i18n(u);
    }), r = Ci(() => {
      let u;
      return !t.targetTemplateExists || !t.isTemplateAdapted ? u = "cx-sx-block-template-mapping-status-explanation-no-mapping" : o.value < 100 ? u = "cx-sx-block-template-mapping-status-explanation-partial-mapping" : u = "cx-sx-block-template-mapping-status-explanation-full-mapping", s.i18n(u);
    }), l = Ci(() => {
      let u = [];
      if (!t.targetTemplateExists)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-no-equivalent-template-suggestion",
            n.value
          ),
          icon: M0,
          color: ft.gray500
        });
      else if (!t.isTemplateAdapted)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-none-mapped-param-text",
            t.sourceParamsCount
          ),
          icon: ra,
          color: ft.gray500
        });
      else if (o.value < 100)
        u.push({
          text: s.i18n(
            "cx-sx-block-template-mapped-params-text",
            t.targetParamsCount,
            t.sourceParamsCount
          ),
          icon: Ti,
          color: ft.blue600
        });
      else {
        let d;
        t.sourceParamsCount ? d = s.i18n(
          "cx-sx-block-template-mapped-params-text",
          t.targetParamsCount,
          t.sourceParamsCount
        ) : d = s.i18n("cx-sx-block-template-no-source-params-text"), u.push({
          text: d,
          icon: Ti,
          color: ft.blue600
        });
      }
      return t.mandatoryMissingParamsCount ? u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-mandatory-params-text",
          t.mandatoryMissingParamsCount,
          n.value
        ),
        icon: Ni,
        color: ft.gray500
      }) : t.targetTemplateExists && t.isTemplateAdapted && t.optionalMissingParamsCount && u.push({
        text: s.i18n(
          "cx-sx-block-template-missing-optional-params-text",
          t.optionalMissingParamsCount,
          n.value
        ),
        icon: v0,
        color: ft.gray500
      }), u;
    });
    return (u, d) => (Us(), xi(cn(_t), {
      value: e.active,
      class: "sx-block-template-status-dialog",
      title: u.$i18n("cx-sx-publisher-preview-options-title"),
      onInput: d[0] || (d[0] = (i) => u.$emit("update:active", i))
    }, {
      header: Eo(() => [
        Is(cn(F), {
          justify: "center",
          class: "mt-4"
        }, {
          default: Eo(() => [
            Is(cn(k), { shrink: "" }, {
              default: Eo(() => [
                e.targetTemplateExists ? (Us(), xi(Bf, {
                  key: 0,
                  percentage: o.value,
                  size: 40,
                  "is-template-adapted": e.isTemplateAdapted,
                  "stroke-width": 3
                }, null, 8, ["percentage", "is-template-adapted"])) : (Us(), xi(cn(je), {
                  key: 1,
                  icon: cn(_0)
                }, null, 8, ["icon"]))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      default: Eo(() => [
        Hl("div", rA, [
          Hl("h3", {
            textContent: jl(a.value)
          }, null, 8, lA),
          Hl("p", {
            class: "mt-6 text-small",
            textContent: jl(r.value)
          }, null, 8, cA),
          (Us(!0), iA(aA, null, sA(l.value, (i, c) => (Us(), xi(cn(F), {
            key: c,
            align: "start",
            class: "mt-4"
          }, {
            default: Eo(() => [
              Is(cn(k), { shrink: "" }, {
                default: Eo(() => [
                  Is(cn(je), {
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
const Le = window.Vue.unref, ze = window.Vue.createVNode, Ht = window.Vue.withCtx, ql = window.Vue.toDisplayString, Jp = window.Vue.createTextVNode, gA = window.Vue.resolveDirective, Zp = window.Vue.withDirectives, em = window.Vue.createElementVNode, pA = window.Vue.normalizeClass, Lo = window.Vue.openBlock, tm = window.Vue.createElementBlock;
window.Vue.createCommentVNode;
const bi = window.Vue.createBlock, nm = window.Vue.normalizeProps;
window.Vue.guardReactiveProps;
const om = window.Vue.mergeProps, mA = { class: "block-template-adaptation-card__container pa-4" }, hA = ["textContent"], fA = {
  key: 1,
  class: "block-template-adaptation-card__body--failure pa-4 mb-4"
}, Oe = window.Vue.computed, wA = window.Vue.ref, vA = window.Vuex.useStore, sm = window.Codex.CdxButton, am = window.Codex.CdxIcon, _A = {
  __name: "BlockTemplateAdaptationCard",
  emits: ["edit-translation"],
  setup(e) {
    const t = vA(), { targetLanguageAutonym: n, currentMTProvider: o } = Ae(t), {
      selectedContentTranslationUnit: s,
      currentProposedTranslation: a
    } = te(), r = Oe(() => {
      var L;
      return (L = s.value) == null ? void 0 : L.isTranslated;
    }), l = Oe(() => {
      var T;
      return ((T = s.value) == null ? void 0 : T.blockTemplateTranslatedContent) || a.value;
    }), u = Oe(
      () => {
        var L;
        return (L = s.value) == null ? void 0 : L.getTargetBlockTemplateNameByProvider(
          o.value
        );
      }
    ), d = Oe(
      () => {
        var L;
        return !((L = t.state.application.mtRequestsPending) != null && L.includes(
          s.value.id
        ));
      }
    ), i = ce(), c = Oe(
      // Strip HTML comments and return
      () => {
        var L, T;
        return ((T = (L = s.value) == null ? void 0 : L.sourceBlockTemplateName) == null ? void 0 : T.replace(
          /<\!--.*?-->/g,
          ""
        )) || i.i18n("sx-block-template-adaptation-card-title-placeholder");
      }
    ), g = Oe(
      () => {
        var L, T;
        return (T = (L = s.value) == null ? void 0 : L.blockTemplateAdaptationInfo) == null ? void 0 : T[o.value];
      }
    ), p = Oe(
      () => {
        var L, T;
        return ((L = g.value) == null ? void 0 : L.adapted) || !!((T = g.value) != null && T.partial);
      }
    ), m = Oe(() => g.value ? "block-template-adaptation-card__body--" + (p.value ? "success" : "warning") : null), h = Oe(() => g.value ? p.value ? i.i18n("sx-block-template-adaptation-card-edit-button-label") : i.i18n(
      "sx-block-template-adaptation-card-edit-button-label-no-adapted-params"
    ) : null), f = Oe(
      () => {
        var L;
        return Object.keys(((L = s.value) == null ? void 0 : L.sourceTemplateParams) || {}).length;
      }
    ), w = Oe(() => {
      var T;
      const L = (T = s.value) == null ? void 0 : T.getTargetTemplateParamsByProvider(
        o.value
      );
      return Object.keys(L || {});
    }), v = Oe(() => w.value.length), y = Oe(() => {
      const L = C.value;
      return f.value + L === 0 ? 100 : v.value / (f.value + L) * 100 || 0;
    }), S = wA(!1), x = () => {
      S.value = !0;
    }, E = (L) => L.filter((T) => !w.value.includes(T)), C = Oe(() => {
      var T;
      const L = ((T = g.value) == null ? void 0 : T.mandatoryTargetParams) || [];
      return E(L).length;
    }), N = Oe(() => {
      var T;
      const L = ((T = g.value) == null ? void 0 : T.optionalTargetParams) || [];
      return E(L).length;
    });
    return (L, T) => {
      const R = gA("i18n");
      return Lo(), bi(Le(Ye), { class: "block-template-adaptation-card col shrink pa-0 ma-0" }, {
        default: Ht(() => [
          em("div", mA, [
            ze(Le(F), { class: "block-template-adaptation-card__header ma-0 pb-5" }, {
              default: Ht(() => [
                ze(Le(k), { shrink: "" }, {
                  default: Ht(() => [
                    ze(Le(am), {
                      icon: Le(ay),
                      class: "me-2"
                    }, null, 8, ["icon"])
                  ]),
                  _: 1
                }),
                ze(Le(k), {
                  class: "ma-0",
                  tag: "h5"
                }, {
                  default: Ht(() => [
                    Jp(ql(c.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u.value ? (Lo(), tm("div", {
              key: 0,
              class: pA(["pa-4 mb-4", m.value])
            }, [
              ze(Le(F), {
                class: "block-template-adaptation-card__body__header ma-0 pb-1",
                align: "start"
              }, {
                default: Ht(() => [
                  Zp(ze(Le(k), { tag: "h5" }, null, 512), [
                    [R, void 0, "sx-block-template-adaptation-card-body-header-success"]
                  ]),
                  ze(Le(k), { shrink: "" }, {
                    default: Ht(() => [
                      ze(Bf, {
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
              em("h5", {
                class: "block-template-adaptation-card__body__template-title pb-2",
                textContent: ql(u.value)
              }, null, 8, hA),
              ze(Le(sm), {
                class: "px-0",
                action: "progressive",
                weight: "quiet",
                onClick: T[0] || (T[0] = (K) => L.$emit("edit-translation", l.value))
              }, {
                default: Ht(() => [
                  Jp(ql(h.value), 1)
                ]),
                _: 1
              })
            ], 2)) : d.value ? (Lo(), tm("div", fA, [
              ze(Le(F), {
                class: "block-template-adaptation-card__body__header pb-0 mb-0",
                align: "start"
              }, {
                default: Ht(() => [
                  Zp(ze(Le(k), { tag: "h5" }, null, 512), [
                    [R, [
                      Le(n)
                    ], "sx-block-template-adaptation-card-body-header-failure"]
                  ]),
                  ze(Le(k), { shrink: "" }, {
                    default: Ht(() => [
                      ze(Le(sm), {
                        weight: "quiet",
                        "aria-label": L.$i18n(
                          "sx-block-template-adaptation-card-status-button-aria-label"
                        )
                      }, {
                        default: Ht(() => [
                          ze(Le(am), {
                            icon: Le(ty),
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
            ])) : (Lo(), bi(Le(it), { key: 2 }))
          ]),
          r.value ? (Lo(), bi(Pf, nm(om({ key: 1 }, L.$attrs)), null, 16)) : (Lo(), bi(Tf, nm(om({ key: 0 }, L.$attrs)), null, 16)),
          ze(dA, {
            active: S.value,
            "onUpdate:active": T[1] || (T[1] = (K) => S.value = K),
            "source-params-count": f.value,
            "target-params-count": v.value,
            "mandatory-missing-params-count": C.value,
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
const SA = window.Vue.unref, yA = window.Vue.createVNode, xA = window.Vue.openBlock, CA = window.Vue.createElementBlock, bA = { class: "translated-segment-card-header" }, kA = window.Vue.computed, $A = {
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
    const n = t, { isSectionTitleSelected: o } = te(), s = ce(), a = kA(() => [
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
    return (l, u) => (xA(), CA("div", bA, [
      yA(SA(ia), {
        items: a.value,
        active: e.selection,
        onSelect: r
      }, null, 8, ["items", "active"])
    ]));
  }
};
const VA = window.Vue.useCssVars, Fe = window.Vue.createVNode, im = window.Vue.resolveDirective, EA = window.Vue.createElementVNode, Gl = window.Vue.withDirectives, me = window.Vue.unref, LA = window.Vue.normalizeStyle, ki = window.Vue.openBlock, rm = window.Vue.createElementBlock, AA = window.Vue.createCommentVNode, DA = window.Vue.normalizeClass, mt = window.Vue.withCtx, TA = window.Vue.toDisplayString, BA = window.Vue.createTextVNode, lm = window.Vue.createBlock, PA = window.Vue.normalizeProps, FA = window.Vue.guardReactiveProps, un = window.Vue.computed, MA = window.Vue.ref, NA = window.Vue.inject, UA = window.Vuex.useStore, IA = window.Codex.CdxButton, Xl = window.Codex.CdxIcon, RA = {
  __name: "TranslatedSegmentCard",
  emits: ["edit-translation"],
  setup(e) {
    VA((v) => ({
      "4929555c": w.value
    }));
    const t = MA("sentence"), {
      sourceSection: n,
      selectedContentTranslationUnit: o,
      isSectionTitleSelected: s
    } = te(), { targetLanguage: a } = Ae(UA()), r = un(() => t.value === "sentence"), l = un(
      () => n.value.subSections.find(
        (v) => v.sentences.some(
          (y) => {
            var S;
            return y.id === ((S = o.value) == null ? void 0 : S.id);
          }
        )
      )
    ), u = un(() => {
      var v;
      return s.value ? n.value.mtProposedTranslationUsedForTitle : r.value ? (v = o.value) == null ? void 0 : v.mtProposedTranslationUsed : l.value.proposedContentForMTValidation;
    }), d = NA("colors"), i = d.gray200, c = d.red600, g = un(() => s.value ? n.value.translatedTitle : r.value ? o.value.translatedContent : l.value.translatedContent), p = un(
      () => Wt.calculateScore(
        g.value,
        u.value,
        a.value
      )
    ), m = un(
      () => Wt.getScoreStatus(p.value)
    ), h = un(
      () => `translated-segment-card__modification-stats__percentage--${m.value}`
    ), f = un(() => ({
      failure: p.value === 0 ? null : d.yellow700,
      warning: d.yellow700,
      success: d.green600
    })), w = un(
      () => f.value[m.value]
    );
    return (v, y) => {
      const S = im("i18n"), x = im("i18n-html");
      return ki(), lm(me(Ye), { class: "translated-segment-card col shrink pa-0 mb-0" }, {
        default: mt(() => [
          Fe(me(F), {
            direction: "column",
            align: "start",
            class: "ma-0 no-wrap fill-height"
          }, {
            default: mt(() => [
              Fe($A, {
                selection: t.value,
                "onUpdate:selection": y[0] || (y[0] = (E) => t.value = E)
              }, null, 8, ["selection"]),
              Fe(me(k), {
                tag: "section",
                class: "translated-segment-card__body pa-5"
              }, {
                default: mt(() => [
                  Fe(me(F), { class: "ma-0" }, {
                    default: mt(() => [
                      Fe(me(k), {
                        class: "translated-segment-card__modification-stats",
                        grow: ""
                      }, {
                        default: mt(() => [
                          Gl(EA("h5", null, null, 512), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-modification-percentage-header"]
                          ]),
                          p.value === 0 ? Gl((ki(), rm("p", {
                            key: 0,
                            style: LA({ color: me(c) })
                          }, null, 4)), [
                            [S, void 0, "cx-sx-sentence-selector-translated-segment-no-edits-label"]
                          ]) : Gl((ki(), rm("p", {
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
                        default: mt(() => [
                          Fe(me(F), { class: "ma-0 ms-2" }, {
                            default: mt(() => [
                              Fe(me(k), {
                                shrink: "",
                                align: "center"
                              }, {
                                default: mt(() => [
                                  Fe(me(Xl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: me(ly)
                                  }, null, 8, ["icon"])
                                ]),
                                _: 1
                              }),
                              Fe(me(k), {
                                shrink: "",
                                class: "px-3"
                              }, {
                                default: mt(() => [
                                  Fe(me(th), {
                                    value: p.value,
                                    height: "4px",
                                    width: "64px",
                                    color: w.value,
                                    background: me(i)
                                  }, null, 8, ["value", "color", "background"])
                                ]),
                                _: 1
                              }),
                              Fe(me(k), { shrink: "" }, {
                                default: mt(() => [
                                  Fe(me(Xl), {
                                    class: "translated-segment-card__animated-stats__icon",
                                    icon: me(iy)
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
                  r.value ? (ki(), lm(me(IA), {
                    key: 0,
                    class: "sx-sentence-selector__proposed-translation-edit-button px-0 mt-4",
                    action: "progressive",
                    weight: "quiet",
                    onClick: y[1] || (y[1] = (E) => v.$emit("edit-translation", g.value))
                  }, {
                    default: mt(() => [
                      Fe(me(Xl), {
                        class: "me-1",
                        icon: me(Xc)
                      }, null, 8, ["icon"]),
                      BA(" " + TA(v.$i18n("cx-sx-sentence-selector-edit-translation-button-label")), 1)
                    ]),
                    _: 1
                  })) : AA("", !0)
                ]),
                _: 1
              }),
              Fe(me(k), { class: "translated-segment-card__actions" }, {
                default: mt(() => [
                  Fe(Pf, PA(FA(v.$attrs)), null, 16)
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
  } = te(), { selectNextTranslationUnit: n, selectTranslationUnitById: o } = Qo(), { currentTranslation: s } = Mt();
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
}, Ff = window.Vuex.useStore, OA = () => {
  const e = Ff(), {
    sourceLanguageURLParameter: t,
    targetLanguageURLParameter: n
  } = B();
  return () => b(void 0, null, function* () {
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
  const e = Ff(), { currentMTProvider: t } = Ae(e), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), s = OA();
  return () => b(void 0, null, function* () {
    yield s();
    const a = e.getters["mediawiki/getSupportedMTProviders"](n.value, o.value);
    if (!t.value || !a.includes(t.value)) {
      const r = ee.getStorageKey(
        n.value,
        o.value
      );
      let l = mw.storage.get(r);
      (!l || !a.includes(l)) && (l = a[0]), e.commit("application/setCurrentMTProvider", l);
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
    () => e.value instanceof at
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
    (l) => !ee.isUserMTProvider(l)
  );
  if (o !== "source" && o !== "user" && !r.includes(o))
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  if (!s || !a || e.sectionId !== `${s}_${a}`)
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
}, WA = window.Vue.computed, Mf = () => {
  const { currentTranslation: e } = Mt(), { currentSourcePage: t } = lt();
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
  } = B(), r = Mf();
  return () => {
    const l = n.value, u = e.getters["mediawiki/getSupportedMTProviders"](s.value, a.value), d = `${r.value}_${t.value.id}`, i = t.value.getParallelCorporaUnits(d);
    i.forEach(
      (p) => XA(p, u)
    );
    const c = t.value.getTranslationProgress(a), g = e.getters["application/isSandboxTarget"];
    return vt.saveTranslation({
      sourceTitle: o.value,
      targetTitle: l,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: t.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: t.value.targetSectionTitleForPublishing,
      sourceLanguage: s.value,
      targetLanguage: a.value,
      revision: r.value,
      units: i.map((p) => p.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: d,
      isSandbox: g,
      progress: c
    });
  };
}, YA = window.Vue.effectScope, QA = window.Vue.onScopeDispose, JA = (e) => {
  let t = 0, n, o;
  const s = () => {
    o && --t <= 0 && (o.stop(), n = o = null);
  };
  return (...a) => (t++, n || (o = YA(!0), n = o.run(() => e(...a))), QA(s), n);
}, ZA = window.Vuex.useStore;
let Wl;
const eD = () => {
  const e = ZA(), t = uu();
  let n = 1e3, o = 0;
  return Wl = tu(() => t().then((a) => {
    a instanceof Ro ? (n *= o + 1, o++, setTimeout(Wl, n)) : (o = 0, n = 1e3, e.commit("application/setAutoSavePending", !1));
  }).catch((a) => {
    if (a instanceof jo)
      e.commit("application/setIsLoginDialogOn", !0);
    else
      throw a;
  }), 3e3), Wl;
}, Nf = JA(eD), tD = window.Vuex.useStore, nD = () => {
  const e = tD(), t = Nf(), { currentMTProvider: n } = Ae(e), { sourceSection: o, currentProposedTranslation: s } = te(), { selectNextTranslationUnit: a } = Qo();
  return () => b(void 0, null, function* () {
    o.value.setTranslationForSelectedTranslationUnit(
      s.value,
      n.value
    ), t(), e.commit("application/setAutoSavePending", !0), a();
  });
}, oD = window.Vuex.useStore, sD = () => {
  const e = oD(), t = Nf();
  return () => {
    e.commit("application/setAutoSavePending", !1), t.cancel();
  };
}, aD = window.Vuex.useStore, iD = window.Vue.computed, Uf = () => {
  const e = aD(), t = qe(), { currentTranslation: n } = Mt(), { currentMTProvider: o, previousRoute: s } = Ae(e), { currentTargetPage: a } = lt(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: l,
    pageURLParameter: u,
    sectionURLParameter: d
  } = B(), i = St(), c = iD(() => {
    var y;
    const v = {
      translation_source_language: r.value,
      translation_target_language: l.value,
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
    if (d.value ? (v.translation_source_section = d.value, v.translation_type = "section") : v.translation_type = "article", n.value) {
      v.translation_id = n.value.translationId, v.translation_target_title = n.value.targetTitle;
      const S = n.value.targetSectionTitle;
      S && (v.translation_target_section = S);
    } else
      a.value && (v.translation_target_title = (y = a.value) == null ? void 0 : y.title);
    return o.value && (v.translation_provider = ee.getProviderForInstrumentation(o.value)), v;
  });
  return {
    logEditorOpenEvent: () => {
      var E;
      const v = t.currentRoute.value.meta.workflowStep, S = t.getRoutes().find(
        (C) => C.name === s.value
      ), x = ((E = S == null ? void 0 : S.meta) == null ? void 0 : E.workflowStep) || 0;
      return v > x ? i(ae({
        event_type: "editor_open"
      }, c.value)) : Promise.resolve();
    },
    logEditorCloseEvent: () => i(ae({
      event_type: "editor_close"
    }, c.value)),
    logEditorCloseWarnEvent: () => i(ae({
      event_type: "editor_close_warn"
    }, c.value)),
    logEditorSegmentAddEvent: () => i(ae({
      event_type: "editor_segment_add"
    }, c.value)),
    logEditorSegmentSkipEvent: () => i(ae({
      event_type: "editor_segment_skip"
    }, c.value)),
    logEditorSegmentEditEvent: () => i(ae({
      event_type: "editor_segment_edit"
    }, c.value))
  };
}, rD = (e, t, n, o) => b(void 0, null, function* () {
  var l, u, d;
  const s = ((l = t.user) == null ? void 0 : l.content) || ((u = t.mt) == null ? void 0 : u.content), a = (d = t == null ? void 0 : t.mt) == null ? void 0 : d.engine, r = yield Df(
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
      const l = (r = t.mt) == null ? void 0 : r.engine;
      o.addProposedTranslation(l, n.mt.innerHTML), o.mtProviderUsed = l;
    }
  });
}, cD = (e, t, n, o) => b(void 0, null, function* () {
  if (e.corporaRestoredUnit = t, e.isBlockTemplate)
    return rD(e, t, n, o);
  lD(e, t);
}), uD = (e, t, n, o) => {
  const s = [];
  for (const a of e.sections || [])
    if (o.filter(
      (l) => l.pageSectionId === parseInt(a.id)
    ).length)
      for (const l of a.subSections) {
        const u = o.find(
          (i) => i.subSectionId === l.id
        );
        if (!u)
          continue;
        const d = cD(
          l,
          u,
          t || e.title,
          n
        );
        s.push(d);
      }
  return Promise.all(s);
}, dD = { restoreCorporaDraft: uD }, gD = () => {
  const { currentSourcePage: e } = lt(), { sourceSection: t } = te();
  return (n) => b(void 0, null, function* () {
    if (n.restored)
      return;
    const o = yield vt.fetchTranslationUnits(
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
const ge = window.Vue.unref, ht = window.Vue.createVNode, dn = window.Vue.withCtx, pD = window.Vue.resolveDirective, cm = window.Vue.createElementVNode, mD = window.Vue.withDirectives, hD = window.Vue.toDisplayString, fD = window.Vue.createTextVNode, wD = window.Vue.renderList, vD = window.Vue.Fragment, Tn = window.Vue.openBlock, um = window.Vue.createElementBlock, Ao = window.Vue.createBlock;
window.Vue.createCommentVNode;
const _D = window.Vue.normalizeClass, SD = window.Vue.normalizeStyle, yD = { class: "sx-sentence-selector__header-title mb-0" }, xD = { class: "sx-sentence-selector__section-contents px-4" }, Do = window.Vue.computed, CD = window.Vue.nextTick, bD = window.Vue.onMounted, Rs = window.Vue.ref, dm = window.Vue.watch, kD = window.Vuex.useStore, gm = window.Codex.CdxButton, $D = window.Codex.CdxIcon, VD = {
  __name: "SXSentenceSelector",
  setup(e) {
    const t = Rs(!1), n = Rs(!1), o = Rs("100%"), s = kD(), { currentMTProvider: a } = Ae(s), {
      sourceLanguageURLParameter: r,
      targetLanguageURLParameter: l,
      pageURLParameter: u,
      sectionURLParameter: d
    } = B(), { sourceSection: i, selectedContentTranslationUnit: c } = te(), g = Rs({
      pageContent: !1,
      pageMetadata: !1,
      draftRestored: !1,
      mtProviders: !1
    }), p = Do(
      () => Object.values(g.value).every(Boolean)
    ), m = Do(
      () => {
        var fe;
        return (fe = i.value) == null ? void 0 : fe.isSelectedTranslationUnitTranslated;
      }
    ), h = Do(() => {
      var fe;
      return (fe = i.value) == null ? void 0 : fe.subSections;
    }), f = Do(
      () => {
        var fe;
        return (fe = i.value) == null ? void 0 : fe.selectedTranslationUnitOriginalContent;
      }
    ), w = Do(
      () => isNaN(o.value) ? o.value : `${o.value}px`
    ), {
      logEditorOpenEvent: v,
      logEditorCloseEvent: y,
      logEditorCloseWarnEvent: S,
      logEditorSegmentAddEvent: x,
      logEditorSegmentSkipEvent: E
    } = Uf(), C = zA();
    jA()().then(() => {
      v(), g.value.mtProviders = !0;
    });
    const L = GA(), { fetchTranslationsByStatus: T, translationsFetched: R } = Ko(), K = gD(), { currentTranslation: W } = Mt(), { selectPageSectionByTitle: ke, selectPageSectionByIndex: ue } = Ki(), ct = iu(), De = Go();
    bD(() => b(this, null, function* () {
      if (!R.value.draft) {
        const fe = [
          // required to get current draft translation (if exists)
          T("draft"),
          // required to get target page title for template adaptation (useTranslationUnitTranslate)
          ct(r.value, u.value),
          // user has just been redirected here from another wiki, and page metadata have not yet been fetched
          De(r.value, [u.value])
        ];
        yield Promise.all(fe);
      }
      g.value.pageMetadata = !0, d.value ? yield ke(d.value) : yield ue(0), g.value.pageContent = !0, W.value && (yield K(W.value)), g.value.draftRestored = !0, dm(
        p,
        () => b(this, null, function* () {
          p.value && (yield CD(), C(), L());
        }),
        { immediate: !0 }
      ), o.value = window.innerHeight;
    })), dm(c, L);
    const { selectNextTranslationUnit: he, selectPreviousTranslationUnit: xe } = Qo(), Te = () => (E(), he()), Ue = nD(), J = () => {
      x(), Ue();
    }, U = () => {
      n.value = !0, setTimeout(() => {
        n.value = !1;
      }, 100);
    }, q = qe(), M = () => {
      const { autoSavePending: fe } = s.state.application;
      if (fe) {
        pe.value = !0, S();
        return;
      }
      V();
    }, I = sD(), { clearTranslationURLParameters: _ } = B(), V = () => b(this, null, function* () {
      T("draft"), W.value && (i.value.reset(), W.value.restored = !1), y(), _(), I(), yield q.push({ name: "dashboard" });
    }), {
      translateTranslationUnitById: D,
      translateSelectedTranslationUnitForAllProviders: P
    } = cu(), G = () => {
      Ie.value || (t.value = !0, P());
    }, { getCurrentTitleByLanguage: se } = _n(), O = (fe) => {
      q.push({
        name: "sx-editor",
        state: {
          content: fe,
          originalContent: f.value,
          title: se(
            l.value,
            r.value
          ),
          isInitialEdit: !m.value || null
        }
      });
    }, j = () => q.push({ name: "sx-publisher" }), ne = () => b(this, null, function* () {
      c.value ? yield D(
        c.value.id,
        a.value
      ) : yield D(0, a.value);
    }), Ie = Do(
      () => c.value instanceof at
    ), pe = Rs(!1);
    return (fe, zn) => {
      const Zo = pD("i18n");
      return Tn(), um("section", {
        class: "sx-sentence-selector fill-height column ma-0 no-wrap",
        style: SD(w.value)
      }, [
        ht(ge(F), { class: "sx-sentence-selector__header ma-0 py-2" }, {
          default: dn(() => [
            ht(ge(k), { shrink: "" }, {
              default: dn(() => [
                ht(ge(gm), {
                  weight: "quiet",
                  class: "px-3",
                  "aria-label": fe.$i18n("cx-sx-sentence-selector-header-close-button-aria-label"),
                  onClick: M
                }, {
                  default: dn(() => [
                    ht(ge($D), { icon: ge(Eh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            }),
            ht(ge(k), {
              grow: "",
              class: "px-1"
            }, {
              default: dn(() => [
                mD(cm("h4", yD, null, 512), [
                  [Zo, void 0, "cx-sx-sentence-selector-header-title"]
                ])
              ]),
              _: 1
            }),
            ht(ge(k), {
              shrink: "",
              class: "px-3"
            }, {
              default: dn(() => [
                ht(ge(gm), {
                  disabled: !(ge(i) && ge(i).isTranslated),
                  onClick: j
                }, {
                  default: dn(() => [
                    fD(hD(fe.$i18n("cx-sx-sentence-selector-done-button-label")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        p.value ? (Tn(), Ao(ge(F), {
          key: 0,
          tag: "section",
          direction: "column",
          align: "start",
          justify: "between",
          class: "sx-sentence-selector__body fill-height ma-0"
        }, {
          default: dn(() => [
            ht(ge(k), {
              dir: ge(z.getDir)(ge(r)),
              lang: ge(r),
              class: "sx-sentence-selector__section"
            }, {
              default: dn(() => [
                ht(lL),
                cm("div", xD, [
                  (Tn(!0), um(vD, null, wD(h.value, (Yt) => (Tn(), Ao(JL, {
                    id: Yt.id,
                    key: `sub-section-${Yt.id}`,
                    "sub-section": Yt,
                    onBounceTranslation: U
                  }, null, 8, ["id", "sub-section"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["dir", "lang"]),
            !Ie.value && m.value ? (Tn(), Ao(RA, {
              key: 0,
              onEditTranslation: O,
              onSelectNextSegment: ge(he),
              onSelectPreviousSegment: ge(xe)
            }, null, 8, ["onSelectNextSegment", "onSelectPreviousSegment"])) : Ie.value ? (Tn(), Ao(_A, {
              key: 2,
              onEditTranslation: O,
              onApplyTranslation: J,
              onSkipTranslation: Te,
              onSelectPreviousSegment: ge(xe),
              onSelectNextSegment: ge(he)
            }, null, 8, ["onSelectPreviousSegment", "onSelectNextSegment"])) : (Tn(), Ao(zL, {
              key: 1,
              class: _D({ "mb-0": !n.value }),
              onConfigureOptions: G,
              onEditTranslation: O,
              onApplyTranslation: J,
              onSkipTranslation: Te,
              onSelectPreviousSegment: ge(xe),
              onRetryTranslation: ne
            }, null, 8, ["class", "onSelectPreviousSegment"]))
          ]),
          _: 1
        })) : (Tn(), Ao(ge(F), {
          key: 1,
          column: "",
          class: "grow"
        }, {
          default: dn(() => [
            ht(ge(it), { class: "mt-0" })
          ]),
          _: 1
        })),
        ht(Q5, {
          active: t.value,
          "onUpdate:active": zn[0] || (zn[0] = (Yt) => t.value = Yt)
        }, null, 8, ["active"]),
        ht($5, {
          modelValue: pe.value,
          "onUpdate:modelValue": zn[1] || (zn[1] = (Yt) => pe.value = Yt),
          onDiscardTranslation: V
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
const UD = window.Vue.resolveDirective, $i = window.Vue.withDirectives, At = window.Vue.openBlock, gn = window.Vue.createElementBlock, Vi = window.Vue.createCommentVNode, Ei = window.Vue.Transition, Jn = window.Vue.withCtx, To = window.Vue.createVNode, zs = window.Vue.createElementVNode, Bn = window.Vue.unref, ID = window.Vue.renderList, RD = window.Vue.Fragment, zD = window.Vue.normalizeClass, pm = window.Vue.createBlock, OD = window.Vue.toDisplayString, jD = window.Vue.createTextVNode, HD = { class: "sx-quick-tutorial" }, qD = { class: "sx-quick-tutorial__main-point my-4 py-5 px-6" }, GD = {
  key: "main-point-1",
  class: "ma-0 pa-0"
}, XD = {
  key: "main-point-2",
  class: "ma-0 pa-0"
}, WD = { class: "sx-quick-tutorial__illustration" }, KD = ["innerHTML"], YD = ["innerHTML"], QD = { class: "sx-quick-tutorial__step-indicator py-3" }, JD = ["onClick"], ZD = { class: "sx-quick-tutorial__secondary-point py-4 px-6" }, eT = {
  key: "secondary-point-1",
  class: "ma-0"
}, tT = {
  key: "secondary-point-2",
  class: "ma-0"
}, nT = { class: "sx-quick-tutorial__action-button pt-4 pb-6 flex justify-end" }, mm = window.Vue.ref, hm = window.Codex.CdxButton, oT = window.Codex.CdxIcon, sT = {
  __name: "SXQuickTutorial",
  setup(e) {
    const t = mm(2), n = mm(1), o = () => {
      n.value < t.value && n.value++;
    }, s = (r) => r === n.value, a = Yo();
    return (r, l) => {
      const u = UD("i18n");
      return At(), gn("section", HD, [
        To(Bn(F), {
          direction: "column",
          class: "sx-quick-tutorial__body-container ma-0"
        }, {
          default: Jn(() => [
            zs("section", qD, [
              To(Ei, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Jn(() => [
                  s(1) ? $i((At(), gn("h2", GD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-1"]
                  ]) : s(2) ? $i((At(), gn("h2", XD, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-main-point-step-2"]
                  ]) : Vi("", !0)
                ]),
                _: 1
              })
            ]),
            zs("section", WD, [
              To(Ei, { name: "mw-ui-animation-slide-start" }, {
                default: Jn(() => [
                  s(1) ? (At(), gn("div", {
                    key: "illustration-1",
                    innerHTML: Bn(ND)
                  }, null, 8, KD)) : s(2) ? (At(), gn("div", {
                    key: "illustration-2",
                    innerHTML: Bn(MD)
                  }, null, 8, YD)) : Vi("", !0)
                ]),
                _: 1
              })
            ]),
            zs("div", QD, [
              (At(!0), gn(RD, null, ID(t.value, (d) => (At(), gn("span", {
                key: `dot-${d}`,
                class: zD(["dot mx-1", { "dot-active": s(d) }]),
                role: "button",
                onClick: (i) => n.value = d
              }, null, 10, JD))), 128))
            ]),
            zs("section", ZD, [
              To(Ei, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Jn(() => [
                  s(1) ? $i((At(), gn("h3", eT, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-1"]
                  ]) : s(2) ? $i((At(), gn("h3", tT, null, 512)), [
                    [u, void 0, "sx-quick-tutorial-secondary-point-step-2"]
                  ]) : Vi("", !0)
                ]),
                _: 1
              })
            ]),
            zs("div", nT, [
              To(Ei, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Jn(() => [
                  s(1) ? (At(), pm(Bn(hm), {
                    key: "quick-tutorial-action-button-1",
                    "aria-label": r.$i18n("sx-quick-tutorial-next-button-aria-label"),
                    class: "px-6 mx-4",
                    action: "progressive",
                    weight: "primary",
                    onClick: o
                  }, {
                    default: Jn(() => [
                      To(Bn(oT), { icon: Bn(pa) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])) : s(2) ? (At(), pm(Bn(hm), {
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
const pT = window.Vue.resolveDirective, fm = window.Vue.createElementVNode, mT = window.Vue.withDirectives, hT = window.Vue.unref, fT = window.Vue.withCtx, wT = window.Vue.createVNode, vT = window.Vue.openBlock, _T = window.Vue.createElementBlock, ST = { class: "px-4 pt-3 pb-2 sx-editor__original-content-panel" }, yT = { class: "sx-editor__original-content-panel__header mb-2" }, xT = ["lang", "dir", "innerHTML"], wm = window.Vue.ref, CT = window.Vue.onMounted, bT = {
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
        d.href = Q.getPageUrl(l, d.title), d.target = "_blank";
    }, o = wm(null), s = wm(0), a = () => parseFloat(
      document.defaultView.getComputedStyle(o.value, null).getPropertyValue("line-height")
    );
    return CT(() => {
      s.value = 2 * a(), n(o.value, t.language);
    }), (r, l) => {
      const u = pT("i18n");
      return vT(), _T("section", ST, [
        mT(fm("h5", yT, null, 512), [
          [u, void 0, "cx-sx-editor-original-panel-label"]
        ]),
        wT(hT(X1), {
          "min-height": s.value,
          scroll: ""
        }, {
          default: fT(() => [
            fm("div", {
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
const $T = window.Vue.unref, Os = window.Vue.createElementVNode, vm = window.Vue.resolveDirective, Kl = window.Vue.withDirectives, VT = window.Vue.normalizeClass, ET = window.Vue.openBlock, LT = window.Vue.createElementBlock, AT = window.Vue.createCommentVNode, DT = {
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
      () => Wt.calculateScore(
        t.editedTranslation,
        t.proposedTranslation,
        n.value
      )
    ), s = Yl(() => {
      const r = Wt.getScoreStatus(o.value);
      return r === "failure" ? o.value === 0 ? "failure" : "warning" : r;
    }), a = Yl(
      () => `sx-editor__feedback-overlay-content__stats--${s.value}`
    );
    return (r, l) => {
      const u = vm("i18n"), d = vm("i18n-html");
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
            [d, [o.value], "sx-editor-feedback-overlay-stats"]
          ])
        ])
      ])) : AT("", !0);
    };
  }
}, NT = window.Vuex.useStore, UT = () => {
  const e = NT(), t = uu(), { selectNextTranslationUnit: n } = Qo(), { sourceSection: o, selectedContentTranslationUnit: s } = te(), { getCurrentTitleByLanguage: a } = _n(), {
    sourceLanguageURLParameter: r,
    targetLanguageURLParameter: l
  } = B(), { currentMTProvider: u } = Ae(e);
  return (d) => b(void 0, null, function* () {
    const i = document.createElement("div");
    i.innerHTML = d, i.querySelectorAll(".sx-edit-dummy-node").forEach((c) => c.remove()), d = i.innerHTML, s.value instanceof at && (d = (yield Df(
      d,
      a(l.value, r.value),
      l.value
    )) || d), o.value.setTranslationForSelectedTranslationUnit(
      d,
      u.value
    ), t(), n();
  });
};
const nt = window.Vue.unref, Ql = window.Vue.openBlock, Jl = window.Vue.createBlock, _m = window.Vue.createCommentVNode, Sm = window.Vue.createVNode, IT = window.Vue.createElementVNode, RT = window.Vue.withCtx, zT = { class: "sx-editor__editing-surface-container grow" }, Zl = window.Vue.ref, OT = window.Vue.computed, jT = {
  __name: "SXEditor",
  props: {
    fromRoute: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Zl(!1), o = qe(), s = () => n.value = !0, a = () => o.replace({ name: t.fromRoute }), { isFinalEdit: r, isInitialEdit: l, content: u, originalContent: d, title: i } = history.state, c = Zl(null), g = Zl(!1), { logEditorSegmentAddEvent: p, logEditorSegmentEditEvent: m } = Uf(), {
      sourceLanguageURLParameter: h,
      targetLanguageURLParameter: f
    } = B(), { sourceSection: w } = te(), v = OT(
      () => Wt.calculateScore(
        c.value,
        u,
        f.value
      )
    ), y = UT(), S = (x) => b(this, null, function* () {
      c.value = x, g.value = !0;
      const E = new Promise((N) => setTimeout(N, 2e3));
      let C = Promise.resolve();
      r ? w.value.editedTranslation = x : C = y(x), v.value === 0 && l ? p() : v.value > 0 && m(), yield Promise.all([E, C]), g.value = !1, a();
    });
    return (x, E) => (Ql(), Jl(nt(F), {
      tag: "section",
      class: "sx-editor ma-0 no-wrap",
      direction: "column",
      align: "normal"
    }, {
      default: RT(() => [
        nt(d) ? (Ql(), Jl(bT, {
          key: 0,
          language: nt(h),
          dir: nt(z.getDir)(nt(h)),
          "original-content": nt(d)
        }, null, 8, ["language", "dir", "original-content"])) : _m("", !0),
        n.value ? _m("", !0) : (Ql(), Jl(nt(it), { key: 1 })),
        IT("div", zT, [
          Sm(MT, {
            "edited-translation": c.value,
            "show-feedback": g.value,
            "proposed-translation": nt(u)
          }, null, 8, ["edited-translation", "show-feedback", "proposed-translation"]),
          Sm(SV, {
            content: nt(u),
            language: nt(f),
            dir: nt(z.getDir)(nt(f)),
            title: nt(i),
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
const QT = /* @__PURE__ */ oe(HT, [["render", YT]]);
const qt = window.Vue.unref, Zn = window.Vue.createVNode, js = window.Vue.withCtx, JT = window.Vue.resolveDirective, ZT = window.Vue.withDirectives, e6 = window.Vue.openBlock, t6 = window.Vue.createBlock, ym = window.Codex.CdxButton, xm = window.Codex.CdxIcon, n6 = {
  __name: "SXPublisherHeader",
  props: {
    isPublishingDisabled: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["publish-translation"],
  setup(e) {
    const t = qe(), n = () => t.push({ name: "sx-sentence-selector" });
    return (o, s) => {
      const a = JT("i18n");
      return e6(), t6(qt(F), { class: "ma-0 sx-publisher__header" }, {
        default: js(() => [
          Zn(qt(k), {
            shrink: "",
            class: "me-2"
          }, {
            default: js(() => [
              Zn(qt(ym), {
                class: "px-3",
                weight: "quiet",
                "aria-label": o.$i18n("cx-sx-publisher-header-close-button-aria-label"),
                onClick: n
              }, {
                default: js(() => [
                  Zn(qt(xm), { icon: qt(Wo) }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["aria-label"])
            ]),
            _: 1
          }),
          ZT(Zn(qt(k), {
            grow: "",
            tag: "h5",
            class: "ma-0"
          }, null, 512), [
            [a, void 0, "cx-sx-publisher-header-title"]
          ]),
          Zn(qt(k), { shrink: "" }, {
            default: js(() => [
              Zn(qt(ym), {
                class: "px-5",
                disabled: e.isPublishingDisabled,
                action: "progressive",
                weight: "primary",
                "aria-label": o.$i18n("cx-sx-publisher-header-check-button-aria-label"),
                onClick: s[0] || (s[0] = (r) => o.$emit("publish-translation"))
              }, {
                default: js(() => [
                  Zn(qt(xm), { icon: qt(WS) }, null, 8, ["icon"])
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
</svg>`, Cm = `<svg width="136" height="136" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>publishing-failure</title>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle fill="#FEE7E6" cx="68" cy="68" r="68"></circle>
        <path d="M68,24 C43.6994698,24 24,43.6994844 24,68 C24,92.3005302 43.6994747,112 68,112 C92.3005156,112 112,92.3005302 112,68 C112,43.6994844 92.3005156,24 68,24 Z M92.4444444,72.8888889 L43.5555556,72.8888889 L43.5555556,63.1111111 L92.4444444,63.1111111 L92.4444444,72.8888889 Z" fill="#D73333"></path>
    </g>
</svg>`;
const ec = window.Vue.createElementVNode, bm = window.Vue.toDisplayString, tc = window.Vue.unref, nc = window.Vue.withCtx, km = window.Vue.createVNode, a6 = window.Vue.openBlock, i6 = window.Vue.createBlock, r6 = window.Vue.createCommentVNode, l6 = ["innerHTML"], c6 = ["textContent"], u6 = ["textContent"], oc = window.Vue.computed, d6 = {
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
    const t = ce(), n = e, o = {
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
        svg: Cm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      },
      warning: {
        svg: Cm,
        title: t.i18n("cx-sx-publisher-animation-failure-message-title"),
        subtitle: t.i18n(
          "cx-sx-publisher-animation-failure-message-subtitle"
        )
      }
    }, s = oc(() => o[n.status].svg), a = oc(() => o[n.status].title), r = oc(() => o[n.status].subtitle);
    return (l, u) => e.active ? (a6(), i6(tc(_t), {
      key: 0,
      header: !1,
      class: "sx-publisher__publish-animation"
    }, {
      default: nc(() => [
        km(tc(F), { class: "ma-4" }, {
          default: nc(() => [
            km(tc(k), null, {
              default: nc(() => [
                ec("div", {
                  class: "sx-publisher__publish-animation-icon mb-4",
                  innerHTML: s.value
                }, null, 8, l6),
                ec("h2", {
                  textContent: bm(a.value)
                }, null, 8, c6),
                ec("p", {
                  class: "ma-0",
                  textContent: bm(r.value)
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
const ot = window.Vue.unref, Dt = window.Vue.createVNode, pn = window.Vue.withCtx, g6 = window.Vue.resolveDirective, p6 = window.Vue.withDirectives, $m = window.Vue.toDisplayString, m6 = window.Vue.createTextVNode, sc = window.Vue.openBlock, Vm = window.Vue.createElementBlock, h6 = window.Vue.createCommentVNode, If = window.Vue.createElementVNode, f6 = window.Vue.createBlock, w6 = { class: "sx-publisher__captcha-dialog__content pt-4 px-6 pb-6" }, v6 = ["src"], _6 = ["textContent"], S6 = /* @__PURE__ */ If("p", { class: "mt-0" }, null, -1), y6 = window.Vue.computed, x6 = window.Vue.inject, C6 = window.Vue.ref, Em = window.Codex.CdxButton, b6 = window.Codex.CdxIcon, k6 = {
  __name: "SXPublisherCaptchaDialog",
  props: {
    active: {
      type: Boolean,
      required: !0
    },
    captchaDetails: {
      type: Ih,
      default: null
    }
  },
  emits: ["close", "publish"],
  setup(e, { emit: t }) {
    const n = t, o = C6(""), s = () => n("close"), a = () => n("publish", o.value), r = x6("breakpoints"), l = y6(() => r.value.mobile);
    return (u, d) => {
      const i = g6("i18n");
      return e.active && e.captchaDetails ? (sc(), f6(ot(_t), {
        key: 0,
        fullscreen: l.value,
        class: "sx-publisher__captcha-dialog"
      }, {
        header: pn(() => [
          Dt(ot(F), {
            class: "mw-ui-dialog__header ma-0",
            align: "stretch"
          }, {
            default: pn(() => [
              Dt(ot(k), {
                class: "ms-3 me-1",
                shrink: ""
              }, {
                default: pn(() => [
                  Dt(ot(Em), {
                    class: "my-1",
                    weight: "quiet",
                    size: "large",
                    "aria-label": u.$i18n("cx-sx-publisher-captcha-dialog-close-button-aria-label"),
                    onClick: s
                  }, {
                    default: pn(() => [
                      Dt(ot(b6), { icon: ot(Wo) }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["aria-label"])
                ]),
                _: 1
              }),
              p6(Dt(ot(k), {
                grow: "",
                class: "sx-publisher__captcha-dialog__header-title items-center justify-start me-4"
              }, null, 512), [
                [i, void 0, "cx-sx-publisher-captcha-dialog-header-title"]
              ]),
              Dt(ot(k), {
                shrink: "",
                class: "justify-center"
              }, {
                default: pn(() => [
                  Dt(ot(Em), {
                    weight: "primary",
                    action: "progressive",
                    onClick: a
                  }, {
                    default: pn(() => [
                      m6($m(u.$i18n("cx-sx-publisher-captcha-dialog-publish-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          Dt(ot(Mi))
        ]),
        default: pn(() => [
          If("div", w6, [
            e.captchaDetails.type === "image" ? (sc(), Vm("img", {
              key: 0,
              class: "sx-publisher__captcha-dialog__puzzle-image",
              src: e.captchaDetails.url
            }, null, 8, v6)) : (sc(), Vm("p", {
              key: 1,
              textContent: $m(e.captchaDetails.question)
            }, null, 8, _6)),
            S6,
            Dt(ot(F), { class: "ma-0" }, {
              default: pn(() => [
                Dt(ot(k), null, {
                  default: pn(() => [
                    Dt(ot(fc), {
                      value: o.value,
                      "onUpdate:value": d[0] || (d[0] = (c) => o.value = c),
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
const eo = window.Vue.unref, Li = window.Vue.createVNode, Bo = window.Vue.withCtx, Po = window.Vue.createElementVNode, $6 = window.Vue.resolveDirective, V6 = window.Vue.withDirectives, E6 = window.Vue.renderList, L6 = window.Vue.Fragment, ac = window.Vue.openBlock, A6 = window.Vue.createElementBlock, Lm = window.Vue.toDisplayString, Am = window.Vue.createTextVNode, D6 = window.Vue.normalizeClass, Dm = window.Vue.createBlock, T6 = { class: "mw-ui-dialog__header" }, B6 = { class: "row ma-0 px-4 py-3" }, P6 = { class: "col shrink justify-center" }, F6 = { class: "col grow items-center mw-ui-dialog__header-title justify-start ps-2" }, M6 = { class: "mb-0" }, N6 = { class: "pa-4" }, U6 = window.Codex.CdxField, I6 = window.Codex.CdxRadio, R6 = window.Vuex.useStore, Hs = window.Vue.computed, z6 = window.Codex.CdxButton, O6 = window.Codex.CdxIcon, j6 = {
  __name: "SXPublishOptionSelector",
  props: {
    active: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const n = t, o = R6(), s = Hs(() => o.state.application.publishTarget), a = Hs(() => o.state.translator.isAnon), r = ce(), { sourceSection: l } = te(), u = Hs(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-label") : r.i18n("cx-sx-publisher-new-section-option-label")
    ), d = Hs(
      () => l.value.isLeadSection ? r.i18n("cx-sx-publisher-lead-section-option-details") : r.i18n("cx-sx-publisher-new-section-option-details")
    ), i = Hs(() => [
      {
        label: u.value,
        description: d.value,
        value: "NEW_SECTION",
        disabled: !1
      },
      {
        label: r.i18n("cx-sx-publisher-sandbox-option-label"),
        description: r.i18n("cx-sx-publisher-sandbox-option-details"),
        value: "SANDBOX_SECTION",
        disabled: a.value
      }
    ]), c = () => n("update:active", !1), g = (p) => {
      o.commit("application/setPublishTarget", p), c();
    };
    return (p, m) => {
      const h = $6("i18n");
      return ac(), Dm(eo(_t), {
        value: e.active,
        class: "sx-publisher__publish-options",
        title: p.$i18n("cx-sx-publisher-preview-options-title"),
        onInput: m[0] || (m[0] = (f) => p.$emit("update:active", f)),
        onClose: c
      }, {
        header: Bo(() => [
          Po("div", T6, [
            Po("div", B6, [
              Po("div", P6, [
                Li(eo(z6), {
                  class: "pa-0",
                  weight: "quiet",
                  "aria-label": p.$i18n("cx-sx-publisher-preview-options-back-button-aria-label"),
                  onClick: c
                }, {
                  default: Bo(() => [
                    Li(eo(O6), { icon: eo(Eh) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              Po("div", F6, [
                V6(Po("h4", M6, null, 512), [
                  [h, void 0, "cx-sx-publisher-preview-options-title"]
                ])
              ])
            ]),
            Li(eo(Mi))
          ])
        ]),
        default: Bo(() => [
          Po("div", N6, [
            Li(eo(U6), { "is-fieldset": "" }, {
              default: Bo(() => [
                (ac(!0), A6(L6, null, E6(i.value, (f, w) => (ac(), Dm(eo(I6), {
                  key: "publish-options-radio-" + f.value,
                  class: D6(w < i.value.length - 1 ? "mb-4" : "mb-0"),
                  "model-value": s.value,
                  "input-value": f.value,
                  disabled: f.disabled,
                  name: "publish-options",
                  "onUpdate:modelValue": g
                }, {
                  description: Bo(() => [
                    Am(Lm(f.description), 1)
                  ]),
                  default: Bo(() => [
                    Am(Lm(f.label) + " ", 1)
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
const Tt = window.Vue.unref, to = window.Vue.createVNode, Tm = window.Vue.resolveDirective, Bm = window.Vue.withDirectives, Ai = window.Vue.openBlock, Pm = window.Vue.createElementBlock, H6 = window.Vue.createCommentVNode, Fm = window.Vue.toDisplayString, ic = window.Vue.createElementVNode, Fo = window.Vue.withCtx, Mm = window.Vue.createBlock, q6 = window.Vue.Fragment, G6 = window.Vue.normalizeClass, X6 = { class: "sx-publisher__review-info__content" }, W6 = { key: 0 }, K6 = ["textContent"], Y6 = ["textContent"], Pn = window.Vue.computed, Nm = window.Vue.ref, Q6 = window.Vue.watch, Um = window.Codex.CdxButton, rc = window.Codex.CdxIcon, J6 = {
  __name: "SXPublisherReviewInfo",
  props: {
    publishFeedbackMessages: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = Nm(0), o = Nm(null);
    Q6(o, () => {
      var f;
      const h = (f = o.value) == null ? void 0 : f.$el;
      if (h instanceof HTMLElement) {
        const w = h.querySelector("a");
        w && w.setAttribute("target", "_blank");
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
          return $h;
        case "error":
          return GS;
        default:
          return QS;
      }
    }), l = Pn(() => a.value === "default"), u = Pn(
      () => l.value ? "notice" : a.value
    ), d = Pn(
      () => `sx-publisher__review-info--${u.value}`
    ), i = ce(), c = Pn(() => {
      var h;
      return (h = s.value) == null ? void 0 : h.text;
    }), g = Pn(
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
      const w = Tm("i18n"), v = Tm("i18n-html");
      return Ai(), Mm(Tt(c1), {
        type: u.value,
        class: G6(["sx-publisher__review-info ma-0 pa-4", d.value]),
        inline: l.value
      }, {
        icon: Fo(() => [
          to(Tt(rc), {
            icon: r.value,
            class: "shrink mw-ui-message__icon items-start me-1"
          }, null, 8, ["icon"])
        ]),
        default: Fo(() => [
          ic("div", X6, [
            a.value === "default" ? Bm((Ai(), Pm("h5", W6, null, 512)), [
              [w, void 0, "cx-sx-publisher-review-info"]
            ]) : (Ai(), Pm(q6, { key: 1 }, [
              ic("h5", {
                textContent: Fm(g.value)
              }, null, 8, K6),
              ic("p", {
                textContent: Fm(c.value)
              }, null, 8, Y6),
              to(Tt(F), {
                justify: "between",
                class: "ma-0"
              }, {
                default: Fo(() => [
                  Bm(to(Tt(k), {
                    ref_key: "learnMoreContainer",
                    ref: o,
                    class: "sx-publisher__review-info__learn-more-anchor"
                  }, null, 512), [
                    [v, void 0, "cx-sx-publisher-review-info-learn-more"]
                  ]),
                  e.publishFeedbackMessages.length > 1 ? (Ai(), Mm(Tt(k), {
                    key: 0,
                    class: "sx-publisher__review-info__navigation-buttons justify-end",
                    align: "center"
                  }, {
                    default: Fo(() => [
                      to(Tt(Um), {
                        weight: "quiet",
                        class: "pa-0 me-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-previous-button-aria-label"),
                        onClick: p
                      }, {
                        default: Fo(() => [
                          to(Tt(rc), { icon: Tt(Yc) }, null, 8, ["icon"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"]),
                      to(Tt(Um), {
                        weight: "quiet",
                        class: "pa-0 ms-1",
                        "aria-label": h.$i18n("cx-sx-publisher-review-info-next-button-aria-label"),
                        onClick: m
                      }, {
                        default: Fo(() => [
                          to(Tt(rc), { icon: Tt(pa) }, null, 8, ["icon"])
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
  const e = e9(), { currentTranslation: t } = Mt(), { currentMTProvider: n, previousRoute: o } = Ae(e), { currentTargetPage: s } = lt(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    sectionURLParameter: u
  } = B(), { sourceSection: d } = te(), i = St(), c = t9(() => {
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
      translation_source_title: l.value,
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
      const w = t.value.targetSectionTitle;
      w && (h.translation_target_section = w);
    } else
      s.value && (h.translation_target_title = (f = s.value) == null ? void 0 : f.title);
    return n.value && (h.translation_provider = ee.getProviderForInstrumentation(n.value)), h.human_modification_rate = Wt.getMTScoreForPageSection(
      d.value,
      r.value
    ) / 100, h.human_modification_threshold = Wt.getMtModificationThreshold(), h;
  });
  return {
    logPublishAttemptEvent: () => i(ae({
      event_type: "publish_attempt"
    }, c.value)),
    logPublishSuccessEvent: (h, f) => i(ae({
      event_type: "publish_success",
      published_page_id: h,
      published_revision_id: f
    }, c.value)),
    logPublishFailureEvent: () => i(ae({
      event_type: "publish_failure"
    }, c.value))
  };
}, o9 = window.Vue.computed, Im = window.Vue.ref, s9 = window.Vuex.useStore, a9 = () => {
  const e = s9(), {
    pageURLParameter: t,
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), { sourceSection: s, targetPageTitleForPublishing: a } = te(), r = Mf(), { sectionSuggestion: l } = Ge(), u = o9(
    () => {
      var y, S;
      return (S = l.value) == null ? void 0 : S.presentSections[(y = s.value) == null ? void 0 : y.sourceSectionTitleForPublishing];
    }
  ), { existingSectionPublishOption: d } = ru(), i = Im(!1), c = Im("pending"), g = () => i.value = !1, p = uu(), {
    logPublishAttemptEvent: m,
    logPublishSuccessEvent: h,
    logPublishFailureEvent: f
  } = n9(), w = (y, S) => b(void 0, null, function* () {
    m();
    const x = yield p();
    if (x instanceof Ro)
      return f(), { publishFeedbackMessage: x, targetUrl: null };
    const E = x, C = a.value, N = e.getters["application/isSandboxTarget"], L = {
      html: Z6(s.value.translationHtml),
      sourceTitle: t.value,
      targetTitle: C,
      sourceSectionTitle: s.value.sourceSectionTitleForPublishing,
      targetSectionTitle: s.value.targetSectionTitleForPublishing,
      sourceLanguage: n.value,
      targetLanguage: o.value,
      revision: r.value,
      isSandbox: N,
      sectionTranslationId: E
    };
    u.value && d.value === "expand" && (L.existingSectionTitle = u.value), y && (L.captchaId = y, L.captchaWord = S);
    const T = yield vt.publishTranslation(
      L
    );
    return T.publishFeedbackMessage === null ? h(T.pageId, T.revisionId) : f(), T;
  });
  return {
    closePublishDialog: g,
    doPublish: (y = null, S = null) => b(void 0, null, function* () {
      c.value = "pending", i.value = !0;
      let x;
      try {
        x = yield w(
          S == null ? void 0 : S.id,
          y
        );
      } catch (E) {
        if (E instanceof jo)
          return e.commit("application/setIsLoginDialogOn", !0), null;
        throw E;
      }
      return x;
    }),
    isPublishDialogActive: i,
    publishStatus: c
  };
}, i9 = window.Vue.computed, r9 = () => {
  const e = qe(), { sourceSection: t } = te(), { getCurrentTitleByLanguage: n } = _n(), {
    sourceLanguageURLParameter: o,
    targetLanguageURLParameter: s
  } = B(), a = i9(
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
}, l9 = () => {
  const { targetLanguageURLParameter: e } = B(), { sourceSection: t } = te();
  return () => {
    const n = Wt.getMTScoreForPageSection(
      t.value,
      e.value
    ), o = Wt.getScoreStatus(n);
    if (o === "success")
      return null;
    const s = 100 - n, a = o === "failure" ? "error" : "warning";
    let r, l;
    return a === "warning" ? (r = mw.message("cx-sx-publisher-mt-abuse-message-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-message-body").plain()) : (r = mw.message("cx-sx-publisher-mt-abuse-error-title", s).plain(), l = mw.message("cx-sx-publisher-mt-abuse-error-body").plain()), new Ro({
      title: r,
      text: l,
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
      t.value.push(r), t.value.sort((l, u) => +u.isError - +l.isError);
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
  const e = g9(), { currentSourcePage: t } = lt(), {
    sourceLanguageURLParameter: n,
    targetLanguageURLParameter: o
  } = B(), { sourceSection: s, targetPageTitleForPublishing: a } = te();
  return (r) => b(void 0, null, function* () {
    const l = a.value, u = e.getters["application/isSandboxTarget"], d = t.value.title, i = new mw.Title(d), c = mw.config.get("wgNamespaceIds");
    if (s.value.isLeadSection && !u && i.getNamespaceId() !== c.user)
      try {
        yield ji.addWikibaseLink(
          n.value,
          o.value,
          d,
          l
        );
      } catch (g) {
        mw.log.error("Error while adding wikibase link", g);
      }
    if (!r) {
      const g = "[CX] Target URL is empty after successful publishing";
      throw mw.log.error(g), new Error(g);
    }
    location.href = r;
  });
}, Rm = window.Vue.ref, m9 = () => {
  const e = Rm(!1), t = Rm(null);
  return {
    captchaDetails: t,
    captchaDialogOn: e,
    handleCaptchaError: (s) => s && s.type === "captcha" ? (t.value = s.details, e.value = !0, !0) : (t.value = null, !1),
    onCaptchaDialogClose: () => {
      e.value = !1, t.value = null;
    }
  };
};
const ye = window.Vue.unref, We = window.Vue.createVNode, h9 = window.Vue.resolveDirective, qs = window.Vue.createElementVNode, f9 = window.Vue.withDirectives, Mo = window.Vue.withCtx, w9 = window.Vue.openBlock, v9 = window.Vue.createElementBlock, _9 = { class: "sx-publisher" }, S9 = { class: "sx-publisher__publish-panel pa-4" }, y9 = { class: "mb-2" }, x9 = ["innerHTML"], C9 = { class: "sx-publisher__section-preview pa-5" }, b9 = ["innerHTML"], zm = window.Vue.computed, k9 = window.Vue.onMounted, $9 = window.Vue.ref, V9 = window.Vue.watch, E9 = window.Vuex.useStore, Om = window.Codex.CdxButton, jm = window.Codex.CdxIcon, L9 = {
  __name: "SXPublisher",
  setup(e) {
    const t = E9(), { sourceSection: n } = te(), o = zm(() => {
      var N;
      return (N = n.value) == null ? void 0 : N.title;
    }), s = ce(), a = zm(() => t.getters["application/isSandboxTarget"] ? s.i18n(
      "cx-sx-publisher-publish-panel-sandbox-section-result"
    ) : n.value.isLeadSection ? s.i18n("cx-sx-publisher-publish-panel-lead-section-result") : s.i18n("cx-sx-publisher-publish-panel-new-section-result")), {
      captchaDetails: r,
      captchaDialogOn: l,
      handleCaptchaError: u,
      onCaptchaDialogClose: d
    } = m9(), {
      publishFeedbackMessages: i,
      isPublishingDisabled: c,
      addPublishFeedbackMessage: g,
      clearPublishFeedbackMessages: p,
      initializePublishFeedbackMessages: m
    } = d9(), h = p9(), { doPublish: f, isPublishDialogActive: w, publishStatus: v, closePublishDialog: y } = a9(), S = (N = null) => b(this, null, function* () {
      if (c.value)
        return;
      const L = yield f(N, r.value);
      if (!L)
        return;
      const { publishFeedbackMessage: T, targetUrl: R } = L;
      if (u(T)) {
        y();
        return;
      } else
        T && g(T);
      v.value = c.value ? "failure" : "success", setTimeout(() => {
        if (c.value) {
          y();
          return;
        }
        h(R);
      }, 1e3);
    });
    k9(() => m());
    const x = r9(), E = $9(!1), C = () => E.value = !0;
    return V9(E, (N) => {
      N || (p(), m());
    }), (N, L) => {
      const T = h9("i18n");
      return w9(), v9("section", _9, [
        We(n6, {
          "is-publishing-disabled": ye(c),
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
          We(ye(F), {
            justify: "end",
            class: "ma-0"
          }, {
            default: Mo(() => [
              We(ye(k), { shrink: "" }, {
                default: Mo(() => [
                  We(ye(Om), {
                    weight: "quiet",
                    "aria-label": N.$i18n("cx-sx-publisher-configure-button-aria-label"),
                    onClick: C
                  }, {
                    default: Mo(() => [
                      We(ye(jm), { icon: ye(ry) }, null, 8, ["icon"])
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
        We(J6, { "publish-feedback-messages": ye(i) }, null, 8, ["publish-feedback-messages"]),
        qs("section", C9, [
          We(ye(F), { class: "pb-5 ma-0" }, {
            default: Mo(() => [
              We(ye(k), {
                tag: "h2",
                grow: "",
                class: "sx-publisher__section-preview__title ma-0",
                innerHTML: o.value
              }, null, 8, ["innerHTML"]),
              We(ye(k), { shrink: "" }, {
                default: Mo(() => [
                  We(ye(Om), {
                    weight: "quiet",
                    "aria-label": N.$i18n("cx-sx-publisher-edit-button-aria-label"),
                    onClick: ye(x)
                  }, {
                    default: Mo(() => [
                      We(ye(jm), { icon: ye(Xc) }, null, 8, ["icon"])
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
            innerHTML: ye(n).translationHtml
          }, null, 8, b9)
        ]),
        We(j6, {
          active: E.value,
          "onUpdate:active": L[0] || (L[0] = (R) => E.value = R)
        }, null, 8, ["active"]),
        We(k6, {
          active: ye(l),
          "captcha-details": ye(r),
          onClose: ye(d),
          onPublish: L[1] || (L[1] = (R) => S(R))
        }, null, 8, ["active", "captcha-details", "onClose"]),
        We(d6, {
          active: ye(w),
          status: ye(v)
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
const Bt = window.Vue.unref, Fn = window.Vue.createVNode, no = window.Vue.withCtx, lc = window.Vue.toDisplayString, cc = window.Vue.createElementVNode, U9 = window.Vue.openBlock, I9 = window.Vue.createBlock, R9 = ["textContent"], z9 = ["textContent"], O9 = ["textContent"], Rf = {
  __name: "SXSearchArticleSuggestion",
  props: {
    suggestion: {
      type: qo,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (U9(), I9(Bt(F), {
      class: "cx-search-suggestion px-4 py-3 ma-0",
      align: "normal",
      lang: e.suggestion.language,
      dir: Bt(z.getDir)(e.suggestion.language)
    }, {
      default: no(() => [
        Fn(Bt(k), { shrink: "" }, {
          default: no(() => [
            Fn(Bt(Dc), {
              class: "cx-search-suggestion__thumbnail",
              thumbnail: e.suggestion.thumbnail,
              "thumbnail-size": 56,
              "placeholder-icon-size": 30
            }, null, 8, ["thumbnail"])
          ]),
          _: 1
        }),
        Fn(Bt(k), { class: "ms-4" }, {
          default: no(() => [
            Fn(Bt(F), {
              direction: "column",
              align: "start",
              class: "ma-0 no-wrap fill-height"
            }, {
              default: no(() => [
                Fn(Bt(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: no(() => [
                    cc("h5", {
                      class: "my-0 cx-search-suggestion__source-title",
                      textContent: lc(e.suggestion.title)
                    }, null, 8, R9)
                  ]),
                  _: 1
                }),
                Fn(Bt(k), {
                  shrink: "",
                  class: "mb-1"
                }, {
                  default: no(() => [
                    cc("p", {
                      class: "ma-0 cx-search-suggestion__source-description complementary",
                      textContent: lc(e.suggestion.description)
                    }, null, 8, z9)
                  ]),
                  _: 1
                }),
                Fn(Bt(k), {
                  class: "cx-search-suggestion__languages",
                  shrink: "",
                  align: "center"
                }, {
                  default: no(() => [
                    Fn(Bt(je), {
                      icon: Bt(V0),
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
const Gs = window.Vue.unref, Xs = window.Vue.openBlock, uc = window.Vue.createBlock, j9 = window.Vue.createCommentVNode, H9 = window.Vue.resolveDirective, q9 = window.Vue.withDirectives, Hm = window.Vue.createElementBlock, G9 = window.Vue.renderList, X9 = window.Vue.Fragment, W9 = window.Vue.normalizeClass, K9 = window.Vue.withCtx, Y9 = {
  key: 1,
  class: "sx-article-search__empty-state"
}, qm = window.Vue.computed, Q9 = window.Vue.ref, J9 = {
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
    const { sourceLanguageURLParameter: t } = B(), n = qm(() => z.getAutonym(t.value)), o = e, s = Q9(null), a = (c) => s.value = c, r = () => s.value = null, l = (c) => {
      var g;
      return ((g = o.selectedItem) == null ? void 0 : g.title) === c.title && !s.value || s.value === c.pageId;
    }, u = qm(() => o.searchInput), { searchResultsLoading: d, searchResultsSlice: i } = nu(
      t,
      u
    );
    return (c, g) => {
      const p = H9("i18n");
      return Xs(), uc(Gs(Ye), { class: "sx-article-search__results mb-0 pa-0" }, {
        default: K9(() => [
          Gs(d) ? (Xs(), uc(Gs(it), {
            key: 0,
            class: "sx-article-search__empty-state"
          })) : Gs(i).length === 0 ? q9((Xs(), Hm("p", Y9, null, 512)), [
            [p, [
              u.value,
              n.value
            ], "cx-sx-article-search-no-search-results-message"]
          ]) : j9("", !0),
          (Xs(!0), Hm(X9, null, G9(Gs(i), (m) => (Xs(), uc(Rf, {
            key: m.pageId,
            suggestion: m,
            class: W9({
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
const Z9 = window.Vue.toDisplayString, eB = window.Vue.createElementVNode, tB = window.Vue.renderList, nB = window.Vue.Fragment, dc = window.Vue.openBlock, oB = window.Vue.createElementBlock, sB = window.Vue.normalizeClass, Gm = window.Vue.createBlock, aB = window.Vue.unref, Xm = window.Vue.withCtx, iB = ["textContent"], rB = window.Vue.ref, Wm = {
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
    const n = e, o = rB(null), s = (l) => o.value = l, a = () => o.value = null, r = (l) => {
      var u;
      return ((u = n.selectedItem) == null ? void 0 : u.title) === l.title && !o.value || o.value === l.pageId;
    };
    return (l, u) => (dc(), Gm(aB(Ye), { class: "sx-article-search__suggestions pa-0" }, {
      header: Xm(() => [
        eB("h5", {
          class: "ma-0 px-4 pb-1 sx-article-search__suggestions-header",
          textContent: Z9(e.cardTitle)
        }, null, 8, iB)
      ]),
      default: Xm(() => [
        (dc(!0), oB(nB, null, tB(e.suggestions, (d) => (dc(), Gm(Rf, {
          key: d.pageId,
          suggestion: d,
          class: sB({
            "sx-article-search__suggestions-selected": r(d)
          }),
          onMouseenter: (i) => s(d.pageId),
          onMouseleave: a,
          onClick: (i) => l.$emit("suggestion-clicked", d)
        }, null, 8, ["suggestion", "class", "onMouseenter", "onClick"]))), 128))
      ]),
      _: 1
    }));
  }
}, lB = window.Vue.computed, cB = (e, t) => lB(() => {
  const o = [], s = {
    value: "other",
    props: {
      icon: D0,
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
    (r, l) => o.findIndex((u) => u === r) === l
  ).map((r) => ({
    value: r,
    props: {
      label: z.getAutonym(r),
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
    const a = (navigator.language || "").split("-")[0], r = (mw.config.get("wgULSAcceptLanguageList") || navigator.languages || []).map((u) => u.split("-")[0]), l = [
      ...s.value,
      // User's current interface language
      mw.config.get("wgUserLanguage"),
      // Current wiki's content language
      mw.config.get("wgContentLanguage"),
      a,
      ...r
    ];
    return [...new Set(l)].filter(
      (u) => u !== n.value && e.value.includes(u)
    );
  }) };
};
const gB = window.Vue.resolveDirective, pB = window.Vue.createElementVNode, gc = window.Vue.withDirectives, le = window.Vue.unref, Ws = window.Vue.withCtx, Gt = window.Vue.createVNode, Ks = window.Vue.openBlock, Km = window.Vue.createBlock, mB = window.Vue.createCommentVNode, pc = window.Vue.createElementBlock, hB = window.Vue.Fragment, fB = window.Vue.vShow, Ys = window.Vue.withModifiers, Qs = window.Vue.withKeys, wB = ["onKeydown"], vB = { class: "mb-0" }, _B = {
  key: 2,
  class: "sx-article-search__empty-state"
}, No = window.Vue.ref, SB = window.Vue.onMounted, yB = window.Vue.onBeforeUnmount, Js = window.Vue.computed, Ym = window.Vue.watch, xB = window.Vue.inject, CB = window.Vuex.useStore, bB = window.Codex.CdxButton, kB = window.Codex.CdxIcon, $B = window.Codex.CdxSearchInput, VB = 3, EB = {
  __name: "SXArticleSearch",
  setup(e) {
    const t = No(""), n = No(!1), o = No(null), s = No(!1), a = No([]), r = CB(), {
      sourceLanguageURLParameter: l,
      targetLanguageURLParameter: u
    } = B(), { supportedSourceLanguageCodes: d } = ua(), { searchResultsSlice: i } = nu(l, t), { getSuggestedSourceLanguages: c } = dB(), g = c(a), p = cB(
      l,
      g
    ), m = qe(), { fetchAllTranslations: h } = Ko();
    SB(() => b(this, null, function* () {
      var M;
      h();
      try {
        a.value.push(
          ...JSON.parse(localStorage.getItem("cxPreviousLanguages"))
        ), y();
      } catch (I) {
      }
      (M = o.value) == null || M.focus(), window.addEventListener("beforeunload", S);
    })), yB(() => {
      window.removeEventListener("beforeunload", S), S();
    });
    const f = () => {
      m.push({ name: "dashboard" });
    }, w = Nh(), v = (M) => {
      w(M, u.value), a.value.includes(M) || y();
    }, y = () => {
      a.value = [
        l.value,
        ...a.value.filter((M) => M !== l.value)
      ];
    }, S = () => {
      mw.storage.set(
        "cxPreviousLanguages",
        JSON.stringify(a.value)
      );
    }, x = (M) => {
      if (M === "other") {
        s.value = !0;
        return;
      }
      v(M);
    };
    Ym(
      l,
      () => {
        var M;
        r.dispatch("mediawiki/fetchNearbyPages"), (M = o.value) == null || M.focus();
      },
      { immediate: !0 }
    );
    const E = St();
    Ym(t, () => {
      n.value || (n.value = !0, E({
        event_type: "dashboard_search",
        translation_source_language: l.value,
        translation_target_language: u.value
      }));
    });
    const C = () => {
      s.value = !1;
    }, N = (M) => {
      s.value = !1, x(M);
    }, { fetchPreviousEditsInSource: L, previousEditsInSource: T } = Ch(), R = No([]);
    (() => L().then(() => T.value.length > 0 ? io.fetchPages(
      l.value,
      T.value
    ) : []).then((M) => {
      M = M.slice(0, VB), M = M.sort(
        (I, _) => T.value.indexOf(I.title) - T.value.indexOf(_.title)
      ), R.value = M;
    }))();
    const W = Js(() => r.getters["mediawiki/getNearbyPages"]), ke = xB("breakpoints"), ue = Js(() => ke.value.mobile), ct = ma(), De = Js(
      () => R.value && R.value.length
    ), he = Js(
      () => W.value && W.value.length
    ), { next: xe, prev: Te, keyboardNavigationContainer: Ue, selectedItem: J } = wf(t, i, R), U = (M) => ct(
      M.title,
      l.value,
      u.value,
      q.value
    ), q = Js(() => t.value ? "search_result" : De.value ? "suggestion_recent_edit" : he.value ? "suggestion_nearby" : "");
    return (M, I) => {
      const _ = gB("i18n");
      return Ks(), pc("section", {
        ref_key: "keyboardNavigationContainer",
        ref: Ue,
        class: "sx-article-search col-12 col-tablet-9 col-desktop-7 mx-auto",
        onKeydown: [
          I[5] || (I[5] = Qs(Ys((...V) => le(xe) && le(xe)(...V), ["stop", "prevent"]), ["tab"])),
          I[6] || (I[6] = Qs(Ys((...V) => le(xe) && le(xe)(...V), ["stop", "prevent"]), ["down"])),
          I[7] || (I[7] = Qs(Ys((...V) => le(Te) && le(Te)(...V), ["stop", "prevent"]), ["up"])),
          Qs(Ys(f, ["stop", "prevent"]), ["esc"]),
          I[8] || (I[8] = Qs(Ys((V) => U(le(J)), ["stop", "prevent"]), ["enter"]))
        ]
      }, [
        Gt(le(F), {
          class: "sx-article-search__header ma-0 py-3",
          align: "stretch",
          justify: "start"
        }, {
          default: Ws(() => [
            Gt(le(k), {
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
            Gt(le(k), {
              shrink: "",
              align: "start",
              class: "pe-4"
            }, {
              default: Ws(() => [
                Gt(le(bB), {
                  class: "pa-0 ms-4",
                  weight: "quiet",
                  "aria-label": M.$i18n("sx-article-search-close-button-aria-label"),
                  onClick: f
                }, {
                  default: Ws(() => [
                    Gt(le(kB), { icon: le(Wo) }, null, 8, ["icon"])
                  ]),
                  _: 1
                }, 8, ["aria-label"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Gt(le($B), {
          ref_key: "searchInputRef",
          ref: o,
          modelValue: t.value,
          "onUpdate:modelValue": I[0] || (I[0] = (V) => t.value = V),
          class: "sx-article-search__search-input",
          placeholder: M.$i18n("cx-sx-article-search-input-placeholder")
        }, null, 8, ["modelValue", "placeholder"]),
        Gt(le(ia), {
          class: "sx-article-search__language-button-group",
          items: le(p),
          active: le(l),
          onSelect: x
        }, null, 8, ["items", "active"]),
        t.value ? mB("", !0) : (Ks(), pc(hB, { key: 0 }, [
          De.value ? (Ks(), Km(Wm, {
            key: 0,
            "card-title": M.$i18n("cx-sx-article-search-recently-edited-title"),
            suggestions: R.value,
            "selected-item": le(J),
            onSuggestionClicked: I[1] || (I[1] = (V) => U(V))
          }, null, 8, ["card-title", "suggestions", "selected-item"])) : he.value ? (Ks(), Km(Wm, {
            key: 1,
            "card-title": M.$i18n("cx-sx-article-search-nearby-title"),
            suggestions: W.value,
            onSuggestionClicked: I[2] || (I[2] = (V) => U(V))
          }, null, 8, ["card-title", "suggestions"])) : gc((Ks(), pc("p", _B, null, 512)), [
            [_, void 0, "cx-sx-article-search-no-suggestions-message"]
          ])
        ], 64)),
        gc(Gt(J9, {
          "search-input": t.value,
          "selected-item": le(J),
          onSuggestionClicked: I[3] || (I[3] = (V) => U(V))
        }, null, 8, ["search-input", "selected-item"]), [
          [fB, !!t.value]
        ]),
        Gt(le(_t), {
          value: s.value,
          "onUpdate:value": I[4] || (I[4] = (V) => s.value = V),
          class: "sx-article-search-language-selector",
          fullscreen: ue.value,
          header: ue.value,
          title: M.$i18n("sx-article-search-language-selector-dialog-title"),
          onClose: C
        }, {
          default: Ws(() => [
            Gt(le(vf), {
              class: "sx-article-search-language-selector__widget col-12",
              languages: le(d),
              suggestions: le(g),
              placeholder: M.$i18n("cx-sx-language-selector-placeholder"),
              onSelect: N,
              onClose: C
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
  const e = ma(), t = iu(), { logDashboardOpenEvent: n, getEventSource: o } = bf(), {
    sourceLanguageURLParameter: s,
    targetLanguageURLParameter: a,
    pageURLParameter: r
  } = B();
  return () => b(void 0, null, function* () {
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
    component: jg,
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
    component: j4,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: o3,
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
    component: QT,
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
    component: jg,
    meta: { workflowStep: 0 }
  }
], du = YC({
  history: Kx(),
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
  if (mw.user.isAnon() || nh.assertUser().catch((i) => {
    i instanceof jo && o.commit("application/setIsLoginDialogOn", !0);
  }), o.commit("application/setPreviousRoute", t.name), t.name) {
    n();
    return;
  }
  const s = NB(), {
    sourceLanguageURLParameter: a,
    targetLanguageURLParameter: r,
    pageURLParameter: l,
    clearTranslationURLParameters: u
  } = B();
  if (!!(a.value && r.value && l.value)) {
    if (RB(
      a.value,
      r.value,
      l.value
    )) {
      const c = e.name === "sx-quick-tutorial" ? "sx-quick-tutorial" : "sx-sentence-selector";
      mc(e.name, c, n);
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
const zB = window.Vue.createApp, OB = mw.config.get("wgUserLanguage"), jB = "en", HB = mw.messages.values || {}, Jo = zB(Uy);
Jo.use(du);
Jo.use(wx);
Jo.use(av);
Jo.use(sv);
const qB = Mv({
  locale: OB,
  finalFallback: jB,
  messages: HB,
  wikilinks: !0
});
Jo.use(qB);
Jo.mount("#contenttranslation");
